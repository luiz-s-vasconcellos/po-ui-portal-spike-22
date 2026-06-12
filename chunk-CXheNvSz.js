import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,r as r$1,d as f,cR as fY,cS as am,t as tb,q,S,bJ as Ww,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt$1,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,bH as Wde,b5 as Ko,cL as NO,a4 as dN,cZ as gN,cV as bk,cW as wk,d7 as Ahe,aJ as nme,bM as Pa,a2 as WE,aI as gc,b6 as U3,W as we,a3 as SNe,aq as ix,I as dw,at as ox,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Te=(()=>{class l{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic"]],standalone:false,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,i){a&1&&Hl(0,"po-multiselect",0),a&2&&ZE("p-options",i.options);},dependencies:[Ww],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l}),Ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect Basic"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-multiselect-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ue,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Te],encapsulation:2})}return l})();var Ae=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,r$1({},this.option)],this.option={label:void 0,value:void 0};}changeEvent(s){this.event=s;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(s){this.customLiterals=void 0;}}restore(){this.helperText="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs"]],standalone:false,decls:33,vars:51,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap","p-compact-label"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let c=gx();Cl(0,"div",2)(1,"po-multiselect",3),gw("ngModelChange",function(r){return Jy(c),Zx(i.multiselect,r)||(i.multiselect=r),e_(r)}),dt$1("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),og(),Hl(2,"po-divider"),Cl(3,"div",2),Hl(4,"po-info",4)(5,"po-info",5),og(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"div",2)(10,"po-input",6),gw("ngModelChange",function(r){return Jy(c),Zx(i.option.label,r)||(i.option.label=r),e_(r)}),og(),Z0(),Cl(11,"po-input",7),gw("ngModelChange",function(r){return Jy(c),Zx(i.option.value,r)||(i.option.value=r),e_(r)}),og(),Z0(),og(),Cl(12,"div",2)(13,"po-button",8),dt$1("p-click",function(){return i.addOption()}),og()()(),Hl(14,"po-divider"),Cl(15,"form",null,1)(17,"po-input",9),gw("ngModelChange",function(r){return Jy(c),Zx(i.label,r)||(i.label=r),e_(r)}),og(),Z0(),Cl(18,"po-input",10),gw("ngModelChange",function(r){return Jy(c),Zx(i.help,r)||(i.help=r),e_(r)}),og(),Z0(),Cl(19,"po-input",11),gw("ngModelChange",function(r){return Jy(c),Zx(i.helperText,r)||(i.helperText=r),e_(r)}),og(),Z0(),Cl(20,"po-input",12),gw("ngModelChange",function(r){return Jy(c),Zx(i.placeholder,r)||(i.placeholder=r),e_(r)}),og(),Z0(),Cl(21,"po-input",13),gw("ngModelChange",function(r){return Jy(c),Zx(i.placeholderSearch,r)||(i.placeholderSearch=r),e_(r)}),og(),Z0(),Cl(22,"po-input",14),gw("ngModelChange",function(r){return Jy(c),Zx(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),e_(r)}),og(),Z0(),Cl(23,"po-input",15),gw("ngModelChange",function(r){return Jy(c),Zx(i.literals,r)||(i.literals=r),e_(r)}),dt$1("p-change",function(){return i.changeLiterals()}),og(),Z0(),Cl(24,"po-input",16),gw("ngModelChange",function(r){return Jy(c),Zx(i.filterService,r)||(i.filterService=r),e_(r)}),og(),Z0(),Cl(25,"po-input",17),gw("ngModelChange",function(r){return Jy(c),Zx(i.fieldValue,r)||(i.fieldValue=r),e_(r)}),og(),Z0(),Cl(26,"po-input",18),gw("ngModelChange",function(r){return Jy(c),Zx(i.fieldLabel,r)||(i.fieldLabel=r),e_(r)}),og(),Z0(),Cl(27,"po-checkbox-group",19),gw("ngModelChange",function(r){return Jy(c),Zx(i.properties,r)||(i.properties=r),e_(r)}),og(),Z0(),Cl(28,"po-radio-group",20),gw("ngModelChange",function(r){return Jy(c),Zx(i.filterMode,r)||(i.filterMode=r),e_(r)}),og(),Z0(),Cl(29,"po-radio-group",21),gw("ngModelChange",function(r){return Jy(c),Zx(i.size,r)||(i.size=r),e_(r)}),og(),Z0(),Cl(30,"po-radio-group",22),gw("ngModelChange",function(r){return Jy(c),Zx(i.listboxPosition,r)||(i.listboxPosition=r),e_(r)}),og(),Z0(),Cl(31,"div",2)(32,"po-button",23),dt$1("p-click",function(){return i.restore()}),og()()();}if(a&2){let c=Sx(8);Lp(),pw("ngModel",i.multiselect),ZE("p-helper",i.helperText)("p-auto-height",i.properties.includes("autoHeight"))("p-disabled",i.properties.includes("disabled"))("p-field-label",i.fieldLabel)("p-field-value",i.fieldValue)("p-filter-service",i.filterService)("p-filter-mode",i.filterMode)("p-help",i.help)("p-hide-search",i.properties.includes("hideSearch"))("p-hide-select-all",i.properties.includes("hideSelectAll"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-optional",i.properties.includes("optional"))("p-options",i.options)("p-placeholder",i.placeholder)("p-placeholder-search",i.placeholderSearch)("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-sort",i.properties.includes("sort"))("p-listbox-control-position",i.listboxPosition)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.multiselect),Lp(),ZE("p-value",i.event),Lp(5),pw("ngModel",i.option.label),X0(),Lp(),pw("ngModel",i.option.value),X0(),Lp(2),ZE("p-disabled",c.form.invalid),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.placeholderSearch),X0(),Lp(),pw("ngModel",i.fieldErrorMessage),X0(),Lp(),pw("ngModel",i.literals),X0(),Lp(),pw("ngModel",i.filterService),X0(),Lp(),pw("ngModel",i.fieldValue),X0(),Lp(),pw("ngModel",i.fieldLabel),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.filterMode),ZE("p-disabled",i.properties.includes("hideSearch"))("p-options",i.filterModeOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0(),Lp(),pw("ngModel",i.listboxPosition),ZE("p-options",i.listboxPositionOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Ww,Nde,sme],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l}),De=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect Labs"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-multiselect-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ae],encapsulation:2})}return l})();var Oe=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean();}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[];}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation"]],standalone:false,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=gx();Cl(0,"form",null,0)(2,"h3"),qx(3,"Collective vacations"),og(),Hl(4,"po-divider"),Cl(5,"div",2)(6,"po-datepicker",3),gw("ngModelChange",function(r){return Jy(c),Zx(i.initialPeriod,r)||(i.initialPeriod=r),e_(r)}),og(),Z0(),Cl(7,"po-datepicker",4),gw("ngModelChange",function(r){return Jy(c),Zx(i.finalPeriod,r)||(i.finalPeriod=r),e_(r)}),og(),Z0(),og(),Cl(8,"div",2)(9,"po-radio-group",5),gw("ngModelChange",function(r){return Jy(c),Zx(i.days,r)||(i.days=r),e_(r)}),og(),Z0(),og(),Cl(10,"div",2)(11,"po-multiselect",6),gw("ngModelChange",function(r){return Jy(c),Zx(i.employeesVacations,r)||(i.employeesVacations=r),e_(r)}),og(),Z0(),og(),Cl(12,"div",2)(13,"po-button",7),dt$1("p-click",function(){Jy(c);let r=Sx(16);return i.updateNameEmployeesVacations(),e_(r.open())}),og(),Cl(14,"po-button",8),dt$1("p-click",function(){return i.clean()}),og()()(),Cl(15,"po-modal",9,1)(17,"div",2),Hl(18,"po-info",10),dN(19,"date"),Hl(20,"po-info",11),dN(21,"date"),Hl(22,"po-info",12),og(),Hl(23,"po-divider"),Cl(24,"div",2),Hl(25,"po-info",13),og()();}if(a&2){let c=Sx(1);Lp(6),pw("ngModel",i.initialPeriod),X0(),Lp(),pw("ngModel",i.finalPeriod),ZE("p-min-date",i.initialPeriod),X0(),Lp(2),pw("ngModel",i.days),ZE("p-options",i.daysOptions),X0(),Lp(2),pw("ngModel",i.employeesVacations),ZE("p-options",i.employees),X0(),Lp(2),ZE("p-disabled",c.form.invalid),Lp(5),ZE("p-value",gN(19,12,i.initialPeriod,"longDate","+0000")),Lp(2),ZE("p-value",gN(21,16,i.finalPeriod,"longDate","+0000")),Lp(2),ZE("p-value",i.days),Lp(3),ZE("p-value",i.nameEmployeesVacations);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,Wde,Ww,Nde,sme,Ko,NO],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l}),Le=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect - Vacation"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #f="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-multiselect-vacation"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Oe],encapsulation:2})}return l})();var ke=(()=>{class l{formBuilder=f(fY);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,am.required],finalPeriod:[null,am.required],days:[null,am.required],employeesVacations:[null,am.required]}),this.clean();}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0});}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:false,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=gx();Cl(0,"form",1)(1,"h3"),qx(2,"Collective vacations"),og(),Hl(3,"po-divider"),Cl(4,"div",2),Hl(5,"po-datepicker",3),Z0(),Hl(6,"po-datepicker",4),Z0(),og(),Cl(7,"div",2),Hl(8,"po-multiselect",5),Z0(),Hl(9,"po-radio-group",6),Z0(),og(),Cl(10,"div",2)(11,"po-button",7),dt$1("p-click",function(){Jy(c);let r=Sx(14);return i.updateEmployeesVacations(),e_(r.open())}),og(),Cl(12,"po-button",8),dt$1("p-click",function(){return i.clean()}),og()()(),Cl(13,"po-modal",9,0)(15,"div",2),Hl(16,"po-info",10),dN(17,"date"),Hl(18,"po-info",11),dN(19,"date"),Hl(20,"po-info",12),og(),Hl(21,"po-divider"),Cl(22,"div",2),Hl(23,"po-info",13),og()();}a&2&&(ZE("formGroup",i.formCollectiveVacations),Lp(5),X0(),Lp(),ZE("p-min-date",i.getRangeFinalPeriod()),X0(),Lp(2),ZE("p-auto-height",true)("p-options",i.employees)("p-required",true),X0(),Lp(),ZE("p-options",i.daysOptions)("p-columns",3),X0(),Lp(2),ZE("p-disabled",i.formCollectiveVacations.invalid),Lp(5),ZE("p-value",gN(17,12,i.initialPeriod,"longDate","+0000")),Lp(2),ZE("p-value",gN(19,16,i.finalPeriod,"longDate","+0000")),Lp(2),ZE("p-value",i.days),Lp(3),ZE("p-value",i.nameEmployeesVacations));},dependencies:[lY,sY,aY,bk,wk,Qt,_v,Wde,Ww,Nde,sme,Ko,NO],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l}),qe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect - Vacation Reactive Form"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<form [formGroup]="formCollectiveVacations">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-multiselect-vacation-reactive-form"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,tt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ke],encapsulation:2})}return l})();function it(l,K){l&1&&Hl(0,"po-tag",11),l&2&&ZE("p-icon",true);}function ot(l,K){l&1&&Hl(0,"po-tag",12),l&2&&ZE("p-icon",true);}function lt(l,K){l&1&&Hl(0,"po-tag",13),l&2&&ZE("p-icon",true);}function at(l,K){if(l&1&&(Cl(0,"div",0)(1,"div",7)(2,"div",8),qx(3),og()(),Cl(4,"div",9)(5,"div",10),ix(6,it,1,1,"po-tag",11),ix(7,ot,1,1,"po-tag",12),ix(8,lt,1,1,"po-tag",13),og()()()),l&2){let s=K.$implicit;Lp(3),dw(s.label),Lp(3),ox(s.admin?6:-1),Lp(),ox(s.access?7:-1),Lp(),ox(!s.admin&&!s.access?8:-1);}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:true,access:true},access:{admin:false,access:true},noAccess:{admin:false,access:false}};options=[{value:"Anna M.",label:"Anna M.",admin:false,access:true},{value:"Jhon T.",label:"Jhon T.",admin:true,access:true},{value:"Marie J.",label:"Marie J.",admin:false,access:false}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r$1({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template"]],standalone:false,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"po-select",1),gw("ngModelChange",function(d){return Zx(i.employee,d)||(i.employee=d),d}),og(),Z0(),Cl(2,"po-select",2),gw("ngModelChange",function(d){return Zx(i.typeAccess,d)||(i.typeAccess=d),d}),og(),Z0(),Cl(3,"div",3)(4,"po-button",4),dt$1("p-click",function(){return i.changeAccess()}),og()(),Cl(5,"po-multiselect",5),WE(6,at,9,4,"ng-template",6),og()()),a&2&&(Lp(),ZE("p-options",i.employees),pw("ngModel",i.employee),X0(),Lp(),ZE("p-options",i.typeAccessValue),pw("ngModel",i.typeAccess),X0(),Lp(2),ZE("p-disabled",!i.employee||!i.typeAccess),Lp(),ZE("p-options",i.options)("p-hide-select-all",true));},dependencies:[sY,gk,Qt,Ww,Ahe,nme,Pa],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"],changeDetection:1})}return l})();var rt=l=>({"docs-sample-code-tabs":l}),Be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect - Template"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-multiselect-template/sample-po-multiselect-template.component.css"),og(),Cl(25,"pre",11),qx(26,`.containerFlex {
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
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-multiselect-template"),og(),Hl(29,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,rt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Fe],encapsulation:2})}return l})();var se=(()=>{class l{http=f(tb);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(q(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(q(a=>a.items))}static \u0275fac=function(a){return new(a||l)};static \u0275prov=S({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ne=(()=>{class l{samplePoMultiselectHeroesService=f(se);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s);}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s;}changeOptions(s){this.heroes=[...s];}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes"]],standalone:false,features:[we([se])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"po-multiselect",1),gw("ngModelChange",function(d){return Zx(i.multiselect,d)||(i.multiselect=d),d}),dt$1("p-change",function(d){return i.changeOptions(d)}),og(),Z0(),Cl(2,"po-container",2),Hl(3,"po-table",3),og()()),a&2&&(Lp(),pw("ngModel",i.multiselect),ZE("p-filter-service",i.filterService)("p-debounce-time",i.debounce),X0(),Lp(2),ZE("p-columns",i.columns)("p-items",i.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[sY,gk,gc,Ww,U3],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l}),We=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect - Heroes - using API"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-multiselect-heroes"),og(),Hl(27,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,dt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ne],encapsulation:2})}return l})();var ze=(()=>{class l{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array"]],standalone:false,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"div",1)(2,"po-select",2),gw("ngModelChange",function(d){return Zx(i.fieldLabel,d)||(i.fieldLabel=d),d}),dt$1("p-change",function(d){return i.onChange(d)}),og(),Z0(),Cl(3,"po-select",3),gw("ngModelChange",function(d){return Zx(i.fieldValue,d)||(i.fieldValue=d),d}),dt$1("p-change",function(d){return i.onChange(d)}),og(),Z0(),og(),Cl(4,"div",1)(5,"div",0)(6,"po-multiselect",4),gw("ngModelChange",function(d){return Zx(i.company,d)||(i.company=d),d}),og(),Z0(),og(),Cl(7,"div",0),Hl(8,"po-info",5),og()()()),a&2&&(Lp(2),ZE("p-options",i.optionsSelect),pw("ngModel",i.fieldLabel),X0(),Lp(),ZE("p-options",i.optionsSelect),pw("ngModel",i.fieldValue),X0(),Lp(3),ZE("p-options",i.options)("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel),pw("ngModel",i.company),X0(),Lp(2),ZE("p-value",i.company));},dependencies:[sY,gk,Ww,nme,sme],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l}),Ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Multiselect - Array Any"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-multiselect-any-array"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,bt,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ze],encapsulation:2})}return l})();var He=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-doc"]],standalone:false,decls:1513,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoMultiselectComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),og(),Cl(24,"p"),qx(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),og(),Cl(26,"p"),qx(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),og(),Cl(28,"p"),qx(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Cl(30,"code"),qx(31,"p-filter-service"),og(),qx(32,"."),og(),Cl(33,"h4"),qx(34,"Boas pr\xE1ticas"),og(),Cl(35,"ul")(36,"li"),qx(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),og(),Cl(38,"li"),qx(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),og()(),Cl(40,"h4"),qx(41,"Acessibilidade tratada no componente"),og(),Cl(42,"p"),qx(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(44,"ul")(45,"li"),qx(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),og(),Cl(47,"li"),qx(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),og(),Cl(49,"li"),qx(50,"Utilize a tecla Esc do teclado para fechar o listbox."),og(),Cl(51,"li"),qx(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),og(),Cl(53,"li"),qx(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),og()(),Cl(55,"h4"),qx(56,"Tokens customiz\xE1veis"),og(),Cl(57,"p"),qx(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(59,"blockquote")(60,"p"),qx(61,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(62,"a",6),qx(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(64,"."),og()(),Cl(65,"table")(66,"thead")(67,"tr")(68,"th"),qx(69,"Propriedade"),og(),Cl(70,"th"),qx(71,"Descri\xE7\xE3o"),og(),Cl(72,"th"),qx(73,"Valor Padr\xE3o"),og()()(),Cl(74,"tbody")(75,"tr")(76,"td")(77,"strong"),qx(78,"Default Values"),og()(),Hl(79,"td")(80,"td"),og(),Cl(81,"tr")(82,"td")(83,"code"),qx(84,"--font-family"),og()(),Cl(85,"td"),qx(86,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(87,"td")(88,"code"),qx(89,"var(--font-family-theme)"),og()()(),Cl(90,"tr")(91,"td")(92,"code"),qx(93,"--font-size"),og()(),Cl(94,"td"),qx(95,"Tamanho da fonte"),og(),Cl(96,"td")(97,"code"),qx(98,"var(--font-size-default)"),og()()(),Cl(99,"tr")(100,"td")(101,"code"),qx(102,"--text-color-placeholder"),og(),qx(103," \xA0"),og(),Cl(104,"td"),qx(105,"Cor do texto do placeholder"),og(),Cl(106,"td")(107,"code"),qx(108,"var(--color-action-disabled)"),og()()(),Cl(109,"tr")(110,"td")(111,"code"),qx(112,"--color"),og()(),Cl(113,"td"),qx(114,"Cor principal do multiselect"),og(),Cl(115,"td")(116,"code"),qx(117,"var(--color-neutral-dark-70)"),og()()(),Cl(118,"tr")(119,"td")(120,"code"),qx(121,"--background"),og()(),Cl(122,"td"),qx(123,"Cor de background"),og(),Cl(124,"td")(125,"code"),qx(126,"var(--color-neutral-light-05)"),og()()(),Cl(127,"tr")(128,"td")(129,"code"),qx(130,"--field-container-title-justify"),og()(),Cl(131,"td"),qx(132,"Alinhamento horizontal do t\xEDtulo ("),Cl(133,"code"),qx(134,"justify-content"),og(),qx(135,")"),og(),Cl(136,"td")(137,"code"),qx(138,"space-between"),og()()(),Cl(139,"tr")(140,"td")(141,"code"),qx(142,"--field-container-title-flex"),og()(),Cl(143,"td"),qx(144,"Flex do t\xEDtulo ("),Cl(145,"code"),qx(146,"flex"),og(),qx(147,")"),og(),Cl(148,"td")(149,"code"),qx(150,"1 auto"),og()()(),Cl(151,"tr")(152,"td")(153,"strong"),qx(154,"Hover"),og()(),Hl(155,"td")(156,"td"),og(),Cl(157,"tr")(158,"td")(159,"code"),qx(160,"--color-hover"),og()(),Cl(161,"td"),qx(162,"Cor principal no estado hover"),og(),Cl(163,"td")(164,"code"),qx(165,"var(--color-action-hover)"),og()()(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--background-hover"),og()(),Cl(170,"td"),qx(171,"Cor de background no estado hover"),og(),Cl(172,"td")(173,"code"),qx(174,"var(--color-brand-01-lighter)"),og()()(),Cl(175,"tr")(176,"td")(177,"strong"),qx(178,"Focused"),og()(),Hl(179,"td")(180,"td"),og(),Cl(181,"tr")(182,"td")(183,"code"),qx(184,"--color-focused"),og()(),Cl(185,"td"),qx(186,"Cor principal no estado de focus"),og(),Cl(187,"td")(188,"code"),qx(189,"var(--color-action-default)"),og()()(),Cl(190,"tr")(191,"td")(192,"code"),qx(193,"--outline-color-focused"),og(),qx(194," \xA0"),og(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Disabled"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-disabled"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado disabled"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-action-disabled)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-disabled"),og(),qx(219," \xA0"),og(),Cl(220,"td"),qx(221,"Cor de background no estado disabled \xA0"),og(),Cl(222,"td")(223,"code"),qx(224,"var(--color-neutral-light-20)"),og()()(),Cl(225,"tr")(226,"td")(227,"strong"),qx(228,"Error"),og()(),Hl(229,"td")(230,"td"),og(),Cl(231,"tr")(232,"td")(233,"code"),qx(234,"--color-error"),og()(),Cl(235,"td"),qx(236,"Cor principal no estado error"),og(),Cl(237,"td")(238,"code"),qx(239,"var(--color-feedback-negative-base)"),og()()()()()(),Cl(240,"div",7)(241,"h4",8),qx(242,"Seletor"),og(),Cl(243,"pre",9),qx(244,`<po-multiselect
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
`),og()(),Cl(245,"h4",10),qx(246,"Propriedades"),og(),Cl(247,"table",11)(248,"tr",12)(249,"th",13),qx(250,"Nome"),og(),Cl(251,"th",13),qx(252,"Tipo"),og(),Cl(253,"th",13),qx(254,"Padr\xE3o"),og(),Cl(255,"th",13),qx(256,"Descri\xE7\xE3o"),og()(),Cl(257,"tr",14)(258,"td",15)(259,"div",16)(260,"span",17),qx(261," (p-additional-help)"),Hl(262,"br"),og()(),Cl(263,"div",18),qx(264,"Deprecated"),og()(),Cl(265,"td",19)(266,"code",20),qx(267,"EventEmitter"),og()(),Cl(268,"td",21),qx(269,"-"),og(),Cl(270,"td",22)(271,"em")(272,"strong"),qx(273,"(opcional)"),og()(),Cl(274,"p"),qx(275,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(276,"blockquote")(277,"p"),qx(278,"Essa propriedade est\xE1 "),Cl(279,"strong"),qx(280,"depreciada"),og(),qx(281," e ser\xE1 removida na vers\xE3o "),Cl(282,"code"),qx(283,"23.x.x"),og(),qx(284,". Recomendamos utilizar a propriedade "),Cl(285,"code"),qx(286,"p-helper"),og(),qx(287," que oferece mais recursos e flexibilidade."),og()()()(),Cl(288,"tr",14)(289,"td",15)(290,"div",23)(291,"span",24),qx(292," p-additional-help-tooltip"),Hl(293,"br"),og()(),Cl(294,"div",18),qx(295,"Deprecated"),og()(),Cl(296,"td",19)(297,"code",25),qx(298,"string"),og()(),Cl(299,"td",21),qx(300,"-"),og(),Cl(301,"td",22)(302,"em")(303,"strong"),qx(304,"(opcional)"),og()(),Cl(305,"p"),qx(306,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(307,"code"),qx(308,"po-helper"),og(),qx(309,`.
`),Cl(310,"strong"),qx(311,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(312,"blockquote")(313,"p"),qx(314,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(315,"blockquote")(316,"p"),qx(317,"Essa propriedade est\xE1 "),Cl(318,"strong"),qx(319,"depreciada"),og(),qx(320," e ser\xE1 removida na vers\xE3o "),Cl(321,"code"),qx(322,"23.x.x"),og(),qx(323,". Recomendamos utilizar a propriedade "),Cl(324,"code"),qx(325,"p-helper"),og(),qx(326," que oferece mais recursos e flexibilidade."),og()()()(),Cl(327,"tr",14)(328,"td",15)(329,"div",23)(330,"span",24),qx(331," p-append-in-body"),Hl(332,"br"),og()()(),Cl(333,"td",19)(334,"code",26),qx(335,"boolean"),og()(),Cl(336,"td",21)(337,"p")(338,"code"),qx(339,"false"),og()()(),Cl(340,"td",22)(341,"em")(342,"strong"),qx(343,"(opcional)"),og()(),Cl(344,"p"),qx(345,"Define que o "),Cl(346,"code"),qx(347,"listbox"),og(),qx(348," e/ou popover ("),Cl(349,"code"),qx(350,"p-helper"),og(),qx(351," e/ou "),Cl(352,"code"),qx(353,"p-error-limit"),og(),qx(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Cl(355,"blockquote")(356,"p"),qx(357,"Quando utilizado com "),Cl(358,"code"),qx(359,"p-helper"),og(),qx(360,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(361,"tr",14)(362,"td",15)(363,"div",23)(364,"span",24),qx(365," p-auto-focus"),Hl(366,"br"),og()()(),Cl(367,"td",19)(368,"code",26),qx(369,"boolean"),og()(),Cl(370,"td",21)(371,"p")(372,"code"),qx(373,"false"),og()()(),Cl(374,"td",22)(375,"em")(376,"strong"),qx(377,"(opcional)"),og()(),Cl(378,"p"),qx(379,"Aplica foco no elemento ao ser iniciado."),og(),Cl(380,"blockquote")(381,"p"),qx(382,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(383,"tr",14)(384,"td",15)(385,"div",23)(386,"span",24),qx(387," p-auto-height"),Hl(388,"br"),og()()(),Cl(389,"td",19)(390,"code",26),qx(391,"boolean"),og()(),Cl(392,"td",21)(393,"p")(394,"code"),qx(395,"false"),og()()(),Cl(396,"td",22)(397,"em")(398,"strong"),qx(399,"(opcional)"),og()(),Cl(400,"p"),qx(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),og(),Cl(402,"blockquote")(403,"p"),qx(404,"O valor padr\xE3o ser\xE1 "),Cl(405,"code"),qx(406,"true"),og(),qx(407," quando houver servi\xE7o ("),Cl(408,"code"),qx(409,"p-filter-service"),og(),qx(410,")."),og()()()(),Cl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),qx(415," (p-blur)"),Hl(416,"br"),og()()(),Cl(417,"td",19)(418,"code",20),qx(419,"EventEmitter"),og()(),Cl(420,"td",21),qx(421,"-"),og(),Cl(422,"td",22)(423,"em")(424,"strong"),qx(425,"(opcional)"),og()(),Cl(426,"p"),qx(427,"Evento disparado ao sair do campo."),og()()(),Cl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),qx(432," (p-change)"),Hl(433,"br"),og()()(),Cl(434,"td",19)(435,"code",20),qx(436,"EventEmitter"),og()(),Cl(437,"td",21),qx(438,"-"),og(),Cl(439,"td",22)(440,"em")(441,"strong"),qx(442,"(opcional)"),og()(),Cl(443,"p"),qx(444,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),og()()(),Cl(445,"tr",14)(446,"td",15)(447,"div",23)(448,"span",24),qx(449," p-compact-label"),Hl(450,"br"),og()()(),Cl(451,"td",19)(452,"code",26),qx(453,"boolean"),og()(),Cl(454,"td",21)(455,"p")(456,"code"),qx(457,"false"),og()()(),Cl(458,"td",22)(459,"em")(460,"strong"),qx(461,"(opcional)"),og()(),Cl(462,"p"),qx(463,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(464,"p"),qx(465,"Quando habilitado ("),Cl(466,"code"),qx(467,"true"),og(),qx(468,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(469,"ul")(470,"li")(471,"code"),qx(472,"po-label"),og()(),Cl(473,"li")(474,"code"),qx(475,"p-requirement (showRequired)"),og()(),Cl(476,"li")(477,"code"),qx(478,"po-helper"),og()()(),Cl(479,"p"),qx(480,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(481,"p"),qx(482,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(483,"ul")(484,"li")(485,"code"),qx(486,"--field-container-title-justify"),og()(),Cl(487,"li")(488,"code"),qx(489,"--field-container-title-flex"),og()()(),Cl(490,"p"),qx(491,"Exemplo:"),og(),Cl(492,"pre")(493,"code"),qx(494,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(495,"p"),qx(496,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(497,"tr",14)(498,"td",15)(499,"div",23)(500,"span",24),qx(501," p-debounce-time"),Hl(502,"br"),og()()(),Cl(503,"td",19)(504,"code",27),qx(505,"number"),og()(),Cl(506,"td",21)(507,"p")(508,"code"),qx(509,"400"),og()()(),Cl(510,"td",22)(511,"em")(512,"strong"),qx(513,"(opcional)"),og()(),Cl(514,"p"),qx(515,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),og(),Cl(516,"blockquote")(517,"p"),qx(518,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Cl(519,"code"),qx(520,"p-filter-service"),og(),qx(521,") e somente ser\xE1 aceito valor maior do que "),Cl(522,"em"),qx(523,"zero"),og(),qx(524,"."),og()()()(),Cl(525,"tr",14)(526,"td",15)(527,"div",23)(528,"span",24),qx(529," p-disabled"),Hl(530,"br"),og()()(),Cl(531,"td",19)(532,"code",26),qx(533,"boolean"),og()(),Cl(534,"td",21)(535,"p")(536,"code"),qx(537,"false"),og()()(),Cl(538,"td",22)(539,"em")(540,"strong"),qx(541,"(opcional)"),og()(),Cl(542,"p"),qx(543,"Indica que o campo ser\xE1 desabilitado."),og()()(),Cl(544,"tr",14)(545,"td",15)(546,"div",23)(547,"span",24),qx(548," p-error-limit"),Hl(549,"br"),og()()(),Cl(550,"td",19)(551,"code",26),qx(552,"boolean"),og()(),Cl(553,"td",21)(554,"p")(555,"code"),qx(556,"false"),og()()(),Cl(557,"td",22)(558,"em")(559,"strong"),qx(560,"(opcional)"),og()(),Cl(561,"p"),qx(562,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(563,"blockquote")(564,"p"),qx(565,"Caso essa propriedade seja definida como "),Cl(566,"code"),qx(567,"true"),og(),qx(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(569,"tr",14)(570,"td",15)(571,"div",23)(572,"span",24),qx(573," p-field-error-message"),Hl(574,"br"),og()()(),Cl(575,"td",19)(576,"code",25),qx(577,"string"),og()(),Cl(578,"td",21),qx(579,"-"),og(),Cl(580,"td",22)(581,"em")(582,"strong"),qx(583,"(opcional)"),og()(),Cl(584,"p"),qx(585,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(586,"blockquote")(587,"p"),qx(588,"Necess\xE1rio que a propriedade "),Cl(589,"code"),qx(590,"p-required"),og(),qx(591," esteja habilitada."),og()()()(),Cl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),qx(596," p-field-label"),Hl(597,"br"),og()()(),Cl(598,"td",19)(599,"code",25),qx(600,"string"),og()(),Cl(601,"td",21)(602,"p")(603,"code"),qx(604,"label"),og()()(),Cl(605,"td",22)(606,"em")(607,"strong"),qx(608,"(opcional)"),og()(),Cl(609,"p"),qx(610,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Cl(611,"code"),qx(612,"p-options"),og(),qx(613,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),og(),Cl(614,"p"),qx(615,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Cl(616,"code"),qx(617,"PoMultiSelectOption"),og(),qx(618,"."),og()()(),Cl(619,"tr",14)(620,"td",15)(621,"div",23)(622,"span",24),qx(623," p-field-value"),Hl(624,"br"),og()()(),Cl(625,"td",19)(626,"code",25),qx(627,"string"),og()(),Cl(628,"td",21)(629,"p")(630,"code"),qx(631,"value"),og()()(),Cl(632,"td",22)(633,"em")(634,"strong"),qx(635,"(opcional)"),og()(),Cl(636,"p"),qx(637,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Cl(638,"code"),qx(639,"p-options"),og(),qx(640,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),og(),Cl(641,"p"),qx(642,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Cl(643,"code"),qx(644,"PoMultiSelectOption"),og(),qx(645,"."),og()()(),Cl(646,"tr",14)(647,"td",15)(648,"div",23)(649,"span",24),qx(650," p-filter-mode"),Hl(651,"br"),og()()(),Cl(652,"td",19)(653,"code",28),qx(654,"PoMultiselectFilterMode"),og()(),Cl(655,"td",21)(656,"p")(657,"code"),qx(658,"startsWith"),og()()(),Cl(659,"td",22)(660,"em")(661,"strong"),qx(662,"(opcional)"),og()(),Cl(663,"p"),qx(664,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),og()()(),Cl(665,"tr",14)(666,"td",15)(667,"div",23)(668,"span",24),qx(669," p-filter-service"),Hl(670,"br"),og()()(),Cl(671,"td",19)(672,"code",25),qx(673,"string "),og(),Cl(674,"code",29),qx(675," PoMultiselectFilter"),og()(),Cl(676,"td",21),qx(677,"-"),og(),Cl(678,"td",22)(679,"em")(680,"strong"),qx(681,"(opcional)"),og()(),Cl(682,"p"),qx(683,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),og(),Cl(684,"p"),qx(685,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),Cl(686,"code"),qx(687,"PoMultiselectFilter"),og(),qx(688,"."),og(),Cl(689,"p"),qx(690,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),Cl(691,"a",30),qx(692,"API PO UI"),og(),qx(693," e utilizar as propriedades "),Cl(694,"code"),qx(695,"p-field-label"),og(),qx(696," e "),Cl(697,"code"),qx(698,"p-field-value"),og(),qx(699," para a constru\xE7\xE3o da lista de itens."),og(),Cl(700,"p"),qx(701,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),og(),Cl(702,"pre")(703,"code"),qx(704,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),og()(),Cl(705,"p"),qx(706,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),og(),Cl(707,"pre")(708,"code"),qx(709,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),og()()()(),Cl(710,"tr",14)(711,"td",15)(712,"div",23)(713,"span",24),qx(714," p-help"),Hl(715,"br"),og()()(),Cl(716,"td",19)(717,"code",25),qx(718,"string"),og()(),Cl(719,"td",21),qx(720,"-"),og(),Cl(721,"td",22)(722,"em")(723,"strong"),qx(724,"(opcional)"),og()(),Cl(725,"p"),qx(726,"Texto de apoio para o campo."),og()()(),Cl(727,"tr",14)(728,"td",15)(729,"div",23)(730,"span",24),qx(731," p-hide-search"),Hl(732,"br"),og()()(),Cl(733,"td",19)(734,"code",26),qx(735,"boolean"),og()(),Cl(736,"td",21)(737,"p")(738,"code"),qx(739,"false"),og()()(),Cl(740,"td",22)(741,"em")(742,"strong"),qx(743,"(opcional)"),og()(),Cl(744,"p"),qx(745,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),og()()(),Cl(746,"tr",14)(747,"td",15)(748,"div",23)(749,"span",24),qx(750," p-hide-select-all"),Hl(751,"br"),og()()(),Cl(752,"td",19)(753,"code",26),qx(754,"boolean"),og()(),Cl(755,"td",21)(756,"p")(757,"code"),qx(758,"false"),og()()(),Cl(759,"td",22)(760,"em")(761,"strong"),qx(762,"(opcional)"),og()(),Cl(763,"p"),qx(764,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),og()()(),Cl(765,"tr",14)(766,"td",15)(767,"div",16)(768,"span",17),qx(769," (p-keydown)"),Hl(770,"br"),og()()(),Cl(771,"td",19)(772,"code",20),qx(773,"EventEmitter"),og()(),Cl(774,"td",21),qx(775,"-"),og(),Cl(776,"td",22)(777,"em")(778,"strong"),qx(779,"(opcional)"),og()(),Cl(780,"p"),qx(781,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(782,"code"),qx(783,"KeyboardEvent"),og(),qx(784," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(785,"tr",14)(786,"td",15)(787,"div",23)(788,"span",24),qx(789," p-label"),Hl(790,"br"),og()()(),Cl(791,"td",19)(792,"code",25),qx(793,"string"),og()(),Cl(794,"td",21),qx(795,"-"),og(),Cl(796,"td",22)(797,"em")(798,"strong"),qx(799,"(opcional)"),og()(),Cl(800,"p"),qx(801,"Label no componente."),og()()(),Cl(802,"tr",14)(803,"td",15)(804,"div",23)(805,"span",24),qx(806," p-label-text-wrap"),Hl(807,"br"),og()()(),Cl(808,"td",19)(809,"code",26),qx(810,"boolean"),og()(),Cl(811,"td",21)(812,"p")(813,"code"),qx(814,"false"),og()()(),Cl(815,"td",22)(816,"em")(817,"strong"),qx(818,"(opcional)"),og()(),Cl(819,"p"),qx(820,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(821,"code"),qx(822,"p-label"),og(),qx(823,". Quando "),Cl(824,"code"),qx(825,"p-label-text-wrap"),og(),qx(826,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(827,"tr",14)(828,"td",15)(829,"div",23)(830,"span",24),qx(831," p-listbox-control-position"),Hl(832,"br"),og()()(),Cl(833,"td",19)(834,"code",31),qx(835,"'top' "),og(),Cl(836,"code",32),qx(837," 'bottom'"),og()(),Cl(838,"td",21)(839,"p")(840,"code"),qx(841,"bottom"),og()()(),Cl(842,"td",22)(843,"em")(844,"strong"),qx(845,"(opcional)"),og()(),Cl(846,"p"),qx(847,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Cl(848,"code"),qx(849,"listbox"),og(),qx(850," em rela\xE7\xE3o ao campo ("),Cl(851,"code"),qx(852,"top"),og(),qx(853," ou "),Cl(854,"code"),qx(855,"bottom"),og(),qx(856,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og()()(),Cl(857,"tr",14)(858,"td",15)(859,"div",23)(860,"span",24),qx(861," p-literals"),Hl(862,"br"),og()()(),Cl(863,"td",19)(864,"code",33),qx(865,"PoMultiselectLiterals"),og()(),Cl(866,"td",21),qx(867,"-"),og(),Cl(868,"td",22)(869,"em")(870,"strong"),qx(871,"(opcional)"),og()(),Cl(872,"p"),qx(873,"Objeto com as literais usadas no "),Cl(874,"code"),qx(875,"po-multiselect"),og(),qx(876,"."),og(),Cl(877,"p"),qx(878,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(879,"pre")(880,"code"),qx(881,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),og()(),Cl(882,"p"),qx(883,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(884,"pre")(885,"code"),qx(886,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),og()(),Cl(887,"p"),qx(888,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),og(),Cl(889,"pre")(890,"code"),qx(891,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),og()(),Cl(892,"blockquote")(893,"p"),qx(894,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(895,"a",34)(896,"code"),qx(897,"PoI18nService"),og()(),qx(898," ou do browser."),og()()()(),Cl(899,"tr",14)(900,"td",15)(901,"div",23)(902,"span",24),qx(903," p-loading"),Hl(904,"br"),og()()(),Cl(905,"td",19)(906,"code",26),qx(907,"boolean"),og()(),Cl(908,"td",21)(909,"p")(910,"code"),qx(911,"false"),og()()(),Cl(912,"td",22)(913,"em")(914,"strong"),qx(915,"(opcional)"),og()(),Cl(916,"p"),qx(917,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(918,"tr",14)(919,"td",15)(920,"div",23)(921,"span",24),qx(922," name"),Hl(923,"br"),og()()(),Cl(924,"td",19)(925,"code",25),qx(926,"string"),og()(),Cl(927,"td",21),qx(928,"-"),og(),Cl(929,"td",22)(930,"p"),qx(931,"Nome do componente."),og()()(),Cl(932,"tr",14)(933,"td",15)(934,"div",23)(935,"span",24),qx(936," p-optional"),Hl(937,"br"),og()()(),Cl(938,"td",19)(939,"code",26),qx(940,"boolean"),og()(),Cl(941,"td",21)(942,"p")(943,"code"),qx(944,"false"),og()()(),Cl(945,"td",22)(946,"em")(947,"strong"),qx(948,"(opcional)"),og()(),Cl(949,"p"),qx(950,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(951,"blockquote")(952,"p"),qx(953,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(954,"ul")(955,"li"),qx(956,"O campo conter "),Cl(957,"code"),qx(958,"p-required"),og(),qx(959,";"),og(),Cl(960,"li"),qx(961,"N\xE3o possuir "),Cl(962,"code"),qx(963,"p-help"),og(),qx(964," e/ou "),Cl(965,"code"),qx(966,"p-label"),og(),qx(967,"."),og()()()(),Cl(968,"tr",14)(969,"td",15)(970,"div",23)(971,"span",24),qx(972," p-options"),Hl(973,"br"),og()()(),Cl(974,"td",19)(975,"code",35),qx(976,"Array<PoMultiselectOption "),og(),Cl(977,"code",36),qx(978," any>"),og()(),Cl(979,"td",21),qx(980,"-"),og(),Cl(981,"td",22)(982,"p"),qx(983,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),og(),Cl(984,"blockquote")(985,"p"),qx(986,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),og()(),Cl(987,"pre")(988,"code"),qx(989,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),og()(),Cl(990,"blockquote")(991,"p"),qx(992,"A lista pode ser definida utilizando um array com o valor representando "),Cl(993,"code"),qx(994,"value"),og(),qx(995," e "),Cl(996,"code"),qx(997,"label"),og(),qx(998," das seguintes formas:"),og()(),Cl(999,"pre")(1e3,"code"),qx(1001,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),og()(),Cl(1002,"pre")(1003,"code"),qx(1004,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),og()(),Cl(1005,"ul")(1006,"li"),qx(1007,"Aconselha-se utilizar valores distintos no "),Cl(1008,"code"),qx(1009,"label"),og(),qx(1010," e "),Cl(1011,"code"),qx(1012,"value"),og(),qx(1013," dos itens."),og()()()(),Cl(1014,"tr",14)(1015,"td",15)(1016,"div",23)(1017,"span",24),qx(1018," p-placeholder"),Hl(1019,"br"),og()()(),Cl(1020,"td",19)(1021,"code",25),qx(1022,"string"),og()(),Cl(1023,"td",21),qx(1024,"-"),og(),Cl(1025,"td",22)(1026,"em")(1027,"strong"),qx(1028,"(opcional)"),og()(),Cl(1029,"p"),qx(1030,"Mensagem apresentada enquanto o campo estiver vazio."),og()()(),Cl(1031,"tr",14)(1032,"td",15)(1033,"div",23)(1034,"span",24),qx(1035," p-placeholder-search"),Hl(1036,"br"),og()()(),Cl(1037,"td",19)(1038,"code",25),qx(1039,"string"),og()(),Cl(1040,"td",21)(1041,"p")(1042,"code"),qx(1043,"Buscar"),og()()(),Cl(1044,"td",22)(1045,"em")(1046,"strong"),qx(1047,"(opcional)"),og()(),Cl(1048,"p"),qx(1049,"Placeholder do campo de pesquisa."),og(),Cl(1050,"blockquote")(1051,"p"),qx(1052,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Cl(1053,"tr",14)(1054,"td",15)(1055,"div",23)(1056,"span",24),qx(1057," p-helper"),Hl(1058,"br"),og()()(),Cl(1059,"td",19)(1060,"code",37),qx(1061,"PoHelperOptions "),og(),Cl(1062,"code",25),qx(1063," string"),og()(),Cl(1064,"td",21),qx(1065,"-"),og(),Cl(1066,"td",22)(1067,"em")(1068,"strong"),qx(1069,"(opcional)"),og()(),Cl(1070,"p"),qx(1071,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1072,"code"),qx(1073,"p-label"),og(),qx(1074," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1075,"code"),qx(1076,"p-label"),og(),qx(1077,"."),og(),Cl(1078,"blockquote")(1079,"p"),qx(1080,"Para mais informa\xE7\xF5es acesse: "),Cl(1081,"a",38),qx(1082,"https://po-ui.io/documentation/po-helper"),og(),qx(1083,"."),og()(),Cl(1084,"blockquote")(1085,"p"),qx(1086,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1087,"code"),qx(1088,"p-additional-help-tooltip"),og(),qx(1089," e "),Cl(1090,"code"),qx(1091,"p-additional-help"),og(),qx(1092,") ser\xE1 ignorado."),og()()()(),Cl(1093,"tr",14)(1094,"td",15)(1095,"div",23)(1096,"span",24),qx(1097," p-required"),Hl(1098,"br"),og()()(),Cl(1099,"td",19)(1100,"code",26),qx(1101,"boolean"),og()(),Cl(1102,"td",21)(1103,"p")(1104,"code"),qx(1105,"false"),og()()(),Cl(1106,"td",22)(1107,"em")(1108,"strong"),qx(1109,"(opcional)"),og()(),Cl(1110,"p"),qx(1111,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1112,"blockquote")(1113,"p"),qx(1114,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1115,"code"),qx(1116,"(p-disabled)"),og(),qx(1117,"."),og()()()(),Cl(1118,"tr",14)(1119,"td",15)(1120,"div",23)(1121,"span",24),qx(1122," p-show-required"),Hl(1123,"br"),og()()(),Cl(1124,"td",19)(1125,"code",26),qx(1126,"boolean"),og()(),Cl(1127,"td",21),qx(1128,"-"),og(),Cl(1129,"td",22)(1130,"p"),qx(1131,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1132,"blockquote")(1133,"p"),qx(1134,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1135,"ul")(1136,"li"),qx(1137,"N\xE3o possuir "),Cl(1138,"code"),qx(1139,"p-help"),og(),qx(1140," e/ou "),Cl(1141,"code"),qx(1142,"p-label"),og(),qx(1143,"."),og()()()(),Cl(1144,"tr",14)(1145,"td",15)(1146,"div",23)(1147,"span",24),qx(1148," p-size"),Hl(1149,"br"),og()()(),Cl(1150,"td",19)(1151,"code",25),qx(1152,"string"),og()(),Cl(1153,"td",21)(1154,"p")(1155,"code"),qx(1156,"medium"),og()()(),Cl(1157,"td",22)(1158,"em")(1159,"strong"),qx(1160,"(opcional)"),og()(),Cl(1161,"p"),qx(1162,"Define o tamanho do componente:"),og(),Cl(1163,"ul")(1164,"li")(1165,"code"),qx(1166,"small"),og(),qx(1167,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1168,"li")(1169,"code"),qx(1170,"medium"),og(),qx(1171,": altura do input como 44px."),og()(),Cl(1172,"blockquote")(1173,"p"),qx(1174,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1175,"code"),qx(1176,"medium"),og(),qx(1177,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1178,"a",39),qx(1179,"po-theme"),og(),qx(1180,"."),og()()()(),Cl(1181,"tr",14)(1182,"td",15)(1183,"div",23)(1184,"span",24),qx(1185," p-sort"),Hl(1186,"br"),og()()(),Cl(1187,"td",19)(1188,"code",26),qx(1189,"boolean"),og()(),Cl(1190,"td",21)(1191,"p")(1192,"code"),qx(1193,"false"),og()()(),Cl(1194,"td",22)(1195,"em")(1196,"strong"),qx(1197,"(opcional)"),og()(),Cl(1198,"p"),qx(1199,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),og()()()(),Cl(1200,"h3",10),qx(1201,"M\xE9todos"),og(),Cl(1202,"table",40)(1203,"tr",14)(1204,"th",41)(1205,"div",23)(1206,"h4")(1207,"span",24),qx(1208," focus "),og()()()()(),Cl(1209,"tr",22)(1210,"td",22)(1211,"p"),qx(1212,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1213,"p"),qx(1214,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1215,"pre")(1216,"code"),qx(1217,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),og()()()()(),Hl(1218,"br"),Cl(1219,"table",40)(1220,"tr",14)(1221,"th",41)(1222,"div",23)(1223,"h4")(1224,"span",24),qx(1225," showAdditionalHelp "),og()()()()(),Cl(1226,"tr",22)(1227,"td",22)(1228,"p"),qx(1229,"M\xE9todo que exibe "),Cl(1230,"code"),qx(1231,"p-helper"),og(),qx(1232," ou executa a a\xE7\xE3o definida em "),Cl(1233,"code"),qx(1234,"p-helper{eventOnClick}"),og(),qx(1235," ou em "),Cl(1236,"code"),qx(1237,"p-additionalHelp"),og(),qx(1238,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1239,"code"),qx(1240,"p-keydown"),og(),qx(1241,"."),og(),Cl(1242,"blockquote")(1243,"p"),qx(1244,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1245,"code"),qx(1246,"po-helper"),og(),qx(1247," quando o componente estiver com foco."),og()(),Cl(1248,"pre")(1249,"code"),qx(1250,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),og()(),Cl(1251,"pre")(1252,"code"),qx(1253,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1254,"br"),Cl(1255,"h3"),qx(1256,"Interfaces"),og(),Cl(1257,"h4",42)(1258,"code",5),qx(1259,"PoMultiselectFilter"),og()(),Cl(1260,"div",2)(1261,"p"),qx(1262,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),og()(),Cl(1263,"h4",10),qx(1264,"M\xE9todos"),og(),Cl(1265,"table",40)(1266,"tr",14)(1267,"th",41)(1268,"div",23)(1269,"h4")(1270,"span",24),qx(1271," getFilteredData "),og()()()()(),Cl(1272,"tr",22)(1273,"td",22)(1274,"p"),qx(1275,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Cl(1276,"code"),qx(1277,"PoMultiselectOption"),og(),qx(1278,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),og()()()(),Cl(1279,"h5")(1280,"b"),qx(1281,"Par\xE2metros"),og()(),Cl(1282,"table",11)(1283,"tr",12)(1284,"th",13),qx(1285,"Nome"),og(),Cl(1286,"th",13),qx(1287,"Tipo"),og(),Cl(1288,"th",13),qx(1289,"Descri\xE7\xE3o"),og()(),Cl(1290,"tr",14)(1291,"td",15),qx(1292," params"),og(),Cl(1293,"td",19)(1294,"code",43),qx(1295," { property: string, value: string } "),og()(),Cl(1296,"td",22)(1297,"p"),qx(1298,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),og()()()(),Hl(1299,"br"),Cl(1300,"table",40)(1301,"tr",14)(1302,"th",41)(1303,"div",23)(1304,"h4")(1305,"span",24),qx(1306," getObjectsByValues "),og()()()()(),Cl(1307,"tr",22)(1308,"td",22)(1309,"p"),qx(1310,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Cl(1311,"code"),qx(1312,"PoMultiselectOption"),og(),qx(1313,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),og()()()(),Cl(1314,"h5")(1315,"b"),qx(1316,"Par\xE2metros"),og()(),Cl(1317,"table",11)(1318,"tr",12)(1319,"th",13),qx(1320,"Nome"),og(),Cl(1321,"th",13),qx(1322,"Tipo"),og(),Cl(1323,"th",13),qx(1324,"Descri\xE7\xE3o"),og()(),Cl(1325,"tr",14)(1326,"td",15),qx(1327," values"),og(),Cl(1328,"td",19)(1329,"code",44),qx(1330," Array<string "),og(),Cl(1331,"code",45),qx(1332," number> "),og()(),Cl(1333,"td",22)(1334,"p"),qx(1335,"Array com os valores a serem buscados."),og()()()(),Hl(1336,"br"),Cl(1337,"h4",42)(1338,"code",5),qx(1339,"PoMultiselectLiterals"),og()(),Cl(1340,"div",2)(1341,"p"),qx(1342,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1343,"code"),qx(1344,"po-multiselect"),og(),qx(1345,"."),og()(),Cl(1346,"h4",10),qx(1347,"Propriedades"),og(),Cl(1348,"table",11)(1349,"tr",12)(1350,"th",13),qx(1351,"Nome"),og(),Cl(1352,"th",13),qx(1353,"Tipo"),og(),Cl(1354,"th",13),qx(1355,"Descri\xE7\xE3o"),og()(),Cl(1356,"tr",14)(1357,"td",15)(1358,"div",23)(1359,"span",24),qx(1360," noData"),Hl(1361,"br"),og()()(),Cl(1362,"td",19)(1363,"code",25),qx(1364,"string"),og()(),Cl(1365,"td",22)(1366,"em")(1367,"strong"),qx(1368,"(opcional)"),og()(),Cl(1369,"p"),qx(1370,"Texto exibido quando n\xE3o houver dados encontrados na busca."),og()()(),Cl(1371,"tr",14)(1372,"td",15)(1373,"div",23)(1374,"span",24),qx(1375," placeholderSearch"),Hl(1376,"br"),og()()(),Cl(1377,"td",19)(1378,"code",25),qx(1379,"string"),og()(),Cl(1380,"td",22)(1381,"em")(1382,"strong"),qx(1383,"(opcional)"),og()(),Cl(1384,"p"),qx(1385,"Texto do "),Cl(1386,"em"),qx(1387,"placeholder"),og(),qx(1388," do campo de busca."),og()()(),Cl(1389,"tr",14)(1390,"td",15)(1391,"div",23)(1392,"span",24),qx(1393," selectAll"),Hl(1394,"br"),og()()(),Cl(1395,"td",19)(1396,"code",25),qx(1397,"string"),og()(),Cl(1398,"td",22)(1399,"em")(1400,"strong"),qx(1401,"(opcional)"),og()(),Cl(1402,"p"),qx(1403,"Texto exibido no bot\xE3o de selecionar todos."),og()()(),Cl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),qx(1408," selectItem"),Hl(1409,"br"),og()()(),Cl(1410,"td",19)(1411,"code",25),qx(1412,"string"),og()(),Cl(1413,"td",22)(1414,"em")(1415,"strong"),qx(1416,"(opcional)"),og()(),Cl(1417,"p"),qx(1418,"Texto exibido na propriedade placeholder."),og()()()(),Cl(1419,"h4",42)(1420,"code",5),qx(1421,"PoMultiselectOption"),og()(),Cl(1422,"div",2)(1423,"p"),qx(1424,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),og()(),Cl(1425,"h4",10),qx(1426,"Propriedades"),og(),Cl(1427,"table",11)(1428,"tr",12)(1429,"th",13),qx(1430,"Nome"),og(),Cl(1431,"th",13),qx(1432,"Tipo"),og(),Cl(1433,"th",13),qx(1434,"Descri\xE7\xE3o"),og()(),Cl(1435,"tr",14)(1436,"td",15)(1437,"div",23)(1438,"span",24),qx(1439," label"),Hl(1440,"br"),og()()(),Cl(1441,"td",19)(1442,"code",25),qx(1443,"string"),og()(),Cl(1444,"td",22)(1445,"p"),qx(1446,"Label exibido nos itens da lista."),og()()(),Cl(1447,"tr",14)(1448,"td",15)(1449,"div",23)(1450,"span",24),qx(1451," value"),Hl(1452,"br"),og()()(),Cl(1453,"td",19)(1454,"code",25),qx(1455,"string "),og(),Cl(1456,"code",27),qx(1457," number"),og()(),Cl(1458,"td",22)(1459,"p"),qx(1460,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),og()()()(),Cl(1461,"h3"),qx(1462,"Enums"),og(),Cl(1463,"h4",4)(1464,"code",5),qx(1465,"PoMultiselectFilterMode"),og()(),Cl(1466,"div",2)(1467,"p"),qx(1468,"Define o tipo de busca usado no po-multiselect."),og()(),Cl(1469,"h4",10),qx(1470,"Propriedades"),og(),Cl(1471,"table",11)(1472,"tr",12)(1473,"th",13),qx(1474,"Nome"),og(),Cl(1475,"th",13),qx(1476,"Descri\xE7\xE3o"),og()(),Cl(1477,"tr",14)(1478,"td",15)(1479,"div",23)(1480,"span",24),qx(1481," startsWith"),Hl(1482,"br"),og()()(),Cl(1483,"td",22)(1484,"p"),qx(1485,"Verifica se o texto "),Cl(1486,"em"),qx(1487,"inicia"),og(),qx(1488," com o valor pesquisado."),og()()(),Cl(1489,"tr",14)(1490,"td",15)(1491,"div",23)(1492,"span",24),qx(1493," contains"),Hl(1494,"br"),og()()(),Cl(1495,"td",22)(1496,"p"),qx(1497,"Verifica se o texto "),Cl(1498,"em"),qx(1499,"cont\xE9m"),og(),qx(1500," o valor pesquisado."),og()()(),Cl(1501,"tr",14)(1502,"td",15)(1503,"div",23)(1504,"span",24),qx(1505," endsWith"),Hl(1506,"br"),og()()(),Cl(1507,"td",22)(1508,"p"),qx(1509,"Verifica se o texto "),Cl(1510,"em"),qx(1511,"finaliza"),og(),qx(1512," com o valor pesquisado."),og()()()()());},dependencies:[Zr],encapsulation:2})}return l})();var je=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt$1("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-multiselect-doc"),og(),Cl(4,"po-tab",3),dt$1("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Ve,De,Le,qe,Be,We,Ie,He],encapsulation:2})}return l})();var St=[{path:"",component:je}],Re=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[bL.forChild(St),bL]})}return l})();var vn=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ca,Re]})}return l})();export{vn as DocPoMultiselectModule};