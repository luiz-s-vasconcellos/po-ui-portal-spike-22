import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Qt as ea,Ri as nu,S as Ar,Sa as zk,Si as iu,V as Io,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,da as wO,dt as Sae,fa as we$1,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,or as EO,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,ur as Fx,va as y_,vn as p5,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l}static ɵfac=function(n){return new(n||a)(b(zu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`Open Notification`,3,`p-click`]],template:function(n,o){n&1&&(jc(0,`po-button`,0),mt(`p-click`,function(){return o.poNotification.success(`PO Notification!`)}),wg())},dependencies:[ni],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Notification Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-notification-basic/sample-po-notification-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-notification-basic/sample-po-notification-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-notification-basic`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:`Top`,value:Ar.Top},{label:`Bottom`,value:Ar.Bottom}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Io.Success},{label:`Error`,value:Io.Error},{label:`Warning`,value:Io.Warning},{label:`Information`,value:Io.Information}];constructor(l){this.poNotification=l}ngOnInit(){this.restore()}restore(){this.message=`PO Notification`,this.type=void 0,this.orientation=void 0,this.action=!1,this.actionLabel=``,this.duration=void 0,this.sizeActions=`medium`}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Io.Success:this.poNotification.success(l);break;case Io.Error:this.poNotification.error(l);break;case Io.Warning:this.poNotification.warning(l);break;case Io.Information:this.poNotification.information(l);break;default:this.poNotification.success(l)}}static ɵfac=function(n){return new(n||a)(b(zu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-labs`]],viewQuery:function(n,o){if(n&1&&iu(ea,7),n&2){let c;vo(c=_o())&&(o.poModal=c.first)}},standalone:!1,features:[we$1([zu])],decls:16,vars:10,consts:[[`f`,`ngForm`],[`p-label`,`Open Notification`,3,`p-click`],[1,`po-row`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`message`,`p-clean`,``,`p-label`,`Message`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`duration`,`p-clean`,``,`p-label`,`Duration`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`action`,`p-label`,`Action`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`actionLabel`,`p-clean`,``,`p-label`,`Action Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(n,o){if(n&1){let c=Sx();jc(0,`po-button`,1),mt(`p-click`,function(){return o.showNotification()}),wg(),nu(1,`po-divider`),jc(2,`div`,2)(3,`form`,null,0)(5,`po-radio-group`,3),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.type,r)||(o.type=r),v_(r)}),wg(),jc(6,`po-radio-group`,4),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.orientation,r)||(o.orientation=r),v_(r)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.message,r)||(o.message=r),v_(r)}),wg(),jc(8,`po-number`,6),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.duration,r)||(o.duration=r),v_(r)}),wg(),jc(9,`po-switch`,7),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.action,r)||(o.action=r),v_(r)}),wg(),jc(10,`po-input`,8),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.actionLabel,r)||(o.actionLabel=r),v_(r)}),wg(),jc(11,`po-radio-group`,9),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.sizeActions,r)||(o.sizeActions=r),v_(r)}),wg(),jc(12,`div`,2)(13,`po-button`,10),mt(`p-click`,function(){return o.restore()}),wg()()()(),jc(14,`po-modal`,11),iO(15,` Notification Action `),wg()}n&2&&(rg(5),ib(`ngModel`,o.type),jE(`p-options`,o.typeOptions),t0(),rg(),ib(`ngModel`,o.orientation),jE(`p-options`,o.orientationOptions),t0(),rg(),ib(`ngModel`,o.message),t0(),rg(),ib(`ngModel`,o.duration),t0(),rg(),ib(`ngModel`,o.action),t0(),rg(),ib(`ngModel`,o.actionLabel),t0(),rg(),ib(`ngModel`,o.sizeActions),jE(`p-options`,o.sizeActionsOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,doe,Ote,w5,ea],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Notification Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-notification-labs/sample-po-notification-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-notification-labs/sample-po-notification-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-notification-labs`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:`productID`,label:`Id`},{property:`productName`,label:`Product`},{property:`quantity`,label:`Quantity`},{property:`price`,label:`Price`,type:`currency`,format:`BRL`},{property:`total`,label:`Total Price`,type:`currency`,format:`BRL`}];products=[{productID:`004`,productName:`Notebook`,quantity:2,price:1250,total:2500}];productDetailsList=[{id:`001`,price:50,stock:10},{id:`002`,price:210,stock:5},{id:`003`,price:998,stock:2},{id:`004`,price:1250,stock:1}];productOptions=[{value:`001`,label:`p-Shirt Blue`},{value:`002`,label:`Clock`},{value:`003`,label:`Cellphone`},{value:`004`,label:`Notebook`}];constructor(l){this.poNotification=l}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success(`Order included successfully!`),this.stockUpdate(this.product,this.quantity),this.clearFields()}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label}}checkQuantity(){this.quantity>this.stock?this.poNotification.error(`Quantity not available in stock`):this.totalValue()}clearFields(){this.product=``,this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n}totalValue(){this.totalPrice=this.quantity*this.price}static ɵfac=function(n){return new(n||a)(b(zu))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-sales`]],standalone:!1,features:[we$1([zu])],decls:17,vars:14,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`product`,`p-label`,`Product`,`p-placeholder`,`Select a Product`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`quantity`,`p-label`,`Quantity`,`p-min`,`0`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`p-change`,`ngModel`,`p-max`],[`name`,`price`,`p-disabled`,``,`p-label`,`Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`stock`,`p-disabled`,``,`p-label`,`Stock`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`totalPrice`,`p-disabled`,``,`p-label`,`Total Price`,`p-placeholder`,`0`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add To Cart`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[1,`po-pull-right`,`po-lg-12`],[1,`po-pull-right`,`po-font-subtitle`]],template:function(n,o){if(n&1){let c=Sx();jc(0,`form`,null,0)(2,`div`,1)(3,`po-combo`,2),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.product,r)||(o.product=r),v_(r)}),mt(`p-change`,function(){return o.checkProduct()}),wg(),jc(4,`po-number`,3),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.quantity,r)||(o.quantity=r),v_(r)}),mt(`p-change`,function(){return o.checkQuantity()}),wg(),jc(5,`po-number`,4),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.price,r)||(o.price=r),v_(r)}),wg(),jc(6,`po-number`,5),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.stock,r)||(o.stock=r),v_(r)}),wg(),jc(7,`po-number`,6),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(o.totalPrice,r)||(o.totalPrice=r),v_(r)}),wg()(),jc(8,`div`,1)(9,`po-button`,7),mt(`p-click`,function(){return o.addCart()}),wg()()(),nu(10,`po-divider`)(11,`po-table`,8),jc(12,`div`,1)(13,`div`,9)(14,`span`,10),iO(15),EO(16,`currency`),wg()()()}if(n&2){let c=Fx(1);rg(3),ib(`ngModel`,o.product),jE(`p-options`,o.productOptions),t0(),rg(),ib(`ngModel`,o.quantity),jE(`p-max`,o.stock),t0(),rg(),ib(`ngModel`,o.price),t0(),rg(),ib(`ngModel`,o.stock),t0(),rg(),ib(`ngModel`,o.totalPrice),t0(),rg(2),jE(`p-disabled`,c.form.invalid||o.stock===0),rg(2),jE(`p-columns`,o.columns)(`p-items`,o.products)(`p-hide-table-search`,!1),rg(4),Ag(`Total: R`,wO(16,12,o.totalPriceSum),` `)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,p5,doe,I5,zk],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(n){return new(n||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-sales-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(n,o){n&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Notification - Sales`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-notification-sales/sample-po-notification-sales.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #f="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-notification-sales/sample-po-notification-sales.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-notification-sales`),wg(),nu(23,`hr`)),n&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-notification-doc`]],standalone:!1,decls:408,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-property-description`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-name-cell`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoNotification`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoToasterMode`],[`pan`,``,1,`docs-api-property-type`,`PoToasterOrientation`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(n,o){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoNotificationModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),iO(6,`Services`),wg(),jc(7,`h4`,4)(8,`code`,5),iO(9,`PoNotificationService`),wg()(),jc(10,`div`,2)(11,`p`),iO(12,`Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:`),wg(),jc(13,`ul`)(14,`li`),iO(15,`success,`),wg(),jc(16,`li`),iO(17,`warning,`),wg(),jc(18,`li`),iO(19,`error,`),wg(),jc(20,`li`),iO(21,`information.`),wg()(),jc(22,`p`),iO(23,`Cada um destes métodos recebe como parâmetro o objeto `),jc(24,`code`),iO(25,`PoNotification`),wg(),iO(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),wg(),jc(27,`p`),iO(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),wg(),jc(29,`p`),iO(30,`Notificações com ação ou notificações de `),jc(31,`code`),iO(32,`erro`),wg(),iO(33,` permanecerão em tela até o usuário fecha-lá ou clicar na ação.`),wg(),jc(34,`p`),iO(35,`O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova. `),wg()(),jc(36,`h3`,6),iO(37,`Métodos`),wg(),jc(38,`table`,7)(39,`tr`,8)(40,`th`,9)(41,`div`,10)(42,`h4`)(43,`span`,11),iO(44,` success `),wg()()()()(),jc(45,`tr`,12)(46,`td`,12)(47,`p`),iO(48,`Emite uma notificação de sucesso.`),wg()()()(),jc(49,`h5`)(50,`b`),iO(51,`Parâmetros`),wg()(),jc(52,`table`,13)(53,`tr`,14)(54,`th`,15),iO(55,`Nome`),wg(),jc(56,`th`,15),iO(57,`Tipo`),wg(),jc(58,`th`,15),iO(59,`Descrição`),wg()(),jc(60,`tr`,8)(61,`td`,16),iO(62,` notification`),wg(),jc(63,`td`,17)(64,`code`,18),iO(65,` PoNotification `),wg(),jc(66,`code`,19),iO(67,` string `),wg()(),jc(68,`td`,12)(69,`p`),iO(70,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação.`),wg()()()(),nu(71,`br`),jc(72,`table`,7)(73,`tr`,8)(74,`th`,9)(75,`div`,10)(76,`h4`)(77,`span`,11),iO(78,` warning `),wg()()()()(),jc(79,`tr`,12)(80,`td`,12)(81,`p`),iO(82,`Emite uma notificação de atenção.`),wg()()()(),jc(83,`h5`)(84,`b`),iO(85,`Parâmetros`),wg()(),jc(86,`table`,13)(87,`tr`,14)(88,`th`,15),iO(89,`Nome`),wg(),jc(90,`th`,15),iO(91,`Tipo`),wg(),jc(92,`th`,15),iO(93,`Descrição`),wg()(),jc(94,`tr`,8)(95,`td`,16),iO(96,` notification`),wg(),jc(97,`td`,17)(98,`code`,18),iO(99,` PoNotification `),wg(),jc(100,`code`,19),iO(101,` string `),wg()(),jc(102,`td`,12)(103,`p`),iO(104,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),wg()()()(),nu(105,`br`),jc(106,`table`,7)(107,`tr`,8)(108,`th`,9)(109,`div`,10)(110,`h4`)(111,`span`,11),iO(112,` error `),wg()()()()(),jc(113,`tr`,12)(114,`td`,12)(115,`p`),iO(116,`Emite uma notificação de erro.`),wg()()()(),jc(117,`h5`)(118,`b`),iO(119,`Parâmetros`),wg()(),jc(120,`table`,13)(121,`tr`,14)(122,`th`,15),iO(123,`Nome`),wg(),jc(124,`th`,15),iO(125,`Tipo`),wg(),jc(126,`th`,15),iO(127,`Descrição`),wg()(),jc(128,`tr`,8)(129,`td`,16),iO(130,` notification`),wg(),jc(131,`td`,17)(132,`code`,18),iO(133,` PoNotification `),wg(),jc(134,`code`,19),iO(135,` string `),wg()(),jc(136,`td`,12)(137,`p`),iO(138,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),wg()()()(),nu(139,`br`),jc(140,`table`,7)(141,`tr`,8)(142,`th`,9)(143,`div`,10)(144,`h4`)(145,`span`,11),iO(146,` information `),wg()()()()(),jc(147,`tr`,12)(148,`td`,12)(149,`p`),iO(150,`Emite uma notificação de informação.`),wg()()()(),jc(151,`h5`)(152,`b`),iO(153,`Parâmetros`),wg()(),jc(154,`table`,13)(155,`tr`,14)(156,`th`,15),iO(157,`Nome`),wg(),jc(158,`th`,15),iO(159,`Tipo`),wg(),jc(160,`th`,15),iO(161,`Descrição`),wg()(),jc(162,`tr`,8)(163,`td`,16),iO(164,` notification`),wg(),jc(165,`td`,17)(166,`code`,18),iO(167,` PoNotification `),wg(),jc(168,`code`,19),iO(169,` string `),wg()(),jc(170,`td`,12)(171,`p`),iO(172,`Objeto com os dados da notificação ou somente a string com a mensagem da notificação`),wg()()()(),nu(173,`br`),jc(174,`table`,7)(175,`tr`,8)(176,`th`,9)(177,`div`,10)(178,`h4`)(179,`span`,11),iO(180,` setDefaultDuration `),wg()()()()(),jc(181,`tr`,12)(182,`td`,12)(183,`p`),iO(184,`Define em milissegundos a duração padrão para as notificações.`),wg(),jc(185,`blockquote`)(186,`p`),iO(187,`Padrão 9 segundos.`),wg()()()()(),jc(188,`h5`)(189,`b`),iO(190,`Parâmetros`),wg()(),jc(191,`table`,13)(192,`tr`,14)(193,`th`,15),iO(194,`Nome`),wg(),jc(195,`th`,15),iO(196,`Tipo`),wg(),jc(197,`th`,15),iO(198,`Descrição`),wg()(),jc(199,`tr`,8)(200,`td`,16),iO(201,` defaultDuration`),wg(),jc(202,`td`,17)(203,`code`,20),iO(204,` number `),wg()(),jc(205,`td`,12)(206,`p`),iO(207,`Duração em milisegundos`),wg()()()(),nu(208,`br`),jc(209,`h3`),iO(210,`Interfaces`),wg(),jc(211,`h4`,21)(212,`code`,5),iO(213,`PoNotification`),wg()(),jc(214,`div`,2)(215,`p`),iO(216,`Interface para uso do serviço PoNotification.`),wg()(),jc(217,`h4`,6),iO(218,`Propriedades`),wg(),jc(219,`table`,13)(220,`tr`,14)(221,`th`,15),iO(222,`Nome`),wg(),jc(223,`th`,15),iO(224,`Tipo`),wg(),jc(225,`th`,15),iO(226,`Descrição`),wg()(),jc(227,`tr`,8)(228,`td`,16)(229,`div`,10)(230,`span`,11),iO(231,` action`),nu(232,`br`),wg()()(),jc(233,`td`,17)(234,`code`,22),iO(235,`Function`),wg()(),jc(236,`td`,12)(237,`em`)(238,`strong`),iO(239,`(opcional)`),wg()(),jc(240,`p`),iO(241,`Ação para a notificação.`),wg(),jc(242,`p`),iO(243,`Ao utilizar esta propriedade em conjunto com a `),jc(244,`code`),iO(245,`actionLabel`),wg(),iO(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),wg(),jc(247,`p`),iO(248,`Caso não informar a propriedade `),jc(249,`code`),iO(250,`actionLabel`),wg(),iO(251,` a ação será atribuida ao ícone de "Fechar" da notificação.`),wg()()(),jc(252,`tr`,8)(253,`td`,16)(254,`div`,10)(255,`span`,11),iO(256,` actionLabel`),nu(257,`br`),wg()()(),jc(258,`td`,17)(259,`code`,19),iO(260,`string`),wg()(),jc(261,`td`,12)(262,`em`)(263,`strong`),iO(264,`(opcional)`),wg()(),jc(265,`p`),iO(266,`Label do botão quando houver uma ação definida.`),wg()()(),jc(267,`tr`,8)(268,`td`,16)(269,`div`,10)(270,`span`,11),iO(271,` duration`),nu(272,`br`),wg()()(),jc(273,`td`,17)(274,`code`,23),iO(275,`number`),wg()(),jc(276,`td`,12)(277,`em`)(278,`strong`),iO(279,`(opcional)`),wg()(),jc(280,`p`),iO(281,`Define em milissegundos o tempo de duração que a notificação ficará disponível em tela. O padrão é 9000 milissegundos.`),wg(),jc(282,`blockquote`)(283,`p`),iO(284,`Caso a notificação tenha uma ação ou seja uma notificação de `),jc(285,`code`),iO(286,`erro`),wg(),iO(287,`, a propriedade será ignorada.`),wg()()()(),jc(288,`tr`,8)(289,`td`,16)(290,`div`,10)(291,`span`,11),iO(292,` message`),nu(293,`br`),wg()()(),jc(294,`td`,17)(295,`code`,19),iO(296,`string`),wg()(),jc(297,`td`,12)(298,`p`),iO(299,`Mensagem a ser exibida na notificação.`),wg()()(),jc(300,`tr`,8)(301,`td`,16)(302,`div`,10)(303,`span`,11),iO(304,` mode`),nu(305,`br`),wg()()(),jc(306,`td`,17)(307,`code`,24),iO(308,`PoToasterMode`),wg()(),jc(309,`td`,12)(310,`em`)(311,`strong`),iO(312,`(opcional)`),wg()(),jc(313,`p`),iO(314,`Define o Modo/Tipo do Toaster.`),wg()()(),jc(315,`tr`,8)(316,`td`,16)(317,`div`,10)(318,`span`,11),iO(319,` orientation`),nu(320,`br`),wg()()(),jc(321,`td`,17)(322,`code`,25),iO(323,`PoToasterOrientation`),wg()(),jc(324,`td`,12)(325,`em`)(326,`strong`),iO(327,`(opcional)`),wg()(),jc(328,`p`),iO(329,`Posição da notificação na página que pode ser `),jc(330,`code`),iO(331,`Top`),wg(),iO(332,` (topo) ou `),jc(333,`code`),iO(334,`Bottom`),wg(),iO(335,`(rodapé). A posição padrão é `),jc(336,`code`),iO(337,`bottom`),wg(),iO(338,`.`),wg()()(),jc(339,`tr`,8)(340,`td`,16)(341,`div`,10)(342,`span`,11),iO(343,` showClose`),nu(344,`br`),wg()()(),jc(345,`td`,17)(346,`code`,26),iO(347,`boolean`),wg()(),jc(348,`td`,12)(349,`em`)(350,`strong`),iO(351,`(opcional)`),wg()(),jc(352,`p`),iO(353,`Exibe o botão de fechar a notificação.`),wg(),jc(354,`blockquote`)(355,`p`),iO(356,`Caso a notificação seja do modo `),jc(357,`code`),iO(358,`default`),wg(),iO(359,`, a propriedade será ignorada.`),wg()()()(),jc(360,`tr`,8)(361,`td`,16)(362,`div`,10)(363,`span`,11),iO(364,` sizeActions`),nu(365,`br`),wg()()(),jc(366,`td`,17)(367,`code`,19),iO(368,`string`),wg()(),jc(369,`td`,12)(370,`em`)(371,`strong`),iO(372,`(opcional)`),wg()(),jc(373,`p`),iO(374,`Define o tamanho das ações:`),wg(),jc(375,`ul`)(376,`li`)(377,`code`),iO(378,`small`),wg(),iO(379,`: aplica a medida small de cada ação (disponível apenas para acessibilidade AA).`),wg(),jc(380,`li`)(381,`code`),iO(382,`medium`),wg(),iO(383,`: aplica a medida medium de cada ação.`),wg()(),jc(384,`blockquote`)(385,`p`),iO(386,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(387,`code`),iO(388,`medium`),wg(),iO(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(390,`a`,27),iO(391,`po-theme`),wg(),iO(392,`.`),wg()()()(),jc(393,`tr`,8)(394,`td`,16)(395,`div`,10)(396,`span`,11),iO(397,` supportMessage`),nu(398,`br`),wg()()(),jc(399,`td`,17)(400,`code`,19),iO(401,`string`),wg()(),jc(402,`td`,12)(403,`em`)(404,`strong`),iO(405,`(opcional)`),wg()(),jc(406,`p`),iO(407,`Mensagem de suporte a ser exibida na notificação.`),wg()()()()())},encapsulation:2,changeDetection:1})}return a})();var Oe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Notification`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(n,o){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-notification-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-notification-basic-view`)(6,`sample-po-notification-labs-view`)(7,`sample-po-notification-sales-view`),wg()()()),n&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,fe,be,Ee,Se],encapsulation:2,changeDetection:1})}return a})()}];var ye=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Oe),C1]})}return a})();var at=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,ye]})}return a})();export{at as DocPoNotificationModule};