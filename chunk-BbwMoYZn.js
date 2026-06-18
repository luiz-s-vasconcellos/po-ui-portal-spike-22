import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,cz as Ez,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,bd as xx,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-basic"]],standalone:false,decls:1,vars:0,consts:[["name","email","p-label","PO Email"]],template:function(l,i){l&1&&Wl(0,"po-email",0);},dependencies:[Ez],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Email Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-email-basic/sample-po-email-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-email-basic/sample-po-email-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-email-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ie],encapsulation:2})}return a})();var le=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}restore(){this.helperText="",this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.email="",this.event="",this.size="medium";}changeEvent(d){this.event=d;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-labs"]],standalone:false,decls:19,vars:34,consts:[["f","ngForm"],["name","email",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=Ex();Sl(0,"po-email",1),Ew("ngModelChange",function(r){return Xy(p),tN(i.email,r)||(i.email=r),Qy(r)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Xy(p),tN(i.label,r)||(i.label=r),Qy(r)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(r){return Xy(p),tN(i.help,r)||(i.help=r),Qy(r)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(r){return Xy(p),tN(i.helperText,r)||(i.helperText=r),Qy(r)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(r){return Xy(p),tN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(r){return Xy(p),tN(i.errorPattern,r)||(i.errorPattern=r),Qy(r)}),sg(),JA(),Sl(13,"po-number",10),Ew("ngModelChange",function(r){return Xy(p),tN(i.minlength,r)||(i.minlength=r),Qy(r)}),sg(),JA(),Sl(14,"po-number",11),Ew("ngModelChange",function(r){return Xy(p),tN(i.maxlength,r)||(i.maxlength=r),Qy(r)}),sg(),JA(),Sl(15,"po-checkbox-group",12),Ew("ngModelChange",function(r){return Xy(p),tN(i.properties,r)||(i.properties=r),Qy(r)}),sg(),JA(),Sl(16,"po-radio-group",13),Ew("ngModelChange",function(r){return Xy(p),tN(i.size,r)||(i.size=r),Qy(r)}),sg(),JA(),Sl(17,"div",2)(18,"po-button",14),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Dw("ngModel",i.email),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),t0(),Vp(3),tw("p-value",i.email),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.minlength),t0(),Vp(),Dw("ngModel",i.maxlength),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,Ez,F3,Uhe,Pde,Qhe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Email Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-email-labs/sample-po-email-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-email
  name="email"
  [(ngModel)]="email"
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
</po-email>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="email"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-email-labs/sample-po-email-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-labs',
  templateUrl: './sample-po-email-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailLabsComponent implements OnInit {
  helperText: string;
  email: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
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
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.helperText = '';
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;

    this.email = '';
    this.event = '';

    this.size = 'medium';
  }

  changeEvent(event: string) {
    this.event = event;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-email-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return a})();var me=(()=>{class a{poAlert=f(zde);email="";openDialog(){this.poAlert.alert({title:"Sent with success!",message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`});}getNameEmail(){let d=this.email.indexOf("@");return this.email.substr(0,d).toLocaleUpperCase()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-newsletter"]],standalone:false,decls:8,vars:2,consts:[["f","ngForm"],[1,"po-lg-12","po-text-center","po-font-subtitle"],[1,"po-row"],["name","email","p-clean","","p-error-pattern","Invalid e-mail","p-label","Email","p-placeholder","Enter your e-mail","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=Ex();Sl(0,"div",1),Jx(1,"Enter your email to receive PO news, be sure to participate."),sg(),Sl(2,"form",null,0)(4,"div",2)(5,"po-email",3),Ew("ngModelChange",function(r){return Xy(p),tN(i.email,r)||(i.email=r),Qy(r)}),sg(),JA(),sg(),Sl(6,"div",2)(7,"po-button",4),ht("p-click",function(){return i.openDialog()}),sg()()();}if(l&2){let p=xx(3);Vp(5),Dw("ngModel",i.email),t0(),Vp(2),tw("p-disabled",p.form.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,Ez],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-newsletter-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Email - Newsletter"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-email-newsletter/sample-po-email-newsletter.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

<form #f="ngForm">
  <div class="po-row">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-error-pattern="Invalid e-mail"
      p-label="Email"
      p-placeholder="Enter your e-mail"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send" p-kind="primary" [p-disabled]="f.form.invalid" (p-click)="openDialog()">
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-email-newsletter/sample-po-email-newsletter.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-newsletter',
  templateUrl: './sample-po-email-newsletter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailNewsletterComponent {
  private poAlert = inject(PoDialogService);

  email: string = '';

  openDialog() {
    this.poAlert.alert({
      title: 'Sent with success!',
      message: \`Ready Mr(s). \${this.getNameEmail()}, now you will get all the news from PO!\`
    });
  }

  private getNameEmail() {
    const index = this.email.indexOf('@');

    return this.email.substr(0, index).toLocaleUpperCase();
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-email-newsletter"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoEmailComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Sl(24,"p"),Jx(25,"Importante:"),sg(),Sl(26,"ul")(27,"li"),Jx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Sl(29,"h4"),Jx(30,"Tokens customiz\xE1veis"),sg(),Sl(31,"p"),Jx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),Jx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),Jx(36,".po-input"),sg()(),Sl(37,"blockquote")(38,"p"),Jx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),Jx(41,"Grid System"),sg(),Jx(42,"."),sg()(),Sl(43,"blockquote")(44,"p"),Jx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),Jx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(48,"."),sg()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),Jx(53,"Propriedade"),sg(),Sl(54,"th"),Jx(55,"Descri\xE7\xE3o"),sg(),Sl(56,"th"),Jx(57,"Valor Padr\xE3o"),sg()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Jx(62,"Default Values"),sg()(),Wl(63,"td")(64,"td"),sg(),Sl(65,"tr")(66,"td")(67,"code"),Jx(68,"--font-family"),sg()(),Sl(69,"td"),Jx(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(71,"td")(72,"code"),Jx(73,"var(--font-family-theme)"),sg()()(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-size"),sg()(),Sl(78,"td"),Jx(79,"Tamanho da fonte"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-size-default)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--text-color-placeholder"),sg()(),Sl(87,"td"),Jx(88,"Cor do texto placeholder"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--color-neutral-light-30)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--color"),sg()(),Sl(96,"td"),Jx(97,"Cor pincipal do input"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--color-neutral-dark-70)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--background"),sg()(),Sl(105,"td"),Jx(106,"Cor de background"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--color-neutral-light-05)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--padding"),sg()(),Sl(114,"td"),Jx(115,"Preenchimento"),sg(),Sl(116,"td")(117,"code"),Jx(118,"0 0.5rem"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--text-color"),sg()(),Sl(123,"td"),Jx(124,"Cor do texto"),sg(),Sl(125,"td")(126,"code"),Jx(127,"var(--color-neutral-dark-90)"),sg()()(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--field-container-title-justify"),sg()(),Sl(132,"td"),Jx(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),Jx(135,"justify-content"),sg(),Jx(136,")"),sg(),Sl(137,"td")(138,"code"),Jx(139,"space-between"),sg()()(),Sl(140,"tr")(141,"td")(142,"code"),Jx(143,"--field-container-title-flex"),sg()(),Sl(144,"td"),Jx(145,"Flex do t\xEDtulo ("),Sl(146,"code"),Jx(147,"flex"),sg(),Jx(148,")"),sg(),Sl(149,"td")(150,"code"),Jx(151,"1 auto"),sg()()(),Sl(152,"tr")(153,"td")(154,"strong"),Jx(155,"Hover"),sg()(),Wl(156,"td")(157,"td"),sg(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--color-hover"),sg()(),Sl(162,"td"),Jx(163,"Cor principal no estado hover"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--color-brand-01-dark)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--background-hover"),sg()(),Sl(171,"td"),Jx(172,"Cor de background no estado hover"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-brand-01-lightest)"),sg()()(),Sl(176,"tr")(177,"td")(178,"strong"),Jx(179,"Focused"),sg()(),Wl(180,"td")(181,"td"),sg(),Sl(182,"tr")(183,"td")(184,"code"),Jx(185,"--color-focused"),sg()(),Sl(186,"td"),Jx(187,"Cor principal no estado de focus"),sg(),Sl(188,"td")(189,"code"),Jx(190,"var(--color-action-default)"),sg()()(),Sl(191,"tr")(192,"td")(193,"code"),Jx(194,"--outline-color-focused"),sg()(),Sl(195,"td"),Jx(196,"Cor do outline do estado de focus"),sg(),Sl(197,"td")(198,"code"),Jx(199,"var(--color-action-focus)"),sg()()(),Sl(200,"tr")(201,"td")(202,"strong"),Jx(203,"Disabled"),sg()(),Wl(204,"td")(205,"td"),sg(),Sl(206,"tr")(207,"td")(208,"code"),Jx(209,"--color-disabled"),sg()(),Sl(210,"td"),Jx(211,"Cor principal no estado disabled"),sg(),Sl(212,"td")(213,"code"),Jx(214,"var(--color-neutral-light-30)"),sg()()(),Sl(215,"tr")(216,"td")(217,"code"),Jx(218,"--background-disabled"),sg()(),Sl(219,"td"),Jx(220,"Cor de background no estado disabled"),sg(),Sl(221,"td")(222,"code"),Jx(223,"var(--color-neutral-light-20)"),sg()()(),Sl(224,"tr")(225,"td")(226,"code"),Jx(227,"--text-color-disabled"),sg()(),Sl(228,"td"),Jx(229,"Cor do texto no estado disabled"),sg(),Sl(230,"td")(231,"code"),Jx(232,"var(--color-neutral-dark-70)"),sg()()()()(),Sl(233,"p"),Wl(234,"br"),Jx(235," O "),Sl(236,"code"),Jx(237,"po-email"),sg(),Jx(238," \xE9 um input espec\xEDfico para receber E-mail, com o pattern j\xE1 configurado."),sg()(),Sl(239,"div",8)(240,"h4",9),Jx(241,"Seletor"),sg(),Sl(242,"pre",10),Jx(243,`<po-email
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
</po-email>
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(625,"code"),Jx(626,"p-required-field-error-message"),sg(),Jx(627," em conjunto."),sg()()()(),Sl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Jx(632," p-help"),Wl(633,"br"),sg()()(),Sl(634,"td",20)(635,"code",26),Jx(636,"string"),sg()(),Sl(637,"td",22),Jx(638,"-"),sg(),Sl(639,"td",23)(640,"em")(641,"strong"),Jx(642,"(opcional)"),sg()(),Sl(643,"p"),Jx(644,"Texto de apoio do campo."),sg()()(),Sl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Jx(649," p-icon"),Wl(650,"br"),sg()()(),Sl(651,"td",20)(652,"code",26),Jx(653,"string "),sg(),Sl(654,"code",29),Jx(655," TemplateRef<void>"),sg()(),Sl(656,"td",22),Jx(657,"-"),sg(),Sl(658,"td",23)(659,"em")(660,"strong"),Jx(661,"(opcional)"),sg()(),Sl(662,"p"),Jx(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(664,"p"),Jx(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(666,"a",30),Jx(667,"Biblioteca de \xEDcones"),sg(),Jx(668,". conforme exemplo abaixo:"),sg(),Sl(669,"pre")(670,"code"),Jx(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Sl(672,"p"),Jx(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(674,"em"),Jx(675,"Font Awesome"),sg(),Jx(676,", da seguinte forma:"),sg(),Sl(677,"pre")(678,"code"),Jx(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Sl(680,"p"),Jx(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(682,"code"),Jx(683,"TemplateRef"),sg(),Jx(684,", conforme exemplo abaixo:"),sg(),Sl(685,"pre")(686,"code"),Jx(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(688,"blockquote")(689,"p"),Jx(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(691,"code"),Jx(692,"font-size: inherit"),sg(),Jx(693," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),Jx(698," (p-keydown)"),Wl(699,"br"),sg()()(),Sl(700,"td",20)(701,"code",21),Jx(702,"EventEmitter"),sg()(),Sl(703,"td",22),Jx(704,"-"),sg(),Sl(705,"td",23)(706,"em")(707,"strong"),Jx(708,"(opcional)"),sg()(),Sl(709,"p"),Jx(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(711,"code"),Jx(712,"KeyboardEvent"),sg(),Jx(713," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),Jx(718," p-label"),Wl(719,"br"),sg()()(),Sl(720,"td",20)(721,"code",26),Jx(722,"string"),sg()(),Sl(723,"td",22),Jx(724,"-"),sg(),Sl(725,"td",23)(726,"em")(727,"strong"),Jx(728,"(opcional)"),sg()(),Sl(729,"p"),Jx(730,"R\xF3tulo do campo."),sg()()(),Sl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),Jx(735," p-label-text-wrap"),Wl(736,"br"),sg()()(),Sl(737,"td",20)(738,"code",27),Jx(739,"boolean"),sg()(),Sl(740,"td",22)(741,"p")(742,"code"),Jx(743,"false"),sg()()(),Sl(744,"td",23)(745,"em")(746,"strong"),Jx(747,"(opcional)"),sg()(),Sl(748,"p"),Jx(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(750,"code"),Jx(751,"p-label"),sg(),Jx(752,". Quando "),Sl(753,"code"),Jx(754,"p-label-text-wrap"),sg(),Jx(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),Jx(760," p-loading"),Wl(761,"br"),sg()()(),Sl(762,"td",20)(763,"code",27),Jx(764,"boolean"),sg()(),Sl(765,"td",22)(766,"p")(767,"code"),Jx(768,"false"),sg()()(),Sl(769,"td",23)(770,"em")(771,"strong"),Jx(772,"(opcional)"),sg()(),Sl(773,"p"),Jx(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Jx(779,"p-mask"),Wl(780,"br"),sg()()(),Sl(781,"td",20)(782,"code",26),Jx(783,"string"),sg()(),Sl(784,"td",22),Jx(785,"-"),sg(),Sl(786,"td",23)(787,"em")(788,"strong"),Jx(789,"(opcional)"),sg()(),Sl(790,"p"),Jx(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Sl(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),Jx(796,"p-mask-format-model"),Wl(797,"br"),sg()()(),Sl(798,"td",20)(799,"code",27),Jx(800,"boolean"),sg()(),Sl(801,"td",22)(802,"p")(803,"code"),Jx(804,"false"),sg()()(),Sl(805,"td",23)(806,"em")(807,"strong"),Jx(808,"(opcional)"),sg()(),Sl(809,"p"),Jx(810,"Indica se o "),Sl(811,"code"),Jx(812,"model"),sg(),Jx(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Sl(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),Jx(818," p-mask-no-length-validation"),Wl(819,"br"),sg()()(),Sl(820,"td",20)(821,"code",27),Jx(822,"boolean"),sg()(),Sl(823,"td",22)(824,"p")(825,"code"),Jx(826,"false"),sg()()(),Sl(827,"td",23)(828,"p"),Jx(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(830,"code"),Jx(831,"minLength"),sg(),Jx(832,") e m\xE1ximo ("),Sl(833,"code"),Jx(834,"maxLength"),sg(),Jx(835,") quando h\xE1 uma m\xE1scara ("),Sl(836,"code"),Jx(837,"p-mask"),sg(),Jx(838,") definida."),sg(),Sl(839,"ul")(840,"li"),Jx(841,"Quando "),Sl(842,"code"),Jx(843,"true"),sg(),Jx(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(845,"li"),Jx(846,"Quando "),Sl(847,"code"),Jx(848,"false"),sg(),Jx(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(850,"blockquote")(851,"p"),Jx(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(853,"code"),Jx(854,"p-mask-format-model"),sg(),Jx(855,"."),sg()(),Sl(856,"p"),Jx(857,"Exemplo:"),sg(),Sl(858,"pre")(859,"code"),Jx(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Sl(861,"ul")(862,"li"),Jx(863,"Entrada: "),Sl(864,"code"),Jx(865,"123-456"),sg(),Jx(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(867,"code"),Jx(868,"-"),sg(),Jx(869,"."),sg()()()(),Sl(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),Jx(874," p-maxlength"),Wl(875,"br"),sg()()(),Sl(876,"td",20)(877,"code",31),Jx(878,"number"),sg()(),Sl(879,"td",22),Jx(880,"-"),sg(),Sl(881,"td",23)(882,"em")(883,"strong"),Jx(884,"(opcional)"),sg()(),Sl(885,"p"),Jx(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Sl(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),Jx(891," p-minlength"),Wl(892,"br"),sg()()(),Sl(893,"td",20)(894,"code",31),Jx(895,"number"),sg()(),Sl(896,"td",22),Jx(897,"-"),sg(),Sl(898,"td",23)(899,"em")(900,"strong"),Jx(901,"(opcional)"),sg()(),Sl(902,"p"),Jx(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Sl(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),Jx(908," name"),Wl(909,"br"),sg()()(),Sl(910,"td",20)(911,"code",26),Jx(912,"string"),sg()(),Sl(913,"td",22),Jx(914,"-"),sg(),Sl(915,"td",23)(916,"p"),Jx(917,"Nome e identificador do campo."),sg()()(),Sl(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),Jx(922," p-no-autocomplete"),Wl(923,"br"),sg()()(),Sl(924,"td",20)(925,"code",27),Jx(926,"boolean"),sg()(),Sl(927,"td",22)(928,"p")(929,"code"),Jx(930,"false"),sg()()(),Sl(931,"td",23)(932,"em")(933,"strong"),Jx(934,"(opcional)"),sg()(),Sl(935,"p"),Jx(936,"Define a propriedade nativa "),Sl(937,"code"),Jx(938,"autocomplete"),sg(),Jx(939," do campo como "),Sl(940,"code"),Jx(941,"off"),sg(),Jx(942,"."),sg(),Sl(943,"blockquote")(944,"p"),Jx(945,"No componente "),Sl(946,"code"),Jx(947,"po-password"),sg(),Jx(948," ser\xE1 definido como "),Sl(949,"code"),Jx(950,"new-password"),sg(),Jx(951,"."),sg()(),Sl(952,"p"),Jx(953,"Nos componentes "),Sl(954,"code"),Jx(955,"po-password"),sg(),Jx(956," e "),Sl(957,"code"),Jx(958,"po-login"),sg(),Jx(959," o valor padr\xE3o ser\xE1 "),Sl(960,"code"),Jx(961,"true"),sg(),Jx(962,"."),sg()()(),Sl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),Jx(967," p-optional"),Wl(968,"br"),sg()()(),Sl(969,"td",20)(970,"code",27),Jx(971,"boolean"),sg()(),Sl(972,"td",22)(973,"p")(974,"code"),Jx(975,"false"),sg()()(),Sl(976,"td",23)(977,"em")(978,"strong"),Jx(979,"(opcional)"),sg()(),Sl(980,"p"),Jx(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(982,"blockquote")(983,"p"),Jx(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(985,"ul")(986,"li"),Jx(987,"O campo conter "),Sl(988,"code"),Jx(989,"p-required"),sg(),Jx(990,";"),sg(),Sl(991,"li"),Jx(992,"N\xE3o possuir "),Sl(993,"code"),Jx(994,"p-help"),sg(),Jx(995," e/ou "),Sl(996,"code"),Jx(997,"p-label"),sg(),Jx(998,"."),sg()()()(),Sl(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),Jx(1003,"p-pattern"),Wl(1004,"br"),sg()()(),Sl(1005,"td",20)(1006,"code",26),Jx(1007,"string"),sg()(),Sl(1008,"td",22),Jx(1009,"-"),sg(),Sl(1010,"td",23)(1011,"em")(1012,"strong"),Jx(1013,"(opcional)"),sg()(),Sl(1014,"p"),Jx(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1016,"code"),Jx(1017,"(p-mask)"),sg(),Jx(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Sl(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),Jx(1023," p-placeholder"),Wl(1024,"br"),sg()()(),Sl(1025,"td",20)(1026,"code",26),Jx(1027,"string"),sg()(),Sl(1028,"td",22)(1029,"p"),Jx(1030,"''"),sg()(),Sl(1031,"td",23)(1032,"em")(1033,"strong"),Jx(1034,"(opcional)"),sg()(),Sl(1035,"p"),Jx(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),Jx(1041," p-helper"),Wl(1042,"br"),sg()()(),Sl(1043,"td",20)(1044,"code",32),Jx(1045,"PoHelperOptions "),sg(),Sl(1046,"code",26),Jx(1047," string"),sg()(),Sl(1048,"td",22),Jx(1049,"-"),sg(),Sl(1050,"td",23)(1051,"em")(1052,"strong"),Jx(1053,"(opcional)"),sg()(),Sl(1054,"p"),Jx(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1056,"code"),Jx(1057,"p-label"),sg(),Jx(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1059,"code"),Jx(1060,"p-label"),sg(),Jx(1061,"."),sg(),Sl(1062,"blockquote")(1063,"p"),Jx(1064,"Para mais informa\xE7\xF5es acesse: "),Sl(1065,"a",33),Jx(1066,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1067,"."),sg()(),Sl(1068,"blockquote")(1069,"p"),Jx(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1071,"code"),Jx(1072,"p-additional-help-tooltip"),sg(),Jx(1073," e "),Sl(1074,"code"),Jx(1075,"p-additional-help"),sg(),Jx(1076,") ser\xE1 ignorado."),sg()()()(),Sl(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),Jx(1081,"p-readonly"),Wl(1082,"br"),sg()()(),Sl(1083,"td",20)(1084,"code",27),Jx(1085,"boolean"),sg()(),Sl(1086,"td",22),Jx(1087,"-"),sg(),Sl(1088,"td",23)(1089,"em")(1090,"strong"),Jx(1091,"(opcional)"),sg()(),Sl(1092,"p"),Jx(1093,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Sl(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),Jx(1098,"p-required"),Wl(1099,"br"),sg()()(),Sl(1100,"td",20)(1101,"code",27),Jx(1102,"boolean"),sg()(),Sl(1103,"td",22)(1104,"p")(1105,"code"),Jx(1106,"false"),sg()()(),Sl(1107,"td",23)(1108,"em")(1109,"strong"),Jx(1110,"(opcional)"),sg()(),Sl(1111,"p"),Jx(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(1113,"blockquote")(1114,"p"),Jx(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1116,"code"),Jx(1117,"(p-disabled)"),sg(),Jx(1118,"."),sg()()()(),Sl(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),Jx(1123," p-required-field-error-message"),Wl(1124,"br"),sg()()(),Sl(1125,"td",20)(1126,"code",27),Jx(1127,"boolean"),sg()(),Sl(1128,"td",22)(1129,"p")(1130,"code"),Jx(1131,"false"),sg()()(),Sl(1132,"td",23)(1133,"em")(1134,"strong"),Jx(1135,"(opcional)"),sg()(),Sl(1136,"p"),Jx(1137,"Exibe a mensagem setada na propriedade "),Sl(1138,"code"),Jx(1139,"p-error-pattern"),sg(),Jx(1140," se o campo estiver vazio e for requerido."),sg(),Sl(1141,"blockquote")(1142,"p"),Jx(1143,"Necess\xE1rio que a propriedade "),Sl(1144,"code"),Jx(1145,"p-required"),sg(),Jx(1146," esteja habilitada."),sg()()()(),Sl(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),Jx(1151," p-show-required"),Wl(1152,"br"),sg()()(),Sl(1153,"td",20)(1154,"code",27),Jx(1155,"boolean"),sg()(),Sl(1156,"td",22),Jx(1157,"-"),sg(),Sl(1158,"td",23)(1159,"p"),Jx(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1161,"blockquote")(1162,"p"),Jx(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1164,"ul")(1165,"li"),Jx(1166,"N\xE3o possuir "),Sl(1167,"code"),Jx(1168,"p-help"),sg(),Jx(1169," e/ou "),Sl(1170,"code"),Jx(1171,"p-label"),sg(),Jx(1172,"."),sg()()()(),Sl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),Jx(1177," p-size"),Wl(1178,"br"),sg()()(),Sl(1179,"td",20)(1180,"code",26),Jx(1181,"string"),sg()(),Sl(1182,"td",22)(1183,"p")(1184,"code"),Jx(1185,"medium"),sg()()(),Sl(1186,"td",23)(1187,"em")(1188,"strong"),Jx(1189,"(opcional)"),sg()(),Sl(1190,"p"),Jx(1191,"Define o tamanho do componente:"),sg(),Sl(1192,"ul")(1193,"li")(1194,"code"),Jx(1195,"small"),sg(),Jx(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1197,"li")(1198,"code"),Jx(1199,"medium"),sg(),Jx(1200,": altura do input como 44px."),sg()(),Sl(1201,"blockquote")(1202,"p"),Jx(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1204,"code"),Jx(1205,"medium"),sg(),Jx(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1207,"a",34),Jx(1208,"po-theme"),sg(),Jx(1209,"."),sg()()()(),Sl(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),Jx(1214," p-upper-case"),Wl(1215,"br"),sg()()(),Sl(1216,"td",20)(1217,"code",27),Jx(1218,"boolean"),sg()(),Sl(1219,"td",22),Jx(1220,"-"),sg(),Sl(1221,"td",23)(1222,"p"),Jx(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Sl(1224,"h3",11),Jx(1225,"M\xE9todos"),sg(),Sl(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),Jx(1232," showAdditionalHelp "),sg()()()()(),Sl(1233,"tr",23)(1234,"td",23)(1235,"p"),Jx(1236,"M\xE9todo que exibe "),Sl(1237,"code"),Jx(1238,"p-helper"),sg(),Jx(1239," ou executa a a\xE7\xE3o definida em "),Sl(1240,"code"),Jx(1241,"p-helper{eventOnClick}"),sg(),Jx(1242," ou em "),Sl(1243,"code"),Jx(1244,"p-additionalHelp"),sg(),Jx(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1246,"code"),Jx(1247,"p-keydown"),sg(),Jx(1248,"."),sg(),Sl(1249,"blockquote")(1250,"p"),Jx(1251,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1252,"code"),Jx(1253,"po-helper"),sg(),Jx(1254," quando o componente estiver com foco."),sg()(),Sl(1255,"pre")(1256,"code"),Jx(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Sl(1258,"pre")(1259,"code"),Jx(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1261,"br"),Sl(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),Jx(1268," focus "),sg()()()()(),Sl(1269,"tr",23)(1270,"td",23)(1271,"p"),Jx(1272,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1273,"p"),Jx(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1275,"pre")(1276,"code"),Jx(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Wl(1278,"br"),Sl(1279,"h3"),Jx(1280,"Interfaces"),sg(),Sl(1281,"h4",37)(1282,"code",5),Jx(1283,"ErrorAsyncProperties"),sg()(),Sl(1284,"div",2)(1285,"p"),Jx(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Sl(1287,"h4",11),Jx(1288,"Propriedades"),sg(),Sl(1289,"table",12)(1290,"tr",13)(1291,"th",14),Jx(1292,"Nome"),sg(),Sl(1293,"th",14),Jx(1294,"Tipo"),sg(),Sl(1295,"th",14),Jx(1296,"Descri\xE7\xE3o"),sg()(),Sl(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),Jx(1301," errorAsync"),Wl(1302,"br"),sg()()(),Sl(1303,"td",20)(1304,"code",38),Jx(1305,"(value) => Observable<boolean>"),sg()(),Sl(1306,"td",23)(1307,"p"),Jx(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1309,"code"),Jx(1310,"change"),sg(),Jx(1311," ou "),Sl(1312,"code"),Jx(1313,"change-model"),sg(),Jx(1314,", dependendo do valor da propriedade "),Sl(1315,"code"),Jx(1316,"triggerMode"),sg(),Jx(1317,"."),sg()()(),Sl(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),Jx(1322," triggerMode"),Wl(1323,"br"),sg()()(),Sl(1324,"td",20)(1325,"code",39),Jx(1326,"'change' "),sg(),Sl(1327,"code",40),Jx(1328," 'changeModel'"),sg()(),Sl(1329,"td",23)(1330,"em")(1331,"strong"),Jx(1332,"(opcional)"),sg()(),Sl(1333,"p"),Jx(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1335,"code"),Jx(1336,"change"),sg(),Jx(1337," ou "),Sl(1338,"code"),Jx(1339,"change-model"),sg(),Jx(1340,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Email",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-email-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-email-basic-view")(6,"sample-po-email-labs-view")(7,"sample-po-email-newsletter-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ae,re,de,pe],encapsulation:2})}return a})();var we=[{path:"",component:se}],ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(we),pL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,ce]})}return a})();export{Ze as DocPoEmailModule};