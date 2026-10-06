import{t as r}from"./chunk-zystk1pz.js";import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,g as ta,h as sa,i as _a,in as kte,j as Ec,k as D4,ki as he$1,nr as D9,nt as Nte,o as ae,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,sn as m4,ti as Wx,ua as ug,wr as Kc,zi as kL}from"./main-AGY457H2.js";var ue=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Kc(0,`po-page-login`)},dependencies:[sa],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r});var ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Login Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-login></po-page-login>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-login-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return r})();var ge=(()=>{class r{poDialog=f(Nte);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(p),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Bx();Ac(0,`po-page-login`,2),pt(`p-login-submit`,function(a){return i.loginSubmit(a)}),ug(),Kc(1,`po-divider`),Ac(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),RE(`ngModelChange`,function(a){return Jv(d),DN(i.literals,a)||(i.literals=a),e_(a)}),pt(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),Ac(6,`po-input`,5),RE(`ngModelChange`,function(a){return Jv(d),DN(i.productName,a)||(i.productName=a),e_(a)}),ug(),p0(),ug(),Ac(7,`div`,3)(8,`po-input`,6),RE(`ngModelChange`,function(a){return Jv(d),DN(i.loginPattern,a)||(i.loginPattern=a),e_(a)}),ug(),p0(),Ac(9,`po-input`,7),RE(`ngModelChange`,function(a){return Jv(d),DN(i.login,a)||(i.login=a),e_(a)}),ug(),p0(),ug(),Ac(10,`div`,3)(11,`po-input`,8),RE(`ngModelChange`,function(a){return Jv(d),DN(i.exceededAttempts,a)||(i.exceededAttempts=a),e_(a)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(a){return Jv(d),DN(i.passwordPattern,a)||(i.passwordPattern=a),e_(a)}),ug(),p0(),ug(),Ac(13,`div`,3)(14,`po-input`,10),RE(`ngModelChange`,function(a){return Jv(d),DN(i.contactEmail,a)||(i.contactEmail=a),e_(a)}),ug(),p0(),Ac(15,`po-input`,11),RE(`ngModelChange`,function(a){return Jv(d),DN(i.environment,a)||(i.environment=a),e_(a)}),ug(),p0(),ug(),Ac(16,`div`,3)(17,`po-input`,12),RE(`ngModelChange`,function(a){return Jv(d),DN(i.logo,a)||(i.logo=a),e_(a)}),ug(),p0(),Ac(18,`po-input`,13),RE(`ngModelChange`,function(a){return Jv(d),DN(i.secondaryLogo,a)||(i.secondaryLogo=a),e_(a)}),ug(),p0(),ug(),Ac(19,`div`,3)(20,`po-input`,14),RE(`ngModelChange`,function(a){return Jv(d),DN(i.background,a)||(i.background=a),e_(a)}),ug(),p0(),Ac(21,`po-input`,15),RE(`ngModelChange`,function(a){return Jv(d),DN(i.support,a)||(i.support=a),e_(a)}),ug(),p0(),ug(),Ac(22,`div`,3)(23,`po-input`,16),RE(`ngModelChange`,function(a){return Jv(d),DN(i.recovery,a)||(i.recovery=a),e_(a)}),ug(),p0(),Ac(24,`po-input`,17),RE(`ngModelChange`,function(a){return Jv(d),DN(i.registerUrl,a)||(i.registerUrl=a),e_(a)}),ug(),p0(),ug(),Ac(25,`div`,3)(26,`po-checkbox-group`,18),RE(`ngModelChange`,function(a){return Jv(d),DN(i.properties,a)||(i.properties=a),e_(a)}),ug(),p0(),Ac(27,`po-radio-group`,19),RE(`ngModelChange`,function(a){return Jv(d),DN(i.componentsSize,a)||(i.componentsSize=a),e_(a)}),ug(),p0(),ug(),Kc(28,`po-divider`,20),Ac(29,`div`,3)(30,`po-input`,21),RE(`ngModelChange`,function(a){return Jv(d),DN(i.loginError,a)||(i.loginError=a),e_(a)}),ug(),p0(),Ac(31,`po-button`,22),pt(`p-click`,function(){return i.addLoginError()}),ug()(),Kc(32,`po-divider`,23),Ac(33,`div`,3)(34,`po-input`,24),RE(`ngModelChange`,function(a){return Jv(d),DN(i.passwordError,a)||(i.passwordError=a),e_(a)}),ug(),p0(),Ac(35,`po-button`,25),pt(`p-click`,function(){return i.addPasswordError()}),ug()(),Kc(36,`po-divider`,26),Ac(37,`div`,3)(38,`po-input`,27),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.property,a)||(i.customField.property=a),e_(a)}),pt(`p-change-model`,function(){return i.onChangeCustomProperties()}),ug(),p0(),Ac(39,`po-input`,28),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.value,a)||(i.customField.value=a),e_(a)}),ug(),p0(),ug(),Ac(40,`div`,3)(41,`po-input`,29),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.placeholder,a)||(i.customField.placeholder=a),e_(a)}),ug(),p0(),Ac(42,`po-input`,30),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.pattern,a)||(i.customField.pattern=a),e_(a)}),ug(),p0(),Ac(43,`po-input`,31),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),e_(a)}),ug(),p0(),ug(),Kc(44,`po-divider`),Ac(45,`div`,3)(46,`po-input`,32),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.url,a)||(i.customField.url=a),e_(a)}),pt(`p-change-model`,function(){return i.onChangeCustomProperties()}),ug(),p0(),Ac(47,`po-input`,33),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),e_(a)}),pt(`p-change-model`,function(){return i.onChangeCustomProperties()}),ug(),p0(),ug(),Kc(48,`po-divider`),Ac(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),e_(a)}),ug(),p0(),Ac(53,`po-input`,35),RE(`ngModelChange`,function(a){return Jv(d),DN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),e_(a)}),ug(),p0(),ug(),Ac(54,`div`,3)(55,`po-button`,36),pt(`p-click`,function(){return i.addCustomFieldOption()}),ug()()(),Kc(56,`br`)(57,`po-divider`),Ac(58,`div`,3)(59,`po-button`,37),pt(`p-click`,function(){return i.restore()}),ug()()()}if(l&2){let d=Zx(50);cE(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),Hp(5),TE(`ngModel`,i.literals),m0(),Hp(),TE(`ngModel`,i.productName),m0(),Hp(2),TE(`ngModel`,i.loginPattern),m0(),Hp(),TE(`ngModel`,i.login),m0(),Hp(2),TE(`ngModel`,i.exceededAttempts),m0(),Hp(),TE(`ngModel`,i.passwordPattern),m0(),Hp(2),TE(`ngModel`,i.contactEmail),m0(),Hp(),TE(`ngModel`,i.environment),m0(),Hp(2),TE(`ngModel`,i.logo),m0(),Hp(),TE(`ngModel`,i.secondaryLogo),m0(),Hp(2),TE(`ngModel`,i.background),m0(),Hp(),TE(`ngModel`,i.support),m0(),Hp(2),TE(`ngModel`,i.recovery),m0(),Hp(),TE(`ngModel`,i.registerUrl),m0(),Hp(2),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.componentsSize),cE(`p-options`,i.componentsSizeOptions),m0(),Hp(3),TE(`ngModel`,i.loginError),m0(),Hp(4),TE(`ngModel`,i.passwordError),m0(),Hp(4),TE(`ngModel`,i.customField.property),m0(),Hp(),TE(`ngModel`,i.customField.value),m0(),Hp(2),TE(`ngModel`,i.customField.placeholder),m0(),Hp(),TE(`ngModel`,i.customField.pattern),m0(),Hp(),TE(`ngModel`,i.customField.errorPattern),m0(),Hp(3),TE(`ngModel`,i.customField.url),m0(),Hp(),TE(`ngModel`,i.customField.fieldValue),m0(),Hp(5),TE(`ngModel`,i.customFieldOption.label),m0(),Hp(),TE(`ngModel`,i.customFieldOption.value),m0(),Hp(2),cE(`p-disabled`,d.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,sa],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r});var Ee=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Login Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-login
  [p-background]="background"
  [p-components-size]="componentsSize"
  [p-contact-email]="contactEmail"
  [p-custom-field]="customField"
  [p-environment]="environment"
  [p-exceeded-attempts-warning]="exceededAttempts"
  [p-hide-remember-user]="properties.includes('hideRememberUser')"
  [p-loading]="properties.includes('loading')"
  [p-literals]="customLiterals"
  [p-login]="login"
  [p-login-errors]="loginErrors"
  [p-login-pattern]="loginPattern"
  [p-logo]="logo"
  [p-password-errors]="passwordErrors"
  [p-password-pattern]="passwordPattern"
  [p-product-name]="productName"
  [p-recovery]="recovery"
  [p-register-url]="registerUrl"
  [p-secondary-logo]="secondaryLogo"
  [p-support]="support"
  (p-login-submit)="loginSubmit($event)"
