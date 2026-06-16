import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,E,d as f,aE as Bp,K as KC,cg as uY,ch as om,b8 as $i,N as Ul,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut$1,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,ai as ya,bd as na,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,bR as Qn,ci as To,b9 as Ro,c2 as Ap,aP as Da,a2 as GE,X as we,as as $l,at as uo,au as fo,cj as Ko,aQ as dt$1,ca as bO,a4 as oN,cb as Wx,a5 as aN,c3 as zo,aU as IR,a0 as yO,ao as QA,ar as JA,ck as vk,cl as gk,a3 as D3,F as uw,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ut=()=>({value:"Option 1"}),bt=()=>({value:"Option 2"}),gt=(a,V)=>[a,V],Ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic"]],standalone:false,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&Ul(0,"po-combo",0),p&2&&YE("p-options",eN(3,gt,Qx(1,ut),Qx(2,bt)));},dependencies:[$i],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo Basic"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-basic"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ft,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ue],encapsulation:2})}return a})();var Ke=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0};}changeEvent(m){this.event=m;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(m){this.customLiterals=void 0;}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup;}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=false,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium";}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}];}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(we=>we.label===n&&"options"in we);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return [...m,{label:d,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs"]],standalone:false,decls:44,vars:62,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-compact-label","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=lx();wl(0,"po-combo",2),pw("ngModelChange",function(i){return Qy(d),$x(n.combo,i)||(n.combo=i),Jy(i)}),ut$1("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",3),Ul(3,"po-info",4)(4,"po-info",5),ng(),Ul(5,"po-divider"),wl(6,"form",null,0),Ul(8,"po-divider",6),wl(9,"div",3)(10,"po-switch",7),pw("ngModelChange",function(i){return Qy(d),$x(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),Jy(i)}),ng(),$0(),wl(11,"po-select",8),pw("ngModelChange",function(i){return Qy(d),$x(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),Jy(i)}),ut$1("p-change",function(){return n.optionsGroupSelection()}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(i){return Qy(d),$x(n.optionsGroup,i)||(n.optionsGroup=i),Jy(i)}),ng(),$0(),ng(),Ul(13,"po-divider",10),wl(14,"div",3)(15,"po-input",11),pw("ngModelChange",function(i){return Qy(d),$x(n.option.label,i)||(n.option.label=i),Jy(i)}),ng(),$0(),wl(16,"po-input",12),pw("ngModelChange",function(i){return Qy(d),$x(n.option.value,i)||(n.option.value=i),Jy(i)}),ng(),$0(),ng(),wl(17,"div",3)(18,"po-button",13),ut$1("p-click",function(){return n.addOption()}),ng()()(),Ul(19,"po-divider"),wl(20,"form",null,1)(22,"po-input",14),pw("ngModelChange",function(i){return Qy(d),$x(n.label,i)||(n.label=i),Jy(i)}),ng(),$0(),wl(23,"po-input",15),pw("ngModelChange",function(i){return Qy(d),$x(n.help,i)||(n.help=i),Jy(i)}),ng(),$0(),wl(24,"po-input",16),pw("ngModelChange",function(i){return Qy(d),$x(n.helperText,i)||(n.helperText=i),Jy(i)}),ng(),$0(),wl(25,"po-input",17),pw("ngModelChange",function(i){return Qy(d),$x(n.placeholder,i)||(n.placeholder=i),Jy(i)}),ng(),$0(),wl(26,"po-input",18),pw("ngModelChange",function(i){return Qy(d),$x(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),Jy(i)}),ng(),$0(),wl(27,"div",3)(28,"po-checkbox-group",19),pw("ngModelChange",function(i){return Qy(d),$x(n.properties,i)||(n.properties=i),Jy(i)}),ng(),$0(),wl(29,"po-radio-group",20),pw("ngModelChange",function(i){return Qy(d),$x(n.icon,i)||(n.icon=i),Jy(i)}),ng(),$0(),wl(30,"po-radio-group",21),pw("ngModelChange",function(i){return Qy(d),$x(n.filterMode,i)||(n.filterMode=i),Jy(i)}),ng(),$0(),wl(31,"po-radio-group",22),pw("ngModelChange",function(i){return Qy(d),$x(n.size,i)||(n.size=i),Jy(i)}),ng(),$0(),wl(32,"po-radio-group",23),pw("ngModelChange",function(i){return Qy(d),$x(n.listboxPosition,i)||(n.listboxPosition=i),Jy(i)}),ng(),$0(),ng(),wl(33,"div",3)(34,"po-input",24),pw("ngModelChange",function(i){return Qy(d),$x(n.filterService,i)||(n.filterService=i),Jy(i)}),ng(),$0(),wl(35,"po-input",25),pw("ngModelChange",function(i){return Qy(d),$x(n.literals,i)||(n.literals=i),Jy(i)}),ut$1("p-change",function(){return n.changeLiterals()}),ng(),$0(),ng(),wl(36,"div",3)(37,"po-input",26),pw("ngModelChange",function(i){return Qy(d),$x(n.fieldValue,i)||(n.fieldValue=i),Jy(i)}),ng(),$0(),wl(38,"po-input",27),pw("ngModelChange",function(i){return Qy(d),$x(n.fieldLabel,i)||(n.fieldLabel=i),Jy(i)}),ng(),$0(),ng(),wl(39,"div",3)(40,"po-number",28),pw("ngModelChange",function(i){return Qy(d),$x(n.debounceTime,i)||(n.debounceTime=i),Jy(i)}),ng(),$0(),wl(41,"po-number",29),pw("ngModelChange",function(i){return Qy(d),$x(n.filterMinlength,i)||(n.filterMinlength=i),Jy(i)}),ng(),$0(),ng(),wl(42,"div",3)(43,"po-button",30),ut$1("p-click",function(){return n.restore()}),ng()()();}if(p&2){let d=_x(7);hw("ngModel",n.combo),YE("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-listbox-control-position",n.listboxPosition),G0(),Pp(3),YE("p-value",n.combo),Pp(),YE("p-value",n.event),Pp(6),hw("ngModel",n.comboOptionGroupSwitch),G0(),Pp(),hw("ngModel",n.selectedOptionsGroup),YE("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),G0(),Pp(),hw("ngModel",n.optionsGroup),YE("p-disabled",!n.comboOptionGroupSwitch),G0(),Pp(3),hw("ngModel",n.option.label),G0(),Pp(),hw("ngModel",n.option.value),G0(),Pp(2),YE("p-disabled",d.form.invalid),Pp(4),hw("ngModel",n.label),G0(),Pp(),hw("ngModel",n.help),G0(),Pp(),hw("ngModel",n.helperText),G0(),Pp(),hw("ngModel",n.placeholder),G0(),Pp(),hw("ngModel",n.fieldErrorMessage),G0(),Pp(2),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.icon),YE("p-options",n.iconsOptions),G0(),Pp(),hw("ngModel",n.filterMode),YE("p-options",n.filterModeOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0(),Pp(),hw("ngModel",n.listboxPosition),YE("p-options",n.listboxPositionOptions),G0(),Pp(2),hw("ngModel",n.filterService),G0(),Pp(),hw("ngModel",n.literals),G0(),Pp(2),hw("ngModel",n.fieldValue),G0(),Pp(),hw("ngModel",n.fieldLabel),G0(),Pp(2),hw("ngModel",n.debounceTime),G0(),Pp(),hw("ngModel",n.filterMinlength),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,$i,Yo,ha,ga,ya,na,Vp],encapsulation:2,changeDetection:1})}return a})();var yt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo Labs"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-combo
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-labs"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,yt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ke],encapsulation:2})}return a})();var ye=(()=>{class a{getcities(){return [{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return [{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Mt=["schedulingForm"];function Tt(a,V){if(a&1&&(wl(0,"div",3),Ul(1,"po-avatar",15),wl(2,"p",14),Ux(3),ng()()),a&2){let m=gx().$implicit,p=gx();Pp(),YE("p-src",p.getStateByLabel(m.label)),Pp(2),uw(m.label);}}function kt(a,V){if(a&1&&(wl(0,"div",14),Ux(1),ng()),a&2){let m=gx().$implicit;Pp(),uw(m.label);}}function Lt(a,V){if(a&1&&QA(0,Tt,4,2,"div",3)(1,kt,2,1,"div",14),a&2){let m=V.$implicit;JA(m.options?0:1);}}var Xe=(()=>{class a{poNotification=f(Bp);schedulingService=f(ye);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty();}confirmPreAppointment(m=""){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset();}getStateByLabel(m){return `https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[m]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&$l(Mt,7),p&2){let d;uo(d=fo())&&(n.form=d.first);}},standalone:false,features:[we([ye])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1","sample-combo-avatar-bg",3,"p-src"]],template:function(p,n){if(p&1){let d=lx();wl(0,"div",1)(1,"div",2),Ux(2,"Pre-appointment scheduling"),ng()(),wl(3,"form",null,0)(5,"div",3)(6,"po-input",4),pw("ngModelChange",function(i){return Qy(d),$x(n.name,i)||(n.name=i),Jy(i)}),ng(),$0(),wl(7,"po-email",5),pw("ngModelChange",function(i){return Qy(d),$x(n.email,i)||(n.email=i),Jy(i)}),ng(),$0(),ng(),wl(8,"div",3)(9,"po-datepicker",6),pw("ngModelChange",function(i){return Qy(d),$x(n.birthday,i)||(n.birthday=i),Jy(i)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(i){return Qy(d),$x(n.phone,i)||(n.phone=i),Jy(i)}),ng(),$0(),ng(),wl(11,"div",3)(12,"po-combo",8),pw("ngModelChange",function(i){return Qy(d),$x(n.city,i)||(n.city=i),Jy(i)}),GE(13,Lt,2,1,"ng-template",9),ng(),$0(),wl(14,"po-select",10),pw("ngModelChange",function(i){return Qy(d),$x(n.typeScheduling,i)||(n.typeScheduling=i),Jy(i)}),ng(),$0(),wl(15,"po-combo",11),pw("ngModelChange",function(i){return Qy(d),$x(n.medicalSpecialty,i)||(n.medicalSpecialty=i),Jy(i)}),ng(),$0(),ng(),wl(16,"div",3)(17,"po-textarea",12),pw("ngModelChange",function(i){return Qy(d),$x(n.informations,i)||(n.informations=i),Jy(i)}),ng(),$0(),ng(),wl(18,"div",3)(19,"po-button",13),ut$1("p-click",function(){return n.confirmPreAppointment(n.name)}),ng()()();}if(p&2){let d=_x(4);Pp(6),hw("ngModel",n.name),G0(),Pp(),hw("ngModel",n.email),G0(),Pp(2),hw("ngModel",n.birthday),G0(),Pp(),hw("ngModel",n.phone),G0(),Pp(2),hw("ngModel",n.city),YE("p-options",n.citiesOptions),G0(),Pp(2),hw("ngModel",n.typeScheduling),YE("p-options",n.typeSchedulings),G0(),Pp(),hw("ngModel",n.medicalSpecialty),YE("p-options",n.medicalSpecialtyOptions),G0(),Pp(2),hw("ngModel",n.informations),G0(),Pp(2),YE("p-disabled",d.invalid);}},dependencies:[aY,iY,oY,ck,ok,Qn,Pe,$i,To,Ro,Ap,Yo,ya,Da],styles:[".sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}"],changeDetection:1})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo - Scheduling"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-text-center">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()(),wl(25,"po-tab",10)(26,"div")(27,"label",6),Ux(28,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.css"),ng(),wl(29,"pre",11),Ux(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),ng()()()()(),wl(31,"div",12),Ul(32,"sample-po-combo-scheduling"),ng(),Ul(33,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Dt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Xe],encapsulation:2})}return a})();var qt=["transferForm"];function Ft(a,V){if(a&1&&(wl(0,"div",3),Ul(1,"po-avatar",15),wl(2,"div",16)(3,"div",17),Ux(4),ng(),wl(5,"div",18),Ux(6),ng()()()),a&2){let m=V.$implicit;Pp(4),uw(m.label),Pp(2),cg("Account: ",m.value);}}var $e=(()=>{class a{poNotification=f(Bp);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset();}transfer(){this.poModal.open();}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&$l(qt,7)(zo,7),p&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.poModal=d.first);}},standalone:false,decls:23,vars:15,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let d=lx();wl(0,"div",1)(1,"div",2),Ux(2,"Banking Transfer"),ng()(),wl(3,"form",null,0)(5,"div",3)(6,"po-select",4),pw("ngModelChange",function(i){return Qy(d),$x(n.typeAccount,i)||(n.typeAccount=i),Jy(i)}),ng(),$0(),wl(7,"po-combo",5),pw("ngModelChange",function(i){return Qy(d),$x(n.contact,i)||(n.contact=i),Jy(i)}),GE(8,Ft,7,2,"ng-template",6),ng(),$0(),ng(),wl(9,"div",3)(10,"po-decimal",7),pw("ngModelChange",function(i){return Qy(d),$x(n.value,i)||(n.value=i),Jy(i)}),ng(),$0(),wl(11,"po-datepicker",8),pw("ngModelChange",function(i){return Qy(d),$x(n.dateTransfer,i)||(n.dateTransfer=i),Jy(i)}),ng(),$0(),ng(),wl(12,"div",3)(13,"po-button",9),ut$1("p-click",function(){return n.transfer()}),ng()()(),wl(14,"po-modal",10)(15,"div",3),Ul(16,"po-info",11)(17,"po-info",12),ng(),Ul(18,"po-divider"),wl(19,"div",3),Ul(20,"po-info",13)(21,"po-info",14),oN(22,"date"),ng()();}if(p&2){let d=_x(4);Pp(6),hw("ngModel",n.typeAccount),YE("p-options",n.typeAccounts),G0(),Pp(),hw("ngModel",n.contact),G0(),Pp(3),hw("ngModel",n.value),G0(),Pp(),hw("ngModel",n.dateTransfer),G0(),Pp(2),YE("p-disabled",d.invalid),Pp(),YE("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),Pp(2),YE("p-value",n.typeAccount),Pp(),YE("p-value",n.contact),Pp(3),YE("p-value",n.value),Pp(),YE("p-value",Wx(aN(22,13,n.dateTransfer)));}},dependencies:[aY,iY,oY,ck,ok,Qn,Pe,di,$i,To,Ro,Ko,ya,Vp,dt$1,bO],encapsulation:2,changeDetection:1})}return a})();var Wt=a=>({"docs-sample-code-tabs":a}),et=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo - Banking Transfer"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-text-center">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-transfer"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Wt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,$e],encapsulation:2})}return a})();function Ht(a,V){if(a&1&&(wl(0,"div",0),Ul(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),ng()),a&2){let m=V;Pp(),YE("p-value",m.name),Pp(),YE("p-value",m.nickname),Pp(),YE("p-value",m.email);}}var ot=(()=>{class a{http=f(KC);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(wl(0,"div",0)(1,"po-widget",1),ut$1("p-primary-action",function(){return n.knowMore(n.heroName)}),wl(2,"po-combo",2),pw("ngModelChange",function(c){return $x(n.heroName,c)||(n.heroName=c),c}),ut$1("p-change",function(c){return n.onChangeHero(c)}),ng(),$0(),QA(3,Ht,4,3,"div",0),oN(4,"async"),ng()()),p&2){let d;Pp(),YE("p-primary-label",n.knowMoreLabel),Pp(),hw("ngModel",n.heroName),G0(),Pp(),JA((d=aN(4,3,n.hero$))?3:-1,d);}},dependencies:[iY,ck,$i,Vp,IR,yO],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a}),nt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo - Heroes"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-heroes"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,It,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ot],encapsulation:2})}return a})();function jt(a,V){if(a&1&&(wl(0,"div",0),Ul(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),ng()),a&2){let m=V;Pp(),YE("p-value",m.name),Pp(),YE("p-value",m.nickname),Pp(),YE("p-value",m.email);}}var it=(()=>{class a{http=f(KC);formBuilder=f(uY);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,om.required]});}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let m=this.form.get("hero").value;window.open(`http://google.com/search?q=${m}`,"_blank");}onChangeHero(m){this.hero$=this.getHero(m);}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:false,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(wl(0,"div",0)(1,"po-widget",1),ut$1("p-primary-action",function(){return n.knowMore()}),wl(2,"div",2)(3,"po-combo",3),ut$1("p-change",function(c){return n.onChangeHero(c)}),ng(),$0(),ng(),QA(4,jt,4,3,"div",0),oN(5,"async"),ng()()),p&2){let d;Pp(),YE("p-primary-label",n.knowMoreLabel),Pp(),YE("formGroup",n.form),Pp(),G0(),Pp(),JA((d=aN(5,3,n.hero$))?4:-1,d);}},dependencies:[iY,oY,vk,gk,$i,Vp,IR,yO],encapsulation:2,changeDetection:1})}return a})();var Rt=a=>({"docs-sample-code-tabs":a}),at=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo - Heroes Reactive Form"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-heroes-reactive-form"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Rt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,it],encapsulation:2})}return a})();function Qt(a,V){if(a&1&&(wl(0,"div",0),Ul(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),ng()),a&2){let m=V;Pp(),YE("p-value",m.name),Pp(),YE("p-value",m.nickname),Pp(),YE("p-value",m.email);}}var lt=(()=>{class a{http=f(KC);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m);}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:false,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(wl(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),pw("ngModelChange",function(c){return $x(n.peopleName,c)||(n.peopleName=c),c}),ut$1("p-change",function(c){return n.onChangePeople(c)}),ng(),$0(),QA(3,Qt,4,3,"div",0),oN(4,"async"),ng()()),p&2){let d;Pp(2),hw("ngModel",n.peopleName),YE("p-infinite-scroll",true),G0(),Pp(),JA((d=aN(4,3,n.people$))?3:-1,d);}},dependencies:[iY,ck,$i,Vp,IR,yO],encapsulation:2,changeDetection:1})}return a})();var Jt=a=>({"docs-sample-code-tabs":a}),rt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo - Inifity Scroll"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-infinity-scroll"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Jt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,lt],encapsulation:2})}return a})();var Xt=["bookingForm"],Zt=["datepicker"],pt=(()=>{class a{poNotification=f(Bp);form;datepickerComponent;adults=1;category=false;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus();}onChangeParams(m){this.filterParams=m?{category:"Luxo"}:{},this.hotel=void 0;}formReset(){this.form.reset({adults:1,category:false,children:0,rooms:1});}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&$l(Xt,7)(Zt,7),p&2){let d;uo(d=fo())&&(n.form=d.first),uo(d=fo())&&(n.datepickerComponent=d.first);}},standalone:false,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let d=lx();wl(0,"div",2)(1,"div",3),Ux(2,"Booking a Hotel"),ng()(),wl(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),pw("ngModelChange",function(i){return Qy(d),$x(n.checkin,i)||(n.checkin=i),Jy(i)}),ng(),$0(),wl(8,"po-datepicker",6),pw("ngModelChange",function(i){return Qy(d),$x(n.checkout,i)||(n.checkout=i),Jy(i)}),ng(),$0(),wl(9,"po-switch",7),pw("ngModelChange",function(i){return Qy(d),$x(n.category,i)||(n.category=i),Jy(i)}),ut$1("p-change",function(i){return n.onChangeParams(i)}),ng(),$0(),ng(),wl(10,"div",4)(11,"po-select",8),pw("ngModelChange",function(i){return Qy(d),$x(n.rooms,i)||(n.rooms=i),Jy(i)}),ng(),$0(),wl(12,"po-select",9),pw("ngModelChange",function(i){return Qy(d),$x(n.children,i)||(n.children=i),Jy(i)}),ng(),$0(),wl(13,"po-select",10),pw("ngModelChange",function(i){return Qy(d),$x(n.adults,i)||(n.adults=i),Jy(i)}),ng(),$0(),ng(),wl(14,"div",4)(15,"po-combo",11),pw("ngModelChange",function(i){return Qy(d),$x(n.hotel,i)||(n.hotel=i),Jy(i)}),ng(),$0(),ng(),wl(16,"div",4)(17,"po-button",12),ut$1("p-click",function(){return n.booking()}),ng()()();}if(p&2){let d=_x(4);Pp(6),hw("ngModel",n.checkin),YE("p-max-date",n.checkout),G0(),Pp(2),hw("ngModel",n.checkout),YE("p-min-date",n.checkin),G0(),Pp(),hw("ngModel",n.category),G0(),Pp(2),hw("ngModel",n.rooms),YE("p-options",n.roomsOptions),G0(),Pp(),hw("ngModel",n.children),YE("p-options",n.childrenOptions),G0(),Pp(),hw("ngModel",n.adults),YE("p-options",n.adultsOptions),G0(),Pp(2),hw("ngModel",n.hotel),YE("p-filter-params",n.filterParams),G0(),Pp(2),YE("p-disabled",d.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,$i,Ro,ya,na],encapsulation:2,changeDetection:1})}return a})();var eo=a=>({"docs-sample-code-tabs":a}),mt=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Combo - Booking Hotel"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-text-center">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-combo-hotels"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,eo,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pt],encapsulation:2})}return a})();var dt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-combo-doc"]],standalone:false,decls:1854,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoComboComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O "),wl(24,"code"),Ux(25,"po-combo"),ng(),Ux(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),ng(),wl(27,"p"),Ux(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),ng(),wl(29,"p"),Ux(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),wl(31,"em"),Ux(32,"mouse"),ng(),Ux(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),wl(34,"em"),Ux(35,"Enter"),ng(),Ux(36," na op\xE7\xE3o que desejar."),ng(),wl(37,"p"),Ux(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),wl(39,"code"),Ux(40,"p-filter-service"),ng(),Ux(41,"."),ng(),wl(42,"p"),Ux(43,"Em "),wl(44,"code"),Ux(45,"p-filter-mode"),ng(),Ux(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),ng(),wl(47,"p"),Ux(48,"O "),wl(49,"code"),Ux(50,"po-combo"),ng(),Ux(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),wl(52,"em"),Ux(53,"Esc"),ng(),Ux(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),wl(55,"em"),Ux(56,"Enter"),ng(),Ux(57,"."),ng(),wl(58,"p"),Ux(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),ng(),wl(60,"h4"),Ux(61,"Tokens customiz\xE1veis"),ng(),wl(62,"p"),Ux(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(64,"blockquote")(65,"p"),Ux(66,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(67,"a",6),Ux(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(69,"."),ng()(),wl(70,"table")(71,"thead")(72,"tr")(73,"th"),Ux(74,"Propriedade"),ng(),wl(75,"th"),Ux(76,"Descri\xE7\xE3o"),ng(),wl(77,"th"),Ux(78,"Valor Padr\xE3o"),ng()()(),wl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),Ux(83,"Default Values"),ng()(),Ul(84,"td")(85,"td"),ng(),wl(86,"tr")(87,"td")(88,"code"),Ux(89,"--font-family"),ng()(),wl(90,"td"),Ux(91,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(92,"td")(93,"code"),Ux(94,"var(--font-family-theme)"),ng()()(),wl(95,"tr")(96,"td")(97,"code"),Ux(98,"--font-size"),ng()(),wl(99,"td"),Ux(100,"Tamanho da fonte"),ng(),wl(101,"td")(102,"code"),Ux(103,"var(--font-size-default)"),ng()()(),wl(104,"tr")(105,"td")(106,"code"),Ux(107,"--text-color"),ng()(),wl(108,"td"),Ux(109,"Cor do texto"),ng(),wl(110,"td")(111,"code"),Ux(112,"var(--color-neutral-dark-90)"),ng()()(),wl(113,"tr")(114,"td")(115,"code"),Ux(116,"--text-color-placeholder"),ng()(),wl(117,"td"),Ux(118,"Cor do texto no placeholder"),ng(),wl(119,"td")(120,"code"),Ux(121,"var(--color-neutral-light-30)"),ng()()(),wl(122,"tr")(123,"td")(124,"code"),Ux(125,"--color"),ng()(),wl(126,"td"),Ux(127,"Cor principal do Combo"),ng(),wl(128,"td")(129,"code"),Ux(130,"var(--color-neutral-dark-70)"),ng()()(),wl(131,"tr")(132,"td")(133,"code"),Ux(134,"--background"),ng()(),wl(135,"td"),Ux(136,"Cor de background"),ng(),wl(137,"td")(138,"code"),Ux(139,"var(--color-neutral-light-05)"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--border-radius"),ng()(),wl(144,"td"),Ux(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(146,"td")(147,"code"),Ux(148,"var(--border-width-lg)"),ng()()(),wl(149,"tr")(150,"td")(151,"code"),Ux(152,"--min-width"),ng()(),wl(153,"td"),Ux(154,"Largura m\xEDnima do combo"),ng(),wl(155,"td")(156,"code"),Ux(157,"150px"),ng()()(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--field-container-title-justify"),ng()(),wl(162,"td"),Ux(163,"Alinhamento horizontal do t\xEDtulo ("),wl(164,"code"),Ux(165,"justify-content"),ng(),Ux(166,")"),ng(),wl(167,"td")(168,"code"),Ux(169,"space-between"),ng()()(),wl(170,"tr")(171,"td")(172,"code"),Ux(173,"--field-container-title-flex"),ng()(),wl(174,"td"),Ux(175,"Flex do t\xEDtulo ("),wl(176,"code"),Ux(177,"flex"),ng(),Ux(178,")"),ng(),wl(179,"td")(180,"code"),Ux(181,"1 auto"),ng()()(),wl(182,"tr")(183,"td")(184,"strong"),Ux(185,"Hover"),ng()(),Ul(186,"td")(187,"td"),ng(),wl(188,"tr")(189,"td")(190,"code"),Ux(191,"--color-hover"),ng()(),wl(192,"td"),Ux(193,"Cor principal no estado hover"),ng(),wl(194,"td")(195,"code"),Ux(196,"var(--color-action-hover)"),ng()()(),wl(197,"tr")(198,"td")(199,"code"),Ux(200,"--background-hover"),ng()(),wl(201,"td"),Ux(202,"Cor de background no estado hover"),ng(),wl(203,"td")(204,"code"),Ux(205,"var(--color-brand-01-lightest)"),ng()()(),wl(206,"tr")(207,"td")(208,"strong"),Ux(209,"Focused"),ng()(),Ul(210,"td")(211,"td"),ng(),wl(212,"tr")(213,"td")(214,"code"),Ux(215,"--color-focused"),ng()(),wl(216,"td"),Ux(217,"Cor principal no estado de focus"),ng(),wl(218,"td")(219,"code"),Ux(220,"var(--color-action-default)"),ng()()(),wl(221,"tr")(222,"td")(223,"code"),Ux(224,"--outline-color-focused"),ng()(),wl(225,"td"),Ux(226,"Cor do outline do estado de focus"),ng(),wl(227,"td")(228,"code"),Ux(229,"var(--color-action-focus)"),ng()()(),wl(230,"tr")(231,"td")(232,"strong"),Ux(233,"Error"),ng()(),Ul(234,"td")(235,"td"),ng(),wl(236,"tr")(237,"td")(238,"code"),Ux(239,"--color-error"),ng()(),wl(240,"td"),Ux(241,"Cor principal no estado de erro"),ng(),wl(242,"td")(243,"code"),Ux(244,"var(--color-feedback-negative-base)"),ng()()(),wl(245,"tr")(246,"td")(247,"strong"),Ux(248,"Disabled"),ng()(),Ul(249,"td")(250,"td"),ng(),wl(251,"tr")(252,"td")(253,"code"),Ux(254,"--color-disabled"),ng()(),wl(255,"td"),Ux(256,"Cor principal no estado disabled"),ng(),wl(257,"td")(258,"code"),Ux(259,"var(--color-neutral-light-30)"),ng()()(),wl(260,"tr")(261,"td")(262,"code"),Ux(263,"--background-disabled"),ng()(),wl(264,"td"),Ux(265,"Cor de background no estado disabled"),ng(),wl(266,"td")(267,"code"),Ux(268,"var(--color-neutral-light-20)"),ng()()(),wl(269,"tr")(270,"td")(271,"strong"),Ux(272,"Suggestion"),ng()(),Ul(273,"td")(274,"td"),ng(),wl(275,"tr")(276,"td")(277,"code"),Ux(278,"--text-color-suggestion"),ng()(),wl(279,"td"),Ux(280,"Cor do texto no estado suggestion"),ng(),wl(281,"td")(282,"code"),Ux(283,"var(--color-neutral-mid-60)"),ng()()(),wl(284,"tr")(285,"td")(286,"code"),Ux(287,"--background-suggestion"),ng()(),wl(288,"td"),Ux(289,"Cor do background no estado suggestion"),ng(),wl(290,"td")(291,"code"),Ux(292,"var(--color-brand-01-lightest)"),ng()()()()()(),wl(293,"div",7)(294,"h4",8),Ux(295,"Seletor"),ng(),wl(296,"pre",9),Ux(297,`<po-combo
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
`),ng()(),wl(298,"h4",10),Ux(299,"Propriedades"),ng(),wl(300,"table",11)(301,"tr",12)(302,"th",13),Ux(303,"Nome"),ng(),wl(304,"th",13),Ux(305,"Tipo"),ng(),wl(306,"th",13),Ux(307,"Padr\xE3o"),ng(),wl(308,"th",13),Ux(309,"Descri\xE7\xE3o"),ng()(),wl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),Ux(314," (p-additional-help)"),Ul(315,"br"),ng()(),wl(316,"div",18),Ux(317,"Deprecated"),ng()(),wl(318,"td",19)(319,"code",20),Ux(320,"EventEmitter"),ng()(),wl(321,"td",21),Ux(322,"-"),ng(),wl(323,"td",22)(324,"em")(325,"strong"),Ux(326,"(opcional)"),ng()(),wl(327,"p"),Ux(328,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(329,"blockquote")(330,"p"),Ux(331,"Essa propriedade est\xE1 "),wl(332,"strong"),Ux(333,"depreciada"),ng(),Ux(334," e ser\xE1 removida na vers\xE3o "),wl(335,"code"),Ux(336,"23.x.x"),ng(),Ux(337,". Recomendamos utilizar a propriedade "),wl(338,"code"),Ux(339,"p-helper"),ng(),Ux(340," que oferece mais recursos e flexibilidade."),ng()()()(),wl(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),Ux(345," p-additional-help-tooltip"),Ul(346,"br"),ng()(),wl(347,"div",18),Ux(348,"Deprecated"),ng()(),wl(349,"td",19)(350,"code",25),Ux(351,"string"),ng()(),wl(352,"td",21),Ux(353,"-"),ng(),wl(354,"td",22)(355,"em")(356,"strong"),Ux(357,"(opcional)"),ng()(),wl(358,"p"),Ux(359,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(360,"code"),Ux(361,"po-helper"),ng(),Ux(362,`.
`),wl(363,"strong"),Ux(364,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(365,"blockquote")(366,"p"),Ux(367,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(368,"blockquote")(369,"p"),Ux(370,"Essa propriedade est\xE1 "),wl(371,"strong"),Ux(372,"depreciada"),ng(),Ux(373," e ser\xE1 removida na vers\xE3o "),wl(374,"code"),Ux(375,"23.x.x"),ng(),Ux(376,". Recomendamos utilizar a propriedade "),wl(377,"code"),Ux(378,"p-helper"),ng(),Ux(379," que oferece mais recursos e flexibilidade."),ng()()()(),wl(380,"tr",14)(381,"td",15)(382,"div",23)(383,"span",24),Ux(384," p-append-in-body"),Ul(385,"br"),ng()()(),wl(386,"td",19)(387,"code",26),Ux(388,"boolean"),ng()(),wl(389,"td",21)(390,"p")(391,"code"),Ux(392,"false"),ng()()(),wl(393,"td",22)(394,"em")(395,"strong"),Ux(396,"(opcional)"),ng()(),wl(397,"p"),Ux(398,"Define que o "),wl(399,"code"),Ux(400,"listbox"),ng(),Ux(401," e/ou popover ("),wl(402,"code"),Ux(403,"p-helper"),ng(),Ux(404," e/ou "),wl(405,"code"),Ux(406,"p-error-limit"),ng(),Ux(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ng(),wl(408,"blockquote")(409,"p"),Ux(410,"Quando utilizado com "),wl(411,"code"),Ux(412,"p-helper"),ng(),Ux(413,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(414,"tr",14)(415,"td",15)(416,"div",23)(417,"span",24),Ux(418," p-auto-focus"),Ul(419,"br"),ng()()(),wl(420,"td",19)(421,"code",26),Ux(422,"boolean"),ng()(),wl(423,"td",21)(424,"p")(425,"code"),Ux(426,"false"),ng()()(),wl(427,"td",22)(428,"em")(429,"strong"),Ux(430,"(opcional)"),ng()(),wl(431,"p"),Ux(432,"Aplica foco no elemento ao ser iniciado."),ng(),wl(433,"blockquote")(434,"p"),Ux(435,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),Ux(440," (p-blur)"),Ul(441,"br"),ng()()(),wl(442,"td",19)(443,"code",20),Ux(444,"EventEmitter"),ng()(),wl(445,"td",21),Ux(446,"-"),ng(),wl(447,"td",22)(448,"em")(449,"strong"),Ux(450,"(opcional)"),ng()(),wl(451,"p"),Ux(452,"Evento disparado ao sair do campo."),ng()()(),wl(453,"tr",14)(454,"td",15)(455,"div",23)(456,"span",24),Ux(457," p-cache"),Ul(458,"br"),ng()()(),wl(459,"td",19)(460,"code",26),Ux(461,"boolean"),ng()(),wl(462,"td",21)(463,"p")(464,"code"),Ux(465,"true"),ng()()(),wl(466,"td",22)(467,"em")(468,"strong"),Ux(469,"(opcional)"),ng()(),wl(470,"p"),Ux(471,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),ng(),wl(472,"blockquote")(473,"p"),Ux(474,"Caso o valor seja "),wl(475,"code"),Ux(476,"false"),ng(),Ux(477,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),ng()()()(),wl(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),Ux(482," (p-change)"),Ul(483,"br"),ng()()(),wl(484,"td",19)(485,"code",20),Ux(486,"EventEmitter"),ng()(),wl(487,"td",21),Ux(488,"-"),ng(),wl(489,"td",22)(490,"em")(491,"strong"),Ux(492,"(opcional)"),ng()(),wl(493,"p"),Ux(494,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),ng(),wl(495,"blockquote")(496,"p"),Ux(497,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),wl(498,"code"),Ux(499,"p-emit-object-value"),ng(),Ux(500,"."),ng()()()(),wl(501,"tr",14)(502,"td",15)(503,"div",23)(504,"span",24),Ux(505," p-change-on-enter"),Ul(506,"br"),ng()()(),wl(507,"td",19)(508,"code",26),Ux(509,"boolean"),ng()(),wl(510,"td",21)(511,"p")(512,"code"),Ux(513,"false"),ng()()(),wl(514,"td",22)(515,"em")(516,"strong"),Ux(517,"(opcional)"),ng()(),wl(518,"p"),Ux(519,"Indica que o evento "),wl(520,"code"),Ux(521,"p-change"),ng(),Ux(522,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),ng()()(),wl(523,"tr",14)(524,"td",15)(525,"div",23)(526,"span",24),Ux(527," p-clean"),Ul(528,"br"),ng()()(),wl(529,"td",19)(530,"code",26),Ux(531,"boolean"),ng()(),wl(532,"td",21),Ux(533,"-"),ng(),wl(534,"td",22)(535,"em")(536,"strong"),Ux(537,"(opcional)"),ng()(),wl(538,"p"),Ux(539,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng()()(),wl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),Ux(544," p-compact-label"),Ul(545,"br"),ng()()(),wl(546,"td",19)(547,"code",26),Ux(548,"boolean"),ng()(),wl(549,"td",21)(550,"p")(551,"code"),Ux(552,"false"),ng()()(),wl(553,"td",22)(554,"em")(555,"strong"),Ux(556,"(opcional)"),ng()(),wl(557,"p"),Ux(558,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(559,"p"),Ux(560,"Quando habilitado ("),wl(561,"code"),Ux(562,"true"),ng(),Ux(563,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(564,"ul")(565,"li")(566,"code"),Ux(567,"po-label"),ng()(),wl(568,"li")(569,"code"),Ux(570,"p-requirement (showRequired)"),ng()(),wl(571,"li")(572,"code"),Ux(573,"po-helper"),ng()()(),wl(574,"p"),Ux(575,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(576,"p"),Ux(577,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(578,"ul")(579,"li")(580,"code"),Ux(581,"--field-container-title-justify"),ng()(),wl(582,"li")(583,"code"),Ux(584,"--field-container-title-flex"),ng()()(),wl(585,"p"),Ux(586,"Exemplo:"),ng(),wl(587,"pre")(588,"code"),Ux(589,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(590,"p"),Ux(591,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),Ux(596," p-debounce-time"),Ul(597,"br"),ng()()(),wl(598,"td",19)(599,"code",27),Ux(600,"number"),ng()(),wl(601,"td",21)(602,"p")(603,"code"),Ux(604,"400"),ng()()(),wl(605,"td",22)(606,"em")(607,"strong"),Ux(608,"(opcional)"),ng()(),wl(609,"p"),Ux(610,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),wl(611,"code"),Ux(612,"p-filter-service"),ng(),Ux(613,")."),ng()()(),wl(614,"tr",14)(615,"td",15)(616,"div",23)(617,"span",24),Ux(618," p-disabled"),Ul(619,"br"),ng()()(),wl(620,"td",19)(621,"code",26),Ux(622,"boolean"),ng()(),wl(623,"td",21)(624,"p")(625,"code"),Ux(626,"false"),ng()()(),wl(627,"td",22)(628,"em")(629,"strong"),Ux(630,"(opcional)"),ng()(),wl(631,"p"),Ux(632,"Indica que o campo ser\xE1 desabilitado."),ng()()(),wl(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),Ux(637," p-disabled-init-filter"),Ul(638,"br"),ng()()(),wl(639,"td",19)(640,"code",26),Ux(641,"boolean"),ng()(),wl(642,"td",21)(643,"p")(644,"code"),Ux(645,"false"),ng()()(),wl(646,"td",22)(647,"em")(648,"strong"),Ux(649,"(opcional)"),ng()(),wl(650,"p"),Ux(651,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),ng()()(),wl(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),Ux(656," p-disabled-tab-filter"),Ul(657,"br"),ng()()(),wl(658,"td",19)(659,"code",26),Ux(660,"boolean"),ng()(),wl(661,"td",21)(662,"p")(663,"code"),Ux(664,"false"),ng()()(),wl(665,"td",22)(666,"em")(667,"strong"),Ux(668,"(opcional)"),ng()(),wl(669,"p"),Ux(670,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),ng()()(),wl(671,"tr",14)(672,"td",15)(673,"div",23)(674,"span",24),Ux(675," p-emit-object-value"),Ul(676,"br"),ng()()(),wl(677,"td",19)(678,"code",26),Ux(679,"boolean"),ng()(),wl(680,"td",21)(681,"p")(682,"code"),Ux(683,"false"),ng()()(),wl(684,"td",22)(685,"em")(686,"strong"),Ux(687,"(opcional)"),ng()(),wl(688,"p"),Ux(689,"Se verdadeiro, o evento "),wl(690,"code"),Ux(691,"p-change"),ng(),Ux(692," receber\xE1 como argumento o "),wl(693,"code"),Ux(694,"PoComboOption"),ng(),Ux(695," referente \xE0 op\xE7\xE3o selecionada."),ng()()(),wl(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),Ux(700," p-error-limit"),Ul(701,"br"),ng()()(),wl(702,"td",19)(703,"code",26),Ux(704,"boolean"),ng()(),wl(705,"td",21)(706,"p")(707,"code"),Ux(708,"false"),ng()()(),wl(709,"td",22)(710,"em")(711,"strong"),Ux(712,"(opcional)"),ng()(),wl(713,"p"),Ux(714,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(715,"blockquote")(716,"p"),Ux(717,"Caso essa propriedade seja definida como "),wl(718,"code"),Ux(719,"true"),ng(),Ux(720,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(721,"tr",14)(722,"td",15)(723,"div",23)(724,"span",24),Ux(725," p-field-error-message"),Ul(726,"br"),ng()()(),wl(727,"td",19)(728,"code",25),Ux(729,"string"),ng()(),wl(730,"td",21),Ux(731,"-"),ng(),wl(732,"td",22)(733,"em")(734,"strong"),Ux(735,"(opcional)"),ng()(),wl(736,"p"),Ux(737,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(738,"blockquote")(739,"p"),Ux(740,"Necess\xE1rio que a propriedade "),wl(741,"code"),Ux(742,"p-required"),ng(),Ux(743," esteja habilitada."),ng()()()(),wl(744,"tr",14)(745,"td",15)(746,"div",23)(747,"span",24),Ux(748," p-field-label"),Ul(749,"br"),ng()()(),wl(750,"td",19)(751,"code",25),Ux(752,"string"),ng()(),wl(753,"td",21)(754,"p")(755,"code"),Ux(756,"label"),ng()()(),wl(757,"td",22)(758,"em")(759,"strong"),Ux(760,"(opcional)"),ng()(),wl(761,"p"),Ux(762,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),wl(763,"code"),Ux(764,"p-options"),ng(),Ux(765,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),ng(),wl(766,"p"),Ux(767,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),ng()()(),wl(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),Ux(772," p-field-value"),Ul(773,"br"),ng()()(),wl(774,"td",19)(775,"code",25),Ux(776,"string"),ng()(),wl(777,"td",21)(778,"p")(779,"code"),Ux(780,"value"),ng()()(),wl(781,"td",22)(782,"em")(783,"strong"),Ux(784,"(opcional)"),ng()(),wl(785,"p"),Ux(786,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),wl(787,"code"),Ux(788,"p-options"),ng(),Ux(789,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),ng(),wl(790,"p"),Ux(791,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),ng()()(),wl(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),Ux(796," p-filter-minlength"),Ul(797,"br"),ng()()(),wl(798,"td",19)(799,"code",27),Ux(800,"number"),ng()(),wl(801,"td",21)(802,"p")(803,"code"),Ux(804,"0"),ng()()(),wl(805,"td",22)(806,"em")(807,"strong"),Ux(808,"(opcional)"),ng()(),wl(809,"p"),Ux(810,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),ng()()(),wl(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),Ux(815," p-filter-mode"),Ul(816,"br"),ng()()(),wl(817,"td",19)(818,"code",28),Ux(819,"PoComboFilterMode"),ng()(),wl(820,"td",21)(821,"p")(822,"code"),Ux(823,"startsWith"),ng()()(),wl(824,"td",22)(825,"em")(826,"strong"),Ux(827,"(opcional)"),ng()(),wl(828,"p"),Ux(829,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),wl(830,"code"),Ux(831,"startsWith"),ng(),Ux(832,", "),wl(833,"code"),Ux(834,"contains"),ng(),Ux(835," ou "),wl(836,"code"),Ux(837,"endsWith"),ng(),Ux(838,"."),ng(),wl(839,"blockquote")(840,"p"),Ux(841,"Quando utilizar a propriedade "),wl(842,"code"),Ux(843,"p-filter-service"),ng(),Ux(844," esta propriedade ser\xE1 ignorada."),ng()()()(),wl(845,"tr",14)(846,"td",15)(847,"div",23)(848,"span",24),Ux(849," p-filter-params"),Ul(850,"br"),ng()()(),wl(851,"td",19)(852,"code",29),Ux(853,"any"),ng()(),wl(854,"td",21),Ux(855,"-"),ng(),wl(856,"td",22)(857,"em")(858,"strong"),Ux(859,"(opcional)"),ng()(),wl(860,"p"),Ux(861,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),wl(862,"em"),Ux(863,"PoComboFilter"),ng(),Ux(864,"."),ng(),wl(865,"blockquote")(866,"p"),Ux(867,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),ng()()()(),wl(868,"tr",14)(869,"td",15)(870,"div",23)(871,"span",24),Ux(872," p-filter-service"),Ul(873,"br"),ng()()(),wl(874,"td",19)(875,"code",30),Ux(876,"PoComboFilter "),ng(),wl(877,"code",25),Ux(878," string"),ng()(),wl(879,"td",21),Ux(880,"-"),ng(),wl(881,"td",22)(882,"em")(883,"strong"),Ux(884,"(opcional)"),ng()(),wl(885,"p"),Ux(886,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),ng(),wl(887,"p"),Ux(888,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),wl(889,"code"),Ux(890,"p-field-label"),ng(),Ux(891," e "),wl(892,"code"),Ux(893,"p-field-value"),ng(),Ux(894," para a constru\xE7\xE3o da lista de itens."),ng(),wl(895,"p"),Ux(896,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),ng(),wl(897,"pre")(898,"code"),Ux(899,`url + ?filter=Peter
`),ng()(),wl(900,"p"),Ux(901,"Se for definida a propriedade "),wl(902,"code"),Ux(903,"p-filter-params"),ng(),Ux(904,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),wl(905,"code"),Ux(906,"{ age: 23 }"),ng(),Ux(907," a URL ficaria:"),ng(),wl(908,"pre")(909,"code"),Ux(910,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ng()()()(),wl(911,"tr",14)(912,"td",15)(913,"div",23)(914,"span",24),Ux(915," p-help"),Ul(916,"br"),ng()()(),wl(917,"td",19)(918,"code",25),Ux(919,"string"),ng()(),wl(920,"td",21),Ux(921,"-"),ng(),wl(922,"td",22)(923,"em")(924,"strong"),Ux(925,"(opcional)"),ng()(),wl(926,"p"),Ux(927,"Texto de apoio para o campo."),ng()()(),wl(928,"tr",14)(929,"td",15)(930,"div",23)(931,"span",24),Ux(932," p-icon"),Ul(933,"br"),ng()()(),wl(934,"td",19)(935,"code",25),Ux(936,"string "),ng(),wl(937,"code",31),Ux(938," TemplateRef<void>"),ng()(),wl(939,"td",21),Ux(940,"-"),ng(),wl(941,"td",22)(942,"em")(943,"strong"),Ux(944,"(opcional)"),ng()(),wl(945,"p"),Ux(946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(947,"p"),Ux(948,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(949,"a",32),Ux(950,"Biblioteca de \xEDcones"),ng(),Ux(951,". conforme exemplo abaixo:"),ng(),wl(952,"pre")(953,"code"),Ux(954,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),ng()(),wl(955,"p"),Ux(956,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(957,"em"),Ux(958,"Font Awesome"),ng(),Ux(959,", da seguinte forma:"),ng(),wl(960,"pre")(961,"code"),Ux(962,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),ng()(),wl(963,"p"),Ux(964,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(965,"code"),Ux(966,"TemplateRef"),ng(),Ux(967,", conforme exemplo abaixo:"),ng(),wl(968,"pre")(969,"code"),Ux(970,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(971,"blockquote")(972,"p"),Ux(973,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(974,"code"),Ux(975,"font-size: inherit"),ng(),Ux(976," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(977,"tr",14)(978,"td",15)(979,"div",23)(980,"span",24),Ux(981," p-infinite-scroll"),Ul(982,"br"),ng()()(),wl(983,"td",19)(984,"code",26),Ux(985,"boolean"),ng()(),wl(986,"td",21)(987,"p")(988,"code"),Ux(989,"false"),ng()()(),wl(990,"td",22)(991,"em")(992,"strong"),Ux(993,"(opcional)"),ng()(),wl(994,"p"),Ux(995,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),ng()()(),wl(996,"tr",14)(997,"td",15)(998,"div",23)(999,"span",24),Ux(1e3," p-infinite-scroll-distance"),Ul(1001,"br"),ng()()(),wl(1002,"td",19)(1003,"code",27),Ux(1004,"number"),ng()(),wl(1005,"td",21),Ux(1006,"-"),ng(),wl(1007,"td",22)(1008,"em")(1009,"strong"),Ux(1010,"(opcional)"),ng()(),wl(1011,"p"),Ux(1012,"Define o percentual necess\xE1rio para disparar o evento "),wl(1013,"code"),Ux(1014,"show-more"),ng(),Ux(1015,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),ng(),wl(1016,"p")(1017,"strong"),Ux(1018,"Exemplos"),ng()(),wl(1019,"ul")(1020,"li"),Ux(1021,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),wl(1022,"code"),Ux(1023,"show-more"),ng(),Ux(1024," ser\xE1 disparado."),ng()()()(),wl(1025,"tr",14)(1026,"td",15)(1027,"div",16)(1028,"span",17),Ux(1029," (p-input-change)"),Ul(1030,"br"),ng()()(),wl(1031,"td",19)(1032,"code",20),Ux(1033,"EventEmitter"),ng()(),wl(1034,"td",21),Ux(1035,"-"),ng(),wl(1036,"td",22)(1037,"em")(1038,"strong"),Ux(1039,"(opcional)"),ng()(),wl(1040,"p"),Ux(1041,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),ng()()(),wl(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),Ux(1046," (p-keydown)"),Ul(1047,"br"),ng()()(),wl(1048,"td",19)(1049,"code",20),Ux(1050,"EventEmitter"),ng()(),wl(1051,"td",21),Ux(1052,"-"),ng(),wl(1053,"td",22)(1054,"em")(1055,"strong"),Ux(1056,"(opcional)"),ng()(),wl(1057,"p"),Ux(1058,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(1059,"code"),Ux(1060,"KeyboardEvent"),ng(),Ux(1061," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(1062,"tr",14)(1063,"td",15)(1064,"div",23)(1065,"span",24),Ux(1066," p-label"),Ul(1067,"br"),ng()()(),wl(1068,"td",19)(1069,"code",25),Ux(1070,"string"),ng()(),wl(1071,"td",21),Ux(1072,"-"),ng(),wl(1073,"td",22)(1074,"em")(1075,"strong"),Ux(1076,"(opcional)"),ng()(),wl(1077,"p"),Ux(1078,"Label no componente."),ng()()(),wl(1079,"tr",14)(1080,"td",15)(1081,"div",23)(1082,"span",24),Ux(1083," p-label-text-wrap"),Ul(1084,"br"),ng()()(),wl(1085,"td",19)(1086,"code",26),Ux(1087,"boolean"),ng()(),wl(1088,"td",21)(1089,"p")(1090,"code"),Ux(1091,"false"),ng()()(),wl(1092,"td",22)(1093,"em")(1094,"strong"),Ux(1095,"(opcional)"),ng()(),wl(1096,"p"),Ux(1097,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(1098,"code"),Ux(1099,"p-label"),ng(),Ux(1100,". Quando "),wl(1101,"code"),Ux(1102,"p-label-text-wrap"),ng(),Ux(1103,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(1104,"tr",14)(1105,"td",15)(1106,"div",23)(1107,"span",24),Ux(1108," p-listbox-control-position"),Ul(1109,"br"),ng()()(),wl(1110,"td",19)(1111,"code",33),Ux(1112,"'top' "),ng(),wl(1113,"code",34),Ux(1114," 'bottom'"),ng()(),wl(1115,"td",21)(1116,"p")(1117,"code"),Ux(1118,"bottom"),ng()()(),wl(1119,"td",22)(1120,"em")(1121,"strong"),Ux(1122,"(opcional)"),ng()(),wl(1123,"p"),Ux(1124,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),wl(1125,"code"),Ux(1126,"listbox"),ng(),Ux(1127," em rela\xE7\xE3o ao campo ("),wl(1128,"code"),Ux(1129,"top"),ng(),Ux(1130," ou "),wl(1131,"code"),Ux(1132,"bottom"),ng(),Ux(1133,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ng()()(),wl(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),Ux(1138," p-literals"),Ul(1139,"br"),ng()()(),wl(1140,"td",19)(1141,"code",35),Ux(1142,"PoComboLiterals"),ng()(),wl(1143,"td",21),Ux(1144,"-"),ng(),wl(1145,"td",22)(1146,"em")(1147,"strong"),Ux(1148,"(opcional)"),ng()(),wl(1149,"p"),Ux(1150,"Objeto com as literais usadas no "),wl(1151,"code"),Ux(1152,"po-combo"),ng(),Ux(1153,"."),ng(),wl(1154,"p"),Ux(1155,"Para utilizar basta passar a literal que deseja customizar:"),ng(),wl(1156,"pre")(1157,"code"),Ux(1158,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),ng()(),wl(1159,"p"),Ux(1160,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),ng(),wl(1161,"pre")(1162,"code"),Ux(1163,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),ng()(),wl(1164,"blockquote")(1165,"p"),Ux(1166,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(1167,"a",36)(1168,"code"),Ux(1169,"PoI18nService"),ng()(),Ux(1170," ou do browser."),ng()()()(),wl(1171,"tr",14)(1172,"td",15)(1173,"div",23)(1174,"span",24),Ux(1175," p-loading"),Ul(1176,"br"),ng()()(),wl(1177,"td",19)(1178,"code",26),Ux(1179,"boolean"),ng()(),wl(1180,"td",21)(1181,"p")(1182,"code"),Ux(1183,"false"),ng()()(),wl(1184,"td",22)(1185,"em")(1186,"strong"),Ux(1187,"(opcional)"),ng()(),wl(1188,"p"),Ux(1189,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(1190,"tr",14)(1191,"td",15)(1192,"div",23)(1193,"span",24),Ux(1194," name"),Ul(1195,"br"),ng()()(),wl(1196,"td",19)(1197,"code",25),Ux(1198,"string"),ng()(),wl(1199,"td",21),Ux(1200,"-"),ng(),wl(1201,"td",22)(1202,"p"),Ux(1203,"Nome do componente."),ng()()(),wl(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),Ux(1208," (ngModelChange)"),Ul(1209,"br"),ng()()(),wl(1210,"td",19)(1211,"code",20),Ux(1212,"EventEmitter"),ng()(),wl(1213,"td",21),Ux(1214,"-"),ng(),wl(1215,"td",22)(1216,"em")(1217,"strong"),Ux(1218,"(opcional)"),ng()(),wl(1219,"p"),Ux(1220,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),ng(),wl(1221,"p"),Ux(1222,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),wl(1223,"code"),Ux(1224,"strictTemplates"),ng(),Ux(1225,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ng(),wl(1226,"pre")(1227,"code"),Ux(1228,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),ng()()()(),wl(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),Ux(1233," p-optional"),Ul(1234,"br"),ng()()(),wl(1235,"td",19)(1236,"code",26),Ux(1237,"boolean"),ng()(),wl(1238,"td",21)(1239,"p")(1240,"code"),Ux(1241,"false"),ng()()(),wl(1242,"td",22)(1243,"em")(1244,"strong"),Ux(1245,"(opcional)"),ng()(),wl(1246,"p"),Ux(1247,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(1248,"blockquote")(1249,"p"),Ux(1250,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1251,"ul")(1252,"li"),Ux(1253,"O campo conter "),wl(1254,"code"),Ux(1255,"p-required"),ng(),Ux(1256,";"),ng(),wl(1257,"li"),Ux(1258,"N\xE3o possuir "),wl(1259,"code"),Ux(1260,"p-help"),ng(),Ux(1261," e/ou "),wl(1262,"code"),Ux(1263,"p-label"),ng(),Ux(1264,"."),ng()()()(),wl(1265,"tr",14)(1266,"td",15)(1267,"div",23)(1268,"span",24),Ux(1269," p-options"),Ul(1270,"br"),ng()()(),wl(1271,"td",19)(1272,"code",37),Ux(1273,"Array<PoComboOption "),ng(),wl(1274,"code",38),Ux(1275," PoComboOptionGroup "),ng(),wl(1276,"code",39),Ux(1277," any>"),ng()(),wl(1278,"td",21),Ux(1279,"-"),ng(),wl(1280,"td",22)(1281,"p"),Ux(1282,"Nesta propriedade define a lista de op\xE7\xF5es do "),wl(1283,"code"),Ux(1284,"po-combo"),ng(),Ux(1285,"."),ng(),wl(1286,"blockquote")(1287,"p"),Ux(1288,"A lista pode ser definida utilizando um array com o valor representando o "),wl(1289,"code"),Ux(1290,"value"),ng(),Ux(1291," e o "),wl(1292,"code"),Ux(1293,"label"),ng(),Ux(1294," das seguintes formas:"),ng()(),wl(1295,"pre")(1296,"code"),Ux(1297,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),ng()(),wl(1298,"pre")(1299,"code"),Ux(1300,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),ng()(),wl(1301,"ul")(1302,"li"),Ux(1303,"Aconselha-se utilizar valores distintos no "),wl(1304,"code"),Ux(1305,"label"),ng(),Ux(1306," e "),wl(1307,"code"),Ux(1308,"value"),ng(),Ux(1309," dos itens."),ng()()()(),wl(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),Ux(1314," p-placeholder"),Ul(1315,"br"),ng()()(),wl(1316,"td",19)(1317,"code",25),Ux(1318,"string"),ng()(),wl(1319,"td",21),Ux(1320,"-"),ng(),wl(1321,"td",22)(1322,"p"),Ux(1323,"Mensagem apresentada enquanto o campo estiver vazio."),ng()()(),wl(1324,"tr",14)(1325,"td",15)(1326,"div",23)(1327,"span",24),Ux(1328," p-helper"),Ul(1329,"br"),ng()()(),wl(1330,"td",19)(1331,"code",40),Ux(1332,"PoHelperOptions "),ng(),wl(1333,"code",25),Ux(1334," string"),ng()(),wl(1335,"td",21),Ux(1336,"-"),ng(),wl(1337,"td",22)(1338,"em")(1339,"strong"),Ux(1340,"(opcional)"),ng()(),wl(1341,"p"),Ux(1342,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1343,"code"),Ux(1344,"p-label"),ng(),Ux(1345," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1346,"code"),Ux(1347,"p-label"),ng(),Ux(1348,"."),ng(),wl(1349,"blockquote")(1350,"p"),Ux(1351,"Para mais informa\xE7\xF5es acesse: "),wl(1352,"a",41),Ux(1353,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1354,"."),ng()(),wl(1355,"blockquote")(1356,"p"),Ux(1357,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1358,"code"),Ux(1359,"p-additional-help-tooltip"),ng(),Ux(1360," e "),wl(1361,"code"),Ux(1362,"p-additional-help"),ng(),Ux(1363,") ser\xE1 ignorado."),ng()()()(),wl(1364,"tr",14)(1365,"td",15)(1366,"div",23)(1367,"span",24),Ux(1368," p-remove-initial-filter"),Ul(1369,"br"),ng()()(),wl(1370,"td",19)(1371,"code",26),Ux(1372,"boolean"),ng()(),wl(1373,"td",21)(1374,"p")(1375,"code"),Ux(1376,"false"),ng()()(),wl(1377,"td",22)(1378,"em")(1379,"strong"),Ux(1380,"(opcional)"),ng()(),wl(1381,"p"),Ux(1382,"Define se o filtro inicial ser\xE1 removido no primeiro clique do campo."),ng(),wl(1383,"p"),Ux(1384,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),ng()()(),wl(1385,"tr",14)(1386,"td",15)(1387,"div",23)(1388,"span",24),Ux(1389," p-required"),Ul(1390,"br"),ng()()(),wl(1391,"td",19)(1392,"code",26),Ux(1393,"boolean"),ng()(),wl(1394,"td",21)(1395,"p")(1396,"code"),Ux(1397,"false"),ng()()(),wl(1398,"td",22)(1399,"em")(1400,"strong"),Ux(1401,"(opcional)"),ng()(),wl(1402,"p"),Ux(1403,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),Ux(1408," p-show-required"),Ul(1409,"br"),ng()()(),wl(1410,"td",19)(1411,"code",26),Ux(1412,"boolean"),ng()(),wl(1413,"td",21),Ux(1414,"-"),ng(),wl(1415,"td",22)(1416,"p"),Ux(1417,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1418,"blockquote")(1419,"p"),Ux(1420,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1421,"ul")(1422,"li"),Ux(1423,"N\xE3o possuir "),wl(1424,"code"),Ux(1425,"p-help"),ng(),Ux(1426," e/ou "),wl(1427,"code"),Ux(1428,"p-label"),ng(),Ux(1429,"."),ng()()()(),wl(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),Ux(1434," p-size"),Ul(1435,"br"),ng()()(),wl(1436,"td",19)(1437,"code",25),Ux(1438,"string"),ng()(),wl(1439,"td",21)(1440,"p")(1441,"code"),Ux(1442,"medium"),ng()()(),wl(1443,"td",22)(1444,"em")(1445,"strong"),Ux(1446,"(opcional)"),ng()(),wl(1447,"p"),Ux(1448,"Define o tamanho do componente:"),ng(),wl(1449,"ul")(1450,"li")(1451,"code"),Ux(1452,"small"),ng(),Ux(1453,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1454,"li")(1455,"code"),Ux(1456,"medium"),ng(),Ux(1457,": altura do input como 44px."),ng()(),wl(1458,"blockquote")(1459,"p"),Ux(1460,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1461,"code"),Ux(1462,"medium"),ng(),Ux(1463,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1464,"a",42),Ux(1465,"po-theme"),ng(),Ux(1466,"."),ng()()()(),wl(1467,"tr",14)(1468,"td",15)(1469,"div",23)(1470,"span",24),Ux(1471," p-sort"),Ul(1472,"br"),ng()()(),wl(1473,"td",19)(1474,"code",26),Ux(1475,"boolean"),ng()(),wl(1476,"td",21),Ux(1477,"-"),ng(),wl(1478,"td",22)(1479,"p"),Ux(1480,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),ng()()()(),wl(1481,"h3",10),Ux(1482,"M\xE9todos"),ng(),wl(1483,"table",43)(1484,"tr",14)(1485,"th",44)(1486,"div",23)(1487,"h4")(1488,"span",24),Ux(1489," focus "),ng()()()()(),wl(1490,"tr",22)(1491,"td",22)(1492,"p"),Ux(1493,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1494,"p"),Ux(1495,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1496,"pre")(1497,"code"),Ux(1498,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),ng()()()()(),Ul(1499,"br"),wl(1500,"table",43)(1501,"tr",14)(1502,"th",44)(1503,"div",23)(1504,"h4")(1505,"span",24),Ux(1506," showAdditionalHelp "),ng()()()()(),wl(1507,"tr",22)(1508,"td",22)(1509,"p"),Ux(1510,"M\xE9todo que exibe "),wl(1511,"code"),Ux(1512,"p-helper"),ng(),Ux(1513," ou executa a a\xE7\xE3o definida em "),wl(1514,"code"),Ux(1515,"p-helper{eventOnClick}"),ng(),Ux(1516," ou em "),wl(1517,"code"),Ux(1518,"p-additionalHelp"),ng(),Ux(1519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1520,"code"),Ux(1521,"p-keydown"),ng(),Ux(1522,"."),ng(),wl(1523,"blockquote")(1524,"p"),Ux(1525,"Exibe ou oculta o conte\xFAdo do componente "),wl(1526,"code"),Ux(1527,"po-helper"),ng(),Ux(1528," quando o componente estiver com foco."),ng()(),wl(1529,"pre")(1530,"code"),Ux(1531,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),ng()(),wl(1532,"pre")(1533,"code"),Ux(1534,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1535,"br"),wl(1536,"h3"),Ux(1537,"Interfaces"),ng(),wl(1538,"h4",45)(1539,"code",5),Ux(1540,"PoComboFilter"),ng()(),wl(1541,"div",2)(1542,"p"),Ux(1543,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),ng()(),wl(1544,"h4",10),Ux(1545,"M\xE9todos"),ng(),wl(1546,"table",43)(1547,"tr",14)(1548,"th",44)(1549,"div",23)(1550,"h4")(1551,"span",24),Ux(1552," getFilteredData "),ng()()()()(),wl(1553,"tr",22)(1554,"td",22)(1555,"p"),Ux(1556,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),ng()()()(),wl(1557,"h5")(1558,"b"),Ux(1559,"Par\xE2metros"),ng()(),wl(1560,"table",11)(1561,"tr",12)(1562,"th",13),Ux(1563,"Nome"),ng(),wl(1564,"th",13),Ux(1565,"Tipo"),ng(),wl(1566,"th",13),Ux(1567,"Descri\xE7\xE3o"),ng()(),wl(1568,"tr",14)(1569,"td",15),Ux(1570," params"),ng(),wl(1571,"td",19)(1572,"code",46),Ux(1573," any "),ng()(),wl(1574,"td",22)(1575,"p"),Ux(1576,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),ng()()(),wl(1577,"tr",14)(1578,"td",15),Ux(1579," filterParams"),ng(),wl(1580,"td",19)(1581,"code",46),Ux(1582," any "),ng()(),wl(1583,"td",22)(1584,"p"),Ux(1585,"Valor informado atrav\xE9s da propriedade "),wl(1586,"code"),Ux(1587,"p-filter-params"),ng(),Ux(1588,"."),ng()()()(),Ul(1589,"br"),wl(1590,"table",43)(1591,"tr",14)(1592,"th",44)(1593,"div",23)(1594,"h4")(1595,"span",24),Ux(1596," getObjectByValue "),ng()()()()(),wl(1597,"tr",22)(1598,"td",22)(1599,"p"),Ux(1600,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),ng()()()(),wl(1601,"h5")(1602,"b"),Ux(1603,"Par\xE2metros"),ng()(),wl(1604,"table",11)(1605,"tr",12)(1606,"th",13),Ux(1607,"Nome"),ng(),wl(1608,"th",13),Ux(1609,"Tipo"),ng(),wl(1610,"th",13),Ux(1611,"Descri\xE7\xE3o"),ng()(),wl(1612,"tr",14)(1613,"td",15),Ux(1614," value"),ng(),wl(1615,"td",19)(1616,"code",25),Ux(1617," string "),ng(),wl(1618,"code",27),Ux(1619," number "),ng()(),wl(1620,"td",22)(1621,"p"),Ux(1622,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),ng()()(),wl(1623,"tr",14)(1624,"td",15),Ux(1625," filterParams"),ng(),wl(1626,"td",19)(1627,"code",46),Ux(1628," any "),ng()(),wl(1629,"td",22)(1630,"p"),Ux(1631,"Valor informado atrav\xE9s da propriedade "),wl(1632,"code"),Ux(1633,"p-filter-params"),ng(),Ux(1634,"."),ng()()()(),Ul(1635,"br"),wl(1636,"h4",45)(1637,"code",5),Ux(1638,"PoComboLiterals"),ng()(),wl(1639,"div",2)(1640,"p"),Ux(1641,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1642,"code"),Ux(1643,"po-combo"),ng(),Ux(1644,"."),ng()(),wl(1645,"h4",10),Ux(1646,"Propriedades"),ng(),wl(1647,"table",11)(1648,"tr",12)(1649,"th",13),Ux(1650,"Nome"),ng(),wl(1651,"th",13),Ux(1652,"Tipo"),ng(),wl(1653,"th",13),Ux(1654,"Descri\xE7\xE3o"),ng()(),wl(1655,"tr",14)(1656,"td",15)(1657,"div",23)(1658,"span",24),Ux(1659," chooseOption"),Ul(1660,"br"),ng()()(),wl(1661,"td",19)(1662,"code",25),Ux(1663,"string"),ng()(),wl(1664,"td",22)(1665,"em")(1666,"strong"),Ux(1667,"(opcional)"),ng()(),wl(1668,"p"),Ux(1669,"Texto exibido quando o combo estiver vazio."),ng()()(),wl(1670,"tr",14)(1671,"td",15)(1672,"div",23)(1673,"span",24),Ux(1674," clean"),Ul(1675,"br"),ng()()(),wl(1676,"td",19)(1677,"code",25),Ux(1678,"string"),ng()(),wl(1679,"td",22)(1680,"em")(1681,"strong"),Ux(1682,"(opcional)"),ng()(),wl(1683,"p"),Ux(1684,"Texto do aria-label do bot\xE3o de limpar"),ng()()(),wl(1685,"tr",14)(1686,"td",15)(1687,"div",23)(1688,"span",24),Ux(1689," noData"),Ul(1690,"br"),ng()()(),wl(1691,"td",19)(1692,"code",25),Ux(1693,"string"),ng()(),wl(1694,"td",22)(1695,"em")(1696,"strong"),Ux(1697,"(opcional)"),ng()(),wl(1698,"p"),Ux(1699,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),ng()()()(),wl(1700,"h4",45)(1701,"code",5),Ux(1702,"PoComboOptionGroup"),ng()(),wl(1703,"div",2)(1704,"p"),Ux(1705,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),wl(1706,"code"),Ux(1707,"po-combo"),ng(),Ux(1708,"."),ng()(),wl(1709,"h4",10),Ux(1710,"Propriedades"),ng(),wl(1711,"table",11)(1712,"tr",12)(1713,"th",13),Ux(1714,"Nome"),ng(),wl(1715,"th",13),Ux(1716,"Tipo"),ng(),wl(1717,"th",13),Ux(1718,"Descri\xE7\xE3o"),ng()(),wl(1719,"tr",14)(1720,"td",15)(1721,"div",23)(1722,"span",24),Ux(1723," label"),Ul(1724,"br"),ng()()(),wl(1725,"td",19)(1726,"code",25),Ux(1727,"string"),ng()(),wl(1728,"td",22)(1729,"p"),Ux(1730,"T\xEDtulo para cada grupo de op\xE7\xF5es."),ng(),wl(1731,"p"),Ux(1732,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),ng()()(),wl(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),Ux(1737," options"),Ul(1738,"br"),ng()()(),wl(1739,"td",19)(1740,"code",47),Ux(1741,"Array<PoComboOption>"),ng()(),wl(1742,"td",22)(1743,"p"),Ux(1744,"Lista de itens a serem exibidos."),ng()()()(),wl(1745,"h4",45)(1746,"code",5),Ux(1747,"PoComboOption"),ng()(),wl(1748,"div",2)(1749,"p"),Ux(1750,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),wl(1751,"code"),Ux(1752,"po-combo"),ng(),Ux(1753,"."),ng()(),wl(1754,"h4",10),Ux(1755,"Propriedades"),ng(),wl(1756,"table",11)(1757,"tr",12)(1758,"th",13),Ux(1759,"Nome"),ng(),wl(1760,"th",13),Ux(1761,"Tipo"),ng(),wl(1762,"th",13),Ux(1763,"Descri\xE7\xE3o"),ng()(),wl(1764,"tr",14)(1765,"td",15)(1766,"div",23)(1767,"span",24),Ux(1768," label"),Ul(1769,"br"),ng()()(),wl(1770,"td",19)(1771,"code",25),Ux(1772,"string"),ng()(),wl(1773,"td",22)(1774,"em")(1775,"strong"),Ux(1776,"(opcional)"),ng()(),wl(1777,"p"),Ux(1778,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),ng(),wl(1779,"blockquote")(1780,"p"),Ux(1781,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),wl(1782,"code"),Ux(1783,"value"),ng(),Ux(1784,"."),ng()()()(),wl(1785,"tr",14)(1786,"td",15)(1787,"div",23)(1788,"span",24),Ux(1789," value"),Ul(1790,"br"),ng()()(),wl(1791,"td",19)(1792,"code",25),Ux(1793,"string "),ng(),wl(1794,"code",27),Ux(1795," number"),ng()(),wl(1796,"td",22)(1797,"p"),Ux(1798,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),wl(1799,"em"),Ux(1800,"model"),ng(),Ux(1801,"."),ng()()()(),wl(1802,"h3"),Ux(1803,"Enums"),ng(),wl(1804,"h4",4)(1805,"code",5),Ux(1806,"PoComboFilterMode"),ng()(),wl(1807,"div",2)(1808,"p"),Ux(1809,"Define o tipo de busca usado no po-combo."),ng()(),wl(1810,"h4",10),Ux(1811,"Propriedades"),ng(),wl(1812,"table",11)(1813,"tr",12)(1814,"th",13),Ux(1815,"Nome"),ng(),wl(1816,"th",13),Ux(1817,"Descri\xE7\xE3o"),ng()(),wl(1818,"tr",14)(1819,"td",15)(1820,"div",23)(1821,"span",24),Ux(1822," startsWith"),Ul(1823,"br"),ng()()(),wl(1824,"td",22)(1825,"p"),Ux(1826,"Verifica se o texto "),wl(1827,"em"),Ux(1828,"inicia"),ng(),Ux(1829," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),ng()()(),wl(1830,"tr",14)(1831,"td",15)(1832,"div",23)(1833,"span",24),Ux(1834," contains"),Ul(1835,"br"),ng()()(),wl(1836,"td",22)(1837,"p"),Ux(1838,"Verifica se o texto "),wl(1839,"em"),Ux(1840,"cont\xE9m"),ng(),Ux(1841," o valor pesquisado."),ng()()(),wl(1842,"tr",14)(1843,"td",15)(1844,"div",23)(1845,"span",24),Ux(1846," endsWith"),Ul(1847,"br"),ng()()(),wl(1848,"td",22)(1849,"p"),Ux(1850,"Verifica se o texto "),wl(1851,"em"),Ux(1852,"finaliza"),ng(),Ux(1853," com o valor pesquisado."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var st=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut$1("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-combo-doc"),ng(),wl(4,"po-tab",3),ut$1("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),ng()()()),p&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,Qe,Je,Ze,et,nt,at,rt,mt,dt],encapsulation:2})}return a})();var no=[{path:"",component:st}],ct=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(no),vL]})}return a})();var Vn=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,ct]})}return a})();export{Vn as DocPoComboModule};