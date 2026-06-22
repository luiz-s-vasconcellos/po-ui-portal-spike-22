import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,c5 as Ode,cm as P3,c6 as U,e as r$1,cc as za,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,aI as dc,c9 as $he,cb as Da,aq as fx,at as hx,a3 as aNe,aD as Ky,aA as Rx,aE as Xy,aT as rN}from'./main-LUSFEIN7.js';var ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Gl(0,"po-page-login");},dependencies:[za],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Login Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-login></po-page-login>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-login-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ue],encapsulation:2})}return r})();var ge=(()=>{class r{poDialog=f(Ode);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];ngOnInit(){this.restore();}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={};}addLoginError(){this.loginErrors.push(this.loginError),this.loginError="";}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError="";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(p){this.customLiterals=void 0;}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(p),componentsSize:this.componentsSize});}onChangeCustomProperties(){this.customField=Object.assign({},this.customField);}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support="";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs"]],standalone:false,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=Cx();Tl(0,"po-page-login",2),ht("p-login-submit",function(a){return i.loginSubmit(a)}),sg(),Gl(1,"po-divider"),Tl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Ew("ngModelChange",function(a){return Ky(d),rN(i.literals,a)||(i.literals=a),Xy(a)}),ht("p-change",function(){return i.changeLiterals()}),sg(),t0(),Tl(6,"po-input",5),Ew("ngModelChange",function(a){return Ky(d),rN(i.productName,a)||(i.productName=a),Xy(a)}),sg(),t0(),sg(),Tl(7,"div",3)(8,"po-input",6),Ew("ngModelChange",function(a){return Ky(d),rN(i.loginPattern,a)||(i.loginPattern=a),Xy(a)}),sg(),t0(),Tl(9,"po-input",7),Ew("ngModelChange",function(a){return Ky(d),rN(i.login,a)||(i.login=a),Xy(a)}),sg(),t0(),sg(),Tl(10,"div",3)(11,"po-input",8),Ew("ngModelChange",function(a){return Ky(d),rN(i.exceededAttempts,a)||(i.exceededAttempts=a),Xy(a)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(a){return Ky(d),rN(i.passwordPattern,a)||(i.passwordPattern=a),Xy(a)}),sg(),t0(),sg(),Tl(13,"div",3)(14,"po-input",10),Ew("ngModelChange",function(a){return Ky(d),rN(i.contactEmail,a)||(i.contactEmail=a),Xy(a)}),sg(),t0(),Tl(15,"po-input",11),Ew("ngModelChange",function(a){return Ky(d),rN(i.environment,a)||(i.environment=a),Xy(a)}),sg(),t0(),sg(),Tl(16,"div",3)(17,"po-input",12),Ew("ngModelChange",function(a){return Ky(d),rN(i.logo,a)||(i.logo=a),Xy(a)}),sg(),t0(),Tl(18,"po-input",13),Ew("ngModelChange",function(a){return Ky(d),rN(i.secondaryLogo,a)||(i.secondaryLogo=a),Xy(a)}),sg(),t0(),sg(),Tl(19,"div",3)(20,"po-input",14),Ew("ngModelChange",function(a){return Ky(d),rN(i.background,a)||(i.background=a),Xy(a)}),sg(),t0(),Tl(21,"po-input",15),Ew("ngModelChange",function(a){return Ky(d),rN(i.support,a)||(i.support=a),Xy(a)}),sg(),t0(),sg(),Tl(22,"div",3)(23,"po-input",16),Ew("ngModelChange",function(a){return Ky(d),rN(i.recovery,a)||(i.recovery=a),Xy(a)}),sg(),t0(),Tl(24,"po-input",17),Ew("ngModelChange",function(a){return Ky(d),rN(i.registerUrl,a)||(i.registerUrl=a),Xy(a)}),sg(),t0(),sg(),Tl(25,"div",3)(26,"po-checkbox-group",18),Ew("ngModelChange",function(a){return Ky(d),rN(i.properties,a)||(i.properties=a),Xy(a)}),sg(),t0(),Tl(27,"po-radio-group",19),Ew("ngModelChange",function(a){return Ky(d),rN(i.componentsSize,a)||(i.componentsSize=a),Xy(a)}),sg(),t0(),sg(),Gl(28,"po-divider",20),Tl(29,"div",3)(30,"po-input",21),Ew("ngModelChange",function(a){return Ky(d),rN(i.loginError,a)||(i.loginError=a),Xy(a)}),sg(),t0(),Tl(31,"po-button",22),ht("p-click",function(){return i.addLoginError()}),sg()(),Gl(32,"po-divider",23),Tl(33,"div",3)(34,"po-input",24),Ew("ngModelChange",function(a){return Ky(d),rN(i.passwordError,a)||(i.passwordError=a),Xy(a)}),sg(),t0(),Tl(35,"po-button",25),ht("p-click",function(){return i.addPasswordError()}),sg()(),Gl(36,"po-divider",26),Tl(37,"div",3)(38,"po-input",27),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.property,a)||(i.customField.property=a),Xy(a)}),ht("p-change-model",function(){return i.onChangeCustomProperties()}),sg(),t0(),Tl(39,"po-input",28),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.value,a)||(i.customField.value=a),Xy(a)}),sg(),t0(),sg(),Tl(40,"div",3)(41,"po-input",29),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.placeholder,a)||(i.customField.placeholder=a),Xy(a)}),sg(),t0(),Tl(42,"po-input",30),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.pattern,a)||(i.customField.pattern=a),Xy(a)}),sg(),t0(),Tl(43,"po-input",31),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Xy(a)}),sg(),t0(),sg(),Gl(44,"po-divider"),Tl(45,"div",3)(46,"po-input",32),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.url,a)||(i.customField.url=a),Xy(a)}),ht("p-change-model",function(){return i.onChangeCustomProperties()}),sg(),t0(),Tl(47,"po-input",33),Ew("ngModelChange",function(a){return Ky(d),rN(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Xy(a)}),ht("p-change-model",function(){return i.onChangeCustomProperties()}),sg(),t0(),sg(),Gl(48,"po-divider"),Tl(49,"form",null,1)(51,"div",3)(52,"po-input",34),Ew("ngModelChange",function(a){return Ky(d),rN(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Xy(a)}),sg(),t0(),Tl(53,"po-input",35),Ew("ngModelChange",function(a){return Ky(d),rN(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Xy(a)}),sg(),t0(),sg(),Tl(54,"div",3)(55,"po-button",36),ht("p-click",function(){return i.addCustomFieldOption()}),sg()()(),Gl(56,"br")(57,"po-divider"),Tl(58,"div",3)(59,"po-button",37),ht("p-click",function(){return i.restore()}),sg()()();}if(l&2){let d=Ox(50);tw("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),Vp(5),Dw("ngModel",i.literals),r0(),Vp(),Dw("ngModel",i.productName),r0(),Vp(2),Dw("ngModel",i.loginPattern),r0(),Vp(),Dw("ngModel",i.login),r0(),Vp(2),Dw("ngModel",i.exceededAttempts),r0(),Vp(),Dw("ngModel",i.passwordPattern),r0(),Vp(2),Dw("ngModel",i.contactEmail),r0(),Vp(),Dw("ngModel",i.environment),r0(),Vp(2),Dw("ngModel",i.logo),r0(),Vp(),Dw("ngModel",i.secondaryLogo),r0(),Vp(2),Dw("ngModel",i.background),r0(),Vp(),Dw("ngModel",i.support),r0(),Vp(2),Dw("ngModel",i.recovery),r0(),Vp(),Dw("ngModel",i.registerUrl),r0(),Vp(2),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.componentsSize),tw("p-options",i.componentsSizeOptions),r0(),Vp(3),Dw("ngModel",i.loginError),r0(),Vp(4),Dw("ngModel",i.passwordError),r0(),Vp(4),Dw("ngModel",i.customField.property),r0(),Vp(),Dw("ngModel",i.customField.value),r0(),Vp(2),Dw("ngModel",i.customField.placeholder),r0(),Vp(),Dw("ngModel",i.customField.pattern),r0(),Vp(),Dw("ngModel",i.customField.errorPattern),r0(),Vp(3),Dw("ngModel",i.customField.url),r0(),Vp(),Dw("ngModel",i.customField.fieldValue),r0(),Vp(5),Dw("ngModel",i.customFieldOption.label),r0(),Vp(),Dw("ngModel",i.customFieldOption.value),r0(),Vp(2),tw("p-disabled",d.invalid);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,za],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r}),Ee=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Login Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-login
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-login-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Me,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ge],encapsulation:2})}return r})();function Te(r,fe){if(r&1){let p=Cx();Tl(0,"po-page-login",6),ht("p-login-change",function(){Ky(p);let i=Rx();return Xy(i.loginChange())})("p-login-submit",function(i){Ky(p);let d=Rx();return Xy(d.checkLogin(i))})("p-password-change",function(){Ky(p);let i=Rx();return Xy(i.passwordChange())}),sg();}if(r&2){let p=Rx();tw("p-custom-field",p.customField)("p-exceeded-attempts-warning",p.exceededAttempts)("p-literals",p.literalsI18n)("p-loading",p.loading)("p-password-errors",p.passwordErrors)("p-login-errors",p.loginErrors)("p-recovery",p.passwordRecovery);}}function ke(r,fe){if(r&1&&Gl(0,"po-page-blocked-user",5),r&2){let p=Rx();tw("p-params",p.params);}}var Se=(()=>{class r{poI18nService=f(P3);poDialog=f(Ode);customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=false;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:U.All,contactMail:"support@mail.com"};showPageBlocked=false;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe();}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0;});}checkLogin(p){this.loading=true,p.login==="devpo"&&p.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=false,title:"Access released",message:"You are on vacation, take time to rest."});},3e3)):(this.loading=false,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."]);}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[]);}loginChange(){this.loginErrors.length&&(this.loginErrors=[]);}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=true);}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:false,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"]],template:function(l,i){l&1&&(Tl(0,"po-container")(1,"div",0),Gl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),sg()(),fx(5,Te,1,7,"po-page-login",4),fx(6,ke,1,1,"po-page-blocked-user",5)),l&2&&(Vp(5),hx(i.showPageBlocked?-1:5),Vp(),hx(i.showPageBlocked?6:-1));},dependencies:[dc,$he,Da,za],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),he=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Login - Human Resources"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),sg(),Tl(23,"pre",9),tN(24,`/**
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-page-login-human-resources"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return r})();var xe=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(p){p?.language==="jp"?this.literals=r$1({},this.japoneseLiterals):this.literals={};}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:false,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(Tl(0,"po-container")(1,"div",0),Gl(2,"po-info",1)(3,"po-info",2),sg()(),Tl(4,"po-page-login",3),ht("p-language-change",function(m){return i.changeLanguage(m)}),sg()),l&2&&(Vp(4),tw("p-languages",i.languages)("p-literals",i.literals));},dependencies:[dc,$he,za],encapsulation:2,changeDetection:1})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Login - Automatic Service"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-login-automatic-service"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Be,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,xe],encapsulation:2})}return r})();var ve=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-doc"]],standalone:false,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do template do po-page-login."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoPageLoginComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-page-login"),sg(),tN(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),sg(),Tl(18,"p"),tN(19,"A propriedade "),Tl(20,"code"),tN(21,"p-authentication-url"),sg(),tN(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Tl(23,"em"),tN(24,"client side"),sg(),tN(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Tl(26,"em"),tN(27,"propriedades"),sg(),tN(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),sg(),Tl(29,"p"),tN(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(31,"em"),tN(32,"assets"),sg(),tN(33," no arquivo "),Tl(34,"strong"),tN(35,"angular.json"),sg(),tN(36," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Tl(37,"pre")(38,"code"),tN(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()()(),Tl(40,"div",6)(41,"h4",7),tN(42,"Seletor"),sg(),Tl(43,"pre",8),tN(44,`<po-page-login
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
`),sg()(),Tl(45,"h4",9),tN(46,"Propriedades"),sg(),Tl(47,"table",10)(48,"tr",11)(49,"th",12),tN(50,"Nome"),sg(),Tl(51,"th",12),tN(52,"Tipo"),sg(),Tl(53,"th",12),tN(54,"Padr\xE3o"),sg(),Tl(55,"th",12),tN(56,"Descri\xE7\xE3o"),sg()(),Tl(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),tN(61," p-authentication-type"),Gl(62,"br"),sg()()(),Tl(63,"td",17)(64,"code",18),tN(65,"PoPageLoginAuthenticationType"),sg()(),Tl(66,"td",19)(67,"p")(68,"code"),tN(69,"PoPageLoginAuthenticationType.Basic"),sg()()(),Tl(70,"td",20)(71,"em")(72,"strong"),tN(73,"(opcional)"),sg()(),Tl(74,"p"),tN(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),Tl(76,"code"),tN(77,"Basic"),sg(),tN(78," e "),Tl(79,"code"),tN(80,"Bearer"),sg(),tN(81,"."),sg(),Tl(82,"blockquote")(83,"p"),tN(84,"Caso o tipo definido seja "),Tl(85,"code"),tN(86,"Basic"),sg(),tN(87,", o componente far\xE1 uma requisi\xE7\xE3o "),Tl(88,"code"),tN(89,"POST"),sg(),tN(90," contendo:"),sg()(),Tl(91,"pre")(92,"code"),tN(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),sg()(),Tl(94,"blockquote")(95,"p"),tN(96,"Caso o tipo definido seja "),Tl(97,"code"),tN(98,"Bearer"),sg(),tN(99,", o componente far\xE1 uma requisi\xE7\xE3o "),Tl(100,"code"),tN(101,"POST"),sg(),tN(102," contendo:"),sg()(),Tl(103,"pre")(104,"code"),tN(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),sg()()()(),Tl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),tN(110," p-authentication-url"),Gl(111,"br"),sg()()(),Tl(112,"td",17)(113,"code",21),tN(114,"string"),sg()(),Tl(115,"td",19),tN(116,"-"),sg(),Tl(117,"td",20)(118,"em")(119,"strong"),tN(120,"(opcional)"),sg()(),Tl(121,"p"),tN(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),Tl(123,"code"),tN(124,"p-login-submit"),sg(),tN(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),sg(),Tl(126,"h3"),tN(127,"Processos"),sg(),Tl(128,"p"),tN(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),Tl(130,"strong"),tN(131,"Enter"),sg(),tN(132,", o componente far\xE1 uma requisi\xE7\xE3o "),Tl(133,"code"),tN(134,"POST"),sg(),tN(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),sg(),Tl(136,"pre")(137,"code"),tN(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),sg()(),Tl(139,"p"),tN(140,"Em caso de "),Tl(141,"strong"),tN(142,"sucesso"),sg(),tN(143,", o objeto de retorno \xE9 armazenado no "),Tl(144,"code"),tN(145,"sessionStorage"),sg(),tN(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Tl(147,"code"),tN(148,"/"),sg(),tN(149,"."),sg(),Tl(150,"pre")(151,"code"),tN(152,`200:
{
  user: user
}
`),sg()(),Tl(153,"p"),tN(154,"Em caso de "),Tl(155,"strong"),tN(156,"erro"),sg(),tN(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),sg(),Tl(158,"pre")(159,"code"),tN(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),sg()(),Tl(161,"blockquote")(162,"p"),tN(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),Tl(164,"code"),tN(165,"p-exceeded-attempts-warning"),sg(),tN(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Tl(167,"code"),tN(168,"p-login-errors"),sg(),tN(169,` e
`),Tl(170,"code"),tN(171,"p-password-errors"),sg(),tN(172," conforme retorno abaixo:"),sg()(),Tl(173,"pre")(174,"code"),tN(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),sg()(),Tl(176,"blockquote")(177,"p"),tN(178,"Caso o valor atribu\xEDdo para "),Tl(179,"code"),tN(180,"p-exceeded-attempts-warning"),sg(),tN(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Tl(182,"code"),tN(183,"p-blocked-url"),sg(),tN(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),sg()(),Tl(185,"p")(186,"em"),tN(187,"Processo finalizado."),sg()(),Gl(188,"hr"),Tl(189,"h4"),tN(190,"Praticidade"),sg(),Tl(191,"p"),tN(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Tl(193,"code"),tN(194,"po-page-login"),sg(),tN(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Tl(196,"code"),tN(197,"/login"),sg(),tN(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),sg(),Tl(199,"pre")(200,"code"),tN(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),sg()(),Tl(202,"p"),tN(203,"O metadado "),Tl(204,"code"),tN(205,"serviceApi"),sg(),tN(206," deve ser a "),Tl(207,"strong"),tN(208,"url"),sg(),tN(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),Tl(210,"code"),tN(211,"environment"),sg(),tN(212,` alimenta a propriedade
`),Tl(213,"code"),tN(214,"p-environment"),sg(),tN(215,", "),Tl(216,"code"),tN(217,"recovery"),sg(),tN(218," \xE9 a interface "),Tl(219,"code"),tN(220,"PoPageLoginRecovery"),sg(),tN(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Tl(222,"code"),tN(223,"registerUrl"),sg(),tN(224," alimenta a propriedade "),Tl(225,"code"),tN(226,"p-register-url"),sg(),tN(227," e "),Tl(228,"code"),tN(229,"authenticationType"),sg(),tN(230," que define a propriedade "),Tl(231,"code"),tN(232,"p-authentication-type"),sg(),tN(233,"."),sg(),Tl(234,"blockquote")(235,"p"),tN(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),sg()()()(),Tl(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),tN(241," p-background"),Gl(242,"br"),sg()()(),Tl(243,"td",17)(244,"code",21),tN(245,"string"),sg()(),Tl(246,"td",19),tN(247,"-"),sg(),Tl(248,"td",20)(249,"em")(250,"strong"),tN(251,"(opcional)"),sg()(),Tl(252,"p"),tN(253,"O "),Tl(254,"code"),tN(255,"p-background"),sg(),tN(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),sg(),Tl(257,"p"),tN(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),sg(),Tl(259,"p"),tN(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Tl(261,"code"),tN(262,"highlightInfo"),sg(),tN(263,"."),sg(),Tl(264,"blockquote")(265,"p"),tN(266,"Veja mais sobre as literais na propriedade "),Tl(267,"code"),tN(268,"p-literals"),sg(),tN(269,"."),sg()(),Tl(270,"p"),tN(271,"Exemplos de valores v\xE1lidos:"),sg(),Tl(272,"ul")(273,"li")(274,"strong"),tN(275,"local"),sg(),tN(276,": "),Tl(277,"code"),tN(278,"./assets/images/login-background.png"),sg()(),Tl(279,"li")(280,"strong"),tN(281,"url externa"),sg(),tN(282,": "),Tl(283,"code"),tN(284,"https://po-ui.io/assets/images/login-background.png"),sg()()(),Tl(285,"blockquote")(286,"p"),tN(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),sg()()()(),Tl(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),tN(292," p-blocked-url"),Gl(293,"br"),sg()()(),Tl(294,"td",17)(295,"code",21),tN(296,"string"),sg()(),Tl(297,"td",19),tN(298,"-"),sg(),Tl(299,"td",20)(300,"em")(301,"strong"),tN(302,"(opcional)"),sg()(),Tl(303,"p"),tN(304,"Caso o valor atribu\xEDdo para "),Tl(305,"code"),tN(306,"p-exceeded-attempts-warning"),sg(),tN(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),sg()()(),Tl(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),tN(312," p-components-size"),Gl(313,"br"),sg()()(),Tl(314,"td",17)(315,"code",21),tN(316,"string"),sg()(),Tl(317,"td",19)(318,"p")(319,"code"),tN(320,"medium"),sg()()(),Tl(321,"td",20)(322,"em")(323,"strong"),tN(324,"(opcional)"),sg()(),Tl(325,"p"),tN(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(327,"ul")(328,"li")(329,"code"),tN(330,"small"),sg(),tN(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(332,"li")(333,"code"),tN(334,"medium"),sg(),tN(335,": aplica a medida medium de cada componente."),sg()(),Tl(336,"blockquote")(337,"p"),tN(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(339,"code"),tN(340,"medium"),sg(),tN(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(342,"a",22),tN(343,"po-theme"),sg(),tN(344,"."),sg()()()(),Tl(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),tN(349," p-contact-email"),Gl(350,"br"),sg()()(),Tl(351,"td",17)(352,"code",21),tN(353,"string"),sg()(),Tl(354,"td",19),tN(355,"-"),sg(),Tl(356,"td",20)(357,"em")(358,"strong"),tN(359,"(opcional)"),sg()(),Tl(360,"p"),tN(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),sg()()(),Tl(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),tN(366," p-custom-field"),Gl(367,"br"),sg()()(),Tl(368,"td",17)(369,"code",21),tN(370,"string "),sg(),Tl(371,"code",23),tN(372," PoPageLoginCustomField"),sg()(),Tl(373,"td",19),tN(374,"-"),sg(),Tl(375,"td",20)(376,"em")(377,"strong"),tN(378,"(opcional)"),sg()(),Tl(379,"p"),tN(380,"Ao informar um valor do tipo "),Tl(381,"code"),tN(382,"string"),sg(),tN(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Tl(384,"code"),tN(385,"literals"),sg(),tN(386," como "),Tl(387,"code"),tN(388,"customFieldErrorPattern"),sg(),tN(389," e "),Tl(390,"code"),tN(391,"customFieldPlaceholder"),sg(),tN(392,"."),sg(),Tl(393,"p"),tN(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),Tl(395,"code"),tN(396,"PoPageLoginCustomField"),sg(),tN(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Tl(398,"code"),tN(399,"po-input"),sg(),tN(400,", "),Tl(401,"code"),tN(402,"po-combo"),sg(),tN(403,` especificamente para servi\xE7os
ou `),Tl(404,"code"),tN(405,"po-select"),sg(),tN(406," para valores fixos."),sg(),Tl(407,"p"),tN(408,"Abaixo seguem os exemplos de cada tipo de campo."),sg(),Tl(409,"p")(410,"code"),tN(411,"po-input"),sg(),tN(412,":"),sg(),Tl(413,"pre")(414,"code"),tN(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),sg()(),Tl(416,"p")(417,"code"),tN(418,"po-combo"),sg(),tN(419,":"),sg(),Tl(420,"pre")(421,"code"),tN(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),sg()(),Tl(423,"p")(424,"code"),tN(425,"po-select"),sg(),tN(426,":"),sg(),Tl(427,"pre")(428,"code"),tN(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),sg()(),Tl(430,"p"),tN(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),sg()()(),Tl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),tN(436," p-environment"),Gl(437,"br"),sg()()(),Tl(438,"td",17)(439,"code",21),tN(440,"string"),sg()(),Tl(441,"td",19),tN(442,"-"),sg(),Tl(443,"td",20)(444,"em")(445,"strong"),tN(446,"(opcional)"),sg()(),Tl(447,"p"),tN(448,"Adiciona uma "),Tl(449,"code"),tN(450,"tag"),sg(),tN(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),sg(),Tl(452,"blockquote")(453,"p"),tN(454,"Essa propriedade limita o texto em 40 caracteres."),sg()()()(),Tl(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),tN(459," p-exceeded-attempts-warning"),Gl(460,"br"),sg()()(),Tl(461,"td",17)(462,"code",24),tN(463,"number"),sg()(),Tl(464,"td",19)(465,"p")(466,"code"),tN(467,"0"),sg()()(),Tl(468,"td",20)(469,"em")(470,"strong"),tN(471,"(opcional)"),sg()(),Tl(472,"p"),tN(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),sg(),Tl(474,"blockquote")(475,"p"),tN(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),Tl(477,"code"),tN(478,"p-authentication-url"),sg(),tN(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Tl(480,"code"),tN(481,"p-exceeded-attempts-warning"),sg(),tN(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),sg()()()(),Tl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),tN(487," p-hide-label-status"),Gl(488,"br"),sg()()(),Tl(489,"td",17)(490,"code",25),tN(491,"boolean"),sg()(),Tl(492,"td",19)(493,"p")(494,"code"),tN(495,"false"),sg()()(),Tl(496,"td",20)(497,"em")(498,"strong"),tN(499,"(opcional)"),sg()(),Tl(500,"p"),tN(501,"Indica se o status do "),Tl(502,"code"),tN(503,"model"),sg(),tN(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),sg(),Tl(505,"blockquote")(506,"p"),tN(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Tl(508,"code"),tN(509,"false"),sg(),tN(510,"."),sg()()()(),Tl(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),tN(515," p-hide-password-peek"),Gl(516,"br"),sg()()(),Tl(517,"td",17)(518,"code",25),tN(519,"boolean"),sg()(),Tl(520,"td",19)(521,"p")(522,"code"),tN(523,"false"),sg()()(),Tl(524,"td",20)(525,"em")(526,"strong"),tN(527,"(opcional)"),sg()(),Tl(528,"p"),tN(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),sg()()(),Tl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),tN(534," p-hide-remember-user"),Gl(535,"br"),sg()()(),Tl(536,"td",17)(537,"code",25),tN(538,"boolean"),sg()(),Tl(539,"td",19)(540,"p")(541,"code"),tN(542,"false"),sg()()(),Tl(543,"td",20)(544,"em")(545,"strong"),tN(546,"(opcional)"),sg()(),Tl(547,"p"),tN(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),sg(),Tl(549,"p"),tN(550,"Quando essa propriedade \xE9 setada com "),Tl(551,"code"),tN(552,"true"),sg(),tN(553," a propriedade "),Tl(554,"code"),tN(555,"rememberUser"),sg(),tN(556," enviada no evento "),Tl(557,"code"),tN(558,"p-login-submit"),sg(),tN(559,` ser\xE1 sempre
`),Tl(560,"code"),tN(561,"false"),sg(),tN(562,"."),sg(),Tl(563,"blockquote")(564,"p"),tN(565,"Veja a propriedade "),Tl(566,"code"),tN(567,"p-literals"),sg(),tN(568," para customizar a literal "),Tl(569,"code"),tN(570,"rememberUser"),sg(),tN(571,"."),sg()()()(),Tl(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),tN(576," (p-language-change)"),Gl(577,"br"),sg()()(),Tl(578,"td",17)(579,"code",28),tN(580,"EventEmitter"),sg()(),Tl(581,"td",19),tN(582,"-"),sg(),Tl(583,"td",20)(584,"em")(585,"strong"),tN(586,"(opcional)"),sg()(),Tl(587,"p"),tN(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),sg(),Tl(589,"p"),tN(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Tl(591,"code"),tN(592,"PoLanguage"),sg(),tN(593," com a linguagem selecionada."),sg()()(),Tl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),tN(598," p-languages"),Gl(599,"br"),sg()()(),Tl(600,"td",17)(601,"code",29),tN(602,"Array<PoLanguage>"),sg()(),Tl(603,"td",19),tN(604,"-"),sg(),Tl(605,"td",20)(606,"em")(607,"strong"),tN(608,"(opcional)"),sg()(),Tl(609,"p"),tN(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),sg(),Tl(611,"p"),tN(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),sg(),Tl(613,"p"),tN(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),sg(),Tl(615,"p"),tN(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),Tl(617,"code"),tN(618,"i18n"),sg(),tN(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),sg(),Tl(620,"blockquote")(621,"p"),tN(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),Tl(623,"code"),tN(624,"p-literals"),sg(),tN(625,"."),sg()()()(),Tl(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),tN(630," p-literals"),Gl(631,"br"),sg()()(),Tl(632,"td",17)(633,"code",30),tN(634,"PoPageLoginLiterals"),sg()(),Tl(635,"td",19),tN(636,"-"),sg(),Tl(637,"td",20)(638,"em")(639,"strong"),tN(640,"(opcional)"),sg()(),Tl(641,"p"),tN(642,"Objeto com as literais usadas no "),Tl(643,"code"),tN(644,"po-page-login"),sg(),tN(645,"."),sg(),Tl(646,"p"),tN(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(648,"pre")(649,"code"),tN(650,`const customLiterals: PoPageLoginLiterals = {
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
`),sg()(),Tl(651,"p"),tN(652,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(653,"pre")(654,"code"),tN(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),sg()(),Tl(656,"p"),tN(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(658,"pre")(659,"code"),tN(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),sg()(),Tl(661,"blockquote")(662,"p"),tN(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),sg()()()(),Tl(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),tN(668," p-loading"),Gl(669,"br"),sg()()(),Tl(670,"td",17)(671,"code",25),tN(672,"boolean"),sg()(),Tl(673,"td",19)(674,"p")(675,"code"),tN(676,"false"),sg()()(),Tl(677,"td",20)(678,"em")(679,"strong"),tN(680,"(opcional)"),sg()(),Tl(681,"p"),tN(682,"Habilita um estado de carregamento ao bot\xE3o de "),Tl(683,"em"),tN(684,"login"),sg(),tN(685,"."),sg(),Tl(686,"blockquote")(687,"p"),tN(688,"\xC9 necess\xE1rio atribuir "),Tl(689,"code"),tN(690,"true"),sg(),tN(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),Tl(692,"code"),tN(693,"p-login-submit"),sg(),tN(694,"."),sg()()()(),Tl(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),tN(699," p-login"),Gl(700,"br"),sg()()(),Tl(701,"td",17)(702,"code",21),tN(703,"string"),sg()(),Tl(704,"td",19),tN(705,"-"),sg(),Tl(706,"td",20)(707,"em")(708,"strong"),tN(709,"(opcional)"),sg()(),Tl(710,"p"),tN(711,"Valor do modelo do campo de login."),sg()()(),Tl(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),tN(716," (p-login-change)"),Gl(717,"br"),sg()()(),Tl(718,"td",17)(719,"code",28),tN(720,"EventEmitter"),sg()(),Tl(721,"td",19),tN(722,"-"),sg(),Tl(723,"td",20)(724,"em")(725,"strong"),tN(726,"(opcional)"),sg()(),Tl(727,"p"),tN(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),sg(),Tl(729,"p"),tN(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Tl(731,"code"),tN(732,"string"),sg(),tN(733," com o texto informado no campo."),sg(),Tl(734,"blockquote")(735,"p"),tN(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Tl(737,"code"),tN(738,"p-authentication-url"),sg(),tN(739,"."),sg()()()(),Tl(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),tN(744," p-login-errors"),Gl(745,"br"),sg()()(),Tl(746,"td",17)(747,"code",31),tN(748,"string[]"),sg()(),Tl(749,"td",19),tN(750,"-"),sg(),Tl(751,"td",20)(752,"em")(753,"strong"),tN(754,"(opcional)"),sg()(),Tl(755,"p"),tN(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),sg()()(),Tl(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),tN(761," p-login-pattern"),Gl(762,"br"),sg()()(),Tl(763,"td",17)(764,"code",21),tN(765,"string"),sg()(),Tl(766,"td",19),tN(767,"-"),sg(),Tl(768,"td",20)(769,"em")(770,"strong"),tN(771,"(opcional)"),sg()(),Tl(772,"p"),tN(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),Tl(774,"code"),tN(775,"loginErrorPattern"),sg(),tN(776,`
ser\xE1 exibida.`),sg(),Tl(777,"p"),tN(778,"Exemplos de valores v\xE1lidos:"),sg(),Tl(779,"ul")(780,"li"),tN(781,"email: "),Tl(782,"code"),tN(783,"[expressao-regular-email]"),sg()(),Tl(784,"li"),tN(785,"cpf: "),Tl(786,"code"),tN(787,"[expressao-regular-cpf]"),sg()()(),Tl(788,"blockquote")(789,"p"),tN(790,"Veja a propriedade "),Tl(791,"code"),tN(792,"p-literals"),sg(),tN(793," para customizar a literal "),Tl(794,"code"),tN(795,"loginErrorPattern"),sg(),tN(796,"."),sg()()()(),Tl(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),tN(801," (p-login-submit)"),Gl(802,"br"),sg()()(),Tl(803,"td",17)(804,"code",28),tN(805,"EventEmitter"),sg()(),Tl(806,"td",19),tN(807,"-"),sg(),Tl(808,"td",20)(809,"p"),tN(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),Tl(811,"code"),tN(812,"Enter"),sg(),tN(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),sg(),Tl(814,"p"),tN(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Tl(816,"code"),tN(817,"PoPageLogin"),sg(),tN(818," com os dados informados no formul\xE1rio."),sg(),Tl(819,"blockquote")(820,"p"),tN(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Tl(822,"code"),tN(823,"p-url-recovery"),sg(),tN(824,"."),sg()(),Tl(825,"blockquote")(826,"p"),tN(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),Tl(828,"code"),tN(829,"PoPageLogin"),sg(),tN(830," mais abaixo."),sg()()()(),Tl(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),tN(835," p-logo"),Gl(836,"br"),sg()()(),Tl(837,"td",17)(838,"code",21),tN(839,"string"),sg()(),Tl(840,"td",19),tN(841,"-"),sg(),Tl(842,"td",20)(843,"em")(844,"strong"),tN(845,"(opcional)"),sg()(),Tl(846,"p"),tN(847,"Caminho para a logomarca localizada na parte superior."),sg(),Tl(848,"blockquote")(849,"p"),tN(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),sg()()()(),Tl(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),tN(855," p-no-autocomplete-login"),Gl(856,"br"),sg()()(),Tl(857,"td",17)(858,"code",25),tN(859,"boolean"),sg()(),Tl(860,"td",19)(861,"p")(862,"code"),tN(863,"true"),sg()()(),Tl(864,"td",20)(865,"em")(866,"strong"),tN(867,"(opcional)"),sg()(),Tl(868,"p"),tN(869,"Define a propriedade nativa "),Tl(870,"code"),tN(871,"autocomplete"),sg(),tN(872," do campo como "),Tl(873,"code"),tN(874,"off"),sg(),tN(875,"."),sg()()(),Tl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),tN(880," p-no-autocomplete-password"),Gl(881,"br"),sg()()(),Tl(882,"td",17)(883,"code",25),tN(884,"boolean"),sg()(),Tl(885,"td",19)(886,"p")(887,"code"),tN(888,"true"),sg()()(),Tl(889,"td",20)(890,"em")(891,"strong"),tN(892,"(opcional)"),sg()(),Tl(893,"p"),tN(894,"Define a propriedade nativa "),Tl(895,"code"),tN(896,"autocomplete"),sg(),tN(897," do campo como "),Tl(898,"code"),tN(899,"off"),sg(),tN(900,"."),sg(),Tl(901,"blockquote")(902,"p"),tN(903,"No componente "),Tl(904,"code"),tN(905,"po-password"),sg(),tN(906," ser\xE1 definido como "),Tl(907,"code"),tN(908,"new-password"),sg(),tN(909,"."),sg()()()(),Tl(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),tN(914," (p-password-change)"),Gl(915,"br"),sg()()(),Tl(916,"td",17)(917,"code",28),tN(918,"EventEmitter"),sg()(),Tl(919,"td",19),tN(920,"-"),sg(),Tl(921,"td",20)(922,"em")(923,"strong"),tN(924,"(opcional)"),sg()(),Tl(925,"p"),tN(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),sg(),Tl(927,"p"),tN(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Tl(929,"code"),tN(930,"string"),sg(),tN(931," com o texto informado no campo."),sg(),Tl(932,"blockquote")(933,"p"),tN(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Tl(935,"code"),tN(936,"p-authentication-url"),sg(),tN(937,"."),sg()()()(),Tl(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),tN(942," p-password-errors"),Gl(943,"br"),sg()()(),Tl(944,"td",17)(945,"code",31),tN(946,"string[]"),sg()(),Tl(947,"td",19),tN(948,"-"),sg(),Tl(949,"td",20)(950,"em")(951,"strong"),tN(952,"(opcional)"),sg()(),Tl(953,"p"),tN(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),sg()()(),Tl(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),tN(959," p-password-pattern"),Gl(960,"br"),sg()()(),Tl(961,"td",17)(962,"code",21),tN(963,"string"),sg()(),Tl(964,"td",19),tN(965,"-"),sg(),Tl(966,"td",20)(967,"em")(968,"strong"),tN(969,"(opcional)"),sg()(),Tl(970,"p"),tN(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),Tl(972,"code"),tN(973,"passwordErrorPattern"),sg(),tN(974,`
ser\xE1 exibida.`),sg(),Tl(975,"p"),tN(976,"Exemplos de valores v\xE1lidos:"),sg(),Tl(977,"ul")(978,"li"),tN(979,"Apenas n\xFAmeros: "),Tl(980,"code"),tN(981,"\\d?"),sg()(),Tl(982,"li"),tN(983,"Letras m\xEDnusculas: "),Tl(984,"code"),tN(985,"\\z?"),sg()()(),Tl(986,"blockquote")(987,"p"),tN(988,"Veja a propriedade "),Tl(989,"code"),tN(990,"p-literals"),sg(),tN(991," para customizar a literal "),Tl(992,"code"),tN(993,"passwordErrorPattern"),sg(),tN(994,"."),sg()()()(),Tl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),tN(999," p-product-name"),Gl(1e3,"br"),sg()()(),Tl(1001,"td",17)(1002,"code",21),tN(1003,"string"),sg()(),Tl(1004,"td",19),tN(1005,"-"),sg(),Tl(1006,"td",20)(1007,"em")(1008,"strong"),tN(1009,"(opcional)"),sg()(),Tl(1010,"p"),tN(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),sg()()(),Tl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),tN(1016," p-recovery"),Gl(1017,"br"),sg()()(),Tl(1018,"td",17)(1019,"code",21),tN(1020,"string "),sg(),Tl(1021,"code",32),tN(1022," Function "),sg(),Tl(1023,"code",33),tN(1024," PoPageLoginRecovery"),sg()(),Tl(1025,"td",19),tN(1026,"-"),sg(),Tl(1027,"td",20)(1028,"em")(1029,"strong"),tN(1030,"(opcional)"),sg()(),Tl(1031,"p"),tN(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),sg(),Tl(1033,"p"),tN(1034,"A propriedade aceita os seguintes tipos:"),sg(),Tl(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),tN(1039,"String"),sg(),tN(1040,": informe uma url externa ou uma rota v\xE1lida;"),sg()(),Tl(1041,"li")(1042,"p")(1043,"strong"),tN(1044,"Function"),sg(),tN(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),sg(),Tl(1046,"pre")(1047,"code"),tN(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),sg()()(),Tl(1049,"li")(1050,"p")(1051,"strong"),tN(1052,"PoPageLoginRecovery"),sg(),tN(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),Tl(1054,"strong"),tN(1055,"po-modal-password-recovery"),sg(),tN(1056,`.
O objeto deve conter a `),Tl(1057,"strong"),tN(1058,"url"),sg(),tN(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Tl(1060,"strong"),tN(1061,"tipo"),sg(),tN(1062,` de modal para recupera\xE7\xE3o de senha,
`),Tl(1063,"strong"),tN(1064,"email"),sg(),tN(1065," para contato e "),Tl(1066,"strong"),tN(1067,"m\xE1scara"),sg(),tN(1068," do campo de telefone."),sg()()()()(),Tl(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),tN(1073," p-register-url"),Gl(1074,"br"),sg()()(),Tl(1075,"td",17)(1076,"code",21),tN(1077,"string"),sg()(),Tl(1078,"td",19),tN(1079,"-"),sg(),Tl(1080,"td",20)(1081,"em")(1082,"strong"),tN(1083,"(opcional)"),sg()(),Tl(1084,"p"),tN(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),sg(),Tl(1086,"p"),tN(1087,"Exemplos de valores v\xE1lidos:"),sg(),Tl(1088,"ul")(1089,"li")(1090,"strong"),tN(1091,"local"),sg(),tN(1092,": "),Tl(1093,"code"),tN(1094,"/home"),sg()(),Tl(1095,"li")(1096,"strong"),tN(1097,"url externa"),sg(),tN(1098,": "),Tl(1099,"code"),tN(1100,"https://po-ui.io"),sg()()(),Tl(1101,"blockquote")(1102,"p"),tN(1103,"Veja a propriedade "),Tl(1104,"code"),tN(1105,"p-literals"),sg(),tN(1106," para customizar a literal "),Tl(1107,"code"),tN(1108,"registerUrl"),sg(),tN(1109,"."),sg()()()(),Tl(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),tN(1114," p-secondary-logo"),Gl(1115,"br"),sg()()(),Tl(1116,"td",17)(1117,"code",21),tN(1118,"string"),sg()(),Tl(1119,"td",19),tN(1120,"-"),sg(),Tl(1121,"td",20)(1122,"em")(1123,"strong"),tN(1124,"(opcional)"),sg()(),Tl(1125,"p"),tN(1126,"Caminho para a logomarca localizada no rodap\xE9."),sg()()(),Tl(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),tN(1131," p-support"),Gl(1132,"br"),sg()()(),Tl(1133,"td",17)(1134,"code",21),tN(1135,"string "),sg(),Tl(1136,"code",32),tN(1137," Function"),sg()(),Tl(1138,"td",19),tN(1139,"-"),sg(),Tl(1140,"td",20)(1141,"em")(1142,"strong"),tN(1143,"(opcional)"),sg()(),Tl(1144,"p"),tN(1145,"Exibe um bot\xE3o para suporte."),sg(),Tl(1146,"p"),tN(1147,"A propriedade aceita os seguintes tipos:"),sg(),Tl(1148,"ul")(1149,"li")(1150,"strong"),tN(1151,"String"),sg(),tN(1152,": URL externa ou uma rota v\xE1lida;"),sg(),Tl(1153,"li")(1154,"strong"),tN(1155,"Function"),sg(),tN(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),Tl(1157,"pre")(1158,"code"),tN(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),sg()()()()()()(),Tl(1160,"h3"),tN(1161,"Interfaces"),sg(),Tl(1162,"h4",34)(1163,"code",5),tN(1164,"PoPageLoginCustomField"),sg()(),Tl(1165,"div",2)(1166,"p"),tN(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),Tl(1168,"code"),tN(1169,"po-page-login"),sg(),tN(1170,"."),sg()(),Tl(1171,"h4",9),tN(1172,"Propriedades"),sg(),Tl(1173,"table",10)(1174,"tr",11)(1175,"th",12),tN(1176,"Nome"),sg(),Tl(1177,"th",12),tN(1178,"Tipo"),sg(),Tl(1179,"th",12),tN(1180,"Descri\xE7\xE3o"),sg()(),Tl(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),tN(1185," errorPattern"),Gl(1186,"br"),sg()()(),Tl(1187,"td",17)(1188,"code",21),tN(1189,"string"),sg()(),Tl(1190,"td",20)(1191,"em")(1192,"strong"),tN(1193,"(opcional)"),sg()(),Tl(1194,"p"),tN(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),Tl(1196,"code"),tN(1197,"pattern"),sg(),tN(1198," n\xE3o for v\xE1lida."),sg()()(),Tl(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),tN(1203," fieldValue"),Gl(1204,"br"),sg()()(),Tl(1205,"td",17)(1206,"code",21),tN(1207,"string"),sg()(),Tl(1208,"td",20)(1209,"em")(1210,"strong"),tN(1211,"(opcional)"),sg()(),Tl(1212,"p"),tN(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Tl(1214,"code"),tN(1215,"po-combo"),sg(),tN(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),sg()()(),Tl(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),tN(1221," options"),Gl(1222,"br"),sg()()(),Tl(1223,"td",17)(1224,"code",35),tN(1225,"Array<PoSelectOption>"),sg()(),Tl(1226,"td",20)(1227,"em")(1228,"strong"),tN(1229,"(opcional)"),sg()(),Tl(1230,"p"),tN(1231,"Lista de op\xE7\xF5es de um "),Tl(1232,"code"),tN(1233,"po-select"),sg(),tN(1234,"."),sg()()(),Tl(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),tN(1239," pattern"),Gl(1240,"br"),sg()()(),Tl(1241,"td",17)(1242,"code",21),tN(1243,"string"),sg()(),Tl(1244,"td",20)(1245,"em")(1246,"strong"),tN(1247,"(opcional)"),sg()(),Tl(1248,"p"),tN(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Tl(1250,"code"),tN(1251,"errorPattern"),sg(),tN(1252," ser\xE1 exibida."),sg()()(),Tl(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),tN(1257," placeholder"),Gl(1258,"br"),sg()()(),Tl(1259,"td",17)(1260,"code",21),tN(1261,"string"),sg()(),Tl(1262,"td",20)(1263,"em")(1264,"strong"),tN(1265,"(opcional)"),sg()(),Tl(1266,"p"),tN(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),sg()()(),Tl(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),tN(1272," property"),Gl(1273,"br"),sg()()(),Tl(1274,"td",17)(1275,"code",21),tN(1276,"string"),sg()(),Tl(1277,"td",20)(1278,"p"),tN(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),sg()()(),Tl(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),tN(1284," url"),Gl(1285,"br"),sg()()(),Tl(1286,"td",17)(1287,"code",21),tN(1288,"string"),sg()(),Tl(1289,"td",20)(1290,"em")(1291,"strong"),tN(1292,"(opcional)"),sg()(),Tl(1293,"p"),tN(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Tl(1295,"code"),tN(1296,"po-combo"),sg(),tN(1297,"."),sg()()(),Tl(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),tN(1302," value"),Gl(1303,"br"),sg()()(),Tl(1304,"td",17)(1305,"code",21),tN(1306,"string "),sg(),Tl(1307,"code",24),tN(1308," number"),sg()(),Tl(1309,"td",20)(1310,"em")(1311,"strong"),tN(1312,"(opcional)"),sg()(),Tl(1313,"p"),tN(1314,"Valor do campo customizado."),sg()()()(),Tl(1315,"h4",34)(1316,"code",5),tN(1317,"PoPageLoginLiterals"),sg()(),Tl(1318,"div",2)(1319,"p"),tN(1320,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1321,"code"),tN(1322,"po-page-login"),sg(),tN(1323,"."),sg()(),Tl(1324,"h4",9),tN(1325,"Propriedades"),sg(),Tl(1326,"table",10)(1327,"tr",11)(1328,"th",12),tN(1329,"Nome"),sg(),Tl(1330,"th",12),tN(1331,"Tipo"),sg(),Tl(1332,"th",12),tN(1333,"Descri\xE7\xE3o"),sg()(),Tl(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),tN(1338," attempts"),Gl(1339,"br"),sg()()(),Tl(1340,"td",17)(1341,"code",21),tN(1342,"string"),sg()(),Tl(1343,"td",20)(1344,"em")(1345,"strong"),tN(1346,"(opcional)"),sg()(),Tl(1347,"p"),tN(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),sg()()(),Tl(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),tN(1353," createANewPasswordNow"),Gl(1354,"br"),sg()()(),Tl(1355,"td",17)(1356,"code",21),tN(1357,"string"),sg()(),Tl(1358,"td",20)(1359,"em")(1360,"strong"),tN(1361,"(opcional)"),sg()(),Tl(1362,"p"),tN(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),sg()()(),Tl(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),tN(1368," customFieldErrorPattern"),Gl(1369,"br"),sg()()(),Tl(1370,"td",17)(1371,"code",21),tN(1372,"string"),sg()(),Tl(1373,"td",20)(1374,"em")(1375,"strong"),tN(1376,"(opcional)"),sg()(),Tl(1377,"p"),tN(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),sg()()(),Tl(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),tN(1383," customFieldPlaceholder"),Gl(1384,"br"),sg()()(),Tl(1385,"td",17)(1386,"code",21),tN(1387,"string"),sg()(),Tl(1388,"td",20)(1389,"em")(1390,"strong"),tN(1391,"(opcional)"),sg()(),Tl(1392,"p"),tN(1393,"Placeholder para o campo customizado."),sg()()(),Tl(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),tN(1398," forgotPassword"),Gl(1399,"br"),sg()()(),Tl(1400,"td",17)(1401,"code",21),tN(1402,"string"),sg()(),Tl(1403,"td",20)(1404,"em")(1405,"strong"),tN(1406,"(opcional)"),sg()(),Tl(1407,"p"),tN(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),sg()()(),Tl(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),tN(1413," forgotYourPassword"),Gl(1414,"br"),sg()()(),Tl(1415,"td",17)(1416,"code",21),tN(1417,"string"),sg()(),Tl(1418,"td",20)(1419,"em")(1420,"strong"),tN(1421,"(opcional)"),sg()(),Tl(1422,"p"),tN(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),sg()()(),Tl(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),tN(1428," highlightInfo"),Gl(1429,"br"),sg()()(),Tl(1430,"td",17)(1431,"code",21),tN(1432,"string"),sg()(),Tl(1433,"td",20)(1434,"em")(1435,"strong"),tN(1436,"(opcional)"),sg()(),Tl(1437,"p"),tN(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),Tl(1439,"code"),tN(1440,"p-background"),sg(),tN(1441,"."),sg()()(),Tl(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),tN(1446," iForgotMyPassword"),Gl(1447,"br"),sg()()(),Tl(1448,"td",17)(1449,"code",21),tN(1450,"string"),sg()(),Tl(1451,"td",20)(1452,"em")(1453,"strong"),tN(1454,"(opcional)"),sg()(),Tl(1455,"p"),tN(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),sg()()(),Tl(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),tN(1461," ifYouTryHarder"),Gl(1462,"br"),sg()()(),Tl(1463,"td",17)(1464,"code",21),tN(1465,"string"),sg()(),Tl(1466,"td",20)(1467,"em")(1468,"strong"),tN(1469,"(opcional)"),sg()(),Tl(1470,"p"),tN(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),sg()()(),Tl(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),tN(1476," loginErrorPattern"),Gl(1477,"br"),sg()()(),Tl(1478,"td",17)(1479,"code",21),tN(1480,"string"),sg()(),Tl(1481,"td",20)(1482,"em")(1483,"strong"),tN(1484,"(opcional)"),sg()(),Tl(1485,"p"),tN(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),sg()()(),Tl(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),tN(1491," loginHint"),Gl(1492,"br"),sg()()(),Tl(1493,"td",17)(1494,"code",21),tN(1495,"string"),sg()(),Tl(1496,"td",20)(1497,"em")(1498,"strong"),tN(1499,"(opcional)"),sg()(),Tl(1500,"p"),tN(1501,"Texto exibido como dica para o campo de login."),sg()()(),Tl(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),tN(1506," loginLabel"),Gl(1507,"br"),sg()()(),Tl(1508,"td",17)(1509,"code",21),tN(1510,"string"),sg()(),Tl(1511,"td",20)(1512,"em")(1513,"strong"),tN(1514,"(opcional)"),sg()(),Tl(1515,"p"),tN(1516,"Texto exibido como label do campo de login."),sg()()(),Tl(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),tN(1521," loginPlaceholder"),Gl(1522,"br"),sg()()(),Tl(1523,"td",17)(1524,"code",21),tN(1525,"string"),sg()(),Tl(1526,"td",20)(1527,"em")(1528,"strong"),tN(1529,"(opcional)"),sg()(),Tl(1530,"p"),tN(1531,"Placeholder do campo de login."),sg()()(),Tl(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),tN(1536," passwordErrorPattern"),Gl(1537,"br"),sg()()(),Tl(1538,"td",17)(1539,"code",21),tN(1540,"string"),sg()(),Tl(1541,"td",20)(1542,"em")(1543,"strong"),tN(1544,"(opcional)"),sg()(),Tl(1545,"p"),tN(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),sg()()(),Tl(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),tN(1551," passwordLabel"),Gl(1552,"br"),sg()()(),Tl(1553,"td",17)(1554,"code",21),tN(1555,"string"),sg()(),Tl(1556,"td",20)(1557,"em")(1558,"strong"),tN(1559,"(opcional)"),sg()(),Tl(1560,"p"),tN(1561,"Texto exibido como label do campo de password."),sg()()(),Tl(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),tN(1566," passwordPlaceholder"),Gl(1567,"br"),sg()()(),Tl(1568,"td",17)(1569,"code",21),tN(1570,"string"),sg()(),Tl(1571,"td",20)(1572,"em")(1573,"strong"),tN(1574,"(opcional)"),sg()(),Tl(1575,"p"),tN(1576,"Placeholder do campo de password."),sg()()(),Tl(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),tN(1581," registerUrl"),Gl(1582,"br"),sg()()(),Tl(1583,"td",17)(1584,"code",21),tN(1585,"string"),sg()(),Tl(1586,"td",20)(1587,"em")(1588,"strong"),tN(1589,"(opcional)"),sg()(),Tl(1590,"p"),tN(1591,"Texto exibido no link de novo cadastro."),sg()()(),Tl(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),tN(1596," rememberUser"),Gl(1597,"br"),sg()()(),Tl(1598,"td",17)(1599,"code",21),tN(1600,"string"),sg()(),Tl(1601,"td",20)(1602,"em")(1603,"strong"),tN(1604,"(opcional)"),sg()(),Tl(1605,"p"),tN(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),sg()()(),Tl(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),tN(1611," rememberUserHint"),Gl(1612,"br"),sg()()(),Tl(1613,"td",17)(1614,"code",21),tN(1615,"string"),sg()(),Tl(1616,"td",20)(1617,"em")(1618,"strong"),tN(1619,"(opcional)"),sg()(),Tl(1620,"p"),tN(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),sg()()(),Tl(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),tN(1626," submitLabel"),Gl(1627,"br"),sg()()(),Tl(1628,"td",17)(1629,"code",21),tN(1630,"string"),sg()(),Tl(1631,"td",20)(1632,"em")(1633,"strong"),tN(1634,"(opcional)"),sg()(),Tl(1635,"p"),tN(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),sg()()(),Tl(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),tN(1641," submittedLabel"),Gl(1642,"br"),sg()()(),Tl(1643,"td",17)(1644,"code",21),tN(1645,"string"),sg()(),Tl(1646,"td",20)(1647,"em")(1648,"strong"),tN(1649,"(opcional)"),sg()(),Tl(1650,"p"),tN(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),sg()()(),Tl(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),tN(1656," support"),Gl(1657,"br"),sg()()(),Tl(1658,"td",17)(1659,"code",21),tN(1660,"string"),sg()(),Tl(1661,"td",20)(1662,"em")(1663,"strong"),tN(1664,"(opcional)"),sg()(),Tl(1665,"p"),tN(1666,"Label do bot\xE3o de suporte."),sg()()(),Tl(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),tN(1671," titlePopover"),Gl(1672,"br"),sg()()(),Tl(1673,"td",17)(1674,"code",21),tN(1675,"string"),sg()(),Tl(1676,"td",20)(1677,"em")(1678,"strong"),tN(1679,"(opcional)"),sg()(),Tl(1680,"p"),tN(1681,"T\xEDtulo do popover para aviso de bloqueio."),sg()()(),Tl(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),tN(1686," welcome"),Gl(1687,"br"),sg()()(),Tl(1688,"td",17)(1689,"code",21),tN(1690,"string"),sg()(),Tl(1691,"td",20)(1692,"em")(1693,"strong"),tN(1694,"(opcional)"),sg()(),Tl(1695,"p"),tN(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),sg()()(),Tl(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),tN(1701," yourUserWillBeBlocked"),Gl(1702,"br"),sg()()(),Tl(1703,"td",17)(1704,"code",21),tN(1705,"string"),sg()(),Tl(1706,"td",20)(1707,"em")(1708,"strong"),tN(1709,"(opcional)"),sg()(),Tl(1710,"p"),tN(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),sg()()()(),Tl(1712,"h4",34)(1713,"code",5),tN(1714,"PoPageLoginRecovery"),sg()(),Tl(1715,"div",2)(1716,"p"),tN(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Tl(1718,"code"),tN(1719,"po-modal-password-recovery"),sg(),tN(1720,"."),sg()(),Tl(1721,"h4",9),tN(1722,"Propriedades"),sg(),Tl(1723,"table",10)(1724,"tr",11)(1725,"th",12),tN(1726,"Nome"),sg(),Tl(1727,"th",12),tN(1728,"Tipo"),sg(),Tl(1729,"th",12),tN(1730,"Descri\xE7\xE3o"),sg()(),Tl(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),tN(1735," contactMail"),Gl(1736,"br"),sg()()(),Tl(1737,"td",17)(1738,"code",21),tN(1739,"string"),sg()(),Tl(1740,"td",20)(1741,"em")(1742,"strong"),tN(1743,"(opcional)"),sg()(),Tl(1744,"p"),tN(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),sg()()(),Tl(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),tN(1750," phoneMask"),Gl(1751,"br"),sg()()(),Tl(1752,"td",17)(1753,"code",21),tN(1754,"string"),sg()(),Tl(1755,"td",20)(1756,"em")(1757,"strong"),tN(1758,"(opcional)"),sg()(),Tl(1759,"p"),tN(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),sg()()(),Tl(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),tN(1765," type"),Gl(1766,"br"),sg()()(),Tl(1767,"td",17)(1768,"code",36),tN(1769,"PoModalPasswordRecoveryType"),sg()(),Tl(1770,"td",20)(1771,"em")(1772,"strong"),tN(1773,"(opcional)"),sg()(),Tl(1774,"p"),tN(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Tl(1776,"a",37),tN(1777,"PoModalPasswordRecoveryType"),sg(),tN(1778,"."),sg(),Tl(1779,"blockquote")(1780,"p"),tN(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Tl(1782,"code"),tN(1783,"PoModalPasswordRecoveryType.Email"),sg(),tN(1784,"."),sg()()()(),Tl(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),tN(1789," url"),Gl(1790,"br"),sg()()(),Tl(1791,"td",17)(1792,"code",21),tN(1793,"string"),sg()(),Tl(1794,"td",20)(1795,"p"),tN(1796,"Endpoint usado pelo template "),Tl(1797,"strong"),tN(1798,"PoModalPasswordRecovery"),sg(),tN(1799," para requisi\xE7\xE3o do recurso."),sg(),Tl(1800,"blockquote")(1801,"p"),tN(1802,"Saiba mais em "),Tl(1803,"a",37),tN(1804,"PoModalPasswordRecovery"),sg(),tN(1805,"."),sg()()()()(),Tl(1806,"h4",34)(1807,"code",5),tN(1808,"PoPageLogin"),sg()(),Tl(1809,"div",2)(1810,"p"),tN(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Tl(1812,"code"),tN(1813,"po-page-login"),sg(),tN(1814,"."),sg()(),Tl(1815,"h4",9),tN(1816,"Propriedades"),sg(),Tl(1817,"table",10)(1818,"tr",11)(1819,"th",12),tN(1820,"Nome"),sg(),Tl(1821,"th",12),tN(1822,"Tipo"),sg(),Tl(1823,"th",12),tN(1824,"Descri\xE7\xE3o"),sg()(),Tl(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),tN(1829," login"),Gl(1830,"br"),sg()()(),Tl(1831,"td",17)(1832,"code",21),tN(1833,"string"),sg()(),Tl(1834,"td",20)(1835,"p"),tN(1836,"Login preenchido pelo usu\xE1rio."),sg()()(),Tl(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),tN(1841," password"),Gl(1842,"br"),sg()()(),Tl(1843,"td",17)(1844,"code",21),tN(1845,"string"),sg()(),Tl(1846,"td",20)(1847,"p"),tN(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),sg()()(),Tl(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),tN(1853," rememberUser"),Gl(1854,"br"),sg()()(),Tl(1855,"td",17)(1856,"code",25),tN(1857,"boolean"),sg()(),Tl(1858,"td",20)(1859,"p"),tN(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),sg()()()(),Tl(1861,"h3"),tN(1862,"Enums"),sg(),Tl(1863,"h4",4)(1864,"code",5),tN(1865,"PoPageLoginAuthenticationType"),sg()(),Tl(1866,"div",2)(1867,"p")(1868,"em"),tN(1869,"Enum"),sg(),tN(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),sg()(),Tl(1871,"h4",9),tN(1872,"Propriedades"),sg(),Tl(1873,"table",10)(1874,"tr",11)(1875,"th",12),tN(1876,"Nome"),sg(),Tl(1877,"th",12),tN(1878,"Descri\xE7\xE3o"),sg()(),Tl(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),tN(1883," Basic"),Gl(1884,"br"),sg()()(),Tl(1885,"td",20)(1886,"p"),tN(1887,"Autentica\xE7\xE3o Basic"),sg()()(),Tl(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),tN(1892," Bearer"),Gl(1893,"br"),sg()()(),Tl(1894,"td",20)(1895,"p"),tN(1896,"Autentica\xE7\xE3o Bearer"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return r})();var Pe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-page-login-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ce,Ee,he,be,ve],encapsulation:2})}return r})();var We=[{path:"",component:Pe}],Ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[vL.forChild(We),vL]})}return r})();var wt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[ar,Ce]})}return r})();export{wt as DocPoPageLoginModule};