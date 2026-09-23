import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,jn as wp,l as ar,m as vo,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,s as U,sr as Jy,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(r,n){if(r&1){let p=Vx();ql(0,`po-modal-password-recovery`,null,0),Ml(2,`po-button`,1),ht(`p-click`,function(){Qy(p);return Jy(Yx(1).open())}),lg()}},dependencies:[Zt,vo],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Modal Password Recovery Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-modal-password-recovery-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,he,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poDialog=f(e_e);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:U.All},{label:`Email`,value:U.Email},{label:`SMS`,value:U.SMS}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email}submit(l){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty(`sms`)?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(r,n){if(r&1&&Zl(vo,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let p=Vx();Ml(0,`po-modal-password-recovery`,1),ht(`p-code-submit`,function(d){return Qy(p),n.submitCode(d),Jy(n.changeEvent(`p-submit-code`))})(`p-submit`,function(d){return Qy(p),n.submit(d),Jy(n.changeEvent(`p-submit`))}),lg(),Ml(1,`po-button`,2),ht(`p-click`,function(){return n.openPasswordRecoveryModal()}),lg(),ql(2,`po-divider`),Ml(3,`div`,3),ql(4,`po-info`,4)(5,`po-info`,5),lg(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),Mw(`ngModelChange`,function(d){return Qy(p),yN(n.type,d)||(n.type=d),Jy(d)}),lg(),f0(),Ml(11,`po-input`,7),Mw(`ngModelChange`,function(d){return Qy(p),yN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),Jy(d)}),lg(),f0(),Ml(12,`po-input`,8),Mw(`ngModelChange`,function(d){return Qy(p),yN(n.email,d)||(n.email=d),Jy(d)}),lg(),f0(),Ml(13,`po-input`,9),Mw(`ngModelChange`,function(d){return Qy(p),yN(n.phoneMask,d)||(n.phoneMask=d),Jy(d)}),lg(),f0(),Ml(14,`po-radio-group`,10),Mw(`ngModelChange`,function(d){return Qy(p),yN(n.componentsSize,d)||(n.componentsSize=d),Jy(d)}),lg(),f0(),lg(),Ml(15,`div`,3)(16,`po-button`,11),ht(`p-click`,function(){return Qy(p),Yx(8).reset(),Jy(n.restore())}),lg()()()}r&2&&(cw(`p-code-error`,n.codeError)(`p-components-size`,n.componentsSize)(`p-contact-email`,n.email)(`p-phone-mask`,n.phoneMask)(`p-type`,n.type),Up(4),cw(`p-value`,n.submitEvent),Up(),cw(`p-value`,n.event),Up(5),Tw(`ngModel`,n.type),cw(`p-options`,n.typeOptions),p0(),Up(),Tw(`ngModel`,n.invalidCodeMessage),p0(),Up(),Tw(`ngModel`,n.email),p0(),Up(),Tw(`ngModel`,n.phoneMask),p0(),Up(),Tw(`ngModel`,n.componentsSize),cw(`p-options`,n.componentsSizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,q0e,Tbe,kbe,vo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Modal Password Recovery Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-modal-password-recovery
  [p-code-error]="codeError"
  [p-components-size]="componentsSize"
  [p-contact-email]="email"
  [p-phone-mask]="phoneMask"
  [p-type]="type"
  (p-code-submit)="submitCode($event); changeEvent('p-submit-code')"
  (p-submit)="submit($event); changeEvent('p-submit')"
>
</po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="openPasswordRecoveryModal()"> </po-button>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="submitEvent"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

    <po-input
      class="po-md-6"
      name="invalidCodeMessage"
      [(ngModel)]="invalidCodeMessage"
      p-clean
      p-label="Code Error"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="email" [(ngModel)]="email" p-clean p-label="Email" p-maxlength="30" p-required>
    </po-input>

    <po-input class="po-md-6" name="phoneMask" [(ngModel)]="phoneMask" p-clean p-label="Phone Mask" p-required>
    </po-input>

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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';
import {
  PoModalPasswordRecovery,
  PoModalPasswordRecoveryComponent,
  PoModalPasswordRecoveryType
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-labs',
  templateUrl: './sample-po-modal-password-recovery-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  codeError: string;
  componentsSize: string;
  email: string;
  event: string;
  invalidCode: boolean = true;
  invalidCodeMessage: string;
  phoneMask: string;
  submitEvent: string;
  type: PoModalPasswordRecoveryType;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  typeOptions: Array<PoSelectOption> = [
    { label: 'All', value: PoModalPasswordRecoveryType.All },
    { label: 'Email', value: PoModalPasswordRecoveryType.Email },
    { label: 'SMS', value: PoModalPasswordRecoveryType.SMS }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }

  restore() {
    this.codeError = undefined;
    this.componentsSize = 'medium';
    this.email = undefined;
    this.event = undefined;
    this.phoneMask = undefined;
    this.submitEvent = undefined;
    this.type = PoModalPasswordRecoveryType.Email;
  }

  submit(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Change Password Requested By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.advanceModal(event)
    });
  }

  submitCode(event: PoModalPasswordRecovery) {
    this.poDialog.alert({
      title: 'Emitted SMS Code By User',
      message: \`Submitted Object: \${JSON.stringify(event)}\`,
      ok: () => this.resendCode(event)
    });
  }

  private advanceModal(event: PoModalPasswordRecovery) {
    event.hasOwnProperty('sms') ? this.openSmsCode(event) : this.openConfirmation(event);
  }

  private openConfirmation(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openConfirmation();
  }

  private openSmsCode(event: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);
    this.poModalPasswordRecovery.openSmsCode();
  }

  private resendCode(eventevent: PoModalPasswordRecovery) {
    this.submitEvent = JSON.stringify(event);

    if (this.invalidCode && this.invalidCodeMessage) {
      this.invalidCode = !this.invalidCode;
      this.codeError = this.invalidCodeMessage;

      this.poModalPasswordRecovery.openSmsCode();
    } else {
      this.codeError = undefined;
      this.invalidCode = !this.invalidCode;
      this.poModalPasswordRecovery.completed();
    }
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-modal-password-recovery-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(r,n){if(r&1&&Zl(vo,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(r,n){r&1&&(Ml(0,`po-container`)(1,`div`,0),ql(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),lg()(),Ml(5,`po-container`),ql(6,`img`,4),Ml(7,`div`,0)(8,`p`,5),mN(9,`Oops!`),lg(),Ml(10,`p`,6),mN(11,` Password Recovery Requested by user `),lg(),Ml(12,`po-button`,7),ht(`p-click`,function(){return n.openPasswordRecoveryModal()}),lg()()(),ql(13,`po-modal-password-recovery`,8)),r&2&&(Up(13),cw(`p-type`,n.type)(`p-url-recovery`,n.urlRecovery))},dependencies:[Zt,wp,kbe,vo],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Modal Password Recovery Request`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Data Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Data Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Data SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-container>
  <img class="po-page-blocked-user-image po-mb-5 po-mt-5" src="./assets/images/expired.svg" />

  <div class="po-row">
    <p class="po-font-title po-text-center po-md-12 po-mb-2">Oops!</p>
    <p class="po-font-text po-text-center po-md-12 po-mb-5 po-text-color-neutral-dark-40">
      Password Recovery Requested by user
    </p>
    <po-button
      class="po-mb-5 po-offset-md-3 po-md-6 po-offset-lg-4 po-lg-4 po-offset-xl-4 po-xl-4"
      p-label="Forgot your password?"
      p-kind="primary"
      (p-click)="openPasswordRecoveryModal()"
    >
    </po-button>
  </div>
</po-container>

<po-modal-password-recovery [p-type]="type" [p-url-recovery]="urlRecovery"> </po-modal-password-recovery>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalPasswordRecoveryComponent, PoModalPasswordRecoveryType } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-modal-password-recovery-request',
  templateUrl: './sample-po-modal-password-recovery-request.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryRequestComponent {
  @ViewChild(PoModalPasswordRecoveryComponent) poModalPasswordRecovery: PoModalPasswordRecoveryComponent;

  type: PoModalPasswordRecoveryType = PoModalPasswordRecoveryType.All;
  urlRecovery: string = 'https://po-sample-api.onrender.com/v1/users';

  openPasswordRecoveryModal() {
    this.poModalPasswordRecovery.open();
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-modal-password-recovery-request`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,xe,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do template do po-modal-password-recovery.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoModalPasswordRecoveryComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-modal-password-recovery`),lg(),mN(17,` é utilizado como template para solicitação de troca de senha.`),lg(),Ml(18,`p`),mN(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),lg(),Ml(20,`ul`)(21,`li`),mN(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),lg(),Ml(23,`li`),mN(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),lg(),Ml(25,`li`),mN(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),lg()(),Ml(27,`p`),mN(28,`A propriedade `),Ml(29,`code`),mN(30,`p-url-recovery`),lg(),mN(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Ml(32,`em`),mN(33,`propriedades`),lg(),mN(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),lg(),Ml(35,`p`),mN(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Ml(37,`code`),mN(38,`p-code-error`),lg(),mN(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Ml(40,`code`),mN(41,`p-code-submit`),lg(),mN(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),lg(),Ml(43,`blockquote`)(44,`p`),mN(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),lg()(),Ml(46,`p`),mN(47,`A modal de confirmação contém uma ação de reenvio e o evento `),Ml(48,`code`),mN(49,`p-submit`),lg(),mN(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),lg(),Ml(51,`blockquote`)(52,`p`),mN(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),lg()(),Ml(54,`blockquote`)(55,`p`),mN(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),Ml(57,`em`),mN(58,`browser`),lg(),mN(59,` (pt, en e es)`),lg()(),Ml(60,`p`),mN(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ml(62,`em`),mN(63,`assets`),lg(),mN(64,` no arquivo `),Ml(65,`strong`),mN(66,`angular.json`),lg(),mN(67,` da aplicação na seguinte ordem:`),lg(),Ml(68,`pre`)(69,`code`),mN(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),lg()()(),Ml(71,`div`,6)(72,`h4`,7),mN(73,`Seletor`),lg(),Ml(74,`pre`,8),mN(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),lg()(),Ml(76,`h4`,9),mN(77,`Propriedades`),lg(),Ml(78,`table`,10)(79,`tr`,11)(80,`th`,12),mN(81,`Nome`),lg(),Ml(82,`th`,12),mN(83,`Tipo`),lg(),Ml(84,`th`,12),mN(85,`Padrão`),lg(),Ml(86,`th`,12),mN(87,`Descrição`),lg()(),Ml(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),mN(92,` p-code-error`),ql(93,`br`),lg()()(),Ml(94,`td`,17)(95,`code`,18),mN(96,`string`),lg()(),Ml(97,`td`,19),mN(98,`-`),lg(),Ml(99,`td`,20)(100,`em`)(101,`strong`),mN(102,`(opcional)`),lg()(),Ml(103,`p`),mN(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),lg()()(),Ml(105,`tr`,13)(106,`td`,14)(107,`div`,21)(108,`span`,22),mN(109,` (p-code-submit)`),ql(110,`br`),lg()()(),Ml(111,`td`,17)(112,`code`,23),mN(113,`EventEmitter`),lg()(),Ml(114,`td`,19),mN(115,`-`),lg(),Ml(116,`td`,20)(117,`em`)(118,`strong`),mN(119,`(opcional)`),lg()(),Ml(120,`p`),mN(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),lg(),Ml(122,`blockquote`)(123,`p`),mN(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ml(125,`code`),mN(126,`p-url-recovery`),lg(),mN(127,`.`),lg()()()(),Ml(128,`tr`,13)(129,`td`,14)(130,`div`,15)(131,`span`,16),mN(132,` p-components-size`),ql(133,`br`),lg()()(),Ml(134,`td`,17)(135,`code`,18),mN(136,`string`),lg()(),Ml(137,`td`,19)(138,`p`)(139,`code`),mN(140,`medium`),lg()()(),Ml(141,`td`,20)(142,`em`)(143,`strong`),mN(144,`(opcional)`),lg()(),Ml(145,`p`),mN(146,`Define o tamanho dos componentes de formulário no modal:`),lg(),Ml(147,`ul`)(148,`li`)(149,`code`),mN(150,`small`),lg(),mN(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(152,`li`)(153,`code`),mN(154,`medium`),lg(),mN(155,`: aplica a medida medium de cada componente.`),lg()(),Ml(156,`blockquote`)(157,`p`),mN(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(159,`code`),mN(160,`medium`),lg(),mN(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(162,`a`,24),mN(163,`po-theme`),lg(),mN(164,`.`),lg()()()(),Ml(165,`tr`,13)(166,`td`,14)(167,`div`,15)(168,`span`,16),mN(169,` p-contact-email`),ql(170,`br`),lg()()(),Ml(171,`td`,17)(172,`code`,18),mN(173,`string`),lg()(),Ml(174,`td`,19),mN(175,`-`),lg(),Ml(176,`td`,20)(177,`em`)(178,`strong`),mN(179,`(opcional)`),lg()(),Ml(180,`p`),mN(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),lg()()(),Ml(182,`tr`,13)(183,`td`,14)(184,`div`,15)(185,`span`,16),mN(186,` p-phone-mask`),ql(187,`br`),lg()()(),Ml(188,`td`,17)(189,`code`,18),mN(190,`string`),lg()(),Ml(191,`td`,19)(192,`p`)(193,`code`),mN(194,`(99) 99999-9999`),lg()()(),Ml(195,`td`,20)(196,`em`)(197,`strong`),mN(198,`(opcional)`),lg()(),Ml(199,`p`),mN(200,`Definição da mascara do campo de telefone.`),lg()()(),Ml(201,`tr`,13)(202,`td`,14)(203,`div`,21)(204,`span`,22),mN(205,` (p-submit)`),ql(206,`br`),lg()()(),Ml(207,`td`,17)(208,`code`,23),mN(209,`EventEmitter`),lg()(),Ml(210,`td`,19),mN(211,`-`),lg(),Ml(212,`td`,20)(213,`em`)(214,`strong`),mN(215,`(opcional)`),lg()(),Ml(216,`p`),mN(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),lg(),Ml(218,`blockquote`)(219,`p`),mN(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ml(221,`code`),mN(222,`p-url-recovery`),lg(),mN(223,`.`),lg()()()(),Ml(224,`tr`,13)(225,`td`,14)(226,`div`,15)(227,`span`,16),mN(228,` p-type`),ql(229,`br`),lg()()(),Ml(230,`td`,17)(231,`code`,25),mN(232,`PoModalPasswordRecoveryType`),lg()(),Ml(233,`td`,19)(234,`p`)(235,`code`),mN(236,`PoModalPasswordRecoveryType.Email`),lg()()(),Ml(237,`td`,20)(238,`em`)(239,`strong`),mN(240,`(opcional)`),lg()(),Ml(241,`p`),mN(242,`Define o tipo de recuperação de senha que será exibido.`),lg()()(),Ml(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),mN(247,` p-url-recovery`),ql(248,`br`),lg()()(),Ml(249,`td`,17)(250,`code`,18),mN(251,`string`),lg()(),Ml(252,`td`,19),mN(253,`-`),lg(),Ml(254,`td`,20)(255,`em`)(256,`strong`),mN(257,`(opcional)`),lg()(),Ml(258,`p`),mN(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Ml(260,`code`),mN(261,`p-submit`),lg(),mN(262,` e `),Ml(263,`code`),mN(264,`p-submit-code`),lg(),mN(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),lg(),Ml(266,`h3`),mN(267,`Processos`),lg(),Ml(268,`p`),mN(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),Ml(270,`strong`),mN(271,`enviar`),lg(),mN(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Ml(273,`code`),mN(274,`POST`),lg(),mN(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),lg(),Ml(276,`pre`)(277,`code`),mN(278,`body {
 email: email,
 retry?: retry
}
`),lg()(),Ml(279,`h4`),mN(280,`Recuperação por email`),lg(),Ml(281,`p`),mN(282,`Para a recuperação de senha por `),Ml(283,`strong`),mN(284,`email`),lg(),mN(285,`, o código de resposta HTTP de status esperado é `),Ml(286,`code`),mN(287,`204`),lg(),mN(288,`.`),lg(),Ml(289,`p`),mN(290,`Em caso de `),Ml(291,`strong`),mN(292,`sucesso`),lg(),mN(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),lg(),Ml(294,`blockquote`)(295,`p`),mN(296,`A ação `),Ml(297,`strong`),mN(298,`Reenviar`),lg(),mN(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Ml(300,`strong`),mN(301,`retry`),lg(),mN(302,`.`),lg()(),Ml(303,`p`)(304,`em`),mN(305,`Processo finalizado.`),lg()(),Ml(306,`h4`),mN(307,`Recuperação por SMS`),lg(),Ml(308,`p`),mN(309,`Se a opção de recuperação for por `),Ml(310,`strong`),mN(311,`SMS`),lg(),mN(312,`, o código de status de sucesso deve ser `),Ml(313,`code`),mN(314,`200`),lg(),mN(315,`.
Em caso de `),Ml(316,`strong`),mN(317,`sucesso`),lg(),mN(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),lg(),Ml(319,`pre`)(320,`code`),mN(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),lg()(),Ml(322,`ul`)(323,`li`),mN(324,`O `),Ml(325,`strong`),mN(326,`hash`),lg(),mN(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),lg(),Ml(328,`li`)(329,`strong`),mN(330,`urlValidationCode`),lg(),mN(331,` é a url usada para validação do código enviado por SMS.`),lg()(),Ml(332,`blockquote`)(333,`p`),mN(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),Ml(335,`code`),mN(336,`<p-url-recovery>/validation`),lg(),mN(337,`.`),lg()(),Ml(338,`h4`),mN(339,`Validação do código SMS`),lg(),Ml(340,`p`),mN(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),Ml(342,`strong`),mN(343,`continuar`),lg(),mN(344,`, o componente fará uma requisição `),Ml(345,`code`),mN(346,`POST`),lg(),mN(347,` contendo:`),lg(),Ml(348,`pre`)(349,`code`),mN(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),lg()(),Ml(351,`p`),mN(352,`O código de resposta HTTP de status esperado é `),Ml(353,`code`),mN(354,`200`),lg(),mN(355,`.`),lg(),Ml(356,`p`),mN(357,`Em caso de `),Ml(358,`strong`),mN(359,`erro`),lg(),mN(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),lg(),Ml(361,`blockquote`)(362,`p`),mN(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),Ml(364,`code`),mN(365,`p-code-error`),lg(),mN(366,` conforme retorno abaixo:`),lg()(),Ml(367,`pre`)(368,`code`),mN(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),lg()(),Ml(370,`p`),mN(371,`Em caso de `),Ml(372,`strong`),mN(373,`sucesso`),lg(),mN(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),lg(),Ml(375,`pre`)(376,`code`),mN(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),lg()(),Ml(378,`ul`)(379,`li`)(380,`strong`),mN(381,`token`),lg(),mN(382,`: Token de alteração de senha;`),lg(),Ml(383,`li`)(384,`strong`),mN(385,`urlChangePassword`),lg(),mN(386,`: url para o formulário de alteração de senha.`),lg()(),Ml(387,`p`),mN(388,`O componente está configurado para redirecionar para a url estabelecida em `),Ml(389,`code`),mN(390,`urlChangePassword`),lg(),mN(391,`.`),lg(),Ml(392,`blockquote`)(393,`p`),mN(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Ml(395,`code`),mN(396,`<p-url-recovery>/changePassword?token=<token>`),lg(),mN(397,`.`),lg()(),Ml(398,`p`)(399,`em`),mN(400,`Processo finalizado.`),lg()()()()(),Ml(401,`h3`,9),mN(402,`Métodos`),lg(),Ml(403,`table`,26)(404,`tr`,13)(405,`th`,27)(406,`div`,15)(407,`h4`)(408,`span`,16),mN(409,` completed `),lg()()()()(),Ml(410,`tr`,20)(411,`td`,20)(412,`p`),mN(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),lg(),Ml(414,`blockquote`)(415,`p`),mN(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),lg()()()()(),ql(417,`br`),Ml(418,`table`,26)(419,`tr`,13)(420,`th`,27)(421,`div`,15)(422,`h4`)(423,`span`,16),mN(424,` open `),lg()()()()(),Ml(425,`tr`,20)(426,`td`,20)(427,`p`),mN(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),lg()()()(),ql(429,`br`),Ml(430,`table`,26)(431,`tr`,13)(432,`th`,27)(433,`div`,15)(434,`h4`)(435,`span`,16),mN(436,` openConfirmation `),lg()()()()(),Ml(437,`tr`,20)(438,`td`,20)(439,`p`),mN(440,`Abre a modal de confirmação de envio de email.`),lg()()()(),ql(441,`br`),Ml(442,`table`,26)(443,`tr`,13)(444,`th`,27)(445,`div`,15)(446,`h4`)(447,`span`,16),mN(448,` openSmsCode `),lg()()()()(),Ml(449,`tr`,20)(450,`td`,20)(451,`p`),mN(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),lg()()()(),ql(453,`br`),Ml(454,`h3`),mN(455,`Interfaces`),lg(),Ml(456,`h4`,28)(457,`code`,5),mN(458,`PoModalPasswordRecovery`),lg()(),Ml(459,`div`,2)(460,`p`),mN(461,`Interface com a definição do objeto gerado pelo formulário do componente `),Ml(462,`code`),mN(463,`po-modal-password-recovery`),lg(),mN(464,`.`),lg()(),Ml(465,`h4`,9),mN(466,`Propriedades`),lg(),Ml(467,`table`,10)(468,`tr`,11)(469,`th`,12),mN(470,`Nome`),lg(),Ml(471,`th`,12),mN(472,`Tipo`),lg(),Ml(473,`th`,12),mN(474,`Descrição`),lg()(),Ml(475,`tr`,13)(476,`td`,14)(477,`div`,15)(478,`span`,16),mN(479,` code`),ql(480,`br`),lg()()(),Ml(481,`td`,17)(482,`code`,18),mN(483,`string`),lg()(),Ml(484,`td`,20)(485,`em`)(486,`strong`),mN(487,`(opcional)`),lg()(),Ml(488,`p`),mN(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),lg()()(),Ml(490,`tr`,13)(491,`td`,14)(492,`div`,15)(493,`span`,16),mN(494,` email`),ql(495,`br`),lg()()(),Ml(496,`td`,17)(497,`code`,18),mN(498,`string`),lg()(),Ml(499,`td`,20)(500,`em`)(501,`strong`),mN(502,`(opcional)`),lg()(),Ml(503,`p`),mN(504,`Valor contendo o email enviado pelo usuário.`),lg()()(),Ml(505,`tr`,13)(506,`td`,14)(507,`div`,15)(508,`span`,16),mN(509,` hash`),ql(510,`br`),lg()()(),Ml(511,`td`,17)(512,`code`,18),mN(513,`string`),lg()(),Ml(514,`td`,20)(515,`em`)(516,`strong`),mN(517,`(opcional)`),lg()(),Ml(518,`p`),mN(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),lg()()(),Ml(520,`tr`,13)(521,`td`,14)(522,`div`,15)(523,`span`,16),mN(524,` retry`),ql(525,`br`),lg()()(),Ml(526,`td`,17)(527,`code`,29),mN(528,`number`),lg()(),Ml(529,`td`,20)(530,`em`)(531,`strong`),mN(532,`(opcional)`),lg()(),Ml(533,`p`),mN(534,`Número de tentativas de reenvio.`),lg()()(),Ml(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),mN(539,` sms`),ql(540,`br`),lg()()(),Ml(541,`td`,17)(542,`code`,18),mN(543,`string`),lg()(),Ml(544,`td`,20)(545,`em`)(546,`strong`),mN(547,`(opcional)`),lg()(),Ml(548,`p`),mN(549,`Valor contendo o número de telefone enviado pelo usuário.`),lg()()(),Ml(550,`tr`,13)(551,`td`,14)(552,`div`,15)(553,`span`,16),mN(554,` token`),ql(555,`br`),lg()()(),Ml(556,`td`,17)(557,`code`,18),mN(558,`string`),lg()(),Ml(559,`td`,20)(560,`em`)(561,`strong`),mN(562,`(opcional)`),lg()(),Ml(563,`p`),mN(564,`Token de alteração de senha`),lg()()(),Ml(565,`tr`,13)(566,`td`,14)(567,`div`,15)(568,`span`,16),mN(569,` urlChangePassword`),ql(570,`br`),lg()()(),Ml(571,`td`,17)(572,`code`,18),mN(573,`string`),lg()(),Ml(574,`td`,20)(575,`em`)(576,`strong`),mN(577,`(opcional)`),lg()(),Ml(578,`p`),mN(579,`URL para o formulário de alteração de senha`),lg()()(),Ml(580,`tr`,13)(581,`td`,14)(582,`div`,15)(583,`span`,16),mN(584,` urlValidationCode`),ql(585,`br`),lg()()(),Ml(586,`td`,17)(587,`code`,18),mN(588,`string`),lg()(),Ml(589,`td`,20)(590,`em`)(591,`strong`),mN(592,`(opcional)`),lg()(),Ml(593,`p`),mN(594,`URL usada para validação do código enviado por SMS`),lg()()()(),Ml(595,`h3`),mN(596,`Enums`),lg(),Ml(597,`h4`,4)(598,`code`,5),mN(599,`PoModalPasswordRecoveryType`),lg()(),Ml(600,`div`,2)(601,`p`)(602,`em`),mN(603,`Enum`),lg(),mN(604,` para especificação do tipo de recuperação de senha.`),lg()(),Ml(605,`h4`,9),mN(606,`Propriedades`),lg(),Ml(607,`table`,10)(608,`tr`,11)(609,`th`,12),mN(610,`Nome`),lg(),Ml(611,`th`,12),mN(612,`Descrição`),lg()(),Ml(613,`tr`,13)(614,`td`,14)(615,`div`,15)(616,`span`,16),mN(617,` All`),ql(618,`br`),lg()()(),Ml(619,`td`,20)(620,`p`),mN(621,`Possibilita ao usuário optar por envio via email ou SMS`),lg()()(),Ml(622,`tr`,13)(623,`td`,14)(624,`div`,15)(625,`span`,16),mN(626,` Email`),ql(627,`br`),lg()()(),Ml(628,`td`,20)(629,`p`),mN(630,`Definição para recuperação apenas por email`),lg()()(),Ml(631,`tr`,13)(632,`td`,14)(633,`div`,15)(634,`span`,16),mN(635,` SMS`),ql(636,`br`),lg()()(),Ml(637,`td`,20)(638,`p`),mN(639,`Definição para recuperação apenas por SMS`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal Password Recovery`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-modal-password-recovery-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-modal-password-recovery-basic-view`)(6,`sample-po-modal-password-recovery-labs-view`)(7,`sample-po-modal-password-recovery-request-view`),lg()()()),r&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,ce,Ee,ve],encapsulation:2,changeDetection:1})}return i})()}];var ge=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[NL.forChild(_e),NL]})}return i})();var rt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,ge]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};