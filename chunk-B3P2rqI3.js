import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cB as kp,d as f,aE as Bp,cg as uY,bd as na,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,aR as ty,aU as IR,F as uw,ck as vk,cl as gk,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic"]],standalone:false,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&Ul(0,"po-switch",0);},dependencies:[na],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Switch Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-switch-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return o})();var be=(()=>{class o{helperText;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:kp.Left},{label:"Right",value:kp.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage="";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs"]],standalone:false,decls:19,vars:31,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-label-text-wrap","p-loading","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=lx();wl(0,"po-switch",1),pw("ngModelChange",function(r){return Qy(s),$x(n.switch,r)||(n.switch=r),Jy(r)}),ut("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(r){return Qy(s),$x(n.label,r)||(n.label=r),Jy(r)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(r){return Qy(s),$x(n.help,r)||(n.help=r),Jy(r)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(r){return Qy(s),$x(n.helperText,r)||(n.helperText=r),Jy(r)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(r){return Qy(s),$x(n.labelOff,r)||(n.labelOff=r),Jy(r)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(r){return Qy(s),$x(n.labelOn,r)||(n.labelOn=r),Jy(r)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(r){return Qy(s),$x(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),Jy(r)}),ng(),$0(),wl(14,"po-radio-group",11),pw("ngModelChange",function(r){return Qy(s),$x(n.labelPosition,r)||(n.labelPosition=r),Jy(r)}),ng(),$0(),wl(15,"po-checkbox-group",12),pw("ngModelChange",function(r){return Qy(s),$x(n.properties,r)||(n.properties=r),Jy(r)}),ng(),$0(),wl(16,"po-radio-group",13),pw("ngModelChange",function(r){return Qy(s),$x(n.size,r)||(n.size=r),Jy(r)}),ng(),$0(),wl(17,"div",2)(18,"po-button",14),ut("p-click",function(){return n.restore()}),ng()()();}l&2&&(hw("ngModel",n.switch),YE("p-helper",n.helperText)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-loading",n.properties.includes("loading"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),G0(),Pp(3),YE("p-value",n.switch),Pp(),YE("p-value",n.event),Pp(4),hw("ngModel",n.label),G0(),Pp(),hw("ngModel",n.help),G0(),Pp(),hw("ngModel",n.helperText),G0(),Pp(),hw("ngModel",n.labelOff),G0(),Pp(),hw("ngModel",n.labelOn),G0(),Pp(),hw("ngModel",n.fieldErrorMessage),G0(),Pp(),hw("ngModel",n.labelPosition),YE("p-options",n.labelPositionOptions),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,na,Vp],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Switch Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-switch
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-switch-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return o})();var fe=(()=>{class o{poNotification=f(Bp);labelPosition=kp.Left;serviceFee=false;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order"]],standalone:false,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=lx();wl(0,"div",1)(1,"po-widget",2)(2,"form",null,0),Ul(4,"po-table",3),wl(5,"po-switch",4),pw("ngModelChange",function(r){return Qy(s),$x(n.serviceFee,r)||(n.serviceFee=r),Jy(r)}),ut("p-change",function(){return n.addServiceFee()}),ng(),$0(),wl(6,"div",5)(7,"div",6),Ux(8,"Total value"),ng(),wl(9,"span",7),Ux(10,"R$"),ng(),wl(11,"span",8),Ux(12),ng()(),wl(13,"div",1)(14,"po-button",9),ut("p-click",function(){return n.confirm()}),ng()()()()();}l&2&&(Pp(4),YE("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Pp(),hw("ngModel",n.serviceFee),YE("p-label-position",n.labelPosition),G0(),Pp(7),uw(n.totalAmount));},dependencies:[aY,iY,oY,ck,ok,Pe,na,ty,IR],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Switch - Order Summary"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-switch-order/sample-po-switch-order.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-switch-order"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,De,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return o})();var ge=(()=>{class o{poNotification=f(Bp);formBuilder=f(uY);formOrderSummary;labelPosition=kp.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[false]});}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=m?parseFloat((this.totalAmount*l).toFixed(2)):43;}confirm(){this.poNotification.success("Purchase done Successful!");}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:false,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"form",2),Ul(3,"po-table",3),wl(4,"po-switch",4),ut("p-change",function(){return n.addServiceFee()}),ng(),$0(),wl(5,"div",5)(6,"div",6),Ux(7,"Total value"),ng(),wl(8,"span",7),Ux(9,"R$"),ng(),wl(10,"span",8),Ux(11),ng()(),wl(12,"div",0)(13,"po-button",9),ut("p-click",function(){return n.confirm()}),ng()()()()()),l&2&&(Pp(2),YE("formGroup",n.formOrderSummary),Pp(),YE("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",false),Pp(),YE("p-label-position",n.labelPosition),G0(),Pp(7),uw(n.totalAmount));},dependencies:[aY,iY,oY,vk,gk,Pe,na,ty,IR],encapsulation:2,changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Switch - Order Summary Reactive Form"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-switch-order-reactive-form"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,qe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return o})();var xe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-switch-doc"]],standalone:false,decls:911,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoSwitchComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23," O componente "),wl(24,"code"),Ux(25,"po-switch"),ng(),Ux(26," \xE9 um "),wl(27,"a",6),Ux(28,"checkbox"),ng(),Ux(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),ng(),wl(30,"p"),Ux(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),ng(),wl(32,"p"),Ux(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),ng(),wl(34,"blockquote")(35,"p"),Ux(36,"O componente n\xE3o altera o valor incial informado no "),wl(37,"em"),Ux(38,"model"),ng(),Ux(39,", portanto indica-se inicializa-lo caso ter necessidade."),ng()(),wl(40,"h4"),Ux(41,"Boas pr\xE1ticas"),ng(),wl(42,"ul")(43,"li"),Ux(44,"Evite "),wl(45,"code"),Ux(46,"labels"),ng(),Ux(47," extensos que quebram o layout do "),wl(48,"code"),Ux(49,"po-switch"),ng(),Ux(50,", use "),wl(51,"code"),Ux(52,"labels"),ng(),Ux(53," diretos, curtos e intuitivos."),ng()(),wl(54,"h4"),Ux(55,"Acessibilidade tratada no componente"),ng(),wl(56,"p"),Ux(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),ng(),wl(58,"ul")(59,"li"),Ux(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),wl(61,"a",7),Ux(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),ng()(),wl(63,"li"),Ux(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),wl(65,"a",8),Ux(66,"WCAG 2.4.12: Focus Appearance"),ng()()(),wl(67,"h4"),Ux(68,"Tokens customiz\xE1veis"),ng(),wl(69,"p"),Ux(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(71,"blockquote")(72,"p"),Ux(73,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(74,"a",9),Ux(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(76,"."),ng()(),wl(77,"table")(78,"thead")(79,"tr")(80,"th"),Ux(81,"Propriedade"),ng(),wl(82,"th"),Ux(83,"Descri\xE7\xE3o"),ng(),wl(84,"th"),Ux(85,"Valor Padr\xE3o"),ng()()(),wl(86,"tbody")(87,"tr")(88,"td")(89,"strong"),Ux(90,"Unchecked"),ng()(),Ul(91,"td")(92,"td"),ng(),wl(93,"tr")(94,"td")(95,"code"),Ux(96,"--color-unchecked"),ng()(),wl(97,"td"),Ux(98,"Cor principal no estado desmarcado"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--color-neutral-light-00)"),ng()()(),wl(102,"tr")(103,"td")(104,"code"),Ux(105,"--border-color"),ng()(),wl(106,"td"),Ux(107,"Cor da borda"),ng(),wl(108,"td")(109,"code"),Ux(110,"var(--color-neutral-dark-70)"),ng()()(),wl(111,"tr")(112,"td")(113,"code"),Ux(114,"--track-unchecked"),ng()(),wl(115,"td"),Ux(116,"Cor principal da faixa no estado desmarcado"),ng(),wl(117,"td")(118,"code"),Ux(119,"var(--color-neutral-light-20)"),ng()()(),wl(120,"tr")(121,"td")(122,"strong"),Ux(123,"Checked"),ng()(),Ul(124,"td")(125,"td"),ng(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--color-checked"),ng()(),wl(130,"td"),Ux(131,"Cor principal no estado selecionado"),ng(),wl(132,"td")(133,"code"),Ux(134,"var(--color-action-default)"),ng()()(),wl(135,"tr")(136,"td")(137,"code"),Ux(138,"--track-checked"),ng()(),wl(139,"td"),Ux(140,"Cor da faixa no estado selecionado"),ng(),wl(141,"td")(142,"code"),Ux(143,"var(--color-brand-01-light)"),ng()()(),wl(144,"tr")(145,"td")(146,"strong"),Ux(147,"Hover"),ng()(),Ul(148,"td")(149,"td"),ng(),wl(150,"tr")(151,"td")(152,"code"),Ux(153,"--color-unchecked-hover"),ng()(),wl(154,"td"),Ux(155,"Cor principal no estado hover desmarcado"),ng(),wl(156,"td")(157,"code"),Ux(158,"var(--color-action-pressed)"),ng()()(),wl(159,"tr")(160,"td")(161,"code"),Ux(162,"--color-checked-hover"),ng()(),wl(163,"td"),Ux(164,"Cor principal no estado hover marcado"),ng(),wl(165,"td")(166,"code"),Ux(167,"var(--color-action-pressed)"),ng()()(),wl(168,"tr")(169,"td")(170,"strong"),Ux(171,"Focused"),ng()(),Ul(172,"td")(173,"td"),ng(),wl(174,"tr")(175,"td")(176,"code"),Ux(177,"--outline-color-focused"),ng()(),wl(178,"td"),Ux(179,"Cor do outline do estado de focus"),ng(),wl(180,"td")(181,"code"),Ux(182,"var(--color-action-focus)"),ng()()(),wl(183,"tr")(184,"td")(185,"strong"),Ux(186,"Disabled"),ng()(),Ul(187,"td")(188,"td"),ng(),wl(189,"tr")(190,"td")(191,"code"),Ux(192,"--color-unchecked-disabled"),ng()(),wl(193,"td"),Ux(194,"Cor principal do disabled no estado desmarcado"),ng(),wl(195,"td")(196,"code"),Ux(197,"var(--color-neutral-light-20)"),ng()()(),wl(198,"tr")(199,"td")(200,"code"),Ux(201,"--color-checked-disabled"),ng()(),wl(202,"td"),Ux(203,"Cor principal do disabled no estado marcado"),ng(),wl(204,"td")(205,"code"),Ux(206,"var(--color-action-disabled)"),ng()()()()()(),wl(207,"div",10)(208,"h4",11),Ux(209,"Seletor"),ng(),wl(210,"pre",12),Ux(211,`<po-switch
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
`),ng()(),wl(212,"h4",13),Ux(213,"Propriedades"),ng(),wl(214,"table",14)(215,"tr",15)(216,"th",16),Ux(217,"Nome"),ng(),wl(218,"th",16),Ux(219,"Tipo"),ng(),wl(220,"th",16),Ux(221,"Padr\xE3o"),ng(),wl(222,"th",16),Ux(223,"Descri\xE7\xE3o"),ng()(),wl(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),Ux(228," (p-additional-help)"),Ul(229,"br"),ng()(),wl(230,"div",21),Ux(231,"Deprecated"),ng()(),wl(232,"td",22)(233,"code",23),Ux(234,"EventEmitter"),ng()(),wl(235,"td",24),Ux(236,"-"),ng(),wl(237,"td",25)(238,"em")(239,"strong"),Ux(240,"(opcional)"),ng()(),wl(241,"p"),Ux(242,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(243,"blockquote")(244,"p"),Ux(245,"Essa propriedade est\xE1 "),wl(246,"strong"),Ux(247,"depreciada"),ng(),Ux(248," e ser\xE1 removida na vers\xE3o "),wl(249,"code"),Ux(250,"23.x.x"),ng(),Ux(251,". Recomendamos utilizar a propriedade "),wl(252,"code"),Ux(253,"p-helper"),ng(),Ux(254," que oferece mais recursos e flexibilidade."),ng()()()(),wl(255,"tr",17)(256,"td",18)(257,"div",26)(258,"span",27),Ux(259," p-additional-help-tooltip"),Ul(260,"br"),ng()(),wl(261,"div",21),Ux(262,"Deprecated"),ng()(),wl(263,"td",22)(264,"code",28),Ux(265,"string"),ng()(),wl(266,"td",24),Ux(267,"-"),ng(),wl(268,"td",25)(269,"em")(270,"strong"),Ux(271,"(opcional)"),ng()(),wl(272,"p"),Ux(273,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(274,"code"),Ux(275,"po-helper"),ng(),Ux(276,`.
`),wl(277,"strong"),Ux(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(279,"blockquote")(280,"p"),Ux(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(282,"blockquote")(283,"p"),Ux(284,"Essa propriedade est\xE1 "),wl(285,"strong"),Ux(286,"depreciada"),ng(),Ux(287," e ser\xE1 removida na vers\xE3o "),wl(288,"code"),Ux(289,"23.x.x"),ng(),Ux(290,". Recomendamos utilizar a propriedade "),wl(291,"code"),Ux(292,"p-helper"),ng(),Ux(293," que oferece mais recursos e flexibilidade."),ng()()()(),wl(294,"tr",17)(295,"td",18)(296,"div",26)(297,"span",27),Ux(298," p-append-in-body"),Ul(299,"br"),ng()()(),wl(300,"td",22)(301,"code",29),Ux(302,"boolean"),ng()(),wl(303,"td",24)(304,"p")(305,"code"),Ux(306,"false"),ng()()(),wl(307,"td",25)(308,"em")(309,"strong"),Ux(310,"(opcional)"),ng()(),wl(311,"p"),Ux(312,"Define que o popover ("),wl(313,"code"),Ux(314,"p-helper"),ng(),Ux(315," e/ou "),wl(316,"code"),Ux(317,"p-error-limit"),ng(),Ux(318,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(319,"blockquote")(320,"p"),Ux(321,"Quando utilizado com "),wl(322,"code"),Ux(323,"p-helper"),ng(),Ux(324,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(325,"tr",17)(326,"td",18)(327,"div",19)(328,"span",20),Ux(329," (p-change)"),Ul(330,"br"),ng()()(),wl(331,"td",22)(332,"code",23),Ux(333,"EventEmitter"),ng()(),wl(334,"td",24),Ux(335,"-"),ng(),wl(336,"td",25)(337,"em")(338,"strong"),Ux(339,"(opcional)"),ng()(),wl(340,"p"),Ux(341,"Evento disparado ao alterar valor do campo."),ng()()(),wl(342,"tr",17)(343,"td",18)(344,"div",26)(345,"span",27),Ux(346," p-compact-label"),Ul(347,"br"),ng()()(),wl(348,"td",22)(349,"code",29),Ux(350,"boolean"),ng()(),wl(351,"td",24)(352,"p")(353,"code"),Ux(354,"false"),ng()()(),wl(355,"td",25)(356,"em")(357,"strong"),Ux(358,"(opcional)"),ng()(),wl(359,"p"),Ux(360,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(361,"p"),Ux(362,"Quando habilitado ("),wl(363,"code"),Ux(364,"true"),ng(),Ux(365,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(366,"ul")(367,"li")(368,"code"),Ux(369,"po-label"),ng()(),wl(370,"li")(371,"code"),Ux(372,"p-requirement (showRequired)"),ng()(),wl(373,"li")(374,"code"),Ux(375,"po-helper"),ng()()(),wl(376,"p"),Ux(377,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(378,"p"),Ux(379,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(380,"ul")(381,"li")(382,"code"),Ux(383,"--field-container-title-justify"),ng()(),wl(384,"li")(385,"code"),Ux(386,"--field-container-title-flex"),ng()()(),wl(387,"p"),Ux(388,"Exemplo:"),ng(),wl(389,"pre")(390,"code"),Ux(391,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(392,"p"),Ux(393,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(394,"tr",17)(395,"td",18)(396,"div",26)(397,"span",27),Ux(398," p-disabled"),Ul(399,"br"),ng()()(),wl(400,"td",22)(401,"code",29),Ux(402,"boolean"),ng()(),wl(403,"td",24)(404,"p")(405,"code"),Ux(406,"false"),ng()()(),wl(407,"td",25)(408,"em")(409,"strong"),Ux(410,"(opcional)"),ng()(),wl(411,"p"),Ux(412,"Indica se o campo ser\xE1 desabilitado."),ng()()(),wl(413,"tr",17)(414,"td",18)(415,"div",26)(416,"span",27),Ux(417," p-error-limit"),Ul(418,"br"),ng()()(),wl(419,"td",22)(420,"code",29),Ux(421,"boolean"),ng()(),wl(422,"td",24)(423,"p")(424,"code"),Ux(425,"false"),ng()()(),wl(426,"td",25)(427,"em")(428,"strong"),Ux(429,"(opcional)"),ng()(),wl(430,"p"),Ux(431,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(432,"blockquote")(433,"p"),Ux(434,"Caso essa propriedade seja definida como "),wl(435,"code"),Ux(436,"true"),ng(),Ux(437,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),Ux(442," p-field-error-message"),Ul(443,"br"),ng()()(),wl(444,"td",22)(445,"code",28),Ux(446,"string"),ng()(),wl(447,"td",24),Ux(448,"-"),ng(),wl(449,"td",25)(450,"em")(451,"strong"),Ux(452,"(opcional)"),ng()(),wl(453,"p"),Ux(454,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),ng()()(),wl(455,"tr",17)(456,"td",18)(457,"div",26)(458,"span",27),Ux(459," p-format-model"),Ul(460,"br"),ng()()(),wl(461,"td",22)(462,"code",29),Ux(463,"boolean"),ng()(),wl(464,"td",24)(465,"p")(466,"code"),Ux(467,"false"),ng()()(),wl(468,"td",25)(469,"em")(470,"strong"),Ux(471,"(opcional)"),ng()(),wl(472,"p"),Ux(473,"Indica se o "),wl(474,"code"),Ux(475,"model"),ng(),Ux(476," receber\xE1 o valor formatado pelas propriedades "),wl(477,"code"),Ux(478,"p-label-on"),ng(),Ux(479," e "),wl(480,"code"),Ux(481,"p-label-off"),ng(),Ux(482,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ng(),wl(483,"blockquote")(484,"p"),Ux(485,"Por padr\xE3o ser\xE1 atribu\xEDdo "),wl(486,"code"),Ux(487,"false"),ng(),Ux(488,"."),ng()()()(),wl(489,"tr",17)(490,"td",18)(491,"div",26)(492,"span",27),Ux(493," p-help"),Ul(494,"br"),ng()()(),wl(495,"td",22)(496,"code",28),Ux(497,"string"),ng()(),wl(498,"td",24),Ux(499,"-"),ng(),wl(500,"td",25)(501,"p"),Ux(502,"Texto de apoio para o campo."),ng()()(),wl(503,"tr",17)(504,"td",18)(505,"div",26)(506,"span",27),Ux(507," p-hide-label-status"),Ul(508,"br"),ng()()(),wl(509,"td",22)(510,"code",29),Ux(511,"boolean"),ng()(),wl(512,"td",24)(513,"p")(514,"code"),Ux(515,"false"),ng()()(),wl(516,"td",25)(517,"em")(518,"strong"),Ux(519,"(opcional)"),ng()(),wl(520,"p"),Ux(521,"Indica se o status do "),wl(522,"code"),Ux(523,"model"),ng(),Ux(524," ser\xE1 escondido visualmente ao lado do switch."),ng(),wl(525,"blockquote")(526,"p"),Ux(527,"Por padr\xE3o ser\xE1 atribu\xEDdo "),wl(528,"code"),Ux(529,"false"),ng(),Ux(530,"."),ng()()()(),wl(531,"tr",17)(532,"td",18)(533,"div",26)(534,"span",27),Ux(535," p-invalid-value"),Ul(536,"br"),ng()()(),wl(537,"td",22)(538,"code",29),Ux(539,"boolean"),ng()(),wl(540,"td",24)(541,"p")(542,"code"),Ux(543,"false"),ng()()(),wl(544,"td",25)(545,"em")(546,"strong"),Ux(547,"(opcional)"),ng()(),wl(548,"p"),Ux(549,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),wl(550,"code"),Ux(551,"p-field-error-message"),ng(),Ux(552,"."),ng(),wl(553,"blockquote")(554,"p"),Ux(555,"Caso essa propriedade seja definida como "),wl(556,"code"),Ux(557,"true"),ng(),Ux(558,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),ng()()()(),wl(559,"tr",17)(560,"td",18)(561,"div",19)(562,"span",20),Ux(563," (p-keydown)"),Ul(564,"br"),ng()()(),wl(565,"td",22)(566,"code",23),Ux(567,"EventEmitter"),ng()(),wl(568,"td",24),Ux(569,"-"),ng(),wl(570,"td",25)(571,"em")(572,"strong"),Ux(573,"(opcional)"),ng()(),wl(574,"p"),Ux(575,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(576,"code"),Ux(577,"KeyboardEvent"),ng(),Ux(578," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(579,"tr",17)(580,"td",18)(581,"div",26)(582,"span",27),Ux(583," p-label"),Ul(584,"br"),ng()()(),wl(585,"td",22)(586,"code",28),Ux(587,"string"),ng()(),wl(588,"td",24),Ux(589,"-"),ng(),wl(590,"td",25)(591,"p"),Ux(592,"R\xF3tulo exibido pelo componente."),ng()()(),wl(593,"tr",17)(594,"td",18)(595,"div",26)(596,"span",27),Ux(597," p-label-off"),Ul(598,"br"),ng()()(),wl(599,"td",22)(600,"code",28),Ux(601,"string"),ng()(),wl(602,"td",24)(603,"p")(604,"code"),Ux(605,"false"),ng()()(),wl(606,"td",25)(607,"p"),Ux(608,"Texto exibido quando o valor do componente for "),wl(609,"code"),Ux(610,"false"),ng(),Ux(611,"."),ng()()(),wl(612,"tr",17)(613,"td",18)(614,"div",26)(615,"span",27),Ux(616," p-label-on"),Ul(617,"br"),ng()()(),wl(618,"td",22)(619,"code",28),Ux(620,"string"),ng()(),wl(621,"td",24)(622,"p")(623,"code"),Ux(624,"true"),ng()()(),wl(625,"td",25)(626,"p"),Ux(627,"Texto exibido quando o valor do componente for "),wl(628,"code"),Ux(629,"true"),ng(),Ux(630,"."),ng()()(),wl(631,"tr",17)(632,"td",18)(633,"div",26)(634,"span",27),Ux(635," p-label-position"),Ul(636,"br"),ng()()(),wl(637,"td",22)(638,"code",30),Ux(639,"PoSwitchLabelPosition"),ng()(),wl(640,"td",24),Ux(641,"-"),ng(),wl(642,"td",25)(643,"em")(644,"strong"),Ux(645,"(opcional)"),ng()(),wl(646,"p"),Ux(647,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),ng(),wl(648,"blockquote")(649,"p"),Ux(650,"Por padr\xE3o exibe \xE0 direita."),ng()()()(),wl(651,"tr",17)(652,"td",18)(653,"div",26)(654,"span",27),Ux(655," p-label-text-wrap"),Ul(656,"br"),ng()()(),wl(657,"td",22)(658,"code",29),Ux(659,"boolean"),ng()(),wl(660,"td",24)(661,"p")(662,"code"),Ux(663,"false"),ng()()(),wl(664,"td",25)(665,"em")(666,"strong"),Ux(667,"(opcional)"),ng()(),wl(668,"p"),Ux(669,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(670,"code"),Ux(671,"p-label"),ng(),Ux(672,". Quando "),wl(673,"code"),Ux(674,"p-label-text-wrap"),ng(),Ux(675,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(676,"tr",17)(677,"td",18)(678,"div",26)(679,"span",27),Ux(680," p-loading"),Ul(681,"br"),ng()()(),wl(682,"td",22)(683,"code",29),Ux(684,"boolean"),ng()(),wl(685,"td",24)(686,"p")(687,"code"),Ux(688,"false"),ng()()(),wl(689,"td",25)(690,"em")(691,"strong"),Ux(692,"(opcional)"),ng()(),wl(693,"p"),Ux(694,"Exibe um \xEDcone de carregamento substituindo o switch para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(695,"tr",17)(696,"td",18)(697,"div",26)(698,"span",27),Ux(699," name"),Ul(700,"br"),ng()()(),wl(701,"td",22)(702,"code",28),Ux(703,"string"),ng()(),wl(704,"td",24),Ux(705,"-"),ng(),wl(706,"td",25)(707,"p"),Ux(708,"Nome do componente."),ng()()(),wl(709,"tr",17)(710,"td",18)(711,"div",26)(712,"span",27),Ux(713," p-helper"),Ul(714,"br"),ng()()(),wl(715,"td",22)(716,"code",31),Ux(717,"PoHelperOptions "),ng(),wl(718,"code",28),Ux(719," string"),ng()(),wl(720,"td",24),Ux(721,"-"),ng(),wl(722,"td",25)(723,"em")(724,"strong"),Ux(725,"(opcional)"),ng()(),wl(726,"p"),Ux(727,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(728,"code"),Ux(729,"p-label"),ng(),Ux(730," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(731,"code"),Ux(732,"p-label"),ng(),Ux(733,"."),ng(),wl(734,"blockquote")(735,"p"),Ux(736,"Para mais informa\xE7\xF5es acesse: "),wl(737,"a",32),Ux(738,"https://po-ui.io/documentation/po-helper"),ng(),Ux(739,"."),ng()(),wl(740,"blockquote")(741,"p"),Ux(742,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(743,"code"),Ux(744,"p-additional-help-tooltip"),ng(),Ux(745," e "),wl(746,"code"),Ux(747,"p-additional-help"),ng(),Ux(748,") ser\xE1 ignorado."),ng()()()(),wl(749,"tr",17)(750,"td",18)(751,"div",26)(752,"span",27),Ux(753," p-size"),Ul(754,"br"),ng()()(),wl(755,"td",22)(756,"code",28),Ux(757,"string"),ng()(),wl(758,"td",24)(759,"p")(760,"code"),Ux(761,"medium"),ng()()(),wl(762,"td",25)(763,"em")(764,"strong"),Ux(765,"(opcional)"),ng()(),wl(766,"p"),Ux(767,"Define o tamanho do componente:"),ng(),wl(768,"ul")(769,"li")(770,"code"),Ux(771,"small"),ng(),Ux(772,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(773,"li")(774,"code"),Ux(775,"medium"),ng(),Ux(776,": altura de 24px."),ng()(),wl(777,"blockquote")(778,"p"),Ux(779,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(780,"code"),Ux(781,"medium"),ng(),Ux(782,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(783,"a",33),Ux(784,"po-theme"),ng(),Ux(785,"."),ng()()()()(),wl(786,"h3",13),Ux(787,"M\xE9todos"),ng(),wl(788,"table",34)(789,"tr",17)(790,"th",35)(791,"div",26)(792,"h4")(793,"span",27),Ux(794," showAdditionalHelp "),ng()()()()(),wl(795,"tr",25)(796,"td",25)(797,"p"),Ux(798,"M\xE9todo que exibe "),wl(799,"code"),Ux(800,"p-helper"),ng(),Ux(801," ou executa a a\xE7\xE3o definida em "),wl(802,"code"),Ux(803,"p-helper{eventOnClick}"),ng(),Ux(804," ou em "),wl(805,"code"),Ux(806,"p-additionalHelp"),ng(),Ux(807,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(808,"code"),Ux(809,"p-keydown"),ng(),Ux(810,"."),ng(),wl(811,"blockquote")(812,"p"),Ux(813,"Exibe ou oculta o conte\xFAdo do componente "),wl(814,"code"),Ux(815,"po-helper"),ng(),Ux(816," quando o componente estiver com foco."),ng()(),wl(817,"pre")(818,"code"),Ux(819,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do component"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ng()(),wl(820,"pre")(821,"code"),Ux(822,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(823,"br"),wl(824,"table",34)(825,"tr",17)(826,"th",35)(827,"div",26)(828,"h4")(829,"span",27),Ux(830," focus "),ng()()()()(),wl(831,"tr",25)(832,"td",25)(833,"p"),Ux(834,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(835,"p"),Ux(836,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(837,"pre")(838,"code"),Ux(839,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),ng()()()()(),Ul(840,"br"),wl(841,"table",34)(842,"tr",17)(843,"th",35)(844,"div",26)(845,"h4")(846,"span",27),Ux(847," showAdditionalHelp "),ng()()()()(),wl(848,"tr",25)(849,"td",25)(850,"p"),Ux(851,"M\xE9todo que exibe "),wl(852,"code"),Ux(853,"p-helper"),ng(),Ux(854," ou executa a a\xE7\xE3o definida em "),wl(855,"code"),Ux(856,"p-helper{eventOnClick}"),ng(),Ux(857," ou em "),wl(858,"code"),Ux(859,"p-additionalHelp"),ng(),Ux(860,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(861,"code"),Ux(862,"p-keydown"),ng(),Ux(863,"."),ng(),wl(864,"blockquote")(865,"p"),Ux(866,"Exibe ou oculta o conte\xFAdo do componente "),wl(867,"code"),Ux(868,"po-helper"),ng(),Ux(869," quando o componente estiver com foco."),ng()(),wl(870,"pre")(871,"code"),Ux(872,`//Exemplo com p-label e p-helper
<po-switch
 #switch
 ...
 p-label="Label do switch"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, switch)"
