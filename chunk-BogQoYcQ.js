import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,cm as M3,c6 as U,c as r$1,cc as za,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,aI as dc,c9 as Qhe,cb as Da,aq as ux,at as dx,a3 as pNe,aD as Xy,aA as Tx,aE as Qy,aT as tN}from'./main-BY5NURRA.js';var ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Wl(0,"po-page-login");},dependencies:[za],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Login Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-login></po-page-login>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-login-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return r})();var ge=(()=>{class r{poDialog=f(zde);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];ngOnInit(){this.restore();}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={};}addLoginError(){this.loginErrors.push(this.loginError),this.loginError="";}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError="";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(p){this.customLiterals=void 0;}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(p),componentsSize:this.componentsSize});}onChangeCustomProperties(){this.customField=Object.assign({},this.customField);}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support="";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs"]],standalone:false,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=Ex();Sl(0,"po-page-login",2),ht("p-login-submit",function(a){return i.loginSubmit(a)}),sg(),Wl(1,"po-divider"),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Ew("ngModelChange",function(a){return Xy(d),tN(i.literals,a)||(i.literals=a),Qy(a)}),ht("p-change",function(){return i.changeLiterals()}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(a){return Xy(d),tN(i.productName,a)||(i.productName=a),Qy(a)}),sg(),JA(),sg(),Sl(7,"div",3)(8,"po-input",6),Ew("ngModelChange",function(a){return Xy(d),tN(i.loginPattern,a)||(i.loginPattern=a),Qy(a)}),sg(),JA(),Sl(9,"po-input",7),Ew("ngModelChange",function(a){return Xy(d),tN(i.login,a)||(i.login=a),Qy(a)}),sg(),JA(),sg(),Sl(10,"div",3)(11,"po-input",8),Ew("ngModelChange",function(a){return Xy(d),tN(i.exceededAttempts,a)||(i.exceededAttempts=a),Qy(a)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(a){return Xy(d),tN(i.passwordPattern,a)||(i.passwordPattern=a),Qy(a)}),sg(),JA(),sg(),Sl(13,"div",3)(14,"po-input",10),Ew("ngModelChange",function(a){return Xy(d),tN(i.contactEmail,a)||(i.contactEmail=a),Qy(a)}),sg(),JA(),Sl(15,"po-input",11),Ew("ngModelChange",function(a){return Xy(d),tN(i.environment,a)||(i.environment=a),Qy(a)}),sg(),JA(),sg(),Sl(16,"div",3)(17,"po-input",12),Ew("ngModelChange",function(a){return Xy(d),tN(i.logo,a)||(i.logo=a),Qy(a)}),sg(),JA(),Sl(18,"po-input",13),Ew("ngModelChange",function(a){return Xy(d),tN(i.secondaryLogo,a)||(i.secondaryLogo=a),Qy(a)}),sg(),JA(),sg(),Sl(19,"div",3)(20,"po-input",14),Ew("ngModelChange",function(a){return Xy(d),tN(i.background,a)||(i.background=a),Qy(a)}),sg(),JA(),Sl(21,"po-input",15),Ew("ngModelChange",function(a){return Xy(d),tN(i.support,a)||(i.support=a),Qy(a)}),sg(),JA(),sg(),Sl(22,"div",3)(23,"po-input",16),Ew("ngModelChange",function(a){return Xy(d),tN(i.recovery,a)||(i.recovery=a),Qy(a)}),sg(),JA(),Sl(24,"po-input",17),Ew("ngModelChange",function(a){return Xy(d),tN(i.registerUrl,a)||(i.registerUrl=a),Qy(a)}),sg(),JA(),sg(),Sl(25,"div",3)(26,"po-checkbox-group",18),Ew("ngModelChange",function(a){return Xy(d),tN(i.properties,a)||(i.properties=a),Qy(a)}),sg(),JA(),Sl(27,"po-radio-group",19),Ew("ngModelChange",function(a){return Xy(d),tN(i.componentsSize,a)||(i.componentsSize=a),Qy(a)}),sg(),JA(),sg(),Wl(28,"po-divider",20),Sl(29,"div",3)(30,"po-input",21),Ew("ngModelChange",function(a){return Xy(d),tN(i.loginError,a)||(i.loginError=a),Qy(a)}),sg(),JA(),Sl(31,"po-button",22),ht("p-click",function(){return i.addLoginError()}),sg()(),Wl(32,"po-divider",23),Sl(33,"div",3)(34,"po-input",24),Ew("ngModelChange",function(a){return Xy(d),tN(i.passwordError,a)||(i.passwordError=a),Qy(a)}),sg(),JA(),Sl(35,"po-button",25),ht("p-click",function(){return i.addPasswordError()}),sg()(),Wl(36,"po-divider",26),Sl(37,"div",3)(38,"po-input",27),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.property,a)||(i.customField.property=a),Qy(a)}),ht("p-change-model",function(){return i.onChangeCustomProperties()}),sg(),JA(),Sl(39,"po-input",28),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.value,a)||(i.customField.value=a),Qy(a)}),sg(),JA(),sg(),Sl(40,"div",3)(41,"po-input",29),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.placeholder,a)||(i.customField.placeholder=a),Qy(a)}),sg(),JA(),Sl(42,"po-input",30),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.pattern,a)||(i.customField.pattern=a),Qy(a)}),sg(),JA(),Sl(43,"po-input",31),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Qy(a)}),sg(),JA(),sg(),Wl(44,"po-divider"),Sl(45,"div",3)(46,"po-input",32),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.url,a)||(i.customField.url=a),Qy(a)}),ht("p-change-model",function(){return i.onChangeCustomProperties()}),sg(),JA(),Sl(47,"po-input",33),Ew("ngModelChange",function(a){return Xy(d),tN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Qy(a)}),ht("p-change-model",function(){return i.onChangeCustomProperties()}),sg(),JA(),sg(),Wl(48,"po-divider"),Sl(49,"form",null,1)(51,"div",3)(52,"po-input",34),Ew("ngModelChange",function(a){return Xy(d),tN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Qy(a)}),sg(),JA(),Sl(53,"po-input",35),Ew("ngModelChange",function(a){return Xy(d),tN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Qy(a)}),sg(),JA(),sg(),Sl(54,"div",3)(55,"po-button",36),ht("p-click",function(){return i.addCustomFieldOption()}),sg()()(),Wl(56,"br")(57,"po-divider"),Sl(58,"div",3)(59,"po-button",37),ht("p-click",function(){return i.restore()}),sg()()();}if(l&2){let d=xx(50);tw("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),Vp(5),Dw("ngModel",i.literals),t0(),Vp(),Dw("ngModel",i.productName),t0(),Vp(2),Dw("ngModel",i.loginPattern),t0(),Vp(),Dw("ngModel",i.login),t0(),Vp(2),Dw("ngModel",i.exceededAttempts),t0(),Vp(),Dw("ngModel",i.passwordPattern),t0(),Vp(2),Dw("ngModel",i.contactEmail),t0(),Vp(),Dw("ngModel",i.environment),t0(),Vp(2),Dw("ngModel",i.logo),t0(),Vp(),Dw("ngModel",i.secondaryLogo),t0(),Vp(2),Dw("ngModel",i.background),t0(),Vp(),Dw("ngModel",i.support),t0(),Vp(2),Dw("ngModel",i.recovery),t0(),Vp(),Dw("ngModel",i.registerUrl),t0(),Vp(2),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),t0(),Vp(3),Dw("ngModel",i.loginError),t0(),Vp(4),Dw("ngModel",i.passwordError),t0(),Vp(4),Dw("ngModel",i.customField.property),t0(),Vp(),Dw("ngModel",i.customField.value),t0(),Vp(2),Dw("ngModel",i.customField.placeholder),t0(),Vp(),Dw("ngModel",i.customField.pattern),t0(),Vp(),Dw("ngModel",i.customField.errorPattern),t0(),Vp(3),Dw("ngModel",i.customField.url),t0(),Vp(),Dw("ngModel",i.customField.fieldValue),t0(),Vp(5),Dw("ngModel",i.customFieldOption.label),t0(),Vp(),Dw("ngModel",i.customFieldOption.value),t0(),Vp(2),tw("p-disabled",d.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,za],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r}),Ee=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Login Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-login
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-login-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return r})();function Te(r,fe){if(r&1){let p=Ex();Sl(0,"po-page-login",6),ht("p-login-change",function(){Xy(p);let i=Tx();return Qy(i.loginChange())})("p-login-submit",function(i){Xy(p);let d=Tx();return Qy(d.checkLogin(i))})("p-password-change",function(){Xy(p);let i=Tx();return Qy(i.passwordChange())}),sg();}if(r&2){let p=Tx();tw("p-custom-field",p.customField)("p-exceeded-attempts-warning",p.exceededAttempts)("p-literals",p.literalsI18n)("p-loading",p.loading)("p-password-errors",p.passwordErrors)("p-login-errors",p.loginErrors)("p-recovery",p.passwordRecovery);}}function ke(r,fe){if(r&1&&Wl(0,"po-page-blocked-user",5),r&2){let p=Tx();tw("p-params",p.params);}}var Se=(()=>{class r{poI18nService=f(M3);poDialog=f(zde);customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=false;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:U.All,contactMail:"support@mail.com"};showPageBlocked=false;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe();}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0;});}checkLogin(p){this.loading=true,p.login==="devpo"&&p.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=false,title:"Access released",message:"You are on vacation, take time to rest."});},3e3)):(this.loading=false,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."]);}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[]);}loginChange(){this.loginErrors.length&&(this.loginErrors=[]);}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=true);}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:false,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"]],template:function(l,i){l&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),sg()(),ux(5,Te,1,7,"po-page-login",4),ux(6,ke,1,1,"po-page-blocked-user",5)),l&2&&(Vp(5),dx(i.showPageBlocked?-1:5),Vp(),dx(i.showPageBlocked?6:-1));},dependencies:[dc,Qhe,Da,za],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),he=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Login - Human Resources"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),sg(),Sl(23,"pre",9),Jx(24,`/**
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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-page-login-human-resources"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return r})();var xe=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(p){p?.language==="jp"?this.literals=r$1({},this.japoneseLiterals):this.literals={};}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:false,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2),sg()(),Sl(4,"po-page-login",3),ht("p-language-change",function(m){return i.changeLanguage(m)}),sg()),l&2&&(Vp(4),tw("p-languages",i.languages)("p-literals",i.literals));},dependencies:[dc,Qhe,za],encapsulation:2,changeDetection:1})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Login - Automatic Service"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-login-automatic-service"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,xe],encapsulation:2})}return r})();var ve=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-doc"]],standalone:false,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do template do po-page-login."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoPageLoginComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-page-login"),sg(),Jx(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),sg(),Sl(18,"p"),Jx(19,"A propriedade "),Sl(20,"code"),Jx(21,"p-authentication-url"),sg(),Jx(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Sl(23,"em"),Jx(24,"client side"),sg(),Jx(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(26,"em"),Jx(27,"propriedades"),sg(),Jx(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),sg(),Sl(29,"p"),Jx(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(31,"em"),Jx(32,"assets"),sg(),Jx(33," no arquivo "),Sl(34,"strong"),Jx(35,"angular.json"),sg(),Jx(36," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Sl(37,"pre")(38,"code"),Jx(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()()(),Sl(40,"div",6)(41,"h4",7),Jx(42,"Seletor"),sg(),Sl(43,"pre",8),Jx(44,`<po-page-login
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
`),sg()(),Sl(45,"h4",9),Jx(46,"Propriedades"),sg(),Sl(47,"table",10)(48,"tr",11)(49,"th",12),Jx(50,"Nome"),sg(),Sl(51,"th",12),Jx(52,"Tipo"),sg(),Sl(53,"th",12),Jx(54,"Padr\xE3o"),sg(),Sl(55,"th",12),Jx(56,"Descri\xE7\xE3o"),sg()(),Sl(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),Jx(61," p-authentication-type"),Wl(62,"br"),sg()()(),Sl(63,"td",17)(64,"code",18),Jx(65,"PoPageLoginAuthenticationType"),sg()(),Sl(66,"td",19)(67,"p")(68,"code"),Jx(69,"PoPageLoginAuthenticationType.Basic"),sg()()(),Sl(70,"td",20)(71,"em")(72,"strong"),Jx(73,"(opcional)"),sg()(),Sl(74,"p"),Jx(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),Sl(76,"code"),Jx(77,"Basic"),sg(),Jx(78," e "),Sl(79,"code"),Jx(80,"Bearer"),sg(),Jx(81,"."),sg(),Sl(82,"blockquote")(83,"p"),Jx(84,"Caso o tipo definido seja "),Sl(85,"code"),Jx(86,"Basic"),sg(),Jx(87,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(88,"code"),Jx(89,"POST"),sg(),Jx(90," contendo:"),sg()(),Sl(91,"pre")(92,"code"),Jx(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),sg()(),Sl(94,"blockquote")(95,"p"),Jx(96,"Caso o tipo definido seja "),Sl(97,"code"),Jx(98,"Bearer"),sg(),Jx(99,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(100,"code"),Jx(101,"POST"),sg(),Jx(102," contendo:"),sg()(),Sl(103,"pre")(104,"code"),Jx(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),sg()()()(),Sl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),Jx(110," p-authentication-url"),Wl(111,"br"),sg()()(),Sl(112,"td",17)(113,"code",21),Jx(114,"string"),sg()(),Sl(115,"td",19),Jx(116,"-"),sg(),Sl(117,"td",20)(118,"em")(119,"strong"),Jx(120,"(opcional)"),sg()(),Sl(121,"p"),Jx(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),Sl(123,"code"),Jx(124,"p-login-submit"),sg(),Jx(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),sg(),Sl(126,"h3"),Jx(127,"Processos"),sg(),Sl(128,"p"),Jx(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),Sl(130,"strong"),Jx(131,"Enter"),sg(),Jx(132,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(133,"code"),Jx(134,"POST"),sg(),Jx(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),sg(),Sl(136,"pre")(137,"code"),Jx(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),sg()(),Sl(139,"p"),Jx(140,"Em caso de "),Sl(141,"strong"),Jx(142,"sucesso"),sg(),Jx(143,", o objeto de retorno \xE9 armazenado no "),Sl(144,"code"),Jx(145,"sessionStorage"),sg(),Jx(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Sl(147,"code"),Jx(148,"/"),sg(),Jx(149,"."),sg(),Sl(150,"pre")(151,"code"),Jx(152,`200:
{
  user: user
}
`),sg()(),Sl(153,"p"),Jx(154,"Em caso de "),Sl(155,"strong"),Jx(156,"erro"),sg(),Jx(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),sg(),Sl(158,"pre")(159,"code"),Jx(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),sg()(),Sl(161,"blockquote")(162,"p"),Jx(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),Sl(164,"code"),Jx(165,"p-exceeded-attempts-warning"),sg(),Jx(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Sl(167,"code"),Jx(168,"p-login-errors"),sg(),Jx(169,` e
`),Sl(170,"code"),Jx(171,"p-password-errors"),sg(),Jx(172," conforme retorno abaixo:"),sg()(),Sl(173,"pre")(174,"code"),Jx(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),sg()(),Sl(176,"blockquote")(177,"p"),Jx(178,"Caso o valor atribu\xEDdo para "),Sl(179,"code"),Jx(180,"p-exceeded-attempts-warning"),sg(),Jx(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Sl(182,"code"),Jx(183,"p-blocked-url"),sg(),Jx(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),sg()(),Sl(185,"p")(186,"em"),Jx(187,"Processo finalizado."),sg()(),Wl(188,"hr"),Sl(189,"h4"),Jx(190,"Praticidade"),sg(),Sl(191,"p"),Jx(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Sl(193,"code"),Jx(194,"po-page-login"),sg(),Jx(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Sl(196,"code"),Jx(197,"/login"),sg(),Jx(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),sg(),Sl(199,"pre")(200,"code"),Jx(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),sg()(),Sl(202,"p"),Jx(203,"O metadado "),Sl(204,"code"),Jx(205,"serviceApi"),sg(),Jx(206," deve ser a "),Sl(207,"strong"),Jx(208,"url"),sg(),Jx(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),Sl(210,"code"),Jx(211,"environment"),sg(),Jx(212,` alimenta a propriedade
`),Sl(213,"code"),Jx(214,"p-environment"),sg(),Jx(215,", "),Sl(216,"code"),Jx(217,"recovery"),sg(),Jx(218," \xE9 a interface "),Sl(219,"code"),Jx(220,"PoPageLoginRecovery"),sg(),Jx(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Sl(222,"code"),Jx(223,"registerUrl"),sg(),Jx(224," alimenta a propriedade "),Sl(225,"code"),Jx(226,"p-register-url"),sg(),Jx(227," e "),Sl(228,"code"),Jx(229,"authenticationType"),sg(),Jx(230," que define a propriedade "),Sl(231,"code"),Jx(232,"p-authentication-type"),sg(),Jx(233,"."),sg(),Sl(234,"blockquote")(235,"p"),Jx(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),sg()()()(),Sl(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),Jx(241," p-background"),Wl(242,"br"),sg()()(),Sl(243,"td",17)(244,"code",21),Jx(245,"string"),sg()(),Sl(246,"td",19),Jx(247,"-"),sg(),Sl(248,"td",20)(249,"em")(250,"strong"),Jx(251,"(opcional)"),sg()(),Sl(252,"p"),Jx(253,"O "),Sl(254,"code"),Jx(255,"p-background"),sg(),Jx(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),sg(),Sl(257,"p"),Jx(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),sg(),Sl(259,"p"),Jx(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Sl(261,"code"),Jx(262,"highlightInfo"),sg(),Jx(263,"."),sg(),Sl(264,"blockquote")(265,"p"),Jx(266,"Veja mais sobre as literais na propriedade "),Sl(267,"code"),Jx(268,"p-literals"),sg(),Jx(269,"."),sg()(),Sl(270,"p"),Jx(271,"Exemplos de valores v\xE1lidos:"),sg(),Sl(272,"ul")(273,"li")(274,"strong"),Jx(275,"local"),sg(),Jx(276,": "),Sl(277,"code"),Jx(278,"./assets/images/login-background.png"),sg()(),Sl(279,"li")(280,"strong"),Jx(281,"url externa"),sg(),Jx(282,": "),Sl(283,"code"),Jx(284,"https://po-ui.io/assets/images/login-background.png"),sg()()(),Sl(285,"blockquote")(286,"p"),Jx(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),sg()()()(),Sl(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),Jx(292," p-blocked-url"),Wl(293,"br"),sg()()(),Sl(294,"td",17)(295,"code",21),Jx(296,"string"),sg()(),Sl(297,"td",19),Jx(298,"-"),sg(),Sl(299,"td",20)(300,"em")(301,"strong"),Jx(302,"(opcional)"),sg()(),Sl(303,"p"),Jx(304,"Caso o valor atribu\xEDdo para "),Sl(305,"code"),Jx(306,"p-exceeded-attempts-warning"),sg(),Jx(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),sg()()(),Sl(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),Jx(312," p-components-size"),Wl(313,"br"),sg()()(),Sl(314,"td",17)(315,"code",21),Jx(316,"string"),sg()(),Sl(317,"td",19)(318,"p")(319,"code"),Jx(320,"medium"),sg()()(),Sl(321,"td",20)(322,"em")(323,"strong"),Jx(324,"(opcional)"),sg()(),Sl(325,"p"),Jx(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(327,"ul")(328,"li")(329,"code"),Jx(330,"small"),sg(),Jx(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(332,"li")(333,"code"),Jx(334,"medium"),sg(),Jx(335,": aplica a medida medium de cada componente."),sg()(),Sl(336,"blockquote")(337,"p"),Jx(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(339,"code"),Jx(340,"medium"),sg(),Jx(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(342,"a",22),Jx(343,"po-theme"),sg(),Jx(344,"."),sg()()()(),Sl(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),Jx(349," p-contact-email"),Wl(350,"br"),sg()()(),Sl(351,"td",17)(352,"code",21),Jx(353,"string"),sg()(),Sl(354,"td",19),Jx(355,"-"),sg(),Sl(356,"td",20)(357,"em")(358,"strong"),Jx(359,"(opcional)"),sg()(),Sl(360,"p"),Jx(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),sg()()(),Sl(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),Jx(366," p-custom-field"),Wl(367,"br"),sg()()(),Sl(368,"td",17)(369,"code",21),Jx(370,"string "),sg(),Sl(371,"code",23),Jx(372," PoPageLoginCustomField"),sg()(),Sl(373,"td",19),Jx(374,"-"),sg(),Sl(375,"td",20)(376,"em")(377,"strong"),Jx(378,"(opcional)"),sg()(),Sl(379,"p"),Jx(380,"Ao informar um valor do tipo "),Sl(381,"code"),Jx(382,"string"),sg(),Jx(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Sl(384,"code"),Jx(385,"literals"),sg(),Jx(386," como "),Sl(387,"code"),Jx(388,"customFieldErrorPattern"),sg(),Jx(389," e "),Sl(390,"code"),Jx(391,"customFieldPlaceholder"),sg(),Jx(392,"."),sg(),Sl(393,"p"),Jx(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),Sl(395,"code"),Jx(396,"PoPageLoginCustomField"),sg(),Jx(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Sl(398,"code"),Jx(399,"po-input"),sg(),Jx(400,", "),Sl(401,"code"),Jx(402,"po-combo"),sg(),Jx(403,` especificamente para servi\xE7os
ou `),Sl(404,"code"),Jx(405,"po-select"),sg(),Jx(406," para valores fixos."),sg(),Sl(407,"p"),Jx(408,"Abaixo seguem os exemplos de cada tipo de campo."),sg(),Sl(409,"p")(410,"code"),Jx(411,"po-input"),sg(),Jx(412,":"),sg(),Sl(413,"pre")(414,"code"),Jx(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),sg()(),Sl(416,"p")(417,"code"),Jx(418,"po-combo"),sg(),Jx(419,":"),sg(),Sl(420,"pre")(421,"code"),Jx(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),sg()(),Sl(423,"p")(424,"code"),Jx(425,"po-select"),sg(),Jx(426,":"),sg(),Sl(427,"pre")(428,"code"),Jx(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),sg()(),Sl(430,"p"),Jx(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),sg()()(),Sl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),Jx(436," p-environment"),Wl(437,"br"),sg()()(),Sl(438,"td",17)(439,"code",21),Jx(440,"string"),sg()(),Sl(441,"td",19),Jx(442,"-"),sg(),Sl(443,"td",20)(444,"em")(445,"strong"),Jx(446,"(opcional)"),sg()(),Sl(447,"p"),Jx(448,"Adiciona uma "),Sl(449,"code"),Jx(450,"tag"),sg(),Jx(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),sg(),Sl(452,"blockquote")(453,"p"),Jx(454,"Essa propriedade limita o texto em 40 caracteres."),sg()()()(),Sl(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),Jx(459," p-exceeded-attempts-warning"),Wl(460,"br"),sg()()(),Sl(461,"td",17)(462,"code",24),Jx(463,"number"),sg()(),Sl(464,"td",19)(465,"p")(466,"code"),Jx(467,"0"),sg()()(),Sl(468,"td",20)(469,"em")(470,"strong"),Jx(471,"(opcional)"),sg()(),Sl(472,"p"),Jx(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),sg(),Sl(474,"blockquote")(475,"p"),Jx(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),Sl(477,"code"),Jx(478,"p-authentication-url"),sg(),Jx(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Sl(480,"code"),Jx(481,"p-exceeded-attempts-warning"),sg(),Jx(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),sg()()()(),Sl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),Jx(487," p-hide-label-status"),Wl(488,"br"),sg()()(),Sl(489,"td",17)(490,"code",25),Jx(491,"boolean"),sg()(),Sl(492,"td",19)(493,"p")(494,"code"),Jx(495,"false"),sg()()(),Sl(496,"td",20)(497,"em")(498,"strong"),Jx(499,"(opcional)"),sg()(),Sl(500,"p"),Jx(501,"Indica se o status do "),Sl(502,"code"),Jx(503,"model"),sg(),Jx(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),sg(),Sl(505,"blockquote")(506,"p"),Jx(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Sl(508,"code"),Jx(509,"false"),sg(),Jx(510,"."),sg()()()(),Sl(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),Jx(515," p-hide-password-peek"),Wl(516,"br"),sg()()(),Sl(517,"td",17)(518,"code",25),Jx(519,"boolean"),sg()(),Sl(520,"td",19)(521,"p")(522,"code"),Jx(523,"false"),sg()()(),Sl(524,"td",20)(525,"em")(526,"strong"),Jx(527,"(opcional)"),sg()(),Sl(528,"p"),Jx(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),sg()()(),Sl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),Jx(534," p-hide-remember-user"),Wl(535,"br"),sg()()(),Sl(536,"td",17)(537,"code",25),Jx(538,"boolean"),sg()(),Sl(539,"td",19)(540,"p")(541,"code"),Jx(542,"false"),sg()()(),Sl(543,"td",20)(544,"em")(545,"strong"),Jx(546,"(opcional)"),sg()(),Sl(547,"p"),Jx(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),sg(),Sl(549,"p"),Jx(550,"Quando essa propriedade \xE9 setada com "),Sl(551,"code"),Jx(552,"true"),sg(),Jx(553," a propriedade "),Sl(554,"code"),Jx(555,"rememberUser"),sg(),Jx(556," enviada no evento "),Sl(557,"code"),Jx(558,"p-login-submit"),sg(),Jx(559,` ser\xE1 sempre
`),Sl(560,"code"),Jx(561,"false"),sg(),Jx(562,"."),sg(),Sl(563,"blockquote")(564,"p"),Jx(565,"Veja a propriedade "),Sl(566,"code"),Jx(567,"p-literals"),sg(),Jx(568," para customizar a literal "),Sl(569,"code"),Jx(570,"rememberUser"),sg(),Jx(571,"."),sg()()()(),Sl(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),Jx(576," (p-language-change)"),Wl(577,"br"),sg()()(),Sl(578,"td",17)(579,"code",28),Jx(580,"EventEmitter"),sg()(),Sl(581,"td",19),Jx(582,"-"),sg(),Sl(583,"td",20)(584,"em")(585,"strong"),Jx(586,"(opcional)"),sg()(),Sl(587,"p"),Jx(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),sg(),Sl(589,"p"),Jx(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Sl(591,"code"),Jx(592,"PoLanguage"),sg(),Jx(593," com a linguagem selecionada."),sg()()(),Sl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),Jx(598," p-languages"),Wl(599,"br"),sg()()(),Sl(600,"td",17)(601,"code",29),Jx(602,"Array<PoLanguage>"),sg()(),Sl(603,"td",19),Jx(604,"-"),sg(),Sl(605,"td",20)(606,"em")(607,"strong"),Jx(608,"(opcional)"),sg()(),Sl(609,"p"),Jx(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),sg(),Sl(611,"p"),Jx(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),sg(),Sl(613,"p"),Jx(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),sg(),Sl(615,"p"),Jx(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),Sl(617,"code"),Jx(618,"i18n"),sg(),Jx(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),sg(),Sl(620,"blockquote")(621,"p"),Jx(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),Sl(623,"code"),Jx(624,"p-literals"),sg(),Jx(625,"."),sg()()()(),Sl(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),Jx(630," p-literals"),Wl(631,"br"),sg()()(),Sl(632,"td",17)(633,"code",30),Jx(634,"PoPageLoginLiterals"),sg()(),Sl(635,"td",19),Jx(636,"-"),sg(),Sl(637,"td",20)(638,"em")(639,"strong"),Jx(640,"(opcional)"),sg()(),Sl(641,"p"),Jx(642,"Objeto com as literais usadas no "),Sl(643,"code"),Jx(644,"po-page-login"),sg(),Jx(645,"."),sg(),Sl(646,"p"),Jx(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(648,"pre")(649,"code"),Jx(650,`const customLiterals: PoPageLoginLiterals = {
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
`),sg()(),Sl(651,"p"),Jx(652,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(653,"pre")(654,"code"),Jx(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),sg()(),Sl(656,"p"),Jx(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(658,"pre")(659,"code"),Jx(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),sg()(),Sl(661,"blockquote")(662,"p"),Jx(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),sg()()()(),Sl(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),Jx(668," p-loading"),Wl(669,"br"),sg()()(),Sl(670,"td",17)(671,"code",25),Jx(672,"boolean"),sg()(),Sl(673,"td",19)(674,"p")(675,"code"),Jx(676,"false"),sg()()(),Sl(677,"td",20)(678,"em")(679,"strong"),Jx(680,"(opcional)"),sg()(),Sl(681,"p"),Jx(682,"Habilita um estado de carregamento ao bot\xE3o de "),Sl(683,"em"),Jx(684,"login"),sg(),Jx(685,"."),sg(),Sl(686,"blockquote")(687,"p"),Jx(688,"\xC9 necess\xE1rio atribuir "),Sl(689,"code"),Jx(690,"true"),sg(),Jx(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),Sl(692,"code"),Jx(693,"p-login-submit"),sg(),Jx(694,"."),sg()()()(),Sl(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),Jx(699," p-login"),Wl(700,"br"),sg()()(),Sl(701,"td",17)(702,"code",21),Jx(703,"string"),sg()(),Sl(704,"td",19),Jx(705,"-"),sg(),Sl(706,"td",20)(707,"em")(708,"strong"),Jx(709,"(opcional)"),sg()(),Sl(710,"p"),Jx(711,"Valor do modelo do campo de login."),sg()()(),Sl(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),Jx(716," (p-login-change)"),Wl(717,"br"),sg()()(),Sl(718,"td",17)(719,"code",28),Jx(720,"EventEmitter"),sg()(),Sl(721,"td",19),Jx(722,"-"),sg(),Sl(723,"td",20)(724,"em")(725,"strong"),Jx(726,"(opcional)"),sg()(),Sl(727,"p"),Jx(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),sg(),Sl(729,"p"),Jx(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Sl(731,"code"),Jx(732,"string"),sg(),Jx(733," com o texto informado no campo."),sg(),Sl(734,"blockquote")(735,"p"),Jx(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(737,"code"),Jx(738,"p-authentication-url"),sg(),Jx(739,"."),sg()()()(),Sl(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),Jx(744," p-login-errors"),Wl(745,"br"),sg()()(),Sl(746,"td",17)(747,"code",31),Jx(748,"string[]"),sg()(),Sl(749,"td",19),Jx(750,"-"),sg(),Sl(751,"td",20)(752,"em")(753,"strong"),Jx(754,"(opcional)"),sg()(),Sl(755,"p"),Jx(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),sg()()(),Sl(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),Jx(761," p-login-pattern"),Wl(762,"br"),sg()()(),Sl(763,"td",17)(764,"code",21),Jx(765,"string"),sg()(),Sl(766,"td",19),Jx(767,"-"),sg(),Sl(768,"td",20)(769,"em")(770,"strong"),Jx(771,"(opcional)"),sg()(),Sl(772,"p"),Jx(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),Sl(774,"code"),Jx(775,"loginErrorPattern"),sg(),Jx(776,`
ser\xE1 exibida.`),sg(),Sl(777,"p"),Jx(778,"Exemplos de valores v\xE1lidos:"),sg(),Sl(779,"ul")(780,"li"),Jx(781,"email: "),Sl(782,"code"),Jx(783,"[expressao-regular-email]"),sg()(),Sl(784,"li"),Jx(785,"cpf: "),Sl(786,"code"),Jx(787,"[expressao-regular-cpf]"),sg()()(),Sl(788,"blockquote")(789,"p"),Jx(790,"Veja a propriedade "),Sl(791,"code"),Jx(792,"p-literals"),sg(),Jx(793," para customizar a literal "),Sl(794,"code"),Jx(795,"loginErrorPattern"),sg(),Jx(796,"."),sg()()()(),Sl(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),Jx(801," (p-login-submit)"),Wl(802,"br"),sg()()(),Sl(803,"td",17)(804,"code",28),Jx(805,"EventEmitter"),sg()(),Sl(806,"td",19),Jx(807,"-"),sg(),Sl(808,"td",20)(809,"p"),Jx(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),Sl(811,"code"),Jx(812,"Enter"),sg(),Jx(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),sg(),Sl(814,"p"),Jx(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Sl(816,"code"),Jx(817,"PoPageLogin"),sg(),Jx(818," com os dados informados no formul\xE1rio."),sg(),Sl(819,"blockquote")(820,"p"),Jx(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(822,"code"),Jx(823,"p-url-recovery"),sg(),Jx(824,"."),sg()(),Sl(825,"blockquote")(826,"p"),Jx(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),Sl(828,"code"),Jx(829,"PoPageLogin"),sg(),Jx(830," mais abaixo."),sg()()()(),Sl(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),Jx(835," p-logo"),Wl(836,"br"),sg()()(),Sl(837,"td",17)(838,"code",21),Jx(839,"string"),sg()(),Sl(840,"td",19),Jx(841,"-"),sg(),Sl(842,"td",20)(843,"em")(844,"strong"),Jx(845,"(opcional)"),sg()(),Sl(846,"p"),Jx(847,"Caminho para a logomarca localizada na parte superior."),sg(),Sl(848,"blockquote")(849,"p"),Jx(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),sg()()()(),Sl(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),Jx(855," p-no-autocomplete-login"),Wl(856,"br"),sg()()(),Sl(857,"td",17)(858,"code",25),Jx(859,"boolean"),sg()(),Sl(860,"td",19)(861,"p")(862,"code"),Jx(863,"true"),sg()()(),Sl(864,"td",20)(865,"em")(866,"strong"),Jx(867,"(opcional)"),sg()(),Sl(868,"p"),Jx(869,"Define a propriedade nativa "),Sl(870,"code"),Jx(871,"autocomplete"),sg(),Jx(872," do campo como "),Sl(873,"code"),Jx(874,"off"),sg(),Jx(875,"."),sg()()(),Sl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),Jx(880," p-no-autocomplete-password"),Wl(881,"br"),sg()()(),Sl(882,"td",17)(883,"code",25),Jx(884,"boolean"),sg()(),Sl(885,"td",19)(886,"p")(887,"code"),Jx(888,"true"),sg()()(),Sl(889,"td",20)(890,"em")(891,"strong"),Jx(892,"(opcional)"),sg()(),Sl(893,"p"),Jx(894,"Define a propriedade nativa "),Sl(895,"code"),Jx(896,"autocomplete"),sg(),Jx(897," do campo como "),Sl(898,"code"),Jx(899,"off"),sg(),Jx(900,"."),sg(),Sl(901,"blockquote")(902,"p"),Jx(903,"No componente "),Sl(904,"code"),Jx(905,"po-password"),sg(),Jx(906," ser\xE1 definido como "),Sl(907,"code"),Jx(908,"new-password"),sg(),Jx(909,"."),sg()()()(),Sl(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),Jx(914," (p-password-change)"),Wl(915,"br"),sg()()(),Sl(916,"td",17)(917,"code",28),Jx(918,"EventEmitter"),sg()(),Sl(919,"td",19),Jx(920,"-"),sg(),Sl(921,"td",20)(922,"em")(923,"strong"),Jx(924,"(opcional)"),sg()(),Sl(925,"p"),Jx(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),sg(),Sl(927,"p"),Jx(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Sl(929,"code"),Jx(930,"string"),sg(),Jx(931," com o texto informado no campo."),sg(),Sl(932,"blockquote")(933,"p"),Jx(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(935,"code"),Jx(936,"p-authentication-url"),sg(),Jx(937,"."),sg()()()(),Sl(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),Jx(942," p-password-errors"),Wl(943,"br"),sg()()(),Sl(944,"td",17)(945,"code",31),Jx(946,"string[]"),sg()(),Sl(947,"td",19),Jx(948,"-"),sg(),Sl(949,"td",20)(950,"em")(951,"strong"),Jx(952,"(opcional)"),sg()(),Sl(953,"p"),Jx(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),sg()()(),Sl(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),Jx(959," p-password-pattern"),Wl(960,"br"),sg()()(),Sl(961,"td",17)(962,"code",21),Jx(963,"string"),sg()(),Sl(964,"td",19),Jx(965,"-"),sg(),Sl(966,"td",20)(967,"em")(968,"strong"),Jx(969,"(opcional)"),sg()(),Sl(970,"p"),Jx(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),Sl(972,"code"),Jx(973,"passwordErrorPattern"),sg(),Jx(974,`
ser\xE1 exibida.`),sg(),Sl(975,"p"),Jx(976,"Exemplos de valores v\xE1lidos:"),sg(),Sl(977,"ul")(978,"li"),Jx(979,"Apenas n\xFAmeros: "),Sl(980,"code"),Jx(981,"\\d?"),sg()(),Sl(982,"li"),Jx(983,"Letras m\xEDnusculas: "),Sl(984,"code"),Jx(985,"\\z?"),sg()()(),Sl(986,"blockquote")(987,"p"),Jx(988,"Veja a propriedade "),Sl(989,"code"),Jx(990,"p-literals"),sg(),Jx(991," para customizar a literal "),Sl(992,"code"),Jx(993,"passwordErrorPattern"),sg(),Jx(994,"."),sg()()()(),Sl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),Jx(999," p-product-name"),Wl(1e3,"br"),sg()()(),Sl(1001,"td",17)(1002,"code",21),Jx(1003,"string"),sg()(),Sl(1004,"td",19),Jx(1005,"-"),sg(),Sl(1006,"td",20)(1007,"em")(1008,"strong"),Jx(1009,"(opcional)"),sg()(),Sl(1010,"p"),Jx(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),sg()()(),Sl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),Jx(1016," p-recovery"),Wl(1017,"br"),sg()()(),Sl(1018,"td",17)(1019,"code",21),Jx(1020,"string "),sg(),Sl(1021,"code",32),Jx(1022," Function "),sg(),Sl(1023,"code",33),Jx(1024," PoPageLoginRecovery"),sg()(),Sl(1025,"td",19),Jx(1026,"-"),sg(),Sl(1027,"td",20)(1028,"em")(1029,"strong"),Jx(1030,"(opcional)"),sg()(),Sl(1031,"p"),Jx(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),sg(),Sl(1033,"p"),Jx(1034,"A propriedade aceita os seguintes tipos:"),sg(),Sl(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),Jx(1039,"String"),sg(),Jx(1040,": informe uma url externa ou uma rota v\xE1lida;"),sg()(),Sl(1041,"li")(1042,"p")(1043,"strong"),Jx(1044,"Function"),sg(),Jx(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),sg(),Sl(1046,"pre")(1047,"code"),Jx(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),sg()()(),Sl(1049,"li")(1050,"p")(1051,"strong"),Jx(1052,"PoPageLoginRecovery"),sg(),Jx(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),Sl(1054,"strong"),Jx(1055,"po-modal-password-recovery"),sg(),Jx(1056,`.
O objeto deve conter a `),Sl(1057,"strong"),Jx(1058,"url"),sg(),Jx(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Sl(1060,"strong"),Jx(1061,"tipo"),sg(),Jx(1062,` de modal para recupera\xE7\xE3o de senha,
`),Sl(1063,"strong"),Jx(1064,"email"),sg(),Jx(1065," para contato e "),Sl(1066,"strong"),Jx(1067,"m\xE1scara"),sg(),Jx(1068," do campo de telefone."),sg()()()()(),Sl(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),Jx(1073," p-register-url"),Wl(1074,"br"),sg()()(),Sl(1075,"td",17)(1076,"code",21),Jx(1077,"string"),sg()(),Sl(1078,"td",19),Jx(1079,"-"),sg(),Sl(1080,"td",20)(1081,"em")(1082,"strong"),Jx(1083,"(opcional)"),sg()(),Sl(1084,"p"),Jx(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),sg(),Sl(1086,"p"),Jx(1087,"Exemplos de valores v\xE1lidos:"),sg(),Sl(1088,"ul")(1089,"li")(1090,"strong"),Jx(1091,"local"),sg(),Jx(1092,": "),Sl(1093,"code"),Jx(1094,"/home"),sg()(),Sl(1095,"li")(1096,"strong"),Jx(1097,"url externa"),sg(),Jx(1098,": "),Sl(1099,"code"),Jx(1100,"https://po-ui.io"),sg()()(),Sl(1101,"blockquote")(1102,"p"),Jx(1103,"Veja a propriedade "),Sl(1104,"code"),Jx(1105,"p-literals"),sg(),Jx(1106," para customizar a literal "),Sl(1107,"code"),Jx(1108,"registerUrl"),sg(),Jx(1109,"."),sg()()()(),Sl(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),Jx(1114," p-secondary-logo"),Wl(1115,"br"),sg()()(),Sl(1116,"td",17)(1117,"code",21),Jx(1118,"string"),sg()(),Sl(1119,"td",19),Jx(1120,"-"),sg(),Sl(1121,"td",20)(1122,"em")(1123,"strong"),Jx(1124,"(opcional)"),sg()(),Sl(1125,"p"),Jx(1126,"Caminho para a logomarca localizada no rodap\xE9."),sg()()(),Sl(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),Jx(1131," p-support"),Wl(1132,"br"),sg()()(),Sl(1133,"td",17)(1134,"code",21),Jx(1135,"string "),sg(),Sl(1136,"code",32),Jx(1137," Function"),sg()(),Sl(1138,"td",19),Jx(1139,"-"),sg(),Sl(1140,"td",20)(1141,"em")(1142,"strong"),Jx(1143,"(opcional)"),sg()(),Sl(1144,"p"),Jx(1145,"Exibe um bot\xE3o para suporte."),sg(),Sl(1146,"p"),Jx(1147,"A propriedade aceita os seguintes tipos:"),sg(),Sl(1148,"ul")(1149,"li")(1150,"strong"),Jx(1151,"String"),sg(),Jx(1152,": URL externa ou uma rota v\xE1lida;"),sg(),Sl(1153,"li")(1154,"strong"),Jx(1155,"Function"),sg(),Jx(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),Sl(1157,"pre")(1158,"code"),Jx(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),sg()()()()()()(),Sl(1160,"h3"),Jx(1161,"Interfaces"),sg(),Sl(1162,"h4",34)(1163,"code",5),Jx(1164,"PoPageLoginCustomField"),sg()(),Sl(1165,"div",2)(1166,"p"),Jx(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),Sl(1168,"code"),Jx(1169,"po-page-login"),sg(),Jx(1170,"."),sg()(),Sl(1171,"h4",9),Jx(1172,"Propriedades"),sg(),Sl(1173,"table",10)(1174,"tr",11)(1175,"th",12),Jx(1176,"Nome"),sg(),Sl(1177,"th",12),Jx(1178,"Tipo"),sg(),Sl(1179,"th",12),Jx(1180,"Descri\xE7\xE3o"),sg()(),Sl(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),Jx(1185," errorPattern"),Wl(1186,"br"),sg()()(),Sl(1187,"td",17)(1188,"code",21),Jx(1189,"string"),sg()(),Sl(1190,"td",20)(1191,"em")(1192,"strong"),Jx(1193,"(opcional)"),sg()(),Sl(1194,"p"),Jx(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),Sl(1196,"code"),Jx(1197,"pattern"),sg(),Jx(1198," n\xE3o for v\xE1lida."),sg()()(),Sl(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),Jx(1203," fieldValue"),Wl(1204,"br"),sg()()(),Sl(1205,"td",17)(1206,"code",21),Jx(1207,"string"),sg()(),Sl(1208,"td",20)(1209,"em")(1210,"strong"),Jx(1211,"(opcional)"),sg()(),Sl(1212,"p"),Jx(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Sl(1214,"code"),Jx(1215,"po-combo"),sg(),Jx(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),sg()()(),Sl(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),Jx(1221," options"),Wl(1222,"br"),sg()()(),Sl(1223,"td",17)(1224,"code",35),Jx(1225,"Array<PoSelectOption>"),sg()(),Sl(1226,"td",20)(1227,"em")(1228,"strong"),Jx(1229,"(opcional)"),sg()(),Sl(1230,"p"),Jx(1231,"Lista de op\xE7\xF5es de um "),Sl(1232,"code"),Jx(1233,"po-select"),sg(),Jx(1234,"."),sg()()(),Sl(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),Jx(1239," pattern"),Wl(1240,"br"),sg()()(),Sl(1241,"td",17)(1242,"code",21),Jx(1243,"string"),sg()(),Sl(1244,"td",20)(1245,"em")(1246,"strong"),Jx(1247,"(opcional)"),sg()(),Sl(1248,"p"),Jx(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Sl(1250,"code"),Jx(1251,"errorPattern"),sg(),Jx(1252," ser\xE1 exibida."),sg()()(),Sl(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),Jx(1257," placeholder"),Wl(1258,"br"),sg()()(),Sl(1259,"td",17)(1260,"code",21),Jx(1261,"string"),sg()(),Sl(1262,"td",20)(1263,"em")(1264,"strong"),Jx(1265,"(opcional)"),sg()(),Sl(1266,"p"),Jx(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),sg()()(),Sl(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),Jx(1272," property"),Wl(1273,"br"),sg()()(),Sl(1274,"td",17)(1275,"code",21),Jx(1276,"string"),sg()(),Sl(1277,"td",20)(1278,"p"),Jx(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),sg()()(),Sl(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),Jx(1284," url"),Wl(1285,"br"),sg()()(),Sl(1286,"td",17)(1287,"code",21),Jx(1288,"string"),sg()(),Sl(1289,"td",20)(1290,"em")(1291,"strong"),Jx(1292,"(opcional)"),sg()(),Sl(1293,"p"),Jx(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Sl(1295,"code"),Jx(1296,"po-combo"),sg(),Jx(1297,"."),sg()()(),Sl(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),Jx(1302," value"),Wl(1303,"br"),sg()()(),Sl(1304,"td",17)(1305,"code",21),Jx(1306,"string "),sg(),Sl(1307,"code",24),Jx(1308," number"),sg()(),Sl(1309,"td",20)(1310,"em")(1311,"strong"),Jx(1312,"(opcional)"),sg()(),Sl(1313,"p"),Jx(1314,"Valor do campo customizado."),sg()()()(),Sl(1315,"h4",34)(1316,"code",5),Jx(1317,"PoPageLoginLiterals"),sg()(),Sl(1318,"div",2)(1319,"p"),Jx(1320,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1321,"code"),Jx(1322,"po-page-login"),sg(),Jx(1323,"."),sg()(),Sl(1324,"h4",9),Jx(1325,"Propriedades"),sg(),Sl(1326,"table",10)(1327,"tr",11)(1328,"th",12),Jx(1329,"Nome"),sg(),Sl(1330,"th",12),Jx(1331,"Tipo"),sg(),Sl(1332,"th",12),Jx(1333,"Descri\xE7\xE3o"),sg()(),Sl(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),Jx(1338," attempts"),Wl(1339,"br"),sg()()(),Sl(1340,"td",17)(1341,"code",21),Jx(1342,"string"),sg()(),Sl(1343,"td",20)(1344,"em")(1345,"strong"),Jx(1346,"(opcional)"),sg()(),Sl(1347,"p"),Jx(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),sg()()(),Sl(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),Jx(1353," createANewPasswordNow"),Wl(1354,"br"),sg()()(),Sl(1355,"td",17)(1356,"code",21),Jx(1357,"string"),sg()(),Sl(1358,"td",20)(1359,"em")(1360,"strong"),Jx(1361,"(opcional)"),sg()(),Sl(1362,"p"),Jx(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),sg()()(),Sl(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),Jx(1368," customFieldErrorPattern"),Wl(1369,"br"),sg()()(),Sl(1370,"td",17)(1371,"code",21),Jx(1372,"string"),sg()(),Sl(1373,"td",20)(1374,"em")(1375,"strong"),Jx(1376,"(opcional)"),sg()(),Sl(1377,"p"),Jx(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),sg()()(),Sl(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),Jx(1383," customFieldPlaceholder"),Wl(1384,"br"),sg()()(),Sl(1385,"td",17)(1386,"code",21),Jx(1387,"string"),sg()(),Sl(1388,"td",20)(1389,"em")(1390,"strong"),Jx(1391,"(opcional)"),sg()(),Sl(1392,"p"),Jx(1393,"Placeholder para o campo customizado."),sg()()(),Sl(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),Jx(1398," forgotPassword"),Wl(1399,"br"),sg()()(),Sl(1400,"td",17)(1401,"code",21),Jx(1402,"string"),sg()(),Sl(1403,"td",20)(1404,"em")(1405,"strong"),Jx(1406,"(opcional)"),sg()(),Sl(1407,"p"),Jx(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),sg()()(),Sl(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),Jx(1413," forgotYourPassword"),Wl(1414,"br"),sg()()(),Sl(1415,"td",17)(1416,"code",21),Jx(1417,"string"),sg()(),Sl(1418,"td",20)(1419,"em")(1420,"strong"),Jx(1421,"(opcional)"),sg()(),Sl(1422,"p"),Jx(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),sg()()(),Sl(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),Jx(1428," highlightInfo"),Wl(1429,"br"),sg()()(),Sl(1430,"td",17)(1431,"code",21),Jx(1432,"string"),sg()(),Sl(1433,"td",20)(1434,"em")(1435,"strong"),Jx(1436,"(opcional)"),sg()(),Sl(1437,"p"),Jx(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),Sl(1439,"code"),Jx(1440,"p-background"),sg(),Jx(1441,"."),sg()()(),Sl(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),Jx(1446," iForgotMyPassword"),Wl(1447,"br"),sg()()(),Sl(1448,"td",17)(1449,"code",21),Jx(1450,"string"),sg()(),Sl(1451,"td",20)(1452,"em")(1453,"strong"),Jx(1454,"(opcional)"),sg()(),Sl(1455,"p"),Jx(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),sg()()(),Sl(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),Jx(1461," ifYouTryHarder"),Wl(1462,"br"),sg()()(),Sl(1463,"td",17)(1464,"code",21),Jx(1465,"string"),sg()(),Sl(1466,"td",20)(1467,"em")(1468,"strong"),Jx(1469,"(opcional)"),sg()(),Sl(1470,"p"),Jx(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),sg()()(),Sl(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),Jx(1476," loginErrorPattern"),Wl(1477,"br"),sg()()(),Sl(1478,"td",17)(1479,"code",21),Jx(1480,"string"),sg()(),Sl(1481,"td",20)(1482,"em")(1483,"strong"),Jx(1484,"(opcional)"),sg()(),Sl(1485,"p"),Jx(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),sg()()(),Sl(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),Jx(1491," loginHint"),Wl(1492,"br"),sg()()(),Sl(1493,"td",17)(1494,"code",21),Jx(1495,"string"),sg()(),Sl(1496,"td",20)(1497,"em")(1498,"strong"),Jx(1499,"(opcional)"),sg()(),Sl(1500,"p"),Jx(1501,"Texto exibido como dica para o campo de login."),sg()()(),Sl(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),Jx(1506," loginLabel"),Wl(1507,"br"),sg()()(),Sl(1508,"td",17)(1509,"code",21),Jx(1510,"string"),sg()(),Sl(1511,"td",20)(1512,"em")(1513,"strong"),Jx(1514,"(opcional)"),sg()(),Sl(1515,"p"),Jx(1516,"Texto exibido como label do campo de login."),sg()()(),Sl(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),Jx(1521," loginPlaceholder"),Wl(1522,"br"),sg()()(),Sl(1523,"td",17)(1524,"code",21),Jx(1525,"string"),sg()(),Sl(1526,"td",20)(1527,"em")(1528,"strong"),Jx(1529,"(opcional)"),sg()(),Sl(1530,"p"),Jx(1531,"Placeholder do campo de login."),sg()()(),Sl(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),Jx(1536," passwordErrorPattern"),Wl(1537,"br"),sg()()(),Sl(1538,"td",17)(1539,"code",21),Jx(1540,"string"),sg()(),Sl(1541,"td",20)(1542,"em")(1543,"strong"),Jx(1544,"(opcional)"),sg()(),Sl(1545,"p"),Jx(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),sg()()(),Sl(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),Jx(1551," passwordLabel"),Wl(1552,"br"),sg()()(),Sl(1553,"td",17)(1554,"code",21),Jx(1555,"string"),sg()(),Sl(1556,"td",20)(1557,"em")(1558,"strong"),Jx(1559,"(opcional)"),sg()(),Sl(1560,"p"),Jx(1561,"Texto exibido como label do campo de password."),sg()()(),Sl(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),Jx(1566," passwordPlaceholder"),Wl(1567,"br"),sg()()(),Sl(1568,"td",17)(1569,"code",21),Jx(1570,"string"),sg()(),Sl(1571,"td",20)(1572,"em")(1573,"strong"),Jx(1574,"(opcional)"),sg()(),Sl(1575,"p"),Jx(1576,"Placeholder do campo de password."),sg()()(),Sl(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),Jx(1581," registerUrl"),Wl(1582,"br"),sg()()(),Sl(1583,"td",17)(1584,"code",21),Jx(1585,"string"),sg()(),Sl(1586,"td",20)(1587,"em")(1588,"strong"),Jx(1589,"(opcional)"),sg()(),Sl(1590,"p"),Jx(1591,"Texto exibido no link de novo cadastro."),sg()()(),Sl(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),Jx(1596," rememberUser"),Wl(1597,"br"),sg()()(),Sl(1598,"td",17)(1599,"code",21),Jx(1600,"string"),sg()(),Sl(1601,"td",20)(1602,"em")(1603,"strong"),Jx(1604,"(opcional)"),sg()(),Sl(1605,"p"),Jx(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),sg()()(),Sl(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),Jx(1611," rememberUserHint"),Wl(1612,"br"),sg()()(),Sl(1613,"td",17)(1614,"code",21),Jx(1615,"string"),sg()(),Sl(1616,"td",20)(1617,"em")(1618,"strong"),Jx(1619,"(opcional)"),sg()(),Sl(1620,"p"),Jx(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),sg()()(),Sl(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),Jx(1626," submitLabel"),Wl(1627,"br"),sg()()(),Sl(1628,"td",17)(1629,"code",21),Jx(1630,"string"),sg()(),Sl(1631,"td",20)(1632,"em")(1633,"strong"),Jx(1634,"(opcional)"),sg()(),Sl(1635,"p"),Jx(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),sg()()(),Sl(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),Jx(1641," submittedLabel"),Wl(1642,"br"),sg()()(),Sl(1643,"td",17)(1644,"code",21),Jx(1645,"string"),sg()(),Sl(1646,"td",20)(1647,"em")(1648,"strong"),Jx(1649,"(opcional)"),sg()(),Sl(1650,"p"),Jx(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),sg()()(),Sl(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),Jx(1656," support"),Wl(1657,"br"),sg()()(),Sl(1658,"td",17)(1659,"code",21),Jx(1660,"string"),sg()(),Sl(1661,"td",20)(1662,"em")(1663,"strong"),Jx(1664,"(opcional)"),sg()(),Sl(1665,"p"),Jx(1666,"Label do bot\xE3o de suporte."),sg()()(),Sl(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),Jx(1671," titlePopover"),Wl(1672,"br"),sg()()(),Sl(1673,"td",17)(1674,"code",21),Jx(1675,"string"),sg()(),Sl(1676,"td",20)(1677,"em")(1678,"strong"),Jx(1679,"(opcional)"),sg()(),Sl(1680,"p"),Jx(1681,"T\xEDtulo do popover para aviso de bloqueio."),sg()()(),Sl(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),Jx(1686," welcome"),Wl(1687,"br"),sg()()(),Sl(1688,"td",17)(1689,"code",21),Jx(1690,"string"),sg()(),Sl(1691,"td",20)(1692,"em")(1693,"strong"),Jx(1694,"(opcional)"),sg()(),Sl(1695,"p"),Jx(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),sg()()(),Sl(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),Jx(1701," yourUserWillBeBlocked"),Wl(1702,"br"),sg()()(),Sl(1703,"td",17)(1704,"code",21),Jx(1705,"string"),sg()(),Sl(1706,"td",20)(1707,"em")(1708,"strong"),Jx(1709,"(opcional)"),sg()(),Sl(1710,"p"),Jx(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),sg()()()(),Sl(1712,"h4",34)(1713,"code",5),Jx(1714,"PoPageLoginRecovery"),sg()(),Sl(1715,"div",2)(1716,"p"),Jx(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Sl(1718,"code"),Jx(1719,"po-modal-password-recovery"),sg(),Jx(1720,"."),sg()(),Sl(1721,"h4",9),Jx(1722,"Propriedades"),sg(),Sl(1723,"table",10)(1724,"tr",11)(1725,"th",12),Jx(1726,"Nome"),sg(),Sl(1727,"th",12),Jx(1728,"Tipo"),sg(),Sl(1729,"th",12),Jx(1730,"Descri\xE7\xE3o"),sg()(),Sl(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),Jx(1735," contactMail"),Wl(1736,"br"),sg()()(),Sl(1737,"td",17)(1738,"code",21),Jx(1739,"string"),sg()(),Sl(1740,"td",20)(1741,"em")(1742,"strong"),Jx(1743,"(opcional)"),sg()(),Sl(1744,"p"),Jx(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),sg()()(),Sl(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),Jx(1750," phoneMask"),Wl(1751,"br"),sg()()(),Sl(1752,"td",17)(1753,"code",21),Jx(1754,"string"),sg()(),Sl(1755,"td",20)(1756,"em")(1757,"strong"),Jx(1758,"(opcional)"),sg()(),Sl(1759,"p"),Jx(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),sg()()(),Sl(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),Jx(1765," type"),Wl(1766,"br"),sg()()(),Sl(1767,"td",17)(1768,"code",36),Jx(1769,"PoModalPasswordRecoveryType"),sg()(),Sl(1770,"td",20)(1771,"em")(1772,"strong"),Jx(1773,"(opcional)"),sg()(),Sl(1774,"p"),Jx(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Sl(1776,"a",37),Jx(1777,"PoModalPasswordRecoveryType"),sg(),Jx(1778,"."),sg(),Sl(1779,"blockquote")(1780,"p"),Jx(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Sl(1782,"code"),Jx(1783,"PoModalPasswordRecoveryType.Email"),sg(),Jx(1784,"."),sg()()()(),Sl(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),Jx(1789," url"),Wl(1790,"br"),sg()()(),Sl(1791,"td",17)(1792,"code",21),Jx(1793,"string"),sg()(),Sl(1794,"td",20)(1795,"p"),Jx(1796,"Endpoint usado pelo template "),Sl(1797,"strong"),Jx(1798,"PoModalPasswordRecovery"),sg(),Jx(1799," para requisi\xE7\xE3o do recurso."),sg(),Sl(1800,"blockquote")(1801,"p"),Jx(1802,"Saiba mais em "),Sl(1803,"a",37),Jx(1804,"PoModalPasswordRecovery"),sg(),Jx(1805,"."),sg()()()()(),Sl(1806,"h4",34)(1807,"code",5),Jx(1808,"PoPageLogin"),sg()(),Sl(1809,"div",2)(1810,"p"),Jx(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(1812,"code"),Jx(1813,"po-page-login"),sg(),Jx(1814,"."),sg()(),Sl(1815,"h4",9),Jx(1816,"Propriedades"),sg(),Sl(1817,"table",10)(1818,"tr",11)(1819,"th",12),Jx(1820,"Nome"),sg(),Sl(1821,"th",12),Jx(1822,"Tipo"),sg(),Sl(1823,"th",12),Jx(1824,"Descri\xE7\xE3o"),sg()(),Sl(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),Jx(1829," login"),Wl(1830,"br"),sg()()(),Sl(1831,"td",17)(1832,"code",21),Jx(1833,"string"),sg()(),Sl(1834,"td",20)(1835,"p"),Jx(1836,"Login preenchido pelo usu\xE1rio."),sg()()(),Sl(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),Jx(1841," password"),Wl(1842,"br"),sg()()(),Sl(1843,"td",17)(1844,"code",21),Jx(1845,"string"),sg()(),Sl(1846,"td",20)(1847,"p"),Jx(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),sg()()(),Sl(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),Jx(1853," rememberUser"),Wl(1854,"br"),sg()()(),Sl(1855,"td",17)(1856,"code",25),Jx(1857,"boolean"),sg()(),Sl(1858,"td",20)(1859,"p"),Jx(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),sg()()()(),Sl(1861,"h3"),Jx(1862,"Enums"),sg(),Sl(1863,"h4",4)(1864,"code",5),Jx(1865,"PoPageLoginAuthenticationType"),sg()(),Sl(1866,"div",2)(1867,"p")(1868,"em"),Jx(1869,"Enum"),sg(),Jx(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),sg()(),Sl(1871,"h4",9),Jx(1872,"Propriedades"),sg(),Sl(1873,"table",10)(1874,"tr",11)(1875,"th",12),Jx(1876,"Nome"),sg(),Sl(1877,"th",12),Jx(1878,"Descri\xE7\xE3o"),sg()(),Sl(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),Jx(1883," Basic"),Wl(1884,"br"),sg()()(),Sl(1885,"td",20)(1886,"p"),Jx(1887,"Autentica\xE7\xE3o Basic"),sg()()(),Sl(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),Jx(1892," Bearer"),Wl(1893,"br"),sg()()(),Sl(1894,"td",20)(1895,"p"),Jx(1896,"Autentica\xE7\xE3o Bearer"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return r})();var Pe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(C(Xn),C(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-page-login-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ce,Ee,he,be,ve],encapsulation:2})}return r})();var We=[{path:"",component:Pe}],Ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[pL.forChild(We),pL]})}return r})();var wt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[ar,Ce]})}return r})();export{wt as DocPoPageLoginModule};