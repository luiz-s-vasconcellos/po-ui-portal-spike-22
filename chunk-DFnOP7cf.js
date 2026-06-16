import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aE as Bp,aS as Vd,c6 as WB,J as wl,N as Ul,R as ng,a$ as fO,ag as fP,aT as Rd,z as Ux,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,ae as iY,af as ck,aK as Pe$1,aL as di,aM as lT,bB as ga,al as lx,av as nx,c9 as ex,am as pw,an as $0,aX as _x,ay as rx,ap as hw,aq as G0,as as $l,at as uo,au as fo,aF as aY,aG as oY,aH as ok,b9 as Ro,aO as Yo,ai as ya,bC as Vp,bR as Qn,ab as J,a3 as D3,aU as IR,ca as bO,az as Qy,ax as gx,aA as Jy,a4 as oN,cb as Wx,a6 as cN,bq as qx,F as uw,aB as $x}from'./main-6SPFG3VI.js';var ye=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(i,o){i&1&&(wl(0,"po-context-tabs"),Ul(1,"po-tab",0)(2,"po-tab",1),ng());},dependencies:[Vd,WB],encapsulation:2,changeDetection:1})}return l})();var Le=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context Tabs Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-context-tabs-basic"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return l})();var Re=["poTab"];function He(l,O){if(l&1){let a=lx();wl(0,"po-tab",9),ut("p-click",function(){let o=Qy(a).$implicit,d=gx();return Jy(d.onClick(o))})("p-close-tab",function(){let o=Qy(a).$implicit,d=gx();return Jy(d.onClose(o))}),wl(1,"div",10),Ux(2),ng()();}if(l&2){let a=O.$implicit,i=O.$index;YE("p-active",a.active)("p-disabled",a.disabled)("p-hide",a.hide)("p-hide-close",a.hideClose)("p-label",a.label),Pp(2),cg("Tab Content ",i);}}var Pe=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:4},{property:"click",gridColumns:4},{property:"closeTab",label:"Close Tab",gridColumns:4},{property:"active",type:"boolean",gridColumns:3},{property:"disabled",type:"boolean",gridColumns:3},{property:"hide",type:"boolean",gridColumns:3},{property:"hideClose",label:"Hide Close",type:"boolean",gridColumns:3}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(a){let i=Object.assign({},a);i.click=i.click?this.showClick.bind(this,i.click):void 0,i.closeTab=i.closeTab?this.dispachClose.bind(this,i.closeTab):void 0,this.tabs.push(i),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(a){a.click&&a.click();}onClose(a){a.closeTab&&a.closeTab();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(a){this.poNotification.success(`Action clicked: ${a}`);}dispachClose(a){this.poNotification.success(`Action closed: ${a}`);}static \u0275fac=function(i){return new(i||l)(C(Bp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs"]],viewQuery:function(i,o){if(i&1&&$l(Re,7),i&2){let d;uo(d=fo())&&(o.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-hide-close","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-close-tab","p-active","p-disabled","p-hide","p-hide-close","p-label"],[1,"po-font-subtitle"]],template:function(i,o){if(i&1){let d=lx();wl(0,"po-context-tabs",2,0),nx(2,He,3,6,"po-tab",3,ex),ng(),Ul(4,"po-dynamic-form",4,1),wl(6,"div",5)(7,"po-button",6),ut("p-click",function(){Qy(d);let r=_x(5);return o.addTab(r.form.value),Jy(r.form.reset())}),ng()(),Ul(8,"po-divider"),wl(9,"po-radio-group",7),pw("ngModelChange",function(r){return Qy(d),$x(o.size,r)||(o.size=r),Jy(r)}),ng(),$0(),wl(10,"div",5)(11,"po-button",8),ut("p-click",function(){return o.restore()}),ng()();}if(i&2){let d=_x(5);YE("p-size",o.size),Pp(2),rx(o.tabs),Pp(2),YE("p-fields",o.tabsFieldsForm)("p-value",o.tabs),Pp(3),YE("p-disabled",d.form.invalid),Pp(2),hw("ngModel",o.size),YE("p-options",o.sizeOptions),G0();}},dependencies:[iY,ck,Pe$1,di,lT,ga,Vd,WB],encapsulation:2,changeDetection:1})}return l})();var Qe=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context Tabs Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-context-tabs #poTab [p-size]="size">
  @for (tab of tabs; track $index; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-hide-close]="tab.hideClose"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
      (p-close-tab)="onClose(tab)"
    >
      <div class="po-font-subtitle">Tab Content { { i }}</div>
    </po-tab>
  }
</po-context-tabs>

<po-dynamic-form #tabsForm [p-fields]="tabsFieldsForm" [p-value]="tabs"> </po-dynamic-form>

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Tab"
    [p-disabled]="tabsForm.form.invalid"
    (p-click)="addTab(tabsForm.form.value); tabsForm.form.reset()"
  >
  </po-button>
</div>

<po-divider></po-divider>

<po-radio-group
  class="po-md-12"
  name="size"
  [(ngModel)]="size"
  p-columns="4"
  p-label="Size"
  p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
  [p-options]="sizeOptions"
>
</po-radio-group>

<div class="po-row">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoContextTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-labs',
  templateUrl: './sample-po-context-tabs-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsLabsComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 4 },
    { property: 'click', gridColumns: 4 },
    { property: 'closeTab', label: 'Close Tab', gridColumns: 4 },
    { property: 'active', type: 'boolean', gridColumns: 3 },
    { property: 'disabled', type: 'boolean', gridColumns: 3 },
    { property: 'hide', type: 'boolean', gridColumns: 3 },
    { property: 'hideClose', label: 'Hide Close', type: 'boolean', gridColumns: 3 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
    newTab.closeTab = newTab.closeTab ? this.dispachClose.bind(this, newTab.closeTab) : undefined;
    this.tabs.push(newTab);
    if (this.tabs.length <= 4) {
      this.poTab.setQuantityTabsButton(this.tabs.length);
    } else if (this.tabs.length > 4) {
      this.poTab.setQuantityTabsButton(4);
    }
  }

  onClick(tab: PoTab) {
    if (tab.click) {
      tab.click();
    }
  }

  onClose(tab: PoTab) {
    if (tab.closeTab) {
      tab.closeTab();
    }
  }

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  private dispachClose(action: string): any {
    this.poNotification.success(\`Action closed: \${action}\`);
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-context-tabs-labs"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Qe,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Pe],encapsulation:2})}return l})();var Me=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(a){this.poNotificationService=a;}bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(a,i,o){return a.valid&&this.transportation==="flight"&&o.valid||a.valid&&this.transportation==="train"&&i.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(i){return new(i||l)(C(Bp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel"]],standalone:false,decls:47,vars:30,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide","p-hide-close"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide","p-hide-close"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled","p-hide-close"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet",3,"p-hide-close"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,o){if(i&1){let d=lx();wl(0,"po-context-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),pw("ngModelChange",function(r){return Qy(d),$x(o.origin,r)||(o.origin=r),Jy(r)}),ng(),$0(),ng(),wl(6,"div",5)(7,"po-input",7),pw("ngModelChange",function(r){return Qy(d),$x(o.destination,r)||(o.destination=r),Jy(r)}),ng(),$0(),ng(),wl(8,"div",5)(9,"po-datepicker",8),pw("ngModelChange",function(r){return Qy(d),$x(o.departDate,r)||(o.departDate=r),Jy(r)}),ng(),$0(),wl(10,"po-datepicker",9),pw("ngModelChange",function(r){return Qy(d),$x(o.returnDate,r)||(o.returnDate=r),Jy(r)}),ng(),$0(),ng(),wl(11,"div",5)(12,"po-radio-group",10),pw("ngModelChange",function(r){return Qy(d),$x(o.transportation,r)||(o.transportation=r),Jy(r)}),ng(),$0(),ng()()(),wl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),pw("ngModelChange",function(r){return Qy(d),$x(o.trainCompany,r)||(o.trainCompany=r),Jy(r)}),ng(),$0(),ng(),wl(18,"div",5)(19,"po-select",13),pw("ngModelChange",function(r){return Qy(d),$x(o.classTrain,r)||(o.classTrain=r),Jy(r)}),ng(),$0(),ng()()(),wl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),pw("ngModelChange",function(r){return Qy(d),$x(o.flightCompany,r)||(o.flightCompany=r),Jy(r)}),ng(),$0(),ng(),wl(25,"div",5)(26,"po-select",16),pw("ngModelChange",function(r){return Qy(d),$x(o.classFlight,r)||(o.classFlight=r),Jy(r)}),ng(),$0(),ng()()(),wl(27,"po-tab",17)(28,"div",5),Ul(29,"po-info",18),ng(),wl(30,"po-context-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),pw("ngModelChange",function(r){return Qy(d),$x(o.cardName,r)||(o.cardName=r),Jy(r)}),ng(),$0(),ng(),wl(36,"div",5)(37,"po-input",21),pw("ngModelChange",function(r){return Qy(d),$x(o.card,r)||(o.card=r),Jy(r)}),ng(),$0(),ng(),wl(38,"div",5)(39,"po-input",22),pw("ngModelChange",function(r){return Qy(d),$x(o.expiryMonth,r)||(o.expiryMonth=r),Jy(r)}),ng(),$0(),wl(40,"po-input",23),pw("ngModelChange",function(r){return Qy(d),$x(o.expiryYear,r)||(o.expiryYear=r),Jy(r)}),ng(),$0(),wl(41,"po-input",24),pw("ngModelChange",function(r){return Qy(d),$x(o.cvv,r)||(o.cvv=r),Jy(r)}),ng(),$0(),ng(),wl(42,"div",5)(43,"po-button",25),ut("p-click",function(){return o.payment()}),ng()()()(),wl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),ut("p-click",function(){return o.bankBillet()}),ng()()()()()();}if(i&2){let d=_x(3),C=_x(15),r=_x(22),Ne=_x(33);Pp(5),hw("ngModel",o.origin),G0(),Pp(2),hw("ngModel",o.destination),G0(),Pp(2),hw("ngModel",o.departDate),G0(),Pp(),hw("ngModel",o.returnDate),YE("p-min-date",o.departDate),G0(),Pp(2),hw("ngModel",o.transportation),YE("p-options",o.transportationOptions),G0(),Pp(),YE("p-hide",o.transportation!=="train")("p-hide-close",true),Pp(4),hw("ngModel",o.trainCompany),YE("p-options",o.trainCompanyOptions),G0(),Pp(2),hw("ngModel",o.classTrain),YE("p-options",o.classTrainOptions),G0(),Pp(),YE("p-hide",o.transportation!=="flight")("p-hide-close",true),Pp(4),hw("ngModel",o.flightCompany),YE("p-options",o.flightCompanyOptions),G0(),Pp(2),hw("ngModel",o.classFlight),YE("p-options",o.classFlightOptions),G0(),Pp(),YE("p-disabled",o.isPaymentEnable(d,C,r)===false)("p-hide-close",true),Pp(2),YE("p-value",o.getTotalCost()),Pp(6),hw("ngModel",o.cardName),G0(),Pp(2),hw("ngModel",o.card),G0(),Pp(2),hw("ngModel",o.expiryMonth),G0(),Pp(),hw("ngModel",o.expiryYear),G0(),Pp(),hw("ngModel",o.cvv),G0(),Pp(2),YE("p-disabled",!Ne.form.valid||!o.totalCost),Pp(),YE("p-hide-close",true),Pp(2),YE("p-disabled",!o.totalCost);}},dependencies:[aY,iY,oY,ck,ok,Pe$1,Ro,Yo,ga,ya,Vp,Vd,WB],encapsulation:2,changeDetection:1})}return l})();var Je=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context Tabs - Travel"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-context-tabs>
  <po-tab p-active p-label="Destination">
    <form #formTravel="ngForm">
      <div class="po-row">
        <po-input class="po-lg-12" name="origin" [(ngModel)]="origin" p-label="Origin" p-required> </po-input>
      </div>

      <div class="po-row">
        <po-input class="po-lg-12" name="destination" [(ngModel)]="destination" p-label="Destination" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-datepicker class="po-md-6" name="departDate" [(ngModel)]="departDate" p-label="Depart" p-required>
        </po-datepicker>

        <po-datepicker
          class="po-md-6"
          name="returnDate"
          [(ngModel)]="returnDate"
          p-label="Return"
          p-required
          [p-min-date]="departDate"
        >
        </po-datepicker>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="transportation"
          [(ngModel)]="transportation"
          p-label="Transportation"
          p-required
          [p-options]="transportationOptions"
        >
        </po-radio-group>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'" [p-hide-close]="true">
    <form #formTrain="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="trainCompany"
          [(ngModel)]="trainCompany"
          p-label="Tran Company"
          p-required
          [p-options]="trainCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classTrain"
          [(ngModel)]="classTrain"
          p-label="Class"
          p-required
          [p-options]="classTrainOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'" [p-hide-close]="true">
    <form #formFlight="ngForm">
      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="flightCompany"
          [(ngModel)]="flightCompany"
          p-label="Flight Company"
          p-required
          [p-options]="flightCompanyOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-select
          class="po-lg-12"
          name="classFlight"
          [(ngModel)]="classFlight"
          p-label="Class"
          p-required
          [p-options]="classFlightOptions"
        >
        </po-select>
      </div>
    </form>
  </po-tab>
  <po-tab
    p-label="Payment"
    [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false"
    [p-hide-close]="true"
  >
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-context-tabs>
      <po-tab p-active p-label="Credit Card">
        <form #formCreditCard="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name on Card"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-8 po-lg-6"
              name="card"
              [(ngModel)]="card"
              p-clean
              p-label="Card Number"
              p-mask="9999 9999 9999 9999"
              p-required
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-input
              class="po-md-2"
              name="expiryMonth"
              [(ngModel)]="expiryMonth"
              p-clean
              p-label="Expiry Month"
              p-mask="19"
              p-required
            >
            </po-input>

            <po-input
              class="po-md-2"
              name="expiryYear"
              [(ngModel)]="expiryYear"
              p-clean
              p-label="Year"
              p-mask="2999"
              p-required
            >
            </po-input>

            <po-input class="po-md-2" name="cvv" [(ngModel)]="cvv" p-clean p-label="CVV" p-mask="9999" p-required>
            </po-input>
          </div>

          <div class="po-row">
            <po-button
              class="po-md-3"
              p-label="Pay now"
              [p-disabled]="!formCreditCard.form.valid || !totalCost"
              (p-click)="payment()"
            >
            </po-button>
          </div>
        </form>
      </po-tab>

      <po-tab p-label="Bank Billet" [p-hide-close]="true">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-context-tabs>
  </po-tab>
</po-context-tabs>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-travel',
  templateUrl: './sample-po-context-tabs-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsTravelComponent {
  card: number;
  cardName: string;
  classFlight: number;
  classTrain: number;
  cvv: number;
  departDate: Date;
  destination: string;
  expiryMonth: number;
  expiryYear: number;
  flightCompany: string;
  origin: string;
  returnDate: Date;
  totalCost: number;
  trainCompany: string;
  transportation: string;

  public readonly classFlightOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Business', value: 2 },
    { label: 'Comfort', value: 3 },
    { label: 'First Class', value: 4 }
  ];

  public readonly classTrainOptions: Array<PoSelectOption> = [
    { label: 'Economy', value: 1 },
    { label: 'Cabin', value: 2 },
    { label: 'First Class', value: 3 }
  ];

  public readonly flightCompanyOptions: Array<PoSelectOption> = [
    { label: 'American Airlines', value: 'american' },
    { label: 'Avianca', value: 'avianca' },
    { label: 'Delta Airlines', value: 'delta' },
    { label: 'Emirates', value: 'emirates' },
    { label: 'Latam', value: 'latam' }
  ];

  public readonly trainCompanyOptions: Array<PoSelectOption> = [
    { label: 'EuroStar', value: 'eurostar' },
    { label: 'OBB', value: 'obb' },
    { label: 'Renfe', value: 'renfe' },
    { label: 'TrenItalia', value: 'trenitalia' }
  ];

  public readonly transportationOptions: Array<PoRadioGroupOption> = [
    { label: 'Flights', value: 'flight' },
    { label: 'Trains', value: 'train' }
  ];

  constructor(private poNotificationService: PoNotificationService) {}

  bankBillet() {
    this.poNotificationService.warning('Bank billet sent to email');
  }

  isPaymentEnable(formTravel, formTrain, formFlight) {
    return (
      (formTravel.valid && this.transportation === 'flight' && formFlight.valid) ||
      (formTravel.valid && this.transportation === 'train' && formTrain.valid)
    );
  }

  getTotalCost() {
    if (this.transportation === 'flight' && this.classFlight) {
      this.totalCost = 800 * this.classFlight;
      return \`$\${this.totalCost}\`;
    }

    if (this.transportation === 'train' && this.classTrain) {
      this.totalCost = 300 * this.classTrain;
      return \`$\${this.totalCost}\`;
    }

    this.totalCost = undefined;
    return 'Fields are missing';
  }

  payment() {
    this.poNotificationService.success('Order confirmed');
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-context-tabs-travel"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Je,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Me],encapsulation:2})}return l})();var Xe=["poTab"],$e=(l,O)=>O.id;function et(l,O){if(l&1){let a=lx();wl(0,"po-tab",2),oN(1,"date"),wl(2,"div",7)(3,"div",5)(4,"div",4)(5,"div",8)(6,"po-widget")(7,"div",4)(8,"div",9),Ul(9,"po-avatar",10),ng(),wl(10,"div",11)(11,"div",12),Ul(12,"po-info",13),ng(),wl(13,"div",12),Ul(14,"po-info",14),ng(),wl(15,"div",12),Ul(16,"po-info",15),ng()()()()(),wl(17,"div",16)(18,"po-widget",17)(19,"div",18),Ux(20,"TFace Conference Week"),ng(),wl(21,"div",19),Ux(22,"From 21th September until 26th setember 2018"),ng(),Ul(23,"hr"),wl(24,"div",4)(25,"div",20)(26,"span",21),Ul(27,"po-icon",22),ng(),wl(28,"span",23),Ux(29),oN(30,"date"),ng()(),wl(31,"div",20)(32,"span",21),Ul(33,"po-icon",24),ng(),wl(34,"span",25),Ux(35,"Av. Braz Leme, 1000, Santana"),ng()()(),wl(36,"div",26)(37,"po-button",27),ut("p-click",function(){let o=Qy(a).$implicit,d=gx();return Jy(d.confirmSubscription(o))}),ng()()()()()()()();}if(l&2){let a=O.$implicit;YE("p-label",Wx(cN(1,10,a.createdDate,"MMM d")))("p-active",a.id==="1")("p-hide",a.subscribe),Pp(9),YE("p-src",qx("assets/graphics/",a.photo)),Pp(3),YE("p-value",a.name),Pp(2),YE("p-value",a.email),Pp(2),YE("p-value",a.description),Pp(13),uw(cN(30,13,a.createdDate,"MM/dd/yyyy"));}}var Be=(()=>{class l{poNotification;poTab;disableRestoreBtn=true;speakers;pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(a=>a.subscribe=false);}confirmSubscription(a){this.disableRestoreBtn=false,a.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(i){return new(i||l)(C(Bp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf"]],viewQuery:function(i,o){if(i&1&&$l(Xe,7),i&2){let d;uo(d=fo())&&(o.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(i,o){i&1&&(wl(0,"po-page-default",1)(1,"po-context-tabs",null,0),nx(3,et,38,16,"po-tab",2,$e),ng(),Ul(5,"hr",3),wl(6,"div",4)(7,"div",5)(8,"div",4)(9,"po-button",6),ut("p-click",function(){return o.cancelSubscription()}),ng()()()()()),i&2&&(Pp(3),rx(o.speakers),Pp(6),YE("p-disabled",o.disableRestoreBtn));},dependencies:[Qn,Pe$1,J,Vp,D3,Vd,WB,IR,bO],encapsulation:2,changeDetection:1})}return l})();var nt=l=>({"docs-sample-code-tabs":l}),Fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Context Tabs - Business Conference"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Check the speaker's list">
  <po-context-tabs #poTab>
    @for (speaker of speakers; track speaker.id) {
      <po-tab
        p-label="{ { speaker.createdDate | date: 'MMM d' }}"
        [p-active]="speaker.id === '1'"
        [p-hide]="speaker.subscribe"
      >
        <div class="po-row po-mt-5">
          <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
            <div class="po-row">
              <div class="po-lg-8 po-mb-2">
                <po-widget>
                  <div class="po-row">
                    <div class="po-md-5 po-lg-4">
                      <po-avatar p-size="xl" p-src="assets/graphics/{ { speaker.photo }}"></po-avatar>
                    </div>
                    <div class="po-md-7 po-lg-8">
                      <div class="po-mb-2">
                        <po-info p-label="Speaker" [p-value]="speaker.name"></po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mt-5" p-label="Email" [p-value]="speaker.email"> </po-info>
                      </div>
                      <div class="po-mb-2">
                        <po-info class="po-mb-5" p-label="Description" [p-value]="speaker.description"> </po-info>
                      </div>
                    </div>
                  </div>
                </po-widget>
              </div>

              <div class="po-lg-4 po-mb-2">
                <po-widget p-title="Subscription">
                  <div class="po-font-subtitle po-mb-2">TFace Conference Week</div>
                  <div class="po-font-text-bold po-mb-5">From 21th September until 26th setember 2018</div>
                  <hr />
                  <div class="po-row">
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-calendar-dots"></po-icon>
                      </span>
                      <span class="po-font-text po-mb-2">{ { speaker.createdDate | date: 'MM/dd/yyyy' }}</span>
                    </div>
                    <div class="po-md-6 po-lg-12">
                      <span class="po-mr-1 po-font-subtitle">
                        <po-icon p-icon="po-icon an an-map-pin"></po-icon>
                      </span>
                      <span class="po-font-text">Av. Braz Leme, 1000, Santana</span>
                    </div>
                  </div>
                  <div class="po-mt-5">
                    <po-button class="po-mt-5" p-label="Subscription" (p-click)="confirmSubscription(speaker)">
                    </po-button>
                  </div>
                </po-widget>
              </div>
            </div>
          </div>
        </div>
      </po-tab>
    }
  </po-context-tabs>

  <hr class="po-offset-lg-1 po-offset-xl-1 po-lg-10 po-mt-0" />

  <div class="po-row">
    <div class="po-offset-lg-1 po-offset-xl-1 po-lg-10">
      <div class="po-row">
        <po-button
          class="po-offset-lg-8 po-offset-xl-8 po-lg-4"
          p-label="Cancel Subscription"
          [p-disabled]="disableRestoreBtn"
          (p-click)="cancelSubscription()"
        >
        </po-button>
      </div>
    </div>
  </div>
</po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoContextTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-tabs-business-conf',
  templateUrl: './sample-po-context-tabs-business-conf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBusinessConfComponent implements OnInit {
  @ViewChild('poTab', { static: true }) poTab: PoContextTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {
    this.speakers = this.getSpeakers();
    this.pageWidth = window.innerWidth;
    if (this.pageWidth <= 600) {
      this.poTab.setQuantityTabsButton(3);
    }
  }

  cancelSubscription() {
    this.disableRestoreBtn = true;
    this.speakers.forEach(item => (item.subscribe = false));
  }

  confirmSubscription(speaker) {
    this.disableRestoreBtn = false;

    speaker.subscribe = true;

    this.poNotification.success('Registration completed successfully. See you soon!');
  }

  private getSpeakers() {
    return [
      {
        'id': '1',
        'name': 'Peter Benjamin Parker',
        'email': 'peter.parker@po-ui.com.br',
        'photo': 'avatar1.png',
        'description': 'Nodejs developer with 4 years experience',
        'createdDate': '2018-09-21T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '2',
        'name': 'Natasha Romanova',
        'email': 'natasha.romanova@po-ui.com.br',
        'photo': 'avatar2.png',
        'description': 'Angular developer with 2 years experience',
        'createdDate': '2018-09-22T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '3',
        'name': 'Anthony Stark',
        'email': 'anthony.stark@po-ui.com.br',
        'photo': 'avatar3.png',
        'description': 'Javascript developer with 8 years experience',
        'createdDate': '2018-09-23T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '4',
        'name': 'Carol Danvers',
        'email': 'carol.danvers@po-ui.com.br',
        'photo': 'avatar4.png',
        'description': 'Full stack developer with 2 years experience',
        'createdDate': '2018-09-24T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '5',
        'name': 'Wagner Dantas',
        'email': 'wagner.dantas@po-ui.com.br',
        'photo': 'avatar5.png',
        'description': 'Front-end Engineer developer with 8 years experience',
        'createdDate': '2018-09-25T20:21:06.990Z',
        'subscribe': 'false'
      },
      {
        'id': '6',
        'name': 'Kaiam Alexandre',
        'email': 'kaiam.alexandre@po-ui.com.br',
        'photo': 'avatar6.png',
        'description': 'Javascript developer with 12 years experience',
        'createdDate': '2018-09-26T20:21:06.990Z',
        'subscribe': 'false'
      }
    ];
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-context-tabs-business-conf"),ng(),Ul(23,"hr")),i&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,nt,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Be],encapsulation:2})}return l})();var Ve=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(i,o){i&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoContextTabsModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-context-tabs"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoContextTabsComponent"),ng()(),wl(12,"div",2)(13,"h4"),Ux(14,"Tokens customiz\xE1veis"),ng(),wl(15,"p"),Ux(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(17,"blockquote")(18,"p"),Ux(19,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(20,"a",6),Ux(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(22,"."),ng()(),wl(23,"table")(24,"thead")(25,"tr")(26,"th"),Ux(27,"Propriedade"),ng(),wl(28,"th"),Ux(29,"Descri\xE7\xE3o"),ng(),wl(30,"th"),Ux(31,"Valor Padr\xE3o"),ng()()(),wl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),Ux(36,"Default Values"),ng()(),Ul(37,"td")(38,"td"),ng(),wl(39,"tr")(40,"td")(41,"code"),Ux(42,"--background"),ng()(),wl(43,"td"),Ux(44,"Cor de background"),ng(),wl(45,"td")(46,"code"),Ux(47,"var(--color-transparent)"),ng()()(),wl(48,"tr")(49,"td")(50,"code"),Ux(51,"--background-item-default"),ng()(),wl(52,"td"),Ux(53,"Cor de background do item padr\xE3o"),ng(),wl(54,"td")(55,"code"),Ux(56,"var(--color-transparent)"),ng()()(),wl(57,"tr")(58,"td")(59,"code"),Ux(60,"--border-radius"),ng()(),wl(61,"td"),Ux(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(63,"td")(64,"code"),Ux(65,"var(--border-radius-md)"),ng()()(),wl(66,"tr")(67,"td")(68,"code"),Ux(69,"--color"),ng()(),wl(70,"td"),Ux(71,"Cor da fonte padr\xE3o"),ng(),wl(72,"td")(73,"code"),Ux(74,"var(--color-action-default)"),ng()()(),wl(75,"tr")(76,"td")(77,"code"),Ux(78,"--color-baseline"),ng()(),wl(79,"td"),Ux(80,"Cor para box-shadow"),ng(),wl(81,"td")(82,"code"),Ux(83,"var(--color-neutral-light-20)"),ng()()(),wl(84,"tr")(85,"td")(86,"code"),Ux(87,"--font-family"),ng()(),wl(88,"td"),Ux(89,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(90,"td")(91,"code"),Ux(92,"var(--font-family-theme)"),ng()()(),wl(93,"tr")(94,"td")(95,"code"),Ux(96,"--font-size"),ng()(),wl(97,"td"),Ux(98,"Tamanho da fonte"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--font-size-default)"),ng()()(),wl(102,"tr")(103,"td")(104,"code"),Ux(105,"--font-weight"),ng()(),wl(106,"td"),Ux(107,"Peso da fonte"),ng(),wl(108,"td")(109,"code"),Ux(110,"var(--font-weight-bold)"),ng()()(),wl(111,"tr")(112,"td")(113,"code"),Ux(114,"--margin-tabs-container-left"),ng()(),wl(115,"td"),Ux(116,"Margem lateral esquerda do componente quando usado dentro de um "),wl(117,"code"),Ux(118,"page-default"),ng()(),wl(119,"td")(120,"code"),Ux(121,"var(--spacing-md)"),ng()()(),wl(122,"tr")(123,"td")(124,"code"),Ux(125,"--margin-tabs-container-right"),ng()(),wl(126,"td"),Ux(127,"Margem lateral direita do componente quando usado dentro de um "),wl(128,"code"),Ux(129,"page-default"),ng()(),wl(130,"td")(131,"code"),Ux(132,"-16px"),ng()()(),wl(133,"tr")(134,"td")(135,"code"),Ux(136,"--padding-tabs-header"),ng()(),wl(137,"td"),Ux(138,"Padding do valor lateral das abas"),ng(),wl(139,"td")(140,"code"),Ux(141,"var(--spacing-sm)"),ng()()(),wl(142,"tr")(143,"td")(144,"code"),Ux(145,"--margin-tabs-first-child"),ng()(),wl(146,"td"),Ux(147,"Margem lateral da primeira aba"),ng(),wl(148,"td")(149,"code"),Ux(150,"var(--spacing-md)"),ng()()(),wl(151,"tr")(152,"td")(153,"code"),Ux(154,"--margin-tabs-last-child"),ng()(),wl(155,"td"),Ux(156,"Margem lateral da ultima aba"),ng(),wl(157,"td")(158,"code"),Ux(159,"var(--spacing-md)"),ng()()(),wl(160,"tr")(161,"td")(162,"strong"),Ux(163,"Disabled"),ng()(),Ul(164,"td")(165,"td"),ng(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--color-disabled"),ng()(),wl(170,"td"),Ux(171,"Cor da fonte no estado disabilitado"),ng(),wl(172,"td")(173,"code"),Ux(174,"var(--color-action-disabled)"),ng()()(),wl(175,"tr")(176,"td")(177,"code"),Ux(178,"--background-item-disabled"),ng(),Ux(179,"\xA0"),ng(),wl(180,"td"),Ux(181,"Cor de background do item desabilitado"),ng(),wl(182,"td")(183,"code"),Ux(184,"var(--color-neutral-light-10)"),ng()()(),wl(185,"tr")(186,"td")(187,"strong"),Ux(188,"Focused"),ng()(),Ul(189,"td")(190,"td"),ng(),wl(191,"tr")(192,"td")(193,"code"),Ux(194,"--outline-color-focused"),ng()(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Hover"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-hover"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado hover"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-brand-01-darkest)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-item-hover"),ng()(),wl(219,"td"),Ux(220,"Cor de background no estado de hover"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-brand-01-lightest)"),ng()()(),wl(224,"tr")(225,"td")(226,"strong"),Ux(227,"Selected"),ng()(),Ul(228,"td")(229,"td"),ng(),wl(230,"tr")(231,"td")(232,"code"),Ux(233,"--background-item-selected"),ng()(),wl(234,"td"),Ux(235,"Cor de background do item selecionado"),ng(),wl(236,"td")(237,"code"),Ux(238,"var(--color-brand-01-lightest)"),ng()()()()(),wl(239,"p"),Ul(240,"br"),Ux(241," O componente "),wl(242,"code"),Ux(243,"po-context-tabs"),ng(),Ux(244," \xE9 respons\xE1vel por agrupar "),wl(245,"a",7),Ux(246,"abas"),ng(),Ux(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),ng(),wl(248,"p"),Ux(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),ng(),wl(250,"blockquote")(251,"p"),Ux(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),ng()(),wl(253,"p"),Ux(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),ng(),wl(255,"h4"),Ux(256,"Boas pr\xE1ticas"),ng(),wl(257,"ul")(258,"li"),Ux(259,"Evite utilizar um "),wl(260,"code"),Ux(261,"po-context-tabs"),ng(),Ux(262," dentro de outro "),wl(263,"code"),Ux(264,"po-context-tabs"),ng(),Ux(265,";"),ng(),wl(266,"li"),Ux(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),wl(268,"em"),Ux(269,"scroll"),ng(),Ux(270," muito longo no "),wl(271,"code"),Ux(272,"dropdown"),ng(),Ux(273,";"),ng(),wl(274,"li"),Ux(275,"Evite "),wl(276,"code"),Ux(277,"labels"),ng(),Ux(278," extensos para as "),wl(279,"code"),Ux(280,"tabs"),ng(),Ux(281," pois podem quebrar seu "),wl(282,"em"),Ux(283,"layout"),ng(),Ux(284,", use "),wl(285,"code"),Ux(286,"labels"),ng(),Ux(287," diretas, curtas e intuitivas."),ng()()(),wl(288,"div",8)(289,"h4",9),Ux(290,"Seletor"),ng(),wl(291,"pre",10),Ux(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),ng()(),wl(293,"h4",11),Ux(294,"Propriedades"),ng(),wl(295,"table",12)(296,"tr",13)(297,"th",14),Ux(298,"Nome"),ng(),wl(299,"th",14),Ux(300,"Tipo"),ng(),wl(301,"th",14),Ux(302,"Padr\xE3o"),ng(),wl(303,"th",14),Ux(304,"Descri\xE7\xE3o"),ng()(),wl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),Ux(309," p-size"),Ul(310,"br"),ng()()(),wl(311,"td",19)(312,"code",20),Ux(313,"string"),ng()(),wl(314,"td",21)(315,"p")(316,"code"),Ux(317,"medium"),ng()()(),wl(318,"td",22)(319,"em")(320,"strong"),Ux(321,"(opcional)"),ng()(),wl(322,"p"),Ux(323,"Define o tamanho do componente:"),ng(),wl(324,"ul")(325,"li")(326,"code"),Ux(327,"small"),ng(),Ux(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(329,"li")(330,"code"),Ux(331,"medium"),ng(),Ux(332,": altura dos tabs como 44px."),ng()(),wl(333,"blockquote")(334,"p"),Ux(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(336,"code"),Ux(337,"medium"),ng(),Ux(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(339,"a",23),Ux(340,"po-theme"),ng(),Ux(341,"."),ng()()()()(),wl(342,"h3",11),Ux(343,"M\xE9todos"),ng(),wl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),Ux(350," setQuantityTabsButton "),ng()()()()(),wl(351,"tr",22)(352,"td",22)(353,"p"),Ux(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),ng(),wl(355,"p"),Ux(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(357,"pre")(358,"code"),Ux(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),ng()()()()(),Ul(360,"br"),ng());},dependencies:[fP],encapsulation:2})}return l})();var We=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Context Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-context-tabs-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-context-tabs-basic-view")(6,"sample-po-context-tabs-labs-view")(7,"sample-po-context-tabs-travel-view")(8,"sample-po-context-tabs-business-conf-view"),ng()()()),i&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,Ee,ke,De,Fe,Ve],encapsulation:2})}return l})();var at=[{path:"",component:We}],Oe=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild(at),vL]})}return l})();var It=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[u5,Oe]})}return l})();export{It as DocPoContextTabsModule};