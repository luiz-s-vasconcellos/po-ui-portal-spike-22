import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,bx as ia,N as Ul,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bB as ga,bd as na,bC as Vp,aW as IO,al as lx,am as pw,an as $0,a4 as oN,aX as _x,ap as hw,aq as G0,a5 as aN,bT as ha,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Ce=()=>({value:"1",label:"Option 1"}),ve=()=>({value:"2",label:"Option 2"}),ke=(a,fe)=>[a,fe],se=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&Ul(0,"po-checkbox-group",0),p&2&&YE("p-options",eN(3,ke,Qx(1,Ce),Qx(2,ve)));},dependencies:[ia],encapsulation:2,changeDetection:1})}return a})();var we=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Checkbox Group Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-checkbox-group-basic"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return a})();var ue=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,this.option],this.clearOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=false,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption();}clearOption(){this.option={label:void 0,value:void 0};}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:false,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=lx();wl(0,"po-checkbox-group",2),pw("ngModelChange",function(l){return Qy(s),$x(n.checkboxGroup,l)||(n.checkboxGroup=l),Jy(l)}),ut("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",3),Ul(3,"po-info",4),oN(4,"json"),Ul(5,"po-info",5),ng(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"po-input",6),pw("ngModelChange",function(l){return Qy(s),$x(n.option.value,l)||(n.option.value=l),Jy(l)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(l){return Qy(s),$x(n.option.label,l)||(n.option.label=l),Jy(l)}),ng(),$0(),wl(11,"po-switch",8),pw("ngModelChange",function(l){return Qy(s),$x(n.option.disabled,l)||(n.option.disabled=l),Jy(l)}),ng(),$0(),wl(12,"div",3)(13,"po-button",9),ut("p-click",function(){return n.addOption()}),ng()()(),Ul(14,"po-divider"),wl(15,"form",null,1)(17,"po-input",10),pw("ngModelChange",function(l){return Qy(s),$x(n.label,l)||(n.label=l),Jy(l)}),ng(),$0(),wl(18,"po-input",11),pw("ngModelChange",function(l){return Qy(s),$x(n.help,l)||(n.help=l),Jy(l)}),ng(),$0(),wl(19,"po-input",12),pw("ngModelChange",function(l){return Qy(s),$x(n.helperText,l)||(n.helperText=l),Jy(l)}),ng(),$0(),wl(20,"po-input",13),pw("ngModelChange",function(l){return Qy(s),$x(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Jy(l)}),ng(),$0(),wl(21,"po-checkbox-group",14),pw("ngModelChange",function(l){return Qy(s),$x(n.properties,l)||(n.properties=l),Jy(l)}),ng(),$0(),wl(22,"po-radio-group",15),pw("ngModelChange",function(l){return Qy(s),$x(n.columns,l)||(n.columns=l),Jy(l)}),ng(),$0(),wl(23,"po-radio-group",16),pw("ngModelChange",function(l){return Qy(s),$x(n.size,l)||(n.size=l),Jy(l)}),ng(),$0(),wl(24,"div",3)(25,"po-button",17),ut("p-click",function(){return n.restore()}),ng()()();}if(p&2){let s=_x(8);hw("ngModel",n.checkboxGroup),YE("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),G0(),Pp(3),YE("p-value",aN(4,32,n.checkboxGroup)),Pp(2),YE("p-value",n.event),Pp(4),hw("ngModel",n.option.value),G0(),Pp(),hw("ngModel",n.option.label),G0(),Pp(),hw("ngModel",n.option.disabled),G0(),Pp(2),YE("p-disabled",s.invalid),Pp(4),hw("ngModel",n.label),G0(),Pp(),hw("ngModel",n.help),G0(),Pp(),hw("ngModel",n.helperText),G0(),Pp(),hw("ngModel",n.fieldErrorMessage),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.columns),YE("p-options",n.columnOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,na,Vp,IO],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Checkbox Group Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  helperText: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-checkbox-group-labs"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Oe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return a})();var he=(()=>{class a{poNotification=f(Bp);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!");}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:false,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=lx();wl(0,"div",1),Ux(1,"Password Rules"),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",2),Ul(6,"po-checkbox-group",3),ng(),Ul(7,"po-divider"),wl(8,"div",2),Ul(9,"po-checkbox-group",4),ng(),Ul(10,"po-divider"),wl(11,"div",2)(12,"po-switch",5),pw("ngModelChange",function(l){return Qy(s),$x(n.expiration,l)||(n.expiration=l),Jy(l)}),ng(),$0(),Ul(13,"po-number",6),ng(),wl(14,"div",2)(15,"po-switch",7),pw("ngModelChange",function(l){return Qy(s),$x(n.attempts,l)||(n.attempts=l),Jy(l)}),ng(),$0(),wl(16,"po-number",8),pw("ngModelChange",function(l){return Qy(s),$x(n.maxAttempts,l)||(n.maxAttempts=l),Jy(l)}),ng(),$0(),ng(),wl(17,"div",2)(18,"po-button",9),ut("p-click",function(){return n.confirm()}),ng()()();}p&2&&(Pp(6),YE("p-options",n.systemOptions),Pp(3),YE("p-options",n.auditOptions),Pp(3),hw("ngModel",n.expiration),G0(),Pp(),YE("p-disabled",!n.expiration),Pp(2),hw("ngModel",n.attempts),G0(),Pp(),hw("ngModel",n.maxAttempts),YE("p-disabled",!n.attempts),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,ha,na],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Checkbox Group \u2013 Security policy"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-font-subtitle">Password Rules</div>

