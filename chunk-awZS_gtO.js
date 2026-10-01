import{Br as RE,Di as he$1,Dt as aae,Hn as AN,Kn as BP,Li as kL,M as Ete,Qi as pt,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,nn as ob,o as ae,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue$1,t as Ai,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-LIMZAZLW.js";var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-basic`]],standalone:!1,decls:3,vars:0,consts:[[`passwordRecoveryModal`,``],[`p-label`,`Open modal password recovery`,3,`p-click`]],template:function(r,n){if(r&1){let p=Bx();Kc(0,`po-modal-password-recovery`,null,0),Ac(2,`po-button`,1),pt(`p-click`,function(){Jv(p);let d=Zx(1);return e_(d.open())}),ug()}},dependencies:[ni,Ai],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i});var pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Modal Password Recovery Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-modal-password-recovery-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,he,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,de],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poDialog=f(Ete);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=!0;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`All`,value:ae.All},{label:`Email`,value:ae.Email},{label:`SMS`,value:ae.SMS}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}restore(){this.codeError=void 0,this.componentsSize=`medium`,this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=ae.Email}submit(l){this.poDialog.alert({title:`Change Password Requested By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)})}submitCode(l){this.poDialog.alert({title:`Emitted SMS Code By User`,message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)})}advanceModal(l){l.hasOwnProperty(`sms`)?this.openSmsCode(l):this.openConfirmation(l)}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation()}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode()}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed())}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-labs`]],viewQuery:function(r,n){if(r&1&&Xc(Ai,5),r&2){let p;fo(p=ho())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:17,vars:14,consts:[[`f`,`ngForm`],[3,`p-code-submit`,`p-submit`,`p-code-error`,`p-components-size`,`p-contact-email`,`p-phone-mask`,`p-type`],[`p-label`,`Open modal password recovery`,3,`p-click`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`invalidCodeMessage`,`p-clean`,``,`p-label`,`Code Error`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-maxlength`,`30`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phoneMask`,`p-clean`,``,`p-label`,`Phone Mask`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let p=Bx();Ac(0,`po-modal-password-recovery`,1),pt(`p-code-submit`,function(d){return Jv(p),n.submitCode(d),e_(n.changeEvent(`p-submit-code`))})(`p-submit`,function(d){return Jv(p),n.submit(d),e_(n.changeEvent(`p-submit`))}),ug(),Ac(1,`po-button`,2),pt(`p-click`,function(){return n.openPasswordRecoveryModal()}),ug(),Kc(2,`po-divider`),Ac(3,`div`,3),Kc(4,`po-info`,4)(5,`po-info`,5),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`div`,3)(10,`po-select`,6),RE(`ngModelChange`,function(d){return Jv(p),DN(n.type,d)||(n.type=d),e_(d)}),ug(),p0(),Ac(11,`po-input`,7),RE(`ngModelChange`,function(d){return Jv(p),DN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),e_(d)}),ug(),p0(),Ac(12,`po-input`,8),RE(`ngModelChange`,function(d){return Jv(p),DN(n.email,d)||(n.email=d),e_(d)}),ug(),p0(),Ac(13,`po-input`,9),RE(`ngModelChange`,function(d){return Jv(p),DN(n.phoneMask,d)||(n.phoneMask=d),e_(d)}),ug(),p0(),Ac(14,`po-radio-group`,10),RE(`ngModelChange`,function(d){return Jv(p),DN(n.componentsSize,d)||(n.componentsSize=d),e_(d)}),ug(),p0(),ug(),Ac(15,`div`,3)(16,`po-button`,11),pt(`p-click`,function(){return Jv(p),Zx(8).reset(),e_(n.restore())}),ug()()()}r&2&&(cE(`p-code-error`,n.codeError)(`p-components-size`,n.componentsSize)(`p-contact-email`,n.email)(`p-phone-mask`,n.phoneMask)(`p-type`,n.type),Hp(4),cE(`p-value`,n.submitEvent),Hp(),cE(`p-value`,n.event),Hp(5),TE(`ngModel`,n.type),cE(`p-options`,n.typeOptions),m0(),Hp(),TE(`ngModel`,n.invalidCodeMessage),m0(),Hp(),TE(`ngModel`,n.email),m0(),Hp(),TE(`ngModel`,n.phoneMask),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-options`,n.componentsSizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,_4,Cte,ioe,roe,Ai],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Modal Password Recovery Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-modal-password-recovery
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-modal-password-recovery-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=ae.All;urlRecovery=`https://po-sample-api.onrender.com/v1/users`;openPasswordRecoveryModal(){this.poModalPasswordRecovery.open()}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-request`]],viewQuery:function(r,n){if(r&1&&Xc(Ai,5),r&2){let p;fo(p=ho())&&(n.poModalPasswordRecovery=p.first)}},standalone:!1,decls:14,vars:2,consts:[[1,`po-row`],[`p-label`,`Data Phone`,`p-value`,`(99) 99999-9999`,1,`po-md-2`],[`p-label`,`Data Email`,`p-value`,`mail@mail.com`,1,`po-md-2`],[`p-label`,`Data SMS Code`,`p-value`,`999999`,1,`po-md-2`],[`src`,`./assets/images/expired.svg`,1,`po-page-blocked-user-image`,`po-mb-5`,`po-mt-5`],[1,`po-font-title`,`po-text-center`,`po-md-12`,`po-mb-2`],[1,`po-font-text`,`po-text-center`,`po-md-12`,`po-mb-5`,`po-text-color-neutral-dark-40`],[`p-label`,`Forgot your password?`,`p-kind`,`primary`,1,`po-mb-5`,`po-offset-md-3`,`po-md-6`,`po-offset-lg-4`,`po-lg-4`,`po-offset-xl-4`,`po-xl-4`,3,`p-click`],[3,`p-type`,`p-url-recovery`]],template:function(r,n){r&1&&(Ac(0,`po-container`)(1,`div`,0),Kc(2,`po-info`,1)(3,`po-info`,2)(4,`po-info`,3),ug()(),Ac(5,`po-container`),Kc(6,`img`,4),Ac(7,`div`,0)(8,`p`,5),vN(9,`Oops!`),ug(),Ac(10,`p`,6),vN(11,` Password Recovery Requested by user `),ug(),Ac(12,`po-button`,7),pt(`p-click`,function(){return n.openPasswordRecoveryModal()}),ug()()(),Kc(13,`po-modal-password-recovery`,8)),r&2&&(Hp(13),cE(`p-type`,n.type)(`p-url-recovery`,n.urlRecovery))},dependencies:[ni,Ic,roe,Ai],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-request-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Modal Password Recovery Request`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-modal-password-recovery-request`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,xe,n.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ue],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-modal-password-recovery-doc`]],standalone:!1,decls:640,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoModalPasswordRecoveryType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(r,n){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do template do po-modal-password-recovery.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoModalPasswordRecoveryComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-modal-password-recovery`),ug(),vN(17,` é utilizado como template para solicitação de troca de senha.`),ug(),Ac(18,`p`),vN(19,`É composto por uma modal que possui três telas, cada uma com as seguintes características:`),ug(),Ac(20,`ul`)(21,`li`),vN(22,`A primeira possui campos para preenchimento de email ou número de telefone;`),ug(),Ac(23,`li`),vN(24,`Tela com campo para preenchimento de código SMS enviado para o número de telefone enviado;`),ug(),Ac(25,`li`),vN(26,`A terceira se trata de uma confirmação de envio de link para a caixa de email do usuário.`),ug()(),Ac(27,`p`),vN(28,`A propriedade `),Ac(29,`code`),vN(30,`p-url-recovery`),ug(),vN(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Ac(32,`em`),vN(33,`propriedades`),ug(),vN(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ug(),Ac(35,`p`),vN(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Ac(37,`code`),vN(38,`p-code-error`),ug(),vN(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Ac(40,`code`),vN(41,`p-code-submit`),ug(),vN(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),ug(),Ac(43,`blockquote`)(44,`p`),vN(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),ug()(),Ac(46,`p`),vN(47,`A modal de confirmação contém uma ação de reenvio e o evento `),Ac(48,`code`),vN(49,`p-submit`),ug(),vN(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),ug(),Ac(51,`blockquote`)(52,`p`),vN(53,`A tela de confirmação é indicada para quando o usuário solicitar a troca através do email.`),ug()(),Ac(54,`blockquote`)(55,`p`),vN(56,`Os textos das modals são pré-definidos, imutáveis e são traduzidos de acordo com o idioma do `),Ac(57,`em`),vN(58,`browser`),ug(),vN(59,` (pt, en e es)`),ug()(),Ac(60,`p`),vN(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Ac(62,`em`),vN(63,`assets`),ug(),vN(64,` no arquivo `),Ac(65,`strong`),vN(66,`angular.json`),ug(),vN(67,` da aplicação na seguinte ordem:`),ug(),Ac(68,`pre`)(69,`code`),vN(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ug()()(),Ac(71,`div`,6)(72,`h4`,7),vN(73,`Seletor`),ug(),Ac(74,`pre`,8),vN(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),ug()(),Ac(76,`h4`,9),vN(77,`Propriedades`),ug(),Ac(78,`table`,10)(79,`tr`,11)(80,`th`,12),vN(81,`Nome`),ug(),Ac(82,`th`,12),vN(83,`Tipo`),ug(),Ac(84,`th`,12),vN(85,`Padrão`),ug(),Ac(86,`th`,12),vN(87,`Descrição`),ug()(),Ac(88,`tr`,13)(89,`td`,14)(90,`div`,15)(91,`span`,16),vN(92,` p-code-error`),Kc(93,`br`),ug()()(),Ac(94,`td`,17)(95,`code`,18),vN(96,`string`),ug()(),Ac(97,`td`,19),vN(98,`-`),ug(),Ac(99,`td`,20)(100,`em`)(101,`strong`),vN(102,`(opcional)`),ug()(),Ac(103,`p`),vN(104,`Definição de mensagem de erro customizada para quando o usuário passar um código SMS inválido ou errado.`),ug()()(),Ac(105,`tr`,13)(106,`td`,14)(107,`div`,21)(108,`span`,22),vN(109,` (p-code-submit)`),Kc(110,`br`),ug()()(),Ac(111,`td`,17)(112,`code`,23),vN(113,`EventEmitter`),ug()(),Ac(114,`td`,19),vN(115,`-`),ug(),Ac(116,`td`,20)(117,`em`)(118,`strong`),vN(119,`(opcional)`),ug()(),Ac(120,`p`),vN(121,`Ação contendo como parâmetro o código enviado por SMS e digitado pelo usuário.`),ug(),Ac(122,`blockquote`)(123,`p`),vN(124,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ac(125,`code`),vN(126,`p-url-recovery`),ug(),vN(127,`.`),ug()()()(),Ac(128,`tr`,13)(129,`td`,14)(130,`div`,15)(131,`span`,16),vN(132,` p-components-size`),Kc(133,`br`),ug()()(),Ac(134,`td`,17)(135,`code`,18),vN(136,`string`),ug()(),Ac(137,`td`,19)(138,`p`)(139,`code`),vN(140,`medium`),ug()()(),Ac(141,`td`,20)(142,`em`)(143,`strong`),vN(144,`(opcional)`),ug()(),Ac(145,`p`),vN(146,`Define o tamanho dos componentes de formulário no modal:`),ug(),Ac(147,`ul`)(148,`li`)(149,`code`),vN(150,`small`),ug(),vN(151,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(152,`li`)(153,`code`),vN(154,`medium`),ug(),vN(155,`: aplica a medida medium de cada componente.`),ug()(),Ac(156,`blockquote`)(157,`p`),vN(158,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(159,`code`),vN(160,`medium`),ug(),vN(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(162,`a`,24),vN(163,`po-theme`),ug(),vN(164,`.`),ug()()()(),Ac(165,`tr`,13)(166,`td`,14)(167,`div`,15)(168,`span`,16),vN(169,` p-contact-email`),Kc(170,`br`),ug()()(),Ac(171,`td`,17)(172,`code`,18),vN(173,`string`),ug()(),Ac(174,`td`,19),vN(175,`-`),ug(),Ac(176,`td`,20)(177,`em`)(178,`strong`),vN(179,`(opcional)`),ug()(),Ac(180,`p`),vN(181,`Definição do e-mail que é exibido na mensagem para contato de suporte.`),ug()()(),Ac(182,`tr`,13)(183,`td`,14)(184,`div`,15)(185,`span`,16),vN(186,` p-phone-mask`),Kc(187,`br`),ug()()(),Ac(188,`td`,17)(189,`code`,18),vN(190,`string`),ug()(),Ac(191,`td`,19)(192,`p`)(193,`code`),vN(194,`(99) 99999-9999`),ug()()(),Ac(195,`td`,20)(196,`em`)(197,`strong`),vN(198,`(opcional)`),ug()(),Ac(199,`p`),vN(200,`Definição da mascara do campo de telefone.`),ug()()(),Ac(201,`tr`,13)(202,`td`,14)(203,`div`,21)(204,`span`,22),vN(205,` (p-submit)`),Kc(206,`br`),ug()()(),Ac(207,`td`,17)(208,`code`,23),vN(209,`EventEmitter`),ug()(),Ac(210,`td`,19),vN(211,`-`),ug(),Ac(212,`td`,20)(213,`em`)(214,`strong`),vN(215,`(opcional)`),ug()(),Ac(216,`p`),vN(217,`Ação contendo o email como parâmetro e que é executada quando o usuário clica sobres os botões de 'enviar' e 'reenviar' e-mail.`),ug(),Ac(218,`blockquote`)(219,`p`),vN(220,`Esta propriedade será ignorada se for definido valor para a propriedade `),Ac(221,`code`),vN(222,`p-url-recovery`),ug(),vN(223,`.`),ug()()()(),Ac(224,`tr`,13)(225,`td`,14)(226,`div`,15)(227,`span`,16),vN(228,` p-type`),Kc(229,`br`),ug()()(),Ac(230,`td`,17)(231,`code`,25),vN(232,`PoModalPasswordRecoveryType`),ug()(),Ac(233,`td`,19)(234,`p`)(235,`code`),vN(236,`PoModalPasswordRecoveryType.Email`),ug()()(),Ac(237,`td`,20)(238,`em`)(239,`strong`),vN(240,`(opcional)`),ug()(),Ac(241,`p`),vN(242,`Define o tipo de recuperação de senha que será exibido.`),ug()()(),Ac(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),vN(247,` p-url-recovery`),Kc(248,`br`),ug()()(),Ac(249,`td`,17)(250,`code`,18),vN(251,`string`),ug()(),Ac(252,`td`,19),vN(253,`-`),ug(),Ac(254,`td`,20)(255,`em`)(256,`strong`),vN(257,`(opcional)`),ug()(),Ac(258,`p`),vN(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Ac(260,`code`),vN(261,`p-submit`),ug(),vN(262,` e `),Ac(263,`code`),vN(264,`p-submit-code`),ug(),vN(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),ug(),Ac(266,`h3`),vN(267,`Processos`),ug(),Ac(268,`p`),vN(269,`Ao digitar um valor válido no campo de email/telefone e pressionar `),Ac(270,`strong`),vN(271,`enviar`),ug(),vN(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Ac(273,`code`),vN(274,`POST`),ug(),vN(275,` na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usuário.`),ug(),Ac(276,`pre`)(277,`code`),vN(278,`body {
 email: email,
 retry?: retry
}
`),ug()(),Ac(279,`h4`),vN(280,`Recuperação por email`),ug(),Ac(281,`p`),vN(282,`Para a recuperação de senha por `),Ac(283,`strong`),vN(284,`email`),ug(),vN(285,`, o código de resposta HTTP de status esperado é `),Ac(286,`code`),vN(287,`204`),ug(),vN(288,`.`),ug(),Ac(289,`p`),vN(290,`Em caso de `),Ac(291,`strong`),vN(292,`sucesso`),ug(),vN(293,`, será exibida a modal de confirmação de e-mail para o usuário.`),ug(),Ac(294,`blockquote`)(295,`p`),vN(296,`A ação `),Ac(297,`strong`),vN(298,`Reenviar`),ug(),vN(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Ac(300,`strong`),vN(301,`retry`),ug(),vN(302,`.`),ug()(),Ac(303,`p`)(304,`em`),vN(305,`Processo finalizado.`),ug()(),Ac(306,`h4`),vN(307,`Recuperação por SMS`),ug(),Ac(308,`p`),vN(309,`Se a opção de recuperação for por `),Ac(310,`strong`),vN(311,`SMS`),ug(),vN(312,`, o código de status de sucesso deve ser `),Ac(313,`code`),vN(314,`200`),ug(),vN(315,`.
Em caso de `),Ac(316,`strong`),vN(317,`sucesso`),ug(),vN(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),ug(),Ac(319,`pre`)(320,`code`),vN(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),ug()(),Ac(322,`ul`)(323,`li`),vN(324,`O `),Ac(325,`strong`),vN(326,`hash`),ug(),vN(327,` será o código de validação da solicitação do SMS para ser enviado juntamente com o código de verificação do SMS;`),ug(),Ac(328,`li`)(329,`strong`),vN(330,`urlValidationCode`),ug(),vN(331,` é a url usada para validação do código enviado por SMS.`),ug()(),Ac(332,`blockquote`)(333,`p`),vN(334,`Caso não seja passado urlValidationCode, o endpoint usado para validação do código será `),Ac(335,`code`),vN(336,`<p-url-recovery>/validation`),ug(),vN(337,`.`),ug()(),Ac(338,`h4`),vN(339,`Validação do código SMS`),ug(),Ac(340,`p`),vN(341,`Ao digitar um valor válido no campo de código SMS e pressionar `),Ac(342,`strong`),vN(343,`continuar`),ug(),vN(344,`, o componente fará uma requisição `),Ac(345,`code`),vN(346,`POST`),ug(),vN(347,` contendo:`),ug(),Ac(348,`pre`)(349,`code`),vN(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),ug()(),Ac(351,`p`),vN(352,`O código de resposta HTTP de status esperado é `),Ac(353,`code`),vN(354,`200`),ug(),vN(355,`.`),ug(),Ac(356,`p`),vN(357,`Em caso de `),Ac(358,`strong`),vN(359,`erro`),ug(),vN(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),ug(),Ac(361,`blockquote`)(362,`p`),vN(363,`Pode-se atribuir a mensagem de erro (message) para o atributo `),Ac(364,`code`),vN(365,`p-code-error`),ug(),vN(366,` conforme retorno abaixo:`),ug()(),Ac(367,`pre`)(368,`code`),vN(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),ug()(),Ac(370,`p`),vN(371,`Em caso de `),Ac(372,`strong`),vN(373,`sucesso`),ug(),vN(374,`, espera-se a resposta desta requisição retornando a seguinte definição:`),ug(),Ac(375,`pre`)(376,`code`),vN(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),ug()(),Ac(378,`ul`)(379,`li`)(380,`strong`),vN(381,`token`),ug(),vN(382,`: Token de alteração de senha;`),ug(),Ac(383,`li`)(384,`strong`),vN(385,`urlChangePassword`),ug(),vN(386,`: url para o formulário de alteração de senha.`),ug()(),Ac(387,`p`),vN(388,`O componente está configurado para redirecionar para a url estabelecida em `),Ac(389,`code`),vN(390,`urlChangePassword`),ug(),vN(391,`.`),ug(),Ac(392,`blockquote`)(393,`p`),vN(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Ac(395,`code`),vN(396,`<p-url-recovery>/changePassword?token=<token>`),ug(),vN(397,`.`),ug()(),Ac(398,`p`)(399,`em`),vN(400,`Processo finalizado.`),ug()()()()(),Ac(401,`h3`,9),vN(402,`Métodos`),ug(),Ac(403,`table`,26)(404,`tr`,13)(405,`th`,27)(406,`div`,15)(407,`h4`)(408,`span`,16),vN(409,` completed `),ug()()()()(),Ac(410,`tr`,20)(411,`td`,20)(412,`p`),vN(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),ug(),Ac(414,`blockquote`)(415,`p`),vN(416,`Nas modals em que há a ação de 'cancelar' dispensa-se o uso desta ação pois o componente já trata o fechamento da modal.`),ug()()()()(),Kc(417,`br`),Ac(418,`table`,26)(419,`tr`,13)(420,`th`,27)(421,`div`,15)(422,`h4`)(423,`span`,16),vN(424,` open `),ug()()()()(),Ac(425,`tr`,20)(426,`td`,20)(427,`p`),vN(428,`Abre a modal de preenchimento de email ou número de telefone para solicitação de troca de senha.`),ug()()()(),Kc(429,`br`),Ac(430,`table`,26)(431,`tr`,13)(432,`th`,27)(433,`div`,15)(434,`h4`)(435,`span`,16),vN(436,` openConfirmation `),ug()()()()(),Ac(437,`tr`,20)(438,`td`,20)(439,`p`),vN(440,`Abre a modal de confirmação de envio de email.`),ug()()()(),Kc(441,`br`),Ac(442,`table`,26)(443,`tr`,13)(444,`th`,27)(445,`div`,15)(446,`h4`)(447,`span`,16),vN(448,` openSmsCode `),ug()()()()(),Ac(449,`tr`,20)(450,`td`,20)(451,`p`),vN(452,`Abre a modal de preenchimento do código SMS enviado ao usuário.`),ug()()()(),Kc(453,`br`),Ac(454,`h3`),vN(455,`Interfaces`),ug(),Ac(456,`h4`,28)(457,`code`,5),vN(458,`PoModalPasswordRecovery`),ug()(),Ac(459,`div`,2)(460,`p`),vN(461,`Interface com a definição do objeto gerado pelo formulário do componente `),Ac(462,`code`),vN(463,`po-modal-password-recovery`),ug(),vN(464,`.`),ug()(),Ac(465,`h4`,9),vN(466,`Propriedades`),ug(),Ac(467,`table`,10)(468,`tr`,11)(469,`th`,12),vN(470,`Nome`),ug(),Ac(471,`th`,12),vN(472,`Tipo`),ug(),Ac(473,`th`,12),vN(474,`Descrição`),ug()(),Ac(475,`tr`,13)(476,`td`,14)(477,`div`,15)(478,`span`,16),vN(479,` code`),Kc(480,`br`),ug()()(),Ac(481,`td`,17)(482,`code`,18),vN(483,`string`),ug()(),Ac(484,`td`,20)(485,`em`)(486,`strong`),vN(487,`(opcional)`),ug()(),Ac(488,`p`),vN(489,`Valor contendo o código enviado por SMS e digitado pelo usuário.`),ug()()(),Ac(490,`tr`,13)(491,`td`,14)(492,`div`,15)(493,`span`,16),vN(494,` email`),Kc(495,`br`),ug()()(),Ac(496,`td`,17)(497,`code`,18),vN(498,`string`),ug()(),Ac(499,`td`,20)(500,`em`)(501,`strong`),vN(502,`(opcional)`),ug()(),Ac(503,`p`),vN(504,`Valor contendo o email enviado pelo usuário.`),ug()()(),Ac(505,`tr`,13)(506,`td`,14)(507,`div`,15)(508,`span`,16),vN(509,` hash`),Kc(510,`br`),ug()()(),Ac(511,`td`,17)(512,`code`,18),vN(513,`string`),ug()(),Ac(514,`td`,20)(515,`em`)(516,`strong`),vN(517,`(opcional)`),ug()(),Ac(518,`p`),vN(519,`Código de validação da solicitação do SMS para ser enviado junto com o código de verificação do SMS`),ug()()(),Ac(520,`tr`,13)(521,`td`,14)(522,`div`,15)(523,`span`,16),vN(524,` retry`),Kc(525,`br`),ug()()(),Ac(526,`td`,17)(527,`code`,29),vN(528,`number`),ug()(),Ac(529,`td`,20)(530,`em`)(531,`strong`),vN(532,`(opcional)`),ug()(),Ac(533,`p`),vN(534,`Número de tentativas de reenvio.`),ug()()(),Ac(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),vN(539,` sms`),Kc(540,`br`),ug()()(),Ac(541,`td`,17)(542,`code`,18),vN(543,`string`),ug()(),Ac(544,`td`,20)(545,`em`)(546,`strong`),vN(547,`(opcional)`),ug()(),Ac(548,`p`),vN(549,`Valor contendo o número de telefone enviado pelo usuário.`),ug()()(),Ac(550,`tr`,13)(551,`td`,14)(552,`div`,15)(553,`span`,16),vN(554,` token`),Kc(555,`br`),ug()()(),Ac(556,`td`,17)(557,`code`,18),vN(558,`string`),ug()(),Ac(559,`td`,20)(560,`em`)(561,`strong`),vN(562,`(opcional)`),ug()(),Ac(563,`p`),vN(564,`Token de alteração de senha`),ug()()(),Ac(565,`tr`,13)(566,`td`,14)(567,`div`,15)(568,`span`,16),vN(569,` urlChangePassword`),Kc(570,`br`),ug()()(),Ac(571,`td`,17)(572,`code`,18),vN(573,`string`),ug()(),Ac(574,`td`,20)(575,`em`)(576,`strong`),vN(577,`(opcional)`),ug()(),Ac(578,`p`),vN(579,`URL para o formulário de alteração de senha`),ug()()(),Ac(580,`tr`,13)(581,`td`,14)(582,`div`,15)(583,`span`,16),vN(584,` urlValidationCode`),Kc(585,`br`),ug()()(),Ac(586,`td`,17)(587,`code`,18),vN(588,`string`),ug()(),Ac(589,`td`,20)(590,`em`)(591,`strong`),vN(592,`(opcional)`),ug()(),Ac(593,`p`),vN(594,`URL usada para validação do código enviado por SMS`),ug()()()(),Ac(595,`h3`),vN(596,`Enums`),ug(),Ac(597,`h4`,4)(598,`code`,5),vN(599,`PoModalPasswordRecoveryType`),ug()(),Ac(600,`div`,2)(601,`p`)(602,`em`),vN(603,`Enum`),ug(),vN(604,` para especificação do tipo de recuperação de senha.`),ug()(),Ac(605,`h4`,9),vN(606,`Propriedades`),ug(),Ac(607,`table`,10)(608,`tr`,11)(609,`th`,12),vN(610,`Nome`),ug(),Ac(611,`th`,12),vN(612,`Descrição`),ug()(),Ac(613,`tr`,13)(614,`td`,14)(615,`div`,15)(616,`span`,16),vN(617,` All`),Kc(618,`br`),ug()()(),Ac(619,`td`,20)(620,`p`),vN(621,`Possibilita ao usuário optar por envio via email ou SMS`),ug()()(),Ac(622,`tr`,13)(623,`td`,14)(624,`div`,15)(625,`span`,16),vN(626,` Email`),Kc(627,`br`),ug()()(),Ac(628,`td`,20)(629,`p`),vN(630,`Definição para recuperação apenas por email`),ug()()(),Ac(631,`tr`,13)(632,`td`,14)(633,`div`,15)(634,`span`,16),vN(635,` SMS`),Kc(636,`br`),ug()()(),Ac(637,`td`,20)(638,`p`),vN(639,`Definição para recuperação apenas por SMS`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Modal Password Recovery`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-modal-password-recovery-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-modal-password-recovery-basic-view`)(6,`sample-po-modal-password-recovery-labs-view`)(7,`sample-po-modal-password-recovery-request-view`),ug()()()),r&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[vze,tae,aae,pe,ce,Ee,ve],encapsulation:2,changeDetection:1})}return i})()}];var ge=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[kL.forChild(_e),kL]})}return i})();var rt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[Ta,ge]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};