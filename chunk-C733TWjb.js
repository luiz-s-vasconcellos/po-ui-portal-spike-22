import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,c4 as x3,M as Wl,T as tw,bM as fN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,bH as E3,c9 as Qhe,bc as LO,aB as Ex,aM as Ew,aN as JA,a4 as vN,bd as xx,aO as Dw,aP as t0,a5 as _N,cp as Uhe,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var Se=()=>({value:"1",label:"Option 1"}),fe=()=>({value:"2",label:"Option 2"}),Ce=(a,ge)=>[a,ge],de=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&Wl(0,"po-checkbox-group",0),p&2&&tw("p-options",fN(3,Ce,uN(1,Se),uN(2,fe)));},dependencies:[x3],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Checkbox Group Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-group-basic"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ke,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,this.option],this.clearOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=false,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption();}clearOption(){this.option={label:void 0,value:void 0};}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:false,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=Ex();Sl(0,"po-checkbox-group",2),Ew("ngModelChange",function(l){return Xy(s),tN(n.checkboxGroup,l)||(n.checkboxGroup=l),Qy(l)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4),vN(4,"json"),Wl(5,"po-info",5),sg(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",6),Ew("ngModelChange",function(l){return Xy(s),tN(n.option.value,l)||(n.option.value=l),Qy(l)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(l){return Xy(s),tN(n.option.label,l)||(n.option.label=l),Qy(l)}),sg(),JA(),Sl(11,"po-switch",8),Ew("ngModelChange",function(l){return Xy(s),tN(n.option.disabled,l)||(n.option.disabled=l),Qy(l)}),sg(),JA(),Sl(12,"div",3)(13,"po-button",9),ht("p-click",function(){return n.addOption()}),sg()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"po-input",10),Ew("ngModelChange",function(l){return Xy(s),tN(n.label,l)||(n.label=l),Qy(l)}),sg(),JA(),Sl(18,"po-input",11),Ew("ngModelChange",function(l){return Xy(s),tN(n.help,l)||(n.help=l),Qy(l)}),sg(),JA(),Sl(19,"po-input",12),Ew("ngModelChange",function(l){return Xy(s),tN(n.helperText,l)||(n.helperText=l),Qy(l)}),sg(),JA(),Sl(20,"po-input",13),Ew("ngModelChange",function(l){return Xy(s),tN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Qy(l)}),sg(),JA(),Sl(21,"po-checkbox-group",14),Ew("ngModelChange",function(l){return Xy(s),tN(n.properties,l)||(n.properties=l),Qy(l)}),sg(),JA(),Sl(22,"po-radio-group",15),Ew("ngModelChange",function(l){return Xy(s),tN(n.columns,l)||(n.columns=l),Qy(l)}),sg(),JA(),Sl(23,"po-radio-group",16),Ew("ngModelChange",function(l){return Xy(s),tN(n.size,l)||(n.size=l),Qy(l)}),sg(),JA(),Sl(24,"div",3)(25,"po-button",17),ht("p-click",function(){return n.restore()}),sg()()();}if(p&2){let s=xx(8);Dw("ngModel",n.checkboxGroup),tw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),t0(),Vp(3),tw("p-value",_N(4,32,n.checkboxGroup)),Vp(2),tw("p-value",n.event),Vp(4),Dw("ngModel",n.option.value),t0(),Vp(),Dw("ngModel",n.option.label),t0(),Vp(),Dw("ngModel",n.option.disabled),t0(),Vp(2),tw("p-disabled",s.invalid),Vp(4),Dw("ngModel",n.label),t0(),Vp(),Dw("ngModel",n.help),t0(),Vp(),Dw("ngModel",n.helperText),t0(),Vp(),Dw("ngModel",n.fieldErrorMessage),t0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0(),Vp(),Dw("ngModel",n.columns),tw("p-options",n.columnOptions),t0(),Vp(),Dw("ngModel",n.size),tw("p-options",n.sizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,E3,Qhe,LO],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Checkbox Group Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-checkbox-group
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-group-labs"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return a})();var ue=(()=>{class a{poNotification=f(Yp);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!");}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:false,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=Ex();Sl(0,"div",1),Jx(1,"Password Rules"),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2),Wl(6,"po-checkbox-group",3),sg(),Wl(7,"po-divider"),Sl(8,"div",2),Wl(9,"po-checkbox-group",4),sg(),Wl(10,"po-divider"),Sl(11,"div",2)(12,"po-switch",5),Ew("ngModelChange",function(l){return Xy(s),tN(n.expiration,l)||(n.expiration=l),Qy(l)}),sg(),JA(),Wl(13,"po-number",6),sg(),Sl(14,"div",2)(15,"po-switch",7),Ew("ngModelChange",function(l){return Xy(s),tN(n.attempts,l)||(n.attempts=l),Qy(l)}),sg(),JA(),Sl(16,"po-number",8),Ew("ngModelChange",function(l){return Xy(s),tN(n.maxAttempts,l)||(n.maxAttempts=l),Qy(l)}),sg(),JA(),sg(),Sl(17,"div",2)(18,"po-button",9),ht("p-click",function(){return n.confirm()}),sg()()();}p&2&&(Vp(6),tw("p-options",n.systemOptions),Vp(3),tw("p-options",n.auditOptions),Vp(3),Dw("ngModel",n.expiration),t0(),Vp(),tw("p-disabled",!n.expiration),Vp(2),Dw("ngModel",n.attempts),t0(),Vp(),Dw("ngModel",n.maxAttempts),tw("p-disabled",!n.attempts),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,Uhe,E3],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Checkbox Group \u2013 Security policy"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-checkbox-group-password-policy"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:false,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoCheckboxGroupComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O componente "),Sl(24,"code"),Jx(25,"po-checkbox-group"),sg(),Jx(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),sg(),Sl(27,"blockquote")(28,"p"),Jx(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),Sl(30,"a",6)(31,"strong"),Jx(32,"PO Radio Group"),sg()(),Jx(33,"."),sg()(),Sl(34,"p"),Jx(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),sg(),Sl(36,"pre")(37,"code"),Jx(38,`favorites = ['PO', 'Angular'];
`),sg()(),Sl(39,"p"),Jx(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Sl(41,"code"),Jx(42,"null"),sg(),Jx(43,"), ou seja, nem marcado ("),Sl(44,"code"),Jx(45,"true"),sg(),Jx(46,") e nem desmarcado ("),Sl(47,"code"),Jx(48,"false"),sg(),Jx(49,`),
deve setar a propriedade `),Sl(50,"code"),Jx(51,"p-indeterminate"),sg(),Jx(52," como "),Sl(53,"code"),Jx(54,"true"),sg(),Jx(55,"."),sg(),Sl(56,"p"),Jx(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),sg(),Sl(58,"pre")(59,"code"),Jx(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),sg()()(),Sl(61,"div",7)(62,"h4",8),Jx(63,"Seletor"),sg(),Sl(64,"pre",9),Jx(65,`<po-checkbox-group
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
`),sg()(),Sl(66,"h4",10),Jx(67,"Propriedades"),sg(),Sl(68,"table",11)(69,"tr",12)(70,"th",13),Jx(71,"Nome"),sg(),Sl(72,"th",13),Jx(73,"Tipo"),sg(),Sl(74,"th",13),Jx(75,"Padr\xE3o"),sg(),Sl(76,"th",13),Jx(77,"Descri\xE7\xE3o"),sg()(),Sl(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),Jx(82," (p-additional-help)"),Wl(83,"br"),sg()(),Sl(84,"div",18),Jx(85,"Deprecated"),sg()(),Sl(86,"td",19)(87,"code",20),Jx(88,"EventEmitter"),sg()(),Sl(89,"td",21),Jx(90,"-"),sg(),Sl(91,"td",22)(92,"em")(93,"strong"),Jx(94,"(opcional)"),sg()(),Sl(95,"p"),Jx(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(97,"blockquote")(98,"p"),Jx(99,"Essa propriedade est\xE1 "),Sl(100,"strong"),Jx(101,"depreciada"),sg(),Jx(102," e ser\xE1 removida na vers\xE3o "),Sl(103,"code"),Jx(104,"23.x.x"),sg(),Jx(105,". Recomendamos utilizar a propriedade "),Sl(106,"code"),Jx(107,"p-helper"),sg(),Jx(108," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),Jx(113," p-additional-help-tooltip"),Wl(114,"br"),sg()(),Sl(115,"div",18),Jx(116,"Deprecated"),sg()(),Sl(117,"td",19)(118,"code",25),Jx(119,"string"),sg()(),Sl(120,"td",21),Jx(121,"-"),sg(),Sl(122,"td",22)(123,"em")(124,"strong"),Jx(125,"(opcional)"),sg()(),Sl(126,"p"),Jx(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(128,"code"),Jx(129,"po-helper"),sg(),Jx(130,`.
`),Sl(131,"strong"),Jx(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(133,"blockquote")(134,"p"),Jx(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(136,"blockquote")(137,"p"),Jx(138,"Essa propriedade est\xE1 "),Sl(139,"strong"),Jx(140,"depreciada"),sg(),Jx(141," e ser\xE1 removida na vers\xE3o "),Sl(142,"code"),Jx(143,"23.x.x"),sg(),Jx(144,". Recomendamos utilizar a propriedade "),Sl(145,"code"),Jx(146,"p-helper"),sg(),Jx(147," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),Jx(152," p-append-in-body"),Wl(153,"br"),sg()()(),Sl(154,"td",19)(155,"code",26),Jx(156,"boolean"),sg()(),Sl(157,"td",21)(158,"p")(159,"code"),Jx(160,"false"),sg()()(),Sl(161,"td",22)(162,"em")(163,"strong"),Jx(164,"(opcional)"),sg()(),Sl(165,"p"),Jx(166,"Define que o popover ("),Sl(167,"code"),Jx(168,"p-helper"),sg(),Jx(169," e/ou "),Sl(170,"code"),Jx(171,"p-error-limit"),sg(),Jx(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(173,"blockquote")(174,"p"),Jx(175,"Quando utilizado com "),Sl(176,"code"),Jx(177,"p-helper"),sg(),Jx(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),Jx(183," p-auto-focus"),Wl(184,"br"),sg()()(),Sl(185,"td",19)(186,"code",26),Jx(187,"boolean"),sg()(),Sl(188,"td",21)(189,"p")(190,"code"),Jx(191,"false"),sg()()(),Sl(192,"td",22)(193,"em")(194,"strong"),Jx(195,"(opcional)"),sg()(),Sl(196,"p"),Jx(197,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(198,"blockquote")(199,"p"),Jx(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),Jx(205," (p-change)"),Wl(206,"br"),sg()()(),Sl(207,"td",19)(208,"code",20),Jx(209,"EventEmitter"),sg()(),Sl(210,"td",21),Jx(211,"-"),sg(),Sl(212,"td",22)(213,"em")(214,"strong"),Jx(215,"(opcional)"),sg()(),Sl(216,"p"),Jx(217,"Evento disparado ao alterar valor do campo"),sg()()(),Sl(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),Jx(222," p-columns"),Wl(223,"br"),sg()()(),Sl(224,"td",19)(225,"code",27),Jx(226,"number"),sg()(),Sl(227,"td",21)(228,"p")(229,"code"),Jx(230,"2"),sg()()(),Sl(231,"td",22)(232,"em")(233,"strong"),Jx(234,"(opcional)"),sg()(),Sl(235,"p"),Jx(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),Sl(237,"em"),Jx(238,"checkbox"),sg(),Jx(239,"."),sg(),Sl(240,"ul")(241,"li"),Jx(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Sl(243,"code"),Jx(244,"1"),sg(),Jx(245," e "),Sl(246,"code"),Jx(247,"4"),sg(),Jx(248," colunas."),sg(),Sl(249,"li"),Jx(250,"Para resolu\xE7\xE3o "),Sl(251,"code"),Jx(252,"sm"),sg(),Jx(253," a colunagem invariavelmente passa para "),Sl(254,"code"),Jx(255,"1"),sg(),Jx(256," coluna."),sg(),Sl(257,"li"),Jx(258,"Quando se trata de resolu\xE7\xE3o "),Sl(259,"code"),Jx(260,"md"),sg(),Jx(261," e o valor estabelecido para colunas for superior a "),Sl(262,"code"),Jx(263,"2"),sg(),Jx(264,`,
o `),Sl(265,"em"),Jx(266,"grid system"),sg(),Jx(267," ser\xE1 composto por "),Sl(268,"code"),Jx(269,"2"),sg(),Jx(270," colunas."),sg(),Sl(271,"li"),Jx(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),Sl(273,"code"),Jx(274,"1"),sg(),Jx(275," coluna para op\xE7\xF5es com textos grandes."),sg()()()(),Sl(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),Jx(280," p-compact-label"),Wl(281,"br"),sg()()(),Sl(282,"td",19)(283,"code",26),Jx(284,"boolean"),sg()(),Sl(285,"td",21)(286,"p")(287,"code"),Jx(288,"false"),sg()()(),Sl(289,"td",22)(290,"em")(291,"strong"),Jx(292,"(opcional)"),sg()(),Sl(293,"p"),Jx(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(295,"p"),Jx(296,"Quando habilitado ("),Sl(297,"code"),Jx(298,"true"),sg(),Jx(299,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(300,"ul")(301,"li")(302,"code"),Jx(303,"po-label"),sg()(),Sl(304,"li")(305,"code"),Jx(306,"p-requirement (showRequired)"),sg()(),Sl(307,"li")(308,"code"),Jx(309,"po-helper"),sg()()(),Sl(310,"p"),Jx(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(312,"p"),Jx(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(314,"ul")(315,"li")(316,"code"),Jx(317,"--field-container-title-justify"),sg()(),Sl(318,"li")(319,"code"),Jx(320,"--field-container-title-flex"),sg()()(),Sl(321,"p"),Jx(322,"Exemplo:"),sg(),Sl(323,"pre")(324,"code"),Jx(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(326,"p"),Jx(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),Jx(332," p-disabled"),Wl(333,"br"),sg()()(),Sl(334,"td",19)(335,"code",26),Jx(336,"boolean"),sg()(),Sl(337,"td",21)(338,"p")(339,"code"),Jx(340,"false"),sg()()(),Sl(341,"td",22)(342,"em")(343,"strong"),Jx(344,"(opcional)"),sg()(),Sl(345,"p"),Jx(346,"Desabilita todos os itens do checkbox."),sg()()(),Sl(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),Jx(351," p-error-limit"),Wl(352,"br"),sg()()(),Sl(353,"td",19)(354,"code",26),Jx(355,"boolean"),sg()(),Sl(356,"td",21)(357,"p")(358,"code"),Jx(359,"false"),sg()()(),Sl(360,"td",22)(361,"em")(362,"strong"),Jx(363,"(opcional)"),sg()(),Sl(364,"p"),Jx(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(366,"blockquote")(367,"p"),Jx(368,"Caso essa propriedade seja definida como "),Sl(369,"code"),Jx(370,"true"),sg(),Jx(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),Jx(376," p-field-error-message"),Wl(377,"br"),sg()()(),Sl(378,"td",19)(379,"code",25),Jx(380,"string"),sg()(),Sl(381,"td",21),Jx(382,"-"),sg(),Sl(383,"td",22)(384,"em")(385,"strong"),Jx(386,"(opcional)"),sg()(),Sl(387,"p"),Jx(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Sl(389,"blockquote")(390,"p"),Jx(391,"Necess\xE1rio que a propriedade "),Sl(392,"code"),Jx(393,"p-required"),sg(),Jx(394," esteja habilitada."),sg()()()(),Sl(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),Jx(399," p-help"),Wl(400,"br"),sg()()(),Sl(401,"td",19)(402,"code",25),Jx(403,"string"),sg()(),Sl(404,"td",21),Jx(405,"-"),sg(),Sl(406,"td",22)(407,"em")(408,"strong"),Jx(409,"(opcional)"),sg()(),Sl(410,"p"),Jx(411,"Texto de apoio do campo"),sg()()(),Sl(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),Jx(416," p-indeterminate"),Wl(417,"br"),sg()()(),Sl(418,"td",19)(419,"code",26),Jx(420,"boolean"),sg()(),Sl(421,"td",21)(422,"p")(423,"code"),Jx(424,"false"),sg()()(),Sl(425,"td",22)(426,"em")(427,"strong"),Jx(428,"(opcional)"),sg()(),Sl(429,"p"),Jx(430,"Caso exista a necessidade de usar o valor indeterminado ("),Sl(431,"code"),Jx(432,"null"),sg(),Jx(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Sl(434,"code"),Jx(435,"p-indeterminate"),sg(),Jx(436," como "),Sl(437,"code"),Jx(438,"true"),sg(),Jx(439,", por padr\xE3o essa propriedade vem desabilitada ("),Sl(440,"code"),Jx(441,"false"),sg(),Jx(442,")."),sg(),Sl(443,"p"),Jx(444,"Quando essa propriedade \xE9 setada como "),Sl(445,"code"),Jx(446,"true"),sg(),Jx(447,", o "),Sl(448,"em"),Jx(449,"po-checkbox-group"),sg(),Jx(450,` passa a devolver um objeto completo para o
`),Sl(451,"code"),Jx(452,"ngModel"),sg(),Jx(453,", diferente do array que cont\xE9m apenas os valores selecionados."),sg()()(),Sl(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),Jx(458," (p-keydown)"),Wl(459,"br"),sg()()(),Sl(460,"td",19)(461,"code",20),Jx(462,"EventEmitter"),sg()(),Sl(463,"td",21),Jx(464,"-"),sg(),Sl(465,"td",22)(466,"em")(467,"strong"),Jx(468,"(opcional)"),sg()(),Sl(469,"p"),Jx(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(471,"code"),Jx(472,"KeyboardEvent"),sg(),Jx(473," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),Jx(478," p-label"),Wl(479,"br"),sg()()(),Sl(480,"td",19)(481,"code",25),Jx(482,"string"),sg()(),Sl(483,"td",21),Jx(484,"-"),sg(),Sl(485,"td",22)(486,"em")(487,"strong"),Jx(488,"(opcional)"),sg()(),Sl(489,"p"),Jx(490,"Label do campo"),sg()()(),Sl(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),Jx(495," p-label-text-wrap"),Wl(496,"br"),sg()()(),Sl(497,"td",19)(498,"code",26),Jx(499,"boolean"),sg()(),Sl(500,"td",21)(501,"p")(502,"code"),Jx(503,"false"),sg()()(),Sl(504,"td",22)(505,"em")(506,"strong"),Jx(507,"(opcional)"),sg()(),Sl(508,"p"),Jx(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(510,"code"),Jx(511,"p-label"),sg(),Jx(512,". Quando "),Sl(513,"code"),Jx(514,"p-label-text-wrap"),sg(),Jx(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),Jx(520," name"),Wl(521,"br"),sg()()(),Sl(522,"td",19)(523,"code",25),Jx(524,"string"),sg()(),Sl(525,"td",21),Jx(526,"-"),sg(),Sl(527,"td",22)(528,"p"),Jx(529,"Nome dos checkboxes"),sg()()(),Sl(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),Jx(534," (ngModelChange)"),Wl(535,"br"),sg()()(),Sl(536,"td",19)(537,"code",20),Jx(538,"EventEmitter"),sg()(),Sl(539,"td",21),Jx(540,"-"),sg(),Sl(541,"td",22)(542,"em")(543,"strong"),Jx(544,"(opcional)"),sg()(),Sl(545,"p"),Jx(546,"Fun\xE7\xE3o para atualizar o "),Sl(547,"code"),Jx(548,"ngModel"),sg(),Jx(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),sg(),Sl(550,"p"),Jx(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Sl(552,"code"),Jx(553,"strictTemplates"),sg(),Jx(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Sl(555,"pre")(556,"code"),Jx(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),sg()()()(),Sl(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),Jx(562," p-optional"),Wl(563,"br"),sg()()(),Sl(564,"td",19)(565,"code",26),Jx(566,"boolean"),sg()(),Sl(567,"td",21)(568,"p")(569,"code"),Jx(570,"false"),sg()()(),Sl(571,"td",22)(572,"em")(573,"strong"),Jx(574,"(opcional)"),sg()(),Sl(575,"p"),Jx(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(577,"blockquote")(578,"p"),Jx(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(580,"ul")(581,"li"),Jx(582,"O campo conter "),Sl(583,"code"),Jx(584,"p-required"),sg(),Jx(585,";"),sg(),Sl(586,"li"),Jx(587,"N\xE3o possuir "),Sl(588,"code"),Jx(589,"p-help"),sg(),Jx(590," e/ou "),Sl(591,"code"),Jx(592,"p-label"),sg(),Jx(593,"."),sg()()()(),Sl(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),Jx(598," p-options"),Wl(599,"br"),sg()()(),Sl(600,"td",19)(601,"code",28),Jx(602,"PoCheckboxGroupOption[]"),sg()(),Sl(603,"td",21),Jx(604,"-"),sg(),Sl(605,"td",22)(606,"em")(607,"strong"),Jx(608,"(opcional)"),sg()(),Sl(609,"p"),Jx(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),sg()()(),Sl(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),Jx(615," p-helper"),Wl(616,"br"),sg()()(),Sl(617,"td",19)(618,"code",29),Jx(619,"PoHelperOptions "),sg(),Sl(620,"code",25),Jx(621," string"),sg()(),Sl(622,"td",21),Jx(623,"-"),sg(),Sl(624,"td",22)(625,"em")(626,"strong"),Jx(627,"(opcional)"),sg()(),Sl(628,"p"),Jx(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(630,"code"),Jx(631,"p-label"),sg(),Jx(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(633,"code"),Jx(634,"p-label"),sg(),Jx(635,"."),sg(),Sl(636,"blockquote")(637,"p"),Jx(638,"Para mais informa\xE7\xF5es acesse: "),Sl(639,"a",30),Jx(640,"https://po-ui.io/documentation/po-helper"),sg(),Jx(641,"."),sg()(),Sl(642,"blockquote")(643,"p"),Jx(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(645,"code"),Jx(646,"p-additional-help-tooltip"),sg(),Jx(647," e "),Sl(648,"code"),Jx(649,"p-additional-help"),sg(),Jx(650,") ser\xE1 ignorado."),sg()()()(),Sl(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),Jx(655," p-required"),Wl(656,"br"),sg()()(),Sl(657,"td",19)(658,"code",26),Jx(659,"boolean"),sg()(),Sl(660,"td",21)(661,"p")(662,"code"),Jx(663,"false"),sg()()(),Sl(664,"td",22)(665,"em")(666,"strong"),Jx(667,"(opcional)"),sg()(),Sl(668,"p"),Jx(669,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Sl(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),Jx(674," p-show-required"),Wl(675,"br"),sg()()(),Sl(676,"td",19)(677,"code",26),Jx(678,"boolean"),sg()(),Sl(679,"td",21),Jx(680,"-"),sg(),Sl(681,"td",22)(682,"p"),Jx(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(684,"blockquote")(685,"p"),Jx(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(687,"ul")(688,"li"),Jx(689,"N\xE3o possuir "),Sl(690,"code"),Jx(691,"p-help"),sg(),Jx(692," e/ou "),Sl(693,"code"),Jx(694,"p-label"),sg(),Jx(695,"."),sg()()()(),Sl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),Jx(700," p-size"),Wl(701,"br"),sg()()(),Sl(702,"td",19)(703,"code",25),Jx(704,"string"),sg()(),Sl(705,"td",21)(706,"p")(707,"code"),Jx(708,"medium"),sg()()(),Sl(709,"td",22)(710,"em")(711,"strong"),Jx(712,"(opcional)"),sg()(),Sl(713,"p"),Jx(714,"Define o tamanho dos checkboxes do componente:"),sg(),Sl(715,"ul")(716,"li")(717,"code"),Jx(718,"small"),sg(),Jx(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(720,"li")(721,"code"),Jx(722,"medium"),sg(),Jx(723,": 24x24."),sg()(),Sl(724,"blockquote")(725,"p"),Jx(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(727,"code"),Jx(728,"medium"),sg(),Jx(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(730,"a",31),Jx(731,"po-theme"),sg(),Jx(732,"."),sg()()()()(),Sl(733,"h3",10),Jx(734,"M\xE9todos"),sg(),Sl(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),Jx(741," focus "),sg()()()()(),Sl(742,"tr",22)(743,"td",22)(744,"p"),Jx(745,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(746,"p"),Jx(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(748,"pre")(749,"code"),Jx(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),sg()()()()(),Wl(751,"br"),Sl(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),Jx(758," showAdditionalHelp "),sg()()()()(),Sl(759,"tr",22)(760,"td",22)(761,"p"),Jx(762,"M\xE9todo que exibe "),Sl(763,"code"),Jx(764,"p-helper"),sg(),Jx(765," ou executa a a\xE7\xE3o definida em "),Sl(766,"code"),Jx(767,"p-helper{eventOnClick}"),sg(),Jx(768," ou em "),Sl(769,"code"),Jx(770,"p-additionalHelp"),sg(),Jx(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(772,"code"),Jx(773,"p-keydown"),sg(),Jx(774,"."),sg(),Sl(775,"blockquote")(776,"p"),Jx(777,"Exibe ou oculta o conte\xFAdo do componente "),Sl(778,"code"),Jx(779,"po-helper"),sg(),Jx(780," quando o componente estiver com foco."),sg()(),Sl(781,"pre")(782,"code"),Jx(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),sg()(),Sl(784,"pre")(785,"code"),Jx(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(787,"br"),Sl(788,"h3"),Jx(789,"Interfaces"),sg(),Sl(790,"h4",34)(791,"code",5),Jx(792,"PoCheckboxGroupOption"),sg()(),Sl(793,"div",2)(794,"p"),Jx(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),sg()(),Sl(796,"h4",10),Jx(797,"Propriedades"),sg(),Sl(798,"table",11)(799,"tr",12)(800,"th",13),Jx(801,"Nome"),sg(),Sl(802,"th",13),Jx(803,"Tipo"),sg(),Sl(804,"th",13),Jx(805,"Descri\xE7\xE3o"),sg()(),Sl(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),Jx(810," disabled"),Wl(811,"br"),sg()()(),Sl(812,"td",19)(813,"code",26),Jx(814,"boolean"),sg()(),Sl(815,"td",22)(816,"em")(817,"strong"),Jx(818,"(opcional)"),sg()(),Sl(819,"p"),Jx(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),sg(),Sl(821,"p"),Jx(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),sg()()(),Sl(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),Jx(827," label"),Wl(828,"br"),sg()()(),Sl(829,"td",19)(830,"code",25),Jx(831,"string"),sg()(),Sl(832,"td",22)(833,"p"),Jx(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),sg()()(),Sl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),Jx(839," value"),Wl(840,"br"),sg()()(),Sl(841,"td",19)(842,"code",25),Jx(843,"string"),sg()(),Sl(844,"td",22)(845,"p"),Jx(846,"Valor retornado no model."),sg(),Sl(847,"p"),Jx(848,"\xC9 poss\xEDvel usar os valores "),Sl(849,"code"),Jx(850,"true"),sg(),Jx(851," e "),Sl(852,"code"),Jx(853,"false"),sg(),Jx(854,", caso a propriedade "),Sl(855,"code"),Jx(856,"p-indeterminate"),sg(),Jx(857," esteja setada como "),Sl(858,"code"),Jx(859,"true"),sg(),Jx(860,`
passa a aceitar `),Sl(861,"code"),Jx(862,"null"),sg(),Jx(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),Sl(864,"code"),Jx(865,"false"),sg(),Jx(866,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-checkbox-group-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),sg()()()),p&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,me,ce,be,he],encapsulation:2})}return a})();var qe=[{path:"",component:xe}],Ee=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[pL.forChild(qe),pL]})}return a})();var pt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};