<po-divider />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-checkbox-group-password-policy"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:false,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoCheckboxGroupComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O componente "),wl(24,"code"),Ux(25,"po-checkbox-group"),ng(),Ux(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),ng(),wl(27,"blockquote")(28,"p"),Ux(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),wl(30,"a",6)(31,"strong"),Ux(32,"PO Radio Group"),ng()(),Ux(33,"."),ng()(),wl(34,"p"),Ux(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),ng(),wl(36,"pre")(37,"code"),Ux(38,`favorites = ['PO', 'Angular'];
`),ng()(),wl(39,"p"),Ux(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),wl(41,"code"),Ux(42,"null"),ng(),Ux(43,"), ou seja, nem marcado ("),wl(44,"code"),Ux(45,"true"),ng(),Ux(46,") e nem desmarcado ("),wl(47,"code"),Ux(48,"false"),ng(),Ux(49,`),
deve setar a propriedade `),wl(50,"code"),Ux(51,"p-indeterminate"),ng(),Ux(52," como "),wl(53,"code"),Ux(54,"true"),ng(),Ux(55,"."),ng(),wl(56,"p"),Ux(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),ng(),wl(58,"pre")(59,"code"),Ux(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),ng()()(),wl(61,"div",7)(62,"h4",8),Ux(63,"Seletor"),ng(),wl(64,"pre",9),Ux(65,`<po-checkbox-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),ng()(),wl(66,"h4",10),Ux(67,"Propriedades"),ng(),wl(68,"table",11)(69,"tr",12)(70,"th",13),Ux(71,"Nome"),ng(),wl(72,"th",13),Ux(73,"Tipo"),ng(),wl(74,"th",13),Ux(75,"Padr\xE3o"),ng(),wl(76,"th",13),Ux(77,"Descri\xE7\xE3o"),ng()(),wl(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),Ux(82," (p-additional-help)"),Ul(83,"br"),ng()(),wl(84,"div",18),Ux(85,"Deprecated"),ng()(),wl(86,"td",19)(87,"code",20),Ux(88,"EventEmitter"),ng()(),wl(89,"td",21),Ux(90,"-"),ng(),wl(91,"td",22)(92,"em")(93,"strong"),Ux(94,"(opcional)"),ng()(),wl(95,"p"),Ux(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(97,"blockquote")(98,"p"),Ux(99,"Essa propriedade est\xE1 "),wl(100,"strong"),Ux(101,"depreciada"),ng(),Ux(102," e ser\xE1 removida na vers\xE3o "),wl(103,"code"),Ux(104,"23.x.x"),ng(),Ux(105,". Recomendamos utilizar a propriedade "),wl(106,"code"),Ux(107,"p-helper"),ng(),Ux(108," que oferece mais recursos e flexibilidade."),ng()()()(),wl(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),Ux(113," p-additional-help-tooltip"),Ul(114,"br"),ng()(),wl(115,"div",18),Ux(116,"Deprecated"),ng()(),wl(117,"td",19)(118,"code",25),Ux(119,"string"),ng()(),wl(120,"td",21),Ux(121,"-"),ng(),wl(122,"td",22)(123,"em")(124,"strong"),Ux(125,"(opcional)"),ng()(),wl(126,"p"),Ux(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(128,"code"),Ux(129,"po-helper"),ng(),Ux(130,`.
`),wl(131,"strong"),Ux(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(133,"blockquote")(134,"p"),Ux(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(136,"blockquote")(137,"p"),Ux(138,"Essa propriedade est\xE1 "),wl(139,"strong"),Ux(140,"depreciada"),ng(),Ux(141," e ser\xE1 removida na vers\xE3o "),wl(142,"code"),Ux(143,"23.x.x"),ng(),Ux(144,". Recomendamos utilizar a propriedade "),wl(145,"code"),Ux(146,"p-helper"),ng(),Ux(147," que oferece mais recursos e flexibilidade."),ng()()()(),wl(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),Ux(152," p-append-in-body"),Ul(153,"br"),ng()()(),wl(154,"td",19)(155,"code",26),Ux(156,"boolean"),ng()(),wl(157,"td",21)(158,"p")(159,"code"),Ux(160,"false"),ng()()(),wl(161,"td",22)(162,"em")(163,"strong"),Ux(164,"(opcional)"),ng()(),wl(165,"p"),Ux(166,"Define que o popover ("),wl(167,"code"),Ux(168,"p-helper"),ng(),Ux(169," e/ou "),wl(170,"code"),Ux(171,"p-error-limit"),ng(),Ux(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(173,"blockquote")(174,"p"),Ux(175,"Quando utilizado com "),wl(176,"code"),Ux(177,"p-helper"),ng(),Ux(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),Ux(183," p-auto-focus"),Ul(184,"br"),ng()()(),wl(185,"td",19)(186,"code",26),Ux(187,"boolean"),ng()(),wl(188,"td",21)(189,"p")(190,"code"),Ux(191,"false"),ng()()(),wl(192,"td",22)(193,"em")(194,"strong"),Ux(195,"(opcional)"),ng()(),wl(196,"p"),Ux(197,"Aplica foco no elemento ao ser iniciado."),ng(),wl(198,"blockquote")(199,"p"),Ux(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),Ux(205," (p-change)"),Ul(206,"br"),ng()()(),wl(207,"td",19)(208,"code",20),Ux(209,"EventEmitter"),ng()(),wl(210,"td",21),Ux(211,"-"),ng(),wl(212,"td",22)(213,"em")(214,"strong"),Ux(215,"(opcional)"),ng()(),wl(216,"p"),Ux(217,"Evento disparado ao alterar valor do campo"),ng()()(),wl(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),Ux(222," p-columns"),Ul(223,"br"),ng()()(),wl(224,"td",19)(225,"code",27),Ux(226,"number"),ng()(),wl(227,"td",21)(228,"p")(229,"code"),Ux(230,"2"),ng()()(),wl(231,"td",22)(232,"em")(233,"strong"),Ux(234,"(opcional)"),ng()(),wl(235,"p"),Ux(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),wl(237,"em"),Ux(238,"checkbox"),ng(),Ux(239,"."),ng(),wl(240,"ul")(241,"li"),Ux(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),wl(243,"code"),Ux(244,"1"),ng(),Ux(245," e "),wl(246,"code"),Ux(247,"4"),ng(),Ux(248," colunas."),ng(),wl(249,"li"),Ux(250,"Para resolu\xE7\xE3o "),wl(251,"code"),Ux(252,"sm"),ng(),Ux(253," a colunagem invariavelmente passa para "),wl(254,"code"),Ux(255,"1"),ng(),Ux(256," coluna."),ng(),wl(257,"li"),Ux(258,"Quando se trata de resolu\xE7\xE3o "),wl(259,"code"),Ux(260,"md"),ng(),Ux(261," e o valor estabelecido para colunas for superior a "),wl(262,"code"),Ux(263,"2"),ng(),Ux(264,`,
o `),wl(265,"em"),Ux(266,"grid system"),ng(),Ux(267," ser\xE1 composto por "),wl(268,"code"),Ux(269,"2"),ng(),Ux(270," colunas."),ng(),wl(271,"li"),Ux(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),wl(273,"code"),Ux(274,"1"),ng(),Ux(275," coluna para op\xE7\xF5es com textos grandes."),ng()()()(),wl(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),Ux(280," p-compact-label"),Ul(281,"br"),ng()()(),wl(282,"td",19)(283,"code",26),Ux(284,"boolean"),ng()(),wl(285,"td",21)(286,"p")(287,"code"),Ux(288,"false"),ng()()(),wl(289,"td",22)(290,"em")(291,"strong"),Ux(292,"(opcional)"),ng()(),wl(293,"p"),Ux(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(295,"p"),Ux(296,"Quando habilitado ("),wl(297,"code"),Ux(298,"true"),ng(),Ux(299,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(300,"ul")(301,"li")(302,"code"),Ux(303,"po-label"),ng()(),wl(304,"li")(305,"code"),Ux(306,"p-requirement (showRequired)"),ng()(),wl(307,"li")(308,"code"),Ux(309,"po-helper"),ng()()(),wl(310,"p"),Ux(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(312,"p"),Ux(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(314,"ul")(315,"li")(316,"code"),Ux(317,"--field-container-title-justify"),ng()(),wl(318,"li")(319,"code"),Ux(320,"--field-container-title-flex"),ng()()(),wl(321,"p"),Ux(322,"Exemplo:"),ng(),wl(323,"pre")(324,"code"),Ux(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(326,"p"),Ux(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),Ux(332," p-disabled"),Ul(333,"br"),ng()()(),wl(334,"td",19)(335,"code",26),Ux(336,"boolean"),ng()(),wl(337,"td",21)(338,"p")(339,"code"),Ux(340,"false"),ng()()(),wl(341,"td",22)(342,"em")(343,"strong"),Ux(344,"(opcional)"),ng()(),wl(345,"p"),Ux(346,"Desabilita todos os itens do checkbox."),ng()()(),wl(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),Ux(351," p-error-limit"),Ul(352,"br"),ng()()(),wl(353,"td",19)(354,"code",26),Ux(355,"boolean"),ng()(),wl(356,"td",21)(357,"p")(358,"code"),Ux(359,"false"),ng()()(),wl(360,"td",22)(361,"em")(362,"strong"),Ux(363,"(opcional)"),ng()(),wl(364,"p"),Ux(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(366,"blockquote")(367,"p"),Ux(368,"Caso essa propriedade seja definida como "),wl(369,"code"),Ux(370,"true"),ng(),Ux(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),Ux(376," p-field-error-message"),Ul(377,"br"),ng()()(),wl(378,"td",19)(379,"code",25),Ux(380,"string"),ng()(),wl(381,"td",21),Ux(382,"-"),ng(),wl(383,"td",22)(384,"em")(385,"strong"),Ux(386,"(opcional)"),ng()(),wl(387,"p"),Ux(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(389,"blockquote")(390,"p"),Ux(391,"Necess\xE1rio que a propriedade "),wl(392,"code"),Ux(393,"p-required"),ng(),Ux(394," esteja habilitada."),ng()()()(),wl(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),Ux(399," p-help"),Ul(400,"br"),ng()()(),wl(401,"td",19)(402,"code",25),Ux(403,"string"),ng()(),wl(404,"td",21),Ux(405,"-"),ng(),wl(406,"td",22)(407,"em")(408,"strong"),Ux(409,"(opcional)"),ng()(),wl(410,"p"),Ux(411,"Texto de apoio do campo"),ng()()(),wl(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),Ux(416," p-indeterminate"),Ul(417,"br"),ng()()(),wl(418,"td",19)(419,"code",26),Ux(420,"boolean"),ng()(),wl(421,"td",21)(422,"p")(423,"code"),Ux(424,"false"),ng()()(),wl(425,"td",22)(426,"em")(427,"strong"),Ux(428,"(opcional)"),ng()(),wl(429,"p"),Ux(430,"Caso exista a necessidade de usar o valor indeterminado ("),wl(431,"code"),Ux(432,"null"),ng(),Ux(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),wl(434,"code"),Ux(435,"p-indeterminate"),ng(),Ux(436," como "),wl(437,"code"),Ux(438,"true"),ng(),Ux(439,", por padr\xE3o essa propriedade vem desabilitada ("),wl(440,"code"),Ux(441,"false"),ng(),Ux(442,")."),ng(),wl(443,"p"),Ux(444,"Quando essa propriedade \xE9 setada como "),wl(445,"code"),Ux(446,"true"),ng(),Ux(447,", o "),wl(448,"em"),Ux(449,"po-checkbox-group"),ng(),Ux(450,` passa a devolver um objeto completo para o
`),wl(451,"code"),Ux(452,"ngModel"),ng(),Ux(453,", diferente do array que cont\xE9m apenas os valores selecionados."),ng()()(),wl(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),Ux(458," (p-keydown)"),Ul(459,"br"),ng()()(),wl(460,"td",19)(461,"code",20),Ux(462,"EventEmitter"),ng()(),wl(463,"td",21),Ux(464,"-"),ng(),wl(465,"td",22)(466,"em")(467,"strong"),Ux(468,"(opcional)"),ng()(),wl(469,"p"),Ux(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(471,"code"),Ux(472,"KeyboardEvent"),ng(),Ux(473," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),Ux(478," p-label"),Ul(479,"br"),ng()()(),wl(480,"td",19)(481,"code",25),Ux(482,"string"),ng()(),wl(483,"td",21),Ux(484,"-"),ng(),wl(485,"td",22)(486,"em")(487,"strong"),Ux(488,"(opcional)"),ng()(),wl(489,"p"),Ux(490,"Label do campo"),ng()()(),wl(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),Ux(495," p-label-text-wrap"),Ul(496,"br"),ng()()(),wl(497,"td",19)(498,"code",26),Ux(499,"boolean"),ng()(),wl(500,"td",21)(501,"p")(502,"code"),Ux(503,"false"),ng()()(),wl(504,"td",22)(505,"em")(506,"strong"),Ux(507,"(opcional)"),ng()(),wl(508,"p"),Ux(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(510,"code"),Ux(511,"p-label"),ng(),Ux(512,". Quando "),wl(513,"code"),Ux(514,"p-label-text-wrap"),ng(),Ux(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),Ux(520," name"),Ul(521,"br"),ng()()(),wl(522,"td",19)(523,"code",25),Ux(524,"string"),ng()(),wl(525,"td",21),Ux(526,"-"),ng(),wl(527,"td",22)(528,"p"),Ux(529,"Nome dos checkboxes"),ng()()(),wl(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),Ux(534," (ngModelChange)"),Ul(535,"br"),ng()()(),wl(536,"td",19)(537,"code",20),Ux(538,"EventEmitter"),ng()(),wl(539,"td",21),Ux(540,"-"),ng(),wl(541,"td",22)(542,"em")(543,"strong"),Ux(544,"(opcional)"),ng()(),wl(545,"p"),Ux(546,"Fun\xE7\xE3o para atualizar o "),wl(547,"code"),Ux(548,"ngModel"),ng(),Ux(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),ng(),wl(550,"p"),Ux(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),wl(552,"code"),Ux(553,"strictTemplates"),ng(),Ux(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ng(),wl(555,"pre")(556,"code"),Ux(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),ng()()()(),wl(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),Ux(562," p-optional"),Ul(563,"br"),ng()()(),wl(564,"td",19)(565,"code",26),Ux(566,"boolean"),ng()(),wl(567,"td",21)(568,"p")(569,"code"),Ux(570,"false"),ng()()(),wl(571,"td",22)(572,"em")(573,"strong"),Ux(574,"(opcional)"),ng()(),wl(575,"p"),Ux(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(577,"blockquote")(578,"p"),Ux(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(580,"ul")(581,"li"),Ux(582,"O campo conter "),wl(583,"code"),Ux(584,"p-required"),ng(),Ux(585,";"),ng(),wl(586,"li"),Ux(587,"N\xE3o possuir "),wl(588,"code"),Ux(589,"p-help"),ng(),Ux(590," e/ou "),wl(591,"code"),Ux(592,"p-label"),ng(),Ux(593,"."),ng()()()(),wl(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),Ux(598," p-options"),Ul(599,"br"),ng()()(),wl(600,"td",19)(601,"code",28),Ux(602,"PoCheckboxGroupOption[]"),ng()(),wl(603,"td",21),Ux(604,"-"),ng(),wl(605,"td",22)(606,"em")(607,"strong"),Ux(608,"(opcional)"),ng()(),wl(609,"p"),Ux(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),ng()()(),wl(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),Ux(615," p-helper"),Ul(616,"br"),ng()()(),wl(617,"td",19)(618,"code",29),Ux(619,"PoHelperOptions "),ng(),wl(620,"code",25),Ux(621," string"),ng()(),wl(622,"td",21),Ux(623,"-"),ng(),wl(624,"td",22)(625,"em")(626,"strong"),Ux(627,"(opcional)"),ng()(),wl(628,"p"),Ux(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(630,"code"),Ux(631,"p-label"),ng(),Ux(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(633,"code"),Ux(634,"p-label"),ng(),Ux(635,"."),ng(),wl(636,"blockquote")(637,"p"),Ux(638,"Para mais informa\xE7\xF5es acesse: "),wl(639,"a",30),Ux(640,"https://po-ui.io/documentation/po-helper"),ng(),Ux(641,"."),ng()(),wl(642,"blockquote")(643,"p"),Ux(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(645,"code"),Ux(646,"p-additional-help-tooltip"),ng(),Ux(647," e "),wl(648,"code"),Ux(649,"p-additional-help"),ng(),Ux(650,") ser\xE1 ignorado."),ng()()()(),wl(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),Ux(655," p-required"),Ul(656,"br"),ng()()(),wl(657,"td",19)(658,"code",26),Ux(659,"boolean"),ng()(),wl(660,"td",21)(661,"p")(662,"code"),Ux(663,"false"),ng()()(),wl(664,"td",22)(665,"em")(666,"strong"),Ux(667,"(opcional)"),ng()(),wl(668,"p"),Ux(669,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),Ux(674," p-show-required"),Ul(675,"br"),ng()()(),wl(676,"td",19)(677,"code",26),Ux(678,"boolean"),ng()(),wl(679,"td",21),Ux(680,"-"),ng(),wl(681,"td",22)(682,"p"),Ux(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(684,"blockquote")(685,"p"),Ux(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(687,"ul")(688,"li"),Ux(689,"N\xE3o possuir "),wl(690,"code"),Ux(691,"p-help"),ng(),Ux(692," e/ou "),wl(693,"code"),Ux(694,"p-label"),ng(),Ux(695,"."),ng()()()(),wl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),Ux(700," p-size"),Ul(701,"br"),ng()()(),wl(702,"td",19)(703,"code",25),Ux(704,"string"),ng()(),wl(705,"td",21)(706,"p")(707,"code"),Ux(708,"medium"),ng()()(),wl(709,"td",22)(710,"em")(711,"strong"),Ux(712,"(opcional)"),ng()(),wl(713,"p"),Ux(714,"Define o tamanho dos checkboxes do componente:"),ng(),wl(715,"ul")(716,"li")(717,"code"),Ux(718,"small"),ng(),Ux(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(720,"li")(721,"code"),Ux(722,"medium"),ng(),Ux(723,": 24x24."),ng()(),wl(724,"blockquote")(725,"p"),Ux(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(727,"code"),Ux(728,"medium"),ng(),Ux(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(730,"a",31),Ux(731,"po-theme"),ng(),Ux(732,"."),ng()()()()(),wl(733,"h3",10),Ux(734,"M\xE9todos"),ng(),wl(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),Ux(741," focus "),ng()()()()(),wl(742,"tr",22)(743,"td",22)(744,"p"),Ux(745,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(746,"p"),Ux(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(748,"pre")(749,"code"),Ux(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),ng()()()()(),Ul(751,"br"),wl(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),Ux(758," showAdditionalHelp "),ng()()()()(),wl(759,"tr",22)(760,"td",22)(761,"p"),Ux(762,"M\xE9todo que exibe "),wl(763,"code"),Ux(764,"p-helper"),ng(),Ux(765," ou executa a a\xE7\xE3o definida em "),wl(766,"code"),Ux(767,"p-helper{eventOnClick}"),ng(),Ux(768," ou em "),wl(769,"code"),Ux(770,"p-additionalHelp"),ng(),Ux(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(772,"code"),Ux(773,"p-keydown"),ng(),Ux(774,"."),ng(),wl(775,"blockquote")(776,"p"),Ux(777,"Exibe ou oculta o conte\xFAdo do componente "),wl(778,"code"),Ux(779,"po-helper"),ng(),Ux(780," quando o componente estiver com foco."),ng()(),wl(781,"pre")(782,"code"),Ux(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),ng()(),wl(784,"pre")(785,"code"),Ux(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(787,"br"),wl(788,"h3"),Ux(789,"Interfaces"),ng(),wl(790,"h4",34)(791,"code",5),Ux(792,"PoCheckboxGroupOption"),ng()(),wl(793,"div",2)(794,"p"),Ux(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),ng()(),wl(796,"h4",10),Ux(797,"Propriedades"),ng(),wl(798,"table",11)(799,"tr",12)(800,"th",13),Ux(801,"Nome"),ng(),wl(802,"th",13),Ux(803,"Tipo"),ng(),wl(804,"th",13),Ux(805,"Descri\xE7\xE3o"),ng()(),wl(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),Ux(810," disabled"),Ul(811,"br"),ng()()(),wl(812,"td",19)(813,"code",26),Ux(814,"boolean"),ng()(),wl(815,"td",22)(816,"em")(817,"strong"),Ux(818,"(opcional)"),ng()(),wl(819,"p"),Ux(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),ng(),wl(821,"p"),Ux(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),ng()()(),wl(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),Ux(827," label"),Ul(828,"br"),ng()()(),wl(829,"td",19)(830,"code",25),Ux(831,"string"),ng()(),wl(832,"td",22)(833,"p"),Ux(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),ng()()(),wl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),Ux(839," value"),Ul(840,"br"),ng()()(),wl(841,"td",19)(842,"code",25),Ux(843,"string"),ng()(),wl(844,"td",22)(845,"p"),Ux(846,"Valor retornado no model."),ng(),wl(847,"p"),Ux(848,"\xC9 poss\xEDvel usar os valores "),wl(849,"code"),Ux(850,"true"),ng(),Ux(851," e "),wl(852,"code"),Ux(853,"false"),ng(),Ux(854,", caso a propriedade "),wl(855,"code"),Ux(856,"p-indeterminate"),ng(),Ux(857," esteja setada como "),wl(858,"code"),Ux(859,"true"),ng(),Ux(860,`
passa a aceitar `),wl(861,"code"),Ux(862,"null"),ng(),Ux(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),wl(864,"code"),Ux(865,"false"),ng(),Ux(866,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var ge=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-checkbox-group-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),ng()()()),p&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ce,be,xe,Ee],encapsulation:2})}return a})();var Be=[{path:"",component:ge}],Se=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[vL.forChild(Be),vL]})}return a})();var Et=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[u5,Se]})}return a})();export{Et as DocPoCheckboxGroupModule};