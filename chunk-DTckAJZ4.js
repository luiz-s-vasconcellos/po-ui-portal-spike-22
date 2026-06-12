import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,c8 as L3,R as Hl,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,bL as H3,cd as sme,bb as OO,aB as gx,aM as gw,aN as Z0,a4 as dN,bc as Sx,aO as pw,aP as X0,a5 as hN,ct as Hhe,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Se=()=>({value:"1",label:"Option 1"}),fe=()=>({value:"2",label:"Option 2"}),Ce=(a,ge)=>[a,ge],de=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&Hl(0,"po-checkbox-group",0),p&2&&ZE("p-options",sN(3,Ce,iN(1,Se),iN(2,fe)));},dependencies:[L3],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Checkbox Group Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-checkbox-group-basic"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ke,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,this.option],this.clearOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=false,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption();}clearOption(){this.option={label:void 0,value:void 0};}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:false,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=gx();Cl(0,"po-checkbox-group",2),gw("ngModelChange",function(l){return Jy(s),Zx(n.checkboxGroup,l)||(n.checkboxGroup=l),e_(l)}),dt("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",3),Hl(3,"po-info",4),dN(4,"json"),Hl(5,"po-info",5),og(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"po-input",6),gw("ngModelChange",function(l){return Jy(s),Zx(n.option.value,l)||(n.option.value=l),e_(l)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(l){return Jy(s),Zx(n.option.label,l)||(n.option.label=l),e_(l)}),og(),Z0(),Cl(11,"po-switch",8),gw("ngModelChange",function(l){return Jy(s),Zx(n.option.disabled,l)||(n.option.disabled=l),e_(l)}),og(),Z0(),Cl(12,"div",3)(13,"po-button",9),dt("p-click",function(){return n.addOption()}),og()()(),Hl(14,"po-divider"),Cl(15,"form",null,1)(17,"po-input",10),gw("ngModelChange",function(l){return Jy(s),Zx(n.label,l)||(n.label=l),e_(l)}),og(),Z0(),Cl(18,"po-input",11),gw("ngModelChange",function(l){return Jy(s),Zx(n.help,l)||(n.help=l),e_(l)}),og(),Z0(),Cl(19,"po-input",12),gw("ngModelChange",function(l){return Jy(s),Zx(n.helperText,l)||(n.helperText=l),e_(l)}),og(),Z0(),Cl(20,"po-input",13),gw("ngModelChange",function(l){return Jy(s),Zx(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),e_(l)}),og(),Z0(),Cl(21,"po-checkbox-group",14),gw("ngModelChange",function(l){return Jy(s),Zx(n.properties,l)||(n.properties=l),e_(l)}),og(),Z0(),Cl(22,"po-radio-group",15),gw("ngModelChange",function(l){return Jy(s),Zx(n.columns,l)||(n.columns=l),e_(l)}),og(),Z0(),Cl(23,"po-radio-group",16),gw("ngModelChange",function(l){return Jy(s),Zx(n.size,l)||(n.size=l),e_(l)}),og(),Z0(),Cl(24,"div",3)(25,"po-button",17),dt("p-click",function(){return n.restore()}),og()()();}if(p&2){let s=Sx(8);pw("ngModel",n.checkboxGroup),ZE("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),X0(),Lp(3),ZE("p-value",hN(4,32,n.checkboxGroup)),Lp(2),ZE("p-value",n.event),Lp(4),pw("ngModel",n.option.value),X0(),Lp(),pw("ngModel",n.option.label),X0(),Lp(),pw("ngModel",n.option.disabled),X0(),Lp(2),ZE("p-disabled",s.invalid),Lp(4),pw("ngModel",n.label),X0(),Lp(),pw("ngModel",n.help),X0(),Lp(),pw("ngModel",n.helperText),X0(),Lp(),pw("ngModel",n.fieldErrorMessage),X0(),Lp(),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(),pw("ngModel",n.columns),ZE("p-options",n.columnOptions),X0(),Lp(),pw("ngModel",n.size),ZE("p-options",n.sizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,H3,sme,OO],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Checkbox Group Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-checkbox-group
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-checkbox-group-labs"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return a})();var ue=(()=>{class a{poNotification=f(Xp);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!");}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:false,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=gx();Cl(0,"div",1),qx(1,"Password Rules"),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",2),Hl(6,"po-checkbox-group",3),og(),Hl(7,"po-divider"),Cl(8,"div",2),Hl(9,"po-checkbox-group",4),og(),Hl(10,"po-divider"),Cl(11,"div",2)(12,"po-switch",5),gw("ngModelChange",function(l){return Jy(s),Zx(n.expiration,l)||(n.expiration=l),e_(l)}),og(),Z0(),Hl(13,"po-number",6),og(),Cl(14,"div",2)(15,"po-switch",7),gw("ngModelChange",function(l){return Jy(s),Zx(n.attempts,l)||(n.attempts=l),e_(l)}),og(),Z0(),Cl(16,"po-number",8),gw("ngModelChange",function(l){return Jy(s),Zx(n.maxAttempts,l)||(n.maxAttempts=l),e_(l)}),og(),Z0(),og(),Cl(17,"div",2)(18,"po-button",9),dt("p-click",function(){return n.confirm()}),og()()();}p&2&&(Lp(6),ZE("p-options",n.systemOptions),Lp(3),ZE("p-options",n.auditOptions),Lp(3),pw("ngModel",n.expiration),X0(),Lp(),ZE("p-disabled",!n.expiration),Lp(2),pw("ngModel",n.attempts),X0(),Lp(),pw("ngModel",n.maxAttempts),ZE("p-disabled",!n.attempts),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,Hhe,H3],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Checkbox Group \u2013 Security policy"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-checkbox-group-password-policy"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:false,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoCheckboxGroupComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O componente "),Cl(24,"code"),qx(25,"po-checkbox-group"),og(),qx(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),og(),Cl(27,"blockquote")(28,"p"),qx(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),Cl(30,"a",6)(31,"strong"),qx(32,"PO Radio Group"),og()(),qx(33,"."),og()(),Cl(34,"p"),qx(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),og(),Cl(36,"pre")(37,"code"),qx(38,`favorites = ['PO', 'Angular'];
`),og()(),Cl(39,"p"),qx(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Cl(41,"code"),qx(42,"null"),og(),qx(43,"), ou seja, nem marcado ("),Cl(44,"code"),qx(45,"true"),og(),qx(46,") e nem desmarcado ("),Cl(47,"code"),qx(48,"false"),og(),qx(49,`),
deve setar a propriedade `),Cl(50,"code"),qx(51,"p-indeterminate"),og(),qx(52," como "),Cl(53,"code"),qx(54,"true"),og(),qx(55,"."),og(),Cl(56,"p"),qx(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),og(),Cl(58,"pre")(59,"code"),qx(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),og()()(),Cl(61,"div",7)(62,"h4",8),qx(63,"Seletor"),og(),Cl(64,"pre",9),qx(65,`<po-checkbox-group
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
`),og()(),Cl(66,"h4",10),qx(67,"Propriedades"),og(),Cl(68,"table",11)(69,"tr",12)(70,"th",13),qx(71,"Nome"),og(),Cl(72,"th",13),qx(73,"Tipo"),og(),Cl(74,"th",13),qx(75,"Padr\xE3o"),og(),Cl(76,"th",13),qx(77,"Descri\xE7\xE3o"),og()(),Cl(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),qx(82," (p-additional-help)"),Hl(83,"br"),og()(),Cl(84,"div",18),qx(85,"Deprecated"),og()(),Cl(86,"td",19)(87,"code",20),qx(88,"EventEmitter"),og()(),Cl(89,"td",21),qx(90,"-"),og(),Cl(91,"td",22)(92,"em")(93,"strong"),qx(94,"(opcional)"),og()(),Cl(95,"p"),qx(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(97,"blockquote")(98,"p"),qx(99,"Essa propriedade est\xE1 "),Cl(100,"strong"),qx(101,"depreciada"),og(),qx(102," e ser\xE1 removida na vers\xE3o "),Cl(103,"code"),qx(104,"23.x.x"),og(),qx(105,". Recomendamos utilizar a propriedade "),Cl(106,"code"),qx(107,"p-helper"),og(),qx(108," que oferece mais recursos e flexibilidade."),og()()()(),Cl(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),qx(113," p-additional-help-tooltip"),Hl(114,"br"),og()(),Cl(115,"div",18),qx(116,"Deprecated"),og()(),Cl(117,"td",19)(118,"code",25),qx(119,"string"),og()(),Cl(120,"td",21),qx(121,"-"),og(),Cl(122,"td",22)(123,"em")(124,"strong"),qx(125,"(opcional)"),og()(),Cl(126,"p"),qx(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(128,"code"),qx(129,"po-helper"),og(),qx(130,`.
`),Cl(131,"strong"),qx(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(133,"blockquote")(134,"p"),qx(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(136,"blockquote")(137,"p"),qx(138,"Essa propriedade est\xE1 "),Cl(139,"strong"),qx(140,"depreciada"),og(),qx(141," e ser\xE1 removida na vers\xE3o "),Cl(142,"code"),qx(143,"23.x.x"),og(),qx(144,". Recomendamos utilizar a propriedade "),Cl(145,"code"),qx(146,"p-helper"),og(),qx(147," que oferece mais recursos e flexibilidade."),og()()()(),Cl(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),qx(152," p-append-in-body"),Hl(153,"br"),og()()(),Cl(154,"td",19)(155,"code",26),qx(156,"boolean"),og()(),Cl(157,"td",21)(158,"p")(159,"code"),qx(160,"false"),og()()(),Cl(161,"td",22)(162,"em")(163,"strong"),qx(164,"(opcional)"),og()(),Cl(165,"p"),qx(166,"Define que o popover ("),Cl(167,"code"),qx(168,"p-helper"),og(),qx(169," e/ou "),Cl(170,"code"),qx(171,"p-error-limit"),og(),qx(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(173,"blockquote")(174,"p"),qx(175,"Quando utilizado com "),Cl(176,"code"),qx(177,"p-helper"),og(),qx(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),qx(183," p-auto-focus"),Hl(184,"br"),og()()(),Cl(185,"td",19)(186,"code",26),qx(187,"boolean"),og()(),Cl(188,"td",21)(189,"p")(190,"code"),qx(191,"false"),og()()(),Cl(192,"td",22)(193,"em")(194,"strong"),qx(195,"(opcional)"),og()(),Cl(196,"p"),qx(197,"Aplica foco no elemento ao ser iniciado."),og(),Cl(198,"blockquote")(199,"p"),qx(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),qx(205," (p-change)"),Hl(206,"br"),og()()(),Cl(207,"td",19)(208,"code",20),qx(209,"EventEmitter"),og()(),Cl(210,"td",21),qx(211,"-"),og(),Cl(212,"td",22)(213,"em")(214,"strong"),qx(215,"(opcional)"),og()(),Cl(216,"p"),qx(217,"Evento disparado ao alterar valor do campo"),og()()(),Cl(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),qx(222," p-columns"),Hl(223,"br"),og()()(),Cl(224,"td",19)(225,"code",27),qx(226,"number"),og()(),Cl(227,"td",21)(228,"p")(229,"code"),qx(230,"2"),og()()(),Cl(231,"td",22)(232,"em")(233,"strong"),qx(234,"(opcional)"),og()(),Cl(235,"p"),qx(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),Cl(237,"em"),qx(238,"checkbox"),og(),qx(239,"."),og(),Cl(240,"ul")(241,"li"),qx(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Cl(243,"code"),qx(244,"1"),og(),qx(245," e "),Cl(246,"code"),qx(247,"4"),og(),qx(248," colunas."),og(),Cl(249,"li"),qx(250,"Para resolu\xE7\xE3o "),Cl(251,"code"),qx(252,"sm"),og(),qx(253," a colunagem invariavelmente passa para "),Cl(254,"code"),qx(255,"1"),og(),qx(256," coluna."),og(),Cl(257,"li"),qx(258,"Quando se trata de resolu\xE7\xE3o "),Cl(259,"code"),qx(260,"md"),og(),qx(261," e o valor estabelecido para colunas for superior a "),Cl(262,"code"),qx(263,"2"),og(),qx(264,`,
o `),Cl(265,"em"),qx(266,"grid system"),og(),qx(267," ser\xE1 composto por "),Cl(268,"code"),qx(269,"2"),og(),qx(270," colunas."),og(),Cl(271,"li"),qx(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),Cl(273,"code"),qx(274,"1"),og(),qx(275," coluna para op\xE7\xF5es com textos grandes."),og()()()(),Cl(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),qx(280," p-compact-label"),Hl(281,"br"),og()()(),Cl(282,"td",19)(283,"code",26),qx(284,"boolean"),og()(),Cl(285,"td",21)(286,"p")(287,"code"),qx(288,"false"),og()()(),Cl(289,"td",22)(290,"em")(291,"strong"),qx(292,"(opcional)"),og()(),Cl(293,"p"),qx(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(295,"p"),qx(296,"Quando habilitado ("),Cl(297,"code"),qx(298,"true"),og(),qx(299,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(300,"ul")(301,"li")(302,"code"),qx(303,"po-label"),og()(),Cl(304,"li")(305,"code"),qx(306,"p-requirement (showRequired)"),og()(),Cl(307,"li")(308,"code"),qx(309,"po-helper"),og()()(),Cl(310,"p"),qx(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(312,"p"),qx(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(314,"ul")(315,"li")(316,"code"),qx(317,"--field-container-title-justify"),og()(),Cl(318,"li")(319,"code"),qx(320,"--field-container-title-flex"),og()()(),Cl(321,"p"),qx(322,"Exemplo:"),og(),Cl(323,"pre")(324,"code"),qx(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(326,"p"),qx(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),qx(332," p-disabled"),Hl(333,"br"),og()()(),Cl(334,"td",19)(335,"code",26),qx(336,"boolean"),og()(),Cl(337,"td",21)(338,"p")(339,"code"),qx(340,"false"),og()()(),Cl(341,"td",22)(342,"em")(343,"strong"),qx(344,"(opcional)"),og()(),Cl(345,"p"),qx(346,"Desabilita todos os itens do checkbox."),og()()(),Cl(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),qx(351," p-error-limit"),Hl(352,"br"),og()()(),Cl(353,"td",19)(354,"code",26),qx(355,"boolean"),og()(),Cl(356,"td",21)(357,"p")(358,"code"),qx(359,"false"),og()()(),Cl(360,"td",22)(361,"em")(362,"strong"),qx(363,"(opcional)"),og()(),Cl(364,"p"),qx(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(366,"blockquote")(367,"p"),qx(368,"Caso essa propriedade seja definida como "),Cl(369,"code"),qx(370,"true"),og(),qx(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),qx(376," p-field-error-message"),Hl(377,"br"),og()()(),Cl(378,"td",19)(379,"code",25),qx(380,"string"),og()(),Cl(381,"td",21),qx(382,"-"),og(),Cl(383,"td",22)(384,"em")(385,"strong"),qx(386,"(opcional)"),og()(),Cl(387,"p"),qx(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(389,"blockquote")(390,"p"),qx(391,"Necess\xE1rio que a propriedade "),Cl(392,"code"),qx(393,"p-required"),og(),qx(394," esteja habilitada."),og()()()(),Cl(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),qx(399," p-help"),Hl(400,"br"),og()()(),Cl(401,"td",19)(402,"code",25),qx(403,"string"),og()(),Cl(404,"td",21),qx(405,"-"),og(),Cl(406,"td",22)(407,"em")(408,"strong"),qx(409,"(opcional)"),og()(),Cl(410,"p"),qx(411,"Texto de apoio do campo"),og()()(),Cl(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),qx(416," p-indeterminate"),Hl(417,"br"),og()()(),Cl(418,"td",19)(419,"code",26),qx(420,"boolean"),og()(),Cl(421,"td",21)(422,"p")(423,"code"),qx(424,"false"),og()()(),Cl(425,"td",22)(426,"em")(427,"strong"),qx(428,"(opcional)"),og()(),Cl(429,"p"),qx(430,"Caso exista a necessidade de usar o valor indeterminado ("),Cl(431,"code"),qx(432,"null"),og(),qx(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Cl(434,"code"),qx(435,"p-indeterminate"),og(),qx(436," como "),Cl(437,"code"),qx(438,"true"),og(),qx(439,", por padr\xE3o essa propriedade vem desabilitada ("),Cl(440,"code"),qx(441,"false"),og(),qx(442,")."),og(),Cl(443,"p"),qx(444,"Quando essa propriedade \xE9 setada como "),Cl(445,"code"),qx(446,"true"),og(),qx(447,", o "),Cl(448,"em"),qx(449,"po-checkbox-group"),og(),qx(450,` passa a devolver um objeto completo para o
`),Cl(451,"code"),qx(452,"ngModel"),og(),qx(453,", diferente do array que cont\xE9m apenas os valores selecionados."),og()()(),Cl(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),qx(458," (p-keydown)"),Hl(459,"br"),og()()(),Cl(460,"td",19)(461,"code",20),qx(462,"EventEmitter"),og()(),Cl(463,"td",21),qx(464,"-"),og(),Cl(465,"td",22)(466,"em")(467,"strong"),qx(468,"(opcional)"),og()(),Cl(469,"p"),qx(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(471,"code"),qx(472,"KeyboardEvent"),og(),qx(473," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),qx(478," p-label"),Hl(479,"br"),og()()(),Cl(480,"td",19)(481,"code",25),qx(482,"string"),og()(),Cl(483,"td",21),qx(484,"-"),og(),Cl(485,"td",22)(486,"em")(487,"strong"),qx(488,"(opcional)"),og()(),Cl(489,"p"),qx(490,"Label do campo"),og()()(),Cl(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),qx(495," p-label-text-wrap"),Hl(496,"br"),og()()(),Cl(497,"td",19)(498,"code",26),qx(499,"boolean"),og()(),Cl(500,"td",21)(501,"p")(502,"code"),qx(503,"false"),og()()(),Cl(504,"td",22)(505,"em")(506,"strong"),qx(507,"(opcional)"),og()(),Cl(508,"p"),qx(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(510,"code"),qx(511,"p-label"),og(),qx(512,". Quando "),Cl(513,"code"),qx(514,"p-label-text-wrap"),og(),qx(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),qx(520," name"),Hl(521,"br"),og()()(),Cl(522,"td",19)(523,"code",25),qx(524,"string"),og()(),Cl(525,"td",21),qx(526,"-"),og(),Cl(527,"td",22)(528,"p"),qx(529,"Nome dos checkboxes"),og()()(),Cl(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),qx(534," (ngModelChange)"),Hl(535,"br"),og()()(),Cl(536,"td",19)(537,"code",20),qx(538,"EventEmitter"),og()(),Cl(539,"td",21),qx(540,"-"),og(),Cl(541,"td",22)(542,"em")(543,"strong"),qx(544,"(opcional)"),og()(),Cl(545,"p"),qx(546,"Fun\xE7\xE3o para atualizar o "),Cl(547,"code"),qx(548,"ngModel"),og(),qx(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Cl(550,"p"),qx(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Cl(552,"code"),qx(553,"strictTemplates"),og(),qx(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Cl(555,"pre")(556,"code"),qx(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),og()()()(),Cl(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),qx(562," p-optional"),Hl(563,"br"),og()()(),Cl(564,"td",19)(565,"code",26),qx(566,"boolean"),og()(),Cl(567,"td",21)(568,"p")(569,"code"),qx(570,"false"),og()()(),Cl(571,"td",22)(572,"em")(573,"strong"),qx(574,"(opcional)"),og()(),Cl(575,"p"),qx(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(577,"blockquote")(578,"p"),qx(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(580,"ul")(581,"li"),qx(582,"O campo conter "),Cl(583,"code"),qx(584,"p-required"),og(),qx(585,";"),og(),Cl(586,"li"),qx(587,"N\xE3o possuir "),Cl(588,"code"),qx(589,"p-help"),og(),qx(590," e/ou "),Cl(591,"code"),qx(592,"p-label"),og(),qx(593,"."),og()()()(),Cl(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),qx(598," p-options"),Hl(599,"br"),og()()(),Cl(600,"td",19)(601,"code",28),qx(602,"PoCheckboxGroupOption[]"),og()(),Cl(603,"td",21),qx(604,"-"),og(),Cl(605,"td",22)(606,"em")(607,"strong"),qx(608,"(opcional)"),og()(),Cl(609,"p"),qx(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),og()()(),Cl(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),qx(615," p-helper"),Hl(616,"br"),og()()(),Cl(617,"td",19)(618,"code",29),qx(619,"PoHelperOptions "),og(),Cl(620,"code",25),qx(621," string"),og()(),Cl(622,"td",21),qx(623,"-"),og(),Cl(624,"td",22)(625,"em")(626,"strong"),qx(627,"(opcional)"),og()(),Cl(628,"p"),qx(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(630,"code"),qx(631,"p-label"),og(),qx(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(633,"code"),qx(634,"p-label"),og(),qx(635,"."),og(),Cl(636,"blockquote")(637,"p"),qx(638,"Para mais informa\xE7\xF5es acesse: "),Cl(639,"a",30),qx(640,"https://po-ui.io/documentation/po-helper"),og(),qx(641,"."),og()(),Cl(642,"blockquote")(643,"p"),qx(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(645,"code"),qx(646,"p-additional-help-tooltip"),og(),qx(647," e "),Cl(648,"code"),qx(649,"p-additional-help"),og(),qx(650,") ser\xE1 ignorado."),og()()()(),Cl(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),qx(655," p-required"),Hl(656,"br"),og()()(),Cl(657,"td",19)(658,"code",26),qx(659,"boolean"),og()(),Cl(660,"td",21)(661,"p")(662,"code"),qx(663,"false"),og()()(),Cl(664,"td",22)(665,"em")(666,"strong"),qx(667,"(opcional)"),og()(),Cl(668,"p"),qx(669,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),qx(674," p-show-required"),Hl(675,"br"),og()()(),Cl(676,"td",19)(677,"code",26),qx(678,"boolean"),og()(),Cl(679,"td",21),qx(680,"-"),og(),Cl(681,"td",22)(682,"p"),qx(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(684,"blockquote")(685,"p"),qx(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(687,"ul")(688,"li"),qx(689,"N\xE3o possuir "),Cl(690,"code"),qx(691,"p-help"),og(),qx(692," e/ou "),Cl(693,"code"),qx(694,"p-label"),og(),qx(695,"."),og()()()(),Cl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),qx(700," p-size"),Hl(701,"br"),og()()(),Cl(702,"td",19)(703,"code",25),qx(704,"string"),og()(),Cl(705,"td",21)(706,"p")(707,"code"),qx(708,"medium"),og()()(),Cl(709,"td",22)(710,"em")(711,"strong"),qx(712,"(opcional)"),og()(),Cl(713,"p"),qx(714,"Define o tamanho dos checkboxes do componente:"),og(),Cl(715,"ul")(716,"li")(717,"code"),qx(718,"small"),og(),qx(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(720,"li")(721,"code"),qx(722,"medium"),og(),qx(723,": 24x24."),og()(),Cl(724,"blockquote")(725,"p"),qx(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(727,"code"),qx(728,"medium"),og(),qx(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(730,"a",31),qx(731,"po-theme"),og(),qx(732,"."),og()()()()(),Cl(733,"h3",10),qx(734,"M\xE9todos"),og(),Cl(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),qx(741," focus "),og()()()()(),Cl(742,"tr",22)(743,"td",22)(744,"p"),qx(745,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(746,"p"),qx(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(748,"pre")(749,"code"),qx(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),og()()()()(),Hl(751,"br"),Cl(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),qx(758," showAdditionalHelp "),og()()()()(),Cl(759,"tr",22)(760,"td",22)(761,"p"),qx(762,"M\xE9todo que exibe "),Cl(763,"code"),qx(764,"p-helper"),og(),qx(765," ou executa a a\xE7\xE3o definida em "),Cl(766,"code"),qx(767,"p-helper{eventOnClick}"),og(),qx(768," ou em "),Cl(769,"code"),qx(770,"p-additionalHelp"),og(),qx(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(772,"code"),qx(773,"p-keydown"),og(),qx(774,"."),og(),Cl(775,"blockquote")(776,"p"),qx(777,"Exibe ou oculta o conte\xFAdo do componente "),Cl(778,"code"),qx(779,"po-helper"),og(),qx(780," quando o componente estiver com foco."),og()(),Cl(781,"pre")(782,"code"),qx(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),og()(),Cl(784,"pre")(785,"code"),qx(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(787,"br"),Cl(788,"h3"),qx(789,"Interfaces"),og(),Cl(790,"h4",34)(791,"code",5),qx(792,"PoCheckboxGroupOption"),og()(),Cl(793,"div",2)(794,"p"),qx(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),og()(),Cl(796,"h4",10),qx(797,"Propriedades"),og(),Cl(798,"table",11)(799,"tr",12)(800,"th",13),qx(801,"Nome"),og(),Cl(802,"th",13),qx(803,"Tipo"),og(),Cl(804,"th",13),qx(805,"Descri\xE7\xE3o"),og()(),Cl(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),qx(810," disabled"),Hl(811,"br"),og()()(),Cl(812,"td",19)(813,"code",26),qx(814,"boolean"),og()(),Cl(815,"td",22)(816,"em")(817,"strong"),qx(818,"(opcional)"),og()(),Cl(819,"p"),qx(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),og(),Cl(821,"p"),qx(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),og()()(),Cl(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),qx(827," label"),Hl(828,"br"),og()()(),Cl(829,"td",19)(830,"code",25),qx(831,"string"),og()(),Cl(832,"td",22)(833,"p"),qx(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),og()()(),Cl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),qx(839," value"),Hl(840,"br"),og()()(),Cl(841,"td",19)(842,"code",25),qx(843,"string"),og()(),Cl(844,"td",22)(845,"p"),qx(846,"Valor retornado no model."),og(),Cl(847,"p"),qx(848,"\xC9 poss\xEDvel usar os valores "),Cl(849,"code"),qx(850,"true"),og(),qx(851," e "),Cl(852,"code"),qx(853,"false"),og(),qx(854,", caso a propriedade "),Cl(855,"code"),qx(856,"p-indeterminate"),og(),qx(857," esteja setada como "),Cl(858,"code"),qx(859,"true"),og(),qx(860,`
passa a aceitar `),Cl(861,"code"),qx(862,"null"),og(),qx(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),Cl(864,"code"),qx(865,"false"),og(),qx(866,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-checkbox-group-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),og()()()),p&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,me,ce,be,he],encapsulation:2})}return a})();var qe=[{path:"",component:xe}],Ee=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[bL.forChild(qe),bL]})}return a})();var pt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ca,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};