>
</po-page-login>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="productName"
      [(ngModel)]="productName"
      p-clean
      p-help="A custom name that succeeds the title"
      p-label="Product Name"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="loginPattern"
      [(ngModel)]="loginPattern"
      p-clean
      p-help="Ex.: ^[a-zA-Z]*$ (Only letters)"
      p-label="Login Pattern"
    >
    </po-input>

    <po-input class="po-lg-6" name="login" [(ngModel)]="login" p-clean p-help="Ex.: podev" p-label="Login"> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="exceededAttempts"
      [(ngModel)]="exceededAttempts"
      p-clean
      p-help="Ex.: 5"
      p-label="Exceeded Attempts Warning"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="passwordPattern"
      [(ngModel)]="passwordPattern"
      p-clean
      p-help="Ex.: ^(\\d*)$ (Only numbers)"
      p-label="Password Pattern"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="contactMail" [(ngModel)]="contactEmail" p-clean p-label="Contact Email"> </po-input>

    <po-input class="po-lg-6" name="environment" [(ngModel)]="environment" p-clean p-label="Environment"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>

    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="background" [(ngModel)]="background" p-clean p-label="Background"> </po-input>

    <po-input class="po-lg-6" name="support" [(ngModel)]="support" p-clean p-label="Support"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="recovery" [(ngModel)]="recovery" p-clean p-label="Recovery"> </po-input>

    <po-input class="po-lg-6" name="registerUrl" [(ngModel)]="registerUrl" p-clean p-label="Register URL"> </po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <po-divider p-label="Login Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-md-8" name="loginError" [(ngModel)]="loginError" p-clean p-label="Login Error"> </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Login Error" (p-click)="addLoginError()"> </po-button>
  </div>

  <po-divider p-label="Password Errors"></po-divider>

  <div class="po-row">
    <po-input class="po-lg-8" name="passwordError" [(ngModel)]="passwordError" p-clean p-label="Password Error">
    </po-input>

    <po-button class="po-md-4 po-mt-4" p-label="Add Password Error" (p-click)="addPasswordError()"> </po-button>
  </div>

  <po-divider p-label="Custom Field"></po-divider>

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldProperty"
      [(ngModel)]="customField.property"
      p-clean
      p-help="Ex.: domain"
      p-label="Custom Field Property"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldValue"
      [(ngModel)]="customField.value"
      p-clean
      p-help="Ex.: JV01"
      p-label="Custom Field Value"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-lg-4"
      name="customFieldPlaceholder"
      [(ngModel)]="customField.placeholder"
      p-clean
      p-help="Ex.: Enter your domain"
      p-label="Custom Field Placeholder"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldPattern"
      [(ngModel)]="customField.pattern"
      p-clean
      p-help="Ex.: [a-z]"
      p-label="Custom Field Pattern"
    >
    </po-input>

    <po-input
      class="po-lg-4"
      name="customFieldErrorPattern"
      [(ngModel)]="customField.errorPattern"
      p-clean
      p-help="Ex.: Value doesn\`t match expected"
      p-label="Custom Field Error Pattern"
    >
    </po-input>
  </div>

  <po-divider />

  <div class="po-row">
    <po-input
      class="po-lg-6"
      name="customFieldComboUrl"
      [(ngModel)]="customField.url"
      p-clean
      p-help="Ex.: https://po-sample-api.onrender.com/v1/heroes"
      p-label="Custom Field URL"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>

    <po-input
      class="po-lg-6"
      name="customFieldComboValue"
      [(ngModel)]="customField.fieldValue"
      p-clean
      p-help="Property to specify the return field. Ex.: value, nickname, label"
      p-label="Custom Field Field Value"
      (p-change-model)="onChangeCustomProperties()"
    >
    </po-input>
  </div>

  <po-divider />

  <form #formCustomFieldOptions="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="customFieldOptionLabel"
        [(ngModel)]="customFieldOption.label"
        p-clean
        p-label="Custom Field Option Label"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="customFieldOptionValue"
        [(ngModel)]="customFieldOption.value"
        p-clean
        p-label="Custom Field Option Value"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-4"
        p-label="Add Custom Field Option"
        [p-disabled]="formCustomFieldOptions.invalid"
        (p-click)="addCustomFieldOption()"
      >
      </po-button>
    </div>
  </form>

  <br />

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { PoPageLogin, PoPageLoginCustomField, PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-labs',
  templateUrl: './sample-po-page-login-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  background: string;
  componentsSize: string;
  contactEmail: string;
  customField: PoPageLoginCustomField;
  customFieldOption: any;
  customFieldOptions: Array<PoSelectOption>;
  customLiterals: PoPageLoginLiterals;
  environment: string;
  exceededAttempts: number;
  secondaryLogo: string;
  literals: string;
  login: string;
  loginPattern: string;
  loginError: string;
  loginErrors: Array<string>;
  logo: string;
  passwordError: string;
  passwordErrors: Array<string>;
  passwordPattern: string;
  productName: string;
  properties: Array<string>;
  recovery: string;
  registerUrl: string;
  support: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hideRememberUser', label: 'Hide remember user' },
    { value: 'loading', label: 'Loading' }
  ];

  ngOnInit() {
    this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({ label: this.customFieldOption.label, value: this.customFieldOption.value });
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData),
        componentsSize: this.componentsSize
      });
    }
  }

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.componentsSize = 'medium';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0;
    this.secondaryLogo = undefined;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.loginError = '';
    this.loginErrors = [];
    this.logo = undefined;
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.productName = '';
    this.recovery = '';
    this.registerUrl = '';
    this.support = '';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-login-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Me,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ge],encapsulation:2,changeDetection:1})}return r})();function Te(r,fe){if(r&1){let p=Bx();Ac(0,`po-page-login`,6),pt(`p-login-change`,function(){Jv(p);let i=Wx();return e_(i.loginChange())})(`p-login-submit`,function(i){Jv(p);let d=Wx();return e_(d.checkLogin(i))})(`p-password-change`,function(){Jv(p);let i=Wx();return e_(i.passwordChange())}),ug()}if(r&2){let p=Wx();cE(`p-custom-field`,p.customField)(`p-exceeded-attempts-warning`,p.exceededAttempts)(`p-literals`,p.literalsI18n)(`p-loading`,p.loading)(`p-password-errors`,p.passwordErrors)(`p-login-errors`,p.loginErrors)(`p-recovery`,p.passwordRecovery)}}function De(r,fe){if(r&1&&Kc(0,`po-page-blocked-user`,5),r&2){let p=Wx();cE(`p-params`,p.params)}}var Se=(()=>{class r{poI18nService=f(m4);poDialog=f(Nte);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:ae.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0})}checkLogin(p){this.loading=!0,p.login===`devpo`&&p.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(l,i){l&1&&(Ac(0,`po-container`)(1,`div`,0),Kc(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),ug()(),Rx(5,Te,1,7,`po-page-login`,4),Rx(6,De,1,1,`po-page-blocked-user`,5)),l&2&&(Hp(5),Ax(i.showPageBlocked?-1:5),Hp(),Ax(i.showPageBlocked?6:-1))},dependencies:[Ec,hoe,ta,sa],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r});var he=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Login - Human Resources`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

@if (!showPageBlocked) {
  <po-page-login
    p-hide-remember-user
    p-login-pattern="^[a-zA-Z]*$"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-password-pattern="^(\\d*)$"
    p-product-name="Human Resources"
    p-register-url="http://po.com"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-custom-field]="customField"
    [p-exceeded-attempts-warning]="exceededAttempts"
    [p-literals]="literalsI18n"
    [p-loading]="loading"
    [p-password-errors]="passwordErrors"
    [p-login-errors]="loginErrors"
    [p-recovery]="passwordRecovery"
    (p-login-change)="loginChange()"
    (p-login-submit)="checkLogin($event)"
    (p-password-change)="passwordChange()"
  >
  </po-page-login>
}

@if (showPageBlocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="exceededAttempts"
    p-url-back="https://po-ui.io/documentation/po-page-login"
    [p-params]="params"
  >
  </po-page-blocked-user>
}
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoDialogService, PoI18nService } from '@po-ui/ng-components';
import {
  PoModalPasswordRecoveryType,
  PoPageBlockedUserReasonParams,
  PoPageLoginCustomField,
  PoPageLoginLiterals,
  PoPageLoginRecovery
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-human-resources',
  templateUrl: './sample-po-page-login-human-resources.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginHumanResourcesComponent implements OnDestroy, OnInit {
  private poI18nService = inject(PoI18nService);
  private poDialog = inject(PoDialogService);

  customField: PoPageLoginCustomField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  attempts = 3;
  exceededAttempts: number;
  literalsI18n: PoPageLoginLiterals;
  loading: boolean = false;
  loginErrors = [];
  passwordErrors = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 24 };
  passwordRecovery: PoPageLoginRecovery = {
    url: 'https://po-sample-api.onrender.com/v1/users',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'support@mail.com'
  };
  showPageBlocked: boolean = false;

  private i18nSubscription: Subscription;

  ngOnDestroy() {
    this.i18nSubscription.unsubscribe();
  }

  ngOnInit() {
    this.i18nSubscription = this.poI18nService.getLiterals().subscribe(literals => {
      this.literalsI18n = literals;
      this.exceededAttempts = 0;
    });
  }

  checkLogin(formData) {
    this.loading = true;

    if (formData.login === 'devpo' && formData.password === '1986') {
      this.passwordErrors = [];
      this.exceededAttempts = 0;
      this.loginErrors = [];

      setTimeout(() => {
        this.poDialog.alert({
          ok: () => (this.loading = false),
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });
      }, 3000);
    } else {
      this.loading = false;
      this.generateAttempts();
      this.passwordErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
      this.loginErrors = ['Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente.'];
    }
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  private generateAttempts() {
    if (this.attempts >= 1) {
      this.attempts--;
      this.exceededAttempts = this.attempts;
    }
    if (this.attempts === 0) {
      this.showPageBlocked = true;
    }
  }
}
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),ug(),Ac(23,`pre`,9),vN(24,`/**
 * Exemplo de configura\xE7\xE3o de um m\xF3dulo com i18n.
 */

// import { NgModule } from '@angular/core';

// import { PoModule } from '@po-ui/ng-components/po.module';
// import { PoI18nConfig, PoI18nModule } from '@po-ui/ng-components/services/po-i18n';

// import { SamplePoPageLoginHumanResourcesComponent } from './sample-po-page-login-human-resources.component';

// const humanResourcesEnLiterals = {
//   loginErrorPattern: 'Invalid ID',
//   loginPlaceholder: 'Insert your ID',
//   passwordErrorPattern: 'Invalid PIN',
//   passwordPlaceholder: 'Insert your PIN',
//   submitLabel: 'Access your account',
//   forgotPassword: 'Forgot your ID or PIN?',
//   highlightInfo: 'For us the future is now'
// };

// const humanResourcesEsLiterals = {
//   loginErrorPattern: 'ID invalido',
//   loginPlaceholder: 'Inserte su ID',
//   passwordErrorPattern: 'Contrase\xF1a incorrecta',
//   passwordPlaceholder: 'Inserte su contrase\xF1a',
//   submitLabel: 'Accede a su cuenta',
//   forgotPassword: '\xBFOlvid\xF3 su ID o contrase\xF1a?',
//   highlightInfo: 'Para nosotros el futuro es ahora'
// };

// const humanResourcesPtLiterals = {
// loginErrorPattern: 'ID inv\xE1lido',
//   loginPlaceholder: 'Insira seu ID',
//   passwordErrorPattern: 'Senha incorreta',
//   passwordPlaceholder: 'Insira sua senha',
//   submitLabel: 'Acesse a sua conta',
//   forgotPassword: 'Esqueceu seu ID ou sua senha?',
//   highlightInfo: 'Para n\xF3s o futuro \xE9 agora'
// };

