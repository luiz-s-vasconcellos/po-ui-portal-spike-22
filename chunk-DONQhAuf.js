import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,aW as Yp,aV as Ur,dI as Xn$1,b0 as Qt,T as Tl,a1 as ht,M as sg,an as AO,aH as Ga,b8 as Wme,b9 as jme,L as Gl,C as iN,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b1 as mv,b4 as O3,cp as Hhe,c8 as Dde,bH as M3,b6 as Yo,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,Y as we$1,av as Yl,aw as uo,ax as fo,bC as g3,b7 as E3,dF as WO,a4 as wN,bd as Fx,a5 as bN,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var de=(()=>{class a{poNotification;constructor(l){this.poNotification=l;}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","Open Notification",3,"p-click"]],template:function(n,o){n&1&&(Tl(0,"po-button",0),ht("p-click",function(){return o.poNotification.success("PO Notification!")}),sg());},dependencies:[Qt],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Notification Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-notification-basic/sample-po-notification-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-button p-label="Open Notification" (p-click)="poNotification.success('PO Notification!')"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-notification-basic/sample-po-notification-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-notification-basic"),sg(),Gl(23,"hr")),n&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ve,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{poNotification;poModal;action;actionLabel;message;orientation;sizeActions;type;duration;orientationOptions=[{label:"Top",value:Ur.Top},{label:"Bottom",value:Ur.Bottom}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Success",value:Xn$1.Success},{label:"Error",value:Xn$1.Error},{label:"Warning",value:Xn$1.Warning},{label:"Information",value:Xn$1.Information}];constructor(l){this.poNotification=l;}ngOnInit(){this.restore();}restore(){this.message="PO Notification",this.type=void 0,this.orientation=void 0,this.action=false,this.actionLabel="",this.duration=void 0,this.sizeActions="medium";}showNotification(){let l={message:this.message,orientation:this.orientation,action:void 0,actionLabel:this.actionLabel,duration:this.duration,sizeActions:this.sizeActions};switch(this.action&&(l.action=()=>this.poModal.open()),this.type){case Xn$1.Success:{this.poNotification.success(l);break}case Xn$1.Error:{this.poNotification.error(l);break}case Xn$1.Warning:{this.poNotification.warning(l);break}case Xn$1.Information:{this.poNotification.information(l);break}default:{this.poNotification.success(l);break}}}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs"]],viewQuery:function(n,o){if(n&1&&Yl(Yo,7),n&2){let c;uo(c=fo())&&(o.poModal=c.first);}},standalone:false,features:[we$1([Yp])],decls:16,vars:10,consts:[["f","ngForm"],["p-label","Open Notification",3,"p-click"],[1,"po-row"],["name","type","p-columns","4","p-label","Type",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","orientation","p-label","Orientation",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","message","p-clean","","p-label","Message","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","duration","p-clean","","p-label","Duration",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","action","p-label","Action",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","actionLabel","p-clean","","p-label","Action Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-title","PO Notification"]],template:function(n,o){if(n&1){let c=Sx();Tl(0,"po-button",1),ht("p-click",function(){return o.showNotification()}),sg(),Gl(1,"po-divider"),Tl(2,"div",2)(3,"form",null,0)(5,"po-radio-group",3),ww("ngModelChange",function(r){return Ky(c),sN(o.type,r)||(o.type=r),Xy(r)}),sg(),r0(),Tl(6,"po-radio-group",4),ww("ngModelChange",function(r){return Ky(c),sN(o.orientation,r)||(o.orientation=r),Xy(r)}),sg(),r0(),Tl(7,"po-input",5),ww("ngModelChange",function(r){return Ky(c),sN(o.message,r)||(o.message=r),Xy(r)}),sg(),r0(),Tl(8,"po-number",6),ww("ngModelChange",function(r){return Ky(c),sN(o.duration,r)||(o.duration=r),Xy(r)}),sg(),r0(),Tl(9,"po-switch",7),ww("ngModelChange",function(r){return Ky(c),sN(o.action,r)||(o.action=r),Xy(r)}),sg(),r0(),Tl(10,"po-input",8),ww("ngModelChange",function(r){return Ky(c),sN(o.actionLabel,r)||(o.actionLabel=r),Xy(r)}),sg(),r0(),Tl(11,"po-radio-group",9),ww("ngModelChange",function(r){return Ky(c),sN(o.sizeActions,r)||(o.sizeActions=r),Xy(r)}),sg(),r0(),Tl(12,"div",2)(13,"po-button",10),ht("p-click",function(){return o.restore()}),sg()()()(),Tl(14,"po-modal",11),iN(15," Notification Action "),sg();}n&2&&(Vp(5),Ew("ngModel",o.type),nw("p-options",o.typeOptions),o0(),Vp(),Ew("ngModel",o.orientation),nw("p-options",o.orientationOptions),o0(),Vp(),Ew("ngModel",o.message),o0(),Vp(),Ew("ngModel",o.duration),o0(),Vp(),Ew("ngModel",o.action),o0(),Vp(),Ew("ngModel",o.actionLabel),o0(),Vp(),Ew("ngModel",o.sizeActions),nw("p-options",o.sizeActionsOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,O3,Hhe,Dde,M3,Yo],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Notification Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-notification-labs/sample-po-notification-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-button (p-click)="showNotification()" p-label="Open Notification"> </po-button>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-notification-labs/sample-po-notification-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-notification-labs"),sg(),Gl(23,"hr")),n&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,he],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification;name;price;product;quantity;stock;totalPrice;totalPriceSum=2500;columns=[{property:"productID",label:"Id"},{property:"productName",label:"Product"},{property:"quantity",label:"Quantity"},{property:"price",label:"Price",type:"currency",format:"BRL"},{property:"total",label:"Total Price",type:"currency",format:"BRL"}];products=[{productID:"004",productName:"Notebook",quantity:2,price:1250,total:2500}];productDetailsList=[{id:"001",price:50,stock:10},{id:"002",price:210,stock:5},{id:"003",price:998,stock:2},{id:"004",price:1250,stock:1}];productOptions=[{value:"001",label:"p-Shirt Blue"},{value:"002",label:"Clock"},{value:"003",label:"Cellphone"},{value:"004",label:"Notebook"}];constructor(l){this.poNotification=l;}addCart(){if(this.checkQuantity(),this.productOptions&&this.quantity>0){let l=this.products.findIndex(n=>n.productID===this.product);l>=0?(this.products[l].quantity+=this.quantity,this.products[l].total+=this.totalPrice):this.products.push({productID:this.product,productName:this.name,quantity:this.quantity,price:this.price,total:this.totalPrice}),this.totalPriceSum+=this.totalPrice,this.poNotification.success("Order included successfully!"),this.stockUpdate(this.product,this.quantity),this.clearFields();}}checkProduct(){let l=this.productDetailsList.findIndex(n=>n.id===this.product);if(l>=0){let n=this.productDetailsList[l];this.price=n.price,this.stock=n.stock,this.name=this.productOptions[l].label;}}checkQuantity(){this.quantity>this.stock?this.poNotification.error("Quantity not available in stock"):this.totalValue();}clearFields(){this.product="",this.price=0,this.quantity=0,this.stock=0,this.totalPrice=0;}stockUpdate(l,n){let o=this.productDetailsList.find(c=>c.id===l);o.stock=o.stock-n;}totalValue(){this.totalPrice=this.quantity*this.price;}static \u0275fac=function(n){return new(n||a)(w(Yp))};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales"]],standalone:false,features:[we$1([Yp])],decls:17,vars:14,consts:[["f","ngForm"],[1,"po-row"],["name","product","p-label","Product","p-placeholder","Select a Product","p-required","",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","quantity","p-label","Quantity","p-min","0","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-max"],["name","price","p-disabled","","p-label","Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","stock","p-disabled","","p-label","Stock","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","totalPrice","p-disabled","","p-label","Total Price","p-placeholder","0","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Add To Cart",1,"po-md-3",3,"p-click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],[1,"po-pull-right","po-lg-12"],[1,"po-pull-right","po-font-subtitle"]],template:function(n,o){if(n&1){let c=Sx();Tl(0,"form",null,0)(2,"div",1)(3,"po-combo",2),ww("ngModelChange",function(r){return Ky(c),sN(o.product,r)||(o.product=r),Xy(r)}),ht("p-change",function(){return o.checkProduct()}),sg(),r0(),Tl(4,"po-number",3),ww("ngModelChange",function(r){return Ky(c),sN(o.quantity,r)||(o.quantity=r),Xy(r)}),ht("p-change",function(){return o.checkQuantity()}),sg(),r0(),Tl(5,"po-number",4),ww("ngModelChange",function(r){return Ky(c),sN(o.price,r)||(o.price=r),Xy(r)}),sg(),r0(),Tl(6,"po-number",5),ww("ngModelChange",function(r){return Ky(c),sN(o.stock,r)||(o.stock=r),Xy(r)}),sg(),r0(),Tl(7,"po-number",6),ww("ngModelChange",function(r){return Ky(c),sN(o.totalPrice,r)||(o.totalPrice=r),Xy(r)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-button",7),ht("p-click",function(){return o.addCart()}),sg()()(),Gl(10,"po-divider")(11,"po-table",8),Tl(12,"div",1)(13,"div",9)(14,"span",10),iN(15),wN(16,"currency"),sg()()();}if(n&2){let c=Fx(1);Vp(3),Ew("ngModel",o.product),nw("p-options",o.productOptions),o0(),Vp(),Ew("ngModel",o.quantity),nw("p-max",o.stock),o0(),Vp(),Ew("ngModel",o.price),o0(),Vp(),Ew("ngModel",o.stock),o0(),Vp(),Ew("ngModel",o.totalPrice),o0(),Vp(2),nw("p-disabled",c.form.invalid||o.stock===0),Vp(2),nw("p-columns",o.columns)("p-items",o.products)("p-hide-table-search",false),Vp(4),fg("Total: R",bN(16,12,o.totalPriceSum)," ");}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,g3,Hhe,E3,WO],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-sales-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(n,o){n&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Notification - Sales"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-notification-sales/sample-po-notification-sales.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #f="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-notification-sales/sample-po-notification-sales.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-notification-sales"),sg(),Gl(23,"hr")),n&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ke,o.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ge],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-notification-doc"]],standalone:false,decls:408,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoNotification"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToasterMode"],["pan","",1,"docs-api-property-type","PoToasterOrientation"],["pan","",1,"docs-api-property-type","boolean"],["href","https://po-ui.io/documentation/po-theme"]],template:function(n,o){n&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoNotificationModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),iN(6,"Services"),sg(),Tl(7,"h4",4)(8,"code",5),iN(9,"PoNotificationService"),sg()(),Tl(10,"div",2)(11,"p"),iN(12,"Servi\xE7o respons\xE1vel por emitir as notifica\xE7\xF5es em uma p\xE1gina. S\xE3o disponibilizados os m\xE9todos de:"),sg(),Tl(13,"ul")(14,"li"),iN(15,"success,"),sg(),Tl(16,"li"),iN(17,"warning,"),sg(),Tl(18,"li"),iN(19,"error,"),sg(),Tl(20,"li"),iN(21,"information."),sg()(),Tl(22,"p"),iN(23,"Cada um destes m\xE9todos recebe como par\xE2metro o objeto "),Tl(24,"code"),iN(25,"PoNotification"),sg(),iN(26,` que cont\xE9m os dados da mensagem e o
objeto ViewContainerRef que \xE9 a representa\xE7\xE3o do container do componente onde ser\xE1 criada a notifica\xE7\xE3o.`),sg(),Tl(27,"p"),iN(28,`Estas notifica\xE7\xF5es ser\xE3o exibidas durante 9 segundos por padr\xE3o, podendo ser alterada conforme necessidade.
Ap\xF3s este tempo a mesma \xE9 removida automaticamente.`),sg(),Tl(29,"p"),iN(30,"Notifica\xE7\xF5es com a\xE7\xE3o ou notifica\xE7\xF5es de "),Tl(31,"code"),iN(32,"erro"),sg(),iN(33," permanecer\xE3o em tela at\xE9 o usu\xE1rio fecha-l\xE1 ou clicar na a\xE7\xE3o."),sg(),Tl(34,"p"),iN(35,"O servi\xE7o possui um limite de at\xE9 5 notifica\xE7\xF5es por vez, a partir do sexto a primeira notifica\xE7\xE3o ser\xE1 removida dando lugar a nova. "),sg()(),Tl(36,"h3",6),iN(37,"M\xE9todos"),sg(),Tl(38,"table",7)(39,"tr",8)(40,"th",9)(41,"div",10)(42,"h4")(43,"span",11),iN(44," success "),sg()()()()(),Tl(45,"tr",12)(46,"td",12)(47,"p"),iN(48,"Emite uma notifica\xE7\xE3o de sucesso."),sg()()()(),Tl(49,"h5")(50,"b"),iN(51,"Par\xE2metros"),sg()(),Tl(52,"table",13)(53,"tr",14)(54,"th",15),iN(55,"Nome"),sg(),Tl(56,"th",15),iN(57,"Tipo"),sg(),Tl(58,"th",15),iN(59,"Descri\xE7\xE3o"),sg()(),Tl(60,"tr",8)(61,"td",16),iN(62," notification"),sg(),Tl(63,"td",17)(64,"code",18),iN(65," PoNotification "),sg(),Tl(66,"code",19),iN(67," string "),sg()(),Tl(68,"td",12)(69,"p"),iN(70,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o."),sg()()()(),Gl(71,"br"),Tl(72,"table",7)(73,"tr",8)(74,"th",9)(75,"div",10)(76,"h4")(77,"span",11),iN(78," warning "),sg()()()()(),Tl(79,"tr",12)(80,"td",12)(81,"p"),iN(82,"Emite uma notifica\xE7\xE3o de aten\xE7\xE3o."),sg()()()(),Tl(83,"h5")(84,"b"),iN(85,"Par\xE2metros"),sg()(),Tl(86,"table",13)(87,"tr",14)(88,"th",15),iN(89,"Nome"),sg(),Tl(90,"th",15),iN(91,"Tipo"),sg(),Tl(92,"th",15),iN(93,"Descri\xE7\xE3o"),sg()(),Tl(94,"tr",8)(95,"td",16),iN(96," notification"),sg(),Tl(97,"td",17)(98,"code",18),iN(99," PoNotification "),sg(),Tl(100,"code",19),iN(101," string "),sg()(),Tl(102,"td",12)(103,"p"),iN(104,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),sg()()()(),Gl(105,"br"),Tl(106,"table",7)(107,"tr",8)(108,"th",9)(109,"div",10)(110,"h4")(111,"span",11),iN(112," error "),sg()()()()(),Tl(113,"tr",12)(114,"td",12)(115,"p"),iN(116,"Emite uma notifica\xE7\xE3o de erro."),sg()()()(),Tl(117,"h5")(118,"b"),iN(119,"Par\xE2metros"),sg()(),Tl(120,"table",13)(121,"tr",14)(122,"th",15),iN(123,"Nome"),sg(),Tl(124,"th",15),iN(125,"Tipo"),sg(),Tl(126,"th",15),iN(127,"Descri\xE7\xE3o"),sg()(),Tl(128,"tr",8)(129,"td",16),iN(130," notification"),sg(),Tl(131,"td",17)(132,"code",18),iN(133," PoNotification "),sg(),Tl(134,"code",19),iN(135," string "),sg()(),Tl(136,"td",12)(137,"p"),iN(138,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),sg()()()(),Gl(139,"br"),Tl(140,"table",7)(141,"tr",8)(142,"th",9)(143,"div",10)(144,"h4")(145,"span",11),iN(146," information "),sg()()()()(),Tl(147,"tr",12)(148,"td",12)(149,"p"),iN(150,"Emite uma notifica\xE7\xE3o de informa\xE7\xE3o."),sg()()()(),Tl(151,"h5")(152,"b"),iN(153,"Par\xE2metros"),sg()(),Tl(154,"table",13)(155,"tr",14)(156,"th",15),iN(157,"Nome"),sg(),Tl(158,"th",15),iN(159,"Tipo"),sg(),Tl(160,"th",15),iN(161,"Descri\xE7\xE3o"),sg()(),Tl(162,"tr",8)(163,"td",16),iN(164," notification"),sg(),Tl(165,"td",17)(166,"code",18),iN(167," PoNotification "),sg(),Tl(168,"code",19),iN(169," string "),sg()(),Tl(170,"td",12)(171,"p"),iN(172,"Objeto com os dados da notifica\xE7\xE3o ou somente a string com a mensagem da notifica\xE7\xE3o"),sg()()()(),Gl(173,"br"),Tl(174,"table",7)(175,"tr",8)(176,"th",9)(177,"div",10)(178,"h4")(179,"span",11),iN(180," setDefaultDuration "),sg()()()()(),Tl(181,"tr",12)(182,"td",12)(183,"p"),iN(184,"Define em milissegundos a dura\xE7\xE3o padr\xE3o para as notifica\xE7\xF5es."),sg(),Tl(185,"blockquote")(186,"p"),iN(187,"Padr\xE3o 9 segundos."),sg()()()()(),Tl(188,"h5")(189,"b"),iN(190,"Par\xE2metros"),sg()(),Tl(191,"table",13)(192,"tr",14)(193,"th",15),iN(194,"Nome"),sg(),Tl(195,"th",15),iN(196,"Tipo"),sg(),Tl(197,"th",15),iN(198,"Descri\xE7\xE3o"),sg()(),Tl(199,"tr",8)(200,"td",16),iN(201," defaultDuration"),sg(),Tl(202,"td",17)(203,"code",20),iN(204," number "),sg()(),Tl(205,"td",12)(206,"p"),iN(207,"Dura\xE7\xE3o em milisegundos"),sg()()()(),Gl(208,"br"),Tl(209,"h3"),iN(210,"Interfaces"),sg(),Tl(211,"h4",21)(212,"code",5),iN(213,"PoNotification"),sg()(),Tl(214,"div",2)(215,"p"),iN(216,"Interface para uso do servi\xE7o PoNotification."),sg()(),Tl(217,"h4",6),iN(218,"Propriedades"),sg(),Tl(219,"table",13)(220,"tr",14)(221,"th",15),iN(222,"Nome"),sg(),Tl(223,"th",15),iN(224,"Tipo"),sg(),Tl(225,"th",15),iN(226,"Descri\xE7\xE3o"),sg()(),Tl(227,"tr",8)(228,"td",16)(229,"div",10)(230,"span",11),iN(231," action"),Gl(232,"br"),sg()()(),Tl(233,"td",17)(234,"code",22),iN(235,"Function"),sg()(),Tl(236,"td",12)(237,"em")(238,"strong"),iN(239,"(opcional)"),sg()(),Tl(240,"p"),iN(241,"A\xE7\xE3o para a notifica\xE7\xE3o."),sg(),Tl(242,"p"),iN(243,"Ao utilizar esta propriedade em conjunto com a "),Tl(244,"code"),iN(245,"actionLabel"),sg(),iN(246,`,
a notifica\xE7\xE3o ficar\xE1 fixa na p\xE1gina at\xE9 usu\xE1rio fech\xE1-la ou clicar nesta a\xE7\xE3o.`),sg(),Tl(247,"p"),iN(248,"Caso n\xE3o informar a propriedade "),Tl(249,"code"),iN(250,"actionLabel"),sg(),iN(251,' a a\xE7\xE3o ser\xE1 atribuida ao \xEDcone de "Fechar" da notifica\xE7\xE3o.'),sg()()(),Tl(252,"tr",8)(253,"td",16)(254,"div",10)(255,"span",11),iN(256," actionLabel"),Gl(257,"br"),sg()()(),Tl(258,"td",17)(259,"code",19),iN(260,"string"),sg()(),Tl(261,"td",12)(262,"em")(263,"strong"),iN(264,"(opcional)"),sg()(),Tl(265,"p"),iN(266,"Label do bot\xE3o quando houver uma a\xE7\xE3o definida."),sg()()(),Tl(267,"tr",8)(268,"td",16)(269,"div",10)(270,"span",11),iN(271," duration"),Gl(272,"br"),sg()()(),Tl(273,"td",17)(274,"code",23),iN(275,"number"),sg()(),Tl(276,"td",12)(277,"em")(278,"strong"),iN(279,"(opcional)"),sg()(),Tl(280,"p"),iN(281,"Define em milissegundos o tempo de dura\xE7\xE3o que a notifica\xE7\xE3o ficar\xE1 dispon\xEDvel em tela. O padr\xE3o \xE9 9000 milissegundos."),sg(),Tl(282,"blockquote")(283,"p"),iN(284,"Caso a notifica\xE7\xE3o tenha uma a\xE7\xE3o ou seja uma notifica\xE7\xE3o de "),Tl(285,"code"),iN(286,"erro"),sg(),iN(287,", a propriedade ser\xE1 ignorada."),sg()()()(),Tl(288,"tr",8)(289,"td",16)(290,"div",10)(291,"span",11),iN(292," message"),Gl(293,"br"),sg()()(),Tl(294,"td",17)(295,"code",19),iN(296,"string"),sg()(),Tl(297,"td",12)(298,"p"),iN(299,"Mensagem a ser exibida na notifica\xE7\xE3o."),sg()()(),Tl(300,"tr",8)(301,"td",16)(302,"div",10)(303,"span",11),iN(304," mode"),Gl(305,"br"),sg()()(),Tl(306,"td",17)(307,"code",24),iN(308,"PoToasterMode"),sg()(),Tl(309,"td",12)(310,"em")(311,"strong"),iN(312,"(opcional)"),sg()(),Tl(313,"p"),iN(314,"Define o Modo/Tipo do Toaster."),sg()()(),Tl(315,"tr",8)(316,"td",16)(317,"div",10)(318,"span",11),iN(319," orientation"),Gl(320,"br"),sg()()(),Tl(321,"td",17)(322,"code",25),iN(323,"PoToasterOrientation"),sg()(),Tl(324,"td",12)(325,"em")(326,"strong"),iN(327,"(opcional)"),sg()(),Tl(328,"p"),iN(329,"Posi\xE7\xE3o da notifica\xE7\xE3o na p\xE1gina que pode ser "),Tl(330,"code"),iN(331,"Top"),sg(),iN(332," (topo) ou "),Tl(333,"code"),iN(334,"Bottom"),sg(),iN(335,"(rodap\xE9). A posi\xE7\xE3o padr\xE3o \xE9 "),Tl(336,"code"),iN(337,"bottom"),sg(),iN(338,"."),sg()()(),Tl(339,"tr",8)(340,"td",16)(341,"div",10)(342,"span",11),iN(343," showClose"),Gl(344,"br"),sg()()(),Tl(345,"td",17)(346,"code",26),iN(347,"boolean"),sg()(),Tl(348,"td",12)(349,"em")(350,"strong"),iN(351,"(opcional)"),sg()(),Tl(352,"p"),iN(353,"Exibe o bot\xE3o de fechar a notifica\xE7\xE3o."),sg(),Tl(354,"blockquote")(355,"p"),iN(356,"Caso a notifica\xE7\xE3o seja do modo "),Tl(357,"code"),iN(358,"default"),sg(),iN(359,", a propriedade ser\xE1 ignorada."),sg()()()(),Tl(360,"tr",8)(361,"td",16)(362,"div",10)(363,"span",11),iN(364," sizeActions"),Gl(365,"br"),sg()()(),Tl(366,"td",17)(367,"code",19),iN(368,"string"),sg()(),Tl(369,"td",12)(370,"em")(371,"strong"),iN(372,"(opcional)"),sg()(),Tl(373,"p"),iN(374,"Define o tamanho das a\xE7\xF5es:"),sg(),Tl(375,"ul")(376,"li")(377,"code"),iN(378,"small"),sg(),iN(379,": aplica a medida small de cada a\xE7\xE3o (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(380,"li")(381,"code"),iN(382,"medium"),sg(),iN(383,": aplica a medida medium de cada a\xE7\xE3o."),sg()(),Tl(384,"blockquote")(385,"p"),iN(386,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(387,"code"),iN(388,"medium"),sg(),iN(389,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(390,"a",27),iN(391,"po-theme"),sg(),iN(392,"."),sg()()()(),Tl(393,"tr",8)(394,"td",16)(395,"div",10)(396,"span",11),iN(397," supportMessage"),Gl(398,"br"),sg()()(),Tl(399,"td",17)(400,"code",19),iN(401,"string"),sg()(),Tl(402,"td",12)(403,"em")(404,"strong"),iN(405,"(opcional)"),sg()(),Tl(406,"p"),iN(407,"Mensagem de suporte a ser exibida na notifica\xE7\xE3o."),sg()()()()());},encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,n){this.route=l,this.router=n;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let n=l.view;this.activeTab=n||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(n){return new(n||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Notification",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(n,o){n&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-notification-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-notification-basic-view")(6,"sample-po-notification-labs-view")(7,"sample-po-notification-sales-view"),sg()()()),n&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[lNe,Wme,jme,fe,be,Ee,Se],encapsulation:2,changeDetection:1})}return a})();var Oe=[{path:"",component:Ce}],ye=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[DL.forChild(Oe),DL]})}return a})();var at=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,ye]})}return a})();export{at as DocPoNotificationModule};