import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,c5 as Ode,cz as Mz,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Nhe,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,bd as Ox,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-basic"]],standalone:false,decls:1,vars:0,consts:[["name","email","p-label","PO Email"]],template:function(l,i){l&1&&Gl(0,"po-email",0);},dependencies:[Mz],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Email Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-email-basic/sample-po-email-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-email-basic/sample-po-email-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-email-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ee,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ie],encapsulation:2})}return a})();var le=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}restore(){this.helperText="",this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.email="",this.event="",this.size="medium";}changeEvent(d){this.event=d;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-labs"]],standalone:false,decls:19,vars:34,consts:[["f","ngForm"],["name","email",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=Cx();Tl(0,"po-email",1),Ew("ngModelChange",function(r){return Ky(p),rN(i.email,r)||(i.email=r),Xy(r)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Ky(p),rN(i.label,r)||(i.label=r),Xy(r)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(r){return Ky(p),rN(i.help,r)||(i.help=r),Xy(r)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(r){return Ky(p),rN(i.helperText,r)||(i.helperText=r),Xy(r)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(r){return Ky(p),rN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(r){return Ky(p),rN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),sg(),t0(),Tl(13,"po-number",10),Ew("ngModelChange",function(r){return Ky(p),rN(i.minlength,r)||(i.minlength=r),Xy(r)}),sg(),t0(),Tl(14,"po-number",11),Ew("ngModelChange",function(r){return Ky(p),rN(i.maxlength,r)||(i.maxlength=r),Xy(r)}),sg(),t0(),Tl(15,"po-checkbox-group",12),Ew("ngModelChange",function(r){return Ky(p),rN(i.properties,r)||(i.properties=r),Xy(r)}),sg(),t0(),Tl(16,"po-radio-group",13),Ew("ngModelChange",function(r){return Ky(p),rN(i.size,r)||(i.size=r),Xy(r)}),sg(),t0(),Tl(17,"div",2)(18,"po-button",14),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Dw("ngModel",i.email),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),r0(),Vp(3),tw("p-value",i.email),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.placeholder),r0(),Vp(),Dw("ngModel",i.errorPattern),r0(),Vp(),Dw("ngModel",i.minlength),r0(),Vp(),Dw("ngModel",i.maxlength),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,Mz,O3,Nhe,Sde,$he],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Email Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-email-labs/sample-po-email-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-email
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-email-labs/sample-po-email-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-email-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,be,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,le],encapsulation:2})}return a})();var me=(()=>{class a{poAlert=f(Ode);email="";openDialog(){this.poAlert.alert({title:"Sent with success!",message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`});}getNameEmail(){let d=this.email.indexOf("@");return this.email.substr(0,d).toLocaleUpperCase()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-newsletter"]],standalone:false,decls:8,vars:2,consts:[["f","ngForm"],[1,"po-lg-12","po-text-center","po-font-subtitle"],[1,"po-row"],["name","email","p-clean","","p-error-pattern","Invalid e-mail","p-label","Email","p-placeholder","Enter your e-mail","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=Cx();Tl(0,"div",1),tN(1,"Enter your email to receive PO news, be sure to participate."),sg(),Tl(2,"form",null,0)(4,"div",2)(5,"po-email",3),Ew("ngModelChange",function(r){return Ky(p),rN(i.email,r)||(i.email=r),Xy(r)}),sg(),t0(),sg(),Tl(6,"div",2)(7,"po-button",4),ht("p-click",function(){return i.openDialog()}),sg()()();}if(l&2){let p=Ox(3);Vp(5),Dw("ngModel",i.email),r0(),Vp(2),tw("p-disabled",p.form.invalid);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,Mz],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-newsletter-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Email - Newsletter"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-email-newsletter/sample-po-email-newsletter.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-email-newsletter/sample-po-email-newsletter.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-email-newsletter"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ve,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,me],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-email-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoEmailComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Tl(24,"p"),tN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),tN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Tl(29,"h4"),tN(30,"Tokens customiz\xE1veis"),sg(),Tl(31,"p"),tN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(33,"br"),tN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,"code"),tN(36,".po-input"),sg()(),Tl(37,"blockquote")(38,"p"),tN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Tl(40,"a",6),tN(41,"Grid System"),sg(),tN(42,"."),sg()(),Tl(43,"blockquote")(44,"p"),tN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(46,"a",7),tN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(48,"."),sg()(),Tl(49,"table")(50,"thead")(51,"tr")(52,"th"),tN(53,"Propriedade"),sg(),Tl(54,"th"),tN(55,"Descri\xE7\xE3o"),sg(),Tl(56,"th"),tN(57,"Valor Padr\xE3o"),sg()()(),Tl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),tN(62,"Default Values"),sg()(),Gl(63,"td")(64,"td"),sg(),Tl(65,"tr")(66,"td")(67,"code"),tN(68,"--font-family"),sg()(),Tl(69,"td"),tN(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(71,"td")(72,"code"),tN(73,"var(--font-family-theme)"),sg()()(),Tl(74,"tr")(75,"td")(76,"code"),tN(77,"--font-size"),sg()(),Tl(78,"td"),tN(79,"Tamanho da fonte"),sg(),Tl(80,"td")(81,"code"),tN(82,"var(--font-size-default)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),tN(86,"--text-color-placeholder"),sg()(),Tl(87,"td"),tN(88,"Cor do texto placeholder"),sg(),Tl(89,"td")(90,"code"),tN(91,"var(--color-neutral-light-30)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),tN(95,"--color"),sg()(),Tl(96,"td"),tN(97,"Cor pincipal do input"),sg(),Tl(98,"td")(99,"code"),tN(100,"var(--color-neutral-dark-70)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),tN(104,"--background"),sg()(),Tl(105,"td"),tN(106,"Cor de background"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--color-neutral-light-05)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),tN(113,"--padding"),sg()(),Tl(114,"td"),tN(115,"Preenchimento"),sg(),Tl(116,"td")(117,"code"),tN(118,"0 0.5rem"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),tN(122,"--text-color"),sg()(),Tl(123,"td"),tN(124,"Cor do texto"),sg(),Tl(125,"td")(126,"code"),tN(127,"var(--color-neutral-dark-90)"),sg()()(),Tl(128,"tr")(129,"td")(130,"code"),tN(131,"--field-container-title-justify"),sg()(),Tl(132,"td"),tN(133,"Alinhamento horizontal do t\xEDtulo ("),Tl(134,"code"),tN(135,"justify-content"),sg(),tN(136,")"),sg(),Tl(137,"td")(138,"code"),tN(139,"space-between"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),tN(143,"--field-container-title-flex"),sg()(),Tl(144,"td"),tN(145,"Flex do t\xEDtulo ("),Tl(146,"code"),tN(147,"flex"),sg(),tN(148,")"),sg(),Tl(149,"td")(150,"code"),tN(151,"1 auto"),sg()()(),Tl(152,"tr")(153,"td")(154,"strong"),tN(155,"Hover"),sg()(),Gl(156,"td")(157,"td"),sg(),Tl(158,"tr")(159,"td")(160,"code"),tN(161,"--color-hover"),sg()(),Tl(162,"td"),tN(163,"Cor principal no estado hover"),sg(),Tl(164,"td")(165,"code"),tN(166,"var(--color-brand-01-dark)"),sg()()(),Tl(167,"tr")(168,"td")(169,"code"),tN(170,"--background-hover"),sg()(),Tl(171,"td"),tN(172,"Cor de background no estado hover"),sg(),Tl(173,"td")(174,"code"),tN(175,"var(--color-brand-01-lightest)"),sg()()(),Tl(176,"tr")(177,"td")(178,"strong"),tN(179,"Focused"),sg()(),Gl(180,"td")(181,"td"),sg(),Tl(182,"tr")(183,"td")(184,"code"),tN(185,"--color-focused"),sg()(),Tl(186,"td"),tN(187,"Cor principal no estado de focus"),sg(),Tl(188,"td")(189,"code"),tN(190,"var(--color-action-default)"),sg()()(),Tl(191,"tr")(192,"td")(193,"code"),tN(194,"--outline-color-focused"),sg()(),Tl(195,"td"),tN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),tN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),tN(203,"Disabled"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),tN(209,"--color-disabled"),sg()(),Tl(210,"td"),tN(211,"Cor principal no estado disabled"),sg(),Tl(212,"td")(213,"code"),tN(214,"var(--color-neutral-light-30)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),tN(218,"--background-disabled"),sg()(),Tl(219,"td"),tN(220,"Cor de background no estado disabled"),sg(),Tl(221,"td")(222,"code"),tN(223,"var(--color-neutral-light-20)"),sg()()(),Tl(224,"tr")(225,"td")(226,"code"),tN(227,"--text-color-disabled"),sg()(),Tl(228,"td"),tN(229,"Cor do texto no estado disabled"),sg(),Tl(230,"td")(231,"code"),tN(232,"var(--color-neutral-dark-70)"),sg()()()()(),Tl(233,"p"),Gl(234,"br"),tN(235," O "),Tl(236,"code"),tN(237,"po-email"),sg(),tN(238," \xE9 um input espec\xEDfico para receber E-mail, com o pattern j\xE1 configurado."),sg()(),Tl(239,"div",8)(240,"h4",9),tN(241,"Seletor"),sg(),Tl(242,"pre",10),tN(243,`<po-email
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
`),sg()(),Tl(244,"h4",11),tN(245,"Propriedades"),sg(),Tl(246,"table",12)(247,"tr",13)(248,"th",14),tN(249,"Nome"),sg(),Tl(250,"th",14),tN(251,"Tipo"),sg(),Tl(252,"th",14),tN(253,"Padr\xE3o"),sg(),Tl(254,"th",14),tN(255,"Descri\xE7\xE3o"),sg()(),Tl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),tN(260," (p-additional-help)"),Gl(261,"br"),sg()(),Tl(262,"div",19),tN(263,"Deprecated"),sg()(),Tl(264,"td",20)(265,"code",21),tN(266,"EventEmitter"),sg()(),Tl(267,"td",22),tN(268,"-"),sg(),Tl(269,"td",23)(270,"em")(271,"strong"),tN(272,"(opcional)"),sg()(),Tl(273,"p"),tN(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(275,"blockquote")(276,"p"),tN(277,"Essa propriedade est\xE1 "),Tl(278,"strong"),tN(279,"depreciada"),sg(),tN(280," e ser\xE1 removida na vers\xE3o "),Tl(281,"code"),tN(282,"23.x.x"),sg(),tN(283,". Recomendamos utilizar a propriedade "),Tl(284,"code"),tN(285,"p-helper"),sg(),tN(286," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),tN(291," p-additional-help-tooltip"),Gl(292,"br"),sg()(),Tl(293,"div",19),tN(294,"Deprecated"),sg()(),Tl(295,"td",20)(296,"code",26),tN(297,"string"),sg()(),Tl(298,"td",22),tN(299,"-"),sg(),Tl(300,"td",23)(301,"em")(302,"strong"),tN(303,"(opcional)"),sg()(),Tl(304,"p"),tN(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(306,"code"),tN(307,"po-helper"),sg(),tN(308,`.
`),Tl(309,"strong"),tN(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(311,"blockquote")(312,"p"),tN(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(314,"blockquote")(315,"p"),tN(316,"Essa propriedade est\xE1 "),Tl(317,"strong"),tN(318,"depreciada"),sg(),tN(319," e ser\xE1 removida na vers\xE3o "),Tl(320,"code"),tN(321,"23.x.x"),sg(),tN(322,". Recomendamos utilizar a propriedade "),Tl(323,"code"),tN(324,"p-helper"),sg(),tN(325," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),tN(330," p-append-in-body"),Gl(331,"br"),sg()()(),Tl(332,"td",20)(333,"code",27),tN(334,"boolean"),sg()(),Tl(335,"td",22)(336,"p")(337,"code"),tN(338,"false"),sg()()(),Tl(339,"td",23)(340,"em")(341,"strong"),tN(342,"(opcional)"),sg()(),Tl(343,"p"),tN(344,"Define que o popover ("),Tl(345,"code"),tN(346,"p-helper"),sg(),tN(347," e/ou "),Tl(348,"code"),tN(349,"p-error-limit"),sg(),tN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(351,"blockquote")(352,"p"),tN(353,"Quando utilizado com "),Tl(354,"code"),tN(355,"p-helper"),sg(),tN(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),tN(361," p-auto-focus"),Gl(362,"br"),sg()()(),Tl(363,"td",20)(364,"code",27),tN(365,"boolean"),sg()(),Tl(366,"td",22)(367,"p")(368,"code"),tN(369,"false"),sg()()(),Tl(370,"td",23)(371,"em")(372,"strong"),tN(373,"(opcional)"),sg()(),Tl(374,"p"),tN(375,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(376,"blockquote")(377,"p"),tN(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),tN(383," (p-blur)"),Gl(384,"br"),sg()()(),Tl(385,"td",20)(386,"code",21),tN(387,"EventEmitter"),sg()(),Tl(388,"td",22),tN(389,"-"),sg(),Tl(390,"td",23)(391,"em")(392,"strong"),tN(393,"(opcional)"),sg()(),Tl(394,"p"),tN(395,"Evento disparado ao sair do campo."),sg()()(),Tl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),tN(400," (p-change)"),Gl(401,"br"),sg()()(),Tl(402,"td",20)(403,"code",21),tN(404,"EventEmitter"),sg()(),Tl(405,"td",22),tN(406,"-"),sg(),Tl(407,"td",23)(408,"em")(409,"strong"),tN(410,"(opcional)"),sg()(),Tl(411,"p"),tN(412,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),tN(417," (p-change-model)"),Gl(418,"br"),sg()()(),Tl(419,"td",20)(420,"code",21),tN(421,"EventEmitter"),sg()(),Tl(422,"td",22),tN(423,"-"),sg(),Tl(424,"td",23)(425,"em")(426,"strong"),tN(427,"(opcional)"),sg()(),Tl(428,"p"),tN(429,"Evento disparado ao alterar valor do model."),sg()()(),Tl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),tN(434,"p-clean"),Gl(435,"br"),sg()()(),Tl(436,"td",20)(437,"code",27),tN(438,"boolean"),sg()(),Tl(439,"td",22),tN(440,"-"),sg(),Tl(441,"td",23)(442,"em")(443,"strong"),tN(444,"(opcional)"),sg()(),Tl(445,"p"),tN(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Tl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),tN(451," p-compact-label"),Gl(452,"br"),sg()()(),Tl(453,"td",20)(454,"code",27),tN(455,"boolean"),sg()(),Tl(456,"td",22)(457,"p")(458,"code"),tN(459,"false"),sg()()(),Tl(460,"td",23)(461,"em")(462,"strong"),tN(463,"(opcional)"),sg()(),Tl(464,"p"),tN(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(466,"p"),tN(467,"Quando habilitado ("),Tl(468,"code"),tN(469,"true"),sg(),tN(470,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(471,"ul")(472,"li")(473,"code"),tN(474,"po-label"),sg()(),Tl(475,"li")(476,"code"),tN(477,"p-requirement (showRequired)"),sg()(),Tl(478,"li")(479,"code"),tN(480,"po-helper"),sg()()(),Tl(481,"p"),tN(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(483,"p"),tN(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(485,"ul")(486,"li")(487,"code"),tN(488,"--field-container-title-justify"),sg()(),Tl(489,"li")(490,"code"),tN(491,"--field-container-title-flex"),sg()()(),Tl(492,"p"),tN(493,"Exemplo:"),sg(),Tl(494,"pre")(495,"code"),tN(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(497,"p"),tN(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),tN(503,"p-disabled"),Gl(504,"br"),sg()()(),Tl(505,"td",20)(506,"code",27),tN(507,"boolean"),sg()(),Tl(508,"td",22)(509,"p")(510,"code"),tN(511,"false"),sg()()(),Tl(512,"td",23)(513,"em")(514,"strong"),tN(515,"(opcional)"),sg()(),Tl(516,"p"),tN(517,"Se verdadeiro, desabilita o campo."),sg()()(),Tl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),tN(522," p-emit-all-changes"),Gl(523,"br"),sg()()(),Tl(524,"td",20)(525,"code",27),tN(526,"boolean"),sg()(),Tl(527,"td",22)(528,"p")(529,"code"),tN(530,"false"),sg()()(),Tl(531,"td",23)(532,"em")(533,"strong"),tN(534,"(opcional)"),sg()(),Tl(535,"p"),tN(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Tl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),tN(541," (p-enter)"),Gl(542,"br"),sg()()(),Tl(543,"td",20)(544,"code",21),tN(545,"EventEmitter"),sg()(),Tl(546,"td",22),tN(547,"-"),sg(),Tl(548,"td",23)(549,"em")(550,"strong"),tN(551,"(opcional)"),sg()(),Tl(552,"p"),tN(553,"Evento disparado ao entrar do campo."),sg()()(),Tl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),tN(558," p-error-async-properties"),Gl(559,"br"),sg()()(),Tl(560,"td",20)(561,"code",28),tN(562,"ErrorAsyncProperties"),sg()(),Tl(563,"td",22),tN(564,"-"),sg(),Tl(565,"td",23)(566,"em")(567,"strong"),tN(568,"(opcional)"),sg()(),Tl(569,"p"),tN(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(571,"code"),tN(572,"Reactive Forms"),sg(),tN(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Tl(574,"code"),tN(575,"asyncValidators"),sg(),tN(576,"."),sg()()(),Tl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),tN(581," p-error-limit"),Gl(582,"br"),sg()()(),Tl(583,"td",20)(584,"code",27),tN(585,"boolean"),sg()(),Tl(586,"td",22)(587,"p")(588,"code"),tN(589,"false"),sg()()(),Tl(590,"td",23)(591,"em")(592,"strong"),tN(593,"(opcional)"),sg()(),Tl(594,"p"),tN(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(596,"blockquote")(597,"p"),tN(598,"Caso essa propriedade seja definida como "),Tl(599,"code"),tN(600,"true"),sg(),tN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),tN(606," p-error-pattern"),Gl(607,"br"),sg()()(),Tl(608,"td",20)(609,"code",26),tN(610,"string"),sg()(),Tl(611,"td",22),tN(612,"-"),sg(),Tl(613,"td",23)(614,"em")(615,"strong"),tN(616,"(opcional)"),sg()(),Tl(617,"p"),tN(618,"Mensagem que ser\xE1 apresentada quando o "),Tl(619,"code"),tN(620,"pattern"),sg(),tN(621," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Tl(622,"blockquote")(623,"p"),tN(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(625,"code"),tN(626,"p-required-field-error-message"),sg(),tN(627," em conjunto."),sg()()()(),Tl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),tN(632," p-help"),Gl(633,"br"),sg()()(),Tl(634,"td",20)(635,"code",26),tN(636,"string"),sg()(),Tl(637,"td",22),tN(638,"-"),sg(),Tl(639,"td",23)(640,"em")(641,"strong"),tN(642,"(opcional)"),sg()(),Tl(643,"p"),tN(644,"Texto de apoio do campo."),sg()()(),Tl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),tN(649," p-icon"),Gl(650,"br"),sg()()(),Tl(651,"td",20)(652,"code",26),tN(653,"string "),sg(),Tl(654,"code",29),tN(655," TemplateRef<void>"),sg()(),Tl(656,"td",22),tN(657,"-"),sg(),Tl(658,"td",23)(659,"em")(660,"strong"),tN(661,"(opcional)"),sg()(),Tl(662,"p"),tN(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(664,"p"),tN(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(666,"a",30),tN(667,"Biblioteca de \xEDcones"),sg(),tN(668,". conforme exemplo abaixo:"),sg(),Tl(669,"pre")(670,"code"),tN(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Tl(672,"p"),tN(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(674,"em"),tN(675,"Font Awesome"),sg(),tN(676,", da seguinte forma:"),sg(),Tl(677,"pre")(678,"code"),tN(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Tl(680,"p"),tN(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(682,"code"),tN(683,"TemplateRef"),sg(),tN(684,", conforme exemplo abaixo:"),sg(),Tl(685,"pre")(686,"code"),tN(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(688,"blockquote")(689,"p"),tN(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(691,"code"),tN(692,"font-size: inherit"),sg(),tN(693," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),tN(698," (p-keydown)"),Gl(699,"br"),sg()()(),Tl(700,"td",20)(701,"code",21),tN(702,"EventEmitter"),sg()(),Tl(703,"td",22),tN(704,"-"),sg(),Tl(705,"td",23)(706,"em")(707,"strong"),tN(708,"(opcional)"),sg()(),Tl(709,"p"),tN(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(711,"code"),tN(712,"KeyboardEvent"),sg(),tN(713," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),tN(718," p-label"),Gl(719,"br"),sg()()(),Tl(720,"td",20)(721,"code",26),tN(722,"string"),sg()(),Tl(723,"td",22),tN(724,"-"),sg(),Tl(725,"td",23)(726,"em")(727,"strong"),tN(728,"(opcional)"),sg()(),Tl(729,"p"),tN(730,"R\xF3tulo do campo."),sg()()(),Tl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),tN(735," p-label-text-wrap"),Gl(736,"br"),sg()()(),Tl(737,"td",20)(738,"code",27),tN(739,"boolean"),sg()(),Tl(740,"td",22)(741,"p")(742,"code"),tN(743,"false"),sg()()(),Tl(744,"td",23)(745,"em")(746,"strong"),tN(747,"(opcional)"),sg()(),Tl(748,"p"),tN(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(750,"code"),tN(751,"p-label"),sg(),tN(752,". Quando "),Tl(753,"code"),tN(754,"p-label-text-wrap"),sg(),tN(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),tN(760," p-loading"),Gl(761,"br"),sg()()(),Tl(762,"td",20)(763,"code",27),tN(764,"boolean"),sg()(),Tl(765,"td",22)(766,"p")(767,"code"),tN(768,"false"),sg()()(),Tl(769,"td",23)(770,"em")(771,"strong"),tN(772,"(opcional)"),sg()(),Tl(773,"p"),tN(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),tN(779,"p-mask"),Gl(780,"br"),sg()()(),Tl(781,"td",20)(782,"code",26),tN(783,"string"),sg()(),Tl(784,"td",22),tN(785,"-"),sg(),Tl(786,"td",23)(787,"em")(788,"strong"),tN(789,"(opcional)"),sg()(),Tl(790,"p"),tN(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Tl(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),tN(796,"p-mask-format-model"),Gl(797,"br"),sg()()(),Tl(798,"td",20)(799,"code",27),tN(800,"boolean"),sg()(),Tl(801,"td",22)(802,"p")(803,"code"),tN(804,"false"),sg()()(),Tl(805,"td",23)(806,"em")(807,"strong"),tN(808,"(opcional)"),sg()(),Tl(809,"p"),tN(810,"Indica se o "),Tl(811,"code"),tN(812,"model"),sg(),tN(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Tl(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),tN(818," p-mask-no-length-validation"),Gl(819,"br"),sg()()(),Tl(820,"td",20)(821,"code",27),tN(822,"boolean"),sg()(),Tl(823,"td",22)(824,"p")(825,"code"),tN(826,"false"),sg()()(),Tl(827,"td",23)(828,"p"),tN(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(830,"code"),tN(831,"minLength"),sg(),tN(832,") e m\xE1ximo ("),Tl(833,"code"),tN(834,"maxLength"),sg(),tN(835,") quando h\xE1 uma m\xE1scara ("),Tl(836,"code"),tN(837,"p-mask"),sg(),tN(838,") definida."),sg(),Tl(839,"ul")(840,"li"),tN(841,"Quando "),Tl(842,"code"),tN(843,"true"),sg(),tN(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(845,"li"),tN(846,"Quando "),Tl(847,"code"),tN(848,"false"),sg(),tN(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(850,"blockquote")(851,"p"),tN(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(853,"code"),tN(854,"p-mask-format-model"),sg(),tN(855,"."),sg()(),Tl(856,"p"),tN(857,"Exemplo:"),sg(),Tl(858,"pre")(859,"code"),tN(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Tl(861,"ul")(862,"li"),tN(863,"Entrada: "),Tl(864,"code"),tN(865,"123-456"),sg(),tN(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Tl(867,"code"),tN(868,"-"),sg(),tN(869,"."),sg()()()(),Tl(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),tN(874," p-maxlength"),Gl(875,"br"),sg()()(),Tl(876,"td",20)(877,"code",31),tN(878,"number"),sg()(),Tl(879,"td",22),tN(880,"-"),sg(),Tl(881,"td",23)(882,"em")(883,"strong"),tN(884,"(opcional)"),sg()(),Tl(885,"p"),tN(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),tN(891," p-minlength"),Gl(892,"br"),sg()()(),Tl(893,"td",20)(894,"code",31),tN(895,"number"),sg()(),Tl(896,"td",22),tN(897,"-"),sg(),Tl(898,"td",23)(899,"em")(900,"strong"),tN(901,"(opcional)"),sg()(),Tl(902,"p"),tN(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),tN(908," name"),Gl(909,"br"),sg()()(),Tl(910,"td",20)(911,"code",26),tN(912,"string"),sg()(),Tl(913,"td",22),tN(914,"-"),sg(),Tl(915,"td",23)(916,"p"),tN(917,"Nome e identificador do campo."),sg()()(),Tl(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),tN(922," p-no-autocomplete"),Gl(923,"br"),sg()()(),Tl(924,"td",20)(925,"code",27),tN(926,"boolean"),sg()(),Tl(927,"td",22)(928,"p")(929,"code"),tN(930,"false"),sg()()(),Tl(931,"td",23)(932,"em")(933,"strong"),tN(934,"(opcional)"),sg()(),Tl(935,"p"),tN(936,"Define a propriedade nativa "),Tl(937,"code"),tN(938,"autocomplete"),sg(),tN(939," do campo como "),Tl(940,"code"),tN(941,"off"),sg(),tN(942,"."),sg(),Tl(943,"blockquote")(944,"p"),tN(945,"No componente "),Tl(946,"code"),tN(947,"po-password"),sg(),tN(948," ser\xE1 definido como "),Tl(949,"code"),tN(950,"new-password"),sg(),tN(951,"."),sg()(),Tl(952,"p"),tN(953,"Nos componentes "),Tl(954,"code"),tN(955,"po-password"),sg(),tN(956," e "),Tl(957,"code"),tN(958,"po-login"),sg(),tN(959," o valor padr\xE3o ser\xE1 "),Tl(960,"code"),tN(961,"true"),sg(),tN(962,"."),sg()()(),Tl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),tN(967," p-optional"),Gl(968,"br"),sg()()(),Tl(969,"td",20)(970,"code",27),tN(971,"boolean"),sg()(),Tl(972,"td",22)(973,"p")(974,"code"),tN(975,"false"),sg()()(),Tl(976,"td",23)(977,"em")(978,"strong"),tN(979,"(opcional)"),sg()(),Tl(980,"p"),tN(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(982,"blockquote")(983,"p"),tN(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(985,"ul")(986,"li"),tN(987,"O campo conter "),Tl(988,"code"),tN(989,"p-required"),sg(),tN(990,";"),sg(),Tl(991,"li"),tN(992,"N\xE3o possuir "),Tl(993,"code"),tN(994,"p-help"),sg(),tN(995," e/ou "),Tl(996,"code"),tN(997,"p-label"),sg(),tN(998,"."),sg()()()(),Tl(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),tN(1003,"p-pattern"),Gl(1004,"br"),sg()()(),Tl(1005,"td",20)(1006,"code",26),tN(1007,"string"),sg()(),Tl(1008,"td",22),tN(1009,"-"),sg(),Tl(1010,"td",23)(1011,"em")(1012,"strong"),tN(1013,"(opcional)"),sg()(),Tl(1014,"p"),tN(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1016,"code"),tN(1017,"(p-mask)"),sg(),tN(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Tl(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),tN(1023," p-placeholder"),Gl(1024,"br"),sg()()(),Tl(1025,"td",20)(1026,"code",26),tN(1027,"string"),sg()(),Tl(1028,"td",22)(1029,"p"),tN(1030,"''"),sg()(),Tl(1031,"td",23)(1032,"em")(1033,"strong"),tN(1034,"(opcional)"),sg()(),Tl(1035,"p"),tN(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),tN(1041," p-helper"),Gl(1042,"br"),sg()()(),Tl(1043,"td",20)(1044,"code",32),tN(1045,"PoHelperOptions "),sg(),Tl(1046,"code",26),tN(1047," string"),sg()(),Tl(1048,"td",22),tN(1049,"-"),sg(),Tl(1050,"td",23)(1051,"em")(1052,"strong"),tN(1053,"(opcional)"),sg()(),Tl(1054,"p"),tN(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1056,"code"),tN(1057,"p-label"),sg(),tN(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1059,"code"),tN(1060,"p-label"),sg(),tN(1061,"."),sg(),Tl(1062,"blockquote")(1063,"p"),tN(1064,"Para mais informa\xE7\xF5es acesse: "),Tl(1065,"a",33),tN(1066,"https://po-ui.io/documentation/po-helper"),sg(),tN(1067,"."),sg()(),Tl(1068,"blockquote")(1069,"p"),tN(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1071,"code"),tN(1072,"p-additional-help-tooltip"),sg(),tN(1073," e "),Tl(1074,"code"),tN(1075,"p-additional-help"),sg(),tN(1076,") ser\xE1 ignorado."),sg()()()(),Tl(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),tN(1081,"p-readonly"),Gl(1082,"br"),sg()()(),Tl(1083,"td",20)(1084,"code",27),tN(1085,"boolean"),sg()(),Tl(1086,"td",22),tN(1087,"-"),sg(),Tl(1088,"td",23)(1089,"em")(1090,"strong"),tN(1091,"(opcional)"),sg()(),Tl(1092,"p"),tN(1093,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),tN(1098,"p-required"),Gl(1099,"br"),sg()()(),Tl(1100,"td",20)(1101,"code",27),tN(1102,"boolean"),sg()(),Tl(1103,"td",22)(1104,"p")(1105,"code"),tN(1106,"false"),sg()()(),Tl(1107,"td",23)(1108,"em")(1109,"strong"),tN(1110,"(opcional)"),sg()(),Tl(1111,"p"),tN(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1113,"blockquote")(1114,"p"),tN(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1116,"code"),tN(1117,"(p-disabled)"),sg(),tN(1118,"."),sg()()()(),Tl(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),tN(1123," p-required-field-error-message"),Gl(1124,"br"),sg()()(),Tl(1125,"td",20)(1126,"code",27),tN(1127,"boolean"),sg()(),Tl(1128,"td",22)(1129,"p")(1130,"code"),tN(1131,"false"),sg()()(),Tl(1132,"td",23)(1133,"em")(1134,"strong"),tN(1135,"(opcional)"),sg()(),Tl(1136,"p"),tN(1137,"Exibe a mensagem setada na propriedade "),Tl(1138,"code"),tN(1139,"p-error-pattern"),sg(),tN(1140," se o campo estiver vazio e for requerido."),sg(),Tl(1141,"blockquote")(1142,"p"),tN(1143,"Necess\xE1rio que a propriedade "),Tl(1144,"code"),tN(1145,"p-required"),sg(),tN(1146," esteja habilitada."),sg()()()(),Tl(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),tN(1151," p-show-required"),Gl(1152,"br"),sg()()(),Tl(1153,"td",20)(1154,"code",27),tN(1155,"boolean"),sg()(),Tl(1156,"td",22),tN(1157,"-"),sg(),Tl(1158,"td",23)(1159,"p"),tN(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1161,"blockquote")(1162,"p"),tN(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1164,"ul")(1165,"li"),tN(1166,"N\xE3o possuir "),Tl(1167,"code"),tN(1168,"p-help"),sg(),tN(1169," e/ou "),Tl(1170,"code"),tN(1171,"p-label"),sg(),tN(1172,"."),sg()()()(),Tl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),tN(1177," p-size"),Gl(1178,"br"),sg()()(),Tl(1179,"td",20)(1180,"code",26),tN(1181,"string"),sg()(),Tl(1182,"td",22)(1183,"p")(1184,"code"),tN(1185,"medium"),sg()()(),Tl(1186,"td",23)(1187,"em")(1188,"strong"),tN(1189,"(opcional)"),sg()(),Tl(1190,"p"),tN(1191,"Define o tamanho do componente:"),sg(),Tl(1192,"ul")(1193,"li")(1194,"code"),tN(1195,"small"),sg(),tN(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1197,"li")(1198,"code"),tN(1199,"medium"),sg(),tN(1200,": altura do input como 44px."),sg()(),Tl(1201,"blockquote")(1202,"p"),tN(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1204,"code"),tN(1205,"medium"),sg(),tN(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1207,"a",34),tN(1208,"po-theme"),sg(),tN(1209,"."),sg()()()(),Tl(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),tN(1214," p-upper-case"),Gl(1215,"br"),sg()()(),Tl(1216,"td",20)(1217,"code",27),tN(1218,"boolean"),sg()(),Tl(1219,"td",22),tN(1220,"-"),sg(),Tl(1221,"td",23)(1222,"p"),tN(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Tl(1224,"h3",11),tN(1225,"M\xE9todos"),sg(),Tl(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),tN(1232," showAdditionalHelp "),sg()()()()(),Tl(1233,"tr",23)(1234,"td",23)(1235,"p"),tN(1236,"M\xE9todo que exibe "),Tl(1237,"code"),tN(1238,"p-helper"),sg(),tN(1239," ou executa a a\xE7\xE3o definida em "),Tl(1240,"code"),tN(1241,"p-helper{eventOnClick}"),sg(),tN(1242," ou em "),Tl(1243,"code"),tN(1244,"p-additionalHelp"),sg(),tN(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1246,"code"),tN(1247,"p-keydown"),sg(),tN(1248,"."),sg(),Tl(1249,"blockquote")(1250,"p"),tN(1251,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1252,"code"),tN(1253,"po-helper"),sg(),tN(1254," quando o componente estiver com foco."),sg()(),Tl(1255,"pre")(1256,"code"),tN(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Tl(1258,"pre")(1259,"code"),tN(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1261,"br"),Tl(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),tN(1268," focus "),sg()()()()(),Tl(1269,"tr",23)(1270,"td",23)(1271,"p"),tN(1272,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1273,"p"),tN(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1275,"pre")(1276,"code"),tN(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Gl(1278,"br"),Tl(1279,"h3"),tN(1280,"Interfaces"),sg(),Tl(1281,"h4",37)(1282,"code",5),tN(1283,"ErrorAsyncProperties"),sg()(),Tl(1284,"div",2)(1285,"p"),tN(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(1287,"h4",11),tN(1288,"Propriedades"),sg(),Tl(1289,"table",12)(1290,"tr",13)(1291,"th",14),tN(1292,"Nome"),sg(),Tl(1293,"th",14),tN(1294,"Tipo"),sg(),Tl(1295,"th",14),tN(1296,"Descri\xE7\xE3o"),sg()(),Tl(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),tN(1301," errorAsync"),Gl(1302,"br"),sg()()(),Tl(1303,"td",20)(1304,"code",38),tN(1305,"(value) => Observable<boolean>"),sg()(),Tl(1306,"td",23)(1307,"p"),tN(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1309,"code"),tN(1310,"change"),sg(),tN(1311," ou "),Tl(1312,"code"),tN(1313,"change-model"),sg(),tN(1314,", dependendo do valor da propriedade "),Tl(1315,"code"),tN(1316,"triggerMode"),sg(),tN(1317,"."),sg()()(),Tl(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),tN(1322," triggerMode"),Gl(1323,"br"),sg()()(),Tl(1324,"td",20)(1325,"code",39),tN(1326,"'change' "),sg(),Tl(1327,"code",40),tN(1328," 'changeModel'"),sg()(),Tl(1329,"td",23)(1330,"em")(1331,"strong"),tN(1332,"(opcional)"),sg()(),Tl(1333,"p"),tN(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(1335,"code"),tN(1336,"change"),sg(),tN(1337," ou "),Tl(1338,"code"),tN(1339,"change-model"),sg(),tN(1340,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var se=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Email",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-email-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-email-basic-view")(6,"sample-po-email-labs-view")(7,"sample-po-email-newsletter-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ae,re,de,pe],encapsulation:2})}return a})();var we=[{path:"",component:se}],ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(we),vL]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,ce]})}return a})();export{Ze as DocPoEmailModule};