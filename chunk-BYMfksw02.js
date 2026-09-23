import{$r as Vx,A as Do,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,P as Eu,Qi as oN,S as B4,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ca as rP,ci as Yx,cn as lU,da as uo,dn as oU,ea as p0,er as FN,ga as w,kn as vr,kr as PN,l as ar,mn as q0e,mr as MN,nr as HO,nt as Ma,oa as ql,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l}static ɵfac=function(n){return new(n||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(n,o){n&1&&(Ml(0,`po-button`,0),ht(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),lg())},dependencies:[Zt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Notification Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-notification-basic`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Ma.Top},{label:`Bottom`,value:Ma.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Do.Success},{label:`Error`,value:Do.Error},{label:`Warning`,value:Do.Warning},{label:`Information`,value:Do.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Do.Success:this.poNotification.success(l);break;case Do.Error:this.poNotification.error(l);break;case Do.Warning:this.poNotification.warning(l);break;case Do.Information:this.poNotification.information(l);break;default:this.poNotification.success(l);break}}static ɵfac=function(n){return new(n||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-labs`]],viewQuery:function(n,o){if(n&1&&Zl(vr,7),n&2){let c;lo(c=uo())&&(o.poModal=c.first)}},standalone:!1,features:[Ce([Eu])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(n,o){if(n&1){let c=Vx();Ml(0,`po-button`,1),ht(`p-click`,function(){return o.showNotification()}),lg(),ql(1,`po-divider`),Ml(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.type,r)||(o.type=r),Jy(r)}),lg(),f0(),Ml(6,`po-radio-group`,4),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.orientation,r)||(o.orientation=r),Jy(r)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.message,r)||(o.message=r),Jy(r)}),lg(),f0(),Ml(8,`po-number`,6),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.duration,r)||(o.duration=r),Jy(r)}),lg(),f0(),Ml(9,`po-switch`,7),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.action,r)||(o.action=r),Jy(r)}),lg(),f0(),Ml(10,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.actionLabel,r)||(o.actionLabel=r),Jy(r)}),lg(),f0(),Ml(11,`po-radio-group`,9),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.sizeActions,r)||(o.sizeActions=r),Jy(r)}),lg(),f0(),Ml(12,`div`,2)(13,`po-button`,10),ht(`p-click`,function(){return o.restore()}),lg()()()(),Ml(14,`po-modal`,11),mN(15,` Notification Action `),lg()}n&2&&(Up(5),Tw(`ngModel`,o.type),cw(`p-options`,o.typeOptions),p0(),Up(),Tw(`ngModel`,o.orientation),cw(`p-options`,o.orientationOptions),p0(),Up(),Tw(`ngModel`,o.message),p0(),Up(),Tw(`ngModel`,o.duration),p0(),Up(),Tw(`ngModel`,o.action),p0(),Up(),Tw(`ngModel`,o.actionLabel),p0(),Up(),Tw(`ngModel`,o.sizeActions),cw(`p-options`,o.sizeActionsOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,xbe,q0e,J4,vr],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Notification Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-notification-labs`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(n){return new(n||a)(w(Eu))};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[Ce([Eu])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(n,o){if(n&1){let c=Vx();Ml(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.product,r)||(o.product=r),Jy(r)}),ht(`p-change`,function(){return o.checkProduct()}),lg(),f0(),Ml(4,`po-number`,3),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.quantity,r)||(o.quantity=r),Jy(r)}),ht(`p-change`,function(){return o.checkQuantity()}),lg(),f0(),Ml(5,`po-number`,4),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.price,r)||(o.price=r),Jy(r)}),lg(),f0(),Ml(6,`po-number`,5),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.stock,r)||(o.stock=r),Jy(r)}),lg(),f0(),Ml(7,`po-number`,6),Mw(`ngModelChange`,function(r){return Qy(c),yN(o.totalPrice,r)||(o.totalPrice=r),Jy(r)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-button`,7),ht(`p-click`,function(){return o.addCart()}),lg()()(),ql(10,`po-divider`)(11,`po-table`,8),Ml(12,`div`,1)(13,`div`,9)(14,`span`,10),mN(15),PN(16,`currency`),lg()()()}if(n&2){let c=Yx(1);Up(3),Tw(`ngModel`,o.product),cw(`p-options`,o.productOptions),p0(),Up(),Tw(`ngModel`,o.quantity),cw(`p-max`,o.stock),p0(),Up(),Tw(`ngModel`,o.price),p0(),Up(),Tw(`ngModel`,o.stock),p0(),Up(),Tw(`ngModel`,o.totalPrice),p0(),Up(2),cw(`p-disabled`,c.form.invalid||o.stock===0),Up(2),cw(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),Up(4),gg(`Total: R`,FN(16,12,o.totalPriceSum),` `)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,B4,xbe,oU,rP],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Notification - Sales`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #f="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-notification-sales`),lg(),ql(23,`hr`)),n&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(n,o){n&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Services`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoNotificationService`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),lg(),Ml(13,`ul`)(14,`li`),mN(15,`success,`),lg(),Ml(16,`li`),mN(17,`warning,`),lg(),Ml(18,`li`),mN(19,`error,`),lg(),Ml(20,`li`),mN(21,`information.`),lg()(),Ml(22,`p`),mN(23,`Cada um destes métodos recebe como parâmetro o objeto `),Ml(24,`code`),mN(25,`PoNotification`),lg(),mN(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),lg(),Ml(27,`p`),mN(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),lg(),Ml(29,`p`),mN(30,`Notificações com ação ou notificações de `),Ml(31,`code`),mN(32,`erro`),lg(),mN(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),lg(),Ml(34,`p`),mN(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),lg()(),Ml(36,`h3`,6),mN(37,`Métodos`),lg(),Ml(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),mN(44,` success `),lg()()()()(),Ml(45,`tr`,12)(46,`td`,12)(47,`p`),mN(48,`Emite uma notificação de sucesso.`),lg()()()(),Ml(49,`h5`)(50,`b`),mN(51,`Parâmetros`),lg()(),Ml(52,`table`,13)(53,`tr`,14)(54,`th`,15),mN(55,`Nome`),lg(),Ml(56,`th`,15),mN(57,`Tipo`),lg(),Ml(58,`th`,15),mN(59,`Descrição`),lg()(),Ml(60,`tr`,8)(61,`td`,16),mN(62,` notification`),lg(),Ml(63,`td`,17)(64,`code`,18),mN(65,` PoNotification `),lg(),Ml(66,`code`,19),mN(67,` string `),lg()(),Ml(68,`td`,12)(69,`p`),mN(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),lg()()()(),ql(71,`br`),Ml(72,`table`,7)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),mN(78,` warning `),lg()()()()(),Ml(79,`tr`,12)(80,`td`,12)(81,`p`),mN(82,`Emite uma notificação de atenção.`),lg()()()(),Ml(83,`h5`)(84,`b`),mN(85,`Parâmetros`),lg()(),Ml(86,`table`,13)(87,`tr`,14)(88,`th`,15),mN(89,`Nome`),lg(),Ml(90,`th`,15),mN(91,`Tipo`),lg(),Ml(92,`th`,15),mN(93,`Descrição`),lg()(),Ml(94,`tr`,8)(95,`td`,16),mN(96,` notification`),lg(),Ml(97,`td`,17)(98,`code`,18),mN(99,` PoNotification `),lg(),Ml(100,`code`,19),mN(101,` string `),lg()(),Ml(102,`td`,12)(103,`p`),mN(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),lg()()()(),ql(105,`br`),Ml(106,`table`,7)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),mN(112,` error `),lg()()()()(),Ml(113,`tr`,12)(114,`td`,12)(115,`p`),mN(116,`Emite uma notificação de erro.`),lg()()()(),Ml(117,`h5`)(118,`b`),mN(119,`Parâmetros`),lg()(),Ml(120,`table`,13)(121,`tr`,14)(122,`th`,15),mN(123,`Nome`),lg(),Ml(124,`th`,15),mN(125,`Tipo`),lg(),Ml(126,`th`,15),mN(127,`Descrição`),lg()(),Ml(128,`tr`,8)(129,`td`,16),mN(130,` notification`),lg(),Ml(131,`td`,17)(132,`code`,18),mN(133,` PoNotification `),lg(),Ml(134,`code`,19),mN(135,` string `),lg()(),Ml(136,`td`,12)(137,`p`),mN(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),lg()()()(),ql(139,`br`),Ml(140,`table`,7)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),mN(146,` information `),lg()()()()(),Ml(147,`tr`,12)(148,`td`,12)(149,`p`),mN(150,`Emite uma notificação de informação.`),lg()()()(),Ml(151,`h5`)(152,`b`),mN(153,`Parâmetros`),lg()(),Ml(154,`table`,13)(155,`tr`,14)(156,`th`,15),mN(157,`Nome`),lg(),Ml(158,`th`,15),mN(159,`Tipo`),lg(),Ml(160,`th`,15),mN(161,`Descrição`),lg()(),Ml(162,`tr`,8)(163,`td`,16),mN(164,` notification`),lg(),Ml(165,`td`,17)(166,`code`,18),mN(167,` PoNotification `),lg(),Ml(168,`code`,19),mN(169,` string `),lg()(),Ml(170,`td`,12)(171,`p`),mN(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),lg()()()(),ql(173,`br`),Ml(174,`table`,7)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),mN(180,` setDefaultDuration `),lg()()()()(),Ml(181,`tr`,12)(182,`td`,12)(183,`p`),mN(184,`Define em milissegundos a duração padrão para as notificações.`),lg(),Ml(185,`blockquote`)(186,`p`),mN(187,`Padrão 9 segundos.`),lg()()()()(),Ml(188,`h5`)(189,`b`),mN(190,`Parâmetros`),lg()(),Ml(191,`table`,13)(192,`tr`,14)(193,`th`,15),mN(194,`Nome`),lg(),Ml(195,`th`,15),mN(196,`Tipo`),lg(),Ml(197,`th`,15),mN(198,`Descrição`),lg()(),Ml(199,`tr`,8)(200,`td`,16),mN(201,` defaultDuration`),lg(),Ml(202,`td`,17)(203,`code`,20),mN(204,` number `),lg()(),Ml(205,`td`,12)(206,`p`),mN(207,`Duração em milisegundos`),lg()()()(),ql(208,`br`),Ml(209,`h3`),mN(210,`Interfaces`),lg(),Ml(211,`h4`,21)(212,`code`,5),mN(213,`PoNotification`),lg()(),Ml(214,`div`,2)(215,`p`),mN(216,`Interface para uso do serviço PoNotification.`),lg()(),Ml(217,`h4`,6),mN(218,`Propriedades`),lg(),Ml(219,`table`,13)(220,`tr`,14)(221,`th`,15),mN(222,`Nome`),lg(),Ml(223,`th`,15),mN(224,`Tipo`),lg(),Ml(225,`th`,15),mN(226,`Descrição`),lg()(),Ml(227,`tr`,8)(228,`td`,16)(229,`div`,10)(230,`span`,11),mN(231,` action`),ql(232,`br`),lg()()(),Ml(233,`td`,17)(234,`code`,22),mN(235,`Function`),lg()(),Ml(236,`td`,12)(237,`em`)(238,`strong`),mN(239,`(opcional)`),lg()(),Ml(240,`p`),mN(241,`Ação para a notificação.`),lg(),Ml(242,`p`),mN(243,`Ao utilizar esta propriedade em conjunto com a `),Ml(244,`code`),mN(245,`actionLabel`),lg(),mN(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),lg(),Ml(247,`p`),mN(248,`Caso não informar a propriedade `),Ml(249,`code`),mN(250,`actionLabel`),lg(),mN(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),lg()()(),Ml(252,`tr`,8)(253,`td`,16)(254,`div`,10)(255,`span`,11),mN(256,` actionLabel`),ql(257,`br`),lg()()(),Ml(258,`td`,17)(259,`code`,19),mN(260,`string`),lg()(),Ml(261,`td`,12)(262,`em`)(263,`strong`),mN(264,`(opcional)`),lg()(),Ml(265,`p`),mN(266,`Label do botão quando houver uma ação definida.`),lg()()(),Ml(267,`tr`,8)(268,`td`,16)(269,`div`,10)(270,`span`,11),mN(271,` duration`),ql(272,`br`),lg()()(),Ml(273,`td`,17)(274,`code`,23),mN(275,`number`),lg()(),Ml(276,`td`,12)(277,`em`)(278,`strong`),mN(279,`(opcional)`),lg()(),Ml(280,`p`),mN(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),lg(),Ml(282,`blockquote`)(283,`p`),mN(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),Ml(285,`code`),mN(286,`erro`),lg(),mN(287,`, a propriedade será ignorada.`),lg()()()(),Ml(288,`tr`,8)(289,`td`,16)(290,`div`,10)(291,`span`,11),mN(292,` message`),ql(293,`br`),lg()()(),Ml(294,`td`,17)(295,`code`,19),mN(296,`string`),lg()(),Ml(297,`td`,12)(298,`p`),mN(299,`Mensagem a ser exibida na notificação.`),lg()()(),Ml(300,`tr`,8)(301,`td`,16)(302,`div`,10)(303,`span`,11),mN(304,` mode`),ql(305,`br`),lg()()(),Ml(306,`td`,17)(307,`code`,24),mN(308,`PoToasterMode`),lg()(),Ml(309,`td`,12)(310,`em`)(311,`strong`),mN(312,`(opcional)`),lg()(),Ml(313,`p`),mN(314,`Define o Modo/Tipo do Toaster.`),lg()()(),Ml(315,`tr`,8)(316,`td`,16)(317,`div`,10)(318,`span`,11),mN(319,` orientation`),ql(320,`br`),lg()()(),Ml(321,`td`,17)(322,`code`,25),mN(323,`PoToasterOrientation`),lg()(),Ml(324,`td`,12)(325,`em`)(326,`strong`),mN(327,`(opcional)`),lg()(),Ml(328,`p`),mN(329,`Posição da notificação na página que pode ser `),Ml(330,`code`),mN(331,`Top`),lg(),mN(332,` (topo) ou `),Ml(333,`code`),mN(334,`Bottom`),lg(),mN(335,`(rodapé). A posição padrão é `),Ml(336,`code`),mN(337,`bottom`),lg(),mN(338,`.`),lg()()(),Ml(339,`tr`,8)(340,`td`,16)(341,`div`,10)(342,`span`,11),mN(343,` showClose`),ql(344,`br`),lg()()(),Ml(345,`td`,17)(346,`code`,26),mN(347,`boolean`),lg()(),Ml(348,`td`,12)(349,`em`)(350,`strong`),mN(351,`(opcional)`),lg()(),Ml(352,`p`),mN(353,`Exibe o botão de fechar a notificação.`),lg(),Ml(354,`blockquote`)(355,`p`),mN(356,`Caso a notificação seja do modo `),Ml(357,`code`),mN(358,`default`),lg(),mN(359,`, a propriedade será ignorada.`),lg()()()(),Ml(360,`tr`,8)(361,`td`,16)(362,`div`,10)(363,`span`,11),mN(364,` sizeActions`),ql(365,`br`),lg()()(),Ml(366,`td`,17)(367,`code`,19),mN(368,`string`),lg()(),Ml(369,`td`,12)(370,`em`)(371,`strong`),mN(372,`(opcional)`),lg()(),Ml(373,`p`),mN(374,`Define o tamanho das ações:`),lg(),Ml(375,`ul`)(376,`li`)(377,`code`),mN(378,`small`),lg(),mN(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),lg(),Ml(380,`li`)(381,`code`),mN(382,`medium`),lg(),mN(383,`: aplica a medida medium de cada ação.`),lg()(),Ml(384,`blockquote`)(385,`p`),mN(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(387,`code`),mN(388,`medium`),lg(),mN(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(390,`a`,27),mN(391,`po-theme`),lg(),mN(392,`.`),lg()()()(),Ml(393,`tr`,8)(394,`td`,16)(395,`div`,10)(396,`span`,11),mN(397,` supportMessage`),ql(398,`br`),lg()()(),Ml(399,`td`,17)(400,`code`,19),mN(401,`string`),lg()(),Ml(402,`td`,12)(403,`em`)(404,`strong`),mN(405,`(opcional)`),lg()(),Ml(406,`p`),mN(407,`Mensagem de suporte a ser exibida na notificação.`),lg()()()()())},encapsulation:2,changeDetection:1})}return a})();var Oe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Notification`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,o){n&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-notification-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-notification-basic-view`)(6,`sample-po-notification-labs-view`)(7,`sample-po-notification-sales-view`),lg()()()),n&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,fe,be,Ee,Se],encapsulation:2,changeDetection:1})}return a})()}];var ye=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[NL.forChild(Oe),NL]})}return a})();var at=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,ye]})}return a})();export{at as DocPoNotificationModule};