import{$r as Xy,$t as iU,At as _Ce,Bi as jp,En as w4,Fi as he,Ft as dt,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ir as RN,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Pi as hN,Qi as pN,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ba as yw,cr as GO,dt as Sbe,ei as Yl,fi as ag,gi as bL,ha as ww,ir as Ex,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,sr as Fx,ui as a0,ut as S8e,v as A8e,va as yY,vi as bx,yi as cN,zr as SN}from"./main-3EWTGE7T.js";var Te=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-basic`]],standalone:!1,decls:3,vars:0,consts:[[`p-label`,`PO Tabs 1`],[`p-label`,`PO Tabs 2`]],template:function(i,o){i&1&&(Tl(0,`po-context-tabs`),Gl(1,`po-tab`,0)(2,`po-tab`,1),ag())},dependencies:[mCe,A8e],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context Tabs Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-context-tabs>
  <po-tab p-label="PO Tabs 1"></po-tab>
  <po-tab p-label="PO Tabs 2"></po-tab>
</po-context-tabs>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-tabs-basic/sample-po-context-tabs-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-context-tabs-basic',
  templateUrl: './sample-po-context-tabs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContextTabsBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-context-tabs-basic`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,We,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Te],encapsulation:2,changeDetection:1})}return l})();var qe=[`poTab`];function Le(l,O){if(l&1){let a=Ax();Tl(0,`po-tab`,9),ht(`p-click`,function(){let o=Ky(a).$implicit;return Xy(Fx().onClick(o))})(`p-close-tab`,function(){let o=Ky(a).$implicit;return Xy(Fx().onClose(o))}),Tl(1,`div`,10),cN(2),ag()()}if(l&2){let a=O.$implicit,i=O.$index;nw(`p-active`,a.active)(`p-disabled`,a.disabled)(`p-hide`,a.hide)(`p-hide-close`,a.hideClose)(`p-label`,a.label),jp(2),hg(`Tab Content `,i)}}var ye=(()=>{class l{poNotification;poTab;tabsFieldsForm=[{property:`label`,divider:`TAB`,required:!0,gridColumns:4},{property:`click`,gridColumns:4},{property:`closeTab`,label:`Close Tab`,gridColumns:4},{property:`active`,type:`boolean`,gridColumns:3},{property:`disabled`,type:`boolean`,gridColumns:3},{property:`hide`,type:`boolean`,gridColumns:3},{property:`hideClose`,label:`Hide Close`,type:`boolean`,gridColumns:3}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];size=`medium`;tabs=[];properties=[];pageWidth;constructor(a){this.poNotification=a}ngOnInit(){this.restore(),this.pageWidth=window.innerWidth}addTab(a){let i=Object.assign({},a);i.click=i.click?this.showClick.bind(this,i.click):void 0,i.closeTab=i.closeTab?this.dispachClose.bind(this,i.closeTab):void 0,this.tabs.push(i),this.tabs.length<=4?this.poTab.setQuantityTabsButton(this.tabs.length):this.tabs.length>4&&this.poTab.setQuantityTabsButton(4)}onClick(a){a.click&&a.click()}onClose(a){a.closeTab&&a.closeTab()}restore(){this.size=`medium`,this.tabs=[],this.poTab.quantityTabsButton=0}showClick(a){this.poNotification.success(`Action clicked: ${a}`)}dispachClose(a){this.poNotification.success(`Action closed: ${a}`)}static ɵfac=function(i){return new(i||l)(w(Eu))};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-labs`]],viewQuery:function(i,o){if(i&1&&Yl(qe,7),i&2){let d;lo(d=uo())&&(o.poTab=d.first)}},standalone:!1,decls:12,vars:6,consts:[[`poTab`,``],[`tabsForm`,``],[3,`p-size`],[3,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[3,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Tab`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[3,`p-click`,`p-close-tab`,`p-active`,`p-disabled`,`p-hide`,`p-hide-close`,`p-label`],[1,`po-font-subtitle`]],template:function(i,o){if(i&1){let d=Ax();Tl(0,`po-context-tabs`,2,0),Cx(2,Le,3,6,`po-tab`,3,Ex),ag(),Gl(4,`po-dynamic-form`,4,1),Tl(6,`div`,5)(7,`po-button`,6),ht(`p-click`,function(){Ky(d);let r=Bx(5);return o.addTab(r.form.value),Xy(r.form.reset())}),ag()(),Gl(8,`po-divider`),Tl(9,`po-radio-group`,7),ww(`ngModelChange`,function(r){return Ky(d),uN(o.size,r)||(o.size=r),Xy(r)}),ag(),a0(),Tl(10,`div`,5)(11,`po-button`,8),ht(`p-click`,function(){return o.restore()}),ag()()}if(i&2){let d=Bx(5);nw(`p-size`,o.size),jp(2),bx(o.tabs),jp(2),nw(`p-fields`,o.tabsFieldsForm)(`p-value`,o.tabs),jp(3),nw(`p-disabled`,d.form.invalid),jp(2),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0()}},dependencies:[gY,Ak,Zt,Xy$1,Sbe,L0e,mCe,A8e],encapsulation:2,changeDetection:1})}return l})();var ze=l=>({"docs-sample-code-tabs":l});var Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context Tabs Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-context-tabs #poTab [p-size]="size">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-tabs-labs/sample-po-context-tabs-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-context-tabs-labs`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ze,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ye],encapsulation:2,changeDetection:1})}return l})();var we=(()=>{class l{poNotificationService;card;cardName;classFlight;classTrain;cvv;departDate;destination;expiryMonth;expiryYear;flightCompany;origin;returnDate;totalCost;trainCompany;transportation;classFlightOptions=[{label:`Economy`,value:1},{label:`Business`,value:2},{label:`Comfort`,value:3},{label:`First Class`,value:4}];classTrainOptions=[{label:`Economy`,value:1},{label:`Cabin`,value:2},{label:`First Class`,value:3}];flightCompanyOptions=[{label:`American Airlines`,value:`american`},{label:`Avianca`,value:`avianca`},{label:`Delta Airlines`,value:`delta`},{label:`Emirates`,value:`emirates`},{label:`Latam`,value:`latam`}];trainCompanyOptions=[{label:`EuroStar`,value:`eurostar`},{label:`OBB`,value:`obb`},{label:`Renfe`,value:`renfe`},{label:`TrenItalia`,value:`trenitalia`}];transportationOptions=[{label:`Flights`,value:`flight`},{label:`Trains`,value:`train`}];constructor(a){this.poNotificationService=a}bankBillet(){this.poNotificationService.warning(`Bank billet sent to email`)}isPaymentEnable(a,i,o){return a.valid&&this.transportation===`flight`&&o.valid||a.valid&&this.transportation===`train`&&i.valid}getTotalCost(){return this.transportation===`flight`&&this.classFlight?(this.totalCost=800*this.classFlight,`$${this.totalCost}`):this.transportation===`train`&&this.classTrain?(this.totalCost=300*this.classTrain,`$${this.totalCost}`):(this.totalCost=void 0,`Fields are missing`)}payment(){this.poNotificationService.success(`Order confirmed`)}static ɵfac=function(i){return new(i||l)(w(Eu))};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-travel`]],standalone:!1,decls:47,vars:30,consts:[[`formTravel`,`ngForm`],[`formTrain`,`ngForm`],[`formFlight`,`ngForm`],[`formCreditCard`,`ngForm`],[`p-active`,``,`p-label`,`Destination`],[1,`po-row`],[`name`,`origin`,`p-label`,`Origin`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`name`,`departDate`,`p-label`,`Depart`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`returnDate`,`p-label`,`Return`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`transportation`,`p-label`,`Transportation`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Trains`,3,`p-hide`,`p-hide-close`],[`name`,`trainCompany`,`p-label`,`Tran Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classTrain`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Flights`,3,`p-hide`,`p-hide-close`],[`name`,`flightCompany`,`p-label`,`Flight Company`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`classFlight`,`p-label`,`Class`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Payment`,3,`p-disabled`,`p-hide-close`],[`p-label`,`Total Cost`,1,`po-md-6`,3,`p-value`],[`p-active`,``,`p-label`,`Credit Card`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name on Card`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`card`,`p-clean`,``,`p-label`,`Card Number`,`p-mask`,`9999 9999 9999 9999`,`p-required`,``,1,`po-md-8`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`expiryMonth`,`p-clean`,``,`p-label`,`Expiry Month`,`p-mask`,`19`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`expiryYear`,`p-clean`,``,`p-label`,`Year`,`p-mask`,`2999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`name`,`cvv`,`p-clean`,``,`p-label`,`CVV`,`p-mask`,`9999`,`p-required`,``,1,`po-md-2`,3,`ngModelChange`,`ngModel`],[`p-label`,`Pay now`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Bank Billet`,3,`p-hide-close`],[`p-label`,`Generate Bank Billet`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,o){if(i&1){let d=Ax();Tl(0,`po-context-tabs`)(1,`po-tab`,4)(2,`form`,null,0)(4,`div`,5)(5,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(d),uN(o.origin,r)||(o.origin=r),Xy(r)}),ag(),a0(),ag(),Tl(6,`div`,5)(7,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(d),uN(o.destination,r)||(o.destination=r),Xy(r)}),ag(),a0(),ag(),Tl(8,`div`,5)(9,`po-datepicker`,8),ww(`ngModelChange`,function(r){return Ky(d),uN(o.departDate,r)||(o.departDate=r),Xy(r)}),ag(),a0(),Tl(10,`po-datepicker`,9),ww(`ngModelChange`,function(r){return Ky(d),uN(o.returnDate,r)||(o.returnDate=r),Xy(r)}),ag(),a0(),ag(),Tl(11,`div`,5)(12,`po-radio-group`,10),ww(`ngModelChange`,function(r){return Ky(d),uN(o.transportation,r)||(o.transportation=r),Xy(r)}),ag(),a0(),ag()()(),Tl(13,`po-tab`,11)(14,`form`,null,1)(16,`div`,5)(17,`po-select`,12),ww(`ngModelChange`,function(r){return Ky(d),uN(o.trainCompany,r)||(o.trainCompany=r),Xy(r)}),ag(),a0(),ag(),Tl(18,`div`,5)(19,`po-select`,13),ww(`ngModelChange`,function(r){return Ky(d),uN(o.classTrain,r)||(o.classTrain=r),Xy(r)}),ag(),a0(),ag()()(),Tl(20,`po-tab`,14)(21,`form`,null,2)(23,`div`,5)(24,`po-select`,15),ww(`ngModelChange`,function(r){return Ky(d),uN(o.flightCompany,r)||(o.flightCompany=r),Xy(r)}),ag(),a0(),ag(),Tl(25,`div`,5)(26,`po-select`,16),ww(`ngModelChange`,function(r){return Ky(d),uN(o.classFlight,r)||(o.classFlight=r),Xy(r)}),ag(),a0(),ag()()(),Tl(27,`po-tab`,17)(28,`div`,5),Gl(29,`po-info`,18),ag(),Tl(30,`po-context-tabs`)(31,`po-tab`,19)(32,`form`,null,3)(34,`div`,5)(35,`po-input`,20),ww(`ngModelChange`,function(r){return Ky(d),uN(o.cardName,r)||(o.cardName=r),Xy(r)}),ag(),a0(),ag(),Tl(36,`div`,5)(37,`po-input`,21),ww(`ngModelChange`,function(r){return Ky(d),uN(o.card,r)||(o.card=r),Xy(r)}),ag(),a0(),ag(),Tl(38,`div`,5)(39,`po-input`,22),ww(`ngModelChange`,function(r){return Ky(d),uN(o.expiryMonth,r)||(o.expiryMonth=r),Xy(r)}),ag(),a0(),Tl(40,`po-input`,23),ww(`ngModelChange`,function(r){return Ky(d),uN(o.expiryYear,r)||(o.expiryYear=r),Xy(r)}),ag(),a0(),Tl(41,`po-input`,24),ww(`ngModelChange`,function(r){return Ky(d),uN(o.cvv,r)||(o.cvv=r),Xy(r)}),ag(),a0(),ag(),Tl(42,`div`,5)(43,`po-button`,25),ht(`p-click`,function(){return o.payment()}),ag()()()(),Tl(44,`po-tab`,26)(45,`div`,5)(46,`po-button`,27),ht(`p-click`,function(){return o.bankBillet()}),ag()()()()()()}if(i&2){let d=Bx(3),g=Bx(15),r=Bx(22),Fe=Bx(33);jp(5),Ew(`ngModel`,o.origin),l0(),jp(2),Ew(`ngModel`,o.destination),l0(),jp(2),Ew(`ngModel`,o.departDate),l0(),jp(),Ew(`ngModel`,o.returnDate),nw(`p-min-date`,o.departDate),l0(),jp(2),Ew(`ngModel`,o.transportation),nw(`p-options`,o.transportationOptions),l0(),jp(),nw(`p-hide`,o.transportation!==`train`)(`p-hide-close`,!0),jp(4),Ew(`ngModel`,o.trainCompany),nw(`p-options`,o.trainCompanyOptions),l0(),jp(2),Ew(`ngModel`,o.classTrain),nw(`p-options`,o.classTrainOptions),l0(),jp(),nw(`p-hide`,o.transportation!==`flight`)(`p-hide-close`,!0),jp(4),Ew(`ngModel`,o.flightCompany),nw(`p-options`,o.flightCompanyOptions),l0(),jp(2),Ew(`ngModel`,o.classFlight),nw(`p-options`,o.classFlightOptions),l0(),jp(),nw(`p-disabled`,o.isPaymentEnable(d,g,r)===!1)(`p-hide-close`,!0),jp(2),nw(`p-value`,o.getTotalCost()),jp(6),Ew(`ngModel`,o.cardName),l0(),jp(2),Ew(`ngModel`,o.card),l0(),jp(2),Ew(`ngModel`,o.expiryMonth),l0(),jp(),Ew(`ngModel`,o.expiryYear),l0(),jp(),Ew(`ngModel`,o.cvv),l0(),jp(2),nw(`p-disabled`,!Fe.form.valid||!o.totalCost),jp(),nw(`p-hide-close`,!0),jp(2),nw(`p-disabled`,!o.totalCost)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,z0e,iU,L0e,fbe,ybe,mCe,A8e],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var _e=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-travel-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context Tabs - Travel`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-context-tabs>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-tabs-travel/sample-po-context-tabs-travel.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-context-tabs-travel`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,we],encapsulation:2,changeDetection:1})}return l})();var Qe=[`poTab`];var Ze=(l,O)=>O.id;function Ye(l,O){if(l&1){let a=Ax();Tl(0,`po-tab`,2),SN(1,`date`),Tl(2,`div`,7)(3,`div`,5)(4,`div`,4)(5,`div`,8)(6,`po-widget`)(7,`div`,4)(8,`div`,9),Gl(9,`po-avatar`,10),ag(),Tl(10,`div`,11)(11,`div`,12),Gl(12,`po-info`,13),ag(),Tl(13,`div`,12),Gl(14,`po-info`,14),ag(),Tl(15,`div`,12),Gl(16,`po-info`,15),ag()()()()(),Tl(17,`div`,16)(18,`po-widget`,17)(19,`div`,18),cN(20,`TFace Conference Week`),ag(),Tl(21,`div`,19),cN(22,`From 21th September until 26th setember 2018`),ag(),Gl(23,`hr`),Tl(24,`div`,4)(25,`div`,20)(26,`span`,21),Gl(27,`po-icon`,22),ag(),Tl(28,`span`,23),cN(29),SN(30,`date`),ag()(),Tl(31,`div`,20)(32,`span`,21),Gl(33,`po-icon`,24),ag(),Tl(34,`span`,25),cN(35,`Av. Braz Leme, 1000, Santana`),ag()()(),Tl(36,`div`,26)(37,`po-button`,27),ht(`p-click`,function(){let o=Ky(a).$implicit;return Xy(Fx().confirmSubscription(o))}),ag()()()()()()()()}if(l&2){let a=O.$implicit;nw(`p-label`,hN(RN(1,10,a.createdDate,`MMM d`)))(`p-active`,a.id===`1`)(`p-hide`,a.subscribe),jp(9),nw(`p-src`,pN(`assets/graphics/`,a.photo)),jp(3),nw(`p-value`,a.name),jp(2),nw(`p-value`,a.email),jp(2),nw(`p-value`,a.description),jp(13),yw(RN(30,13,a.createdDate,`MM/dd/yyyy`))}}var Pe=(()=>{class l{poNotification;poTab;disableRestoreBtn=!0;speakers;pageWidth;constructor(a){this.poNotification=a}ngOnInit(){this.speakers=this.getSpeakers(),this.pageWidth=window.innerWidth,this.pageWidth<=600&&this.poTab.setQuantityTabsButton(3)}cancelSubscription(){this.disableRestoreBtn=!0,this.speakers.forEach(a=>a.subscribe=!1)}confirmSubscription(a){this.disableRestoreBtn=!1,a.subscribe=!0,this.poNotification.success(`Registration completed successfully. See you soon!`)}getSpeakers(){return[{id:`1`,name:`Peter Benjamin Parker`,email:`peter.parker@po-ui.com.br`,photo:`avatar1.png`,description:`Nodejs developer with 4 years experience`,createdDate:`2018-09-21T20:21:06.990Z`,subscribe:`false`},{id:`2`,name:`Natasha Romanova`,email:`natasha.romanova@po-ui.com.br`,photo:`avatar2.png`,description:`Angular developer with 2 years experience`,createdDate:`2018-09-22T20:21:06.990Z`,subscribe:`false`},{id:`3`,name:`Anthony Stark`,email:`anthony.stark@po-ui.com.br`,photo:`avatar3.png`,description:`Javascript developer with 8 years experience`,createdDate:`2018-09-23T20:21:06.990Z`,subscribe:`false`},{id:`4`,name:`Carol Danvers`,email:`carol.danvers@po-ui.com.br`,photo:`avatar4.png`,description:`Full stack developer with 2 years experience`,createdDate:`2018-09-24T20:21:06.990Z`,subscribe:`false`},{id:`5`,name:`Wagner Dantas`,email:`wagner.dantas@po-ui.com.br`,photo:`avatar5.png`,description:`Front-end Engineer developer with 8 years experience`,createdDate:`2018-09-25T20:21:06.990Z`,subscribe:`false`},{id:`6`,name:`Kaiam Alexandre`,email:`kaiam.alexandre@po-ui.com.br`,photo:`avatar6.png`,description:`Javascript developer with 12 years experience`,createdDate:`2018-09-26T20:21:06.990Z`,subscribe:`false`}]}static ɵfac=function(i){return new(i||l)(w(Eu))};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-business-conf`]],viewQuery:function(i,o){if(i&1&&Yl(Qe,7),i&2){let d;lo(d=uo())&&(o.poTab=d.first)}},standalone:!1,decls:10,vars:1,consts:[[`poTab`,``],[`p-title`,`Check the speaker's list`],[3,`p-label`,`p-active`,`p-hide`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`,`po-mt-0`],[1,`po-row`],[1,`po-offset-lg-1`,`po-offset-xl-1`,`po-lg-10`],[`p-label`,`Cancel Subscription`,1,`po-offset-lg-8`,`po-offset-xl-8`,`po-lg-4`,3,`p-click`,`p-disabled`],[1,`po-row`,`po-mt-5`],[1,`po-lg-8`,`po-mb-2`],[1,`po-md-5`,`po-lg-4`],[`p-size`,`xl`,3,`p-src`],[1,`po-md-7`,`po-lg-8`],[1,`po-mb-2`],[`p-label`,`Speaker`,3,`p-value`],[`p-label`,`Email`,1,`po-mt-5`,3,`p-value`],[`p-label`,`Description`,1,`po-mb-5`,3,`p-value`],[1,`po-lg-4`,`po-mb-2`],[`p-title`,`Subscription`],[1,`po-font-subtitle`,`po-mb-2`],[1,`po-font-text-bold`,`po-mb-5`],[1,`po-md-6`,`po-lg-12`],[1,`po-mr-1`,`po-font-subtitle`],[`p-icon`,`po-icon an an-calendar-dots`],[1,`po-font-text`,`po-mb-2`],[`p-icon`,`po-icon an an-map-pin`],[1,`po-font-text`],[1,`po-mt-5`],[`p-label`,`Subscription`,1,`po-mt-5`,3,`p-click`]],template:function(i,o){i&1&&(Tl(0,`po-page-default`,1)(1,`po-context-tabs`,null,0),Cx(3,Ye,38,16,`po-tab`,2,Ze),ag(),Gl(5,`hr`,3),Tl(6,`div`,4)(7,`div`,5)(8,`div`,4)(9,`po-button`,6),ht(`p-click`,function(){return o.cancelSubscription()}),ag()()()()()),i&2&&(jp(3),bx(o.speakers),jp(6),nw(`p-disabled`,o.disableRestoreBtn))},dependencies:[w4,Zt,dt,ybe,S8e,mCe,A8e,O8e,GO],encapsulation:2,changeDetection:1})}return l})();var Je=l=>({"docs-sample-code-tabs":l});var ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(i){return new(i||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-business-conf-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(i,o){i&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Context Tabs - Business Conference`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Check the speaker's list">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-context-tabs-business-conf/sample-po-context-tabs-business-conf.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-context-tabs-business-conf`),ag(),Gl(23,`hr`)),i&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Je,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return l})();var Me=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-context-tabs-doc`]],standalone:!1,decls:361,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[`href`,`/documentation/po-tab`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(i,o){i&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoContextTabsModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-context-tabs`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoContextTabsComponent`),ag()(),Tl(12,`div`,2)(13,`h4`),cN(14,`Tokens customizáveis`),ag(),Tl(15,`p`),cN(16,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(17,`blockquote`)(18,`p`),cN(19,`Para maiores informações, acesse o guia `),Tl(20,`a`,6),cN(21,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(22,`.`),ag()(),Tl(23,`table`)(24,`thead`)(25,`tr`)(26,`th`),cN(27,`Propriedade`),ag(),Tl(28,`th`),cN(29,`Descrição`),ag(),Tl(30,`th`),cN(31,`Valor Padrão`),ag()()(),Tl(32,`tbody`)(33,`tr`)(34,`td`)(35,`strong`),cN(36,`Default Values`),ag()(),Gl(37,`td`)(38,`td`),ag(),Tl(39,`tr`)(40,`td`)(41,`code`),cN(42,`--background`),ag()(),Tl(43,`td`),cN(44,`Cor de background`),ag(),Tl(45,`td`)(46,`code`),cN(47,`var(--color-transparent)`),ag()()(),Tl(48,`tr`)(49,`td`)(50,`code`),cN(51,`--background-item-default`),ag()(),Tl(52,`td`),cN(53,`Cor de background do item padrão`),ag(),Tl(54,`td`)(55,`code`),cN(56,`var(--color-transparent)`),ag()()(),Tl(57,`tr`)(58,`td`)(59,`code`),cN(60,`--border-radius`),ag()(),Tl(61,`td`),cN(62,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(63,`td`)(64,`code`),cN(65,`var(--border-radius-md)`),ag()()(),Tl(66,`tr`)(67,`td`)(68,`code`),cN(69,`--color`),ag()(),Tl(70,`td`),cN(71,`Cor da fonte padrão`),ag(),Tl(72,`td`)(73,`code`),cN(74,`var(--color-action-default)`),ag()()(),Tl(75,`tr`)(76,`td`)(77,`code`),cN(78,`--color-baseline`),ag()(),Tl(79,`td`),cN(80,`Cor para box-shadow`),ag(),Tl(81,`td`)(82,`code`),cN(83,`var(--color-neutral-light-20)`),ag()()(),Tl(84,`tr`)(85,`td`)(86,`code`),cN(87,`--font-family`),ag()(),Tl(88,`td`),cN(89,`Família tipográfica usada`),ag(),Tl(90,`td`)(91,`code`),cN(92,`var(--font-family-theme)`),ag()()(),Tl(93,`tr`)(94,`td`)(95,`code`),cN(96,`--font-size`),ag()(),Tl(97,`td`),cN(98,`Tamanho da fonte`),ag(),Tl(99,`td`)(100,`code`),cN(101,`var(--font-size-default)`),ag()()(),Tl(102,`tr`)(103,`td`)(104,`code`),cN(105,`--font-weight`),ag()(),Tl(106,`td`),cN(107,`Peso da fonte`),ag(),Tl(108,`td`)(109,`code`),cN(110,`var(--font-weight-bold)`),ag()()(),Tl(111,`tr`)(112,`td`)(113,`code`),cN(114,`--margin-tabs-container-left`),ag()(),Tl(115,`td`),cN(116,`Margem lateral esquerda do componente quando usado dentro de um `),Tl(117,`code`),cN(118,`page-default`),ag()(),Tl(119,`td`)(120,`code`),cN(121,`var(--spacing-md)`),ag()()(),Tl(122,`tr`)(123,`td`)(124,`code`),cN(125,`--margin-tabs-container-right`),ag()(),Tl(126,`td`),cN(127,`Margem lateral direita do componente quando usado dentro de um `),Tl(128,`code`),cN(129,`page-default`),ag()(),Tl(130,`td`)(131,`code`),cN(132,`-16px`),ag()()(),Tl(133,`tr`)(134,`td`)(135,`code`),cN(136,`--padding-tabs-header`),ag()(),Tl(137,`td`),cN(138,`Padding do valor lateral das abas`),ag(),Tl(139,`td`)(140,`code`),cN(141,`var(--spacing-sm)`),ag()()(),Tl(142,`tr`)(143,`td`)(144,`code`),cN(145,`--margin-tabs-first-child`),ag()(),Tl(146,`td`),cN(147,`Margem lateral da primeira aba`),ag(),Tl(148,`td`)(149,`code`),cN(150,`var(--spacing-md)`),ag()()(),Tl(151,`tr`)(152,`td`)(153,`code`),cN(154,`--margin-tabs-last-child`),ag()(),Tl(155,`td`),cN(156,`Margem lateral da ultima aba`),ag(),Tl(157,`td`)(158,`code`),cN(159,`var(--spacing-md)`),ag()()(),Tl(160,`tr`)(161,`td`)(162,`strong`),cN(163,`Disabled`),ag()(),Gl(164,`td`)(165,`td`),ag(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--color-disabled`),ag()(),Tl(170,`td`),cN(171,`Cor da fonte no estado disabilitado`),ag(),Tl(172,`td`)(173,`code`),cN(174,`var(--color-action-disabled)`),ag()()(),Tl(175,`tr`)(176,`td`)(177,`code`),cN(178,`--background-item-disabled`),ag(),cN(179,`\xA0`),ag(),Tl(180,`td`),cN(181,`Cor de background do item desabilitado`),ag(),Tl(182,`td`)(183,`code`),cN(184,`var(--color-neutral-light-10)`),ag()()(),Tl(185,`tr`)(186,`td`)(187,`strong`),cN(188,`Focused`),ag()(),Gl(189,`td`)(190,`td`),ag(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--outline-color-focused`),ag()(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Hover`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-hover`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado hover`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-brand-01-darkest)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-item-hover`),ag()(),Tl(219,`td`),cN(220,`Cor de background no estado de hover`),ag(),Tl(221,`td`)(222,`code`),cN(223,`var(--color-brand-01-lightest)`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`strong`),cN(227,`Selected`),ag()(),Gl(228,`td`)(229,`td`),ag(),Tl(230,`tr`)(231,`td`)(232,`code`),cN(233,`--background-item-selected`),ag()(),Tl(234,`td`),cN(235,`Cor de background do item selecionado`),ag(),Tl(236,`td`)(237,`code`),cN(238,`var(--color-brand-01-lightest)`),ag()()()()(),Tl(239,`p`),Gl(240,`br`),cN(241,` O componente `),Tl(242,`code`),cN(243,`po-context-tabs`),ag(),cN(244,` é responsável por agrupar `),Tl(245,`a`,7),cN(246,`abas`),ag(),cN(247,` dispostas numa linha horizontal,
