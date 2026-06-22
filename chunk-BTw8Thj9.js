import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,aW as Yp,aV as Ur,dI as Jn,b0 as Qt,T as Tl,a1 as ht,L as sg,an as TO,aH as Ga,b8 as Hme,b9 as Gme,J as Gl,z as tN,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b1 as mv,b4 as O3,cp as Nhe,c8 as Sde,bH as k3,b6 as Yo,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,O as we$1,av as Yl,aw as uo,ax as fo,bC as g3,b7 as E3,dF as HO,a4 as _N,bd as Ox,a5 as EN,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l;}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(Tl(0,"po-button",0),ht("p-click",function(){return o.poNotification.success("PO Notification!")}),sg());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Notification Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-notification-basic"),sg(),Gl(23,"hr")),n&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ve,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,de],encapsulation:2})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:Ur.Top},{label:"Bottom",value:Ur.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Jn.Success},{label:"Error",value:Jn.Error},{label:"Warning",value:Jn.Warning},{label:"Information",value:Jn.Information}];constructor(l){this.poNotification=l;}ngOnInit(){this.restore();}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=false,this.actionLabel="",this.duration=void 0,this.sizeActions="medium";}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Jn.Success:{this.poNotification.success(l);break}case Jn.Error:{this.poNotification.error(l);break}case Jn.Warning:{this.poNotification.warning(l);break}case Jn.Information:{this.poNotification.information(l);break}default:{this.poNotification.success(l);break}}}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&Yl(Yo,7),n&2){let c;uo(c=fo())&&(o.poModal=c.first);}},standalone:false,features:[we$1([Yp])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let c=Cx();Tl(0,"po-button",1),ht("p-click",function(){return o.showNotification()}),sg(),Gl(1,"po-divider"),Tl(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),Ew("ngModelChange",function(r){return Ky(c),rN(o.type,r)||(o.type=r),Xy(r)}),sg(),t0(),Tl(6,"po-radio-group",4),Ew("ngModelChange",function(r){return Ky(c),rN(o.orientation,r)||(o.orientation=r),Xy(r)}),sg(),t0(),Tl(7,"po-input",5),Ew("ngModelChange",function(r){return Ky(c),rN(o.message,r)||(o.message=r),Xy(r)}),sg(),t0(),Tl(8,"po-number",6),Ew("ngModelChange",function(r){return Ky(c),rN(o.duration,r)||(o.duration=r),Xy(r)}),sg(),t0(),Tl(9,"po-switch",7),Ew("ngModelChange",function(r){return Ky(c),rN(o.action,r)||(o.action=r),Xy(r)}),sg(),t0(),Tl(10,"po-input",8),Ew("ngModelChange",function(r){return Ky(c),rN(o.actionLabel,r)||(o.actionLabel=r),Xy(r)}),sg(),t0(),Tl(11,"po-radio-group",9),Ew("ngModelChange",function(r){return Ky(c),rN(o.sizeActions,r)||(o.sizeActions=r),Xy(r)}),sg(),t0(),Tl(12,"div",2)(13,"po-button",10),ht("p-click",function(){return o.restore()}),sg()()()(),Tl(14,"po-modal",11),tN(15," Notification Action "),sg();}n&2&&(Vp(5),Dw("ngModel",o.type),tw("p-options",o.typeOptions),r0(),Vp(),Dw("ngModel",o.orientation),tw("p-options",o.orientationOptions),r0(),Vp(),Dw("ngModel",o.message),r0(),Vp(),Dw("ngModel",o.duration),r0(),Vp(),Dw("ngModel",o.action),r0(),Vp(),Dw("ngModel",o.actionLabel),r0(),Vp(),Dw("ngModel",o.sizeActions),tw("p-options",o.sizeActionsOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,O3,Nhe,Sde,k3,Yo],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Notification Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-notification-labs"),sg(),Gl(23,"hr")),n&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,we,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,he],encapsulation:2})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(l){this.poNotification=l;}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields();}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label;}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue();}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0;}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n;}totalValue(){this.totalPrice=this.quantity*this.price;}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales"]],standalone:false,features:[we$1([Yp])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let c=Cx();Tl(0,"form",null,0)(2,"div",1)(3,"po-combo",2),Ew("ngModelChange",function(r){return Ky(c),rN(o.product,r)||(o.product=r),Xy(r)}),ht("p-change",function(){return o.checkProduct()}),sg(),t0(),Tl(4,"po-number",3),Ew("ngModelChange",function(r){return Ky(c),rN(o.quantity,r)||(o.quantity=r),Xy(r)}),ht("p-change",function(){return o.checkQuantity()}),sg(),t0(),Tl(5,"po-number",4),Ew("ngModelChange",function(r){return Ky(c),rN(o.price,r)||(o.price=r),Xy(r)}),sg(),t0(),Tl(6,"po-number",5),Ew("ngModelChange",function(r){return Ky(c),rN(o.stock,r)||(o.stock=r),Xy(r)}),sg(),t0(),Tl(7,"po-number",6),Ew("ngModelChange",function(r){return Ky(c),rN(o.totalPrice,r)||(o.totalPrice=r),Xy(r)}),sg(),t0(),sg(),Tl(8,"div",1)(9,"po-button",7),ht("p-click",function(){return o.addCart()}),sg()()(),Gl(10,"po-divider")(11,"po-table",8),Tl(12,"div",1)(13,"div",9)(14,"span",10),tN(15),_N(16,"currency"),sg()()();}if(n&2){let c=Ox(1);Vp(3),Dw("ngModel",o.product),tw("p-options",o.productOptions),r0(),Vp(),Dw("ngModel",o.quantity),tw("p-max",o.stock),r0(),Vp(),Dw("ngModel",o.price),r0(),Vp(),Dw("ngModel",o.stock),r0(),Vp(),Dw("ngModel",o.totalPrice),r0(),Vp(2),tw("p-disabled",c.form.invalid||o.stock===0),Vp(2),tw("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",false),Vp(4),fg("Total: R",EN(16,12,o.totalPriceSum)," ");}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,g3,Nhe,E3,HO],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Notification - Sales"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form #f="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-notification-sales"),sg(),Gl(23,"hr")),n&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ke,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ge],encapsulation:2})}return a})();var Se=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-doc"]],standalone:false,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),tN(6,"Services"),sg(),Tl(7,"h4",4)(8,"code",5),tN(9,"PoNotificationService"),sg()(),Tl(10,"div",2)(11,"p"),tN(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),sg(),Tl(13,"ul")(14,"li"),tN(15,"success,"),sg(),Tl(16,"li"),tN(17,"warning,"),sg(),Tl(18,"li"),tN(19,"error,"),sg(),Tl(20,"li"),tN(21,"information."),sg()(),Tl(22,"p"),tN(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),Tl(24,"code"),tN(25,"PoNotification"),sg(),tN(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),sg(),Tl(27,"p"),tN(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),sg(),Tl(29,"p"),tN(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),Tl(31,"code"),tN(32,"erro"),sg(),tN(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),sg(),Tl(34,"p"),tN(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),sg()(),Tl(36,"h3",6),tN(37,"M\xE9todos"),sg(),Tl(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),tN(44," success "),sg()()()()(),Tl(45,"tr",12)(46,"td",12)(47,"p"),tN(48,"Emite uma notifica\xE7\xE3o de sucesso."),sg()()()(),Tl(49,"h5")(50,"b"),tN(51,"Par\xE2metros"),sg()(),Tl(52,"table",13)(53,"tr",14)(54,"th",15),tN(55,"Nome"),sg(),Tl(56,"th",15),tN(57,"Tipo"),sg(),Tl(58,"th",15),tN(59,"Descri\xE7\xE3o"),sg()(),Tl(60,"tr",8)(61,"td",16),tN(62," notification"),sg(),Tl(63,"td",17)(64,"code",18),tN(65," PoNotification "),sg(),Tl(66,"code",19),tN(67," string "),sg()(),Tl(68,"td",12)(69,"p"),tN(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),sg()()()(),Gl(71,"br"),Tl(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),tN(78," warning "),sg()()()()(),Tl(79,"tr",12)(80,"td",12)(81,"p"),tN(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),sg()()()(),Tl(83,"h5")(84,"b"),tN(85,"Par\xE2metros"),sg()(),Tl(86,"table",13)(87,"tr",14)(88,"th",15),tN(89,"Nome"),sg(),Tl(90,"th",15),tN(91,"Tipo"),sg(),Tl(92,"th",15),tN(93,"Descri\xE7\xE3o"),sg()(),Tl(94,"tr",8)(95,"td",16),tN(96," notification"),sg(),Tl(97,"td",17)(98,"code",18),tN(99," PoNotification "),sg(),Tl(100,"code",19),tN(101," string "),sg()(),Tl(102,"td",12)(103,"p"),tN(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),sg()()()(),Gl(105,"br"),Tl(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),tN(112," error "),sg()()()()(),Tl(113,"tr",12)(114,"td",12)(115,"p"),tN(116,"Emite uma notifica\xE7\xE3o de erro."),sg()()()(),Tl(117,"h5")(118,"b"),tN(119,"Par\xE2metros"),sg()(),Tl(120,"table",13)(121,"tr",14)(122,"th",15),tN(123,"Nome"),sg(),Tl(124,"th",15),tN(125,"Tipo"),sg(),Tl(126,"th",15),tN(127,"Descri\xE7\xE3o"),sg()(),Tl(128,"tr",8)(129,"td",16),tN(130," notification"),sg(),Tl(131,"td",17)(132,"code",18),tN(133," PoNotification "),sg(),Tl(134,"code",19),tN(135," string "),sg()(),Tl(136,"td",12)(137,"p"),tN(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),sg()()()(),Gl(139,"br"),Tl(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),tN(146," information "),sg()()()()(),Tl(147,"tr",12)(148,"td",12)(149,"p"),tN(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),sg()()()(),Tl(151,"h5")(152,"b"),tN(153,"Par\xE2metros"),sg()(),Tl(154,"table",13)(155,"tr",14)(156,"th",15),tN(157,"Nome"),sg(),Tl(158,"th",15),tN(159,"Tipo"),sg(),Tl(160,"th",15),tN(161,"Descri\xE7\xE3o"),sg()(),Tl(162,"tr",8)(163,"td",16),tN(164," notification"),sg(),Tl(165,"td",17)(166,"code",18),tN(167," PoNotification "),sg(),Tl(168,"code",19),tN(169," string "),sg()(),Tl(170,"td",12)(171,"p"),tN(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),sg()()()(),Gl(173,"br"),Tl(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),tN(180," setDefaultDuration "),sg()()()()(),Tl(181,"tr",12)(182,"td",12)(183,"p"),tN(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),sg(),Tl(185,"blockquote")(186,"p"),tN(187,"Padr\xE3o 9 segundos."),sg()()()()(),Tl(188,"h5")(189,"b"),tN(190,"Par\xE2metros"),sg()(),Tl(191,"table",13)(192,"tr",14)(193,"th",15),tN(194,"Nome"),sg(),Tl(195,"th",15),tN(196,"Tipo"),sg(),Tl(197,"th",15),tN(198,"Descri\xE7\xE3o"),sg()(),Tl(199,"tr",8)(200,"td",16),tN(201," defaultDuration"),sg(),Tl(202,"td",17)(203,"code",20),tN(204," number "),sg()(),Tl(205,"td",12)(206,"p"),tN(207,"Dura\xE7\xE3o em milisegundos"),sg()()()(),Gl(208,"br"),Tl(209,"h3"),tN(210,"Interfaces"),sg(),Tl(211,"h4",21)(212,"code",5),tN(213,"PoNotification"),sg()(),Tl(214,"div",2)(215,"p"),tN(216,"Interface para uso do servi\xE7o PoNotification."),sg()(),Tl(217,"h4",6),tN(218,"Propriedades"),sg(),Tl(219,"table",13)(220,"tr",14)(221,"th",15),tN(222,"Nome"),sg(),Tl(223,"th",15),tN(224,"Tipo"),sg(),Tl(225,"th",15),tN(226,"Descri\xE7\xE3o"),sg()(),Tl(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),tN(231," action"),Gl(232,"br"),sg()()(),Tl(233,"td",17)(234,"code",22),tN(235,"Function"),sg()(),Tl(236,"td",12)(237,"em")(238,"strong"),tN(239,"(opcional)"),sg()(),Tl(240,"p"),tN(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),sg(),Tl(242,"p"),tN(243,"Ao utilizar esta propriedade em conjunto com a "),Tl(244,"code"),tN(245,"actionLabel"),sg(),tN(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),sg(),Tl(247,"p"),tN(248,"Caso n\xE3o informar a propriedade "),Tl(249,"code"),tN(250,"actionLabel"),sg(),tN(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),sg()()(),Tl(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),tN(256," actionLabel"),Gl(257,"br"),sg()()(),Tl(258,"td",17)(259,"code",19),tN(260,"string"),sg()(),Tl(261,"td",12)(262,"em")(263,"strong"),tN(264,"(opcional)"),sg()(),Tl(265,"p"),tN(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),sg()()(),Tl(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),tN(271," duration"),Gl(272,"br"),sg()()(),Tl(273,"td",17)(274,"code",23),tN(275,"number"),sg()(),Tl(276,"td",12)(277,"em")(278,"strong"),tN(279,"(opcional)"),sg()(),Tl(280,"p"),tN(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),sg(),Tl(282,"blockquote")(283,"p"),tN(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),Tl(285,"code"),tN(286,"erro"),sg(),tN(287,", a propriedade ser\xE1 ignorada."),sg()()()(),Tl(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),tN(292," message"),Gl(293,"br"),sg()()(),Tl(294,"td",17)(295,"code",19),tN(296,"string"),sg()(),Tl(297,"td",12)(298,"p"),tN(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),sg()()(),Tl(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),tN(304," mode"),Gl(305,"br"),sg()()(),Tl(306,"td",17)(307,"code",24),tN(308,"PoToasterMode"),sg()(),Tl(309,"td",12)(310,"em")(311,"strong"),tN(312,"(opcional)"),sg()(),Tl(313,"p"),tN(314,"Define o Modo/Tipo do Toaster."),sg()()(),Tl(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),tN(319," orientation"),Gl(320,"br"),sg()()(),Tl(321,"td",17)(322,"code",25),tN(323,"PoToasterOrientation"),sg()(),Tl(324,"td",12)(325,"em")(326,"strong"),tN(327,"(opcional)"),sg()(),Tl(328,"p"),tN(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),Tl(330,"code"),tN(331,"Top"),sg(),tN(332," (topo) ou "),Tl(333,"code"),tN(334,"Bottom"),sg(),tN(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),Tl(336,"code"),tN(337,"bottom"),sg(),tN(338,"."),sg()()(),Tl(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),tN(343," showClose"),Gl(344,"br"),sg()()(),Tl(345,"td",17)(346,"code",26),tN(347,"boolean"),sg()(),Tl(348,"td",12)(349,"em")(350,"strong"),tN(351,"(opcional)"),sg()(),Tl(352,"p"),tN(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),sg(),Tl(354,"blockquote")(355,"p"),tN(356,"Caso a notifica\xE7\xE3o seja do modo "),Tl(357,"code"),tN(358,"default"),sg(),tN(359,", a propriedade ser\xE1 ignorada."),sg()()()(),Tl(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),tN(364," sizeActions"),Gl(365,"br"),sg()()(),Tl(366,"td",17)(367,"code",19),tN(368,"string"),sg()(),Tl(369,"td",12)(370,"em")(371,"strong"),tN(372,"(opcional)"),sg()(),Tl(373,"p"),tN(374,"Define o tamanho das a\xE7\xF5es:"),sg(),Tl(375,"ul")(376,"li")(377,"code"),tN(378,"small"),sg(),tN(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(380,"li")(381,"code"),tN(382,"medium"),sg(),tN(383,": aplica a medida medium de cada a\xE7\xE3o."),sg()(),Tl(384,"blockquote")(385,"p"),tN(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(387,"code"),tN(388,"medium"),sg(),tN(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(390,"a",27),tN(391,"po-theme"),sg(),tN(392,"."),sg()()()(),Tl(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),tN(397," supportMessage"),Gl(398,"br"),sg()()(),Tl(399,"td",17)(400,"code",19),tN(401,"string"),sg()(),Tl(402,"td",12)(403,"em")(404,"strong"),tN(405,"(opcional)"),sg()(),Tl(406,"p"),tN(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),sg()()()()());},encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-notification-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),sg()()()),n&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,fe,be,Ee,Se],encapsulation:2})}return a})();var Oe=[{path:"",component:Ce}],ye=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Oe),vL]})}return a})();var at=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,ye]})}return a})();export{at as DocPoNotificationModule};