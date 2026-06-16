import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,bD as $n,bE as Q1,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,bF as X1,ao as QA,ar as JA,a3 as D3,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var le=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Ul(0,"po-page-blocked-user");},dependencies:[Q1],encapsulation:2,changeDetection:1})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Blocked User Basic"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-blocked-user></po-page-blocked-user>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-blocked-user-basic"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ee,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,le],encapsulation:2})}return n})();var se=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=$n.None;secondaryLogo;url;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];reasonOptions=[{label:"Default",value:$n.None},{label:"Expired Password",value:$n.ExpiredPassword},{label:"Exceeded Attempts",value:$n.ExceededAttempts}];ngOnInit(){this.restore();}changeLiterals(){try{this.customParams=JSON.parse(this.params);}catch(p){this.customParams=void 0;}}restore(){this.componentsSize="medium",this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=$n.None,this.secondaryLogo="",this.url=void 0;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:false,decls:15,vars:18,consts:[["f","ngForm"],[3,"p-components-size","p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","4","p-label","Reason Screen Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'{"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Secondary logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(i,a){if(i&1){let u=lx();Ul(0,"po-page-blocked-user",1)(1,"po-divider",2),wl(2,"form",null,0)(4,"div",3)(5,"po-input",4),pw("ngModelChange",function(r){return Qy(u),$x(a.contactPhone,r)||(a.contactPhone=r),Jy(r)}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(r){return Qy(u),$x(a.contactMail,r)||(a.contactMail=r),Jy(r)}),ng(),$0(),wl(7,"po-radio-group",6),pw("ngModelChange",function(r){return Qy(u),$x(a.reason,r)||(a.reason=r),Jy(r)}),ng(),$0(),wl(8,"po-input",7),pw("ngModelChange",function(r){return Qy(u),$x(a.params,r)||(a.params=r),Jy(r)}),ut("p-change",function(){return a.changeLiterals()}),ng(),$0(),wl(9,"po-input",8),pw("ngModelChange",function(r){return Qy(u),$x(a.url,r)||(a.url=r),Jy(r)}),ng(),$0(),wl(10,"po-input",9),pw("ngModelChange",function(r){return Qy(u),$x(a.logo,r)||(a.logo=r),Jy(r)}),ng(),$0(),wl(11,"po-input",10),pw("ngModelChange",function(r){return Qy(u),$x(a.secondaryLogo,r)||(a.secondaryLogo=r),Jy(r)}),ng(),$0(),wl(12,"po-radio-group",11),pw("ngModelChange",function(r){return Qy(u),$x(a.componentsSize,r)||(a.componentsSize=r),Jy(r)}),ng(),$0(),ng(),wl(13,"div",3)(14,"po-button",12),ut("p-click",function(){return a.restore()}),ng()()();}i&2&&(YE("p-components-size",a.componentsSize)("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),Pp(5),hw("ngModel",a.contactPhone),G0(),Pp(),hw("ngModel",a.contactMail),G0(),Pp(),hw("ngModel",a.reason),YE("p-options",a.reasonOptions),G0(),Pp(),hw("ngModel",a.params),G0(),Pp(),hw("ngModel",a.url),G0(),Pp(),hw("ngModel",a.logo),G0(),Pp(),hw("ngModel",a.secondaryLogo),G0(),Pp(),hw("ngModel",a.componentsSize),YE("p-options",a.componentsSizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ga,Q1],encapsulation:2,changeDetection:1})}return n})();var fe=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Blocked User Labs"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-blocked-user
  [p-components-size]="componentsSize"
  [p-contact-email]="contactMail"
  [p-contact-phone]="contactPhone"
  [p-logo]="logo"
  [p-params]="customParams"
  [p-reason]="reason"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="url"
>
</po-page-blocked-user>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="contactPhone"
      [(ngModel)]="contactPhone"
      p-clean
      p-help="11 99999 9999"
      p-label="Contact Phone"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="contactMail"
      [(ngModel)]="contactMail"
      p-help="user@po-ui.com.br"
      p-label="Contact Mail"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="reason"
      [(ngModel)]="reason"
      p-columns="4"
      p-label="Reason Screen Type"
      [p-options]="reasonOptions"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="params"
      [(ngModel)]="params"
      p-clean
      p-help='{"attempts": 20, "days": 20, "hours": 20}'
      p-label="Custom Params"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input class="po-md-6" name="url" [(ngModel)]="url" p-clean p-help="https://po-ui.io/home" p-label="URL Link">
    </po-input>

    <po-input
      class="po-md-6"
      name="logo"
      [(ngModel)]="logo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Logo"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="secondaryLogo"
      [(ngModel)]="secondaryLogo"
      p-clean
      p-help="https://po-ui.io/assets/po-logos/po_color.svg"
      p-label="Secondary logo"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption } from '@po-ui/ng-components';
import { PoPageBlockedUserReason, PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-labs',
  templateUrl: './sample-po-page-blocked-user-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserLabsComponent implements OnInit {
  componentsSize: string;
  contactMail: string;
  contactPhone: string;
  customParams: PoPageBlockedUserReasonParams;
  params: string;
  logo: string;
  reason: PoPageBlockedUserReason = PoPageBlockedUserReason.None;
  secondaryLogo: string;
  url: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly reasonOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoPageBlockedUserReason.None },
    { label: 'Expired Password', value: PoPageBlockedUserReason.ExpiredPassword },
    { label: 'Exceeded Attempts', value: PoPageBlockedUserReason.ExceededAttempts }
  ];

  ngOnInit() {
    this.restore();
  }

  changeLiterals() {
    try {
      this.customParams = JSON.parse(this.params);
    } catch {
      this.customParams = undefined;
    }
  }

  restore() {
    this.componentsSize = 'medium';
    this.contactMail = undefined;
    this.contactPhone = undefined;
    this.customParams = { attempts: 5, days: 90, hours: 24 };
    this.params = '';
    this.logo = '';
    this.reason = PoPageBlockedUserReason.None;
    this.secondaryLogo = '';
    this.url = undefined;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-blocked-user-labs"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return n})();function xe(n,W){if(n&1){let p=lx();wl(0,"po-page-login",2),ut("p-login-submit",function(){Qy(p);let a=gx();return Jy(a.checkLogin())}),ng();}}function ve(n,W){if(n&1&&Ul(0,"po-page-blocked-user",1),n&2){let p=gx();YE("p-params",p.params);}}var me=(()=>{class n{blocked=false;params={attempts:1,hours:48};checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(QA(0,xe,1,0,"po-page-login",0),QA(1,ve,1,1,"po-page-blocked-user",1)),i&2&&(JA(a.blocked?-1:0),Pp(),JA(a.blocked?1:-1));},dependencies:[Q1,X1],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),de=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Blocked User Exceeded Attempts"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),ng(),wl(13,"pre",7),Ux(14,`@if (!blocked) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (blocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="exceededAttempts"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
    [p-params]="params"
  >
  </po-page-blocked-user>
}
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoPageBlockedUserReasonParams } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-blocked-user-exceeded-attempts',
  templateUrl: './sample-po-page-blocked-user-exceeded-attempts.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserExceededAttemptsComponent {
  blocked = false;
  params: PoPageBlockedUserReasonParams = { attempts: 1, hours: 48 };

  checkLogin() {
    this.blocked = true;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-blocked-user-exceeded-attempts"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return n})();function we(n,W){if(n&1){let p=lx();wl(0,"po-page-login",2),ut("p-login-submit",function(){Qy(p);let a=gx();return Jy(a.checkLogin())}),ng();}}function Me(n,W){n&1&&Ul(0,"po-page-blocked-user",1);}var ce=(()=>{class n{blocked=false;checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(QA(0,we,1,0,"po-page-login",0),QA(1,Me,1,0,"po-page-blocked-user",1)),i&2&&(JA(a.blocked?-1:0),Pp(),JA(a.blocked?1:-1));},dependencies:[Q1,X1],encapsulation:2,changeDetection:1})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Blocked User Expired Password"),ng(),wl(4,"a",2),ut("click",function(){return a.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),ng(),wl(13,"pre",7),Ux(14,`@if (!blocked) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (blocked) {
  <po-page-blocked-user
    p-contact-email="user@po-ui.com.br"
    p-contact-phone="0800 709 8100"
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-reason="expiredPassword"
    p-url-back="https://po-ui.io/documentation/po-page-blocked-user"
  >
  </po-page-blocked-user>
}
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-expired-password',
  templateUrl: './sample-po-page-blocked-user-expired-password.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserExpiredPasswordComponent {
  blocked = false;

  checkLogin() {
    this.blocked = true;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-blocked-user-expired-password"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+a.sampleCodeButtonIcon),Pp(),cg(" ",a.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Te,a.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ce],encapsulation:2})}return n})();var ge=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do template do po-page-blocked-user."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoPageBlockedUserComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-page-blocked-user"),ng(),Ux(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),ng(),wl(18,"p"),Ux(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),ng(),wl(20,"p"),Ux(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),ng(),wl(22,"p"),Ux(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),wl(24,"em"),Ux(25,"assets"),ng(),Ux(26," no arquivo "),wl(27,"strong"),Ux(28,"angular.json"),ng(),Ux(29," da aplica\xE7\xE3o na seguinte ordem:"),ng(),wl(30,"pre")(31,"code"),Ux(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ng()(),Ul(33,"hr"),wl(34,"h4"),Ux(35,"Praticidade"),ng(),wl(36,"p"),Ux(37,"O "),wl(38,"code"),Ux(39,"po-page-blocked-user"),ng(),Ux(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),wl(41,"code"),Ux(42,"/access-denied"),ng(),Ux(43,":"),ng(),wl(44,"pre")(45,"code"),Ux(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'access-denied', component: PoPageBlockedUserComponent, data: {
      contactEmail: 'dev.po@po-ui.com',
      contactPhone: '0800 1234 000',
      reason: PoPageBlockedUserReason.ExpiredPassword,
      urlBack: '/home'
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),ng()(),wl(47,"blockquote")(48,"p"),Ux(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),ng()()(),wl(50,"div",6)(51,"h4",7),Ux(52,"Seletor"),ng(),wl(53,"pre",8),Ux(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),ng()(),wl(55,"h4",9),Ux(56,"Propriedades"),ng(),wl(57,"table",10)(58,"tr",11)(59,"th",12),Ux(60,"Nome"),ng(),wl(61,"th",12),Ux(62,"Tipo"),ng(),wl(63,"th",12),Ux(64,"Padr\xE3o"),ng(),wl(65,"th",12),Ux(66,"Descri\xE7\xE3o"),ng()(),wl(67,"tr",13)(68,"td",14)(69,"div",15)(70,"span",16),Ux(71," p-components-size"),Ul(72,"br"),ng()()(),wl(73,"td",17)(74,"code",18),Ux(75,"string"),ng()(),wl(76,"td",19)(77,"p")(78,"code"),Ux(79,"medium"),ng()()(),wl(80,"td",20)(81,"em")(82,"strong"),Ux(83,"(opcional)"),ng()(),wl(84,"p"),Ux(85,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(86,"ul")(87,"li")(88,"code"),Ux(89,"small"),ng(),Ux(90,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(91,"li")(92,"code"),Ux(93,"medium"),ng(),Ux(94,": aplica a medida medium de cada componente."),ng()(),wl(95,"blockquote")(96,"p"),Ux(97,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(98,"code"),Ux(99,"medium"),ng(),Ux(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(101,"a",21),Ux(102,"po-theme"),ng(),Ux(103,"."),ng()()()(),wl(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),Ux(108," p-contact-email"),Ul(109,"br"),ng()()(),wl(110,"td",17)(111,"code",18),Ux(112,"string"),ng()(),wl(113,"td",19),Ux(114,"-"),ng(),wl(115,"td",20)(116,"em")(117,"strong"),Ux(118,"(opcional)"),ng()(),wl(119,"p"),Ux(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),ng()()(),wl(121,"tr",13)(122,"td",14)(123,"div",15)(124,"span",16),Ux(125," p-contact-phone"),Ul(126,"br"),ng()()(),wl(127,"td",17)(128,"code",18),Ux(129,"string"),ng()(),wl(130,"td",19),Ux(131,"-"),ng(),wl(132,"td",20)(133,"em")(134,"strong"),Ux(135,"(opcional)"),ng()(),wl(136,"p"),Ux(137,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),ng(),wl(138,"blockquote")(139,"p"),Ux(140,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),ng()()()(),wl(141,"tr",13)(142,"td",14)(143,"div",15)(144,"span",16),Ux(145," p-logo"),Ul(146,"br"),ng()()(),wl(147,"td",17)(148,"code",18),Ux(149,"string"),ng()(),wl(150,"td",19),Ux(151,"-"),ng(),wl(152,"td",20)(153,"em")(154,"strong"),Ux(155,"(opcional)"),ng()(),wl(156,"p"),Ux(157,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),ng()()(),wl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),Ux(162," p-params"),Ul(163,"br"),ng()()(),wl(164,"td",17)(165,"code",22),Ux(166,"PoPageBlockedUserReasonParams"),ng()(),wl(167,"td",19),Ux(168,"-"),ng(),wl(169,"td",20)(170,"em")(171,"strong"),Ux(172,"(opcional)"),ng()(),wl(173,"p"),Ux(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),ng(),wl(175,"pre")(176,"code"),Ux(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),ng()(),wl(178,"blockquote")(179,"p"),Ux(180,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),ng()(),wl(181,"blockquote")(182,"p"),Ux(183,"Veja os par\xE2metros customiz\xE1veis na interface "),wl(184,"code"),Ux(185,"PoPageBlockedUserReasonParams"),ng(),Ux(186,"."),ng()()()(),wl(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),Ux(191," p-reason"),Ul(192,"br"),ng()()(),wl(193,"td",17)(194,"code",23),Ux(195,"PoPageBlockedUserReason"),ng()(),wl(196,"td",19)(197,"p")(198,"code"),Ux(199,"PoPageBlockedUserReason.None"),ng()()(),wl(200,"td",20)(201,"em")(202,"strong"),Ux(203,"(opcional)"),ng()(),wl(204,"p"),Ux(205,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),ng(),wl(206,"blockquote")(207,"p"),Ux(208,"Veja os valores v\xE1lidos no "),wl(209,"em"),Ux(210,"enum"),ng(),wl(211,"code"),Ux(212,"PoPageBlockedUserReason"),ng(),Ux(213,"."),ng()()()(),wl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),Ux(218," p-secondary-logo"),Ul(219,"br"),ng()()(),wl(220,"td",17)(221,"code",18),Ux(222,"string"),ng()(),wl(223,"td",19),Ux(224,"-"),ng(),wl(225,"td",20)(226,"em")(227,"strong"),Ux(228,"(opcional)"),ng()(),wl(229,"p"),Ux(230,"Caminho para a logomarca localizada no rodap\xE9."),ng()()(),wl(231,"tr",13)(232,"td",14)(233,"div",15)(234,"span",16),Ux(235," p-url-back"),Ul(236,"br"),ng()()(),wl(237,"td",17)(238,"code",18),Ux(239,"string"),ng()(),wl(240,"td",19)(241,"p")(242,"code"),Ux(243,"/"),ng()()(),wl(244,"td",20)(245,"em")(246,"strong"),Ux(247,"(opcional)"),ng()(),wl(248,"p"),Ux(249,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),ng()()()(),wl(250,"h3"),Ux(251,"Interfaces"),ng(),wl(252,"h4",24)(253,"code",5),Ux(254,"PoPageBlockedUserReasonParams"),ng()(),wl(255,"div",2)(256,"p"),Ux(257,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),wl(258,"code"),Ux(259,"po-page-blocked-user"),ng(),Ux(260,"."),ng()(),wl(261,"h4",9),Ux(262,"Propriedades"),ng(),wl(263,"table",10)(264,"tr",11)(265,"th",12),Ux(266,"Nome"),ng(),wl(267,"th",12),Ux(268,"Tipo"),ng(),wl(269,"th",12),Ux(270,"Descri\xE7\xE3o"),ng()(),wl(271,"tr",13)(272,"td",14)(273,"div",15)(274,"span",16),Ux(275," attempts"),Ul(276,"br"),ng()()(),wl(277,"td",17)(278,"code",25),Ux(279,"number"),ng()(),wl(280,"td",20)(281,"em")(282,"strong"),Ux(283,"(opcional)"),ng()(),wl(284,"p"),Ux(285,"Quantidade m\xE1xima de tentativas."),ng()()(),wl(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),Ux(290," days"),Ul(291,"br"),ng()()(),wl(292,"td",17)(293,"code",25),Ux(294,"number"),ng()(),wl(295,"td",20)(296,"em")(297,"strong"),Ux(298,"(opcional)"),ng()(),wl(299,"p"),Ux(300,"Quantidade de dias para expira\xE7\xE3o de senha."),ng()()(),wl(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),Ux(305," hours"),Ul(306,"br"),ng()()(),wl(307,"td",17)(308,"code",25),Ux(309,"number"),ng()(),wl(310,"td",20)(311,"em")(312,"strong"),Ux(313,"(opcional)"),ng()(),wl(314,"p"),Ux(315,"Horas que o sistema permanecer\xE1 bloqueado."),ng()()()(),wl(316,"h3"),Ux(317,"Enums"),ng(),wl(318,"h4",4)(319,"code",5),Ux(320,"PoPageBlockedUserReason"),ng()(),wl(321,"div",2)(322,"p")(323,"em"),Ux(324,"Enum"),ng(),Ux(325," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),ng()(),wl(326,"h4",9),Ux(327,"Propriedades"),ng(),wl(328,"table",10)(329,"tr",11)(330,"th",12),Ux(331,"Nome"),ng(),wl(332,"th",12),Ux(333,"Descri\xE7\xE3o"),ng()(),wl(334,"tr",13)(335,"td",14)(336,"div",15)(337,"span",16),Ux(338," None"),Ul(339,"br"),ng()()(),wl(340,"td",20)(341,"p"),Ux(342,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),ng()()(),wl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),Ux(347," ExceededAttempts"),Ul(348,"br"),ng()()(),wl(349,"td",20)(350,"p"),Ux(351,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),ng()()(),wl(352,"tr",13)(353,"td",14)(354,"div",15)(355,"span",16),Ux(356," ExpiredPassword"),Ul(357,"br"),ng()()(),wl(358,"td",20)(359,"p"),Ux(360,"Defini\xE7\xE3o para senha expirada."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var he=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return a.changeTab("doc")}),Ul(3,"sample-po-page-blocked-user-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return a.changeTab("web")}),Ul(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),ng()()()),i&2&&(YE("p-actions",a.actions),Pp(2),YE("p-active",a.activeTab==="doc"),Pp(2),YE("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[D3,Vd,Rd,pe,re,de,ue,ge],encapsulation:2})}return n})();var Oe=[{path:"",component:he}],be=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[vL.forChild(Oe),vL]})}return n})();var ht=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe$1({type:n});static \u0275inj=ue$1({imports:[u5,be]})}return n})();export{ht as DocPoPageBlockedUserModule};