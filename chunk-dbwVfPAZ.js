import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,cg as uY,ch as om,aO as Yo,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,bT as ha,bB as ga,ai as ya,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,ck as vk,cl as gk,c2 as Ap,cr as tr,aQ as dt,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy,aX as _x}from'./main-6SPFG3VI.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&Ul(0,"po-input",0);},dependencies:[Yo],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Input Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-input-basic/sample-po-input-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-input-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return a})();var Se=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-input",1),pw("ngModelChange",function(l){return Qy(s),$x(i.input,l)||(i.input=l),Jy(l)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(l){return Qy(s),$x(i.label,l)||(i.label=l),Jy(l)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(l){return Qy(s),$x(i.help,l)||(i.help=l),Jy(l)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(l){return Qy(s),$x(i.helperText,l)||(i.helperText=l),Jy(l)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(l){return Qy(s),$x(i.placeholder,l)||(i.placeholder=l),Jy(l)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(l){return Qy(s),$x(i.errorPattern,l)||(i.errorPattern=l),Jy(l)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(l){return Qy(s),$x(i.mask,l)||(i.mask=l),Jy(l)}),ng(),$0(),wl(14,"po-input",11),pw("ngModelChange",function(l){return Qy(s),$x(i.pattern,l)||(i.pattern=l),Jy(l)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(l){return Qy(s),$x(i.minlength,l)||(i.minlength=l),Jy(l)}),ng(),$0(),wl(16,"po-number",13),pw("ngModelChange",function(l){return Qy(s),$x(i.maxlength,l)||(i.maxlength=l),Jy(l)}),ng(),$0(),wl(17,"po-select",14),pw("ngModelChange",function(l){return Qy(s),$x(i.icon,l)||(i.icon=l),Jy(l)}),ng(),$0(),wl(18,"po-checkbox-group",15),pw("ngModelChange",function(l){return Qy(s),$x(i.properties,l)||(i.properties=l),Jy(l)}),ng(),$0(),wl(19,"po-radio-group",16),pw("ngModelChange",function(l){return Qy(s),$x(i.size,l)||(i.size=l),Jy(l)}),ng(),$0(),wl(20,"div",2)(21,"po-button",17),ut("p-click",function(){return Qy(s),_x(7).reset(),Jy(i.restore())}),ng()()();}r&2&&(hw("ngModel",i.input),YE("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",i.input),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.mask),G0(),Pp(),hw("ngModel",i.pattern),G0(),Pp(),hw("ngModel",i.minlength),G0(),Pp(),hw("ngModel",i.maxlength),G0(),Pp(),hw("ngModel",i.icon),YE("p-options",i.iconOptions),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ha,ga,ya,Vp],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Input Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-input-labs/sample-po-input-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-input
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-input-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ie,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Se],encapsulation:2})}return a})();var Ve=["reactiveFormData"],he=(()=>{class a{fb=f(uY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",om.compose([om.required,om.minLength(5),om.maxLength(30)])],address:["",om.compose([om.required,om.minLength(5),om.maxLength(50)])],number:["",om.compose([om.required,om.min(1),om.max(99999)])],email:["",om.required],website:["",om.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&$l(Ve,7),r&2){let s;uo(s=fo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(wl(0,"form",1)(1,"div",2),Ul(2,"po-input",3),$0(),ng(),wl(3,"div",2),Ul(4,"po-input",4),$0(),Ul(5,"po-number",5),$0(),ng(),wl(6,"div",2),Ul(7,"po-email",6),$0(),Ul(8,"po-url",7),$0(),ng(),wl(9,"div",2)(10,"po-button",8),ut("p-click",function(){return i.saveForm()}),ng()()(),wl(11,"po-modal",9,0)(13,"div",2),Ul(14,"po-info",10),ng(),Ul(15,"po-divider"),wl(16,"div",2),Ul(17,"po-info",11)(18,"po-info",12),ng(),Ul(19,"po-divider"),wl(20,"div",2),Ul(21,"po-info",13)(22,"po-info",14),ng()()),r&2&&(YE("formGroup",i.reactiveForm),Pp(2),G0(),Pp(2),G0(),Pp(),G0(),Pp(2),G0(),Pp(),G0(),Pp(2),YE("p-disabled",!i.reactiveForm.valid),Pp(),YE("p-primary-action",i.modalPrimaryAction),Pp(3),YE("p-value",i.reactiveForm.controls.name.value),Pp(3),YE("p-value",i.reactiveForm.controls.address.value),Pp(),YE("p-value",i.reactiveForm.controls.number.value),Pp(3),YE("p-value",i.reactiveForm.controls.email.value),Pp(),YE("p-value",i.reactiveForm.controls.website.value));},dependencies:[aY,iY,oY,vk,gk,Pe$1,di,Ap,Yo,ha,tr,Vp,dt],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Input - Reactive Form"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form [formGroup]="reactiveForm">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-input-reactive-form"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ze,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return a})();var fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoInputComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ng(),wl(24,"p"),Ux(25,"Importante:"),ng(),wl(26,"ul")(27,"li"),Ux(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ng()(),wl(29,"h4"),Ux(30,"Tokens customiz\xE1veis"),ng(),wl(31,"p"),Ux(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(33,"br"),Ux(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(35,"code"),Ux(36,".po-input"),ng()(),wl(37,"blockquote")(38,"p"),Ux(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),wl(40,"a",6),Ux(41,"Grid System"),ng(),Ux(42,"."),ng()(),wl(43,"blockquote")(44,"p"),Ux(45,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(46,"a",7),Ux(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(48,"."),ng()(),wl(49,"table")(50,"thead")(51,"tr")(52,"th"),Ux(53,"Propriedade"),ng(),wl(54,"th"),Ux(55,"Descri\xE7\xE3o"),ng(),wl(56,"th"),Ux(57,"Valor Padr\xE3o"),ng()()(),wl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Ux(62,"Default Values"),ng()(),Ul(63,"td")(64,"td"),ng(),wl(65,"tr")(66,"td")(67,"code"),Ux(68,"--font-family"),ng()(),wl(69,"td"),Ux(70,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(71,"td")(72,"code"),Ux(73,"var(--font-family-theme)"),ng()()(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--font-size"),ng()(),wl(78,"td"),Ux(79,"Tamanho da fonte"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--font-size-default)"),ng()()(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--text-color-placeholder"),ng()(),wl(87,"td"),Ux(88,"Cor do texto placeholder"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--color-neutral-light-30)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--color"),ng()(),wl(96,"td"),Ux(97,"Cor pincipal do input"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--color-neutral-dark-70)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--background"),ng()(),wl(105,"td"),Ux(106,"Cor de background"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--color-neutral-light-05)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--padding"),ng()(),wl(114,"td"),Ux(115,"Preenchimento"),ng(),wl(116,"td")(117,"code"),Ux(118,"0 0.5rem"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--text-color"),ng()(),wl(123,"td"),Ux(124,"Cor do texto"),ng(),wl(125,"td")(126,"code"),Ux(127,"var(--color-neutral-dark-90)"),ng()()(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--field-container-title-justify"),ng()(),wl(132,"td"),Ux(133,"Alinhamento horizontal do t\xEDtulo ("),wl(134,"code"),Ux(135,"justify-content"),ng(),Ux(136,")"),ng(),wl(137,"td")(138,"code"),Ux(139,"space-between"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--field-container-title-flex"),ng()(),wl(144,"td"),Ux(145,"Flex do t\xEDtulo ("),wl(146,"code"),Ux(147,"flex"),ng(),Ux(148,")"),ng(),wl(149,"td")(150,"code"),Ux(151,"1 auto"),ng()()(),wl(152,"tr")(153,"td")(154,"strong"),Ux(155,"Hover"),ng()(),Ul(156,"td")(157,"td"),ng(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--color-hover"),ng()(),wl(162,"td"),Ux(163,"Cor principal no estado hover"),ng(),wl(164,"td")(165,"code"),Ux(166,"var(--color-brand-01-dark)"),ng()()(),wl(167,"tr")(168,"td")(169,"code"),Ux(170,"--background-hover"),ng()(),wl(171,"td"),Ux(172,"Cor de background no estado hover"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--color-brand-01-lightest)"),ng()()(),wl(176,"tr")(177,"td")(178,"strong"),Ux(179,"Focused"),ng()(),Ul(180,"td")(181,"td"),ng(),wl(182,"tr")(183,"td")(184,"code"),Ux(185,"--color-focused"),ng()(),wl(186,"td"),Ux(187,"Cor principal no estado de focus"),ng(),wl(188,"td")(189,"code"),Ux(190,"var(--color-action-default)"),ng()()(),wl(191,"tr")(192,"td")(193,"code"),Ux(194,"--outline-color-focused"),ng()(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Disabled"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-disabled"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado disabled"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-neutral-light-30)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-disabled"),ng()(),wl(219,"td"),Ux(220,"Cor de background no estado disabled"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-neutral-light-20)"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--text-color-disabled"),ng()(),wl(228,"td"),Ux(229,"Cor do texto no estado disabled"),ng(),wl(230,"td")(231,"code"),Ux(232,"var(--color-neutral-dark-70)"),ng()()()()(),Ul(233,"br"),ng(),wl(234,"div",8)(235,"h4",9),Ux(236,"Seletor"),ng(),wl(237,"pre",10),Ux(238,`<po-input
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
`),ng()(),wl(239,"h4",11),Ux(240,"Propriedades"),ng(),wl(241,"table",12)(242,"tr",13)(243,"th",14),Ux(244,"Nome"),ng(),wl(245,"th",14),Ux(246,"Tipo"),ng(),wl(247,"th",14),Ux(248,"Padr\xE3o"),ng(),wl(249,"th",14),Ux(250,"Descri\xE7\xE3o"),ng()(),wl(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),Ux(255," (p-additional-help)"),Ul(256,"br"),ng()(),wl(257,"div",19),Ux(258,"Deprecated"),ng()(),wl(259,"td",20)(260,"code",21),Ux(261,"EventEmitter"),ng()(),wl(262,"td",22),Ux(263,"-"),ng(),wl(264,"td",23)(265,"em")(266,"strong"),Ux(267,"(opcional)"),ng()(),wl(268,"p"),Ux(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(270,"blockquote")(271,"p"),Ux(272,"Essa propriedade est\xE1 "),wl(273,"strong"),Ux(274,"depreciada"),ng(),Ux(275," e ser\xE1 removida na vers\xE3o "),wl(276,"code"),Ux(277,"23.x.x"),ng(),Ux(278,". Recomendamos utilizar a propriedade "),wl(279,"code"),Ux(280,"p-helper"),ng(),Ux(281," que oferece mais recursos e flexibilidade."),ng()()()(),wl(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),Ux(286," p-additional-help-tooltip"),Ul(287,"br"),ng()(),wl(288,"div",19),Ux(289,"Deprecated"),ng()(),wl(290,"td",20)(291,"code",26),Ux(292,"string"),ng()(),wl(293,"td",22),Ux(294,"-"),ng(),wl(295,"td",23)(296,"em")(297,"strong"),Ux(298,"(opcional)"),ng()(),wl(299,"p"),Ux(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(301,"code"),Ux(302,"po-helper"),ng(),Ux(303,`.
`),wl(304,"strong"),Ux(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(306,"blockquote")(307,"p"),Ux(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(309,"blockquote")(310,"p"),Ux(311,"Essa propriedade est\xE1 "),wl(312,"strong"),Ux(313,"depreciada"),ng(),Ux(314," e ser\xE1 removida na vers\xE3o "),wl(315,"code"),Ux(316,"23.x.x"),ng(),Ux(317,". Recomendamos utilizar a propriedade "),wl(318,"code"),Ux(319,"p-helper"),ng(),Ux(320," que oferece mais recursos e flexibilidade."),ng()()()(),wl(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),Ux(325," p-append-in-body"),Ul(326,"br"),ng()()(),wl(327,"td",20)(328,"code",27),Ux(329,"boolean"),ng()(),wl(330,"td",22)(331,"p")(332,"code"),Ux(333,"false"),ng()()(),wl(334,"td",23)(335,"em")(336,"strong"),Ux(337,"(opcional)"),ng()(),wl(338,"p"),Ux(339,"Define que o popover ("),wl(340,"code"),Ux(341,"p-helper"),ng(),Ux(342," e/ou "),wl(343,"code"),Ux(344,"p-error-limit"),ng(),Ux(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(346,"blockquote")(347,"p"),Ux(348,"Quando utilizado com "),wl(349,"code"),Ux(350,"p-helper"),ng(),Ux(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),Ux(356," p-auto-focus"),Ul(357,"br"),ng()()(),wl(358,"td",20)(359,"code",27),Ux(360,"boolean"),ng()(),wl(361,"td",22)(362,"p")(363,"code"),Ux(364,"false"),ng()()(),wl(365,"td",23)(366,"em")(367,"strong"),Ux(368,"(opcional)"),ng()(),wl(369,"p"),Ux(370,"Aplica foco no elemento ao ser iniciado."),ng(),wl(371,"blockquote")(372,"p"),Ux(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),Ux(378," (p-blur)"),Ul(379,"br"),ng()()(),wl(380,"td",20)(381,"code",21),Ux(382,"EventEmitter"),ng()(),wl(383,"td",22),Ux(384,"-"),ng(),wl(385,"td",23)(386,"em")(387,"strong"),Ux(388,"(opcional)"),ng()(),wl(389,"p"),Ux(390,"Evento disparado ao sair do campo."),ng()()(),wl(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),Ux(395," (p-change)"),Ul(396,"br"),ng()()(),wl(397,"td",20)(398,"code",21),Ux(399,"EventEmitter"),ng()(),wl(400,"td",22),Ux(401,"-"),ng(),wl(402,"td",23)(403,"em")(404,"strong"),Ux(405,"(opcional)"),ng()(),wl(406,"p"),Ux(407,"Evento disparado ao alterar valor e deixar o campo."),ng()()(),wl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),Ux(412," (p-change-model)"),Ul(413,"br"),ng()()(),wl(414,"td",20)(415,"code",21),Ux(416,"EventEmitter"),ng()(),wl(417,"td",22),Ux(418,"-"),ng(),wl(419,"td",23)(420,"em")(421,"strong"),Ux(422,"(opcional)"),ng()(),wl(423,"p"),Ux(424,"Evento disparado ao alterar valor do model."),ng()()(),wl(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),Ux(429,"p-clean"),Ul(430,"br"),ng()()(),wl(431,"td",20)(432,"code",27),Ux(433,"boolean"),ng()(),wl(434,"td",22),Ux(435,"-"),ng(),wl(436,"td",23)(437,"em")(438,"strong"),Ux(439,"(opcional)"),ng()(),wl(440,"p"),Ux(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng()()(),wl(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),Ux(446," p-compact-label"),Ul(447,"br"),ng()()(),wl(448,"td",20)(449,"code",27),Ux(450,"boolean"),ng()(),wl(451,"td",22)(452,"p")(453,"code"),Ux(454,"false"),ng()()(),wl(455,"td",23)(456,"em")(457,"strong"),Ux(458,"(opcional)"),ng()(),wl(459,"p"),Ux(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(461,"p"),Ux(462,"Quando habilitado ("),wl(463,"code"),Ux(464,"true"),ng(),Ux(465,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(466,"ul")(467,"li")(468,"code"),Ux(469,"po-label"),ng()(),wl(470,"li")(471,"code"),Ux(472,"p-requirement (showRequired)"),ng()(),wl(473,"li")(474,"code"),Ux(475,"po-helper"),ng()()(),wl(476,"p"),Ux(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(478,"p"),Ux(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(480,"ul")(481,"li")(482,"code"),Ux(483,"--field-container-title-justify"),ng()(),wl(484,"li")(485,"code"),Ux(486,"--field-container-title-flex"),ng()()(),wl(487,"p"),Ux(488,"Exemplo:"),ng(),wl(489,"pre")(490,"code"),Ux(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(492,"p"),Ux(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),Ux(498,"p-disabled"),Ul(499,"br"),ng()()(),wl(500,"td",20)(501,"code",27),Ux(502,"boolean"),ng()(),wl(503,"td",22)(504,"p")(505,"code"),Ux(506,"false"),ng()()(),wl(507,"td",23)(508,"em")(509,"strong"),Ux(510,"(opcional)"),ng()(),wl(511,"p"),Ux(512,"Se verdadeiro, desabilita o campo."),ng()()(),wl(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),Ux(517," p-emit-all-changes"),Ul(518,"br"),ng()()(),wl(519,"td",20)(520,"code",27),Ux(521,"boolean"),ng()(),wl(522,"td",22)(523,"p")(524,"code"),Ux(525,"false"),ng()()(),wl(526,"td",23)(527,"em")(528,"strong"),Ux(529,"(opcional)"),ng()(),wl(530,"p"),Ux(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),ng()()(),wl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),Ux(536," (p-enter)"),Ul(537,"br"),ng()()(),wl(538,"td",20)(539,"code",21),Ux(540,"EventEmitter"),ng()(),wl(541,"td",22),Ux(542,"-"),ng(),wl(543,"td",23)(544,"em")(545,"strong"),Ux(546,"(opcional)"),ng()(),wl(547,"p"),Ux(548,"Evento disparado ao entrar do campo."),ng()()(),wl(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),Ux(553," p-error-async-properties"),Ul(554,"br"),ng()()(),wl(555,"td",20)(556,"code",28),Ux(557,"ErrorAsyncProperties"),ng()(),wl(558,"td",22),Ux(559,"-"),ng(),wl(560,"td",23)(561,"em")(562,"strong"),Ux(563,"(opcional)"),ng()(),wl(564,"p"),Ux(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),wl(566,"code"),Ux(567,"Reactive Forms"),ng(),Ux(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),wl(569,"code"),Ux(570,"asyncValidators"),ng(),Ux(571,"."),ng()()(),wl(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),Ux(576," p-error-limit"),Ul(577,"br"),ng()()(),wl(578,"td",20)(579,"code",27),Ux(580,"boolean"),ng()(),wl(581,"td",22)(582,"p")(583,"code"),Ux(584,"false"),ng()()(),wl(585,"td",23)(586,"em")(587,"strong"),Ux(588,"(opcional)"),ng()(),wl(589,"p"),Ux(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(591,"blockquote")(592,"p"),Ux(593,"Caso essa propriedade seja definida como "),wl(594,"code"),Ux(595,"true"),ng(),Ux(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),Ux(601," p-error-pattern"),Ul(602,"br"),ng()()(),wl(603,"td",20)(604,"code",26),Ux(605,"string"),ng()(),wl(606,"td",22),Ux(607,"-"),ng(),wl(608,"td",23)(609,"em")(610,"strong"),Ux(611,"(opcional)"),ng()(),wl(612,"p"),Ux(613,"Mensagem que ser\xE1 apresentada quando o "),wl(614,"code"),Ux(615,"pattern"),ng(),Ux(616," ou a m\xE1scara n\xE3o for satisfeita."),ng(),wl(617,"blockquote")(618,"p"),Ux(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),wl(620,"code"),Ux(621,"p-required-field-error-message"),ng(),Ux(622," em conjunto."),ng()()()(),wl(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),Ux(627," p-help"),Ul(628,"br"),ng()()(),wl(629,"td",20)(630,"code",26),Ux(631,"string"),ng()(),wl(632,"td",22),Ux(633,"-"),ng(),wl(634,"td",23)(635,"em")(636,"strong"),Ux(637,"(opcional)"),ng()(),wl(638,"p"),Ux(639,"Texto de apoio do campo."),ng()()(),wl(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),Ux(644," p-icon"),Ul(645,"br"),ng()()(),wl(646,"td",20)(647,"code",26),Ux(648,"string "),ng(),wl(649,"code",29),Ux(650," TemplateRef<void>"),ng()(),wl(651,"td",22),Ux(652,"-"),ng(),wl(653,"td",23)(654,"em")(655,"strong"),Ux(656,"(opcional)"),ng()(),wl(657,"p"),Ux(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(659,"p"),Ux(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(661,"a",30),Ux(662,"Biblioteca de \xEDcones"),ng(),Ux(663,". conforme exemplo abaixo:"),ng(),wl(664,"pre")(665,"code"),Ux(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ng()(),wl(667,"p"),Ux(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(669,"em"),Ux(670,"Font Awesome"),ng(),Ux(671,", da seguinte forma:"),ng(),wl(672,"pre")(673,"code"),Ux(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ng()(),wl(675,"p"),Ux(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(677,"code"),Ux(678,"TemplateRef"),ng(),Ux(679,", conforme exemplo abaixo:"),ng(),wl(680,"pre")(681,"code"),Ux(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(683,"blockquote")(684,"p"),Ux(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(686,"code"),Ux(687,"font-size: inherit"),ng(),Ux(688," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),Ux(693," (p-keydown)"),Ul(694,"br"),ng()()(),wl(695,"td",20)(696,"code",21),Ux(697,"EventEmitter"),ng()(),wl(698,"td",22),Ux(699,"-"),ng(),wl(700,"td",23)(701,"em")(702,"strong"),Ux(703,"(opcional)"),ng()(),wl(704,"p"),Ux(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(706,"code"),Ux(707,"KeyboardEvent"),ng(),Ux(708," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),Ux(713," p-label"),Ul(714,"br"),ng()()(),wl(715,"td",20)(716,"code",26),Ux(717,"string"),ng()(),wl(718,"td",22),Ux(719,"-"),ng(),wl(720,"td",23)(721,"em")(722,"strong"),Ux(723,"(opcional)"),ng()(),wl(724,"p"),Ux(725,"R\xF3tulo do campo."),ng()()(),wl(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),Ux(730," p-label-text-wrap"),Ul(731,"br"),ng()()(),wl(732,"td",20)(733,"code",27),Ux(734,"boolean"),ng()(),wl(735,"td",22)(736,"p")(737,"code"),Ux(738,"false"),ng()()(),wl(739,"td",23)(740,"em")(741,"strong"),Ux(742,"(opcional)"),ng()(),wl(743,"p"),Ux(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(745,"code"),Ux(746,"p-label"),ng(),Ux(747,". Quando "),wl(748,"code"),Ux(749,"p-label-text-wrap"),ng(),Ux(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),Ux(755," p-loading"),Ul(756,"br"),ng()()(),wl(757,"td",20)(758,"code",27),Ux(759,"boolean"),ng()(),wl(760,"td",22)(761,"p")(762,"code"),Ux(763,"false"),ng()()(),wl(764,"td",23)(765,"em")(766,"strong"),Ux(767,"(opcional)"),ng()(),wl(768,"p"),Ux(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),Ux(774,"p-mask"),Ul(775,"br"),ng()()(),wl(776,"td",20)(777,"code",26),Ux(778,"string"),ng()(),wl(779,"td",22),Ux(780,"-"),ng(),wl(781,"td",23)(782,"em")(783,"strong"),Ux(784,"(opcional)"),ng()(),wl(785,"p"),Ux(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ng()()(),wl(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),Ux(791,"p-mask-format-model"),Ul(792,"br"),ng()()(),wl(793,"td",20)(794,"code",27),Ux(795,"boolean"),ng()(),wl(796,"td",22)(797,"p")(798,"code"),Ux(799,"false"),ng()()(),wl(800,"td",23)(801,"em")(802,"strong"),Ux(803,"(opcional)"),ng()(),wl(804,"p"),Ux(805,"Indica se o "),wl(806,"code"),Ux(807,"model"),ng(),Ux(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),ng()()(),wl(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),Ux(813," p-mask-no-length-validation"),Ul(814,"br"),ng()()(),wl(815,"td",20)(816,"code",27),Ux(817,"boolean"),ng()(),wl(818,"td",22)(819,"p")(820,"code"),Ux(821,"false"),ng()()(),wl(822,"td",23)(823,"p"),Ux(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(825,"code"),Ux(826,"minLength"),ng(),Ux(827,") e m\xE1ximo ("),wl(828,"code"),Ux(829,"maxLength"),ng(),Ux(830,") quando h\xE1 uma m\xE1scara ("),wl(831,"code"),Ux(832,"p-mask"),ng(),Ux(833,") definida."),ng(),wl(834,"ul")(835,"li"),Ux(836,"Quando "),wl(837,"code"),Ux(838,"true"),ng(),Ux(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(840,"li"),Ux(841,"Quando "),wl(842,"code"),Ux(843,"false"),ng(),Ux(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(845,"blockquote")(846,"p"),Ux(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(848,"code"),Ux(849,"p-mask-format-model"),ng(),Ux(850,"."),ng()(),wl(851,"p"),Ux(852,"Exemplo:"),ng(),wl(853,"pre")(854,"code"),Ux(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ng()(),wl(856,"ul")(857,"li"),Ux(858,"Entrada: "),wl(859,"code"),Ux(860,"123-456"),ng(),Ux(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),wl(862,"code"),Ux(863,"-"),ng(),Ux(864,"."),ng()()()(),wl(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),Ux(869," p-maxlength"),Ul(870,"br"),ng()()(),wl(871,"td",20)(872,"code",31),Ux(873,"number"),ng()(),wl(874,"td",22),Ux(875,"-"),ng(),wl(876,"td",23)(877,"em")(878,"strong"),Ux(879,"(opcional)"),ng()(),wl(880,"p"),Ux(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),ng()()(),wl(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),Ux(886," p-minlength"),Ul(887,"br"),ng()()(),wl(888,"td",20)(889,"code",31),Ux(890,"number"),ng()(),wl(891,"td",22),Ux(892,"-"),ng(),wl(893,"td",23)(894,"em")(895,"strong"),Ux(896,"(opcional)"),ng()(),wl(897,"p"),Ux(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),ng()()(),wl(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),Ux(903," name"),Ul(904,"br"),ng()()(),wl(905,"td",20)(906,"code",26),Ux(907,"string"),ng()(),wl(908,"td",22),Ux(909,"-"),ng(),wl(910,"td",23)(911,"p"),Ux(912,"Nome e identificador do campo."),ng()()(),wl(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),Ux(917," p-no-autocomplete"),Ul(918,"br"),ng()()(),wl(919,"td",20)(920,"code",27),Ux(921,"boolean"),ng()(),wl(922,"td",22)(923,"p")(924,"code"),Ux(925,"false"),ng()()(),wl(926,"td",23)(927,"em")(928,"strong"),Ux(929,"(opcional)"),ng()(),wl(930,"p"),Ux(931,"Define a propriedade nativa "),wl(932,"code"),Ux(933,"autocomplete"),ng(),Ux(934," do campo como "),wl(935,"code"),Ux(936,"off"),ng(),Ux(937,"."),ng(),wl(938,"blockquote")(939,"p"),Ux(940,"No componente "),wl(941,"code"),Ux(942,"po-password"),ng(),Ux(943," ser\xE1 definido como "),wl(944,"code"),Ux(945,"new-password"),ng(),Ux(946,"."),ng()(),wl(947,"p"),Ux(948,"Nos componentes "),wl(949,"code"),Ux(950,"po-password"),ng(),Ux(951," e "),wl(952,"code"),Ux(953,"po-login"),ng(),Ux(954," o valor padr\xE3o ser\xE1 "),wl(955,"code"),Ux(956,"true"),ng(),Ux(957,"."),ng()()(),wl(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),Ux(962," p-optional"),Ul(963,"br"),ng()()(),wl(964,"td",20)(965,"code",27),Ux(966,"boolean"),ng()(),wl(967,"td",22)(968,"p")(969,"code"),Ux(970,"false"),ng()()(),wl(971,"td",23)(972,"em")(973,"strong"),Ux(974,"(opcional)"),ng()(),wl(975,"p"),Ux(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(977,"blockquote")(978,"p"),Ux(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(980,"ul")(981,"li"),Ux(982,"O campo conter "),wl(983,"code"),Ux(984,"p-required"),ng(),Ux(985,";"),ng(),wl(986,"li"),Ux(987,"N\xE3o possuir "),wl(988,"code"),Ux(989,"p-help"),ng(),Ux(990," e/ou "),wl(991,"code"),Ux(992,"p-label"),ng(),Ux(993,"."),ng()()()(),wl(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),Ux(998,"p-pattern"),Ul(999,"br"),ng()()(),wl(1e3,"td",20)(1001,"code",26),Ux(1002,"string"),ng()(),wl(1003,"td",22),Ux(1004,"-"),ng(),wl(1005,"td",23)(1006,"em")(1007,"strong"),Ux(1008,"(opcional)"),ng()(),wl(1009,"p"),Ux(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),wl(1011,"code"),Ux(1012,"(p-mask)"),ng(),Ux(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ng()()(),wl(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),Ux(1018," p-placeholder"),Ul(1019,"br"),ng()()(),wl(1020,"td",20)(1021,"code",26),Ux(1022,"string"),ng()(),wl(1023,"td",22)(1024,"p"),Ux(1025,"''"),ng()(),wl(1026,"td",23)(1027,"em")(1028,"strong"),Ux(1029,"(opcional)"),ng()(),wl(1030,"p"),Ux(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),Ux(1036," p-helper"),Ul(1037,"br"),ng()()(),wl(1038,"td",20)(1039,"code",32),Ux(1040,"PoHelperOptions "),ng(),wl(1041,"code",26),Ux(1042," string"),ng()(),wl(1043,"td",22),Ux(1044,"-"),ng(),wl(1045,"td",23)(1046,"em")(1047,"strong"),Ux(1048,"(opcional)"),ng()(),wl(1049,"p"),Ux(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1051,"code"),Ux(1052,"p-label"),ng(),Ux(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1054,"code"),Ux(1055,"p-label"),ng(),Ux(1056,"."),ng(),wl(1057,"blockquote")(1058,"p"),Ux(1059,"Para mais informa\xE7\xF5es acesse: "),wl(1060,"a",33),Ux(1061,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1062,"."),ng()(),wl(1063,"blockquote")(1064,"p"),Ux(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1066,"code"),Ux(1067,"p-additional-help-tooltip"),ng(),Ux(1068," e "),wl(1069,"code"),Ux(1070,"p-additional-help"),ng(),Ux(1071,") ser\xE1 ignorado."),ng()()()(),wl(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),Ux(1076,"p-readonly"),Ul(1077,"br"),ng()()(),wl(1078,"td",20)(1079,"code",27),Ux(1080,"boolean"),ng()(),wl(1081,"td",22),Ux(1082,"-"),ng(),wl(1083,"td",23)(1084,"em")(1085,"strong"),Ux(1086,"(opcional)"),ng()(),wl(1087,"p"),Ux(1088,"Indica que o campo ser\xE1 somente leitura."),ng()()(),wl(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),Ux(1093,"p-required"),Ul(1094,"br"),ng()()(),wl(1095,"td",20)(1096,"code",27),Ux(1097,"boolean"),ng()(),wl(1098,"td",22)(1099,"p")(1100,"code"),Ux(1101,"false"),ng()()(),wl(1102,"td",23)(1103,"em")(1104,"strong"),Ux(1105,"(opcional)"),ng()(),wl(1106,"p"),Ux(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1108,"blockquote")(1109,"p"),Ux(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1111,"code"),Ux(1112,"(p-disabled)"),ng(),Ux(1113,"."),ng()()()(),wl(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),Ux(1118," p-required-field-error-message"),Ul(1119,"br"),ng()()(),wl(1120,"td",20)(1121,"code",27),Ux(1122,"boolean"),ng()(),wl(1123,"td",22)(1124,"p")(1125,"code"),Ux(1126,"false"),ng()()(),wl(1127,"td",23)(1128,"em")(1129,"strong"),Ux(1130,"(opcional)"),ng()(),wl(1131,"p"),Ux(1132,"Exibe a mensagem setada na propriedade "),wl(1133,"code"),Ux(1134,"p-error-pattern"),ng(),Ux(1135," se o campo estiver vazio e for requerido."),ng(),wl(1136,"blockquote")(1137,"p"),Ux(1138,"Necess\xE1rio que a propriedade "),wl(1139,"code"),Ux(1140,"p-required"),ng(),Ux(1141," esteja habilitada."),ng()()()(),wl(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),Ux(1146," p-show-required"),Ul(1147,"br"),ng()()(),wl(1148,"td",20)(1149,"code",27),Ux(1150,"boolean"),ng()(),wl(1151,"td",22),Ux(1152,"-"),ng(),wl(1153,"td",23)(1154,"p"),Ux(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1156,"blockquote")(1157,"p"),Ux(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1159,"ul")(1160,"li"),Ux(1161,"N\xE3o possuir "),wl(1162,"code"),Ux(1163,"p-help"),ng(),Ux(1164," e/ou "),wl(1165,"code"),Ux(1166,"p-label"),ng(),Ux(1167,"."),ng()()()(),wl(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),Ux(1172," p-size"),Ul(1173,"br"),ng()()(),wl(1174,"td",20)(1175,"code",26),Ux(1176,"string"),ng()(),wl(1177,"td",22)(1178,"p")(1179,"code"),Ux(1180,"medium"),ng()()(),wl(1181,"td",23)(1182,"em")(1183,"strong"),Ux(1184,"(opcional)"),ng()(),wl(1185,"p"),Ux(1186,"Define o tamanho do componente:"),ng(),wl(1187,"ul")(1188,"li")(1189,"code"),Ux(1190,"small"),ng(),Ux(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1192,"li")(1193,"code"),Ux(1194,"medium"),ng(),Ux(1195,": altura do input como 44px."),ng()(),wl(1196,"blockquote")(1197,"p"),Ux(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1199,"code"),Ux(1200,"medium"),ng(),Ux(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1202,"a",34),Ux(1203,"po-theme"),ng(),Ux(1204,"."),ng()()()(),wl(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),Ux(1209," p-upper-case"),Ul(1210,"br"),ng()()(),wl(1211,"td",20)(1212,"code",27),Ux(1213,"boolean"),ng()(),wl(1214,"td",22),Ux(1215,"-"),ng(),wl(1216,"td",23)(1217,"p"),Ux(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),ng()()()(),wl(1219,"h3",11),Ux(1220,"M\xE9todos"),ng(),wl(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),Ux(1227," showAdditionalHelp "),ng()()()()(),wl(1228,"tr",23)(1229,"td",23)(1230,"p"),Ux(1231,"M\xE9todo que exibe "),wl(1232,"code"),Ux(1233,"p-helper"),ng(),Ux(1234," ou executa a a\xE7\xE3o definida em "),wl(1235,"code"),Ux(1236,"p-helper{eventOnClick}"),ng(),Ux(1237," ou em "),wl(1238,"code"),Ux(1239,"p-additionalHelp"),ng(),Ux(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1241,"code"),Ux(1242,"p-keydown"),ng(),Ux(1243,"."),ng(),wl(1244,"blockquote")(1245,"p"),Ux(1246,"Exibe ou oculta o conte\xFAdo do componente "),wl(1247,"code"),Ux(1248,"po-helper"),ng(),Ux(1249," quando o componente estiver com foco."),ng()(),wl(1250,"pre")(1251,"code"),Ux(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ng()(),wl(1253,"pre")(1254,"code"),Ux(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1256,"br"),wl(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),Ux(1263," focus "),ng()()()()(),wl(1264,"tr",23)(1265,"td",23)(1266,"p"),Ux(1267,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1268,"p"),Ux(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1270,"pre")(1271,"code"),Ux(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ng()()()()(),Ul(1273,"br"),wl(1274,"h3"),Ux(1275,"Interfaces"),ng(),wl(1276,"h4",37)(1277,"code",5),Ux(1278,"ErrorAsyncProperties"),ng()(),wl(1279,"div",2)(1280,"p"),Ux(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),ng()(),wl(1282,"h4",11),Ux(1283,"Propriedades"),ng(),wl(1284,"table",12)(1285,"tr",13)(1286,"th",14),Ux(1287,"Nome"),ng(),wl(1288,"th",14),Ux(1289,"Tipo"),ng(),wl(1290,"th",14),Ux(1291,"Descri\xE7\xE3o"),ng()(),wl(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),Ux(1296," errorAsync"),Ul(1297,"br"),ng()()(),wl(1298,"td",20)(1299,"code",38),Ux(1300,"(value) => Observable<boolean>"),ng()(),wl(1301,"td",23)(1302,"p"),Ux(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(1304,"code"),Ux(1305,"change"),ng(),Ux(1306," ou "),wl(1307,"code"),Ux(1308,"change-model"),ng(),Ux(1309,", dependendo do valor da propriedade "),wl(1310,"code"),Ux(1311,"triggerMode"),ng(),Ux(1312,"."),ng()()(),wl(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),Ux(1317," triggerMode"),Ul(1318,"br"),ng()()(),wl(1319,"td",20)(1320,"code",39),Ux(1321,"'change' "),ng(),wl(1322,"code",40),Ux(1323," 'changeModel'"),ng()(),wl(1324,"td",23)(1325,"em")(1326,"strong"),Ux(1327,"(opcional)"),ng()(),wl(1328,"p"),Ux(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),wl(1330,"code"),Ux(1331,"change"),ng(),Ux(1332," ou "),wl(1333,"code"),Ux(1334,"change-model"),ng(),Ux(1335,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-input-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,be,xe,ve,fe],encapsulation:2})}return a})();var Oe=[{path:"",component:Ce}],ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Oe),vL]})}return a})();var Ct=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,ye]})}return a})();export{Ct as DocPoInputModule};