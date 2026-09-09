import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ct as X4,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,K as Ma,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ei as Yl,fi as ag,gi as bL,gt as To,ha as ww,k as Eu,l as ar,la as uo,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,ri as ZO,rr as Ew,sa as ue,tt as O4,ui as a0,ut as S8e,va as yY,wn as vr,wr as MN,yi as cN,yn as ube,zr as SN}from"./main-3EWTGE7T.js";var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l}static ɵfac=function(n){return new(n||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(n,o){n&1&&(Tl(0,`po-button`,0),ht(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),ag())},dependencies:[Zt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Notification Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-basic',
  templateUrl: './sample-po-notification-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationBasicComponent {
  constructor(public poNotification: PoNotificationService) {}
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-notification-basic`),ag(),Gl(23,`hr`)),n&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Ma.Top},{label:`Bottom`,value:Ma.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:To.Success},{label:`Error`,value:To.Error},{label:`Warning`,value:To.Warning},{label:`Information`,value:To.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case To.Success:this.poNotification.success(l);break;case To.Error:this.poNotification.error(l);break;case To.Warning:this.poNotification.warning(l);break;case To.Information:this.poNotification.information(l);break;default:this.poNotification.success(l);break}}static ɵfac=function(n){return new(n||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-labs`]],viewQuery:function(n,o){if(n&1&&Yl(vr,7),n&2){let c;lo(c=uo())&&(o.poModal=c.first)}},standalone:!1,features:[Ce([Eu])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(n,o){if(n&1){let c=Ax();Tl(0,`po-button`,1),ht(`p-click`,function(){return o.showNotification()}),ag(),Gl(1,`po-divider`),Tl(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),ww(`ngModelChange`,function(r){return Ky(c),uN(o.type,r)||(o.type=r),Xy(r)}),ag(),a0(),Tl(6,`po-radio-group`,4),ww(`ngModelChange`,function(r){return Ky(c),uN(o.orientation,r)||(o.orientation=r),Xy(r)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(c),uN(o.message,r)||(o.message=r),Xy(r)}),ag(),a0(),Tl(8,`po-number`,6),ww(`ngModelChange`,function(r){return Ky(c),uN(o.duration,r)||(o.duration=r),Xy(r)}),ag(),a0(),Tl(9,`po-switch`,7),ww(`ngModelChange`,function(r){return Ky(c),uN(o.action,r)||(o.action=r),Xy(r)}),ag(),a0(),Tl(10,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(c),uN(o.actionLabel,r)||(o.actionLabel=r),Xy(r)}),ag(),a0(),Tl(11,`po-radio-group`,9),ww(`ngModelChange`,function(r){return Ky(c),uN(o.sizeActions,r)||(o.sizeActions=r),Xy(r)}),ag(),a0(),Tl(12,`div`,2)(13,`po-button`,10),ht(`p-click`,function(){return o.restore()}),ag()()()(),Tl(14,`po-modal`,11),cN(15,` Notification Action `),ag()}n&2&&(jp(5),Ew(`ngModel`,o.type),nw(`p-options`,o.typeOptions),l0(),jp(),Ew(`ngModel`,o.orientation),nw(`p-options`,o.orientationOptions),l0(),jp(),Ew(`ngModel`,o.message),l0(),jp(),Ew(`ngModel`,o.duration),l0(),jp(),Ew(`ngModel`,o.action),l0(),jp(),Ew(`ngModel`,o.actionLabel),l0(),jp(),Ew(`ngModel`,o.sizeActions),nw(`p-options`,o.sizeActionsOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,ube,L0e,j4,vr],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Notification Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

<po-divider />

<div class="po-row">
  <form #f="ngForm">
    <po-radio-group
      class="po-md-12"
      name="type"
      [(ngModel)]="type"
      p-columns="4"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-input class="po-md-6" name="message" [(ngModel)]="message" p-clean p-label="Message" p-required> </po-input>

    <po-number class="po-md-6 po-lg-3" name="duration" [(ngModel)]="duration" p-clean p-label="Duration"> </po-number>

    <po-switch class="po-md-6 po-lg-3" name="action" [(ngModel)]="action" p-label="Action"> </po-switch>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionLabel" p-clean p-label="Action Label"> </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="sizeActions"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoModalComponent,
  PoNotification,
  PoNotificationService,
  PoRadioGroupOption,
  PoToasterOrientation,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-labs',
  templateUrl: './sample-po-notification-labs.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  sizeActions: string;
  type: PoToasterType;
  duration: number;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Top', value: PoToasterOrientation.Top },
    { label: 'Bottom', value: PoToasterOrientation.Bottom }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.message = 'PO Notification';
    this.type = undefined;
    this.orientation = undefined;
    this.action = false;
    this.actionLabel = '';
    this.duration = undefined;
    this.sizeActions = 'medium';
  }

  showNotification() {
    const poNotification: PoNotification = {
      message: this.message,
      orientation: this.orientation,
      action: undefined,
      actionLabel: this.actionLabel,
      duration: this.duration,
      sizeActions: this.sizeActions
    };

    if (this.action) {
      poNotification.action = () => this.poModal.open();
    }

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-notification-labs`),ag(),Gl(23,`hr`)),n&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(n){return new(n||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[Ce([Eu])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(n,o){if(n&1){let c=Ax();Tl(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),ww(`ngModelChange`,function(r){return Ky(c),uN(o.product,r)||(o.product=r),Xy(r)}),ht(`p-change`,function(){return o.checkProduct()}),ag(),a0(),Tl(4,`po-number`,3),ww(`ngModelChange`,function(r){return Ky(c),uN(o.quantity,r)||(o.quantity=r),Xy(r)}),ht(`p-change`,function(){return o.checkQuantity()}),ag(),a0(),Tl(5,`po-number`,4),ww(`ngModelChange`,function(r){return Ky(c),uN(o.price,r)||(o.price=r),Xy(r)}),ag(),a0(),Tl(6,`po-number`,5),ww(`ngModelChange`,function(r){return Ky(c),uN(o.stock,r)||(o.stock=r),Xy(r)}),ag(),a0(),Tl(7,`po-number`,6),ww(`ngModelChange`,function(r){return Ky(c),uN(o.totalPrice,r)||(o.totalPrice=r),Xy(r)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-button`,7),ht(`p-click`,function(){return o.addCart()}),ag()()(),Gl(10,`po-divider`)(11,`po-table`,8),Tl(12,`div`,1)(13,`div`,9)(14,`span`,10),cN(15),SN(16,`currency`),ag()()()}if(n&2){let c=Bx(1);jp(3),Ew(`ngModel`,o.product),nw(`p-options`,o.productOptions),l0(),jp(),Ew(`ngModel`,o.quantity),nw(`p-max`,o.stock),l0(),jp(),Ew(`ngModel`,o.price),l0(),jp(),Ew(`ngModel`,o.stock),l0(),jp(),Ew(`ngModel`,o.totalPrice),l0(),jp(2),nw(`p-disabled`,c.form.invalid||o.stock===0),jp(2),nw(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),jp(4),hg(`Total: R`,MN(16,12,o.totalPriceSum),` `)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,O4,ube,X4,ZO],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Notification - Sales`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #f="ngForm">
  <div class="po-row">
    <po-combo
      class="po-md-4"
      name="product"
      [(ngModel)]="product"
      p-label="Product"
      p-placeholder="Select a Product"
      p-required
      [p-options]="productOptions"
      (p-change)="checkProduct()"
    >
    </po-combo>

    <po-number
      class="po-md-2"
      name="quantity"
      [(ngModel)]="quantity"
      p-label="Quantity"
      p-min="0"
      p-placeholder="0"
      p-required
      [p-max]="stock"
      (p-change)="checkQuantity()"
    >
    </po-number>

    <po-number class="po-md-2" name="price" [(ngModel)]="price" p-disabled p-label="Price" p-placeholder="0" p-required>
    </po-number>

    <po-number class="po-md-2" name="stock" [(ngModel)]="stock" p-disabled p-label="Stock" p-placeholder="0" p-required>
    </po-number>

    <po-number
      class="po-md-2"
      name="totalPrice"
      [(ngModel)]="totalPrice"
      p-disabled
      p-label="Total Price"
      p-placeholder="0"
      p-required
    >
    </po-number>
  </div>
  <div class="po-row">
    <po-button class="po-md-3" p-label="Add To Cart" [p-disabled]="f.form.invalid || stock === 0" (p-click)="addCart()">
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="columns" [p-items]="products" [p-hide-table-search]="false"> </po-table>

<div class="po-row">
  <div class="po-pull-right po-lg-12">
    <span class="po-pull-right po-font-subtitle">Total: R{ { totalPriceSum | currency }} </span>
  </div>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoComboOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-notification-sales',
  templateUrl: './sample-po-notification-sales.component.html',
  providers: [PoNotificationService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNotificationSalesComponent {
  name: string;
  price: number;
  product: string;
  quantity: number;
  stock: number;
  totalPrice: number;
  totalPriceSum = 2500;

  readonly columns: Array<PoTableColumn> = [
    { property: 'productID', label: 'Id' },
    { property: 'productName', label: 'Product' },
    { property: 'quantity', label: 'Quantity' },
    { property: 'price', label: 'Price', type: 'currency', format: 'BRL' },
    { property: 'total', label: 'Total Price', type: 'currency', format: 'BRL' }
  ];

  products: Array<any> = [{ productID: '004', productName: 'Notebook', quantity: 2, price: 1250, total: 2500 }];

  productDetailsList: Array<any> = [
    { id: '001', price: 50, stock: 10 },
    { id: '002', price: 210, stock: 5 },
    { id: '003', price: 998, stock: 2 },
    { id: '004', price: 1250, stock: 1 }
  ];

  readonly productOptions: Array<PoComboOption> = [
    { value: '001', label: 'p-Shirt Blue' },
    { value: '002', label: 'Clock' },
    { value: '003', label: 'Cellphone' },
    { value: '004', label: 'Notebook' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addCart() {
    this.checkQuantity();

    if (this.productOptions && this.quantity > 0) {
      const itemIndex = this.products.findIndex(item => item.productID === this.product);

      if (itemIndex >= 0) {
        this.products[itemIndex].quantity += this.quantity;
        this.products[itemIndex].total += this.totalPrice;
      } else {
        this.products.push({
          productID: this.product,
          productName: this.name,
          quantity: this.quantity,
          price: this.price,
          total: this.totalPrice
        });
      }

      this.totalPriceSum += this.totalPrice;
      this.poNotification.success('Order included successfully!');
      this.stockUpdate(this.product, this.quantity);
      this.clearFields();
    }
  }

  checkProduct() {
    const selectedProductIndex = this.productDetailsList.findIndex(product => product.id === this.product);

    if (selectedProductIndex >= 0) {
      const productDetails = this.productDetailsList[selectedProductIndex];
      this.price = productDetails.price;
      this.stock = productDetails.stock;
      this.name = this.productOptions[selectedProductIndex].label;
    }
  }

  checkQuantity() {
    if (this.quantity > this.stock) {
      this.poNotification.error('Quantity not available in stock');
    } else {
      this.totalValue();
    }
  }

  clearFields() {
    this.product = '';
    this.price = 0;
    this.quantity = 0;
    this.stock = 0;
    this.totalPrice = 0;
  }

  stockUpdate(selectedProduct: string, qtd: number) {
    const item = this.productDetailsList.find(product => product.id === selectedProduct);
    item.stock = item.stock - qtd;
  }

  totalValue() {
    this.totalPrice = this.quantity * this.price;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-notification-sales`),ag(),Gl(23,`hr`)),n&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(n,o){n&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),ag()(),Gl(4,`div`,2),Tl(5,`h3`,3),cN(6,`Services`),ag(),Tl(7,`h4`,4)(8,`code`,5),cN(9,`PoNotificationService`),ag()(),Tl(10,`div`,2)(11,`p`),cN(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),ag(),Tl(13,`ul`)(14,`li`),cN(15,`success,`),ag(),Tl(16,`li`),cN(17,`warning,`),ag(),Tl(18,`li`),cN(19,`error,`),ag(),Tl(20,`li`),cN(21,`information.`),ag()(),Tl(22,`p`),cN(23,`Cada um destes métodos recebe como parâmetro o objeto `),Tl(24,`code`),cN(25,`PoNotification`),ag(),cN(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),ag(),Tl(27,`p`),cN(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),ag(),Tl(29,`p`),cN(30,`Notificações com ação ou notificações de `),Tl(31,`code`),cN(32,`erro`),ag(),cN(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),ag(),Tl(34,`p`),cN(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),ag()(),Tl(36,`h3`,6),cN(37,`Métodos`),ag(),Tl(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),cN(44,` success `),ag()()()()(),Tl(45,`tr`,12)(46,`td`,12)(47,`p`),cN(48,`Emite uma notificação de sucesso.`),ag()()()(),Tl(49,`h5`)(50,`b`),cN(51,`Parâmetros`),ag()(),Tl(52,`table`,13)(53,`tr`,14)(54,`th`,15),cN(55,`Nome`),ag(),Tl(56,`th`,15),cN(57,`Tipo`),ag(),Tl(58,`th`,15),cN(59,`Descrição`),ag()(),Tl(60,`tr`,8)(61,`td`,16),cN(62,` notification`),ag(),Tl(63,`td`,17)(64,`code`,18),cN(65,` PoNotification `),ag(),Tl(66,`code`,19),cN(67,` string `),ag()(),Tl(68,`td`,12)(69,`p`),cN(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),ag()()()(),Gl(71,`br`),Tl(72,`table`,7)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),cN(78,` warning `),ag()()()()(),Tl(79,`tr`,12)(80,`td`,12)(81,`p`),cN(82,`Emite uma notificação de atenção.`),ag()()()(),Tl(83,`h5`)(84,`b`),cN(85,`Parâmetros`),ag()(),Tl(86,`table`,13)(87,`tr`,14)(88,`th`,15),cN(89,`Nome`),ag(),Tl(90,`th`,15),cN(91,`Tipo`),ag(),Tl(92,`th`,15),cN(93,`Descrição`),ag()(),Tl(94,`tr`,8)(95,`td`,16),cN(96,` notification`),ag(),Tl(97,`td`,17)(98,`code`,18),cN(99,` PoNotification `),ag(),Tl(100,`code`,19),cN(101,` string `),ag()(),Tl(102,`td`,12)(103,`p`),cN(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),ag()()()(),Gl(105,`br`),Tl(106,`table`,7)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),cN(112,` error `),ag()()()()(),Tl(113,`tr`,12)(114,`td`,12)(115,`p`),cN(116,`Emite uma notificação de erro.`),ag()()()(),Tl(117,`h5`)(118,`b`),cN(119,`Parâmetros`),ag()(),Tl(120,`table`,13)(121,`tr`,14)(122,`th`,15),cN(123,`Nome`),ag(),Tl(124,`th`,15),cN(125,`Tipo`),ag(),Tl(126,`th`,15),cN(127,`Descrição`),ag()(),Tl(128,`tr`,8)(129,`td`,16),cN(130,` notification`),ag(),Tl(131,`td`,17)(132,`code`,18),cN(133,` PoNotification `),ag(),Tl(134,`code`,19),cN(135,` string `),ag()(),Tl(136,`td`,12)(137,`p`),cN(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),ag()()()(),Gl(139,`br`),Tl(140,`table`,7)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),cN(146,` information `),ag()()()()(),Tl(147,`tr`,12)(148,`td`,12)(149,`p`),cN(150,`Emite uma notificação de informação.`),ag()()()(),Tl(151,`h5`)(152,`b`),cN(153,`Parâmetros`),ag()(),Tl(154,`table`,13)(155,`tr`,14)(156,`th`,15),cN(157,`Nome`),ag(),Tl(158,`th`,15),cN(159,`Tipo`),ag(),Tl(160,`th`,15),cN(161,`Descrição`),ag()(),Tl(162,`tr`,8)(163,`td`,16),cN(164,` notification`),ag(),Tl(165,`td`,17)(166,`code`,18),cN(167,` PoNotification `),ag(),Tl(168,`code`,19),cN(169,` string `),ag()(),Tl(170,`td`,12)(171,`p`),cN(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),ag()()()(),Gl(173,`br`),Tl(174,`table`,7)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),cN(180,` setDefaultDuration `),ag()()()()(),Tl(181,`tr`,12)(182,`td`,12)(183,`p`),cN(184,`Define em milissegundos a duração padrão para as notificações.`),ag(),Tl(185,`blockquote`)(186,`p`),cN(187,`Padrão 9 segundos.`),ag()()()()(),Tl(188,`h5`)(189,`b`),cN(190,`Parâmetros`),ag()(),Tl(191,`table`,13)(192,`tr`,14)(193,`th`,15),cN(194,`Nome`),ag(),Tl(195,`th`,15),cN(196,`Tipo`),ag(),Tl(197,`th`,15),cN(198,`Descrição`),ag()(),Tl(199,`tr`,8)(200,`td`,16),cN(201,` defaultDuration`),ag(),Tl(202,`td`,17)(203,`code`,20),cN(204,` number `),ag()(),Tl(205,`td`,12)(206,`p`),cN(207,`Duração em milisegundos`),ag()()()(),Gl(208,`br`),Tl(209,`h3`),cN(210,`Interfaces`),ag(),Tl(211,`h4`,21)(212,`code`,5),cN(213,`PoNotification`),ag()(),Tl(214,`div`,2)(215,`p`),cN(216,`Interface para uso do serviço PoNotification.`),ag()(),Tl(217,`h4`,6),cN(218,`Propriedades`),ag(),Tl(219,`table`,13)(220,`tr`,14)(221,`th`,15),cN(222,`Nome`),ag(),Tl(223,`th`,15),cN(224,`Tipo`),ag(),Tl(225,`th`,15),cN(226,`Descrição`),ag()(),Tl(227,`tr`,8)(228,`td`,16)(229,`div`,10)(230,`span`,11),cN(231,` action`),Gl(232,`br`),ag()()(),Tl(233,`td`,17)(234,`code`,22),cN(235,`Function`),ag()(),Tl(236,`td`,12)(237,`em`)(238,`strong`),cN(239,`(opcional)`),ag()(),Tl(240,`p`),cN(241,`Ação para a notificação.`),ag(),Tl(242,`p`),cN(243,`Ao utilizar esta propriedade em conjunto com a `),Tl(244,`code`),cN(245,`actionLabel`),ag(),cN(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),ag(),Tl(247,`p`),cN(248,`Caso não informar a propriedade `),Tl(249,`code`),cN(250,`actionLabel`),ag(),cN(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),ag()()(),Tl(252,`tr`,8)(253,`td`,16)(254,`div`,10)(255,`span`,11),cN(256,` actionLabel`),Gl(257,`br`),ag()()(),Tl(258,`td`,17)(259,`code`,19),cN(260,`string`),ag()(),Tl(261,`td`,12)(262,`em`)(263,`strong`),cN(264,`(opcional)`),ag()(),Tl(265,`p`),cN(266,`Label do botão quando houver uma ação definida.`),ag()()(),Tl(267,`tr`,8)(268,`td`,16)(269,`div`,10)(270,`span`,11),cN(271,` duration`),Gl(272,`br`),ag()()(),Tl(273,`td`,17)(274,`code`,23),cN(275,`number`),ag()(),Tl(276,`td`,12)(277,`em`)(278,`strong`),cN(279,`(opcional)`),ag()(),Tl(280,`p`),cN(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),ag(),Tl(282,`blockquote`)(283,`p`),cN(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),Tl(285,`code`),cN(286,`erro`),ag(),cN(287,`, a propriedade será ignorada.`),ag()()()(),Tl(288,`tr`,8)(289,`td`,16)(290,`div`,10)(291,`span`,11),cN(292,` message`),Gl(293,`br`),ag()()(),Tl(294,`td`,17)(295,`code`,19),cN(296,`string`),ag()(),Tl(297,`td`,12)(298,`p`),cN(299,`Mensagem a ser exibida na notificação.`),ag()()(),Tl(300,`tr`,8)(301,`td`,16)(302,`div`,10)(303,`span`,11),cN(304,` mode`),Gl(305,`br`),ag()()(),Tl(306,`td`,17)(307,`code`,24),cN(308,`PoToasterMode`),ag()(),Tl(309,`td`,12)(310,`em`)(311,`strong`),cN(312,`(opcional)`),ag()(),Tl(313,`p`),cN(314,`Define o Modo/Tipo do Toaster.`),ag()()(),Tl(315,`tr`,8)(316,`td`,16)(317,`div`,10)(318,`span`,11),cN(319,` orientation`),Gl(320,`br`),ag()()(),Tl(321,`td`,17)(322,`code`,25),cN(323,`PoToasterOrientation`),ag()(),Tl(324,`td`,12)(325,`em`)(326,`strong`),cN(327,`(opcional)`),ag()(),Tl(328,`p`),cN(329,`Posição da notificação na página que pode ser `),Tl(330,`code`),cN(331,`Top`),ag(),cN(332,` (topo) ou `),Tl(333,`code`),cN(334,`Bottom`),ag(),cN(335,`(rodapé). A posição padrão é `),Tl(336,`code`),cN(337,`bottom`),ag(),cN(338,`.`),ag()()(),Tl(339,`tr`,8)(340,`td`,16)(341,`div`,10)(342,`span`,11),cN(343,` showClose`),Gl(344,`br`),ag()()(),Tl(345,`td`,17)(346,`code`,26),cN(347,`boolean`),ag()(),Tl(348,`td`,12)(349,`em`)(350,`strong`),cN(351,`(opcional)`),ag()(),Tl(352,`p`),cN(353,`Exibe o botão de fechar a notificação.`),ag(),Tl(354,`blockquote`)(355,`p`),cN(356,`Caso a notificação seja do modo `),Tl(357,`code`),cN(358,`default`),ag(),cN(359,`, a propriedade será ignorada.`),ag()()()(),Tl(360,`tr`,8)(361,`td`,16)(362,`div`,10)(363,`span`,11),cN(364,` sizeActions`),Gl(365,`br`),ag()()(),Tl(366,`td`,17)(367,`code`,19),cN(368,`string`),ag()(),Tl(369,`td`,12)(370,`em`)(371,`strong`),cN(372,`(opcional)`),ag()(),Tl(373,`p`),cN(374,`Define o tamanho das ações:`),ag(),Tl(375,`ul`)(376,`li`)(377,`code`),cN(378,`small`),ag(),cN(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),ag(),Tl(380,`li`)(381,`code`),cN(382,`medium`),ag(),cN(383,`: aplica a medida medium de cada ação.`),ag()(),Tl(384,`blockquote`)(385,`p`),cN(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(387,`code`),cN(388,`medium`),ag(),cN(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(390,`a`,27),cN(391,`po-theme`),ag(),cN(392,`.`),ag()()()(),Tl(393,`tr`,8)(394,`td`,16)(395,`div`,10)(396,`span`,11),cN(397,` supportMessage`),Gl(398,`br`),ag()()(),Tl(399,`td`,17)(400,`code`,19),cN(401,`string`),ag()(),Tl(402,`td`,12)(403,`em`)(404,`strong`),cN(405,`(opcional)`),ag()(),Tl(406,`p`),cN(407,`Mensagem de suporte a ser exibida na notificação.`),ag()()()()())},encapsulation:2,changeDetection:1})}return a})();var Oe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Notification`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,o){n&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-notification-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-notification-basic-view`)(6,`sample-po-notification-labs-view`)(7,`sample-po-notification-sales-view`),ag()()()),n&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,fe,be,Ee,Se],encapsulation:2,changeDetection:1})}return a})()}];var ye=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[bL.forChild(Oe),bL]})}return a})();var at=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,ye]})}return a})();export{at as DocPoNotificationModule};