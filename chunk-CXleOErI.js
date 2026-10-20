import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Fn as wu,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Lr as SF,Mn as w5,Pi as mt,Qi as tb,Ri as nu,Rt as _oe,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,et as Noe,i as _a,ir as EF,ji as mO,ki as kF,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,i){l&1&&nu(0,`po-switch`,0)},dependencies:[w5],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Switch Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-switch-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:wu.Left},{label:`Right`,value:wu.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let s=Sx();jc(0,`po-switch`,1),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.switch,r)||(i.switch=r),v_(r)}),mt(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.label,r)||(i.label=r),v_(r)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.help,r)||(i.help=r),v_(r)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.helperText,r)||(i.helperText=r),v_(r)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.labelOff,r)||(i.labelOff=r),v_(r)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.labelOn,r)||(i.labelOn=r),v_(r)}),wg(),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),v_(r)}),wg(),jc(14,`po-radio-group`,11),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.labelPosition,r)||(i.labelPosition=r),v_(r)}),wg(),jc(15,`po-checkbox-group`,12),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.properties,r)||(i.properties=r),v_(r)}),wg(),jc(16,`po-radio-group`,13),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.size,r)||(i.size=r),v_(r)}),wg(),jc(17,`div`,2)(18,`po-button`,14),mt(`p-click`,function(){return i.restore()}),wg()()()}l&2&&(ib(`ngModel`,i.switch),jE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-field-error-message`,i.fieldErrorMessage)(`p-format-model`,i.properties.includes(`formatModel`))(`p-help`,i.help)(`p-hide-label-status`,i.properties.includes(`hideLabelStatus`))(`p-invalid-value`,i.properties?.includes(`invalidValue`))(`p-label`,i.label)(`p-label-off`,i.labelOff)(`p-label-on`,i.labelOn)(`p-label-position`,i.labelPosition)(`p-label-text-wrap`,i.properties.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size),t0(),rg(3),jE(`p-value`,i.switch),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.labelOff),t0(),rg(),ib(`ngModel`,i.labelOn),t0(),rg(),ib(`ngModel`,i.fieldErrorMessage),t0(),rg(),ib(`ngModel`,i.labelPosition),jE(`p-options`,i.labelPositionOptions),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,w5,_oe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Switch Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-switch
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-switch-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ye,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{poNotification=p(zu);labelPosition=wu.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){if(l&1){let s=Sx();jc(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),nu(4,`po-table`,3),jc(5,`po-switch`,4),JN(),ob(`ngModelChange`,function(r){return y_(s),sO(i.serviceFee,r)||(i.serviceFee=r),v_(r)}),mt(`p-change`,function(){return i.addServiceFee()}),wg(),jc(6,`div`,5)(7,`div`,6),iO(8,`Total value`),wg(),jc(9,`span`,7),iO(10,`R$`),wg(),jc(11,`span`,8),iO(12),wg()(),jc(13,`div`,1)(14,`po-button`,9),mt(`p-click`,function(){return i.confirm()}),wg()()()()()}l&2&&(rg(4),jE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),rg(),ib(`ngModel`,i.serviceFee),jE(`p-label-position`,i.labelPosition),t0(),rg(7),tb(i.totalAmount))},dependencies:[wK,CK,EK,TF,EF,ni,w5,I5,Noe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Switch - Order Summary`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-switch-order/sample-po-switch-order.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-switch-order/sample-po-switch-order.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-switch-order`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{poNotification=p(zu);formBuilder=p(MK);formOrderSummary;labelPosition=wu.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let d=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=d?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),nu(3,`po-table`,3),jc(4,`po-switch`,4),JN(),mt(`p-change`,function(){return i.addServiceFee()}),wg(),jc(5,`div`,5)(6,`div`,6),iO(7,`Total value`),wg(),jc(8,`span`,7),iO(9,`R$`),wg(),jc(10,`span`,8),iO(11),wg()(),jc(12,`div`,0)(13,`po-button`,9),mt(`p-click`,function(){return i.confirm()}),wg()()()()()),l&2&&(rg(2),jE(`formGroup`,i.formOrderSummary),rg(),jE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),rg(),jE(`p-label-position`,i.labelPosition),t0(),rg(7),tb(i.totalAmount))},dependencies:[wK,CK,EK,SF,kF,ni,w5,I5,Noe],encapsulation:2,changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Switch - Order Summary Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-switch-order-reactive-form`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoSwitchComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,` O componente `),jc(24,`code`),iO(25,`po-switch`),wg(),iO(26,` é um `),jc(27,`a`,6),iO(28,`checkbox`),wg(),iO(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),wg(),jc(30,`p`),iO(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),wg(),jc(32,`p`),iO(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),wg(),jc(34,`blockquote`)(35,`p`),iO(36,`O componente não altera o valor incial informado no `),jc(37,`em`),iO(38,`model`),wg(),iO(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),wg()(),jc(40,`h4`),iO(41,`Boas práticas`),wg(),jc(42,`ul`)(43,`li`),iO(44,`Evite `),jc(45,`code`),iO(46,`labels`),wg(),iO(47,` extensos que quebram o layout do `),jc(48,`code`),iO(49,`po-switch`),wg(),iO(50,`, use `),jc(51,`code`),iO(52,`labels`),wg(),iO(53,` diretos, curtos e intuitivos.`),wg()(),jc(54,`h4`),iO(55,`Acessibilidade tratada no componente`),wg(),jc(56,`p`),iO(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(58,`ul`)(59,`li`),iO(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),jc(61,`a`,7),iO(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),wg()(),jc(63,`li`),iO(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(65,`a`,8),iO(66,`WCAG 2.4.12: Focus Appearance`),wg()()(),jc(67,`h4`),iO(68,`Tokens customizáveis`),wg(),jc(69,`p`),iO(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(71,`blockquote`)(72,`p`),iO(73,`Para maiores informações, acesse o guia `),jc(74,`a`,9),iO(75,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(76,`.`),wg()(),jc(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),iO(81,`Propriedade`),wg(),jc(82,`th`),iO(83,`Descrição`),wg(),jc(84,`th`),iO(85,`Valor Padrão`),wg()()(),jc(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),iO(90,`Unchecked`),wg()(),nu(91,`td`)(92,`td`),wg(),jc(93,`tr`)(94,`td`)(95,`code`),iO(96,`--color-unchecked`),wg()(),jc(97,`td`),iO(98,`Cor principal no estado desmarcado`),wg(),jc(99,`td`)(100,`code`),iO(101,`var(--color-neutral-light-00)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),iO(105,`--border-color`),wg()(),jc(106,`td`),iO(107,`Cor da borda`),wg(),jc(108,`td`)(109,`code`),iO(110,`var(--color-neutral-dark-70)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),iO(114,`--track-unchecked`),wg()(),jc(115,`td`),iO(116,`Cor principal da faixa no estado desmarcado`),wg(),jc(117,`td`)(118,`code`),iO(119,`var(--color-neutral-light-20)`),wg()()(),jc(120,`tr`)(121,`td`)(122,`strong`),iO(123,`Checked`),wg()(),nu(124,`td`)(125,`td`),wg(),jc(126,`tr`)(127,`td`)(128,`code`),iO(129,`--color-checked`),wg()(),jc(130,`td`),iO(131,`Cor principal no estado selecionado`),wg(),jc(132,`td`)(133,`code`),iO(134,`var(--color-action-default)`),wg()()(),jc(135,`tr`)(136,`td`)(137,`code`),iO(138,`--track-checked`),wg()(),jc(139,`td`),iO(140,`Cor da faixa no estado selecionado`),wg(),jc(141,`td`)(142,`code`),iO(143,`var(--color-brand-01-light)`),wg()()(),jc(144,`tr`)(145,`td`)(146,`strong`),iO(147,`Hover`),wg()(),nu(148,`td`)(149,`td`),wg(),jc(150,`tr`)(151,`td`)(152,`code`),iO(153,`--color-unchecked-hover`),wg()(),jc(154,`td`),iO(155,`Cor principal no estado hover desmarcado`),wg(),jc(156,`td`)(157,`code`),iO(158,`var(--color-action-pressed)`),wg()()(),jc(159,`tr`)(160,`td`)(161,`code`),iO(162,`--color-checked-hover`),wg()(),jc(163,`td`),iO(164,`Cor principal no estado hover marcado`),wg(),jc(165,`td`)(166,`code`),iO(167,`var(--color-action-pressed)`),wg()()(),jc(168,`tr`)(169,`td`)(170,`strong`),iO(171,`Focused`),wg()(),nu(172,`td`)(173,`td`),wg(),jc(174,`tr`)(175,`td`)(176,`code`),iO(177,`--outline-color-focused`),wg()(),jc(178,`td`),iO(179,`Cor do outline do estado de focus`),wg(),jc(180,`td`)(181,`code`),iO(182,`var(--color-action-focus)`),wg()()(),jc(183,`tr`)(184,`td`)(185,`strong`),iO(186,`Disabled`),wg()(),nu(187,`td`)(188,`td`),wg(),jc(189,`tr`)(190,`td`)(191,`code`),iO(192,`--color-unchecked-disabled`),wg()(),jc(193,`td`),iO(194,`Cor principal do disabled no estado desmarcado`),wg(),jc(195,`td`)(196,`code`),iO(197,`var(--color-neutral-light-20)`),wg()()(),jc(198,`tr`)(199,`td`)(200,`code`),iO(201,`--color-checked-disabled`),wg()(),jc(202,`td`),iO(203,`Cor principal do disabled no estado marcado`),wg(),jc(204,`td`)(205,`code`),iO(206,`var(--color-action-disabled)`),wg()()()()()(),jc(207,`div`,10)(208,`h4`,11),iO(209,`Seletor`),wg(),jc(210,`pre`,12),iO(211,`<po-switch
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
`),wg()(),jc(212,`h4`,13),iO(213,`Propriedades`),wg(),jc(214,`table`,14)(215,`tr`,15)(216,`th`,16),iO(217,`Nome`),wg(),jc(218,`th`,16),iO(219,`Tipo`),wg(),jc(220,`th`,16),iO(221,`Padrão`),wg(),jc(222,`th`,16),iO(223,`Descrição`),wg()(),jc(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),iO(228,` (p-additional-help)`),nu(229,`br`),wg()(),jc(230,`div`,21),iO(231,`Deprecated`),wg()(),jc(232,`td`,22)(233,`code`,23),iO(234,`EventEmitter`),wg()(),jc(235,`td`,24),iO(236,`-`),wg(),jc(237,`td`,25)(238,`em`)(239,`strong`),iO(240,`(opcional)`),wg()(),jc(241,`p`),iO(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(243,`blockquote`)(244,`p`),iO(245,`Essa propriedade está `),jc(246,`strong`),iO(247,`depreciada`),wg(),iO(248,` e será removida na versão `),jc(249,`code`),iO(250,`23.x.x`),wg(),iO(251,`. Recomendamos utilizar a propriedade `),jc(252,`code`),iO(253,`p-helper`),wg(),iO(254,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(255,`tr`,17)(256,`td`,18)(257,`div`,26)(258,`span`,27),iO(259,` p-additional-help-tooltip`),nu(260,`br`),wg()(),jc(261,`div`,21),iO(262,`Deprecated`),wg()(),jc(263,`td`,22)(264,`code`,28),iO(265,`string`),wg()(),jc(266,`td`,24),iO(267,`-`),wg(),jc(268,`td`,25)(269,`em`)(270,`strong`),iO(271,`(opcional)`),wg()(),jc(272,`p`),iO(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(274,`code`),iO(275,`po-helper`),wg(),iO(276,`.
`),jc(277,`strong`),iO(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(279,`blockquote`)(280,`p`),iO(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(282,`blockquote`)(283,`p`),iO(284,`Essa propriedade está `),jc(285,`strong`),iO(286,`depreciada`),wg(),iO(287,` e será removida na versão `),jc(288,`code`),iO(289,`23.x.x`),wg(),iO(290,`. Recomendamos utilizar a propriedade `),jc(291,`code`),iO(292,`p-helper`),wg(),iO(293,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(294,`tr`,17)(295,`td`,18)(296,`div`,26)(297,`span`,27),iO(298,` p-append-in-body`),nu(299,`br`),wg()()(),jc(300,`td`,22)(301,`code`,29),iO(302,`boolean`),wg()(),jc(303,`td`,24)(304,`p`)(305,`code`),iO(306,`false`),wg()()(),jc(307,`td`,25)(308,`em`)(309,`strong`),iO(310,`(opcional)`),wg()(),jc(311,`p`),iO(312,`Define que o popover (`),jc(313,`code`),iO(314,`p-helper`),wg(),iO(315,` e/ou `),jc(316,`code`),iO(317,`p-error-limit`),wg(),iO(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(319,`blockquote`)(320,`p`),iO(321,`Quando utilizado com `),jc(322,`code`),iO(323,`p-helper`),wg(),iO(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(325,`tr`,17)(326,`td`,18)(327,`div`,19)(328,`span`,20),iO(329,` (p-change)`),nu(330,`br`),wg()()(),jc(331,`td`,22)(332,`code`,23),iO(333,`EventEmitter`),wg()(),jc(334,`td`,24),iO(335,`-`),wg(),jc(336,`td`,25)(337,`em`)(338,`strong`),iO(339,`(opcional)`),wg()(),jc(340,`p`),iO(341,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),iO(346,` (p-change-model)`),nu(347,`br`),wg()()(),jc(348,`td`,22)(349,`code`,23),iO(350,`EventEmitter`),wg()(),jc(351,`td`,24),iO(352,`-`),wg(),jc(353,`td`,25)(354,`em`)(355,`strong`),iO(356,`(opcional)`),wg()(),jc(357,`p`),iO(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(359,`code`),iO(360,`setValue`),wg(),iO(361,`, `),jc(362,`code`),iO(363,`patchValue`),wg(),iO(364,`, carregamento assíncrono).`),wg(),jc(365,`p`),iO(366,`Diferentemente do `),jc(367,`code`),iO(368,`p-change`),wg(),iO(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(370,`code`),iO(371,`p-change-model`),wg(),iO(372,` cobre todos os cenários de alteração de valor.`),wg(),jc(373,`p`),iO(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(375,`tr`,17)(376,`td`,18)(377,`div`,26)(378,`span`,27),iO(379,` p-compact-label`),nu(380,`br`),wg()()(),jc(381,`td`,22)(382,`code`,29),iO(383,`boolean`),wg()(),jc(384,`td`,24)(385,`p`)(386,`code`),iO(387,`false`),wg()()(),jc(388,`td`,25)(389,`em`)(390,`strong`),iO(391,`(opcional)`),wg()(),jc(392,`p`),iO(393,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(394,`p`),iO(395,`Quando habilitado (`),jc(396,`code`),iO(397,`true`),wg(),iO(398,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(399,`ul`)(400,`li`)(401,`code`),iO(402,`po-label`),wg()(),jc(403,`li`)(404,`code`),iO(405,`p-requirement (showRequired)`),wg()(),jc(406,`li`)(407,`code`),iO(408,`po-helper`),wg()()(),jc(409,`p`),iO(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(411,`p`),iO(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(413,`ul`)(414,`li`)(415,`code`),iO(416,`--field-container-title-justify`),wg()(),jc(417,`li`)(418,`code`),iO(419,`--field-container-title-flex`),wg()()(),jc(420,`p`),iO(421,`Exemplo:`),wg(),jc(422,`pre`)(423,`code`),iO(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(425,`p`),iO(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(427,`tr`,17)(428,`td`,18)(429,`div`,26)(430,`span`,27),iO(431,` p-disabled`),nu(432,`br`),wg()()(),jc(433,`td`,22)(434,`code`,29),iO(435,`boolean`),wg()(),jc(436,`td`,24)(437,`p`)(438,`code`),iO(439,`false`),wg()()(),jc(440,`td`,25)(441,`em`)(442,`strong`),iO(443,`(opcional)`),wg()(),jc(444,`p`),iO(445,`Indica se o campo será desabilitado.`),wg()()(),jc(446,`tr`,17)(447,`td`,18)(448,`div`,26)(449,`span`,27),iO(450,` p-error-limit`),nu(451,`br`),wg()()(),jc(452,`td`,22)(453,`code`,29),iO(454,`boolean`),wg()(),jc(455,`td`,24)(456,`p`)(457,`code`),iO(458,`false`),wg()()(),jc(459,`td`,25)(460,`em`)(461,`strong`),iO(462,`(opcional)`),wg()(),jc(463,`p`),iO(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(465,`blockquote`)(466,`p`),iO(467,`Caso essa propriedade seja definida como `),jc(468,`code`),iO(469,`true`),wg(),iO(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(471,`tr`,17)(472,`td`,18)(473,`div`,26)(474,`span`,27),iO(475,` p-field-error-message`),nu(476,`br`),wg()()(),jc(477,`td`,22)(478,`code`,28),iO(479,`string`),wg()(),jc(480,`td`,24),iO(481,`-`),wg(),jc(482,`td`,25)(483,`em`)(484,`strong`),iO(485,`(opcional)`),wg()(),jc(486,`p`),iO(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),wg()()(),jc(488,`tr`,17)(489,`td`,18)(490,`div`,26)(491,`span`,27),iO(492,` p-format-model`),nu(493,`br`),wg()()(),jc(494,`td`,22)(495,`code`,29),iO(496,`boolean`),wg()(),jc(497,`td`,24)(498,`p`)(499,`code`),iO(500,`false`),wg()()(),jc(501,`td`,25)(502,`em`)(503,`strong`),iO(504,`(opcional)`),wg()(),jc(505,`p`),iO(506,`Indica se o `),jc(507,`code`),iO(508,`model`),wg(),iO(509,` receberá o valor formatado pelas propriedades `),jc(510,`code`),iO(511,`p-label-on`),wg(),iO(512,` e `),jc(513,`code`),iO(514,`p-label-off`),wg(),iO(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),wg(),jc(516,`blockquote`)(517,`p`),iO(518,`Por padrão será atribuído `),jc(519,`code`),iO(520,`false`),wg(),iO(521,`.`),wg()()()(),jc(522,`tr`,17)(523,`td`,18)(524,`div`,26)(525,`span`,27),iO(526,` p-help`),nu(527,`br`),wg()()(),jc(528,`td`,22)(529,`code`,28),iO(530,`string`),wg()(),jc(531,`td`,24),iO(532,`-`),wg(),jc(533,`td`,25)(534,`p`),iO(535,`Texto de apoio para o campo.`),wg()()(),jc(536,`tr`,17)(537,`td`,18)(538,`div`,26)(539,`span`,27),iO(540,` p-hide-label-status`),nu(541,`br`),wg()()(),jc(542,`td`,22)(543,`code`,29),iO(544,`boolean`),wg()(),jc(545,`td`,24)(546,`p`)(547,`code`),iO(548,`false`),wg()()(),jc(549,`td`,25)(550,`em`)(551,`strong`),iO(552,`(opcional)`),wg()(),jc(553,`p`),iO(554,`Indica se o status do `),jc(555,`code`),iO(556,`model`),wg(),iO(557,` será escondido visualmente ao lado do switch.`),wg(),jc(558,`blockquote`)(559,`p`),iO(560,`Por padrão será atribuído `),jc(561,`code`),iO(562,`false`),wg(),iO(563,`.`),wg()()()(),jc(564,`tr`,17)(565,`td`,18)(566,`div`,26)(567,`span`,27),iO(568,` p-invalid-value`),nu(569,`br`),wg()()(),jc(570,`td`,22)(571,`code`,29),iO(572,`boolean`),wg()(),jc(573,`td`,24)(574,`p`)(575,`code`),iO(576,`false`),wg()()(),jc(577,`td`,25)(578,`em`)(579,`strong`),iO(580,`(opcional)`),wg()(),jc(581,`p`),iO(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),jc(583,`code`),iO(584,`p-field-error-message`),wg(),iO(585,`.`),wg(),jc(586,`blockquote`)(587,`p`),iO(588,`Caso essa propriedade seja definida como `),jc(589,`code`),iO(590,`true`),wg(),iO(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),wg()()()(),jc(592,`tr`,17)(593,`td`,18)(594,`div`,19)(595,`span`,20),iO(596,` (p-keydown)`),nu(597,`br`),wg()()(),jc(598,`td`,22)(599,`code`,23),iO(600,`EventEmitter`),wg()(),jc(601,`td`,24),iO(602,`-`),wg(),jc(603,`td`,25)(604,`em`)(605,`strong`),iO(606,`(opcional)`),wg()(),jc(607,`p`),iO(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(609,`code`),iO(610,`KeyboardEvent`),wg(),iO(611,` com informações sobre a tecla.`),wg()()(),jc(612,`tr`,17)(613,`td`,18)(614,`div`,26)(615,`span`,27),iO(616,` p-label`),nu(617,`br`),wg()()(),jc(618,`td`,22)(619,`code`,28),iO(620,`string`),wg()(),jc(621,`td`,24),iO(622,`-`),wg(),jc(623,`td`,25)(624,`p`),iO(625,`Rótulo exibido pelo componente.`),wg()()(),jc(626,`tr`,17)(627,`td`,18)(628,`div`,26)(629,`span`,27),iO(630,` p-label-off`),nu(631,`br`),wg()()(),jc(632,`td`,22)(633,`code`,28),iO(634,`string`),wg()(),jc(635,`td`,24)(636,`p`)(637,`code`),iO(638,`false`),wg()()(),jc(639,`td`,25)(640,`p`),iO(641,`Texto exibido quando o valor do componente for `),jc(642,`code`),iO(643,`false`),wg(),iO(644,`.`),wg()()(),jc(645,`tr`,17)(646,`td`,18)(647,`div`,26)(648,`span`,27),iO(649,` p-label-on`),nu(650,`br`),wg()()(),jc(651,`td`,22)(652,`code`,28),iO(653,`string`),wg()(),jc(654,`td`,24)(655,`p`)(656,`code`),iO(657,`true`),wg()()(),jc(658,`td`,25)(659,`p`),iO(660,`Texto exibido quando o valor do componente for `),jc(661,`code`),iO(662,`true`),wg(),iO(663,`.`),wg()()(),jc(664,`tr`,17)(665,`td`,18)(666,`div`,26)(667,`span`,27),iO(668,` p-label-position`),nu(669,`br`),wg()()(),jc(670,`td`,22)(671,`code`,30),iO(672,`PoSwitchLabelPosition`),wg()(),jc(673,`td`,24),iO(674,`-`),wg(),jc(675,`td`,25)(676,`em`)(677,`strong`),iO(678,`(opcional)`),wg()(),jc(679,`p`),iO(680,`Posição de exibição do rótulo que fica ao lado do switch.`),wg(),jc(681,`blockquote`)(682,`p`),iO(683,`Por padrão exibe à direita.`),wg()()()(),jc(684,`tr`,17)(685,`td`,18)(686,`div`,26)(687,`span`,27),iO(688,` p-label-text-wrap`),nu(689,`br`),wg()()(),jc(690,`td`,22)(691,`code`,29),iO(692,`boolean`),wg()(),jc(693,`td`,24)(694,`p`)(695,`code`),iO(696,`false`),wg()()(),jc(697,`td`,25)(698,`em`)(699,`strong`),iO(700,`(opcional)`),wg()(),jc(701,`p`),iO(702,`Habilita a quebra automática do texto da propriedade `),jc(703,`code`),iO(704,`p-label`),wg(),iO(705,`. Quando `),jc(706,`code`),iO(707,`p-label-text-wrap`),wg(),iO(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(709,`tr`,17)(710,`td`,18)(711,`div`,26)(712,`span`,27),iO(713,` p-loading`),nu(714,`br`),wg()()(),jc(715,`td`,22)(716,`code`,29),iO(717,`boolean`),wg()(),jc(718,`td`,24)(719,`p`)(720,`code`),iO(721,`false`),wg()()(),jc(722,`td`,25)(723,`em`)(724,`strong`),iO(725,`(opcional)`),wg()(),jc(726,`p`),iO(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),wg()()(),jc(728,`tr`,17)(729,`td`,18)(730,`div`,26)(731,`span`,27),iO(732,` name`),nu(733,`br`),wg()()(),jc(734,`td`,22)(735,`code`,28),iO(736,`string`),wg()(),jc(737,`td`,24),iO(738,`-`),wg(),jc(739,`td`,25)(740,`p`),iO(741,`Nome do componente.`),wg()()(),jc(742,`tr`,17)(743,`td`,18)(744,`div`,26)(745,`span`,27),iO(746,` p-helper`),nu(747,`br`),wg()()(),jc(748,`td`,22)(749,`code`,31),iO(750,`PoHelperOptions `),wg(),jc(751,`code`,28),iO(752,` string`),wg()(),jc(753,`td`,24),iO(754,`-`),wg(),jc(755,`td`,25)(756,`em`)(757,`strong`),iO(758,`(opcional)`),wg()(),jc(759,`p`),iO(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(761,`code`),iO(762,`p-label`),wg(),iO(763,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(764,`code`),iO(765,`p-label`),wg(),iO(766,`.`),wg(),jc(767,`blockquote`)(768,`p`),iO(769,`Para mais informações acesse: `),jc(770,`a`,32),iO(771,`https://po-ui.io/documentation/po-helper`),wg(),iO(772,`.`),wg()(),jc(773,`blockquote`)(774,`p`),iO(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(776,`code`),iO(777,`p-additional-help-tooltip`),wg(),iO(778,` e `),jc(779,`code`),iO(780,`p-additional-help`),wg(),iO(781,`) será ignorado.`),wg()()()(),jc(782,`tr`,17)(783,`td`,18)(784,`div`,26)(785,`span`,27),iO(786,` p-size`),nu(787,`br`),wg()()(),jc(788,`td`,22)(789,`code`,28),iO(790,`string`),wg()(),jc(791,`td`,24)(792,`p`)(793,`code`),iO(794,`medium`),wg()()(),jc(795,`td`,25)(796,`em`)(797,`strong`),iO(798,`(opcional)`),wg()(),jc(799,`p`),iO(800,`Define o tamanho do componente:`),wg(),jc(801,`ul`)(802,`li`)(803,`code`),iO(804,`small`),wg(),iO(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),wg(),jc(806,`li`)(807,`code`),iO(808,`medium`),wg(),iO(809,`: altura de 24px.`),wg()(),jc(810,`blockquote`)(811,`p`),iO(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(813,`code`),iO(814,`medium`),wg(),iO(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(816,`a`,33),iO(817,`po-theme`),wg(),iO(818,`.`),wg()()()()(),jc(819,`h3`,13),iO(820,`Métodos`),wg(),jc(821,`table`,34)(822,`tr`,17)(823,`th`,35)(824,`div`,26)(825,`h4`)(826,`span`,27),iO(827,` showAdditionalHelp `),wg()()()()(),jc(828,`tr`,25)(829,`td`,25)(830,`p`),iO(831,`Método que exibe `),jc(832,`code`),iO(833,`p-helper`),wg(),iO(834,` ou executa a ação definida em `),jc(835,`code`),iO(836,`p-helper{eventOnClick}`),wg(),iO(837,` ou em `),jc(838,`code`),iO(839,`p-additionalHelp`),wg(),iO(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(841,`code`),iO(842,`p-keydown`),wg(),iO(843,`.`),wg(),jc(844,`blockquote`)(845,`p`),iO(846,`Exibe ou oculta o conteúdo do componente `),jc(847,`code`),iO(848,`po-helper`),wg(),iO(849,` quando o componente estiver com foco.`),wg()(),jc(850,`pre`)(851,`code`),iO(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(853,`pre`)(854,`code`),iO(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(856,`br`),jc(857,`table`,34)(858,`tr`,17)(859,`th`,35)(860,`div`,26)(861,`h4`)(862,`span`,27),iO(863,` focus `),wg()()()()(),jc(864,`tr`,25)(865,`td`,25)(866,`p`),iO(867,`Função que atribui foco ao componente.`),wg(),jc(868,`p`),iO(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(870,`pre`)(871,`code`),iO(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),wg()()()()(),nu(873,`br`),jc(874,`table`,34)(875,`tr`,17)(876,`th`,35)(877,`div`,26)(878,`h4`)(879,`span`,27),iO(880,` showAdditionalHelp `),wg()()()()(),jc(881,`tr`,25)(882,`td`,25)(883,`p`),iO(884,`Método que exibe `),jc(885,`code`),iO(886,`p-helper`),wg(),iO(887,` ou executa a ação definida em `),jc(888,`code`),iO(889,`p-helper{eventOnClick}`),wg(),iO(890,` ou em `),jc(891,`code`),iO(892,`p-additionalHelp`),wg(),iO(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(894,`code`),iO(895,`p-keydown`),wg(),iO(896,`.`),wg(),jc(897,`blockquote`)(898,`p`),iO(899,`Exibe ou oculta o conteúdo do componente `),jc(900,`code`),iO(901,`po-helper`),wg(),iO(902,` quando o componente estiver com foco.`),wg()(),jc(903,`pre`)(904,`code`),iO(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),wg()(),jc(906,`pre`)(907,`code`,36),iO(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(909,`br`),jc(910,`h3`),iO(911,`Enums`),wg(),jc(912,`h4`,4)(913,`code`,5),iO(914,`PoSwitchLabelPosition`),wg()(),jc(915,`div`,2)(916,`p`),iO(917,`Enum para posicionar o label do valor do po-switch.`),wg()(),jc(918,`h4`,13),iO(919,`Propriedades`),wg(),jc(920,`table`,14)(921,`tr`,15)(922,`th`,16),iO(923,`Nome`),wg(),jc(924,`th`,16),iO(925,`Descrição`),wg()(),jc(926,`tr`,17)(927,`td`,18)(928,`div`,26)(929,`span`,27),iO(930,` Right`),nu(931,`br`),wg()()(),jc(932,`td`,25)(933,`p`),iO(934,`Posiciona o label do lado esquerdo do switch.`),wg()()(),jc(935,`tr`,17)(936,`td`,18)(937,`div`,26)(938,`span`,27),iO(939,` Left`),nu(940,`br`),wg()()(),jc(941,`td`,25)(942,`p`),iO(943,`Posiciona o label do lado direito do switch.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ae=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Switch`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-switch-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-switch-basic-view`)(6,`sample-po-switch-labs-view`)(7,`sample-po-switch-order-view`)(8,`sample-po-switch-order-reactive-form-view`),wg()()()),l&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,me,ue,Se,Ee,ge],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue$1({imports:[C1.forChild(Ae),C1]})}return o})();var gt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue$1({imports:[Ta,xe]})}return o})();export{gt as DocPoSwitchModule};