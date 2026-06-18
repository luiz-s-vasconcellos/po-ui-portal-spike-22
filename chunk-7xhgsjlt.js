import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,c5 as zde,aW as Yp,b0 as Qt,H as Sl,a1 as ht,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,M as Wl,J as Jx,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,a3 as pNe,av as ql,aw as lo,ax as uo,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p;}static \u0275fac=function(l){return new(l||a)(C(zde))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(Sl(0,"po-button",0),ht("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),sg());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dialog Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-basic',
  templateUrl: './sample-po-dialog-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogBasicComponent {
  constructor(public poDialog: PoDialogService) {}
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dialog-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ne],encapsulation:2})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize="medium";dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p;}ngOnInit(){this.restore();}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0});}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0;}catch(l){p=void 0;}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p);}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0});}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog();}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize="medium",this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help="";}static \u0275fac=function(l){return new(l||a)(C(zde))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs"]],standalone:false,decls:15,vars:13,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-blur","p-change-model","ngModel","p-disabled","p-help"],["name","actionOptions","p-columns","4","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-button",1),ht("p-click",function(){return n.openDialog()}),sg(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),sg(),Wl(4,"po-divider"),Sl(5,"form",null,0)(7,"po-input",4),Ew("ngModelChange",function(o){return Xy(d),tN(n.title,o)||(n.title=o),Qy(o)}),sg(),JA(),Sl(8,"po-input",5),Ew("ngModelChange",function(o){return Xy(d),tN(n.message,o)||(n.message=o),Qy(o)}),sg(),JA(),Sl(9,"po-radio-group",6),Ew("ngModelChange",function(o){return Xy(d),tN(n.dialogMethod,o)||(n.dialogMethod=o),Qy(o)}),ht("p-change",function(){return n.changeMethod()}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(o){return Xy(d),tN(n.literals,o)||(n.literals=o),Qy(o)}),ht("p-blur",function(){return n.changeLiterals()})("p-change-model",function(){return n.changeLiterals()}),sg(),JA(),Sl(11,"po-checkbox-group",8),Ew("ngModelChange",function(o){return Xy(d),tN(n.actionOptions,o)||(n.actionOptions=o),Qy(o)}),sg(),JA(),Sl(12,"po-radio-group",9),Ew("ngModelChange",function(o){return Xy(d),tN(n.componentsSize,o)||(n.componentsSize=o),Qy(o)}),sg(),JA(),Sl(13,"div",2)(14,"po-button",10),ht("p-click",function(){return n.restore()}),sg()()();}if(l&2){let d=xx(6);tw("p-disabled",d.invalid),Vp(3),tw("p-value",n.action),Vp(4),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.message),t0(),Vp(),Dw("ngModel",n.dialogMethod),tw("p-options",n.dialogMethodOptions),t0(),Vp(),Dw("ngModel",n.literals),tw("p-disabled",n.dialogMethod===void 0)("p-help",n.help),t0(),Vp(),Dw("ngModel",n.actionOptions),tw("p-options",n.dialogActionOptions),t0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,Qhe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dialog Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

<po-divider />

