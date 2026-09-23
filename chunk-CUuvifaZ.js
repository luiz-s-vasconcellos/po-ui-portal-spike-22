import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p}static ɵfac=function(l){return new(l||a)(w(e_e))};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Dialog`,3,`p-click`]],template:function(l,n){l&1&&(Ml(0,`po-button`,0),ht(`p-click`,function(){return n.poDialog.alert({title:`PO Dialog`,message:`PO Dialog`})}),lg())},dependencies:[Zt],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dialog Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dialog-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,he,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ne],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize=`medium`;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];dialogActionOptions=[{label:`Ok`,value:`ok`},{label:`Cancel`,value:`cancel`},{label:`Confirm`,value:`confirm`},{label:`Close`,value:`close`}];dialogMethodOptions=[{label:`Alert`,value:`alert`},{label:`Confirm`,value:`confirm`}];constructor(p){this.poAlert=p}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes(`ok`)?this.action=`OK`:void 0})}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0}catch(l){p=void 0}this.dialogMethod===`alert`?this.literalsAlert=p:this.dialogMethod===`confirm`&&(this.literalsConfirm=p)}changeMethod(){this.dialogMethod===`alert`?this.help=`Ex: { "ok": "Concluído" }`:this.help=`Ex: { "cancel": "Não", "confirm": "Sim" }`}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes(`confirm`)?this.action=`Confirm`:void 0,cancel:()=>this.actionOptions.includes(`cancel`)?this.action=`Cancel`:void 0,close:()=>this.actionOptions.includes(`close`)?this.action=`Close`:void 0})}openDialog(){this.action=``,this.dialogMethod===`alert`?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize=`medium`,this.title=`PO Dialog`,this.message=`PO Dialog`,this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=``}static ɵfac=function(l){return new(l||a)(w(e_e))};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-labs`]],standalone:!1,decls:15,vars:13,consts:[[`f`,`ngForm`],[`name`,`openDialog`,`p-label`,`Open Dialog`,3,`p-click`,`p-disabled`],[1,`po-row`],[`p-label`,`Action clicked`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dialogMethod`,`p-label`,`Dialog method`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`literals`,`p-clean`,``,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-blur`,`p-change-model`,`ngModel`,`p-disabled`,`p-help`],[`name`,`actionOptions`,`p-columns`,`4`,`p-label`,`Action options`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=Vx();Ml(0,`po-button`,1),ht(`p-click`,function(){return n.openDialog()}),lg(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),lg(),ql(4,`po-divider`),Ml(5,`form`,null,0)(7,`po-input`,4),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.title,o)||(n.title=o),Jy(o)}),lg(),f0(),Ml(8,`po-input`,5),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.message,o)||(n.message=o),Jy(o)}),lg(),f0(),Ml(9,`po-radio-group`,6),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.dialogMethod,o)||(n.dialogMethod=o),Jy(o)}),ht(`p-change`,function(){return n.changeMethod()}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.literals,o)||(n.literals=o),Jy(o)}),ht(`p-blur`,function(){return n.changeLiterals()})(`p-change-model`,function(){return n.changeLiterals()}),lg(),f0(),Ml(11,`po-checkbox-group`,8),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.actionOptions,o)||(n.actionOptions=o),Jy(o)}),lg(),f0(),Ml(12,`po-radio-group`,9),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.componentsSize,o)||(n.componentsSize=o),Jy(o)}),lg(),f0(),Ml(13,`div`,2)(14,`po-button`,10),ht(`p-click`,function(){return n.restore()}),lg()()()}if(l&2)cw(`p-disabled`,Yx(6).invalid),Up(3),cw(`p-value`,n.action),Up(4),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.message),p0(),Up(),Tw(`ngModel`,n.dialogMethod),cw(`p-options`,n.dialogMethodOptions),p0(),Up(),Tw(`ngModel`,n.literals),cw(`p-disabled`,n.dialogMethod===void 0)(`p-help`,n.help),p0(),Up(),Tw(`ngModel`,n.actionOptions),cw(`p-options`,n.dialogActionOptions),p0(),Up(),Tw(`ngModel`,n.componentsSize),cw(`p-options`,n.componentsSizeOptions),p0()},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,kbe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dialog Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dialog-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return a})();var De=[`form`];var se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:`Master Card`,value:`Master`},{label:`Visa`,value:`visa`},{label:`Diners`,value:`diners`},{label:`Hipercard`,value:`hipercard`}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:`Cancel`,icon:`ICON_DELETE`,action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p))}actionDisabledCheck(p){this.action[0].disabled=p===`INVALID`}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:`Confirm`,message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static ɵfac=function(l){return new(l||a)(w(e_e),w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-cancel-credit-card`]],viewQuery:function(l,n){if(l&1&&Zl(De,7),l&2){let d;lo(d=uo())&&(n.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[[`form`,`ngForm`],[`p-title`,`Credit Card Cancelation`,3,`p-actions`],[1,`po-row`],[`name`,`cardType`,`p-label`,`Card type`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`cardNumber`,`p-label`,`Card number`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-minlength`,`19`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`name`,`securityCode`,`p-label`,`Security code`,`p-mask`,`999`,`p-minlength`,`3`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-label`,`Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`stateProvince`,`p-label`,`State/Province`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`zipPostalCode`,`p-label`,`Zip/PostalCode`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`phoneNumber`,`p-label`,`Phone number`,`p-mask`,`(99) 9?9999-9999`,`p-mask-format-model`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let d=Vx();Ml(0,`po-page-default`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-radio-group`,3),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.cardType,o)||(n.cardType=o),Jy(o)}),lg(),f0(),lg(),Ml(5,`div`,2)(6,`po-input`,4),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.cardNumber,o)||(n.cardNumber=o),Jy(o)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.securityCode,o)||(n.securityCode=o),Jy(o)}),lg(),f0(),lg(),Ml(8,`div`,2)(9,`po-input`,6),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.name,o)||(n.name=o),Jy(o)}),lg(),f0(),lg(),Ml(10,`div`,2)(11,`po-input`,7),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.address,o)||(n.address=o),Jy(o)}),lg(),f0(),Ml(12,`po-input`,8),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.city,o)||(n.city=o),Jy(o)}),lg(),f0(),Ml(13,`po-input`,9),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.stateProvince,o)||(n.stateProvince=o),Jy(o)}),lg(),f0(),Ml(14,`po-input`,10),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.zipPostalCode,o)||(n.zipPostalCode=o),Jy(o)}),lg(),f0(),lg(),Ml(15,`div`,2)(16,`po-input`,11),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.phoneNumber,o)||(n.phoneNumber=o),Jy(o)}),lg(),f0(),Ml(17,`po-input`,12),Mw(`ngModelChange`,function(o){return Qy(d),yN(n.country,o)||(n.country=o),Jy(o)}),lg(),f0(),lg()()()}l&2&&(cw(`p-actions`,n.action),Up(4),Tw(`ngModel`,n.cardType),cw(`p-options`,n.cardTypeOptions),p0(),Up(2),Tw(`ngModel`,n.cardNumber),p0(),Up(),Tw(`ngModel`,n.securityCode),p0(),Up(2),Tw(`ngModel`,n.name),p0(),Up(2),Tw(`ngModel`,n.address),p0(),Up(),Tw(`ngModel`,n.city),p0(),Up(),Tw(`ngModel`,n.stateProvince),p0(),Up(),Tw(`ngModel`,n.zipPostalCode),p0(),Up(2),Tw(`ngModel`,n.phoneNumber),p0(),Up(),Tw(`ngModel`,n.country),p0())},dependencies:[IY,wY,CY,Vk,kk,lU,q0e,V8e],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-cancel-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dialog - Cancel Credit Card`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dialog-cancel-credit-card`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-dialog-doc`]],standalone:!1,decls:397,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDialogAlertLiterals`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoDialogConfirmLiterals`]],template:function(l,n){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoDialogModule } from '@po-ui/ng-components';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Services`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoDialogService`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),lg()(),Ml(13,`h3`,6),mN(14,`Métodos`),lg(),Ml(15,`table`,7)(16,`tr`,8)(17,`th`,9)(18,`div`,10)(19,`h4`)(20,`span`,11),mN(21,` confirm `),lg()()()()(),Ml(22,`tr`,12)(23,`td`,12)(24,`p`),mN(25,`Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento.`),lg()()()(),ql(26,`br`),Ml(27,`table`,7)(28,`tr`,8)(29,`th`,9)(30,`div`,10)(31,`h4`)(32,`span`,11),mN(33,` alert `),lg()()()()(),Ml(34,`tr`,12)(35,`td`,12)(36,`p`),mN(37,`Exibe um diálogo de alerta.`),lg()()()(),ql(38,`br`),Ml(39,`h3`),mN(40,`Interfaces`),lg(),Ml(41,`h4`,13)(42,`code`,5),mN(43,`PoDialogAlertLiterals`),lg()(),Ml(44,`div`,2)(45,`p`),mN(46,`Interface para definição das literais usadas no serviço `),Ml(47,`code`),mN(48,`po-dialog`),lg(),mN(49,` para o tipo alerta.`),lg()(),Ml(50,`h4`,6),mN(51,`Propriedades`),lg(),Ml(52,`table`,14)(53,`tr`,15)(54,`th`,16),mN(55,`Nome`),lg(),Ml(56,`th`,16),mN(57,`Tipo`),lg(),Ml(58,`th`,16),mN(59,`Descrição`),lg()(),Ml(60,`tr`,8)(61,`td`,17)(62,`div`,10)(63,`span`,11),mN(64,` ok`),ql(65,`br`),lg()()(),Ml(66,`td`,18)(67,`code`,19),mN(68,`string`),lg()(),Ml(69,`td`,12)(70,`em`)(71,`strong`),mN(72,`(opcional)`),lg()(),Ml(73,`p`),mN(74,`Rótulo do botão de "Ok".`),lg()()()(),Ml(75,`h4`,13)(76,`code`,5),mN(77,`PoDialogConfirmLiterals`),lg()(),Ml(78,`div`,2)(79,`p`),mN(80,`Interface para definição das literais usadas no serviço `),Ml(81,`code`),mN(82,`po-dialog`),lg(),mN(83,` para o tipo confirmação.`),lg()(),Ml(84,`h4`,6),mN(85,`Propriedades`),lg(),Ml(86,`table`,14)(87,`tr`,15)(88,`th`,16),mN(89,`Nome`),lg(),Ml(90,`th`,16),mN(91,`Tipo`),lg(),Ml(92,`th`,16),mN(93,`Descrição`),lg()(),Ml(94,`tr`,8)(95,`td`,17)(96,`div`,10)(97,`span`,11),mN(98,` cancel`),ql(99,`br`),lg()()(),Ml(100,`td`,18)(101,`code`,19),mN(102,`string`),lg()(),Ml(103,`td`,12)(104,`em`)(105,`strong`),mN(106,`(opcional)`),lg()(),Ml(107,`p`),mN(108,`Rótulo do botão de "Cancelar".`),lg()()(),Ml(109,`tr`,8)(110,`td`,17)(111,`div`,10)(112,`span`,11),mN(113,` confirm`),ql(114,`br`),lg()()(),Ml(115,`td`,18)(116,`code`,19),mN(117,`string`),lg()(),Ml(118,`td`,12)(119,`em`)(120,`strong`),mN(121,`(opcional)`),lg()(),Ml(122,`p`),mN(123,`Rótulo do botão de "Confirmar".`),lg()()()(),Ml(124,`h4`,13)(125,`code`,5),mN(126,`PoDialogAlertOptions`),lg()(),Ml(127,`div`,2)(128,`p`),mN(129,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de alerta do serviço po-dialog.`),lg()(),Ml(130,`h4`,6),mN(131,`Propriedades`),lg(),Ml(132,`table`,14)(133,`tr`,15)(134,`th`,16),mN(135,`Nome`),lg(),Ml(136,`th`,16),mN(137,`Tipo`),lg(),Ml(138,`th`,16),mN(139,`Descrição`),lg()(),Ml(140,`tr`,8)(141,`td`,17)(142,`div`,10)(143,`span`,11),mN(144,` componentsSize`),ql(145,`br`),lg()()(),Ml(146,`td`,18)(147,`code`,19),mN(148,`string`),lg()(),Ml(149,`td`,12)(150,`em`)(151,`strong`),mN(152,`(opcional)`),lg()(),Ml(153,`p`),mN(154,`Define o tamanho dos componentes de formulário no dialog:`),lg(),Ml(155,`ul`)(156,`li`)(157,`code`),mN(158,`small`),lg(),mN(159,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(160,`li`)(161,`code`),mN(162,`medium`),lg(),mN(163,`: aplica a medida medium de cada componente.`),lg()(),Ml(164,`blockquote`)(165,`p`),mN(166,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(167,`code`),mN(168,`medium`),lg(),mN(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(170,`a`,20),mN(171,`po-theme`),lg(),mN(172,`.`),lg()()()(),Ml(173,`tr`,8)(174,`td`,17)(175,`div`,10)(176,`span`,11),mN(177,` literals`),ql(178,`br`),lg()()(),Ml(179,`td`,18)(180,`code`,21),mN(181,`PoDialogAlertLiterals`),lg()(),Ml(182,`td`,12)(183,`em`)(184,`strong`),mN(185,`(opcional)`),lg()(),Ml(186,`p`),mN(187,`Objeto com as literais usadas no `),Ml(188,`code`),mN(189,`po-dialog`),lg(),mN(190,` do tipo alerta.`),lg(),Ml(191,`p`),mN(192,`Para customizar o `),Ml(193,`em`),mN(194,`label`),lg(),mN(195,`, pode ser enviado o objeto da seguinte forma:`),lg(),Ml(196,`pre`)(197,`code`,22),mN(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),lg()(),Ml(199,`blockquote`)(200,`p`),mN(201,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ml(202,`em`),mN(203,`browser`),lg(),mN(204,` (pt, en, es).`),lg()()()(),Ml(205,`tr`,8)(206,`td`,17)(207,`div`,10)(208,`span`,11),mN(209,` message`),ql(210,`br`),lg()()(),Ml(211,`td`,18)(212,`code`,19),mN(213,`string`),lg()(),Ml(214,`td`,12)(215,`p`),mN(216,`Mensagem da caixa de diálogo.`),lg(),Ml(217,`blockquote`)(218,`p`),mN(219,`Pode-se informar um conteúdo HTML na mensagem.`),lg()()()(),Ml(220,`tr`,8)(221,`td`,17)(222,`div`,10)(223,`span`,11),mN(224,` ok`),ql(225,`br`),lg()()(),Ml(226,`td`,18)(227,`code`,23),mN(228,`Function`),lg()(),Ml(229,`td`,12)(230,`em`)(231,`strong`),mN(232,`(opcional)`),lg()(),Ml(233,`p`),mN(234,`Ação executada ao fechar o alerta pelo botão "Ok".`),lg()()(),Ml(235,`tr`,8)(236,`td`,17)(237,`div`,10)(238,`span`,11),mN(239,` title`),ql(240,`br`),lg()()(),Ml(241,`td`,18)(242,`code`,19),mN(243,`string`),lg()(),Ml(244,`td`,12)(245,`p`),mN(246,`Título da caixa de diálogo.`),lg()()()(),Ml(247,`h4`,13)(248,`code`,5),mN(249,`PoDialogConfirmOptions`),lg()(),Ml(250,`div`,2)(251,`p`),mN(252,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de confirmação do serviço po-dialog.`),lg()(),Ml(253,`h4`,6),mN(254,`Propriedades`),lg(),Ml(255,`table`,14)(256,`tr`,15)(257,`th`,16),mN(258,`Nome`),lg(),Ml(259,`th`,16),mN(260,`Tipo`),lg(),Ml(261,`th`,16),mN(262,`Descrição`),lg()(),Ml(263,`tr`,8)(264,`td`,17)(265,`div`,10)(266,`span`,11),mN(267,` cancel`),ql(268,`br`),lg()()(),Ml(269,`td`,18)(270,`code`,23),mN(271,`Function`),lg()(),Ml(272,`td`,12)(273,`em`)(274,`strong`),mN(275,`(opcional)`),lg()(),Ml(276,`p`),mN(277,`Ação de cancelamento da caixa de diálogo.`),lg()()(),Ml(278,`tr`,8)(279,`td`,17)(280,`div`,10)(281,`span`,11),mN(282,` close`),ql(283,`br`),lg()()(),Ml(284,`td`,18)(285,`code`,23),mN(286,`Function`),lg()(),Ml(287,`td`,12)(288,`em`)(289,`strong`),mN(290,`(opcional)`),lg()(),Ml(291,`p`),mN(292,`Ação de fechamento da caixa de diálogo.`),lg()()(),Ml(293,`tr`,8)(294,`td`,17)(295,`div`,10)(296,`span`,11),mN(297,` componentsSize`),ql(298,`br`),lg()()(),Ml(299,`td`,18)(300,`code`,19),mN(301,`string`),lg()(),Ml(302,`td`,12)(303,`em`)(304,`strong`),mN(305,`(opcional)`),lg()(),Ml(306,`p`),mN(307,`Define o tamanho dos componentes de formulário no dialog:`),lg(),Ml(308,`ul`)(309,`li`)(310,`code`),mN(311,`small`),lg(),mN(312,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(313,`li`)(314,`code`),mN(315,`medium`),lg(),mN(316,`: aplica a medida medium de cada componente.`),lg()(),Ml(317,`blockquote`)(318,`p`),mN(319,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(320,`code`),mN(321,`medium`),lg(),mN(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(323,`a`,20),mN(324,`po-theme`),lg(),mN(325,`.`),lg()()()(),Ml(326,`tr`,8)(327,`td`,17)(328,`div`,10)(329,`span`,11),mN(330,` confirm`),ql(331,`br`),lg()()(),Ml(332,`td`,18)(333,`code`,23),mN(334,`Function`),lg()(),Ml(335,`td`,12)(336,`p`),mN(337,`Ação de confirmação da caixa de diálogo.`),lg()()(),Ml(338,`tr`,8)(339,`td`,17)(340,`div`,10)(341,`span`,11),mN(342,` literals`),ql(343,`br`),lg()()(),Ml(344,`td`,18)(345,`code`,24),mN(346,`PoDialogConfirmLiterals`),lg()(),Ml(347,`td`,12)(348,`em`)(349,`strong`),mN(350,`(opcional)`),lg()(),Ml(351,`p`),mN(352,`Objeto com as literais usadas no `),Ml(353,`code`),mN(354,`po-dialog`),lg(),mN(355,` do tipo confirmação.`),lg(),Ml(356,`p`),mN(357,`Para customizar os `),Ml(358,`em`),mN(359,`labels`),lg(),mN(360,`, pode ser enviado o objeto da seguinte forma:`),lg(),Ml(361,`pre`)(362,`code`,22),mN(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),lg()(),Ml(364,`blockquote`)(365,`p`),mN(366,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ml(367,`em`),mN(368,`browser`),lg(),mN(369,` (pt, en, es).`),lg()()()(),Ml(370,`tr`,8)(371,`td`,17)(372,`div`,10)(373,`span`,11),mN(374,` message`),ql(375,`br`),lg()()(),Ml(376,`td`,18)(377,`code`,19),mN(378,`string`),lg()(),Ml(379,`td`,12)(380,`p`),mN(381,`Mensagem da caixa de diálogo.`),lg(),Ml(382,`blockquote`)(383,`p`),mN(384,`Pode-se informar um conteúdo HTML na mensagem.`),lg()()()(),Ml(385,`tr`,8)(386,`td`,17)(387,`div`,10)(388,`span`,11),mN(389,` title`),ql(390,`br`),lg()()(),Ml(391,`td`,18)(392,`code`,19),mN(393,`string`),lg()(),Ml(394,`td`,12)(395,`p`),mN(396,`Título da caixa de diálogo.`),lg()()()()())},encapsulation:2,changeDetection:1})}return a})();var Me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dialog`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-dialog-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-dialog-basic-view`)(6,`sample-po-dialog-labs-view`)(7,`sample-po-dialog-cancel-credit-card-view`),lg()()()),l&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,le,pe,de,me],encapsulation:2,changeDetection:1})}return a})()}];var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[NL.forChild(Me),NL]})}return a})();var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,ge]})}return a})();export{Ze as DocPoDialogModule};