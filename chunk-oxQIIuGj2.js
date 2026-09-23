import{t as r}from"./chunk-zystk1pz.js";import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Pt as Z4,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,h as za,jn as wp,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,s as U,sr as Jy,t as Da,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx}from"./main-NT5YGKBQ.js";var ue=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-basic`]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&ql(0,`po-page-login`)},dependencies:[za],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r});var ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Login Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-login-basic/sample-po-page-login-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-login></po-page-login>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-login-basic/sample-po-page-login-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-login-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return r})();var ge=(()=>{class r{poDialog=f(e_e);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`hideRememberUser`,label:`Hide remember user`},{value:`loading`,label:`Loading`}];ngOnInit(){this.restore()}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={}}addLoginError(){this.loginErrors.push(this.loginError),this.loginError=``}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError=``}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(p),componentsSize:this.componentsSize})}onChangeCustomProperties(){this.customField=Object.assign({},this.customField)}restore(){this.properties=[],this.background=``,this.componentsSize=`medium`,this.contactEmail=``,this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment=``,this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals=``,this.login=``,this.loginPattern=``,this.loginError=``,this.loginErrors=[],this.logo=void 0,this.passwordError=``,this.passwordErrors=[],this.passwordPattern=``,this.passwordError=``,this.passwordErrors=[],this.productName=``,this.recovery=``,this.registerUrl=``,this.support=``}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-labs`]],standalone:!1,decls:60,vars:50,consts:[[`f`,`ngForm`],[`formCustomFieldOptions`,`ngForm`],[3,`p-login-submit`,`p-background`,`p-components-size`,`p-contact-email`,`p-custom-field`,`p-environment`,`p-exceeded-attempts-warning`,`p-hide-remember-user`,`p-loading`,`p-literals`,`p-login`,`p-login-errors`,`p-login-pattern`,`p-logo`,`p-password-errors`,`p-password-pattern`,`p-product-name`,`p-recovery`,`p-register-url`,`p-secondary-logo`,`p-support`],[1,`po-row`],[`name`,`literals`,`p-help`,`Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}`,`p-label`,`Literals`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`productName`,`p-clean`,``,`p-help`,`A custom name that succeeds the title`,`p-label`,`Product Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`loginPattern`,`p-clean`,``,`p-help`,`Ex.: ^[a-zA-Z]*$ (Only letters)`,`p-label`,`Login Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`login`,`p-clean`,``,`p-help`,`Ex.: podev`,`p-label`,`Login`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`exceededAttempts`,`p-clean`,``,`p-help`,`Ex.: 5`,`p-label`,`Exceeded Attempts Warning`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordPattern`,`p-clean`,``,`p-help`,`Ex.: ^(\\d*)$ (Only numbers)`,`p-label`,`Password Pattern`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-clean`,``,`p-label`,`Contact Email`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`environment`,`p-clean`,``,`p-label`,`Environment`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`background`,`p-clean`,``,`p-label`,`Background`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`support`,`p-clean`,``,`p-label`,`Support`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-clean`,``,`p-label`,`Recovery`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`registerUrl`,`p-clean`,``,`p-label`,`Register URL`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Login Errors`],[`name`,`loginError`,`p-clean`,``,`p-label`,`Login Error`,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Login Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Password Errors`],[`name`,`passwordError`,`p-clean`,``,`p-label`,`Password Error`,1,`po-lg-8`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Error`,1,`po-md-4`,`po-mt-4`,3,`p-click`],[`p-label`,`Custom Field`],[`name`,`customFieldProperty`,`p-clean`,``,`p-help`,`Ex.: domain`,`p-label`,`Custom Field Property`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldValue`,`p-clean`,``,`p-help`,`Ex.: JV01`,`p-label`,`Custom Field Value`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPlaceholder`,`p-clean`,``,`p-help`,`Ex.: Enter your domain`,`p-label`,`Custom Field Placeholder`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldPattern`,`p-clean`,``,`p-help`,`Ex.: [a-z]`,`p-label`,`Custom Field Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldErrorPattern`,`p-clean`,``,`p-help`,"Ex.: Value doesn`t match expected",`p-label`,`Custom Field Error Pattern`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldComboUrl`,`p-clean`,``,`p-help`,`Ex.: https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Custom Field URL`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldComboValue`,`p-clean`,``,`p-help`,`Property to specify the return field. Ex.: value, nickname, label`,`p-label`,`Custom Field Field Value`,1,`po-lg-6`,3,`ngModelChange`,`p-change-model`,`ngModel`],[`name`,`customFieldOptionLabel`,`p-clean`,``,`p-label`,`Custom Field Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`customFieldOptionValue`,`p-clean`,``,`p-label`,`Custom Field Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Custom Field Option`,1,`po-md-6`,`po-lg-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let d=Vx();Ml(0,`po-page-login`,2),ht(`p-login-submit`,function(a){return i.loginSubmit(a)}),lg(),ql(1,`po-divider`),Ml(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.literals,a)||(i.literals=a),Jy(a)}),ht(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),Ml(6,`po-input`,5),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.productName,a)||(i.productName=a),Jy(a)}),lg(),f0(),lg(),Ml(7,`div`,3)(8,`po-input`,6),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.loginPattern,a)||(i.loginPattern=a),Jy(a)}),lg(),f0(),Ml(9,`po-input`,7),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.login,a)||(i.login=a),Jy(a)}),lg(),f0(),lg(),Ml(10,`div`,3)(11,`po-input`,8),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.exceededAttempts,a)||(i.exceededAttempts=a),Jy(a)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.passwordPattern,a)||(i.passwordPattern=a),Jy(a)}),lg(),f0(),lg(),Ml(13,`div`,3)(14,`po-input`,10),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.contactEmail,a)||(i.contactEmail=a),Jy(a)}),lg(),f0(),Ml(15,`po-input`,11),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.environment,a)||(i.environment=a),Jy(a)}),lg(),f0(),lg(),Ml(16,`div`,3)(17,`po-input`,12),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.logo,a)||(i.logo=a),Jy(a)}),lg(),f0(),Ml(18,`po-input`,13),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.secondaryLogo,a)||(i.secondaryLogo=a),Jy(a)}),lg(),f0(),lg(),Ml(19,`div`,3)(20,`po-input`,14),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.background,a)||(i.background=a),Jy(a)}),lg(),f0(),Ml(21,`po-input`,15),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.support,a)||(i.support=a),Jy(a)}),lg(),f0(),lg(),Ml(22,`div`,3)(23,`po-input`,16),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.recovery,a)||(i.recovery=a),Jy(a)}),lg(),f0(),Ml(24,`po-input`,17),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.registerUrl,a)||(i.registerUrl=a),Jy(a)}),lg(),f0(),lg(),Ml(25,`div`,3)(26,`po-checkbox-group`,18),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.properties,a)||(i.properties=a),Jy(a)}),lg(),f0(),Ml(27,`po-radio-group`,19),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.componentsSize,a)||(i.componentsSize=a),Jy(a)}),lg(),f0(),lg(),ql(28,`po-divider`,20),Ml(29,`div`,3)(30,`po-input`,21),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.loginError,a)||(i.loginError=a),Jy(a)}),lg(),f0(),Ml(31,`po-button`,22),ht(`p-click`,function(){return i.addLoginError()}),lg()(),ql(32,`po-divider`,23),Ml(33,`div`,3)(34,`po-input`,24),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.passwordError,a)||(i.passwordError=a),Jy(a)}),lg(),f0(),Ml(35,`po-button`,25),ht(`p-click`,function(){return i.addPasswordError()}),lg()(),ql(36,`po-divider`,26),Ml(37,`div`,3)(38,`po-input`,27),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.property,a)||(i.customField.property=a),Jy(a)}),ht(`p-change-model`,function(){return i.onChangeCustomProperties()}),lg(),f0(),Ml(39,`po-input`,28),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.value,a)||(i.customField.value=a),Jy(a)}),lg(),f0(),lg(),Ml(40,`div`,3)(41,`po-input`,29),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.placeholder,a)||(i.customField.placeholder=a),Jy(a)}),lg(),f0(),Ml(42,`po-input`,30),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.pattern,a)||(i.customField.pattern=a),Jy(a)}),lg(),f0(),Ml(43,`po-input`,31),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Jy(a)}),lg(),f0(),lg(),ql(44,`po-divider`),Ml(45,`div`,3)(46,`po-input`,32),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.url,a)||(i.customField.url=a),Jy(a)}),ht(`p-change-model`,function(){return i.onChangeCustomProperties()}),lg(),f0(),Ml(47,`po-input`,33),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Jy(a)}),ht(`p-change-model`,function(){return i.onChangeCustomProperties()}),lg(),f0(),lg(),ql(48,`po-divider`),Ml(49,`form`,null,1)(51,`div`,3)(52,`po-input`,34),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Jy(a)}),lg(),f0(),Ml(53,`po-input`,35),Mw(`ngModelChange`,function(a){return Qy(d),yN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Jy(a)}),lg(),f0(),lg(),Ml(54,`div`,3)(55,`po-button`,36),ht(`p-click`,function(){return i.addCustomFieldOption()}),lg()()(),ql(56,`br`)(57,`po-divider`),Ml(58,`div`,3)(59,`po-button`,37),ht(`p-click`,function(){return i.restore()}),lg()()()}if(l&2){let d=Yx(50);cw(`p-background`,i.background)(`p-components-size`,i.componentsSize)(`p-contact-email`,i.contactEmail)(`p-custom-field`,i.customField)(`p-environment`,i.environment)(`p-exceeded-attempts-warning`,i.exceededAttempts)(`p-hide-remember-user`,i.properties.includes(`hideRememberUser`))(`p-loading`,i.properties.includes(`loading`))(`p-literals`,i.customLiterals)(`p-login`,i.login)(`p-login-errors`,i.loginErrors)(`p-login-pattern`,i.loginPattern)(`p-logo`,i.logo)(`p-password-errors`,i.passwordErrors)(`p-password-pattern`,i.passwordPattern)(`p-product-name`,i.productName)(`p-recovery`,i.recovery)(`p-register-url`,i.registerUrl)(`p-secondary-logo`,i.secondaryLogo)(`p-support`,i.support),Up(5),Tw(`ngModel`,i.literals),p0(),Up(),Tw(`ngModel`,i.productName),p0(),Up(2),Tw(`ngModel`,i.loginPattern),p0(),Up(),Tw(`ngModel`,i.login),p0(),Up(2),Tw(`ngModel`,i.exceededAttempts),p0(),Up(),Tw(`ngModel`,i.passwordPattern),p0(),Up(2),Tw(`ngModel`,i.contactEmail),p0(),Up(),Tw(`ngModel`,i.environment),p0(),Up(2),Tw(`ngModel`,i.logo),p0(),Up(),Tw(`ngModel`,i.secondaryLogo),p0(),Up(2),Tw(`ngModel`,i.background),p0(),Up(),Tw(`ngModel`,i.support),p0(),Up(2),Tw(`ngModel`,i.recovery),p0(),Up(),Tw(`ngModel`,i.registerUrl),p0(),Up(2),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.componentsSize),cw(`p-options`,i.componentsSizeOptions),p0(),Up(3),Tw(`ngModel`,i.loginError),p0(),Up(4),Tw(`ngModel`,i.passwordError),p0(),Up(4),Tw(`ngModel`,i.customField.property),p0(),Up(),Tw(`ngModel`,i.customField.value),p0(),Up(2),Tw(`ngModel`,i.customField.placeholder),p0(),Up(),Tw(`ngModel`,i.customField.pattern),p0(),Up(),Tw(`ngModel`,i.customField.errorPattern),p0(),Up(3),Tw(`ngModel`,i.customField.url),p0(),Up(),Tw(`ngModel`,i.customField.fieldValue),p0(),Up(5),Tw(`ngModel`,i.customFieldOption.label),p0(),Up(),Tw(`ngModel`,i.customFieldOption.value),p0(),Up(2),cw(`p-disabled`,d.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,za],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r});var Ee=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Login Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-login-labs/sample-po-page-login-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-login
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-login-labs/sample-po-page-login-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-login-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Me,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return r})();function Te(r,fe){if(r&1){let p=Vx();Ml(0,`po-page-login`,6),ht(`p-login-change`,function(){Qy(p);return Jy(zx().loginChange())})(`p-login-submit`,function(i){Qy(p);return Jy(zx().checkLogin(i))})(`p-password-change`,function(){Qy(p);return Jy(zx().passwordChange())}),lg()}if(r&2){let p=zx();cw(`p-custom-field`,p.customField)(`p-exceeded-attempts-warning`,p.exceededAttempts)(`p-literals`,p.literalsI18n)(`p-loading`,p.loading)(`p-password-errors`,p.passwordErrors)(`p-login-errors`,p.loginErrors)(`p-recovery`,p.passwordRecovery)}}function De(r,fe){if(r&1&&ql(0,`po-page-blocked-user`,5),r&2)cw(`p-params`,zx().params)}var Se=(()=>{class r{poI18nService=f(Z4);poDialog=f(e_e);customField={property:`domain`,placeholder:`Enter your domain`};attempts=3;exceededAttempts;literalsI18n;loading=!1;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:`https://po-sample-api.onrender.com/v1/users`,type:U.All,contactMail:`support@mail.com`};showPageBlocked=!1;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe()}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0})}checkLogin(p){this.loading=!0,p.login===`devpo`&&p.password===`1986`?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=!1,title:`Access released`,message:`You are on vacation, take time to rest.`})},3e3)):(this.loading=!1,this.generateAttempts(),this.passwordErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`],this.loginErrors=[`Senha e/ou usuário inválido, verifique e tente novamente.`])}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[])}loginChange(){this.loginErrors.length&&(this.loginErrors=[])}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=!0)}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-human-resources`]],standalone:!1,decls:7,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-url-back`,`https://po-ui.io/documentation/po-page-login`,3,`p-params`],[`p-hide-remember-user`,``,`p-login-pattern`,`^[a-zA-Z]*$`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-password-pattern`,`^(\\d*)$`,`p-product-name`,`Human Resources`,`p-register-url`,`http://po.com`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-change`,`p-login-submit`,`p-password-change`,`p-custom-field`,`p-exceeded-attempts-warning`,`p-literals`,`p-loading`,`p-password-errors`,`p-login-errors`,`p-recovery`]],template:function(l,i){l&1&&(Ml(0,`po-container`)(1,`div`,0),ql(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),lg()(),Tx(5,Te,1,7,`po-page-login`,4),Tx(6,De,1,1,`po-page-blocked-user`,5)),l&2&&(Up(5),Mx(i.showPageBlocked?-1:5),Up(),Mx(i.showPageBlocked?6:-1))},dependencies:[wp,kbe,Da,za],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r});var he=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-human-resources-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Login - Human Resources`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts`),lg(),Ml(23,`pre`,9),mN(24,`/**
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-page-login-human-resources`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ae,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return r})();var xe=(()=>{class r$1{literals;japoneseLiterals={welcome:`ようこそ`,loginLabel:`ユーザー名を入力してください`,loginPlaceholder:`アクセスユーザーを入力してください`,passwordErrorPattern:`パスワードが必要`,passwordLabel:`パスワードを入力してください`,passwordPlaceholder:`パスワードを入力してください`,submitLabel:`アクセスシステム`,submittedLabel:`ローディング中 ...`,rememberUser:`自動的にログイン`,rememberUserHint:`このオプションはシステムメニューで無効にできます`,loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:`pt`,description:`Português`},{language:`jp`,description:`日本語`}];changeLanguage(p){p?.language===`jp`?this.literals=r({},this.japoneseLiterals):this.literals={}}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Un({type:r$1,selectors:[[`sample-po-page-login-automatic-service`]],standalone:!1,decls:5,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your ID Sample Login`,`p-value`,`admin`,1,`po-md-2`],[`p-label`,`Forgot your ID Sample Password`,`p-value`,`admin`,1,`po-md-2`],[`p-authentication-url`,`https://po-sample-api.onrender.com/v1/users/authentication`,`p-blocked-url`,`/documentation/po-page-blocked-user`,`p-authentication-type`,`Bearer`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-language-change`,`p-languages`,`p-literals`]],template:function(l,i){l&1&&(Ml(0,`po-container`)(1,`div`,0),ql(2,`po-info`,1)(3,`po-info`,2),lg()(),Ml(4,`po-page-login`,3),ht(`p-language-change`,function(m){return i.changeLanguage(m)}),lg()),l&2&&(Up(4),cw(`p-languages`,i.languages)(`p-literals`,i.literals))},dependencies:[wp,kbe,za],encapsulation:2,changeDetection:1})}return r$1})();var Be=r=>({"docs-sample-code-tabs":r});var be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-automatic-service-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Login - Automatic Service`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-login-automatic-service`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,xe],encapsulation:2,changeDetection:1})}return r})();var ve=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-page-login-doc`]],standalone:!1,decls:1897,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginAuthenticationType`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginCustomField`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLanguage>`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginLiterals`],[`pan`,``,1,`docs-api-property-type`,`string[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageLoginRecovery`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageLoginModule } from '@po-ui/ng-templates';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do template do po-page-login.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoPageLoginComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-page-login`),lg(),mN(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),lg(),Ml(18,`p`),mN(19,`A propriedade `),Ml(20,`code`),mN(21,`p-authentication-url`),lg(),mN(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Ml(23,`em`),mN(24,`client side`),lg(),mN(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Ml(26,`em`),mN(27,`propriedades`),lg(),mN(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),lg(),Ml(29,`p`),mN(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ml(31,`em`),mN(32,`assets`),lg(),mN(33,` no arquivo `),Ml(34,`strong`),mN(35,`angular.json`),lg(),mN(36,` da aplicação na seguinte ordem:`),lg(),Ml(37,`pre`)(38,`code`),mN(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),lg()()(),Ml(40,`div`,6)(41,`h4`,7),mN(42,`Seletor`),lg(),Ml(43,`pre`,8),mN(44,`<po-page-login
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
`),lg()(),Ml(45,`h4`,9),mN(46,`Propriedades`),lg(),Ml(47,`table`,10)(48,`tr`,11)(49,`th`,12),mN(50,`Nome`),lg(),Ml(51,`th`,12),mN(52,`Tipo`),lg(),Ml(53,`th`,12),mN(54,`Padrão`),lg(),Ml(55,`th`,12),mN(56,`Descrição`),lg()(),Ml(57,`tr`,13)(58,`td`,14)(59,`div`,15)(60,`span`,16),mN(61,` p-authentication-type`),ql(62,`br`),lg()()(),Ml(63,`td`,17)(64,`code`,18),mN(65,`PoPageLoginAuthenticationType`),lg()(),Ml(66,`td`,19)(67,`p`)(68,`code`),mN(69,`PoPageLoginAuthenticationType.Basic`),lg()()(),Ml(70,`td`,20)(71,`em`)(72,`strong`),mN(73,`(opcional)`),lg()(),Ml(74,`p`),mN(75,`Atributo que recebe o tipo de esquema da autenticação, sendo suportados apenas os valores `),Ml(76,`code`),mN(77,`Basic`),lg(),mN(78,` e `),Ml(79,`code`),mN(80,`Bearer`),lg(),mN(81,`.`),lg(),Ml(82,`blockquote`)(83,`p`),mN(84,`Caso o tipo definido seja `),Ml(85,`code`),mN(86,`Basic`),lg(),mN(87,`, o componente fará uma requisição `),Ml(88,`code`),mN(89,`POST`),lg(),mN(90,` contendo:`),lg()(),Ml(91,`pre`)(92,`code`),mN(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),lg()(),Ml(94,`blockquote`)(95,`p`),mN(96,`Caso o tipo definido seja `),Ml(97,`code`),mN(98,`Bearer`),lg(),mN(99,`, o componente fará uma requisição `),Ml(100,`code`),mN(101,`POST`),lg(),mN(102,` contendo:`),lg()(),Ml(103,`pre`)(104,`code`),mN(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),lg()()()(),Ml(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),mN(110,` p-authentication-url`),ql(111,`br`),lg()()(),Ml(112,`td`,17)(113,`code`,21),mN(114,`string`),lg()(),Ml(115,`td`,19),mN(116,`-`),lg(),Ml(117,`td`,20)(118,`em`)(119,`strong`),mN(120,`(opcional)`),lg()(),Ml(121,`p`),mN(122,`Endpoint usado pelo template para requisição do recurso. Quando preenchido, o método `),Ml(123,`code`),mN(124,`p-login-submit`),lg(),mN(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),lg(),Ml(126,`h3`),mN(127,`Processos`),lg(),Ml(128,`p`),mN(129,`Ao digitar um valor válido no campo de login/password e pressionar `),Ml(130,`strong`),mN(131,`Enter`),lg(),mN(132,`, o componente fará uma requisição `),Ml(133,`code`),mN(134,`POST`),lg(),mN(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),lg(),Ml(136,`pre`)(137,`code`),mN(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),lg()(),Ml(139,`p`),mN(140,`Em caso de `),Ml(141,`strong`),mN(142,`sucesso`),lg(),mN(143,`, o objeto de retorno é armazenado no `),Ml(144,`code`),mN(145,`sessionStorage`),lg(),mN(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Ml(147,`code`),mN(148,`/`),lg(),mN(149,`.`),lg(),Ml(150,`pre`)(151,`code`),mN(152,`200:
{
  user: user
}
`),lg()(),Ml(153,`p`),mN(154,`Em caso de `),Ml(155,`strong`),mN(156,`erro`),lg(),mN(157,` na autenticação, espera-se o seguinte retorno:`),lg(),Ml(158,`pre`)(159,`code`),mN(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),lg()(),Ml(161,`blockquote`)(162,`p`),mN(163,`Pode-se atribuir uma quantidade máxima de tentativas restantes (maxAttemptsRemaining) para o atributo `),Ml(164,`code`),mN(165,`p-exceeded-attempts-warning`),lg(),mN(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Ml(167,`code`),mN(168,`p-login-errors`),lg(),mN(169,` e
`),Ml(170,`code`),mN(171,`p-password-errors`),lg(),mN(172,` conforme retorno abaixo:`),lg()(),Ml(173,`pre`)(174,`code`),mN(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),lg()(),Ml(176,`blockquote`)(177,`p`),mN(178,`Caso o valor atribuído para `),Ml(179,`code`),mN(180,`p-exceeded-attempts-warning`),lg(),mN(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Ml(182,`code`),mN(183,`p-blocked-url`),lg(),mN(184,` e o usuário será redirecionado para uma tela de bloqueio.`),lg()(),Ml(185,`p`)(186,`em`),mN(187,`Processo finalizado.`),lg()(),ql(188,`hr`),Ml(189,`h4`),mN(190,`Praticidade`),lg(),Ml(191,`p`),mN(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Ml(193,`code`),mN(194,`po-page-login`),lg(),mN(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Ml(196,`code`),mN(197,`/login`),lg(),mN(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),lg(),Ml(199,`pre`)(200,`code`),mN(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),lg()(),Ml(202,`p`),mN(203,`O metadado `),Ml(204,`code`),mN(205,`serviceApi`),lg(),mN(206,` deve ser a `),Ml(207,`strong`),mN(208,`url`),lg(),mN(209,` para requisição dos recursos de autenticação, o `),Ml(210,`code`),mN(211,`environment`),lg(),mN(212,` alimenta a propriedade
`),Ml(213,`code`),mN(214,`p-environment`),lg(),mN(215,`, `),Ml(216,`code`),mN(217,`recovery`),lg(),mN(218,` é a interface `),Ml(219,`code`),mN(220,`PoPageLoginRecovery`),lg(),mN(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Ml(222,`code`),mN(223,`registerUrl`),lg(),mN(224,` alimenta a propriedade `),Ml(225,`code`),mN(226,`p-register-url`),lg(),mN(227,` e `),Ml(228,`code`),mN(229,`authenticationType`),lg(),mN(230,` que define a propriedade `),Ml(231,`code`),mN(232,`p-authentication-type`),lg(),mN(233,`.`),lg(),Ml(234,`blockquote`)(235,`p`),mN(236,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),lg()()()(),Ml(237,`tr`,13)(238,`td`,14)(239,`div`,15)(240,`span`,16),mN(241,` p-background`),ql(242,`br`),lg()()(),Ml(243,`td`,17)(244,`code`,21),mN(245,`string`),lg()(),Ml(246,`td`,19),mN(247,`-`),lg(),Ml(248,`td`,20)(249,`em`)(250,`strong`),mN(251,`(opcional)`),lg()(),Ml(252,`p`),mN(253,`O `),Ml(254,`code`),mN(255,`p-background`),lg(),mN(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),lg(),Ml(257,`p`),mN(258,`A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo.`),lg(),Ml(259,`p`),mN(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Ml(261,`code`),mN(262,`highlightInfo`),lg(),mN(263,`.`),lg(),Ml(264,`blockquote`)(265,`p`),mN(266,`Veja mais sobre as literais na propriedade `),Ml(267,`code`),mN(268,`p-literals`),lg(),mN(269,`.`),lg()(),Ml(270,`p`),mN(271,`Exemplos de valores válidos:`),lg(),Ml(272,`ul`)(273,`li`)(274,`strong`),mN(275,`local`),lg(),mN(276,`: `),Ml(277,`code`),mN(278,`./assets/images/login-background.png`),lg()(),Ml(279,`li`)(280,`strong`),mN(281,`url externa`),lg(),mN(282,`: `),Ml(283,`code`),mN(284,`https://po-ui.io/assets/images/login-background.png`),lg()()(),Ml(285,`blockquote`)(286,`p`),mN(287,`Essa propriedade é ignorada para aplicações mobile.`),lg()()()(),Ml(288,`tr`,13)(289,`td`,14)(290,`div`,15)(291,`span`,16),mN(292,` p-blocked-url`),ql(293,`br`),lg()()(),Ml(294,`td`,17)(295,`code`,21),mN(296,`string`),lg()(),Ml(297,`td`,19),mN(298,`-`),lg(),Ml(299,`td`,20)(300,`em`)(301,`strong`),mN(302,`(opcional)`),lg()(),Ml(303,`p`),mN(304,`Caso o valor atribuído para `),Ml(305,`code`),mN(306,`p-exceeded-attempts-warning`),lg(),mN(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),lg()()(),Ml(308,`tr`,13)(309,`td`,14)(310,`div`,15)(311,`span`,16),mN(312,` p-components-size`),ql(313,`br`),lg()()(),Ml(314,`td`,17)(315,`code`,21),mN(316,`string`),lg()(),Ml(317,`td`,19)(318,`p`)(319,`code`),mN(320,`medium`),lg()()(),Ml(321,`td`,20)(322,`em`)(323,`strong`),mN(324,`(opcional)`),lg()(),Ml(325,`p`),mN(326,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(327,`ul`)(328,`li`)(329,`code`),mN(330,`small`),lg(),mN(331,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(332,`li`)(333,`code`),mN(334,`medium`),lg(),mN(335,`: aplica a medida medium de cada componente.`),lg()(),Ml(336,`blockquote`)(337,`p`),mN(338,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(339,`code`),mN(340,`medium`),lg(),mN(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(342,`a`,22),mN(343,`po-theme`),lg(),mN(344,`.`),lg()()()(),Ml(345,`tr`,13)(346,`td`,14)(347,`div`,15)(348,`span`,16),mN(349,` p-contact-email`),ql(350,`br`),lg()()(),Ml(351,`td`,17)(352,`code`,21),mN(353,`string`),lg()(),Ml(354,`td`,19),mN(355,`-`),lg(),Ml(356,`td`,20)(357,`em`)(358,`strong`),mN(359,`(opcional)`),lg()(),Ml(360,`p`),mN(361,`Personaliza o e-mail que é exibido na mensagem de dica de login padrão para contato de suporte.`),lg()()(),Ml(362,`tr`,13)(363,`td`,14)(364,`div`,15)(365,`span`,16),mN(366,` p-custom-field`),ql(367,`br`),lg()()(),Ml(368,`td`,17)(369,`code`,21),mN(370,`string `),lg(),Ml(371,`code`,23),mN(372,` PoPageLoginCustomField`),lg()(),Ml(373,`td`,19),mN(374,`-`),lg(),Ml(375,`td`,20)(376,`em`)(377,`strong`),mN(378,`(opcional)`),lg()(),Ml(379,`p`),mN(380,`Ao informar um valor do tipo `),Ml(381,`code`),mN(382,`string`),lg(),mN(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Ml(384,`code`),mN(385,`literals`),lg(),mN(386,` como `),Ml(387,`code`),mN(388,`customFieldErrorPattern`),lg(),mN(389,` e `),Ml(390,`code`),mN(391,`customFieldPlaceholder`),lg(),mN(392,`.`),lg(),Ml(393,`p`),mN(394,`Existe a possibilidade de informar um objeto que segue a definição da interface `),Ml(395,`code`),mN(396,`PoPageLoginCustomField`),lg(),mN(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Ml(398,`code`),mN(399,`po-input`),lg(),mN(400,`, `),Ml(401,`code`),mN(402,`po-combo`),lg(),mN(403,` especificamente para servi\xE7os
ou `),Ml(404,`code`),mN(405,`po-select`),lg(),mN(406,` para valores fixos.`),lg(),Ml(407,`p`),mN(408,`Abaixo seguem os exemplos de cada tipo de campo.`),lg(),Ml(409,`p`)(410,`code`),mN(411,`po-input`),lg(),mN(412,`:`),lg(),Ml(413,`pre`)(414,`code`),mN(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),lg()(),Ml(416,`p`)(417,`code`),mN(418,`po-combo`),lg(),mN(419,`:`),lg(),Ml(420,`pre`)(421,`code`),mN(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),lg()(),Ml(423,`p`)(424,`code`),mN(425,`po-select`),lg(),mN(426,`:`),lg(),Ml(427,`pre`)(428,`code`),mN(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),lg()(),Ml(430,`p`),mN(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),lg()()(),Ml(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),mN(436,` p-environment`),ql(437,`br`),lg()()(),Ml(438,`td`,17)(439,`code`,21),mN(440,`string`),lg()(),Ml(441,`td`,19),mN(442,`-`),lg(),Ml(443,`td`,20)(444,`em`)(445,`strong`),mN(446,`(opcional)`),lg()(),Ml(447,`p`),mN(448,`Adiciona uma `),Ml(449,`code`),mN(450,`tag`),lg(),mN(451,` abaixo do título que especifica o ambiente que o usuário está fazendo o login.`),lg(),Ml(452,`blockquote`)(453,`p`),mN(454,`Essa propriedade limita o texto em 40 caracteres.`),lg()()()(),Ml(455,`tr`,13)(456,`td`,14)(457,`div`,15)(458,`span`,16),mN(459,` p-exceeded-attempts-warning`),ql(460,`br`),lg()()(),Ml(461,`td`,17)(462,`code`,24),mN(463,`number`),lg()(),Ml(464,`td`,19)(465,`p`)(466,`code`),mN(467,`0`),lg()()(),Ml(468,`td`,20)(469,`em`)(470,`strong`),mN(471,`(opcional)`),lg()(),Ml(472,`p`),mN(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),lg(),Ml(474,`blockquote`)(475,`p`),mN(476,`Caso tenha algum valor atribuído para o atributo `),Ml(477,`code`),mN(478,`p-authentication-url`),lg(),mN(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Ml(480,`code`),mN(481,`p-exceeded-attempts-warning`),lg(),mN(482,`, o valor considerado será o do retorno da requisição.`),lg()()()(),Ml(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),mN(487,` p-hide-label-status`),ql(488,`br`),lg()()(),Ml(489,`td`,17)(490,`code`,25),mN(491,`boolean`),lg()(),Ml(492,`td`,19)(493,`p`)(494,`code`),mN(495,`false`),lg()()(),Ml(496,`td`,20)(497,`em`)(498,`strong`),mN(499,`(opcional)`),lg()(),Ml(500,`p`),mN(501,`Indica se o status do `),Ml(502,`code`),mN(503,`model`),lg(),mN(504,` do switch de lembrar o usuário será escondido visualmente.`),lg(),Ml(505,`blockquote`)(506,`p`),mN(507,`Por padrão será atribuído `),Ml(508,`code`),mN(509,`false`),lg(),mN(510,`.`),lg()()()(),Ml(511,`tr`,13)(512,`td`,14)(513,`div`,15)(514,`span`,16),mN(515,` p-hide-password-peek`),ql(516,`br`),lg()()(),Ml(517,`td`,17)(518,`code`,25),mN(519,`boolean`),lg()(),Ml(520,`td`,19)(521,`p`)(522,`code`),mN(523,`false`),lg()()(),Ml(524,`td`,20)(525,`em`)(526,`strong`),mN(527,`(opcional)`),lg()(),Ml(528,`p`),mN(529,`Permite esconder a função de espiar a senha digitada.`),lg()()(),Ml(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),mN(534,` p-hide-remember-user`),ql(535,`br`),lg()()(),Ml(536,`td`,17)(537,`code`,25),mN(538,`boolean`),lg()(),Ml(539,`td`,19)(540,`p`)(541,`code`),mN(542,`false`),lg()()(),Ml(543,`td`,20)(544,`em`)(545,`strong`),mN(546,`(opcional)`),lg()(),Ml(547,`p`),mN(548,`Esconde a função "Lembrar usuário" do formulário de login.`),lg(),Ml(549,`p`),mN(550,`Quando essa propriedade é setada com `),Ml(551,`code`),mN(552,`true`),lg(),mN(553,` a propriedade `),Ml(554,`code`),mN(555,`rememberUser`),lg(),mN(556,` enviada no evento `),Ml(557,`code`),mN(558,`p-login-submit`),lg(),mN(559,` ser\xE1 sempre
`),Ml(560,`code`),mN(561,`false`),lg(),mN(562,`.`),lg(),Ml(563,`blockquote`)(564,`p`),mN(565,`Veja a propriedade `),Ml(566,`code`),mN(567,`p-literals`),lg(),mN(568,` para customizar a literal `),Ml(569,`code`),mN(570,`rememberUser`),lg(),mN(571,`.`),lg()()()(),Ml(572,`tr`,13)(573,`td`,14)(574,`div`,26)(575,`span`,27),mN(576,` (p-language-change)`),ql(577,`br`),lg()()(),Ml(578,`td`,17)(579,`code`,28),mN(580,`EventEmitter`),lg()(),Ml(581,`td`,19),mN(582,`-`),lg(),Ml(583,`td`,20)(584,`em`)(585,`strong`),mN(586,`(opcional)`),lg()(),Ml(587,`p`),mN(588,`Evento disparado quando o usuário alterar o idioma da página.`),lg(),Ml(589,`p`),mN(590,`Esse evento receberá como parâmetro um objeto do tipo `),Ml(591,`code`),mN(592,`PoLanguage`),lg(),mN(593,` com a linguagem selecionada.`),lg()()(),Ml(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),mN(598,` p-languages`),ql(599,`br`),lg()()(),Ml(600,`td`,17)(601,`code`,29),mN(602,`Array<PoLanguage>`),lg()(),Ml(603,`td`,19),mN(604,`-`),lg(),Ml(605,`td`,20)(606,`em`)(607,`strong`),mN(608,`(opcional)`),lg()(),Ml(609,`p`),mN(610,`Coleção de idiomas que o componente irá tratar e disponibilizará para o usuário escolher.`),lg(),Ml(611,`p`),mN(612,`Caso essa propriedade não seja utilizada o componente mostrará no combo os idiomas que ele suporta por padrão.`),lg(),Ml(613,`p`),mN(614,`Caso a coleção tenha um idioma, a página estará nesse idioma e não mostrará o combo.`),lg(),Ml(615,`p`),mN(616,`Caso seja passado um array vazio, a página terá o idioma configurado no `),Ml(617,`code`),mN(618,`i18n`),lg(),mN(619,` e não mostrará o combo de seleção.`),lg(),Ml(620,`blockquote`)(621,`p`),mN(622,`Se for passado um idioma não suportado, será preciso passar as literais pela propriedade `),Ml(623,`code`),mN(624,`p-literals`),lg(),mN(625,`.`),lg()()()(),Ml(626,`tr`,13)(627,`td`,14)(628,`div`,15)(629,`span`,16),mN(630,` p-literals`),ql(631,`br`),lg()()(),Ml(632,`td`,17)(633,`code`,30),mN(634,`PoPageLoginLiterals`),lg()(),Ml(635,`td`,19),mN(636,`-`),lg(),Ml(637,`td`,20)(638,`em`)(639,`strong`),mN(640,`(opcional)`),lg()(),Ml(641,`p`),mN(642,`Objeto com as literais usadas no `),Ml(643,`code`),mN(644,`po-page-login`),lg(),mN(645,`.`),lg(),Ml(646,`p`),mN(647,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(648,`pre`)(649,`code`),mN(650,`const customLiterals: PoPageLoginLiterals = {
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
`),lg()(),Ml(651,`p`),mN(652,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(653,`pre`)(654,`code`),mN(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),lg()(),Ml(656,`p`),mN(657,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(658,`pre`)(659,`code`),mN(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),lg()(),Ml(661,`blockquote`)(662,`p`),mN(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),lg()()()(),Ml(664,`tr`,13)(665,`td`,14)(666,`div`,15)(667,`span`,16),mN(668,` p-loading`),ql(669,`br`),lg()()(),Ml(670,`td`,17)(671,`code`,25),mN(672,`boolean`),lg()(),Ml(673,`td`,19)(674,`p`)(675,`code`),mN(676,`false`),lg()()(),Ml(677,`td`,20)(678,`em`)(679,`strong`),mN(680,`(opcional)`),lg()(),Ml(681,`p`),mN(682,`Habilita um estado de carregamento ao botão de `),Ml(683,`em`),mN(684,`login`),lg(),mN(685,`.`),lg(),Ml(686,`blockquote`)(687,`p`),mN(688,`É necessário atribuir `),Ml(689,`code`),mN(690,`true`),lg(),mN(691,` à esta propriedade na função definida em `),Ml(692,`code`),mN(693,`p-login-submit`),lg(),mN(694,`.`),lg()()()(),Ml(695,`tr`,13)(696,`td`,14)(697,`div`,15)(698,`span`,16),mN(699,` p-login`),ql(700,`br`),lg()()(),Ml(701,`td`,17)(702,`code`,21),mN(703,`string`),lg()(),Ml(704,`td`,19),mN(705,`-`),lg(),Ml(706,`td`,20)(707,`em`)(708,`strong`),mN(709,`(opcional)`),lg()(),Ml(710,`p`),mN(711,`Valor do modelo do campo de login.`),lg()()(),Ml(712,`tr`,13)(713,`td`,14)(714,`div`,26)(715,`span`,27),mN(716,` (p-login-change)`),ql(717,`br`),lg()()(),Ml(718,`td`,17)(719,`code`,28),mN(720,`EventEmitter`),lg()(),Ml(721,`td`,19),mN(722,`-`),lg(),Ml(723,`td`,20)(724,`em`)(725,`strong`),mN(726,`(opcional)`),lg()(),Ml(727,`p`),mN(728,`Evento disparado quando o usuário alterar o input do campo login.`),lg(),Ml(729,`p`),mN(730,`Esse evento receberá como parâmetro uma variável do tipo `),Ml(731,`code`),mN(732,`string`),lg(),mN(733,` com o texto informado no campo.`),lg(),Ml(734,`blockquote`)(735,`p`),mN(736,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ml(737,`code`),mN(738,`p-authentication-url`),lg(),mN(739,`.`),lg()()()(),Ml(740,`tr`,13)(741,`td`,14)(742,`div`,15)(743,`span`,16),mN(744,` p-login-errors`),ql(745,`br`),lg()()(),Ml(746,`td`,17)(747,`code`,31),mN(748,`string[]`),lg()(),Ml(749,`td`,19),mN(750,`-`),lg(),Ml(751,`td`,20)(752,`em`)(753,`strong`),mN(754,`(opcional)`),lg()(),Ml(755,`p`),mN(756,`Atributo que recebe uma lista de erros e exibe abaixo do campo de login.`),lg()()(),Ml(757,`tr`,13)(758,`td`,14)(759,`div`,15)(760,`span`,16),mN(761,` p-login-pattern`),ql(762,`br`),lg()()(),Ml(763,`td`,17)(764,`code`,21),mN(765,`string`),lg()(),Ml(766,`td`,19),mN(767,`-`),lg(),Ml(768,`td`,20)(769,`em`)(770,`strong`),mN(771,`(opcional)`),lg()(),Ml(772,`p`),mN(773,`Expressão regular para validar o campo de login, caso a expressão não seja atentida, a literal `),Ml(774,`code`),mN(775,`loginErrorPattern`),lg(),mN(776,`
ser\xE1 exibida.`),lg(),Ml(777,`p`),mN(778,`Exemplos de valores válidos:`),lg(),Ml(779,`ul`)(780,`li`),mN(781,`email: `),Ml(782,`code`),mN(783,`[expressao-regular-email]`),lg()(),Ml(784,`li`),mN(785,`cpf: `),Ml(786,`code`),mN(787,`[expressao-regular-cpf]`),lg()()(),Ml(788,`blockquote`)(789,`p`),mN(790,`Veja a propriedade `),Ml(791,`code`),mN(792,`p-literals`),lg(),mN(793,` para customizar a literal `),Ml(794,`code`),mN(795,`loginErrorPattern`),lg(),mN(796,`.`),lg()()()(),Ml(797,`tr`,13)(798,`td`,14)(799,`div`,26)(800,`span`,27),mN(801,` (p-login-submit)`),ql(802,`br`),lg()()(),Ml(803,`td`,17)(804,`code`,28),mN(805,`EventEmitter`),lg()(),Ml(806,`td`,19),mN(807,`-`),lg(),Ml(808,`td`,20)(809,`p`),mN(810,`Evento disparado ao submeter o formulário de login (apertando `),Ml(811,`code`),mN(812,`Enter`),lg(),mN(813,` dentro dos campos ou pressionando o botão de confirmação).`),lg(),Ml(814,`p`),mN(815,`Esse evento receberá como parâmetro um objeto do tipo `),Ml(816,`code`),mN(817,`PoPageLogin`),lg(),mN(818,` com os dados informados no formulário.`),lg(),Ml(819,`blockquote`)(820,`p`),mN(821,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ml(822,`code`),mN(823,`p-url-recovery`),lg(),mN(824,`.`),lg()(),Ml(825,`blockquote`)(826,`p`),mN(827,`Para mais detalhes consulte a documentação sobre a interface `),Ml(828,`code`),mN(829,`PoPageLogin`),lg(),mN(830,` mais abaixo.`),lg()()()(),Ml(831,`tr`,13)(832,`td`,14)(833,`div`,15)(834,`span`,16),mN(835,` p-logo`),ql(836,`br`),lg()()(),Ml(837,`td`,17)(838,`code`,21),mN(839,`string`),lg()(),Ml(840,`td`,19),mN(841,`-`),lg(),Ml(842,`td`,20)(843,`em`)(844,`strong`),mN(845,`(opcional)`),lg()(),Ml(846,`p`),mN(847,`Caminho para a logomarca localizada na parte superior.`),lg(),Ml(848,`blockquote`)(849,`p`),mN(850,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),lg()()()(),Ml(851,`tr`,13)(852,`td`,14)(853,`div`,15)(854,`span`,16),mN(855,` p-no-autocomplete-login`),ql(856,`br`),lg()()(),Ml(857,`td`,17)(858,`code`,25),mN(859,`boolean`),lg()(),Ml(860,`td`,19)(861,`p`)(862,`code`),mN(863,`true`),lg()()(),Ml(864,`td`,20)(865,`em`)(866,`strong`),mN(867,`(opcional)`),lg()(),Ml(868,`p`),mN(869,`Define a propriedade nativa `),Ml(870,`code`),mN(871,`autocomplete`),lg(),mN(872,` do campo como `),Ml(873,`code`),mN(874,`off`),lg(),mN(875,`.`),lg()()(),Ml(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),mN(880,` p-no-autocomplete-password`),ql(881,`br`),lg()()(),Ml(882,`td`,17)(883,`code`,25),mN(884,`boolean`),lg()(),Ml(885,`td`,19)(886,`p`)(887,`code`),mN(888,`true`),lg()()(),Ml(889,`td`,20)(890,`em`)(891,`strong`),mN(892,`(opcional)`),lg()(),Ml(893,`p`),mN(894,`Define a propriedade nativa `),Ml(895,`code`),mN(896,`autocomplete`),lg(),mN(897,` do campo como `),Ml(898,`code`),mN(899,`off`),lg(),mN(900,`.`),lg(),Ml(901,`blockquote`)(902,`p`),mN(903,`No componente `),Ml(904,`code`),mN(905,`po-password`),lg(),mN(906,` será definido como `),Ml(907,`code`),mN(908,`new-password`),lg(),mN(909,`.`),lg()()()(),Ml(910,`tr`,13)(911,`td`,14)(912,`div`,26)(913,`span`,27),mN(914,` (p-password-change)`),ql(915,`br`),lg()()(),Ml(916,`td`,17)(917,`code`,28),mN(918,`EventEmitter`),lg()(),Ml(919,`td`,19),mN(920,`-`),lg(),Ml(921,`td`,20)(922,`em`)(923,`strong`),mN(924,`(opcional)`),lg()(),Ml(925,`p`),mN(926,`Evento disparado quando o usuário alterar o input do campo password.`),lg(),Ml(927,`p`),mN(928,`Esse evento receberá como parâmetro uma variável do tipo `),Ml(929,`code`),mN(930,`string`),lg(),mN(931,` com o texto informado no campo.`),lg(),Ml(932,`blockquote`)(933,`p`),mN(934,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ml(935,`code`),mN(936,`p-authentication-url`),lg(),mN(937,`.`),lg()()()(),Ml(938,`tr`,13)(939,`td`,14)(940,`div`,15)(941,`span`,16),mN(942,` p-password-errors`),ql(943,`br`),lg()()(),Ml(944,`td`,17)(945,`code`,31),mN(946,`string[]`),lg()(),Ml(947,`td`,19),mN(948,`-`),lg(),Ml(949,`td`,20)(950,`em`)(951,`strong`),mN(952,`(opcional)`),lg()(),Ml(953,`p`),mN(954,`Atributo que recebe uma lista de erros e exibe abaixo do campo de password.`),lg()()(),Ml(955,`tr`,13)(956,`td`,14)(957,`div`,15)(958,`span`,16),mN(959,` p-password-pattern`),ql(960,`br`),lg()()(),Ml(961,`td`,17)(962,`code`,21),mN(963,`string`),lg()(),Ml(964,`td`,19),mN(965,`-`),lg(),Ml(966,`td`,20)(967,`em`)(968,`strong`),mN(969,`(opcional)`),lg()(),Ml(970,`p`),mN(971,`Expressão regular para validar o campo de password, caso a expressão não seja atentida, a literal `),Ml(972,`code`),mN(973,`passwordErrorPattern`),lg(),mN(974,`
ser\xE1 exibida.`),lg(),Ml(975,`p`),mN(976,`Exemplos de valores válidos:`),lg(),Ml(977,`ul`)(978,`li`),mN(979,`Apenas números: `),Ml(980,`code`),mN(981,`\\d?`),lg()(),Ml(982,`li`),mN(983,`Letras mínusculas: `),Ml(984,`code`),mN(985,`\\z?`),lg()()(),Ml(986,`blockquote`)(987,`p`),mN(988,`Veja a propriedade `),Ml(989,`code`),mN(990,`p-literals`),lg(),mN(991,` para customizar a literal `),Ml(992,`code`),mN(993,`passwordErrorPattern`),lg(),mN(994,`.`),lg()()()(),Ml(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),mN(999,` p-product-name`),ql(1e3,`br`),lg()()(),Ml(1001,`td`,17)(1002,`code`,21),mN(1003,`string`),lg()(),Ml(1004,`td`,19),mN(1005,`-`),lg(),Ml(1006,`td`,20)(1007,`em`)(1008,`strong`),mN(1009,`(opcional)`),lg()(),Ml(1010,`p`),mN(1011,`Texto customizado que fica entre a logo e a mensagem de boas-vindas.`),lg()()(),Ml(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),mN(1016,` p-recovery`),ql(1017,`br`),lg()()(),Ml(1018,`td`,17)(1019,`code`,21),mN(1020,`string `),lg(),Ml(1021,`code`,32),mN(1022,` Function `),lg(),Ml(1023,`code`,33),mN(1024,` PoPageLoginRecovery`),lg()(),Ml(1025,`td`,19),mN(1026,`-`),lg(),Ml(1027,`td`,20)(1028,`em`)(1029,`strong`),mN(1030,`(opcional)`),lg()(),Ml(1031,`p`),mN(1032,`Exibe um link abaixo do formulário de login para que os usuários da aplicação façam a recuperação dos dados de autenticação.`),lg(),Ml(1033,`p`),mN(1034,`A propriedade aceita os seguintes tipos:`),lg(),Ml(1035,`ul`)(1036,`li`)(1037,`p`)(1038,`strong`),mN(1039,`String`),lg(),mN(1040,`: informe uma url externa ou uma rota válida;`),lg()(),Ml(1041,`li`)(1042,`p`)(1043,`strong`),mN(1044,`Function`),lg(),mN(1045,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),lg(),Ml(1046,`pre`)(1047,`code`),mN(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),lg()()(),Ml(1049,`li`)(1050,`p`)(1051,`strong`),mN(1052,`PoPageLoginRecovery`),lg(),mN(1053,`: cria-se vínculo automático com o template `),Ml(1054,`strong`),mN(1055,`po-modal-password-recovery`),lg(),mN(1056,`.
O objeto deve conter a `),Ml(1057,`strong`),mN(1058,`url`),lg(),mN(1059,` para requisição dos recursos e pode-se definir o `),Ml(1060,`strong`),mN(1061,`tipo`),lg(),mN(1062,` de modal para recupera\xE7\xE3o de senha,
`),Ml(1063,`strong`),mN(1064,`email`),lg(),mN(1065,` para contato e `),Ml(1066,`strong`),mN(1067,`máscara`),lg(),mN(1068,` do campo de telefone.`),lg()()()()(),Ml(1069,`tr`,13)(1070,`td`,14)(1071,`div`,15)(1072,`span`,16),mN(1073,` p-register-url`),ql(1074,`br`),lg()()(),Ml(1075,`td`,17)(1076,`code`,21),mN(1077,`string`),lg()(),Ml(1078,`td`,19),mN(1079,`-`),lg(),Ml(1080,`td`,20)(1081,`em`)(1082,`strong`),mN(1083,`(opcional)`),lg()(),Ml(1084,`p`),mN(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),lg(),Ml(1086,`p`),mN(1087,`Exemplos de valores válidos:`),lg(),Ml(1088,`ul`)(1089,`li`)(1090,`strong`),mN(1091,`local`),lg(),mN(1092,`: `),Ml(1093,`code`),mN(1094,`/home`),lg()(),Ml(1095,`li`)(1096,`strong`),mN(1097,`url externa`),lg(),mN(1098,`: `),Ml(1099,`code`),mN(1100,`https://po-ui.io`),lg()()(),Ml(1101,`blockquote`)(1102,`p`),mN(1103,`Veja a propriedade `),Ml(1104,`code`),mN(1105,`p-literals`),lg(),mN(1106,` para customizar a literal `),Ml(1107,`code`),mN(1108,`registerUrl`),lg(),mN(1109,`.`),lg()()()(),Ml(1110,`tr`,13)(1111,`td`,14)(1112,`div`,15)(1113,`span`,16),mN(1114,` p-secondary-logo`),ql(1115,`br`),lg()()(),Ml(1116,`td`,17)(1117,`code`,21),mN(1118,`string`),lg()(),Ml(1119,`td`,19),mN(1120,`-`),lg(),Ml(1121,`td`,20)(1122,`em`)(1123,`strong`),mN(1124,`(opcional)`),lg()(),Ml(1125,`p`),mN(1126,`Caminho para a logomarca localizada no rodapé.`),lg()()(),Ml(1127,`tr`,13)(1128,`td`,14)(1129,`div`,15)(1130,`span`,16),mN(1131,` p-support`),ql(1132,`br`),lg()()(),Ml(1133,`td`,17)(1134,`code`,21),mN(1135,`string `),lg(),Ml(1136,`code`,32),mN(1137,` Function`),lg()(),Ml(1138,`td`,19),mN(1139,`-`),lg(),Ml(1140,`td`,20)(1141,`em`)(1142,`strong`),mN(1143,`(opcional)`),lg()(),Ml(1144,`p`),mN(1145,`Exibe um botão para suporte.`),lg(),Ml(1146,`p`),mN(1147,`A propriedade aceita os seguintes tipos:`),lg(),Ml(1148,`ul`)(1149,`li`)(1150,`strong`),mN(1151,`String`),lg(),mN(1152,`: URL externa ou uma rota válida;`),lg(),Ml(1153,`li`)(1154,`strong`),mN(1155,`Function`),lg(),mN(1156,`: Função a ser disparada ao clicar no botão de suporte;`),Ml(1157,`pre`)(1158,`code`),mN(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),lg()()()()()()(),Ml(1160,`h3`),mN(1161,`Interfaces`),lg(),Ml(1162,`h4`,34)(1163,`code`,5),mN(1164,`PoPageLoginCustomField`),lg()(),Ml(1165,`div`,2)(1166,`p`),mN(1167,`Interface com a definição do Custom Field, podendo ser utilizado para informar um campo customizado no componente `),Ml(1168,`code`),mN(1169,`po-page-login`),lg(),mN(1170,`.`),lg()(),Ml(1171,`h4`,9),mN(1172,`Propriedades`),lg(),Ml(1173,`table`,10)(1174,`tr`,11)(1175,`th`,12),mN(1176,`Nome`),lg(),Ml(1177,`th`,12),mN(1178,`Tipo`),lg(),Ml(1179,`th`,12),mN(1180,`Descrição`),lg()(),Ml(1181,`tr`,13)(1182,`td`,14)(1183,`div`,15)(1184,`span`,16),mN(1185,` errorPattern`),ql(1186,`br`),lg()()(),Ml(1187,`td`,17)(1188,`code`,21),mN(1189,`string`),lg()(),Ml(1190,`td`,20)(1191,`em`)(1192,`strong`),mN(1193,`(opcional)`),lg()(),Ml(1194,`p`),mN(1195,`Mensagem que será exibida quando a expressão regular informada na propriedade `),Ml(1196,`code`),mN(1197,`pattern`),lg(),mN(1198,` não for válida.`),lg()()(),Ml(1199,`tr`,13)(1200,`td`,14)(1201,`div`,15)(1202,`span`,16),mN(1203,` fieldValue`),ql(1204,`br`),lg()()(),Ml(1205,`td`,17)(1206,`code`,21),mN(1207,`string`),lg()(),Ml(1208,`td`,20)(1209,`em`)(1210,`strong`),mN(1211,`(opcional)`),lg()(),Ml(1212,`p`),mN(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Ml(1214,`code`),mN(1215,`po-combo`),lg(),mN(1216,`, esta propriedade será responsável pelo valor de cada item da lista.`),lg()()(),Ml(1217,`tr`,13)(1218,`td`,14)(1219,`div`,15)(1220,`span`,16),mN(1221,` options`),ql(1222,`br`),lg()()(),Ml(1223,`td`,17)(1224,`code`,35),mN(1225,`Array<PoSelectOption>`),lg()(),Ml(1226,`td`,20)(1227,`em`)(1228,`strong`),mN(1229,`(opcional)`),lg()(),Ml(1230,`p`),mN(1231,`Lista de opções de um `),Ml(1232,`code`),mN(1233,`po-select`),lg(),mN(1234,`.`),lg()()(),Ml(1235,`tr`,13)(1236,`td`,14)(1237,`div`,15)(1238,`span`,16),mN(1239,` pattern`),ql(1240,`br`),lg()()(),Ml(1241,`td`,17)(1242,`code`,21),mN(1243,`string`),lg()(),Ml(1244,`td`,20)(1245,`em`)(1246,`strong`),mN(1247,`(opcional)`),lg()(),Ml(1248,`p`),mN(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Ml(1250,`code`),mN(1251,`errorPattern`),lg(),mN(1252,` será exibida.`),lg()()(),Ml(1253,`tr`,13)(1254,`td`,14)(1255,`div`,15)(1256,`span`,16),mN(1257,` placeholder`),ql(1258,`br`),lg()()(),Ml(1259,`td`,17)(1260,`code`,21),mN(1261,`string`),lg()(),Ml(1262,`td`,20)(1263,`em`)(1264,`strong`),mN(1265,`(opcional)`),lg()(),Ml(1266,`p`),mN(1267,`Mensagem que será exibida enquanto o campo customizado não estiver preenchido.`),lg()()(),Ml(1268,`tr`,13)(1269,`td`,14)(1270,`div`,15)(1271,`span`,16),mN(1272,` property`),ql(1273,`br`),lg()()(),Ml(1274,`td`,17)(1275,`code`,21),mN(1276,`string`),lg()(),Ml(1277,`td`,20)(1278,`p`),mN(1279,`Nome da propriedade que será utilizado no campo customizado.`),lg()()(),Ml(1280,`tr`,13)(1281,`td`,14)(1282,`div`,15)(1283,`span`,16),mN(1284,` url`),ql(1285,`br`),lg()()(),Ml(1286,`td`,17)(1287,`code`,21),mN(1288,`string`),lg()(),Ml(1289,`td`,20)(1290,`em`)(1291,`strong`),mN(1292,`(opcional)`),lg()(),Ml(1293,`p`),mN(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Ml(1295,`code`),mN(1296,`po-combo`),lg(),mN(1297,`.`),lg()()(),Ml(1298,`tr`,13)(1299,`td`,14)(1300,`div`,15)(1301,`span`,16),mN(1302,` value`),ql(1303,`br`),lg()()(),Ml(1304,`td`,17)(1305,`code`,21),mN(1306,`string `),lg(),Ml(1307,`code`,24),mN(1308,` number`),lg()(),Ml(1309,`td`,20)(1310,`em`)(1311,`strong`),mN(1312,`(opcional)`),lg()(),Ml(1313,`p`),mN(1314,`Valor do campo customizado.`),lg()()()(),Ml(1315,`h4`,34)(1316,`code`,5),mN(1317,`PoPageLoginLiterals`),lg()(),Ml(1318,`div`,2)(1319,`p`),mN(1320,`Interface para definição das literais usadas no `),Ml(1321,`code`),mN(1322,`po-page-login`),lg(),mN(1323,`.`),lg()(),Ml(1324,`h4`,9),mN(1325,`Propriedades`),lg(),Ml(1326,`table`,10)(1327,`tr`,11)(1328,`th`,12),mN(1329,`Nome`),lg(),Ml(1330,`th`,12),mN(1331,`Tipo`),lg(),Ml(1332,`th`,12),mN(1333,`Descrição`),lg()(),Ml(1334,`tr`,13)(1335,`td`,14)(1336,`div`,15)(1337,`span`,16),mN(1338,` attempts`),ql(1339,`br`),lg()()(),Ml(1340,`td`,17)(1341,`code`,21),mN(1342,`string`),lg()(),Ml(1343,`td`,20)(1344,`em`)(1345,`strong`),mN(1346,`(opcional)`),lg()(),Ml(1347,`p`),mN(1348,`Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio.`),lg()()(),Ml(1349,`tr`,13)(1350,`td`,14)(1351,`div`,15)(1352,`span`,16),mN(1353,` createANewPasswordNow`),ql(1354,`br`),lg()()(),Ml(1355,`td`,17)(1356,`code`,21),mN(1357,`string`),lg()(),Ml(1358,`td`,20)(1359,`em`)(1360,`strong`),mN(1361,`(opcional)`),lg()(),Ml(1362,`p`),mN(1363,`Texto exibido no popover de aviso de bloqueio, que orienta o usuário, caso ele tenha esquecido a senha, a criar uma nova senha.`),lg()()(),Ml(1364,`tr`,13)(1365,`td`,14)(1366,`div`,15)(1367,`span`,16),mN(1368,` customFieldErrorPattern`),ql(1369,`br`),lg()()(),Ml(1370,`td`,17)(1371,`code`,21),mN(1372,`string`),lg()(),Ml(1373,`td`,20)(1374,`em`)(1375,`strong`),mN(1376,`(opcional)`),lg()(),Ml(1377,`p`),mN(1378,`Mensagem de erro apresentada quando o campo customizado está inválido`),lg()()(),Ml(1379,`tr`,13)(1380,`td`,14)(1381,`div`,15)(1382,`span`,16),mN(1383,` customFieldPlaceholder`),ql(1384,`br`),lg()()(),Ml(1385,`td`,17)(1386,`code`,21),mN(1387,`string`),lg()(),Ml(1388,`td`,20)(1389,`em`)(1390,`strong`),mN(1391,`(opcional)`),lg()(),Ml(1392,`p`),mN(1393,`Placeholder para o campo customizado.`),lg()()(),Ml(1394,`tr`,13)(1395,`td`,14)(1396,`div`,15)(1397,`span`,16),mN(1398,` forgotPassword`),ql(1399,`br`),lg()()(),Ml(1400,`td`,17)(1401,`code`,21),mN(1402,`string`),lg()(),Ml(1403,`td`,20)(1404,`em`)(1405,`strong`),mN(1406,`(opcional)`),lg()(),Ml(1407,`p`),mN(1408,`Texto de ajuda para recuperação dos dados de acesso.`),lg()()(),Ml(1409,`tr`,13)(1410,`td`,14)(1411,`div`,15)(1412,`span`,16),mN(1413,` forgotYourPassword`),ql(1414,`br`),lg()()(),Ml(1415,`td`,17)(1416,`code`,21),mN(1417,`string`),lg()(),Ml(1418,`td`,20)(1419,`em`)(1420,`strong`),mN(1421,`(opcional)`),lg()(),Ml(1422,`p`),mN(1423,`Texto que questiona o esquecimento da senha no popover de aviso de bloqueio.`),lg()()(),Ml(1424,`tr`,13)(1425,`td`,14)(1426,`div`,15)(1427,`span`,16),mN(1428,` highlightInfo`),ql(1429,`br`),lg()()(),Ml(1430,`td`,17)(1431,`code`,21),mN(1432,`string`),lg()(),Ml(1433,`td`,20)(1434,`em`)(1435,`strong`),mN(1436,`(opcional)`),lg()(),Ml(1437,`p`),mN(1438,`Texto de destaque sobreposto à imagem de destaque. Essa opção é utilizada em conjunto com o atributo `),Ml(1439,`code`),mN(1440,`p-background`),lg(),mN(1441,`.`),lg()()(),Ml(1442,`tr`,13)(1443,`td`,14)(1444,`div`,15)(1445,`span`,16),mN(1446,` iForgotMyPassword`),ql(1447,`br`),lg()()(),Ml(1448,`td`,17)(1449,`code`,21),mN(1450,`string`),lg()(),Ml(1451,`td`,20)(1452,`em`)(1453,`strong`),mN(1454,`(opcional)`),lg()(),Ml(1455,`p`),mN(1456,`Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio.`),lg()()(),Ml(1457,`tr`,13)(1458,`td`,14)(1459,`div`,15)(1460,`span`,16),mN(1461,` ifYouTryHarder`),ql(1462,`br`),lg()()(),Ml(1463,`td`,17)(1464,`code`,21),mN(1465,`string`),lg()(),Ml(1466,`td`,20)(1467,`em`)(1468,`strong`),mN(1469,`(opcional)`),lg()(),Ml(1470,`p`),mN(1471,`Texto de aviso de tentativas exibido no popover de aviso de bloqueio.`),lg()()(),Ml(1472,`tr`,13)(1473,`td`,14)(1474,`div`,15)(1475,`span`,16),mN(1476,` loginErrorPattern`),ql(1477,`br`),lg()()(),Ml(1478,`td`,17)(1479,`code`,21),mN(1480,`string`),lg()(),Ml(1481,`td`,20)(1482,`em`)(1483,`strong`),mN(1484,`(opcional)`),lg()(),Ml(1485,`p`),mN(1486,`Mensagem de erro apresentada quando o campo de login está inválido.`),lg()()(),Ml(1487,`tr`,13)(1488,`td`,14)(1489,`div`,15)(1490,`span`,16),mN(1491,` loginHint`),ql(1492,`br`),lg()()(),Ml(1493,`td`,17)(1494,`code`,21),mN(1495,`string`),lg()(),Ml(1496,`td`,20)(1497,`em`)(1498,`strong`),mN(1499,`(opcional)`),lg()(),Ml(1500,`p`),mN(1501,`Texto exibido como dica para o campo de login.`),lg()()(),Ml(1502,`tr`,13)(1503,`td`,14)(1504,`div`,15)(1505,`span`,16),mN(1506,` loginLabel`),ql(1507,`br`),lg()()(),Ml(1508,`td`,17)(1509,`code`,21),mN(1510,`string`),lg()(),Ml(1511,`td`,20)(1512,`em`)(1513,`strong`),mN(1514,`(opcional)`),lg()(),Ml(1515,`p`),mN(1516,`Texto exibido como label do campo de login.`),lg()()(),Ml(1517,`tr`,13)(1518,`td`,14)(1519,`div`,15)(1520,`span`,16),mN(1521,` loginPlaceholder`),ql(1522,`br`),lg()()(),Ml(1523,`td`,17)(1524,`code`,21),mN(1525,`string`),lg()(),Ml(1526,`td`,20)(1527,`em`)(1528,`strong`),mN(1529,`(opcional)`),lg()(),Ml(1530,`p`),mN(1531,`Placeholder do campo de login.`),lg()()(),Ml(1532,`tr`,13)(1533,`td`,14)(1534,`div`,15)(1535,`span`,16),mN(1536,` passwordErrorPattern`),ql(1537,`br`),lg()()(),Ml(1538,`td`,17)(1539,`code`,21),mN(1540,`string`),lg()(),Ml(1541,`td`,20)(1542,`em`)(1543,`strong`),mN(1544,`(opcional)`),lg()(),Ml(1545,`p`),mN(1546,`Mensagem de erro apresentada quando o campo de password está inválido.`),lg()()(),Ml(1547,`tr`,13)(1548,`td`,14)(1549,`div`,15)(1550,`span`,16),mN(1551,` passwordLabel`),ql(1552,`br`),lg()()(),Ml(1553,`td`,17)(1554,`code`,21),mN(1555,`string`),lg()(),Ml(1556,`td`,20)(1557,`em`)(1558,`strong`),mN(1559,`(opcional)`),lg()(),Ml(1560,`p`),mN(1561,`Texto exibido como label do campo de password.`),lg()()(),Ml(1562,`tr`,13)(1563,`td`,14)(1564,`div`,15)(1565,`span`,16),mN(1566,` passwordPlaceholder`),ql(1567,`br`),lg()()(),Ml(1568,`td`,17)(1569,`code`,21),mN(1570,`string`),lg()(),Ml(1571,`td`,20)(1572,`em`)(1573,`strong`),mN(1574,`(opcional)`),lg()(),Ml(1575,`p`),mN(1576,`Placeholder do campo de password.`),lg()()(),Ml(1577,`tr`,13)(1578,`td`,14)(1579,`div`,15)(1580,`span`,16),mN(1581,` registerUrl`),ql(1582,`br`),lg()()(),Ml(1583,`td`,17)(1584,`code`,21),mN(1585,`string`),lg()(),Ml(1586,`td`,20)(1587,`em`)(1588,`strong`),mN(1589,`(opcional)`),lg()(),Ml(1590,`p`),mN(1591,`Texto exibido no link de novo cadastro.`),lg()()(),Ml(1592,`tr`,13)(1593,`td`,14)(1594,`div`,15)(1595,`span`,16),mN(1596,` rememberUser`),ql(1597,`br`),lg()()(),Ml(1598,`td`,17)(1599,`code`,21),mN(1600,`string`),lg()(),Ml(1601,`td`,20)(1602,`em`)(1603,`strong`),mN(1604,`(opcional)`),lg()(),Ml(1605,`p`),mN(1606,`Texto exibido na função "Lembrar usuário".`),lg()()(),Ml(1607,`tr`,13)(1608,`td`,14)(1609,`div`,15)(1610,`span`,16),mN(1611,` rememberUserHint`),ql(1612,`br`),lg()()(),Ml(1613,`td`,17)(1614,`code`,21),mN(1615,`string`),lg()(),Ml(1616,`td`,20)(1617,`em`)(1618,`strong`),mN(1619,`(opcional)`),lg()(),Ml(1620,`p`),mN(1621,`Texto exibido como dica da função "Lembrar usuário"`),lg()()(),Ml(1622,`tr`,13)(1623,`td`,14)(1624,`div`,15)(1625,`span`,16),mN(1626,` submitLabel`),ql(1627,`br`),lg()()(),Ml(1628,`td`,17)(1629,`code`,21),mN(1630,`string`),lg()(),Ml(1631,`td`,20)(1632,`em`)(1633,`strong`),mN(1634,`(opcional)`),lg()(),Ml(1635,`p`),mN(1636,`Texto exibido no botão de confirmação da página de login.`),lg()()(),Ml(1637,`tr`,13)(1638,`td`,14)(1639,`div`,15)(1640,`span`,16),mN(1641,` submittedLabel`),ql(1642,`br`),lg()()(),Ml(1643,`td`,17)(1644,`code`,21),mN(1645,`string`),lg()(),Ml(1646,`td`,20)(1647,`em`)(1648,`strong`),mN(1649,`(opcional)`),lg()(),Ml(1650,`p`),mN(1651,`Texto exibido no botão de confirmação da página de login quando estiver em estado de carregamento.`),lg()()(),Ml(1652,`tr`,13)(1653,`td`,14)(1654,`div`,15)(1655,`span`,16),mN(1656,` support`),ql(1657,`br`),lg()()(),Ml(1658,`td`,17)(1659,`code`,21),mN(1660,`string`),lg()(),Ml(1661,`td`,20)(1662,`em`)(1663,`strong`),mN(1664,`(opcional)`),lg()(),Ml(1665,`p`),mN(1666,`Label do botão de suporte.`),lg()()(),Ml(1667,`tr`,13)(1668,`td`,14)(1669,`div`,15)(1670,`span`,16),mN(1671,` titlePopover`),ql(1672,`br`),lg()()(),Ml(1673,`td`,17)(1674,`code`,21),mN(1675,`string`),lg()(),Ml(1676,`td`,20)(1677,`em`)(1678,`strong`),mN(1679,`(opcional)`),lg()(),Ml(1680,`p`),mN(1681,`Título do popover para aviso de bloqueio.`),lg()()(),Ml(1682,`tr`,13)(1683,`td`,14)(1684,`div`,15)(1685,`span`,16),mN(1686,` welcome`),ql(1687,`br`),lg()()(),Ml(1688,`td`,17)(1689,`code`,21),mN(1690,`string`),lg()(),Ml(1691,`td`,20)(1692,`em`)(1693,`strong`),mN(1694,`(opcional)`),lg()(),Ml(1695,`p`),mN(1696,`Mensagem de "Boas-vindas" para o usuário que aparece acima dos campos de entrada.`),lg()()(),Ml(1697,`tr`,13)(1698,`td`,14)(1699,`div`,15)(1700,`span`,16),mN(1701,` yourUserWillBeBlocked`),ql(1702,`br`),lg()()(),Ml(1703,`td`,17)(1704,`code`,21),mN(1705,`string`),lg()(),Ml(1706,`td`,20)(1707,`em`)(1708,`strong`),mN(1709,`(opcional)`),lg()(),Ml(1710,`p`),mN(1711,`Texto que informa ao usuário que o mesmo será bloqueado e por quanto tempo no popover de aviso de bloqueio.`),lg()()()(),Ml(1712,`h4`,34)(1713,`code`,5),mN(1714,`PoPageLoginRecovery`),lg()(),Ml(1715,`div`,2)(1716,`p`),mN(1717,`Interface para especificação do tipo de recuperação de senha no `),Ml(1718,`code`),mN(1719,`po-modal-password-recovery`),lg(),mN(1720,`.`),lg()(),Ml(1721,`h4`,9),mN(1722,`Propriedades`),lg(),Ml(1723,`table`,10)(1724,`tr`,11)(1725,`th`,12),mN(1726,`Nome`),lg(),Ml(1727,`th`,12),mN(1728,`Tipo`),lg(),Ml(1729,`th`,12),mN(1730,`Descrição`),lg()(),Ml(1731,`tr`,13)(1732,`td`,14)(1733,`div`,15)(1734,`span`,16),mN(1735,` contactMail`),ql(1736,`br`),lg()()(),Ml(1737,`td`,17)(1738,`code`,21),mN(1739,`string`),lg()(),Ml(1740,`td`,20)(1741,`em`)(1742,`strong`),mN(1743,`(opcional)`),lg()(),Ml(1744,`p`),mN(1745,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),lg()()(),Ml(1746,`tr`,13)(1747,`td`,14)(1748,`div`,15)(1749,`span`,16),mN(1750,` phoneMask`),ql(1751,`br`),lg()()(),Ml(1752,`td`,17)(1753,`code`,21),mN(1754,`string`),lg()(),Ml(1755,`td`,20)(1756,`em`)(1757,`strong`),mN(1758,`(opcional)`),lg()(),Ml(1759,`p`),mN(1760,`Definição da máscara do campo de telefone.`),lg()()(),Ml(1761,`tr`,13)(1762,`td`,14)(1763,`div`,15)(1764,`span`,16),mN(1765,` type`),ql(1766,`br`),lg()()(),Ml(1767,`td`,17)(1768,`code`,36),mN(1769,`PoModalPasswordRecoveryType`),lg()(),Ml(1770,`td`,20)(1771,`em`)(1772,`strong`),mN(1773,`(opcional)`),lg()(),Ml(1774,`p`),mN(1775,`Enum para especificação do tipo de recuperação de senha `),Ml(1776,`a`,37),mN(1777,`PoModalPasswordRecoveryType`),lg(),mN(1778,`.`),lg(),Ml(1779,`blockquote`)(1780,`p`),mN(1781,`Caso não seja definido valor se assume o padrão `),Ml(1782,`code`),mN(1783,`PoModalPasswordRecoveryType.Email`),lg(),mN(1784,`.`),lg()()()(),Ml(1785,`tr`,13)(1786,`td`,14)(1787,`div`,15)(1788,`span`,16),mN(1789,` url`),ql(1790,`br`),lg()()(),Ml(1791,`td`,17)(1792,`code`,21),mN(1793,`string`),lg()(),Ml(1794,`td`,20)(1795,`p`),mN(1796,`Endpoint usado pelo template `),Ml(1797,`strong`),mN(1798,`PoModalPasswordRecovery`),lg(),mN(1799,` para requisição do recurso.`),lg(),Ml(1800,`blockquote`)(1801,`p`),mN(1802,`Saiba mais em `),Ml(1803,`a`,37),mN(1804,`PoModalPasswordRecovery`),lg(),mN(1805,`.`),lg()()()()(),Ml(1806,`h4`,34)(1807,`code`,5),mN(1808,`PoPageLogin`),lg()(),Ml(1809,`div`,2)(1810,`p`),mN(1811,`Interface com a definição do objeto gerado pelo formulário do componente `),Ml(1812,`code`),mN(1813,`po-page-login`),lg(),mN(1814,`.`),lg()(),Ml(1815,`h4`,9),mN(1816,`Propriedades`),lg(),Ml(1817,`table`,10)(1818,`tr`,11)(1819,`th`,12),mN(1820,`Nome`),lg(),Ml(1821,`th`,12),mN(1822,`Tipo`),lg(),Ml(1823,`th`,12),mN(1824,`Descrição`),lg()(),Ml(1825,`tr`,13)(1826,`td`,14)(1827,`div`,15)(1828,`span`,16),mN(1829,` login`),ql(1830,`br`),lg()()(),Ml(1831,`td`,17)(1832,`code`,21),mN(1833,`string`),lg()(),Ml(1834,`td`,20)(1835,`p`),mN(1836,`Login preenchido pelo usuário.`),lg()()(),Ml(1837,`tr`,13)(1838,`td`,14)(1839,`div`,15)(1840,`span`,16),mN(1841,` password`),ql(1842,`br`),lg()()(),Ml(1843,`td`,17)(1844,`code`,21),mN(1845,`string`),lg()(),Ml(1846,`td`,20)(1847,`p`),mN(1848,`Senha preenchida pelo usuário, a mesma será convertida para [hash/md5] antes de ser enviada para a aplicação.`),lg()()(),Ml(1849,`tr`,13)(1850,`td`,14)(1851,`div`,15)(1852,`span`,16),mN(1853,` rememberUser`),ql(1854,`br`),lg()()(),Ml(1855,`td`,17)(1856,`code`,25),mN(1857,`boolean`),lg()(),Ml(1858,`td`,20)(1859,`p`),mN(1860,`Essa propriedade informa se o usuário quer que seus dados sejam lembrados em um acesso futuro.`),lg()()()(),Ml(1861,`h3`),mN(1862,`Enums`),lg(),Ml(1863,`h4`,4)(1864,`code`,5),mN(1865,`PoPageLoginAuthenticationType`),lg()(),Ml(1866,`div`,2)(1867,`p`)(1868,`em`),mN(1869,`Enum`),lg(),mN(1870,` para definição do tipo de autenticação.`),lg()(),Ml(1871,`h4`,9),mN(1872,`Propriedades`),lg(),Ml(1873,`table`,10)(1874,`tr`,11)(1875,`th`,12),mN(1876,`Nome`),lg(),Ml(1877,`th`,12),mN(1878,`Descrição`),lg()(),Ml(1879,`tr`,13)(1880,`td`,14)(1881,`div`,15)(1882,`span`,16),mN(1883,` Basic`),ql(1884,`br`),lg()()(),Ml(1885,`td`,20)(1886,`p`),mN(1887,`Autenticação Basic`),lg()()(),Ml(1888,`tr`,13)(1889,`td`,14)(1890,`div`,15)(1891,`span`,16),mN(1892,` Bearer`),ql(1893,`br`),lg()()(),Ml(1894,`td`,20)(1895,`p`),mN(1896,`Autenticação Bearer`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return r})();var We=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(w(Xn),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Login`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-page-login-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-page-login-basic-view`)(6,`sample-po-page-login-labs-view`)(7,`sample-po-page-login-human-resources-view`)(8,`sample-po-page-login-automatic-service-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ce,Ee,he,be,ve],encapsulation:2,changeDetection:1})}return r})()}];var Ce=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue$1({imports:[NL.forChild(We),NL]})}return r})();var wt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue$1({imports:[ar,Ce]})}return r})();export{wt as DocPoPageLoginModule};