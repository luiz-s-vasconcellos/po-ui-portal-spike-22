import{t as r}from"./chunk-zystk1pz.js";import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,N as G4,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,fi as ag,gi as bL,h as za,ha as ww,jn as ybe,l as ar,li as _x,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,s as U,sa as ue$1,sr as Fx,t as Da,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ue=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&Gl(0,`po-page-login`)},dependencies:[za],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r});var ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Login Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-login></po-page-login>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-login-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return r})();var ge=(()=>{class r{poDialog=f(W0e);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(p),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Ax();Tl(0,`po-page-login`,2),ht(`p-login-submit`,function(a){return i.loginSubmit(a)}),ag(),Gl(1,`po-divider`),Tl(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),ww(`ngModelChange`,function(a){return Ky(d),uN(i.literals,a)||(i.literals=a),Xy(a)}),ht(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),Tl(6,`po-input`,5),ww(`ngModelChange`,function(a){return Ky(d),uN(i.productName,a)||(i.productName=a),Xy(a)}),ag(),a0(),ag(),Tl(7,`div`,3)(8,`po-input`,6),ww(`ngModelChange`,function(a){return Ky(d),uN(i.loginPattern,a)||(i.loginPattern=a),Xy(a)}),ag(),a0(),Tl(9,`po-input`,7),ww(`ngModelChange`,function(a){return Ky(d),uN(i.login,a)||(i.login=a),Xy(a)}),ag(),a0(),ag(),Tl(10,`div`,3)(11,`po-input`,8),ww(`ngModelChange`,function(a){return Ky(d),uN(i.exceededAttempts,a)||(i.exceededAttempts=a),Xy(a)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(a){return Ky(d),uN(i.passwordPattern,a)||(i.passwordPattern=a),Xy(a)}),ag(),a0(),ag(),Tl(13,`div`,3)(14,`po-input`,10),ww(`ngModelChange`,function(a){return Ky(d),uN(i.contactEmail,a)||(i.contactEmail=a),Xy(a)}),ag(),a0(),Tl(15,`po-input`,11),ww(`ngModelChange`,function(a){return Ky(d),uN(i.environment,a)||(i.environment=a),Xy(a)}),ag(),a0(),ag(),Tl(16,`div`,3)(17,`po-input`,12),ww(`ngModelChange`,function(a){return Ky(d),uN(i.logo,a)||(i.logo=a),Xy(a)}),ag(),a0(),Tl(18,`po-input`,13),ww(`ngModelChange`,function(a){return Ky(d),uN(i.secondaryLogo,a)||(i.secondaryLogo=a),Xy(a)}),ag(),a0(),ag(),Tl(19,`div`,3)(20,`po-input`,14),ww(`ngModelChange`,function(a){return Ky(d),uN(i.background,a)||(i.background=a),Xy(a)}),ag(),a0(),Tl(21,`po-input`,15),ww(`ngModelChange`,function(a){return Ky(d),uN(i.support,a)||(i.support=a),Xy(a)}),ag(),a0(),ag(),Tl(22,`div`,3)(23,`po-input`,16),ww(`ngModelChange`,function(a){return Ky(d),uN(i.recovery,a)||(i.recovery=a),Xy(a)}),ag(),a0(),Tl(24,`po-input`,17),ww(`ngModelChange`,function(a){return Ky(d),uN(i.registerUrl,a)||(i.registerUrl=a),Xy(a)}),ag(),a0(),ag(),Tl(25,`div`,3)(26,`po-checkbox-group`,18),ww(`ngModelChange`,function(a){return Ky(d),uN(i.properties,a)||(i.properties=a),Xy(a)}),ag(),a0(),Tl(27,`po-radio-group`,19),ww(`ngModelChange`,function(a){return Ky(d),uN(i.componentsSize,a)||(i.componentsSize=a),Xy(a)}),ag(),a0(),ag(),Gl(28,`po-divider`,20),Tl(29,`div`,3)(30,`po-input`,21),ww(`ngModelChange`,function(a){return Ky(d),uN(i.loginError,a)||(i.loginError=a),Xy(a)}),ag(),a0(),Tl(31,`po-button`,22),ht(`p-click`,function(){return i.addLoginError()}),ag()(),Gl(32,`po-divider`,23),Tl(33,`div`,3)(34,`po-input`,24),ww(`ngModelChange`,function(a){return Ky(d),uN(i.passwordError,a)||(i.passwordError=a),Xy(a)}),ag(),a0(),Tl(35,`po-button`,25),ht(`p-click`,function(){return i.addPasswordError()}),ag()(),Gl(36,`po-divider`,26),Tl(37,`div`,3)(38,`po-input`,27),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.property,a)||(i.customField.property=a),Xy(a)}),ht(`p-change-model`,function(){return i.onChangeCustomProperties()}),ag(),a0(),Tl(39,`po-input`,28),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.value,a)||(i.customField.value=a),Xy(a)}),ag(),a0(),ag(),Tl(40,`div`,3)(41,`po-input`,29),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.placeholder,a)||(i.customField.placeholder=a),Xy(a)}),ag(),a0(),Tl(42,`po-input`,30),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.pattern,a)||(i.customField.pattern=a),Xy(a)}),ag(),a0(),Tl(43,`po-input`,31),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Xy(a)}),ag(),a0(),ag(),Gl(44,`po-divider`),Tl(45,`div`,3)(46,`po-input`,32),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.url,a)||(i.customField.url=a),Xy(a)}),ht(`p-change-model`,function(){return i.onChangeCustomProperties()}),ag(),a0(),Tl(47,`po-input`,33),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Xy(a)}),ht(`p-change-model`,function(){return i.onChangeCustomProperties()}),ag(),a0(),ag(),Gl(48,`po-divider`),Tl(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Xy(a)}),ag(),a0(),Tl(53,`po-input`,35),ww(`ngModelChange`,function(a){return Ky(d),uN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Xy(a)}),ag(),a0(),ag(),Tl(54,`div`,3)(55,`po-button`,36),ht(`p-click`,function(){return i.addCustomFieldOption()}),ag()()(),Gl(56,`br`)(57,`po-divider`),Tl(58,`div`,3)(59,`po-button`,37),ht(`p-click`,function(){return i.restore()}),ag()()()}if(l&2){let d=Bx(50);nw(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),jp(5),Ew(`ngModel`,i.literals),l0(),jp(),Ew(`ngModel`,i.productName),l0(),jp(2),Ew(`ngModel`,i.loginPattern),l0(),jp(),Ew(`ngModel`,i.login),l0(),jp(2),Ew(`ngModel`,i.exceededAttempts),l0(),jp(),Ew(`ngModel`,i.passwordPattern),l0(),jp(2),Ew(`ngModel`,i.contactEmail),l0(),jp(),Ew(`ngModel`,i.environment),l0(),jp(2),Ew(`ngModel`,i.logo),l0(),jp(),Ew(`ngModel`,i.secondaryLogo),l0(),jp(2),Ew(`ngModel`,i.background),l0(),jp(),Ew(`ngModel`,i.support),l0(),jp(2),Ew(`ngModel`,i.recovery),l0(),jp(),Ew(`ngModel`,i.registerUrl),l0(),jp(2),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.componentsSize),nw(`p-options`,i.componentsSizeOptions),l0(),jp(3),Ew(`ngModel`,i.loginError),l0(),jp(4),Ew(`ngModel`,i.passwordError),l0(),jp(4),Ew(`ngModel`,i.customField.property),l0(),jp(),Ew(`ngModel`,i.customField.value),l0(),jp(2),Ew(`ngModel`,i.customField.placeholder),l0(),jp(),Ew(`ngModel`,i.customField.pattern),l0(),jp(),Ew(`ngModel`,i.customField.errorPattern),l0(),jp(3),Ew(`ngModel`,i.customField.url),l0(),jp(),Ew(`ngModel`,i.customField.fieldValue),l0(),jp(5),Ew(`ngModel`,i.customFieldOption.label),l0(),jp(),Ew(`ngModel`,i.customFieldOption.value),l0(),jp(2),nw(`p-disabled`,d.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,za],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r});var Ee=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Login Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-login
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-login-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Me,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return r})();function Te(r,fe){if(r&1){let p=Ax();Tl(0,`po-page-login`,6),ht(`p-login-change`,function(){Ky(p);return Xy(Fx().loginChange())})(`p-login-submit`,function(i){Ky(p);return Xy(Fx().checkLogin(i))})(`p-password-change`,function(){Ky(p);return Xy(Fx().passwordChange())}),ag()}if(r&2){let p=Fx();nw(`p-custom-field`,p.customField)(`p-exceeded-attempts-warning`,p.exceededAttempts)(`p-literals`,p.literalsI18n)(`p-loading`,p.loading)(`p-password-errors`,p.passwordErrors)(`p-login-errors`,p.loginErrors)(`p-recovery`,p.passwordRecovery)}}function De(r,fe){if(r&1&&Gl(0,`po-page-blocked-user`,5),r&2)nw(`p-params`,Fx().params)}var Se=(()=>{class r{poI18nService=f(G4);poDialog=f(W0e);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:U.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0})}checkLogin(p){this.loading=!0,p.login===`devpo`&&p.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(l,i){l&1&&(Tl(0,`po-container`)(1,`div`,0),Gl(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),ag()(),_x(5,Te,1,7,`po-page-login`,4),_x(6,De,1,1,`po-page-blocked-user`,5)),l&2&&(jp(5),Dx(i.showPageBlocked?-1:5),jp(),Dx(i.showPageBlocked?6:-1))},dependencies:[xp,ybe,Da,za],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r});var he=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Login - Human Resources`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),ag(),Tl(23,`pre`,9),cN(24,`/**
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-page-login-human-resources`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ae,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return r})();var xe=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(p){p?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Un({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(l,i){l&1&&(Tl(0,`po-container`)(1,`div`,0),Gl(2,`po-info`,1)(3,`po-info`,2),ag()(),Tl(4,`po-page-login`,3),ht(`p-language-change`,function(m){return i.changeLanguage(m)}),ag()),l&2&&(jp(4),nw(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[xp,ybe,za],encapsulation:2,changeDetection:1})}return r$1})();var Be=r=>({"docs-sample-code-tabs":r});var be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Login - Automatic Service`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-login-automatic-service`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,xe],encapsulation:2,changeDetection:1})}return r})();var ve=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do template do po-page-login.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoPageLoginComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-page-login`),ag(),cN(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),ag(),Tl(18,`p`),cN(19,`A propriedade `),Tl(20,`code`),cN(21,`p-authentication-url`),ag(),cN(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Tl(23,`em`),cN(24,`client side`),ag(),cN(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Tl(26,`em`),cN(27,`propriedades`),ag(),cN(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ag(),Tl(29,`p`),cN(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(31,`em`),cN(32,`assets`),ag(),cN(33,` no arquivo `),Tl(34,`strong`),cN(35,`angular.json`),ag(),cN(36,` da aplicação na seguinte ordem:`),ag(),Tl(37,`pre`)(38,`code`),cN(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ag()()(),Tl(40,`div`,6)(41,`h4`,7),cN(42,`Seletor`),ag(),Tl(43,`pre`,8),cN(44,`<po-page-login
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
`),ag()(),Tl(45,`h4`,9),cN(46,`Propriedades`),ag(),Tl(47,`table`,10)(48,`tr`,11)(49,`th`,12),cN(50,`Nome`),ag(),Tl(51,`th`,12),cN(52,`Tipo`),ag(),Tl(53,`th`,12),cN(54,`Padrão`),ag(),Tl(55,`th`,12),cN(56,`Descrição`),ag()(),Tl(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),cN(61,` p-authentication-type`),Gl(62,`br`),ag()()(),Tl(63,`td`,17)(64,`code`,18),cN(65,`PoPageLoginAuthenticationType`),ag()(),Tl(66,`td`,19)(67,`p`)(68,`code`),cN(69,`PoPageLoginAuthenticationType.Basic`),ag()()(),Tl(70,`td`,20)(71,`em`)(72,`strong`),cN(73,`(opcional)`),ag()(),Tl(74,`p`),cN(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),Tl(76,`code`),cN(77,`Basic`),ag(),cN(78,` e `),Tl(79,`code`),cN(80,`Bearer`),ag(),cN(81,`.`),ag(),Tl(82,`blockquote`)(83,`p`),cN(84,`Caso o tipo definido seja `),Tl(85,`code`),cN(86,`Basic`),ag(),cN(87,`, o componente fará uma requisição `),Tl(88,`code`),cN(89,`POST`),ag(),cN(90,` contendo:`),ag()(),Tl(91,`pre`)(92,`code`),cN(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),ag()(),Tl(94,`blockquote`)(95,`p`),cN(96,`Caso o tipo definido seja `),Tl(97,`code`),cN(98,`Bearer`),ag(),cN(99,`, o componente fará uma requisição `),Tl(100,`code`),cN(101,`POST`),ag(),cN(102,` contendo:`),ag()(),Tl(103,`pre`)(104,`code`),cN(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),ag()()()(),Tl(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),cN(110,` p-authentication-url`),Gl(111,`br`),ag()()(),Tl(112,`td`,17)(113,`code`,21),cN(114,`string`),ag()(),Tl(115,`td`,19),cN(116,`-`),ag(),Tl(117,`td`,20)(118,`em`)(119,`strong`),cN(120,`(opcional)`),ag()(),Tl(121,`p`),cN(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),Tl(123,`code`),cN(124,`p-login-submit`),ag(),cN(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),ag(),Tl(126,`h3`),cN(127,`Processos`),ag(),Tl(128,`p`),cN(129,`Ao digitar um valor válido no campo de login/password e pressionar `),Tl(130,`strong`),cN(131,`Enter`),ag(),cN(132,`, o componente fará uma requisição `),Tl(133,`code`),cN(134,`POST`),ag(),cN(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),ag(),Tl(136,`pre`)(137,`code`),cN(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),ag()(),Tl(139,`p`),cN(140,`Em caso de `),Tl(141,`strong`),cN(142,`sucesso`),ag(),cN(143,`, o objeto de retorno é armazenado no `),Tl(144,`code`),cN(145,`sessionStorage`),ag(),cN(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Tl(147,`code`),cN(148,`/`),ag(),cN(149,`.`),ag(),Tl(150,`pre`)(151,`code`),cN(152,`200:
{
  user: user
}
`),ag()(),Tl(153,`p`),cN(154,`Em caso de `),Tl(155,`strong`),cN(156,`erro`),ag(),cN(157,` na autenticação, espera-se o seguinte retorno:`),ag(),Tl(158,`pre`)(159,`code`),cN(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),ag()(),Tl(161,`blockquote`)(162,`p`),cN(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),Tl(164,`code`),cN(165,`p-exceeded-attempts-warning`),ag(),cN(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Tl(167,`code`),cN(168,`p-login-errors`),ag(),cN(169,` e
`),Tl(170,`code`),cN(171,`p-password-errors`),ag(),cN(172,` conforme retorno abaixo:`),ag()(),Tl(173,`pre`)(174,`code`),cN(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),ag()(),Tl(176,`blockquote`)(177,`p`),cN(178,`Caso o valor atribuído para `),Tl(179,`code`),cN(180,`p-exceeded-attempts-warning`),ag(),cN(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Tl(182,`code`),cN(183,`p-blocked-url`),ag(),cN(184,` e o usuário será redirecionado para uma tela de bloqueio.`),ag()(),Tl(185,`p`)(186,`em`),cN(187,`Processo finalizado.`),ag()(),Gl(188,`hr`),Tl(189,`h4`),cN(190,`Praticidade`),ag(),Tl(191,`p`),cN(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Tl(193,`code`),cN(194,`po-page-login`),ag(),cN(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Tl(196,`code`),cN(197,`/login`),ag(),cN(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),ag(),Tl(199,`pre`)(200,`code`),cN(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),ag()(),Tl(202,`p`),cN(203,`O metadado `),Tl(204,`code`),cN(205,`serviceApi`),ag(),cN(206,` deve ser a `),Tl(207,`strong`),cN(208,`url`),ag(),cN(209,` para requisição dos recursos de autenticação, o `),Tl(210,`code`),cN(211,`environment`),ag(),cN(212,` alimenta a propriedade
`),Tl(213,`code`),cN(214,`p-environment`),ag(),cN(215,`, `),Tl(216,`code`),cN(217,`recovery`),ag(),cN(218,` é a interface `),Tl(219,`code`),cN(220,`PoPageLoginRecovery`),ag(),cN(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Tl(222,`code`),cN(223,`registerUrl`),ag(),cN(224,` alimenta a propriedade `),Tl(225,`code`),cN(226,`p-register-url`),ag(),cN(227,` e `),Tl(228,`code`),cN(229,`authenticationType`),ag(),cN(230,` que define a propriedade `),Tl(231,`code`),cN(232,`p-authentication-type`),ag(),cN(233,`.`),ag(),Tl(234,`blockquote`)(235,`p`),cN(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),ag()()()(),Tl(237,`tr`,13)(238,`td`,14)(239,`div`,15)(240,`span`,16),cN(241,` p-background`),Gl(242,`br`),ag()()(),Tl(243,`td`,17)(244,`code`,21),cN(245,`string`),ag()(),Tl(246,`td`,19),cN(247,`-`),ag(),Tl(248,`td`,20)(249,`em`)(250,`strong`),cN(251,`(opcional)`),ag()(),Tl(252,`p`),cN(253,`O `),Tl(254,`code`),cN(255,`p-background`),ag(),cN(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),ag(),Tl(257,`p`),cN(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),ag(),Tl(259,`p`),cN(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Tl(261,`code`),cN(262,`highlightInfo`),ag(),cN(263,`.`),ag(),Tl(264,`blockquote`)(265,`p`),cN(266,`Veja mais sobre as literais na propriedade `),Tl(267,`code`),cN(268,`p-literals`),ag(),cN(269,`.`),ag()(),Tl(270,`p`),cN(271,`Exemplos de valores válidos:`),ag(),Tl(272,`ul`)(273,`li`)(274,`strong`),cN(275,`local`),ag(),cN(276,`: `),Tl(277,`code`),cN(278,`./assets/images/login-background.png`),ag()(),Tl(279,`li`)(280,`strong`),cN(281,`url externa`),ag(),cN(282,`: `),Tl(283,`code`),cN(284,`https://po-ui.io/assets/images/login-background.png`),ag()()(),Tl(285,`blockquote`)(286,`p`),cN(287,`Essa propriedade é ignorada para aplicações mobile.`),ag()()()(),Tl(288,`tr`,13)(289,`td`,14)(290,`div`,15)(291,`span`,16),cN(292,` p-blocked-url`),Gl(293,`br`),ag()()(),Tl(294,`td`,17)(295,`code`,21),cN(296,`string`),ag()(),Tl(297,`td`,19),cN(298,`-`),ag(),Tl(299,`td`,20)(300,`em`)(301,`strong`),cN(302,`(opcional)`),ag()(),Tl(303,`p`),cN(304,`Caso o valor atribuído para `),Tl(305,`code`),cN(306,`p-exceeded-attempts-warning`),ag(),cN(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),ag()()(),Tl(308,`tr`,13)(309,`td`,14)(310,`div`,15)(311,`span`,16),cN(312,` p-components-size`),Gl(313,`br`),ag()()(),Tl(314,`td`,17)(315,`code`,21),cN(316,`string`),ag()(),Tl(317,`td`,19)(318,`p`)(319,`code`),cN(320,`medium`),ag()()(),Tl(321,`td`,20)(322,`em`)(323,`strong`),cN(324,`(opcional)`),ag()(),Tl(325,`p`),cN(326,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(327,`ul`)(328,`li`)(329,`code`),cN(330,`small`),ag(),cN(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(332,`li`)(333,`code`),cN(334,`medium`),ag(),cN(335,`: aplica a medida medium de cada componente.`),ag()(),Tl(336,`blockquote`)(337,`p`),cN(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(339,`code`),cN(340,`medium`),ag(),cN(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(342,`a`,22),cN(343,`po-theme`),ag(),cN(344,`.`),ag()()()(),Tl(345,`tr`,13)(346,`td`,14)(347,`div`,15)(348,`span`,16),cN(349,` p-contact-email`),Gl(350,`br`),ag()()(),Tl(351,`td`,17)(352,`code`,21),cN(353,`string`),ag()(),Tl(354,`td`,19),cN(355,`-`),ag(),Tl(356,`td`,20)(357,`em`)(358,`strong`),cN(359,`(opcional)`),ag()(),Tl(360,`p`),cN(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),ag()()(),Tl(362,`tr`,13)(363,`td`,14)(364,`div`,15)(365,`span`,16),cN(366,` p-custom-field`),Gl(367,`br`),ag()()(),Tl(368,`td`,17)(369,`code`,21),cN(370,`string `),ag(),Tl(371,`code`,23),cN(372,` PoPageLoginCustomField`),ag()(),Tl(373,`td`,19),cN(374,`-`),ag(),Tl(375,`td`,20)(376,`em`)(377,`strong`),cN(378,`(opcional)`),ag()(),Tl(379,`p`),cN(380,`Ao informar um valor do tipo `),Tl(381,`code`),cN(382,`string`),ag(),cN(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Tl(384,`code`),cN(385,`literals`),ag(),cN(386,` como `),Tl(387,`code`),cN(388,`customFieldErrorPattern`),ag(),cN(389,` e `),Tl(390,`code`),cN(391,`customFieldPlaceholder`),ag(),cN(392,`.`),ag(),Tl(393,`p`),cN(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),Tl(395,`code`),cN(396,`PoPageLoginCustomField`),ag(),cN(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Tl(398,`code`),cN(399,`po-input`),ag(),cN(400,`, `),Tl(401,`code`),cN(402,`po-combo`),ag(),cN(403,` especificamente para servi\xE7os
ou `),Tl(404,`code`),cN(405,`po-select`),ag(),cN(406,` para valores fixos.`),ag(),Tl(407,`p`),cN(408,`Abaixo seguem os exemplos de cada tipo de campo.`),ag(),Tl(409,`p`)(410,`code`),cN(411,`po-input`),ag(),cN(412,`:`),ag(),Tl(413,`pre`)(414,`code`),cN(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),ag()(),Tl(416,`p`)(417,`code`),cN(418,`po-combo`),ag(),cN(419,`:`),ag(),Tl(420,`pre`)(421,`code`),cN(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),ag()(),Tl(423,`p`)(424,`code`),cN(425,`po-select`),ag(),cN(426,`:`),ag(),Tl(427,`pre`)(428,`code`),cN(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),ag()(),Tl(430,`p`),cN(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),ag()()(),Tl(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),cN(436,` p-environment`),Gl(437,`br`),ag()()(),Tl(438,`td`,17)(439,`code`,21),cN(440,`string`),ag()(),Tl(441,`td`,19),cN(442,`-`),ag(),Tl(443,`td`,20)(444,`em`)(445,`strong`),cN(446,`(opcional)`),ag()(),Tl(447,`p`),cN(448,`Adiciona uma `),Tl(449,`code`),cN(450,`tag`),ag(),cN(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),ag(),Tl(452,`blockquote`)(453,`p`),cN(454,`Essa propriedade limita o texto em 40 caracteres.`),ag()()()(),Tl(455,`tr`,13)(456,`td`,14)(457,`div`,15)(458,`span`,16),cN(459,` p-exceeded-attempts-warning`),Gl(460,`br`),ag()()(),Tl(461,`td`,17)(462,`code`,24),cN(463,`number`),ag()(),Tl(464,`td`,19)(465,`p`)(466,`code`),cN(467,`0`),ag()()(),Tl(468,`td`,20)(469,`em`)(470,`strong`),cN(471,`(opcional)`),ag()(),Tl(472,`p`),cN(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),ag(),Tl(474,`blockquote`)(475,`p`),cN(476,`Caso tenha algum valor atribuído para o atributo `),Tl(477,`code`),cN(478,`p-authentication-url`),ag(),cN(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Tl(480,`code`),cN(481,`p-exceeded-attempts-warning`),ag(),cN(482,`, o valor considerado será o do retorno da requisição.`),ag()()()(),Tl(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),cN(487,` p-hide-label-status`),Gl(488,`br`),ag()()(),Tl(489,`td`,17)(490,`code`,25),cN(491,`boolean`),ag()(),Tl(492,`td`,19)(493,`p`)(494,`code`),cN(495,`false`),ag()()(),Tl(496,`td`,20)(497,`em`)(498,`strong`),cN(499,`(opcional)`),ag()(),Tl(500,`p`),cN(501,`Indica se o status do `),Tl(502,`code`),cN(503,`model`),ag(),cN(504,` do switch de lembrar o usuário será escondido visualmente.`),ag(),Tl(505,`blockquote`)(506,`p`),cN(507,`Por padrão será atribuído `),Tl(508,`code`),cN(509,`false`),ag(),cN(510,`.`),ag()()()(),Tl(511,`tr`,13)(512,`td`,14)(513,`div`,15)(514,`span`,16),cN(515,` p-hide-password-peek`),Gl(516,`br`),ag()()(),Tl(517,`td`,17)(518,`code`,25),cN(519,`boolean`),ag()(),Tl(520,`td`,19)(521,`p`)(522,`code`),cN(523,`false`),ag()()(),Tl(524,`td`,20)(525,`em`)(526,`strong`),cN(527,`(opcional)`),ag()(),Tl(528,`p`),cN(529,`Permite esconder a função de espiar a senha digitada.`),ag()()(),Tl(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),cN(534,` p-hide-remember-user`),Gl(535,`br`),ag()()(),Tl(536,`td`,17)(537,`code`,25),cN(538,`boolean`),ag()(),Tl(539,`td`,19)(540,`p`)(541,`code`),cN(542,`false`),ag()()(),Tl(543,`td`,20)(544,`em`)(545,`strong`),cN(546,`(opcional)`),ag()(),Tl(547,`p`),cN(548,`Esconde a função "Lembrar usuário" do formulário de login.`),ag(),Tl(549,`p`),cN(550,`Quando essa propriedade é setada com `),Tl(551,`code`),cN(552,`true`),ag(),cN(553,` a propriedade `),Tl(554,`code`),cN(555,`rememberUser`),ag(),cN(556,` enviada no evento `),Tl(557,`code`),cN(558,`p-login-submit`),ag(),cN(559,` ser\xE1 sempre
`),Tl(560,`code`),cN(561,`false`),ag(),cN(562,`.`),ag(),Tl(563,`blockquote`)(564,`p`),cN(565,`Veja a propriedade `),Tl(566,`code`),cN(567,`p-literals`),ag(),cN(568,` para customizar a literal `),Tl(569,`code`),cN(570,`rememberUser`),ag(),cN(571,`.`),ag()()()(),Tl(572,`tr`,13)(573,`td`,14)(574,`div`,26)(575,`span`,27),cN(576,` (p-language-change)`),Gl(577,`br`),ag()()(),Tl(578,`td`,17)(579,`code`,28),cN(580,`EventEmitter`),ag()(),Tl(581,`td`,19),cN(582,`-`),ag(),Tl(583,`td`,20)(584,`em`)(585,`strong`),cN(586,`(opcional)`),ag()(),Tl(587,`p`),cN(588,`Evento disparado quando o usuário alterar o idioma da página.`),ag(),Tl(589,`p`),cN(590,`Esse evento receberá como parâmetro um objeto do tipo `),Tl(591,`code`),cN(592,`PoLanguage`),ag(),cN(593,` com a linguagem selecionada.`),ag()()(),Tl(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),cN(598,` p-languages`),Gl(599,`br`),ag()()(),Tl(600,`td`,17)(601,`code`,29),cN(602,`Array<PoLanguage>`),ag()(),Tl(603,`td`,19),cN(604,`-`),ag(),Tl(605,`td`,20)(606,`em`)(607,`strong`),cN(608,`(opcional)`),ag()(),Tl(609,`p`),cN(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),ag(),Tl(611,`p`),cN(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),ag(),Tl(613,`p`),cN(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),ag(),Tl(615,`p`),cN(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),Tl(617,`code`),cN(618,`i18n`),ag(),cN(619,` e não mostrará o combo de seleção.`),ag(),Tl(620,`blockquote`)(621,`p`),cN(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),Tl(623,`code`),cN(624,`p-literals`),ag(),cN(625,`.`),ag()()()(),Tl(626,`tr`,13)(627,`td`,14)(628,`div`,15)(629,`span`,16),cN(630,` p-literals`),Gl(631,`br`),ag()()(),Tl(632,`td`,17)(633,`code`,30),cN(634,`PoPageLoginLiterals`),ag()(),Tl(635,`td`,19),cN(636,`-`),ag(),Tl(637,`td`,20)(638,`em`)(639,`strong`),cN(640,`(opcional)`),ag()(),Tl(641,`p`),cN(642,`Objeto com as literais usadas no `),Tl(643,`code`),cN(644,`po-page-login`),ag(),cN(645,`.`),ag(),Tl(646,`p`),cN(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(648,`pre`)(649,`code`),cN(650,`const customLiterals: PoPageLoginLiterals = {
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
`),ag()(),Tl(651,`p`),cN(652,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(653,`pre`)(654,`code`),cN(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),ag()(),Tl(656,`p`),cN(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(658,`pre`)(659,`code`),cN(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),ag()(),Tl(661,`blockquote`)(662,`p`),cN(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),ag()()()(),Tl(664,`tr`,13)(665,`td`,14)(666,`div`,15)(667,`span`,16),cN(668,` p-loading`),Gl(669,`br`),ag()()(),Tl(670,`td`,17)(671,`code`,25),cN(672,`boolean`),ag()(),Tl(673,`td`,19)(674,`p`)(675,`code`),cN(676,`false`),ag()()(),Tl(677,`td`,20)(678,`em`)(679,`strong`),cN(680,`(opcional)`),ag()(),Tl(681,`p`),cN(682,`Habilita um estado de carregamento ao botão de `),Tl(683,`em`),cN(684,`login`),ag(),cN(685,`.`),ag(),Tl(686,`blockquote`)(687,`p`),cN(688,`É necessário atribuir `),Tl(689,`code`),cN(690,`true`),ag(),cN(691,` à esta propriedade na função definida em `),Tl(692,`code`),cN(693,`p-login-submit`),ag(),cN(694,`.`),ag()()()(),Tl(695,`tr`,13)(696,`td`,14)(697,`div`,15)(698,`span`,16),cN(699,` p-login`),Gl(700,`br`),ag()()(),Tl(701,`td`,17)(702,`code`,21),cN(703,`string`),ag()(),Tl(704,`td`,19),cN(705,`-`),ag(),Tl(706,`td`,20)(707,`em`)(708,`strong`),cN(709,`(opcional)`),ag()(),Tl(710,`p`),cN(711,`Valor do modelo do campo de login.`),ag()()(),Tl(712,`tr`,13)(713,`td`,14)(714,`div`,26)(715,`span`,27),cN(716,` (p-login-change)`),Gl(717,`br`),ag()()(),Tl(718,`td`,17)(719,`code`,28),cN(720,`EventEmitter`),ag()(),Tl(721,`td`,19),cN(722,`-`),ag(),Tl(723,`td`,20)(724,`em`)(725,`strong`),cN(726,`(opcional)`),ag()(),Tl(727,`p`),cN(728,`Evento disparado quando o usuário alterar o input do campo login.`),ag(),Tl(729,`p`),cN(730,`Esse evento receberá como parâmetro uma variável do tipo `),Tl(731,`code`),cN(732,`string`),ag(),cN(733,` com o texto informado no campo.`),ag(),Tl(734,`blockquote`)(735,`p`),cN(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),Tl(737,`code`),cN(738,`p-authentication-url`),ag(),cN(739,`.`),ag()()()(),Tl(740,`tr`,13)(741,`td`,14)(742,`div`,15)(743,`span`,16),cN(744,` p-login-errors`),Gl(745,`br`),ag()()(),Tl(746,`td`,17)(747,`code`,31),cN(748,`string[]`),ag()(),Tl(749,`td`,19),cN(750,`-`),ag(),Tl(751,`td`,20)(752,`em`)(753,`strong`),cN(754,`(opcional)`),ag()(),Tl(755,`p`),cN(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),ag()()(),Tl(757,`tr`,13)(758,`td`,14)(759,`div`,15)(760,`span`,16),cN(761,` p-login-pattern`),Gl(762,`br`),ag()()(),Tl(763,`td`,17)(764,`code`,21),cN(765,`string`),ag()(),Tl(766,`td`,19),cN(767,`-`),ag(),Tl(768,`td`,20)(769,`em`)(770,`strong`),cN(771,`(opcional)`),ag()(),Tl(772,`p`),cN(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),Tl(774,`code`),cN(775,`loginErrorPattern`),ag(),cN(776,`
ser\xE1 exibida.`),ag(),Tl(777,`p`),cN(778,`Exemplos de valores válidos:`),ag(),Tl(779,`ul`)(780,`li`),cN(781,`email: `),Tl(782,`code`),cN(783,`[expressao-regular-email]`),ag()(),Tl(784,`li`),cN(785,`cpf: `),Tl(786,`code`),cN(787,`[expressao-regular-cpf]`),ag()()(),Tl(788,`blockquote`)(789,`p`),cN(790,`Veja a propriedade `),Tl(791,`code`),cN(792,`p-literals`),ag(),cN(793,` para customizar a literal `),Tl(794,`code`),cN(795,`loginErrorPattern`),ag(),cN(796,`.`),ag()()()(),Tl(797,`tr`,13)(798,`td`,14)(799,`div`,26)(800,`span`,27),cN(801,` (p-login-submit)`),Gl(802,`br`),ag()()(),Tl(803,`td`,17)(804,`code`,28),cN(805,`EventEmitter`),ag()(),Tl(806,`td`,19),cN(807,`-`),ag(),Tl(808,`td`,20)(809,`p`),cN(810,`Evento disparado ao submeter o formulário de login (apertando `),Tl(811,`code`),cN(812,`Enter`),ag(),cN(813,` dentro dos campos ou pressionando o botão de confirmação).`),ag(),Tl(814,`p`),cN(815,`Esse evento receberá como parâmetro um objeto do tipo `),Tl(816,`code`),cN(817,`PoPageLogin`),ag(),cN(818,` com os dados informados no formulário.`),ag(),Tl(819,`blockquote`)(820,`p`),cN(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),Tl(822,`code`),cN(823,`p-url-recovery`),ag(),cN(824,`.`),ag()(),Tl(825,`blockquote`)(826,`p`),cN(827,`Para mais detalhes consulte a documentação sobre a interface `),Tl(828,`code`),cN(829,`PoPageLogin`),ag(),cN(830,` mais abaixo.`),ag()()()(),Tl(831,`tr`,13)(832,`td`,14)(833,`div`,15)(834,`span`,16),cN(835,` p-logo`),Gl(836,`br`),ag()()(),Tl(837,`td`,17)(838,`code`,21),cN(839,`string`),ag()(),Tl(840,`td`,19),cN(841,`-`),ag(),Tl(842,`td`,20)(843,`em`)(844,`strong`),cN(845,`(opcional)`),ag()(),Tl(846,`p`),cN(847,`Caminho para a logomarca localizada na parte superior.`),ag(),Tl(848,`blockquote`)(849,`p`),cN(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),ag()()()(),Tl(851,`tr`,13)(852,`td`,14)(853,`div`,15)(854,`span`,16),cN(855,` p-no-autocomplete-login`),Gl(856,`br`),ag()()(),Tl(857,`td`,17)(858,`code`,25),cN(859,`boolean`),ag()(),Tl(860,`td`,19)(861,`p`)(862,`code`),cN(863,`true`),ag()()(),Tl(864,`td`,20)(865,`em`)(866,`strong`),cN(867,`(opcional)`),ag()(),Tl(868,`p`),cN(869,`Define a propriedade nativa `),Tl(870,`code`),cN(871,`autocomplete`),ag(),cN(872,` do campo como `),Tl(873,`code`),cN(874,`off`),ag(),cN(875,`.`),ag()()(),Tl(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),cN(880,` p-no-autocomplete-password`),Gl(881,`br`),ag()()(),Tl(882,`td`,17)(883,`code`,25),cN(884,`boolean`),ag()(),Tl(885,`td`,19)(886,`p`)(887,`code`),cN(888,`true`),ag()()(),Tl(889,`td`,20)(890,`em`)(891,`strong`),cN(892,`(opcional)`),ag()(),Tl(893,`p`),cN(894,`Define a propriedade nativa `),Tl(895,`code`),cN(896,`autocomplete`),ag(),cN(897,` do campo como `),Tl(898,`code`),cN(899,`off`),ag(),cN(900,`.`),ag(),Tl(901,`blockquote`)(902,`p`),cN(903,`No componente `),Tl(904,`code`),cN(905,`po-password`),ag(),cN(906,` será definido como `),Tl(907,`code`),cN(908,`new-password`),ag(),cN(909,`.`),ag()()()(),Tl(910,`tr`,13)(911,`td`,14)(912,`div`,26)(913,`span`,27),cN(914,` (p-password-change)`),Gl(915,`br`),ag()()(),Tl(916,`td`,17)(917,`code`,28),cN(918,`EventEmitter`),ag()(),Tl(919,`td`,19),cN(920,`-`),ag(),Tl(921,`td`,20)(922,`em`)(923,`strong`),cN(924,`(opcional)`),ag()(),Tl(925,`p`),cN(926,`Evento disparado quando o usuário alterar o input do campo password.`),ag(),Tl(927,`p`),cN(928,`Esse evento receberá como parâmetro uma variável do tipo `),Tl(929,`code`),cN(930,`string`),ag(),cN(931,` com o texto informado no campo.`),ag(),Tl(932,`blockquote`)(933,`p`),cN(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),Tl(935,`code`),cN(936,`p-authentication-url`),ag(),cN(937,`.`),ag()()()(),Tl(938,`tr`,13)(939,`td`,14)(940,`div`,15)(941,`span`,16),cN(942,` p-password-errors`),Gl(943,`br`),ag()()(),Tl(944,`td`,17)(945,`code`,31),cN(946,`string[]`),ag()(),Tl(947,`td`,19),cN(948,`-`),ag(),Tl(949,`td`,20)(950,`em`)(951,`strong`),cN(952,`(opcional)`),ag()(),Tl(953,`p`),cN(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),ag()()(),Tl(955,`tr`,13)(956,`td`,14)(957,`div`,15)(958,`span`,16),cN(959,` p-password-pattern`),Gl(960,`br`),ag()()(),Tl(961,`td`,17)(962,`code`,21),cN(963,`string`),ag()(),Tl(964,`td`,19),cN(965,`-`),ag(),Tl(966,`td`,20)(967,`em`)(968,`strong`),cN(969,`(opcional)`),ag()(),Tl(970,`p`),cN(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),Tl(972,`code`),cN(973,`passwordErrorPattern`),ag(),cN(974,`
ser\xE1 exibida.`),ag(),Tl(975,`p`),cN(976,`Exemplos de valores válidos:`),ag(),Tl(977,`ul`)(978,`li`),cN(979,`Apenas números: `),Tl(980,`code`),cN(981,`\\d?`),ag()(),Tl(982,`li`),cN(983,`Letras mínusculas: `),Tl(984,`code`),cN(985,`\\z?`),ag()()(),Tl(986,`blockquote`)(987,`p`),cN(988,`Veja a propriedade `),Tl(989,`code`),cN(990,`p-literals`),ag(),cN(991,` para customizar a literal `),Tl(992,`code`),cN(993,`passwordErrorPattern`),ag(),cN(994,`.`),ag()()()(),Tl(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),cN(999,` p-product-name`),Gl(1e3,`br`),ag()()(),Tl(1001,`td`,17)(1002,`code`,21),cN(1003,`string`),ag()(),Tl(1004,`td`,19),cN(1005,`-`),ag(),Tl(1006,`td`,20)(1007,`em`)(1008,`strong`),cN(1009,`(opcional)`),ag()(),Tl(1010,`p`),cN(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),ag()()(),Tl(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),cN(1016,` p-recovery`),Gl(1017,`br`),ag()()(),Tl(1018,`td`,17)(1019,`code`,21),cN(1020,`string `),ag(),Tl(1021,`code`,32),cN(1022,` Function `),ag(),Tl(1023,`code`,33),cN(1024,` PoPageLoginRecovery`),ag()(),Tl(1025,`td`,19),cN(1026,`-`),ag(),Tl(1027,`td`,20)(1028,`em`)(1029,`strong`),cN(1030,`(opcional)`),ag()(),Tl(1031,`p`),cN(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),ag(),Tl(1033,`p`),cN(1034,`A propriedade aceita os seguintes tipos:`),ag(),Tl(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),cN(1039,`String`),ag(),cN(1040,`: informe uma url externa ou uma rota válida;`),ag()(),Tl(1041,`li`)(1042,`p`)(1043,`strong`),cN(1044,`Function`),ag(),cN(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),ag(),Tl(1046,`pre`)(1047,`code`),cN(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),ag()()(),Tl(1049,`li`)(1050,`p`)(1051,`strong`),cN(1052,`PoPageLoginRecovery`),ag(),cN(1053,`: cria-se vínculo automático com o template `),Tl(1054,`strong`),cN(1055,`po-modal-password-recovery`),ag(),cN(1056,`.
O objeto deve conter a `),Tl(1057,`strong`),cN(1058,`url`),ag(),cN(1059,` para requisição dos recursos e pode-se definir o `),Tl(1060,`strong`),cN(1061,`tipo`),ag(),cN(1062,` de modal para recupera\xE7\xE3o de senha,
`),Tl(1063,`strong`),cN(1064,`email`),ag(),cN(1065,` para contato e `),Tl(1066,`strong`),cN(1067,`máscara`),ag(),cN(1068,` do campo de telefone.`),ag()()()()(),Tl(1069,`tr`,13)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),cN(1073,` p-register-url`),Gl(1074,`br`),ag()()(),Tl(1075,`td`,17)(1076,`code`,21),cN(1077,`string`),ag()(),Tl(1078,`td`,19),cN(1079,`-`),ag(),Tl(1080,`td`,20)(1081,`em`)(1082,`strong`),cN(1083,`(opcional)`),ag()(),Tl(1084,`p`),cN(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),ag(),Tl(1086,`p`),cN(1087,`Exemplos de valores válidos:`),ag(),Tl(1088,`ul`)(1089,`li`)(1090,`strong`),cN(1091,`local`),ag(),cN(1092,`: `),Tl(1093,`code`),cN(1094,`/home`),ag()(),Tl(1095,`li`)(1096,`strong`),cN(1097,`url externa`),ag(),cN(1098,`: `),Tl(1099,`code`),cN(1100,`https://po-ui.io`),ag()()(),Tl(1101,`blockquote`)(1102,`p`),cN(1103,`Veja a propriedade `),Tl(1104,`code`),cN(1105,`p-literals`),ag(),cN(1106,` para customizar a literal `),Tl(1107,`code`),cN(1108,`registerUrl`),ag(),cN(1109,`.`),ag()()()(),Tl(1110,`tr`,13)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),cN(1114,` p-secondary-logo`),Gl(1115,`br`),ag()()(),Tl(1116,`td`,17)(1117,`code`,21),cN(1118,`string`),ag()(),Tl(1119,`td`,19),cN(1120,`-`),ag(),Tl(1121,`td`,20)(1122,`em`)(1123,`strong`),cN(1124,`(opcional)`),ag()(),Tl(1125,`p`),cN(1126,`Caminho para a logomarca localizada no rodapé.`),ag()()(),Tl(1127,`tr`,13)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),cN(1131,` p-support`),Gl(1132,`br`),ag()()(),Tl(1133,`td`,17)(1134,`code`,21),cN(1135,`string `),ag(),Tl(1136,`code`,32),cN(1137,` Function`),ag()(),Tl(1138,`td`,19),cN(1139,`-`),ag(),Tl(1140,`td`,20)(1141,`em`)(1142,`strong`),cN(1143,`(opcional)`),ag()(),Tl(1144,`p`),cN(1145,`Exibe um botão para suporte.`),ag(),Tl(1146,`p`),cN(1147,`A propriedade aceita os seguintes tipos:`),ag(),Tl(1148,`ul`)(1149,`li`)(1150,`strong`),cN(1151,`String`),ag(),cN(1152,`: URL externa ou uma rota válida;`),ag(),Tl(1153,`li`)(1154,`strong`),cN(1155,`Function`),ag(),cN(1156,`: Função a ser disparada ao clicar no botão de suporte;`),Tl(1157,`pre`)(1158,`code`),cN(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),ag()()()()()()(),Tl(1160,`h3`),cN(1161,`Interfaces`),ag(),Tl(1162,`h4`,34)(1163,`code`,5),cN(1164,`PoPageLoginCustomField`),ag()(),Tl(1165,`div`,2)(1166,`p`),cN(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),Tl(1168,`code`),cN(1169,`po-page-login`),ag(),cN(1170,`.`),ag()(),Tl(1171,`h4`,9),cN(1172,`Propriedades`),ag(),Tl(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),cN(1176,`Nome`),ag(),Tl(1177,`th`,12),cN(1178,`Tipo`),ag(),Tl(1179,`th`,12),cN(1180,`Descrição`),ag()(),Tl(1181,`tr`,13)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),cN(1185,` errorPattern`),Gl(1186,`br`),ag()()(),Tl(1187,`td`,17)(1188,`code`,21),cN(1189,`string`),ag()(),Tl(1190,`td`,20)(1191,`em`)(1192,`strong`),cN(1193,`(opcional)`),ag()(),Tl(1194,`p`),cN(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),Tl(1196,`code`),cN(1197,`pattern`),ag(),cN(1198,` não for válida.`),ag()()(),Tl(1199,`tr`,13)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),cN(1203,` fieldValue`),Gl(1204,`br`),ag()()(),Tl(1205,`td`,17)(1206,`code`,21),cN(1207,`string`),ag()(),Tl(1208,`td`,20)(1209,`em`)(1210,`strong`),cN(1211,`(opcional)`),ag()(),Tl(1212,`p`),cN(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Tl(1214,`code`),cN(1215,`po-combo`),ag(),cN(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),ag()()(),Tl(1217,`tr`,13)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),cN(1221,` options`),Gl(1222,`br`),ag()()(),Tl(1223,`td`,17)(1224,`code`,35),cN(1225,`Array<PoSelectOption>`),ag()(),Tl(1226,`td`,20)(1227,`em`)(1228,`strong`),cN(1229,`(opcional)`),ag()(),Tl(1230,`p`),cN(1231,`Lista de opções de um `),Tl(1232,`code`),cN(1233,`po-select`),ag(),cN(1234,`.`),ag()()(),Tl(1235,`tr`,13)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),cN(1239,` pattern`),Gl(1240,`br`),ag()()(),Tl(1241,`td`,17)(1242,`code`,21),cN(1243,`string`),ag()(),Tl(1244,`td`,20)(1245,`em`)(1246,`strong`),cN(1247,`(opcional)`),ag()(),Tl(1248,`p`),cN(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Tl(1250,`code`),cN(1251,`errorPattern`),ag(),cN(1252,` será exibida.`),ag()()(),Tl(1253,`tr`,13)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),cN(1257,` placeholder`),Gl(1258,`br`),ag()()(),Tl(1259,`td`,17)(1260,`code`,21),cN(1261,`string`),ag()(),Tl(1262,`td`,20)(1263,`em`)(1264,`strong`),cN(1265,`(opcional)`),ag()(),Tl(1266,`p`),cN(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),ag()()(),Tl(1268,`tr`,13)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),cN(1272,` property`),Gl(1273,`br`),ag()()(),Tl(1274,`td`,17)(1275,`code`,21),cN(1276,`string`),ag()(),Tl(1277,`td`,20)(1278,`p`),cN(1279,`Nome da propriedade que será utilizado no campo customizado.`),ag()()(),Tl(1280,`tr`,13)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),cN(1284,` url`),Gl(1285,`br`),ag()()(),Tl(1286,`td`,17)(1287,`code`,21),cN(1288,`string`),ag()(),Tl(1289,`td`,20)(1290,`em`)(1291,`strong`),cN(1292,`(opcional)`),ag()(),Tl(1293,`p`),cN(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Tl(1295,`code`),cN(1296,`po-combo`),ag(),cN(1297,`.`),ag()()(),Tl(1298,`tr`,13)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),cN(1302,` value`),Gl(1303,`br`),ag()()(),Tl(1304,`td`,17)(1305,`code`,21),cN(1306,`string `),ag(),Tl(1307,`code`,24),cN(1308,` number`),ag()(),Tl(1309,`td`,20)(1310,`em`)(1311,`strong`),cN(1312,`(opcional)`),ag()(),Tl(1313,`p`),cN(1314,`Valor do campo customizado.`),ag()()()(),Tl(1315,`h4`,34)(1316,`code`,5),cN(1317,`PoPageLoginLiterals`),ag()(),Tl(1318,`div`,2)(1319,`p`),cN(1320,`Interface para definição das literais usadas no `),Tl(1321,`code`),cN(1322,`po-page-login`),ag(),cN(1323,`.`),ag()(),Tl(1324,`h4`,9),cN(1325,`Propriedades`),ag(),Tl(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),cN(1329,`Nome`),ag(),Tl(1330,`th`,12),cN(1331,`Tipo`),ag(),Tl(1332,`th`,12),cN(1333,`Descrição`),ag()(),Tl(1334,`tr`,13)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),cN(1338,` attempts`),Gl(1339,`br`),ag()()(),Tl(1340,`td`,17)(1341,`code`,21),cN(1342,`string`),ag()(),Tl(1343,`td`,20)(1344,`em`)(1345,`strong`),cN(1346,`(opcional)`),ag()(),Tl(1347,`p`),cN(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),ag()()(),Tl(1349,`tr`,13)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),cN(1353,` createANewPasswordNow`),Gl(1354,`br`),ag()()(),Tl(1355,`td`,17)(1356,`code`,21),cN(1357,`string`),ag()(),Tl(1358,`td`,20)(1359,`em`)(1360,`strong`),cN(1361,`(opcional)`),ag()(),Tl(1362,`p`),cN(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),ag()()(),Tl(1364,`tr`,13)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),cN(1368,` customFieldErrorPattern`),Gl(1369,`br`),ag()()(),Tl(1370,`td`,17)(1371,`code`,21),cN(1372,`string`),ag()(),Tl(1373,`td`,20)(1374,`em`)(1375,`strong`),cN(1376,`(opcional)`),ag()(),Tl(1377,`p`),cN(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),ag()()(),Tl(1379,`tr`,13)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),cN(1383,` customFieldPlaceholder`),Gl(1384,`br`),ag()()(),Tl(1385,`td`,17)(1386,`code`,21),cN(1387,`string`),ag()(),Tl(1388,`td`,20)(1389,`em`)(1390,`strong`),cN(1391,`(opcional)`),ag()(),Tl(1392,`p`),cN(1393,`Placeholder para o campo customizado.`),ag()()(),Tl(1394,`tr`,13)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),cN(1398,` forgotPassword`),Gl(1399,`br`),ag()()(),Tl(1400,`td`,17)(1401,`code`,21),cN(1402,`string`),ag()(),Tl(1403,`td`,20)(1404,`em`)(1405,`strong`),cN(1406,`(opcional)`),ag()(),Tl(1407,`p`),cN(1408,`Texto de ajuda para recuperação dos dados de acesso.`),ag()()(),Tl(1409,`tr`,13)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),cN(1413,` forgotYourPassword`),Gl(1414,`br`),ag()()(),Tl(1415,`td`,17)(1416,`code`,21),cN(1417,`string`),ag()(),Tl(1418,`td`,20)(1419,`em`)(1420,`strong`),cN(1421,`(opcional)`),ag()(),Tl(1422,`p`),cN(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),ag()()(),Tl(1424,`tr`,13)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),cN(1428,` highlightInfo`),Gl(1429,`br`),ag()()(),Tl(1430,`td`,17)(1431,`code`,21),cN(1432,`string`),ag()(),Tl(1433,`td`,20)(1434,`em`)(1435,`strong`),cN(1436,`(opcional)`),ag()(),Tl(1437,`p`),cN(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),Tl(1439,`code`),cN(1440,`p-background`),ag(),cN(1441,`.`),ag()()(),Tl(1442,`tr`,13)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),cN(1446,` iForgotMyPassword`),Gl(1447,`br`),ag()()(),Tl(1448,`td`,17)(1449,`code`,21),cN(1450,`string`),ag()(),Tl(1451,`td`,20)(1452,`em`)(1453,`strong`),cN(1454,`(opcional)`),ag()(),Tl(1455,`p`),cN(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),ag()()(),Tl(1457,`tr`,13)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),cN(1461,` ifYouTryHarder`),Gl(1462,`br`),ag()()(),Tl(1463,`td`,17)(1464,`code`,21),cN(1465,`string`),ag()(),Tl(1466,`td`,20)(1467,`em`)(1468,`strong`),cN(1469,`(opcional)`),ag()(),Tl(1470,`p`),cN(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),ag()()(),Tl(1472,`tr`,13)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),cN(1476,` loginErrorPattern`),Gl(1477,`br`),ag()()(),Tl(1478,`td`,17)(1479,`code`,21),cN(1480,`string`),ag()(),Tl(1481,`td`,20)(1482,`em`)(1483,`strong`),cN(1484,`(opcional)`),ag()(),Tl(1485,`p`),cN(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),ag()()(),Tl(1487,`tr`,13)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),cN(1491,` loginHint`),Gl(1492,`br`),ag()()(),Tl(1493,`td`,17)(1494,`code`,21),cN(1495,`string`),ag()(),Tl(1496,`td`,20)(1497,`em`)(1498,`strong`),cN(1499,`(opcional)`),ag()(),Tl(1500,`p`),cN(1501,`Texto exibido como dica para o campo de login.`),ag()()(),Tl(1502,`tr`,13)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),cN(1506,` loginLabel`),Gl(1507,`br`),ag()()(),Tl(1508,`td`,17)(1509,`code`,21),cN(1510,`string`),ag()(),Tl(1511,`td`,20)(1512,`em`)(1513,`strong`),cN(1514,`(opcional)`),ag()(),Tl(1515,`p`),cN(1516,`Texto exibido como label do campo de login.`),ag()()(),Tl(1517,`tr`,13)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),cN(1521,` loginPlaceholder`),Gl(1522,`br`),ag()()(),Tl(1523,`td`,17)(1524,`code`,21),cN(1525,`string`),ag()(),Tl(1526,`td`,20)(1527,`em`)(1528,`strong`),cN(1529,`(opcional)`),ag()(),Tl(1530,`p`),cN(1531,`Placeholder do campo de login.`),ag()()(),Tl(1532,`tr`,13)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),cN(1536,` passwordErrorPattern`),Gl(1537,`br`),ag()()(),Tl(1538,`td`,17)(1539,`code`,21),cN(1540,`string`),ag()(),Tl(1541,`td`,20)(1542,`em`)(1543,`strong`),cN(1544,`(opcional)`),ag()(),Tl(1545,`p`),cN(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),ag()()(),Tl(1547,`tr`,13)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),cN(1551,` passwordLabel`),Gl(1552,`br`),ag()()(),Tl(1553,`td`,17)(1554,`code`,21),cN(1555,`string`),ag()(),Tl(1556,`td`,20)(1557,`em`)(1558,`strong`),cN(1559,`(opcional)`),ag()(),Tl(1560,`p`),cN(1561,`Texto exibido como label do campo de password.`),ag()()(),Tl(1562,`tr`,13)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),cN(1566,` passwordPlaceholder`),Gl(1567,`br`),ag()()(),Tl(1568,`td`,17)(1569,`code`,21),cN(1570,`string`),ag()(),Tl(1571,`td`,20)(1572,`em`)(1573,`strong`),cN(1574,`(opcional)`),ag()(),Tl(1575,`p`),cN(1576,`Placeholder do campo de password.`),ag()()(),Tl(1577,`tr`,13)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),cN(1581,` registerUrl`),Gl(1582,`br`),ag()()(),Tl(1583,`td`,17)(1584,`code`,21),cN(1585,`string`),ag()(),Tl(1586,`td`,20)(1587,`em`)(1588,`strong`),cN(1589,`(opcional)`),ag()(),Tl(1590,`p`),cN(1591,`Texto exibido no link de novo cadastro.`),ag()()(),Tl(1592,`tr`,13)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),cN(1596,` rememberUser`),Gl(1597,`br`),ag()()(),Tl(1598,`td`,17)(1599,`code`,21),cN(1600,`string`),ag()(),Tl(1601,`td`,20)(1602,`em`)(1603,`strong`),cN(1604,`(opcional)`),ag()(),Tl(1605,`p`),cN(1606,`Texto exibido na função "Lembrar usuário".`),ag()()(),Tl(1607,`tr`,13)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),cN(1611,` rememberUserHint`),Gl(1612,`br`),ag()()(),Tl(1613,`td`,17)(1614,`code`,21),cN(1615,`string`),ag()(),Tl(1616,`td`,20)(1617,`em`)(1618,`strong`),cN(1619,`(opcional)`),ag()(),Tl(1620,`p`),cN(1621,`Texto exibido como dica da função "Lembrar usuário"`),ag()()(),Tl(1622,`tr`,13)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),cN(1626,` submitLabel`),Gl(1627,`br`),ag()()(),Tl(1628,`td`,17)(1629,`code`,21),cN(1630,`string`),ag()(),Tl(1631,`td`,20)(1632,`em`)(1633,`strong`),cN(1634,`(opcional)`),ag()(),Tl(1635,`p`),cN(1636,`Texto exibido no botão de confirmação da página de login.`),ag()()(),Tl(1637,`tr`,13)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),cN(1641,` submittedLabel`),Gl(1642,`br`),ag()()(),Tl(1643,`td`,17)(1644,`code`,21),cN(1645,`string`),ag()(),Tl(1646,`td`,20)(1647,`em`)(1648,`strong`),cN(1649,`(opcional)`),ag()(),Tl(1650,`p`),cN(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),ag()()(),Tl(1652,`tr`,13)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),cN(1656,` support`),Gl(1657,`br`),ag()()(),Tl(1658,`td`,17)(1659,`code`,21),cN(1660,`string`),ag()(),Tl(1661,`td`,20)(1662,`em`)(1663,`strong`),cN(1664,`(opcional)`),ag()(),Tl(1665,`p`),cN(1666,`Label do botão de suporte.`),ag()()(),Tl(1667,`tr`,13)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),cN(1671,` titlePopover`),Gl(1672,`br`),ag()()(),Tl(1673,`td`,17)(1674,`code`,21),cN(1675,`string`),ag()(),Tl(1676,`td`,20)(1677,`em`)(1678,`strong`),cN(1679,`(opcional)`),ag()(),Tl(1680,`p`),cN(1681,`Título do popover para aviso de bloqueio.`),ag()()(),Tl(1682,`tr`,13)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),cN(1686,` welcome`),Gl(1687,`br`),ag()()(),Tl(1688,`td`,17)(1689,`code`,21),cN(1690,`string`),ag()(),Tl(1691,`td`,20)(1692,`em`)(1693,`strong`),cN(1694,`(opcional)`),ag()(),Tl(1695,`p`),cN(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),ag()()(),Tl(1697,`tr`,13)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),cN(1701,` yourUserWillBeBlocked`),Gl(1702,`br`),ag()()(),Tl(1703,`td`,17)(1704,`code`,21),cN(1705,`string`),ag()(),Tl(1706,`td`,20)(1707,`em`)(1708,`strong`),cN(1709,`(opcional)`),ag()(),Tl(1710,`p`),cN(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),ag()()()(),Tl(1712,`h4`,34)(1713,`code`,5),cN(1714,`PoPageLoginRecovery`),ag()(),Tl(1715,`div`,2)(1716,`p`),cN(1717,`Interface para especificação do tipo de recuperação de senha no `),Tl(1718,`code`),cN(1719,`po-modal-password-recovery`),ag(),cN(1720,`.`),ag()(),Tl(1721,`h4`,9),cN(1722,`Propriedades`),ag(),Tl(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),cN(1726,`Nome`),ag(),Tl(1727,`th`,12),cN(1728,`Tipo`),ag(),Tl(1729,`th`,12),cN(1730,`Descrição`),ag()(),Tl(1731,`tr`,13)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),cN(1735,` contactMail`),Gl(1736,`br`),ag()()(),Tl(1737,`td`,17)(1738,`code`,21),cN(1739,`string`),ag()(),Tl(1740,`td`,20)(1741,`em`)(1742,`strong`),cN(1743,`(opcional)`),ag()(),Tl(1744,`p`),cN(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),ag()()(),Tl(1746,`tr`,13)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),cN(1750,` phoneMask`),Gl(1751,`br`),ag()()(),Tl(1752,`td`,17)(1753,`code`,21),cN(1754,`string`),ag()(),Tl(1755,`td`,20)(1756,`em`)(1757,`strong`),cN(1758,`(opcional)`),ag()(),Tl(1759,`p`),cN(1760,`Definição da máscara do campo de telefone.`),ag()()(),Tl(1761,`tr`,13)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),cN(1765,` type`),Gl(1766,`br`),ag()()(),Tl(1767,`td`,17)(1768,`code`,36),cN(1769,`PoModalPasswordRecoveryType`),ag()(),Tl(1770,`td`,20)(1771,`em`)(1772,`strong`),cN(1773,`(opcional)`),ag()(),Tl(1774,`p`),cN(1775,`Enum para especificação do tipo de recuperação de senha `),Tl(1776,`a`,37),cN(1777,`PoModalPasswordRecoveryType`),ag(),cN(1778,`.`),ag(),Tl(1779,`blockquote`)(1780,`p`),cN(1781,`Caso não seja definido valor se assume o padrão `),Tl(1782,`code`),cN(1783,`PoModalPasswordRecoveryType.Email`),ag(),cN(1784,`.`),ag()()()(),Tl(1785,`tr`,13)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),cN(1789,` url`),Gl(1790,`br`),ag()()(),Tl(1791,`td`,17)(1792,`code`,21),cN(1793,`string`),ag()(),Tl(1794,`td`,20)(1795,`p`),cN(1796,`Endpoint usado pelo template `),Tl(1797,`strong`),cN(1798,`PoModalPasswordRecovery`),ag(),cN(1799,` para requisição do recurso.`),ag(),Tl(1800,`blockquote`)(1801,`p`),cN(1802,`Saiba mais em `),Tl(1803,`a`,37),cN(1804,`PoModalPasswordRecovery`),ag(),cN(1805,`.`),ag()()()()(),Tl(1806,`h4`,34)(1807,`code`,5),cN(1808,`PoPageLogin`),ag()(),Tl(1809,`div`,2)(1810,`p`),cN(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),Tl(1812,`code`),cN(1813,`po-page-login`),ag(),cN(1814,`.`),ag()(),Tl(1815,`h4`,9),cN(1816,`Propriedades`),ag(),Tl(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),cN(1820,`Nome`),ag(),Tl(1821,`th`,12),cN(1822,`Tipo`),ag(),Tl(1823,`th`,12),cN(1824,`Descrição`),ag()(),Tl(1825,`tr`,13)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),cN(1829,` login`),Gl(1830,`br`),ag()()(),Tl(1831,`td`,17)(1832,`code`,21),cN(1833,`string`),ag()(),Tl(1834,`td`,20)(1835,`p`),cN(1836,`Login preenchido pelo usuário.`),ag()()(),Tl(1837,`tr`,13)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),cN(1841,` password`),Gl(1842,`br`),ag()()(),Tl(1843,`td`,17)(1844,`code`,21),cN(1845,`string`),ag()(),Tl(1846,`td`,20)(1847,`p`),cN(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),ag()()(),Tl(1849,`tr`,13)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),cN(1853,` rememberUser`),Gl(1854,`br`),ag()()(),Tl(1855,`td`,17)(1856,`code`,25),cN(1857,`boolean`),ag()(),Tl(1858,`td`,20)(1859,`p`),cN(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),ag()()()(),Tl(1861,`h3`),cN(1862,`Enums`),ag(),Tl(1863,`h4`,4)(1864,`code`,5),cN(1865,`PoPageLoginAuthenticationType`),ag()(),Tl(1866,`div`,2)(1867,`p`)(1868,`em`),cN(1869,`Enum`),ag(),cN(1870,` para definição do tipo de autenticação.`),ag()(),Tl(1871,`h4`,9),cN(1872,`Propriedades`),ag(),Tl(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),cN(1876,`Nome`),ag(),Tl(1877,`th`,12),cN(1878,`Descrição`),ag()(),Tl(1879,`tr`,13)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),cN(1883,` Basic`),Gl(1884,`br`),ag()()(),Tl(1885,`td`,20)(1886,`p`),cN(1887,`Autenticação Basic`),ag()()(),Tl(1888,`tr`,13)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),cN(1892,` Bearer`),Gl(1893,`br`),ag()()(),Tl(1894,`td`,20)(1895,`p`),cN(1896,`Autenticação Bearer`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return r})();var We=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(w(Xn),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Login`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-page-login-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-page-login-basic-view`)(6,`sample-po-page-login-labs-view`)(7,`sample-po-page-login-human-resources-view`)(8,`sample-po-page-login-automatic-service-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ce,Ee,he,be,ve],encapsulation:2,changeDetection:1})}return r})()}];var Ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue$1({imports:[bL.forChild(We),bL]})}return r})();var wt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue$1({imports:[ar,Ce]})}return r})();export{wt as DocPoPageLoginModule};