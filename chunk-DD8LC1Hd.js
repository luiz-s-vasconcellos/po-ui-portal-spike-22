import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,I,c as f,aW as Yp,i as ib,cM as cY,cN as lm,bC as f3,L as Gl,O as nw,bM as vN,a7 as gN,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht$1,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,aJ as Whe,bH as k3,c9 as jhe,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,cn as o3,cO as ede,bD as Mde,cz as Pz,b5 as Ghe,a2 as JE,Q as we,av as Yl,aw as uo,ax as fo,cP as dhe,b6 as Yo,cG as HO,a4 as wN,cH as lN,a5 as bN,ba as vNe,a0 as FO,aq as gx,at as mx,cQ as kk,cR as Ok,a3 as sNe,J as yw,aA as Nx,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var at=()=>({value:"Option 1"}),lt=()=>({value:"Option 2"}),rt=(a,q)=>[a,q],Ae=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic"]],standalone:false,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&Gl(0,"po-combo",0),p&2&&nw("p-options",vN(3,rt,gN(1,at),gN(2,lt)));},dependencies:[f3],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo Basic"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-basic"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,mt,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ae],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0};}changeEvent(m){this.event=m;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(m){this.customLiterals=void 0;}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=false,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium";}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}];}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&"options"in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return [...m,{label:d,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs"]],standalone:false,decls:44,vars:62,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-compact-label","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=Sx();Tl(0,"po-combo",2),ww("ngModelChange",function(i){return Ky(d),sN(n.combo,i)||(n.combo=i),Xy(i)}),ht$1("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",3),Gl(3,"po-info",4)(4,"po-info",5),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0),Gl(8,"po-divider",6),Tl(9,"div",3)(10,"po-switch",7),ww("ngModelChange",function(i){return Ky(d),sN(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),Xy(i)}),sg(),r0(),Tl(11,"po-select",8),ww("ngModelChange",function(i){return Ky(d),sN(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),Xy(i)}),ht$1("p-change",function(){return n.optionsGroupSelection()}),sg(),r0(),Tl(12,"po-input",9),ww("ngModelChange",function(i){return Ky(d),sN(n.optionsGroup,i)||(n.optionsGroup=i),Xy(i)}),sg(),r0(),sg(),Gl(13,"po-divider",10),Tl(14,"div",3)(15,"po-input",11),ww("ngModelChange",function(i){return Ky(d),sN(n.option.label,i)||(n.option.label=i),Xy(i)}),sg(),r0(),Tl(16,"po-input",12),ww("ngModelChange",function(i){return Ky(d),sN(n.option.value,i)||(n.option.value=i),Xy(i)}),sg(),r0(),sg(),Tl(17,"div",3)(18,"po-button",13),ht$1("p-click",function(){return n.addOption()}),sg()()(),Gl(19,"po-divider"),Tl(20,"form",null,1)(22,"po-input",14),ww("ngModelChange",function(i){return Ky(d),sN(n.label,i)||(n.label=i),Xy(i)}),sg(),r0(),Tl(23,"po-input",15),ww("ngModelChange",function(i){return Ky(d),sN(n.help,i)||(n.help=i),Xy(i)}),sg(),r0(),Tl(24,"po-input",16),ww("ngModelChange",function(i){return Ky(d),sN(n.helperText,i)||(n.helperText=i),Xy(i)}),sg(),r0(),Tl(25,"po-input",17),ww("ngModelChange",function(i){return Ky(d),sN(n.placeholder,i)||(n.placeholder=i),Xy(i)}),sg(),r0(),Tl(26,"po-input",18),ww("ngModelChange",function(i){return Ky(d),sN(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),Xy(i)}),sg(),r0(),Tl(27,"div",3)(28,"po-checkbox-group",19),ww("ngModelChange",function(i){return Ky(d),sN(n.properties,i)||(n.properties=i),Xy(i)}),sg(),r0(),Tl(29,"po-radio-group",20),ww("ngModelChange",function(i){return Ky(d),sN(n.icon,i)||(n.icon=i),Xy(i)}),sg(),r0(),Tl(30,"po-radio-group",21),ww("ngModelChange",function(i){return Ky(d),sN(n.filterMode,i)||(n.filterMode=i),Xy(i)}),sg(),r0(),Tl(31,"po-radio-group",22),ww("ngModelChange",function(i){return Ky(d),sN(n.size,i)||(n.size=i),Xy(i)}),sg(),r0(),Tl(32,"po-radio-group",23),ww("ngModelChange",function(i){return Ky(d),sN(n.listboxPosition,i)||(n.listboxPosition=i),Xy(i)}),sg(),r0(),sg(),Tl(33,"div",3)(34,"po-input",24),ww("ngModelChange",function(i){return Ky(d),sN(n.filterService,i)||(n.filterService=i),Xy(i)}),sg(),r0(),Tl(35,"po-input",25),ww("ngModelChange",function(i){return Ky(d),sN(n.literals,i)||(n.literals=i),Xy(i)}),ht$1("p-change",function(){return n.changeLiterals()}),sg(),r0(),sg(),Tl(36,"div",3)(37,"po-input",26),ww("ngModelChange",function(i){return Ky(d),sN(n.fieldValue,i)||(n.fieldValue=i),Xy(i)}),sg(),r0(),Tl(38,"po-input",27),ww("ngModelChange",function(i){return Ky(d),sN(n.fieldLabel,i)||(n.fieldLabel=i),Xy(i)}),sg(),r0(),sg(),Tl(39,"div",3)(40,"po-number",28),ww("ngModelChange",function(i){return Ky(d),sN(n.debounceTime,i)||(n.debounceTime=i),Xy(i)}),sg(),r0(),Tl(41,"po-number",29),ww("ngModelChange",function(i){return Ky(d),sN(n.filterMinlength,i)||(n.filterMinlength=i),Xy(i)}),sg(),r0(),sg(),Tl(42,"div",3)(43,"po-button",30),ht$1("p-click",function(){return n.restore()}),sg()()();}if(p&2){let d=Fx(7);Ew("ngModel",n.combo),nw("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-listbox-control-position",n.listboxPosition),o0(),Vp(3),nw("p-value",n.combo),Vp(),nw("p-value",n.event),Vp(6),Ew("ngModel",n.comboOptionGroupSwitch),o0(),Vp(),Ew("ngModel",n.selectedOptionsGroup),nw("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),o0(),Vp(),Ew("ngModel",n.optionsGroup),nw("p-disabled",!n.comboOptionGroupSwitch),o0(),Vp(3),Ew("ngModel",n.option.label),o0(),Vp(),Ew("ngModel",n.option.value),o0(),Vp(2),nw("p-disabled",d.form.invalid),Vp(4),Ew("ngModel",n.label),o0(),Vp(),Ew("ngModel",n.help),o0(),Vp(),Ew("ngModel",n.helperText),o0(),Vp(),Ew("ngModel",n.placeholder),o0(),Vp(),Ew("ngModel",n.fieldErrorMessage),o0(),Vp(2),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0(),Vp(),Ew("ngModel",n.icon),nw("p-options",n.iconsOptions),o0(),Vp(),Ew("ngModel",n.filterMode),nw("p-options",n.filterModeOptions),o0(),Vp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),o0(),Vp(),Ew("ngModel",n.listboxPosition),nw("p-options",n.listboxPositionOptions),o0(),Vp(2),Ew("ngModel",n.filterService),o0(),Vp(),Ew("ngModel",n.literals),o0(),Vp(2),Ew("ngModel",n.fieldValue),o0(),Vp(),Ew("ngModel",n.fieldLabel),o0(),Vp(2),Ew("ngModel",n.debounceTime),o0(),Vp(),Ew("ngModel",n.filterMinlength),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,b3,f3,L3,Bhe,Tde,Whe,k3,jhe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo Labs"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-helper]="helperText"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
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
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  helperText: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
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
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-labs"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ct,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ge],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{getcities(){return [{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return [{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var bt=["schedulingForm"];function gt(a,q){if(a&1&&(Tl(0,"div",3),Gl(1,"po-avatar",15),Tl(2,"p",14),iN(3),sg()()),a&2){let m=Nx().$implicit,p=Nx();Vp(),nw("p-src",p.getStateByLabel(m.label)),Vp(2),yw(m.label);}}function ht(a,q){if(a&1&&(Tl(0,"div",14),iN(1),sg()),a&2){let m=Nx().$implicit;Vp(),yw(m.label);}}function St(a,q){if(a&1&&gx(0,gt,4,2,"div",3)(1,ht,2,1,"div",14),a&2){let m=q.$implicit;mx(m.options?0:1);}}var ze=(()=>{class a{poNotification=f(Yp);schedulingService=f(Ee);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty();}confirmPreAppointment(m=""){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset();}getStateByLabel(m){return `https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[m]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&Yl(bt,7),p&2){let d;uo(d=fo())&&(n.form=d.first);}},standalone:false,features:[we([Ee])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1","sample-combo-avatar-bg",3,"p-src"]],template:function(p,n){if(p&1){let d=Sx();Tl(0,"div",1)(1,"div",2),iN(2,"Pre-appointment scheduling"),sg()(),Tl(3,"form",null,0)(5,"div",3)(6,"po-input",4),ww("ngModelChange",function(i){return Ky(d),sN(n.name,i)||(n.name=i),Xy(i)}),sg(),r0(),Tl(7,"po-email",5),ww("ngModelChange",function(i){return Ky(d),sN(n.email,i)||(n.email=i),Xy(i)}),sg(),r0(),sg(),Tl(8,"div",3)(9,"po-datepicker",6),ww("ngModelChange",function(i){return Ky(d),sN(n.birthday,i)||(n.birthday=i),Xy(i)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(i){return Ky(d),sN(n.phone,i)||(n.phone=i),Xy(i)}),sg(),r0(),sg(),Tl(11,"div",3)(12,"po-combo",8),ww("ngModelChange",function(i){return Ky(d),sN(n.city,i)||(n.city=i),Xy(i)}),JE(13,St,2,1,"ng-template",9),sg(),r0(),Tl(14,"po-select",10),ww("ngModelChange",function(i){return Ky(d),sN(n.typeScheduling,i)||(n.typeScheduling=i),Xy(i)}),sg(),r0(),Tl(15,"po-combo",11),ww("ngModelChange",function(i){return Ky(d),sN(n.medicalSpecialty,i)||(n.medicalSpecialty=i),Xy(i)}),sg(),r0(),sg(),Tl(16,"div",3)(17,"po-textarea",12),ww("ngModelChange",function(i){return Ky(d),sN(n.informations,i)||(n.informations=i),Xy(i)}),sg(),r0(),sg(),Tl(18,"div",3)(19,"po-button",13),ht$1("p-click",function(){return n.confirmPreAppointment(n.name)}),sg()()();}if(p&2){let d=Fx(4);Vp(6),Ew("ngModel",n.name),o0(),Vp(),Ew("ngModel",n.email),o0(),Vp(2),Ew("ngModel",n.birthday),o0(),Vp(),Ew("ngModel",n.phone),o0(),Vp(2),Ew("ngModel",n.city),nw("p-options",n.citiesOptions),o0(),Vp(2),Ew("ngModel",n.typeScheduling),nw("p-options",n.typeSchedulings),o0(),Vp(),Ew("ngModel",n.medicalSpecialty),nw("p-options",n.medicalSpecialtyOptions),o0(),Vp(2),Ew("ngModel",n.informations),o0(),Vp(2),nw("p-disabled",d.invalid);}},dependencies:[oY,nY,rY,Sk,Ck,o3,Qt,f3,ede,Mde,Pz,L3,Whe,Ghe],styles:[".sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}"],changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo - Scheduling"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1 sample-combo-avatar-bg"
              p-size="xs"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  styleUrls: ['./sample-po-combo-scheduling.component.css'],
  providers: [SamplePoComboSchedulingService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),sg(),Tl(21,"label",6),iN(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),iN(28,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.css"),sg(),Tl(29,"pre",11),iN(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-combo-scheduling"),sg(),Gl(33,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Et,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ze],encapsulation:2,changeDetection:1})}return a})();var vt=["transferForm"];function yt(a,q){if(a&1&&(Tl(0,"div",3),Gl(1,"po-avatar",15),Tl(2,"div",16)(3,"div",17),iN(4),sg(),Tl(5,"div",18),iN(6),sg()()()),a&2){let m=q.$implicit;Vp(4),yw(m.label),Vp(2),fg("Account: ",m.value);}}var Ue=(()=>{class a{poNotification=f(Yp);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset();}transfer(){this.poModal.open();}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&Yl(vt,7)(Yo,7),p&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.poModal=d.first);}},standalone:false,decls:23,vars:15,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let d=Sx();Tl(0,"div",1)(1,"div",2),iN(2,"Banking Transfer"),sg()(),Tl(3,"form",null,0)(5,"div",3)(6,"po-select",4),ww("ngModelChange",function(i){return Ky(d),sN(n.typeAccount,i)||(n.typeAccount=i),Xy(i)}),sg(),r0(),Tl(7,"po-combo",5),ww("ngModelChange",function(i){return Ky(d),sN(n.contact,i)||(n.contact=i),Xy(i)}),JE(8,yt,7,2,"ng-template",6),sg(),r0(),sg(),Tl(9,"div",3)(10,"po-decimal",7),ww("ngModelChange",function(i){return Ky(d),sN(n.value,i)||(n.value=i),Xy(i)}),sg(),r0(),Tl(11,"po-datepicker",8),ww("ngModelChange",function(i){return Ky(d),sN(n.dateTransfer,i)||(n.dateTransfer=i),Xy(i)}),sg(),r0(),sg(),Tl(12,"div",3)(13,"po-button",9),ht$1("p-click",function(){return n.transfer()}),sg()()(),Tl(14,"po-modal",10)(15,"div",3),Gl(16,"po-info",11)(17,"po-info",12),sg(),Gl(18,"po-divider"),Tl(19,"div",3),Gl(20,"po-info",13)(21,"po-info",14),wN(22,"date"),sg()();}if(p&2){let d=Fx(4);Vp(6),Ew("ngModel",n.typeAccount),nw("p-options",n.typeAccounts),o0(),Vp(),Ew("ngModel",n.contact),o0(),Vp(3),Ew("ngModel",n.value),o0(),Vp(),Ew("ngModel",n.dateTransfer),o0(),Vp(2),nw("p-disabled",d.invalid),Vp(),nw("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),Vp(2),nw("p-value",n.typeAccount),Vp(),nw("p-value",n.contact),Vp(3),nw("p-value",n.value),Vp(),nw("p-value",lN(bN(22,13,n.dateTransfer)));}},dependencies:[oY,nY,rY,Sk,Ck,o3,Qt,mv,f3,ede,Mde,dhe,Whe,jhe,Yo,HO],encapsulation:2,changeDetection:1})}return a})();var wt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo - Banking Transfer"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-transfer"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,wt,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ue],encapsulation:2,changeDetection:1})}return a})();function Pt(a,q){if(a&1&&(Tl(0,"div",0),Gl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),sg()),a&2){let m=q;Vp(),nw("p-value",m.name),Vp(),nw("p-value",m.nickname),Vp(),nw("p-value",m.email);}}var Ke=(()=>{class a{http=f(ib);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Tl(0,"div",0)(1,"po-widget",1),ht$1("p-primary-action",function(){return n.knowMore(n.heroName)}),Tl(2,"po-combo",2),ww("ngModelChange",function(c){return sN(n.heroName,c)||(n.heroName=c),c}),ht$1("p-change",function(c){return n.onChangeHero(c)}),sg(),r0(),gx(3,Pt,4,3,"div",0),wN(4,"async"),sg()()),p&2){let d;Vp(),nw("p-primary-label",n.knowMoreLabel),Vp(),Ew("ngModel",n.heroName),o0(),Vp(),mx((d=bN(4,3,n.hero$))?3:-1,d);}},dependencies:[nY,Sk,f3,jhe,vNe,FO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo - Heroes"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-heroes"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Tt,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ke],encapsulation:2,changeDetection:1})}return a})();function Dt(a,q){if(a&1&&(Tl(0,"div",0),Gl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),sg()),a&2){let m=q;Vp(),nw("p-value",m.name),Vp(),nw("p-value",m.nickname),Vp(),nw("p-value",m.email);}}var Ye=(()=>{class a{http=f(ib);formBuilder=f(cY);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,lm.required]});}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let m=this.form.get("hero").value;window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:false,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Tl(0,"div",0)(1,"po-widget",1),ht$1("p-primary-action",function(){return n.knowMore()}),Tl(2,"div",2)(3,"po-combo",3),ht$1("p-change",function(c){return n.onChangeHero(c)}),sg(),r0(),sg(),gx(4,Dt,4,3,"div",0),wN(5,"async"),sg()()),p&2){let d;Vp(),nw("p-primary-label",n.knowMoreLabel),Vp(),nw("formGroup",n.form),Vp(),o0(),Vp(),mx((d=bN(5,3,n.hero$))?4:-1,d);}},dependencies:[nY,rY,kk,Ok,f3,jhe,vNe,FO],encapsulation:2,changeDetection:1})}return a})();var Ot=a=>({"docs-sample-code-tabs":a}),Xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo - Heroes Reactive Form"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-heroes-reactive-form"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ot,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ye],encapsulation:2,changeDetection:1})}return a})();function qt(a,q){if(a&1&&(Tl(0,"div",0),Gl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),sg()),a&2){let m=q;Vp(),nw("p-value",m.name),Vp(),nw("p-value",m.nickname),Vp(),nw("p-value",m.email);}}var Ze=(()=>{class a{http=f(ib);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m);}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Tl(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),ww("ngModelChange",function(c){return sN(n.peopleName,c)||(n.peopleName=c),c}),ht$1("p-change",function(c){return n.onChangePeople(c)}),sg(),r0(),gx(3,qt,4,3,"div",0),wN(4,"async"),sg()()),p&2){let d;Vp(2),Ew("ngModel",n.peopleName),nw("p-infinite-scroll",true),o0(),Vp(),mx((d=bN(4,3,n.people$))?3:-1,d);}},dependencies:[nY,Sk,f3,jhe,vNe,FO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a}),$e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo - Inifity Scroll"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-infinity-scroll"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Nt,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ze],encapsulation:2,changeDetection:1})}return a})();var Bt=["bookingForm"],Ht=["datepicker"],et=(()=>{class a{poNotification=f(Yp);form;datepickerComponent;adults=1;category=false;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus();}onChangeParams(m){this.filterParams=m?{category:"Luxo"}:{},this.hotel=void 0;}formReset(){this.form.reset({adults:1,category:false,children:0,rooms:1});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&Yl(Bt,7)(Ht,7),p&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.datepickerComponent=d.first);}},standalone:false,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let d=Sx();Tl(0,"div",2)(1,"div",3),iN(2,"Booking a Hotel"),sg()(),Tl(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),ww("ngModelChange",function(i){return Ky(d),sN(n.checkin,i)||(n.checkin=i),Xy(i)}),sg(),r0(),Tl(8,"po-datepicker",6),ww("ngModelChange",function(i){return Ky(d),sN(n.checkout,i)||(n.checkout=i),Xy(i)}),sg(),r0(),Tl(9,"po-switch",7),ww("ngModelChange",function(i){return Ky(d),sN(n.category,i)||(n.category=i),Xy(i)}),ht$1("p-change",function(i){return n.onChangeParams(i)}),sg(),r0(),sg(),Tl(10,"div",4)(11,"po-select",8),ww("ngModelChange",function(i){return Ky(d),sN(n.rooms,i)||(n.rooms=i),Xy(i)}),sg(),r0(),Tl(12,"po-select",9),ww("ngModelChange",function(i){return Ky(d),sN(n.children,i)||(n.children=i),Xy(i)}),sg(),r0(),Tl(13,"po-select",10),ww("ngModelChange",function(i){return Ky(d),sN(n.adults,i)||(n.adults=i),Xy(i)}),sg(),r0(),sg(),Tl(14,"div",4)(15,"po-combo",11),ww("ngModelChange",function(i){return Ky(d),sN(n.hotel,i)||(n.hotel=i),Xy(i)}),sg(),r0(),sg(),Tl(16,"div",4)(17,"po-button",12),ht$1("p-click",function(){return n.booking()}),sg()()();}if(p&2){let d=Fx(4);Vp(6),Ew("ngModel",n.checkin),nw("p-max-date",n.checkout),o0(),Vp(2),Ew("ngModel",n.checkout),nw("p-min-date",n.checkin),o0(),Vp(),Ew("ngModel",n.category),o0(),Vp(2),Ew("ngModel",n.rooms),nw("p-options",n.roomsOptions),o0(),Vp(),Ew("ngModel",n.children),nw("p-options",n.childrenOptions),o0(),Vp(),Ew("ngModel",n.adults),nw("p-options",n.adultsOptions),o0(),Vp(2),Ew("ngModel",n.hotel),nw("p-filter-params",n.filterParams),o0(),Vp(2),nw("p-disabled",d.invalid);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,f3,Mde,Whe,k3],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a}),tt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Combo - Booking Hotel"),sg(),Tl(4,"a",2),ht$1("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-combo-hotels"),sg(),Gl(23,"hr")),p&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,It,n.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-doc"]],standalone:false,decls:1854,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoComboComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O "),Tl(24,"code"),iN(25,"po-combo"),sg(),iN(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),sg(),Tl(27,"p"),iN(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),sg(),Tl(29,"p"),iN(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),Tl(31,"em"),iN(32,"mouse"),sg(),iN(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Tl(34,"em"),iN(35,"Enter"),sg(),iN(36," na op\xE7\xE3o que desejar."),sg(),Tl(37,"p"),iN(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Tl(39,"code"),iN(40,"p-filter-service"),sg(),iN(41,"."),sg(),Tl(42,"p"),iN(43,"Em "),Tl(44,"code"),iN(45,"p-filter-mode"),sg(),iN(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),sg(),Tl(47,"p"),iN(48,"O "),Tl(49,"code"),iN(50,"po-combo"),sg(),iN(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),Tl(52,"em"),iN(53,"Esc"),sg(),iN(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Tl(55,"em"),iN(56,"Enter"),sg(),iN(57,"."),sg(),Tl(58,"p"),iN(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),sg(),Tl(60,"h4"),iN(61,"Tokens customiz\xE1veis"),sg(),Tl(62,"p"),iN(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(64,"blockquote")(65,"p"),iN(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(67,"a",6),iN(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(69,"."),sg()(),Tl(70,"table")(71,"thead")(72,"tr")(73,"th"),iN(74,"Propriedade"),sg(),Tl(75,"th"),iN(76,"Descri\xE7\xE3o"),sg(),Tl(77,"th"),iN(78,"Valor Padr\xE3o"),sg()()(),Tl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),iN(83,"Default Values"),sg()(),Gl(84,"td")(85,"td"),sg(),Tl(86,"tr")(87,"td")(88,"code"),iN(89,"--font-family"),sg()(),Tl(90,"td"),iN(91,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(92,"td")(93,"code"),iN(94,"var(--font-family-theme)"),sg()()(),Tl(95,"tr")(96,"td")(97,"code"),iN(98,"--font-size"),sg()(),Tl(99,"td"),iN(100,"Tamanho da fonte"),sg(),Tl(101,"td")(102,"code"),iN(103,"var(--font-size-default)"),sg()()(),Tl(104,"tr")(105,"td")(106,"code"),iN(107,"--text-color"),sg()(),Tl(108,"td"),iN(109,"Cor do texto"),sg(),Tl(110,"td")(111,"code"),iN(112,"var(--color-neutral-dark-90)"),sg()()(),Tl(113,"tr")(114,"td")(115,"code"),iN(116,"--text-color-placeholder"),sg()(),Tl(117,"td"),iN(118,"Cor do texto no placeholder"),sg(),Tl(119,"td")(120,"code"),iN(121,"var(--color-neutral-light-30)"),sg()()(),Tl(122,"tr")(123,"td")(124,"code"),iN(125,"--color"),sg()(),Tl(126,"td"),iN(127,"Cor principal do Combo"),sg(),Tl(128,"td")(129,"code"),iN(130,"var(--color-neutral-dark-70)"),sg()()(),Tl(131,"tr")(132,"td")(133,"code"),iN(134,"--background"),sg()(),Tl(135,"td"),iN(136,"Cor de background"),sg(),Tl(137,"td")(138,"code"),iN(139,"var(--color-neutral-light-05)"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),iN(143,"--border-radius"),sg()(),Tl(144,"td"),iN(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(146,"td")(147,"code"),iN(148,"var(--border-width-lg)"),sg()()(),Tl(149,"tr")(150,"td")(151,"code"),iN(152,"--min-width"),sg()(),Tl(153,"td"),iN(154,"Largura m\xEDnima do combo"),sg(),Tl(155,"td")(156,"code"),iN(157,"150px"),sg()()(),Tl(158,"tr")(159,"td")(160,"code"),iN(161,"--field-container-title-justify"),sg()(),Tl(162,"td"),iN(163,"Alinhamento horizontal do t\xEDtulo ("),Tl(164,"code"),iN(165,"justify-content"),sg(),iN(166,")"),sg(),Tl(167,"td")(168,"code"),iN(169,"space-between"),sg()()(),Tl(170,"tr")(171,"td")(172,"code"),iN(173,"--field-container-title-flex"),sg()(),Tl(174,"td"),iN(175,"Flex do t\xEDtulo ("),Tl(176,"code"),iN(177,"flex"),sg(),iN(178,")"),sg(),Tl(179,"td")(180,"code"),iN(181,"1 auto"),sg()()(),Tl(182,"tr")(183,"td")(184,"strong"),iN(185,"Hover"),sg()(),Gl(186,"td")(187,"td"),sg(),Tl(188,"tr")(189,"td")(190,"code"),iN(191,"--color-hover"),sg()(),Tl(192,"td"),iN(193,"Cor principal no estado hover"),sg(),Tl(194,"td")(195,"code"),iN(196,"var(--color-action-hover)"),sg()()(),Tl(197,"tr")(198,"td")(199,"code"),iN(200,"--background-hover"),sg()(),Tl(201,"td"),iN(202,"Cor de background no estado hover"),sg(),Tl(203,"td")(204,"code"),iN(205,"var(--color-brand-01-lightest)"),sg()()(),Tl(206,"tr")(207,"td")(208,"strong"),iN(209,"Focused"),sg()(),Gl(210,"td")(211,"td"),sg(),Tl(212,"tr")(213,"td")(214,"code"),iN(215,"--color-focused"),sg()(),Tl(216,"td"),iN(217,"Cor principal no estado de focus"),sg(),Tl(218,"td")(219,"code"),iN(220,"var(--color-action-default)"),sg()()(),Tl(221,"tr")(222,"td")(223,"code"),iN(224,"--outline-color-focused"),sg()(),Tl(225,"td"),iN(226,"Cor do outline do estado de focus"),sg(),Tl(227,"td")(228,"code"),iN(229,"var(--color-action-focus)"),sg()()(),Tl(230,"tr")(231,"td")(232,"strong"),iN(233,"Error"),sg()(),Gl(234,"td")(235,"td"),sg(),Tl(236,"tr")(237,"td")(238,"code"),iN(239,"--color-error"),sg()(),Tl(240,"td"),iN(241,"Cor principal no estado de erro"),sg(),Tl(242,"td")(243,"code"),iN(244,"var(--color-feedback-negative-base)"),sg()()(),Tl(245,"tr")(246,"td")(247,"strong"),iN(248,"Disabled"),sg()(),Gl(249,"td")(250,"td"),sg(),Tl(251,"tr")(252,"td")(253,"code"),iN(254,"--color-disabled"),sg()(),Tl(255,"td"),iN(256,"Cor principal no estado disabled"),sg(),Tl(257,"td")(258,"code"),iN(259,"var(--color-neutral-light-30)"),sg()()(),Tl(260,"tr")(261,"td")(262,"code"),iN(263,"--background-disabled"),sg()(),Tl(264,"td"),iN(265,"Cor de background no estado disabled"),sg(),Tl(266,"td")(267,"code"),iN(268,"var(--color-neutral-light-20)"),sg()()(),Tl(269,"tr")(270,"td")(271,"strong"),iN(272,"Suggestion"),sg()(),Gl(273,"td")(274,"td"),sg(),Tl(275,"tr")(276,"td")(277,"code"),iN(278,"--text-color-suggestion"),sg()(),Tl(279,"td"),iN(280,"Cor do texto no estado suggestion"),sg(),Tl(281,"td")(282,"code"),iN(283,"var(--color-neutral-mid-60)"),sg()()(),Tl(284,"tr")(285,"td")(286,"code"),iN(287,"--background-suggestion"),sg()(),Tl(288,"td"),iN(289,"Cor do background no estado suggestion"),sg(),Tl(290,"td")(291,"code"),iN(292,"var(--color-brand-01-lightest)"),sg()()()()()(),Tl(293,"div",7)(294,"h4",8),iN(295,"Seletor"),sg(),Tl(296,"pre",9),iN(297,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),sg()(),Tl(298,"h4",10),iN(299,"Propriedades"),sg(),Tl(300,"table",11)(301,"tr",12)(302,"th",13),iN(303,"Nome"),sg(),Tl(304,"th",13),iN(305,"Tipo"),sg(),Tl(306,"th",13),iN(307,"Padr\xE3o"),sg(),Tl(308,"th",13),iN(309,"Descri\xE7\xE3o"),sg()(),Tl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),iN(314," (p-additional-help)"),Gl(315,"br"),sg()(),Tl(316,"div",18),iN(317,"Deprecated"),sg()(),Tl(318,"td",19)(319,"code",20),iN(320,"EventEmitter"),sg()(),Tl(321,"td",21),iN(322,"-"),sg(),Tl(323,"td",22)(324,"em")(325,"strong"),iN(326,"(opcional)"),sg()(),Tl(327,"p"),iN(328,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(329,"blockquote")(330,"p"),iN(331,"Essa propriedade est\xE1 "),Tl(332,"strong"),iN(333,"depreciada"),sg(),iN(334," e ser\xE1 removida na vers\xE3o "),Tl(335,"code"),iN(336,"23.x.x"),sg(),iN(337,". Recomendamos utilizar a propriedade "),Tl(338,"code"),iN(339,"p-helper"),sg(),iN(340," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),iN(345," p-additional-help-tooltip"),Gl(346,"br"),sg()(),Tl(347,"div",18),iN(348,"Deprecated"),sg()(),Tl(349,"td",19)(350,"code",25),iN(351,"string"),sg()(),Tl(352,"td",21),iN(353,"-"),sg(),Tl(354,"td",22)(355,"em")(356,"strong"),iN(357,"(opcional)"),sg()(),Tl(358,"p"),iN(359,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(360,"code"),iN(361,"po-helper"),sg(),iN(362,`.
`),Tl(363,"strong"),iN(364,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(365,"blockquote")(366,"p"),iN(367,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(368,"blockquote")(369,"p"),iN(370,"Essa propriedade est\xE1 "),Tl(371,"strong"),iN(372,"depreciada"),sg(),iN(373," e ser\xE1 removida na vers\xE3o "),Tl(374,"code"),iN(375,"23.x.x"),sg(),iN(376,". Recomendamos utilizar a propriedade "),Tl(377,"code"),iN(378,"p-helper"),sg(),iN(379," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(380,"tr",14)(381,"td",15)(382,"div",23)(383,"span",24),iN(384," p-append-in-body"),Gl(385,"br"),sg()()(),Tl(386,"td",19)(387,"code",26),iN(388,"boolean"),sg()(),Tl(389,"td",21)(390,"p")(391,"code"),iN(392,"false"),sg()()(),Tl(393,"td",22)(394,"em")(395,"strong"),iN(396,"(opcional)"),sg()(),Tl(397,"p"),iN(398,"Define que o "),Tl(399,"code"),iN(400,"listbox"),sg(),iN(401," e/ou popover ("),Tl(402,"code"),iN(403,"p-helper"),sg(),iN(404," e/ou "),Tl(405,"code"),iN(406,"p-error-limit"),sg(),iN(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(408,"blockquote")(409,"p"),iN(410,"Quando utilizado com "),Tl(411,"code"),iN(412,"p-helper"),sg(),iN(413,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(414,"tr",14)(415,"td",15)(416,"div",23)(417,"span",24),iN(418," p-auto-focus"),Gl(419,"br"),sg()()(),Tl(420,"td",19)(421,"code",26),iN(422,"boolean"),sg()(),Tl(423,"td",21)(424,"p")(425,"code"),iN(426,"false"),sg()()(),Tl(427,"td",22)(428,"em")(429,"strong"),iN(430,"(opcional)"),sg()(),Tl(431,"p"),iN(432,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(433,"blockquote")(434,"p"),iN(435,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),iN(440," (p-blur)"),Gl(441,"br"),sg()()(),Tl(442,"td",19)(443,"code",20),iN(444,"EventEmitter"),sg()(),Tl(445,"td",21),iN(446,"-"),sg(),Tl(447,"td",22)(448,"em")(449,"strong"),iN(450,"(opcional)"),sg()(),Tl(451,"p"),iN(452,"Evento disparado ao sair do campo."),sg()()(),Tl(453,"tr",14)(454,"td",15)(455,"div",23)(456,"span",24),iN(457," p-cache"),Gl(458,"br"),sg()()(),Tl(459,"td",19)(460,"code",26),iN(461,"boolean"),sg()(),Tl(462,"td",21)(463,"p")(464,"code"),iN(465,"true"),sg()()(),Tl(466,"td",22)(467,"em")(468,"strong"),iN(469,"(opcional)"),sg()(),Tl(470,"p"),iN(471,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),sg(),Tl(472,"blockquote")(473,"p"),iN(474,"Caso o valor seja "),Tl(475,"code"),iN(476,"false"),sg(),iN(477,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),sg()()()(),Tl(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),iN(482," (p-change)"),Gl(483,"br"),sg()()(),Tl(484,"td",19)(485,"code",20),iN(486,"EventEmitter"),sg()(),Tl(487,"td",21),iN(488,"-"),sg(),Tl(489,"td",22)(490,"em")(491,"strong"),iN(492,"(opcional)"),sg()(),Tl(493,"p"),iN(494,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),sg(),Tl(495,"blockquote")(496,"p"),iN(497,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),Tl(498,"code"),iN(499,"p-emit-object-value"),sg(),iN(500,"."),sg()()()(),Tl(501,"tr",14)(502,"td",15)(503,"div",23)(504,"span",24),iN(505," p-change-on-enter"),Gl(506,"br"),sg()()(),Tl(507,"td",19)(508,"code",26),iN(509,"boolean"),sg()(),Tl(510,"td",21)(511,"p")(512,"code"),iN(513,"false"),sg()()(),Tl(514,"td",22)(515,"em")(516,"strong"),iN(517,"(opcional)"),sg()(),Tl(518,"p"),iN(519,"Indica que o evento "),Tl(520,"code"),iN(521,"p-change"),sg(),iN(522,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),sg()()(),Tl(523,"tr",14)(524,"td",15)(525,"div",23)(526,"span",24),iN(527," p-clean"),Gl(528,"br"),sg()()(),Tl(529,"td",19)(530,"code",26),iN(531,"boolean"),sg()(),Tl(532,"td",21),iN(533,"-"),sg(),Tl(534,"td",22)(535,"em")(536,"strong"),iN(537,"(opcional)"),sg()(),Tl(538,"p"),iN(539,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Tl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),iN(544," p-compact-label"),Gl(545,"br"),sg()()(),Tl(546,"td",19)(547,"code",26),iN(548,"boolean"),sg()(),Tl(549,"td",21)(550,"p")(551,"code"),iN(552,"false"),sg()()(),Tl(553,"td",22)(554,"em")(555,"strong"),iN(556,"(opcional)"),sg()(),Tl(557,"p"),iN(558,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(559,"p"),iN(560,"Quando habilitado ("),Tl(561,"code"),iN(562,"true"),sg(),iN(563,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(564,"ul")(565,"li")(566,"code"),iN(567,"po-label"),sg()(),Tl(568,"li")(569,"code"),iN(570,"p-requirement (showRequired)"),sg()(),Tl(571,"li")(572,"code"),iN(573,"po-helper"),sg()()(),Tl(574,"p"),iN(575,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(576,"p"),iN(577,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(578,"ul")(579,"li")(580,"code"),iN(581,"--field-container-title-justify"),sg()(),Tl(582,"li")(583,"code"),iN(584,"--field-container-title-flex"),sg()()(),Tl(585,"p"),iN(586,"Exemplo:"),sg(),Tl(587,"pre")(588,"code"),iN(589,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(590,"p"),iN(591,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),iN(596," p-debounce-time"),Gl(597,"br"),sg()()(),Tl(598,"td",19)(599,"code",27),iN(600,"number"),sg()(),Tl(601,"td",21)(602,"p")(603,"code"),iN(604,"400"),sg()()(),Tl(605,"td",22)(606,"em")(607,"strong"),iN(608,"(opcional)"),sg()(),Tl(609,"p"),iN(610,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Tl(611,"code"),iN(612,"p-filter-service"),sg(),iN(613,")."),sg()()(),Tl(614,"tr",14)(615,"td",15)(616,"div",23)(617,"span",24),iN(618," p-disabled"),Gl(619,"br"),sg()()(),Tl(620,"td",19)(621,"code",26),iN(622,"boolean"),sg()(),Tl(623,"td",21)(624,"p")(625,"code"),iN(626,"false"),sg()()(),Tl(627,"td",22)(628,"em")(629,"strong"),iN(630,"(opcional)"),sg()(),Tl(631,"p"),iN(632,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),iN(637," p-disabled-init-filter"),Gl(638,"br"),sg()()(),Tl(639,"td",19)(640,"code",26),iN(641,"boolean"),sg()(),Tl(642,"td",21)(643,"p")(644,"code"),iN(645,"false"),sg()()(),Tl(646,"td",22)(647,"em")(648,"strong"),iN(649,"(opcional)"),sg()(),Tl(650,"p"),iN(651,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),sg()()(),Tl(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),iN(656," p-disabled-tab-filter"),Gl(657,"br"),sg()()(),Tl(658,"td",19)(659,"code",26),iN(660,"boolean"),sg()(),Tl(661,"td",21)(662,"p")(663,"code"),iN(664,"false"),sg()()(),Tl(665,"td",22)(666,"em")(667,"strong"),iN(668,"(opcional)"),sg()(),Tl(669,"p"),iN(670,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),sg()()(),Tl(671,"tr",14)(672,"td",15)(673,"div",23)(674,"span",24),iN(675," p-emit-object-value"),Gl(676,"br"),sg()()(),Tl(677,"td",19)(678,"code",26),iN(679,"boolean"),sg()(),Tl(680,"td",21)(681,"p")(682,"code"),iN(683,"false"),sg()()(),Tl(684,"td",22)(685,"em")(686,"strong"),iN(687,"(opcional)"),sg()(),Tl(688,"p"),iN(689,"Se verdadeiro, o evento "),Tl(690,"code"),iN(691,"p-change"),sg(),iN(692," receber\xE1 como argumento o "),Tl(693,"code"),iN(694,"PoComboOption"),sg(),iN(695," referente \xE0 op\xE7\xE3o selecionada."),sg()()(),Tl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),iN(700," p-error-limit"),Gl(701,"br"),sg()()(),Tl(702,"td",19)(703,"code",26),iN(704,"boolean"),sg()(),Tl(705,"td",21)(706,"p")(707,"code"),iN(708,"false"),sg()()(),Tl(709,"td",22)(710,"em")(711,"strong"),iN(712,"(opcional)"),sg()(),Tl(713,"p"),iN(714,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(715,"blockquote")(716,"p"),iN(717,"Caso essa propriedade seja definida como "),Tl(718,"code"),iN(719,"true"),sg(),iN(720,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(721,"tr",14)(722,"td",15)(723,"div",23)(724,"span",24),iN(725," p-field-error-message"),Gl(726,"br"),sg()()(),Tl(727,"td",19)(728,"code",25),iN(729,"string"),sg()(),Tl(730,"td",21),iN(731,"-"),sg(),Tl(732,"td",22)(733,"em")(734,"strong"),iN(735,"(opcional)"),sg()(),Tl(736,"p"),iN(737,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(738,"blockquote")(739,"p"),iN(740,"Necess\xE1rio que a propriedade "),Tl(741,"code"),iN(742,"p-required"),sg(),iN(743," esteja habilitada."),sg()()()(),Tl(744,"tr",14)(745,"td",15)(746,"div",23)(747,"span",24),iN(748," p-field-label"),Gl(749,"br"),sg()()(),Tl(750,"td",19)(751,"code",25),iN(752,"string"),sg()(),Tl(753,"td",21)(754,"p")(755,"code"),iN(756,"label"),sg()()(),Tl(757,"td",22)(758,"em")(759,"strong"),iN(760,"(opcional)"),sg()(),Tl(761,"p"),iN(762,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(763,"code"),iN(764,"p-options"),sg(),iN(765,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),sg(),Tl(766,"p"),iN(767,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),sg()()(),Tl(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),iN(772," p-field-value"),Gl(773,"br"),sg()()(),Tl(774,"td",19)(775,"code",25),iN(776,"string"),sg()(),Tl(777,"td",21)(778,"p")(779,"code"),iN(780,"value"),sg()()(),Tl(781,"td",22)(782,"em")(783,"strong"),iN(784,"(opcional)"),sg()(),Tl(785,"p"),iN(786,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(787,"code"),iN(788,"p-options"),sg(),iN(789,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),sg(),Tl(790,"p"),iN(791,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),sg()()(),Tl(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),iN(796," p-filter-minlength"),Gl(797,"br"),sg()()(),Tl(798,"td",19)(799,"code",27),iN(800,"number"),sg()(),Tl(801,"td",21)(802,"p")(803,"code"),iN(804,"0"),sg()()(),Tl(805,"td",22)(806,"em")(807,"strong"),iN(808,"(opcional)"),sg()(),Tl(809,"p"),iN(810,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),sg()()(),Tl(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),iN(815," p-filter-mode"),Gl(816,"br"),sg()()(),Tl(817,"td",19)(818,"code",28),iN(819,"PoComboFilterMode"),sg()(),Tl(820,"td",21)(821,"p")(822,"code"),iN(823,"startsWith"),sg()()(),Tl(824,"td",22)(825,"em")(826,"strong"),iN(827,"(opcional)"),sg()(),Tl(828,"p"),iN(829,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Tl(830,"code"),iN(831,"startsWith"),sg(),iN(832,", "),Tl(833,"code"),iN(834,"contains"),sg(),iN(835," ou "),Tl(836,"code"),iN(837,"endsWith"),sg(),iN(838,"."),sg(),Tl(839,"blockquote")(840,"p"),iN(841,"Quando utilizar a propriedade "),Tl(842,"code"),iN(843,"p-filter-service"),sg(),iN(844," esta propriedade ser\xE1 ignorada."),sg()()()(),Tl(845,"tr",14)(846,"td",15)(847,"div",23)(848,"span",24),iN(849," p-filter-params"),Gl(850,"br"),sg()()(),Tl(851,"td",19)(852,"code",29),iN(853,"any"),sg()(),Tl(854,"td",21),iN(855,"-"),sg(),Tl(856,"td",22)(857,"em")(858,"strong"),iN(859,"(opcional)"),sg()(),Tl(860,"p"),iN(861,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Tl(862,"em"),iN(863,"PoComboFilter"),sg(),iN(864,"."),sg(),Tl(865,"blockquote")(866,"p"),iN(867,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),sg()()()(),Tl(868,"tr",14)(869,"td",15)(870,"div",23)(871,"span",24),iN(872," p-filter-service"),Gl(873,"br"),sg()()(),Tl(874,"td",19)(875,"code",30),iN(876,"PoComboFilter "),sg(),Tl(877,"code",25),iN(878," string"),sg()(),Tl(879,"td",21),iN(880,"-"),sg(),Tl(881,"td",22)(882,"em")(883,"strong"),iN(884,"(opcional)"),sg()(),Tl(885,"p"),iN(886,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),sg(),Tl(887,"p"),iN(888,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Tl(889,"code"),iN(890,"p-field-label"),sg(),iN(891," e "),Tl(892,"code"),iN(893,"p-field-value"),sg(),iN(894," para a constru\xE7\xE3o da lista de itens."),sg(),Tl(895,"p"),iN(896,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),sg(),Tl(897,"pre")(898,"code"),iN(899,`url + ?filter=Peter
`),sg()(),Tl(900,"p"),iN(901,"Se for definida a propriedade "),Tl(902,"code"),iN(903,"p-filter-params"),sg(),iN(904,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Tl(905,"code"),iN(906,"{ age: 23 }"),sg(),iN(907," a URL ficaria:"),sg(),Tl(908,"pre")(909,"code"),iN(910,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),sg()()()(),Tl(911,"tr",14)(912,"td",15)(913,"div",23)(914,"span",24),iN(915," p-help"),Gl(916,"br"),sg()()(),Tl(917,"td",19)(918,"code",25),iN(919,"string"),sg()(),Tl(920,"td",21),iN(921,"-"),sg(),Tl(922,"td",22)(923,"em")(924,"strong"),iN(925,"(opcional)"),sg()(),Tl(926,"p"),iN(927,"Texto de apoio para o campo."),sg()()(),Tl(928,"tr",14)(929,"td",15)(930,"div",23)(931,"span",24),iN(932," p-icon"),Gl(933,"br"),sg()()(),Tl(934,"td",19)(935,"code",25),iN(936,"string "),sg(),Tl(937,"code",31),iN(938," TemplateRef<void>"),sg()(),Tl(939,"td",21),iN(940,"-"),sg(),Tl(941,"td",22)(942,"em")(943,"strong"),iN(944,"(opcional)"),sg()(),Tl(945,"p"),iN(946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(947,"p"),iN(948,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(949,"a",32),iN(950,"Biblioteca de \xEDcones"),sg(),iN(951,". conforme exemplo abaixo:"),sg(),Tl(952,"pre")(953,"code"),iN(954,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),sg()(),Tl(955,"p"),iN(956,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(957,"em"),iN(958,"Font Awesome"),sg(),iN(959,", da seguinte forma:"),sg(),Tl(960,"pre")(961,"code"),iN(962,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),sg()(),Tl(963,"p"),iN(964,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(965,"code"),iN(966,"TemplateRef"),sg(),iN(967,", conforme exemplo abaixo:"),sg(),Tl(968,"pre")(969,"code"),iN(970,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(971,"blockquote")(972,"p"),iN(973,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(974,"code"),iN(975,"font-size: inherit"),sg(),iN(976," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(977,"tr",14)(978,"td",15)(979,"div",23)(980,"span",24),iN(981," p-infinite-scroll"),Gl(982,"br"),sg()()(),Tl(983,"td",19)(984,"code",26),iN(985,"boolean"),sg()(),Tl(986,"td",21)(987,"p")(988,"code"),iN(989,"false"),sg()()(),Tl(990,"td",22)(991,"em")(992,"strong"),iN(993,"(opcional)"),sg()(),Tl(994,"p"),iN(995,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg()()(),Tl(996,"tr",14)(997,"td",15)(998,"div",23)(999,"span",24),iN(1e3," p-infinite-scroll-distance"),Gl(1001,"br"),sg()()(),Tl(1002,"td",19)(1003,"code",27),iN(1004,"number"),sg()(),Tl(1005,"td",21),iN(1006,"-"),sg(),Tl(1007,"td",22)(1008,"em")(1009,"strong"),iN(1010,"(opcional)"),sg()(),Tl(1011,"p"),iN(1012,"Define o percentual necess\xE1rio para disparar o evento "),Tl(1013,"code"),iN(1014,"show-more"),sg(),iN(1015,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),sg(),Tl(1016,"p")(1017,"strong"),iN(1018,"Exemplos"),sg()(),Tl(1019,"ul")(1020,"li"),iN(1021,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),Tl(1022,"code"),iN(1023,"show-more"),sg(),iN(1024," ser\xE1 disparado."),sg()()()(),Tl(1025,"tr",14)(1026,"td",15)(1027,"div",16)(1028,"span",17),iN(1029," (p-input-change)"),Gl(1030,"br"),sg()()(),Tl(1031,"td",19)(1032,"code",20),iN(1033,"EventEmitter"),sg()(),Tl(1034,"td",21),iN(1035,"-"),sg(),Tl(1036,"td",22)(1037,"em")(1038,"strong"),iN(1039,"(opcional)"),sg()(),Tl(1040,"p"),iN(1041,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),sg()()(),Tl(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),iN(1046," (p-keydown)"),Gl(1047,"br"),sg()()(),Tl(1048,"td",19)(1049,"code",20),iN(1050,"EventEmitter"),sg()(),Tl(1051,"td",21),iN(1052,"-"),sg(),Tl(1053,"td",22)(1054,"em")(1055,"strong"),iN(1056,"(opcional)"),sg()(),Tl(1057,"p"),iN(1058,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(1059,"code"),iN(1060,"KeyboardEvent"),sg(),iN(1061," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(1062,"tr",14)(1063,"td",15)(1064,"div",23)(1065,"span",24),iN(1066," p-label"),Gl(1067,"br"),sg()()(),Tl(1068,"td",19)(1069,"code",25),iN(1070,"string"),sg()(),Tl(1071,"td",21),iN(1072,"-"),sg(),Tl(1073,"td",22)(1074,"em")(1075,"strong"),iN(1076,"(opcional)"),sg()(),Tl(1077,"p"),iN(1078,"Label no componente."),sg()()(),Tl(1079,"tr",14)(1080,"td",15)(1081,"div",23)(1082,"span",24),iN(1083," p-label-text-wrap"),Gl(1084,"br"),sg()()(),Tl(1085,"td",19)(1086,"code",26),iN(1087,"boolean"),sg()(),Tl(1088,"td",21)(1089,"p")(1090,"code"),iN(1091,"false"),sg()()(),Tl(1092,"td",22)(1093,"em")(1094,"strong"),iN(1095,"(opcional)"),sg()(),Tl(1096,"p"),iN(1097,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(1098,"code"),iN(1099,"p-label"),sg(),iN(1100,". Quando "),Tl(1101,"code"),iN(1102,"p-label-text-wrap"),sg(),iN(1103,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(1104,"tr",14)(1105,"td",15)(1106,"div",23)(1107,"span",24),iN(1108," p-listbox-control-position"),Gl(1109,"br"),sg()()(),Tl(1110,"td",19)(1111,"code",33),iN(1112,"'top' "),sg(),Tl(1113,"code",34),iN(1114," 'bottom'"),sg()(),Tl(1115,"td",21)(1116,"p")(1117,"code"),iN(1118,"bottom"),sg()()(),Tl(1119,"td",22)(1120,"em")(1121,"strong"),iN(1122,"(opcional)"),sg()(),Tl(1123,"p"),iN(1124,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Tl(1125,"code"),iN(1126,"listbox"),sg(),iN(1127," em rela\xE7\xE3o ao campo ("),Tl(1128,"code"),iN(1129,"top"),sg(),iN(1130," ou "),Tl(1131,"code"),iN(1132,"bottom"),sg(),iN(1133,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg()()(),Tl(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),iN(1138," p-literals"),Gl(1139,"br"),sg()()(),Tl(1140,"td",19)(1141,"code",35),iN(1142,"PoComboLiterals"),sg()(),Tl(1143,"td",21),iN(1144,"-"),sg(),Tl(1145,"td",22)(1146,"em")(1147,"strong"),iN(1148,"(opcional)"),sg()(),Tl(1149,"p"),iN(1150,"Objeto com as literais usadas no "),Tl(1151,"code"),iN(1152,"po-combo"),sg(),iN(1153,"."),sg(),Tl(1154,"p"),iN(1155,"Para utilizar basta passar a literal que deseja customizar:"),sg(),Tl(1156,"pre")(1157,"code"),iN(1158,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),sg()(),Tl(1159,"p"),iN(1160,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),sg(),Tl(1161,"pre")(1162,"code"),iN(1163,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),sg()(),Tl(1164,"blockquote")(1165,"p"),iN(1166,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(1167,"a",36)(1168,"code"),iN(1169,"PoI18nService"),sg()(),iN(1170," ou do browser."),sg()()()(),Tl(1171,"tr",14)(1172,"td",15)(1173,"div",23)(1174,"span",24),iN(1175," p-loading"),Gl(1176,"br"),sg()()(),Tl(1177,"td",19)(1178,"code",26),iN(1179,"boolean"),sg()(),Tl(1180,"td",21)(1181,"p")(1182,"code"),iN(1183,"false"),sg()()(),Tl(1184,"td",22)(1185,"em")(1186,"strong"),iN(1187,"(opcional)"),sg()(),Tl(1188,"p"),iN(1189,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(1190,"tr",14)(1191,"td",15)(1192,"div",23)(1193,"span",24),iN(1194," name"),Gl(1195,"br"),sg()()(),Tl(1196,"td",19)(1197,"code",25),iN(1198,"string"),sg()(),Tl(1199,"td",21),iN(1200,"-"),sg(),Tl(1201,"td",22)(1202,"p"),iN(1203,"Nome do componente."),sg()()(),Tl(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),iN(1208," (ngModelChange)"),Gl(1209,"br"),sg()()(),Tl(1210,"td",19)(1211,"code",20),iN(1212,"EventEmitter"),sg()(),Tl(1213,"td",21),iN(1214,"-"),sg(),Tl(1215,"td",22)(1216,"em")(1217,"strong"),iN(1218,"(opcional)"),sg()(),Tl(1219,"p"),iN(1220,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),sg(),Tl(1221,"p"),iN(1222,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Tl(1223,"code"),iN(1224,"strictTemplates"),sg(),iN(1225,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),sg(),Tl(1226,"pre")(1227,"code"),iN(1228,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),sg()()()(),Tl(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),iN(1233," p-optional"),Gl(1234,"br"),sg()()(),Tl(1235,"td",19)(1236,"code",26),iN(1237,"boolean"),sg()(),Tl(1238,"td",21)(1239,"p")(1240,"code"),iN(1241,"false"),sg()()(),Tl(1242,"td",22)(1243,"em")(1244,"strong"),iN(1245,"(opcional)"),sg()(),Tl(1246,"p"),iN(1247,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1248,"blockquote")(1249,"p"),iN(1250,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1251,"ul")(1252,"li"),iN(1253,"O campo conter "),Tl(1254,"code"),iN(1255,"p-required"),sg(),iN(1256,";"),sg(),Tl(1257,"li"),iN(1258,"N\xE3o possuir "),Tl(1259,"code"),iN(1260,"p-help"),sg(),iN(1261," e/ou "),Tl(1262,"code"),iN(1263,"p-label"),sg(),iN(1264,"."),sg()()()(),Tl(1265,"tr",14)(1266,"td",15)(1267,"div",23)(1268,"span",24),iN(1269," p-options"),Gl(1270,"br"),sg()()(),Tl(1271,"td",19)(1272,"code",37),iN(1273,"Array<PoComboOption "),sg(),Tl(1274,"code",38),iN(1275," PoComboOptionGroup "),sg(),Tl(1276,"code",39),iN(1277," any>"),sg()(),Tl(1278,"td",21),iN(1279,"-"),sg(),Tl(1280,"td",22)(1281,"p"),iN(1282,"Nesta propriedade define a lista de op\xE7\xF5es do "),Tl(1283,"code"),iN(1284,"po-combo"),sg(),iN(1285,"."),sg(),Tl(1286,"blockquote")(1287,"p"),iN(1288,"A lista pode ser definida utilizando um array com o valor representando o "),Tl(1289,"code"),iN(1290,"value"),sg(),iN(1291," e o "),Tl(1292,"code"),iN(1293,"label"),sg(),iN(1294," das seguintes formas:"),sg()(),Tl(1295,"pre")(1296,"code"),iN(1297,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),sg()(),Tl(1298,"pre")(1299,"code"),iN(1300,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),sg()(),Tl(1301,"ul")(1302,"li"),iN(1303,"Aconselha-se utilizar valores distintos no "),Tl(1304,"code"),iN(1305,"label"),sg(),iN(1306," e "),Tl(1307,"code"),iN(1308,"value"),sg(),iN(1309," dos itens."),sg()()()(),Tl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),iN(1314," p-placeholder"),Gl(1315,"br"),sg()()(),Tl(1316,"td",19)(1317,"code",25),iN(1318,"string"),sg()(),Tl(1319,"td",21),iN(1320,"-"),sg(),Tl(1321,"td",22)(1322,"p"),iN(1323,"Mensagem apresentada enquanto o campo estiver vazio."),sg()()(),Tl(1324,"tr",14)(1325,"td",15)(1326,"div",23)(1327,"span",24),iN(1328," p-helper"),Gl(1329,"br"),sg()()(),Tl(1330,"td",19)(1331,"code",40),iN(1332,"PoHelperOptions "),sg(),Tl(1333,"code",25),iN(1334," string"),sg()(),Tl(1335,"td",21),iN(1336,"-"),sg(),Tl(1337,"td",22)(1338,"em")(1339,"strong"),iN(1340,"(opcional)"),sg()(),Tl(1341,"p"),iN(1342,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1343,"code"),iN(1344,"p-label"),sg(),iN(1345," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1346,"code"),iN(1347,"p-label"),sg(),iN(1348,"."),sg(),Tl(1349,"blockquote")(1350,"p"),iN(1351,"Para mais informa\xE7\xF5es acesse: "),Tl(1352,"a",41),iN(1353,"https://po-ui.io/documentation/po-helper"),sg(),iN(1354,"."),sg()(),Tl(1355,"blockquote")(1356,"p"),iN(1357,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1358,"code"),iN(1359,"p-additional-help-tooltip"),sg(),iN(1360," e "),Tl(1361,"code"),iN(1362,"p-additional-help"),sg(),iN(1363,") ser\xE1 ignorado."),sg()()()(),Tl(1364,"tr",14)(1365,"td",15)(1366,"div",23)(1367,"span",24),iN(1368," p-remove-initial-filter"),Gl(1369,"br"),sg()()(),Tl(1370,"td",19)(1371,"code",26),iN(1372,"boolean"),sg()(),Tl(1373,"td",21)(1374,"p")(1375,"code"),iN(1376,"false"),sg()()(),Tl(1377,"td",22)(1378,"em")(1379,"strong"),iN(1380,"(opcional)"),sg()(),Tl(1381,"p"),iN(1382,"Define se o filtro inicial ser\xE1 removido no primeiro clique do campo."),sg(),Tl(1383,"p"),iN(1384,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),sg()()(),Tl(1385,"tr",14)(1386,"td",15)(1387,"div",23)(1388,"span",24),iN(1389," p-required"),Gl(1390,"br"),sg()()(),Tl(1391,"td",19)(1392,"code",26),iN(1393,"boolean"),sg()(),Tl(1394,"td",21)(1395,"p")(1396,"code"),iN(1397,"false"),sg()()(),Tl(1398,"td",22)(1399,"em")(1400,"strong"),iN(1401,"(opcional)"),sg()(),Tl(1402,"p"),iN(1403,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),iN(1408," p-show-required"),Gl(1409,"br"),sg()()(),Tl(1410,"td",19)(1411,"code",26),iN(1412,"boolean"),sg()(),Tl(1413,"td",21),iN(1414,"-"),sg(),Tl(1415,"td",22)(1416,"p"),iN(1417,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1418,"blockquote")(1419,"p"),iN(1420,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1421,"ul")(1422,"li"),iN(1423,"N\xE3o possuir "),Tl(1424,"code"),iN(1425,"p-help"),sg(),iN(1426," e/ou "),Tl(1427,"code"),iN(1428,"p-label"),sg(),iN(1429,"."),sg()()()(),Tl(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),iN(1434," p-size"),Gl(1435,"br"),sg()()(),Tl(1436,"td",19)(1437,"code",25),iN(1438,"string"),sg()(),Tl(1439,"td",21)(1440,"p")(1441,"code"),iN(1442,"medium"),sg()()(),Tl(1443,"td",22)(1444,"em")(1445,"strong"),iN(1446,"(opcional)"),sg()(),Tl(1447,"p"),iN(1448,"Define o tamanho do componente:"),sg(),Tl(1449,"ul")(1450,"li")(1451,"code"),iN(1452,"small"),sg(),iN(1453,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1454,"li")(1455,"code"),iN(1456,"medium"),sg(),iN(1457,": altura do input como 44px."),sg()(),Tl(1458,"blockquote")(1459,"p"),iN(1460,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1461,"code"),iN(1462,"medium"),sg(),iN(1463,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1464,"a",42),iN(1465,"po-theme"),sg(),iN(1466,"."),sg()()()(),Tl(1467,"tr",14)(1468,"td",15)(1469,"div",23)(1470,"span",24),iN(1471," p-sort"),Gl(1472,"br"),sg()()(),Tl(1473,"td",19)(1474,"code",26),iN(1475,"boolean"),sg()(),Tl(1476,"td",21),iN(1477,"-"),sg(),Tl(1478,"td",22)(1479,"p"),iN(1480,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg()()()(),Tl(1481,"h3",10),iN(1482,"M\xE9todos"),sg(),Tl(1483,"table",43)(1484,"tr",14)(1485,"th",44)(1486,"div",23)(1487,"h4")(1488,"span",24),iN(1489," focus "),sg()()()()(),Tl(1490,"tr",22)(1491,"td",22)(1492,"p"),iN(1493,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1494,"p"),iN(1495,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1496,"pre")(1497,"code"),iN(1498,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),sg()()()()(),Gl(1499,"br"),Tl(1500,"table",43)(1501,"tr",14)(1502,"th",44)(1503,"div",23)(1504,"h4")(1505,"span",24),iN(1506," showAdditionalHelp "),sg()()()()(),Tl(1507,"tr",22)(1508,"td",22)(1509,"p"),iN(1510,"M\xE9todo que exibe "),Tl(1511,"code"),iN(1512,"p-helper"),sg(),iN(1513," ou executa a a\xE7\xE3o definida em "),Tl(1514,"code"),iN(1515,"p-helper{eventOnClick}"),sg(),iN(1516," ou em "),Tl(1517,"code"),iN(1518,"p-additionalHelp"),sg(),iN(1519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1520,"code"),iN(1521,"p-keydown"),sg(),iN(1522,"."),sg(),Tl(1523,"blockquote")(1524,"p"),iN(1525,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1526,"code"),iN(1527,"po-helper"),sg(),iN(1528," quando o componente estiver com foco."),sg()(),Tl(1529,"pre")(1530,"code"),iN(1531,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),sg()(),Tl(1532,"pre")(1533,"code"),iN(1534,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1535,"br"),Tl(1536,"h3"),iN(1537,"Interfaces"),sg(),Tl(1538,"h4",45)(1539,"code",5),iN(1540,"PoComboFilter"),sg()(),Tl(1541,"div",2)(1542,"p"),iN(1543,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),sg()(),Tl(1544,"h4",10),iN(1545,"M\xE9todos"),sg(),Tl(1546,"table",43)(1547,"tr",14)(1548,"th",44)(1549,"div",23)(1550,"h4")(1551,"span",24),iN(1552," getFilteredData "),sg()()()()(),Tl(1553,"tr",22)(1554,"td",22)(1555,"p"),iN(1556,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),sg()()()(),Tl(1557,"h5")(1558,"b"),iN(1559,"Par\xE2metros"),sg()(),Tl(1560,"table",11)(1561,"tr",12)(1562,"th",13),iN(1563,"Nome"),sg(),Tl(1564,"th",13),iN(1565,"Tipo"),sg(),Tl(1566,"th",13),iN(1567,"Descri\xE7\xE3o"),sg()(),Tl(1568,"tr",14)(1569,"td",15),iN(1570," params"),sg(),Tl(1571,"td",19)(1572,"code",46),iN(1573," any "),sg()(),Tl(1574,"td",22)(1575,"p"),iN(1576,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),sg()()(),Tl(1577,"tr",14)(1578,"td",15),iN(1579," filterParams"),sg(),Tl(1580,"td",19)(1581,"code",46),iN(1582," any "),sg()(),Tl(1583,"td",22)(1584,"p"),iN(1585,"Valor informado atrav\xE9s da propriedade "),Tl(1586,"code"),iN(1587,"p-filter-params"),sg(),iN(1588,"."),sg()()()(),Gl(1589,"br"),Tl(1590,"table",43)(1591,"tr",14)(1592,"th",44)(1593,"div",23)(1594,"h4")(1595,"span",24),iN(1596," getObjectByValue "),sg()()()()(),Tl(1597,"tr",22)(1598,"td",22)(1599,"p"),iN(1600,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),sg()()()(),Tl(1601,"h5")(1602,"b"),iN(1603,"Par\xE2metros"),sg()(),Tl(1604,"table",11)(1605,"tr",12)(1606,"th",13),iN(1607,"Nome"),sg(),Tl(1608,"th",13),iN(1609,"Tipo"),sg(),Tl(1610,"th",13),iN(1611,"Descri\xE7\xE3o"),sg()(),Tl(1612,"tr",14)(1613,"td",15),iN(1614," value"),sg(),Tl(1615,"td",19)(1616,"code",25),iN(1617," string "),sg(),Tl(1618,"code",27),iN(1619," number "),sg()(),Tl(1620,"td",22)(1621,"p"),iN(1622,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),sg()()(),Tl(1623,"tr",14)(1624,"td",15),iN(1625," filterParams"),sg(),Tl(1626,"td",19)(1627,"code",46),iN(1628," any "),sg()(),Tl(1629,"td",22)(1630,"p"),iN(1631,"Valor informado atrav\xE9s da propriedade "),Tl(1632,"code"),iN(1633,"p-filter-params"),sg(),iN(1634,"."),sg()()()(),Gl(1635,"br"),Tl(1636,"h4",45)(1637,"code",5),iN(1638,"PoComboLiterals"),sg()(),Tl(1639,"div",2)(1640,"p"),iN(1641,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1642,"code"),iN(1643,"po-combo"),sg(),iN(1644,"."),sg()(),Tl(1645,"h4",10),iN(1646,"Propriedades"),sg(),Tl(1647,"table",11)(1648,"tr",12)(1649,"th",13),iN(1650,"Nome"),sg(),Tl(1651,"th",13),iN(1652,"Tipo"),sg(),Tl(1653,"th",13),iN(1654,"Descri\xE7\xE3o"),sg()(),Tl(1655,"tr",14)(1656,"td",15)(1657,"div",23)(1658,"span",24),iN(1659," chooseOption"),Gl(1660,"br"),sg()()(),Tl(1661,"td",19)(1662,"code",25),iN(1663,"string"),sg()(),Tl(1664,"td",22)(1665,"em")(1666,"strong"),iN(1667,"(opcional)"),sg()(),Tl(1668,"p"),iN(1669,"Texto exibido quando o combo estiver vazio."),sg()()(),Tl(1670,"tr",14)(1671,"td",15)(1672,"div",23)(1673,"span",24),iN(1674," clean"),Gl(1675,"br"),sg()()(),Tl(1676,"td",19)(1677,"code",25),iN(1678,"string"),sg()(),Tl(1679,"td",22)(1680,"em")(1681,"strong"),iN(1682,"(opcional)"),sg()(),Tl(1683,"p"),iN(1684,"Texto do aria-label do bot\xE3o de limpar"),sg()()(),Tl(1685,"tr",14)(1686,"td",15)(1687,"div",23)(1688,"span",24),iN(1689," noData"),Gl(1690,"br"),sg()()(),Tl(1691,"td",19)(1692,"code",25),iN(1693,"string"),sg()(),Tl(1694,"td",22)(1695,"em")(1696,"strong"),iN(1697,"(opcional)"),sg()(),Tl(1698,"p"),iN(1699,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),sg()()()(),Tl(1700,"h4",45)(1701,"code",5),iN(1702,"PoComboOptionGroup"),sg()(),Tl(1703,"div",2)(1704,"p"),iN(1705,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),Tl(1706,"code"),iN(1707,"po-combo"),sg(),iN(1708,"."),sg()(),Tl(1709,"h4",10),iN(1710,"Propriedades"),sg(),Tl(1711,"table",11)(1712,"tr",12)(1713,"th",13),iN(1714,"Nome"),sg(),Tl(1715,"th",13),iN(1716,"Tipo"),sg(),Tl(1717,"th",13),iN(1718,"Descri\xE7\xE3o"),sg()(),Tl(1719,"tr",14)(1720,"td",15)(1721,"div",23)(1722,"span",24),iN(1723," label"),Gl(1724,"br"),sg()()(),Tl(1725,"td",19)(1726,"code",25),iN(1727,"string"),sg()(),Tl(1728,"td",22)(1729,"p"),iN(1730,"T\xEDtulo para cada grupo de op\xE7\xF5es."),sg(),Tl(1731,"p"),iN(1732,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),sg()()(),Tl(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),iN(1737," options"),Gl(1738,"br"),sg()()(),Tl(1739,"td",19)(1740,"code",47),iN(1741,"Array<PoComboOption>"),sg()(),Tl(1742,"td",22)(1743,"p"),iN(1744,"Lista de itens a serem exibidos."),sg()()()(),Tl(1745,"h4",45)(1746,"code",5),iN(1747,"PoComboOption"),sg()(),Tl(1748,"div",2)(1749,"p"),iN(1750,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),Tl(1751,"code"),iN(1752,"po-combo"),sg(),iN(1753,"."),sg()(),Tl(1754,"h4",10),iN(1755,"Propriedades"),sg(),Tl(1756,"table",11)(1757,"tr",12)(1758,"th",13),iN(1759,"Nome"),sg(),Tl(1760,"th",13),iN(1761,"Tipo"),sg(),Tl(1762,"th",13),iN(1763,"Descri\xE7\xE3o"),sg()(),Tl(1764,"tr",14)(1765,"td",15)(1766,"div",23)(1767,"span",24),iN(1768," label"),Gl(1769,"br"),sg()()(),Tl(1770,"td",19)(1771,"code",25),iN(1772,"string"),sg()(),Tl(1773,"td",22)(1774,"em")(1775,"strong"),iN(1776,"(opcional)"),sg()(),Tl(1777,"p"),iN(1778,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),sg(),Tl(1779,"blockquote")(1780,"p"),iN(1781,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Tl(1782,"code"),iN(1783,"value"),sg(),iN(1784,"."),sg()()()(),Tl(1785,"tr",14)(1786,"td",15)(1787,"div",23)(1788,"span",24),iN(1789," value"),Gl(1790,"br"),sg()()(),Tl(1791,"td",19)(1792,"code",25),iN(1793,"string "),sg(),Tl(1794,"code",27),iN(1795," number"),sg()(),Tl(1796,"td",22)(1797,"p"),iN(1798,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Tl(1799,"em"),iN(1800,"model"),sg(),iN(1801,"."),sg()()()(),Tl(1802,"h3"),iN(1803,"Enums"),sg(),Tl(1804,"h4",4)(1805,"code",5),iN(1806,"PoComboFilterMode"),sg()(),Tl(1807,"div",2)(1808,"p"),iN(1809,"Define o tipo de busca usado no po-combo."),sg()(),Tl(1810,"h4",10),iN(1811,"Propriedades"),sg(),Tl(1812,"table",11)(1813,"tr",12)(1814,"th",13),iN(1815,"Nome"),sg(),Tl(1816,"th",13),iN(1817,"Descri\xE7\xE3o"),sg()(),Tl(1818,"tr",14)(1819,"td",15)(1820,"div",23)(1821,"span",24),iN(1822," startsWith"),Gl(1823,"br"),sg()()(),Tl(1824,"td",22)(1825,"p"),iN(1826,"Verifica se o texto "),Tl(1827,"em"),iN(1828,"inicia"),sg(),iN(1829," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),sg()()(),Tl(1830,"tr",14)(1831,"td",15)(1832,"div",23)(1833,"span",24),iN(1834," contains"),Gl(1835,"br"),sg()()(),Tl(1836,"td",22)(1837,"p"),iN(1838,"Verifica se o texto "),Tl(1839,"em"),iN(1840,"cont\xE9m"),sg(),iN(1841," o valor pesquisado."),sg()()(),Tl(1842,"tr",14)(1843,"td",15)(1844,"div",23)(1845,"span",24),iN(1846," endsWith"),Gl(1847,"br"),sg()()(),Tl(1848,"td",22)(1849,"p"),iN(1850,"Verifica se o texto "),Tl(1851,"em"),iN(1852,"finaliza"),sg(),iN(1853," com o valor pesquisado."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var nt=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-combo-doc"),sg(),Tl(4,"po-tab",3),ht$1("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),sg()()()),p&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})();var zt=[{path:"",component:nt}],it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[DL.forChild(zt),DL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,it]})}return a})();export{cn as DocPoComboModule};