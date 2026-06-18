import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d5 as zp,d as f,aW as Yp,cM as nY,bH as E3,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,b7 as A3,ba as bNe,A as vw,cQ as Rk,cR as Tk,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic"]],standalone:false,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&Wl(0,"po-switch",0);},dependencies:[E3],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Switch Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:zp.Left},{label:"Right",value:zp.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs"]],standalone:false,decls:19,vars:31,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-loading","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=Ex();Sl(0,"po-switch",1),Ew("ngModelChange",function(r){return Xy(s),tN(n.switch,r)||(n.switch=r),Qy(r)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Xy(s),tN(n.label,r)||(n.label=r),Qy(r)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(r){return Xy(s),tN(n.help,r)||(n.help=r),Qy(r)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(r){return Xy(s),tN(n.helperText,r)||(n.helperText=r),Qy(r)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(r){return Xy(s),tN(n.labelOff,r)||(n.labelOff=r),Qy(r)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(r){return Xy(s),tN(n.labelOn,r)||(n.labelOn=r),Qy(r)}),sg(),JA(),Sl(13,"po-input",10),Ew("ngModelChange",function(r){return Xy(s),tN(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),Qy(r)}),sg(),JA(),Sl(14,"po-radio-group",11),Ew("ngModelChange",function(r){return Xy(s),tN(n.labelPosition,r)||(n.labelPosition=r),Qy(r)}),sg(),JA(),Sl(15,"po-checkbox-group",12),Ew("ngModelChange",function(r){return Xy(s),tN(n.properties,r)||(n.properties=r),Qy(r)}),sg(),JA(),Sl(16,"po-radio-group",13),Ew("ngModelChange",function(r){return Xy(s),tN(n.size,r)||(n.size=r),Qy(r)}),sg(),JA(),Sl(17,"div",2)(18,"po-button",14),ht("p-click",function(){return n.restore()}),sg()()();}l&2&&(Dw("ngModel",n.switch),tw("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-loading",n.properties.includes("loading"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),t0(),Vp(3),tw("p-value",n.switch),Vp(),tw("p-value",n.event),Vp(4),Dw("ngModel",n.label),t0(),Vp(),Dw("ngModel",n.help),t0(),Vp(),Dw("ngModel",n.helperText),t0(),Vp(),Dw("ngModel",n.labelOff),t0(),Vp(),Dw("ngModel",n.labelOn),t0(),Vp(),Dw("ngModel",n.fieldErrorMessage),t0(),Vp(),Dw("ngModel",n.labelPosition),tw("p-options",n.labelPositionOptions),t0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0(),Vp(),Dw("ngModel",n.size),tw("p-options",n.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,E3,Qhe],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Switch Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="$safeNavigationMigration(properties?.includes('invalidValue'))"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=f(Yp);labelPosition=zp.Left;serviceFee=false;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order"]],standalone:false,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=Ex();Sl(0,"div",1)(1,"po-widget",2)(2,"form",null,0),Wl(4,"po-table",3),Sl(5,"po-switch",4),Ew("ngModelChange",function(r){return Xy(s),tN(n.serviceFee,r)||(n.serviceFee=r),Qy(r)}),ht("p-change",function(){return n.addServiceFee()}),sg(),JA(),Sl(6,"div",5)(7,"div",6),Jx(8,"Total value"),sg(),Sl(9,"span",7),Jx(10,"R$"),sg(),Sl(11,"span",8),Jx(12),sg()(),Sl(13,"div",1)(14,"po-button",9),ht("p-click",function(){return n.confirm()}),sg()()()()();}l&2&&(Vp(4),tw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Vp(),Dw("ngModel",n.serviceFee),tw("p-label-position",n.labelPosition),t0(),Vp(7),vw(n.totalAmount));},dependencies:[J9,K9,X9,Dk,vk,Qt,E3,A3,bNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Switch - Order Summary"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-switch-order/sample-po-switch-order.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-order"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return o})();var Se=(()=>{class o{poNotification=f(Yp);formBuilder=f(nY);formOrderSummary;labelPosition=zp.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[false]});}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:false,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"po-widget",1)(2,"form",2),Wl(3,"po-table",3),Sl(4,"po-switch",4),ht("p-change",function(){return n.addServiceFee()}),sg(),JA(),Sl(5,"div",5)(6,"div",6),Jx(7,"Total value"),sg(),Sl(8,"span",7),Jx(9,"R$"),sg(),Sl(10,"span",8),Jx(11),sg()(),Sl(12,"div",0)(13,"po-button",9),ht("p-click",function(){return n.confirm()}),sg()()()()()),l&2&&(Vp(2),tw("formGroup",n.formOrderSummary),Vp(),tw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Vp(),tw("p-label-position",n.labelPosition),t0(),Vp(7),vw(n.totalAmount));},dependencies:[J9,K9,X9,Rk,Tk,Qt,E3,A3,bNe],encapsulation:2,changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Switch - Order Summary Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-switch-order-reactive-form"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-doc"]],standalone:false,decls:911,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoSwitchComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23," O componente "),Sl(24,"code"),Jx(25,"po-switch"),sg(),Jx(26," \xE9 um "),Sl(27,"a",6),Jx(28,"checkbox"),sg(),Jx(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),sg(),Sl(30,"p"),Jx(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),sg(),Sl(32,"p"),Jx(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),sg(),Sl(34,"blockquote")(35,"p"),Jx(36,"O componente n\xE3o altera o valor incial informado no "),Sl(37,"em"),Jx(38,"model"),sg(),Jx(39,", portanto indica-se inicializa-lo caso ter necessidade."),sg()(),Sl(40,"h4"),Jx(41,"Boas pr\xE1ticas"),sg(),Sl(42,"ul")(43,"li"),Jx(44,"Evite "),Sl(45,"code"),Jx(46,"labels"),sg(),Jx(47," extensos que quebram o layout do "),Sl(48,"code"),Jx(49,"po-switch"),sg(),Jx(50,", use "),Sl(51,"code"),Jx(52,"labels"),sg(),Jx(53," diretos, curtos e intuitivos."),sg()(),Sl(54,"h4"),Jx(55,"Acessibilidade tratada no componente"),sg(),Sl(56,"p"),Jx(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Sl(58,"ul")(59,"li"),Jx(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),Sl(61,"a",7),Jx(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),sg()(),Sl(63,"li"),Jx(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(65,"a",8),Jx(66,"WCAG 2.4.12: Focus Appearance"),sg()()(),Sl(67,"h4"),Jx(68,"Tokens customiz\xE1veis"),sg(),Sl(69,"p"),Jx(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(71,"blockquote")(72,"p"),Jx(73,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(74,"a",9),Jx(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(76,"."),sg()(),Sl(77,"table")(78,"thead")(79,"tr")(80,"th"),Jx(81,"Propriedade"),sg(),Sl(82,"th"),Jx(83,"Descri\xE7\xE3o"),sg(),Sl(84,"th"),Jx(85,"Valor Padr\xE3o"),sg()()(),Sl(86,"tbody")(87,"tr")(88,"td")(89,"strong"),Jx(90,"Unchecked"),sg()(),Wl(91,"td")(92,"td"),sg(),Sl(93,"tr")(94,"td")(95,"code"),Jx(96,"--color-unchecked"),sg()(),Sl(97,"td"),Jx(98,"Cor principal no estado desmarcado"),sg(),Sl(99,"td")(100,"code"),Jx(101,"var(--color-neutral-light-00)"),sg()()(),Sl(102,"tr")(103,"td")(104,"code"),Jx(105,"--border-color"),sg()(),Sl(106,"td"),Jx(107,"Cor da borda"),sg(),Sl(108,"td")(109,"code"),Jx(110,"var(--color-neutral-dark-70)"),sg()()(),Sl(111,"tr")(112,"td")(113,"code"),Jx(114,"--track-unchecked"),sg()(),Sl(115,"td"),Jx(116,"Cor principal da faixa no estado desmarcado"),sg(),Sl(117,"td")(118,"code"),Jx(119,"var(--color-neutral-light-20)"),sg()()(),Sl(120,"tr")(121,"td")(122,"strong"),Jx(123,"Checked"),sg()(),Wl(124,"td")(125,"td"),sg(),Sl(126,"tr")(127,"td")(128,"code"),Jx(129,"--color-checked"),sg()(),Sl(130,"td"),Jx(131,"Cor principal no estado selecionado"),sg(),Sl(132,"td")(133,"code"),Jx(134,"var(--color-action-default)"),sg()()(),Sl(135,"tr")(136,"td")(137,"code"),Jx(138,"--track-checked"),sg()(),Sl(139,"td"),Jx(140,"Cor da faixa no estado selecionado"),sg(),Sl(141,"td")(142,"code"),Jx(143,"var(--color-brand-01-light)"),sg()()(),Sl(144,"tr")(145,"td")(146,"strong"),Jx(147,"Hover"),sg()(),Wl(148,"td")(149,"td"),sg(),Sl(150,"tr")(151,"td")(152,"code"),Jx(153,"--color-unchecked-hover"),sg()(),Sl(154,"td"),Jx(155,"Cor principal no estado hover desmarcado"),sg(),Sl(156,"td")(157,"code"),Jx(158,"var(--color-action-pressed)"),sg()()(),Sl(159,"tr")(160,"td")(161,"code"),Jx(162,"--color-checked-hover"),sg()(),Sl(163,"td"),Jx(164,"Cor principal no estado hover marcado"),sg(),Sl(165,"td")(166,"code"),Jx(167,"var(--color-action-pressed)"),sg()()(),Sl(168,"tr")(169,"td")(170,"strong"),Jx(171,"Focused"),sg()(),Wl(172,"td")(173,"td"),sg(),Sl(174,"tr")(175,"td")(176,"code"),Jx(177,"--outline-color-focused"),sg()(),Sl(178,"td"),Jx(179,"Cor do outline do estado de focus"),sg(),Sl(180,"td")(181,"code"),Jx(182,"var(--color-action-focus)"),sg()()(),Sl(183,"tr")(184,"td")(185,"strong"),Jx(186,"Disabled"),sg()(),Wl(187,"td")(188,"td"),sg(),Sl(189,"tr")(190,"td")(191,"code"),Jx(192,"--color-unchecked-disabled"),sg()(),Sl(193,"td"),Jx(194,"Cor principal do disabled no estado desmarcado"),sg(),Sl(195,"td")(196,"code"),Jx(197,"var(--color-neutral-light-20)"),sg()()(),Sl(198,"tr")(199,"td")(200,"code"),Jx(201,"--color-checked-disabled"),sg()(),Sl(202,"td"),Jx(203,"Cor principal do disabled no estado marcado"),sg(),Sl(204,"td")(205,"code"),Jx(206,"var(--color-action-disabled)"),sg()()()()()(),Sl(207,"div",10)(208,"h4",11),Jx(209,"Seletor"),sg(),Sl(210,"pre",12),Jx(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
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
`),sg()(),Sl(212,"h4",13),Jx(213,"Propriedades"),sg(),Sl(214,"table",14)(215,"tr",15)(216,"th",16),Jx(217,"Nome"),sg(),Sl(218,"th",16),Jx(219,"Tipo"),sg(),Sl(220,"th",16),Jx(221,"Padr\xE3o"),sg(),Sl(222,"th",16),Jx(223,"Descri\xE7\xE3o"),sg()(),Sl(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),Jx(228," (p-additional-help)"),Wl(229,"br"),sg()(),Sl(230,"div",21),Jx(231,"Deprecated"),sg()(),Sl(232,"td",22)(233,"code",23),Jx(234,"EventEmitter"),sg()(),Sl(235,"td",24),Jx(236,"-"),sg(),Sl(237,"td",25)(238,"em")(239,"strong"),Jx(240,"(opcional)"),sg()(),Sl(241,"p"),Jx(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(243,"blockquote")(244,"p"),Jx(245,"Essa propriedade est\xE1 "),Sl(246,"strong"),Jx(247,"depreciada"),sg(),Jx(248," e ser\xE1 removida na vers\xE3o "),Sl(249,"code"),Jx(250,"23.x.x"),sg(),Jx(251,". Recomendamos utilizar a propriedade "),Sl(252,"code"),Jx(253,"p-helper"),sg(),Jx(254," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),Jx(259," p-additional-help-tooltip"),Wl(260,"br"),sg()(),Sl(261,"div",21),Jx(262,"Deprecated"),sg()(),Sl(263,"td",22)(264,"code",28),Jx(265,"string"),sg()(),Sl(266,"td",24),Jx(267,"-"),sg(),Sl(268,"td",25)(269,"em")(270,"strong"),Jx(271,"(opcional)"),sg()(),Sl(272,"p"),Jx(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(274,"code"),Jx(275,"po-helper"),sg(),Jx(276,`.
`),Sl(277,"strong"),Jx(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(279,"blockquote")(280,"p"),Jx(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(282,"blockquote")(283,"p"),Jx(284,"Essa propriedade est\xE1 "),Sl(285,"strong"),Jx(286,"depreciada"),sg(),Jx(287," e ser\xE1 removida na vers\xE3o "),Sl(288,"code"),Jx(289,"23.x.x"),sg(),Jx(290,". Recomendamos utilizar a propriedade "),Sl(291,"code"),Jx(292,"p-helper"),sg(),Jx(293," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),Jx(298," p-append-in-body"),Wl(299,"br"),sg()()(),Sl(300,"td",22)(301,"code",29),Jx(302,"boolean"),sg()(),Sl(303,"td",24)(304,"p")(305,"code"),Jx(306,"false"),sg()()(),Sl(307,"td",25)(308,"em")(309,"strong"),Jx(310,"(opcional)"),sg()(),Sl(311,"p"),Jx(312,"Define que o popover ("),Sl(313,"code"),Jx(314,"p-helper"),sg(),Jx(315," e/ou "),Sl(316,"code"),Jx(317,"p-error-limit"),sg(),Jx(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(319,"blockquote")(320,"p"),Jx(321,"Quando utilizado com "),Sl(322,"code"),Jx(323,"p-helper"),sg(),Jx(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),Jx(329," (p-change)"),Wl(330,"br"),sg()()(),Sl(331,"td",22)(332,"code",23),Jx(333,"EventEmitter"),sg()(),Sl(334,"td",24),Jx(335,"-"),sg(),Sl(336,"td",25)(337,"em")(338,"strong"),Jx(339,"(opcional)"),sg()(),Sl(340,"p"),Jx(341,"Evento disparado ao alterar valor do campo."),sg()()(),Sl(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),Jx(346," p-compact-label"),Wl(347,"br"),sg()()(),Sl(348,"td",22)(349,"code",29),Jx(350,"boolean"),sg()(),Sl(351,"td",24)(352,"p")(353,"code"),Jx(354,"false"),sg()()(),Sl(355,"td",25)(356,"em")(357,"strong"),Jx(358,"(opcional)"),sg()(),Sl(359,"p"),Jx(360,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(361,"p"),Jx(362,"Quando habilitado ("),Sl(363,"code"),Jx(364,"true"),sg(),Jx(365,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(366,"ul")(367,"li")(368,"code"),Jx(369,"po-label"),sg()(),Sl(370,"li")(371,"code"),Jx(372,"p-requirement (showRequired)"),sg()(),Sl(373,"li")(374,"code"),Jx(375,"po-helper"),sg()()(),Sl(376,"p"),Jx(377,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(378,"p"),Jx(379,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(380,"ul")(381,"li")(382,"code"),Jx(383,"--field-container-title-justify"),sg()(),Sl(384,"li")(385,"code"),Jx(386,"--field-container-title-flex"),sg()()(),Sl(387,"p"),Jx(388,"Exemplo:"),sg(),Sl(389,"pre")(390,"code"),Jx(391,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(392,"p"),Jx(393,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(394,"tr",17)(395,"td",18)(396,"div",26)(397,"span",27),Jx(398," p-disabled"),Wl(399,"br"),sg()()(),Sl(400,"td",22)(401,"code",29),Jx(402,"boolean"),sg()(),Sl(403,"td",24)(404,"p")(405,"code"),Jx(406,"false"),sg()()(),Sl(407,"td",25)(408,"em")(409,"strong"),Jx(410,"(opcional)"),sg()(),Sl(411,"p"),Jx(412,"Indica se o campo ser\xE1 desabilitado."),sg()()(),Sl(413,"tr",17)(414,"td",18)(415,"div",26)(416,"span",27),Jx(417," p-error-limit"),Wl(418,"br"),sg()()(),Sl(419,"td",22)(420,"code",29),Jx(421,"boolean"),sg()(),Sl(422,"td",24)(423,"p")(424,"code"),Jx(425,"false"),sg()()(),Sl(426,"td",25)(427,"em")(428,"strong"),Jx(429,"(opcional)"),sg()(),Sl(430,"p"),Jx(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(432,"blockquote")(433,"p"),Jx(434,"Caso essa propriedade seja definida como "),Sl(435,"code"),Jx(436,"true"),sg(),Jx(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),Jx(442," p-field-error-message"),Wl(443,"br"),sg()()(),Sl(444,"td",22)(445,"code",28),Jx(446,"string"),sg()(),Sl(447,"td",24),Jx(448,"-"),sg(),Sl(449,"td",25)(450,"em")(451,"strong"),Jx(452,"(opcional)"),sg()(),Sl(453,"p"),Jx(454,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),sg()()(),Sl(455,"tr",17)(456,"td",18)(457,"div",26)(458,"span",27),Jx(459," p-format-model"),Wl(460,"br"),sg()()(),Sl(461,"td",22)(462,"code",29),Jx(463,"boolean"),sg()(),Sl(464,"td",24)(465,"p")(466,"code"),Jx(467,"false"),sg()()(),Sl(468,"td",25)(469,"em")(470,"strong"),Jx(471,"(opcional)"),sg()(),Sl(472,"p"),Jx(473,"Indica se o "),Sl(474,"code"),Jx(475,"model"),sg(),Jx(476," receber\xE1 o valor formatado pelas propriedades "),Sl(477,"code"),Jx(478,"p-label-on"),sg(),Jx(479," e "),Sl(480,"code"),Jx(481,"p-label-off"),sg(),Jx(482,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Sl(483,"blockquote")(484,"p"),Jx(485,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Sl(486,"code"),Jx(487,"false"),sg(),Jx(488,"."),sg()()()(),Sl(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),Jx(493," p-help"),Wl(494,"br"),sg()()(),Sl(495,"td",22)(496,"code",28),Jx(497,"string"),sg()(),Sl(498,"td",24),Jx(499,"-"),sg(),Sl(500,"td",25)(501,"p"),Jx(502,"Texto de apoio para o campo."),sg()()(),Sl(503,"tr",17)(504,"td",18)(505,"div",26)(506,"span",27),Jx(507," p-hide-label-status"),Wl(508,"br"),sg()()(),Sl(509,"td",22)(510,"code",29),Jx(511,"boolean"),sg()(),Sl(512,"td",24)(513,"p")(514,"code"),Jx(515,"false"),sg()()(),Sl(516,"td",25)(517,"em")(518,"strong"),Jx(519,"(opcional)"),sg()(),Sl(520,"p"),Jx(521,"Indica se o status do "),Sl(522,"code"),Jx(523,"model"),sg(),Jx(524," ser\xE1 escondido visualmente ao lado do switch."),sg(),Sl(525,"blockquote")(526,"p"),Jx(527,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Sl(528,"code"),Jx(529,"false"),sg(),Jx(530,"."),sg()()()(),Sl(531,"tr",17)(532,"td",18)(533,"div",26)(534,"span",27),Jx(535," p-invalid-value"),Wl(536,"br"),sg()()(),Sl(537,"td",22)(538,"code",29),Jx(539,"boolean"),sg()(),Sl(540,"td",24)(541,"p")(542,"code"),Jx(543,"false"),sg()()(),Sl(544,"td",25)(545,"em")(546,"strong"),Jx(547,"(opcional)"),sg()(),Sl(548,"p"),Jx(549,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(550,"code"),Jx(551,"p-field-error-message"),sg(),Jx(552,"."),sg(),Sl(553,"blockquote")(554,"p"),Jx(555,"Caso essa propriedade seja definida como "),Sl(556,"code"),Jx(557,"true"),sg(),Jx(558,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()()()(),Sl(559,"tr",17)(560,"td",18)(561,"div",19)(562,"span",20),Jx(563," (p-keydown)"),Wl(564,"br"),sg()()(),Sl(565,"td",22)(566,"code",23),Jx(567,"EventEmitter"),sg()(),Sl(568,"td",24),Jx(569,"-"),sg(),Sl(570,"td",25)(571,"em")(572,"strong"),Jx(573,"(opcional)"),sg()(),Sl(574,"p"),Jx(575,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(576,"code"),Jx(577,"KeyboardEvent"),sg(),Jx(578," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),Jx(583," p-label"),Wl(584,"br"),sg()()(),Sl(585,"td",22)(586,"code",28),Jx(587,"string"),sg()(),Sl(588,"td",24),Jx(589,"-"),sg(),Sl(590,"td",25)(591,"p"),Jx(592,"R\xF3tulo exibido pelo componente."),sg()()(),Sl(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),Jx(597," p-label-off"),Wl(598,"br"),sg()()(),Sl(599,"td",22)(600,"code",28),Jx(601,"string"),sg()(),Sl(602,"td",24)(603,"p")(604,"code"),Jx(605,"false"),sg()()(),Sl(606,"td",25)(607,"p"),Jx(608,"Texto exibido quando o valor do componente for "),Sl(609,"code"),Jx(610,"false"),sg(),Jx(611,"."),sg()()(),Sl(612,"tr",17)(613,"td",18)(614,"div",26)(615,"span",27),Jx(616," p-label-on"),Wl(617,"br"),sg()()(),Sl(618,"td",22)(619,"code",28),Jx(620,"string"),sg()(),Sl(621,"td",24)(622,"p")(623,"code"),Jx(624,"true"),sg()()(),Sl(625,"td",25)(626,"p"),Jx(627,"Texto exibido quando o valor do componente for "),Sl(628,"code"),Jx(629,"true"),sg(),Jx(630,"."),sg()()(),Sl(631,"tr",17)(632,"td",18)(633,"div",26)(634,"span",27),Jx(635," p-label-position"),Wl(636,"br"),sg()()(),Sl(637,"td",22)(638,"code",30),Jx(639,"PoSwitchLabelPosition"),sg()(),Sl(640,"td",24),Jx(641,"-"),sg(),Sl(642,"td",25)(643,"em")(644,"strong"),Jx(645,"(opcional)"),sg()(),Sl(646,"p"),Jx(647,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),sg(),Sl(648,"blockquote")(649,"p"),Jx(650,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Sl(651,"tr",17)(652,"td",18)(653,"div",26)(654,"span",27),Jx(655," p-label-text-wrap"),Wl(656,"br"),sg()()(),Sl(657,"td",22)(658,"code",29),Jx(659,"boolean"),sg()(),Sl(660,"td",24)(661,"p")(662,"code"),Jx(663,"false"),sg()()(),Sl(664,"td",25)(665,"em")(666,"strong"),Jx(667,"(opcional)"),sg()(),Sl(668,"p"),Jx(669,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(670,"code"),Jx(671,"p-label"),sg(),Jx(672,". Quando "),Sl(673,"code"),Jx(674,"p-label-text-wrap"),sg(),Jx(675,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(676,"tr",17)(677,"td",18)(678,"div",26)(679,"span",27),Jx(680," p-loading"),Wl(681,"br"),sg()()(),Sl(682,"td",22)(683,"code",29),Jx(684,"boolean"),sg()(),Sl(685,"td",24)(686,"p")(687,"code"),Jx(688,"false"),sg()()(),Sl(689,"td",25)(690,"em")(691,"strong"),Jx(692,"(opcional)"),sg()(),Sl(693,"p"),Jx(694,"Exibe um \xEDcone de carregamento substituindo o switch para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(695,"tr",17)(696,"td",18)(697,"div",26)(698,"span",27),Jx(699," name"),Wl(700,"br"),sg()()(),Sl(701,"td",22)(702,"code",28),Jx(703,"string"),sg()(),Sl(704,"td",24),Jx(705,"-"),sg(),Sl(706,"td",25)(707,"p"),Jx(708,"Nome do componente."),sg()()(),Sl(709,"tr",17)(710,"td",18)(711,"div",26)(712,"span",27),Jx(713," p-helper"),Wl(714,"br"),sg()()(),Sl(715,"td",22)(716,"code",31),Jx(717,"PoHelperOptions "),sg(),Sl(718,"code",28),Jx(719," string"),sg()(),Sl(720,"td",24),Jx(721,"-"),sg(),Sl(722,"td",25)(723,"em")(724,"strong"),Jx(725,"(opcional)"),sg()(),Sl(726,"p"),Jx(727,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(728,"code"),Jx(729,"p-label"),sg(),Jx(730," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(731,"code"),Jx(732,"p-label"),sg(),Jx(733,"."),sg(),Sl(734,"blockquote")(735,"p"),Jx(736,"Para mais informa\xE7\xF5es acesse: "),Sl(737,"a",32),Jx(738,"https://po-ui.io/documentation/po-helper"),sg(),Jx(739,"."),sg()(),Sl(740,"blockquote")(741,"p"),Jx(742,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(743,"code"),Jx(744,"p-additional-help-tooltip"),sg(),Jx(745," e "),Sl(746,"code"),Jx(747,"p-additional-help"),sg(),Jx(748,") ser\xE1 ignorado."),sg()()()(),Sl(749,"tr",17)(750,"td",18)(751,"div",26)(752,"span",27),Jx(753," p-size"),Wl(754,"br"),sg()()(),Sl(755,"td",22)(756,"code",28),Jx(757,"string"),sg()(),Sl(758,"td",24)(759,"p")(760,"code"),Jx(761,"medium"),sg()()(),Sl(762,"td",25)(763,"em")(764,"strong"),Jx(765,"(opcional)"),sg()(),Sl(766,"p"),Jx(767,"Define o tamanho do componente:"),sg(),Sl(768,"ul")(769,"li")(770,"code"),Jx(771,"small"),sg(),Jx(772,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(773,"li")(774,"code"),Jx(775,"medium"),sg(),Jx(776,": altura de 24px."),sg()(),Sl(777,"blockquote")(778,"p"),Jx(779,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(780,"code"),Jx(781,"medium"),sg(),Jx(782,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(783,"a",33),Jx(784,"po-theme"),sg(),Jx(785,"."),sg()()()()(),Sl(786,"h3",13),Jx(787,"M\xE9todos"),sg(),Sl(788,"table",34)(789,"tr",17)(790,"th",35)(791,"div",26)(792,"h4")(793,"span",27),Jx(794," showAdditionalHelp "),sg()()()()(),Sl(795,"tr",25)(796,"td",25)(797,"p"),Jx(798,"M\xE9todo que exibe "),Sl(799,"code"),Jx(800,"p-helper"),sg(),Jx(801," ou executa a a\xE7\xE3o definida em "),Sl(802,"code"),Jx(803,"p-helper{eventOnClick}"),sg(),Jx(804," ou em "),Sl(805,"code"),Jx(806,"p-additionalHelp"),sg(),Jx(807,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(808,"code"),Jx(809,"p-keydown"),sg(),Jx(810,"."),sg(),Sl(811,"blockquote")(812,"p"),Jx(813,"Exibe ou oculta o conte\xFAdo do componente "),Sl(814,"code"),Jx(815,"po-helper"),sg(),Jx(816," quando o componente estiver com foco."),sg()(),Sl(817,"pre")(818,"code"),Jx(819,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Sl(820,"pre")(821,"code"),Jx(822,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(823,"br"),Sl(824,"table",34)(825,"tr",17)(826,"th",35)(827,"div",26)(828,"h4")(829,"span",27),Jx(830," focus "),sg()()()()(),Sl(831,"tr",25)(832,"td",25)(833,"p"),Jx(834,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(835,"p"),Jx(836,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(837,"pre")(838,"code"),Jx(839,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),sg()()()()(),Wl(840,"br"),Sl(841,"table",34)(842,"tr",17)(843,"th",35)(844,"div",26)(845,"h4")(846,"span",27),Jx(847," showAdditionalHelp "),sg()()()()(),Sl(848,"tr",25)(849,"td",25)(850,"p"),Jx(851,"M\xE9todo que exibe "),Sl(852,"code"),Jx(853,"p-helper"),sg(),Jx(854," ou executa a a\xE7\xE3o definida em "),Sl(855,"code"),Jx(856,"p-helper{eventOnClick}"),sg(),Jx(857," ou em "),Sl(858,"code"),Jx(859,"p-additionalHelp"),sg(),Jx(860,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(861,"code"),Jx(862,"p-keydown"),sg(),Jx(863,"."),sg(),Sl(864,"blockquote")(865,"p"),Jx(866,"Exibe ou oculta o conte\xFAdo do componente "),Sl(867,"code"),Jx(868,"po-helper"),sg(),Jx(869," quando o componente estiver com foco."),sg()(),Sl(870,"pre")(871,"code"),Jx(872,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),sg()(),Sl(873,"pre")(874,"code",36),Jx(875,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(876,"br"),Sl(877,"h3"),Jx(878,"Enums"),sg(),Sl(879,"h4",4)(880,"code",5),Jx(881,"PoSwitchLabelPosition"),sg()(),Sl(882,"div",2)(883,"p"),Jx(884,"Enum para posicionar o label do valor do po-switch."),sg()(),Sl(885,"h4",13),Jx(886,"Propriedades"),sg(),Sl(887,"table",14)(888,"tr",15)(889,"th",16),Jx(890,"Nome"),sg(),Sl(891,"th",16),Jx(892,"Descri\xE7\xE3o"),sg()(),Sl(893,"tr",17)(894,"td",18)(895,"div",26)(896,"span",27),Jx(897," Right"),Wl(898,"br"),sg()()(),Sl(899,"td",25)(900,"p"),Jx(901,"Posiciona o label do lado esquerdo do switch."),sg()()(),Sl(902,"tr",17)(903,"td",18)(904,"div",26)(905,"span",27),Jx(906," Left"),Wl(907,"br"),sg()()(),Sl(908,"td",25)(909,"p"),Jx(910,"Posiciona o label do lado direito do switch."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-switch-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,de,ue,be,Ee,ge],encapsulation:2})}return o})();var Ae=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[pL.forChild(Ae),pL]})}return o})();var gt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ar,ve]})}return o})();export{gt as DocPoSwitchModule};