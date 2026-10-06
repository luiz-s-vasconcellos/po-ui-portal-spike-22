import{$i as pt,$r as VN,Br as Qn,Ci as fo,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Nn as x4,Qn as C9,Sa as zO,Wi as m0,Wn as AN,X as Lr,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,bn as roe,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,fn as ni,i as _a,in as kte,ji as ho,k as D4,ki as he$1,kn as v4,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,qi as ok,r as Ta,rn as ko,rr as DN,si as aN,sr as FN,ua as ug,ui as be$1,un as n4,wr as Kc,zi as kL}from"./main-AGY457H2.js";var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l}static ɵfac=function(n){return new(n||a)(E(Ou))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(n,o){n&1&&(Ac(0,`po-button`,0),pt(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),ug())},dependencies:[ni],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Notification Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-notification-basic`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Lr.Top},{label:`Bottom`,value:Lr.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:ko.Success},{label:`Error`,value:ko.Error},{label:`Warning`,value:ko.Warning},{label:`Information`,value:ko.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case ko.Success:this.poNotification.success(l);break;case ko.Error:this.poNotification.error(l);break;case ko.Warning:this.poNotification.warning(l);break;case ko.Information:this.poNotification.information(l);break;default:this.poNotification.success(l)}}static ɵfac=function(n){return new(n||a)(E(Ou))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-labs`]],viewQuery:function(n,o){if(n&1&&Xc(ta,7),n&2){let c;fo(c=ho())&&(o.poModal=c.first)}},standalone:!1,features:[be$1([Ou])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(n,o){if(n&1){let c=Bx();Ac(0,`po-button`,1),pt(`p-click`,function(){return o.showNotification()}),ug(),Kc(1,`po-divider`),Ac(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),RE(`ngModelChange`,function(r){return Jv(c),DN(o.type,r)||(o.type=r),e_(r)}),ug(),p0(),Ac(6,`po-radio-group`,4),RE(`ngModelChange`,function(r){return Jv(c),DN(o.orientation,r)||(o.orientation=r),e_(r)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(c),DN(o.message,r)||(o.message=r),e_(r)}),ug(),p0(),Ac(8,`po-number`,6),RE(`ngModelChange`,function(r){return Jv(c),DN(o.duration,r)||(o.duration=r),e_(r)}),ug(),p0(),Ac(9,`po-switch`,7),RE(`ngModelChange`,function(r){return Jv(c),DN(o.action,r)||(o.action=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(c),DN(o.actionLabel,r)||(o.actionLabel=r),e_(r)}),ug(),p0(),Ac(11,`po-radio-group`,9),RE(`ngModelChange`,function(r){return Jv(c),DN(o.sizeActions,r)||(o.sizeActions=r),e_(r)}),ug(),p0(),Ac(12,`div`,2)(13,`po-button`,10),pt(`p-click`,function(){return o.restore()}),ug()()()(),Ac(14,`po-modal`,11),vN(15,` Notification Action `),ug()}n&2&&(Hp(5),TE(`ngModel`,o.type),cE(`p-options`,o.typeOptions),m0(),Hp(),TE(`ngModel`,o.orientation),cE(`p-options`,o.orientationOptions),m0(),Hp(),TE(`ngModel`,o.message),m0(),Hp(),TE(`ngModel`,o.duration),m0(),Hp(),TE(`ngModel`,o.action),m0(),Hp(),TE(`ngModel`,o.actionLabel),m0(),Hp(),TE(`ngModel`,o.sizeActions),cE(`p-options`,o.sizeActionsOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,D4,roe,kte,v4,ta],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Notification Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-notification-labs`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(n){return new(n||a)(E(Ou))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[be$1([Ou])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(n,o){if(n&1){let c=Bx();Ac(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),RE(`ngModelChange`,function(r){return Jv(c),DN(o.product,r)||(o.product=r),e_(r)}),pt(`p-change`,function(){return o.checkProduct()}),ug(),p0(),Ac(4,`po-number`,3),RE(`ngModelChange`,function(r){return Jv(c),DN(o.quantity,r)||(o.quantity=r),e_(r)}),pt(`p-change`,function(){return o.checkQuantity()}),ug(),p0(),Ac(5,`po-number`,4),RE(`ngModelChange`,function(r){return Jv(c),DN(o.price,r)||(o.price=r),e_(r)}),ug(),p0(),Ac(6,`po-number`,5),RE(`ngModelChange`,function(r){return Jv(c),DN(o.stock,r)||(o.stock=r),e_(r)}),ug(),p0(),Ac(7,`po-number`,6),RE(`ngModelChange`,function(r){return Jv(c),DN(o.totalPrice,r)||(o.totalPrice=r),e_(r)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-button`,7),pt(`p-click`,function(){return o.addCart()}),ug()()(),Kc(10,`po-divider`)(11,`po-table`,8),Ac(12,`div`,1)(13,`div`,9)(14,`span`,10),vN(15),FN(16,`currency`),ug()()()}if(n&2){let c=Zx(1);Hp(3),TE(`ngModel`,o.product),cE(`p-options`,o.productOptions),m0(),Hp(),TE(`ngModel`,o.quantity),cE(`p-max`,o.stock),m0(),Hp(),TE(`ngModel`,o.price),m0(),Hp(),TE(`ngModel`,o.stock),m0(),Hp(),TE(`ngModel`,o.totalPrice),m0(),Hp(2),cE(`p-disabled`,c.form.invalid||o.stock===0),Hp(2),cE(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),Hp(4),mg(`Total: R`,VN(16,12,o.totalPriceSum),` `)}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,n4,roe,x4,ok],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Notification - Sales`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #f="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-notification-sales`),ug(),Kc(23,`hr`)),n&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,o.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ge],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(n,o){n&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Services`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoNotificationService`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),ug(),Ac(13,`ul`)(14,`li`),vN(15,`success,`),ug(),Ac(16,`li`),vN(17,`warning,`),ug(),Ac(18,`li`),vN(19,`error,`),ug(),Ac(20,`li`),vN(21,`information.`),ug()(),Ac(22,`p`),vN(23,`Cada um destes métodos recebe como parâmetro o objeto `),Ac(24,`code`),vN(25,`PoNotification`),ug(),vN(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),ug(),Ac(27,`p`),vN(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),ug(),Ac(29,`p`),vN(30,`Notificações com ação ou notificações de `),Ac(31,`code`),vN(32,`erro`),ug(),vN(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),ug(),Ac(34,`p`),vN(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),ug()(),Ac(36,`h3`,6),vN(37,`Métodos`),ug(),Ac(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),vN(44,` success `),ug()()()()(),Ac(45,`tr`,12)(46,`td`,12)(47,`p`),vN(48,`Emite uma notificação de sucesso.`),ug()()()(),Ac(49,`h5`)(50,`b`),vN(51,`Parâmetros`),ug()(),Ac(52,`table`,13)(53,`tr`,14)(54,`th`,15),vN(55,`Nome`),ug(),Ac(56,`th`,15),vN(57,`Tipo`),ug(),Ac(58,`th`,15),vN(59,`Descrição`),ug()(),Ac(60,`tr`,8)(61,`td`,16),vN(62,` notification`),ug(),Ac(63,`td`,17)(64,`code`,18),vN(65,` PoNotification `),ug(),Ac(66,`code`,19),vN(67,` string `),ug()(),Ac(68,`td`,12)(69,`p`),vN(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),ug()()()(),Kc(71,`br`),Ac(72,`table`,7)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),vN(78,` warning `),ug()()()()(),Ac(79,`tr`,12)(80,`td`,12)(81,`p`),vN(82,`Emite uma notificação de atenção.`),ug()()()(),Ac(83,`h5`)(84,`b`),vN(85,`Parâmetros`),ug()(),Ac(86,`table`,13)(87,`tr`,14)(88,`th`,15),vN(89,`Nome`),ug(),Ac(90,`th`,15),vN(91,`Tipo`),ug(),Ac(92,`th`,15),vN(93,`Descrição`),ug()(),Ac(94,`tr`,8)(95,`td`,16),vN(96,` notification`),ug(),Ac(97,`td`,17)(98,`code`,18),vN(99,` PoNotification `),ug(),Ac(100,`code`,19),vN(101,` string `),ug()(),Ac(102,`td`,12)(103,`p`),vN(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),ug()()()(),Kc(105,`br`),Ac(106,`table`,7)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),vN(112,` error `),ug()()()()(),Ac(113,`tr`,12)(114,`td`,12)(115,`p`),vN(116,`Emite uma notificação de erro.`),ug()()()(),Ac(117,`h5`)(118,`b`),vN(119,`Parâmetros`),ug()(),Ac(120,`table`,13)(121,`tr`,14)(122,`th`,15),vN(123,`Nome`),ug(),Ac(124,`th`,15),vN(125,`Tipo`),ug(),Ac(126,`th`,15),vN(127,`Descrição`),ug()(),Ac(128,`tr`,8)(129,`td`,16),vN(130,` notification`),ug(),Ac(131,`td`,17)(132,`code`,18),vN(133,` PoNotification `),ug(),Ac(134,`code`,19),vN(135,` string `),ug()(),Ac(136,`td`,12)(137,`p`),vN(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),ug()()()(),Kc(139,`br`),Ac(140,`table`,7)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),vN(146,` information `),ug()()()()(),Ac(147,`tr`,12)(148,`td`,12)(149,`p`),vN(150,`Emite uma notificação de informação.`),ug()()()(),Ac(151,`h5`)(152,`b`),vN(153,`Parâmetros`),ug()(),Ac(154,`table`,13)(155,`tr`,14)(156,`th`,15),vN(157,`Nome`),ug(),Ac(158,`th`,15),vN(159,`Tipo`),ug(),Ac(160,`th`,15),vN(161,`Descrição`),ug()(),Ac(162,`tr`,8)(163,`td`,16),vN(164,` notification`),ug(),Ac(165,`td`,17)(166,`code`,18),vN(167,` PoNotification `),ug(),Ac(168,`code`,19),vN(169,` string `),ug()(),Ac(170,`td`,12)(171,`p`),vN(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),ug()()()(),Kc(173,`br`),Ac(174,`table`,7)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),vN(180,` setDefaultDuration `),ug()()()()(),Ac(181,`tr`,12)(182,`td`,12)(183,`p`),vN(184,`Define em milissegundos a duração padrão para as notificações.`),ug(),Ac(185,`blockquote`)(186,`p`),vN(187,`Padrão 9 segundos.`),ug()()()()(),Ac(188,`h5`)(189,`b`),vN(190,`Parâmetros`),ug()(),Ac(191,`table`,13)(192,`tr`,14)(193,`th`,15),vN(194,`Nome`),ug(),Ac(195,`th`,15),vN(196,`Tipo`),ug(),Ac(197,`th`,15),vN(198,`Descrição`),ug()(),Ac(199,`tr`,8)(200,`td`,16),vN(201,` defaultDuration`),ug(),Ac(202,`td`,17)(203,`code`,20),vN(204,` number `),ug()(),Ac(205,`td`,12)(206,`p`),vN(207,`Duração em milisegundos`),ug()()()(),Kc(208,`br`),Ac(209,`h3`),vN(210,`Interfaces`),ug(),Ac(211,`h4`,21)(212,`code`,5),vN(213,`PoNotification`),ug()(),Ac(214,`div`,2)(215,`p`),vN(216,`Interface para uso do serviço PoNotification.`),ug()(),Ac(217,`h4`,6),vN(218,`Propriedades`),ug(),Ac(219,`table`,13)(220,`tr`,14)(221,`th`,15),vN(222,`Nome`),ug(),Ac(223,`th`,15),vN(224,`Tipo`),ug(),Ac(225,`th`,15),vN(226,`Descrição`),ug()(),Ac(227,`tr`,8)(228,`td`,16)(229,`div`,10)(230,`span`,11),vN(231,` action`),Kc(232,`br`),ug()()(),Ac(233,`td`,17)(234,`code`,22),vN(235,`Function`),ug()(),Ac(236,`td`,12)(237,`em`)(238,`strong`),vN(239,`(opcional)`),ug()(),Ac(240,`p`),vN(241,`Ação para a notificação.`),ug(),Ac(242,`p`),vN(243,`Ao utilizar esta propriedade em conjunto com a `),Ac(244,`code`),vN(245,`actionLabel`),ug(),vN(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),ug(),Ac(247,`p`),vN(248,`Caso não informar a propriedade `),Ac(249,`code`),vN(250,`actionLabel`),ug(),vN(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),ug()()(),Ac(252,`tr`,8)(253,`td`,16)(254,`div`,10)(255,`span`,11),vN(256,` actionLabel`),Kc(257,`br`),ug()()(),Ac(258,`td`,17)(259,`code`,19),vN(260,`string`),ug()(),Ac(261,`td`,12)(262,`em`)(263,`strong`),vN(264,`(opcional)`),ug()(),Ac(265,`p`),vN(266,`Label do botão quando houver uma ação definida.`),ug()()(),Ac(267,`tr`,8)(268,`td`,16)(269,`div`,10)(270,`span`,11),vN(271,` duration`),Kc(272,`br`),ug()()(),Ac(273,`td`,17)(274,`code`,23),vN(275,`number`),ug()(),Ac(276,`td`,12)(277,`em`)(278,`strong`),vN(279,`(opcional)`),ug()(),Ac(280,`p`),vN(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),ug(),Ac(282,`blockquote`)(283,`p`),vN(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),Ac(285,`code`),vN(286,`erro`),ug(),vN(287,`, a propriedade será ignorada.`),ug()()()(),Ac(288,`tr`,8)(289,`td`,16)(290,`div`,10)(291,`span`,11),vN(292,` message`),Kc(293,`br`),ug()()(),Ac(294,`td`,17)(295,`code`,19),vN(296,`string`),ug()(),Ac(297,`td`,12)(298,`p`),vN(299,`Mensagem a ser exibida na notificação.`),ug()()(),Ac(300,`tr`,8)(301,`td`,16)(302,`div`,10)(303,`span`,11),vN(304,` mode`),Kc(305,`br`),ug()()(),Ac(306,`td`,17)(307,`code`,24),vN(308,`PoToasterMode`),ug()(),Ac(309,`td`,12)(310,`em`)(311,`strong`),vN(312,`(opcional)`),ug()(),Ac(313,`p`),vN(314,`Define o Modo/Tipo do Toaster.`),ug()()(),Ac(315,`tr`,8)(316,`td`,16)(317,`div`,10)(318,`span`,11),vN(319,` orientation`),Kc(320,`br`),ug()()(),Ac(321,`td`,17)(322,`code`,25),vN(323,`PoToasterOrientation`),ug()(),Ac(324,`td`,12)(325,`em`)(326,`strong`),vN(327,`(opcional)`),ug()(),Ac(328,`p`),vN(329,`Posição da notificação na página que pode ser `),Ac(330,`code`),vN(331,`Top`),ug(),vN(332,` (topo) ou `),Ac(333,`code`),vN(334,`Bottom`),ug(),vN(335,`(rodapé). A posição padrão é `),Ac(336,`code`),vN(337,`bottom`),ug(),vN(338,`.`),ug()()(),Ac(339,`tr`,8)(340,`td`,16)(341,`div`,10)(342,`span`,11),vN(343,` showClose`),Kc(344,`br`),ug()()(),Ac(345,`td`,17)(346,`code`,26),vN(347,`boolean`),ug()(),Ac(348,`td`,12)(349,`em`)(350,`strong`),vN(351,`(opcional)`),ug()(),Ac(352,`p`),vN(353,`Exibe o botão de fechar a notificação.`),ug(),Ac(354,`blockquote`)(355,`p`),vN(356,`Caso a notificação seja do modo `),Ac(357,`code`),vN(358,`default`),ug(),vN(359,`, a propriedade será ignorada.`),ug()()()(),Ac(360,`tr`,8)(361,`td`,16)(362,`div`,10)(363,`span`,11),vN(364,` sizeActions`),Kc(365,`br`),ug()()(),Ac(366,`td`,17)(367,`code`,19),vN(368,`string`),ug()(),Ac(369,`td`,12)(370,`em`)(371,`strong`),vN(372,`(opcional)`),ug()(),Ac(373,`p`),vN(374,`Define o tamanho das ações:`),ug(),Ac(375,`ul`)(376,`li`)(377,`code`),vN(378,`small`),ug(),vN(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),ug(),Ac(380,`li`)(381,`code`),vN(382,`medium`),ug(),vN(383,`: aplica a medida medium de cada ação.`),ug()(),Ac(384,`blockquote`)(385,`p`),vN(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(387,`code`),vN(388,`medium`),ug(),vN(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(390,`a`,27),vN(391,`po-theme`),ug(),vN(392,`.`),ug()()()(),Ac(393,`tr`,8)(394,`td`,16)(395,`div`,10)(396,`span`,11),vN(397,` supportMessage`),Kc(398,`br`),ug()()(),Ac(399,`td`,17)(400,`code`,19),vN(401,`string`),ug()(),Ac(402,`td`,12)(403,`em`)(404,`strong`),vN(405,`(opcional)`),ug()(),Ac(406,`p`),vN(407,`Mensagem de suporte a ser exibida na notificação.`),ug()()()()())},encapsulation:2,changeDetection:1})}return a})();var Oe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Notification`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,o){n&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-notification-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-notification-basic-view`)(6,`sample-po-notification-labs-view`)(7,`sample-po-notification-sales-view`),ug()()()),n&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[$ze,gae,bae,fe,be,Ee,Se],encapsulation:2,changeDetection:1})}return a})()}];var ye=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[kL.forChild(Oe),kL]})}return a})();var at=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[Ta,ye]})}return a})();export{at as DocPoNotificationModule};