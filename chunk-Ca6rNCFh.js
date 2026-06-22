import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,c5 as Ode,aW as Yp,b0 as Qt,T as Tl,a1 as ht,L as sg,an as TO,aH as Ga,b8 as Hme,b9 as Gme,J as Gl,z as tN,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,bd as Ox,aO as Dw,aP as r0,a3 as aNe,av as Yl,aw as uo,ax as fo,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p;}static \u0275fac=function(l){return new(l||a)(w(Ode))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(Tl(0,"po-button",0),ht("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),sg());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Dialog Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dialog-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,he,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ne],encapsulation:2})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize="medium";dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p;}ngOnInit(){this.restore();}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0});}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0;}catch(l){p=void 0;}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p);}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0});}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog();}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize="medium",this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help="";}static \u0275fac=function(l){return new(l||a)(w(Ode))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs"]],standalone:false,decls:15,vars:13,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-blur","p-change-model","ngModel","p-disabled","p-help"],["name","actionOptions","p-columns","4","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Cx();Tl(0,"po-button",1),ht("p-click",function(){return n.openDialog()}),sg(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),sg(),Gl(4,"po-divider"),Tl(5,"form",null,0)(7,"po-input",4),Ew("ngModelChange",function(o){return Ky(d),rN(n.title,o)||(n.title=o),Xy(o)}),sg(),t0(),Tl(8,"po-input",5),Ew("ngModelChange",function(o){return Ky(d),rN(n.message,o)||(n.message=o),Xy(o)}),sg(),t0(),Tl(9,"po-radio-group",6),Ew("ngModelChange",function(o){return Ky(d),rN(n.dialogMethod,o)||(n.dialogMethod=o),Xy(o)}),ht("p-change",function(){return n.changeMethod()}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(o){return Ky(d),rN(n.literals,o)||(n.literals=o),Xy(o)}),ht("p-blur",function(){return n.changeLiterals()})("p-change-model",function(){return n.changeLiterals()}),sg(),t0(),Tl(11,"po-checkbox-group",8),Ew("ngModelChange",function(o){return Ky(d),rN(n.actionOptions,o)||(n.actionOptions=o),Xy(o)}),sg(),t0(),Tl(12,"po-radio-group",9),Ew("ngModelChange",function(o){return Ky(d),rN(n.componentsSize,o)||(n.componentsSize=o),Xy(o)}),sg(),t0(),Tl(13,"div",2)(14,"po-button",10),ht("p-click",function(){return n.restore()}),sg()()();}if(l&2){let d=Ox(6);tw("p-disabled",d.invalid),Vp(3),tw("p-value",n.action),Vp(4),Dw("ngModel",n.title),r0(),Vp(),Dw("ngModel",n.message),r0(),Vp(),Dw("ngModel",n.dialogMethod),tw("p-options",n.dialogMethodOptions),r0(),Vp(),Dw("ngModel",n.literals),tw("p-disabled",n.dialogMethod===void 0)("p-help",n.help),r0(),Vp(),Dw("ngModel",n.actionOptions),tw("p-options",n.dialogActionOptions),r0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),r0();}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,$he],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Dialog Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dialog-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Se,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,re],encapsulation:2})}return a})();var De=["form"],se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l;}ngOnDestroy(){this.statusSubscription.unsubscribe();}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:true}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p));}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID";}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset();}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()});}static \u0275fac=function(l){return new(l||a)(w(Ode),w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&Yl(De,7),l&2){let d;uo(d=fo())&&(n.form=d.first);}},standalone:false,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=Cx();Tl(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),Ew("ngModelChange",function(o){return Ky(d),rN(n.cardType,o)||(n.cardType=o),Xy(o)}),sg(),t0(),sg(),Tl(5,"div",2)(6,"po-input",4),Ew("ngModelChange",function(o){return Ky(d),rN(n.cardNumber,o)||(n.cardNumber=o),Xy(o)}),sg(),t0(),Tl(7,"po-input",5),Ew("ngModelChange",function(o){return Ky(d),rN(n.securityCode,o)||(n.securityCode=o),Xy(o)}),sg(),t0(),sg(),Tl(8,"div",2)(9,"po-input",6),Ew("ngModelChange",function(o){return Ky(d),rN(n.name,o)||(n.name=o),Xy(o)}),sg(),t0(),sg(),Tl(10,"div",2)(11,"po-input",7),Ew("ngModelChange",function(o){return Ky(d),rN(n.address,o)||(n.address=o),Xy(o)}),sg(),t0(),Tl(12,"po-input",8),Ew("ngModelChange",function(o){return Ky(d),rN(n.city,o)||(n.city=o),Xy(o)}),sg(),t0(),Tl(13,"po-input",9),Ew("ngModelChange",function(o){return Ky(d),rN(n.stateProvince,o)||(n.stateProvince=o),Xy(o)}),sg(),t0(),Tl(14,"po-input",10),Ew("ngModelChange",function(o){return Ky(d),rN(n.zipPostalCode,o)||(n.zipPostalCode=o),Xy(o)}),sg(),t0(),sg(),Tl(15,"div",2)(16,"po-input",11),Ew("ngModelChange",function(o){return Ky(d),rN(n.phoneNumber,o)||(n.phoneNumber=o),Xy(o)}),sg(),t0(),Tl(17,"po-input",12),Ew("ngModelChange",function(o){return Ky(d),rN(n.country,o)||(n.country=o),Xy(o)}),sg(),t0(),sg()()();}l&2&&(tw("p-actions",n.action),Vp(4),Dw("ngModel",n.cardType),tw("p-options",n.cardTypeOptions),r0(),Vp(2),Dw("ngModel",n.cardNumber),r0(),Vp(),Dw("ngModel",n.securityCode),r0(),Vp(2),Dw("ngModel",n.name),r0(),Vp(2),Dw("ngModel",n.address),r0(),Vp(),Dw("ngModel",n.city),r0(),Vp(),Dw("ngModel",n.stateProvince),r0(),Vp(),Dw("ngModel",n.zipPostalCode),r0(),Vp(2),Dw("ngModel",n.phoneNumber),r0(),Vp(),Dw("ngModel",n.country),r0());},dependencies:[nY,J9,eY,Ck,Dk,O3,Sde,aNe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Dialog - Cancel Credit Card"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dialog-cancel-credit-card"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,se],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-doc"]],standalone:false,decls:397,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoDialogModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),tN(6,"Services"),sg(),Tl(7,"h4",4)(8,"code",5),tN(9,"PoDialogService"),sg()(),Tl(10,"div",2)(11,"p"),tN(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),sg()(),Tl(13,"h3",6),tN(14,"M\xE9todos"),sg(),Tl(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),tN(21," confirm "),sg()()()()(),Tl(22,"tr",12)(23,"td",12)(24,"p"),tN(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),sg()()()(),Gl(26,"br"),Tl(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),tN(33," alert "),sg()()()()(),Tl(34,"tr",12)(35,"td",12)(36,"p"),tN(37,"Exibe um di\xE1logo de alerta."),sg()()()(),Gl(38,"br"),Tl(39,"h3"),tN(40,"Interfaces"),sg(),Tl(41,"h4",13)(42,"code",5),tN(43,"PoDialogAlertLiterals"),sg()(),Tl(44,"div",2)(45,"p"),tN(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Tl(47,"code"),tN(48,"po-dialog"),sg(),tN(49," para o tipo alerta."),sg()(),Tl(50,"h4",6),tN(51,"Propriedades"),sg(),Tl(52,"table",14)(53,"tr",15)(54,"th",16),tN(55,"Nome"),sg(),Tl(56,"th",16),tN(57,"Tipo"),sg(),Tl(58,"th",16),tN(59,"Descri\xE7\xE3o"),sg()(),Tl(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),tN(64," ok"),Gl(65,"br"),sg()()(),Tl(66,"td",18)(67,"code",19),tN(68,"string"),sg()(),Tl(69,"td",12)(70,"em")(71,"strong"),tN(72,"(opcional)"),sg()(),Tl(73,"p"),tN(74,'R\xF3tulo do bot\xE3o de "Ok".'),sg()()()(),Tl(75,"h4",13)(76,"code",5),tN(77,"PoDialogConfirmLiterals"),sg()(),Tl(78,"div",2)(79,"p"),tN(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Tl(81,"code"),tN(82,"po-dialog"),sg(),tN(83," para o tipo confirma\xE7\xE3o."),sg()(),Tl(84,"h4",6),tN(85,"Propriedades"),sg(),Tl(86,"table",14)(87,"tr",15)(88,"th",16),tN(89,"Nome"),sg(),Tl(90,"th",16),tN(91,"Tipo"),sg(),Tl(92,"th",16),tN(93,"Descri\xE7\xE3o"),sg()(),Tl(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),tN(98," cancel"),Gl(99,"br"),sg()()(),Tl(100,"td",18)(101,"code",19),tN(102,"string"),sg()(),Tl(103,"td",12)(104,"em")(105,"strong"),tN(106,"(opcional)"),sg()(),Tl(107,"p"),tN(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),sg()()(),Tl(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),tN(113," confirm"),Gl(114,"br"),sg()()(),Tl(115,"td",18)(116,"code",19),tN(117,"string"),sg()(),Tl(118,"td",12)(119,"em")(120,"strong"),tN(121,"(opcional)"),sg()(),Tl(122,"p"),tN(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),sg()()()(),Tl(124,"h4",13)(125,"code",5),tN(126,"PoDialogAlertOptions"),sg()(),Tl(127,"div",2)(128,"p"),tN(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),sg()(),Tl(130,"h4",6),tN(131,"Propriedades"),sg(),Tl(132,"table",14)(133,"tr",15)(134,"th",16),tN(135,"Nome"),sg(),Tl(136,"th",16),tN(137,"Tipo"),sg(),Tl(138,"th",16),tN(139,"Descri\xE7\xE3o"),sg()(),Tl(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),tN(144," componentsSize"),Gl(145,"br"),sg()()(),Tl(146,"td",18)(147,"code",19),tN(148,"string"),sg()(),Tl(149,"td",12)(150,"em")(151,"strong"),tN(152,"(opcional)"),sg()(),Tl(153,"p"),tN(154,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),sg(),Tl(155,"ul")(156,"li")(157,"code"),tN(158,"small"),sg(),tN(159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(160,"li")(161,"code"),tN(162,"medium"),sg(),tN(163,": aplica a medida medium de cada componente."),sg()(),Tl(164,"blockquote")(165,"p"),tN(166,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(167,"code"),tN(168,"medium"),sg(),tN(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(170,"a",20),tN(171,"po-theme"),sg(),tN(172,"."),sg()()()(),Tl(173,"tr",8)(174,"td",17)(175,"div",10)(176,"span",11),tN(177," literals"),Gl(178,"br"),sg()()(),Tl(179,"td",18)(180,"code",21),tN(181,"PoDialogAlertLiterals"),sg()(),Tl(182,"td",12)(183,"em")(184,"strong"),tN(185,"(opcional)"),sg()(),Tl(186,"p"),tN(187,"Objeto com as literais usadas no "),Tl(188,"code"),tN(189,"po-dialog"),sg(),tN(190," do tipo alerta."),sg(),Tl(191,"p"),tN(192,"Para customizar o "),Tl(193,"em"),tN(194,"label"),sg(),tN(195,", pode ser enviado o objeto da seguinte forma:"),sg(),Tl(196,"pre")(197,"code",22),tN(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),sg()(),Tl(199,"blockquote")(200,"p"),tN(201,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Tl(202,"em"),tN(203,"browser"),sg(),tN(204," (pt, en, es)."),sg()()()(),Tl(205,"tr",8)(206,"td",17)(207,"div",10)(208,"span",11),tN(209," message"),Gl(210,"br"),sg()()(),Tl(211,"td",18)(212,"code",19),tN(213,"string"),sg()(),Tl(214,"td",12)(215,"p"),tN(216,"Mensagem da caixa de di\xE1logo."),sg(),Tl(217,"blockquote")(218,"p"),tN(219,"Pode-se informar um conte\xFAdo HTML na mensagem."),sg()()()(),Tl(220,"tr",8)(221,"td",17)(222,"div",10)(223,"span",11),tN(224," ok"),Gl(225,"br"),sg()()(),Tl(226,"td",18)(227,"code",23),tN(228,"Function"),sg()(),Tl(229,"td",12)(230,"em")(231,"strong"),tN(232,"(opcional)"),sg()(),Tl(233,"p"),tN(234,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),sg()()(),Tl(235,"tr",8)(236,"td",17)(237,"div",10)(238,"span",11),tN(239," title"),Gl(240,"br"),sg()()(),Tl(241,"td",18)(242,"code",19),tN(243,"string"),sg()(),Tl(244,"td",12)(245,"p"),tN(246,"T\xEDtulo da caixa de di\xE1logo."),sg()()()(),Tl(247,"h4",13)(248,"code",5),tN(249,"PoDialogConfirmOptions"),sg()(),Tl(250,"div",2)(251,"p"),tN(252,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),sg()(),Tl(253,"h4",6),tN(254,"Propriedades"),sg(),Tl(255,"table",14)(256,"tr",15)(257,"th",16),tN(258,"Nome"),sg(),Tl(259,"th",16),tN(260,"Tipo"),sg(),Tl(261,"th",16),tN(262,"Descri\xE7\xE3o"),sg()(),Tl(263,"tr",8)(264,"td",17)(265,"div",10)(266,"span",11),tN(267," cancel"),Gl(268,"br"),sg()()(),Tl(269,"td",18)(270,"code",23),tN(271,"Function"),sg()(),Tl(272,"td",12)(273,"em")(274,"strong"),tN(275,"(opcional)"),sg()(),Tl(276,"p"),tN(277,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),sg()()(),Tl(278,"tr",8)(279,"td",17)(280,"div",10)(281,"span",11),tN(282," close"),Gl(283,"br"),sg()()(),Tl(284,"td",18)(285,"code",23),tN(286,"Function"),sg()(),Tl(287,"td",12)(288,"em")(289,"strong"),tN(290,"(opcional)"),sg()(),Tl(291,"p"),tN(292,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),sg()()(),Tl(293,"tr",8)(294,"td",17)(295,"div",10)(296,"span",11),tN(297," componentsSize"),Gl(298,"br"),sg()()(),Tl(299,"td",18)(300,"code",19),tN(301,"string"),sg()(),Tl(302,"td",12)(303,"em")(304,"strong"),tN(305,"(opcional)"),sg()(),Tl(306,"p"),tN(307,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),sg(),Tl(308,"ul")(309,"li")(310,"code"),tN(311,"small"),sg(),tN(312,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(313,"li")(314,"code"),tN(315,"medium"),sg(),tN(316,": aplica a medida medium de cada componente."),sg()(),Tl(317,"blockquote")(318,"p"),tN(319,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(320,"code"),tN(321,"medium"),sg(),tN(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(323,"a",20),tN(324,"po-theme"),sg(),tN(325,"."),sg()()()(),Tl(326,"tr",8)(327,"td",17)(328,"div",10)(329,"span",11),tN(330," confirm"),Gl(331,"br"),sg()()(),Tl(332,"td",18)(333,"code",23),tN(334,"Function"),sg()(),Tl(335,"td",12)(336,"p"),tN(337,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),sg()()(),Tl(338,"tr",8)(339,"td",17)(340,"div",10)(341,"span",11),tN(342," literals"),Gl(343,"br"),sg()()(),Tl(344,"td",18)(345,"code",24),tN(346,"PoDialogConfirmLiterals"),sg()(),Tl(347,"td",12)(348,"em")(349,"strong"),tN(350,"(opcional)"),sg()(),Tl(351,"p"),tN(352,"Objeto com as literais usadas no "),Tl(353,"code"),tN(354,"po-dialog"),sg(),tN(355," do tipo confirma\xE7\xE3o."),sg(),Tl(356,"p"),tN(357,"Para customizar os "),Tl(358,"em"),tN(359,"labels"),sg(),tN(360,", pode ser enviado o objeto da seguinte forma:"),sg(),Tl(361,"pre")(362,"code",22),tN(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),sg()(),Tl(364,"blockquote")(365,"p"),tN(366,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Tl(367,"em"),tN(368,"browser"),sg(),tN(369," (pt, en, es)."),sg()()()(),Tl(370,"tr",8)(371,"td",17)(372,"div",10)(373,"span",11),tN(374," message"),Gl(375,"br"),sg()()(),Tl(376,"td",18)(377,"code",19),tN(378,"string"),sg()(),Tl(379,"td",12)(380,"p"),tN(381,"Mensagem da caixa de di\xE1logo."),sg(),Tl(382,"blockquote")(383,"p"),tN(384,"Pode-se informar um conte\xFAdo HTML na mensagem."),sg()()()(),Tl(385,"tr",8)(386,"td",17)(387,"div",10)(388,"span",11),tN(389," title"),Gl(390,"br"),sg()()(),Tl(391,"td",18)(392,"code",19),tN(393,"string"),sg()(),Tl(394,"td",12)(395,"p"),tN(396,"T\xEDtulo da caixa de di\xE1logo."),sg()()()()());},encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-dialog-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,le,pe,de,me],encapsulation:2})}return a})();var Me=[{path:"",component:ce}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Me),vL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,ge]})}return a})();export{Ze as DocPoDialogModule};