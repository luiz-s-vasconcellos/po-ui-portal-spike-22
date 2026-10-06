import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kn as Ax,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,fn as ni,g as ta,h as sa,i as _a,in as kte,k as D4,ki as he$1,n as Ot,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ti as Wx,ua as ug,wr as Kc,zi as kL}from"./main-AGY457H2.js";var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-basic`]],standalone:!1,decls:1,vars:0,template:function(i,a){i&1&&Kc(0,`po-page-blocked-user`)},dependencies:[ta],encapsulation:2,changeDetection:1})}return n})();var Pe=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Blocked User Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-blocked-user></po-page-blocked-user>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-blocked-user-basic/sample-po-page-blocked-user-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-blocked-user-basic',
  templateUrl: './sample-po-page-blocked-user-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageBlockedUserBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-blocked-user-basic`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Pe,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ie],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{componentsSize;contactMail;contactPhone;customParams;params;logo;reason=Ot.None;secondaryLogo;url;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];reasonOptions=[{label:`Default`,value:Ot.None},{label:`Expired Password`,value:Ot.ExpiredPassword},{label:`Exceeded Attempts`,value:Ot.ExceededAttempts}];ngOnInit(){this.restore()}changeLiterals(){try{this.customParams=JSON.parse(this.params)}catch(p){this.customParams=void 0}}restore(){this.componentsSize=`medium`,this.contactMail=void 0,this.contactPhone=void 0,this.customParams={attempts:5,days:90,hours:24},this.params=``,this.logo=``,this.reason=Ot.None,this.secondaryLogo=``,this.url=void 0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-labs`]],standalone:!1,decls:15,vars:18,consts:[[`f`,`ngForm`],[3,`p-components-size`,`p-contact-email`,`p-contact-phone`,`p-logo`,`p-params`,`p-reason`,`p-secondary-logo`,`p-url-back`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`contactPhone`,`p-clean`,``,`p-help`,`11 99999 9999`,`p-label`,`Contact Phone`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`contactMail`,`p-help`,`user@po-ui.com.br`,`p-label`,`Contact Mail`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`reason`,`p-columns`,`4`,`p-label`,`Reason Screen Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`params`,`p-clean`,``,`p-help`,`{"attempts": 20, "days": 20, "hours": 20}`,`p-label`,`Custom Params`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-help`,`https://po-ui.io/home`,`p-label`,`URL Link`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-help`,`https://po-ui.io/assets/po-logos/po_color.svg`,`p-label`,`Secondary logo`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let u=Bx();Kc(0,`po-page-blocked-user`,1)(1,`po-divider`,2),Ac(2,`form`,null,0)(4,`div`,3)(5,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(u),DN(a.contactPhone,r)||(a.contactPhone=r),e_(r)}),ug(),p0(),Ac(6,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(u),DN(a.contactMail,r)||(a.contactMail=r),e_(r)}),ug(),p0(),Ac(7,`po-radio-group`,6),RE(`ngModelChange`,function(r){return Jv(u),DN(a.reason,r)||(a.reason=r),e_(r)}),ug(),p0(),Ac(8,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(u),DN(a.params,r)||(a.params=r),e_(r)}),pt(`p-change`,function(){return a.changeLiterals()}),ug(),p0(),Ac(9,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(u),DN(a.url,r)||(a.url=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,9),RE(`ngModelChange`,function(r){return Jv(u),DN(a.logo,r)||(a.logo=r),e_(r)}),ug(),p0(),Ac(11,`po-input`,10),RE(`ngModelChange`,function(r){return Jv(u),DN(a.secondaryLogo,r)||(a.secondaryLogo=r),e_(r)}),ug(),p0(),Ac(12,`po-radio-group`,11),RE(`ngModelChange`,function(r){return Jv(u),DN(a.componentsSize,r)||(a.componentsSize=r),e_(r)}),ug(),p0(),ug(),Ac(13,`div`,3)(14,`po-button`,12),pt(`p-click`,function(){return a.restore()}),ug()()()}i&2&&(cE(`p-components-size`,a.componentsSize)(`p-contact-email`,a.contactMail)(`p-contact-phone`,a.contactPhone)(`p-logo`,a.logo)(`p-params`,a.customParams)(`p-reason`,a.reason)(`p-secondary-logo`,a.secondaryLogo)(`p-url-back`,a.url),Hp(5),TE(`ngModel`,a.contactPhone),m0(),Hp(),TE(`ngModel`,a.contactMail),m0(),Hp(),TE(`ngModel`,a.reason),cE(`p-options`,a.reasonOptions),m0(),Hp(),TE(`ngModel`,a.params),m0(),Hp(),TE(`ngModel`,a.url),m0(),Hp(),TE(`ngModel`,a.logo),m0(),Hp(),TE(`ngModel`,a.secondaryLogo),m0(),Hp(),TE(`ngModel`,a.componentsSize),cE(`p-options`,a.componentsSizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,D4,kte,ta],encapsulation:2,changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Blocked User Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-blocked-user
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-blocked-user-labs/sample-po-page-blocked-user-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-blocked-user-labs`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return n})();function ke(n,z){if(n&1){let p=Bx();Ac(0,`po-page-login`,2),pt(`p-login-submit`,function(){Jv(p);let a=Wx();return e_(a.checkLogin())}),ug()}}function xe(n,z){if(n&1&&Kc(0,`po-page-blocked-user`,1),n&2){let p=Wx();cE(`p-params`,p.params)}}var re=(()=>{class n{blocked=!1;params={attempts:1,hours:48};checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`exceededAttempts`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`,3,`p-params`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(Rx(0,ke,1,0,`po-page-login`,0),Rx(1,xe,1,1,`po-page-blocked-user`,1)),i&2&&(Ax(a.blocked?-1:0),Hp(),Ax(a.blocked?1:-1))},dependencies:[ta,sa],encapsulation:2,changeDetection:1})}return n})();var ye=n=>({"docs-sample-code-tabs":n});var me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-exceeded-attempts-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Blocked User Exceeded Attempts`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.html`),ug(),Ac(13,`pre`,7),vN(14,`@if (!blocked) {
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-blocked-user-exceeded-attempts/sample-po-page-blocked-user-exceeded-attempts.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-blocked-user-exceeded-attempts`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return n})();function _e(n,z){if(n&1){let p=Bx();Ac(0,`po-page-login`,2),pt(`p-login-submit`,function(){Jv(p);let a=Wx();return e_(a.checkLogin())}),ug()}}function we(n,z){n&1&&Kc(0,`po-page-blocked-user`,1)}var de=(()=>{class n{blocked=!1;checkLogin(){this.blocked=!0}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password`]],standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-contact-email`,`user@po-ui.com.br`,`p-contact-phone`,`0800 709 8100`,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-reason`,`expiredPassword`,`p-url-back`,`https://po-ui.io/documentation/po-page-blocked-user`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`]],template:function(i,a){i&1&&(Rx(0,_e,1,0,`po-page-login`,0),Rx(1,we,1,0,`po-page-blocked-user`,1)),i&2&&(Ax(a.blocked?-1:0),Hp(),Ax(a.blocked?1:-1))},dependencies:[ta,sa],encapsulation:2,changeDetection:1})}return n})();var Ue=n=>({"docs-sample-code-tabs":n});var ce=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-expired-password-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,a){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Blocked User Expired Password`),ug(),Ac(4,`a`,2),pt(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.html`),ug(),Ac(13,`pre`,7),vN(14,`@if (!blocked) {
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-blocked-user-expired-password/sample-po-page-blocked-user-expired-password.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-blocked-user-expired-password`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ue,a.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return n})();var ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-page-blocked-user-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReasonParams`],[`pan`,``,1,`docs-api-property-type`,`PoPageBlockedUserReason`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(i,a){i&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageBlockedUserModule } from '@po-ui/ng-templates';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do template do po-page-blocked-user.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoPageBlockedUserComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-page-blocked-user`),ug(),vN(17,` \xE9 utilizado como template para tela de bloqueio de usu\xE1rio.
\xC9 poss\xEDvel definir entre tr\xEAs tipos de telas para alertar o usu\xE1rio sobre um eventual bloqueio de login.`),ug(),Ac(18,`p`),vN(19,`Cada modelo de bloqueio possui uma imagem e texto adequados \xE0 situa\xE7\xE3o.
Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis, por\xE9m,
\xE9 poss\xEDvel estipular par\xE2metros como dias, horas e tentativas de acesso esgotadas.`),ug(),Ac(20,`p`),vN(21,`Por fim, há propriedades para adição de telefone e/ou email para contato e também a definição para a url de retorno.`),ug(),Ac(22,`p`),vN(23,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ac(24,`em`),vN(25,`assets`),ug(),vN(26,` no arquivo `),Ac(27,`strong`),vN(28,`angular.json`),ug(),vN(29,` da aplicação na seguinte ordem:`),ug(),Ac(30,`pre`)(31,`code`),vN(32,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ug()(),Kc(33,`hr`),Ac(34,`h4`),vN(35,`Praticidade`),ug(),Ac(36,`p`),vN(37,`O `),Ac(38,`code`),vN(39,`po-page-blocked-user`),ug(),vN(40,`, assim como suas propriedades, pode tamb\xE9m ser transmitido diretamente pelas configura\xE7\xE3os de rota e,
desta maneira, dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o no restante da aplica\xE7\xE3o. O exemplo abaixo exemplifica
a forma din\xE2mica com a qual o template pode ser gerado se navegasse para uma rota denominada como `),Ac(41,`code`),vN(42,`/access-denied`),ug(),vN(43,`:`),ug(),Ac(44,`pre`)(45,`code`),vN(46,`import { PoPageBlockedUserComponent, PoPageBlockedUserReason } from '@po-ui/ng-templates';

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
`),ug()(),Ac(47,`blockquote`)(48,`p`),vN(49,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade. `),ug()()(),Ac(50,`div`,6)(51,`h4`,7),vN(52,`Seletor`),ug(),Ac(53,`pre`,8),vN(54,`<po-page-blocked-user
    p-components-size="string"
    p-contact-email="string"
    p-contact-phone="string"
    p-logo="string"
    p-params="PoPageBlockedUserReasonParams"
    p-reason="PoPageBlockedUserReason"
    p-secondary-logo="string"
    p-url-back="string" >
</po-page-blocked-user>
`),ug()(),Ac(55,`h4`,9),vN(56,`Propriedades`),ug(),Ac(57,`table`,10)(58,`tr`,11)(59,`th`,12),vN(60,`Nome`),ug(),Ac(61,`th`,12),vN(62,`Tipo`),ug(),Ac(63,`th`,12),vN(64,`Padrão`),ug(),Ac(65,`th`,12),vN(66,`Descrição`),ug()(),Ac(67,`tr`,13)(68,`td`,14)(69,`div`,15)(70,`span`,16),vN(71,` p-components-size`),Kc(72,`br`),ug()()(),Ac(73,`td`,17)(74,`code`,18),vN(75,`string`),ug()(),Ac(76,`td`,19)(77,`p`)(78,`code`),vN(79,`medium`),ug()()(),Ac(80,`td`,20)(81,`em`)(82,`strong`),vN(83,`(opcional)`),ug()(),Ac(84,`p`),vN(85,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(86,`ul`)(87,`li`)(88,`code`),vN(89,`small`),ug(),vN(90,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(91,`li`)(92,`code`),vN(93,`medium`),ug(),vN(94,`: aplica a medida medium de cada componente.`),ug()(),Ac(95,`blockquote`)(96,`p`),vN(97,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(98,`code`),vN(99,`medium`),ug(),vN(100,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(101,`a`,21),vN(102,`po-theme`),ug(),vN(103,`.`),ug()()()(),Ac(104,`tr`,13)(105,`td`,14)(106,`div`,15)(107,`span`,16),vN(108,` p-contact-email`),Kc(109,`br`),ug()()(),Ac(110,`td`,17)(111,`code`,18),vN(112,`string`),ug()(),Ac(113,`td`,19),vN(114,`-`),ug(),Ac(115,`td`,20)(116,`em`)(117,`strong`),vN(118,`(opcional)`),ug()(),Ac(119,`p`),vN(120,`Valor para o email de contato que deve ser exibido. A a\xE7\xE3o est\xE1 de acordo com o protocolo MAILTO e \xE9 poss\xEDvel definir
tanto rotas internas quanto externas.`),ug()()(),Ac(121,`tr`,13)(122,`td`,14)(123,`div`,15)(124,`span`,16),vN(125,` p-contact-phone`),Kc(126,`br`),ug()()(),Ac(127,`td`,17)(128,`code`,18),vN(129,`string`),ug()(),Ac(130,`td`,19),vN(131,`-`),ug(),Ac(132,`td`,20)(133,`em`)(134,`strong`),vN(135,`(opcional)`),ug()(),Ac(136,`p`),vN(137,`Valor para o telefone de contato que deve ser exibido. A ação está de acordo com o protocolo TEL.`),ug(),Ac(138,`blockquote`)(139,`p`),vN(140,`A propriedade não contem tratamento de máscara, fica a critério do desenvolvedor defini-la.`),ug()()()(),Ac(141,`tr`,13)(142,`td`,14)(143,`div`,15)(144,`span`,16),vN(145,` p-logo`),Kc(146,`br`),ug()()(),Ac(147,`td`,17)(148,`code`,18),vN(149,`string`),ug()(),Ac(150,`td`,19),vN(151,`-`),ug(),Ac(152,`td`,20)(153,`em`)(154,`strong`),vN(155,`(opcional)`),ug()(),Ac(156,`p`),vN(157,`Caminho para a logomarca localizada na parte superior, caso não seja definida ou seja inválida assume a logo padrão do PO UI.`),ug()()(),Ac(158,`tr`,13)(159,`td`,14)(160,`div`,15)(161,`span`,16),vN(162,` p-params`),Kc(163,`br`),ug()()(),Ac(164,`td`,17)(165,`code`,22),vN(166,`PoPageBlockedUserReasonParams`),ug()(),Ac(167,`td`,19),vN(168,`-`),ug(),Ac(169,`td`,20)(170,`em`)(171,`strong`),vN(172,`(opcional)`),ug()(),Ac(173,`p`),vN(174,`Designa\xE7\xE3o de valores usados para a customiza\xE7\xE3o da mensagem de bloqueio.
Confira abaixo os valores pr\xE9-definidos.`),ug(),Ac(175,`pre`)(176,`code`),vN(177,`const customLiterals: PoPageBlockedUserReasonParams = {
  attempts: 5,
  days: 90,
  hours: 24
};
`),ug()(),Ac(178,`blockquote`)(179,`p`),vN(180,`Salientamos a importância e atenção para configuração desses valores conforme definidos no projeto.`),ug()(),Ac(181,`blockquote`)(182,`p`),vN(183,`Veja os parâmetros customizáveis na interface `),Ac(184,`code`),vN(185,`PoPageBlockedUserReasonParams`),ug(),vN(186,`.`),ug()()()(),Ac(187,`tr`,13)(188,`td`,14)(189,`div`,15)(190,`span`,16),vN(191,` p-reason`),Kc(192,`br`),ug()()(),Ac(193,`td`,17)(194,`code`,23),vN(195,`PoPageBlockedUserReason`),ug()(),Ac(196,`td`,19)(197,`p`)(198,`code`),vN(199,`PoPageBlockedUserReason.None`),ug()()(),Ac(200,`td`,20)(201,`em`)(202,`strong`),vN(203,`(opcional)`),ug()(),Ac(204,`p`),vN(205,`Definição de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado.`),ug(),Ac(206,`blockquote`)(207,`p`),vN(208,`Veja os valores válidos no `),Ac(209,`em`),vN(210,`enum`),ug(),Ac(211,`code`),vN(212,`PoPageBlockedUserReason`),ug(),vN(213,`.`),ug()()()(),Ac(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),vN(218,` p-secondary-logo`),Kc(219,`br`),ug()()(),Ac(220,`td`,17)(221,`code`,18),vN(222,`string`),ug()(),Ac(223,`td`,19),vN(224,`-`),ug(),Ac(225,`td`,20)(226,`em`)(227,`strong`),vN(228,`(opcional)`),ug()(),Ac(229,`p`),vN(230,`Caminho para a logomarca localizada no rodapé.`),ug()()(),Ac(231,`tr`,13)(232,`td`,14)(233,`div`,15)(234,`span`,16),vN(235,` p-url-back`),Kc(236,`br`),ug()()(),Ac(237,`td`,17)(238,`code`,18),vN(239,`string`),ug()(),Ac(240,`td`,19)(241,`p`)(242,`code`),vN(243,`/`),ug()()(),Ac(244,`td`,20)(245,`em`)(246,`strong`),vN(247,`(opcional)`),ug()(),Ac(248,`p`),vN(249,`URL para a ação de retorno da página.`),ug()()()(),Ac(250,`h3`),vN(251,`Interfaces`),ug(),Ac(252,`h4`,24)(253,`code`,5),vN(254,`PoPageBlockedUserReasonParams`),ug()(),Ac(255,`div`,2)(256,`p`),vN(257,`Interface que define os valores de customização da mensagem de bloqueio do componente `),Ac(258,`code`),vN(259,`po-page-blocked-user`),ug(),vN(260,`.`),ug()(),Ac(261,`h4`,9),vN(262,`Propriedades`),ug(),Ac(263,`table`,10)(264,`tr`,11)(265,`th`,12),vN(266,`Nome`),ug(),Ac(267,`th`,12),vN(268,`Tipo`),ug(),Ac(269,`th`,12),vN(270,`Descrição`),ug()(),Ac(271,`tr`,13)(272,`td`,14)(273,`div`,15)(274,`span`,16),vN(275,` attempts`),Kc(276,`br`),ug()()(),Ac(277,`td`,17)(278,`code`,25),vN(279,`number`),ug()(),Ac(280,`td`,20)(281,`em`)(282,`strong`),vN(283,`(opcional)`),ug()(),Ac(284,`p`),vN(285,`Quantidade máxima de tentativas.`),ug()()(),Ac(286,`tr`,13)(287,`td`,14)(288,`div`,15)(289,`span`,16),vN(290,` days`),Kc(291,`br`),ug()()(),Ac(292,`td`,17)(293,`code`,25),vN(294,`number`),ug()(),Ac(295,`td`,20)(296,`em`)(297,`strong`),vN(298,`(opcional)`),ug()(),Ac(299,`p`),vN(300,`Quantidade de dias para expiração de senha.`),ug()()(),Ac(301,`tr`,13)(302,`td`,14)(303,`div`,15)(304,`span`,16),vN(305,` hours`),Kc(306,`br`),ug()()(),Ac(307,`td`,17)(308,`code`,25),vN(309,`number`),ug()(),Ac(310,`td`,20)(311,`em`)(312,`strong`),vN(313,`(opcional)`),ug()(),Ac(314,`p`),vN(315,`Horas que o sistema permanecerá bloqueado.`),ug()()()(),Ac(316,`h3`),vN(317,`Enums`),ug(),Ac(318,`h4`,4)(319,`code`,5),vN(320,`PoPageBlockedUserReason`),ug()(),Ac(321,`div`,2)(322,`p`)(323,`em`),vN(324,`Enum`),ug(),vN(325,` para os tipos de motivo de bloqueio de usuário. As informações modificam conforme o motivo selecionado pelo desenvolvedor.`),ug()(),Ac(326,`h4`,9),vN(327,`Propriedades`),ug(),Ac(328,`table`,10)(329,`tr`,11)(330,`th`,12),vN(331,`Nome`),ug(),Ac(332,`th`,12),vN(333,`Descrição`),ug()(),Ac(334,`tr`,13)(335,`td`,14)(336,`div`,15)(337,`span`,16),vN(338,` None`),Kc(339,`br`),ug()()(),Ac(340,`td`,20)(341,`p`),vN(342,`Sem definição; a tela exibirá conteúdo de bloqueio genérico.`),ug()()(),Ac(343,`tr`,13)(344,`td`,14)(345,`div`,15)(346,`span`,16),vN(347,` ExceededAttempts`),Kc(348,`br`),ug()()(),Ac(349,`td`,20)(350,`p`),vN(351,`Definição para tentativas de acesso esgotadas.`),ug()()(),Ac(352,`tr`,13)(353,`td`,14)(354,`div`,15)(355,`span`,16),vN(356,` ExpiredPassword`),Kc(357,`br`),ug()()(),Ac(358,`td`,20)(359,`p`),vN(360,`Definição para senha expirada.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Le=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,i){this.route=p,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let i=p.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Page Blocked User`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,a){i&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return a.changeTab(`doc`)}),Kc(3,`sample-po-page-blocked-user-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return a.changeTab(`web`)}),Kc(5,`sample-po-page-blocked-user-basic-view`)(6,`sample-po-page-blocked-user-labs-view`)(7,`sample-po-page-blocked-user-exceeded-attempts-view`)(8,`sample-po-page-blocked-user-expired-password-view`),ug()()()),i&2&&(cE(`p-actions`,a.actions),Hp(2),cE(`p-active`,a.activeTab===`doc`),Hp(2),cE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[$ze,gae,bae,le,se,me,ce,ue],encapsulation:2,changeDetection:1})}return n})()}];var he=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[kL.forChild(Le),kL]})}return n})();var rt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=he$1({type:n});static ɵinj=ue$1({imports:[Ta,he]})}return n})();export{rt as DocPoPageBlockedUserModule};