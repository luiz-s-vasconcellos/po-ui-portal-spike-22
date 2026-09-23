import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,cn as lU,dn as oU,ea as p0,en as gu,ga as w,gi as bw,hr as MY,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,i){l&1&&ql(0,`po-switch`,0)},dependencies:[J4],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Switch Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-switch-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:gu.Left},{label:`Right`,value:gu.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let s=Vx();Ml(0,`po-switch`,1),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.switch,r)||(i.switch=r),Jy(r)}),ht(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.label,r)||(i.label=r),Jy(r)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.help,r)||(i.help=r),Jy(r)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.helperText,r)||(i.helperText=r),Jy(r)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.labelOff,r)||(i.labelOff=r),Jy(r)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.labelOn,r)||(i.labelOn=r),Jy(r)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),Jy(r)}),lg(),f0(),Ml(14,`po-radio-group`,11),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.labelPosition,r)||(i.labelPosition=r),Jy(r)}),lg(),f0(),Ml(15,`po-checkbox-group`,12),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.properties,r)||(i.properties=r),Jy(r)}),lg(),f0(),Ml(16,`po-radio-group`,13),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.size,r)||(i.size=r),Jy(r)}),lg(),f0(),Ml(17,`div`,2)(18,`po-button`,14),ht(`p-click`,function(){return i.restore()}),lg()()()}l&2&&(Tw(`ngModel`,i.switch),cw(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-field-error-message`,i.fieldErrorMessage)(`p-format-model`,i.properties.includes(`formatModel`))(`p-help`,i.help)(`p-hide-label-status`,i.properties.includes(`hideLabelStatus`))(`p-invalid-value`,i.properties?.includes(`invalidValue`))(`p-label`,i.label)(`p-label-off`,i.labelOff)(`p-label-on`,i.labelOn)(`p-label-position`,i.labelPosition)(`p-label-text-wrap`,i.properties.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size),p0(),Up(3),cw(`p-value`,i.switch),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.labelOff),p0(),Up(),Tw(`ngModel`,i.labelOn),p0(),Up(),Tw(`ngModel`,i.fieldErrorMessage),p0(),Up(),Tw(`ngModel`,i.labelPosition),cw(`p-options`,i.labelPositionOptions),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,J4,kbe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Switch Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="properties?.includes('invalidValue')"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
  >
  </po-input>
  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  helperText: string;
  event: string;
  fieldErrorMessage: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'invalidValue', label: 'Invalid Value is On/True' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
    this.fieldErrorMessage = '';
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-switch-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{poNotification=f(Eu);labelPosition=gu.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){if(l&1){let s=Vx();Ml(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),ql(4,`po-table`,3),Ml(5,`po-switch`,4),Mw(`ngModelChange`,function(r){return Qy(s),yN(i.serviceFee,r)||(i.serviceFee=r),Jy(r)}),ht(`p-change`,function(){return i.addServiceFee()}),lg(),f0(),Ml(6,`div`,5)(7,`div`,6),mN(8,`Total value`),lg(),Ml(9,`span`,7),mN(10,`R$`),lg(),Ml(11,`span`,8),mN(12),lg()(),Ml(13,`div`,1)(14,`po-button`,9),ht(`p-click`,function(){return i.confirm()}),lg()()()()()}l&2&&(Up(4),cw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Up(),Tw(`ngModel`,i.serviceFee),cw(`p-label-position`,i.labelPosition),p0(),Up(7),bw(i.totalAmount))},dependencies:[IY,wY,CY,Vk,kk,Zt,J4,oU,$8e],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Switch - Order Summary`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-switch-order/sample-po-switch-order.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-switch-order/sample-po-switch-order.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  private poNotification = inject(PoNotificationService);

  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-switch-order`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Me,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{poNotification=f(Eu);formBuilder=f(MY);formOrderSummary;labelPosition=gu.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let d=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=d?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),ql(3,`po-table`,3),Ml(4,`po-switch`,4),ht(`p-change`,function(){return i.addServiceFee()}),lg(),f0(),Ml(5,`div`,5)(6,`div`,6),mN(7,`Total value`),lg(),Ml(8,`span`,7),mN(9,`R$`),lg(),Ml(10,`span`,8),mN(11),lg()(),Ml(12,`div`,0)(13,`po-button`,9),ht(`p-click`,function(){return i.confirm()}),lg()()()()()),l&2&&(Up(2),cw(`formGroup`,i.formOrderSummary),Up(),cw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Up(),cw(`p-label-position`,i.labelPosition),p0(),Up(7),bw(i.totalAmount))},dependencies:[IY,wY,CY,qk,Wk,Zt,J4,oU,$8e],encapsulation:2,changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Switch - Order Summary Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-switch-order-reactive-form`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoSwitchComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,` O componente `),Ml(24,`code`),mN(25,`po-switch`),lg(),mN(26,` é um `),Ml(27,`a`,6),mN(28,`checkbox`),lg(),mN(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),lg(),Ml(30,`p`),mN(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),lg(),Ml(32,`p`),mN(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),lg(),Ml(34,`blockquote`)(35,`p`),mN(36,`O componente não altera o valor incial informado no `),Ml(37,`em`),mN(38,`model`),lg(),mN(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),lg()(),Ml(40,`h4`),mN(41,`Boas práticas`),lg(),Ml(42,`ul`)(43,`li`),mN(44,`Evite `),Ml(45,`code`),mN(46,`labels`),lg(),mN(47,` extensos que quebram o layout do `),Ml(48,`code`),mN(49,`po-switch`),lg(),mN(50,`, use `),Ml(51,`code`),mN(52,`labels`),lg(),mN(53,` diretos, curtos e intuitivos.`),lg()(),Ml(54,`h4`),mN(55,`Acessibilidade tratada no componente`),lg(),Ml(56,`p`),mN(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(58,`ul`)(59,`li`),mN(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),Ml(61,`a`,7),mN(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),lg()(),Ml(63,`li`),mN(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ml(65,`a`,8),mN(66,`WCAG 2.4.12: Focus Appearance`),lg()()(),Ml(67,`h4`),mN(68,`Tokens customizáveis`),lg(),Ml(69,`p`),mN(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(71,`blockquote`)(72,`p`),mN(73,`Para maiores informações, acesse o guia `),Ml(74,`a`,9),mN(75,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(76,`.`),lg()(),Ml(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),mN(81,`Propriedade`),lg(),Ml(82,`th`),mN(83,`Descrição`),lg(),Ml(84,`th`),mN(85,`Valor Padrão`),lg()()(),Ml(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),mN(90,`Unchecked`),lg()(),ql(91,`td`)(92,`td`),lg(),Ml(93,`tr`)(94,`td`)(95,`code`),mN(96,`--color-unchecked`),lg()(),Ml(97,`td`),mN(98,`Cor principal no estado desmarcado`),lg(),Ml(99,`td`)(100,`code`),mN(101,`var(--color-neutral-light-00)`),lg()()(),Ml(102,`tr`)(103,`td`)(104,`code`),mN(105,`--border-color`),lg()(),Ml(106,`td`),mN(107,`Cor da borda`),lg(),Ml(108,`td`)(109,`code`),mN(110,`var(--color-neutral-dark-70)`),lg()()(),Ml(111,`tr`)(112,`td`)(113,`code`),mN(114,`--track-unchecked`),lg()(),Ml(115,`td`),mN(116,`Cor principal da faixa no estado desmarcado`),lg(),Ml(117,`td`)(118,`code`),mN(119,`var(--color-neutral-light-20)`),lg()()(),Ml(120,`tr`)(121,`td`)(122,`strong`),mN(123,`Checked`),lg()(),ql(124,`td`)(125,`td`),lg(),Ml(126,`tr`)(127,`td`)(128,`code`),mN(129,`--color-checked`),lg()(),Ml(130,`td`),mN(131,`Cor principal no estado selecionado`),lg(),Ml(132,`td`)(133,`code`),mN(134,`var(--color-action-default)`),lg()()(),Ml(135,`tr`)(136,`td`)(137,`code`),mN(138,`--track-checked`),lg()(),Ml(139,`td`),mN(140,`Cor da faixa no estado selecionado`),lg(),Ml(141,`td`)(142,`code`),mN(143,`var(--color-brand-01-light)`),lg()()(),Ml(144,`tr`)(145,`td`)(146,`strong`),mN(147,`Hover`),lg()(),ql(148,`td`)(149,`td`),lg(),Ml(150,`tr`)(151,`td`)(152,`code`),mN(153,`--color-unchecked-hover`),lg()(),Ml(154,`td`),mN(155,`Cor principal no estado hover desmarcado`),lg(),Ml(156,`td`)(157,`code`),mN(158,`var(--color-action-pressed)`),lg()()(),Ml(159,`tr`)(160,`td`)(161,`code`),mN(162,`--color-checked-hover`),lg()(),Ml(163,`td`),mN(164,`Cor principal no estado hover marcado`),lg(),Ml(165,`td`)(166,`code`),mN(167,`var(--color-action-pressed)`),lg()()(),Ml(168,`tr`)(169,`td`)(170,`strong`),mN(171,`Focused`),lg()(),ql(172,`td`)(173,`td`),lg(),Ml(174,`tr`)(175,`td`)(176,`code`),mN(177,`--outline-color-focused`),lg()(),Ml(178,`td`),mN(179,`Cor do outline do estado de focus`),lg(),Ml(180,`td`)(181,`code`),mN(182,`var(--color-action-focus)`),lg()()(),Ml(183,`tr`)(184,`td`)(185,`strong`),mN(186,`Disabled`),lg()(),ql(187,`td`)(188,`td`),lg(),Ml(189,`tr`)(190,`td`)(191,`code`),mN(192,`--color-unchecked-disabled`),lg()(),Ml(193,`td`),mN(194,`Cor principal do disabled no estado desmarcado`),lg(),Ml(195,`td`)(196,`code`),mN(197,`var(--color-neutral-light-20)`),lg()()(),Ml(198,`tr`)(199,`td`)(200,`code`),mN(201,`--color-checked-disabled`),lg()(),Ml(202,`td`),mN(203,`Cor principal do disabled no estado marcado`),lg(),Ml(204,`td`)(205,`code`),mN(206,`var(--color-action-disabled)`),lg()()()()()(),Ml(207,`div`,10)(208,`h4`,11),mN(209,`Seletor`),lg(),Ml(210,`pre`,12),mN(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-invalid-value="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-switch>
`),lg()(),Ml(212,`h4`,13),mN(213,`Propriedades`),lg(),Ml(214,`table`,14)(215,`tr`,15)(216,`th`,16),mN(217,`Nome`),lg(),Ml(218,`th`,16),mN(219,`Tipo`),lg(),Ml(220,`th`,16),mN(221,`Padrão`),lg(),Ml(222,`th`,16),mN(223,`Descrição`),lg()(),Ml(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),mN(228,` (p-additional-help)`),ql(229,`br`),lg()(),Ml(230,`div`,21),mN(231,`Deprecated`),lg()(),Ml(232,`td`,22)(233,`code`,23),mN(234,`EventEmitter`),lg()(),Ml(235,`td`,24),mN(236,`-`),lg(),Ml(237,`td`,25)(238,`em`)(239,`strong`),mN(240,`(opcional)`),lg()(),Ml(241,`p`),mN(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(243,`blockquote`)(244,`p`),mN(245,`Essa propriedade está `),Ml(246,`strong`),mN(247,`depreciada`),lg(),mN(248,` e será removida na versão `),Ml(249,`code`),mN(250,`23.x.x`),lg(),mN(251,`. Recomendamos utilizar a propriedade `),Ml(252,`code`),mN(253,`p-helper`),lg(),mN(254,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(255,`tr`,17)(256,`td`,18)(257,`div`,26)(258,`span`,27),mN(259,` p-additional-help-tooltip`),ql(260,`br`),lg()(),Ml(261,`div`,21),mN(262,`Deprecated`),lg()(),Ml(263,`td`,22)(264,`code`,28),mN(265,`string`),lg()(),Ml(266,`td`,24),mN(267,`-`),lg(),Ml(268,`td`,25)(269,`em`)(270,`strong`),mN(271,`(opcional)`),lg()(),Ml(272,`p`),mN(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(274,`code`),mN(275,`po-helper`),lg(),mN(276,`.
`),Ml(277,`strong`),mN(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(279,`blockquote`)(280,`p`),mN(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(282,`blockquote`)(283,`p`),mN(284,`Essa propriedade está `),Ml(285,`strong`),mN(286,`depreciada`),lg(),mN(287,` e será removida na versão `),Ml(288,`code`),mN(289,`23.x.x`),lg(),mN(290,`. Recomendamos utilizar a propriedade `),Ml(291,`code`),mN(292,`p-helper`),lg(),mN(293,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(294,`tr`,17)(295,`td`,18)(296,`div`,26)(297,`span`,27),mN(298,` p-append-in-body`),ql(299,`br`),lg()()(),Ml(300,`td`,22)(301,`code`,29),mN(302,`boolean`),lg()(),Ml(303,`td`,24)(304,`p`)(305,`code`),mN(306,`false`),lg()()(),Ml(307,`td`,25)(308,`em`)(309,`strong`),mN(310,`(opcional)`),lg()(),Ml(311,`p`),mN(312,`Define que o popover (`),Ml(313,`code`),mN(314,`p-helper`),lg(),mN(315,` e/ou `),Ml(316,`code`),mN(317,`p-error-limit`),lg(),mN(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(319,`blockquote`)(320,`p`),mN(321,`Quando utilizado com `),Ml(322,`code`),mN(323,`p-helper`),lg(),mN(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(325,`tr`,17)(326,`td`,18)(327,`div`,19)(328,`span`,20),mN(329,` (p-change)`),ql(330,`br`),lg()()(),Ml(331,`td`,22)(332,`code`,23),mN(333,`EventEmitter`),lg()(),Ml(334,`td`,24),mN(335,`-`),lg(),Ml(336,`td`,25)(337,`em`)(338,`strong`),mN(339,`(opcional)`),lg()(),Ml(340,`p`),mN(341,`Evento disparado ao alterar valor do campo.`),lg()()(),Ml(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),mN(346,` (p-change-model)`),ql(347,`br`),lg()()(),Ml(348,`td`,22)(349,`code`,23),mN(350,`EventEmitter`),lg()(),Ml(351,`td`,24),mN(352,`-`),lg(),Ml(353,`td`,25)(354,`em`)(355,`strong`),mN(356,`(opcional)`),lg()(),Ml(357,`p`),mN(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(359,`code`),mN(360,`setValue`),lg(),mN(361,`, `),Ml(362,`code`),mN(363,`patchValue`),lg(),mN(364,`, carregamento assíncrono).`),lg(),Ml(365,`p`),mN(366,`Diferentemente do `),Ml(367,`code`),mN(368,`p-change`),lg(),mN(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(370,`code`),mN(371,`p-change-model`),lg(),mN(372,` cobre todos os cenários de alteração de valor.`),lg(),Ml(373,`p`),mN(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(375,`tr`,17)(376,`td`,18)(377,`div`,26)(378,`span`,27),mN(379,` p-compact-label`),ql(380,`br`),lg()()(),Ml(381,`td`,22)(382,`code`,29),mN(383,`boolean`),lg()(),Ml(384,`td`,24)(385,`p`)(386,`code`),mN(387,`false`),lg()()(),Ml(388,`td`,25)(389,`em`)(390,`strong`),mN(391,`(opcional)`),lg()(),Ml(392,`p`),mN(393,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(394,`p`),mN(395,`Quando habilitado (`),Ml(396,`code`),mN(397,`true`),lg(),mN(398,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(399,`ul`)(400,`li`)(401,`code`),mN(402,`po-label`),lg()(),Ml(403,`li`)(404,`code`),mN(405,`p-requirement (showRequired)`),lg()(),Ml(406,`li`)(407,`code`),mN(408,`po-helper`),lg()()(),Ml(409,`p`),mN(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(411,`p`),mN(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(413,`ul`)(414,`li`)(415,`code`),mN(416,`--field-container-title-justify`),lg()(),Ml(417,`li`)(418,`code`),mN(419,`--field-container-title-flex`),lg()()(),Ml(420,`p`),mN(421,`Exemplo:`),lg(),Ml(422,`pre`)(423,`code`),mN(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(425,`p`),mN(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(427,`tr`,17)(428,`td`,18)(429,`div`,26)(430,`span`,27),mN(431,` p-disabled`),ql(432,`br`),lg()()(),Ml(433,`td`,22)(434,`code`,29),mN(435,`boolean`),lg()(),Ml(436,`td`,24)(437,`p`)(438,`code`),mN(439,`false`),lg()()(),Ml(440,`td`,25)(441,`em`)(442,`strong`),mN(443,`(opcional)`),lg()(),Ml(444,`p`),mN(445,`Indica se o campo será desabilitado.`),lg()()(),Ml(446,`tr`,17)(447,`td`,18)(448,`div`,26)(449,`span`,27),mN(450,` p-error-limit`),ql(451,`br`),lg()()(),Ml(452,`td`,22)(453,`code`,29),mN(454,`boolean`),lg()(),Ml(455,`td`,24)(456,`p`)(457,`code`),mN(458,`false`),lg()()(),Ml(459,`td`,25)(460,`em`)(461,`strong`),mN(462,`(opcional)`),lg()(),Ml(463,`p`),mN(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(465,`blockquote`)(466,`p`),mN(467,`Caso essa propriedade seja definida como `),Ml(468,`code`),mN(469,`true`),lg(),mN(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(471,`tr`,17)(472,`td`,18)(473,`div`,26)(474,`span`,27),mN(475,` p-field-error-message`),ql(476,`br`),lg()()(),Ml(477,`td`,22)(478,`code`,28),mN(479,`string`),lg()(),Ml(480,`td`,24),mN(481,`-`),lg(),Ml(482,`td`,25)(483,`em`)(484,`strong`),mN(485,`(opcional)`),lg()(),Ml(486,`p`),mN(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),lg()()(),Ml(488,`tr`,17)(489,`td`,18)(490,`div`,26)(491,`span`,27),mN(492,` p-format-model`),ql(493,`br`),lg()()(),Ml(494,`td`,22)(495,`code`,29),mN(496,`boolean`),lg()(),Ml(497,`td`,24)(498,`p`)(499,`code`),mN(500,`false`),lg()()(),Ml(501,`td`,25)(502,`em`)(503,`strong`),mN(504,`(opcional)`),lg()(),Ml(505,`p`),mN(506,`Indica se o `),Ml(507,`code`),mN(508,`model`),lg(),mN(509,` receberá o valor formatado pelas propriedades `),Ml(510,`code`),mN(511,`p-label-on`),lg(),mN(512,` e `),Ml(513,`code`),mN(514,`p-label-off`),lg(),mN(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),lg(),Ml(516,`blockquote`)(517,`p`),mN(518,`Por padrão será atribuído `),Ml(519,`code`),mN(520,`false`),lg(),mN(521,`.`),lg()()()(),Ml(522,`tr`,17)(523,`td`,18)(524,`div`,26)(525,`span`,27),mN(526,` p-help`),ql(527,`br`),lg()()(),Ml(528,`td`,22)(529,`code`,28),mN(530,`string`),lg()(),Ml(531,`td`,24),mN(532,`-`),lg(),Ml(533,`td`,25)(534,`p`),mN(535,`Texto de apoio para o campo.`),lg()()(),Ml(536,`tr`,17)(537,`td`,18)(538,`div`,26)(539,`span`,27),mN(540,` p-hide-label-status`),ql(541,`br`),lg()()(),Ml(542,`td`,22)(543,`code`,29),mN(544,`boolean`),lg()(),Ml(545,`td`,24)(546,`p`)(547,`code`),mN(548,`false`),lg()()(),Ml(549,`td`,25)(550,`em`)(551,`strong`),mN(552,`(opcional)`),lg()(),Ml(553,`p`),mN(554,`Indica se o status do `),Ml(555,`code`),mN(556,`model`),lg(),mN(557,` será escondido visualmente ao lado do switch.`),lg(),Ml(558,`blockquote`)(559,`p`),mN(560,`Por padrão será atribuído `),Ml(561,`code`),mN(562,`false`),lg(),mN(563,`.`),lg()()()(),Ml(564,`tr`,17)(565,`td`,18)(566,`div`,26)(567,`span`,27),mN(568,` p-invalid-value`),ql(569,`br`),lg()()(),Ml(570,`td`,22)(571,`code`,29),mN(572,`boolean`),lg()(),Ml(573,`td`,24)(574,`p`)(575,`code`),mN(576,`false`),lg()()(),Ml(577,`td`,25)(578,`em`)(579,`strong`),mN(580,`(opcional)`),lg()(),Ml(581,`p`),mN(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ml(583,`code`),mN(584,`p-field-error-message`),lg(),mN(585,`.`),lg(),Ml(586,`blockquote`)(587,`p`),mN(588,`Caso essa propriedade seja definida como `),Ml(589,`code`),mN(590,`true`),lg(),mN(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),lg()()()(),Ml(592,`tr`,17)(593,`td`,18)(594,`div`,19)(595,`span`,20),mN(596,` (p-keydown)`),ql(597,`br`),lg()()(),Ml(598,`td`,22)(599,`code`,23),mN(600,`EventEmitter`),lg()(),Ml(601,`td`,24),mN(602,`-`),lg(),Ml(603,`td`,25)(604,`em`)(605,`strong`),mN(606,`(opcional)`),lg()(),Ml(607,`p`),mN(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(609,`code`),mN(610,`KeyboardEvent`),lg(),mN(611,` com informações sobre a tecla.`),lg()()(),Ml(612,`tr`,17)(613,`td`,18)(614,`div`,26)(615,`span`,27),mN(616,` p-label`),ql(617,`br`),lg()()(),Ml(618,`td`,22)(619,`code`,28),mN(620,`string`),lg()(),Ml(621,`td`,24),mN(622,`-`),lg(),Ml(623,`td`,25)(624,`p`),mN(625,`Rótulo exibido pelo componente.`),lg()()(),Ml(626,`tr`,17)(627,`td`,18)(628,`div`,26)(629,`span`,27),mN(630,` p-label-off`),ql(631,`br`),lg()()(),Ml(632,`td`,22)(633,`code`,28),mN(634,`string`),lg()(),Ml(635,`td`,24)(636,`p`)(637,`code`),mN(638,`false`),lg()()(),Ml(639,`td`,25)(640,`p`),mN(641,`Texto exibido quando o valor do componente for `),Ml(642,`code`),mN(643,`false`),lg(),mN(644,`.`),lg()()(),Ml(645,`tr`,17)(646,`td`,18)(647,`div`,26)(648,`span`,27),mN(649,` p-label-on`),ql(650,`br`),lg()()(),Ml(651,`td`,22)(652,`code`,28),mN(653,`string`),lg()(),Ml(654,`td`,24)(655,`p`)(656,`code`),mN(657,`true`),lg()()(),Ml(658,`td`,25)(659,`p`),mN(660,`Texto exibido quando o valor do componente for `),Ml(661,`code`),mN(662,`true`),lg(),mN(663,`.`),lg()()(),Ml(664,`tr`,17)(665,`td`,18)(666,`div`,26)(667,`span`,27),mN(668,` p-label-position`),ql(669,`br`),lg()()(),Ml(670,`td`,22)(671,`code`,30),mN(672,`PoSwitchLabelPosition`),lg()(),Ml(673,`td`,24),mN(674,`-`),lg(),Ml(675,`td`,25)(676,`em`)(677,`strong`),mN(678,`(opcional)`),lg()(),Ml(679,`p`),mN(680,`Posição de exibição do rótulo que fica ao lado do switch.`),lg(),Ml(681,`blockquote`)(682,`p`),mN(683,`Por padrão exibe à direita.`),lg()()()(),Ml(684,`tr`,17)(685,`td`,18)(686,`div`,26)(687,`span`,27),mN(688,` p-label-text-wrap`),ql(689,`br`),lg()()(),Ml(690,`td`,22)(691,`code`,29),mN(692,`boolean`),lg()(),Ml(693,`td`,24)(694,`p`)(695,`code`),mN(696,`false`),lg()()(),Ml(697,`td`,25)(698,`em`)(699,`strong`),mN(700,`(opcional)`),lg()(),Ml(701,`p`),mN(702,`Habilita a quebra automática do texto da propriedade `),Ml(703,`code`),mN(704,`p-label`),lg(),mN(705,`. Quando `),Ml(706,`code`),mN(707,`p-label-text-wrap`),lg(),mN(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(709,`tr`,17)(710,`td`,18)(711,`div`,26)(712,`span`,27),mN(713,` p-loading`),ql(714,`br`),lg()()(),Ml(715,`td`,22)(716,`code`,29),mN(717,`boolean`),lg()(),Ml(718,`td`,24)(719,`p`)(720,`code`),mN(721,`false`),lg()()(),Ml(722,`td`,25)(723,`em`)(724,`strong`),mN(725,`(opcional)`),lg()(),Ml(726,`p`),mN(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),lg()()(),Ml(728,`tr`,17)(729,`td`,18)(730,`div`,26)(731,`span`,27),mN(732,` name`),ql(733,`br`),lg()()(),Ml(734,`td`,22)(735,`code`,28),mN(736,`string`),lg()(),Ml(737,`td`,24),mN(738,`-`),lg(),Ml(739,`td`,25)(740,`p`),mN(741,`Nome do componente.`),lg()()(),Ml(742,`tr`,17)(743,`td`,18)(744,`div`,26)(745,`span`,27),mN(746,` p-helper`),ql(747,`br`),lg()()(),Ml(748,`td`,22)(749,`code`,31),mN(750,`PoHelperOptions `),lg(),Ml(751,`code`,28),mN(752,` string`),lg()(),Ml(753,`td`,24),mN(754,`-`),lg(),Ml(755,`td`,25)(756,`em`)(757,`strong`),mN(758,`(opcional)`),lg()(),Ml(759,`p`),mN(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(761,`code`),mN(762,`p-label`),lg(),mN(763,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(764,`code`),mN(765,`p-label`),lg(),mN(766,`.`),lg(),Ml(767,`blockquote`)(768,`p`),mN(769,`Para mais informações acesse: `),Ml(770,`a`,32),mN(771,`https://po-ui.io/documentation/po-helper`),lg(),mN(772,`.`),lg()(),Ml(773,`blockquote`)(774,`p`),mN(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(776,`code`),mN(777,`p-additional-help-tooltip`),lg(),mN(778,` e `),Ml(779,`code`),mN(780,`p-additional-help`),lg(),mN(781,`) será ignorado.`),lg()()()(),Ml(782,`tr`,17)(783,`td`,18)(784,`div`,26)(785,`span`,27),mN(786,` p-size`),ql(787,`br`),lg()()(),Ml(788,`td`,22)(789,`code`,28),mN(790,`string`),lg()(),Ml(791,`td`,24)(792,`p`)(793,`code`),mN(794,`medium`),lg()()(),Ml(795,`td`,25)(796,`em`)(797,`strong`),mN(798,`(opcional)`),lg()(),Ml(799,`p`),mN(800,`Define o tamanho do componente:`),lg(),Ml(801,`ul`)(802,`li`)(803,`code`),mN(804,`small`),lg(),mN(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),lg(),Ml(806,`li`)(807,`code`),mN(808,`medium`),lg(),mN(809,`: altura de 24px.`),lg()(),Ml(810,`blockquote`)(811,`p`),mN(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(813,`code`),mN(814,`medium`),lg(),mN(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(816,`a`,33),mN(817,`po-theme`),lg(),mN(818,`.`),lg()()()()(),Ml(819,`h3`,13),mN(820,`Métodos`),lg(),Ml(821,`table`,34)(822,`tr`,17)(823,`th`,35)(824,`div`,26)(825,`h4`)(826,`span`,27),mN(827,` showAdditionalHelp `),lg()()()()(),Ml(828,`tr`,25)(829,`td`,25)(830,`p`),mN(831,`Método que exibe `),Ml(832,`code`),mN(833,`p-helper`),lg(),mN(834,` ou executa a ação definida em `),Ml(835,`code`),mN(836,`p-helper{eventOnClick}`),lg(),mN(837,` ou em `),Ml(838,`code`),mN(839,`p-additionalHelp`),lg(),mN(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(841,`code`),mN(842,`p-keydown`),lg(),mN(843,`.`),lg(),Ml(844,`blockquote`)(845,`p`),mN(846,`Exibe ou oculta o conteúdo do componente `),Ml(847,`code`),mN(848,`po-helper`),lg(),mN(849,` quando o componente estiver com foco.`),lg()(),Ml(850,`pre`)(851,`code`),mN(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),lg()(),Ml(853,`pre`)(854,`code`),mN(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(856,`br`),Ml(857,`table`,34)(858,`tr`,17)(859,`th`,35)(860,`div`,26)(861,`h4`)(862,`span`,27),mN(863,` focus `),lg()()()()(),Ml(864,`tr`,25)(865,`td`,25)(866,`p`),mN(867,`Função que atribui foco ao componente.`),lg(),Ml(868,`p`),mN(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(870,`pre`)(871,`code`),mN(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),lg()()()()(),ql(873,`br`),Ml(874,`table`,34)(875,`tr`,17)(876,`th`,35)(877,`div`,26)(878,`h4`)(879,`span`,27),mN(880,` showAdditionalHelp `),lg()()()()(),Ml(881,`tr`,25)(882,`td`,25)(883,`p`),mN(884,`Método que exibe `),Ml(885,`code`),mN(886,`p-helper`),lg(),mN(887,` ou executa a ação definida em `),Ml(888,`code`),mN(889,`p-helper{eventOnClick}`),lg(),mN(890,` ou em `),Ml(891,`code`),mN(892,`p-additionalHelp`),lg(),mN(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(894,`code`),mN(895,`p-keydown`),lg(),mN(896,`.`),lg(),Ml(897,`blockquote`)(898,`p`),mN(899,`Exibe ou oculta o conteúdo do componente `),Ml(900,`code`),mN(901,`po-helper`),lg(),mN(902,` quando o componente estiver com foco.`),lg()(),Ml(903,`pre`)(904,`code`),mN(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),lg()(),Ml(906,`pre`)(907,`code`,36),mN(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(909,`br`),Ml(910,`h3`),mN(911,`Enums`),lg(),Ml(912,`h4`,4)(913,`code`,5),mN(914,`PoSwitchLabelPosition`),lg()(),Ml(915,`div`,2)(916,`p`),mN(917,`Enum para posicionar o label do valor do po-switch.`),lg()(),Ml(918,`h4`,13),mN(919,`Propriedades`),lg(),Ml(920,`table`,14)(921,`tr`,15)(922,`th`,16),mN(923,`Nome`),lg(),Ml(924,`th`,16),mN(925,`Descrição`),lg()(),Ml(926,`tr`,17)(927,`td`,18)(928,`div`,26)(929,`span`,27),mN(930,` Right`),ql(931,`br`),lg()()(),Ml(932,`td`,25)(933,`p`),mN(934,`Posiciona o label do lado esquerdo do switch.`),lg()()(),Ml(935,`tr`,17)(936,`td`,18)(937,`div`,26)(938,`span`,27),mN(939,` Left`),ql(940,`br`),lg()()(),Ml(941,`td`,25)(942,`p`),mN(943,`Posiciona o label do lado direito do switch.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ae=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Switch`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-switch-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-switch-basic-view`)(6,`sample-po-switch-labs-view`)(7,`sample-po-switch-order-view`)(8,`sample-po-switch-order-reactive-form-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,me,ue,Se,Ee,ge],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[NL.forChild(Ae),NL]})}return o})();var gt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,xe]})}return o})();export{gt as DocPoSwitchModule};