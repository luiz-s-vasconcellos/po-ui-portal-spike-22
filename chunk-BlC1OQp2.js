import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,cM as nY,cN as lm,b4 as F3,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,cp as Uhe,c8 as Pde,aJ as Ghe,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cQ as Rk,cR as Tk,cz as Ez,cX as O3,b6 as Yo,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy,bd as xx}from'./main-UTR4MKMU.js';var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&Wl(0,"po-input",0);},dependencies:[F3],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Input Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-input-basic/sample-po-input-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ce],encapsulation:2})}return a})();var ge=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"po-input",1),Ew("ngModelChange",function(l){return Xy(s),tN(i.input,l)||(i.input=l),Qy(l)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(l){return Xy(s),tN(i.label,l)||(i.label=l),Qy(l)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(l){return Xy(s),tN(i.help,l)||(i.help=l),Qy(l)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(l){return Xy(s),tN(i.helperText,l)||(i.helperText=l),Qy(l)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(l){return Xy(s),tN(i.placeholder,l)||(i.placeholder=l),Qy(l)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(l){return Xy(s),tN(i.errorPattern,l)||(i.errorPattern=l),Qy(l)}),sg(),JA(),Sl(13,"po-input",10),Ew("ngModelChange",function(l){return Xy(s),tN(i.mask,l)||(i.mask=l),Qy(l)}),sg(),JA(),Sl(14,"po-input",11),Ew("ngModelChange",function(l){return Xy(s),tN(i.pattern,l)||(i.pattern=l),Qy(l)}),sg(),JA(),Sl(15,"po-number",12),Ew("ngModelChange",function(l){return Xy(s),tN(i.minlength,l)||(i.minlength=l),Qy(l)}),sg(),JA(),Sl(16,"po-number",13),Ew("ngModelChange",function(l){return Xy(s),tN(i.maxlength,l)||(i.maxlength=l),Qy(l)}),sg(),JA(),Sl(17,"po-select",14),Ew("ngModelChange",function(l){return Xy(s),tN(i.icon,l)||(i.icon=l),Qy(l)}),sg(),JA(),Sl(18,"po-checkbox-group",15),Ew("ngModelChange",function(l){return Xy(s),tN(i.properties,l)||(i.properties=l),Qy(l)}),sg(),JA(),Sl(19,"po-radio-group",16),Ew("ngModelChange",function(l){return Xy(s),tN(i.size,l)||(i.size=l),Qy(l)}),sg(),JA(),Sl(20,"div",2)(21,"po-button",17),ht("p-click",function(){return Xy(s),xx(7).reset(),Qy(i.restore())}),sg()()();}r&2&&(Dw("ngModel",i.input),tw("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),t0(),Vp(3),tw("p-value",i.input),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.mask),t0(),Vp(),Dw("ngModel",i.pattern),t0(),Vp(),Dw("ngModel",i.minlength),t0(),Vp(),Dw("ngModel",i.maxlength),t0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconOptions),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Pde,Ghe,Qhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Input Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-input-labs/sample-po-input-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-helper]="helperText"
  [p-clean]="$safeNavigationMigration(properties?.includes('clean'))"
  [p-disabled]="$safeNavigationMigration(properties?.includes('disabled'))"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-mask]="mask"
  [p-mask-format-model]="$safeNavigationMigration(properties?.includes('maskFormatModel'))"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="$safeNavigationMigration(properties?.includes('optional'))"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="$safeNavigationMigration(properties?.includes('required'))"
  [p-required-field-error-message]="$safeNavigationMigration(properties?.includes('requiredFieldErrorMessage'))"
  [p-readonly]="$safeNavigationMigration(properties?.includes('readonly'))"
  [p-upper-case]="$safeNavigationMigration(properties?.includes('uppercase'))"
  [p-show-required]="$safeNavigationMigration(properties?.includes('showRequired'))"
  [p-mask-no-length-validation]="$safeNavigationMigration(properties?.includes('maskNoLengthValidation'))"
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
</po-input>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

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
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  helperText: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return a})();var qe=["reactiveFormData"],Se=(()=>{class a{fb=f(nY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&ql(qe,7),r&2){let s;lo(s=uo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(Sl(0,"form",1)(1,"div",2),Wl(2,"po-input",3),JA(),sg(),Sl(3,"div",2),Wl(4,"po-input",4),JA(),Wl(5,"po-number",5),JA(),sg(),Sl(6,"div",2),Wl(7,"po-email",6),JA(),Wl(8,"po-url",7),JA(),sg(),Sl(9,"div",2)(10,"po-button",8),ht("p-click",function(){return i.saveForm()}),sg()()(),Sl(11,"po-modal",9,0)(13,"div",2),Wl(14,"po-info",10),sg(),Wl(15,"po-divider"),Sl(16,"div",2),Wl(17,"po-info",11)(18,"po-info",12),sg(),Wl(19,"po-divider"),Sl(20,"div",2),Wl(21,"po-info",13)(22,"po-info",14),sg()()),r&2&&(tw("formGroup",i.reactiveForm),Vp(2),t0(),Vp(2),t0(),Vp(),t0(),Vp(2),t0(),Vp(),t0(),Vp(2),tw("p-disabled",!i.reactiveForm.valid),Vp(),tw("p-primary-action",i.modalPrimaryAction),Vp(3),tw("p-value",i.reactiveForm.controls.name.value),Vp(3),tw("p-value",i.reactiveForm.controls.address.value),Vp(),tw("p-value",i.reactiveForm.controls.number.value),Vp(3),tw("p-value",i.reactiveForm.controls.email.value),Vp(),tw("p-value",i.reactiveForm.controls.website.value));},dependencies:[J9,K9,X9,Rk,Tk,Qt,mv,Ez,F3,Uhe,O3,Qhe,Yo],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Input - Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);

  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor() {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-input-reactive-form"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoInputComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Sl(24,"p"),Jx(25,"Importante:"),sg(),Sl(26,"ul")(27,"li"),Jx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Sl(29,"h4"),Jx(30,"Tokens customiz\xE1veis"),sg(),Sl(31,"p"),Jx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),Jx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),Jx(36,".po-input"),sg()(),Sl(37,"blockquote")(38,"p"),Jx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),Jx(41,"Grid System"),sg(),Jx(42,"."),sg()(),Sl(43,"blockquote")(44,"p"),Jx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),Jx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(48,"."),sg()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),Jx(53,"Propriedade"),sg(),Sl(54,"th"),Jx(55,"Descri\xE7\xE3o"),sg(),Sl(56,"th"),Jx(57,"Valor Padr\xE3o"),sg()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Jx(62,"Default Values"),sg()(),Wl(63,"td")(64,"td"),sg(),Sl(65,"tr")(66,"td")(67,"code"),Jx(68,"--font-family"),sg()(),Sl(69,"td"),Jx(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(71,"td")(72,"code"),Jx(73,"var(--font-family-theme)"),sg()()(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-size"),sg()(),Sl(78,"td"),Jx(79,"Tamanho da fonte"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-size-default)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--text-color-placeholder"),sg()(),Sl(87,"td"),Jx(88,"Cor do texto placeholder"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--color-neutral-light-30)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--color"),sg()(),Sl(96,"td"),Jx(97,"Cor pincipal do input"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--color-neutral-dark-70)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--background"),sg()(),Sl(105,"td"),Jx(106,"Cor de background"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--color-neutral-light-05)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--padding"),sg()(),Sl(114,"td"),Jx(115,"Preenchimento"),sg(),Sl(116,"td")(117,"code"),Jx(118,"0 0.5rem"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--text-color"),sg()(),Sl(123,"td"),Jx(124,"Cor do texto"),sg(),Sl(125,"td")(126,"code"),Jx(127,"var(--color-neutral-dark-90)"),sg()()(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--field-container-title-justify"),sg()(),Sl(132,"td"),Jx(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),Jx(135,"justify-content"),sg(),Jx(136,")"),sg(),Sl(137,"td")(138,"code"),Jx(139,"space-between"),sg()()(),Sl(140,"tr")(141,"td")(142,"code"),Jx(143,"--field-container-title-flex"),sg()(),Sl(144,"td"),Jx(145,"Flex do t\xEDtulo ("),Sl(146,"code"),Jx(147,"flex"),sg(),Jx(148,")"),sg(),Sl(149,"td")(150,"code"),Jx(151,"1 auto"),sg()()(),Sl(152,"tr")(153,"td")(154,"strong"),Jx(155,"Hover"),sg()(),Wl(156,"td")(157,"td"),sg(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--color-hover"),sg()(),Sl(162,"td"),Jx(163,"Cor principal no estado hover"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--color-brand-01-dark)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--background-hover"),sg()(),Sl(171,"td"),Jx(172,"Cor de background no estado hover"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-brand-01-lightest)"),sg()()(),Sl(176,"tr")(177,"td")(178,"strong"),Jx(179,"Focused"),sg()(),Wl(180,"td")(181,"td"),sg(),Sl(182,"tr")(183,"td")(184,"code"),Jx(185,"--color-focused"),sg()(),Sl(186,"td"),Jx(187,"Cor principal no estado de focus"),sg(),Sl(188,"td")(189,"code"),Jx(190,"var(--color-action-default)"),sg()()(),Sl(191,"tr")(192,"td")(193,"code"),Jx(194,"--outline-color-focused"),sg()(),Sl(195,"td"),Jx(196,"Cor do outline do estado de focus"),sg(),Sl(197,"td")(198,"code"),Jx(199,"var(--color-action-focus)"),sg()()(),Sl(200,"tr")(201,"td")(202,"strong"),Jx(203,"Disabled"),sg()(),Wl(204,"td")(205,"td"),sg(),Sl(206,"tr")(207,"td")(208,"code"),Jx(209,"--color-disabled"),sg()(),Sl(210,"td"),Jx(211,"Cor principal no estado disabled"),sg(),Sl(212,"td")(213,"code"),Jx(214,"var(--color-neutral-light-30)"),sg()()(),Sl(215,"tr")(216,"td")(217,"code"),Jx(218,"--background-disabled"),sg()(),Sl(219,"td"),Jx(220,"Cor de background no estado disabled"),sg(),Sl(221,"td")(222,"code"),Jx(223,"var(--color-neutral-light-20)"),sg()()(),Sl(224,"tr")(225,"td")(226,"code"),Jx(227,"--text-color-disabled"),sg()(),Sl(228,"td"),Jx(229,"Cor do texto no estado disabled"),sg(),Sl(230,"td")(231,"code"),Jx(232,"var(--color-neutral-dark-70)"),sg()()()()(),Wl(233,"br"),sg(),Sl(234,"div",8)(235,"h4",9),Jx(236,"Seletor"),sg(),Sl(237,"pre",10),Jx(238,`<po-input
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
</po-input>
`),sg()(),Sl(239,"h4",11),Jx(240,"Propriedades"),sg(),Sl(241,"table",12)(242,"tr",13)(243,"th",14),Jx(244,"Nome"),sg(),Sl(245,"th",14),Jx(246,"Tipo"),sg(),Sl(247,"th",14),Jx(248,"Padr\xE3o"),sg(),Sl(249,"th",14),Jx(250,"Descri\xE7\xE3o"),sg()(),Sl(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),Jx(255," (p-additional-help)"),Wl(256,"br"),sg()(),Sl(257,"div",19),Jx(258,"Deprecated"),sg()(),Sl(259,"td",20)(260,"code",21),Jx(261,"EventEmitter"),sg()(),Sl(262,"td",22),Jx(263,"-"),sg(),Sl(264,"td",23)(265,"em")(266,"strong"),Jx(267,"(opcional)"),sg()(),Sl(268,"p"),Jx(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(270,"blockquote")(271,"p"),Jx(272,"Essa propriedade est\xE1 "),Sl(273,"strong"),Jx(274,"depreciada"),sg(),Jx(275," e ser\xE1 removida na vers\xE3o "),Sl(276,"code"),Jx(277,"23.x.x"),sg(),Jx(278,". Recomendamos utilizar a propriedade "),Sl(279,"code"),Jx(280,"p-helper"),sg(),Jx(281," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),Jx(286," p-additional-help-tooltip"),Wl(287,"br"),sg()(),Sl(288,"div",19),Jx(289,"Deprecated"),sg()(),Sl(290,"td",20)(291,"code",26),Jx(292,"string"),sg()(),Sl(293,"td",22),Jx(294,"-"),sg(),Sl(295,"td",23)(296,"em")(297,"strong"),Jx(298,"(opcional)"),sg()(),Sl(299,"p"),Jx(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(301,"code"),Jx(302,"po-helper"),sg(),Jx(303,`.
`),Sl(304,"strong"),Jx(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(306,"blockquote")(307,"p"),Jx(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(309,"blockquote")(310,"p"),Jx(311,"Essa propriedade est\xE1 "),Sl(312,"strong"),Jx(313,"depreciada"),sg(),Jx(314," e ser\xE1 removida na vers\xE3o "),Sl(315,"code"),Jx(316,"23.x.x"),sg(),Jx(317,". Recomendamos utilizar a propriedade "),Sl(318,"code"),Jx(319,"p-helper"),sg(),Jx(320," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),Jx(325," p-append-in-body"),Wl(326,"br"),sg()()(),Sl(327,"td",20)(328,"code",27),Jx(329,"boolean"),sg()(),Sl(330,"td",22)(331,"p")(332,"code"),Jx(333,"false"),sg()()(),Sl(334,"td",23)(335,"em")(336,"strong"),Jx(337,"(opcional)"),sg()(),Sl(338,"p"),Jx(339,"Define que o popover ("),Sl(340,"code"),Jx(341,"p-helper"),sg(),Jx(342," e/ou "),Sl(343,"code"),Jx(344,"p-error-limit"),sg(),Jx(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(346,"blockquote")(347,"p"),Jx(348,"Quando utilizado com "),Sl(349,"code"),Jx(350,"p-helper"),sg(),Jx(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),Jx(356," p-auto-focus"),Wl(357,"br"),sg()()(),Sl(358,"td",20)(359,"code",27),Jx(360,"boolean"),sg()(),Sl(361,"td",22)(362,"p")(363,"code"),Jx(364,"false"),sg()()(),Sl(365,"td",23)(366,"em")(367,"strong"),Jx(368,"(opcional)"),sg()(),Sl(369,"p"),Jx(370,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(371,"blockquote")(372,"p"),Jx(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),Jx(378," (p-blur)"),Wl(379,"br"),sg()()(),Sl(380,"td",20)(381,"code",21),Jx(382,"EventEmitter"),sg()(),Sl(383,"td",22),Jx(384,"-"),sg(),Sl(385,"td",23)(386,"em")(387,"strong"),Jx(388,"(opcional)"),sg()(),Sl(389,"p"),Jx(390,"Evento disparado ao sair do campo."),sg()()(),Sl(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),Jx(395," (p-change)"),Wl(396,"br"),sg()()(),Sl(397,"td",20)(398,"code",21),Jx(399,"EventEmitter"),sg()(),Sl(400,"td",22),Jx(401,"-"),sg(),Sl(402,"td",23)(403,"em")(404,"strong"),Jx(405,"(opcional)"),sg()(),Sl(406,"p"),Jx(407,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Sl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),Jx(412," (p-change-model)"),Wl(413,"br"),sg()()(),Sl(414,"td",20)(415,"code",21),Jx(416,"EventEmitter"),sg()(),Sl(417,"td",22),Jx(418,"-"),sg(),Sl(419,"td",23)(420,"em")(421,"strong"),Jx(422,"(opcional)"),sg()(),Sl(423,"p"),Jx(424,"Evento disparado ao alterar valor do model."),sg()()(),Sl(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),Jx(429,"p-clean"),Wl(430,"br"),sg()()(),Sl(431,"td",20)(432,"code",27),Jx(433,"boolean"),sg()(),Sl(434,"td",22),Jx(435,"-"),sg(),Sl(436,"td",23)(437,"em")(438,"strong"),Jx(439,"(opcional)"),sg()(),Sl(440,"p"),Jx(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Sl(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),Jx(446," p-compact-label"),Wl(447,"br"),sg()()(),Sl(448,"td",20)(449,"code",27),Jx(450,"boolean"),sg()(),Sl(451,"td",22)(452,"p")(453,"code"),Jx(454,"false"),sg()()(),Sl(455,"td",23)(456,"em")(457,"strong"),Jx(458,"(opcional)"),sg()(),Sl(459,"p"),Jx(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(461,"p"),Jx(462,"Quando habilitado ("),Sl(463,"code"),Jx(464,"true"),sg(),Jx(465,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(466,"ul")(467,"li")(468,"code"),Jx(469,"po-label"),sg()(),Sl(470,"li")(471,"code"),Jx(472,"p-requirement (showRequired)"),sg()(),Sl(473,"li")(474,"code"),Jx(475,"po-helper"),sg()()(),Sl(476,"p"),Jx(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(478,"p"),Jx(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(480,"ul")(481,"li")(482,"code"),Jx(483,"--field-container-title-justify"),sg()(),Sl(484,"li")(485,"code"),Jx(486,"--field-container-title-flex"),sg()()(),Sl(487,"p"),Jx(488,"Exemplo:"),sg(),Sl(489,"pre")(490,"code"),Jx(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(492,"p"),Jx(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),Jx(498,"p-disabled"),Wl(499,"br"),sg()()(),Sl(500,"td",20)(501,"code",27),Jx(502,"boolean"),sg()(),Sl(503,"td",22)(504,"p")(505,"code"),Jx(506,"false"),sg()()(),Sl(507,"td",23)(508,"em")(509,"strong"),Jx(510,"(opcional)"),sg()(),Sl(511,"p"),Jx(512,"Se verdadeiro, desabilita o campo."),sg()()(),Sl(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),Jx(517," p-emit-all-changes"),Wl(518,"br"),sg()()(),Sl(519,"td",20)(520,"code",27),Jx(521,"boolean"),sg()(),Sl(522,"td",22)(523,"p")(524,"code"),Jx(525,"false"),sg()()(),Sl(526,"td",23)(527,"em")(528,"strong"),Jx(529,"(opcional)"),sg()(),Sl(530,"p"),Jx(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Sl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),Jx(536," (p-enter)"),Wl(537,"br"),sg()()(),Sl(538,"td",20)(539,"code",21),Jx(540,"EventEmitter"),sg()(),Sl(541,"td",22),Jx(542,"-"),sg(),Sl(543,"td",23)(544,"em")(545,"strong"),Jx(546,"(opcional)"),sg()(),Sl(547,"p"),Jx(548,"Evento disparado ao entrar do campo."),sg()()(),Sl(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),Jx(553," p-error-async-properties"),Wl(554,"br"),sg()()(),Sl(555,"td",20)(556,"code",28),Jx(557,"ErrorAsyncProperties"),sg()(),Sl(558,"td",22),Jx(559,"-"),sg(),Sl(560,"td",23)(561,"em")(562,"strong"),Jx(563,"(opcional)"),sg()(),Sl(564,"p"),Jx(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(566,"code"),Jx(567,"Reactive Forms"),sg(),Jx(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(569,"code"),Jx(570,"asyncValidators"),sg(),Jx(571,"."),sg()()(),Sl(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),Jx(576," p-error-limit"),Wl(577,"br"),sg()()(),Sl(578,"td",20)(579,"code",27),Jx(580,"boolean"),sg()(),Sl(581,"td",22)(582,"p")(583,"code"),Jx(584,"false"),sg()()(),Sl(585,"td",23)(586,"em")(587,"strong"),Jx(588,"(opcional)"),sg()(),Sl(589,"p"),Jx(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(591,"blockquote")(592,"p"),Jx(593,"Caso essa propriedade seja definida como "),Sl(594,"code"),Jx(595,"true"),sg(),Jx(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),Jx(601," p-error-pattern"),Wl(602,"br"),sg()()(),Sl(603,"td",20)(604,"code",26),Jx(605,"string"),sg()(),Sl(606,"td",22),Jx(607,"-"),sg(),Sl(608,"td",23)(609,"em")(610,"strong"),Jx(611,"(opcional)"),sg()(),Sl(612,"p"),Jx(613,"Mensagem que ser\xE1 apresentada quando o "),Sl(614,"code"),Jx(615,"pattern"),sg(),Jx(616," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Sl(617,"blockquote")(618,"p"),Jx(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(620,"code"),Jx(621,"p-required-field-error-message"),sg(),Jx(622," em conjunto."),sg()()()(),Sl(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),Jx(627," p-help"),Wl(628,"br"),sg()()(),Sl(629,"td",20)(630,"code",26),Jx(631,"string"),sg()(),Sl(632,"td",22),Jx(633,"-"),sg(),Sl(634,"td",23)(635,"em")(636,"strong"),Jx(637,"(opcional)"),sg()(),Sl(638,"p"),Jx(639,"Texto de apoio do campo."),sg()()(),Sl(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),Jx(644," p-icon"),Wl(645,"br"),sg()()(),Sl(646,"td",20)(647,"code",26),Jx(648,"string "),sg(),Sl(649,"code",29),Jx(650," TemplateRef<void>"),sg()(),Sl(651,"td",22),Jx(652,"-"),sg(),Sl(653,"td",23)(654,"em")(655,"strong"),Jx(656,"(opcional)"),sg()(),Sl(657,"p"),Jx(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(659,"p"),Jx(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(661,"a",30),Jx(662,"Biblioteca de \xEDcones"),sg(),Jx(663,". conforme exemplo abaixo:"),sg(),Sl(664,"pre")(665,"code"),Jx(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Sl(667,"p"),Jx(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(669,"em"),Jx(670,"Font Awesome"),sg(),Jx(671,", da seguinte forma:"),sg(),Sl(672,"pre")(673,"code"),Jx(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Sl(675,"p"),Jx(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(677,"code"),Jx(678,"TemplateRef"),sg(),Jx(679,", conforme exemplo abaixo:"),sg(),Sl(680,"pre")(681,"code"),Jx(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(683,"blockquote")(684,"p"),Jx(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(686,"code"),Jx(687,"font-size: inherit"),sg(),Jx(688," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),Jx(693," (p-keydown)"),Wl(694,"br"),sg()()(),Sl(695,"td",20)(696,"code",21),Jx(697,"EventEmitter"),sg()(),Sl(698,"td",22),Jx(699,"-"),sg(),Sl(700,"td",23)(701,"em")(702,"strong"),Jx(703,"(opcional)"),sg()(),Sl(704,"p"),Jx(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(706,"code"),Jx(707,"KeyboardEvent"),sg(),Jx(708," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),Jx(713," p-label"),Wl(714,"br"),sg()()(),Sl(715,"td",20)(716,"code",26),Jx(717,"string"),sg()(),Sl(718,"td",22),Jx(719,"-"),sg(),Sl(720,"td",23)(721,"em")(722,"strong"),Jx(723,"(opcional)"),sg()(),Sl(724,"p"),Jx(725,"R\xF3tulo do campo."),sg()()(),Sl(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),Jx(730," p-label-text-wrap"),Wl(731,"br"),sg()()(),Sl(732,"td",20)(733,"code",27),Jx(734,"boolean"),sg()(),Sl(735,"td",22)(736,"p")(737,"code"),Jx(738,"false"),sg()()(),Sl(739,"td",23)(740,"em")(741,"strong"),Jx(742,"(opcional)"),sg()(),Sl(743,"p"),Jx(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(745,"code"),Jx(746,"p-label"),sg(),Jx(747,". Quando "),Sl(748,"code"),Jx(749,"p-label-text-wrap"),sg(),Jx(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),Jx(755," p-loading"),Wl(756,"br"),sg()()(),Sl(757,"td",20)(758,"code",27),Jx(759,"boolean"),sg()(),Sl(760,"td",22)(761,"p")(762,"code"),Jx(763,"false"),sg()()(),Sl(764,"td",23)(765,"em")(766,"strong"),Jx(767,"(opcional)"),sg()(),Sl(768,"p"),Jx(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),Jx(774,"p-mask"),Wl(775,"br"),sg()()(),Sl(776,"td",20)(777,"code",26),Jx(778,"string"),sg()(),Sl(779,"td",22),Jx(780,"-"),sg(),Sl(781,"td",23)(782,"em")(783,"strong"),Jx(784,"(opcional)"),sg()(),Sl(785,"p"),Jx(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Sl(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),Jx(791,"p-mask-format-model"),Wl(792,"br"),sg()()(),Sl(793,"td",20)(794,"code",27),Jx(795,"boolean"),sg()(),Sl(796,"td",22)(797,"p")(798,"code"),Jx(799,"false"),sg()()(),Sl(800,"td",23)(801,"em")(802,"strong"),Jx(803,"(opcional)"),sg()(),Sl(804,"p"),Jx(805,"Indica se o "),Sl(806,"code"),Jx(807,"model"),sg(),Jx(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Sl(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),Jx(813," p-mask-no-length-validation"),Wl(814,"br"),sg()()(),Sl(815,"td",20)(816,"code",27),Jx(817,"boolean"),sg()(),Sl(818,"td",22)(819,"p")(820,"code"),Jx(821,"false"),sg()()(),Sl(822,"td",23)(823,"p"),Jx(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(825,"code"),Jx(826,"minLength"),sg(),Jx(827,") e m\xE1ximo ("),Sl(828,"code"),Jx(829,"maxLength"),sg(),Jx(830,") quando h\xE1 uma m\xE1scara ("),Sl(831,"code"),Jx(832,"p-mask"),sg(),Jx(833,") definida."),sg(),Sl(834,"ul")(835,"li"),Jx(836,"Quando "),Sl(837,"code"),Jx(838,"true"),sg(),Jx(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(840,"li"),Jx(841,"Quando "),Sl(842,"code"),Jx(843,"false"),sg(),Jx(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(845,"blockquote")(846,"p"),Jx(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(848,"code"),Jx(849,"p-mask-format-model"),sg(),Jx(850,"."),sg()(),Sl(851,"p"),Jx(852,"Exemplo:"),sg(),Sl(853,"pre")(854,"code"),Jx(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Sl(856,"ul")(857,"li"),Jx(858,"Entrada: "),Sl(859,"code"),Jx(860,"123-456"),sg(),Jx(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(862,"code"),Jx(863,"-"),sg(),Jx(864,"."),sg()()()(),Sl(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),Jx(869," p-maxlength"),Wl(870,"br"),sg()()(),Sl(871,"td",20)(872,"code",31),Jx(873,"number"),sg()(),Sl(874,"td",22),Jx(875,"-"),sg(),Sl(876,"td",23)(877,"em")(878,"strong"),Jx(879,"(opcional)"),sg()(),Sl(880,"p"),Jx(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Sl(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),Jx(886," p-minlength"),Wl(887,"br"),sg()()(),Sl(888,"td",20)(889,"code",31),Jx(890,"number"),sg()(),Sl(891,"td",22),Jx(892,"-"),sg(),Sl(893,"td",23)(894,"em")(895,"strong"),Jx(896,"(opcional)"),sg()(),Sl(897,"p"),Jx(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Sl(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),Jx(903," name"),Wl(904,"br"),sg()()(),Sl(905,"td",20)(906,"code",26),Jx(907,"string"),sg()(),Sl(908,"td",22),Jx(909,"-"),sg(),Sl(910,"td",23)(911,"p"),Jx(912,"Nome e identificador do campo."),sg()()(),Sl(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),Jx(917," p-no-autocomplete"),Wl(918,"br"),sg()()(),Sl(919,"td",20)(920,"code",27),Jx(921,"boolean"),sg()(),Sl(922,"td",22)(923,"p")(924,"code"),Jx(925,"false"),sg()()(),Sl(926,"td",23)(927,"em")(928,"strong"),Jx(929,"(opcional)"),sg()(),Sl(930,"p"),Jx(931,"Define a propriedade nativa "),Sl(932,"code"),Jx(933,"autocomplete"),sg(),Jx(934," do campo como "),Sl(935,"code"),Jx(936,"off"),sg(),Jx(937,"."),sg(),Sl(938,"blockquote")(939,"p"),Jx(940,"No componente "),Sl(941,"code"),Jx(942,"po-password"),sg(),Jx(943," ser\xE1 definido como "),Sl(944,"code"),Jx(945,"new-password"),sg(),Jx(946,"."),sg()(),Sl(947,"p"),Jx(948,"Nos componentes "),Sl(949,"code"),Jx(950,"po-password"),sg(),Jx(951," e "),Sl(952,"code"),Jx(953,"po-login"),sg(),Jx(954," o valor padr\xE3o ser\xE1 "),Sl(955,"code"),Jx(956,"true"),sg(),Jx(957,"."),sg()()(),Sl(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),Jx(962," p-optional"),Wl(963,"br"),sg()()(),Sl(964,"td",20)(965,"code",27),Jx(966,"boolean"),sg()(),Sl(967,"td",22)(968,"p")(969,"code"),Jx(970,"false"),sg()()(),Sl(971,"td",23)(972,"em")(973,"strong"),Jx(974,"(opcional)"),sg()(),Sl(975,"p"),Jx(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(977,"blockquote")(978,"p"),Jx(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(980,"ul")(981,"li"),Jx(982,"O campo conter "),Sl(983,"code"),Jx(984,"p-required"),sg(),Jx(985,";"),sg(),Sl(986,"li"),Jx(987,"N\xE3o possuir "),Sl(988,"code"),Jx(989,"p-help"),sg(),Jx(990," e/ou "),Sl(991,"code"),Jx(992,"p-label"),sg(),Jx(993,"."),sg()()()(),Sl(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),Jx(998,"p-pattern"),Wl(999,"br"),sg()()(),Sl(1e3,"td",20)(1001,"code",26),Jx(1002,"string"),sg()(),Sl(1003,"td",22),Jx(1004,"-"),sg(),Sl(1005,"td",23)(1006,"em")(1007,"strong"),Jx(1008,"(opcional)"),sg()(),Sl(1009,"p"),Jx(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1011,"code"),Jx(1012,"(p-mask)"),sg(),Jx(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Sl(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),Jx(1018," p-placeholder"),Wl(1019,"br"),sg()()(),Sl(1020,"td",20)(1021,"code",26),Jx(1022,"string"),sg()(),Sl(1023,"td",22)(1024,"p"),Jx(1025,"''"),sg()(),Sl(1026,"td",23)(1027,"em")(1028,"strong"),Jx(1029,"(opcional)"),sg()(),Sl(1030,"p"),Jx(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),Jx(1036," p-helper"),Wl(1037,"br"),sg()()(),Sl(1038,"td",20)(1039,"code",32),Jx(1040,"PoHelperOptions "),sg(),Sl(1041,"code",26),Jx(1042," string"),sg()(),Sl(1043,"td",22),Jx(1044,"-"),sg(),Sl(1045,"td",23)(1046,"em")(1047,"strong"),Jx(1048,"(opcional)"),sg()(),Sl(1049,"p"),Jx(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1051,"code"),Jx(1052,"p-label"),sg(),Jx(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1054,"code"),Jx(1055,"p-label"),sg(),Jx(1056,"."),sg(),Sl(1057,"blockquote")(1058,"p"),Jx(1059,"Para mais informa\xE7\xF5es acesse: "),Sl(1060,"a",33),Jx(1061,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1062,"."),sg()(),Sl(1063,"blockquote")(1064,"p"),Jx(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1066,"code"),Jx(1067,"p-additional-help-tooltip"),sg(),Jx(1068," e "),Sl(1069,"code"),Jx(1070,"p-additional-help"),sg(),Jx(1071,") ser\xE1 ignorado."),sg()()()(),Sl(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),Jx(1076,"p-readonly"),Wl(1077,"br"),sg()()(),Sl(1078,"td",20)(1079,"code",27),Jx(1080,"boolean"),sg()(),Sl(1081,"td",22),Jx(1082,"-"),sg(),Sl(1083,"td",23)(1084,"em")(1085,"strong"),Jx(1086,"(opcional)"),sg()(),Sl(1087,"p"),Jx(1088,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Sl(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),Jx(1093,"p-required"),Wl(1094,"br"),sg()()(),Sl(1095,"td",20)(1096,"code",27),Jx(1097,"boolean"),sg()(),Sl(1098,"td",22)(1099,"p")(1100,"code"),Jx(1101,"false"),sg()()(),Sl(1102,"td",23)(1103,"em")(1104,"strong"),Jx(1105,"(opcional)"),sg()(),Sl(1106,"p"),Jx(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(1108,"blockquote")(1109,"p"),Jx(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1111,"code"),Jx(1112,"(p-disabled)"),sg(),Jx(1113,"."),sg()()()(),Sl(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),Jx(1118," p-required-field-error-message"),Wl(1119,"br"),sg()()(),Sl(1120,"td",20)(1121,"code",27),Jx(1122,"boolean"),sg()(),Sl(1123,"td",22)(1124,"p")(1125,"code"),Jx(1126,"false"),sg()()(),Sl(1127,"td",23)(1128,"em")(1129,"strong"),Jx(1130,"(opcional)"),sg()(),Sl(1131,"p"),Jx(1132,"Exibe a mensagem setada na propriedade "),Sl(1133,"code"),Jx(1134,"p-error-pattern"),sg(),Jx(1135," se o campo estiver vazio e for requerido."),sg(),Sl(1136,"blockquote")(1137,"p"),Jx(1138,"Necess\xE1rio que a propriedade "),Sl(1139,"code"),Jx(1140,"p-required"),sg(),Jx(1141," esteja habilitada."),sg()()()(),Sl(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),Jx(1146," p-show-required"),Wl(1147,"br"),sg()()(),Sl(1148,"td",20)(1149,"code",27),Jx(1150,"boolean"),sg()(),Sl(1151,"td",22),Jx(1152,"-"),sg(),Sl(1153,"td",23)(1154,"p"),Jx(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1156,"blockquote")(1157,"p"),Jx(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1159,"ul")(1160,"li"),Jx(1161,"N\xE3o possuir "),Sl(1162,"code"),Jx(1163,"p-help"),sg(),Jx(1164," e/ou "),Sl(1165,"code"),Jx(1166,"p-label"),sg(),Jx(1167,"."),sg()()()(),Sl(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),Jx(1172," p-size"),Wl(1173,"br"),sg()()(),Sl(1174,"td",20)(1175,"code",26),Jx(1176,"string"),sg()(),Sl(1177,"td",22)(1178,"p")(1179,"code"),Jx(1180,"medium"),sg()()(),Sl(1181,"td",23)(1182,"em")(1183,"strong"),Jx(1184,"(opcional)"),sg()(),Sl(1185,"p"),Jx(1186,"Define o tamanho do componente:"),sg(),Sl(1187,"ul")(1188,"li")(1189,"code"),Jx(1190,"small"),sg(),Jx(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1192,"li")(1193,"code"),Jx(1194,"medium"),sg(),Jx(1195,": altura do input como 44px."),sg()(),Sl(1196,"blockquote")(1197,"p"),Jx(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1199,"code"),Jx(1200,"medium"),sg(),Jx(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1202,"a",34),Jx(1203,"po-theme"),sg(),Jx(1204,"."),sg()()()(),Sl(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),Jx(1209," p-upper-case"),Wl(1210,"br"),sg()()(),Sl(1211,"td",20)(1212,"code",27),Jx(1213,"boolean"),sg()(),Sl(1214,"td",22),Jx(1215,"-"),sg(),Sl(1216,"td",23)(1217,"p"),Jx(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Sl(1219,"h3",11),Jx(1220,"M\xE9todos"),sg(),Sl(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),Jx(1227," showAdditionalHelp "),sg()()()()(),Sl(1228,"tr",23)(1229,"td",23)(1230,"p"),Jx(1231,"M\xE9todo que exibe "),Sl(1232,"code"),Jx(1233,"p-helper"),sg(),Jx(1234," ou executa a a\xE7\xE3o definida em "),Sl(1235,"code"),Jx(1236,"p-helper{eventOnClick}"),sg(),Jx(1237," ou em "),Sl(1238,"code"),Jx(1239,"p-additionalHelp"),sg(),Jx(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1241,"code"),Jx(1242,"p-keydown"),sg(),Jx(1243,"."),sg(),Sl(1244,"blockquote")(1245,"p"),Jx(1246,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1247,"code"),Jx(1248,"po-helper"),sg(),Jx(1249," quando o componente estiver com foco."),sg()(),Sl(1250,"pre")(1251,"code"),Jx(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Sl(1253,"pre")(1254,"code"),Jx(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1256,"br"),Sl(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),Jx(1263," focus "),sg()()()()(),Sl(1264,"tr",23)(1265,"td",23)(1266,"p"),Jx(1267,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1268,"p"),Jx(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1270,"pre")(1271,"code"),Jx(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Wl(1273,"br"),Sl(1274,"h3"),Jx(1275,"Interfaces"),sg(),Sl(1276,"h4",37)(1277,"code",5),Jx(1278,"ErrorAsyncProperties"),sg()(),Sl(1279,"div",2)(1280,"p"),Jx(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Sl(1282,"h4",11),Jx(1283,"Propriedades"),sg(),Sl(1284,"table",12)(1285,"tr",13)(1286,"th",14),Jx(1287,"Nome"),sg(),Sl(1288,"th",14),Jx(1289,"Tipo"),sg(),Sl(1290,"th",14),Jx(1291,"Descri\xE7\xE3o"),sg()(),Sl(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),Jx(1296," errorAsync"),Wl(1297,"br"),sg()()(),Sl(1298,"td",20)(1299,"code",38),Jx(1300,"(value) => Observable<boolean>"),sg()(),Sl(1301,"td",23)(1302,"p"),Jx(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1304,"code"),Jx(1305,"change"),sg(),Jx(1306," ou "),Sl(1307,"code"),Jx(1308,"change-model"),sg(),Jx(1309,", dependendo do valor da propriedade "),Sl(1310,"code"),Jx(1311,"triggerMode"),sg(),Jx(1312,"."),sg()()(),Sl(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),Jx(1317," triggerMode"),Wl(1318,"br"),sg()()(),Sl(1319,"td",20)(1320,"code",39),Jx(1321,"'change' "),sg(),Sl(1322,"code",40),Jx(1323," 'changeModel'"),sg()(),Sl(1324,"td",23)(1325,"em")(1326,"strong"),Jx(1327,"(opcional)"),sg()(),Sl(1328,"p"),Jx(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1330,"code"),Jx(1331,"change"),sg(),Jx(1332," ou "),Sl(1333,"code"),Jx(1334,"change-model"),sg(),Jx(1335,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-input-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Ee,be,xe,he],encapsulation:2})}return a})();var Le=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(Le),pL]})}return a})();var mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,fe]})}return a})();export{mt as DocPoInputModule};