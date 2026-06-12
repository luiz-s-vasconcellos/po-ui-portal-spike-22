import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,cR as fY,cS as am,b3 as q3,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,ct as Hhe,cc as Nde,aJ as nme,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,cV as bk,cW as wk,cE as Uz,d0 as $3,b5 as Ko,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_,bc as Sx}from'./main-OS7VVRJY.js';var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic"]],standalone:false,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&Hl(0,"po-input",0);},dependencies:[q3],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Input Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-input-basic/sample-po-input-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-input-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ce],encapsulation:2})}return a})();var ge=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.input=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs"]],standalone:false,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"po-input",1),gw("ngModelChange",function(l){return Jy(s),Zx(i.input,l)||(i.input=l),e_(l)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(l){return Jy(s),Zx(i.label,l)||(i.label=l),e_(l)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(l){return Jy(s),Zx(i.help,l)||(i.help=l),e_(l)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(l){return Jy(s),Zx(i.helperText,l)||(i.helperText=l),e_(l)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(l){return Jy(s),Zx(i.placeholder,l)||(i.placeholder=l),e_(l)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(l){return Jy(s),Zx(i.errorPattern,l)||(i.errorPattern=l),e_(l)}),og(),Z0(),Cl(13,"po-input",10),gw("ngModelChange",function(l){return Jy(s),Zx(i.mask,l)||(i.mask=l),e_(l)}),og(),Z0(),Cl(14,"po-input",11),gw("ngModelChange",function(l){return Jy(s),Zx(i.pattern,l)||(i.pattern=l),e_(l)}),og(),Z0(),Cl(15,"po-number",12),gw("ngModelChange",function(l){return Jy(s),Zx(i.minlength,l)||(i.minlength=l),e_(l)}),og(),Z0(),Cl(16,"po-number",13),gw("ngModelChange",function(l){return Jy(s),Zx(i.maxlength,l)||(i.maxlength=l),e_(l)}),og(),Z0(),Cl(17,"po-select",14),gw("ngModelChange",function(l){return Jy(s),Zx(i.icon,l)||(i.icon=l),e_(l)}),og(),Z0(),Cl(18,"po-checkbox-group",15),gw("ngModelChange",function(l){return Jy(s),Zx(i.properties,l)||(i.properties=l),e_(l)}),og(),Z0(),Cl(19,"po-radio-group",16),gw("ngModelChange",function(l){return Jy(s),Zx(i.size,l)||(i.size=l),e_(l)}),og(),Z0(),Cl(20,"div",2)(21,"po-button",17),dt("p-click",function(){return Jy(s),Sx(7).reset(),e_(i.restore())}),og()()();}r&2&&(pw("ngModel",i.input),ZE("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.input),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.errorPattern),X0(),Lp(),pw("ngModel",i.mask),X0(),Lp(),pw("ngModel",i.pattern),X0(),Lp(),pw("ngModel",i.minlength),X0(),Lp(),pw("ngModel",i.maxlength),X0(),Lp(),pw("ngModel",i.icon),ZE("p-options",i.iconOptions),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,nme,sme],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Input Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-input-labs/sample-po-input-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-input
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-input-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return a})();var qe=["reactiveFormData"],Se=(()=>{class a{fb=f(fY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm();}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",am.compose([am.required,am.minLength(5),am.maxLength(30)])],address:["",am.compose([am.required,am.minLength(5),am.maxLength(50)])],number:["",am.compose([am.required,am.min(1),am.max(99999)])],email:["",am.required],website:["",am.required]});}saveForm(){this.reactiveFormModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&zl(qe,7),r&2){let s;uo(s=fo())&&(i.reactiveFormModal=s.first);}},standalone:false,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(Cl(0,"form",1)(1,"div",2),Hl(2,"po-input",3),Z0(),og(),Cl(3,"div",2),Hl(4,"po-input",4),Z0(),Hl(5,"po-number",5),Z0(),og(),Cl(6,"div",2),Hl(7,"po-email",6),Z0(),Hl(8,"po-url",7),Z0(),og(),Cl(9,"div",2)(10,"po-button",8),dt("p-click",function(){return i.saveForm()}),og()()(),Cl(11,"po-modal",9,0)(13,"div",2),Hl(14,"po-info",10),og(),Hl(15,"po-divider"),Cl(16,"div",2),Hl(17,"po-info",11)(18,"po-info",12),og(),Hl(19,"po-divider"),Cl(20,"div",2),Hl(21,"po-info",13)(22,"po-info",14),og()()),r&2&&(ZE("formGroup",i.reactiveForm),Lp(2),X0(),Lp(2),X0(),Lp(),X0(),Lp(2),X0(),Lp(),X0(),Lp(2),ZE("p-disabled",!i.reactiveForm.valid),Lp(),ZE("p-primary-action",i.modalPrimaryAction),Lp(3),ZE("p-value",i.reactiveForm.controls.name.value),Lp(3),ZE("p-value",i.reactiveForm.controls.address.value),Lp(),ZE("p-value",i.reactiveForm.controls.number.value),Lp(3),ZE("p-value",i.reactiveForm.controls.email.value),Lp(),ZE("p-value",i.reactiveForm.controls.website.value));},dependencies:[lY,sY,aY,bk,wk,Qt,_v,Uz,q3,Hhe,$3,sme,Ko],encapsulation:2,changeDetection:1})}return a})();var Fe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Input - Reactive Form"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<form [formGroup]="reactiveForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-input-reactive-form"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return a})();var he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-input-doc"]],standalone:false,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoInputComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Cl(24,"p"),qx(25,"Importante:"),og(),Cl(26,"ul")(27,"li"),qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Cl(29,"h4"),qx(30,"Tokens customiz\xE1veis"),og(),Cl(31,"p"),qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(33,"br"),qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(35,"code"),qx(36,".po-input"),og()(),Cl(37,"blockquote")(38,"p"),qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Cl(40,"a",6),qx(41,"Grid System"),og(),qx(42,"."),og()(),Cl(43,"blockquote")(44,"p"),qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(46,"a",7),qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(48,"."),og()(),Cl(49,"table")(50,"thead")(51,"tr")(52,"th"),qx(53,"Propriedade"),og(),Cl(54,"th"),qx(55,"Descri\xE7\xE3o"),og(),Cl(56,"th"),qx(57,"Valor Padr\xE3o"),og()()(),Cl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),qx(62,"Default Values"),og()(),Hl(63,"td")(64,"td"),og(),Cl(65,"tr")(66,"td")(67,"code"),qx(68,"--font-family"),og()(),Cl(69,"td"),qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(71,"td")(72,"code"),qx(73,"var(--font-family-theme)"),og()()(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--font-size"),og()(),Cl(78,"td"),qx(79,"Tamanho da fonte"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--font-size-default)"),og()()(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--text-color-placeholder"),og()(),Cl(87,"td"),qx(88,"Cor do texto placeholder"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--color-neutral-light-30)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--color"),og()(),Cl(96,"td"),qx(97,"Cor pincipal do input"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--color-neutral-dark-70)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--background"),og()(),Cl(105,"td"),qx(106,"Cor de background"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--color-neutral-light-05)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--padding"),og()(),Cl(114,"td"),qx(115,"Preenchimento"),og(),Cl(116,"td")(117,"code"),qx(118,"0 0.5rem"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--text-color"),og()(),Cl(123,"td"),qx(124,"Cor do texto"),og(),Cl(125,"td")(126,"code"),qx(127,"var(--color-neutral-dark-90)"),og()()(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--field-container-title-justify"),og()(),Cl(132,"td"),qx(133,"Alinhamento horizontal do t\xEDtulo ("),Cl(134,"code"),qx(135,"justify-content"),og(),qx(136,")"),og(),Cl(137,"td")(138,"code"),qx(139,"space-between"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--field-container-title-flex"),og()(),Cl(144,"td"),qx(145,"Flex do t\xEDtulo ("),Cl(146,"code"),qx(147,"flex"),og(),qx(148,")"),og(),Cl(149,"td")(150,"code"),qx(151,"1 auto"),og()()(),Cl(152,"tr")(153,"td")(154,"strong"),qx(155,"Hover"),og()(),Hl(156,"td")(157,"td"),og(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--color-hover"),og()(),Cl(162,"td"),qx(163,"Cor principal no estado hover"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--color-brand-01-dark)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--background-hover"),og()(),Cl(171,"td"),qx(172,"Cor de background no estado hover"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-brand-01-lightest)"),og()()(),Cl(176,"tr")(177,"td")(178,"strong"),qx(179,"Focused"),og()(),Hl(180,"td")(181,"td"),og(),Cl(182,"tr")(183,"td")(184,"code"),qx(185,"--color-focused"),og()(),Cl(186,"td"),qx(187,"Cor principal no estado de focus"),og(),Cl(188,"td")(189,"code"),qx(190,"var(--color-action-default)"),og()()(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Disabled"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-disabled"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado disabled"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-neutral-light-30)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-disabled"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado disabled"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-neutral-light-20)"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--text-color-disabled"),og()(),Cl(228,"td"),qx(229,"Cor do texto no estado disabled"),og(),Cl(230,"td")(231,"code"),qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Hl(233,"br"),og(),Cl(234,"div",8)(235,"h4",9),qx(236,"Seletor"),og(),Cl(237,"pre",10),qx(238,`<po-input
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
`),og()(),Cl(239,"h4",11),qx(240,"Propriedades"),og(),Cl(241,"table",12)(242,"tr",13)(243,"th",14),qx(244,"Nome"),og(),Cl(245,"th",14),qx(246,"Tipo"),og(),Cl(247,"th",14),qx(248,"Padr\xE3o"),og(),Cl(249,"th",14),qx(250,"Descri\xE7\xE3o"),og()(),Cl(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),qx(255," (p-additional-help)"),Hl(256,"br"),og()(),Cl(257,"div",19),qx(258,"Deprecated"),og()(),Cl(259,"td",20)(260,"code",21),qx(261,"EventEmitter"),og()(),Cl(262,"td",22),qx(263,"-"),og(),Cl(264,"td",23)(265,"em")(266,"strong"),qx(267,"(opcional)"),og()(),Cl(268,"p"),qx(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(270,"blockquote")(271,"p"),qx(272,"Essa propriedade est\xE1 "),Cl(273,"strong"),qx(274,"depreciada"),og(),qx(275," e ser\xE1 removida na vers\xE3o "),Cl(276,"code"),qx(277,"23.x.x"),og(),qx(278,". Recomendamos utilizar a propriedade "),Cl(279,"code"),qx(280,"p-helper"),og(),qx(281," que oferece mais recursos e flexibilidade."),og()()()(),Cl(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),qx(286," p-additional-help-tooltip"),Hl(287,"br"),og()(),Cl(288,"div",19),qx(289,"Deprecated"),og()(),Cl(290,"td",20)(291,"code",26),qx(292,"string"),og()(),Cl(293,"td",22),qx(294,"-"),og(),Cl(295,"td",23)(296,"em")(297,"strong"),qx(298,"(opcional)"),og()(),Cl(299,"p"),qx(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(301,"code"),qx(302,"po-helper"),og(),qx(303,`.
`),Cl(304,"strong"),qx(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(306,"blockquote")(307,"p"),qx(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(309,"blockquote")(310,"p"),qx(311,"Essa propriedade est\xE1 "),Cl(312,"strong"),qx(313,"depreciada"),og(),qx(314," e ser\xE1 removida na vers\xE3o "),Cl(315,"code"),qx(316,"23.x.x"),og(),qx(317,". Recomendamos utilizar a propriedade "),Cl(318,"code"),qx(319,"p-helper"),og(),qx(320," que oferece mais recursos e flexibilidade."),og()()()(),Cl(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),qx(325," p-append-in-body"),Hl(326,"br"),og()()(),Cl(327,"td",20)(328,"code",27),qx(329,"boolean"),og()(),Cl(330,"td",22)(331,"p")(332,"code"),qx(333,"false"),og()()(),Cl(334,"td",23)(335,"em")(336,"strong"),qx(337,"(opcional)"),og()(),Cl(338,"p"),qx(339,"Define que o popover ("),Cl(340,"code"),qx(341,"p-helper"),og(),qx(342," e/ou "),Cl(343,"code"),qx(344,"p-error-limit"),og(),qx(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(346,"blockquote")(347,"p"),qx(348,"Quando utilizado com "),Cl(349,"code"),qx(350,"p-helper"),og(),qx(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),qx(356," p-auto-focus"),Hl(357,"br"),og()()(),Cl(358,"td",20)(359,"code",27),qx(360,"boolean"),og()(),Cl(361,"td",22)(362,"p")(363,"code"),qx(364,"false"),og()()(),Cl(365,"td",23)(366,"em")(367,"strong"),qx(368,"(opcional)"),og()(),Cl(369,"p"),qx(370,"Aplica foco no elemento ao ser iniciado."),og(),Cl(371,"blockquote")(372,"p"),qx(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),qx(378," (p-blur)"),Hl(379,"br"),og()()(),Cl(380,"td",20)(381,"code",21),qx(382,"EventEmitter"),og()(),Cl(383,"td",22),qx(384,"-"),og(),Cl(385,"td",23)(386,"em")(387,"strong"),qx(388,"(opcional)"),og()(),Cl(389,"p"),qx(390,"Evento disparado ao sair do campo."),og()()(),Cl(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),qx(395," (p-change)"),Hl(396,"br"),og()()(),Cl(397,"td",20)(398,"code",21),qx(399,"EventEmitter"),og()(),Cl(400,"td",22),qx(401,"-"),og(),Cl(402,"td",23)(403,"em")(404,"strong"),qx(405,"(opcional)"),og()(),Cl(406,"p"),qx(407,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Cl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),qx(412," (p-change-model)"),Hl(413,"br"),og()()(),Cl(414,"td",20)(415,"code",21),qx(416,"EventEmitter"),og()(),Cl(417,"td",22),qx(418,"-"),og(),Cl(419,"td",23)(420,"em")(421,"strong"),qx(422,"(opcional)"),og()(),Cl(423,"p"),qx(424,"Evento disparado ao alterar valor do model."),og()()(),Cl(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),qx(429,"p-clean"),Hl(430,"br"),og()()(),Cl(431,"td",20)(432,"code",27),qx(433,"boolean"),og()(),Cl(434,"td",22),qx(435,"-"),og(),Cl(436,"td",23)(437,"em")(438,"strong"),qx(439,"(opcional)"),og()(),Cl(440,"p"),qx(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Cl(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),qx(446," p-compact-label"),Hl(447,"br"),og()()(),Cl(448,"td",20)(449,"code",27),qx(450,"boolean"),og()(),Cl(451,"td",22)(452,"p")(453,"code"),qx(454,"false"),og()()(),Cl(455,"td",23)(456,"em")(457,"strong"),qx(458,"(opcional)"),og()(),Cl(459,"p"),qx(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(461,"p"),qx(462,"Quando habilitado ("),Cl(463,"code"),qx(464,"true"),og(),qx(465,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(466,"ul")(467,"li")(468,"code"),qx(469,"po-label"),og()(),Cl(470,"li")(471,"code"),qx(472,"p-requirement (showRequired)"),og()(),Cl(473,"li")(474,"code"),qx(475,"po-helper"),og()()(),Cl(476,"p"),qx(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(478,"p"),qx(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(480,"ul")(481,"li")(482,"code"),qx(483,"--field-container-title-justify"),og()(),Cl(484,"li")(485,"code"),qx(486,"--field-container-title-flex"),og()()(),Cl(487,"p"),qx(488,"Exemplo:"),og(),Cl(489,"pre")(490,"code"),qx(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(492,"p"),qx(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),qx(498,"p-disabled"),Hl(499,"br"),og()()(),Cl(500,"td",20)(501,"code",27),qx(502,"boolean"),og()(),Cl(503,"td",22)(504,"p")(505,"code"),qx(506,"false"),og()()(),Cl(507,"td",23)(508,"em")(509,"strong"),qx(510,"(opcional)"),og()(),Cl(511,"p"),qx(512,"Se verdadeiro, desabilita o campo."),og()()(),Cl(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),qx(517," p-emit-all-changes"),Hl(518,"br"),og()()(),Cl(519,"td",20)(520,"code",27),qx(521,"boolean"),og()(),Cl(522,"td",22)(523,"p")(524,"code"),qx(525,"false"),og()()(),Cl(526,"td",23)(527,"em")(528,"strong"),qx(529,"(opcional)"),og()(),Cl(530,"p"),qx(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Cl(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),qx(536," (p-enter)"),Hl(537,"br"),og()()(),Cl(538,"td",20)(539,"code",21),qx(540,"EventEmitter"),og()(),Cl(541,"td",22),qx(542,"-"),og(),Cl(543,"td",23)(544,"em")(545,"strong"),qx(546,"(opcional)"),og()(),Cl(547,"p"),qx(548,"Evento disparado ao entrar do campo."),og()()(),Cl(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),qx(553," p-error-async-properties"),Hl(554,"br"),og()()(),Cl(555,"td",20)(556,"code",28),qx(557,"ErrorAsyncProperties"),og()(),Cl(558,"td",22),qx(559,"-"),og(),Cl(560,"td",23)(561,"em")(562,"strong"),qx(563,"(opcional)"),og()(),Cl(564,"p"),qx(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Cl(566,"code"),qx(567,"Reactive Forms"),og(),qx(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Cl(569,"code"),qx(570,"asyncValidators"),og(),qx(571,"."),og()()(),Cl(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),qx(576," p-error-limit"),Hl(577,"br"),og()()(),Cl(578,"td",20)(579,"code",27),qx(580,"boolean"),og()(),Cl(581,"td",22)(582,"p")(583,"code"),qx(584,"false"),og()()(),Cl(585,"td",23)(586,"em")(587,"strong"),qx(588,"(opcional)"),og()(),Cl(589,"p"),qx(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(591,"blockquote")(592,"p"),qx(593,"Caso essa propriedade seja definida como "),Cl(594,"code"),qx(595,"true"),og(),qx(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),qx(601," p-error-pattern"),Hl(602,"br"),og()()(),Cl(603,"td",20)(604,"code",26),qx(605,"string"),og()(),Cl(606,"td",22),qx(607,"-"),og(),Cl(608,"td",23)(609,"em")(610,"strong"),qx(611,"(opcional)"),og()(),Cl(612,"p"),qx(613,"Mensagem que ser\xE1 apresentada quando o "),Cl(614,"code"),qx(615,"pattern"),og(),qx(616," ou a m\xE1scara n\xE3o for satisfeita."),og(),Cl(617,"blockquote")(618,"p"),qx(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Cl(620,"code"),qx(621,"p-required-field-error-message"),og(),qx(622," em conjunto."),og()()()(),Cl(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),qx(627," p-help"),Hl(628,"br"),og()()(),Cl(629,"td",20)(630,"code",26),qx(631,"string"),og()(),Cl(632,"td",22),qx(633,"-"),og(),Cl(634,"td",23)(635,"em")(636,"strong"),qx(637,"(opcional)"),og()(),Cl(638,"p"),qx(639,"Texto de apoio do campo."),og()()(),Cl(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),qx(644," p-icon"),Hl(645,"br"),og()()(),Cl(646,"td",20)(647,"code",26),qx(648,"string "),og(),Cl(649,"code",29),qx(650," TemplateRef<void>"),og()(),Cl(651,"td",22),qx(652,"-"),og(),Cl(653,"td",23)(654,"em")(655,"strong"),qx(656,"(opcional)"),og()(),Cl(657,"p"),qx(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(659,"p"),qx(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(661,"a",30),qx(662,"Biblioteca de \xEDcones"),og(),qx(663,". conforme exemplo abaixo:"),og(),Cl(664,"pre")(665,"code"),qx(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Cl(667,"p"),qx(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(669,"em"),qx(670,"Font Awesome"),og(),qx(671,", da seguinte forma:"),og(),Cl(672,"pre")(673,"code"),qx(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Cl(675,"p"),qx(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(677,"code"),qx(678,"TemplateRef"),og(),qx(679,", conforme exemplo abaixo:"),og(),Cl(680,"pre")(681,"code"),qx(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(683,"blockquote")(684,"p"),qx(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(686,"code"),qx(687,"font-size: inherit"),og(),qx(688," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),qx(693," (p-keydown)"),Hl(694,"br"),og()()(),Cl(695,"td",20)(696,"code",21),qx(697,"EventEmitter"),og()(),Cl(698,"td",22),qx(699,"-"),og(),Cl(700,"td",23)(701,"em")(702,"strong"),qx(703,"(opcional)"),og()(),Cl(704,"p"),qx(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(706,"code"),qx(707,"KeyboardEvent"),og(),qx(708," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),qx(713," p-label"),Hl(714,"br"),og()()(),Cl(715,"td",20)(716,"code",26),qx(717,"string"),og()(),Cl(718,"td",22),qx(719,"-"),og(),Cl(720,"td",23)(721,"em")(722,"strong"),qx(723,"(opcional)"),og()(),Cl(724,"p"),qx(725,"R\xF3tulo do campo."),og()()(),Cl(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),qx(730," p-label-text-wrap"),Hl(731,"br"),og()()(),Cl(732,"td",20)(733,"code",27),qx(734,"boolean"),og()(),Cl(735,"td",22)(736,"p")(737,"code"),qx(738,"false"),og()()(),Cl(739,"td",23)(740,"em")(741,"strong"),qx(742,"(opcional)"),og()(),Cl(743,"p"),qx(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(745,"code"),qx(746,"p-label"),og(),qx(747,". Quando "),Cl(748,"code"),qx(749,"p-label-text-wrap"),og(),qx(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),qx(755," p-loading"),Hl(756,"br"),og()()(),Cl(757,"td",20)(758,"code",27),qx(759,"boolean"),og()(),Cl(760,"td",22)(761,"p")(762,"code"),qx(763,"false"),og()()(),Cl(764,"td",23)(765,"em")(766,"strong"),qx(767,"(opcional)"),og()(),Cl(768,"p"),qx(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),qx(774,"p-mask"),Hl(775,"br"),og()()(),Cl(776,"td",20)(777,"code",26),qx(778,"string"),og()(),Cl(779,"td",22),qx(780,"-"),og(),Cl(781,"td",23)(782,"em")(783,"strong"),qx(784,"(opcional)"),og()(),Cl(785,"p"),qx(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Cl(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),qx(791,"p-mask-format-model"),Hl(792,"br"),og()()(),Cl(793,"td",20)(794,"code",27),qx(795,"boolean"),og()(),Cl(796,"td",22)(797,"p")(798,"code"),qx(799,"false"),og()()(),Cl(800,"td",23)(801,"em")(802,"strong"),qx(803,"(opcional)"),og()(),Cl(804,"p"),qx(805,"Indica se o "),Cl(806,"code"),qx(807,"model"),og(),qx(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Cl(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),qx(813," p-mask-no-length-validation"),Hl(814,"br"),og()()(),Cl(815,"td",20)(816,"code",27),qx(817,"boolean"),og()(),Cl(818,"td",22)(819,"p")(820,"code"),qx(821,"false"),og()()(),Cl(822,"td",23)(823,"p"),qx(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(825,"code"),qx(826,"minLength"),og(),qx(827,") e m\xE1ximo ("),Cl(828,"code"),qx(829,"maxLength"),og(),qx(830,") quando h\xE1 uma m\xE1scara ("),Cl(831,"code"),qx(832,"p-mask"),og(),qx(833,") definida."),og(),Cl(834,"ul")(835,"li"),qx(836,"Quando "),Cl(837,"code"),qx(838,"true"),og(),qx(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(840,"li"),qx(841,"Quando "),Cl(842,"code"),qx(843,"false"),og(),qx(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(845,"blockquote")(846,"p"),qx(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(848,"code"),qx(849,"p-mask-format-model"),og(),qx(850,"."),og()(),Cl(851,"p"),qx(852,"Exemplo:"),og(),Cl(853,"pre")(854,"code"),qx(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Cl(856,"ul")(857,"li"),qx(858,"Entrada: "),Cl(859,"code"),qx(860,"123-456"),og(),qx(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Cl(862,"code"),qx(863,"-"),og(),qx(864,"."),og()()()(),Cl(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),qx(869," p-maxlength"),Hl(870,"br"),og()()(),Cl(871,"td",20)(872,"code",31),qx(873,"number"),og()(),Cl(874,"td",22),qx(875,"-"),og(),Cl(876,"td",23)(877,"em")(878,"strong"),qx(879,"(opcional)"),og()(),Cl(880,"p"),qx(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Cl(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),qx(886," p-minlength"),Hl(887,"br"),og()()(),Cl(888,"td",20)(889,"code",31),qx(890,"number"),og()(),Cl(891,"td",22),qx(892,"-"),og(),Cl(893,"td",23)(894,"em")(895,"strong"),qx(896,"(opcional)"),og()(),Cl(897,"p"),qx(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Cl(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),qx(903," name"),Hl(904,"br"),og()()(),Cl(905,"td",20)(906,"code",26),qx(907,"string"),og()(),Cl(908,"td",22),qx(909,"-"),og(),Cl(910,"td",23)(911,"p"),qx(912,"Nome e identificador do campo."),og()()(),Cl(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),qx(917," p-no-autocomplete"),Hl(918,"br"),og()()(),Cl(919,"td",20)(920,"code",27),qx(921,"boolean"),og()(),Cl(922,"td",22)(923,"p")(924,"code"),qx(925,"false"),og()()(),Cl(926,"td",23)(927,"em")(928,"strong"),qx(929,"(opcional)"),og()(),Cl(930,"p"),qx(931,"Define a propriedade nativa "),Cl(932,"code"),qx(933,"autocomplete"),og(),qx(934," do campo como "),Cl(935,"code"),qx(936,"off"),og(),qx(937,"."),og(),Cl(938,"blockquote")(939,"p"),qx(940,"No componente "),Cl(941,"code"),qx(942,"po-password"),og(),qx(943," ser\xE1 definido como "),Cl(944,"code"),qx(945,"new-password"),og(),qx(946,"."),og()(),Cl(947,"p"),qx(948,"Nos componentes "),Cl(949,"code"),qx(950,"po-password"),og(),qx(951," e "),Cl(952,"code"),qx(953,"po-login"),og(),qx(954," o valor padr\xE3o ser\xE1 "),Cl(955,"code"),qx(956,"true"),og(),qx(957,"."),og()()(),Cl(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),qx(962," p-optional"),Hl(963,"br"),og()()(),Cl(964,"td",20)(965,"code",27),qx(966,"boolean"),og()(),Cl(967,"td",22)(968,"p")(969,"code"),qx(970,"false"),og()()(),Cl(971,"td",23)(972,"em")(973,"strong"),qx(974,"(opcional)"),og()(),Cl(975,"p"),qx(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(977,"blockquote")(978,"p"),qx(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(980,"ul")(981,"li"),qx(982,"O campo conter "),Cl(983,"code"),qx(984,"p-required"),og(),qx(985,";"),og(),Cl(986,"li"),qx(987,"N\xE3o possuir "),Cl(988,"code"),qx(989,"p-help"),og(),qx(990," e/ou "),Cl(991,"code"),qx(992,"p-label"),og(),qx(993,"."),og()()()(),Cl(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),qx(998,"p-pattern"),Hl(999,"br"),og()()(),Cl(1e3,"td",20)(1001,"code",26),qx(1002,"string"),og()(),Cl(1003,"td",22),qx(1004,"-"),og(),Cl(1005,"td",23)(1006,"em")(1007,"strong"),qx(1008,"(opcional)"),og()(),Cl(1009,"p"),qx(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Cl(1011,"code"),qx(1012,"(p-mask)"),og(),qx(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Cl(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),qx(1018," p-placeholder"),Hl(1019,"br"),og()()(),Cl(1020,"td",20)(1021,"code",26),qx(1022,"string"),og()(),Cl(1023,"td",22)(1024,"p"),qx(1025,"''"),og()(),Cl(1026,"td",23)(1027,"em")(1028,"strong"),qx(1029,"(opcional)"),og()(),Cl(1030,"p"),qx(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),qx(1036," p-helper"),Hl(1037,"br"),og()()(),Cl(1038,"td",20)(1039,"code",32),qx(1040,"PoHelperOptions "),og(),Cl(1041,"code",26),qx(1042," string"),og()(),Cl(1043,"td",22),qx(1044,"-"),og(),Cl(1045,"td",23)(1046,"em")(1047,"strong"),qx(1048,"(opcional)"),og()(),Cl(1049,"p"),qx(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1051,"code"),qx(1052,"p-label"),og(),qx(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1054,"code"),qx(1055,"p-label"),og(),qx(1056,"."),og(),Cl(1057,"blockquote")(1058,"p"),qx(1059,"Para mais informa\xE7\xF5es acesse: "),Cl(1060,"a",33),qx(1061,"https://po-ui.io/documentation/po-helper"),og(),qx(1062,"."),og()(),Cl(1063,"blockquote")(1064,"p"),qx(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1066,"code"),qx(1067,"p-additional-help-tooltip"),og(),qx(1068," e "),Cl(1069,"code"),qx(1070,"p-additional-help"),og(),qx(1071,") ser\xE1 ignorado."),og()()()(),Cl(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),qx(1076,"p-readonly"),Hl(1077,"br"),og()()(),Cl(1078,"td",20)(1079,"code",27),qx(1080,"boolean"),og()(),Cl(1081,"td",22),qx(1082,"-"),og(),Cl(1083,"td",23)(1084,"em")(1085,"strong"),qx(1086,"(opcional)"),og()(),Cl(1087,"p"),qx(1088,"Indica que o campo ser\xE1 somente leitura."),og()()(),Cl(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),qx(1093,"p-required"),Hl(1094,"br"),og()()(),Cl(1095,"td",20)(1096,"code",27),qx(1097,"boolean"),og()(),Cl(1098,"td",22)(1099,"p")(1100,"code"),qx(1101,"false"),og()()(),Cl(1102,"td",23)(1103,"em")(1104,"strong"),qx(1105,"(opcional)"),og()(),Cl(1106,"p"),qx(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1108,"blockquote")(1109,"p"),qx(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1111,"code"),qx(1112,"(p-disabled)"),og(),qx(1113,"."),og()()()(),Cl(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),qx(1118," p-required-field-error-message"),Hl(1119,"br"),og()()(),Cl(1120,"td",20)(1121,"code",27),qx(1122,"boolean"),og()(),Cl(1123,"td",22)(1124,"p")(1125,"code"),qx(1126,"false"),og()()(),Cl(1127,"td",23)(1128,"em")(1129,"strong"),qx(1130,"(opcional)"),og()(),Cl(1131,"p"),qx(1132,"Exibe a mensagem setada na propriedade "),Cl(1133,"code"),qx(1134,"p-error-pattern"),og(),qx(1135," se o campo estiver vazio e for requerido."),og(),Cl(1136,"blockquote")(1137,"p"),qx(1138,"Necess\xE1rio que a propriedade "),Cl(1139,"code"),qx(1140,"p-required"),og(),qx(1141," esteja habilitada."),og()()()(),Cl(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),qx(1146," p-show-required"),Hl(1147,"br"),og()()(),Cl(1148,"td",20)(1149,"code",27),qx(1150,"boolean"),og()(),Cl(1151,"td",22),qx(1152,"-"),og(),Cl(1153,"td",23)(1154,"p"),qx(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1156,"blockquote")(1157,"p"),qx(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1159,"ul")(1160,"li"),qx(1161,"N\xE3o possuir "),Cl(1162,"code"),qx(1163,"p-help"),og(),qx(1164," e/ou "),Cl(1165,"code"),qx(1166,"p-label"),og(),qx(1167,"."),og()()()(),Cl(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),qx(1172," p-size"),Hl(1173,"br"),og()()(),Cl(1174,"td",20)(1175,"code",26),qx(1176,"string"),og()(),Cl(1177,"td",22)(1178,"p")(1179,"code"),qx(1180,"medium"),og()()(),Cl(1181,"td",23)(1182,"em")(1183,"strong"),qx(1184,"(opcional)"),og()(),Cl(1185,"p"),qx(1186,"Define o tamanho do componente:"),og(),Cl(1187,"ul")(1188,"li")(1189,"code"),qx(1190,"small"),og(),qx(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1192,"li")(1193,"code"),qx(1194,"medium"),og(),qx(1195,": altura do input como 44px."),og()(),Cl(1196,"blockquote")(1197,"p"),qx(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1199,"code"),qx(1200,"medium"),og(),qx(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1202,"a",34),qx(1203,"po-theme"),og(),qx(1204,"."),og()()()(),Cl(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),qx(1209," p-upper-case"),Hl(1210,"br"),og()()(),Cl(1211,"td",20)(1212,"code",27),qx(1213,"boolean"),og()(),Cl(1214,"td",22),qx(1215,"-"),og(),Cl(1216,"td",23)(1217,"p"),qx(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Cl(1219,"h3",11),qx(1220,"M\xE9todos"),og(),Cl(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),qx(1227," showAdditionalHelp "),og()()()()(),Cl(1228,"tr",23)(1229,"td",23)(1230,"p"),qx(1231,"M\xE9todo que exibe "),Cl(1232,"code"),qx(1233,"p-helper"),og(),qx(1234," ou executa a a\xE7\xE3o definida em "),Cl(1235,"code"),qx(1236,"p-helper{eventOnClick}"),og(),qx(1237," ou em "),Cl(1238,"code"),qx(1239,"p-additionalHelp"),og(),qx(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1241,"code"),qx(1242,"p-keydown"),og(),qx(1243,"."),og(),Cl(1244,"blockquote")(1245,"p"),qx(1246,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1247,"code"),qx(1248,"po-helper"),og(),qx(1249," quando o componente estiver com foco."),og()(),Cl(1250,"pre")(1251,"code"),qx(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Cl(1253,"pre")(1254,"code"),qx(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1256,"br"),Cl(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),qx(1263," focus "),og()()()()(),Cl(1264,"tr",23)(1265,"td",23)(1266,"p"),qx(1267,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1268,"p"),qx(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1270,"pre")(1271,"code"),qx(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Hl(1273,"br"),Cl(1274,"h3"),qx(1275,"Interfaces"),og(),Cl(1276,"h4",37)(1277,"code",5),qx(1278,"ErrorAsyncProperties"),og()(),Cl(1279,"div",2)(1280,"p"),qx(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Cl(1282,"h4",11),qx(1283,"Propriedades"),og(),Cl(1284,"table",12)(1285,"tr",13)(1286,"th",14),qx(1287,"Nome"),og(),Cl(1288,"th",14),qx(1289,"Tipo"),og(),Cl(1290,"th",14),qx(1291,"Descri\xE7\xE3o"),og()(),Cl(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),qx(1296," errorAsync"),Hl(1297,"br"),og()()(),Cl(1298,"td",20)(1299,"code",38),qx(1300,"(value) => Observable<boolean>"),og()(),Cl(1301,"td",23)(1302,"p"),qx(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(1304,"code"),qx(1305,"change"),og(),qx(1306," ou "),Cl(1307,"code"),qx(1308,"change-model"),og(),qx(1309,", dependendo do valor da propriedade "),Cl(1310,"code"),qx(1311,"triggerMode"),og(),qx(1312,"."),og()()(),Cl(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),qx(1317," triggerMode"),Hl(1318,"br"),og()()(),Cl(1319,"td",20)(1320,"code",39),qx(1321,"'change' "),og(),Cl(1322,"code",40),qx(1323," 'changeModel'"),og()(),Cl(1324,"td",23)(1325,"em")(1326,"strong"),qx(1327,"(opcional)"),og()(),Cl(1328,"p"),qx(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Cl(1330,"code"),qx(1331,"change"),og(),qx(1332," ou "),Cl(1333,"code"),qx(1334,"change-model"),og(),qx(1335,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var ve=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-input-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ee,be,xe,he],encapsulation:2})}return a})();var Le=[{path:"",component:ve}],fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Le),bL]})}return a})();var mt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,fe]})}return a})();export{mt as DocPoInputModule};