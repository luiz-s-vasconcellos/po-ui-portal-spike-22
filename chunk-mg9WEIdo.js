import{$i as pt,Br as Qn,Ci as fo,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,i as _a,in as kte,ji as ho,k as D4,ki as he$1,ni as Xc,nr as D9,nt as Nte,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-EZZF3RMT.js";var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p}static ɵfac=function(l){return new(l||a)(E(Nte))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Dialog`,3,`p-click`]],template:function(l,n){l&1&&(Ac(0,`po-button`,0),pt(`p-click`,function(){return n.poDialog.alert({title:`PO Dialog`,message:`PO Dialog`})}),ug())},dependencies:[ni],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dialog Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dialog-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,he,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ne],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize=`medium`;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];dialogActionOptions=[{label:`Ok`,value:`ok`},{label:`Cancel`,value:`cancel`},{label:`Confirm`,value:`confirm`},{label:`Close`,value:`close`}];dialogMethodOptions=[{label:`Alert`,value:`alert`},{label:`Confirm`,value:`confirm`}];constructor(p){this.poAlert=p}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes(`ok`)?this.action=`OK`:void 0})}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0}catch(l){p=void 0}this.dialogMethod===`alert`?this.literalsAlert=p:this.dialogMethod===`confirm`&&(this.literalsConfirm=p)}changeMethod(){this.dialogMethod===`alert`?this.help=`Ex: { "ok": "Concluído" }`:this.help=`Ex: { "cancel": "Não", "confirm": "Sim" }`}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes(`confirm`)?this.action=`Confirm`:void 0,cancel:()=>this.actionOptions.includes(`cancel`)?this.action=`Cancel`:void 0,close:()=>this.actionOptions.includes(`close`)?this.action=`Close`:void 0})}openDialog(){this.action=``,this.dialogMethod===`alert`?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize=`medium`,this.title=`PO Dialog`,this.message=`PO Dialog`,this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=``}static ɵfac=function(l){return new(l||a)(E(Nte))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-labs`]],standalone:!1,decls:15,vars:13,consts:[[`f`,`ngForm`],[`name`,`openDialog`,`p-label`,`Open Dialog`,3,`p-click`,`p-disabled`],[1,`po-row`],[`p-label`,`Action clicked`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dialogMethod`,`p-label`,`Dialog method`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`literals`,`p-clean`,``,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-blur`,`p-change-model`,`ngModel`,`p-disabled`,`p-help`],[`name`,`actionOptions`,`p-columns`,`4`,`p-label`,`Action options`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=Bx();Ac(0,`po-button`,1),pt(`p-click`,function(){return n.openDialog()}),ug(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3),ug(),Kc(4,`po-divider`),Ac(5,`form`,null,0)(7,`po-input`,4),RE(`ngModelChange`,function(o){return Jv(d),DN(n.title,o)||(n.title=o),e_(o)}),ug(),p0(),Ac(8,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(d),DN(n.message,o)||(n.message=o),e_(o)}),ug(),p0(),Ac(9,`po-radio-group`,6),RE(`ngModelChange`,function(o){return Jv(d),DN(n.dialogMethod,o)||(n.dialogMethod=o),e_(o)}),pt(`p-change`,function(){return n.changeMethod()}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(o){return Jv(d),DN(n.literals,o)||(n.literals=o),e_(o)}),pt(`p-blur`,function(){return n.changeLiterals()})(`p-change-model`,function(){return n.changeLiterals()}),ug(),p0(),Ac(11,`po-checkbox-group`,8),RE(`ngModelChange`,function(o){return Jv(d),DN(n.actionOptions,o)||(n.actionOptions=o),e_(o)}),ug(),p0(),Ac(12,`po-radio-group`,9),RE(`ngModelChange`,function(o){return Jv(d),DN(n.componentsSize,o)||(n.componentsSize=o),e_(o)}),ug(),p0(),Ac(13,`div`,2)(14,`po-button`,10),pt(`p-click`,function(){return n.restore()}),ug()()()}if(l&2){let d=Zx(6);cE(`p-disabled`,d.invalid),Hp(3),cE(`p-value`,n.action),Hp(4),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.message),m0(),Hp(),TE(`ngModel`,n.dialogMethod),cE(`p-options`,n.dialogMethodOptions),m0(),Hp(),TE(`ngModel`,n.literals),cE(`p-disabled`,n.dialogMethod===void 0)(`p-help`,n.help),m0(),Hp(),TE(`ngModel`,n.actionOptions),cE(`p-options`,n.dialogActionOptions),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-options`,n.componentsSizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,hoe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dialog Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dialog-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return a})();var De=[`form`];var se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:`Master Card`,value:`Master`},{label:`Visa`,value:`visa`},{label:`Diners`,value:`diners`},{label:`Hipercard`,value:`hipercard`}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:`Cancel`,icon:`ICON_DELETE`,action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p))}actionDisabledCheck(p){this.action[0].disabled=p===`INVALID`}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:`Confirm`,message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static ɵfac=function(l){return new(l||a)(E(Nte),E(Ou))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card`]],viewQuery:function(l,n){if(l&1&&Xc(De,7),l&2){let d;fo(d=ho())&&(n.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[[`form`,`ngForm`],[`p-title`,`Credit Card Cancelation`,3,`p-actions`],[1,`po-row`],[`name`,`cardType`,`p-label`,`Card type`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`cardNumber`,`p-label`,`Card number`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-minlength`,`19`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`name`,`securityCode`,`p-label`,`Security code`,`p-mask`,`999`,`p-minlength`,`3`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-label`,`Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`stateProvince`,`p-label`,`State/Province`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`zipPostalCode`,`p-label`,`Zip/PostalCode`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`phoneNumber`,`p-label`,`Phone number`,`p-mask`,`(99) 9?9999-9999`,`p-mask-format-model`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let d=Bx();Ac(0,`po-page-default`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-radio-group`,3),RE(`ngModelChange`,function(o){return Jv(d),DN(n.cardType,o)||(n.cardType=o),e_(o)}),ug(),p0(),ug(),Ac(5,`div`,2)(6,`po-input`,4),RE(`ngModelChange`,function(o){return Jv(d),DN(n.cardNumber,o)||(n.cardNumber=o),e_(o)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(d),DN(n.securityCode,o)||(n.securityCode=o),e_(o)}),ug(),p0(),ug(),Ac(8,`div`,2)(9,`po-input`,6),RE(`ngModelChange`,function(o){return Jv(d),DN(n.name,o)||(n.name=o),e_(o)}),ug(),p0(),ug(),Ac(10,`div`,2)(11,`po-input`,7),RE(`ngModelChange`,function(o){return Jv(d),DN(n.address,o)||(n.address=o),e_(o)}),ug(),p0(),Ac(12,`po-input`,8),RE(`ngModelChange`,function(o){return Jv(d),DN(n.city,o)||(n.city=o),e_(o)}),ug(),p0(),Ac(13,`po-input`,9),RE(`ngModelChange`,function(o){return Jv(d),DN(n.stateProvince,o)||(n.stateProvince=o),e_(o)}),ug(),p0(),Ac(14,`po-input`,10),RE(`ngModelChange`,function(o){return Jv(d),DN(n.zipPostalCode,o)||(n.zipPostalCode=o),e_(o)}),ug(),p0(),ug(),Ac(15,`div`,2)(16,`po-input`,11),RE(`ngModelChange`,function(o){return Jv(d),DN(n.phoneNumber,o)||(n.phoneNumber=o),e_(o)}),ug(),p0(),Ac(17,`po-input`,12),RE(`ngModelChange`,function(o){return Jv(d),DN(n.country,o)||(n.country=o),e_(o)}),ug(),p0(),ug()()()}l&2&&(cE(`p-actions`,n.action),Hp(4),TE(`ngModel`,n.cardType),cE(`p-options`,n.cardTypeOptions),m0(),Hp(2),TE(`ngModel`,n.cardNumber),m0(),Hp(),TE(`ngModel`,n.securityCode),m0(),Hp(2),TE(`ngModel`,n.name),m0(),Hp(2),TE(`ngModel`,n.address),m0(),Hp(),TE(`ngModel`,n.city),m0(),Hp(),TE(`ngModel`,n.stateProvince),m0(),Hp(),TE(`ngModel`,n.zipPostalCode),m0(),Hp(2),TE(`ngModel`,n.phoneNumber),m0(),Hp(),TE(`ngModel`,n.country),m0())},dependencies:[b9,D9,C9,BP,LP,D4,kte,$ze],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dialog - Cancel Credit Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dialog-cancel-credit-card`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,se],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-dialog-doc`]],standalone:!1,decls:397,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDialogAlertLiterals`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoDialogConfirmLiterals`]],template:function(l,n){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoDialogModule } from '@po-ui/ng-components';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Services`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoDialogService`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),ug()(),Ac(13,`h3`,6),vN(14,`Métodos`),ug(),Ac(15,`table`,7)(16,`tr`,8)(17,`th`,9)(18,`div`,10)(19,`h4`)(20,`span`,11),vN(21,` confirm `),ug()()()()(),Ac(22,`tr`,12)(23,`td`,12)(24,`p`),vN(25,`Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento.`),ug()()()(),Kc(26,`br`),Ac(27,`table`,7)(28,`tr`,8)(29,`th`,9)(30,`div`,10)(31,`h4`)(32,`span`,11),vN(33,` alert `),ug()()()()(),Ac(34,`tr`,12)(35,`td`,12)(36,`p`),vN(37,`Exibe um diálogo de alerta.`),ug()()()(),Kc(38,`br`),Ac(39,`h3`),vN(40,`Interfaces`),ug(),Ac(41,`h4`,13)(42,`code`,5),vN(43,`PoDialogAlertLiterals`),ug()(),Ac(44,`div`,2)(45,`p`),vN(46,`Interface para definição das literais usadas no serviço `),Ac(47,`code`),vN(48,`po-dialog`),ug(),vN(49,` para o tipo alerta.`),ug()(),Ac(50,`h4`,6),vN(51,`Propriedades`),ug(),Ac(52,`table`,14)(53,`tr`,15)(54,`th`,16),vN(55,`Nome`),ug(),Ac(56,`th`,16),vN(57,`Tipo`),ug(),Ac(58,`th`,16),vN(59,`Descrição`),ug()(),Ac(60,`tr`,8)(61,`td`,17)(62,`div`,10)(63,`span`,11),vN(64,` ok`),Kc(65,`br`),ug()()(),Ac(66,`td`,18)(67,`code`,19),vN(68,`string`),ug()(),Ac(69,`td`,12)(70,`em`)(71,`strong`),vN(72,`(opcional)`),ug()(),Ac(73,`p`),vN(74,`Rótulo do botão de "Ok".`),ug()()()(),Ac(75,`h4`,13)(76,`code`,5),vN(77,`PoDialogConfirmLiterals`),ug()(),Ac(78,`div`,2)(79,`p`),vN(80,`Interface para definição das literais usadas no serviço `),Ac(81,`code`),vN(82,`po-dialog`),ug(),vN(83,` para o tipo confirmação.`),ug()(),Ac(84,`h4`,6),vN(85,`Propriedades`),ug(),Ac(86,`table`,14)(87,`tr`,15)(88,`th`,16),vN(89,`Nome`),ug(),Ac(90,`th`,16),vN(91,`Tipo`),ug(),Ac(92,`th`,16),vN(93,`Descrição`),ug()(),Ac(94,`tr`,8)(95,`td`,17)(96,`div`,10)(97,`span`,11),vN(98,` cancel`),Kc(99,`br`),ug()()(),Ac(100,`td`,18)(101,`code`,19),vN(102,`string`),ug()(),Ac(103,`td`,12)(104,`em`)(105,`strong`),vN(106,`(opcional)`),ug()(),Ac(107,`p`),vN(108,`Rótulo do botão de "Cancelar".`),ug()()(),Ac(109,`tr`,8)(110,`td`,17)(111,`div`,10)(112,`span`,11),vN(113,` confirm`),Kc(114,`br`),ug()()(),Ac(115,`td`,18)(116,`code`,19),vN(117,`string`),ug()(),Ac(118,`td`,12)(119,`em`)(120,`strong`),vN(121,`(opcional)`),ug()(),Ac(122,`p`),vN(123,`Rótulo do botão de "Confirmar".`),ug()()()(),Ac(124,`h4`,13)(125,`code`,5),vN(126,`PoDialogAlertOptions`),ug()(),Ac(127,`div`,2)(128,`p`),vN(129,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de alerta do serviço po-dialog.`),ug()(),Ac(130,`h4`,6),vN(131,`Propriedades`),ug(),Ac(132,`table`,14)(133,`tr`,15)(134,`th`,16),vN(135,`Nome`),ug(),Ac(136,`th`,16),vN(137,`Tipo`),ug(),Ac(138,`th`,16),vN(139,`Descrição`),ug()(),Ac(140,`tr`,8)(141,`td`,17)(142,`div`,10)(143,`span`,11),vN(144,` componentsSize`),Kc(145,`br`),ug()()(),Ac(146,`td`,18)(147,`code`,19),vN(148,`string`),ug()(),Ac(149,`td`,12)(150,`em`)(151,`strong`),vN(152,`(opcional)`),ug()(),Ac(153,`p`),vN(154,`Define o tamanho dos componentes de formulário no dialog:`),ug(),Ac(155,`ul`)(156,`li`)(157,`code`),vN(158,`small`),ug(),vN(159,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(160,`li`)(161,`code`),vN(162,`medium`),ug(),vN(163,`: aplica a medida medium de cada componente.`),ug()(),Ac(164,`blockquote`)(165,`p`),vN(166,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(167,`code`),vN(168,`medium`),ug(),vN(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(170,`a`,20),vN(171,`po-theme`),ug(),vN(172,`.`),ug()()()(),Ac(173,`tr`,8)(174,`td`,17)(175,`div`,10)(176,`span`,11),vN(177,` literals`),Kc(178,`br`),ug()()(),Ac(179,`td`,18)(180,`code`,21),vN(181,`PoDialogAlertLiterals`),ug()(),Ac(182,`td`,12)(183,`em`)(184,`strong`),vN(185,`(opcional)`),ug()(),Ac(186,`p`),vN(187,`Objeto com as literais usadas no `),Ac(188,`code`),vN(189,`po-dialog`),ug(),vN(190,` do tipo alerta.`),ug(),Ac(191,`p`),vN(192,`Para customizar o `),Ac(193,`em`),vN(194,`label`),ug(),vN(195,`, pode ser enviado o objeto da seguinte forma:`),ug(),Ac(196,`pre`)(197,`code`,22),vN(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),ug()(),Ac(199,`blockquote`)(200,`p`),vN(201,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ac(202,`em`),vN(203,`browser`),ug(),vN(204,` (pt, en, es).`),ug()()()(),Ac(205,`tr`,8)(206,`td`,17)(207,`div`,10)(208,`span`,11),vN(209,` message`),Kc(210,`br`),ug()()(),Ac(211,`td`,18)(212,`code`,19),vN(213,`string`),ug()(),Ac(214,`td`,12)(215,`p`),vN(216,`Mensagem da caixa de diálogo.`),ug(),Ac(217,`blockquote`)(218,`p`),vN(219,`Pode-se informar um conteúdo HTML na mensagem.`),ug()()()(),Ac(220,`tr`,8)(221,`td`,17)(222,`div`,10)(223,`span`,11),vN(224,` ok`),Kc(225,`br`),ug()()(),Ac(226,`td`,18)(227,`code`,23),vN(228,`Function`),ug()(),Ac(229,`td`,12)(230,`em`)(231,`strong`),vN(232,`(opcional)`),ug()(),Ac(233,`p`),vN(234,`Ação executada ao fechar o alerta pelo botão "Ok".`),ug()()(),Ac(235,`tr`,8)(236,`td`,17)(237,`div`,10)(238,`span`,11),vN(239,` title`),Kc(240,`br`),ug()()(),Ac(241,`td`,18)(242,`code`,19),vN(243,`string`),ug()(),Ac(244,`td`,12)(245,`p`),vN(246,`Título da caixa de diálogo.`),ug()()()(),Ac(247,`h4`,13)(248,`code`,5),vN(249,`PoDialogConfirmOptions`),ug()(),Ac(250,`div`,2)(251,`p`),vN(252,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de confirmação do serviço po-dialog.`),ug()(),Ac(253,`h4`,6),vN(254,`Propriedades`),ug(),Ac(255,`table`,14)(256,`tr`,15)(257,`th`,16),vN(258,`Nome`),ug(),Ac(259,`th`,16),vN(260,`Tipo`),ug(),Ac(261,`th`,16),vN(262,`Descrição`),ug()(),Ac(263,`tr`,8)(264,`td`,17)(265,`div`,10)(266,`span`,11),vN(267,` cancel`),Kc(268,`br`),ug()()(),Ac(269,`td`,18)(270,`code`,23),vN(271,`Function`),ug()(),Ac(272,`td`,12)(273,`em`)(274,`strong`),vN(275,`(opcional)`),ug()(),Ac(276,`p`),vN(277,`Ação de cancelamento da caixa de diálogo.`),ug()()(),Ac(278,`tr`,8)(279,`td`,17)(280,`div`,10)(281,`span`,11),vN(282,` close`),Kc(283,`br`),ug()()(),Ac(284,`td`,18)(285,`code`,23),vN(286,`Function`),ug()(),Ac(287,`td`,12)(288,`em`)(289,`strong`),vN(290,`(opcional)`),ug()(),Ac(291,`p`),vN(292,`Ação de fechamento da caixa de diálogo.`),ug()()(),Ac(293,`tr`,8)(294,`td`,17)(295,`div`,10)(296,`span`,11),vN(297,` componentsSize`),Kc(298,`br`),ug()()(),Ac(299,`td`,18)(300,`code`,19),vN(301,`string`),ug()(),Ac(302,`td`,12)(303,`em`)(304,`strong`),vN(305,`(opcional)`),ug()(),Ac(306,`p`),vN(307,`Define o tamanho dos componentes de formulário no dialog:`),ug(),Ac(308,`ul`)(309,`li`)(310,`code`),vN(311,`small`),ug(),vN(312,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(313,`li`)(314,`code`),vN(315,`medium`),ug(),vN(316,`: aplica a medida medium de cada componente.`),ug()(),Ac(317,`blockquote`)(318,`p`),vN(319,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(320,`code`),vN(321,`medium`),ug(),vN(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(323,`a`,20),vN(324,`po-theme`),ug(),vN(325,`.`),ug()()()(),Ac(326,`tr`,8)(327,`td`,17)(328,`div`,10)(329,`span`,11),vN(330,` confirm`),Kc(331,`br`),ug()()(),Ac(332,`td`,18)(333,`code`,23),vN(334,`Function`),ug()(),Ac(335,`td`,12)(336,`p`),vN(337,`Ação de confirmação da caixa de diálogo.`),ug()()(),Ac(338,`tr`,8)(339,`td`,17)(340,`div`,10)(341,`span`,11),vN(342,` literals`),Kc(343,`br`),ug()()(),Ac(344,`td`,18)(345,`code`,24),vN(346,`PoDialogConfirmLiterals`),ug()(),Ac(347,`td`,12)(348,`em`)(349,`strong`),vN(350,`(opcional)`),ug()(),Ac(351,`p`),vN(352,`Objeto com as literais usadas no `),Ac(353,`code`),vN(354,`po-dialog`),ug(),vN(355,` do tipo confirmação.`),ug(),Ac(356,`p`),vN(357,`Para customizar os `),Ac(358,`em`),vN(359,`labels`),ug(),vN(360,`, pode ser enviado o objeto da seguinte forma:`),ug(),Ac(361,`pre`)(362,`code`,22),vN(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),ug()(),Ac(364,`blockquote`)(365,`p`),vN(366,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Ac(367,`em`),vN(368,`browser`),ug(),vN(369,` (pt, en, es).`),ug()()()(),Ac(370,`tr`,8)(371,`td`,17)(372,`div`,10)(373,`span`,11),vN(374,` message`),Kc(375,`br`),ug()()(),Ac(376,`td`,18)(377,`code`,19),vN(378,`string`),ug()(),Ac(379,`td`,12)(380,`p`),vN(381,`Mensagem da caixa de diálogo.`),ug(),Ac(382,`blockquote`)(383,`p`),vN(384,`Pode-se informar um conteúdo HTML na mensagem.`),ug()()()(),Ac(385,`tr`,8)(386,`td`,17)(387,`div`,10)(388,`span`,11),vN(389,` title`),Kc(390,`br`),ug()()(),Ac(391,`td`,18)(392,`code`,19),vN(393,`string`),ug()(),Ac(394,`td`,12)(395,`p`),vN(396,`Título da caixa de diálogo.`),ug()()()()())},encapsulation:2,changeDetection:1})}return a})();var Me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dialog`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-dialog-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-dialog-basic-view`)(6,`sample-po-dialog-labs-view`)(7,`sample-po-dialog-cancel-credit-card-view`),ug()()()),l&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,le,pe,de,me],encapsulation:2,changeDetection:1})}return a})()}];var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[kL.forChild(Me),kL]})}return a})();var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[Ta,ge]})}return a})();export{Ze as DocPoDialogModule};