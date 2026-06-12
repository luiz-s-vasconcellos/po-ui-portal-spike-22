import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,ce as bt,cf as Tr,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,cg as Rr,aq as ix,at as ox,a3 as SNe,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ie=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic"]],standalone:false,decls:1,vars:0,template:function(i,a){i&1&&Hl(0,"po-page-blocked-user");},dependencies:[Tr],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Blocked User Basic"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-blocked-user></po-page-blocked-user>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-blocked-user-basic"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ie],encapsulation:2})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=bt.None;secondaryLogo;url;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];reasonOptions=[{label:"Default",value:bt.None},{label:"Expired Password",value:bt.ExpiredPassword},{label:"Exceeded Attempts",value:bt.ExceededAttempts}];ngOnInit(){this.restore();}changeLiterals(){try{this.customParams=JSON.parse(this.params);}catch(p){this.customParams=void 0;}}restore(){this.componentsSize="medium",this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params="",this.logo="",this.reason=bt.None,this.secondaryLogo="",this.url=void 0;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs"]],standalone:false,decls:15,vars:18,consts:[["f","ngForm"],[3,"p-components-size","p-contact-email","p-contact-phone","p-logo","p-params","p-reason","p-secondary-logo","p-url-back"],["p-label","Properties"],[1,"po-row"],["name","contactPhone","p-clean","","p-help","11 99999 9999","p-label","Contact Phone",1,"po-md-6",3,"ngModelChange","ngModel"],["name","contactMail","p-help","user@po-ui.com.br","p-label","Contact Mail",1,"po-md-6",3,"ngModelChange","ngModel"],["name","reason","p-columns","4","p-label","Reason Screen Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","params","p-clean","","p-help",'{"attempts": 20, "days": 20, "hours": 20}',"p-label","Custom Params",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","url","p-clean","","p-help","https://po-ui.io/home","p-label","URL Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-help","https://po-ui.io/assets/po-logos/po_color.svg","p-label","Secondary logo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(i,a){if(i&1){let u=gx();Hl(0,"po-page-blocked-user",1)(1,"po-divider",2),Cl(2,"form",null,0)(4,"div",3)(5,"po-input",4),gw("ngModelChange",function(r){return Jy(u),Zx(a.contactPhone,r)||(a.contactPhone=r),e_(r)}),og(),Z0(),Cl(6,"po-input",5),gw("ngModelChange",function(r){return Jy(u),Zx(a.contactMail,r)||(a.contactMail=r),e_(r)}),og(),Z0(),Cl(7,"po-radio-group",6),gw("ngModelChange",function(r){return Jy(u),Zx(a.reason,r)||(a.reason=r),e_(r)}),og(),Z0(),Cl(8,"po-input",7),gw("ngModelChange",function(r){return Jy(u),Zx(a.params,r)||(a.params=r),e_(r)}),dt("p-change",function(){return a.changeLiterals()}),og(),Z0(),Cl(9,"po-input",8),gw("ngModelChange",function(r){return Jy(u),Zx(a.url,r)||(a.url=r),e_(r)}),og(),Z0(),Cl(10,"po-input",9),gw("ngModelChange",function(r){return Jy(u),Zx(a.logo,r)||(a.logo=r),e_(r)}),og(),Z0(),Cl(11,"po-input",10),gw("ngModelChange",function(r){return Jy(u),Zx(a.secondaryLogo,r)||(a.secondaryLogo=r),e_(r)}),og(),Z0(),Cl(12,"po-radio-group",11),gw("ngModelChange",function(r){return Jy(u),Zx(a.componentsSize,r)||(a.componentsSize=r),e_(r)}),og(),Z0(),og(),Cl(13,"div",3)(14,"po-button",12),dt("p-click",function(){return a.restore()}),og()()();}i&2&&(ZE("p-components-size",a.componentsSize)("p-contact-email",a.contactMail)("p-contact-phone",a.contactPhone)("p-logo",a.logo)("p-params",a.customParams)("p-reason",a.reason)("p-secondary-logo",a.secondaryLogo)("p-url-back",a.url),Lp(5),pw("ngModel",a.contactPhone),X0(),Lp(),pw("ngModel",a.contactMail),X0(),Lp(),pw("ngModel",a.reason),ZE("p-options",a.reasonOptions),X0(),Lp(),pw("ngModel",a.params),X0(),Lp(),pw("ngModel",a.url),X0(),Lp(),pw("ngModel",a.logo),X0(),Lp(),pw("ngModel",a.secondaryLogo),X0(),Lp(),pw("ngModel",a.componentsSize),ZE("p-options",a.componentsSizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Nde,Tr],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Blocked User Labs"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-blocked-user
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-blocked-user-labs"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ce,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,pe],encapsulation:2})}return n})();function ke(n,z){if(n&1){let p=gx();Cl(0,"po-page-login",2),dt("p-login-submit",function(){Jy(p);let a=Ex();return e_(a.checkLogin())}),og();}}function xe(n,z){if(n&1&&Hl(0,"po-page-blocked-user",1),n&2){let p=Ex();ZE("p-params",p.params);}}var re=(()=>{class n{blocked=false;params={attempts:1,hours:48};checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","exceededAttempts","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-back","https://po-ui.io/documentation/po-page-blocked-user",3,"p-params"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(ix(0,ke,1,0,"po-page-login",0),ix(1,xe,1,1,"po-page-blocked-user",1)),i&2&&(ox(a.blocked?-1:0),Lp(),ox(a.blocked?1:-1));},dependencies:[Tr,Rr],encapsulation:2,changeDetection:1})}return n})();var Be=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-exceeded-attempts-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Blocked User Exceeded Attempts"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html"),og(),Cl(13,"pre",7),qx(14,`@if (!blocked) {
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-blocked-user-exceeded-attempts"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return n})();function _e(n,z){if(n&1){let p=gx();Cl(0,"po-page-login",2),dt("p-login-submit",function(){Jy(p);let a=Ex();return e_(a.checkLogin())}),og();}}function we(n,z){n&1&&Hl(0,"po-page-blocked-user",1);}var de=(()=>{class n{blocked=false;checkLogin(){this.blocked=true;}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password"]],standalone:false,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO"],["p-contact-email","user@po-ui.com.br","p-contact-phone","0800 709 8100","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-reason","expiredPassword","p-url-back","https://po-ui.io/documentation/po-page-blocked-user"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"]],template:function(i,a){i&1&&(ix(0,_e,1,0,"po-page-login",0),ix(1,we,1,0,"po-page-blocked-user",1)),i&2&&(ox(a.blocked?-1:0),Lp(),ox(a.blocked?1:-1));},dependencies:[Tr,Rr],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n}),ce=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-expired-password-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,a){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Blocked User Expired Password"),og(),Cl(4,"a",2),dt("click",function(){return a.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html"),og(),Cl(13,"pre",7),qx(14,`@if (!blocked) {
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-blocked-user-expired-password"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+a.sampleCodeButtonIcon),Lp(),dg(" ",a.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ue,a.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return n})();var ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-page-blocked-user-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReasonParams"],["pan","",1,"docs-api-property-type","PoPageBlockedUserReason"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(i,a){i&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageBlockedUserModule } from '@po-ui/ng-templates';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do template do po-page-blocked-user."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoPageBlockedUserComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-page-blocked-user"),og(),qx(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),og(),Cl(18,"p"),qx(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),og(),Cl(20,"p"),qx(21,"Por fim, h\xE1 propriedades para adi\xE7\xE3o de telefone e/ou email para contato e tamb\xE9m a defini\xE7\xE3o para a url de retorno."),og(),Cl(22,"p"),qx(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Cl(24,"em"),qx(25,"assets"),og(),qx(26," no arquivo "),Cl(27,"strong"),qx(28,"angular.json"),og(),qx(29," da aplica\xE7\xE3o na seguinte ordem:"),og(),Cl(30,"pre")(31,"code"),qx(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()(),Hl(33,"hr"),Cl(34,"h4"),qx(35,"Praticidade"),og(),Cl(36,"p"),qx(37,"O "),Cl(38,"code"),qx(39,"po-page-blocked-user"),og(),qx(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Cl(41,"code"),qx(42,"/access-denied"),og(),qx(43,":"),og(),Cl(44,"pre")(45,"code"),qx(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),og()(),Cl(47,"blockquote")(48,"p"),qx(49,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. "),og()()(),Cl(50,"div",6)(51,"h4",7),qx(52,"Seletor"),og(),Cl(53,"pre",8),qx(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),og()(),Cl(55,"h4",9),qx(56,"Propriedades"),og(),Cl(57,"table",10)(58,"tr",11)(59,"th",12),qx(60,"Nome"),og(),Cl(61,"th",12),qx(62,"Tipo"),og(),Cl(63,"th",12),qx(64,"Padr\xE3o"),og(),Cl(65,"th",12),qx(66,"Descri\xE7\xE3o"),og()(),Cl(67,"tr",13)(68,"td",14)(69,"div",15)(70,"span",16),qx(71," p-components-size"),Hl(72,"br"),og()()(),Cl(73,"td",17)(74,"code",18),qx(75,"string"),og()(),Cl(76,"td",19)(77,"p")(78,"code"),qx(79,"medium"),og()()(),Cl(80,"td",20)(81,"em")(82,"strong"),qx(83,"(opcional)"),og()(),Cl(84,"p"),qx(85,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(86,"ul")(87,"li")(88,"code"),qx(89,"small"),og(),qx(90,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(91,"li")(92,"code"),qx(93,"medium"),og(),qx(94,": aplica a medida medium de cada componente."),og()(),Cl(95,"blockquote")(96,"p"),qx(97,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(98,"code"),qx(99,"medium"),og(),qx(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(101,"a",21),qx(102,"po-theme"),og(),qx(103,"."),og()()()(),Cl(104,"tr",13)(105,"td",14)(106,"div",15)(107,"span",16),qx(108," p-contact-email"),Hl(109,"br"),og()()(),Cl(110,"td",17)(111,"code",18),qx(112,"string"),og()(),Cl(113,"td",19),qx(114,"-"),og(),Cl(115,"td",20)(116,"em")(117,"strong"),qx(118,"(opcional)"),og()(),Cl(119,"p"),qx(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),og()()(),Cl(121,"tr",13)(122,"td",14)(123,"div",15)(124,"span",16),qx(125," p-contact-phone"),Hl(126,"br"),og()()(),Cl(127,"td",17)(128,"code",18),qx(129,"string"),og()(),Cl(130,"td",19),qx(131,"-"),og(),Cl(132,"td",20)(133,"em")(134,"strong"),qx(135,"(opcional)"),og()(),Cl(136,"p"),qx(137,"Valor para o telefone de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo TEL."),og(),Cl(138,"blockquote")(139,"p"),qx(140,"A propriedade n\xE3o contem tratamento de m\xE1scara, fica a crit\xE9rio do desenvolvedor defini-la."),og()()()(),Cl(141,"tr",13)(142,"td",14)(143,"div",15)(144,"span",16),qx(145," p-logo"),Hl(146,"br"),og()()(),Cl(147,"td",17)(148,"code",18),qx(149,"string"),og()(),Cl(150,"td",19),qx(151,"-"),og(),Cl(152,"td",20)(153,"em")(154,"strong"),qx(155,"(opcional)"),og()(),Cl(156,"p"),qx(157,"Caminho para a logomarca localizada na parte superior, caso n\xE3o seja definida ou seja inv\xE1lida assume a logo padr\xE3o do PO UI."),og()()(),Cl(158,"tr",13)(159,"td",14)(160,"div",15)(161,"span",16),qx(162," p-params"),Hl(163,"br"),og()()(),Cl(164,"td",17)(165,"code",22),qx(166,"PoPageBlockedUserReasonParams"),og()(),Cl(167,"td",19),qx(168,"-"),og(),Cl(169,"td",20)(170,"em")(171,"strong"),qx(172,"(opcional)"),og()(),Cl(173,"p"),qx(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),og(),Cl(175,"pre")(176,"code"),qx(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),og()(),Cl(178,"blockquote")(179,"p"),qx(180,"Salientamos a import\xE2ncia e aten\xE7\xE3o para configura\xE7\xE3o desses valores conforme definidos no projeto."),og()(),Cl(181,"blockquote")(182,"p"),qx(183,"Veja os par\xE2metros customiz\xE1veis na interface "),Cl(184,"code"),qx(185,"PoPageBlockedUserReasonParams"),og(),qx(186,"."),og()()()(),Cl(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),qx(191," p-reason"),Hl(192,"br"),og()()(),Cl(193,"td",17)(194,"code",23),qx(195,"PoPageBlockedUserReason"),og()(),Cl(196,"td",19)(197,"p")(198,"code"),qx(199,"PoPageBlockedUserReason.None"),og()()(),Cl(200,"td",20)(201,"em")(202,"strong"),qx(203,"(opcional)"),og()(),Cl(204,"p"),qx(205,"Defini\xE7\xE3o de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado."),og(),Cl(206,"blockquote")(207,"p"),qx(208,"Veja os valores v\xE1lidos no "),Cl(209,"em"),qx(210,"enum"),og(),Cl(211,"code"),qx(212,"PoPageBlockedUserReason"),og(),qx(213,"."),og()()()(),Cl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),qx(218," p-secondary-logo"),Hl(219,"br"),og()()(),Cl(220,"td",17)(221,"code",18),qx(222,"string"),og()(),Cl(223,"td",19),qx(224,"-"),og(),Cl(225,"td",20)(226,"em")(227,"strong"),qx(228,"(opcional)"),og()(),Cl(229,"p"),qx(230,"Caminho para a logomarca localizada no rodap\xE9."),og()()(),Cl(231,"tr",13)(232,"td",14)(233,"div",15)(234,"span",16),qx(235," p-url-back"),Hl(236,"br"),og()()(),Cl(237,"td",17)(238,"code",18),qx(239,"string"),og()(),Cl(240,"td",19)(241,"p")(242,"code"),qx(243,"/"),og()()(),Cl(244,"td",20)(245,"em")(246,"strong"),qx(247,"(opcional)"),og()(),Cl(248,"p"),qx(249,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),og()()()(),Cl(250,"h3"),qx(251,"Interfaces"),og(),Cl(252,"h4",24)(253,"code",5),qx(254,"PoPageBlockedUserReasonParams"),og()(),Cl(255,"div",2)(256,"p"),qx(257,"Interface que define os valores de customiza\xE7\xE3o da mensagem de bloqueio do componente "),Cl(258,"code"),qx(259,"po-page-blocked-user"),og(),qx(260,"."),og()(),Cl(261,"h4",9),qx(262,"Propriedades"),og(),Cl(263,"table",10)(264,"tr",11)(265,"th",12),qx(266,"Nome"),og(),Cl(267,"th",12),qx(268,"Tipo"),og(),Cl(269,"th",12),qx(270,"Descri\xE7\xE3o"),og()(),Cl(271,"tr",13)(272,"td",14)(273,"div",15)(274,"span",16),qx(275," attempts"),Hl(276,"br"),og()()(),Cl(277,"td",17)(278,"code",25),qx(279,"number"),og()(),Cl(280,"td",20)(281,"em")(282,"strong"),qx(283,"(opcional)"),og()(),Cl(284,"p"),qx(285,"Quantidade m\xE1xima de tentativas."),og()()(),Cl(286,"tr",13)(287,"td",14)(288,"div",15)(289,"span",16),qx(290," days"),Hl(291,"br"),og()()(),Cl(292,"td",17)(293,"code",25),qx(294,"number"),og()(),Cl(295,"td",20)(296,"em")(297,"strong"),qx(298,"(opcional)"),og()(),Cl(299,"p"),qx(300,"Quantidade de dias para expira\xE7\xE3o de senha."),og()()(),Cl(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),qx(305," hours"),Hl(306,"br"),og()()(),Cl(307,"td",17)(308,"code",25),qx(309,"number"),og()(),Cl(310,"td",20)(311,"em")(312,"strong"),qx(313,"(opcional)"),og()(),Cl(314,"p"),qx(315,"Horas que o sistema permanecer\xE1 bloqueado."),og()()()(),Cl(316,"h3"),qx(317,"Enums"),og(),Cl(318,"h4",4)(319,"code",5),qx(320,"PoPageBlockedUserReason"),og()(),Cl(321,"div",2)(322,"p")(323,"em"),qx(324,"Enum"),og(),qx(325," para os tipos de motivo de bloqueio de usu\xE1rio. As informa\xE7\xF5es modificam conforme o motivo selecionado pelo desenvolvedor."),og()(),Cl(326,"h4",9),qx(327,"Propriedades"),og(),Cl(328,"table",10)(329,"tr",11)(330,"th",12),qx(331,"Nome"),og(),Cl(332,"th",12),qx(333,"Descri\xE7\xE3o"),og()(),Cl(334,"tr",13)(335,"td",14)(336,"div",15)(337,"span",16),qx(338," None"),Hl(339,"br"),og()()(),Cl(340,"td",20)(341,"p"),qx(342,"Sem defini\xE7\xE3o; a tela exibir\xE1 conte\xFAdo de bloqueio gen\xE9rico."),og()()(),Cl(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),qx(347," ExceededAttempts"),Hl(348,"br"),og()()(),Cl(349,"td",20)(350,"p"),qx(351,"Defini\xE7\xE3o para tentativas de acesso esgotadas."),og()()(),Cl(352,"tr",13)(353,"td",14)(354,"div",15)(355,"span",16),qx(356," ExpiredPassword"),Hl(357,"br"),og()()(),Cl(358,"td",20)(359,"p"),qx(360,"Defini\xE7\xE3o para senha expirada."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var ge=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Page Blocked User",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,a){i&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return a.changeTab("doc")}),Hl(3,"sample-po-page-blocked-user-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return a.changeTab("web")}),Hl(5,"sample-po-page-blocked-user-basic-view")(6,"sample-po-page-blocked-user-labs-view")(7,"sample-po-page-blocked-user-exceeded-attempts-view")(8,"sample-po-page-blocked-user-expired-password-view"),og()()()),i&2&&(ZE("p-actions",a.actions),Lp(2),ZE("p-active",a.activeTab==="doc"),Lp(2),ZE("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[SNe,ofe,lfe,le,se,me,ce,ue],encapsulation:2})}return n})();var De=[{path:"",component:ge}],he=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[bL.forChild(De),bL]})}return n})();var rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=fe({type:n});static \u0275inj=ue$1({imports:[ca,he]})}return n})();export{rt as DocPoPageBlockedUserModule};