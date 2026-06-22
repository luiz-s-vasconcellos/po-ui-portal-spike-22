import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,ca as bt,cb as Da,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,c8 as Sde,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,cc as za,aq as fx,at as hx,a3 as aNe,aA as Rx,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ie=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Gl(0,"po-page-blocked-user");},dependencies:[Da],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Blocked User Basic"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-blocked-user></po-page-blocked-user>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-blocked-user-basic"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Pe,a.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ie],encapsulation:2})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=bt.None;secondaryLogo;url;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];reasonOptions=[{label:"Default",value:bt.None},{label:"Expired Password",value:bt.ExpiredPassword},{label:"Exceeded Attempts",value:bt.ExceededAttempts}];ngOnInit(){this.restore();}changeLiterals(){try{this.customParams=JSON.parse(this.params);}catch(p){this.customParams=void 0;}}restore(){this.componentsSize="medium",this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=bt.None,this.secondaryLogo="",this.url=void 0;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:false,decls:15,vars:18,consts:[["f","ngForm"],[3,"p-components-size","p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","4","p-label","Reason Screen Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'{"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Secondary logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(i,a){if(i&1){let u=Cx();Gl(0,"po-page-blocked-user",1)(1,"po-divider",2),Tl(2,"form",null,0)(4,"div",3)(5,"po-input",4),Ew("ngModelChange",function(r){return Ky(u),rN(a.contactPhone,r)||(a.contactPhone=r),Xy(r)}),sg(),t0(),Tl(6,"po-input",5),Ew("ngModelChange",function(r){return Ky(u),rN(a.contactMail,r)||(a.contactMail=r),Xy(r)}),sg(),t0(),Tl(7,"po-radio-group",6),Ew("ngModelChange",function(r){return Ky(u),rN(a.reason,r)||(a.reason=r),Xy(r)}),sg(),t0(),Tl(8,"po-input",7),Ew("ngModelChange",function(r){return Ky(u),rN(a.params,r)||(a.params=r),Xy(r)}),ht("p-change",function(){return a.changeLiterals()}),sg(),t0(),Tl(9,"po-input",8),Ew("ngModelChange",function(r){return Ky(u),rN(a.url,r)||(a.url=r),Xy(r)}),sg(),t0(),Tl(10,"po-input",9),Ew("ngModelChange",function(r){return Ky(u),rN(a.logo,r)||(a.logo=r),Xy(r)}),sg(),t0(),Tl(11,"po-input",10),Ew("ngModelChange",function(r){return Ky(u),rN(a.secondaryLogo,r)||(a.secondaryLogo=r),Xy(r)}),sg(),t0(),Tl(12,"po-radio-group",11),Ew("ngModelChange",function(r){return Ky(u),rN(a.componentsSize,r)||(a.componentsSize=r),Xy(r)}),sg(),t0(),sg(),Tl(13,"div",3)(14,"po-button",12),ht("p-click",function(){return a.restore()}),sg()()();}i&2&&(tw("p-components-size",a.componentsSize)("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),Vp(5),Dw("ngModel",a.contactPhone),r0(),Vp(),Dw("ngModel",a.contactMail),r0(),Vp(),Dw("ngModel",a.reason),tw("p-options",a.reasonOptions),r0(),Vp(),Dw("ngModel",a.params),r0(),Vp(),Dw("ngModel",a.url),r0(),Vp(),Dw("ngModel",a.logo),r0(),Vp(),Dw("ngModel",a.secondaryLogo),r0(),Vp(),Dw("ngModel",a.componentsSize),tw("p-options",a.componentsSizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,Sde,Da],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Blocked User Labs"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-blocked-user
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-blocked-user-labs"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,pe],encapsulation:2})}return n})();function ke(n,z){if(n&1){let p=Cx();Tl(0,"po-page-login",2),ht("p-login-submit",function(){Ky(p);let a=Rx();return Xy(a.checkLogin())}),sg();}}function xe(n,z){if(n&1&&Gl(0,"po-page-blocked-user",1),n&2){let p=Rx();tw("p-params",p.params);}}var re=(()=>{class n{blocked=false;params={attempts:1,hours:48};checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(fx(0,ke,1,0,"po-page-login",0),fx(1,xe,1,1,"po-page-blocked-user",1)),i&2&&(hx(a.blocked?-1:0),Vp(),hx(a.blocked?1:-1));},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Blocked User Exceeded Attempts"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),sg(),Tl(13,"pre",7),tN(14,`@if (!blocked) {
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-blocked-user-exceeded-attempts"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Be,a.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,re],encapsulation:2})}return n})();function _e(n,z){if(n&1){let p=Cx();Tl(0,"po-page-login",2),ht("p-login-submit",function(){Ky(p);let a=Rx();return Xy(a.checkLogin())}),sg();}}function we(n,z){n&1&&Gl(0,"po-page-blocked-user",1);}var de=(()=>{class n{blocked=false;checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(fx(0,_e,1,0,"po-page-login",0),fx(1,we,1,0,"po-page-blocked-user",1)),i&2&&(hx(a.blocked?-1:0),Vp(),hx(a.blocked?1:-1));},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Page Blocked User Expired Password"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),sg(),Tl(13,"pre",7),tN(14,`@if (!blocked) {
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-blocked-user-expired-password"),sg(),Gl(23,"hr")),i&2&&(Vp(5),zx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ue,a.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,de],encapsulation:2})}return n})();var ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do template do po-page-blocked-user."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoPageBlockedUserComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-page-blocked-user"),sg(),tN(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),sg(),Tl(18,"p"),tN(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),sg(),Tl(20,"p"),tN(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),sg(),Tl(22,"p"),tN(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(24,"em"),tN(25,"assets"),sg(),tN(26," no arquivo "),Tl(27,"strong"),tN(28,"angular.json"),sg(),tN(29," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Tl(30,"pre")(31,"code"),tN(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()(),Gl(33,"hr"),Tl(34,"h4"),tN(35,"Praticidade"),sg(),Tl(36,"p"),tN(37,"O "),Tl(38,"code"),tN(39,"po-page-blocked-user"),sg(),tN(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Tl(41,"code"),tN(42,"/access-denied"),sg(),tN(43,":"),sg(),Tl(44,"pre")(45,"code"),tN(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),sg()(),Tl(47,"blockquote")(48,"p"),tN(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),sg()()(),Tl(50,"div",6)(51,"h4",7),tN(52,"Seletor"),sg(),Tl(53,"pre",8),tN(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),sg()(),Tl(55,"h4",9),tN(56,"Propriedades"),sg(),Tl(57,"table",10)(58,"tr",11)(59,"th",12),tN(60,"Nome"),sg(),Tl(61,"th",12),tN(62,"Tipo"),sg(),Tl(63,"th",12),tN(64,"Padr\xE3o"),sg(),Tl(65,"th",12),tN(66,"Descri\xE7\xE3o"),sg()(),Tl(67,"tr",13)(68,"td",14)(69,"div",15)(70,"span",16),tN(71," p-components-size"),Gl(72,"br"),sg()()(),Tl(73,"td",17)(74,"code",18),tN(75,"string"),sg()(),Tl(76,"td",19)(77,"p")(78,"code"),tN(79,"medium"),sg()()(),Tl(80,"td",20)(81,"em")(82,"strong"),tN(83,"(opcional)"),sg()(),Tl(84,"p"),tN(85,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(86,"ul")(87,"li")(88,"code"),tN(89,"small"),sg(),tN(90,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(91,"li")(92,"code"),tN(93,"medium"),sg(),tN(94,": aplica a medida medium de cada componente."),sg()(),Tl(95,"blockquote")(96,"p"),tN(97,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(98,"code"),tN(99,"medium"),sg(),tN(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(101,"a",21),tN(102,"po-theme"),sg(),tN(103,"."),sg()()()(),Tl(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),tN(108," p-contact-email"),Gl(109,"br"),sg()()(),Tl(110,"td",17)(111,"code",18),tN(112,"string"),sg()(),Tl(113,"td",19),tN(114,"-"),sg(),Tl(115,"td",20)(116,"em")(117,"strong"),tN(118,"(opcional)"),sg()(),Tl(119,"p"),tN(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),sg()()(),Tl(121,"tr",13)(122,"td",14)(123,"div",15)(124,"span",16),tN(125," p-contact-phone"),Gl(126,"br"),sg()()(),Tl(127,"td",17)(128,"code",18),tN(129,"string"),sg()(),Tl(130,"td",19),tN(131,"-"),sg(),Tl(132,"td",20)(133,"em")(134,"strong"),tN(135,"(opcional)"),sg()(),Tl(136,"p"),tN(137,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),sg(),Tl(138,"blockquote")(139,"p"),tN(140,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),sg()()()(),Tl(141,"tr",13)(142,"td",14)(143,"div",15)(144,"span",16),tN(145," p-logo"),Gl(146,"br"),sg()()(),Tl(147,"td",17)(148,"code",18),tN(149,"string"),sg()(),Tl(150,"td",19),tN(151,"-"),sg(),Tl(152,"td",20)(153,"em")(154,"strong"),tN(155,"(opcional)"),sg()(),Tl(156,"p"),tN(157,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),sg()()(),Tl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),tN(162," p-params"),Gl(163,"br"),sg()()(),Tl(164,"td",17)(165,"code",22),tN(166,"PoPageBlockedUserReasonParams"),sg()(),Tl(167,"td",19),tN(168,"-"),sg(),Tl(169,"td",20)(170,"em")(171,"strong"),tN(172,"(opcional)"),sg()(),Tl(173,"p"),tN(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),sg(),Tl(175,"pre")(176,"code"),tN(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),sg()(),Tl(178,"blockquote")(179,"p"),tN(180,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),sg()(),Tl(181,"blockquote")(182,"p"),tN(183,"Veja os par\xE2metros customiz\xE1veis na interface "),Tl(184,"code"),tN(185,"PoPageBlockedUserReasonParams"),sg(),tN(186,"."),sg()()()(),Tl(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),tN(191," p-reason"),Gl(192,"br"),sg()()(),Tl(193,"td",17)(194,"code",23),tN(195,"PoPageBlockedUserReason"),sg()(),Tl(196,"td",19)(197,"p")(198,"code"),tN(199,"PoPageBlockedUserReason.None"),sg()()(),Tl(200,"td",20)(201,"em")(202,"strong"),tN(203,"(opcional)"),sg()(),Tl(204,"p"),tN(205,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),sg(),Tl(206,"blockquote")(207,"p"),tN(208,"Veja os valores v\xE1lidos no "),Tl(209,"em"),tN(210,"enum"),sg(),Tl(211,"code"),tN(212,"PoPageBlockedUserReason"),sg(),tN(213,"."),sg()()()(),Tl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),tN(218," p-secondary-logo"),Gl(219,"br"),sg()()(),Tl(220,"td",17)(221,"code",18),tN(222,"string"),sg()(),Tl(223,"td",19),tN(224,"-"),sg(),Tl(225,"td",20)(226,"em")(227,"strong"),tN(228,"(opcional)"),sg()(),Tl(229,"p"),tN(230,"Caminho para a logomarca localizada no rodap\xE9."),sg()()(),Tl(231,"tr",13)(232,"td",14)(233,"div",15)(234,"span",16),tN(235," p-url-back"),Gl(236,"br"),sg()()(),Tl(237,"td",17)(238,"code",18),tN(239,"string"),sg()(),Tl(240,"td",19)(241,"p")(242,"code"),tN(243,"/"),sg()()(),Tl(244,"td",20)(245,"em")(246,"strong"),tN(247,"(opcional)"),sg()(),Tl(248,"p"),tN(249,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),sg()()()(),Tl(250,"h3"),tN(251,"Interfaces"),sg(),Tl(252,"h4",24)(253,"code",5),tN(254,"PoPageBlockedUserReasonParams"),sg()(),Tl(255,"div",2)(256,"p"),tN(257,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),Tl(258,"code"),tN(259,"po-page-blocked-user"),sg(),tN(260,"."),sg()(),Tl(261,"h4",9),tN(262,"Propriedades"),sg(),Tl(263,"table",10)(264,"tr",11)(265,"th",12),tN(266,"Nome"),sg(),Tl(267,"th",12),tN(268,"Tipo"),sg(),Tl(269,"th",12),tN(270,"Descri\xE7\xE3o"),sg()(),Tl(271,"tr",13)(272,"td",14)(273,"div",15)(274,"span",16),tN(275," attempts"),Gl(276,"br"),sg()()(),Tl(277,"td",17)(278,"code",25),tN(279,"number"),sg()(),Tl(280,"td",20)(281,"em")(282,"strong"),tN(283,"(opcional)"),sg()(),Tl(284,"p"),tN(285,"Quantidade m\xE1xima de tentativas."),sg()()(),Tl(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),tN(290," days"),Gl(291,"br"),sg()()(),Tl(292,"td",17)(293,"code",25),tN(294,"number"),sg()(),Tl(295,"td",20)(296,"em")(297,"strong"),tN(298,"(opcional)"),sg()(),Tl(299,"p"),tN(300,"Quantidade de dias para expira\xE7\xE3o de senha."),sg()()(),Tl(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),tN(305," hours"),Gl(306,"br"),sg()()(),Tl(307,"td",17)(308,"code",25),tN(309,"number"),sg()(),Tl(310,"td",20)(311,"em")(312,"strong"),tN(313,"(opcional)"),sg()(),Tl(314,"p"),tN(315,"Horas que o sistema permanecer\xE1 bloqueado."),sg()()()(),Tl(316,"h3"),tN(317,"Enums"),sg(),Tl(318,"h4",4)(319,"code",5),tN(320,"PoPageBlockedUserReason"),sg()(),Tl(321,"div",2)(322,"p")(323,"em"),tN(324,"Enum"),sg(),tN(325," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),sg()(),Tl(326,"h4",9),tN(327,"Propriedades"),sg(),Tl(328,"table",10)(329,"tr",11)(330,"th",12),tN(331,"Nome"),sg(),Tl(332,"th",12),tN(333,"Descri\xE7\xE3o"),sg()(),Tl(334,"tr",13)(335,"td",14)(336,"div",15)(337,"span",16),tN(338," None"),Gl(339,"br"),sg()()(),Tl(340,"td",20)(341,"p"),tN(342,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),sg()()(),Tl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),tN(347," ExceededAttempts"),Gl(348,"br"),sg()()(),Tl(349,"td",20)(350,"p"),tN(351,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),sg()()(),Tl(352,"tr",13)(353,"td",14)(354,"div",15)(355,"span",16),tN(356," ExpiredPassword"),Gl(357,"br"),sg()()(),Tl(358,"td",20)(359,"p"),tN(360,"Defini\xE7\xE3o para senha expirada."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var ge=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Gl(3,"sample-po-page-blocked-user-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Gl(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),sg()()()),i&2&&(tw("p-actions",a.actions),Vp(2),tw("p-active",a.activeTab==="doc"),Vp(2),tw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[aNe,Hme,Gme,le,se,me,ce,ue],encapsulation:2})}return n})();var De=[{path:"",component:ge}],he=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[vL.forChild(De),vL]})}return n})();var rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ar,he]})}return n})();export{rt as DocPoPageBlockedUserModule};