ideal para facilitar a organiza\xE7\xE3o de conte\xFAdos.`),ag(),Tl(248,`p`),cN(249,`O componente exibirá as abas enquanto houver espaço na tela, caso a aba ultrapasse o limite da tela a mesma será agrupada em um dropdown.`),ag(),Tl(250,`blockquote`)(251,`p`),cN(252,`As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão.`),ag()(),Tl(253,`p`),cN(254,`\xC9 poss\xEDvel realizar a navega\xE7\xE3o entre as abas atrav\xE9s da tecla SETAS(direita e esquerda) do teclado.
Caso uma aba estiver desabilitada, n\xE3o receber\xE1 foco de navega\xE7\xE3o.`),ag(),Tl(255,`h4`),cN(256,`Boas práticas`),ag(),Tl(257,`ul`)(258,`li`),cN(259,`Evite utilizar um `),Tl(260,`code`),cN(261,`po-context-tabs`),ag(),cN(262,` dentro de outro `),Tl(263,`code`),cN(264,`po-context-tabs`),ag(),cN(265,`;`),ag(),Tl(266,`li`),cN(267,`Evite utilizar uma quantidade excessiva de abas, pois irá gerar um `),Tl(268,`em`),cN(269,`scroll`),ag(),cN(270,` muito longo no `),Tl(271,`code`),cN(272,`dropdown`),ag(),cN(273,`;`),ag(),Tl(274,`li`),cN(275,`Evite `),Tl(276,`code`),cN(277,`labels`),ag(),cN(278,` extensos para as `),Tl(279,`code`),cN(280,`tabs`),ag(),cN(281,` pois podem quebrar seu `),Tl(282,`em`),cN(283,`layout`),ag(),cN(284,`, use `),Tl(285,`code`),cN(286,`labels`),ag(),cN(287,` diretas, curtas e intuitivas.`),ag()()(),Tl(288,`div`,8)(289,`h4`,9),cN(290,`Seletor`),ag(),Tl(291,`pre`,10),cN(292,`<po-context-tabs
    p-size="string" >
