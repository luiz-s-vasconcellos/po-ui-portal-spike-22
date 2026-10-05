import{$i as pt,Br as Qn,Cr as KP,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kr as S9,Ln as xu,Lt as bae,M as Ef,Nn as x4,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,gr as IE,i as _a,in as kte,k as D4,ki as he$1,kn as v4,na as qP,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ua as ug,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var de=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`switch`,`p-label`,`PO Switch`]],template:function(l,i){l&1&&Kc(0,`po-switch`,0)},dependencies:[v4],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Switch Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-switch-basic/sample-po-switch-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-switch-basic/sample-po-switch-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-switch-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:`Left`,value:xu.Left},{label:`Right`,value:xu.Right}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`formatModel`,label:`Format Model`},{value:`hideLabelStatus`,label:`Hide label status`},{value:`errorLimit`,label:`Limit Error Message`},{value:`invalidValue`,label:`Invalid Value is On/True`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.help=void 0,this.label=void 0,this.labelOn=``,this.labelOff=``,this.labelPosition=void 0,this.properties=[],this.size=`medium`,this.switch=void 0,this.fieldErrorMessage=``}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-labs`]],standalone:!1,decls:19,vars:31,consts:[[`f`,`ngForm`],[`name`,`switch`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-error-limit`,`p-field-error-message`,`p-format-model`,`p-help`,`p-hide-label-status`,`p-invalid-value`,`p-label`,`p-label-off`,`p-label-on`,`p-label-position`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOff`,`p-help`,`Text displayed when PO Switch is set to 'false'`,`p-label`,`Label Off`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelOn`,`p-help`,`Text displayed when PO Switch is set to 'true'`,`p-label`,`Label On`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelPosition`,`p-label`,`Label Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let s=Bx();Ac(0,`po-switch`,1),RE(`ngModelChange`,function(r){return Jv(s),DN(i.switch,r)||(i.switch=r),e_(r)}),pt(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(s),DN(i.label,r)||(i.label=r),e_(r)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(r){return Jv(s),DN(i.help,r)||(i.help=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(s),DN(i.helperText,r)||(i.helperText=r),e_(r)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(s),DN(i.labelOff,r)||(i.labelOff=r),e_(r)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(r){return Jv(s),DN(i.labelOn,r)||(i.labelOn=r),e_(r)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(r){return Jv(s),DN(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),e_(r)}),ug(),p0(),Ac(14,`po-radio-group`,11),RE(`ngModelChange`,function(r){return Jv(s),DN(i.labelPosition,r)||(i.labelPosition=r),e_(r)}),ug(),p0(),Ac(15,`po-checkbox-group`,12),RE(`ngModelChange`,function(r){return Jv(s),DN(i.properties,r)||(i.properties=r),e_(r)}),ug(),p0(),Ac(16,`po-radio-group`,13),RE(`ngModelChange`,function(r){return Jv(s),DN(i.size,r)||(i.size=r),e_(r)}),ug(),p0(),Ac(17,`div`,2)(18,`po-button`,14),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(TE(`ngModel`,i.switch),cE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-field-error-message`,i.fieldErrorMessage)(`p-format-model`,i.properties.includes(`formatModel`))(`p-help`,i.help)(`p-hide-label-status`,i.properties.includes(`hideLabelStatus`))(`p-invalid-value`,i.properties?.includes(`invalidValue`))(`p-label`,i.label)(`p-label-off`,i.labelOff)(`p-label-on`,i.labelOn)(`p-label-position`,i.labelPosition)(`p-label-text-wrap`,i.properties.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size),m0(),Hp(3),cE(`p-value`,i.switch),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.labelOff),m0(),Hp(),TE(`ngModel`,i.labelOn),m0(),Hp(),TE(`ngModel`,i.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,i.labelPosition),cE(`p-options`,i.labelPositionOptions),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,v4,hoe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Switch Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-switch-labs/sample-po-switch-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-switch
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-switch-labs/sample-po-switch-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-switch-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ce],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{poNotification=f(Ou);labelPosition=xu.Left;serviceFee=!1;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-order`]],standalone:!1,decls:15,vars:6,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`ngModelChange`,`p-change`,`ngModel`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`po-icon an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){if(l&1){let s=Bx();Ac(0,`div`,1)(1,`po-widget`,2)(2,`form`,null,0),Kc(4,`po-table`,3),Ac(5,`po-switch`,4),RE(`ngModelChange`,function(r){return Jv(s),DN(i.serviceFee,r)||(i.serviceFee=r),e_(r)}),pt(`p-change`,function(){return i.addServiceFee()}),ug(),p0(),Ac(6,`div`,5)(7,`div`,6),vN(8,`Total value`),ug(),Ac(9,`span`,7),vN(10,`R$`),ug(),Ac(11,`span`,8),vN(12),ug()(),Ac(13,`div`,1)(14,`po-button`,9),pt(`p-click`,function(){return i.confirm()}),ug()()()()()}l&2&&(Hp(4),cE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Hp(),TE(`ngModel`,i.serviceFee),cE(`p-label-position`,i.labelPosition),m0(),Hp(7),IE(i.totalAmount))},dependencies:[b9,D9,C9,BP,LP,ni,v4,x4,Ooe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-order-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Switch - Order Summary`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-switch-order/sample-po-switch-order.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-switch-order/sample-po-switch-order.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-switch-order`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Me,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,he],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{poNotification=f(Ou);formBuilder=f(S9);formOrderSummary;labelPosition=xu.Left;totalAmount=43;columns=[{property:`page`,label:`Product`},{property:`value`,label:`Value (R$)`,type:`currency`,format:`BRL`}];items=[{page:`Hamburger`,value:`20`},{page:`Soft Drink`,value:`6`},{page:`French Fries`,value:`17`}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let d=this.formOrderSummary.get(`serviceFee`).value,l=1.1;this.totalAmount=d?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success(`Purchase done Successful!`)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-order-reactive-form`]],standalone:!1,decls:14,vars:6,consts:[[1,`po-row`],[`p-title`,`Order Summary`,1,`po-md-6`,`po-lg-4`],[3,`formGroup`],[3,`p-columns`,`p-items`,`p-hide-table-search`],[`name`,`serviceFee`,`formControlName`,`serviceFee`,`p-label`,`Allow a 10% service fee?`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,3,`p-change`,`p-label-position`],[1,`po-pull-right`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[1,`po-pull-right`,`po-font-title`],[`p-icon`,`an an-check`,`p-label`,`Confirm`,`p-kind`,`primary`,1,`po-md-12`,3,`p-click`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`form`,2),Kc(3,`po-table`,3),Ac(4,`po-switch`,4),pt(`p-change`,function(){return i.addServiceFee()}),ug(),p0(),Ac(5,`div`,5)(6,`div`,6),vN(7,`Total value`),ug(),Ac(8,`span`,7),vN(9,`R$`),ug(),Ac(10,`span`,8),vN(11),ug()(),Ac(12,`div`,0)(13,`po-button`,9),pt(`p-click`,function(){return i.confirm()}),ug()()()()()),l&2&&(Hp(2),cE(`formGroup`,i.formOrderSummary),Hp(),cE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Hp(),cE(`p-label-position`,i.labelPosition),m0(),Hp(7),IE(i.totalAmount))},dependencies:[b9,D9,C9,KP,qP,ni,v4,x4,Ooe],encapsulation:2,changeDetection:1})}return o})();var Oe=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-order-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Switch - Order Summary Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-switch-order-reactive-form`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,be],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-switch-doc`]],standalone:!1,decls:944,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoSwitchComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,` O componente `),Ac(24,`code`),vN(25,`po-switch`),ug(),vN(26,` é um `),Ac(27,`a`,6),vN(28,`checkbox`),ug(),vN(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),ug(),Ac(30,`p`),vN(31,`Pode-se ligar ou desligar o switch utilizando a tecla de espaço ou o clique do mouse.`),ug(),Ac(32,`p`),vN(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),ug(),Ac(34,`blockquote`)(35,`p`),vN(36,`O componente não altera o valor incial informado no `),Ac(37,`em`),vN(38,`model`),ug(),vN(39,`, portanto indica-se inicializa-lo caso ter necessidade.`),ug()(),Ac(40,`h4`),vN(41,`Boas práticas`),ug(),Ac(42,`ul`)(43,`li`),vN(44,`Evite `),Ac(45,`code`),vN(46,`labels`),ug(),vN(47,` extensos que quebram o layout do `),Ac(48,`code`),vN(49,`po-switch`),ug(),vN(50,`, use `),Ac(51,`code`),vN(52,`labels`),ug(),vN(53,` diretos, curtos e intuitivos.`),ug()(),Ac(54,`h4`),vN(55,`Acessibilidade tratada no componente`),ug(),Ac(56,`p`),vN(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ug(),Ac(58,`ul`)(59,`li`),vN(60,`Quando em foco, o switch é ativado usando a tecla de Espaço. `),Ac(61,`a`,7),vN(62,`W3C WAI-ARIA 3.5 Switch - Keyboard Interaction`),ug()(),Ac(63,`li`),vN(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ac(65,`a`,8),vN(66,`WCAG 2.4.12: Focus Appearance`),ug()()(),Ac(67,`h4`),vN(68,`Tokens customizáveis`),ug(),Ac(69,`p`),vN(70,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(71,`blockquote`)(72,`p`),vN(73,`Para maiores informações, acesse o guia `),Ac(74,`a`,9),vN(75,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(76,`.`),ug()(),Ac(77,`table`)(78,`thead`)(79,`tr`)(80,`th`),vN(81,`Propriedade`),ug(),Ac(82,`th`),vN(83,`Descrição`),ug(),Ac(84,`th`),vN(85,`Valor Padrão`),ug()()(),Ac(86,`tbody`)(87,`tr`)(88,`td`)(89,`strong`),vN(90,`Unchecked`),ug()(),Kc(91,`td`)(92,`td`),ug(),Ac(93,`tr`)(94,`td`)(95,`code`),vN(96,`--color-unchecked`),ug()(),Ac(97,`td`),vN(98,`Cor principal no estado desmarcado`),ug(),Ac(99,`td`)(100,`code`),vN(101,`var(--color-neutral-light-00)`),ug()()(),Ac(102,`tr`)(103,`td`)(104,`code`),vN(105,`--border-color`),ug()(),Ac(106,`td`),vN(107,`Cor da borda`),ug(),Ac(108,`td`)(109,`code`),vN(110,`var(--color-neutral-dark-70)`),ug()()(),Ac(111,`tr`)(112,`td`)(113,`code`),vN(114,`--track-unchecked`),ug()(),Ac(115,`td`),vN(116,`Cor principal da faixa no estado desmarcado`),ug(),Ac(117,`td`)(118,`code`),vN(119,`var(--color-neutral-light-20)`),ug()()(),Ac(120,`tr`)(121,`td`)(122,`strong`),vN(123,`Checked`),ug()(),Kc(124,`td`)(125,`td`),ug(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`--color-checked`),ug()(),Ac(130,`td`),vN(131,`Cor principal no estado selecionado`),ug(),Ac(132,`td`)(133,`code`),vN(134,`var(--color-action-default)`),ug()()(),Ac(135,`tr`)(136,`td`)(137,`code`),vN(138,`--track-checked`),ug()(),Ac(139,`td`),vN(140,`Cor da faixa no estado selecionado`),ug(),Ac(141,`td`)(142,`code`),vN(143,`var(--color-brand-01-light)`),ug()()(),Ac(144,`tr`)(145,`td`)(146,`strong`),vN(147,`Hover`),ug()(),Kc(148,`td`)(149,`td`),ug(),Ac(150,`tr`)(151,`td`)(152,`code`),vN(153,`--color-unchecked-hover`),ug()(),Ac(154,`td`),vN(155,`Cor principal no estado hover desmarcado`),ug(),Ac(156,`td`)(157,`code`),vN(158,`var(--color-action-pressed)`),ug()()(),Ac(159,`tr`)(160,`td`)(161,`code`),vN(162,`--color-checked-hover`),ug()(),Ac(163,`td`),vN(164,`Cor principal no estado hover marcado`),ug(),Ac(165,`td`)(166,`code`),vN(167,`var(--color-action-pressed)`),ug()()(),Ac(168,`tr`)(169,`td`)(170,`strong`),vN(171,`Focused`),ug()(),Kc(172,`td`)(173,`td`),ug(),Ac(174,`tr`)(175,`td`)(176,`code`),vN(177,`--outline-color-focused`),ug()(),Ac(178,`td`),vN(179,`Cor do outline do estado de focus`),ug(),Ac(180,`td`)(181,`code`),vN(182,`var(--color-action-focus)`),ug()()(),Ac(183,`tr`)(184,`td`)(185,`strong`),vN(186,`Disabled`),ug()(),Kc(187,`td`)(188,`td`),ug(),Ac(189,`tr`)(190,`td`)(191,`code`),vN(192,`--color-unchecked-disabled`),ug()(),Ac(193,`td`),vN(194,`Cor principal do disabled no estado desmarcado`),ug(),Ac(195,`td`)(196,`code`),vN(197,`var(--color-neutral-light-20)`),ug()()(),Ac(198,`tr`)(199,`td`)(200,`code`),vN(201,`--color-checked-disabled`),ug()(),Ac(202,`td`),vN(203,`Cor principal do disabled no estado marcado`),ug(),Ac(204,`td`)(205,`code`),vN(206,`var(--color-action-disabled)`),ug()()()()()(),Ac(207,`div`,10)(208,`h4`,11),vN(209,`Seletor`),ug(),Ac(210,`pre`,12),vN(211,`<po-switch
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
`),ug()(),Ac(212,`h4`,13),vN(213,`Propriedades`),ug(),Ac(214,`table`,14)(215,`tr`,15)(216,`th`,16),vN(217,`Nome`),ug(),Ac(218,`th`,16),vN(219,`Tipo`),ug(),Ac(220,`th`,16),vN(221,`Padrão`),ug(),Ac(222,`th`,16),vN(223,`Descrição`),ug()(),Ac(224,`tr`,17)(225,`td`,18)(226,`div`,19)(227,`span`,20),vN(228,` (p-additional-help)`),Kc(229,`br`),ug()(),Ac(230,`div`,21),vN(231,`Deprecated`),ug()(),Ac(232,`td`,22)(233,`code`,23),vN(234,`EventEmitter`),ug()(),Ac(235,`td`,24),vN(236,`-`),ug(),Ac(237,`td`,25)(238,`em`)(239,`strong`),vN(240,`(opcional)`),ug()(),Ac(241,`p`),vN(242,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(243,`blockquote`)(244,`p`),vN(245,`Essa propriedade está `),Ac(246,`strong`),vN(247,`depreciada`),ug(),vN(248,` e será removida na versão `),Ac(249,`code`),vN(250,`23.x.x`),ug(),vN(251,`. Recomendamos utilizar a propriedade `),Ac(252,`code`),vN(253,`p-helper`),ug(),vN(254,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(255,`tr`,17)(256,`td`,18)(257,`div`,26)(258,`span`,27),vN(259,` p-additional-help-tooltip`),Kc(260,`br`),ug()(),Ac(261,`div`,21),vN(262,`Deprecated`),ug()(),Ac(263,`td`,22)(264,`code`,28),vN(265,`string`),ug()(),Ac(266,`td`,24),vN(267,`-`),ug(),Ac(268,`td`,25)(269,`em`)(270,`strong`),vN(271,`(opcional)`),ug()(),Ac(272,`p`),vN(273,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(274,`code`),vN(275,`po-helper`),ug(),vN(276,`.
`),Ac(277,`strong`),vN(278,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(279,`blockquote`)(280,`p`),vN(281,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(282,`blockquote`)(283,`p`),vN(284,`Essa propriedade está `),Ac(285,`strong`),vN(286,`depreciada`),ug(),vN(287,` e será removida na versão `),Ac(288,`code`),vN(289,`23.x.x`),ug(),vN(290,`. Recomendamos utilizar a propriedade `),Ac(291,`code`),vN(292,`p-helper`),ug(),vN(293,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(294,`tr`,17)(295,`td`,18)(296,`div`,26)(297,`span`,27),vN(298,` p-append-in-body`),Kc(299,`br`),ug()()(),Ac(300,`td`,22)(301,`code`,29),vN(302,`boolean`),ug()(),Ac(303,`td`,24)(304,`p`)(305,`code`),vN(306,`false`),ug()()(),Ac(307,`td`,25)(308,`em`)(309,`strong`),vN(310,`(opcional)`),ug()(),Ac(311,`p`),vN(312,`Define que o popover (`),Ac(313,`code`),vN(314,`p-helper`),ug(),vN(315,` e/ou `),Ac(316,`code`),vN(317,`p-error-limit`),ug(),vN(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(319,`blockquote`)(320,`p`),vN(321,`Quando utilizado com `),Ac(322,`code`),vN(323,`p-helper`),ug(),vN(324,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(325,`tr`,17)(326,`td`,18)(327,`div`,19)(328,`span`,20),vN(329,` (p-change)`),Kc(330,`br`),ug()()(),Ac(331,`td`,22)(332,`code`,23),vN(333,`EventEmitter`),ug()(),Ac(334,`td`,24),vN(335,`-`),ug(),Ac(336,`td`,25)(337,`em`)(338,`strong`),vN(339,`(opcional)`),ug()(),Ac(340,`p`),vN(341,`Evento disparado ao alterar valor do campo.`),ug()()(),Ac(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),vN(346,` (p-change-model)`),Kc(347,`br`),ug()()(),Ac(348,`td`,22)(349,`code`,23),vN(350,`EventEmitter`),ug()(),Ac(351,`td`,24),vN(352,`-`),ug(),Ac(353,`td`,25)(354,`em`)(355,`strong`),vN(356,`(opcional)`),ug()(),Ac(357,`p`),vN(358,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(359,`code`),vN(360,`setValue`),ug(),vN(361,`, `),Ac(362,`code`),vN(363,`patchValue`),ug(),vN(364,`, carregamento assíncrono).`),ug(),Ac(365,`p`),vN(366,`Diferentemente do `),Ac(367,`code`),vN(368,`p-change`),ug(),vN(369,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(370,`code`),vN(371,`p-change-model`),ug(),vN(372,` cobre todos os cenários de alteração de valor.`),ug(),Ac(373,`p`),vN(374,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(375,`tr`,17)(376,`td`,18)(377,`div`,26)(378,`span`,27),vN(379,` p-compact-label`),Kc(380,`br`),ug()()(),Ac(381,`td`,22)(382,`code`,29),vN(383,`boolean`),ug()(),Ac(384,`td`,24)(385,`p`)(386,`code`),vN(387,`false`),ug()()(),Ac(388,`td`,25)(389,`em`)(390,`strong`),vN(391,`(opcional)`),ug()(),Ac(392,`p`),vN(393,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(394,`p`),vN(395,`Quando habilitado (`),Ac(396,`code`),vN(397,`true`),ug(),vN(398,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(399,`ul`)(400,`li`)(401,`code`),vN(402,`po-label`),ug()(),Ac(403,`li`)(404,`code`),vN(405,`p-requirement (showRequired)`),ug()(),Ac(406,`li`)(407,`code`),vN(408,`po-helper`),ug()()(),Ac(409,`p`),vN(410,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(411,`p`),vN(412,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(413,`ul`)(414,`li`)(415,`code`),vN(416,`--field-container-title-justify`),ug()(),Ac(417,`li`)(418,`code`),vN(419,`--field-container-title-flex`),ug()()(),Ac(420,`p`),vN(421,`Exemplo:`),ug(),Ac(422,`pre`)(423,`code`),vN(424,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(425,`p`),vN(426,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(427,`tr`,17)(428,`td`,18)(429,`div`,26)(430,`span`,27),vN(431,` p-disabled`),Kc(432,`br`),ug()()(),Ac(433,`td`,22)(434,`code`,29),vN(435,`boolean`),ug()(),Ac(436,`td`,24)(437,`p`)(438,`code`),vN(439,`false`),ug()()(),Ac(440,`td`,25)(441,`em`)(442,`strong`),vN(443,`(opcional)`),ug()(),Ac(444,`p`),vN(445,`Indica se o campo será desabilitado.`),ug()()(),Ac(446,`tr`,17)(447,`td`,18)(448,`div`,26)(449,`span`,27),vN(450,` p-error-limit`),Kc(451,`br`),ug()()(),Ac(452,`td`,22)(453,`code`,29),vN(454,`boolean`),ug()(),Ac(455,`td`,24)(456,`p`)(457,`code`),vN(458,`false`),ug()()(),Ac(459,`td`,25)(460,`em`)(461,`strong`),vN(462,`(opcional)`),ug()(),Ac(463,`p`),vN(464,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(465,`blockquote`)(466,`p`),vN(467,`Caso essa propriedade seja definida como `),Ac(468,`code`),vN(469,`true`),ug(),vN(470,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(471,`tr`,17)(472,`td`,18)(473,`div`,26)(474,`span`,27),vN(475,` p-field-error-message`),Kc(476,`br`),ug()()(),Ac(477,`td`,22)(478,`code`,28),vN(479,`string`),ug()(),Ac(480,`td`,24),vN(481,`-`),ug(),Ac(482,`td`,25)(483,`em`)(484,`strong`),vN(485,`(opcional)`),ug()(),Ac(486,`p`),vN(487,`Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false).`),ug()()(),Ac(488,`tr`,17)(489,`td`,18)(490,`div`,26)(491,`span`,27),vN(492,` p-format-model`),Kc(493,`br`),ug()()(),Ac(494,`td`,22)(495,`code`,29),vN(496,`boolean`),ug()(),Ac(497,`td`,24)(498,`p`)(499,`code`),vN(500,`false`),ug()()(),Ac(501,`td`,25)(502,`em`)(503,`strong`),vN(504,`(opcional)`),ug()(),Ac(505,`p`),vN(506,`Indica se o `),Ac(507,`code`),vN(508,`model`),ug(),vN(509,` receberá o valor formatado pelas propriedades `),Ac(510,`code`),vN(511,`p-label-on`),ug(),vN(512,` e `),Ac(513,`code`),vN(514,`p-label-off`),ug(),vN(515,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ug(),Ac(516,`blockquote`)(517,`p`),vN(518,`Por padrão será atribuído `),Ac(519,`code`),vN(520,`false`),ug(),vN(521,`.`),ug()()()(),Ac(522,`tr`,17)(523,`td`,18)(524,`div`,26)(525,`span`,27),vN(526,` p-help`),Kc(527,`br`),ug()()(),Ac(528,`td`,22)(529,`code`,28),vN(530,`string`),ug()(),Ac(531,`td`,24),vN(532,`-`),ug(),Ac(533,`td`,25)(534,`p`),vN(535,`Texto de apoio para o campo.`),ug()()(),Ac(536,`tr`,17)(537,`td`,18)(538,`div`,26)(539,`span`,27),vN(540,` p-hide-label-status`),Kc(541,`br`),ug()()(),Ac(542,`td`,22)(543,`code`,29),vN(544,`boolean`),ug()(),Ac(545,`td`,24)(546,`p`)(547,`code`),vN(548,`false`),ug()()(),Ac(549,`td`,25)(550,`em`)(551,`strong`),vN(552,`(opcional)`),ug()(),Ac(553,`p`),vN(554,`Indica se o status do `),Ac(555,`code`),vN(556,`model`),ug(),vN(557,` será escondido visualmente ao lado do switch.`),ug(),Ac(558,`blockquote`)(559,`p`),vN(560,`Por padrão será atribuído `),Ac(561,`code`),vN(562,`false`),ug(),vN(563,`.`),ug()()()(),Ac(564,`tr`,17)(565,`td`,18)(566,`div`,26)(567,`span`,27),vN(568,` p-invalid-value`),Kc(569,`br`),ug()()(),Ac(570,`td`,22)(571,`code`,29),vN(572,`boolean`),ug()(),Ac(573,`td`,24)(574,`p`)(575,`code`),vN(576,`false`),ug()()(),Ac(577,`td`,25)(578,`em`)(579,`strong`),vN(580,`(opcional)`),ug()(),Ac(581,`p`),vN(582,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ac(583,`code`),vN(584,`p-field-error-message`),ug(),vN(585,`.`),ug(),Ac(586,`blockquote`)(587,`p`),vN(588,`Caso essa propriedade seja definida como `),Ac(589,`code`),vN(590,`true`),ug(),vN(591,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ug()()()(),Ac(592,`tr`,17)(593,`td`,18)(594,`div`,19)(595,`span`,20),vN(596,` (p-keydown)`),Kc(597,`br`),ug()()(),Ac(598,`td`,22)(599,`code`,23),vN(600,`EventEmitter`),ug()(),Ac(601,`td`,24),vN(602,`-`),ug(),Ac(603,`td`,25)(604,`em`)(605,`strong`),vN(606,`(opcional)`),ug()(),Ac(607,`p`),vN(608,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(609,`code`),vN(610,`KeyboardEvent`),ug(),vN(611,` com informações sobre a tecla.`),ug()()(),Ac(612,`tr`,17)(613,`td`,18)(614,`div`,26)(615,`span`,27),vN(616,` p-label`),Kc(617,`br`),ug()()(),Ac(618,`td`,22)(619,`code`,28),vN(620,`string`),ug()(),Ac(621,`td`,24),vN(622,`-`),ug(),Ac(623,`td`,25)(624,`p`),vN(625,`Rótulo exibido pelo componente.`),ug()()(),Ac(626,`tr`,17)(627,`td`,18)(628,`div`,26)(629,`span`,27),vN(630,` p-label-off`),Kc(631,`br`),ug()()(),Ac(632,`td`,22)(633,`code`,28),vN(634,`string`),ug()(),Ac(635,`td`,24)(636,`p`)(637,`code`),vN(638,`false`),ug()()(),Ac(639,`td`,25)(640,`p`),vN(641,`Texto exibido quando o valor do componente for `),Ac(642,`code`),vN(643,`false`),ug(),vN(644,`.`),ug()()(),Ac(645,`tr`,17)(646,`td`,18)(647,`div`,26)(648,`span`,27),vN(649,` p-label-on`),Kc(650,`br`),ug()()(),Ac(651,`td`,22)(652,`code`,28),vN(653,`string`),ug()(),Ac(654,`td`,24)(655,`p`)(656,`code`),vN(657,`true`),ug()()(),Ac(658,`td`,25)(659,`p`),vN(660,`Texto exibido quando o valor do componente for `),Ac(661,`code`),vN(662,`true`),ug(),vN(663,`.`),ug()()(),Ac(664,`tr`,17)(665,`td`,18)(666,`div`,26)(667,`span`,27),vN(668,` p-label-position`),Kc(669,`br`),ug()()(),Ac(670,`td`,22)(671,`code`,30),vN(672,`PoSwitchLabelPosition`),ug()(),Ac(673,`td`,24),vN(674,`-`),ug(),Ac(675,`td`,25)(676,`em`)(677,`strong`),vN(678,`(opcional)`),ug()(),Ac(679,`p`),vN(680,`Posição de exibição do rótulo que fica ao lado do switch.`),ug(),Ac(681,`blockquote`)(682,`p`),vN(683,`Por padrão exibe à direita.`),ug()()()(),Ac(684,`tr`,17)(685,`td`,18)(686,`div`,26)(687,`span`,27),vN(688,` p-label-text-wrap`),Kc(689,`br`),ug()()(),Ac(690,`td`,22)(691,`code`,29),vN(692,`boolean`),ug()(),Ac(693,`td`,24)(694,`p`)(695,`code`),vN(696,`false`),ug()()(),Ac(697,`td`,25)(698,`em`)(699,`strong`),vN(700,`(opcional)`),ug()(),Ac(701,`p`),vN(702,`Habilita a quebra automática do texto da propriedade `),Ac(703,`code`),vN(704,`p-label`),ug(),vN(705,`. Quando `),Ac(706,`code`),vN(707,`p-label-text-wrap`),ug(),vN(708,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(709,`tr`,17)(710,`td`,18)(711,`div`,26)(712,`span`,27),vN(713,` p-loading`),Kc(714,`br`),ug()()(),Ac(715,`td`,22)(716,`code`,29),vN(717,`boolean`),ug()(),Ac(718,`td`,24)(719,`p`)(720,`code`),vN(721,`false`),ug()()(),Ac(722,`td`,25)(723,`em`)(724,`strong`),vN(725,`(opcional)`),ug()(),Ac(726,`p`),vN(727,`Exibe um ícone de carregamento substituindo o switch para sinalizar que uma operação está em andamento.`),ug()()(),Ac(728,`tr`,17)(729,`td`,18)(730,`div`,26)(731,`span`,27),vN(732,` name`),Kc(733,`br`),ug()()(),Ac(734,`td`,22)(735,`code`,28),vN(736,`string`),ug()(),Ac(737,`td`,24),vN(738,`-`),ug(),Ac(739,`td`,25)(740,`p`),vN(741,`Nome do componente.`),ug()()(),Ac(742,`tr`,17)(743,`td`,18)(744,`div`,26)(745,`span`,27),vN(746,` p-helper`),Kc(747,`br`),ug()()(),Ac(748,`td`,22)(749,`code`,31),vN(750,`PoHelperOptions `),ug(),Ac(751,`code`,28),vN(752,` string`),ug()(),Ac(753,`td`,24),vN(754,`-`),ug(),Ac(755,`td`,25)(756,`em`)(757,`strong`),vN(758,`(opcional)`),ug()(),Ac(759,`p`),vN(760,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(761,`code`),vN(762,`p-label`),ug(),vN(763,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(764,`code`),vN(765,`p-label`),ug(),vN(766,`.`),ug(),Ac(767,`blockquote`)(768,`p`),vN(769,`Para mais informações acesse: `),Ac(770,`a`,32),vN(771,`https://po-ui.io/documentation/po-helper`),ug(),vN(772,`.`),ug()(),Ac(773,`blockquote`)(774,`p`),vN(775,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(776,`code`),vN(777,`p-additional-help-tooltip`),ug(),vN(778,` e `),Ac(779,`code`),vN(780,`p-additional-help`),ug(),vN(781,`) será ignorado.`),ug()()()(),Ac(782,`tr`,17)(783,`td`,18)(784,`div`,26)(785,`span`,27),vN(786,` p-size`),Kc(787,`br`),ug()()(),Ac(788,`td`,22)(789,`code`,28),vN(790,`string`),ug()(),Ac(791,`td`,24)(792,`p`)(793,`code`),vN(794,`medium`),ug()()(),Ac(795,`td`,25)(796,`em`)(797,`strong`),vN(798,`(opcional)`),ug()(),Ac(799,`p`),vN(800,`Define o tamanho do componente:`),ug(),Ac(801,`ul`)(802,`li`)(803,`code`),vN(804,`small`),ug(),vN(805,`: altura de 16px (disponível apenas para acessibilidade AA).`),ug(),Ac(806,`li`)(807,`code`),vN(808,`medium`),ug(),vN(809,`: altura de 24px.`),ug()(),Ac(810,`blockquote`)(811,`p`),vN(812,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(813,`code`),vN(814,`medium`),ug(),vN(815,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(816,`a`,33),vN(817,`po-theme`),ug(),vN(818,`.`),ug()()()()(),Ac(819,`h3`,13),vN(820,`Métodos`),ug(),Ac(821,`table`,34)(822,`tr`,17)(823,`th`,35)(824,`div`,26)(825,`h4`)(826,`span`,27),vN(827,` showAdditionalHelp `),ug()()()()(),Ac(828,`tr`,25)(829,`td`,25)(830,`p`),vN(831,`Método que exibe `),Ac(832,`code`),vN(833,`p-helper`),ug(),vN(834,` ou executa a ação definida em `),Ac(835,`code`),vN(836,`p-helper{eventOnClick}`),ug(),vN(837,` ou em `),Ac(838,`code`),vN(839,`p-additionalHelp`),ug(),vN(840,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(841,`code`),vN(842,`p-keydown`),ug(),vN(843,`.`),ug(),Ac(844,`blockquote`)(845,`p`),vN(846,`Exibe ou oculta o conteúdo do componente `),Ac(847,`code`),vN(848,`po-helper`),ug(),vN(849,` quando o componente estiver com foco.`),ug()(),Ac(850,`pre`)(851,`code`),vN(852,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ug()(),Ac(853,`pre`)(854,`code`),vN(855,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(856,`br`),Ac(857,`table`,34)(858,`tr`,17)(859,`th`,35)(860,`div`,26)(861,`h4`)(862,`span`,27),vN(863,` focus `),ug()()()()(),Ac(864,`tr`,25)(865,`td`,25)(866,`p`),vN(867,`Função que atribui foco ao componente.`),ug(),Ac(868,`p`),vN(869,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(870,`pre`)(871,`code`),vN(872,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),ug()()()()(),Kc(873,`br`),Ac(874,`table`,34)(875,`tr`,17)(876,`th`,35)(877,`div`,26)(878,`h4`)(879,`span`,27),vN(880,` showAdditionalHelp `),ug()()()()(),Ac(881,`tr`,25)(882,`td`,25)(883,`p`),vN(884,`Método que exibe `),Ac(885,`code`),vN(886,`p-helper`),ug(),vN(887,` ou executa a ação definida em `),Ac(888,`code`),vN(889,`p-helper{eventOnClick}`),ug(),vN(890,` ou em `),Ac(891,`code`),vN(892,`p-additionalHelp`),ug(),vN(893,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(894,`code`),vN(895,`p-keydown`),ug(),vN(896,`.`),ug(),Ac(897,`blockquote`)(898,`p`),vN(899,`Exibe ou oculta o conteúdo do componente `),Ac(900,`code`),vN(901,`po-helper`),ug(),vN(902,` quando o componente estiver com foco.`),ug()(),Ac(903,`pre`)(904,`code`),vN(905,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),ug()(),Ac(906,`pre`)(907,`code`,36),vN(908,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(909,`br`),Ac(910,`h3`),vN(911,`Enums`),ug(),Ac(912,`h4`,4)(913,`code`,5),vN(914,`PoSwitchLabelPosition`),ug()(),Ac(915,`div`,2)(916,`p`),vN(917,`Enum para posicionar o label do valor do po-switch.`),ug()(),Ac(918,`h4`,13),vN(919,`Propriedades`),ug(),Ac(920,`table`,14)(921,`tr`,15)(922,`th`,16),vN(923,`Nome`),ug(),Ac(924,`th`,16),vN(925,`Descrição`),ug()(),Ac(926,`tr`,17)(927,`td`,18)(928,`div`,26)(929,`span`,27),vN(930,` Right`),Kc(931,`br`),ug()()(),Ac(932,`td`,25)(933,`p`),vN(934,`Posiciona o label do lado esquerdo do switch.`),ug()()(),Ac(935,`tr`,17)(936,`td`,18)(937,`div`,26)(938,`span`,27),vN(939,` Left`),Kc(940,`br`),ug()()(),Ac(941,`td`,25)(942,`p`),vN(943,`Posiciona o label do lado direito do switch.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ae=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Switch`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-switch-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-switch-basic-view`)(6,`sample-po-switch-labs-view`)(7,`sample-po-switch-order-view`)(8,`sample-po-switch-order-reactive-form-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,me,ue,Se,Ee,ge],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[kL.forChild(Ae),kL]})}return o})();var gt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[Ta,xe]})}return o})();export{gt as DocPoSwitchModule};