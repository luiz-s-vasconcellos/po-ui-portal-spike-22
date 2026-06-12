import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,b7 as ofe,b8 as lfe,Q as Cl,R as Hl,T as og,an as yO,aH as Zr,z as qx,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aF as sY,aG as gk,a$ as Qt,b0 as _v,b1 as ume,cc as Nde,aB as gx,aQ as cx,aR as ax,aM as gw,aN as Z0,bc as Sx,aS as lx,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,aW as lY,aX as aY,aY as fk,bH as Wde,b3 as q3,aJ as nme,cd as sme,cr as _3,ab as lt,a3 as SNe,b9 as ONe,cL as NO,a4 as dN,cM as Qx,a6 as pN,bv as Jx,I as dw,aD as Jy,aA as Ex,aE as e_,aT as Zx}from'./main-OS7VVRJY.js';var Te=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic"]],standalone:false,decls:3,vars:0,consts:[["p-label","PO Tabs 1"],["p-label","PO Tabs 2"]],template:function(o,i){o&1&&(Cl(0,"po-tabs"),Hl(1,"po-tab",0)(2,"po-tab",1),og());},dependencies:[ofe,lfe],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tabs Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tabs-basic/sample-po-tabs-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tabs-basic/sample-po-tabs-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tabs-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Oe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Te],encapsulation:2})}return a})();var Ne=["poTab"];function Le(a,q){if(a&1){let r=gx();Cl(0,"po-tab",9),dt("p-click",function(){let i=Jy(r).$implicit,d=Ex();return e_(d.onClick(i))}),Cl(1,"div",10),qx(2),og()();}if(a&2){let r=q.$implicit,o=q.$index;ZE("p-active",r.active)("p-disabled",r.disabled)("p-hide",r.hide)("p-label",r.label),Lp(2),dg("Tab Content ",o);}}var Ee=(()=>{class a{poNotification=f(Xp);poTab;tabsFieldsForm=[{property:"label",divider:"TAB",required:true,gridColumns:6},{property:"click",gridColumns:6},{property:"active",type:"boolean",gridColumns:4},{property:"disabled",type:"boolean",gridColumns:4},{property:"hide",type:"boolean",gridColumns:4}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];size="medium";tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth;}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4);}onClick(r){r.click&&r.click();}restore(){this.size="medium",this.tabs=[],this.poTab.quantityTabsButton=0;}showClick(r){this.poNotification.success(`Action clicked: ${r}`);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs"]],viewQuery:function(o,i){if(o&1&&zl(Ne,7),o&2){let d;uo(d=fo())&&(i.poTab=d.first);}},standalone:false,decls:12,vars:6,consts:[["poTab",""],["tabsForm",""],[3,"p-size"],[3,"p-active","p-disabled","p-hide","p-label"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Tab",1,"po-md-3",3,"p-click","p-disabled"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],[3,"p-click","p-active","p-disabled","p-hide","p-label"],[1,"po-font-subtitle"]],template:function(o,i){if(o&1){let d=gx();Cl(0,"po-tabs",2,0),cx(2,Le,3,5,"po-tab",3,ax),og(),Hl(4,"po-dynamic-form",4,1),Cl(6,"div",5)(7,"po-button",6),dt("p-click",function(){Jy(d);let l=Sx(5);return i.addTab(l.form.value),e_(l.form.reset())}),og()(),Hl(8,"po-divider"),Cl(9,"po-radio-group",7),gw("ngModelChange",function(l){return Jy(d),Zx(i.size,l)||(i.size=l),e_(l)}),og(),Z0(),Cl(10,"div",5)(11,"po-button",8),dt("p-click",function(){return i.restore()}),og()();}if(o&2){let d=Sx(5);ZE("p-size",i.size),Lp(2),lx(i.tabs),Lp(2),ZE("p-fields",i.tabsFieldsForm)("p-value",i.tabs),Lp(3),ZE("p-disabled",d.form.invalid),Lp(2),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0();}},dependencies:[sY,gk,Qt,_v,ume,Nde,ofe,lfe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tabs Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tabs-labs/sample-po-tabs-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tabs #poTab [p-size]="size">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tabs-labs/sample-po-tabs-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tabs-labs"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ze,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ee],encapsulation:2})}return a})();var _e=(()=>{class a{poNotificationService=f(Xp);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:"Economy",value:1},{label:"Business",value:2},{label:"Comfort",value:3},{label:"First Class",value:4}];classTrainOptions=[{label:"Economy",value:1},{label:"Cabin",value:2},{label:"First Class",value:3}];flightCompanyOptions=[{label:"American Airlines",value:"american"},{label:"Avianca",value:"avianca"},{label:"Delta Airlines",value:"delta"},{label:"Emirates",value:"emirates"},{label:"Latam",value:"latam"}];trainCompanyOptions=[{label:"EuroStar",value:"eurostar"},{label:"OBB",value:"obb"},{label:"Renfe",value:"renfe"},{label:"TrenItalia",value:"trenitalia"}];transportationOptions=[{label:"Flights",value:"flight"},{label:"Trains",value:"train"}];bankBillet(){this.poNotificationService.warning("Bank billet sent to email");}isPaymentEnable(r,o,i){return r.valid&&this.transportation==="flight"&&i.valid||r.valid&&this.transportation==="train"&&o.valid}getTotalCost(){return this.transportation==="flight"&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation==="train"&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,"Fields are missing")}payment(){this.poNotificationService.success("Order confirmed");}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel"]],standalone:false,decls:47,vars:26,consts:[["formTravel","ngForm"],["formTrain","ngForm"],["formFlight","ngForm"],["formCreditCard","ngForm"],["p-active","","p-label","Destination"],[1,"po-row"],["name","origin","p-label","Origin","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["name","departDate","p-label","Depart","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","returnDate","p-label","Return","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","transportation","p-label","Transportation","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Trains",3,"p-hide"],["name","trainCompany","p-label","Tran Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classTrain","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Flights",3,"p-hide"],["name","flightCompany","p-label","Flight Company","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","classFlight","p-label","Class","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Payment",3,"p-disabled"],["p-label","Total Cost",1,"po-md-6",3,"p-value"],["p-active","","p-label","Credit Card"],["name","cardName","p-clean","","p-label","Name on Card","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","card","p-clean","","p-label","Card Number","p-mask","9999 9999 9999 9999","p-required","",1,"po-md-8","po-lg-6",3,"ngModelChange","ngModel"],["name","expiryMonth","p-clean","","p-label","Expiry Month","p-mask","19","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","expiryYear","p-clean","","p-label","Year","p-mask","2999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["name","cvv","p-clean","","p-label","CVV","p-mask","9999","p-required","",1,"po-md-2",3,"ngModelChange","ngModel"],["p-label","Pay now",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Bank Billet"],["p-label","Generate Bank Billet",1,"po-md-4",3,"p-click","p-disabled"]],template:function(o,i){if(o&1){let d=gx();Cl(0,"po-tabs")(1,"po-tab",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),gw("ngModelChange",function(l){return Jy(d),Zx(i.origin,l)||(i.origin=l),e_(l)}),og(),Z0(),og(),Cl(6,"div",5)(7,"po-input",7),gw("ngModelChange",function(l){return Jy(d),Zx(i.destination,l)||(i.destination=l),e_(l)}),og(),Z0(),og(),Cl(8,"div",5)(9,"po-datepicker",8),gw("ngModelChange",function(l){return Jy(d),Zx(i.departDate,l)||(i.departDate=l),e_(l)}),og(),Z0(),Cl(10,"po-datepicker",9),gw("ngModelChange",function(l){return Jy(d),Zx(i.returnDate,l)||(i.returnDate=l),e_(l)}),og(),Z0(),og(),Cl(11,"div",5)(12,"po-radio-group",10),gw("ngModelChange",function(l){return Jy(d),Zx(i.transportation,l)||(i.transportation=l),e_(l)}),og(),Z0(),og()()(),Cl(13,"po-tab",11)(14,"form",null,1)(16,"div",5)(17,"po-select",12),gw("ngModelChange",function(l){return Jy(d),Zx(i.trainCompany,l)||(i.trainCompany=l),e_(l)}),og(),Z0(),og(),Cl(18,"div",5)(19,"po-select",13),gw("ngModelChange",function(l){return Jy(d),Zx(i.classTrain,l)||(i.classTrain=l),e_(l)}),og(),Z0(),og()()(),Cl(20,"po-tab",14)(21,"form",null,2)(23,"div",5)(24,"po-select",15),gw("ngModelChange",function(l){return Jy(d),Zx(i.flightCompany,l)||(i.flightCompany=l),e_(l)}),og(),Z0(),og(),Cl(25,"div",5)(26,"po-select",16),gw("ngModelChange",function(l){return Jy(d),Zx(i.classFlight,l)||(i.classFlight=l),e_(l)}),og(),Z0(),og()()(),Cl(27,"po-tab",17)(28,"div",5),Hl(29,"po-info",18),og(),Cl(30,"po-tabs")(31,"po-tab",19)(32,"form",null,3)(34,"div",5)(35,"po-input",20),gw("ngModelChange",function(l){return Jy(d),Zx(i.cardName,l)||(i.cardName=l),e_(l)}),og(),Z0(),og(),Cl(36,"div",5)(37,"po-input",21),gw("ngModelChange",function(l){return Jy(d),Zx(i.card,l)||(i.card=l),e_(l)}),og(),Z0(),og(),Cl(38,"div",5)(39,"po-input",22),gw("ngModelChange",function(l){return Jy(d),Zx(i.expiryMonth,l)||(i.expiryMonth=l),e_(l)}),og(),Z0(),Cl(40,"po-input",23),gw("ngModelChange",function(l){return Jy(d),Zx(i.expiryYear,l)||(i.expiryYear=l),e_(l)}),og(),Z0(),Cl(41,"po-input",24),gw("ngModelChange",function(l){return Jy(d),Zx(i.cvv,l)||(i.cvv=l),e_(l)}),og(),Z0(),og(),Cl(42,"div",5)(43,"po-button",25),dt("p-click",function(){return i.payment()}),og()()()(),Cl(44,"po-tab",26)(45,"div",5)(46,"po-button",27),dt("p-click",function(){return i.bankBillet()}),og()()()()()();}if(o&2){let d=Sx(3),g=Sx(15),l=Sx(22),Fe=Sx(33);Lp(5),pw("ngModel",i.origin),X0(),Lp(2),pw("ngModel",i.destination),X0(),Lp(2),pw("ngModel",i.departDate),X0(),Lp(),pw("ngModel",i.returnDate),ZE("p-min-date",i.departDate),X0(),Lp(2),pw("ngModel",i.transportation),ZE("p-options",i.transportationOptions),X0(),Lp(),ZE("p-hide",i.transportation!=="train"),Lp(4),pw("ngModel",i.trainCompany),ZE("p-options",i.trainCompanyOptions),X0(),Lp(2),pw("ngModel",i.classTrain),ZE("p-options",i.classTrainOptions),X0(),Lp(),ZE("p-hide",i.transportation!=="flight"),Lp(4),pw("ngModel",i.flightCompany),ZE("p-options",i.flightCompanyOptions),X0(),Lp(2),pw("ngModel",i.classFlight),ZE("p-options",i.classFlightOptions),X0(),Lp(),ZE("p-disabled",i.isPaymentEnable(d,g,l)===false),Lp(2),ZE("p-value",i.getTotalCost()),Lp(6),pw("ngModel",i.cardName),X0(),Lp(2),pw("ngModel",i.card),X0(),Lp(2),pw("ngModel",i.expiryMonth),X0(),Lp(),pw("ngModel",i.expiryYear),X0(),Lp(),pw("ngModel",i.cvv),X0(),Lp(2),ZE("p-disabled",!Fe.form.valid||!i.totalCost),Lp(3),ZE("p-disabled",!i.totalCost);}},dependencies:[lY,sY,aY,gk,fk,Qt,Wde,q3,Nde,nme,sme,ofe,lfe],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-travel-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tabs - Travel"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tabs-travel/sample-po-tabs-travel.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-tabs>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tabs-travel/sample-po-tabs-travel.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tabs-travel"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,je,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,_e],encapsulation:2})}return a})();var Qe=["poTab"];function Ze(a,q){if(a&1){let r=gx();Cl(0,"po-tab",2),dN(1,"date"),Cl(2,"div",6)(3,"div",4)(4,"div",3)(5,"div",7)(6,"po-widget")(7,"div",3)(8,"div",8),Hl(9,"po-avatar",9),og(),Cl(10,"div",10)(11,"div",11),Hl(12,"po-info",12),og(),Cl(13,"div",11),Hl(14,"po-info",13),og(),Cl(15,"div",11),Hl(16,"po-info",14),og()()()()(),Cl(17,"div",15)(18,"po-widget",16)(19,"div",17),qx(20,"TFace Conference Week"),og(),Cl(21,"div",18),qx(22,"From 21th September until 26th setember 2018"),og(),Hl(23,"po-divider"),Cl(24,"div",3)(25,"div",19)(26,"span",20),Hl(27,"po-icon",21),og(),Cl(28,"span",22),qx(29),dN(30,"date"),og()(),Cl(31,"div",19)(32,"span",20),Hl(33,"po-icon",23),og(),Cl(34,"span",24),qx(35,"Av. Braz Leme, 1000, Santana"),og()()(),Cl(36,"div",25)(37,"po-button",26),dt("p-click",function(){let i=Jy(r).$implicit,d=Ex();return e_(d.confirmSubscription(i))}),og()()()()()()()();}if(a&2){let r=q.$implicit;ZE("p-label",Qx(pN(1,10,r.createdDate,"MMM d")))("p-active",r.id==="1")("p-hide",r.subscribe),Lp(9),ZE("p-src",Jx("assets/graphics/",r.photo)),Lp(3),ZE("p-value",r.name),Lp(2),ZE("p-value",r.email),Lp(2),ZE("p-value",r.description),Lp(13),dw(pN(30,13,r.createdDate,"MM/dd/yyyy"));}}var ke=(()=>{class a{poNotification=f(Xp);poTab;disableRestoreBtn=true;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3);}cancelSubscription(){this.disableRestoreBtn=true,this.speakers.forEach(r=>r.subscribe=false);}confirmSubscription(r){this.disableRestoreBtn=false,r.subscribe=true,this.poNotification.success("Registration completed successfully. See you soon!");}getSpeakers(){return [{id:"1",name:"Peter Benjamin Parker",email:"peter.parker@po-ui.com.br",photo:"avatar1.png",description:"Nodejs developer with 4 years experience",createdDate:"2018-09-21T20:21:06.990Z",subscribe:"false"},{id:"2",name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png",description:"Angular developer with 2 years experience",createdDate:"2018-09-22T20:21:06.990Z",subscribe:"false"},{id:"3",name:"Anthony Stark",email:"anthony.stark@po-ui.com.br",photo:"avatar3.png",description:"Javascript developer with 8 years experience",createdDate:"2018-09-23T20:21:06.990Z",subscribe:"false"},{id:"4",name:"Carol Danvers",email:"carol.danvers@po-ui.com.br",photo:"avatar4.png",description:"Full stack developer with 2 years experience",createdDate:"2018-09-24T20:21:06.990Z",subscribe:"false"},{id:"5",name:"Wagner Dantas",email:"wagner.dantas@po-ui.com.br",photo:"avatar5.png",description:"Front-end Engineer developer with 8 years experience",createdDate:"2018-09-25T20:21:06.990Z",subscribe:"false"},{id:"6",name:"Kaiam Alexandre",email:"kaiam.alexandre@po-ui.com.br",photo:"avatar6.png",description:"Javascript developer with 12 years experience",createdDate:"2018-09-26T20:21:06.990Z",subscribe:"false"}]}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf"]],viewQuery:function(o,i){if(o&1&&zl(Qe,7),o&2){let d;uo(d=fo())&&(i.poTab=d.first);}},standalone:false,decls:10,vars:1,consts:[["poTab",""],["p-title","Check the speaker's list"],[3,"p-label","p-active","p-hide"],[1,"po-row"],[1,"po-offset-lg-1","po-offset-xl-1","po-lg-10"],["p-label","Cancel Subscription",1,"po-offset-lg-8","po-offset-xl-8","po-lg-4",3,"p-click","p-disabled"],[1,"po-row","po-mt-5"],[1,"po-lg-8","po-mb-2"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Speaker",3,"p-value"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-label","Description",1,"po-mb-5",3,"p-value"],[1,"po-lg-4","po-mb-2"],["p-title","Subscription"],[1,"po-font-subtitle","po-mb-2"],[1,"po-font-text-bold","po-mb-5"],[1,"po-md-6","po-lg-12"],[1,"po-mr-1","po-font-subtitle"],["p-icon","po-icon an an-calendar-dots"],[1,"po-font-text","po-mb-2"],["p-icon","po-icon an an-map-pin"],[1,"po-font-text"],[1,"po-mt-5"],["p-label","Subscription",1,"po-mt-5",3,"p-click"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",1)(1,"po-tabs",null,0),cx(3,Ze,38,16,"po-tab",2,ax),og(),Hl(5,"po-divider"),Cl(6,"div",3)(7,"div",4)(8,"div",3)(9,"po-button",5),dt("p-click",function(){return i.cancelSubscription()}),og()()()()()),o&2&&(Lp(3),lx(i.speakers),Lp(6),ZE("p-disabled",i.disableRestoreBtn));},dependencies:[_3,Qt,_v,lt,sme,SNe,ofe,lfe,ONe,NO],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-business-conf-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Tabs - Business Conference"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Check the speaker's list">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-tabs-business-conf"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ke],encapsulation:2})}return a})();var Me=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-tabs-doc"]],standalone:false,decls:399,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],["href","/documentation/po-tab"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTabsModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-tabs"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoTabsComponent"),og()(),Cl(12,"div",2)(13,"h4"),qx(14,"Tokens customiz\xE1veis"),og(),Cl(15,"p"),qx(16,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(17,"blockquote")(18,"p"),qx(19,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(20,"a",6),qx(21,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(22,"."),og()(),Cl(23,"table")(24,"thead")(25,"tr")(26,"th"),qx(27,"Propriedade"),og(),Cl(28,"th"),qx(29,"Descri\xE7\xE3o"),og(),Cl(30,"th"),qx(31,"Valor Padr\xE3o"),og()()(),Cl(32,"tbody")(33,"tr")(34,"td")(35,"strong"),qx(36,"Default Values"),og()(),Hl(37,"td")(38,"td"),og(),Cl(39,"tr")(40,"td")(41,"code"),qx(42,"--background"),og()(),Cl(43,"td"),qx(44,"Cor de background"),og(),Cl(45,"td")(46,"code"),qx(47,"var(--color-transparent)"),og()()(),Cl(48,"tr")(49,"td")(50,"code"),qx(51,"--background-item-default"),og()(),Cl(52,"td"),qx(53,"Cor de background do item padr\xE3o"),og(),Cl(54,"td")(55,"code"),qx(56,"var(--color-transparent)"),og()()(),Cl(57,"tr")(58,"td")(59,"code"),qx(60,"--border-radius"),og()(),Cl(61,"td"),qx(62,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(63,"td")(64,"code"),qx(65,"var(--border-radius-md)"),og()()(),Cl(66,"tr")(67,"td")(68,"code"),qx(69,"--color"),og()(),Cl(70,"td"),qx(71,"Cor da fonte padr\xE3o"),og(),Cl(72,"td")(73,"code"),qx(74,"var(--color-action-default)"),og()()(),Cl(75,"tr")(76,"td")(77,"code"),qx(78,"--color-baseline"),og()(),Cl(79,"td"),qx(80,"Cor para box-shadow"),og(),Cl(81,"td")(82,"code"),qx(83,"var(--color-neutral-light-20)"),og()()(),Cl(84,"tr")(85,"td")(86,"code"),qx(87,"--font-family"),og()(),Cl(88,"td"),qx(89,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(90,"td")(91,"code"),qx(92,"var(--font-family-theme)"),og()()(),Cl(93,"tr")(94,"td")(95,"code"),qx(96,"--font-size"),og()(),Cl(97,"td"),qx(98,"Tamanho da fonte"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--font-size-default)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--font-weight"),og()(),Cl(106,"td"),qx(107,"Peso da fonte"),og(),Cl(108,"td")(109,"code"),qx(110,"var(--font-weight-bold)"),og()()(),Cl(111,"tr")(112,"td")(113,"code"),qx(114,"--margin-tabs-container-left"),og()(),Cl(115,"td"),qx(116,"Margem lateral esquerda do componente quando usado dentro de um "),Cl(117,"code"),qx(118,"page-default"),og()(),Cl(119,"td")(120,"code"),qx(121,"var(--spacing-md)"),og()()(),Cl(122,"tr")(123,"td")(124,"code"),qx(125,"--margin-tabs-container-right"),og()(),Cl(126,"td"),qx(127,"Margem lateral direita do componente quando usado dentro de um "),Cl(128,"code"),qx(129,"page-default"),og()(),Cl(130,"td")(131,"code"),qx(132,"-16px"),og()()(),Cl(133,"tr")(134,"td")(135,"code"),qx(136,"--padding-tabs-header"),og()(),Cl(137,"td"),qx(138,"Padding do valor lateral das abas"),og(),Cl(139,"td")(140,"code"),qx(141,"var(--spacing-sm)"),og()()(),Cl(142,"tr")(143,"td")(144,"code"),qx(145,"--margin-tabs-first-child"),og()(),Cl(146,"td"),qx(147,"Margem lateral da primeira aba"),og(),Cl(148,"td")(149,"code"),qx(150,"var(--spacing-md)"),og()()(),Cl(151,"tr")(152,"td")(153,"code"),qx(154,"--margin-tabs-last-child"),og()(),Cl(155,"td"),qx(156,"Margem lateral da ultima aba"),og(),Cl(157,"td")(158,"code"),qx(159,"var(--spacing-md)"),og()()(),Cl(160,"tr")(161,"td")(162,"strong"),qx(163,"Disabled"),og()(),Hl(164,"td")(165,"td"),og(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--color-disabled"),og()(),Cl(170,"td"),qx(171,"Cor da fonte no estado disabilitado"),og(),Cl(172,"td")(173,"code"),qx(174,"var(--color-action-disabled)"),og()()(),Cl(175,"tr")(176,"td")(177,"code"),qx(178,"--background-item-disabled"),og(),qx(179,"\xA0"),og(),Cl(180,"td"),qx(181,"Cor de background do item desabilitado"),og(),Cl(182,"td")(183,"code"),qx(184,"var(--color-neutral-light-10)"),og()()(),Cl(185,"tr")(186,"td")(187,"strong"),qx(188,"Focused"),og()(),Hl(189,"td")(190,"td"),og(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Hover"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-hover"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado hover"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-brand-01-darkest)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-item-hover"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado de hover"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-brand-01-lightest)"),og()()(),Cl(224,"tr")(225,"td")(226,"strong"),qx(227,"Selected"),og()(),Hl(228,"td")(229,"td"),og(),Cl(230,"tr")(231,"td")(232,"code"),qx(233,"--background-item-selected"),og()(),Cl(234,"td"),qx(235,"Cor de background do item selecionado"),og(),Cl(236,"td")(237,"code"),qx(238,"var(--color-brand-01-lightest)"),og()()()()(),Cl(239,"p"),Hl(240,"br"),qx(241," O componente "),Cl(242,"code"),qx(243,"po-tabs"),og(),qx(244," \xE9 respons\xE1vel por agrupar "),Cl(245,"a",7),qx(246,"abas"),og(),qx(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),og(),Cl(248,"p"),qx(249,"O componente exibir\xE1 as abas enquanto houver espa\xE7o na tela, caso a aba ultrapasse o limite da tela a mesma ser\xE1 agrupada em um dropdown."),og(),Cl(250,"blockquote")(251,"p"),qx(252,"As abas que estiverem agrupadas ser\xE3o dispostas numa cascata suspensa que ser\xE1 exibida ao clicar no bot\xE3o."),og()(),Cl(253,"p"),qx(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),og(),Cl(255,"h4"),qx(256,"Boas pr\xE1ticas"),og(),Cl(257,"ul")(258,"li"),qx(259,"Evite utilizar um "),Cl(260,"code"),qx(261,"po-tabs"),og(),qx(262," dentro de outro "),Cl(263,"code"),qx(264,"po-tabs"),og(),qx(265,";"),og(),Cl(266,"li"),qx(267,"Evite utilizar uma quantidade excessiva de abas, pois ir\xE1 gerar um "),Cl(268,"em"),qx(269,"scroll"),og(),qx(270," muito longo no "),Cl(271,"code"),qx(272,"dropdown"),og(),qx(273,";"),og(),Cl(274,"li"),qx(275,"Evite "),Cl(276,"code"),qx(277,"labels"),og(),qx(278," extensos para as "),Cl(279,"code"),qx(280,"tabs"),og(),qx(281," pois podem quebrar seu "),Cl(282,"em"),qx(283,"layout"),og(),qx(284,", use "),Cl(285,"code"),qx(286,"labels"),og(),qx(287," diretas, curtas e intuitivas."),og()()(),Cl(288,"div",8)(289,"h4",9),qx(290,"Seletor"),og(),Cl(291,"pre",10),qx(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),og()(),Cl(293,"h4",11),qx(294,"Propriedades"),og(),Cl(295,"table",12)(296,"tr",13)(297,"th",14),qx(298,"Nome"),og(),Cl(299,"th",14),qx(300,"Tipo"),og(),Cl(301,"th",14),qx(302,"Padr\xE3o"),og(),Cl(303,"th",14),qx(304,"Descri\xE7\xE3o"),og()(),Cl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),qx(309," p-size"),Hl(310,"br"),og()()(),Cl(311,"td",19)(312,"code",20),qx(313,"string"),og()(),Cl(314,"td",21)(315,"p")(316,"code"),qx(317,"medium"),og()()(),Cl(318,"td",22)(319,"em")(320,"strong"),qx(321,"(opcional)"),og()(),Cl(322,"p"),qx(323,"Define o tamanho do componente:"),og(),Cl(324,"ul")(325,"li")(326,"code"),qx(327,"small"),og(),qx(328,": altura dos tabs como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(329,"li")(330,"code"),qx(331,"medium"),og(),qx(332,": altura dos tabs como 44px."),og()(),Cl(333,"blockquote")(334,"p"),qx(335,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(336,"code"),qx(337,"medium"),og(),qx(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(339,"a",23),qx(340,"po-theme"),og(),qx(341,"."),og()()()()(),Cl(342,"h3",11),qx(343,"M\xE9todos"),og(),Cl(344,"table",24)(345,"tr",15)(346,"th",25)(347,"div",17)(348,"h4")(349,"span",18),qx(350," setQuantityTabsButton "),og()()()()(),Cl(351,"tr",22)(352,"td",22)(353,"p"),qx(354,"Fun\xE7\xE3o que atribui o n\xFAmero de tabs fora do dropdown."),og(),Cl(355,"p"),qx(356,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(357,"pre")(358,"code"),qx(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),og()()()()(),Hl(360,"br"),Cl(361,"table",24)(362,"tr",15)(363,"th",25)(364,"div",17)(365,"h4")(366,"span",18),qx(367," activateTab "),og()()()()(),Cl(368,"tr",22)(369,"td",22)(370,"p"),qx(371,"Ativa a aba correspondente ao "),Cl(372,"code"),qx(373,"id"),og(),qx(374," informado."),og(),Cl(375,"p"),qx(376,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(377,"pre")(378,"code"),qx(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),og()()()()(),Cl(380,"h5")(381,"b"),qx(382,"Par\xE2metros"),og()(),Cl(383,"table",12)(384,"tr",13)(385,"th",14),qx(386,"Nome"),og(),Cl(387,"th",14),qx(388,"Tipo"),og(),Cl(389,"th",14),qx(390,"Descri\xE7\xE3o"),og()(),Cl(391,"tr",15)(392,"td",16),qx(393," id"),og(),Hl(394,"td",19),Cl(395,"td",22)(396,"p"),qx(397,"Identificador \xFAnico da aba a ser ativada."),og()()()(),Hl(398,"br"),og());},dependencies:[Zr],encapsulation:2})}return a})();var De=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Tabs",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-tabs-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-tabs-basic-view")(6,"sample-po-tabs-labs-view")(7,"sample-po-tabs-travel-view")(8,"sample-po-tabs-business-conf-view"),og()()()),o&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ye,we,Pe,xe,Me],encapsulation:2})}return a})();var Ke=[{path:"",component:De}],Be=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(Ke),bL]})}return a})();var At=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,Be]})}return a})();export{At as DocPoTabsModule};