</po-context-tabs>
`),ag()(),Tl(293,`h4`,11),cN(294,`Propriedades`),ag(),Tl(295,`table`,12)(296,`tr`,13)(297,`th`,14),cN(298,`Nome`),ag(),Tl(299,`th`,14),cN(300,`Tipo`),ag(),Tl(301,`th`,14),cN(302,`Padrão`),ag(),Tl(303,`th`,14),cN(304,`Descrição`),ag()(),Tl(305,`tr`,15)(306,`td`,16)(307,`div`,17)(308,`span`,18),cN(309,` p-size`),Gl(310,`br`),ag()()(),Tl(311,`td`,19)(312,`code`,20),cN(313,`string`),ag()(),Tl(314,`td`,21)(315,`p`)(316,`code`),cN(317,`medium`),ag()()(),Tl(318,`td`,22)(319,`em`)(320,`strong`),cN(321,`(opcional)`),ag()(),Tl(322,`p`),cN(323,`Define o tamanho do componente:`),ag(),Tl(324,`ul`)(325,`li`)(326,`code`),cN(327,`small`),ag(),cN(328,`: altura dos tabs como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(329,`li`)(330,`code`),cN(331,`medium`),ag(),cN(332,`: altura dos tabs como 44px.`),ag()(),Tl(333,`blockquote`)(334,`p`),cN(335,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(336,`code`),cN(337,`medium`),ag(),cN(338,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(339,`a`,23),cN(340,`po-theme`),ag(),cN(341,`.`),ag()()()()(),Tl(342,`h3`,11),cN(343,`Métodos`),ag(),Tl(344,`table`,24)(345,`tr`,15)(346,`th`,25)(347,`div`,17)(348,`h4`)(349,`span`,18),cN(350,` setQuantityTabsButton `),ag()()()()(),Tl(351,`tr`,22)(352,`td`,22)(353,`p`),cN(354,`Função que atribui o número de tabs fora do dropdown.`),ag(),Tl(355,`p`),cN(356,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(357,`pre`)(358,`code`),cN(359,`import { PoContextTabsComponent } from '@po-ui/ng-components';

...

@ViewChild('poContextTabs', { static: true }) poContextTabs: PoContextTabsComponent;

changeQuantityTabs() {
  this.poContextTabs.setQuantityTabsButton(1); //N\xFAmero de context-tabs
}
`),ag()()()()(),Gl(360,`br`),ag())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Xe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.activeTab=i||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Context Tabs`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(i,o){i&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-context-tabs-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-context-tabs-basic-view`)(6,`sample-po-context-tabs-labs-view`)(7,`sample-po-context-tabs-travel-view`)(8,`sample-po-context-tabs-business-conf-view`),ag()()()),i&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,xe,Ee,_e,ke,Me],encapsulation:2,changeDetection:1})}return l})()}];var Be=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[bL.forChild(Xe),bL]})}return l})();var _t=(()=>{class l{static ɵfac=function(i){return new(i||l)};static ɵmod=he({type:l});static ɵinj=ue({imports:[ar,Be]})}return l})();export{_t as DocPoContextTabsModule};