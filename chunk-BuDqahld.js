import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,cs as Dp,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,ct as ma,aQ as dt,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy,c3 as zo}from'./main-6SPFG3VI.js';var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-basic"]],standalone:false,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&Ul(0,"po-login",0);},dependencies:[Dp],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Login Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-login-basic/sample-po-login-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-login-basic',
  templateUrl: './sample-po-login-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoginBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-login-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return a})();var ue=(()=>{class a{helperText;errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-labs"]],standalone:false,decls:20,vars:36,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=lx();wl(0,"po-login",1),pw("ngModelChange",function(r){return Qy(s),$x(i.login,r)||(i.login=r),Jy(r)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(r){return Qy(s),$x(i.label,r)||(i.label=r),Jy(r)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(r){return Qy(s),$x(i.help,r)||(i.help=r),Jy(r)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(r){return Qy(s),$x(i.placeholder,r)||(i.placeholder=r),Jy(r)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(r){return Qy(s),$x(i.helperText,r)||(i.helperText=r),Jy(r)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(r){return Qy(s),$x(i.pattern,r)||(i.pattern=r),Jy(r)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(r){return Qy(s),$x(i.errorPattern,r)||(i.errorPattern=r),Jy(r)}),ng(),$0(),wl(14,"po-number",11),pw("ngModelChange",function(r){return Qy(s),$x(i.minlength,r)||(i.minlength=r),Jy(r)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(r){return Qy(s),$x(i.maxlength,r)||(i.maxlength=r),Jy(r)}),ng(),$0(),wl(16,"po-checkbox-group",13),pw("ngModelChange",function(r){return Qy(s),$x(i.properties,r)||(i.properties=r),Jy(r)}),ng(),$0(),wl(17,"po-radio-group",14),pw("ngModelChange",function(r){return Qy(s),$x(i.size,r)||(i.size=r),Jy(r)}),ng(),$0(),wl(18,"div",2)(19,"po-button",15),ut("p-click",function(){return i.restore()}),ng()()();}l&2&&(hw("ngModel",i.login),YE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),G0(),Pp(3),YE("p-value",i.login),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.pattern),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.minlength),G0(),Pp(),hw("ngModel",i.maxlength),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,Dp,ha,ga,Vp],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Login Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-login-labs/sample-po-login-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-login
  name="login"
  [(ngModel)]="login"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
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
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
>
</po-login>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder">
  </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="errorPattern"
    [(ngModel)]="errorPattern"
    p-clean
    p-help="Ex.: Required field"
    p-label="Error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-labs',
  templateUrl: './sample-po-login-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
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
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-login-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return a})();var ge=(()=>{class a{poNotification=f(Bp);poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction();}};openModal(){this.poModal.open();}cleanForm(){this.userLogin="",this.userPassword="";}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm());}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&$l(zo,7),l&2){let s;uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"div",1),Ux(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),ng(),wl(3,"po-button",2),ut("p-click",function(){return i.openModal()}),ng()(),wl(4,"po-modal",3)(5,"po-login",4),pw("ngModelChange",function(p){return $x(i.userLogin,p)||(i.userLogin=p),p}),ng(),$0(),wl(6,"po-password",5),pw("ngModelChange",function(p){return $x(i.userPassword,p)||(i.userPassword=p),p}),ng(),$0(),ng()),l&2&&(Pp(4),YE("p-primary-action",i.primaryAction),Pp(),hw("ngModel",i.userLogin),G0(),Pp(),hw("ngModel",i.userPassword),G0());},dependencies:[iY,ck,Pe,Dp,ma,dt],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Login - Confirm Identity"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-confirm',
  templateUrl: './sample-po-login-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoginConfirmComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-login-confirm"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,De,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ge],encapsulation:2})}return a})();var xe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-login-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoLoginComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ng(),wl(24,"p"),Ux(25,"Importante:"),ng(),wl(26,"ul")(27,"li"),Ux(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ng()(),wl(29,"h4"),Ux(30,"Tokens customiz\xE1veis"),ng(),wl(31,"p"),Ux(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(33,"br"),Ux(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(35,"code"),Ux(36,".po-input"),ng()(),wl(37,"blockquote")(38,"p"),Ux(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),wl(40,"a",6),Ux(41,"Grid System"),ng(),Ux(42,"."),ng()(),wl(43,"blockquote")(44,"p"),Ux(45,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(46,"a",7),Ux(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(48,"."),ng()(),wl(49,"table")(50,"thead")(51,"tr")(52,"th"),Ux(53,"Propriedade"),ng(),wl(54,"th"),Ux(55,"Descri\xE7\xE3o"),ng(),wl(56,"th"),Ux(57,"Valor Padr\xE3o"),ng()()(),wl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Ux(62,"Default Values"),ng()(),Ul(63,"td")(64,"td"),ng(),wl(65,"tr")(66,"td")(67,"code"),Ux(68,"--font-family"),ng()(),wl(69,"td"),Ux(70,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(71,"td")(72,"code"),Ux(73,"var(--font-family-theme)"),ng()()(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--font-size"),ng()(),wl(78,"td"),Ux(79,"Tamanho da fonte"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--font-size-default)"),ng()()(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--text-color-placeholder"),ng()(),wl(87,"td"),Ux(88,"Cor do texto placeholder"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--color-neutral-light-30)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--color"),ng()(),wl(96,"td"),Ux(97,"Cor pincipal do input"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--color-neutral-dark-70)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--background"),ng()(),wl(105,"td"),Ux(106,"Cor de background"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--color-neutral-light-05)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--padding"),ng()(),wl(114,"td"),Ux(115,"Preenchimento"),ng(),wl(116,"td")(117,"code"),Ux(118,"0 0.5rem"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--text-color"),ng()(),wl(123,"td"),Ux(124,"Cor do texto"),ng(),wl(125,"td")(126,"code"),Ux(127,"var(--color-neutral-dark-90)"),ng()()(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--field-container-title-justify"),ng()(),wl(132,"td"),Ux(133,"Alinhamento horizontal do t\xEDtulo ("),wl(134,"code"),Ux(135,"justify-content"),ng(),Ux(136,")"),ng(),wl(137,"td")(138,"code"),Ux(139,"space-between"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--field-container-title-flex"),ng()(),wl(144,"td"),Ux(145,"Flex do t\xEDtulo ("),wl(146,"code"),Ux(147,"flex"),ng(),Ux(148,")"),ng(),wl(149,"td")(150,"code"),Ux(151,"1 auto"),ng()()(),wl(152,"tr")(153,"td")(154,"strong"),Ux(155,"Hover"),ng()(),Ul(156,"td")(157,"td"),ng(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--color-hover"),ng()(),wl(162,"td"),Ux(163,"Cor principal no estado hover"),ng(),wl(164,"td")(165,"code"),Ux(166,"var(--color-brand-01-dark)"),ng()()(),wl(167,"tr")(168,"td")(169,"code"),Ux(170,"--background-hover"),ng()(),wl(171,"td"),Ux(172,"Cor de background no estado hover"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--color-brand-01-lightest)"),ng()()(),wl(176,"tr")(177,"td")(178,"strong"),Ux(179,"Focused"),ng()(),Ul(180,"td")(181,"td"),ng(),wl(182,"tr")(183,"td")(184,"code"),Ux(185,"--color-focused"),ng()(),wl(186,"td"),Ux(187,"Cor principal no estado de focus"),ng(),wl(188,"td")(189,"code"),Ux(190,"var(--color-action-default)"),ng()()(),wl(191,"tr")(192,"td")(193,"code"),Ux(194,"--outline-color-focused"),ng()(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Disabled"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-disabled"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado disabled"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-neutral-light-30)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-disabled"),ng()(),wl(219,"td"),Ux(220,"Cor de background no estado disabled"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-neutral-light-20)"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--text-color-disabled"),ng()(),wl(228,"td"),Ux(229,"Cor do texto no estado disabled"),ng(),wl(230,"td")(231,"code"),Ux(232,"var(--color-neutral-dark-70)"),ng()()()()(),wl(233,"p"),Ul(234,"br"),Ux(235," O "),wl(236,"code"),Ux(237,"po-login"),ng(),Ux(238," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),ng()(),wl(239,"div",8)(240,"h4",9),Ux(241,"Seletor"),ng(),wl(242,"pre",10),Ux(243,`<po-login
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
</po-login>
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),wl(625,"code"),Ux(626,"p-required-field-error-message"),ng(),Ux(627," em conjunto."),ng()()()(),wl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Ux(632," p-help"),Ul(633,"br"),ng()()(),wl(634,"td",20)(635,"code",26),Ux(636,"string"),ng()(),wl(637,"td",22),Ux(638,"-"),ng(),wl(639,"td",23)(640,"em")(641,"strong"),Ux(642,"(opcional)"),ng()(),wl(643,"p"),Ux(644,"Texto de apoio do campo."),ng()()(),wl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Ux(649," p-icon"),Ul(650,"br"),ng()()(),wl(651,"td",20)(652,"code",26),Ux(653,"string "),ng(),wl(654,"code",29),Ux(655," TemplateRef<void>"),ng()(),wl(656,"td",22),Ux(657,"-"),ng(),wl(658,"td",23)(659,"em")(660,"strong"),Ux(661,"(opcional)"),ng()(),wl(662,"p"),Ux(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(664,"p"),Ux(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(666,"a",30),Ux(667,"Biblioteca de \xEDcones"),ng(),Ux(668,". conforme exemplo abaixo:"),ng(),wl(669,"pre")(670,"code"),Ux(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ng()(),wl(672,"p"),Ux(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(674,"em"),Ux(675,"Font Awesome"),ng(),Ux(676,", da seguinte forma:"),ng(),wl(677,"pre")(678,"code"),Ux(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ng()(),wl(680,"p"),Ux(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(682,"code"),Ux(683,"TemplateRef"),ng(),Ux(684,", conforme exemplo abaixo:"),ng(),wl(685,"pre")(686,"code"),Ux(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(688,"blockquote")(689,"p"),Ux(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(691,"code"),Ux(692,"font-size: inherit"),ng(),Ux(693," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),Ux(698," (p-keydown)"),Ul(699,"br"),ng()()(),wl(700,"td",20)(701,"code",21),Ux(702,"EventEmitter"),ng()(),wl(703,"td",22),Ux(704,"-"),ng(),wl(705,"td",23)(706,"em")(707,"strong"),Ux(708,"(opcional)"),ng()(),wl(709,"p"),Ux(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(711,"code"),Ux(712,"KeyboardEvent"),ng(),Ux(713," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),Ux(718," p-label"),Ul(719,"br"),ng()()(),wl(720,"td",20)(721,"code",26),Ux(722,"string"),ng()(),wl(723,"td",22),Ux(724,"-"),ng(),wl(725,"td",23)(726,"em")(727,"strong"),Ux(728,"(opcional)"),ng()(),wl(729,"p"),Ux(730,"R\xF3tulo do campo."),ng()()(),wl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),Ux(735," p-label-text-wrap"),Ul(736,"br"),ng()()(),wl(737,"td",20)(738,"code",27),Ux(739,"boolean"),ng()(),wl(740,"td",22)(741,"p")(742,"code"),Ux(743,"false"),ng()()(),wl(744,"td",23)(745,"em")(746,"strong"),Ux(747,"(opcional)"),ng()(),wl(748,"p"),Ux(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(750,"code"),Ux(751,"p-label"),ng(),Ux(752,". Quando "),wl(753,"code"),Ux(754,"p-label-text-wrap"),ng(),Ux(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),Ux(760," p-loading"),Ul(761,"br"),ng()()(),wl(762,"td",20)(763,"code",27),Ux(764,"boolean"),ng()(),wl(765,"td",22)(766,"p")(767,"code"),Ux(768,"false"),ng()()(),wl(769,"td",23)(770,"em")(771,"strong"),Ux(772,"(opcional)"),ng()(),wl(773,"p"),Ux(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Ux(779,"p-mask"),Ul(780,"br"),ng()()(),wl(781,"td",20)(782,"code",26),Ux(783,"string"),ng()(),wl(784,"td",22),Ux(785,"-"),ng(),wl(786,"td",23)(787,"em")(788,"strong"),Ux(789,"(opcional)"),ng()(),wl(790,"p"),Ux(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ng()()(),wl(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),Ux(796,"p-mask-format-model"),Ul(797,"br"),ng()()(),wl(798,"td",20)(799,"code",27),Ux(800,"boolean"),ng()(),wl(801,"td",22)(802,"p")(803,"code"),Ux(804,"false"),ng()()(),wl(805,"td",23)(806,"em")(807,"strong"),Ux(808,"(opcional)"),ng()(),wl(809,"p"),Ux(810,"Indica se o "),wl(811,"code"),Ux(812,"model"),ng(),Ux(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),ng()()(),wl(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),Ux(818," p-mask-no-length-validation"),Ul(819,"br"),ng()()(),wl(820,"td",20)(821,"code",27),Ux(822,"boolean"),ng()(),wl(823,"td",22)(824,"p")(825,"code"),Ux(826,"false"),ng()()(),wl(827,"td",23)(828,"p"),Ux(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(830,"code"),Ux(831,"minLength"),ng(),Ux(832,") e m\xE1ximo ("),wl(833,"code"),Ux(834,"maxLength"),ng(),Ux(835,") quando h\xE1 uma m\xE1scara ("),wl(836,"code"),Ux(837,"p-mask"),ng(),Ux(838,") definida."),ng(),wl(839,"ul")(840,"li"),Ux(841,"Quando "),wl(842,"code"),Ux(843,"true"),ng(),Ux(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(845,"li"),Ux(846,"Quando "),wl(847,"code"),Ux(848,"false"),ng(),Ux(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(850,"blockquote")(851,"p"),Ux(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(853,"code"),Ux(854,"p-mask-format-model"),ng(),Ux(855,"."),ng()(),wl(856,"p"),Ux(857,"Exemplo:"),ng(),wl(858,"pre")(859,"code"),Ux(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ng()(),wl(861,"ul")(862,"li"),Ux(863,"Entrada: "),wl(864,"code"),Ux(865,"123-456"),ng(),Ux(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),wl(867,"code"),Ux(868,"-"),ng(),Ux(869,"."),ng()()()(),wl(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),Ux(874," p-maxlength"),Ul(875,"br"),ng()()(),wl(876,"td",20)(877,"code",31),Ux(878,"number"),ng()(),wl(879,"td",22),Ux(880,"-"),ng(),wl(881,"td",23)(882,"em")(883,"strong"),Ux(884,"(opcional)"),ng()(),wl(885,"p"),Ux(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),ng()()(),wl(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),Ux(891," p-minlength"),Ul(892,"br"),ng()()(),wl(893,"td",20)(894,"code",31),Ux(895,"number"),ng()(),wl(896,"td",22),Ux(897,"-"),ng(),wl(898,"td",23)(899,"em")(900,"strong"),Ux(901,"(opcional)"),ng()(),wl(902,"p"),Ux(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),ng()()(),wl(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),Ux(908," name"),Ul(909,"br"),ng()()(),wl(910,"td",20)(911,"code",26),Ux(912,"string"),ng()(),wl(913,"td",22),Ux(914,"-"),ng(),wl(915,"td",23)(916,"p"),Ux(917,"Nome e identificador do campo."),ng()()(),wl(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),Ux(922," p-no-autocomplete"),Ul(923,"br"),ng()()(),wl(924,"td",20)(925,"code",27),Ux(926,"boolean"),ng()(),wl(927,"td",22)(928,"p")(929,"code"),Ux(930,"false"),ng()()(),wl(931,"td",23)(932,"em")(933,"strong"),Ux(934,"(opcional)"),ng()(),wl(935,"p"),Ux(936,"Define a propriedade nativa "),wl(937,"code"),Ux(938,"autocomplete"),ng(),Ux(939," do campo como "),wl(940,"code"),Ux(941,"off"),ng(),Ux(942,"."),ng(),wl(943,"blockquote")(944,"p"),Ux(945,"No componente "),wl(946,"code"),Ux(947,"po-password"),ng(),Ux(948," ser\xE1 definido como "),wl(949,"code"),Ux(950,"new-password"),ng(),Ux(951,"."),ng()(),wl(952,"p"),Ux(953,"Nos componentes "),wl(954,"code"),Ux(955,"po-password"),ng(),Ux(956," e "),wl(957,"code"),Ux(958,"po-login"),ng(),Ux(959," o valor padr\xE3o ser\xE1 "),wl(960,"code"),Ux(961,"true"),ng(),Ux(962,"."),ng()()(),wl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),Ux(967," p-optional"),Ul(968,"br"),ng()()(),wl(969,"td",20)(970,"code",27),Ux(971,"boolean"),ng()(),wl(972,"td",22)(973,"p")(974,"code"),Ux(975,"false"),ng()()(),wl(976,"td",23)(977,"em")(978,"strong"),Ux(979,"(opcional)"),ng()(),wl(980,"p"),Ux(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(982,"blockquote")(983,"p"),Ux(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(985,"ul")(986,"li"),Ux(987,"O campo conter "),wl(988,"code"),Ux(989,"p-required"),ng(),Ux(990,";"),ng(),wl(991,"li"),Ux(992,"N\xE3o possuir "),wl(993,"code"),Ux(994,"p-help"),ng(),Ux(995," e/ou "),wl(996,"code"),Ux(997,"p-label"),ng(),Ux(998,"."),ng()()()(),wl(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),Ux(1003,"p-pattern"),Ul(1004,"br"),ng()()(),wl(1005,"td",20)(1006,"code",26),Ux(1007,"string"),ng()(),wl(1008,"td",22),Ux(1009,"-"),ng(),wl(1010,"td",23)(1011,"em")(1012,"strong"),Ux(1013,"(opcional)"),ng()(),wl(1014,"p"),Ux(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),wl(1016,"code"),Ux(1017,"(p-mask)"),ng(),Ux(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ng()()(),wl(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),Ux(1023," p-placeholder"),Ul(1024,"br"),ng()()(),wl(1025,"td",20)(1026,"code",26),Ux(1027,"string"),ng()(),wl(1028,"td",22)(1029,"p"),Ux(1030,"''"),ng()(),wl(1031,"td",23)(1032,"em")(1033,"strong"),Ux(1034,"(opcional)"),ng()(),wl(1035,"p"),Ux(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),Ux(1041," p-helper"),Ul(1042,"br"),ng()()(),wl(1043,"td",20)(1044,"code",32),Ux(1045,"PoHelperOptions "),ng(),wl(1046,"code",26),Ux(1047," string"),ng()(),wl(1048,"td",22),Ux(1049,"-"),ng(),wl(1050,"td",23)(1051,"em")(1052,"strong"),Ux(1053,"(opcional)"),ng()(),wl(1054,"p"),Ux(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1056,"code"),Ux(1057,"p-label"),ng(),Ux(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1059,"code"),Ux(1060,"p-label"),ng(),Ux(1061,"."),ng(),wl(1062,"blockquote")(1063,"p"),Ux(1064,"Para mais informa\xE7\xF5es acesse: "),wl(1065,"a",33),Ux(1066,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1067,"."),ng()(),wl(1068,"blockquote")(1069,"p"),Ux(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1071,"code"),Ux(1072,"p-additional-help-tooltip"),ng(),Ux(1073," e "),wl(1074,"code"),Ux(1075,"p-additional-help"),ng(),Ux(1076,") ser\xE1 ignorado."),ng()()()(),wl(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),Ux(1081,"p-readonly"),Ul(1082,"br"),ng()()(),wl(1083,"td",20)(1084,"code",27),Ux(1085,"boolean"),ng()(),wl(1086,"td",22),Ux(1087,"-"),ng(),wl(1088,"td",23)(1089,"em")(1090,"strong"),Ux(1091,"(opcional)"),ng()(),wl(1092,"p"),Ux(1093,"Indica que o campo ser\xE1 somente leitura."),ng()()(),wl(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),Ux(1098,"p-required"),Ul(1099,"br"),ng()()(),wl(1100,"td",20)(1101,"code",27),Ux(1102,"boolean"),ng()(),wl(1103,"td",22)(1104,"p")(1105,"code"),Ux(1106,"false"),ng()()(),wl(1107,"td",23)(1108,"em")(1109,"strong"),Ux(1110,"(opcional)"),ng()(),wl(1111,"p"),Ux(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1113,"blockquote")(1114,"p"),Ux(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1116,"code"),Ux(1117,"(p-disabled)"),ng(),Ux(1118,"."),ng()()()(),wl(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),Ux(1123," p-required-field-error-message"),Ul(1124,"br"),ng()()(),wl(1125,"td",20)(1126,"code",27),Ux(1127,"boolean"),ng()(),wl(1128,"td",22)(1129,"p")(1130,"code"),Ux(1131,"false"),ng()()(),wl(1132,"td",23)(1133,"em")(1134,"strong"),Ux(1135,"(opcional)"),ng()(),wl(1136,"p"),Ux(1137,"Exibe a mensagem setada na propriedade "),wl(1138,"code"),Ux(1139,"p-error-pattern"),ng(),Ux(1140," se o campo estiver vazio e for requerido."),ng(),wl(1141,"blockquote")(1142,"p"),Ux(1143,"Necess\xE1rio que a propriedade "),wl(1144,"code"),Ux(1145,"p-required"),ng(),Ux(1146," esteja habilitada."),ng()()()(),wl(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),Ux(1151," p-show-required"),Ul(1152,"br"),ng()()(),wl(1153,"td",20)(1154,"code",27),Ux(1155,"boolean"),ng()(),wl(1156,"td",22),Ux(1157,"-"),ng(),wl(1158,"td",23)(1159,"p"),Ux(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1161,"blockquote")(1162,"p"),Ux(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1164,"ul")(1165,"li"),Ux(1166,"N\xE3o possuir "),wl(1167,"code"),Ux(1168,"p-help"),ng(),Ux(1169," e/ou "),wl(1170,"code"),Ux(1171,"p-label"),ng(),Ux(1172,"."),ng()()()(),wl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),Ux(1177," p-size"),Ul(1178,"br"),ng()()(),wl(1179,"td",20)(1180,"code",26),Ux(1181,"string"),ng()(),wl(1182,"td",22)(1183,"p")(1184,"code"),Ux(1185,"medium"),ng()()(),wl(1186,"td",23)(1187,"em")(1188,"strong"),Ux(1189,"(opcional)"),ng()(),wl(1190,"p"),Ux(1191,"Define o tamanho do componente:"),ng(),wl(1192,"ul")(1193,"li")(1194,"code"),Ux(1195,"small"),ng(),Ux(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1197,"li")(1198,"code"),Ux(1199,"medium"),ng(),Ux(1200,": altura do input como 44px."),ng()(),wl(1201,"blockquote")(1202,"p"),Ux(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1204,"code"),Ux(1205,"medium"),ng(),Ux(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1207,"a",34),Ux(1208,"po-theme"),ng(),Ux(1209,"."),ng()()()(),wl(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),Ux(1214," p-upper-case"),Ul(1215,"br"),ng()()(),wl(1216,"td",20)(1217,"code",27),Ux(1218,"boolean"),ng()(),wl(1219,"td",22),Ux(1220,"-"),ng(),wl(1221,"td",23)(1222,"p"),Ux(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),ng()()()(),wl(1224,"h3",11),Ux(1225,"M\xE9todos"),ng(),wl(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),Ux(1232," showAdditionalHelp "),ng()()()()(),wl(1233,"tr",23)(1234,"td",23)(1235,"p"),Ux(1236,"M\xE9todo que exibe "),wl(1237,"code"),Ux(1238,"p-helper"),ng(),Ux(1239," ou executa a a\xE7\xE3o definida em "),wl(1240,"code"),Ux(1241,"p-helper{eventOnClick}"),ng(),Ux(1242," ou em "),wl(1243,"code"),Ux(1244,"p-additionalHelp"),ng(),Ux(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1246,"code"),Ux(1247,"p-keydown"),ng(),Ux(1248,"."),ng(),wl(1249,"blockquote")(1250,"p"),Ux(1251,"Exibe ou oculta o conte\xFAdo do componente "),wl(1252,"code"),Ux(1253,"po-helper"),ng(),Ux(1254," quando o componente estiver com foco."),ng()(),wl(1255,"pre")(1256,"code"),Ux(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ng()(),wl(1258,"pre")(1259,"code"),Ux(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1261,"br"),wl(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),Ux(1268," focus "),ng()()()()(),wl(1269,"tr",23)(1270,"td",23)(1271,"p"),Ux(1272,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1273,"p"),Ux(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1275,"pre")(1276,"code"),Ux(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ng()()()()(),Ul(1278,"br"),wl(1279,"h3"),Ux(1280,"Interfaces"),ng(),wl(1281,"h4",37)(1282,"code",5),Ux(1283,"ErrorAsyncProperties"),ng()(),wl(1284,"div",2)(1285,"p"),Ux(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),ng()(),wl(1287,"h4",11),Ux(1288,"Propriedades"),ng(),wl(1289,"table",12)(1290,"tr",13)(1291,"th",14),Ux(1292,"Nome"),ng(),wl(1293,"th",14),Ux(1294,"Tipo"),ng(),wl(1295,"th",14),Ux(1296,"Descri\xE7\xE3o"),ng()(),wl(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),Ux(1301," errorAsync"),Ul(1302,"br"),ng()()(),wl(1303,"td",20)(1304,"code",38),Ux(1305,"(value) => Observable<boolean>"),ng()(),wl(1306,"td",23)(1307,"p"),Ux(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(1309,"code"),Ux(1310,"change"),ng(),Ux(1311," ou "),wl(1312,"code"),Ux(1313,"change-model"),ng(),Ux(1314,", dependendo do valor da propriedade "),wl(1315,"code"),Ux(1316,"triggerMode"),ng(),Ux(1317,"."),ng()()(),wl(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),Ux(1322," triggerMode"),Ul(1323,"br"),ng()()(),wl(1324,"td",20)(1325,"code",39),Ux(1326,"'change' "),ng(),wl(1327,"code",40),Ux(1328," 'changeModel'"),ng()(),wl(1329,"td",23)(1330,"em")(1331,"strong"),Ux(1332,"(opcional)"),ng()(),wl(1333,"p"),Ux(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),wl(1335,"code"),Ux(1336,"change"),ng(),Ux(1337," ou "),wl(1338,"code"),Ux(1339,"change-model"),ng(),Ux(1340,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-login-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),ng()()()),l&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ce,Ee,Se,xe],encapsulation:2})}return a})();var ke=[{path:"",component:be}],he=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[vL.forChild(ke),vL]})}return a})();var xt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[u5,he]})}return a})();export{xt as DocPoLoginModule};