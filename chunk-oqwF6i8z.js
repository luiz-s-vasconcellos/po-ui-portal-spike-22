import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,by as vle,aE as Bp,aK as Pe$1,J as wl,a1 as ut,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,z as Ux,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,bx as ia,aO as Yo,bB as ga,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,a3 as D3,as as $l,at as uo,au as fo,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ae=(()=>{class a{poDialog;constructor(p){this.poDialog=p;}static \u0275fac=function(l){return new(l||a)(C(vle))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(wl(0,"po-button",0),ut("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),ng());},dependencies:[Pe$1],encapsulation:2,changeDetection:1})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dialog Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dialog-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ae],encapsulation:2})}return a})();var se=(()=>{class a{poAlert;action;actionOptions;componentsSize="medium";dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p;}ngOnInit(){this.restore();}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0});}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0;}catch(l){p=void 0;}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p);}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0});}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog();}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize="medium",this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help="";}static \u0275fac=function(l){return new(l||a)(C(vle))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs"]],standalone:false,decls:15,vars:13,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-blur","p-change-model","ngModel","p-disabled","p-help"],["name","actionOptions","p-columns","4","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-button",1),ut("p-click",function(){return n.openDialog()}),ng(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3),ng(),Ul(4,"po-divider"),wl(5,"form",null,0)(7,"po-input",4),pw("ngModelChange",function(o){return Qy(d),$x(n.title,o)||(n.title=o),Jy(o)}),ng(),$0(),wl(8,"po-input",5),pw("ngModelChange",function(o){return Qy(d),$x(n.message,o)||(n.message=o),Jy(o)}),ng(),$0(),wl(9,"po-radio-group",6),pw("ngModelChange",function(o){return Qy(d),$x(n.dialogMethod,o)||(n.dialogMethod=o),Jy(o)}),ut("p-change",function(){return n.changeMethod()}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(o){return Qy(d),$x(n.literals,o)||(n.literals=o),Jy(o)}),ut("p-blur",function(){return n.changeLiterals()})("p-change-model",function(){return n.changeLiterals()}),ng(),$0(),wl(11,"po-checkbox-group",8),pw("ngModelChange",function(o){return Qy(d),$x(n.actionOptions,o)||(n.actionOptions=o),Jy(o)}),ng(),$0(),wl(12,"po-radio-group",9),pw("ngModelChange",function(o){return Qy(d),$x(n.componentsSize,o)||(n.componentsSize=o),Jy(o)}),ng(),$0(),wl(13,"div",2)(14,"po-button",10),ut("p-click",function(){return n.restore()}),ng()()();}if(l&2){let d=_x(6);YE("p-disabled",d.invalid),Pp(3),YE("p-value",n.action),Pp(4),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.message),G0(),Pp(),hw("ngModel",n.dialogMethod),YE("p-options",n.dialogMethodOptions),G0(),Pp(),hw("ngModel",n.literals),YE("p-disabled",n.dialogMethod===void 0)("p-help",n.help),G0(),Pp(),hw("ngModel",n.actionOptions),YE("p-options",n.dialogActionOptions),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,Vp],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dialog Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dialog-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return a})();var we=["form"],me=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l;}ngOnDestroy(){this.statusSubscription.unsubscribe();}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:true}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p));}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID";}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset();}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()});}static \u0275fac=function(l){return new(l||a)(C(vle),C(Bp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&$l(we,7),l&2){let d;uo(d=fo())&&(n.form=d.first);}},standalone:false,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),pw("ngModelChange",function(o){return Qy(d),$x(n.cardType,o)||(n.cardType=o),Jy(o)}),ng(),$0(),ng(),wl(5,"div",2)(6,"po-input",4),pw("ngModelChange",function(o){return Qy(d),$x(n.cardNumber,o)||(n.cardNumber=o),Jy(o)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(o){return Qy(d),$x(n.securityCode,o)||(n.securityCode=o),Jy(o)}),ng(),$0(),ng(),wl(8,"div",2)(9,"po-input",6),pw("ngModelChange",function(o){return Qy(d),$x(n.name,o)||(n.name=o),Jy(o)}),ng(),$0(),ng(),wl(10,"div",2)(11,"po-input",7),pw("ngModelChange",function(o){return Qy(d),$x(n.address,o)||(n.address=o),Jy(o)}),ng(),$0(),wl(12,"po-input",8),pw("ngModelChange",function(o){return Qy(d),$x(n.city,o)||(n.city=o),Jy(o)}),ng(),$0(),wl(13,"po-input",9),pw("ngModelChange",function(o){return Qy(d),$x(n.stateProvince,o)||(n.stateProvince=o),Jy(o)}),ng(),$0(),wl(14,"po-input",10),pw("ngModelChange",function(o){return Qy(d),$x(n.zipPostalCode,o)||(n.zipPostalCode=o),Jy(o)}),ng(),$0(),ng(),wl(15,"div",2)(16,"po-input",11),pw("ngModelChange",function(o){return Qy(d),$x(n.phoneNumber,o)||(n.phoneNumber=o),Jy(o)}),ng(),$0(),wl(17,"po-input",12),pw("ngModelChange",function(o){return Qy(d),$x(n.country,o)||(n.country=o),Jy(o)}),ng(),$0(),ng()()();}l&2&&(YE("p-actions",n.action),Pp(4),hw("ngModel",n.cardType),YE("p-options",n.cardTypeOptions),G0(),Pp(2),hw("ngModel",n.cardNumber),G0(),Pp(),hw("ngModel",n.securityCode),G0(),Pp(2),hw("ngModel",n.name),G0(),Pp(2),hw("ngModel",n.address),G0(),Pp(),hw("ngModel",n.city),G0(),Pp(),hw("ngModel",n.stateProvince),G0(),Pp(),hw("ngModel",n.zipPostalCode),G0(),Pp(2),hw("ngModel",n.phoneNumber),G0(),Pp(),hw("ngModel",n.country),G0());},dependencies:[aY,iY,oY,ck,ok,Yo,ga,D3],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dialog - Cancel Credit Card"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dialog-cancel-credit-card"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Te,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-doc"]],standalone:false,decls:397,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoDialogModule } from '@po-ui/ng-components';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Services"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoDialogService"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),ng()(),wl(13,"h3",6),Ux(14,"M\xE9todos"),ng(),wl(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),Ux(21," confirm "),ng()()()()(),wl(22,"tr",12)(23,"td",12)(24,"p"),Ux(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),ng()()()(),Ul(26,"br"),wl(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),Ux(33," alert "),ng()()()()(),wl(34,"tr",12)(35,"td",12)(36,"p"),Ux(37,"Exibe um di\xE1logo de alerta."),ng()()()(),Ul(38,"br"),wl(39,"h3"),Ux(40,"Interfaces"),ng(),wl(41,"h4",13)(42,"code",5),Ux(43,"PoDialogAlertLiterals"),ng()(),wl(44,"div",2)(45,"p"),Ux(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),wl(47,"code"),Ux(48,"po-dialog"),ng(),Ux(49," para o tipo alerta."),ng()(),wl(50,"h4",6),Ux(51,"Propriedades"),ng(),wl(52,"table",14)(53,"tr",15)(54,"th",16),Ux(55,"Nome"),ng(),wl(56,"th",16),Ux(57,"Tipo"),ng(),wl(58,"th",16),Ux(59,"Descri\xE7\xE3o"),ng()(),wl(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),Ux(64," ok"),Ul(65,"br"),ng()()(),wl(66,"td",18)(67,"code",19),Ux(68,"string"),ng()(),wl(69,"td",12)(70,"em")(71,"strong"),Ux(72,"(opcional)"),ng()(),wl(73,"p"),Ux(74,'R\xF3tulo do bot\xE3o de "Ok".'),ng()()()(),wl(75,"h4",13)(76,"code",5),Ux(77,"PoDialogConfirmLiterals"),ng()(),wl(78,"div",2)(79,"p"),Ux(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),wl(81,"code"),Ux(82,"po-dialog"),ng(),Ux(83," para o tipo confirma\xE7\xE3o."),ng()(),wl(84,"h4",6),Ux(85,"Propriedades"),ng(),wl(86,"table",14)(87,"tr",15)(88,"th",16),Ux(89,"Nome"),ng(),wl(90,"th",16),Ux(91,"Tipo"),ng(),wl(92,"th",16),Ux(93,"Descri\xE7\xE3o"),ng()(),wl(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),Ux(98," cancel"),Ul(99,"br"),ng()()(),wl(100,"td",18)(101,"code",19),Ux(102,"string"),ng()(),wl(103,"td",12)(104,"em")(105,"strong"),Ux(106,"(opcional)"),ng()(),wl(107,"p"),Ux(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),ng()()(),wl(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),Ux(113," confirm"),Ul(114,"br"),ng()()(),wl(115,"td",18)(116,"code",19),Ux(117,"string"),ng()(),wl(118,"td",12)(119,"em")(120,"strong"),Ux(121,"(opcional)"),ng()(),wl(122,"p"),Ux(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),ng()()()(),wl(124,"h4",13)(125,"code",5),Ux(126,"PoDialogAlertOptions"),ng()(),wl(127,"div",2)(128,"p"),Ux(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),ng()(),wl(130,"h4",6),Ux(131,"Propriedades"),ng(),wl(132,"table",14)(133,"tr",15)(134,"th",16),Ux(135,"Nome"),ng(),wl(136,"th",16),Ux(137,"Tipo"),ng(),wl(138,"th",16),Ux(139,"Descri\xE7\xE3o"),ng()(),wl(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),Ux(144," componentsSize"),Ul(145,"br"),ng()()(),wl(146,"td",18)(147,"code",19),Ux(148,"string"),ng()(),wl(149,"td",12)(150,"em")(151,"strong"),Ux(152,"(opcional)"),ng()(),wl(153,"p"),Ux(154,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),ng(),wl(155,"ul")(156,"li")(157,"code"),Ux(158,"small"),ng(),Ux(159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(160,"li")(161,"code"),Ux(162,"medium"),ng(),Ux(163,": aplica a medida medium de cada componente."),ng()(),wl(164,"blockquote")(165,"p"),Ux(166,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(167,"code"),Ux(168,"medium"),ng(),Ux(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(170,"a",20),Ux(171,"po-theme"),ng(),Ux(172,"."),ng()()()(),wl(173,"tr",8)(174,"td",17)(175,"div",10)(176,"span",11),Ux(177," literals"),Ul(178,"br"),ng()()(),wl(179,"td",18)(180,"code",21),Ux(181,"PoDialogAlertLiterals"),ng()(),wl(182,"td",12)(183,"em")(184,"strong"),Ux(185,"(opcional)"),ng()(),wl(186,"p"),Ux(187,"Objeto com as literais usadas no "),wl(188,"code"),Ux(189,"po-dialog"),ng(),Ux(190," do tipo alerta."),ng(),wl(191,"p"),Ux(192,"Para customizar o "),wl(193,"em"),Ux(194,"label"),ng(),Ux(195,", pode ser enviado o objeto da seguinte forma:"),ng(),wl(196,"pre")(197,"code",22),Ux(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),ng()(),wl(199,"blockquote")(200,"p"),Ux(201,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),wl(202,"em"),Ux(203,"browser"),ng(),Ux(204," (pt, en, es)."),ng()()()(),wl(205,"tr",8)(206,"td",17)(207,"div",10)(208,"span",11),Ux(209," message"),Ul(210,"br"),ng()()(),wl(211,"td",18)(212,"code",19),Ux(213,"string"),ng()(),wl(214,"td",12)(215,"p"),Ux(216,"Mensagem da caixa de di\xE1logo."),ng(),wl(217,"blockquote")(218,"p"),Ux(219,"Pode-se informar um conte\xFAdo HTML na mensagem."),ng()()()(),wl(220,"tr",8)(221,"td",17)(222,"div",10)(223,"span",11),Ux(224," ok"),Ul(225,"br"),ng()()(),wl(226,"td",18)(227,"code",23),Ux(228,"Function"),ng()(),wl(229,"td",12)(230,"em")(231,"strong"),Ux(232,"(opcional)"),ng()(),wl(233,"p"),Ux(234,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),ng()()(),wl(235,"tr",8)(236,"td",17)(237,"div",10)(238,"span",11),Ux(239," title"),Ul(240,"br"),ng()()(),wl(241,"td",18)(242,"code",19),Ux(243,"string"),ng()(),wl(244,"td",12)(245,"p"),Ux(246,"T\xEDtulo da caixa de di\xE1logo."),ng()()()(),wl(247,"h4",13)(248,"code",5),Ux(249,"PoDialogConfirmOptions"),ng()(),wl(250,"div",2)(251,"p"),Ux(252,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),ng()(),wl(253,"h4",6),Ux(254,"Propriedades"),ng(),wl(255,"table",14)(256,"tr",15)(257,"th",16),Ux(258,"Nome"),ng(),wl(259,"th",16),Ux(260,"Tipo"),ng(),wl(261,"th",16),Ux(262,"Descri\xE7\xE3o"),ng()(),wl(263,"tr",8)(264,"td",17)(265,"div",10)(266,"span",11),Ux(267," cancel"),Ul(268,"br"),ng()()(),wl(269,"td",18)(270,"code",23),Ux(271,"Function"),ng()(),wl(272,"td",12)(273,"em")(274,"strong"),Ux(275,"(opcional)"),ng()(),wl(276,"p"),Ux(277,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),ng()()(),wl(278,"tr",8)(279,"td",17)(280,"div",10)(281,"span",11),Ux(282," close"),Ul(283,"br"),ng()()(),wl(284,"td",18)(285,"code",23),Ux(286,"Function"),ng()(),wl(287,"td",12)(288,"em")(289,"strong"),Ux(290,"(opcional)"),ng()(),wl(291,"p"),Ux(292,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),ng()()(),wl(293,"tr",8)(294,"td",17)(295,"div",10)(296,"span",11),Ux(297," componentsSize"),Ul(298,"br"),ng()()(),wl(299,"td",18)(300,"code",19),Ux(301,"string"),ng()(),wl(302,"td",12)(303,"em")(304,"strong"),Ux(305,"(opcional)"),ng()(),wl(306,"p"),Ux(307,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),ng(),wl(308,"ul")(309,"li")(310,"code"),Ux(311,"small"),ng(),Ux(312,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(313,"li")(314,"code"),Ux(315,"medium"),ng(),Ux(316,": aplica a medida medium de cada componente."),ng()(),wl(317,"blockquote")(318,"p"),Ux(319,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(320,"code"),Ux(321,"medium"),ng(),Ux(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(323,"a",20),Ux(324,"po-theme"),ng(),Ux(325,"."),ng()()()(),wl(326,"tr",8)(327,"td",17)(328,"div",10)(329,"span",11),Ux(330," confirm"),Ul(331,"br"),ng()()(),wl(332,"td",18)(333,"code",23),Ux(334,"Function"),ng()(),wl(335,"td",12)(336,"p"),Ux(337,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),ng()()(),wl(338,"tr",8)(339,"td",17)(340,"div",10)(341,"span",11),Ux(342," literals"),Ul(343,"br"),ng()()(),wl(344,"td",18)(345,"code",24),Ux(346,"PoDialogConfirmLiterals"),ng()(),wl(347,"td",12)(348,"em")(349,"strong"),Ux(350,"(opcional)"),ng()(),wl(351,"p"),Ux(352,"Objeto com as literais usadas no "),wl(353,"code"),Ux(354,"po-dialog"),ng(),Ux(355," do tipo confirma\xE7\xE3o."),ng(),wl(356,"p"),Ux(357,"Para customizar os "),wl(358,"em"),Ux(359,"labels"),ng(),Ux(360,", pode ser enviado o objeto da seguinte forma:"),ng(),wl(361,"pre")(362,"code",22),Ux(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),ng()(),wl(364,"blockquote")(365,"p"),Ux(366,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),wl(367,"em"),Ux(368,"browser"),ng(),Ux(369," (pt, en, es)."),ng()()()(),wl(370,"tr",8)(371,"td",17)(372,"div",10)(373,"span",11),Ux(374," message"),Ul(375,"br"),ng()()(),wl(376,"td",18)(377,"code",19),Ux(378,"string"),ng()(),wl(379,"td",12)(380,"p"),Ux(381,"Mensagem da caixa de di\xE1logo."),ng(),wl(382,"blockquote")(383,"p"),Ux(384,"Pode-se informar um conte\xFAdo HTML na mensagem."),ng()()()(),wl(385,"tr",8)(386,"td",17)(387,"div",10)(388,"span",11),Ux(389," title"),Ul(390,"br"),ng()()(),wl(391,"td",18)(392,"code",19),Ux(393,"string"),ng()(),wl(394,"td",12)(395,"p"),Ux(396,"T\xEDtulo da caixa de di\xE1logo."),ng()()()()());},encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-dialog-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,pe,de,ce,ge],encapsulation:2})}return a})();var Le=[{path:"",component:ue}],he=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[vL.forChild(Le),vL]})}return a})();var at=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[u5,he]})}return a})();export{at as DocPoDialogModule};