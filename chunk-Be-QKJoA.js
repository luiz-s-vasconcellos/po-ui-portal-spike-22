import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,c9 as Qde,d2 as Uhe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,bc as Sx,W as we,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic"]],standalone:false,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&Hl(0,"po-password",0);},dependencies:[Uhe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Password Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-password-basic/sample-po-password-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-password-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs"]],standalone:false,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=gx();Cl(0,"po-password",1),gw("ngModelChange",function(r){return Jy(m),Zx(i.password,r)||(i.password=r),e_(r)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(r){return Jy(m),Zx(i.label,r)||(i.label=r),e_(r)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(r){return Jy(m),Zx(i.help,r)||(i.help=r),e_(r)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(r){return Jy(m),Zx(i.helperText,r)||(i.helperText=r),e_(r)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(r){return Jy(m),Zx(i.placeholder,r)||(i.placeholder=r),e_(r)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(r){return Jy(m),Zx(i.errorPattern,r)||(i.errorPattern=r),e_(r)}),og(),Z0(),Cl(13,"po-input",10),gw("ngModelChange",function(r){return Jy(m),Zx(i.pattern,r)||(i.pattern=r),e_(r)}),og(),Z0(),Cl(14,"po-number",11),gw("ngModelChange",function(r){return Jy(m),Zx(i.minlength,r)||(i.minlength=r),e_(r)}),og(),Z0(),Cl(15,"po-number",12),gw("ngModelChange",function(r){return Jy(m),Zx(i.maxlength,r)||(i.maxlength=r),e_(r)}),og(),Z0(),Cl(16,"po-checkbox-group",13),gw("ngModelChange",function(r){return Jy(m),Zx(i.properties,r)||(i.properties=r),e_(r)}),og(),Z0(),Cl(17,"po-radio-group",14),gw("ngModelChange",function(r){return Jy(m),Zx(i.size,r)||(i.size=r),e_(r)}),og(),Z0(),Cl(18,"div",2)(19,"po-button",15),dt("p-click",function(){return i.restore()}),og()()();}l&2&&(pw("ngModel",i.password),ZE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.password),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.errorPattern),X0(),Lp(),pw("ngModel",i.pattern),X0(),Lp(),pw("ngModel",i.minlength),X0(),Lp(),pw("ngModel",i.maxlength),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Uhe,Nde,sme],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Password Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-password-labs/sample-po-password-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-password-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return a})();var pe=(()=>{class a{poAlert=f(Qde);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()});}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset"]],standalone:false,features:[we([Qde])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=gx();Cl(0,"form",null,0)(2,"po-password",1),gw("ngModelChange",function(r){return Jy(m),Zx(i.currentPassword,r)||(i.currentPassword=r),e_(r)}),og(),Z0(),Cl(3,"po-password",2),gw("ngModelChange",function(r){return Jy(m),Zx(i.newPassword,r)||(i.newPassword=r),e_(r)}),og(),Z0(),Cl(4,"po-password",3),gw("ngModelChange",function(r){return Jy(m),Zx(i.confirmNewPassword,r)||(i.confirmNewPassword=r),e_(r)}),og(),Z0(),Cl(5,"div",4)(6,"po-button",5),dt("p-click",function(){return i.setPassword()}),og()()();}if(l&2){let m=Sx(1);Lp(2),pw("ngModel",i.currentPassword),ZE("p-help",i.help),X0(),Lp(),pw("ngModel",i.newPassword),ZE("p-disabled",i.currentPassword!==i.password),X0(),Lp(),pw("ngModel",i.confirmNewPassword),ZE("p-disabled",i.currentPassword!==i.password),X0(),Lp(2),ZE("p-disabled",m.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,Uhe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Password - Reset"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-password-reset/sample-po-password-reset.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-password-reset"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,pe],encapsulation:2})}return a})();var se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-doc"]],standalone:false,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoPasswordComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Cl(24,"p"),qx(25,"Importante:"),og(),Cl(26,"ul")(27,"li"),qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Cl(29,"h4"),qx(30,"Tokens customiz\xE1veis"),og(),Cl(31,"p"),qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(33,"br"),qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(35,"code"),qx(36,".po-input"),og()(),Cl(37,"blockquote")(38,"p"),qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Cl(40,"a",6),qx(41,"Grid System"),og(),qx(42,"."),og()(),Cl(43,"blockquote")(44,"p"),qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(46,"a",7),qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(48,"."),og()(),Cl(49,"table")(50,"thead")(51,"tr")(52,"th"),qx(53,"Propriedade"),og(),Cl(54,"th"),qx(55,"Descri\xE7\xE3o"),og(),Cl(56,"th"),qx(57,"Valor Padr\xE3o"),og()()(),Cl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),qx(62,"Default Values"),og()(),Hl(63,"td")(64,"td"),og(),Cl(65,"tr")(66,"td")(67,"code"),qx(68,"--font-family"),og()(),Cl(69,"td"),qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(71,"td")(72,"code"),qx(73,"var(--font-family-theme)"),og()()(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--font-size"),og()(),Cl(78,"td"),qx(79,"Tamanho da fonte"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--font-size-default)"),og()()(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--text-color-placeholder"),og()(),Cl(87,"td"),qx(88,"Cor do texto placeholder"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--color-neutral-light-30)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--color"),og()(),Cl(96,"td"),qx(97,"Cor pincipal do input"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--color-neutral-dark-70)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--background"),og()(),Cl(105,"td"),qx(106,"Cor de background"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--color-neutral-light-05)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--padding"),og()(),Cl(114,"td"),qx(115,"Preenchimento"),og(),Cl(116,"td")(117,"code"),qx(118,"0 0.5rem"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--text-color"),og()(),Cl(123,"td"),qx(124,"Cor do texto"),og(),Cl(125,"td")(126,"code"),qx(127,"var(--color-neutral-dark-90)"),og()()(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--field-container-title-justify"),og()(),Cl(132,"td"),qx(133,"Alinhamento horizontal do t\xEDtulo ("),Cl(134,"code"),qx(135,"justify-content"),og(),qx(136,")"),og(),Cl(137,"td")(138,"code"),qx(139,"space-between"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--field-container-title-flex"),og()(),Cl(144,"td"),qx(145,"Flex do t\xEDtulo ("),Cl(146,"code"),qx(147,"flex"),og(),qx(148,")"),og(),Cl(149,"td")(150,"code"),qx(151,"1 auto"),og()()(),Cl(152,"tr")(153,"td")(154,"strong"),qx(155,"Hover"),og()(),Hl(156,"td")(157,"td"),og(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--color-hover"),og()(),Cl(162,"td"),qx(163,"Cor principal no estado hover"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--color-brand-01-dark)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--background-hover"),og()(),Cl(171,"td"),qx(172,"Cor de background no estado hover"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-brand-01-lightest)"),og()()(),Cl(176,"tr")(177,"td")(178,"strong"),qx(179,"Focused"),og()(),Hl(180,"td")(181,"td"),og(),Cl(182,"tr")(183,"td")(184,"code"),qx(185,"--color-focused"),og()(),Cl(186,"td"),qx(187,"Cor principal no estado de focus"),og(),Cl(188,"td")(189,"code"),qx(190,"var(--color-action-default)"),og()()(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Disabled"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-disabled"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado disabled"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-neutral-light-30)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-disabled"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado disabled"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-neutral-light-20)"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--text-color-disabled"),og()(),Cl(228,"td"),qx(229,"Cor do texto no estado disabled"),og(),Cl(230,"td")(231,"code"),qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Cl(233,"p"),Hl(234,"br"),qx(235," O "),Cl(236,"code"),qx(237,"po-password"),og(),qx(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),og()(),Cl(239,"div",8)(240,"h4",9),qx(241,"Seletor"),og(),Cl(242,"pre",10),qx(243,`<po-password
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-hide-password-peek="boolean"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-upper-case="boolean" >
</po-password>
`),og()(),Cl(244,"h4",11),qx(245,"Propriedades"),og(),Cl(246,"table",12)(247,"tr",13)(248,"th",14),qx(249,"Nome"),og(),Cl(250,"th",14),qx(251,"Tipo"),og(),Cl(252,"th",14),qx(253,"Padr\xE3o"),og(),Cl(254,"th",14),qx(255,"Descri\xE7\xE3o"),og()(),Cl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),qx(260," (p-additional-help)"),Hl(261,"br"),og()(),Cl(262,"div",19),qx(263,"Deprecated"),og()(),Cl(264,"td",20)(265,"code",21),qx(266,"EventEmitter"),og()(),Cl(267,"td",22),qx(268,"-"),og(),Cl(269,"td",23)(270,"em")(271,"strong"),qx(272,"(opcional)"),og()(),Cl(273,"p"),qx(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(275,"blockquote")(276,"p"),qx(277,"Essa propriedade est\xE1 "),Cl(278,"strong"),qx(279,"depreciada"),og(),qx(280," e ser\xE1 removida na vers\xE3o "),Cl(281,"code"),qx(282,"23.x.x"),og(),qx(283,". Recomendamos utilizar a propriedade "),Cl(284,"code"),qx(285,"p-helper"),og(),qx(286," que oferece mais recursos e flexibilidade."),og()()()(),Cl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),qx(291," p-additional-help-tooltip"),Hl(292,"br"),og()(),Cl(293,"div",19),qx(294,"Deprecated"),og()(),Cl(295,"td",20)(296,"code",26),qx(297,"string"),og()(),Cl(298,"td",22),qx(299,"-"),og(),Cl(300,"td",23)(301,"em")(302,"strong"),qx(303,"(opcional)"),og()(),Cl(304,"p"),qx(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(306,"code"),qx(307,"po-helper"),og(),qx(308,`.
`),Cl(309,"strong"),qx(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(311,"blockquote")(312,"p"),qx(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(314,"blockquote")(315,"p"),qx(316,"Essa propriedade est\xE1 "),Cl(317,"strong"),qx(318,"depreciada"),og(),qx(319," e ser\xE1 removida na vers\xE3o "),Cl(320,"code"),qx(321,"23.x.x"),og(),qx(322,". Recomendamos utilizar a propriedade "),Cl(323,"code"),qx(324,"p-helper"),og(),qx(325," que oferece mais recursos e flexibilidade."),og()()()(),Cl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),qx(330," p-append-in-body"),Hl(331,"br"),og()()(),Cl(332,"td",20)(333,"code",27),qx(334,"boolean"),og()(),Cl(335,"td",22)(336,"p")(337,"code"),qx(338,"false"),og()()(),Cl(339,"td",23)(340,"em")(341,"strong"),qx(342,"(opcional)"),og()(),Cl(343,"p"),qx(344,"Define que o popover ("),Cl(345,"code"),qx(346,"p-helper"),og(),qx(347," e/ou "),Cl(348,"code"),qx(349,"p-error-limit"),og(),qx(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(351,"blockquote")(352,"p"),qx(353,"Quando utilizado com "),Cl(354,"code"),qx(355,"p-helper"),og(),qx(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),qx(361," p-auto-focus"),Hl(362,"br"),og()()(),Cl(363,"td",20)(364,"code",27),qx(365,"boolean"),og()(),Cl(366,"td",22)(367,"p")(368,"code"),qx(369,"false"),og()()(),Cl(370,"td",23)(371,"em")(372,"strong"),qx(373,"(opcional)"),og()(),Cl(374,"p"),qx(375,"Aplica foco no elemento ao ser iniciado."),og(),Cl(376,"blockquote")(377,"p"),qx(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),qx(383," (p-blur)"),Hl(384,"br"),og()()(),Cl(385,"td",20)(386,"code",21),qx(387,"EventEmitter"),og()(),Cl(388,"td",22),qx(389,"-"),og(),Cl(390,"td",23)(391,"em")(392,"strong"),qx(393,"(opcional)"),og()(),Cl(394,"p"),qx(395,"Evento disparado ao sair do campo."),og()()(),Cl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),qx(400," (p-change)"),Hl(401,"br"),og()()(),Cl(402,"td",20)(403,"code",21),qx(404,"EventEmitter"),og()(),Cl(405,"td",22),qx(406,"-"),og(),Cl(407,"td",23)(408,"em")(409,"strong"),qx(410,"(opcional)"),og()(),Cl(411,"p"),qx(412,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Cl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),qx(417," (p-change-model)"),Hl(418,"br"),og()()(),Cl(419,"td",20)(420,"code",21),qx(421,"EventEmitter"),og()(),Cl(422,"td",22),qx(423,"-"),og(),Cl(424,"td",23)(425,"em")(426,"strong"),qx(427,"(opcional)"),og()(),Cl(428,"p"),qx(429,"Evento disparado ao alterar valor do model."),og()()(),Cl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),qx(434,"p-clean"),Hl(435,"br"),og()()(),Cl(436,"td",20)(437,"code",27),qx(438,"boolean"),og()(),Cl(439,"td",22),qx(440,"-"),og(),Cl(441,"td",23)(442,"em")(443,"strong"),qx(444,"(opcional)"),og()(),Cl(445,"p"),qx(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Cl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),qx(451," p-compact-label"),Hl(452,"br"),og()()(),Cl(453,"td",20)(454,"code",27),qx(455,"boolean"),og()(),Cl(456,"td",22)(457,"p")(458,"code"),qx(459,"false"),og()()(),Cl(460,"td",23)(461,"em")(462,"strong"),qx(463,"(opcional)"),og()(),Cl(464,"p"),qx(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(466,"p"),qx(467,"Quando habilitado ("),Cl(468,"code"),qx(469,"true"),og(),qx(470,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(471,"ul")(472,"li")(473,"code"),qx(474,"po-label"),og()(),Cl(475,"li")(476,"code"),qx(477,"p-requirement (showRequired)"),og()(),Cl(478,"li")(479,"code"),qx(480,"po-helper"),og()()(),Cl(481,"p"),qx(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(483,"p"),qx(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(485,"ul")(486,"li")(487,"code"),qx(488,"--field-container-title-justify"),og()(),Cl(489,"li")(490,"code"),qx(491,"--field-container-title-flex"),og()()(),Cl(492,"p"),qx(493,"Exemplo:"),og(),Cl(494,"pre")(495,"code"),qx(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(497,"p"),qx(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),qx(503,"p-disabled"),Hl(504,"br"),og()()(),Cl(505,"td",20)(506,"code",27),qx(507,"boolean"),og()(),Cl(508,"td",22)(509,"p")(510,"code"),qx(511,"false"),og()()(),Cl(512,"td",23)(513,"em")(514,"strong"),qx(515,"(opcional)"),og()(),Cl(516,"p"),qx(517,"Se verdadeiro, desabilita o campo."),og()()(),Cl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),qx(522," p-emit-all-changes"),Hl(523,"br"),og()()(),Cl(524,"td",20)(525,"code",27),qx(526,"boolean"),og()(),Cl(527,"td",22)(528,"p")(529,"code"),qx(530,"false"),og()()(),Cl(531,"td",23)(532,"em")(533,"strong"),qx(534,"(opcional)"),og()(),Cl(535,"p"),qx(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Cl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),qx(541," (p-enter)"),Hl(542,"br"),og()()(),Cl(543,"td",20)(544,"code",21),qx(545,"EventEmitter"),og()(),Cl(546,"td",22),qx(547,"-"),og(),Cl(548,"td",23)(549,"em")(550,"strong"),qx(551,"(opcional)"),og()(),Cl(552,"p"),qx(553,"Evento disparado ao entrar do campo."),og()()(),Cl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),qx(558," p-error-async-properties"),Hl(559,"br"),og()()(),Cl(560,"td",20)(561,"code",28),qx(562,"ErrorAsyncProperties"),og()(),Cl(563,"td",22),qx(564,"-"),og(),Cl(565,"td",23)(566,"em")(567,"strong"),qx(568,"(opcional)"),og()(),Cl(569,"p"),qx(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Cl(571,"code"),qx(572,"Reactive Forms"),og(),qx(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Cl(574,"code"),qx(575,"asyncValidators"),og(),qx(576,"."),og()()(),Cl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),qx(581," p-error-limit"),Hl(582,"br"),og()()(),Cl(583,"td",20)(584,"code",27),qx(585,"boolean"),og()(),Cl(586,"td",22)(587,"p")(588,"code"),qx(589,"false"),og()()(),Cl(590,"td",23)(591,"em")(592,"strong"),qx(593,"(opcional)"),og()(),Cl(594,"p"),qx(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(596,"blockquote")(597,"p"),qx(598,"Caso essa propriedade seja definida como "),Cl(599,"code"),qx(600,"true"),og(),qx(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),qx(606," p-error-pattern"),Hl(607,"br"),og()()(),Cl(608,"td",20)(609,"code",26),qx(610,"string"),og()(),Cl(611,"td",22),qx(612,"-"),og(),Cl(613,"td",23)(614,"em")(615,"strong"),qx(616,"(opcional)"),og()(),Cl(617,"p"),qx(618,"Mensagem que ser\xE1 apresentada quando o "),Cl(619,"code"),qx(620,"pattern"),og(),qx(621," ou a m\xE1scara n\xE3o for satisfeita."),og(),Cl(622,"blockquote")(623,"p"),qx(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Cl(625,"code"),qx(626,"p-required-field-error-message"),og(),qx(627," em conjunto."),og()()()(),Cl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),qx(632," p-help"),Hl(633,"br"),og()()(),Cl(634,"td",20)(635,"code",26),qx(636,"string"),og()(),Cl(637,"td",22),qx(638,"-"),og(),Cl(639,"td",23)(640,"em")(641,"strong"),qx(642,"(opcional)"),og()(),Cl(643,"p"),qx(644,"Texto de apoio do campo."),og()()(),Cl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),qx(649," p-hide-password-peek"),Hl(650,"br"),og()()(),Cl(651,"td",20)(652,"code",27),qx(653,"boolean"),og()(),Cl(654,"td",22)(655,"p")(656,"code"),qx(657,"false"),og()()(),Cl(658,"td",23)(659,"em")(660,"strong"),qx(661,"(opcional)"),og()(),Cl(662,"p"),qx(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),og()()(),Cl(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),qx(668," p-icon"),Hl(669,"br"),og()()(),Cl(670,"td",20)(671,"code",26),qx(672,"string "),og(),Cl(673,"code",29),qx(674," TemplateRef<void>"),og()(),Cl(675,"td",22),qx(676,"-"),og(),Cl(677,"td",23)(678,"em")(679,"strong"),qx(680,"(opcional)"),og()(),Cl(681,"p"),qx(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(683,"p"),qx(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(685,"a",30),qx(686,"Biblioteca de \xEDcones"),og(),qx(687,". conforme exemplo abaixo:"),og(),Cl(688,"pre")(689,"code"),qx(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Cl(691,"p"),qx(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(693,"em"),qx(694,"Font Awesome"),og(),qx(695,", da seguinte forma:"),og(),Cl(696,"pre")(697,"code"),qx(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Cl(699,"p"),qx(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(701,"code"),qx(702,"TemplateRef"),og(),qx(703,", conforme exemplo abaixo:"),og(),Cl(704,"pre")(705,"code"),qx(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(707,"blockquote")(708,"p"),qx(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(710,"code"),qx(711,"font-size: inherit"),og(),qx(712," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),qx(717," (p-keydown)"),Hl(718,"br"),og()()(),Cl(719,"td",20)(720,"code",21),qx(721,"EventEmitter"),og()(),Cl(722,"td",22),qx(723,"-"),og(),Cl(724,"td",23)(725,"em")(726,"strong"),qx(727,"(opcional)"),og()(),Cl(728,"p"),qx(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(730,"code"),qx(731,"KeyboardEvent"),og(),qx(732," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),qx(737," p-label"),Hl(738,"br"),og()()(),Cl(739,"td",20)(740,"code",26),qx(741,"string"),og()(),Cl(742,"td",22),qx(743,"-"),og(),Cl(744,"td",23)(745,"em")(746,"strong"),qx(747,"(opcional)"),og()(),Cl(748,"p"),qx(749,"R\xF3tulo do campo."),og()()(),Cl(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),qx(754," p-label-text-wrap"),Hl(755,"br"),og()()(),Cl(756,"td",20)(757,"code",27),qx(758,"boolean"),og()(),Cl(759,"td",22)(760,"p")(761,"code"),qx(762,"false"),og()()(),Cl(763,"td",23)(764,"em")(765,"strong"),qx(766,"(opcional)"),og()(),Cl(767,"p"),qx(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(769,"code"),qx(770,"p-label"),og(),qx(771,". Quando "),Cl(772,"code"),qx(773,"p-label-text-wrap"),og(),qx(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),qx(779," p-loading"),Hl(780,"br"),og()()(),Cl(781,"td",20)(782,"code",27),qx(783,"boolean"),og()(),Cl(784,"td",22)(785,"p")(786,"code"),qx(787,"false"),og()()(),Cl(788,"td",23)(789,"em")(790,"strong"),qx(791,"(opcional)"),og()(),Cl(792,"p"),qx(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),qx(798,"p-mask"),Hl(799,"br"),og()()(),Cl(800,"td",20)(801,"code",26),qx(802,"string"),og()(),Cl(803,"td",22),qx(804,"-"),og(),Cl(805,"td",23)(806,"em")(807,"strong"),qx(808,"(opcional)"),og()(),Cl(809,"p"),qx(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Cl(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),qx(815,"p-mask-format-model"),Hl(816,"br"),og()()(),Cl(817,"td",20)(818,"code",27),qx(819,"boolean"),og()(),Cl(820,"td",22)(821,"p")(822,"code"),qx(823,"false"),og()()(),Cl(824,"td",23)(825,"em")(826,"strong"),qx(827,"(opcional)"),og()(),Cl(828,"p"),qx(829,"Indica se o "),Cl(830,"code"),qx(831,"model"),og(),qx(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Cl(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),qx(837," p-mask-no-length-validation"),Hl(838,"br"),og()()(),Cl(839,"td",20)(840,"code",27),qx(841,"boolean"),og()(),Cl(842,"td",22)(843,"p")(844,"code"),qx(845,"false"),og()()(),Cl(846,"td",23)(847,"p"),qx(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(849,"code"),qx(850,"minLength"),og(),qx(851,") e m\xE1ximo ("),Cl(852,"code"),qx(853,"maxLength"),og(),qx(854,") quando h\xE1 uma m\xE1scara ("),Cl(855,"code"),qx(856,"p-mask"),og(),qx(857,") definida."),og(),Cl(858,"ul")(859,"li"),qx(860,"Quando "),Cl(861,"code"),qx(862,"true"),og(),qx(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(864,"li"),qx(865,"Quando "),Cl(866,"code"),qx(867,"false"),og(),qx(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(869,"blockquote")(870,"p"),qx(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(872,"code"),qx(873,"p-mask-format-model"),og(),qx(874,"."),og()(),Cl(875,"p"),qx(876,"Exemplo:"),og(),Cl(877,"pre")(878,"code"),qx(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Cl(880,"ul")(881,"li"),qx(882,"Entrada: "),Cl(883,"code"),qx(884,"123-456"),og(),qx(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Cl(886,"code"),qx(887,"-"),og(),qx(888,"."),og()()()(),Cl(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),qx(893," p-maxlength"),Hl(894,"br"),og()()(),Cl(895,"td",20)(896,"code",31),qx(897,"number"),og()(),Cl(898,"td",22),qx(899,"-"),og(),Cl(900,"td",23)(901,"em")(902,"strong"),qx(903,"(opcional)"),og()(),Cl(904,"p"),qx(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Cl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),qx(910," p-minlength"),Hl(911,"br"),og()()(),Cl(912,"td",20)(913,"code",31),qx(914,"number"),og()(),Cl(915,"td",22),qx(916,"-"),og(),Cl(917,"td",23)(918,"em")(919,"strong"),qx(920,"(opcional)"),og()(),Cl(921,"p"),qx(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Cl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),qx(927," name"),Hl(928,"br"),og()()(),Cl(929,"td",20)(930,"code",26),qx(931,"string"),og()(),Cl(932,"td",22),qx(933,"-"),og(),Cl(934,"td",23)(935,"p"),qx(936,"Nome e identificador do campo."),og()()(),Cl(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),qx(941," p-no-autocomplete"),Hl(942,"br"),og()()(),Cl(943,"td",20)(944,"code",27),qx(945,"boolean"),og()(),Cl(946,"td",22)(947,"p")(948,"code"),qx(949,"false"),og()()(),Cl(950,"td",23)(951,"em")(952,"strong"),qx(953,"(opcional)"),og()(),Cl(954,"p"),qx(955,"Define a propriedade nativa "),Cl(956,"code"),qx(957,"autocomplete"),og(),qx(958," do campo como "),Cl(959,"code"),qx(960,"off"),og(),qx(961,"."),og(),Cl(962,"blockquote")(963,"p"),qx(964,"No componente "),Cl(965,"code"),qx(966,"po-password"),og(),qx(967," ser\xE1 definido como "),Cl(968,"code"),qx(969,"new-password"),og(),qx(970,"."),og()(),Cl(971,"p"),qx(972,"Nos componentes "),Cl(973,"code"),qx(974,"po-password"),og(),qx(975," e "),Cl(976,"code"),qx(977,"po-login"),og(),qx(978," o valor padr\xE3o ser\xE1 "),Cl(979,"code"),qx(980,"true"),og(),qx(981,"."),og()()(),Cl(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),qx(986," p-optional"),Hl(987,"br"),og()()(),Cl(988,"td",20)(989,"code",27),qx(990,"boolean"),og()(),Cl(991,"td",22)(992,"p")(993,"code"),qx(994,"false"),og()()(),Cl(995,"td",23)(996,"em")(997,"strong"),qx(998,"(opcional)"),og()(),Cl(999,"p"),qx(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(1001,"blockquote")(1002,"p"),qx(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1004,"ul")(1005,"li"),qx(1006,"O campo conter "),Cl(1007,"code"),qx(1008,"p-required"),og(),qx(1009,";"),og(),Cl(1010,"li"),qx(1011,"N\xE3o possuir "),Cl(1012,"code"),qx(1013,"p-help"),og(),qx(1014," e/ou "),Cl(1015,"code"),qx(1016,"p-label"),og(),qx(1017,"."),og()()()(),Cl(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),qx(1022,"p-pattern"),Hl(1023,"br"),og()()(),Cl(1024,"td",20)(1025,"code",26),qx(1026,"string"),og()(),Cl(1027,"td",22),qx(1028,"-"),og(),Cl(1029,"td",23)(1030,"em")(1031,"strong"),qx(1032,"(opcional)"),og()(),Cl(1033,"p"),qx(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Cl(1035,"code"),qx(1036,"(p-mask)"),og(),qx(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Cl(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),qx(1042," p-placeholder"),Hl(1043,"br"),og()()(),Cl(1044,"td",20)(1045,"code",26),qx(1046,"string"),og()(),Cl(1047,"td",22)(1048,"p"),qx(1049,"''"),og()(),Cl(1050,"td",23)(1051,"em")(1052,"strong"),qx(1053,"(opcional)"),og()(),Cl(1054,"p"),qx(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),qx(1060," p-helper"),Hl(1061,"br"),og()()(),Cl(1062,"td",20)(1063,"code",32),qx(1064,"PoHelperOptions "),og(),Cl(1065,"code",26),qx(1066," string"),og()(),Cl(1067,"td",22),qx(1068,"-"),og(),Cl(1069,"td",23)(1070,"em")(1071,"strong"),qx(1072,"(opcional)"),og()(),Cl(1073,"p"),qx(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1075,"code"),qx(1076,"p-label"),og(),qx(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1078,"code"),qx(1079,"p-label"),og(),qx(1080,"."),og(),Cl(1081,"blockquote")(1082,"p"),qx(1083,"Para mais informa\xE7\xF5es acesse: "),Cl(1084,"a",33),qx(1085,"https://po-ui.io/documentation/po-helper"),og(),qx(1086,"."),og()(),Cl(1087,"blockquote")(1088,"p"),qx(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1090,"code"),qx(1091,"p-additional-help-tooltip"),og(),qx(1092," e "),Cl(1093,"code"),qx(1094,"p-additional-help"),og(),qx(1095,") ser\xE1 ignorado."),og()()()(),Cl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),qx(1100,"p-readonly"),Hl(1101,"br"),og()()(),Cl(1102,"td",20)(1103,"code",27),qx(1104,"boolean"),og()(),Cl(1105,"td",22),qx(1106,"-"),og(),Cl(1107,"td",23)(1108,"em")(1109,"strong"),qx(1110,"(opcional)"),og()(),Cl(1111,"p"),qx(1112,"Indica que o campo ser\xE1 somente leitura."),og()()(),Cl(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),qx(1117,"p-required"),Hl(1118,"br"),og()()(),Cl(1119,"td",20)(1120,"code",27),qx(1121,"boolean"),og()(),Cl(1122,"td",22)(1123,"p")(1124,"code"),qx(1125,"false"),og()()(),Cl(1126,"td",23)(1127,"em")(1128,"strong"),qx(1129,"(opcional)"),og()(),Cl(1130,"p"),qx(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1132,"blockquote")(1133,"p"),qx(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1135,"code"),qx(1136,"(p-disabled)"),og(),qx(1137,"."),og()()()(),Cl(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),qx(1142," p-required-field-error-message"),Hl(1143,"br"),og()()(),Cl(1144,"td",20)(1145,"code",27),qx(1146,"boolean"),og()(),Cl(1147,"td",22)(1148,"p")(1149,"code"),qx(1150,"false"),og()()(),Cl(1151,"td",23)(1152,"em")(1153,"strong"),qx(1154,"(opcional)"),og()(),Cl(1155,"p"),qx(1156,"Exibe a mensagem setada na propriedade "),Cl(1157,"code"),qx(1158,"p-error-pattern"),og(),qx(1159," se o campo estiver vazio e for requerido."),og(),Cl(1160,"blockquote")(1161,"p"),qx(1162,"Necess\xE1rio que a propriedade "),Cl(1163,"code"),qx(1164,"p-required"),og(),qx(1165," esteja habilitada."),og()()()(),Cl(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),qx(1170," p-show-required"),Hl(1171,"br"),og()()(),Cl(1172,"td",20)(1173,"code",27),qx(1174,"boolean"),og()(),Cl(1175,"td",22),qx(1176,"-"),og(),Cl(1177,"td",23)(1178,"p"),qx(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1180,"blockquote")(1181,"p"),qx(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1183,"ul")(1184,"li"),qx(1185,"N\xE3o possuir "),Cl(1186,"code"),qx(1187,"p-help"),og(),qx(1188," e/ou "),Cl(1189,"code"),qx(1190,"p-label"),og(),qx(1191,"."),og()()()(),Cl(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),qx(1196," p-size"),Hl(1197,"br"),og()()(),Cl(1198,"td",20)(1199,"code",26),qx(1200,"string"),og()(),Cl(1201,"td",22)(1202,"p")(1203,"code"),qx(1204,"medium"),og()()(),Cl(1205,"td",23)(1206,"em")(1207,"strong"),qx(1208,"(opcional)"),og()(),Cl(1209,"p"),qx(1210,"Define o tamanho do componente:"),og(),Cl(1211,"ul")(1212,"li")(1213,"code"),qx(1214,"small"),og(),qx(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1216,"li")(1217,"code"),qx(1218,"medium"),og(),qx(1219,": altura do input como 44px."),og()(),Cl(1220,"blockquote")(1221,"p"),qx(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1223,"code"),qx(1224,"medium"),og(),qx(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1226,"a",34),qx(1227,"po-theme"),og(),qx(1228,"."),og()()()(),Cl(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),qx(1233," p-upper-case"),Hl(1234,"br"),og()()(),Cl(1235,"td",20)(1236,"code",27),qx(1237,"boolean"),og()(),Cl(1238,"td",22),qx(1239,"-"),og(),Cl(1240,"td",23)(1241,"p"),qx(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Cl(1243,"h3",11),qx(1244,"M\xE9todos"),og(),Cl(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),qx(1251," showAdditionalHelp "),og()()()()(),Cl(1252,"tr",23)(1253,"td",23)(1254,"p"),qx(1255,"M\xE9todo que exibe "),Cl(1256,"code"),qx(1257,"p-helper"),og(),qx(1258," ou executa a a\xE7\xE3o definida em "),Cl(1259,"code"),qx(1260,"p-helper{eventOnClick}"),og(),qx(1261," ou em "),Cl(1262,"code"),qx(1263,"p-additionalHelp"),og(),qx(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1265,"code"),qx(1266,"p-keydown"),og(),qx(1267,"."),og(),Cl(1268,"blockquote")(1269,"p"),qx(1270,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1271,"code"),qx(1272,"po-helper"),og(),qx(1273," quando o componente estiver com foco."),og()(),Cl(1274,"pre")(1275,"code"),qx(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Cl(1277,"pre")(1278,"code"),qx(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1280,"br"),Cl(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),qx(1287," focus "),og()()()()(),Cl(1288,"tr",23)(1289,"td",23)(1290,"p"),qx(1291,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1292,"p"),qx(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1294,"pre")(1295,"code"),qx(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Hl(1297,"br"),Cl(1298,"h3"),qx(1299,"Interfaces"),og(),Cl(1300,"h4",37)(1301,"code",5),qx(1302,"ErrorAsyncProperties"),og()(),Cl(1303,"div",2)(1304,"p"),qx(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Cl(1306,"h4",11),qx(1307,"Propriedades"),og(),Cl(1308,"table",12)(1309,"tr",13)(1310,"th",14),qx(1311,"Nome"),og(),Cl(1312,"th",14),qx(1313,"Tipo"),og(),Cl(1314,"th",14),qx(1315,"Descri\xE7\xE3o"),og()(),Cl(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),qx(1320," errorAsync"),Hl(1321,"br"),og()()(),Cl(1322,"td",20)(1323,"code",38),qx(1324,"(value) => Observable<boolean>"),og()(),Cl(1325,"td",23)(1326,"p"),qx(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(1328,"code"),qx(1329,"change"),og(),qx(1330," ou "),Cl(1331,"code"),qx(1332,"change-model"),og(),qx(1333,", dependendo do valor da propriedade "),Cl(1334,"code"),qx(1335,"triggerMode"),og(),qx(1336,"."),og()()(),Cl(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),qx(1341," triggerMode"),Hl(1342,"br"),og()()(),Cl(1343,"td",20)(1344,"code",39),qx(1345,"'change' "),og(),Cl(1346,"code",40),qx(1347," 'changeModel'"),og()(),Cl(1348,"td",23)(1349,"em")(1350,"strong"),qx(1351,"(opcional)"),og()(),Cl(1352,"p"),qx(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Cl(1354,"code"),qx(1355,"change"),og(),qx(1356," ou "),Cl(1357,"code"),qx(1358,"change-model"),og(),qx(1359,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-password-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,re,de,me,se],encapsulation:2})}return a})();var ye=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[bL.forChild(ye),bL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[ca,ue]})}return a})();export{$e as DocPoPasswordModule};