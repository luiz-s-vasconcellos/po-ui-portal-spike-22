import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,r as r$1,d as f,cg as uY,ch as om,K as KC,W,E,bb as dn,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut$1,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,b9 as Ro,aQ as dt,ca as bO,a4 as oN,co as lN,ck as vk,cl as gk,cy as la,ai as ya,be as ri,a2 as GE,ah as uo,aR as ty,X as we,a3 as D3,ao as QA,F as uw,ar as JA,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Oe=(()=>{class l{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic"]],standalone:false,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&Ul(0,"po-multiselect",0),a&2&&YE("p-options",n.options);},dependencies:[dn],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l}),Le=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect Basic"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-multiselect-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ze,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Oe],encapsulation:2})}return l})();var Fe=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,r$1({},this.option)],this.option={label:void 0,value:void 0};}changeEvent(s){this.event=s;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(s){this.customLiterals=void 0;}}restore(){this.helperText="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs"]],standalone:false,decls:33,vars:51,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap","p-compact-label"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=lx();wl(0,"div",2)(1,"po-multiselect",3),pw("ngModelChange",function(p){return Qy(c),$x(n.multiselect,p)||(n.multiselect=p),Jy(p)}),ut$1("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),ng(),$0(),ng(),Ul(2,"po-divider"),wl(3,"div",2),Ul(4,"po-info",4)(5,"po-info",5),ng(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"div",2)(10,"po-input",6),pw("ngModelChange",function(p){return Qy(c),$x(n.option.label,p)||(n.option.label=p),Jy(p)}),ng(),$0(),wl(11,"po-input",7),pw("ngModelChange",function(p){return Qy(c),$x(n.option.value,p)||(n.option.value=p),Jy(p)}),ng(),$0(),ng(),wl(12,"div",2)(13,"po-button",8),ut$1("p-click",function(){return n.addOption()}),ng()()(),Ul(14,"po-divider"),wl(15,"form",null,1)(17,"po-input",9),pw("ngModelChange",function(p){return Qy(c),$x(n.label,p)||(n.label=p),Jy(p)}),ng(),$0(),wl(18,"po-input",10),pw("ngModelChange",function(p){return Qy(c),$x(n.help,p)||(n.help=p),Jy(p)}),ng(),$0(),wl(19,"po-input",11),pw("ngModelChange",function(p){return Qy(c),$x(n.helperText,p)||(n.helperText=p),Jy(p)}),ng(),$0(),wl(20,"po-input",12),pw("ngModelChange",function(p){return Qy(c),$x(n.placeholder,p)||(n.placeholder=p),Jy(p)}),ng(),$0(),wl(21,"po-input",13),pw("ngModelChange",function(p){return Qy(c),$x(n.placeholderSearch,p)||(n.placeholderSearch=p),Jy(p)}),ng(),$0(),wl(22,"po-input",14),pw("ngModelChange",function(p){return Qy(c),$x(n.fieldErrorMessage,p)||(n.fieldErrorMessage=p),Jy(p)}),ng(),$0(),wl(23,"po-input",15),pw("ngModelChange",function(p){return Qy(c),$x(n.literals,p)||(n.literals=p),Jy(p)}),ut$1("p-change",function(){return n.changeLiterals()}),ng(),$0(),wl(24,"po-input",16),pw("ngModelChange",function(p){return Qy(c),$x(n.filterService,p)||(n.filterService=p),Jy(p)}),ng(),$0(),wl(25,"po-input",17),pw("ngModelChange",function(p){return Qy(c),$x(n.fieldValue,p)||(n.fieldValue=p),Jy(p)}),ng(),$0(),wl(26,"po-input",18),pw("ngModelChange",function(p){return Qy(c),$x(n.fieldLabel,p)||(n.fieldLabel=p),Jy(p)}),ng(),$0(),wl(27,"po-checkbox-group",19),pw("ngModelChange",function(p){return Qy(c),$x(n.properties,p)||(n.properties=p),Jy(p)}),ng(),$0(),wl(28,"po-radio-group",20),pw("ngModelChange",function(p){return Qy(c),$x(n.filterMode,p)||(n.filterMode=p),Jy(p)}),ng(),$0(),wl(29,"po-radio-group",21),pw("ngModelChange",function(p){return Qy(c),$x(n.size,p)||(n.size=p),Jy(p)}),ng(),$0(),wl(30,"po-radio-group",22),pw("ngModelChange",function(p){return Qy(c),$x(n.listboxPosition,p)||(n.listboxPosition=p),Jy(p)}),ng(),$0(),wl(31,"div",2)(32,"po-button",23),ut$1("p-click",function(){return n.restore()}),ng()()();}if(a&2){let c=_x(8);Pp(),hw("ngModel",n.multiselect),YE("p-helper",n.helperText)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",n.multiselect),Pp(),YE("p-value",n.event),Pp(5),hw("ngModel",n.option.label),G0(),Pp(),hw("ngModel",n.option.value),G0(),Pp(2),YE("p-disabled",c.form.invalid),Pp(4),hw("ngModel",n.label),G0(),Pp(),hw("ngModel",n.help),G0(),Pp(),hw("ngModel",n.helperText),G0(),Pp(),hw("ngModel",n.placeholder),G0(),Pp(),hw("ngModel",n.placeholderSearch),G0(),Pp(),hw("ngModel",n.fieldErrorMessage),G0(),Pp(),hw("ngModel",n.literals),G0(),Pp(),hw("ngModel",n.filterService),G0(),Pp(),hw("ngModel",n.fieldValue),G0(),Pp(),hw("ngModel",n.fieldLabel),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.filterMode),YE("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0(),Pp(),hw("ngModel",n.listboxPosition),YE("p-options",n.listboxPositionOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,dn,ga,Vp],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l}),Be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect Labs"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-helper]="helperText"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
    [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
    [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  >
  </po-multiselect>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
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
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  helperText: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
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

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.helperText = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-multiselect-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,tt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Fe],encapsulation:2})}return l})();var Ne=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean();}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[];}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation"]],standalone:false,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=lx();wl(0,"form",null,0)(2,"h3"),Ux(3,"Collective vacations"),ng(),Ul(4,"po-divider"),wl(5,"div",2)(6,"po-datepicker",3),pw("ngModelChange",function(p){return Qy(c),$x(n.initialPeriod,p)||(n.initialPeriod=p),Jy(p)}),ng(),$0(),wl(7,"po-datepicker",4),pw("ngModelChange",function(p){return Qy(c),$x(n.finalPeriod,p)||(n.finalPeriod=p),Jy(p)}),ng(),$0(),ng(),wl(8,"div",2)(9,"po-radio-group",5),pw("ngModelChange",function(p){return Qy(c),$x(n.days,p)||(n.days=p),Jy(p)}),ng(),$0(),ng(),wl(10,"div",2)(11,"po-multiselect",6),pw("ngModelChange",function(p){return Qy(c),$x(n.employeesVacations,p)||(n.employeesVacations=p),Jy(p)}),ng(),$0(),ng(),wl(12,"div",2)(13,"po-button",7),ut$1("p-click",function(){Qy(c);let p=_x(16);return n.updateNameEmployeesVacations(),Jy(p.open())}),ng(),wl(14,"po-button",8),ut$1("p-click",function(){return n.clean()}),ng()()(),wl(15,"po-modal",9,1)(17,"div",2),Ul(18,"po-info",10),oN(19,"date"),Ul(20,"po-info",11),oN(21,"date"),Ul(22,"po-info",12),ng(),Ul(23,"po-divider"),wl(24,"div",2),Ul(25,"po-info",13),ng()();}if(a&2){let c=_x(1);Pp(6),hw("ngModel",n.initialPeriod),G0(),Pp(),hw("ngModel",n.finalPeriod),YE("p-min-date",n.initialPeriod),G0(),Pp(2),hw("ngModel",n.days),YE("p-options",n.daysOptions),G0(),Pp(2),hw("ngModel",n.employeesVacations),YE("p-options",n.employees),G0(),Pp(2),YE("p-disabled",c.form.invalid),Pp(5),YE("p-value",lN(19,12,n.initialPeriod,"longDate","+0000")),Pp(2),YE("p-value",lN(21,16,n.finalPeriod,"longDate","+0000")),Pp(2),YE("p-value",n.days),Pp(3),YE("p-value",n.nameEmployeesVacations);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,Ro,dn,ga,Vp,dt,bO],encapsulation:2,changeDetection:1})}return l})();var at=l=>({"docs-sample-code-tabs":l}),We=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect - Vacation"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-multiselect-vacation"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,at,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ne],encapsulation:2})}return l})();var ze=(()=>{class l{formBuilder=f(uY);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,om.required],finalPeriod:[null,om.required],days:[null,om.required],employeesVacations:[null,om.required]}),this.clean();}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0});}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:false,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=lx();wl(0,"form",1)(1,"h3"),Ux(2,"Collective vacations"),ng(),Ul(3,"po-divider"),wl(4,"div",2),Ul(5,"po-datepicker",3),$0(),Ul(6,"po-datepicker",4),$0(),ng(),wl(7,"div",2),Ul(8,"po-multiselect",5),$0(),Ul(9,"po-radio-group",6),$0(),ng(),wl(10,"div",2)(11,"po-button",7),ut$1("p-click",function(){Qy(c);let p=_x(14);return n.updateEmployeesVacations(),Jy(p.open())}),ng(),wl(12,"po-button",8),ut$1("p-click",function(){return n.clean()}),ng()()(),wl(13,"po-modal",9,0)(15,"div",2),Ul(16,"po-info",10),oN(17,"date"),Ul(18,"po-info",11),oN(19,"date"),Ul(20,"po-info",12),ng(),Ul(21,"po-divider"),wl(22,"div",2),Ul(23,"po-info",13),ng()();}a&2&&(YE("formGroup",n.formCollectiveVacations),Pp(5),G0(),Pp(),YE("p-min-date",n.getRangeFinalPeriod()),G0(),Pp(2),YE("p-auto-height",true)("p-options",n.employees)("p-required",true),G0(),Pp(),YE("p-options",n.daysOptions)("p-columns",3),G0(),Pp(2),YE("p-disabled",n.formCollectiveVacations.invalid),Pp(5),YE("p-value",lN(17,12,n.initialPeriod,"longDate","+0000")),Pp(2),YE("p-value",lN(19,16,n.finalPeriod,"longDate","+0000")),Pp(2),YE("p-value",n.days),Pp(3),YE("p-value",n.nameEmployeesVacations));},dependencies:[aY,iY,oY,vk,gk,Pe,di,Ro,dn,ga,Vp,dt,bO],encapsulation:2,changeDetection:1})}return l})();var st=l=>({"docs-sample-code-tabs":l}),Ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect - Vacation Reactive Form"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-multiselect-vacation-reactive-form"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,st,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ze],encapsulation:2})}return l})();function ct(l,X){l&1&&Ul(0,"po-tag",11),l&2&&YE("p-icon",true);}function ut(l,X){l&1&&Ul(0,"po-tag",12),l&2&&YE("p-icon",true);}function bt(l,X){l&1&&Ul(0,"po-tag",13),l&2&&YE("p-icon",true);}function ht(l,X){if(l&1&&(wl(0,"div",0)(1,"div",7)(2,"div",8),Ux(3),ng()(),wl(4,"div",9)(5,"div",10),QA(6,ct,1,1,"po-tag",11),QA(7,ut,1,1,"po-tag",12),QA(8,bt,1,1,"po-tag",13),ng()()()),l&2){let s=X.$implicit;Pp(3),uw(s.label),Pp(3),JA(s.admin?6:-1),Pp(),JA(s.access?7:-1),Pp(),JA(!s.admin&&!s.access?8:-1);}}var He=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:true,access:true},access:{admin:false,access:true},noAccess:{admin:false,access:false}};options=[{value:"Anna M.",label:"Anna M.",admin:false,access:true},{value:"Jhon T.",label:"Jhon T.",admin:true,access:true},{value:"Marie J.",label:"Marie J.",admin:false,access:false}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r$1({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template"]],standalone:false,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"po-select",1),pw("ngModelChange",function(d){return $x(n.employee,d)||(n.employee=d),d}),ng(),$0(),wl(2,"po-select",2),pw("ngModelChange",function(d){return $x(n.typeAccess,d)||(n.typeAccess=d),d}),ng(),$0(),wl(3,"div",3)(4,"po-button",4),ut$1("p-click",function(){return n.changeAccess()}),ng()(),wl(5,"po-multiselect",5),GE(6,ht,9,4,"ng-template",6),ng()()),a&2&&(Pp(),YE("p-options",n.employees),hw("ngModel",n.employee),G0(),Pp(),YE("p-options",n.typeAccessValue),hw("ngModel",n.typeAccess),G0(),Pp(2),YE("p-disabled",!n.employee||!n.typeAccess),Pp(),YE("p-options",n.options)("p-hide-select-all",true));},dependencies:[iY,ck,Pe,dn,la,ya,ri],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"],changeDetection:1})}return l})();var St=l=>({"docs-sample-code-tabs":l}),je=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect - Template"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styleUrls: ['./sample-po-multiselect-template.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-multiselect-template/sample-po-multiselect-template.component.css"),ng(),wl(25,"pre",11),Ux(26,`.containerFlex {
  display: flex;
  align-items: center;
}

