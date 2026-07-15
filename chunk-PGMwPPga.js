import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,r as r$1,d as f,cM as cY,cN as lm,i as ib,G,I,bF as Fw,L as Gl,O as nw,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,c9 as Yhe,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,bD as Ede,b6 as Yo,cG as HO,a4 as wN,cU as SN,cQ as kk,cR as Ok,d2 as ohe,aJ as qhe,bI as Sa,a2 as JE,aI as dc,b7 as E3,Y as we,a3 as lNe,aq as gx,J as yw,at as mx,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var Te=(()=>{class l{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic"]],standalone:false,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,i){a&1&&Gl(0,"po-multiselect",0),a&2&&nw("p-options",i.options);},dependencies:[Fw],encapsulation:2,changeDetection:1})}return l})();var Ue=l=>({"docs-sample-code-tabs":l}),Ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-multiselect-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ue,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Te],encapsulation:2,changeDetection:1})}return l})();var De=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}addOption(){this.options=[...this.options,r$1({},this.option)],this.option={label:void 0,value:void 0};}changeEvent(s){this.event=s;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(s){this.customLiterals=void 0;}}restore(){this.helperText="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs"]],standalone:false,decls:33,vars:51,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap","p-compact-label"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let c=Sx();Tl(0,"div",2)(1,"po-multiselect",3),ww("ngModelChange",function(p){return Ky(c),sN(i.multiselect,p)||(i.multiselect=p),Xy(p)}),ht("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),r0(),sg(),Gl(2,"po-divider"),Tl(3,"div",2),Gl(4,"po-info",4)(5,"po-info",5),sg(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"div",2)(10,"po-input",6),ww("ngModelChange",function(p){return Ky(c),sN(i.option.label,p)||(i.option.label=p),Xy(p)}),sg(),r0(),Tl(11,"po-input",7),ww("ngModelChange",function(p){return Ky(c),sN(i.option.value,p)||(i.option.value=p),Xy(p)}),sg(),r0(),sg(),Tl(12,"div",2)(13,"po-button",8),ht("p-click",function(){return i.addOption()}),sg()()(),Gl(14,"po-divider"),Tl(15,"form",null,1)(17,"po-input",9),ww("ngModelChange",function(p){return Ky(c),sN(i.label,p)||(i.label=p),Xy(p)}),sg(),r0(),Tl(18,"po-input",10),ww("ngModelChange",function(p){return Ky(c),sN(i.help,p)||(i.help=p),Xy(p)}),sg(),r0(),Tl(19,"po-input",11),ww("ngModelChange",function(p){return Ky(c),sN(i.helperText,p)||(i.helperText=p),Xy(p)}),sg(),r0(),Tl(20,"po-input",12),ww("ngModelChange",function(p){return Ky(c),sN(i.placeholder,p)||(i.placeholder=p),Xy(p)}),sg(),r0(),Tl(21,"po-input",13),ww("ngModelChange",function(p){return Ky(c),sN(i.placeholderSearch,p)||(i.placeholderSearch=p),Xy(p)}),sg(),r0(),Tl(22,"po-input",14),ww("ngModelChange",function(p){return Ky(c),sN(i.fieldErrorMessage,p)||(i.fieldErrorMessage=p),Xy(p)}),sg(),r0(),Tl(23,"po-input",15),ww("ngModelChange",function(p){return Ky(c),sN(i.literals,p)||(i.literals=p),Xy(p)}),ht("p-change",function(){return i.changeLiterals()}),sg(),r0(),Tl(24,"po-input",16),ww("ngModelChange",function(p){return Ky(c),sN(i.filterService,p)||(i.filterService=p),Xy(p)}),sg(),r0(),Tl(25,"po-input",17),ww("ngModelChange",function(p){return Ky(c),sN(i.fieldValue,p)||(i.fieldValue=p),Xy(p)}),sg(),r0(),Tl(26,"po-input",18),ww("ngModelChange",function(p){return Ky(c),sN(i.fieldLabel,p)||(i.fieldLabel=p),Xy(p)}),sg(),r0(),Tl(27,"po-checkbox-group",19),ww("ngModelChange",function(p){return Ky(c),sN(i.properties,p)||(i.properties=p),Xy(p)}),sg(),r0(),Tl(28,"po-radio-group",20),ww("ngModelChange",function(p){return Ky(c),sN(i.filterMode,p)||(i.filterMode=p),Xy(p)}),sg(),r0(),Tl(29,"po-radio-group",21),ww("ngModelChange",function(p){return Ky(c),sN(i.size,p)||(i.size=p),Xy(p)}),sg(),r0(),Tl(30,"po-radio-group",22),ww("ngModelChange",function(p){return Ky(c),sN(i.listboxPosition,p)||(i.listboxPosition=p),Xy(p)}),sg(),r0(),Tl(31,"div",2)(32,"po-button",23),ht("p-click",function(){return i.restore()}),sg()()();}if(a&2){let c=Fx(8);Vp(),Ew("ngModel",i.multiselect),nw("p-helper",i.helperText)("p-auto-height",i.properties.includes("autoHeight"))("p-disabled",i.properties.includes("disabled"))("p-field-label",i.fieldLabel)("p-field-value",i.fieldValue)("p-filter-service",i.filterService)("p-filter-mode",i.filterMode)("p-help",i.help)("p-hide-search",i.properties.includes("hideSearch"))("p-hide-select-all",i.properties.includes("hideSelectAll"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-optional",i.properties.includes("optional"))("p-options",i.options)("p-placeholder",i.placeholder)("p-placeholder-search",i.placeholderSearch)("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-sort",i.properties.includes("sort"))("p-listbox-control-position",i.listboxPosition)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),o0(),Vp(3),nw("p-value",i.multiselect),Vp(),nw("p-value",i.event),Vp(5),Ew("ngModel",i.option.label),o0(),Vp(),Ew("ngModel",i.option.value),o0(),Vp(2),nw("p-disabled",c.form.invalid),Vp(4),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helperText),o0(),Vp(),Ew("ngModel",i.placeholder),o0(),Vp(),Ew("ngModel",i.placeholderSearch),o0(),Vp(),Ew("ngModel",i.fieldErrorMessage),o0(),Vp(),Ew("ngModel",i.literals),o0(),Vp(),Ew("ngModel",i.filterService),o0(),Vp(),Ew("ngModel",i.fieldValue),o0(),Vp(),Ew("ngModel",i.fieldLabel),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.filterMode),nw("p-disabled",i.properties.includes("hideSearch"))("p-options",i.filterModeOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0(),Vp(),Ew("ngModel",i.listboxPosition),nw("p-options",i.listboxPositionOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Fw,Dde,Yhe],encapsulation:2,changeDetection:1})}return l})();var Ke=l=>({"docs-sample-code-tabs":l}),Ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-multiselect-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ke,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,De],encapsulation:2,changeDetection:1})}return l})();var Oe=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean();}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[];}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation"]],standalone:false,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=Sx();Tl(0,"form",null,0)(2,"h3"),iN(3,"Collective vacations"),sg(),Gl(4,"po-divider"),Tl(5,"div",2)(6,"po-datepicker",3),ww("ngModelChange",function(p){return Ky(c),sN(i.initialPeriod,p)||(i.initialPeriod=p),Xy(p)}),sg(),r0(),Tl(7,"po-datepicker",4),ww("ngModelChange",function(p){return Ky(c),sN(i.finalPeriod,p)||(i.finalPeriod=p),Xy(p)}),sg(),r0(),sg(),Tl(8,"div",2)(9,"po-radio-group",5),ww("ngModelChange",function(p){return Ky(c),sN(i.days,p)||(i.days=p),Xy(p)}),sg(),r0(),sg(),Tl(10,"div",2)(11,"po-multiselect",6),ww("ngModelChange",function(p){return Ky(c),sN(i.employeesVacations,p)||(i.employeesVacations=p),Xy(p)}),sg(),r0(),sg(),Tl(12,"div",2)(13,"po-button",7),ht("p-click",function(){Ky(c);let p=Fx(16);return i.updateNameEmployeesVacations(),Xy(p.open())}),sg(),Tl(14,"po-button",8),ht("p-click",function(){return i.clean()}),sg()()(),Tl(15,"po-modal",9,1)(17,"div",2),Gl(18,"po-info",10),wN(19,"date"),Gl(20,"po-info",11),wN(21,"date"),Gl(22,"po-info",12),sg(),Gl(23,"po-divider"),Tl(24,"div",2),Gl(25,"po-info",13),sg()();}if(a&2){let c=Fx(1);Vp(6),Ew("ngModel",i.initialPeriod),o0(),Vp(),Ew("ngModel",i.finalPeriod),nw("p-min-date",i.initialPeriod),o0(),Vp(2),Ew("ngModel",i.days),nw("p-options",i.daysOptions),o0(),Vp(2),Ew("ngModel",i.employeesVacations),nw("p-options",i.employees),o0(),Vp(2),nw("p-disabled",c.form.invalid),Vp(5),nw("p-value",SN(19,12,i.initialPeriod,"longDate","+0000")),Vp(2),nw("p-value",SN(21,16,i.finalPeriod,"longDate","+0000")),Vp(2),nw("p-value",i.days),Vp(3),nw("p-value",i.nameEmployeesVacations);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,Ede,Fw,Dde,Yhe,Yo,HO],encapsulation:2,changeDetection:1})}return l})();var Ze=l=>({"docs-sample-code-tabs":l}),Le=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect - Vacation"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #f="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-multiselect-vacation"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ze,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Oe],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{formBuilder=f(cY);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,lm.required],finalPeriod:[null,lm.required],days:[null,lm.required],employeesVacations:[null,lm.required]}),this.clean();}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0});}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:false,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=Sx();Tl(0,"form",1)(1,"h3"),iN(2,"Collective vacations"),sg(),Gl(3,"po-divider"),Tl(4,"div",2),Gl(5,"po-datepicker",3),r0(),Gl(6,"po-datepicker",4),r0(),sg(),Tl(7,"div",2),Gl(8,"po-multiselect",5),r0(),Gl(9,"po-radio-group",6),r0(),sg(),Tl(10,"div",2)(11,"po-button",7),ht("p-click",function(){Ky(c);let p=Fx(14);return i.updateEmployeesVacations(),Xy(p.open())}),sg(),Tl(12,"po-button",8),ht("p-click",function(){return i.clean()}),sg()()(),Tl(13,"po-modal",9,0)(15,"div",2),Gl(16,"po-info",10),wN(17,"date"),Gl(18,"po-info",11),wN(19,"date"),Gl(20,"po-info",12),sg(),Gl(21,"po-divider"),Tl(22,"div",2),Gl(23,"po-info",13),sg()();}a&2&&(nw("formGroup",i.formCollectiveVacations),Vp(5),o0(),Vp(),nw("p-min-date",i.getRangeFinalPeriod()),o0(),Vp(2),nw("p-auto-height",true)("p-options",i.employees)("p-required",true),o0(),Vp(),nw("p-options",i.daysOptions)("p-columns",3),o0(),Vp(2),nw("p-disabled",i.formCollectiveVacations.invalid),Vp(5),nw("p-value",SN(17,12,i.initialPeriod,"longDate","+0000")),Vp(2),nw("p-value",SN(19,16,i.finalPeriod,"longDate","+0000")),Vp(2),nw("p-value",i.days),Vp(3),nw("p-value",i.nameEmployeesVacations));},dependencies:[oY,nY,rY,kk,Ok,Qt,mv,Ede,Fw,Dde,Yhe,Yo,HO],encapsulation:2,changeDetection:1})}return l})();var tt=l=>({"docs-sample-code-tabs":l}),qe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect - Vacation Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form [formGroup]="formCollectiveVacations">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-multiselect-vacation-reactive-form"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,tt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ke],encapsulation:2,changeDetection:1})}return l})();function it(l,K){l&1&&Gl(0,"po-tag",11),l&2&&nw("p-icon",true);}function ot(l,K){l&1&&Gl(0,"po-tag",12),l&2&&nw("p-icon",true);}function lt(l,K){l&1&&Gl(0,"po-tag",13),l&2&&nw("p-icon",true);}function at(l,K){if(l&1&&(Tl(0,"div",0)(1,"div",7)(2,"div",8),iN(3),sg()(),Tl(4,"div",9)(5,"div",10),gx(6,it,1,1,"po-tag",11),gx(7,ot,1,1,"po-tag",12),gx(8,lt,1,1,"po-tag",13),sg()()()),l&2){let s=K.$implicit;Vp(3),yw(s.label),Vp(3),mx(s.admin?6:-1),Vp(),mx(s.access?7:-1),Vp(),mx(!s.admin&&!s.access?8:-1);}}var Fe=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:true,access:true},access:{admin:false,access:true},noAccess:{admin:false,access:false}};options=[{value:"Anna M.",label:"Anna M.",admin:false,access:true},{value:"Jhon T.",label:"Jhon T.",admin:true,access:true},{value:"Marie J.",label:"Marie J.",admin:false,access:false}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?r$1({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template"]],standalone:false,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"po-select",1),ww("ngModelChange",function(d){return sN(i.employee,d)||(i.employee=d),d}),sg(),r0(),Tl(2,"po-select",2),ww("ngModelChange",function(d){return sN(i.typeAccess,d)||(i.typeAccess=d),d}),sg(),r0(),Tl(3,"div",3)(4,"po-button",4),ht("p-click",function(){return i.changeAccess()}),sg()(),Tl(5,"po-multiselect",5),JE(6,at,9,4,"ng-template",6),sg()()),a&2&&(Vp(),nw("p-options",i.employees),Ew("ngModel",i.employee),o0(),Vp(),nw("p-options",i.typeAccessValue),Ew("ngModel",i.typeAccess),o0(),Vp(2),nw("p-disabled",!i.employee||!i.typeAccess),Vp(),nw("p-options",i.options)("p-hide-select-all",true));},dependencies:[nY,Sk,Qt,Fw,ohe,qhe,Sa],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"],changeDetection:1})}return l})();var pt=l=>({"docs-sample-code-tabs":l}),Be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-template-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect - Template"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-multiselect-template/sample-po-multiselect-template.component.css"),sg(),Tl(25,"pre",11),iN(26,`.containerFlex {
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
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-multiselect-template"),sg(),Gl(29,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,pt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Fe],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{http=f(ib);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(G(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(G(a=>a.items))}static \u0275fac=function(a){return new(a||l)};static \u0275prov=I({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Ne=(()=>{class l{samplePoMultiselectHeroesService=f(se);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s);}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s;}changeOptions(s){this.heroes=[...s];}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank");}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes"]],standalone:false,features:[we([se])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"po-multiselect",1),ww("ngModelChange",function(d){return sN(i.multiselect,d)||(i.multiselect=d),d}),ht("p-change",function(d){return i.changeOptions(d)}),sg(),r0(),Tl(2,"po-container",2),Gl(3,"po-table",3),sg()()),a&2&&(Vp(),Ew("ngModel",i.multiselect),nw("p-filter-service",i.filterService)("p-debounce-time",i.debounce),o0(),Vp(2),nw("p-columns",i.columns)("p-items",i.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[nY,Sk,dc,Fw,E3],encapsulation:2,changeDetection:1})}return l})();var dt=l=>({"docs-sample-code-tabs":l}),We=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect - Heroes - using API"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-multiselect-heroes"),sg(),Gl(27,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,dt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ne],encapsulation:2,changeDetection:1})}return l})();var ze=(()=>{class l{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0;}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array"]],standalone:false,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"div",1)(2,"po-select",2),ww("ngModelChange",function(d){return sN(i.fieldLabel,d)||(i.fieldLabel=d),d}),ht("p-change",function(d){return i.onChange(d)}),sg(),r0(),Tl(3,"po-select",3),ww("ngModelChange",function(d){return sN(i.fieldValue,d)||(i.fieldValue=d),d}),ht("p-change",function(d){return i.onChange(d)}),sg(),r0(),sg(),Tl(4,"div",1)(5,"div",0)(6,"po-multiselect",4),ww("ngModelChange",function(d){return sN(i.company,d)||(i.company=d),d}),sg(),r0(),sg(),Tl(7,"div",0),Gl(8,"po-info",5),sg()()()),a&2&&(Vp(2),nw("p-options",i.optionsSelect),Ew("ngModel",i.fieldLabel),o0(),Vp(),nw("p-options",i.optionsSelect),Ew("ngModel",i.fieldValue),o0(),Vp(3),nw("p-options",i.options)("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel),Ew("ngModel",i.company),o0(),Vp(2),nw("p-value",i.company));},dependencies:[nY,Sk,Fw,qhe,Yhe],encapsulation:2,changeDetection:1})}return l})();var bt=l=>({"docs-sample-code-tabs":l}),Ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-any-array-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Multiselect - Array Any"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-multiselect-any-array"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,bt,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ze],encapsulation:2,changeDetection:1})}return l})();var He=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-multiselect-doc"]],standalone:false,decls:1513,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoMultiselectComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),sg(),Tl(24,"p"),iN(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),sg(),Tl(26,"p"),iN(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),sg(),Tl(28,"p"),iN(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),Tl(30,"code"),iN(31,"p-filter-service"),sg(),iN(32,"."),sg(),Tl(33,"h4"),iN(34,"Boas pr\xE1ticas"),sg(),Tl(35,"ul")(36,"li"),iN(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),sg(),Tl(38,"li"),iN(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),sg()(),Tl(40,"h4"),iN(41,"Acessibilidade tratada no componente"),sg(),Tl(42,"p"),iN(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(44,"ul")(45,"li"),iN(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),sg(),Tl(47,"li"),iN(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),sg(),Tl(49,"li"),iN(50,"Utilize a tecla Esc do teclado para fechar o listbox."),sg(),Tl(51,"li"),iN(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),sg(),Tl(53,"li"),iN(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),sg()(),Tl(55,"h4"),iN(56,"Tokens customiz\xE1veis"),sg(),Tl(57,"p"),iN(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(59,"blockquote")(60,"p"),iN(61,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(62,"a",6),iN(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(64,"."),sg()(),Tl(65,"table")(66,"thead")(67,"tr")(68,"th"),iN(69,"Propriedade"),sg(),Tl(70,"th"),iN(71,"Descri\xE7\xE3o"),sg(),Tl(72,"th"),iN(73,"Valor Padr\xE3o"),sg()()(),Tl(74,"tbody")(75,"tr")(76,"td")(77,"strong"),iN(78,"Default Values"),sg()(),Gl(79,"td")(80,"td"),sg(),Tl(81,"tr")(82,"td")(83,"code"),iN(84,"--font-family"),sg()(),Tl(85,"td"),iN(86,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(87,"td")(88,"code"),iN(89,"var(--font-family-theme)"),sg()()(),Tl(90,"tr")(91,"td")(92,"code"),iN(93,"--font-size"),sg()(),Tl(94,"td"),iN(95,"Tamanho da fonte"),sg(),Tl(96,"td")(97,"code"),iN(98,"var(--font-size-default)"),sg()()(),Tl(99,"tr")(100,"td")(101,"code"),iN(102,"--text-color-placeholder"),sg(),iN(103," \xA0"),sg(),Tl(104,"td"),iN(105,"Cor do texto do placeholder"),sg(),Tl(106,"td")(107,"code"),iN(108,"var(--color-action-disabled)"),sg()()(),Tl(109,"tr")(110,"td")(111,"code"),iN(112,"--color"),sg()(),Tl(113,"td"),iN(114,"Cor principal do multiselect"),sg(),Tl(115,"td")(116,"code"),iN(117,"var(--color-neutral-dark-70)"),sg()()(),Tl(118,"tr")(119,"td")(120,"code"),iN(121,"--background"),sg()(),Tl(122,"td"),iN(123,"Cor de background"),sg(),Tl(124,"td")(125,"code"),iN(126,"var(--color-neutral-light-05)"),sg()()(),Tl(127,"tr")(128,"td")(129,"code"),iN(130,"--field-container-title-justify"),sg()(),Tl(131,"td"),iN(132,"Alinhamento horizontal do t\xEDtulo ("),Tl(133,"code"),iN(134,"justify-content"),sg(),iN(135,")"),sg(),Tl(136,"td")(137,"code"),iN(138,"space-between"),sg()()(),Tl(139,"tr")(140,"td")(141,"code"),iN(142,"--field-container-title-flex"),sg()(),Tl(143,"td"),iN(144,"Flex do t\xEDtulo ("),Tl(145,"code"),iN(146,"flex"),sg(),iN(147,")"),sg(),Tl(148,"td")(149,"code"),iN(150,"1 auto"),sg()()(),Tl(151,"tr")(152,"td")(153,"strong"),iN(154,"Hover"),sg()(),Gl(155,"td")(156,"td"),sg(),Tl(157,"tr")(158,"td")(159,"code"),iN(160,"--color-hover"),sg()(),Tl(161,"td"),iN(162,"Cor principal no estado hover"),sg(),Tl(163,"td")(164,"code"),iN(165,"var(--color-action-hover)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),iN(169,"--background-hover"),sg()(),Tl(170,"td"),iN(171,"Cor de background no estado hover"),sg(),Tl(172,"td")(173,"code"),iN(174,"var(--color-brand-01-lighter)"),sg()()(),Tl(175,"tr")(176,"td")(177,"strong"),iN(178,"Focused"),sg()(),Gl(179,"td")(180,"td"),sg(),Tl(181,"tr")(182,"td")(183,"code"),iN(184,"--color-focused"),sg()(),Tl(185,"td"),iN(186,"Cor principal no estado de focus"),sg(),Tl(187,"td")(188,"code"),iN(189,"var(--color-action-default)"),sg()()(),Tl(190,"tr")(191,"td")(192,"code"),iN(193,"--outline-color-focused"),sg(),iN(194," \xA0"),sg(),Tl(195,"td"),iN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),iN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),iN(203,"Disabled"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),iN(209,"--color-disabled"),sg()(),Tl(210,"td"),iN(211,"Cor principal no estado disabled"),sg(),Tl(212,"td")(213,"code"),iN(214,"var(--color-action-disabled)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),iN(218,"--background-disabled"),sg(),iN(219," \xA0"),sg(),Tl(220,"td"),iN(221,"Cor de background no estado disabled \xA0"),sg(),Tl(222,"td")(223,"code"),iN(224,"var(--color-neutral-light-20)"),sg()()(),Tl(225,"tr")(226,"td")(227,"strong"),iN(228,"Error"),sg()(),Gl(229,"td")(230,"td"),sg(),Tl(231,"tr")(232,"td")(233,"code"),iN(234,"--color-error"),sg()(),Tl(235,"td"),iN(236,"Cor principal no estado error"),sg(),Tl(237,"td")(238,"code"),iN(239,"var(--color-feedback-negative-base)"),sg()()()()()(),Tl(240,"div",7)(241,"h4",8),iN(242,"Seletor"),sg(),Tl(243,"pre",9),iN(244,`<po-multiselect
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
`),sg()(),Tl(245,"h4",10),iN(246,"Propriedades"),sg(),Tl(247,"table",11)(248,"tr",12)(249,"th",13),iN(250,"Nome"),sg(),Tl(251,"th",13),iN(252,"Tipo"),sg(),Tl(253,"th",13),iN(254,"Padr\xE3o"),sg(),Tl(255,"th",13),iN(256,"Descri\xE7\xE3o"),sg()(),Tl(257,"tr",14)(258,"td",15)(259,"div",16)(260,"span",17),iN(261," (p-additional-help)"),Gl(262,"br"),sg()(),Tl(263,"div",18),iN(264,"Deprecated"),sg()(),Tl(265,"td",19)(266,"code",20),iN(267,"EventEmitter"),sg()(),Tl(268,"td",21),iN(269,"-"),sg(),Tl(270,"td",22)(271,"em")(272,"strong"),iN(273,"(opcional)"),sg()(),Tl(274,"p"),iN(275,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(276,"blockquote")(277,"p"),iN(278,"Essa propriedade est\xE1 "),Tl(279,"strong"),iN(280,"depreciada"),sg(),iN(281," e ser\xE1 removida na vers\xE3o "),Tl(282,"code"),iN(283,"23.x.x"),sg(),iN(284,". Recomendamos utilizar a propriedade "),Tl(285,"code"),iN(286,"p-helper"),sg(),iN(287," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(288,"tr",14)(289,"td",15)(290,"div",23)(291,"span",24),iN(292," p-additional-help-tooltip"),Gl(293,"br"),sg()(),Tl(294,"div",18),iN(295,"Deprecated"),sg()(),Tl(296,"td",19)(297,"code",25),iN(298,"string"),sg()(),Tl(299,"td",21),iN(300,"-"),sg(),Tl(301,"td",22)(302,"em")(303,"strong"),iN(304,"(opcional)"),sg()(),Tl(305,"p"),iN(306,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(307,"code"),iN(308,"po-helper"),sg(),iN(309,`.
`),Tl(310,"strong"),iN(311,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(312,"blockquote")(313,"p"),iN(314,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(315,"blockquote")(316,"p"),iN(317,"Essa propriedade est\xE1 "),Tl(318,"strong"),iN(319,"depreciada"),sg(),iN(320," e ser\xE1 removida na vers\xE3o "),Tl(321,"code"),iN(322,"23.x.x"),sg(),iN(323,". Recomendamos utilizar a propriedade "),Tl(324,"code"),iN(325,"p-helper"),sg(),iN(326," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(327,"tr",14)(328,"td",15)(329,"div",23)(330,"span",24),iN(331," p-append-in-body"),Gl(332,"br"),sg()()(),Tl(333,"td",19)(334,"code",26),iN(335,"boolean"),sg()(),Tl(336,"td",21)(337,"p")(338,"code"),iN(339,"false"),sg()()(),Tl(340,"td",22)(341,"em")(342,"strong"),iN(343,"(opcional)"),sg()(),Tl(344,"p"),iN(345,"Define que o "),Tl(346,"code"),iN(347,"listbox"),sg(),iN(348," e/ou popover ("),Tl(349,"code"),iN(350,"p-helper"),sg(),iN(351," e/ou "),Tl(352,"code"),iN(353,"p-error-limit"),sg(),iN(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(355,"blockquote")(356,"p"),iN(357,"Quando utilizado com "),Tl(358,"code"),iN(359,"p-helper"),sg(),iN(360,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(361,"tr",14)(362,"td",15)(363,"div",23)(364,"span",24),iN(365," p-auto-focus"),Gl(366,"br"),sg()()(),Tl(367,"td",19)(368,"code",26),iN(369,"boolean"),sg()(),Tl(370,"td",21)(371,"p")(372,"code"),iN(373,"false"),sg()()(),Tl(374,"td",22)(375,"em")(376,"strong"),iN(377,"(opcional)"),sg()(),Tl(378,"p"),iN(379,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(380,"blockquote")(381,"p"),iN(382,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(383,"tr",14)(384,"td",15)(385,"div",23)(386,"span",24),iN(387," p-auto-height"),Gl(388,"br"),sg()()(),Tl(389,"td",19)(390,"code",26),iN(391,"boolean"),sg()(),Tl(392,"td",21)(393,"p")(394,"code"),iN(395,"false"),sg()()(),Tl(396,"td",22)(397,"em")(398,"strong"),iN(399,"(opcional)"),sg()(),Tl(400,"p"),iN(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),sg(),Tl(402,"blockquote")(403,"p"),iN(404,"O valor padr\xE3o ser\xE1 "),Tl(405,"code"),iN(406,"true"),sg(),iN(407," quando houver servi\xE7o ("),Tl(408,"code"),iN(409,"p-filter-service"),sg(),iN(410,")."),sg()()()(),Tl(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),iN(415," (p-blur)"),Gl(416,"br"),sg()()(),Tl(417,"td",19)(418,"code",20),iN(419,"EventEmitter"),sg()(),Tl(420,"td",21),iN(421,"-"),sg(),Tl(422,"td",22)(423,"em")(424,"strong"),iN(425,"(opcional)"),sg()(),Tl(426,"p"),iN(427,"Evento disparado ao sair do campo."),sg()()(),Tl(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),iN(432," (p-change)"),Gl(433,"br"),sg()()(),Tl(434,"td",19)(435,"code",20),iN(436,"EventEmitter"),sg()(),Tl(437,"td",21),iN(438,"-"),sg(),Tl(439,"td",22)(440,"em")(441,"strong"),iN(442,"(opcional)"),sg()(),Tl(443,"p"),iN(444,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),sg()()(),Tl(445,"tr",14)(446,"td",15)(447,"div",23)(448,"span",24),iN(449," p-compact-label"),Gl(450,"br"),sg()()(),Tl(451,"td",19)(452,"code",26),iN(453,"boolean"),sg()(),Tl(454,"td",21)(455,"p")(456,"code"),iN(457,"false"),sg()()(),Tl(458,"td",22)(459,"em")(460,"strong"),iN(461,"(opcional)"),sg()(),Tl(462,"p"),iN(463,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(464,"p"),iN(465,"Quando habilitado ("),Tl(466,"code"),iN(467,"true"),sg(),iN(468,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(469,"ul")(470,"li")(471,"code"),iN(472,"po-label"),sg()(),Tl(473,"li")(474,"code"),iN(475,"p-requirement (showRequired)"),sg()(),Tl(476,"li")(477,"code"),iN(478,"po-helper"),sg()()(),Tl(479,"p"),iN(480,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(481,"p"),iN(482,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(483,"ul")(484,"li")(485,"code"),iN(486,"--field-container-title-justify"),sg()(),Tl(487,"li")(488,"code"),iN(489,"--field-container-title-flex"),sg()()(),Tl(490,"p"),iN(491,"Exemplo:"),sg(),Tl(492,"pre")(493,"code"),iN(494,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(495,"p"),iN(496,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(497,"tr",14)(498,"td",15)(499,"div",23)(500,"span",24),iN(501," p-debounce-time"),Gl(502,"br"),sg()()(),Tl(503,"td",19)(504,"code",27),iN(505,"number"),sg()(),Tl(506,"td",21)(507,"p")(508,"code"),iN(509,"400"),sg()()(),Tl(510,"td",22)(511,"em")(512,"strong"),iN(513,"(opcional)"),sg()(),Tl(514,"p"),iN(515,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),sg(),Tl(516,"blockquote")(517,"p"),iN(518,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Tl(519,"code"),iN(520,"p-filter-service"),sg(),iN(521,") e somente ser\xE1 aceito valor maior do que "),Tl(522,"em"),iN(523,"zero"),sg(),iN(524,"."),sg()()()(),Tl(525,"tr",14)(526,"td",15)(527,"div",23)(528,"span",24),iN(529," p-disabled"),Gl(530,"br"),sg()()(),Tl(531,"td",19)(532,"code",26),iN(533,"boolean"),sg()(),Tl(534,"td",21)(535,"p")(536,"code"),iN(537,"false"),sg()()(),Tl(538,"td",22)(539,"em")(540,"strong"),iN(541,"(opcional)"),sg()(),Tl(542,"p"),iN(543,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(544,"tr",14)(545,"td",15)(546,"div",23)(547,"span",24),iN(548," p-error-limit"),Gl(549,"br"),sg()()(),Tl(550,"td",19)(551,"code",26),iN(552,"boolean"),sg()(),Tl(553,"td",21)(554,"p")(555,"code"),iN(556,"false"),sg()()(),Tl(557,"td",22)(558,"em")(559,"strong"),iN(560,"(opcional)"),sg()(),Tl(561,"p"),iN(562,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(563,"blockquote")(564,"p"),iN(565,"Caso essa propriedade seja definida como "),Tl(566,"code"),iN(567,"true"),sg(),iN(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(569,"tr",14)(570,"td",15)(571,"div",23)(572,"span",24),iN(573," p-field-error-message"),Gl(574,"br"),sg()()(),Tl(575,"td",19)(576,"code",25),iN(577,"string"),sg()(),Tl(578,"td",21),iN(579,"-"),sg(),Tl(580,"td",22)(581,"em")(582,"strong"),iN(583,"(opcional)"),sg()(),Tl(584,"p"),iN(585,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(586,"blockquote")(587,"p"),iN(588,"Necess\xE1rio que a propriedade "),Tl(589,"code"),iN(590,"p-required"),sg(),iN(591," esteja habilitada."),sg()()()(),Tl(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),iN(596," p-field-label"),Gl(597,"br"),sg()()(),Tl(598,"td",19)(599,"code",25),iN(600,"string"),sg()(),Tl(601,"td",21)(602,"p")(603,"code"),iN(604,"label"),sg()()(),Tl(605,"td",22)(606,"em")(607,"strong"),iN(608,"(opcional)"),sg()(),Tl(609,"p"),iN(610,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(611,"code"),iN(612,"p-options"),sg(),iN(613,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),sg(),Tl(614,"p"),iN(615,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Tl(616,"code"),iN(617,"PoMultiSelectOption"),sg(),iN(618,"."),sg()()(),Tl(619,"tr",14)(620,"td",15)(621,"div",23)(622,"span",24),iN(623," p-field-value"),Gl(624,"br"),sg()()(),Tl(625,"td",19)(626,"code",25),iN(627,"string"),sg()(),Tl(628,"td",21)(629,"p")(630,"code"),iN(631,"value"),sg()()(),Tl(632,"td",22)(633,"em")(634,"strong"),iN(635,"(opcional)"),sg()(),Tl(636,"p"),iN(637,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(638,"code"),iN(639,"p-options"),sg(),iN(640,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),sg(),Tl(641,"p"),iN(642,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),Tl(643,"code"),iN(644,"PoMultiSelectOption"),sg(),iN(645,"."),sg()()(),Tl(646,"tr",14)(647,"td",15)(648,"div",23)(649,"span",24),iN(650," p-filter-mode"),Gl(651,"br"),sg()()(),Tl(652,"td",19)(653,"code",28),iN(654,"PoMultiselectFilterMode"),sg()(),Tl(655,"td",21)(656,"p")(657,"code"),iN(658,"startsWith"),sg()()(),Tl(659,"td",22)(660,"em")(661,"strong"),iN(662,"(opcional)"),sg()(),Tl(663,"p"),iN(664,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),sg()()(),Tl(665,"tr",14)(666,"td",15)(667,"div",23)(668,"span",24),iN(669," p-filter-service"),Gl(670,"br"),sg()()(),Tl(671,"td",19)(672,"code",25),iN(673,"string "),sg(),Tl(674,"code",29),iN(675," PoMultiselectFilter"),sg()(),Tl(676,"td",21),iN(677,"-"),sg(),Tl(678,"td",22)(679,"em")(680,"strong"),iN(681,"(opcional)"),sg()(),Tl(682,"p"),iN(683,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),sg(),Tl(684,"p"),iN(685,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),Tl(686,"code"),iN(687,"PoMultiselectFilter"),sg(),iN(688,"."),sg(),Tl(689,"p"),iN(690,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),Tl(691,"a",30),iN(692,"API PO UI"),sg(),iN(693," e utilizar as propriedades "),Tl(694,"code"),iN(695,"p-field-label"),sg(),iN(696," e "),Tl(697,"code"),iN(698,"p-field-value"),sg(),iN(699," para a constru\xE7\xE3o da lista de itens."),sg(),Tl(700,"p"),iN(701,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),sg(),Tl(702,"pre")(703,"code"),iN(704,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),sg()(),Tl(705,"p"),iN(706,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),sg(),Tl(707,"pre")(708,"code"),iN(709,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),sg()()()(),Tl(710,"tr",14)(711,"td",15)(712,"div",23)(713,"span",24),iN(714," p-help"),Gl(715,"br"),sg()()(),Tl(716,"td",19)(717,"code",25),iN(718,"string"),sg()(),Tl(719,"td",21),iN(720,"-"),sg(),Tl(721,"td",22)(722,"em")(723,"strong"),iN(724,"(opcional)"),sg()(),Tl(725,"p"),iN(726,"Texto de apoio para o campo."),sg()()(),Tl(727,"tr",14)(728,"td",15)(729,"div",23)(730,"span",24),iN(731," p-hide-search"),Gl(732,"br"),sg()()(),Tl(733,"td",19)(734,"code",26),iN(735,"boolean"),sg()(),Tl(736,"td",21)(737,"p")(738,"code"),iN(739,"false"),sg()()(),Tl(740,"td",22)(741,"em")(742,"strong"),iN(743,"(opcional)"),sg()(),Tl(744,"p"),iN(745,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),sg()()(),Tl(746,"tr",14)(747,"td",15)(748,"div",23)(749,"span",24),iN(750," p-hide-select-all"),Gl(751,"br"),sg()()(),Tl(752,"td",19)(753,"code",26),iN(754,"boolean"),sg()(),Tl(755,"td",21)(756,"p")(757,"code"),iN(758,"false"),sg()()(),Tl(759,"td",22)(760,"em")(761,"strong"),iN(762,"(opcional)"),sg()(),Tl(763,"p"),iN(764,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),sg()()(),Tl(765,"tr",14)(766,"td",15)(767,"div",16)(768,"span",17),iN(769," (p-keydown)"),Gl(770,"br"),sg()()(),Tl(771,"td",19)(772,"code",20),iN(773,"EventEmitter"),sg()(),Tl(774,"td",21),iN(775,"-"),sg(),Tl(776,"td",22)(777,"em")(778,"strong"),iN(779,"(opcional)"),sg()(),Tl(780,"p"),iN(781,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(782,"code"),iN(783,"KeyboardEvent"),sg(),iN(784," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(785,"tr",14)(786,"td",15)(787,"div",23)(788,"span",24),iN(789," p-label"),Gl(790,"br"),sg()()(),Tl(791,"td",19)(792,"code",25),iN(793,"string"),sg()(),Tl(794,"td",21),iN(795,"-"),sg(),Tl(796,"td",22)(797,"em")(798,"strong"),iN(799,"(opcional)"),sg()(),Tl(800,"p"),iN(801,"Label no componente."),sg()()(),Tl(802,"tr",14)(803,"td",15)(804,"div",23)(805,"span",24),iN(806," p-label-text-wrap"),Gl(807,"br"),sg()()(),Tl(808,"td",19)(809,"code",26),iN(810,"boolean"),sg()(),Tl(811,"td",21)(812,"p")(813,"code"),iN(814,"false"),sg()()(),Tl(815,"td",22)(816,"em")(817,"strong"),iN(818,"(opcional)"),sg()(),Tl(819,"p"),iN(820,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(821,"code"),iN(822,"p-label"),sg(),iN(823,". Quando "),Tl(824,"code"),iN(825,"p-label-text-wrap"),sg(),iN(826,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(827,"tr",14)(828,"td",15)(829,"div",23)(830,"span",24),iN(831," p-listbox-control-position"),Gl(832,"br"),sg()()(),Tl(833,"td",19)(834,"code",31),iN(835,"'top' "),sg(),Tl(836,"code",32),iN(837," 'bottom'"),sg()(),Tl(838,"td",21)(839,"p")(840,"code"),iN(841,"bottom"),sg()()(),Tl(842,"td",22)(843,"em")(844,"strong"),iN(845,"(opcional)"),sg()(),Tl(846,"p"),iN(847,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Tl(848,"code"),iN(849,"listbox"),sg(),iN(850," em rela\xE7\xE3o ao campo ("),Tl(851,"code"),iN(852,"top"),sg(),iN(853," ou "),Tl(854,"code"),iN(855,"bottom"),sg(),iN(856,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg()()(),Tl(857,"tr",14)(858,"td",15)(859,"div",23)(860,"span",24),iN(861," p-literals"),Gl(862,"br"),sg()()(),Tl(863,"td",19)(864,"code",33),iN(865,"PoMultiselectLiterals"),sg()(),Tl(866,"td",21),iN(867,"-"),sg(),Tl(868,"td",22)(869,"em")(870,"strong"),iN(871,"(opcional)"),sg()(),Tl(872,"p"),iN(873,"Objeto com as literais usadas no "),Tl(874,"code"),iN(875,"po-multiselect"),sg(),iN(876,"."),sg(),Tl(877,"p"),iN(878,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(879,"pre")(880,"code"),iN(881,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),sg()(),Tl(882,"p"),iN(883,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(884,"pre")(885,"code"),iN(886,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),sg()(),Tl(887,"p"),iN(888,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),sg(),Tl(889,"pre")(890,"code"),iN(891,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),sg()(),Tl(892,"blockquote")(893,"p"),iN(894,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(895,"a",34)(896,"code"),iN(897,"PoI18nService"),sg()(),iN(898," ou do browser."),sg()()()(),Tl(899,"tr",14)(900,"td",15)(901,"div",23)(902,"span",24),iN(903," p-loading"),Gl(904,"br"),sg()()(),Tl(905,"td",19)(906,"code",26),iN(907,"boolean"),sg()(),Tl(908,"td",21)(909,"p")(910,"code"),iN(911,"false"),sg()()(),Tl(912,"td",22)(913,"em")(914,"strong"),iN(915,"(opcional)"),sg()(),Tl(916,"p"),iN(917,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(918,"tr",14)(919,"td",15)(920,"div",23)(921,"span",24),iN(922," name"),Gl(923,"br"),sg()()(),Tl(924,"td",19)(925,"code",25),iN(926,"string"),sg()(),Tl(927,"td",21),iN(928,"-"),sg(),Tl(929,"td",22)(930,"p"),iN(931,"Nome do componente."),sg()()(),Tl(932,"tr",14)(933,"td",15)(934,"div",23)(935,"span",24),iN(936," p-optional"),Gl(937,"br"),sg()()(),Tl(938,"td",19)(939,"code",26),iN(940,"boolean"),sg()(),Tl(941,"td",21)(942,"p")(943,"code"),iN(944,"false"),sg()()(),Tl(945,"td",22)(946,"em")(947,"strong"),iN(948,"(opcional)"),sg()(),Tl(949,"p"),iN(950,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(951,"blockquote")(952,"p"),iN(953,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(954,"ul")(955,"li"),iN(956,"O campo conter "),Tl(957,"code"),iN(958,"p-required"),sg(),iN(959,";"),sg(),Tl(960,"li"),iN(961,"N\xE3o possuir "),Tl(962,"code"),iN(963,"p-help"),sg(),iN(964," e/ou "),Tl(965,"code"),iN(966,"p-label"),sg(),iN(967,"."),sg()()()(),Tl(968,"tr",14)(969,"td",15)(970,"div",23)(971,"span",24),iN(972," p-options"),Gl(973,"br"),sg()()(),Tl(974,"td",19)(975,"code",35),iN(976,"Array<PoMultiselectOption "),sg(),Tl(977,"code",36),iN(978," any>"),sg()(),Tl(979,"td",21),iN(980,"-"),sg(),Tl(981,"td",22)(982,"p"),iN(983,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),sg(),Tl(984,"blockquote")(985,"p"),iN(986,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),sg()(),Tl(987,"pre")(988,"code"),iN(989,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),sg()(),Tl(990,"blockquote")(991,"p"),iN(992,"A lista pode ser definida utilizando um array com o valor representando "),Tl(993,"code"),iN(994,"value"),sg(),iN(995," e "),Tl(996,"code"),iN(997,"label"),sg(),iN(998," das seguintes formas:"),sg()(),Tl(999,"pre")(1e3,"code"),iN(1001,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),sg()(),Tl(1002,"pre")(1003,"code"),iN(1004,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),sg()(),Tl(1005,"ul")(1006,"li"),iN(1007,"Aconselha-se utilizar valores distintos no "),Tl(1008,"code"),iN(1009,"label"),sg(),iN(1010," e "),Tl(1011,"code"),iN(1012,"value"),sg(),iN(1013," dos itens."),sg()()()(),Tl(1014,"tr",14)(1015,"td",15)(1016,"div",23)(1017,"span",24),iN(1018," p-placeholder"),Gl(1019,"br"),sg()()(),Tl(1020,"td",19)(1021,"code",25),iN(1022,"string"),sg()(),Tl(1023,"td",21),iN(1024,"-"),sg(),Tl(1025,"td",22)(1026,"em")(1027,"strong"),iN(1028,"(opcional)"),sg()(),Tl(1029,"p"),iN(1030,"Mensagem apresentada enquanto o campo estiver vazio."),sg()()(),Tl(1031,"tr",14)(1032,"td",15)(1033,"div",23)(1034,"span",24),iN(1035," p-placeholder-search"),Gl(1036,"br"),sg()()(),Tl(1037,"td",19)(1038,"code",25),iN(1039,"string"),sg()(),Tl(1040,"td",21)(1041,"p")(1042,"code"),iN(1043,"Buscar"),sg()()(),Tl(1044,"td",22)(1045,"em")(1046,"strong"),iN(1047,"(opcional)"),sg()(),Tl(1048,"p"),iN(1049,"Placeholder do campo de pesquisa."),sg(),Tl(1050,"blockquote")(1051,"p"),iN(1052,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Tl(1053,"tr",14)(1054,"td",15)(1055,"div",23)(1056,"span",24),iN(1057," p-helper"),Gl(1058,"br"),sg()()(),Tl(1059,"td",19)(1060,"code",37),iN(1061,"PoHelperOptions "),sg(),Tl(1062,"code",25),iN(1063," string"),sg()(),Tl(1064,"td",21),iN(1065,"-"),sg(),Tl(1066,"td",22)(1067,"em")(1068,"strong"),iN(1069,"(opcional)"),sg()(),Tl(1070,"p"),iN(1071,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1072,"code"),iN(1073,"p-label"),sg(),iN(1074," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1075,"code"),iN(1076,"p-label"),sg(),iN(1077,"."),sg(),Tl(1078,"blockquote")(1079,"p"),iN(1080,"Para mais informa\xE7\xF5es acesse: "),Tl(1081,"a",38),iN(1082,"https://po-ui.io/documentation/po-helper"),sg(),iN(1083,"."),sg()(),Tl(1084,"blockquote")(1085,"p"),iN(1086,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1087,"code"),iN(1088,"p-additional-help-tooltip"),sg(),iN(1089," e "),Tl(1090,"code"),iN(1091,"p-additional-help"),sg(),iN(1092,") ser\xE1 ignorado."),sg()()()(),Tl(1093,"tr",14)(1094,"td",15)(1095,"div",23)(1096,"span",24),iN(1097," p-required"),Gl(1098,"br"),sg()()(),Tl(1099,"td",19)(1100,"code",26),iN(1101,"boolean"),sg()(),Tl(1102,"td",21)(1103,"p")(1104,"code"),iN(1105,"false"),sg()()(),Tl(1106,"td",22)(1107,"em")(1108,"strong"),iN(1109,"(opcional)"),sg()(),Tl(1110,"p"),iN(1111,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1112,"blockquote")(1113,"p"),iN(1114,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1115,"code"),iN(1116,"(p-disabled)"),sg(),iN(1117,"."),sg()()()(),Tl(1118,"tr",14)(1119,"td",15)(1120,"div",23)(1121,"span",24),iN(1122," p-show-required"),Gl(1123,"br"),sg()()(),Tl(1124,"td",19)(1125,"code",26),iN(1126,"boolean"),sg()(),Tl(1127,"td",21),iN(1128,"-"),sg(),Tl(1129,"td",22)(1130,"p"),iN(1131,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1132,"blockquote")(1133,"p"),iN(1134,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1135,"ul")(1136,"li"),iN(1137,"N\xE3o possuir "),Tl(1138,"code"),iN(1139,"p-help"),sg(),iN(1140," e/ou "),Tl(1141,"code"),iN(1142,"p-label"),sg(),iN(1143,"."),sg()()()(),Tl(1144,"tr",14)(1145,"td",15)(1146,"div",23)(1147,"span",24),iN(1148," p-size"),Gl(1149,"br"),sg()()(),Tl(1150,"td",19)(1151,"code",25),iN(1152,"string"),sg()(),Tl(1153,"td",21)(1154,"p")(1155,"code"),iN(1156,"medium"),sg()()(),Tl(1157,"td",22)(1158,"em")(1159,"strong"),iN(1160,"(opcional)"),sg()(),Tl(1161,"p"),iN(1162,"Define o tamanho do componente:"),sg(),Tl(1163,"ul")(1164,"li")(1165,"code"),iN(1166,"small"),sg(),iN(1167,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1168,"li")(1169,"code"),iN(1170,"medium"),sg(),iN(1171,": altura do input como 44px."),sg()(),Tl(1172,"blockquote")(1173,"p"),iN(1174,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1175,"code"),iN(1176,"medium"),sg(),iN(1177,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1178,"a",39),iN(1179,"po-theme"),sg(),iN(1180,"."),sg()()()(),Tl(1181,"tr",14)(1182,"td",15)(1183,"div",23)(1184,"span",24),iN(1185," p-sort"),Gl(1186,"br"),sg()()(),Tl(1187,"td",19)(1188,"code",26),iN(1189,"boolean"),sg()(),Tl(1190,"td",21)(1191,"p")(1192,"code"),iN(1193,"false"),sg()()(),Tl(1194,"td",22)(1195,"em")(1196,"strong"),iN(1197,"(opcional)"),sg()(),Tl(1198,"p"),iN(1199,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),sg()()()(),Tl(1200,"h3",10),iN(1201,"M\xE9todos"),sg(),Tl(1202,"table",40)(1203,"tr",14)(1204,"th",41)(1205,"div",23)(1206,"h4")(1207,"span",24),iN(1208," focus "),sg()()()()(),Tl(1209,"tr",22)(1210,"td",22)(1211,"p"),iN(1212,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1213,"p"),iN(1214,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1215,"pre")(1216,"code"),iN(1217,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),sg()()()()(),Gl(1218,"br"),Tl(1219,"table",40)(1220,"tr",14)(1221,"th",41)(1222,"div",23)(1223,"h4")(1224,"span",24),iN(1225," showAdditionalHelp "),sg()()()()(),Tl(1226,"tr",22)(1227,"td",22)(1228,"p"),iN(1229,"M\xE9todo que exibe "),Tl(1230,"code"),iN(1231,"p-helper"),sg(),iN(1232," ou executa a a\xE7\xE3o definida em "),Tl(1233,"code"),iN(1234,"p-helper{eventOnClick}"),sg(),iN(1235," ou em "),Tl(1236,"code"),iN(1237,"p-additionalHelp"),sg(),iN(1238,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1239,"code"),iN(1240,"p-keydown"),sg(),iN(1241,"."),sg(),Tl(1242,"blockquote")(1243,"p"),iN(1244,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1245,"code"),iN(1246,"po-helper"),sg(),iN(1247," quando o componente estiver com foco."),sg()(),Tl(1248,"pre")(1249,"code"),iN(1250,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),sg()(),Tl(1251,"pre")(1252,"code"),iN(1253,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1254,"br"),Tl(1255,"h3"),iN(1256,"Interfaces"),sg(),Tl(1257,"h4",42)(1258,"code",5),iN(1259,"PoMultiselectFilter"),sg()(),Tl(1260,"div",2)(1261,"p"),iN(1262,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),sg()(),Tl(1263,"h4",10),iN(1264,"M\xE9todos"),sg(),Tl(1265,"table",40)(1266,"tr",14)(1267,"th",41)(1268,"div",23)(1269,"h4")(1270,"span",24),iN(1271," getFilteredData "),sg()()()()(),Tl(1272,"tr",22)(1273,"td",22)(1274,"p"),iN(1275,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),Tl(1276,"code"),iN(1277,"PoMultiselectOption"),sg(),iN(1278,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),sg()()()(),Tl(1279,"h5")(1280,"b"),iN(1281,"Par\xE2metros"),sg()(),Tl(1282,"table",11)(1283,"tr",12)(1284,"th",13),iN(1285,"Nome"),sg(),Tl(1286,"th",13),iN(1287,"Tipo"),sg(),Tl(1288,"th",13),iN(1289,"Descri\xE7\xE3o"),sg()(),Tl(1290,"tr",14)(1291,"td",15),iN(1292," params"),sg(),Tl(1293,"td",19)(1294,"code",43),iN(1295," { property: string, value: string } "),sg()(),Tl(1296,"td",22)(1297,"p"),iN(1298,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),sg()()()(),Gl(1299,"br"),Tl(1300,"table",40)(1301,"tr",14)(1302,"th",41)(1303,"div",23)(1304,"h4")(1305,"span",24),iN(1306," getObjectsByValues "),sg()()()()(),Tl(1307,"tr",22)(1308,"td",22)(1309,"p"),iN(1310,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),Tl(1311,"code"),iN(1312,"PoMultiselectOption"),sg(),iN(1313,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),sg()()()(),Tl(1314,"h5")(1315,"b"),iN(1316,"Par\xE2metros"),sg()(),Tl(1317,"table",11)(1318,"tr",12)(1319,"th",13),iN(1320,"Nome"),sg(),Tl(1321,"th",13),iN(1322,"Tipo"),sg(),Tl(1323,"th",13),iN(1324,"Descri\xE7\xE3o"),sg()(),Tl(1325,"tr",14)(1326,"td",15),iN(1327," values"),sg(),Tl(1328,"td",19)(1329,"code",44),iN(1330," Array<string "),sg(),Tl(1331,"code",45),iN(1332," number> "),sg()(),Tl(1333,"td",22)(1334,"p"),iN(1335,"Array com os valores a serem buscados."),sg()()()(),Gl(1336,"br"),Tl(1337,"h4",42)(1338,"code",5),iN(1339,"PoMultiselectLiterals"),sg()(),Tl(1340,"div",2)(1341,"p"),iN(1342,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1343,"code"),iN(1344,"po-multiselect"),sg(),iN(1345,"."),sg()(),Tl(1346,"h4",10),iN(1347,"Propriedades"),sg(),Tl(1348,"table",11)(1349,"tr",12)(1350,"th",13),iN(1351,"Nome"),sg(),Tl(1352,"th",13),iN(1353,"Tipo"),sg(),Tl(1354,"th",13),iN(1355,"Descri\xE7\xE3o"),sg()(),Tl(1356,"tr",14)(1357,"td",15)(1358,"div",23)(1359,"span",24),iN(1360," noData"),Gl(1361,"br"),sg()()(),Tl(1362,"td",19)(1363,"code",25),iN(1364,"string"),sg()(),Tl(1365,"td",22)(1366,"em")(1367,"strong"),iN(1368,"(opcional)"),sg()(),Tl(1369,"p"),iN(1370,"Texto exibido quando n\xE3o houver dados encontrados na busca."),sg()()(),Tl(1371,"tr",14)(1372,"td",15)(1373,"div",23)(1374,"span",24),iN(1375," placeholderSearch"),Gl(1376,"br"),sg()()(),Tl(1377,"td",19)(1378,"code",25),iN(1379,"string"),sg()(),Tl(1380,"td",22)(1381,"em")(1382,"strong"),iN(1383,"(opcional)"),sg()(),Tl(1384,"p"),iN(1385,"Texto do "),Tl(1386,"em"),iN(1387,"placeholder"),sg(),iN(1388," do campo de busca."),sg()()(),Tl(1389,"tr",14)(1390,"td",15)(1391,"div",23)(1392,"span",24),iN(1393," selectAll"),Gl(1394,"br"),sg()()(),Tl(1395,"td",19)(1396,"code",25),iN(1397,"string"),sg()(),Tl(1398,"td",22)(1399,"em")(1400,"strong"),iN(1401,"(opcional)"),sg()(),Tl(1402,"p"),iN(1403,"Texto exibido no bot\xE3o de selecionar todos."),sg()()(),Tl(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),iN(1408," selectItem"),Gl(1409,"br"),sg()()(),Tl(1410,"td",19)(1411,"code",25),iN(1412,"string"),sg()(),Tl(1413,"td",22)(1414,"em")(1415,"strong"),iN(1416,"(opcional)"),sg()(),Tl(1417,"p"),iN(1418,"Texto exibido na propriedade placeholder."),sg()()()(),Tl(1419,"h4",42)(1420,"code",5),iN(1421,"PoMultiselectOption"),sg()(),Tl(1422,"div",2)(1423,"p"),iN(1424,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),sg()(),Tl(1425,"h4",10),iN(1426,"Propriedades"),sg(),Tl(1427,"table",11)(1428,"tr",12)(1429,"th",13),iN(1430,"Nome"),sg(),Tl(1431,"th",13),iN(1432,"Tipo"),sg(),Tl(1433,"th",13),iN(1434,"Descri\xE7\xE3o"),sg()(),Tl(1435,"tr",14)(1436,"td",15)(1437,"div",23)(1438,"span",24),iN(1439," label"),Gl(1440,"br"),sg()()(),Tl(1441,"td",19)(1442,"code",25),iN(1443,"string"),sg()(),Tl(1444,"td",22)(1445,"p"),iN(1446,"Label exibido nos itens da lista."),sg()()(),Tl(1447,"tr",14)(1448,"td",15)(1449,"div",23)(1450,"span",24),iN(1451," value"),Gl(1452,"br"),sg()()(),Tl(1453,"td",19)(1454,"code",25),iN(1455,"string "),sg(),Tl(1456,"code",27),iN(1457," number"),sg()(),Tl(1458,"td",22)(1459,"p"),iN(1460,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),sg()()()(),Tl(1461,"h3"),iN(1462,"Enums"),sg(),Tl(1463,"h4",4)(1464,"code",5),iN(1465,"PoMultiselectFilterMode"),sg()(),Tl(1466,"div",2)(1467,"p"),iN(1468,"Define o tipo de busca usado no po-multiselect."),sg()(),Tl(1469,"h4",10),iN(1470,"Propriedades"),sg(),Tl(1471,"table",11)(1472,"tr",12)(1473,"th",13),iN(1474,"Nome"),sg(),Tl(1475,"th",13),iN(1476,"Descri\xE7\xE3o"),sg()(),Tl(1477,"tr",14)(1478,"td",15)(1479,"div",23)(1480,"span",24),iN(1481," startsWith"),Gl(1482,"br"),sg()()(),Tl(1483,"td",22)(1484,"p"),iN(1485,"Verifica se o texto "),Tl(1486,"em"),iN(1487,"inicia"),sg(),iN(1488," com o valor pesquisado."),sg()()(),Tl(1489,"tr",14)(1490,"td",15)(1491,"div",23)(1492,"span",24),iN(1493," contains"),Gl(1494,"br"),sg()()(),Tl(1495,"td",22)(1496,"p"),iN(1497,"Verifica se o texto "),Tl(1498,"em"),iN(1499,"cont\xE9m"),sg(),iN(1500," o valor pesquisado."),sg()()(),Tl(1501,"tr",14)(1502,"td",15)(1503,"div",23)(1504,"span",24),iN(1505," endsWith"),Gl(1506,"br"),sg()()(),Tl(1507,"td",22)(1508,"p"),iN(1509,"Verifica se o texto "),Tl(1510,"em"),iN(1511,"finaliza"),sg(),iN(1512," com o valor pesquisado."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var je=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-multiselect-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),sg()()()),a&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,Ve,Ae,Le,qe,Be,We,Ie,He],encapsulation:2,changeDetection:1})}return l})();var Et=[{path:"",component:je}],Re=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[DL.forChild(Et),DL]})}return l})();var vn=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,Re]})}return l})();export{vn as DocPoMultiselectModule};