// const poI18nConfig: PoI18nConfig = {
//   contexts: {
//     general: {
//       'en': humanResourcesEnLiterals,
//       'es': humanResourcesEsLiterals,
//       'pt': humanResourcesPtLiterals,
//     }
//   },
//   default: {
//    context: 'general',
//    cache: true
//   }
// };

// @NgModule({
//   imports: [
//     PoModule,
//     PoI18nModule.config(poI18nConfig)
//   ],
//   declarations: [
//     SamplePoPageLoginHumanResourcesComponent
//   ],
//   exports: [],
//   providers: []
// })
// export class SamplePoPageLoginHumanResourcesModule { }
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-page-login-human-resources`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ae,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return r})();var xe=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(p){p?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Hn({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(l,i){l&1&&(Ac(0,`po-container`)(1,`div`,0),Kc(2,`po-info`,1)(3,`po-info`,2),ug()(),Ac(4,`po-page-login`,3),pt(`p-language-change`,function(m){return i.changeLanguage(m)}),ug()),l&2&&(Hp(4),cE(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[Ec,hoe,sa],encapsulation:2,changeDetection:1})}return r$1})();var Be=r=>({"docs-sample-code-tabs":r});var be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Login - Automatic Service`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your ID Sample Login" p-value="admin"></po-info>
    <po-info class="po-md-2" p-label="Forgot your ID Sample Password" p-value="admin"></po-info>
  </div>
</po-container>
<po-page-login
  p-authentication-url="https://po-sample-api.onrender.com/v1/users/authentication"
  p-blocked-url="/documentation/po-page-blocked-user"
  p-authentication-type="Bearer"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  [p-languages]="languages"
  [p-literals]="literals"
  (p-language-change)="changeLanguage($event)"
>
</po-page-login>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoLanguage } from '@po-ui/ng-components';
import { PoPageLoginLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-login-automatic-service',
  templateUrl: './sample-po-page-login-automatic-service.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginAutomaticServiceComponent {
  literals: PoPageLoginLiterals;
  japoneseLiterals: PoPageLoginLiterals = {
    welcome: '\u3088\u3046\u3053\u305D',
    loginLabel: '\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    loginPlaceholder: '\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordErrorPattern: '\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981',
    passwordLabel: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    passwordPlaceholder: '\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
    submitLabel: '\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0',
    submittedLabel: '\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...',
    rememberUser: '\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3',
    rememberUserHint: '\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059',
    loginHint: \`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\`
  };

  languages: Array<PoLanguage> = [
    { language: 'pt', description: 'Portugu\xEAs' },
    { language: 'jp', description: '\u65E5\u672C\u8A9E' }
  ];

  changeLanguage(language: PoLanguage) {
    if (language?.language === 'jp') {
      this.literals = { ...this.japoneseLiterals };
    } else {
      this.literals = {};
    }
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-login-automatic-service`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,xe],encapsulation:2,changeDetection:1})}return r})();var ve=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do template do po-page-login.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoPageLoginComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-page-login`),ug(),vN(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),ug(),Ac(18,`p`),vN(19,`A propriedade `),Ac(20,`code`),vN(21,`p-authentication-url`),ug(),vN(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Ac(23,`em`),vN(24,`client side`),ug(),vN(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Ac(26,`em`),vN(27,`propriedades`),ug(),vN(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ug(),Ac(29,`p`),vN(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ac(31,`em`),vN(32,`assets`),ug(),vN(33,` no arquivo `),Ac(34,`strong`),vN(35,`angular.json`),ug(),vN(36,` da aplicação na seguinte ordem:`),ug(),Ac(37,`pre`)(38,`code`),vN(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ug()()(),Ac(40,`div`,6)(41,`h4`,7),vN(42,`Seletor`),ug(),Ac(43,`pre`,8),vN(44,`<po-page-login
    p-authentication-type="PoPageLoginAuthenticationType"
    p-authentication-url="string"
    p-background="string"
    p-blocked-url="string"
    p-components-size="string"
    p-contact-email="string"
    p-custom-field="string | PoPageLoginCustomField"
    p-environment="string"
    p-exceeded-attempts-warning="number"
    p-hide-label-status="boolean"
    p-hide-password-peek="boolean"
    p-hide-remember-user="boolean"
    (p-language-change)="EventEmitter"
    p-languages="Array<PoLanguage>"
    p-literals="PoPageLoginLiterals"
    p-loading="boolean"
    p-login="string"
    (p-login-change)="EventEmitter"
    p-login-errors="string[]"
    p-login-pattern="string"
    (p-login-submit)="EventEmitter"
    p-logo="string"
    p-no-autocomplete-login="boolean"
    p-no-autocomplete-password="boolean"
    (p-password-change)="EventEmitter"
    p-password-errors="string[]"
    p-password-pattern="string"
    p-product-name="string"
    p-recovery="string | Function | PoPageLoginRecovery"
    p-register-url="string"
    p-secondary-logo="string"
    p-support="string | Function" >
