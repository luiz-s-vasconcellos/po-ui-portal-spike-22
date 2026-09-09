import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,la as uo,lr as Gl,m as vo,on as mCe,pa as w,r as Ga,rr as Ew,s as U,sa as ue$1,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(r,n){if(r&1){let p=Ax();Gl(0,`po-modal-password-recovery`,null,0),Tl(2,`po-button`,1),ht(`p-click`,function(){Ky(p);return Xy(Bx(1).open())}),ag()}},dependencies:[Zt,vo],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Modal Password Recovery Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-modal-password-recovery-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,he,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poDialog=f(W0e);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:U.All},{label:`Email`,value:U.Email},{label:`SMS`,value:U.SMS}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email}submit(l){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty(`sms`)?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(r,n){if(r&1&&Yl(vo,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let p=Ax();Tl(0,`po-modal-password-recovery`,1),ht(`p-code-submit`,function(d){return Ky(p),n.submitCode(d),Xy(n.changeEvent(`p-submit-code`))})(`p-submit`,function(d){return Ky(p),n.submit(d),Xy(n.changeEvent(`p-submit`))}),ag(),Tl(1,`po-button`,2),ht(`p-click`,function(){return n.openPasswordRecoveryModal()}),ag(),Gl(2,`po-divider`),Tl(3,`div`,3),Gl(4,`po-info`,4)(5,`po-info`,5),ag(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),ww(`ngModelChange`,function(d){return Ky(p),uN(n.type,d)||(n.type=d),Xy(d)}),ag(),a0(),Tl(11,`po-input`,7),ww(`ngModelChange`,function(d){return Ky(p),uN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),Xy(d)}),ag(),a0(),Tl(12,`po-input`,8),ww(`ngModelChange`,function(d){return Ky(p),uN(n.email,d)||(n.email=d),Xy(d)}),ag(),a0(),Tl(13,`po-input`,9),ww(`ngModelChange`,function(d){return Ky(p),uN(n.phoneMask,d)||(n.phoneMask=d),Xy(d)}),ag(),a0(),Tl(14,`po-radio-group`,10),ww(`ngModelChange`,function(d){return Ky(p),uN(n.componentsSize,d)||(n.componentsSize=d),Xy(d)}),ag(),a0(),ag(),Tl(15,`div`,3)(16,`po-button`,11),ht(`p-click`,function(){return Ky(p),Bx(8).reset(),Xy(n.restore())}),ag()()()}r&2&&(nw(`p-code-error`,n.codeError)(`p-components-size`,n.componentsSize)(`p-contact-email`,n.email)(`p-phone-mask`,n.phoneMask)(`p-type`,n.type),jp(4),nw(`p-value`,n.submitEvent),jp(),nw(`p-value`,n.event),jp(5),Ew(`ngModel`,n.type),nw(`p-options`,n.typeOptions),l0(),jp(),Ew(`ngModel`,n.invalidCodeMessage),l0(),jp(),Ew(`ngModel`,n.email),l0(),jp(),Ew(`ngModel`,n.phoneMask),l0(),jp(),Ew(`ngModel`,n.componentsSize),nw(`p-options`,n.componentsSizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,L0e,fbe,ybe,vo],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Modal Password Recovery Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-modal-password-recovery
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-modal-password-recovery-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(r,n){if(r&1&&Yl(vo,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(r,n){r&1&&(Tl(0,`po-container`)(1,`div`,0),Gl(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),ag()(),Tl(5,`po-container`),Gl(6,`img`,4),Tl(7,`div`,0)(8,`p`,5),cN(9,`Oops!`),ag(),Tl(10,`p`,6),cN(11,` Password Recovery Requested by user `),ag(),Tl(12,`po-button`,7),ht(`p-click`,function(){return n.openPasswordRecoveryModal()}),ag()()(),Gl(13,`po-modal-password-recovery`,8)),r&2&&(jp(13),nw(`p-type`,n.type)(`p-url-recovery`,n.urlRecovery))},dependencies:[Zt,xp,ybe,vo],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Modal Password Recovery Request`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-modal-password-recovery-request`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,xe,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do template do po-modal-password-recovery.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoModalPasswordRecoveryComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-modal-password-recovery`),ag(),cN(17,` é utilizado como template para solicitação de troca de senha.`),ag(),Tl(18,`p`),cN(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),ag(),Tl(20,`ul`)(21,`li`),cN(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),ag(),Tl(23,`li`),cN(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),ag(),Tl(25,`li`),cN(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),ag()(),Tl(27,`p`),cN(28,`A propriedade `),Tl(29,`code`),cN(30,`p-url-recovery`),ag(),cN(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Tl(32,`em`),cN(33,`propriedades`),ag(),cN(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ag(),Tl(35,`p`),cN(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Tl(37,`code`),cN(38,`p-code-error`),ag(),cN(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Tl(40,`code`),cN(41,`p-code-submit`),ag(),cN(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),ag(),Tl(43,`blockquote`)(44,`p`),cN(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),ag()(),Tl(46,`p`),cN(47,`A modal de confirmação contém uma ação de reenvio e o evento `),Tl(48,`code`),cN(49,`p-submit`),ag(),cN(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),ag(),Tl(51,`blockquote`)(52,`p`),cN(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),ag()(),Tl(54,`blockquote`)(55,`p`),cN(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),Tl(57,`em`),cN(58,`browser`),ag(),cN(59,` (pt, en e es)`),ag()(),Tl(60,`p`),cN(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(62,`em`),cN(63,`assets`),ag(),cN(64,` no arquivo `),Tl(65,`strong`),cN(66,`angular.json`),ag(),cN(67,` da aplicação na seguinte ordem:`),ag(),Tl(68,`pre`)(69,`code`),cN(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ag()()(),Tl(71,`div`,6)(72,`h4`,7),cN(73,`Seletor`),ag(),Tl(74,`pre`,8),cN(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),ag()(),Tl(76,`h4`,9),cN(77,`Propriedades`),ag(),Tl(78,`table`,10)(79,`tr`,11)(80,`th`,12),cN(81,`Nome`),ag(),Tl(82,`th`,12),cN(83,`Tipo`),ag(),Tl(84,`th`,12),cN(85,`Padrão`),ag(),Tl(86,`th`,12),cN(87,`Descrição`),ag()(),Tl(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),cN(92,` p-code-error`),Gl(93,`br`),ag()()(),Tl(94,`td`,17)(95,`code`,18),cN(96,`string`),ag()(),Tl(97,`td`,19),cN(98,`-`),ag(),Tl(99,`td`,20)(100,`em`)(101,`strong`),cN(102,`(opcional)`),ag()(),Tl(103,`p`),cN(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),ag()()(),Tl(105,`tr`,13)(106,`td`,14)(107,`div`,21)(108,`span`,22),cN(109,` (p-code-submit)`),Gl(110,`br`),ag()()(),Tl(111,`td`,17)(112,`code`,23),cN(113,`EventEmitter`),ag()(),Tl(114,`td`,19),cN(115,`-`),ag(),Tl(116,`td`,20)(117,`em`)(118,`strong`),cN(119,`(opcional)`),ag()(),Tl(120,`p`),cN(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),ag(),Tl(122,`blockquote`)(123,`p`),cN(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),Tl(125,`code`),cN(126,`p-url-recovery`),ag(),cN(127,`.`),ag()()()(),Tl(128,`tr`,13)(129,`td`,14)(130,`div`,15)(131,`span`,16),cN(132,` p-components-size`),Gl(133,`br`),ag()()(),Tl(134,`td`,17)(135,`code`,18),cN(136,`string`),ag()(),Tl(137,`td`,19)(138,`p`)(139,`code`),cN(140,`medium`),ag()()(),Tl(141,`td`,20)(142,`em`)(143,`strong`),cN(144,`(opcional)`),ag()(),Tl(145,`p`),cN(146,`Define o tamanho dos componentes de formulário no modal:`),ag(),Tl(147,`ul`)(148,`li`)(149,`code`),cN(150,`small`),ag(),cN(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(152,`li`)(153,`code`),cN(154,`medium`),ag(),cN(155,`: aplica a medida medium de cada componente.`),ag()(),Tl(156,`blockquote`)(157,`p`),cN(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(159,`code`),cN(160,`medium`),ag(),cN(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(162,`a`,24),cN(163,`po-theme`),ag(),cN(164,`.`),ag()()()(),Tl(165,`tr`,13)(166,`td`,14)(167,`div`,15)(168,`span`,16),cN(169,` p-contact-email`),Gl(170,`br`),ag()()(),Tl(171,`td`,17)(172,`code`,18),cN(173,`string`),ag()(),Tl(174,`td`,19),cN(175,`-`),ag(),Tl(176,`td`,20)(177,`em`)(178,`strong`),cN(179,`(opcional)`),ag()(),Tl(180,`p`),cN(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),ag()()(),Tl(182,`tr`,13)(183,`td`,14)(184,`div`,15)(185,`span`,16),cN(186,` p-phone-mask`),Gl(187,`br`),ag()()(),Tl(188,`td`,17)(189,`code`,18),cN(190,`string`),ag()(),Tl(191,`td`,19)(192,`p`)(193,`code`),cN(194,`(99) 99999-9999`),ag()()(),Tl(195,`td`,20)(196,`em`)(197,`strong`),cN(198,`(opcional)`),ag()(),Tl(199,`p`),cN(200,`Definição da mascara do campo de telefone.`),ag()()(),Tl(201,`tr`,13)(202,`td`,14)(203,`div`,21)(204,`span`,22),cN(205,` (p-submit)`),Gl(206,`br`),ag()()(),Tl(207,`td`,17)(208,`code`,23),cN(209,`EventEmitter`),ag()(),Tl(210,`td`,19),cN(211,`-`),ag(),Tl(212,`td`,20)(213,`em`)(214,`strong`),cN(215,`(opcional)`),ag()(),Tl(216,`p`),cN(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),ag(),Tl(218,`blockquote`)(219,`p`),cN(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),Tl(221,`code`),cN(222,`p-url-recovery`),ag(),cN(223,`.`),ag()()()(),Tl(224,`tr`,13)(225,`td`,14)(226,`div`,15)(227,`span`,16),cN(228,` p-type`),Gl(229,`br`),ag()()(),Tl(230,`td`,17)(231,`code`,25),cN(232,`PoModalPasswordRecoveryType`),ag()(),Tl(233,`td`,19)(234,`p`)(235,`code`),cN(236,`PoModalPasswordRecoveryType.Email`),ag()()(),Tl(237,`td`,20)(238,`em`)(239,`strong`),cN(240,`(opcional)`),ag()(),Tl(241,`p`),cN(242,`Define o tipo de recuperação de senha que será exibido.`),ag()()(),Tl(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),cN(247,` p-url-recovery`),Gl(248,`br`),ag()()(),Tl(249,`td`,17)(250,`code`,18),cN(251,`string`),ag()(),Tl(252,`td`,19),cN(253,`-`),ag(),Tl(254,`td`,20)(255,`em`)(256,`strong`),cN(257,`(opcional)`),ag()(),Tl(258,`p`),cN(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Tl(260,`code`),cN(261,`p-submit`),ag(),cN(262,` e `),Tl(263,`code`),cN(264,`p-submit-code`),ag(),cN(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),ag(),Tl(266,`h3`),cN(267,`Processos`),ag(),Tl(268,`p`),cN(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),Tl(270,`strong`),cN(271,`enviar`),ag(),cN(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Tl(273,`code`),cN(274,`POST`),ag(),cN(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),ag(),Tl(276,`pre`)(277,`code`),cN(278,`body {
 email: email,
 retry?: retry
}
`),ag()(),Tl(279,`h4`),cN(280,`Recuperação por email`),ag(),Tl(281,`p`),cN(282,`Para a recuperação de senha por `),Tl(283,`strong`),cN(284,`email`),ag(),cN(285,`, o código de resposta HTTP de status esperado é `),Tl(286,`code`),cN(287,`204`),ag(),cN(288,`.`),ag(),Tl(289,`p`),cN(290,`Em caso de `),Tl(291,`strong`),cN(292,`sucesso`),ag(),cN(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),ag(),Tl(294,`blockquote`)(295,`p`),cN(296,`A ação `),Tl(297,`strong`),cN(298,`Reenviar`),ag(),cN(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Tl(300,`strong`),cN(301,`retry`),ag(),cN(302,`.`),ag()(),Tl(303,`p`)(304,`em`),cN(305,`Processo finalizado.`),ag()(),Tl(306,`h4`),cN(307,`Recuperação por SMS`),ag(),Tl(308,`p`),cN(309,`Se a opção de recuperação for por `),Tl(310,`strong`),cN(311,`SMS`),ag(),cN(312,`, o código de status de sucesso deve ser `),Tl(313,`code`),cN(314,`200`),ag(),cN(315,`.
Em caso de `),Tl(316,`strong`),cN(317,`sucesso`),ag(),cN(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),ag(),Tl(319,`pre`)(320,`code`),cN(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),ag()(),Tl(322,`ul`)(323,`li`),cN(324,`O `),Tl(325,`strong`),cN(326,`hash`),ag(),cN(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),ag(),Tl(328,`li`)(329,`strong`),cN(330,`urlValidationCode`),ag(),cN(331,` é a url usada para validação do código enviado por SMS.`),ag()(),Tl(332,`blockquote`)(333,`p`),cN(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),Tl(335,`code`),cN(336,`<p-url-recovery>/validation`),ag(),cN(337,`.`),ag()(),Tl(338,`h4`),cN(339,`Validação do código SMS`),ag(),Tl(340,`p`),cN(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),Tl(342,`strong`),cN(343,`continuar`),ag(),cN(344,`, o componente fará uma requisição `),Tl(345,`code`),cN(346,`POST`),ag(),cN(347,` contendo:`),ag(),Tl(348,`pre`)(349,`code`),cN(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),ag()(),Tl(351,`p`),cN(352,`O código de resposta HTTP de status esperado é `),Tl(353,`code`),cN(354,`200`),ag(),cN(355,`.`),ag(),Tl(356,`p`),cN(357,`Em caso de `),Tl(358,`strong`),cN(359,`erro`),ag(),cN(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),ag(),Tl(361,`blockquote`)(362,`p`),cN(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),Tl(364,`code`),cN(365,`p-code-error`),ag(),cN(366,` conforme retorno abaixo:`),ag()(),Tl(367,`pre`)(368,`code`),cN(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),ag()(),Tl(370,`p`),cN(371,`Em caso de `),Tl(372,`strong`),cN(373,`sucesso`),ag(),cN(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),ag(),Tl(375,`pre`)(376,`code`),cN(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),ag()(),Tl(378,`ul`)(379,`li`)(380,`strong`),cN(381,`token`),ag(),cN(382,`: Token de alteração de senha;`),ag(),Tl(383,`li`)(384,`strong`),cN(385,`urlChangePassword`),ag(),cN(386,`: url para o formulário de alteração de senha.`),ag()(),Tl(387,`p`),cN(388,`O componente está configurado para redirecionar para a url estabelecida em `),Tl(389,`code`),cN(390,`urlChangePassword`),ag(),cN(391,`.`),ag(),Tl(392,`blockquote`)(393,`p`),cN(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Tl(395,`code`),cN(396,`<p-url-recovery>/changePassword?token=<token>`),ag(),cN(397,`.`),ag()(),Tl(398,`p`)(399,`em`),cN(400,`Processo finalizado.`),ag()()()()(),Tl(401,`h3`,9),cN(402,`Métodos`),ag(),Tl(403,`table`,26)(404,`tr`,13)(405,`th`,27)(406,`div`,15)(407,`h4`)(408,`span`,16),cN(409,` completed `),ag()()()()(),Tl(410,`tr`,20)(411,`td`,20)(412,`p`),cN(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),ag(),Tl(414,`blockquote`)(415,`p`),cN(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),ag()()()()(),Gl(417,`br`),Tl(418,`table`,26)(419,`tr`,13)(420,`th`,27)(421,`div`,15)(422,`h4`)(423,`span`,16),cN(424,` open `),ag()()()()(),Tl(425,`tr`,20)(426,`td`,20)(427,`p`),cN(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),ag()()()(),Gl(429,`br`),Tl(430,`table`,26)(431,`tr`,13)(432,`th`,27)(433,`div`,15)(434,`h4`)(435,`span`,16),cN(436,` openConfirmation `),ag()()()()(),Tl(437,`tr`,20)(438,`td`,20)(439,`p`),cN(440,`Abre a modal de confirmação de envio de email.`),ag()()()(),Gl(441,`br`),Tl(442,`table`,26)(443,`tr`,13)(444,`th`,27)(445,`div`,15)(446,`h4`)(447,`span`,16),cN(448,` openSmsCode `),ag()()()()(),Tl(449,`tr`,20)(450,`td`,20)(451,`p`),cN(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),ag()()()(),Gl(453,`br`),Tl(454,`h3`),cN(455,`Interfaces`),ag(),Tl(456,`h4`,28)(457,`code`,5),cN(458,`PoModalPasswordRecovery`),ag()(),Tl(459,`div`,2)(460,`p`),cN(461,`Interface com a definição do objeto gerado pelo formulário do componente `),Tl(462,`code`),cN(463,`po-modal-password-recovery`),ag(),cN(464,`.`),ag()(),Tl(465,`h4`,9),cN(466,`Propriedades`),ag(),Tl(467,`table`,10)(468,`tr`,11)(469,`th`,12),cN(470,`Nome`),ag(),Tl(471,`th`,12),cN(472,`Tipo`),ag(),Tl(473,`th`,12),cN(474,`Descrição`),ag()(),Tl(475,`tr`,13)(476,`td`,14)(477,`div`,15)(478,`span`,16),cN(479,` code`),Gl(480,`br`),ag()()(),Tl(481,`td`,17)(482,`code`,18),cN(483,`string`),ag()(),Tl(484,`td`,20)(485,`em`)(486,`strong`),cN(487,`(opcional)`),ag()(),Tl(488,`p`),cN(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),ag()()(),Tl(490,`tr`,13)(491,`td`,14)(492,`div`,15)(493,`span`,16),cN(494,` email`),Gl(495,`br`),ag()()(),Tl(496,`td`,17)(497,`code`,18),cN(498,`string`),ag()(),Tl(499,`td`,20)(500,`em`)(501,`strong`),cN(502,`(opcional)`),ag()(),Tl(503,`p`),cN(504,`Valor contendo o email enviado pelo usuário.`),ag()()(),Tl(505,`tr`,13)(506,`td`,14)(507,`div`,15)(508,`span`,16),cN(509,` hash`),Gl(510,`br`),ag()()(),Tl(511,`td`,17)(512,`code`,18),cN(513,`string`),ag()(),Tl(514,`td`,20)(515,`em`)(516,`strong`),cN(517,`(opcional)`),ag()(),Tl(518,`p`),cN(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),ag()()(),Tl(520,`tr`,13)(521,`td`,14)(522,`div`,15)(523,`span`,16),cN(524,` retry`),Gl(525,`br`),ag()()(),Tl(526,`td`,17)(527,`code`,29),cN(528,`number`),ag()(),Tl(529,`td`,20)(530,`em`)(531,`strong`),cN(532,`(opcional)`),ag()(),Tl(533,`p`),cN(534,`Número de tentativas de reenvio.`),ag()()(),Tl(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),cN(539,` sms`),Gl(540,`br`),ag()()(),Tl(541,`td`,17)(542,`code`,18),cN(543,`string`),ag()(),Tl(544,`td`,20)(545,`em`)(546,`strong`),cN(547,`(opcional)`),ag()(),Tl(548,`p`),cN(549,`Valor contendo o número de telefone enviado pelo usuário.`),ag()()(),Tl(550,`tr`,13)(551,`td`,14)(552,`div`,15)(553,`span`,16),cN(554,` token`),Gl(555,`br`),ag()()(),Tl(556,`td`,17)(557,`code`,18),cN(558,`string`),ag()(),Tl(559,`td`,20)(560,`em`)(561,`strong`),cN(562,`(opcional)`),ag()(),Tl(563,`p`),cN(564,`Token de alteração de senha`),ag()()(),Tl(565,`tr`,13)(566,`td`,14)(567,`div`,15)(568,`span`,16),cN(569,` urlChangePassword`),Gl(570,`br`),ag()()(),Tl(571,`td`,17)(572,`code`,18),cN(573,`string`),ag()(),Tl(574,`td`,20)(575,`em`)(576,`strong`),cN(577,`(opcional)`),ag()(),Tl(578,`p`),cN(579,`URL para o formulário de alteração de senha`),ag()()(),Tl(580,`tr`,13)(581,`td`,14)(582,`div`,15)(583,`span`,16),cN(584,` urlValidationCode`),Gl(585,`br`),ag()()(),Tl(586,`td`,17)(587,`code`,18),cN(588,`string`),ag()(),Tl(589,`td`,20)(590,`em`)(591,`strong`),cN(592,`(opcional)`),ag()(),Tl(593,`p`),cN(594,`URL usada para validação do código enviado por SMS`),ag()()()(),Tl(595,`h3`),cN(596,`Enums`),ag(),Tl(597,`h4`,4)(598,`code`,5),cN(599,`PoModalPasswordRecoveryType`),ag()(),Tl(600,`div`,2)(601,`p`)(602,`em`),cN(603,`Enum`),ag(),cN(604,` para especificação do tipo de recuperação de senha.`),ag()(),Tl(605,`h4`,9),cN(606,`Propriedades`),ag(),Tl(607,`table`,10)(608,`tr`,11)(609,`th`,12),cN(610,`Nome`),ag(),Tl(611,`th`,12),cN(612,`Descrição`),ag()(),Tl(613,`tr`,13)(614,`td`,14)(615,`div`,15)(616,`span`,16),cN(617,` All`),Gl(618,`br`),ag()()(),Tl(619,`td`,20)(620,`p`),cN(621,`Possibilita ao usuário optar por envio via email ou SMS`),ag()()(),Tl(622,`tr`,13)(623,`td`,14)(624,`div`,15)(625,`span`,16),cN(626,` Email`),Gl(627,`br`),ag()()(),Tl(628,`td`,20)(629,`p`),cN(630,`Definição para recuperação apenas por email`),ag()()(),Tl(631,`tr`,13)(632,`td`,14)(633,`div`,15)(634,`span`,16),cN(635,` SMS`),Gl(636,`br`),ag()()(),Tl(637,`td`,20)(638,`p`),cN(639,`Definição para recuperação apenas por SMS`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal Password Recovery`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-modal-password-recovery-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-modal-password-recovery-basic-view`)(6,`sample-po-modal-password-recovery-labs-view`)(7,`sample-po-modal-password-recovery-request-view`),ag()()()),r&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,ce,Ee,ve],encapsulation:2,changeDetection:1})}return i})()}];var ge=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[bL.forChild(_e),bL]})}return i})();var rt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,ge]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};