import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,aV as Xp,b7 as ofe,cH as ANe,Q as Cl,R as Hl,T as og,an as yO,aH as Zr,b8 as lfe,z as qx,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,cK as CC,aF as sY,aG as gk,a$ as Qt,b0 as _v,b1 as ume,cc as Nde,aB as gx,a2 as WE,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,aW as lY,aX as aY,aY as fk,bH as Wde,b3 as q3,aJ as nme,cd as sme,cr as _3,ab as lt,a3 as SNe,b9 as ONe,cL as NO,aD as Jy,aA as Ex,aE as e_,a4 as dN,cM as Qx,a6 as pN,bv as Jx,I as dw,aT as Zx}from'./main-OS7VVRJY.js';var Se=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(i,o){i&1&&(Cl(0,"po-context-tabs"),Hl(1,"po-tab",0)(2,"po-tab",1),og());},dependencies:[ofe,ANe],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),Te=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context Tabs Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-context-tabs-basic"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ve,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return l})();var Ne=["poTab"];function qe(l,A){if(l&1){let a=gx();Cl(0,"po-tab",9),dt("p-click",function(){let o=Jy(a).$implicit,m=Ex();return e_(m.onClick(o))})("p-close-tab",function(){let o=Jy(a).$implicit,m=Ex();return e_(m.onClose(o))}),Cl(1,"div",10),qx(2),og()();}if(l&2){let a=A.$implicit,i=A.index;ZE("p-active",a.active)("p-disabled",a.disabled)("p-hide",a.hide)("p-hide-close",a.hideClose)("p-label",a.label),Lp(2),dg("Tab Content ",i);}}var xe=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:4},{property:"click",gridColumns:4},{property:"closeTab",label:"Close Tab",gridColumns:4},{property:"active",type:"boolean",gridColumns:3},{property:"disabled",type:"boolean",gridColumns:3},{property:"hide",type:"boolean",gridColumns:3},{property:"hideClose",label:"Hide Close",type:"boolean",gridColumns:3}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(a){let i=Object.assign({},a);i.click=i.click?this.showClick.bind(this,i.click):void 0,i.closeTab=i.closeTab?this.dispachClose.bind(this,i.closeTab):void 0,this.tabs.push(i),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(a){a.click&&a.click();}onClose(a){a.closeTab&&a.closeTab();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(a){this.poNotification.success(`Action clicked: ${a}`);}dispachClose(a){this.poNotification.success(`Action closed: ${a}`);}static \u0275fac=function(i){return new(i||l)(w(Xp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs"]],viewQuery:function(i,o){if(i&1&&zl(Ne,7),i&2){let m;uo(m=fo())&&(o.poTab=m.first);}},standalone:false,decls:11,vars:7,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-hide-close","p-label","p-click","p-close-tab",4,"ngFor","ngForOf"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-close-tab","p-active","p-disabled","p-hide","p-hide-close","p-label"],[1,"po-font-subtitle"]],template:function(i,o){if(i&1){let m=gx();Cl(0,"po-context-tabs",2,0),WE(2,qe,3,6,"po-tab",3),og(),Hl(3,"po-dynamic-form",4,1),Cl(5,"div",5)(6,"po-button",6),dt("p-click",function(){Jy(m);let r=Sx(4);return o.addTab(r.form.value),e_(r.form.reset())}),og()(),Hl(7,"po-divider"),Cl(8,"po-radio-group",7),gw("ngModelChange",function(r){return Jy(m),Zx(o.size,r)||(o.size=r),e_(r)}),og(),Z0(),Cl(9,"div",5)(10,"po-button",8),dt("p-click",function(){return o.restore()}),og()();}if(i&2){let m=Sx(4);ZE("p-size",o.size),Lp(2),ZE("ngForOf",o.tabs),Lp(),ZE("p-fields",o.tabsFieldsForm)("p-value",o.tabs),Lp(3),ZE("p-disabled",m.form.invalid),Lp(2),pw("ngModel",o.size),ZE("p-options",o.sizeOptions),X0();}},dependencies:[CC,sY,gk,Qt,_v,ume,Nde,ofe,ANe],encapsulation:2,changeDetection:1})}return l})();var Ae=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context Tabs Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-context-tabs #poTab [p-size]="size">
  <po-tab
    *ngFor="let tab of tabs; let i = index"
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-context-tabs-labs"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ae,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return l})();var Ee=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];constructor(a){this.poNotificationService=a;}bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(a,i,o){return a.valid&&this.transportation==="flight"&&o.valid||a.valid&&this.transportation==="train"&&i.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(i){return new(i||l)(w(Xp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel"]],standalone:false,decls:47,vars:30,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide","p-hide-close"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide","p-hide-close"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled","p-hide-close"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet",3,"p-hide-close"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(i,o){if(i&1){let m=gx();Cl(0,"po-context-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),gw("ngModelChange",function(r){return Jy(m),Zx(o.origin,r)||(o.origin=r),e_(r)}),og(),Z0(),og(),Cl(6,"div",5)(7,"po-input",7),gw("ngModelChange",function(r){return Jy(m),Zx(o.destination,r)||(o.destination=r),e_(r)}),og(),Z0(),og(),Cl(8,"div",5)(9,"po-datepicker",8),gw("ngModelChange",function(r){return Jy(m),Zx(o.departDate,r)||(o.departDate=r),e_(r)}),og(),Z0(),Cl(10,"po-datepicker",9),gw("ngModelChange",function(r){return Jy(m),Zx(o.returnDate,r)||(o.returnDate=r),e_(r)}),og(),Z0(),og(),Cl(11,"div",5)(12,"po-radio-group",10),gw("ngModelChange",function(r){return Jy(m),Zx(o.transportation,r)||(o.transportation=r),e_(r)}),og(),Z0(),og()()(),Cl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),gw("ngModelChange",function(r){return Jy(m),Zx(o.trainCompany,r)||(o.trainCompany=r),e_(r)}),og(),Z0(),og(),Cl(18,"div",5)(19,"po-select",13),gw("ngModelChange",function(r){return Jy(m),Zx(o.classTrain,r)||(o.classTrain=r),e_(r)}),og(),Z0(),og()()(),Cl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),gw("ngModelChange",function(r){return Jy(m),Zx(o.flightCompany,r)||(o.flightCompany=r),e_(r)}),og(),Z0(),og(),Cl(25,"div",5)(26,"po-select",16),gw("ngModelChange",function(r){return Jy(m),Zx(o.classFlight,r)||(o.classFlight=r),e_(r)}),og(),Z0(),og()()(),Cl(27,"po-tab",17)(28,"div",5),Hl(29,"po-info",18),og(),Cl(30,"po-context-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),gw("ngModelChange",function(r){return Jy(m),Zx(o.cardName,r)||(o.cardName=r),e_(r)}),og(),Z0(),og(),Cl(36,"div",5)(37,"po-input",21),gw("ngModelChange",function(r){return Jy(m),Zx(o.card,r)||(o.card=r),e_(r)}),og(),Z0(),og(),Cl(38,"div",5)(39,"po-input",22),gw("ngModelChange",function(r){return Jy(m),Zx(o.expiryMonth,r)||(o.expiryMonth=r),e_(r)}),og(),Z0(),Cl(40,"po-input",23),gw("ngModelChange",function(r){return Jy(m),Zx(o.expiryYear,r)||(o.expiryYear=r),e_(r)}),og(),Z0(),Cl(41,"po-input",24),gw("ngModelChange",function(r){return Jy(m),Zx(o.cvv,r)||(o.cvv=r),e_(r)}),og(),Z0(),og(),Cl(42,"div",5)(43,"po-button",25),dt("p-click",function(){return o.payment()}),og()()()(),Cl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),dt("p-click",function(){return o.bankBillet()}),og()()()()()();}if(i&2){let m=Sx(3),g=Sx(15),r=Sx(22),Be=Sx(33);Lp(5),pw("ngModel",o.origin),X0(),Lp(2),pw("ngModel",o.destination),X0(),Lp(2),pw("ngModel",o.departDate),X0(),Lp(),pw("ngModel",o.returnDate),ZE("p-min-date",o.departDate),X0(),Lp(2),pw("ngModel",o.transportation),ZE("p-options",o.transportationOptions),X0(),Lp(),ZE("p-hide",o.transportation!=="train")("p-hide-close",true),Lp(4),pw("ngModel",o.trainCompany),ZE("p-options",o.trainCompanyOptions),X0(),Lp(2),pw("ngModel",o.classTrain),ZE("p-options",o.classTrainOptions),X0(),Lp(),ZE("p-hide",o.transportation!=="flight")("p-hide-close",true),Lp(4),pw("ngModel",o.flightCompany),ZE("p-options",o.flightCompanyOptions),X0(),Lp(2),pw("ngModel",o.classFlight),ZE("p-options",o.classFlightOptions),X0(),Lp(),ZE("p-disabled",o.isPaymentEnable(m,g,r)===false)("p-hide-close",true),Lp(2),ZE("p-value",o.getTotalCost()),Lp(6),pw("ngModel",o.cardName),X0(),Lp(2),pw("ngModel",o.card),X0(),Lp(2),pw("ngModel",o.expiryMonth),X0(),Lp(),pw("ngModel",o.expiryYear),X0(),Lp(),pw("ngModel",o.cvv),X0(),Lp(2),ZE("p-disabled",!Be.form.valid||!o.totalCost),Lp(),ZE("p-hide-close",true),Lp(2),ZE("p-disabled",!o.totalCost);}},dependencies:[lY,sY,aY,gk,fk,Qt,Wde,q3,Nde,nme,sme,ofe,ANe],encapsulation:2,changeDetection:1})}return l})();var Re=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context Tabs - Travel"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-context-tabs>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-context-tabs-travel"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Re,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ee],encapsulation:2})}return l})();var je=["poTab"];function Qe(l,A){if(l&1){let a=gx();Cl(0,"po-tab",7),dN(1,"date"),Cl(2,"div",8)(3,"div",5)(4,"div",4)(5,"div",9)(6,"po-widget")(7,"div",4)(8,"div",10),Hl(9,"po-avatar",11),og(),Cl(10,"div",12)(11,"div",13),Hl(12,"po-info",14),og(),Cl(13,"div",13),Hl(14,"po-info",15),og(),Cl(15,"div",13),Hl(16,"po-info",16),og()()()()(),Cl(17,"div",17)(18,"po-widget",18)(19,"div",19),qx(20,"TFace Conference Week"),og(),Cl(21,"div",20),qx(22,"From 21th September until 26th setember 2018"),og(),Hl(23,"hr"),Cl(24,"div",4)(25,"div",21)(26,"span",22),Hl(27,"po-icon",23),og(),Cl(28,"span",24),qx(29),dN(30,"date"),og()(),Cl(31,"div",21)(32,"span",22),Hl(33,"po-icon",25),og(),Cl(34,"span",26),qx(35,"Av. Braz Leme, 1000, Santana"),og()()(),Cl(36,"div",27)(37,"po-button",28),dt("p-click",function(){let o=Jy(a).$implicit,m=Ex();return e_(m.confirmSubscription(o))}),og()()()()()()()();}if(l&2){let a=A.$implicit;ZE("p-label",Qx(pN(1,10,a.createdDate,"MMM d")))("p-active",a.id==="1")("p-hide",a.subscribe),Lp(9),ZE("p-src",Jx("assets/graphics/",a.photo)),Lp(3),ZE("p-value",a.name),Lp(2),ZE("p-value",a.email),Lp(2),ZE("p-value",a.description),Lp(13),dw(pN(30,13,a.createdDate,"MM/dd/yyyy"));}}var _e=(()=>{class l{poNotification;poTab;disableRestoreBtn=true;speakers;pageWidth;constructor(a){this.poNotification=a;}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(a=>a.subscribe=false);}confirmSubscription(a){this.disableRestoreBtn=false,a.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(i){return new(i||l)(w(Xp))};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf"]],viewQuery:function(i,o){if(i&1&&zl(je,7),i&2){let m;uo(m=fo())&&(o.poTab=m.first);}},standalone:false,decls:9,vars:2,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide",4,"ngFor","ngForOf"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10","po-mt-0"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[3,"p-label","p-active","p-hide"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(i,o){i&1&&(Cl(0,"po-page-default",1)(1,"po-context-tabs",null,0),WE(3,Qe,38,16,"po-tab",2),og(),Hl(4,"hr",3),Cl(5,"div",4)(6,"div",5)(7,"div",4)(8,"po-button",6),dt("p-click",function(){return o.cancelSubscription()}),og()()()()()),i&2&&(Lp(3),ZE("ngForOf",o.speakers),Lp(5),ZE("p-disabled",o.disableRestoreBtn));},dependencies:[CC,_3,Qt,lt,sme,SNe,ofe,ANe,ONe,NO],encapsulation:2,changeDetection:1})}return l})();var Ye=l=>({"docs-sample-code-tabs":l}),Pe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Context Tabs - Business Conference"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Check the speaker's list">
  <po-context-tabs #poTab>
    <po-tab
      *ngFor="let speaker of speakers"
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-context-tabs-business-conf"),og(),Hl(23,"hr")),i&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ye,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,_e],encapsulation:2})}return l})();var ke=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-context-tabs-doc"]],standalone:false,decls:361,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(i,o){i&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoContextTabsModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-context-tabs"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoContextTabsComponent"),og()(),Cl(12,"div",2)(13,"h4"),qx(14,"Tokens customiz\xE1veis"),og(),Cl(15,"p"),qx(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(17,"blockquote")(18,"p"),qx(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(20,"a",6),qx(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(22,"."),og()(),Cl(23,"table")(24,"thead")(25,"tr")(26,"th"),qx(27,"Propriedade"),og(),Cl(28,"th"),qx(29,"Descri\xE7\xE3o"),og(),Cl(30,"th"),qx(31,"Valor Padr\xE3o"),og()()(),Cl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),qx(36,"Default Values"),og()(),Hl(37,"td")(38,"td"),og(),Cl(39,"tr")(40,"td")(41,"code"),qx(42,"--background"),og()(),Cl(43,"td"),qx(44,"Cor de background"),og(),Cl(45,"td")(46,"code"),qx(47,"var(--color-transparent)"),og()()(),Cl(48,"tr")(49,"td")(50,"code"),qx(51,"--background-item-default"),og()(),Cl(52,"td"),qx(53,"Cor de background do item padr\xE3o"),og(),Cl(54,"td")(55,"code"),qx(56,"var(--color-transparent)"),og()()(),Cl(57,"tr")(58,"td")(59,"code"),qx(60,"--border-radius"),og()(),Cl(61,"td"),qx(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(63,"td")(64,"code"),qx(65,"var(--border-radius-md)"),og()()(),Cl(66,"tr")(67,"td")(68,"code"),qx(69,"--color"),og()(),Cl(70,"td"),qx(71,"Cor da fonte padr\xE3o"),og(),Cl(72,"td")(73,"code"),qx(74,"var(--color-action-default)"),og()()(),Cl(75,"tr")(76,"td")(77,"code"),qx(78,"--color-baseline"),og()(),Cl(79,"td"),qx(80,"Cor para box-shadow"),og(),Cl(81,"td")(82,"code"),qx(83,"var(--color-neutral-light-20)"),og()()(),Cl(84,"tr")(85,"td")(86,"code"),qx(87,"--font-family"),og()(),Cl(88,"td"),qx(89,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(90,"td")(91,"code"),qx(92,"var(--font-family-theme)"),og()()(),Cl(93,"tr")(94,"td")(95,"code"),qx(96,"--font-size"),og()(),Cl(97,"td"),qx(98,"Tamanho da fonte"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--font-size-default)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--font-weight"),og()(),Cl(106,"td"),qx(107,"Peso da fonte"),og(),Cl(108,"td")(109,"code"),qx(110,"var(--font-weight-bold)"),og()()(),Cl(111,"tr")(112,"td")(113,"code"),qx(114,"--margin-tabs-container-left"),og()(),Cl(115,"td"),qx(116,"Margem lateral esquerda do componente quando usado dentro de um "),Cl(117,"code"),qx(118,"page-default"),og()(),Cl(119,"td")(120,"code"),qx(121,"var(--spacing-md)"),og()()(),Cl(122,"tr")(123,"td")(124,"code"),qx(125,"--margin-tabs-container-right"),og()(),Cl(126,"td"),qx(127,"Margem lateral direita do componente quando usado dentro de um "),Cl(128,"code"),qx(129,"page-default"),og()(),Cl(130,"td")(131,"code"),qx(132,"-16px"),og()()(),Cl(133,"tr")(134,"td")(135,"code"),qx(136,"--padding-tabs-header"),og()(),Cl(137,"td"),qx(138,"Padding do valor lateral das abas"),og(),Cl(139,"td")(140,"code"),qx(141,"var(--spacing-sm)"),og()()(),Cl(142,"tr")(143,"td")(144,"code"),qx(145,"--margin-tabs-first-child"),og()(),Cl(146,"td"),qx(147,"Margem lateral da primeira aba"),og(),Cl(148,"td")(149,"code"),qx(150,"var(--spacing-md)"),og()()(),Cl(151,"tr")(152,"td")(153,"code"),qx(154,"--margin-tabs-last-child"),og()(),Cl(155,"td"),qx(156,"Margem lateral da ultima aba"),og(),Cl(157,"td")(158,"code"),qx(159,"var(--spacing-md)"),og()()(),Cl(160,"tr")(161,"td")(162,"strong"),qx(163,"Disabled"),og()(),Hl(164,"td")(165,"td"),og(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--color-disabled"),og()(),Cl(170,"td"),qx(171,"Cor da fonte no estado disabilitado"),og(),Cl(172,"td")(173,"code"),qx(174,"var(--color-action-disabled)"),og()()(),Cl(175,"tr")(176,"td")(177,"code"),qx(178,"--background-item-disabled"),og(),qx(179,"\xA0"),og(),Cl(180,"td"),qx(181,"Cor de background do item desabilitado"),og(),Cl(182,"td")(183,"code"),qx(184,"var(--color-neutral-light-10)"),og()()(),Cl(185,"tr")(186,"td")(187,"strong"),qx(188,"Focused"),og()(),Hl(189,"td")(190,"td"),og(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Hover"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-hover"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado hover"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-brand-01-darkest)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-item-hover"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado de hover"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-brand-01-lightest)"),og()()(),Cl(224,"tr")(225,"td")(226,"strong"),qx(227,"Selected"),og()(),Hl(228,"td")(229,"td"),og(),Cl(230,"tr")(231,"td")(232,"code"),qx(233,"--background-item-selected"),og()(),Cl(234,"td"),qx(235,"Cor de background do item selecionado"),og(),Cl(236,"td")(237,"code"),qx(238,"var(--color-brand-01-lightest)"),og()()()()(),Cl(239,"p"),Hl(240,"br"),qx(241," O componente "),Cl(242,"code"),qx(243,"po-context-tabs"),og(),qx(244," \xE9 respons\xE1vel por agrupar "),Cl(245,"a",7),qx(246,"abas"),og(),qx(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),og(),Cl(248,"p"),qx(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),og(),Cl(250,"blockquote")(251,"p"),qx(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),og()(),Cl(253,"p"),qx(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),og(),Cl(255,"h4"),qx(256,"Boas pr\xE1ticas"),og(),Cl(257,"ul")(258,"li"),qx(259,"Evite utilizar um "),Cl(260,"code"),qx(261,"po-context-tabs"),og(),qx(262," dentro de outro "),Cl(263,"code"),qx(264,"po-context-tabs"),og(),qx(265,";"),og(),Cl(266,"li"),qx(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Cl(268,"em"),qx(269,"scroll"),og(),qx(270," muito longo no "),Cl(271,"code"),qx(272,"dropdown"),og(),qx(273,";"),og(),Cl(274,"li"),qx(275,"Evite "),Cl(276,"code"),qx(277,"labels"),og(),qx(278," extensos para as "),Cl(279,"code"),qx(280,"tabs"),og(),qx(281," pois podem quebrar seu "),Cl(282,"em"),qx(283,"layout"),og(),qx(284,", use "),Cl(285,"code"),qx(286,"labels"),og(),qx(287," diretas, curtas e intuitivas."),og()()(),Cl(288,"div",8)(289,"h4",9),qx(290,"Seletor"),og(),Cl(291,"pre",10),qx(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),og()(),Cl(293,"h4",11),qx(294,"Propriedades"),og(),Cl(295,"table",12)(296,"tr",13)(297,"th",14),qx(298,"Nome"),og(),Cl(299,"th",14),qx(300,"Tipo"),og(),Cl(301,"th",14),qx(302,"Padr\xE3o"),og(),Cl(303,"th",14),qx(304,"Descri\xE7\xE3o"),og()(),Cl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),qx(309," p-size"),Hl(310,"br"),og()()(),Cl(311,"td",19)(312,"code",20),qx(313,"string"),og()(),Cl(314,"td",21)(315,"p")(316,"code"),qx(317,"medium"),og()()(),Cl(318,"td",22)(319,"em")(320,"strong"),qx(321,"(opcional)"),og()(),Cl(322,"p"),qx(323,"Define o tamanho do componente:"),og(),Cl(324,"ul")(325,"li")(326,"code"),qx(327,"small"),og(),qx(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(329,"li")(330,"code"),qx(331,"medium"),og(),qx(332,": altura dos tabs como 44px."),og()(),Cl(333,"blockquote")(334,"p"),qx(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(336,"code"),qx(337,"medium"),og(),qx(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(339,"a",23),qx(340,"po-theme"),og(),qx(341,"."),og()()()()(),Cl(342,"h3",11),qx(343,"M\xE9todos"),og(),Cl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),qx(350," setQuantityTabsButton "),og()()()()(),Cl(351,"tr",22)(352,"td",22)(353,"p"),qx(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),og(),Cl(355,"p"),qx(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(357,"pre")(358,"code"),qx(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),og()()()()(),Hl(360,"br"),og());},dependencies:[Zr],encapsulation:2})}return l})();var Me=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(i){return new(i||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Context Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-context-tabs-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-context-tabs-basic-view")(6,"sample-po-context-tabs-labs-view")(7,"sample-po-context-tabs-travel-view")(8,"sample-po-context-tabs-business-conf-view"),og()()()),i&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Te,ye,we,Pe,ke],encapsulation:2})}return l})();var Ue=[{path:"",component:Me}],De=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[bL.forChild(Ue),bL]})}return l})();var Et=(()=>{class l{static \u0275fac=function(i){return new(i||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ca,De]})}return l})();export{Et as DocPoContextTabsModule};