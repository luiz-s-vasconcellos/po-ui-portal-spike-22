import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,aW as Yp,b8 as Hme,b9 as Gme,T as Tl,J as Gl,L as sg,an as TO,aH as Ga,z as tN,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aF as J9,aG as Ck,b0 as Qt,b1 as mv,b2 as Zhe,c8 as Sde,aB as Cx,aQ as mx,aR as gx,aM as Ew,aN as t0,bd as Ox,aS as vx,aO as Dw,aP as r0,av as Yl,aw as uo,ax as fo,aX as nY,aY as eY,aZ as Dk,bD as Mde,b4 as O3,aJ as Uhe,c9 as $he,cn as r3,ab as lt,a3 as aNe,ba as gNe,cG as jO,a4 as _N,cH as sN,a6 as wN,br as aN,H as vw,aD as Ky,aA as Rx,aE as Xy,aT as rN}from'./main-LUSFEIN7.js';var Te=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(o,i){o&1&&(Tl(0,"po-tabs"),Gl(1,"po-tab",0)(2,"po-tab",1),sg());},dependencies:[Hme,Gme],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tabs Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tabs-basic/sample-po-tabs-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tabs-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Te],encapsulation:2})}return a})();var Ne=["poTab"];function Le(a,q){if(a&1){let r=Cx();Tl(0,"po-tab",9),ht("p-click",function(){let i=Ky(r).$implicit,d=Rx();return Xy(d.onClick(i))}),Tl(1,"div",10),tN(2),sg()();}if(a&2){let r=q.$implicit,o=q.$index;tw("p-active",r.active)("p-disabled",r.disabled)("p-hide",r.hide)("p-label",r.label),Vp(2),fg("Tab Content ",o);}}var Ee=(()=>{class a{poNotification=f(Yp);poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(r){r.click&&r.click();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs"]],viewQuery:function(o,i){if(o&1&&Yl(Ne,7),o&2){let d;uo(d=fo())&&(i.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(o,i){if(o&1){let d=Cx();Tl(0,"po-tabs",2,0),mx(2,Le,3,5,"po-tab",3,gx),sg(),Gl(4,"po-dynamic-form",4,1),Tl(6,"div",5)(7,"po-button",6),ht("p-click",function(){Ky(d);let l=Ox(5);return i.addTab(l.form.value),Xy(l.form.reset())}),sg()(),Gl(8,"po-divider"),Tl(9,"po-radio-group",7),Ew("ngModelChange",function(l){return Ky(d),rN(i.size,l)||(i.size=l),Xy(l)}),sg(),t0(),Tl(10,"div",5)(11,"po-button",8),ht("p-click",function(){return i.restore()}),sg()();}if(o&2){let d=Ox(5);tw("p-size",i.size),Vp(2),vx(i.tabs),Vp(2),tw("p-fields",i.tabsFieldsForm)("p-value",i.tabs),Vp(3),tw("p-disabled",d.form.invalid),Vp(2),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0();}},dependencies:[J9,Ck,Qt,mv,Zhe,Sde,Hme,Gme],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tabs Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-tabs #poTab [p-size]="size">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tabs-labs"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ze,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ee],encapsulation:2})}return a})();var _e=(()=>{class a{poNotificationService=f(Yp);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(r,o,i){return r.valid&&this.transportation==="flight"&&i.valid||r.valid&&this.transportation==="train"&&o.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel"]],standalone:false,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(o,i){if(o&1){let d=Cx();Tl(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),Ew("ngModelChange",function(l){return Ky(d),rN(i.origin,l)||(i.origin=l),Xy(l)}),sg(),t0(),sg(),Tl(6,"div",5)(7,"po-input",7),Ew("ngModelChange",function(l){return Ky(d),rN(i.destination,l)||(i.destination=l),Xy(l)}),sg(),t0(),sg(),Tl(8,"div",5)(9,"po-datepicker",8),Ew("ngModelChange",function(l){return Ky(d),rN(i.departDate,l)||(i.departDate=l),Xy(l)}),sg(),t0(),Tl(10,"po-datepicker",9),Ew("ngModelChange",function(l){return Ky(d),rN(i.returnDate,l)||(i.returnDate=l),Xy(l)}),sg(),t0(),sg(),Tl(11,"div",5)(12,"po-radio-group",10),Ew("ngModelChange",function(l){return Ky(d),rN(i.transportation,l)||(i.transportation=l),Xy(l)}),sg(),t0(),sg()()(),Tl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),Ew("ngModelChange",function(l){return Ky(d),rN(i.trainCompany,l)||(i.trainCompany=l),Xy(l)}),sg(),t0(),sg(),Tl(18,"div",5)(19,"po-select",13),Ew("ngModelChange",function(l){return Ky(d),rN(i.classTrain,l)||(i.classTrain=l),Xy(l)}),sg(),t0(),sg()()(),Tl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),Ew("ngModelChange",function(l){return Ky(d),rN(i.flightCompany,l)||(i.flightCompany=l),Xy(l)}),sg(),t0(),sg(),Tl(25,"div",5)(26,"po-select",16),Ew("ngModelChange",function(l){return Ky(d),rN(i.classFlight,l)||(i.classFlight=l),Xy(l)}),sg(),t0(),sg()()(),Tl(27,"po-tab",17)(28,"div",5),Gl(29,"po-info",18),sg(),Tl(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),Ew("ngModelChange",function(l){return Ky(d),rN(i.cardName,l)||(i.cardName=l),Xy(l)}),sg(),t0(),sg(),Tl(36,"div",5)(37,"po-input",21),Ew("ngModelChange",function(l){return Ky(d),rN(i.card,l)||(i.card=l),Xy(l)}),sg(),t0(),sg(),Tl(38,"div",5)(39,"po-input",22),Ew("ngModelChange",function(l){return Ky(d),rN(i.expiryMonth,l)||(i.expiryMonth=l),Xy(l)}),sg(),t0(),Tl(40,"po-input",23),Ew("ngModelChange",function(l){return Ky(d),rN(i.expiryYear,l)||(i.expiryYear=l),Xy(l)}),sg(),t0(),Tl(41,"po-input",24),Ew("ngModelChange",function(l){return Ky(d),rN(i.cvv,l)||(i.cvv=l),Xy(l)}),sg(),t0(),sg(),Tl(42,"div",5)(43,"po-button",25),ht("p-click",function(){return i.payment()}),sg()()()(),Tl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),ht("p-click",function(){return i.bankBillet()}),sg()()()()()();}if(o&2){let d=Ox(3),g=Ox(15),l=Ox(22),Fe=Ox(33);Vp(5),Dw("ngModel",i.origin),r0(),Vp(2),Dw("ngModel",i.destination),r0(),Vp(2),Dw("ngModel",i.departDate),r0(),Vp(),Dw("ngModel",i.returnDate),tw("p-min-date",i.departDate),r0(),Vp(2),Dw("ngModel",i.transportation),tw("p-options",i.transportationOptions),r0(),Vp(),tw("p-hide",i.transportation!=="train"),Vp(4),Dw("ngModel",i.trainCompany),tw("p-options",i.trainCompanyOptions),r0(),Vp(2),Dw("ngModel",i.classTrain),tw("p-options",i.classTrainOptions),r0(),Vp(),tw("p-hide",i.transportation!=="flight"),Vp(4),Dw("ngModel",i.flightCompany),tw("p-options",i.flightCompanyOptions),r0(),Vp(2),Dw("ngModel",i.classFlight),tw("p-options",i.classFlightOptions),r0(),Vp(),tw("p-disabled",i.isPaymentEnable(d,g,l)===false),Vp(2),tw("p-value",i.getTotalCost()),Vp(6),Dw("ngModel",i.cardName),r0(),Vp(2),Dw("ngModel",i.card),r0(),Vp(2),Dw("ngModel",i.expiryMonth),r0(),Vp(),Dw("ngModel",i.expiryYear),r0(),Vp(),Dw("ngModel",i.cvv),r0(),Vp(2),tw("p-disabled",!Fe.form.valid||!i.totalCost),Vp(3),tw("p-disabled",!i.totalCost);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,Mde,O3,Sde,Uhe,$he,Hme,Gme],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tabs - Travel"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-tabs>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tabs-travel"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,je,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,_e],encapsulation:2})}return a})();var Qe=["poTab"];function Ze(a,q){if(a&1){let r=Cx();Tl(0,"po-tab",2),_N(1,"date"),Tl(2,"div",6)(3,"div",4)(4,"div",3)(5,"div",7)(6,"po-widget")(7,"div",3)(8,"div",8),Gl(9,"po-avatar",9),sg(),Tl(10,"div",10)(11,"div",11),Gl(12,"po-info",12),sg(),Tl(13,"div",11),Gl(14,"po-info",13),sg(),Tl(15,"div",11),Gl(16,"po-info",14),sg()()()()(),Tl(17,"div",15)(18,"po-widget",16)(19,"div",17),tN(20,"TFace Conference Week"),sg(),Tl(21,"div",18),tN(22,"From 21th September until 26th setember 2018"),sg(),Gl(23,"po-divider"),Tl(24,"div",3)(25,"div",19)(26,"span",20),Gl(27,"po-icon",21),sg(),Tl(28,"span",22),tN(29),_N(30,"date"),sg()(),Tl(31,"div",19)(32,"span",20),Gl(33,"po-icon",23),sg(),Tl(34,"span",24),tN(35,"Av. Braz Leme, 1000, Santana"),sg()()(),Tl(36,"div",25)(37,"po-button",26),ht("p-click",function(){let i=Ky(r).$implicit,d=Rx();return Xy(d.confirmSubscription(i))}),sg()()()()()()()();}if(a&2){let r=q.$implicit;tw("p-label",sN(wN(1,10,r.createdDate,"MMM d")))("p-active",r.id==="1")("p-hide",r.subscribe),Vp(9),tw("p-src",aN("assets/graphics/",r.photo)),Vp(3),tw("p-value",r.name),Vp(2),tw("p-value",r.email),Vp(2),tw("p-value",r.description),Vp(13),vw(wN(30,13,r.createdDate,"MM/dd/yyyy"));}}var ke=(()=>{class a{poNotification=f(Yp);poTab;disableRestoreBtn=true;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(r=>r.subscribe=false);}confirmSubscription(r){this.disableRestoreBtn=false,r.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(o,i){if(o&1&&Yl(Qe,7),o&2){let d;uo(d=fo())&&(i.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(o,i){o&1&&(Tl(0,"po-page-default",1)(1,"po-tabs",null,0),mx(3,Ze,38,16,"po-tab",2,gx),sg(),Gl(5,"po-divider"),Tl(6,"div",3)(7,"div",4)(8,"div",3)(9,"po-button",5),ht("p-click",function(){return i.cancelSubscription()}),sg()()()()()),o&2&&(Vp(3),vx(i.speakers),Vp(6),tw("p-disabled",i.disableRestoreBtn));},dependencies:[r3,Qt,mv,lt,$he,aNe,Hme,Gme,gNe,jO],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Tabs - Business Conference"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Check the speaker's list">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-tabs-business-conf"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ke],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-doc"]],standalone:false,decls:399,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoTabsModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-tabs"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoTabsComponent"),sg()(),Tl(12,"div",2)(13,"h4"),tN(14,"Tokens customiz\xE1veis"),sg(),Tl(15,"p"),tN(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(17,"blockquote")(18,"p"),tN(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(20,"a",6),tN(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(22,"."),sg()(),Tl(23,"table")(24,"thead")(25,"tr")(26,"th"),tN(27,"Propriedade"),sg(),Tl(28,"th"),tN(29,"Descri\xE7\xE3o"),sg(),Tl(30,"th"),tN(31,"Valor Padr\xE3o"),sg()()(),Tl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),tN(36,"Default Values"),sg()(),Gl(37,"td")(38,"td"),sg(),Tl(39,"tr")(40,"td")(41,"code"),tN(42,"--background"),sg()(),Tl(43,"td"),tN(44,"Cor de background"),sg(),Tl(45,"td")(46,"code"),tN(47,"var(--color-transparent)"),sg()()(),Tl(48,"tr")(49,"td")(50,"code"),tN(51,"--background-item-default"),sg()(),Tl(52,"td"),tN(53,"Cor de background do item padr\xE3o"),sg(),Tl(54,"td")(55,"code"),tN(56,"var(--color-transparent)"),sg()()(),Tl(57,"tr")(58,"td")(59,"code"),tN(60,"--border-radius"),sg()(),Tl(61,"td"),tN(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(63,"td")(64,"code"),tN(65,"var(--border-radius-md)"),sg()()(),Tl(66,"tr")(67,"td")(68,"code"),tN(69,"--color"),sg()(),Tl(70,"td"),tN(71,"Cor da fonte padr\xE3o"),sg(),Tl(72,"td")(73,"code"),tN(74,"var(--color-action-default)"),sg()()(),Tl(75,"tr")(76,"td")(77,"code"),tN(78,"--color-baseline"),sg()(),Tl(79,"td"),tN(80,"Cor para box-shadow"),sg(),Tl(81,"td")(82,"code"),tN(83,"var(--color-neutral-light-20)"),sg()()(),Tl(84,"tr")(85,"td")(86,"code"),tN(87,"--font-family"),sg()(),Tl(88,"td"),tN(89,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(90,"td")(91,"code"),tN(92,"var(--font-family-theme)"),sg()()(),Tl(93,"tr")(94,"td")(95,"code"),tN(96,"--font-size"),sg()(),Tl(97,"td"),tN(98,"Tamanho da fonte"),sg(),Tl(99,"td")(100,"code"),tN(101,"var(--font-size-default)"),sg()()(),Tl(102,"tr")(103,"td")(104,"code"),tN(105,"--font-weight"),sg()(),Tl(106,"td"),tN(107,"Peso da fonte"),sg(),Tl(108,"td")(109,"code"),tN(110,"var(--font-weight-bold)"),sg()()(),Tl(111,"tr")(112,"td")(113,"code"),tN(114,"--margin-tabs-container-left"),sg()(),Tl(115,"td"),tN(116,"Margem lateral esquerda do componente quando usado dentro de um "),Tl(117,"code"),tN(118,"page-default"),sg()(),Tl(119,"td")(120,"code"),tN(121,"var(--spacing-md)"),sg()()(),Tl(122,"tr")(123,"td")(124,"code"),tN(125,"--margin-tabs-container-right"),sg()(),Tl(126,"td"),tN(127,"Margem lateral direita do componente quando usado dentro de um "),Tl(128,"code"),tN(129,"page-default"),sg()(),Tl(130,"td")(131,"code"),tN(132,"-16px"),sg()()(),Tl(133,"tr")(134,"td")(135,"code"),tN(136,"--padding-tabs-header"),sg()(),Tl(137,"td"),tN(138,"Padding do valor lateral das abas"),sg(),Tl(139,"td")(140,"code"),tN(141,"var(--spacing-sm)"),sg()()(),Tl(142,"tr")(143,"td")(144,"code"),tN(145,"--margin-tabs-first-child"),sg()(),Tl(146,"td"),tN(147,"Margem lateral da primeira aba"),sg(),Tl(148,"td")(149,"code"),tN(150,"var(--spacing-md)"),sg()()(),Tl(151,"tr")(152,"td")(153,"code"),tN(154,"--margin-tabs-last-child"),sg()(),Tl(155,"td"),tN(156,"Margem lateral da ultima aba"),sg(),Tl(157,"td")(158,"code"),tN(159,"var(--spacing-md)"),sg()()(),Tl(160,"tr")(161,"td")(162,"strong"),tN(163,"Disabled"),sg()(),Gl(164,"td")(165,"td"),sg(),Tl(166,"tr")(167,"td")(168,"code"),tN(169,"--color-disabled"),sg()(),Tl(170,"td"),tN(171,"Cor da fonte no estado disabilitado"),sg(),Tl(172,"td")(173,"code"),tN(174,"var(--color-action-disabled)"),sg()()(),Tl(175,"tr")(176,"td")(177,"code"),tN(178,"--background-item-disabled"),sg(),tN(179,"\xA0"),sg(),Tl(180,"td"),tN(181,"Cor de background do item desabilitado"),sg(),Tl(182,"td")(183,"code"),tN(184,"var(--color-neutral-light-10)"),sg()()(),Tl(185,"tr")(186,"td")(187,"strong"),tN(188,"Focused"),sg()(),Gl(189,"td")(190,"td"),sg(),Tl(191,"tr")(192,"td")(193,"code"),tN(194,"--outline-color-focused"),sg()(),Tl(195,"td"),tN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),tN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),tN(203,"Hover"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),tN(209,"--color-hover"),sg()(),Tl(210,"td"),tN(211,"Cor principal no estado hover"),sg(),Tl(212,"td")(213,"code"),tN(214,"var(--color-brand-01-darkest)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),tN(218,"--background-item-hover"),sg()(),Tl(219,"td"),tN(220,"Cor de background no estado de hover"),sg(),Tl(221,"td")(222,"code"),tN(223,"var(--color-brand-01-lightest)"),sg()()(),Tl(224,"tr")(225,"td")(226,"strong"),tN(227,"Selected"),sg()(),Gl(228,"td")(229,"td"),sg(),Tl(230,"tr")(231,"td")(232,"code"),tN(233,"--background-item-selected"),sg()(),Tl(234,"td"),tN(235,"Cor de background do item selecionado"),sg(),Tl(236,"td")(237,"code"),tN(238,"var(--color-brand-01-lightest)"),sg()()()()(),Tl(239,"p"),Gl(240,"br"),tN(241," O componente "),Tl(242,"code"),tN(243,"po-tabs"),sg(),tN(244," \xE9 respons\xE1vel por agrupar "),Tl(245,"a",7),tN(246,"abas"),sg(),tN(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),sg(),Tl(248,"p"),tN(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),sg(),Tl(250,"blockquote")(251,"p"),tN(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),sg()(),Tl(253,"p"),tN(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),sg(),Tl(255,"h4"),tN(256,"Boas pr\xE1ticas"),sg(),Tl(257,"ul")(258,"li"),tN(259,"Evite utilizar um "),Tl(260,"code"),tN(261,"po-tabs"),sg(),tN(262," dentro de outro "),Tl(263,"code"),tN(264,"po-tabs"),sg(),tN(265,";"),sg(),Tl(266,"li"),tN(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Tl(268,"em"),tN(269,"scroll"),sg(),tN(270," muito longo no "),Tl(271,"code"),tN(272,"dropdown"),sg(),tN(273,";"),sg(),Tl(274,"li"),tN(275,"Evite "),Tl(276,"code"),tN(277,"labels"),sg(),tN(278," extensos para as "),Tl(279,"code"),tN(280,"tabs"),sg(),tN(281," pois podem quebrar seu "),Tl(282,"em"),tN(283,"layout"),sg(),tN(284,", use "),Tl(285,"code"),tN(286,"labels"),sg(),tN(287," diretas, curtas e intuitivas."),sg()()(),Tl(288,"div",8)(289,"h4",9),tN(290,"Seletor"),sg(),Tl(291,"pre",10),tN(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),sg()(),Tl(293,"h4",11),tN(294,"Propriedades"),sg(),Tl(295,"table",12)(296,"tr",13)(297,"th",14),tN(298,"Nome"),sg(),Tl(299,"th",14),tN(300,"Tipo"),sg(),Tl(301,"th",14),tN(302,"Padr\xE3o"),sg(),Tl(303,"th",14),tN(304,"Descri\xE7\xE3o"),sg()(),Tl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),tN(309," p-size"),Gl(310,"br"),sg()()(),Tl(311,"td",19)(312,"code",20),tN(313,"string"),sg()(),Tl(314,"td",21)(315,"p")(316,"code"),tN(317,"medium"),sg()()(),Tl(318,"td",22)(319,"em")(320,"strong"),tN(321,"(opcional)"),sg()(),Tl(322,"p"),tN(323,"Define o tamanho do componente:"),sg(),Tl(324,"ul")(325,"li")(326,"code"),tN(327,"small"),sg(),tN(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(329,"li")(330,"code"),tN(331,"medium"),sg(),tN(332,": altura dos tabs como 44px."),sg()(),Tl(333,"blockquote")(334,"p"),tN(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(336,"code"),tN(337,"medium"),sg(),tN(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(339,"a",23),tN(340,"po-theme"),sg(),tN(341,"."),sg()()()()(),Tl(342,"h3",11),tN(343,"M\xE9todos"),sg(),Tl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),tN(350," setQuantityTabsButton "),sg()()()()(),Tl(351,"tr",22)(352,"td",22)(353,"p"),tN(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),sg(),Tl(355,"p"),tN(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(357,"pre")(358,"code"),tN(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),sg()()()()(),Gl(360,"br"),Tl(361,"table",24)(362,"tr",15)(363,"th",25)(364,"div",17)(365,"h4")(366,"span",18),tN(367," activateTab "),sg()()()()(),Tl(368,"tr",22)(369,"td",22)(370,"p"),tN(371,"Ativa a aba correspondente ao "),Tl(372,"code"),tN(373,"id"),sg(),tN(374," informado."),sg(),Tl(375,"p"),tN(376,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(377,"pre")(378,"code"),tN(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),sg()()()()(),Tl(380,"h5")(381,"b"),tN(382,"Par\xE2metros"),sg()(),Tl(383,"table",12)(384,"tr",13)(385,"th",14),tN(386,"Nome"),sg(),Tl(387,"th",14),tN(388,"Tipo"),sg(),Tl(389,"th",14),tN(390,"Descri\xE7\xE3o"),sg()(),Tl(391,"tr",15)(392,"td",16),tN(393," id"),sg(),Gl(394,"td",19),Tl(395,"td",22)(396,"p"),tN(397,"Identificador \xFAnico da aba a ser ativada."),sg()()()(),Gl(398,"br"),sg());},dependencies:[Ga],encapsulation:2})}return a})();var De=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-tabs-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),sg()()()),o&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ye,we,Pe,xe,Me],encapsulation:2})}return a})();var Ke=[{path:"",component:De}],Be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Ke),vL]})}return a})();var At=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Be]})}return a})();export{At as DocPoTabsModule};