.containerFlexTag {
  display: flex;
  gap: 2px;
  flex-direction: column;
}

.containerButton {
  display: flex;
  align-items: flex-end;
  padding: 8px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-multiselect-template"),ng(),Ul(29,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,St,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,He],encapsulation:2})}return l})();var ue=(()=>{class l{http=f(KC);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(W(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(W(a=>a.items))}static \u0275fac=function(a){return new(a||l)};static \u0275prov=E({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Re=(()=>{class l{samplePoMultiselectHeroesService=f(ue);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s);}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s;}changeOptions(s){this.heroes=[...s];}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes"]],standalone:false,features:[we([ue])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"po-multiselect",1),pw("ngModelChange",function(d){return $x(n.multiselect,d)||(n.multiselect=d),d}),ut$1("p-change",function(d){return n.changeOptions(d)}),ng(),$0(),wl(2,"po-container",2),Ul(3,"po-table",3),ng()()),a&2&&(Pp(),hw("ngModel",n.multiselect),YE("p-filter-service",n.filterService)("p-debounce-time",n.debounce),G0(),Pp(2),YE("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[iY,ck,uo,dn,ty],encapsulation:2,changeDetection:1})}return l})();var vt=l=>({"docs-sample-code-tabs":l}),Je=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect - Heroes - using API"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-multiselect-heroes"),ng(),Ul(27,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,vt,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Re],encapsulation:2})}return l})();var Ue=(()=>{class l{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array"]],standalone:false,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"div",1)(2,"po-select",2),pw("ngModelChange",function(d){return $x(n.fieldLabel,d)||(n.fieldLabel=d),d}),ut$1("p-change",function(d){return n.onChange(d)}),ng(),$0(),wl(3,"po-select",3),pw("ngModelChange",function(d){return $x(n.fieldValue,d)||(n.fieldValue=d),d}),ut$1("p-change",function(d){return n.onChange(d)}),ng(),$0(),ng(),wl(4,"div",1)(5,"div",0)(6,"po-multiselect",4),pw("ngModelChange",function(d){return $x(n.company,d)||(n.company=d),d}),ng(),$0(),ng(),wl(7,"div",0),Ul(8,"po-info",5),ng()()()),a&2&&(Pp(2),YE("p-options",n.optionsSelect),hw("ngModel",n.fieldLabel),G0(),Pp(),YE("p-options",n.optionsSelect),hw("ngModel",n.fieldValue),G0(),Pp(3),YE("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),hw("ngModel",n.company),G0(),Pp(2),YE("p-value",n.company));},dependencies:[iY,ck,dn,ya,Vp],encapsulation:2,changeDetection:1})}return l})();var Ct=l=>({"docs-sample-code-tabs":l}),Ge=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Multiselect - Array Any"),ng(),wl(4,"a",2),ut$1("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
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

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-multiselect-any-array"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ct,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ue],encapsulation:2})}return l})();var Qe=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-doc"]],standalone:false,decls:1513,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoMultiselectComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),ng(),wl(24,"p"),Ux(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),ng(),wl(26,"p"),Ux(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),ng(),wl(28,"p"),Ux(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),wl(30,"code"),Ux(31,"p-filter-service"),ng(),Ux(32,"."),ng(),wl(33,"h4"),Ux(34,"Boas pr\xE1ticas"),ng(),wl(35,"ul")(36,"li"),Ux(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),ng(),wl(38,"li"),Ux(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),ng()(),wl(40,"h4"),Ux(41,"Acessibilidade tratada no componente"),ng(),wl(42,"p"),Ux(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),ng(),wl(44,"ul")(45,"li"),Ux(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),ng(),wl(47,"li"),Ux(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),ng(),wl(49,"li"),Ux(50,"Utilize a tecla Esc do teclado para fechar o listbox."),ng(),wl(51,"li"),Ux(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),ng(),wl(53,"li"),Ux(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),ng()(),wl(55,"h4"),Ux(56,"Tokens customiz\xE1veis"),ng(),wl(57,"p"),Ux(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(59,"blockquote")(60,"p"),Ux(61,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(62,"a",6),Ux(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(64,"."),ng()(),wl(65,"table")(66,"thead")(67,"tr")(68,"th"),Ux(69,"Propriedade"),ng(),wl(70,"th"),Ux(71,"Descri\xE7\xE3o"),ng(),wl(72,"th"),Ux(73,"Valor Padr\xE3o"),ng()()(),wl(74,"tbody")(75,"tr")(76,"td")(77,"strong"),Ux(78,"Default Values"),ng()(),Ul(79,"td")(80,"td"),ng(),wl(81,"tr")(82,"td")(83,"code"),Ux(84,"--font-family"),ng()(),wl(85,"td"),Ux(86,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(87,"td")(88,"code"),Ux(89,"var(--font-family-theme)"),ng()()(),wl(90,"tr")(91,"td")(92,"code"),Ux(93,"--font-size"),ng()(),wl(94,"td"),Ux(95,"Tamanho da fonte"),ng(),wl(96,"td")(97,"code"),Ux(98,"var(--font-size-default)"),ng()()(),wl(99,"tr")(100,"td")(101,"code"),Ux(102,"--text-color-placeholder"),ng(),Ux(103," \xA0"),ng(),wl(104,"td"),Ux(105,"Cor do texto do placeholder"),ng(),wl(106,"td")(107,"code"),Ux(108,"var(--color-action-disabled)"),ng()()(),wl(109,"tr")(110,"td")(111,"code"),Ux(112,"--color"),ng()(),wl(113,"td"),Ux(114,"Cor principal do multiselect"),ng(),wl(115,"td")(116,"code"),Ux(117,"var(--color-neutral-dark-70)"),ng()()(),wl(118,"tr")(119,"td")(120,"code"),Ux(121,"--background"),ng()(),wl(122,"td"),Ux(123,"Cor de background"),ng(),wl(124,"td")(125,"code"),Ux(126,"var(--color-neutral-light-05)"),ng()()(),wl(127,"tr")(128,"td")(129,"code"),Ux(130,"--field-container-title-justify"),ng()(),wl(131,"td"),Ux(132,"Alinhamento horizontal do t\xEDtulo ("),wl(133,"code"),Ux(134,"justify-content"),ng(),Ux(135,")"),ng(),wl(136,"td")(137,"code"),Ux(138,"space-between"),ng()()(),wl(139,"tr")(140,"td")(141,"code"),Ux(142,"--field-container-title-flex"),ng()(),wl(143,"td"),Ux(144,"Flex do t\xEDtulo ("),wl(145,"code"),Ux(146,"flex"),ng(),Ux(147,")"),ng(),wl(148,"td")(149,"code"),Ux(150,"1 auto"),ng()()(),wl(151,"tr")(152,"td")(153,"strong"),Ux(154,"Hover"),ng()(),Ul(155,"td")(156,"td"),ng(),wl(157,"tr")(158,"td")(159,"code"),Ux(160,"--color-hover"),ng()(),wl(161,"td"),Ux(162,"Cor principal no estado hover"),ng(),wl(163,"td")(164,"code"),Ux(165,"var(--color-action-hover)"),ng()()(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--background-hover"),ng()(),wl(170,"td"),Ux(171,"Cor de background no estado hover"),ng(),wl(172,"td")(173,"code"),Ux(174,"var(--color-brand-01-lighter)"),ng()()(),wl(175,"tr")(176,"td")(177,"strong"),Ux(178,"Focused"),ng()(),Ul(179,"td")(180,"td"),ng(),wl(181,"tr")(182,"td")(183,"code"),Ux(184,"--color-focused"),ng()(),wl(185,"td"),Ux(186,"Cor principal no estado de focus"),ng(),wl(187,"td")(188,"code"),Ux(189,"var(--color-action-default)"),ng()()(),wl(190,"tr")(191,"td")(192,"code"),Ux(193,"--outline-color-focused"),ng(),Ux(194," \xA0"),ng(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Disabled"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-disabled"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado disabled"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-action-disabled)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-disabled"),ng(),Ux(219," \xA0"),ng(),wl(220,"td"),Ux(221,"Cor de background no estado disabled \xA0"),ng(),wl(222,"td")(223,"code"),Ux(224,"var(--color-neutral-light-20)"),ng()()(),wl(225,"tr")(226,"td")(227,"strong"),Ux(228,"Error"),ng()(),Ul(229,"td")(230,"td"),ng(),wl(231,"tr")(232,"td")(233,"code"),Ux(234,"--color-error"),ng()(),wl(235,"td"),Ux(236,"Cor principal no estado error"),ng(),wl(237,"td")(238,"code"),Ux(239,"var(--color-feedback-negative-base)"),ng()()()()()(),wl(240,"div",7)(241,"h4",8),Ux(242,"Seletor"),ng(),wl(243,"pre",9),Ux(244,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    p-loading="boolean"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),ng()(),wl(245,"h4",10),Ux(246,"Propriedades"),ng(),wl(247,"table",11)(248,"tr",12)(249,"th",13),Ux(250,"Nome"),ng(),wl(251,"th",13),Ux(252,"Tipo"),ng(),wl(253,"th",13),Ux(254,"Padr\xE3o"),ng(),wl(255,"th",13),Ux(256,"Descri\xE7\xE3o"),ng()(),wl(257,"tr",14)(258,"td",15)(259,"div",16)(260,"span",17),Ux(261," (p-additional-help)"),Ul(262,"br"),ng()(),wl(263,"div",18),Ux(264,"Deprecated"),ng()(),wl(265,"td",19)(266,"code",20),Ux(267,"EventEmitter"),ng()(),wl(268,"td",21),Ux(269,"-"),ng(),wl(270,"td",22)(271,"em")(272,"strong"),Ux(273,"(opcional)"),ng()(),wl(274,"p"),Ux(275,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(276,"blockquote")(277,"p"),Ux(278,"Essa propriedade est\xE1 "),wl(279,"strong"),Ux(280,"depreciada"),ng(),Ux(281," e ser\xE1 removida na vers\xE3o "),wl(282,"code"),Ux(283,"23.x.x"),ng(),Ux(284,". Recomendamos utilizar a propriedade "),wl(285,"code"),Ux(286,"p-helper"),ng(),Ux(287," que oferece mais recursos e flexibilidade."),ng()()()(),wl(288,"tr",14)(289,"td",15)(290,"div",23)(291,"span",24),Ux(292," p-additional-help-tooltip"),Ul(293,"br"),ng()(),wl(294,"div",18),Ux(295,"Deprecated"),ng()(),wl(296,"td",19)(297,"code",25),Ux(298,"string"),ng()(),wl(299,"td",21),Ux(300,"-"),ng(),wl(301,"td",22)(302,"em")(303,"strong"),Ux(304,"(opcional)"),ng()(),wl(305,"p"),Ux(306,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(307,"code"),Ux(308,"po-helper"),ng(),Ux(309,`.
`),wl(310,"strong"),Ux(311,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(312,"blockquote")(313,"p"),Ux(314,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(315,"blockquote")(316,"p"),Ux(317,"Essa propriedade est\xE1 "),wl(318,"strong"),Ux(319,"depreciada"),ng(),Ux(320," e ser\xE1 removida na vers\xE3o "),wl(321,"code"),Ux(322,"23.x.x"),ng(),Ux(323,". Recomendamos utilizar a propriedade "),wl(324,"code"),Ux(325,"p-helper"),ng(),Ux(326," que oferece mais recursos e flexibilidade."),ng()()()(),wl(327,"tr",14)(328,"td",15)(329,"div",23)(330,"span",24),Ux(331," p-append-in-body"),Ul(332,"br"),ng()()(),wl(333,"td",19)(334,"code",26),Ux(335,"boolean"),ng()(),wl(336,"td",21)(337,"p")(338,"code"),Ux(339,"false"),ng()()(),wl(340,"td",22)(341,"em")(342,"strong"),Ux(343,"(opcional)"),ng()(),wl(344,"p"),Ux(345,"Define que o "),wl(346,"code"),Ux(347,"listbox"),ng(),Ux(348," e/ou popover ("),wl(349,"code"),Ux(350,"p-helper"),ng(),Ux(351," e/ou "),wl(352,"code"),Ux(353,"p-error-limit"),ng(),Ux(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ng(),wl(355,"blockquote")(356,"p"),Ux(357,"Quando utilizado com "),wl(358,"code"),Ux(359,"p-helper"),ng(),Ux(360,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(361,"tr",14)(362,"td",15)(363,"div",23)(364,"span",24),Ux(365," p-auto-focus"),Ul(366,"br"),ng()()(),wl(367,"td",19)(368,"code",26),Ux(369,"boolean"),ng()(),wl(370,"td",21)(371,"p")(372,"code"),Ux(373,"false"),ng()()(),wl(374,"td",22)(375,"em")(376,"strong"),Ux(377,"(opcional)"),ng()(),wl(378,"p"),Ux(379,"Aplica foco no elemento ao ser iniciado."),ng(),wl(380,"blockquote")(381,"p"),Ux(382,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(383,"tr",14)(384,"td",15)(385,"div",23)(386,"span",24),Ux(387," p-auto-height"),Ul(388,"br"),ng()()(),wl(389,"td",19)(390,"code",26),Ux(391,"boolean"),ng()(),wl(392,"td",21)(393,"p")(394,"code"),Ux(395,"false"),ng()()(),wl(396,"td",22)(397,"em")(398,"strong"),Ux(399,"(opcional)"),ng()(),wl(400,"p"),Ux(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ng(),wl(402,"blockquote")(403,"p"),Ux(404,"O valor padr\xE3o ser\xE1 "),wl(405,"code"),Ux(406,"true"),ng(),Ux(407," quando houver servi\xE7o ("),wl(408,"code"),Ux(409,"p-filter-service"),ng(),Ux(410,")."),ng()()()(),wl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),Ux(415," (p-blur)"),Ul(416,"br"),ng()()(),wl(417,"td",19)(418,"code",20),Ux(419,"EventEmitter"),ng()(),wl(420,"td",21),Ux(421,"-"),ng(),wl(422,"td",22)(423,"em")(424,"strong"),Ux(425,"(opcional)"),ng()(),wl(426,"p"),Ux(427,"Evento disparado ao sair do campo."),ng()()(),wl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),Ux(432," (p-change)"),Ul(433,"br"),ng()()(),wl(434,"td",19)(435,"code",20),Ux(436,"EventEmitter"),ng()(),wl(437,"td",21),Ux(438,"-"),ng(),wl(439,"td",22)(440,"em")(441,"strong"),Ux(442,"(opcional)"),ng()(),wl(443,"p"),Ux(444,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),ng()()(),wl(445,"tr",14)(446,"td",15)(447,"div",23)(448,"span",24),Ux(449," p-compact-label"),Ul(450,"br"),ng()()(),wl(451,"td",19)(452,"code",26),Ux(453,"boolean"),ng()(),wl(454,"td",21)(455,"p")(456,"code"),Ux(457,"false"),ng()()(),wl(458,"td",22)(459,"em")(460,"strong"),Ux(461,"(opcional)"),ng()(),wl(462,"p"),Ux(463,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(464,"p"),Ux(465,"Quando habilitado ("),wl(466,"code"),Ux(467,"true"),ng(),Ux(468,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(469,"ul")(470,"li")(471,"code"),Ux(472,"po-label"),ng()(),wl(473,"li")(474,"code"),Ux(475,"p-requirement (showRequired)"),ng()(),wl(476,"li")(477,"code"),Ux(478,"po-helper"),ng()()(),wl(479,"p"),Ux(480,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(481,"p"),Ux(482,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(483,"ul")(484,"li")(485,"code"),Ux(486,"--field-container-title-justify"),ng()(),wl(487,"li")(488,"code"),Ux(489,"--field-container-title-flex"),ng()()(),wl(490,"p"),Ux(491,"Exemplo:"),ng(),wl(492,"pre")(493,"code"),Ux(494,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(495,"p"),Ux(496,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(497,"tr",14)(498,"td",15)(499,"div",23)(500,"span",24),Ux(501," p-debounce-time"),Ul(502,"br"),ng()()(),wl(503,"td",19)(504,"code",27),Ux(505,"number"),ng()(),wl(506,"td",21)(507,"p")(508,"code"),Ux(509,"400"),ng()()(),wl(510,"td",22)(511,"em")(512,"strong"),Ux(513,"(opcional)"),ng()(),wl(514,"p"),Ux(515,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),ng(),wl(516,"blockquote")(517,"p"),Ux(518,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),wl(519,"code"),Ux(520,"p-filter-service"),ng(),Ux(521,") e somente ser\xE1 aceito valor maior do que "),wl(522,"em"),Ux(523,"zero"),ng(),Ux(524,"."),ng()()()(),wl(525,"tr",14)(526,"td",15)(527,"div",23)(528,"span",24),Ux(529," p-disabled"),Ul(530,"br"),ng()()(),wl(531,"td",19)(532,"code",26),Ux(533,"boolean"),ng()(),wl(534,"td",21)(535,"p")(536,"code"),Ux(537,"false"),ng()()(),wl(538,"td",22)(539,"em")(540,"strong"),Ux(541,"(opcional)"),ng()(),wl(542,"p"),Ux(543,"Indica que o campo ser\xE1 desabilitado."),ng()()(),wl(544,"tr",14)(545,"td",15)(546,"div",23)(547,"span",24),Ux(548," p-error-limit"),Ul(549,"br"),ng()()(),wl(550,"td",19)(551,"code",26),Ux(552,"boolean"),ng()(),wl(553,"td",21)(554,"p")(555,"code"),Ux(556,"false"),ng()()(),wl(557,"td",22)(558,"em")(559,"strong"),Ux(560,"(opcional)"),ng()(),wl(561,"p"),Ux(562,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(563,"blockquote")(564,"p"),Ux(565,"Caso essa propriedade seja definida como "),wl(566,"code"),Ux(567,"true"),ng(),Ux(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(569,"tr",14)(570,"td",15)(571,"div",23)(572,"span",24),Ux(573," p-field-error-message"),Ul(574,"br"),ng()()(),wl(575,"td",19)(576,"code",25),Ux(577,"string"),ng()(),wl(578,"td",21),Ux(579,"-"),ng(),wl(580,"td",22)(581,"em")(582,"strong"),Ux(583,"(opcional)"),ng()(),wl(584,"p"),Ux(585,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(586,"blockquote")(587,"p"),Ux(588,"Necess\xE1rio que a propriedade "),wl(589,"code"),Ux(590,"p-required"),ng(),Ux(591," esteja habilitada."),ng()()()(),wl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),Ux(596," p-field-label"),Ul(597,"br"),ng()()(),wl(598,"td",19)(599,"code",25),Ux(600,"string"),ng()(),wl(601,"td",21)(602,"p")(603,"code"),Ux(604,"label"),ng()()(),wl(605,"td",22)(606,"em")(607,"strong"),Ux(608,"(opcional)"),ng()(),wl(609,"p"),Ux(610,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),wl(611,"code"),Ux(612,"p-options"),ng(),Ux(613,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),ng(),wl(614,"p"),Ux(615,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),wl(616,"code"),Ux(617,"PoMultiSelectOption"),ng(),Ux(618,"."),ng()()(),wl(619,"tr",14)(620,"td",15)(621,"div",23)(622,"span",24),Ux(623," p-field-value"),Ul(624,"br"),ng()()(),wl(625,"td",19)(626,"code",25),Ux(627,"string"),ng()(),wl(628,"td",21)(629,"p")(630,"code"),Ux(631,"value"),ng()()(),wl(632,"td",22)(633,"em")(634,"strong"),Ux(635,"(opcional)"),ng()(),wl(636,"p"),Ux(637,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),wl(638,"code"),Ux(639,"p-options"),ng(),Ux(640,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),ng(),wl(641,"p"),Ux(642,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),wl(643,"code"),Ux(644,"PoMultiSelectOption"),ng(),Ux(645,"."),ng()()(),wl(646,"tr",14)(647,"td",15)(648,"div",23)(649,"span",24),Ux(650," p-filter-mode"),Ul(651,"br"),ng()()(),wl(652,"td",19)(653,"code",28),Ux(654,"PoMultiselectFilterMode"),ng()(),wl(655,"td",21)(656,"p")(657,"code"),Ux(658,"startsWith"),ng()()(),wl(659,"td",22)(660,"em")(661,"strong"),Ux(662,"(opcional)"),ng()(),wl(663,"p"),Ux(664,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),ng()()(),wl(665,"tr",14)(666,"td",15)(667,"div",23)(668,"span",24),Ux(669," p-filter-service"),Ul(670,"br"),ng()()(),wl(671,"td",19)(672,"code",25),Ux(673,"string "),ng(),wl(674,"code",29),Ux(675," PoMultiselectFilter"),ng()(),wl(676,"td",21),Ux(677,"-"),ng(),wl(678,"td",22)(679,"em")(680,"strong"),Ux(681,"(opcional)"),ng()(),wl(682,"p"),Ux(683,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),ng(),wl(684,"p"),Ux(685,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),wl(686,"code"),Ux(687,"PoMultiselectFilter"),ng(),Ux(688,"."),ng(),wl(689,"p"),Ux(690,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),wl(691,"a",30),Ux(692,"API PO UI"),ng(),Ux(693," e utilizar as propriedades "),wl(694,"code"),Ux(695,"p-field-label"),ng(),Ux(696," e "),wl(697,"code"),Ux(698,"p-field-value"),ng(),Ux(699," para a constru\xE7\xE3o da lista de itens."),ng(),wl(700,"p"),Ux(701,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),ng(),wl(702,"pre")(703,"code"),Ux(704,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),ng()(),wl(705,"p"),Ux(706,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),ng(),wl(707,"pre")(708,"code"),Ux(709,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),ng()()()(),wl(710,"tr",14)(711,"td",15)(712,"div",23)(713,"span",24),Ux(714," p-help"),Ul(715,"br"),ng()()(),wl(716,"td",19)(717,"code",25),Ux(718,"string"),ng()(),wl(719,"td",21),Ux(720,"-"),ng(),wl(721,"td",22)(722,"em")(723,"strong"),Ux(724,"(opcional)"),ng()(),wl(725,"p"),Ux(726,"Texto de apoio para o campo."),ng()()(),wl(727,"tr",14)(728,"td",15)(729,"div",23)(730,"span",24),Ux(731," p-hide-search"),Ul(732,"br"),ng()()(),wl(733,"td",19)(734,"code",26),Ux(735,"boolean"),ng()(),wl(736,"td",21)(737,"p")(738,"code"),Ux(739,"false"),ng()()(),wl(740,"td",22)(741,"em")(742,"strong"),Ux(743,"(opcional)"),ng()(),wl(744,"p"),Ux(745,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),ng()()(),wl(746,"tr",14)(747,"td",15)(748,"div",23)(749,"span",24),Ux(750," p-hide-select-all"),Ul(751,"br"),ng()()(),wl(752,"td",19)(753,"code",26),Ux(754,"boolean"),ng()(),wl(755,"td",21)(756,"p")(757,"code"),Ux(758,"false"),ng()()(),wl(759,"td",22)(760,"em")(761,"strong"),Ux(762,"(opcional)"),ng()(),wl(763,"p"),Ux(764,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),ng()()(),wl(765,"tr",14)(766,"td",15)(767,"div",16)(768,"span",17),Ux(769," (p-keydown)"),Ul(770,"br"),ng()()(),wl(771,"td",19)(772,"code",20),Ux(773,"EventEmitter"),ng()(),wl(774,"td",21),Ux(775,"-"),ng(),wl(776,"td",22)(777,"em")(778,"strong"),Ux(779,"(opcional)"),ng()(),wl(780,"p"),Ux(781,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(782,"code"),Ux(783,"KeyboardEvent"),ng(),Ux(784," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(785,"tr",14)(786,"td",15)(787,"div",23)(788,"span",24),Ux(789," p-label"),Ul(790,"br"),ng()()(),wl(791,"td",19)(792,"code",25),Ux(793,"string"),ng()(),wl(794,"td",21),Ux(795,"-"),ng(),wl(796,"td",22)(797,"em")(798,"strong"),Ux(799,"(opcional)"),ng()(),wl(800,"p"),Ux(801,"Label no componente."),ng()()(),wl(802,"tr",14)(803,"td",15)(804,"div",23)(805,"span",24),Ux(806," p-label-text-wrap"),Ul(807,"br"),ng()()(),wl(808,"td",19)(809,"code",26),Ux(810,"boolean"),ng()(),wl(811,"td",21)(812,"p")(813,"code"),Ux(814,"false"),ng()()(),wl(815,"td",22)(816,"em")(817,"strong"),Ux(818,"(opcional)"),ng()(),wl(819,"p"),Ux(820,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(821,"code"),Ux(822,"p-label"),ng(),Ux(823,". Quando "),wl(824,"code"),Ux(825,"p-label-text-wrap"),ng(),Ux(826,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(827,"tr",14)(828,"td",15)(829,"div",23)(830,"span",24),Ux(831," p-listbox-control-position"),Ul(832,"br"),ng()()(),wl(833,"td",19)(834,"code",31),Ux(835,"'top' "),ng(),wl(836,"code",32),Ux(837," 'bottom'"),ng()(),wl(838,"td",21)(839,"p")(840,"code"),Ux(841,"bottom"),ng()()(),wl(842,"td",22)(843,"em")(844,"strong"),Ux(845,"(opcional)"),ng()(),wl(846,"p"),Ux(847,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),wl(848,"code"),Ux(849,"listbox"),ng(),Ux(850," em rela\xE7\xE3o ao campo ("),wl(851,"code"),Ux(852,"top"),ng(),Ux(853," ou "),wl(854,"code"),Ux(855,"bottom"),ng(),Ux(856,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ng()()(),wl(857,"tr",14)(858,"td",15)(859,"div",23)(860,"span",24),Ux(861," p-literals"),Ul(862,"br"),ng()()(),wl(863,"td",19)(864,"code",33),Ux(865,"PoMultiselectLiterals"),ng()(),wl(866,"td",21),Ux(867,"-"),ng(),wl(868,"td",22)(869,"em")(870,"strong"),Ux(871,"(opcional)"),ng()(),wl(872,"p"),Ux(873,"Objeto com as literais usadas no "),wl(874,"code"),Ux(875,"po-multiselect"),ng(),Ux(876,"."),ng(),wl(877,"p"),Ux(878,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(879,"pre")(880,"code"),Ux(881,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),ng()(),wl(882,"p"),Ux(883,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(884,"pre")(885,"code"),Ux(886,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),ng()(),wl(887,"p"),Ux(888,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),ng(),wl(889,"pre")(890,"code"),Ux(891,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),ng()(),wl(892,"blockquote")(893,"p"),Ux(894,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(895,"a",34)(896,"code"),Ux(897,"PoI18nService"),ng()(),Ux(898," ou do browser."),ng()()()(),wl(899,"tr",14)(900,"td",15)(901,"div",23)(902,"span",24),Ux(903," p-loading"),Ul(904,"br"),ng()()(),wl(905,"td",19)(906,"code",26),Ux(907,"boolean"),ng()(),wl(908,"td",21)(909,"p")(910,"code"),Ux(911,"false"),ng()()(),wl(912,"td",22)(913,"em")(914,"strong"),Ux(915,"(opcional)"),ng()(),wl(916,"p"),Ux(917,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(918,"tr",14)(919,"td",15)(920,"div",23)(921,"span",24),Ux(922," name"),Ul(923,"br"),ng()()(),wl(924,"td",19)(925,"code",25),Ux(926,"string"),ng()(),wl(927,"td",21),Ux(928,"-"),ng(),wl(929,"td",22)(930,"p"),Ux(931,"Nome do componente."),ng()()(),wl(932,"tr",14)(933,"td",15)(934,"div",23)(935,"span",24),Ux(936," p-optional"),Ul(937,"br"),ng()()(),wl(938,"td",19)(939,"code",26),Ux(940,"boolean"),ng()(),wl(941,"td",21)(942,"p")(943,"code"),Ux(944,"false"),ng()()(),wl(945,"td",22)(946,"em")(947,"strong"),Ux(948,"(opcional)"),ng()(),wl(949,"p"),Ux(950,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(951,"blockquote")(952,"p"),Ux(953,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(954,"ul")(955,"li"),Ux(956,"O campo conter "),wl(957,"code"),Ux(958,"p-required"),ng(),Ux(959,";"),ng(),wl(960,"li"),Ux(961,"N\xE3o possuir "),wl(962,"code"),Ux(963,"p-help"),ng(),Ux(964," e/ou "),wl(965,"code"),Ux(966,"p-label"),ng(),Ux(967,"."),ng()()()(),wl(968,"tr",14)(969,"td",15)(970,"div",23)(971,"span",24),Ux(972," p-options"),Ul(973,"br"),ng()()(),wl(974,"td",19)(975,"code",35),Ux(976,"Array<PoMultiselectOption "),ng(),wl(977,"code",36),Ux(978," any>"),ng()(),wl(979,"td",21),Ux(980,"-"),ng(),wl(981,"td",22)(982,"p"),Ux(983,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),ng(),wl(984,"blockquote")(985,"p"),Ux(986,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),ng()(),wl(987,"pre")(988,"code"),Ux(989,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),ng()(),wl(990,"blockquote")(991,"p"),Ux(992,"A lista pode ser definida utilizando um array com o valor representando "),wl(993,"code"),Ux(994,"value"),ng(),Ux(995," e "),wl(996,"code"),Ux(997,"label"),ng(),Ux(998," das seguintes formas:"),ng()(),wl(999,"pre")(1e3,"code"),Ux(1001,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),ng()(),wl(1002,"pre")(1003,"code"),Ux(1004,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),ng()(),wl(1005,"ul")(1006,"li"),Ux(1007,"Aconselha-se utilizar valores distintos no "),wl(1008,"code"),Ux(1009,"label"),ng(),Ux(1010," e "),wl(1011,"code"),Ux(1012,"value"),ng(),Ux(1013," dos itens."),ng()()()(),wl(1014,"tr",14)(1015,"td",15)(1016,"div",23)(1017,"span",24),Ux(1018," p-placeholder"),Ul(1019,"br"),ng()()(),wl(1020,"td",19)(1021,"code",25),Ux(1022,"string"),ng()(),wl(1023,"td",21),Ux(1024,"-"),ng(),wl(1025,"td",22)(1026,"em")(1027,"strong"),Ux(1028,"(opcional)"),ng()(),wl(1029,"p"),Ux(1030,"Mensagem apresentada enquanto o campo estiver vazio."),ng()()(),wl(1031,"tr",14)(1032,"td",15)(1033,"div",23)(1034,"span",24),Ux(1035," p-placeholder-search"),Ul(1036,"br"),ng()()(),wl(1037,"td",19)(1038,"code",25),Ux(1039,"string"),ng()(),wl(1040,"td",21)(1041,"p")(1042,"code"),Ux(1043,"Buscar"),ng()()(),wl(1044,"td",22)(1045,"em")(1046,"strong"),Ux(1047,"(opcional)"),ng()(),wl(1048,"p"),Ux(1049,"Placeholder do campo de pesquisa."),ng(),wl(1050,"blockquote")(1051,"p"),Ux(1052,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),ng()()()(),wl(1053,"tr",14)(1054,"td",15)(1055,"div",23)(1056,"span",24),Ux(1057," p-helper"),Ul(1058,"br"),ng()()(),wl(1059,"td",19)(1060,"code",37),Ux(1061,"PoHelperOptions "),ng(),wl(1062,"code",25),Ux(1063," string"),ng()(),wl(1064,"td",21),Ux(1065,"-"),ng(),wl(1066,"td",22)(1067,"em")(1068,"strong"),Ux(1069,"(opcional)"),ng()(),wl(1070,"p"),Ux(1071,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1072,"code"),Ux(1073,"p-label"),ng(),Ux(1074," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1075,"code"),Ux(1076,"p-label"),ng(),Ux(1077,"."),ng(),wl(1078,"blockquote")(1079,"p"),Ux(1080,"Para mais informa\xE7\xF5es acesse: "),wl(1081,"a",38),Ux(1082,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1083,"."),ng()(),wl(1084,"blockquote")(1085,"p"),Ux(1086,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1087,"code"),Ux(1088,"p-additional-help-tooltip"),ng(),Ux(1089," e "),wl(1090,"code"),Ux(1091,"p-additional-help"),ng(),Ux(1092,") ser\xE1 ignorado."),ng()()()(),wl(1093,"tr",14)(1094,"td",15)(1095,"div",23)(1096,"span",24),Ux(1097," p-required"),Ul(1098,"br"),ng()()(),wl(1099,"td",19)(1100,"code",26),Ux(1101,"boolean"),ng()(),wl(1102,"td",21)(1103,"p")(1104,"code"),Ux(1105,"false"),ng()()(),wl(1106,"td",22)(1107,"em")(1108,"strong"),Ux(1109,"(opcional)"),ng()(),wl(1110,"p"),Ux(1111,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1112,"blockquote")(1113,"p"),Ux(1114,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1115,"code"),Ux(1116,"(p-disabled)"),ng(),Ux(1117,"."),ng()()()(),wl(1118,"tr",14)(1119,"td",15)(1120,"div",23)(1121,"span",24),Ux(1122," p-show-required"),Ul(1123,"br"),ng()()(),wl(1124,"td",19)(1125,"code",26),Ux(1126,"boolean"),ng()(),wl(1127,"td",21),Ux(1128,"-"),ng(),wl(1129,"td",22)(1130,"p"),Ux(1131,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1132,"blockquote")(1133,"p"),Ux(1134,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1135,"ul")(1136,"li"),Ux(1137,"N\xE3o possuir "),wl(1138,"code"),Ux(1139,"p-help"),ng(),Ux(1140," e/ou "),wl(1141,"code"),Ux(1142,"p-label"),ng(),Ux(1143,"."),ng()()()(),wl(1144,"tr",14)(1145,"td",15)(1146,"div",23)(1147,"span",24),Ux(1148," p-size"),Ul(1149,"br"),ng()()(),wl(1150,"td",19)(1151,"code",25),Ux(1152,"string"),ng()(),wl(1153,"td",21)(1154,"p")(1155,"code"),Ux(1156,"medium"),ng()()(),wl(1157,"td",22)(1158,"em")(1159,"strong"),Ux(1160,"(opcional)"),ng()(),wl(1161,"p"),Ux(1162,"Define o tamanho do componente:"),ng(),wl(1163,"ul")(1164,"li")(1165,"code"),Ux(1166,"small"),ng(),Ux(1167,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1168,"li")(1169,"code"),Ux(1170,"medium"),ng(),Ux(1171,": altura do input como 44px."),ng()(),wl(1172,"blockquote")(1173,"p"),Ux(1174,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1175,"code"),Ux(1176,"medium"),ng(),Ux(1177,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1178,"a",39),Ux(1179,"po-theme"),ng(),Ux(1180,"."),ng()()()(),wl(1181,"tr",14)(1182,"td",15)(1183,"div",23)(1184,"span",24),Ux(1185," p-sort"),Ul(1186,"br"),ng()()(),wl(1187,"td",19)(1188,"code",26),Ux(1189,"boolean"),ng()(),wl(1190,"td",21)(1191,"p")(1192,"code"),Ux(1193,"false"),ng()()(),wl(1194,"td",22)(1195,"em")(1196,"strong"),Ux(1197,"(opcional)"),ng()(),wl(1198,"p"),Ux(1199,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),ng()()()(),wl(1200,"h3",10),Ux(1201,"M\xE9todos"),ng(),wl(1202,"table",40)(1203,"tr",14)(1204,"th",41)(1205,"div",23)(1206,"h4")(1207,"span",24),Ux(1208," focus "),ng()()()()(),wl(1209,"tr",22)(1210,"td",22)(1211,"p"),Ux(1212,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1213,"p"),Ux(1214,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1215,"pre")(1216,"code"),Ux(1217,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),ng()()()()(),Ul(1218,"br"),wl(1219,"table",40)(1220,"tr",14)(1221,"th",41)(1222,"div",23)(1223,"h4")(1224,"span",24),Ux(1225," showAdditionalHelp "),ng()()()()(),wl(1226,"tr",22)(1227,"td",22)(1228,"p"),Ux(1229,"M\xE9todo que exibe "),wl(1230,"code"),Ux(1231,"p-helper"),ng(),Ux(1232," ou executa a a\xE7\xE3o definida em "),wl(1233,"code"),Ux(1234,"p-helper{eventOnClick}"),ng(),Ux(1235," ou em "),wl(1236,"code"),Ux(1237,"p-additionalHelp"),ng(),Ux(1238,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1239,"code"),Ux(1240,"p-keydown"),ng(),Ux(1241,"."),ng(),wl(1242,"blockquote")(1243,"p"),Ux(1244,"Exibe ou oculta o conte\xFAdo do componente "),wl(1245,"code"),Ux(1246,"po-helper"),ng(),Ux(1247," quando o componente estiver com foco."),ng()(),wl(1248,"pre")(1249,"code"),Ux(1250,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),ng()(),wl(1251,"pre")(1252,"code"),Ux(1253,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1254,"br"),wl(1255,"h3"),Ux(1256,"Interfaces"),ng(),wl(1257,"h4",42)(1258,"code",5),Ux(1259,"PoMultiselectFilter"),ng()(),wl(1260,"div",2)(1261,"p"),Ux(1262,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),ng()(),wl(1263,"h4",10),Ux(1264,"M\xE9todos"),ng(),wl(1265,"table",40)(1266,"tr",14)(1267,"th",41)(1268,"div",23)(1269,"h4")(1270,"span",24),Ux(1271," getFilteredData "),ng()()()()(),wl(1272,"tr",22)(1273,"td",22)(1274,"p"),Ux(1275,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),wl(1276,"code"),Ux(1277,"PoMultiselectOption"),ng(),Ux(1278,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),ng()()()(),wl(1279,"h5")(1280,"b"),Ux(1281,"Par\xE2metros"),ng()(),wl(1282,"table",11)(1283,"tr",12)(1284,"th",13),Ux(1285,"Nome"),ng(),wl(1286,"th",13),Ux(1287,"Tipo"),ng(),wl(1288,"th",13),Ux(1289,"Descri\xE7\xE3o"),ng()(),wl(1290,"tr",14)(1291,"td",15),Ux(1292," params"),ng(),wl(1293,"td",19)(1294,"code",43),Ux(1295," { property: string, value: string } "),ng()(),wl(1296,"td",22)(1297,"p"),Ux(1298,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),ng()()()(),Ul(1299,"br"),wl(1300,"table",40)(1301,"tr",14)(1302,"th",41)(1303,"div",23)(1304,"h4")(1305,"span",24),Ux(1306," getObjectsByValues "),ng()()()()(),wl(1307,"tr",22)(1308,"td",22)(1309,"p"),Ux(1310,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),wl(1311,"code"),Ux(1312,"PoMultiselectOption"),ng(),Ux(1313,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),ng()()()(),wl(1314,"h5")(1315,"b"),Ux(1316,"Par\xE2metros"),ng()(),wl(1317,"table",11)(1318,"tr",12)(1319,"th",13),Ux(1320,"Nome"),ng(),wl(1321,"th",13),Ux(1322,"Tipo"),ng(),wl(1323,"th",13),Ux(1324,"Descri\xE7\xE3o"),ng()(),wl(1325,"tr",14)(1326,"td",15),Ux(1327," values"),ng(),wl(1328,"td",19)(1329,"code",44),Ux(1330," Array<string "),ng(),wl(1331,"code",45),Ux(1332," number> "),ng()(),wl(1333,"td",22)(1334,"p"),Ux(1335,"Array com os valores a serem buscados."),ng()()()(),Ul(1336,"br"),wl(1337,"h4",42)(1338,"code",5),Ux(1339,"PoMultiselectLiterals"),ng()(),wl(1340,"div",2)(1341,"p"),Ux(1342,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1343,"code"),Ux(1344,"po-multiselect"),ng(),Ux(1345,"."),ng()(),wl(1346,"h4",10),Ux(1347,"Propriedades"),ng(),wl(1348,"table",11)(1349,"tr",12)(1350,"th",13),Ux(1351,"Nome"),ng(),wl(1352,"th",13),Ux(1353,"Tipo"),ng(),wl(1354,"th",13),Ux(1355,"Descri\xE7\xE3o"),ng()(),wl(1356,"tr",14)(1357,"td",15)(1358,"div",23)(1359,"span",24),Ux(1360," noData"),Ul(1361,"br"),ng()()(),wl(1362,"td",19)(1363,"code",25),Ux(1364,"string"),ng()(),wl(1365,"td",22)(1366,"em")(1367,"strong"),Ux(1368,"(opcional)"),ng()(),wl(1369,"p"),Ux(1370,"Texto exibido quando n\xE3o houver dados encontrados na busca."),ng()()(),wl(1371,"tr",14)(1372,"td",15)(1373,"div",23)(1374,"span",24),Ux(1375," placeholderSearch"),Ul(1376,"br"),ng()()(),wl(1377,"td",19)(1378,"code",25),Ux(1379,"string"),ng()(),wl(1380,"td",22)(1381,"em")(1382,"strong"),Ux(1383,"(opcional)"),ng()(),wl(1384,"p"),Ux(1385,"Texto do "),wl(1386,"em"),Ux(1387,"placeholder"),ng(),Ux(1388," do campo de busca."),ng()()(),wl(1389,"tr",14)(1390,"td",15)(1391,"div",23)(1392,"span",24),Ux(1393," selectAll"),Ul(1394,"br"),ng()()(),wl(1395,"td",19)(1396,"code",25),Ux(1397,"string"),ng()(),wl(1398,"td",22)(1399,"em")(1400,"strong"),Ux(1401,"(opcional)"),ng()(),wl(1402,"p"),Ux(1403,"Texto exibido no bot\xE3o de selecionar todos."),ng()()(),wl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),Ux(1408," selectItem"),Ul(1409,"br"),ng()()(),wl(1410,"td",19)(1411,"code",25),Ux(1412,"string"),ng()(),wl(1413,"td",22)(1414,"em")(1415,"strong"),Ux(1416,"(opcional)"),ng()(),wl(1417,"p"),Ux(1418,"Texto exibido na propriedade placeholder."),ng()()()(),wl(1419,"h4",42)(1420,"code",5),Ux(1421,"PoMultiselectOption"),ng()(),wl(1422,"div",2)(1423,"p"),Ux(1424,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),ng()(),wl(1425,"h4",10),Ux(1426,"Propriedades"),ng(),wl(1427,"table",11)(1428,"tr",12)(1429,"th",13),Ux(1430,"Nome"),ng(),wl(1431,"th",13),Ux(1432,"Tipo"),ng(),wl(1433,"th",13),Ux(1434,"Descri\xE7\xE3o"),ng()(),wl(1435,"tr",14)(1436,"td",15)(1437,"div",23)(1438,"span",24),Ux(1439," label"),Ul(1440,"br"),ng()()(),wl(1441,"td",19)(1442,"code",25),Ux(1443,"string"),ng()(),wl(1444,"td",22)(1445,"p"),Ux(1446,"Label exibido nos itens da lista."),ng()()(),wl(1447,"tr",14)(1448,"td",15)(1449,"div",23)(1450,"span",24),Ux(1451," value"),Ul(1452,"br"),ng()()(),wl(1453,"td",19)(1454,"code",25),Ux(1455,"string "),ng(),wl(1456,"code",27),Ux(1457," number"),ng()(),wl(1458,"td",22)(1459,"p"),Ux(1460,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),ng()()()(),wl(1461,"h3"),Ux(1462,"Enums"),ng(),wl(1463,"h4",4)(1464,"code",5),Ux(1465,"PoMultiselectFilterMode"),ng()(),wl(1466,"div",2)(1467,"p"),Ux(1468,"Define o tipo de busca usado no po-multiselect."),ng()(),wl(1469,"h4",10),Ux(1470,"Propriedades"),ng(),wl(1471,"table",11)(1472,"tr",12)(1473,"th",13),Ux(1474,"Nome"),ng(),wl(1475,"th",13),Ux(1476,"Descri\xE7\xE3o"),ng()(),wl(1477,"tr",14)(1478,"td",15)(1479,"div",23)(1480,"span",24),Ux(1481," startsWith"),Ul(1482,"br"),ng()()(),wl(1483,"td",22)(1484,"p"),Ux(1485,"Verifica se o texto "),wl(1486,"em"),Ux(1487,"inicia"),ng(),Ux(1488," com o valor pesquisado."),ng()()(),wl(1489,"tr",14)(1490,"td",15)(1491,"div",23)(1492,"span",24),Ux(1493," contains"),Ul(1494,"br"),ng()()(),wl(1495,"td",22)(1496,"p"),Ux(1497,"Verifica se o texto "),wl(1498,"em"),Ux(1499,"cont\xE9m"),ng(),Ux(1500," o valor pesquisado."),ng()()(),wl(1501,"tr",14)(1502,"td",15)(1503,"div",23)(1504,"span",24),Ux(1505," endsWith"),Ul(1506,"br"),ng()()(),wl(1507,"td",22)(1508,"p"),Ux(1509,"Verifica se o texto "),wl(1510,"em"),Ux(1511,"finaliza"),ng(),Ux(1512," com o valor pesquisado."),ng()()()()());},dependencies:[fP],encapsulation:2})}return l})();var Ke=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut$1("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-multiselect-doc"),ng(),wl(4,"po-tab",3),ut$1("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),ng()()()),a&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,Le,Be,We,Ie,je,Je,Ge,Qe],encapsulation:2})}return l})();var _t=[{path:"",component:Ke}],Ye=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[vL.forChild(_t),vL]})}return l})();var ki=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[u5,Ye]})}return l})();export{ki as DocPoMultiselectModule};