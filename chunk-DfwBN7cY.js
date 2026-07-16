import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,c5 as Vde,c6 as U,b0 as Qt,c7 as Po,aB as Sx,L as Gl,T as Tl,a1 as ht,M as sg,an as AO,aH as Ga,b8 as Wme,b9 as jme,C as iN,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b1 as mv,b4 as O3,c8 as Dde,aJ as qhe,c9 as Yhe,aD as Ky,aE as Xy,aM as ww,aN as r0,aO as Ew,aP as o0,av as Yl,aw as uo,ax as fo,aI as dc,a3 as lNe,bd as Fx,aT as sN}from'./main-56B5DD5U.js';var de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:false,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=Sx();Gl(0,"po-modal-password-recovery",null,0),Tl(2,"po-button",1),ht("p-click",function(){Ky(p);let d=Fx(1);return Xy(d.open())}),sg();}},dependencies:[Qt,Po],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Modal Password Recovery Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-modal-password-recovery-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,he,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return i})();var me=(()=>{class i{poDialog=f(Vde);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=true;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:U.All},{label:"Email",value:U.Email},{label:"SMS",value:U.SMS}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email;}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)});}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)});}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l);}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation();}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode();}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed());}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&Yl(Po,5),r&2){let p;uo(p=fo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=Sx();Tl(0,"po-modal-password-recovery",1),ht("p-code-submit",function(d){return Ky(p),n.submitCode(d),Xy(n.changeEvent("p-submit-code"))})("p-submit",function(d){return Ky(p),n.submit(d),Xy(n.changeEvent("p-submit"))}),sg(),Tl(1,"po-button",2),ht("p-click",function(){return n.openPasswordRecoveryModal()}),sg(),Gl(2,"po-divider"),Tl(3,"div",3),Gl(4,"po-info",4)(5,"po-info",5),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"div",3)(10,"po-select",6),ww("ngModelChange",function(d){return Ky(p),sN(n.type,d)||(n.type=d),Xy(d)}),sg(),r0(),Tl(11,"po-input",7),ww("ngModelChange",function(d){return Ky(p),sN(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),Xy(d)}),sg(),r0(),Tl(12,"po-input",8),ww("ngModelChange",function(d){return Ky(p),sN(n.email,d)||(n.email=d),Xy(d)}),sg(),r0(),Tl(13,"po-input",9),ww("ngModelChange",function(d){return Ky(p),sN(n.phoneMask,d)||(n.phoneMask=d),Xy(d)}),sg(),r0(),Tl(14,"po-radio-group",10),ww("ngModelChange",function(d){return Ky(p),sN(n.componentsSize,d)||(n.componentsSize=d),Xy(d)}),sg(),r0(),sg(),Tl(15,"div",3)(16,"po-button",11),ht("p-click",function(){return Ky(p),Fx(8).reset(),Xy(n.restore())}),sg()()();}r&2&&(nw("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),Vp(4),nw("p-value",n.submitEvent),Vp(),nw("p-value",n.event),Vp(5),Ew("ngModel",n.type),nw("p-options",n.typeOptions),o0(),Vp(),Ew("ngModel",n.invalidCodeMessage),o0(),Vp(),Ew("ngModel",n.email),o0(),Vp(),Ew("ngModel",n.phoneMask),o0(),Vp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,O3,Dde,qhe,Yhe,Po],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Modal Password Recovery Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-modal-password-recovery
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-modal-password-recovery-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,me],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&Yl(Po,5),r&2){let p;uo(p=fo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(Tl(0,"po-container")(1,"div",0),Gl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),sg()(),Tl(5,"po-container"),Gl(6,"img",4),Tl(7,"div",0)(8,"p",5),iN(9,"Oops!"),sg(),Tl(10,"p",6),iN(11," Password Recovery Requested by user "),sg(),Tl(12,"po-button",7),ht("p-click",function(){return n.openPasswordRecoveryModal()}),sg()()(),Gl(13,"po-modal-password-recovery",8)),r&2&&(Vp(13),nw("p-type",n.type)("p-url-recovery",n.urlRecovery));},dependencies:[Qt,dc,Yhe,Po],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Modal Password Recovery Request"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-container>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-modal-password-recovery-request"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,xe,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ue],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:false,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do template do po-modal-password-recovery."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoModalPasswordRecoveryComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-modal-password-recovery"),sg(),iN(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),sg(),Tl(18,"p"),iN(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),sg(),Tl(20,"ul")(21,"li"),iN(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),sg(),Tl(23,"li"),iN(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),sg(),Tl(25,"li"),iN(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),sg()(),Tl(27,"p"),iN(28,"A propriedade "),Tl(29,"code"),iN(30,"p-url-recovery"),sg(),iN(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Tl(32,"em"),iN(33,"propriedades"),sg(),iN(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),sg(),Tl(35,"p"),iN(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Tl(37,"code"),iN(38,"p-code-error"),sg(),iN(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Tl(40,"code"),iN(41,"p-code-submit"),sg(),iN(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),sg(),Tl(43,"blockquote")(44,"p"),iN(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),sg()(),Tl(46,"p"),iN(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),Tl(48,"code"),iN(49,"p-submit"),sg(),iN(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),sg(),Tl(51,"blockquote")(52,"p"),iN(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),sg()(),Tl(54,"blockquote")(55,"p"),iN(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),Tl(57,"em"),iN(58,"browser"),sg(),iN(59," (pt, en e es)"),sg()(),Tl(60,"p"),iN(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Tl(62,"em"),iN(63,"assets"),sg(),iN(64," no arquivo "),Tl(65,"strong"),iN(66,"angular.json"),sg(),iN(67," da aplica\xE7\xE3o na seguinte ordem:"),sg(),Tl(68,"pre")(69,"code"),iN(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),sg()()(),Tl(71,"div",6)(72,"h4",7),iN(73,"Seletor"),sg(),Tl(74,"pre",8),iN(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),sg()(),Tl(76,"h4",9),iN(77,"Propriedades"),sg(),Tl(78,"table",10)(79,"tr",11)(80,"th",12),iN(81,"Nome"),sg(),Tl(82,"th",12),iN(83,"Tipo"),sg(),Tl(84,"th",12),iN(85,"Padr\xE3o"),sg(),Tl(86,"th",12),iN(87,"Descri\xE7\xE3o"),sg()(),Tl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),iN(92," p-code-error"),Gl(93,"br"),sg()()(),Tl(94,"td",17)(95,"code",18),iN(96,"string"),sg()(),Tl(97,"td",19),iN(98,"-"),sg(),Tl(99,"td",20)(100,"em")(101,"strong"),iN(102,"(opcional)"),sg()(),Tl(103,"p"),iN(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),sg()()(),Tl(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),iN(109," (p-code-submit)"),Gl(110,"br"),sg()()(),Tl(111,"td",17)(112,"code",23),iN(113,"EventEmitter"),sg()(),Tl(114,"td",19),iN(115,"-"),sg(),Tl(116,"td",20)(117,"em")(118,"strong"),iN(119,"(opcional)"),sg()(),Tl(120,"p"),iN(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),sg(),Tl(122,"blockquote")(123,"p"),iN(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Tl(125,"code"),iN(126,"p-url-recovery"),sg(),iN(127,"."),sg()()()(),Tl(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),iN(132," p-components-size"),Gl(133,"br"),sg()()(),Tl(134,"td",17)(135,"code",18),iN(136,"string"),sg()(),Tl(137,"td",19)(138,"p")(139,"code"),iN(140,"medium"),sg()()(),Tl(141,"td",20)(142,"em")(143,"strong"),iN(144,"(opcional)"),sg()(),Tl(145,"p"),iN(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),sg(),Tl(147,"ul")(148,"li")(149,"code"),iN(150,"small"),sg(),iN(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(152,"li")(153,"code"),iN(154,"medium"),sg(),iN(155,": aplica a medida medium de cada componente."),sg()(),Tl(156,"blockquote")(157,"p"),iN(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(159,"code"),iN(160,"medium"),sg(),iN(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(162,"a",24),iN(163,"po-theme"),sg(),iN(164,"."),sg()()()(),Tl(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),iN(169," p-contact-email"),Gl(170,"br"),sg()()(),Tl(171,"td",17)(172,"code",18),iN(173,"string"),sg()(),Tl(174,"td",19),iN(175,"-"),sg(),Tl(176,"td",20)(177,"em")(178,"strong"),iN(179,"(opcional)"),sg()(),Tl(180,"p"),iN(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),sg()()(),Tl(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),iN(186," p-phone-mask"),Gl(187,"br"),sg()()(),Tl(188,"td",17)(189,"code",18),iN(190,"string"),sg()(),Tl(191,"td",19)(192,"p")(193,"code"),iN(194,"(99) 99999-9999"),sg()()(),Tl(195,"td",20)(196,"em")(197,"strong"),iN(198,"(opcional)"),sg()(),Tl(199,"p"),iN(200,"Defini\xE7\xE3o da mascara do campo de telefone."),sg()()(),Tl(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),iN(205," (p-submit)"),Gl(206,"br"),sg()()(),Tl(207,"td",17)(208,"code",23),iN(209,"EventEmitter"),sg()(),Tl(210,"td",19),iN(211,"-"),sg(),Tl(212,"td",20)(213,"em")(214,"strong"),iN(215,"(opcional)"),sg()(),Tl(216,"p"),iN(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),sg(),Tl(218,"blockquote")(219,"p"),iN(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Tl(221,"code"),iN(222,"p-url-recovery"),sg(),iN(223,"."),sg()()()(),Tl(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),iN(228," p-type"),Gl(229,"br"),sg()()(),Tl(230,"td",17)(231,"code",25),iN(232,"PoModalPasswordRecoveryType"),sg()(),Tl(233,"td",19)(234,"p")(235,"code"),iN(236,"PoModalPasswordRecoveryType.Email"),sg()()(),Tl(237,"td",20)(238,"em")(239,"strong"),iN(240,"(opcional)"),sg()(),Tl(241,"p"),iN(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),sg()()(),Tl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),iN(247," p-url-recovery"),Gl(248,"br"),sg()()(),Tl(249,"td",17)(250,"code",18),iN(251,"string"),sg()(),Tl(252,"td",19),iN(253,"-"),sg(),Tl(254,"td",20)(255,"em")(256,"strong"),iN(257,"(opcional)"),sg()(),Tl(258,"p"),iN(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Tl(260,"code"),iN(261,"p-submit"),sg(),iN(262," e "),Tl(263,"code"),iN(264,"p-submit-code"),sg(),iN(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),sg(),Tl(266,"h3"),iN(267,"Processos"),sg(),Tl(268,"p"),iN(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),Tl(270,"strong"),iN(271,"enviar"),sg(),iN(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Tl(273,"code"),iN(274,"POST"),sg(),iN(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),sg(),Tl(276,"pre")(277,"code"),iN(278,`body {
 email: email,
 retry?: retry
}
`),sg()(),Tl(279,"h4"),iN(280,"Recupera\xE7\xE3o por email"),sg(),Tl(281,"p"),iN(282,"Para a recupera\xE7\xE3o de senha por "),Tl(283,"strong"),iN(284,"email"),sg(),iN(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),Tl(286,"code"),iN(287,"204"),sg(),iN(288,"."),sg(),Tl(289,"p"),iN(290,"Em caso de "),Tl(291,"strong"),iN(292,"sucesso"),sg(),iN(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),sg(),Tl(294,"blockquote")(295,"p"),iN(296,"A a\xE7\xE3o "),Tl(297,"strong"),iN(298,"Reenviar"),sg(),iN(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Tl(300,"strong"),iN(301,"retry"),sg(),iN(302,"."),sg()(),Tl(303,"p")(304,"em"),iN(305,"Processo finalizado."),sg()(),Tl(306,"h4"),iN(307,"Recupera\xE7\xE3o por SMS"),sg(),Tl(308,"p"),iN(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),Tl(310,"strong"),iN(311,"SMS"),sg(),iN(312,", o c\xF3digo de status de sucesso deve ser "),Tl(313,"code"),iN(314,"200"),sg(),iN(315,`.
Em caso de `),Tl(316,"strong"),iN(317,"sucesso"),sg(),iN(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),sg(),Tl(319,"pre")(320,"code"),iN(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),sg()(),Tl(322,"ul")(323,"li"),iN(324,"O "),Tl(325,"strong"),iN(326,"hash"),sg(),iN(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),sg(),Tl(328,"li")(329,"strong"),iN(330,"urlValidationCode"),sg(),iN(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),sg()(),Tl(332,"blockquote")(333,"p"),iN(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),Tl(335,"code"),iN(336,"<p-url-recovery>/validation"),sg(),iN(337,"."),sg()(),Tl(338,"h4"),iN(339,"Valida\xE7\xE3o do c\xF3digo SMS"),sg(),Tl(340,"p"),iN(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),Tl(342,"strong"),iN(343,"continuar"),sg(),iN(344,", o componente far\xE1 uma requisi\xE7\xE3o "),Tl(345,"code"),iN(346,"POST"),sg(),iN(347," contendo:"),sg(),Tl(348,"pre")(349,"code"),iN(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),sg()(),Tl(351,"p"),iN(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Tl(353,"code"),iN(354,"200"),sg(),iN(355,"."),sg(),Tl(356,"p"),iN(357,"Em caso de "),Tl(358,"strong"),iN(359,"erro"),sg(),iN(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),sg(),Tl(361,"blockquote")(362,"p"),iN(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),Tl(364,"code"),iN(365,"p-code-error"),sg(),iN(366," conforme retorno abaixo:"),sg()(),Tl(367,"pre")(368,"code"),iN(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),sg()(),Tl(370,"p"),iN(371,"Em caso de "),Tl(372,"strong"),iN(373,"sucesso"),sg(),iN(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),sg(),Tl(375,"pre")(376,"code"),iN(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),sg()(),Tl(378,"ul")(379,"li")(380,"strong"),iN(381,"token"),sg(),iN(382,": Token de altera\xE7\xE3o de senha;"),sg(),Tl(383,"li")(384,"strong"),iN(385,"urlChangePassword"),sg(),iN(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),sg()(),Tl(387,"p"),iN(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),Tl(389,"code"),iN(390,"urlChangePassword"),sg(),iN(391,"."),sg(),Tl(392,"blockquote")(393,"p"),iN(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Tl(395,"code"),iN(396,"<p-url-recovery>/changePassword?token=<token>"),sg(),iN(397,"."),sg()(),Tl(398,"p")(399,"em"),iN(400,"Processo finalizado."),sg()()()()(),Tl(401,"h3",9),iN(402,"M\xE9todos"),sg(),Tl(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),iN(409," completed "),sg()()()()(),Tl(410,"tr",20)(411,"td",20)(412,"p"),iN(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),sg(),Tl(414,"blockquote")(415,"p"),iN(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),sg()()()()(),Gl(417,"br"),Tl(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),iN(424," open "),sg()()()()(),Tl(425,"tr",20)(426,"td",20)(427,"p"),iN(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),sg()()()(),Gl(429,"br"),Tl(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),iN(436," openConfirmation "),sg()()()()(),Tl(437,"tr",20)(438,"td",20)(439,"p"),iN(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),sg()()()(),Gl(441,"br"),Tl(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),iN(448," openSmsCode "),sg()()()()(),Tl(449,"tr",20)(450,"td",20)(451,"p"),iN(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),sg()()()(),Gl(453,"br"),Tl(454,"h3"),iN(455,"Interfaces"),sg(),Tl(456,"h4",28)(457,"code",5),iN(458,"PoModalPasswordRecovery"),sg()(),Tl(459,"div",2)(460,"p"),iN(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Tl(462,"code"),iN(463,"po-modal-password-recovery"),sg(),iN(464,"."),sg()(),Tl(465,"h4",9),iN(466,"Propriedades"),sg(),Tl(467,"table",10)(468,"tr",11)(469,"th",12),iN(470,"Nome"),sg(),Tl(471,"th",12),iN(472,"Tipo"),sg(),Tl(473,"th",12),iN(474,"Descri\xE7\xE3o"),sg()(),Tl(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),iN(479," code"),Gl(480,"br"),sg()()(),Tl(481,"td",17)(482,"code",18),iN(483,"string"),sg()(),Tl(484,"td",20)(485,"em")(486,"strong"),iN(487,"(opcional)"),sg()(),Tl(488,"p"),iN(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),sg()()(),Tl(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),iN(494," email"),Gl(495,"br"),sg()()(),Tl(496,"td",17)(497,"code",18),iN(498,"string"),sg()(),Tl(499,"td",20)(500,"em")(501,"strong"),iN(502,"(opcional)"),sg()(),Tl(503,"p"),iN(504,"Valor contendo o email enviado pelo usu\xE1rio."),sg()()(),Tl(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),iN(509," hash"),Gl(510,"br"),sg()()(),Tl(511,"td",17)(512,"code",18),iN(513,"string"),sg()(),Tl(514,"td",20)(515,"em")(516,"strong"),iN(517,"(opcional)"),sg()(),Tl(518,"p"),iN(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),sg()()(),Tl(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),iN(524," retry"),Gl(525,"br"),sg()()(),Tl(526,"td",17)(527,"code",29),iN(528,"number"),sg()(),Tl(529,"td",20)(530,"em")(531,"strong"),iN(532,"(opcional)"),sg()(),Tl(533,"p"),iN(534,"N\xFAmero de tentativas de reenvio."),sg()()(),Tl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),iN(539," sms"),Gl(540,"br"),sg()()(),Tl(541,"td",17)(542,"code",18),iN(543,"string"),sg()(),Tl(544,"td",20)(545,"em")(546,"strong"),iN(547,"(opcional)"),sg()(),Tl(548,"p"),iN(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),sg()()(),Tl(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),iN(554," token"),Gl(555,"br"),sg()()(),Tl(556,"td",17)(557,"code",18),iN(558,"string"),sg()(),Tl(559,"td",20)(560,"em")(561,"strong"),iN(562,"(opcional)"),sg()(),Tl(563,"p"),iN(564,"Token de altera\xE7\xE3o de senha"),sg()()(),Tl(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),iN(569," urlChangePassword"),Gl(570,"br"),sg()()(),Tl(571,"td",17)(572,"code",18),iN(573,"string"),sg()(),Tl(574,"td",20)(575,"em")(576,"strong"),iN(577,"(opcional)"),sg()(),Tl(578,"p"),iN(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),sg()()(),Tl(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),iN(584," urlValidationCode"),Gl(585,"br"),sg()()(),Tl(586,"td",17)(587,"code",18),iN(588,"string"),sg()(),Tl(589,"td",20)(590,"em")(591,"strong"),iN(592,"(opcional)"),sg()(),Tl(593,"p"),iN(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),sg()()()(),Tl(595,"h3"),iN(596,"Enums"),sg(),Tl(597,"h4",4)(598,"code",5),iN(599,"PoModalPasswordRecoveryType"),sg()(),Tl(600,"div",2)(601,"p")(602,"em"),iN(603,"Enum"),sg(),iN(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),sg()(),Tl(605,"h4",9),iN(606,"Propriedades"),sg(),Tl(607,"table",10)(608,"tr",11)(609,"th",12),iN(610,"Nome"),sg(),Tl(611,"th",12),iN(612,"Descri\xE7\xE3o"),sg()(),Tl(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),iN(617," All"),Gl(618,"br"),sg()()(),Tl(619,"td",20)(620,"p"),iN(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),sg()()(),Tl(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),iN(626," Email"),Gl(627,"br"),sg()()(),Tl(628,"td",20)(629,"p"),iN(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),sg()()(),Tl(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),iN(635," SMS"),Gl(636,"br"),sg()()(),Tl(637,"td",20)(638,"p"),iN(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-modal-password-recovery-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),sg()()()),r&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[lNe,Wme,jme,pe,ce,Ee,ve],encapsulation:2,changeDetection:1})}return i})();var _e=[{path:"",component:Se}],ge=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[DL.forChild(_e),DL]})}return i})();var rt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ar,ge]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};