import{$r as Zn,Bn as zu,Br as Sx,Ct as Wte,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Si as iu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ne=(()=>{class a{poDialog;constructor(p){this.poDialog=p}static ɵfac=function(l){return new(l||a)(b(Wte))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Dialog`,3,`p-click`]],template:function(l,n){l&1&&(jc(0,`po-button`,0),mt(`p-click`,function(){return n.poDialog.alert({title:`PO Dialog`,message:`PO Dialog`})}),wg())},dependencies:[ni],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dialog Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dialog-basic/sample-po-dialog-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button p-label="Open Dialog" (p-click)="poDialog.alert({ title: 'PO Dialog', message: 'PO Dialog' })"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dialog-basic/sample-po-dialog-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dialog-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,he,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{poAlert;action;actionOptions;componentsSize=`medium`;dialogMethod;help;literals;literalsAlert;literalsConfirm;message;title;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];dialogActionOptions=[{label:`Ok`,value:`ok`},{label:`Cancel`,value:`cancel`},{label:`Confirm`,value:`confirm`},{label:`Close`,value:`close`}];dialogMethodOptions=[{label:`Alert`,value:`alert`},{label:`Confirm`,value:`confirm`}];constructor(p){this.poAlert=p}ngOnInit(){this.restore()}alertDialog(){this.poAlert.alert({componentsSize:this.componentsSize,literals:this.literalsAlert,title:this.title,message:this.message,ok:()=>this.actionOptions.includes(`ok`)?this.action=`OK`:void 0})}changeLiterals(){let p;try{p=this.literals?JSON.parse(this.literals):void 0}catch(l){p=void 0}this.dialogMethod===`alert`?this.literalsAlert=p:this.dialogMethod===`confirm`&&(this.literalsConfirm=p)}changeMethod(){this.dialogMethod===`alert`?this.help=`Ex: { "ok": "Concluído" }`:this.help=`Ex: { "cancel": "Não", "confirm": "Sim" }`}confirmDialog(){this.poAlert.confirm({componentsSize:this.componentsSize,literals:this.literalsConfirm,title:this.title,message:this.message,confirm:()=>this.actionOptions.includes(`confirm`)?this.action=`Confirm`:void 0,cancel:()=>this.actionOptions.includes(`cancel`)?this.action=`Cancel`:void 0,close:()=>this.actionOptions.includes(`close`)?this.action=`Close`:void 0})}openDialog(){this.action=``,this.dialogMethod===`alert`?this.alertDialog():this.confirmDialog()}restore(){this.action=void 0,this.actionOptions=[],this.componentsSize=`medium`,this.title=`PO Dialog`,this.message=`PO Dialog`,this.dialogMethod=void 0,this.literals=void 0,this.literalsAlert=void 0,this.literalsConfirm=void 0,this.help=``}static ɵfac=function(l){return new(l||a)(b(Wte))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-labs`]],standalone:!1,decls:15,vars:13,consts:[[`f`,`ngForm`],[`name`,`openDialog`,`p-label`,`Open Dialog`,3,`p-click`,`p-disabled`],[1,`po-row`],[`p-label`,`Action clicked`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dialogMethod`,`p-label`,`Dialog method`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`literals`,`p-clean`,``,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-blur`,`p-change-model`,`ngModel`,`p-disabled`,`p-help`],[`name`,`actionOptions`,`p-columns`,`4`,`p-label`,`Action options`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=Sx();jc(0,`po-button`,1),mt(`p-click`,function(){return n.openDialog()}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),wg(),nu(4,`po-divider`),jc(5,`form`,null,0)(7,`po-input`,4),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.title,o)||(n.title=o),v_(o)}),wg(),jc(8,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.message,o)||(n.message=o),v_(o)}),wg(),jc(9,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.dialogMethod,o)||(n.dialogMethod=o),v_(o)}),mt(`p-change`,function(){return n.changeMethod()}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.literals,o)||(n.literals=o),v_(o)}),mt(`p-blur`,function(){return n.changeLiterals()})(`p-change-model`,function(){return n.changeLiterals()}),wg(),jc(11,`po-checkbox-group`,8),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.actionOptions,o)||(n.actionOptions=o),v_(o)}),wg(),jc(12,`po-radio-group`,9),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.componentsSize,o)||(n.componentsSize=o),v_(o)}),wg(),jc(13,`div`,2)(14,`po-button`,10),mt(`p-click`,function(){return n.restore()}),wg()()()}if(l&2){let d=Fx(6);jE(`p-disabled`,d.invalid),rg(3),jE(`p-value`,n.action),rg(4),ib(`ngModel`,n.title),t0(),rg(),ib(`ngModel`,n.message),t0(),rg(),ib(`ngModel`,n.dialogMethod),jE(`p-options`,n.dialogMethodOptions),t0(),rg(),ib(`ngModel`,n.literals),jE(`p-disabled`,n.dialogMethod===void 0)(`p-help`,n.help),t0(),rg(),ib(`ngModel`,n.actionOptions),jE(`p-options`,n.dialogActionOptions),t0(),rg(),ib(`ngModel`,n.componentsSize),jE(`p-options`,n.componentsSizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,_oe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dialog Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dialog-labs/sample-po-dialog-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button name="openDialog" p-label="Open Dialog" [p-disabled]="f.invalid" (p-click)="openDialog()"> </po-button>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dialog-labs/sample-po-dialog-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dialog-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Se,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return a})();var De=[`form`];var se=(()=>{class a{poDialog;poNotification;form;action;address;cardNumber;cardType;city;country;name;phoneNumber;securityCode;stateProvince;zipPostalCode;cardTypeOptions=[{label:`Master Card`,value:`Master`},{label:`Visa`,value:`visa`},{label:`Diners`,value:`diners`},{label:`Hipercard`,value:`hipercard`}];statusSubscription;constructor(p,l){this.poDialog=p,this.poNotification=l}ngOnDestroy(){this.statusSubscription.unsubscribe()}ngOnInit(){this.action=[{label:`Cancel`,icon:`ICON_DELETE`,action:this.openConfirmDialog.bind(this),disabled:!0}],this.statusSubscription=this.form.statusChanges.subscribe(p=>this.actionDisabledCheck(p))}actionDisabledCheck(p){this.action[0].disabled=p===`INVALID`}confirmCancelation(){this.poNotification.success(`Credit card ${this.cardNumber} canceled`),this.form.reset()}openConfirmDialog(){this.poDialog.confirm({title:`Confirm`,message:`<p>Hi <b>${this.name}</b>.</p> <p> Do you confirm the cancellation of the card number  <i class="po-icon an an-credit-card"></i> <b>${this.cardNumber}<b>? </p>`,confirm:()=>this.confirmCancelation()})}static ɵfac=function(l){return new(l||a)(b(Wte),b(zu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card`]],viewQuery:function(l,n){if(l&1&&iu(De,7),l&2){let d;vo(d=_o())&&(n.form=d.first)}},standalone:!1,decls:18,vars:12,consts:[[`form`,`ngForm`],[`p-title`,`Credit Card Cancelation`,3,`p-actions`],[1,`po-row`],[`name`,`cardType`,`p-label`,`Card type`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`cardNumber`,`p-label`,`Card number`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-minlength`,`19`,`p-required`,``,1,`po-md-8`,3,`ngModelChange`,`ngModel`],[`name`,`securityCode`,`p-label`,`Security code`,`p-mask`,`999`,`p-minlength`,`3`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-label`,`Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`address`,`p-label`,`Address`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`stateProvince`,`p-label`,`State/Province`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`zipPostalCode`,`p-label`,`Zip/PostalCode`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`phoneNumber`,`p-label`,`Phone number`,`p-mask`,`(99) 9?9999-9999`,`p-mask-format-model`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,1,`po-md-6`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let d=Sx();jc(0,`po-page-default`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-radio-group`,3),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.cardType,o)||(n.cardType=o),v_(o)}),wg()(),jc(5,`div`,2)(6,`po-input`,4),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.cardNumber,o)||(n.cardNumber=o),v_(o)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.securityCode,o)||(n.securityCode=o),v_(o)}),wg()(),jc(8,`div`,2)(9,`po-input`,6),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.name,o)||(n.name=o),v_(o)}),wg()(),jc(10,`div`,2)(11,`po-input`,7),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.address,o)||(n.address=o),v_(o)}),wg(),jc(12,`po-input`,8),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.city,o)||(n.city=o),v_(o)}),wg(),jc(13,`po-input`,9),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.stateProvince,o)||(n.stateProvince=o),v_(o)}),wg(),jc(14,`po-input`,10),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.zipPostalCode,o)||(n.zipPostalCode=o),v_(o)}),wg()(),jc(15,`div`,2)(16,`po-input`,11),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.phoneNumber,o)||(n.phoneNumber=o),v_(o)}),wg(),jc(17,`po-input`,12),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(n.country,o)||(n.country=o),v_(o)}),wg()()()()}l&2&&(jE(`p-actions`,n.action),rg(4),ib(`ngModel`,n.cardType),jE(`p-options`,n.cardTypeOptions),t0(),rg(2),ib(`ngModel`,n.cardNumber),t0(),rg(),ib(`ngModel`,n.securityCode),t0(),rg(2),ib(`ngModel`,n.name),t0(),rg(2),ib(`ngModel`,n.address),t0(),rg(),ib(`ngModel`,n.city),t0(),rg(),ib(`ngModel`,n.stateProvince),t0(),rg(),ib(`ngModel`,n.zipPostalCode),t0(),rg(2),ib(`ngModel`,n.phoneNumber),t0(),rg(),ib(`ngModel`,n.country),t0())},dependencies:[wK,CK,EK,TF,EF,A5,Ote,Kze],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-cancel-credit-card-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dialog - Cancel Credit Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Credit Card Cancelation" [p-actions]="action">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dialog-cancel-credit-card`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-dialog-doc`]],standalone:!1,decls:397,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDialogAlertLiterals`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`PoDialogConfirmLiterals`]],template:function(l,n){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoDialogModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),iO(6,`Services`),wg(),jc(7,`h4`,4)(8,`code`,5),iO(9,`PoDialogService`),wg()(),jc(10,`div`,2)(11,`p`),iO(12,`O po-dialog \xE9 um servi\xE7o para exibi\xE7\xE3o de caixas de di\xE1logo, \xE9 poss\xEDvel customiza-los passando alguns par\xE2metros de acordo com a
necessidade do desenvolvedor. `),wg()(),jc(13,`h3`,6),iO(14,`Métodos`),wg(),jc(15,`table`,7)(16,`tr`,8)(17,`th`,9)(18,`div`,10)(19,`h4`)(20,`span`,11),iO(21,` confirm `),wg()()()()(),jc(22,`tr`,12)(23,`td`,12)(24,`p`),iO(25,`Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento.`),wg()()()(),nu(26,`br`),jc(27,`table`,7)(28,`tr`,8)(29,`th`,9)(30,`div`,10)(31,`h4`)(32,`span`,11),iO(33,` alert `),wg()()()()(),jc(34,`tr`,12)(35,`td`,12)(36,`p`),iO(37,`Exibe um diálogo de alerta.`),wg()()()(),nu(38,`br`),jc(39,`h3`),iO(40,`Interfaces`),wg(),jc(41,`h4`,13)(42,`code`,5),iO(43,`PoDialogAlertLiterals`),wg()(),jc(44,`div`,2)(45,`p`),iO(46,`Interface para definição das literais usadas no serviço `),jc(47,`code`),iO(48,`po-dialog`),wg(),iO(49,` para o tipo alerta.`),wg()(),jc(50,`h4`,6),iO(51,`Propriedades`),wg(),jc(52,`table`,14)(53,`tr`,15)(54,`th`,16),iO(55,`Nome`),wg(),jc(56,`th`,16),iO(57,`Tipo`),wg(),jc(58,`th`,16),iO(59,`Descrição`),wg()(),jc(60,`tr`,8)(61,`td`,17)(62,`div`,10)(63,`span`,11),iO(64,` ok`),nu(65,`br`),wg()()(),jc(66,`td`,18)(67,`code`,19),iO(68,`string`),wg()(),jc(69,`td`,12)(70,`em`)(71,`strong`),iO(72,`(opcional)`),wg()(),jc(73,`p`),iO(74,`Rótulo do botão de "Ok".`),wg()()()(),jc(75,`h4`,13)(76,`code`,5),iO(77,`PoDialogConfirmLiterals`),wg()(),jc(78,`div`,2)(79,`p`),iO(80,`Interface para definição das literais usadas no serviço `),jc(81,`code`),iO(82,`po-dialog`),wg(),iO(83,` para o tipo confirmação.`),wg()(),jc(84,`h4`,6),iO(85,`Propriedades`),wg(),jc(86,`table`,14)(87,`tr`,15)(88,`th`,16),iO(89,`Nome`),wg(),jc(90,`th`,16),iO(91,`Tipo`),wg(),jc(92,`th`,16),iO(93,`Descrição`),wg()(),jc(94,`tr`,8)(95,`td`,17)(96,`div`,10)(97,`span`,11),iO(98,` cancel`),nu(99,`br`),wg()()(),jc(100,`td`,18)(101,`code`,19),iO(102,`string`),wg()(),jc(103,`td`,12)(104,`em`)(105,`strong`),iO(106,`(opcional)`),wg()(),jc(107,`p`),iO(108,`Rótulo do botão de "Cancelar".`),wg()()(),jc(109,`tr`,8)(110,`td`,17)(111,`div`,10)(112,`span`,11),iO(113,` confirm`),nu(114,`br`),wg()()(),jc(115,`td`,18)(116,`code`,19),iO(117,`string`),wg()(),jc(118,`td`,12)(119,`em`)(120,`strong`),iO(121,`(opcional)`),wg()(),jc(122,`p`),iO(123,`Rótulo do botão de "Confirmar".`),wg()()()(),jc(124,`h4`,13)(125,`code`,5),iO(126,`PoDialogAlertOptions`),wg()(),jc(127,`div`,2)(128,`p`),iO(129,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de alerta do serviço po-dialog.`),wg()(),jc(130,`h4`,6),iO(131,`Propriedades`),wg(),jc(132,`table`,14)(133,`tr`,15)(134,`th`,16),iO(135,`Nome`),wg(),jc(136,`th`,16),iO(137,`Tipo`),wg(),jc(138,`th`,16),iO(139,`Descrição`),wg()(),jc(140,`tr`,8)(141,`td`,17)(142,`div`,10)(143,`span`,11),iO(144,` componentsSize`),nu(145,`br`),wg()()(),jc(146,`td`,18)(147,`code`,19),iO(148,`string`),wg()(),jc(149,`td`,12)(150,`em`)(151,`strong`),iO(152,`(opcional)`),wg()(),jc(153,`p`),iO(154,`Define o tamanho dos componentes de formulário no dialog:`),wg(),jc(155,`ul`)(156,`li`)(157,`code`),iO(158,`small`),wg(),iO(159,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(160,`li`)(161,`code`),iO(162,`medium`),wg(),iO(163,`: aplica a medida medium de cada componente.`),wg()(),jc(164,`blockquote`)(165,`p`),iO(166,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(167,`code`),iO(168,`medium`),wg(),iO(169,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(170,`a`,20),iO(171,`po-theme`),wg(),iO(172,`.`),wg()()()(),jc(173,`tr`,8)(174,`td`,17)(175,`div`,10)(176,`span`,11),iO(177,` literals`),nu(178,`br`),wg()()(),jc(179,`td`,18)(180,`code`,21),iO(181,`PoDialogAlertLiterals`),wg()(),jc(182,`td`,12)(183,`em`)(184,`strong`),iO(185,`(opcional)`),wg()(),jc(186,`p`),iO(187,`Objeto com as literais usadas no `),jc(188,`code`),iO(189,`po-dialog`),wg(),iO(190,` do tipo alerta.`),wg(),jc(191,`p`),iO(192,`Para customizar o `),jc(193,`em`),iO(194,`label`),wg(),iO(195,`, pode ser enviado o objeto da seguinte forma:`),wg(),jc(196,`pre`)(197,`code`,22),iO(198,`this.poDialog.alert({
  literals: { ok: 'Close' },
  title: 'Info message',
  message: 'Message body dialog'
});
`),wg()(),jc(199,`blockquote`)(200,`p`),iO(201,`O objeto padrão de literais será traduzido de acordo com o idioma do `),jc(202,`em`),iO(203,`browser`),wg(),iO(204,` (pt, en, es).`),wg()()()(),jc(205,`tr`,8)(206,`td`,17)(207,`div`,10)(208,`span`,11),iO(209,` message`),nu(210,`br`),wg()()(),jc(211,`td`,18)(212,`code`,19),iO(213,`string`),wg()(),jc(214,`td`,12)(215,`p`),iO(216,`Mensagem da caixa de diálogo.`),wg(),jc(217,`blockquote`)(218,`p`),iO(219,`Pode-se informar um conteúdo HTML na mensagem.`),wg()()()(),jc(220,`tr`,8)(221,`td`,17)(222,`div`,10)(223,`span`,11),iO(224,` ok`),nu(225,`br`),wg()()(),jc(226,`td`,18)(227,`code`,23),iO(228,`Function`),wg()(),jc(229,`td`,12)(230,`em`)(231,`strong`),iO(232,`(opcional)`),wg()(),jc(233,`p`),iO(234,`Ação executada ao fechar o alerta pelo botão "Ok".`),wg()()(),jc(235,`tr`,8)(236,`td`,17)(237,`div`,10)(238,`span`,11),iO(239,` title`),nu(240,`br`),wg()()(),jc(241,`td`,18)(242,`code`,19),iO(243,`string`),wg()(),jc(244,`td`,12)(245,`p`),iO(246,`Título da caixa de diálogo.`),wg()()()(),jc(247,`h4`,13)(248,`code`,5),iO(249,`PoDialogConfirmOptions`),wg()(),jc(250,`div`,2)(251,`p`),iO(252,`Interface para o título e a mensagem do serviço po-dialog. Interface com as propriedades da caixa de diálogo de confirmação do serviço po-dialog.`),wg()(),jc(253,`h4`,6),iO(254,`Propriedades`),wg(),jc(255,`table`,14)(256,`tr`,15)(257,`th`,16),iO(258,`Nome`),wg(),jc(259,`th`,16),iO(260,`Tipo`),wg(),jc(261,`th`,16),iO(262,`Descrição`),wg()(),jc(263,`tr`,8)(264,`td`,17)(265,`div`,10)(266,`span`,11),iO(267,` cancel`),nu(268,`br`),wg()()(),jc(269,`td`,18)(270,`code`,23),iO(271,`Function`),wg()(),jc(272,`td`,12)(273,`em`)(274,`strong`),iO(275,`(opcional)`),wg()(),jc(276,`p`),iO(277,`Ação de cancelamento da caixa de diálogo.`),wg()()(),jc(278,`tr`,8)(279,`td`,17)(280,`div`,10)(281,`span`,11),iO(282,` close`),nu(283,`br`),wg()()(),jc(284,`td`,18)(285,`code`,23),iO(286,`Function`),wg()(),jc(287,`td`,12)(288,`em`)(289,`strong`),iO(290,`(opcional)`),wg()(),jc(291,`p`),iO(292,`Ação de fechamento da caixa de diálogo.`),wg()()(),jc(293,`tr`,8)(294,`td`,17)(295,`div`,10)(296,`span`,11),iO(297,` componentsSize`),nu(298,`br`),wg()()(),jc(299,`td`,18)(300,`code`,19),iO(301,`string`),wg()(),jc(302,`td`,12)(303,`em`)(304,`strong`),iO(305,`(opcional)`),wg()(),jc(306,`p`),iO(307,`Define o tamanho dos componentes de formulário no dialog:`),wg(),jc(308,`ul`)(309,`li`)(310,`code`),iO(311,`small`),wg(),iO(312,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(313,`li`)(314,`code`),iO(315,`medium`),wg(),iO(316,`: aplica a medida medium de cada componente.`),wg()(),jc(317,`blockquote`)(318,`p`),iO(319,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(320,`code`),iO(321,`medium`),wg(),iO(322,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(323,`a`,20),iO(324,`po-theme`),wg(),iO(325,`.`),wg()()()(),jc(326,`tr`,8)(327,`td`,17)(328,`div`,10)(329,`span`,11),iO(330,` confirm`),nu(331,`br`),wg()()(),jc(332,`td`,18)(333,`code`,23),iO(334,`Function`),wg()(),jc(335,`td`,12)(336,`p`),iO(337,`Ação de confirmação da caixa de diálogo.`),wg()()(),jc(338,`tr`,8)(339,`td`,17)(340,`div`,10)(341,`span`,11),iO(342,` literals`),nu(343,`br`),wg()()(),jc(344,`td`,18)(345,`code`,24),iO(346,`PoDialogConfirmLiterals`),wg()(),jc(347,`td`,12)(348,`em`)(349,`strong`),iO(350,`(opcional)`),wg()(),jc(351,`p`),iO(352,`Objeto com as literais usadas no `),jc(353,`code`),iO(354,`po-dialog`),wg(),iO(355,` do tipo confirmação.`),wg(),jc(356,`p`),iO(357,`Para customizar os `),jc(358,`em`),iO(359,`labels`),wg(),iO(360,`, pode ser enviado o objeto da seguinte forma:`),wg(),jc(361,`pre`)(362,`code`,22),iO(363,`this.poDialog.confirm({
  literals: { cancel: 'No', confirm: 'Yes' },
  title: 'Confirm',
  message: 'Message body dialog',
  confirm: () => this.confirmOperation()
});
`),wg()(),jc(364,`blockquote`)(365,`p`),iO(366,`O objeto padrão de literais será traduzido de acordo com o idioma do `),jc(367,`em`),iO(368,`browser`),wg(),iO(369,` (pt, en, es).`),wg()()()(),jc(370,`tr`,8)(371,`td`,17)(372,`div`,10)(373,`span`,11),iO(374,` message`),nu(375,`br`),wg()()(),jc(376,`td`,18)(377,`code`,19),iO(378,`string`),wg()(),jc(379,`td`,12)(380,`p`),iO(381,`Mensagem da caixa de diálogo.`),wg(),jc(382,`blockquote`)(383,`p`),iO(384,`Pode-se informar um conteúdo HTML na mensagem.`),wg()()()(),jc(385,`tr`,8)(386,`td`,17)(387,`div`,10)(388,`span`,11),iO(389,` title`),nu(390,`br`),wg()()(),jc(391,`td`,18)(392,`code`,19),iO(393,`string`),wg()(),jc(394,`td`,12)(395,`p`),iO(396,`Título da caixa de diálogo.`),wg()()()()())},encapsulation:2,changeDetection:1})}return a})();var Me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dialog`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-dialog-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-dialog-basic-view`)(6,`sample-po-dialog-labs-view`)(7,`sample-po-dialog-cancel-credit-card-view`),wg()()()),l&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,le,pe,de,me],encapsulation:2,changeDetection:1})}return a})()}];var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue({imports:[C1.forChild(Me),C1]})}return a})();var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue({imports:[Ta,ge]})}return a})();export{Ze as DocPoDialogModule};