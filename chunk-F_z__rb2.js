import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,c9 as Qde,ca as U,a$ as Qt,cb as Co,aB as gx,R as Hl,Q as Cl,a1 as dt,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,b3 as q3,cc as Nde,aJ as nme,cd as sme,aD as Jy,aE as e_,aM as gw,aN as Z0,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,aI as gc,a3 as SNe,bc as Sx,aT as Zx}from'./main-OS7VVRJY.js';var de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic"]],standalone:false,decls:3,vars:0,consts:[["passwordRecoveryModal",""],["p-label","Open modal password recovery",3,"p-click"]],template:function(r,n){if(r&1){let p=gx();Hl(0,"po-modal-password-recovery",null,0),Cl(2,"po-button",1),dt("p-click",function(){Jy(p);let d=Sx(1);return e_(d.open())}),og();}},dependencies:[Qt,Co],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Modal Password Recovery Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-modal-password-recovery #passwordRecoveryModal></po-modal-password-recovery>

<po-button p-label="Open modal password recovery" (p-click)="passwordRecoveryModal.open()"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-modal-password-recovery-basic/sample-po-modal-password-recovery-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-password-recovery-basic',
  templateUrl: './sample-po-modal-password-recovery-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalPasswordRecoveryBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-modal-password-recovery-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return i})();var me=(()=>{class i{poDialog=f(Qde);poModalPasswordRecovery;codeError;componentsSize;email;event;invalidCode=true;invalidCodeMessage;phoneMask;submitEvent;type;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"All",value:U.All},{label:"Email",value:U.Email},{label:"SMS",value:U.SMS}];ngOnInit(){this.restore();}changeEvent(l){this.event=l;}openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}restore(){this.codeError=void 0,this.componentsSize="medium",this.email=void 0,this.event=void 0,this.phoneMask=void 0,this.submitEvent=void 0,this.type=U.Email;}submit(l){this.poDialog.alert({title:"Change Password Requested By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.advanceModal(l)});}submitCode(l){this.poDialog.alert({title:"Emitted SMS Code By User",message:`Submitted Object: ${JSON.stringify(l)}`,ok:()=>this.resendCode(l)});}advanceModal(l){l.hasOwnProperty("sms")?this.openSmsCode(l):this.openConfirmation(l);}openConfirmation(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openConfirmation();}openSmsCode(l){this.submitEvent=JSON.stringify(l),this.poModalPasswordRecovery.openSmsCode();}resendCode(l){this.submitEvent=JSON.stringify(event),this.invalidCode&&this.invalidCodeMessage?(this.invalidCode=!this.invalidCode,this.codeError=this.invalidCodeMessage,this.poModalPasswordRecovery.openSmsCode()):(this.codeError=void 0,this.invalidCode=!this.invalidCode,this.poModalPasswordRecovery.completed());}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs"]],viewQuery:function(r,n){if(r&1&&zl(Co,5),r&2){let p;uo(p=fo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:17,vars:14,consts:[["f","ngForm"],[3,"p-code-submit","p-submit","p-code-error","p-components-size","p-contact-email","p-phone-mask","p-type"],["p-label","Open modal password recovery",3,"p-click"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","invalidCodeMessage","p-clean","","p-label","Code Error","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-maxlength","30","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","phoneMask","p-clean","","p-label","Phone Mask","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let p=gx();Cl(0,"po-modal-password-recovery",1),dt("p-code-submit",function(d){return Jy(p),n.submitCode(d),e_(n.changeEvent("p-submit-code"))})("p-submit",function(d){return Jy(p),n.submit(d),e_(n.changeEvent("p-submit"))}),og(),Cl(1,"po-button",2),dt("p-click",function(){return n.openPasswordRecoveryModal()}),og(),Hl(2,"po-divider"),Cl(3,"div",3),Hl(4,"po-info",4)(5,"po-info",5),og(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"div",3)(10,"po-select",6),gw("ngModelChange",function(d){return Jy(p),Zx(n.type,d)||(n.type=d),e_(d)}),og(),Z0(),Cl(11,"po-input",7),gw("ngModelChange",function(d){return Jy(p),Zx(n.invalidCodeMessage,d)||(n.invalidCodeMessage=d),e_(d)}),og(),Z0(),Cl(12,"po-input",8),gw("ngModelChange",function(d){return Jy(p),Zx(n.email,d)||(n.email=d),e_(d)}),og(),Z0(),Cl(13,"po-input",9),gw("ngModelChange",function(d){return Jy(p),Zx(n.phoneMask,d)||(n.phoneMask=d),e_(d)}),og(),Z0(),Cl(14,"po-radio-group",10),gw("ngModelChange",function(d){return Jy(p),Zx(n.componentsSize,d)||(n.componentsSize=d),e_(d)}),og(),Z0(),og(),Cl(15,"div",3)(16,"po-button",11),dt("p-click",function(){return Jy(p),Sx(8).reset(),e_(n.restore())}),og()()();}r&2&&(ZE("p-code-error",n.codeError)("p-components-size",n.componentsSize)("p-contact-email",n.email)("p-phone-mask",n.phoneMask)("p-type",n.type),Lp(4),ZE("p-value",n.submitEvent),Lp(),ZE("p-value",n.event),Lp(5),pw("ngModel",n.type),ZE("p-options",n.typeOptions),X0(),Lp(),pw("ngModel",n.invalidCodeMessage),X0(),Lp(),pw("ngModel",n.email),X0(),Lp(),pw("ngModel",n.phoneMask),X0(),Lp(),pw("ngModel",n.componentsSize),ZE("p-options",n.componentsSizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Nde,nme,sme,Co],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Modal Password Recovery Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-modal-password-recovery
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-modal-password-recovery-labs/sample-po-modal-password-recovery-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-modal-password-recovery-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return i})();var ue=(()=>{class i{poModalPasswordRecovery;type=U.All;urlRecovery="https://po-sample-api.onrender.com/v1/users";openPasswordRecoveryModal(){this.poModalPasswordRecovery.open();}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request"]],viewQuery:function(r,n){if(r&1&&zl(Co,5),r&2){let p;uo(p=fo())&&(n.poModalPasswordRecovery=p.first);}},standalone:false,decls:14,vars:2,consts:[[1,"po-row"],["p-label","Data Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Data Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Data SMS Code","p-value","999999",1,"po-md-2"],["src","./assets/images/expired.svg",1,"po-page-blocked-user-image","po-mb-5","po-mt-5"],[1,"po-font-title","po-text-center","po-md-12","po-mb-2"],[1,"po-font-text","po-text-center","po-md-12","po-mb-5","po-text-color-neutral-dark-40"],["p-label","Forgot your password?","p-kind","primary",1,"po-mb-5","po-offset-md-3","po-md-6","po-offset-lg-4","po-lg-4","po-offset-xl-4","po-xl-4",3,"p-click"],[3,"p-type","p-url-recovery"]],template:function(r,n){r&1&&(Cl(0,"po-container")(1,"div",0),Hl(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),og()(),Cl(5,"po-container"),Hl(6,"img",4),Cl(7,"div",0)(8,"p",5),qx(9,"Oops!"),og(),Cl(10,"p",6),qx(11," Password Recovery Requested by user "),og(),Cl(12,"po-button",7),dt("p-click",function(){return n.openPasswordRecoveryModal()}),og()()(),Hl(13,"po-modal-password-recovery",8)),r&2&&(Lp(13),ZE("p-type",n.type)("p-url-recovery",n.urlRecovery));},dependencies:[Qt,gc,sme,Co],encapsulation:2,changeDetection:1})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-request-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Modal Password Recovery Request"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-modal-password-recovery-request/sample-po-modal-password-recovery-request.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-modal-password-recovery-request"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,xe,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return i})();var ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-modal-password-recovery-doc"]],standalone:false,decls:640,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do template do po-modal-password-recovery."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoModalPasswordRecoveryComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-modal-password-recovery"),og(),qx(17," \xE9 utilizado como template para solicita\xE7\xE3o de troca de senha."),og(),Cl(18,"p"),qx(19,"\xC9 composto por uma modal que possui tr\xEAs telas, cada uma com as seguintes caracter\xEDsticas:"),og(),Cl(20,"ul")(21,"li"),qx(22,"A primeira possui campos para preenchimento de email ou n\xFAmero de telefone;"),og(),Cl(23,"li"),qx(24,"Tela com campo para preenchimento de c\xF3digo SMS enviado para o n\xFAmero de telefone enviado;"),og(),Cl(25,"li"),qx(26,"A terceira se trata de uma confirma\xE7\xE3o de envio de link para a caixa de email do usu\xE1rio."),og()(),Cl(27,"p"),qx(28,"A propriedade "),Cl(29,"code"),qx(30,"p-url-recovery"),og(),qx(31,` automatiza a rotina do componente e simplifica o processo
para recupera\xE7\xE3o de senha, bastando definir uma url para requisi\xE7\xE3o dos recursos.
Seu detalhamento para uso pode ser visto logo abaixo em `),Cl(32,"em"),qx(33,"propriedades"),og(),qx(34,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),og(),Cl(35,"p"),qx(36,`Para a modal de digita\xE7\xE3o de c\xF3digo SMS, \xE9 poss\xEDvel definir uma mensagem de erro
customizada com a propriedade `),Cl(37,"code"),qx(38,"p-code-error"),og(),qx(39,` e h\xE1 um link para
reenvio de c\xF3digo por SMS. Ao reenviar, o evento `),Cl(40,"code"),qx(41,"p-code-submit"),og(),qx(42,` envia um objeto com o telefone do usu\xE1rio e a quantidade
de vezes em que o usu\xE1rio fez a solicita\xE7\xE3o de reenvio.`),og(),Cl(43,"blockquote")(44,"p"),qx(45,`\xC9 indicada a utiliza\xE7\xE3o da tela de digita\xE7\xE3o para envio de c\xF3digo SMS apenas
se a op\xE7\xE3o por envio SMS for disponibilizada para o usu\xE1rio.`),og()(),Cl(46,"p"),qx(47,"A modal de confirma\xE7\xE3o cont\xE9m uma a\xE7\xE3o de reenvio e o evento "),Cl(48,"code"),qx(49,"p-submit"),og(),qx(50,`
\xE9 quem passa o objeto contendo o email em conjunto com a quantidade de tentativas de reenvio.`),og(),Cl(51,"blockquote")(52,"p"),qx(53,"A tela de confirma\xE7\xE3o \xE9 indicada para quando o usu\xE1rio solicitar a troca atrav\xE9s do email."),og()(),Cl(54,"blockquote")(55,"p"),qx(56,"Os textos das modals s\xE3o pr\xE9-definidos, imut\xE1veis e s\xE3o traduzidos de acordo com o idioma do "),Cl(57,"em"),qx(58,"browser"),og(),qx(59," (pt, en e es)"),og()(),Cl(60,"p"),qx(61,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),Cl(62,"em"),qx(63,"assets"),og(),qx(64," no arquivo "),Cl(65,"strong"),qx(66,"angular.json"),og(),qx(67," da aplica\xE7\xE3o na seguinte ordem:"),og(),Cl(68,"pre")(69,"code"),qx(70,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),og()()(),Cl(71,"div",6)(72,"h4",7),qx(73,"Seletor"),og(),Cl(74,"pre",8),qx(75,`<po-modal-password-recovery
    p-code-error="string"
    (p-code-submit)="EventEmitter"
    p-components-size="string"
    p-contact-email="string"
    p-phone-mask="string"
    (p-submit)="EventEmitter"
    p-type="PoModalPasswordRecoveryType"
    p-url-recovery="string" >
</po-modal-password-recovery>
`),og()(),Cl(76,"h4",9),qx(77,"Propriedades"),og(),Cl(78,"table",10)(79,"tr",11)(80,"th",12),qx(81,"Nome"),og(),Cl(82,"th",12),qx(83,"Tipo"),og(),Cl(84,"th",12),qx(85,"Padr\xE3o"),og(),Cl(86,"th",12),qx(87,"Descri\xE7\xE3o"),og()(),Cl(88,"tr",13)(89,"td",14)(90,"div",15)(91,"span",16),qx(92," p-code-error"),Hl(93,"br"),og()()(),Cl(94,"td",17)(95,"code",18),qx(96,"string"),og()(),Cl(97,"td",19),qx(98,"-"),og(),Cl(99,"td",20)(100,"em")(101,"strong"),qx(102,"(opcional)"),og()(),Cl(103,"p"),qx(104,"Defini\xE7\xE3o de mensagem de erro customizada para quando o usu\xE1rio passar um c\xF3digo SMS inv\xE1lido ou errado."),og()()(),Cl(105,"tr",13)(106,"td",14)(107,"div",21)(108,"span",22),qx(109," (p-code-submit)"),Hl(110,"br"),og()()(),Cl(111,"td",17)(112,"code",23),qx(113,"EventEmitter"),og()(),Cl(114,"td",19),qx(115,"-"),og(),Cl(116,"td",20)(117,"em")(118,"strong"),qx(119,"(opcional)"),og()(),Cl(120,"p"),qx(121,"A\xE7\xE3o contendo como par\xE2metro o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),og(),Cl(122,"blockquote")(123,"p"),qx(124,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Cl(125,"code"),qx(126,"p-url-recovery"),og(),qx(127,"."),og()()()(),Cl(128,"tr",13)(129,"td",14)(130,"div",15)(131,"span",16),qx(132," p-components-size"),Hl(133,"br"),og()()(),Cl(134,"td",17)(135,"code",18),qx(136,"string"),og()(),Cl(137,"td",19)(138,"p")(139,"code"),qx(140,"medium"),og()()(),Cl(141,"td",20)(142,"em")(143,"strong"),qx(144,"(opcional)"),og()(),Cl(145,"p"),qx(146,"Define o tamanho dos componentes de formul\xE1rio no modal:"),og(),Cl(147,"ul")(148,"li")(149,"code"),qx(150,"small"),og(),qx(151,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(152,"li")(153,"code"),qx(154,"medium"),og(),qx(155,": aplica a medida medium de cada componente."),og()(),Cl(156,"blockquote")(157,"p"),qx(158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(159,"code"),qx(160,"medium"),og(),qx(161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(162,"a",24),qx(163,"po-theme"),og(),qx(164,"."),og()()()(),Cl(165,"tr",13)(166,"td",14)(167,"div",15)(168,"span",16),qx(169," p-contact-email"),Hl(170,"br"),og()()(),Cl(171,"td",17)(172,"code",18),qx(173,"string"),og()(),Cl(174,"td",19),qx(175,"-"),og(),Cl(176,"td",20)(177,"em")(178,"strong"),qx(179,"(opcional)"),og()(),Cl(180,"p"),qx(181,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),og()()(),Cl(182,"tr",13)(183,"td",14)(184,"div",15)(185,"span",16),qx(186," p-phone-mask"),Hl(187,"br"),og()()(),Cl(188,"td",17)(189,"code",18),qx(190,"string"),og()(),Cl(191,"td",19)(192,"p")(193,"code"),qx(194,"(99) 99999-9999"),og()()(),Cl(195,"td",20)(196,"em")(197,"strong"),qx(198,"(opcional)"),og()(),Cl(199,"p"),qx(200,"Defini\xE7\xE3o da mascara do campo de telefone."),og()()(),Cl(201,"tr",13)(202,"td",14)(203,"div",21)(204,"span",22),qx(205," (p-submit)"),Hl(206,"br"),og()()(),Cl(207,"td",17)(208,"code",23),qx(209,"EventEmitter"),og()(),Cl(210,"td",19),qx(211,"-"),og(),Cl(212,"td",20)(213,"em")(214,"strong"),qx(215,"(opcional)"),og()(),Cl(216,"p"),qx(217,"A\xE7\xE3o contendo o email como par\xE2metro e que \xE9 executada quando o usu\xE1rio clica sobres os bot\xF5es de 'enviar' e 'reenviar' e-mail."),og(),Cl(218,"blockquote")(219,"p"),qx(220,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),Cl(221,"code"),qx(222,"p-url-recovery"),og(),qx(223,"."),og()()()(),Cl(224,"tr",13)(225,"td",14)(226,"div",15)(227,"span",16),qx(228," p-type"),Hl(229,"br"),og()()(),Cl(230,"td",17)(231,"code",25),qx(232,"PoModalPasswordRecoveryType"),og()(),Cl(233,"td",19)(234,"p")(235,"code"),qx(236,"PoModalPasswordRecoveryType.Email"),og()()(),Cl(237,"td",20)(238,"em")(239,"strong"),qx(240,"(opcional)"),og()(),Cl(241,"p"),qx(242,"Define o tipo de recupera\xE7\xE3o de senha que ser\xE1 exibido."),og()()(),Cl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),qx(247," p-url-recovery"),Hl(248,"br"),og()()(),Cl(249,"td",17)(250,"code",18),qx(251,"string"),og()(),Cl(252,"td",19),qx(253,"-"),og(),Cl(254,"td",20)(255,"em")(256,"strong"),qx(257,"(opcional)"),og()(),Cl(258,"p"),qx(259,`Endpoint usado pelo template para requisi\xE7\xE3o do recurso. Quando preenchido,
o m\xE9todos `),Cl(260,"code"),qx(261,"p-submit"),og(),qx(262," e "),Cl(263,"code"),qx(264,"p-submit-code"),og(),qx(265,` ser\xE3o ignorados e o componente adquirir\xE1 automatiza\xE7\xE3o
para o processo de solicita\xE7\xE3o de troca de senha.`),og(),Cl(266,"h3"),qx(267,"Processos"),og(),Cl(268,"p"),qx(269,"Ao digitar um valor v\xE1lido no campo de email/telefone e pressionar "),Cl(270,"strong"),qx(271,"enviar"),og(),qx(272,`,
o componente far\xE1 uma requisi\xE7\xE3o `),Cl(273,"code"),qx(274,"POST"),og(),qx(275," na url especificada nesta propriedade passando o objeto contendo o valor definido pelo usu\xE1rio."),og(),Cl(276,"pre")(277,"code"),qx(278,`body {
 email: email,
 retry?: retry
}
`),og()(),Cl(279,"h4"),qx(280,"Recupera\xE7\xE3o por email"),og(),Cl(281,"p"),qx(282,"Para a recupera\xE7\xE3o de senha por "),Cl(283,"strong"),qx(284,"email"),og(),qx(285,", o c\xF3digo de resposta HTTP de status esperado \xE9 "),Cl(286,"code"),qx(287,"204"),og(),qx(288,"."),og(),Cl(289,"p"),qx(290,"Em caso de "),Cl(291,"strong"),qx(292,"sucesso"),og(),qx(293,", ser\xE1 exibida a modal de confirma\xE7\xE3o de e-mail para o usu\xE1rio."),og(),Cl(294,"blockquote")(295,"p"),qx(296,"A a\xE7\xE3o "),Cl(297,"strong"),qx(298,"Reenviar"),og(),qx(299,` na tela de confirma\xE7\xE3o efetua uma nova requisi\xE7\xE3o
passando-se o objeto com incremento para o valor da propriedade `),Cl(300,"strong"),qx(301,"retry"),og(),qx(302,"."),og()(),Cl(303,"p")(304,"em"),qx(305,"Processo finalizado."),og()(),Cl(306,"h4"),qx(307,"Recupera\xE7\xE3o por SMS"),og(),Cl(308,"p"),qx(309,"Se a op\xE7\xE3o de recupera\xE7\xE3o for por "),Cl(310,"strong"),qx(311,"SMS"),og(),qx(312,", o c\xF3digo de status de sucesso deve ser "),Cl(313,"code"),qx(314,"200"),og(),qx(315,`.
Em caso de `),Cl(316,"strong"),qx(317,"sucesso"),og(),qx(318,`, abre-se a modal de digita\xE7\xE3o de c\xF3digo SMS e a resposta
desta requisi\xE7\xE3o deve retornar uma defini\xE7\xE3o de dados abaixo:`),og(),Cl(319,"pre")(320,"code"),qx(321,`200:
{
  hash: hash,
  urlValidationCode?: url
}
`),og()(),Cl(322,"ul")(323,"li"),qx(324,"O "),Cl(325,"strong"),qx(326,"hash"),og(),qx(327," ser\xE1 o c\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado juntamente com o c\xF3digo de verifica\xE7\xE3o do SMS;"),og(),Cl(328,"li")(329,"strong"),qx(330,"urlValidationCode"),og(),qx(331," \xE9 a url usada para valida\xE7\xE3o do c\xF3digo enviado por SMS."),og()(),Cl(332,"blockquote")(333,"p"),qx(334,"Caso n\xE3o seja passado urlValidationCode, o endpoint usado para valida\xE7\xE3o do c\xF3digo ser\xE1 "),Cl(335,"code"),qx(336,"<p-url-recovery>/validation"),og(),qx(337,"."),og()(),Cl(338,"h4"),qx(339,"Valida\xE7\xE3o do c\xF3digo SMS"),og(),Cl(340,"p"),qx(341,"Ao digitar um valor v\xE1lido no campo de c\xF3digo SMS e pressionar "),Cl(342,"strong"),qx(343,"continuar"),og(),qx(344,", o componente far\xE1 uma requisi\xE7\xE3o "),Cl(345,"code"),qx(346,"POST"),og(),qx(347," contendo:"),og(),Cl(348,"pre")(349,"code"),qx(350,`POST /<p-url-recovery>/validation OU /<urlValidationCode>
Body {
 hash: hash,
 code: code
}
`),og()(),Cl(351,"p"),qx(352,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),Cl(353,"code"),qx(354,"200"),og(),qx(355,"."),og(),Cl(356,"p"),qx(357,"Em caso de "),Cl(358,"strong"),qx(359,"erro"),og(),qx(360,` na valida\xE7\xE3o do c\xF3digo SMS, a modal se mant\xE9m com o campo para digita\xE7\xE3o
de c\xF3digo SMS`),og(),Cl(361,"blockquote")(362,"p"),qx(363,"Pode-se atribuir a mensagem de erro (message) para o atributo "),Cl(364,"code"),qx(365,"p-code-error"),og(),qx(366," conforme retorno abaixo:"),og()(),Cl(367,"pre")(368,"code"),qx(369,`400
{
  error {
    message: 'Error Message'
  }
}
`),og()(),Cl(370,"p"),qx(371,"Em caso de "),Cl(372,"strong"),qx(373,"sucesso"),og(),qx(374,", espera-se a resposta desta requisi\xE7\xE3o retornando a seguinte defini\xE7\xE3o:"),og(),Cl(375,"pre")(376,"code"),qx(377,`200:
{
  token: token,
  urlChangePassword?: url
}
`),og()(),Cl(378,"ul")(379,"li")(380,"strong"),qx(381,"token"),og(),qx(382,": Token de altera\xE7\xE3o de senha;"),og(),Cl(383,"li")(384,"strong"),qx(385,"urlChangePassword"),og(),qx(386,": url para o formul\xE1rio de altera\xE7\xE3o de senha."),og()(),Cl(387,"p"),qx(388,"O componente est\xE1 configurado para redirecionar para a url estabelecida em "),Cl(389,"code"),qx(390,"urlChangePassword"),og(),qx(391,"."),og(),Cl(392,"blockquote")(393,"p"),qx(394,`Caso n\xE3o seja passado valor para urlChangePassword,
a url usada para valida\xE7\xE3o ser\xE1 a `),Cl(395,"code"),qx(396,"<p-url-recovery>/changePassword?token=<token>"),og(),qx(397,"."),og()(),Cl(398,"p")(399,"em"),qx(400,"Processo finalizado."),og()()()()(),Cl(401,"h3",9),qx(402,"M\xE9todos"),og(),Cl(403,"table",26)(404,"tr",13)(405,"th",27)(406,"div",15)(407,"h4")(408,"span",16),qx(409," completed "),og()()()()(),Cl(410,"tr",20)(411,"td",20)(412,"p"),qx(413,`Ac\xE3o para conclus\xE3o de processo e fechamento da modal. Indica-se sua utiliza\xE7\xE3o
para ap\xF3s o envio e valida\xE7\xE3o do c\xF3digo SMS enviado pelo usu\xE1rio.`),og(),Cl(414,"blockquote")(415,"p"),qx(416,"Nas modals em que h\xE1 a a\xE7\xE3o de 'cancelar' dispensa-se o uso desta a\xE7\xE3o pois o componente j\xE1 trata o fechamento da modal."),og()()()()(),Hl(417,"br"),Cl(418,"table",26)(419,"tr",13)(420,"th",27)(421,"div",15)(422,"h4")(423,"span",16),qx(424," open "),og()()()()(),Cl(425,"tr",20)(426,"td",20)(427,"p"),qx(428,"Abre a modal de preenchimento de email ou n\xFAmero de telefone para solicita\xE7\xE3o de troca de senha."),og()()()(),Hl(429,"br"),Cl(430,"table",26)(431,"tr",13)(432,"th",27)(433,"div",15)(434,"h4")(435,"span",16),qx(436," openConfirmation "),og()()()()(),Cl(437,"tr",20)(438,"td",20)(439,"p"),qx(440,"Abre a modal de confirma\xE7\xE3o de envio de email."),og()()()(),Hl(441,"br"),Cl(442,"table",26)(443,"tr",13)(444,"th",27)(445,"div",15)(446,"h4")(447,"span",16),qx(448," openSmsCode "),og()()()()(),Cl(449,"tr",20)(450,"td",20)(451,"p"),qx(452,"Abre a modal de preenchimento do c\xF3digo SMS enviado ao usu\xE1rio."),og()()()(),Hl(453,"br"),Cl(454,"h3"),qx(455,"Interfaces"),og(),Cl(456,"h4",28)(457,"code",5),qx(458,"PoModalPasswordRecovery"),og()(),Cl(459,"div",2)(460,"p"),qx(461,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),Cl(462,"code"),qx(463,"po-modal-password-recovery"),og(),qx(464,"."),og()(),Cl(465,"h4",9),qx(466,"Propriedades"),og(),Cl(467,"table",10)(468,"tr",11)(469,"th",12),qx(470,"Nome"),og(),Cl(471,"th",12),qx(472,"Tipo"),og(),Cl(473,"th",12),qx(474,"Descri\xE7\xE3o"),og()(),Cl(475,"tr",13)(476,"td",14)(477,"div",15)(478,"span",16),qx(479," code"),Hl(480,"br"),og()()(),Cl(481,"td",17)(482,"code",18),qx(483,"string"),og()(),Cl(484,"td",20)(485,"em")(486,"strong"),qx(487,"(opcional)"),og()(),Cl(488,"p"),qx(489,"Valor contendo o c\xF3digo enviado por SMS e digitado pelo usu\xE1rio."),og()()(),Cl(490,"tr",13)(491,"td",14)(492,"div",15)(493,"span",16),qx(494," email"),Hl(495,"br"),og()()(),Cl(496,"td",17)(497,"code",18),qx(498,"string"),og()(),Cl(499,"td",20)(500,"em")(501,"strong"),qx(502,"(opcional)"),og()(),Cl(503,"p"),qx(504,"Valor contendo o email enviado pelo usu\xE1rio."),og()()(),Cl(505,"tr",13)(506,"td",14)(507,"div",15)(508,"span",16),qx(509," hash"),Hl(510,"br"),og()()(),Cl(511,"td",17)(512,"code",18),qx(513,"string"),og()(),Cl(514,"td",20)(515,"em")(516,"strong"),qx(517,"(opcional)"),og()(),Cl(518,"p"),qx(519,"C\xF3digo de valida\xE7\xE3o da solicita\xE7\xE3o do SMS para ser enviado junto com o c\xF3digo de verifica\xE7\xE3o do SMS"),og()()(),Cl(520,"tr",13)(521,"td",14)(522,"div",15)(523,"span",16),qx(524," retry"),Hl(525,"br"),og()()(),Cl(526,"td",17)(527,"code",29),qx(528,"number"),og()(),Cl(529,"td",20)(530,"em")(531,"strong"),qx(532,"(opcional)"),og()(),Cl(533,"p"),qx(534,"N\xFAmero de tentativas de reenvio."),og()()(),Cl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),qx(539," sms"),Hl(540,"br"),og()()(),Cl(541,"td",17)(542,"code",18),qx(543,"string"),og()(),Cl(544,"td",20)(545,"em")(546,"strong"),qx(547,"(opcional)"),og()(),Cl(548,"p"),qx(549,"Valor contendo o n\xFAmero de telefone enviado pelo usu\xE1rio."),og()()(),Cl(550,"tr",13)(551,"td",14)(552,"div",15)(553,"span",16),qx(554," token"),Hl(555,"br"),og()()(),Cl(556,"td",17)(557,"code",18),qx(558,"string"),og()(),Cl(559,"td",20)(560,"em")(561,"strong"),qx(562,"(opcional)"),og()(),Cl(563,"p"),qx(564,"Token de altera\xE7\xE3o de senha"),og()()(),Cl(565,"tr",13)(566,"td",14)(567,"div",15)(568,"span",16),qx(569," urlChangePassword"),Hl(570,"br"),og()()(),Cl(571,"td",17)(572,"code",18),qx(573,"string"),og()(),Cl(574,"td",20)(575,"em")(576,"strong"),qx(577,"(opcional)"),og()(),Cl(578,"p"),qx(579,"URL para o formul\xE1rio de altera\xE7\xE3o de senha"),og()()(),Cl(580,"tr",13)(581,"td",14)(582,"div",15)(583,"span",16),qx(584," urlValidationCode"),Hl(585,"br"),og()()(),Cl(586,"td",17)(587,"code",18),qx(588,"string"),og()(),Cl(589,"td",20)(590,"em")(591,"strong"),qx(592,"(opcional)"),og()(),Cl(593,"p"),qx(594,"URL usada para valida\xE7\xE3o do c\xF3digo enviado por SMS"),og()()()(),Cl(595,"h3"),qx(596,"Enums"),og(),Cl(597,"h4",4)(598,"code",5),qx(599,"PoModalPasswordRecoveryType"),og()(),Cl(600,"div",2)(601,"p")(602,"em"),qx(603,"Enum"),og(),qx(604," para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha."),og()(),Cl(605,"h4",9),qx(606,"Propriedades"),og(),Cl(607,"table",10)(608,"tr",11)(609,"th",12),qx(610,"Nome"),og(),Cl(611,"th",12),qx(612,"Descri\xE7\xE3o"),og()(),Cl(613,"tr",13)(614,"td",14)(615,"div",15)(616,"span",16),qx(617," All"),Hl(618,"br"),og()()(),Cl(619,"td",20)(620,"p"),qx(621,"Possibilita ao usu\xE1rio optar por envio via email ou SMS"),og()()(),Cl(622,"tr",13)(623,"td",14)(624,"div",15)(625,"span",16),qx(626," Email"),Hl(627,"br"),og()()(),Cl(628,"td",20)(629,"p"),qx(630,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por email"),og()()(),Cl(631,"tr",13)(632,"td",14)(633,"div",15)(634,"span",16),qx(635," SMS"),Hl(636,"br"),og()()(),Cl(637,"td",20)(638,"p"),qx(639,"Defini\xE7\xE3o para recupera\xE7\xE3o apenas por SMS"),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Modal Password Recovery",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-modal-password-recovery-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-modal-password-recovery-basic-view")(6,"sample-po-modal-password-recovery-labs-view")(7,"sample-po-modal-password-recovery-request-view"),og()()()),r&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,ce,Ee,ve],encapsulation:2})}return i})();var _e=[{path:"",component:Se}],ye=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[bL.forChild(_e),bL]})}return i})();var rt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe({type:i});static \u0275inj=ue$1({imports:[ca,ye]})}return i})();export{rt as DocPoModalPasswordRecoveryModule};