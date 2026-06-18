import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,r as rb,c_ as t,c as r$1,w,c$ as Xi,aW as Yp,cM as nY,cN as lm,W,b$ as ET,d0 as J0,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,aI as dc,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,b5 as jhe,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,X as we$1,bd as xx,a7 as uN,cQ as Rk,cR as Tk,b7 as A3,d1 as OO,a4 as vN,aq as ux,br as oN,a5 as _N,at as dx,a3 as pNe,aA as Tx,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Wl(0,"po-lookup",0);},dependencies:[J0],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Lookup Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-lookup-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Qe,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,we],encapsulation:2})}return a})();var A=(()=>{class a{httpClient=f(rb);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService=f(A);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Xi.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we$1([A])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=Ex();Sl(0,"po-lookup",1),Ew("ngModelChange",function(m){return Xy(c),tN(o.lookup,m)||(o.lookup=m),Qy(m)}),ht("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"po-container",2)(3,"div",3),Wl(4,"po-info",4)(5,"po-info",5),sg()(),Wl(6,"po-divider"),Sl(7,"form",null,0)(9,"po-input",6),Ew("ngModelChange",function(m){return Xy(c),tN(o.label,m)||(o.label=m),Qy(m)}),sg(),JA(),Sl(10,"po-checkbox-group",7),Ew("ngModelChange",function(m){return Xy(c),tN(o.columnsName,m)||(o.columnsName=m),Qy(m)}),ht("p-change",function(){return o.updateColumns()}),sg(),JA(),Sl(11,"po-select",8),Ew("ngModelChange",function(m){return Xy(c),tN(o.fieldLabel,m)||(o.fieldLabel=m),Qy(m)}),sg(),JA(),Sl(12,"po-select",9),Ew("ngModelChange",function(m){return Xy(c),tN(o.fieldValue,m)||(o.fieldValue=m),Qy(m)}),sg(),JA(),Sl(13,"po-input",10),Ew("ngModelChange",function(m){return Xy(c),tN(o.filterService,m)||(o.filterService=m),Qy(m)}),sg(),JA(),Sl(14,"po-input",11),Ew("ngModelChange",function(m){return Xy(c),tN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Qy(m)}),sg(),JA(),Sl(15,"po-input",12),Ew("ngModelChange",function(m){return Xy(c),tN(o.help,m)||(o.help=m),Qy(m)}),sg(),JA(),Sl(16,"po-input",13),Ew("ngModelChange",function(m){return Xy(c),tN(o.helperText,m)||(o.helperText=m),Qy(m)}),sg(),JA(),Sl(17,"po-input",14),Ew("ngModelChange",function(m){return Xy(c),tN(o.placeholder,m)||(o.placeholder=m),Qy(m)}),sg(),JA(),Sl(18,"po-input",15),Ew("ngModelChange",function(m){return Xy(c),tN(o.literals,m)||(o.literals=m),Qy(m)}),ht("p-change",function(){return o.changeLiterals()}),sg(),JA(),Sl(19,"po-input",16),Ew("ngModelChange",function(m){return Xy(c),tN(o.formatField,m)||(o.formatField=m),Qy(m)}),ht("p-change",function(m){return o.onFieldFormatChange(m)}),sg(),JA(),Sl(20,"po-checkbox-group",17),Ew("ngModelChange",function(m){return Xy(c),tN(o.properties,m)||(o.properties=m),Qy(m)}),sg(),JA(),Sl(21,"po-radio-group",18),Ew("ngModelChange",function(m){return Xy(c),tN(o.spacing,m)||(o.spacing=m),Qy(m)}),sg(),JA(),Sl(22,"po-radio-group",19),Ew("ngModelChange",function(m){return Xy(c),tN(o.size,m)||(o.size=m),Qy(m)}),sg(),JA(),Sl(23,"po-textarea",20),Ew("ngModelChange",function(m){return Xy(c),tN(o.advancedFilters,m)||(o.advancedFilters=m),Qy(m)}),ht("p-change",function(){return o.changeAdvancedFilters()}),sg(),JA(),Sl(24,"div",3)(25,"po-button",21),ht("p-click",function(){return o.restore()}),sg()()();}l&2&&(Dw("ngModel",o.lookup),tw("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),t0(),Vp(4),tw("p-value",o.lookup),Vp(),tw("p-value",o.event),Vp(4),Dw("ngModel",o.label),t0(),Vp(),Dw("ngModel",o.columnsName),tw("p-options",o.columnsOptions),t0(),Vp(),Dw("ngModel",o.fieldLabel),tw("p-options",o.fieldLabelOptions),t0(),Vp(),Dw("ngModel",o.fieldValue),tw("p-options",o.fieldValueOptions),t0(),Vp(),Dw("ngModel",o.filterService),t0(),Vp(),Dw("ngModel",o.fieldErrorMessage),t0(),Vp(),Dw("ngModel",o.help),t0(),Vp(),Dw("ngModel",o.helperText),t0(),Vp(),Dw("ngModel",o.placeholder),t0(),Vp(),Dw("ngModel",o.literals),t0(),Vp(),Dw("ngModel",o.formatField),t0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(),Dw("ngModel",o.spacing),tw("p-options",o.typeSpacing),t0(),Vp(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),t0(),Vp(),Dw("ngModel",o.advancedFilters),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,dc,mv,x3,F3,J0,Pde,Ghe,jhe,Qhe],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Lookup Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
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

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

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

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-lookup.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-labs"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ye,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=f(A);notification=f(Yp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we$1([A])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=Ex();Sl(0,"div",1),Wl(1,"po-info",2),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),Ew("ngModelChange",function(m){return Xy(c),tN(o.hero,m)||(o.hero=m),Qy(m)}),sg(),JA(),Sl(7,"po-select",4),Ew("ngModelChange",function(m){return Xy(c),tN(o.vehicle,m)||(o.vehicle=m),Qy(m)}),sg(),JA(),sg(),Sl(8,"div",1)(9,"po-button",5),ht("p-click",function(){return o.startMission()}),sg()()();}if(l&2){let c=xx(4);Vp(6),Dw("ngModel",o.hero),tw("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",uN(10,Xe)),t0(),Vp(),Dw("ngModel",o.vehicle),tw("p-options",o.vehicles),t0(),Vp(2),tw("p-disabled",c.form.invalid||c.form.pending);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,J0,Ghe,Qhe],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Lookup - Hero"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-lookup.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-hero"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,et,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ae],encapsulation:2})}return a})();var it=()=>["nickname","label"],nt=()=>({modalTitle:"Heroes available for mission"}),je=(()=>{class a{service=f(A);notification=f(Yp);formBuilder=f(nY);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,lm.required],vehicle:[null,lm.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we$1([A])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Sl(0,"div",0),Wl(1,"po-info",1),sg(),Wl(2,"po-divider"),Sl(3,"form",2)(4,"div",0),Wl(5,"po-lookup",3),JA(),Wl(6,"po-select",4),JA(),sg(),Sl(7,"div",0)(8,"po-button",5),ht("p-click",function(){return o.startMission()}),sg()()()),l&2&&(Vp(3),tw("formGroup",o.formMission),Vp(2),tw("p-columns",o.columns)("p-field-format",uN(7,it))("p-filter-service",o.service)("p-literals",uN(8,nt)),t0(),Vp(),tw("p-options",o.vehicles),t0(),Vp(2),tw("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[J9,K9,X9,Rk,Tk,Qt,mv,J0,Ghe,Qhe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Lookup - Hero Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-lookup.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-hero-reactive-form"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,at,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,je],encapsulation:2})}return a})();var de=(()=>{class a{http=f(rb);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(W(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(W(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,St){if(a&1&&(Sl(0,"div",0),Wl(1,"po-table",3),sg()),a&2){let r=Tx();Vp(),tw("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ve=(()=>{class a{filterService=f(de);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we$1([de])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-radio-group",1),Ew("ngModelChange",function(p){return tN(o.filterParams,p)||(o.filterParams=p),p}),sg(),JA(),sg(),Wl(2,"po-divider"),Sl(3,"div",0)(4,"po-lookup",2),vN(5,"titlecase"),Ew("ngModelChange",function(p){return tN(o.entity,p)||(o.entity=p),p}),ht("p-selected",function(p){return o.onSelected(p)}),sg(),JA(),sg(),ux(6,rt,2,4,"div",0)),l&2&&(Vp(),Dw("ngModel",o.filterParams),tw("p-options",o.entities),t0(),Vp(3),tw("p-help",oN("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",oN("",_N(5,12,o.entityLabel)," of Star Wars")),Dw("ngModel",o.entity),tw("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),t0(),Vp(2),dx(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[K9,Dk,mv,J0,Pde,A3,OO],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Lookup - Star Wars films"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-sw-films"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,dt,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ve],encapsulation:2})}return a})();var He=(()=>{class a{http=f(rb);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(ET("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ne=(()=>{class a{service=f(He);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"po-lookup",1),Ew("ngModelChange",function(p){return tN(o.multiLookup,p)||(o.multiLookup=p),p}),ht("p-change",function(p){return o.changeOptions(p)}),sg(),JA(),Sl(2,"po-container",2),Wl(3,"po-table",3),sg()()),l&2&&(Vp(),Dw("ngModel",o.multiLookup),tw("p-multiple",true),t0(),Vp(2),tw("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[K9,Dk,dc,J0,A3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Lookup - Multiple"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-lookup-multiple"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ct,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ne],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6252,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoLookupComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Sl(24,"code"),Jx(25,"po-lookup"),sg(),Jx(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Sl(27,"em"),Jx(28,"TAB"),sg(),Jx(29,` para
buscar um registro.`),sg(),Sl(30,"blockquote")(31,"p"),Jx(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),sg()(),Sl(33,"blockquote")(34,"p"),Jx(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Sl(36,"a",6),Jx(37,"modelo"),sg(),Jx(38," como "),Sl(39,"code"),Jx(40,"pending"),sg(),Jx(41,"."),sg()(),Sl(42,"p"),Jx(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Sl(44,"code"),Jx(45,"po-select"),sg(),Jx(46," ou o "),Sl(47,"code"),Jx(48,"po-combo"),sg(),Jx(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(50,"a",7),Jx(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),sg(),Jx(52,"."),sg(),Sl(53,"p"),Jx(54,"Importante:"),sg(),Sl(55,"ul")(56,"li"),Jx(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Sl(58,"pre")(59,"code"),Jx(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),sg()()()(),Sl(61,"h4"),Jx(62,"Tokens customiz\xE1veis"),sg(),Sl(63,"p"),Jx(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(65,"blockquote")(66,"p"),Jx(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(68,"a",8),Jx(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(70,"."),sg()(),Sl(71,"table")(72,"thead")(73,"tr")(74,"th"),Jx(75,"Propriedade"),sg(),Sl(76,"th"),Jx(77,"Descri\xE7\xE3o"),sg(),Sl(78,"th"),Jx(79,"Valor Padr\xE3o"),sg()()(),Sl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),Jx(84,"Default Values"),sg()(),Wl(85,"td")(86,"td"),sg(),Sl(87,"tr")(88,"td")(89,"code"),Jx(90,"--font-family"),sg()(),Sl(91,"td"),Jx(92,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(93,"td")(94,"code"),Jx(95,"var(--font-family-theme)"),sg()()(),Sl(96,"tr")(97,"td")(98,"code"),Jx(99,"--font-size"),sg()(),Sl(100,"td"),Jx(101,"Tamanho da fonte"),sg(),Sl(102,"td")(103,"code"),Jx(104,"var(--font-size-default)"),sg()()(),Sl(105,"tr")(106,"td")(107,"code"),Jx(108,"--text-color-placeholder"),sg()(),Sl(109,"td"),Jx(110,"Cor do texto no placeholder"),sg(),Sl(111,"td")(112,"code"),Jx(113,"var(--color-neutral-light-30)"),sg()()(),Sl(114,"tr")(115,"td")(116,"code"),Jx(117,"--color"),sg()(),Sl(118,"td"),Jx(119,"Cor principal do lookup"),sg(),Sl(120,"td")(121,"code"),Jx(122,"var(--color-neutral-dark-70)"),sg()()(),Sl(123,"tr")(124,"td")(125,"code"),Jx(126,"--border-radius"),sg()(),Sl(127,"td"),Jx(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(129,"td")(130,"code"),Jx(131,"var(--border-radius-md)"),sg()()(),Sl(132,"tr")(133,"td")(134,"code"),Jx(135,"--background"),sg()(),Sl(136,"td"),Jx(137,"Cor de background"),sg(),Sl(138,"td")(139,"code"),Jx(140,"var(--color-neutral-light-05)"),sg()()(),Sl(141,"tr")(142,"td")(143,"code"),Jx(144,"--text-color"),sg()(),Sl(145,"td"),Jx(146,"Cor do texto"),sg(),Sl(147,"td")(148,"code"),Jx(149,"var(--color-neutral-dark-90)"),sg()()(),Sl(150,"tr")(151,"td")(152,"code"),Jx(153,"--color-clear"),sg()(),Sl(154,"td"),Jx(155,"Cor principal do icone clear"),sg(),Sl(156,"td")(157,"code"),Jx(158,"var(--color-action-default)"),sg()()(),Sl(159,"tr")(160,"td")(161,"strong"),Jx(162,"Icon"),sg()(),Wl(163,"td")(164,"td"),sg(),Sl(165,"tr")(166,"td")(167,"code"),Jx(168,"--color-icon"),sg()(),Sl(169,"td"),Jx(170,"Cor principal do icone pesquisar"),sg(),Sl(171,"td")(172,"code"),Jx(173,"var(--color-action-default)"),sg()()(),Sl(174,"tr")(175,"td")(176,"strong"),Jx(177,"Hover"),sg()(),Wl(178,"td")(179,"td"),sg(),Sl(180,"tr")(181,"td")(182,"code"),Jx(183,"--color-hover"),sg()(),Sl(184,"td"),Jx(185,"Cor principal no estado hover"),sg(),Sl(186,"td")(187,"code"),Jx(188,"var(--color-brand-01-dark)"),sg()()(),Sl(189,"tr")(190,"td")(191,"code"),Jx(192,"--background-hover"),sg()(),Sl(193,"td"),Jx(194,"Cor de background no estado hover"),sg(),Sl(195,"td")(196,"code"),Jx(197,"var(--color-brand-01-lightest)"),sg()()(),Sl(198,"tr")(199,"td")(200,"strong"),Jx(201,"Focused"),sg()(),Wl(202,"td")(203,"td"),sg(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--color-focused"),sg()(),Sl(208,"td"),Jx(209,"Cor principal no estado de focus"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-action-default)"),sg()()(),Sl(213,"tr")(214,"td")(215,"code"),Jx(216,"--outline-color-focused"),sg()(),Sl(217,"td"),Jx(218,"Cor do outline do estado de focus"),sg(),Sl(219,"td")(220,"code"),Jx(221,"var(--color-action-focus)"),sg()()(),Sl(222,"tr")(223,"td")(224,"strong"),Jx(225,"Disabled"),sg()(),Wl(226,"td")(227,"td"),sg(),Sl(228,"tr")(229,"td")(230,"code"),Jx(231,"--color-disabled"),sg()(),Sl(232,"td"),Jx(233,"Cor principal no estado disabled"),sg(),Sl(234,"td")(235,"code"),Jx(236,"var(--color-action-disabled)"),sg()()(),Sl(237,"tr")(238,"td")(239,"code"),Jx(240,"--background-disabled"),sg()(),Sl(241,"td"),Jx(242,"Cor de background no estado disabled"),sg(),Sl(243,"td")(244,"code"),Jx(245,"var(--color-neutral-light-20)"),sg()()(),Sl(246,"tr")(247,"td")(248,"code"),Jx(249,"--text-color-disabled"),sg()(),Sl(250,"td"),Jx(251,"Cor do texto quando campo est\xE1 desabilitado"),sg(),Sl(252,"td")(253,"code"),Jx(254,"var(--color-action-disabled)"),sg()()(),Sl(255,"tr")(256,"td")(257,"strong"),Jx(258,"Error"),sg()(),Wl(259,"td")(260,"td"),sg(),Sl(261,"tr")(262,"td")(263,"code"),Jx(264,"--color-error"),sg()(),Sl(265,"td"),Jx(266,"Cor de background no estado de requerido"),sg(),Sl(267,"td")(268,"code"),Jx(269,"var(--color-feedback-negative-base)"),sg()()()()()(),Sl(270,"div",9)(271,"h4",10),Jx(272,"Seletor"),sg(),Sl(273,"pre",11),Jx(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-loading="boolean"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),sg()(),Sl(275,"h4",12),Jx(276,"Propriedades"),sg(),Sl(277,"table",13)(278,"tr",14)(279,"th",15),Jx(280,"Nome"),sg(),Sl(281,"th",15),Jx(282,"Tipo"),sg(),Sl(283,"th",15),Jx(284,"Padr\xE3o"),sg(),Sl(285,"th",15),Jx(286,"Descri\xE7\xE3o"),sg()(),Sl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),Jx(291," (p-additional-help)"),Wl(292,"br"),sg()(),Sl(293,"div",20),Jx(294,"Deprecated"),sg()(),Sl(295,"td",21)(296,"code",22),Jx(297,"EventEmitter"),sg()(),Sl(298,"td",23),Jx(299,"-"),sg(),Sl(300,"td",24)(301,"em")(302,"strong"),Jx(303,"(opcional)"),sg()(),Sl(304,"p"),Jx(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(306,"blockquote")(307,"p"),Jx(308,"Essa propriedade est\xE1 "),Sl(309,"strong"),Jx(310,"depreciada"),sg(),Jx(311," e ser\xE1 removida na vers\xE3o "),Sl(312,"code"),Jx(313,"23.x.x"),sg(),Jx(314,". Recomendamos utilizar a propriedade "),Sl(315,"code"),Jx(316,"p-helper"),sg(),Jx(317," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),Jx(322," p-additional-help-tooltip"),Wl(323,"br"),sg()(),Sl(324,"div",20),Jx(325,"Deprecated"),sg()(),Sl(326,"td",21)(327,"code",27),Jx(328,"string"),sg()(),Sl(329,"td",23),Jx(330,"-"),sg(),Sl(331,"td",24)(332,"em")(333,"strong"),Jx(334,"(opcional)"),sg()(),Sl(335,"p"),Jx(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(337,"code"),Jx(338,"po-helper"),sg(),Jx(339,`.
`),Sl(340,"strong"),Jx(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(342,"blockquote")(343,"p"),Jx(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(345,"blockquote")(346,"p"),Jx(347,"Essa propriedade est\xE1 "),Sl(348,"strong"),Jx(349,"depreciada"),sg(),Jx(350," e ser\xE1 removida na vers\xE3o "),Sl(351,"code"),Jx(352,"23.x.x"),sg(),Jx(353,". Recomendamos utilizar a propriedade "),Sl(354,"code"),Jx(355,"p-helper"),sg(),Jx(356," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),Jx(361," p-advanced-filters"),Wl(362,"br"),sg()()(),Sl(363,"td",21)(364,"code",28),Jx(365,"Array<PoLookupAdvancedFilter>"),sg()(),Sl(366,"td",23),Jx(367,"-"),sg(),Sl(368,"td",24)(369,"em")(370,"strong"),Jx(371,"(opcional)"),sg()(),Sl(372,"p"),Jx(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Sl(374,"blockquote")(375,"p"),Jx(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Sl(377,"p"),Jx(378,"Exemplo de URL com busca avan\xE7ada:"),sg(),Sl(379,"pre")(380,"code"),Jx(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),sg()(),Sl(382,"p"),Jx(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),sg(),Sl(384,"pre")(385,"code"),Jx(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),sg()()()(),Sl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),Jx(391," p-append-in-body"),Wl(392,"br"),sg()()(),Sl(393,"td",21)(394,"code",29),Jx(395,"boolean"),sg()(),Sl(396,"td",23)(397,"p")(398,"code"),Jx(399,"false"),sg()()(),Sl(400,"td",24)(401,"em")(402,"strong"),Jx(403,"(opcional)"),sg()(),Sl(404,"p"),Jx(405,"Define que o popover ("),Sl(406,"code"),Jx(407,"p-helper"),sg(),Jx(408," e/ou "),Sl(409,"code"),Jx(410,"p-error-limit"),sg(),Jx(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(412,"blockquote")(413,"p"),Jx(414,"Quando utilizado com "),Sl(415,"code"),Jx(416,"p-helper"),sg(),Jx(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),Jx(422," p-auto-focus"),Wl(423,"br"),sg()()(),Sl(424,"td",21)(425,"code",29),Jx(426,"boolean"),sg()(),Sl(427,"td",23)(428,"p")(429,"code"),Jx(430,"false"),sg()()(),Sl(431,"td",24)(432,"em")(433,"strong"),Jx(434,"(opcional)"),sg()(),Sl(435,"p"),Jx(436,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(437,"blockquote")(438,"p"),Jx(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),Jx(444," p-auto-height"),Wl(445,"br"),sg()()(),Sl(446,"td",21)(447,"code",29),Jx(448,"boolean"),sg()(),Sl(449,"td",23)(450,"p")(451,"code"),Jx(452,"false"),sg()()(),Sl(453,"td",24)(454,"em")(455,"strong"),Jx(456,"(opcional)"),sg()(),Sl(457,"p"),Jx(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),sg()()(),Sl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),Jx(463," (p-change)"),Wl(464,"br"),sg()()(),Sl(465,"td",21)(466,"code",22),Jx(467,"EventEmitter"),sg()(),Sl(468,"td",23),Jx(469,"-"),sg(),Sl(470,"td",24)(471,"em")(472,"strong"),Jx(473,"(opcional)"),sg()(),Sl(474,"p"),Jx(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),sg()()(),Sl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),Jx(480," (p-change-visible-columns)"),Wl(481,"br"),sg()()(),Sl(482,"td",21)(483,"code",22),Jx(484,"EventEmitter"),sg()(),Sl(485,"td",23),Jx(486,"-"),sg(),Sl(487,"td",24)(488,"em")(489,"strong"),Jx(490,"(opcional)"),sg()(),Sl(491,"p"),Jx(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Sl(493,"p"),Jx(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Sl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),Jx(499," p-clean"),Wl(500,"br"),sg()()(),Sl(501,"td",21)(502,"code",29),Jx(503,"boolean"),sg()(),Sl(504,"td",23),Jx(505,"-"),sg(),Sl(506,"td",24)(507,"p"),Jx(508,"Exibe um \xEDcone que permite limpar o campo."),sg()()(),Sl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),Jx(513," (p-restore-column-manager)"),Wl(514,"br"),sg()()(),Sl(515,"td",21)(516,"code",22),Jx(517,"EventEmitter"),sg()(),Sl(518,"td",23),Jx(519,"-"),sg(),Sl(520,"td",24)(521,"em")(522,"strong"),Jx(523,"(opcional)"),sg()(),Sl(524,"p"),Jx(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Sl(526,"p"),Jx(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Sl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),Jx(532," p-columns"),Wl(533,"br"),sg()()(),Sl(534,"td",21)(535,"code",30),Jx(536,"Array<PoLookupColumn>"),sg()(),Sl(537,"td",23),Jx(538,"-"),sg(),Sl(539,"td",24)(540,"em")(541,"strong"),Jx(542,"(opcional)"),sg()(),Sl(543,"p"),Jx(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),sg()()(),Sl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),Jx(549," p-compact-label"),Wl(550,"br"),sg()()(),Sl(551,"td",21)(552,"code",29),Jx(553,"boolean"),sg()(),Sl(554,"td",23)(555,"p")(556,"code"),Jx(557,"false"),sg()()(),Sl(558,"td",24)(559,"em")(560,"strong"),Jx(561,"(opcional)"),sg()(),Sl(562,"p"),Jx(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(564,"p"),Jx(565,"Quando habilitado ("),Sl(566,"code"),Jx(567,"true"),sg(),Jx(568,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(569,"ul")(570,"li")(571,"code"),Jx(572,"po-label"),sg()(),Sl(573,"li")(574,"code"),Jx(575,"p-requirement (showRequired)"),sg()(),Sl(576,"li")(577,"code"),Jx(578,"po-helper"),sg()()(),Sl(579,"p"),Jx(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(581,"p"),Jx(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(583,"ul")(584,"li")(585,"code"),Jx(586,"--field-container-title-justify"),sg()(),Sl(587,"li")(588,"code"),Jx(589,"--field-container-title-flex"),sg()()(),Sl(590,"p"),Jx(591,"Exemplo:"),sg(),Sl(592,"pre")(593,"code"),Jx(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(595,"p"),Jx(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),Jx(601," p-disabled"),Wl(602,"br"),sg()()(),Sl(603,"td",21)(604,"code",29),Jx(605,"boolean"),sg()(),Sl(606,"td",23)(607,"p"),Jx(608,"false"),sg()(),Sl(609,"td",24)(610,"em")(611,"strong"),Jx(612,"(opcional)"),sg()(),Sl(613,"p"),Jx(614,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Sl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),Jx(619," p-error-limit"),Wl(620,"br"),sg()()(),Sl(621,"td",21)(622,"code",29),Jx(623,"boolean"),sg()(),Sl(624,"td",23)(625,"p")(626,"code"),Jx(627,"false"),sg()()(),Sl(628,"td",24)(629,"em")(630,"strong"),Jx(631,"(opcional)"),sg()(),Sl(632,"p"),Jx(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(634,"blockquote")(635,"p"),Jx(636,"Caso essa propriedade seja definida como "),Sl(637,"code"),Jx(638,"true"),sg(),Jx(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),Jx(644," p-field-error-message"),Wl(645,"br"),sg()()(),Sl(646,"td",21)(647,"code",27),Jx(648,"string"),sg()(),Sl(649,"td",23),Jx(650,"-"),sg(),Sl(651,"td",24)(652,"em")(653,"strong"),Jx(654,"(opcional)"),sg()(),Sl(655,"p"),Jx(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Sl(657,"blockquote")(658,"p"),Jx(659,"Necess\xE1rio que a propriedade "),Sl(660,"code"),Jx(661,"p-required"),sg(),Jx(662," esteja habilitada."),sg()()()(),Sl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),Jx(667," p-field-format"),Wl(668,"br"),sg()()(),Sl(669,"td",21)(670,"code",31),Jx(671,"((value) => string) "),sg(),Sl(672,"code",32),Jx(673," Array<string>"),sg()(),Sl(674,"td",23),Jx(675,"-"),sg(),Sl(676,"td",24)(677,"em")(678,"strong"),Jx(679,"(opcional)"),sg()(),Sl(680,"p"),Jx(681,"Formato de exibi\xE7\xE3o do campo."),sg(),Sl(682,"p"),Jx(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Sl(684,"em"),Jx(685,"string"),sg(),Jx(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),sg(),Sl(687,"pre")(688,"code"),Jx(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),sg()(),Sl(690,"blockquote")(691,"p"),Jx(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Sl(693,"code"),Jx(694,"p-field-label"),sg(),Jx(695," na descri\xE7\xE3o do campo."),sg()(),Sl(696,"p"),Jx(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),sg(),Sl(698,"pre")(699,"code"),Jx(700,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),sg()(),Sl(701,"blockquote")(702,"p"),Jx(703,"Ser\xE1 utilizado "),Sl(704,"code"),Jx(705,"-"),sg(),Jx(706," como separador."),sg()()()(),Sl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),Jx(711," p-field-label"),Wl(712,"br"),sg()()(),Sl(713,"td",21)(714,"code",27),Jx(715,"string"),sg()(),Sl(716,"td",23),Jx(717,"-"),sg(),Sl(718,"td",24)(719,"p"),Jx(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),sg()()(),Sl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),Jx(725," p-field-value"),Wl(726,"br"),sg()()(),Sl(727,"td",21)(728,"code",27),Jx(729,"string"),sg()(),Sl(730,"td",23),Jx(731,"-"),sg(),Sl(732,"td",24)(733,"p"),Jx(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),sg(),Sl(735,"blockquote")(736,"p"),Jx(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),sg()()()(),Sl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),Jx(742," p-filter-params"),Wl(743,"br"),sg()()(),Sl(744,"td",21)(745,"code",33),Jx(746,"any"),sg()(),Sl(747,"td",23),Jx(748,"-"),sg(),Sl(749,"td",24)(750,"em")(751,"strong"),Jx(752,"(opcional)"),sg()(),Sl(753,"p"),Jx(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Sl(755,"code"),Jx(756,"PoLookupFilter"),sg(),Jx(757,"."),sg()()(),Sl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),Jx(762," p-filter-service"),Wl(763,"br"),sg()()(),Sl(764,"td",21)(765,"code",27),Jx(766,"string "),sg(),Sl(767,"code",34),Jx(768," PoLookupFilter"),sg()(),Sl(769,"td",23),Jx(770,"-"),sg(),Sl(771,"td",24)(772,"p"),Jx(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Sl(774,"code"),Jx(775,"PoLookupFilter"),sg(),Jx(776," ou uma URL."),sg(),Sl(777,"p"),Jx(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),sg(),Sl(779,"pre")(780,"code"),Jx(781,`url + ?page=1&pageSize=20&filter=Peter
`),sg()(),Sl(782,"p"),Jx(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Sl(784,"code"),Jx(785,"order"),sg(),Jx(786,", por exemplo:"),sg(),Sl(787,"ul")(788,"li")(789,"p"),Jx(790,"Coluna decrescente:"),sg(),Sl(791,"pre")(792,"code"),Jx(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),sg()()(),Sl(794,"li")(795,"p"),Jx(796,"Coluna ascendente:"),sg(),Sl(797,"pre")(798,"code"),Jx(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),sg()()()(),Sl(800,"p"),Jx(801,"Se for definido a propriedade "),Sl(802,"code"),Jx(803,"p-filter-params"),sg(),Jx(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Sl(805,"code"),Jx(806,"{ age: 23 }"),sg(),Jx(807," a URL ficaria:"),sg(),Sl(808,"pre")(809,"code"),Jx(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),sg()(),Sl(811,"p"),Jx(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),sg(),Sl(813,"pre")(814,"code"),Jx(815,`model = 1234;

GET url/1234
`),sg()(),Sl(816,"p"),Jx(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),sg(),Sl(818,"pre")(819,"code"),Jx(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),sg()(),Sl(821,"blockquote")(822,"p"),Jx(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(824,"a",7),Jx(825,"API do PO UI"),sg(),Jx(826,` e utiliza os valores
definidos nas propriedades `),Sl(827,"code"),Jx(828,"p-field-label"),sg(),Jx(829," e "),Sl(830,"code"),Jx(831,"p-field-value"),sg(),Jx(832," para a constru\xE7\xE3o do "),Sl(833,"code"),Jx(834,"po-lookup"),sg(),Jx(835,"."),sg()(),Sl(836,"p"),Jx(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Sl(838,"em"),Jx(839,"TAB"),sg(),Jx(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Sl(841,"a",35),Jx(842,"encodeURIComponent"),sg(),Jx(843,`
e concatenado na URL da seguinte forma:`),sg(),Sl(844,"pre")(845,"code"),Jx(846,`url/valor%20que%20se%20deseja%20filtrar
`),sg()(),Sl(847,"blockquote")(848,"p"),Jx(849,"Quando informado um servi\xE7o que implemente a interface "),Sl(850,"code"),Jx(851,"PoLookupFilter"),sg(),Jx(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),sg()()()(),Sl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),Jx(857," p-help"),Wl(858,"br"),sg()()(),Sl(859,"td",21)(860,"code",27),Jx(861,"string"),sg()(),Sl(862,"td",23),Jx(863,"-"),sg(),Sl(864,"td",24)(865,"em")(866,"strong"),Jx(867,"(opcional)"),sg()(),Sl(868,"p"),Jx(869,"Texto de apoio do campo."),sg()()(),Sl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),Jx(874," p-hide-columns-manager"),Wl(875,"br"),sg()()(),Sl(876,"td",21)(877,"code",29),Jx(878,"boolean"),sg()(),Sl(879,"td",23)(880,"p")(881,"code"),Jx(882,"false"),sg()()(),Sl(883,"td",24)(884,"em")(885,"strong"),Jx(886,"(opcional)"),sg()(),Sl(887,"p"),Jx(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),sg()()(),Sl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),Jx(893," p-infinite-scroll"),Wl(894,"br"),sg()()(),Sl(895,"td",21)(896,"code",29),Jx(897,"boolean"),sg()(),Sl(898,"td",23)(899,"p")(900,"code"),Jx(901,"false"),sg()()(),Sl(902,"td",24)(903,"em")(904,"strong"),Jx(905,"(opcional)"),sg()(),Sl(906,"p"),Jx(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),sg()()(),Sl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),Jx(912," (p-keydown)"),Wl(913,"br"),sg()()(),Sl(914,"td",21)(915,"code",22),Jx(916,"EventEmitter"),sg()(),Sl(917,"td",23),Jx(918,"-"),sg(),Sl(919,"td",24)(920,"em")(921,"strong"),Jx(922,"(opcional)"),sg()(),Sl(923,"p"),Jx(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(925,"code"),Jx(926,"KeyboardEvent"),sg(),Jx(927," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),Jx(932," p-label"),Wl(933,"br"),sg()()(),Sl(934,"td",21)(935,"code",27),Jx(936,"string"),sg()(),Sl(937,"td",23),Jx(938,"-"),sg(),Sl(939,"td",24)(940,"em")(941,"strong"),Jx(942,"(opcional)"),sg()(),Sl(943,"p"),Jx(944,"Label do campo."),sg(),Sl(945,"blockquote")(946,"p"),Jx(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Sl(948,"code"),Jx(949,"modalTitle"),sg(),Jx(950," na propriedade "),Sl(951,"code"),Jx(952,"p-literals"),sg(),Jx(953,"."),sg()()()(),Sl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),Jx(958," p-label-text-wrap"),Wl(959,"br"),sg()()(),Sl(960,"td",21)(961,"code",29),Jx(962,"boolean"),sg()(),Sl(963,"td",23)(964,"p")(965,"code"),Jx(966,"false"),sg()()(),Sl(967,"td",24)(968,"em")(969,"strong"),Jx(970,"(opcional)"),sg()(),Sl(971,"p"),Jx(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(973,"code"),Jx(974,"p-label"),sg(),Jx(975,". Quando "),Sl(976,"code"),Jx(977,"p-label-text-wrap"),sg(),Jx(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),Jx(983," p-literals"),Wl(984,"br"),sg()()(),Sl(985,"td",21)(986,"code",36),Jx(987,"PoLookupLiterals"),sg()(),Sl(988,"td",23),Jx(989,"-"),sg(),Sl(990,"td",24)(991,"p"),Jx(992,"Objeto com as literais usadas no "),Sl(993,"code"),Jx(994,"po-lookup"),sg(),Jx(995,"."),sg(),Sl(996,"p"),Jx(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(998,"pre")(999,"code"),Jx(1e3,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),sg()(),Sl(1001,"p"),Jx(1002,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(1003,"pre")(1004,"code"),Jx(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),sg()(),Sl(1006,"p"),Jx(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(1008,"pre")(1009,"code"),Jx(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),sg()(),Sl(1011,"blockquote")(1012,"p"),Jx(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(1014,"a",37)(1015,"code"),Jx(1016,"PoI18nService"),sg()(),Jx(1017," ou do browser."),sg()()()(),Sl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),Jx(1022," p-loading"),Wl(1023,"br"),sg()()(),Sl(1024,"td",21)(1025,"code",29),Jx(1026,"boolean"),sg()(),Sl(1027,"td",23)(1028,"p")(1029,"code"),Jx(1030,"false"),sg()()(),Sl(1031,"td",24)(1032,"em")(1033,"strong"),Jx(1034,"(opcional)"),sg()(),Sl(1035,"p"),Jx(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),Jx(1041," p-multiple"),Wl(1042,"br"),sg()()(),Sl(1043,"td",21)(1044,"code",29),Jx(1045,"boolean"),sg()(),Sl(1046,"td",23)(1047,"p")(1048,"code"),Jx(1049,"false"),sg()()(),Sl(1050,"td",24)(1051,"em")(1052,"strong"),Jx(1053,"(opcional)"),sg()(),Sl(1054,"p"),Jx(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Sl(1056,"blockquote")(1057,"p"),Jx(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Sl(1059,"code"),Jx(1060,"[ 12345, 67890 ]"),sg()()()()(),Sl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),Jx(1065," name"),Wl(1066,"br"),sg()()(),Sl(1067,"td",21)(1068,"code",27),Jx(1069,"string"),sg()(),Sl(1070,"td",23),Jx(1071,"-"),sg(),Sl(1072,"td",24)(1073,"p"),Jx(1074,"Nome e Id do componente."),sg()()(),Sl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),Jx(1079," p-no-autocomplete"),Wl(1080,"br"),sg()()(),Sl(1081,"td",21)(1082,"code",29),Jx(1083,"boolean"),sg()(),Sl(1084,"td",23)(1085,"p")(1086,"code"),Jx(1087,"false"),sg()()(),Sl(1088,"td",24)(1089,"em")(1090,"strong"),Jx(1091,"(opcional)"),sg()(),Sl(1092,"p"),Jx(1093,"Define a propriedade nativa "),Sl(1094,"code"),Jx(1095,"autocomplete"),sg(),Jx(1096," do campo como "),Sl(1097,"code"),Jx(1098,"off"),sg(),Jx(1099,"."),sg()()(),Sl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),Jx(1104," (p-error)"),Wl(1105,"br"),sg()()(),Sl(1106,"td",21)(1107,"code",22),Jx(1108,"EventEmitter"),sg()(),Sl(1109,"td",23),Jx(1110,"-"),sg(),Sl(1111,"td",24)(1112,"p"),Jx(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),sg()()(),Sl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),Jx(1118," p-optional"),Wl(1119,"br"),sg()()(),Sl(1120,"td",21)(1121,"code",29),Jx(1122,"boolean"),sg()(),Sl(1123,"td",23)(1124,"p")(1125,"code"),Jx(1126,"false"),sg()()(),Sl(1127,"td",24)(1128,"em")(1129,"strong"),Jx(1130,"(opcional)"),sg()(),Sl(1131,"p"),Jx(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(1133,"blockquote")(1134,"p"),Jx(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1136,"ul")(1137,"li"),Jx(1138,"O campo conter "),Sl(1139,"code"),Jx(1140,"p-required"),sg(),Jx(1141,";"),sg(),Sl(1142,"li"),Jx(1143,"N\xE3o possuir "),Sl(1144,"code"),Jx(1145,"p-help"),sg(),Jx(1146," e/ou "),Sl(1147,"code"),Jx(1148,"p-label"),sg(),Jx(1149,"."),sg()()()(),Sl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),Jx(1154," p-placeholder"),Wl(1155,"br"),sg()()(),Sl(1156,"td",21)(1157,"code",27),Jx(1158,"string"),sg()(),Sl(1159,"td",23),Jx(1160,"-"),sg(),Sl(1161,"td",24)(1162,"p"),Jx(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),Jx(1168," p-helper"),Wl(1169,"br"),sg()()(),Sl(1170,"td",21)(1171,"code",38),Jx(1172,"PoHelperOptions "),sg(),Sl(1173,"code",27),Jx(1174," string"),sg()(),Sl(1175,"td",23),Jx(1176,"-"),sg(),Sl(1177,"td",24)(1178,"em")(1179,"strong"),Jx(1180,"(opcional)"),sg()(),Sl(1181,"p"),Jx(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1183,"code"),Jx(1184,"p-label"),sg(),Jx(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1186,"code"),Jx(1187,"p-label"),sg(),Jx(1188,"."),sg(),Sl(1189,"blockquote")(1190,"p"),Jx(1191,"Para mais informa\xE7\xF5es acesse: "),Sl(1192,"a",39),Jx(1193,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1194,"."),sg()(),Sl(1195,"blockquote")(1196,"p"),Jx(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1198,"code"),Jx(1199,"p-additional-help-tooltip"),sg(),Jx(1200," e "),Sl(1201,"code"),Jx(1202,"p-additional-help"),sg(),Jx(1203,") ser\xE1 ignorado."),sg()()()(),Sl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),Jx(1208," p-required"),Wl(1209,"br"),sg()()(),Sl(1210,"td",21)(1211,"code",29),Jx(1212,"boolean"),sg()(),Sl(1213,"td",23)(1214,"p")(1215,"code"),Jx(1216,"false"),sg()()(),Sl(1217,"td",24)(1218,"em")(1219,"strong"),Jx(1220,"(opcional)"),sg()(),Sl(1221,"p"),Jx(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(1223,"blockquote")(1224,"p"),Jx(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1226,"code"),Jx(1227,"(p-disabled)"),sg(),Jx(1228,"."),sg()()()(),Sl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),Jx(1233," (p-selected)"),Wl(1234,"br"),sg()()(),Sl(1235,"td",21)(1236,"code",22),Jx(1237,"EventEmitter"),sg()(),Sl(1238,"td",23),Jx(1239,"-"),sg(),Sl(1240,"td",24)(1241,"em")(1242,"strong"),Jx(1243,"(opcional)"),sg()(),Sl(1244,"p"),Jx(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),sg()()(),Sl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),Jx(1250," p-show-required"),Wl(1251,"br"),sg()()(),Sl(1252,"td",21)(1253,"code",29),Jx(1254,"boolean"),sg()(),Sl(1255,"td",23),Jx(1256,"-"),sg(),Sl(1257,"td",24)(1258,"p"),Jx(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),sg(),Sl(1260,"blockquote")(1261,"p"),Jx(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1263,"ul")(1264,"li"),Jx(1265,"N\xE3o possuir "),Sl(1266,"code"),Jx(1267,"p-help"),sg(),Jx(1268," e/ou "),Sl(1269,"code"),Jx(1270,"p-label"),sg(),Jx(1271,"."),sg()()()(),Sl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),Jx(1276," p-size"),Wl(1277,"br"),sg()()(),Sl(1278,"td",21)(1279,"code",27),Jx(1280,"string"),sg()(),Sl(1281,"td",23)(1282,"p")(1283,"code"),Jx(1284,"medium"),sg()()(),Sl(1285,"td",24)(1286,"em")(1287,"strong"),Jx(1288,"(opcional)"),sg()(),Sl(1289,"p"),Jx(1290,"Define o tamanho do componente:"),sg(),Sl(1291,"ul")(1292,"li")(1293,"code"),Jx(1294,"small"),sg(),Jx(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1296,"li")(1297,"code"),Jx(1298,"medium"),sg(),Jx(1299,": altura do input como 44px."),sg()(),Sl(1300,"blockquote")(1301,"p"),Jx(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1303,"code"),Jx(1304,"medium"),sg(),Jx(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1306,"a",40),Jx(1307,"po-theme"),sg(),Jx(1308,"."),sg()()()(),Sl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),Jx(1313," p-spacing"),Wl(1314,"br"),sg()()(),Sl(1315,"td",21)(1316,"code",27),Jx(1317,"string"),sg()(),Sl(1318,"td",23)(1319,"p")(1320,"code"),Jx(1321,"medium"),sg()()(),Sl(1322,"td",24)(1323,"em")(1324,"strong"),Jx(1325,"(opcional)"),sg()(),Sl(1326,"p"),Jx(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Sl(1328,"strong"),Jx(1329,"PoTableColumnSpacing"),sg(),Jx(1330,"."),sg(),Sl(1331,"blockquote")(1332,"p"),Jx(1333,"Em n\xEDvel de acessibilidade "),Sl(1334,"strong"),Jx(1335,"AA"),sg(),Jx(1336,", caso o valor de "),Sl(1337,"code"),Jx(1338,"p-spacing"),sg(),Jx(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Sl(1340,"code"),Jx(1341,"extraSmall"),sg(),Jx(1342,`
nos seguintes cen\xE1rios:`),sg(),Sl(1343,"ul")(1344,"li"),Jx(1345,"Quando o valor de "),Sl(1346,"code"),Jx(1347,"p-size"),sg(),Jx(1348," for "),Sl(1349,"code"),Jx(1350,"small"),sg(),Jx(1351,";"),sg(),Sl(1352,"li"),Jx(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Sl(1354,"code"),Jx(1355,"small"),sg(),Jx(1356,` no
`),Sl(1357,"a",40),Jx(1358,"servi\xE7o de tema"),sg(),Jx(1359,"."),sg()()()()(),Sl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),Jx(1364," p-text-wrap"),Wl(1365,"br"),sg()()(),Sl(1366,"td",21)(1367,"code",29),Jx(1368,"boolean"),sg()(),Sl(1369,"td",23)(1370,"p")(1371,"code"),Jx(1372,"false"),sg()()(),Sl(1373,"td",24)(1374,"em")(1375,"strong"),Jx(1376,"(opcional)"),sg()(),Sl(1377,"p"),Jx(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg(),Sl(1379,"p"),Jx(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),sg(),Sl(1381,"blockquote")(1382,"p"),Jx(1383,"Incompat\xEDvel com "),Sl(1384,"code"),Jx(1385,"virtual-scroll"),sg(),Jx(1386,", que requer altura fixa nas linhas."),sg()()()(),Sl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),Jx(1391," p-virtual-scroll"),Wl(1392,"br"),sg()()(),Sl(1393,"td",21)(1394,"code",29),Jx(1395,"boolean"),sg()(),Sl(1396,"td",23)(1397,"p")(1398,"code"),Jx(1399,"true"),sg()()(),Sl(1400,"td",24)(1401,"em")(1402,"strong"),Jx(1403,"(opcional)"),sg()(),Sl(1404,"p"),Jx(1405,"Habilita o "),Sl(1406,"code"),Jx(1407,"virtual-scroll"),sg(),Jx(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Sl(1409,"code"),Jx(1410,"virtual-scroll"),sg(),Jx(1411," ser\xE1 ativado automaticamente."),sg(),Sl(1412,"blockquote")(1413,"p"),Jx(1414,"Incompat\xEDvel com "),Sl(1415,"code"),Jx(1416,"p-text-wrap"),sg(),Jx(1417," e "),Sl(1418,"code"),Jx(1419,"master-detail"),sg(),Jx(1420,", pois o "),Sl(1421,"code"),Jx(1422,"virtual-scroll"),sg(),Jx(1423," exige altura fixa nas linhas."),sg()()()()(),Sl(1424,"h3",12),Jx(1425,"M\xE9todos"),sg(),Sl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),Jx(1432," focus "),sg()()()()(),Sl(1433,"tr",24)(1434,"td",24)(1435,"p"),Jx(1436,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1437,"p"),Jx(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1439,"pre")(1440,"code"),Jx(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),sg()()()()(),Wl(1442,"br"),Sl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),Jx(1449," showAdditionalHelp "),sg()()()()(),Sl(1450,"tr",24)(1451,"td",24)(1452,"p"),Jx(1453,"M\xE9todo que exibe "),Sl(1454,"code"),Jx(1455,"p-helper"),sg(),Jx(1456," ou executa a a\xE7\xE3o definida em "),Sl(1457,"code"),Jx(1458,"p-helper{eventOnClick}"),sg(),Jx(1459," ou em "),Sl(1460,"code"),Jx(1461,"p-additionalHelp"),sg(),Jx(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1463,"code"),Jx(1464,"p-keydown"),sg(),Jx(1465,"."),sg(),Sl(1466,"blockquote")(1467,"p"),Jx(1468,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1469,"code"),Jx(1470,"po-helper"),sg(),Jx(1471," quando o componente estiver com foco."),sg()(),Sl(1472,"pre")(1473,"code"),Jx(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),sg()(),Sl(1475,"pre")(1476,"code"),Jx(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1478,"br"),Sl(1479,"h3"),Jx(1480,"Interfaces"),sg(),Sl(1481,"h4",43)(1482,"code",5),Jx(1483,"PoLookupAdvancedFilter"),sg()(),Sl(1484,"div",2)(1485,"p"),Jx(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),sg()(),Sl(1487,"h4",12),Jx(1488,"Propriedades"),sg(),Sl(1489,"table",13)(1490,"tr",14)(1491,"th",15),Jx(1492,"Nome"),sg(),Sl(1493,"th",15),Jx(1494,"Tipo"),sg(),Sl(1495,"th",15),Jx(1496,"Descri\xE7\xE3o"),sg()(),Sl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),Jx(1501," additionalHelp"),Wl(1502,"br"),sg()()(),Sl(1503,"td",21)(1504,"code",44),Jx(1505,"Function"),sg()(),Sl(1506,"td",24)(1507,"em")(1508,"strong"),Jx(1509,"(opcional)"),sg()(),Sl(1510,"p"),Jx(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(1512,"blockquote")(1513,"p"),Jx(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Sl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),Jx(1519," additionalHelpTooltip"),Wl(1520,"br"),sg()()(),Sl(1521,"td",21)(1522,"code",27),Jx(1523,"string"),sg()(),Sl(1524,"td",24)(1525,"em")(1526,"strong"),Jx(1527,"(opcional)"),sg()(),Sl(1528,"p"),Jx(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(1530,"code"),Jx(1531,"po-helper"),sg(),Jx(1532,`.
`),Sl(1533,"strong"),Jx(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(1535,"blockquote")(1536,"p"),Jx(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Sl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),Jx(1542," advancedFilters"),Wl(1543,"br"),sg()()(),Sl(1544,"td",21)(1545,"code",28),Jx(1546,"Array<PoLookupAdvancedFilter>"),sg()(),Sl(1547,"td",24)(1548,"em")(1549,"strong"),Jx(1550,"(opcional)"),sg()(),Sl(1551,"p"),Jx(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Sl(1553,"blockquote")(1554,"p"),Jx(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Sl(1556,"p"),Jx(1557,"Exemplo de URL com busca avan\xE7ada:"),sg(),Sl(1558,"p")(1559,"code"),Jx(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),sg()(),Sl(1561,"p"),Jx(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),sg(),Sl(1563,"p")(1564,"code"),Jx(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),sg()()()(),Sl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),Jx(1570," appendBox"),Wl(1571,"br"),sg()()(),Sl(1572,"td",21)(1573,"code",29),Jx(1574,"boolean"),sg()(),Sl(1575,"td",24)(1576,"em")(1577,"strong"),Jx(1578,"(opcional)"),sg()(),Sl(1579,"p"),Jx(1580,"Define que o "),Sl(1581,"code"),Jx(1582,"listbox"),sg(),Jx(1583," e/ou popover ("),Sl(1584,"code"),Jx(1585,"p-helper"),sg(),Jx(1586," e/ou "),Sl(1587,"code"),Jx(1588,"p-error-limit"),sg(),Jx(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Sl(1590,"blockquote")(1591,"p"),Jx(1592,"Quando utilizado com "),Sl(1593,"code"),Jx(1594,"p-helper"),sg(),Jx(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),Jx(1600," autoHeight"),Wl(1601,"br"),sg()()(),Sl(1602,"td",21)(1603,"code",29),Jx(1604,"boolean"),sg()(),Sl(1605,"td",24)(1606,"em")(1607,"strong"),Jx(1608,"(opcional)"),sg()(),Sl(1609,"p"),Jx(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),sg(),Sl(1611,"p")(1612,"strong"),Jx(1613,"Componentes compat\xEDveis:"),sg(),Sl(1614,"code"),Jx(1615,"po-multiselect"),sg(),Jx(1616,", "),Sl(1617,"code"),Jx(1618,"po-lookup"),sg(),Jx(1619,"."),sg()()(),Sl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),Jx(1624," autoUpload"),Wl(1625,"br"),sg()()(),Sl(1626,"td",21)(1627,"code",29),Jx(1628,"boolean"),sg()(),Sl(1629,"td",24)(1630,"em")(1631,"strong"),Jx(1632,"(opcional)"),sg()(),Sl(1633,"p"),Jx(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Sl(1635,"p")(1636,"strong"),Jx(1637,"Componente compat\xEDvel"),sg(),Jx(1638,": "),Sl(1639,"code"),Jx(1640,"po-upload"),sg()()()(),Sl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),Jx(1645," booleanFalse"),Wl(1646,"br"),sg()()(),Sl(1647,"td",21)(1648,"code",27),Jx(1649,"string"),sg()(),Sl(1650,"td",24)(1651,"em")(1652,"strong"),Jx(1653,"(opcional)"),sg()(),Sl(1654,"p"),Jx(1655,"Texto exibido quando o valor do componente for "),Sl(1656,"em"),Jx(1657,"false"),sg(),Jx(1658,"."),sg()()(),Sl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),Jx(1663," booleanTrue"),Wl(1664,"br"),sg()()(),Sl(1665,"td",21)(1666,"code",27),Jx(1667,"string"),sg()(),Sl(1668,"td",24)(1669,"em")(1670,"strong"),Jx(1671,"(opcional)"),sg()(),Sl(1672,"p"),Jx(1673,"Texto exibido quando o valor do componente for "),Sl(1674,"em"),Jx(1675,"true"),sg(),Jx(1676,"."),sg()()(),Sl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),Jx(1681," changeOnEnter"),Wl(1682,"br"),sg()()(),Sl(1683,"td",21)(1684,"code",29),Jx(1685,"boolean"),sg()(),Sl(1686,"td",24)(1687,"em")(1688,"strong"),Jx(1689,"(opcional)"),sg()(),Sl(1690,"p"),Jx(1691,"Indica que o evento "),Sl(1692,"code"),Jx(1693,"p-change"),sg(),Jx(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Sl(1695,"code"),Jx(1696,"po-combo"),sg(),Jx(1697,"."),sg()()(),Sl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),Jx(1702," changeVisibleColumns"),Wl(1703,"br"),sg()()(),Sl(1704,"td",21)(1705,"code",44),Jx(1706,"Function"),sg()(),Sl(1707,"td",24)(1708,"em")(1709,"strong"),Jx(1710,"(opcional)"),sg()(),Sl(1711,"p"),Jx(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Sl(1713,"p"),Jx(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Sl(1715,"p")(1716,"strong"),Jx(1717,"Componente compat\xEDvel"),sg(),Jx(1718,": "),Sl(1719,"code"),Jx(1720,"po-lookup"),sg()()()(),Sl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),Jx(1725," clean"),Wl(1726,"br"),sg()()(),Sl(1727,"td",21)(1728,"code",29),Jx(1729,"boolean"),sg()(),Sl(1730,"td",24)(1731,"em")(1732,"strong"),Jx(1733,"(opcional)"),sg()(),Sl(1734,"p"),Jx(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg(),Sl(1736,"p")(1737,"strong"),Jx(1738,"Componentes compat\xEDveis:"),sg(),Sl(1739,"code"),Jx(1740,"po-datepicker"),sg(),Jx(1741,", "),Sl(1742,"code"),Jx(1743,"po-datepicker-range"),sg(),Jx(1744,", "),Sl(1745,"code"),Jx(1746,"po-input"),sg(),Jx(1747,", "),Sl(1748,"code"),Jx(1749,"po-number"),sg(),Jx(1750,", "),Sl(1751,"code"),Jx(1752,"po-decimal"),sg(),Jx(1753,`,
`),Sl(1754,"code"),Jx(1755,"po-combo"),sg(),Jx(1756,", "),Sl(1757,"code"),Jx(1758,"po-lookup"),sg(),Jx(1759,", "),Sl(1760,"code"),Jx(1761,"po-password"),sg(),Jx(1762,", "),Sl(1763,"code"),Jx(1764,"po-timepicker"),sg(),Jx(1765,"."),sg()()(),Sl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),Jx(1770," columnRestoreManager"),Wl(1771,"br"),sg()()(),Sl(1772,"td",21)(1773,"code",44),Jx(1774,"Function"),sg()(),Sl(1775,"td",24)(1776,"em")(1777,"strong"),Jx(1778,"(opcional)"),sg()(),Sl(1779,"p"),Jx(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Sl(1781,"p"),Jx(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Sl(1783,"p")(1784,"strong"),Jx(1785,"Componente compat\xEDvel"),sg(),Jx(1786,": "),Sl(1787,"code"),Jx(1788,"po-lookup"),sg()()()(),Sl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),Jx(1793," columns"),Wl(1794,"br"),sg()()(),Sl(1795,"td",21)(1796,"code",30),Jx(1797,"Array<PoLookupColumn> "),sg(),Sl(1798,"code",45),Jx(1799," number"),sg()(),Sl(1800,"td",24)(1801,"em")(1802,"strong"),Jx(1803,"(opcional)"),sg()(),Sl(1804,"p"),Jx(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Sl(1806,"code"),Jx(1807,"searchService"),sg(),Jx(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Sl(1809,"a",46)(1810,"code"),Jx(1811,"PoLookupColumn"),sg()(),Jx(1812,"."),sg(),Sl(1813,"blockquote")(1814,"p"),Jx(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Sl(1816,"em"),Jx(1817,"label"),sg(),Jx(1818," e "),Sl(1819,"em"),Jx(1820,"value"),sg(),Jx(1821,` para valores
de tela e do model respectivamente.`),sg()(),Sl(1822,"p")(1823,"strong"),Jx(1824,"Componentes compat\xEDveis:"),sg(),Sl(1825,"code"),Jx(1826,"po-radio-group"),sg(),Jx(1827,", "),Sl(1828,"code"),Jx(1829,"po-lookup"),sg(),Jx(1830,", "),Sl(1831,"code"),Jx(1832,"po-checkbox-group"),sg(),Jx(1833,"."),sg()()(),Sl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),Jx(1838," compactLabel"),Wl(1839,"br"),sg()()(),Sl(1840,"td",21)(1841,"code",29),Jx(1842,"boolean"),sg()(),Sl(1843,"td",24)(1844,"em")(1845,"strong"),Jx(1846,"(opcional)"),sg()(),Sl(1847,"p"),Jx(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(1849,"p"),Jx(1850,"Quando habilitado ("),Sl(1851,"code"),Jx(1852,"true"),sg(),Jx(1853,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(1854,"ul")(1855,"li")(1856,"code"),Jx(1857,"po-label"),sg()(),Sl(1858,"li")(1859,"code"),Jx(1860,"p-requirement (showRequired)"),sg()(),Sl(1861,"li")(1862,"code"),Jx(1863,"po-helper"),sg()()(),Sl(1864,"p"),Jx(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(1866,"p"),Jx(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(1868,"ul")(1869,"li")(1870,"code"),Jx(1871,"--field-container-title-justify"),sg()(),Sl(1872,"li")(1873,"code"),Jx(1874,"--field-container-title-flex"),sg()()(),Sl(1875,"p"),Jx(1876,"Exemplo:"),sg(),Sl(1877,"pre")(1878,"code"),Jx(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(1880,"p"),Jx(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),Jx(1886," container"),Wl(1887,"br"),sg()()(),Sl(1888,"td",21)(1889,"code",27),Jx(1890,"string"),sg()(),Sl(1891,"td",24)(1892,"em")(1893,"strong"),Jx(1894,"(opcional)"),sg()(),Sl(1895,"p"),Jx(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Sl(1897,"p"),Jx(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Sl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),Jx(1903," customAction"),Wl(1904,"br"),sg()()(),Sl(1905,"td",21)(1906,"code",47),Jx(1907,"PoProgressAction"),sg()(),Sl(1908,"td",24)(1909,"em")(1910,"strong"),Jx(1911,"(opcional)"),sg()(),Sl(1912,"p"),Jx(1913,"Define uma a\xE7\xE3o personalizada no componente "),Sl(1914,"code"),Jx(1915,"po-upload"),sg(),Jx(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Sl(1917,"p")(1918,"strong"),Jx(1919,"Componente compat\xEDvel"),sg(),Jx(1920,": "),Sl(1921,"code"),Jx(1922,"po-upload"),sg(),Jx(1923,","),sg(),Sl(1924,"p")(1925,"strong"),Jx(1926,"Exemplo de configura\xE7\xE3o"),sg(),Jx(1927,":"),sg(),Sl(1928,"pre")(1929,"code",48),Jx(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),sg()()()(),Sl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),Jx(1935," customActionClick"),Wl(1936,"br"),sg()()(),Sl(1937,"td",21)(1938,"code",49),Jx(1939,"(file: PoUploadFile) => void"),sg()(),Sl(1940,"td",24)(1941,"em")(1942,"strong"),Jx(1943,"(opcional)"),sg()(),Sl(1944,"p"),Jx(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(1946,"code"),Jx(1947,"p-custom-action"),sg(),Jx(1948,"."),sg(),Sl(1949,"p")(1950,"strong"),Jx(1951,"Componente compat\xEDvel"),sg(),Jx(1952,": "),Sl(1953,"code"),Jx(1954,"po-upload"),sg(),Jx(1955,","),sg(),Sl(1956,"p"),Jx(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Sl(1958,"p")(1959,"strong"),Jx(1960,"Par\xE2metro do evento"),sg(),Jx(1961,":"),sg(),Sl(1962,"ul")(1963,"li")(1964,"code"),Jx(1965,"file"),sg(),Jx(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Sl(1967,"code"),Jx(1968,"PoUploadFile"),sg(),Jx(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),sg()(),Sl(1970,"p")(1971,"strong"),Jx(1972,"Exemplo de uso"),sg(),Jx(1973,":"),sg(),Sl(1974,"pre")(1975,"code",48),Jx(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),sg()()()(),Sl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),Jx(1981," debounceTime"),Wl(1982,"br"),sg()()(),Sl(1983,"td",21)(1984,"code",45),Jx(1985,"number"),sg()(),Sl(1986,"td",24)(1987,"em")(1988,"strong"),Jx(1989,"(opcional)"),sg()(),Sl(1990,"p"),Jx(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Sl(1992,"code"),Jx(1993,"p-filter-service"),sg(),Jx(1994,")."),sg(),Sl(1995,"p")(1996,"strong"),Jx(1997,"Componentes compat\xEDveis:"),sg(),Sl(1998,"code"),Jx(1999,"po-combo"),sg(),Jx(2e3,", "),Sl(2001,"code"),Jx(2002,"po-multiselect"),sg(),Jx(2003,"."),sg()()(),Sl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),Jx(2008," decimalsLength"),Wl(2009,"br"),sg()()(),Sl(2010,"td",21)(2011,"code",45),Jx(2012,"number"),sg()(),Sl(2013,"td",24)(2014,"em")(2015,"strong"),Jx(2016,"(opcional)"),sg()(),Sl(2017,"p"),Jx(2018,"Quantidade m\xE1xima de casas decimais."),sg(),Sl(2019,"blockquote")(2020,"p"),Jx(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(2022,"code"),Jx(2023,"type"),sg(),Jx(2024," for "),Sl(2025,"em"),Jx(2026,"currency"),sg(),Jx(2027," ou "),Sl(2028,"em"),Jx(2029,"decimal"),sg(),Jx(2030,"."),sg()()()(),Sl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),Jx(2035," directory"),Wl(2036,"br"),sg()()(),Sl(2037,"td",21)(2038,"code",29),Jx(2039,"boolean"),sg()(),Sl(2040,"td",24)(2041,"em")(2042,"strong"),Jx(2043,"(opcional)"),sg()(),Sl(2044,"p"),Jx(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Sl(2046,"blockquote")(2047,"p"),Jx(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Sl(2049,"blockquote")(2050,"p"),Jx(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(2052,"strong"),Jx(2053,"Internet Explorer"),sg(),Jx(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()(),Sl(2055,"p")(2056,"strong"),Jx(2057,"Componente compat\xEDvel"),sg(),Jx(2058,": "),Sl(2059,"code"),Jx(2060,"po-upload"),sg()()()(),Sl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),Jx(2065," disabled"),Wl(2066,"br"),sg()()(),Sl(2067,"td",21)(2068,"code",29),Jx(2069,"boolean"),sg()(),Sl(2070,"td",24)(2071,"em")(2072,"strong"),Jx(2073,"(opcional)"),sg()(),Sl(2074,"p"),Jx(2075,"Desabilita o campo caso informar o valor "),Sl(2076,"em"),Jx(2077,"true"),sg(),Jx(2078,"."),sg()()(),Sl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),Jx(2083," disabledInitFilter"),Wl(2084,"br"),sg()()(),Sl(2085,"td",21)(2086,"code",29),Jx(2087,"boolean"),sg()(),Sl(2088,"td",24)(2089,"em")(2090,"strong"),Jx(2091,"(opcional)"),sg()(),Sl(2092,"p"),Jx(2093,"Desabilita o filtro inicial no servi\xE7o do "),Sl(2094,"code"),Jx(2095,"po-combo"),sg(),Jx(2096,", que \xE9 executado no primeiro clique no campo."),sg()()(),Sl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),Jx(2101," disabledTabFilter"),Wl(2102,"br"),sg()()(),Sl(2103,"td",21)(2104,"code",29),Jx(2105,"boolean"),sg()(),Sl(2106,"td",24)(2107,"em")(2108,"strong"),Jx(2109,"(opcional)"),sg()(),Sl(2110,"p"),Jx(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Sl(2112,"code"),Jx(2113,"po-combo"),sg(),Jx(2114,"."),sg()()(),Sl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),Jx(2119," divider"),Wl(2120,"br"),sg()()(),Sl(2121,"td",21)(2122,"code",27),Jx(2123,"string"),sg()(),Sl(2124,"td",24)(2125,"em")(2126,"strong"),Jx(2127,"(opcional)"),sg()(),Sl(2128,"p"),Jx(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Sl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),Jx(2134," dragDrop"),Wl(2135,"br"),sg()()(),Sl(2136,"td",21)(2137,"code",29),Jx(2138,"boolean"),sg()(),Sl(2139,"td",24)(2140,"em")(2141,"strong"),Jx(2142,"(opcional)"),sg()(),Sl(2143,"p"),Jx(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Sl(2145,"blockquote")(2146,"p"),Jx(2147,"Recomendamos utilizar apenas um "),Sl(2148,"code"),Jx(2149,"po-upload"),sg(),Jx(2150," com esta funcionalidade por tela."),sg()(),Sl(2151,"p")(2152,"strong"),Jx(2153,"Componente compat\xEDvel"),sg(),Jx(2154,": "),Sl(2155,"code"),Jx(2156,"po-upload"),sg()()()(),Sl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),Jx(2161," dragDropHeight"),Wl(2162,"br"),sg()()(),Sl(2163,"td",21)(2164,"code",45),Jx(2165,"number"),sg()(),Sl(2166,"td",24)(2167,"em")(2168,"strong"),Jx(2169,"(opcional)"),sg()(),Sl(2170,"p"),Jx(2171,"Define em "),Sl(2172,"em"),Jx(2173,"pixels"),sg(),Jx(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(2175,"code"),Jx(2176,"160px"),sg(),Jx(2177,"."),sg(),Sl(2178,"blockquote")(2179,"p"),Jx(2180,"Esta propriedade funciona somente se a propriedade "),Sl(2181,"code"),Jx(2182,"p-drag-drop"),sg(),Jx(2183," estiver habilitada."),sg()(),Sl(2184,"p")(2185,"strong"),Jx(2186,"Componente compat\xEDvel"),sg(),Jx(2187,": "),Sl(2188,"code"),Jx(2189,"po-upload"),sg()()()(),Sl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),Jx(2194," errorAsyncFunction"),Wl(2195,"br"),sg()()(),Sl(2196,"td",21)(2197,"code",50),Jx(2198,"(value) => Observable<boolean>"),sg()(),Sl(2199,"td",24)(2200,"em")(2201,"strong"),Jx(2202,"(opcional)"),sg()(),Sl(2203,"p"),Jx(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(2205,"code"),Jx(2206,"change"),sg(),Jx(2207," ou "),Sl(2208,"code"),Jx(2209,"change-model"),sg(),Jx(2210,", dependendo do valor da propriedade "),Sl(2211,"code"),Jx(2212,"triggerMode"),sg(),Jx(2213,"."),sg(),Sl(2214,"blockquote")(2215,"p"),Jx(2216,"Retorna "),Sl(2217,"code"),Jx(2218,"Observable com o valor true"),sg(),Jx(2219," para sinalizar o erro "),Sl(2220,"code"),Jx(2221,"false"),sg(),Jx(2222," para indicar que n\xE3o h\xE1 erro."),sg()(),Sl(2223,"p")(2224,"strong"),Jx(2225,"Componente compat\xEDvel"),sg(),Jx(2226,": "),Sl(2227,"code"),Jx(2228,"po-datepicker"),sg()()()(),Sl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),Jx(2233," errorAsyncProperties"),Wl(2234,"br"),sg()()(),Sl(2235,"td",21)(2236,"code",51),Jx(2237,"ErrorAsyncProperties"),sg()(),Sl(2238,"td",24)(2239,"em")(2240,"strong"),Jx(2241,"(opcional)"),sg()(),Sl(2242,"p"),Jx(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),sg(),Sl(2244,"p")(2245,"strong"),Jx(2246,"Componentes compat\xEDveis:"),sg(),Sl(2247,"code"),Jx(2248,"po-input"),sg(),Jx(2249,", "),Sl(2250,"code"),Jx(2251,"po-number"),sg(),Jx(2252,", "),Sl(2253,"code"),Jx(2254,"po-decimal"),sg(),Jx(2255,", "),Sl(2256,"code"),Jx(2257,"po-password"),sg(),Jx(2258,"."),sg()()(),Sl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),Jx(2263," errorLimit"),Wl(2264,"br"),sg()()(),Sl(2265,"td",21)(2266,"code",29),Jx(2267,"boolean"),sg()(),Sl(2268,"td",24)(2269,"em")(2270,"strong"),Jx(2271,"(opcional)"),sg()(),Sl(2272,"p"),Jx(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(2274,"blockquote")(2275,"p"),Jx(2276,"Caso essa propriedade seja definida como "),Sl(2277,"code"),Jx(2278,"true"),sg(),Jx(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()(),Sl(2280,"p")(2281,"strong"),Jx(2282,"Componentes compat\xEDveis:"),sg(),Sl(2283,"code"),Jx(2284,"po-checkbox-group"),sg(),Jx(2285,", "),Sl(2286,"code"),Jx(2287,"po-combo"),sg(),Jx(2288,", "),Sl(2289,"code"),Jx(2290,"po-datepicker"),sg(),Jx(2291,", "),Sl(2292,"code"),Jx(2293,"po-datepicker-range"),sg(),Jx(2294,", "),Sl(2295,"code"),Jx(2296,"po-decimal"),sg(),Jx(2297,", "),Sl(2298,"code"),Jx(2299,"po-input"),sg(),Jx(2300,", "),Sl(2301,"code"),Jx(2302,"po-lookup"),sg(),Jx(2303,", "),Sl(2304,"code"),Jx(2305,"po-multiselect"),sg(),Jx(2306,", "),Sl(2307,"code"),Jx(2308,"po-number"),sg(),Jx(2309,", "),Sl(2310,"code"),Jx(2311,"po-password"),sg(),Jx(2312,", "),Sl(2313,"code"),Jx(2314,"po-radio-group"),sg(),Jx(2315,", "),Sl(2316,"code"),Jx(2317,"po-select"),sg(),Jx(2318,`,
`),Sl(2319,"code"),Jx(2320,"po-switch"),sg(),Jx(2321,", "),Sl(2322,"code"),Jx(2323,"po-textarea"),sg(),Jx(2324,", "),Sl(2325,"code"),Jx(2326,"po-timepicker"),sg(),Jx(2327,"."),sg()()(),Sl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),Jx(2332," errorMessage"),Wl(2333,"br"),sg()()(),Sl(2334,"td",21)(2335,"code",27),Jx(2336,"string"),sg()(),Sl(2337,"td",24)(2338,"em")(2339,"strong"),Jx(2340,"(opcional)"),sg()(),Sl(2341,"p"),Jx(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),sg(),Sl(2343,"p"),Jx(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),sg(),Sl(2345,"ul")(2346,"li"),Jx(2347,"pattern;"),sg(),Sl(2348,"li"),Jx(2349,"minValue;"),sg(),Sl(2350,"li"),Jx(2351,"maxValue;"),sg(),Sl(2352,"li"),Jx(2353,"required;"),sg()(),Sl(2354,"blockquote")(2355,"p"),Jx(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Sl(2357,"code"),Jx(2358,"po-datepicker"),sg(),Jx(2359,", "),Sl(2360,"code"),Jx(2361,"po-input"),sg(),Jx(2362,", "),Sl(2363,"code"),Jx(2364,"po-number"),sg(),Jx(2365,", "),Sl(2366,"code"),Jx(2367,"po-decimal"),sg(),Jx(2368,", "),Sl(2369,"code"),Jx(2370,"po-password"),sg(),Jx(2371,", "),Sl(2372,"code"),Jx(2373,"po-timepicker"),sg(),Jx(2374,`, \xE9 necess\xE1rio que a propriedade
`),Sl(2375,"code"),Jx(2376,"requiredFieldErrorMessage"),sg(),Jx(2377," esteja como "),Sl(2378,"code"),Jx(2379,"true"),sg(),Jx(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Sl(2381,"code"),Jx(2382,"po-datepicker-range"),sg(),Jx(2383,", "),Sl(2384,"code"),Jx(2385,"po-select"),sg(),Jx(2386,", "),Sl(2387,"code"),Jx(2388,"po-checkbox-group"),sg(),Jx(2389,", "),Sl(2390,"code"),Jx(2391,"po-radio-group"),sg(),Jx(2392,", "),Sl(2393,"code"),Jx(2394,"po-multiselect"),sg(),Jx(2395,", "),Sl(2396,"code"),Jx(2397,"po-combo"),sg(),Jx(2398,`,
`),Sl(2399,"code"),Jx(2400,"po-lookup"),sg(),Jx(2401," e "),Sl(2402,"code"),Jx(2403,"po-textarea"),sg(),Jx(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Sl(2405,"code"),Jx(2406,"requiredFieldErrorMessage"),sg(),Jx(2407,"."),sg()(),Sl(2408,"p")(2409,"strong"),Jx(2410,"Componentes compat\xEDveis:"),sg(),Sl(2411,"code"),Jx(2412,"po-checkbox-group"),sg(),Jx(2413,", "),Sl(2414,"code"),Jx(2415,"po-combo"),sg(),Jx(2416,", "),Sl(2417,"code"),Jx(2418,"po-datepicker"),sg(),Jx(2419,", "),Sl(2420,"code"),Jx(2421,"po-datepicker-range"),sg(),Jx(2422,", "),Sl(2423,"code"),Jx(2424,"po-decimal"),sg(),Jx(2425,", "),Sl(2426,"code"),Jx(2427,"po-input"),sg(),Jx(2428,", "),Sl(2429,"code"),Jx(2430,"po-lookup"),sg(),Jx(2431,", "),Sl(2432,"code"),Jx(2433,"po-multiselect"),sg(),Jx(2434,", "),Sl(2435,"code"),Jx(2436,"po-number"),sg(),Jx(2437,", "),Sl(2438,"code"),Jx(2439,"po-password"),sg(),Jx(2440,", "),Sl(2441,"code"),Jx(2442,"po-radio-group"),sg(),Jx(2443,", "),Sl(2444,"code"),Jx(2445,"po-select"),sg(),Jx(2446,`,
`),Sl(2447,"code"),Jx(2448,"po-switch"),sg(),Jx(2449,", "),Sl(2450,"code"),Jx(2451,"po-textarea"),sg(),Jx(2452,", "),Sl(2453,"code"),Jx(2454,"po-timepicker"),sg(),Jx(2455,"."),sg()()(),Sl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),Jx(2460," fieldLabel"),Wl(2461,"br"),sg()()(),Sl(2462,"td",21)(2463,"code",27),Jx(2464,"string"),sg()(),Sl(2465,"td",24)(2466,"em")(2467,"strong"),Jx(2468,"(opcional)"),sg()(),Sl(2469,"p"),Jx(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Sl(2471,"p"),Jx(2472,"O valor padr\xE3o \xE9: "),Sl(2473,"code"),Jx(2474,"label"),sg(),Jx(2475,"."),sg(),Sl(2476,"blockquote")(2477,"p"),Jx(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(2479,"code"),Jx(2480,"options"),sg(),Jx(2481,", "),Sl(2482,"code"),Jx(2483,"optionsService"),sg(),Jx(2484," e "),Sl(2485,"code"),Jx(2486,"searchService"),sg(),Jx(2487,"."),sg()()()(),Sl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),Jx(2492," fieldValue"),Wl(2493,"br"),sg()()(),Sl(2494,"td",21)(2495,"code",27),Jx(2496,"string"),sg()(),Sl(2497,"td",24)(2498,"em")(2499,"strong"),Jx(2500,"(opcional)"),sg()(),Sl(2501,"p"),Jx(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Sl(2503,"p"),Jx(2504,"O valor padr\xE3o \xE9: "),Sl(2505,"code"),Jx(2506,"value"),sg(),Jx(2507,"."),sg(),Sl(2508,"blockquote")(2509,"p"),Jx(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(2511,"code"),Jx(2512,"options"),sg(),Jx(2513,", "),Sl(2514,"code"),Jx(2515,"optionsService"),sg(),Jx(2516," e "),Sl(2517,"code"),Jx(2518,"searchService"),sg(),Jx(2519,"."),sg()()()(),Sl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),Jx(2524," filterMinlength"),Wl(2525,"br"),sg()()(),Sl(2526,"td",21)(2527,"code",45),Jx(2528,"number"),sg()(),Sl(2529,"td",24)(2530,"em")(2531,"strong"),Jx(2532,"(opcional)"),sg()(),Sl(2533,"p"),Jx(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Sl(2535,"code"),Jx(2536,"po-combo"),sg(),Jx(2537,"."),sg()()(),Sl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),Jx(2542," filterMode"),Wl(2543,"br"),sg()()(),Sl(2544,"td",21)(2545,"code",52),Jx(2546,"PoMultiselectFilterMode"),sg()(),Sl(2547,"td",24)(2548,"em")(2549,"strong"),Jx(2550,"(opcional)"),sg()(),Sl(2551,"p"),Jx(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Sl(2553,"code"),Jx(2554,"startsWith"),sg(),Jx(2555,", "),Sl(2556,"code"),Jx(2557,"contains"),sg(),Jx(2558," ou "),Sl(2559,"code"),Jx(2560,"endsWith"),sg(),Jx(2561,"."),sg(),Sl(2562,"blockquote")(2563,"p"),Jx(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),sg()(),Sl(2565,"p")(2566,"strong"),Jx(2567,"Componente compat\xEDvel:"),sg(),Sl(2568,"code"),Jx(2569,"po-multiselect"),sg(),Jx(2570,"."),sg()()(),Sl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),Jx(2575," forceBooleanComponentType"),Wl(2576,"br"),sg()()(),Sl(2577,"td",21)(2578,"code",53),Jx(2579,"ForceBooleanComponentEnum"),sg()(),Sl(2580,"td",24)(2581,"em")(2582,"strong"),Jx(2583,"(opcional)"),sg()(),Sl(2584,"p"),Jx(2585,"Valores aceitos:"),sg(),Sl(2586,"ul")(2587,"li"),Jx(2588,"ForceBooleanComponentEnum.switch"),sg(),Sl(2589,"li"),Jx(2590,"ForceBooleanComponentEnum.checkbox"),sg()()()(),Sl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),Jx(2595," forceOptionsComponentType"),Wl(2596,"br"),sg()()(),Sl(2597,"td",21)(2598,"code",54),Jx(2599,"ForceOptionComponentEnum"),sg()(),Sl(2600,"td",24)(2601,"em")(2602,"strong"),Jx(2603,"(opcional)"),sg()(),Sl(2604,"p"),Jx(2605,"pode ser utilizada em conjunto com a propriedade "),Sl(2606,"code"),Jx(2607,"options"),sg(),Jx(2608," for\xE7ando o componente a renderizar um "),Sl(2609,"code"),Jx(2610,"po-select"),sg(),Jx(2611," ou "),Sl(2612,"code"),Jx(2613,"po-radio-group"),sg(),Jx(2614,"."),sg(),Sl(2615,"p"),Jx(2616,"Valores aceitos:"),sg(),Sl(2617,"ul")(2618,"li"),Jx(2619,"ForceOptionComponentEnum.radioGroup"),sg(),Sl(2620,"li"),Jx(2621,"ForceOptionComponentEnum.select"),sg()(),Sl(2622,"blockquote")(2623,"p"),Jx(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Sl(2625,"code"),Jx(2626,"optionsMulti"),sg(),Jx(2627," e "),Sl(2628,"code"),Jx(2629,"optionsService"),sg(),Jx(2630,"."),sg()()()(),Sl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),Jx(2635," formField"),Wl(2636,"br"),sg()()(),Sl(2637,"td",21)(2638,"code",27),Jx(2639,"string"),sg()(),Sl(2640,"td",24)(2641,"em")(2642,"strong"),Jx(2643,"(opcional)"),sg()(),Sl(2644,"p"),Jx(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(2646,"code"),Jx(2647,"url"),sg(),Jx(2648,"."),sg(),Sl(2649,"blockquote")(2650,"p"),Jx(2651,"O valor default \xE9 "),Sl(2652,"code"),Jx(2653,"files"),sg()()(),Sl(2654,"p")(2655,"strong"),Jx(2656,"Componente compat\xEDvel"),sg(),Jx(2657,": "),Sl(2658,"code"),Jx(2659,"po-upload"),sg()()()(),Sl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),Jx(2664," format"),Wl(2665,"br"),sg()()(),Sl(2666,"td",21)(2667,"code",27),Jx(2668,"string "),sg(),Sl(2669,"code",32),Jx(2670," Array<string>"),sg()(),Sl(2671,"td",24)(2672,"em")(2673,"strong"),Jx(2674,"(opcional)"),sg()(),Sl(2675,"p"),Jx(2676,"Formato de exibi\xE7\xE3o no campo."),sg(),Sl(2677,"p"),Jx(2678,"Ao utilizar esta propriedade com o "),Sl(2679,"code"),Jx(2680,"type"),sg(),Sl(2681,"em"),Jx(2682,"PoDynamicFieldType.Date"),sg(),Jx(2683," ou "),Sl(2684,"em"),Jx(2685,"PoDynamicFieldType.DateTime"),sg(),Jx(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),sg(),Sl(2687,"p"),Jx(2688,"Valores v\xE1lidos:"),sg(),Sl(2689,"ul")(2690,"li"),Jx(2691,"dd/mm/yyyy"),sg(),Sl(2692,"li"),Jx(2693,"mm/dd/yyyy"),sg(),Sl(2694,"li"),Jx(2695,"yyyy/mm/dd"),sg()(),Sl(2696,"p"),Jx(2697,"Ao utilizar com o "),Sl(2698,"code"),Jx(2699,"type"),sg(),Sl(2700,"em"),Jx(2701,"PoDynamicFieldType.Time"),sg(),Jx(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),sg(),Sl(2703,"p"),Jx(2704,"Valores v\xE1lidos:"),sg(),Sl(2705,"ul")(2706,"li")(2707,"code"),Jx(2708,"24"),sg(),Jx(2709,": formato de 24 horas (padr\xE3o)"),sg(),Sl(2710,"li")(2711,"code"),Jx(2712,"12"),sg(),Jx(2713,": formato de 12 horas com indicador AM/PM"),sg()(),Sl(2714,"p"),Jx(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Sl(2716,"code"),Jx(2717,"searchService"),sg(),Jx(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),sg(),Sl(2719,"p")(2720,"strong"),Jx(2721,"Componentes compat\xEDveis:"),sg(),Sl(2722,"code"),Jx(2723,"po-datepicker"),sg(),Jx(2724,", "),Sl(2725,"code"),Jx(2726,"po-timepicker"),sg(),Jx(2727,", "),Sl(2728,"code"),Jx(2729,"po-lookup"),sg(),Jx(2730,"."),sg()()(),Sl(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),Jx(2735," formatModel"),Wl(2736,"br"),sg()()(),Sl(2737,"td",21)(2738,"code",29),Jx(2739,"boolean"),sg()(),Sl(2740,"td",24)(2741,"em")(2742,"strong"),Jx(2743,"(opcional)"),sg()(),Sl(2744,"p"),Jx(2745,"Indica se o "),Sl(2746,"code"),Jx(2747,"model"),sg(),Jx(2748," receber\xE1 o valor formatado pelas propriedades "),Sl(2749,"code"),Jx(2750,"p-label-on"),sg(),Jx(2751," e "),Sl(2752,"code"),Jx(2753,"p-label-off"),sg(),Jx(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Sl(2755,"p"),Jx(2756,"O valor padr\xE3o \xE9: "),Sl(2757,"code"),Jx(2758,"false"),sg(),Jx(2759,"."),sg(),Sl(2760,"blockquote")(2761,"p"),Jx(2762,"Esta propriedade est\xE1 disponivel apenas para o "),Sl(2763,"code"),Jx(2764,"swicth"),sg(),Jx(2765,"."),sg()()()(),Sl(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),Jx(2770," formatTime"),Wl(2771,"br"),sg()()(),Sl(2772,"td",21)(2773,"code",27),Jx(2774,"string"),sg()(),Sl(2775,"td",24)(2776,"em")(2777,"strong"),Jx(2778,"(opcional)"),sg()(),Sl(2779,"p"),Jx(2780,"Define o formato de exibi\xE7\xE3o do timer ("),Sl(2781,"code"),Jx(2782,"'12'"),sg(),Jx(2783," ou "),Sl(2784,"code"),Jx(2785,"'24'"),sg(),Jx(2786,")."),sg(),Sl(2787,"p")(2788,"strong"),Jx(2789,"Componente compat\xEDvel:"),sg(),Sl(2790,"code"),Jx(2791,"po-datetimepicker"),sg(),Jx(2792,", "),Sl(2793,"code"),Jx(2794,"po-timepicker"),sg()()()(),Sl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),Jx(2799," gridColumns"),Wl(2800,"br"),sg()()(),Sl(2801,"td",21)(2802,"code",45),Jx(2803,"number"),sg()(),Sl(2804,"td",24)(2805,"em")(2806,"strong"),Jx(2807,"(opcional)"),sg()(),Sl(2808,"p"),Jx(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Sl(2810,"p"),Jx(2811,"Deve ser usado o sistema de "),Sl(2812,"strong"),Jx(2813,"grid"),sg(),Jx(2814," do PO (1 ... 12 colunas)."),sg(),Sl(2815,"blockquote")(2816,"p"),Jx(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Sl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),Jx(2822," gridLgColumns"),Wl(2823,"br"),sg()()(),Sl(2824,"td",21)(2825,"code",45),Jx(2826,"number"),sg()(),Sl(2827,"td",24)(2828,"em")(2829,"strong"),Jx(2830,"(opcional)"),sg()(),Sl(2831,"p"),Jx(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Sl(2833,"p"),Jx(2834,"Deve ser usado o sistema de "),Sl(2835,"strong"),Jx(2836,"grid"),sg(),Jx(2837," do PO (1 ... 12 colunas)."),sg(),Sl(2838,"blockquote")(2839,"p"),Jx(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2841,"code"),Jx(2842,"gridColumns"),sg(),Jx(2843,"."),sg()()()(),Sl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),Jx(2848," gridLgPull"),Wl(2849,"br"),sg()()(),Sl(2850,"td",21)(2851,"code",45),Jx(2852,"number"),sg()(),Sl(2853,"td",24)(2854,"em")(2855,"strong"),Jx(2856,"(opcional)"),sg()(),Sl(2857,"p"),Jx(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Sl(2859,"p"),Jx(2860,"Deve ser usado o sistema de "),Sl(2861,"strong"),Jx(2862,"grid"),sg(),Jx(2863," do PO (1 ... 11 colunas)."),sg(),Sl(2864,"blockquote")(2865,"p"),Jx(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2867,"code"),Jx(2868,"gridColumns"),sg(),Jx(2869,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),Jx(2874," gridMdColumns"),Wl(2875,"br"),sg()()(),Sl(2876,"td",21)(2877,"code",45),Jx(2878,"number"),sg()(),Sl(2879,"td",24)(2880,"em")(2881,"strong"),Jx(2882,"(opcional)"),sg()(),Sl(2883,"p"),Jx(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Sl(2885,"p"),Jx(2886,"Deve ser usado o sistema de "),Sl(2887,"strong"),Jx(2888,"grid"),sg(),Jx(2889," do PO (1 ... 12 colunas)."),sg(),Sl(2890,"blockquote")(2891,"p"),Jx(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2893,"code"),Jx(2894,"gridColumns"),sg(),Jx(2895,"."),sg()()()(),Sl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),Jx(2900," gridMdPull"),Wl(2901,"br"),sg()()(),Sl(2902,"td",21)(2903,"code",45),Jx(2904,"number"),sg()(),Sl(2905,"td",24)(2906,"em")(2907,"strong"),Jx(2908,"(opcional)"),sg()(),Sl(2909,"p"),Jx(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Sl(2911,"p"),Jx(2912,"Deve ser usado o sistema de "),Sl(2913,"strong"),Jx(2914,"grid"),sg(),Jx(2915," do PO (1 ... 11 colunas)."),sg(),Sl(2916,"blockquote")(2917,"p"),Jx(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2919,"code"),Jx(2920,"gridColumns"),sg(),Jx(2921,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),Jx(2926," gridSmColumns"),Wl(2927,"br"),sg()()(),Sl(2928,"td",21)(2929,"code",45),Jx(2930,"number"),sg()(),Sl(2931,"td",24)(2932,"em")(2933,"strong"),Jx(2934,"(opcional)"),sg()(),Sl(2935,"p"),Jx(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Sl(2937,"p"),Jx(2938,"Deve ser usado o sistema de "),Sl(2939,"strong"),Jx(2940,"grid"),sg(),Jx(2941," do PO (1 ... 12 colunas)."),sg(),Sl(2942,"blockquote")(2943,"p"),Jx(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2945,"code"),Jx(2946,"gridColumns"),sg(),Jx(2947,"."),sg()()()(),Sl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),Jx(2952," gridSmPull"),Wl(2953,"br"),sg()()(),Sl(2954,"td",21)(2955,"code",45),Jx(2956,"number"),sg()(),Sl(2957,"td",24)(2958,"em")(2959,"strong"),Jx(2960,"(opcional)"),sg()(),Sl(2961,"p"),Jx(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Sl(2963,"p"),Jx(2964,"Deve ser usado o sistema de "),Sl(2965,"strong"),Jx(2966,"grid"),sg(),Jx(2967," do PO (1 ... 11 colunas)."),sg(),Sl(2968,"blockquote")(2969,"p"),Jx(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2971,"code"),Jx(2972,"gridColumns"),sg(),Jx(2973,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),Jx(2978," gridXlColumns"),Wl(2979,"br"),sg()()(),Sl(2980,"td",21)(2981,"code",45),Jx(2982,"number"),sg()(),Sl(2983,"td",24)(2984,"em")(2985,"strong"),Jx(2986,"(opcional)"),sg()(),Sl(2987,"p"),Jx(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Sl(2989,"p"),Jx(2990,"Deve ser usado o sistema de "),Sl(2991,"strong"),Jx(2992,"grid"),sg(),Jx(2993," do PO (1 ... 12 colunas)."),sg(),Sl(2994,"blockquote")(2995,"p"),Jx(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2997,"code"),Jx(2998,"gridColumns"),sg(),Jx(2999,"."),sg()()()(),Sl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),Jx(3004," gridXlPull"),Wl(3005,"br"),sg()()(),Sl(3006,"td",21)(3007,"code",45),Jx(3008,"number"),sg()(),Sl(3009,"td",24)(3010,"em")(3011,"strong"),Jx(3012,"(opcional)"),sg()(),Sl(3013,"p"),Jx(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Sl(3015,"p"),Jx(3016,"Deve ser usado o sistema de "),Sl(3017,"strong"),Jx(3018,"grid"),sg(),Jx(3019," do PO (1 ... 11 colunas)."),sg(),Sl(3020,"blockquote")(3021,"p"),Jx(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(3023,"code"),Jx(3024,"gridColumns"),sg(),Jx(3025,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),Jx(3030," headers"),Wl(3031,"br"),sg()()(),Sl(3032,"td",21)(3033,"code",55),Jx(3034,"{ [name: string]: string "),sg(),Sl(3035,"code",56),Jx(3036,` Array<string>;
}`),sg()(),Sl(3037,"td",24)(3038,"em")(3039,"strong"),Jx(3040,"(opcional)"),sg()(),Sl(3041,"p"),Jx(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg(),Sl(3043,"p")(3044,"strong"),Jx(3045,"Componente compat\xEDvel"),sg(),Jx(3046,": "),Sl(3047,"code"),Jx(3048,"po-upload"),sg()()()(),Sl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),Jx(3053," help"),Wl(3054,"br"),sg()()(),Sl(3055,"td",21)(3056,"code",27),Jx(3057,"string"),sg()(),Sl(3058,"td",24)(3059,"em")(3060,"strong"),Jx(3061,"(opcional)"),sg()(),Sl(3062,"p"),Jx(3063,"Texto de ajuda."),sg()()(),Sl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),Jx(3068," helper"),Wl(3069,"br"),sg()()(),Sl(3070,"td",21)(3071,"code",27),Jx(3072,"string "),sg(),Sl(3073,"code",38),Jx(3074," PoHelperOptions"),sg()(),Sl(3075,"td",24)(3076,"em")(3077,"strong"),Jx(3078,"(opcional)"),sg()(),Sl(3079,"p"),Jx(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),sg()()(),Sl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),Jx(3085," hideLabelStatus"),Wl(3086,"br"),sg()()(),Sl(3087,"td",21)(3088,"code",29),Jx(3089,"boolean"),sg()(),Sl(3090,"td",24)(3091,"em")(3092,"strong"),Jx(3093,"(opcional)"),sg()(),Sl(3094,"p"),Jx(3095,"Indica se o status do "),Sl(3096,"code"),Jx(3097,"model"),sg(),Jx(3098," ser\xE1 escondido visualmente ao lado do switch"),sg()()(),Sl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),Jx(3103," hidePasswordPeek"),Wl(3104,"br"),sg()()(),Sl(3105,"td",21)(3106,"code",29),Jx(3107,"boolean"),sg()(),Sl(3108,"td",24)(3109,"em")(3110,"strong"),Jx(3111,"(opcional)"),sg()(),Sl(3112,"p"),Jx(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Sl(3114,"code"),Jx(3115,"po-password"),sg(),Jx(3116,"."),sg()()(),Sl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),Jx(3121," hideRestrictionsInfo"),Wl(3122,"br"),sg()()(),Sl(3123,"td",21)(3124,"code",29),Jx(3125,"boolean"),sg()(),Sl(3126,"td",24)(3127,"em")(3128,"strong"),Jx(3129,"(opcional)"),sg()(),Sl(3130,"p"),Jx(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg(),Sl(3132,"p")(3133,"strong"),Jx(3134,"Componente compat\xEDvel"),sg(),Jx(3135,": "),Sl(3136,"code"),Jx(3137,"po-upload"),sg()()()(),Sl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),Jx(3142," hideSearch"),Wl(3143,"br"),sg()()(),Sl(3144,"td",21)(3145,"code",29),Jx(3146,"boolean"),sg()(),Sl(3147,"td",24)(3148,"em")(3149,"strong"),Jx(3150,"(opcional)"),sg()(),Sl(3151,"p"),Jx(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Sl(3153,"code"),Jx(3154,"po-multiselect"),sg(),Jx(3155,"."),sg()()(),Sl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),Jx(3160," hideSelectAll"),Wl(3161,"br"),sg()()(),Sl(3162,"td",21)(3163,"code",29),Jx(3164,"boolean"),sg()(),Sl(3165,"td",24)(3166,"em")(3167,"strong"),Jx(3168,"(opcional)"),sg()(),Sl(3169,"p"),Jx(3170,'Indica se o campo "Selecionar todos" do '),Sl(3171,"code"),Jx(3172,"po-multiselect"),sg(),Jx(3173," ser\xE1 escondido."),sg()()(),Sl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),Jx(3178," hideSelectButton"),Wl(3179,"br"),sg()()(),Sl(3180,"td",21)(3181,"code",29),Jx(3182,"boolean"),sg()(),Sl(3183,"td",24)(3184,"em")(3185,"strong"),Jx(3186,"(opcional)"),sg()(),Sl(3187,"p"),Jx(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Sl(3189,"blockquote")(3190,"p"),Jx(3191,"Caso o valor definido seja "),Sl(3192,"code"),Jx(3193,"true"),sg(),Jx(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(3195,"code"),Jx(3196,"selectFiles()"),sg(),Jx(3197," para sele\xE7\xE3o de arquivos."),sg()(),Sl(3198,"p")(3199,"strong"),Jx(3200,"Componente compat\xEDvel"),sg(),Jx(3201,": "),Sl(3202,"code"),Jx(3203,"po-upload"),sg()()()(),Sl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),Jx(3208," hideSendButton"),Wl(3209,"br"),sg()()(),Sl(3210,"td",21)(3211,"code",29),Jx(3212,"boolean"),sg()(),Sl(3213,"td",24)(3214,"em")(3215,"strong"),Jx(3216,"(opcional)"),sg()(),Sl(3217,"p"),Jx(3218,"Omite o bot\xE3o de envio de arquivos."),sg(),Sl(3219,"blockquote")(3220,"p"),Jx(3221,"Caso o valor definido seja "),Sl(3222,"code"),Jx(3223,"true"),sg(),Jx(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(3225,"code"),Jx(3226,"sendFiles()"),sg(),Jx(3227," para envio do(s) arquivo(s) selecionado(s)."),sg()(),Sl(3228,"p")(3229,"strong"),Jx(3230,"Componente compat\xEDvel"),sg(),Jx(3231,": "),Sl(3232,"code"),Jx(3233,"po-upload"),sg()()()(),Sl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),Jx(3238," icon"),Wl(3239,"br"),sg()()(),Sl(3240,"td",21)(3241,"code",27),Jx(3242,"string "),sg(),Sl(3243,"code",57),Jx(3244," TemplateRef<void>"),sg()(),Sl(3245,"td",24)(3246,"em")(3247,"strong"),Jx(3248,"(opcional)"),sg()(),Sl(3249,"p"),Jx(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(3251,"blockquote")(3252,"p"),Jx(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),sg()(),Sl(3254,"ul")(3255,"li"),Jx(3256,"Input;"),sg(),Sl(3257,"li"),Jx(3258,"Number;"),sg(),Sl(3259,"li"),Jx(3260,"Decimal;"),sg(),Sl(3261,"li"),Jx(3262,"Combo;"),sg(),Sl(3263,"li"),Jx(3264,"Password;"),sg()(),Sl(3265,"blockquote")(3266,"p"),Jx(3267,"Veja a disponibilidade de \xEDcones em "),Sl(3268,"a",58),Jx(3269,"biblioteca de \xEDcones"),sg(),Jx(3270,"."),sg()()()(),Sl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),Jx(3275," infiniteScroll"),Wl(3276,"br"),sg()()(),Sl(3277,"td",21)(3278,"code",29),Jx(3279,"boolean"),sg()(),Sl(3280,"td",24)(3281,"em")(3282,"strong"),Jx(3283,"(opcional)"),sg()(),Sl(3284,"p"),Jx(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg(),Sl(3286,"p")(3287,"strong"),Jx(3288,"Componentes compat\xEDveis:"),sg(),Sl(3289,"code"),Jx(3290,"po-combo"),sg(),Jx(3291,", "),Sl(3292,"code"),Jx(3293,"po-lookup"),sg(),Jx(3294,"."),sg()()(),Sl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),Jx(3299," infiniteScrollDistance"),Wl(3300,"br"),sg()()(),Sl(3301,"td",21)(3302,"code",45),Jx(3303,"number"),sg()(),Sl(3304,"td",24)(3305,"em")(3306,"strong"),Jx(3307,"(opcional)"),sg()(),Sl(3308,"p"),Jx(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Sl(3310,"strong"),Jx(3311,"Exemplos"),sg(),Sl(3312,"code"),Jx(3313,"{ infiniteScrollDistance: 80 }"),sg(),Jx(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),sg(),Sl(3315,"p")(3316,"strong"),Jx(3317,"Componente compat\xEDvel:"),sg(),Sl(3318,"code"),Jx(3319,"po-combo"),sg(),Jx(3320,"."),sg()()(),Sl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),Jx(3325," invalidValue"),Wl(3326,"br"),sg()()(),Sl(3327,"td",21)(3328,"code",29),Jx(3329,"boolean"),sg()(),Sl(3330,"td",24)(3331,"em")(3332,"strong"),Jx(3333,"(opcional)"),sg()(),Sl(3334,"p"),Jx(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(3336,"code"),Jx(3337,"p-field-error-message"),sg(),Jx(3338,"."),sg(),Sl(3339,"blockquote")(3340,"p"),Jx(3341,"Caso essa propriedade seja definida como "),Sl(3342,"code"),Jx(3343,"true"),sg(),Jx(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()(),Sl(3345,"p")(3346,"strong"),Jx(3347,"Componente compat\xEDvel"),sg(),Jx(3348,": "),Sl(3349,"code"),Jx(3350,"po-switch"),sg()()()(),Sl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),Jx(3355," isoFormat"),Wl(3356,"br"),sg()()(),Sl(3357,"td",21)(3358,"code",59),Jx(3359,"PoDatepickerIsoFormat"),sg()(),Sl(3360,"td",24)(3361,"em")(3362,"strong"),Jx(3363,"(opcional)"),sg()(),Sl(3364,"p"),Jx(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),sg(),Sl(3366,"blockquote")(3367,"p"),Jx(3368,"Veja os valores v\xE1lidos no "),Sl(3369,"code"),Jx(3370,"PoDatepickerIsoFormat"),sg(),Jx(3371,"."),sg()(),Sl(3372,"p")(3373,"strong"),Jx(3374,"Componente compat\xEDvel:"),sg(),Sl(3375,"code"),Jx(3376,"po-datepicker"),sg()()()(),Sl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),Jx(3381," key"),Wl(3382,"br"),sg()()(),Sl(3383,"td",21)(3384,"code",29),Jx(3385,"boolean"),sg()(),Sl(3386,"td",24)(3387,"em")(3388,"strong"),Jx(3389,"(opcional)"),sg()(),Sl(3390,"p"),Jx(3391,"Identificador"),sg()()(),Sl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),Jx(3396," keydown"),Wl(3397,"br"),sg()()(),Sl(3398,"td",21)(3399,"code",44),Jx(3400,"Function"),sg()(),Sl(3401,"td",24)(3402,"em")(3403,"strong"),Jx(3404,"(opcional)"),sg()(),Sl(3405,"p"),Jx(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(3407,"code"),Jx(3408,"KeyboardEvent"),sg(),Jx(3409," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),Jx(3414," label"),Wl(3415,"br"),sg()()(),Sl(3416,"td",21)(3417,"code",27),Jx(3418,"string"),sg()(),Sl(3419,"td",24)(3420,"em")(3421,"strong"),Jx(3422,"(opcional)"),sg()(),Sl(3423,"p"),Jx(3424,"R\xF3tulo do campo exibido."),sg(),Sl(3425,"p"),Jx(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(3427,"code"),Jx(3428,"label"),sg(),Jx(3429," o valor da propriedade "),Sl(3430,"code"),Jx(3431,"property"),sg(),Jx(3432," com a primeira letra em mai\xFAsculo."),sg()()(),Sl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),Jx(3437," labelPosition"),Wl(3438,"br"),sg()()(),Sl(3439,"td",21)(3440,"code",60),Jx(3441,"PoSwitchLabelPosition"),sg()(),Sl(3442,"td",24)(3443,"em")(3444,"strong"),Jx(3445,"(opcional)"),sg()(),Sl(3446,"p"),Jx(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),sg(),Sl(3448,"blockquote")(3449,"p"),Jx(3450,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Sl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),Jx(3455," listboxControlPosition"),Wl(3456,"br"),sg()()(),Sl(3457,"td",21)(3458,"code",61),Jx(3459,"'top' "),sg(),Sl(3460,"code",62),Jx(3461," 'bottom'"),sg()(),Sl(3462,"td",24)(3463,"em")(3464,"strong"),Jx(3465,"(opcional)"),sg()(),Sl(3466,"p"),Jx(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Sl(3468,"code"),Jx(3469,"listbox"),sg(),Jx(3470," em rela\xE7\xE3o ao campo ("),Sl(3471,"code"),Jx(3472,"top"),sg(),Jx(3473," ou "),Sl(3474,"code"),Jx(3475,"bottom"),sg(),Jx(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg(),Sl(3477,"p")(3478,"strong"),Jx(3479,"Componentes compat\xEDveis:"),sg(),Sl(3480,"code"),Jx(3481,"po-multiselect"),sg(),Jx(3482,", "),Sl(3483,"code"),Jx(3484,"po-combo"),sg(),Jx(3485,"."),sg()()(),Sl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),Jx(3490," literals"),Wl(3491,"br"),sg()()(),Sl(3492,"td",21)(3493,"code",36),Jx(3494,"PoLookupLiterals "),sg(),Sl(3495,"code",63),Jx(3496," PoMultiselectLiterals "),sg(),Sl(3497,"code",64),Jx(3498," PoComboLiterals "),sg(),Sl(3499,"code",65),Jx(3500," PoDatepickerRangeLiterals "),sg(),Sl(3501,"code",66),Jx(3502," PoUploadLiterals"),sg()(),Sl(3503,"td",24)(3504,"em")(3505,"strong"),Jx(3506,"(opcional)"),sg()(),Sl(3507,"p"),Jx(3508,"Objeto com as literais usadas para os seguintes componentes: "),Sl(3509,"code"),Jx(3510,"po-lookup"),sg(),Jx(3511,", "),Sl(3512,"code"),Jx(3513,"po-multiselect"),sg(),Jx(3514,", "),Sl(3515,"code"),Jx(3516,"po-combo"),sg(),Jx(3517," e "),Sl(3518,"code"),Jx(3519,"po-datepicker-range"),sg(),Jx(3520,"."),sg(),Sl(3521,"blockquote")(3522,"p"),Jx(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),sg()(),Sl(3524,"p")(3525,"strong"),Jx(3526,"Componentes compat\xEDveis:"),sg(),Sl(3527,"code"),Jx(3528,"po-lookup"),sg(),Jx(3529,", "),Sl(3530,"code"),Jx(3531,"po-multiselect"),sg(),Jx(3532,", "),Sl(3533,"code"),Jx(3534,"po-combo"),sg(),Jx(3535,", "),Sl(3536,"code"),Jx(3537,"po-datepicker-range"),sg()()()(),Sl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),Jx(3542," loading"),Wl(3543,"br"),sg()()(),Sl(3544,"td",21)(3545,"code",29),Jx(3546,"boolean"),sg()(),Sl(3547,"td",24)(3548,"em")(3549,"strong"),Jx(3550,"(opcional)"),sg()(),Sl(3551,"p"),Jx(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),sg(),Sl(3553,"blockquote")(3554,"p"),Jx(3555,"Por padr\xE3o \xE9 "),Sl(3556,"code"),Jx(3557,"false"),sg(),Jx(3558,"."),sg()(),Sl(3559,"p")(3560,"strong"),Jx(3561,"Componentes compat\xEDveis:"),sg(),Sl(3562,"code"),Jx(3563,"po-datepicker"),sg(),Jx(3564,", "),Sl(3565,"code"),Jx(3566,"po-datepicker-range"),sg(),Jx(3567,", "),Sl(3568,"code"),Jx(3569,"po-number"),sg(),Jx(3570,", "),Sl(3571,"code"),Jx(3572,"po-decimal"),sg(),Jx(3573,`,
`),Sl(3574,"code"),Jx(3575,"po-input"),sg(),Jx(3576,", "),Sl(3577,"code"),Jx(3578,"po-select"),sg(),Jx(3579,", "),Sl(3580,"code"),Jx(3581,"po-switch"),sg(),Jx(3582,", "),Sl(3583,"code"),Jx(3584,"po-combo"),sg(),Jx(3585,", "),Sl(3586,"code"),Jx(3587,"po-lookup"),sg(),Jx(3588,", "),Sl(3589,"code"),Jx(3590,"po-multiselect"),sg(),Jx(3591,`,
`),Sl(3592,"code"),Jx(3593,"po-textarea"),sg(),Jx(3594,", "),Sl(3595,"code"),Jx(3596,"po-password"),sg(),Jx(3597,", "),Sl(3598,"code"),Jx(3599,"po-upload"),sg(),Jx(3600,"."),sg()()(),Sl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),Jx(3605," locale"),Wl(3606,"br"),sg()()(),Sl(3607,"td",21)(3608,"code",27),Jx(3609,"string"),sg()(),Sl(3610,"td",24)(3611,"em")(3612,"strong"),Jx(3613,"(opcional)"),sg()(),Sl(3614,"p"),Jx(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Sl(3616,"a",67)(3617,"code"),Jx(3618,"I18n"),sg()()(),Sl(3619,"p"),Jx(3620,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(3621,"pre")(3622,"code"),Jx(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),sg()(),Sl(3624,"blockquote")(3625,"p"),Jx(3626,"Para ver quais linguagens suportadas acesse "),Sl(3627,"a",67)(3628,"code"),Jx(3629,"I18n"),sg()()()(),Sl(3630,"p")(3631,"strong"),Jx(3632,"Componentes compat\xEDveis:"),sg(),Sl(3633,"code"),Jx(3634,"po-datepicker"),sg(),Jx(3635,", "),Sl(3636,"code"),Jx(3637,"po-decimal"),sg(),Jx(3638,", "),Sl(3639,"code"),Jx(3640,"po-timepicker"),sg(),Jx(3641,"."),sg()()(),Sl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),Jx(3646," mask"),Wl(3647,"br"),sg()()(),Sl(3648,"td",21)(3649,"code",27),Jx(3650,"string"),sg()(),Sl(3651,"td",24)(3652,"em")(3653,"strong"),Jx(3654,"(opcional)"),sg()(),Sl(3655,"p"),Jx(3656,"M\xE1scara para o campo."),sg(),Sl(3657,"p")(3658,"strong"),Jx(3659,"Componente compat\xEDvel:"),sg(),Sl(3660,"code"),Jx(3661,"po-input"),sg(),Jx(3662,"."),sg(),Sl(3663,"blockquote")(3664,"p"),Jx(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(3666,"code"),Jx(3667,"type: time"),sg(),Jx(3668,"."),sg()()()(),Sl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),Jx(3673," maskFormatModel"),Wl(3674,"br"),sg()()(),Sl(3675,"td",21)(3676,"code",29),Jx(3677,"boolean"),sg()(),Sl(3678,"td",24)(3679,"em")(3680,"strong"),Jx(3681,"(opcional)"),sg()(),Sl(3682,"p"),Jx(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Sl(3684,"code"),Jx(3685,"false"),sg(),Jx(3686,"."),sg(),Sl(3687,"p")(3688,"strong"),Jx(3689,"Componente compat\xEDvel:"),sg(),Sl(3690,"code"),Jx(3691,"po-input"),sg(),Jx(3692,"."),sg(),Sl(3693,"blockquote")(3694,"p"),Jx(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(3696,"code"),Jx(3697,"type: time"),sg(),Jx(3698,"."),sg()()()(),Sl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),Jx(3703," maskNoLengthValidation"),Wl(3704,"br"),sg()()(),Sl(3705,"td",21)(3706,"code",29),Jx(3707,"boolean"),sg()(),Sl(3708,"td",24)(3709,"em")(3710,"strong"),Jx(3711,"(opcional)"),sg()(),Sl(3712,"p"),Jx(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(3714,"code"),Jx(3715,"minLength"),sg(),Jx(3716,") e m\xE1ximo ("),Sl(3717,"code"),Jx(3718,"maxLength"),sg(),Jx(3719,") quando h\xE1 uma m\xE1scara ("),Sl(3720,"code"),Jx(3721,"p-mask"),sg(),Jx(3722,") definida."),sg(),Sl(3723,"ul")(3724,"li"),Jx(3725,"Quando "),Sl(3726,"code"),Jx(3727,"true"),sg(),Jx(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(3729,"li"),Jx(3730,"Quando "),Sl(3731,"code"),Jx(3732,"false"),sg(),Jx(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(3734,"p")(3735,"strong"),Jx(3736,"Componentes compat\xEDveis:"),sg(),Sl(3737,"code"),Jx(3738,"po-input"),sg(),Jx(3739,", "),Sl(3740,"code"),Jx(3741,"po-decimal"),sg(),Jx(3742,"."),sg(),Sl(3743,"blockquote")(3744,"p"),Jx(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(3746,"code"),Jx(3747,"p-mask-format-model"),sg(),Jx(3748,"."),sg()(),Sl(3749,"p"),Jx(3750,"Exemplo:"),sg(),Sl(3751,"pre")(3752,"code"),Jx(3753,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),sg()(),Sl(3754,"ul")(3755,"li"),Jx(3756,"Entrada: "),Sl(3757,"code"),Jx(3758,"11.111.111/1111-11"),sg(),Jx(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),sg()()()(),Sl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),Jx(3764," maxLength"),Wl(3765,"br"),sg()()(),Sl(3766,"td",21)(3767,"code",45),Jx(3768,"number"),sg()(),Sl(3769,"td",24)(3770,"em")(3771,"strong"),Jx(3772,"(opcional)"),sg()(),Sl(3773,"p"),Jx(3774,"Tamanho m\xE1ximo de caracteres."),sg(),Sl(3775,"p")(3776,"strong"),Jx(3777,"Componentes compat\xEDveis:"),sg(),Sl(3778,"code"),Jx(3779,"po-input"),sg(),Jx(3780,", "),Sl(3781,"code"),Jx(3782,"po-number"),sg(),Jx(3783,", "),Sl(3784,"code"),Jx(3785,"po-decimal"),sg(),Jx(3786,", "),Sl(3787,"code"),Jx(3788,"po-textarea"),sg(),Jx(3789,", "),Sl(3790,"code"),Jx(3791,"po-password"),sg(),Jx(3792,"."),sg()()(),Sl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),Jx(3797," maxTime"),Wl(3798,"br"),sg()()(),Sl(3799,"td",21)(3800,"code",27),Jx(3801,"string"),sg()(),Sl(3802,"td",24)(3803,"em")(3804,"strong"),Jx(3805,"(opcional)"),sg()(),Sl(3806,"p"),Jx(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3808,"code"),Jx(3809,"HH:mm"),sg(),Jx(3810," ou "),Sl(3811,"code"),Jx(3812,"HH:mm:ss"),sg(),Jx(3813,"."),sg(),Sl(3814,"p")(3815,"strong"),Jx(3816,"Componente compat\xEDvel:"),sg(),Sl(3817,"code"),Jx(3818,"po-datetimepicker"),sg(),Jx(3819,", "),Sl(3820,"code"),Jx(3821,"po-timepicker"),sg()()()(),Sl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),Jx(3826," maxValue"),Wl(3827,"br"),sg()()(),Sl(3828,"td",21)(3829,"code",27),Jx(3830,"string "),sg(),Sl(3831,"code",45),Jx(3832," number"),sg()(),Sl(3833,"td",24)(3834,"em")(3835,"strong"),Jx(3836,"(opcional)"),sg()(),Sl(3837,"p"),Jx(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3839,"em"),Jx(3840,"number"),sg(),Jx(3841,", "),Sl(3842,"em"),Jx(3843,"date"),sg(),Jx(3844,", "),Sl(3845,"em"),Jx(3846,"dateTime"),sg(),Jx(3847," ou "),Sl(3848,"em"),Jx(3849,"time"),sg(),Jx(3850,"."),sg(),Sl(3851,"blockquote")(3852,"p"),Jx(3853,"Para "),Sl(3854,"code"),Jx(3855,"po-timepicker"),sg(),Jx(3856,", o valor deve estar no formato "),Sl(3857,"code"),Jx(3858,"HH:mm"),sg(),Jx(3859," ou "),Sl(3860,"code"),Jx(3861,"HH:mm:ss"),sg(),Jx(3862,"."),sg()(),Sl(3863,"p")(3864,"strong"),Jx(3865,"Componentes compat\xEDveis:"),sg(),Sl(3866,"code"),Jx(3867,"po-datepicker"),sg(),Jx(3868,", "),Sl(3869,"code"),Jx(3870,"po-datepicker-range"),sg(),Jx(3871,", "),Sl(3872,"code"),Jx(3873,"po-number"),sg(),Jx(3874,", "),Sl(3875,"code"),Jx(3876,"po-decimal"),sg(),Jx(3877,", "),Sl(3878,"code"),Jx(3879,"po-timepicker"),sg()()()(),Sl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),Jx(3884," minLength"),Wl(3885,"br"),sg()()(),Sl(3886,"td",21)(3887,"code",45),Jx(3888,"number"),sg()(),Sl(3889,"td",24)(3890,"em")(3891,"strong"),Jx(3892,"(opcional)"),sg()(),Sl(3893,"p"),Jx(3894,"Tamanho m\xEDnimo de caracteres."),sg(),Sl(3895,"p")(3896,"strong"),Jx(3897,"Componentes compat\xEDveis:"),sg(),Sl(3898,"code"),Jx(3899,"po-input"),sg(),Jx(3900,", "),Sl(3901,"code"),Jx(3902,"po-number"),sg(),Jx(3903,", "),Sl(3904,"code"),Jx(3905,"po-decimal"),sg(),Jx(3906,", "),Sl(3907,"code"),Jx(3908,"po-textarea"),sg(),Jx(3909,", "),Sl(3910,"code"),Jx(3911,"po-password"),sg(),Jx(3912,"."),sg()()(),Sl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),Jx(3917," minTime"),Wl(3918,"br"),sg()()(),Sl(3919,"td",21)(3920,"code",27),Jx(3921,"string"),sg()(),Sl(3922,"td",24)(3923,"em")(3924,"strong"),Jx(3925,"(opcional)"),sg()(),Sl(3926,"p"),Jx(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3928,"code"),Jx(3929,"HH:mm"),sg(),Jx(3930," ou "),Sl(3931,"code"),Jx(3932,"HH:mm:ss"),sg(),Jx(3933,"."),sg(),Sl(3934,"p")(3935,"strong"),Jx(3936,"Componente compat\xEDvel:"),sg(),Sl(3937,"code"),Jx(3938,"po-datetimepicker"),sg(),Jx(3939,", "),Sl(3940,"code"),Jx(3941,"po-timepicker"),sg()()()(),Sl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),Jx(3946," minValue"),Wl(3947,"br"),sg()()(),Sl(3948,"td",21)(3949,"code",27),Jx(3950,"string "),sg(),Sl(3951,"code",45),Jx(3952," number"),sg()(),Sl(3953,"td",24)(3954,"em")(3955,"strong"),Jx(3956,"(opcional)"),sg()(),Sl(3957,"p"),Jx(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3959,"em"),Jx(3960,"number"),sg(),Jx(3961,", "),Sl(3962,"em"),Jx(3963,"date"),sg(),Jx(3964,", "),Sl(3965,"em"),Jx(3966,"dateTime"),sg(),Jx(3967," ou "),Sl(3968,"em"),Jx(3969,"time"),sg(),Jx(3970,"."),sg(),Sl(3971,"blockquote")(3972,"p"),Jx(3973,"Para "),Sl(3974,"code"),Jx(3975,"po-timepicker"),sg(),Jx(3976,", o valor deve estar no formato "),Sl(3977,"code"),Jx(3978,"HH:mm"),sg(),Jx(3979," ou "),Sl(3980,"code"),Jx(3981,"HH:mm:ss"),sg(),Jx(3982,"."),sg()(),Sl(3983,"p")(3984,"strong"),Jx(3985,"Componentes compat\xEDveis:"),sg(),Sl(3986,"code"),Jx(3987,"po-datepicker"),sg(),Jx(3988,", "),Sl(3989,"code"),Jx(3990,"po-datepicker-range"),sg(),Jx(3991,", "),Sl(3992,"code"),Jx(3993,"po-number"),sg(),Jx(3994,", "),Sl(3995,"code"),Jx(3996,"po-decimal"),sg(),Jx(3997,", "),Sl(3998,"code"),Jx(3999,"po-timepicker"),sg()()()(),Sl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),Jx(4004," minuteInterval"),Wl(4005,"br"),sg()()(),Sl(4006,"td",21)(4007,"code",45),Jx(4008,"number"),sg()(),Sl(4009,"td",24)(4010,"em")(4011,"strong"),Jx(4012,"(opcional)"),sg()(),Sl(4013,"p"),Jx(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),sg()()(),Sl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),Jx(4019," mode"),Wl(4020,"br"),sg()()(),Sl(4021,"td",21)(4022,"code",68),Jx(4023,"'month-year' "),sg(),Sl(4024,"code",69),Jx(4025," 'year'"),sg()(),Sl(4026,"td",24)(4027,"em")(4028,"strong"),Jx(4029,"(opcional)"),sg()(),Sl(4030,"p"),Jx(4031,"Define o modo de sele\xE7\xE3o do "),Sl(4032,"code"),Jx(4033,"po-datepicker"),sg(),Jx(4034,"."),sg(),Sl(4035,"p"),Jx(4036,"Valores aceitos:"),sg(),Sl(4037,"ul")(4038,"li")(4039,"code"),Jx(4040,"'month-year'"),sg(),Jx(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Sl(4042,"code"),Jx(4043,"MM/YYYY"),sg(),Jx(4044,")"),sg(),Sl(4045,"li")(4046,"code"),Jx(4047,"'year'"),sg(),Jx(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Sl(4049,"code"),Jx(4050,"YYYY"),sg(),Jx(4051,")"),sg()(),Sl(4052,"p")(4053,"strong"),Jx(4054,"Componente compat\xEDvel:"),sg(),Sl(4055,"code"),Jx(4056,"po-datepicker"),sg()()()(),Sl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),Jx(4061," modelFormat"),Wl(4062,"br"),sg()()(),Sl(4063,"td",21)(4064,"code",70),Jx(4065,"PoTimepickerModelFormat"),sg()(),Sl(4066,"td",24)(4067,"em")(4068,"strong"),Jx(4069,"(opcional)"),sg()(),Sl(4070,"p"),Jx(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Sl(4072,"code"),Jx(4073,"po-timepicker"),sg(),Jx(4074,"."),sg(),Sl(4075,"blockquote")(4076,"p"),Jx(4077,"Veja os valores v\xE1lidos no "),Sl(4078,"code"),Jx(4079,"PoTimepickerModelFormat"),sg(),Jx(4080,"."),sg()(),Sl(4081,"p")(4082,"strong"),Jx(4083,"Componente compat\xEDvel:"),sg(),Sl(4084,"code"),Jx(4085,"po-timepicker"),sg()()()(),Sl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),Jx(4090," multiple"),Wl(4091,"br"),sg()()(),Sl(4092,"td",21)(4093,"code",29),Jx(4094,"boolean"),sg()(),Sl(4095,"td",24)(4096,"em")(4097,"strong"),Jx(4098,"(opcional)"),sg()(),Sl(4099,"p"),Jx(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Sl(4101,"p")(4102,"strong"),Jx(4103,"Componentes compat\xEDveis:"),sg(),Sl(4104,"code"),Jx(4105,"po-lookup"),sg(),Jx(4106,", "),Sl(4107,"code"),Jx(4108,"po-upload"),sg()()()(),Sl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),Jx(4113," noAutocomplete"),Wl(4114,"br"),sg()()(),Sl(4115,"td",21)(4116,"code",29),Jx(4117,"boolean"),sg()(),Sl(4118,"td",24)(4119,"em")(4120,"strong"),Jx(4121,"(opcional)"),sg()(),Sl(4122,"p"),Jx(4123,"Define a propriedade nativa "),Sl(4124,"code"),Jx(4125,"autocomplete"),sg(),Jx(4126," do campo como off."),sg(),Sl(4127,"p")(4128,"strong"),Jx(4129,"Componentes compat\xEDveis:"),sg(),Sl(4130,"code"),Jx(4131,"po-datepicker"),sg(),Jx(4132,", "),Sl(4133,"code"),Jx(4134,"po-datepicker-range"),sg(),Jx(4135,", "),Sl(4136,"code"),Jx(4137,"po-input"),sg(),Jx(4138,", "),Sl(4139,"code"),Jx(4140,"po-number"),sg(),Jx(4141,", "),Sl(4142,"code"),Jx(4143,"po-decimal"),sg(),Jx(4144,`,
`),Sl(4145,"code"),Jx(4146,"po-lookup"),sg(),Jx(4147,", "),Sl(4148,"code"),Jx(4149,"po-password"),sg(),Jx(4150,", "),Sl(4151,"code"),Jx(4152,"po-timepicker"),sg(),Jx(4153,"."),sg()()(),Sl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),Jx(4158," offsetColumns"),Wl(4159,"br"),sg()()(),Sl(4160,"td",21)(4161,"code",45),Jx(4162,"number"),sg()(),Sl(4163,"td",24)(4164,"em")(4165,"strong"),Jx(4166,"(opcional)"),sg()(),Sl(4167,"p"),Jx(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Sl(4169,"p"),Jx(4170,"Deve ser usado o sistema de "),Sl(4171,"strong"),Jx(4172,"grid"),sg(),Jx(4173," do PO (1 ... 12 colunas)."),sg(),Sl(4174,"blockquote")(4175,"p"),Jx(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Sl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),Jx(4181," offsetLgColumns"),Wl(4182,"br"),sg()()(),Sl(4183,"td",21)(4184,"code",45),Jx(4185,"number"),sg()(),Sl(4186,"td",24)(4187,"em")(4188,"strong"),Jx(4189,"(opcional)"),sg()(),Sl(4190,"p"),Jx(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Sl(4192,"p"),Jx(4193,"Deve ser usado o sistema de "),Sl(4194,"strong"),Jx(4195,"grid"),sg(),Jx(4196," do PO (1 ... 12 colunas)."),sg(),Sl(4197,"blockquote")(4198,"p"),Jx(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4200,"code"),Jx(4201,"offsetColumns"),sg(),Jx(4202,"."),sg()()()(),Sl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),Jx(4207," offsetMdColumns"),Wl(4208,"br"),sg()()(),Sl(4209,"td",21)(4210,"code",45),Jx(4211,"number"),sg()(),Sl(4212,"td",24)(4213,"em")(4214,"strong"),Jx(4215,"(opcional)"),sg()(),Sl(4216,"p"),Jx(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Sl(4218,"p"),Jx(4219,"Deve ser usado o sistema de "),Sl(4220,"strong"),Jx(4221,"grid"),sg(),Jx(4222," do PO (1 ... 12 colunas)."),sg(),Sl(4223,"blockquote")(4224,"p"),Jx(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4226,"code"),Jx(4227,"offsetColumns"),sg(),Jx(4228,"."),sg()()()(),Sl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),Jx(4233," offsetSmColumns"),Wl(4234,"br"),sg()()(),Sl(4235,"td",21)(4236,"code",45),Jx(4237,"number"),sg()(),Sl(4238,"td",24)(4239,"em")(4240,"strong"),Jx(4241,"(opcional)"),sg()(),Sl(4242,"p"),Jx(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Sl(4244,"p"),Jx(4245,"Deve ser usado o sistema de "),Sl(4246,"strong"),Jx(4247,"grid"),sg(),Jx(4248," do PO (1 ... 12 colunas)."),sg(),Sl(4249,"blockquote")(4250,"p"),Jx(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4252,"code"),Jx(4253,"offsetColumns"),sg(),Jx(4254,"."),sg()()()(),Sl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),Jx(4259," offsetXlColumns"),Wl(4260,"br"),sg()()(),Sl(4261,"td",21)(4262,"code",45),Jx(4263,"number"),sg()(),Sl(4264,"td",24)(4265,"em")(4266,"strong"),Jx(4267,"(opcional)"),sg()(),Sl(4268,"p"),Jx(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Sl(4270,"p"),Jx(4271,"Deve ser usado o sistema de "),Sl(4272,"strong"),Jx(4273,"grid"),sg(),Jx(4274," do PO (1 ... 12 colunas)."),sg(),Sl(4275,"blockquote")(4276,"p"),Jx(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(4278,"code"),Jx(4279,"offsetColumns"),sg(),Jx(4280,"."),sg()()()(),Sl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),Jx(4285," onError"),Wl(4286,"br"),sg()()(),Sl(4287,"td",21)(4288,"code",44),Jx(4289,"Function"),sg()(),Sl(4290,"td",24)(4291,"em")(4292,"strong"),Jx(4293,"(opcional)"),sg()(),Sl(4294,"p"),Jx(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Sl(4296,"blockquote")(4297,"p"),Jx(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(4299,"code"),Jx(4300,"HttpErrorResponse"),sg(),Jx(4301,"."),sg()(),Sl(4302,"p")(4303,"strong"),Jx(4304,"Componente compat\xEDvel"),sg(),Jx(4305,": "),Sl(4306,"code"),Jx(4307,"po-upload"),sg()()()(),Sl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),Jx(4312," onSuccess"),Wl(4313,"br"),sg()()(),Sl(4314,"td",21)(4315,"code",44),Jx(4316,"Function"),sg()(),Sl(4317,"td",24)(4318,"em")(4319,"strong"),Jx(4320,"(opcional)"),sg()(),Sl(4321,"p"),Jx(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Sl(4323,"blockquote")(4324,"p"),Jx(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(4326,"code"),Jx(4327,"HttpResponse"),sg(),Jx(4328,"."),sg()(),Sl(4329,"p")(4330,"strong"),Jx(4331,"Componente compat\xEDvel"),sg(),Jx(4332,": "),Sl(4333,"code"),Jx(4334,"po-upload"),sg()()()(),Sl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),Jx(4339," onUpload"),Wl(4340,"br"),sg()()(),Sl(4341,"td",21)(4342,"code",44),Jx(4343,"Function"),sg()(),Sl(4344,"td",24)(4345,"em")(4346,"strong"),Jx(4347,"(opcional)"),sg()(),Sl(4348,"p"),Jx(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Sl(4350,"pre")(4351,"code"),Jx(4352,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Sl(4353,"p")(4354,"strong"),Jx(4355,"Componente compat\xEDvel"),sg(),Jx(4356,": "),Sl(4357,"code"),Jx(4358,"po-upload"),sg()()()(),Sl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),Jx(4363," optional"),Wl(4364,"br"),sg()()(),Sl(4365,"td",21)(4366,"code",29),Jx(4367,"boolean"),sg()(),Sl(4368,"td",24)(4369,"em")(4370,"strong"),Jx(4371,"(opcional)"),sg()(),Sl(4372,"p"),Jx(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(4374,"blockquote")(4375,"p"),Jx(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),sg()(),Sl(4377,"ul")(4378,"li"),Jx(4379,"O campo for "),Sl(4380,"code"),Jx(4381,"required"),sg(),Jx(4382,", ou;"),sg(),Sl(4383,"li"),Jx(4384,"N\xE3o possuir "),Sl(4385,"code"),Jx(4386,"help"),sg(),Jx(4387," e "),Sl(4388,"code"),Jx(4389,"label"),sg(),Jx(4390,"."),sg()(),Sl(4391,"p")(4392,"strong"),Jx(4393,"Componentes compat\xEDveis:"),sg(),Sl(4394,"code"),Jx(4395,"po-datepicker"),sg(),Jx(4396,", "),Sl(4397,"code"),Jx(4398,"po-datepicker-range"),sg(),Jx(4399,", "),Sl(4400,"code"),Jx(4401,"po-timepicker"),sg(),Jx(4402,", "),Sl(4403,"code"),Jx(4404,"po-input"),sg(),Jx(4405,", "),Sl(4406,"code"),Jx(4407,"po-number"),sg(),Jx(4408,`,
`),Sl(4409,"code"),Jx(4410,"po-decimal"),sg(),Jx(4411,", "),Sl(4412,"code"),Jx(4413,"po-select"),sg(),Jx(4414,", "),Sl(4415,"code"),Jx(4416,"po-radio-group"),sg(),Jx(4417,", "),Sl(4418,"code"),Jx(4419,"po-combo"),sg(),Jx(4420,", "),Sl(4421,"code"),Jx(4422,"po-lookup"),sg(),Jx(4423,", "),Sl(4424,"code"),Jx(4425,"po-checkbox-group"),sg(),Jx(4426,", "),Sl(4427,"code"),Jx(4428,"po-multiselect"),sg(),Jx(4429,`,
`),Sl(4430,"code"),Jx(4431,"po-textarea"),sg(),Jx(4432,", "),Sl(4433,"code"),Jx(4434,"po-password"),sg(),Jx(4435,"."),sg()()(),Sl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),Jx(4440," options"),Wl(4441,"br"),sg()()(),Sl(4442,"td",21)(4443,"code",32),Jx(4444,"Array<string> "),sg(),Sl(4445,"code",71),Jx(4446," Array<PoSelectOption> "),sg(),Sl(4447,"code",72),Jx(4448," Array<PoMultiselectOption> "),sg(),Sl(4449,"code",73),Jx(4450," Array<PoCheckboxGroupOption> "),sg(),Sl(4451,"code",74),Jx(4452," Array<any>"),sg()(),Sl(4453,"td",24)(4454,"em")(4455,"strong"),Jx(4456,"(opcional)"),sg()(),Sl(4457,"p"),Jx(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),sg(),Sl(4459,"p")(4460,"strong"),Jx(4461,"Componentes compat\xEDveis:"),sg(),Sl(4462,"code"),Jx(4463,"po-select"),sg(),Jx(4464,", "),Sl(4465,"code"),Jx(4466,"po-radio-group"),sg(),Jx(4467,", "),Sl(4468,"code"),Jx(4469,"po-checkbox-group"),sg(),Jx(4470,", "),Sl(4471,"code"),Jx(4472,"po-multiselect"),sg(),Jx(4473,"."),sg()()(),Sl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),Jx(4478," optionsMulti"),Wl(4479,"br"),sg()()(),Sl(4480,"td",21)(4481,"code",29),Jx(4482,"boolean"),sg()(),Sl(4483,"td",24)(4484,"em")(4485,"strong"),Jx(4486,"(opcional)"),sg()(),Sl(4487,"p"),Jx(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),sg()()(),Sl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),Jx(4493," optionsService"),Wl(4494,"br"),sg()()(),Sl(4495,"td",21)(4496,"code",27),Jx(4497,"string "),sg(),Sl(4498,"code",75),Jx(4499," PoComboFilter "),sg(),Sl(4500,"code",76),Jx(4501," PoMultiselectFilter"),sg()(),Sl(4502,"td",24)(4503,"em")(4504,"strong"),Jx(4505,"(opcional)"),sg()(),Sl(4506,"p"),Jx(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(4508,"strong"),Jx(4509,"Importante"),sg()(),Sl(4510,"blockquote")(4511,"p"),Jx(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(4513,"a",7),Jx(4514,"guia de API do PO UI"),sg(),Jx(4515,"."),sg()()()(),Sl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),Jx(4520," order"),Wl(4521,"br"),sg()()(),Sl(4522,"td",21)(4523,"code",45),Jx(4524,"number"),sg()(),Sl(4525,"td",24)(4526,"em")(4527,"strong"),Jx(4528,"(opcional)"),sg()(),Sl(4529,"p"),Jx(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Sl(4531,"p"),Jx(4532,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(4533,"p")(4534,"code"),Jx(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),sg()(),Sl(4536,"p"),Jx(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Sl(4538,"code"),Jx(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),sg()(),Sl(4540,"p"),Jx(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Sl(4542,"p"),Jx(4543,"Campos sem "),Sl(4544,"code"),Jx(4545,"order"),sg(),Jx(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Sl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),Jx(4551," params"),Wl(4552,"br"),sg()()(),Sl(4553,"td",21)(4554,"code",33),Jx(4555,"any"),sg()(),Sl(4556,"td",24)(4557,"em")(4558,"strong"),Jx(4559,"(opcional)"),sg()(),Sl(4560,"p"),Jx(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Sl(4562,"code"),Jx(4563,"po-lookup"),sg(),Jx(4564,` e
`),Sl(4565,"code"),Jx(4566,"po-combo"),sg(),Jx(4567,"."),sg(),Sl(4568,"p"),Jx(4569,"Por exemplo, para o par\xE2metro "),Sl(4570,"code"),Jx(4571,"{ age: 23 }"),sg(),Jx(4572," a URL da requisi\xE7\xE3o ficaria:"),sg(),Sl(4573,"p")(4574,"code"),Jx(4575,"url + ?age=23&filter=Peter"),sg()()()(),Sl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),Jx(4580," pattern"),Wl(4581,"br"),sg()()(),Sl(4582,"td",21)(4583,"code",27),Jx(4584,"string"),sg()(),Sl(4585,"td",24)(4586,"em")(4587,"strong"),Jx(4588,"(opcional)"),sg()(),Sl(4589,"p"),Jx(4590,"Regex para valida\xE7\xE3o do campo."),sg(),Sl(4591,"p")(4592,"strong"),Jx(4593,"Componentes compat\xEDveis:"),sg(),Sl(4594,"code"),Jx(4595,"po-input"),sg(),Jx(4596,", "),Sl(4597,"code"),Jx(4598,"po-password"),sg(),Jx(4599,"."),sg()()(),Sl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),Jx(4604," placeholder"),Wl(4605,"br"),sg()()(),Sl(4606,"td",21)(4607,"code",27),Jx(4608,"string"),sg()(),Sl(4609,"td",24)(4610,"em")(4611,"strong"),Jx(4612,"(opcional)"),sg()(),Sl(4613,"p"),Jx(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),sg(),Sl(4615,"p")(4616,"strong"),Jx(4617,"Componentes compat\xEDveis:"),sg(),Sl(4618,"code"),Jx(4619,"po-datepicker"),sg(),Jx(4620,", "),Sl(4621,"code"),Jx(4622,"po-datepicker-range"),sg(),Jx(4623,", "),Sl(4624,"code"),Jx(4625,"po-timepicker"),sg(),Jx(4626,", "),Sl(4627,"code"),Jx(4628,"po-input"),sg(),Jx(4629,", "),Sl(4630,"code"),Jx(4631,"po-number"),sg(),Jx(4632,", "),Sl(4633,"code"),Jx(4634,"po-decimal"),sg(),Jx(4635,", "),Sl(4636,"code"),Jx(4637,"po-select"),sg(),Jx(4638,", "),Sl(4639,"code"),Jx(4640,"po-combo"),sg(),Jx(4641,", "),Sl(4642,"code"),Jx(4643,"po-lookup"),sg(),Jx(4644,", "),Sl(4645,"code"),Jx(4646,"po-multiselect"),sg(),Jx(4647,", "),Sl(4648,"code"),Jx(4649,"po-textarea"),sg(),Jx(4650,", "),Sl(4651,"code"),Jx(4652,"po-password"),sg(),Jx(4653,"."),sg()()(),Sl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),Jx(4658," placeholderSearch"),Wl(4659,"br"),sg()()(),Sl(4660,"td",21)(4661,"code",27),Jx(4662,"string"),sg()(),Sl(4663,"td",24)(4664,"em")(4665,"strong"),Jx(4666,"(opcional)"),sg()(),Sl(4667,"p"),Jx(4668,"Placeholder do campo de pesquisa do "),Sl(4669,"code"),Jx(4670,"po-multiselect"),sg(),Jx(4671,"."),sg(),Sl(4672,"blockquote")(4673,"p"),Jx(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Sl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),Jx(4679," property"),Wl(4680,"br"),sg()()(),Sl(4681,"td",21)(4682,"code",27),Jx(4683,"string"),sg()(),Sl(4684,"td",24)(4685,"p"),Jx(4686,"Nome de refer\xEAncia do campo."),sg()()(),Sl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),Jx(4691," range"),Wl(4692,"br"),sg()()(),Sl(4693,"td",21)(4694,"code",29),Jx(4695,"boolean"),sg()(),Sl(4696,"td",24)(4697,"em")(4698,"strong"),Jx(4699,"(opcional)"),sg()(),Sl(4700,"p"),Jx(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),sg(),Sl(4702,"blockquote")(4703,"p"),Jx(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),sg()()()(),Sl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),Jx(4709," rangePresetOptions"),Wl(4710,"br"),sg()()(),Sl(4711,"td",21)(4712,"code",77),Jx(4713,"Array<PoCalendarRangePreset>"),sg()(),Sl(4714,"td",24)(4715,"em")(4716,"strong"),Jx(4717,"(opcional)"),sg()(),Sl(4718,"p"),Jx(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),sg(),Sl(4720,"p"),Jx(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Sl(4722,"code"),Jx(4723,"PoCalendarRangePreset"),sg(),Jx(4724,"."),sg(),Sl(4725,"p")(4726,"strong"),Jx(4727,"Componente compat\xEDvel:"),sg(),Sl(4728,"code"),Jx(4729,"po-datepicker-range"),sg()()()(),Sl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),Jx(4734," rangePresets"),Wl(4735,"br"),sg()()(),Sl(4736,"td",21)(4737,"code",29),Jx(4738,"boolean "),sg(),Sl(4739,"code",32),Jx(4740," Array<string>"),sg()(),Sl(4741,"td",24)(4742,"em")(4743,"strong"),Jx(4744,"(opcional)"),sg()(),Sl(4745,"p"),Jx(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),sg(),Sl(4747,"p"),Jx(4748,"Aceita os seguintes valores:"),sg(),Sl(4749,"ul")(4750,"li")(4751,"code"),Jx(4752,"true"),sg(),Jx(4753,": exibe todos os presets padr\xE3o."),sg(),Sl(4754,"li")(4755,"code"),Jx(4756,"false"),sg(),Jx(4757,": n\xE3o exibe os presets padr\xE3o."),sg(),Sl(4758,"li")(4759,"code"),Jx(4760,"Array<string>"),sg(),Jx(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),sg()(),Sl(4762,"p")(4763,"strong"),Jx(4764,"Componente compat\xEDvel:"),sg(),Sl(4765,"code"),Jx(4766,"po-datepicker-range"),sg()()()(),Sl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),Jx(4771," rangePresetsOrder"),Wl(4772,"br"),sg()()(),Sl(4773,"td",21)(4774,"code",78),Jx(4775,"'asc' "),sg(),Sl(4776,"code",79),Jx(4777," 'desc'"),sg()(),Sl(4778,"td",24)(4779,"em")(4780,"strong"),Jx(4781,"(opcional)"),sg()(),Sl(4782,"p"),Jx(4783,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Sl(4784,"p"),Jx(4785,"Valores aceitos:"),sg(),Sl(4786,"ul")(4787,"li")(4788,"code"),Jx(4789,"'asc'"),sg(),Jx(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),sg(),Sl(4791,"li")(4792,"code"),Jx(4793,"'desc'"),sg(),Jx(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),sg()(),Sl(4795,"p")(4796,"strong"),Jx(4797,"Componente compat\xEDvel:"),sg(),Sl(4798,"code"),Jx(4799,"po-datepicker-range"),sg()()()(),Sl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),Jx(4804," readonly"),Wl(4805,"br"),sg()()(),Sl(4806,"td",21)(4807,"code",29),Jx(4808,"boolean"),sg()(),Sl(4809,"td",24)(4810,"em")(4811,"strong"),Jx(4812,"(opcional)"),sg()(),Sl(4813,"p"),Jx(4814,"Indica que o campo ser\xE1 somente leitura."),sg(),Sl(4815,"p")(4816,"strong"),Jx(4817,"Componentes compat\xEDveis:"),sg(),Sl(4818,"code"),Jx(4819,"po-datepicker"),sg(),Jx(4820,", "),Sl(4821,"code"),Jx(4822,"po-datepicker-range"),sg(),Jx(4823,", "),Sl(4824,"code"),Jx(4825,"po-timepicker"),sg(),Jx(4826,", "),Sl(4827,"code"),Jx(4828,"po-input"),sg(),Jx(4829,", "),Sl(4830,"code"),Jx(4831,"po-number"),sg(),Jx(4832,`,
`),Sl(4833,"code"),Jx(4834,"po-decimal"),sg(),Jx(4835,", "),Sl(4836,"code"),Jx(4837,"po-select"),sg(),Jx(4838,", "),Sl(4839,"code"),Jx(4840,"po-textarea"),sg(),Jx(4841,", "),Sl(4842,"code"),Jx(4843,"po-password"),sg(),Jx(4844,"."),sg()()(),Sl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),Jx(4849," removeInitialFilter"),Wl(4850,"br"),sg()()(),Sl(4851,"td",21)(4852,"code",29),Jx(4853,"boolean"),sg()(),Sl(4854,"td",24)(4855,"em")(4856,"strong"),Jx(4857,"(opcional)"),sg()(),Sl(4858,"p"),Jx(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),sg(),Sl(4860,"blockquote")(4861,"p"),Jx(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),sg()(),Sl(4863,"p")(4864,"strong"),Jx(4865,"Componente compat\xEDvel"),sg(),Jx(4866,": "),Sl(4867,"code"),Jx(4868,"po-combo"),sg()()()(),Sl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),Jx(4873," required"),Wl(4874,"br"),sg()()(),Sl(4875,"td",21)(4876,"code",29),Jx(4877,"boolean"),sg()(),Sl(4878,"td",24)(4879,"em")(4880,"strong"),Jx(4881,"(opcional)"),sg()(),Sl(4882,"p"),Jx(4883,"Define a obrigatoriedade do campo."),sg(),Sl(4884,"p")(4885,"strong"),Jx(4886,"Componentes compat\xEDveis:"),sg(),Sl(4887,"code"),Jx(4888,"po-datepicker"),sg(),Jx(4889,", "),Sl(4890,"code"),Jx(4891,"po-datepicker-range"),sg(),Jx(4892,", "),Sl(4893,"code"),Jx(4894,"po-timepicker"),sg(),Jx(4895,", "),Sl(4896,"code"),Jx(4897,"po-input"),sg(),Jx(4898,", "),Sl(4899,"code"),Jx(4900,"po-number"),sg(),Jx(4901,`,
`),Sl(4902,"code"),Jx(4903,"po-decimal"),sg(),Jx(4904,", "),Sl(4905,"code"),Jx(4906,"po-select"),sg(),Jx(4907,", "),Sl(4908,"code"),Jx(4909,"po-radio-group"),sg(),Jx(4910,", "),Sl(4911,"code"),Jx(4912,"po-combo"),sg(),Jx(4913,", "),Sl(4914,"code"),Jx(4915,"po-lookup"),sg(),Jx(4916,", "),Sl(4917,"code"),Jx(4918,"po-checkbox-group"),sg(),Jx(4919,", "),Sl(4920,"code"),Jx(4921,"po-multiselect"),sg(),Jx(4922,`,
`),Sl(4923,"code"),Jx(4924,"po-textarea"),sg(),Jx(4925,", "),Sl(4926,"code"),Jx(4927,"po-password``, "),sg(),Jx(4928,"po-upload`."),sg()()(),Sl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),Jx(4933," requiredFieldErrorMessage"),Wl(4934,"br"),sg()()(),Sl(4935,"td",21)(4936,"code",29),Jx(4937,"boolean"),sg()(),Sl(4938,"td",24)(4939,"em")(4940,"strong"),Jx(4941,"(opcional)"),sg()(),Sl(4942,"p"),Jx(4943,"Exibe a mensagem setada na propriedade "),Sl(4944,"code"),Jx(4945,"errorMessage"),sg(),Jx(4946," se o campo estiver vazio e for requerido."),sg(),Sl(4947,"blockquote")(4948,"p"),Jx(4949,"Necess\xE1rio que a propriedade "),Sl(4950,"code"),Jx(4951,"required"),sg(),Jx(4952," esteja habilitada."),sg()(),Sl(4953,"p")(4954,"strong"),Jx(4955,"Componentes compat\xEDveis:"),sg(),Sl(4956,"code"),Jx(4957,"po-datepicker"),sg(),Jx(4958,", "),Sl(4959,"code"),Jx(4960,"po-timepicker"),sg(),Jx(4961,", "),Sl(4962,"code"),Jx(4963,"po-input"),sg(),Jx(4964,", "),Sl(4965,"code"),Jx(4966,"po-number"),sg(),Jx(4967,", "),Sl(4968,"code"),Jx(4969,"po-decimal"),sg(),Jx(4970,", "),Sl(4971,"code"),Jx(4972,"po-password"),sg(),Jx(4973,"."),sg()()(),Sl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),Jx(4978," restrictions"),Wl(4979,"br"),sg()()(),Sl(4980,"td",21)(4981,"code",80),Jx(4982,"PoUploadFileRestrictions"),sg()(),Sl(4983,"td",24)(4984,"em")(4985,"strong"),Jx(4986,"(opcional)"),sg()(),Sl(4987,"p"),Jx(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(4989,"code"),Jx(4990,"PoUploadFileRestrictions"),sg(),Jx(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg(),Sl(4992,"p")(4993,"strong"),Jx(4994,"Componente compat\xEDvel"),sg(),Jx(4995,": "),Sl(4996,"code"),Jx(4997,"po-upload"),sg()()()(),Sl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),Jx(5002," rows"),Wl(5003,"br"),sg()()(),Sl(5004,"td",21)(5005,"code",45),Jx(5006,"number"),sg()(),Sl(5007,"td",24)(5008,"em")(5009,"strong"),Jx(5010,"(opcional)"),sg()(),Sl(5011,"p"),Jx(5012,"Quantidade de linhas exibidas no "),Sl(5013,"code"),Jx(5014,"po-textarea"),sg(),Jx(5015,"."),sg()()(),Sl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),Jx(5020," searchService"),Wl(5021,"br"),sg()()(),Sl(5022,"td",21)(5023,"code",27),Jx(5024,"string "),sg(),Sl(5025,"code",34),Jx(5026," PoLookupFilter"),sg()(),Sl(5027,"td",24)(5028,"em")(5029,"strong"),Jx(5030,"(opcional)"),sg()(),Sl(5031,"p"),Jx(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Sl(5033,"code"),Jx(5034,"columns"),sg(),Jx(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Sl(5036,"strong"),Jx(5037,"Importante:"),sg()(),Sl(5038,"blockquote")(5039,"p"),Jx(5040,"Caso utilizar a propriedade "),Sl(5041,"code"),Jx(5042,"optionsService"),sg(),Jx(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(5044,"a",7),Jx(5045,"guia de API do PO UI"),sg(),Jx(5046,"."),sg()()()(),Sl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),Jx(5051," secondInterval"),Wl(5052,"br"),sg()()(),Sl(5053,"td",21)(5054,"code",45),Jx(5055,"number"),sg()(),Sl(5056,"td",24)(5057,"em")(5058,"strong"),Jx(5059,"(opcional)"),sg()(),Sl(5060,"p"),Jx(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),sg()()(),Sl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),Jx(5066," secret"),Wl(5067,"br"),sg()()(),Sl(5068,"td",21)(5069,"code",29),Jx(5070,"boolean"),sg()(),Sl(5071,"td",24)(5072,"em")(5073,"strong"),Jx(5074,"(opcional)"),sg()(),Sl(5075,"p"),Jx(5076,"Esconde a informa\xE7\xE3o estilo "),Sl(5077,"em"),Jx(5078,"password"),sg(),Jx(5079,", pode ser utilizado quando o tipo de dado for "),Sl(5080,"em"),Jx(5081,"string"),sg(),Jx(5082,"."),sg()()(),Sl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),Jx(5087," showRequired"),Wl(5088,"br"),sg()()(),Sl(5089,"td",21)(5090,"code",29),Jx(5091,"boolean"),sg()(),Sl(5092,"td",24)(5093,"em")(5094,"strong"),Jx(5095,"(opcional)"),sg()(),Sl(5096,"p"),Jx(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(5098,"blockquote")(5099,"p"),Jx(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(5101,"ul")(5102,"li"),Jx(5103,"N\xE3o possuir "),Sl(5104,"code"),Jx(5105,"p-help"),sg(),Jx(5106," e/ou "),Sl(5107,"code"),Jx(5108,"p-label"),sg(),Jx(5109,"."),sg()(),Sl(5110,"p")(5111,"strong"),Jx(5112,"Componentes compat\xEDveis:"),sg(),Sl(5113,"code"),Jx(5114,"po-datepicker"),sg(),Jx(5115,", "),Sl(5116,"code"),Jx(5117,"po-datepicker-range"),sg(),Jx(5118,", "),Sl(5119,"code"),Jx(5120,"po-timepicker"),sg(),Jx(5121,", "),Sl(5122,"code"),Jx(5123,"po-input"),sg(),Jx(5124,", "),Sl(5125,"code"),Jx(5126,"po-number"),sg(),Jx(5127,`,
`),Sl(5128,"code"),Jx(5129,"po-decimal"),sg(),Jx(5130,", "),Sl(5131,"code"),Jx(5132,"po-select"),sg(),Jx(5133,", "),Sl(5134,"code"),Jx(5135,"po-radio-group"),sg(),Jx(5136,", "),Sl(5137,"code"),Jx(5138,"po-combo"),sg(),Jx(5139,", "),Sl(5140,"code"),Jx(5141,"po-lookup"),sg(),Jx(5142,", "),Sl(5143,"code"),Jx(5144,"po-checkbox-group"),sg(),Jx(5145,", "),Sl(5146,"code"),Jx(5147,"po-multiselect"),sg(),Jx(5148,`,
`),Sl(5149,"code"),Jx(5150,"po-textarea"),sg(),Jx(5151,", "),Sl(5152,"code"),Jx(5153,"po-password"),sg(),Jx(5154,", "),Sl(5155,"code"),Jx(5156,"po-upload"),sg(),Jx(5157,"."),sg()()(),Sl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),Jx(5162," showSeconds"),Wl(5163,"br"),sg()()(),Sl(5164,"td",21)(5165,"code",29),Jx(5166,"boolean"),sg()(),Sl(5167,"td",24)(5168,"em")(5169,"strong"),Jx(5170,"(opcional)"),sg()(),Sl(5171,"p"),Jx(5172,"Exibe a coluna de segundos no painel do timepicker."),sg()()(),Sl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),Jx(5177," showThumbnail"),Wl(5178,"br"),sg()()(),Sl(5179,"td",21)(5180,"code",29),Jx(5181,"boolean"),sg()(),Sl(5182,"td",24)(5183,"em")(5184,"strong"),Jx(5185,"(opcional)"),sg()(),Sl(5186,"p"),Jx(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Sl(5188,"blockquote")(5189,"p"),Jx(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(5191,"code"),Jx(5192,".png"),sg(),Jx(5193,", "),Sl(5194,"code"),Jx(5195,".jpg"),sg(),Jx(5196,", "),Sl(5197,"code"),Jx(5198,".jpeg"),sg(),Jx(5199," e "),Sl(5200,"code"),Jx(5201,".gif"),sg(),Jx(5202,")."),sg()(),Sl(5203,"p")(5204,"strong"),Jx(5205,"Componente compat\xEDvel"),sg(),Jx(5206,": "),Sl(5207,"code"),Jx(5208,"po-upload"),sg()()()(),Sl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),Jx(5213," size"),Wl(5214,"br"),sg()()(),Sl(5215,"td",21)(5216,"code",27),Jx(5217,"string"),sg()(),Sl(5218,"td",24)(5219,"em")(5220,"strong"),Jx(5221,"(opcional)"),sg()(),Sl(5222,"p"),Jx(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),sg(),Sl(5224,"ul")(5225,"li")(5226,"code"),Jx(5227,"small"),sg(),Jx(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(5229,"li")(5230,"code"),Jx(5231,"medium"),sg(),Jx(5232,": aplica a medida medium de cada componente."),sg(),Sl(5233,"li")(5234,"code"),Jx(5235,"large"),sg(),Jx(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Sl(5237,"code"),Jx(5238,"po-checkbox"),sg(),Jx(5239," e "),Sl(5240,"code"),Jx(5241,"po-radio-group"),sg(),Jx(5242,")."),Sl(5243,"blockquote")(5244,"p"),Jx(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(5246,"code"),Jx(5247,"medium"),sg(),Jx(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(5249,"a",40),Jx(5250,"po-theme"),sg(),Jx(5251,"."),sg()()()()()(),Sl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),Jx(5256," sort"),Wl(5257,"br"),sg()()(),Sl(5258,"td",21)(5259,"code",29),Jx(5260,"boolean"),sg()(),Sl(5261,"td",24)(5262,"em")(5263,"strong"),Jx(5264,"(opcional)"),sg()(),Sl(5265,"p"),Jx(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg(),Sl(5267,"p")(5268,"strong"),Jx(5269,"Componentes compat\xEDveis:"),sg(),Sl(5270,"code"),Jx(5271,"po-combo"),sg(),Jx(5272,", po-multiselect"),sg()()(),Sl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),Jx(5277," step"),Wl(5278,"br"),sg()()(),Sl(5279,"td",21)(5280,"code",45),Jx(5281,"number"),sg()(),Sl(5282,"td",24)(5283,"em")(5284,"strong"),Jx(5285,"(opcional)"),sg()(),Sl(5286,"p"),Jx(5287,"Intervalo utilizado no "),Sl(5288,"code"),Jx(5289,"po-number"),sg(),Jx(5290,"."),sg()()(),Sl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),Jx(5295," thousandMaxlength"),Wl(5296,"br"),sg()()(),Sl(5297,"td",21)(5298,"code",45),Jx(5299,"number"),sg()(),Sl(5300,"td",24)(5301,"em")(5302,"strong"),Jx(5303,"(opcional)"),sg()(),Sl(5304,"p"),Jx(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),sg(),Sl(5306,"blockquote")(5307,"p"),Jx(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(5309,"code"),Jx(5310,"type"),sg(),Jx(5311," for "),Sl(5312,"em"),Jx(5313,"currency"),sg(),Jx(5314," ou "),Sl(5315,"em"),Jx(5316,"decimal"),sg(),Jx(5317,"."),sg()()()(),Sl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),Jx(5322," type"),Wl(5323,"br"),sg()()(),Sl(5324,"td",21)(5325,"code",27),Jx(5326,"string "),sg(),Sl(5327,"code",81),Jx(5328," PoDynamicFieldType"),sg()(),Sl(5329,"td",24)(5330,"em")(5331,"strong"),Jx(5332,"(opcional)"),sg()(),Sl(5333,"p"),Jx(5334,"Tipo do valor campo."),sg(),Sl(5335,"p"),Jx(5336,"Valores v\xE1lidos:"),sg(),Sl(5337,"ul")(5338,"li")(5339,"code"),Jx(5340,"boolean"),sg(),Jx(5341,": Valores "),Sl(5342,"em"),Jx(5343,"booleanos"),sg(),Jx(5344,"."),sg(),Sl(5345,"li")(5346,"code"),Jx(5347,"currency"),sg(),Jx(5348,": Valores monet\xE1rios."),sg(),Sl(5349,"li")(5350,"code"),Jx(5351,"decimal"),sg(),Jx(5352,": Valores decimais."),sg(),Sl(5353,"li")(5354,"code"),Jx(5355,"date"),sg(),Jx(5356,": Valores de datas."),Sl(5357,"ul")(5358,"li"),Jx(5359,"Aceita os tipos "),Sl(5360,"strong"),Jx(5361,"string"),sg(),Jx(5362," e "),Sl(5363,"strong"),Jx(5364,"Date"),sg(),Jx(5365,` padr\xE3o do Javascript,
por exemplo: `),Sl(5366,"code"),Jx(5367,"'2017-11-28'"),sg(),Jx(5368," ou "),Sl(5369,"code"),Jx(5370,"new Date(2017, 10, 28)"),sg(),Jx(5371,"."),sg()()(),Sl(5372,"li")(5373,"code"),Jx(5374,"dateTime"),sg(),Jx(5375,": Valor de data com hor\xE1rio."),Sl(5376,"ul")(5377,"li"),Jx(5378,"Aceita o tipo "),Sl(5379,"em"),Jx(5380,"string"),sg(),Jx(5381," no formato "),Sl(5382,"strong"),Jx(5383,"ISO-8601"),sg(),Jx(5384," extendido "),Sl(5385,"strong"),Jx(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),Jx(5387,`
e o tipo `),Sl(5388,"strong"),Jx(5389,"Date"),sg(),Jx(5390," padr\xE3o do Javascript, por exemplo: "),Sl(5391,"code"),Jx(5392,"'2017-11-28T00:00:00-02:00'"),sg(),Jx(5393," ou "),Sl(5394,"code"),Jx(5395,"new Date(2017, 10, 28)"),sg(),Jx(5396,"."),sg()()(),Sl(5397,"li")(5398,"code"),Jx(5399,"number"),sg(),Jx(5400,": Valores num\xE9ricos."),sg(),Sl(5401,"li")(5402,"code"),Jx(5403,"string"),sg(),Jx(5404,": Textos."),sg(),Sl(5405,"li")(5406,"code"),Jx(5407,"time"),sg(),Jx(5408,": Valor do hor\xE1rio."),Sl(5409,"ul")(5410,"li"),Jx(5411,"Aceita o tipo "),Sl(5412,"strong"),Jx(5413,"string"),sg(),Jx(5414," nos formatos "),Sl(5415,"strong"),Jx(5416,"'HH:mm:ss'"),sg(),Jx(5417," ou "),Sl(5418,"strong"),Jx(5419,"'HH:mm:ss.ffffff'"),sg(),Jx(5420,", por exemplo: "),Sl(5421,"code"),Jx(5422,"'23:12:45'"),sg(),Jx(5423,"."),sg()()()()()(),Sl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),Jx(5428," url"),Wl(5429,"br"),sg()()(),Sl(5430,"td",21)(5431,"code",27),Jx(5432,"string"),sg()(),Sl(5433,"td",24)(5434,"em")(5435,"strong"),Jx(5436,"(opcional)"),sg()(),Sl(5437,"p"),Jx(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg(),Sl(5439,"p")(5440,"strong"),Jx(5441,"Componente compat\xEDvel"),sg(),Jx(5442,": "),Sl(5443,"code"),Jx(5444,"po-upload"),sg()()()(),Sl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),Jx(5449," validate"),Wl(5450,"br"),sg()()(),Sl(5451,"td",21)(5452,"code",27),Jx(5453,"string "),sg(),Sl(5454,"code",44),Jx(5455," Function"),sg()(),Sl(5456,"td",24)(5457,"em")(5458,"strong"),Jx(5459,"(opcional)"),sg()(),Sl(5460,"p"),Jx(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(5462,"strong"),Jx(5463,"mudan\xE7as do campo"),sg(),Jx(5464,"."),sg(),Sl(5465,"ul")(5466,"li"),Jx(5467,"A propriedade aceita os seguintes tipos:"),sg()(),Sl(5468,"ul")(5469,"li")(5470,"strong"),Jx(5471,"String"),sg(),Jx(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(5473,"code"),Jx(5474,"POST"),sg(),Jx(5475,"."),sg(),Sl(5476,"li")(5477,"strong"),Jx(5478,"Function"),sg(),Jx(5479,": M\xE9todo que ser\xE1 executado."),sg()(),Sl(5480,"p"),Jx(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Sl(5482,"code"),Jx(5483,"PoDynamicFormFieldChanged"),sg(),Jx(5484,":"),sg(),Sl(5485,"p")(5486,"code"),Jx(5487,"{ property: 'property name', value: 'new value' }"),sg()(),Sl(5488,"p"),Jx(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(5490,"a",82),Jx(5491,"PoDynamicFormFieldValidation"),sg(),Jx(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),sg(),Sl(5493,"pre")(5494,"code"),Jx(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),sg()(),Sl(5496,"p"),Jx(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(5498,"code"),Jx(5499,"bind"),sg(),Jx(5500,`, por exemplo:
`),Sl(5501,"code"),Jx(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),sg()()()(),Sl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),Jx(5507," visible"),Wl(5508,"br"),sg()()(),Sl(5509,"td",21)(5510,"code",29),Jx(5511,"boolean"),sg()(),Sl(5512,"td",24)(5513,"em")(5514,"strong"),Jx(5515,"(opcional)"),sg()(),Sl(5516,"p"),Jx(5517,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()(),Sl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),Jx(5522," yearRangeLimit"),Wl(5523,"br"),sg()()(),Sl(5524,"td",21)(5525,"code",45),Jx(5526,"number"),sg()(),Sl(5527,"td",24)(5528,"em")(5529,"strong"),Jx(5530,"(opcional)"),sg()(),Sl(5531,"p"),Jx(5532,"Define o limite de anos exibidos na lista de anos do "),Sl(5533,"code"),Jx(5534,"po-datepicker"),sg(),Jx(5535," nos modos "),Sl(5536,"code"),Jx(5537,"month-year"),sg(),Jx(5538," e "),Sl(5539,"code"),Jx(5540,"year"),sg(),Jx(5541,"."),sg()()()(),Sl(5542,"h4",43)(5543,"code",5),Jx(5544,"PoLookupColumn"),sg()(),Sl(5545,"div",2)(5546,"p"),Jx(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),sg()(),Sl(5548,"h4",12),Jx(5549,"Propriedades"),sg(),Sl(5550,"table",13)(5551,"tr",14)(5552,"th",15),Jx(5553,"Nome"),sg(),Sl(5554,"th",15),Jx(5555,"Tipo"),sg(),Sl(5556,"th",15),Jx(5557,"Descri\xE7\xE3o"),sg()(),Sl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),Jx(5562," fieldLabel"),Wl(5563,"br"),sg()()(),Sl(5564,"td",21)(5565,"code",29),Jx(5566,"boolean"),sg()(),Sl(5567,"td",24)(5568,"em")(5569,"strong"),Jx(5570,"(opcional)"),sg()(),Sl(5571,"p"),Jx(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),sg(),Sl(5573,"p"),Jx(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),sg(),Sl(5575,"p"),Jx(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Sl(5577,"code"),Jx(5578,"p-field-format"),sg(),Jx(5579," ou "),Sl(5580,"code"),Jx(5581,"p-field-label"),sg(),Jx(5582," forem configurados no componente."),sg()()(),Sl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),Jx(5587," format"),Wl(5588,"br"),sg()()(),Sl(5589,"td",21)(5590,"code",27),Jx(5591,"string"),sg()(),Sl(5592,"td",24)(5593,"em")(5594,"strong"),Jx(5595,"(opcional)"),sg()(),Sl(5596,"p"),Jx(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),sg(),Sl(5598,"ul")(5599,"li"),Jx(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),sg(),Sl(5601,"li"),Jx(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg()()()(),Sl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),Jx(5607," label"),Wl(5608,"br"),sg()()(),Sl(5609,"td",21)(5610,"code",27),Jx(5611,"string"),sg()(),Sl(5612,"td",24)(5613,"em")(5614,"strong"),Jx(5615,"(opcional)"),sg()(),Sl(5616,"p"),Jx(5617,"Texto para t\xEDtulo da coluna."),sg(),Sl(5618,"p"),Jx(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(5620,"em"),Jx(5621,"label"),sg(),Jx(5622," o valor da propriedade "),Sl(5623,"em"),Jx(5624,"property"),sg(),Jx(5625," com a primeira letra em mai\xFAsculo."),sg()()(),Sl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),Jx(5630," property"),Wl(5631,"br"),sg()()(),Sl(5632,"td",21)(5633,"code",27),Jx(5634,"string"),sg()(),Sl(5635,"td",24)(5636,"em")(5637,"strong"),Jx(5638,"(opcional)"),sg()(),Sl(5639,"p"),Jx(5640,"Nome identificador da coluna."),sg()()(),Sl(5641,"tr",16)(5642,"td",17)(5643,"div",25)(5644,"span",26),Jx(5645," type"),Wl(5646,"br"),sg()()(),Sl(5647,"td",21)(5648,"code",27),Jx(5649,"string"),sg()(),Sl(5650,"td",24)(5651,"em")(5652,"strong"),Jx(5653,"(opcional)"),sg()(),Sl(5654,"p"),Jx(5655,"Tipo da coluna:"),sg(),Sl(5656,"ul")(5657,"li"),Jx(5658,"string (padr\xE3o): textos"),sg(),Sl(5659,"li"),Jx(5660,"number: valores num\xE9ricos"),sg(),Sl(5661,"li"),Jx(5662,"date: data"),sg(),Sl(5663,"li"),Jx(5664,"currency: valores monet\xE1rios"),sg(),Sl(5665,"li"),Jx(5666,"dateTime: data e hora"),sg()()()(),Sl(5667,"tr",16)(5668,"td",17)(5669,"div",25)(5670,"span",26),Jx(5671," width"),Wl(5672,"br"),sg()()(),Sl(5673,"td",21)(5674,"code",27),Jx(5675,"string"),sg()(),Sl(5676,"td",24)(5677,"em")(5678,"strong"),Jx(5679,"(opcional)"),sg()(),Sl(5680,"p"),Jx(5681,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),sg()()()(),Sl(5682,"h4",43)(5683,"code",5),Jx(5684,"PoLookupFilter"),sg()(),Sl(5685,"div",2)(5686,"p"),Jx(5687,"Define o tipo de busca utilizado no po-lookup."),sg()(),Sl(5688,"h4",12),Jx(5689,"M\xE9todos"),sg(),Sl(5690,"table",41)(5691,"tr",16)(5692,"th",42)(5693,"div",25)(5694,"h4")(5695,"span",26),Jx(5696," getFilteredItems "),sg()()()()(),Sl(5697,"tr",24)(5698,"td",24)(5699,"p"),Jx(5700,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Sl(5701,"em"),Jx(5702,"Observable"),sg(),Jx(5703," com a resposta da API no formato da interface "),Sl(5704,"code"),Jx(5705,"PoLookupResponseApi"),sg(),Jx(5706,"."),sg()()()(),Sl(5707,"h5")(5708,"b"),Jx(5709,"Par\xE2metros"),sg()(),Sl(5710,"table",13)(5711,"tr",14)(5712,"th",15),Jx(5713,"Nome"),sg(),Sl(5714,"th",15),Jx(5715,"Tipo"),sg(),Sl(5716,"th",15),Jx(5717,"Descri\xE7\xE3o"),sg()(),Sl(5718,"tr",16)(5719,"td",17),Jx(5720," params"),sg(),Sl(5721,"td",21)(5722,"code",83),Jx(5723," PoLookupFilteredItemsParams "),sg()(),Sl(5724,"td",24)(5725,"p"),Jx(5726,"Objeto enviado por par\xE2metro que implementa a interface "),Sl(5727,"code"),Jx(5728,"PoLookupFilteredItemsParams"),sg(),Jx(5729,"."),sg()()()(),Wl(5730,"br"),Sl(5731,"table",41)(5732,"tr",16)(5733,"th",42)(5734,"div",25)(5735,"h4")(5736,"span",26),Jx(5737," getObjectByValue "),sg()()()()(),Sl(5738,"tr",24)(5739,"td",24)(5740,"p"),Jx(5741,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),sg(),Sl(5742,"p"),Jx(5743,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),sg()()()(),Sl(5744,"h5")(5745,"b"),Jx(5746,"Par\xE2metros"),sg()(),Sl(5747,"table",13)(5748,"tr",14)(5749,"th",15),Jx(5750,"Nome"),sg(),Sl(5751,"th",15),Jx(5752,"Tipo"),sg(),Sl(5753,"th",15),Jx(5754,"Descri\xE7\xE3o"),sg()(),Sl(5755,"tr",16)(5756,"td",17),Jx(5757," value"),sg(),Sl(5758,"td",21)(5759,"code",27),Jx(5760," string "),sg(),Sl(5761,"code",74),Jx(5762," Array<any> "),sg()(),Sl(5763,"td",24)(5764,"p"),Jx(5765,"Valor \xFAnico a ser buscado na fonte de dados."),sg()()(),Sl(5766,"tr",16)(5767,"td",17),Jx(5768," filterParams"),sg(),Sl(5769,"td",21)(5770,"code",83),Jx(5771," any "),sg()(),Sl(5772,"td",24)(5773,"p"),Jx(5774,"Valor informado atrav\xE9s da propriedade "),Sl(5775,"code"),Jx(5776,"p-filter-params"),sg(),Jx(5777,"."),sg()()()(),Wl(5778,"br"),Sl(5779,"h4",43)(5780,"code",5),Jx(5781,"PoLookupFilteredItemsParams"),sg()(),Sl(5782,"div",2)(5783,"p"),Jx(5784,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Sl(5785,"code"),Jx(5786,"getFilteredItems"),sg(),Jx(5787,"."),sg()(),Sl(5788,"h4",12),Jx(5789,"Propriedades"),sg(),Sl(5790,"table",13)(5791,"tr",14)(5792,"th",15),Jx(5793,"Nome"),sg(),Sl(5794,"th",15),Jx(5795,"Tipo"),sg(),Sl(5796,"th",15),Jx(5797,"Descri\xE7\xE3o"),sg()(),Sl(5798,"tr",16)(5799,"td",17)(5800,"div",25)(5801,"span",26),Jx(5802," advancedFilters"),Wl(5803,"br"),sg()()(),Sl(5804,"td",21)(5805,"code",84),Jx(5806,`{ [key: string]: any;
}`),sg()(),Sl(5807,"td",24)(5808,"em")(5809,"strong"),Jx(5810,"(opcional)"),sg()(),Sl(5811,"p"),Jx(5812,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),sg()()(),Sl(5813,"tr",16)(5814,"td",17)(5815,"div",25)(5816,"span",26),Jx(5817," filter"),Wl(5818,"br"),sg()()(),Sl(5819,"td",21)(5820,"code",27),Jx(5821,"string"),sg()(),Sl(5822,"td",24)(5823,"em")(5824,"strong"),Jx(5825,"(opcional)"),sg()(),Sl(5826,"p"),Jx(5827,"Conte\xFAdo utilizado para filtrar a lista de itens."),sg()()(),Sl(5828,"tr",16)(5829,"td",17)(5830,"div",25)(5831,"span",26),Jx(5832," filterParams"),Wl(5833,"br"),sg()()(),Sl(5834,"td",21)(5835,"code",33),Jx(5836,"any"),sg()(),Sl(5837,"td",24)(5838,"em")(5839,"strong"),Jx(5840,"(opcional)"),sg()(),Sl(5841,"p"),Jx(5842,"Valor informado atrav\xE9s da propriedade "),Sl(5843,"code"),Jx(5844,"p-filter-params"),sg(),Jx(5845,"."),sg()()(),Sl(5846,"tr",16)(5847,"td",17)(5848,"div",25)(5849,"span",26),Jx(5850," order"),Wl(5851,"br"),sg()()(),Sl(5852,"td",21)(5853,"code",27),Jx(5854,"string"),sg()(),Sl(5855,"td",24)(5856,"em")(5857,"strong"),Jx(5858,"(opcional)"),sg()(),Sl(5859,"p"),Jx(5860,"Coluna que est\xE1 sendo ordenada na tabela."),sg(),Sl(5861,"ul")(5862,"li"),Jx(5863,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Sl(5864,"code"),Jx(5865,"-<colunaOrdenada>"),sg(),Jx(5866,", por exemplo "),Sl(5867,"code"),Jx(5868,"-name"),sg(),Jx(5869,"."),sg(),Sl(5870,"li"),Jx(5871,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Sl(5872,"code"),Jx(5873,"<colunaOrdenada>"),sg(),Jx(5874,", por exemplo "),Sl(5875,"code"),Jx(5876,"name"),sg(),Jx(5877,"."),sg()()()(),Sl(5878,"tr",16)(5879,"td",17)(5880,"div",25)(5881,"span",26),Jx(5882," page"),Wl(5883,"br"),sg()()(),Sl(5884,"td",21)(5885,"code",45),Jx(5886,"number"),sg()(),Sl(5887,"td",24)(5888,"em")(5889,"strong"),Jx(5890,"(opcional)"),sg()(),Sl(5891,"p"),Jx(5892,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),sg()()(),Sl(5893,"tr",16)(5894,"td",17)(5895,"div",25)(5896,"span",26),Jx(5897," pageSize"),Wl(5898,"br"),sg()()(),Sl(5899,"td",21)(5900,"code",45),Jx(5901,"number"),sg()(),Sl(5902,"td",24)(5903,"em")(5904,"strong"),Jx(5905,"(opcional)"),sg()(),Sl(5906,"p"),Jx(5907,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),sg()()()(),Sl(5908,"h4",43)(5909,"code",5),Jx(5910,"PoLookupLiterals"),sg()(),Sl(5911,"div",2)(5912,"p"),Jx(5913,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(5914,"code"),Jx(5915,"po-lookup"),sg(),Jx(5916,"."),sg()(),Sl(5917,"h4",12),Jx(5918,"Propriedades"),sg(),Sl(5919,"table",13)(5920,"tr",14)(5921,"th",15),Jx(5922,"Nome"),sg(),Sl(5923,"th",15),Jx(5924,"Tipo"),sg(),Sl(5925,"th",15),Jx(5926,"Descri\xE7\xE3o"),sg()(),Sl(5927,"tr",16)(5928,"td",17)(5929,"div",25)(5930,"span",26),Jx(5931," clean"),Wl(5932,"br"),sg()()(),Sl(5933,"td",21)(5934,"code",27),Jx(5935,"string"),sg()(),Sl(5936,"td",24)(5937,"em")(5938,"strong"),Jx(5939,"(opcional)"),sg()(),Sl(5940,"p"),Jx(5941,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),sg()()(),Sl(5942,"tr",16)(5943,"td",17)(5944,"div",25)(5945,"span",26),Jx(5946," modalAdvancedSearch"),Wl(5947,"br"),sg()()(),Sl(5948,"td",21)(5949,"code",27),Jx(5950,"string"),sg()(),Sl(5951,"td",24)(5952,"em")(5953,"strong"),Jx(5954,"(opcional)"),sg()(),Sl(5955,"p"),Jx(5956,"Texto do link de busca avan\xE7ada."),sg(),Sl(5957,"p"),Jx(5958,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),sg()()(),Sl(5959,"tr",16)(5960,"td",17)(5961,"div",25)(5962,"span",26),Jx(5963," modalAdvancedSearchPrimaryActionLabel"),Wl(5964,"br"),sg()()(),Sl(5965,"td",21)(5966,"code",27),Jx(5967,"string"),sg()(),Sl(5968,"td",24)(5969,"em")(5970,"strong"),Jx(5971,"(opcional)"),sg()(),Sl(5972,"p"),Jx(5973,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),sg()()(),Sl(5974,"tr",16)(5975,"td",17)(5976,"div",25)(5977,"span",26),Jx(5978," modalAdvancedSearchSecondaryActionLabel"),Wl(5979,"br"),sg()()(),Sl(5980,"td",21)(5981,"code",27),Jx(5982,"string"),sg()(),Sl(5983,"td",24)(5984,"em")(5985,"strong"),Jx(5986,"(opcional)"),sg()(),Sl(5987,"p"),Jx(5988,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),sg()()(),Sl(5989,"tr",16)(5990,"td",17)(5991,"div",25)(5992,"span",26),Jx(5993," modalAdvancedSearchTitle"),Wl(5994,"br"),sg()()(),Sl(5995,"td",21)(5996,"code",27),Jx(5997,"string"),sg()(),Sl(5998,"td",24)(5999,"em")(6e3,"strong"),Jx(6001,"(opcional)"),sg()(),Sl(6002,"p"),Jx(6003,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),sg()()(),Sl(6004,"tr",16)(6005,"td",17)(6006,"div",25)(6007,"span",26),Jx(6008," modalDisclaimerGroupTitle"),Wl(6009,"br"),sg()()(),Sl(6010,"td",21)(6011,"code",27),Jx(6012,"string"),sg()(),Sl(6013,"td",24)(6014,"em")(6015,"strong"),Jx(6016,"(opcional)"),sg()(),Sl(6017,"p"),Jx(6018,"Texto exibido no t\xEDtulo do disclaimer."),sg()()(),Sl(6019,"tr",16)(6020,"td",17)(6021,"div",25)(6022,"span",26),Jx(6023," modalPlaceholder"),Wl(6024,"br"),sg()()(),Sl(6025,"td",21)(6026,"code",27),Jx(6027,"string"),sg()(),Sl(6028,"td",24)(6029,"em")(6030,"strong"),Jx(6031,"(opcional)"),sg()(),Sl(6032,"p"),Jx(6033,"Texto exibido no placeholder do input da modal."),sg()()(),Sl(6034,"tr",16)(6035,"td",17)(6036,"div",25)(6037,"span",26),Jx(6038," modalPrimaryActionLabel"),Wl(6039,"br"),sg()()(),Sl(6040,"td",21)(6041,"code",27),Jx(6042,"string"),sg()(),Sl(6043,"td",24)(6044,"em")(6045,"strong"),Jx(6046,"(opcional)"),sg()(),Sl(6047,"p"),Jx(6048,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),sg()()(),Sl(6049,"tr",16)(6050,"td",17)(6051,"div",25)(6052,"span",26),Jx(6053," modalSecondaryActionLabel"),Wl(6054,"br"),sg()()(),Sl(6055,"td",21)(6056,"code",27),Jx(6057,"string"),sg()(),Sl(6058,"td",24)(6059,"em")(6060,"strong"),Jx(6061,"(opcional)"),sg()(),Sl(6062,"p"),Jx(6063,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),sg()()(),Sl(6064,"tr",16)(6065,"td",17)(6066,"div",25)(6067,"span",26),Jx(6068," modalTableLoadMoreData"),Wl(6069,"br"),sg()()(),Sl(6070,"td",21)(6071,"code",27),Jx(6072,"string"),sg()(),Sl(6073,"td",24)(6074,"em")(6075,"strong"),Jx(6076,"(opcional)"),sg()(),Sl(6077,"p"),Jx(6078,"Label do "),Sl(6079,"code"),Jx(6080,"button"),sg(),Jx(6081," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),sg()()(),Sl(6082,"tr",16)(6083,"td",17)(6084,"div",25)(6085,"span",26),Jx(6086," modalTableLoadingData"),Wl(6087,"br"),sg()()(),Sl(6088,"td",21)(6089,"code",27),Jx(6090,"string"),sg()(),Sl(6091,"td",24)(6092,"em")(6093,"strong"),Jx(6094,"(opcional)"),sg()(),Sl(6095,"p"),Jx(6096,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),sg()()(),Sl(6097,"tr",16)(6098,"td",17)(6099,"div",25)(6100,"span",26),Jx(6101," modalTableNoColumns"),Wl(6102,"br"),sg()()(),Sl(6103,"td",21)(6104,"code",27),Jx(6105,"string"),sg()(),Sl(6106,"td",24)(6107,"em")(6108,"strong"),Jx(6109,"(opcional)"),sg()(),Sl(6110,"p"),Jx(6111,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),sg()()(),Sl(6112,"tr",16)(6113,"td",17)(6114,"div",25)(6115,"span",26),Jx(6116," modalTableNoData"),Wl(6117,"br"),sg()()(),Sl(6118,"td",21)(6119,"code",27),Jx(6120,"string"),sg()(),Sl(6121,"td",24)(6122,"em")(6123,"strong"),Jx(6124,"(opcional)"),sg()(),Sl(6125,"p"),Jx(6126,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),sg()()(),Sl(6127,"tr",16)(6128,"td",17)(6129,"div",25)(6130,"span",26),Jx(6131," modalTitle"),Wl(6132,"br"),sg()()(),Sl(6133,"td",21)(6134,"code",27),Jx(6135,"string"),sg()(),Sl(6136,"td",24)(6137,"em")(6138,"strong"),Jx(6139,"(opcional)"),sg()(),Sl(6140,"p"),Jx(6141,"Texto exibido no t\xEDtulo da modal."),sg()()(),Sl(6142,"tr",16)(6143,"td",17)(6144,"div",25)(6145,"span",26),Jx(6146," search"),Wl(6147,"br"),sg()()(),Sl(6148,"td",21)(6149,"code",27),Jx(6150,"string"),sg()(),Sl(6151,"td",24)(6152,"em")(6153,"strong"),Jx(6154,"(opcional)"),sg()(),Sl(6155,"p"),Jx(6156,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),sg()()()(),Sl(6157,"h4",43)(6158,"code",5),Jx(6159,"PoLookupResponseApi"),sg()(),Sl(6160,"div",2)(6161,"p"),Jx(6162,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),sg()(),Sl(6163,"h4",12),Jx(6164,"Propriedades"),sg(),Sl(6165,"table",13)(6166,"tr",14)(6167,"th",15),Jx(6168,"Nome"),sg(),Sl(6169,"th",15),Jx(6170,"Tipo"),sg(),Sl(6171,"th",15),Jx(6172,"Descri\xE7\xE3o"),sg()(),Sl(6173,"tr",16)(6174,"td",17)(6175,"div",25)(6176,"span",26),Jx(6177," hasNext"),Wl(6178,"br"),sg()()(),Sl(6179,"td",21)(6180,"code",29),Jx(6181,"boolean"),sg()(),Sl(6182,"td",24)(6183,"p"),Jx(6184,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),sg()()(),Sl(6185,"tr",16)(6186,"td",17)(6187,"div",25)(6188,"span",26),Jx(6189," items"),Wl(6190,"br"),sg()()(),Sl(6191,"td",21)(6192,"code",85),Jx(6193,"Array<object>"),sg()(),Sl(6194,"td",24)(6195,"p"),Jx(6196,"Lista de itens retornados."),sg()()()(),Sl(6197,"h3"),Jx(6198,"Enums"),sg(),Sl(6199,"h4",4)(6200,"code",5),Jx(6201,"PoTableColumnSpacing"),sg()(),Sl(6202,"div",2)(6203,"p"),Jx(6204,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Sl(6205,"strong"),Jx(6206,"p-spacing"),sg(),Jx(6207,") do po-table."),sg()(),Sl(6208,"h4",12),Jx(6209,"Propriedades"),sg(),Sl(6210,"table",13)(6211,"tr",14)(6212,"th",15),Jx(6213,"Nome"),sg(),Sl(6214,"th",15),Jx(6215,"Descri\xE7\xE3o"),sg()(),Sl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),Jx(6220," ExtraSmall"),Wl(6221,"br"),sg()()(),Sl(6222,"td",24)(6223,"p"),Jx(6224,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),sg()()(),Sl(6225,"tr",16)(6226,"td",17)(6227,"div",25)(6228,"span",26),Jx(6229," Small"),Wl(6230,"br"),sg()()(),Sl(6231,"td",24)(6232,"p"),Jx(6233,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),sg()()(),Sl(6234,"tr",16)(6235,"td",17)(6236,"div",25)(6237,"span",26),Jx(6238," Medium"),Wl(6239,"br"),sg()()(),Sl(6240,"td",24)(6241,"p"),Jx(6242,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),sg()()(),Sl(6243,"tr",16)(6244,"td",17)(6245,"div",25)(6246,"span",26),Jx(6247," Large"),Wl(6248,"br"),sg()()(),Sl(6249,"td",24)(6250,"p"),Jx(6251,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var We=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-lookup-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),sg()()()),l&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Me,_e,Oe,Ie,ze,Be,Re],encapsulation:2})}return a})();var xt=[{path:"",component:We}],Ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[pL.forChild(xt),pL]})}return a})();var Ii=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ue]})}return a})();export{Ii as DocPoLookupModule};