import {f as fe$1,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,aW as Yp,c4 as C3,L as Gl,O as nw,bM as vN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,bH as M3,c9 as Yhe,bc as $O,aB as Sx,aM as ww,aN as r0,a4 as wN,bd as Fx,aO as Ew,aP as o0,a5 as bN,cp as Hhe,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var Se=()=>({value:"1",label:"Option 1"}),fe=()=>({value:"2",label:"Option 2"}),Ce=(a,ge)=>[a,ge],de=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&Gl(0,"po-checkbox-group",0),p&2&&nw("p-options",vN(3,Ce,gN(1,Se),gN(2,fe)));},dependencies:[C3],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Checkbox Group Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-checkbox-group-basic"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ke,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,this.option],this.clearOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=false,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption();}clearOption(){this.option={label:void 0,value:void 0};}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:false,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=Sx();Tl(0,"po-checkbox-group",2),ww("ngModelChange",function(l){return Ky(s),sN(n.checkboxGroup,l)||(n.checkboxGroup=l),Xy(l)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",3),Gl(3,"po-info",4),wN(4,"json"),Gl(5,"po-info",5),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"po-input",6),ww("ngModelChange",function(l){return Ky(s),sN(n.option.value,l)||(n.option.value=l),Xy(l)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(s),sN(n.option.label,l)||(n.option.label=l),Xy(l)}),sg(),r0(),Tl(11,"po-switch",8),ww("ngModelChange",function(l){return Ky(s),sN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),sg(),r0(),Tl(12,"div",3)(13,"po-button",9),ht("p-click",function(){return n.addOption()}),sg()()(),Gl(14,"po-divider"),Tl(15,"form",null,1)(17,"po-input",10),ww("ngModelChange",function(l){return Ky(s),sN(n.label,l)||(n.label=l),Xy(l)}),sg(),r0(),Tl(18,"po-input",11),ww("ngModelChange",function(l){return Ky(s),sN(n.help,l)||(n.help=l),Xy(l)}),sg(),r0(),Tl(19,"po-input",12),ww("ngModelChange",function(l){return Ky(s),sN(n.helperText,l)||(n.helperText=l),Xy(l)}),sg(),r0(),Tl(20,"po-input",13),ww("ngModelChange",function(l){return Ky(s),sN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),sg(),r0(),Tl(21,"po-checkbox-group",14),ww("ngModelChange",function(l){return Ky(s),sN(n.properties,l)||(n.properties=l),Xy(l)}),sg(),r0(),Tl(22,"po-radio-group",15),ww("ngModelChange",function(l){return Ky(s),sN(n.columns,l)||(n.columns=l),Xy(l)}),sg(),r0(),Tl(23,"po-radio-group",16),ww("ngModelChange",function(l){return Ky(s),sN(n.size,l)||(n.size=l),Xy(l)}),sg(),r0(),Tl(24,"div",3)(25,"po-button",17),ht("p-click",function(){return n.restore()}),sg()()();}if(p&2){let s=Fx(8);Ew("ngModel",n.checkboxGroup),nw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),o0(),Vp(3),nw("p-value",bN(4,32,n.checkboxGroup)),Vp(2),nw("p-value",n.event),Vp(4),Ew("ngModel",n.option.value),o0(),Vp(),Ew("ngModel",n.option.label),o0(),Vp(),Ew("ngModel",n.option.disabled),o0(),Vp(2),nw("p-disabled",s.invalid),Vp(4),Ew("ngModel",n.label),o0(),Vp(),Ew("ngModel",n.help),o0(),Vp(),Ew("ngModel",n.helperText),o0(),Vp(),Ew("ngModel",n.fieldErrorMessage),o0(),Vp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0(),Vp(),Ew("ngModel",n.columns),nw("p-options",n.columnOptions),o0(),Vp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Dde,M3,Yhe,$O],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Checkbox Group Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-checkbox-group
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-checkbox-group-labs"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_e,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poNotification=f(Yp);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!");}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:false,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=Sx();Tl(0,"div",1),iN(1,"Password Rules"),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",2),Gl(6,"po-checkbox-group",3),sg(),Gl(7,"po-divider"),Tl(8,"div",2),Gl(9,"po-checkbox-group",4),sg(),Gl(10,"po-divider"),Tl(11,"div",2)(12,"po-switch",5),ww("ngModelChange",function(l){return Ky(s),sN(n.expiration,l)||(n.expiration=l),Xy(l)}),sg(),r0(),Gl(13,"po-number",6),sg(),Tl(14,"div",2)(15,"po-switch",7),ww("ngModelChange",function(l){return Ky(s),sN(n.attempts,l)||(n.attempts=l),Xy(l)}),sg(),r0(),Tl(16,"po-number",8),ww("ngModelChange",function(l){return Ky(s),sN(n.maxAttempts,l)||(n.maxAttempts=l),Xy(l)}),sg(),r0(),sg(),Tl(17,"div",2)(18,"po-button",9),ht("p-click",function(){return n.confirm()}),sg()()();}p&2&&(Vp(6),nw("p-options",n.systemOptions),Vp(3),nw("p-options",n.auditOptions),Vp(3),Ew("ngModel",n.expiration),o0(),Vp(),nw("p-disabled",!n.expiration),Vp(2),Ew("ngModel",n.attempts),o0(),Vp(),Ew("ngModel",n.maxAttempts),nw("p-disabled",!n.attempts),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,Hhe,M3],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Checkbox Group \u2013 Security policy"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-checkbox-group-password-policy"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ue],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:false,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoCheckboxGroupComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O componente "),Tl(24,"code"),iN(25,"po-checkbox-group"),sg(),iN(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),sg(),Tl(27,"blockquote")(28,"p"),iN(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),Tl(30,"a",6)(31,"strong"),iN(32,"PO Radio Group"),sg()(),iN(33,"."),sg()(),Tl(34,"p"),iN(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),sg(),Tl(36,"pre")(37,"code"),iN(38,`favorites = ['PO', 'Angular'];
`),sg()(),Tl(39,"p"),iN(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Tl(41,"code"),iN(42,"null"),sg(),iN(43,"), ou seja, nem marcado ("),Tl(44,"code"),iN(45,"true"),sg(),iN(46,") e nem desmarcado ("),Tl(47,"code"),iN(48,"false"),sg(),iN(49,`),
deve setar a propriedade `),Tl(50,"code"),iN(51,"p-indeterminate"),sg(),iN(52," como "),Tl(53,"code"),iN(54,"true"),sg(),iN(55,"."),sg(),Tl(56,"p"),iN(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),sg(),Tl(58,"pre")(59,"code"),iN(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),sg()()(),Tl(61,"div",7)(62,"h4",8),iN(63,"Seletor"),sg(),Tl(64,"pre",9),iN(65,`<po-checkbox-group
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
`),sg()(),Tl(66,"h4",10),iN(67,"Propriedades"),sg(),Tl(68,"table",11)(69,"tr",12)(70,"th",13),iN(71,"Nome"),sg(),Tl(72,"th",13),iN(73,"Tipo"),sg(),Tl(74,"th",13),iN(75,"Padr\xE3o"),sg(),Tl(76,"th",13),iN(77,"Descri\xE7\xE3o"),sg()(),Tl(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),iN(82," (p-additional-help)"),Gl(83,"br"),sg()(),Tl(84,"div",18),iN(85,"Deprecated"),sg()(),Tl(86,"td",19)(87,"code",20),iN(88,"EventEmitter"),sg()(),Tl(89,"td",21),iN(90,"-"),sg(),Tl(91,"td",22)(92,"em")(93,"strong"),iN(94,"(opcional)"),sg()(),Tl(95,"p"),iN(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(97,"blockquote")(98,"p"),iN(99,"Essa propriedade est\xE1 "),Tl(100,"strong"),iN(101,"depreciada"),sg(),iN(102," e ser\xE1 removida na vers\xE3o "),Tl(103,"code"),iN(104,"23.x.x"),sg(),iN(105,". Recomendamos utilizar a propriedade "),Tl(106,"code"),iN(107,"p-helper"),sg(),iN(108," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),iN(113," p-additional-help-tooltip"),Gl(114,"br"),sg()(),Tl(115,"div",18),iN(116,"Deprecated"),sg()(),Tl(117,"td",19)(118,"code",25),iN(119,"string"),sg()(),Tl(120,"td",21),iN(121,"-"),sg(),Tl(122,"td",22)(123,"em")(124,"strong"),iN(125,"(opcional)"),sg()(),Tl(126,"p"),iN(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(128,"code"),iN(129,"po-helper"),sg(),iN(130,`.
`),Tl(131,"strong"),iN(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(133,"blockquote")(134,"p"),iN(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(136,"blockquote")(137,"p"),iN(138,"Essa propriedade est\xE1 "),Tl(139,"strong"),iN(140,"depreciada"),sg(),iN(141," e ser\xE1 removida na vers\xE3o "),Tl(142,"code"),iN(143,"23.x.x"),sg(),iN(144,". Recomendamos utilizar a propriedade "),Tl(145,"code"),iN(146,"p-helper"),sg(),iN(147," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),iN(152," p-append-in-body"),Gl(153,"br"),sg()()(),Tl(154,"td",19)(155,"code",26),iN(156,"boolean"),sg()(),Tl(157,"td",21)(158,"p")(159,"code"),iN(160,"false"),sg()()(),Tl(161,"td",22)(162,"em")(163,"strong"),iN(164,"(opcional)"),sg()(),Tl(165,"p"),iN(166,"Define que o popover ("),Tl(167,"code"),iN(168,"p-helper"),sg(),iN(169," e/ou "),Tl(170,"code"),iN(171,"p-error-limit"),sg(),iN(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(173,"blockquote")(174,"p"),iN(175,"Quando utilizado com "),Tl(176,"code"),iN(177,"p-helper"),sg(),iN(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),iN(183," p-auto-focus"),Gl(184,"br"),sg()()(),Tl(185,"td",19)(186,"code",26),iN(187,"boolean"),sg()(),Tl(188,"td",21)(189,"p")(190,"code"),iN(191,"false"),sg()()(),Tl(192,"td",22)(193,"em")(194,"strong"),iN(195,"(opcional)"),sg()(),Tl(196,"p"),iN(197,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(198,"blockquote")(199,"p"),iN(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),iN(205," (p-change)"),Gl(206,"br"),sg()()(),Tl(207,"td",19)(208,"code",20),iN(209,"EventEmitter"),sg()(),Tl(210,"td",21),iN(211,"-"),sg(),Tl(212,"td",22)(213,"em")(214,"strong"),iN(215,"(opcional)"),sg()(),Tl(216,"p"),iN(217,"Evento disparado ao alterar valor do campo"),sg()()(),Tl(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),iN(222," p-columns"),Gl(223,"br"),sg()()(),Tl(224,"td",19)(225,"code",27),iN(226,"number"),sg()(),Tl(227,"td",21)(228,"p")(229,"code"),iN(230,"2"),sg()()(),Tl(231,"td",22)(232,"em")(233,"strong"),iN(234,"(opcional)"),sg()(),Tl(235,"p"),iN(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),Tl(237,"em"),iN(238,"checkbox"),sg(),iN(239,"."),sg(),Tl(240,"ul")(241,"li"),iN(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Tl(243,"code"),iN(244,"1"),sg(),iN(245," e "),Tl(246,"code"),iN(247,"4"),sg(),iN(248," colunas."),sg(),Tl(249,"li"),iN(250,"Para resolu\xE7\xE3o "),Tl(251,"code"),iN(252,"sm"),sg(),iN(253," a colunagem invariavelmente passa para "),Tl(254,"code"),iN(255,"1"),sg(),iN(256," coluna."),sg(),Tl(257,"li"),iN(258,"Quando se trata de resolu\xE7\xE3o "),Tl(259,"code"),iN(260,"md"),sg(),iN(261," e o valor estabelecido para colunas for superior a "),Tl(262,"code"),iN(263,"2"),sg(),iN(264,`,
o `),Tl(265,"em"),iN(266,"grid system"),sg(),iN(267," ser\xE1 composto por "),Tl(268,"code"),iN(269,"2"),sg(),iN(270," colunas."),sg(),Tl(271,"li"),iN(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),Tl(273,"code"),iN(274,"1"),sg(),iN(275," coluna para op\xE7\xF5es com textos grandes."),sg()()()(),Tl(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),iN(280," p-compact-label"),Gl(281,"br"),sg()()(),Tl(282,"td",19)(283,"code",26),iN(284,"boolean"),sg()(),Tl(285,"td",21)(286,"p")(287,"code"),iN(288,"false"),sg()()(),Tl(289,"td",22)(290,"em")(291,"strong"),iN(292,"(opcional)"),sg()(),Tl(293,"p"),iN(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(295,"p"),iN(296,"Quando habilitado ("),Tl(297,"code"),iN(298,"true"),sg(),iN(299,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(300,"ul")(301,"li")(302,"code"),iN(303,"po-label"),sg()(),Tl(304,"li")(305,"code"),iN(306,"p-requirement (showRequired)"),sg()(),Tl(307,"li")(308,"code"),iN(309,"po-helper"),sg()()(),Tl(310,"p"),iN(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(312,"p"),iN(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(314,"ul")(315,"li")(316,"code"),iN(317,"--field-container-title-justify"),sg()(),Tl(318,"li")(319,"code"),iN(320,"--field-container-title-flex"),sg()()(),Tl(321,"p"),iN(322,"Exemplo:"),sg(),Tl(323,"pre")(324,"code"),iN(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(326,"p"),iN(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),iN(332," p-disabled"),Gl(333,"br"),sg()()(),Tl(334,"td",19)(335,"code",26),iN(336,"boolean"),sg()(),Tl(337,"td",21)(338,"p")(339,"code"),iN(340,"false"),sg()()(),Tl(341,"td",22)(342,"em")(343,"strong"),iN(344,"(opcional)"),sg()(),Tl(345,"p"),iN(346,"Desabilita todos os itens do checkbox."),sg()()(),Tl(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),iN(351," p-error-limit"),Gl(352,"br"),sg()()(),Tl(353,"td",19)(354,"code",26),iN(355,"boolean"),sg()(),Tl(356,"td",21)(357,"p")(358,"code"),iN(359,"false"),sg()()(),Tl(360,"td",22)(361,"em")(362,"strong"),iN(363,"(opcional)"),sg()(),Tl(364,"p"),iN(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(366,"blockquote")(367,"p"),iN(368,"Caso essa propriedade seja definida como "),Tl(369,"code"),iN(370,"true"),sg(),iN(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),iN(376," p-field-error-message"),Gl(377,"br"),sg()()(),Tl(378,"td",19)(379,"code",25),iN(380,"string"),sg()(),Tl(381,"td",21),iN(382,"-"),sg(),Tl(383,"td",22)(384,"em")(385,"strong"),iN(386,"(opcional)"),sg()(),Tl(387,"p"),iN(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(389,"blockquote")(390,"p"),iN(391,"Necess\xE1rio que a propriedade "),Tl(392,"code"),iN(393,"p-required"),sg(),iN(394," esteja habilitada."),sg()()()(),Tl(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),iN(399," p-help"),Gl(400,"br"),sg()()(),Tl(401,"td",19)(402,"code",25),iN(403,"string"),sg()(),Tl(404,"td",21),iN(405,"-"),sg(),Tl(406,"td",22)(407,"em")(408,"strong"),iN(409,"(opcional)"),sg()(),Tl(410,"p"),iN(411,"Texto de apoio do campo"),sg()()(),Tl(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),iN(416," p-indeterminate"),Gl(417,"br"),sg()()(),Tl(418,"td",19)(419,"code",26),iN(420,"boolean"),sg()(),Tl(421,"td",21)(422,"p")(423,"code"),iN(424,"false"),sg()()(),Tl(425,"td",22)(426,"em")(427,"strong"),iN(428,"(opcional)"),sg()(),Tl(429,"p"),iN(430,"Caso exista a necessidade de usar o valor indeterminado ("),Tl(431,"code"),iN(432,"null"),sg(),iN(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Tl(434,"code"),iN(435,"p-indeterminate"),sg(),iN(436," como "),Tl(437,"code"),iN(438,"true"),sg(),iN(439,", por padr\xE3o essa propriedade vem desabilitada ("),Tl(440,"code"),iN(441,"false"),sg(),iN(442,")."),sg(),Tl(443,"p"),iN(444,"Quando essa propriedade \xE9 setada como "),Tl(445,"code"),iN(446,"true"),sg(),iN(447,", o "),Tl(448,"em"),iN(449,"po-checkbox-group"),sg(),iN(450,` passa a devolver um objeto completo para o
`),Tl(451,"code"),iN(452,"ngModel"),sg(),iN(453,", diferente do array que cont\xE9m apenas os valores selecionados."),sg()()(),Tl(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),iN(458," (p-keydown)"),Gl(459,"br"),sg()()(),Tl(460,"td",19)(461,"code",20),iN(462,"EventEmitter"),sg()(),Tl(463,"td",21),iN(464,"-"),sg(),Tl(465,"td",22)(466,"em")(467,"strong"),iN(468,"(opcional)"),sg()(),Tl(469,"p"),iN(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(471,"code"),iN(472,"KeyboardEvent"),sg(),iN(473," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),iN(478," p-label"),Gl(479,"br"),sg()()(),Tl(480,"td",19)(481,"code",25),iN(482,"string"),sg()(),Tl(483,"td",21),iN(484,"-"),sg(),Tl(485,"td",22)(486,"em")(487,"strong"),iN(488,"(opcional)"),sg()(),Tl(489,"p"),iN(490,"Label do campo"),sg()()(),Tl(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),iN(495," p-label-text-wrap"),Gl(496,"br"),sg()()(),Tl(497,"td",19)(498,"code",26),iN(499,"boolean"),sg()(),Tl(500,"td",21)(501,"p")(502,"code"),iN(503,"false"),sg()()(),Tl(504,"td",22)(505,"em")(506,"strong"),iN(507,"(opcional)"),sg()(),Tl(508,"p"),iN(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(510,"code"),iN(511,"p-label"),sg(),iN(512,". Quando "),Tl(513,"code"),iN(514,"p-label-text-wrap"),sg(),iN(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),iN(520," name"),Gl(521,"br"),sg()()(),Tl(522,"td",19)(523,"code",25),iN(524,"string"),sg()(),Tl(525,"td",21),iN(526,"-"),sg(),Tl(527,"td",22)(528,"p"),iN(529,"Nome dos checkboxes"),sg()()(),Tl(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),iN(534," (ngModelChange)"),Gl(535,"br"),sg()()(),Tl(536,"td",19)(537,"code",20),iN(538,"EventEmitter"),sg()(),Tl(539,"td",21),iN(540,"-"),sg(),Tl(541,"td",22)(542,"em")(543,"strong"),iN(544,"(opcional)"),sg()(),Tl(545,"p"),iN(546,"Fun\xE7\xE3o para atualizar o "),Tl(547,"code"),iN(548,"ngModel"),sg(),iN(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),sg(),Tl(550,"p"),iN(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Tl(552,"code"),iN(553,"strictTemplates"),sg(),iN(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Tl(555,"pre")(556,"code"),iN(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),sg()()()(),Tl(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),iN(562," p-optional"),Gl(563,"br"),sg()()(),Tl(564,"td",19)(565,"code",26),iN(566,"boolean"),sg()(),Tl(567,"td",21)(568,"p")(569,"code"),iN(570,"false"),sg()()(),Tl(571,"td",22)(572,"em")(573,"strong"),iN(574,"(opcional)"),sg()(),Tl(575,"p"),iN(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(577,"blockquote")(578,"p"),iN(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(580,"ul")(581,"li"),iN(582,"O campo conter "),Tl(583,"code"),iN(584,"p-required"),sg(),iN(585,";"),sg(),Tl(586,"li"),iN(587,"N\xE3o possuir "),Tl(588,"code"),iN(589,"p-help"),sg(),iN(590," e/ou "),Tl(591,"code"),iN(592,"p-label"),sg(),iN(593,"."),sg()()()(),Tl(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),iN(598," p-options"),Gl(599,"br"),sg()()(),Tl(600,"td",19)(601,"code",28),iN(602,"PoCheckboxGroupOption[]"),sg()(),Tl(603,"td",21),iN(604,"-"),sg(),Tl(605,"td",22)(606,"em")(607,"strong"),iN(608,"(opcional)"),sg()(),Tl(609,"p"),iN(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),sg()()(),Tl(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),iN(615," p-helper"),Gl(616,"br"),sg()()(),Tl(617,"td",19)(618,"code",29),iN(619,"PoHelperOptions "),sg(),Tl(620,"code",25),iN(621," string"),sg()(),Tl(622,"td",21),iN(623,"-"),sg(),Tl(624,"td",22)(625,"em")(626,"strong"),iN(627,"(opcional)"),sg()(),Tl(628,"p"),iN(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(630,"code"),iN(631,"p-label"),sg(),iN(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(633,"code"),iN(634,"p-label"),sg(),iN(635,"."),sg(),Tl(636,"blockquote")(637,"p"),iN(638,"Para mais informa\xE7\xF5es acesse: "),Tl(639,"a",30),iN(640,"https://po-ui.io/documentation/po-helper"),sg(),iN(641,"."),sg()(),Tl(642,"blockquote")(643,"p"),iN(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(645,"code"),iN(646,"p-additional-help-tooltip"),sg(),iN(647," e "),Tl(648,"code"),iN(649,"p-additional-help"),sg(),iN(650,") ser\xE1 ignorado."),sg()()()(),Tl(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),iN(655," p-required"),Gl(656,"br"),sg()()(),Tl(657,"td",19)(658,"code",26),iN(659,"boolean"),sg()(),Tl(660,"td",21)(661,"p")(662,"code"),iN(663,"false"),sg()()(),Tl(664,"td",22)(665,"em")(666,"strong"),iN(667,"(opcional)"),sg()(),Tl(668,"p"),iN(669,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),iN(674," p-show-required"),Gl(675,"br"),sg()()(),Tl(676,"td",19)(677,"code",26),iN(678,"boolean"),sg()(),Tl(679,"td",21),iN(680,"-"),sg(),Tl(681,"td",22)(682,"p"),iN(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(684,"blockquote")(685,"p"),iN(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(687,"ul")(688,"li"),iN(689,"N\xE3o possuir "),Tl(690,"code"),iN(691,"p-help"),sg(),iN(692," e/ou "),Tl(693,"code"),iN(694,"p-label"),sg(),iN(695,"."),sg()()()(),Tl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),iN(700," p-size"),Gl(701,"br"),sg()()(),Tl(702,"td",19)(703,"code",25),iN(704,"string"),sg()(),Tl(705,"td",21)(706,"p")(707,"code"),iN(708,"medium"),sg()()(),Tl(709,"td",22)(710,"em")(711,"strong"),iN(712,"(opcional)"),sg()(),Tl(713,"p"),iN(714,"Define o tamanho dos checkboxes do componente:"),sg(),Tl(715,"ul")(716,"li")(717,"code"),iN(718,"small"),sg(),iN(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(720,"li")(721,"code"),iN(722,"medium"),sg(),iN(723,": 24x24."),sg()(),Tl(724,"blockquote")(725,"p"),iN(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(727,"code"),iN(728,"medium"),sg(),iN(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(730,"a",31),iN(731,"po-theme"),sg(),iN(732,"."),sg()()()()(),Tl(733,"h3",10),iN(734,"M\xE9todos"),sg(),Tl(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),iN(741," focus "),sg()()()()(),Tl(742,"tr",22)(743,"td",22)(744,"p"),iN(745,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(746,"p"),iN(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(748,"pre")(749,"code"),iN(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),sg()()()()(),Gl(751,"br"),Tl(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),iN(758," showAdditionalHelp "),sg()()()()(),Tl(759,"tr",22)(760,"td",22)(761,"p"),iN(762,"M\xE9todo que exibe "),Tl(763,"code"),iN(764,"p-helper"),sg(),iN(765," ou executa a a\xE7\xE3o definida em "),Tl(766,"code"),iN(767,"p-helper{eventOnClick}"),sg(),iN(768," ou em "),Tl(769,"code"),iN(770,"p-additionalHelp"),sg(),iN(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(772,"code"),iN(773,"p-keydown"),sg(),iN(774,"."),sg(),Tl(775,"blockquote")(776,"p"),iN(777,"Exibe ou oculta o conte\xFAdo do componente "),Tl(778,"code"),iN(779,"po-helper"),sg(),iN(780," quando o componente estiver com foco."),sg()(),Tl(781,"pre")(782,"code"),iN(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),sg()(),Tl(784,"pre")(785,"code"),iN(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(787,"br"),Tl(788,"h3"),iN(789,"Interfaces"),sg(),Tl(790,"h4",34)(791,"code",5),iN(792,"PoCheckboxGroupOption"),sg()(),Tl(793,"div",2)(794,"p"),iN(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),sg()(),Tl(796,"h4",10),iN(797,"Propriedades"),sg(),Tl(798,"table",11)(799,"tr",12)(800,"th",13),iN(801,"Nome"),sg(),Tl(802,"th",13),iN(803,"Tipo"),sg(),Tl(804,"th",13),iN(805,"Descri\xE7\xE3o"),sg()(),Tl(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),iN(810," disabled"),Gl(811,"br"),sg()()(),Tl(812,"td",19)(813,"code",26),iN(814,"boolean"),sg()(),Tl(815,"td",22)(816,"em")(817,"strong"),iN(818,"(opcional)"),sg()(),Tl(819,"p"),iN(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),sg(),Tl(821,"p"),iN(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),sg()()(),Tl(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),iN(827," label"),Gl(828,"br"),sg()()(),Tl(829,"td",19)(830,"code",25),iN(831,"string"),sg()(),Tl(832,"td",22)(833,"p"),iN(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),sg()()(),Tl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),iN(839," value"),Gl(840,"br"),sg()()(),Tl(841,"td",19)(842,"code",25),iN(843,"string"),sg()(),Tl(844,"td",22)(845,"p"),iN(846,"Valor retornado no model."),sg(),Tl(847,"p"),iN(848,"\xC9 poss\xEDvel usar os valores "),Tl(849,"code"),iN(850,"true"),sg(),iN(851," e "),Tl(852,"code"),iN(853,"false"),sg(),iN(854,", caso a propriedade "),Tl(855,"code"),iN(856,"p-indeterminate"),sg(),iN(857," esteja setada como "),Tl(858,"code"),iN(859,"true"),sg(),iN(860,`
passa a aceitar `),Tl(861,"code"),iN(862,"null"),sg(),iN(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),Tl(864,"code"),iN(865,"false"),sg(),iN(866,"."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-checkbox-group-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),sg()()()),p&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[lNe,Wme,jme,me,ce,be,he],encapsulation:2,changeDetection:1})}return a})();var qe=[{path:"",component:xe}],Ee=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[DL.forChild(qe),DL]})}return a})();var pt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue$1({imports:[ar,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};