import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,by as vle,bz as Ye,aK as Pe,bA as Lc,al as lx,N as Ul,J as wl,a1 as ut,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,aO as Yo,bB as ga,ai as ya,bC as Vp,az as Qy,aA as Jy,am as pw,an as $0,ap as hw,aq as G0,as as $l,at as uo,au as fo,ah as uo$1,a3 as D3,aX as _x,aB as $x}from'./main-6SPFG3VI.js';var pe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:false,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=lx();Ul(0,"po-modal-password-recovery",null,0),wl(2,"po-button",1),ut("p-click",function(){Qy(p);let s=_x(1);return Jy(s.open())}),ng();}},dependencies:[Pe,Lc],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Modal Password Recovery Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-modal-password-recovery-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return i})();var ue=(()=>{class i{poDialog=f(vle);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=true;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:Ye.All},{label:"Email",value:Ye.Email},{label:"SMS",value:Ye.SMS}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=Ye.Email;}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)});}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)});}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l);}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation();}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode();}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed());}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&$l(Lc,5),r&2){let p;uo(p=fo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=lx();wl(0,"po-modal-password-recovery",1),ut("p-code-submit",function(s){return Qy(p),n.submitCode(s),Jy(n.changeEvent("p-submit-code"))})("p-submit",function(s){return Qy(p),n.submit(s),Jy(n.changeEvent("p-submit"))}),ng(),wl(1,"po-button",2),ut("p-click",function(){return n.openPasswordRecoveryModal()}),ng(),Ul(2,"po-divider"),wl(3,"div",3),Ul(4,"po-info",4)(5,"po-info",5),ng(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"div",3)(10,"po-select",6),pw("ngModelChange",function(s){return Qy(p),$x(n.type,s)||(n.type=s),Jy(s)}),ng(),$0(),wl(11,"po-input",7),pw("ngModelChange",function(s){return Qy(p),$x(n.invalidCodeMessage,s)||(n.invalidCodeMessage=s),Jy(s)}),ng(),$0(),wl(12,"po-input",8),pw("ngModelChange",function(s){return Qy(p),$x(n.email,s)||(n.email=s),Jy(s)}),ng(),$0(),wl(13,"po-input",9),pw("ngModelChange",function(s){return Qy(p),$x(n.phoneMask,s)||(n.phoneMask=s),Jy(s)}),ng(),$0(),wl(14,"po-radio-group",10),pw("ngModelChange",function(s){return Qy(p),$x(n.componentsSize,s)||(n.componentsSize=s),Jy(s)}),ng(),$0(),ng(),wl(15,"div",3)(16,"po-button",11),ut("p-click",function(){return Qy(p),_x(8).reset(),Jy(n.restore())}),ng()()();}r&2&&(YE("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),Pp(4),YE("p-value",n.submitEvent),Pp(),YE("p-value",n.event),Pp(5),hw("ngModel",n.type),YE("p-options",n.typeOptions),G0(),Pp(),hw("ngModel",n.invalidCodeMessage),G0(),Pp(),hw("ngModel",n.email),G0(),Pp(),hw("ngModel",n.phoneMask),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ga,ya,Vp,Lc],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Modal Password Recovery Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-modal-password-recovery
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-modal-password-recovery-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,xe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return i})();var ve=(()=>{class i{poModalPasswordRecovery;type=Ye.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&$l(Lc,5),r&2){let p;uo(p=fo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(wl(0,"po-container")(1,"div",0),Ul(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),ng()(),wl(5,"po-container"),Ul(6,"img",4),wl(7,"div",0)(8,"p",5),Ux(9,"Oops!"),ng(),wl(10,"p",6),Ux(11," Password Recovery Requested by user "),ng(),wl(12,"po-button",7),ut("p-click",function(){return n.openPasswordRecoveryModal()}),ng()()(),Ul(13,"po-modal-password-recovery",8)),r&2&&(Pp(13),YE("p-type",n.type)("p-url-recovery",n.urlRecovery));},dependencies:[Pe,uo$1,Vp,Lc],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),Se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Modal Password Recovery Request"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container>
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-modal-password-recovery-request"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_e,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ve],encapsulation:2})}return i})();var ye=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:false,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do template do po-modal-password-recovery."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoModalPasswordRecoveryComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-modal-password-recovery"),ng(),Ux(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),ng(),wl(18,"p"),Ux(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),ng(),wl(20,"ul")(21,"li"),Ux(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),ng(),wl(23,"li"),Ux(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),ng(),wl(25,"li"),Ux(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),ng()(),wl(27,"p"),Ux(28,"A propriedade "),wl(29,"code"),Ux(30,"p-url-recovery"),ng(),Ux(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),wl(32,"em"),Ux(33,"propriedades"),ng(),Ux(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),ng(),wl(35,"p"),Ux(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),wl(37,"code"),Ux(38,"p-code-error"),ng(),Ux(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),wl(40,"code"),Ux(41,"p-code-submit"),ng(),Ux(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),ng(),wl(43,"blockquote")(44,"p"),Ux(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),ng()(),wl(46,"p"),Ux(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),wl(48,"code"),Ux(49,"p-submit"),ng(),Ux(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),ng(),wl(51,"blockquote")(52,"p"),Ux(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),ng()(),wl(54,"blockquote")(55,"p"),Ux(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),wl(57,"em"),Ux(58,"browser"),ng(),Ux(59," (pt, en e es)"),ng()(),wl(60,"p"),Ux(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),wl(62,"em"),Ux(63,"assets"),ng(),Ux(64," no arquivo "),wl(65,"strong"),Ux(66,"angular.json"),ng(),Ux(67," da aplica\xE7\xE3o na seguinte ordem:"),ng(),wl(68,"pre")(69,"code"),Ux(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),ng()()(),wl(71,"div",6)(72,"h4",7),Ux(73,"Seletor"),ng(),wl(74,"pre",8),Ux(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),ng()(),wl(76,"h4",9),Ux(77,"Propriedades"),ng(),wl(78,"table",10)(79,"tr",11)(80,"th",12),Ux(81,"Nome"),ng(),wl(82,"th",12),Ux(83,"Tipo"),ng(),wl(84,"th",12),Ux(85,"Padr\xE3o"),ng(),wl(86,"th",12),Ux(87,"Descri\xE7\xE3o"),ng()(),wl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),Ux(92," p-code-error"),Ul(93,"br"),ng()()(),wl(94,"td",17)(95,"code",18),Ux(96,"string"),ng()(),wl(97,"td",19),Ux(98,"-"),ng(),wl(99,"td",20)(100,"em")(101,"strong"),Ux(102,"(opcional)"),ng()(),wl(103,"p"),Ux(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),ng()()(),wl(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),Ux(109," (p-code-submit)"),Ul(110,"br"),ng()()(),wl(111,"td",17)(112,"code",23),Ux(113,"EventEmitter"),ng()(),wl(114,"td",19),Ux(115,"-"),ng(),wl(116,"td",20)(117,"em")(118,"strong"),Ux(119,"(opcional)"),ng()(),wl(120,"p"),Ux(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),ng(),wl(122,"blockquote")(123,"p"),Ux(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),wl(125,"code"),Ux(126,"p-url-recovery"),ng(),Ux(127,"."),ng()()()(),wl(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),Ux(132," p-components-size"),Ul(133,"br"),ng()()(),wl(134,"td",17)(135,"code",18),Ux(136,"string"),ng()(),wl(137,"td",19)(138,"p")(139,"code"),Ux(140,"medium"),ng()()(),wl(141,"td",20)(142,"em")(143,"strong"),Ux(144,"(opcional)"),ng()(),wl(145,"p"),Ux(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),ng(),wl(147,"ul")(148,"li")(149,"code"),Ux(150,"small"),ng(),Ux(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(152,"li")(153,"code"),Ux(154,"medium"),ng(),Ux(155,": aplica a medida medium de cada componente."),ng()(),wl(156,"blockquote")(157,"p"),Ux(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(159,"code"),Ux(160,"medium"),ng(),Ux(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(162,"a",24),Ux(163,"po-theme"),ng(),Ux(164,"."),ng()()()(),wl(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),Ux(169," p-contact-email"),Ul(170,"br"),ng()()(),wl(171,"td",17)(172,"code",18),Ux(173,"string"),ng()(),wl(174,"td",19),Ux(175,"-"),ng(),wl(176,"td",20)(177,"em")(178,"strong"),Ux(179,"(opcional)"),ng()(),wl(180,"p"),Ux(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),ng()()(),wl(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),Ux(186," p-phone-mask"),Ul(187,"br"),ng()()(),wl(188,"td",17)(189,"code",18),Ux(190,"string"),ng()(),wl(191,"td",19)(192,"p")(193,"code"),Ux(194,"(99) 99999-9999"),ng()()(),wl(195,"td",20)(196,"em")(197,"strong"),Ux(198,"(opcional)"),ng()(),wl(199,"p"),Ux(200,"Defini\xE7\xE3o da mascara do campo de telefone."),ng()()(),wl(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),Ux(205," (p-submit)"),Ul(206,"br"),ng()()(),wl(207,"td",17)(208,"code",23),Ux(209,"EventEmitter"),ng()(),wl(210,"td",19),Ux(211,"-"),ng(),wl(212,"td",20)(213,"em")(214,"strong"),Ux(215,"(opcional)"),ng()(),wl(216,"p"),Ux(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),ng(),wl(218,"blockquote")(219,"p"),Ux(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),wl(221,"code"),Ux(222,"p-url-recovery"),ng(),Ux(223,"."),ng()()()(),wl(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),Ux(228," p-type"),Ul(229,"br"),ng()()(),wl(230,"td",17)(231,"code",25),Ux(232,"PoModalPasswordRecoveryType"),ng()(),wl(233,"td",19)(234,"p")(235,"code"),Ux(236,"PoModalPasswordRecoveryType.Email"),ng()()(),wl(237,"td",20)(238,"em")(239,"strong"),Ux(240,"(opcional)"),ng()(),wl(241,"p"),Ux(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),ng()()(),wl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),Ux(247," p-url-recovery"),Ul(248,"br"),ng()()(),wl(249,"td",17)(250,"code",18),Ux(251,"string"),ng()(),wl(252,"td",19),Ux(253,"-"),ng(),wl(254,"td",20)(255,"em")(256,"strong"),Ux(257,"(opcional)"),ng()(),wl(258,"p"),Ux(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),wl(260,"code"),Ux(261,"p-submit"),ng(),Ux(262," e "),wl(263,"code"),Ux(264,"p-submit-code"),ng(),Ux(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),ng(),wl(266,"h3"),Ux(267,"Processos"),ng(),wl(268,"p"),Ux(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),wl(270,"strong"),Ux(271,"enviar"),ng(),Ux(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),wl(273,"code"),Ux(274,"POST"),ng(),Ux(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),ng(),wl(276,"pre")(277,"code"),Ux(278,`body {
 email: email,
 retry?: retry
}
`),ng()(),wl(279,"h4"),Ux(280,"Recupera\xE7\xE3o por email"),ng(),wl(281,"p"),Ux(282,"Para a recupera\xE7\xE3o de senha por "),wl(283,"strong"),Ux(284,"email"),ng(),Ux(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),wl(286,"code"),Ux(287,"204"),ng(),Ux(288,"."),ng(),wl(289,"p"),Ux(290,"Em caso de "),wl(291,"strong"),Ux(292,"sucesso"),ng(),Ux(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),ng(),wl(294,"blockquote")(295,"p"),Ux(296,"A a\xE7\xE3o "),wl(297,"strong"),Ux(298,"Reenviar"),ng(),Ux(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),wl(300,"strong"),Ux(301,"retry"),ng(),Ux(302,"."),ng()(),wl(303,"p")(304,"em"),Ux(305,"Processo finalizado."),ng()(),wl(306,"h4"),Ux(307,"Recupera\xE7\xE3o por SMS"),ng(),wl(308,"p"),Ux(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),wl(310,"strong"),Ux(311,"SMS"),ng(),Ux(312,", o c\xF3digo de status de sucesso deve ser "),wl(313,"code"),Ux(314,"200"),ng(),Ux(315,`.
Em caso de `),wl(316,"strong"),Ux(317,"sucesso"),ng(),Ux(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),ng(),wl(319,"pre")(320,"code"),Ux(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),ng()(),wl(322,"ul")(323,"li"),Ux(324,"O "),wl(325,"strong"),Ux(326,"hash"),ng(),Ux(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),ng(),wl(328,"li")(329,"strong"),Ux(330,"urlValidationCode"),ng(),Ux(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),ng()(),wl(332,"blockquote")(333,"p"),Ux(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),wl(335,"code"),Ux(336,"<p-url-recovery>/validation"),ng(),Ux(337,"."),ng()(),wl(338,"h4"),Ux(339,"Valida\xE7\xE3o do c\xF3digo SMS"),ng(),wl(340,"p"),Ux(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),wl(342,"strong"),Ux(343,"continuar"),ng(),Ux(344,", o componente far\xE1 uma requisi\xE7\xE3o "),wl(345,"code"),Ux(346,"POST"),ng(),Ux(347," contendo:"),ng(),wl(348,"pre")(349,"code"),Ux(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),ng()(),wl(351,"p"),Ux(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),wl(353,"code"),Ux(354,"200"),ng(),Ux(355,"."),ng(),wl(356,"p"),Ux(357,"Em caso de "),wl(358,"strong"),Ux(359,"erro"),ng(),Ux(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),ng(),wl(361,"blockquote")(362,"p"),Ux(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),wl(364,"code"),Ux(365,"p-code-error"),ng(),Ux(366," conforme retorno abaixo:"),ng()(),wl(367,"pre")(368,"code"),Ux(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),ng()(),wl(370,"p"),Ux(371,"Em caso de "),wl(372,"strong"),Ux(373,"sucesso"),ng(),Ux(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),ng(),wl(375,"pre")(376,"code"),Ux(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),ng()(),wl(378,"ul")(379,"li")(380,"strong"),Ux(381,"token"),ng(),Ux(382,": Token de altera\xE7\xE3o de senha;"),ng(),wl(383,"li")(384,"strong"),Ux(385,"urlChangePassword"),ng(),Ux(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),ng()(),wl(387,"p"),Ux(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),wl(389,"code"),Ux(390,"urlChangePassword"),ng(),Ux(391,"."),ng(),wl(392,"blockquote")(393,"p"),Ux(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),wl(395,"code"),Ux(396,"<p-url-recovery>/changePassword?token=<token>"),ng(),Ux(397,"."),ng()(),wl(398,"p")(399,"em"),Ux(400,"Processo finalizado."),ng()()()()(),wl(401,"h3",9),Ux(402,"M\xE9todos"),ng(),wl(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),Ux(409," completed "),ng()()()()(),wl(410,"tr",20)(411,"td",20)(412,"p"),Ux(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),ng(),wl(414,"blockquote")(415,"p"),Ux(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),ng()()()()(),Ul(417,"br"),wl(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),Ux(424," open "),ng()()()()(),wl(425,"tr",20)(426,"td",20)(427,"p"),Ux(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),ng()()()(),Ul(429,"br"),wl(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),Ux(436," openConfirmation "),ng()()()()(),wl(437,"tr",20)(438,"td",20)(439,"p"),Ux(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),ng()()()(),Ul(441,"br"),wl(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),Ux(448," openSmsCode "),ng()()()()(),wl(449,"tr",20)(450,"td",20)(451,"p"),Ux(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),ng()()()(),Ul(453,"br"),wl(454,"h3"),Ux(455,"Interfaces"),ng(),wl(456,"h4",28)(457,"code",5),Ux(458,"PoModalPasswordRecovery"),ng()(),wl(459,"div",2)(460,"p"),Ux(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),wl(462,"code"),Ux(463,"po-modal-password-recovery"),ng(),Ux(464,"."),ng()(),wl(465,"h4",9),Ux(466,"Propriedades"),ng(),wl(467,"table",10)(468,"tr",11)(469,"th",12),Ux(470,"Nome"),ng(),wl(471,"th",12),Ux(472,"Tipo"),ng(),wl(473,"th",12),Ux(474,"Descri\xE7\xE3o"),ng()(),wl(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),Ux(479," code"),Ul(480,"br"),ng()()(),wl(481,"td",17)(482,"code",18),Ux(483,"string"),ng()(),wl(484,"td",20)(485,"em")(486,"strong"),Ux(487,"(opcional)"),ng()(),wl(488,"p"),Ux(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),ng()()(),wl(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),Ux(494," email"),Ul(495,"br"),ng()()(),wl(496,"td",17)(497,"code",18),Ux(498,"string"),ng()(),wl(499,"td",20)(500,"em")(501,"strong"),Ux(502,"(opcional)"),ng()(),wl(503,"p"),Ux(504,"Valor contendo o email enviado pelo usu\xE1rio."),ng()()(),wl(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),Ux(509," hash"),Ul(510,"br"),ng()()(),wl(511,"td",17)(512,"code",18),Ux(513,"string"),ng()(),wl(514,"td",20)(515,"em")(516,"strong"),Ux(517,"(opcional)"),ng()(),wl(518,"p"),Ux(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),ng()()(),wl(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),Ux(524," retry"),Ul(525,"br"),ng()()(),wl(526,"td",17)(527,"code",29),Ux(528,"number"),ng()(),wl(529,"td",20)(530,"em")(531,"strong"),Ux(532,"(opcional)"),ng()(),wl(533,"p"),Ux(534,"N\xFAmero de tentativas de reenvio."),ng()()(),wl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),Ux(539," sms"),Ul(540,"br"),ng()()(),wl(541,"td",17)(542,"code",18),Ux(543,"string"),ng()(),wl(544,"td",20)(545,"em")(546,"strong"),Ux(547,"(opcional)"),ng()(),wl(548,"p"),Ux(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),ng()()(),wl(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),Ux(554," token"),Ul(555,"br"),ng()()(),wl(556,"td",17)(557,"code",18),Ux(558,"string"),ng()(),wl(559,"td",20)(560,"em")(561,"strong"),Ux(562,"(opcional)"),ng()(),wl(563,"p"),Ux(564,"Token de altera\xE7\xE3o de senha"),ng()()(),wl(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),Ux(569," urlChangePassword"),Ul(570,"br"),ng()()(),wl(571,"td",17)(572,"code",18),Ux(573,"string"),ng()(),wl(574,"td",20)(575,"em")(576,"strong"),Ux(577,"(opcional)"),ng()(),wl(578,"p"),Ux(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),ng()()(),wl(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),Ux(584," urlValidationCode"),Ul(585,"br"),ng()()(),wl(586,"td",17)(587,"code",18),Ux(588,"string"),ng()(),wl(589,"td",20)(590,"em")(591,"strong"),Ux(592,"(opcional)"),ng()(),wl(593,"p"),Ux(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),ng()()()(),wl(595,"h3"),Ux(596,"Enums"),ng(),wl(597,"h4",4)(598,"code",5),Ux(599,"PoModalPasswordRecoveryType"),ng()(),wl(600,"div",2)(601,"p")(602,"em"),Ux(603,"Enum"),ng(),Ux(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),ng()(),wl(605,"h4",9),Ux(606,"Propriedades"),ng(),wl(607,"table",10)(608,"tr",11)(609,"th",12),Ux(610,"Nome"),ng(),wl(611,"th",12),Ux(612,"Descri\xE7\xE3o"),ng()(),wl(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),Ux(617," All"),Ul(618,"br"),ng()()(),wl(619,"td",20)(620,"p"),Ux(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),ng()()(),wl(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),Ux(626," Email"),Ul(627,"br"),ng()()(),wl(628,"td",20)(629,"p"),Ux(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),ng()()(),wl(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),Ux(635," SMS"),Ul(636,"br"),ng()()(),wl(637,"td",20)(638,"p"),Ux(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var ge=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-modal-password-recovery-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),ng()()()),r&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ce,Ee,Se,ye],encapsulation:2})}return i})();var De=[{path:"",component:ge}],he=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(De),vL]})}return i})();var vt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,he]})}return i})();export{vt as DocPoModalPasswordRecoveryModule};