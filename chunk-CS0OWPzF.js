import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,h as za,ha as ww,l as ar,li as _x,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,sr as Fx,t as Da,u as bt,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&Gl(0,`po-page-blocked-user`)},dependencies:[Da],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Blocked User Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-blocked-user></po-page-blocked-user>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-blocked-user-basic`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Pe,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=bt.None;secondaryLogo;url;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];reasonOptions=[{label:`Default`,value:bt.None},{label:`Expired Password`,value:bt.ExpiredPassword},{label:`Exceeded Attempts`,value:bt.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch(p){this.customParams=void 0}}restore(){this.componentsSize=`medium`,this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params=``,this.logo=``,this.reason=bt.None,this.secondaryLogo=``,this.url=void 0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-labs`]],standalone:!1,decls:15,vars:18,consts:[[`f`,`ngForm`],[3,`p-components-size`,`p-contact-email`,`p-contact-phone`,`p-logo`,`p-params`,`p-reason`,`p-secondary-logo`,`p-url-back`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`contactPhone`,`p-clean`,``,`p-help`,`11 99999 9999`,`p-label`,`Contact Phone`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-help`,`user@po-ui.com.br`,`p-label`,`Contact Mail`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`reason`,`p-columns`,`4`,`p-label`,`Reason Screen Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`params`,`p-clean`,``,`p-help`,`{"attempts": 20, "days": 20, "hours": 20}`,`p-label`,`Custom Params`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-help`,`https://po-ui.io/home`,`p-label`,`URL Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Secondary logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let u=Ax();Gl(0,`po-page-blocked-user`,1)(1,`po-divider`,2),Tl(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),ww(`ngModelChange`,function(r){return Ky(u),uN(a.contactPhone,r)||(a.contactPhone=r),Xy(r)}),ag(),a0(),Tl(6,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(u),uN(a.contactMail,r)||(a.contactMail=r),Xy(r)}),ag(),a0(),Tl(7,`po-radio-group`,6),ww(`ngModelChange`,function(r){return Ky(u),uN(a.reason,r)||(a.reason=r),Xy(r)}),ag(),a0(),Tl(8,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(u),uN(a.params,r)||(a.params=r),Xy(r)}),ht(`p-change`,function(){return a.changeLiterals()}),ag(),a0(),Tl(9,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(u),uN(a.url,r)||(a.url=r),Xy(r)}),ag(),a0(),Tl(10,`po-input`,9),ww(`ngModelChange`,function(r){return Ky(u),uN(a.logo,r)||(a.logo=r),Xy(r)}),ag(),a0(),Tl(11,`po-input`,10),ww(`ngModelChange`,function(r){return Ky(u),uN(a.secondaryLogo,r)||(a.secondaryLogo=r),Xy(r)}),ag(),a0(),Tl(12,`po-radio-group`,11),ww(`ngModelChange`,function(r){return Ky(u),uN(a.componentsSize,r)||(a.componentsSize=r),Xy(r)}),ag(),a0(),ag(),Tl(13,`div`,3)(14,`po-button`,12),ht(`p-click`,function(){return a.restore()}),ag()()()}i&2&&(nw(`p-components-size`,a.componentsSize)(`p-contact-email`,a.contactMail)(`p-contact-phone`,a.contactPhone)(`p-logo`,a.logo)(`p-params`,a.customParams)(`p-reason`,a.reason)(`p-secondary-logo`,a.secondaryLogo)(`p-url-back`,a.url),jp(5),Ew(`ngModel`,a.contactPhone),l0(),jp(),Ew(`ngModel`,a.contactMail),l0(),jp(),Ew(`ngModel`,a.reason),nw(`p-options`,a.reasonOptions),l0(),jp(),Ew(`ngModel`,a.params),l0(),jp(),Ew(`ngModel`,a.url),l0(),jp(),Ew(`ngModel`,a.logo),l0(),jp(),Ew(`ngModel`,a.secondaryLogo),l0(),jp(),Ew(`ngModel`,a.componentsSize),nw(`p-options`,a.componentsSizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,L0e,Da],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Blocked User Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-blocked-user
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-blocked-user-labs`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return n})();function ke(n,z){if(n&1){let p=Ax();Tl(0,`po-page-login`,2),ht(`p-login-submit`,function(){Ky(p);return Xy(Fx().checkLogin())}),ag()}}function xe(n,z){if(n&1&&Gl(0,`po-page-blocked-user`,1),n&2)nw(`p-params`,Fx().params)}var re=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`,3,`p-params`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(_x(0,ke,1,0,`po-page-login`,0),_x(1,xe,1,1,`po-page-blocked-user`,1)),i&2&&(Dx(a.blocked?-1:0),jp(),Dx(a.blocked?1:-1))},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Blocked User Exceeded Attempts`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`),ag(),Tl(13,`pre`,7),cN(14,`@if (!blocked) {
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-blocked-user-exceeded-attempts`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return n})();function _e(n,z){if(n&1){let p=Ax();Tl(0,`po-page-login`,2),ht(`p-login-submit`,function(){Ky(p);return Xy(Fx().checkLogin())}),ag()}}function we(n,z){n&1&&Gl(0,`po-page-blocked-user`,1)}var de=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-expired-password`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`expiredPassword`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(_x(0,_e,1,0,`po-page-login`,0),_x(1,we,1,0,`po-page-blocked-user`,1)),i&2&&(Dx(a.blocked?-1:0),jp(),Dx(a.blocked?1:-1))},dependencies:[Da,za],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-expired-password-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Blocked User Expired Password`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`),ag(),Tl(13,`pre`,7),cN(14,`@if (!blocked) {
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-blocked-user-expired-password`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ue,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-page-blocked-user-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReasonParams`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReason`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(i,a){i&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageBlockedUserModule } from '@po-ui/ng-templates';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do template do po-page-blocked-user.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoPageBlockedUserComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-page-blocked-user`),ag(),cN(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),ag(),Tl(18,`p`),cN(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),ag(),Tl(20,`p`),cN(21,`Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.`),ag(),Tl(22,`p`),cN(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(24,`em`),cN(25,`assets`),ag(),cN(26,` no arquivo `),Tl(27,`strong`),cN(28,`angular.json`),ag(),cN(29,` da aplicação na seguinte ordem:`),ag(),Tl(30,`pre`)(31,`code`),cN(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ag()(),Gl(33,`hr`),Tl(34,`h4`),cN(35,`Praticidade`),ag(),Tl(36,`p`),cN(37,`O `),Tl(38,`code`),cN(39,`po-page-blocked-user`),ag(),cN(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Tl(41,`code`),cN(42,`/access-denied`),ag(),cN(43,`:`),ag(),Tl(44,`pre`)(45,`code`),cN(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),ag()(),Tl(47,`blockquote`)(48,`p`),cN(49,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. `),ag()()(),Tl(50,`div`,6)(51,`h4`,7),cN(52,`Seletor`),ag(),Tl(53,`pre`,8),cN(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),ag()(),Tl(55,`h4`,9),cN(56,`Propriedades`),ag(),Tl(57,`table`,10)(58,`tr`,11)(59,`th`,12),cN(60,`Nome`),ag(),Tl(61,`th`,12),cN(62,`Tipo`),ag(),Tl(63,`th`,12),cN(64,`Padrão`),ag(),Tl(65,`th`,12),cN(66,`Descrição`),ag()(),Tl(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),cN(71,` p-components-size`),Gl(72,`br`),ag()()(),Tl(73,`td`,17)(74,`code`,18),cN(75,`string`),ag()(),Tl(76,`td`,19)(77,`p`)(78,`code`),cN(79,`medium`),ag()()(),Tl(80,`td`,20)(81,`em`)(82,`strong`),cN(83,`(opcional)`),ag()(),Tl(84,`p`),cN(85,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(86,`ul`)(87,`li`)(88,`code`),cN(89,`small`),ag(),cN(90,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(91,`li`)(92,`code`),cN(93,`medium`),ag(),cN(94,`: aplica a medida medium de cada componente.`),ag()(),Tl(95,`blockquote`)(96,`p`),cN(97,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(98,`code`),cN(99,`medium`),ag(),cN(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(101,`a`,21),cN(102,`po-theme`),ag(),cN(103,`.`),ag()()()(),Tl(104,`tr`,13)(105,`td`,14)(106,`div`,15)(107,`span`,16),cN(108,` p-contact-email`),Gl(109,`br`),ag()()(),Tl(110,`td`,17)(111,`code`,18),cN(112,`string`),ag()(),Tl(113,`td`,19),cN(114,`-`),ag(),Tl(115,`td`,20)(116,`em`)(117,`strong`),cN(118,`(opcional)`),ag()(),Tl(119,`p`),cN(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),ag()()(),Tl(121,`tr`,13)(122,`td`,14)(123,`div`,15)(124,`span`,16),cN(125,` p-contact-phone`),Gl(126,`br`),ag()()(),Tl(127,`td`,17)(128,`code`,18),cN(129,`string`),ag()(),Tl(130,`td`,19),cN(131,`-`),ag(),Tl(132,`td`,20)(133,`em`)(134,`strong`),cN(135,`(opcional)`),ag()(),Tl(136,`p`),cN(137,`Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.`),ag(),Tl(138,`blockquote`)(139,`p`),cN(140,`A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.`),ag()()()(),Tl(141,`tr`,13)(142,`td`,14)(143,`div`,15)(144,`span`,16),cN(145,` p-logo`),Gl(146,`br`),ag()()(),Tl(147,`td`,17)(148,`code`,18),cN(149,`string`),ag()(),Tl(150,`td`,19),cN(151,`-`),ag(),Tl(152,`td`,20)(153,`em`)(154,`strong`),cN(155,`(opcional)`),ag()(),Tl(156,`p`),cN(157,`Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI.`),ag()()(),Tl(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),cN(162,` p-params`),Gl(163,`br`),ag()()(),Tl(164,`td`,17)(165,`code`,22),cN(166,`PoPageBlockedUserReasonParams`),ag()(),Tl(167,`td`,19),cN(168,`-`),ag(),Tl(169,`td`,20)(170,`em`)(171,`strong`),cN(172,`(opcional)`),ag()(),Tl(173,`p`),cN(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),ag(),Tl(175,`pre`)(176,`code`),cN(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),ag()(),Tl(178,`blockquote`)(179,`p`),cN(180,`Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.`),ag()(),Tl(181,`blockquote`)(182,`p`),cN(183,`Veja os parâmetros customizáveis na interface `),Tl(184,`code`),cN(185,`PoPageBlockedUserReasonParams`),ag(),cN(186,`.`),ag()()()(),Tl(187,`tr`,13)(188,`td`,14)(189,`div`,15)(190,`span`,16),cN(191,` p-reason`),Gl(192,`br`),ag()()(),Tl(193,`td`,17)(194,`code`,23),cN(195,`PoPageBlockedUserReason`),ag()(),Tl(196,`td`,19)(197,`p`)(198,`code`),cN(199,`PoPageBlockedUserReason.None`),ag()()(),Tl(200,`td`,20)(201,`em`)(202,`strong`),cN(203,`(opcional)`),ag()(),Tl(204,`p`),cN(205,`Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.`),ag(),Tl(206,`blockquote`)(207,`p`),cN(208,`Veja os valores válidos no `),Tl(209,`em`),cN(210,`enum`),ag(),Tl(211,`code`),cN(212,`PoPageBlockedUserReason`),ag(),cN(213,`.`),ag()()()(),Tl(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),cN(218,` p-secondary-logo`),Gl(219,`br`),ag()()(),Tl(220,`td`,17)(221,`code`,18),cN(222,`string`),ag()(),Tl(223,`td`,19),cN(224,`-`),ag(),Tl(225,`td`,20)(226,`em`)(227,`strong`),cN(228,`(opcional)`),ag()(),Tl(229,`p`),cN(230,`Caminho para a logomarca localizada no rodapé.`),ag()()(),Tl(231,`tr`,13)(232,`td`,14)(233,`div`,15)(234,`span`,16),cN(235,` p-url-back`),Gl(236,`br`),ag()()(),Tl(237,`td`,17)(238,`code`,18),cN(239,`string`),ag()(),Tl(240,`td`,19)(241,`p`)(242,`code`),cN(243,`/`),ag()()(),Tl(244,`td`,20)(245,`em`)(246,`strong`),cN(247,`(opcional)`),ag()(),Tl(248,`p`),cN(249,`URL para a ação de retorno da página.`),ag()()()(),Tl(250,`h3`),cN(251,`Interfaces`),ag(),Tl(252,`h4`,24)(253,`code`,5),cN(254,`PoPageBlockedUserReasonParams`),ag()(),Tl(255,`div`,2)(256,`p`),cN(257,`Interface que define os valores de customização da mensagem de bloqueio do componente `),Tl(258,`code`),cN(259,`po-page-blocked-user`),ag(),cN(260,`.`),ag()(),Tl(261,`h4`,9),cN(262,`Propriedades`),ag(),Tl(263,`table`,10)(264,`tr`,11)(265,`th`,12),cN(266,`Nome`),ag(),Tl(267,`th`,12),cN(268,`Tipo`),ag(),Tl(269,`th`,12),cN(270,`Descrição`),ag()(),Tl(271,`tr`,13)(272,`td`,14)(273,`div`,15)(274,`span`,16),cN(275,` attempts`),Gl(276,`br`),ag()()(),Tl(277,`td`,17)(278,`code`,25),cN(279,`number`),ag()(),Tl(280,`td`,20)(281,`em`)(282,`strong`),cN(283,`(opcional)`),ag()(),Tl(284,`p`),cN(285,`Quantidade máxima de tentativas.`),ag()()(),Tl(286,`tr`,13)(287,`td`,14)(288,`div`,15)(289,`span`,16),cN(290,` days`),Gl(291,`br`),ag()()(),Tl(292,`td`,17)(293,`code`,25),cN(294,`number`),ag()(),Tl(295,`td`,20)(296,`em`)(297,`strong`),cN(298,`(opcional)`),ag()(),Tl(299,`p`),cN(300,`Quantidade de dias para expiração de senha.`),ag()()(),Tl(301,`tr`,13)(302,`td`,14)(303,`div`,15)(304,`span`,16),cN(305,` hours`),Gl(306,`br`),ag()()(),Tl(307,`td`,17)(308,`code`,25),cN(309,`number`),ag()(),Tl(310,`td`,20)(311,`em`)(312,`strong`),cN(313,`(opcional)`),ag()(),Tl(314,`p`),cN(315,`Horas que o sistema permanecerá bloqueado.`),ag()()()(),Tl(316,`h3`),cN(317,`Enums`),ag(),Tl(318,`h4`,4)(319,`code`,5),cN(320,`PoPageBlockedUserReason`),ag()(),Tl(321,`div`,2)(322,`p`)(323,`em`),cN(324,`Enum`),ag(),cN(325,` para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.`),ag()(),Tl(326,`h4`,9),cN(327,`Propriedades`),ag(),Tl(328,`table`,10)(329,`tr`,11)(330,`th`,12),cN(331,`Nome`),ag(),Tl(332,`th`,12),cN(333,`Descrição`),ag()(),Tl(334,`tr`,13)(335,`td`,14)(336,`div`,15)(337,`span`,16),cN(338,` None`),Gl(339,`br`),ag()()(),Tl(340,`td`,20)(341,`p`),cN(342,`Sem definição; a tela exibirá conteúdo de bloqueio genérico.`),ag()()(),Tl(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),cN(347,` ExceededAttempts`),Gl(348,`br`),ag()()(),Tl(349,`td`,20)(350,`p`),cN(351,`Definição para tentativas de acesso esgotadas.`),ag()()(),Tl(352,`tr`,13)(353,`td`,14)(354,`div`,15)(355,`span`,16),cN(356,` ExpiredPassword`),Gl(357,`br`),ag()()(),Tl(358,`td`,20)(359,`p`),cN(360,`Definição para senha expirada.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Le=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Blocked User`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),Gl(3,`sample-po-page-blocked-user-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),Gl(5,`sample-po-page-blocked-user-basic-view`)(6,`sample-po-page-blocked-user-labs-view`)(7,`sample-po-page-blocked-user-exceeded-attempts-view`)(8,`sample-po-page-blocked-user-expired-password-view`),ag()()()),i&2&&(nw(`p-actions`,a.actions),jp(2),nw(`p-active`,a.activeTab===`doc`),jp(2),nw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,le,se,me,ce,ue],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[bL.forChild(Le),bL]})}return n})();var rt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[ar,he]})}return n})();export{rt as DocPoPageBlockedUserModule};