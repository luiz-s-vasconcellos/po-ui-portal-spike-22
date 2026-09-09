import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ct as X4,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jt as gu,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ba as yw,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,lr as Gl,nn as j4,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,tr as EY,ui as a0,ut as S8e,va as yY,xr as Lk,yi as cN,zi as jk}from"./main-3EWTGE7T.js";var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,i){l&1&&Gl(0,`po-switch`,0)},dependencies:[j4],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Switch Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-switch-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:gu.Left},{label:`Right`,value:gu.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let s=Ax();Tl(0,`po-switch`,1),ww(`ngModelChange`,function(r){return Ky(s),uN(i.switch,r)||(i.switch=r),Xy(r)}),ht(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(s),uN(i.label,r)||(i.label=r),Xy(r)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(s),uN(i.help,r)||(i.help=r),Xy(r)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(s),uN(i.helperText,r)||(i.helperText=r),Xy(r)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(s),uN(i.labelOff,r)||(i.labelOff=r),Xy(r)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(r){return Ky(s),uN(i.labelOn,r)||(i.labelOn=r),Xy(r)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(r){return Ky(s),uN(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),Xy(r)}),ag(),a0(),Tl(14,`po-radio-group`,11),ww(`ngModelChange`,function(r){return Ky(s),uN(i.labelPosition,r)||(i.labelPosition=r),Xy(r)}),ag(),a0(),Tl(15,`po-checkbox-group`,12),ww(`ngModelChange`,function(r){return Ky(s),uN(i.properties,r)||(i.properties=r),Xy(r)}),ag(),a0(),Tl(16,`po-radio-group`,13),ww(`ngModelChange`,function(r){return Ky(s),uN(i.size,r)||(i.size=r),Xy(r)}),ag(),a0(),Tl(17,`div`,2)(18,`po-button`,14),ht(`p-click`,function(){return i.restore()}),ag()()()}l&2&&(Ew(`ngModel`,i.switch),nw(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-field-error-message`,i.fieldErrorMessage)(`p-format-model`,i.properties.includes(`formatModel`))(`p-help`,i.help)(`p-hide-label-status`,i.properties.includes(`hideLabelStatus`))(`p-invalid-value`,i.properties?.includes(`invalidValue`))(`p-label`,i.label)(`p-label-off`,i.labelOff)(`p-label-on`,i.labelOn)(`p-label-position`,i.labelPosition)(`p-label-text-wrap`,i.properties.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size),l0(),jp(3),nw(`p-value`,i.switch),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.labelOff),l0(),jp(),Ew(`ngModel`,i.labelOn),l0(),jp(),Ew(`ngModel`,i.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,i.labelPosition),nw(`p-options`,i.labelPositionOptions),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,j4,ybe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Switch Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-switch
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-switch-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{poNotification=f(Eu);labelPosition=gu.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){if(l&1){let s=Ax();Tl(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),Gl(4,`po-table`,3),Tl(5,`po-switch`,4),ww(`ngModelChange`,function(r){return Ky(s),uN(i.serviceFee,r)||(i.serviceFee=r),Xy(r)}),ht(`p-change`,function(){return i.addServiceFee()}),ag(),a0(),Tl(6,`div`,5)(7,`div`,6),cN(8,`Total value`),ag(),Tl(9,`span`,7),cN(10,`R$`),ag(),Tl(11,`span`,8),cN(12),ag()(),Tl(13,`div`,1)(14,`po-button`,9),ht(`p-click`,function(){return i.confirm()}),ag()()()()()}l&2&&(jp(4),nw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),jp(),Ew(`ngModel`,i.serviceFee),nw(`p-label-position`,i.labelPosition),l0(),jp(7),yw(i.totalAmount))},dependencies:[yY,gY,mY,Ak,Tk,Zt,j4,X4,O8e],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Switch - Order Summary`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-switch-order/sample-po-switch-order.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-switch-order/sample-po-switch-order.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-switch-order`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Me,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{poNotification=f(Eu);formBuilder=f(EY);formOrderSummary;labelPosition=gu.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let d=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=d?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),Gl(3,`po-table`,3),Tl(4,`po-switch`,4),ht(`p-change`,function(){return i.addServiceFee()}),ag(),a0(),Tl(5,`div`,5)(6,`div`,6),cN(7,`Total value`),ag(),Tl(8,`span`,7),cN(9,`R$`),ag(),Tl(10,`span`,8),cN(11),ag()(),Tl(12,`div`,0)(13,`po-button`,9),ht(`p-click`,function(){return i.confirm()}),ag()()()()()),l&2&&(jp(2),nw(`formGroup`,i.formOrderSummary),jp(),nw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),jp(),nw(`p-label-position`,i.labelPosition),l0(),jp(7),yw(i.totalAmount))},dependencies:[yY,gY,mY,jk,Lk,Zt,j4,X4,O8e],encapsulation:2,changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Switch - Order Summary Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-switch-order-reactive-form`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoSwitchComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,` O componente `),Tl(24,`code`),cN(25,`po-switch`),ag(),cN(26,` é um `),Tl(27,`a`,6),cN(28,`checkbox`),ag(),cN(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),ag(),Tl(30,`p`),cN(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),ag(),Tl(32,`p`),cN(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),ag(),Tl(34,`blockquote`)(35,`p`),cN(36,`O componente não altera o valor incial informado no `),Tl(37,`em`),cN(38,`model`),ag(),cN(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),ag()(),Tl(40,`h4`),cN(41,`Boas práticas`),ag(),Tl(42,`ul`)(43,`li`),cN(44,`Evite `),Tl(45,`code`),cN(46,`labels`),ag(),cN(47,` extensos que quebram o layout do `),Tl(48,`code`),cN(49,`po-switch`),ag(),cN(50,`, use `),Tl(51,`code`),cN(52,`labels`),ag(),cN(53,` diretos, curtos e intuitivos.`),ag()(),Tl(54,`h4`),cN(55,`Acessibilidade tratada no componente`),ag(),Tl(56,`p`),cN(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(58,`ul`)(59,`li`),cN(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),Tl(61,`a`,7),cN(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),ag()(),Tl(63,`li`),cN(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Tl(65,`a`,8),cN(66,`WCAG 2.4.12: Focus Appearance`),ag()()(),Tl(67,`h4`),cN(68,`Tokens customizáveis`),ag(),Tl(69,`p`),cN(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(71,`blockquote`)(72,`p`),cN(73,`Para maiores informações, acesse o guia `),Tl(74,`a`,9),cN(75,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(76,`.`),ag()(),Tl(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),cN(81,`Propriedade`),ag(),Tl(82,`th`),cN(83,`Descrição`),ag(),Tl(84,`th`),cN(85,`Valor Padrão`),ag()()(),Tl(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),cN(90,`Unchecked`),ag()(),Gl(91,`td`)(92,`td`),ag(),Tl(93,`tr`)(94,`td`)(95,`code`),cN(96,`--color-unchecked`),ag()(),Tl(97,`td`),cN(98,`Cor principal no estado desmarcado`),ag(),Tl(99,`td`)(100,`code`),cN(101,`var(--color-neutral-light-00)`),ag()()(),Tl(102,`tr`)(103,`td`)(104,`code`),cN(105,`--border-color`),ag()(),Tl(106,`td`),cN(107,`Cor da borda`),ag(),Tl(108,`td`)(109,`code`),cN(110,`var(--color-neutral-dark-70)`),ag()()(),Tl(111,`tr`)(112,`td`)(113,`code`),cN(114,`--track-unchecked`),ag()(),Tl(115,`td`),cN(116,`Cor principal da faixa no estado desmarcado`),ag(),Tl(117,`td`)(118,`code`),cN(119,`var(--color-neutral-light-20)`),ag()()(),Tl(120,`tr`)(121,`td`)(122,`strong`),cN(123,`Checked`),ag()(),Gl(124,`td`)(125,`td`),ag(),Tl(126,`tr`)(127,`td`)(128,`code`),cN(129,`--color-checked`),ag()(),Tl(130,`td`),cN(131,`Cor principal no estado selecionado`),ag(),Tl(132,`td`)(133,`code`),cN(134,`var(--color-action-default)`),ag()()(),Tl(135,`tr`)(136,`td`)(137,`code`),cN(138,`--track-checked`),ag()(),Tl(139,`td`),cN(140,`Cor da faixa no estado selecionado`),ag(),Tl(141,`td`)(142,`code`),cN(143,`var(--color-brand-01-light)`),ag()()(),Tl(144,`tr`)(145,`td`)(146,`strong`),cN(147,`Hover`),ag()(),Gl(148,`td`)(149,`td`),ag(),Tl(150,`tr`)(151,`td`)(152,`code`),cN(153,`--color-unchecked-hover`),ag()(),Tl(154,`td`),cN(155,`Cor principal no estado hover desmarcado`),ag(),Tl(156,`td`)(157,`code`),cN(158,`var(--color-action-pressed)`),ag()()(),Tl(159,`tr`)(160,`td`)(161,`code`),cN(162,`--color-checked-hover`),ag()(),Tl(163,`td`),cN(164,`Cor principal no estado hover marcado`),ag(),Tl(165,`td`)(166,`code`),cN(167,`var(--color-action-pressed)`),ag()()(),Tl(168,`tr`)(169,`td`)(170,`strong`),cN(171,`Focused`),ag()(),Gl(172,`td`)(173,`td`),ag(),Tl(174,`tr`)(175,`td`)(176,`code`),cN(177,`--outline-color-focused`),ag()(),Tl(178,`td`),cN(179,`Cor do outline do estado de focus`),ag(),Tl(180,`td`)(181,`code`),cN(182,`var(--color-action-focus)`),ag()()(),Tl(183,`tr`)(184,`td`)(185,`strong`),cN(186,`Disabled`),ag()(),Gl(187,`td`)(188,`td`),ag(),Tl(189,`tr`)(190,`td`)(191,`code`),cN(192,`--color-unchecked-disabled`),ag()(),Tl(193,`td`),cN(194,`Cor principal do disabled no estado desmarcado`),ag(),Tl(195,`td`)(196,`code`),cN(197,`var(--color-neutral-light-20)`),ag()()(),Tl(198,`tr`)(199,`td`)(200,`code`),cN(201,`--color-checked-disabled`),ag()(),Tl(202,`td`),cN(203,`Cor principal do disabled no estado marcado`),ag(),Tl(204,`td`)(205,`code`),cN(206,`var(--color-action-disabled)`),ag()()()()()(),Tl(207,`div`,10)(208,`h4`,11),cN(209,`Seletor`),ag(),Tl(210,`pre`,12),cN(211,`<po-switch
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
`),ag()(),Tl(212,`h4`,13),cN(213,`Propriedades`),ag(),Tl(214,`table`,14)(215,`tr`,15)(216,`th`,16),cN(217,`Nome`),ag(),Tl(218,`th`,16),cN(219,`Tipo`),ag(),Tl(220,`th`,16),cN(221,`Padrão`),ag(),Tl(222,`th`,16),cN(223,`Descrição`),ag()(),Tl(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),cN(228,` (p-additional-help)`),Gl(229,`br`),ag()(),Tl(230,`div`,21),cN(231,`Deprecated`),ag()(),Tl(232,`td`,22)(233,`code`,23),cN(234,`EventEmitter`),ag()(),Tl(235,`td`,24),cN(236,`-`),ag(),Tl(237,`td`,25)(238,`em`)(239,`strong`),cN(240,`(opcional)`),ag()(),Tl(241,`p`),cN(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(243,`blockquote`)(244,`p`),cN(245,`Essa propriedade está `),Tl(246,`strong`),cN(247,`depreciada`),ag(),cN(248,` e será removida na versão `),Tl(249,`code`),cN(250,`23.x.x`),ag(),cN(251,`. Recomendamos utilizar a propriedade `),Tl(252,`code`),cN(253,`p-helper`),ag(),cN(254,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(255,`tr`,17)(256,`td`,18)(257,`div`,26)(258,`span`,27),cN(259,` p-additional-help-tooltip`),Gl(260,`br`),ag()(),Tl(261,`div`,21),cN(262,`Deprecated`),ag()(),Tl(263,`td`,22)(264,`code`,28),cN(265,`string`),ag()(),Tl(266,`td`,24),cN(267,`-`),ag(),Tl(268,`td`,25)(269,`em`)(270,`strong`),cN(271,`(opcional)`),ag()(),Tl(272,`p`),cN(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(274,`code`),cN(275,`po-helper`),ag(),cN(276,`.
`),Tl(277,`strong`),cN(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(279,`blockquote`)(280,`p`),cN(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(282,`blockquote`)(283,`p`),cN(284,`Essa propriedade está `),Tl(285,`strong`),cN(286,`depreciada`),ag(),cN(287,` e será removida na versão `),Tl(288,`code`),cN(289,`23.x.x`),ag(),cN(290,`. Recomendamos utilizar a propriedade `),Tl(291,`code`),cN(292,`p-helper`),ag(),cN(293,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(294,`tr`,17)(295,`td`,18)(296,`div`,26)(297,`span`,27),cN(298,` p-append-in-body`),Gl(299,`br`),ag()()(),Tl(300,`td`,22)(301,`code`,29),cN(302,`boolean`),ag()(),Tl(303,`td`,24)(304,`p`)(305,`code`),cN(306,`false`),ag()()(),Tl(307,`td`,25)(308,`em`)(309,`strong`),cN(310,`(opcional)`),ag()(),Tl(311,`p`),cN(312,`Define que o popover (`),Tl(313,`code`),cN(314,`p-helper`),ag(),cN(315,` e/ou `),Tl(316,`code`),cN(317,`p-error-limit`),ag(),cN(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(319,`blockquote`)(320,`p`),cN(321,`Quando utilizado com `),Tl(322,`code`),cN(323,`p-helper`),ag(),cN(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(325,`tr`,17)(326,`td`,18)(327,`div`,19)(328,`span`,20),cN(329,` (p-change)`),Gl(330,`br`),ag()()(),Tl(331,`td`,22)(332,`code`,23),cN(333,`EventEmitter`),ag()(),Tl(334,`td`,24),cN(335,`-`),ag(),Tl(336,`td`,25)(337,`em`)(338,`strong`),cN(339,`(opcional)`),ag()(),Tl(340,`p`),cN(341,`Evento disparado ao alterar valor do campo.`),ag()()(),Tl(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),cN(346,` (p-change-model)`),Gl(347,`br`),ag()()(),Tl(348,`td`,22)(349,`code`,23),cN(350,`EventEmitter`),ag()(),Tl(351,`td`,24),cN(352,`-`),ag(),Tl(353,`td`,25)(354,`em`)(355,`strong`),cN(356,`(opcional)`),ag()(),Tl(357,`p`),cN(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(359,`code`),cN(360,`setValue`),ag(),cN(361,`, `),Tl(362,`code`),cN(363,`patchValue`),ag(),cN(364,`, carregamento assíncrono).`),ag(),Tl(365,`p`),cN(366,`Diferentemente do `),Tl(367,`code`),cN(368,`p-change`),ag(),cN(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(370,`code`),cN(371,`p-change-model`),ag(),cN(372,` cobre todos os cenários de alteração de valor.`),ag(),Tl(373,`p`),cN(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(375,`tr`,17)(376,`td`,18)(377,`div`,26)(378,`span`,27),cN(379,` p-compact-label`),Gl(380,`br`),ag()()(),Tl(381,`td`,22)(382,`code`,29),cN(383,`boolean`),ag()(),Tl(384,`td`,24)(385,`p`)(386,`code`),cN(387,`false`),ag()()(),Tl(388,`td`,25)(389,`em`)(390,`strong`),cN(391,`(opcional)`),ag()(),Tl(392,`p`),cN(393,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(394,`p`),cN(395,`Quando habilitado (`),Tl(396,`code`),cN(397,`true`),ag(),cN(398,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(399,`ul`)(400,`li`)(401,`code`),cN(402,`po-label`),ag()(),Tl(403,`li`)(404,`code`),cN(405,`p-requirement (showRequired)`),ag()(),Tl(406,`li`)(407,`code`),cN(408,`po-helper`),ag()()(),Tl(409,`p`),cN(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(411,`p`),cN(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(413,`ul`)(414,`li`)(415,`code`),cN(416,`--field-container-title-justify`),ag()(),Tl(417,`li`)(418,`code`),cN(419,`--field-container-title-flex`),ag()()(),Tl(420,`p`),cN(421,`Exemplo:`),ag(),Tl(422,`pre`)(423,`code`),cN(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(425,`p`),cN(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(427,`tr`,17)(428,`td`,18)(429,`div`,26)(430,`span`,27),cN(431,` p-disabled`),Gl(432,`br`),ag()()(),Tl(433,`td`,22)(434,`code`,29),cN(435,`boolean`),ag()(),Tl(436,`td`,24)(437,`p`)(438,`code`),cN(439,`false`),ag()()(),Tl(440,`td`,25)(441,`em`)(442,`strong`),cN(443,`(opcional)`),ag()(),Tl(444,`p`),cN(445,`Indica se o campo será desabilitado.`),ag()()(),Tl(446,`tr`,17)(447,`td`,18)(448,`div`,26)(449,`span`,27),cN(450,` p-error-limit`),Gl(451,`br`),ag()()(),Tl(452,`td`,22)(453,`code`,29),cN(454,`boolean`),ag()(),Tl(455,`td`,24)(456,`p`)(457,`code`),cN(458,`false`),ag()()(),Tl(459,`td`,25)(460,`em`)(461,`strong`),cN(462,`(opcional)`),ag()(),Tl(463,`p`),cN(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(465,`blockquote`)(466,`p`),cN(467,`Caso essa propriedade seja definida como `),Tl(468,`code`),cN(469,`true`),ag(),cN(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(471,`tr`,17)(472,`td`,18)(473,`div`,26)(474,`span`,27),cN(475,` p-field-error-message`),Gl(476,`br`),ag()()(),Tl(477,`td`,22)(478,`code`,28),cN(479,`string`),ag()(),Tl(480,`td`,24),cN(481,`-`),ag(),Tl(482,`td`,25)(483,`em`)(484,`strong`),cN(485,`(opcional)`),ag()(),Tl(486,`p`),cN(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),ag()()(),Tl(488,`tr`,17)(489,`td`,18)(490,`div`,26)(491,`span`,27),cN(492,` p-format-model`),Gl(493,`br`),ag()()(),Tl(494,`td`,22)(495,`code`,29),cN(496,`boolean`),ag()(),Tl(497,`td`,24)(498,`p`)(499,`code`),cN(500,`false`),ag()()(),Tl(501,`td`,25)(502,`em`)(503,`strong`),cN(504,`(opcional)`),ag()(),Tl(505,`p`),cN(506,`Indica se o `),Tl(507,`code`),cN(508,`model`),ag(),cN(509,` receberá o valor formatado pelas propriedades `),Tl(510,`code`),cN(511,`p-label-on`),ag(),cN(512,` e `),Tl(513,`code`),cN(514,`p-label-off`),ag(),cN(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ag(),Tl(516,`blockquote`)(517,`p`),cN(518,`Por padrão será atribuído `),Tl(519,`code`),cN(520,`false`),ag(),cN(521,`.`),ag()()()(),Tl(522,`tr`,17)(523,`td`,18)(524,`div`,26)(525,`span`,27),cN(526,` p-help`),Gl(527,`br`),ag()()(),Tl(528,`td`,22)(529,`code`,28),cN(530,`string`),ag()(),Tl(531,`td`,24),cN(532,`-`),ag(),Tl(533,`td`,25)(534,`p`),cN(535,`Texto de apoio para o campo.`),ag()()(),Tl(536,`tr`,17)(537,`td`,18)(538,`div`,26)(539,`span`,27),cN(540,` p-hide-label-status`),Gl(541,`br`),ag()()(),Tl(542,`td`,22)(543,`code`,29),cN(544,`boolean`),ag()(),Tl(545,`td`,24)(546,`p`)(547,`code`),cN(548,`false`),ag()()(),Tl(549,`td`,25)(550,`em`)(551,`strong`),cN(552,`(opcional)`),ag()(),Tl(553,`p`),cN(554,`Indica se o status do `),Tl(555,`code`),cN(556,`model`),ag(),cN(557,` será escondido visualmente ao lado do switch.`),ag(),Tl(558,`blockquote`)(559,`p`),cN(560,`Por padrão será atribuído `),Tl(561,`code`),cN(562,`false`),ag(),cN(563,`.`),ag()()()(),Tl(564,`tr`,17)(565,`td`,18)(566,`div`,26)(567,`span`,27),cN(568,` p-invalid-value`),Gl(569,`br`),ag()()(),Tl(570,`td`,22)(571,`code`,29),cN(572,`boolean`),ag()(),Tl(573,`td`,24)(574,`p`)(575,`code`),cN(576,`false`),ag()()(),Tl(577,`td`,25)(578,`em`)(579,`strong`),cN(580,`(opcional)`),ag()(),Tl(581,`p`),cN(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Tl(583,`code`),cN(584,`p-field-error-message`),ag(),cN(585,`.`),ag(),Tl(586,`blockquote`)(587,`p`),cN(588,`Caso essa propriedade seja definida como `),Tl(589,`code`),cN(590,`true`),ag(),cN(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ag()()()(),Tl(592,`tr`,17)(593,`td`,18)(594,`div`,19)(595,`span`,20),cN(596,` (p-keydown)`),Gl(597,`br`),ag()()(),Tl(598,`td`,22)(599,`code`,23),cN(600,`EventEmitter`),ag()(),Tl(601,`td`,24),cN(602,`-`),ag(),Tl(603,`td`,25)(604,`em`)(605,`strong`),cN(606,`(opcional)`),ag()(),Tl(607,`p`),cN(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(609,`code`),cN(610,`KeyboardEvent`),ag(),cN(611,` com informações sobre a tecla.`),ag()()(),Tl(612,`tr`,17)(613,`td`,18)(614,`div`,26)(615,`span`,27),cN(616,` p-label`),Gl(617,`br`),ag()()(),Tl(618,`td`,22)(619,`code`,28),cN(620,`string`),ag()(),Tl(621,`td`,24),cN(622,`-`),ag(),Tl(623,`td`,25)(624,`p`),cN(625,`Rótulo exibido pelo componente.`),ag()()(),Tl(626,`tr`,17)(627,`td`,18)(628,`div`,26)(629,`span`,27),cN(630,` p-label-off`),Gl(631,`br`),ag()()(),Tl(632,`td`,22)(633,`code`,28),cN(634,`string`),ag()(),Tl(635,`td`,24)(636,`p`)(637,`code`),cN(638,`false`),ag()()(),Tl(639,`td`,25)(640,`p`),cN(641,`Texto exibido quando o valor do componente for `),Tl(642,`code`),cN(643,`false`),ag(),cN(644,`.`),ag()()(),Tl(645,`tr`,17)(646,`td`,18)(647,`div`,26)(648,`span`,27),cN(649,` p-label-on`),Gl(650,`br`),ag()()(),Tl(651,`td`,22)(652,`code`,28),cN(653,`string`),ag()(),Tl(654,`td`,24)(655,`p`)(656,`code`),cN(657,`true`),ag()()(),Tl(658,`td`,25)(659,`p`),cN(660,`Texto exibido quando o valor do componente for `),Tl(661,`code`),cN(662,`true`),ag(),cN(663,`.`),ag()()(),Tl(664,`tr`,17)(665,`td`,18)(666,`div`,26)(667,`span`,27),cN(668,` p-label-position`),Gl(669,`br`),ag()()(),Tl(670,`td`,22)(671,`code`,30),cN(672,`PoSwitchLabelPosition`),ag()(),Tl(673,`td`,24),cN(674,`-`),ag(),Tl(675,`td`,25)(676,`em`)(677,`strong`),cN(678,`(opcional)`),ag()(),Tl(679,`p`),cN(680,`Posição de exibição do rótulo que fica ao lado do switch.`),ag(),Tl(681,`blockquote`)(682,`p`),cN(683,`Por padrão exibe à direita.`),ag()()()(),Tl(684,`tr`,17)(685,`td`,18)(686,`div`,26)(687,`span`,27),cN(688,` p-label-text-wrap`),Gl(689,`br`),ag()()(),Tl(690,`td`,22)(691,`code`,29),cN(692,`boolean`),ag()(),Tl(693,`td`,24)(694,`p`)(695,`code`),cN(696,`false`),ag()()(),Tl(697,`td`,25)(698,`em`)(699,`strong`),cN(700,`(opcional)`),ag()(),Tl(701,`p`),cN(702,`Habilita a quebra automática do texto da propriedade `),Tl(703,`code`),cN(704,`p-label`),ag(),cN(705,`. Quando `),Tl(706,`code`),cN(707,`p-label-text-wrap`),ag(),cN(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(709,`tr`,17)(710,`td`,18)(711,`div`,26)(712,`span`,27),cN(713,` p-loading`),Gl(714,`br`),ag()()(),Tl(715,`td`,22)(716,`code`,29),cN(717,`boolean`),ag()(),Tl(718,`td`,24)(719,`p`)(720,`code`),cN(721,`false`),ag()()(),Tl(722,`td`,25)(723,`em`)(724,`strong`),cN(725,`(opcional)`),ag()(),Tl(726,`p`),cN(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),ag()()(),Tl(728,`tr`,17)(729,`td`,18)(730,`div`,26)(731,`span`,27),cN(732,` name`),Gl(733,`br`),ag()()(),Tl(734,`td`,22)(735,`code`,28),cN(736,`string`),ag()(),Tl(737,`td`,24),cN(738,`-`),ag(),Tl(739,`td`,25)(740,`p`),cN(741,`Nome do componente.`),ag()()(),Tl(742,`tr`,17)(743,`td`,18)(744,`div`,26)(745,`span`,27),cN(746,` p-helper`),Gl(747,`br`),ag()()(),Tl(748,`td`,22)(749,`code`,31),cN(750,`PoHelperOptions `),ag(),Tl(751,`code`,28),cN(752,` string`),ag()(),Tl(753,`td`,24),cN(754,`-`),ag(),Tl(755,`td`,25)(756,`em`)(757,`strong`),cN(758,`(opcional)`),ag()(),Tl(759,`p`),cN(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(761,`code`),cN(762,`p-label`),ag(),cN(763,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(764,`code`),cN(765,`p-label`),ag(),cN(766,`.`),ag(),Tl(767,`blockquote`)(768,`p`),cN(769,`Para mais informações acesse: `),Tl(770,`a`,32),cN(771,`https://po-ui.io/documentation/po-helper`),ag(),cN(772,`.`),ag()(),Tl(773,`blockquote`)(774,`p`),cN(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(776,`code`),cN(777,`p-additional-help-tooltip`),ag(),cN(778,` e `),Tl(779,`code`),cN(780,`p-additional-help`),ag(),cN(781,`) será ignorado.`),ag()()()(),Tl(782,`tr`,17)(783,`td`,18)(784,`div`,26)(785,`span`,27),cN(786,` p-size`),Gl(787,`br`),ag()()(),Tl(788,`td`,22)(789,`code`,28),cN(790,`string`),ag()(),Tl(791,`td`,24)(792,`p`)(793,`code`),cN(794,`medium`),ag()()(),Tl(795,`td`,25)(796,`em`)(797,`strong`),cN(798,`(opcional)`),ag()(),Tl(799,`p`),cN(800,`Define o tamanho do componente:`),ag(),Tl(801,`ul`)(802,`li`)(803,`code`),cN(804,`small`),ag(),cN(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),ag(),Tl(806,`li`)(807,`code`),cN(808,`medium`),ag(),cN(809,`: altura de 24px.`),ag()(),Tl(810,`blockquote`)(811,`p`),cN(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(813,`code`),cN(814,`medium`),ag(),cN(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(816,`a`,33),cN(817,`po-theme`),ag(),cN(818,`.`),ag()()()()(),Tl(819,`h3`,13),cN(820,`Métodos`),ag(),Tl(821,`table`,34)(822,`tr`,17)(823,`th`,35)(824,`div`,26)(825,`h4`)(826,`span`,27),cN(827,` showAdditionalHelp `),ag()()()()(),Tl(828,`tr`,25)(829,`td`,25)(830,`p`),cN(831,`Método que exibe `),Tl(832,`code`),cN(833,`p-helper`),ag(),cN(834,` ou executa a ação definida em `),Tl(835,`code`),cN(836,`p-helper{eventOnClick}`),ag(),cN(837,` ou em `),Tl(838,`code`),cN(839,`p-additionalHelp`),ag(),cN(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(841,`code`),cN(842,`p-keydown`),ag(),cN(843,`.`),ag(),Tl(844,`blockquote`)(845,`p`),cN(846,`Exibe ou oculta o conteúdo do componente `),Tl(847,`code`),cN(848,`po-helper`),ag(),cN(849,` quando o componente estiver com foco.`),ag()(),Tl(850,`pre`)(851,`code`),cN(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ag()(),Tl(853,`pre`)(854,`code`),cN(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(856,`br`),Tl(857,`table`,34)(858,`tr`,17)(859,`th`,35)(860,`div`,26)(861,`h4`)(862,`span`,27),cN(863,` focus `),ag()()()()(),Tl(864,`tr`,25)(865,`td`,25)(866,`p`),cN(867,`Função que atribui foco ao componente.`),ag(),Tl(868,`p`),cN(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(870,`pre`)(871,`code`),cN(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),ag()()()()(),Gl(873,`br`),Tl(874,`table`,34)(875,`tr`,17)(876,`th`,35)(877,`div`,26)(878,`h4`)(879,`span`,27),cN(880,` showAdditionalHelp `),ag()()()()(),Tl(881,`tr`,25)(882,`td`,25)(883,`p`),cN(884,`Método que exibe `),Tl(885,`code`),cN(886,`p-helper`),ag(),cN(887,` ou executa a ação definida em `),Tl(888,`code`),cN(889,`p-helper{eventOnClick}`),ag(),cN(890,` ou em `),Tl(891,`code`),cN(892,`p-additionalHelp`),ag(),cN(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(894,`code`),cN(895,`p-keydown`),ag(),cN(896,`.`),ag(),Tl(897,`blockquote`)(898,`p`),cN(899,`Exibe ou oculta o conteúdo do componente `),Tl(900,`code`),cN(901,`po-helper`),ag(),cN(902,` quando o componente estiver com foco.`),ag()(),Tl(903,`pre`)(904,`code`),cN(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),ag()(),Tl(906,`pre`)(907,`code`,36),cN(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(909,`br`),Tl(910,`h3`),cN(911,`Enums`),ag(),Tl(912,`h4`,4)(913,`code`,5),cN(914,`PoSwitchLabelPosition`),ag()(),Tl(915,`div`,2)(916,`p`),cN(917,`Enum para posicionar o label do valor do po-switch.`),ag()(),Tl(918,`h4`,13),cN(919,`Propriedades`),ag(),Tl(920,`table`,14)(921,`tr`,15)(922,`th`,16),cN(923,`Nome`),ag(),Tl(924,`th`,16),cN(925,`Descrição`),ag()(),Tl(926,`tr`,17)(927,`td`,18)(928,`div`,26)(929,`span`,27),cN(930,` Right`),Gl(931,`br`),ag()()(),Tl(932,`td`,25)(933,`p`),cN(934,`Posiciona o label do lado esquerdo do switch.`),ag()()(),Tl(935,`tr`,17)(936,`td`,18)(937,`div`,26)(938,`span`,27),cN(939,` Left`),Gl(940,`br`),ag()()(),Tl(941,`td`,25)(942,`p`),cN(943,`Posiciona o label do lado direito do switch.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ae=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Switch`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-switch-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-switch-basic-view`)(6,`sample-po-switch-labs-view`)(7,`sample-po-switch-order-view`)(8,`sample-po-switch-order-reactive-form-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,me,ue,Se,Ee,ge],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[bL.forChild(Ae),bL]})}return o})();var gt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,xe]})}return o})();export{gt as DocPoSwitchModule};