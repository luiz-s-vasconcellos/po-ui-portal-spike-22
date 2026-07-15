import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,c5 as Vde,cZ as Uhe,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,bd as Fx,Y as we,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic"]],standalone:false,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&Gl(0,"po-password",0);},dependencies:[Uhe],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Password Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-password-basic/sample-po-password-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-password-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ge,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs"]],standalone:false,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=Sx();Tl(0,"po-password",1),ww("ngModelChange",function(r){return Ky(m),sN(i.password,r)||(i.password=r),Xy(r)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(r){return Ky(m),sN(i.label,r)||(i.label=r),Xy(r)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(r){return Ky(m),sN(i.help,r)||(i.help=r),Xy(r)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(r){return Ky(m),sN(i.helperText,r)||(i.helperText=r),Xy(r)}),sg(),r0(),Tl(11,"po-input",8),ww("ngModelChange",function(r){return Ky(m),sN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),sg(),r0(),Tl(12,"po-input",9),ww("ngModelChange",function(r){return Ky(m),sN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),sg(),r0(),Tl(13,"po-input",10),ww("ngModelChange",function(r){return Ky(m),sN(i.pattern,r)||(i.pattern=r),Xy(r)}),sg(),r0(),Tl(14,"po-number",11),ww("ngModelChange",function(r){return Ky(m),sN(i.minlength,r)||(i.minlength=r),Xy(r)}),sg(),r0(),Tl(15,"po-number",12),ww("ngModelChange",function(r){return Ky(m),sN(i.maxlength,r)||(i.maxlength=r),Xy(r)}),sg(),r0(),Tl(16,"po-checkbox-group",13),ww("ngModelChange",function(r){return Ky(m),sN(i.properties,r)||(i.properties=r),Xy(r)}),sg(),r0(),Tl(17,"po-radio-group",14),ww("ngModelChange",function(r){return Ky(m),sN(i.size,r)||(i.size=r),Xy(r)}),sg(),r0(),Tl(18,"div",2)(19,"po-button",15),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Ew("ngModel",i.password),nw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),o0(),Vp(3),nw("p-value",i.password),Vp(),nw("p-value",i.event),Vp(4),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helperText),o0(),Vp(),Ew("ngModel",i.placeholder),o0(),Vp(),Ew("ngModel",i.errorPattern),o0(),Vp(),Ew("ngModel",i.pattern),o0(),Vp(),Ew("ngModel",i.minlength),o0(),Vp(),Ew("ngModel",i.maxlength),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Hhe,Uhe,Dde,Yhe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Password Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-password-labs/sample-po-password-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-password
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-password-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,be,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,le],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{poAlert=f(Vde);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()});}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset"]],standalone:false,features:[we([Vde])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=Sx();Tl(0,"form",null,0)(2,"po-password",1),ww("ngModelChange",function(r){return Ky(m),sN(i.currentPassword,r)||(i.currentPassword=r),Xy(r)}),sg(),r0(),Tl(3,"po-password",2),ww("ngModelChange",function(r){return Ky(m),sN(i.newPassword,r)||(i.newPassword=r),Xy(r)}),sg(),r0(),Tl(4,"po-password",3),ww("ngModelChange",function(r){return Ky(m),sN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Xy(r)}),sg(),r0(),Tl(5,"div",4)(6,"po-button",5),ht("p-click",function(){return i.setPassword()}),sg()()();}if(l&2){let m=Fx(1);Vp(2),Ew("ngModel",i.currentPassword),nw("p-help",i.help),o0(),Vp(),Ew("ngModel",i.newPassword),nw("p-disabled",i.currentPassword!==i.password),o0(),Vp(),Ew("ngModel",i.confirmNewPassword),nw("p-disabled",i.currentPassword!==i.password),o0(),Vp(2),nw("p-disabled",m.invalid);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,Uhe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Password - Reset"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-password-reset/sample-po-password-reset.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #passwordForm="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-password-reset"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ve,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-doc"]],standalone:false,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoPasswordComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Tl(24,"p"),iN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),iN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Tl(29,"h4"),iN(30,"Tokens customiz\xE1veis"),sg(),Tl(31,"p"),iN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(33,"br"),iN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,"code"),iN(36,".po-input"),sg()(),Tl(37,"blockquote")(38,"p"),iN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Tl(40,"a",6),iN(41,"Grid System"),sg(),iN(42,"."),sg()(),Tl(43,"blockquote")(44,"p"),iN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(46,"a",7),iN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(48,"."),sg()(),Tl(49,"table")(50,"thead")(51,"tr")(52,"th"),iN(53,"Propriedade"),sg(),Tl(54,"th"),iN(55,"Descri\xE7\xE3o"),sg(),Tl(56,"th"),iN(57,"Valor Padr\xE3o"),sg()()(),Tl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),iN(62,"Default Values"),sg()(),Gl(63,"td")(64,"td"),sg(),Tl(65,"tr")(66,"td")(67,"code"),iN(68,"--font-family"),sg()(),Tl(69,"td"),iN(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(71,"td")(72,"code"),iN(73,"var(--font-family-theme)"),sg()()(),Tl(74,"tr")(75,"td")(76,"code"),iN(77,"--font-size"),sg()(),Tl(78,"td"),iN(79,"Tamanho da fonte"),sg(),Tl(80,"td")(81,"code"),iN(82,"var(--font-size-default)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),iN(86,"--text-color-placeholder"),sg()(),Tl(87,"td"),iN(88,"Cor do texto placeholder"),sg(),Tl(89,"td")(90,"code"),iN(91,"var(--color-neutral-light-30)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),iN(95,"--color"),sg()(),Tl(96,"td"),iN(97,"Cor pincipal do input"),sg(),Tl(98,"td")(99,"code"),iN(100,"var(--color-neutral-dark-70)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),iN(104,"--background"),sg()(),Tl(105,"td"),iN(106,"Cor de background"),sg(),Tl(107,"td")(108,"code"),iN(109,"var(--color-neutral-light-05)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),iN(113,"--padding"),sg()(),Tl(114,"td"),iN(115,"Preenchimento"),sg(),Tl(116,"td")(117,"code"),iN(118,"0 0.5rem"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),iN(122,"--text-color"),sg()(),Tl(123,"td"),iN(124,"Cor do texto"),sg(),Tl(125,"td")(126,"code"),iN(127,"var(--color-neutral-dark-90)"),sg()()(),Tl(128,"tr")(129,"td")(130,"code"),iN(131,"--field-container-title-justify"),sg()(),Tl(132,"td"),iN(133,"Alinhamento horizontal do t\xEDtulo ("),Tl(134,"code"),iN(135,"justify-content"),sg(),iN(136,")"),sg(),Tl(137,"td")(138,"code"),iN(139,"space-between"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),iN(143,"--field-container-title-flex"),sg()(),Tl(144,"td"),iN(145,"Flex do t\xEDtulo ("),Tl(146,"code"),iN(147,"flex"),sg(),iN(148,")"),sg(),Tl(149,"td")(150,"code"),iN(151,"1 auto"),sg()()(),Tl(152,"tr")(153,"td")(154,"strong"),iN(155,"Hover"),sg()(),Gl(156,"td")(157,"td"),sg(),Tl(158,"tr")(159,"td")(160,"code"),iN(161,"--color-hover"),sg()(),Tl(162,"td"),iN(163,"Cor principal no estado hover"),sg(),Tl(164,"td")(165,"code"),iN(166,"var(--color-brand-01-dark)"),sg()()(),Tl(167,"tr")(168,"td")(169,"code"),iN(170,"--background-hover"),sg()(),Tl(171,"td"),iN(172,"Cor de background no estado hover"),sg(),Tl(173,"td")(174,"code"),iN(175,"var(--color-brand-01-lightest)"),sg()()(),Tl(176,"tr")(177,"td")(178,"strong"),iN(179,"Focused"),sg()(),Gl(180,"td")(181,"td"),sg(),Tl(182,"tr")(183,"td")(184,"code"),iN(185,"--color-focused"),sg()(),Tl(186,"td"),iN(187,"Cor principal no estado de focus"),sg(),Tl(188,"td")(189,"code"),iN(190,"var(--color-action-default)"),sg()()(),Tl(191,"tr")(192,"td")(193,"code"),iN(194,"--outline-color-focused"),sg()(),Tl(195,"td"),iN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),iN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),iN(203,"Disabled"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),iN(209,"--color-disabled"),sg()(),Tl(210,"td"),iN(211,"Cor principal no estado disabled"),sg(),Tl(212,"td")(213,"code"),iN(214,"var(--color-neutral-light-30)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),iN(218,"--background-disabled"),sg()(),Tl(219,"td"),iN(220,"Cor de background no estado disabled"),sg(),Tl(221,"td")(222,"code"),iN(223,"var(--color-neutral-light-20)"),sg()()(),Tl(224,"tr")(225,"td")(226,"code"),iN(227,"--text-color-disabled"),sg()(),Tl(228,"td"),iN(229,"Cor do texto no estado disabled"),sg(),Tl(230,"td")(231,"code"),iN(232,"var(--color-neutral-dark-70)"),sg()()()()(),Tl(233,"p"),Gl(234,"br"),iN(235," O "),Tl(236,"code"),iN(237,"po-password"),sg(),iN(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),sg()(),Tl(239,"div",8)(240,"h4",9),iN(241,"Seletor"),sg(),Tl(242,"pre",10),iN(243,`<po-password
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
`),sg()(),Tl(244,"h4",11),iN(245,"Propriedades"),sg(),Tl(246,"table",12)(247,"tr",13)(248,"th",14),iN(249,"Nome"),sg(),Tl(250,"th",14),iN(251,"Tipo"),sg(),Tl(252,"th",14),iN(253,"Padr\xE3o"),sg(),Tl(254,"th",14),iN(255,"Descri\xE7\xE3o"),sg()(),Tl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),iN(260," (p-additional-help)"),Gl(261,"br"),sg()(),Tl(262,"div",19),iN(263,"Deprecated"),sg()(),Tl(264,"td",20)(265,"code",21),iN(266,"EventEmitter"),sg()(),Tl(267,"td",22),iN(268,"-"),sg(),Tl(269,"td",23)(270,"em")(271,"strong"),iN(272,"(opcional)"),sg()(),Tl(273,"p"),iN(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(275,"blockquote")(276,"p"),iN(277,"Essa propriedade est\xE1 "),Tl(278,"strong"),iN(279,"depreciada"),sg(),iN(280," e ser\xE1 removida na vers\xE3o "),Tl(281,"code"),iN(282,"23.x.x"),sg(),iN(283,". Recomendamos utilizar a propriedade "),Tl(284,"code"),iN(285,"p-helper"),sg(),iN(286," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),iN(291," p-additional-help-tooltip"),Gl(292,"br"),sg()(),Tl(293,"div",19),iN(294,"Deprecated"),sg()(),Tl(295,"td",20)(296,"code",26),iN(297,"string"),sg()(),Tl(298,"td",22),iN(299,"-"),sg(),Tl(300,"td",23)(301,"em")(302,"strong"),iN(303,"(opcional)"),sg()(),Tl(304,"p"),iN(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(306,"code"),iN(307,"po-helper"),sg(),iN(308,`.
`),Tl(309,"strong"),iN(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(311,"blockquote")(312,"p"),iN(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(314,"blockquote")(315,"p"),iN(316,"Essa propriedade est\xE1 "),Tl(317,"strong"),iN(318,"depreciada"),sg(),iN(319," e ser\xE1 removida na vers\xE3o "),Tl(320,"code"),iN(321,"23.x.x"),sg(),iN(322,". Recomendamos utilizar a propriedade "),Tl(323,"code"),iN(324,"p-helper"),sg(),iN(325," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),iN(330," p-append-in-body"),Gl(331,"br"),sg()()(),Tl(332,"td",20)(333,"code",27),iN(334,"boolean"),sg()(),Tl(335,"td",22)(336,"p")(337,"code"),iN(338,"false"),sg()()(),Tl(339,"td",23)(340,"em")(341,"strong"),iN(342,"(opcional)"),sg()(),Tl(343,"p"),iN(344,"Define que o popover ("),Tl(345,"code"),iN(346,"p-helper"),sg(),iN(347," e/ou "),Tl(348,"code"),iN(349,"p-error-limit"),sg(),iN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(351,"blockquote")(352,"p"),iN(353,"Quando utilizado com "),Tl(354,"code"),iN(355,"p-helper"),sg(),iN(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),iN(361," p-auto-focus"),Gl(362,"br"),sg()()(),Tl(363,"td",20)(364,"code",27),iN(365,"boolean"),sg()(),Tl(366,"td",22)(367,"p")(368,"code"),iN(369,"false"),sg()()(),Tl(370,"td",23)(371,"em")(372,"strong"),iN(373,"(opcional)"),sg()(),Tl(374,"p"),iN(375,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(376,"blockquote")(377,"p"),iN(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),iN(383," (p-blur)"),Gl(384,"br"),sg()()(),Tl(385,"td",20)(386,"code",21),iN(387,"EventEmitter"),sg()(),Tl(388,"td",22),iN(389,"-"),sg(),Tl(390,"td",23)(391,"em")(392,"strong"),iN(393,"(opcional)"),sg()(),Tl(394,"p"),iN(395,"Evento disparado ao sair do campo."),sg()()(),Tl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),iN(400," (p-change)"),Gl(401,"br"),sg()()(),Tl(402,"td",20)(403,"code",21),iN(404,"EventEmitter"),sg()(),Tl(405,"td",22),iN(406,"-"),sg(),Tl(407,"td",23)(408,"em")(409,"strong"),iN(410,"(opcional)"),sg()(),Tl(411,"p"),iN(412,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),iN(417," (p-change-model)"),Gl(418,"br"),sg()()(),Tl(419,"td",20)(420,"code",21),iN(421,"EventEmitter"),sg()(),Tl(422,"td",22),iN(423,"-"),sg(),Tl(424,"td",23)(425,"em")(426,"strong"),iN(427,"(opcional)"),sg()(),Tl(428,"p"),iN(429,"Evento disparado ao alterar valor do model."),sg()()(),Tl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),iN(434,"p-clean"),Gl(435,"br"),sg()()(),Tl(436,"td",20)(437,"code",27),iN(438,"boolean"),sg()(),Tl(439,"td",22),iN(440,"-"),sg(),Tl(441,"td",23)(442,"em")(443,"strong"),iN(444,"(opcional)"),sg()(),Tl(445,"p"),iN(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Tl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),iN(451," p-compact-label"),Gl(452,"br"),sg()()(),Tl(453,"td",20)(454,"code",27),iN(455,"boolean"),sg()(),Tl(456,"td",22)(457,"p")(458,"code"),iN(459,"false"),sg()()(),Tl(460,"td",23)(461,"em")(462,"strong"),iN(463,"(opcional)"),sg()(),Tl(464,"p"),iN(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(466,"p"),iN(467,"Quando habilitado ("),Tl(468,"code"),iN(469,"true"),sg(),iN(470,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(471,"ul")(472,"li")(473,"code"),iN(474,"po-label"),sg()(),Tl(475,"li")(476,"code"),iN(477,"p-requirement (showRequired)"),sg()(),Tl(478,"li")(479,"code"),iN(480,"po-helper"),sg()()(),Tl(481,"p"),iN(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(483,"p"),iN(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(485,"ul")(486,"li")(487,"code"),iN(488,"--field-container-title-justify"),sg()(),Tl(489,"li")(490,"code"),iN(491,"--field-container-title-flex"),sg()()(),Tl(492,"p"),iN(493,"Exemplo:"),sg(),Tl(494,"pre")(495,"code"),iN(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(497,"p"),iN(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),iN(503,"p-disabled"),Gl(504,"br"),sg()()(),Tl(505,"td",20)(506,"code",27),iN(507,"boolean"),sg()(),Tl(508,"td",22)(509,"p")(510,"code"),iN(511,"false"),sg()()(),Tl(512,"td",23)(513,"em")(514,"strong"),iN(515,"(opcional)"),sg()(),Tl(516,"p"),iN(517,"Se verdadeiro, desabilita o campo."),sg()()(),Tl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),iN(522," p-emit-all-changes"),Gl(523,"br"),sg()()(),Tl(524,"td",20)(525,"code",27),iN(526,"boolean"),sg()(),Tl(527,"td",22)(528,"p")(529,"code"),iN(530,"false"),sg()()(),Tl(531,"td",23)(532,"em")(533,"strong"),iN(534,"(opcional)"),sg()(),Tl(535,"p"),iN(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Tl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),iN(541," (p-enter)"),Gl(542,"br"),sg()()(),Tl(543,"td",20)(544,"code",21),iN(545,"EventEmitter"),sg()(),Tl(546,"td",22),iN(547,"-"),sg(),Tl(548,"td",23)(549,"em")(550,"strong"),iN(551,"(opcional)"),sg()(),Tl(552,"p"),iN(553,"Evento disparado ao entrar do campo."),sg()()(),Tl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),iN(558," p-error-async-properties"),Gl(559,"br"),sg()()(),Tl(560,"td",20)(561,"code",28),iN(562,"ErrorAsyncProperties"),sg()(),Tl(563,"td",22),iN(564,"-"),sg(),Tl(565,"td",23)(566,"em")(567,"strong"),iN(568,"(opcional)"),sg()(),Tl(569,"p"),iN(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(571,"code"),iN(572,"Reactive Forms"),sg(),iN(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Tl(574,"code"),iN(575,"asyncValidators"),sg(),iN(576,"."),sg()()(),Tl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),iN(581," p-error-limit"),Gl(582,"br"),sg()()(),Tl(583,"td",20)(584,"code",27),iN(585,"boolean"),sg()(),Tl(586,"td",22)(587,"p")(588,"code"),iN(589,"false"),sg()()(),Tl(590,"td",23)(591,"em")(592,"strong"),iN(593,"(opcional)"),sg()(),Tl(594,"p"),iN(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(596,"blockquote")(597,"p"),iN(598,"Caso essa propriedade seja definida como "),Tl(599,"code"),iN(600,"true"),sg(),iN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),iN(606," p-error-pattern"),Gl(607,"br"),sg()()(),Tl(608,"td",20)(609,"code",26),iN(610,"string"),sg()(),Tl(611,"td",22),iN(612,"-"),sg(),Tl(613,"td",23)(614,"em")(615,"strong"),iN(616,"(opcional)"),sg()(),Tl(617,"p"),iN(618,"Mensagem que ser\xE1 apresentada quando o "),Tl(619,"code"),iN(620,"pattern"),sg(),iN(621," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Tl(622,"blockquote")(623,"p"),iN(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(625,"code"),iN(626,"p-required-field-error-message"),sg(),iN(627," em conjunto."),sg()()()(),Tl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),iN(632," p-help"),Gl(633,"br"),sg()()(),Tl(634,"td",20)(635,"code",26),iN(636,"string"),sg()(),Tl(637,"td",22),iN(638,"-"),sg(),Tl(639,"td",23)(640,"em")(641,"strong"),iN(642,"(opcional)"),sg()(),Tl(643,"p"),iN(644,"Texto de apoio do campo."),sg()()(),Tl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),iN(649," p-hide-password-peek"),Gl(650,"br"),sg()()(),Tl(651,"td",20)(652,"code",27),iN(653,"boolean"),sg()(),Tl(654,"td",22)(655,"p")(656,"code"),iN(657,"false"),sg()()(),Tl(658,"td",23)(659,"em")(660,"strong"),iN(661,"(opcional)"),sg()(),Tl(662,"p"),iN(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),sg()()(),Tl(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),iN(668," p-icon"),Gl(669,"br"),sg()()(),Tl(670,"td",20)(671,"code",26),iN(672,"string "),sg(),Tl(673,"code",29),iN(674," TemplateRef<void>"),sg()(),Tl(675,"td",22),iN(676,"-"),sg(),Tl(677,"td",23)(678,"em")(679,"strong"),iN(680,"(opcional)"),sg()(),Tl(681,"p"),iN(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(683,"p"),iN(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(685,"a",30),iN(686,"Biblioteca de \xEDcones"),sg(),iN(687,". conforme exemplo abaixo:"),sg(),Tl(688,"pre")(689,"code"),iN(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Tl(691,"p"),iN(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(693,"em"),iN(694,"Font Awesome"),sg(),iN(695,", da seguinte forma:"),sg(),Tl(696,"pre")(697,"code"),iN(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Tl(699,"p"),iN(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(701,"code"),iN(702,"TemplateRef"),sg(),iN(703,", conforme exemplo abaixo:"),sg(),Tl(704,"pre")(705,"code"),iN(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(707,"blockquote")(708,"p"),iN(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(710,"code"),iN(711,"font-size: inherit"),sg(),iN(712," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),iN(717," (p-keydown)"),Gl(718,"br"),sg()()(),Tl(719,"td",20)(720,"code",21),iN(721,"EventEmitter"),sg()(),Tl(722,"td",22),iN(723,"-"),sg(),Tl(724,"td",23)(725,"em")(726,"strong"),iN(727,"(opcional)"),sg()(),Tl(728,"p"),iN(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(730,"code"),iN(731,"KeyboardEvent"),sg(),iN(732," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),iN(737," p-label"),Gl(738,"br"),sg()()(),Tl(739,"td",20)(740,"code",26),iN(741,"string"),sg()(),Tl(742,"td",22),iN(743,"-"),sg(),Tl(744,"td",23)(745,"em")(746,"strong"),iN(747,"(opcional)"),sg()(),Tl(748,"p"),iN(749,"R\xF3tulo do campo."),sg()()(),Tl(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),iN(754," p-label-text-wrap"),Gl(755,"br"),sg()()(),Tl(756,"td",20)(757,"code",27),iN(758,"boolean"),sg()(),Tl(759,"td",22)(760,"p")(761,"code"),iN(762,"false"),sg()()(),Tl(763,"td",23)(764,"em")(765,"strong"),iN(766,"(opcional)"),sg()(),Tl(767,"p"),iN(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(769,"code"),iN(770,"p-label"),sg(),iN(771,". Quando "),Tl(772,"code"),iN(773,"p-label-text-wrap"),sg(),iN(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),iN(779," p-loading"),Gl(780,"br"),sg()()(),Tl(781,"td",20)(782,"code",27),iN(783,"boolean"),sg()(),Tl(784,"td",22)(785,"p")(786,"code"),iN(787,"false"),sg()()(),Tl(788,"td",23)(789,"em")(790,"strong"),iN(791,"(opcional)"),sg()(),Tl(792,"p"),iN(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),iN(798,"p-mask"),Gl(799,"br"),sg()()(),Tl(800,"td",20)(801,"code",26),iN(802,"string"),sg()(),Tl(803,"td",22),iN(804,"-"),sg(),Tl(805,"td",23)(806,"em")(807,"strong"),iN(808,"(opcional)"),sg()(),Tl(809,"p"),iN(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Tl(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),iN(815,"p-mask-format-model"),Gl(816,"br"),sg()()(),Tl(817,"td",20)(818,"code",27),iN(819,"boolean"),sg()(),Tl(820,"td",22)(821,"p")(822,"code"),iN(823,"false"),sg()()(),Tl(824,"td",23)(825,"em")(826,"strong"),iN(827,"(opcional)"),sg()(),Tl(828,"p"),iN(829,"Indica se o "),Tl(830,"code"),iN(831,"model"),sg(),iN(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Tl(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),iN(837," p-mask-no-length-validation"),Gl(838,"br"),sg()()(),Tl(839,"td",20)(840,"code",27),iN(841,"boolean"),sg()(),Tl(842,"td",22)(843,"p")(844,"code"),iN(845,"false"),sg()()(),Tl(846,"td",23)(847,"p"),iN(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(849,"code"),iN(850,"minLength"),sg(),iN(851,") e m\xE1ximo ("),Tl(852,"code"),iN(853,"maxLength"),sg(),iN(854,") quando h\xE1 uma m\xE1scara ("),Tl(855,"code"),iN(856,"p-mask"),sg(),iN(857,") definida."),sg(),Tl(858,"ul")(859,"li"),iN(860,"Quando "),Tl(861,"code"),iN(862,"true"),sg(),iN(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(864,"li"),iN(865,"Quando "),Tl(866,"code"),iN(867,"false"),sg(),iN(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(869,"blockquote")(870,"p"),iN(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(872,"code"),iN(873,"p-mask-format-model"),sg(),iN(874,"."),sg()(),Tl(875,"p"),iN(876,"Exemplo:"),sg(),Tl(877,"pre")(878,"code"),iN(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Tl(880,"ul")(881,"li"),iN(882,"Entrada: "),Tl(883,"code"),iN(884,"123-456"),sg(),iN(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Tl(886,"code"),iN(887,"-"),sg(),iN(888,"."),sg()()()(),Tl(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),iN(893," p-maxlength"),Gl(894,"br"),sg()()(),Tl(895,"td",20)(896,"code",31),iN(897,"number"),sg()(),Tl(898,"td",22),iN(899,"-"),sg(),Tl(900,"td",23)(901,"em")(902,"strong"),iN(903,"(opcional)"),sg()(),Tl(904,"p"),iN(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),iN(910," p-minlength"),Gl(911,"br"),sg()()(),Tl(912,"td",20)(913,"code",31),iN(914,"number"),sg()(),Tl(915,"td",22),iN(916,"-"),sg(),Tl(917,"td",23)(918,"em")(919,"strong"),iN(920,"(opcional)"),sg()(),Tl(921,"p"),iN(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),iN(927," name"),Gl(928,"br"),sg()()(),Tl(929,"td",20)(930,"code",26),iN(931,"string"),sg()(),Tl(932,"td",22),iN(933,"-"),sg(),Tl(934,"td",23)(935,"p"),iN(936,"Nome e identificador do campo."),sg()()(),Tl(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),iN(941," p-no-autocomplete"),Gl(942,"br"),sg()()(),Tl(943,"td",20)(944,"code",27),iN(945,"boolean"),sg()(),Tl(946,"td",22)(947,"p")(948,"code"),iN(949,"false"),sg()()(),Tl(950,"td",23)(951,"em")(952,"strong"),iN(953,"(opcional)"),sg()(),Tl(954,"p"),iN(955,"Define a propriedade nativa "),Tl(956,"code"),iN(957,"autocomplete"),sg(),iN(958," do campo como "),Tl(959,"code"),iN(960,"off"),sg(),iN(961,"."),sg(),Tl(962,"blockquote")(963,"p"),iN(964,"No componente "),Tl(965,"code"),iN(966,"po-password"),sg(),iN(967," ser\xE1 definido como "),Tl(968,"code"),iN(969,"new-password"),sg(),iN(970,"."),sg()(),Tl(971,"p"),iN(972,"Nos componentes "),Tl(973,"code"),iN(974,"po-password"),sg(),iN(975," e "),Tl(976,"code"),iN(977,"po-login"),sg(),iN(978," o valor padr\xE3o ser\xE1 "),Tl(979,"code"),iN(980,"true"),sg(),iN(981,"."),sg()()(),Tl(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),iN(986," p-optional"),Gl(987,"br"),sg()()(),Tl(988,"td",20)(989,"code",27),iN(990,"boolean"),sg()(),Tl(991,"td",22)(992,"p")(993,"code"),iN(994,"false"),sg()()(),Tl(995,"td",23)(996,"em")(997,"strong"),iN(998,"(opcional)"),sg()(),Tl(999,"p"),iN(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1001,"blockquote")(1002,"p"),iN(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1004,"ul")(1005,"li"),iN(1006,"O campo conter "),Tl(1007,"code"),iN(1008,"p-required"),sg(),iN(1009,";"),sg(),Tl(1010,"li"),iN(1011,"N\xE3o possuir "),Tl(1012,"code"),iN(1013,"p-help"),sg(),iN(1014," e/ou "),Tl(1015,"code"),iN(1016,"p-label"),sg(),iN(1017,"."),sg()()()(),Tl(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),iN(1022,"p-pattern"),Gl(1023,"br"),sg()()(),Tl(1024,"td",20)(1025,"code",26),iN(1026,"string"),sg()(),Tl(1027,"td",22),iN(1028,"-"),sg(),Tl(1029,"td",23)(1030,"em")(1031,"strong"),iN(1032,"(opcional)"),sg()(),Tl(1033,"p"),iN(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1035,"code"),iN(1036,"(p-mask)"),sg(),iN(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Tl(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),iN(1042," p-placeholder"),Gl(1043,"br"),sg()()(),Tl(1044,"td",20)(1045,"code",26),iN(1046,"string"),sg()(),Tl(1047,"td",22)(1048,"p"),iN(1049,"''"),sg()(),Tl(1050,"td",23)(1051,"em")(1052,"strong"),iN(1053,"(opcional)"),sg()(),Tl(1054,"p"),iN(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),iN(1060," p-helper"),Gl(1061,"br"),sg()()(),Tl(1062,"td",20)(1063,"code",32),iN(1064,"PoHelperOptions "),sg(),Tl(1065,"code",26),iN(1066," string"),sg()(),Tl(1067,"td",22),iN(1068,"-"),sg(),Tl(1069,"td",23)(1070,"em")(1071,"strong"),iN(1072,"(opcional)"),sg()(),Tl(1073,"p"),iN(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1075,"code"),iN(1076,"p-label"),sg(),iN(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1078,"code"),iN(1079,"p-label"),sg(),iN(1080,"."),sg(),Tl(1081,"blockquote")(1082,"p"),iN(1083,"Para mais informa\xE7\xF5es acesse: "),Tl(1084,"a",33),iN(1085,"https://po-ui.io/documentation/po-helper"),sg(),iN(1086,"."),sg()(),Tl(1087,"blockquote")(1088,"p"),iN(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1090,"code"),iN(1091,"p-additional-help-tooltip"),sg(),iN(1092," e "),Tl(1093,"code"),iN(1094,"p-additional-help"),sg(),iN(1095,") ser\xE1 ignorado."),sg()()()(),Tl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),iN(1100,"p-readonly"),Gl(1101,"br"),sg()()(),Tl(1102,"td",20)(1103,"code",27),iN(1104,"boolean"),sg()(),Tl(1105,"td",22),iN(1106,"-"),sg(),Tl(1107,"td",23)(1108,"em")(1109,"strong"),iN(1110,"(opcional)"),sg()(),Tl(1111,"p"),iN(1112,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),iN(1117,"p-required"),Gl(1118,"br"),sg()()(),Tl(1119,"td",20)(1120,"code",27),iN(1121,"boolean"),sg()(),Tl(1122,"td",22)(1123,"p")(1124,"code"),iN(1125,"false"),sg()()(),Tl(1126,"td",23)(1127,"em")(1128,"strong"),iN(1129,"(opcional)"),sg()(),Tl(1130,"p"),iN(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1132,"blockquote")(1133,"p"),iN(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1135,"code"),iN(1136,"(p-disabled)"),sg(),iN(1137,"."),sg()()()(),Tl(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),iN(1142," p-required-field-error-message"),Gl(1143,"br"),sg()()(),Tl(1144,"td",20)(1145,"code",27),iN(1146,"boolean"),sg()(),Tl(1147,"td",22)(1148,"p")(1149,"code"),iN(1150,"false"),sg()()(),Tl(1151,"td",23)(1152,"em")(1153,"strong"),iN(1154,"(opcional)"),sg()(),Tl(1155,"p"),iN(1156,"Exibe a mensagem setada na propriedade "),Tl(1157,"code"),iN(1158,"p-error-pattern"),sg(),iN(1159," se o campo estiver vazio e for requerido."),sg(),Tl(1160,"blockquote")(1161,"p"),iN(1162,"Necess\xE1rio que a propriedade "),Tl(1163,"code"),iN(1164,"p-required"),sg(),iN(1165," esteja habilitada."),sg()()()(),Tl(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),iN(1170," p-show-required"),Gl(1171,"br"),sg()()(),Tl(1172,"td",20)(1173,"code",27),iN(1174,"boolean"),sg()(),Tl(1175,"td",22),iN(1176,"-"),sg(),Tl(1177,"td",23)(1178,"p"),iN(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1180,"blockquote")(1181,"p"),iN(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1183,"ul")(1184,"li"),iN(1185,"N\xE3o possuir "),Tl(1186,"code"),iN(1187,"p-help"),sg(),iN(1188," e/ou "),Tl(1189,"code"),iN(1190,"p-label"),sg(),iN(1191,"."),sg()()()(),Tl(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),iN(1196," p-size"),Gl(1197,"br"),sg()()(),Tl(1198,"td",20)(1199,"code",26),iN(1200,"string"),sg()(),Tl(1201,"td",22)(1202,"p")(1203,"code"),iN(1204,"medium"),sg()()(),Tl(1205,"td",23)(1206,"em")(1207,"strong"),iN(1208,"(opcional)"),sg()(),Tl(1209,"p"),iN(1210,"Define o tamanho do componente:"),sg(),Tl(1211,"ul")(1212,"li")(1213,"code"),iN(1214,"small"),sg(),iN(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1216,"li")(1217,"code"),iN(1218,"medium"),sg(),iN(1219,": altura do input como 44px."),sg()(),Tl(1220,"blockquote")(1221,"p"),iN(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1223,"code"),iN(1224,"medium"),sg(),iN(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1226,"a",34),iN(1227,"po-theme"),sg(),iN(1228,"."),sg()()()(),Tl(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),iN(1233," p-upper-case"),Gl(1234,"br"),sg()()(),Tl(1235,"td",20)(1236,"code",27),iN(1237,"boolean"),sg()(),Tl(1238,"td",22),iN(1239,"-"),sg(),Tl(1240,"td",23)(1241,"p"),iN(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Tl(1243,"h3",11),iN(1244,"M\xE9todos"),sg(),Tl(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),iN(1251," showAdditionalHelp "),sg()()()()(),Tl(1252,"tr",23)(1253,"td",23)(1254,"p"),iN(1255,"M\xE9todo que exibe "),Tl(1256,"code"),iN(1257,"p-helper"),sg(),iN(1258," ou executa a a\xE7\xE3o definida em "),Tl(1259,"code"),iN(1260,"p-helper{eventOnClick}"),sg(),iN(1261," ou em "),Tl(1262,"code"),iN(1263,"p-additionalHelp"),sg(),iN(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1265,"code"),iN(1266,"p-keydown"),sg(),iN(1267,"."),sg(),Tl(1268,"blockquote")(1269,"p"),iN(1270,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1271,"code"),iN(1272,"po-helper"),sg(),iN(1273," quando o componente estiver com foco."),sg()(),Tl(1274,"pre")(1275,"code"),iN(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Tl(1277,"pre")(1278,"code"),iN(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1280,"br"),Tl(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),iN(1287," focus "),sg()()()()(),Tl(1288,"tr",23)(1289,"td",23)(1290,"p"),iN(1291,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1292,"p"),iN(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1294,"pre")(1295,"code"),iN(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Gl(1297,"br"),Tl(1298,"h3"),iN(1299,"Interfaces"),sg(),Tl(1300,"h4",37)(1301,"code",5),iN(1302,"ErrorAsyncProperties"),sg()(),Tl(1303,"div",2)(1304,"p"),iN(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(1306,"h4",11),iN(1307,"Propriedades"),sg(),Tl(1308,"table",12)(1309,"tr",13)(1310,"th",14),iN(1311,"Nome"),sg(),Tl(1312,"th",14),iN(1313,"Tipo"),sg(),Tl(1314,"th",14),iN(1315,"Descri\xE7\xE3o"),sg()(),Tl(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),iN(1320," errorAsync"),Gl(1321,"br"),sg()()(),Tl(1322,"td",20)(1323,"code",38),iN(1324,"(value) => Observable<boolean>"),sg()(),Tl(1325,"td",23)(1326,"p"),iN(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1328,"code"),iN(1329,"change"),sg(),iN(1330," ou "),Tl(1331,"code"),iN(1332,"change-model"),sg(),iN(1333,", dependendo do valor da propriedade "),Tl(1334,"code"),iN(1335,"triggerMode"),sg(),iN(1336,"."),sg()()(),Tl(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),iN(1341," triggerMode"),Gl(1342,"br"),sg()()(),Tl(1343,"td",20)(1344,"code",39),iN(1345,"'change' "),sg(),Tl(1346,"code",40),iN(1347," 'changeModel'"),sg()(),Tl(1348,"td",23)(1349,"em")(1350,"strong"),iN(1351,"(opcional)"),sg()(),Tl(1352,"p"),iN(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(1354,"code"),iN(1355,"change"),sg(),iN(1356," ou "),Tl(1357,"code"),iN(1358,"change-model"),sg(),iN(1359,"."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-password-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),sg()()()),l&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,re,de,me,se],encapsulation:2,changeDetection:1})}return a})();var ye=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[DL.forChild(ye),DL]})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[ar,ue]})}return a})();export{$e as DocPoPasswordModule};