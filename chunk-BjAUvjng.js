import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aV as Xp,aU as Gr,dO as to,a$ as Qt,Q as Cl,a1 as dt,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,z as qx,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,b3 as q3,ct as Hhe,cc as Nde,bL as H3,b5 as Ko,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,W as we$1,av as zl,aw as uo,ax as fo,bG as k3,b6 as U3,dL as kO,a4 as dN,bc as Sx,a5 as hN,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l;}static \u0275fac=function(n){return new(n||a)(w(Xp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(Cl(0,"po-button",0),dt("p-click",function(){return o.poNotification.success("PO Notification!")}),og());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Notification Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-notification-basic"),og(),Hl(23,"hr")),n&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:Gr.Top},{label:"Bottom",value:Gr.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:to.Success},{label:"Error",value:to.Error},{label:"Warning",value:to.Warning},{label:"Information",value:to.Information}];constructor(l){this.poNotification=l;}ngOnInit(){this.restore();}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=false,this.actionLabel="",this.duration=void 0,this.sizeActions="medium";}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case to.Success:{this.poNotification.success(l);break}case to.Error:{this.poNotification.error(l);break}case to.Warning:{this.poNotification.warning(l);break}case to.Information:{this.poNotification.information(l);break}default:{this.poNotification.success(l);break}}}static \u0275fac=function(n){return new(n||a)(w(Xp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&zl(Ko,7),n&2){let c;uo(c=fo())&&(o.poModal=c.first);}},standalone:false,features:[we$1([Xp])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let c=gx();Cl(0,"po-button",1),dt("p-click",function(){return o.showNotification()}),og(),Hl(1,"po-divider"),Cl(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),gw("ngModelChange",function(r){return Jy(c),Zx(o.type,r)||(o.type=r),e_(r)}),og(),Z0(),Cl(6,"po-radio-group",4),gw("ngModelChange",function(r){return Jy(c),Zx(o.orientation,r)||(o.orientation=r),e_(r)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(r){return Jy(c),Zx(o.message,r)||(o.message=r),e_(r)}),og(),Z0(),Cl(8,"po-number",6),gw("ngModelChange",function(r){return Jy(c),Zx(o.duration,r)||(o.duration=r),e_(r)}),og(),Z0(),Cl(9,"po-switch",7),gw("ngModelChange",function(r){return Jy(c),Zx(o.action,r)||(o.action=r),e_(r)}),og(),Z0(),Cl(10,"po-input",8),gw("ngModelChange",function(r){return Jy(c),Zx(o.actionLabel,r)||(o.actionLabel=r),e_(r)}),og(),Z0(),Cl(11,"po-radio-group",9),gw("ngModelChange",function(r){return Jy(c),Zx(o.sizeActions,r)||(o.sizeActions=r),e_(r)}),og(),Z0(),Cl(12,"div",2)(13,"po-button",10),dt("p-click",function(){return o.restore()}),og()()()(),Cl(14,"po-modal",11),qx(15," Notification Action "),og();}n&2&&(Lp(5),pw("ngModel",o.type),ZE("p-options",o.typeOptions),X0(),Lp(),pw("ngModel",o.orientation),ZE("p-options",o.orientationOptions),X0(),Lp(),pw("ngModel",o.message),X0(),Lp(),pw("ngModel",o.duration),X0(),Lp(),pw("ngModel",o.action),X0(),Lp(),pw("ngModel",o.actionLabel),X0(),Lp(),pw("ngModel",o.sizeActions),ZE("p-options",o.sizeActionsOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Hhe,Nde,H3,Ko],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Notification Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-notification-labs"),og(),Hl(23,"hr")),n&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(l){this.poNotification=l;}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields();}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label;}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue();}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0;}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n;}totalValue(){this.totalPrice=this.quantity*this.price;}static \u0275fac=function(n){return new(n||a)(w(Xp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales"]],standalone:false,features:[we$1([Xp])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let c=gx();Cl(0,"form",null,0)(2,"div",1)(3,"po-combo",2),gw("ngModelChange",function(r){return Jy(c),Zx(o.product,r)||(o.product=r),e_(r)}),dt("p-change",function(){return o.checkProduct()}),og(),Z0(),Cl(4,"po-number",3),gw("ngModelChange",function(r){return Jy(c),Zx(o.quantity,r)||(o.quantity=r),e_(r)}),dt("p-change",function(){return o.checkQuantity()}),og(),Z0(),Cl(5,"po-number",4),gw("ngModelChange",function(r){return Jy(c),Zx(o.price,r)||(o.price=r),e_(r)}),og(),Z0(),Cl(6,"po-number",5),gw("ngModelChange",function(r){return Jy(c),Zx(o.stock,r)||(o.stock=r),e_(r)}),og(),Z0(),Cl(7,"po-number",6),gw("ngModelChange",function(r){return Jy(c),Zx(o.totalPrice,r)||(o.totalPrice=r),e_(r)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-button",7),dt("p-click",function(){return o.addCart()}),og()()(),Hl(10,"po-divider")(11,"po-table",8),Cl(12,"div",1)(13,"div",9)(14,"span",10),qx(15),dN(16,"currency"),og()()();}if(n&2){let c=Sx(1);Lp(3),pw("ngModel",o.product),ZE("p-options",o.productOptions),X0(),Lp(),pw("ngModel",o.quantity),ZE("p-max",o.stock),X0(),Lp(),pw("ngModel",o.price),X0(),Lp(),pw("ngModel",o.stock),X0(),Lp(),pw("ngModel",o.totalPrice),X0(),Lp(2),ZE("p-disabled",c.form.invalid||o.stock===0),Lp(2),ZE("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",false),Lp(4),dg("Total: R",hN(16,12,o.totalPriceSum)," ");}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,k3,Hhe,U3,kO],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Notification - Sales"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #f="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-notification-sales"),og(),Hl(23,"hr")),n&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ke,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return a})();var Se=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-doc"]],standalone:false,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Services"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoNotificationService"),og()(),Cl(10,"div",2)(11,"p"),qx(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),og(),Cl(13,"ul")(14,"li"),qx(15,"success,"),og(),Cl(16,"li"),qx(17,"warning,"),og(),Cl(18,"li"),qx(19,"error,"),og(),Cl(20,"li"),qx(21,"information."),og()(),Cl(22,"p"),qx(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),Cl(24,"code"),qx(25,"PoNotification"),og(),qx(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),og(),Cl(27,"p"),qx(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),og(),Cl(29,"p"),qx(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),Cl(31,"code"),qx(32,"erro"),og(),qx(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),og(),Cl(34,"p"),qx(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),og()(),Cl(36,"h3",6),qx(37,"M\xE9todos"),og(),Cl(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),qx(44," success "),og()()()()(),Cl(45,"tr",12)(46,"td",12)(47,"p"),qx(48,"Emite uma notifica\xE7\xE3o de sucesso."),og()()()(),Cl(49,"h5")(50,"b"),qx(51,"Par\xE2metros"),og()(),Cl(52,"table",13)(53,"tr",14)(54,"th",15),qx(55,"Nome"),og(),Cl(56,"th",15),qx(57,"Tipo"),og(),Cl(58,"th",15),qx(59,"Descri\xE7\xE3o"),og()(),Cl(60,"tr",8)(61,"td",16),qx(62," notification"),og(),Cl(63,"td",17)(64,"code",18),qx(65," PoNotification "),og(),Cl(66,"code",19),qx(67," string "),og()(),Cl(68,"td",12)(69,"p"),qx(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),og()()()(),Hl(71,"br"),Cl(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),qx(78," warning "),og()()()()(),Cl(79,"tr",12)(80,"td",12)(81,"p"),qx(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),og()()()(),Cl(83,"h5")(84,"b"),qx(85,"Par\xE2metros"),og()(),Cl(86,"table",13)(87,"tr",14)(88,"th",15),qx(89,"Nome"),og(),Cl(90,"th",15),qx(91,"Tipo"),og(),Cl(92,"th",15),qx(93,"Descri\xE7\xE3o"),og()(),Cl(94,"tr",8)(95,"td",16),qx(96," notification"),og(),Cl(97,"td",17)(98,"code",18),qx(99," PoNotification "),og(),Cl(100,"code",19),qx(101," string "),og()(),Cl(102,"td",12)(103,"p"),qx(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),Hl(105,"br"),Cl(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),qx(112," error "),og()()()()(),Cl(113,"tr",12)(114,"td",12)(115,"p"),qx(116,"Emite uma notifica\xE7\xE3o de erro."),og()()()(),Cl(117,"h5")(118,"b"),qx(119,"Par\xE2metros"),og()(),Cl(120,"table",13)(121,"tr",14)(122,"th",15),qx(123,"Nome"),og(),Cl(124,"th",15),qx(125,"Tipo"),og(),Cl(126,"th",15),qx(127,"Descri\xE7\xE3o"),og()(),Cl(128,"tr",8)(129,"td",16),qx(130," notification"),og(),Cl(131,"td",17)(132,"code",18),qx(133," PoNotification "),og(),Cl(134,"code",19),qx(135," string "),og()(),Cl(136,"td",12)(137,"p"),qx(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),Hl(139,"br"),Cl(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),qx(146," information "),og()()()()(),Cl(147,"tr",12)(148,"td",12)(149,"p"),qx(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),og()()()(),Cl(151,"h5")(152,"b"),qx(153,"Par\xE2metros"),og()(),Cl(154,"table",13)(155,"tr",14)(156,"th",15),qx(157,"Nome"),og(),Cl(158,"th",15),qx(159,"Tipo"),og(),Cl(160,"th",15),qx(161,"Descri\xE7\xE3o"),og()(),Cl(162,"tr",8)(163,"td",16),qx(164," notification"),og(),Cl(165,"td",17)(166,"code",18),qx(167," PoNotification "),og(),Cl(168,"code",19),qx(169," string "),og()(),Cl(170,"td",12)(171,"p"),qx(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),og()()()(),Hl(173,"br"),Cl(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),qx(180," setDefaultDuration "),og()()()()(),Cl(181,"tr",12)(182,"td",12)(183,"p"),qx(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),og(),Cl(185,"blockquote")(186,"p"),qx(187,"Padr\xE3o 9 segundos."),og()()()()(),Cl(188,"h5")(189,"b"),qx(190,"Par\xE2metros"),og()(),Cl(191,"table",13)(192,"tr",14)(193,"th",15),qx(194,"Nome"),og(),Cl(195,"th",15),qx(196,"Tipo"),og(),Cl(197,"th",15),qx(198,"Descri\xE7\xE3o"),og()(),Cl(199,"tr",8)(200,"td",16),qx(201," defaultDuration"),og(),Cl(202,"td",17)(203,"code",20),qx(204," number "),og()(),Cl(205,"td",12)(206,"p"),qx(207,"Dura\xE7\xE3o em milisegundos"),og()()()(),Hl(208,"br"),Cl(209,"h3"),qx(210,"Interfaces"),og(),Cl(211,"h4",21)(212,"code",5),qx(213,"PoNotification"),og()(),Cl(214,"div",2)(215,"p"),qx(216,"Interface para uso do servi\xE7o PoNotification."),og()(),Cl(217,"h4",6),qx(218,"Propriedades"),og(),Cl(219,"table",13)(220,"tr",14)(221,"th",15),qx(222,"Nome"),og(),Cl(223,"th",15),qx(224,"Tipo"),og(),Cl(225,"th",15),qx(226,"Descri\xE7\xE3o"),og()(),Cl(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),qx(231," action"),Hl(232,"br"),og()()(),Cl(233,"td",17)(234,"code",22),qx(235,"Function"),og()(),Cl(236,"td",12)(237,"em")(238,"strong"),qx(239,"(opcional)"),og()(),Cl(240,"p"),qx(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),og(),Cl(242,"p"),qx(243,"Ao utilizar esta propriedade em conjunto com a "),Cl(244,"code"),qx(245,"actionLabel"),og(),qx(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),og(),Cl(247,"p"),qx(248,"Caso n\xE3o informar a propriedade "),Cl(249,"code"),qx(250,"actionLabel"),og(),qx(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),og()()(),Cl(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),qx(256," actionLabel"),Hl(257,"br"),og()()(),Cl(258,"td",17)(259,"code",19),qx(260,"string"),og()(),Cl(261,"td",12)(262,"em")(263,"strong"),qx(264,"(opcional)"),og()(),Cl(265,"p"),qx(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),og()()(),Cl(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),qx(271," duration"),Hl(272,"br"),og()()(),Cl(273,"td",17)(274,"code",23),qx(275,"number"),og()(),Cl(276,"td",12)(277,"em")(278,"strong"),qx(279,"(opcional)"),og()(),Cl(280,"p"),qx(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),og(),Cl(282,"blockquote")(283,"p"),qx(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),Cl(285,"code"),qx(286,"erro"),og(),qx(287,", a propriedade ser\xE1 ignorada."),og()()()(),Cl(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),qx(292," message"),Hl(293,"br"),og()()(),Cl(294,"td",17)(295,"code",19),qx(296,"string"),og()(),Cl(297,"td",12)(298,"p"),qx(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),og()()(),Cl(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),qx(304," mode"),Hl(305,"br"),og()()(),Cl(306,"td",17)(307,"code",24),qx(308,"PoToasterMode"),og()(),Cl(309,"td",12)(310,"em")(311,"strong"),qx(312,"(opcional)"),og()(),Cl(313,"p"),qx(314,"Define o Modo/Tipo do Toaster."),og()()(),Cl(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),qx(319," orientation"),Hl(320,"br"),og()()(),Cl(321,"td",17)(322,"code",25),qx(323,"PoToasterOrientation"),og()(),Cl(324,"td",12)(325,"em")(326,"strong"),qx(327,"(opcional)"),og()(),Cl(328,"p"),qx(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),Cl(330,"code"),qx(331,"Top"),og(),qx(332," (topo) ou "),Cl(333,"code"),qx(334,"Bottom"),og(),qx(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),Cl(336,"code"),qx(337,"bottom"),og(),qx(338,"."),og()()(),Cl(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),qx(343," showClose"),Hl(344,"br"),og()()(),Cl(345,"td",17)(346,"code",26),qx(347,"boolean"),og()(),Cl(348,"td",12)(349,"em")(350,"strong"),qx(351,"(opcional)"),og()(),Cl(352,"p"),qx(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),og(),Cl(354,"blockquote")(355,"p"),qx(356,"Caso a notifica\xE7\xE3o seja do modo "),Cl(357,"code"),qx(358,"default"),og(),qx(359,", a propriedade ser\xE1 ignorada."),og()()()(),Cl(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),qx(364," sizeActions"),Hl(365,"br"),og()()(),Cl(366,"td",17)(367,"code",19),qx(368,"string"),og()(),Cl(369,"td",12)(370,"em")(371,"strong"),qx(372,"(opcional)"),og()(),Cl(373,"p"),qx(374,"Define o tamanho das a\xE7\xF5es:"),og(),Cl(375,"ul")(376,"li")(377,"code"),qx(378,"small"),og(),qx(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(380,"li")(381,"code"),qx(382,"medium"),og(),qx(383,": aplica a medida medium de cada a\xE7\xE3o."),og()(),Cl(384,"blockquote")(385,"p"),qx(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(387,"code"),qx(388,"medium"),og(),qx(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(390,"a",27),qx(391,"po-theme"),og(),qx(392,"."),og()()()(),Cl(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),qx(397," supportMessage"),Hl(398,"br"),og()()(),Cl(399,"td",17)(400,"code",19),qx(401,"string"),og()(),Cl(402,"td",12)(403,"em")(404,"strong"),qx(405,"(opcional)"),og()(),Cl(406,"p"),qx(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),og()()()()());},encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-notification-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),og()()()),n&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,fe,be,Ee,Se],encapsulation:2})}return a})();var Oe=[{path:"",component:Ce}],ye=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Oe),bL]})}return a})();var at=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,ye]})}return a})();export{at as DocPoNotificationModule};