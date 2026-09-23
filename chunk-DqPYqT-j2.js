import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,ea as p0,ga as w,h as za,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,t as Da,u as bt,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,yr as Mx}from"./main-NT5YGKBQ.js";var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&ql(0,`po-page-blocked-user`)},dependencies:[Da],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Blocked User Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-blocked-user></po-page-blocked-user>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-blocked-user-basic`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Pe,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=bt.None;secondaryLogo;url;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];reasonOptions=[{label:`Default`,value:bt.None},{label:`Expired Password`,value:bt.ExpiredPassword},{label:`Exceeded Attempts`,value:bt.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch(p){this.customParams=void 0}}restore(){this.componentsSize=`medium`,this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params=``,this.logo=``,this.reason=bt.None,this.secondaryLogo=``,this.url=void 0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-labs`]],standalone:!1,decls:15,vars:18,consts:[[`f`,`ngForm`],[3,`p-components-size`,`p-contact-email`,`p-contact-phone`,`p-logo`,`p-params`,`p-reason`,`p-secondary-logo`,`p-url-back`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`contactPhone`,`p-clean`,``,`p-help`,`11 99999 9999`,`p-label`,`Contact Phone`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-help`,`user@po-ui.com.br`,`p-label`,`Contact Mail`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`reason`,`p-columns`,`4`,`p-label`,`Reason Screen Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`params`,`p-clean`,``,`p-help`,`{"attempts": 20, "days": 20, "hours": 20}`,`p-label`,`Custom Params`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-help`,`https://po-ui.io/home`,`p-label`,`URL Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Secondary logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let u=Vx();ql(0,`po-page-blocked-user`,1)(1,`po-divider`,2),Ml(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.contactPhone,r)||(a.contactPhone=r),Jy(r)}),lg(),f0(),Ml(6,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.contactMail,r)||(a.contactMail=r),Jy(r)}),lg(),f0(),Ml(7,`po-radio-group`,6),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.reason,r)||(a.reason=r),Jy(r)}),lg(),f0(),Ml(8,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.params,r)||(a.params=r),Jy(r)}),ht(`p-change`,function(){return a.changeLiterals()}),lg(),f0(),Ml(9,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.url,r)||(a.url=r),Jy(r)}),lg(),f0(),Ml(10,`po-input`,9),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.logo,r)||(a.logo=r),Jy(r)}),lg(),f0(),Ml(11,`po-input`,10),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.secondaryLogo,r)||(a.secondaryLogo=r),Jy(r)}),lg(),f0(),Ml(12,`po-radio-group`,11),Mw(`ngModelChange`,function(r){return Qy(u),yN(a.componentsSize,r)||(a.componentsSize=r),Jy(r)}),lg(),f0(),lg(),Ml(13,`div`,3)(14,`po-button`,12),ht(`p-click`,function(){return a.restore()}),lg()()()}i&2&&(cw(`p-components-size`,a.componentsSize)(`p-contact-email`,a.contactMail)(`p-contact-phone`,a.contactPhone)(`p-logo`,a.logo)(`p-params`,a.customParams)(`p-reason`,a.reason)(`p-secondary-logo`,a.secondaryLogo)(`p-url-back`,a.url),Up(5),Tw(`ngModel`,a.contactPhone),p0(),Up(),Tw(`ngModel`,a.contactMail),p0(),Up(),Tw(`ngModel`,a.reason),cw(`p-options`,a.reasonOptions),p0(),Up(),Tw(`ngModel`,a.params),p0(),Up(),Tw(`ngModel`,a.url),p0(),Up(),Tw(`ngModel`,a.logo),p0(),Up(),Tw(`ngModel`,a.secondaryLogo),p0(),Up(),Tw(`ngModel`,a.componentsSize),cw(`p-options`,a.componentsSizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,q0e,Da],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Blocked User Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-blocked-user
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-blocked-user-labs`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return n})();function ke(n,z){if(n&1){let p=Vx();Ml(0,`po-page-login`,2),ht(`p-login-submit`,function(){Qy(p);return Jy(zx().checkLogin())}),lg()}}function xe(n,z){if(n&1&&ql(0,`po-page-blocked-user`,1),n&2)cw(`p-params`,zx().params)}var re=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`,3,`p-params`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(Tx(0,ke,1,0,`po-page-login`,0),Tx(1,xe,1,1,`po-page-blocked-user`,1)),i&2&&(Mx(a.blocked?-1:0),Up(),Mx(a.blocked?1:-1))},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Blocked User Exceeded Attempts`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`),lg(),Ml(13,`pre`,7),mN(14,`@if (!blocked) {
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-blocked-user-exceeded-attempts`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return n})();function _e(n,z){if(n&1){let p=Vx();Ml(0,`po-page-login`,2),ht(`p-login-submit`,function(){Qy(p);return Jy(zx().checkLogin())}),lg()}}function we(n,z){n&1&&ql(0,`po-page-blocked-user`,1)}var de=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-expired-password`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`expiredPassword`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(Tx(0,_e,1,0,`po-page-login`,0),Tx(1,we,1,0,`po-page-blocked-user`,1)),i&2&&(Mx(a.blocked?-1:0),Up(),Mx(a.blocked?1:-1))},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-expired-password-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Blocked User Expired Password`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`),lg(),Ml(13,`pre`,7),mN(14,`@if (!blocked) {
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-blocked-user-expired-password`),lg(),ql(23,`hr`)),i&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ue,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReasonParams`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReason`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(i,a){i&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageBlockedUserModule } from '@po-ui/ng-templates';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do template do po-page-blocked-user.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoPageBlockedUserComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-page-blocked-user`),lg(),mN(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),lg(),Ml(18,`p`),mN(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),lg(),Ml(20,`p`),mN(21,`Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.`),lg(),Ml(22,`p`),mN(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ml(24,`em`),mN(25,`assets`),lg(),mN(26,` no arquivo `),Ml(27,`strong`),mN(28,`angular.json`),lg(),mN(29,` da aplicação na seguinte ordem:`),lg(),Ml(30,`pre`)(31,`code`),mN(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),lg()(),ql(33,`hr`),Ml(34,`h4`),mN(35,`Praticidade`),lg(),Ml(36,`p`),mN(37,`O `),Ml(38,`code`),mN(39,`po-page-blocked-user`),lg(),mN(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Ml(41,`code`),mN(42,`/access-denied`),lg(),mN(43,`:`),lg(),Ml(44,`pre`)(45,`code`),mN(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),lg()(),Ml(47,`blockquote`)(48,`p`),mN(49,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. `),lg()()(),Ml(50,`div`,6)(51,`h4`,7),mN(52,`Seletor`),lg(),Ml(53,`pre`,8),mN(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),lg()(),Ml(55,`h4`,9),mN(56,`Propriedades`),lg(),Ml(57,`table`,10)(58,`tr`,11)(59,`th`,12),mN(60,`Nome`),lg(),Ml(61,`th`,12),mN(62,`Tipo`),lg(),Ml(63,`th`,12),mN(64,`Padrão`),lg(),Ml(65,`th`,12),mN(66,`Descrição`),lg()(),Ml(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),mN(71,` p-components-size`),ql(72,`br`),lg()()(),Ml(73,`td`,17)(74,`code`,18),mN(75,`string`),lg()(),Ml(76,`td`,19)(77,`p`)(78,`code`),mN(79,`medium`),lg()()(),Ml(80,`td`,20)(81,`em`)(82,`strong`),mN(83,`(opcional)`),lg()(),Ml(84,`p`),mN(85,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(86,`ul`)(87,`li`)(88,`code`),mN(89,`small`),lg(),mN(90,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(91,`li`)(92,`code`),mN(93,`medium`),lg(),mN(94,`: aplica a medida medium de cada componente.`),lg()(),Ml(95,`blockquote`)(96,`p`),mN(97,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(98,`code`),mN(99,`medium`),lg(),mN(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(101,`a`,21),mN(102,`po-theme`),lg(),mN(103,`.`),lg()()()(),Ml(104,`tr`,13)(105,`td`,14)(106,`div`,15)(107,`span`,16),mN(108,` p-contact-email`),ql(109,`br`),lg()()(),Ml(110,`td`,17)(111,`code`,18),mN(112,`string`),lg()(),Ml(113,`td`,19),mN(114,`-`),lg(),Ml(115,`td`,20)(116,`em`)(117,`strong`),mN(118,`(opcional)`),lg()(),Ml(119,`p`),mN(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),lg()()(),Ml(121,`tr`,13)(122,`td`,14)(123,`div`,15)(124,`span`,16),mN(125,` p-contact-phone`),ql(126,`br`),lg()()(),Ml(127,`td`,17)(128,`code`,18),mN(129,`string`),lg()(),Ml(130,`td`,19),mN(131,`-`),lg(),Ml(132,`td`,20)(133,`em`)(134,`strong`),mN(135,`(opcional)`),lg()(),Ml(136,`p`),mN(137,`Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.`),lg(),Ml(138,`blockquote`)(139,`p`),mN(140,`A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.`),lg()()()(),Ml(141,`tr`,13)(142,`td`,14)(143,`div`,15)(144,`span`,16),mN(145,` p-logo`),ql(146,`br`),lg()()(),Ml(147,`td`,17)(148,`code`,18),mN(149,`string`),lg()(),Ml(150,`td`,19),mN(151,`-`),lg(),Ml(152,`td`,20)(153,`em`)(154,`strong`),mN(155,`(opcional)`),lg()(),Ml(156,`p`),mN(157,`Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI.`),lg()()(),Ml(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),mN(162,` p-params`),ql(163,`br`),lg()()(),Ml(164,`td`,17)(165,`code`,22),mN(166,`PoPageBlockedUserReasonParams`),lg()(),Ml(167,`td`,19),mN(168,`-`),lg(),Ml(169,`td`,20)(170,`em`)(171,`strong`),mN(172,`(opcional)`),lg()(),Ml(173,`p`),mN(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),lg(),Ml(175,`pre`)(176,`code`),mN(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),lg()(),Ml(178,`blockquote`)(179,`p`),mN(180,`Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.`),lg()(),Ml(181,`blockquote`)(182,`p`),mN(183,`Veja os parâmetros customizáveis na interface `),Ml(184,`code`),mN(185,`PoPageBlockedUserReasonParams`),lg(),mN(186,`.`),lg()()()(),Ml(187,`tr`,13)(188,`td`,14)(189,`div`,15)(190,`span`,16),mN(191,` p-reason`),ql(192,`br`),lg()()(),Ml(193,`td`,17)(194,`code`,23),mN(195,`PoPageBlockedUserReason`),lg()(),Ml(196,`td`,19)(197,`p`)(198,`code`),mN(199,`PoPageBlockedUserReason.None`),lg()()(),Ml(200,`td`,20)(201,`em`)(202,`strong`),mN(203,`(opcional)`),lg()(),Ml(204,`p`),mN(205,`Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.`),lg(),Ml(206,`blockquote`)(207,`p`),mN(208,`Veja os valores válidos no `),Ml(209,`em`),mN(210,`enum`),lg(),Ml(211,`code`),mN(212,`PoPageBlockedUserReason`),lg(),mN(213,`.`),lg()()()(),Ml(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),mN(218,` p-secondary-logo`),ql(219,`br`),lg()()(),Ml(220,`td`,17)(221,`code`,18),mN(222,`string`),lg()(),Ml(223,`td`,19),mN(224,`-`),lg(),Ml(225,`td`,20)(226,`em`)(227,`strong`),mN(228,`(opcional)`),lg()(),Ml(229,`p`),mN(230,`Caminho para a logomarca localizada no rodapé.`),lg()()(),Ml(231,`tr`,13)(232,`td`,14)(233,`div`,15)(234,`span`,16),mN(235,` p-url-back`),ql(236,`br`),lg()()(),Ml(237,`td`,17)(238,`code`,18),mN(239,`string`),lg()(),Ml(240,`td`,19)(241,`p`)(242,`code`),mN(243,`/`),lg()()(),Ml(244,`td`,20)(245,`em`)(246,`strong`),mN(247,`(opcional)`),lg()(),Ml(248,`p`),mN(249,`URL para a ação de retorno da página.`),lg()()()(),Ml(250,`h3`),mN(251,`Interfaces`),lg(),Ml(252,`h4`,24)(253,`code`,5),mN(254,`PoPageBlockedUserReasonParams`),lg()(),Ml(255,`div`,2)(256,`p`),mN(257,`Interface que define os valores de customização da mensagem de bloqueio do componente `),Ml(258,`code`),mN(259,`po-page-blocked-user`),lg(),mN(260,`.`),lg()(),Ml(261,`h4`,9),mN(262,`Propriedades`),lg(),Ml(263,`table`,10)(264,`tr`,11)(265,`th`,12),mN(266,`Nome`),lg(),Ml(267,`th`,12),mN(268,`Tipo`),lg(),Ml(269,`th`,12),mN(270,`Descrição`),lg()(),Ml(271,`tr`,13)(272,`td`,14)(273,`div`,15)(274,`span`,16),mN(275,` attempts`),ql(276,`br`),lg()()(),Ml(277,`td`,17)(278,`code`,25),mN(279,`number`),lg()(),Ml(280,`td`,20)(281,`em`)(282,`strong`),mN(283,`(opcional)`),lg()(),Ml(284,`p`),mN(285,`Quantidade máxima de tentativas.`),lg()()(),Ml(286,`tr`,13)(287,`td`,14)(288,`div`,15)(289,`span`,16),mN(290,` days`),ql(291,`br`),lg()()(),Ml(292,`td`,17)(293,`code`,25),mN(294,`number`),lg()(),Ml(295,`td`,20)(296,`em`)(297,`strong`),mN(298,`(opcional)`),lg()(),Ml(299,`p`),mN(300,`Quantidade de dias para expiração de senha.`),lg()()(),Ml(301,`tr`,13)(302,`td`,14)(303,`div`,15)(304,`span`,16),mN(305,` hours`),ql(306,`br`),lg()()(),Ml(307,`td`,17)(308,`code`,25),mN(309,`number`),lg()(),Ml(310,`td`,20)(311,`em`)(312,`strong`),mN(313,`(opcional)`),lg()(),Ml(314,`p`),mN(315,`Horas que o sistema permanecerá bloqueado.`),lg()()()(),Ml(316,`h3`),mN(317,`Enums`),lg(),Ml(318,`h4`,4)(319,`code`,5),mN(320,`PoPageBlockedUserReason`),lg()(),Ml(321,`div`,2)(322,`p`)(323,`em`),mN(324,`Enum`),lg(),mN(325,` para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.`),lg()(),Ml(326,`h4`,9),mN(327,`Propriedades`),lg(),Ml(328,`table`,10)(329,`tr`,11)(330,`th`,12),mN(331,`Nome`),lg(),Ml(332,`th`,12),mN(333,`Descrição`),lg()(),Ml(334,`tr`,13)(335,`td`,14)(336,`div`,15)(337,`span`,16),mN(338,` None`),ql(339,`br`),lg()()(),Ml(340,`td`,20)(341,`p`),mN(342,`Sem definição; a tela exibirá conteúdo de bloqueio genérico.`),lg()()(),Ml(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),mN(347,` ExceededAttempts`),ql(348,`br`),lg()()(),Ml(349,`td`,20)(350,`p`),mN(351,`Definição para tentativas de acesso esgotadas.`),lg()()(),Ml(352,`tr`,13)(353,`td`,14)(354,`div`,15)(355,`span`,16),mN(356,` ExpiredPassword`),ql(357,`br`),lg()()(),Ml(358,`td`,20)(359,`p`),mN(360,`Definição para senha expirada.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Le=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Blocked User`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),ql(3,`sample-po-page-blocked-user-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),ql(5,`sample-po-page-blocked-user-basic-view`)(6,`sample-po-page-blocked-user-labs-view`)(7,`sample-po-page-blocked-user-exceeded-attempts-view`)(8,`sample-po-page-blocked-user-expired-password-view`),lg()()()),i&2&&(cw(`p-actions`,a.actions),Up(2),cw(`p-active`,a.activeTab===`doc`),Up(2),cw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[V8e,SCe,ECe,le,se,me,ce,ue],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[NL.forChild(Le),NL]})}return n})();var rt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[ar,he]})}return n})();export{rt as DocPoPageBlockedUserModule};