import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,ae as He,t as tb,S,aJ as nme,R as Hl,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,cr as _3,b5 as Ko,a2 as WE,W as we$1,a3 as SNe,bv as Jx,I as dw,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Oe=()=>({label:"Option 1",value:"1"}),Le=()=>({label:"Option 2",value:"2"}),De=(a,K)=>[a,K],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic"]],standalone:false,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&Hl(0,"po-select",0),p&2&&ZE("p-options",sN(3,De,iN(1,Oe),iN(2,Le)));},dependencies:[nme],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Select Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-select-basic/sample-po-select-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-select-basic"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return a})();var fe=(()=>{class a{cdr=f(He);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges();}changeEvent(r){this.event=r;}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=false,this.selectedOptionsGroup=void 0,this.size="medium";}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0);}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}];}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&"options"in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return [...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs"]],standalone:false,decls:33,vars:37,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=gx();Cl(0,"po-select",2),gw("ngModelChange",function(o){return Jy(m),Zx(i.select,o)||(i.select=o),e_(o)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",3),Hl(3,"po-info",4)(4,"po-info",5),og(),Hl(5,"po-divider"),Cl(6,"form",null,0),Hl(8,"po-divider",6),Cl(9,"div",3)(10,"po-switch",7),dt("p-change",function(o){return i.restoreSwitch(o)}),gw("ngModelChange",function(o){return Jy(m),Zx(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),e_(o)}),og(),Z0(),Cl(11,"po-select",8),gw("ngModelChange",function(o){return Jy(m),Zx(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),e_(o)}),dt("p-change",function(){return i.optionsGroupSelection()}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(o){return Jy(m),Zx(i.optionsGroup,o)||(i.optionsGroup=o),e_(o)}),og(),Z0(),og(),Hl(13,"po-divider",10),Cl(14,"div",3)(15,"po-input",11),gw("ngModelChange",function(o){return Jy(m),Zx(i.option.label,o)||(i.option.label=o),e_(o)}),og(),Z0(),Cl(16,"po-input",12),gw("ngModelChange",function(o){return Jy(m),Zx(i.option.value,o)||(i.option.value=o),e_(o)}),og(),Z0(),og(),Cl(17,"div",3)(18,"po-button",13),dt("p-click",function(){return i.addOption()}),og()()(),Hl(19,"po-divider"),Cl(20,"form",null,1)(22,"po-input",14),gw("ngModelChange",function(o){return Jy(m),Zx(i.label,o)||(i.label=o),e_(o)}),og(),Z0(),Cl(23,"po-input",15),gw("ngModelChange",function(o){return Jy(m),Zx(i.help,o)||(i.help=o),e_(o)}),og(),Z0(),Cl(24,"po-input",16),gw("ngModelChange",function(o){return Jy(m),Zx(i.helperText,o)||(i.helperText=o),e_(o)}),og(),Z0(),Cl(25,"po-input",17),gw("ngModelChange",function(o){return Jy(m),Zx(i.placeholder,o)||(i.placeholder=o),e_(o)}),og(),Z0(),Cl(26,"po-input",18),gw("ngModelChange",function(o){return Jy(m),Zx(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),e_(o)}),og(),Z0(),Cl(27,"po-checkbox-group",19),gw("ngModelChange",function(o){return Jy(m),Zx(i.properties,o)||(i.properties=o),e_(o)}),og(),Z0(),Cl(28,"po-radio-group",20),gw("ngModelChange",function(o){return Jy(m),Zx(i.size,o)||(i.size=o),e_(o)}),og(),Z0(),Cl(29,"div",3)(30,"div",21)(31,"po-button",22),dt("p-click",function(){return i.restore()}),og()()(),Hl(32,"form"),og();}if(p&2){let m=Sx(7);pw("ngModel",i.select),ZE("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.select),Lp(),ZE("p-value",i.event),Lp(6),pw("ngModel",i.selectOptionGroupSwitch),X0(),Lp(),pw("ngModel",i.selectedOptionsGroup),ZE("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),X0(),Lp(),pw("ngModel",i.optionsGroup),ZE("p-disabled",!i.selectOptionGroupSwitch),X0(),Lp(3),pw("ngModel",i.option.label),X0(),Lp(),pw("ngModel",i.option.value),X0(),Lp(2),ZE("p-disabled",m.invalid),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.fieldErrorMessage),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,nme,H3,sme],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Select Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-select-labs/sample-po-select-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-select
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-select-labs"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,fe],encapsulation:2})}return a})();var ee=(()=>{class a{http=f(tb);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ze(a,K){if(a&1&&(Cl(0,"div",17),Hl(1,"po-avatar",18),Cl(2,"div",19)(3,"div",20),qx(4),og(),Cl(5,"div",21),qx(6),og()()()),a&2){let r=K.$implicit;Lp(),ZE("p-src",Jx("https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png")),Lp(3),dw(r.label),Lp(2),dw(r.value);}}var xe=(()=>{class a{sampleService=f(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType);}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name="";}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF";}onChangeState(){this.getCitiesByState(this.state);}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state);});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:false,features:[we$1([ee])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=gx();Cl(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),gw("ngModelChange",function(o){return Jy(m),Zx(i.documentType,o)||(i.documentType=o),e_(o)}),dt("p-change",function(o){return i.changeType(o)}),og(),Z0(),Cl(4,"po-input",4),gw("ngModelChange",function(o){return Jy(m),Zx(i.document,o)||(i.document=o),e_(o)}),og(),Z0(),og(),Cl(5,"div",2)(6,"po-input",5),gw("ngModelChange",function(o){return Jy(m),Zx(i.name,o)||(i.name=o),e_(o)}),og(),Z0(),Cl(7,"po-input",6),gw("ngModelChange",function(o){return Jy(m),Zx(i.address,o)||(i.address=o),e_(o)}),og(),Z0(),og(),Cl(8,"div",2)(9,"po-select",7),gw("ngModelChange",function(o){return Jy(m),Zx(i.state,o)||(i.state=o),e_(o)}),dt("p-change",function(){return i.onChangeState()}),WE(10,ze,7,4,"ng-template",8),og(),Z0(),Cl(11,"po-select",9),gw("ngModelChange",function(o){return Jy(m),Zx(i.city,o)||(i.city=o),e_(o)}),og(),Z0(),og(),Cl(12,"div",2)(13,"po-button",10),dt("p-click",function(){Jy(m);let o=Sx(15);return e_(o.open())}),og()()(),Cl(14,"po-modal",11,1)(16,"div",2),Hl(17,"po-info",12)(18,"po-info",13),og(),Hl(19,"po-divider"),Cl(20,"div",2),Hl(21,"po-info",13)(22,"po-info",14),og(),Hl(23,"po-divider"),Cl(24,"div",2),Hl(25,"po-info",15)(26,"po-info",16),og()();}if(p&2){let m=Sx(1);Lp(3),pw("ngModel",i.documentType),ZE("p-options",i.options),X0(),Lp(),pw("ngModel",i.document),ZE("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),X0(),Lp(2),pw("ngModel",i.name),ZE("p-label",i.nameLabel),X0(),Lp(),pw("ngModel",i.address),X0(),Lp(2),pw("ngModel",i.state),ZE("p-options",i.stateOptions),X0(),Lp(2),pw("ngModel",i.city),ZE("p-options",i.cityOptions),X0(),Lp(2),ZE("p-disabled",m.invalid),Lp(4),ZE("p-value",i.documentType),Lp(),ZE("p-label",i.documentLabel)("p-value",i.document),Lp(3),ZE("p-label",i.nameLabel)("p-value",i.name),Lp(),ZE("p-value",i.address),Lp(3),ZE("p-value",i.getStateByValue(i.state)),Lp(),ZE("p-value",i.getCityByValue(i.city));}},dependencies:[lY,sY,aY,gk,fk,_3,Qt,_v,q3,Nde,nme,sme,Ko],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"],changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Select - Customer registration"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #f="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()(),Cl(25,"po-tab",10)(26,"div")(27,"label",6),qx(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.css"),og(),Cl(29,"pre",11),qx(30,`.sample-select-option-template-container {
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
`),og()()()()(),Cl(31,"div",12),Hl(32,"sample-po-select-customer-registration"),og(),Hl(33,"hr")),p&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,xe],encapsulation:2})}return a})();var _e=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0;}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies"]],standalone:false,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(Cl(0,"po-select",0),gw("ngModelChange",function(d){return Zx(i.select,d)||(i.select=d),d}),og(),Z0(),Cl(1,"po-info",1),gw("p-valueChange",function(d){return Zx(i.select,d)||(i.select=d),d}),og(),Cl(2,"div",2)(3,"po-select",3),dt("p-change",function(d){return i.onChange(d)}),gw("ngModelChange",function(d){return Zx(i.fieldLabel,d)||(i.fieldLabel=d),d}),og(),Z0(),Cl(4,"po-select",4),dt("p-change",function(d){return i.onChange(d)}),gw("ngModelChange",function(d){return Zx(i.fieldValue,d)||(i.fieldValue=d),d}),og(),Z0(),og()),p&2&&(pw("ngModel",i.select),ZE("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),X0(),Lp(),pw("p-value",i.select),Lp(2),ZE("p-options",i.labels),pw("ngModel",i.fieldLabel),X0(),Lp(),ZE("p-options",i.values),pw("ngModel",i.fieldValue),X0());},dependencies:[sY,gk,nme,sme],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Select Companies"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-select-companies/sample-po-select-companies.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-select
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-select-companies"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Re,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,_e],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-doc"]],standalone:false,decls:1068,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoSelectComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),og(),Cl(24,"blockquote")(25,"p"),qx(26,"Ao passar um valor para o "),Cl(27,"em"),qx(28,"model"),og(),qx(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Cl(30,"code"),qx(31,"undefined"),og(),qx(32,"."),og()(),Cl(33,"p"),qx(34,"Tamb\xE9m existe a possibilidade de utilizar um "),Cl(35,"em"),qx(36,"template"),og(),qx(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Cl(38,"strong")(39,"a",6),qx(40,"p-combo-option-template"),og()(),qx(41,"."),og(),Cl(42,"blockquote")(43,"p"),qx(44,"Obs: o template "),Cl(45,"strong")(46,"a",7),qx(47,"p-select-option-template"),og()(),qx(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),og()(),Cl(49,"h4"),qx(50,"Tokens customiz\xE1veis"),og(),Cl(51,"p"),qx(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(53,"blockquote")(54,"p"),qx(55,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(56,"a",8),qx(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(58,"."),og()(),Cl(59,"table")(60,"thead")(61,"tr")(62,"th"),qx(63,"Propriedade"),og(),Cl(64,"th"),qx(65,"Descri\xE7\xE3o"),og(),Cl(66,"th"),qx(67,"Valor Padr\xE3o"),og()()(),Cl(68,"tbody")(69,"tr")(70,"td")(71,"strong"),qx(72,"Default Values"),og()(),Hl(73,"td")(74,"td"),og(),Cl(75,"tr")(76,"td")(77,"code"),qx(78,"--font-family"),og()(),Cl(79,"td"),qx(80,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(81,"td")(82,"code"),qx(83,"var(--font-family-theme)"),og()()(),Cl(84,"tr")(85,"td")(86,"code"),qx(87,"--font-size"),og()(),Cl(88,"td"),qx(89,"Tamanho da fonte"),og(),Cl(90,"td")(91,"code"),qx(92,"var(--font-size-default)"),og()()(),Cl(93,"tr")(94,"td")(95,"code"),qx(96,"--text-color-empty"),og()(),Cl(97,"td"),qx(98,"Cor do placeholder"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--color-neutral-light-30)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--color"),og()(),Cl(106,"td"),qx(107,"Cor da borda"),og(),Cl(108,"td")(109,"code"),qx(110,"var(--color-neutral-dark-70)"),og()()(),Cl(111,"tr")(112,"td")(113,"code"),qx(114,"--background"),og()(),Cl(115,"td"),qx(116,"Cor de background"),og(),Cl(117,"td")(118,"code"),qx(119,"var(--color-neutral-light-05)"),og()()(),Cl(120,"tr")(121,"td")(122,"code"),qx(123,"--text-color"),og()(),Cl(124,"td"),qx(125,"Cor do texto"),og(),Cl(126,"td")(127,"code"),qx(128,"var(--color-neutral-dark-90)"),og()()(),Cl(129,"tr")(130,"td")(131,"code"),qx(132,"--padding-horizontal"),og()(),Cl(133,"td"),qx(134,"Preenchimento horizontal"),og(),Cl(135,"td")(136,"code"),qx(137,"0.5em"),og()()(),Cl(138,"tr")(139,"td")(140,"code"),qx(141,"--padding-vertical"),og()(),Cl(142,"td"),qx(143,"Preenchimento vertical"),og(),Cl(144,"td")(145,"code"),qx(146,"0.7em"),og()()(),Cl(147,"tr")(148,"td")(149,"code"),qx(150,"--field-container-title-justify"),og()(),Cl(151,"td"),qx(152,"Alinhamento horizontal do t\xEDtulo ("),Cl(153,"code"),qx(154,"justify-content"),og(),qx(155,")"),og(),Cl(156,"td")(157,"code"),qx(158,"space-between"),og()()(),Cl(159,"tr")(160,"td")(161,"code"),qx(162,"--field-container-title-flex"),og()(),Cl(163,"td"),qx(164,"Flex do t\xEDtulo ("),Cl(165,"code"),qx(166,"flex"),og(),qx(167,")"),og(),Cl(168,"td")(169,"code"),qx(170,"1 auto"),og()()(),Cl(171,"tr")(172,"td")(173,"strong"),qx(174,"Hover"),og()(),Hl(175,"td")(176,"td"),og(),Cl(177,"tr")(178,"td")(179,"code"),qx(180,"--color-hover"),og()(),Cl(181,"td"),qx(182,"Cor principal no estado hover"),og(),Cl(183,"td")(184,"code"),qx(185,"var(--color-brand-01-dark)"),og()()(),Cl(186,"tr")(187,"td")(188,"code"),qx(189,"--background-hover"),og()(),Cl(190,"td"),qx(191,"Cor de background no estado hover"),og(),Cl(192,"td")(193,"code"),qx(194,"var(--color-brand-01-lighter)"),og()()(),Cl(195,"tr")(196,"td")(197,"strong"),qx(198,"Focused"),og()(),Hl(199,"td")(200,"td"),og(),Cl(201,"tr")(202,"td")(203,"code"),qx(204,"--outline-color-focused"),og()(),Cl(205,"td"),qx(206,"Cor do outline do estado de focus"),og(),Cl(207,"td")(208,"code"),qx(209,"var(--color-action-focus)"),og()()(),Cl(210,"tr")(211,"td")(212,"code"),qx(213,"--color-focused"),og()(),Cl(214,"td"),qx(215,"Cor da borda no estado de focus"),og(),Cl(216,"td")(217,"code"),qx(218,"var(--color-action-default)"),og()()(),Cl(219,"tr")(220,"td")(221,"strong"),qx(222,"Disabled"),og()(),Hl(223,"td")(224,"td"),og(),Cl(225,"tr")(226,"td")(227,"code"),qx(228,"--color-disabled"),og()(),Cl(229,"td"),qx(230,"Cor principal no estado disabled"),og(),Cl(231,"td")(232,"code"),qx(233,"var(--color-neutral-light-30)"),og()()(),Cl(234,"tr")(235,"td")(236,"code"),qx(237,"--background-color-disabled"),og(),qx(238,"\xA0"),og(),Cl(239,"td"),qx(240,"Cor de background no estado disabled"),og(),Cl(241,"td")(242,"code"),qx(243,"var(--color-neutral-light-20)"),og()()()()()(),Cl(244,"div",9)(245,"h4",10),qx(246,"Seletor"),og(),Cl(247,"pre",11),qx(248,`<po-select
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
`),og()(),Cl(249,"h4",12),qx(250,"Propriedades"),og(),Cl(251,"table",13)(252,"tr",14)(253,"th",15),qx(254,"Nome"),og(),Cl(255,"th",15),qx(256,"Tipo"),og(),Cl(257,"th",15),qx(258,"Padr\xE3o"),og(),Cl(259,"th",15),qx(260,"Descri\xE7\xE3o"),og()(),Cl(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),qx(265," (p-additional-help)"),Hl(266,"br"),og()(),Cl(267,"div",20),qx(268,"Deprecated"),og()(),Cl(269,"td",21)(270,"code",22),qx(271,"EventEmitter"),og()(),Cl(272,"td",23),qx(273,"-"),og(),Cl(274,"td",24)(275,"em")(276,"strong"),qx(277,"(opcional)"),og()(),Cl(278,"p"),qx(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(280,"blockquote")(281,"p"),qx(282,"Essa propriedade est\xE1 "),Cl(283,"strong"),qx(284,"depreciada"),og(),qx(285," e ser\xE1 removida na vers\xE3o "),Cl(286,"code"),qx(287,"23.x.x"),og(),qx(288,". Recomendamos utilizar a propriedade "),Cl(289,"code"),qx(290,"p-helper"),og(),qx(291," que oferece mais recursos e flexibilidade."),og()()()(),Cl(292,"tr",16)(293,"td",17)(294,"div",25)(295,"span",26),qx(296," p-additional-help-tooltip"),Hl(297,"br"),og()(),Cl(298,"div",20),qx(299,"Deprecated"),og()(),Cl(300,"td",21)(301,"code",27),qx(302,"string"),og()(),Cl(303,"td",23),qx(304,"-"),og(),Cl(305,"td",24)(306,"em")(307,"strong"),qx(308,"(opcional)"),og()(),Cl(309,"p"),qx(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(311,"code"),qx(312,"po-helper"),og(),qx(313,`.
`),Cl(314,"strong"),qx(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(316,"blockquote")(317,"p"),qx(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(319,"blockquote")(320,"p"),qx(321,"Essa propriedade est\xE1 "),Cl(322,"strong"),qx(323,"depreciada"),og(),qx(324," e ser\xE1 removida na vers\xE3o "),Cl(325,"code"),qx(326,"23.x.x"),og(),qx(327,". Recomendamos utilizar a propriedade "),Cl(328,"code"),qx(329,"p-helper"),og(),qx(330," que oferece mais recursos e flexibilidade."),og()()()(),Cl(331,"tr",16)(332,"td",17)(333,"div",25)(334,"span",26),qx(335," p-append-in-body"),Hl(336,"br"),og()()(),Cl(337,"td",21)(338,"code",28),qx(339,"boolean"),og()(),Cl(340,"td",23)(341,"p")(342,"code"),qx(343,"false"),og()()(),Cl(344,"td",24)(345,"em")(346,"strong"),qx(347,"(opcional)"),og()(),Cl(348,"p"),qx(349,"Define que o popover ("),Cl(350,"code"),qx(351,"p-helper"),og(),qx(352," e/ou "),Cl(353,"code"),qx(354,"p-error-limit"),og(),qx(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(356,"blockquote")(357,"p"),qx(358,"Quando utilizado com "),Cl(359,"code"),qx(360,"p-helper"),og(),qx(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),qx(366," (p-blur)"),Hl(367,"br"),og()()(),Cl(368,"td",21)(369,"code",22),qx(370,"EventEmitter"),og()(),Cl(371,"td",23),qx(372,"-"),og(),Cl(373,"td",24)(374,"em")(375,"strong"),qx(376,"(opcional)"),og()(),Cl(377,"p"),qx(378,"Evento disparado ao sair do campo."),og()()(),Cl(379,"tr",16)(380,"td",17)(381,"div",18)(382,"span",19),qx(383," (p-change)"),Hl(384,"br"),og()()(),Cl(385,"td",21)(386,"code",22),qx(387,"EventEmitter"),og()(),Cl(388,"td",23),qx(389,"-"),og(),Cl(390,"td",24)(391,"em")(392,"strong"),qx(393,"(opcional)"),og()(),Cl(394,"p"),qx(395,"Evento disparado ao alterar valor do campo."),og()()(),Cl(396,"tr",16)(397,"td",17)(398,"div",25)(399,"span",26),qx(400," p-compact-label"),Hl(401,"br"),og()()(),Cl(402,"td",21)(403,"code",28),qx(404,"boolean"),og()(),Cl(405,"td",23)(406,"p")(407,"code"),qx(408,"false"),og()()(),Cl(409,"td",24)(410,"em")(411,"strong"),qx(412,"(opcional)"),og()(),Cl(413,"p"),qx(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(415,"p"),qx(416,"Quando habilitado ("),Cl(417,"code"),qx(418,"true"),og(),qx(419,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(420,"ul")(421,"li")(422,"code"),qx(423,"po-label"),og()(),Cl(424,"li")(425,"code"),qx(426,"p-requirement (showRequired)"),og()(),Cl(427,"li")(428,"code"),qx(429,"po-helper"),og()()(),Cl(430,"p"),qx(431,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(432,"p"),qx(433,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(434,"ul")(435,"li")(436,"code"),qx(437,"--field-container-title-justify"),og()(),Cl(438,"li")(439,"code"),qx(440,"--field-container-title-flex"),og()()(),Cl(441,"p"),qx(442,"Exemplo:"),og(),Cl(443,"pre")(444,"code"),qx(445,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(446,"p"),qx(447,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(448,"tr",16)(449,"td",17)(450,"div",25)(451,"span",26),qx(452," p-disabled"),Hl(453,"br"),og()()(),Cl(454,"td",21)(455,"code",28),qx(456,"boolean"),og()(),Cl(457,"td",23)(458,"p")(459,"code"),qx(460,"false"),og()()(),Cl(461,"td",24)(462,"em")(463,"strong"),qx(464,"(opcional)"),og()(),Cl(465,"p"),qx(466,"Indica se o campo ser\xE1 desabilitado."),og()()(),Cl(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),qx(471," p-error-limit"),Hl(472,"br"),og()()(),Cl(473,"td",21)(474,"code",28),qx(475,"boolean"),og()(),Cl(476,"td",23)(477,"p")(478,"code"),qx(479,"false"),og()()(),Cl(480,"td",24)(481,"em")(482,"strong"),qx(483,"(opcional)"),og()(),Cl(484,"p"),qx(485,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(486,"blockquote")(487,"p"),qx(488,"Caso essa propriedade seja definida como "),Cl(489,"code"),qx(490,"true"),og(),qx(491,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(492,"tr",16)(493,"td",17)(494,"div",25)(495,"span",26),qx(496," p-field-error-message"),Hl(497,"br"),og()()(),Cl(498,"td",21)(499,"code",27),qx(500,"string"),og()(),Cl(501,"td",23),qx(502,"-"),og(),Cl(503,"td",24)(504,"em")(505,"strong"),qx(506,"(opcional)"),og()(),Cl(507,"p"),qx(508,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(509,"blockquote")(510,"p"),qx(511,"Necess\xE1rio que a propriedade "),Cl(512,"code"),qx(513,"p-required"),og(),qx(514," esteja habilitada."),og()()()(),Cl(515,"tr",16)(516,"td",17)(517,"div",25)(518,"span",26),qx(519," p-field-label"),Hl(520,"br"),og()()(),Cl(521,"td",21)(522,"code",27),qx(523,"string"),og()(),Cl(524,"td",23)(525,"p")(526,"code"),qx(527,"label"),og()()(),Cl(528,"td",24)(529,"em")(530,"strong"),qx(531,"(opcional)"),og()(),Cl(532,"p"),qx(533,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Cl(534,"code"),qx(535,"p-options"),og(),qx(536,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og()()(),Cl(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),qx(541," p-field-value"),Hl(542,"br"),og()()(),Cl(543,"td",21)(544,"code",27),qx(545,"string"),og()(),Cl(546,"td",23)(547,"p")(548,"code"),qx(549,"value"),og()()(),Cl(550,"td",24)(551,"em")(552,"strong"),qx(553,"(opcional)"),og()(),Cl(554,"p"),qx(555,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Cl(556,"code"),qx(557,"p-options"),og(),qx(558,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og()()(),Cl(559,"tr",16)(560,"td",17)(561,"div",25)(562,"span",26),qx(563," p-help"),Hl(564,"br"),og()()(),Cl(565,"td",21)(566,"code",27),qx(567,"string"),og()(),Cl(568,"td",23),qx(569,"-"),og(),Cl(570,"td",24)(571,"p"),qx(572,"Texto de apoio para o campo."),og()()(),Cl(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),qx(577," (p-keydown)"),Hl(578,"br"),og()()(),Cl(579,"td",21)(580,"code",22),qx(581,"EventEmitter"),og()(),Cl(582,"td",23),qx(583,"-"),og(),Cl(584,"td",24)(585,"em")(586,"strong"),qx(587,"(opcional)"),og()(),Cl(588,"p"),qx(589,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(590,"code"),qx(591,"KeyboardEvent"),og(),qx(592," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),qx(597," p-label"),Hl(598,"br"),og()()(),Cl(599,"td",21)(600,"code",27),qx(601,"string"),og()(),Cl(602,"td",23),qx(603,"-"),og(),Cl(604,"td",24)(605,"p"),qx(606,"R\xF3tulo exibido pelo componente."),og()()(),Cl(607,"tr",16)(608,"td",17)(609,"div",25)(610,"span",26),qx(611," p-label-text-wrap"),Hl(612,"br"),og()()(),Cl(613,"td",21)(614,"code",28),qx(615,"boolean"),og()(),Cl(616,"td",23)(617,"p")(618,"code"),qx(619,"false"),og()()(),Cl(620,"td",24)(621,"em")(622,"strong"),qx(623,"(opcional)"),og()(),Cl(624,"p"),qx(625,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(626,"code"),qx(627,"p-label"),og(),qx(628,". Quando "),Cl(629,"code"),qx(630,"p-label-text-wrap"),og(),qx(631,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(632,"tr",16)(633,"td",17)(634,"div",25)(635,"span",26),qx(636," p-loading"),Hl(637,"br"),og()()(),Cl(638,"td",21)(639,"code",28),qx(640,"boolean"),og()(),Cl(641,"td",23)(642,"p")(643,"code"),qx(644,"false"),og()()(),Cl(645,"td",24)(646,"em")(647,"strong"),qx(648,"(opcional)"),og()(),Cl(649,"p"),qx(650,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),qx(655," name"),Hl(656,"br"),og()()(),Cl(657,"td",21)(658,"code",27),qx(659,"string"),og()(),Cl(660,"td",23),qx(661,"-"),og(),Cl(662,"td",24)(663,"p"),qx(664,"Nome do componente."),og()()(),Cl(665,"tr",16)(666,"td",17)(667,"div",18)(668,"span",19),qx(669," (ngModelChange)"),Hl(670,"br"),og()()(),Cl(671,"td",21)(672,"code",22),qx(673,"EventEmitter"),og()(),Cl(674,"td",23),qx(675,"-"),og(),Cl(676,"td",24)(677,"em")(678,"strong"),qx(679,"(opcional)"),og()(),Cl(680,"p"),qx(681,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Cl(682,"p"),qx(683,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Cl(684,"code"),qx(685,"strictTemplates"),og(),qx(686,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Cl(687,"pre")(688,"code"),qx(689,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),og()()()(),Cl(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),qx(694," p-optional"),Hl(695,"br"),og()()(),Cl(696,"td",21)(697,"code",28),qx(698,"boolean"),og()(),Cl(699,"td",23)(700,"p")(701,"code"),qx(702,"false"),og()()(),Cl(703,"td",24)(704,"em")(705,"strong"),qx(706,"(opcional)"),og()(),Cl(707,"p"),qx(708,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(709,"blockquote")(710,"p"),qx(711,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(712,"ul")(713,"li"),qx(714,"O campo conter "),Cl(715,"code"),qx(716,"p-required"),og(),qx(717,";"),og(),Cl(718,"li"),qx(719,"N\xE3o possuir "),Cl(720,"code"),qx(721,"p-help"),og(),qx(722," e/ou "),Cl(723,"code"),qx(724,"p-label"),og(),qx(725,"."),og()()()(),Cl(726,"tr",16)(727,"td",17)(728,"div",25)(729,"span",26),qx(730," p-options"),Hl(731,"br"),og()()(),Cl(732,"td",21)(733,"code",29),qx(734,"any[]"),og()(),Cl(735,"td",23),qx(736,"-"),og(),Cl(737,"td",24)(738,"p"),qx(739,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),Cl(740,"code"),qx(741,"PoSelectOption"),og(),qx(742,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Cl(743,"code"),qx(744,"PoSelectOptionGroup"),og(),qx(745,"."),og(),Cl(746,"p"),qx(747,"Caso esta lista estiver vazia, o model ser\xE1 "),Cl(748,"code"),qx(749,"undefined"),og(),qx(750,"."),og(),Cl(751,"blockquote")(752,"p"),qx(753,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),og()(),Cl(754,"pre")(755,"code"),qx(756,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),og()(),Cl(757,"blockquote")(758,"p"),qx(759,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),Cl(760,"code"),qx(761,"options"),og(),qx(762," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),og()(),Cl(763,"pre")(764,"code"),qx(765,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),og()(),Cl(766,"p"),qx(767,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),og()()(),Cl(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),qx(772," p-placeholder"),Hl(773,"br"),og()()(),Cl(774,"td",21)(775,"code",27),qx(776,"string"),og()(),Cl(777,"td",23),qx(778,"-"),og(),Cl(779,"td",24)(780,"em")(781,"strong"),qx(782,"(opcional)"),og()(),Cl(783,"p"),qx(784,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),og()()(),Cl(785,"tr",16)(786,"td",17)(787,"div",25)(788,"span",26),qx(789," p-helper"),Hl(790,"br"),og()()(),Cl(791,"td",21)(792,"code",30),qx(793,"PoHelperOptions "),og(),Cl(794,"code",27),qx(795," string"),og()(),Cl(796,"td",23),qx(797,"-"),og(),Cl(798,"td",24)(799,"em")(800,"strong"),qx(801,"(opcional)"),og()(),Cl(802,"p"),qx(803,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(804,"code"),qx(805,"p-label"),og(),qx(806," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(807,"code"),qx(808,"p-label"),og(),qx(809,"."),og(),Cl(810,"blockquote")(811,"p"),qx(812,"Para mais informa\xE7\xF5es acesse: "),Cl(813,"a",31),qx(814,"https://po-ui.io/documentation/po-helper"),og(),qx(815,"."),og()(),Cl(816,"blockquote")(817,"p"),qx(818,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(819,"code"),qx(820,"p-additional-help-tooltip"),og(),qx(821," e "),Cl(822,"code"),qx(823,"p-additional-help"),og(),qx(824,") ser\xE1 ignorado."),og()()()(),Cl(825,"tr",16)(826,"td",17)(827,"div",25)(828,"span",26),qx(829," p-readonly"),Hl(830,"br"),og()()(),Cl(831,"td",21)(832,"code",28),qx(833,"boolean"),og()(),Cl(834,"td",23)(835,"p")(836,"code"),qx(837,"false"),og()()(),Cl(838,"td",24)(839,"em")(840,"strong"),qx(841,"(opcional)"),og()(),Cl(842,"p"),qx(843,"Indica que o campo ser\xE1 somente para leitura."),og()()(),Cl(844,"tr",16)(845,"td",17)(846,"div",25)(847,"span",26),qx(848," p-required"),Hl(849,"br"),og()()(),Cl(850,"td",21)(851,"code",28),qx(852,"boolean"),og()(),Cl(853,"td",23)(854,"p")(855,"code"),qx(856,"false"),og()()(),Cl(857,"td",24)(858,"em")(859,"strong"),qx(860,"(opcional)"),og()(),Cl(861,"p"),qx(862,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(863,"tr",16)(864,"td",17)(865,"div",25)(866,"span",26),qx(867," p-show-required"),Hl(868,"br"),og()()(),Cl(869,"td",21)(870,"code",28),qx(871,"boolean"),og()(),Cl(872,"td",23),qx(873,"-"),og(),Cl(874,"td",24)(875,"p"),qx(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(877,"blockquote")(878,"p"),qx(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(880,"ul")(881,"li"),qx(882,"N\xE3o possuir "),Cl(883,"code"),qx(884,"p-help"),og(),qx(885," e/ou "),Cl(886,"code"),qx(887,"p-label"),og(),qx(888,"."),og()()()(),Cl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),qx(893," p-size"),Hl(894,"br"),og()()(),Cl(895,"td",21)(896,"code",27),qx(897,"string"),og()(),Cl(898,"td",23)(899,"p")(900,"code"),qx(901,"medium"),og()()(),Cl(902,"td",24)(903,"em")(904,"strong"),qx(905,"(opcional)"),og()(),Cl(906,"p"),qx(907,"Define o tamanho do componente:"),og(),Cl(908,"ul")(909,"li")(910,"code"),qx(911,"small"),og(),qx(912,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(913,"li")(914,"code"),qx(915,"medium"),og(),qx(916,": altura do input como 44px."),og()(),Cl(917,"blockquote")(918,"p"),qx(919,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(920,"code"),qx(921,"medium"),og(),qx(922,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(923,"a",32),qx(924,"po-theme"),og(),qx(925,"."),og()()()()(),Cl(926,"h3",12),qx(927,"M\xE9todos"),og(),Cl(928,"table",33)(929,"tr",16)(930,"th",34)(931,"div",25)(932,"h4")(933,"span",26),qx(934," focus "),og()()()()(),Cl(935,"tr",24)(936,"td",24)(937,"p"),qx(938,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(939,"p"),qx(940,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(941,"pre")(942,"code"),qx(943,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),og()()()()(),Hl(944,"br"),Cl(945,"table",33)(946,"tr",16)(947,"th",34)(948,"div",25)(949,"h4")(950,"span",26),qx(951," showAdditionalHelp "),og()()()()(),Cl(952,"tr",24)(953,"td",24)(954,"p"),qx(955,"M\xE9todo que exibe "),Cl(956,"code"),qx(957,"p-helper"),og(),qx(958," ou executa a a\xE7\xE3o definida em "),Cl(959,"code"),qx(960,"p-helper{eventOnClick}"),og(),qx(961," ou em "),Cl(962,"code"),qx(963,"p-additionalHelp"),og(),qx(964,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(965,"code"),qx(966,"p-keydown"),og(),qx(967,"."),og(),Cl(968,"blockquote")(969,"p"),qx(970,"Exibe ou oculta o conte\xFAdo do componente "),Cl(971,"code"),qx(972,"po-helper"),og(),qx(973," quando o componente estiver com foco."),og()(),Cl(974,"pre")(975,"code"),qx(976,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),og()(),Cl(977,"pre")(978,"code",35),qx(979,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(980,"br"),Cl(981,"h3"),qx(982,"Interfaces"),og(),Cl(983,"h4",36)(984,"code",5),qx(985,"PoSelectOptionGroup"),og()(),Cl(986,"div",2)(987,"p"),qx(988,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),Cl(989,"code"),qx(990,"PoSelectOption"),og(),qx(991,"."),og()(),Cl(992,"h4",12),qx(993,"Propriedades"),og(),Cl(994,"table",13)(995,"tr",14)(996,"th",15),qx(997,"Nome"),og(),Cl(998,"th",15),qx(999,"Tipo"),og(),Cl(1e3,"th",15),qx(1001,"Descri\xE7\xE3o"),og()(),Cl(1002,"tr",16)(1003,"td",17)(1004,"div",25)(1005,"span",26),qx(1006," label"),Hl(1007,"br"),og()()(),Cl(1008,"td",21)(1009,"code",27),qx(1010,"string"),og()(),Cl(1011,"td",24)(1012,"p"),qx(1013,"Label para denominar o nome do grupo."),og()()(),Cl(1014,"tr",16)(1015,"td",17)(1016,"div",25)(1017,"span",26),qx(1018," options"),Hl(1019,"br"),og()()(),Cl(1020,"td",21)(1021,"code",37),qx(1022,"Array<PoSelectOption>"),og()(),Cl(1023,"td",24)(1024,"p"),qx(1025,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),og()()()(),Cl(1026,"h4",36)(1027,"code",5),qx(1028,"PoSelectOption"),og()(),Cl(1029,"div",2)(1030,"p"),qx(1031,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),og()(),Cl(1032,"h4",12),qx(1033,"Propriedades"),og(),Cl(1034,"table",13)(1035,"tr",14)(1036,"th",15),qx(1037,"Nome"),og(),Cl(1038,"th",15),qx(1039,"Tipo"),og(),Cl(1040,"th",15),qx(1041,"Descri\xE7\xE3o"),og()(),Cl(1042,"tr",16)(1043,"td",17)(1044,"div",25)(1045,"span",26),qx(1046," label"),Hl(1047,"br"),og()()(),Cl(1048,"td",21)(1049,"code",27),qx(1050,"string"),og()(),Cl(1051,"td",24)(1052,"p"),qx(1053,"Label a ser utilizada nos itens da lista."),og()()(),Cl(1054,"tr",16)(1055,"td",17)(1056,"div",25)(1057,"span",26),qx(1058," value"),Hl(1059,"br"),og()()(),Cl(1060,"td",21)(1061,"code",27),qx(1062,"string "),og(),Cl(1063,"code",38),qx(1064," number"),og()(),Cl(1065,"td",24)(1066,"p"),qx(1067,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-select-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),og()()()),p&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ee,Ce,ye,Pe,we],encapsulation:2})}return a})();var Je=[{path:"",component:Te}],Me=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Je),bL]})}return a})();var Dt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,Me]})}return a})();export{Dt as DocPoSelectModule};