</po-page-login>
`),ug()(),Ac(45,`h4`,9),vN(46,`Propriedades`),ug(),Ac(47,`table`,10)(48,`tr`,11)(49,`th`,12),vN(50,`Nome`),ug(),Ac(51,`th`,12),vN(52,`Tipo`),ug(),Ac(53,`th`,12),vN(54,`Padrão`),ug(),Ac(55,`th`,12),vN(56,`Descrição`),ug()(),Ac(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),vN(61,` p-authentication-type`),Kc(62,`br`),ug()()(),Ac(63,`td`,17)(64,`code`,18),vN(65,`PoPageLoginAuthenticationType`),ug()(),Ac(66,`td`,19)(67,`p`)(68,`code`),vN(69,`PoPageLoginAuthenticationType.Basic`),ug()()(),Ac(70,`td`,20)(71,`em`)(72,`strong`),vN(73,`(opcional)`),ug()(),Ac(74,`p`),vN(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),Ac(76,`code`),vN(77,`Basic`),ug(),vN(78,` e `),Ac(79,`code`),vN(80,`Bearer`),ug(),vN(81,`.`),ug(),Ac(82,`blockquote`)(83,`p`),vN(84,`Caso o tipo definido seja `),Ac(85,`code`),vN(86,`Basic`),ug(),vN(87,`, o componente fará uma requisição `),Ac(88,`code`),vN(89,`POST`),ug(),vN(90,` contendo:`),ug()(),Ac(91,`pre`)(92,`code`),vN(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),ug()(),Ac(94,`blockquote`)(95,`p`),vN(96,`Caso o tipo definido seja `),Ac(97,`code`),vN(98,`Bearer`),ug(),vN(99,`, o componente fará uma requisição `),Ac(100,`code`),vN(101,`POST`),ug(),vN(102,` contendo:`),ug()(),Ac(103,`pre`)(104,`code`),vN(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),ug()()()(),Ac(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),vN(110,` p-authentication-url`),Kc(111,`br`),ug()()(),Ac(112,`td`,17)(113,`code`,21),vN(114,`string`),ug()(),Ac(115,`td`,19),vN(116,`-`),ug(),Ac(117,`td`,20)(118,`em`)(119,`strong`),vN(120,`(opcional)`),ug()(),Ac(121,`p`),vN(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),Ac(123,`code`),vN(124,`p-login-submit`),ug(),vN(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),ug(),Ac(126,`h3`),vN(127,`Processos`),ug(),Ac(128,`p`),vN(129,`Ao digitar um valor válido no campo de login/password e pressionar `),Ac(130,`strong`),vN(131,`Enter`),ug(),vN(132,`, o componente fará uma requisição `),Ac(133,`code`),vN(134,`POST`),ug(),vN(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),ug(),Ac(136,`pre`)(137,`code`),vN(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),ug()(),Ac(139,`p`),vN(140,`Em caso de `),Ac(141,`strong`),vN(142,`sucesso`),ug(),vN(143,`, o objeto de retorno é armazenado no `),Ac(144,`code`),vN(145,`sessionStorage`),ug(),vN(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Ac(147,`code`),vN(148,`/`),ug(),vN(149,`.`),ug(),Ac(150,`pre`)(151,`code`),vN(152,`200:
{
  user: user
}
`),ug()(),Ac(153,`p`),vN(154,`Em caso de `),Ac(155,`strong`),vN(156,`erro`),ug(),vN(157,` na autenticação, espera-se o seguinte retorno:`),ug(),Ac(158,`pre`)(159,`code`),vN(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),ug()(),Ac(161,`blockquote`)(162,`p`),vN(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),Ac(164,`code`),vN(165,`p-exceeded-attempts-warning`),ug(),vN(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Ac(167,`code`),vN(168,`p-login-errors`),ug(),vN(169,` e
`),Ac(170,`code`),vN(171,`p-password-errors`),ug(),vN(172,` conforme retorno abaixo:`),ug()(),Ac(173,`pre`)(174,`code`),vN(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),ug()(),Ac(176,`blockquote`)(177,`p`),vN(178,`Caso o valor atribuído para `),Ac(179,`code`),vN(180,`p-exceeded-attempts-warning`),ug(),vN(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Ac(182,`code`),vN(183,`p-blocked-url`),ug(),vN(184,` e o usuário será redirecionado para uma tela de bloqueio.`),ug()(),Ac(185,`p`)(186,`em`),vN(187,`Processo finalizado.`),ug()(),Kc(188,`hr`),Ac(189,`h4`),vN(190,`Praticidade`),ug(),Ac(191,`p`),vN(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Ac(193,`code`),vN(194,`po-page-login`),ug(),vN(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Ac(196,`code`),vN(197,`/login`),ug(),vN(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),ug(),Ac(199,`pre`)(200,`code`),vN(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'login', component: PoPageLoginComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/users/authentication',
      environment: 'development',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      },
      registerUrl: '/new-password',
      authenticationType: PoPageLoginAthenticationType.Basic
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),ug()(),Ac(202,`p`),vN(203,`O metadado `),Ac(204,`code`),vN(205,`serviceApi`),ug(),vN(206,` deve ser a `),Ac(207,`strong`),vN(208,`url`),ug(),vN(209,` para requisição dos recursos de autenticação, o `),Ac(210,`code`),vN(211,`environment`),ug(),vN(212,` alimenta a propriedade
`),Ac(213,`code`),vN(214,`p-environment`),ug(),vN(215,`, `),Ac(216,`code`),vN(217,`recovery`),ug(),vN(218,` é a interface `),Ac(219,`code`),vN(220,`PoPageLoginRecovery`),ug(),vN(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Ac(222,`code`),vN(223,`registerUrl`),ug(),vN(224,` alimenta a propriedade `),Ac(225,`code`),vN(226,`p-register-url`),ug(),vN(227,` e `),Ac(228,`code`),vN(229,`authenticationType`),ug(),vN(230,` que define a propriedade `),Ac(231,`code`),vN(232,`p-authentication-type`),ug(),vN(233,`.`),ug(),Ac(234,`blockquote`)(235,`p`),vN(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),ug()()()(),Ac(237,`tr`,13)(238,`td`,14)(239,`div`,15)(240,`span`,16),vN(241,` p-background`),Kc(242,`br`),ug()()(),Ac(243,`td`,17)(244,`code`,21),vN(245,`string`),ug()(),Ac(246,`td`,19),vN(247,`-`),ug(),Ac(248,`td`,20)(249,`em`)(250,`strong`),vN(251,`(opcional)`),ug()(),Ac(252,`p`),vN(253,`O `),Ac(254,`code`),vN(255,`p-background`),ug(),vN(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),ug(),Ac(257,`p`),vN(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),ug(),Ac(259,`p`),vN(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Ac(261,`code`),vN(262,`highlightInfo`),ug(),vN(263,`.`),ug(),Ac(264,`blockquote`)(265,`p`),vN(266,`Veja mais sobre as literais na propriedade `),Ac(267,`code`),vN(268,`p-literals`),ug(),vN(269,`.`),ug()(),Ac(270,`p`),vN(271,`Exemplos de valores válidos:`),ug(),Ac(272,`ul`)(273,`li`)(274,`strong`),vN(275,`local`),ug(),vN(276,`: `),Ac(277,`code`),vN(278,`./assets/images/login-background.png`),ug()(),Ac(279,`li`)(280,`strong`),vN(281,`url externa`),ug(),vN(282,`: `),Ac(283,`code`),vN(284,`https://po-ui.io/assets/images/login-background.png`),ug()()(),Ac(285,`blockquote`)(286,`p`),vN(287,`Essa propriedade é ignorada para aplicações mobile.`),ug()()()(),Ac(288,`tr`,13)(289,`td`,14)(290,`div`,15)(291,`span`,16),vN(292,` p-blocked-url`),Kc(293,`br`),ug()()(),Ac(294,`td`,17)(295,`code`,21),vN(296,`string`),ug()(),Ac(297,`td`,19),vN(298,`-`),ug(),Ac(299,`td`,20)(300,`em`)(301,`strong`),vN(302,`(opcional)`),ug()(),Ac(303,`p`),vN(304,`Caso o valor atribuído para `),Ac(305,`code`),vN(306,`p-exceeded-attempts-warning`),ug(),vN(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),ug()()(),Ac(308,`tr`,13)(309,`td`,14)(310,`div`,15)(311,`span`,16),vN(312,` p-components-size`),Kc(313,`br`),ug()()(),Ac(314,`td`,17)(315,`code`,21),vN(316,`string`),ug()(),Ac(317,`td`,19)(318,`p`)(319,`code`),vN(320,`medium`),ug()()(),Ac(321,`td`,20)(322,`em`)(323,`strong`),vN(324,`(opcional)`),ug()(),Ac(325,`p`),vN(326,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(327,`ul`)(328,`li`)(329,`code`),vN(330,`small`),ug(),vN(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(332,`li`)(333,`code`),vN(334,`medium`),ug(),vN(335,`: aplica a medida medium de cada componente.`),ug()(),Ac(336,`blockquote`)(337,`p`),vN(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(339,`code`),vN(340,`medium`),ug(),vN(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(342,`a`,22),vN(343,`po-theme`),ug(),vN(344,`.`),ug()()()(),Ac(345,`tr`,13)(346,`td`,14)(347,`div`,15)(348,`span`,16),vN(349,` p-contact-email`),Kc(350,`br`),ug()()(),Ac(351,`td`,17)(352,`code`,21),vN(353,`string`),ug()(),Ac(354,`td`,19),vN(355,`-`),ug(),Ac(356,`td`,20)(357,`em`)(358,`strong`),vN(359,`(opcional)`),ug()(),Ac(360,`p`),vN(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),ug()()(),Ac(362,`tr`,13)(363,`td`,14)(364,`div`,15)(365,`span`,16),vN(366,` p-custom-field`),Kc(367,`br`),ug()()(),Ac(368,`td`,17)(369,`code`,21),vN(370,`string `),ug(),Ac(371,`code`,23),vN(372,` PoPageLoginCustomField`),ug()(),Ac(373,`td`,19),vN(374,`-`),ug(),Ac(375,`td`,20)(376,`em`)(377,`strong`),vN(378,`(opcional)`),ug()(),Ac(379,`p`),vN(380,`Ao informar um valor do tipo `),Ac(381,`code`),vN(382,`string`),ug(),vN(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Ac(384,`code`),vN(385,`literals`),ug(),vN(386,` como `),Ac(387,`code`),vN(388,`customFieldErrorPattern`),ug(),vN(389,` e `),Ac(390,`code`),vN(391,`customFieldPlaceholder`),ug(),vN(392,`.`),ug(),Ac(393,`p`),vN(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),Ac(395,`code`),vN(396,`PoPageLoginCustomField`),ug(),vN(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Ac(398,`code`),vN(399,`po-input`),ug(),vN(400,`, `),Ac(401,`code`),vN(402,`po-combo`),ug(),vN(403,` especificamente para servi\xE7os
ou `),Ac(404,`code`),vN(405,`po-select`),ug(),vN(406,` para valores fixos.`),ug(),Ac(407,`p`),vN(408,`Abaixo seguem os exemplos de cada tipo de campo.`),ug(),Ac(409,`p`)(410,`code`),vN(411,`po-input`),ug(),vN(412,`:`),ug(),Ac(413,`pre`)(414,`code`),vN(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),ug()(),Ac(416,`p`)(417,`code`),vN(418,`po-combo`),ug(),vN(419,`:`),ug(),Ac(420,`pre`)(421,`code`),vN(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),ug()(),Ac(423,`p`)(424,`code`),vN(425,`po-select`),ug(),vN(426,`:`),ug(),Ac(427,`pre`)(428,`code`),vN(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),ug()(),Ac(430,`p`),vN(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),ug()()(),Ac(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),vN(436,` p-environment`),Kc(437,`br`),ug()()(),Ac(438,`td`,17)(439,`code`,21),vN(440,`string`),ug()(),Ac(441,`td`,19),vN(442,`-`),ug(),Ac(443,`td`,20)(444,`em`)(445,`strong`),vN(446,`(opcional)`),ug()(),Ac(447,`p`),vN(448,`Adiciona uma `),Ac(449,`code`),vN(450,`tag`),ug(),vN(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),ug(),Ac(452,`blockquote`)(453,`p`),vN(454,`Essa propriedade limita o texto em 40 caracteres.`),ug()()()(),Ac(455,`tr`,13)(456,`td`,14)(457,`div`,15)(458,`span`,16),vN(459,` p-exceeded-attempts-warning`),Kc(460,`br`),ug()()(),Ac(461,`td`,17)(462,`code`,24),vN(463,`number`),ug()(),Ac(464,`td`,19)(465,`p`)(466,`code`),vN(467,`0`),ug()()(),Ac(468,`td`,20)(469,`em`)(470,`strong`),vN(471,`(opcional)`),ug()(),Ac(472,`p`),vN(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),ug(),Ac(474,`blockquote`)(475,`p`),vN(476,`Caso tenha algum valor atribuído para o atributo `),Ac(477,`code`),vN(478,`p-authentication-url`),ug(),vN(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Ac(480,`code`),vN(481,`p-exceeded-attempts-warning`),ug(),vN(482,`, o valor considerado será o do retorno da requisição.`),ug()()()(),Ac(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),vN(487,` p-hide-label-status`),Kc(488,`br`),ug()()(),Ac(489,`td`,17)(490,`code`,25),vN(491,`boolean`),ug()(),Ac(492,`td`,19)(493,`p`)(494,`code`),vN(495,`false`),ug()()(),Ac(496,`td`,20)(497,`em`)(498,`strong`),vN(499,`(opcional)`),ug()(),Ac(500,`p`),vN(501,`Indica se o status do `),Ac(502,`code`),vN(503,`model`),ug(),vN(504,` do switch de lembrar o usuário será escondido visualmente.`),ug(),Ac(505,`blockquote`)(506,`p`),vN(507,`Por padrão será atribuído `),Ac(508,`code`),vN(509,`false`),ug(),vN(510,`.`),ug()()()(),Ac(511,`tr`,13)(512,`td`,14)(513,`div`,15)(514,`span`,16),vN(515,` p-hide-password-peek`),Kc(516,`br`),ug()()(),Ac(517,`td`,17)(518,`code`,25),vN(519,`boolean`),ug()(),Ac(520,`td`,19)(521,`p`)(522,`code`),vN(523,`false`),ug()()(),Ac(524,`td`,20)(525,`em`)(526,`strong`),vN(527,`(opcional)`),ug()(),Ac(528,`p`),vN(529,`Permite esconder a função de espiar a senha digitada.`),ug()()(),Ac(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),vN(534,` p-hide-remember-user`),Kc(535,`br`),ug()()(),Ac(536,`td`,17)(537,`code`,25),vN(538,`boolean`),ug()(),Ac(539,`td`,19)(540,`p`)(541,`code`),vN(542,`false`),ug()()(),Ac(543,`td`,20)(544,`em`)(545,`strong`),vN(546,`(opcional)`),ug()(),Ac(547,`p`),vN(548,`Esconde a função "Lembrar usuário" do formulário de login.`),ug(),Ac(549,`p`),vN(550,`Quando essa propriedade é setada com `),Ac(551,`code`),vN(552,`true`),ug(),vN(553,` a propriedade `),Ac(554,`code`),vN(555,`rememberUser`),ug(),vN(556,` enviada no evento `),Ac(557,`code`),vN(558,`p-login-submit`),ug(),vN(559,` ser\xE1 sempre
`),Ac(560,`code`),vN(561,`false`),ug(),vN(562,`.`),ug(),Ac(563,`blockquote`)(564,`p`),vN(565,`Veja a propriedade `),Ac(566,`code`),vN(567,`p-literals`),ug(),vN(568,` para customizar a literal `),Ac(569,`code`),vN(570,`rememberUser`),ug(),vN(571,`.`),ug()()()(),Ac(572,`tr`,13)(573,`td`,14)(574,`div`,26)(575,`span`,27),vN(576,` (p-language-change)`),Kc(577,`br`),ug()()(),Ac(578,`td`,17)(579,`code`,28),vN(580,`EventEmitter`),ug()(),Ac(581,`td`,19),vN(582,`-`),ug(),Ac(583,`td`,20)(584,`em`)(585,`strong`),vN(586,`(opcional)`),ug()(),Ac(587,`p`),vN(588,`Evento disparado quando o usuário alterar o idioma da página.`),ug(),Ac(589,`p`),vN(590,`Esse evento receberá como parâmetro um objeto do tipo `),Ac(591,`code`),vN(592,`PoLanguage`),ug(),vN(593,` com a linguagem selecionada.`),ug()()(),Ac(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),vN(598,` p-languages`),Kc(599,`br`),ug()()(),Ac(600,`td`,17)(601,`code`,29),vN(602,`Array<PoLanguage>`),ug()(),Ac(603,`td`,19),vN(604,`-`),ug(),Ac(605,`td`,20)(606,`em`)(607,`strong`),vN(608,`(opcional)`),ug()(),Ac(609,`p`),vN(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),ug(),Ac(611,`p`),vN(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),ug(),Ac(613,`p`),vN(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),ug(),Ac(615,`p`),vN(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),Ac(617,`code`),vN(618,`i18n`),ug(),vN(619,` e não mostrará o combo de seleção.`),ug(),Ac(620,`blockquote`)(621,`p`),vN(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),Ac(623,`code`),vN(624,`p-literals`),ug(),vN(625,`.`),ug()()()(),Ac(626,`tr`,13)(627,`td`,14)(628,`div`,15)(629,`span`,16),vN(630,` p-literals`),Kc(631,`br`),ug()()(),Ac(632,`td`,17)(633,`code`,30),vN(634,`PoPageLoginLiterals`),ug()(),Ac(635,`td`,19),vN(636,`-`),ug(),Ac(637,`td`,20)(638,`em`)(639,`strong`),vN(640,`(opcional)`),ug()(),Ac(641,`p`),vN(642,`Objeto com as literais usadas no `),Ac(643,`code`),vN(644,`po-page-login`),ug(),vN(645,`.`),ug(),Ac(646,`p`),vN(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(648,`pre`)(649,`code`),vN(650,`const customLiterals: PoPageLoginLiterals = {
  attempts: '{0} vez(es) ',
  createANewPasswordNow: 'Melhor criar uma senha nova agora! Voc\xEA vai poder entrar no sistema logo em seguida.',
  forgotPassword: 'Esqueceu sua senha?',
  forgotYourPassword: 'Esqueceu sua senha?',
  highlightInfo: '',
  iForgotMyPassword: 'Esqueci minha senha',
  ifYouTryHarder: 'Se tentar mais ',
  welcome: 'Boas-vindas',
  loginErrorPattern: 'Login obrigat\xF3rio',
  loginHint: 'Caso n\xE3o possua usu\xE1rio entre em contato com o suporte',
  loginLabel: 'Insira seu usu\xE1rio',
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordErrorPattern: 'Senha obrigat\xF3ria',
  passwordLabel: 'Insira sua senha',
  passwordPlaceholder: 'Insira sua senha de acesso',
  customFieldErrorPattern: 'Campo customizado inv\xE1lido',
  customFieldPlaceholder: 'Por favor insira um valor',
  registerUrl: 'Novo registro',
  rememberUser: 'Lembrar usu\xE1rio',
  rememberUserHint: 'Esta op\xE7\xE3o pode ser desabilitada nas configura\xE7\xF5es do sistema',
  submitLabel: 'Acessar sistema',
  submittedLabel: 'Carregando...',
  titlePopover: 'Opa!',
  yourUserWillBeBlocked: 'sem sucesso seu usu\xE1rio ser\xE1 bloqueado e voc\xEA fica 24 horas sem poder acessar :('
};
`),ug()(),Ac(651,`p`),vN(652,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(653,`pre`)(654,`code`),vN(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),ug()(),Ac(656,`p`),vN(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(658,`pre`)(659,`code`),vN(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),ug()(),Ac(661,`blockquote`)(662,`p`),vN(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),ug()()()(),Ac(664,`tr`,13)(665,`td`,14)(666,`div`,15)(667,`span`,16),vN(668,` p-loading`),Kc(669,`br`),ug()()(),Ac(670,`td`,17)(671,`code`,25),vN(672,`boolean`),ug()(),Ac(673,`td`,19)(674,`p`)(675,`code`),vN(676,`false`),ug()()(),Ac(677,`td`,20)(678,`em`)(679,`strong`),vN(680,`(opcional)`),ug()(),Ac(681,`p`),vN(682,`Habilita um estado de carregamento ao botão de `),Ac(683,`em`),vN(684,`login`),ug(),vN(685,`.`),ug(),Ac(686,`blockquote`)(687,`p`),vN(688,`É necessário atribuir `),Ac(689,`code`),vN(690,`true`),ug(),vN(691,` à esta propriedade na função definida em `),Ac(692,`code`),vN(693,`p-login-submit`),ug(),vN(694,`.`),ug()()()(),Ac(695,`tr`,13)(696,`td`,14)(697,`div`,15)(698,`span`,16),vN(699,` p-login`),Kc(700,`br`),ug()()(),Ac(701,`td`,17)(702,`code`,21),vN(703,`string`),ug()(),Ac(704,`td`,19),vN(705,`-`),ug(),Ac(706,`td`,20)(707,`em`)(708,`strong`),vN(709,`(opcional)`),ug()(),Ac(710,`p`),vN(711,`Valor do modelo do campo de login.`),ug()()(),Ac(712,`tr`,13)(713,`td`,14)(714,`div`,26)(715,`span`,27),vN(716,` (p-login-change)`),Kc(717,`br`),ug()()(),Ac(718,`td`,17)(719,`code`,28),vN(720,`EventEmitter`),ug()(),Ac(721,`td`,19),vN(722,`-`),ug(),Ac(723,`td`,20)(724,`em`)(725,`strong`),vN(726,`(opcional)`),ug()(),Ac(727,`p`),vN(728,`Evento disparado quando o usuário alterar o input do campo login.`),ug(),Ac(729,`p`),vN(730,`Esse evento receberá como parâmetro uma variável do tipo `),Ac(731,`code`),vN(732,`string`),ug(),vN(733,` com o texto informado no campo.`),ug(),Ac(734,`blockquote`)(735,`p`),vN(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ac(737,`code`),vN(738,`p-authentication-url`),ug(),vN(739,`.`),ug()()()(),Ac(740,`tr`,13)(741,`td`,14)(742,`div`,15)(743,`span`,16),vN(744,` p-login-errors`),Kc(745,`br`),ug()()(),Ac(746,`td`,17)(747,`code`,31),vN(748,`string[]`),ug()(),Ac(749,`td`,19),vN(750,`-`),ug(),Ac(751,`td`,20)(752,`em`)(753,`strong`),vN(754,`(opcional)`),ug()(),Ac(755,`p`),vN(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),ug()()(),Ac(757,`tr`,13)(758,`td`,14)(759,`div`,15)(760,`span`,16),vN(761,` p-login-pattern`),Kc(762,`br`),ug()()(),Ac(763,`td`,17)(764,`code`,21),vN(765,`string`),ug()(),Ac(766,`td`,19),vN(767,`-`),ug(),Ac(768,`td`,20)(769,`em`)(770,`strong`),vN(771,`(opcional)`),ug()(),Ac(772,`p`),vN(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),Ac(774,`code`),vN(775,`loginErrorPattern`),ug(),vN(776,`
ser\xE1 exibida.`),ug(),Ac(777,`p`),vN(778,`Exemplos de valores válidos:`),ug(),Ac(779,`ul`)(780,`li`),vN(781,`email: `),Ac(782,`code`),vN(783,`[expressao-regular-email]`),ug()(),Ac(784,`li`),vN(785,`cpf: `),Ac(786,`code`),vN(787,`[expressao-regular-cpf]`),ug()()(),Ac(788,`blockquote`)(789,`p`),vN(790,`Veja a propriedade `),Ac(791,`code`),vN(792,`p-literals`),ug(),vN(793,` para customizar a literal `),Ac(794,`code`),vN(795,`loginErrorPattern`),ug(),vN(796,`.`),ug()()()(),Ac(797,`tr`,13)(798,`td`,14)(799,`div`,26)(800,`span`,27),vN(801,` (p-login-submit)`),Kc(802,`br`),ug()()(),Ac(803,`td`,17)(804,`code`,28),vN(805,`EventEmitter`),ug()(),Ac(806,`td`,19),vN(807,`-`),ug(),Ac(808,`td`,20)(809,`p`),vN(810,`Evento disparado ao submeter o formulário de login (apertando `),Ac(811,`code`),vN(812,`Enter`),ug(),vN(813,` dentro dos campos ou pressionando o botão de confirmação).`),ug(),Ac(814,`p`),vN(815,`Esse evento receberá como parâmetro um objeto do tipo `),Ac(816,`code`),vN(817,`PoPageLogin`),ug(),vN(818,` com os dados informados no formulário.`),ug(),Ac(819,`blockquote`)(820,`p`),vN(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ac(822,`code`),vN(823,`p-url-recovery`),ug(),vN(824,`.`),ug()(),Ac(825,`blockquote`)(826,`p`),vN(827,`Para mais detalhes consulte a documentação sobre a interface `),Ac(828,`code`),vN(829,`PoPageLogin`),ug(),vN(830,` mais abaixo.`),ug()()()(),Ac(831,`tr`,13)(832,`td`,14)(833,`div`,15)(834,`span`,16),vN(835,` p-logo`),Kc(836,`br`),ug()()(),Ac(837,`td`,17)(838,`code`,21),vN(839,`string`),ug()(),Ac(840,`td`,19),vN(841,`-`),ug(),Ac(842,`td`,20)(843,`em`)(844,`strong`),vN(845,`(opcional)`),ug()(),Ac(846,`p`),vN(847,`Caminho para a logomarca localizada na parte superior.`),ug(),Ac(848,`blockquote`)(849,`p`),vN(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),ug()()()(),Ac(851,`tr`,13)(852,`td`,14)(853,`div`,15)(854,`span`,16),vN(855,` p-no-autocomplete-login`),Kc(856,`br`),ug()()(),Ac(857,`td`,17)(858,`code`,25),vN(859,`boolean`),ug()(),Ac(860,`td`,19)(861,`p`)(862,`code`),vN(863,`true`),ug()()(),Ac(864,`td`,20)(865,`em`)(866,`strong`),vN(867,`(opcional)`),ug()(),Ac(868,`p`),vN(869,`Define a propriedade nativa `),Ac(870,`code`),vN(871,`autocomplete`),ug(),vN(872,` do campo como `),Ac(873,`code`),vN(874,`off`),ug(),vN(875,`.`),ug()()(),Ac(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),vN(880,` p-no-autocomplete-password`),Kc(881,`br`),ug()()(),Ac(882,`td`,17)(883,`code`,25),vN(884,`boolean`),ug()(),Ac(885,`td`,19)(886,`p`)(887,`code`),vN(888,`true`),ug()()(),Ac(889,`td`,20)(890,`em`)(891,`strong`),vN(892,`(opcional)`),ug()(),Ac(893,`p`),vN(894,`Define a propriedade nativa `),Ac(895,`code`),vN(896,`autocomplete`),ug(),vN(897,` do campo como `),Ac(898,`code`),vN(899,`off`),ug(),vN(900,`.`),ug(),Ac(901,`blockquote`)(902,`p`),vN(903,`No componente `),Ac(904,`code`),vN(905,`po-password`),ug(),vN(906,` será definido como `),Ac(907,`code`),vN(908,`new-password`),ug(),vN(909,`.`),ug()()()(),Ac(910,`tr`,13)(911,`td`,14)(912,`div`,26)(913,`span`,27),vN(914,` (p-password-change)`),Kc(915,`br`),ug()()(),Ac(916,`td`,17)(917,`code`,28),vN(918,`EventEmitter`),ug()(),Ac(919,`td`,19),vN(920,`-`),ug(),Ac(921,`td`,20)(922,`em`)(923,`strong`),vN(924,`(opcional)`),ug()(),Ac(925,`p`),vN(926,`Evento disparado quando o usuário alterar o input do campo password.`),ug(),Ac(927,`p`),vN(928,`Esse evento receberá como parâmetro uma variável do tipo `),Ac(929,`code`),vN(930,`string`),ug(),vN(931,` com o texto informado no campo.`),ug(),Ac(932,`blockquote`)(933,`p`),vN(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ac(935,`code`),vN(936,`p-authentication-url`),ug(),vN(937,`.`),ug()()()(),Ac(938,`tr`,13)(939,`td`,14)(940,`div`,15)(941,`span`,16),vN(942,` p-password-errors`),Kc(943,`br`),ug()()(),Ac(944,`td`,17)(945,`code`,31),vN(946,`string[]`),ug()(),Ac(947,`td`,19),vN(948,`-`),ug(),Ac(949,`td`,20)(950,`em`)(951,`strong`),vN(952,`(opcional)`),ug()(),Ac(953,`p`),vN(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),ug()()(),Ac(955,`tr`,13)(956,`td`,14)(957,`div`,15)(958,`span`,16),vN(959,` p-password-pattern`),Kc(960,`br`),ug()()(),Ac(961,`td`,17)(962,`code`,21),vN(963,`string`),ug()(),Ac(964,`td`,19),vN(965,`-`),ug(),Ac(966,`td`,20)(967,`em`)(968,`strong`),vN(969,`(opcional)`),ug()(),Ac(970,`p`),vN(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),Ac(972,`code`),vN(973,`passwordErrorPattern`),ug(),vN(974,`
ser\xE1 exibida.`),ug(),Ac(975,`p`),vN(976,`Exemplos de valores válidos:`),ug(),Ac(977,`ul`)(978,`li`),vN(979,`Apenas números: `),Ac(980,`code`),vN(981,`\\d?`),ug()(),Ac(982,`li`),vN(983,`Letras mínusculas: `),Ac(984,`code`),vN(985,`\\z?`),ug()()(),Ac(986,`blockquote`)(987,`p`),vN(988,`Veja a propriedade `),Ac(989,`code`),vN(990,`p-literals`),ug(),vN(991,` para customizar a literal `),Ac(992,`code`),vN(993,`passwordErrorPattern`),ug(),vN(994,`.`),ug()()()(),Ac(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),vN(999,` p-product-name`),Kc(1e3,`br`),ug()()(),Ac(1001,`td`,17)(1002,`code`,21),vN(1003,`string`),ug()(),Ac(1004,`td`,19),vN(1005,`-`),ug(),Ac(1006,`td`,20)(1007,`em`)(1008,`strong`),vN(1009,`(opcional)`),ug()(),Ac(1010,`p`),vN(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),ug()()(),Ac(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),vN(1016,` p-recovery`),Kc(1017,`br`),ug()()(),Ac(1018,`td`,17)(1019,`code`,21),vN(1020,`string `),ug(),Ac(1021,`code`,32),vN(1022,` Function `),ug(),Ac(1023,`code`,33),vN(1024,` PoPageLoginRecovery`),ug()(),Ac(1025,`td`,19),vN(1026,`-`),ug(),Ac(1027,`td`,20)(1028,`em`)(1029,`strong`),vN(1030,`(opcional)`),ug()(),Ac(1031,`p`),vN(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),ug(),Ac(1033,`p`),vN(1034,`A propriedade aceita os seguintes tipos:`),ug(),Ac(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),vN(1039,`String`),ug(),vN(1040,`: informe uma url externa ou uma rota válida;`),ug()(),Ac(1041,`li`)(1042,`p`)(1043,`strong`),vN(1044,`Function`),ug(),vN(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),ug(),Ac(1046,`pre`)(1047,`code`),vN(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),ug()()(),Ac(1049,`li`)(1050,`p`)(1051,`strong`),vN(1052,`PoPageLoginRecovery`),ug(),vN(1053,`: cria-se vínculo automático com o template `),Ac(1054,`strong`),vN(1055,`po-modal-password-recovery`),ug(),vN(1056,`.
O objeto deve conter a `),Ac(1057,`strong`),vN(1058,`url`),ug(),vN(1059,` para requisição dos recursos e pode-se definir o `),Ac(1060,`strong`),vN(1061,`tipo`),ug(),vN(1062,` de modal para recupera\xE7\xE3o de senha,
`),Ac(1063,`strong`),vN(1064,`email`),ug(),vN(1065,` para contato e `),Ac(1066,`strong`),vN(1067,`máscara`),ug(),vN(1068,` do campo de telefone.`),ug()()()()(),Ac(1069,`tr`,13)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),vN(1073,` p-register-url`),Kc(1074,`br`),ug()()(),Ac(1075,`td`,17)(1076,`code`,21),vN(1077,`string`),ug()(),Ac(1078,`td`,19),vN(1079,`-`),ug(),Ac(1080,`td`,20)(1081,`em`)(1082,`strong`),vN(1083,`(opcional)`),ug()(),Ac(1084,`p`),vN(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),ug(),Ac(1086,`p`),vN(1087,`Exemplos de valores válidos:`),ug(),Ac(1088,`ul`)(1089,`li`)(1090,`strong`),vN(1091,`local`),ug(),vN(1092,`: `),Ac(1093,`code`),vN(1094,`/home`),ug()(),Ac(1095,`li`)(1096,`strong`),vN(1097,`url externa`),ug(),vN(1098,`: `),Ac(1099,`code`),vN(1100,`https://po-ui.io`),ug()()(),Ac(1101,`blockquote`)(1102,`p`),vN(1103,`Veja a propriedade `),Ac(1104,`code`),vN(1105,`p-literals`),ug(),vN(1106,` para customizar a literal `),Ac(1107,`code`),vN(1108,`registerUrl`),ug(),vN(1109,`.`),ug()()()(),Ac(1110,`tr`,13)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),vN(1114,` p-secondary-logo`),Kc(1115,`br`),ug()()(),Ac(1116,`td`,17)(1117,`code`,21),vN(1118,`string`),ug()(),Ac(1119,`td`,19),vN(1120,`-`),ug(),Ac(1121,`td`,20)(1122,`em`)(1123,`strong`),vN(1124,`(opcional)`),ug()(),Ac(1125,`p`),vN(1126,`Caminho para a logomarca localizada no rodapé.`),ug()()(),Ac(1127,`tr`,13)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),vN(1131,` p-support`),Kc(1132,`br`),ug()()(),Ac(1133,`td`,17)(1134,`code`,21),vN(1135,`string `),ug(),Ac(1136,`code`,32),vN(1137,` Function`),ug()(),Ac(1138,`td`,19),vN(1139,`-`),ug(),Ac(1140,`td`,20)(1141,`em`)(1142,`strong`),vN(1143,`(opcional)`),ug()(),Ac(1144,`p`),vN(1145,`Exibe um botão para suporte.`),ug(),Ac(1146,`p`),vN(1147,`A propriedade aceita os seguintes tipos:`),ug(),Ac(1148,`ul`)(1149,`li`)(1150,`strong`),vN(1151,`String`),ug(),vN(1152,`: URL externa ou uma rota válida;`),ug(),Ac(1153,`li`)(1154,`strong`),vN(1155,`Function`),ug(),vN(1156,`: Função a ser disparada ao clicar no botão de suporte;`),Ac(1157,`pre`)(1158,`code`),vN(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),ug()()()()()()(),Ac(1160,`h3`),vN(1161,`Interfaces`),ug(),Ac(1162,`h4`,34)(1163,`code`,5),vN(1164,`PoPageLoginCustomField`),ug()(),Ac(1165,`div`,2)(1166,`p`),vN(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),Ac(1168,`code`),vN(1169,`po-page-login`),ug(),vN(1170,`.`),ug()(),Ac(1171,`h4`,9),vN(1172,`Propriedades`),ug(),Ac(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),vN(1176,`Nome`),ug(),Ac(1177,`th`,12),vN(1178,`Tipo`),ug(),Ac(1179,`th`,12),vN(1180,`Descrição`),ug()(),Ac(1181,`tr`,13)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),vN(1185,` errorPattern`),Kc(1186,`br`),ug()()(),Ac(1187,`td`,17)(1188,`code`,21),vN(1189,`string`),ug()(),Ac(1190,`td`,20)(1191,`em`)(1192,`strong`),vN(1193,`(opcional)`),ug()(),Ac(1194,`p`),vN(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),Ac(1196,`code`),vN(1197,`pattern`),ug(),vN(1198,` não for válida.`),ug()()(),Ac(1199,`tr`,13)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),vN(1203,` fieldValue`),Kc(1204,`br`),ug()()(),Ac(1205,`td`,17)(1206,`code`,21),vN(1207,`string`),ug()(),Ac(1208,`td`,20)(1209,`em`)(1210,`strong`),vN(1211,`(opcional)`),ug()(),Ac(1212,`p`),vN(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Ac(1214,`code`),vN(1215,`po-combo`),ug(),vN(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),ug()()(),Ac(1217,`tr`,13)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),vN(1221,` options`),Kc(1222,`br`),ug()()(),Ac(1223,`td`,17)(1224,`code`,35),vN(1225,`Array<PoSelectOption>`),ug()(),Ac(1226,`td`,20)(1227,`em`)(1228,`strong`),vN(1229,`(opcional)`),ug()(),Ac(1230,`p`),vN(1231,`Lista de opções de um `),Ac(1232,`code`),vN(1233,`po-select`),ug(),vN(1234,`.`),ug()()(),Ac(1235,`tr`,13)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),vN(1239,` pattern`),Kc(1240,`br`),ug()()(),Ac(1241,`td`,17)(1242,`code`,21),vN(1243,`string`),ug()(),Ac(1244,`td`,20)(1245,`em`)(1246,`strong`),vN(1247,`(opcional)`),ug()(),Ac(1248,`p`),vN(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Ac(1250,`code`),vN(1251,`errorPattern`),ug(),vN(1252,` será exibida.`),ug()()(),Ac(1253,`tr`,13)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),vN(1257,` placeholder`),Kc(1258,`br`),ug()()(),Ac(1259,`td`,17)(1260,`code`,21),vN(1261,`string`),ug()(),Ac(1262,`td`,20)(1263,`em`)(1264,`strong`),vN(1265,`(opcional)`),ug()(),Ac(1266,`p`),vN(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),ug()()(),Ac(1268,`tr`,13)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),vN(1272,` property`),Kc(1273,`br`),ug()()(),Ac(1274,`td`,17)(1275,`code`,21),vN(1276,`string`),ug()(),Ac(1277,`td`,20)(1278,`p`),vN(1279,`Nome da propriedade que será utilizado no campo customizado.`),ug()()(),Ac(1280,`tr`,13)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),vN(1284,` url`),Kc(1285,`br`),ug()()(),Ac(1286,`td`,17)(1287,`code`,21),vN(1288,`string`),ug()(),Ac(1289,`td`,20)(1290,`em`)(1291,`strong`),vN(1292,`(opcional)`),ug()(),Ac(1293,`p`),vN(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Ac(1295,`code`),vN(1296,`po-combo`),ug(),vN(1297,`.`),ug()()(),Ac(1298,`tr`,13)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),vN(1302,` value`),Kc(1303,`br`),ug()()(),Ac(1304,`td`,17)(1305,`code`,21),vN(1306,`string `),ug(),Ac(1307,`code`,24),vN(1308,` number`),ug()(),Ac(1309,`td`,20)(1310,`em`)(1311,`strong`),vN(1312,`(opcional)`),ug()(),Ac(1313,`p`),vN(1314,`Valor do campo customizado.`),ug()()()(),Ac(1315,`h4`,34)(1316,`code`,5),vN(1317,`PoPageLoginLiterals`),ug()(),Ac(1318,`div`,2)(1319,`p`),vN(1320,`Interface para definição das literais usadas no `),Ac(1321,`code`),vN(1322,`po-page-login`),ug(),vN(1323,`.`),ug()(),Ac(1324,`h4`,9),vN(1325,`Propriedades`),ug(),Ac(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),vN(1329,`Nome`),ug(),Ac(1330,`th`,12),vN(1331,`Tipo`),ug(),Ac(1332,`th`,12),vN(1333,`Descrição`),ug()(),Ac(1334,`tr`,13)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),vN(1338,` attempts`),Kc(1339,`br`),ug()()(),Ac(1340,`td`,17)(1341,`code`,21),vN(1342,`string`),ug()(),Ac(1343,`td`,20)(1344,`em`)(1345,`strong`),vN(1346,`(opcional)`),ug()(),Ac(1347,`p`),vN(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),ug()()(),Ac(1349,`tr`,13)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),vN(1353,` createANewPasswordNow`),Kc(1354,`br`),ug()()(),Ac(1355,`td`,17)(1356,`code`,21),vN(1357,`string`),ug()(),Ac(1358,`td`,20)(1359,`em`)(1360,`strong`),vN(1361,`(opcional)`),ug()(),Ac(1362,`p`),vN(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),ug()()(),Ac(1364,`tr`,13)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),vN(1368,` customFieldErrorPattern`),Kc(1369,`br`),ug()()(),Ac(1370,`td`,17)(1371,`code`,21),vN(1372,`string`),ug()(),Ac(1373,`td`,20)(1374,`em`)(1375,`strong`),vN(1376,`(opcional)`),ug()(),Ac(1377,`p`),vN(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),ug()()(),Ac(1379,`tr`,13)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),vN(1383,` customFieldPlaceholder`),Kc(1384,`br`),ug()()(),Ac(1385,`td`,17)(1386,`code`,21),vN(1387,`string`),ug()(),Ac(1388,`td`,20)(1389,`em`)(1390,`strong`),vN(1391,`(opcional)`),ug()(),Ac(1392,`p`),vN(1393,`Placeholder para o campo customizado.`),ug()()(),Ac(1394,`tr`,13)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),vN(1398,` forgotPassword`),Kc(1399,`br`),ug()()(),Ac(1400,`td`,17)(1401,`code`,21),vN(1402,`string`),ug()(),Ac(1403,`td`,20)(1404,`em`)(1405,`strong`),vN(1406,`(opcional)`),ug()(),Ac(1407,`p`),vN(1408,`Texto de ajuda para recuperação dos dados de acesso.`),ug()()(),Ac(1409,`tr`,13)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),vN(1413,` forgotYourPassword`),Kc(1414,`br`),ug()()(),Ac(1415,`td`,17)(1416,`code`,21),vN(1417,`string`),ug()(),Ac(1418,`td`,20)(1419,`em`)(1420,`strong`),vN(1421,`(opcional)`),ug()(),Ac(1422,`p`),vN(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),ug()()(),Ac(1424,`tr`,13)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),vN(1428,` highlightInfo`),Kc(1429,`br`),ug()()(),Ac(1430,`td`,17)(1431,`code`,21),vN(1432,`string`),ug()(),Ac(1433,`td`,20)(1434,`em`)(1435,`strong`),vN(1436,`(opcional)`),ug()(),Ac(1437,`p`),vN(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),Ac(1439,`code`),vN(1440,`p-background`),ug(),vN(1441,`.`),ug()()(),Ac(1442,`tr`,13)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),vN(1446,` iForgotMyPassword`),Kc(1447,`br`),ug()()(),Ac(1448,`td`,17)(1449,`code`,21),vN(1450,`string`),ug()(),Ac(1451,`td`,20)(1452,`em`)(1453,`strong`),vN(1454,`(opcional)`),ug()(),Ac(1455,`p`),vN(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),ug()()(),Ac(1457,`tr`,13)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),vN(1461,` ifYouTryHarder`),Kc(1462,`br`),ug()()(),Ac(1463,`td`,17)(1464,`code`,21),vN(1465,`string`),ug()(),Ac(1466,`td`,20)(1467,`em`)(1468,`strong`),vN(1469,`(opcional)`),ug()(),Ac(1470,`p`),vN(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),ug()()(),Ac(1472,`tr`,13)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),vN(1476,` loginErrorPattern`),Kc(1477,`br`),ug()()(),Ac(1478,`td`,17)(1479,`code`,21),vN(1480,`string`),ug()(),Ac(1481,`td`,20)(1482,`em`)(1483,`strong`),vN(1484,`(opcional)`),ug()(),Ac(1485,`p`),vN(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),ug()()(),Ac(1487,`tr`,13)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),vN(1491,` loginHint`),Kc(1492,`br`),ug()()(),Ac(1493,`td`,17)(1494,`code`,21),vN(1495,`string`),ug()(),Ac(1496,`td`,20)(1497,`em`)(1498,`strong`),vN(1499,`(opcional)`),ug()(),Ac(1500,`p`),vN(1501,`Texto exibido como dica para o campo de login.`),ug()()(),Ac(1502,`tr`,13)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),vN(1506,` loginLabel`),Kc(1507,`br`),ug()()(),Ac(1508,`td`,17)(1509,`code`,21),vN(1510,`string`),ug()(),Ac(1511,`td`,20)(1512,`em`)(1513,`strong`),vN(1514,`(opcional)`),ug()(),Ac(1515,`p`),vN(1516,`Texto exibido como label do campo de login.`),ug()()(),Ac(1517,`tr`,13)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),vN(1521,` loginPlaceholder`),Kc(1522,`br`),ug()()(),Ac(1523,`td`,17)(1524,`code`,21),vN(1525,`string`),ug()(),Ac(1526,`td`,20)(1527,`em`)(1528,`strong`),vN(1529,`(opcional)`),ug()(),Ac(1530,`p`),vN(1531,`Placeholder do campo de login.`),ug()()(),Ac(1532,`tr`,13)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),vN(1536,` passwordErrorPattern`),Kc(1537,`br`),ug()()(),Ac(1538,`td`,17)(1539,`code`,21),vN(1540,`string`),ug()(),Ac(1541,`td`,20)(1542,`em`)(1543,`strong`),vN(1544,`(opcional)`),ug()(),Ac(1545,`p`),vN(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),ug()()(),Ac(1547,`tr`,13)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),vN(1551,` passwordLabel`),Kc(1552,`br`),ug()()(),Ac(1553,`td`,17)(1554,`code`,21),vN(1555,`string`),ug()(),Ac(1556,`td`,20)(1557,`em`)(1558,`strong`),vN(1559,`(opcional)`),ug()(),Ac(1560,`p`),vN(1561,`Texto exibido como label do campo de password.`),ug()()(),Ac(1562,`tr`,13)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),vN(1566,` passwordPlaceholder`),Kc(1567,`br`),ug()()(),Ac(1568,`td`,17)(1569,`code`,21),vN(1570,`string`),ug()(),Ac(1571,`td`,20)(1572,`em`)(1573,`strong`),vN(1574,`(opcional)`),ug()(),Ac(1575,`p`),vN(1576,`Placeholder do campo de password.`),ug()()(),Ac(1577,`tr`,13)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),vN(1581,` registerUrl`),Kc(1582,`br`),ug()()(),Ac(1583,`td`,17)(1584,`code`,21),vN(1585,`string`),ug()(),Ac(1586,`td`,20)(1587,`em`)(1588,`strong`),vN(1589,`(opcional)`),ug()(),Ac(1590,`p`),vN(1591,`Texto exibido no link de novo cadastro.`),ug()()(),Ac(1592,`tr`,13)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),vN(1596,` rememberUser`),Kc(1597,`br`),ug()()(),Ac(1598,`td`,17)(1599,`code`,21),vN(1600,`string`),ug()(),Ac(1601,`td`,20)(1602,`em`)(1603,`strong`),vN(1604,`(opcional)`),ug()(),Ac(1605,`p`),vN(1606,`Texto exibido na função "Lembrar usuário".`),ug()()(),Ac(1607,`tr`,13)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),vN(1611,` rememberUserHint`),Kc(1612,`br`),ug()()(),Ac(1613,`td`,17)(1614,`code`,21),vN(1615,`string`),ug()(),Ac(1616,`td`,20)(1617,`em`)(1618,`strong`),vN(1619,`(opcional)`),ug()(),Ac(1620,`p`),vN(1621,`Texto exibido como dica da função "Lembrar usuário"`),ug()()(),Ac(1622,`tr`,13)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),vN(1626,` submitLabel`),Kc(1627,`br`),ug()()(),Ac(1628,`td`,17)(1629,`code`,21),vN(1630,`string`),ug()(),Ac(1631,`td`,20)(1632,`em`)(1633,`strong`),vN(1634,`(opcional)`),ug()(),Ac(1635,`p`),vN(1636,`Texto exibido no botão de confirmação da página de login.`),ug()()(),Ac(1637,`tr`,13)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),vN(1641,` submittedLabel`),Kc(1642,`br`),ug()()(),Ac(1643,`td`,17)(1644,`code`,21),vN(1645,`string`),ug()(),Ac(1646,`td`,20)(1647,`em`)(1648,`strong`),vN(1649,`(opcional)`),ug()(),Ac(1650,`p`),vN(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),ug()()(),Ac(1652,`tr`,13)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),vN(1656,` support`),Kc(1657,`br`),ug()()(),Ac(1658,`td`,17)(1659,`code`,21),vN(1660,`string`),ug()(),Ac(1661,`td`,20)(1662,`em`)(1663,`strong`),vN(1664,`(opcional)`),ug()(),Ac(1665,`p`),vN(1666,`Label do botão de suporte.`),ug()()(),Ac(1667,`tr`,13)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),vN(1671,` titlePopover`),Kc(1672,`br`),ug()()(),Ac(1673,`td`,17)(1674,`code`,21),vN(1675,`string`),ug()(),Ac(1676,`td`,20)(1677,`em`)(1678,`strong`),vN(1679,`(opcional)`),ug()(),Ac(1680,`p`),vN(1681,`Título do popover para aviso de bloqueio.`),ug()()(),Ac(1682,`tr`,13)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),vN(1686,` welcome`),Kc(1687,`br`),ug()()(),Ac(1688,`td`,17)(1689,`code`,21),vN(1690,`string`),ug()(),Ac(1691,`td`,20)(1692,`em`)(1693,`strong`),vN(1694,`(opcional)`),ug()(),Ac(1695,`p`),vN(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),ug()()(),Ac(1697,`tr`,13)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),vN(1701,` yourUserWillBeBlocked`),Kc(1702,`br`),ug()()(),Ac(1703,`td`,17)(1704,`code`,21),vN(1705,`string`),ug()(),Ac(1706,`td`,20)(1707,`em`)(1708,`strong`),vN(1709,`(opcional)`),ug()(),Ac(1710,`p`),vN(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),ug()()()(),Ac(1712,`h4`,34)(1713,`code`,5),vN(1714,`PoPageLoginRecovery`),ug()(),Ac(1715,`div`,2)(1716,`p`),vN(1717,`Interface para especificação do tipo de recuperação de senha no `),Ac(1718,`code`),vN(1719,`po-modal-password-recovery`),ug(),vN(1720,`.`),ug()(),Ac(1721,`h4`,9),vN(1722,`Propriedades`),ug(),Ac(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),vN(1726,`Nome`),ug(),Ac(1727,`th`,12),vN(1728,`Tipo`),ug(),Ac(1729,`th`,12),vN(1730,`Descrição`),ug()(),Ac(1731,`tr`,13)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),vN(1735,` contactMail`),Kc(1736,`br`),ug()()(),Ac(1737,`td`,17)(1738,`code`,21),vN(1739,`string`),ug()(),Ac(1740,`td`,20)(1741,`em`)(1742,`strong`),vN(1743,`(opcional)`),ug()(),Ac(1744,`p`),vN(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),ug()()(),Ac(1746,`tr`,13)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),vN(1750,` phoneMask`),Kc(1751,`br`),ug()()(),Ac(1752,`td`,17)(1753,`code`,21),vN(1754,`string`),ug()(),Ac(1755,`td`,20)(1756,`em`)(1757,`strong`),vN(1758,`(opcional)`),ug()(),Ac(1759,`p`),vN(1760,`Definição da máscara do campo de telefone.`),ug()()(),Ac(1761,`tr`,13)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),vN(1765,` type`),Kc(1766,`br`),ug()()(),Ac(1767,`td`,17)(1768,`code`,36),vN(1769,`PoModalPasswordRecoveryType`),ug()(),Ac(1770,`td`,20)(1771,`em`)(1772,`strong`),vN(1773,`(opcional)`),ug()(),Ac(1774,`p`),vN(1775,`Enum para especificação do tipo de recuperação de senha `),Ac(1776,`a`,37),vN(1777,`PoModalPasswordRecoveryType`),ug(),vN(1778,`.`),ug(),Ac(1779,`blockquote`)(1780,`p`),vN(1781,`Caso não seja definido valor se assume o padrão `),Ac(1782,`code`),vN(1783,`PoModalPasswordRecoveryType.Email`),ug(),vN(1784,`.`),ug()()()(),Ac(1785,`tr`,13)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),vN(1789,` url`),Kc(1790,`br`),ug()()(),Ac(1791,`td`,17)(1792,`code`,21),vN(1793,`string`),ug()(),Ac(1794,`td`,20)(1795,`p`),vN(1796,`Endpoint usado pelo template `),Ac(1797,`strong`),vN(1798,`PoModalPasswordRecovery`),ug(),vN(1799,` para requisição do recurso.`),ug(),Ac(1800,`blockquote`)(1801,`p`),vN(1802,`Saiba mais em `),Ac(1803,`a`,37),vN(1804,`PoModalPasswordRecovery`),ug(),vN(1805,`.`),ug()()()()(),Ac(1806,`h4`,34)(1807,`code`,5),vN(1808,`PoPageLogin`),ug()(),Ac(1809,`div`,2)(1810,`p`),vN(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),Ac(1812,`code`),vN(1813,`po-page-login`),ug(),vN(1814,`.`),ug()(),Ac(1815,`h4`,9),vN(1816,`Propriedades`),ug(),Ac(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),vN(1820,`Nome`),ug(),Ac(1821,`th`,12),vN(1822,`Tipo`),ug(),Ac(1823,`th`,12),vN(1824,`Descrição`),ug()(),Ac(1825,`tr`,13)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),vN(1829,` login`),Kc(1830,`br`),ug()()(),Ac(1831,`td`,17)(1832,`code`,21),vN(1833,`string`),ug()(),Ac(1834,`td`,20)(1835,`p`),vN(1836,`Login preenchido pelo usuário.`),ug()()(),Ac(1837,`tr`,13)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),vN(1841,` password`),Kc(1842,`br`),ug()()(),Ac(1843,`td`,17)(1844,`code`,21),vN(1845,`string`),ug()(),Ac(1846,`td`,20)(1847,`p`),vN(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),ug()()(),Ac(1849,`tr`,13)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),vN(1853,` rememberUser`),Kc(1854,`br`),ug()()(),Ac(1855,`td`,17)(1856,`code`,25),vN(1857,`boolean`),ug()(),Ac(1858,`td`,20)(1859,`p`),vN(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),ug()()()(),Ac(1861,`h3`),vN(1862,`Enums`),ug(),Ac(1863,`h4`,4)(1864,`code`,5),vN(1865,`PoPageLoginAuthenticationType`),ug()(),Ac(1866,`div`,2)(1867,`p`)(1868,`em`),vN(1869,`Enum`),ug(),vN(1870,` para definição do tipo de autenticação.`),ug()(),Ac(1871,`h4`,9),vN(1872,`Propriedades`),ug(),Ac(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),vN(1876,`Nome`),ug(),Ac(1877,`th`,12),vN(1878,`Descrição`),ug()(),Ac(1879,`tr`,13)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),vN(1883,` Basic`),Kc(1884,`br`),ug()()(),Ac(1885,`td`,20)(1886,`p`),vN(1887,`Autenticação Basic`),ug()()(),Ac(1888,`tr`,13)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),vN(1892,` Bearer`),Kc(1893,`br`),ug()()(),Ac(1894,`td`,20)(1895,`p`),vN(1896,`Autenticação Bearer`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var We=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(E(Qn),E(wn))};static ɵcmp=Hn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Login`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-page-login-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-page-login-basic-view`)(6,`sample-po-page-login-labs-view`)(7,`sample-po-page-login-human-resources-view`)(8,`sample-po-page-login-automatic-service-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ce,Ee,he,be,ve],encapsulation:2,changeDetection:1})}return r})()}];var Ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue$1({imports:[kL.forChild(We),kL]})}return r})();var wt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue$1({imports:[Ta,Ce]})}return r})();export{wt as DocPoPageLoginModule};