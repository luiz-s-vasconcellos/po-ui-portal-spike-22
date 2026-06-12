import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,da as Hp,d as f,aV as Xp,cR as fY,bL as H3,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,b6 as U3,b9 as ONe,I as dw,cV as bk,cW as wk,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic"]],standalone:false,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&Hl(0,"po-switch",0);},dependencies:[H3],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Switch Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-switch-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return o})();var ce=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:Hp.Left},{label:"Right",value:Hp.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs"]],standalone:false,decls:19,vars:31,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-loading","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=gx();Cl(0,"po-switch",1),gw("ngModelChange",function(r){return Jy(s),Zx(n.switch,r)||(n.switch=r),e_(r)}),dt("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(r){return Jy(s),Zx(n.label,r)||(n.label=r),e_(r)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(r){return Jy(s),Zx(n.help,r)||(n.help=r),e_(r)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(r){return Jy(s),Zx(n.helperText,r)||(n.helperText=r),e_(r)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(r){return Jy(s),Zx(n.labelOff,r)||(n.labelOff=r),e_(r)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(r){return Jy(s),Zx(n.labelOn,r)||(n.labelOn=r),e_(r)}),og(),Z0(),Cl(13,"po-input",10),gw("ngModelChange",function(r){return Jy(s),Zx(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),e_(r)}),og(),Z0(),Cl(14,"po-radio-group",11),gw("ngModelChange",function(r){return Jy(s),Zx(n.labelPosition,r)||(n.labelPosition=r),e_(r)}),og(),Z0(),Cl(15,"po-checkbox-group",12),gw("ngModelChange",function(r){return Jy(s),Zx(n.properties,r)||(n.properties=r),e_(r)}),og(),Z0(),Cl(16,"po-radio-group",13),gw("ngModelChange",function(r){return Jy(s),Zx(n.size,r)||(n.size=r),e_(r)}),og(),Z0(),Cl(17,"div",2)(18,"po-button",14),dt("p-click",function(){return n.restore()}),og()()();}l&2&&(pw("ngModel",n.switch),ZE("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-loading",n.properties.includes("loading"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),X0(),Lp(3),ZE("p-value",n.switch),Lp(),ZE("p-value",n.event),Lp(4),pw("ngModel",n.label),X0(),Lp(),pw("ngModel",n.help),X0(),Lp(),pw("ngModel",n.helperText),X0(),Lp(),pw("ngModel",n.labelOff),X0(),Lp(),pw("ngModel",n.labelOn),X0(),Lp(),pw("ngModel",n.fieldErrorMessage),X0(),Lp(),pw("ngModel",n.labelPosition),ZE("p-options",n.labelPositionOptions),X0(),Lp(),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(),pw("ngModel",n.size),ZE("p-options",n.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,H3,sme],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Switch Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-switch
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-switch-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return o})();var he=(()=>{class o{poNotification=f(Xp);labelPosition=Hp.Left;serviceFee=false;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order"]],standalone:false,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=gx();Cl(0,"div",1)(1,"po-widget",2)(2,"form",null,0),Hl(4,"po-table",3),Cl(5,"po-switch",4),gw("ngModelChange",function(r){return Jy(s),Zx(n.serviceFee,r)||(n.serviceFee=r),e_(r)}),dt("p-change",function(){return n.addServiceFee()}),og(),Z0(),Cl(6,"div",5)(7,"div",6),qx(8,"Total value"),og(),Cl(9,"span",7),qx(10,"R$"),og(),Cl(11,"span",8),qx(12),og()(),Cl(13,"div",1)(14,"po-button",9),dt("p-click",function(){return n.confirm()}),og()()()()();}l&2&&(Lp(4),ZE("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Lp(),pw("ngModel",n.serviceFee),ZE("p-label-position",n.labelPosition),X0(),Lp(7),dw(n.totalAmount));},dependencies:[lY,sY,aY,gk,fk,Qt,H3,U3,ONe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Switch - Order Summary"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-switch-order/sample-po-switch-order.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-switch-order"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return o})();var Se=(()=>{class o{poNotification=f(Xp);formBuilder=f(fY);formOrderSummary;labelPosition=Hp.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[false]});}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:false,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"form",2),Hl(3,"po-table",3),Cl(4,"po-switch",4),dt("p-change",function(){return n.addServiceFee()}),og(),Z0(),Cl(5,"div",5)(6,"div",6),qx(7,"Total value"),og(),Cl(8,"span",7),qx(9,"R$"),og(),Cl(10,"span",8),qx(11),og()(),Cl(12,"div",0)(13,"po-button",9),dt("p-click",function(){return n.confirm()}),og()()()()()),l&2&&(Lp(2),ZE("formGroup",n.formOrderSummary),Lp(),ZE("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Lp(),ZE("p-label-position",n.labelPosition),X0(),Lp(7),dw(n.totalAmount));},dependencies:[lY,sY,aY,bk,wk,Qt,H3,U3,ONe],encapsulation:2,changeDetection:1})}return o})();var Fe=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Switch - Order Summary Reactive Form"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-switch-order-reactive-form"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-doc"]],standalone:false,decls:911,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoSwitchComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23," O componente "),Cl(24,"code"),qx(25,"po-switch"),og(),qx(26," \xE9 um "),Cl(27,"a",6),qx(28,"checkbox"),og(),qx(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),og(),Cl(30,"p"),qx(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),og(),Cl(32,"p"),qx(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),og(),Cl(34,"blockquote")(35,"p"),qx(36,"O componente n\xE3o altera o valor incial informado no "),Cl(37,"em"),qx(38,"model"),og(),qx(39,", portanto indica-se inicializa-lo caso ter necessidade."),og()(),Cl(40,"h4"),qx(41,"Boas pr\xE1ticas"),og(),Cl(42,"ul")(43,"li"),qx(44,"Evite "),Cl(45,"code"),qx(46,"labels"),og(),qx(47," extensos que quebram o layout do "),Cl(48,"code"),qx(49,"po-switch"),og(),qx(50,", use "),Cl(51,"code"),qx(52,"labels"),og(),qx(53," diretos, curtos e intuitivos."),og()(),Cl(54,"h4"),qx(55,"Acessibilidade tratada no componente"),og(),Cl(56,"p"),qx(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(58,"ul")(59,"li"),qx(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),Cl(61,"a",7),qx(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),og()(),Cl(63,"li"),qx(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Cl(65,"a",8),qx(66,"WCAG 2.4.12: Focus Appearance"),og()()(),Cl(67,"h4"),qx(68,"Tokens customiz\xE1veis"),og(),Cl(69,"p"),qx(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(71,"blockquote")(72,"p"),qx(73,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(74,"a",9),qx(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(76,"."),og()(),Cl(77,"table")(78,"thead")(79,"tr")(80,"th"),qx(81,"Propriedade"),og(),Cl(82,"th"),qx(83,"Descri\xE7\xE3o"),og(),Cl(84,"th"),qx(85,"Valor Padr\xE3o"),og()()(),Cl(86,"tbody")(87,"tr")(88,"td")(89,"strong"),qx(90,"Unchecked"),og()(),Hl(91,"td")(92,"td"),og(),Cl(93,"tr")(94,"td")(95,"code"),qx(96,"--color-unchecked"),og()(),Cl(97,"td"),qx(98,"Cor principal no estado desmarcado"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--color-neutral-light-00)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--border-color"),og()(),Cl(106,"td"),qx(107,"Cor da borda"),og(),Cl(108,"td")(109,"code"),qx(110,"var(--color-neutral-dark-70)"),og()()(),Cl(111,"tr")(112,"td")(113,"code"),qx(114,"--track-unchecked"),og()(),Cl(115,"td"),qx(116,"Cor principal da faixa no estado desmarcado"),og(),Cl(117,"td")(118,"code"),qx(119,"var(--color-neutral-light-20)"),og()()(),Cl(120,"tr")(121,"td")(122,"strong"),qx(123,"Checked"),og()(),Hl(124,"td")(125,"td"),og(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--color-checked"),og()(),Cl(130,"td"),qx(131,"Cor principal no estado selecionado"),og(),Cl(132,"td")(133,"code"),qx(134,"var(--color-action-default)"),og()()(),Cl(135,"tr")(136,"td")(137,"code"),qx(138,"--track-checked"),og()(),Cl(139,"td"),qx(140,"Cor da faixa no estado selecionado"),og(),Cl(141,"td")(142,"code"),qx(143,"var(--color-brand-01-light)"),og()()(),Cl(144,"tr")(145,"td")(146,"strong"),qx(147,"Hover"),og()(),Hl(148,"td")(149,"td"),og(),Cl(150,"tr")(151,"td")(152,"code"),qx(153,"--color-unchecked-hover"),og()(),Cl(154,"td"),qx(155,"Cor principal no estado hover desmarcado"),og(),Cl(156,"td")(157,"code"),qx(158,"var(--color-action-pressed)"),og()()(),Cl(159,"tr")(160,"td")(161,"code"),qx(162,"--color-checked-hover"),og()(),Cl(163,"td"),qx(164,"Cor principal no estado hover marcado"),og(),Cl(165,"td")(166,"code"),qx(167,"var(--color-action-pressed)"),og()()(),Cl(168,"tr")(169,"td")(170,"strong"),qx(171,"Focused"),og()(),Hl(172,"td")(173,"td"),og(),Cl(174,"tr")(175,"td")(176,"code"),qx(177,"--outline-color-focused"),og()(),Cl(178,"td"),qx(179,"Cor do outline do estado de focus"),og(),Cl(180,"td")(181,"code"),qx(182,"var(--color-action-focus)"),og()()(),Cl(183,"tr")(184,"td")(185,"strong"),qx(186,"Disabled"),og()(),Hl(187,"td")(188,"td"),og(),Cl(189,"tr")(190,"td")(191,"code"),qx(192,"--color-unchecked-disabled"),og()(),Cl(193,"td"),qx(194,"Cor principal do disabled no estado desmarcado"),og(),Cl(195,"td")(196,"code"),qx(197,"var(--color-neutral-light-20)"),og()()(),Cl(198,"tr")(199,"td")(200,"code"),qx(201,"--color-checked-disabled"),og()(),Cl(202,"td"),qx(203,"Cor principal do disabled no estado marcado"),og(),Cl(204,"td")(205,"code"),qx(206,"var(--color-action-disabled)"),og()()()()()(),Cl(207,"div",10)(208,"h4",11),qx(209,"Seletor"),og(),Cl(210,"pre",12),qx(211,`<po-switch
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
`),og()(),Cl(212,"h4",13),qx(213,"Propriedades"),og(),Cl(214,"table",14)(215,"tr",15)(216,"th",16),qx(217,"Nome"),og(),Cl(218,"th",16),qx(219,"Tipo"),og(),Cl(220,"th",16),qx(221,"Padr\xE3o"),og(),Cl(222,"th",16),qx(223,"Descri\xE7\xE3o"),og()(),Cl(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),qx(228," (p-additional-help)"),Hl(229,"br"),og()(),Cl(230,"div",21),qx(231,"Deprecated"),og()(),Cl(232,"td",22)(233,"code",23),qx(234,"EventEmitter"),og()(),Cl(235,"td",24),qx(236,"-"),og(),Cl(237,"td",25)(238,"em")(239,"strong"),qx(240,"(opcional)"),og()(),Cl(241,"p"),qx(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(243,"blockquote")(244,"p"),qx(245,"Essa propriedade est\xE1 "),Cl(246,"strong"),qx(247,"depreciada"),og(),qx(248," e ser\xE1 removida na vers\xE3o "),Cl(249,"code"),qx(250,"23.x.x"),og(),qx(251,". Recomendamos utilizar a propriedade "),Cl(252,"code"),qx(253,"p-helper"),og(),qx(254," que oferece mais recursos e flexibilidade."),og()()()(),Cl(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),qx(259," p-additional-help-tooltip"),Hl(260,"br"),og()(),Cl(261,"div",21),qx(262,"Deprecated"),og()(),Cl(263,"td",22)(264,"code",28),qx(265,"string"),og()(),Cl(266,"td",24),qx(267,"-"),og(),Cl(268,"td",25)(269,"em")(270,"strong"),qx(271,"(opcional)"),og()(),Cl(272,"p"),qx(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(274,"code"),qx(275,"po-helper"),og(),qx(276,`.
`),Cl(277,"strong"),qx(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(279,"blockquote")(280,"p"),qx(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(282,"blockquote")(283,"p"),qx(284,"Essa propriedade est\xE1 "),Cl(285,"strong"),qx(286,"depreciada"),og(),qx(287," e ser\xE1 removida na vers\xE3o "),Cl(288,"code"),qx(289,"23.x.x"),og(),qx(290,". Recomendamos utilizar a propriedade "),Cl(291,"code"),qx(292,"p-helper"),og(),qx(293," que oferece mais recursos e flexibilidade."),og()()()(),Cl(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),qx(298," p-append-in-body"),Hl(299,"br"),og()()(),Cl(300,"td",22)(301,"code",29),qx(302,"boolean"),og()(),Cl(303,"td",24)(304,"p")(305,"code"),qx(306,"false"),og()()(),Cl(307,"td",25)(308,"em")(309,"strong"),qx(310,"(opcional)"),og()(),Cl(311,"p"),qx(312,"Define que o popover ("),Cl(313,"code"),qx(314,"p-helper"),og(),qx(315," e/ou "),Cl(316,"code"),qx(317,"p-error-limit"),og(),qx(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(319,"blockquote")(320,"p"),qx(321,"Quando utilizado com "),Cl(322,"code"),qx(323,"p-helper"),og(),qx(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),qx(329," (p-change)"),Hl(330,"br"),og()()(),Cl(331,"td",22)(332,"code",23),qx(333,"EventEmitter"),og()(),Cl(334,"td",24),qx(335,"-"),og(),Cl(336,"td",25)(337,"em")(338,"strong"),qx(339,"(opcional)"),og()(),Cl(340,"p"),qx(341,"Evento disparado ao alterar valor do campo."),og()()(),Cl(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),qx(346," p-compact-label"),Hl(347,"br"),og()()(),Cl(348,"td",22)(349,"code",29),qx(350,"boolean"),og()(),Cl(351,"td",24)(352,"p")(353,"code"),qx(354,"false"),og()()(),Cl(355,"td",25)(356,"em")(357,"strong"),qx(358,"(opcional)"),og()(),Cl(359,"p"),qx(360,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(361,"p"),qx(362,"Quando habilitado ("),Cl(363,"code"),qx(364,"true"),og(),qx(365,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(366,"ul")(367,"li")(368,"code"),qx(369,"po-label"),og()(),Cl(370,"li")(371,"code"),qx(372,"p-requirement (showRequired)"),og()(),Cl(373,"li")(374,"code"),qx(375,"po-helper"),og()()(),Cl(376,"p"),qx(377,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(378,"p"),qx(379,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(380,"ul")(381,"li")(382,"code"),qx(383,"--field-container-title-justify"),og()(),Cl(384,"li")(385,"code"),qx(386,"--field-container-title-flex"),og()()(),Cl(387,"p"),qx(388,"Exemplo:"),og(),Cl(389,"pre")(390,"code"),qx(391,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(392,"p"),qx(393,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(394,"tr",17)(395,"td",18)(396,"div",26)(397,"span",27),qx(398," p-disabled"),Hl(399,"br"),og()()(),Cl(400,"td",22)(401,"code",29),qx(402,"boolean"),og()(),Cl(403,"td",24)(404,"p")(405,"code"),qx(406,"false"),og()()(),Cl(407,"td",25)(408,"em")(409,"strong"),qx(410,"(opcional)"),og()(),Cl(411,"p"),qx(412,"Indica se o campo ser\xE1 desabilitado."),og()()(),Cl(413,"tr",17)(414,"td",18)(415,"div",26)(416,"span",27),qx(417," p-error-limit"),Hl(418,"br"),og()()(),Cl(419,"td",22)(420,"code",29),qx(421,"boolean"),og()(),Cl(422,"td",24)(423,"p")(424,"code"),qx(425,"false"),og()()(),Cl(426,"td",25)(427,"em")(428,"strong"),qx(429,"(opcional)"),og()(),Cl(430,"p"),qx(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(432,"blockquote")(433,"p"),qx(434,"Caso essa propriedade seja definida como "),Cl(435,"code"),qx(436,"true"),og(),qx(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),qx(442," p-field-error-message"),Hl(443,"br"),og()()(),Cl(444,"td",22)(445,"code",28),qx(446,"string"),og()(),Cl(447,"td",24),qx(448,"-"),og(),Cl(449,"td",25)(450,"em")(451,"strong"),qx(452,"(opcional)"),og()(),Cl(453,"p"),qx(454,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),og()()(),Cl(455,"tr",17)(456,"td",18)(457,"div",26)(458,"span",27),qx(459," p-format-model"),Hl(460,"br"),og()()(),Cl(461,"td",22)(462,"code",29),qx(463,"boolean"),og()(),Cl(464,"td",24)(465,"p")(466,"code"),qx(467,"false"),og()()(),Cl(468,"td",25)(469,"em")(470,"strong"),qx(471,"(opcional)"),og()(),Cl(472,"p"),qx(473,"Indica se o "),Cl(474,"code"),qx(475,"model"),og(),qx(476," receber\xE1 o valor formatado pelas propriedades "),Cl(477,"code"),qx(478,"p-label-on"),og(),qx(479," e "),Cl(480,"code"),qx(481,"p-label-off"),og(),qx(482,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Cl(483,"blockquote")(484,"p"),qx(485,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Cl(486,"code"),qx(487,"false"),og(),qx(488,"."),og()()()(),Cl(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),qx(493," p-help"),Hl(494,"br"),og()()(),Cl(495,"td",22)(496,"code",28),qx(497,"string"),og()(),Cl(498,"td",24),qx(499,"-"),og(),Cl(500,"td",25)(501,"p"),qx(502,"Texto de apoio para o campo."),og()()(),Cl(503,"tr",17)(504,"td",18)(505,"div",26)(506,"span",27),qx(507," p-hide-label-status"),Hl(508,"br"),og()()(),Cl(509,"td",22)(510,"code",29),qx(511,"boolean"),og()(),Cl(512,"td",24)(513,"p")(514,"code"),qx(515,"false"),og()()(),Cl(516,"td",25)(517,"em")(518,"strong"),qx(519,"(opcional)"),og()(),Cl(520,"p"),qx(521,"Indica se o status do "),Cl(522,"code"),qx(523,"model"),og(),qx(524," ser\xE1 escondido visualmente ao lado do switch."),og(),Cl(525,"blockquote")(526,"p"),qx(527,"Por padr\xE3o ser\xE1 atribu\xEDdo "),Cl(528,"code"),qx(529,"false"),og(),qx(530,"."),og()()()(),Cl(531,"tr",17)(532,"td",18)(533,"div",26)(534,"span",27),qx(535," p-invalid-value"),Hl(536,"br"),og()()(),Cl(537,"td",22)(538,"code",29),qx(539,"boolean"),og()(),Cl(540,"td",24)(541,"p")(542,"code"),qx(543,"false"),og()()(),Cl(544,"td",25)(545,"em")(546,"strong"),qx(547,"(opcional)"),og()(),Cl(548,"p"),qx(549,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Cl(550,"code"),qx(551,"p-field-error-message"),og(),qx(552,"."),og(),Cl(553,"blockquote")(554,"p"),qx(555,"Caso essa propriedade seja definida como "),Cl(556,"code"),qx(557,"true"),og(),qx(558,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()()()(),Cl(559,"tr",17)(560,"td",18)(561,"div",19)(562,"span",20),qx(563," (p-keydown)"),Hl(564,"br"),og()()(),Cl(565,"td",22)(566,"code",23),qx(567,"EventEmitter"),og()(),Cl(568,"td",24),qx(569,"-"),og(),Cl(570,"td",25)(571,"em")(572,"strong"),qx(573,"(opcional)"),og()(),Cl(574,"p"),qx(575,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(576,"code"),qx(577,"KeyboardEvent"),og(),qx(578," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),qx(583," p-label"),Hl(584,"br"),og()()(),Cl(585,"td",22)(586,"code",28),qx(587,"string"),og()(),Cl(588,"td",24),qx(589,"-"),og(),Cl(590,"td",25)(591,"p"),qx(592,"R\xF3tulo exibido pelo componente."),og()()(),Cl(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),qx(597," p-label-off"),Hl(598,"br"),og()()(),Cl(599,"td",22)(600,"code",28),qx(601,"string"),og()(),Cl(602,"td",24)(603,"p")(604,"code"),qx(605,"false"),og()()(),Cl(606,"td",25)(607,"p"),qx(608,"Texto exibido quando o valor do componente for "),Cl(609,"code"),qx(610,"false"),og(),qx(611,"."),og()()(),Cl(612,"tr",17)(613,"td",18)(614,"div",26)(615,"span",27),qx(616," p-label-on"),Hl(617,"br"),og()()(),Cl(618,"td",22)(619,"code",28),qx(620,"string"),og()(),Cl(621,"td",24)(622,"p")(623,"code"),qx(624,"true"),og()()(),Cl(625,"td",25)(626,"p"),qx(627,"Texto exibido quando o valor do componente for "),Cl(628,"code"),qx(629,"true"),og(),qx(630,"."),og()()(),Cl(631,"tr",17)(632,"td",18)(633,"div",26)(634,"span",27),qx(635," p-label-position"),Hl(636,"br"),og()()(),Cl(637,"td",22)(638,"code",30),qx(639,"PoSwitchLabelPosition"),og()(),Cl(640,"td",24),qx(641,"-"),og(),Cl(642,"td",25)(643,"em")(644,"strong"),qx(645,"(opcional)"),og()(),Cl(646,"p"),qx(647,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),og(),Cl(648,"blockquote")(649,"p"),qx(650,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Cl(651,"tr",17)(652,"td",18)(653,"div",26)(654,"span",27),qx(655," p-label-text-wrap"),Hl(656,"br"),og()()(),Cl(657,"td",22)(658,"code",29),qx(659,"boolean"),og()(),Cl(660,"td",24)(661,"p")(662,"code"),qx(663,"false"),og()()(),Cl(664,"td",25)(665,"em")(666,"strong"),qx(667,"(opcional)"),og()(),Cl(668,"p"),qx(669,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(670,"code"),qx(671,"p-label"),og(),qx(672,". Quando "),Cl(673,"code"),qx(674,"p-label-text-wrap"),og(),qx(675,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(676,"tr",17)(677,"td",18)(678,"div",26)(679,"span",27),qx(680," p-loading"),Hl(681,"br"),og()()(),Cl(682,"td",22)(683,"code",29),qx(684,"boolean"),og()(),Cl(685,"td",24)(686,"p")(687,"code"),qx(688,"false"),og()()(),Cl(689,"td",25)(690,"em")(691,"strong"),qx(692,"(opcional)"),og()(),Cl(693,"p"),qx(694,"Exibe um \xEDcone de carregamento substituindo o switch para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(695,"tr",17)(696,"td",18)(697,"div",26)(698,"span",27),qx(699," name"),Hl(700,"br"),og()()(),Cl(701,"td",22)(702,"code",28),qx(703,"string"),og()(),Cl(704,"td",24),qx(705,"-"),og(),Cl(706,"td",25)(707,"p"),qx(708,"Nome do componente."),og()()(),Cl(709,"tr",17)(710,"td",18)(711,"div",26)(712,"span",27),qx(713," p-helper"),Hl(714,"br"),og()()(),Cl(715,"td",22)(716,"code",31),qx(717,"PoHelperOptions "),og(),Cl(718,"code",28),qx(719," string"),og()(),Cl(720,"td",24),qx(721,"-"),og(),Cl(722,"td",25)(723,"em")(724,"strong"),qx(725,"(opcional)"),og()(),Cl(726,"p"),qx(727,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(728,"code"),qx(729,"p-label"),og(),qx(730," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(731,"code"),qx(732,"p-label"),og(),qx(733,"."),og(),Cl(734,"blockquote")(735,"p"),qx(736,"Para mais informa\xE7\xF5es acesse: "),Cl(737,"a",32),qx(738,"https://po-ui.io/documentation/po-helper"),og(),qx(739,"."),og()(),Cl(740,"blockquote")(741,"p"),qx(742,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(743,"code"),qx(744,"p-additional-help-tooltip"),og(),qx(745," e "),Cl(746,"code"),qx(747,"p-additional-help"),og(),qx(748,") ser\xE1 ignorado."),og()()()(),Cl(749,"tr",17)(750,"td",18)(751,"div",26)(752,"span",27),qx(753," p-size"),Hl(754,"br"),og()()(),Cl(755,"td",22)(756,"code",28),qx(757,"string"),og()(),Cl(758,"td",24)(759,"p")(760,"code"),qx(761,"medium"),og()()(),Cl(762,"td",25)(763,"em")(764,"strong"),qx(765,"(opcional)"),og()(),Cl(766,"p"),qx(767,"Define o tamanho do componente:"),og(),Cl(768,"ul")(769,"li")(770,"code"),qx(771,"small"),og(),qx(772,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(773,"li")(774,"code"),qx(775,"medium"),og(),qx(776,": altura de 24px."),og()(),Cl(777,"blockquote")(778,"p"),qx(779,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(780,"code"),qx(781,"medium"),og(),qx(782,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(783,"a",33),qx(784,"po-theme"),og(),qx(785,"."),og()()()()(),Cl(786,"h3",13),qx(787,"M\xE9todos"),og(),Cl(788,"table",34)(789,"tr",17)(790,"th",35)(791,"div",26)(792,"h4")(793,"span",27),qx(794," showAdditionalHelp "),og()()()()(),Cl(795,"tr",25)(796,"td",25)(797,"p"),qx(798,"M\xE9todo que exibe "),Cl(799,"code"),qx(800,"p-helper"),og(),qx(801," ou executa a a\xE7\xE3o definida em "),Cl(802,"code"),qx(803,"p-helper{eventOnClick}"),og(),qx(804," ou em "),Cl(805,"code"),qx(806,"p-additionalHelp"),og(),qx(807,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(808,"code"),qx(809,"p-keydown"),og(),qx(810,"."),og(),Cl(811,"blockquote")(812,"p"),qx(813,"Exibe ou oculta o conte\xFAdo do componente "),Cl(814,"code"),qx(815,"po-helper"),og(),qx(816," quando o componente estiver com foco."),og()(),Cl(817,"pre")(818,"code"),qx(819,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Cl(820,"pre")(821,"code"),qx(822,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(823,"br"),Cl(824,"table",34)(825,"tr",17)(826,"th",35)(827,"div",26)(828,"h4")(829,"span",27),qx(830," focus "),og()()()()(),Cl(831,"tr",25)(832,"td",25)(833,"p"),qx(834,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(835,"p"),qx(836,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(837,"pre")(838,"code"),qx(839,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),og()()()()(),Hl(840,"br"),Cl(841,"table",34)(842,"tr",17)(843,"th",35)(844,"div",26)(845,"h4")(846,"span",27),qx(847," showAdditionalHelp "),og()()()()(),Cl(848,"tr",25)(849,"td",25)(850,"p"),qx(851,"M\xE9todo que exibe "),Cl(852,"code"),qx(853,"p-helper"),og(),qx(854," ou executa a a\xE7\xE3o definida em "),Cl(855,"code"),qx(856,"p-helper{eventOnClick}"),og(),qx(857," ou em "),Cl(858,"code"),qx(859,"p-additionalHelp"),og(),qx(860,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(861,"code"),qx(862,"p-keydown"),og(),qx(863,"."),og(),Cl(864,"blockquote")(865,"p"),qx(866,"Exibe ou oculta o conte\xFAdo do componente "),Cl(867,"code"),qx(868,"po-helper"),og(),qx(869," quando o componente estiver com foco."),og()(),Cl(870,"pre")(871,"code"),qx(872,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),og()(),Cl(873,"pre")(874,"code",36),qx(875,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(876,"br"),Cl(877,"h3"),qx(878,"Enums"),og(),Cl(879,"h4",4)(880,"code",5),qx(881,"PoSwitchLabelPosition"),og()(),Cl(882,"div",2)(883,"p"),qx(884,"Enum para posicionar o label do valor do po-switch."),og()(),Cl(885,"h4",13),qx(886,"Propriedades"),og(),Cl(887,"table",14)(888,"tr",15)(889,"th",16),qx(890,"Nome"),og(),Cl(891,"th",16),qx(892,"Descri\xE7\xE3o"),og()(),Cl(893,"tr",17)(894,"td",18)(895,"div",26)(896,"span",27),qx(897," Right"),Hl(898,"br"),og()()(),Cl(899,"td",25)(900,"p"),qx(901,"Posiciona o label do lado esquerdo do switch."),og()()(),Cl(902,"tr",17)(903,"td",18)(904,"div",26)(905,"span",27),qx(906," Left"),Hl(907,"br"),og()()(),Cl(908,"td",25)(909,"p"),qx(910,"Posiciona o label do lado direito do switch."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-switch-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),og()()()),l&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,de,ue,be,Ee,ge],encapsulation:2})}return o})();var Ae=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[bL.forChild(Ae),bL]})}return o})();var gt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ca,ve]})}return o})();export{gt as DocPoSwitchModule};