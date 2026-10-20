import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Br as Sx,Ct as Wte,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Vi as p,Vr as TF,Vt as b5,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,g as ta,ga as xx,h as sa,i as _a,ir as EF,ji as mO,k as Ec,mn as ni,o as ae,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ue=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&nu(0,`po-page-login`)},dependencies:[sa],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r});var ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Login Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-login></po-page-login>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-login-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ye,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return r})();var ge=(()=>{class r{poDialog=p(Wte);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(p),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Sx();jc(0,`po-page-login`,2),mt(`p-login-submit`,function(a){return i.loginSubmit(a)}),wg(),nu(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.literals,a)||(i.literals=a),v_(a)}),mt(`p-change`,function(){return i.changeLiterals()}),wg(),jc(6,`po-input`,5),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.productName,a)||(i.productName=a),v_(a)}),wg()(),jc(7,`div`,3)(8,`po-input`,6),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.loginPattern,a)||(i.loginPattern=a),v_(a)}),wg(),jc(9,`po-input`,7),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.login,a)||(i.login=a),v_(a)}),wg()(),jc(10,`div`,3)(11,`po-input`,8),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.exceededAttempts,a)||(i.exceededAttempts=a),v_(a)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.passwordPattern,a)||(i.passwordPattern=a),v_(a)}),wg()(),jc(13,`div`,3)(14,`po-input`,10),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.contactEmail,a)||(i.contactEmail=a),v_(a)}),wg(),jc(15,`po-input`,11),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.environment,a)||(i.environment=a),v_(a)}),wg()(),jc(16,`div`,3)(17,`po-input`,12),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.logo,a)||(i.logo=a),v_(a)}),wg(),jc(18,`po-input`,13),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.secondaryLogo,a)||(i.secondaryLogo=a),v_(a)}),wg()(),jc(19,`div`,3)(20,`po-input`,14),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.background,a)||(i.background=a),v_(a)}),wg(),jc(21,`po-input`,15),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.support,a)||(i.support=a),v_(a)}),wg()(),jc(22,`div`,3)(23,`po-input`,16),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.recovery,a)||(i.recovery=a),v_(a)}),wg(),jc(24,`po-input`,17),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.registerUrl,a)||(i.registerUrl=a),v_(a)}),wg()(),jc(25,`div`,3)(26,`po-checkbox-group`,18),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.properties,a)||(i.properties=a),v_(a)}),wg(),jc(27,`po-radio-group`,19),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.componentsSize,a)||(i.componentsSize=a),v_(a)}),wg()(),nu(28,`po-divider`,20),jc(29,`div`,3)(30,`po-input`,21),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.loginError,a)||(i.loginError=a),v_(a)}),wg(),jc(31,`po-button`,22),mt(`p-click`,function(){return i.addLoginError()}),wg()(),nu(32,`po-divider`,23),jc(33,`div`,3)(34,`po-input`,24),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.passwordError,a)||(i.passwordError=a),v_(a)}),wg(),jc(35,`po-button`,25),mt(`p-click`,function(){return i.addPasswordError()}),wg()(),nu(36,`po-divider`,26),jc(37,`div`,3)(38,`po-input`,27),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.property,a)||(i.customField.property=a),v_(a)}),mt(`p-change-model`,function(){return i.onChangeCustomProperties()}),wg(),jc(39,`po-input`,28),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.value,a)||(i.customField.value=a),v_(a)}),wg()(),jc(40,`div`,3)(41,`po-input`,29),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.placeholder,a)||(i.customField.placeholder=a),v_(a)}),wg(),jc(42,`po-input`,30),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.pattern,a)||(i.customField.pattern=a),v_(a)}),wg(),jc(43,`po-input`,31),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.errorPattern,a)||(i.customField.errorPattern=a),v_(a)}),wg()(),nu(44,`po-divider`),jc(45,`div`,3)(46,`po-input`,32),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.url,a)||(i.customField.url=a),v_(a)}),mt(`p-change-model`,function(){return i.onChangeCustomProperties()}),wg(),jc(47,`po-input`,33),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customField.fieldValue,a)||(i.customField.fieldValue=a),v_(a)}),mt(`p-change-model`,function(){return i.onChangeCustomProperties()}),wg()(),nu(48,`po-divider`),jc(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customFieldOption.label,a)||(i.customFieldOption.label=a),v_(a)}),wg(),jc(53,`po-input`,35),JN(),ob(`ngModelChange`,function(a){return y_(d),sO(i.customFieldOption.value,a)||(i.customFieldOption.value=a),v_(a)}),wg()(),jc(54,`div`,3)(55,`po-button`,36),mt(`p-click`,function(){return i.addCustomFieldOption()}),wg()()(),nu(56,`br`)(57,`po-divider`),jc(58,`div`,3)(59,`po-button`,37),mt(`p-click`,function(){return i.restore()}),wg()()()}if(l&2){let d=Fx(50);jE(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),rg(5),ib(`ngModel`,i.literals),t0(),rg(),ib(`ngModel`,i.productName),t0(),rg(2),ib(`ngModel`,i.loginPattern),t0(),rg(),ib(`ngModel`,i.login),t0(),rg(2),ib(`ngModel`,i.exceededAttempts),t0(),rg(),ib(`ngModel`,i.passwordPattern),t0(),rg(2),ib(`ngModel`,i.contactEmail),t0(),rg(),ib(`ngModel`,i.environment),t0(),rg(2),ib(`ngModel`,i.logo),t0(),rg(),ib(`ngModel`,i.secondaryLogo),t0(),rg(2),ib(`ngModel`,i.background),t0(),rg(),ib(`ngModel`,i.support),t0(),rg(2),ib(`ngModel`,i.recovery),t0(),rg(),ib(`ngModel`,i.registerUrl),t0(),rg(2),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.componentsSize),jE(`p-options`,i.componentsSizeOptions),t0(),rg(3),ib(`ngModel`,i.loginError),t0(),rg(4),ib(`ngModel`,i.passwordError),t0(),rg(4),ib(`ngModel`,i.customField.property),t0(),rg(),ib(`ngModel`,i.customField.value),t0(),rg(2),ib(`ngModel`,i.customField.placeholder),t0(),rg(),ib(`ngModel`,i.customField.pattern),t0(),rg(),ib(`ngModel`,i.customField.errorPattern),t0(),rg(3),ib(`ngModel`,i.customField.url),t0(),rg(),ib(`ngModel`,i.customField.fieldValue),t0(),rg(5),ib(`ngModel`,i.customFieldOption.label),t0(),rg(),ib(`ngModel`,i.customFieldOption.value),t0(),rg(2),jE(`p-disabled`,d.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,sa],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r});var Ee=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Login Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-login
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-login-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return r})();function Te(r,fe){if(r&1){let p=Sx();jc(0,`po-page-login`,6),mt(`p-login-change`,function(){y_(p);let i=xx();return v_(i.loginChange())})(`p-login-submit`,function(i){y_(p);let d=xx();return v_(d.checkLogin(i))})(`p-password-change`,function(){y_(p);let i=xx();return v_(i.passwordChange())}),wg()}if(r&2){let p=xx();jE(`p-custom-field`,p.customField)(`p-exceeded-attempts-warning`,p.exceededAttempts)(`p-literals`,p.literalsI18n)(`p-loading`,p.loading)(`p-password-errors`,p.passwordErrors)(`p-login-errors`,p.loginErrors)(`p-recovery`,p.passwordRecovery)}}function De(r,fe){if(r&1&&nu(0,`po-page-blocked-user`,5),r&2){let p=xx();jE(`p-params`,p.params)}}var Se=(()=>{class r{poI18nService=p(b5);poDialog=p(Wte);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:ae.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0})}checkLogin(p){this.loading=!0,p.login===`devpo`&&p.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(l,i){l&1&&(jc(0,`po-container`)(1,`div`,0),nu(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),wg()(),px(5,Te,1,7,`po-page-login`,4),px(6,De,1,1,`po-page-blocked-user`,5)),l&2&&(rg(5),mx(i.showPageBlocked?-1:5),rg(),mx(i.showPageBlocked?6:-1))},dependencies:[Ec,_oe,ta,sa],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r});var he=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Login - Human Resources`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),wg(),jc(23,`pre`,9),iO(24,`/**
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-page-login-human-resources`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ae,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return r})();var xe=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(p){p?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Zn({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(l,i){l&1&&(jc(0,`po-container`)(1,`div`,0),nu(2,`po-info`,1)(3,`po-info`,2),wg()(),jc(4,`po-page-login`,3),mt(`p-language-change`,function(m){return i.changeLanguage(m)}),wg()),l&2&&(rg(4),jE(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[Ec,_oe,sa],encapsulation:2,changeDetection:1})}return r$1})();var Be=r=>({"docs-sample-code-tabs":r});var be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Login - Automatic Service`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-login-automatic-service`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Be,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,xe],encapsulation:2,changeDetection:1})}return r})();var ve=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do template do po-page-login.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoPageLoginComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-page-login`),wg(),iO(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),wg(),jc(18,`p`),iO(19,`A propriedade `),jc(20,`code`),iO(21,`p-authentication-url`),wg(),iO(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),jc(23,`em`),iO(24,`client side`),wg(),iO(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),jc(26,`em`),iO(27,`propriedades`),wg(),iO(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),wg(),jc(29,`p`),iO(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),jc(31,`em`),iO(32,`assets`),wg(),iO(33,` no arquivo `),jc(34,`strong`),iO(35,`angular.json`),wg(),iO(36,` da aplicação na seguinte ordem:`),wg(),jc(37,`pre`)(38,`code`),iO(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),wg()()(),jc(40,`div`,6)(41,`h4`,7),iO(42,`Seletor`),wg(),jc(43,`pre`,8),iO(44,`<po-page-login
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
`),wg()(),jc(45,`h4`,9),iO(46,`Propriedades`),wg(),jc(47,`table`,10)(48,`tr`,11)(49,`th`,12),iO(50,`Nome`),wg(),jc(51,`th`,12),iO(52,`Tipo`),wg(),jc(53,`th`,12),iO(54,`Padrão`),wg(),jc(55,`th`,12),iO(56,`Descrição`),wg()(),jc(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),iO(61,` p-authentication-type`),nu(62,`br`),wg()()(),jc(63,`td`,17)(64,`code`,18),iO(65,`PoPageLoginAuthenticationType`),wg()(),jc(66,`td`,19)(67,`p`)(68,`code`),iO(69,`PoPageLoginAuthenticationType.Basic`),wg()()(),jc(70,`td`,20)(71,`em`)(72,`strong`),iO(73,`(opcional)`),wg()(),jc(74,`p`),iO(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),jc(76,`code`),iO(77,`Basic`),wg(),iO(78,` e `),jc(79,`code`),iO(80,`Bearer`),wg(),iO(81,`.`),wg(),jc(82,`blockquote`)(83,`p`),iO(84,`Caso o tipo definido seja `),jc(85,`code`),iO(86,`Basic`),wg(),iO(87,`, o componente fará uma requisição `),jc(88,`code`),iO(89,`POST`),wg(),iO(90,` contendo:`),wg()(),jc(91,`pre`)(92,`code`),iO(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),wg()(),jc(94,`blockquote`)(95,`p`),iO(96,`Caso o tipo definido seja `),jc(97,`code`),iO(98,`Bearer`),wg(),iO(99,`, o componente fará uma requisição `),jc(100,`code`),iO(101,`POST`),wg(),iO(102,` contendo:`),wg()(),jc(103,`pre`)(104,`code`),iO(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),wg()()()(),jc(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),iO(110,` p-authentication-url`),nu(111,`br`),wg()()(),jc(112,`td`,17)(113,`code`,21),iO(114,`string`),wg()(),jc(115,`td`,19),iO(116,`-`),wg(),jc(117,`td`,20)(118,`em`)(119,`strong`),iO(120,`(opcional)`),wg()(),jc(121,`p`),iO(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),jc(123,`code`),iO(124,`p-login-submit`),wg(),iO(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),wg(),jc(126,`h3`),iO(127,`Processos`),wg(),jc(128,`p`),iO(129,`Ao digitar um valor válido no campo de login/password e pressionar `),jc(130,`strong`),iO(131,`Enter`),wg(),iO(132,`, o componente fará uma requisição `),jc(133,`code`),iO(134,`POST`),wg(),iO(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),wg(),jc(136,`pre`)(137,`code`),iO(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),wg()(),jc(139,`p`),iO(140,`Em caso de `),jc(141,`strong`),iO(142,`sucesso`),wg(),iO(143,`, o objeto de retorno é armazenado no `),jc(144,`code`),iO(145,`sessionStorage`),wg(),iO(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),jc(147,`code`),iO(148,`/`),wg(),iO(149,`.`),wg(),jc(150,`pre`)(151,`code`),iO(152,`200:
{
  user: user
}
`),wg()(),jc(153,`p`),iO(154,`Em caso de `),jc(155,`strong`),iO(156,`erro`),wg(),iO(157,` na autenticação, espera-se o seguinte retorno:`),wg(),jc(158,`pre`)(159,`code`),iO(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),wg()(),jc(161,`blockquote`)(162,`p`),iO(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),jc(164,`code`),iO(165,`p-exceeded-attempts-warning`),wg(),iO(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),jc(167,`code`),iO(168,`p-login-errors`),wg(),iO(169,` e
`),jc(170,`code`),iO(171,`p-password-errors`),wg(),iO(172,` conforme retorno abaixo:`),wg()(),jc(173,`pre`)(174,`code`),iO(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),wg()(),jc(176,`blockquote`)(177,`p`),iO(178,`Caso o valor atribuído para `),jc(179,`code`),iO(180,`p-exceeded-attempts-warning`),wg(),iO(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),jc(182,`code`),iO(183,`p-blocked-url`),wg(),iO(184,` e o usuário será redirecionado para uma tela de bloqueio.`),wg()(),jc(185,`p`)(186,`em`),iO(187,`Processo finalizado.`),wg()(),nu(188,`hr`),jc(189,`h4`),iO(190,`Praticidade`),wg(),jc(191,`p`),iO(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),jc(193,`code`),iO(194,`po-page-login`),wg(),iO(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),jc(196,`code`),iO(197,`/login`),wg(),iO(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),wg(),jc(199,`pre`)(200,`code`),iO(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),wg()(),jc(202,`p`),iO(203,`O metadado `),jc(204,`code`),iO(205,`serviceApi`),wg(),iO(206,` deve ser a `),jc(207,`strong`),iO(208,`url`),wg(),iO(209,` para requisição dos recursos de autenticação, o `),jc(210,`code`),iO(211,`environment`),wg(),iO(212,` alimenta a propriedade
`),jc(213,`code`),iO(214,`p-environment`),wg(),iO(215,`, `),jc(216,`code`),iO(217,`recovery`),wg(),iO(218,` é a interface `),jc(219,`code`),iO(220,`PoPageLoginRecovery`),wg(),iO(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),jc(222,`code`),iO(223,`registerUrl`),wg(),iO(224,` alimenta a propriedade `),jc(225,`code`),iO(226,`p-register-url`),wg(),iO(227,` e `),jc(228,`code`),iO(229,`authenticationType`),wg(),iO(230,` que define a propriedade `),jc(231,`code`),iO(232,`p-authentication-type`),wg(),iO(233,`.`),wg(),jc(234,`blockquote`)(235,`p`),iO(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),wg()()()(),jc(237,`tr`,13)(238,`td`,14)(239,`div`,15)(240,`span`,16),iO(241,` p-background`),nu(242,`br`),wg()()(),jc(243,`td`,17)(244,`code`,21),iO(245,`string`),wg()(),jc(246,`td`,19),iO(247,`-`),wg(),jc(248,`td`,20)(249,`em`)(250,`strong`),iO(251,`(opcional)`),wg()(),jc(252,`p`),iO(253,`O `),jc(254,`code`),iO(255,`p-background`),wg(),iO(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),wg(),jc(257,`p`),iO(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),wg(),jc(259,`p`),iO(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),jc(261,`code`),iO(262,`highlightInfo`),wg(),iO(263,`.`),wg(),jc(264,`blockquote`)(265,`p`),iO(266,`Veja mais sobre as literais na propriedade `),jc(267,`code`),iO(268,`p-literals`),wg(),iO(269,`.`),wg()(),jc(270,`p`),iO(271,`Exemplos de valores válidos:`),wg(),jc(272,`ul`)(273,`li`)(274,`strong`),iO(275,`local`),wg(),iO(276,`: `),jc(277,`code`),iO(278,`./assets/images/login-background.png`),wg()(),jc(279,`li`)(280,`strong`),iO(281,`url externa`),wg(),iO(282,`: `),jc(283,`code`),iO(284,`https://po-ui.io/assets/images/login-background.png`),wg()()(),jc(285,`blockquote`)(286,`p`),iO(287,`Essa propriedade é ignorada para aplicações mobile.`),wg()()()(),jc(288,`tr`,13)(289,`td`,14)(290,`div`,15)(291,`span`,16),iO(292,` p-blocked-url`),nu(293,`br`),wg()()(),jc(294,`td`,17)(295,`code`,21),iO(296,`string`),wg()(),jc(297,`td`,19),iO(298,`-`),wg(),jc(299,`td`,20)(300,`em`)(301,`strong`),iO(302,`(opcional)`),wg()(),jc(303,`p`),iO(304,`Caso o valor atribuído para `),jc(305,`code`),iO(306,`p-exceeded-attempts-warning`),wg(),iO(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),wg()()(),jc(308,`tr`,13)(309,`td`,14)(310,`div`,15)(311,`span`,16),iO(312,` p-components-size`),nu(313,`br`),wg()()(),jc(314,`td`,17)(315,`code`,21),iO(316,`string`),wg()(),jc(317,`td`,19)(318,`p`)(319,`code`),iO(320,`medium`),wg()()(),jc(321,`td`,20)(322,`em`)(323,`strong`),iO(324,`(opcional)`),wg()(),jc(325,`p`),iO(326,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(327,`ul`)(328,`li`)(329,`code`),iO(330,`small`),wg(),iO(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(332,`li`)(333,`code`),iO(334,`medium`),wg(),iO(335,`: aplica a medida medium de cada componente.`),wg()(),jc(336,`blockquote`)(337,`p`),iO(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(339,`code`),iO(340,`medium`),wg(),iO(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(342,`a`,22),iO(343,`po-theme`),wg(),iO(344,`.`),wg()()()(),jc(345,`tr`,13)(346,`td`,14)(347,`div`,15)(348,`span`,16),iO(349,` p-contact-email`),nu(350,`br`),wg()()(),jc(351,`td`,17)(352,`code`,21),iO(353,`string`),wg()(),jc(354,`td`,19),iO(355,`-`),wg(),jc(356,`td`,20)(357,`em`)(358,`strong`),iO(359,`(opcional)`),wg()(),jc(360,`p`),iO(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),wg()()(),jc(362,`tr`,13)(363,`td`,14)(364,`div`,15)(365,`span`,16),iO(366,` p-custom-field`),nu(367,`br`),wg()()(),jc(368,`td`,17)(369,`code`,21),iO(370,`string `),wg(),jc(371,`code`,23),iO(372,` PoPageLoginCustomField`),wg()(),jc(373,`td`,19),iO(374,`-`),wg(),jc(375,`td`,20)(376,`em`)(377,`strong`),iO(378,`(opcional)`),wg()(),jc(379,`p`),iO(380,`Ao informar um valor do tipo `),jc(381,`code`),iO(382,`string`),wg(),iO(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),jc(384,`code`),iO(385,`literals`),wg(),iO(386,` como `),jc(387,`code`),iO(388,`customFieldErrorPattern`),wg(),iO(389,` e `),jc(390,`code`),iO(391,`customFieldPlaceholder`),wg(),iO(392,`.`),wg(),jc(393,`p`),iO(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),jc(395,`code`),iO(396,`PoPageLoginCustomField`),wg(),iO(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),jc(398,`code`),iO(399,`po-input`),wg(),iO(400,`, `),jc(401,`code`),iO(402,`po-combo`),wg(),iO(403,` especificamente para servi\xE7os
ou `),jc(404,`code`),iO(405,`po-select`),wg(),iO(406,` para valores fixos.`),wg(),jc(407,`p`),iO(408,`Abaixo seguem os exemplos de cada tipo de campo.`),wg(),jc(409,`p`)(410,`code`),iO(411,`po-input`),wg(),iO(412,`:`),wg(),jc(413,`pre`)(414,`code`),iO(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),wg()(),jc(416,`p`)(417,`code`),iO(418,`po-combo`),wg(),iO(419,`:`),wg(),jc(420,`pre`)(421,`code`),iO(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),wg()(),jc(423,`p`)(424,`code`),iO(425,`po-select`),wg(),iO(426,`:`),wg(),jc(427,`pre`)(428,`code`),iO(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),wg()(),jc(430,`p`),iO(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),wg()()(),jc(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),iO(436,` p-environment`),nu(437,`br`),wg()()(),jc(438,`td`,17)(439,`code`,21),iO(440,`string`),wg()(),jc(441,`td`,19),iO(442,`-`),wg(),jc(443,`td`,20)(444,`em`)(445,`strong`),iO(446,`(opcional)`),wg()(),jc(447,`p`),iO(448,`Adiciona uma `),jc(449,`code`),iO(450,`tag`),wg(),iO(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),wg(),jc(452,`blockquote`)(453,`p`),iO(454,`Essa propriedade limita o texto em 40 caracteres.`),wg()()()(),jc(455,`tr`,13)(456,`td`,14)(457,`div`,15)(458,`span`,16),iO(459,` p-exceeded-attempts-warning`),nu(460,`br`),wg()()(),jc(461,`td`,17)(462,`code`,24),iO(463,`number`),wg()(),jc(464,`td`,19)(465,`p`)(466,`code`),iO(467,`0`),wg()()(),jc(468,`td`,20)(469,`em`)(470,`strong`),iO(471,`(opcional)`),wg()(),jc(472,`p`),iO(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),wg(),jc(474,`blockquote`)(475,`p`),iO(476,`Caso tenha algum valor atribuído para o atributo `),jc(477,`code`),iO(478,`p-authentication-url`),wg(),iO(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),jc(480,`code`),iO(481,`p-exceeded-attempts-warning`),wg(),iO(482,`, o valor considerado será o do retorno da requisição.`),wg()()()(),jc(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),iO(487,` p-hide-label-status`),nu(488,`br`),wg()()(),jc(489,`td`,17)(490,`code`,25),iO(491,`boolean`),wg()(),jc(492,`td`,19)(493,`p`)(494,`code`),iO(495,`false`),wg()()(),jc(496,`td`,20)(497,`em`)(498,`strong`),iO(499,`(opcional)`),wg()(),jc(500,`p`),iO(501,`Indica se o status do `),jc(502,`code`),iO(503,`model`),wg(),iO(504,` do switch de lembrar o usuário será escondido visualmente.`),wg(),jc(505,`blockquote`)(506,`p`),iO(507,`Por padrão será atribuído `),jc(508,`code`),iO(509,`false`),wg(),iO(510,`.`),wg()()()(),jc(511,`tr`,13)(512,`td`,14)(513,`div`,15)(514,`span`,16),iO(515,` p-hide-password-peek`),nu(516,`br`),wg()()(),jc(517,`td`,17)(518,`code`,25),iO(519,`boolean`),wg()(),jc(520,`td`,19)(521,`p`)(522,`code`),iO(523,`false`),wg()()(),jc(524,`td`,20)(525,`em`)(526,`strong`),iO(527,`(opcional)`),wg()(),jc(528,`p`),iO(529,`Permite esconder a função de espiar a senha digitada.`),wg()()(),jc(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),iO(534,` p-hide-remember-user`),nu(535,`br`),wg()()(),jc(536,`td`,17)(537,`code`,25),iO(538,`boolean`),wg()(),jc(539,`td`,19)(540,`p`)(541,`code`),iO(542,`false`),wg()()(),jc(543,`td`,20)(544,`em`)(545,`strong`),iO(546,`(opcional)`),wg()(),jc(547,`p`),iO(548,`Esconde a função "Lembrar usuário" do formulário de login.`),wg(),jc(549,`p`),iO(550,`Quando essa propriedade é setada com `),jc(551,`code`),iO(552,`true`),wg(),iO(553,` a propriedade `),jc(554,`code`),iO(555,`rememberUser`),wg(),iO(556,` enviada no evento `),jc(557,`code`),iO(558,`p-login-submit`),wg(),iO(559,` ser\xE1 sempre
`),jc(560,`code`),iO(561,`false`),wg(),iO(562,`.`),wg(),jc(563,`blockquote`)(564,`p`),iO(565,`Veja a propriedade `),jc(566,`code`),iO(567,`p-literals`),wg(),iO(568,` para customizar a literal `),jc(569,`code`),iO(570,`rememberUser`),wg(),iO(571,`.`),wg()()()(),jc(572,`tr`,13)(573,`td`,14)(574,`div`,26)(575,`span`,27),iO(576,` (p-language-change)`),nu(577,`br`),wg()()(),jc(578,`td`,17)(579,`code`,28),iO(580,`EventEmitter`),wg()(),jc(581,`td`,19),iO(582,`-`),wg(),jc(583,`td`,20)(584,`em`)(585,`strong`),iO(586,`(opcional)`),wg()(),jc(587,`p`),iO(588,`Evento disparado quando o usuário alterar o idioma da página.`),wg(),jc(589,`p`),iO(590,`Esse evento receberá como parâmetro um objeto do tipo `),jc(591,`code`),iO(592,`PoLanguage`),wg(),iO(593,` com a linguagem selecionada.`),wg()()(),jc(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),iO(598,` p-languages`),nu(599,`br`),wg()()(),jc(600,`td`,17)(601,`code`,29),iO(602,`Array<PoLanguage>`),wg()(),jc(603,`td`,19),iO(604,`-`),wg(),jc(605,`td`,20)(606,`em`)(607,`strong`),iO(608,`(opcional)`),wg()(),jc(609,`p`),iO(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),wg(),jc(611,`p`),iO(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),wg(),jc(613,`p`),iO(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),wg(),jc(615,`p`),iO(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),jc(617,`code`),iO(618,`i18n`),wg(),iO(619,` e não mostrará o combo de seleção.`),wg(),jc(620,`blockquote`)(621,`p`),iO(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),jc(623,`code`),iO(624,`p-literals`),wg(),iO(625,`.`),wg()()()(),jc(626,`tr`,13)(627,`td`,14)(628,`div`,15)(629,`span`,16),iO(630,` p-literals`),nu(631,`br`),wg()()(),jc(632,`td`,17)(633,`code`,30),iO(634,`PoPageLoginLiterals`),wg()(),jc(635,`td`,19),iO(636,`-`),wg(),jc(637,`td`,20)(638,`em`)(639,`strong`),iO(640,`(opcional)`),wg()(),jc(641,`p`),iO(642,`Objeto com as literais usadas no `),jc(643,`code`),iO(644,`po-page-login`),wg(),iO(645,`.`),wg(),jc(646,`p`),iO(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(648,`pre`)(649,`code`),iO(650,`const customLiterals: PoPageLoginLiterals = {
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
`),wg()(),jc(651,`p`),iO(652,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(653,`pre`)(654,`code`),iO(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),wg()(),jc(656,`p`),iO(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(658,`pre`)(659,`code`),iO(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),wg()(),jc(661,`blockquote`)(662,`p`),iO(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),wg()()()(),jc(664,`tr`,13)(665,`td`,14)(666,`div`,15)(667,`span`,16),iO(668,` p-loading`),nu(669,`br`),wg()()(),jc(670,`td`,17)(671,`code`,25),iO(672,`boolean`),wg()(),jc(673,`td`,19)(674,`p`)(675,`code`),iO(676,`false`),wg()()(),jc(677,`td`,20)(678,`em`)(679,`strong`),iO(680,`(opcional)`),wg()(),jc(681,`p`),iO(682,`Habilita um estado de carregamento ao botão de `),jc(683,`em`),iO(684,`login`),wg(),iO(685,`.`),wg(),jc(686,`blockquote`)(687,`p`),iO(688,`É necessário atribuir `),jc(689,`code`),iO(690,`true`),wg(),iO(691,` à esta propriedade na função definida em `),jc(692,`code`),iO(693,`p-login-submit`),wg(),iO(694,`.`),wg()()()(),jc(695,`tr`,13)(696,`td`,14)(697,`div`,15)(698,`span`,16),iO(699,` p-login`),nu(700,`br`),wg()()(),jc(701,`td`,17)(702,`code`,21),iO(703,`string`),wg()(),jc(704,`td`,19),iO(705,`-`),wg(),jc(706,`td`,20)(707,`em`)(708,`strong`),iO(709,`(opcional)`),wg()(),jc(710,`p`),iO(711,`Valor do modelo do campo de login.`),wg()()(),jc(712,`tr`,13)(713,`td`,14)(714,`div`,26)(715,`span`,27),iO(716,` (p-login-change)`),nu(717,`br`),wg()()(),jc(718,`td`,17)(719,`code`,28),iO(720,`EventEmitter`),wg()(),jc(721,`td`,19),iO(722,`-`),wg(),jc(723,`td`,20)(724,`em`)(725,`strong`),iO(726,`(opcional)`),wg()(),jc(727,`p`),iO(728,`Evento disparado quando o usuário alterar o input do campo login.`),wg(),jc(729,`p`),iO(730,`Esse evento receberá como parâmetro uma variável do tipo `),jc(731,`code`),iO(732,`string`),wg(),iO(733,` com o texto informado no campo.`),wg(),jc(734,`blockquote`)(735,`p`),iO(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),jc(737,`code`),iO(738,`p-authentication-url`),wg(),iO(739,`.`),wg()()()(),jc(740,`tr`,13)(741,`td`,14)(742,`div`,15)(743,`span`,16),iO(744,` p-login-errors`),nu(745,`br`),wg()()(),jc(746,`td`,17)(747,`code`,31),iO(748,`string[]`),wg()(),jc(749,`td`,19),iO(750,`-`),wg(),jc(751,`td`,20)(752,`em`)(753,`strong`),iO(754,`(opcional)`),wg()(),jc(755,`p`),iO(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),wg()()(),jc(757,`tr`,13)(758,`td`,14)(759,`div`,15)(760,`span`,16),iO(761,` p-login-pattern`),nu(762,`br`),wg()()(),jc(763,`td`,17)(764,`code`,21),iO(765,`string`),wg()(),jc(766,`td`,19),iO(767,`-`),wg(),jc(768,`td`,20)(769,`em`)(770,`strong`),iO(771,`(opcional)`),wg()(),jc(772,`p`),iO(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),jc(774,`code`),iO(775,`loginErrorPattern`),wg(),iO(776,`
ser\xE1 exibida.`),wg(),jc(777,`p`),iO(778,`Exemplos de valores válidos:`),wg(),jc(779,`ul`)(780,`li`),iO(781,`email: `),jc(782,`code`),iO(783,`[expressao-regular-email]`),wg()(),jc(784,`li`),iO(785,`cpf: `),jc(786,`code`),iO(787,`[expressao-regular-cpf]`),wg()()(),jc(788,`blockquote`)(789,`p`),iO(790,`Veja a propriedade `),jc(791,`code`),iO(792,`p-literals`),wg(),iO(793,` para customizar a literal `),jc(794,`code`),iO(795,`loginErrorPattern`),wg(),iO(796,`.`),wg()()()(),jc(797,`tr`,13)(798,`td`,14)(799,`div`,26)(800,`span`,27),iO(801,` (p-login-submit)`),nu(802,`br`),wg()()(),jc(803,`td`,17)(804,`code`,28),iO(805,`EventEmitter`),wg()(),jc(806,`td`,19),iO(807,`-`),wg(),jc(808,`td`,20)(809,`p`),iO(810,`Evento disparado ao submeter o formulário de login (apertando `),jc(811,`code`),iO(812,`Enter`),wg(),iO(813,` dentro dos campos ou pressionando o botão de confirmação).`),wg(),jc(814,`p`),iO(815,`Esse evento receberá como parâmetro um objeto do tipo `),jc(816,`code`),iO(817,`PoPageLogin`),wg(),iO(818,` com os dados informados no formulário.`),wg(),jc(819,`blockquote`)(820,`p`),iO(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),jc(822,`code`),iO(823,`p-url-recovery`),wg(),iO(824,`.`),wg()(),jc(825,`blockquote`)(826,`p`),iO(827,`Para mais detalhes consulte a documentação sobre a interface `),jc(828,`code`),iO(829,`PoPageLogin`),wg(),iO(830,` mais abaixo.`),wg()()()(),jc(831,`tr`,13)(832,`td`,14)(833,`div`,15)(834,`span`,16),iO(835,` p-logo`),nu(836,`br`),wg()()(),jc(837,`td`,17)(838,`code`,21),iO(839,`string`),wg()(),jc(840,`td`,19),iO(841,`-`),wg(),jc(842,`td`,20)(843,`em`)(844,`strong`),iO(845,`(opcional)`),wg()(),jc(846,`p`),iO(847,`Caminho para a logomarca localizada na parte superior.`),wg(),jc(848,`blockquote`)(849,`p`),iO(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),wg()()()(),jc(851,`tr`,13)(852,`td`,14)(853,`div`,15)(854,`span`,16),iO(855,` p-no-autocomplete-login`),nu(856,`br`),wg()()(),jc(857,`td`,17)(858,`code`,25),iO(859,`boolean`),wg()(),jc(860,`td`,19)(861,`p`)(862,`code`),iO(863,`true`),wg()()(),jc(864,`td`,20)(865,`em`)(866,`strong`),iO(867,`(opcional)`),wg()(),jc(868,`p`),iO(869,`Define a propriedade nativa `),jc(870,`code`),iO(871,`autocomplete`),wg(),iO(872,` do campo como `),jc(873,`code`),iO(874,`off`),wg(),iO(875,`.`),wg()()(),jc(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),iO(880,` p-no-autocomplete-password`),nu(881,`br`),wg()()(),jc(882,`td`,17)(883,`code`,25),iO(884,`boolean`),wg()(),jc(885,`td`,19)(886,`p`)(887,`code`),iO(888,`true`),wg()()(),jc(889,`td`,20)(890,`em`)(891,`strong`),iO(892,`(opcional)`),wg()(),jc(893,`p`),iO(894,`Define a propriedade nativa `),jc(895,`code`),iO(896,`autocomplete`),wg(),iO(897,` do campo como `),jc(898,`code`),iO(899,`off`),wg(),iO(900,`.`),wg(),jc(901,`blockquote`)(902,`p`),iO(903,`No componente `),jc(904,`code`),iO(905,`po-password`),wg(),iO(906,` será definido como `),jc(907,`code`),iO(908,`new-password`),wg(),iO(909,`.`),wg()()()(),jc(910,`tr`,13)(911,`td`,14)(912,`div`,26)(913,`span`,27),iO(914,` (p-password-change)`),nu(915,`br`),wg()()(),jc(916,`td`,17)(917,`code`,28),iO(918,`EventEmitter`),wg()(),jc(919,`td`,19),iO(920,`-`),wg(),jc(921,`td`,20)(922,`em`)(923,`strong`),iO(924,`(opcional)`),wg()(),jc(925,`p`),iO(926,`Evento disparado quando o usuário alterar o input do campo password.`),wg(),jc(927,`p`),iO(928,`Esse evento receberá como parâmetro uma variável do tipo `),jc(929,`code`),iO(930,`string`),wg(),iO(931,` com o texto informado no campo.`),wg(),jc(932,`blockquote`)(933,`p`),iO(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),jc(935,`code`),iO(936,`p-authentication-url`),wg(),iO(937,`.`),wg()()()(),jc(938,`tr`,13)(939,`td`,14)(940,`div`,15)(941,`span`,16),iO(942,` p-password-errors`),nu(943,`br`),wg()()(),jc(944,`td`,17)(945,`code`,31),iO(946,`string[]`),wg()(),jc(947,`td`,19),iO(948,`-`),wg(),jc(949,`td`,20)(950,`em`)(951,`strong`),iO(952,`(opcional)`),wg()(),jc(953,`p`),iO(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),wg()()(),jc(955,`tr`,13)(956,`td`,14)(957,`div`,15)(958,`span`,16),iO(959,` p-password-pattern`),nu(960,`br`),wg()()(),jc(961,`td`,17)(962,`code`,21),iO(963,`string`),wg()(),jc(964,`td`,19),iO(965,`-`),wg(),jc(966,`td`,20)(967,`em`)(968,`strong`),iO(969,`(opcional)`),wg()(),jc(970,`p`),iO(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),jc(972,`code`),iO(973,`passwordErrorPattern`),wg(),iO(974,`
ser\xE1 exibida.`),wg(),jc(975,`p`),iO(976,`Exemplos de valores válidos:`),wg(),jc(977,`ul`)(978,`li`),iO(979,`Apenas números: `),jc(980,`code`),iO(981,`\\d?`),wg()(),jc(982,`li`),iO(983,`Letras mínusculas: `),jc(984,`code`),iO(985,`\\z?`),wg()()(),jc(986,`blockquote`)(987,`p`),iO(988,`Veja a propriedade `),jc(989,`code`),iO(990,`p-literals`),wg(),iO(991,` para customizar a literal `),jc(992,`code`),iO(993,`passwordErrorPattern`),wg(),iO(994,`.`),wg()()()(),jc(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),iO(999,` p-product-name`),nu(1e3,`br`),wg()()(),jc(1001,`td`,17)(1002,`code`,21),iO(1003,`string`),wg()(),jc(1004,`td`,19),iO(1005,`-`),wg(),jc(1006,`td`,20)(1007,`em`)(1008,`strong`),iO(1009,`(opcional)`),wg()(),jc(1010,`p`),iO(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),wg()()(),jc(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),iO(1016,` p-recovery`),nu(1017,`br`),wg()()(),jc(1018,`td`,17)(1019,`code`,21),iO(1020,`string `),wg(),jc(1021,`code`,32),iO(1022,` Function `),wg(),jc(1023,`code`,33),iO(1024,` PoPageLoginRecovery`),wg()(),jc(1025,`td`,19),iO(1026,`-`),wg(),jc(1027,`td`,20)(1028,`em`)(1029,`strong`),iO(1030,`(opcional)`),wg()(),jc(1031,`p`),iO(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),wg(),jc(1033,`p`),iO(1034,`A propriedade aceita os seguintes tipos:`),wg(),jc(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),iO(1039,`String`),wg(),iO(1040,`: informe uma url externa ou uma rota válida;`),wg()(),jc(1041,`li`)(1042,`p`)(1043,`strong`),iO(1044,`Function`),wg(),iO(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),wg(),jc(1046,`pre`)(1047,`code`),iO(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),wg()()(),jc(1049,`li`)(1050,`p`)(1051,`strong`),iO(1052,`PoPageLoginRecovery`),wg(),iO(1053,`: cria-se vínculo automático com o template `),jc(1054,`strong`),iO(1055,`po-modal-password-recovery`),wg(),iO(1056,`.
O objeto deve conter a `),jc(1057,`strong`),iO(1058,`url`),wg(),iO(1059,` para requisição dos recursos e pode-se definir o `),jc(1060,`strong`),iO(1061,`tipo`),wg(),iO(1062,` de modal para recupera\xE7\xE3o de senha,
`),jc(1063,`strong`),iO(1064,`email`),wg(),iO(1065,` para contato e `),jc(1066,`strong`),iO(1067,`máscara`),wg(),iO(1068,` do campo de telefone.`),wg()()()()(),jc(1069,`tr`,13)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),iO(1073,` p-register-url`),nu(1074,`br`),wg()()(),jc(1075,`td`,17)(1076,`code`,21),iO(1077,`string`),wg()(),jc(1078,`td`,19),iO(1079,`-`),wg(),jc(1080,`td`,20)(1081,`em`)(1082,`strong`),iO(1083,`(opcional)`),wg()(),jc(1084,`p`),iO(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),wg(),jc(1086,`p`),iO(1087,`Exemplos de valores válidos:`),wg(),jc(1088,`ul`)(1089,`li`)(1090,`strong`),iO(1091,`local`),wg(),iO(1092,`: `),jc(1093,`code`),iO(1094,`/home`),wg()(),jc(1095,`li`)(1096,`strong`),iO(1097,`url externa`),wg(),iO(1098,`: `),jc(1099,`code`),iO(1100,`https://po-ui.io`),wg()()(),jc(1101,`blockquote`)(1102,`p`),iO(1103,`Veja a propriedade `),jc(1104,`code`),iO(1105,`p-literals`),wg(),iO(1106,` para customizar a literal `),jc(1107,`code`),iO(1108,`registerUrl`),wg(),iO(1109,`.`),wg()()()(),jc(1110,`tr`,13)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),iO(1114,` p-secondary-logo`),nu(1115,`br`),wg()()(),jc(1116,`td`,17)(1117,`code`,21),iO(1118,`string`),wg()(),jc(1119,`td`,19),iO(1120,`-`),wg(),jc(1121,`td`,20)(1122,`em`)(1123,`strong`),iO(1124,`(opcional)`),wg()(),jc(1125,`p`),iO(1126,`Caminho para a logomarca localizada no rodapé.`),wg()()(),jc(1127,`tr`,13)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),iO(1131,` p-support`),nu(1132,`br`),wg()()(),jc(1133,`td`,17)(1134,`code`,21),iO(1135,`string `),wg(),jc(1136,`code`,32),iO(1137,` Function`),wg()(),jc(1138,`td`,19),iO(1139,`-`),wg(),jc(1140,`td`,20)(1141,`em`)(1142,`strong`),iO(1143,`(opcional)`),wg()(),jc(1144,`p`),iO(1145,`Exibe um botão para suporte.`),wg(),jc(1146,`p`),iO(1147,`A propriedade aceita os seguintes tipos:`),wg(),jc(1148,`ul`)(1149,`li`)(1150,`strong`),iO(1151,`String`),wg(),iO(1152,`: URL externa ou uma rota válida;`),wg(),jc(1153,`li`)(1154,`strong`),iO(1155,`Function`),wg(),iO(1156,`: Função a ser disparada ao clicar no botão de suporte;`),jc(1157,`pre`)(1158,`code`),iO(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),wg()()()()()()(),jc(1160,`h3`),iO(1161,`Interfaces`),wg(),jc(1162,`h4`,34)(1163,`code`,5),iO(1164,`PoPageLoginCustomField`),wg()(),jc(1165,`div`,2)(1166,`p`),iO(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),jc(1168,`code`),iO(1169,`po-page-login`),wg(),iO(1170,`.`),wg()(),jc(1171,`h4`,9),iO(1172,`Propriedades`),wg(),jc(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),iO(1176,`Nome`),wg(),jc(1177,`th`,12),iO(1178,`Tipo`),wg(),jc(1179,`th`,12),iO(1180,`Descrição`),wg()(),jc(1181,`tr`,13)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),iO(1185,` errorPattern`),nu(1186,`br`),wg()()(),jc(1187,`td`,17)(1188,`code`,21),iO(1189,`string`),wg()(),jc(1190,`td`,20)(1191,`em`)(1192,`strong`),iO(1193,`(opcional)`),wg()(),jc(1194,`p`),iO(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),jc(1196,`code`),iO(1197,`pattern`),wg(),iO(1198,` não for válida.`),wg()()(),jc(1199,`tr`,13)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),iO(1203,` fieldValue`),nu(1204,`br`),wg()()(),jc(1205,`td`,17)(1206,`code`,21),iO(1207,`string`),wg()(),jc(1208,`td`,20)(1209,`em`)(1210,`strong`),iO(1211,`(opcional)`),wg()(),jc(1212,`p`),iO(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),jc(1214,`code`),iO(1215,`po-combo`),wg(),iO(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),wg()()(),jc(1217,`tr`,13)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),iO(1221,` options`),nu(1222,`br`),wg()()(),jc(1223,`td`,17)(1224,`code`,35),iO(1225,`Array<PoSelectOption>`),wg()(),jc(1226,`td`,20)(1227,`em`)(1228,`strong`),iO(1229,`(opcional)`),wg()(),jc(1230,`p`),iO(1231,`Lista de opções de um `),jc(1232,`code`),iO(1233,`po-select`),wg(),iO(1234,`.`),wg()()(),jc(1235,`tr`,13)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),iO(1239,` pattern`),nu(1240,`br`),wg()()(),jc(1241,`td`,17)(1242,`code`,21),iO(1243,`string`),wg()(),jc(1244,`td`,20)(1245,`em`)(1246,`strong`),iO(1247,`(opcional)`),wg()(),jc(1248,`p`),iO(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),jc(1250,`code`),iO(1251,`errorPattern`),wg(),iO(1252,` será exibida.`),wg()()(),jc(1253,`tr`,13)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),iO(1257,` placeholder`),nu(1258,`br`),wg()()(),jc(1259,`td`,17)(1260,`code`,21),iO(1261,`string`),wg()(),jc(1262,`td`,20)(1263,`em`)(1264,`strong`),iO(1265,`(opcional)`),wg()(),jc(1266,`p`),iO(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),wg()()(),jc(1268,`tr`,13)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),iO(1272,` property`),nu(1273,`br`),wg()()(),jc(1274,`td`,17)(1275,`code`,21),iO(1276,`string`),wg()(),jc(1277,`td`,20)(1278,`p`),iO(1279,`Nome da propriedade que será utilizado no campo customizado.`),wg()()(),jc(1280,`tr`,13)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),iO(1284,` url`),nu(1285,`br`),wg()()(),jc(1286,`td`,17)(1287,`code`,21),iO(1288,`string`),wg()(),jc(1289,`td`,20)(1290,`em`)(1291,`strong`),iO(1292,`(opcional)`),wg()(),jc(1293,`p`),iO(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),jc(1295,`code`),iO(1296,`po-combo`),wg(),iO(1297,`.`),wg()()(),jc(1298,`tr`,13)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),iO(1302,` value`),nu(1303,`br`),wg()()(),jc(1304,`td`,17)(1305,`code`,21),iO(1306,`string `),wg(),jc(1307,`code`,24),iO(1308,` number`),wg()(),jc(1309,`td`,20)(1310,`em`)(1311,`strong`),iO(1312,`(opcional)`),wg()(),jc(1313,`p`),iO(1314,`Valor do campo customizado.`),wg()()()(),jc(1315,`h4`,34)(1316,`code`,5),iO(1317,`PoPageLoginLiterals`),wg()(),jc(1318,`div`,2)(1319,`p`),iO(1320,`Interface para definição das literais usadas no `),jc(1321,`code`),iO(1322,`po-page-login`),wg(),iO(1323,`.`),wg()(),jc(1324,`h4`,9),iO(1325,`Propriedades`),wg(),jc(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),iO(1329,`Nome`),wg(),jc(1330,`th`,12),iO(1331,`Tipo`),wg(),jc(1332,`th`,12),iO(1333,`Descrição`),wg()(),jc(1334,`tr`,13)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),iO(1338,` attempts`),nu(1339,`br`),wg()()(),jc(1340,`td`,17)(1341,`code`,21),iO(1342,`string`),wg()(),jc(1343,`td`,20)(1344,`em`)(1345,`strong`),iO(1346,`(opcional)`),wg()(),jc(1347,`p`),iO(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),wg()()(),jc(1349,`tr`,13)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),iO(1353,` createANewPasswordNow`),nu(1354,`br`),wg()()(),jc(1355,`td`,17)(1356,`code`,21),iO(1357,`string`),wg()(),jc(1358,`td`,20)(1359,`em`)(1360,`strong`),iO(1361,`(opcional)`),wg()(),jc(1362,`p`),iO(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),wg()()(),jc(1364,`tr`,13)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),iO(1368,` customFieldErrorPattern`),nu(1369,`br`),wg()()(),jc(1370,`td`,17)(1371,`code`,21),iO(1372,`string`),wg()(),jc(1373,`td`,20)(1374,`em`)(1375,`strong`),iO(1376,`(opcional)`),wg()(),jc(1377,`p`),iO(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),wg()()(),jc(1379,`tr`,13)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),iO(1383,` customFieldPlaceholder`),nu(1384,`br`),wg()()(),jc(1385,`td`,17)(1386,`code`,21),iO(1387,`string`),wg()(),jc(1388,`td`,20)(1389,`em`)(1390,`strong`),iO(1391,`(opcional)`),wg()(),jc(1392,`p`),iO(1393,`Placeholder para o campo customizado.`),wg()()(),jc(1394,`tr`,13)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),iO(1398,` forgotPassword`),nu(1399,`br`),wg()()(),jc(1400,`td`,17)(1401,`code`,21),iO(1402,`string`),wg()(),jc(1403,`td`,20)(1404,`em`)(1405,`strong`),iO(1406,`(opcional)`),wg()(),jc(1407,`p`),iO(1408,`Texto de ajuda para recuperação dos dados de acesso.`),wg()()(),jc(1409,`tr`,13)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),iO(1413,` forgotYourPassword`),nu(1414,`br`),wg()()(),jc(1415,`td`,17)(1416,`code`,21),iO(1417,`string`),wg()(),jc(1418,`td`,20)(1419,`em`)(1420,`strong`),iO(1421,`(opcional)`),wg()(),jc(1422,`p`),iO(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),wg()()(),jc(1424,`tr`,13)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),iO(1428,` highlightInfo`),nu(1429,`br`),wg()()(),jc(1430,`td`,17)(1431,`code`,21),iO(1432,`string`),wg()(),jc(1433,`td`,20)(1434,`em`)(1435,`strong`),iO(1436,`(opcional)`),wg()(),jc(1437,`p`),iO(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),jc(1439,`code`),iO(1440,`p-background`),wg(),iO(1441,`.`),wg()()(),jc(1442,`tr`,13)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),iO(1446,` iForgotMyPassword`),nu(1447,`br`),wg()()(),jc(1448,`td`,17)(1449,`code`,21),iO(1450,`string`),wg()(),jc(1451,`td`,20)(1452,`em`)(1453,`strong`),iO(1454,`(opcional)`),wg()(),jc(1455,`p`),iO(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),wg()()(),jc(1457,`tr`,13)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),iO(1461,` ifYouTryHarder`),nu(1462,`br`),wg()()(),jc(1463,`td`,17)(1464,`code`,21),iO(1465,`string`),wg()(),jc(1466,`td`,20)(1467,`em`)(1468,`strong`),iO(1469,`(opcional)`),wg()(),jc(1470,`p`),iO(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),wg()()(),jc(1472,`tr`,13)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),iO(1476,` loginErrorPattern`),nu(1477,`br`),wg()()(),jc(1478,`td`,17)(1479,`code`,21),iO(1480,`string`),wg()(),jc(1481,`td`,20)(1482,`em`)(1483,`strong`),iO(1484,`(opcional)`),wg()(),jc(1485,`p`),iO(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),wg()()(),jc(1487,`tr`,13)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),iO(1491,` loginHint`),nu(1492,`br`),wg()()(),jc(1493,`td`,17)(1494,`code`,21),iO(1495,`string`),wg()(),jc(1496,`td`,20)(1497,`em`)(1498,`strong`),iO(1499,`(opcional)`),wg()(),jc(1500,`p`),iO(1501,`Texto exibido como dica para o campo de login.`),wg()()(),jc(1502,`tr`,13)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),iO(1506,` loginLabel`),nu(1507,`br`),wg()()(),jc(1508,`td`,17)(1509,`code`,21),iO(1510,`string`),wg()(),jc(1511,`td`,20)(1512,`em`)(1513,`strong`),iO(1514,`(opcional)`),wg()(),jc(1515,`p`),iO(1516,`Texto exibido como label do campo de login.`),wg()()(),jc(1517,`tr`,13)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),iO(1521,` loginPlaceholder`),nu(1522,`br`),wg()()(),jc(1523,`td`,17)(1524,`code`,21),iO(1525,`string`),wg()(),jc(1526,`td`,20)(1527,`em`)(1528,`strong`),iO(1529,`(opcional)`),wg()(),jc(1530,`p`),iO(1531,`Placeholder do campo de login.`),wg()()(),jc(1532,`tr`,13)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),iO(1536,` passwordErrorPattern`),nu(1537,`br`),wg()()(),jc(1538,`td`,17)(1539,`code`,21),iO(1540,`string`),wg()(),jc(1541,`td`,20)(1542,`em`)(1543,`strong`),iO(1544,`(opcional)`),wg()(),jc(1545,`p`),iO(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),wg()()(),jc(1547,`tr`,13)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),iO(1551,` passwordLabel`),nu(1552,`br`),wg()()(),jc(1553,`td`,17)(1554,`code`,21),iO(1555,`string`),wg()(),jc(1556,`td`,20)(1557,`em`)(1558,`strong`),iO(1559,`(opcional)`),wg()(),jc(1560,`p`),iO(1561,`Texto exibido como label do campo de password.`),wg()()(),jc(1562,`tr`,13)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),iO(1566,` passwordPlaceholder`),nu(1567,`br`),wg()()(),jc(1568,`td`,17)(1569,`code`,21),iO(1570,`string`),wg()(),jc(1571,`td`,20)(1572,`em`)(1573,`strong`),iO(1574,`(opcional)`),wg()(),jc(1575,`p`),iO(1576,`Placeholder do campo de password.`),wg()()(),jc(1577,`tr`,13)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),iO(1581,` registerUrl`),nu(1582,`br`),wg()()(),jc(1583,`td`,17)(1584,`code`,21),iO(1585,`string`),wg()(),jc(1586,`td`,20)(1587,`em`)(1588,`strong`),iO(1589,`(opcional)`),wg()(),jc(1590,`p`),iO(1591,`Texto exibido no link de novo cadastro.`),wg()()(),jc(1592,`tr`,13)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),iO(1596,` rememberUser`),nu(1597,`br`),wg()()(),jc(1598,`td`,17)(1599,`code`,21),iO(1600,`string`),wg()(),jc(1601,`td`,20)(1602,`em`)(1603,`strong`),iO(1604,`(opcional)`),wg()(),jc(1605,`p`),iO(1606,`Texto exibido na função "Lembrar usuário".`),wg()()(),jc(1607,`tr`,13)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),iO(1611,` rememberUserHint`),nu(1612,`br`),wg()()(),jc(1613,`td`,17)(1614,`code`,21),iO(1615,`string`),wg()(),jc(1616,`td`,20)(1617,`em`)(1618,`strong`),iO(1619,`(opcional)`),wg()(),jc(1620,`p`),iO(1621,`Texto exibido como dica da função "Lembrar usuário"`),wg()()(),jc(1622,`tr`,13)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),iO(1626,` submitLabel`),nu(1627,`br`),wg()()(),jc(1628,`td`,17)(1629,`code`,21),iO(1630,`string`),wg()(),jc(1631,`td`,20)(1632,`em`)(1633,`strong`),iO(1634,`(opcional)`),wg()(),jc(1635,`p`),iO(1636,`Texto exibido no botão de confirmação da página de login.`),wg()()(),jc(1637,`tr`,13)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),iO(1641,` submittedLabel`),nu(1642,`br`),wg()()(),jc(1643,`td`,17)(1644,`code`,21),iO(1645,`string`),wg()(),jc(1646,`td`,20)(1647,`em`)(1648,`strong`),iO(1649,`(opcional)`),wg()(),jc(1650,`p`),iO(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),wg()()(),jc(1652,`tr`,13)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),iO(1656,` support`),nu(1657,`br`),wg()()(),jc(1658,`td`,17)(1659,`code`,21),iO(1660,`string`),wg()(),jc(1661,`td`,20)(1662,`em`)(1663,`strong`),iO(1664,`(opcional)`),wg()(),jc(1665,`p`),iO(1666,`Label do botão de suporte.`),wg()()(),jc(1667,`tr`,13)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),iO(1671,` titlePopover`),nu(1672,`br`),wg()()(),jc(1673,`td`,17)(1674,`code`,21),iO(1675,`string`),wg()(),jc(1676,`td`,20)(1677,`em`)(1678,`strong`),iO(1679,`(opcional)`),wg()(),jc(1680,`p`),iO(1681,`Título do popover para aviso de bloqueio.`),wg()()(),jc(1682,`tr`,13)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),iO(1686,` welcome`),nu(1687,`br`),wg()()(),jc(1688,`td`,17)(1689,`code`,21),iO(1690,`string`),wg()(),jc(1691,`td`,20)(1692,`em`)(1693,`strong`),iO(1694,`(opcional)`),wg()(),jc(1695,`p`),iO(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),wg()()(),jc(1697,`tr`,13)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),iO(1701,` yourUserWillBeBlocked`),nu(1702,`br`),wg()()(),jc(1703,`td`,17)(1704,`code`,21),iO(1705,`string`),wg()(),jc(1706,`td`,20)(1707,`em`)(1708,`strong`),iO(1709,`(opcional)`),wg()(),jc(1710,`p`),iO(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),wg()()()(),jc(1712,`h4`,34)(1713,`code`,5),iO(1714,`PoPageLoginRecovery`),wg()(),jc(1715,`div`,2)(1716,`p`),iO(1717,`Interface para especificação do tipo de recuperação de senha no `),jc(1718,`code`),iO(1719,`po-modal-password-recovery`),wg(),iO(1720,`.`),wg()(),jc(1721,`h4`,9),iO(1722,`Propriedades`),wg(),jc(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),iO(1726,`Nome`),wg(),jc(1727,`th`,12),iO(1728,`Tipo`),wg(),jc(1729,`th`,12),iO(1730,`Descrição`),wg()(),jc(1731,`tr`,13)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),iO(1735,` contactMail`),nu(1736,`br`),wg()()(),jc(1737,`td`,17)(1738,`code`,21),iO(1739,`string`),wg()(),jc(1740,`td`,20)(1741,`em`)(1742,`strong`),iO(1743,`(opcional)`),wg()(),jc(1744,`p`),iO(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),wg()()(),jc(1746,`tr`,13)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),iO(1750,` phoneMask`),nu(1751,`br`),wg()()(),jc(1752,`td`,17)(1753,`code`,21),iO(1754,`string`),wg()(),jc(1755,`td`,20)(1756,`em`)(1757,`strong`),iO(1758,`(opcional)`),wg()(),jc(1759,`p`),iO(1760,`Definição da máscara do campo de telefone.`),wg()()(),jc(1761,`tr`,13)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),iO(1765,` type`),nu(1766,`br`),wg()()(),jc(1767,`td`,17)(1768,`code`,36),iO(1769,`PoModalPasswordRecoveryType`),wg()(),jc(1770,`td`,20)(1771,`em`)(1772,`strong`),iO(1773,`(opcional)`),wg()(),jc(1774,`p`),iO(1775,`Enum para especificação do tipo de recuperação de senha `),jc(1776,`a`,37),iO(1777,`PoModalPasswordRecoveryType`),wg(),iO(1778,`.`),wg(),jc(1779,`blockquote`)(1780,`p`),iO(1781,`Caso não seja definido valor se assume o padrão `),jc(1782,`code`),iO(1783,`PoModalPasswordRecoveryType.Email`),wg(),iO(1784,`.`),wg()()()(),jc(1785,`tr`,13)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),iO(1789,` url`),nu(1790,`br`),wg()()(),jc(1791,`td`,17)(1792,`code`,21),iO(1793,`string`),wg()(),jc(1794,`td`,20)(1795,`p`),iO(1796,`Endpoint usado pelo template `),jc(1797,`strong`),iO(1798,`PoModalPasswordRecovery`),wg(),iO(1799,` para requisição do recurso.`),wg(),jc(1800,`blockquote`)(1801,`p`),iO(1802,`Saiba mais em `),jc(1803,`a`,37),iO(1804,`PoModalPasswordRecovery`),wg(),iO(1805,`.`),wg()()()()(),jc(1806,`h4`,34)(1807,`code`,5),iO(1808,`PoPageLogin`),wg()(),jc(1809,`div`,2)(1810,`p`),iO(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),jc(1812,`code`),iO(1813,`po-page-login`),wg(),iO(1814,`.`),wg()(),jc(1815,`h4`,9),iO(1816,`Propriedades`),wg(),jc(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),iO(1820,`Nome`),wg(),jc(1821,`th`,12),iO(1822,`Tipo`),wg(),jc(1823,`th`,12),iO(1824,`Descrição`),wg()(),jc(1825,`tr`,13)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),iO(1829,` login`),nu(1830,`br`),wg()()(),jc(1831,`td`,17)(1832,`code`,21),iO(1833,`string`),wg()(),jc(1834,`td`,20)(1835,`p`),iO(1836,`Login preenchido pelo usuário.`),wg()()(),jc(1837,`tr`,13)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),iO(1841,` password`),nu(1842,`br`),wg()()(),jc(1843,`td`,17)(1844,`code`,21),iO(1845,`string`),wg()(),jc(1846,`td`,20)(1847,`p`),iO(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),wg()()(),jc(1849,`tr`,13)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),iO(1853,` rememberUser`),nu(1854,`br`),wg()()(),jc(1855,`td`,17)(1856,`code`,25),iO(1857,`boolean`),wg()(),jc(1858,`td`,20)(1859,`p`),iO(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),wg()()()(),jc(1861,`h3`),iO(1862,`Enums`),wg(),jc(1863,`h4`,4)(1864,`code`,5),iO(1865,`PoPageLoginAuthenticationType`),wg()(),jc(1866,`div`,2)(1867,`p`)(1868,`em`),iO(1869,`Enum`),wg(),iO(1870,` para definição do tipo de autenticação.`),wg()(),jc(1871,`h4`,9),iO(1872,`Propriedades`),wg(),jc(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),iO(1876,`Nome`),wg(),jc(1877,`th`,12),iO(1878,`Descrição`),wg()(),jc(1879,`tr`,13)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),iO(1883,` Basic`),nu(1884,`br`),wg()()(),jc(1885,`td`,20)(1886,`p`),iO(1887,`Autenticação Basic`),wg()()(),jc(1888,`tr`,13)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),iO(1892,` Bearer`),nu(1893,`br`),wg()()(),jc(1894,`td`,20)(1895,`p`),iO(1896,`Autenticação Bearer`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var We=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(b(ir),b(Sn))};static ɵcmp=Zn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Login`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-page-login-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-page-login-basic-view`)(6,`sample-po-page-login-labs-view`)(7,`sample-po-page-login-human-resources-view`)(8,`sample-po-page-login-automatic-service-view`),wg()()()),l&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ce,Ee,he,be,ve],encapsulation:2,changeDetection:1})}return r})()}];var Ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=pe({type:r});static ɵinj=ue$1({imports:[C1.forChild(We),C1]})}return r})();var wt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=pe({type:r});static ɵinj=ue$1({imports:[Ta,Ce]})}return r})();export{wt as DocPoPageLoginModule};