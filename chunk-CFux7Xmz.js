import {f as fe$1,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,d5 as zp,g as f,aW as Yp,cM as oY,bH as k3,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,b7 as E3,ba as gNe,H as vw,cQ as Nk,cR as Ak,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic"]],standalone:false,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&Gl(0,"po-switch",0);},dependencies:[k3],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Switch Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-switch-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,we,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,me],encapsulation:2})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:zp.Left},{label:"Right",value:zp.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs"]],standalone:false,decls:19,vars:31,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-loading","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=Cx();Tl(0,"po-switch",1),Ew("ngModelChange",function(r){return Ky(s),rN(n.switch,r)||(n.switch=r),Xy(r)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Ky(s),rN(n.label,r)||(n.label=r),Xy(r)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(r){return Ky(s),rN(n.help,r)||(n.help=r),Xy(r)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(r){return Ky(s),rN(n.helperText,r)||(n.helperText=r),Xy(r)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(r){return Ky(s),rN(n.labelOff,r)||(n.labelOff=r),Xy(r)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(r){return Ky(s),rN(n.labelOn,r)||(n.labelOn=r),Xy(r)}),sg(),t0(),Tl(13,"po-input",10),Ew("ngModelChange",function(r){return Ky(s),rN(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),Xy(r)}),sg(),t0(),Tl(14,"po-radio-group",11),Ew("ngModelChange",function(r){return Ky(s),rN(n.labelPosition,r)||(n.labelPosition=r),Xy(r)}),sg(),t0(),Tl(15,"po-checkbox-group",12),Ew("ngModelChange",function(r){return Ky(s),rN(n.properties,r)||(n.properties=r),Xy(r)}),sg(),t0(),Tl(16,"po-radio-group",13),Ew("ngModelChange",function(r){return Ky(s),rN(n.size,r)||(n.size=r),Xy(r)}),sg(),t0(),Tl(17,"div",2)(18,"po-button",14),ht("p-click",function(){return n.restore()}),sg()()();}l&2&&(Dw("ngModel",n.switch),tw("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-loading",n.properties.includes("loading"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),r0(),Vp(3),tw("p-value",n.switch),Vp(),tw("p-value",n.event),Vp(4),Dw("ngModel",n.label),r0(),Vp(),Dw("ngModel",n.help),r0(),Vp(),Dw("ngModel",n.helperText),r0(),Vp(),Dw("ngModel",n.labelOff),r0(),Vp(),Dw("ngModel",n.labelOn),r0(),Vp(),Dw("ngModel",n.fieldErrorMessage),r0(),Vp(),Dw("ngModel",n.labelPosition),tw("p-options",n.labelPositionOptions),r0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),r0(),Vp(),Dw("ngModel",n.size),tw("p-options",n.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,k3,$he],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Switch Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-switch
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-switch-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=f(Yp);labelPosition=zp.Left;serviceFee=false;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order"]],standalone:false,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=Cx();Tl(0,"div",1)(1,"po-widget",2)(2,"form",null,0),Gl(4,"po-table",3),Tl(5,"po-switch",4),Ew("ngModelChange",function(r){return Ky(s),rN(n.serviceFee,r)||(n.serviceFee=r),Xy(r)}),ht("p-change",function(){return n.addServiceFee()}),sg(),t0(),Tl(6,"div",5)(7,"div",6),tN(8,"Total value"),sg(),Tl(9,"span",7),tN(10,"R$"),sg(),Tl(11,"span",8),tN(12),sg()(),Tl(13,"div",1)(14,"po-button",9),ht("p-click",function(){return n.confirm()}),sg()()()()();}l&2&&(Vp(4),tw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Vp(),Dw("ngModel",n.serviceFee),tw("p-label-position",n.labelPosition),r0(),Vp(7),vw(n.totalAmount));},dependencies:[nY,J9,eY,Ck,Dk,Qt,k3,E3,gNe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Switch - Order Summary"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-switch-order/sample-po-switch-order.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-switch-order"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Me,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,he],encapsulation:2})}return o})();var Se=(()=>{class o{poNotification=f(Yp);formBuilder=f(oY);formOrderSummary;labelPosition=zp.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[false]});}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:false,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"form",2),Gl(3,"po-table",3),Tl(4,"po-switch",4),ht("p-change",function(){return n.addServiceFee()}),sg(),t0(),Tl(5,"div",5)(6,"div",6),tN(7,"Total value"),sg(),Tl(8,"span",7),tN(9,"R$"),sg(),Tl(10,"span",8),tN(11),sg()(),Tl(12,"div",0)(13,"po-button",9),ht("p-click",function(){return n.confirm()}),sg()()()()()),l&2&&(Vp(2),tw("formGroup",n.formOrderSummary),Vp(),tw("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Vp(),tw("p-label-position",n.labelPosition),r0(),Vp(7),vw(n.totalAmount));},dependencies:[nY,J9,eY,Nk,Ak,Qt,k3,E3,gNe],encapsulation:2,changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Switch - Order Summary Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-switch-order-reactive-form"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Fe,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-doc"]],standalone:false,decls:911,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoSwitchComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23," O componente "),Tl(24,"code"),tN(25,"po-switch"),sg(),tN(26," \xE9 um "),Tl(27,"a",6),tN(28,"checkbox"),sg(),tN(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),sg(),Tl(30,"p"),tN(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),sg(),Tl(32,"p"),tN(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),sg(),Tl(34,"blockquote")(35,"p"),tN(36,"O componente n\xE3o altera o valor incial informado no "),Tl(37,"em"),tN(38,"model"),sg(),tN(39,", portanto indica-se inicializa-lo caso ter necessidade."),sg()(),Tl(40,"h4"),tN(41,"Boas pr\xE1ticas"),sg(),Tl(42,"ul")(43,"li"),tN(44,"Evite "),Tl(45,"code"),tN(46,"labels"),sg(),tN(47," extensos que quebram o layout do "),Tl(48,"code"),tN(49,"po-switch"),sg(),tN(50,", use "),Tl(51,"code"),tN(52,"labels"),sg(),tN(53," diretos, curtos e intuitivos."),sg()(),Tl(54,"h4"),tN(55,"Acessibilidade tratada no componente"),sg(),Tl(56,"p"),tN(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(58,"ul")(59,"li"),tN(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),Tl(61,"a",7),tN(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),sg()(),Tl(63,"li"),tN(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Tl(65,"a",8),tN(66,"WCAG 2.4.12: Focus Appearance"),sg()()(),Tl(67,"h4"),tN(68,"Tokens customiz\xE1veis"),sg(),Tl(69,"p"),tN(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(71,"blockquote")(72,"p"),tN(73,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(74,"a",9),tN(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(76,"."),sg()(),Tl(77,"table")(78,"thead")(79,"tr")(80,"th"),tN(81,"Propriedade"),sg(),Tl(82,"th"),tN(83,"Descri\xE7\xE3o"),sg(),Tl(84,"th"),tN(85,"Valor Padr\xE3o"),sg()()(),Tl(86,"tbody")(87,"tr")(88,"td")(89,"strong"),tN(90,"Unchecked"),sg()(),Gl(91,"td")(92,"td"),sg(),Tl(93,"tr")(94,"td")(95,"code"),tN(96,"--color-unchecked"),sg()(),Tl(97,"td"),tN(98,"Cor principal no estado desmarcado"),sg(),Tl(99,"td")(100,"code"),tN(101,"var(--color-neutral-light-00)"),sg()()(),Tl(102,"tr")(103,"td")(104,"code"),tN(105,"--border-color"),sg()(),Tl(106,"td"),tN(107,"Cor da borda"),sg(),Tl(108,"td")(109,"code"),tN(110,"var(--color-neutral-dark-70)"),sg()()(),Tl(111,"tr")(112,"td")(113,"code"),tN(114,"--track-unchecked"),sg()(),Tl(115,"td"),tN(116,"Cor principal da faixa no estado desmarcado"),sg(),Tl(117,"td")(118,"code"),tN(119,"var(--color-neutral-light-20)"),sg()()(),Tl(120,"tr")(121,"td")(122,"strong"),tN(123,"Checked"),sg()(),Gl(124,"td")(125,"td"),sg(),Tl(126,"tr")(127,"td")(128,"code"),tN(129,"--color-checked"),sg()(),Tl(130,"td"),tN(131,"Cor principal no estado selecionado"),sg(),Tl(132,"td")(133,"code"),tN(134,"var(--color-action-default)"),sg()()(),Tl(135,"tr")(136,"td")(137,"code"),tN(138,"--track-checked"),sg()(),Tl(139,"td"),tN(140,"Cor da faixa no estado selecionado"),sg(),Tl(141,"td")(142,"code"),tN(143,"var(--color-brand-01-light)"),sg()()(),Tl(144,"tr")(145,"td")(146,"strong"),tN(147,"Hover"),sg()(),Gl(148,"td")(149,"td"),sg(),Tl(150,"tr")(151,"td")(152,"code"),tN(153,"--color-unchecked-hover"),sg()(),Tl(154,"td"),tN(155,"Cor principal no estado hover desmarcado"),sg(),Tl(156,"td")(157,"code"),tN(158,"var(--color-action-pressed)"),sg()()(),Tl(159,"tr")(160,"td")(161,"code"),tN(162,"--color-checked-hover"),sg()(),Tl(163,"td"),tN(164,"Cor principal no estado hover marcado"),sg(),Tl(165,"td")(166,"code"),tN(167,"var(--color-action-pressed)"),sg()()(),Tl(168,"tr")(169,"td")(170,"strong"),tN(171,"Focused"),sg()(),Gl(172,"td")(173,"td"),sg(),Tl(174,"tr")(175,"td")(176,"code"),tN(177,"--outline-color-focused"),sg()(),Tl(178,"td"),tN(179,"Cor do outline do estado de focus"),sg(),Tl(180,"td")(181,"code"),tN(182,"var(--color-action-focus)"),sg()()(),Tl(183,"tr")(184,"td")(185,"strong"),tN(186,"Disabled"),sg()(),Gl(187,"td")(188,"td"),sg(),Tl(189,"tr")(190,"td")(191,"code"),tN(192,"--color-unchecked-disabled"),sg()(),Tl(193,"td"),tN(194,"Cor principal do disabled no estado desmarcado"),sg(),Tl(195,"td")(196,"code"),tN(197,"var(--color-neutral-light-20)"),sg()()(),Tl(198,"tr")(199,"td")(200,"code"),tN(201,"--color-checked-disabled"),sg()(),Tl(202,"td"),tN(203,"Cor principal do disabled no estado marcado"),sg(),Tl(204,"td")(205,"code"),tN(206,"var(--color-action-disabled)"),sg()()()()()(),Tl(207,"div",10)(208,"h4",11),tN(209,"Seletor"),sg(),Tl(210,"pre",12),tN(211,`<po-switch
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
`),sg()(),Tl(212,"h4",13),tN(213,"Propriedades"),sg(),Tl(214,"table",14)(215,"tr",15)(216,"th",16),tN(217,"Nome"),sg(),Tl(218,"th",16),tN(219,"Tipo"),sg(),Tl(220,"th",16),tN(221,"Padr\xE3o"),sg(),Tl(222,"th",16),tN(223,"Descri\xE7\xE3o"),sg()(),Tl(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),tN(228," (p-additional-help)"),Gl(229,"br"),sg()(),Tl(230,"div",21),tN(231,"Deprecated"),sg()(),Tl(232,"td",22)(233,"code",23),tN(234,"EventEmitter"),sg()(),Tl(235,"td",24),tN(236,"-"),sg(),Tl(237,"td",25)(238,"em")(239,"strong"),tN(240,"(opcional)"),sg()(),Tl(241,"p"),tN(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(243,"blockquote")(244,"p"),tN(245,"Essa propriedade est\xE1 "),Tl(246,"strong"),tN(247,"depreciada"),sg(),tN(248," e ser\xE1 removida na vers\xE3o "),Tl(249,"code"),tN(250,"23.x.x"),sg(),tN(251,". Recomendamos utilizar a propriedade "),Tl(252,"code"),tN(253,"p-helper"),sg(),tN(254," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),tN(259," p-additional-help-tooltip"),Gl(260,"br"),sg()(),Tl(261,"div",21),tN(262,"Deprecated"),sg()(),Tl(263,"td",22)(264,"code",28),tN(265,"string"),sg()(),Tl(266,"td",24),tN(267,"-"),sg(),Tl(268,"td",25)(269,"em")(270,"strong"),tN(271,"(opcional)"),sg()(),Tl(272,"p"),tN(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(274,"code"),tN(275,"po-helper"),sg(),tN(276,`.
`),Tl(277,"strong"),tN(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(279,"blockquote")(280,"p"),tN(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(282,"blockquote")(283,"p"),tN(284,"Essa propriedade est\xE1 "),Tl(285,"strong"),tN(286,"depreciada"),sg(),tN(287," e ser\xE1 removida na vers\xE3o "),Tl(288,"code"),tN(289,"23.x.x"),sg(),tN(290,". Recomendamos utilizar a propriedade "),Tl(291,"code"),tN(292,"p-helper"),sg(),tN(293," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),tN(298," p-append-in-body"),Gl(299,"br"),sg()()(),Tl(300,"td",22)(301,"code",29),tN(302,"boolean"),sg()(),Tl(303,"td",24)(304,"p")(305,"code"),tN(306,"false"),sg()()(),Tl(307,"td",25)(308,"em")(309,"strong"),tN(310,"(opcional)"),sg()(),Tl(311,"p"),tN(312,"Define que o popover ("),Tl(313,"code"),tN(314,"p-helper"),sg(),tN(315," e/ou "),Tl(316,"code"),tN(317,"p-error-limit"),sg(),tN(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(319,"blockquote")(320,"p"),tN(321,"Quando utilizado com "),Tl(322,"code"),tN(323,"p-helper"),sg(),tN(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),tN(329," (p-change)"),Gl(330,"br"),sg()()(),Tl(331,"td",22)(332,"code",23),tN(333,"EventEmitter"),sg()(),Tl(334,"td",24),tN(335,"-"),sg(),Tl(336,"td",25)(337,"em")(338,"strong"),tN(339,"(opcional)"),sg()(),Tl(340,"p"),tN(341,"Evento disparado ao alterar valor do campo."),sg()()(),Tl(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),tN(346," p-compact-label"),Gl(347,"br"),sg()()(),Tl(348,"td",22)(349,"code",29),tN(350,"boolean"),sg()(),Tl(351,"td",24)(352,"p")(353,"code"),tN(354,"false"),sg()()(),Tl(355,"td",25)(356,"em")(357,"strong"),tN(358,"(opcional)"),sg()(),Tl(359,"p"),tN(360,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(361,"p"),tN(362,"Quando habilitado ("),Tl(363,"code"),tN(364,"true"),sg(),tN(365,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(366,"ul")(367,"li")(368,"code"),tN(369,"po-label"),sg()(),Tl(370,"li")(371,"code"),tN(372,"p-requirement (showRequired)"),sg()(),Tl(373,"li")(374,"code"),tN(375,"po-helper"),sg()()(),Tl(376,"p"),tN(377,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(378,"p"),tN(379,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(380,"ul")(381,"li")(382,"code"),tN(383,"--field-container-title-justify"),sg()(),Tl(384,"li")(385,"code"),tN(386,"--field-container-title-flex"),sg()()(),Tl(387,"p"),tN(388,"Exemplo:"),sg(),Tl(389,"pre")(390,"code"),tN(391,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(392,"p"),tN(393,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(394,"tr",17)(395,"td",18)(396,"div",26)(397,"span",27),tN(398," p-disabled"),Gl(399,"br"),sg()()(),Tl(400,"td",22)(401,"code",29),tN(402,"boolean"),sg()(),Tl(403,"td",24)(404,"p")(405,"code"),tN(406,"false"),sg()()(),Tl(407,"td",25)(408,"em")(409,"strong"),tN(410,"(opcional)"),sg()(),Tl(411,"p"),tN(412,"Indica se o campo ser\xE1 desabilitado."),sg()()(),Tl(413,"tr",17)(414,"td",18)(415,"div",26)(416,"span",27),tN(417," p-error-limit"),Gl(418,"br"),sg()()(),Tl(419,"td",22)(420,"code",29),tN(421,"boolean"),sg()(),Tl(422,"td",24)(423,"p")(424,"code"),tN(425,"false"),sg()()(),Tl(426,"td",25)(427,"em")(428,"strong"),tN(429,"(opcional)"),sg()(),Tl(430,"p"),tN(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(432,"blockquote")(433,"p"),tN(434,"Caso essa propriedade seja definida como "),Tl(435,"code"),tN(436,"true"),sg(),tN(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),tN(442," p-field-error-message"),Gl(443,"br"),sg()()(),Tl(444,"td",22)(445,"code",28),tN(446,"string"),sg()(),Tl(447,"td",24),tN(448,"-"),sg(),Tl(449,"td",25)(450,"em")(451,"strong"),tN(452,"(opcional)"),sg()(),Tl(453,"p"),tN(454,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),sg()()(),Tl(455,"tr",17)(456,"td",18)(457,"div",26)(458,"span",27),tN(459," p-format-model"),Gl(460,"br"),sg()()(),Tl(461,"td",22)(462,"code",29),tN(463,"boolean"),sg()(),Tl(464,"td",24)(465,"p")(466,"code"),tN(467,"false"),sg()()(),Tl(468,"td",25)(469,"em")(470,"strong"),tN(471,"(opcional)"),sg()(),Tl(472,"p"),tN(473,"Indica se o "),Tl(474,"code"),tN(475,"model"),sg(),tN(476," receber\xE1 o valor formatado pelas propriedades "),Tl(477,"code"),tN(478,"p-label-on"),sg(),tN(479," e "),Tl(480,"code"),tN(481,"p-label-off"),sg(),tN(482,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Tl(483,"blockquote")(484,"p"),tN(485,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Tl(486,"code"),tN(487,"false"),sg(),tN(488,"."),sg()()()(),Tl(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),tN(493," p-help"),Gl(494,"br"),sg()()(),Tl(495,"td",22)(496,"code",28),tN(497,"string"),sg()(),Tl(498,"td",24),tN(499,"-"),sg(),Tl(500,"td",25)(501,"p"),tN(502,"Texto de apoio para o campo."),sg()()(),Tl(503,"tr",17)(504,"td",18)(505,"div",26)(506,"span",27),tN(507," p-hide-label-status"),Gl(508,"br"),sg()()(),Tl(509,"td",22)(510,"code",29),tN(511,"boolean"),sg()(),Tl(512,"td",24)(513,"p")(514,"code"),tN(515,"false"),sg()()(),Tl(516,"td",25)(517,"em")(518,"strong"),tN(519,"(opcional)"),sg()(),Tl(520,"p"),tN(521,"Indica se o status do "),Tl(522,"code"),tN(523,"model"),sg(),tN(524," ser\xE1 escondido visualmente ao lado do switch."),sg(),Tl(525,"blockquote")(526,"p"),tN(527,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Tl(528,"code"),tN(529,"false"),sg(),tN(530,"."),sg()()()(),Tl(531,"tr",17)(532,"td",18)(533,"div",26)(534,"span",27),tN(535," p-invalid-value"),Gl(536,"br"),sg()()(),Tl(537,"td",22)(538,"code",29),tN(539,"boolean"),sg()(),Tl(540,"td",24)(541,"p")(542,"code"),tN(543,"false"),sg()()(),Tl(544,"td",25)(545,"em")(546,"strong"),tN(547,"(opcional)"),sg()(),Tl(548,"p"),tN(549,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Tl(550,"code"),tN(551,"p-field-error-message"),sg(),tN(552,"."),sg(),Tl(553,"blockquote")(554,"p"),tN(555,"Caso essa propriedade seja definida como "),Tl(556,"code"),tN(557,"true"),sg(),tN(558,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()()()(),Tl(559,"tr",17)(560,"td",18)(561,"div",19)(562,"span",20),tN(563," (p-keydown)"),Gl(564,"br"),sg()()(),Tl(565,"td",22)(566,"code",23),tN(567,"EventEmitter"),sg()(),Tl(568,"td",24),tN(569,"-"),sg(),Tl(570,"td",25)(571,"em")(572,"strong"),tN(573,"(opcional)"),sg()(),Tl(574,"p"),tN(575,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(576,"code"),tN(577,"KeyboardEvent"),sg(),tN(578," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),tN(583," p-label"),Gl(584,"br"),sg()()(),Tl(585,"td",22)(586,"code",28),tN(587,"string"),sg()(),Tl(588,"td",24),tN(589,"-"),sg(),Tl(590,"td",25)(591,"p"),tN(592,"R\xF3tulo exibido pelo componente."),sg()()(),Tl(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),tN(597," p-label-off"),Gl(598,"br"),sg()()(),Tl(599,"td",22)(600,"code",28),tN(601,"string"),sg()(),Tl(602,"td",24)(603,"p")(604,"code"),tN(605,"false"),sg()()(),Tl(606,"td",25)(607,"p"),tN(608,"Texto exibido quando o valor do componente for "),Tl(609,"code"),tN(610,"false"),sg(),tN(611,"."),sg()()(),Tl(612,"tr",17)(613,"td",18)(614,"div",26)(615,"span",27),tN(616," p-label-on"),Gl(617,"br"),sg()()(),Tl(618,"td",22)(619,"code",28),tN(620,"string"),sg()(),Tl(621,"td",24)(622,"p")(623,"code"),tN(624,"true"),sg()()(),Tl(625,"td",25)(626,"p"),tN(627,"Texto exibido quando o valor do componente for "),Tl(628,"code"),tN(629,"true"),sg(),tN(630,"."),sg()()(),Tl(631,"tr",17)(632,"td",18)(633,"div",26)(634,"span",27),tN(635," p-label-position"),Gl(636,"br"),sg()()(),Tl(637,"td",22)(638,"code",30),tN(639,"PoSwitchLabelPosition"),sg()(),Tl(640,"td",24),tN(641,"-"),sg(),Tl(642,"td",25)(643,"em")(644,"strong"),tN(645,"(opcional)"),sg()(),Tl(646,"p"),tN(647,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),sg(),Tl(648,"blockquote")(649,"p"),tN(650,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Tl(651,"tr",17)(652,"td",18)(653,"div",26)(654,"span",27),tN(655," p-label-text-wrap"),Gl(656,"br"),sg()()(),Tl(657,"td",22)(658,"code",29),tN(659,"boolean"),sg()(),Tl(660,"td",24)(661,"p")(662,"code"),tN(663,"false"),sg()()(),Tl(664,"td",25)(665,"em")(666,"strong"),tN(667,"(opcional)"),sg()(),Tl(668,"p"),tN(669,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(670,"code"),tN(671,"p-label"),sg(),tN(672,". Quando "),Tl(673,"code"),tN(674,"p-label-text-wrap"),sg(),tN(675,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(676,"tr",17)(677,"td",18)(678,"div",26)(679,"span",27),tN(680," p-loading"),Gl(681,"br"),sg()()(),Tl(682,"td",22)(683,"code",29),tN(684,"boolean"),sg()(),Tl(685,"td",24)(686,"p")(687,"code"),tN(688,"false"),sg()()(),Tl(689,"td",25)(690,"em")(691,"strong"),tN(692,"(opcional)"),sg()(),Tl(693,"p"),tN(694,"Exibe um \xEDcone de carregamento substituindo o switch para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(695,"tr",17)(696,"td",18)(697,"div",26)(698,"span",27),tN(699," name"),Gl(700,"br"),sg()()(),Tl(701,"td",22)(702,"code",28),tN(703,"string"),sg()(),Tl(704,"td",24),tN(705,"-"),sg(),Tl(706,"td",25)(707,"p"),tN(708,"Nome do componente."),sg()()(),Tl(709,"tr",17)(710,"td",18)(711,"div",26)(712,"span",27),tN(713," p-helper"),Gl(714,"br"),sg()()(),Tl(715,"td",22)(716,"code",31),tN(717,"PoHelperOptions "),sg(),Tl(718,"code",28),tN(719," string"),sg()(),Tl(720,"td",24),tN(721,"-"),sg(),Tl(722,"td",25)(723,"em")(724,"strong"),tN(725,"(opcional)"),sg()(),Tl(726,"p"),tN(727,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(728,"code"),tN(729,"p-label"),sg(),tN(730," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(731,"code"),tN(732,"p-label"),sg(),tN(733,"."),sg(),Tl(734,"blockquote")(735,"p"),tN(736,"Para mais informa\xE7\xF5es acesse: "),Tl(737,"a",32),tN(738,"https://po-ui.io/documentation/po-helper"),sg(),tN(739,"."),sg()(),Tl(740,"blockquote")(741,"p"),tN(742,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(743,"code"),tN(744,"p-additional-help-tooltip"),sg(),tN(745," e "),Tl(746,"code"),tN(747,"p-additional-help"),sg(),tN(748,") ser\xE1 ignorado."),sg()()()(),Tl(749,"tr",17)(750,"td",18)(751,"div",26)(752,"span",27),tN(753," p-size"),Gl(754,"br"),sg()()(),Tl(755,"td",22)(756,"code",28),tN(757,"string"),sg()(),Tl(758,"td",24)(759,"p")(760,"code"),tN(761,"medium"),sg()()(),Tl(762,"td",25)(763,"em")(764,"strong"),tN(765,"(opcional)"),sg()(),Tl(766,"p"),tN(767,"Define o tamanho do componente:"),sg(),Tl(768,"ul")(769,"li")(770,"code"),tN(771,"small"),sg(),tN(772,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(773,"li")(774,"code"),tN(775,"medium"),sg(),tN(776,": altura de 24px."),sg()(),Tl(777,"blockquote")(778,"p"),tN(779,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(780,"code"),tN(781,"medium"),sg(),tN(782,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(783,"a",33),tN(784,"po-theme"),sg(),tN(785,"."),sg()()()()(),Tl(786,"h3",13),tN(787,"M\xE9todos"),sg(),Tl(788,"table",34)(789,"tr",17)(790,"th",35)(791,"div",26)(792,"h4")(793,"span",27),tN(794," showAdditionalHelp "),sg()()()()(),Tl(795,"tr",25)(796,"td",25)(797,"p"),tN(798,"M\xE9todo que exibe "),Tl(799,"code"),tN(800,"p-helper"),sg(),tN(801," ou executa a a\xE7\xE3o definida em "),Tl(802,"code"),tN(803,"p-helper{eventOnClick}"),sg(),tN(804," ou em "),Tl(805,"code"),tN(806,"p-additionalHelp"),sg(),tN(807,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(808,"code"),tN(809,"p-keydown"),sg(),tN(810,"."),sg(),Tl(811,"blockquote")(812,"p"),tN(813,"Exibe ou oculta o conte\xFAdo do componente "),Tl(814,"code"),tN(815,"po-helper"),sg(),tN(816," quando o componente estiver com foco."),sg()(),Tl(817,"pre")(818,"code"),tN(819,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Tl(820,"pre")(821,"code"),tN(822,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(823,"br"),Tl(824,"table",34)(825,"tr",17)(826,"th",35)(827,"div",26)(828,"h4")(829,"span",27),tN(830," focus "),sg()()()()(),Tl(831,"tr",25)(832,"td",25)(833,"p"),tN(834,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(835,"p"),tN(836,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(837,"pre")(838,"code"),tN(839,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),sg()()()()(),Gl(840,"br"),Tl(841,"table",34)(842,"tr",17)(843,"th",35)(844,"div",26)(845,"h4")(846,"span",27),tN(847," showAdditionalHelp "),sg()()()()(),Tl(848,"tr",25)(849,"td",25)(850,"p"),tN(851,"M\xE9todo que exibe "),Tl(852,"code"),tN(853,"p-helper"),sg(),tN(854," ou executa a a\xE7\xE3o definida em "),Tl(855,"code"),tN(856,"p-helper{eventOnClick}"),sg(),tN(857," ou em "),Tl(858,"code"),tN(859,"p-additionalHelp"),sg(),tN(860,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(861,"code"),tN(862,"p-keydown"),sg(),tN(863,"."),sg(),Tl(864,"blockquote")(865,"p"),tN(866,"Exibe ou oculta o conte\xFAdo do componente "),Tl(867,"code"),tN(868,"po-helper"),sg(),tN(869," quando o componente estiver com foco."),sg()(),Tl(870,"pre")(871,"code"),tN(872,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),sg()(),Tl(873,"pre")(874,"code",36),tN(875,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(876,"br"),Tl(877,"h3"),tN(878,"Enums"),sg(),Tl(879,"h4",4)(880,"code",5),tN(881,"PoSwitchLabelPosition"),sg()(),Tl(882,"div",2)(883,"p"),tN(884,"Enum para posicionar o label do valor do po-switch."),sg()(),Tl(885,"h4",13),tN(886,"Propriedades"),sg(),Tl(887,"table",14)(888,"tr",15)(889,"th",16),tN(890,"Nome"),sg(),Tl(891,"th",16),tN(892,"Descri\xE7\xE3o"),sg()(),Tl(893,"tr",17)(894,"td",18)(895,"div",26)(896,"span",27),tN(897," Right"),Gl(898,"br"),sg()()(),Tl(899,"td",25)(900,"p"),tN(901,"Posiciona o label do lado esquerdo do switch."),sg()()(),Tl(902,"tr",17)(903,"td",18)(904,"div",26)(905,"span",27),tN(906," Left"),Gl(907,"br"),sg()()(),Tl(908,"td",25)(909,"p"),tN(910,"Posiciona o label do lado direito do switch."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-switch-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,de,ue,be,Ee,ge],encapsulation:2})}return o})();var Ae=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[vL.forChild(Ae),vL]})}return o})();var gt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ar,ve]})}return o})();export{gt as DocPoSwitchModule};