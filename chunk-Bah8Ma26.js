import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,c9 as Qde,cq as N3,ca as U,r as r$1,cg as Rr,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,aI as gc,cd as sme,cf as Tr,aq as ix,at as ox,a3 as SNe,aD as Jy,aA as Ex,aE as e_,aT as Zx}from'./main-OS7VVRJY.js';var ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic"]],standalone:false,decls:1,vars:0,template:function(l,i){l&1&&Hl(0,"po-page-login");},dependencies:[Rr],encapsulation:2,changeDetection:1})}return r})();var ye=r=>({"docs-sample-code-tabs":r}),ce=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Login Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-login-basic/sample-po-page-login-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-login></po-page-login>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-login-basic/sample-po-page-login-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-login-basic',
  templateUrl: './sample-po-page-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageLoginBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-login-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return r})();var ge=(()=>{class r{poDialog=f(Qde);background;componentsSize;contactEmail;customField;customFieldOption;customFieldOptions;customLiterals;environment;exceededAttempts;secondaryLogo;literals;login;loginPattern;loginError;loginErrors;logo;passwordError;passwordErrors;passwordPattern;productName;properties;recovery;registerUrl;support;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"hideRememberUser",label:"Hide remember user"},{value:"loading",label:"Loading"}];ngOnInit(){this.restore();}addCustomFieldOption(){this.customFieldOptions.push({label:this.customFieldOption.label,value:this.customFieldOption.value}),this.customField.options=this.customFieldOptions,this.onChangeCustomProperties(),this.customFieldOption={};}addLoginError(){this.loginErrors.push(this.loginError),this.loginError="";}addPasswordError(){this.passwordErrors.push(this.passwordError),this.passwordError="";}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(p){this.customLiterals=void 0;}}loginSubmit(p){this.exceededAttempts<=0&&this.poDialog.alert({title:"Authenticate",message:JSON.stringify(p),componentsSize:this.componentsSize});}onChangeCustomProperties(){this.customField=Object.assign({},this.customField);}restore(){this.properties=[],this.background="",this.componentsSize="medium",this.contactEmail="",this.customField={property:void 0},this.customFieldOption={label:void 0,value:void 0},this.customFieldOptions=[],this.customLiterals=void 0,this.environment="",this.exceededAttempts=0,this.secondaryLogo=void 0,this.literals="",this.login="",this.loginPattern="",this.loginError="",this.loginErrors=[],this.logo=void 0,this.passwordError="",this.passwordErrors=[],this.passwordPattern="",this.passwordError="",this.passwordErrors=[],this.productName="",this.recovery="",this.registerUrl="",this.support="";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs"]],standalone:false,decls:60,vars:50,consts:[["f","ngForm"],["formCustomFieldOptions","ngForm"],[3,"p-login-submit","p-background","p-components-size","p-contact-email","p-custom-field","p-environment","p-exceeded-attempts-warning","p-hide-remember-user","p-loading","p-literals","p-login","p-login-errors","p-login-pattern","p-logo","p-password-errors","p-password-pattern","p-product-name","p-recovery","p-register-url","p-secondary-logo","p-support"],[1,"po-row"],["name","literals","p-help",'Ex.: {"submitLabel":"Access System", "highlightInfo": "Awesome, PO is beautiful!!!"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","productName","p-clean","","p-help","A custom name that succeeds the title","p-label","Product Name",1,"po-md-6",3,"ngModelChange","ngModel"],["name","loginPattern","p-clean","","p-help","Ex.: ^[a-zA-Z]*$ (Only letters)","p-label","Login Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","login","p-clean","","p-help","Ex.: podev","p-label","Login",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","exceededAttempts","p-clean","","p-help","Ex.: 5","p-label","Exceeded Attempts Warning",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","passwordPattern","p-clean","","p-help","Ex.: ^(\\d*)$ (Only numbers)","p-label","Password Pattern",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","contactMail","p-clean","","p-label","Contact Email",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","environment","p-clean","","p-label","Environment",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","background","p-clean","","p-label","Background",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","support","p-clean","","p-label","Support",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","recovery","p-clean","","p-label","Recovery",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","registerUrl","p-clean","","p-label","Register URL",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Login Errors"],["name","loginError","p-clean","","p-label","Login Error",1,"po-md-8",3,"ngModelChange","ngModel"],["p-label","Add Login Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Password Errors"],["name","passwordError","p-clean","","p-label","Password Error",1,"po-lg-8",3,"ngModelChange","ngModel"],["p-label","Add Password Error",1,"po-md-4","po-mt-4",3,"p-click"],["p-label","Custom Field"],["name","customFieldProperty","p-clean","","p-help","Ex.: domain","p-label","Custom Field Property",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldValue","p-clean","","p-help","Ex.: JV01","p-label","Custom Field Value",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","customFieldPlaceholder","p-clean","","p-help","Ex.: Enter your domain","p-label","Custom Field Placeholder",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldPattern","p-clean","","p-help","Ex.: [a-z]","p-label","Custom Field Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldErrorPattern","p-clean","","p-help","Ex.: Value doesn`t match expected","p-label","Custom Field Error Pattern",1,"po-lg-4",3,"ngModelChange","ngModel"],["name","customFieldComboUrl","p-clean","","p-help","Ex.: https://po-sample-api.onrender.com/v1/heroes","p-label","Custom Field URL",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldComboValue","p-clean","","p-help","Property to specify the return field. Ex.: value, nickname, label","p-label","Custom Field Field Value",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","customFieldOptionLabel","p-clean","","p-label","Custom Field Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","customFieldOptionValue","p-clean","","p-label","Custom Field Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Custom Field Option",1,"po-md-6","po-lg-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=gx();Cl(0,"po-page-login",2),dt("p-login-submit",function(a){return i.loginSubmit(a)}),og(),Hl(1,"po-divider"),Cl(2,"form",null,0)(4,"div",3)(5,"po-input",4),gw("ngModelChange",function(a){return Jy(d),Zx(i.literals,a)||(i.literals=a),e_(a)}),dt("p-change",function(){return i.changeLiterals()}),og(),Z0(),Cl(6,"po-input",5),gw("ngModelChange",function(a){return Jy(d),Zx(i.productName,a)||(i.productName=a),e_(a)}),og(),Z0(),og(),Cl(7,"div",3)(8,"po-input",6),gw("ngModelChange",function(a){return Jy(d),Zx(i.loginPattern,a)||(i.loginPattern=a),e_(a)}),og(),Z0(),Cl(9,"po-input",7),gw("ngModelChange",function(a){return Jy(d),Zx(i.login,a)||(i.login=a),e_(a)}),og(),Z0(),og(),Cl(10,"div",3)(11,"po-input",8),gw("ngModelChange",function(a){return Jy(d),Zx(i.exceededAttempts,a)||(i.exceededAttempts=a),e_(a)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(a){return Jy(d),Zx(i.passwordPattern,a)||(i.passwordPattern=a),e_(a)}),og(),Z0(),og(),Cl(13,"div",3)(14,"po-input",10),gw("ngModelChange",function(a){return Jy(d),Zx(i.contactEmail,a)||(i.contactEmail=a),e_(a)}),og(),Z0(),Cl(15,"po-input",11),gw("ngModelChange",function(a){return Jy(d),Zx(i.environment,a)||(i.environment=a),e_(a)}),og(),Z0(),og(),Cl(16,"div",3)(17,"po-input",12),gw("ngModelChange",function(a){return Jy(d),Zx(i.logo,a)||(i.logo=a),e_(a)}),og(),Z0(),Cl(18,"po-input",13),gw("ngModelChange",function(a){return Jy(d),Zx(i.secondaryLogo,a)||(i.secondaryLogo=a),e_(a)}),og(),Z0(),og(),Cl(19,"div",3)(20,"po-input",14),gw("ngModelChange",function(a){return Jy(d),Zx(i.background,a)||(i.background=a),e_(a)}),og(),Z0(),Cl(21,"po-input",15),gw("ngModelChange",function(a){return Jy(d),Zx(i.support,a)||(i.support=a),e_(a)}),og(),Z0(),og(),Cl(22,"div",3)(23,"po-input",16),gw("ngModelChange",function(a){return Jy(d),Zx(i.recovery,a)||(i.recovery=a),e_(a)}),og(),Z0(),Cl(24,"po-input",17),gw("ngModelChange",function(a){return Jy(d),Zx(i.registerUrl,a)||(i.registerUrl=a),e_(a)}),og(),Z0(),og(),Cl(25,"div",3)(26,"po-checkbox-group",18),gw("ngModelChange",function(a){return Jy(d),Zx(i.properties,a)||(i.properties=a),e_(a)}),og(),Z0(),Cl(27,"po-radio-group",19),gw("ngModelChange",function(a){return Jy(d),Zx(i.componentsSize,a)||(i.componentsSize=a),e_(a)}),og(),Z0(),og(),Hl(28,"po-divider",20),Cl(29,"div",3)(30,"po-input",21),gw("ngModelChange",function(a){return Jy(d),Zx(i.loginError,a)||(i.loginError=a),e_(a)}),og(),Z0(),Cl(31,"po-button",22),dt("p-click",function(){return i.addLoginError()}),og()(),Hl(32,"po-divider",23),Cl(33,"div",3)(34,"po-input",24),gw("ngModelChange",function(a){return Jy(d),Zx(i.passwordError,a)||(i.passwordError=a),e_(a)}),og(),Z0(),Cl(35,"po-button",25),dt("p-click",function(){return i.addPasswordError()}),og()(),Hl(36,"po-divider",26),Cl(37,"div",3)(38,"po-input",27),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.property,a)||(i.customField.property=a),e_(a)}),dt("p-change-model",function(){return i.onChangeCustomProperties()}),og(),Z0(),Cl(39,"po-input",28),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.value,a)||(i.customField.value=a),e_(a)}),og(),Z0(),og(),Cl(40,"div",3)(41,"po-input",29),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.placeholder,a)||(i.customField.placeholder=a),e_(a)}),og(),Z0(),Cl(42,"po-input",30),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.pattern,a)||(i.customField.pattern=a),e_(a)}),og(),Z0(),Cl(43,"po-input",31),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.errorPattern,a)||(i.customField.errorPattern=a),e_(a)}),og(),Z0(),og(),Hl(44,"po-divider"),Cl(45,"div",3)(46,"po-input",32),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.url,a)||(i.customField.url=a),e_(a)}),dt("p-change-model",function(){return i.onChangeCustomProperties()}),og(),Z0(),Cl(47,"po-input",33),gw("ngModelChange",function(a){return Jy(d),Zx(i.customField.fieldValue,a)||(i.customField.fieldValue=a),e_(a)}),dt("p-change-model",function(){return i.onChangeCustomProperties()}),og(),Z0(),og(),Hl(48,"po-divider"),Cl(49,"form",null,1)(51,"div",3)(52,"po-input",34),gw("ngModelChange",function(a){return Jy(d),Zx(i.customFieldOption.label,a)||(i.customFieldOption.label=a),e_(a)}),og(),Z0(),Cl(53,"po-input",35),gw("ngModelChange",function(a){return Jy(d),Zx(i.customFieldOption.value,a)||(i.customFieldOption.value=a),e_(a)}),og(),Z0(),og(),Cl(54,"div",3)(55,"po-button",36),dt("p-click",function(){return i.addCustomFieldOption()}),og()()(),Hl(56,"br")(57,"po-divider"),Cl(58,"div",3)(59,"po-button",37),dt("p-click",function(){return i.restore()}),og()()();}if(l&2){let d=Sx(50);ZE("p-background",i.background)("p-components-size",i.componentsSize)("p-contact-email",i.contactEmail)("p-custom-field",i.customField)("p-environment",i.environment)("p-exceeded-attempts-warning",i.exceededAttempts)("p-hide-remember-user",i.properties.includes("hideRememberUser"))("p-loading",i.properties.includes("loading"))("p-literals",i.customLiterals)("p-login",i.login)("p-login-errors",i.loginErrors)("p-login-pattern",i.loginPattern)("p-logo",i.logo)("p-password-errors",i.passwordErrors)("p-password-pattern",i.passwordPattern)("p-product-name",i.productName)("p-recovery",i.recovery)("p-register-url",i.registerUrl)("p-secondary-logo",i.secondaryLogo)("p-support",i.support),Lp(5),pw("ngModel",i.literals),X0(),Lp(),pw("ngModel",i.productName),X0(),Lp(2),pw("ngModel",i.loginPattern),X0(),Lp(),pw("ngModel",i.login),X0(),Lp(2),pw("ngModel",i.exceededAttempts),X0(),Lp(),pw("ngModel",i.passwordPattern),X0(),Lp(2),pw("ngModel",i.contactEmail),X0(),Lp(),pw("ngModel",i.environment),X0(),Lp(2),pw("ngModel",i.logo),X0(),Lp(),pw("ngModel",i.secondaryLogo),X0(),Lp(2),pw("ngModel",i.background),X0(),Lp(),pw("ngModel",i.support),X0(),Lp(2),pw("ngModel",i.recovery),X0(),Lp(),pw("ngModel",i.registerUrl),X0(),Lp(2),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.componentsSize),ZE("p-options",i.componentsSizeOptions),X0(),Lp(3),pw("ngModel",i.loginError),X0(),Lp(4),pw("ngModel",i.passwordError),X0(),Lp(4),pw("ngModel",i.customField.property),X0(),Lp(),pw("ngModel",i.customField.value),X0(),Lp(2),pw("ngModel",i.customField.placeholder),X0(),Lp(),pw("ngModel",i.customField.pattern),X0(),Lp(),pw("ngModel",i.customField.errorPattern),X0(),Lp(3),pw("ngModel",i.customField.url),X0(),Lp(),pw("ngModel",i.customField.fieldValue),X0(),Lp(5),pw("ngModel",i.customFieldOption.label),X0(),Lp(),pw("ngModel",i.customFieldOption.value),X0(),Lp(2),ZE("p-disabled",d.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,Rr],encapsulation:2,changeDetection:1})}return r})();var Me=r=>({"docs-sample-code-tabs":r}),Ee=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Login Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-login-labs/sample-po-page-login-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-login
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-login-labs/sample-po-page-login-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-login-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return r})();function Te(r,fe){if(r&1){let p=gx();Cl(0,"po-page-login",6),dt("p-login-change",function(){Jy(p);let i=Ex();return e_(i.loginChange())})("p-login-submit",function(i){Jy(p);let d=Ex();return e_(d.checkLogin(i))})("p-password-change",function(){Jy(p);let i=Ex();return e_(i.passwordChange())}),og();}if(r&2){let p=Ex();ZE("p-custom-field",p.customField)("p-exceeded-attempts-warning",p.exceededAttempts)("p-literals",p.literalsI18n)("p-loading",p.loading)("p-password-errors",p.passwordErrors)("p-login-errors",p.loginErrors)("p-recovery",p.passwordRecovery);}}function ke(r,fe){if(r&1&&Hl(0,"po-page-blocked-user",5),r&2){let p=Ex();ZE("p-params",p.params);}}var Se=(()=>{class r{poI18nService=f(N3);poDialog=f(Qde);customField={property:"domain",placeholder:"Enter your domain"};attempts=3;exceededAttempts;literalsI18n;loading=false;loginErrors=[];passwordErrors=[];params={attempts:3,hours:24};passwordRecovery={url:"https://po-sample-api.onrender.com/v1/users",type:U.All,contactMail:"support@mail.com"};showPageBlocked=false;i18nSubscription;ngOnDestroy(){this.i18nSubscription.unsubscribe();}ngOnInit(){this.i18nSubscription=this.poI18nService.getLiterals().subscribe(p=>{this.literalsI18n=p,this.exceededAttempts=0;});}checkLogin(p){this.loading=true,p.login==="devpo"&&p.password==="1986"?(this.passwordErrors=[],this.exceededAttempts=0,this.loginErrors=[],setTimeout(()=>{this.poDialog.alert({ok:()=>this.loading=false,title:"Access released",message:"You are on vacation, take time to rest."});},3e3)):(this.loading=false,this.generateAttempts(),this.passwordErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."],this.loginErrors=["Senha e/ou usu\xE1rio inv\xE1lido, verifique e tente novamente."]);}passwordChange(){this.passwordErrors.length&&(this.passwordErrors=[]);}loginChange(){this.loginErrors.length&&(this.loginErrors=[]);}generateAttempts(){this.attempts>=1&&(this.attempts--,this.exceededAttempts=this.attempts),this.attempts===0&&(this.showPageBlocked=true);}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources"]],standalone:false,decls:7,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your ID Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your ID Sample SMS Code","p-value","999999",1,"po-md-2"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-url-back","https://po-ui.io/documentation/po-page-login",3,"p-params"],["p-hide-remember-user","","p-login-pattern","^[a-zA-Z]*$","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-password-pattern","^(\\d*)$","p-product-name","Human Resources","p-register-url","http://po.com","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-change","p-login-submit","p-password-change","p-custom-field","p-exceeded-attempts-warning","p-literals","p-loading","p-password-errors","p-login-errors","p-recovery"]],template:function(l,i){l&1&&(Cl(0,"po-container")(1,"div",0),Hl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),ix(5,Te,1,7,"po-page-login",4),ix(6,ke,1,1,"po-page-blocked-user",5)),l&2&&(Lp(5),ox(i.showPageBlocked?-1:5),Lp(),ox(i.showPageBlocked?6:-1));},dependencies:[gc,sme,Tr,Rr],encapsulation:2,changeDetection:1})}return r})();var Ae=r=>({"docs-sample-code-tabs":r}),he=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-human-resources-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Login - Human Resources"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-page-login-human-resources/sample-po-page-login-human-resources.module.ts"),og(),Cl(23,"pre",9),qx(24,`/**
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-page-login-human-resources"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ae,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return r})();var xe=(()=>{class r{literals;japoneseLiterals={welcome:"\u3088\u3046\u3053\u305D",loginLabel:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",loginPlaceholder:"\u30A2\u30AF\u30BB\u30B9\u30E6\u30FC\u30B6\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordErrorPattern:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u5FC5\u8981",passwordLabel:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",passwordPlaceholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",submitLabel:"\u30A2\u30AF\u30BB\u30B9\u30B7\u30B9\u30C6\u30E0",submittedLabel:"\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D ...",rememberUser:"\u81EA\u52D5\u7684\u306B\u30ED\u30B0\u30A4\u30F3",rememberUserHint:"\u3053\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u30B7\u30B9\u30C6\u30E0\u30E1\u30CB\u30E5\u30FC\u3067\u7121\u52B9\u306B\u3067\u304D\u307E\u3059",loginHint:`\u30E6\u30FC\u30B6\u30FC\u306F\u6700\u521D\u306E\u65E5\u306B\u3042\u306A\u305F\u306B\u914D\u9054\u3055\u308C\u307E\u3057\u305F\u3002
    \u3053\u306E\u60C5\u5831\u3092\u7D1B\u5931\u3057\u305F\u5834\u5408\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044`};languages=[{language:"pt",description:"Portugu\xEAs"},{language:"jp",description:"\u65E5\u672C\u8A9E"}];changeLanguage(p){p?.language==="jp"?this.literals=r$1({},this.japoneseLiterals):this.literals={};}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service"]],standalone:false,decls:5,vars:2,consts:[[1,"po-row"],["p-label","Forgot your ID Sample Login","p-value","admin",1,"po-md-2"],["p-label","Forgot your ID Sample Password","p-value","admin",1,"po-md-2"],["p-authentication-url","https://po-sample-api.onrender.com/v1/users/authentication","p-blocked-url","/documentation/po-page-blocked-user","p-authentication-type","Bearer","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-language-change","p-languages","p-literals"]],template:function(l,i){l&1&&(Cl(0,"po-container")(1,"div",0),Hl(2,"po-info",1)(3,"po-info",2),og()(),Cl(4,"po-page-login",3),dt("p-language-change",function(m){return i.changeLanguage(m)}),og()),l&2&&(Lp(4),ZE("p-languages",i.languages)("p-literals",i.literals));},dependencies:[gc,sme,Rr],encapsulation:2,changeDetection:1})}return r})();var Be=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-automatic-service-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Login - Automatic Service"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-login-automatic-service/sample-po-page-login-automatic-service.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-login-automatic-service"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return r})();var ve=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-page-login-doc"]],standalone:false,decls:1897,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageLoginAuthenticationType"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageLoginCustomField"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoLanguage>"],["pan","",1,"docs-api-property-type","PoPageLoginLiterals"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageLoginRecovery"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageLoginModule } from '@po-ui/ng-templates';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do template do po-page-login."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoPageLoginComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-page-login"),og(),qx(17,` \xE9 utilizado como template para tela de login.
Com ele \xE9 poss\xEDvel definirmos valores para usu\xE1rio, senha e definir a\xE7\xF5es para recupera\xE7\xE3o de senha e grava\xE7\xE3o de dados do usu\xE1rio.
Tamb\xE9m \xE9 poss\xEDvel inserir uma imagem em conjunto com um texto de destaque.`),og(),Cl(18,"p"),qx(19,"A propriedade "),Cl(20,"code"),qx(21,"p-authentication-url"),og(),qx(22,` automatiza a rotina do componente e simplifica o processo para autentica\xE7\xE3o do usu\xE1rio, bastando
definir uma url para requisi\xE7\xE3o da autentica\xE7\xE3o. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o desenvolvimento
da aplica\xE7\xE3o no `),Cl(23,"em"),qx(24,"client side"),og(),qx(25,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de login de usu\xE1rio.
Seu detalhamento para uso pode ser visto logo abaixo em `),Cl(26,"em"),qx(27,"propriedades"),og(),qx(28,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Cl(29,"p"),qx(30,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Cl(31,"em"),qx(32,"assets"),og(),qx(33," no arquivo "),Cl(34,"strong"),qx(35,"angular.json"),og(),qx(36," da aplica\xE7\xE3o na seguinte ordem:"),og(),Cl(37,"pre")(38,"code"),qx(39,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Cl(40,"div",6)(41,"h4",7),qx(42,"Seletor"),og(),Cl(43,"pre",8),qx(44,`<po-page-login
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
`),og()(),Cl(45,"h4",9),qx(46,"Propriedades"),og(),Cl(47,"table",10)(48,"tr",11)(49,"th",12),qx(50,"Nome"),og(),Cl(51,"th",12),qx(52,"Tipo"),og(),Cl(53,"th",12),qx(54,"Padr\xE3o"),og(),Cl(55,"th",12),qx(56,"Descri\xE7\xE3o"),og()(),Cl(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),qx(61," p-authentication-type"),Hl(62,"br"),og()()(),Cl(63,"td",17)(64,"code",18),qx(65,"PoPageLoginAuthenticationType"),og()(),Cl(66,"td",19)(67,"p")(68,"code"),qx(69,"PoPageLoginAuthenticationType.Basic"),og()()(),Cl(70,"td",20)(71,"em")(72,"strong"),qx(73,"(opcional)"),og()(),Cl(74,"p"),qx(75,"Atributo que recebe o tipo de esquema da autentica\xE7\xE3o, sendo suportados apenas os valores "),Cl(76,"code"),qx(77,"Basic"),og(),qx(78," e "),Cl(79,"code"),qx(80,"Bearer"),og(),qx(81,"."),og(),Cl(82,"blockquote")(83,"p"),qx(84,"Caso o tipo definido seja "),Cl(85,"code"),qx(86,"Basic"),og(),qx(87,", o componente far\xE1 uma requisi\xE7\xE3o "),Cl(88,"code"),qx(89,"POST"),og(),qx(90," contendo:"),og()(),Cl(91,"pre")(92,"code"),qx(93,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),og()(),Cl(94,"blockquote")(95,"p"),qx(96,"Caso o tipo definido seja "),Cl(97,"code"),qx(98,"Bearer"),og(),qx(99,", o componente far\xE1 uma requisi\xE7\xE3o "),Cl(100,"code"),qx(101,"POST"),og(),qx(102," contendo:"),og()(),Cl(103,"pre")(104,"code"),qx(105,`body {
 login: login,
 password: base64(password),
 rememberUser: rememberUser
}
`),og()()()(),Cl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),qx(110," p-authentication-url"),Hl(111,"br"),og()()(),Cl(112,"td",17)(113,"code",21),qx(114,"string"),og()(),Cl(115,"td",19),qx(116,"-"),og(),Cl(117,"td",20)(118,"em")(119,"strong"),qx(120,"(opcional)"),og()(),Cl(121,"p"),qx(122,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido, o m\xE9todo "),Cl(123,"code"),qx(124,"p-login-submit"),og(),qx(125,` ser\xE1 ignorado e o
componente adquirir\xE1 automatiza\xE7\xE3o para o processo de autentica\xE7\xE3o.`),og(),Cl(126,"h3"),qx(127,"Processos"),og(),Cl(128,"p"),qx(129,"Ao digitar um valor v\xE1lido no campo de login/password e pressionar "),Cl(130,"strong"),qx(131,"Enter"),og(),qx(132,", o componente far\xE1 uma requisi\xE7\xE3o "),Cl(133,"code"),qx(134,"POST"),og(),qx(135,`
na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio:`),og(),Cl(136,"pre")(137,"code"),qx(138,`headers {
 Authorization: Basic base64(login:password)
}

body {
 rememberUser: rememberUser
}
`),og()(),Cl(139,"p"),qx(140,"Em caso de "),Cl(141,"strong"),qx(142,"sucesso"),og(),qx(143,", o objeto de retorno \xE9 armazenado no "),Cl(144,"code"),qx(145,"sessionStorage"),og(),qx(146,` e o usu\xE1rio \xE9 redirecionado para a p\xE1gina inicial da
aplica\xE7\xE3o `),Cl(147,"code"),qx(148,"/"),og(),qx(149,"."),og(),Cl(150,"pre")(151,"code"),qx(152,`200:
{
  user: user
}
`),og()(),Cl(153,"p"),qx(154,"Em caso de "),Cl(155,"strong"),qx(156,"erro"),og(),qx(157," na autentica\xE7\xE3o, espera-se o seguinte retorno:"),og(),Cl(158,"pre")(159,"code"),qx(160,`400/401
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl
}
`),og()(),Cl(161,"blockquote")(162,"p"),qx(163,"Pode-se atribuir uma quantidade m\xE1xima de tentativas restantes (maxAttemptsRemaining) para o atributo "),Cl(164,"code"),qx(165,"p-exceeded-attempts-warning"),og(),qx(166,`,
assim como os avisos relacionados aos campos login e password (loginWarnings, passwordWarnings) para os atributos `),Cl(167,"code"),qx(168,"p-login-errors"),og(),qx(169,` e
`),Cl(170,"code"),qx(171,"p-password-errors"),og(),qx(172," conforme retorno abaixo:"),og()(),Cl(173,"pre")(174,"code"),qx(175,`400
{
  code: 400/401,
  message: message,
  detailedMessage: detailedMessage,
  helpUrl?: helpUrl,
  maxAttemptsRemaining?: maxAttemptsRemaining,
  loginWarnings?: [loginWarnings],
  passwordWarnings?: [passwordWarnings]
}
`),og()(),Cl(176,"blockquote")(177,"p"),qx(178,"Caso o valor atribu\xEDdo para "),Cl(179,"code"),qx(180,"p-exceeded-attempts-warning"),og(),qx(181,` seja igual a 0(zero), poder\xE1 ser passado um valor para o
atributo `),Cl(182,"code"),qx(183,"p-blocked-url"),og(),qx(184," e o usu\xE1rio ser\xE1 redirecionado para uma tela de bloqueio."),og()(),Cl(185,"p")(186,"em"),qx(187,"Processo finalizado."),og()(),Hl(188,"hr"),Cl(189,"h4"),qx(190,"Praticidade"),og(),Cl(191,"p"),qx(192,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Cl(193,"code"),qx(194,"po-page-login"),og(),qx(195,` no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template de tela de login pode ser gerado ao navegar para rota `),Cl(196,"code"),qx(197,"/login"),og(),qx(198,`, e tamb\xE9m como ele se comunica
com o servi\xE7o para efetua\xE7\xE3o do processo de autentica\xE7\xE3o do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),og(),Cl(199,"pre")(200,"code"),qx(201,`import { PoPageLoginComponent, PoPageLoginAthenticationType } from '@po-ui/ng-templates';

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
`),og()(),Cl(202,"p"),qx(203,"O metadado "),Cl(204,"code"),qx(205,"serviceApi"),og(),qx(206," deve ser a "),Cl(207,"strong"),qx(208,"url"),og(),qx(209," para requisi\xE7\xE3o dos recursos de autentica\xE7\xE3o, o "),Cl(210,"code"),qx(211,"environment"),og(),qx(212,` alimenta a propriedade
`),Cl(213,"code"),qx(214,"p-environment"),og(),qx(215,", "),Cl(216,"code"),qx(217,"recovery"),og(),qx(218," \xE9 a interface "),Cl(219,"code"),qx(220,"PoPageLoginRecovery"),og(),qx(221,` respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de
senha, `),Cl(222,"code"),qx(223,"registerUrl"),og(),qx(224," alimenta a propriedade "),Cl(225,"code"),qx(226,"p-register-url"),og(),qx(227," e "),Cl(228,"code"),qx(229,"authenticationType"),og(),qx(230," que define a propriedade "),Cl(231,"code"),qx(232,"p-authentication-type"),og(),qx(233,"."),og(),Cl(234,"blockquote")(235,"p"),qx(236,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),og()()()(),Cl(237,"tr",13)(238,"td",14)(239,"div",15)(240,"span",16),qx(241," p-background"),Hl(242,"br"),og()()(),Cl(243,"td",17)(244,"code",21),qx(245,"string"),og()(),Cl(246,"td",19),qx(247,"-"),og(),Cl(248,"td",20)(249,"em")(250,"strong"),qx(251,"(opcional)"),og()(),Cl(252,"p"),qx(253,"O "),Cl(254,"code"),qx(255,"p-background"),og(),qx(256,` permite inserir uma imagem de destaque ao lado direito do formul\xE1rio de login, caso a propriedade
n\xE3o seja preenchida o formul\xE1rio ser\xE1 centralizado no espa\xE7o dispon\xEDvel.`),og(),Cl(257,"p"),qx(258,"A fonte da imagem pode ser de um caminho local ou uma url de um servidor externo."),og(),Cl(259,"p"),qx(260,`Al\xE9m da imagem, \xE9 poss\xEDvel adicionar um texto informativo por cima da imagem da imagem de destaque, para isso informe
um valor para a literal `),Cl(261,"code"),qx(262,"highlightInfo"),og(),qx(263,"."),og(),Cl(264,"blockquote")(265,"p"),qx(266,"Veja mais sobre as literais na propriedade "),Cl(267,"code"),qx(268,"p-literals"),og(),qx(269,"."),og()(),Cl(270,"p"),qx(271,"Exemplos de valores v\xE1lidos:"),og(),Cl(272,"ul")(273,"li")(274,"strong"),qx(275,"local"),og(),qx(276,": "),Cl(277,"code"),qx(278,"./assets/images/login-background.png"),og()(),Cl(279,"li")(280,"strong"),qx(281,"url externa"),og(),qx(282,": "),Cl(283,"code"),qx(284,"https://po-ui.io/assets/images/login-background.png"),og()()(),Cl(285,"blockquote")(286,"p"),qx(287,"Essa propriedade \xE9 ignorada para aplica\xE7\xF5es mobile."),og()()()(),Cl(288,"tr",13)(289,"td",14)(290,"div",15)(291,"span",16),qx(292," p-blocked-url"),Hl(293,"br"),og()()(),Cl(294,"td",17)(295,"code",21),qx(296,"string"),og()(),Cl(297,"td",19),qx(298,"-"),og(),Cl(299,"td",20)(300,"em")(301,"strong"),qx(302,"(opcional)"),og()(),Cl(303,"p"),qx(304,"Caso o valor atribu\xEDdo para "),Cl(305,"code"),qx(306,"p-exceeded-attempts-warning"),og(),qx(307,` seja igual a 0(zero) e a aplica\xE7\xE3o tenha um link de bloqueio de usu\xE1rio,
informe uma url externa ou uma rota v\xE1lida, dessa forma em caso de bloqueio o usu\xE1rio ser\xE1 redirecionado.`),og()()(),Cl(308,"tr",13)(309,"td",14)(310,"div",15)(311,"span",16),qx(312," p-components-size"),Hl(313,"br"),og()()(),Cl(314,"td",17)(315,"code",21),qx(316,"string"),og()(),Cl(317,"td",19)(318,"p")(319,"code"),qx(320,"medium"),og()()(),Cl(321,"td",20)(322,"em")(323,"strong"),qx(324,"(opcional)"),og()(),Cl(325,"p"),qx(326,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(327,"ul")(328,"li")(329,"code"),qx(330,"small"),og(),qx(331,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(332,"li")(333,"code"),qx(334,"medium"),og(),qx(335,": aplica a medida medium de cada componente."),og()(),Cl(336,"blockquote")(337,"p"),qx(338,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(339,"code"),qx(340,"medium"),og(),qx(341,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(342,"a",22),qx(343,"po-theme"),og(),qx(344,"."),og()()()(),Cl(345,"tr",13)(346,"td",14)(347,"div",15)(348,"span",16),qx(349," p-contact-email"),Hl(350,"br"),og()()(),Cl(351,"td",17)(352,"code",21),qx(353,"string"),og()(),Cl(354,"td",19),qx(355,"-"),og(),Cl(356,"td",20)(357,"em")(358,"strong"),qx(359,"(opcional)"),og()(),Cl(360,"p"),qx(361,"Personaliza o e-mail que \xE9 exibido na mensagem de dica de login padr\xE3o para contato de suporte."),og()()(),Cl(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),qx(366," p-custom-field"),Hl(367,"br"),og()()(),Cl(368,"td",17)(369,"code",21),qx(370,"string "),og(),Cl(371,"code",23),qx(372," PoPageLoginCustomField"),og()(),Cl(373,"td",19),qx(374,"-"),og(),Cl(375,"td",20)(376,"em")(377,"strong"),qx(378,"(opcional)"),og()(),Cl(379,"p"),qx(380,"Ao informar um valor do tipo "),Cl(381,"code"),qx(382,"string"),og(),qx(383,`, o mesmo ser\xE1 aplicado como a chave do campo customizado e utilizar\xE1
os valores padr\xF5es contidos na propriedade `),Cl(384,"code"),qx(385,"literals"),og(),qx(386," como "),Cl(387,"code"),qx(388,"customFieldErrorPattern"),og(),qx(389," e "),Cl(390,"code"),qx(391,"customFieldPlaceholder"),og(),qx(392,"."),og(),Cl(393,"p"),qx(394,"Existe a possibilidade de informar um objeto que segue a defini\xE7\xE3o da interface "),Cl(395,"code"),qx(396,"PoPageLoginCustomField"),og(),qx(397,`, onde
atrav\xE9s dos par\xE2metros enviados pode gerar um `),Cl(398,"code"),qx(399,"po-input"),og(),qx(400,", "),Cl(401,"code"),qx(402,"po-combo"),og(),qx(403,` especificamente para servi\xE7os
ou `),Cl(404,"code"),qx(405,"po-select"),og(),qx(406," para valores fixos."),og(),Cl(407,"p"),qx(408,"Abaixo seguem os exemplos de cada tipo de campo."),og(),Cl(409,"p")(410,"code"),qx(411,"po-input"),og(),qx(412,":"),og(),Cl(413,"pre")(414,"code"),qx(415,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  pattern: '[a-z]',
  errorPattern: 'Invalid value'
}
`),og()(),Cl(416,"p")(417,"code"),qx(418,"po-combo"),og(),qx(419,":"),og(),Cl(420,"pre")(421,"code"),qx(422,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  url: 'https://po-ui.io/sample/api/comboOption/domains',
  fieldValue: 'nickname'
}
`),og()(),Cl(423,"p")(424,"code"),qx(425,"po-select"),og(),qx(426,":"),og(),Cl(427,"pre")(428,"code"),qx(429,`{
  property: 'domain',
  value: 'jv01',
  placeholder: 'Enter your domain',
  options: [{label: 'Domain 1', value: '1'}, {label: 'Domain 2', value: '2'}]
}
`),og()(),Cl(430,"p"),qx(431,`Caso o customField possua options, url e fieldValue preenchidos, ser\xE1 priorizado o po-select
utilizando o options.`),og()()(),Cl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),qx(436," p-environment"),Hl(437,"br"),og()()(),Cl(438,"td",17)(439,"code",21),qx(440,"string"),og()(),Cl(441,"td",19),qx(442,"-"),og(),Cl(443,"td",20)(444,"em")(445,"strong"),qx(446,"(opcional)"),og()(),Cl(447,"p"),qx(448,"Adiciona uma "),Cl(449,"code"),qx(450,"tag"),og(),qx(451," abaixo do t\xEDtulo que especifica o ambiente que o usu\xE1rio est\xE1 fazendo o login."),og(),Cl(452,"blockquote")(453,"p"),qx(454,"Essa propriedade limita o texto em 40 caracteres."),og()()()(),Cl(455,"tr",13)(456,"td",14)(457,"div",15)(458,"span",16),qx(459," p-exceeded-attempts-warning"),Hl(460,"br"),og()()(),Cl(461,"td",17)(462,"code",24),qx(463,"number"),og()(),Cl(464,"td",19)(465,"p")(466,"code"),qx(467,"0"),og()()(),Cl(468,"td",20)(469,"em")(470,"strong"),qx(471,"(opcional)"),og()(),Cl(472,"p"),qx(473,`Exibe um aviso de bloqueio de acordo com a quantidade restante de tentativas.
O aviso ser\xE1 exibido somente se a quantidade for maior que zero.`),og(),Cl(474,"blockquote")(475,"p"),qx(476,"Caso tenha algum valor atribu\xEDdo para o atributo "),Cl(477,"code"),qx(478,"p-authentication-url"),og(),qx(479,` e o retorno da requisi\xE7\xE3o estiver atribuindo valor
para o `),Cl(480,"code"),qx(481,"p-exceeded-attempts-warning"),og(),qx(482,", o valor considerado ser\xE1 o do retorno da requisi\xE7\xE3o."),og()()()(),Cl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),qx(487," p-hide-label-status"),Hl(488,"br"),og()()(),Cl(489,"td",17)(490,"code",25),qx(491,"boolean"),og()(),Cl(492,"td",19)(493,"p")(494,"code"),qx(495,"false"),og()()(),Cl(496,"td",20)(497,"em")(498,"strong"),qx(499,"(opcional)"),og()(),Cl(500,"p"),qx(501,"Indica se o status do "),Cl(502,"code"),qx(503,"model"),og(),qx(504," do switch de lembrar o usu\xE1rio ser\xE1 escondido visualmente."),og(),Cl(505,"blockquote")(506,"p"),qx(507,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Cl(508,"code"),qx(509,"false"),og(),qx(510,"."),og()()()(),Cl(511,"tr",13)(512,"td",14)(513,"div",15)(514,"span",16),qx(515," p-hide-password-peek"),Hl(516,"br"),og()()(),Cl(517,"td",17)(518,"code",25),qx(519,"boolean"),og()(),Cl(520,"td",19)(521,"p")(522,"code"),qx(523,"false"),og()()(),Cl(524,"td",20)(525,"em")(526,"strong"),qx(527,"(opcional)"),og()(),Cl(528,"p"),qx(529,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),og()()(),Cl(530,"tr",13)(531,"td",14)(532,"div",15)(533,"span",16),qx(534," p-hide-remember-user"),Hl(535,"br"),og()()(),Cl(536,"td",17)(537,"code",25),qx(538,"boolean"),og()(),Cl(539,"td",19)(540,"p")(541,"code"),qx(542,"false"),og()()(),Cl(543,"td",20)(544,"em")(545,"strong"),qx(546,"(opcional)"),og()(),Cl(547,"p"),qx(548,'Esconde a fun\xE7\xE3o "Lembrar usu\xE1rio" do formul\xE1rio de login.'),og(),Cl(549,"p"),qx(550,"Quando essa propriedade \xE9 setada com "),Cl(551,"code"),qx(552,"true"),og(),qx(553," a propriedade "),Cl(554,"code"),qx(555,"rememberUser"),og(),qx(556," enviada no evento "),Cl(557,"code"),qx(558,"p-login-submit"),og(),qx(559,` ser\xE1 sempre
`),Cl(560,"code"),qx(561,"false"),og(),qx(562,"."),og(),Cl(563,"blockquote")(564,"p"),qx(565,"Veja a propriedade "),Cl(566,"code"),qx(567,"p-literals"),og(),qx(568," para customizar a literal "),Cl(569,"code"),qx(570,"rememberUser"),og(),qx(571,"."),og()()()(),Cl(572,"tr",13)(573,"td",14)(574,"div",26)(575,"span",27),qx(576," (p-language-change)"),Hl(577,"br"),og()()(),Cl(578,"td",17)(579,"code",28),qx(580,"EventEmitter"),og()(),Cl(581,"td",19),qx(582,"-"),og(),Cl(583,"td",20)(584,"em")(585,"strong"),qx(586,"(opcional)"),og()(),Cl(587,"p"),qx(588,"Evento disparado quando o usu\xE1rio alterar o idioma da p\xE1gina."),og(),Cl(589,"p"),qx(590,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Cl(591,"code"),qx(592,"PoLanguage"),og(),qx(593," com a linguagem selecionada."),og()()(),Cl(594,"tr",13)(595,"td",14)(596,"div",15)(597,"span",16),qx(598," p-languages"),Hl(599,"br"),og()()(),Cl(600,"td",17)(601,"code",29),qx(602,"Array<PoLanguage>"),og()(),Cl(603,"td",19),qx(604,"-"),og(),Cl(605,"td",20)(606,"em")(607,"strong"),qx(608,"(opcional)"),og()(),Cl(609,"p"),qx(610,"Cole\xE7\xE3o de idiomas que o componente ir\xE1 tratar e disponibilizar\xE1 para o usu\xE1rio escolher."),og(),Cl(611,"p"),qx(612,"Caso essa propriedade n\xE3o seja utilizada o componente mostrar\xE1 no combo os idiomas que ele suporta por padr\xE3o."),og(),Cl(613,"p"),qx(614,"Caso a cole\xE7\xE3o tenha um idioma, a p\xE1gina estar\xE1 nesse idioma e n\xE3o mostrar\xE1 o combo."),og(),Cl(615,"p"),qx(616,"Caso seja passado um array vazio, a p\xE1gina ter\xE1 o idioma configurado no "),Cl(617,"code"),qx(618,"i18n"),og(),qx(619," e n\xE3o mostrar\xE1 o combo de sele\xE7\xE3o."),og(),Cl(620,"blockquote")(621,"p"),qx(622,"Se for passado um idioma n\xE3o suportado, ser\xE1 preciso passar as literais pela propriedade "),Cl(623,"code"),qx(624,"p-literals"),og(),qx(625,"."),og()()()(),Cl(626,"tr",13)(627,"td",14)(628,"div",15)(629,"span",16),qx(630," p-literals"),Hl(631,"br"),og()()(),Cl(632,"td",17)(633,"code",30),qx(634,"PoPageLoginLiterals"),og()(),Cl(635,"td",19),qx(636,"-"),og(),Cl(637,"td",20)(638,"em")(639,"strong"),qx(640,"(opcional)"),og()(),Cl(641,"p"),qx(642,"Objeto com as literais usadas no "),Cl(643,"code"),qx(644,"po-page-login"),og(),qx(645,"."),og(),Cl(646,"p"),qx(647,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(648,"pre")(649,"code"),qx(650,`const customLiterals: PoPageLoginLiterals = {
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
`),og()(),Cl(651,"p"),qx(652,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(653,"pre")(654,"code"),qx(655,`const customLiterals: PoPageLoginLiterals = {
  loginPlaceholder: 'Insira seu usu\xE1rio de acesso',
  passwordPlaceholder: 'Insira sua senha de acesso',
  submitLabel: 'Acessar sistema'
};
`),og()(),Cl(656,"p"),qx(657,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(658,"pre")(659,"code"),qx(660,`<po-page-login
  [p-literals]="customLiterals">
</po-page-login>
`),og()(),Cl(661,"blockquote")(662,"p"),qx(663,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do browser (pt, en, es).
\xC9 tamb\xE9m poss\xEDvel alternar o objeto padr\xE3o de literais atrav\xE9s do seletor de idiomas localizado na parte inferior do template,
nesse caso, h\xE1 tamb\xE9m a op\xE7\xE3o do idioma russo.`),og()()()(),Cl(664,"tr",13)(665,"td",14)(666,"div",15)(667,"span",16),qx(668," p-loading"),Hl(669,"br"),og()()(),Cl(670,"td",17)(671,"code",25),qx(672,"boolean"),og()(),Cl(673,"td",19)(674,"p")(675,"code"),qx(676,"false"),og()()(),Cl(677,"td",20)(678,"em")(679,"strong"),qx(680,"(opcional)"),og()(),Cl(681,"p"),qx(682,"Habilita um estado de carregamento ao bot\xE3o de "),Cl(683,"em"),qx(684,"login"),og(),qx(685,"."),og(),Cl(686,"blockquote")(687,"p"),qx(688,"\xC9 necess\xE1rio atribuir "),Cl(689,"code"),qx(690,"true"),og(),qx(691," \xE0 esta propriedade na fun\xE7\xE3o definida em "),Cl(692,"code"),qx(693,"p-login-submit"),og(),qx(694,"."),og()()()(),Cl(695,"tr",13)(696,"td",14)(697,"div",15)(698,"span",16),qx(699," p-login"),Hl(700,"br"),og()()(),Cl(701,"td",17)(702,"code",21),qx(703,"string"),og()(),Cl(704,"td",19),qx(705,"-"),og(),Cl(706,"td",20)(707,"em")(708,"strong"),qx(709,"(opcional)"),og()(),Cl(710,"p"),qx(711,"Valor do modelo do campo de login."),og()()(),Cl(712,"tr",13)(713,"td",14)(714,"div",26)(715,"span",27),qx(716," (p-login-change)"),Hl(717,"br"),og()()(),Cl(718,"td",17)(719,"code",28),qx(720,"EventEmitter"),og()(),Cl(721,"td",19),qx(722,"-"),og(),Cl(723,"td",20)(724,"em")(725,"strong"),qx(726,"(opcional)"),og()(),Cl(727,"p"),qx(728,"Evento disparado quando o usu\xE1rio alterar o input do campo login."),og(),Cl(729,"p"),qx(730,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Cl(731,"code"),qx(732,"string"),og(),qx(733," com o texto informado no campo."),og(),Cl(734,"blockquote")(735,"p"),qx(736,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Cl(737,"code"),qx(738,"p-authentication-url"),og(),qx(739,"."),og()()()(),Cl(740,"tr",13)(741,"td",14)(742,"div",15)(743,"span",16),qx(744," p-login-errors"),Hl(745,"br"),og()()(),Cl(746,"td",17)(747,"code",31),qx(748,"string[]"),og()(),Cl(749,"td",19),qx(750,"-"),og(),Cl(751,"td",20)(752,"em")(753,"strong"),qx(754,"(opcional)"),og()(),Cl(755,"p"),qx(756,"Atributo que recebe uma lista de erros e exibe abaixo do campo de login."),og()()(),Cl(757,"tr",13)(758,"td",14)(759,"div",15)(760,"span",16),qx(761," p-login-pattern"),Hl(762,"br"),og()()(),Cl(763,"td",17)(764,"code",21),qx(765,"string"),og()(),Cl(766,"td",19),qx(767,"-"),og(),Cl(768,"td",20)(769,"em")(770,"strong"),qx(771,"(opcional)"),og()(),Cl(772,"p"),qx(773,"Express\xE3o regular para validar o campo de login, caso a express\xE3o n\xE3o seja atentida, a literal "),Cl(774,"code"),qx(775,"loginErrorPattern"),og(),qx(776,`
ser\xE1 exibida.`),og(),Cl(777,"p"),qx(778,"Exemplos de valores v\xE1lidos:"),og(),Cl(779,"ul")(780,"li"),qx(781,"email: "),Cl(782,"code"),qx(783,"[expressao-regular-email]"),og()(),Cl(784,"li"),qx(785,"cpf: "),Cl(786,"code"),qx(787,"[expressao-regular-cpf]"),og()()(),Cl(788,"blockquote")(789,"p"),qx(790,"Veja a propriedade "),Cl(791,"code"),qx(792,"p-literals"),og(),qx(793," para customizar a literal "),Cl(794,"code"),qx(795,"loginErrorPattern"),og(),qx(796,"."),og()()()(),Cl(797,"tr",13)(798,"td",14)(799,"div",26)(800,"span",27),qx(801," (p-login-submit)"),Hl(802,"br"),og()()(),Cl(803,"td",17)(804,"code",28),qx(805,"EventEmitter"),og()(),Cl(806,"td",19),qx(807,"-"),og(),Cl(808,"td",20)(809,"p"),qx(810,"Evento disparado ao submeter o formul\xE1rio de login (apertando "),Cl(811,"code"),qx(812,"Enter"),og(),qx(813," dentro dos campos ou pressionando o bot\xE3o de confirma\xE7\xE3o)."),og(),Cl(814,"p"),qx(815,"Esse evento receber\xE1 como par\xE2metro um objeto do tipo "),Cl(816,"code"),qx(817,"PoPageLogin"),og(),qx(818," com os dados informados no formul\xE1rio."),og(),Cl(819,"blockquote")(820,"p"),qx(821,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Cl(822,"code"),qx(823,"p-url-recovery"),og(),qx(824,"."),og()(),Cl(825,"blockquote")(826,"p"),qx(827,"Para mais detalhes consulte a documenta\xE7\xE3o sobre a interface "),Cl(828,"code"),qx(829,"PoPageLogin"),og(),qx(830," mais abaixo."),og()()()(),Cl(831,"tr",13)(832,"td",14)(833,"div",15)(834,"span",16),qx(835," p-logo"),Hl(836,"br"),og()()(),Cl(837,"td",17)(838,"code",21),qx(839,"string"),og()(),Cl(840,"td",19),qx(841,"-"),og(),Cl(842,"td",20)(843,"em")(844,"strong"),qx(845,"(opcional)"),og()(),Cl(846,"p"),qx(847,"Caminho para a logomarca localizada na parte superior."),og(),Cl(848,"blockquote")(849,"p"),qx(850,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),og()()()(),Cl(851,"tr",13)(852,"td",14)(853,"div",15)(854,"span",16),qx(855," p-no-autocomplete-login"),Hl(856,"br"),og()()(),Cl(857,"td",17)(858,"code",25),qx(859,"boolean"),og()(),Cl(860,"td",19)(861,"p")(862,"code"),qx(863,"true"),og()()(),Cl(864,"td",20)(865,"em")(866,"strong"),qx(867,"(opcional)"),og()(),Cl(868,"p"),qx(869,"Define a propriedade nativa "),Cl(870,"code"),qx(871,"autocomplete"),og(),qx(872," do campo como "),Cl(873,"code"),qx(874,"off"),og(),qx(875,"."),og()()(),Cl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),qx(880," p-no-autocomplete-password"),Hl(881,"br"),og()()(),Cl(882,"td",17)(883,"code",25),qx(884,"boolean"),og()(),Cl(885,"td",19)(886,"p")(887,"code"),qx(888,"true"),og()()(),Cl(889,"td",20)(890,"em")(891,"strong"),qx(892,"(opcional)"),og()(),Cl(893,"p"),qx(894,"Define a propriedade nativa "),Cl(895,"code"),qx(896,"autocomplete"),og(),qx(897," do campo como "),Cl(898,"code"),qx(899,"off"),og(),qx(900,"."),og(),Cl(901,"blockquote")(902,"p"),qx(903,"No componente "),Cl(904,"code"),qx(905,"po-password"),og(),qx(906," ser\xE1 definido como "),Cl(907,"code"),qx(908,"new-password"),og(),qx(909,"."),og()()()(),Cl(910,"tr",13)(911,"td",14)(912,"div",26)(913,"span",27),qx(914," (p-password-change)"),Hl(915,"br"),og()()(),Cl(916,"td",17)(917,"code",28),qx(918,"EventEmitter"),og()(),Cl(919,"td",19),qx(920,"-"),og(),Cl(921,"td",20)(922,"em")(923,"strong"),qx(924,"(opcional)"),og()(),Cl(925,"p"),qx(926,"Evento disparado quando o usu\xE1rio alterar o input do campo password."),og(),Cl(927,"p"),qx(928,"Esse evento receber\xE1 como par\xE2metro uma vari\xE1vel do tipo "),Cl(929,"code"),qx(930,"string"),og(),qx(931," com o texto informado no campo."),og(),Cl(932,"blockquote")(933,"p"),qx(934,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Cl(935,"code"),qx(936,"p-authentication-url"),og(),qx(937,"."),og()()()(),Cl(938,"tr",13)(939,"td",14)(940,"div",15)(941,"span",16),qx(942," p-password-errors"),Hl(943,"br"),og()()(),Cl(944,"td",17)(945,"code",31),qx(946,"string[]"),og()(),Cl(947,"td",19),qx(948,"-"),og(),Cl(949,"td",20)(950,"em")(951,"strong"),qx(952,"(opcional)"),og()(),Cl(953,"p"),qx(954,"Atributo que recebe uma lista de erros e exibe abaixo do campo de password."),og()()(),Cl(955,"tr",13)(956,"td",14)(957,"div",15)(958,"span",16),qx(959," p-password-pattern"),Hl(960,"br"),og()()(),Cl(961,"td",17)(962,"code",21),qx(963,"string"),og()(),Cl(964,"td",19),qx(965,"-"),og(),Cl(966,"td",20)(967,"em")(968,"strong"),qx(969,"(opcional)"),og()(),Cl(970,"p"),qx(971,"Express\xE3o regular para validar o campo de password, caso a express\xE3o n\xE3o seja atentida, a literal "),Cl(972,"code"),qx(973,"passwordErrorPattern"),og(),qx(974,`
ser\xE1 exibida.`),og(),Cl(975,"p"),qx(976,"Exemplos de valores v\xE1lidos:"),og(),Cl(977,"ul")(978,"li"),qx(979,"Apenas n\xFAmeros: "),Cl(980,"code"),qx(981,"\\d?"),og()(),Cl(982,"li"),qx(983,"Letras m\xEDnusculas: "),Cl(984,"code"),qx(985,"\\z?"),og()()(),Cl(986,"blockquote")(987,"p"),qx(988,"Veja a propriedade "),Cl(989,"code"),qx(990,"p-literals"),og(),qx(991," para customizar a literal "),Cl(992,"code"),qx(993,"passwordErrorPattern"),og(),qx(994,"."),og()()()(),Cl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),qx(999," p-product-name"),Hl(1e3,"br"),og()()(),Cl(1001,"td",17)(1002,"code",21),qx(1003,"string"),og()(),Cl(1004,"td",19),qx(1005,"-"),og(),Cl(1006,"td",20)(1007,"em")(1008,"strong"),qx(1009,"(opcional)"),og()(),Cl(1010,"p"),qx(1011,"Texto customizado que fica entre a logo e a mensagem de boas-vindas."),og()()(),Cl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),qx(1016," p-recovery"),Hl(1017,"br"),og()()(),Cl(1018,"td",17)(1019,"code",21),qx(1020,"string "),og(),Cl(1021,"code",32),qx(1022," Function "),og(),Cl(1023,"code",33),qx(1024," PoPageLoginRecovery"),og()(),Cl(1025,"td",19),qx(1026,"-"),og(),Cl(1027,"td",20)(1028,"em")(1029,"strong"),qx(1030,"(opcional)"),og()(),Cl(1031,"p"),qx(1032,"Exibe um link abaixo do formul\xE1rio de login para que os usu\xE1rios da aplica\xE7\xE3o fa\xE7am a recupera\xE7\xE3o dos dados de autentica\xE7\xE3o."),og(),Cl(1033,"p"),qx(1034,"A propriedade aceita os seguintes tipos:"),og(),Cl(1035,"ul")(1036,"li")(1037,"p")(1038,"strong"),qx(1039,"String"),og(),qx(1040,": informe uma url externa ou uma rota v\xE1lida;"),og()(),Cl(1041,"li")(1042,"p")(1043,"strong"),qx(1044,"Function"),og(),qx(1045,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),og(),Cl(1046,"pre")(1047,"code"),qx(1048,`<po-page-login>
  [recovery]="this.myRecovery.bind(this)">
</po-page-login>
`),og()()(),Cl(1049,"li")(1050,"p")(1051,"strong"),qx(1052,"PoPageLoginRecovery"),og(),qx(1053,": cria-se v\xEDnculo autom\xE1tico com o template "),Cl(1054,"strong"),qx(1055,"po-modal-password-recovery"),og(),qx(1056,`.
O objeto deve conter a `),Cl(1057,"strong"),qx(1058,"url"),og(),qx(1059," para requisi\xE7\xE3o dos recursos e pode-se definir o "),Cl(1060,"strong"),qx(1061,"tipo"),og(),qx(1062,` de modal para recupera\xE7\xE3o de senha,
`),Cl(1063,"strong"),qx(1064,"email"),og(),qx(1065," para contato e "),Cl(1066,"strong"),qx(1067,"m\xE1scara"),og(),qx(1068," do campo de telefone."),og()()()()(),Cl(1069,"tr",13)(1070,"td",14)(1071,"div",15)(1072,"span",16),qx(1073," p-register-url"),Hl(1074,"br"),og()()(),Cl(1075,"td",17)(1076,"code",21),qx(1077,"string"),og()(),Cl(1078,"td",19),qx(1079,"-"),og(),Cl(1080,"td",20)(1081,"em")(1082,"strong"),qx(1083,"(opcional)"),og()(),Cl(1084,"p"),qx(1085,`Caso a aplica\xE7\xE3o tenha um link para novos cadastros, informe uma url externa ou uma rota v\xE1lida, dessa
forma ser\xE1 exibido um link abaixo do formul\xE1rio de login para os usu\xE1rios da aplica\xE7\xE3o.`),og(),Cl(1086,"p"),qx(1087,"Exemplos de valores v\xE1lidos:"),og(),Cl(1088,"ul")(1089,"li")(1090,"strong"),qx(1091,"local"),og(),qx(1092,": "),Cl(1093,"code"),qx(1094,"/home"),og()(),Cl(1095,"li")(1096,"strong"),qx(1097,"url externa"),og(),qx(1098,": "),Cl(1099,"code"),qx(1100,"https://po-ui.io"),og()()(),Cl(1101,"blockquote")(1102,"p"),qx(1103,"Veja a propriedade "),Cl(1104,"code"),qx(1105,"p-literals"),og(),qx(1106," para customizar a literal "),Cl(1107,"code"),qx(1108,"registerUrl"),og(),qx(1109,"."),og()()()(),Cl(1110,"tr",13)(1111,"td",14)(1112,"div",15)(1113,"span",16),qx(1114," p-secondary-logo"),Hl(1115,"br"),og()()(),Cl(1116,"td",17)(1117,"code",21),qx(1118,"string"),og()(),Cl(1119,"td",19),qx(1120,"-"),og(),Cl(1121,"td",20)(1122,"em")(1123,"strong"),qx(1124,"(opcional)"),og()(),Cl(1125,"p"),qx(1126,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Cl(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),qx(1131," p-support"),Hl(1132,"br"),og()()(),Cl(1133,"td",17)(1134,"code",21),qx(1135,"string "),og(),Cl(1136,"code",32),qx(1137," Function"),og()(),Cl(1138,"td",19),qx(1139,"-"),og(),Cl(1140,"td",20)(1141,"em")(1142,"strong"),qx(1143,"(opcional)"),og()(),Cl(1144,"p"),qx(1145,"Exibe um bot\xE3o para suporte."),og(),Cl(1146,"p"),qx(1147,"A propriedade aceita os seguintes tipos:"),og(),Cl(1148,"ul")(1149,"li")(1150,"strong"),qx(1151,"String"),og(),qx(1152,": URL externa ou uma rota v\xE1lida;"),og(),Cl(1153,"li")(1154,"strong"),qx(1155,"Function"),og(),qx(1156,": Fun\xE7\xE3o a ser disparada ao clicar no bot\xE3o de suporte;"),Cl(1157,"pre")(1158,"code"),qx(1159,`<po-page-login>
  [p-support]="this.mySupport.bind(this)">
</po-page-login>
`),og()()()()()()(),Cl(1160,"h3"),qx(1161,"Interfaces"),og(),Cl(1162,"h4",34)(1163,"code",5),qx(1164,"PoPageLoginCustomField"),og()(),Cl(1165,"div",2)(1166,"p"),qx(1167,"Interface com a defini\xE7\xE3o do Custom Field, podendo ser utilizado para informar um campo customizado no componente "),Cl(1168,"code"),qx(1169,"po-page-login"),og(),qx(1170,"."),og()(),Cl(1171,"h4",9),qx(1172,"Propriedades"),og(),Cl(1173,"table",10)(1174,"tr",11)(1175,"th",12),qx(1176,"Nome"),og(),Cl(1177,"th",12),qx(1178,"Tipo"),og(),Cl(1179,"th",12),qx(1180,"Descri\xE7\xE3o"),og()(),Cl(1181,"tr",13)(1182,"td",14)(1183,"div",15)(1184,"span",16),qx(1185," errorPattern"),Hl(1186,"br"),og()()(),Cl(1187,"td",17)(1188,"code",21),qx(1189,"string"),og()(),Cl(1190,"td",20)(1191,"em")(1192,"strong"),qx(1193,"(opcional)"),og()(),Cl(1194,"p"),qx(1195,"Mensagem que ser\xE1 exibida quando a express\xE3o regular informada na propriedade "),Cl(1196,"code"),qx(1197,"pattern"),og(),qx(1198," n\xE3o for v\xE1lida."),og()()(),Cl(1199,"tr",13)(1200,"td",14)(1201,"div",15)(1202,"span",16),qx(1203," fieldValue"),Hl(1204,"br"),og()()(),Cl(1205,"td",17)(1206,"code",21),qx(1207,"string"),og()(),Cl(1208,"td",20)(1209,"em")(1210,"strong"),qx(1211,"(opcional)"),og()(),Cl(1212,"p"),qx(1213,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na
lista do componente `),Cl(1214,"code"),qx(1215,"po-combo"),og(),qx(1216,", esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og()()(),Cl(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),qx(1221," options"),Hl(1222,"br"),og()()(),Cl(1223,"td",17)(1224,"code",35),qx(1225,"Array<PoSelectOption>"),og()(),Cl(1226,"td",20)(1227,"em")(1228,"strong"),qx(1229,"(opcional)"),og()(),Cl(1230,"p"),qx(1231,"Lista de op\xE7\xF5es de um "),Cl(1232,"code"),qx(1233,"po-select"),og(),qx(1234,"."),og()()(),Cl(1235,"tr",13)(1236,"td",14)(1237,"div",15)(1238,"span",16),qx(1239," pattern"),Hl(1240,"br"),og()()(),Cl(1241,"td",17)(1242,"code",21),qx(1243,"string"),og()(),Cl(1244,"td",20)(1245,"em")(1246,"strong"),qx(1247,"(opcional)"),og()(),Cl(1248,"p"),qx(1249,`Express\xE3o regular para validar o campo customizado, caso a express\xE3o n\xE3o seja atendida a literal informada na
propriedade `),Cl(1250,"code"),qx(1251,"errorPattern"),og(),qx(1252," ser\xE1 exibida."),og()()(),Cl(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),qx(1257," placeholder"),Hl(1258,"br"),og()()(),Cl(1259,"td",17)(1260,"code",21),qx(1261,"string"),og()(),Cl(1262,"td",20)(1263,"em")(1264,"strong"),qx(1265,"(opcional)"),og()(),Cl(1266,"p"),qx(1267,"Mensagem que ser\xE1 exibida enquanto o campo customizado n\xE3o estiver preenchido."),og()()(),Cl(1268,"tr",13)(1269,"td",14)(1270,"div",15)(1271,"span",16),qx(1272," property"),Hl(1273,"br"),og()()(),Cl(1274,"td",17)(1275,"code",21),qx(1276,"string"),og()(),Cl(1277,"td",20)(1278,"p"),qx(1279,"Nome da propriedade que ser\xE1 utilizado no campo customizado."),og()()(),Cl(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),qx(1284," url"),Hl(1285,"br"),og()()(),Cl(1286,"td",17)(1287,"code",21),qx(1288,"string"),og()(),Cl(1289,"td",20)(1290,"em")(1291,"strong"),qx(1292,"(opcional)"),og()(),Cl(1293,"p"),qx(1294,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da
lista de itens do componente `),Cl(1295,"code"),qx(1296,"po-combo"),og(),qx(1297,"."),og()()(),Cl(1298,"tr",13)(1299,"td",14)(1300,"div",15)(1301,"span",16),qx(1302," value"),Hl(1303,"br"),og()()(),Cl(1304,"td",17)(1305,"code",21),qx(1306,"string "),og(),Cl(1307,"code",24),qx(1308," number"),og()(),Cl(1309,"td",20)(1310,"em")(1311,"strong"),qx(1312,"(opcional)"),og()(),Cl(1313,"p"),qx(1314,"Valor do campo customizado."),og()()()(),Cl(1315,"h4",34)(1316,"code",5),qx(1317,"PoPageLoginLiterals"),og()(),Cl(1318,"div",2)(1319,"p"),qx(1320,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1321,"code"),qx(1322,"po-page-login"),og(),qx(1323,"."),og()(),Cl(1324,"h4",9),qx(1325,"Propriedades"),og(),Cl(1326,"table",10)(1327,"tr",11)(1328,"th",12),qx(1329,"Nome"),og(),Cl(1330,"th",12),qx(1331,"Tipo"),og(),Cl(1332,"th",12),qx(1333,"Descri\xE7\xE3o"),og()(),Cl(1334,"tr",13)(1335,"td",14)(1336,"div",15)(1337,"span",16),qx(1338," attempts"),Hl(1339,"br"),og()()(),Cl(1340,"td",17)(1341,"code",21),qx(1342,"string"),og()(),Cl(1343,"td",20)(1344,"em")(1345,"strong"),qx(1346,"(opcional)"),og()(),Cl(1347,"p"),qx(1348,"Texto que informa a quantidade de tentativas restantes no popover de aviso de bloqueio."),og()()(),Cl(1349,"tr",13)(1350,"td",14)(1351,"div",15)(1352,"span",16),qx(1353," createANewPasswordNow"),Hl(1354,"br"),og()()(),Cl(1355,"td",17)(1356,"code",21),qx(1357,"string"),og()(),Cl(1358,"td",20)(1359,"em")(1360,"strong"),qx(1361,"(opcional)"),og()(),Cl(1362,"p"),qx(1363,"Texto exibido no popover de aviso de bloqueio, que orienta o usu\xE1rio, caso ele tenha esquecido a senha, a criar uma nova senha."),og()()(),Cl(1364,"tr",13)(1365,"td",14)(1366,"div",15)(1367,"span",16),qx(1368," customFieldErrorPattern"),Hl(1369,"br"),og()()(),Cl(1370,"td",17)(1371,"code",21),qx(1372,"string"),og()(),Cl(1373,"td",20)(1374,"em")(1375,"strong"),qx(1376,"(opcional)"),og()(),Cl(1377,"p"),qx(1378,"Mensagem de erro apresentada quando o campo customizado est\xE1 inv\xE1lido"),og()()(),Cl(1379,"tr",13)(1380,"td",14)(1381,"div",15)(1382,"span",16),qx(1383," customFieldPlaceholder"),Hl(1384,"br"),og()()(),Cl(1385,"td",17)(1386,"code",21),qx(1387,"string"),og()(),Cl(1388,"td",20)(1389,"em")(1390,"strong"),qx(1391,"(opcional)"),og()(),Cl(1392,"p"),qx(1393,"Placeholder para o campo customizado."),og()()(),Cl(1394,"tr",13)(1395,"td",14)(1396,"div",15)(1397,"span",16),qx(1398," forgotPassword"),Hl(1399,"br"),og()()(),Cl(1400,"td",17)(1401,"code",21),qx(1402,"string"),og()(),Cl(1403,"td",20)(1404,"em")(1405,"strong"),qx(1406,"(opcional)"),og()(),Cl(1407,"p"),qx(1408,"Texto de ajuda para recupera\xE7\xE3o dos dados de acesso."),og()()(),Cl(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),qx(1413," forgotYourPassword"),Hl(1414,"br"),og()()(),Cl(1415,"td",17)(1416,"code",21),qx(1417,"string"),og()(),Cl(1418,"td",20)(1419,"em")(1420,"strong"),qx(1421,"(opcional)"),og()(),Cl(1422,"p"),qx(1423,"Texto que questiona o esquecimento da senha no popover de aviso de bloqueio."),og()()(),Cl(1424,"tr",13)(1425,"td",14)(1426,"div",15)(1427,"span",16),qx(1428," highlightInfo"),Hl(1429,"br"),og()()(),Cl(1430,"td",17)(1431,"code",21),qx(1432,"string"),og()(),Cl(1433,"td",20)(1434,"em")(1435,"strong"),qx(1436,"(opcional)"),og()(),Cl(1437,"p"),qx(1438,"Texto de destaque sobreposto \xE0 imagem de destaque. Essa op\xE7\xE3o \xE9 utilizada em conjunto com o atributo "),Cl(1439,"code"),qx(1440,"p-background"),og(),qx(1441,"."),og()()(),Cl(1442,"tr",13)(1443,"td",14)(1444,"div",15)(1445,"span",16),qx(1446," iForgotMyPassword"),Hl(1447,"br"),og()()(),Cl(1448,"td",17)(1449,"code",21),qx(1450,"string"),og()(),Cl(1451,"td",20)(1452,"em")(1453,"strong"),qx(1454,"(opcional)"),og()(),Cl(1455,"p"),qx(1456,"Texto do link de 'esqueci minha senha' exibido no popover de aviso de bloqueio."),og()()(),Cl(1457,"tr",13)(1458,"td",14)(1459,"div",15)(1460,"span",16),qx(1461," ifYouTryHarder"),Hl(1462,"br"),og()()(),Cl(1463,"td",17)(1464,"code",21),qx(1465,"string"),og()(),Cl(1466,"td",20)(1467,"em")(1468,"strong"),qx(1469,"(opcional)"),og()(),Cl(1470,"p"),qx(1471,"Texto de aviso de tentativas exibido no popover de aviso de bloqueio."),og()()(),Cl(1472,"tr",13)(1473,"td",14)(1474,"div",15)(1475,"span",16),qx(1476," loginErrorPattern"),Hl(1477,"br"),og()()(),Cl(1478,"td",17)(1479,"code",21),qx(1480,"string"),og()(),Cl(1481,"td",20)(1482,"em")(1483,"strong"),qx(1484,"(opcional)"),og()(),Cl(1485,"p"),qx(1486,"Mensagem de erro apresentada quando o campo de login est\xE1 inv\xE1lido."),og()()(),Cl(1487,"tr",13)(1488,"td",14)(1489,"div",15)(1490,"span",16),qx(1491," loginHint"),Hl(1492,"br"),og()()(),Cl(1493,"td",17)(1494,"code",21),qx(1495,"string"),og()(),Cl(1496,"td",20)(1497,"em")(1498,"strong"),qx(1499,"(opcional)"),og()(),Cl(1500,"p"),qx(1501,"Texto exibido como dica para o campo de login."),og()()(),Cl(1502,"tr",13)(1503,"td",14)(1504,"div",15)(1505,"span",16),qx(1506," loginLabel"),Hl(1507,"br"),og()()(),Cl(1508,"td",17)(1509,"code",21),qx(1510,"string"),og()(),Cl(1511,"td",20)(1512,"em")(1513,"strong"),qx(1514,"(opcional)"),og()(),Cl(1515,"p"),qx(1516,"Texto exibido como label do campo de login."),og()()(),Cl(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),qx(1521," loginPlaceholder"),Hl(1522,"br"),og()()(),Cl(1523,"td",17)(1524,"code",21),qx(1525,"string"),og()(),Cl(1526,"td",20)(1527,"em")(1528,"strong"),qx(1529,"(opcional)"),og()(),Cl(1530,"p"),qx(1531,"Placeholder do campo de login."),og()()(),Cl(1532,"tr",13)(1533,"td",14)(1534,"div",15)(1535,"span",16),qx(1536," passwordErrorPattern"),Hl(1537,"br"),og()()(),Cl(1538,"td",17)(1539,"code",21),qx(1540,"string"),og()(),Cl(1541,"td",20)(1542,"em")(1543,"strong"),qx(1544,"(opcional)"),og()(),Cl(1545,"p"),qx(1546,"Mensagem de erro apresentada quando o campo de password est\xE1 inv\xE1lido."),og()()(),Cl(1547,"tr",13)(1548,"td",14)(1549,"div",15)(1550,"span",16),qx(1551," passwordLabel"),Hl(1552,"br"),og()()(),Cl(1553,"td",17)(1554,"code",21),qx(1555,"string"),og()(),Cl(1556,"td",20)(1557,"em")(1558,"strong"),qx(1559,"(opcional)"),og()(),Cl(1560,"p"),qx(1561,"Texto exibido como label do campo de password."),og()()(),Cl(1562,"tr",13)(1563,"td",14)(1564,"div",15)(1565,"span",16),qx(1566," passwordPlaceholder"),Hl(1567,"br"),og()()(),Cl(1568,"td",17)(1569,"code",21),qx(1570,"string"),og()(),Cl(1571,"td",20)(1572,"em")(1573,"strong"),qx(1574,"(opcional)"),og()(),Cl(1575,"p"),qx(1576,"Placeholder do campo de password."),og()()(),Cl(1577,"tr",13)(1578,"td",14)(1579,"div",15)(1580,"span",16),qx(1581," registerUrl"),Hl(1582,"br"),og()()(),Cl(1583,"td",17)(1584,"code",21),qx(1585,"string"),og()(),Cl(1586,"td",20)(1587,"em")(1588,"strong"),qx(1589,"(opcional)"),og()(),Cl(1590,"p"),qx(1591,"Texto exibido no link de novo cadastro."),og()()(),Cl(1592,"tr",13)(1593,"td",14)(1594,"div",15)(1595,"span",16),qx(1596," rememberUser"),Hl(1597,"br"),og()()(),Cl(1598,"td",17)(1599,"code",21),qx(1600,"string"),og()(),Cl(1601,"td",20)(1602,"em")(1603,"strong"),qx(1604,"(opcional)"),og()(),Cl(1605,"p"),qx(1606,'Texto exibido na fun\xE7\xE3o "Lembrar usu\xE1rio".'),og()()(),Cl(1607,"tr",13)(1608,"td",14)(1609,"div",15)(1610,"span",16),qx(1611," rememberUserHint"),Hl(1612,"br"),og()()(),Cl(1613,"td",17)(1614,"code",21),qx(1615,"string"),og()(),Cl(1616,"td",20)(1617,"em")(1618,"strong"),qx(1619,"(opcional)"),og()(),Cl(1620,"p"),qx(1621,'Texto exibido como dica da fun\xE7\xE3o "Lembrar usu\xE1rio"'),og()()(),Cl(1622,"tr",13)(1623,"td",14)(1624,"div",15)(1625,"span",16),qx(1626," submitLabel"),Hl(1627,"br"),og()()(),Cl(1628,"td",17)(1629,"code",21),qx(1630,"string"),og()(),Cl(1631,"td",20)(1632,"em")(1633,"strong"),qx(1634,"(opcional)"),og()(),Cl(1635,"p"),qx(1636,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login."),og()()(),Cl(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),qx(1641," submittedLabel"),Hl(1642,"br"),og()()(),Cl(1643,"td",17)(1644,"code",21),qx(1645,"string"),og()(),Cl(1646,"td",20)(1647,"em")(1648,"strong"),qx(1649,"(opcional)"),og()(),Cl(1650,"p"),qx(1651,"Texto exibido no bot\xE3o de confirma\xE7\xE3o da p\xE1gina de login quando estiver em estado de carregamento."),og()()(),Cl(1652,"tr",13)(1653,"td",14)(1654,"div",15)(1655,"span",16),qx(1656," support"),Hl(1657,"br"),og()()(),Cl(1658,"td",17)(1659,"code",21),qx(1660,"string"),og()(),Cl(1661,"td",20)(1662,"em")(1663,"strong"),qx(1664,"(opcional)"),og()(),Cl(1665,"p"),qx(1666,"Label do bot\xE3o de suporte."),og()()(),Cl(1667,"tr",13)(1668,"td",14)(1669,"div",15)(1670,"span",16),qx(1671," titlePopover"),Hl(1672,"br"),og()()(),Cl(1673,"td",17)(1674,"code",21),qx(1675,"string"),og()(),Cl(1676,"td",20)(1677,"em")(1678,"strong"),qx(1679,"(opcional)"),og()(),Cl(1680,"p"),qx(1681,"T\xEDtulo do popover para aviso de bloqueio."),og()()(),Cl(1682,"tr",13)(1683,"td",14)(1684,"div",15)(1685,"span",16),qx(1686," welcome"),Hl(1687,"br"),og()()(),Cl(1688,"td",17)(1689,"code",21),qx(1690,"string"),og()(),Cl(1691,"td",20)(1692,"em")(1693,"strong"),qx(1694,"(opcional)"),og()(),Cl(1695,"p"),qx(1696,'Mensagem de "Boas-vindas" para o usu\xE1rio que aparece acima dos campos de entrada.'),og()()(),Cl(1697,"tr",13)(1698,"td",14)(1699,"div",15)(1700,"span",16),qx(1701," yourUserWillBeBlocked"),Hl(1702,"br"),og()()(),Cl(1703,"td",17)(1704,"code",21),qx(1705,"string"),og()(),Cl(1706,"td",20)(1707,"em")(1708,"strong"),qx(1709,"(opcional)"),og()(),Cl(1710,"p"),qx(1711,"Texto que informa ao usu\xE1rio que o mesmo ser\xE1 bloqueado e por quanto tempo no popover de aviso de bloqueio."),og()()()(),Cl(1712,"h4",34)(1713,"code",5),qx(1714,"PoPageLoginRecovery"),og()(),Cl(1715,"div",2)(1716,"p"),qx(1717,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),Cl(1718,"code"),qx(1719,"po-modal-password-recovery"),og(),qx(1720,"."),og()(),Cl(1721,"h4",9),qx(1722,"Propriedades"),og(),Cl(1723,"table",10)(1724,"tr",11)(1725,"th",12),qx(1726,"Nome"),og(),Cl(1727,"th",12),qx(1728,"Tipo"),og(),Cl(1729,"th",12),qx(1730,"Descri\xE7\xE3o"),og()(),Cl(1731,"tr",13)(1732,"td",14)(1733,"div",15)(1734,"span",16),qx(1735," contactMail"),Hl(1736,"br"),og()()(),Cl(1737,"td",17)(1738,"code",21),qx(1739,"string"),og()(),Cl(1740,"td",20)(1741,"em")(1742,"strong"),qx(1743,"(opcional)"),og()(),Cl(1744,"p"),qx(1745,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Cl(1746,"tr",13)(1747,"td",14)(1748,"div",15)(1749,"span",16),qx(1750," phoneMask"),Hl(1751,"br"),og()()(),Cl(1752,"td",17)(1753,"code",21),qx(1754,"string"),og()(),Cl(1755,"td",20)(1756,"em")(1757,"strong"),qx(1758,"(opcional)"),og()(),Cl(1759,"p"),qx(1760,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),og()()(),Cl(1761,"tr",13)(1762,"td",14)(1763,"div",15)(1764,"span",16),qx(1765," type"),Hl(1766,"br"),og()()(),Cl(1767,"td",17)(1768,"code",36),qx(1769,"PoModalPasswordRecoveryType"),og()(),Cl(1770,"td",20)(1771,"em")(1772,"strong"),qx(1773,"(opcional)"),og()(),Cl(1774,"p"),qx(1775,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),Cl(1776,"a",37),qx(1777,"PoModalPasswordRecoveryType"),og(),qx(1778,"."),og(),Cl(1779,"blockquote")(1780,"p"),qx(1781,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),Cl(1782,"code"),qx(1783,"PoModalPasswordRecoveryType.Email"),og(),qx(1784,"."),og()()()(),Cl(1785,"tr",13)(1786,"td",14)(1787,"div",15)(1788,"span",16),qx(1789," url"),Hl(1790,"br"),og()()(),Cl(1791,"td",17)(1792,"code",21),qx(1793,"string"),og()(),Cl(1794,"td",20)(1795,"p"),qx(1796,"Endpoint usado pelo template "),Cl(1797,"strong"),qx(1798,"PoModalPasswordRecovery"),og(),qx(1799," para requisi\xE7\xE3o do recurso."),og(),Cl(1800,"blockquote")(1801,"p"),qx(1802,"Saiba mais em "),Cl(1803,"a",37),qx(1804,"PoModalPasswordRecovery"),og(),qx(1805,"."),og()()()()(),Cl(1806,"h4",34)(1807,"code",5),qx(1808,"PoPageLogin"),og()(),Cl(1809,"div",2)(1810,"p"),qx(1811,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Cl(1812,"code"),qx(1813,"po-page-login"),og(),qx(1814,"."),og()(),Cl(1815,"h4",9),qx(1816,"Propriedades"),og(),Cl(1817,"table",10)(1818,"tr",11)(1819,"th",12),qx(1820,"Nome"),og(),Cl(1821,"th",12),qx(1822,"Tipo"),og(),Cl(1823,"th",12),qx(1824,"Descri\xE7\xE3o"),og()(),Cl(1825,"tr",13)(1826,"td",14)(1827,"div",15)(1828,"span",16),qx(1829," login"),Hl(1830,"br"),og()()(),Cl(1831,"td",17)(1832,"code",21),qx(1833,"string"),og()(),Cl(1834,"td",20)(1835,"p"),qx(1836,"Login preenchido pelo usu\xE1rio."),og()()(),Cl(1837,"tr",13)(1838,"td",14)(1839,"div",15)(1840,"span",16),qx(1841," password"),Hl(1842,"br"),og()()(),Cl(1843,"td",17)(1844,"code",21),qx(1845,"string"),og()(),Cl(1846,"td",20)(1847,"p"),qx(1848,"Senha preenchida pelo usu\xE1rio, a mesma ser\xE1 convertida para [hash/md5] antes de ser enviada para a aplica\xE7\xE3o."),og()()(),Cl(1849,"tr",13)(1850,"td",14)(1851,"div",15)(1852,"span",16),qx(1853," rememberUser"),Hl(1854,"br"),og()()(),Cl(1855,"td",17)(1856,"code",25),qx(1857,"boolean"),og()(),Cl(1858,"td",20)(1859,"p"),qx(1860,"Essa propriedade informa se o usu\xE1rio quer que seus dados sejam lembrados em um acesso futuro."),og()()()(),Cl(1861,"h3"),qx(1862,"Enums"),og(),Cl(1863,"h4",4)(1864,"code",5),qx(1865,"PoPageLoginAuthenticationType"),og()(),Cl(1866,"div",2)(1867,"p")(1868,"em"),qx(1869,"Enum"),og(),qx(1870," para defini\xE7\xE3o do tipo de autentica\xE7\xE3o."),og()(),Cl(1871,"h4",9),qx(1872,"Propriedades"),og(),Cl(1873,"table",10)(1874,"tr",11)(1875,"th",12),qx(1876,"Nome"),og(),Cl(1877,"th",12),qx(1878,"Descri\xE7\xE3o"),og()(),Cl(1879,"tr",13)(1880,"td",14)(1881,"div",15)(1882,"span",16),qx(1883," Basic"),Hl(1884,"br"),og()()(),Cl(1885,"td",20)(1886,"p"),qx(1887,"Autentica\xE7\xE3o Basic"),og()()(),Cl(1888,"tr",13)(1889,"td",14)(1890,"div",15)(1891,"span",16),qx(1892," Bearer"),Hl(1893,"br"),og()()(),Cl(1894,"td",20)(1895,"p"),qx(1896,"Autentica\xE7\xE3o Bearer"),og()()()()());},dependencies:[Zr],encapsulation:2})}return r})();var Pe=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(Cn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-page-login-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-page-login-basic-view")(6,"sample-po-page-login-labs-view")(7,"sample-po-page-login-human-resources-view")(8,"sample-po-page-login-automatic-service-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ce,Ee,he,be,ve],encapsulation:2})}return r})();var We=[{path:"",component:Pe}],Ce=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[bL.forChild(We),bL]})}return r})();var wt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[ca,Ce]})}return r})();export{wt as DocPoPageLoginModule};