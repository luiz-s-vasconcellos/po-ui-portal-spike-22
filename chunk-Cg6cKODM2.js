import{$r as Vx,Ci as eP,Cr as Nx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,Kt as dt,M as ECe,Mi as gg,Ni as he,Nt as Y0e,P as Eu,Qi as oN,Qn as EN,Sa as yN,Ti as f0,Ui as lg,Un as Ax,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_a as wN,_r as Ml,an as k4,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,dr as LN,ea as p0,ga as w,gi as bw,kr as PN,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,ut as Obe,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,xa as xx}from"./main-NT5YGKBQ.js";var Te=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(o,i){o&1&&(Ml(0,`po-tabs`),ql(1,`po-tab`,0)(2,`po-tab`,1),lg())},dependencies:[SCe,ECe],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tabs Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tabs-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Te],encapsulation:2,changeDetection:1})}return a})();var Ne=[`poTab`];function Le(a,q){if(a&1){let r=Vx();Ml(0,`po-tab`,9),ht(`p-click`,function(){let i=Qy(r).$implicit;return Jy(zx().onClick(i))}),Ml(1,`div`,10),mN(2),lg()()}if(a&2){let r=q.$implicit,o=q.$index;cw(`p-active`,r.active)(`p-disabled`,r.disabled)(`p-hide`,r.hide)(`p-label`,r.label),Up(2),gg(`Tab Content `,o)}}var Ee=(()=>{class a{poNotification=f(Eu);poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:6},{property:`click`,gridColumns:6},{property:`active`,type:`boolean`,gridColumns:4},{property:`disabled`,type:`boolean`,gridColumns:4},{property:`hide`,type:`boolean`,gridColumns:4}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(r){r.click&&r.click()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(r){this.poNotification.success(`Action clicked: ${r}`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-labs`]],viewQuery:function(o,i){if(o&1&&Zl(Ne,7),o&2){let d;lo(d=uo())&&(i.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-active`,`p-disabled`,`p-hide`,`p-label`],[1,`po-font-subtitle`]],template:function(o,i){if(o&1){let d=Vx();Ml(0,`po-tabs`,2,0),xx(2,Le,3,5,`po-tab`,3,Ax),lg(),ql(4,`po-dynamic-form`,4,1),Ml(6,`div`,5)(7,`po-button`,6),ht(`p-click`,function(){Qy(d);let l=Yx(5);return i.addTab(l.form.value),Jy(l.form.reset())}),lg()(),ql(8,`po-divider`),Ml(9,`po-radio-group`,7),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.size,l)||(i.size=l),Jy(l)}),lg(),f0(),Ml(10,`div`,5)(11,`po-button`,8),ht(`p-click`,function(){return i.restore()}),lg()()}if(o&2){let d=Yx(5);cw(`p-size`,i.size),Up(2),Nx(i.tabs),Up(2),cw(`p-fields`,i.tabsFieldsForm)(`p-value`,i.tabs),Up(3),cw(`p-disabled`,d.form.invalid),Up(2),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0()}},dependencies:[wY,Vk,Zt,nb,Obe,q0e,SCe,ECe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tabs Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-tabs #poTab [p-size]="size">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tabs-labs`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ze,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ee],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{poNotificationService=f(Eu);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(r,o,i){return r.valid&&this.transportation===`flight`&&i.valid||r.valid&&this.transportation===`train`&&o.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-travel`]],standalone:!1,decls:47,vars:26,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(o,i){if(o&1){let d=Vx();Ml(0,`po-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.origin,l)||(i.origin=l),Jy(l)}),lg(),f0(),lg(),Ml(6,`div`,5)(7,`po-input`,7),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.destination,l)||(i.destination=l),Jy(l)}),lg(),f0(),lg(),Ml(8,`div`,5)(9,`po-datepicker`,8),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.departDate,l)||(i.departDate=l),Jy(l)}),lg(),f0(),Ml(10,`po-datepicker`,9),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.returnDate,l)||(i.returnDate=l),Jy(l)}),lg(),f0(),lg(),Ml(11,`div`,5)(12,`po-radio-group`,10),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.transportation,l)||(i.transportation=l),Jy(l)}),lg(),f0(),lg()()(),Ml(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.trainCompany,l)||(i.trainCompany=l),Jy(l)}),lg(),f0(),lg(),Ml(18,`div`,5)(19,`po-select`,13),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.classTrain,l)||(i.classTrain=l),Jy(l)}),lg(),f0(),lg()()(),Ml(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.flightCompany,l)||(i.flightCompany=l),Jy(l)}),lg(),f0(),lg(),Ml(25,`div`,5)(26,`po-select`,16),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.classFlight,l)||(i.classFlight=l),Jy(l)}),lg(),f0(),lg()()(),Ml(27,`po-tab`,17)(28,`div`,5),ql(29,`po-info`,18),lg(),Ml(30,`po-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.cardName,l)||(i.cardName=l),Jy(l)}),lg(),f0(),lg(),Ml(36,`div`,5)(37,`po-input`,21),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.card,l)||(i.card=l),Jy(l)}),lg(),f0(),lg(),Ml(38,`div`,5)(39,`po-input`,22),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.expiryMonth,l)||(i.expiryMonth=l),Jy(l)}),lg(),f0(),Ml(40,`po-input`,23),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.expiryYear,l)||(i.expiryYear=l),Jy(l)}),lg(),f0(),Ml(41,`po-input`,24),Mw(`ngModelChange`,function(l){return Qy(d),yN(i.cvv,l)||(i.cvv=l),Jy(l)}),lg(),f0(),lg(),Ml(42,`div`,5)(43,`po-button`,25),ht(`p-click`,function(){return i.payment()}),lg()()()(),Ml(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),ht(`p-click`,function(){return i.bankBillet()}),lg()()()()()()}if(o&2){let d=Yx(3),g=Yx(15),l=Yx(22),Fe=Yx(33);Up(5),Tw(`ngModel`,i.origin),p0(),Up(2),Tw(`ngModel`,i.destination),p0(),Up(2),Tw(`ngModel`,i.departDate),p0(),Up(),Tw(`ngModel`,i.returnDate),cw(`p-min-date`,i.departDate),p0(),Up(2),Tw(`ngModel`,i.transportation),cw(`p-options`,i.transportationOptions),p0(),Up(),cw(`p-hide`,i.transportation!==`train`),Up(4),Tw(`ngModel`,i.trainCompany),cw(`p-options`,i.trainCompanyOptions),p0(),Up(2),Tw(`ngModel`,i.classTrain),cw(`p-options`,i.classTrainOptions),p0(),Up(),cw(`p-hide`,i.transportation!==`flight`),Up(4),Tw(`ngModel`,i.flightCompany),cw(`p-options`,i.flightCompanyOptions),p0(),Up(2),Tw(`ngModel`,i.classFlight),cw(`p-options`,i.classFlightOptions),p0(),Up(),cw(`p-disabled`,i.isPaymentEnable(d,g,l)===!1),Up(2),cw(`p-value`,i.getTotalCost()),Up(6),Tw(`ngModel`,i.cardName),p0(),Up(2),Tw(`ngModel`,i.card),p0(),Up(2),Tw(`ngModel`,i.expiryMonth),p0(),Up(),Tw(`ngModel`,i.expiryYear),p0(),Up(),Tw(`ngModel`,i.cvv),p0(),Up(2),cw(`p-disabled`,!Fe.form.valid||!i.totalCost),Up(3),cw(`p-disabled`,!i.totalCost)}},dependencies:[IY,wY,CY,Vk,kk,Zt,Y0e,lU,q0e,Tbe,kbe,SCe,ECe],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tabs - Travel`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-tabs>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tabs-travel`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,je,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,_e],encapsulation:2,changeDetection:1})}return a})();var Qe=[`poTab`];function Ze(a,q){if(a&1){let r=Vx();Ml(0,`po-tab`,2),PN(1,`date`),Ml(2,`div`,6)(3,`div`,4)(4,`div`,3)(5,`div`,7)(6,`po-widget`)(7,`div`,3)(8,`div`,8),ql(9,`po-avatar`,9),lg(),Ml(10,`div`,10)(11,`div`,11),ql(12,`po-info`,12),lg(),Ml(13,`div`,11),ql(14,`po-info`,13),lg(),Ml(15,`div`,11),ql(16,`po-info`,14),lg()()()()(),Ml(17,`div`,15)(18,`po-widget`,16)(19,`div`,17),mN(20,`TFace Conference Week`),lg(),Ml(21,`div`,18),mN(22,`From 21th September until 26th setember 2018`),lg(),ql(23,`po-divider`),Ml(24,`div`,3)(25,`div`,19)(26,`span`,20),ql(27,`po-icon`,21),lg(),Ml(28,`span`,22),mN(29),PN(30,`date`),lg()(),Ml(31,`div`,19)(32,`span`,20),ql(33,`po-icon`,23),lg(),Ml(34,`span`,24),mN(35,`Av. Braz Leme, 1000, Santana`),lg()()(),Ml(36,`div`,25)(37,`po-button`,26),ht(`p-click`,function(){let i=Qy(r).$implicit;return Jy(zx().confirmSubscription(i))}),lg()()()()()()()()}if(a&2){let r=q.$implicit;cw(`p-label`,EN(LN(1,10,r.createdDate,`MMM d`)))(`p-active`,r.id===`1`)(`p-hide`,r.subscribe),Up(9),cw(`p-src`,wN(`assets/graphics/`,r.photo)),Up(3),cw(`p-value`,r.name),Up(2),cw(`p-value`,r.email),Up(2),cw(`p-value`,r.description),Up(13),bw(LN(30,13,r.createdDate,`MM/dd/yyyy`))}}var ke=(()=>{class a{poNotification=f(Eu);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(r=>r.subscribe=!1)}confirmSubscription(r){this.disableRestoreBtn=!1,r.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-business-conf`]],viewQuery:function(o,i){if(o&1&&Zl(Qe,7),o&2){let d;lo(d=uo())&&(i.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(o,i){o&1&&(Ml(0,`po-page-default`,1)(1,`po-tabs`,null,0),xx(3,Ze,38,16,`po-tab`,2,Ax),lg(),ql(5,`po-divider`),Ml(6,`div`,3)(7,`div`,4)(8,`div`,3)(9,`po-button`,5),ht(`p-click`,function(){return i.cancelSubscription()}),lg()()()()()),o&2&&(Up(3),Nx(i.speakers),Up(6),cw(`p-disabled`,i.disableRestoreBtn))},dependencies:[k4,Zt,nb,dt,kbe,V8e,SCe,ECe,$8e,eP],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Tabs - Business Conference`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Check the speaker's list">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-tabs-business-conf`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ge,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ke],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-tabs-doc`]],standalone:!1,decls:399,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(o,i){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTabsModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-tabs`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoTabsComponent`),lg()(),Ml(12,`div`,2)(13,`h4`),mN(14,`Tokens customizáveis`),lg(),Ml(15,`p`),mN(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(17,`blockquote`)(18,`p`),mN(19,`Para maiores informações, acesse o guia `),Ml(20,`a`,6),mN(21,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(22,`.`),lg()(),Ml(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),mN(27,`Propriedade`),lg(),Ml(28,`th`),mN(29,`Descrição`),lg(),Ml(30,`th`),mN(31,`Valor Padrão`),lg()()(),Ml(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),mN(36,`Default Values`),lg()(),ql(37,`td`)(38,`td`),lg(),Ml(39,`tr`)(40,`td`)(41,`code`),mN(42,`--background`),lg()(),Ml(43,`td`),mN(44,`Cor de background`),lg(),Ml(45,`td`)(46,`code`),mN(47,`var(--color-transparent)`),lg()()(),Ml(48,`tr`)(49,`td`)(50,`code`),mN(51,`--background-item-default`),lg()(),Ml(52,`td`),mN(53,`Cor de background do item padrão`),lg(),Ml(54,`td`)(55,`code`),mN(56,`var(--color-transparent)`),lg()()(),Ml(57,`tr`)(58,`td`)(59,`code`),mN(60,`--border-radius`),lg()(),Ml(61,`td`),mN(62,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(63,`td`)(64,`code`),mN(65,`var(--border-radius-md)`),lg()()(),Ml(66,`tr`)(67,`td`)(68,`code`),mN(69,`--color`),lg()(),Ml(70,`td`),mN(71,`Cor da fonte padrão`),lg(),Ml(72,`td`)(73,`code`),mN(74,`var(--color-action-default)`),lg()()(),Ml(75,`tr`)(76,`td`)(77,`code`),mN(78,`--color-baseline`),lg()(),Ml(79,`td`),mN(80,`Cor para box-shadow`),lg(),Ml(81,`td`)(82,`code`),mN(83,`var(--color-neutral-light-20)`),lg()()(),Ml(84,`tr`)(85,`td`)(86,`code`),mN(87,`--font-family`),lg()(),Ml(88,`td`),mN(89,`Família tipográfica usada`),lg(),Ml(90,`td`)(91,`code`),mN(92,`var(--font-family-theme)`),lg()()(),Ml(93,`tr`)(94,`td`)(95,`code`),mN(96,`--font-size`),lg()(),Ml(97,`td`),mN(98,`Tamanho da fonte`),lg(),Ml(99,`td`)(100,`code`),mN(101,`var(--font-size-default)`),lg()()(),Ml(102,`tr`)(103,`td`)(104,`code`),mN(105,`--font-weight`),lg()(),Ml(106,`td`),mN(107,`Peso da fonte`),lg(),Ml(108,`td`)(109,`code`),mN(110,`var(--font-weight-bold)`),lg()()(),Ml(111,`tr`)(112,`td`)(113,`code`),mN(114,`--margin-tabs-container-left`),lg()(),Ml(115,`td`),mN(116,`Margem lateral esquerda do componente quando usado dentro de um `),Ml(117,`code`),mN(118,`page-default`),lg()(),Ml(119,`td`)(120,`code`),mN(121,`var(--spacing-md)`),lg()()(),Ml(122,`tr`)(123,`td`)(124,`code`),mN(125,`--margin-tabs-container-right`),lg()(),Ml(126,`td`),mN(127,`Margem lateral direita do componente quando usado dentro de um `),Ml(128,`code`),mN(129,`page-default`),lg()(),Ml(130,`td`)(131,`code`),mN(132,`-16px`),lg()()(),Ml(133,`tr`)(134,`td`)(135,`code`),mN(136,`--padding-tabs-header`),lg()(),Ml(137,`td`),mN(138,`Padding do valor lateral das abas`),lg(),Ml(139,`td`)(140,`code`),mN(141,`var(--spacing-sm)`),lg()()(),Ml(142,`tr`)(143,`td`)(144,`code`),mN(145,`--margin-tabs-first-child`),lg()(),Ml(146,`td`),mN(147,`Margem lateral da primeira aba`),lg(),Ml(148,`td`)(149,`code`),mN(150,`var(--spacing-md)`),lg()()(),Ml(151,`tr`)(152,`td`)(153,`code`),mN(154,`--margin-tabs-last-child`),lg()(),Ml(155,`td`),mN(156,`Margem lateral da ultima aba`),lg(),Ml(157,`td`)(158,`code`),mN(159,`var(--spacing-md)`),lg()()(),Ml(160,`tr`)(161,`td`)(162,`strong`),mN(163,`Disabled`),lg()(),ql(164,`td`)(165,`td`),lg(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--color-disabled`),lg()(),Ml(170,`td`),mN(171,`Cor da fonte no estado disabilitado`),lg(),Ml(172,`td`)(173,`code`),mN(174,`var(--color-action-disabled)`),lg()()(),Ml(175,`tr`)(176,`td`)(177,`code`),mN(178,`--background-item-disabled`),lg(),mN(179,`\xA0`),lg(),Ml(180,`td`),mN(181,`Cor de background do item desabilitado`),lg(),Ml(182,`td`)(183,`code`),mN(184,`var(--color-neutral-light-10)`),lg()()(),Ml(185,`tr`)(186,`td`)(187,`strong`),mN(188,`Focused`),lg()(),ql(189,`td`)(190,`td`),lg(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--outline-color-focused`),lg()(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Hover`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-hover`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado hover`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-brand-01-darkest)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-item-hover`),lg()(),Ml(219,`td`),mN(220,`Cor de background no estado de hover`),lg(),Ml(221,`td`)(222,`code`),mN(223,`var(--color-brand-01-lightest)`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`strong`),mN(227,`Selected`),lg()(),ql(228,`td`)(229,`td`),lg(),Ml(230,`tr`)(231,`td`)(232,`code`),mN(233,`--background-item-selected`),lg()(),Ml(234,`td`),mN(235,`Cor de background do item selecionado`),lg(),Ml(236,`td`)(237,`code`),mN(238,`var(--color-brand-01-lightest)`),lg()()()()(),Ml(239,`p`),ql(240,`br`),mN(241,` O componente `),Ml(242,`code`),mN(243,`po-tabs`),lg(),mN(244,` é responsável por agrupar `),Ml(245,`a`,7),mN(246,`abas`),lg(),mN(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),lg(),Ml(248,`p`),mN(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),lg(),Ml(250,`blockquote`)(251,`p`),mN(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),lg()(),Ml(253,`p`),mN(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),lg(),Ml(255,`h4`),mN(256,`Boas práticas`),lg(),Ml(257,`ul`)(258,`li`),mN(259,`Evite utilizar um `),Ml(260,`code`),mN(261,`po-tabs`),lg(),mN(262,` dentro de outro `),Ml(263,`code`),mN(264,`po-tabs`),lg(),mN(265,`;`),lg(),Ml(266,`li`),mN(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Ml(268,`em`),mN(269,`scroll`),lg(),mN(270,` muito longo no `),Ml(271,`code`),mN(272,`dropdown`),lg(),mN(273,`;`),lg(),Ml(274,`li`),mN(275,`Evite `),Ml(276,`code`),mN(277,`labels`),lg(),mN(278,` extensos para as `),Ml(279,`code`),mN(280,`tabs`),lg(),mN(281,` pois podem quebrar seu `),Ml(282,`em`),mN(283,`layout`),lg(),mN(284,`, use `),Ml(285,`code`),mN(286,`labels`),lg(),mN(287,` diretas, curtas e intuitivas.`),lg()()(),Ml(288,`div`,8)(289,`h4`,9),mN(290,`Seletor`),lg(),Ml(291,`pre`,10),mN(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),lg()(),Ml(293,`h4`,11),mN(294,`Propriedades`),lg(),Ml(295,`table`,12)(296,`tr`,13)(297,`th`,14),mN(298,`Nome`),lg(),Ml(299,`th`,14),mN(300,`Tipo`),lg(),Ml(301,`th`,14),mN(302,`Padrão`),lg(),Ml(303,`th`,14),mN(304,`Descrição`),lg()(),Ml(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),mN(309,` p-size`),ql(310,`br`),lg()()(),Ml(311,`td`,19)(312,`code`,20),mN(313,`string`),lg()(),Ml(314,`td`,21)(315,`p`)(316,`code`),mN(317,`medium`),lg()()(),Ml(318,`td`,22)(319,`em`)(320,`strong`),mN(321,`(opcional)`),lg()(),Ml(322,`p`),mN(323,`Define o tamanho do componente:`),lg(),Ml(324,`ul`)(325,`li`)(326,`code`),mN(327,`small`),lg(),mN(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(329,`li`)(330,`code`),mN(331,`medium`),lg(),mN(332,`: altura dos tabs como 44px.`),lg()(),Ml(333,`blockquote`)(334,`p`),mN(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(336,`code`),mN(337,`medium`),lg(),mN(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(339,`a`,23),mN(340,`po-theme`),lg(),mN(341,`.`),lg()()()()(),Ml(342,`h3`,11),mN(343,`Métodos`),lg(),Ml(344,`table`,24)(345,`tr`,15)(346,`th`,25)(347,`div`,17)(348,`h4`)(349,`span`,18),mN(350,` setQuantityTabsButton `),lg()()()()(),Ml(351,`tr`,22)(352,`td`,22)(353,`p`),mN(354,`Função que atribui o número de tabs fora do dropdown.`),lg(),Ml(355,`p`),mN(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(357,`pre`)(358,`code`),mN(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),lg()()()()(),ql(360,`br`),Ml(361,`table`,24)(362,`tr`,15)(363,`th`,25)(364,`div`,17)(365,`h4`)(366,`span`,18),mN(367,` activateTab `),lg()()()()(),Ml(368,`tr`,22)(369,`td`,22)(370,`p`),mN(371,`Ativa a aba correspondente ao `),Ml(372,`code`),mN(373,`id`),lg(),mN(374,` informado.`),lg(),Ml(375,`p`),mN(376,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(377,`pre`)(378,`code`),mN(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),lg()()()()(),Ml(380,`h5`)(381,`b`),mN(382,`Parâmetros`),lg()(),Ml(383,`table`,12)(384,`tr`,13)(385,`th`,14),mN(386,`Nome`),lg(),Ml(387,`th`,14),mN(388,`Tipo`),lg(),Ml(389,`th`,14),mN(390,`Descrição`),lg()(),Ml(391,`tr`,15)(392,`td`,16),mN(393,` id`),lg(),ql(394,`td`,19),Ml(395,`td`,22)(396,`p`),mN(397,`Identificador único da aba a ser ativada.`),lg()()()(),ql(398,`br`),lg())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-tabs-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-tabs-basic-view`)(6,`sample-po-tabs-labs-view`)(7,`sample-po-tabs-travel-view`)(8,`sample-po-tabs-business-conf-view`),lg()()()),o&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ye,we,Pe,xe,Me],encapsulation:2,changeDetection:1})}return a})()}];var Be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(Ke),NL]})}return a})();var At=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Be]})}return a})();export{At as DocPoTabsModule};