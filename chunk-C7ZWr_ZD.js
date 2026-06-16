import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,a_ as Ue$1,K as KC,E,ai as ya,N as Ul,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,bd as na,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,bR as Qn,aQ as dt,a2 as GE,X as we$1,a3 as D3,bq as qx,F as uw,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ke=()=>({label:"Option 1",value:"1"}),Ve=()=>({label:"Option 2",value:"2"}),qe=(a,Q)=>[a,Q],fe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic"]],standalone:false,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&Ul(0,"po-select",0),p&2&&YE("p-options",eN(3,qe,Qx(1,ke),Qx(2,Ve)));},dependencies:[ya],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Select Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-select-basic/sample-po-select-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-select-basic"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return a})();var ye=(()=>{class a{cdr=f(Ue$1);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges();}changeEvent(r){this.event=r;}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=false,this.selectedOptionsGroup=void 0,this.size="medium";}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0);}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}];}verifyOptionObject(r,p,i){let{label:d,value:m}=p;if(i){let o=r.findIndex(ie=>ie.label===i&&"options"in ie);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:d,value:m}]}]):(r[o].options.push({label:d,value:m}),r)}return [...r,{label:d,value:m}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs"]],standalone:false,decls:33,vars:37,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let d=lx();wl(0,"po-select",2),pw("ngModelChange",function(o){return Qy(d),$x(i.select,o)||(i.select=o),Jy(o)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",3),Ul(3,"po-info",4)(4,"po-info",5),ng(),Ul(5,"po-divider"),wl(6,"form",null,0),Ul(8,"po-divider",6),wl(9,"div",3)(10,"po-switch",7),ut("p-change",function(o){return i.restoreSwitch(o)}),pw("ngModelChange",function(o){return Qy(d),$x(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),Jy(o)}),ng(),$0(),wl(11,"po-select",8),pw("ngModelChange",function(o){return Qy(d),$x(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),Jy(o)}),ut("p-change",function(){return i.optionsGroupSelection()}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(o){return Qy(d),$x(i.optionsGroup,o)||(i.optionsGroup=o),Jy(o)}),ng(),$0(),ng(),Ul(13,"po-divider",10),wl(14,"div",3)(15,"po-input",11),pw("ngModelChange",function(o){return Qy(d),$x(i.option.label,o)||(i.option.label=o),Jy(o)}),ng(),$0(),wl(16,"po-input",12),pw("ngModelChange",function(o){return Qy(d),$x(i.option.value,o)||(i.option.value=o),Jy(o)}),ng(),$0(),ng(),wl(17,"div",3)(18,"po-button",13),ut("p-click",function(){return i.addOption()}),ng()()(),Ul(19,"po-divider"),wl(20,"form",null,1)(22,"po-input",14),pw("ngModelChange",function(o){return Qy(d),$x(i.label,o)||(i.label=o),Jy(o)}),ng(),$0(),wl(23,"po-input",15),pw("ngModelChange",function(o){return Qy(d),$x(i.help,o)||(i.help=o),Jy(o)}),ng(),$0(),wl(24,"po-input",16),pw("ngModelChange",function(o){return Qy(d),$x(i.helperText,o)||(i.helperText=o),Jy(o)}),ng(),$0(),wl(25,"po-input",17),pw("ngModelChange",function(o){return Qy(d),$x(i.placeholder,o)||(i.placeholder=o),Jy(o)}),ng(),$0(),wl(26,"po-input",18),pw("ngModelChange",function(o){return Qy(d),$x(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),Jy(o)}),ng(),$0(),wl(27,"po-checkbox-group",19),pw("ngModelChange",function(o){return Qy(d),$x(i.properties,o)||(i.properties=o),Jy(o)}),ng(),$0(),wl(28,"po-radio-group",20),pw("ngModelChange",function(o){return Qy(d),$x(i.size,o)||(i.size=o),Jy(o)}),ng(),$0(),wl(29,"div",3)(30,"div",21)(31,"po-button",22),ut("p-click",function(){return i.restore()}),ng()()(),Ul(32,"form"),ng();}if(p&2){let d=_x(7);hw("ngModel",i.select),YE("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",i.select),Pp(),YE("p-value",i.event),Pp(6),hw("ngModel",i.selectOptionGroupSwitch),G0(),Pp(),hw("ngModel",i.selectedOptionsGroup),YE("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),G0(),Pp(),hw("ngModel",i.optionsGroup),YE("p-disabled",!i.selectOptionGroupSwitch),G0(),Pp(3),hw("ngModel",i.option.label),G0(),Pp(),hw("ngModel",i.option.value),G0(),Pp(2),YE("p-disabled",d.invalid),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.fieldErrorMessage),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,ya,na,Vp],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Select Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-select-labs/sample-po-select-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
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
</po-select>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  helperText: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-select-labs"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Re,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return a})();var ne=(()=>{class a{http=f(KC);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function He(a,Q){if(a&1&&(wl(0,"div",17),Ul(1,"po-avatar",18),wl(2,"div",19)(3,"div",20),Ux(4),ng(),wl(5,"div",21),Ux(6),ng()()()),a&2){let r=Q.$implicit;Pp(),YE("p-src",qx("https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png")),Pp(3),uw(r.label),Pp(2),uw(r.value);}}var Pe=(()=>{class a{sampleService=f(ne);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType);}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name="";}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF";}onChangeState(){this.getCitiesByState(this.state);}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state);});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:false,features:[we$1([ne])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let d=lx();wl(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),pw("ngModelChange",function(o){return Qy(d),$x(i.documentType,o)||(i.documentType=o),Jy(o)}),ut("p-change",function(o){return i.changeType(o)}),ng(),$0(),wl(4,"po-input",4),pw("ngModelChange",function(o){return Qy(d),$x(i.document,o)||(i.document=o),Jy(o)}),ng(),$0(),ng(),wl(5,"div",2)(6,"po-input",5),pw("ngModelChange",function(o){return Qy(d),$x(i.name,o)||(i.name=o),Jy(o)}),ng(),$0(),wl(7,"po-input",6),pw("ngModelChange",function(o){return Qy(d),$x(i.address,o)||(i.address=o),Jy(o)}),ng(),$0(),ng(),wl(8,"div",2)(9,"po-select",7),pw("ngModelChange",function(o){return Qy(d),$x(i.state,o)||(i.state=o),Jy(o)}),ut("p-change",function(){return i.onChangeState()}),GE(10,He,7,4,"ng-template",8),ng(),$0(),wl(11,"po-select",9),pw("ngModelChange",function(o){return Qy(d),$x(i.city,o)||(i.city=o),Jy(o)}),ng(),$0(),ng(),wl(12,"div",2)(13,"po-button",10),ut("p-click",function(){Qy(d);let o=_x(15);return Jy(o.open())}),ng()()(),wl(14,"po-modal",11,1)(16,"div",2),Ul(17,"po-info",12)(18,"po-info",13),ng(),Ul(19,"po-divider"),wl(20,"div",2),Ul(21,"po-info",13)(22,"po-info",14),ng(),Ul(23,"po-divider"),wl(24,"div",2),Ul(25,"po-info",15)(26,"po-info",16),ng()();}if(p&2){let d=_x(1);Pp(3),hw("ngModel",i.documentType),YE("p-options",i.options),G0(),Pp(),hw("ngModel",i.document),YE("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),G0(),Pp(2),hw("ngModel",i.name),YE("p-label",i.nameLabel),G0(),Pp(),hw("ngModel",i.address),G0(),Pp(2),hw("ngModel",i.state),YE("p-options",i.stateOptions),G0(),Pp(2),hw("ngModel",i.city),YE("p-options",i.cityOptions),G0(),Pp(2),YE("p-disabled",d.invalid),Pp(4),YE("p-value",i.documentType),Pp(),YE("p-label",i.documentLabel)("p-value",i.document),Pp(3),YE("p-label",i.nameLabel)("p-value",i.name),Pp(),YE("p-value",i.address),Pp(3),YE("p-value",i.getStateByValue(i.state)),Pp(),YE("p-value",i.getCityByValue(i.city));}},dependencies:[aY,iY,oY,ck,ok,Qn,Pe$1,di,Yo,ga,ya,Vp,dt],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"],changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Select - Customer registration"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styleUrls: ['./sample-po-select-customer-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),ng()()(),wl(25,"po-tab",10)(26,"div")(27,"label",6),Ux(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.css"),ng(),wl(29,"pre",11),Ux(30,`.sample-select-option-template-container {
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
}

.sample-select-option-template-margin {
  margin: 5px;
}

.sample-select-option-template-label {
  font-size: 16px;
}

.sample-select-option-template-value {
  font-size: 12px;
  text-transform: uppercase;
}
`),ng()()()()(),wl(31,"div",12),Ul(32,"sample-po-select-customer-registration"),ng(),Ul(33,"hr")),p&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ue,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Pe],encapsulation:2})}return a})();var Te=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0;}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies"]],standalone:false,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(wl(0,"po-select",0),pw("ngModelChange",function(m){return $x(i.select,m)||(i.select=m),m}),ng(),$0(),wl(1,"po-info",1),pw("p-valueChange",function(m){return $x(i.select,m)||(i.select=m),m}),ng(),wl(2,"div",2)(3,"po-select",3),ut("p-change",function(m){return i.onChange(m)}),pw("ngModelChange",function(m){return $x(i.fieldLabel,m)||(i.fieldLabel=m),m}),ng(),$0(),wl(4,"po-select",4),ut("p-change",function(m){return i.onChange(m)}),pw("ngModelChange",function(m){return $x(i.fieldValue,m)||(i.fieldValue=m),m}),ng(),$0(),ng()),p&2&&(hw("ngModel",i.select),YE("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),G0(),Pp(),hw("p-value",i.select),Pp(2),YE("p-options",i.labels),hw("ngModel",i.fieldLabel),G0(),Pp(),YE("p-options",i.values),hw("ngModel",i.fieldValue),G0());},dependencies:[iY,ck,ya,Vp],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Select Companies"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-select-companies/sample-po-select-companies.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-select-companies"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ye,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Te],encapsulation:2})}return a})();var Oe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-doc"]],standalone:false,decls:1068,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoSelectComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),ng(),wl(24,"blockquote")(25,"p"),Ux(26,"Ao passar um valor para o "),wl(27,"em"),Ux(28,"model"),ng(),Ux(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),wl(30,"code"),Ux(31,"undefined"),ng(),Ux(32,"."),ng()(),wl(33,"p"),Ux(34,"Tamb\xE9m existe a possibilidade de utilizar um "),wl(35,"em"),Ux(36,"template"),ng(),Ux(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),wl(38,"strong")(39,"a",6),Ux(40,"p-combo-option-template"),ng()(),Ux(41,"."),ng(),wl(42,"blockquote")(43,"p"),Ux(44,"Obs: o template "),wl(45,"strong")(46,"a",7),Ux(47,"p-select-option-template"),ng()(),Ux(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),ng()(),wl(49,"h4"),Ux(50,"Tokens customiz\xE1veis"),ng(),wl(51,"p"),Ux(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(53,"blockquote")(54,"p"),Ux(55,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(56,"a",8),Ux(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(58,"."),ng()(),wl(59,"table")(60,"thead")(61,"tr")(62,"th"),Ux(63,"Propriedade"),ng(),wl(64,"th"),Ux(65,"Descri\xE7\xE3o"),ng(),wl(66,"th"),Ux(67,"Valor Padr\xE3o"),ng()()(),wl(68,"tbody")(69,"tr")(70,"td")(71,"strong"),Ux(72,"Default Values"),ng()(),Ul(73,"td")(74,"td"),ng(),wl(75,"tr")(76,"td")(77,"code"),Ux(78,"--font-family"),ng()(),wl(79,"td"),Ux(80,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(81,"td")(82,"code"),Ux(83,"var(--font-family-theme)"),ng()()(),wl(84,"tr")(85,"td")(86,"code"),Ux(87,"--font-size"),ng()(),wl(88,"td"),Ux(89,"Tamanho da fonte"),ng(),wl(90,"td")(91,"code"),Ux(92,"var(--font-size-default)"),ng()()(),wl(93,"tr")(94,"td")(95,"code"),Ux(96,"--text-color-empty"),ng()(),wl(97,"td"),Ux(98,"Cor do placeholder"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--color-neutral-light-30)"),ng()()(),wl(102,"tr")(103,"td")(104,"code"),Ux(105,"--color"),ng()(),wl(106,"td"),Ux(107,"Cor da borda"),ng(),wl(108,"td")(109,"code"),Ux(110,"var(--color-neutral-dark-70)"),ng()()(),wl(111,"tr")(112,"td")(113,"code"),Ux(114,"--background"),ng()(),wl(115,"td"),Ux(116,"Cor de background"),ng(),wl(117,"td")(118,"code"),Ux(119,"var(--color-neutral-light-05)"),ng()()(),wl(120,"tr")(121,"td")(122,"code"),Ux(123,"--text-color"),ng()(),wl(124,"td"),Ux(125,"Cor do texto"),ng(),wl(126,"td")(127,"code"),Ux(128,"var(--color-neutral-dark-90)"),ng()()(),wl(129,"tr")(130,"td")(131,"code"),Ux(132,"--padding-horizontal"),ng()(),wl(133,"td"),Ux(134,"Preenchimento horizontal"),ng(),wl(135,"td")(136,"code"),Ux(137,"0.5em"),ng()()(),wl(138,"tr")(139,"td")(140,"code"),Ux(141,"--padding-vertical"),ng()(),wl(142,"td"),Ux(143,"Preenchimento vertical"),ng(),wl(144,"td")(145,"code"),Ux(146,"0.7em"),ng()()(),wl(147,"tr")(148,"td")(149,"code"),Ux(150,"--field-container-title-justify"),ng()(),wl(151,"td"),Ux(152,"Alinhamento horizontal do t\xEDtulo ("),wl(153,"code"),Ux(154,"justify-content"),ng(),Ux(155,")"),ng(),wl(156,"td")(157,"code"),Ux(158,"space-between"),ng()()(),wl(159,"tr")(160,"td")(161,"code"),Ux(162,"--field-container-title-flex"),ng()(),wl(163,"td"),Ux(164,"Flex do t\xEDtulo ("),wl(165,"code"),Ux(166,"flex"),ng(),Ux(167,")"),ng(),wl(168,"td")(169,"code"),Ux(170,"1 auto"),ng()()(),wl(171,"tr")(172,"td")(173,"strong"),Ux(174,"Hover"),ng()(),Ul(175,"td")(176,"td"),ng(),wl(177,"tr")(178,"td")(179,"code"),Ux(180,"--color-hover"),ng()(),wl(181,"td"),Ux(182,"Cor principal no estado hover"),ng(),wl(183,"td")(184,"code"),Ux(185,"var(--color-brand-01-dark)"),ng()()(),wl(186,"tr")(187,"td")(188,"code"),Ux(189,"--background-hover"),ng()(),wl(190,"td"),Ux(191,"Cor de background no estado hover"),ng(),wl(192,"td")(193,"code"),Ux(194,"var(--color-brand-01-lighter)"),ng()()(),wl(195,"tr")(196,"td")(197,"strong"),Ux(198,"Focused"),ng()(),Ul(199,"td")(200,"td"),ng(),wl(201,"tr")(202,"td")(203,"code"),Ux(204,"--outline-color-focused"),ng()(),wl(205,"td"),Ux(206,"Cor do outline do estado de focus"),ng(),wl(207,"td")(208,"code"),Ux(209,"var(--color-action-focus)"),ng()()(),wl(210,"tr")(211,"td")(212,"code"),Ux(213,"--color-focused"),ng()(),wl(214,"td"),Ux(215,"Cor da borda no estado de focus"),ng(),wl(216,"td")(217,"code"),Ux(218,"var(--color-action-default)"),ng()()(),wl(219,"tr")(220,"td")(221,"strong"),Ux(222,"Disabled"),ng()(),Ul(223,"td")(224,"td"),ng(),wl(225,"tr")(226,"td")(227,"code"),Ux(228,"--color-disabled"),ng()(),wl(229,"td"),Ux(230,"Cor principal no estado disabled"),ng(),wl(231,"td")(232,"code"),Ux(233,"var(--color-neutral-light-30)"),ng()()(),wl(234,"tr")(235,"td")(236,"code"),Ux(237,"--background-color-disabled"),ng(),Ux(238,"\xA0"),ng(),wl(239,"td"),Ux(240,"Cor de background no estado disabled"),ng(),wl(241,"td")(242,"code"),Ux(243,"var(--color-neutral-light-20)"),ng()()()()()(),wl(244,"div",9)(245,"h4",10),Ux(246,"Seletor"),ng(),wl(247,"pre",11),Ux(248,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),ng()(),wl(249,"h4",12),Ux(250,"Propriedades"),ng(),wl(251,"table",13)(252,"tr",14)(253,"th",15),Ux(254,"Nome"),ng(),wl(255,"th",15),Ux(256,"Tipo"),ng(),wl(257,"th",15),Ux(258,"Padr\xE3o"),ng(),wl(259,"th",15),Ux(260,"Descri\xE7\xE3o"),ng()(),wl(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),Ux(265," (p-additional-help)"),Ul(266,"br"),ng()(),wl(267,"div",20),Ux(268,"Deprecated"),ng()(),wl(269,"td",21)(270,"code",22),Ux(271,"EventEmitter"),ng()(),wl(272,"td",23),Ux(273,"-"),ng(),wl(274,"td",24)(275,"em")(276,"strong"),Ux(277,"(opcional)"),ng()(),wl(278,"p"),Ux(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(280,"blockquote")(281,"p"),Ux(282,"Essa propriedade est\xE1 "),wl(283,"strong"),Ux(284,"depreciada"),ng(),Ux(285," e ser\xE1 removida na vers\xE3o "),wl(286,"code"),Ux(287,"23.x.x"),ng(),Ux(288,". Recomendamos utilizar a propriedade "),wl(289,"code"),Ux(290,"p-helper"),ng(),Ux(291," que oferece mais recursos e flexibilidade."),ng()()()(),wl(292,"tr",16)(293,"td",17)(294,"div",25)(295,"span",26),Ux(296," p-additional-help-tooltip"),Ul(297,"br"),ng()(),wl(298,"div",20),Ux(299,"Deprecated"),ng()(),wl(300,"td",21)(301,"code",27),Ux(302,"string"),ng()(),wl(303,"td",23),Ux(304,"-"),ng(),wl(305,"td",24)(306,"em")(307,"strong"),Ux(308,"(opcional)"),ng()(),wl(309,"p"),Ux(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(311,"code"),Ux(312,"po-helper"),ng(),Ux(313,`.
`),wl(314,"strong"),Ux(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(316,"blockquote")(317,"p"),Ux(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(319,"blockquote")(320,"p"),Ux(321,"Essa propriedade est\xE1 "),wl(322,"strong"),Ux(323,"depreciada"),ng(),Ux(324," e ser\xE1 removida na vers\xE3o "),wl(325,"code"),Ux(326,"23.x.x"),ng(),Ux(327,". Recomendamos utilizar a propriedade "),wl(328,"code"),Ux(329,"p-helper"),ng(),Ux(330," que oferece mais recursos e flexibilidade."),ng()()()(),wl(331,"tr",16)(332,"td",17)(333,"div",25)(334,"span",26),Ux(335," p-append-in-body"),Ul(336,"br"),ng()()(),wl(337,"td",21)(338,"code",28),Ux(339,"boolean"),ng()(),wl(340,"td",23)(341,"p")(342,"code"),Ux(343,"false"),ng()()(),wl(344,"td",24)(345,"em")(346,"strong"),Ux(347,"(opcional)"),ng()(),wl(348,"p"),Ux(349,"Define que o popover ("),wl(350,"code"),Ux(351,"p-helper"),ng(),Ux(352," e/ou "),wl(353,"code"),Ux(354,"p-error-limit"),ng(),Ux(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(356,"blockquote")(357,"p"),Ux(358,"Quando utilizado com "),wl(359,"code"),Ux(360,"p-helper"),ng(),Ux(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),Ux(366," (p-blur)"),Ul(367,"br"),ng()()(),wl(368,"td",21)(369,"code",22),Ux(370,"EventEmitter"),ng()(),wl(371,"td",23),Ux(372,"-"),ng(),wl(373,"td",24)(374,"em")(375,"strong"),Ux(376,"(opcional)"),ng()(),wl(377,"p"),Ux(378,"Evento disparado ao sair do campo."),ng()()(),wl(379,"tr",16)(380,"td",17)(381,"div",18)(382,"span",19),Ux(383," (p-change)"),Ul(384,"br"),ng()()(),wl(385,"td",21)(386,"code",22),Ux(387,"EventEmitter"),ng()(),wl(388,"td",23),Ux(389,"-"),ng(),wl(390,"td",24)(391,"em")(392,"strong"),Ux(393,"(opcional)"),ng()(),wl(394,"p"),Ux(395,"Evento disparado ao alterar valor do campo."),ng()()(),wl(396,"tr",16)(397,"td",17)(398,"div",25)(399,"span",26),Ux(400," p-compact-label"),Ul(401,"br"),ng()()(),wl(402,"td",21)(403,"code",28),Ux(404,"boolean"),ng()(),wl(405,"td",23)(406,"p")(407,"code"),Ux(408,"false"),ng()()(),wl(409,"td",24)(410,"em")(411,"strong"),Ux(412,"(opcional)"),ng()(),wl(413,"p"),Ux(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(415,"p"),Ux(416,"Quando habilitado ("),wl(417,"code"),Ux(418,"true"),ng(),Ux(419,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(420,"ul")(421,"li")(422,"code"),Ux(423,"po-label"),ng()(),wl(424,"li")(425,"code"),Ux(426,"p-requirement (showRequired)"),ng()(),wl(427,"li")(428,"code"),Ux(429,"po-helper"),ng()()(),wl(430,"p"),Ux(431,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(432,"p"),Ux(433,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(434,"ul")(435,"li")(436,"code"),Ux(437,"--field-container-title-justify"),ng()(),wl(438,"li")(439,"code"),Ux(440,"--field-container-title-flex"),ng()()(),wl(441,"p"),Ux(442,"Exemplo:"),ng(),wl(443,"pre")(444,"code"),Ux(445,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(446,"p"),Ux(447,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(448,"tr",16)(449,"td",17)(450,"div",25)(451,"span",26),Ux(452," p-disabled"),Ul(453,"br"),ng()()(),wl(454,"td",21)(455,"code",28),Ux(456,"boolean"),ng()(),wl(457,"td",23)(458,"p")(459,"code"),Ux(460,"false"),ng()()(),wl(461,"td",24)(462,"em")(463,"strong"),Ux(464,"(opcional)"),ng()(),wl(465,"p"),Ux(466,"Indica se o campo ser\xE1 desabilitado."),ng()()(),wl(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),Ux(471," p-error-limit"),Ul(472,"br"),ng()()(),wl(473,"td",21)(474,"code",28),Ux(475,"boolean"),ng()(),wl(476,"td",23)(477,"p")(478,"code"),Ux(479,"false"),ng()()(),wl(480,"td",24)(481,"em")(482,"strong"),Ux(483,"(opcional)"),ng()(),wl(484,"p"),Ux(485,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(486,"blockquote")(487,"p"),Ux(488,"Caso essa propriedade seja definida como "),wl(489,"code"),Ux(490,"true"),ng(),Ux(491,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(492,"tr",16)(493,"td",17)(494,"div",25)(495,"span",26),Ux(496," p-field-error-message"),Ul(497,"br"),ng()()(),wl(498,"td",21)(499,"code",27),Ux(500,"string"),ng()(),wl(501,"td",23),Ux(502,"-"),ng(),wl(503,"td",24)(504,"em")(505,"strong"),Ux(506,"(opcional)"),ng()(),wl(507,"p"),Ux(508,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(509,"blockquote")(510,"p"),Ux(511,"Necess\xE1rio que a propriedade "),wl(512,"code"),Ux(513,"p-required"),ng(),Ux(514," esteja habilitada."),ng()()()(),wl(515,"tr",16)(516,"td",17)(517,"div",25)(518,"span",26),Ux(519," p-field-label"),Ul(520,"br"),ng()()(),wl(521,"td",21)(522,"code",27),Ux(523,"string"),ng()(),wl(524,"td",23)(525,"p")(526,"code"),Ux(527,"label"),ng()()(),wl(528,"td",24)(529,"em")(530,"strong"),Ux(531,"(opcional)"),ng()(),wl(532,"p"),Ux(533,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),wl(534,"code"),Ux(535,"p-options"),ng(),Ux(536,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),ng()()(),wl(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),Ux(541," p-field-value"),Ul(542,"br"),ng()()(),wl(543,"td",21)(544,"code",27),Ux(545,"string"),ng()(),wl(546,"td",23)(547,"p")(548,"code"),Ux(549,"value"),ng()()(),wl(550,"td",24)(551,"em")(552,"strong"),Ux(553,"(opcional)"),ng()(),wl(554,"p"),Ux(555,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),wl(556,"code"),Ux(557,"p-options"),ng(),Ux(558,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),ng()()(),wl(559,"tr",16)(560,"td",17)(561,"div",25)(562,"span",26),Ux(563," p-help"),Ul(564,"br"),ng()()(),wl(565,"td",21)(566,"code",27),Ux(567,"string"),ng()(),wl(568,"td",23),Ux(569,"-"),ng(),wl(570,"td",24)(571,"p"),Ux(572,"Texto de apoio para o campo."),ng()()(),wl(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),Ux(577," (p-keydown)"),Ul(578,"br"),ng()()(),wl(579,"td",21)(580,"code",22),Ux(581,"EventEmitter"),ng()(),wl(582,"td",23),Ux(583,"-"),ng(),wl(584,"td",24)(585,"em")(586,"strong"),Ux(587,"(opcional)"),ng()(),wl(588,"p"),Ux(589,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(590,"code"),Ux(591,"KeyboardEvent"),ng(),Ux(592," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),Ux(597," p-label"),Ul(598,"br"),ng()()(),wl(599,"td",21)(600,"code",27),Ux(601,"string"),ng()(),wl(602,"td",23),Ux(603,"-"),ng(),wl(604,"td",24)(605,"p"),Ux(606,"R\xF3tulo exibido pelo componente."),ng()()(),wl(607,"tr",16)(608,"td",17)(609,"div",25)(610,"span",26),Ux(611," p-label-text-wrap"),Ul(612,"br"),ng()()(),wl(613,"td",21)(614,"code",28),Ux(615,"boolean"),ng()(),wl(616,"td",23)(617,"p")(618,"code"),Ux(619,"false"),ng()()(),wl(620,"td",24)(621,"em")(622,"strong"),Ux(623,"(opcional)"),ng()(),wl(624,"p"),Ux(625,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(626,"code"),Ux(627,"p-label"),ng(),Ux(628,". Quando "),wl(629,"code"),Ux(630,"p-label-text-wrap"),ng(),Ux(631,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(632,"tr",16)(633,"td",17)(634,"div",25)(635,"span",26),Ux(636," p-loading"),Ul(637,"br"),ng()()(),wl(638,"td",21)(639,"code",28),Ux(640,"boolean"),ng()(),wl(641,"td",23)(642,"p")(643,"code"),Ux(644,"false"),ng()()(),wl(645,"td",24)(646,"em")(647,"strong"),Ux(648,"(opcional)"),ng()(),wl(649,"p"),Ux(650,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),Ux(655," name"),Ul(656,"br"),ng()()(),wl(657,"td",21)(658,"code",27),Ux(659,"string"),ng()(),wl(660,"td",23),Ux(661,"-"),ng(),wl(662,"td",24)(663,"p"),Ux(664,"Nome do componente."),ng()()(),wl(665,"tr",16)(666,"td",17)(667,"div",18)(668,"span",19),Ux(669," (ngModelChange)"),Ul(670,"br"),ng()()(),wl(671,"td",21)(672,"code",22),Ux(673,"EventEmitter"),ng()(),wl(674,"td",23),Ux(675,"-"),ng(),wl(676,"td",24)(677,"em")(678,"strong"),Ux(679,"(opcional)"),ng()(),wl(680,"p"),Ux(681,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),ng(),wl(682,"p"),Ux(683,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),wl(684,"code"),Ux(685,"strictTemplates"),ng(),Ux(686,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ng(),wl(687,"pre")(688,"code"),Ux(689,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),ng()()()(),wl(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),Ux(694," p-optional"),Ul(695,"br"),ng()()(),wl(696,"td",21)(697,"code",28),Ux(698,"boolean"),ng()(),wl(699,"td",23)(700,"p")(701,"code"),Ux(702,"false"),ng()()(),wl(703,"td",24)(704,"em")(705,"strong"),Ux(706,"(opcional)"),ng()(),wl(707,"p"),Ux(708,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(709,"blockquote")(710,"p"),Ux(711,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(712,"ul")(713,"li"),Ux(714,"O campo conter "),wl(715,"code"),Ux(716,"p-required"),ng(),Ux(717,";"),ng(),wl(718,"li"),Ux(719,"N\xE3o possuir "),wl(720,"code"),Ux(721,"p-help"),ng(),Ux(722," e/ou "),wl(723,"code"),Ux(724,"p-label"),ng(),Ux(725,"."),ng()()()(),wl(726,"tr",16)(727,"td",17)(728,"div",25)(729,"span",26),Ux(730," p-options"),Ul(731,"br"),ng()()(),wl(732,"td",21)(733,"code",29),Ux(734,"any[]"),ng()(),wl(735,"td",23),Ux(736,"-"),ng(),wl(737,"td",24)(738,"p"),Ux(739,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),wl(740,"code"),Ux(741,"PoSelectOption"),ng(),Ux(742,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),wl(743,"code"),Ux(744,"PoSelectOptionGroup"),ng(),Ux(745,"."),ng(),wl(746,"p"),Ux(747,"Caso esta lista estiver vazia, o model ser\xE1 "),wl(748,"code"),Ux(749,"undefined"),ng(),Ux(750,"."),ng(),wl(751,"blockquote")(752,"p"),Ux(753,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),ng()(),wl(754,"pre")(755,"code"),Ux(756,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),ng()(),wl(757,"blockquote")(758,"p"),Ux(759,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),wl(760,"code"),Ux(761,"options"),ng(),Ux(762," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),ng()(),wl(763,"pre")(764,"code"),Ux(765,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),ng()(),wl(766,"p"),Ux(767,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),ng()()(),wl(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),Ux(772," p-placeholder"),Ul(773,"br"),ng()()(),wl(774,"td",21)(775,"code",27),Ux(776,"string"),ng()(),wl(777,"td",23),Ux(778,"-"),ng(),wl(779,"td",24)(780,"em")(781,"strong"),Ux(782,"(opcional)"),ng()(),wl(783,"p"),Ux(784,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),ng()()(),wl(785,"tr",16)(786,"td",17)(787,"div",25)(788,"span",26),Ux(789," p-helper"),Ul(790,"br"),ng()()(),wl(791,"td",21)(792,"code",30),Ux(793,"PoHelperOptions "),ng(),wl(794,"code",27),Ux(795," string"),ng()(),wl(796,"td",23),Ux(797,"-"),ng(),wl(798,"td",24)(799,"em")(800,"strong"),Ux(801,"(opcional)"),ng()(),wl(802,"p"),Ux(803,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(804,"code"),Ux(805,"p-label"),ng(),Ux(806," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(807,"code"),Ux(808,"p-label"),ng(),Ux(809,"."),ng(),wl(810,"blockquote")(811,"p"),Ux(812,"Para mais informa\xE7\xF5es acesse: "),wl(813,"a",31),Ux(814,"https://po-ui.io/documentation/po-helper"),ng(),Ux(815,"."),ng()(),wl(816,"blockquote")(817,"p"),Ux(818,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(819,"code"),Ux(820,"p-additional-help-tooltip"),ng(),Ux(821," e "),wl(822,"code"),Ux(823,"p-additional-help"),ng(),Ux(824,") ser\xE1 ignorado."),ng()()()(),wl(825,"tr",16)(826,"td",17)(827,"div",25)(828,"span",26),Ux(829," p-readonly"),Ul(830,"br"),ng()()(),wl(831,"td",21)(832,"code",28),Ux(833,"boolean"),ng()(),wl(834,"td",23)(835,"p")(836,"code"),Ux(837,"false"),ng()()(),wl(838,"td",24)(839,"em")(840,"strong"),Ux(841,"(opcional)"),ng()(),wl(842,"p"),Ux(843,"Indica que o campo ser\xE1 somente para leitura."),ng()()(),wl(844,"tr",16)(845,"td",17)(846,"div",25)(847,"span",26),Ux(848," p-required"),Ul(849,"br"),ng()()(),wl(850,"td",21)(851,"code",28),Ux(852,"boolean"),ng()(),wl(853,"td",23)(854,"p")(855,"code"),Ux(856,"false"),ng()()(),wl(857,"td",24)(858,"em")(859,"strong"),Ux(860,"(opcional)"),ng()(),wl(861,"p"),Ux(862,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(863,"tr",16)(864,"td",17)(865,"div",25)(866,"span",26),Ux(867," p-show-required"),Ul(868,"br"),ng()()(),wl(869,"td",21)(870,"code",28),Ux(871,"boolean"),ng()(),wl(872,"td",23),Ux(873,"-"),ng(),wl(874,"td",24)(875,"p"),Ux(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(877,"blockquote")(878,"p"),Ux(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(880,"ul")(881,"li"),Ux(882,"N\xE3o possuir "),wl(883,"code"),Ux(884,"p-help"),ng(),Ux(885," e/ou "),wl(886,"code"),Ux(887,"p-label"),ng(),Ux(888,"."),ng()()()(),wl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),Ux(893," p-size"),Ul(894,"br"),ng()()(),wl(895,"td",21)(896,"code",27),Ux(897,"string"),ng()(),wl(898,"td",23)(899,"p")(900,"code"),Ux(901,"medium"),ng()()(),wl(902,"td",24)(903,"em")(904,"strong"),Ux(905,"(opcional)"),ng()(),wl(906,"p"),Ux(907,"Define o tamanho do componente:"),ng(),wl(908,"ul")(909,"li")(910,"code"),Ux(911,"small"),ng(),Ux(912,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(913,"li")(914,"code"),Ux(915,"medium"),ng(),Ux(916,": altura do input como 44px."),ng()(),wl(917,"blockquote")(918,"p"),Ux(919,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(920,"code"),Ux(921,"medium"),ng(),Ux(922,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(923,"a",32),Ux(924,"po-theme"),ng(),Ux(925,"."),ng()()()()(),wl(926,"h3",12),Ux(927,"M\xE9todos"),ng(),wl(928,"table",33)(929,"tr",16)(930,"th",34)(931,"div",25)(932,"h4")(933,"span",26),Ux(934," focus "),ng()()()()(),wl(935,"tr",24)(936,"td",24)(937,"p"),Ux(938,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(939,"p"),Ux(940,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(941,"pre")(942,"code"),Ux(943,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),ng()()()()(),Ul(944,"br"),wl(945,"table",33)(946,"tr",16)(947,"th",34)(948,"div",25)(949,"h4")(950,"span",26),Ux(951," showAdditionalHelp "),ng()()()()(),wl(952,"tr",24)(953,"td",24)(954,"p"),Ux(955,"M\xE9todo que exibe "),wl(956,"code"),Ux(957,"p-helper"),ng(),Ux(958," ou executa a a\xE7\xE3o definida em "),wl(959,"code"),Ux(960,"p-helper{eventOnClick}"),ng(),Ux(961," ou em "),wl(962,"code"),Ux(963,"p-additionalHelp"),ng(),Ux(964,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(965,"code"),Ux(966,"p-keydown"),ng(),Ux(967,"."),ng(),wl(968,"blockquote")(969,"p"),Ux(970,"Exibe ou oculta o conte\xFAdo do componente "),wl(971,"code"),Ux(972,"po-helper"),ng(),Ux(973," quando o componente estiver com foco."),ng()(),wl(974,"pre")(975,"code"),Ux(976,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),ng()(),wl(977,"pre")(978,"code",35),Ux(979,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(980,"br"),wl(981,"h3"),Ux(982,"Interfaces"),ng(),wl(983,"h4",36)(984,"code",5),Ux(985,"PoSelectOptionGroup"),ng()(),wl(986,"div",2)(987,"p"),Ux(988,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),wl(989,"code"),Ux(990,"PoSelectOption"),ng(),Ux(991,"."),ng()(),wl(992,"h4",12),Ux(993,"Propriedades"),ng(),wl(994,"table",13)(995,"tr",14)(996,"th",15),Ux(997,"Nome"),ng(),wl(998,"th",15),Ux(999,"Tipo"),ng(),wl(1e3,"th",15),Ux(1001,"Descri\xE7\xE3o"),ng()(),wl(1002,"tr",16)(1003,"td",17)(1004,"div",25)(1005,"span",26),Ux(1006," label"),Ul(1007,"br"),ng()()(),wl(1008,"td",21)(1009,"code",27),Ux(1010,"string"),ng()(),wl(1011,"td",24)(1012,"p"),Ux(1013,"Label para denominar o nome do grupo."),ng()()(),wl(1014,"tr",16)(1015,"td",17)(1016,"div",25)(1017,"span",26),Ux(1018," options"),Ul(1019,"br"),ng()()(),wl(1020,"td",21)(1021,"code",37),Ux(1022,"Array<PoSelectOption>"),ng()(),wl(1023,"td",24)(1024,"p"),Ux(1025,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),ng()()()(),wl(1026,"h4",36)(1027,"code",5),Ux(1028,"PoSelectOption"),ng()(),wl(1029,"div",2)(1030,"p"),Ux(1031,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),ng()(),wl(1032,"h4",12),Ux(1033,"Propriedades"),ng(),wl(1034,"table",13)(1035,"tr",14)(1036,"th",15),Ux(1037,"Nome"),ng(),wl(1038,"th",15),Ux(1039,"Tipo"),ng(),wl(1040,"th",15),Ux(1041,"Descri\xE7\xE3o"),ng()(),wl(1042,"tr",16)(1043,"td",17)(1044,"div",25)(1045,"span",26),Ux(1046," label"),Ul(1047,"br"),ng()()(),wl(1048,"td",21)(1049,"code",27),Ux(1050,"string"),ng()(),wl(1051,"td",24)(1052,"p"),Ux(1053,"Label a ser utilizada nos itens da lista."),ng()()(),wl(1054,"tr",16)(1055,"td",17)(1056,"div",25)(1057,"span",26),Ux(1058," value"),Ul(1059,"br"),ng()()(),wl(1060,"td",21)(1061,"code",27),Ux(1062,"string "),ng(),wl(1063,"code",38),Ux(1064," number"),ng()(),wl(1065,"td",24)(1066,"p"),Ux(1067,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Le=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-select-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),ng()()()),p&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ve,_e,we,Me,Oe],encapsulation:2})}return a})();var $e=[{path:"",component:Le}],De=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild($e),vL]})}return a})();var Rt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,De]})}return a})();export{Rt as DocPoSelectModule};