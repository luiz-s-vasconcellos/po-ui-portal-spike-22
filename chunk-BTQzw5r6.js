import{$r as Wx,Bi as kx,Br as RE,Di as he,Dt as aae,Gi as nk,Hn as AN,Kn as BP,Li as kL,Ni as jN,Nt as doe,Pn as yt,Pr as Ox,Q as Pze,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Wi as mg,Wt as ioe,X as N5,Xn as C9,Yn as Bx,ai as aN,ar as FN,b as Au,dr as Hp,dt as Tte,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,ha as wN,hi as e_,i as _a,ii as Zx,ki as ho,kr as Nx,la as ug,li as cE,lr as Hn,mr as IE,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,si as bN,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-TFA52GHY.js";var Te=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(o,i){o&1&&(Ac(0,`po-tabs`),Kc(1,`po-tab`,0)(2,`po-tab`,1),ug())},dependencies:[tae,aae],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tabs Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tabs-basic/sample-po-tabs-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-tabs>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tabs-basic/sample-po-tabs-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-tabs-basic',
  templateUrl: './sample-po-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTabsBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tabs-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Te],encapsulation:2,changeDetection:1})}return a})();var Ne=[`poTab`];function Le(a,q){if(a&1){let r=Bx();Ac(0,`po-tab`,9),pt(`p-click`,function(){let i=Jv(r).$implicit,d=Wx();return e_(d.onClick(i))}),Ac(1,`div`,10),vN(2),ug()()}if(a&2){let r=q.$implicit,o=q.$index;cE(`p-active`,r.active)(`p-disabled`,r.disabled)(`p-hide`,r.hide)(`p-label`,r.label),Hp(2),mg(`Tab Content `,o)}}var Ee=(()=>{class a{poNotification=f(Au);poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:6},{property:`click`,gridColumns:6},{property:`active`,type:`boolean`,gridColumns:4},{property:`disabled`,type:`boolean`,gridColumns:4},{property:`hide`,type:`boolean`,gridColumns:4}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(r){let o=Object.assign({},r);o.click=o.click?this.showClick.bind(this,o.click):void 0,this.tabs.push(o),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(r){r.click&&r.click()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(r){this.poNotification.success(`Action clicked: ${r}`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-labs`]],viewQuery:function(o,i){if(o&1&&Xc(Ne,7),o&2){let d;fo(d=ho())&&(i.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-active`,`p-disabled`,`p-hide`,`p-label`],[1,`po-font-subtitle`]],template:function(o,i){if(o&1){let d=Bx();Ac(0,`po-tabs`,2,0),Ox(2,Le,3,5,`po-tab`,3,Nx),ug(),Kc(4,`po-dynamic-form`,4,1),Ac(6,`div`,5)(7,`po-button`,6),pt(`p-click`,function(){Jv(d);let l=Zx(5);return i.addTab(l.form.value),e_(l.form.reset())}),ug()(),Kc(8,`po-divider`),Ac(9,`po-radio-group`,7),RE(`ngModelChange`,function(l){return Jv(d),DN(i.size,l)||(i.size=l),e_(l)}),ug(),p0(),Ac(10,`div`,5)(11,`po-button`,8),pt(`p-click`,function(){return i.restore()}),ug()()}if(o&2){let d=Zx(5);cE(`p-size`,i.size),Hp(2),kx(i.tabs),Hp(2),cE(`p-fields`,i.tabsFieldsForm)(`p-value`,i.tabs),Hp(3),cE(`p-disabled`,d.form.invalid),Hp(2),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0()}},dependencies:[D9,BP,ni,ob,doe,Cte,tae,aae],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tabs Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tabs-labs/sample-po-tabs-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tabs #poTab [p-size]="size">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tabs-labs/sample-po-tabs-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tabs-labs`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ze,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ee],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{poNotificationService=f(Au);card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(r,o,i){return r.valid&&this.transportation===`flight`&&i.valid||r.valid&&this.transportation===`train`&&o.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-travel`]],standalone:!1,decls:47,vars:26,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(o,i){if(o&1){let d=Bx();Ac(0,`po-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(d),DN(i.origin,l)||(i.origin=l),e_(l)}),ug(),p0(),ug(),Ac(6,`div`,5)(7,`po-input`,7),RE(`ngModelChange`,function(l){return Jv(d),DN(i.destination,l)||(i.destination=l),e_(l)}),ug(),p0(),ug(),Ac(8,`div`,5)(9,`po-datepicker`,8),RE(`ngModelChange`,function(l){return Jv(d),DN(i.departDate,l)||(i.departDate=l),e_(l)}),ug(),p0(),Ac(10,`po-datepicker`,9),RE(`ngModelChange`,function(l){return Jv(d),DN(i.returnDate,l)||(i.returnDate=l),e_(l)}),ug(),p0(),ug(),Ac(11,`div`,5)(12,`po-radio-group`,10),RE(`ngModelChange`,function(l){return Jv(d),DN(i.transportation,l)||(i.transportation=l),e_(l)}),ug(),p0(),ug()()(),Ac(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),RE(`ngModelChange`,function(l){return Jv(d),DN(i.trainCompany,l)||(i.trainCompany=l),e_(l)}),ug(),p0(),ug(),Ac(18,`div`,5)(19,`po-select`,13),RE(`ngModelChange`,function(l){return Jv(d),DN(i.classTrain,l)||(i.classTrain=l),e_(l)}),ug(),p0(),ug()()(),Ac(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),RE(`ngModelChange`,function(l){return Jv(d),DN(i.flightCompany,l)||(i.flightCompany=l),e_(l)}),ug(),p0(),ug(),Ac(25,`div`,5)(26,`po-select`,16),RE(`ngModelChange`,function(l){return Jv(d),DN(i.classFlight,l)||(i.classFlight=l),e_(l)}),ug(),p0(),ug()()(),Ac(27,`po-tab`,17)(28,`div`,5),Kc(29,`po-info`,18),ug(),Ac(30,`po-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),RE(`ngModelChange`,function(l){return Jv(d),DN(i.cardName,l)||(i.cardName=l),e_(l)}),ug(),p0(),ug(),Ac(36,`div`,5)(37,`po-input`,21),RE(`ngModelChange`,function(l){return Jv(d),DN(i.card,l)||(i.card=l),e_(l)}),ug(),p0(),ug(),Ac(38,`div`,5)(39,`po-input`,22),RE(`ngModelChange`,function(l){return Jv(d),DN(i.expiryMonth,l)||(i.expiryMonth=l),e_(l)}),ug(),p0(),Ac(40,`po-input`,23),RE(`ngModelChange`,function(l){return Jv(d),DN(i.expiryYear,l)||(i.expiryYear=l),e_(l)}),ug(),p0(),Ac(41,`po-input`,24),RE(`ngModelChange`,function(l){return Jv(d),DN(i.cvv,l)||(i.cvv=l),e_(l)}),ug(),p0(),ug(),Ac(42,`div`,5)(43,`po-button`,25),pt(`p-click`,function(){return i.payment()}),ug()()()(),Ac(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),pt(`p-click`,function(){return i.bankBillet()}),ug()()()()()()}if(o&2){let d=Zx(3),g=Zx(15),l=Zx(22),Fe=Zx(33);Hp(5),TE(`ngModel`,i.origin),m0(),Hp(2),TE(`ngModel`,i.destination),m0(),Hp(2),TE(`ngModel`,i.departDate),m0(),Hp(),TE(`ngModel`,i.returnDate),cE(`p-min-date`,i.departDate),m0(),Hp(2),TE(`ngModel`,i.transportation),cE(`p-options`,i.transportationOptions),m0(),Hp(),cE(`p-hide`,i.transportation!==`train`),Hp(4),TE(`ngModel`,i.trainCompany),cE(`p-options`,i.trainCompanyOptions),m0(),Hp(2),TE(`ngModel`,i.classTrain),cE(`p-options`,i.classTrainOptions),m0(),Hp(),cE(`p-hide`,i.transportation!==`flight`),Hp(4),TE(`ngModel`,i.flightCompany),cE(`p-options`,i.flightCompanyOptions),m0(),Hp(2),TE(`ngModel`,i.classFlight),cE(`p-options`,i.classFlightOptions),m0(),Hp(),cE(`p-disabled`,i.isPaymentEnable(d,g,l)===!1),Hp(2),cE(`p-value`,i.getTotalCost()),Hp(6),TE(`ngModel`,i.cardName),m0(),Hp(2),TE(`ngModel`,i.card),m0(),Hp(2),TE(`ngModel`,i.expiryMonth),m0(),Hp(),TE(`ngModel`,i.expiryYear),m0(),Hp(),TE(`ngModel`,i.cvv),m0(),Hp(2),cE(`p-disabled`,!Fe.form.valid||!i.totalCost),Hp(3),cE(`p-disabled`,!i.totalCost)}},dependencies:[b9,D9,C9,BP,LP,ni,Tte,_4,Cte,ioe,roe,tae,aae],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tabs - Travel`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tabs-travel/sample-po-tabs-travel.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-tabs>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tabs-travel/sample-po-tabs-travel.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tabs-travel`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,je,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,_e],encapsulation:2,changeDetection:1})}return a})();var Qe=[`poTab`];function Ze(a,q){if(a&1){let r=Bx();Ac(0,`po-tab`,2),FN(1,`date`),Ac(2,`div`,6)(3,`div`,4)(4,`div`,3)(5,`div`,7)(6,`po-widget`)(7,`div`,3)(8,`div`,8),Kc(9,`po-avatar`,9),ug(),Ac(10,`div`,10)(11,`div`,11),Kc(12,`po-info`,12),ug(),Ac(13,`div`,11),Kc(14,`po-info`,13),ug(),Ac(15,`div`,11),Kc(16,`po-info`,14),ug()()()()(),Ac(17,`div`,15)(18,`po-widget`,16)(19,`div`,17),vN(20,`TFace Conference Week`),ug(),Ac(21,`div`,18),vN(22,`From 21th September until 26th setember 2018`),ug(),Kc(23,`po-divider`),Ac(24,`div`,3)(25,`div`,19)(26,`span`,20),Kc(27,`po-icon`,21),ug(),Ac(28,`span`,22),vN(29),FN(30,`date`),ug()(),Ac(31,`div`,19)(32,`span`,20),Kc(33,`po-icon`,23),ug(),Ac(34,`span`,24),vN(35,`Av. Braz Leme, 1000, Santana`),ug()()(),Ac(36,`div`,25)(37,`po-button`,26),pt(`p-click`,function(){let i=Jv(r).$implicit,d=Wx();return e_(d.confirmSubscription(i))}),ug()()()()()()()()}if(a&2){let r=q.$implicit;cE(`p-label`,bN(jN(1,10,r.createdDate,`MMM d`)))(`p-active`,r.id===`1`)(`p-hide`,r.subscribe),Hp(9),cE(`p-src`,wN(`assets/graphics/`,r.photo)),Hp(3),cE(`p-value`,r.name),Hp(2),cE(`p-value`,r.email),Hp(2),cE(`p-value`,r.description),Hp(13),IE(jN(30,13,r.createdDate,`MM/dd/yyyy`))}}var ke=(()=>{class a{poNotification=f(Au);poTab;disableRestoreBtn=!0;speakers;pageWidth;ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(r=>r.subscribe=!1)}confirmSubscription(r){this.disableRestoreBtn=!1,r.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-business-conf`]],viewQuery:function(o,i){if(o&1&&Xc(Qe,7),o&2){let d;fo(d=ho())&&(i.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,1)(1,`po-tabs`,null,0),Ox(3,Ze,38,16,`po-tab`,2,Nx),ug(),Kc(5,`po-divider`),Ac(6,`div`,3)(7,`div`,4)(8,`div`,3)(9,`po-button`,5),pt(`p-click`,function(){return i.cancelSubscription()}),ug()()()()()),o&2&&(Hp(3),kx(i.speakers),Hp(6),cE(`p-disabled`,i.disableRestoreBtn))},dependencies:[N5,ni,ob,yt,roe,vze,tae,aae,Pze,nk],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Tabs - Business Conference`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Check the speaker's list">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-tabs-business-conf/sample-po-tabs-business-conf.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-tabs-business-conf`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ge,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ke],encapsulation:2,changeDetection:1})}return a})();var Me=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-tabs-doc`]],standalone:!1,decls:399,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTabsModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-tabs`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoTabsComponent`),ug()(),Ac(12,`div`,2)(13,`h4`),vN(14,`Tokens customizáveis`),ug(),Ac(15,`p`),vN(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(17,`blockquote`)(18,`p`),vN(19,`Para maiores informações, acesse o guia `),Ac(20,`a`,6),vN(21,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(22,`.`),ug()(),Ac(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),vN(27,`Propriedade`),ug(),Ac(28,`th`),vN(29,`Descrição`),ug(),Ac(30,`th`),vN(31,`Valor Padrão`),ug()()(),Ac(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),vN(36,`Default Values`),ug()(),Kc(37,`td`)(38,`td`),ug(),Ac(39,`tr`)(40,`td`)(41,`code`),vN(42,`--background`),ug()(),Ac(43,`td`),vN(44,`Cor de background`),ug(),Ac(45,`td`)(46,`code`),vN(47,`var(--color-transparent)`),ug()()(),Ac(48,`tr`)(49,`td`)(50,`code`),vN(51,`--background-item-default`),ug()(),Ac(52,`td`),vN(53,`Cor de background do item padrão`),ug(),Ac(54,`td`)(55,`code`),vN(56,`var(--color-transparent)`),ug()()(),Ac(57,`tr`)(58,`td`)(59,`code`),vN(60,`--border-radius`),ug()(),Ac(61,`td`),vN(62,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(63,`td`)(64,`code`),vN(65,`var(--border-radius-md)`),ug()()(),Ac(66,`tr`)(67,`td`)(68,`code`),vN(69,`--color`),ug()(),Ac(70,`td`),vN(71,`Cor da fonte padrão`),ug(),Ac(72,`td`)(73,`code`),vN(74,`var(--color-action-default)`),ug()()(),Ac(75,`tr`)(76,`td`)(77,`code`),vN(78,`--color-baseline`),ug()(),Ac(79,`td`),vN(80,`Cor para box-shadow`),ug(),Ac(81,`td`)(82,`code`),vN(83,`var(--color-neutral-light-20)`),ug()()(),Ac(84,`tr`)(85,`td`)(86,`code`),vN(87,`--font-family`),ug()(),Ac(88,`td`),vN(89,`Família tipográfica usada`),ug(),Ac(90,`td`)(91,`code`),vN(92,`var(--font-family-theme)`),ug()()(),Ac(93,`tr`)(94,`td`)(95,`code`),vN(96,`--font-size`),ug()(),Ac(97,`td`),vN(98,`Tamanho da fonte`),ug(),Ac(99,`td`)(100,`code`),vN(101,`var(--font-size-default)`),ug()()(),Ac(102,`tr`)(103,`td`)(104,`code`),vN(105,`--font-weight`),ug()(),Ac(106,`td`),vN(107,`Peso da fonte`),ug(),Ac(108,`td`)(109,`code`),vN(110,`var(--font-weight-bold)`),ug()()(),Ac(111,`tr`)(112,`td`)(113,`code`),vN(114,`--margin-tabs-container-left`),ug()(),Ac(115,`td`),vN(116,`Margem lateral esquerda do componente quando usado dentro de um `),Ac(117,`code`),vN(118,`page-default`),ug()(),Ac(119,`td`)(120,`code`),vN(121,`var(--spacing-md)`),ug()()(),Ac(122,`tr`)(123,`td`)(124,`code`),vN(125,`--margin-tabs-container-right`),ug()(),Ac(126,`td`),vN(127,`Margem lateral direita do componente quando usado dentro de um `),Ac(128,`code`),vN(129,`page-default`),ug()(),Ac(130,`td`)(131,`code`),vN(132,`-16px`),ug()()(),Ac(133,`tr`)(134,`td`)(135,`code`),vN(136,`--padding-tabs-header`),ug()(),Ac(137,`td`),vN(138,`Padding do valor lateral das abas`),ug(),Ac(139,`td`)(140,`code`),vN(141,`var(--spacing-sm)`),ug()()(),Ac(142,`tr`)(143,`td`)(144,`code`),vN(145,`--margin-tabs-first-child`),ug()(),Ac(146,`td`),vN(147,`Margem lateral da primeira aba`),ug(),Ac(148,`td`)(149,`code`),vN(150,`var(--spacing-md)`),ug()()(),Ac(151,`tr`)(152,`td`)(153,`code`),vN(154,`--margin-tabs-last-child`),ug()(),Ac(155,`td`),vN(156,`Margem lateral da ultima aba`),ug(),Ac(157,`td`)(158,`code`),vN(159,`var(--spacing-md)`),ug()()(),Ac(160,`tr`)(161,`td`)(162,`strong`),vN(163,`Disabled`),ug()(),Kc(164,`td`)(165,`td`),ug(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--color-disabled`),ug()(),Ac(170,`td`),vN(171,`Cor da fonte no estado disabilitado`),ug(),Ac(172,`td`)(173,`code`),vN(174,`var(--color-action-disabled)`),ug()()(),Ac(175,`tr`)(176,`td`)(177,`code`),vN(178,`--background-item-disabled`),ug(),vN(179,`\xA0`),ug(),Ac(180,`td`),vN(181,`Cor de background do item desabilitado`),ug(),Ac(182,`td`)(183,`code`),vN(184,`var(--color-neutral-light-10)`),ug()()(),Ac(185,`tr`)(186,`td`)(187,`strong`),vN(188,`Focused`),ug()(),Kc(189,`td`)(190,`td`),ug(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--outline-color-focused`),ug()(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Hover`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-hover`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado hover`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-brand-01-darkest)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-item-hover`),ug()(),Ac(219,`td`),vN(220,`Cor de background no estado de hover`),ug(),Ac(221,`td`)(222,`code`),vN(223,`var(--color-brand-01-lightest)`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`strong`),vN(227,`Selected`),ug()(),Kc(228,`td`)(229,`td`),ug(),Ac(230,`tr`)(231,`td`)(232,`code`),vN(233,`--background-item-selected`),ug()(),Ac(234,`td`),vN(235,`Cor de background do item selecionado`),ug(),Ac(236,`td`)(237,`code`),vN(238,`var(--color-brand-01-lightest)`),ug()()()()(),Ac(239,`p`),Kc(240,`br`),vN(241,` O componente `),Ac(242,`code`),vN(243,`po-tabs`),ug(),vN(244,` é responsável por agrupar `),Ac(245,`a`,7),vN(246,`abas`),ug(),vN(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),ug(),Ac(248,`p`),vN(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),ug(),Ac(250,`blockquote`)(251,`p`),vN(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),ug()(),Ac(253,`p`),vN(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),ug(),Ac(255,`h4`),vN(256,`Boas práticas`),ug(),Ac(257,`ul`)(258,`li`),vN(259,`Evite utilizar um `),Ac(260,`code`),vN(261,`po-tabs`),ug(),vN(262,` dentro de outro `),Ac(263,`code`),vN(264,`po-tabs`),ug(),vN(265,`;`),ug(),Ac(266,`li`),vN(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Ac(268,`em`),vN(269,`scroll`),ug(),vN(270,` muito longo no `),Ac(271,`code`),vN(272,`dropdown`),ug(),vN(273,`;`),ug(),Ac(274,`li`),vN(275,`Evite `),Ac(276,`code`),vN(277,`labels`),ug(),vN(278,` extensos para as `),Ac(279,`code`),vN(280,`tabs`),ug(),vN(281,` pois podem quebrar seu `),Ac(282,`em`),vN(283,`layout`),ug(),vN(284,`, use `),Ac(285,`code`),vN(286,`labels`),ug(),vN(287,` diretas, curtas e intuitivas.`),ug()()(),Ac(288,`div`,8)(289,`h4`,9),vN(290,`Seletor`),ug(),Ac(291,`pre`,10),vN(292,`<po-tabs
    p-size="string" >
</po-tabs>
`),ug()(),Ac(293,`h4`,11),vN(294,`Propriedades`),ug(),Ac(295,`table`,12)(296,`tr`,13)(297,`th`,14),vN(298,`Nome`),ug(),Ac(299,`th`,14),vN(300,`Tipo`),ug(),Ac(301,`th`,14),vN(302,`Padrão`),ug(),Ac(303,`th`,14),vN(304,`Descrição`),ug()(),Ac(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),vN(309,` p-size`),Kc(310,`br`),ug()()(),Ac(311,`td`,19)(312,`code`,20),vN(313,`string`),ug()(),Ac(314,`td`,21)(315,`p`)(316,`code`),vN(317,`medium`),ug()()(),Ac(318,`td`,22)(319,`em`)(320,`strong`),vN(321,`(opcional)`),ug()(),Ac(322,`p`),vN(323,`Define o tamanho do componente:`),ug(),Ac(324,`ul`)(325,`li`)(326,`code`),vN(327,`small`),ug(),vN(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(329,`li`)(330,`code`),vN(331,`medium`),ug(),vN(332,`: altura dos tabs como 44px.`),ug()(),Ac(333,`blockquote`)(334,`p`),vN(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(336,`code`),vN(337,`medium`),ug(),vN(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(339,`a`,23),vN(340,`po-theme`),ug(),vN(341,`.`),ug()()()()(),Ac(342,`h3`,11),vN(343,`Métodos`),ug(),Ac(344,`table`,24)(345,`tr`,15)(346,`th`,25)(347,`div`,17)(348,`h4`)(349,`span`,18),vN(350,` setQuantityTabsButton `),ug()()()()(),Ac(351,`tr`,22)(352,`td`,22)(353,`p`),vN(354,`Função que atribui o número de tabs fora do dropdown.`),ug(),Ac(355,`p`),vN(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(357,`pre`)(358,`code`),vN(359,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

changeQuantityTabs() {
  this.poTab.setQuantityTabsButton(1); //N\xFAmero de tabs
}
`),ug()()()()(),Kc(360,`br`),Ac(361,`table`,24)(362,`tr`,15)(363,`th`,25)(364,`div`,17)(365,`h4`)(366,`span`,18),vN(367,` activateTab `),ug()()()()(),Ac(368,`tr`,22)(369,`td`,22)(370,`p`),vN(371,`Ativa a aba correspondente ao `),Ac(372,`code`),vN(373,`id`),ug(),vN(374,` informado.`),ug(),Ac(375,`p`),vN(376,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(377,`pre`)(378,`code`),vN(379,`import { PoTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poTab', { static: true }) poTab: PoTabsComponent;

focusOnTab() {
  this.poTab.activateTab('meu-id-da-aba');
}
`),ug()()()()(),Ac(380,`h5`)(381,`b`),vN(382,`Parâmetros`),ug()(),Ac(383,`table`,12)(384,`tr`,13)(385,`th`,14),vN(386,`Nome`),ug(),Ac(387,`th`,14),vN(388,`Tipo`),ug(),Ac(389,`th`,14),vN(390,`Descrição`),ug()(),Ac(391,`tr`,15)(392,`td`,16),vN(393,` id`),ug(),Kc(394,`td`,19),Ac(395,`td`,22)(396,`p`),vN(397,`Identificador único da aba a ser ativada.`),ug()()()(),Kc(398,`br`),ug())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-tabs-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-tabs-basic-view`)(6,`sample-po-tabs-labs-view`)(7,`sample-po-tabs-travel-view`)(8,`sample-po-tabs-business-conf-view`),ug()()()),o&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ye,we,Pe,xe,Me],encapsulation:2,changeDetection:1})}return a})()}];var Be=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Ke),kL]})}return a})();var At=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Be]})}return a})();export{At as DocPoTabsModule};