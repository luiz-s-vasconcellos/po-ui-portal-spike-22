import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,c6 as U,b0 as Qt,c7 as Po,aB as Ex,M as Wl,H as Sl,a1 as ht,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,b4 as F3,c8 as Pde,aJ as Ghe,c9 as Qhe,aD as Xy,aE as Qy,aM as Ew,aN as JA,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,aI as dc,a3 as pNe,bd as xx,aT as tN}from'./main-BY5NURRA.js';var de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:false,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=Ex();Wl(0,"po-modal-password-recovery",null,0),Sl(2,"po-button",1),ht("p-click",function(){Xy(p);let d=xx(1);return Qy(d.open())}),sg();}},dependencies:[Qt,Po],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Modal Password Recovery Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-password-recovery-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return i})();var me=(()=>{class i{poDialog=f(zde);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=true;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:U.All},{label:"Email",value:U.Email},{label:"SMS",value:U.SMS}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email;}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)});}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)});}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l);}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation();}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode();}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed());}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&ql(Po,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=Ex();Sl(0,"po-modal-password-recovery",1),ht("p-code-submit",function(d){return Xy(p),n.submitCode(d),Qy(n.changeEvent("p-submit-code"))})("p-submit",function(d){return Xy(p),n.submit(d),Qy(n.changeEvent("p-submit"))}),sg(),Sl(1,"po-button",2),ht("p-click",function(){return n.openPasswordRecoveryModal()}),sg(),Wl(2,"po-divider"),Sl(3,"div",3),Wl(4,"po-info",4)(5,"po-info",5),sg(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"div",3)(10,"po-select",6),Ew("ngModelChange",function(d){return Xy(p),tN(n.type,d)||(n.type=d),Qy(d)}),sg(),JA(),Sl(11,"po-input",7),Ew("ngModelChange",function(d){return Xy(p),tN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),Qy(d)}),sg(),JA(),Sl(12,"po-input",8),Ew("ngModelChange",function(d){return Xy(p),tN(n.email,d)||(n.email=d),Qy(d)}),sg(),JA(),Sl(13,"po-input",9),Ew("ngModelChange",function(d){return Xy(p),tN(n.phoneMask,d)||(n.phoneMask=d),Qy(d)}),sg(),JA(),Sl(14,"po-radio-group",10),Ew("ngModelChange",function(d){return Xy(p),tN(n.componentsSize,d)||(n.componentsSize=d),Qy(d)}),sg(),JA(),sg(),Sl(15,"div",3)(16,"po-button",11),ht("p-click",function(){return Xy(p),xx(8).reset(),Qy(n.restore())}),sg()()();}r&2&&(tw("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),Vp(4),tw("p-value",n.submitEvent),Vp(),tw("p-value",n.event),Vp(5),Dw("ngModel",n.type),tw("p-options",n.typeOptions),t0(),Vp(),Dw("ngModel",n.invalidCodeMessage),t0(),Vp(),Dw("ngModel",n.email),t0(),Vp(),Dw("ngModel",n.phoneMask),t0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Pde,Ghe,Qhe,Po],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Modal Password Recovery Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-modal-password-recovery
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-password-recovery-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&ql(Po,5),r&2){let p;lo(p=uo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(Sl(0,"po-container")(1,"div",0),Wl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),sg()(),Sl(5,"po-container"),Wl(6,"img",4),Sl(7,"div",0)(8,"p",5),Jx(9,"Oops!"),sg(),Sl(10,"p",6),Jx(11," Password Recovery Requested by user "),sg(),Sl(12,"po-button",7),ht("p-click",function(){return n.openPasswordRecoveryModal()}),sg()()(),Wl(13,"po-modal-password-recovery",8)),r&2&&(Vp(13),tw("p-type",n.type)("p-url-recovery",n.urlRecovery));},dependencies:[Qt,dc,Qhe,Po],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Modal Password Recovery Request"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-modal-password-recovery-request"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,xe,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return i})();var ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:false,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do template do po-modal-password-recovery."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoModalPasswordRecoveryComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-modal-password-recovery"),sg(),Jx(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),sg(),Sl(18,"p"),Jx(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),sg(),Sl(20,"ul")(21,"li"),Jx(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),sg(),Sl(23,"li"),Jx(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),sg(),Sl(25,"li"),Jx(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),sg()(),Sl(27,"p"),Jx(28,"A propriedade "),Sl(29,"code"),Jx(30,"p-url-recovery"),sg(),Jx(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Sl(32,"em"),Jx(33,"propriedades"),sg(),Jx(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),sg(),Sl(35,"p"),Jx(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Sl(37,"code"),Jx(38,"p-code-error"),sg(),Jx(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Sl(40,"code"),Jx(41,"p-code-submit"),sg(),Jx(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),sg(),Sl(43,"blockquote")(44,"p"),Jx(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),sg()(),Sl(46,"p"),Jx(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),Sl(48,"code"),Jx(49,"p-submit"),sg(),Jx(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),sg(),Sl(51,"blockquote")(52,"p"),Jx(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),sg()(),Sl(54,"blockquote")(55,"p"),Jx(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),Sl(57,"em"),Jx(58,"browser"),sg(),Jx(59," (pt, en e es)"),sg()(),Sl(60,"p"),Jx(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Sl(62,"em"),Jx(63,"assets"),sg(),Jx(64," no arquivo "),Sl(65,"strong"),Jx(66,"angular.json"),sg(),Jx(67," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Sl(68,"pre")(69,"code"),Jx(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()()(),Sl(71,"div",6)(72,"h4",7),Jx(73,"Seletor"),sg(),Sl(74,"pre",8),Jx(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),sg()(),Sl(76,"h4",9),Jx(77,"Propriedades"),sg(),Sl(78,"table",10)(79,"tr",11)(80,"th",12),Jx(81,"Nome"),sg(),Sl(82,"th",12),Jx(83,"Tipo"),sg(),Sl(84,"th",12),Jx(85,"Padr\xE3o"),sg(),Sl(86,"th",12),Jx(87,"Descri\xE7\xE3o"),sg()(),Sl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),Jx(92," p-code-error"),Wl(93,"br"),sg()()(),Sl(94,"td",17)(95,"code",18),Jx(96,"string"),sg()(),Sl(97,"td",19),Jx(98,"-"),sg(),Sl(99,"td",20)(100,"em")(101,"strong"),Jx(102,"(opcional)"),sg()(),Sl(103,"p"),Jx(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),sg()()(),Sl(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),Jx(109," (p-code-submit)"),Wl(110,"br"),sg()()(),Sl(111,"td",17)(112,"code",23),Jx(113,"EventEmitter"),sg()(),Sl(114,"td",19),Jx(115,"-"),sg(),Sl(116,"td",20)(117,"em")(118,"strong"),Jx(119,"(opcional)"),sg()(),Sl(120,"p"),Jx(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),sg(),Sl(122,"blockquote")(123,"p"),Jx(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(125,"code"),Jx(126,"p-url-recovery"),sg(),Jx(127,"."),sg()()()(),Sl(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),Jx(132," p-components-size"),Wl(133,"br"),sg()()(),Sl(134,"td",17)(135,"code",18),Jx(136,"string"),sg()(),Sl(137,"td",19)(138,"p")(139,"code"),Jx(140,"medium"),sg()()(),Sl(141,"td",20)(142,"em")(143,"strong"),Jx(144,"(opcional)"),sg()(),Sl(145,"p"),Jx(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),sg(),Sl(147,"ul")(148,"li")(149,"code"),Jx(150,"small"),sg(),Jx(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(152,"li")(153,"code"),Jx(154,"medium"),sg(),Jx(155,": aplica a medida medium de cada componente."),sg()(),Sl(156,"blockquote")(157,"p"),Jx(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(159,"code"),Jx(160,"medium"),sg(),Jx(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(162,"a",24),Jx(163,"po-theme"),sg(),Jx(164,"."),sg()()()(),Sl(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),Jx(169," p-contact-email"),Wl(170,"br"),sg()()(),Sl(171,"td",17)(172,"code",18),Jx(173,"string"),sg()(),Sl(174,"td",19),Jx(175,"-"),sg(),Sl(176,"td",20)(177,"em")(178,"strong"),Jx(179,"(opcional)"),sg()(),Sl(180,"p"),Jx(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),sg()()(),Sl(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),Jx(186," p-phone-mask"),Wl(187,"br"),sg()()(),Sl(188,"td",17)(189,"code",18),Jx(190,"string"),sg()(),Sl(191,"td",19)(192,"p")(193,"code"),Jx(194,"(99) 99999-9999"),sg()()(),Sl(195,"td",20)(196,"em")(197,"strong"),Jx(198,"(opcional)"),sg()(),Sl(199,"p"),Jx(200,"Defini\xE7\xE3o da mascara do campo de telefone."),sg()()(),Sl(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),Jx(205," (p-submit)"),Wl(206,"br"),sg()()(),Sl(207,"td",17)(208,"code",23),Jx(209,"EventEmitter"),sg()(),Sl(210,"td",19),Jx(211,"-"),sg(),Sl(212,"td",20)(213,"em")(214,"strong"),Jx(215,"(opcional)"),sg()(),Sl(216,"p"),Jx(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),sg(),Sl(218,"blockquote")(219,"p"),Jx(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Sl(221,"code"),Jx(222,"p-url-recovery"),sg(),Jx(223,"."),sg()()()(),Sl(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),Jx(228," p-type"),Wl(229,"br"),sg()()(),Sl(230,"td",17)(231,"code",25),Jx(232,"PoModalPasswordRecoveryType"),sg()(),Sl(233,"td",19)(234,"p")(235,"code"),Jx(236,"PoModalPasswordRecoveryType.Email"),sg()()(),Sl(237,"td",20)(238,"em")(239,"strong"),Jx(240,"(opcional)"),sg()(),Sl(241,"p"),Jx(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),sg()()(),Sl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),Jx(247," p-url-recovery"),Wl(248,"br"),sg()()(),Sl(249,"td",17)(250,"code",18),Jx(251,"string"),sg()(),Sl(252,"td",19),Jx(253,"-"),sg(),Sl(254,"td",20)(255,"em")(256,"strong"),Jx(257,"(opcional)"),sg()(),Sl(258,"p"),Jx(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Sl(260,"code"),Jx(261,"p-submit"),sg(),Jx(262," e "),Sl(263,"code"),Jx(264,"p-submit-code"),sg(),Jx(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),sg(),Sl(266,"h3"),Jx(267,"Processos"),sg(),Sl(268,"p"),Jx(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),Sl(270,"strong"),Jx(271,"enviar"),sg(),Jx(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Sl(273,"code"),Jx(274,"POST"),sg(),Jx(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),sg(),Sl(276,"pre")(277,"code"),Jx(278,`body {
 email: email,
 retry?: retry
}
`),sg()(),Sl(279,"h4"),Jx(280,"Recupera\xE7\xE3o por email"),sg(),Sl(281,"p"),Jx(282,"Para a recupera\xE7\xE3o de senha por "),Sl(283,"strong"),Jx(284,"email"),sg(),Jx(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(286,"code"),Jx(287,"204"),sg(),Jx(288,"."),sg(),Sl(289,"p"),Jx(290,"Em caso de "),Sl(291,"strong"),Jx(292,"sucesso"),sg(),Jx(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),sg(),Sl(294,"blockquote")(295,"p"),Jx(296,"A a\xE7\xE3o "),Sl(297,"strong"),Jx(298,"Reenviar"),sg(),Jx(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Sl(300,"strong"),Jx(301,"retry"),sg(),Jx(302,"."),sg()(),Sl(303,"p")(304,"em"),Jx(305,"Processo finalizado."),sg()(),Sl(306,"h4"),Jx(307,"Recupera\xE7\xE3o por SMS"),sg(),Sl(308,"p"),Jx(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),Sl(310,"strong"),Jx(311,"SMS"),sg(),Jx(312,", o c\xF3digo de status de sucesso deve ser "),Sl(313,"code"),Jx(314,"200"),sg(),Jx(315,`.
Em caso de `),Sl(316,"strong"),Jx(317,"sucesso"),sg(),Jx(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),sg(),Sl(319,"pre")(320,"code"),Jx(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),sg()(),Sl(322,"ul")(323,"li"),Jx(324,"O "),Sl(325,"strong"),Jx(326,"hash"),sg(),Jx(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),sg(),Sl(328,"li")(329,"strong"),Jx(330,"urlValidationCode"),sg(),Jx(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),sg()(),Sl(332,"blockquote")(333,"p"),Jx(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),Sl(335,"code"),Jx(336,"<p-url-recovery>/validation"),sg(),Jx(337,"."),sg()(),Sl(338,"h4"),Jx(339,"Valida\xE7\xE3o do c\xF3digo SMS"),sg(),Sl(340,"p"),Jx(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),Sl(342,"strong"),Jx(343,"continuar"),sg(),Jx(344,", o componente far\xE1 uma requisi\xE7\xE3o "),Sl(345,"code"),Jx(346,"POST"),sg(),Jx(347," contendo:"),sg(),Sl(348,"pre")(349,"code"),Jx(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),sg()(),Sl(351,"p"),Jx(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Sl(353,"code"),Jx(354,"200"),sg(),Jx(355,"."),sg(),Sl(356,"p"),Jx(357,"Em caso de "),Sl(358,"strong"),Jx(359,"erro"),sg(),Jx(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),sg(),Sl(361,"blockquote")(362,"p"),Jx(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),Sl(364,"code"),Jx(365,"p-code-error"),sg(),Jx(366," conforme retorno abaixo:"),sg()(),Sl(367,"pre")(368,"code"),Jx(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),sg()(),Sl(370,"p"),Jx(371,"Em caso de "),Sl(372,"strong"),Jx(373,"sucesso"),sg(),Jx(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),sg(),Sl(375,"pre")(376,"code"),Jx(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),sg()(),Sl(378,"ul")(379,"li")(380,"strong"),Jx(381,"token"),sg(),Jx(382,": Token de altera\xE7\xE3o de senha;"),sg(),Sl(383,"li")(384,"strong"),Jx(385,"urlChangePassword"),sg(),Jx(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),sg()(),Sl(387,"p"),Jx(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),Sl(389,"code"),Jx(390,"urlChangePassword"),sg(),Jx(391,"."),sg(),Sl(392,"blockquote")(393,"p"),Jx(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Sl(395,"code"),Jx(396,"<p-url-recovery>/changePassword?token=<token>"),sg(),Jx(397,"."),sg()(),Sl(398,"p")(399,"em"),Jx(400,"Processo finalizado."),sg()()()()(),Sl(401,"h3",9),Jx(402,"M\xE9todos"),sg(),Sl(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),Jx(409," completed "),sg()()()()(),Sl(410,"tr",20)(411,"td",20)(412,"p"),Jx(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),sg(),Sl(414,"blockquote")(415,"p"),Jx(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),sg()()()()(),Wl(417,"br"),Sl(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),Jx(424," open "),sg()()()()(),Sl(425,"tr",20)(426,"td",20)(427,"p"),Jx(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),sg()()()(),Wl(429,"br"),Sl(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),Jx(436," openConfirmation "),sg()()()()(),Sl(437,"tr",20)(438,"td",20)(439,"p"),Jx(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),sg()()()(),Wl(441,"br"),Sl(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),Jx(448," openSmsCode "),sg()()()()(),Sl(449,"tr",20)(450,"td",20)(451,"p"),Jx(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),sg()()()(),Wl(453,"br"),Sl(454,"h3"),Jx(455,"Interfaces"),sg(),Sl(456,"h4",28)(457,"code",5),Jx(458,"PoModalPasswordRecovery"),sg()(),Sl(459,"div",2)(460,"p"),Jx(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Sl(462,"code"),Jx(463,"po-modal-password-recovery"),sg(),Jx(464,"."),sg()(),Sl(465,"h4",9),Jx(466,"Propriedades"),sg(),Sl(467,"table",10)(468,"tr",11)(469,"th",12),Jx(470,"Nome"),sg(),Sl(471,"th",12),Jx(472,"Tipo"),sg(),Sl(473,"th",12),Jx(474,"Descri\xE7\xE3o"),sg()(),Sl(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),Jx(479," code"),Wl(480,"br"),sg()()(),Sl(481,"td",17)(482,"code",18),Jx(483,"string"),sg()(),Sl(484,"td",20)(485,"em")(486,"strong"),Jx(487,"(opcional)"),sg()(),Sl(488,"p"),Jx(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),sg()()(),Sl(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),Jx(494," email"),Wl(495,"br"),sg()()(),Sl(496,"td",17)(497,"code",18),Jx(498,"string"),sg()(),Sl(499,"td",20)(500,"em")(501,"strong"),Jx(502,"(opcional)"),sg()(),Sl(503,"p"),Jx(504,"Valor contendo o email enviado pelo usu\xE1rio."),sg()()(),Sl(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),Jx(509," hash"),Wl(510,"br"),sg()()(),Sl(511,"td",17)(512,"code",18),Jx(513,"string"),sg()(),Sl(514,"td",20)(515,"em")(516,"strong"),Jx(517,"(opcional)"),sg()(),Sl(518,"p"),Jx(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),sg()()(),Sl(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),Jx(524," retry"),Wl(525,"br"),sg()()(),Sl(526,"td",17)(527,"code",29),Jx(528,"number"),sg()(),Sl(529,"td",20)(530,"em")(531,"strong"),Jx(532,"(opcional)"),sg()(),Sl(533,"p"),Jx(534,"N\xFAmero de tentativas de reenvio."),sg()()(),Sl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),Jx(539," sms"),Wl(540,"br"),sg()()(),Sl(541,"td",17)(542,"code",18),Jx(543,"string"),sg()(),Sl(544,"td",20)(545,"em")(546,"strong"),Jx(547,"(opcional)"),sg()(),Sl(548,"p"),Jx(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),sg()()(),Sl(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),Jx(554," token"),Wl(555,"br"),sg()()(),Sl(556,"td",17)(557,"code",18),Jx(558,"string"),sg()(),Sl(559,"td",20)(560,"em")(561,"strong"),Jx(562,"(opcional)"),sg()(),Sl(563,"p"),Jx(564,"Token de altera\xE7\xE3o de senha"),sg()()(),Sl(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),Jx(569," urlChangePassword"),Wl(570,"br"),sg()()(),Sl(571,"td",17)(572,"code",18),Jx(573,"string"),sg()(),Sl(574,"td",20)(575,"em")(576,"strong"),Jx(577,"(opcional)"),sg()(),Sl(578,"p"),Jx(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),sg()()(),Sl(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),Jx(584," urlValidationCode"),Wl(585,"br"),sg()()(),Sl(586,"td",17)(587,"code",18),Jx(588,"string"),sg()(),Sl(589,"td",20)(590,"em")(591,"strong"),Jx(592,"(opcional)"),sg()(),Sl(593,"p"),Jx(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),sg()()()(),Sl(595,"h3"),Jx(596,"Enums"),sg(),Sl(597,"h4",4)(598,"code",5),Jx(599,"PoModalPasswordRecoveryType"),sg()(),Sl(600,"div",2)(601,"p")(602,"em"),Jx(603,"Enum"),sg(),Jx(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),sg()(),Sl(605,"h4",9),Jx(606,"Propriedades"),sg(),Sl(607,"table",10)(608,"tr",11)(609,"th",12),Jx(610,"Nome"),sg(),Sl(611,"th",12),Jx(612,"Descri\xE7\xE3o"),sg()(),Sl(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),Jx(617," All"),Wl(618,"br"),sg()()(),Sl(619,"td",20)(620,"p"),Jx(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),sg()()(),Sl(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),Jx(626," Email"),Wl(627,"br"),sg()()(),Sl(628,"td",20)(629,"p"),Jx(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),sg()()(),Sl(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),Jx(635," SMS"),Wl(636,"br"),sg()()(),Sl(637,"td",20)(638,"p"),Jx(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-modal-password-recovery-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),sg()()()),r&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,pe,ce,Ee,ve],encapsulation:2})}return i})();var _e=[{path:"",component:Se}],ye=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[pL.forChild(_e),pL]})}return i})();var rt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ar,ye]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};