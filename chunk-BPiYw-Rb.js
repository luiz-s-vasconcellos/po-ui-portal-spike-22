import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,ca as bt,cb as Da,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cc as za,aq as ux,at as dx,a3 as pNe,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ie=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Wl(0,"po-page-blocked-user");},dependencies:[Da],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Blocked User Basic"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-blocked-user></po-page-blocked-user>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-basic"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ie],encapsulation:2})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=bt.None;secondaryLogo;url;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];reasonOptions=[{label:"Default",value:bt.None},{label:"Expired Password",value:bt.ExpiredPassword},{label:"Exceeded Attempts",value:bt.ExceededAttempts}];ngOnInit(){this.restore();}changeLiterals(){try{this.customParams=JSON.parse(this.params);}catch(p){this.customParams=void 0;}}restore(){this.componentsSize="medium",this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=bt.None,this.secondaryLogo="",this.url=void 0;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:false,decls:15,vars:18,consts:[["f","ngForm"],[3,"p-components-size","p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","4","p-label","Reason Screen Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'{"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Secondary logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(i,a){if(i&1){let u=Ex();Wl(0,"po-page-blocked-user",1)(1,"po-divider",2),Sl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Ew("ngModelChange",function(r){return Xy(u),tN(a.contactPhone,r)||(a.contactPhone=r),Qy(r)}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(r){return Xy(u),tN(a.contactMail,r)||(a.contactMail=r),Qy(r)}),sg(),JA(),Sl(7,"po-radio-group",6),Ew("ngModelChange",function(r){return Xy(u),tN(a.reason,r)||(a.reason=r),Qy(r)}),sg(),JA(),Sl(8,"po-input",7),Ew("ngModelChange",function(r){return Xy(u),tN(a.params,r)||(a.params=r),Qy(r)}),ht("p-change",function(){return a.changeLiterals()}),sg(),JA(),Sl(9,"po-input",8),Ew("ngModelChange",function(r){return Xy(u),tN(a.url,r)||(a.url=r),Qy(r)}),sg(),JA(),Sl(10,"po-input",9),Ew("ngModelChange",function(r){return Xy(u),tN(a.logo,r)||(a.logo=r),Qy(r)}),sg(),JA(),Sl(11,"po-input",10),Ew("ngModelChange",function(r){return Xy(u),tN(a.secondaryLogo,r)||(a.secondaryLogo=r),Qy(r)}),sg(),JA(),Sl(12,"po-radio-group",11),Ew("ngModelChange",function(r){return Xy(u),tN(a.componentsSize,r)||(a.componentsSize=r),Qy(r)}),sg(),JA(),sg(),Sl(13,"div",3)(14,"po-button",12),ht("p-click",function(){return a.restore()}),sg()()();}i&2&&(tw("p-components-size",a.componentsSize)("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),Vp(5),Dw("ngModel",a.contactPhone),t0(),Vp(),Dw("ngModel",a.contactMail),t0(),Vp(),Dw("ngModel",a.reason),tw("p-options",a.reasonOptions),t0(),Vp(),Dw("ngModel",a.params),t0(),Vp(),Dw("ngModel",a.url),t0(),Vp(),Dw("ngModel",a.logo),t0(),Vp(),Dw("ngModel",a.secondaryLogo),t0(),Vp(),Dw("ngModel",a.componentsSize),tw("p-options",a.componentsSizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Pde,Da],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Blocked User Labs"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-blocked-user
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-labs"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return n})();function ke(n,z){if(n&1){let p=Ex();Sl(0,"po-page-login",2),ht("p-login-submit",function(){Xy(p);let a=Tx();return Qy(a.checkLogin())}),sg();}}function xe(n,z){if(n&1&&Wl(0,"po-page-blocked-user",1),n&2){let p=Tx();tw("p-params",p.params);}}var re=(()=>{class n{blocked=false;params={attempts:1,hours:48};checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(ux(0,ke,1,0,"po-page-login",0),ux(1,xe,1,1,"po-page-blocked-user",1)),i&2&&(dx(a.blocked?-1:0),Vp(),dx(a.blocked?1:-1));},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Blocked User Exceeded Attempts"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),sg(),Sl(13,"pre",7),Jx(14,`@if (!blocked) {
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-exceeded-attempts"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return n})();function _e(n,z){if(n&1){let p=Ex();Sl(0,"po-page-login",2),ht("p-login-submit",function(){Xy(p);let a=Tx();return Qy(a.checkLogin())}),sg();}}function we(n,z){n&1&&Wl(0,"po-page-blocked-user",1);}var de=(()=>{class n{blocked=false;checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(ux(0,_e,1,0,"po-page-login",0),ux(1,we,1,0,"po-page-blocked-user",1)),i&2&&(dx(a.blocked?-1:0),Vp(),dx(a.blocked?1:-1));},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Blocked User Expired Password"),sg(),Sl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),sg(),Sl(13,"pre",7),Jx(14,`@if (!blocked) {
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-blocked-user-expired-password"),sg(),Wl(23,"hr")),i&2&&(Vp(5),Hx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ue,a.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return n})();var ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do template do po-page-blocked-user."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoPageBlockedUserComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-page-blocked-user"),sg(),Jx(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),sg(),Sl(18,"p"),Jx(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),sg(),Sl(20,"p"),Jx(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),sg(),Sl(22,"p"),Jx(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(24,"em"),Jx(25,"assets"),sg(),Jx(26," no arquivo "),Sl(27,"strong"),Jx(28,"angular.json"),sg(),Jx(29," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Sl(30,"pre")(31,"code"),Jx(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()(),Wl(33,"hr"),Sl(34,"h4"),Jx(35,"Praticidade"),sg(),Sl(36,"p"),Jx(37,"O "),Sl(38,"code"),Jx(39,"po-page-blocked-user"),sg(),Jx(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Sl(41,"code"),Jx(42,"/access-denied"),sg(),Jx(43,":"),sg(),Sl(44,"pre")(45,"code"),Jx(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),sg()(),Sl(47,"blockquote")(48,"p"),Jx(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),sg()()(),Sl(50,"div",6)(51,"h4",7),Jx(52,"Seletor"),sg(),Sl(53,"pre",8),Jx(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),sg()(),Sl(55,"h4",9),Jx(56,"Propriedades"),sg(),Sl(57,"table",10)(58,"tr",11)(59,"th",12),Jx(60,"Nome"),sg(),Sl(61,"th",12),Jx(62,"Tipo"),sg(),Sl(63,"th",12),Jx(64,"Padr\xE3o"),sg(),Sl(65,"th",12),Jx(66,"Descri\xE7\xE3o"),sg()(),Sl(67,"tr",13)(68,"td",14)(69,"div",15)(70,"span",16),Jx(71," p-components-size"),Wl(72,"br"),sg()()(),Sl(73,"td",17)(74,"code",18),Jx(75,"string"),sg()(),Sl(76,"td",19)(77,"p")(78,"code"),Jx(79,"medium"),sg()()(),Sl(80,"td",20)(81,"em")(82,"strong"),Jx(83,"(opcional)"),sg()(),Sl(84,"p"),Jx(85,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(86,"ul")(87,"li")(88,"code"),Jx(89,"small"),sg(),Jx(90,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(91,"li")(92,"code"),Jx(93,"medium"),sg(),Jx(94,": aplica a medida medium de cada componente."),sg()(),Sl(95,"blockquote")(96,"p"),Jx(97,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(98,"code"),Jx(99,"medium"),sg(),Jx(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(101,"a",21),Jx(102,"po-theme"),sg(),Jx(103,"."),sg()()()(),Sl(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),Jx(108," p-contact-email"),Wl(109,"br"),sg()()(),Sl(110,"td",17)(111,"code",18),Jx(112,"string"),sg()(),Sl(113,"td",19),Jx(114,"-"),sg(),Sl(115,"td",20)(116,"em")(117,"strong"),Jx(118,"(opcional)"),sg()(),Sl(119,"p"),Jx(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),sg()()(),Sl(121,"tr",13)(122,"td",14)(123,"div",15)(124,"span",16),Jx(125," p-contact-phone"),Wl(126,"br"),sg()()(),Sl(127,"td",17)(128,"code",18),Jx(129,"string"),sg()(),Sl(130,"td",19),Jx(131,"-"),sg(),Sl(132,"td",20)(133,"em")(134,"strong"),Jx(135,"(opcional)"),sg()(),Sl(136,"p"),Jx(137,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),sg(),Sl(138,"blockquote")(139,"p"),Jx(140,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),sg()()()(),Sl(141,"tr",13)(142,"td",14)(143,"div",15)(144,"span",16),Jx(145," p-logo"),Wl(146,"br"),sg()()(),Sl(147,"td",17)(148,"code",18),Jx(149,"string"),sg()(),Sl(150,"td",19),Jx(151,"-"),sg(),Sl(152,"td",20)(153,"em")(154,"strong"),Jx(155,"(opcional)"),sg()(),Sl(156,"p"),Jx(157,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),sg()()(),Sl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),Jx(162," p-params"),Wl(163,"br"),sg()()(),Sl(164,"td",17)(165,"code",22),Jx(166,"PoPageBlockedUserReasonParams"),sg()(),Sl(167,"td",19),Jx(168,"-"),sg(),Sl(169,"td",20)(170,"em")(171,"strong"),Jx(172,"(opcional)"),sg()(),Sl(173,"p"),Jx(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),sg(),Sl(175,"pre")(176,"code"),Jx(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),sg()(),Sl(178,"blockquote")(179,"p"),Jx(180,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),sg()(),Sl(181,"blockquote")(182,"p"),Jx(183,"Veja os par\xE2metros customiz\xE1veis na interface "),Sl(184,"code"),Jx(185,"PoPageBlockedUserReasonParams"),sg(),Jx(186,"."),sg()()()(),Sl(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),Jx(191," p-reason"),Wl(192,"br"),sg()()(),Sl(193,"td",17)(194,"code",23),Jx(195,"PoPageBlockedUserReason"),sg()(),Sl(196,"td",19)(197,"p")(198,"code"),Jx(199,"PoPageBlockedUserReason.None"),sg()()(),Sl(200,"td",20)(201,"em")(202,"strong"),Jx(203,"(opcional)"),sg()(),Sl(204,"p"),Jx(205,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),sg(),Sl(206,"blockquote")(207,"p"),Jx(208,"Veja os valores v\xE1lidos no "),Sl(209,"em"),Jx(210,"enum"),sg(),Sl(211,"code"),Jx(212,"PoPageBlockedUserReason"),sg(),Jx(213,"."),sg()()()(),Sl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),Jx(218," p-secondary-logo"),Wl(219,"br"),sg()()(),Sl(220,"td",17)(221,"code",18),Jx(222,"string"),sg()(),Sl(223,"td",19),Jx(224,"-"),sg(),Sl(225,"td",20)(226,"em")(227,"strong"),Jx(228,"(opcional)"),sg()(),Sl(229,"p"),Jx(230,"Caminho para a logomarca localizada no rodap\xE9."),sg()()(),Sl(231,"tr",13)(232,"td",14)(233,"div",15)(234,"span",16),Jx(235," p-url-back"),Wl(236,"br"),sg()()(),Sl(237,"td",17)(238,"code",18),Jx(239,"string"),sg()(),Sl(240,"td",19)(241,"p")(242,"code"),Jx(243,"/"),sg()()(),Sl(244,"td",20)(245,"em")(246,"strong"),Jx(247,"(opcional)"),sg()(),Sl(248,"p"),Jx(249,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),sg()()()(),Sl(250,"h3"),Jx(251,"Interfaces"),sg(),Sl(252,"h4",24)(253,"code",5),Jx(254,"PoPageBlockedUserReasonParams"),sg()(),Sl(255,"div",2)(256,"p"),Jx(257,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),Sl(258,"code"),Jx(259,"po-page-blocked-user"),sg(),Jx(260,"."),sg()(),Sl(261,"h4",9),Jx(262,"Propriedades"),sg(),Sl(263,"table",10)(264,"tr",11)(265,"th",12),Jx(266,"Nome"),sg(),Sl(267,"th",12),Jx(268,"Tipo"),sg(),Sl(269,"th",12),Jx(270,"Descri\xE7\xE3o"),sg()(),Sl(271,"tr",13)(272,"td",14)(273,"div",15)(274,"span",16),Jx(275," attempts"),Wl(276,"br"),sg()()(),Sl(277,"td",17)(278,"code",25),Jx(279,"number"),sg()(),Sl(280,"td",20)(281,"em")(282,"strong"),Jx(283,"(opcional)"),sg()(),Sl(284,"p"),Jx(285,"Quantidade m\xE1xima de tentativas."),sg()()(),Sl(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),Jx(290," days"),Wl(291,"br"),sg()()(),Sl(292,"td",17)(293,"code",25),Jx(294,"number"),sg()(),Sl(295,"td",20)(296,"em")(297,"strong"),Jx(298,"(opcional)"),sg()(),Sl(299,"p"),Jx(300,"Quantidade de dias para expira\xE7\xE3o de senha."),sg()()(),Sl(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),Jx(305," hours"),Wl(306,"br"),sg()()(),Sl(307,"td",17)(308,"code",25),Jx(309,"number"),sg()(),Sl(310,"td",20)(311,"em")(312,"strong"),Jx(313,"(opcional)"),sg()(),Sl(314,"p"),Jx(315,"Horas que o sistema permanecer\xE1 bloqueado."),sg()()()(),Sl(316,"h3"),Jx(317,"Enums"),sg(),Sl(318,"h4",4)(319,"code",5),Jx(320,"PoPageBlockedUserReason"),sg()(),Sl(321,"div",2)(322,"p")(323,"em"),Jx(324,"Enum"),sg(),Jx(325," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),sg()(),Sl(326,"h4",9),Jx(327,"Propriedades"),sg(),Sl(328,"table",10)(329,"tr",11)(330,"th",12),Jx(331,"Nome"),sg(),Sl(332,"th",12),Jx(333,"Descri\xE7\xE3o"),sg()(),Sl(334,"tr",13)(335,"td",14)(336,"div",15)(337,"span",16),Jx(338," None"),Wl(339,"br"),sg()()(),Sl(340,"td",20)(341,"p"),Jx(342,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),sg()()(),Sl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),Jx(347," ExceededAttempts"),Wl(348,"br"),sg()()(),Sl(349,"td",20)(350,"p"),Jx(351,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),sg()()(),Sl(352,"tr",13)(353,"td",14)(354,"div",15)(355,"span",16),Jx(356," ExpiredPassword"),Wl(357,"br"),sg()()(),Sl(358,"td",20)(359,"p"),Jx(360,"Defini\xE7\xE3o para senha expirada."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ge=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Wl(3,"sample-po-page-blocked-user-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Wl(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),sg()()()),i&2&&(tw("p-actions",a.actions),Vp(2),tw("p-active",a.activeTab==="doc"),Vp(2),tw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[pNe,Gme,Qme,le,se,me,ce,ue],encapsulation:2})}return n})();var De=[{path:"",component:ge}],he=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[pL.forChild(De),pL]})}return n})();var rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,he]})}return n})();export{rt as DocPoPageBlockedUserModule};