<div class="po-row">
  <po-info class="po-md-12" p-label="Action clicked" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

  <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

  <po-radio-group
    class="po-lg-6"
    name="dialogMethod"
    [(ngModel)]="dialogMethod"
    p-label="Dialog method"
    [p-options]="dialogMethodOptions"
    (p-change)="changeMethod()"
  >
  </po-radio-group>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-clean
    p-label="Literals"
    [p-disabled]="dialogMethod === undefined"
    [p-help]="help"
    (p-blur)="changeLiterals()"
    (p-change-model)="changeLiterals()"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="actionOptions"
    [(ngModel)]="actionOptions"
    p-columns="4"
    p-label="Action options"
    [p-options]="dialogActionOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-labs',
  templateUrl: './sample-po-dialog-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogLabsComponent implements OnInit {
  action: string;
  actionOptions: Array<string>;
  componentsSize: string = 'medium';
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  message: string;
  title: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly dialogActionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Ok', value: 'ok' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Confirm', value: 'confirm' },
    { label: 'Close', value: 'close' }
  ];

  public readonly dialogMethodOptions: Array<PoRadioGroupOption> = [
    { label: 'Alert', value: 'alert' },
    { label: 'Confirm', value: 'confirm' }
  ];

  constructor(private poAlert: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  alertDialog() {
    this.poAlert.alert({
      componentsSize: this.componentsSize,
      literals: this.literalsAlert,
      title: this.title,
      message: this.message,
      ok: () => (this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined)
    });
  }

  changeLiterals() {
    let literalsModel;
    try {
      literalsModel = this.literals ? JSON.parse(this.literals) : undefined;
    } catch (error) {
      literalsModel = undefined;
    }

    if (this.dialogMethod === 'alert') {
      this.literalsAlert = literalsModel;
    } else if (this.dialogMethod === 'confirm') {
      this.literalsConfirm = literalsModel;
    }
  }

  changeMethod() {
    if (this.dialogMethod === 'alert') {
      this.help = 'Ex: { "ok": "Conclu\xEDdo" }';
    } else {
      this.help = 'Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';
    }
  }

  confirmDialog() {
    this.poAlert.confirm({
      componentsSize: this.componentsSize,
      literals: this.literalsConfirm,
      title: this.title,
      message: this.message,
      confirm: () => (this.actionOptions.includes('confirm') ? (this.action = 'Confirm') : undefined),
      cancel: () => (this.actionOptions.includes('cancel') ? (this.action = 'Cancel') : undefined),
      close: () => (this.actionOptions.includes('close') ? (this.action = 'Close') : undefined)
    });
  }

  openDialog() {
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.componentsSize = 'medium';
    this.title = 'PO Dialog';
    this.message = 'PO Dialog';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dialog-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return a})();var De=["form"],se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l;}ngOnDestroy(){this.statusSubscription.unsubscribe();}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:true}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p));}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID";}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset();}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()});}static \u0275fac=function(l){return new(l||a)(C(zde),C(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&ql(De,7),l&2){let d;lo(d=uo())&&(n.form=d.first);}},standalone:false,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),Ew("ngModelChange",function(o){return Xy(d),tN(n.cardType,o)||(n.cardType=o),Qy(o)}),sg(),JA(),sg(),Sl(5,"div",2)(6,"po-input",4),Ew("ngModelChange",function(o){return Xy(d),tN(n.cardNumber,o)||(n.cardNumber=o),Qy(o)}),sg(),JA(),Sl(7,"po-input",5),Ew("ngModelChange",function(o){return Xy(d),tN(n.securityCode,o)||(n.securityCode=o),Qy(o)}),sg(),JA(),sg(),Sl(8,"div",2)(9,"po-input",6),Ew("ngModelChange",function(o){return Xy(d),tN(n.name,o)||(n.name=o),Qy(o)}),sg(),JA(),sg(),Sl(10,"div",2)(11,"po-input",7),Ew("ngModelChange",function(o){return Xy(d),tN(n.address,o)||(n.address=o),Qy(o)}),sg(),JA(),Sl(12,"po-input",8),Ew("ngModelChange",function(o){return Xy(d),tN(n.city,o)||(n.city=o),Qy(o)}),sg(),JA(),Sl(13,"po-input",9),Ew("ngModelChange",function(o){return Xy(d),tN(n.stateProvince,o)||(n.stateProvince=o),Qy(o)}),sg(),JA(),Sl(14,"po-input",10),Ew("ngModelChange",function(o){return Xy(d),tN(n.zipPostalCode,o)||(n.zipPostalCode=o),Qy(o)}),sg(),JA(),sg(),Sl(15,"div",2)(16,"po-input",11),Ew("ngModelChange",function(o){return Xy(d),tN(n.phoneNumber,o)||(n.phoneNumber=o),Qy(o)}),sg(),JA(),Sl(17,"po-input",12),Ew("ngModelChange",function(o){return Xy(d),tN(n.country,o)||(n.country=o),Qy(o)}),sg(),JA(),sg()()();}l&2&&(tw("p-actions",n.action),Vp(4),Dw("ngModel",n.cardType),tw("p-options",n.cardTypeOptions),t0(),Vp(2),Dw("ngModel",n.cardNumber),t0(),Vp(),Dw("ngModel",n.securityCode),t0(),Vp(2),Dw("ngModel",n.name),t0(),Vp(2),Dw("ngModel",n.address),t0(),Vp(),Dw("ngModel",n.city),t0(),Vp(),Dw("ngModel",n.stateProvince),t0(),Vp(),Dw("ngModel",n.zipPostalCode),t0(),Vp(2),Dw("ngModel",n.phoneNumber),t0(),Vp(),Dw("ngModel",n.country),t0());},dependencies:[J9,K9,X9,Dk,vk,F3,Pde,pNe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dialog - Cancel Credit Card"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
  <form #form="ngForm">
    <div class="po-row">
      <po-radio-group
        class="po-md-8"
        name="cardType"
        [(ngModel)]="cardType"
        p-label="Card type"
        p-required
        [p-options]="cardTypeOptions"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-8"
        name="cardNumber"
        [(ngModel)]="cardNumber"
        p-label="Card number"
        p-mask="9999 9999 9999 9999"
        p-mask-format-model
        p-minlength="19"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-4"
        name="securityCode"
        [(ngModel)]="securityCode"
        p-label="Security code"
        p-mask="999"
        p-minlength="3"
        p-required
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-12" name="name" [(ngModel)]="name" p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-6 po-lg-3" name="address" [(ngModel)]="address" p-label="Address"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="city" [(ngModel)]="city" p-label="City"> </po-input>

      <po-input class="po-md-6 po-lg-3" name="stateProvince" [(ngModel)]="stateProvince" p-label="State/Province">
      </po-input>

      <po-input class="po-md-6 po-lg-3" name="zipPostalCode" [(ngModel)]="zipPostalCode" p-label="Zip/PostalCode">
      </po-input>
    </div>

    <div class="po-row">
      <po-input
        class="po-md-6"
        name="phoneNumber"
        [(ngModel)]="phoneNumber"
        p-label="Phone number"
        p-mask="(99) 9?9999-9999"
        p-mask-format-model
      >
      </po-input>

      <po-input class="po-md-6" name="country" [(ngModel)]="country" p-label="Country"> </po-input>
    </div>
  </form>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { Subscription } from 'rxjs';

