import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,S,d as f,aV as Xp,t as tb,cR as fY,cS as am,bG as k3,R as Hl,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,cr as _3,cT as hde,bH as Wde,cE as Uz,b4 as rme,a2 as WE,W as we,av as zl,aw as uo,ax as fo,cU as She,b5 as Ko,cL as NO,a4 as dN,cM as Qx,a5 as hN,b9 as ONe,a0 as IO,aq as ix,at as ox,cV as bk,cW as wk,a3 as SNe,I as dw,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var at=()=>({value:"Option 1"}),lt=()=>({value:"Option 2"}),rt=(a,q)=>[a,q],Ae=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic"]],standalone:false,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&Hl(0,"po-combo",0),p&2&&ZE("p-options",sN(3,rt,iN(1,at),iN(2,lt)));},dependencies:[k3],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-basic"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,mt,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ae],encapsulation:2})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0};}changeEvent(m){this.event=m;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(m){this.customLiterals=void 0;}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=false,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium";}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}];}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&"options"in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return [...m,{label:d,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs"]],standalone:false,decls:44,vars:62,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-compact-label","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=gx();Cl(0,"po-combo",2),gw("ngModelChange",function(i){return Jy(d),Zx(n.combo,i)||(n.combo=i),e_(i)}),dt("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",3),Hl(3,"po-info",4)(4,"po-info",5),og(),Hl(5,"po-divider"),Cl(6,"form",null,0),Hl(8,"po-divider",6),Cl(9,"div",3)(10,"po-switch",7),gw("ngModelChange",function(i){return Jy(d),Zx(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),e_(i)}),og(),Z0(),Cl(11,"po-select",8),gw("ngModelChange",function(i){return Jy(d),Zx(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),e_(i)}),dt("p-change",function(){return n.optionsGroupSelection()}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(i){return Jy(d),Zx(n.optionsGroup,i)||(n.optionsGroup=i),e_(i)}),og(),Z0(),og(),Hl(13,"po-divider",10),Cl(14,"div",3)(15,"po-input",11),gw("ngModelChange",function(i){return Jy(d),Zx(n.option.label,i)||(n.option.label=i),e_(i)}),og(),Z0(),Cl(16,"po-input",12),gw("ngModelChange",function(i){return Jy(d),Zx(n.option.value,i)||(n.option.value=i),e_(i)}),og(),Z0(),og(),Cl(17,"div",3)(18,"po-button",13),dt("p-click",function(){return n.addOption()}),og()()(),Hl(19,"po-divider"),Cl(20,"form",null,1)(22,"po-input",14),gw("ngModelChange",function(i){return Jy(d),Zx(n.label,i)||(n.label=i),e_(i)}),og(),Z0(),Cl(23,"po-input",15),gw("ngModelChange",function(i){return Jy(d),Zx(n.help,i)||(n.help=i),e_(i)}),og(),Z0(),Cl(24,"po-input",16),gw("ngModelChange",function(i){return Jy(d),Zx(n.helperText,i)||(n.helperText=i),e_(i)}),og(),Z0(),Cl(25,"po-input",17),gw("ngModelChange",function(i){return Jy(d),Zx(n.placeholder,i)||(n.placeholder=i),e_(i)}),og(),Z0(),Cl(26,"po-input",18),gw("ngModelChange",function(i){return Jy(d),Zx(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),e_(i)}),og(),Z0(),Cl(27,"div",3)(28,"po-checkbox-group",19),gw("ngModelChange",function(i){return Jy(d),Zx(n.properties,i)||(n.properties=i),e_(i)}),og(),Z0(),Cl(29,"po-radio-group",20),gw("ngModelChange",function(i){return Jy(d),Zx(n.icon,i)||(n.icon=i),e_(i)}),og(),Z0(),Cl(30,"po-radio-group",21),gw("ngModelChange",function(i){return Jy(d),Zx(n.filterMode,i)||(n.filterMode=i),e_(i)}),og(),Z0(),Cl(31,"po-radio-group",22),gw("ngModelChange",function(i){return Jy(d),Zx(n.size,i)||(n.size=i),e_(i)}),og(),Z0(),Cl(32,"po-radio-group",23),gw("ngModelChange",function(i){return Jy(d),Zx(n.listboxPosition,i)||(n.listboxPosition=i),e_(i)}),og(),Z0(),og(),Cl(33,"div",3)(34,"po-input",24),gw("ngModelChange",function(i){return Jy(d),Zx(n.filterService,i)||(n.filterService=i),e_(i)}),og(),Z0(),Cl(35,"po-input",25),gw("ngModelChange",function(i){return Jy(d),Zx(n.literals,i)||(n.literals=i),e_(i)}),dt("p-change",function(){return n.changeLiterals()}),og(),Z0(),og(),Cl(36,"div",3)(37,"po-input",26),gw("ngModelChange",function(i){return Jy(d),Zx(n.fieldValue,i)||(n.fieldValue=i),e_(i)}),og(),Z0(),Cl(38,"po-input",27),gw("ngModelChange",function(i){return Jy(d),Zx(n.fieldLabel,i)||(n.fieldLabel=i),e_(i)}),og(),Z0(),og(),Cl(39,"div",3)(40,"po-number",28),gw("ngModelChange",function(i){return Jy(d),Zx(n.debounceTime,i)||(n.debounceTime=i),e_(i)}),og(),Z0(),Cl(41,"po-number",29),gw("ngModelChange",function(i){return Jy(d),Zx(n.filterMinlength,i)||(n.filterMinlength=i),e_(i)}),og(),Z0(),og(),Cl(42,"div",3)(43,"po-button",30),dt("p-click",function(){return n.restore()}),og()()();}if(p&2){let d=Sx(7);pw("ngModel",n.combo),ZE("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-listbox-control-position",n.listboxPosition),X0(),Lp(3),ZE("p-value",n.combo),Lp(),ZE("p-value",n.event),Lp(6),pw("ngModel",n.comboOptionGroupSwitch),X0(),Lp(),pw("ngModel",n.selectedOptionsGroup),ZE("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),X0(),Lp(),pw("ngModel",n.optionsGroup),ZE("p-disabled",!n.comboOptionGroupSwitch),X0(),Lp(3),pw("ngModel",n.option.label),X0(),Lp(),pw("ngModel",n.option.value),X0(),Lp(2),ZE("p-disabled",d.form.invalid),Lp(4),pw("ngModel",n.label),X0(),Lp(),pw("ngModel",n.help),X0(),Lp(),pw("ngModel",n.helperText),X0(),Lp(),pw("ngModel",n.placeholder),X0(),Lp(),pw("ngModel",n.fieldErrorMessage),X0(),Lp(2),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(),pw("ngModel",n.icon),ZE("p-options",n.iconsOptions),X0(),Lp(),pw("ngModel",n.filterMode),ZE("p-options",n.filterModeOptions),X0(),Lp(),pw("ngModel",n.size),ZE("p-options",n.sizeOptions),X0(),Lp(),pw("ngModel",n.listboxPosition),ZE("p-options",n.listboxPositionOptions),X0(),Lp(2),pw("ngModel",n.filterService),X0(),Lp(),pw("ngModel",n.literals),X0(),Lp(2),pw("ngModel",n.fieldValue),X0(),Lp(),pw("ngModel",n.fieldLabel),X0(),Lp(2),pw("ngModel",n.debounceTime),X0(),Lp(),pw("ngModel",n.filterMinlength),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,k3,q3,Hhe,Nde,nme,H3,sme],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-combo
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-labs"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ct,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ge],encapsulation:2})}return a})();var Ee=(()=>{class a{getcities(){return [{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return [{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var bt=["schedulingForm"];function gt(a,q){if(a&1&&(Cl(0,"div",3),Hl(1,"po-avatar",15),Cl(2,"p",14),qx(3),og()()),a&2){let m=Ex().$implicit,p=Ex();Lp(),ZE("p-src",p.getStateByLabel(m.label)),Lp(2),dw(m.label);}}function ht(a,q){if(a&1&&(Cl(0,"div",14),qx(1),og()),a&2){let m=Ex().$implicit;Lp(),dw(m.label);}}function St(a,q){if(a&1&&ix(0,gt,4,2,"div",3)(1,ht,2,1,"div",14),a&2){let m=q.$implicit;ox(m.options?0:1);}}var ze=(()=>{class a{poNotification=f(Xp);schedulingService=f(Ee);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty();}confirmPreAppointment(m=""){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset();}getStateByLabel(m){return `https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[m]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&zl(bt,7),p&2){let d;uo(d=fo())&&(n.form=d.first);}},standalone:false,features:[we([Ee])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1","sample-combo-avatar-bg",3,"p-src"]],template:function(p,n){if(p&1){let d=gx();Cl(0,"div",1)(1,"div",2),qx(2,"Pre-appointment scheduling"),og()(),Cl(3,"form",null,0)(5,"div",3)(6,"po-input",4),gw("ngModelChange",function(i){return Jy(d),Zx(n.name,i)||(n.name=i),e_(i)}),og(),Z0(),Cl(7,"po-email",5),gw("ngModelChange",function(i){return Jy(d),Zx(n.email,i)||(n.email=i),e_(i)}),og(),Z0(),og(),Cl(8,"div",3)(9,"po-datepicker",6),gw("ngModelChange",function(i){return Jy(d),Zx(n.birthday,i)||(n.birthday=i),e_(i)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(i){return Jy(d),Zx(n.phone,i)||(n.phone=i),e_(i)}),og(),Z0(),og(),Cl(11,"div",3)(12,"po-combo",8),gw("ngModelChange",function(i){return Jy(d),Zx(n.city,i)||(n.city=i),e_(i)}),WE(13,St,2,1,"ng-template",9),og(),Z0(),Cl(14,"po-select",10),gw("ngModelChange",function(i){return Jy(d),Zx(n.typeScheduling,i)||(n.typeScheduling=i),e_(i)}),og(),Z0(),Cl(15,"po-combo",11),gw("ngModelChange",function(i){return Jy(d),Zx(n.medicalSpecialty,i)||(n.medicalSpecialty=i),e_(i)}),og(),Z0(),og(),Cl(16,"div",3)(17,"po-textarea",12),gw("ngModelChange",function(i){return Jy(d),Zx(n.informations,i)||(n.informations=i),e_(i)}),og(),Z0(),og(),Cl(18,"div",3)(19,"po-button",13),dt("p-click",function(){return n.confirmPreAppointment(n.name)}),og()()();}if(p&2){let d=Sx(4);Lp(6),pw("ngModel",n.name),X0(),Lp(),pw("ngModel",n.email),X0(),Lp(2),pw("ngModel",n.birthday),X0(),Lp(),pw("ngModel",n.phone),X0(),Lp(2),pw("ngModel",n.city),ZE("p-options",n.citiesOptions),X0(),Lp(2),pw("ngModel",n.typeScheduling),ZE("p-options",n.typeSchedulings),X0(),Lp(),pw("ngModel",n.medicalSpecialty),ZE("p-options",n.medicalSpecialtyOptions),X0(),Lp(2),pw("ngModel",n.informations),X0(),Lp(2),ZE("p-disabled",d.invalid);}},dependencies:[lY,sY,aY,gk,fk,_3,Qt,k3,hde,Wde,Uz,q3,nme,rme],styles:[".sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}"],changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo - Scheduling"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-text-center">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Cl(25,"po-tab",10)(26,"div")(27,"label",6),qx(28,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.css"),og(),Cl(29,"pre",11),qx(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),og()()()()(),Cl(31,"div",12),Hl(32,"sample-po-combo-scheduling"),og(),Hl(33,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Et,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ze],encapsulation:2})}return a})();var vt=["transferForm"];function xt(a,q){if(a&1&&(Cl(0,"div",3),Hl(1,"po-avatar",15),Cl(2,"div",16)(3,"div",17),qx(4),og(),Cl(5,"div",18),qx(6),og()()()),a&2){let m=q.$implicit;Lp(4),dw(m.label),Lp(2),dg("Account: ",m.value);}}var Ue=(()=>{class a{poNotification=f(Xp);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset();}transfer(){this.poModal.open();}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&zl(vt,7)(Ko,7),p&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.poModal=d.first);}},standalone:false,decls:23,vars:15,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let d=gx();Cl(0,"div",1)(1,"div",2),qx(2,"Banking Transfer"),og()(),Cl(3,"form",null,0)(5,"div",3)(6,"po-select",4),gw("ngModelChange",function(i){return Jy(d),Zx(n.typeAccount,i)||(n.typeAccount=i),e_(i)}),og(),Z0(),Cl(7,"po-combo",5),gw("ngModelChange",function(i){return Jy(d),Zx(n.contact,i)||(n.contact=i),e_(i)}),WE(8,xt,7,2,"ng-template",6),og(),Z0(),og(),Cl(9,"div",3)(10,"po-decimal",7),gw("ngModelChange",function(i){return Jy(d),Zx(n.value,i)||(n.value=i),e_(i)}),og(),Z0(),Cl(11,"po-datepicker",8),gw("ngModelChange",function(i){return Jy(d),Zx(n.dateTransfer,i)||(n.dateTransfer=i),e_(i)}),og(),Z0(),og(),Cl(12,"div",3)(13,"po-button",9),dt("p-click",function(){return n.transfer()}),og()()(),Cl(14,"po-modal",10)(15,"div",3),Hl(16,"po-info",11)(17,"po-info",12),og(),Hl(18,"po-divider"),Cl(19,"div",3),Hl(20,"po-info",13)(21,"po-info",14),dN(22,"date"),og()();}if(p&2){let d=Sx(4);Lp(6),pw("ngModel",n.typeAccount),ZE("p-options",n.typeAccounts),X0(),Lp(),pw("ngModel",n.contact),X0(),Lp(3),pw("ngModel",n.value),X0(),Lp(),pw("ngModel",n.dateTransfer),X0(),Lp(2),ZE("p-disabled",d.invalid),Lp(),ZE("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),Lp(2),ZE("p-value",n.typeAccount),Lp(),ZE("p-value",n.contact),Lp(3),ZE("p-value",n.value),Lp(),ZE("p-value",Qx(hN(22,13,n.dateTransfer)));}},dependencies:[lY,sY,aY,gk,fk,_3,Qt,_v,k3,hde,Wde,She,nme,sme,Ko,NO],encapsulation:2,changeDetection:1})}return a})();var wt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo - Banking Transfer"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-text-center">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-transfer"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,wt,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ue],encapsulation:2})}return a})();function Pt(a,q){if(a&1&&(Cl(0,"div",0),Hl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),og()),a&2){let m=q;Lp(),ZE("p-value",m.name),Lp(),ZE("p-value",m.nickname),Lp(),ZE("p-value",m.email);}}var Ke=(()=>{class a{http=f(tb);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Cl(0,"div",0)(1,"po-widget",1),dt("p-primary-action",function(){return n.knowMore(n.heroName)}),Cl(2,"po-combo",2),gw("ngModelChange",function(c){return Zx(n.heroName,c)||(n.heroName=c),c}),dt("p-change",function(c){return n.onChangeHero(c)}),og(),Z0(),ix(3,Pt,4,3,"div",0),dN(4,"async"),og()()),p&2){let d;Lp(),ZE("p-primary-label",n.knowMoreLabel),Lp(),pw("ngModel",n.heroName),X0(),Lp(),ox((d=hN(4,3,n.hero$))?3:-1,d);}},dependencies:[sY,gk,k3,sme,ONe,IO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo - Heroes"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-heroes"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Tt,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ke],encapsulation:2})}return a})();function Lt(a,q){if(a&1&&(Cl(0,"div",0),Hl(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),og()),a&2){let m=q;Lp(),ZE("p-value",m.name),Lp(),ZE("p-value",m.nickname),Lp(),ZE("p-value",m.email);}}var Ye=(()=>{class a{http=f(tb);formBuilder=f(fY);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,am.required]});}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let m=this.form.get("hero").value;window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:false,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Cl(0,"div",0)(1,"po-widget",1),dt("p-primary-action",function(){return n.knowMore()}),Cl(2,"div",2)(3,"po-combo",3),dt("p-change",function(c){return n.onChangeHero(c)}),og(),Z0(),og(),ix(4,Lt,4,3,"div",0),dN(5,"async"),og()()),p&2){let d;Lp(),ZE("p-primary-label",n.knowMoreLabel),Lp(),ZE("formGroup",n.form),Lp(),X0(),Lp(),ox((d=hN(5,3,n.hero$))?4:-1,d);}},dependencies:[sY,aY,bk,wk,k3,sme,ONe,IO],encapsulation:2,changeDetection:1})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo - Heroes Reactive Form"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-heroes-reactive-form"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Dt,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ye],encapsulation:2})}return a})();function qt(a,q){if(a&1&&(Cl(0,"div",0),Hl(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),og()),a&2){let m=q;Lp(),ZE("p-value",m.name),Lp(),ZE("p-value",m.nickname),Lp(),ZE("p-value",m.email);}}var Ze=(()=>{class a{http=f(tb);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m);}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(Cl(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),gw("ngModelChange",function(c){return Zx(n.peopleName,c)||(n.peopleName=c),c}),dt("p-change",function(c){return n.onChangePeople(c)}),og(),Z0(),ix(3,qt,4,3,"div",0),dN(4,"async"),og()()),p&2){let d;Lp(2),pw("ngModel",n.peopleName),ZE("p-infinite-scroll",true),X0(),Lp(),ox((d=hN(4,3,n.people$))?3:-1,d);}},dependencies:[sY,gk,k3,sme,ONe,IO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a}),$e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo - Inifity Scroll"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-infinity-scroll"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Nt,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ze],encapsulation:2})}return a})();var Bt=["bookingForm"],Ht=["datepicker"],et=(()=>{class a{poNotification=f(Xp);form;datepickerComponent;adults=1;category=false;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus();}onChangeParams(m){this.filterParams=m?{category:"Luxo"}:{},this.hotel=void 0;}formReset(){this.form.reset({adults:1,category:false,children:0,rooms:1});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&zl(Bt,7)(Ht,7),p&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.datepickerComponent=d.first);}},standalone:false,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let d=gx();Cl(0,"div",2)(1,"div",3),qx(2,"Booking a Hotel"),og()(),Cl(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),gw("ngModelChange",function(i){return Jy(d),Zx(n.checkin,i)||(n.checkin=i),e_(i)}),og(),Z0(),Cl(8,"po-datepicker",6),gw("ngModelChange",function(i){return Jy(d),Zx(n.checkout,i)||(n.checkout=i),e_(i)}),og(),Z0(),Cl(9,"po-switch",7),gw("ngModelChange",function(i){return Jy(d),Zx(n.category,i)||(n.category=i),e_(i)}),dt("p-change",function(i){return n.onChangeParams(i)}),og(),Z0(),og(),Cl(10,"div",4)(11,"po-select",8),gw("ngModelChange",function(i){return Jy(d),Zx(n.rooms,i)||(n.rooms=i),e_(i)}),og(),Z0(),Cl(12,"po-select",9),gw("ngModelChange",function(i){return Jy(d),Zx(n.children,i)||(n.children=i),e_(i)}),og(),Z0(),Cl(13,"po-select",10),gw("ngModelChange",function(i){return Jy(d),Zx(n.adults,i)||(n.adults=i),e_(i)}),og(),Z0(),og(),Cl(14,"div",4)(15,"po-combo",11),gw("ngModelChange",function(i){return Jy(d),Zx(n.hotel,i)||(n.hotel=i),e_(i)}),og(),Z0(),og(),Cl(16,"div",4)(17,"po-button",12),dt("p-click",function(){return n.booking()}),og()()();}if(p&2){let d=Sx(4);Lp(6),pw("ngModel",n.checkin),ZE("p-max-date",n.checkout),X0(),Lp(2),pw("ngModel",n.checkout),ZE("p-min-date",n.checkin),X0(),Lp(),pw("ngModel",n.category),X0(),Lp(2),pw("ngModel",n.rooms),ZE("p-options",n.roomsOptions),X0(),Lp(),pw("ngModel",n.children),ZE("p-options",n.childrenOptions),X0(),Lp(),pw("ngModel",n.adults),ZE("p-options",n.adultsOptions),X0(),Lp(2),pw("ngModel",n.hotel),ZE("p-filter-params",n.filterParams),X0(),Lp(2),ZE("p-disabled",d.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,k3,Wde,nme,H3],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a}),tt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Combo - Booking Hotel"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-text-center">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-combo-hotels"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,It,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,et],encapsulation:2})}return a})();var ot=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-doc"]],standalone:false,decls:1854,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoComboComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O "),Cl(24,"code"),qx(25,"po-combo"),og(),qx(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),og(),Cl(27,"p"),qx(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),og(),Cl(29,"p"),qx(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),Cl(31,"em"),qx(32,"mouse"),og(),qx(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Cl(34,"em"),qx(35,"Enter"),og(),qx(36," na op\xE7\xE3o que desejar."),og(),Cl(37,"p"),qx(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Cl(39,"code"),qx(40,"p-filter-service"),og(),qx(41,"."),og(),Cl(42,"p"),qx(43,"Em "),Cl(44,"code"),qx(45,"p-filter-mode"),og(),qx(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),og(),Cl(47,"p"),qx(48,"O "),Cl(49,"code"),qx(50,"po-combo"),og(),qx(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),Cl(52,"em"),qx(53,"Esc"),og(),qx(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Cl(55,"em"),qx(56,"Enter"),og(),qx(57,"."),og(),Cl(58,"p"),qx(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),og(),Cl(60,"h4"),qx(61,"Tokens customiz\xE1veis"),og(),Cl(62,"p"),qx(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(64,"blockquote")(65,"p"),qx(66,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(67,"a",6),qx(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(69,"."),og()(),Cl(70,"table")(71,"thead")(72,"tr")(73,"th"),qx(74,"Propriedade"),og(),Cl(75,"th"),qx(76,"Descri\xE7\xE3o"),og(),Cl(77,"th"),qx(78,"Valor Padr\xE3o"),og()()(),Cl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),qx(83,"Default Values"),og()(),Hl(84,"td")(85,"td"),og(),Cl(86,"tr")(87,"td")(88,"code"),qx(89,"--font-family"),og()(),Cl(90,"td"),qx(91,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(92,"td")(93,"code"),qx(94,"var(--font-family-theme)"),og()()(),Cl(95,"tr")(96,"td")(97,"code"),qx(98,"--font-size"),og()(),Cl(99,"td"),qx(100,"Tamanho da fonte"),og(),Cl(101,"td")(102,"code"),qx(103,"var(--font-size-default)"),og()()(),Cl(104,"tr")(105,"td")(106,"code"),qx(107,"--text-color"),og()(),Cl(108,"td"),qx(109,"Cor do texto"),og(),Cl(110,"td")(111,"code"),qx(112,"var(--color-neutral-dark-90)"),og()()(),Cl(113,"tr")(114,"td")(115,"code"),qx(116,"--text-color-placeholder"),og()(),Cl(117,"td"),qx(118,"Cor do texto no placeholder"),og(),Cl(119,"td")(120,"code"),qx(121,"var(--color-neutral-light-30)"),og()()(),Cl(122,"tr")(123,"td")(124,"code"),qx(125,"--color"),og()(),Cl(126,"td"),qx(127,"Cor principal do Combo"),og(),Cl(128,"td")(129,"code"),qx(130,"var(--color-neutral-dark-70)"),og()()(),Cl(131,"tr")(132,"td")(133,"code"),qx(134,"--background"),og()(),Cl(135,"td"),qx(136,"Cor de background"),og(),Cl(137,"td")(138,"code"),qx(139,"var(--color-neutral-light-05)"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--border-radius"),og()(),Cl(144,"td"),qx(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(146,"td")(147,"code"),qx(148,"var(--border-width-lg)"),og()()(),Cl(149,"tr")(150,"td")(151,"code"),qx(152,"--min-width"),og()(),Cl(153,"td"),qx(154,"Largura m\xEDnima do combo"),og(),Cl(155,"td")(156,"code"),qx(157,"150px"),og()()(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--field-container-title-justify"),og()(),Cl(162,"td"),qx(163,"Alinhamento horizontal do t\xEDtulo ("),Cl(164,"code"),qx(165,"justify-content"),og(),qx(166,")"),og(),Cl(167,"td")(168,"code"),qx(169,"space-between"),og()()(),Cl(170,"tr")(171,"td")(172,"code"),qx(173,"--field-container-title-flex"),og()(),Cl(174,"td"),qx(175,"Flex do t\xEDtulo ("),Cl(176,"code"),qx(177,"flex"),og(),qx(178,")"),og(),Cl(179,"td")(180,"code"),qx(181,"1 auto"),og()()(),Cl(182,"tr")(183,"td")(184,"strong"),qx(185,"Hover"),og()(),Hl(186,"td")(187,"td"),og(),Cl(188,"tr")(189,"td")(190,"code"),qx(191,"--color-hover"),og()(),Cl(192,"td"),qx(193,"Cor principal no estado hover"),og(),Cl(194,"td")(195,"code"),qx(196,"var(--color-action-hover)"),og()()(),Cl(197,"tr")(198,"td")(199,"code"),qx(200,"--background-hover"),og()(),Cl(201,"td"),qx(202,"Cor de background no estado hover"),og(),Cl(203,"td")(204,"code"),qx(205,"var(--color-brand-01-lightest)"),og()()(),Cl(206,"tr")(207,"td")(208,"strong"),qx(209,"Focused"),og()(),Hl(210,"td")(211,"td"),og(),Cl(212,"tr")(213,"td")(214,"code"),qx(215,"--color-focused"),og()(),Cl(216,"td"),qx(217,"Cor principal no estado de focus"),og(),Cl(218,"td")(219,"code"),qx(220,"var(--color-action-default)"),og()()(),Cl(221,"tr")(222,"td")(223,"code"),qx(224,"--outline-color-focused"),og()(),Cl(225,"td"),qx(226,"Cor do outline do estado de focus"),og(),Cl(227,"td")(228,"code"),qx(229,"var(--color-action-focus)"),og()()(),Cl(230,"tr")(231,"td")(232,"strong"),qx(233,"Error"),og()(),Hl(234,"td")(235,"td"),og(),Cl(236,"tr")(237,"td")(238,"code"),qx(239,"--color-error"),og()(),Cl(240,"td"),qx(241,"Cor principal no estado de erro"),og(),Cl(242,"td")(243,"code"),qx(244,"var(--color-feedback-negative-base)"),og()()(),Cl(245,"tr")(246,"td")(247,"strong"),qx(248,"Disabled"),og()(),Hl(249,"td")(250,"td"),og(),Cl(251,"tr")(252,"td")(253,"code"),qx(254,"--color-disabled"),og()(),Cl(255,"td"),qx(256,"Cor principal no estado disabled"),og(),Cl(257,"td")(258,"code"),qx(259,"var(--color-neutral-light-30)"),og()()(),Cl(260,"tr")(261,"td")(262,"code"),qx(263,"--background-disabled"),og()(),Cl(264,"td"),qx(265,"Cor de background no estado disabled"),og(),Cl(266,"td")(267,"code"),qx(268,"var(--color-neutral-light-20)"),og()()(),Cl(269,"tr")(270,"td")(271,"strong"),qx(272,"Suggestion"),og()(),Hl(273,"td")(274,"td"),og(),Cl(275,"tr")(276,"td")(277,"code"),qx(278,"--text-color-suggestion"),og()(),Cl(279,"td"),qx(280,"Cor do texto no estado suggestion"),og(),Cl(281,"td")(282,"code"),qx(283,"var(--color-neutral-mid-60)"),og()()(),Cl(284,"tr")(285,"td")(286,"code"),qx(287,"--background-suggestion"),og()(),Cl(288,"td"),qx(289,"Cor do background no estado suggestion"),og(),Cl(290,"td")(291,"code"),qx(292,"var(--color-brand-01-lightest)"),og()()()()()(),Cl(293,"div",7)(294,"h4",8),qx(295,"Seletor"),og(),Cl(296,"pre",9),qx(297,`<po-combo
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
`),og()(),Cl(298,"h4",10),qx(299,"Propriedades"),og(),Cl(300,"table",11)(301,"tr",12)(302,"th",13),qx(303,"Nome"),og(),Cl(304,"th",13),qx(305,"Tipo"),og(),Cl(306,"th",13),qx(307,"Padr\xE3o"),og(),Cl(308,"th",13),qx(309,"Descri\xE7\xE3o"),og()(),Cl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),qx(314," (p-additional-help)"),Hl(315,"br"),og()(),Cl(316,"div",18),qx(317,"Deprecated"),og()(),Cl(318,"td",19)(319,"code",20),qx(320,"EventEmitter"),og()(),Cl(321,"td",21),qx(322,"-"),og(),Cl(323,"td",22)(324,"em")(325,"strong"),qx(326,"(opcional)"),og()(),Cl(327,"p"),qx(328,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(329,"blockquote")(330,"p"),qx(331,"Essa propriedade est\xE1 "),Cl(332,"strong"),qx(333,"depreciada"),og(),qx(334," e ser\xE1 removida na vers\xE3o "),Cl(335,"code"),qx(336,"23.x.x"),og(),qx(337,". Recomendamos utilizar a propriedade "),Cl(338,"code"),qx(339,"p-helper"),og(),qx(340," que oferece mais recursos e flexibilidade."),og()()()(),Cl(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),qx(345," p-additional-help-tooltip"),Hl(346,"br"),og()(),Cl(347,"div",18),qx(348,"Deprecated"),og()(),Cl(349,"td",19)(350,"code",25),qx(351,"string"),og()(),Cl(352,"td",21),qx(353,"-"),og(),Cl(354,"td",22)(355,"em")(356,"strong"),qx(357,"(opcional)"),og()(),Cl(358,"p"),qx(359,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(360,"code"),qx(361,"po-helper"),og(),qx(362,`.
`),Cl(363,"strong"),qx(364,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(365,"blockquote")(366,"p"),qx(367,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(368,"blockquote")(369,"p"),qx(370,"Essa propriedade est\xE1 "),Cl(371,"strong"),qx(372,"depreciada"),og(),qx(373," e ser\xE1 removida na vers\xE3o "),Cl(374,"code"),qx(375,"23.x.x"),og(),qx(376,". Recomendamos utilizar a propriedade "),Cl(377,"code"),qx(378,"p-helper"),og(),qx(379," que oferece mais recursos e flexibilidade."),og()()()(),Cl(380,"tr",14)(381,"td",15)(382,"div",23)(383,"span",24),qx(384," p-append-in-body"),Hl(385,"br"),og()()(),Cl(386,"td",19)(387,"code",26),qx(388,"boolean"),og()(),Cl(389,"td",21)(390,"p")(391,"code"),qx(392,"false"),og()()(),Cl(393,"td",22)(394,"em")(395,"strong"),qx(396,"(opcional)"),og()(),Cl(397,"p"),qx(398,"Define que o "),Cl(399,"code"),qx(400,"listbox"),og(),qx(401," e/ou popover ("),Cl(402,"code"),qx(403,"p-helper"),og(),qx(404," e/ou "),Cl(405,"code"),qx(406,"p-error-limit"),og(),qx(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Cl(408,"blockquote")(409,"p"),qx(410,"Quando utilizado com "),Cl(411,"code"),qx(412,"p-helper"),og(),qx(413,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(414,"tr",14)(415,"td",15)(416,"div",23)(417,"span",24),qx(418," p-auto-focus"),Hl(419,"br"),og()()(),Cl(420,"td",19)(421,"code",26),qx(422,"boolean"),og()(),Cl(423,"td",21)(424,"p")(425,"code"),qx(426,"false"),og()()(),Cl(427,"td",22)(428,"em")(429,"strong"),qx(430,"(opcional)"),og()(),Cl(431,"p"),qx(432,"Aplica foco no elemento ao ser iniciado."),og(),Cl(433,"blockquote")(434,"p"),qx(435,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),qx(440," (p-blur)"),Hl(441,"br"),og()()(),Cl(442,"td",19)(443,"code",20),qx(444,"EventEmitter"),og()(),Cl(445,"td",21),qx(446,"-"),og(),Cl(447,"td",22)(448,"em")(449,"strong"),qx(450,"(opcional)"),og()(),Cl(451,"p"),qx(452,"Evento disparado ao sair do campo."),og()()(),Cl(453,"tr",14)(454,"td",15)(455,"div",23)(456,"span",24),qx(457," p-cache"),Hl(458,"br"),og()()(),Cl(459,"td",19)(460,"code",26),qx(461,"boolean"),og()(),Cl(462,"td",21)(463,"p")(464,"code"),qx(465,"true"),og()()(),Cl(466,"td",22)(467,"em")(468,"strong"),qx(469,"(opcional)"),og()(),Cl(470,"p"),qx(471,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),og(),Cl(472,"blockquote")(473,"p"),qx(474,"Caso o valor seja "),Cl(475,"code"),qx(476,"false"),og(),qx(477,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),og()()()(),Cl(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),qx(482," (p-change)"),Hl(483,"br"),og()()(),Cl(484,"td",19)(485,"code",20),qx(486,"EventEmitter"),og()(),Cl(487,"td",21),qx(488,"-"),og(),Cl(489,"td",22)(490,"em")(491,"strong"),qx(492,"(opcional)"),og()(),Cl(493,"p"),qx(494,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),og(),Cl(495,"blockquote")(496,"p"),qx(497,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),Cl(498,"code"),qx(499,"p-emit-object-value"),og(),qx(500,"."),og()()()(),Cl(501,"tr",14)(502,"td",15)(503,"div",23)(504,"span",24),qx(505," p-change-on-enter"),Hl(506,"br"),og()()(),Cl(507,"td",19)(508,"code",26),qx(509,"boolean"),og()(),Cl(510,"td",21)(511,"p")(512,"code"),qx(513,"false"),og()()(),Cl(514,"td",22)(515,"em")(516,"strong"),qx(517,"(opcional)"),og()(),Cl(518,"p"),qx(519,"Indica que o evento "),Cl(520,"code"),qx(521,"p-change"),og(),qx(522,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),og()()(),Cl(523,"tr",14)(524,"td",15)(525,"div",23)(526,"span",24),qx(527," p-clean"),Hl(528,"br"),og()()(),Cl(529,"td",19)(530,"code",26),qx(531,"boolean"),og()(),Cl(532,"td",21),qx(533,"-"),og(),Cl(534,"td",22)(535,"em")(536,"strong"),qx(537,"(opcional)"),og()(),Cl(538,"p"),qx(539,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Cl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),qx(544," p-compact-label"),Hl(545,"br"),og()()(),Cl(546,"td",19)(547,"code",26),qx(548,"boolean"),og()(),Cl(549,"td",21)(550,"p")(551,"code"),qx(552,"false"),og()()(),Cl(553,"td",22)(554,"em")(555,"strong"),qx(556,"(opcional)"),og()(),Cl(557,"p"),qx(558,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(559,"p"),qx(560,"Quando habilitado ("),Cl(561,"code"),qx(562,"true"),og(),qx(563,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(564,"ul")(565,"li")(566,"code"),qx(567,"po-label"),og()(),Cl(568,"li")(569,"code"),qx(570,"p-requirement (showRequired)"),og()(),Cl(571,"li")(572,"code"),qx(573,"po-helper"),og()()(),Cl(574,"p"),qx(575,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(576,"p"),qx(577,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(578,"ul")(579,"li")(580,"code"),qx(581,"--field-container-title-justify"),og()(),Cl(582,"li")(583,"code"),qx(584,"--field-container-title-flex"),og()()(),Cl(585,"p"),qx(586,"Exemplo:"),og(),Cl(587,"pre")(588,"code"),qx(589,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(590,"p"),qx(591,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),qx(596," p-debounce-time"),Hl(597,"br"),og()()(),Cl(598,"td",19)(599,"code",27),qx(600,"number"),og()(),Cl(601,"td",21)(602,"p")(603,"code"),qx(604,"400"),og()()(),Cl(605,"td",22)(606,"em")(607,"strong"),qx(608,"(opcional)"),og()(),Cl(609,"p"),qx(610,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Cl(611,"code"),qx(612,"p-filter-service"),og(),qx(613,")."),og()()(),Cl(614,"tr",14)(615,"td",15)(616,"div",23)(617,"span",24),qx(618," p-disabled"),Hl(619,"br"),og()()(),Cl(620,"td",19)(621,"code",26),qx(622,"boolean"),og()(),Cl(623,"td",21)(624,"p")(625,"code"),qx(626,"false"),og()()(),Cl(627,"td",22)(628,"em")(629,"strong"),qx(630,"(opcional)"),og()(),Cl(631,"p"),qx(632,"Indica que o campo ser\xE1 desabilitado."),og()()(),Cl(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),qx(637," p-disabled-init-filter"),Hl(638,"br"),og()()(),Cl(639,"td",19)(640,"code",26),qx(641,"boolean"),og()(),Cl(642,"td",21)(643,"p")(644,"code"),qx(645,"false"),og()()(),Cl(646,"td",22)(647,"em")(648,"strong"),qx(649,"(opcional)"),og()(),Cl(650,"p"),qx(651,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),og()()(),Cl(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),qx(656," p-disabled-tab-filter"),Hl(657,"br"),og()()(),Cl(658,"td",19)(659,"code",26),qx(660,"boolean"),og()(),Cl(661,"td",21)(662,"p")(663,"code"),qx(664,"false"),og()()(),Cl(665,"td",22)(666,"em")(667,"strong"),qx(668,"(opcional)"),og()(),Cl(669,"p"),qx(670,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),og()()(),Cl(671,"tr",14)(672,"td",15)(673,"div",23)(674,"span",24),qx(675," p-emit-object-value"),Hl(676,"br"),og()()(),Cl(677,"td",19)(678,"code",26),qx(679,"boolean"),og()(),Cl(680,"td",21)(681,"p")(682,"code"),qx(683,"false"),og()()(),Cl(684,"td",22)(685,"em")(686,"strong"),qx(687,"(opcional)"),og()(),Cl(688,"p"),qx(689,"Se verdadeiro, o evento "),Cl(690,"code"),qx(691,"p-change"),og(),qx(692," receber\xE1 como argumento o "),Cl(693,"code"),qx(694,"PoComboOption"),og(),qx(695," referente \xE0 op\xE7\xE3o selecionada."),og()()(),Cl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),qx(700," p-error-limit"),Hl(701,"br"),og()()(),Cl(702,"td",19)(703,"code",26),qx(704,"boolean"),og()(),Cl(705,"td",21)(706,"p")(707,"code"),qx(708,"false"),og()()(),Cl(709,"td",22)(710,"em")(711,"strong"),qx(712,"(opcional)"),og()(),Cl(713,"p"),qx(714,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(715,"blockquote")(716,"p"),qx(717,"Caso essa propriedade seja definida como "),Cl(718,"code"),qx(719,"true"),og(),qx(720,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(721,"tr",14)(722,"td",15)(723,"div",23)(724,"span",24),qx(725," p-field-error-message"),Hl(726,"br"),og()()(),Cl(727,"td",19)(728,"code",25),qx(729,"string"),og()(),Cl(730,"td",21),qx(731,"-"),og(),Cl(732,"td",22)(733,"em")(734,"strong"),qx(735,"(opcional)"),og()(),Cl(736,"p"),qx(737,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(738,"blockquote")(739,"p"),qx(740,"Necess\xE1rio que a propriedade "),Cl(741,"code"),qx(742,"p-required"),og(),qx(743," esteja habilitada."),og()()()(),Cl(744,"tr",14)(745,"td",15)(746,"div",23)(747,"span",24),qx(748," p-field-label"),Hl(749,"br"),og()()(),Cl(750,"td",19)(751,"code",25),qx(752,"string"),og()(),Cl(753,"td",21)(754,"p")(755,"code"),qx(756,"label"),og()()(),Cl(757,"td",22)(758,"em")(759,"strong"),qx(760,"(opcional)"),og()(),Cl(761,"p"),qx(762,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Cl(763,"code"),qx(764,"p-options"),og(),qx(765,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og(),Cl(766,"p"),qx(767,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),og()()(),Cl(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),qx(772," p-field-value"),Hl(773,"br"),og()()(),Cl(774,"td",19)(775,"code",25),qx(776,"string"),og()(),Cl(777,"td",21)(778,"p")(779,"code"),qx(780,"value"),og()()(),Cl(781,"td",22)(782,"em")(783,"strong"),qx(784,"(opcional)"),og()(),Cl(785,"p"),qx(786,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Cl(787,"code"),qx(788,"p-options"),og(),qx(789,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og(),Cl(790,"p"),qx(791,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),og()()(),Cl(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),qx(796," p-filter-minlength"),Hl(797,"br"),og()()(),Cl(798,"td",19)(799,"code",27),qx(800,"number"),og()(),Cl(801,"td",21)(802,"p")(803,"code"),qx(804,"0"),og()()(),Cl(805,"td",22)(806,"em")(807,"strong"),qx(808,"(opcional)"),og()(),Cl(809,"p"),qx(810,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),og()()(),Cl(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),qx(815," p-filter-mode"),Hl(816,"br"),og()()(),Cl(817,"td",19)(818,"code",28),qx(819,"PoComboFilterMode"),og()(),Cl(820,"td",21)(821,"p")(822,"code"),qx(823,"startsWith"),og()()(),Cl(824,"td",22)(825,"em")(826,"strong"),qx(827,"(opcional)"),og()(),Cl(828,"p"),qx(829,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Cl(830,"code"),qx(831,"startsWith"),og(),qx(832,", "),Cl(833,"code"),qx(834,"contains"),og(),qx(835," ou "),Cl(836,"code"),qx(837,"endsWith"),og(),qx(838,"."),og(),Cl(839,"blockquote")(840,"p"),qx(841,"Quando utilizar a propriedade "),Cl(842,"code"),qx(843,"p-filter-service"),og(),qx(844," esta propriedade ser\xE1 ignorada."),og()()()(),Cl(845,"tr",14)(846,"td",15)(847,"div",23)(848,"span",24),qx(849," p-filter-params"),Hl(850,"br"),og()()(),Cl(851,"td",19)(852,"code",29),qx(853,"any"),og()(),Cl(854,"td",21),qx(855,"-"),og(),Cl(856,"td",22)(857,"em")(858,"strong"),qx(859,"(opcional)"),og()(),Cl(860,"p"),qx(861,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Cl(862,"em"),qx(863,"PoComboFilter"),og(),qx(864,"."),og(),Cl(865,"blockquote")(866,"p"),qx(867,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),og()()()(),Cl(868,"tr",14)(869,"td",15)(870,"div",23)(871,"span",24),qx(872," p-filter-service"),Hl(873,"br"),og()()(),Cl(874,"td",19)(875,"code",30),qx(876,"PoComboFilter "),og(),Cl(877,"code",25),qx(878," string"),og()(),Cl(879,"td",21),qx(880,"-"),og(),Cl(881,"td",22)(882,"em")(883,"strong"),qx(884,"(opcional)"),og()(),Cl(885,"p"),qx(886,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),og(),Cl(887,"p"),qx(888,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Cl(889,"code"),qx(890,"p-field-label"),og(),qx(891," e "),Cl(892,"code"),qx(893,"p-field-value"),og(),qx(894," para a constru\xE7\xE3o da lista de itens."),og(),Cl(895,"p"),qx(896,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),og(),Cl(897,"pre")(898,"code"),qx(899,`url + ?filter=Peter
`),og()(),Cl(900,"p"),qx(901,"Se for definida a propriedade "),Cl(902,"code"),qx(903,"p-filter-params"),og(),qx(904,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Cl(905,"code"),qx(906,"{ age: 23 }"),og(),qx(907," a URL ficaria:"),og(),Cl(908,"pre")(909,"code"),qx(910,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()()()(),Cl(911,"tr",14)(912,"td",15)(913,"div",23)(914,"span",24),qx(915," p-help"),Hl(916,"br"),og()()(),Cl(917,"td",19)(918,"code",25),qx(919,"string"),og()(),Cl(920,"td",21),qx(921,"-"),og(),Cl(922,"td",22)(923,"em")(924,"strong"),qx(925,"(opcional)"),og()(),Cl(926,"p"),qx(927,"Texto de apoio para o campo."),og()()(),Cl(928,"tr",14)(929,"td",15)(930,"div",23)(931,"span",24),qx(932," p-icon"),Hl(933,"br"),og()()(),Cl(934,"td",19)(935,"code",25),qx(936,"string "),og(),Cl(937,"code",31),qx(938," TemplateRef<void>"),og()(),Cl(939,"td",21),qx(940,"-"),og(),Cl(941,"td",22)(942,"em")(943,"strong"),qx(944,"(opcional)"),og()(),Cl(945,"p"),qx(946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(947,"p"),qx(948,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(949,"a",32),qx(950,"Biblioteca de \xEDcones"),og(),qx(951,". conforme exemplo abaixo:"),og(),Cl(952,"pre")(953,"code"),qx(954,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),og()(),Cl(955,"p"),qx(956,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(957,"em"),qx(958,"Font Awesome"),og(),qx(959,", da seguinte forma:"),og(),Cl(960,"pre")(961,"code"),qx(962,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),og()(),Cl(963,"p"),qx(964,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(965,"code"),qx(966,"TemplateRef"),og(),qx(967,", conforme exemplo abaixo:"),og(),Cl(968,"pre")(969,"code"),qx(970,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(971,"blockquote")(972,"p"),qx(973,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(974,"code"),qx(975,"font-size: inherit"),og(),qx(976," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(977,"tr",14)(978,"td",15)(979,"div",23)(980,"span",24),qx(981," p-infinite-scroll"),Hl(982,"br"),og()()(),Cl(983,"td",19)(984,"code",26),qx(985,"boolean"),og()(),Cl(986,"td",21)(987,"p")(988,"code"),qx(989,"false"),og()()(),Cl(990,"td",22)(991,"em")(992,"strong"),qx(993,"(opcional)"),og()(),Cl(994,"p"),qx(995,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og()()(),Cl(996,"tr",14)(997,"td",15)(998,"div",23)(999,"span",24),qx(1e3," p-infinite-scroll-distance"),Hl(1001,"br"),og()()(),Cl(1002,"td",19)(1003,"code",27),qx(1004,"number"),og()(),Cl(1005,"td",21),qx(1006,"-"),og(),Cl(1007,"td",22)(1008,"em")(1009,"strong"),qx(1010,"(opcional)"),og()(),Cl(1011,"p"),qx(1012,"Define o percentual necess\xE1rio para disparar o evento "),Cl(1013,"code"),qx(1014,"show-more"),og(),qx(1015,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),og(),Cl(1016,"p")(1017,"strong"),qx(1018,"Exemplos"),og()(),Cl(1019,"ul")(1020,"li"),qx(1021,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),Cl(1022,"code"),qx(1023,"show-more"),og(),qx(1024," ser\xE1 disparado."),og()()()(),Cl(1025,"tr",14)(1026,"td",15)(1027,"div",16)(1028,"span",17),qx(1029," (p-input-change)"),Hl(1030,"br"),og()()(),Cl(1031,"td",19)(1032,"code",20),qx(1033,"EventEmitter"),og()(),Cl(1034,"td",21),qx(1035,"-"),og(),Cl(1036,"td",22)(1037,"em")(1038,"strong"),qx(1039,"(opcional)"),og()(),Cl(1040,"p"),qx(1041,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),og()()(),Cl(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),qx(1046," (p-keydown)"),Hl(1047,"br"),og()()(),Cl(1048,"td",19)(1049,"code",20),qx(1050,"EventEmitter"),og()(),Cl(1051,"td",21),qx(1052,"-"),og(),Cl(1053,"td",22)(1054,"em")(1055,"strong"),qx(1056,"(opcional)"),og()(),Cl(1057,"p"),qx(1058,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(1059,"code"),qx(1060,"KeyboardEvent"),og(),qx(1061," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(1062,"tr",14)(1063,"td",15)(1064,"div",23)(1065,"span",24),qx(1066," p-label"),Hl(1067,"br"),og()()(),Cl(1068,"td",19)(1069,"code",25),qx(1070,"string"),og()(),Cl(1071,"td",21),qx(1072,"-"),og(),Cl(1073,"td",22)(1074,"em")(1075,"strong"),qx(1076,"(opcional)"),og()(),Cl(1077,"p"),qx(1078,"Label no componente."),og()()(),Cl(1079,"tr",14)(1080,"td",15)(1081,"div",23)(1082,"span",24),qx(1083," p-label-text-wrap"),Hl(1084,"br"),og()()(),Cl(1085,"td",19)(1086,"code",26),qx(1087,"boolean"),og()(),Cl(1088,"td",21)(1089,"p")(1090,"code"),qx(1091,"false"),og()()(),Cl(1092,"td",22)(1093,"em")(1094,"strong"),qx(1095,"(opcional)"),og()(),Cl(1096,"p"),qx(1097,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(1098,"code"),qx(1099,"p-label"),og(),qx(1100,". Quando "),Cl(1101,"code"),qx(1102,"p-label-text-wrap"),og(),qx(1103,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(1104,"tr",14)(1105,"td",15)(1106,"div",23)(1107,"span",24),qx(1108," p-listbox-control-position"),Hl(1109,"br"),og()()(),Cl(1110,"td",19)(1111,"code",33),qx(1112,"'top' "),og(),Cl(1113,"code",34),qx(1114," 'bottom'"),og()(),Cl(1115,"td",21)(1116,"p")(1117,"code"),qx(1118,"bottom"),og()()(),Cl(1119,"td",22)(1120,"em")(1121,"strong"),qx(1122,"(opcional)"),og()(),Cl(1123,"p"),qx(1124,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Cl(1125,"code"),qx(1126,"listbox"),og(),qx(1127," em rela\xE7\xE3o ao campo ("),Cl(1128,"code"),qx(1129,"top"),og(),qx(1130," ou "),Cl(1131,"code"),qx(1132,"bottom"),og(),qx(1133,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og()()(),Cl(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),qx(1138," p-literals"),Hl(1139,"br"),og()()(),Cl(1140,"td",19)(1141,"code",35),qx(1142,"PoComboLiterals"),og()(),Cl(1143,"td",21),qx(1144,"-"),og(),Cl(1145,"td",22)(1146,"em")(1147,"strong"),qx(1148,"(opcional)"),og()(),Cl(1149,"p"),qx(1150,"Objeto com as literais usadas no "),Cl(1151,"code"),qx(1152,"po-combo"),og(),qx(1153,"."),og(),Cl(1154,"p"),qx(1155,"Para utilizar basta passar a literal que deseja customizar:"),og(),Cl(1156,"pre")(1157,"code"),qx(1158,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),og()(),Cl(1159,"p"),qx(1160,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),og(),Cl(1161,"pre")(1162,"code"),qx(1163,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),og()(),Cl(1164,"blockquote")(1165,"p"),qx(1166,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(1167,"a",36)(1168,"code"),qx(1169,"PoI18nService"),og()(),qx(1170," ou do browser."),og()()()(),Cl(1171,"tr",14)(1172,"td",15)(1173,"div",23)(1174,"span",24),qx(1175," p-loading"),Hl(1176,"br"),og()()(),Cl(1177,"td",19)(1178,"code",26),qx(1179,"boolean"),og()(),Cl(1180,"td",21)(1181,"p")(1182,"code"),qx(1183,"false"),og()()(),Cl(1184,"td",22)(1185,"em")(1186,"strong"),qx(1187,"(opcional)"),og()(),Cl(1188,"p"),qx(1189,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(1190,"tr",14)(1191,"td",15)(1192,"div",23)(1193,"span",24),qx(1194," name"),Hl(1195,"br"),og()()(),Cl(1196,"td",19)(1197,"code",25),qx(1198,"string"),og()(),Cl(1199,"td",21),qx(1200,"-"),og(),Cl(1201,"td",22)(1202,"p"),qx(1203,"Nome do componente."),og()()(),Cl(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),qx(1208," (ngModelChange)"),Hl(1209,"br"),og()()(),Cl(1210,"td",19)(1211,"code",20),qx(1212,"EventEmitter"),og()(),Cl(1213,"td",21),qx(1214,"-"),og(),Cl(1215,"td",22)(1216,"em")(1217,"strong"),qx(1218,"(opcional)"),og()(),Cl(1219,"p"),qx(1220,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),og(),Cl(1221,"p"),qx(1222,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),Cl(1223,"code"),qx(1224,"strictTemplates"),og(),qx(1225,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),og(),Cl(1226,"pre")(1227,"code"),qx(1228,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),og()()()(),Cl(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),qx(1233," p-optional"),Hl(1234,"br"),og()()(),Cl(1235,"td",19)(1236,"code",26),qx(1237,"boolean"),og()(),Cl(1238,"td",21)(1239,"p")(1240,"code"),qx(1241,"false"),og()()(),Cl(1242,"td",22)(1243,"em")(1244,"strong"),qx(1245,"(opcional)"),og()(),Cl(1246,"p"),qx(1247,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(1248,"blockquote")(1249,"p"),qx(1250,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1251,"ul")(1252,"li"),qx(1253,"O campo conter "),Cl(1254,"code"),qx(1255,"p-required"),og(),qx(1256,";"),og(),Cl(1257,"li"),qx(1258,"N\xE3o possuir "),Cl(1259,"code"),qx(1260,"p-help"),og(),qx(1261," e/ou "),Cl(1262,"code"),qx(1263,"p-label"),og(),qx(1264,"."),og()()()(),Cl(1265,"tr",14)(1266,"td",15)(1267,"div",23)(1268,"span",24),qx(1269," p-options"),Hl(1270,"br"),og()()(),Cl(1271,"td",19)(1272,"code",37),qx(1273,"Array<PoComboOption "),og(),Cl(1274,"code",38),qx(1275," PoComboOptionGroup "),og(),Cl(1276,"code",39),qx(1277," any>"),og()(),Cl(1278,"td",21),qx(1279,"-"),og(),Cl(1280,"td",22)(1281,"p"),qx(1282,"Nesta propriedade define a lista de op\xE7\xF5es do "),Cl(1283,"code"),qx(1284,"po-combo"),og(),qx(1285,"."),og(),Cl(1286,"blockquote")(1287,"p"),qx(1288,"A lista pode ser definida utilizando um array com o valor representando o "),Cl(1289,"code"),qx(1290,"value"),og(),qx(1291," e o "),Cl(1292,"code"),qx(1293,"label"),og(),qx(1294," das seguintes formas:"),og()(),Cl(1295,"pre")(1296,"code"),qx(1297,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),og()(),Cl(1298,"pre")(1299,"code"),qx(1300,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),og()(),Cl(1301,"ul")(1302,"li"),qx(1303,"Aconselha-se utilizar valores distintos no "),Cl(1304,"code"),qx(1305,"label"),og(),qx(1306," e "),Cl(1307,"code"),qx(1308,"value"),og(),qx(1309," dos itens."),og()()()(),Cl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),qx(1314," p-placeholder"),Hl(1315,"br"),og()()(),Cl(1316,"td",19)(1317,"code",25),qx(1318,"string"),og()(),Cl(1319,"td",21),qx(1320,"-"),og(),Cl(1321,"td",22)(1322,"p"),qx(1323,"Mensagem apresentada enquanto o campo estiver vazio."),og()()(),Cl(1324,"tr",14)(1325,"td",15)(1326,"div",23)(1327,"span",24),qx(1328," p-helper"),Hl(1329,"br"),og()()(),Cl(1330,"td",19)(1331,"code",40),qx(1332,"PoHelperOptions "),og(),Cl(1333,"code",25),qx(1334," string"),og()(),Cl(1335,"td",21),qx(1336,"-"),og(),Cl(1337,"td",22)(1338,"em")(1339,"strong"),qx(1340,"(opcional)"),og()(),Cl(1341,"p"),qx(1342,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1343,"code"),qx(1344,"p-label"),og(),qx(1345," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1346,"code"),qx(1347,"p-label"),og(),qx(1348,"."),og(),Cl(1349,"blockquote")(1350,"p"),qx(1351,"Para mais informa\xE7\xF5es acesse: "),Cl(1352,"a",41),qx(1353,"https://po-ui.io/documentation/po-helper"),og(),qx(1354,"."),og()(),Cl(1355,"blockquote")(1356,"p"),qx(1357,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1358,"code"),qx(1359,"p-additional-help-tooltip"),og(),qx(1360," e "),Cl(1361,"code"),qx(1362,"p-additional-help"),og(),qx(1363,") ser\xE1 ignorado."),og()()()(),Cl(1364,"tr",14)(1365,"td",15)(1366,"div",23)(1367,"span",24),qx(1368," p-remove-initial-filter"),Hl(1369,"br"),og()()(),Cl(1370,"td",19)(1371,"code",26),qx(1372,"boolean"),og()(),Cl(1373,"td",21)(1374,"p")(1375,"code"),qx(1376,"false"),og()()(),Cl(1377,"td",22)(1378,"em")(1379,"strong"),qx(1380,"(opcional)"),og()(),Cl(1381,"p"),qx(1382,"Define se o filtro inicial ser\xE1 removido no primeiro clique do campo."),og(),Cl(1383,"p"),qx(1384,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),og()()(),Cl(1385,"tr",14)(1386,"td",15)(1387,"div",23)(1388,"span",24),qx(1389," p-required"),Hl(1390,"br"),og()()(),Cl(1391,"td",19)(1392,"code",26),qx(1393,"boolean"),og()(),Cl(1394,"td",21)(1395,"p")(1396,"code"),qx(1397,"false"),og()()(),Cl(1398,"td",22)(1399,"em")(1400,"strong"),qx(1401,"(opcional)"),og()(),Cl(1402,"p"),qx(1403,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),qx(1408," p-show-required"),Hl(1409,"br"),og()()(),Cl(1410,"td",19)(1411,"code",26),qx(1412,"boolean"),og()(),Cl(1413,"td",21),qx(1414,"-"),og(),Cl(1415,"td",22)(1416,"p"),qx(1417,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1418,"blockquote")(1419,"p"),qx(1420,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1421,"ul")(1422,"li"),qx(1423,"N\xE3o possuir "),Cl(1424,"code"),qx(1425,"p-help"),og(),qx(1426," e/ou "),Cl(1427,"code"),qx(1428,"p-label"),og(),qx(1429,"."),og()()()(),Cl(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),qx(1434," p-size"),Hl(1435,"br"),og()()(),Cl(1436,"td",19)(1437,"code",25),qx(1438,"string"),og()(),Cl(1439,"td",21)(1440,"p")(1441,"code"),qx(1442,"medium"),og()()(),Cl(1443,"td",22)(1444,"em")(1445,"strong"),qx(1446,"(opcional)"),og()(),Cl(1447,"p"),qx(1448,"Define o tamanho do componente:"),og(),Cl(1449,"ul")(1450,"li")(1451,"code"),qx(1452,"small"),og(),qx(1453,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1454,"li")(1455,"code"),qx(1456,"medium"),og(),qx(1457,": altura do input como 44px."),og()(),Cl(1458,"blockquote")(1459,"p"),qx(1460,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1461,"code"),qx(1462,"medium"),og(),qx(1463,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1464,"a",42),qx(1465,"po-theme"),og(),qx(1466,"."),og()()()(),Cl(1467,"tr",14)(1468,"td",15)(1469,"div",23)(1470,"span",24),qx(1471," p-sort"),Hl(1472,"br"),og()()(),Cl(1473,"td",19)(1474,"code",26),qx(1475,"boolean"),og()(),Cl(1476,"td",21),qx(1477,"-"),og(),Cl(1478,"td",22)(1479,"p"),qx(1480,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og()()()(),Cl(1481,"h3",10),qx(1482,"M\xE9todos"),og(),Cl(1483,"table",43)(1484,"tr",14)(1485,"th",44)(1486,"div",23)(1487,"h4")(1488,"span",24),qx(1489," focus "),og()()()()(),Cl(1490,"tr",22)(1491,"td",22)(1492,"p"),qx(1493,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1494,"p"),qx(1495,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1496,"pre")(1497,"code"),qx(1498,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),og()()()()(),Hl(1499,"br"),Cl(1500,"table",43)(1501,"tr",14)(1502,"th",44)(1503,"div",23)(1504,"h4")(1505,"span",24),qx(1506," showAdditionalHelp "),og()()()()(),Cl(1507,"tr",22)(1508,"td",22)(1509,"p"),qx(1510,"M\xE9todo que exibe "),Cl(1511,"code"),qx(1512,"p-helper"),og(),qx(1513," ou executa a a\xE7\xE3o definida em "),Cl(1514,"code"),qx(1515,"p-helper{eventOnClick}"),og(),qx(1516," ou em "),Cl(1517,"code"),qx(1518,"p-additionalHelp"),og(),qx(1519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1520,"code"),qx(1521,"p-keydown"),og(),qx(1522,"."),og(),Cl(1523,"blockquote")(1524,"p"),qx(1525,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1526,"code"),qx(1527,"po-helper"),og(),qx(1528," quando o componente estiver com foco."),og()(),Cl(1529,"pre")(1530,"code"),qx(1531,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),og()(),Cl(1532,"pre")(1533,"code"),qx(1534,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1535,"br"),Cl(1536,"h3"),qx(1537,"Interfaces"),og(),Cl(1538,"h4",45)(1539,"code",5),qx(1540,"PoComboFilter"),og()(),Cl(1541,"div",2)(1542,"p"),qx(1543,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),og()(),Cl(1544,"h4",10),qx(1545,"M\xE9todos"),og(),Cl(1546,"table",43)(1547,"tr",14)(1548,"th",44)(1549,"div",23)(1550,"h4")(1551,"span",24),qx(1552," getFilteredData "),og()()()()(),Cl(1553,"tr",22)(1554,"td",22)(1555,"p"),qx(1556,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),og()()()(),Cl(1557,"h5")(1558,"b"),qx(1559,"Par\xE2metros"),og()(),Cl(1560,"table",11)(1561,"tr",12)(1562,"th",13),qx(1563,"Nome"),og(),Cl(1564,"th",13),qx(1565,"Tipo"),og(),Cl(1566,"th",13),qx(1567,"Descri\xE7\xE3o"),og()(),Cl(1568,"tr",14)(1569,"td",15),qx(1570," params"),og(),Cl(1571,"td",19)(1572,"code",46),qx(1573," any "),og()(),Cl(1574,"td",22)(1575,"p"),qx(1576,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),og()()(),Cl(1577,"tr",14)(1578,"td",15),qx(1579," filterParams"),og(),Cl(1580,"td",19)(1581,"code",46),qx(1582," any "),og()(),Cl(1583,"td",22)(1584,"p"),qx(1585,"Valor informado atrav\xE9s da propriedade "),Cl(1586,"code"),qx(1587,"p-filter-params"),og(),qx(1588,"."),og()()()(),Hl(1589,"br"),Cl(1590,"table",43)(1591,"tr",14)(1592,"th",44)(1593,"div",23)(1594,"h4")(1595,"span",24),qx(1596," getObjectByValue "),og()()()()(),Cl(1597,"tr",22)(1598,"td",22)(1599,"p"),qx(1600,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),og()()()(),Cl(1601,"h5")(1602,"b"),qx(1603,"Par\xE2metros"),og()(),Cl(1604,"table",11)(1605,"tr",12)(1606,"th",13),qx(1607,"Nome"),og(),Cl(1608,"th",13),qx(1609,"Tipo"),og(),Cl(1610,"th",13),qx(1611,"Descri\xE7\xE3o"),og()(),Cl(1612,"tr",14)(1613,"td",15),qx(1614," value"),og(),Cl(1615,"td",19)(1616,"code",25),qx(1617," string "),og(),Cl(1618,"code",27),qx(1619," number "),og()(),Cl(1620,"td",22)(1621,"p"),qx(1622,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),og()()(),Cl(1623,"tr",14)(1624,"td",15),qx(1625," filterParams"),og(),Cl(1626,"td",19)(1627,"code",46),qx(1628," any "),og()(),Cl(1629,"td",22)(1630,"p"),qx(1631,"Valor informado atrav\xE9s da propriedade "),Cl(1632,"code"),qx(1633,"p-filter-params"),og(),qx(1634,"."),og()()()(),Hl(1635,"br"),Cl(1636,"h4",45)(1637,"code",5),qx(1638,"PoComboLiterals"),og()(),Cl(1639,"div",2)(1640,"p"),qx(1641,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1642,"code"),qx(1643,"po-combo"),og(),qx(1644,"."),og()(),Cl(1645,"h4",10),qx(1646,"Propriedades"),og(),Cl(1647,"table",11)(1648,"tr",12)(1649,"th",13),qx(1650,"Nome"),og(),Cl(1651,"th",13),qx(1652,"Tipo"),og(),Cl(1653,"th",13),qx(1654,"Descri\xE7\xE3o"),og()(),Cl(1655,"tr",14)(1656,"td",15)(1657,"div",23)(1658,"span",24),qx(1659," chooseOption"),Hl(1660,"br"),og()()(),Cl(1661,"td",19)(1662,"code",25),qx(1663,"string"),og()(),Cl(1664,"td",22)(1665,"em")(1666,"strong"),qx(1667,"(opcional)"),og()(),Cl(1668,"p"),qx(1669,"Texto exibido quando o combo estiver vazio."),og()()(),Cl(1670,"tr",14)(1671,"td",15)(1672,"div",23)(1673,"span",24),qx(1674," clean"),Hl(1675,"br"),og()()(),Cl(1676,"td",19)(1677,"code",25),qx(1678,"string"),og()(),Cl(1679,"td",22)(1680,"em")(1681,"strong"),qx(1682,"(opcional)"),og()(),Cl(1683,"p"),qx(1684,"Texto do aria-label do bot\xE3o de limpar"),og()()(),Cl(1685,"tr",14)(1686,"td",15)(1687,"div",23)(1688,"span",24),qx(1689," noData"),Hl(1690,"br"),og()()(),Cl(1691,"td",19)(1692,"code",25),qx(1693,"string"),og()(),Cl(1694,"td",22)(1695,"em")(1696,"strong"),qx(1697,"(opcional)"),og()(),Cl(1698,"p"),qx(1699,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),og()()()(),Cl(1700,"h4",45)(1701,"code",5),qx(1702,"PoComboOptionGroup"),og()(),Cl(1703,"div",2)(1704,"p"),qx(1705,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),Cl(1706,"code"),qx(1707,"po-combo"),og(),qx(1708,"."),og()(),Cl(1709,"h4",10),qx(1710,"Propriedades"),og(),Cl(1711,"table",11)(1712,"tr",12)(1713,"th",13),qx(1714,"Nome"),og(),Cl(1715,"th",13),qx(1716,"Tipo"),og(),Cl(1717,"th",13),qx(1718,"Descri\xE7\xE3o"),og()(),Cl(1719,"tr",14)(1720,"td",15)(1721,"div",23)(1722,"span",24),qx(1723," label"),Hl(1724,"br"),og()()(),Cl(1725,"td",19)(1726,"code",25),qx(1727,"string"),og()(),Cl(1728,"td",22)(1729,"p"),qx(1730,"T\xEDtulo para cada grupo de op\xE7\xF5es."),og(),Cl(1731,"p"),qx(1732,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),og()()(),Cl(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),qx(1737," options"),Hl(1738,"br"),og()()(),Cl(1739,"td",19)(1740,"code",47),qx(1741,"Array<PoComboOption>"),og()(),Cl(1742,"td",22)(1743,"p"),qx(1744,"Lista de itens a serem exibidos."),og()()()(),Cl(1745,"h4",45)(1746,"code",5),qx(1747,"PoComboOption"),og()(),Cl(1748,"div",2)(1749,"p"),qx(1750,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),Cl(1751,"code"),qx(1752,"po-combo"),og(),qx(1753,"."),og()(),Cl(1754,"h4",10),qx(1755,"Propriedades"),og(),Cl(1756,"table",11)(1757,"tr",12)(1758,"th",13),qx(1759,"Nome"),og(),Cl(1760,"th",13),qx(1761,"Tipo"),og(),Cl(1762,"th",13),qx(1763,"Descri\xE7\xE3o"),og()(),Cl(1764,"tr",14)(1765,"td",15)(1766,"div",23)(1767,"span",24),qx(1768," label"),Hl(1769,"br"),og()()(),Cl(1770,"td",19)(1771,"code",25),qx(1772,"string"),og()(),Cl(1773,"td",22)(1774,"em")(1775,"strong"),qx(1776,"(opcional)"),og()(),Cl(1777,"p"),qx(1778,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),og(),Cl(1779,"blockquote")(1780,"p"),qx(1781,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),Cl(1782,"code"),qx(1783,"value"),og(),qx(1784,"."),og()()()(),Cl(1785,"tr",14)(1786,"td",15)(1787,"div",23)(1788,"span",24),qx(1789," value"),Hl(1790,"br"),og()()(),Cl(1791,"td",19)(1792,"code",25),qx(1793,"string "),og(),Cl(1794,"code",27),qx(1795," number"),og()(),Cl(1796,"td",22)(1797,"p"),qx(1798,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),Cl(1799,"em"),qx(1800,"model"),og(),qx(1801,"."),og()()()(),Cl(1802,"h3"),qx(1803,"Enums"),og(),Cl(1804,"h4",4)(1805,"code",5),qx(1806,"PoComboFilterMode"),og()(),Cl(1807,"div",2)(1808,"p"),qx(1809,"Define o tipo de busca usado no po-combo."),og()(),Cl(1810,"h4",10),qx(1811,"Propriedades"),og(),Cl(1812,"table",11)(1813,"tr",12)(1814,"th",13),qx(1815,"Nome"),og(),Cl(1816,"th",13),qx(1817,"Descri\xE7\xE3o"),og()(),Cl(1818,"tr",14)(1819,"td",15)(1820,"div",23)(1821,"span",24),qx(1822," startsWith"),Hl(1823,"br"),og()()(),Cl(1824,"td",22)(1825,"p"),qx(1826,"Verifica se o texto "),Cl(1827,"em"),qx(1828,"inicia"),og(),qx(1829," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),og()()(),Cl(1830,"tr",14)(1831,"td",15)(1832,"div",23)(1833,"span",24),qx(1834," contains"),Hl(1835,"br"),og()()(),Cl(1836,"td",22)(1837,"p"),qx(1838,"Verifica se o texto "),Cl(1839,"em"),qx(1840,"cont\xE9m"),og(),qx(1841," o valor pesquisado."),og()()(),Cl(1842,"tr",14)(1843,"td",15)(1844,"div",23)(1845,"span",24),qx(1846," endsWith"),Hl(1847,"br"),og()()(),Cl(1848,"td",22)(1849,"p"),qx(1850,"Verifica se o texto "),Cl(1851,"em"),qx(1852,"finaliza"),og(),qx(1853," com o valor pesquisado."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var nt=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-combo-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),og()()()),p&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2})}return a})();var zt=[{path:"",component:nt}],it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(zt),bL]})}return a})();var cn=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,it]})}return a})();export{cn as DocPoComboModule};