></po-switch>
`),ng()(),wl(873,"pre")(874,"code",36),Ux(875,`onKeyDown(event: KeyboardEvent, inp: PoSwitchComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(876,"br"),wl(877,"h3"),Ux(878,"Enums"),ng(),wl(879,"h4",4)(880,"code",5),Ux(881,"PoSwitchLabelPosition"),ng()(),wl(882,"div",2)(883,"p"),Ux(884,"Enum para posicionar o label do valor do po-switch."),ng()(),wl(885,"h4",13),Ux(886,"Propriedades"),ng(),wl(887,"table",14)(888,"tr",15)(889,"th",16),Ux(890,"Nome"),ng(),wl(891,"th",16),Ux(892,"Descri\xE7\xE3o"),ng()(),wl(893,"tr",17)(894,"td",18)(895,"div",26)(896,"span",27),Ux(897," Right"),Ul(898,"br"),ng()()(),wl(899,"td",25)(900,"p"),Ux(901,"Posiciona o label do lado esquerdo do switch."),ng()()(),wl(902,"tr",17)(903,"td",18)(904,"div",26)(905,"span",27),Ux(906," Left"),Ul(907,"br"),ng()()(),wl(908,"td",25)(909,"p"),Ux(910,"Posiciona o label do lado direito do switch."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var we=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-switch-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ce,Se,Ee,ve,xe],encapsulation:2})}return o})();var Re=[{path:"",component:we}],Ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[vL.forChild(Re),vL]})}return o})();var kt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[u5,Ce]})}return o})();export{kt as DocPoSwitchModule};