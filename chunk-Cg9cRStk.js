import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aE as Bp,aD as Or,dj as jn,aK as Pe$1,J as wl,a1 as ut,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,z as Ux,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,aO as Yo,bT as ha,bB as ga,bd as na,aQ as dt,al as lx,am as pw,an as $0,ap as hw,aq as G0,X as we$1,as as $l,at as uo,au as fo,b8 as $i,aR as ty,de as TO,a4 as oN,aX as _x,a5 as aN,a3 as D3,az as Qy,aB as $x,aA as Jy,c3 as zo}from'./main-6SPFG3VI.js';var be=(()=>{class a{poNotification;constructor(r){this.poNotification=r;}static \u0275fac=function(n){return new(n||a)(C(Bp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(wl(0,"po-button",0),ut("p-click",function(){return o.poNotification.success("PO Notification!")}),ng());},dependencies:[Pe$1],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Notification Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-notification-basic"),ng(),Ul(23,"hr")),n&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return a})();var Se=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:Or.Top},{label:"Bottom",value:Or.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:jn.Success},{label:"Error",value:jn.Error},{label:"Warning",value:jn.Warning},{label:"Information",value:jn.Information}];constructor(r){this.poNotification=r;}ngOnInit(){this.restore();}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=false,this.actionLabel="",this.duration=void 0,this.sizeActions="medium";}showNotification(){let r={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(r.action=()=>this.poModal.open()),this.type){case jn.Success:{this.poNotification.success(r);break}case jn.Error:{this.poNotification.error(r);break}case jn.Warning:{this.poNotification.warning(r);break}case jn.Information:{this.poNotification.information(r);break}default:{this.poNotification.success(r);break}}}static \u0275fac=function(n){return new(n||a)(C(Bp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&$l(zo,7),n&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we$1([Bp])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let m=lx();wl(0,"po-button",1),ut("p-click",function(){return o.showNotification()}),ng(),Ul(1,"po-divider"),wl(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),pw("ngModelChange",function(l){return Qy(m),$x(o.type,l)||(o.type=l),Jy(l)}),ng(),$0(),wl(6,"po-radio-group",4),pw("ngModelChange",function(l){return Qy(m),$x(o.orientation,l)||(o.orientation=l),Jy(l)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(l){return Qy(m),$x(o.message,l)||(o.message=l),Jy(l)}),ng(),$0(),wl(8,"po-number",6),pw("ngModelChange",function(l){return Qy(m),$x(o.duration,l)||(o.duration=l),Jy(l)}),ng(),$0(),wl(9,"po-switch",7),pw("ngModelChange",function(l){return Qy(m),$x(o.action,l)||(o.action=l),Jy(l)}),ng(),$0(),wl(10,"po-input",8),pw("ngModelChange",function(l){return Qy(m),$x(o.actionLabel,l)||(o.actionLabel=l),Jy(l)}),ng(),$0(),wl(11,"po-radio-group",9),pw("ngModelChange",function(l){return Qy(m),$x(o.sizeActions,l)||(o.sizeActions=l),Jy(l)}),ng(),$0(),wl(12,"div",2)(13,"po-button",10),ut("p-click",function(){return o.restore()}),ng()()()(),wl(14,"po-modal",11),Ux(15," Notification Action "),ng();}n&2&&(Pp(5),hw("ngModel",o.type),YE("p-options",o.typeOptions),G0(),Pp(),hw("ngModel",o.orientation),YE("p-options",o.orientationOptions),G0(),Pp(),hw("ngModel",o.message),G0(),Pp(),hw("ngModel",o.duration),G0(),Pp(),hw("ngModel",o.action),G0(),Pp(),hw("ngModel",o.actionLabel),G0(),Pp(),hw("ngModel",o.sizeActions),YE("p-options",o.sizeActionsOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Yo,ha,ga,na,dt],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Notification Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-notification-labs"),ng(),Ul(23,"hr")),n&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Se],encapsulation:2})}return a})();var ye=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(r){this.poNotification=r;}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let r=this.products.findIndex(n=>n.productID===this.product);r>=0?(this.products[r].quantity+=this.quantity,this.products[r].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields();}}checkProduct(){let r=this.productDetailsList.findIndex(n=>n.id===this.product);if(r>=0){let n=this.productDetailsList[r];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[r].label;}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue();}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0;}stockUpdate(r,n){let o=this.productDetailsList.find(m=>m.id===r);o.stock=o.stock-n;}totalValue(){this.totalPrice=this.quantity*this.price;}static \u0275fac=function(n){return new(n||a)(C(Bp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales"]],standalone:false,features:[we$1([Bp])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let m=lx();wl(0,"form",null,0)(2,"div",1)(3,"po-combo",2),pw("ngModelChange",function(l){return Qy(m),$x(o.product,l)||(o.product=l),Jy(l)}),ut("p-change",function(){return o.checkProduct()}),ng(),$0(),wl(4,"po-number",3),pw("ngModelChange",function(l){return Qy(m),$x(o.quantity,l)||(o.quantity=l),Jy(l)}),ut("p-change",function(){return o.checkQuantity()}),ng(),$0(),wl(5,"po-number",4),pw("ngModelChange",function(l){return Qy(m),$x(o.price,l)||(o.price=l),Jy(l)}),ng(),$0(),wl(6,"po-number",5),pw("ngModelChange",function(l){return Qy(m),$x(o.stock,l)||(o.stock=l),Jy(l)}),ng(),$0(),wl(7,"po-number",6),pw("ngModelChange",function(l){return Qy(m),$x(o.totalPrice,l)||(o.totalPrice=l),Jy(l)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-button",7),ut("p-click",function(){return o.addCart()}),ng()()(),Ul(10,"po-divider")(11,"po-table",8),wl(12,"div",1)(13,"div",9)(14,"span",10),Ux(15),oN(16,"currency"),ng()()();}if(n&2){let m=_x(1);Pp(3),hw("ngModel",o.product),YE("p-options",o.productOptions),G0(),Pp(),hw("ngModel",o.quantity),YE("p-max",o.stock),G0(),Pp(),hw("ngModel",o.price),G0(),Pp(),hw("ngModel",o.stock),G0(),Pp(),hw("ngModel",o.totalPrice),G0(),Pp(2),YE("p-disabled",m.form.invalid||o.stock===0),Pp(2),YE("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",false),Pp(4),cg("Total: R",aN(16,12,o.totalPriceSum)," ");}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,$i,ha,ty,TO],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Notification - Sales"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #f="ngForm">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-notification-sales"),ng(),Ul(23,"hr")),n&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ie,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-doc"]],standalone:false,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Services"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoNotificationService"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),ng(),wl(13,"ul")(14,"li"),Ux(15,"success,"),ng(),wl(16,"li"),Ux(17,"warning,"),ng(),wl(18,"li"),Ux(19,"error,"),ng(),wl(20,"li"),Ux(21,"information."),ng()(),wl(22,"p"),Ux(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),wl(24,"code"),Ux(25,"PoNotification"),ng(),Ux(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),ng(),wl(27,"p"),Ux(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),ng(),wl(29,"p"),Ux(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),wl(31,"code"),Ux(32,"erro"),ng(),Ux(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),ng(),wl(34,"p"),Ux(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),ng()(),wl(36,"h3",6),Ux(37,"M\xE9todos"),ng(),wl(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),Ux(44," success "),ng()()()()(),wl(45,"tr",12)(46,"td",12)(47,"p"),Ux(48,"Emite uma notifica\xE7\xE3o de sucesso."),ng()()()(),wl(49,"h5")(50,"b"),Ux(51,"Par\xE2metros"),ng()(),wl(52,"table",13)(53,"tr",14)(54,"th",15),Ux(55,"Nome"),ng(),wl(56,"th",15),Ux(57,"Tipo"),ng(),wl(58,"th",15),Ux(59,"Descri\xE7\xE3o"),ng()(),wl(60,"tr",8)(61,"td",16),Ux(62," notification"),ng(),wl(63,"td",17)(64,"code",18),Ux(65," PoNotification "),ng(),wl(66,"code",19),Ux(67," string "),ng()(),wl(68,"td",12)(69,"p"),Ux(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),ng()()()(),Ul(71,"br"),wl(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),Ux(78," warning "),ng()()()()(),wl(79,"tr",12)(80,"td",12)(81,"p"),Ux(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),ng()()()(),wl(83,"h5")(84,"b"),Ux(85,"Par\xE2metros"),ng()(),wl(86,"table",13)(87,"tr",14)(88,"th",15),Ux(89,"Nome"),ng(),wl(90,"th",15),Ux(91,"Tipo"),ng(),wl(92,"th",15),Ux(93,"Descri\xE7\xE3o"),ng()(),wl(94,"tr",8)(95,"td",16),Ux(96," notification"),ng(),wl(97,"td",17)(98,"code",18),Ux(99," PoNotification "),ng(),wl(100,"code",19),Ux(101," string "),ng()(),wl(102,"td",12)(103,"p"),Ux(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),ng()()()(),Ul(105,"br"),wl(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),Ux(112," error "),ng()()()()(),wl(113,"tr",12)(114,"td",12)(115,"p"),Ux(116,"Emite uma notifica\xE7\xE3o de erro."),ng()()()(),wl(117,"h5")(118,"b"),Ux(119,"Par\xE2metros"),ng()(),wl(120,"table",13)(121,"tr",14)(122,"th",15),Ux(123,"Nome"),ng(),wl(124,"th",15),Ux(125,"Tipo"),ng(),wl(126,"th",15),Ux(127,"Descri\xE7\xE3o"),ng()(),wl(128,"tr",8)(129,"td",16),Ux(130," notification"),ng(),wl(131,"td",17)(132,"code",18),Ux(133," PoNotification "),ng(),wl(134,"code",19),Ux(135," string "),ng()(),wl(136,"td",12)(137,"p"),Ux(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),ng()()()(),Ul(139,"br"),wl(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),Ux(146," information "),ng()()()()(),wl(147,"tr",12)(148,"td",12)(149,"p"),Ux(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),ng()()()(),wl(151,"h5")(152,"b"),Ux(153,"Par\xE2metros"),ng()(),wl(154,"table",13)(155,"tr",14)(156,"th",15),Ux(157,"Nome"),ng(),wl(158,"th",15),Ux(159,"Tipo"),ng(),wl(160,"th",15),Ux(161,"Descri\xE7\xE3o"),ng()(),wl(162,"tr",8)(163,"td",16),Ux(164," notification"),ng(),wl(165,"td",17)(166,"code",18),Ux(167," PoNotification "),ng(),wl(168,"code",19),Ux(169," string "),ng()(),wl(170,"td",12)(171,"p"),Ux(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),ng()()()(),Ul(173,"br"),wl(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),Ux(180," setDefaultDuration "),ng()()()()(),wl(181,"tr",12)(182,"td",12)(183,"p"),Ux(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),ng(),wl(185,"blockquote")(186,"p"),Ux(187,"Padr\xE3o 9 segundos."),ng()()()()(),wl(188,"h5")(189,"b"),Ux(190,"Par\xE2metros"),ng()(),wl(191,"table",13)(192,"tr",14)(193,"th",15),Ux(194,"Nome"),ng(),wl(195,"th",15),Ux(196,"Tipo"),ng(),wl(197,"th",15),Ux(198,"Descri\xE7\xE3o"),ng()(),wl(199,"tr",8)(200,"td",16),Ux(201," defaultDuration"),ng(),wl(202,"td",17)(203,"code",20),Ux(204," number "),ng()(),wl(205,"td",12)(206,"p"),Ux(207,"Dura\xE7\xE3o em milisegundos"),ng()()()(),Ul(208,"br"),wl(209,"h3"),Ux(210,"Interfaces"),ng(),wl(211,"h4",21)(212,"code",5),Ux(213,"PoNotification"),ng()(),wl(214,"div",2)(215,"p"),Ux(216,"Interface para uso do servi\xE7o PoNotification."),ng()(),wl(217,"h4",6),Ux(218,"Propriedades"),ng(),wl(219,"table",13)(220,"tr",14)(221,"th",15),Ux(222,"Nome"),ng(),wl(223,"th",15),Ux(224,"Tipo"),ng(),wl(225,"th",15),Ux(226,"Descri\xE7\xE3o"),ng()(),wl(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),Ux(231," action"),Ul(232,"br"),ng()()(),wl(233,"td",17)(234,"code",22),Ux(235,"Function"),ng()(),wl(236,"td",12)(237,"em")(238,"strong"),Ux(239,"(opcional)"),ng()(),wl(240,"p"),Ux(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),ng(),wl(242,"p"),Ux(243,"Ao utilizar esta propriedade em conjunto com a "),wl(244,"code"),Ux(245,"actionLabel"),ng(),Ux(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),ng(),wl(247,"p"),Ux(248,"Caso n\xE3o informar a propriedade "),wl(249,"code"),Ux(250,"actionLabel"),ng(),Ux(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),ng()()(),wl(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),Ux(256," actionLabel"),Ul(257,"br"),ng()()(),wl(258,"td",17)(259,"code",19),Ux(260,"string"),ng()(),wl(261,"td",12)(262,"em")(263,"strong"),Ux(264,"(opcional)"),ng()(),wl(265,"p"),Ux(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),ng()()(),wl(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),Ux(271," duration"),Ul(272,"br"),ng()()(),wl(273,"td",17)(274,"code",23),Ux(275,"number"),ng()(),wl(276,"td",12)(277,"em")(278,"strong"),Ux(279,"(opcional)"),ng()(),wl(280,"p"),Ux(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),ng(),wl(282,"blockquote")(283,"p"),Ux(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),wl(285,"code"),Ux(286,"erro"),ng(),Ux(287,", a propriedade ser\xE1 ignorada."),ng()()()(),wl(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),Ux(292," message"),Ul(293,"br"),ng()()(),wl(294,"td",17)(295,"code",19),Ux(296,"string"),ng()(),wl(297,"td",12)(298,"p"),Ux(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),ng()()(),wl(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),Ux(304," mode"),Ul(305,"br"),ng()()(),wl(306,"td",17)(307,"code",24),Ux(308,"PoToasterMode"),ng()(),wl(309,"td",12)(310,"em")(311,"strong"),Ux(312,"(opcional)"),ng()(),wl(313,"p"),Ux(314,"Define o Modo/Tipo do Toaster."),ng()()(),wl(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),Ux(319," orientation"),Ul(320,"br"),ng()()(),wl(321,"td",17)(322,"code",25),Ux(323,"PoToasterOrientation"),ng()(),wl(324,"td",12)(325,"em")(326,"strong"),Ux(327,"(opcional)"),ng()(),wl(328,"p"),Ux(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),wl(330,"code"),Ux(331,"Top"),ng(),Ux(332," (topo) ou "),wl(333,"code"),Ux(334,"Bottom"),ng(),Ux(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),wl(336,"code"),Ux(337,"bottom"),ng(),Ux(338,"."),ng()()(),wl(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),Ux(343," showClose"),Ul(344,"br"),ng()()(),wl(345,"td",17)(346,"code",26),Ux(347,"boolean"),ng()(),wl(348,"td",12)(349,"em")(350,"strong"),Ux(351,"(opcional)"),ng()(),wl(352,"p"),Ux(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),ng(),wl(354,"blockquote")(355,"p"),Ux(356,"Caso a notifica\xE7\xE3o seja do modo "),wl(357,"code"),Ux(358,"default"),ng(),Ux(359,", a propriedade ser\xE1 ignorada."),ng()()()(),wl(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),Ux(364," sizeActions"),Ul(365,"br"),ng()()(),wl(366,"td",17)(367,"code",19),Ux(368,"string"),ng()(),wl(369,"td",12)(370,"em")(371,"strong"),Ux(372,"(opcional)"),ng()(),wl(373,"p"),Ux(374,"Define o tamanho das a\xE7\xF5es:"),ng(),wl(375,"ul")(376,"li")(377,"code"),Ux(378,"small"),ng(),Ux(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(380,"li")(381,"code"),Ux(382,"medium"),ng(),Ux(383,": aplica a medida medium de cada a\xE7\xE3o."),ng()(),wl(384,"blockquote")(385,"p"),Ux(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(387,"code"),Ux(388,"medium"),ng(),Ux(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(390,"a",27),Ux(391,"po-theme"),ng(),Ux(392,"."),ng()()()(),wl(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),Ux(397," supportMessage"),Ul(398,"br"),ng()()(),wl(399,"td",17)(400,"code",19),Ux(401,"string"),ng()(),wl(402,"td",12)(403,"em")(404,"strong"),Ux(405,"(opcional)"),ng()(),wl(406,"p"),Ux(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),ng()()()()());},encapsulation:2})}return a})();var Ne=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,n){this.route=r,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let n=r.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-notification-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),ng()()()),n&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,Ee,Ce,Pe,ve],encapsulation:2})}return a})();var We=[{path:"",component:Ne}],_e=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(We),vL]})}return a})();var Et=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,_e]})}return a})();export{Et as DocPoNotificationModule};