import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,by as vle,bP as vVe,bz as Ye,r as r$1,bF as X1,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,ah as uo,bC as Vp,bE as Q1,ao as QA,ar as JA,a3 as D3,az as Qy,ax as gx,aA as Jy,aB as $x}from'./main-6SPFG3VI.js';var ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Ul(0,"po-page-login");},dependencies:[X1],encapsulation:2,changeDetection:1})}return r})();var Le=r=>({"docs-sample-code-tabs":r}),ge=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Login Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-login></po-page-login>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-login-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return r})();var Ee=(()=>{class r{poDialog=f(vle);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];ngOnInit(){this.restore();}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={};}addLoginError(){this.loginErrors.push(this.loginError),this.loginError="";}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError="";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(p){this.customLiterals=void 0;}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(p),componentsSize:this.componentsSize});}onChangeCustomProperties(){this.customField=Object.assign({},this.customField);}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support="";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs"]],standalone:false,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=lx();wl(0,"po-page-login",2),ut("p-login-submit",function(a){return i.loginSubmit(a)}),ng(),Ul(1,"po-divider"),wl(2,"form",null,0)(4,"div",3)(5,"po-input",4),pw("ngModelChange",function(a){return Qy(m),$x(i.literals,a)||(i.literals=a),Jy(a)}),ut("p-change",function(){return i.changeLiterals()}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(a){return Qy(m),$x(i.productName,a)||(i.productName=a),Jy(a)}),ng(),$0(),ng(),wl(7,"div",3)(8,"po-input",6),pw("ngModelChange",function(a){return Qy(m),$x(i.loginPattern,a)||(i.loginPattern=a),Jy(a)}),ng(),$0(),wl(9,"po-input",7),pw("ngModelChange",function(a){return Qy(m),$x(i.login,a)||(i.login=a),Jy(a)}),ng(),$0(),ng(),wl(10,"div",3)(11,"po-input",8),pw("ngModelChange",function(a){return Qy(m),$x(i.exceededAttempts,a)||(i.exceededAttempts=a),Jy(a)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(a){return Qy(m),$x(i.passwordPattern,a)||(i.passwordPattern=a),Jy(a)}),ng(),$0(),ng(),wl(13,"div",3)(14,"po-input",10),pw("ngModelChange",function(a){return Qy(m),$x(i.contactEmail,a)||(i.contactEmail=a),Jy(a)}),ng(),$0(),wl(15,"po-input",11),pw("ngModelChange",function(a){return Qy(m),$x(i.environment,a)||(i.environment=a),Jy(a)}),ng(),$0(),ng(),wl(16,"div",3)(17,"po-input",12),pw("ngModelChange",function(a){return Qy(m),$x(i.logo,a)||(i.logo=a),Jy(a)}),ng(),$0(),wl(18,"po-input",13),pw("ngModelChange",function(a){return Qy(m),$x(i.secondaryLogo,a)||(i.secondaryLogo=a),Jy(a)}),ng(),$0(),ng(),wl(19,"div",3)(20,"po-input",14),pw("ngModelChange",function(a){return Qy(m),$x(i.background,a)||(i.background=a),Jy(a)}),ng(),$0(),wl(21,"po-input",15),pw("ngModelChange",function(a){return Qy(m),$x(i.support,a)||(i.support=a),Jy(a)}),ng(),$0(),ng(),wl(22,"div",3)(23,"po-input",16),pw("ngModelChange",function(a){return Qy(m),$x(i.recovery,a)||(i.recovery=a),Jy(a)}),ng(),$0(),wl(24,"po-input",17),pw("ngModelChange",function(a){return Qy(m),$x(i.registerUrl,a)||(i.registerUrl=a),Jy(a)}),ng(),$0(),ng(),wl(25,"div",3)(26,"po-checkbox-group",18),pw("ngModelChange",function(a){return Qy(m),$x(i.properties,a)||(i.properties=a),Jy(a)}),ng(),$0(),wl(27,"po-radio-group",19),pw("ngModelChange",function(a){return Qy(m),$x(i.componentsSize,a)||(i.componentsSize=a),Jy(a)}),ng(),$0(),ng(),Ul(28,"po-divider",20),wl(29,"div",3)(30,"po-input",21),pw("ngModelChange",function(a){return Qy(m),$x(i.loginError,a)||(i.loginError=a),Jy(a)}),ng(),$0(),wl(31,"po-button",22),ut("p-click",function(){return i.addLoginError()}),ng()(),Ul(32,"po-divider",23),wl(33,"div",3)(34,"po-input",24),pw("ngModelChange",function(a){return Qy(m),$x(i.passwordError,a)||(i.passwordError=a),Jy(a)}),ng(),$0(),wl(35,"po-button",25),ut("p-click",function(){return i.addPasswordError()}),ng()(),Ul(36,"po-divider",26),wl(37,"div",3)(38,"po-input",27),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.property,a)||(i.customField.property=a),Jy(a)}),ut("p-change-model",function(){return i.onChangeCustomProperties()}),ng(),$0(),wl(39,"po-input",28),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.value,a)||(i.customField.value=a),Jy(a)}),ng(),$0(),ng(),wl(40,"div",3)(41,"po-input",29),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.placeholder,a)||(i.customField.placeholder=a),Jy(a)}),ng(),$0(),wl(42,"po-input",30),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.pattern,a)||(i.customField.pattern=a),Jy(a)}),ng(),$0(),wl(43,"po-input",31),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.errorPattern,a)||(i.customField.errorPattern=a),Jy(a)}),ng(),$0(),ng(),Ul(44,"po-divider"),wl(45,"div",3)(46,"po-input",32),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.url,a)||(i.customField.url=a),Jy(a)}),ut("p-change-model",function(){return i.onChangeCustomProperties()}),ng(),$0(),wl(47,"po-input",33),pw("ngModelChange",function(a){return Qy(m),$x(i.customField.fieldValue,a)||(i.customField.fieldValue=a),Jy(a)}),ut("p-change-model",function(){return i.onChangeCustomProperties()}),ng(),$0(),ng(),Ul(48,"po-divider"),wl(49,"form",null,1)(51,"div",3)(52,"po-input",34),pw("ngModelChange",function(a){return Qy(m),$x(i.customFieldOption.label,a)||(i.customFieldOption.label=a),Jy(a)}),ng(),$0(),wl(53,"po-input",35),pw("ngModelChange",function(a){return Qy(m),$x(i.customFieldOption.value,a)||(i.customFieldOption.value=a),Jy(a)}),ng(),$0(),ng(),wl(54,"div",3)(55,"po-button",36),ut("p-click",function(){return i.addCustomFieldOption()}),ng()()(),Ul(56,"br")(57,"po-divider"),wl(58,"div",3)(59,"po-button",37),ut("p-click",function(){return i.restore()}),ng()()();}if(l&2){let m=_x(50);YE("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),Pp(5),hw("ngModel",i.literals),G0(),Pp(),hw("ngModel",i.productName),G0(),Pp(2),hw("ngModel",i.loginPattern),G0(),Pp(),hw("ngModel",i.login),G0(),Pp(2),hw("ngModel",i.exceededAttempts),G0(),Pp(),hw("ngModel",i.passwordPattern),G0(),Pp(2),hw("ngModel",i.contactEmail),G0(),Pp(),hw("ngModel",i.environment),G0(),Pp(2),hw("ngModel",i.logo),G0(),Pp(),hw("ngModel",i.secondaryLogo),G0(),Pp(2),hw("ngModel",i.background),G0(),Pp(),hw("ngModel",i.support),G0(),Pp(2),hw("ngModel",i.recovery),G0(),Pp(),hw("ngModel",i.registerUrl),G0(),Pp(2),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.componentsSize),YE("p-options",i.componentsSizeOptions),G0(),Pp(3),hw("ngModel",i.loginError),G0(),Pp(4),hw("ngModel",i.passwordError),G0(),Pp(4),hw("ngModel",i.customField.property),G0(),Pp(),hw("ngModel",i.customField.value),G0(),Pp(2),hw("ngModel",i.customField.placeholder),G0(),Pp(),hw("ngModel",i.customField.pattern),G0(),Pp(),hw("ngModel",i.customField.errorPattern),G0(),Pp(3),hw("ngModel",i.customField.url),G0(),Pp(),hw("ngModel",i.customField.fieldValue),G0(),Pp(5),hw("ngModel",i.customFieldOption.label),G0(),Pp(),hw("ngModel",i.customFieldOption.value),G0(),Pp(2),YE("p-disabled",m.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,X1],encapsulation:2,changeDetection:1})}return r})();var Fe=r=>({"docs-sample-code-tabs":r}),Se=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Login Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-login
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-login-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return r})();function Ae(r,we){if(r&1){let p=lx();wl(0,"po-page-login",6),ut("p-login-change",function(){Qy(p);let i=gx();return Jy(i.loginChange())})("p-login-submit",function(i){Qy(p);let m=gx();return Jy(m.checkLogin(i))})("p-password-change",function(){Qy(p);let i=gx();return Jy(i.passwordChange())}),ng();}if(r&2){let p=gx();YE("p-custom-field",p.customField)("p-exceeded-attempts-warning",p.exceededAttempts)("p-literals",p.literalsI18n)("p-loading",p.loading)("p-password-errors",p.passwordErrors)("p-login-errors",p.loginErrors)("p-recovery",p.passwordRecovery);}}function Oe(r,we){if(r&1&&Ul(0,"po-page-blocked-user",5),r&2){let p=gx();YE("p-params",p.params);}}var he=(()=>{class r{poI18nService=f(vVe);poDialog=f(vle);customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=false;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:Ye.All,contactMail:"support@mail.com"};showPageBlocked=false;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe();}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0;});}checkLogin(p){this.loading=true,p.login==="devpo"&&p.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=false,title:"Access released",message:"You are on vacation, take time to rest."});},3e3)):(this.loading=false,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."]);}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[]);}loginChange(){this.loginErrors.length&&(this.loginErrors=[]);}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=true);}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:false,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"]],template:function(l,i){l&1&&(wl(0,"po-container")(1,"div",0),Ul(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),ng()(),QA(5,Ae,1,7,"po-page-login",4),QA(6,Oe,1,1,"po-page-blocked-user",5)),l&2&&(Pp(5),JA(i.showPageBlocked?-1:5),Pp(),JA(i.showPageBlocked?6:-1));},dependencies:[uo,Vp,Q1,X1],encapsulation:2,changeDetection:1})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),xe=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Login - Human Resources"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),ng(),wl(23,"pre",9),Ux(24,`/**
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-page-login-human-resources"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Be,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return r})();var be=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(p){p?.language==="jp"?this.literals=r$1({},this.japoneseLiterals):this.literals={};}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:false,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(wl(0,"po-container")(1,"div",0),Ul(2,"po-info",1)(3,"po-info",2),ng()(),wl(4,"po-page-login",3),ut("p-language-change",function(d){return i.changeLanguage(d)}),ng()),l&2&&(Pp(4),YE("p-languages",i.languages)("p-literals",i.literals));},dependencies:[uo,Vp,X1],encapsulation:2,changeDetection:1})}return r})();var We=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Login - Automatic Service"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-login-automatic-service"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,We,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return r})();var Pe=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-doc"]],standalone:false,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do template do po-page-login."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoPageLoginComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-page-login"),ng(),Ux(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),ng(),wl(18,"p"),Ux(19,"A propriedade "),wl(20,"code"),Ux(21,"p-authentication-url"),ng(),Ux(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),wl(23,"em"),Ux(24,"client side"),ng(),Ux(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),wl(26,"em"),Ux(27,"propriedades"),ng(),Ux(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ng(),wl(29,"p"),Ux(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),wl(31,"em"),Ux(32,"assets"),ng(),Ux(33," no arquivo "),wl(34,"strong"),Ux(35,"angular.json"),ng(),Ux(36," da aplica\xE7\xE3o na seguinte ordem:"),ng(),wl(37,"pre")(38,"code"),Ux(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ng()()(),wl(40,"div",6)(41,"h4",7),Ux(42,"Seletor"),ng(),wl(43,"pre",8),Ux(44,`<po-page-login
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
`),ng()(),wl(45,"h4",9),Ux(46,"Propriedades"),ng(),wl(47,"table",10)(48,"tr",11)(49,"th",12),Ux(50,"Nome"),ng(),wl(51,"th",12),Ux(52,"Tipo"),ng(),wl(53,"th",12),Ux(54,"Padr\xE3o"),ng(),wl(55,"th",12),Ux(56,"Descri\xE7\xE3o"),ng()(),wl(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),Ux(61," p-authentication-type"),Ul(62,"br"),ng()()(),wl(63,"td",17)(64,"code",18),Ux(65,"PoPageLoginAuthenticationType"),ng()(),wl(66,"td",19)(67,"p")(68,"code"),Ux(69,"PoPageLoginAuthenticationType.Basic"),ng()()(),wl(70,"td",20)(71,"em")(72,"strong"),Ux(73,"(opcional)"),ng()(),wl(74,"p"),Ux(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),wl(76,"code"),Ux(77,"Basic"),ng(),Ux(78," e "),wl(79,"code"),Ux(80,"Bearer"),ng(),Ux(81,"."),ng(),wl(82,"blockquote")(83,"p"),Ux(84,"Caso o tipo definido seja "),wl(85,"code"),Ux(86,"Basic"),ng(),Ux(87,", o componente far\xE1 uma requisi\xE7\xE3o "),wl(88,"code"),Ux(89,"POST"),ng(),Ux(90," contendo:"),ng()(),wl(91,"pre")(92,"code"),Ux(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),ng()(),wl(94,"blockquote")(95,"p"),Ux(96,"Caso o tipo definido seja "),wl(97,"code"),Ux(98,"Bearer"),ng(),Ux(99,", o componente far\xE1 uma requisi\xE7\xE3o "),wl(100,"code"),Ux(101,"POST"),ng(),Ux(102," contendo:"),ng()(),wl(103,"pre")(104,"code"),Ux(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),ng()()()(),wl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),Ux(110," p-authentication-url"),Ul(111,"br"),ng()()(),wl(112,"td",17)(113,"code",21),Ux(114,"string"),ng()(),wl(115,"td",19),Ux(116,"-"),ng(),wl(117,"td",20)(118,"em")(119,"strong"),Ux(120,"(opcional)"),ng()(),wl(121,"p"),Ux(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),wl(123,"code"),Ux(124,"p-login-submit"),ng(),Ux(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),ng(),wl(126,"h3"),Ux(127,"Processos"),ng(),wl(128,"p"),Ux(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),wl(130,"strong"),Ux(131,"Enter"),ng(),Ux(132,", o componente far\xE1 uma requisi\xE7\xE3o "),wl(133,"code"),Ux(134,"POST"),ng(),Ux(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),ng(),wl(136,"pre")(137,"code"),Ux(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),ng()(),wl(139,"p"),Ux(140,"Em caso de "),wl(141,"strong"),Ux(142,"sucesso"),ng(),Ux(143,", o objeto de retorno \xE9 armazenado no "),wl(144,"code"),Ux(145,"sessionStorage"),ng(),Ux(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),wl(147,"code"),Ux(148,"/"),ng(),Ux(149,"."),ng(),wl(150,"pre")(151,"code"),Ux(152,`200:
{
  user: user
}
`),ng()(),wl(153,"p"),Ux(154,"Em caso de "),wl(155,"strong"),Ux(156,"erro"),ng(),Ux(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),ng(),wl(158,"pre")(159,"code"),Ux(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),ng()(),wl(161,"blockquote")(162,"p"),Ux(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),wl(164,"code"),Ux(165,"p-exceeded-attempts-warning"),ng(),Ux(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),wl(167,"code"),Ux(168,"p-login-errors"),ng(),Ux(169,` e
`),wl(170,"code"),Ux(171,"p-password-errors"),ng(),Ux(172," conforme retorno abaixo:"),ng()(),wl(173,"pre")(174,"code"),Ux(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),ng()(),wl(176,"blockquote")(177,"p"),Ux(178,"Caso o valor atribu\xEDdo para "),wl(179,"code"),Ux(180,"p-exceeded-attempts-warning"),ng(),Ux(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),wl(182,"code"),Ux(183,"p-blocked-url"),ng(),Ux(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),ng()(),wl(185,"p")(186,"em"),Ux(187,"Processo finalizado."),ng()(),Ul(188,"hr"),wl(189,"h4"),Ux(190,"Praticidade"),ng(),wl(191,"p"),Ux(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),wl(193,"code"),Ux(194,"po-page-login"),ng(),Ux(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),wl(196,"code"),Ux(197,"/login"),ng(),Ux(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),ng(),wl(199,"pre")(200,"code"),Ux(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),ng()(),wl(202,"p"),Ux(203,"O metadado "),wl(204,"code"),Ux(205,"serviceApi"),ng(),Ux(206," deve ser a "),wl(207,"strong"),Ux(208,"url"),ng(),Ux(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),wl(210,"code"),Ux(211,"environment"),ng(),Ux(212,` alimenta a propriedade
`),wl(213,"code"),Ux(214,"p-environment"),ng(),Ux(215,", "),wl(216,"code"),Ux(217,"recovery"),ng(),Ux(218," \xE9 a interface "),wl(219,"code"),Ux(220,"PoPageLoginRecovery"),ng(),Ux(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),wl(222,"code"),Ux(223,"registerUrl"),ng(),Ux(224," alimenta a propriedade "),wl(225,"code"),Ux(226,"p-register-url"),ng(),Ux(227," e "),wl(228,"code"),Ux(229,"authenticationType"),ng(),Ux(230," que define a propriedade "),wl(231,"code"),Ux(232,"p-authentication-type"),ng(),Ux(233,"."),ng(),wl(234,"blockquote")(235,"p"),Ux(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),ng()()()(),wl(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),Ux(241," p-background"),Ul(242,"br"),ng()()(),wl(243,"td",17)(244,"code",21),Ux(245,"string"),ng()(),wl(246,"td",19),Ux(247,"-"),ng(),wl(248,"td",20)(249,"em")(250,"strong"),Ux(251,"(opcional)"),ng()(),wl(252,"p"),Ux(253,"O "),wl(254,"code"),Ux(255,"p-background"),ng(),Ux(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),ng(),wl(257,"p"),Ux(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),ng(),wl(259,"p"),Ux(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),wl(261,"code"),Ux(262,"highlightInfo"),ng(),Ux(263,"."),ng(),wl(264,"blockquote")(265,"p"),Ux(266,"Veja mais sobre as literais na propriedade "),wl(267,"code"),Ux(268,"p-literals"),ng(),Ux(269,"."),ng()(),wl(270,"p"),Ux(271,"Exemplos de valores v\xE1lidos:"),ng(),wl(272,"ul")(273,"li")(274,"strong"),Ux(275,"local"),ng(),Ux(276,": "),wl(277,"code"),Ux(278,"./assets/images/login-background.png"),ng()(),wl(279,"li")(280,"strong"),Ux(281,"url externa"),ng(),Ux(282,": "),wl(283,"code"),Ux(284,"https://po-ui.io/assets/images/login-background.png"),ng()()(),wl(285,"blockquote")(286,"p"),Ux(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),ng()()()(),wl(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),Ux(292," p-blocked-url"),Ul(293,"br"),ng()()(),wl(294,"td",17)(295,"code",21),Ux(296,"string"),ng()(),wl(297,"td",19),Ux(298,"-"),ng(),wl(299,"td",20)(300,"em")(301,"strong"),Ux(302,"(opcional)"),ng()(),wl(303,"p"),Ux(304,"Caso o valor atribu\xEDdo para "),wl(305,"code"),Ux(306,"p-exceeded-attempts-warning"),ng(),Ux(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),ng()()(),wl(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),Ux(312," p-components-size"),Ul(313,"br"),ng()()(),wl(314,"td",17)(315,"code",21),Ux(316,"string"),ng()(),wl(317,"td",19)(318,"p")(319,"code"),Ux(320,"medium"),ng()()(),wl(321,"td",20)(322,"em")(323,"strong"),Ux(324,"(opcional)"),ng()(),wl(325,"p"),Ux(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(327,"ul")(328,"li")(329,"code"),Ux(330,"small"),ng(),Ux(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(332,"li")(333,"code"),Ux(334,"medium"),ng(),Ux(335,": aplica a medida medium de cada componente."),ng()(),wl(336,"blockquote")(337,"p"),Ux(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(339,"code"),Ux(340,"medium"),ng(),Ux(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(342,"a",22),Ux(343,"po-theme"),ng(),Ux(344,"."),ng()()()(),wl(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),Ux(349," p-contact-email"),Ul(350,"br"),ng()()(),wl(351,"td",17)(352,"code",21),Ux(353,"string"),ng()(),wl(354,"td",19),Ux(355,"-"),ng(),wl(356,"td",20)(357,"em")(358,"strong"),Ux(359,"(opcional)"),ng()(),wl(360,"p"),Ux(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),ng()()(),wl(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),Ux(366," p-custom-field"),Ul(367,"br"),ng()()(),wl(368,"td",17)(369,"code",21),Ux(370,"string "),ng(),wl(371,"code",23),Ux(372," PoPageLoginCustomField"),ng()(),wl(373,"td",19),Ux(374,"-"),ng(),wl(375,"td",20)(376,"em")(377,"strong"),Ux(378,"(opcional)"),ng()(),wl(379,"p"),Ux(380,"Ao informar um valor do tipo "),wl(381,"code"),Ux(382,"string"),ng(),Ux(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),wl(384,"code"),Ux(385,"literals"),ng(),Ux(386," como "),wl(387,"code"),Ux(388,"customFieldErrorPattern"),ng(),Ux(389," e "),wl(390,"code"),Ux(391,"customFieldPlaceholder"),ng(),Ux(392,"."),ng(),wl(393,"p"),Ux(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),wl(395,"code"),Ux(396,"PoPageLoginCustomField"),ng(),Ux(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),wl(398,"code"),Ux(399,"po-input"),ng(),Ux(400,", "),wl(401,"code"),Ux(402,"po-combo"),ng(),Ux(403,` especificamente para servi\xE7os
ou `),wl(404,"code"),Ux(405,"po-select"),ng(),Ux(406," para valores fixos."),ng(),wl(407,"p"),Ux(408,"Abaixo seguem os exemplos de cada tipo de campo."),ng(),wl(409,"p")(410,"code"),Ux(411,"po-input"),ng(),Ux(412,":"),ng(),wl(413,"pre")(414,"code"),Ux(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),ng()(),wl(416,"p")(417,"code"),Ux(418,"po-combo"),ng(),Ux(419,":"),ng(),wl(420,"pre")(421,"code"),Ux(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),ng()(),wl(423,"p")(424,"code"),Ux(425,"po-select"),ng(),Ux(426,":"),ng(),wl(427,"pre")(428,"code"),Ux(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),ng()(),wl(430,"p"),Ux(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),ng()()(),wl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),Ux(436," p-environment"),Ul(437,"br"),ng()()(),wl(438,"td",17)(439,"code",21),Ux(440,"string"),ng()(),wl(441,"td",19),Ux(442,"-"),ng(),wl(443,"td",20)(444,"em")(445,"strong"),Ux(446,"(opcional)"),ng()(),wl(447,"p"),Ux(448,"Adiciona uma "),wl(449,"code"),Ux(450,"tag"),ng(),Ux(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),ng(),wl(452,"blockquote")(453,"p"),Ux(454,"Essa propriedade limita o texto em 40 caracteres."),ng()()()(),wl(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),Ux(459," p-exceeded-attempts-warning"),Ul(460,"br"),ng()()(),wl(461,"td",17)(462,"code",24),Ux(463,"number"),ng()(),wl(464,"td",19)(465,"p")(466,"code"),Ux(467,"0"),ng()()(),wl(468,"td",20)(469,"em")(470,"strong"),Ux(471,"(opcional)"),ng()(),wl(472,"p"),Ux(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),ng(),wl(474,"blockquote")(475,"p"),Ux(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),wl(477,"code"),Ux(478,"p-authentication-url"),ng(),Ux(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),wl(480,"code"),Ux(481,"p-exceeded-attempts-warning"),ng(),Ux(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),ng()()()(),wl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),Ux(487," p-hide-label-status"),Ul(488,"br"),ng()()(),wl(489,"td",17)(490,"code",25),Ux(491,"boolean"),ng()(),wl(492,"td",19)(493,"p")(494,"code"),Ux(495,"false"),ng()()(),wl(496,"td",20)(497,"em")(498,"strong"),Ux(499,"(opcional)"),ng()(),wl(500,"p"),Ux(501,"Indica se o status do "),wl(502,"code"),Ux(503,"model"),ng(),Ux(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),ng(),wl(505,"blockquote")(506,"p"),Ux(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),wl(508,"code"),Ux(509,"false"),ng(),Ux(510,"."),ng()()()(),wl(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),Ux(515," p-hide-password-peek"),Ul(516,"br"),ng()()(),wl(517,"td",17)(518,"code",25),Ux(519,"boolean"),ng()(),wl(520,"td",19)(521,"p")(522,"code"),Ux(523,"false"),ng()()(),wl(524,"td",20)(525,"em")(526,"strong"),Ux(527,"(opcional)"),ng()(),wl(528,"p"),Ux(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),ng()()(),wl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),Ux(534," p-hide-remember-user"),Ul(535,"br"),ng()()(),wl(536,"td",17)(537,"code",25),Ux(538,"boolean"),ng()(),wl(539,"td",19)(540,"p")(541,"code"),Ux(542,"false"),ng()()(),wl(543,"td",20)(544,"em")(545,"strong"),Ux(546,"(opcional)"),ng()(),wl(547,"p"),Ux(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),ng(),wl(549,"p"),Ux(550,"Quando essa propriedade \xE9 setada com "),wl(551,"code"),Ux(552,"true"),ng(),Ux(553," a propriedade "),wl(554,"code"),Ux(555,"rememberUser"),ng(),Ux(556," enviada no evento "),wl(557,"code"),Ux(558,"p-login-submit"),ng(),Ux(559,` ser\xE1 sempre
`),wl(560,"code"),Ux(561,"false"),ng(),Ux(562,"."),ng(),wl(563,"blockquote")(564,"p"),Ux(565,"Veja a propriedade "),wl(566,"code"),Ux(567,"p-literals"),ng(),Ux(568," para customizar a literal "),wl(569,"code"),Ux(570,"rememberUser"),ng(),Ux(571,"."),ng()()()(),wl(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),Ux(576," (p-language-change)"),Ul(577,"br"),ng()()(),wl(578,"td",17)(579,"code",28),Ux(580,"EventEmitter"),ng()(),wl(581,"td",19),Ux(582,"-"),ng(),wl(583,"td",20)(584,"em")(585,"strong"),Ux(586,"(opcional)"),ng()(),wl(587,"p"),Ux(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),ng(),wl(589,"p"),Ux(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),wl(591,"code"),Ux(592,"PoLanguage"),ng(),Ux(593," com a linguagem selecionada."),ng()()(),wl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),Ux(598," p-languages"),Ul(599,"br"),ng()()(),wl(600,"td",17)(601,"code",29),Ux(602,"Array<PoLanguage>"),ng()(),wl(603,"td",19),Ux(604,"-"),ng(),wl(605,"td",20)(606,"em")(607,"strong"),Ux(608,"(opcional)"),ng()(),wl(609,"p"),Ux(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),ng(),wl(611,"p"),Ux(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),ng(),wl(613,"p"),Ux(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),ng(),wl(615,"p"),Ux(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),wl(617,"code"),Ux(618,"i18n"),ng(),Ux(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),ng(),wl(620,"blockquote")(621,"p"),Ux(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),wl(623,"code"),Ux(624,"p-literals"),ng(),Ux(625,"."),ng()()()(),wl(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),Ux(630," p-literals"),Ul(631,"br"),ng()()(),wl(632,"td",17)(633,"code",30),Ux(634,"PoPageLoginLiterals"),ng()(),wl(635,"td",19),Ux(636,"-"),ng(),wl(637,"td",20)(638,"em")(639,"strong"),Ux(640,"(opcional)"),ng()(),wl(641,"p"),Ux(642,"Objeto com as literais usadas no "),wl(643,"code"),Ux(644,"po-page-login"),ng(),Ux(645,"."),ng(),wl(646,"p"),Ux(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(648,"pre")(649,"code"),Ux(650,`const customLiterals: PoPageLoginLiterals = {
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
`),ng()(),wl(651,"p"),Ux(652,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(653,"pre")(654,"code"),Ux(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),ng()(),wl(656,"p"),Ux(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(658,"pre")(659,"code"),Ux(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),ng()(),wl(661,"blockquote")(662,"p"),Ux(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),ng()()()(),wl(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),Ux(668," p-loading"),Ul(669,"br"),ng()()(),wl(670,"td",17)(671,"code",25),Ux(672,"boolean"),ng()(),wl(673,"td",19)(674,"p")(675,"code"),Ux(676,"false"),ng()()(),wl(677,"td",20)(678,"em")(679,"strong"),Ux(680,"(opcional)"),ng()(),wl(681,"p"),Ux(682,"Habilita um estado de carregamento ao bot\xE3o de "),wl(683,"em"),Ux(684,"login"),ng(),Ux(685,"."),ng(),wl(686,"blockquote")(687,"p"),Ux(688,"\xC9 necess\xE1rio atribuir "),wl(689,"code"),Ux(690,"true"),ng(),Ux(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),wl(692,"code"),Ux(693,"p-login-submit"),ng(),Ux(694,"."),ng()()()(),wl(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),Ux(699," p-login"),Ul(700,"br"),ng()()(),wl(701,"td",17)(702,"code",21),Ux(703,"string"),ng()(),wl(704,"td",19),Ux(705,"-"),ng(),wl(706,"td",20)(707,"em")(708,"strong"),Ux(709,"(opcional)"),ng()(),wl(710,"p"),Ux(711,"Valor do modelo do campo de login."),ng()()(),wl(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),Ux(716," (p-login-change)"),Ul(717,"br"),ng()()(),wl(718,"td",17)(719,"code",28),Ux(720,"EventEmitter"),ng()(),wl(721,"td",19),Ux(722,"-"),ng(),wl(723,"td",20)(724,"em")(725,"strong"),Ux(726,"(opcional)"),ng()(),wl(727,"p"),Ux(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),ng(),wl(729,"p"),Ux(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),wl(731,"code"),Ux(732,"string"),ng(),Ux(733," com o texto informado no campo."),ng(),wl(734,"blockquote")(735,"p"),Ux(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),wl(737,"code"),Ux(738,"p-authentication-url"),ng(),Ux(739,"."),ng()()()(),wl(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),Ux(744," p-login-errors"),Ul(745,"br"),ng()()(),wl(746,"td",17)(747,"code",31),Ux(748,"string[]"),ng()(),wl(749,"td",19),Ux(750,"-"),ng(),wl(751,"td",20)(752,"em")(753,"strong"),Ux(754,"(opcional)"),ng()(),wl(755,"p"),Ux(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),ng()()(),wl(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),Ux(761," p-login-pattern"),Ul(762,"br"),ng()()(),wl(763,"td",17)(764,"code",21),Ux(765,"string"),ng()(),wl(766,"td",19),Ux(767,"-"),ng(),wl(768,"td",20)(769,"em")(770,"strong"),Ux(771,"(opcional)"),ng()(),wl(772,"p"),Ux(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),wl(774,"code"),Ux(775,"loginErrorPattern"),ng(),Ux(776,`
ser\xE1 exibida.`),ng(),wl(777,"p"),Ux(778,"Exemplos de valores v\xE1lidos:"),ng(),wl(779,"ul")(780,"li"),Ux(781,"email: "),wl(782,"code"),Ux(783,"[expressao-regular-email]"),ng()(),wl(784,"li"),Ux(785,"cpf: "),wl(786,"code"),Ux(787,"[expressao-regular-cpf]"),ng()()(),wl(788,"blockquote")(789,"p"),Ux(790,"Veja a propriedade "),wl(791,"code"),Ux(792,"p-literals"),ng(),Ux(793," para customizar a literal "),wl(794,"code"),Ux(795,"loginErrorPattern"),ng(),Ux(796,"."),ng()()()(),wl(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),Ux(801," (p-login-submit)"),Ul(802,"br"),ng()()(),wl(803,"td",17)(804,"code",28),Ux(805,"EventEmitter"),ng()(),wl(806,"td",19),Ux(807,"-"),ng(),wl(808,"td",20)(809,"p"),Ux(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),wl(811,"code"),Ux(812,"Enter"),ng(),Ux(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),ng(),wl(814,"p"),Ux(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),wl(816,"code"),Ux(817,"PoPageLogin"),ng(),Ux(818," com os dados informados no formul\xE1rio."),ng(),wl(819,"blockquote")(820,"p"),Ux(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),wl(822,"code"),Ux(823,"p-url-recovery"),ng(),Ux(824,"."),ng()(),wl(825,"blockquote")(826,"p"),Ux(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),wl(828,"code"),Ux(829,"PoPageLogin"),ng(),Ux(830," mais abaixo."),ng()()()(),wl(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),Ux(835," p-logo"),Ul(836,"br"),ng()()(),wl(837,"td",17)(838,"code",21),Ux(839,"string"),ng()(),wl(840,"td",19),Ux(841,"-"),ng(),wl(842,"td",20)(843,"em")(844,"strong"),Ux(845,"(opcional)"),ng()(),wl(846,"p"),Ux(847,"Caminho para a logomarca localizada na parte superior."),ng(),wl(848,"blockquote")(849,"p"),Ux(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),ng()()()(),wl(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),Ux(855," p-no-autocomplete-login"),Ul(856,"br"),ng()()(),wl(857,"td",17)(858,"code",25),Ux(859,"boolean"),ng()(),wl(860,"td",19)(861,"p")(862,"code"),Ux(863,"true"),ng()()(),wl(864,"td",20)(865,"em")(866,"strong"),Ux(867,"(opcional)"),ng()(),wl(868,"p"),Ux(869,"Define a propriedade nativa "),wl(870,"code"),Ux(871,"autocomplete"),ng(),Ux(872," do campo como "),wl(873,"code"),Ux(874,"off"),ng(),Ux(875,"."),ng()()(),wl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),Ux(880," p-no-autocomplete-password"),Ul(881,"br"),ng()()(),wl(882,"td",17)(883,"code",25),Ux(884,"boolean"),ng()(),wl(885,"td",19)(886,"p")(887,"code"),Ux(888,"true"),ng()()(),wl(889,"td",20)(890,"em")(891,"strong"),Ux(892,"(opcional)"),ng()(),wl(893,"p"),Ux(894,"Define a propriedade nativa "),wl(895,"code"),Ux(896,"autocomplete"),ng(),Ux(897," do campo como "),wl(898,"code"),Ux(899,"off"),ng(),Ux(900,"."),ng(),wl(901,"blockquote")(902,"p"),Ux(903,"No componente "),wl(904,"code"),Ux(905,"po-password"),ng(),Ux(906," ser\xE1 definido como "),wl(907,"code"),Ux(908,"new-password"),ng(),Ux(909,"."),ng()()()(),wl(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),Ux(914," (p-password-change)"),Ul(915,"br"),ng()()(),wl(916,"td",17)(917,"code",28),Ux(918,"EventEmitter"),ng()(),wl(919,"td",19),Ux(920,"-"),ng(),wl(921,"td",20)(922,"em")(923,"strong"),Ux(924,"(opcional)"),ng()(),wl(925,"p"),Ux(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),ng(),wl(927,"p"),Ux(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),wl(929,"code"),Ux(930,"string"),ng(),Ux(931," com o texto informado no campo."),ng(),wl(932,"blockquote")(933,"p"),Ux(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),wl(935,"code"),Ux(936,"p-authentication-url"),ng(),Ux(937,"."),ng()()()(),wl(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),Ux(942," p-password-errors"),Ul(943,"br"),ng()()(),wl(944,"td",17)(945,"code",31),Ux(946,"string[]"),ng()(),wl(947,"td",19),Ux(948,"-"),ng(),wl(949,"td",20)(950,"em")(951,"strong"),Ux(952,"(opcional)"),ng()(),wl(953,"p"),Ux(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),ng()()(),wl(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),Ux(959," p-password-pattern"),Ul(960,"br"),ng()()(),wl(961,"td",17)(962,"code",21),Ux(963,"string"),ng()(),wl(964,"td",19),Ux(965,"-"),ng(),wl(966,"td",20)(967,"em")(968,"strong"),Ux(969,"(opcional)"),ng()(),wl(970,"p"),Ux(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),wl(972,"code"),Ux(973,"passwordErrorPattern"),ng(),Ux(974,`
ser\xE1 exibida.`),ng(),wl(975,"p"),Ux(976,"Exemplos de valores v\xE1lidos:"),ng(),wl(977,"ul")(978,"li"),Ux(979,"Apenas n\xFAmeros: "),wl(980,"code"),Ux(981,"\\d?"),ng()(),wl(982,"li"),Ux(983,"Letras m\xEDnusculas: "),wl(984,"code"),Ux(985,"\\z?"),ng()()(),wl(986,"blockquote")(987,"p"),Ux(988,"Veja a propriedade "),wl(989,"code"),Ux(990,"p-literals"),ng(),Ux(991," para customizar a literal "),wl(992,"code"),Ux(993,"passwordErrorPattern"),ng(),Ux(994,"."),ng()()()(),wl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),Ux(999," p-product-name"),Ul(1e3,"br"),ng()()(),wl(1001,"td",17)(1002,"code",21),Ux(1003,"string"),ng()(),wl(1004,"td",19),Ux(1005,"-"),ng(),wl(1006,"td",20)(1007,"em")(1008,"strong"),Ux(1009,"(opcional)"),ng()(),wl(1010,"p"),Ux(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),ng()()(),wl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),Ux(1016," p-recovery"),Ul(1017,"br"),ng()()(),wl(1018,"td",17)(1019,"code",21),Ux(1020,"string "),ng(),wl(1021,"code",32),Ux(1022," Function "),ng(),wl(1023,"code",33),Ux(1024," PoPageLoginRecovery"),ng()(),wl(1025,"td",19),Ux(1026,"-"),ng(),wl(1027,"td",20)(1028,"em")(1029,"strong"),Ux(1030,"(opcional)"),ng()(),wl(1031,"p"),Ux(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),ng(),wl(1033,"p"),Ux(1034,"A propriedade aceita os seguintes tipos:"),ng(),wl(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),Ux(1039,"String"),ng(),Ux(1040,": informe uma url externa ou uma rota v\xE1lida;"),ng()(),wl(1041,"li")(1042,"p")(1043,"strong"),Ux(1044,"Function"),ng(),Ux(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),ng(),wl(1046,"pre")(1047,"code"),Ux(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),ng()()(),wl(1049,"li")(1050,"p")(1051,"strong"),Ux(1052,"PoPageLoginRecovery"),ng(),Ux(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),wl(1054,"strong"),Ux(1055,"po-modal-password-recovery"),ng(),Ux(1056,`.
O objeto deve conter a `),wl(1057,"strong"),Ux(1058,"url"),ng(),Ux(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),wl(1060,"strong"),Ux(1061,"tipo"),ng(),Ux(1062,` de modal para recupera\xE7\xE3o de senha,
`),wl(1063,"strong"),Ux(1064,"email"),ng(),Ux(1065," para contato e "),wl(1066,"strong"),Ux(1067,"m\xE1scara"),ng(),Ux(1068," do campo de telefone."),ng()()()()(),wl(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),Ux(1073," p-register-url"),Ul(1074,"br"),ng()()(),wl(1075,"td",17)(1076,"code",21),Ux(1077,"string"),ng()(),wl(1078,"td",19),Ux(1079,"-"),ng(),wl(1080,"td",20)(1081,"em")(1082,"strong"),Ux(1083,"(opcional)"),ng()(),wl(1084,"p"),Ux(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),ng(),wl(1086,"p"),Ux(1087,"Exemplos de valores v\xE1lidos:"),ng(),wl(1088,"ul")(1089,"li")(1090,"strong"),Ux(1091,"local"),ng(),Ux(1092,": "),wl(1093,"code"),Ux(1094,"/home"),ng()(),wl(1095,"li")(1096,"strong"),Ux(1097,"url externa"),ng(),Ux(1098,": "),wl(1099,"code"),Ux(1100,"https://po-ui.io"),ng()()(),wl(1101,"blockquote")(1102,"p"),Ux(1103,"Veja a propriedade "),wl(1104,"code"),Ux(1105,"p-literals"),ng(),Ux(1106," para customizar a literal "),wl(1107,"code"),Ux(1108,"registerUrl"),ng(),Ux(1109,"."),ng()()()(),wl(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),Ux(1114," p-secondary-logo"),Ul(1115,"br"),ng()()(),wl(1116,"td",17)(1117,"code",21),Ux(1118,"string"),ng()(),wl(1119,"td",19),Ux(1120,"-"),ng(),wl(1121,"td",20)(1122,"em")(1123,"strong"),Ux(1124,"(opcional)"),ng()(),wl(1125,"p"),Ux(1126,"Caminho para a logomarca localizada no rodap\xE9."),ng()()(),wl(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),Ux(1131," p-support"),Ul(1132,"br"),ng()()(),wl(1133,"td",17)(1134,"code",21),Ux(1135,"string "),ng(),wl(1136,"code",32),Ux(1137," Function"),ng()(),wl(1138,"td",19),Ux(1139,"-"),ng(),wl(1140,"td",20)(1141,"em")(1142,"strong"),Ux(1143,"(opcional)"),ng()(),wl(1144,"p"),Ux(1145,"Exibe um bot\xE3o para suporte."),ng(),wl(1146,"p"),Ux(1147,"A propriedade aceita os seguintes tipos:"),ng(),wl(1148,"ul")(1149,"li")(1150,"strong"),Ux(1151,"String"),ng(),Ux(1152,": URL externa ou uma rota v\xE1lida;"),ng(),wl(1153,"li")(1154,"strong"),Ux(1155,"Function"),ng(),Ux(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),wl(1157,"pre")(1158,"code"),Ux(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),ng()()()()()()(),wl(1160,"h3"),Ux(1161,"Interfaces"),ng(),wl(1162,"h4",34)(1163,"code",5),Ux(1164,"PoPageLoginCustomField"),ng()(),wl(1165,"div",2)(1166,"p"),Ux(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),wl(1168,"code"),Ux(1169,"po-page-login"),ng(),Ux(1170,"."),ng()(),wl(1171,"h4",9),Ux(1172,"Propriedades"),ng(),wl(1173,"table",10)(1174,"tr",11)(1175,"th",12),Ux(1176,"Nome"),ng(),wl(1177,"th",12),Ux(1178,"Tipo"),ng(),wl(1179,"th",12),Ux(1180,"Descri\xE7\xE3o"),ng()(),wl(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),Ux(1185," errorPattern"),Ul(1186,"br"),ng()()(),wl(1187,"td",17)(1188,"code",21),Ux(1189,"string"),ng()(),wl(1190,"td",20)(1191,"em")(1192,"strong"),Ux(1193,"(opcional)"),ng()(),wl(1194,"p"),Ux(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),wl(1196,"code"),Ux(1197,"pattern"),ng(),Ux(1198," n\xE3o for v\xE1lida."),ng()()(),wl(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),Ux(1203," fieldValue"),Ul(1204,"br"),ng()()(),wl(1205,"td",17)(1206,"code",21),Ux(1207,"string"),ng()(),wl(1208,"td",20)(1209,"em")(1210,"strong"),Ux(1211,"(opcional)"),ng()(),wl(1212,"p"),Ux(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),wl(1214,"code"),Ux(1215,"po-combo"),ng(),Ux(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),ng()()(),wl(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),Ux(1221," options"),Ul(1222,"br"),ng()()(),wl(1223,"td",17)(1224,"code",35),Ux(1225,"Array<PoSelectOption>"),ng()(),wl(1226,"td",20)(1227,"em")(1228,"strong"),Ux(1229,"(opcional)"),ng()(),wl(1230,"p"),Ux(1231,"Lista de op\xE7\xF5es de um "),wl(1232,"code"),Ux(1233,"po-select"),ng(),Ux(1234,"."),ng()()(),wl(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),Ux(1239," pattern"),Ul(1240,"br"),ng()()(),wl(1241,"td",17)(1242,"code",21),Ux(1243,"string"),ng()(),wl(1244,"td",20)(1245,"em")(1246,"strong"),Ux(1247,"(opcional)"),ng()(),wl(1248,"p"),Ux(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),wl(1250,"code"),Ux(1251,"errorPattern"),ng(),Ux(1252," ser\xE1 exibida."),ng()()(),wl(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),Ux(1257," placeholder"),Ul(1258,"br"),ng()()(),wl(1259,"td",17)(1260,"code",21),Ux(1261,"string"),ng()(),wl(1262,"td",20)(1263,"em")(1264,"strong"),Ux(1265,"(opcional)"),ng()(),wl(1266,"p"),Ux(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),ng()()(),wl(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),Ux(1272," property"),Ul(1273,"br"),ng()()(),wl(1274,"td",17)(1275,"code",21),Ux(1276,"string"),ng()(),wl(1277,"td",20)(1278,"p"),Ux(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),ng()()(),wl(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),Ux(1284," url"),Ul(1285,"br"),ng()()(),wl(1286,"td",17)(1287,"code",21),Ux(1288,"string"),ng()(),wl(1289,"td",20)(1290,"em")(1291,"strong"),Ux(1292,"(opcional)"),ng()(),wl(1293,"p"),Ux(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),wl(1295,"code"),Ux(1296,"po-combo"),ng(),Ux(1297,"."),ng()()(),wl(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),Ux(1302," value"),Ul(1303,"br"),ng()()(),wl(1304,"td",17)(1305,"code",21),Ux(1306,"string "),ng(),wl(1307,"code",24),Ux(1308," number"),ng()(),wl(1309,"td",20)(1310,"em")(1311,"strong"),Ux(1312,"(opcional)"),ng()(),wl(1313,"p"),Ux(1314,"Valor do campo customizado."),ng()()()(),wl(1315,"h4",34)(1316,"code",5),Ux(1317,"PoPageLoginLiterals"),ng()(),wl(1318,"div",2)(1319,"p"),Ux(1320,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1321,"code"),Ux(1322,"po-page-login"),ng(),Ux(1323,"."),ng()(),wl(1324,"h4",9),Ux(1325,"Propriedades"),ng(),wl(1326,"table",10)(1327,"tr",11)(1328,"th",12),Ux(1329,"Nome"),ng(),wl(1330,"th",12),Ux(1331,"Tipo"),ng(),wl(1332,"th",12),Ux(1333,"Descri\xE7\xE3o"),ng()(),wl(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),Ux(1338," attempts"),Ul(1339,"br"),ng()()(),wl(1340,"td",17)(1341,"code",21),Ux(1342,"string"),ng()(),wl(1343,"td",20)(1344,"em")(1345,"strong"),Ux(1346,"(opcional)"),ng()(),wl(1347,"p"),Ux(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),ng()()(),wl(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),Ux(1353," createANewPasswordNow"),Ul(1354,"br"),ng()()(),wl(1355,"td",17)(1356,"code",21),Ux(1357,"string"),ng()(),wl(1358,"td",20)(1359,"em")(1360,"strong"),Ux(1361,"(opcional)"),ng()(),wl(1362,"p"),Ux(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),ng()()(),wl(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),Ux(1368," customFieldErrorPattern"),Ul(1369,"br"),ng()()(),wl(1370,"td",17)(1371,"code",21),Ux(1372,"string"),ng()(),wl(1373,"td",20)(1374,"em")(1375,"strong"),Ux(1376,"(opcional)"),ng()(),wl(1377,"p"),Ux(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),ng()()(),wl(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),Ux(1383," customFieldPlaceholder"),Ul(1384,"br"),ng()()(),wl(1385,"td",17)(1386,"code",21),Ux(1387,"string"),ng()(),wl(1388,"td",20)(1389,"em")(1390,"strong"),Ux(1391,"(opcional)"),ng()(),wl(1392,"p"),Ux(1393,"Placeholder para o campo customizado."),ng()()(),wl(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),Ux(1398," forgotPassword"),Ul(1399,"br"),ng()()(),wl(1400,"td",17)(1401,"code",21),Ux(1402,"string"),ng()(),wl(1403,"td",20)(1404,"em")(1405,"strong"),Ux(1406,"(opcional)"),ng()(),wl(1407,"p"),Ux(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),ng()()(),wl(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),Ux(1413," forgotYourPassword"),Ul(1414,"br"),ng()()(),wl(1415,"td",17)(1416,"code",21),Ux(1417,"string"),ng()(),wl(1418,"td",20)(1419,"em")(1420,"strong"),Ux(1421,"(opcional)"),ng()(),wl(1422,"p"),Ux(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),ng()()(),wl(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),Ux(1428," highlightInfo"),Ul(1429,"br"),ng()()(),wl(1430,"td",17)(1431,"code",21),Ux(1432,"string"),ng()(),wl(1433,"td",20)(1434,"em")(1435,"strong"),Ux(1436,"(opcional)"),ng()(),wl(1437,"p"),Ux(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),wl(1439,"code"),Ux(1440,"p-background"),ng(),Ux(1441,"."),ng()()(),wl(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),Ux(1446," iForgotMyPassword"),Ul(1447,"br"),ng()()(),wl(1448,"td",17)(1449,"code",21),Ux(1450,"string"),ng()(),wl(1451,"td",20)(1452,"em")(1453,"strong"),Ux(1454,"(opcional)"),ng()(),wl(1455,"p"),Ux(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),ng()()(),wl(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),Ux(1461," ifYouTryHarder"),Ul(1462,"br"),ng()()(),wl(1463,"td",17)(1464,"code",21),Ux(1465,"string"),ng()(),wl(1466,"td",20)(1467,"em")(1468,"strong"),Ux(1469,"(opcional)"),ng()(),wl(1470,"p"),Ux(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),ng()()(),wl(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),Ux(1476," loginErrorPattern"),Ul(1477,"br"),ng()()(),wl(1478,"td",17)(1479,"code",21),Ux(1480,"string"),ng()(),wl(1481,"td",20)(1482,"em")(1483,"strong"),Ux(1484,"(opcional)"),ng()(),wl(1485,"p"),Ux(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),ng()()(),wl(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),Ux(1491," loginHint"),Ul(1492,"br"),ng()()(),wl(1493,"td",17)(1494,"code",21),Ux(1495,"string"),ng()(),wl(1496,"td",20)(1497,"em")(1498,"strong"),Ux(1499,"(opcional)"),ng()(),wl(1500,"p"),Ux(1501,"Texto exibido como dica para o campo de login."),ng()()(),wl(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),Ux(1506," loginLabel"),Ul(1507,"br"),ng()()(),wl(1508,"td",17)(1509,"code",21),Ux(1510,"string"),ng()(),wl(1511,"td",20)(1512,"em")(1513,"strong"),Ux(1514,"(opcional)"),ng()(),wl(1515,"p"),Ux(1516,"Texto exibido como label do campo de login."),ng()()(),wl(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),Ux(1521," loginPlaceholder"),Ul(1522,"br"),ng()()(),wl(1523,"td",17)(1524,"code",21),Ux(1525,"string"),ng()(),wl(1526,"td",20)(1527,"em")(1528,"strong"),Ux(1529,"(opcional)"),ng()(),wl(1530,"p"),Ux(1531,"Placeholder do campo de login."),ng()()(),wl(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),Ux(1536," passwordErrorPattern"),Ul(1537,"br"),ng()()(),wl(1538,"td",17)(1539,"code",21),Ux(1540,"string"),ng()(),wl(1541,"td",20)(1542,"em")(1543,"strong"),Ux(1544,"(opcional)"),ng()(),wl(1545,"p"),Ux(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),ng()()(),wl(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),Ux(1551," passwordLabel"),Ul(1552,"br"),ng()()(),wl(1553,"td",17)(1554,"code",21),Ux(1555,"string"),ng()(),wl(1556,"td",20)(1557,"em")(1558,"strong"),Ux(1559,"(opcional)"),ng()(),wl(1560,"p"),Ux(1561,"Texto exibido como label do campo de password."),ng()()(),wl(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),Ux(1566," passwordPlaceholder"),Ul(1567,"br"),ng()()(),wl(1568,"td",17)(1569,"code",21),Ux(1570,"string"),ng()(),wl(1571,"td",20)(1572,"em")(1573,"strong"),Ux(1574,"(opcional)"),ng()(),wl(1575,"p"),Ux(1576,"Placeholder do campo de password."),ng()()(),wl(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),Ux(1581," registerUrl"),Ul(1582,"br"),ng()()(),wl(1583,"td",17)(1584,"code",21),Ux(1585,"string"),ng()(),wl(1586,"td",20)(1587,"em")(1588,"strong"),Ux(1589,"(opcional)"),ng()(),wl(1590,"p"),Ux(1591,"Texto exibido no link de novo cadastro."),ng()()(),wl(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),Ux(1596," rememberUser"),Ul(1597,"br"),ng()()(),wl(1598,"td",17)(1599,"code",21),Ux(1600,"string"),ng()(),wl(1601,"td",20)(1602,"em")(1603,"strong"),Ux(1604,"(opcional)"),ng()(),wl(1605,"p"),Ux(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),ng()()(),wl(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),Ux(1611," rememberUserHint"),Ul(1612,"br"),ng()()(),wl(1613,"td",17)(1614,"code",21),Ux(1615,"string"),ng()(),wl(1616,"td",20)(1617,"em")(1618,"strong"),Ux(1619,"(opcional)"),ng()(),wl(1620,"p"),Ux(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),ng()()(),wl(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),Ux(1626," submitLabel"),Ul(1627,"br"),ng()()(),wl(1628,"td",17)(1629,"code",21),Ux(1630,"string"),ng()(),wl(1631,"td",20)(1632,"em")(1633,"strong"),Ux(1634,"(opcional)"),ng()(),wl(1635,"p"),Ux(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),ng()()(),wl(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),Ux(1641," submittedLabel"),Ul(1642,"br"),ng()()(),wl(1643,"td",17)(1644,"code",21),Ux(1645,"string"),ng()(),wl(1646,"td",20)(1647,"em")(1648,"strong"),Ux(1649,"(opcional)"),ng()(),wl(1650,"p"),Ux(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),ng()()(),wl(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),Ux(1656," support"),Ul(1657,"br"),ng()()(),wl(1658,"td",17)(1659,"code",21),Ux(1660,"string"),ng()(),wl(1661,"td",20)(1662,"em")(1663,"strong"),Ux(1664,"(opcional)"),ng()(),wl(1665,"p"),Ux(1666,"Label do bot\xE3o de suporte."),ng()()(),wl(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),Ux(1671," titlePopover"),Ul(1672,"br"),ng()()(),wl(1673,"td",17)(1674,"code",21),Ux(1675,"string"),ng()(),wl(1676,"td",20)(1677,"em")(1678,"strong"),Ux(1679,"(opcional)"),ng()(),wl(1680,"p"),Ux(1681,"T\xEDtulo do popover para aviso de bloqueio."),ng()()(),wl(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),Ux(1686," welcome"),Ul(1687,"br"),ng()()(),wl(1688,"td",17)(1689,"code",21),Ux(1690,"string"),ng()(),wl(1691,"td",20)(1692,"em")(1693,"strong"),Ux(1694,"(opcional)"),ng()(),wl(1695,"p"),Ux(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),ng()()(),wl(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),Ux(1701," yourUserWillBeBlocked"),Ul(1702,"br"),ng()()(),wl(1703,"td",17)(1704,"code",21),Ux(1705,"string"),ng()(),wl(1706,"td",20)(1707,"em")(1708,"strong"),Ux(1709,"(opcional)"),ng()(),wl(1710,"p"),Ux(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),ng()()()(),wl(1712,"h4",34)(1713,"code",5),Ux(1714,"PoPageLoginRecovery"),ng()(),wl(1715,"div",2)(1716,"p"),Ux(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),wl(1718,"code"),Ux(1719,"po-modal-password-recovery"),ng(),Ux(1720,"."),ng()(),wl(1721,"h4",9),Ux(1722,"Propriedades"),ng(),wl(1723,"table",10)(1724,"tr",11)(1725,"th",12),Ux(1726,"Nome"),ng(),wl(1727,"th",12),Ux(1728,"Tipo"),ng(),wl(1729,"th",12),Ux(1730,"Descri\xE7\xE3o"),ng()(),wl(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),Ux(1735," contactMail"),Ul(1736,"br"),ng()()(),wl(1737,"td",17)(1738,"code",21),Ux(1739,"string"),ng()(),wl(1740,"td",20)(1741,"em")(1742,"strong"),Ux(1743,"(opcional)"),ng()(),wl(1744,"p"),Ux(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),ng()()(),wl(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),Ux(1750," phoneMask"),Ul(1751,"br"),ng()()(),wl(1752,"td",17)(1753,"code",21),Ux(1754,"string"),ng()(),wl(1755,"td",20)(1756,"em")(1757,"strong"),Ux(1758,"(opcional)"),ng()(),wl(1759,"p"),Ux(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),ng()()(),wl(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),Ux(1765," type"),Ul(1766,"br"),ng()()(),wl(1767,"td",17)(1768,"code",36),Ux(1769,"PoModalPasswordRecoveryType"),ng()(),wl(1770,"td",20)(1771,"em")(1772,"strong"),Ux(1773,"(opcional)"),ng()(),wl(1774,"p"),Ux(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),wl(1776,"a",37),Ux(1777,"PoModalPasswordRecoveryType"),ng(),Ux(1778,"."),ng(),wl(1779,"blockquote")(1780,"p"),Ux(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),wl(1782,"code"),Ux(1783,"PoModalPasswordRecoveryType.Email"),ng(),Ux(1784,"."),ng()()()(),wl(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),Ux(1789," url"),Ul(1790,"br"),ng()()(),wl(1791,"td",17)(1792,"code",21),Ux(1793,"string"),ng()(),wl(1794,"td",20)(1795,"p"),Ux(1796,"Endpoint usado pelo template "),wl(1797,"strong"),Ux(1798,"PoModalPasswordRecovery"),ng(),Ux(1799," para requisi\xE7\xE3o do recurso."),ng(),wl(1800,"blockquote")(1801,"p"),Ux(1802,"Saiba mais em "),wl(1803,"a",37),Ux(1804,"PoModalPasswordRecovery"),ng(),Ux(1805,"."),ng()()()()(),wl(1806,"h4",34)(1807,"code",5),Ux(1808,"PoPageLogin"),ng()(),wl(1809,"div",2)(1810,"p"),Ux(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),wl(1812,"code"),Ux(1813,"po-page-login"),ng(),Ux(1814,"."),ng()(),wl(1815,"h4",9),Ux(1816,"Propriedades"),ng(),wl(1817,"table",10)(1818,"tr",11)(1819,"th",12),Ux(1820,"Nome"),ng(),wl(1821,"th",12),Ux(1822,"Tipo"),ng(),wl(1823,"th",12),Ux(1824,"Descri\xE7\xE3o"),ng()(),wl(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),Ux(1829," login"),Ul(1830,"br"),ng()()(),wl(1831,"td",17)(1832,"code",21),Ux(1833,"string"),ng()(),wl(1834,"td",20)(1835,"p"),Ux(1836,"Login preenchido pelo usu\xE1rio."),ng()()(),wl(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),Ux(1841," password"),Ul(1842,"br"),ng()()(),wl(1843,"td",17)(1844,"code",21),Ux(1845,"string"),ng()(),wl(1846,"td",20)(1847,"p"),Ux(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),ng()()(),wl(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),Ux(1853," rememberUser"),Ul(1854,"br"),ng()()(),wl(1855,"td",17)(1856,"code",25),Ux(1857,"boolean"),ng()(),wl(1858,"td",20)(1859,"p"),Ux(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),ng()()()(),wl(1861,"h3"),Ux(1862,"Enums"),ng(),wl(1863,"h4",4)(1864,"code",5),Ux(1865,"PoPageLoginAuthenticationType"),ng()(),wl(1866,"div",2)(1867,"p")(1868,"em"),Ux(1869,"Enum"),ng(),Ux(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),ng()(),wl(1871,"h4",9),Ux(1872,"Propriedades"),ng(),wl(1873,"table",10)(1874,"tr",11)(1875,"th",12),Ux(1876,"Nome"),ng(),wl(1877,"th",12),Ux(1878,"Descri\xE7\xE3o"),ng()(),wl(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),Ux(1883," Basic"),Ul(1884,"br"),ng()()(),wl(1885,"td",20)(1886,"p"),Ux(1887,"Autentica\xE7\xE3o Basic"),ng()()(),wl(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),Ux(1892," Bearer"),Ul(1893,"br"),ng()()(),wl(1894,"td",20)(1895,"p"),Ux(1896,"Autentica\xE7\xE3o Bearer"),ng()()()()());},dependencies:[fP],encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(C(Xn),C(Cn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-page-login-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ge,Se,xe,ve,Pe],encapsulation:2})}return r})();var je=[{path:"",component:fe}],Ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[vL.forChild(je),vL]})}return r})();var At=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe$1({type:r});static \u0275inj=ue({imports:[u5,Ce]})}return r})();export{At as DocPoPageLoginModule};