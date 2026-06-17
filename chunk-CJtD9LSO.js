import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,cZ as Whe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,bd as xx,X as we,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic"]],standalone:false,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&Wl(0,"po-password",0);},dependencies:[Whe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Password Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-password-basic/sample-po-password-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-password-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs"]],standalone:false,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=Ex();Sl(0,"po-password",1),Ew("ngModelChange",function(r){return Xy(m),tN(i.password,r)||(i.password=r),Qy(r)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Xy(m),tN(i.label,r)||(i.label=r),Qy(r)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(r){return Xy(m),tN(i.help,r)||(i.help=r),Qy(r)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(r){return Xy(m),tN(i.helperText,r)||(i.helperText=r),Qy(r)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(r){return Xy(m),tN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(r){return Xy(m),tN(i.errorPattern,r)||(i.errorPattern=r),Qy(r)}),sg(),JA(),Sl(13,"po-input",10),Ew("ngModelChange",function(r){return Xy(m),tN(i.pattern,r)||(i.pattern=r),Qy(r)}),sg(),JA(),Sl(14,"po-number",11),Ew("ngModelChange",function(r){return Xy(m),tN(i.minlength,r)||(i.minlength=r),Qy(r)}),sg(),JA(),Sl(15,"po-number",12),Ew("ngModelChange",function(r){return Xy(m),tN(i.maxlength,r)||(i.maxlength=r),Qy(r)}),sg(),JA(),Sl(16,"po-checkbox-group",13),Ew("ngModelChange",function(r){return Xy(m),tN(i.properties,r)||(i.properties=r),Qy(r)}),sg(),JA(),Sl(17,"po-radio-group",14),Ew("ngModelChange",function(r){return Xy(m),tN(i.size,r)||(i.size=r),Qy(r)}),sg(),JA(),Sl(18,"div",2)(19,"po-button",15),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Dw("ngModel",i.password),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),t0(),Vp(3),tw("p-value",i.password),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.pattern),t0(),Vp(),Dw("ngModel",i.minlength),t0(),Vp(),Dw("ngModel",i.maxlength),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Whe,Pde,Qhe],encapsulation:2,changeDetection:1})}return a})();var he=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Password Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-password-labs/sample-po-password-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-password
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-password-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return a})();var pe=(()=>{class a{poAlert=f(zde);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()});}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset"]],standalone:false,features:[we([zde])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=Ex();Sl(0,"form",null,0)(2,"po-password",1),Ew("ngModelChange",function(r){return Xy(m),tN(i.currentPassword,r)||(i.currentPassword=r),Qy(r)}),sg(),JA(),Sl(3,"po-password",2),Ew("ngModelChange",function(r){return Xy(m),tN(i.newPassword,r)||(i.newPassword=r),Qy(r)}),sg(),JA(),Sl(4,"po-password",3),Ew("ngModelChange",function(r){return Xy(m),tN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Qy(r)}),sg(),JA(),Sl(5,"div",4)(6,"po-button",5),ht("p-click",function(){return i.setPassword()}),sg()()();}if(l&2){let m=xx(1);Vp(2),Dw("ngModel",i.currentPassword),tw("p-help",i.help),t0(),Vp(),Dw("ngModel",i.newPassword),tw("p-disabled",i.currentPassword!==i.password),t0(),Vp(),Dw("ngModel",i.confirmNewPassword),tw("p-disabled",i.currentPassword!==i.password),t0(),Vp(2),tw("p-disabled",m.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,Whe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Password - Reset"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-password-reset/sample-po-password-reset.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #passwordForm="ngForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-password-reset"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return a})();var se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-doc"]],standalone:false,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoPasswordComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Sl(24,"p"),Jx(25,"Importante:"),sg(),Sl(26,"ul")(27,"li"),Jx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Sl(29,"h4"),Jx(30,"Tokens customiz\xE1veis"),sg(),Sl(31,"p"),Jx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),Jx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),Jx(36,".po-input"),sg()(),Sl(37,"blockquote")(38,"p"),Jx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),Jx(41,"Grid System"),sg(),Jx(42,"."),sg()(),Sl(43,"blockquote")(44,"p"),Jx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),Jx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(48,"."),sg()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),Jx(53,"Propriedade"),sg(),Sl(54,"th"),Jx(55,"Descri\xE7\xE3o"),sg(),Sl(56,"th"),Jx(57,"Valor Padr\xE3o"),sg()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Jx(62,"Default Values"),sg()(),Wl(63,"td")(64,"td"),sg(),Sl(65,"tr")(66,"td")(67,"code"),Jx(68,"--font-family"),sg()(),Sl(69,"td"),Jx(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(71,"td")(72,"code"),Jx(73,"var(--font-family-theme)"),sg()()(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-size"),sg()(),Sl(78,"td"),Jx(79,"Tamanho da fonte"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-size-default)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--text-color-placeholder"),sg()(),Sl(87,"td"),Jx(88,"Cor do texto placeholder"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--color-neutral-light-30)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--color"),sg()(),Sl(96,"td"),Jx(97,"Cor pincipal do input"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--color-neutral-dark-70)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--background"),sg()(),Sl(105,"td"),Jx(106,"Cor de background"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--color-neutral-light-05)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--padding"),sg()(),Sl(114,"td"),Jx(115,"Preenchimento"),sg(),Sl(116,"td")(117,"code"),Jx(118,"0 0.5rem"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--text-color"),sg()(),Sl(123,"td"),Jx(124,"Cor do texto"),sg(),Sl(125,"td")(126,"code"),Jx(127,"var(--color-neutral-dark-90)"),sg()()(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--field-container-title-justify"),sg()(),Sl(132,"td"),Jx(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),Jx(135,"justify-content"),sg(),Jx(136,")"),sg(),Sl(137,"td")(138,"code"),Jx(139,"space-between"),sg()()(),Sl(140,"tr")(141,"td")(142,"code"),Jx(143,"--field-container-title-flex"),sg()(),Sl(144,"td"),Jx(145,"Flex do t\xEDtulo ("),Sl(146,"code"),Jx(147,"flex"),sg(),Jx(148,")"),sg(),Sl(149,"td")(150,"code"),Jx(151,"1 auto"),sg()()(),Sl(152,"tr")(153,"td")(154,"strong"),Jx(155,"Hover"),sg()(),Wl(156,"td")(157,"td"),sg(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--color-hover"),sg()(),Sl(162,"td"),Jx(163,"Cor principal no estado hover"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--color-brand-01-dark)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--background-hover"),sg()(),Sl(171,"td"),Jx(172,"Cor de background no estado hover"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-brand-01-lightest)"),sg()()(),Sl(176,"tr")(177,"td")(178,"strong"),Jx(179,"Focused"),sg()(),Wl(180,"td")(181,"td"),sg(),Sl(182,"tr")(183,"td")(184,"code"),Jx(185,"--color-focused"),sg()(),Sl(186,"td"),Jx(187,"Cor principal no estado de focus"),sg(),Sl(188,"td")(189,"code"),Jx(190,"var(--color-action-default)"),sg()()(),Sl(191,"tr")(192,"td")(193,"code"),Jx(194,"--outline-color-focused"),sg()(),Sl(195,"td"),Jx(196,"Cor do outline do estado de focus"),sg(),Sl(197,"td")(198,"code"),Jx(199,"var(--color-action-focus)"),sg()()(),Sl(200,"tr")(201,"td")(202,"strong"),Jx(203,"Disabled"),sg()(),Wl(204,"td")(205,"td"),sg(),Sl(206,"tr")(207,"td")(208,"code"),Jx(209,"--color-disabled"),sg()(),Sl(210,"td"),Jx(211,"Cor principal no estado disabled"),sg(),Sl(212,"td")(213,"code"),Jx(214,"var(--color-neutral-light-30)"),sg()()(),Sl(215,"tr")(216,"td")(217,"code"),Jx(218,"--background-disabled"),sg()(),Sl(219,"td"),Jx(220,"Cor de background no estado disabled"),sg(),Sl(221,"td")(222,"code"),Jx(223,"var(--color-neutral-light-20)"),sg()()(),Sl(224,"tr")(225,"td")(226,"code"),Jx(227,"--text-color-disabled"),sg()(),Sl(228,"td"),Jx(229,"Cor do texto no estado disabled"),sg(),Sl(230,"td")(231,"code"),Jx(232,"var(--color-neutral-dark-70)"),sg()()()()(),Sl(233,"p"),Wl(234,"br"),Jx(235," O "),Sl(236,"code"),Jx(237,"po-password"),sg(),Jx(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),sg()(),Sl(239,"div",8)(240,"h4",9),Jx(241,"Seletor"),sg(),Sl(242,"pre",10),Jx(243,`<po-password
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
`),sg()(),Sl(244,"h4",11),Jx(245,"Propriedades"),sg(),Sl(246,"table",12)(247,"tr",13)(248,"th",14),Jx(249,"Nome"),sg(),Sl(250,"th",14),Jx(251,"Tipo"),sg(),Sl(252,"th",14),Jx(253,"Padr\xE3o"),sg(),Sl(254,"th",14),Jx(255,"Descri\xE7\xE3o"),sg()(),Sl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),Jx(260," (p-additional-help)"),Wl(261,"br"),sg()(),Sl(262,"div",19),Jx(263,"Deprecated"),sg()(),Sl(264,"td",20)(265,"code",21),Jx(266,"EventEmitter"),sg()(),Sl(267,"td",22),Jx(268,"-"),sg(),Sl(269,"td",23)(270,"em")(271,"strong"),Jx(272,"(opcional)"),sg()(),Sl(273,"p"),Jx(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(275,"blockquote")(276,"p"),Jx(277,"Essa propriedade est\xE1 "),Sl(278,"strong"),Jx(279,"depreciada"),sg(),Jx(280," e ser\xE1 removida na vers\xE3o "),Sl(281,"code"),Jx(282,"23.x.x"),sg(),Jx(283,". Recomendamos utilizar a propriedade "),Sl(284,"code"),Jx(285,"p-helper"),sg(),Jx(286," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),Jx(291," p-additional-help-tooltip"),Wl(292,"br"),sg()(),Sl(293,"div",19),Jx(294,"Deprecated"),sg()(),Sl(295,"td",20)(296,"code",26),Jx(297,"string"),sg()(),Sl(298,"td",22),Jx(299,"-"),sg(),Sl(300,"td",23)(301,"em")(302,"strong"),Jx(303,"(opcional)"),sg()(),Sl(304,"p"),Jx(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(306,"code"),Jx(307,"po-helper"),sg(),Jx(308,`.
`),Sl(309,"strong"),Jx(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(311,"blockquote")(312,"p"),Jx(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(314,"blockquote")(315,"p"),Jx(316,"Essa propriedade est\xE1 "),Sl(317,"strong"),Jx(318,"depreciada"),sg(),Jx(319," e ser\xE1 removida na vers\xE3o "),Sl(320,"code"),Jx(321,"23.x.x"),sg(),Jx(322,". Recomendamos utilizar a propriedade "),Sl(323,"code"),Jx(324,"p-helper"),sg(),Jx(325," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),Jx(330," p-append-in-body"),Wl(331,"br"),sg()()(),Sl(332,"td",20)(333,"code",27),Jx(334,"boolean"),sg()(),Sl(335,"td",22)(336,"p")(337,"code"),Jx(338,"false"),sg()()(),Sl(339,"td",23)(340,"em")(341,"strong"),Jx(342,"(opcional)"),sg()(),Sl(343,"p"),Jx(344,"Define que o popover ("),Sl(345,"code"),Jx(346,"p-helper"),sg(),Jx(347," e/ou "),Sl(348,"code"),Jx(349,"p-error-limit"),sg(),Jx(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(351,"blockquote")(352,"p"),Jx(353,"Quando utilizado com "),Sl(354,"code"),Jx(355,"p-helper"),sg(),Jx(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),Jx(361," p-auto-focus"),Wl(362,"br"),sg()()(),Sl(363,"td",20)(364,"code",27),Jx(365,"boolean"),sg()(),Sl(366,"td",22)(367,"p")(368,"code"),Jx(369,"false"),sg()()(),Sl(370,"td",23)(371,"em")(372,"strong"),Jx(373,"(opcional)"),sg()(),Sl(374,"p"),Jx(375,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(376,"blockquote")(377,"p"),Jx(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),Jx(383," (p-blur)"),Wl(384,"br"),sg()()(),Sl(385,"td",20)(386,"code",21),Jx(387,"EventEmitter"),sg()(),Sl(388,"td",22),Jx(389,"-"),sg(),Sl(390,"td",23)(391,"em")(392,"strong"),Jx(393,"(opcional)"),sg()(),Sl(394,"p"),Jx(395,"Evento disparado ao sair do campo."),sg()()(),Sl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),Jx(400," (p-change)"),Wl(401,"br"),sg()()(),Sl(402,"td",20)(403,"code",21),Jx(404,"EventEmitter"),sg()(),Sl(405,"td",22),Jx(406,"-"),sg(),Sl(407,"td",23)(408,"em")(409,"strong"),Jx(410,"(opcional)"),sg()(),Sl(411,"p"),Jx(412,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Sl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Jx(417," (p-change-model)"),Wl(418,"br"),sg()()(),Sl(419,"td",20)(420,"code",21),Jx(421,"EventEmitter"),sg()(),Sl(422,"td",22),Jx(423,"-"),sg(),Sl(424,"td",23)(425,"em")(426,"strong"),Jx(427,"(opcional)"),sg()(),Sl(428,"p"),Jx(429,"Evento disparado ao alterar valor do model."),sg()()(),Sl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),Jx(434,"p-clean"),Wl(435,"br"),sg()()(),Sl(436,"td",20)(437,"code",27),Jx(438,"boolean"),sg()(),Sl(439,"td",22),Jx(440,"-"),sg(),Sl(441,"td",23)(442,"em")(443,"strong"),Jx(444,"(opcional)"),sg()(),Sl(445,"p"),Jx(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Sl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),Jx(451," p-compact-label"),Wl(452,"br"),sg()()(),Sl(453,"td",20)(454,"code",27),Jx(455,"boolean"),sg()(),Sl(456,"td",22)(457,"p")(458,"code"),Jx(459,"false"),sg()()(),Sl(460,"td",23)(461,"em")(462,"strong"),Jx(463,"(opcional)"),sg()(),Sl(464,"p"),Jx(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(466,"p"),Jx(467,"Quando habilitado ("),Sl(468,"code"),Jx(469,"true"),sg(),Jx(470,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(471,"ul")(472,"li")(473,"code"),Jx(474,"po-label"),sg()(),Sl(475,"li")(476,"code"),Jx(477,"p-requirement (showRequired)"),sg()(),Sl(478,"li")(479,"code"),Jx(480,"po-helper"),sg()()(),Sl(481,"p"),Jx(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(483,"p"),Jx(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(485,"ul")(486,"li")(487,"code"),Jx(488,"--field-container-title-justify"),sg()(),Sl(489,"li")(490,"code"),Jx(491,"--field-container-title-flex"),sg()()(),Sl(492,"p"),Jx(493,"Exemplo:"),sg(),Sl(494,"pre")(495,"code"),Jx(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(497,"p"),Jx(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),Jx(503,"p-disabled"),Wl(504,"br"),sg()()(),Sl(505,"td",20)(506,"code",27),Jx(507,"boolean"),sg()(),Sl(508,"td",22)(509,"p")(510,"code"),Jx(511,"false"),sg()()(),Sl(512,"td",23)(513,"em")(514,"strong"),Jx(515,"(opcional)"),sg()(),Sl(516,"p"),Jx(517,"Se verdadeiro, desabilita o campo."),sg()()(),Sl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),Jx(522," p-emit-all-changes"),Wl(523,"br"),sg()()(),Sl(524,"td",20)(525,"code",27),Jx(526,"boolean"),sg()(),Sl(527,"td",22)(528,"p")(529,"code"),Jx(530,"false"),sg()()(),Sl(531,"td",23)(532,"em")(533,"strong"),Jx(534,"(opcional)"),sg()(),Sl(535,"p"),Jx(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Sl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),Jx(541," (p-enter)"),Wl(542,"br"),sg()()(),Sl(543,"td",20)(544,"code",21),Jx(545,"EventEmitter"),sg()(),Sl(546,"td",22),Jx(547,"-"),sg(),Sl(548,"td",23)(549,"em")(550,"strong"),Jx(551,"(opcional)"),sg()(),Sl(552,"p"),Jx(553,"Evento disparado ao entrar do campo."),sg()()(),Sl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),Jx(558," p-error-async-properties"),Wl(559,"br"),sg()()(),Sl(560,"td",20)(561,"code",28),Jx(562,"ErrorAsyncProperties"),sg()(),Sl(563,"td",22),Jx(564,"-"),sg(),Sl(565,"td",23)(566,"em")(567,"strong"),Jx(568,"(opcional)"),sg()(),Sl(569,"p"),Jx(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(571,"code"),Jx(572,"Reactive Forms"),sg(),Jx(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(574,"code"),Jx(575,"asyncValidators"),sg(),Jx(576,"."),sg()()(),Sl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),Jx(581," p-error-limit"),Wl(582,"br"),sg()()(),Sl(583,"td",20)(584,"code",27),Jx(585,"boolean"),sg()(),Sl(586,"td",22)(587,"p")(588,"code"),Jx(589,"false"),sg()()(),Sl(590,"td",23)(591,"em")(592,"strong"),Jx(593,"(opcional)"),sg()(),Sl(594,"p"),Jx(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(596,"blockquote")(597,"p"),Jx(598,"Caso essa propriedade seja definida como "),Sl(599,"code"),Jx(600,"true"),sg(),Jx(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),Jx(606," p-error-pattern"),Wl(607,"br"),sg()()(),Sl(608,"td",20)(609,"code",26),Jx(610,"string"),sg()(),Sl(611,"td",22),Jx(612,"-"),sg(),Sl(613,"td",23)(614,"em")(615,"strong"),Jx(616,"(opcional)"),sg()(),Sl(617,"p"),Jx(618,"Mensagem que ser\xE1 apresentada quando o "),Sl(619,"code"),Jx(620,"pattern"),sg(),Jx(621," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Sl(622,"blockquote")(623,"p"),Jx(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(625,"code"),Jx(626,"p-required-field-error-message"),sg(),Jx(627," em conjunto."),sg()()()(),Sl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Jx(632," p-help"),Wl(633,"br"),sg()()(),Sl(634,"td",20)(635,"code",26),Jx(636,"string"),sg()(),Sl(637,"td",22),Jx(638,"-"),sg(),Sl(639,"td",23)(640,"em")(641,"strong"),Jx(642,"(opcional)"),sg()(),Sl(643,"p"),Jx(644,"Texto de apoio do campo."),sg()()(),Sl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Jx(649," p-hide-password-peek"),Wl(650,"br"),sg()()(),Sl(651,"td",20)(652,"code",27),Jx(653,"boolean"),sg()(),Sl(654,"td",22)(655,"p")(656,"code"),Jx(657,"false"),sg()()(),Sl(658,"td",23)(659,"em")(660,"strong"),Jx(661,"(opcional)"),sg()(),Sl(662,"p"),Jx(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),sg()()(),Sl(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),Jx(668," p-icon"),Wl(669,"br"),sg()()(),Sl(670,"td",20)(671,"code",26),Jx(672,"string "),sg(),Sl(673,"code",29),Jx(674," TemplateRef<void>"),sg()(),Sl(675,"td",22),Jx(676,"-"),sg(),Sl(677,"td",23)(678,"em")(679,"strong"),Jx(680,"(opcional)"),sg()(),Sl(681,"p"),Jx(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(683,"p"),Jx(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(685,"a",30),Jx(686,"Biblioteca de \xEDcones"),sg(),Jx(687,". conforme exemplo abaixo:"),sg(),Sl(688,"pre")(689,"code"),Jx(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Sl(691,"p"),Jx(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(693,"em"),Jx(694,"Font Awesome"),sg(),Jx(695,", da seguinte forma:"),sg(),Sl(696,"pre")(697,"code"),Jx(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Sl(699,"p"),Jx(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(701,"code"),Jx(702,"TemplateRef"),sg(),Jx(703,", conforme exemplo abaixo:"),sg(),Sl(704,"pre")(705,"code"),Jx(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(707,"blockquote")(708,"p"),Jx(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(710,"code"),Jx(711,"font-size: inherit"),sg(),Jx(712," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),Jx(717," (p-keydown)"),Wl(718,"br"),sg()()(),Sl(719,"td",20)(720,"code",21),Jx(721,"EventEmitter"),sg()(),Sl(722,"td",22),Jx(723,"-"),sg(),Sl(724,"td",23)(725,"em")(726,"strong"),Jx(727,"(opcional)"),sg()(),Sl(728,"p"),Jx(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(730,"code"),Jx(731,"KeyboardEvent"),sg(),Jx(732," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),Jx(737," p-label"),Wl(738,"br"),sg()()(),Sl(739,"td",20)(740,"code",26),Jx(741,"string"),sg()(),Sl(742,"td",22),Jx(743,"-"),sg(),Sl(744,"td",23)(745,"em")(746,"strong"),Jx(747,"(opcional)"),sg()(),Sl(748,"p"),Jx(749,"R\xF3tulo do campo."),sg()()(),Sl(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),Jx(754," p-label-text-wrap"),Wl(755,"br"),sg()()(),Sl(756,"td",20)(757,"code",27),Jx(758,"boolean"),sg()(),Sl(759,"td",22)(760,"p")(761,"code"),Jx(762,"false"),sg()()(),Sl(763,"td",23)(764,"em")(765,"strong"),Jx(766,"(opcional)"),sg()(),Sl(767,"p"),Jx(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(769,"code"),Jx(770,"p-label"),sg(),Jx(771,". Quando "),Sl(772,"code"),Jx(773,"p-label-text-wrap"),sg(),Jx(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Jx(779," p-loading"),Wl(780,"br"),sg()()(),Sl(781,"td",20)(782,"code",27),Jx(783,"boolean"),sg()(),Sl(784,"td",22)(785,"p")(786,"code"),Jx(787,"false"),sg()()(),Sl(788,"td",23)(789,"em")(790,"strong"),Jx(791,"(opcional)"),sg()(),Sl(792,"p"),Jx(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),Jx(798,"p-mask"),Wl(799,"br"),sg()()(),Sl(800,"td",20)(801,"code",26),Jx(802,"string"),sg()(),Sl(803,"td",22),Jx(804,"-"),sg(),Sl(805,"td",23)(806,"em")(807,"strong"),Jx(808,"(opcional)"),sg()(),Sl(809,"p"),Jx(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Sl(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),Jx(815,"p-mask-format-model"),Wl(816,"br"),sg()()(),Sl(817,"td",20)(818,"code",27),Jx(819,"boolean"),sg()(),Sl(820,"td",22)(821,"p")(822,"code"),Jx(823,"false"),sg()()(),Sl(824,"td",23)(825,"em")(826,"strong"),Jx(827,"(opcional)"),sg()(),Sl(828,"p"),Jx(829,"Indica se o "),Sl(830,"code"),Jx(831,"model"),sg(),Jx(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Sl(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),Jx(837," p-mask-no-length-validation"),Wl(838,"br"),sg()()(),Sl(839,"td",20)(840,"code",27),Jx(841,"boolean"),sg()(),Sl(842,"td",22)(843,"p")(844,"code"),Jx(845,"false"),sg()()(),Sl(846,"td",23)(847,"p"),Jx(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(849,"code"),Jx(850,"minLength"),sg(),Jx(851,") e m\xE1ximo ("),Sl(852,"code"),Jx(853,"maxLength"),sg(),Jx(854,") quando h\xE1 uma m\xE1scara ("),Sl(855,"code"),Jx(856,"p-mask"),sg(),Jx(857,") definida."),sg(),Sl(858,"ul")(859,"li"),Jx(860,"Quando "),Sl(861,"code"),Jx(862,"true"),sg(),Jx(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(864,"li"),Jx(865,"Quando "),Sl(866,"code"),Jx(867,"false"),sg(),Jx(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(869,"blockquote")(870,"p"),Jx(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(872,"code"),Jx(873,"p-mask-format-model"),sg(),Jx(874,"."),sg()(),Sl(875,"p"),Jx(876,"Exemplo:"),sg(),Sl(877,"pre")(878,"code"),Jx(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Sl(880,"ul")(881,"li"),Jx(882,"Entrada: "),Sl(883,"code"),Jx(884,"123-456"),sg(),Jx(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(886,"code"),Jx(887,"-"),sg(),Jx(888,"."),sg()()()(),Sl(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),Jx(893," p-maxlength"),Wl(894,"br"),sg()()(),Sl(895,"td",20)(896,"code",31),Jx(897,"number"),sg()(),Sl(898,"td",22),Jx(899,"-"),sg(),Sl(900,"td",23)(901,"em")(902,"strong"),Jx(903,"(opcional)"),sg()(),Sl(904,"p"),Jx(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Sl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),Jx(910," p-minlength"),Wl(911,"br"),sg()()(),Sl(912,"td",20)(913,"code",31),Jx(914,"number"),sg()(),Sl(915,"td",22),Jx(916,"-"),sg(),Sl(917,"td",23)(918,"em")(919,"strong"),Jx(920,"(opcional)"),sg()(),Sl(921,"p"),Jx(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Sl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),Jx(927," name"),Wl(928,"br"),sg()()(),Sl(929,"td",20)(930,"code",26),Jx(931,"string"),sg()(),Sl(932,"td",22),Jx(933,"-"),sg(),Sl(934,"td",23)(935,"p"),Jx(936,"Nome e identificador do campo."),sg()()(),Sl(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),Jx(941," p-no-autocomplete"),Wl(942,"br"),sg()()(),Sl(943,"td",20)(944,"code",27),Jx(945,"boolean"),sg()(),Sl(946,"td",22)(947,"p")(948,"code"),Jx(949,"false"),sg()()(),Sl(950,"td",23)(951,"em")(952,"strong"),Jx(953,"(opcional)"),sg()(),Sl(954,"p"),Jx(955,"Define a propriedade nativa "),Sl(956,"code"),Jx(957,"autocomplete"),sg(),Jx(958," do campo como "),Sl(959,"code"),Jx(960,"off"),sg(),Jx(961,"."),sg(),Sl(962,"blockquote")(963,"p"),Jx(964,"No componente "),Sl(965,"code"),Jx(966,"po-password"),sg(),Jx(967," ser\xE1 definido como "),Sl(968,"code"),Jx(969,"new-password"),sg(),Jx(970,"."),sg()(),Sl(971,"p"),Jx(972,"Nos componentes "),Sl(973,"code"),Jx(974,"po-password"),sg(),Jx(975," e "),Sl(976,"code"),Jx(977,"po-login"),sg(),Jx(978," o valor padr\xE3o ser\xE1 "),Sl(979,"code"),Jx(980,"true"),sg(),Jx(981,"."),sg()()(),Sl(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),Jx(986," p-optional"),Wl(987,"br"),sg()()(),Sl(988,"td",20)(989,"code",27),Jx(990,"boolean"),sg()(),Sl(991,"td",22)(992,"p")(993,"code"),Jx(994,"false"),sg()()(),Sl(995,"td",23)(996,"em")(997,"strong"),Jx(998,"(opcional)"),sg()(),Sl(999,"p"),Jx(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(1001,"blockquote")(1002,"p"),Jx(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1004,"ul")(1005,"li"),Jx(1006,"O campo conter "),Sl(1007,"code"),Jx(1008,"p-required"),sg(),Jx(1009,";"),sg(),Sl(1010,"li"),Jx(1011,"N\xE3o possuir "),Sl(1012,"code"),Jx(1013,"p-help"),sg(),Jx(1014," e/ou "),Sl(1015,"code"),Jx(1016,"p-label"),sg(),Jx(1017,"."),sg()()()(),Sl(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),Jx(1022,"p-pattern"),Wl(1023,"br"),sg()()(),Sl(1024,"td",20)(1025,"code",26),Jx(1026,"string"),sg()(),Sl(1027,"td",22),Jx(1028,"-"),sg(),Sl(1029,"td",23)(1030,"em")(1031,"strong"),Jx(1032,"(opcional)"),sg()(),Sl(1033,"p"),Jx(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1035,"code"),Jx(1036,"(p-mask)"),sg(),Jx(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Sl(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),Jx(1042," p-placeholder"),Wl(1043,"br"),sg()()(),Sl(1044,"td",20)(1045,"code",26),Jx(1046,"string"),sg()(),Sl(1047,"td",22)(1048,"p"),Jx(1049,"''"),sg()(),Sl(1050,"td",23)(1051,"em")(1052,"strong"),Jx(1053,"(opcional)"),sg()(),Sl(1054,"p"),Jx(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),Jx(1060," p-helper"),Wl(1061,"br"),sg()()(),Sl(1062,"td",20)(1063,"code",32),Jx(1064,"PoHelperOptions "),sg(),Sl(1065,"code",26),Jx(1066," string"),sg()(),Sl(1067,"td",22),Jx(1068,"-"),sg(),Sl(1069,"td",23)(1070,"em")(1071,"strong"),Jx(1072,"(opcional)"),sg()(),Sl(1073,"p"),Jx(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1075,"code"),Jx(1076,"p-label"),sg(),Jx(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1078,"code"),Jx(1079,"p-label"),sg(),Jx(1080,"."),sg(),Sl(1081,"blockquote")(1082,"p"),Jx(1083,"Para mais informa\xE7\xF5es acesse: "),Sl(1084,"a",33),Jx(1085,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1086,"."),sg()(),Sl(1087,"blockquote")(1088,"p"),Jx(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1090,"code"),Jx(1091,"p-additional-help-tooltip"),sg(),Jx(1092," e "),Sl(1093,"code"),Jx(1094,"p-additional-help"),sg(),Jx(1095,") ser\xE1 ignorado."),sg()()()(),Sl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),Jx(1100,"p-readonly"),Wl(1101,"br"),sg()()(),Sl(1102,"td",20)(1103,"code",27),Jx(1104,"boolean"),sg()(),Sl(1105,"td",22),Jx(1106,"-"),sg(),Sl(1107,"td",23)(1108,"em")(1109,"strong"),Jx(1110,"(opcional)"),sg()(),Sl(1111,"p"),Jx(1112,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Sl(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),Jx(1117,"p-required"),Wl(1118,"br"),sg()()(),Sl(1119,"td",20)(1120,"code",27),Jx(1121,"boolean"),sg()(),Sl(1122,"td",22)(1123,"p")(1124,"code"),Jx(1125,"false"),sg()()(),Sl(1126,"td",23)(1127,"em")(1128,"strong"),Jx(1129,"(opcional)"),sg()(),Sl(1130,"p"),Jx(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(1132,"blockquote")(1133,"p"),Jx(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1135,"code"),Jx(1136,"(p-disabled)"),sg(),Jx(1137,"."),sg()()()(),Sl(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),Jx(1142," p-required-field-error-message"),Wl(1143,"br"),sg()()(),Sl(1144,"td",20)(1145,"code",27),Jx(1146,"boolean"),sg()(),Sl(1147,"td",22)(1148,"p")(1149,"code"),Jx(1150,"false"),sg()()(),Sl(1151,"td",23)(1152,"em")(1153,"strong"),Jx(1154,"(opcional)"),sg()(),Sl(1155,"p"),Jx(1156,"Exibe a mensagem setada na propriedade "),Sl(1157,"code"),Jx(1158,"p-error-pattern"),sg(),Jx(1159," se o campo estiver vazio e for requerido."),sg(),Sl(1160,"blockquote")(1161,"p"),Jx(1162,"Necess\xE1rio que a propriedade "),Sl(1163,"code"),Jx(1164,"p-required"),sg(),Jx(1165," esteja habilitada."),sg()()()(),Sl(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),Jx(1170," p-show-required"),Wl(1171,"br"),sg()()(),Sl(1172,"td",20)(1173,"code",27),Jx(1174,"boolean"),sg()(),Sl(1175,"td",22),Jx(1176,"-"),sg(),Sl(1177,"td",23)(1178,"p"),Jx(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1180,"blockquote")(1181,"p"),Jx(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1183,"ul")(1184,"li"),Jx(1185,"N\xE3o possuir "),Sl(1186,"code"),Jx(1187,"p-help"),sg(),Jx(1188," e/ou "),Sl(1189,"code"),Jx(1190,"p-label"),sg(),Jx(1191,"."),sg()()()(),Sl(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),Jx(1196," p-size"),Wl(1197,"br"),sg()()(),Sl(1198,"td",20)(1199,"code",26),Jx(1200,"string"),sg()(),Sl(1201,"td",22)(1202,"p")(1203,"code"),Jx(1204,"medium"),sg()()(),Sl(1205,"td",23)(1206,"em")(1207,"strong"),Jx(1208,"(opcional)"),sg()(),Sl(1209,"p"),Jx(1210,"Define o tamanho do componente:"),sg(),Sl(1211,"ul")(1212,"li")(1213,"code"),Jx(1214,"small"),sg(),Jx(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1216,"li")(1217,"code"),Jx(1218,"medium"),sg(),Jx(1219,": altura do input como 44px."),sg()(),Sl(1220,"blockquote")(1221,"p"),Jx(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1223,"code"),Jx(1224,"medium"),sg(),Jx(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1226,"a",34),Jx(1227,"po-theme"),sg(),Jx(1228,"."),sg()()()(),Sl(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),Jx(1233," p-upper-case"),Wl(1234,"br"),sg()()(),Sl(1235,"td",20)(1236,"code",27),Jx(1237,"boolean"),sg()(),Sl(1238,"td",22),Jx(1239,"-"),sg(),Sl(1240,"td",23)(1241,"p"),Jx(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Sl(1243,"h3",11),Jx(1244,"M\xE9todos"),sg(),Sl(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),Jx(1251," showAdditionalHelp "),sg()()()()(),Sl(1252,"tr",23)(1253,"td",23)(1254,"p"),Jx(1255,"M\xE9todo que exibe "),Sl(1256,"code"),Jx(1257,"p-helper"),sg(),Jx(1258," ou executa a a\xE7\xE3o definida em "),Sl(1259,"code"),Jx(1260,"p-helper{eventOnClick}"),sg(),Jx(1261," ou em "),Sl(1262,"code"),Jx(1263,"p-additionalHelp"),sg(),Jx(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1265,"code"),Jx(1266,"p-keydown"),sg(),Jx(1267,"."),sg(),Sl(1268,"blockquote")(1269,"p"),Jx(1270,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1271,"code"),Jx(1272,"po-helper"),sg(),Jx(1273," quando o componente estiver com foco."),sg()(),Sl(1274,"pre")(1275,"code"),Jx(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Sl(1277,"pre")(1278,"code"),Jx(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1280,"br"),Sl(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),Jx(1287," focus "),sg()()()()(),Sl(1288,"tr",23)(1289,"td",23)(1290,"p"),Jx(1291,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1292,"p"),Jx(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1294,"pre")(1295,"code"),Jx(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Wl(1297,"br"),Sl(1298,"h3"),Jx(1299,"Interfaces"),sg(),Sl(1300,"h4",37)(1301,"code",5),Jx(1302,"ErrorAsyncProperties"),sg()(),Sl(1303,"div",2)(1304,"p"),Jx(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Sl(1306,"h4",11),Jx(1307,"Propriedades"),sg(),Sl(1308,"table",12)(1309,"tr",13)(1310,"th",14),Jx(1311,"Nome"),sg(),Sl(1312,"th",14),Jx(1313,"Tipo"),sg(),Sl(1314,"th",14),Jx(1315,"Descri\xE7\xE3o"),sg()(),Sl(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),Jx(1320," errorAsync"),Wl(1321,"br"),sg()()(),Sl(1322,"td",20)(1323,"code",38),Jx(1324,"(value) => Observable<boolean>"),sg()(),Sl(1325,"td",23)(1326,"p"),Jx(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1328,"code"),Jx(1329,"change"),sg(),Jx(1330," ou "),Sl(1331,"code"),Jx(1332,"change-model"),sg(),Jx(1333,", dependendo do valor da propriedade "),Sl(1334,"code"),Jx(1335,"triggerMode"),sg(),Jx(1336,"."),sg()()(),Sl(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),Jx(1341," triggerMode"),Wl(1342,"br"),sg()()(),Sl(1343,"td",20)(1344,"code",39),Jx(1345,"'change' "),sg(),Sl(1346,"code",40),Jx(1347," 'changeModel'"),sg()(),Sl(1348,"td",23)(1349,"em")(1350,"strong"),Jx(1351,"(opcional)"),sg()(),Sl(1352,"p"),Jx(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1354,"code"),Jx(1355,"change"),sg(),Jx(1356," ou "),Sl(1357,"code"),Jx(1358,"change-model"),sg(),Jx(1359,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-password-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,re,de,me,se],encapsulation:2})}return a})();var ye=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[pL.forChild(ye),pL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[ar,ue]})}return a})();export{$e as DocPoPasswordModule};