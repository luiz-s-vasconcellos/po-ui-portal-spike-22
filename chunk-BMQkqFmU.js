import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,c9 as Qde,aV as Xp,a$ as Qt,Q as Cl,a1 as dt,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,z as qx,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,c8 as L3,b3 as q3,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,a3 as SNe,av as zl,aw as uo,ax as fo,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p;}static \u0275fac=function(l){return new(l||a)(w(Qde))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Dialog",3,"p-click"]],template:function(l,n){l&1&&(Cl(0,"po-button",0),dt("p-click",function(){return n.poDialog.alert({title:"PO Dialog",message:"PO Dialog"})}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dialog Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dialog-basic/sample-po-dialog-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dialog-basic/sample-po-dialog-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dialog-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ne],encapsulation:2})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize="medium";dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];dialogActionOptions=[{label:"Ok",value:"ok"},{label:"Cancel",value:"cancel"},{label:"Confirm",value:"confirm"},{label:"Close",value:"close"}];dialogMethodOptions=[{label:"Alert",value:"alert"},{label:"Confirm",value:"confirm"}];constructor(p){this.poAlert=p;}ngOnInit(){this.restore();}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes("ok")?this.action="OK":void 0});}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0;}catch(l){p=void 0;}this.dialogMethod==="alert"?this.literalsAlert=p:this.dialogMethod==="confirm"&&(this.literalsConfirm=p);}changeMethod(){this.dialogMethod==="alert"?this.help='Ex: { "ok": "Conclu\xEDdo" }':this.help='Ex: { "cancel": "N\xE3o", "confirm": "Sim" }';}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes("confirm")?this.action="Confirm":void 0,cancel:()=>this.actionOptions.includes("cancel")?this.action="Cancel":void 0,close:()=>this.actionOptions.includes("close")?this.action="Close":void 0});}openDialog(){this.action="",this.dialogMethod==="alert"?this.alertDialog():this.confirmDialog();}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize="medium",this.title="PO Dialog",this.message="PO Dialog",this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help="";}static \u0275fac=function(l){return new(l||a)(w(Qde))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs"]],standalone:false,decls:15,vars:13,consts:[["f","ngForm"],["name","openDialog","p-label","Open Dialog",3,"p-click","p-disabled"],[1,"po-row"],["p-label","Action clicked",1,"po-md-12",3,"p-value"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dialogMethod","p-label","Dialog method",1,"po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","literals","p-clean","","p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-blur","p-change-model","ngModel","p-disabled","p-help"],["name","actionOptions","p-columns","4","p-label","Action options",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","componentsSize","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-button",1),dt("p-click",function(){return n.openDialog()}),og(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3),og(),Hl(4,"po-divider"),Cl(5,"form",null,0)(7,"po-input",4),gw("ngModelChange",function(o){return Jy(d),Zx(n.title,o)||(n.title=o),e_(o)}),og(),Z0(),Cl(8,"po-input",5),gw("ngModelChange",function(o){return Jy(d),Zx(n.message,o)||(n.message=o),e_(o)}),og(),Z0(),Cl(9,"po-radio-group",6),gw("ngModelChange",function(o){return Jy(d),Zx(n.dialogMethod,o)||(n.dialogMethod=o),e_(o)}),dt("p-change",function(){return n.changeMethod()}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(o){return Jy(d),Zx(n.literals,o)||(n.literals=o),e_(o)}),dt("p-blur",function(){return n.changeLiterals()})("p-change-model",function(){return n.changeLiterals()}),og(),Z0(),Cl(11,"po-checkbox-group",8),gw("ngModelChange",function(o){return Jy(d),Zx(n.actionOptions,o)||(n.actionOptions=o),e_(o)}),og(),Z0(),Cl(12,"po-radio-group",9),gw("ngModelChange",function(o){return Jy(d),Zx(n.componentsSize,o)||(n.componentsSize=o),e_(o)}),og(),Z0(),Cl(13,"div",2)(14,"po-button",10),dt("p-click",function(){return n.restore()}),og()()();}if(l&2){let d=Sx(6);ZE("p-disabled",d.invalid),Lp(3),ZE("p-value",n.action),Lp(4),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.message),X0(),Lp(),pw("ngModel",n.dialogMethod),ZE("p-options",n.dialogMethodOptions),X0(),Lp(),pw("ngModel",n.literals),ZE("p-disabled",n.dialogMethod===void 0)("p-help",n.help),X0(),Lp(),pw("ngModel",n.actionOptions),ZE("p-options",n.dialogActionOptions),X0(),Lp(),pw("ngModel",n.componentsSize),ZE("p-options",n.componentsSizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,sme],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dialog Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dialog-labs/sample-po-dialog-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dialog-labs/sample-po-dialog-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dialog-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return a})();var De=["form"],se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:"Master Card",value:"Master"},{label:"Visa",value:"visa"},{label:"Diners",value:"diners"},{label:"Hipercard",value:"hipercard"}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l;}ngOnDestroy(){this.statusSubscription.unsubscribe();}ngOnInit(){this.action=[{label:"Cancel",icon:"ICON_DELETE",action:this.openConfirmDialog.bind(this),disabled:true}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p));}actionDisabledCheck(p){this.action[0].disabled=p==="INVALID";}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset();}openConfirmDialog(){this.poDialog.confirm({title:"Confirm",message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()});}static \u0275fac=function(l){return new(l||a)(w(Qde),w(Xp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card"]],viewQuery:function(l,n){if(l&1&&zl(De,7),l&2){let d;uo(d=fo())&&(n.form=d.first);}},standalone:false,decls:18,vars:12,consts:[["form","ngForm"],["p-title","Credit Card Cancelation",3,"p-actions"],[1,"po-row"],["name","cardType","p-label","Card type","p-required","",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","cardNumber","p-label","Card number","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-minlength","19","p-required","",1,"po-md-8",3,"ngModelChange","ngModel"],["name","securityCode","p-label","Security code","p-mask","999","p-minlength","3","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-label","Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","address","p-label","Address",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","city","p-label","City",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","stateProvince","p-label","State/Province",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","zipPostalCode","p-label","Zip/PostalCode",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","phoneNumber","p-label","Phone number","p-mask","(99) 9?9999-9999","p-mask-format-model","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","country","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-page-default",1)(1,"form",null,0)(3,"div",2)(4,"po-radio-group",3),gw("ngModelChange",function(o){return Jy(d),Zx(n.cardType,o)||(n.cardType=o),e_(o)}),og(),Z0(),og(),Cl(5,"div",2)(6,"po-input",4),gw("ngModelChange",function(o){return Jy(d),Zx(n.cardNumber,o)||(n.cardNumber=o),e_(o)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(o){return Jy(d),Zx(n.securityCode,o)||(n.securityCode=o),e_(o)}),og(),Z0(),og(),Cl(8,"div",2)(9,"po-input",6),gw("ngModelChange",function(o){return Jy(d),Zx(n.name,o)||(n.name=o),e_(o)}),og(),Z0(),og(),Cl(10,"div",2)(11,"po-input",7),gw("ngModelChange",function(o){return Jy(d),Zx(n.address,o)||(n.address=o),e_(o)}),og(),Z0(),Cl(12,"po-input",8),gw("ngModelChange",function(o){return Jy(d),Zx(n.city,o)||(n.city=o),e_(o)}),og(),Z0(),Cl(13,"po-input",9),gw("ngModelChange",function(o){return Jy(d),Zx(n.stateProvince,o)||(n.stateProvince=o),e_(o)}),og(),Z0(),Cl(14,"po-input",10),gw("ngModelChange",function(o){return Jy(d),Zx(n.zipPostalCode,o)||(n.zipPostalCode=o),e_(o)}),og(),Z0(),og(),Cl(15,"div",2)(16,"po-input",11),gw("ngModelChange",function(o){return Jy(d),Zx(n.phoneNumber,o)||(n.phoneNumber=o),e_(o)}),og(),Z0(),Cl(17,"po-input",12),gw("ngModelChange",function(o){return Jy(d),Zx(n.country,o)||(n.country=o),e_(o)}),og(),Z0(),og()()();}l&2&&(ZE("p-actions",n.action),Lp(4),pw("ngModel",n.cardType),ZE("p-options",n.cardTypeOptions),X0(),Lp(2),pw("ngModel",n.cardNumber),X0(),Lp(),pw("ngModel",n.securityCode),X0(),Lp(2),pw("ngModel",n.name),X0(),Lp(2),pw("ngModel",n.address),X0(),Lp(),pw("ngModel",n.city),X0(),Lp(),pw("ngModel",n.stateProvince),X0(),Lp(),pw("ngModel",n.zipPostalCode),X0(),Lp(2),pw("ngModel",n.phoneNumber),X0(),Lp(),pw("ngModel",n.country),X0());},dependencies:[lY,sY,aY,gk,fk,q3,Nde,SNe],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-cancel-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dialog - Cancel Credit Card"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dialog-cancel-credit-card"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-dialog-doc"]],standalone:false,decls:397,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDialogAlertLiterals"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoDialogConfirmLiterals"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoDialogModule } from '@po-ui/ng-components';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Services"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoDialogService"),og()(),Cl(10,"div",2)(11,"p"),qx(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),og()(),Cl(13,"h3",6),qx(14,"M\xE9todos"),og(),Cl(15,"table",7)(16,"tr",8)(17,"th",9)(18,"div",10)(19,"h4")(20,"span",11),qx(21," confirm "),og()()()()(),Cl(22,"tr",12)(23,"td",12)(24,"p"),qx(25,"Exibe um di\xE1logo de confirma\xE7\xE3o, \xE9 poss\xEDvel definir a\xE7\xF5es para as op\xE7\xF5es de confirma\xE7\xE3o e cancelamento."),og()()()(),Hl(26,"br"),Cl(27,"table",7)(28,"tr",8)(29,"th",9)(30,"div",10)(31,"h4")(32,"span",11),qx(33," alert "),og()()()()(),Cl(34,"tr",12)(35,"td",12)(36,"p"),qx(37,"Exibe um di\xE1logo de alerta."),og()()()(),Hl(38,"br"),Cl(39,"h3"),qx(40,"Interfaces"),og(),Cl(41,"h4",13)(42,"code",5),qx(43,"PoDialogAlertLiterals"),og()(),Cl(44,"div",2)(45,"p"),qx(46,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Cl(47,"code"),qx(48,"po-dialog"),og(),qx(49," para o tipo alerta."),og()(),Cl(50,"h4",6),qx(51,"Propriedades"),og(),Cl(52,"table",14)(53,"tr",15)(54,"th",16),qx(55,"Nome"),og(),Cl(56,"th",16),qx(57,"Tipo"),og(),Cl(58,"th",16),qx(59,"Descri\xE7\xE3o"),og()(),Cl(60,"tr",8)(61,"td",17)(62,"div",10)(63,"span",11),qx(64," ok"),Hl(65,"br"),og()()(),Cl(66,"td",18)(67,"code",19),qx(68,"string"),og()(),Cl(69,"td",12)(70,"em")(71,"strong"),qx(72,"(opcional)"),og()(),Cl(73,"p"),qx(74,'R\xF3tulo do bot\xE3o de "Ok".'),og()()()(),Cl(75,"h4",13)(76,"code",5),qx(77,"PoDialogConfirmLiterals"),og()(),Cl(78,"div",2)(79,"p"),qx(80,"Interface para defini\xE7\xE3o das literais usadas no servi\xE7o "),Cl(81,"code"),qx(82,"po-dialog"),og(),qx(83," para o tipo confirma\xE7\xE3o."),og()(),Cl(84,"h4",6),qx(85,"Propriedades"),og(),Cl(86,"table",14)(87,"tr",15)(88,"th",16),qx(89,"Nome"),og(),Cl(90,"th",16),qx(91,"Tipo"),og(),Cl(92,"th",16),qx(93,"Descri\xE7\xE3o"),og()(),Cl(94,"tr",8)(95,"td",17)(96,"div",10)(97,"span",11),qx(98," cancel"),Hl(99,"br"),og()()(),Cl(100,"td",18)(101,"code",19),qx(102,"string"),og()(),Cl(103,"td",12)(104,"em")(105,"strong"),qx(106,"(opcional)"),og()(),Cl(107,"p"),qx(108,'R\xF3tulo do bot\xE3o de "Cancelar".'),og()()(),Cl(109,"tr",8)(110,"td",17)(111,"div",10)(112,"span",11),qx(113," confirm"),Hl(114,"br"),og()()(),Cl(115,"td",18)(116,"code",19),qx(117,"string"),og()(),Cl(118,"td",12)(119,"em")(120,"strong"),qx(121,"(opcional)"),og()(),Cl(122,"p"),qx(123,'R\xF3tulo do bot\xE3o de "Confirmar".'),og()()()(),Cl(124,"h4",13)(125,"code",5),qx(126,"PoDialogAlertOptions"),og()(),Cl(127,"div",2)(128,"p"),qx(129,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de alerta do servi\xE7o po-dialog."),og()(),Cl(130,"h4",6),qx(131,"Propriedades"),og(),Cl(132,"table",14)(133,"tr",15)(134,"th",16),qx(135,"Nome"),og(),Cl(136,"th",16),qx(137,"Tipo"),og(),Cl(138,"th",16),qx(139,"Descri\xE7\xE3o"),og()(),Cl(140,"tr",8)(141,"td",17)(142,"div",10)(143,"span",11),qx(144," componentsSize"),Hl(145,"br"),og()()(),Cl(146,"td",18)(147,"code",19),qx(148,"string"),og()(),Cl(149,"td",12)(150,"em")(151,"strong"),qx(152,"(opcional)"),og()(),Cl(153,"p"),qx(154,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),og(),Cl(155,"ul")(156,"li")(157,"code"),qx(158,"small"),og(),qx(159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(160,"li")(161,"code"),qx(162,"medium"),og(),qx(163,": aplica a medida medium de cada componente."),og()(),Cl(164,"blockquote")(165,"p"),qx(166,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(167,"code"),qx(168,"medium"),og(),qx(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(170,"a",20),qx(171,"po-theme"),og(),qx(172,"."),og()()()(),Cl(173,"tr",8)(174,"td",17)(175,"div",10)(176,"span",11),qx(177," literals"),Hl(178,"br"),og()()(),Cl(179,"td",18)(180,"code",21),qx(181,"PoDialogAlertLiterals"),og()(),Cl(182,"td",12)(183,"em")(184,"strong"),qx(185,"(opcional)"),og()(),Cl(186,"p"),qx(187,"Objeto com as literais usadas no "),Cl(188,"code"),qx(189,"po-dialog"),og(),qx(190," do tipo alerta."),og(),Cl(191,"p"),qx(192,"Para customizar o "),Cl(193,"em"),qx(194,"label"),og(),qx(195,", pode ser enviado o objeto da seguinte forma:"),og(),Cl(196,"pre")(197,"code",22),qx(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),og()(),Cl(199,"blockquote")(200,"p"),qx(201,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Cl(202,"em"),qx(203,"browser"),og(),qx(204," (pt, en, es)."),og()()()(),Cl(205,"tr",8)(206,"td",17)(207,"div",10)(208,"span",11),qx(209," message"),Hl(210,"br"),og()()(),Cl(211,"td",18)(212,"code",19),qx(213,"string"),og()(),Cl(214,"td",12)(215,"p"),qx(216,"Mensagem da caixa de di\xE1logo."),og(),Cl(217,"blockquote")(218,"p"),qx(219,"Pode-se informar um conte\xFAdo HTML na mensagem."),og()()()(),Cl(220,"tr",8)(221,"td",17)(222,"div",10)(223,"span",11),qx(224," ok"),Hl(225,"br"),og()()(),Cl(226,"td",18)(227,"code",23),qx(228,"Function"),og()(),Cl(229,"td",12)(230,"em")(231,"strong"),qx(232,"(opcional)"),og()(),Cl(233,"p"),qx(234,'A\xE7\xE3o executada ao fechar o alerta pelo bot\xE3o "Ok".'),og()()(),Cl(235,"tr",8)(236,"td",17)(237,"div",10)(238,"span",11),qx(239," title"),Hl(240,"br"),og()()(),Cl(241,"td",18)(242,"code",19),qx(243,"string"),og()(),Cl(244,"td",12)(245,"p"),qx(246,"T\xEDtulo da caixa de di\xE1logo."),og()()()(),Cl(247,"h4",13)(248,"code",5),qx(249,"PoDialogConfirmOptions"),og()(),Cl(250,"div",2)(251,"p"),qx(252,"Interface para o t\xEDtulo e a mensagem do servi\xE7o po-dialog. Interface com as propriedades da caixa de di\xE1logo de confirma\xE7\xE3o do servi\xE7o po-dialog."),og()(),Cl(253,"h4",6),qx(254,"Propriedades"),og(),Cl(255,"table",14)(256,"tr",15)(257,"th",16),qx(258,"Nome"),og(),Cl(259,"th",16),qx(260,"Tipo"),og(),Cl(261,"th",16),qx(262,"Descri\xE7\xE3o"),og()(),Cl(263,"tr",8)(264,"td",17)(265,"div",10)(266,"span",11),qx(267," cancel"),Hl(268,"br"),og()()(),Cl(269,"td",18)(270,"code",23),qx(271,"Function"),og()(),Cl(272,"td",12)(273,"em")(274,"strong"),qx(275,"(opcional)"),og()(),Cl(276,"p"),qx(277,"A\xE7\xE3o de cancelamento da caixa de di\xE1logo."),og()()(),Cl(278,"tr",8)(279,"td",17)(280,"div",10)(281,"span",11),qx(282," close"),Hl(283,"br"),og()()(),Cl(284,"td",18)(285,"code",23),qx(286,"Function"),og()(),Cl(287,"td",12)(288,"em")(289,"strong"),qx(290,"(opcional)"),og()(),Cl(291,"p"),qx(292,"A\xE7\xE3o de fechamento da caixa de di\xE1logo."),og()()(),Cl(293,"tr",8)(294,"td",17)(295,"div",10)(296,"span",11),qx(297," componentsSize"),Hl(298,"br"),og()()(),Cl(299,"td",18)(300,"code",19),qx(301,"string"),og()(),Cl(302,"td",12)(303,"em")(304,"strong"),qx(305,"(opcional)"),og()(),Cl(306,"p"),qx(307,"Define o tamanho dos componentes de formul\xE1rio no dialog:"),og(),Cl(308,"ul")(309,"li")(310,"code"),qx(311,"small"),og(),qx(312,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(313,"li")(314,"code"),qx(315,"medium"),og(),qx(316,": aplica a medida medium de cada componente."),og()(),Cl(317,"blockquote")(318,"p"),qx(319,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(320,"code"),qx(321,"medium"),og(),qx(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(323,"a",20),qx(324,"po-theme"),og(),qx(325,"."),og()()()(),Cl(326,"tr",8)(327,"td",17)(328,"div",10)(329,"span",11),qx(330," confirm"),Hl(331,"br"),og()()(),Cl(332,"td",18)(333,"code",23),qx(334,"Function"),og()(),Cl(335,"td",12)(336,"p"),qx(337,"A\xE7\xE3o de confirma\xE7\xE3o da caixa de di\xE1logo."),og()()(),Cl(338,"tr",8)(339,"td",17)(340,"div",10)(341,"span",11),qx(342," literals"),Hl(343,"br"),og()()(),Cl(344,"td",18)(345,"code",24),qx(346,"PoDialogConfirmLiterals"),og()(),Cl(347,"td",12)(348,"em")(349,"strong"),qx(350,"(opcional)"),og()(),Cl(351,"p"),qx(352,"Objeto com as literais usadas no "),Cl(353,"code"),qx(354,"po-dialog"),og(),qx(355," do tipo confirma\xE7\xE3o."),og(),Cl(356,"p"),qx(357,"Para customizar os "),Cl(358,"em"),qx(359,"labels"),og(),qx(360,", pode ser enviado o objeto da seguinte forma:"),og(),Cl(361,"pre")(362,"code",22),qx(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),og()(),Cl(364,"blockquote")(365,"p"),qx(366,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),Cl(367,"em"),qx(368,"browser"),og(),qx(369," (pt, en, es)."),og()()()(),Cl(370,"tr",8)(371,"td",17)(372,"div",10)(373,"span",11),qx(374," message"),Hl(375,"br"),og()()(),Cl(376,"td",18)(377,"code",19),qx(378,"string"),og()(),Cl(379,"td",12)(380,"p"),qx(381,"Mensagem da caixa de di\xE1logo."),og(),Cl(382,"blockquote")(383,"p"),qx(384,"Pode-se informar um conte\xFAdo HTML na mensagem."),og()()()(),Cl(385,"tr",8)(386,"td",17)(387,"div",10)(388,"span",11),qx(389," title"),Hl(390,"br"),og()()(),Cl(391,"td",18)(392,"code",19),qx(393,"string"),og()(),Cl(394,"td",12)(395,"p"),qx(396,"T\xEDtulo da caixa de di\xE1logo."),og()()()()());},encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dialog",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-dialog-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-dialog-basic-view")(6,"sample-po-dialog-labs-view")(7,"sample-po-dialog-cancel-credit-card-view"),og()()()),l&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,le,pe,de,me],encapsulation:2})}return a})();var Me=[{path:"",component:ce}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(Me),bL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,ge]})}return a})();export{Ze as DocPoDialogModule};