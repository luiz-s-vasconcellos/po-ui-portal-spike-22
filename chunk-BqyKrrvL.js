import{$r as Wx,Br as RE,Di as he,Dt as aae,Hn as AN,In as yze,Kn as BP,Li as kL,M as Ete,Qi as pt,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Ur as Rx,Vr as RN,Wi as mg,Wn as Ax,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,an as p4,dr as Hp,dt as Tte,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,h as sa,hi as e_,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,nn as ob,oi as b9,p as oa,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-VW33P2VM.js";var Pe=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-basic`]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&Kc(0,`po-page-change-password`)},dependencies:[oa],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Change Password Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-change-password></po-page-change-password>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-change-password-basic`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poDialog=f(Ete);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:``,status:!1}}restore(){this.componentsSize=`medium`,this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack=``,this.urlHome=``,this.recovery=``,this.requirement={requirement:``,status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-labs`]],viewQuery:function(i,o){if(i&1&&Xc(oa,7),i&2){let m;fo(m=ho())&&(o.changePassword=m.first)}},standalone:!1,decls:26,vars:19,consts:[[`f`,`ngForm`],[`fRequirements`,`ngForm`],[3,`p-submit`,`p-components-size`,`p-hide-current-password`,`p-logo`,`p-recovery`,`p-requirements`,`p-secondary-logo`,`p-url-back`,`p-url-home`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`urlHome`,`p-label`,`Url home`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-label`,`Recovery`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlBack`,`p-label`,`Url back`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`hideCurrentPassword`,`p-label`,`Hide current password`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`requirement`,`p-label`,`Requirement`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`requirementStatus`,`p-label`,`Requirement Status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Requirement`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,o){if(i&1){let m=Bx();Ac(0,`po-page-change-password`,2),pt(`p-submit`,function(p){return o.submit(p)}),ug(),Kc(1,`po-divider`,3),Ac(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),RE(`ngModelChange`,function(p){return Jv(m),DN(o.urlHome,p)||(o.urlHome=p),e_(p)}),ug(),p0(),Ac(6,`po-input`,6),RE(`ngModelChange`,function(p){return Jv(m),DN(o.recovery,p)||(o.recovery=p),e_(p)}),ug(),p0(),ug(),Ac(7,`div`,4)(8,`po-input`,7),RE(`ngModelChange`,function(p){return Jv(m),DN(o.urlBack,p)||(o.urlBack=p),e_(p)}),ug(),p0(),Ac(9,`po-input`,8),RE(`ngModelChange`,function(p){return Jv(m),DN(o.logo,p)||(o.logo=p),e_(p)}),ug(),p0(),ug(),Ac(10,`div`,4)(11,`po-input`,9),RE(`ngModelChange`,function(p){return Jv(m),DN(o.secondaryLogo,p)||(o.secondaryLogo=p),e_(p)}),ug(),p0(),Ac(12,`po-switch`,10),RE(`ngModelChange`,function(p){return Jv(m),DN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),e_(p)}),ug(),p0(),ug(),Ac(13,`po-radio-group`,11),RE(`ngModelChange`,function(p){return Jv(m),DN(o.componentsSize,p)||(o.componentsSize=p),e_(p)}),ug(),p0(),Kc(14,`br`)(15,`po-divider`),Ac(16,`form`,null,1)(18,`div`,4)(19,`po-input`,12),RE(`ngModelChange`,function(p){return Jv(m),DN(o.requirement.requirement,p)||(o.requirement.requirement=p),e_(p)}),ug(),p0(),Ac(20,`po-switch`,13),RE(`ngModelChange`,function(p){return Jv(m),DN(o.requirement.status,p)||(o.requirement.status=p),e_(p)}),ug(),p0(),ug(),Ac(21,`div`,4)(22,`po-button`,14),pt(`p-click`,function(){return o.addRequirement()}),ug()()(),Kc(23,`po-divider`),Ac(24,`div`,4)(25,`po-button`,15),pt(`p-click`,function(){return o.restore()}),ug()()()}if(i&2){let m=Zx(17);cE(`p-components-size`,o.componentsSize)(`p-hide-current-password`,o.hideCurrentPassword)(`p-logo`,o.logo)(`p-recovery`,o.recovery)(`p-requirements`,o.requirements)(`p-secondary-logo`,o.secondaryLogo)(`p-url-back`,o.urlBack)(`p-url-home`,o.urlHome),Hp(5),TE(`ngModel`,o.urlHome),m0(),Hp(),TE(`ngModel`,o.recovery),m0(),Hp(2),TE(`ngModel`,o.urlBack),m0(),Hp(),TE(`ngModel`,o.logo),m0(),Hp(2),TE(`ngModel`,o.secondaryLogo),m0(),Hp(),TE(`ngModel`,o.hideCurrentPassword),m0(),Hp(),TE(`ngModel`,o.componentsSize),cE(`p-options`,o.componentsSizeOptions),m0(),Hp(6),TE(`ngModel`,o.requirement.requirement),m0(),Hp(),TE(`ngModel`,o.requirement.status),m0(),Hp(2),cE(`p-disabled`,m.form.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,ob,_4,Cte,p4,oa],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Change Password Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-change-password
  [p-components-size]="componentsSize"
  [p-hide-current-password]="hideCurrentPassword"
  [p-logo]="logo"
  [p-recovery]="recovery"
  [p-requirements]="requirements"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="urlBack"
  [p-url-home]="urlHome"
  (p-submit)="submit($event)"
>
</po-page-change-password>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="urlHome" [(ngModel)]="urlHome" p-label="Url home"> </po-input>

    <po-input class="po-md-6" name="recovery" [(ngModel)]="recovery" p-label="Recovery"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="urlBack" [(ngModel)]="urlBack" p-label="Url back"> </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>

    <po-switch
      class="po-lg-6"
      name="hideCurrentPassword"
      [(ngModel)]="hideCurrentPassword"
      p-label="Hide current password"
    >
    </po-switch>
  </div>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <br />

  <po-divider />

  <form #fRequirements="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="requirement"
        [(ngModel)]="requirement.requirement"
        p-label="Requirement"
        p-required
      >
      </po-input>

      <po-switch class="po-md-6" name="requirementStatus" [(ngModel)]="requirement.status" p-label="Requirement Status">
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-3"
        p-label="Add Password Requirement"
        [p-disabled]="fRequirements.form.invalid"
        (p-click)="addRequirement()"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption } from '@po-ui/ng-components';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-labs',
  templateUrl: './sample-po-page-change-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  componentsSize: string;
  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.componentsSize = 'medium';
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      componentsSize: this.componentsSize,
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-change-password-labs`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Be,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,we],encapsulation:2,changeDetection:1})}return a})();function Ne(a,X){if(a&1){let r=Bx();Ac(0,`po-page-edit`,1)(1,`form`,null,0)(3,`div`,3)(4,`div`,3),Kc(5,`po-input`,4),p0(),Ac(6,`po-datepicker`,5),RE(`ngModelChange`,function(o){Jv(r);let m=Wx();return DN(m.birthday,o)||(m.birthday=o),e_(o)}),ug(),p0(),Kc(7,`po-input`,6),p0(),ug(),Ac(8,`div`,3)(9,`po-select`,7),RE(`ngModelChange`,function(o){Jv(r);let m=Wx();return DN(m.country,o)||(m.country=o),e_(o)}),ug(),p0(),Ac(10,`po-select`,8),RE(`ngModelChange`,function(o){Jv(r);let m=Wx();return DN(m.city,o)||(m.city=o),e_(o)}),ug(),p0(),Kc(11,`po-input`,9),p0(),ug(),Kc(12,`po-divider`,10),Ac(13,`po-button`,11),pt(`p-click`,function(){Jv(r);let o=Wx();return e_(o.showChangePasswordScreen())}),ug()()()()}if(a&2){let r=Wx();cE(`p-breadcrumb`,r.breadcrumb),Hp(5),cE(`ngModel`,r.fullName),m0(),Hp(),TE(`ngModel`,r.birthday),m0(),Hp(),cE(`ngModel`,r.email),m0(),Hp(2),TE(`ngModel`,r.country),cE(`p-options`,r.countryOptions),m0(),Hp(),TE(`ngModel`,r.city),cE(`p-options`,r.cityOptions),m0(),Hp(),cE(`ngModel`,r.phoneNumber),m0()}}function ze(a,X){if(a&1){let r=Bx();Ac(0,`po-page-change-password`,12),pt(`p-submit`,function(){Jv(r);let o=Wx();return e_(o.onSubmit())}),ug()}if(a&2){let r=Wx();cE(`p-url-back`,r.url)(`p-url-home`,r.url)}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:`Home`,link:`/documentation/po-page-change-password`},{label:`Profile`}]};cityOptions=[{label:`São Paulo`,value:`sp`}];countryOptions=[{label:`Brazil`,value:`br`}];ngOnInit(){this.initialize()}initialize(){this.birthday=`1991-11-28T00:00:00-02:00`,this.changePasswordScreen=!1,this.city=`sp`,this.country=`br`,this.email=`natasha.romanova@mail.com.br`,this.fullName=`Natasha Romanova`,this.phoneNumber=`119999999999`,this.url=`/home`}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-modify`]],viewQuery:function(i,o){if(i&1&&Xc(oa,5),i&2){let m;fo(m=ho())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:1,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Profile`,3,`p-breadcrumb`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-url-back`,`p-url-home`],[1,`po-row`],[`name`,`fullName`,`p-label`,`Name`,1,`po-md-12`,3,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday Date`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-label`,`Email`,1,`po-md-6`,3,`ngModel`],[`name`,`country`,`p-disabled`,``,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`city`,`p-disabled`,``,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`phoneNumber`,`p-label`,`Phone Number`,`p-mask`,`(99)99999-9999`,1,`po-md-12`,3,`ngModel`],[`p-label`,`Change Password`,1,`po-md-12`,`po-mt-3`],[`p-label`,`Change Your Password`,1,`po-pb-3`,`po-pt-3`,`po-md-3`,3,`p-click`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-submit`,`p-url-back`,`p-url-home`]],template:function(i,o){i&1&&Rx(0,Ne,14,9,`po-page-edit`,1)(1,ze,1,2,`po-page-change-password`,2),i&2&&Ax(o.changePasswordScreen?1:0)},dependencies:[b9,D9,C9,BP,LP,ni,ob,Tte,_4,ioe,yze,oa],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-modify-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Change Password Modify`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`),ug(),Ac(13,`pre`,7),vN(14,`@if (!changePasswordScreen) {
  <po-page-edit p-title="User Profile" [p-breadcrumb]="breadcrumb">
    <form #formEditUser="ngForm">
      <div class="po-row">
        <div class="po-row">
          <po-input class="po-md-12" name="fullName" [ngModel]="fullName" p-label="Name"> </po-input>
          <po-datepicker
            class="po-md-6"
            name="birthday"
            [(ngModel)]="birthday"
            p-clean
            p-format="dd/mm/yyyy"
            p-label="Birthday Date"
            p-required
          >
          </po-datepicker>
          <po-input class="po-md-6" name="email" [ngModel]="email" p-label="Email"> </po-input>
        </div>
        <div class="po-row">
          <po-select
            class="po-md-6"
            name="country"
            [(ngModel)]="country"
            p-disabled
            p-label="Country"
            [p-options]="countryOptions"
          >
          </po-select>
          <po-select class="po-md-6" name="city" [(ngModel)]="city" p-disabled p-label="City" [p-options]="cityOptions">
          </po-select>
          <po-input
            class="po-md-12"
            name="phoneNumber"
            [ngModel]="phoneNumber"
            p-label="Phone Number"
            p-mask="(99)99999-9999"
          >
          </po-input>
        </div>
        <po-divider class="po-md-12 po-mt-3" p-label="Change Password"> </po-divider>
        <po-button
          class="po-pb-3 po-pt-3 po-md-3"
          p-label="Change Your Password"
          (p-click)="showChangePasswordScreen()"
        >
        </po-button>
      </div>
    </form>
  </po-page-edit>
} @else {
  <po-page-change-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-url-back]="url"
    [p-url-home]="url"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoPageChangePasswordComponent } from '@po-ui/ng-templates';

import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-change-password-modify',
  templateUrl: './sample-po-page-change-password-modify.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordModifyComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

  birthday: string;
  changePasswordScreen: boolean;
  city: string;
  country: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  url: string;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/documentation/po-page-change-password' }, { label: 'Profile' }]
  };

  public readonly cityOptions: Array<PoSelectOption> = [{ label: 'S\xE3o Paulo', value: 'sp' }];

  public readonly countryOptions: Array<PoSelectOption> = [{ label: 'Brazil', value: 'br' }];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.birthday = '1991-11-28T00:00:00-02:00';
    this.changePasswordScreen = false;
    this.city = 'sp';
    this.country = 'br';
    this.email = 'natasha.romanova@mail.com.br';
    this.fullName = 'Natasha Romanova';
    this.phoneNumber = '119999999999';
    this.url = '/home';
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  showChangePasswordScreen() {
    this.changePasswordScreen = true;
  }

  showProfileScreen() {
    this.changePasswordScreen = false;
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-change-password-modify`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,be],encapsulation:2,changeDetection:1})}return a})();function He(a,X){if(a&1){let r=Bx();Ac(0,`po-page-login`,2),pt(`p-login-submit`,function(){Jv(r);let o=Wx();return e_(o.checkLogin())}),ug()}}function We(a,X){if(a&1){let r=Bx();Ac(0,`po-page-change-password`,3),pt(`p-submit`,function(){Jv(r);let o=Wx();return e_(o.onSubmit())}),ug()}if(a&2){let r=Wx();cE(`p-requirements`,r.requirements)}}var ye=(()=>{class a{changePassword;login=!1;requirements=[{requirement:`Use at least one symbol (ex. !, @, #).`,status:this.validateSymbols.bind(this)},{requirement:`Mix uppercase and lowercase characters.`,status:this.validateCases.bind(this)},{requirement:`Min of 5 characters.`,status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-create`]],viewQuery:function(i,o){if(i&1&&Xc(oa,7),i&2){let m;fo(m=ho())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-requirements`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-submit`,`p-requirements`]],template:function(i,o){i&1&&(Rx(0,He,1,0,`po-page-login`,0),Rx(1,We,1,1,`po-page-change-password`,1)),i&2&&(Ax(o.login?-1:0),Hp(),Ax(o.login?1:-1))},dependencies:[oa,sa],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-create-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Change Password Create`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`),ug(),Ac(13,`pre`,7),vN(14,`@if (!login) {
  <po-page-login
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    (p-login-submit)="checkLogin()"
  >
  </po-page-login>
}

@if (login) {
  <po-page-change-password
    p-hide-current-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    p-url-home="/home"
    [p-requirements]="requirements"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
}
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoPageChangePasswordComponent, PoPageChangePasswordRequirement } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-create',
  templateUrl: './sample-po-page-change-password-create.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordCreateComponent {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  login: boolean = false;
  requirements: Array<PoPageChangePasswordRequirement> = [
    { requirement: 'Use at least one symbol (ex. !, @, #).', status: this.validateSymbols.bind(this) },
    { requirement: 'Mix uppercase and lowercase characters.', status: this.validateCases.bind(this) },
    { requirement: 'Min of 5 characters.', status: this.validateCharacters.bind(this) }
  ];

  checkLogin() {
    this.login = !this.login;
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  validateCases(newPassword: string) {
    if (newPassword) {
      let result = newPassword.match(/[a-z]/g);

      if (!result || result.length < 1) {
        return false;
      }

      result = newPassword.match(/[A-Z]/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }

  validateCharacters(newPassword: string) {
    return newPassword && newPassword.length >= 5;
  }

  validateSymbols(newPassword: string) {
    if (newPassword) {
      const result = newPassword.match(/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-change-password-create`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,je,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ye],encapsulation:2,changeDetection:1})}return a})();var Qe=()=>({url:`https://po-sample-api.onrender.com/v1/users`,type:`all`,contactMail:`support@mail.com`});var ve=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-request`]],standalone:!1,decls:6,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your Password Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-token`,`rzDsQiSYoq`,`p-url-new-password`,`https://thf.totvs.com.br/sample/api/new-password`,3,`p-recovery`]],template:function(i,o){i&1&&(Ac(0,`po-container`)(1,`div`,0),Kc(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),ug()(),Kc(5,`po-page-change-password`,4)),i&2&&(Hp(5),cE(`p-recovery`,RN(1,Qe)))},dependencies:[Ic,roe,oa],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Change Password Request`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your Password Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-change-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-token="rzDsQiSYoq"
  p-url-new-password="https://thf.totvs.com.br/sample/api/new-password"
  [p-recovery]="{ url: 'https://po-sample-api.onrender.com/v1/users', type: 'all', contactMail: 'support@mail.com' }"
>
</po-page-change-password>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-change-password-request`),ug(),Kc(23,`hr`)),i&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Je,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ve],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-change-password-doc`]],standalone:!1,decls:671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRecovery`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRequirement[]`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(i,o){i&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageChangePasswordModule } from '@po-ui/ng-templates';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do template do po-page-change-password.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoPageChangePasswordComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-page-change-password`),ug(),vN(17,` é utilizado como template para tela de cadastro ou alteração de senha.`),ug(),Ac(18,`p`),vN(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),ug(),Ac(20,`p`),vN(21,`A propriedade `),Ac(22,`code`),vN(23,`p-url-new-password`),ug(),vN(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Ac(25,`em`),vN(26,`client side`),ug(),vN(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Ac(28,`em`),vN(29,`propriedades`),ug(),vN(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ug(),Ac(31,`p`),vN(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ac(33,`em`),vN(34,`assets`),ug(),vN(35,` no arquivo `),Ac(36,`strong`),vN(37,`angular.json`),ug(),vN(38,` da aplicação na seguinte ordem:`),ug(),Ac(39,`pre`)(40,`code`),vN(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ug()()(),Ac(42,`div`,6)(43,`h4`,7),vN(44,`Seletor`),ug(),Ac(45,`pre`,8),vN(46,`<po-page-change-password
    p-components-size="string"
    p-hide-current-password="boolean"
    p-logo="string"
    p-no-autocomplete-password="boolean"
    p-recovery="string | Function | PoPageChangePasswordRecovery"
    p-requirements="PoPageChangePasswordRequirement[]"
    p-secondary-logo="string"
    (p-submit)="EventEmitter"
    p-token="string"
    p-url-back="string"
    p-url-home="string"
    p-url-new-password="string" >
</po-page-change-password>
`),ug()(),Ac(47,`h4`,9),vN(48,`Propriedades`),ug(),Ac(49,`table`,10)(50,`tr`,11)(51,`th`,12),vN(52,`Nome`),ug(),Ac(53,`th`,12),vN(54,`Tipo`),ug(),Ac(55,`th`,12),vN(56,`Padrão`),ug(),Ac(57,`th`,12),vN(58,`Descrição`),ug()(),Ac(59,`tr`,13)(60,`td`,14)(61,`div`,15)(62,`span`,16),vN(63,` p-components-size`),Kc(64,`br`),ug()()(),Ac(65,`td`,17)(66,`code`,18),vN(67,`string`),ug()(),Ac(68,`td`,19)(69,`p`)(70,`code`),vN(71,`medium`),ug()()(),Ac(72,`td`,20)(73,`em`)(74,`strong`),vN(75,`(opcional)`),ug()(),Ac(76,`p`),vN(77,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(78,`ul`)(79,`li`)(80,`code`),vN(81,`small`),ug(),vN(82,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(83,`li`)(84,`code`),vN(85,`medium`),ug(),vN(86,`: aplica a medida medium de cada componente.`),ug()(),Ac(87,`blockquote`)(88,`p`),vN(89,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(90,`code`),vN(91,`medium`),ug(),vN(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(93,`a`,21),vN(94,`po-theme`),ug(),vN(95,`.`),ug()()()(),Ac(96,`tr`,13)(97,`td`,14)(98,`div`,15)(99,`span`,16),vN(100,` p-hide-current-password`),Kc(101,`br`),ug()()(),Ac(102,`td`,17)(103,`code`,22),vN(104,`boolean`),ug()(),Ac(105,`td`,19)(106,`p`)(107,`code`),vN(108,`false`),ug()()(),Ac(109,`td`,20)(110,`em`)(111,`strong`),vN(112,`(opcional)`),ug()(),Ac(113,`p`),vN(114,`Esconde o campo `),Ac(115,`code`),vN(116,`Senha atual`),ug(),vN(117,` para que o template seja para criação de senha.`),ug()()(),Ac(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),vN(122,` p-logo`),Kc(123,`br`),ug()()(),Ac(124,`td`,17)(125,`code`,18),vN(126,`string`),ug()(),Ac(127,`td`,19),vN(128,`-`),ug(),Ac(129,`td`,20)(130,`em`)(131,`strong`),vN(132,`(opcional)`),ug()(),Ac(133,`p`),vN(134,`Caminho para a logomarca localizada na parte superior.`),ug(),Ac(135,`blockquote`)(136,`p`),vN(137,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),ug()()()(),Ac(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),vN(142,` p-no-autocomplete-password`),Kc(143,`br`),ug()()(),Ac(144,`td`,17)(145,`code`,22),vN(146,`boolean`),ug()(),Ac(147,`td`,19)(148,`p`)(149,`code`),vN(150,`true`),ug()()(),Ac(151,`td`,20)(152,`em`)(153,`strong`),vN(154,`(opcional)`),ug()(),Ac(155,`p`),vN(156,`Define a propriedade nativa `),Ac(157,`code`),vN(158,`autocomplete`),ug(),vN(159,` do campo como `),Ac(160,`code`),vN(161,`off`),ug(),vN(162,`.`),ug(),Ac(163,`blockquote`)(164,`p`),vN(165,`No input de senha(`),Ac(166,`code`),vN(167,`po-password`),ug(),vN(168,`) será definido como `),Ac(169,`code`),vN(170,`new-password`),ug(),vN(171,`.`),ug()()()(),Ac(172,`tr`,13)(173,`td`,14)(174,`div`,15)(175,`span`,16),vN(176,` p-recovery`),Kc(177,`br`),ug()()(),Ac(178,`td`,17)(179,`code`,18),vN(180,`string `),ug(),Ac(181,`code`,23),vN(182,` Function `),ug(),Ac(183,`code`,24),vN(184,` PoPageChangePasswordRecovery`),ug()(),Ac(185,`td`,19),vN(186,`-`),ug(),Ac(187,`td`,20)(188,`em`)(189,`strong`),vN(190,`(opcional)`),ug()(),Ac(191,`p`),vN(192,`URL para a ação do link `),Ac(193,`code`),vN(194,`Esqueceu a senha`),ug(),vN(195,`.`),ug(),Ac(196,`p`),vN(197,`A propriedade aceita os seguintes tipos:`),ug(),Ac(198,`ul`)(199,`li`)(200,`p`)(201,`strong`),vN(202,`String`),ug(),vN(203,`: informe uma url externa ou uma rota válida;`),ug()(),Ac(204,`li`)(205,`p`)(206,`strong`),vN(207,`Function`),ug(),vN(208,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),ug(),Ac(209,`pre`)(210,`code`),vN(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),ug()()(),Ac(212,`li`)(213,`p`)(214,`strong`),vN(215,`PoPageChangePasswordRecovery`),ug(),vN(216,`: cria-se vínculo automático com o template `),Ac(217,`strong`),vN(218,`po-modal-password-recovery`),ug(),vN(219,`.
O objeto deve conter a `),Ac(220,`strong`),vN(221,`url`),ug(),vN(222,` para requisição dos recursos e pode-se definir o `),Ac(223,`strong`),vN(224,`tipo`),ug(),vN(225,` de modal para recupera\xE7\xE3o de senha,
`),Ac(226,`strong`),vN(227,`email`),ug(),vN(228,` para contato e `),Ac(229,`strong`),vN(230,`máscara`),ug(),vN(231,` do campo de telefone.`),ug()()(),Ac(232,`blockquote`)(233,`p`),vN(234,`Caso não tenha valor o link `),Ac(235,`code`),vN(236,`Esqueceu a senha`),ug(),vN(237,` desaparece.`),ug()()()(),Ac(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),vN(242,` p-requirements`),Kc(243,`br`),ug()()(),Ac(244,`td`,17)(245,`code`,25),vN(246,`PoPageChangePasswordRequirement[]`),ug()(),Ac(247,`td`,19),vN(248,`-`),ug(),Ac(249,`td`,20)(250,`em`)(251,`strong`),vN(252,`(opcional)`),ug()(),Ac(253,`p`),vN(254,`Lista de regras para criação e alteração de senha.`),ug()()(),Ac(255,`tr`,13)(256,`td`,14)(257,`div`,15)(258,`span`,16),vN(259,` p-secondary-logo`),Kc(260,`br`),ug()()(),Ac(261,`td`,17)(262,`code`,18),vN(263,`string`),ug()(),Ac(264,`td`,19),vN(265,`-`),ug(),Ac(266,`td`,20)(267,`em`)(268,`strong`),vN(269,`(opcional)`),ug()(),Ac(270,`p`),vN(271,`Caminho para a logomarca localizada no rodapé.`),ug()()(),Ac(272,`tr`,13)(273,`td`,14)(274,`div`,26)(275,`span`,27),vN(276,` (p-submit)`),Kc(277,`br`),ug()()(),Ac(278,`td`,17)(279,`code`,28),vN(280,`EventEmitter`),ug()(),Ac(281,`td`,19),vN(282,`-`),ug(),Ac(283,`td`,20)(284,`em`)(285,`strong`),vN(286,`(opcional)`),ug()(),Ac(287,`p`),vN(288,`Função executada ao submeter o form pelo botão salvar.`),ug(),Ac(289,`p`),vN(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Ac(291,`code`),vN(292,`openConfirmation`),ug(),vN(293,`. Exemplo:`),ug(),Ac(294,`pre`)(295,`code`),vN(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),ug()(),Ac(297,`blockquote`)(298,`p`),vN(299,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ac(300,`code`),vN(301,`p-url-new-password`),ug(),vN(302,`.`),ug()()()(),Ac(303,`tr`,13)(304,`td`,14)(305,`div`,15)(306,`span`,16),vN(307,` p-token`),Kc(308,`br`),ug()()(),Ac(309,`td`,17)(310,`code`,18),vN(311,`string`),ug()(),Ac(312,`td`,19),vN(313,`-`),ug(),Ac(314,`td`,20)(315,`em`)(316,`strong`),vN(317,`(opcional)`),ug()(),Ac(318,`p`),vN(319,`Token para solicitação de troca/recuperação de senha.`),ug(),Ac(320,`blockquote`)(321,`p`),vN(322,`Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.`),ug()()()(),Ac(323,`tr`,13)(324,`td`,14)(325,`div`,15)(326,`span`,16),vN(327,` p-url-back`),Kc(328,`br`),ug()()(),Ac(329,`td`,17)(330,`code`,18),vN(331,`string`),ug()(),Ac(332,`td`,19)(333,`p`)(334,`code`),vN(335,`/`),ug()()(),Ac(336,`td`,20)(337,`em`)(338,`strong`),vN(339,`(opcional)`),ug()(),Ac(340,`p`),vN(341,`URL para a ação de retorno da página.`),ug(),Ac(342,`blockquote`)(343,`p`),vN(344,`O botão `),Ac(345,`code`),vN(346,`Voltar`),ug(),vN(347,` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `),Ac(348,`code`),vN(349,`p-hide-current-password`),ug(),vN(350,` for
falsa.`),ug()()()(),Ac(351,`tr`,13)(352,`td`,14)(353,`div`,15)(354,`span`,16),vN(355,` p-url-home`),Kc(356,`br`),ug()()(),Ac(357,`td`,17)(358,`code`,18),vN(359,`string`),ug()(),Ac(360,`td`,19)(361,`p`)(362,`code`),vN(363,`/`),ug()()(),Ac(364,`td`,20)(365,`em`)(366,`strong`),vN(367,`(opcional)`),ug()(),Ac(368,`p`),vN(369,`URL para a ação do botão `),Ac(370,`code`),vN(371,`Entrar no sistema`),ug(),vN(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Ac(373,`code`),vN(374,`openConfirmation`),ug(),vN(375,`.`),ug()()(),Ac(376,`tr`,13)(377,`td`,14)(378,`div`,15)(379,`span`,16),vN(380,` p-url-new-password`),Kc(381,`br`),ug()()(),Ac(382,`td`,17)(383,`code`,18),vN(384,`string`),ug()(),Ac(385,`td`,19),vN(386,`-`),ug(),Ac(387,`td`,20)(388,`em`)(389,`strong`),vN(390,`(opcional)`),ug()(),Ac(391,`p`),vN(392,`Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `),Ac(393,`code`),vN(394,`p-submit`),ug(),vN(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),ug(),Ac(396,`h3`),vN(397,`Processo`),ug(),Ac(398,`p`),vN(399,`Ao digitar um valor válido nos campos de senha e pressionar `),Ac(400,`strong`),vN(401,`salvar`),ug(),vN(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Ac(403,`code`),vN(404,`POST`),ug(),vN(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),ug(),Ac(406,`pre`)(407,`code`),vN(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),ug()(),Ac(409,`p`),vN(410,`O código de resposta HTTP de status esperado é `),Ac(411,`code`),vN(412,`204`),ug(),vN(413,`.`),ug(),Ac(414,`p`),vN(415,`Em caso de `),Ac(416,`strong`),vN(417,`sucesso`),ug(),vN(418,`, será exibida a modal de confirmação de senha alterada.`),ug(),Ac(419,`blockquote`)(420,`p`),vN(421,`O token será informado pela propriedade `),Ac(422,`code`),vN(423,`p-token`),ug(),vN(424,`do componente ou por um `),Ac(425,`em`),vN(426,`query parameter`),ug(),vN(427,` na URL do template.`),ug()(),Ac(428,`p`)(429,`em`),vN(430,`Processo finalizado.`),ug()(),Kc(431,`hr`),Ac(432,`h4`),vN(433,`Praticidade`),ug(),Ac(434,`p`),vN(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Ac(436,`code`),vN(437,`po-page-change-password`),ug(),vN(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Ac(439,`code`),vN(440,`/change-password`),ug(),vN(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),ug(),Ac(442,`pre`)(443,`code`),vN(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'change-password', component: PoPageChangePasswordComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/new-password',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      }
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),ug()(),Ac(445,`p`),vN(446,`O metadado `),Ac(447,`code`),vN(448,`serviceApi`),ug(),vN(449,` deve ser a `),Ac(450,`strong`),vN(451,`url`),ug(),vN(452,` para requisição dos recursos de troca de senha. E `),Ac(453,`code`),vN(454,`recovery`),ug(),vN(455,` \xE9 a interface
`),Ac(456,`code`),vN(457,`PoPageChangePasswordRecovery`),ug(),vN(458,` responsável pelas especificações contidas na modal de recuperação de senha.`),ug(),Ac(459,`blockquote`)(460,`p`),vN(461,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),ug()()()()(),Ac(462,`h3`,9),vN(463,`Métodos`),ug(),Ac(464,`table`,29)(465,`tr`,13)(466,`th`,30)(467,`div`,15)(468,`h4`)(469,`span`,16),vN(470,` openConfirmation `),ug()()()()(),Ac(471,`tr`,20)(472,`td`,20)(473,`p`),vN(474,`Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `),Ac(475,`code`),vN(476,`p-url-home`),ug(),vN(477,``),ug()()()(),Kc(478,`br`),Ac(479,`h3`),vN(480,`Interfaces`),ug(),Ac(481,`h4`,31)(482,`code`,5),vN(483,`PoPageChangePasswordRecovery`),ug()(),Ac(484,`div`,2)(485,`p`),vN(486,`Interface para especificação do tipo de recuperação de senha no `),Ac(487,`code`),vN(488,`po-modal-password-recovery`),ug(),vN(489,`.`),ug()(),Ac(490,`h4`,9),vN(491,`Propriedades`),ug(),Ac(492,`table`,10)(493,`tr`,11)(494,`th`,12),vN(495,`Nome`),ug(),Ac(496,`th`,12),vN(497,`Tipo`),ug(),Ac(498,`th`,12),vN(499,`Descrição`),ug()(),Ac(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),vN(504,` contactMail`),Kc(505,`br`),ug()()(),Ac(506,`td`,17)(507,`code`,18),vN(508,`string`),ug()(),Ac(509,`td`,20)(510,`em`)(511,`strong`),vN(512,`(opcional)`),ug()(),Ac(513,`p`),vN(514,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),ug()()(),Ac(515,`tr`,13)(516,`td`,14)(517,`div`,15)(518,`span`,16),vN(519,` phoneMask`),Kc(520,`br`),ug()()(),Ac(521,`td`,17)(522,`code`,18),vN(523,`string`),ug()(),Ac(524,`td`,20)(525,`em`)(526,`strong`),vN(527,`(opcional)`),ug()(),Ac(528,`p`),vN(529,`Definição da máscara do campo de telefone.`),ug()()(),Ac(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),vN(534,` type`),Kc(535,`br`),ug()()(),Ac(536,`td`,17)(537,`code`,32),vN(538,`PoModalPasswordRecoveryType`),ug()(),Ac(539,`td`,20)(540,`em`)(541,`strong`),vN(542,`(opcional)`),ug()(),Ac(543,`p`),vN(544,`Enum para especificação do tipo de recuperação de senha `),Ac(545,`a`,33),vN(546,`PoModalPasswordRecoveryType`),ug(),vN(547,`.`),ug(),Ac(548,`blockquote`)(549,`p`),vN(550,`Caso não seja definido valor se assume o padrão `),Ac(551,`code`),vN(552,`PoModalPasswordRecoveryType.Email`),ug(),vN(553,`.`),ug()()()(),Ac(554,`tr`,13)(555,`td`,14)(556,`div`,15)(557,`span`,16),vN(558,` url`),Kc(559,`br`),ug()()(),Ac(560,`td`,17)(561,`code`,18),vN(562,`string`),ug()(),Ac(563,`td`,20)(564,`p`),vN(565,`Endpoint usado pelo template `),Ac(566,`strong`),vN(567,`PoModalPasswordRecovery`),ug(),vN(568,` para requisição do recurso.`),ug(),Ac(569,`blockquote`)(570,`p`),vN(571,`Saiba mais em `),Ac(572,`a`,33),vN(573,`PoModalPasswordRecovery`),ug(),vN(574,`.`),ug()()()()(),Ac(575,`h4`,31)(576,`code`,5),vN(577,`PoPageChangePasswordRequirement`),ug()(),Ac(578,`div`,2)(579,`p`),vN(580,`Interface com a definição dos objetos aceitos pela propriedade `),Ac(581,`code`),vN(582,`p-password-requirements`),ug(),vN(583,`.`),ug()(),Ac(584,`h4`,9),vN(585,`Propriedades`),ug(),Ac(586,`table`,10)(587,`tr`,11)(588,`th`,12),vN(589,`Nome`),ug(),Ac(590,`th`,12),vN(591,`Tipo`),ug(),Ac(592,`th`,12),vN(593,`Descrição`),ug()(),Ac(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),vN(598,` requirement`),Kc(599,`br`),ug()()(),Ac(600,`td`,17)(601,`code`,18),vN(602,`string`),ug()(),Ac(603,`td`,20)(604,`p`),vN(605,`Requisito.`),ug()()(),Ac(606,`tr`,13)(607,`td`,14)(608,`div`,15)(609,`span`,16),vN(610,` status`),Kc(611,`br`),ug()()(),Ac(612,`td`,17)(613,`code`,22),vN(614,`boolean `),ug(),Ac(615,`code`,23),vN(616,` Function`),ug()(),Ac(617,`td`,20)(618,`p`),vN(619,`Função que deve retornar um booleano para validar um requisito de senha.`),ug(),Ac(620,`p`),vN(621,`Também é possível informar diretamente um valor booleano que representa esta validação.`),ug()()()(),Ac(622,`h4`,31)(623,`code`,5),vN(624,`PoPageChangePassword`),ug()(),Ac(625,`div`,2)(626,`p`),vN(627,`Interface com a definição do objeto gerado pelo formulário do componente `),Ac(628,`code`),vN(629,`po-page-change-password`),ug(),vN(630,`.`),ug()(),Ac(631,`h4`,9),vN(632,`Propriedades`),ug(),Ac(633,`table`,10)(634,`tr`,11)(635,`th`,12),vN(636,`Nome`),ug(),Ac(637,`th`,12),vN(638,`Tipo`),ug(),Ac(639,`th`,12),vN(640,`Descrição`),ug()(),Ac(641,`tr`,13)(642,`td`,14)(643,`div`,15)(644,`span`,16),vN(645,` currentPassword`),Kc(646,`br`),ug()()(),Ac(647,`td`,17)(648,`code`,18),vN(649,`string`),ug()(),Ac(650,`td`,20)(651,`em`)(652,`strong`),vN(653,`(opcional)`),ug()(),Ac(654,`p`),vN(655,`Senha atual`),ug()()(),Ac(656,`tr`,13)(657,`td`,14)(658,`div`,15)(659,`span`,16),vN(660,` newPassword`),Kc(661,`br`),ug()()(),Ac(662,`td`,17)(663,`code`,18),vN(664,`string`),ug()(),Ac(665,`td`,20)(666,`em`)(667,`strong`),vN(668,`(opcional)`),ug()(),Ac(669,`p`),vN(670,`Nova senha`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Xe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Page Change Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,o){i&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-page-change-password-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-page-change-password-basic-view`)(6,`sample-po-page-change-password-labs-view`)(7,`sample-po-page-change-password-modify-view`)(8,`sample-po-page-change-password-create-view`)(9,`sample-po-page-change-password-request-view`),ug()()()),i&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[vze,tae,aae,Se,Ee,fe,xe,_e,Me],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Xe),kL]})}return a})();var zt=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};