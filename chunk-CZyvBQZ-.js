import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,b8 as Gme,b9 as Qme,H as Sl,M as Wl,O as sg,an as bO,aH as Ga,J as Jx,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aF as K9,aG as Dk,b0 as Qt,b1 as mv,b2 as eme,c8 as Pde,aB as Ex,aQ as px,aR as hx,aM as Ew,aN as JA,bd as xx,aS as gx,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,aX as J9,aY as X9,aZ as vk,bD as Ade,b4 as F3,aJ as Ghe,c9 as Qhe,cn as s3,ab as lt,a3 as pNe,ba as bNe,cG as FO,a4 as vN,cH as iN,a6 as DN,br as oN,A as vw,aD as Xy,aA as Tx,aE as Qy,aT as tN}from'./main-UTR4MKMU.js';var Te=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(o,i){o&1&&(Sl(0,"po-tabs"),Wl(1,"po-tab",0)(2,"po-tab",1),sg());},dependencies:[Gme,Qme],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tabs Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tabs-basic/sample-po-tabs-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Te],encapsulation:2})}return a})();var Ne=["poTab"];function Le(a,q){if(a&1){let r=Ex();Sl(0,"po-tab",9),ht("p-click",function(){let i=Xy(r).$implicit,d=Tx();return Qy(d.onClick(i))}),Sl(1,"div",10),Jx(2),sg()();}if(a&2){let r=q.$implicit,o=q.$index;tw("p-active",r.active)("p-disabled",r.disabled)("p-hide",r.hide)("p-label",r.label),Vp(2),fg("Tab Content ",o);}}var Ee=(()=>{class a{poNotification=f(Yp);poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(r){r.click&&r.click();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs"]],viewQuery:function(o,i){if(o&1&&ql(Ne,7),o&2){let d;lo(d=uo())&&(i.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(o,i){if(o&1){let d=Ex();Sl(0,"po-tabs",2,0),px(2,Le,3,5,"po-tab",3,hx),sg(),Wl(4,"po-dynamic-form",4,1),Sl(6,"div",5)(7,"po-button",6),ht("p-click",function(){Xy(d);let l=xx(5);return i.addTab(l.form.value),Qy(l.form.reset())}),sg()(),Wl(8,"po-divider"),Sl(9,"po-radio-group",7),Ew("ngModelChange",function(l){return Xy(d),tN(i.size,l)||(i.size=l),Qy(l)}),sg(),JA(),Sl(10,"div",5)(11,"po-button",8),ht("p-click",function(){return i.restore()}),sg()();}if(o&2){let d=xx(5);tw("p-size",i.size),Vp(2),gx(i.tabs),Vp(2),tw("p-fields",i.tabsFieldsForm)("p-value",i.tabs),Vp(3),tw("p-disabled",d.form.invalid),Vp(2),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0();}},dependencies:[K9,Dk,Qt,mv,eme,Pde,Gme,Qme],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tabs Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tabs #poTab [p-size]="size">
  @for (tab of tabs; track tab; let i = $index) {
    <po-tab
      [p-active]="tab.active"
      [p-disabled]="tab.disabled"
      [p-hide]="tab.hide"
      [p-label]="tab.label"
      (p-click)="onClick(tab)"
    >
      <div class="po-font-subtitle">Tab Content { { i }}</div>
    </po-tab>
  }
</po-tabs>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoNotificationService,
  PoRadioGroupOption,
  PoTab,
  PoTabsComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-labs',
  templateUrl: './sample-po-tabs-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  tabsFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', divider: 'TAB', required: true, gridColumns: 6 },
    { property: 'click', gridColumns: 6 },
    { property: 'active', type: 'boolean', gridColumns: 4 },
    { property: 'disabled', type: 'boolean', gridColumns: 4 },
    { property: 'hide', type: 'boolean', gridColumns: 4 }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  size: string = 'medium';
  tabs: Array<PoTab> = [];
  properties: Array<string> = [];
  pageWidth: number;

  ngOnInit() {
    this.restore();
    this.pageWidth = window.innerWidth;
  }

  addTab(tab: PoTab) {
    const newTab = Object.assign({}, tab);

    newTab.click = newTab.click ? this.showClick.bind(this, newTab.click) : undefined;
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

  restore() {
    this.size = 'medium';
    this.tabs = [];
    this.poTab.quantityTabsButton = 0;
  }

  private showClick(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-labs"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ze,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ee],encapsulation:2})}return a})();var _e=(()=>{class a{poNotificationService=f(Yp);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(r,o,i){return r.valid&&this.transportation==="flight"&&i.valid||r.valid&&this.transportation==="train"&&o.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel"]],standalone:false,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(o,i){if(o&1){let d=Ex();Sl(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),Ew("ngModelChange",function(l){return Xy(d),tN(i.origin,l)||(i.origin=l),Qy(l)}),sg(),JA(),sg(),Sl(6,"div",5)(7,"po-input",7),Ew("ngModelChange",function(l){return Xy(d),tN(i.destination,l)||(i.destination=l),Qy(l)}),sg(),JA(),sg(),Sl(8,"div",5)(9,"po-datepicker",8),Ew("ngModelChange",function(l){return Xy(d),tN(i.departDate,l)||(i.departDate=l),Qy(l)}),sg(),JA(),Sl(10,"po-datepicker",9),Ew("ngModelChange",function(l){return Xy(d),tN(i.returnDate,l)||(i.returnDate=l),Qy(l)}),sg(),JA(),sg(),Sl(11,"div",5)(12,"po-radio-group",10),Ew("ngModelChange",function(l){return Xy(d),tN(i.transportation,l)||(i.transportation=l),Qy(l)}),sg(),JA(),sg()()(),Sl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),Ew("ngModelChange",function(l){return Xy(d),tN(i.trainCompany,l)||(i.trainCompany=l),Qy(l)}),sg(),JA(),sg(),Sl(18,"div",5)(19,"po-select",13),Ew("ngModelChange",function(l){return Xy(d),tN(i.classTrain,l)||(i.classTrain=l),Qy(l)}),sg(),JA(),sg()()(),Sl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),Ew("ngModelChange",function(l){return Xy(d),tN(i.flightCompany,l)||(i.flightCompany=l),Qy(l)}),sg(),JA(),sg(),Sl(25,"div",5)(26,"po-select",16),Ew("ngModelChange",function(l){return Xy(d),tN(i.classFlight,l)||(i.classFlight=l),Qy(l)}),sg(),JA(),sg()()(),Sl(27,"po-tab",17)(28,"div",5),Wl(29,"po-info",18),sg(),Sl(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),Ew("ngModelChange",function(l){return Xy(d),tN(i.cardName,l)||(i.cardName=l),Qy(l)}),sg(),JA(),sg(),Sl(36,"div",5)(37,"po-input",21),Ew("ngModelChange",function(l){return Xy(d),tN(i.card,l)||(i.card=l),Qy(l)}),sg(),JA(),sg(),Sl(38,"div",5)(39,"po-input",22),Ew("ngModelChange",function(l){return Xy(d),tN(i.expiryMonth,l)||(i.expiryMonth=l),Qy(l)}),sg(),JA(),Sl(40,"po-input",23),Ew("ngModelChange",function(l){return Xy(d),tN(i.expiryYear,l)||(i.expiryYear=l),Qy(l)}),sg(),JA(),Sl(41,"po-input",24),Ew("ngModelChange",function(l){return Xy(d),tN(i.cvv,l)||(i.cvv=l),Qy(l)}),sg(),JA(),sg(),Sl(42,"div",5)(43,"po-button",25),ht("p-click",function(){return i.payment()}),sg()()()(),Sl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),ht("p-click",function(){return i.bankBillet()}),sg()()()()()();}if(o&2){let d=xx(3),g=xx(15),l=xx(22),Fe=xx(33);Vp(5),Dw("ngModel",i.origin),t0(),Vp(2),Dw("ngModel",i.destination),t0(),Vp(2),Dw("ngModel",i.departDate),t0(),Vp(),Dw("ngModel",i.returnDate),tw("p-min-date",i.departDate),t0(),Vp(2),Dw("ngModel",i.transportation),tw("p-options",i.transportationOptions),t0(),Vp(),tw("p-hide",i.transportation!=="train"),Vp(4),Dw("ngModel",i.trainCompany),tw("p-options",i.trainCompanyOptions),t0(),Vp(2),Dw("ngModel",i.classTrain),tw("p-options",i.classTrainOptions),t0(),Vp(),tw("p-hide",i.transportation!=="flight"),Vp(4),Dw("ngModel",i.flightCompany),tw("p-options",i.flightCompanyOptions),t0(),Vp(2),Dw("ngModel",i.classFlight),tw("p-options",i.classFlightOptions),t0(),Vp(),tw("p-disabled",i.isPaymentEnable(d,g,l)===false),Vp(2),tw("p-value",i.getTotalCost()),Vp(6),Dw("ngModel",i.cardName),t0(),Vp(2),Dw("ngModel",i.card),t0(),Vp(2),Dw("ngModel",i.expiryMonth),t0(),Vp(),Dw("ngModel",i.expiryYear),t0(),Vp(),Dw("ngModel",i.cvv),t0(),Vp(2),tw("p-disabled",!Fe.form.valid||!i.totalCost),Vp(3),tw("p-disabled",!i.totalCost);}},dependencies:[J9,K9,X9,Dk,vk,Qt,Ade,F3,Pde,Ghe,Qhe,Gme,Qme],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tabs - Travel"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-tabs>
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
  <po-tab p-label="Trains" [p-hide]="transportation !== 'train'">
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
  <po-tab p-label="Flights" [p-hide]="transportation !== 'flight'">
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
  <po-tab p-label="Payment" [p-disabled]="isPaymentEnable(formTravel, formTrain, formFlight) === false">
    <div class="po-row">
      <po-info class="po-md-6" p-label="Total Cost" [p-value]="getTotalCost()"> </po-info>
    </div>

    <po-tabs>
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

      <po-tab p-label="Bank Billet">
        <div class="po-row">
          <po-button class="po-md-4" p-label="Generate Bank Billet" [p-disabled]="!totalCost" (p-click)="bankBillet()">
          </po-button>
        </div>
      </po-tab>
    </po-tabs>
  </po-tab>
