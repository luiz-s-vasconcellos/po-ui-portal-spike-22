import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,cM as oY,cN as lm,b4 as O3,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,cp as Nhe,c8 as Sde,aJ as Uhe,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,cQ as Nk,cR as Ak,cz as Mz,cX as L3,b6 as Yo,av as Yl,aw as uo,ax as fo,a3 as aNe,aD as Ky,aT as rN,aE as Xy,bd as Ox}from'./main-LUSFEIN7.js';var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&Gl(0,"po-input",0);},dependencies:[O3],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Input Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-input-basic/sample-po-input-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-input-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ce],encapsulation:2})}return a})();var ge=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"po-input",1),Ew("ngModelChange",function(l){return Ky(s),rN(i.input,l)||(i.input=l),Xy(l)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(l){return Ky(s),rN(i.label,l)||(i.label=l),Xy(l)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(l){return Ky(s),rN(i.help,l)||(i.help=l),Xy(l)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(l){return Ky(s),rN(i.helperText,l)||(i.helperText=l),Xy(l)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(l){return Ky(s),rN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(l){return Ky(s),rN(i.errorPattern,l)||(i.errorPattern=l),Xy(l)}),sg(),t0(),Tl(13,"po-input",10),Ew("ngModelChange",function(l){return Ky(s),rN(i.mask,l)||(i.mask=l),Xy(l)}),sg(),t0(),Tl(14,"po-input",11),Ew("ngModelChange",function(l){return Ky(s),rN(i.pattern,l)||(i.pattern=l),Xy(l)}),sg(),t0(),Tl(15,"po-number",12),Ew("ngModelChange",function(l){return Ky(s),rN(i.minlength,l)||(i.minlength=l),Xy(l)}),sg(),t0(),Tl(16,"po-number",13),Ew("ngModelChange",function(l){return Ky(s),rN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),sg(),t0(),Tl(17,"po-select",14),Ew("ngModelChange",function(l){return Ky(s),rN(i.icon,l)||(i.icon=l),Xy(l)}),sg(),t0(),Tl(18,"po-checkbox-group",15),Ew("ngModelChange",function(l){return Ky(s),rN(i.properties,l)||(i.properties=l),Xy(l)}),sg(),t0(),Tl(19,"po-radio-group",16),Ew("ngModelChange",function(l){return Ky(s),rN(i.size,l)||(i.size=l),Xy(l)}),sg(),t0(),Tl(20,"div",2)(21,"po-button",17),ht("p-click",function(){return Ky(s),Ox(7).reset(),Xy(i.restore())}),sg()()();}r&2&&(Dw("ngModel",i.input),tw("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),r0(),Vp(3),tw("p-value",i.input),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.placeholder),r0(),Vp(),Dw("ngModel",i.errorPattern),r0(),Vp(),Dw("ngModel",i.mask),r0(),Vp(),Dw("ngModel",i.pattern),r0(),Vp(),Dw("ngModel",i.minlength),r0(),Vp(),Dw("ngModel",i.maxlength),r0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconOptions),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Nhe,Sde,Uhe,$he],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Input Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-input-labs/sample-po-input-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-input
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-input-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,_e,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ge],encapsulation:2})}return a})();var qe=["reactiveFormData"],Se=(()=>{class a{fb=f(oY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(30)])],address:["",lm.compose([lm.required,lm.minLength(5),lm.maxLength(50)])],number:["",lm.compose([lm.required,lm.min(1),lm.max(99999)])],email:["",lm.required],website:["",lm.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&Yl(qe,7),r&2){let s;uo(s=fo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(Tl(0,"form",1)(1,"div",2),Gl(2,"po-input",3),t0(),sg(),Tl(3,"div",2),Gl(4,"po-input",4),t0(),Gl(5,"po-number",5),t0(),sg(),Tl(6,"div",2),Gl(7,"po-email",6),t0(),Gl(8,"po-url",7),t0(),sg(),Tl(9,"div",2)(10,"po-button",8),ht("p-click",function(){return i.saveForm()}),sg()()(),Tl(11,"po-modal",9,0)(13,"div",2),Gl(14,"po-info",10),sg(),Gl(15,"po-divider"),Tl(16,"div",2),Gl(17,"po-info",11)(18,"po-info",12),sg(),Gl(19,"po-divider"),Tl(20,"div",2),Gl(21,"po-info",13)(22,"po-info",14),sg()()),r&2&&(tw("formGroup",i.reactiveForm),Vp(2),r0(),Vp(2),r0(),Vp(),r0(),Vp(2),r0(),Vp(),r0(),Vp(2),tw("p-disabled",!i.reactiveForm.valid),Vp(),tw("p-primary-action",i.modalPrimaryAction),Vp(3),tw("p-value",i.reactiveForm.controls.name.value),Vp(3),tw("p-value",i.reactiveForm.controls.address.value),Vp(),tw("p-value",i.reactiveForm.controls.number.value),Vp(3),tw("p-value",i.reactiveForm.controls.email.value),Vp(),tw("p-value",i.reactiveForm.controls.website.value));},dependencies:[nY,J9,eY,Nk,Ak,Qt,mv,Mz,O3,Nhe,L3,$he,Yo],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Input - Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form [formGroup]="reactiveForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-input-reactive-form"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoInputComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Tl(24,"p"),tN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),tN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Tl(29,"h4"),tN(30,"Tokens customiz\xE1veis"),sg(),Tl(31,"p"),tN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(33,"br"),tN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,"code"),tN(36,".po-input"),sg()(),Tl(37,"blockquote")(38,"p"),tN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Tl(40,"a",6),tN(41,"Grid System"),sg(),tN(42,"."),sg()(),Tl(43,"blockquote")(44,"p"),tN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(46,"a",7),tN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(48,"."),sg()(),Tl(49,"table")(50,"thead")(51,"tr")(52,"th"),tN(53,"Propriedade"),sg(),Tl(54,"th"),tN(55,"Descri\xE7\xE3o"),sg(),Tl(56,"th"),tN(57,"Valor Padr\xE3o"),sg()()(),Tl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),tN(62,"Default Values"),sg()(),Gl(63,"td")(64,"td"),sg(),Tl(65,"tr")(66,"td")(67,"code"),tN(68,"--font-family"),sg()(),Tl(69,"td"),tN(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(71,"td")(72,"code"),tN(73,"var(--font-family-theme)"),sg()()(),Tl(74,"tr")(75,"td")(76,"code"),tN(77,"--font-size"),sg()(),Tl(78,"td"),tN(79,"Tamanho da fonte"),sg(),Tl(80,"td")(81,"code"),tN(82,"var(--font-size-default)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),tN(86,"--text-color-placeholder"),sg()(),Tl(87,"td"),tN(88,"Cor do texto placeholder"),sg(),Tl(89,"td")(90,"code"),tN(91,"var(--color-neutral-light-30)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),tN(95,"--color"),sg()(),Tl(96,"td"),tN(97,"Cor pincipal do input"),sg(),Tl(98,"td")(99,"code"),tN(100,"var(--color-neutral-dark-70)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),tN(104,"--background"),sg()(),Tl(105,"td"),tN(106,"Cor de background"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--color-neutral-light-05)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),tN(113,"--padding"),sg()(),Tl(114,"td"),tN(115,"Preenchimento"),sg(),Tl(116,"td")(117,"code"),tN(118,"0 0.5rem"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),tN(122,"--text-color"),sg()(),Tl(123,"td"),tN(124,"Cor do texto"),sg(),Tl(125,"td")(126,"code"),tN(127,"var(--color-neutral-dark-90)"),sg()()(),Tl(128,"tr")(129,"td")(130,"code"),tN(131,"--field-container-title-justify"),sg()(),Tl(132,"td"),tN(133,"Alinhamento horizontal do t\xEDtulo ("),Tl(134,"code"),tN(135,"justify-content"),sg(),tN(136,")"),sg(),Tl(137,"td")(138,"code"),tN(139,"space-between"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),tN(143,"--field-container-title-flex"),sg()(),Tl(144,"td"),tN(145,"Flex do t\xEDtulo ("),Tl(146,"code"),tN(147,"flex"),sg(),tN(148,")"),sg(),Tl(149,"td")(150,"code"),tN(151,"1 auto"),sg()()(),Tl(152,"tr")(153,"td")(154,"strong"),tN(155,"Hover"),sg()(),Gl(156,"td")(157,"td"),sg(),Tl(158,"tr")(159,"td")(160,"code"),tN(161,"--color-hover"),sg()(),Tl(162,"td"),tN(163,"Cor principal no estado hover"),sg(),Tl(164,"td")(165,"code"),tN(166,"var(--color-brand-01-dark)"),sg()()(),Tl(167,"tr")(168,"td")(169,"code"),tN(170,"--background-hover"),sg()(),Tl(171,"td"),tN(172,"Cor de background no estado hover"),sg(),Tl(173,"td")(174,"code"),tN(175,"var(--color-brand-01-lightest)"),sg()()(),Tl(176,"tr")(177,"td")(178,"strong"),tN(179,"Focused"),sg()(),Gl(180,"td")(181,"td"),sg(),Tl(182,"tr")(183,"td")(184,"code"),tN(185,"--color-focused"),sg()(),Tl(186,"td"),tN(187,"Cor principal no estado de focus"),sg(),Tl(188,"td")(189,"code"),tN(190,"var(--color-action-default)"),sg()()(),Tl(191,"tr")(192,"td")(193,"code"),tN(194,"--outline-color-focused"),sg()(),Tl(195,"td"),tN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),tN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),tN(203,"Disabled"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),tN(209,"--color-disabled"),sg()(),Tl(210,"td"),tN(211,"Cor principal no estado disabled"),sg(),Tl(212,"td")(213,"code"),tN(214,"var(--color-neutral-light-30)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),tN(218,"--background-disabled"),sg()(),Tl(219,"td"),tN(220,"Cor de background no estado disabled"),sg(),Tl(221,"td")(222,"code"),tN(223,"var(--color-neutral-light-20)"),sg()()(),Tl(224,"tr")(225,"td")(226,"code"),tN(227,"--text-color-disabled"),sg()(),Tl(228,"td"),tN(229,"Cor do texto no estado disabled"),sg(),Tl(230,"td")(231,"code"),tN(232,"var(--color-neutral-dark-70)"),sg()()()()(),Gl(233,"br"),sg(),Tl(234,"div",8)(235,"h4",9),tN(236,"Seletor"),sg(),Tl(237,"pre",10),tN(238,`<po-input
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
`),sg()(),Tl(239,"h4",11),tN(240,"Propriedades"),sg(),Tl(241,"table",12)(242,"tr",13)(243,"th",14),tN(244,"Nome"),sg(),Tl(245,"th",14),tN(246,"Tipo"),sg(),Tl(247,"th",14),tN(248,"Padr\xE3o"),sg(),Tl(249,"th",14),tN(250,"Descri\xE7\xE3o"),sg()(),Tl(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),tN(255," (p-additional-help)"),Gl(256,"br"),sg()(),Tl(257,"div",19),tN(258,"Deprecated"),sg()(),Tl(259,"td",20)(260,"code",21),tN(261,"EventEmitter"),sg()(),Tl(262,"td",22),tN(263,"-"),sg(),Tl(264,"td",23)(265,"em")(266,"strong"),tN(267,"(opcional)"),sg()(),Tl(268,"p"),tN(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(270,"blockquote")(271,"p"),tN(272,"Essa propriedade est\xE1 "),Tl(273,"strong"),tN(274,"depreciada"),sg(),tN(275," e ser\xE1 removida na vers\xE3o "),Tl(276,"code"),tN(277,"23.x.x"),sg(),tN(278,". Recomendamos utilizar a propriedade "),Tl(279,"code"),tN(280,"p-helper"),sg(),tN(281," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),tN(286," p-additional-help-tooltip"),Gl(287,"br"),sg()(),Tl(288,"div",19),tN(289,"Deprecated"),sg()(),Tl(290,"td",20)(291,"code",26),tN(292,"string"),sg()(),Tl(293,"td",22),tN(294,"-"),sg(),Tl(295,"td",23)(296,"em")(297,"strong"),tN(298,"(opcional)"),sg()(),Tl(299,"p"),tN(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(301,"code"),tN(302,"po-helper"),sg(),tN(303,`.
`),Tl(304,"strong"),tN(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(306,"blockquote")(307,"p"),tN(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(309,"blockquote")(310,"p"),tN(311,"Essa propriedade est\xE1 "),Tl(312,"strong"),tN(313,"depreciada"),sg(),tN(314," e ser\xE1 removida na vers\xE3o "),Tl(315,"code"),tN(316,"23.x.x"),sg(),tN(317,". Recomendamos utilizar a propriedade "),Tl(318,"code"),tN(319,"p-helper"),sg(),tN(320," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),tN(325," p-append-in-body"),Gl(326,"br"),sg()()(),Tl(327,"td",20)(328,"code",27),tN(329,"boolean"),sg()(),Tl(330,"td",22)(331,"p")(332,"code"),tN(333,"false"),sg()()(),Tl(334,"td",23)(335,"em")(336,"strong"),tN(337,"(opcional)"),sg()(),Tl(338,"p"),tN(339,"Define que o popover ("),Tl(340,"code"),tN(341,"p-helper"),sg(),tN(342," e/ou "),Tl(343,"code"),tN(344,"p-error-limit"),sg(),tN(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(346,"blockquote")(347,"p"),tN(348,"Quando utilizado com "),Tl(349,"code"),tN(350,"p-helper"),sg(),tN(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),tN(356," p-auto-focus"),Gl(357,"br"),sg()()(),Tl(358,"td",20)(359,"code",27),tN(360,"boolean"),sg()(),Tl(361,"td",22)(362,"p")(363,"code"),tN(364,"false"),sg()()(),Tl(365,"td",23)(366,"em")(367,"strong"),tN(368,"(opcional)"),sg()(),Tl(369,"p"),tN(370,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(371,"blockquote")(372,"p"),tN(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),tN(378," (p-blur)"),Gl(379,"br"),sg()()(),Tl(380,"td",20)(381,"code",21),tN(382,"EventEmitter"),sg()(),Tl(383,"td",22),tN(384,"-"),sg(),Tl(385,"td",23)(386,"em")(387,"strong"),tN(388,"(opcional)"),sg()(),Tl(389,"p"),tN(390,"Evento disparado ao sair do campo."),sg()()(),Tl(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),tN(395," (p-change)"),Gl(396,"br"),sg()()(),Tl(397,"td",20)(398,"code",21),tN(399,"EventEmitter"),sg()(),Tl(400,"td",22),tN(401,"-"),sg(),Tl(402,"td",23)(403,"em")(404,"strong"),tN(405,"(opcional)"),sg()(),Tl(406,"p"),tN(407,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),tN(412," (p-change-model)"),Gl(413,"br"),sg()()(),Tl(414,"td",20)(415,"code",21),tN(416,"EventEmitter"),sg()(),Tl(417,"td",22),tN(418,"-"),sg(),Tl(419,"td",23)(420,"em")(421,"strong"),tN(422,"(opcional)"),sg()(),Tl(423,"p"),tN(424,"Evento disparado ao alterar valor do model."),sg()()(),Tl(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),tN(429,"p-clean"),Gl(430,"br"),sg()()(),Tl(431,"td",20)(432,"code",27),tN(433,"boolean"),sg()(),Tl(434,"td",22),tN(435,"-"),sg(),Tl(436,"td",23)(437,"em")(438,"strong"),tN(439,"(opcional)"),sg()(),Tl(440,"p"),tN(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Tl(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),tN(446," p-compact-label"),Gl(447,"br"),sg()()(),Tl(448,"td",20)(449,"code",27),tN(450,"boolean"),sg()(),Tl(451,"td",22)(452,"p")(453,"code"),tN(454,"false"),sg()()(),Tl(455,"td",23)(456,"em")(457,"strong"),tN(458,"(opcional)"),sg()(),Tl(459,"p"),tN(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(461,"p"),tN(462,"Quando habilitado ("),Tl(463,"code"),tN(464,"true"),sg(),tN(465,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(466,"ul")(467,"li")(468,"code"),tN(469,"po-label"),sg()(),Tl(470,"li")(471,"code"),tN(472,"p-requirement (showRequired)"),sg()(),Tl(473,"li")(474,"code"),tN(475,"po-helper"),sg()()(),Tl(476,"p"),tN(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(478,"p"),tN(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(480,"ul")(481,"li")(482,"code"),tN(483,"--field-container-title-justify"),sg()(),Tl(484,"li")(485,"code"),tN(486,"--field-container-title-flex"),sg()()(),Tl(487,"p"),tN(488,"Exemplo:"),sg(),Tl(489,"pre")(490,"code"),tN(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(492,"p"),tN(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),tN(498,"p-disabled"),Gl(499,"br"),sg()()(),Tl(500,"td",20)(501,"code",27),tN(502,"boolean"),sg()(),Tl(503,"td",22)(504,"p")(505,"code"),tN(506,"false"),sg()()(),Tl(507,"td",23)(508,"em")(509,"strong"),tN(510,"(opcional)"),sg()(),Tl(511,"p"),tN(512,"Se verdadeiro, desabilita o campo."),sg()()(),Tl(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),tN(517," p-emit-all-changes"),Gl(518,"br"),sg()()(),Tl(519,"td",20)(520,"code",27),tN(521,"boolean"),sg()(),Tl(522,"td",22)(523,"p")(524,"code"),tN(525,"false"),sg()()(),Tl(526,"td",23)(527,"em")(528,"strong"),tN(529,"(opcional)"),sg()(),Tl(530,"p"),tN(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Tl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),tN(536," (p-enter)"),Gl(537,"br"),sg()()(),Tl(538,"td",20)(539,"code",21),tN(540,"EventEmitter"),sg()(),Tl(541,"td",22),tN(542,"-"),sg(),Tl(543,"td",23)(544,"em")(545,"strong"),tN(546,"(opcional)"),sg()(),Tl(547,"p"),tN(548,"Evento disparado ao entrar do campo."),sg()()(),Tl(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),tN(553," p-error-async-properties"),Gl(554,"br"),sg()()(),Tl(555,"td",20)(556,"code",28),tN(557,"ErrorAsyncProperties"),sg()(),Tl(558,"td",22),tN(559,"-"),sg(),Tl(560,"td",23)(561,"em")(562,"strong"),tN(563,"(opcional)"),sg()(),Tl(564,"p"),tN(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(566,"code"),tN(567,"Reactive Forms"),sg(),tN(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Tl(569,"code"),tN(570,"asyncValidators"),sg(),tN(571,"."),sg()()(),Tl(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),tN(576," p-error-limit"),Gl(577,"br"),sg()()(),Tl(578,"td",20)(579,"code",27),tN(580,"boolean"),sg()(),Tl(581,"td",22)(582,"p")(583,"code"),tN(584,"false"),sg()()(),Tl(585,"td",23)(586,"em")(587,"strong"),tN(588,"(opcional)"),sg()(),Tl(589,"p"),tN(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(591,"blockquote")(592,"p"),tN(593,"Caso essa propriedade seja definida como "),Tl(594,"code"),tN(595,"true"),sg(),tN(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),tN(601," p-error-pattern"),Gl(602,"br"),sg()()(),Tl(603,"td",20)(604,"code",26),tN(605,"string"),sg()(),Tl(606,"td",22),tN(607,"-"),sg(),Tl(608,"td",23)(609,"em")(610,"strong"),tN(611,"(opcional)"),sg()(),Tl(612,"p"),tN(613,"Mensagem que ser\xE1 apresentada quando o "),Tl(614,"code"),tN(615,"pattern"),sg(),tN(616," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Tl(617,"blockquote")(618,"p"),tN(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(620,"code"),tN(621,"p-required-field-error-message"),sg(),tN(622," em conjunto."),sg()()()(),Tl(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),tN(627," p-help"),Gl(628,"br"),sg()()(),Tl(629,"td",20)(630,"code",26),tN(631,"string"),sg()(),Tl(632,"td",22),tN(633,"-"),sg(),Tl(634,"td",23)(635,"em")(636,"strong"),tN(637,"(opcional)"),sg()(),Tl(638,"p"),tN(639,"Texto de apoio do campo."),sg()()(),Tl(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),tN(644," p-icon"),Gl(645,"br"),sg()()(),Tl(646,"td",20)(647,"code",26),tN(648,"string "),sg(),Tl(649,"code",29),tN(650," TemplateRef<void>"),sg()(),Tl(651,"td",22),tN(652,"-"),sg(),Tl(653,"td",23)(654,"em")(655,"strong"),tN(656,"(opcional)"),sg()(),Tl(657,"p"),tN(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(659,"p"),tN(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(661,"a",30),tN(662,"Biblioteca de \xEDcones"),sg(),tN(663,". conforme exemplo abaixo:"),sg(),Tl(664,"pre")(665,"code"),tN(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Tl(667,"p"),tN(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(669,"em"),tN(670,"Font Awesome"),sg(),tN(671,", da seguinte forma:"),sg(),Tl(672,"pre")(673,"code"),tN(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Tl(675,"p"),tN(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(677,"code"),tN(678,"TemplateRef"),sg(),tN(679,", conforme exemplo abaixo:"),sg(),Tl(680,"pre")(681,"code"),tN(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(683,"blockquote")(684,"p"),tN(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(686,"code"),tN(687,"font-size: inherit"),sg(),tN(688," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),tN(693," (p-keydown)"),Gl(694,"br"),sg()()(),Tl(695,"td",20)(696,"code",21),tN(697,"EventEmitter"),sg()(),Tl(698,"td",22),tN(699,"-"),sg(),Tl(700,"td",23)(701,"em")(702,"strong"),tN(703,"(opcional)"),sg()(),Tl(704,"p"),tN(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(706,"code"),tN(707,"KeyboardEvent"),sg(),tN(708," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),tN(713," p-label"),Gl(714,"br"),sg()()(),Tl(715,"td",20)(716,"code",26),tN(717,"string"),sg()(),Tl(718,"td",22),tN(719,"-"),sg(),Tl(720,"td",23)(721,"em")(722,"strong"),tN(723,"(opcional)"),sg()(),Tl(724,"p"),tN(725,"R\xF3tulo do campo."),sg()()(),Tl(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),tN(730," p-label-text-wrap"),Gl(731,"br"),sg()()(),Tl(732,"td",20)(733,"code",27),tN(734,"boolean"),sg()(),Tl(735,"td",22)(736,"p")(737,"code"),tN(738,"false"),sg()()(),Tl(739,"td",23)(740,"em")(741,"strong"),tN(742,"(opcional)"),sg()(),Tl(743,"p"),tN(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(745,"code"),tN(746,"p-label"),sg(),tN(747,". Quando "),Tl(748,"code"),tN(749,"p-label-text-wrap"),sg(),tN(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),tN(755," p-loading"),Gl(756,"br"),sg()()(),Tl(757,"td",20)(758,"code",27),tN(759,"boolean"),sg()(),Tl(760,"td",22)(761,"p")(762,"code"),tN(763,"false"),sg()()(),Tl(764,"td",23)(765,"em")(766,"strong"),tN(767,"(opcional)"),sg()(),Tl(768,"p"),tN(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),tN(774,"p-mask"),Gl(775,"br"),sg()()(),Tl(776,"td",20)(777,"code",26),tN(778,"string"),sg()(),Tl(779,"td",22),tN(780,"-"),sg(),Tl(781,"td",23)(782,"em")(783,"strong"),tN(784,"(opcional)"),sg()(),Tl(785,"p"),tN(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Tl(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),tN(791,"p-mask-format-model"),Gl(792,"br"),sg()()(),Tl(793,"td",20)(794,"code",27),tN(795,"boolean"),sg()(),Tl(796,"td",22)(797,"p")(798,"code"),tN(799,"false"),sg()()(),Tl(800,"td",23)(801,"em")(802,"strong"),tN(803,"(opcional)"),sg()(),Tl(804,"p"),tN(805,"Indica se o "),Tl(806,"code"),tN(807,"model"),sg(),tN(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Tl(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),tN(813," p-mask-no-length-validation"),Gl(814,"br"),sg()()(),Tl(815,"td",20)(816,"code",27),tN(817,"boolean"),sg()(),Tl(818,"td",22)(819,"p")(820,"code"),tN(821,"false"),sg()()(),Tl(822,"td",23)(823,"p"),tN(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(825,"code"),tN(826,"minLength"),sg(),tN(827,") e m\xE1ximo ("),Tl(828,"code"),tN(829,"maxLength"),sg(),tN(830,") quando h\xE1 uma m\xE1scara ("),Tl(831,"code"),tN(832,"p-mask"),sg(),tN(833,") definida."),sg(),Tl(834,"ul")(835,"li"),tN(836,"Quando "),Tl(837,"code"),tN(838,"true"),sg(),tN(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(840,"li"),tN(841,"Quando "),Tl(842,"code"),tN(843,"false"),sg(),tN(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(845,"blockquote")(846,"p"),tN(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(848,"code"),tN(849,"p-mask-format-model"),sg(),tN(850,"."),sg()(),Tl(851,"p"),tN(852,"Exemplo:"),sg(),Tl(853,"pre")(854,"code"),tN(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Tl(856,"ul")(857,"li"),tN(858,"Entrada: "),Tl(859,"code"),tN(860,"123-456"),sg(),tN(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Tl(862,"code"),tN(863,"-"),sg(),tN(864,"."),sg()()()(),Tl(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),tN(869," p-maxlength"),Gl(870,"br"),sg()()(),Tl(871,"td",20)(872,"code",31),tN(873,"number"),sg()(),Tl(874,"td",22),tN(875,"-"),sg(),Tl(876,"td",23)(877,"em")(878,"strong"),tN(879,"(opcional)"),sg()(),Tl(880,"p"),tN(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),tN(886," p-minlength"),Gl(887,"br"),sg()()(),Tl(888,"td",20)(889,"code",31),tN(890,"number"),sg()(),Tl(891,"td",22),tN(892,"-"),sg(),Tl(893,"td",23)(894,"em")(895,"strong"),tN(896,"(opcional)"),sg()(),Tl(897,"p"),tN(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),tN(903," name"),Gl(904,"br"),sg()()(),Tl(905,"td",20)(906,"code",26),tN(907,"string"),sg()(),Tl(908,"td",22),tN(909,"-"),sg(),Tl(910,"td",23)(911,"p"),tN(912,"Nome e identificador do campo."),sg()()(),Tl(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),tN(917," p-no-autocomplete"),Gl(918,"br"),sg()()(),Tl(919,"td",20)(920,"code",27),tN(921,"boolean"),sg()(),Tl(922,"td",22)(923,"p")(924,"code"),tN(925,"false"),sg()()(),Tl(926,"td",23)(927,"em")(928,"strong"),tN(929,"(opcional)"),sg()(),Tl(930,"p"),tN(931,"Define a propriedade nativa "),Tl(932,"code"),tN(933,"autocomplete"),sg(),tN(934," do campo como "),Tl(935,"code"),tN(936,"off"),sg(),tN(937,"."),sg(),Tl(938,"blockquote")(939,"p"),tN(940,"No componente "),Tl(941,"code"),tN(942,"po-password"),sg(),tN(943," ser\xE1 definido como "),Tl(944,"code"),tN(945,"new-password"),sg(),tN(946,"."),sg()(),Tl(947,"p"),tN(948,"Nos componentes "),Tl(949,"code"),tN(950,"po-password"),sg(),tN(951," e "),Tl(952,"code"),tN(953,"po-login"),sg(),tN(954," o valor padr\xE3o ser\xE1 "),Tl(955,"code"),tN(956,"true"),sg(),tN(957,"."),sg()()(),Tl(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),tN(962," p-optional"),Gl(963,"br"),sg()()(),Tl(964,"td",20)(965,"code",27),tN(966,"boolean"),sg()(),Tl(967,"td",22)(968,"p")(969,"code"),tN(970,"false"),sg()()(),Tl(971,"td",23)(972,"em")(973,"strong"),tN(974,"(opcional)"),sg()(),Tl(975,"p"),tN(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(977,"blockquote")(978,"p"),tN(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(980,"ul")(981,"li"),tN(982,"O campo conter "),Tl(983,"code"),tN(984,"p-required"),sg(),tN(985,";"),sg(),Tl(986,"li"),tN(987,"N\xE3o possuir "),Tl(988,"code"),tN(989,"p-help"),sg(),tN(990," e/ou "),Tl(991,"code"),tN(992,"p-label"),sg(),tN(993,"."),sg()()()(),Tl(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),tN(998,"p-pattern"),Gl(999,"br"),sg()()(),Tl(1e3,"td",20)(1001,"code",26),tN(1002,"string"),sg()(),Tl(1003,"td",22),tN(1004,"-"),sg(),Tl(1005,"td",23)(1006,"em")(1007,"strong"),tN(1008,"(opcional)"),sg()(),Tl(1009,"p"),tN(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1011,"code"),tN(1012,"(p-mask)"),sg(),tN(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Tl(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),tN(1018," p-placeholder"),Gl(1019,"br"),sg()()(),Tl(1020,"td",20)(1021,"code",26),tN(1022,"string"),sg()(),Tl(1023,"td",22)(1024,"p"),tN(1025,"''"),sg()(),Tl(1026,"td",23)(1027,"em")(1028,"strong"),tN(1029,"(opcional)"),sg()(),Tl(1030,"p"),tN(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),tN(1036," p-helper"),Gl(1037,"br"),sg()()(),Tl(1038,"td",20)(1039,"code",32),tN(1040,"PoHelperOptions "),sg(),Tl(1041,"code",26),tN(1042," string"),sg()(),Tl(1043,"td",22),tN(1044,"-"),sg(),Tl(1045,"td",23)(1046,"em")(1047,"strong"),tN(1048,"(opcional)"),sg()(),Tl(1049,"p"),tN(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1051,"code"),tN(1052,"p-label"),sg(),tN(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1054,"code"),tN(1055,"p-label"),sg(),tN(1056,"."),sg(),Tl(1057,"blockquote")(1058,"p"),tN(1059,"Para mais informa\xE7\xF5es acesse: "),Tl(1060,"a",33),tN(1061,"https://po-ui.io/documentation/po-helper"),sg(),tN(1062,"."),sg()(),Tl(1063,"blockquote")(1064,"p"),tN(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1066,"code"),tN(1067,"p-additional-help-tooltip"),sg(),tN(1068," e "),Tl(1069,"code"),tN(1070,"p-additional-help"),sg(),tN(1071,") ser\xE1 ignorado."),sg()()()(),Tl(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),tN(1076,"p-readonly"),Gl(1077,"br"),sg()()(),Tl(1078,"td",20)(1079,"code",27),tN(1080,"boolean"),sg()(),Tl(1081,"td",22),tN(1082,"-"),sg(),Tl(1083,"td",23)(1084,"em")(1085,"strong"),tN(1086,"(opcional)"),sg()(),Tl(1087,"p"),tN(1088,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),tN(1093,"p-required"),Gl(1094,"br"),sg()()(),Tl(1095,"td",20)(1096,"code",27),tN(1097,"boolean"),sg()(),Tl(1098,"td",22)(1099,"p")(1100,"code"),tN(1101,"false"),sg()()(),Tl(1102,"td",23)(1103,"em")(1104,"strong"),tN(1105,"(opcional)"),sg()(),Tl(1106,"p"),tN(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1108,"blockquote")(1109,"p"),tN(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1111,"code"),tN(1112,"(p-disabled)"),sg(),tN(1113,"."),sg()()()(),Tl(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),tN(1118," p-required-field-error-message"),Gl(1119,"br"),sg()()(),Tl(1120,"td",20)(1121,"code",27),tN(1122,"boolean"),sg()(),Tl(1123,"td",22)(1124,"p")(1125,"code"),tN(1126,"false"),sg()()(),Tl(1127,"td",23)(1128,"em")(1129,"strong"),tN(1130,"(opcional)"),sg()(),Tl(1131,"p"),tN(1132,"Exibe a mensagem setada na propriedade "),Tl(1133,"code"),tN(1134,"p-error-pattern"),sg(),tN(1135," se o campo estiver vazio e for requerido."),sg(),Tl(1136,"blockquote")(1137,"p"),tN(1138,"Necess\xE1rio que a propriedade "),Tl(1139,"code"),tN(1140,"p-required"),sg(),tN(1141," esteja habilitada."),sg()()()(),Tl(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),tN(1146," p-show-required"),Gl(1147,"br"),sg()()(),Tl(1148,"td",20)(1149,"code",27),tN(1150,"boolean"),sg()(),Tl(1151,"td",22),tN(1152,"-"),sg(),Tl(1153,"td",23)(1154,"p"),tN(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1156,"blockquote")(1157,"p"),tN(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1159,"ul")(1160,"li"),tN(1161,"N\xE3o possuir "),Tl(1162,"code"),tN(1163,"p-help"),sg(),tN(1164," e/ou "),Tl(1165,"code"),tN(1166,"p-label"),sg(),tN(1167,"."),sg()()()(),Tl(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),tN(1172," p-size"),Gl(1173,"br"),sg()()(),Tl(1174,"td",20)(1175,"code",26),tN(1176,"string"),sg()(),Tl(1177,"td",22)(1178,"p")(1179,"code"),tN(1180,"medium"),sg()()(),Tl(1181,"td",23)(1182,"em")(1183,"strong"),tN(1184,"(opcional)"),sg()(),Tl(1185,"p"),tN(1186,"Define o tamanho do componente:"),sg(),Tl(1187,"ul")(1188,"li")(1189,"code"),tN(1190,"small"),sg(),tN(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1192,"li")(1193,"code"),tN(1194,"medium"),sg(),tN(1195,": altura do input como 44px."),sg()(),Tl(1196,"blockquote")(1197,"p"),tN(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1199,"code"),tN(1200,"medium"),sg(),tN(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1202,"a",34),tN(1203,"po-theme"),sg(),tN(1204,"."),sg()()()(),Tl(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),tN(1209," p-upper-case"),Gl(1210,"br"),sg()()(),Tl(1211,"td",20)(1212,"code",27),tN(1213,"boolean"),sg()(),Tl(1214,"td",22),tN(1215,"-"),sg(),Tl(1216,"td",23)(1217,"p"),tN(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Tl(1219,"h3",11),tN(1220,"M\xE9todos"),sg(),Tl(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),tN(1227," showAdditionalHelp "),sg()()()()(),Tl(1228,"tr",23)(1229,"td",23)(1230,"p"),tN(1231,"M\xE9todo que exibe "),Tl(1232,"code"),tN(1233,"p-helper"),sg(),tN(1234," ou executa a a\xE7\xE3o definida em "),Tl(1235,"code"),tN(1236,"p-helper{eventOnClick}"),sg(),tN(1237," ou em "),Tl(1238,"code"),tN(1239,"p-additionalHelp"),sg(),tN(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1241,"code"),tN(1242,"p-keydown"),sg(),tN(1243,"."),sg(),Tl(1244,"blockquote")(1245,"p"),tN(1246,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1247,"code"),tN(1248,"po-helper"),sg(),tN(1249," quando o componente estiver com foco."),sg()(),Tl(1250,"pre")(1251,"code"),tN(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Tl(1253,"pre")(1254,"code"),tN(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1256,"br"),Tl(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),tN(1263," focus "),sg()()()()(),Tl(1264,"tr",23)(1265,"td",23)(1266,"p"),tN(1267,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1268,"p"),tN(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1270,"pre")(1271,"code"),tN(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Gl(1273,"br"),Tl(1274,"h3"),tN(1275,"Interfaces"),sg(),Tl(1276,"h4",37)(1277,"code",5),tN(1278,"ErrorAsyncProperties"),sg()(),Tl(1279,"div",2)(1280,"p"),tN(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(1282,"h4",11),tN(1283,"Propriedades"),sg(),Tl(1284,"table",12)(1285,"tr",13)(1286,"th",14),tN(1287,"Nome"),sg(),Tl(1288,"th",14),tN(1289,"Tipo"),sg(),Tl(1290,"th",14),tN(1291,"Descri\xE7\xE3o"),sg()(),Tl(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),tN(1296," errorAsync"),Gl(1297,"br"),sg()()(),Tl(1298,"td",20)(1299,"code",38),tN(1300,"(value) => Observable<boolean>"),sg()(),Tl(1301,"td",23)(1302,"p"),tN(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1304,"code"),tN(1305,"change"),sg(),tN(1306," ou "),Tl(1307,"code"),tN(1308,"change-model"),sg(),tN(1309,", dependendo do valor da propriedade "),Tl(1310,"code"),tN(1311,"triggerMode"),sg(),tN(1312,"."),sg()()(),Tl(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),tN(1317," triggerMode"),Gl(1318,"br"),sg()()(),Tl(1319,"td",20)(1320,"code",39),tN(1321,"'change' "),sg(),Tl(1322,"code",40),tN(1323," 'changeModel'"),sg()(),Tl(1324,"td",23)(1325,"em")(1326,"strong"),tN(1327,"(opcional)"),sg()(),Tl(1328,"p"),tN(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(1330,"code"),tN(1331,"change"),sg(),tN(1332," ou "),Tl(1333,"code"),tN(1334,"change-model"),sg(),tN(1335,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-input-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Ee,be,xe,he],encapsulation:2})}return a})();var Le=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Le),vL]})}return a})();var mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,fe]})}return a})();export{mt as DocPoInputModule};