import { PoDialogService, PoNotificationService, PoPageAction, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dialog-cancel-credit-card',
  templateUrl: './sample-po-dialog-cancel-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDialogCancelCreditCardComponent implements OnDestroy, OnInit {
  @ViewChild('form', { static: true }) form: UntypedFormControl;

  action: Array<PoPageAction>;
  address: string;
  cardNumber: string;
  cardType: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  securityCode: string;
  stateProvince: string;
  zipPostalCode: string;

  public readonly cardTypeOptions: Array<PoRadioGroupOption> = [
    { label: 'Master Card', value: 'Master' },
    { label: 'Visa', value: 'visa' },
    { label: 'Diners', value: 'diners' },
    { label: 'Hipercard', value: 'hipercard' }
  ];

  private statusSubscription: Subscription;

  constructor(
    private poDialog: PoDialogService,
    private poNotification: PoNotificationService
  ) {}

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  ngOnInit() {
    this.action = [
      {
        label: 'Cancel',
        icon: 'ICON_DELETE',
        action: this.openConfirmDialog.bind(this),
        disabled: true
      }
    ];
    this.statusSubscription = this.form.statusChanges.subscribe(status => this.actionDisabledCheck(status));
  }

  actionDisabledCheck(status: string) {
    this.action[0].disabled = status === 'INVALID';
  }

  confirmCancelation() {
    this.poNotification.success(\`Credit card \${this.cardNumber} canceled\`);
    this.form.reset();
  }

  openConfirmDialog() {
    this.poDialog.confirm({
      title: 'Confirm',
      message: \`<p>Hi <b>\${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>\${this.cardNumber}<b>? </p>\`,
      confirm: () => this.confirmCancelation()
    });
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dialog-cancel-credit-card"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-doc"]],standalone:false,decls:397,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoDialogModule } from '@po-ui/ng-components';"),sg()(),Wl(4,"div",2),Sl(5,"h3",3),Jx(6,"Services"),sg(),Sl(7,"h4",4)(8,"code",5),Jx(9,"PoDialogService"),sg()(),Sl(10,"div",2)(11,"p"),Jx(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),sg()(),Sl(13,"h3",6),Jx(14,"M\xE9todos"),sg(),Sl(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),Jx(21," confirm "),sg()()()()(),Sl(22,"tr",12)(23,"td",12)(24,"p"),Jx(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),sg()()()(),Wl(26,"br"),Sl(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),Jx(33," alert "),sg()()()()(),Sl(34,"tr",12)(35,"td",12)(36,"p"),Jx(37,"Exibe um di\xE1logo de alerta."),sg()()()(),Wl(38,"br"),Sl(39,"h3"),Jx(40,"Interfaces"),sg(),Sl(41,"h4",13)(42,"code",5),Jx(43,"PoDialogAlertLiterals"),sg()(),Sl(44,"div",2)(45,"p"),Jx(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Sl(47,"code"),Jx(48,"po-dialog"),sg(),Jx(49," para o tipo alerta."),sg()(),Sl(50,"h4",6),Jx(51,"Propriedades"),sg(),Sl(52,"table",14)(53,"tr",15)(54,"th",16),Jx(55,"Nome"),sg(),Sl(56,"th",16),Jx(57,"Tipo"),sg(),Sl(58,"th",16),Jx(59,"Descri\xE7\xE3o"),sg()(),Sl(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),Jx(64," ok"),Wl(65,"br"),sg()()(),Sl(66,"td",18)(67,"code",19),Jx(68,"string"),sg()(),Sl(69,"td",12)(70,"em")(71,"strong"),Jx(72,"(opcional)"),sg()(),Sl(73,"p"),Jx(74,'R\xF3tulo do bot\xE3o de "Ok".'),sg()()()(),Sl(75,"h4",13)(76,"code",5),Jx(77,"PoDialogConfirmLiterals"),sg()(),Sl(78,"div",2)(79,"p"),Jx(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Sl(81,"code"),Jx(82,"po-dialog"),sg(),Jx(83," para o tipo confirma\xE7\xE3o."),sg()(),Sl(84,"h4",6),Jx(85,"Propriedades"),sg(),Sl(86,"table",14)(87,"tr",15)(88,"th",16),Jx(89,"Nome"),sg(),Sl(90,"th",16),Jx(91,"Tipo"),sg(),Sl(92,"th",16),Jx(93,"Descri\xE7\xE3o"),sg()(),Sl(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),Jx(98," cancel"),Wl(99,"br"),sg()()(),Sl(100,"td",18)(101,"code",19),Jx(102,"string"),sg()(),Sl(103,"td",12)(104,"em")(105,"strong"),Jx(106,"(opcional)"),sg()(),Sl(107,"p"),Jx(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),sg()()(),Sl(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),Jx(113," confirm"),Wl(114,"br"),sg()()(),Sl(115,"td",18)(116,"code",19),Jx(117,"string"),sg()(),Sl(118,"td",12)(119,"em")(120,"strong"),Jx(121,"(opcional)"),sg()(),Sl(122,"p"),Jx(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),sg()()()(),Sl(124,"h4",13)(125,"code",5),Jx(126,"PoDialogAlertOptions"),sg()(),Sl(127,"div",2)(128,"p"),Jx(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),sg()(),Sl(130,"h4",6),Jx(131,"Propriedades"),sg(),Sl(132,"table",14)(133,"tr",15)(134,"th",16),Jx(135,"Nome"),sg(),Sl(136,"th",16),Jx(137,"Tipo"),sg(),Sl(138,"th",16),Jx(139,"Descri\xE7\xE3o"),sg()(),Sl(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),Jx(144," componentsSize"),Wl(145,"br"),sg()()(),Sl(146,"td",18)(147,"code",19),Jx(148,"string"),sg()(),Sl(149,"td",12)(150,"em")(151,"strong"),Jx(152,"(opcional)"),sg()(),Sl(153,"p"),Jx(154,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),sg(),Sl(155,"ul")(156,"li")(157,"code"),Jx(158,"small"),sg(),Jx(159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(160,"li")(161,"code"),Jx(162,"medium"),sg(),Jx(163,": aplica a medida medium de cada componente."),sg()(),Sl(164,"blockquote")(165,"p"),Jx(166,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(167,"code"),Jx(168,"medium"),sg(),Jx(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(170,"a",20),Jx(171,"po-theme"),sg(),Jx(172,"."),sg()()()(),Sl(173,"tr",8)(174,"td",17)(175,"div",10)(176,"span",11),Jx(177," literals"),Wl(178,"br"),sg()()(),Sl(179,"td",18)(180,"code",21),Jx(181,"PoDialogAlertLiterals"),sg()(),Sl(182,"td",12)(183,"em")(184,"strong"),Jx(185,"(opcional)"),sg()(),Sl(186,"p"),Jx(187,"Objeto com as literais usadas no "),Sl(188,"code"),Jx(189,"po-dialog"),sg(),Jx(190," do tipo alerta."),sg(),Sl(191,"p"),Jx(192,"Para customizar o "),Sl(193,"em"),Jx(194,"label"),sg(),Jx(195,", pode ser enviado o objeto da seguinte forma:"),sg(),Sl(196,"pre")(197,"code",22),Jx(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),sg()(),Sl(199,"blockquote")(200,"p"),Jx(201,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Sl(202,"em"),Jx(203,"browser"),sg(),Jx(204," (pt, en, es)."),sg()()()(),Sl(205,"tr",8)(206,"td",17)(207,"div",10)(208,"span",11),Jx(209," message"),Wl(210,"br"),sg()()(),Sl(211,"td",18)(212,"code",19),Jx(213,"string"),sg()(),Sl(214,"td",12)(215,"p"),Jx(216,"Mensagem da caixa de di\xE1logo."),sg(),Sl(217,"blockquote")(218,"p"),Jx(219,"Pode-se informar um conte\xFAdo HTML na mensagem."),sg()()()(),Sl(220,"tr",8)(221,"td",17)(222,"div",10)(223,"span",11),Jx(224," ok"),Wl(225,"br"),sg()()(),Sl(226,"td",18)(227,"code",23),Jx(228,"Function"),sg()(),Sl(229,"td",12)(230,"em")(231,"strong"),Jx(232,"(opcional)"),sg()(),Sl(233,"p"),Jx(234,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),sg()()(),Sl(235,"tr",8)(236,"td",17)(237,"div",10)(238,"span",11),Jx(239," title"),Wl(240,"br"),sg()()(),Sl(241,"td",18)(242,"code",19),Jx(243,"string"),sg()(),Sl(244,"td",12)(245,"p"),Jx(246,"T\xEDtulo da caixa de di\xE1logo."),sg()()()(),Sl(247,"h4",13)(248,"code",5),Jx(249,"PoDialogConfirmOptions"),sg()(),Sl(250,"div",2)(251,"p"),Jx(252,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),sg()(),Sl(253,"h4",6),Jx(254,"Propriedades"),sg(),Sl(255,"table",14)(256,"tr",15)(257,"th",16),Jx(258,"Nome"),sg(),Sl(259,"th",16),Jx(260,"Tipo"),sg(),Sl(261,"th",16),Jx(262,"Descri\xE7\xE3o"),sg()(),Sl(263,"tr",8)(264,"td",17)(265,"div",10)(266,"span",11),Jx(267," cancel"),Wl(268,"br"),sg()()(),Sl(269,"td",18)(270,"code",23),Jx(271,"Function"),sg()(),Sl(272,"td",12)(273,"em")(274,"strong"),Jx(275,"(opcional)"),sg()(),Sl(276,"p"),Jx(277,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),sg()()(),Sl(278,"tr",8)(279,"td",17)(280,"div",10)(281,"span",11),Jx(282," close"),Wl(283,"br"),sg()()(),Sl(284,"td",18)(285,"code",23),Jx(286,"Function"),sg()(),Sl(287,"td",12)(288,"em")(289,"strong"),Jx(290,"(opcional)"),sg()(),Sl(291,"p"),Jx(292,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),sg()()(),Sl(293,"tr",8)(294,"td",17)(295,"div",10)(296,"span",11),Jx(297," componentsSize"),Wl(298,"br"),sg()()(),Sl(299,"td",18)(300,"code",19),Jx(301,"string"),sg()(),Sl(302,"td",12)(303,"em")(304,"strong"),Jx(305,"(opcional)"),sg()(),Sl(306,"p"),Jx(307,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),sg(),Sl(308,"ul")(309,"li")(310,"code"),Jx(311,"small"),sg(),Jx(312,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(313,"li")(314,"code"),Jx(315,"medium"),sg(),Jx(316,": aplica a medida medium de cada componente."),sg()(),Sl(317,"blockquote")(318,"p"),Jx(319,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(320,"code"),Jx(321,"medium"),sg(),Jx(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(323,"a",20),Jx(324,"po-theme"),sg(),Jx(325,"."),sg()()()(),Sl(326,"tr",8)(327,"td",17)(328,"div",10)(329,"span",11),Jx(330," confirm"),Wl(331,"br"),sg()()(),Sl(332,"td",18)(333,"code",23),Jx(334,"Function"),sg()(),Sl(335,"td",12)(336,"p"),Jx(337,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),sg()()(),Sl(338,"tr",8)(339,"td",17)(340,"div",10)(341,"span",11),Jx(342," literals"),Wl(343,"br"),sg()()(),Sl(344,"td",18)(345,"code",24),Jx(346,"PoDialogConfirmLiterals"),sg()(),Sl(347,"td",12)(348,"em")(349,"strong"),Jx(350,"(opcional)"),sg()(),Sl(351,"p"),Jx(352,"Objeto com as literais usadas no "),Sl(353,"code"),Jx(354,"po-dialog"),sg(),Jx(355," do tipo confirma\xE7\xE3o."),sg(),Sl(356,"p"),Jx(357,"Para customizar os "),Sl(358,"em"),Jx(359,"labels"),sg(),Jx(360,", pode ser enviado o objeto da seguinte forma:"),sg(),Sl(361,"pre")(362,"code",22),Jx(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),sg()(),Sl(364,"blockquote")(365,"p"),Jx(366,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Sl(367,"em"),Jx(368,"browser"),sg(),Jx(369," (pt, en, es)."),sg()()()(),Sl(370,"tr",8)(371,"td",17)(372,"div",10)(373,"span",11),Jx(374," message"),Wl(375,"br"),sg()()(),Sl(376,"td",18)(377,"code",19),Jx(378,"string"),sg()(),Sl(379,"td",12)(380,"p"),Jx(381,"Mensagem da caixa de di\xE1logo."),sg(),Sl(382,"blockquote")(383,"p"),Jx(384,"Pode-se informar um conte\xFAdo HTML na mensagem."),sg()()()(),Sl(385,"tr",8)(386,"td",17)(387,"div",10)(388,"span",11),Jx(389," title"),Wl(390,"br"),sg()()(),Sl(391,"td",18)(392,"code",19),Jx(393,"string"),sg()(),Sl(394,"td",12)(395,"p"),Jx(396,"T\xEDtulo da caixa de di\xE1logo."),sg()()()()());},encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-dialog-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,le,pe,de,me],encapsulation:2})}return a})();var Me=[{path:"",component:ce}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(Me),pL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,ge]})}return a})();export{Ze as DocPoDialogModule};