</po-tabs>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-travel',
  templateUrl: './sample-po-tabs-travel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsTravelComponent {
  private poNotificationService = inject(PoNotificationService);

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-travel"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,je,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,_e],encapsulation:2})}return a})();var Qe=["poTab"];function Ze(a,q){if(a&1){let r=Ex();Sl(0,"po-tab",2),vN(1,"date"),Sl(2,"div",6)(3,"div",4)(4,"div",3)(5,"div",7)(6,"po-widget")(7,"div",3)(8,"div",8),Wl(9,"po-avatar",9),sg(),Sl(10,"div",10)(11,"div",11),Wl(12,"po-info",12),sg(),Sl(13,"div",11),Wl(14,"po-info",13),sg(),Sl(15,"div",11),Wl(16,"po-info",14),sg()()()()(),Sl(17,"div",15)(18,"po-widget",16)(19,"div",17),Jx(20,"TFace Conference Week"),sg(),Sl(21,"div",18),Jx(22,"From 21th September until 26th setember 2018"),sg(),Wl(23,"po-divider"),Sl(24,"div",3)(25,"div",19)(26,"span",20),Wl(27,"po-icon",21),sg(),Sl(28,"span",22),Jx(29),vN(30,"date"),sg()(),Sl(31,"div",19)(32,"span",20),Wl(33,"po-icon",23),sg(),Sl(34,"span",24),Jx(35,"Av. Braz Leme, 1000, Santana"),sg()()(),Sl(36,"div",25)(37,"po-button",26),ht("p-click",function(){let i=Xy(r).$implicit,d=Tx();return Qy(d.confirmSubscription(i))}),sg()()()()()()()();}if(a&2){let r=q.$implicit;tw("p-label",iN(DN(1,10,r.createdDate,"MMM d")))("p-active",r.id==="1")("p-hide",r.subscribe),Vp(9),tw("p-src",oN("assets/graphics/",r.photo)),Vp(3),tw("p-value",r.name),Vp(2),tw("p-value",r.email),Vp(2),tw("p-value",r.description),Vp(13),vw(DN(30,13,r.createdDate,"MM/dd/yyyy"));}}var ke=(()=>{class a{poNotification=f(Yp);poTab;disableRestoreBtn=true;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(r=>r.subscribe=false);}confirmSubscription(r){this.disableRestoreBtn=false,r.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(o,i){if(o&1&&ql(Qe,7),o&2){let d;lo(d=uo())&&(i.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",1)(1,"po-tabs",null,0),px(3,Ze,38,16,"po-tab",2,hx),sg(),Wl(5,"po-divider"),Sl(6,"div",3)(7,"div",4)(8,"div",3)(9,"po-button",5),ht("p-click",function(){return i.cancelSubscription()}),sg()()()()()),o&2&&(Vp(3),gx(i.speakers),Vp(6),tw("p-disabled",i.disableRestoreBtn));},dependencies:[s3,Qt,mv,lt,Qhe,pNe,Gme,Qme,bNe,FO],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Tabs - Business Conference"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Check the speaker's list">
  <po-tabs #poTab>
    @for (speaker of speakers; track speaker) {
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
                  <po-divider />
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
  </po-tabs>

  <po-divider />

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoTabsComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tabs-business-conf',
  templateUrl: './sample-po-tabs-business-conf.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBusinessConfComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

  disableRestoreBtn: boolean = true;
  speakers: Array<any>;
  pageWidth: number;

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-tabs-business-conf"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ke],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-doc"]],standalone:false,decls:399,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTabsModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-tabs"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoTabsComponent"),sg()(),Sl(12,"div",2)(13,"h4"),Jx(14,"Tokens customiz\xE1veis"),sg(),Sl(15,"p"),Jx(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(17,"blockquote")(18,"p"),Jx(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(20,"a",6),Jx(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(22,"."),sg()(),Sl(23,"table")(24,"thead")(25,"tr")(26,"th"),Jx(27,"Propriedade"),sg(),Sl(28,"th"),Jx(29,"Descri\xE7\xE3o"),sg(),Sl(30,"th"),Jx(31,"Valor Padr\xE3o"),sg()()(),Sl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),Jx(36,"Default Values"),sg()(),Wl(37,"td")(38,"td"),sg(),Sl(39,"tr")(40,"td")(41,"code"),Jx(42,"--background"),sg()(),Sl(43,"td"),Jx(44,"Cor de background"),sg(),Sl(45,"td")(46,"code"),Jx(47,"var(--color-transparent)"),sg()()(),Sl(48,"tr")(49,"td")(50,"code"),Jx(51,"--background-item-default"),sg()(),Sl(52,"td"),Jx(53,"Cor de background do item padr\xE3o"),sg(),Sl(54,"td")(55,"code"),Jx(56,"var(--color-transparent)"),sg()()(),Sl(57,"tr")(58,"td")(59,"code"),Jx(60,"--border-radius"),sg()(),Sl(61,"td"),Jx(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(63,"td")(64,"code"),Jx(65,"var(--border-radius-md)"),sg()()(),Sl(66,"tr")(67,"td")(68,"code"),Jx(69,"--color"),sg()(),Sl(70,"td"),Jx(71,"Cor da fonte padr\xE3o"),sg(),Sl(72,"td")(73,"code"),Jx(74,"var(--color-action-default)"),sg()()(),Sl(75,"tr")(76,"td")(77,"code"),Jx(78,"--color-baseline"),sg()(),Sl(79,"td"),Jx(80,"Cor para box-shadow"),sg(),Sl(81,"td")(82,"code"),Jx(83,"var(--color-neutral-light-20)"),sg()()(),Sl(84,"tr")(85,"td")(86,"code"),Jx(87,"--font-family"),sg()(),Sl(88,"td"),Jx(89,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(90,"td")(91,"code"),Jx(92,"var(--font-family-theme)"),sg()()(),Sl(93,"tr")(94,"td")(95,"code"),Jx(96,"--font-size"),sg()(),Sl(97,"td"),Jx(98,"Tamanho da fonte"),sg(),Sl(99,"td")(100,"code"),Jx(101,"var(--font-size-default)"),sg()()(),Sl(102,"tr")(103,"td")(104,"code"),Jx(105,"--font-weight"),sg()(),Sl(106,"td"),Jx(107,"Peso da fonte"),sg(),Sl(108,"td")(109,"code"),Jx(110,"var(--font-weight-bold)"),sg()()(),Sl(111,"tr")(112,"td")(113,"code"),Jx(114,"--margin-tabs-container-left"),sg()(),Sl(115,"td"),Jx(116,"Margem lateral esquerda do componente quando usado dentro de um "),Sl(117,"code"),Jx(118,"page-default"),sg()(),Sl(119,"td")(120,"code"),Jx(121,"var(--spacing-md)"),sg()()(),Sl(122,"tr")(123,"td")(124,"code"),Jx(125,"--margin-tabs-container-right"),sg()(),Sl(126,"td"),Jx(127,"Margem lateral direita do componente quando usado dentro de um "),Sl(128,"code"),Jx(129,"page-default"),sg()(),Sl(130,"td")(131,"code"),Jx(132,"-16px"),sg()()(),Sl(133,"tr")(134,"td")(135,"code"),Jx(136,"--padding-tabs-header"),sg()(),Sl(137,"td"),Jx(138,"Padding do valor lateral das abas"),sg(),Sl(139,"td")(140,"code"),Jx(141,"var(--spacing-sm)"),sg()()(),Sl(142,"tr")(143,"td")(144,"code"),Jx(145,"--margin-tabs-first-child"),sg()(),Sl(146,"td"),Jx(147,"Margem lateral da primeira aba"),sg(),Sl(148,"td")(149,"code"),Jx(150,"var(--spacing-md)"),sg()()(),Sl(151,"tr")(152,"td")(153,"code"),Jx(154,"--margin-tabs-last-child"),sg()(),Sl(155,"td"),Jx(156,"Margem lateral da ultima aba"),sg(),Sl(157,"td")(158,"code"),Jx(159,"var(--spacing-md)"),sg()()(),Sl(160,"tr")(161,"td")(162,"strong"),Jx(163,"Disabled"),sg()(),Wl(164,"td")(165,"td"),sg(),Sl(166,"tr")(167,"td")(168,"code"),Jx(169,"--color-disabled"),sg()(),Sl(170,"td"),Jx(171,"Cor da fonte no estado disabilitado"),sg(),Sl(172,"td")(173,"code"),Jx(174,"var(--color-action-disabled)"),sg()()(),Sl(175,"tr")(176,"td")(177,"code"),Jx(178,"--background-item-disabled"),sg(),Jx(179,"\xA0"),sg(),Sl(180,"td"),Jx(181,"Cor de background do item desabilitado"),sg(),Sl(182,"td")(183,"code"),Jx(184,"var(--color-neutral-light-10)"),sg()()(),Sl(185,"tr")(186,"td")(187,"strong"),Jx(188,"Focused"),sg()(),Wl(189,"td")(190,"td"),sg(),Sl(191,"tr")(192,"td")(193,"code"),Jx(194,"--outline-color-focused"),sg()(),Sl(195,"td"),Jx(196,"Cor do outline do estado de focus"),sg(),Sl(197,"td")(198,"code"),Jx(199,"var(--color-action-focus)"),sg()()(),Sl(200,"tr")(201,"td")(202,"strong"),Jx(203,"Hover"),sg()(),Wl(204,"td")(205,"td"),sg(),Sl(206,"tr")(207,"td")(208,"code"),Jx(209,"--color-hover"),sg()(),Sl(210,"td"),Jx(211,"Cor principal no estado hover"),sg(),Sl(212,"td")(213,"code"),Jx(214,"var(--color-brand-01-darkest)"),sg()()(),Sl(215,"tr")(216,"td")(217,"code"),Jx(218,"--background-item-hover"),sg()(),Sl(219,"td"),Jx(220,"Cor de background no estado de hover"),sg(),Sl(221,"td")(222,"code"),Jx(223,"var(--color-brand-01-lightest)"),sg()()(),Sl(224,"tr")(225,"td")(226,"strong"),Jx(227,"Selected"),sg()(),Wl(228,"td")(229,"td"),sg(),Sl(230,"tr")(231,"td")(232,"code"),Jx(233,"--background-item-selected"),sg()(),Sl(234,"td"),Jx(235,"Cor de background do item selecionado"),sg(),Sl(236,"td")(237,"code"),Jx(238,"var(--color-brand-01-lightest)"),sg()()()()(),Sl(239,"p"),Wl(240,"br"),Jx(241," O componente "),Sl(242,"code"),Jx(243,"po-tabs"),sg(),Jx(244," \xE9 respons\xE1vel por agrupar "),Sl(245,"a",7),Jx(246,"abas"),sg(),Jx(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),sg(),Sl(248,"p"),Jx(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),sg(),Sl(250,"blockquote")(251,"p"),Jx(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),sg()(),Sl(253,"p"),Jx(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),sg(),Sl(255,"h4"),Jx(256,"Boas pr\xE1ticas"),sg(),Sl(257,"ul")(258,"li"),Jx(259,"Evite utilizar um "),Sl(260,"code"),Jx(261,"po-tabs"),sg(),Jx(262," dentro de outro "),Sl(263,"code"),Jx(264,"po-tabs"),sg(),Jx(265,";"),sg(),Sl(266,"li"),Jx(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Sl(268,"em"),Jx(269,"scroll"),sg(),Jx(270," muito longo no "),Sl(271,"code"),Jx(272,"dropdown"),sg(),Jx(273,";"),sg(),Sl(274,"li"),Jx(275,"Evite "),Sl(276,"code"),Jx(277,"labels"),sg(),Jx(278," extensos para as "),Sl(279,"code"),Jx(280,"tabs"),sg(),Jx(281," pois podem quebrar seu "),Sl(282,"em"),Jx(283,"layout"),sg(),Jx(284,", use "),Sl(285,"code"),Jx(286,"labels"),sg(),Jx(287," diretas, curtas e intuitivas."),sg()()(),Sl(288,"div",8)(289,"h4",9),Jx(290,"Seletor"),sg(),Sl(291,"pre",10),Jx(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),sg()(),Sl(293,"h4",11),Jx(294,"Propriedades"),sg(),Sl(295,"table",12)(296,"tr",13)(297,"th",14),Jx(298,"Nome"),sg(),Sl(299,"th",14),Jx(300,"Tipo"),sg(),Sl(301,"th",14),Jx(302,"Padr\xE3o"),sg(),Sl(303,"th",14),Jx(304,"Descri\xE7\xE3o"),sg()(),Sl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),Jx(309," p-size"),Wl(310,"br"),sg()()(),Sl(311,"td",19)(312,"code",20),Jx(313,"string"),sg()(),Sl(314,"td",21)(315,"p")(316,"code"),Jx(317,"medium"),sg()()(),Sl(318,"td",22)(319,"em")(320,"strong"),Jx(321,"(opcional)"),sg()(),Sl(322,"p"),Jx(323,"Define o tamanho do componente:"),sg(),Sl(324,"ul")(325,"li")(326,"code"),Jx(327,"small"),sg(),Jx(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(329,"li")(330,"code"),Jx(331,"medium"),sg(),Jx(332,": altura dos tabs como 44px."),sg()(),Sl(333,"blockquote")(334,"p"),Jx(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(336,"code"),Jx(337,"medium"),sg(),Jx(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(339,"a",23),Jx(340,"po-theme"),sg(),Jx(341,"."),sg()()()()(),Sl(342,"h3",11),Jx(343,"M\xE9todos"),sg(),Sl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),Jx(350," setQuantityTabsButton "),sg()()()()(),Sl(351,"tr",22)(352,"td",22)(353,"p"),Jx(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),sg(),Sl(355,"p"),Jx(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(357,"pre")(358,"code"),Jx(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),sg()()()()(),Wl(360,"br"),Sl(361,"table",24)(362,"tr",15)(363,"th",25)(364,"div",17)(365,"h4")(366,"span",18),Jx(367," activateTab "),sg()()()()(),Sl(368,"tr",22)(369,"td",22)(370,"p"),Jx(371,"Ativa a aba correspondente ao "),Sl(372,"code"),Jx(373,"id"),sg(),Jx(374," informado."),sg(),Sl(375,"p"),Jx(376,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(377,"pre")(378,"code"),Jx(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),sg()()()()(),Sl(380,"h5")(381,"b"),Jx(382,"Par\xE2metros"),sg()(),Sl(383,"table",12)(384,"tr",13)(385,"th",14),Jx(386,"Nome"),sg(),Sl(387,"th",14),Jx(388,"Tipo"),sg(),Sl(389,"th",14),Jx(390,"Descri\xE7\xE3o"),sg()(),Sl(391,"tr",15)(392,"td",16),Jx(393," id"),sg(),Wl(394,"td",19),Sl(395,"td",22)(396,"p"),Jx(397,"Identificador \xFAnico da aba a ser ativada."),sg()()()(),Wl(398,"br"),sg());},dependencies:[Ga],encapsulation:2})}return a})();var De=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-tabs-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),sg()()()),o&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ye,we,Pe,xe,Me],encapsulation:2})}return a})();var Ke=[{path:"",component:De}],Be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(Ke),pL]})}return a})();var At=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Be]})}return a})();export{At as DocPoTabsModule};