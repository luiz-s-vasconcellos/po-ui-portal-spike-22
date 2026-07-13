import {f as fe$1,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,c as f,ae as Be,i as ib,I,aJ as Whe,L as Gl,O as nw,bM as vN,a7 as gN,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,bH as k3,c9 as jhe,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,cn as o3,b6 as Yo,a2 as JE,Q as we$1,a3 as sNe,br as uN,J as yw,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var Oe=()=>({label:"Option 1",value:"1"}),Le=()=>({label:"Option 2",value:"2"}),De=(a,K)=>[a,K],he=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic"]],standalone:false,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&Gl(0,"po-select",0),p&2&&nw("p-options",vN(3,De,gN(1,Oe),gN(2,Le)));},dependencies:[Whe],encapsulation:2,changeDetection:1})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Select Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-select-basic/sample-po-select-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-select-basic"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ve,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{cdr=f(Be);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges();}changeEvent(r){this.event=r;}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=false,this.selectedOptionsGroup=void 0,this.size="medium";}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0);}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}];}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(te=>te.label===i&&"options"in te);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return [...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs"]],standalone:false,decls:33,vars:37,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=Sx();Tl(0,"po-select",2),ww("ngModelChange",function(o){return Ky(m),sN(i.select,o)||(i.select=o),Xy(o)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",3),Gl(3,"po-info",4)(4,"po-info",5),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0),Gl(8,"po-divider",6),Tl(9,"div",3)(10,"po-switch",7),ht("p-change",function(o){return i.restoreSwitch(o)}),ww("ngModelChange",function(o){return Ky(m),sN(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),Xy(o)}),sg(),r0(),Tl(11,"po-select",8),ww("ngModelChange",function(o){return Ky(m),sN(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),Xy(o)}),ht("p-change",function(){return i.optionsGroupSelection()}),sg(),r0(),Tl(12,"po-input",9),ww("ngModelChange",function(o){return Ky(m),sN(i.optionsGroup,o)||(i.optionsGroup=o),Xy(o)}),sg(),r0(),sg(),Gl(13,"po-divider",10),Tl(14,"div",3)(15,"po-input",11),ww("ngModelChange",function(o){return Ky(m),sN(i.option.label,o)||(i.option.label=o),Xy(o)}),sg(),r0(),Tl(16,"po-input",12),ww("ngModelChange",function(o){return Ky(m),sN(i.option.value,o)||(i.option.value=o),Xy(o)}),sg(),r0(),sg(),Tl(17,"div",3)(18,"po-button",13),ht("p-click",function(){return i.addOption()}),sg()()(),Gl(19,"po-divider"),Tl(20,"form",null,1)(22,"po-input",14),ww("ngModelChange",function(o){return Ky(m),sN(i.label,o)||(i.label=o),Xy(o)}),sg(),r0(),Tl(23,"po-input",15),ww("ngModelChange",function(o){return Ky(m),sN(i.help,o)||(i.help=o),Xy(o)}),sg(),r0(),Tl(24,"po-input",16),ww("ngModelChange",function(o){return Ky(m),sN(i.helperText,o)||(i.helperText=o),Xy(o)}),sg(),r0(),Tl(25,"po-input",17),ww("ngModelChange",function(o){return Ky(m),sN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),sg(),r0(),Tl(26,"po-input",18),ww("ngModelChange",function(o){return Ky(m),sN(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),Xy(o)}),sg(),r0(),Tl(27,"po-checkbox-group",19),ww("ngModelChange",function(o){return Ky(m),sN(i.properties,o)||(i.properties=o),Xy(o)}),sg(),r0(),Tl(28,"po-radio-group",20),ww("ngModelChange",function(o){return Ky(m),sN(i.size,o)||(i.size=o),Xy(o)}),sg(),r0(),Tl(29,"div",3)(30,"div",21)(31,"po-button",22),ht("p-click",function(){return i.restore()}),sg()()(),Gl(32,"form"),sg();}if(p&2){let m=Fx(7);Ew("ngModel",i.select),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),o0(),Vp(3),nw("p-value",i.select),Vp(),nw("p-value",i.event),Vp(6),Ew("ngModel",i.selectOptionGroupSwitch),o0(),Vp(),Ew("ngModel",i.selectedOptionsGroup),nw("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),o0(),Vp(),Ew("ngModel",i.optionsGroup),nw("p-disabled",!i.selectOptionGroupSwitch),o0(),Vp(3),Ew("ngModel",i.option.label),o0(),Vp(),Ew("ngModel",i.option.value),o0(),Vp(2),nw("p-disabled",m.invalid),Vp(4),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helperText),o0(),Vp(),Ew("ngModel",i.placeholder),o0(),Vp(),Ew("ngModel",i.fieldErrorMessage),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,b3,L3,Tde,Whe,k3,jhe],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Select Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-select-labs/sample-po-select-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-select
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-select-labs"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ge,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,fe],encapsulation:2,changeDetection:1})}return a})();var ee=(()=>{class a{http=f(ib);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ze(a,K){if(a&1&&(Tl(0,"div",17),Gl(1,"po-avatar",18),Tl(2,"div",19)(3,"div",20),iN(4),sg(),Tl(5,"div",21),iN(6),sg()()()),a&2){let r=K.$implicit;Vp(),nw("p-src",uN("https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png")),Vp(3),yw(r.label),Vp(2),yw(r.value);}}var xe=(()=>{class a{sampleService=f(ee);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe();}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType);}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name="";}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF";}onChangeState(){this.getCitiesByState(this.state);}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value;});}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state);});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:false,features:[we$1([ee])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=Sx();Tl(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),ww("ngModelChange",function(o){return Ky(m),sN(i.documentType,o)||(i.documentType=o),Xy(o)}),ht("p-change",function(o){return i.changeType(o)}),sg(),r0(),Tl(4,"po-input",4),ww("ngModelChange",function(o){return Ky(m),sN(i.document,o)||(i.document=o),Xy(o)}),sg(),r0(),sg(),Tl(5,"div",2)(6,"po-input",5),ww("ngModelChange",function(o){return Ky(m),sN(i.name,o)||(i.name=o),Xy(o)}),sg(),r0(),Tl(7,"po-input",6),ww("ngModelChange",function(o){return Ky(m),sN(i.address,o)||(i.address=o),Xy(o)}),sg(),r0(),sg(),Tl(8,"div",2)(9,"po-select",7),ww("ngModelChange",function(o){return Ky(m),sN(i.state,o)||(i.state=o),Xy(o)}),ht("p-change",function(){return i.onChangeState()}),JE(10,ze,7,4,"ng-template",8),sg(),r0(),Tl(11,"po-select",9),ww("ngModelChange",function(o){return Ky(m),sN(i.city,o)||(i.city=o),Xy(o)}),sg(),r0(),sg(),Tl(12,"div",2)(13,"po-button",10),ht("p-click",function(){Ky(m);let o=Fx(15);return Xy(o.open())}),sg()()(),Tl(14,"po-modal",11,1)(16,"div",2),Gl(17,"po-info",12)(18,"po-info",13),sg(),Gl(19,"po-divider"),Tl(20,"div",2),Gl(21,"po-info",13)(22,"po-info",14),sg(),Gl(23,"po-divider"),Tl(24,"div",2),Gl(25,"po-info",15)(26,"po-info",16),sg()();}if(p&2){let m=Fx(1);Vp(3),Ew("ngModel",i.documentType),nw("p-options",i.options),o0(),Vp(),Ew("ngModel",i.document),nw("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),o0(),Vp(2),Ew("ngModel",i.name),nw("p-label",i.nameLabel),o0(),Vp(),Ew("ngModel",i.address),o0(),Vp(2),Ew("ngModel",i.state),nw("p-options",i.stateOptions),o0(),Vp(2),Ew("ngModel",i.city),nw("p-options",i.cityOptions),o0(),Vp(2),nw("p-disabled",m.invalid),Vp(4),nw("p-value",i.documentType),Vp(),nw("p-label",i.documentLabel)("p-value",i.document),Vp(3),nw("p-label",i.nameLabel)("p-value",i.name),Vp(),nw("p-value",i.address),Vp(3),nw("p-value",i.getStateByValue(i.state)),Vp(),nw("p-value",i.getCityByValue(i.city));}},dependencies:[oY,nY,rY,Sk,Ck,o3,Qt,mv,L3,Tde,Whe,jhe,Yo],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"],changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Select - Customer registration"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #f="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),iN(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.css"),sg(),Tl(29,"pre",11),iN(30,`.sample-select-option-template-container {
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
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-select-customer-registration"),sg(),Gl(33,"hr")),p&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,xe],encapsulation:2,changeDetection:1})}return a})();var _e=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0;}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies"]],standalone:false,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(Tl(0,"po-select",0),ww("ngModelChange",function(d){return sN(i.select,d)||(i.select=d),d}),sg(),r0(),Tl(1,"po-info",1),ww("p-valueChange",function(d){return sN(i.select,d)||(i.select=d),d}),sg(),Tl(2,"div",2)(3,"po-select",3),ht("p-change",function(d){return i.onChange(d)}),ww("ngModelChange",function(d){return sN(i.fieldLabel,d)||(i.fieldLabel=d),d}),sg(),r0(),Tl(4,"po-select",4),ht("p-change",function(d){return i.onChange(d)}),ww("ngModelChange",function(d){return sN(i.fieldValue,d)||(i.fieldValue=d),d}),sg(),r0(),sg()),p&2&&(Ew("ngModel",i.select),nw("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),o0(),Vp(),Ew("p-value",i.select),Vp(2),nw("p-options",i.labels),Ew("ngModel",i.fieldLabel),o0(),Vp(),nw("p-options",i.values),Ew("ngModel",i.fieldValue),o0());},dependencies:[nY,Sk,Whe,jhe],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-companies-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Select Companies"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-select-companies/sample-po-select-companies.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-select
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-select-companies"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Re,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,_e],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-select-doc"]],standalone:false,decls:1068,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoSelectComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),sg(),Tl(24,"blockquote")(25,"p"),iN(26,"Ao passar um valor para o "),Tl(27,"em"),iN(28,"model"),sg(),iN(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Tl(30,"code"),iN(31,"undefined"),sg(),iN(32,"."),sg()(),Tl(33,"p"),iN(34,"Tamb\xE9m existe a possibilidade de utilizar um "),Tl(35,"em"),iN(36,"template"),sg(),iN(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),Tl(38,"strong")(39,"a",6),iN(40,"p-combo-option-template"),sg()(),iN(41,"."),sg(),Tl(42,"blockquote")(43,"p"),iN(44,"Obs: o template "),Tl(45,"strong")(46,"a",7),iN(47,"p-select-option-template"),sg()(),iN(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),sg()(),Tl(49,"h4"),iN(50,"Tokens customiz\xE1veis"),sg(),Tl(51,"p"),iN(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(53,"blockquote")(54,"p"),iN(55,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(56,"a",8),iN(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(58,"."),sg()(),Tl(59,"table")(60,"thead")(61,"tr")(62,"th"),iN(63,"Propriedade"),sg(),Tl(64,"th"),iN(65,"Descri\xE7\xE3o"),sg(),Tl(66,"th"),iN(67,"Valor Padr\xE3o"),sg()()(),Tl(68,"tbody")(69,"tr")(70,"td")(71,"strong"),iN(72,"Default Values"),sg()(),Gl(73,"td")(74,"td"),sg(),Tl(75,"tr")(76,"td")(77,"code"),iN(78,"--font-family"),sg()(),Tl(79,"td"),iN(80,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(81,"td")(82,"code"),iN(83,"var(--font-family-theme)"),sg()()(),Tl(84,"tr")(85,"td")(86,"code"),iN(87,"--font-size"),sg()(),Tl(88,"td"),iN(89,"Tamanho da fonte"),sg(),Tl(90,"td")(91,"code"),iN(92,"var(--font-size-default)"),sg()()(),Tl(93,"tr")(94,"td")(95,"code"),iN(96,"--text-color-empty"),sg()(),Tl(97,"td"),iN(98,"Cor do placeholder"),sg(),Tl(99,"td")(100,"code"),iN(101,"var(--color-neutral-light-30)"),sg()()(),Tl(102,"tr")(103,"td")(104,"code"),iN(105,"--color"),sg()(),Tl(106,"td"),iN(107,"Cor da borda"),sg(),Tl(108,"td")(109,"code"),iN(110,"var(--color-neutral-dark-70)"),sg()()(),Tl(111,"tr")(112,"td")(113,"code"),iN(114,"--background"),sg()(),Tl(115,"td"),iN(116,"Cor de background"),sg(),Tl(117,"td")(118,"code"),iN(119,"var(--color-neutral-light-05)"),sg()()(),Tl(120,"tr")(121,"td")(122,"code"),iN(123,"--text-color"),sg()(),Tl(124,"td"),iN(125,"Cor do texto"),sg(),Tl(126,"td")(127,"code"),iN(128,"var(--color-neutral-dark-90)"),sg()()(),Tl(129,"tr")(130,"td")(131,"code"),iN(132,"--padding-horizontal"),sg()(),Tl(133,"td"),iN(134,"Preenchimento horizontal"),sg(),Tl(135,"td")(136,"code"),iN(137,"0.5em"),sg()()(),Tl(138,"tr")(139,"td")(140,"code"),iN(141,"--padding-vertical"),sg()(),Tl(142,"td"),iN(143,"Preenchimento vertical"),sg(),Tl(144,"td")(145,"code"),iN(146,"0.7em"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),iN(150,"--field-container-title-justify"),sg()(),Tl(151,"td"),iN(152,"Alinhamento horizontal do t\xEDtulo ("),Tl(153,"code"),iN(154,"justify-content"),sg(),iN(155,")"),sg(),Tl(156,"td")(157,"code"),iN(158,"space-between"),sg()()(),Tl(159,"tr")(160,"td")(161,"code"),iN(162,"--field-container-title-flex"),sg()(),Tl(163,"td"),iN(164,"Flex do t\xEDtulo ("),Tl(165,"code"),iN(166,"flex"),sg(),iN(167,")"),sg(),Tl(168,"td")(169,"code"),iN(170,"1 auto"),sg()()(),Tl(171,"tr")(172,"td")(173,"strong"),iN(174,"Hover"),sg()(),Gl(175,"td")(176,"td"),sg(),Tl(177,"tr")(178,"td")(179,"code"),iN(180,"--color-hover"),sg()(),Tl(181,"td"),iN(182,"Cor principal no estado hover"),sg(),Tl(183,"td")(184,"code"),iN(185,"var(--color-brand-01-dark)"),sg()()(),Tl(186,"tr")(187,"td")(188,"code"),iN(189,"--background-hover"),sg()(),Tl(190,"td"),iN(191,"Cor de background no estado hover"),sg(),Tl(192,"td")(193,"code"),iN(194,"var(--color-brand-01-lighter)"),sg()()(),Tl(195,"tr")(196,"td")(197,"strong"),iN(198,"Focused"),sg()(),Gl(199,"td")(200,"td"),sg(),Tl(201,"tr")(202,"td")(203,"code"),iN(204,"--outline-color-focused"),sg()(),Tl(205,"td"),iN(206,"Cor do outline do estado de focus"),sg(),Tl(207,"td")(208,"code"),iN(209,"var(--color-action-focus)"),sg()()(),Tl(210,"tr")(211,"td")(212,"code"),iN(213,"--color-focused"),sg()(),Tl(214,"td"),iN(215,"Cor da borda no estado de focus"),sg(),Tl(216,"td")(217,"code"),iN(218,"var(--color-action-default)"),sg()()(),Tl(219,"tr")(220,"td")(221,"strong"),iN(222,"Disabled"),sg()(),Gl(223,"td")(224,"td"),sg(),Tl(225,"tr")(226,"td")(227,"code"),iN(228,"--color-disabled"),sg()(),Tl(229,"td"),iN(230,"Cor principal no estado disabled"),sg(),Tl(231,"td")(232,"code"),iN(233,"var(--color-neutral-light-30)"),sg()()(),Tl(234,"tr")(235,"td")(236,"code"),iN(237,"--background-color-disabled"),sg(),iN(238,"\xA0"),sg(),Tl(239,"td"),iN(240,"Cor de background no estado disabled"),sg(),Tl(241,"td")(242,"code"),iN(243,"var(--color-neutral-light-20)"),sg()()()()()(),Tl(244,"div",9)(245,"h4",10),iN(246,"Seletor"),sg(),Tl(247,"pre",11),iN(248,`<po-select
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
`),sg()(),Tl(249,"h4",12),iN(250,"Propriedades"),sg(),Tl(251,"table",13)(252,"tr",14)(253,"th",15),iN(254,"Nome"),sg(),Tl(255,"th",15),iN(256,"Tipo"),sg(),Tl(257,"th",15),iN(258,"Padr\xE3o"),sg(),Tl(259,"th",15),iN(260,"Descri\xE7\xE3o"),sg()(),Tl(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),iN(265," (p-additional-help)"),Gl(266,"br"),sg()(),Tl(267,"div",20),iN(268,"Deprecated"),sg()(),Tl(269,"td",21)(270,"code",22),iN(271,"EventEmitter"),sg()(),Tl(272,"td",23),iN(273,"-"),sg(),Tl(274,"td",24)(275,"em")(276,"strong"),iN(277,"(opcional)"),sg()(),Tl(278,"p"),iN(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(280,"blockquote")(281,"p"),iN(282,"Essa propriedade est\xE1 "),Tl(283,"strong"),iN(284,"depreciada"),sg(),iN(285," e ser\xE1 removida na vers\xE3o "),Tl(286,"code"),iN(287,"23.x.x"),sg(),iN(288,". Recomendamos utilizar a propriedade "),Tl(289,"code"),iN(290,"p-helper"),sg(),iN(291," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(292,"tr",16)(293,"td",17)(294,"div",25)(295,"span",26),iN(296," p-additional-help-tooltip"),Gl(297,"br"),sg()(),Tl(298,"div",20),iN(299,"Deprecated"),sg()(),Tl(300,"td",21)(301,"code",27),iN(302,"string"),sg()(),Tl(303,"td",23),iN(304,"-"),sg(),Tl(305,"td",24)(306,"em")(307,"strong"),iN(308,"(opcional)"),sg()(),Tl(309,"p"),iN(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(311,"code"),iN(312,"po-helper"),sg(),iN(313,`.
`),Tl(314,"strong"),iN(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(316,"blockquote")(317,"p"),iN(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(319,"blockquote")(320,"p"),iN(321,"Essa propriedade est\xE1 "),Tl(322,"strong"),iN(323,"depreciada"),sg(),iN(324," e ser\xE1 removida na vers\xE3o "),Tl(325,"code"),iN(326,"23.x.x"),sg(),iN(327,". Recomendamos utilizar a propriedade "),Tl(328,"code"),iN(329,"p-helper"),sg(),iN(330," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(331,"tr",16)(332,"td",17)(333,"div",25)(334,"span",26),iN(335," p-append-in-body"),Gl(336,"br"),sg()()(),Tl(337,"td",21)(338,"code",28),iN(339,"boolean"),sg()(),Tl(340,"td",23)(341,"p")(342,"code"),iN(343,"false"),sg()()(),Tl(344,"td",24)(345,"em")(346,"strong"),iN(347,"(opcional)"),sg()(),Tl(348,"p"),iN(349,"Define que o popover ("),Tl(350,"code"),iN(351,"p-helper"),sg(),iN(352," e/ou "),Tl(353,"code"),iN(354,"p-error-limit"),sg(),iN(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(356,"blockquote")(357,"p"),iN(358,"Quando utilizado com "),Tl(359,"code"),iN(360,"p-helper"),sg(),iN(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),iN(366," (p-blur)"),Gl(367,"br"),sg()()(),Tl(368,"td",21)(369,"code",22),iN(370,"EventEmitter"),sg()(),Tl(371,"td",23),iN(372,"-"),sg(),Tl(373,"td",24)(374,"em")(375,"strong"),iN(376,"(opcional)"),sg()(),Tl(377,"p"),iN(378,"Evento disparado ao sair do campo."),sg()()(),Tl(379,"tr",16)(380,"td",17)(381,"div",18)(382,"span",19),iN(383," (p-change)"),Gl(384,"br"),sg()()(),Tl(385,"td",21)(386,"code",22),iN(387,"EventEmitter"),sg()(),Tl(388,"td",23),iN(389,"-"),sg(),Tl(390,"td",24)(391,"em")(392,"strong"),iN(393,"(opcional)"),sg()(),Tl(394,"p"),iN(395,"Evento disparado ao alterar valor do campo."),sg()()(),Tl(396,"tr",16)(397,"td",17)(398,"div",25)(399,"span",26),iN(400," p-compact-label"),Gl(401,"br"),sg()()(),Tl(402,"td",21)(403,"code",28),iN(404,"boolean"),sg()(),Tl(405,"td",23)(406,"p")(407,"code"),iN(408,"false"),sg()()(),Tl(409,"td",24)(410,"em")(411,"strong"),iN(412,"(opcional)"),sg()(),Tl(413,"p"),iN(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(415,"p"),iN(416,"Quando habilitado ("),Tl(417,"code"),iN(418,"true"),sg(),iN(419,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(420,"ul")(421,"li")(422,"code"),iN(423,"po-label"),sg()(),Tl(424,"li")(425,"code"),iN(426,"p-requirement (showRequired)"),sg()(),Tl(427,"li")(428,"code"),iN(429,"po-helper"),sg()()(),Tl(430,"p"),iN(431,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(432,"p"),iN(433,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(434,"ul")(435,"li")(436,"code"),iN(437,"--field-container-title-justify"),sg()(),Tl(438,"li")(439,"code"),iN(440,"--field-container-title-flex"),sg()()(),Tl(441,"p"),iN(442,"Exemplo:"),sg(),Tl(443,"pre")(444,"code"),iN(445,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(446,"p"),iN(447,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(448,"tr",16)(449,"td",17)(450,"div",25)(451,"span",26),iN(452," p-disabled"),Gl(453,"br"),sg()()(),Tl(454,"td",21)(455,"code",28),iN(456,"boolean"),sg()(),Tl(457,"td",23)(458,"p")(459,"code"),iN(460,"false"),sg()()(),Tl(461,"td",24)(462,"em")(463,"strong"),iN(464,"(opcional)"),sg()(),Tl(465,"p"),iN(466,"Indica se o campo ser\xE1 desabilitado."),sg()()(),Tl(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),iN(471," p-error-limit"),Gl(472,"br"),sg()()(),Tl(473,"td",21)(474,"code",28),iN(475,"boolean"),sg()(),Tl(476,"td",23)(477,"p")(478,"code"),iN(479,"false"),sg()()(),Tl(480,"td",24)(481,"em")(482,"strong"),iN(483,"(opcional)"),sg()(),Tl(484,"p"),iN(485,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(486,"blockquote")(487,"p"),iN(488,"Caso essa propriedade seja definida como "),Tl(489,"code"),iN(490,"true"),sg(),iN(491,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(492,"tr",16)(493,"td",17)(494,"div",25)(495,"span",26),iN(496," p-field-error-message"),Gl(497,"br"),sg()()(),Tl(498,"td",21)(499,"code",27),iN(500,"string"),sg()(),Tl(501,"td",23),iN(502,"-"),sg(),Tl(503,"td",24)(504,"em")(505,"strong"),iN(506,"(opcional)"),sg()(),Tl(507,"p"),iN(508,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(509,"blockquote")(510,"p"),iN(511,"Necess\xE1rio que a propriedade "),Tl(512,"code"),iN(513,"p-required"),sg(),iN(514," esteja habilitada."),sg()()()(),Tl(515,"tr",16)(516,"td",17)(517,"div",25)(518,"span",26),iN(519," p-field-label"),Gl(520,"br"),sg()()(),Tl(521,"td",21)(522,"code",27),iN(523,"string"),sg()(),Tl(524,"td",23)(525,"p")(526,"code"),iN(527,"label"),sg()()(),Tl(528,"td",24)(529,"em")(530,"strong"),iN(531,"(opcional)"),sg()(),Tl(532,"p"),iN(533,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(534,"code"),iN(535,"p-options"),sg(),iN(536,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),sg()()(),Tl(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),iN(541," p-field-value"),Gl(542,"br"),sg()()(),Tl(543,"td",21)(544,"code",27),iN(545,"string"),sg()(),Tl(546,"td",23)(547,"p")(548,"code"),iN(549,"value"),sg()()(),Tl(550,"td",24)(551,"em")(552,"strong"),iN(553,"(opcional)"),sg()(),Tl(554,"p"),iN(555,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(556,"code"),iN(557,"p-options"),sg(),iN(558,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),sg()()(),Tl(559,"tr",16)(560,"td",17)(561,"div",25)(562,"span",26),iN(563," p-help"),Gl(564,"br"),sg()()(),Tl(565,"td",21)(566,"code",27),iN(567,"string"),sg()(),Tl(568,"td",23),iN(569,"-"),sg(),Tl(570,"td",24)(571,"p"),iN(572,"Texto de apoio para o campo."),sg()()(),Tl(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),iN(577," (p-keydown)"),Gl(578,"br"),sg()()(),Tl(579,"td",21)(580,"code",22),iN(581,"EventEmitter"),sg()(),Tl(582,"td",23),iN(583,"-"),sg(),Tl(584,"td",24)(585,"em")(586,"strong"),iN(587,"(opcional)"),sg()(),Tl(588,"p"),iN(589,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(590,"code"),iN(591,"KeyboardEvent"),sg(),iN(592," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),iN(597," p-label"),Gl(598,"br"),sg()()(),Tl(599,"td",21)(600,"code",27),iN(601,"string"),sg()(),Tl(602,"td",23),iN(603,"-"),sg(),Tl(604,"td",24)(605,"p"),iN(606,"R\xF3tulo exibido pelo componente."),sg()()(),Tl(607,"tr",16)(608,"td",17)(609,"div",25)(610,"span",26),iN(611," p-label-text-wrap"),Gl(612,"br"),sg()()(),Tl(613,"td",21)(614,"code",28),iN(615,"boolean"),sg()(),Tl(616,"td",23)(617,"p")(618,"code"),iN(619,"false"),sg()()(),Tl(620,"td",24)(621,"em")(622,"strong"),iN(623,"(opcional)"),sg()(),Tl(624,"p"),iN(625,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(626,"code"),iN(627,"p-label"),sg(),iN(628,". Quando "),Tl(629,"code"),iN(630,"p-label-text-wrap"),sg(),iN(631,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(632,"tr",16)(633,"td",17)(634,"div",25)(635,"span",26),iN(636," p-loading"),Gl(637,"br"),sg()()(),Tl(638,"td",21)(639,"code",28),iN(640,"boolean"),sg()(),Tl(641,"td",23)(642,"p")(643,"code"),iN(644,"false"),sg()()(),Tl(645,"td",24)(646,"em")(647,"strong"),iN(648,"(opcional)"),sg()(),Tl(649,"p"),iN(650,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),iN(655," name"),Gl(656,"br"),sg()()(),Tl(657,"td",21)(658,"code",27),iN(659,"string"),sg()(),Tl(660,"td",23),iN(661,"-"),sg(),Tl(662,"td",24)(663,"p"),iN(664,"Nome do componente."),sg()()(),Tl(665,"tr",16)(666,"td",17)(667,"div",18)(668,"span",19),iN(669," (ngModelChange)"),Gl(670,"br"),sg()()(),Tl(671,"td",21)(672,"code",22),iN(673,"EventEmitter"),sg()(),Tl(674,"td",23),iN(675,"-"),sg(),Tl(676,"td",24)(677,"em")(678,"strong"),iN(679,"(opcional)"),sg()(),Tl(680,"p"),iN(681,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),sg(),Tl(682,"p"),iN(683,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Tl(684,"code"),iN(685,"strictTemplates"),sg(),iN(686,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Tl(687,"pre")(688,"code"),iN(689,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),sg()()()(),Tl(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),iN(694," p-optional"),Gl(695,"br"),sg()()(),Tl(696,"td",21)(697,"code",28),iN(698,"boolean"),sg()(),Tl(699,"td",23)(700,"p")(701,"code"),iN(702,"false"),sg()()(),Tl(703,"td",24)(704,"em")(705,"strong"),iN(706,"(opcional)"),sg()(),Tl(707,"p"),iN(708,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(709,"blockquote")(710,"p"),iN(711,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(712,"ul")(713,"li"),iN(714,"O campo conter "),Tl(715,"code"),iN(716,"p-required"),sg(),iN(717,";"),sg(),Tl(718,"li"),iN(719,"N\xE3o possuir "),Tl(720,"code"),iN(721,"p-help"),sg(),iN(722," e/ou "),Tl(723,"code"),iN(724,"p-label"),sg(),iN(725,"."),sg()()()(),Tl(726,"tr",16)(727,"td",17)(728,"div",25)(729,"span",26),iN(730," p-options"),Gl(731,"br"),sg()()(),Tl(732,"td",21)(733,"code",29),iN(734,"any[]"),sg()(),Tl(735,"td",23),iN(736,"-"),sg(),Tl(737,"td",24)(738,"p"),iN(739,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),Tl(740,"code"),iN(741,"PoSelectOption"),sg(),iN(742,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),Tl(743,"code"),iN(744,"PoSelectOptionGroup"),sg(),iN(745,"."),sg(),Tl(746,"p"),iN(747,"Caso esta lista estiver vazia, o model ser\xE1 "),Tl(748,"code"),iN(749,"undefined"),sg(),iN(750,"."),sg(),Tl(751,"blockquote")(752,"p"),iN(753,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),sg()(),Tl(754,"pre")(755,"code"),iN(756,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),sg()(),Tl(757,"blockquote")(758,"p"),iN(759,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),Tl(760,"code"),iN(761,"options"),sg(),iN(762," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),sg()(),Tl(763,"pre")(764,"code"),iN(765,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),sg()(),Tl(766,"p"),iN(767,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),sg()()(),Tl(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),iN(772," p-placeholder"),Gl(773,"br"),sg()()(),Tl(774,"td",21)(775,"code",27),iN(776,"string"),sg()(),Tl(777,"td",23),iN(778,"-"),sg(),Tl(779,"td",24)(780,"em")(781,"strong"),iN(782,"(opcional)"),sg()(),Tl(783,"p"),iN(784,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),sg()()(),Tl(785,"tr",16)(786,"td",17)(787,"div",25)(788,"span",26),iN(789," p-helper"),Gl(790,"br"),sg()()(),Tl(791,"td",21)(792,"code",30),iN(793,"PoHelperOptions "),sg(),Tl(794,"code",27),iN(795," string"),sg()(),Tl(796,"td",23),iN(797,"-"),sg(),Tl(798,"td",24)(799,"em")(800,"strong"),iN(801,"(opcional)"),sg()(),Tl(802,"p"),iN(803,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(804,"code"),iN(805,"p-label"),sg(),iN(806," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(807,"code"),iN(808,"p-label"),sg(),iN(809,"."),sg(),Tl(810,"blockquote")(811,"p"),iN(812,"Para mais informa\xE7\xF5es acesse: "),Tl(813,"a",31),iN(814,"https://po-ui.io/documentation/po-helper"),sg(),iN(815,"."),sg()(),Tl(816,"blockquote")(817,"p"),iN(818,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(819,"code"),iN(820,"p-additional-help-tooltip"),sg(),iN(821," e "),Tl(822,"code"),iN(823,"p-additional-help"),sg(),iN(824,") ser\xE1 ignorado."),sg()()()(),Tl(825,"tr",16)(826,"td",17)(827,"div",25)(828,"span",26),iN(829," p-readonly"),Gl(830,"br"),sg()()(),Tl(831,"td",21)(832,"code",28),iN(833,"boolean"),sg()(),Tl(834,"td",23)(835,"p")(836,"code"),iN(837,"false"),sg()()(),Tl(838,"td",24)(839,"em")(840,"strong"),iN(841,"(opcional)"),sg()(),Tl(842,"p"),iN(843,"Indica que o campo ser\xE1 somente para leitura."),sg()()(),Tl(844,"tr",16)(845,"td",17)(846,"div",25)(847,"span",26),iN(848," p-required"),Gl(849,"br"),sg()()(),Tl(850,"td",21)(851,"code",28),iN(852,"boolean"),sg()(),Tl(853,"td",23)(854,"p")(855,"code"),iN(856,"false"),sg()()(),Tl(857,"td",24)(858,"em")(859,"strong"),iN(860,"(opcional)"),sg()(),Tl(861,"p"),iN(862,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(863,"tr",16)(864,"td",17)(865,"div",25)(866,"span",26),iN(867," p-show-required"),Gl(868,"br"),sg()()(),Tl(869,"td",21)(870,"code",28),iN(871,"boolean"),sg()(),Tl(872,"td",23),iN(873,"-"),sg(),Tl(874,"td",24)(875,"p"),iN(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(877,"blockquote")(878,"p"),iN(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(880,"ul")(881,"li"),iN(882,"N\xE3o possuir "),Tl(883,"code"),iN(884,"p-help"),sg(),iN(885," e/ou "),Tl(886,"code"),iN(887,"p-label"),sg(),iN(888,"."),sg()()()(),Tl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),iN(893," p-size"),Gl(894,"br"),sg()()(),Tl(895,"td",21)(896,"code",27),iN(897,"string"),sg()(),Tl(898,"td",23)(899,"p")(900,"code"),iN(901,"medium"),sg()()(),Tl(902,"td",24)(903,"em")(904,"strong"),iN(905,"(opcional)"),sg()(),Tl(906,"p"),iN(907,"Define o tamanho do componente:"),sg(),Tl(908,"ul")(909,"li")(910,"code"),iN(911,"small"),sg(),iN(912,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(913,"li")(914,"code"),iN(915,"medium"),sg(),iN(916,": altura do input como 44px."),sg()(),Tl(917,"blockquote")(918,"p"),iN(919,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(920,"code"),iN(921,"medium"),sg(),iN(922,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(923,"a",32),iN(924,"po-theme"),sg(),iN(925,"."),sg()()()()(),Tl(926,"h3",12),iN(927,"M\xE9todos"),sg(),Tl(928,"table",33)(929,"tr",16)(930,"th",34)(931,"div",25)(932,"h4")(933,"span",26),iN(934," focus "),sg()()()()(),Tl(935,"tr",24)(936,"td",24)(937,"p"),iN(938,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(939,"p"),iN(940,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(941,"pre")(942,"code"),iN(943,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),sg()()()()(),Gl(944,"br"),Tl(945,"table",33)(946,"tr",16)(947,"th",34)(948,"div",25)(949,"h4")(950,"span",26),iN(951," showAdditionalHelp "),sg()()()()(),Tl(952,"tr",24)(953,"td",24)(954,"p"),iN(955,"M\xE9todo que exibe "),Tl(956,"code"),iN(957,"p-helper"),sg(),iN(958," ou executa a a\xE7\xE3o definida em "),Tl(959,"code"),iN(960,"p-helper{eventOnClick}"),sg(),iN(961," ou em "),Tl(962,"code"),iN(963,"p-additionalHelp"),sg(),iN(964,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(965,"code"),iN(966,"p-keydown"),sg(),iN(967,"."),sg(),Tl(968,"blockquote")(969,"p"),iN(970,"Exibe ou oculta o conte\xFAdo do componente "),Tl(971,"code"),iN(972,"po-helper"),sg(),iN(973," quando o componente estiver com foco."),sg()(),Tl(974,"pre")(975,"code"),iN(976,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),sg()(),Tl(977,"pre")(978,"code",35),iN(979,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(980,"br"),Tl(981,"h3"),iN(982,"Interfaces"),sg(),Tl(983,"h4",36)(984,"code",5),iN(985,"PoSelectOptionGroup"),sg()(),Tl(986,"div",2)(987,"p"),iN(988,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),Tl(989,"code"),iN(990,"PoSelectOption"),sg(),iN(991,"."),sg()(),Tl(992,"h4",12),iN(993,"Propriedades"),sg(),Tl(994,"table",13)(995,"tr",14)(996,"th",15),iN(997,"Nome"),sg(),Tl(998,"th",15),iN(999,"Tipo"),sg(),Tl(1e3,"th",15),iN(1001,"Descri\xE7\xE3o"),sg()(),Tl(1002,"tr",16)(1003,"td",17)(1004,"div",25)(1005,"span",26),iN(1006," label"),Gl(1007,"br"),sg()()(),Tl(1008,"td",21)(1009,"code",27),iN(1010,"string"),sg()(),Tl(1011,"td",24)(1012,"p"),iN(1013,"Label para denominar o nome do grupo."),sg()()(),Tl(1014,"tr",16)(1015,"td",17)(1016,"div",25)(1017,"span",26),iN(1018," options"),Gl(1019,"br"),sg()()(),Tl(1020,"td",21)(1021,"code",37),iN(1022,"Array<PoSelectOption>"),sg()(),Tl(1023,"td",24)(1024,"p"),iN(1025,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),sg()()()(),Tl(1026,"h4",36)(1027,"code",5),iN(1028,"PoSelectOption"),sg()(),Tl(1029,"div",2)(1030,"p"),iN(1031,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),sg()(),Tl(1032,"h4",12),iN(1033,"Propriedades"),sg(),Tl(1034,"table",13)(1035,"tr",14)(1036,"th",15),iN(1037,"Nome"),sg(),Tl(1038,"th",15),iN(1039,"Tipo"),sg(),Tl(1040,"th",15),iN(1041,"Descri\xE7\xE3o"),sg()(),Tl(1042,"tr",16)(1043,"td",17)(1044,"div",25)(1045,"span",26),iN(1046," label"),Gl(1047,"br"),sg()()(),Tl(1048,"td",21)(1049,"code",27),iN(1050,"string"),sg()(),Tl(1051,"td",24)(1052,"p"),iN(1053,"Label a ser utilizada nos itens da lista."),sg()()(),Tl(1054,"tr",16)(1055,"td",17)(1056,"div",25)(1057,"span",26),iN(1058," value"),Gl(1059,"br"),sg()()(),Tl(1060,"td",21)(1061,"code",27),iN(1062,"string "),sg(),Tl(1063,"code",38),iN(1064," number"),sg()(),Tl(1065,"td",24)(1066,"p"),iN(1067,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-select-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),sg()()()),p&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ee,Ce,ye,Pe,we],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:"",component:Te}],Me=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[DL.forChild(Je),DL]})}return a})();var Dt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[sr,Me]})}return a})();export{Dt as DocPoSelectModule};