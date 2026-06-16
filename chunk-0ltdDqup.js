import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,by as vle,ct as ma,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,aX as _x,X as we,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic"]],standalone:false,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&Ul(0,"po-password",0);},dependencies:[ma],encapsulation:2,changeDetection:1})}return a})();var xe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Password Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-password-basic/sample-po-password-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-password-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,xe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return a})();var pe=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs"]],standalone:false,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=lx();wl(0,"po-password",1),pw("ngModelChange",function(r){return Qy(m),$x(i.password,r)||(i.password=r),Jy(r)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(r){return Qy(m),$x(i.label,r)||(i.label=r),Jy(r)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(r){return Qy(m),$x(i.help,r)||(i.help=r),Jy(r)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(r){return Qy(m),$x(i.helperText,r)||(i.helperText=r),Jy(r)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(r){return Qy(m),$x(i.placeholder,r)||(i.placeholder=r),Jy(r)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(r){return Qy(m),$x(i.errorPattern,r)||(i.errorPattern=r),Jy(r)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(r){return Qy(m),$x(i.pattern,r)||(i.pattern=r),Jy(r)}),ng(),$0(),wl(14,"po-number",11),pw("ngModelChange",function(r){return Qy(m),$x(i.minlength,r)||(i.minlength=r),Jy(r)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(r){return Qy(m),$x(i.maxlength,r)||(i.maxlength=r),Jy(r)}),ng(),$0(),wl(16,"po-checkbox-group",13),pw("ngModelChange",function(r){return Qy(m),$x(i.properties,r)||(i.properties=r),Jy(r)}),ng(),$0(),wl(17,"po-radio-group",14),pw("ngModelChange",function(r){return Qy(m),$x(i.size,r)||(i.size=r),Jy(r)}),ng(),$0(),wl(18,"div",2)(19,"po-button",15),ut("p-click",function(){return i.restore()}),ng()()();}l&2&&(hw("ngModel",i.password),YE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",i.password),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.pattern),G0(),Pp(),hw("ngModel",i.minlength),G0(),Pp(),hw("ngModel",i.maxlength),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ha,ma,ga,Vp],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Password Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-password-labs/sample-po-password-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-password
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-password-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return a})();var se=(()=>{class a{poAlert=f(vle);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()});}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset"]],standalone:false,features:[we([vle])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let m=lx();wl(0,"form",null,0)(2,"po-password",1),pw("ngModelChange",function(r){return Qy(m),$x(i.currentPassword,r)||(i.currentPassword=r),Jy(r)}),ng(),$0(),wl(3,"po-password",2),pw("ngModelChange",function(r){return Qy(m),$x(i.newPassword,r)||(i.newPassword=r),Jy(r)}),ng(),$0(),wl(4,"po-password",3),pw("ngModelChange",function(r){return Qy(m),$x(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Jy(r)}),ng(),$0(),wl(5,"div",4)(6,"po-button",5),ut("p-click",function(){return i.setPassword()}),ng()()();}if(l&2){let m=_x(1);Pp(2),hw("ngModel",i.currentPassword),YE("p-help",i.help),G0(),Pp(),hw("ngModel",i.newPassword),YE("p-disabled",i.currentPassword!==i.password),G0(),Pp(),hw("ngModel",i.confirmNewPassword),YE("p-disabled",i.currentPassword!==i.password),G0(),Pp(2),YE("p-disabled",m.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,ma],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-reset-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Password - Reset"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-password-reset/sample-po-password-reset.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #passwordForm="ngForm">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-password-reset"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-password-doc"]],standalone:false,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoPasswordComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ng(),wl(24,"p"),Ux(25,"Importante:"),ng(),wl(26,"ul")(27,"li"),Ux(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ng()(),wl(29,"h4"),Ux(30,"Tokens customiz\xE1veis"),ng(),wl(31,"p"),Ux(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(33,"br"),Ux(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(35,"code"),Ux(36,".po-input"),ng()(),wl(37,"blockquote")(38,"p"),Ux(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),wl(40,"a",6),Ux(41,"Grid System"),ng(),Ux(42,"."),ng()(),wl(43,"blockquote")(44,"p"),Ux(45,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(46,"a",7),Ux(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(48,"."),ng()(),wl(49,"table")(50,"thead")(51,"tr")(52,"th"),Ux(53,"Propriedade"),ng(),wl(54,"th"),Ux(55,"Descri\xE7\xE3o"),ng(),wl(56,"th"),Ux(57,"Valor Padr\xE3o"),ng()()(),wl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Ux(62,"Default Values"),ng()(),Ul(63,"td")(64,"td"),ng(),wl(65,"tr")(66,"td")(67,"code"),Ux(68,"--font-family"),ng()(),wl(69,"td"),Ux(70,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(71,"td")(72,"code"),Ux(73,"var(--font-family-theme)"),ng()()(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--font-size"),ng()(),wl(78,"td"),Ux(79,"Tamanho da fonte"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--font-size-default)"),ng()()(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--text-color-placeholder"),ng()(),wl(87,"td"),Ux(88,"Cor do texto placeholder"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--color-neutral-light-30)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--color"),ng()(),wl(96,"td"),Ux(97,"Cor pincipal do input"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--color-neutral-dark-70)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--background"),ng()(),wl(105,"td"),Ux(106,"Cor de background"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--color-neutral-light-05)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--padding"),ng()(),wl(114,"td"),Ux(115,"Preenchimento"),ng(),wl(116,"td")(117,"code"),Ux(118,"0 0.5rem"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--text-color"),ng()(),wl(123,"td"),Ux(124,"Cor do texto"),ng(),wl(125,"td")(126,"code"),Ux(127,"var(--color-neutral-dark-90)"),ng()()(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--field-container-title-justify"),ng()(),wl(132,"td"),Ux(133,"Alinhamento horizontal do t\xEDtulo ("),wl(134,"code"),Ux(135,"justify-content"),ng(),Ux(136,")"),ng(),wl(137,"td")(138,"code"),Ux(139,"space-between"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--field-container-title-flex"),ng()(),wl(144,"td"),Ux(145,"Flex do t\xEDtulo ("),wl(146,"code"),Ux(147,"flex"),ng(),Ux(148,")"),ng(),wl(149,"td")(150,"code"),Ux(151,"1 auto"),ng()()(),wl(152,"tr")(153,"td")(154,"strong"),Ux(155,"Hover"),ng()(),Ul(156,"td")(157,"td"),ng(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--color-hover"),ng()(),wl(162,"td"),Ux(163,"Cor principal no estado hover"),ng(),wl(164,"td")(165,"code"),Ux(166,"var(--color-brand-01-dark)"),ng()()(),wl(167,"tr")(168,"td")(169,"code"),Ux(170,"--background-hover"),ng()(),wl(171,"td"),Ux(172,"Cor de background no estado hover"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--color-brand-01-lightest)"),ng()()(),wl(176,"tr")(177,"td")(178,"strong"),Ux(179,"Focused"),ng()(),Ul(180,"td")(181,"td"),ng(),wl(182,"tr")(183,"td")(184,"code"),Ux(185,"--color-focused"),ng()(),wl(186,"td"),Ux(187,"Cor principal no estado de focus"),ng(),wl(188,"td")(189,"code"),Ux(190,"var(--color-action-default)"),ng()()(),wl(191,"tr")(192,"td")(193,"code"),Ux(194,"--outline-color-focused"),ng()(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Disabled"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-disabled"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado disabled"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-neutral-light-30)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-disabled"),ng()(),wl(219,"td"),Ux(220,"Cor de background no estado disabled"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-neutral-light-20)"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--text-color-disabled"),ng()(),wl(228,"td"),Ux(229,"Cor do texto no estado disabled"),ng(),wl(230,"td")(231,"code"),Ux(232,"var(--color-neutral-dark-70)"),ng()()()()(),wl(233,"p"),Ul(234,"br"),Ux(235," O "),wl(236,"code"),Ux(237,"po-password"),ng(),Ux(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),ng()(),wl(239,"div",8)(240,"h4",9),Ux(241,"Seletor"),ng(),wl(242,"pre",10),Ux(243,`<po-password
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
`),ng()(),wl(244,"h4",11),Ux(245,"Propriedades"),ng(),wl(246,"table",12)(247,"tr",13)(248,"th",14),Ux(249,"Nome"),ng(),wl(250,"th",14),Ux(251,"Tipo"),ng(),wl(252,"th",14),Ux(253,"Padr\xE3o"),ng(),wl(254,"th",14),Ux(255,"Descri\xE7\xE3o"),ng()(),wl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),Ux(260," (p-additional-help)"),Ul(261,"br"),ng()(),wl(262,"div",19),Ux(263,"Deprecated"),ng()(),wl(264,"td",20)(265,"code",21),Ux(266,"EventEmitter"),ng()(),wl(267,"td",22),Ux(268,"-"),ng(),wl(269,"td",23)(270,"em")(271,"strong"),Ux(272,"(opcional)"),ng()(),wl(273,"p"),Ux(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(275,"blockquote")(276,"p"),Ux(277,"Essa propriedade est\xE1 "),wl(278,"strong"),Ux(279,"depreciada"),ng(),Ux(280," e ser\xE1 removida na vers\xE3o "),wl(281,"code"),Ux(282,"23.x.x"),ng(),Ux(283,". Recomendamos utilizar a propriedade "),wl(284,"code"),Ux(285,"p-helper"),ng(),Ux(286," que oferece mais recursos e flexibilidade."),ng()()()(),wl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),Ux(291," p-additional-help-tooltip"),Ul(292,"br"),ng()(),wl(293,"div",19),Ux(294,"Deprecated"),ng()(),wl(295,"td",20)(296,"code",26),Ux(297,"string"),ng()(),wl(298,"td",22),Ux(299,"-"),ng(),wl(300,"td",23)(301,"em")(302,"strong"),Ux(303,"(opcional)"),ng()(),wl(304,"p"),Ux(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(306,"code"),Ux(307,"po-helper"),ng(),Ux(308,`.
`),wl(309,"strong"),Ux(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(311,"blockquote")(312,"p"),Ux(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(314,"blockquote")(315,"p"),Ux(316,"Essa propriedade est\xE1 "),wl(317,"strong"),Ux(318,"depreciada"),ng(),Ux(319," e ser\xE1 removida na vers\xE3o "),wl(320,"code"),Ux(321,"23.x.x"),ng(),Ux(322,". Recomendamos utilizar a propriedade "),wl(323,"code"),Ux(324,"p-helper"),ng(),Ux(325," que oferece mais recursos e flexibilidade."),ng()()()(),wl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),Ux(330," p-append-in-body"),Ul(331,"br"),ng()()(),wl(332,"td",20)(333,"code",27),Ux(334,"boolean"),ng()(),wl(335,"td",22)(336,"p")(337,"code"),Ux(338,"false"),ng()()(),wl(339,"td",23)(340,"em")(341,"strong"),Ux(342,"(opcional)"),ng()(),wl(343,"p"),Ux(344,"Define que o popover ("),wl(345,"code"),Ux(346,"p-helper"),ng(),Ux(347," e/ou "),wl(348,"code"),Ux(349,"p-error-limit"),ng(),Ux(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(351,"blockquote")(352,"p"),Ux(353,"Quando utilizado com "),wl(354,"code"),Ux(355,"p-helper"),ng(),Ux(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),Ux(361," p-auto-focus"),Ul(362,"br"),ng()()(),wl(363,"td",20)(364,"code",27),Ux(365,"boolean"),ng()(),wl(366,"td",22)(367,"p")(368,"code"),Ux(369,"false"),ng()()(),wl(370,"td",23)(371,"em")(372,"strong"),Ux(373,"(opcional)"),ng()(),wl(374,"p"),Ux(375,"Aplica foco no elemento ao ser iniciado."),ng(),wl(376,"blockquote")(377,"p"),Ux(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),Ux(383," (p-blur)"),Ul(384,"br"),ng()()(),wl(385,"td",20)(386,"code",21),Ux(387,"EventEmitter"),ng()(),wl(388,"td",22),Ux(389,"-"),ng(),wl(390,"td",23)(391,"em")(392,"strong"),Ux(393,"(opcional)"),ng()(),wl(394,"p"),Ux(395,"Evento disparado ao sair do campo."),ng()()(),wl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),Ux(400," (p-change)"),Ul(401,"br"),ng()()(),wl(402,"td",20)(403,"code",21),Ux(404,"EventEmitter"),ng()(),wl(405,"td",22),Ux(406,"-"),ng(),wl(407,"td",23)(408,"em")(409,"strong"),Ux(410,"(opcional)"),ng()(),wl(411,"p"),Ux(412,"Evento disparado ao alterar valor e deixar o campo."),ng()()(),wl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Ux(417," (p-change-model)"),Ul(418,"br"),ng()()(),wl(419,"td",20)(420,"code",21),Ux(421,"EventEmitter"),ng()(),wl(422,"td",22),Ux(423,"-"),ng(),wl(424,"td",23)(425,"em")(426,"strong"),Ux(427,"(opcional)"),ng()(),wl(428,"p"),Ux(429,"Evento disparado ao alterar valor do model."),ng()()(),wl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),Ux(434,"p-clean"),Ul(435,"br"),ng()()(),wl(436,"td",20)(437,"code",27),Ux(438,"boolean"),ng()(),wl(439,"td",22),Ux(440,"-"),ng(),wl(441,"td",23)(442,"em")(443,"strong"),Ux(444,"(opcional)"),ng()(),wl(445,"p"),Ux(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng()()(),wl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),Ux(451," p-compact-label"),Ul(452,"br"),ng()()(),wl(453,"td",20)(454,"code",27),Ux(455,"boolean"),ng()(),wl(456,"td",22)(457,"p")(458,"code"),Ux(459,"false"),ng()()(),wl(460,"td",23)(461,"em")(462,"strong"),Ux(463,"(opcional)"),ng()(),wl(464,"p"),Ux(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(466,"p"),Ux(467,"Quando habilitado ("),wl(468,"code"),Ux(469,"true"),ng(),Ux(470,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(471,"ul")(472,"li")(473,"code"),Ux(474,"po-label"),ng()(),wl(475,"li")(476,"code"),Ux(477,"p-requirement (showRequired)"),ng()(),wl(478,"li")(479,"code"),Ux(480,"po-helper"),ng()()(),wl(481,"p"),Ux(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(483,"p"),Ux(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(485,"ul")(486,"li")(487,"code"),Ux(488,"--field-container-title-justify"),ng()(),wl(489,"li")(490,"code"),Ux(491,"--field-container-title-flex"),ng()()(),wl(492,"p"),Ux(493,"Exemplo:"),ng(),wl(494,"pre")(495,"code"),Ux(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(497,"p"),Ux(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),Ux(503,"p-disabled"),Ul(504,"br"),ng()()(),wl(505,"td",20)(506,"code",27),Ux(507,"boolean"),ng()(),wl(508,"td",22)(509,"p")(510,"code"),Ux(511,"false"),ng()()(),wl(512,"td",23)(513,"em")(514,"strong"),Ux(515,"(opcional)"),ng()(),wl(516,"p"),Ux(517,"Se verdadeiro, desabilita o campo."),ng()()(),wl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),Ux(522," p-emit-all-changes"),Ul(523,"br"),ng()()(),wl(524,"td",20)(525,"code",27),Ux(526,"boolean"),ng()(),wl(527,"td",22)(528,"p")(529,"code"),Ux(530,"false"),ng()()(),wl(531,"td",23)(532,"em")(533,"strong"),Ux(534,"(opcional)"),ng()(),wl(535,"p"),Ux(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),ng()()(),wl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),Ux(541," (p-enter)"),Ul(542,"br"),ng()()(),wl(543,"td",20)(544,"code",21),Ux(545,"EventEmitter"),ng()(),wl(546,"td",22),Ux(547,"-"),ng(),wl(548,"td",23)(549,"em")(550,"strong"),Ux(551,"(opcional)"),ng()(),wl(552,"p"),Ux(553,"Evento disparado ao entrar do campo."),ng()()(),wl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),Ux(558," p-error-async-properties"),Ul(559,"br"),ng()()(),wl(560,"td",20)(561,"code",28),Ux(562,"ErrorAsyncProperties"),ng()(),wl(563,"td",22),Ux(564,"-"),ng(),wl(565,"td",23)(566,"em")(567,"strong"),Ux(568,"(opcional)"),ng()(),wl(569,"p"),Ux(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),wl(571,"code"),Ux(572,"Reactive Forms"),ng(),Ux(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),wl(574,"code"),Ux(575,"asyncValidators"),ng(),Ux(576,"."),ng()()(),wl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),Ux(581," p-error-limit"),Ul(582,"br"),ng()()(),wl(583,"td",20)(584,"code",27),Ux(585,"boolean"),ng()(),wl(586,"td",22)(587,"p")(588,"code"),Ux(589,"false"),ng()()(),wl(590,"td",23)(591,"em")(592,"strong"),Ux(593,"(opcional)"),ng()(),wl(594,"p"),Ux(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(596,"blockquote")(597,"p"),Ux(598,"Caso essa propriedade seja definida como "),wl(599,"code"),Ux(600,"true"),ng(),Ux(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),Ux(606," p-error-pattern"),Ul(607,"br"),ng()()(),wl(608,"td",20)(609,"code",26),Ux(610,"string"),ng()(),wl(611,"td",22),Ux(612,"-"),ng(),wl(613,"td",23)(614,"em")(615,"strong"),Ux(616,"(opcional)"),ng()(),wl(617,"p"),Ux(618,"Mensagem que ser\xE1 apresentada quando o "),wl(619,"code"),Ux(620,"pattern"),ng(),Ux(621," ou a m\xE1scara n\xE3o for satisfeita."),ng(),wl(622,"blockquote")(623,"p"),Ux(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),wl(625,"code"),Ux(626,"p-required-field-error-message"),ng(),Ux(627," em conjunto."),ng()()()(),wl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Ux(632," p-help"),Ul(633,"br"),ng()()(),wl(634,"td",20)(635,"code",26),Ux(636,"string"),ng()(),wl(637,"td",22),Ux(638,"-"),ng(),wl(639,"td",23)(640,"em")(641,"strong"),Ux(642,"(opcional)"),ng()(),wl(643,"p"),Ux(644,"Texto de apoio do campo."),ng()()(),wl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Ux(649," p-hide-password-peek"),Ul(650,"br"),ng()()(),wl(651,"td",20)(652,"code",27),Ux(653,"boolean"),ng()(),wl(654,"td",22)(655,"p")(656,"code"),Ux(657,"false"),ng()()(),wl(658,"td",23)(659,"em")(660,"strong"),Ux(661,"(opcional)"),ng()(),wl(662,"p"),Ux(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),ng()()(),wl(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),Ux(668," p-icon"),Ul(669,"br"),ng()()(),wl(670,"td",20)(671,"code",26),Ux(672,"string "),ng(),wl(673,"code",29),Ux(674," TemplateRef<void>"),ng()(),wl(675,"td",22),Ux(676,"-"),ng(),wl(677,"td",23)(678,"em")(679,"strong"),Ux(680,"(opcional)"),ng()(),wl(681,"p"),Ux(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(683,"p"),Ux(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(685,"a",30),Ux(686,"Biblioteca de \xEDcones"),ng(),Ux(687,". conforme exemplo abaixo:"),ng(),wl(688,"pre")(689,"code"),Ux(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ng()(),wl(691,"p"),Ux(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(693,"em"),Ux(694,"Font Awesome"),ng(),Ux(695,", da seguinte forma:"),ng(),wl(696,"pre")(697,"code"),Ux(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ng()(),wl(699,"p"),Ux(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(701,"code"),Ux(702,"TemplateRef"),ng(),Ux(703,", conforme exemplo abaixo:"),ng(),wl(704,"pre")(705,"code"),Ux(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(707,"blockquote")(708,"p"),Ux(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(710,"code"),Ux(711,"font-size: inherit"),ng(),Ux(712," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),Ux(717," (p-keydown)"),Ul(718,"br"),ng()()(),wl(719,"td",20)(720,"code",21),Ux(721,"EventEmitter"),ng()(),wl(722,"td",22),Ux(723,"-"),ng(),wl(724,"td",23)(725,"em")(726,"strong"),Ux(727,"(opcional)"),ng()(),wl(728,"p"),Ux(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(730,"code"),Ux(731,"KeyboardEvent"),ng(),Ux(732," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),Ux(737," p-label"),Ul(738,"br"),ng()()(),wl(739,"td",20)(740,"code",26),Ux(741,"string"),ng()(),wl(742,"td",22),Ux(743,"-"),ng(),wl(744,"td",23)(745,"em")(746,"strong"),Ux(747,"(opcional)"),ng()(),wl(748,"p"),Ux(749,"R\xF3tulo do campo."),ng()()(),wl(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),Ux(754," p-label-text-wrap"),Ul(755,"br"),ng()()(),wl(756,"td",20)(757,"code",27),Ux(758,"boolean"),ng()(),wl(759,"td",22)(760,"p")(761,"code"),Ux(762,"false"),ng()()(),wl(763,"td",23)(764,"em")(765,"strong"),Ux(766,"(opcional)"),ng()(),wl(767,"p"),Ux(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(769,"code"),Ux(770,"p-label"),ng(),Ux(771,". Quando "),wl(772,"code"),Ux(773,"p-label-text-wrap"),ng(),Ux(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Ux(779," p-loading"),Ul(780,"br"),ng()()(),wl(781,"td",20)(782,"code",27),Ux(783,"boolean"),ng()(),wl(784,"td",22)(785,"p")(786,"code"),Ux(787,"false"),ng()()(),wl(788,"td",23)(789,"em")(790,"strong"),Ux(791,"(opcional)"),ng()(),wl(792,"p"),Ux(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),Ux(798,"p-mask"),Ul(799,"br"),ng()()(),wl(800,"td",20)(801,"code",26),Ux(802,"string"),ng()(),wl(803,"td",22),Ux(804,"-"),ng(),wl(805,"td",23)(806,"em")(807,"strong"),Ux(808,"(opcional)"),ng()(),wl(809,"p"),Ux(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ng()()(),wl(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),Ux(815,"p-mask-format-model"),Ul(816,"br"),ng()()(),wl(817,"td",20)(818,"code",27),Ux(819,"boolean"),ng()(),wl(820,"td",22)(821,"p")(822,"code"),Ux(823,"false"),ng()()(),wl(824,"td",23)(825,"em")(826,"strong"),Ux(827,"(opcional)"),ng()(),wl(828,"p"),Ux(829,"Indica se o "),wl(830,"code"),Ux(831,"model"),ng(),Ux(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),ng()()(),wl(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),Ux(837," p-mask-no-length-validation"),Ul(838,"br"),ng()()(),wl(839,"td",20)(840,"code",27),Ux(841,"boolean"),ng()(),wl(842,"td",22)(843,"p")(844,"code"),Ux(845,"false"),ng()()(),wl(846,"td",23)(847,"p"),Ux(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(849,"code"),Ux(850,"minLength"),ng(),Ux(851,") e m\xE1ximo ("),wl(852,"code"),Ux(853,"maxLength"),ng(),Ux(854,") quando h\xE1 uma m\xE1scara ("),wl(855,"code"),Ux(856,"p-mask"),ng(),Ux(857,") definida."),ng(),wl(858,"ul")(859,"li"),Ux(860,"Quando "),wl(861,"code"),Ux(862,"true"),ng(),Ux(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(864,"li"),Ux(865,"Quando "),wl(866,"code"),Ux(867,"false"),ng(),Ux(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(869,"blockquote")(870,"p"),Ux(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(872,"code"),Ux(873,"p-mask-format-model"),ng(),Ux(874,"."),ng()(),wl(875,"p"),Ux(876,"Exemplo:"),ng(),wl(877,"pre")(878,"code"),Ux(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ng()(),wl(880,"ul")(881,"li"),Ux(882,"Entrada: "),wl(883,"code"),Ux(884,"123-456"),ng(),Ux(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),wl(886,"code"),Ux(887,"-"),ng(),Ux(888,"."),ng()()()(),wl(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),Ux(893," p-maxlength"),Ul(894,"br"),ng()()(),wl(895,"td",20)(896,"code",31),Ux(897,"number"),ng()(),wl(898,"td",22),Ux(899,"-"),ng(),wl(900,"td",23)(901,"em")(902,"strong"),Ux(903,"(opcional)"),ng()(),wl(904,"p"),Ux(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),ng()()(),wl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),Ux(910," p-minlength"),Ul(911,"br"),ng()()(),wl(912,"td",20)(913,"code",31),Ux(914,"number"),ng()(),wl(915,"td",22),Ux(916,"-"),ng(),wl(917,"td",23)(918,"em")(919,"strong"),Ux(920,"(opcional)"),ng()(),wl(921,"p"),Ux(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),ng()()(),wl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),Ux(927," name"),Ul(928,"br"),ng()()(),wl(929,"td",20)(930,"code",26),Ux(931,"string"),ng()(),wl(932,"td",22),Ux(933,"-"),ng(),wl(934,"td",23)(935,"p"),Ux(936,"Nome e identificador do campo."),ng()()(),wl(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),Ux(941," p-no-autocomplete"),Ul(942,"br"),ng()()(),wl(943,"td",20)(944,"code",27),Ux(945,"boolean"),ng()(),wl(946,"td",22)(947,"p")(948,"code"),Ux(949,"false"),ng()()(),wl(950,"td",23)(951,"em")(952,"strong"),Ux(953,"(opcional)"),ng()(),wl(954,"p"),Ux(955,"Define a propriedade nativa "),wl(956,"code"),Ux(957,"autocomplete"),ng(),Ux(958," do campo como "),wl(959,"code"),Ux(960,"off"),ng(),Ux(961,"."),ng(),wl(962,"blockquote")(963,"p"),Ux(964,"No componente "),wl(965,"code"),Ux(966,"po-password"),ng(),Ux(967," ser\xE1 definido como "),wl(968,"code"),Ux(969,"new-password"),ng(),Ux(970,"."),ng()(),wl(971,"p"),Ux(972,"Nos componentes "),wl(973,"code"),Ux(974,"po-password"),ng(),Ux(975," e "),wl(976,"code"),Ux(977,"po-login"),ng(),Ux(978," o valor padr\xE3o ser\xE1 "),wl(979,"code"),Ux(980,"true"),ng(),Ux(981,"."),ng()()(),wl(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),Ux(986," p-optional"),Ul(987,"br"),ng()()(),wl(988,"td",20)(989,"code",27),Ux(990,"boolean"),ng()(),wl(991,"td",22)(992,"p")(993,"code"),Ux(994,"false"),ng()()(),wl(995,"td",23)(996,"em")(997,"strong"),Ux(998,"(opcional)"),ng()(),wl(999,"p"),Ux(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(1001,"blockquote")(1002,"p"),Ux(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1004,"ul")(1005,"li"),Ux(1006,"O campo conter "),wl(1007,"code"),Ux(1008,"p-required"),ng(),Ux(1009,";"),ng(),wl(1010,"li"),Ux(1011,"N\xE3o possuir "),wl(1012,"code"),Ux(1013,"p-help"),ng(),Ux(1014," e/ou "),wl(1015,"code"),Ux(1016,"p-label"),ng(),Ux(1017,"."),ng()()()(),wl(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),Ux(1022,"p-pattern"),Ul(1023,"br"),ng()()(),wl(1024,"td",20)(1025,"code",26),Ux(1026,"string"),ng()(),wl(1027,"td",22),Ux(1028,"-"),ng(),wl(1029,"td",23)(1030,"em")(1031,"strong"),Ux(1032,"(opcional)"),ng()(),wl(1033,"p"),Ux(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),wl(1035,"code"),Ux(1036,"(p-mask)"),ng(),Ux(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ng()()(),wl(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),Ux(1042," p-placeholder"),Ul(1043,"br"),ng()()(),wl(1044,"td",20)(1045,"code",26),Ux(1046,"string"),ng()(),wl(1047,"td",22)(1048,"p"),Ux(1049,"''"),ng()(),wl(1050,"td",23)(1051,"em")(1052,"strong"),Ux(1053,"(opcional)"),ng()(),wl(1054,"p"),Ux(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),Ux(1060," p-helper"),Ul(1061,"br"),ng()()(),wl(1062,"td",20)(1063,"code",32),Ux(1064,"PoHelperOptions "),ng(),wl(1065,"code",26),Ux(1066," string"),ng()(),wl(1067,"td",22),Ux(1068,"-"),ng(),wl(1069,"td",23)(1070,"em")(1071,"strong"),Ux(1072,"(opcional)"),ng()(),wl(1073,"p"),Ux(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1075,"code"),Ux(1076,"p-label"),ng(),Ux(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1078,"code"),Ux(1079,"p-label"),ng(),Ux(1080,"."),ng(),wl(1081,"blockquote")(1082,"p"),Ux(1083,"Para mais informa\xE7\xF5es acesse: "),wl(1084,"a",33),Ux(1085,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1086,"."),ng()(),wl(1087,"blockquote")(1088,"p"),Ux(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1090,"code"),Ux(1091,"p-additional-help-tooltip"),ng(),Ux(1092," e "),wl(1093,"code"),Ux(1094,"p-additional-help"),ng(),Ux(1095,") ser\xE1 ignorado."),ng()()()(),wl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),Ux(1100,"p-readonly"),Ul(1101,"br"),ng()()(),wl(1102,"td",20)(1103,"code",27),Ux(1104,"boolean"),ng()(),wl(1105,"td",22),Ux(1106,"-"),ng(),wl(1107,"td",23)(1108,"em")(1109,"strong"),Ux(1110,"(opcional)"),ng()(),wl(1111,"p"),Ux(1112,"Indica que o campo ser\xE1 somente leitura."),ng()()(),wl(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),Ux(1117,"p-required"),Ul(1118,"br"),ng()()(),wl(1119,"td",20)(1120,"code",27),Ux(1121,"boolean"),ng()(),wl(1122,"td",22)(1123,"p")(1124,"code"),Ux(1125,"false"),ng()()(),wl(1126,"td",23)(1127,"em")(1128,"strong"),Ux(1129,"(opcional)"),ng()(),wl(1130,"p"),Ux(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1132,"blockquote")(1133,"p"),Ux(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1135,"code"),Ux(1136,"(p-disabled)"),ng(),Ux(1137,"."),ng()()()(),wl(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),Ux(1142," p-required-field-error-message"),Ul(1143,"br"),ng()()(),wl(1144,"td",20)(1145,"code",27),Ux(1146,"boolean"),ng()(),wl(1147,"td",22)(1148,"p")(1149,"code"),Ux(1150,"false"),ng()()(),wl(1151,"td",23)(1152,"em")(1153,"strong"),Ux(1154,"(opcional)"),ng()(),wl(1155,"p"),Ux(1156,"Exibe a mensagem setada na propriedade "),wl(1157,"code"),Ux(1158,"p-error-pattern"),ng(),Ux(1159," se o campo estiver vazio e for requerido."),ng(),wl(1160,"blockquote")(1161,"p"),Ux(1162,"Necess\xE1rio que a propriedade "),wl(1163,"code"),Ux(1164,"p-required"),ng(),Ux(1165," esteja habilitada."),ng()()()(),wl(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),Ux(1170," p-show-required"),Ul(1171,"br"),ng()()(),wl(1172,"td",20)(1173,"code",27),Ux(1174,"boolean"),ng()(),wl(1175,"td",22),Ux(1176,"-"),ng(),wl(1177,"td",23)(1178,"p"),Ux(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1180,"blockquote")(1181,"p"),Ux(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1183,"ul")(1184,"li"),Ux(1185,"N\xE3o possuir "),wl(1186,"code"),Ux(1187,"p-help"),ng(),Ux(1188," e/ou "),wl(1189,"code"),Ux(1190,"p-label"),ng(),Ux(1191,"."),ng()()()(),wl(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),Ux(1196," p-size"),Ul(1197,"br"),ng()()(),wl(1198,"td",20)(1199,"code",26),Ux(1200,"string"),ng()(),wl(1201,"td",22)(1202,"p")(1203,"code"),Ux(1204,"medium"),ng()()(),wl(1205,"td",23)(1206,"em")(1207,"strong"),Ux(1208,"(opcional)"),ng()(),wl(1209,"p"),Ux(1210,"Define o tamanho do componente:"),ng(),wl(1211,"ul")(1212,"li")(1213,"code"),Ux(1214,"small"),ng(),Ux(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1216,"li")(1217,"code"),Ux(1218,"medium"),ng(),Ux(1219,": altura do input como 44px."),ng()(),wl(1220,"blockquote")(1221,"p"),Ux(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1223,"code"),Ux(1224,"medium"),ng(),Ux(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1226,"a",34),Ux(1227,"po-theme"),ng(),Ux(1228,"."),ng()()()(),wl(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),Ux(1233," p-upper-case"),Ul(1234,"br"),ng()()(),wl(1235,"td",20)(1236,"code",27),Ux(1237,"boolean"),ng()(),wl(1238,"td",22),Ux(1239,"-"),ng(),wl(1240,"td",23)(1241,"p"),Ux(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),ng()()()(),wl(1243,"h3",11),Ux(1244,"M\xE9todos"),ng(),wl(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),Ux(1251," showAdditionalHelp "),ng()()()()(),wl(1252,"tr",23)(1253,"td",23)(1254,"p"),Ux(1255,"M\xE9todo que exibe "),wl(1256,"code"),Ux(1257,"p-helper"),ng(),Ux(1258," ou executa a a\xE7\xE3o definida em "),wl(1259,"code"),Ux(1260,"p-helper{eventOnClick}"),ng(),Ux(1261," ou em "),wl(1262,"code"),Ux(1263,"p-additionalHelp"),ng(),Ux(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1265,"code"),Ux(1266,"p-keydown"),ng(),Ux(1267,"."),ng(),wl(1268,"blockquote")(1269,"p"),Ux(1270,"Exibe ou oculta o conte\xFAdo do componente "),wl(1271,"code"),Ux(1272,"po-helper"),ng(),Ux(1273," quando o componente estiver com foco."),ng()(),wl(1274,"pre")(1275,"code"),Ux(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ng()(),wl(1277,"pre")(1278,"code"),Ux(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1280,"br"),wl(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),Ux(1287," focus "),ng()()()()(),wl(1288,"tr",23)(1289,"td",23)(1290,"p"),Ux(1291,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1292,"p"),Ux(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1294,"pre")(1295,"code"),Ux(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ng()()()()(),Ul(1297,"br"),wl(1298,"h3"),Ux(1299,"Interfaces"),ng(),wl(1300,"h4",37)(1301,"code",5),Ux(1302,"ErrorAsyncProperties"),ng()(),wl(1303,"div",2)(1304,"p"),Ux(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),ng()(),wl(1306,"h4",11),Ux(1307,"Propriedades"),ng(),wl(1308,"table",12)(1309,"tr",13)(1310,"th",14),Ux(1311,"Nome"),ng(),wl(1312,"th",14),Ux(1313,"Tipo"),ng(),wl(1314,"th",14),Ux(1315,"Descri\xE7\xE3o"),ng()(),wl(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),Ux(1320," errorAsync"),Ul(1321,"br"),ng()()(),wl(1322,"td",20)(1323,"code",38),Ux(1324,"(value) => Observable<boolean>"),ng()(),wl(1325,"td",23)(1326,"p"),Ux(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(1328,"code"),Ux(1329,"change"),ng(),Ux(1330," ou "),wl(1331,"code"),Ux(1332,"change-model"),ng(),Ux(1333,", dependendo do valor da propriedade "),wl(1334,"code"),Ux(1335,"triggerMode"),ng(),Ux(1336,"."),ng()()(),wl(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),Ux(1341," triggerMode"),Ul(1342,"br"),ng()()(),wl(1343,"td",20)(1344,"code",39),Ux(1345,"'change' "),ng(),wl(1346,"code",40),Ux(1347," 'changeModel'"),ng()(),wl(1348,"td",23)(1349,"em")(1350,"strong"),Ux(1351,"(opcional)"),ng()(),wl(1352,"p"),Ux(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),wl(1354,"code"),Ux(1355,"change"),ng(),Ux(1356," ou "),wl(1357,"code"),Ux(1358,"change-model"),ng(),Ux(1359,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Ee=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-password-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,de,me,ce,ue],encapsulation:2})}return a})();var ke=[{path:"",component:Ee}],Se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[vL.forChild(ke),vL]})}return a})();var pt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[u5,Se]})}return a})();export{pt as DocPoPasswordModule};