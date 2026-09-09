import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nn as z0e,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,T as D8e,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,a as Ma,aa as uN,ai as _N,bt as W0e,ei as Yl,fi as ag,gi as bL,h as za,ha as ww,jn as ybe,l as ar,la as uo,li as _x,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var Pe=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-basic`]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&Gl(0,`po-page-change-password`)},dependencies:[Ma],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Change Password Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-change-password></po-page-change-password>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-change-password-basic`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{poDialog=f(W0e);changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:``,status:!1}}restore(){this.componentsSize=`medium`,this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack=``,this.urlHome=``,this.recovery=``,this.requirement={requirement:``,status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:`Authenticate`,message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-labs`]],viewQuery:function(i,o){if(i&1&&Yl(Ma,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first)}},standalone:!1,decls:26,vars:19,consts:[[`f`,`ngForm`],[`fRequirements`,`ngForm`],[3,`p-submit`,`p-components-size`,`p-hide-current-password`,`p-logo`,`p-recovery`,`p-requirements`,`p-secondary-logo`,`p-url-back`,`p-url-home`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`urlHome`,`p-label`,`Url home`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`recovery`,`p-label`,`Recovery`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlBack`,`p-label`,`Url back`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`logo`,`p-clean`,``,`p-label`,`Logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryLogo`,`p-clean`,``,`p-label`,`Secondary logo`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`hideCurrentPassword`,`p-label`,`Hide current password`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`requirement`,`p-label`,`Requirement`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`requirementStatus`,`p-label`,`Requirement Status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Password Requirement`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,o){if(i&1){let m=Ax();Tl(0,`po-page-change-password`,2),ht(`p-submit`,function(p){return o.submit(p)}),ag(),Gl(1,`po-divider`,3),Tl(2,`form`,null,0)(4,`div`,4)(5,`po-input`,5),ww(`ngModelChange`,function(p){return Ky(m),uN(o.urlHome,p)||(o.urlHome=p),Xy(p)}),ag(),a0(),Tl(6,`po-input`,6),ww(`ngModelChange`,function(p){return Ky(m),uN(o.recovery,p)||(o.recovery=p),Xy(p)}),ag(),a0(),ag(),Tl(7,`div`,4)(8,`po-input`,7),ww(`ngModelChange`,function(p){return Ky(m),uN(o.urlBack,p)||(o.urlBack=p),Xy(p)}),ag(),a0(),Tl(9,`po-input`,8),ww(`ngModelChange`,function(p){return Ky(m),uN(o.logo,p)||(o.logo=p),Xy(p)}),ag(),a0(),ag(),Tl(10,`div`,4)(11,`po-input`,9),ww(`ngModelChange`,function(p){return Ky(m),uN(o.secondaryLogo,p)||(o.secondaryLogo=p),Xy(p)}),ag(),a0(),Tl(12,`po-switch`,10),ww(`ngModelChange`,function(p){return Ky(m),uN(o.hideCurrentPassword,p)||(o.hideCurrentPassword=p),Xy(p)}),ag(),a0(),ag(),Tl(13,`po-radio-group`,11),ww(`ngModelChange`,function(p){return Ky(m),uN(o.componentsSize,p)||(o.componentsSize=p),Xy(p)}),ag(),a0(),Gl(14,`br`)(15,`po-divider`),Tl(16,`form`,null,1)(18,`div`,4)(19,`po-input`,12),ww(`ngModelChange`,function(p){return Ky(m),uN(o.requirement.requirement,p)||(o.requirement.requirement=p),Xy(p)}),ag(),a0(),Tl(20,`po-switch`,13),ww(`ngModelChange`,function(p){return Ky(m),uN(o.requirement.status,p)||(o.requirement.status=p),Xy(p)}),ag(),a0(),ag(),Tl(21,`div`,4)(22,`po-button`,14),ht(`p-click`,function(){return o.addRequirement()}),ag()()(),Gl(23,`po-divider`),Tl(24,`div`,4)(25,`po-button`,15),ht(`p-click`,function(){return o.restore()}),ag()()()}if(i&2){let m=Bx(17);nw(`p-components-size`,o.componentsSize)(`p-hide-current-password`,o.hideCurrentPassword)(`p-logo`,o.logo)(`p-recovery`,o.recovery)(`p-requirements`,o.requirements)(`p-secondary-logo`,o.secondaryLogo)(`p-url-back`,o.urlBack)(`p-url-home`,o.urlHome),jp(5),Ew(`ngModel`,o.urlHome),l0(),jp(),Ew(`ngModel`,o.recovery),l0(),jp(2),Ew(`ngModel`,o.urlBack),l0(),jp(),Ew(`ngModel`,o.logo),l0(),jp(2),Ew(`ngModel`,o.secondaryLogo),l0(),jp(),Ew(`ngModel`,o.hideCurrentPassword),l0(),jp(),Ew(`ngModel`,o.componentsSize),nw(`p-options`,o.componentsSizeOptions),l0(),jp(6),Ew(`ngModel`,o.requirement.requirement),l0(),jp(),Ew(`ngModel`,o.requirement.status),l0(),jp(2),nw(`p-disabled`,m.form.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,L0e,j4,Ma],encapsulation:2,changeDetection:1})}return a})();var Be=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Change Password Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-change-password
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-change-password-labs`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Be,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,we],encapsulation:2,changeDetection:1})}return a})();function Ne(a,X){if(a&1){let r=Ax();Tl(0,`po-page-edit`,1)(1,`form`,null,0)(3,`div`,3)(4,`div`,3),Gl(5,`po-input`,4),a0(),Tl(6,`po-datepicker`,5),ww(`ngModelChange`,function(o){Ky(r);let m=Fx();return uN(m.birthday,o)||(m.birthday=o),Xy(o)}),ag(),a0(),Gl(7,`po-input`,6),a0(),ag(),Tl(8,`div`,3)(9,`po-select`,7),ww(`ngModelChange`,function(o){Ky(r);let m=Fx();return uN(m.country,o)||(m.country=o),Xy(o)}),ag(),a0(),Tl(10,`po-select`,8),ww(`ngModelChange`,function(o){Ky(r);let m=Fx();return uN(m.city,o)||(m.city=o),Xy(o)}),ag(),a0(),Gl(11,`po-input`,9),a0(),ag(),Gl(12,`po-divider`,10),Tl(13,`po-button`,11),ht(`p-click`,function(){Ky(r);return Xy(Fx().showChangePasswordScreen())}),ag()()()()}if(a&2){let r=Fx();nw(`p-breadcrumb`,r.breadcrumb),jp(5),nw(`ngModel`,r.fullName),l0(),jp(),Ew(`ngModel`,r.birthday),l0(),jp(),nw(`ngModel`,r.email),l0(),jp(2),Ew(`ngModel`,r.country),nw(`p-options`,r.countryOptions),l0(),jp(),Ew(`ngModel`,r.city),nw(`p-options`,r.cityOptions),l0(),jp(),nw(`ngModel`,r.phoneNumber),l0()}}function ze(a,X){if(a&1){let r=Ax();Tl(0,`po-page-change-password`,12),ht(`p-submit`,function(){Ky(r);return Xy(Fx().onSubmit())}),ag()}if(a&2){let r=Fx();nw(`p-url-back`,r.url)(`p-url-home`,r.url)}}var be=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:`Home`,link:`/documentation/po-page-change-password`},{label:`Profile`}]};cityOptions=[{label:`São Paulo`,value:`sp`}];countryOptions=[{label:`Brazil`,value:`br`}];ngOnInit(){this.initialize()}initialize(){this.birthday=`1991-11-28T00:00:00-02:00`,this.changePasswordScreen=!1,this.city=`sp`,this.country=`br`,this.email=`natasha.romanova@mail.com.br`,this.fullName=`Natasha Romanova`,this.phoneNumber=`119999999999`,this.url=`/home`}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-modify`]],viewQuery:function(i,o){if(i&1&&Yl(Ma,5),i&2){let m;lo(m=uo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:1,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Profile`,3,`p-breadcrumb`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-url-back`,`p-url-home`],[1,`po-row`],[`name`,`fullName`,`p-label`,`Name`,1,`po-md-12`,3,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday Date`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-label`,`Email`,1,`po-md-6`,3,`ngModel`],[`name`,`country`,`p-disabled`,``,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`city`,`p-disabled`,``,`p-label`,`City`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`phoneNumber`,`p-label`,`Phone Number`,`p-mask`,`(99)99999-9999`,1,`po-md-12`,3,`ngModel`],[`p-label`,`Change Password`,1,`po-md-12`,`po-mt-3`],[`p-label`,`Change Your Password`,1,`po-pb-3`,`po-pt-3`,`po-md-3`,3,`p-click`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-submit`,`p-url-back`,`p-url-home`]],template:function(i,o){i&1&&_x(0,Ne,14,9,`po-page-edit`,1)(1,ze,1,2,`po-page-change-password`,2),i&2&&Dx(o.changePasswordScreen?1:0)},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,z0e,iU,fbe,D8e,Ma],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-modify-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Change Password Modify`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html`),ag(),Tl(13,`pre`,7),cN(14,`@if (!changePasswordScreen) {
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-change-password-modify`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Fe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return a})();function He(a,X){if(a&1){let r=Ax();Tl(0,`po-page-login`,2),ht(`p-login-submit`,function(){Ky(r);return Xy(Fx().checkLogin())}),ag()}}function We(a,X){if(a&1){let r=Ax();Tl(0,`po-page-change-password`,3),ht(`p-submit`,function(){Ky(r);return Xy(Fx().onSubmit())}),ag()}if(a&2)nw(`p-requirements`,Fx().requirements)}var ye=(()=>{class a{changePassword;login=!1;requirements=[{requirement:`Use at least one symbol (ex. !, @, #).`,status:this.validateSymbols.bind(this)},{requirement:`Mix uppercase and lowercase characters.`,status:this.validateCases.bind(this)},{requirement:`Min of 5 characters.`,status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-create`]],viewQuery:function(i,o){if(i&1&&Yl(Ma,7),i&2){let m;lo(m=uo())&&(o.changePassword=m.first)}},standalone:!1,decls:2,vars:2,consts:[[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-requirements`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,3,`p-login-submit`],[`p-hide-current-password`,``,`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-url-home`,`/home`,3,`p-submit`,`p-requirements`]],template:function(i,o){i&1&&(_x(0,He,1,0,`po-page-login`,0),_x(1,We,1,1,`po-page-change-password`,1)),i&2&&(Dx(o.login?-1:0),jp(),Dx(o.login?1:-1))},dependencies:[Ma,za],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-create-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Change Password Create`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.html`),ag(),Tl(13,`pre`,7),cN(14,`@if (!login) {
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-change-password-create`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,je,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ye],encapsulation:2,changeDetection:1})}return a})();var Qe=()=>({url:`https://po-sample-api.onrender.com/v1/users`,type:`all`,contactMail:`support@mail.com`});var ve=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-request`]],standalone:!1,decls:6,vars:2,consts:[[1,`po-row`],[`p-label`,`Forgot your Password Sample Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Forgot your Password Sample SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`p-logo`,`https://via.placeholder.com/160x64?text=MAIN+LOGO`,`p-secondary-logo`,`https://via.placeholder.com/80x24?text=SECONDARY+LOGO`,`p-token`,`rzDsQiSYoq`,`p-url-new-password`,`https://thf.totvs.com.br/sample/api/new-password`,3,`p-recovery`]],template:function(i,o){i&1&&(Tl(0,`po-container`)(1,`div`,0),Gl(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),ag()(),Gl(5,`po-page-change-password`,4)),i&2&&(jp(5),nw(`p-recovery`,_N(1,Qe)))},dependencies:[xp,ybe,Ma],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a});var _e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Change Password Request`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-change-password-request`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Je,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ve],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-change-password-doc`]],standalone:!1,decls:671,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRecovery`],[`pan`,``,1,`docs-api-property-type`,`PoPageChangePasswordRequirement[]`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[`href`,`/documentation/po-modal-password-recovery`]],template:function(i,o){i&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageChangePasswordModule } from '@po-ui/ng-templates';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do template do po-page-change-password.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoPageChangePasswordComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-page-change-password`),ag(),cN(17,` é utilizado como template para tela de cadastro ou alteração de senha.`),ag(),Tl(18,`p`),cN(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),ag(),Tl(20,`p`),cN(21,`A propriedade `),Tl(22,`code`),cN(23,`p-url-new-password`),ag(),cN(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),Tl(25,`em`),cN(26,`client side`),ag(),cN(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),Tl(28,`em`),cN(29,`propriedades`),ag(),cN(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ag(),Tl(31,`p`),cN(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(33,`em`),cN(34,`assets`),ag(),cN(35,` no arquivo `),Tl(36,`strong`),cN(37,`angular.json`),ag(),cN(38,` da aplicação na seguinte ordem:`),ag(),Tl(39,`pre`)(40,`code`),cN(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ag()()(),Tl(42,`div`,6)(43,`h4`,7),cN(44,`Seletor`),ag(),Tl(45,`pre`,8),cN(46,`<po-page-change-password
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
`),ag()(),Tl(47,`h4`,9),cN(48,`Propriedades`),ag(),Tl(49,`table`,10)(50,`tr`,11)(51,`th`,12),cN(52,`Nome`),ag(),Tl(53,`th`,12),cN(54,`Tipo`),ag(),Tl(55,`th`,12),cN(56,`Padrão`),ag(),Tl(57,`th`,12),cN(58,`Descrição`),ag()(),Tl(59,`tr`,13)(60,`td`,14)(61,`div`,15)(62,`span`,16),cN(63,` p-components-size`),Gl(64,`br`),ag()()(),Tl(65,`td`,17)(66,`code`,18),cN(67,`string`),ag()(),Tl(68,`td`,19)(69,`p`)(70,`code`),cN(71,`medium`),ag()()(),Tl(72,`td`,20)(73,`em`)(74,`strong`),cN(75,`(opcional)`),ag()(),Tl(76,`p`),cN(77,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(78,`ul`)(79,`li`)(80,`code`),cN(81,`small`),ag(),cN(82,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(83,`li`)(84,`code`),cN(85,`medium`),ag(),cN(86,`: aplica a medida medium de cada componente.`),ag()(),Tl(87,`blockquote`)(88,`p`),cN(89,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(90,`code`),cN(91,`medium`),ag(),cN(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(93,`a`,21),cN(94,`po-theme`),ag(),cN(95,`.`),ag()()()(),Tl(96,`tr`,13)(97,`td`,14)(98,`div`,15)(99,`span`,16),cN(100,` p-hide-current-password`),Gl(101,`br`),ag()()(),Tl(102,`td`,17)(103,`code`,22),cN(104,`boolean`),ag()(),Tl(105,`td`,19)(106,`p`)(107,`code`),cN(108,`false`),ag()()(),Tl(109,`td`,20)(110,`em`)(111,`strong`),cN(112,`(opcional)`),ag()(),Tl(113,`p`),cN(114,`Esconde o campo `),Tl(115,`code`),cN(116,`Senha atual`),ag(),cN(117,` para que o template seja para criação de senha.`),ag()()(),Tl(118,`tr`,13)(119,`td`,14)(120,`div`,15)(121,`span`,16),cN(122,` p-logo`),Gl(123,`br`),ag()()(),Tl(124,`td`,17)(125,`code`,18),cN(126,`string`),ag()(),Tl(127,`td`,19),cN(128,`-`),ag(),Tl(129,`td`,20)(130,`em`)(131,`strong`),cN(132,`(opcional)`),ag()(),Tl(133,`p`),cN(134,`Caminho para a logomarca localizada na parte superior.`),ag(),Tl(135,`blockquote`)(136,`p`),cN(137,`Caso seja indefinida o espaço se mantém preservado porém vazio.`),ag()()()(),Tl(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),cN(142,` p-no-autocomplete-password`),Gl(143,`br`),ag()()(),Tl(144,`td`,17)(145,`code`,22),cN(146,`boolean`),ag()(),Tl(147,`td`,19)(148,`p`)(149,`code`),cN(150,`true`),ag()()(),Tl(151,`td`,20)(152,`em`)(153,`strong`),cN(154,`(opcional)`),ag()(),Tl(155,`p`),cN(156,`Define a propriedade nativa `),Tl(157,`code`),cN(158,`autocomplete`),ag(),cN(159,` do campo como `),Tl(160,`code`),cN(161,`off`),ag(),cN(162,`.`),ag(),Tl(163,`blockquote`)(164,`p`),cN(165,`No input de senha(`),Tl(166,`code`),cN(167,`po-password`),ag(),cN(168,`) será definido como `),Tl(169,`code`),cN(170,`new-password`),ag(),cN(171,`.`),ag()()()(),Tl(172,`tr`,13)(173,`td`,14)(174,`div`,15)(175,`span`,16),cN(176,` p-recovery`),Gl(177,`br`),ag()()(),Tl(178,`td`,17)(179,`code`,18),cN(180,`string `),ag(),Tl(181,`code`,23),cN(182,` Function `),ag(),Tl(183,`code`,24),cN(184,` PoPageChangePasswordRecovery`),ag()(),Tl(185,`td`,19),cN(186,`-`),ag(),Tl(187,`td`,20)(188,`em`)(189,`strong`),cN(190,`(opcional)`),ag()(),Tl(191,`p`),cN(192,`URL para a ação do link `),Tl(193,`code`),cN(194,`Esqueceu a senha`),ag(),cN(195,`.`),ag(),Tl(196,`p`),cN(197,`A propriedade aceita os seguintes tipos:`),ag(),Tl(198,`ul`)(199,`li`)(200,`p`)(201,`strong`),cN(202,`String`),ag(),cN(203,`: informe uma url externa ou uma rota válida;`),ag()(),Tl(204,`li`)(205,`p`)(206,`strong`),cN(207,`Function`),ag(),cN(208,`: pode-se customizar a ação. Para esta possilidade basta atribuir:`),ag(),Tl(209,`pre`)(210,`code`),cN(211,`<po-page-change-password>
  [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),ag()()(),Tl(212,`li`)(213,`p`)(214,`strong`),cN(215,`PoPageChangePasswordRecovery`),ag(),cN(216,`: cria-se vínculo automático com o template `),Tl(217,`strong`),cN(218,`po-modal-password-recovery`),ag(),cN(219,`.
O objeto deve conter a `),Tl(220,`strong`),cN(221,`url`),ag(),cN(222,` para requisição dos recursos e pode-se definir o `),Tl(223,`strong`),cN(224,`tipo`),ag(),cN(225,` de modal para recupera\xE7\xE3o de senha,
`),Tl(226,`strong`),cN(227,`email`),ag(),cN(228,` para contato e `),Tl(229,`strong`),cN(230,`máscara`),ag(),cN(231,` do campo de telefone.`),ag()()(),Tl(232,`blockquote`)(233,`p`),cN(234,`Caso não tenha valor o link `),Tl(235,`code`),cN(236,`Esqueceu a senha`),ag(),cN(237,` desaparece.`),ag()()()(),Tl(238,`tr`,13)(239,`td`,14)(240,`div`,15)(241,`span`,16),cN(242,` p-requirements`),Gl(243,`br`),ag()()(),Tl(244,`td`,17)(245,`code`,25),cN(246,`PoPageChangePasswordRequirement[]`),ag()(),Tl(247,`td`,19),cN(248,`-`),ag(),Tl(249,`td`,20)(250,`em`)(251,`strong`),cN(252,`(opcional)`),ag()(),Tl(253,`p`),cN(254,`Lista de regras para criação e alteração de senha.`),ag()()(),Tl(255,`tr`,13)(256,`td`,14)(257,`div`,15)(258,`span`,16),cN(259,` p-secondary-logo`),Gl(260,`br`),ag()()(),Tl(261,`td`,17)(262,`code`,18),cN(263,`string`),ag()(),Tl(264,`td`,19),cN(265,`-`),ag(),Tl(266,`td`,20)(267,`em`)(268,`strong`),cN(269,`(opcional)`),ag()(),Tl(270,`p`),cN(271,`Caminho para a logomarca localizada no rodapé.`),ag()()(),Tl(272,`tr`,13)(273,`td`,14)(274,`div`,26)(275,`span`,27),cN(276,` (p-submit)`),Gl(277,`br`),ag()()(),Tl(278,`td`,17)(279,`code`,28),cN(280,`EventEmitter`),ag()(),Tl(281,`td`,19),cN(282,`-`),ag(),Tl(283,`td`,20)(284,`em`)(285,`strong`),cN(286,`(opcional)`),ag()(),Tl(287,`p`),cN(288,`Função executada ao submeter o form pelo botão salvar.`),ag(),Tl(289,`p`),cN(290,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),Tl(291,`code`),cN(292,`openConfirmation`),ag(),cN(293,`. Exemplo:`),ag(),Tl(294,`pre`)(295,`code`),cN(296,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),ag()(),Tl(297,`blockquote`)(298,`p`),cN(299,`Esta propriedade será ignorada se for definido valor para a propriedade `),Tl(300,`code`),cN(301,`p-url-new-password`),ag(),cN(302,`.`),ag()()()(),Tl(303,`tr`,13)(304,`td`,14)(305,`div`,15)(306,`span`,16),cN(307,` p-token`),Gl(308,`br`),ag()()(),Tl(309,`td`,17)(310,`code`,18),cN(311,`string`),ag()(),Tl(312,`td`,19),cN(313,`-`),ag(),Tl(314,`td`,20)(315,`em`)(316,`strong`),cN(317,`(opcional)`),ag()(),Tl(318,`p`),cN(319,`Token para solicitação de troca/recuperação de senha.`),ag(),Tl(320,`blockquote`)(321,`p`),cN(322,`Esta propriedade será ignorada caso exista um token como parâmetro na URL inicial do template.`),ag()()()(),Tl(323,`tr`,13)(324,`td`,14)(325,`div`,15)(326,`span`,16),cN(327,` p-url-back`),Gl(328,`br`),ag()()(),Tl(329,`td`,17)(330,`code`,18),cN(331,`string`),ag()(),Tl(332,`td`,19)(333,`p`)(334,`code`),cN(335,`/`),ag()()(),Tl(336,`td`,20)(337,`em`)(338,`strong`),cN(339,`(opcional)`),ag()(),Tl(340,`p`),cN(341,`URL para a ação de retorno da página.`),ag(),Tl(342,`blockquote`)(343,`p`),cN(344,`O botão `),Tl(345,`code`),cN(346,`Voltar`),ag(),cN(347,` aparece apenas para telas de alteração de senha, ou seja, só aparece se a propriedade `),Tl(348,`code`),cN(349,`p-hide-current-password`),ag(),cN(350,` for
falsa.`),ag()()()(),Tl(351,`tr`,13)(352,`td`,14)(353,`div`,15)(354,`span`,16),cN(355,` p-url-home`),Gl(356,`br`),ag()()(),Tl(357,`td`,17)(358,`code`,18),cN(359,`string`),ag()(),Tl(360,`td`,19)(361,`p`)(362,`code`),cN(363,`/`),ag()()(),Tl(364,`td`,20)(365,`em`)(366,`strong`),cN(367,`(opcional)`),ag()(),Tl(368,`p`),cN(369,`URL para a ação do botão `),Tl(370,`code`),cN(371,`Entrar no sistema`),ag(),cN(372,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),Tl(373,`code`),cN(374,`openConfirmation`),ag(),cN(375,`.`),ag()()(),Tl(376,`tr`,13)(377,`td`,14)(378,`div`,15)(379,`span`,16),cN(380,` p-url-new-password`),Gl(381,`br`),ag()()(),Tl(382,`td`,17)(383,`code`,18),cN(384,`string`),ag()(),Tl(385,`td`,19),cN(386,`-`),ag(),Tl(387,`td`,20)(388,`em`)(389,`strong`),cN(390,`(opcional)`),ag()(),Tl(391,`p`),cN(392,`Endpoint usado pelo template para realizar um POST. Quando preenchido, o método `),Tl(393,`code`),cN(394,`p-submit`),ag(),cN(395,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),ag(),Tl(396,`h3`),cN(397,`Processo`),ag(),Tl(398,`p`),cN(399,`Ao digitar um valor válido nos campos de senha e pressionar `),Tl(400,`strong`),cN(401,`salvar`),ag(),cN(402,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Tl(403,`code`),cN(404,`POST`),ag(),cN(405,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),ag(),Tl(406,`pre`)(407,`code`),cN(408,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),ag()(),Tl(409,`p`),cN(410,`O código de resposta HTTP de status esperado é `),Tl(411,`code`),cN(412,`204`),ag(),cN(413,`.`),ag(),Tl(414,`p`),cN(415,`Em caso de `),Tl(416,`strong`),cN(417,`sucesso`),ag(),cN(418,`, será exibida a modal de confirmação de senha alterada.`),ag(),Tl(419,`blockquote`)(420,`p`),cN(421,`O token será informado pela propriedade `),Tl(422,`code`),cN(423,`p-token`),ag(),cN(424,`do componente ou por um `),Tl(425,`em`),cN(426,`query parameter`),ag(),cN(427,` na URL do template.`),ag()(),Tl(428,`p`)(429,`em`),cN(430,`Processo finalizado.`),ag()(),Gl(431,`hr`),Tl(432,`h4`),cN(433,`Praticidade`),ag(),Tl(434,`p`),cN(435,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),Tl(436,`code`),cN(437,`po-page-change-password`),ag(),cN(438,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),Tl(439,`code`),cN(440,`/change-password`),ag(),cN(441,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),ag(),Tl(442,`pre`)(443,`code`),cN(444,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

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
`),ag()(),Tl(445,`p`),cN(446,`O metadado `),Tl(447,`code`),cN(448,`serviceApi`),ag(),cN(449,` deve ser a `),Tl(450,`strong`),cN(451,`url`),ag(),cN(452,` para requisição dos recursos de troca de senha. E `),Tl(453,`code`),cN(454,`recovery`),ag(),cN(455,` \xE9 a interface
`),Tl(456,`code`),cN(457,`PoPageChangePasswordRecovery`),ag(),cN(458,` responsável pelas especificações contidas na modal de recuperação de senha.`),ag(),Tl(459,`blockquote`)(460,`p`),cN(461,`É essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade.`),ag()()()()(),Tl(462,`h3`,9),cN(463,`Métodos`),ag(),Tl(464,`table`,29)(465,`tr`,13)(466,`th`,30)(467,`div`,15)(468,`h4`)(469,`span`,16),cN(470,` openConfirmation `),ag()()()()(),Tl(471,`tr`,20)(472,`td`,20)(473,`p`),cN(474,`Abre uma modal de confirmação com texto, imagem e botão que redireciona para o link definido na propriedade `),Tl(475,`code`),cN(476,`p-url-home`),ag(),cN(477,``),ag()()()(),Gl(478,`br`),Tl(479,`h3`),cN(480,`Interfaces`),ag(),Tl(481,`h4`,31)(482,`code`,5),cN(483,`PoPageChangePasswordRecovery`),ag()(),Tl(484,`div`,2)(485,`p`),cN(486,`Interface para especificação do tipo de recuperação de senha no `),Tl(487,`code`),cN(488,`po-modal-password-recovery`),ag(),cN(489,`.`),ag()(),Tl(490,`h4`,9),cN(491,`Propriedades`),ag(),Tl(492,`table`,10)(493,`tr`,11)(494,`th`,12),cN(495,`Nome`),ag(),Tl(496,`th`,12),cN(497,`Tipo`),ag(),Tl(498,`th`,12),cN(499,`Descrição`),ag()(),Tl(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),cN(504,` contactMail`),Gl(505,`br`),ag()()(),Tl(506,`td`,17)(507,`code`,18),cN(508,`string`),ag()(),Tl(509,`td`,20)(510,`em`)(511,`strong`),cN(512,`(opcional)`),ag()(),Tl(513,`p`),cN(514,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),ag()()(),Tl(515,`tr`,13)(516,`td`,14)(517,`div`,15)(518,`span`,16),cN(519,` phoneMask`),Gl(520,`br`),ag()()(),Tl(521,`td`,17)(522,`code`,18),cN(523,`string`),ag()(),Tl(524,`td`,20)(525,`em`)(526,`strong`),cN(527,`(opcional)`),ag()(),Tl(528,`p`),cN(529,`Definição da máscara do campo de telefone.`),ag()()(),Tl(530,`tr`,13)(531,`td`,14)(532,`div`,15)(533,`span`,16),cN(534,` type`),Gl(535,`br`),ag()()(),Tl(536,`td`,17)(537,`code`,32),cN(538,`PoModalPasswordRecoveryType`),ag()(),Tl(539,`td`,20)(540,`em`)(541,`strong`),cN(542,`(opcional)`),ag()(),Tl(543,`p`),cN(544,`Enum para especificação do tipo de recuperação de senha `),Tl(545,`a`,33),cN(546,`PoModalPasswordRecoveryType`),ag(),cN(547,`.`),ag(),Tl(548,`blockquote`)(549,`p`),cN(550,`Caso não seja definido valor se assume o padrão `),Tl(551,`code`),cN(552,`PoModalPasswordRecoveryType.Email`),ag(),cN(553,`.`),ag()()()(),Tl(554,`tr`,13)(555,`td`,14)(556,`div`,15)(557,`span`,16),cN(558,` url`),Gl(559,`br`),ag()()(),Tl(560,`td`,17)(561,`code`,18),cN(562,`string`),ag()(),Tl(563,`td`,20)(564,`p`),cN(565,`Endpoint usado pelo template `),Tl(566,`strong`),cN(567,`PoModalPasswordRecovery`),ag(),cN(568,` para requisição do recurso.`),ag(),Tl(569,`blockquote`)(570,`p`),cN(571,`Saiba mais em `),Tl(572,`a`,33),cN(573,`PoModalPasswordRecovery`),ag(),cN(574,`.`),ag()()()()(),Tl(575,`h4`,31)(576,`code`,5),cN(577,`PoPageChangePasswordRequirement`),ag()(),Tl(578,`div`,2)(579,`p`),cN(580,`Interface com a definição dos objetos aceitos pela propriedade `),Tl(581,`code`),cN(582,`p-password-requirements`),ag(),cN(583,`.`),ag()(),Tl(584,`h4`,9),cN(585,`Propriedades`),ag(),Tl(586,`table`,10)(587,`tr`,11)(588,`th`,12),cN(589,`Nome`),ag(),Tl(590,`th`,12),cN(591,`Tipo`),ag(),Tl(592,`th`,12),cN(593,`Descrição`),ag()(),Tl(594,`tr`,13)(595,`td`,14)(596,`div`,15)(597,`span`,16),cN(598,` requirement`),Gl(599,`br`),ag()()(),Tl(600,`td`,17)(601,`code`,18),cN(602,`string`),ag()(),Tl(603,`td`,20)(604,`p`),cN(605,`Requisito.`),ag()()(),Tl(606,`tr`,13)(607,`td`,14)(608,`div`,15)(609,`span`,16),cN(610,` status`),Gl(611,`br`),ag()()(),Tl(612,`td`,17)(613,`code`,22),cN(614,`boolean `),ag(),Tl(615,`code`,23),cN(616,` Function`),ag()(),Tl(617,`td`,20)(618,`p`),cN(619,`Função que deve retornar um booleano para validar um requisito de senha.`),ag(),Tl(620,`p`),cN(621,`Também é possível informar diretamente um valor booleano que representa esta validação.`),ag()()()(),Tl(622,`h4`,31)(623,`code`,5),cN(624,`PoPageChangePassword`),ag()(),Tl(625,`div`,2)(626,`p`),cN(627,`Interface com a definição do objeto gerado pelo formulário do componente `),Tl(628,`code`),cN(629,`po-page-change-password`),ag(),cN(630,`.`),ag()(),Tl(631,`h4`,9),cN(632,`Propriedades`),ag(),Tl(633,`table`,10)(634,`tr`,11)(635,`th`,12),cN(636,`Nome`),ag(),Tl(637,`th`,12),cN(638,`Tipo`),ag(),Tl(639,`th`,12),cN(640,`Descrição`),ag()(),Tl(641,`tr`,13)(642,`td`,14)(643,`div`,15)(644,`span`,16),cN(645,` currentPassword`),Gl(646,`br`),ag()()(),Tl(647,`td`,17)(648,`code`,18),cN(649,`string`),ag()(),Tl(650,`td`,20)(651,`em`)(652,`strong`),cN(653,`(opcional)`),ag()(),Tl(654,`p`),cN(655,`Senha atual`),ag()()(),Tl(656,`tr`,13)(657,`td`,14)(658,`div`,15)(659,`span`,16),cN(660,` newPassword`),Gl(661,`br`),ag()()(),Tl(662,`td`,17)(663,`code`,18),cN(664,`string`),ag()(),Tl(665,`td`,20)(666,`em`)(667,`strong`),cN(668,`(opcional)`),ag()(),Tl(669,`p`),cN(670,`Nova senha`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Xe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Page Change Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,o){i&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-page-change-password-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-page-change-password-basic-view`)(6,`sample-po-page-change-password-labs-view`)(7,`sample-po-page-change-password-modify-view`)(8,`sample-po-page-change-password-create-view`)(9,`sample-po-page-change-password-request-view`),ag()()()),i&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Se,Ee,fe,xe,_e,Me],encapsulation:2,changeDetection:1})}return a})()}];var Te=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(Xe),bL]})}return a})();var zt=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Te]})}return a})();export{zt as DocPoPageChangePasswordModule};