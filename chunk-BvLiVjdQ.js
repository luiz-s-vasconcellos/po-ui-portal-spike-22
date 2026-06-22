import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,r as rb,c_ as t,e as r$1,I,c$ as Xi,aW as Yp,cM as oY,cN as lm,G,b$ as bT,d0 as J0,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,aI as dc,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aJ as Uhe,b5 as qhe,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,O as we$1,bd as Ox,a7 as fN,cQ as Nk,cR as Ak,b7 as E3,d1 as FO,a4 as _N,aq as fx,br as aN,a5 as EN,at as hx,a3 as aNe,aA as Rx,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Gl(0,"po-lookup",0);},dependencies:[J0],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Lookup Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-lookup-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Qe,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,we],encapsulation:2})}return a})();var A=(()=>{class a{httpClient=f(rb);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService=f(A);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Xi.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we$1([A])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=Cx();Tl(0,"po-lookup",1),Ew("ngModelChange",function(m){return Ky(c),rN(o.lookup,m)||(o.lookup=m),Xy(m)}),ht("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"po-container",2)(3,"div",3),Gl(4,"po-info",4)(5,"po-info",5),sg()(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"po-input",6),Ew("ngModelChange",function(m){return Ky(c),rN(o.label,m)||(o.label=m),Xy(m)}),sg(),t0(),Tl(10,"po-checkbox-group",7),Ew("ngModelChange",function(m){return Ky(c),rN(o.columnsName,m)||(o.columnsName=m),Xy(m)}),ht("p-change",function(){return o.updateColumns()}),sg(),t0(),Tl(11,"po-select",8),Ew("ngModelChange",function(m){return Ky(c),rN(o.fieldLabel,m)||(o.fieldLabel=m),Xy(m)}),sg(),t0(),Tl(12,"po-select",9),Ew("ngModelChange",function(m){return Ky(c),rN(o.fieldValue,m)||(o.fieldValue=m),Xy(m)}),sg(),t0(),Tl(13,"po-input",10),Ew("ngModelChange",function(m){return Ky(c),rN(o.filterService,m)||(o.filterService=m),Xy(m)}),sg(),t0(),Tl(14,"po-input",11),Ew("ngModelChange",function(m){return Ky(c),rN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Xy(m)}),sg(),t0(),Tl(15,"po-input",12),Ew("ngModelChange",function(m){return Ky(c),rN(o.help,m)||(o.help=m),Xy(m)}),sg(),t0(),Tl(16,"po-input",13),Ew("ngModelChange",function(m){return Ky(c),rN(o.helperText,m)||(o.helperText=m),Xy(m)}),sg(),t0(),Tl(17,"po-input",14),Ew("ngModelChange",function(m){return Ky(c),rN(o.placeholder,m)||(o.placeholder=m),Xy(m)}),sg(),t0(),Tl(18,"po-input",15),Ew("ngModelChange",function(m){return Ky(c),rN(o.literals,m)||(o.literals=m),Xy(m)}),ht("p-change",function(){return o.changeLiterals()}),sg(),t0(),Tl(19,"po-input",16),Ew("ngModelChange",function(m){return Ky(c),rN(o.formatField,m)||(o.formatField=m),Xy(m)}),ht("p-change",function(m){return o.onFieldFormatChange(m)}),sg(),t0(),Tl(20,"po-checkbox-group",17),Ew("ngModelChange",function(m){return Ky(c),rN(o.properties,m)||(o.properties=m),Xy(m)}),sg(),t0(),Tl(21,"po-radio-group",18),Ew("ngModelChange",function(m){return Ky(c),rN(o.spacing,m)||(o.spacing=m),Xy(m)}),sg(),t0(),Tl(22,"po-radio-group",19),Ew("ngModelChange",function(m){return Ky(c),rN(o.size,m)||(o.size=m),Xy(m)}),sg(),t0(),Tl(23,"po-textarea",20),Ew("ngModelChange",function(m){return Ky(c),rN(o.advancedFilters,m)||(o.advancedFilters=m),Xy(m)}),ht("p-change",function(){return o.changeAdvancedFilters()}),sg(),t0(),Tl(24,"div",3)(25,"po-button",21),ht("p-click",function(){return o.restore()}),sg()()();}l&2&&(Dw("ngModel",o.lookup),tw("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),r0(),Vp(4),tw("p-value",o.lookup),Vp(),tw("p-value",o.event),Vp(4),Dw("ngModel",o.label),r0(),Vp(),Dw("ngModel",o.columnsName),tw("p-options",o.columnsOptions),r0(),Vp(),Dw("ngModel",o.fieldLabel),tw("p-options",o.fieldLabelOptions),r0(),Vp(),Dw("ngModel",o.fieldValue),tw("p-options",o.fieldValueOptions),r0(),Vp(),Dw("ngModel",o.filterService),r0(),Vp(),Dw("ngModel",o.fieldErrorMessage),r0(),Vp(),Dw("ngModel",o.help),r0(),Vp(),Dw("ngModel",o.helperText),r0(),Vp(),Dw("ngModel",o.placeholder),r0(),Vp(),Dw("ngModel",o.literals),r0(),Vp(),Dw("ngModel",o.formatField),r0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),r0(),Vp(),Dw("ngModel",o.spacing),tw("p-options",o.typeSpacing),r0(),Vp(),Dw("ngModel",o.size),tw("p-options",o.sizeOptions),r0(),Vp(),Dw("ngModel",o.advancedFilters),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,dc,mv,C3,O3,J0,Sde,Uhe,qhe,$he],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Lookup Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-lookup
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-lookup.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-labs"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ye,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=f(A);notification=f(Yp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we$1([A])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=Cx();Tl(0,"div",1),Gl(1,"po-info",2),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),Ew("ngModelChange",function(m){return Ky(c),rN(o.hero,m)||(o.hero=m),Xy(m)}),sg(),t0(),Tl(7,"po-select",4),Ew("ngModelChange",function(m){return Ky(c),rN(o.vehicle,m)||(o.vehicle=m),Xy(m)}),sg(),t0(),sg(),Tl(8,"div",1)(9,"po-button",5),ht("p-click",function(){return o.startMission()}),sg()()();}if(l&2){let c=Ox(4);Vp(6),Dw("ngModel",o.hero),tw("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",fN(10,Xe)),r0(),Vp(),Dw("ngModel",o.vehicle),tw("p-options",o.vehicles),r0(),Vp(2),tw("p-disabled",c.form.invalid||c.form.pending);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,J0,Uhe,$he],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Lookup - Hero"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-lookup.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-hero"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,et,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ae],encapsulation:2})}return a})();var it=()=>["nickname","label"],nt=()=>({modalTitle:"Heroes available for mission"}),je=(()=>{class a{service=f(A);notification=f(Yp);formBuilder=f(oY);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,lm.required],vehicle:[null,lm.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we$1([A])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Tl(0,"div",0),Gl(1,"po-info",1),sg(),Gl(2,"po-divider"),Tl(3,"form",2)(4,"div",0),Gl(5,"po-lookup",3),t0(),Gl(6,"po-select",4),t0(),sg(),Tl(7,"div",0)(8,"po-button",5),ht("p-click",function(){return o.startMission()}),sg()()()),l&2&&(Vp(3),tw("formGroup",o.formMission),Vp(2),tw("p-columns",o.columns)("p-field-format",fN(7,it))("p-filter-service",o.service)("p-literals",fN(8,nt)),r0(),Vp(),tw("p-options",o.vehicles),r0(),Vp(2),tw("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[nY,J9,eY,Nk,Ak,Qt,mv,J0,Uhe,$he],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Lookup - Hero Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-lookup.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-hero-reactive-form"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,at,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,je],encapsulation:2})}return a})();var de=(()=>{class a{http=f(rb);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(G(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(G(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,St){if(a&1&&(Tl(0,"div",0),Gl(1,"po-table",3),sg()),a&2){let r=Rx();Vp(),tw("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ve=(()=>{class a{filterService=f(de);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we$1([de])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"po-radio-group",1),Ew("ngModelChange",function(p){return rN(o.filterParams,p)||(o.filterParams=p),p}),sg(),t0(),sg(),Gl(2,"po-divider"),Tl(3,"div",0)(4,"po-lookup",2),_N(5,"titlecase"),Ew("ngModelChange",function(p){return rN(o.entity,p)||(o.entity=p),p}),ht("p-selected",function(p){return o.onSelected(p)}),sg(),t0(),sg(),fx(6,rt,2,4,"div",0)),l&2&&(Vp(),Dw("ngModel",o.filterParams),tw("p-options",o.entities),r0(),Vp(3),tw("p-help",aN("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",aN("",EN(5,12,o.entityLabel)," of Star Wars")),Dw("ngModel",o.entity),tw("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),r0(),Vp(2),hx(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[J9,Ck,mv,J0,Sde,E3,FO],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Lookup - Star Wars films"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-sw-films"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,dt,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ve],encapsulation:2})}return a})();var He=(()=>{class a{http=f(rb);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(bT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ne=(()=>{class a{service=f(He);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"po-lookup",1),Ew("ngModelChange",function(p){return rN(o.multiLookup,p)||(o.multiLookup=p),p}),ht("p-change",function(p){return o.changeOptions(p)}),sg(),t0(),Tl(2,"po-container",2),Gl(3,"po-table",3),sg()()),l&2&&(Vp(),Dw("ngModel",o.multiLookup),tw("p-multiple",true),r0(),Vp(2),tw("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[J9,Ck,dc,J0,E3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Lookup - Multiple"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-multiple"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ct,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ne],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6252,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoLookupComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Tl(24,"code"),tN(25,"po-lookup"),sg(),tN(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Tl(27,"em"),tN(28,"TAB"),sg(),tN(29,` para
buscar um registro.`),sg(),Tl(30,"blockquote")(31,"p"),tN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),sg()(),Tl(33,"blockquote")(34,"p"),tN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Tl(36,"a",6),tN(37,"modelo"),sg(),tN(38," como "),Tl(39,"code"),tN(40,"pending"),sg(),tN(41,"."),sg()(),Tl(42,"p"),tN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Tl(44,"code"),tN(45,"po-select"),sg(),tN(46," ou o "),Tl(47,"code"),tN(48,"po-combo"),sg(),tN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(50,"a",7),tN(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),sg(),tN(52,"."),sg(),Tl(53,"p"),tN(54,"Importante:"),sg(),Tl(55,"ul")(56,"li"),tN(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Tl(58,"pre")(59,"code"),tN(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),sg()()()(),Tl(61,"h4"),tN(62,"Tokens customiz\xE1veis"),sg(),Tl(63,"p"),tN(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(65,"blockquote")(66,"p"),tN(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(68,"a",8),tN(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(70,"."),sg()(),Tl(71,"table")(72,"thead")(73,"tr")(74,"th"),tN(75,"Propriedade"),sg(),Tl(76,"th"),tN(77,"Descri\xE7\xE3o"),sg(),Tl(78,"th"),tN(79,"Valor Padr\xE3o"),sg()()(),Tl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),tN(84,"Default Values"),sg()(),Gl(85,"td")(86,"td"),sg(),Tl(87,"tr")(88,"td")(89,"code"),tN(90,"--font-family"),sg()(),Tl(91,"td"),tN(92,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(93,"td")(94,"code"),tN(95,"var(--font-family-theme)"),sg()()(),Tl(96,"tr")(97,"td")(98,"code"),tN(99,"--font-size"),sg()(),Tl(100,"td"),tN(101,"Tamanho da fonte"),sg(),Tl(102,"td")(103,"code"),tN(104,"var(--font-size-default)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),tN(108,"--text-color-placeholder"),sg()(),Tl(109,"td"),tN(110,"Cor do texto no placeholder"),sg(),Tl(111,"td")(112,"code"),tN(113,"var(--color-neutral-light-30)"),sg()()(),Tl(114,"tr")(115,"td")(116,"code"),tN(117,"--color"),sg()(),Tl(118,"td"),tN(119,"Cor principal do lookup"),sg(),Tl(120,"td")(121,"code"),tN(122,"var(--color-neutral-dark-70)"),sg()()(),Tl(123,"tr")(124,"td")(125,"code"),tN(126,"--border-radius"),sg()(),Tl(127,"td"),tN(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(129,"td")(130,"code"),tN(131,"var(--border-radius-md)"),sg()()(),Tl(132,"tr")(133,"td")(134,"code"),tN(135,"--background"),sg()(),Tl(136,"td"),tN(137,"Cor de background"),sg(),Tl(138,"td")(139,"code"),tN(140,"var(--color-neutral-light-05)"),sg()()(),Tl(141,"tr")(142,"td")(143,"code"),tN(144,"--text-color"),sg()(),Tl(145,"td"),tN(146,"Cor do texto"),sg(),Tl(147,"td")(148,"code"),tN(149,"var(--color-neutral-dark-90)"),sg()()(),Tl(150,"tr")(151,"td")(152,"code"),tN(153,"--color-clear"),sg()(),Tl(154,"td"),tN(155,"Cor principal do icone clear"),sg(),Tl(156,"td")(157,"code"),tN(158,"var(--color-action-default)"),sg()()(),Tl(159,"tr")(160,"td")(161,"strong"),tN(162,"Icon"),sg()(),Gl(163,"td")(164,"td"),sg(),Tl(165,"tr")(166,"td")(167,"code"),tN(168,"--color-icon"),sg()(),Tl(169,"td"),tN(170,"Cor principal do icone pesquisar"),sg(),Tl(171,"td")(172,"code"),tN(173,"var(--color-action-default)"),sg()()(),Tl(174,"tr")(175,"td")(176,"strong"),tN(177,"Hover"),sg()(),Gl(178,"td")(179,"td"),sg(),Tl(180,"tr")(181,"td")(182,"code"),tN(183,"--color-hover"),sg()(),Tl(184,"td"),tN(185,"Cor principal no estado hover"),sg(),Tl(186,"td")(187,"code"),tN(188,"var(--color-brand-01-dark)"),sg()()(),Tl(189,"tr")(190,"td")(191,"code"),tN(192,"--background-hover"),sg()(),Tl(193,"td"),tN(194,"Cor de background no estado hover"),sg(),Tl(195,"td")(196,"code"),tN(197,"var(--color-brand-01-lightest)"),sg()()(),Tl(198,"tr")(199,"td")(200,"strong"),tN(201,"Focused"),sg()(),Gl(202,"td")(203,"td"),sg(),Tl(204,"tr")(205,"td")(206,"code"),tN(207,"--color-focused"),sg()(),Tl(208,"td"),tN(209,"Cor principal no estado de focus"),sg(),Tl(210,"td")(211,"code"),tN(212,"var(--color-action-default)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),tN(216,"--outline-color-focused"),sg()(),Tl(217,"td"),tN(218,"Cor do outline do estado de focus"),sg(),Tl(219,"td")(220,"code"),tN(221,"var(--color-action-focus)"),sg()()(),Tl(222,"tr")(223,"td")(224,"strong"),tN(225,"Disabled"),sg()(),Gl(226,"td")(227,"td"),sg(),Tl(228,"tr")(229,"td")(230,"code"),tN(231,"--color-disabled"),sg()(),Tl(232,"td"),tN(233,"Cor principal no estado disabled"),sg(),Tl(234,"td")(235,"code"),tN(236,"var(--color-action-disabled)"),sg()()(),Tl(237,"tr")(238,"td")(239,"code"),tN(240,"--background-disabled"),sg()(),Tl(241,"td"),tN(242,"Cor de background no estado disabled"),sg(),Tl(243,"td")(244,"code"),tN(245,"var(--color-neutral-light-20)"),sg()()(),Tl(246,"tr")(247,"td")(248,"code"),tN(249,"--text-color-disabled"),sg()(),Tl(250,"td"),tN(251,"Cor do texto quando campo est\xE1 desabilitado"),sg(),Tl(252,"td")(253,"code"),tN(254,"var(--color-action-disabled)"),sg()()(),Tl(255,"tr")(256,"td")(257,"strong"),tN(258,"Error"),sg()(),Gl(259,"td")(260,"td"),sg(),Tl(261,"tr")(262,"td")(263,"code"),tN(264,"--color-error"),sg()(),Tl(265,"td"),tN(266,"Cor de background no estado de requerido"),sg(),Tl(267,"td")(268,"code"),tN(269,"var(--color-feedback-negative-base)"),sg()()()()()(),Tl(270,"div",9)(271,"h4",10),tN(272,"Seletor"),sg(),Tl(273,"pre",11),tN(274,`<po-lookup
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
`),sg()(),Tl(275,"h4",12),tN(276,"Propriedades"),sg(),Tl(277,"table",13)(278,"tr",14)(279,"th",15),tN(280,"Nome"),sg(),Tl(281,"th",15),tN(282,"Tipo"),sg(),Tl(283,"th",15),tN(284,"Padr\xE3o"),sg(),Tl(285,"th",15),tN(286,"Descri\xE7\xE3o"),sg()(),Tl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),tN(291," (p-additional-help)"),Gl(292,"br"),sg()(),Tl(293,"div",20),tN(294,"Deprecated"),sg()(),Tl(295,"td",21)(296,"code",22),tN(297,"EventEmitter"),sg()(),Tl(298,"td",23),tN(299,"-"),sg(),Tl(300,"td",24)(301,"em")(302,"strong"),tN(303,"(opcional)"),sg()(),Tl(304,"p"),tN(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(306,"blockquote")(307,"p"),tN(308,"Essa propriedade est\xE1 "),Tl(309,"strong"),tN(310,"depreciada"),sg(),tN(311," e ser\xE1 removida na vers\xE3o "),Tl(312,"code"),tN(313,"23.x.x"),sg(),tN(314,". Recomendamos utilizar a propriedade "),Tl(315,"code"),tN(316,"p-helper"),sg(),tN(317," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),tN(322," p-additional-help-tooltip"),Gl(323,"br"),sg()(),Tl(324,"div",20),tN(325,"Deprecated"),sg()(),Tl(326,"td",21)(327,"code",27),tN(328,"string"),sg()(),Tl(329,"td",23),tN(330,"-"),sg(),Tl(331,"td",24)(332,"em")(333,"strong"),tN(334,"(opcional)"),sg()(),Tl(335,"p"),tN(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(337,"code"),tN(338,"po-helper"),sg(),tN(339,`.
`),Tl(340,"strong"),tN(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(342,"blockquote")(343,"p"),tN(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(345,"blockquote")(346,"p"),tN(347,"Essa propriedade est\xE1 "),Tl(348,"strong"),tN(349,"depreciada"),sg(),tN(350," e ser\xE1 removida na vers\xE3o "),Tl(351,"code"),tN(352,"23.x.x"),sg(),tN(353,". Recomendamos utilizar a propriedade "),Tl(354,"code"),tN(355,"p-helper"),sg(),tN(356," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),tN(361," p-advanced-filters"),Gl(362,"br"),sg()()(),Tl(363,"td",21)(364,"code",28),tN(365,"Array<PoLookupAdvancedFilter>"),sg()(),Tl(366,"td",23),tN(367,"-"),sg(),Tl(368,"td",24)(369,"em")(370,"strong"),tN(371,"(opcional)"),sg()(),Tl(372,"p"),tN(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Tl(374,"blockquote")(375,"p"),tN(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Tl(377,"p"),tN(378,"Exemplo de URL com busca avan\xE7ada:"),sg(),Tl(379,"pre")(380,"code"),tN(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),sg()(),Tl(382,"p"),tN(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),sg(),Tl(384,"pre")(385,"code"),tN(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),sg()()()(),Tl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),tN(391," p-append-in-body"),Gl(392,"br"),sg()()(),Tl(393,"td",21)(394,"code",29),tN(395,"boolean"),sg()(),Tl(396,"td",23)(397,"p")(398,"code"),tN(399,"false"),sg()()(),Tl(400,"td",24)(401,"em")(402,"strong"),tN(403,"(opcional)"),sg()(),Tl(404,"p"),tN(405,"Define que o popover ("),Tl(406,"code"),tN(407,"p-helper"),sg(),tN(408," e/ou "),Tl(409,"code"),tN(410,"p-error-limit"),sg(),tN(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(412,"blockquote")(413,"p"),tN(414,"Quando utilizado com "),Tl(415,"code"),tN(416,"p-helper"),sg(),tN(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),tN(422," p-auto-focus"),Gl(423,"br"),sg()()(),Tl(424,"td",21)(425,"code",29),tN(426,"boolean"),sg()(),Tl(427,"td",23)(428,"p")(429,"code"),tN(430,"false"),sg()()(),Tl(431,"td",24)(432,"em")(433,"strong"),tN(434,"(opcional)"),sg()(),Tl(435,"p"),tN(436,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(437,"blockquote")(438,"p"),tN(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),tN(444," p-auto-height"),Gl(445,"br"),sg()()(),Tl(446,"td",21)(447,"code",29),tN(448,"boolean"),sg()(),Tl(449,"td",23)(450,"p")(451,"code"),tN(452,"false"),sg()()(),Tl(453,"td",24)(454,"em")(455,"strong"),tN(456,"(opcional)"),sg()(),Tl(457,"p"),tN(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),sg()()(),Tl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),tN(463," (p-change)"),Gl(464,"br"),sg()()(),Tl(465,"td",21)(466,"code",22),tN(467,"EventEmitter"),sg()(),Tl(468,"td",23),tN(469,"-"),sg(),Tl(470,"td",24)(471,"em")(472,"strong"),tN(473,"(opcional)"),sg()(),Tl(474,"p"),tN(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),sg()()(),Tl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),tN(480," (p-change-visible-columns)"),Gl(481,"br"),sg()()(),Tl(482,"td",21)(483,"code",22),tN(484,"EventEmitter"),sg()(),Tl(485,"td",23),tN(486,"-"),sg(),Tl(487,"td",24)(488,"em")(489,"strong"),tN(490,"(opcional)"),sg()(),Tl(491,"p"),tN(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(493,"p"),tN(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),tN(499," p-clean"),Gl(500,"br"),sg()()(),Tl(501,"td",21)(502,"code",29),tN(503,"boolean"),sg()(),Tl(504,"td",23),tN(505,"-"),sg(),Tl(506,"td",24)(507,"p"),tN(508,"Exibe um \xEDcone que permite limpar o campo."),sg()()(),Tl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),tN(513," (p-restore-column-manager)"),Gl(514,"br"),sg()()(),Tl(515,"td",21)(516,"code",22),tN(517,"EventEmitter"),sg()(),Tl(518,"td",23),tN(519,"-"),sg(),Tl(520,"td",24)(521,"em")(522,"strong"),tN(523,"(opcional)"),sg()(),Tl(524,"p"),tN(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(526,"p"),tN(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),tN(532," p-columns"),Gl(533,"br"),sg()()(),Tl(534,"td",21)(535,"code",30),tN(536,"Array<PoLookupColumn>"),sg()(),Tl(537,"td",23),tN(538,"-"),sg(),Tl(539,"td",24)(540,"em")(541,"strong"),tN(542,"(opcional)"),sg()(),Tl(543,"p"),tN(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),sg()()(),Tl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),tN(549," p-compact-label"),Gl(550,"br"),sg()()(),Tl(551,"td",21)(552,"code",29),tN(553,"boolean"),sg()(),Tl(554,"td",23)(555,"p")(556,"code"),tN(557,"false"),sg()()(),Tl(558,"td",24)(559,"em")(560,"strong"),tN(561,"(opcional)"),sg()(),Tl(562,"p"),tN(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(564,"p"),tN(565,"Quando habilitado ("),Tl(566,"code"),tN(567,"true"),sg(),tN(568,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(569,"ul")(570,"li")(571,"code"),tN(572,"po-label"),sg()(),Tl(573,"li")(574,"code"),tN(575,"p-requirement (showRequired)"),sg()(),Tl(576,"li")(577,"code"),tN(578,"po-helper"),sg()()(),Tl(579,"p"),tN(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(581,"p"),tN(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(583,"ul")(584,"li")(585,"code"),tN(586,"--field-container-title-justify"),sg()(),Tl(587,"li")(588,"code"),tN(589,"--field-container-title-flex"),sg()()(),Tl(590,"p"),tN(591,"Exemplo:"),sg(),Tl(592,"pre")(593,"code"),tN(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(595,"p"),tN(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),tN(601," p-disabled"),Gl(602,"br"),sg()()(),Tl(603,"td",21)(604,"code",29),tN(605,"boolean"),sg()(),Tl(606,"td",23)(607,"p"),tN(608,"false"),sg()(),Tl(609,"td",24)(610,"em")(611,"strong"),tN(612,"(opcional)"),sg()(),Tl(613,"p"),tN(614,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),tN(619," p-error-limit"),Gl(620,"br"),sg()()(),Tl(621,"td",21)(622,"code",29),tN(623,"boolean"),sg()(),Tl(624,"td",23)(625,"p")(626,"code"),tN(627,"false"),sg()()(),Tl(628,"td",24)(629,"em")(630,"strong"),tN(631,"(opcional)"),sg()(),Tl(632,"p"),tN(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(634,"blockquote")(635,"p"),tN(636,"Caso essa propriedade seja definida como "),Tl(637,"code"),tN(638,"true"),sg(),tN(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),tN(644," p-field-error-message"),Gl(645,"br"),sg()()(),Tl(646,"td",21)(647,"code",27),tN(648,"string"),sg()(),Tl(649,"td",23),tN(650,"-"),sg(),Tl(651,"td",24)(652,"em")(653,"strong"),tN(654,"(opcional)"),sg()(),Tl(655,"p"),tN(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(657,"blockquote")(658,"p"),tN(659,"Necess\xE1rio que a propriedade "),Tl(660,"code"),tN(661,"p-required"),sg(),tN(662," esteja habilitada."),sg()()()(),Tl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),tN(667," p-field-format"),Gl(668,"br"),sg()()(),Tl(669,"td",21)(670,"code",31),tN(671,"((value) => string) "),sg(),Tl(672,"code",32),tN(673," Array<string>"),sg()(),Tl(674,"td",23),tN(675,"-"),sg(),Tl(676,"td",24)(677,"em")(678,"strong"),tN(679,"(opcional)"),sg()(),Tl(680,"p"),tN(681,"Formato de exibi\xE7\xE3o do campo."),sg(),Tl(682,"p"),tN(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Tl(684,"em"),tN(685,"string"),sg(),tN(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),sg(),Tl(687,"pre")(688,"code"),tN(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),sg()(),Tl(690,"blockquote")(691,"p"),tN(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Tl(693,"code"),tN(694,"p-field-label"),sg(),tN(695," na descri\xE7\xE3o do campo."),sg()(),Tl(696,"p"),tN(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),sg(),Tl(698,"pre")(699,"code"),tN(700,`<po-lookup
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
`),sg()(),Tl(701,"blockquote")(702,"p"),tN(703,"Ser\xE1 utilizado "),Tl(704,"code"),tN(705,"-"),sg(),tN(706," como separador."),sg()()()(),Tl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),tN(711," p-field-label"),Gl(712,"br"),sg()()(),Tl(713,"td",21)(714,"code",27),tN(715,"string"),sg()(),Tl(716,"td",23),tN(717,"-"),sg(),Tl(718,"td",24)(719,"p"),tN(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),sg()()(),Tl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),tN(725," p-field-value"),Gl(726,"br"),sg()()(),Tl(727,"td",21)(728,"code",27),tN(729,"string"),sg()(),Tl(730,"td",23),tN(731,"-"),sg(),Tl(732,"td",24)(733,"p"),tN(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),sg(),Tl(735,"blockquote")(736,"p"),tN(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),sg()()()(),Tl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),tN(742," p-filter-params"),Gl(743,"br"),sg()()(),Tl(744,"td",21)(745,"code",33),tN(746,"any"),sg()(),Tl(747,"td",23),tN(748,"-"),sg(),Tl(749,"td",24)(750,"em")(751,"strong"),tN(752,"(opcional)"),sg()(),Tl(753,"p"),tN(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Tl(755,"code"),tN(756,"PoLookupFilter"),sg(),tN(757,"."),sg()()(),Tl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),tN(762," p-filter-service"),Gl(763,"br"),sg()()(),Tl(764,"td",21)(765,"code",27),tN(766,"string "),sg(),Tl(767,"code",34),tN(768," PoLookupFilter"),sg()(),Tl(769,"td",23),tN(770,"-"),sg(),Tl(771,"td",24)(772,"p"),tN(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Tl(774,"code"),tN(775,"PoLookupFilter"),sg(),tN(776," ou uma URL."),sg(),Tl(777,"p"),tN(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),sg(),Tl(779,"pre")(780,"code"),tN(781,`url + ?page=1&pageSize=20&filter=Peter
`),sg()(),Tl(782,"p"),tN(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Tl(784,"code"),tN(785,"order"),sg(),tN(786,", por exemplo:"),sg(),Tl(787,"ul")(788,"li")(789,"p"),tN(790,"Coluna decrescente:"),sg(),Tl(791,"pre")(792,"code"),tN(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),sg()()(),Tl(794,"li")(795,"p"),tN(796,"Coluna ascendente:"),sg(),Tl(797,"pre")(798,"code"),tN(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),sg()()()(),Tl(800,"p"),tN(801,"Se for definido a propriedade "),Tl(802,"code"),tN(803,"p-filter-params"),sg(),tN(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Tl(805,"code"),tN(806,"{ age: 23 }"),sg(),tN(807," a URL ficaria:"),sg(),Tl(808,"pre")(809,"code"),tN(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),sg()(),Tl(811,"p"),tN(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),sg(),Tl(813,"pre")(814,"code"),tN(815,`model = 1234;

GET url/1234
`),sg()(),Tl(816,"p"),tN(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),sg(),Tl(818,"pre")(819,"code"),tN(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),sg()(),Tl(821,"blockquote")(822,"p"),tN(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Tl(824,"a",7),tN(825,"API do PO UI"),sg(),tN(826,` e utiliza os valores
definidos nas propriedades `),Tl(827,"code"),tN(828,"p-field-label"),sg(),tN(829," e "),Tl(830,"code"),tN(831,"p-field-value"),sg(),tN(832," para a constru\xE7\xE3o do "),Tl(833,"code"),tN(834,"po-lookup"),sg(),tN(835,"."),sg()(),Tl(836,"p"),tN(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Tl(838,"em"),tN(839,"TAB"),sg(),tN(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Tl(841,"a",35),tN(842,"encodeURIComponent"),sg(),tN(843,`
e concatenado na URL da seguinte forma:`),sg(),Tl(844,"pre")(845,"code"),tN(846,`url/valor%20que%20se%20deseja%20filtrar
`),sg()(),Tl(847,"blockquote")(848,"p"),tN(849,"Quando informado um servi\xE7o que implemente a interface "),Tl(850,"code"),tN(851,"PoLookupFilter"),sg(),tN(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),sg()()()(),Tl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),tN(857," p-help"),Gl(858,"br"),sg()()(),Tl(859,"td",21)(860,"code",27),tN(861,"string"),sg()(),Tl(862,"td",23),tN(863,"-"),sg(),Tl(864,"td",24)(865,"em")(866,"strong"),tN(867,"(opcional)"),sg()(),Tl(868,"p"),tN(869,"Texto de apoio do campo."),sg()()(),Tl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),tN(874," p-hide-columns-manager"),Gl(875,"br"),sg()()(),Tl(876,"td",21)(877,"code",29),tN(878,"boolean"),sg()(),Tl(879,"td",23)(880,"p")(881,"code"),tN(882,"false"),sg()()(),Tl(883,"td",24)(884,"em")(885,"strong"),tN(886,"(opcional)"),sg()(),Tl(887,"p"),tN(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),sg()()(),Tl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),tN(893," p-infinite-scroll"),Gl(894,"br"),sg()()(),Tl(895,"td",21)(896,"code",29),tN(897,"boolean"),sg()(),Tl(898,"td",23)(899,"p")(900,"code"),tN(901,"false"),sg()()(),Tl(902,"td",24)(903,"em")(904,"strong"),tN(905,"(opcional)"),sg()(),Tl(906,"p"),tN(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),sg()()(),Tl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),tN(912," (p-keydown)"),Gl(913,"br"),sg()()(),Tl(914,"td",21)(915,"code",22),tN(916,"EventEmitter"),sg()(),Tl(917,"td",23),tN(918,"-"),sg(),Tl(919,"td",24)(920,"em")(921,"strong"),tN(922,"(opcional)"),sg()(),Tl(923,"p"),tN(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(925,"code"),tN(926,"KeyboardEvent"),sg(),tN(927," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),tN(932," p-label"),Gl(933,"br"),sg()()(),Tl(934,"td",21)(935,"code",27),tN(936,"string"),sg()(),Tl(937,"td",23),tN(938,"-"),sg(),Tl(939,"td",24)(940,"em")(941,"strong"),tN(942,"(opcional)"),sg()(),Tl(943,"p"),tN(944,"Label do campo."),sg(),Tl(945,"blockquote")(946,"p"),tN(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Tl(948,"code"),tN(949,"modalTitle"),sg(),tN(950," na propriedade "),Tl(951,"code"),tN(952,"p-literals"),sg(),tN(953,"."),sg()()()(),Tl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),tN(958," p-label-text-wrap"),Gl(959,"br"),sg()()(),Tl(960,"td",21)(961,"code",29),tN(962,"boolean"),sg()(),Tl(963,"td",23)(964,"p")(965,"code"),tN(966,"false"),sg()()(),Tl(967,"td",24)(968,"em")(969,"strong"),tN(970,"(opcional)"),sg()(),Tl(971,"p"),tN(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(973,"code"),tN(974,"p-label"),sg(),tN(975,". Quando "),Tl(976,"code"),tN(977,"p-label-text-wrap"),sg(),tN(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),tN(983," p-literals"),Gl(984,"br"),sg()()(),Tl(985,"td",21)(986,"code",36),tN(987,"PoLookupLiterals"),sg()(),Tl(988,"td",23),tN(989,"-"),sg(),Tl(990,"td",24)(991,"p"),tN(992,"Objeto com as literais usadas no "),Tl(993,"code"),tN(994,"po-lookup"),sg(),tN(995,"."),sg(),Tl(996,"p"),tN(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(998,"pre")(999,"code"),tN(1e3,`const customLiterals: PoLookupLiterals = {
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
`),sg()(),Tl(1001,"p"),tN(1002,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(1003,"pre")(1004,"code"),tN(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),sg()(),Tl(1006,"p"),tN(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(1008,"pre")(1009,"code"),tN(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),sg()(),Tl(1011,"blockquote")(1012,"p"),tN(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(1014,"a",37)(1015,"code"),tN(1016,"PoI18nService"),sg()(),tN(1017," ou do browser."),sg()()()(),Tl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),tN(1022," p-loading"),Gl(1023,"br"),sg()()(),Tl(1024,"td",21)(1025,"code",29),tN(1026,"boolean"),sg()(),Tl(1027,"td",23)(1028,"p")(1029,"code"),tN(1030,"false"),sg()()(),Tl(1031,"td",24)(1032,"em")(1033,"strong"),tN(1034,"(opcional)"),sg()(),Tl(1035,"p"),tN(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),tN(1041," p-multiple"),Gl(1042,"br"),sg()()(),Tl(1043,"td",21)(1044,"code",29),tN(1045,"boolean"),sg()(),Tl(1046,"td",23)(1047,"p")(1048,"code"),tN(1049,"false"),sg()()(),Tl(1050,"td",24)(1051,"em")(1052,"strong"),tN(1053,"(opcional)"),sg()(),Tl(1054,"p"),tN(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Tl(1056,"blockquote")(1057,"p"),tN(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Tl(1059,"code"),tN(1060,"[ 12345, 67890 ]"),sg()()()()(),Tl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),tN(1065," name"),Gl(1066,"br"),sg()()(),Tl(1067,"td",21)(1068,"code",27),tN(1069,"string"),sg()(),Tl(1070,"td",23),tN(1071,"-"),sg(),Tl(1072,"td",24)(1073,"p"),tN(1074,"Nome e Id do componente."),sg()()(),Tl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),tN(1079," p-no-autocomplete"),Gl(1080,"br"),sg()()(),Tl(1081,"td",21)(1082,"code",29),tN(1083,"boolean"),sg()(),Tl(1084,"td",23)(1085,"p")(1086,"code"),tN(1087,"false"),sg()()(),Tl(1088,"td",24)(1089,"em")(1090,"strong"),tN(1091,"(opcional)"),sg()(),Tl(1092,"p"),tN(1093,"Define a propriedade nativa "),Tl(1094,"code"),tN(1095,"autocomplete"),sg(),tN(1096," do campo como "),Tl(1097,"code"),tN(1098,"off"),sg(),tN(1099,"."),sg()()(),Tl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),tN(1104," (p-error)"),Gl(1105,"br"),sg()()(),Tl(1106,"td",21)(1107,"code",22),tN(1108,"EventEmitter"),sg()(),Tl(1109,"td",23),tN(1110,"-"),sg(),Tl(1111,"td",24)(1112,"p"),tN(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),sg()()(),Tl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),tN(1118," p-optional"),Gl(1119,"br"),sg()()(),Tl(1120,"td",21)(1121,"code",29),tN(1122,"boolean"),sg()(),Tl(1123,"td",23)(1124,"p")(1125,"code"),tN(1126,"false"),sg()()(),Tl(1127,"td",24)(1128,"em")(1129,"strong"),tN(1130,"(opcional)"),sg()(),Tl(1131,"p"),tN(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1133,"blockquote")(1134,"p"),tN(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1136,"ul")(1137,"li"),tN(1138,"O campo conter "),Tl(1139,"code"),tN(1140,"p-required"),sg(),tN(1141,";"),sg(),Tl(1142,"li"),tN(1143,"N\xE3o possuir "),Tl(1144,"code"),tN(1145,"p-help"),sg(),tN(1146," e/ou "),Tl(1147,"code"),tN(1148,"p-label"),sg(),tN(1149,"."),sg()()()(),Tl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),tN(1154," p-placeholder"),Gl(1155,"br"),sg()()(),Tl(1156,"td",21)(1157,"code",27),tN(1158,"string"),sg()(),Tl(1159,"td",23),tN(1160,"-"),sg(),Tl(1161,"td",24)(1162,"p"),tN(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),tN(1168," p-helper"),Gl(1169,"br"),sg()()(),Tl(1170,"td",21)(1171,"code",38),tN(1172,"PoHelperOptions "),sg(),Tl(1173,"code",27),tN(1174," string"),sg()(),Tl(1175,"td",23),tN(1176,"-"),sg(),Tl(1177,"td",24)(1178,"em")(1179,"strong"),tN(1180,"(opcional)"),sg()(),Tl(1181,"p"),tN(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1183,"code"),tN(1184,"p-label"),sg(),tN(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1186,"code"),tN(1187,"p-label"),sg(),tN(1188,"."),sg(),Tl(1189,"blockquote")(1190,"p"),tN(1191,"Para mais informa\xE7\xF5es acesse: "),Tl(1192,"a",39),tN(1193,"https://po-ui.io/documentation/po-helper"),sg(),tN(1194,"."),sg()(),Tl(1195,"blockquote")(1196,"p"),tN(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1198,"code"),tN(1199,"p-additional-help-tooltip"),sg(),tN(1200," e "),Tl(1201,"code"),tN(1202,"p-additional-help"),sg(),tN(1203,") ser\xE1 ignorado."),sg()()()(),Tl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),tN(1208," p-required"),Gl(1209,"br"),sg()()(),Tl(1210,"td",21)(1211,"code",29),tN(1212,"boolean"),sg()(),Tl(1213,"td",23)(1214,"p")(1215,"code"),tN(1216,"false"),sg()()(),Tl(1217,"td",24)(1218,"em")(1219,"strong"),tN(1220,"(opcional)"),sg()(),Tl(1221,"p"),tN(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1223,"blockquote")(1224,"p"),tN(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1226,"code"),tN(1227,"(p-disabled)"),sg(),tN(1228,"."),sg()()()(),Tl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),tN(1233," (p-selected)"),Gl(1234,"br"),sg()()(),Tl(1235,"td",21)(1236,"code",22),tN(1237,"EventEmitter"),sg()(),Tl(1238,"td",23),tN(1239,"-"),sg(),Tl(1240,"td",24)(1241,"em")(1242,"strong"),tN(1243,"(opcional)"),sg()(),Tl(1244,"p"),tN(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),sg()()(),Tl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),tN(1250," p-show-required"),Gl(1251,"br"),sg()()(),Tl(1252,"td",21)(1253,"code",29),tN(1254,"boolean"),sg()(),Tl(1255,"td",23),tN(1256,"-"),sg(),Tl(1257,"td",24)(1258,"p"),tN(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),sg(),Tl(1260,"blockquote")(1261,"p"),tN(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1263,"ul")(1264,"li"),tN(1265,"N\xE3o possuir "),Tl(1266,"code"),tN(1267,"p-help"),sg(),tN(1268," e/ou "),Tl(1269,"code"),tN(1270,"p-label"),sg(),tN(1271,"."),sg()()()(),Tl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),tN(1276," p-size"),Gl(1277,"br"),sg()()(),Tl(1278,"td",21)(1279,"code",27),tN(1280,"string"),sg()(),Tl(1281,"td",23)(1282,"p")(1283,"code"),tN(1284,"medium"),sg()()(),Tl(1285,"td",24)(1286,"em")(1287,"strong"),tN(1288,"(opcional)"),sg()(),Tl(1289,"p"),tN(1290,"Define o tamanho do componente:"),sg(),Tl(1291,"ul")(1292,"li")(1293,"code"),tN(1294,"small"),sg(),tN(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1296,"li")(1297,"code"),tN(1298,"medium"),sg(),tN(1299,": altura do input como 44px."),sg()(),Tl(1300,"blockquote")(1301,"p"),tN(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1303,"code"),tN(1304,"medium"),sg(),tN(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1306,"a",40),tN(1307,"po-theme"),sg(),tN(1308,"."),sg()()()(),Tl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),tN(1313," p-spacing"),Gl(1314,"br"),sg()()(),Tl(1315,"td",21)(1316,"code",27),tN(1317,"string"),sg()(),Tl(1318,"td",23)(1319,"p")(1320,"code"),tN(1321,"medium"),sg()()(),Tl(1322,"td",24)(1323,"em")(1324,"strong"),tN(1325,"(opcional)"),sg()(),Tl(1326,"p"),tN(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Tl(1328,"strong"),tN(1329,"PoTableColumnSpacing"),sg(),tN(1330,"."),sg(),Tl(1331,"blockquote")(1332,"p"),tN(1333,"Em n\xEDvel de acessibilidade "),Tl(1334,"strong"),tN(1335,"AA"),sg(),tN(1336,", caso o valor de "),Tl(1337,"code"),tN(1338,"p-spacing"),sg(),tN(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Tl(1340,"code"),tN(1341,"extraSmall"),sg(),tN(1342,`
nos seguintes cen\xE1rios:`),sg(),Tl(1343,"ul")(1344,"li"),tN(1345,"Quando o valor de "),Tl(1346,"code"),tN(1347,"p-size"),sg(),tN(1348," for "),Tl(1349,"code"),tN(1350,"small"),sg(),tN(1351,";"),sg(),Tl(1352,"li"),tN(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Tl(1354,"code"),tN(1355,"small"),sg(),tN(1356,` no
`),Tl(1357,"a",40),tN(1358,"servi\xE7o de tema"),sg(),tN(1359,"."),sg()()()()(),Tl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),tN(1364," p-text-wrap"),Gl(1365,"br"),sg()()(),Tl(1366,"td",21)(1367,"code",29),tN(1368,"boolean"),sg()(),Tl(1369,"td",23)(1370,"p")(1371,"code"),tN(1372,"false"),sg()()(),Tl(1373,"td",24)(1374,"em")(1375,"strong"),tN(1376,"(opcional)"),sg()(),Tl(1377,"p"),tN(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg(),Tl(1379,"p"),tN(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),sg(),Tl(1381,"blockquote")(1382,"p"),tN(1383,"Incompat\xEDvel com "),Tl(1384,"code"),tN(1385,"virtual-scroll"),sg(),tN(1386,", que requer altura fixa nas linhas."),sg()()()(),Tl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),tN(1391," p-virtual-scroll"),Gl(1392,"br"),sg()()(),Tl(1393,"td",21)(1394,"code",29),tN(1395,"boolean"),sg()(),Tl(1396,"td",23)(1397,"p")(1398,"code"),tN(1399,"true"),sg()()(),Tl(1400,"td",24)(1401,"em")(1402,"strong"),tN(1403,"(opcional)"),sg()(),Tl(1404,"p"),tN(1405,"Habilita o "),Tl(1406,"code"),tN(1407,"virtual-scroll"),sg(),tN(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Tl(1409,"code"),tN(1410,"virtual-scroll"),sg(),tN(1411," ser\xE1 ativado automaticamente."),sg(),Tl(1412,"blockquote")(1413,"p"),tN(1414,"Incompat\xEDvel com "),Tl(1415,"code"),tN(1416,"p-text-wrap"),sg(),tN(1417," e "),Tl(1418,"code"),tN(1419,"master-detail"),sg(),tN(1420,", pois o "),Tl(1421,"code"),tN(1422,"virtual-scroll"),sg(),tN(1423," exige altura fixa nas linhas."),sg()()()()(),Tl(1424,"h3",12),tN(1425,"M\xE9todos"),sg(),Tl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),tN(1432," focus "),sg()()()()(),Tl(1433,"tr",24)(1434,"td",24)(1435,"p"),tN(1436,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1437,"p"),tN(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1439,"pre")(1440,"code"),tN(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),sg()()()()(),Gl(1442,"br"),Tl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),tN(1449," showAdditionalHelp "),sg()()()()(),Tl(1450,"tr",24)(1451,"td",24)(1452,"p"),tN(1453,"M\xE9todo que exibe "),Tl(1454,"code"),tN(1455,"p-helper"),sg(),tN(1456," ou executa a a\xE7\xE3o definida em "),Tl(1457,"code"),tN(1458,"p-helper{eventOnClick}"),sg(),tN(1459," ou em "),Tl(1460,"code"),tN(1461,"p-additionalHelp"),sg(),tN(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1463,"code"),tN(1464,"p-keydown"),sg(),tN(1465,"."),sg(),Tl(1466,"blockquote")(1467,"p"),tN(1468,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1469,"code"),tN(1470,"po-helper"),sg(),tN(1471," quando o componente estiver com foco."),sg()(),Tl(1472,"pre")(1473,"code"),tN(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),sg()(),Tl(1475,"pre")(1476,"code"),tN(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1478,"br"),Tl(1479,"h3"),tN(1480,"Interfaces"),sg(),Tl(1481,"h4",43)(1482,"code",5),tN(1483,"PoLookupAdvancedFilter"),sg()(),Tl(1484,"div",2)(1485,"p"),tN(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),sg()(),Tl(1487,"h4",12),tN(1488,"Propriedades"),sg(),Tl(1489,"table",13)(1490,"tr",14)(1491,"th",15),tN(1492,"Nome"),sg(),Tl(1493,"th",15),tN(1494,"Tipo"),sg(),Tl(1495,"th",15),tN(1496,"Descri\xE7\xE3o"),sg()(),Tl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),tN(1501," additionalHelp"),Gl(1502,"br"),sg()()(),Tl(1503,"td",21)(1504,"code",44),tN(1505,"Function"),sg()(),Tl(1506,"td",24)(1507,"em")(1508,"strong"),tN(1509,"(opcional)"),sg()(),Tl(1510,"p"),tN(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(1512,"blockquote")(1513,"p"),tN(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),tN(1519," additionalHelpTooltip"),Gl(1520,"br"),sg()()(),Tl(1521,"td",21)(1522,"code",27),tN(1523,"string"),sg()(),Tl(1524,"td",24)(1525,"em")(1526,"strong"),tN(1527,"(opcional)"),sg()(),Tl(1528,"p"),tN(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(1530,"code"),tN(1531,"po-helper"),sg(),tN(1532,`.
`),Tl(1533,"strong"),tN(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(1535,"blockquote")(1536,"p"),tN(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),tN(1542," advancedFilters"),Gl(1543,"br"),sg()()(),Tl(1544,"td",21)(1545,"code",28),tN(1546,"Array<PoLookupAdvancedFilter>"),sg()(),Tl(1547,"td",24)(1548,"em")(1549,"strong"),tN(1550,"(opcional)"),sg()(),Tl(1551,"p"),tN(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Tl(1553,"blockquote")(1554,"p"),tN(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Tl(1556,"p"),tN(1557,"Exemplo de URL com busca avan\xE7ada:"),sg(),Tl(1558,"p")(1559,"code"),tN(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),sg()(),Tl(1561,"p"),tN(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),sg(),Tl(1563,"p")(1564,"code"),tN(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),sg()()()(),Tl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),tN(1570," appendBox"),Gl(1571,"br"),sg()()(),Tl(1572,"td",21)(1573,"code",29),tN(1574,"boolean"),sg()(),Tl(1575,"td",24)(1576,"em")(1577,"strong"),tN(1578,"(opcional)"),sg()(),Tl(1579,"p"),tN(1580,"Define que o "),Tl(1581,"code"),tN(1582,"listbox"),sg(),tN(1583," e/ou popover ("),Tl(1584,"code"),tN(1585,"p-helper"),sg(),tN(1586," e/ou "),Tl(1587,"code"),tN(1588,"p-error-limit"),sg(),tN(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(1590,"blockquote")(1591,"p"),tN(1592,"Quando utilizado com "),Tl(1593,"code"),tN(1594,"p-helper"),sg(),tN(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),tN(1600," autoHeight"),Gl(1601,"br"),sg()()(),Tl(1602,"td",21)(1603,"code",29),tN(1604,"boolean"),sg()(),Tl(1605,"td",24)(1606,"em")(1607,"strong"),tN(1608,"(opcional)"),sg()(),Tl(1609,"p"),tN(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),sg(),Tl(1611,"p")(1612,"strong"),tN(1613,"Componentes compat\xEDveis:"),sg(),Tl(1614,"code"),tN(1615,"po-multiselect"),sg(),tN(1616,", "),Tl(1617,"code"),tN(1618,"po-lookup"),sg(),tN(1619,"."),sg()()(),Tl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),tN(1624," autoUpload"),Gl(1625,"br"),sg()()(),Tl(1626,"td",21)(1627,"code",29),tN(1628,"boolean"),sg()(),Tl(1629,"td",24)(1630,"em")(1631,"strong"),tN(1632,"(opcional)"),sg()(),Tl(1633,"p"),tN(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Tl(1635,"p")(1636,"strong"),tN(1637,"Componente compat\xEDvel"),sg(),tN(1638,": "),Tl(1639,"code"),tN(1640,"po-upload"),sg()()()(),Tl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),tN(1645," booleanFalse"),Gl(1646,"br"),sg()()(),Tl(1647,"td",21)(1648,"code",27),tN(1649,"string"),sg()(),Tl(1650,"td",24)(1651,"em")(1652,"strong"),tN(1653,"(opcional)"),sg()(),Tl(1654,"p"),tN(1655,"Texto exibido quando o valor do componente for "),Tl(1656,"em"),tN(1657,"false"),sg(),tN(1658,"."),sg()()(),Tl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),tN(1663," booleanTrue"),Gl(1664,"br"),sg()()(),Tl(1665,"td",21)(1666,"code",27),tN(1667,"string"),sg()(),Tl(1668,"td",24)(1669,"em")(1670,"strong"),tN(1671,"(opcional)"),sg()(),Tl(1672,"p"),tN(1673,"Texto exibido quando o valor do componente for "),Tl(1674,"em"),tN(1675,"true"),sg(),tN(1676,"."),sg()()(),Tl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),tN(1681," changeOnEnter"),Gl(1682,"br"),sg()()(),Tl(1683,"td",21)(1684,"code",29),tN(1685,"boolean"),sg()(),Tl(1686,"td",24)(1687,"em")(1688,"strong"),tN(1689,"(opcional)"),sg()(),Tl(1690,"p"),tN(1691,"Indica que o evento "),Tl(1692,"code"),tN(1693,"p-change"),sg(),tN(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Tl(1695,"code"),tN(1696,"po-combo"),sg(),tN(1697,"."),sg()()(),Tl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),tN(1702," changeVisibleColumns"),Gl(1703,"br"),sg()()(),Tl(1704,"td",21)(1705,"code",44),tN(1706,"Function"),sg()(),Tl(1707,"td",24)(1708,"em")(1709,"strong"),tN(1710,"(opcional)"),sg()(),Tl(1711,"p"),tN(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(1713,"p"),tN(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(1715,"p")(1716,"strong"),tN(1717,"Componente compat\xEDvel"),sg(),tN(1718,": "),Tl(1719,"code"),tN(1720,"po-lookup"),sg()()()(),Tl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),tN(1725," clean"),Gl(1726,"br"),sg()()(),Tl(1727,"td",21)(1728,"code",29),tN(1729,"boolean"),sg()(),Tl(1730,"td",24)(1731,"em")(1732,"strong"),tN(1733,"(opcional)"),sg()(),Tl(1734,"p"),tN(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg(),Tl(1736,"p")(1737,"strong"),tN(1738,"Componentes compat\xEDveis:"),sg(),Tl(1739,"code"),tN(1740,"po-datepicker"),sg(),tN(1741,", "),Tl(1742,"code"),tN(1743,"po-datepicker-range"),sg(),tN(1744,", "),Tl(1745,"code"),tN(1746,"po-input"),sg(),tN(1747,", "),Tl(1748,"code"),tN(1749,"po-number"),sg(),tN(1750,", "),Tl(1751,"code"),tN(1752,"po-decimal"),sg(),tN(1753,`,
`),Tl(1754,"code"),tN(1755,"po-combo"),sg(),tN(1756,", "),Tl(1757,"code"),tN(1758,"po-lookup"),sg(),tN(1759,", "),Tl(1760,"code"),tN(1761,"po-password"),sg(),tN(1762,", "),Tl(1763,"code"),tN(1764,"po-timepicker"),sg(),tN(1765,"."),sg()()(),Tl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),tN(1770," columnRestoreManager"),Gl(1771,"br"),sg()()(),Tl(1772,"td",21)(1773,"code",44),tN(1774,"Function"),sg()(),Tl(1775,"td",24)(1776,"em")(1777,"strong"),tN(1778,"(opcional)"),sg()(),Tl(1779,"p"),tN(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(1781,"p"),tN(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(1783,"p")(1784,"strong"),tN(1785,"Componente compat\xEDvel"),sg(),tN(1786,": "),Tl(1787,"code"),tN(1788,"po-lookup"),sg()()()(),Tl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),tN(1793," columns"),Gl(1794,"br"),sg()()(),Tl(1795,"td",21)(1796,"code",30),tN(1797,"Array<PoLookupColumn> "),sg(),Tl(1798,"code",45),tN(1799," number"),sg()(),Tl(1800,"td",24)(1801,"em")(1802,"strong"),tN(1803,"(opcional)"),sg()(),Tl(1804,"p"),tN(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Tl(1806,"code"),tN(1807,"searchService"),sg(),tN(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Tl(1809,"a",46)(1810,"code"),tN(1811,"PoLookupColumn"),sg()(),tN(1812,"."),sg(),Tl(1813,"blockquote")(1814,"p"),tN(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Tl(1816,"em"),tN(1817,"label"),sg(),tN(1818," e "),Tl(1819,"em"),tN(1820,"value"),sg(),tN(1821,` para valores
de tela e do model respectivamente.`),sg()(),Tl(1822,"p")(1823,"strong"),tN(1824,"Componentes compat\xEDveis:"),sg(),Tl(1825,"code"),tN(1826,"po-radio-group"),sg(),tN(1827,", "),Tl(1828,"code"),tN(1829,"po-lookup"),sg(),tN(1830,", "),Tl(1831,"code"),tN(1832,"po-checkbox-group"),sg(),tN(1833,"."),sg()()(),Tl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),tN(1838," compactLabel"),Gl(1839,"br"),sg()()(),Tl(1840,"td",21)(1841,"code",29),tN(1842,"boolean"),sg()(),Tl(1843,"td",24)(1844,"em")(1845,"strong"),tN(1846,"(opcional)"),sg()(),Tl(1847,"p"),tN(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(1849,"p"),tN(1850,"Quando habilitado ("),Tl(1851,"code"),tN(1852,"true"),sg(),tN(1853,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(1854,"ul")(1855,"li")(1856,"code"),tN(1857,"po-label"),sg()(),Tl(1858,"li")(1859,"code"),tN(1860,"p-requirement (showRequired)"),sg()(),Tl(1861,"li")(1862,"code"),tN(1863,"po-helper"),sg()()(),Tl(1864,"p"),tN(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(1866,"p"),tN(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(1868,"ul")(1869,"li")(1870,"code"),tN(1871,"--field-container-title-justify"),sg()(),Tl(1872,"li")(1873,"code"),tN(1874,"--field-container-title-flex"),sg()()(),Tl(1875,"p"),tN(1876,"Exemplo:"),sg(),Tl(1877,"pre")(1878,"code"),tN(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(1880,"p"),tN(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),tN(1886," container"),Gl(1887,"br"),sg()()(),Tl(1888,"td",21)(1889,"code",27),tN(1890,"string"),sg()(),Tl(1891,"td",24)(1892,"em")(1893,"strong"),tN(1894,"(opcional)"),sg()(),Tl(1895,"p"),tN(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Tl(1897,"p"),tN(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Tl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),tN(1903," customAction"),Gl(1904,"br"),sg()()(),Tl(1905,"td",21)(1906,"code",47),tN(1907,"PoProgressAction"),sg()(),Tl(1908,"td",24)(1909,"em")(1910,"strong"),tN(1911,"(opcional)"),sg()(),Tl(1912,"p"),tN(1913,"Define uma a\xE7\xE3o personalizada no componente "),Tl(1914,"code"),tN(1915,"po-upload"),sg(),tN(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Tl(1917,"p")(1918,"strong"),tN(1919,"Componente compat\xEDvel"),sg(),tN(1920,": "),Tl(1921,"code"),tN(1922,"po-upload"),sg(),tN(1923,","),sg(),Tl(1924,"p")(1925,"strong"),tN(1926,"Exemplo de configura\xE7\xE3o"),sg(),tN(1927,":"),sg(),Tl(1928,"pre")(1929,"code",48),tN(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),sg()()()(),Tl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),tN(1935," customActionClick"),Gl(1936,"br"),sg()()(),Tl(1937,"td",21)(1938,"code",49),tN(1939,"(file: PoUploadFile) => void"),sg()(),Tl(1940,"td",24)(1941,"em")(1942,"strong"),tN(1943,"(opcional)"),sg()(),Tl(1944,"p"),tN(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Tl(1946,"code"),tN(1947,"p-custom-action"),sg(),tN(1948,"."),sg(),Tl(1949,"p")(1950,"strong"),tN(1951,"Componente compat\xEDvel"),sg(),tN(1952,": "),Tl(1953,"code"),tN(1954,"po-upload"),sg(),tN(1955,","),sg(),Tl(1956,"p"),tN(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Tl(1958,"p")(1959,"strong"),tN(1960,"Par\xE2metro do evento"),sg(),tN(1961,":"),sg(),Tl(1962,"ul")(1963,"li")(1964,"code"),tN(1965,"file"),sg(),tN(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Tl(1967,"code"),tN(1968,"PoUploadFile"),sg(),tN(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),sg()(),Tl(1970,"p")(1971,"strong"),tN(1972,"Exemplo de uso"),sg(),tN(1973,":"),sg(),Tl(1974,"pre")(1975,"code",48),tN(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),sg()()()(),Tl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),tN(1981," debounceTime"),Gl(1982,"br"),sg()()(),Tl(1983,"td",21)(1984,"code",45),tN(1985,"number"),sg()(),Tl(1986,"td",24)(1987,"em")(1988,"strong"),tN(1989,"(opcional)"),sg()(),Tl(1990,"p"),tN(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Tl(1992,"code"),tN(1993,"p-filter-service"),sg(),tN(1994,")."),sg(),Tl(1995,"p")(1996,"strong"),tN(1997,"Componentes compat\xEDveis:"),sg(),Tl(1998,"code"),tN(1999,"po-combo"),sg(),tN(2e3,", "),Tl(2001,"code"),tN(2002,"po-multiselect"),sg(),tN(2003,"."),sg()()(),Tl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),tN(2008," decimalsLength"),Gl(2009,"br"),sg()()(),Tl(2010,"td",21)(2011,"code",45),tN(2012,"number"),sg()(),Tl(2013,"td",24)(2014,"em")(2015,"strong"),tN(2016,"(opcional)"),sg()(),Tl(2017,"p"),tN(2018,"Quantidade m\xE1xima de casas decimais."),sg(),Tl(2019,"blockquote")(2020,"p"),tN(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(2022,"code"),tN(2023,"type"),sg(),tN(2024," for "),Tl(2025,"em"),tN(2026,"currency"),sg(),tN(2027," ou "),Tl(2028,"em"),tN(2029,"decimal"),sg(),tN(2030,"."),sg()()()(),Tl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),tN(2035," directory"),Gl(2036,"br"),sg()()(),Tl(2037,"td",21)(2038,"code",29),tN(2039,"boolean"),sg()(),Tl(2040,"td",24)(2041,"em")(2042,"strong"),tN(2043,"(opcional)"),sg()(),Tl(2044,"p"),tN(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Tl(2046,"blockquote")(2047,"p"),tN(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Tl(2049,"blockquote")(2050,"p"),tN(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Tl(2052,"strong"),tN(2053,"Internet Explorer"),sg(),tN(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()(),Tl(2055,"p")(2056,"strong"),tN(2057,"Componente compat\xEDvel"),sg(),tN(2058,": "),Tl(2059,"code"),tN(2060,"po-upload"),sg()()()(),Tl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),tN(2065," disabled"),Gl(2066,"br"),sg()()(),Tl(2067,"td",21)(2068,"code",29),tN(2069,"boolean"),sg()(),Tl(2070,"td",24)(2071,"em")(2072,"strong"),tN(2073,"(opcional)"),sg()(),Tl(2074,"p"),tN(2075,"Desabilita o campo caso informar o valor "),Tl(2076,"em"),tN(2077,"true"),sg(),tN(2078,"."),sg()()(),Tl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),tN(2083," disabledInitFilter"),Gl(2084,"br"),sg()()(),Tl(2085,"td",21)(2086,"code",29),tN(2087,"boolean"),sg()(),Tl(2088,"td",24)(2089,"em")(2090,"strong"),tN(2091,"(opcional)"),sg()(),Tl(2092,"p"),tN(2093,"Desabilita o filtro inicial no servi\xE7o do "),Tl(2094,"code"),tN(2095,"po-combo"),sg(),tN(2096,", que \xE9 executado no primeiro clique no campo."),sg()()(),Tl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),tN(2101," disabledTabFilter"),Gl(2102,"br"),sg()()(),Tl(2103,"td",21)(2104,"code",29),tN(2105,"boolean"),sg()(),Tl(2106,"td",24)(2107,"em")(2108,"strong"),tN(2109,"(opcional)"),sg()(),Tl(2110,"p"),tN(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Tl(2112,"code"),tN(2113,"po-combo"),sg(),tN(2114,"."),sg()()(),Tl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),tN(2119," divider"),Gl(2120,"br"),sg()()(),Tl(2121,"td",21)(2122,"code",27),tN(2123,"string"),sg()(),Tl(2124,"td",24)(2125,"em")(2126,"strong"),tN(2127,"(opcional)"),sg()(),Tl(2128,"p"),tN(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Tl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),tN(2134," dragDrop"),Gl(2135,"br"),sg()()(),Tl(2136,"td",21)(2137,"code",29),tN(2138,"boolean"),sg()(),Tl(2139,"td",24)(2140,"em")(2141,"strong"),tN(2142,"(opcional)"),sg()(),Tl(2143,"p"),tN(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Tl(2145,"blockquote")(2146,"p"),tN(2147,"Recomendamos utilizar apenas um "),Tl(2148,"code"),tN(2149,"po-upload"),sg(),tN(2150," com esta funcionalidade por tela."),sg()(),Tl(2151,"p")(2152,"strong"),tN(2153,"Componente compat\xEDvel"),sg(),tN(2154,": "),Tl(2155,"code"),tN(2156,"po-upload"),sg()()()(),Tl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),tN(2161," dragDropHeight"),Gl(2162,"br"),sg()()(),Tl(2163,"td",21)(2164,"code",45),tN(2165,"number"),sg()(),Tl(2166,"td",24)(2167,"em")(2168,"strong"),tN(2169,"(opcional)"),sg()(),Tl(2170,"p"),tN(2171,"Define em "),Tl(2172,"em"),tN(2173,"pixels"),sg(),tN(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Tl(2175,"code"),tN(2176,"160px"),sg(),tN(2177,"."),sg(),Tl(2178,"blockquote")(2179,"p"),tN(2180,"Esta propriedade funciona somente se a propriedade "),Tl(2181,"code"),tN(2182,"p-drag-drop"),sg(),tN(2183," estiver habilitada."),sg()(),Tl(2184,"p")(2185,"strong"),tN(2186,"Componente compat\xEDvel"),sg(),tN(2187,": "),Tl(2188,"code"),tN(2189,"po-upload"),sg()()()(),Tl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),tN(2194," errorAsyncFunction"),Gl(2195,"br"),sg()()(),Tl(2196,"td",21)(2197,"code",50),tN(2198,"(value) => Observable<boolean>"),sg()(),Tl(2199,"td",24)(2200,"em")(2201,"strong"),tN(2202,"(opcional)"),sg()(),Tl(2203,"p"),tN(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(2205,"code"),tN(2206,"change"),sg(),tN(2207," ou "),Tl(2208,"code"),tN(2209,"change-model"),sg(),tN(2210,", dependendo do valor da propriedade "),Tl(2211,"code"),tN(2212,"triggerMode"),sg(),tN(2213,"."),sg(),Tl(2214,"blockquote")(2215,"p"),tN(2216,"Retorna "),Tl(2217,"code"),tN(2218,"Observable com o valor true"),sg(),tN(2219," para sinalizar o erro "),Tl(2220,"code"),tN(2221,"false"),sg(),tN(2222," para indicar que n\xE3o h\xE1 erro."),sg()(),Tl(2223,"p")(2224,"strong"),tN(2225,"Componente compat\xEDvel"),sg(),tN(2226,": "),Tl(2227,"code"),tN(2228,"po-datepicker"),sg()()()(),Tl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),tN(2233," errorAsyncProperties"),Gl(2234,"br"),sg()()(),Tl(2235,"td",21)(2236,"code",51),tN(2237,"ErrorAsyncProperties"),sg()(),Tl(2238,"td",24)(2239,"em")(2240,"strong"),tN(2241,"(opcional)"),sg()(),Tl(2242,"p"),tN(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),sg(),Tl(2244,"p")(2245,"strong"),tN(2246,"Componentes compat\xEDveis:"),sg(),Tl(2247,"code"),tN(2248,"po-input"),sg(),tN(2249,", "),Tl(2250,"code"),tN(2251,"po-number"),sg(),tN(2252,", "),Tl(2253,"code"),tN(2254,"po-decimal"),sg(),tN(2255,", "),Tl(2256,"code"),tN(2257,"po-password"),sg(),tN(2258,"."),sg()()(),Tl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),tN(2263," errorLimit"),Gl(2264,"br"),sg()()(),Tl(2265,"td",21)(2266,"code",29),tN(2267,"boolean"),sg()(),Tl(2268,"td",24)(2269,"em")(2270,"strong"),tN(2271,"(opcional)"),sg()(),Tl(2272,"p"),tN(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(2274,"blockquote")(2275,"p"),tN(2276,"Caso essa propriedade seja definida como "),Tl(2277,"code"),tN(2278,"true"),sg(),tN(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()(),Tl(2280,"p")(2281,"strong"),tN(2282,"Componentes compat\xEDveis:"),sg(),Tl(2283,"code"),tN(2284,"po-checkbox-group"),sg(),tN(2285,", "),Tl(2286,"code"),tN(2287,"po-combo"),sg(),tN(2288,", "),Tl(2289,"code"),tN(2290,"po-datepicker"),sg(),tN(2291,", "),Tl(2292,"code"),tN(2293,"po-datepicker-range"),sg(),tN(2294,", "),Tl(2295,"code"),tN(2296,"po-decimal"),sg(),tN(2297,", "),Tl(2298,"code"),tN(2299,"po-input"),sg(),tN(2300,", "),Tl(2301,"code"),tN(2302,"po-lookup"),sg(),tN(2303,", "),Tl(2304,"code"),tN(2305,"po-multiselect"),sg(),tN(2306,", "),Tl(2307,"code"),tN(2308,"po-number"),sg(),tN(2309,", "),Tl(2310,"code"),tN(2311,"po-password"),sg(),tN(2312,", "),Tl(2313,"code"),tN(2314,"po-radio-group"),sg(),tN(2315,", "),Tl(2316,"code"),tN(2317,"po-select"),sg(),tN(2318,`,
`),Tl(2319,"code"),tN(2320,"po-switch"),sg(),tN(2321,", "),Tl(2322,"code"),tN(2323,"po-textarea"),sg(),tN(2324,", "),Tl(2325,"code"),tN(2326,"po-timepicker"),sg(),tN(2327,"."),sg()()(),Tl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),tN(2332," errorMessage"),Gl(2333,"br"),sg()()(),Tl(2334,"td",21)(2335,"code",27),tN(2336,"string"),sg()(),Tl(2337,"td",24)(2338,"em")(2339,"strong"),tN(2340,"(opcional)"),sg()(),Tl(2341,"p"),tN(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),sg(),Tl(2343,"p"),tN(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),sg(),Tl(2345,"ul")(2346,"li"),tN(2347,"pattern;"),sg(),Tl(2348,"li"),tN(2349,"minValue;"),sg(),Tl(2350,"li"),tN(2351,"maxValue;"),sg(),Tl(2352,"li"),tN(2353,"required;"),sg()(),Tl(2354,"blockquote")(2355,"p"),tN(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Tl(2357,"code"),tN(2358,"po-datepicker"),sg(),tN(2359,", "),Tl(2360,"code"),tN(2361,"po-input"),sg(),tN(2362,", "),Tl(2363,"code"),tN(2364,"po-number"),sg(),tN(2365,", "),Tl(2366,"code"),tN(2367,"po-decimal"),sg(),tN(2368,", "),Tl(2369,"code"),tN(2370,"po-password"),sg(),tN(2371,", "),Tl(2372,"code"),tN(2373,"po-timepicker"),sg(),tN(2374,`, \xE9 necess\xE1rio que a propriedade
`),Tl(2375,"code"),tN(2376,"requiredFieldErrorMessage"),sg(),tN(2377," esteja como "),Tl(2378,"code"),tN(2379,"true"),sg(),tN(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Tl(2381,"code"),tN(2382,"po-datepicker-range"),sg(),tN(2383,", "),Tl(2384,"code"),tN(2385,"po-select"),sg(),tN(2386,", "),Tl(2387,"code"),tN(2388,"po-checkbox-group"),sg(),tN(2389,", "),Tl(2390,"code"),tN(2391,"po-radio-group"),sg(),tN(2392,", "),Tl(2393,"code"),tN(2394,"po-multiselect"),sg(),tN(2395,", "),Tl(2396,"code"),tN(2397,"po-combo"),sg(),tN(2398,`,
`),Tl(2399,"code"),tN(2400,"po-lookup"),sg(),tN(2401," e "),Tl(2402,"code"),tN(2403,"po-textarea"),sg(),tN(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Tl(2405,"code"),tN(2406,"requiredFieldErrorMessage"),sg(),tN(2407,"."),sg()(),Tl(2408,"p")(2409,"strong"),tN(2410,"Componentes compat\xEDveis:"),sg(),Tl(2411,"code"),tN(2412,"po-checkbox-group"),sg(),tN(2413,", "),Tl(2414,"code"),tN(2415,"po-combo"),sg(),tN(2416,", "),Tl(2417,"code"),tN(2418,"po-datepicker"),sg(),tN(2419,", "),Tl(2420,"code"),tN(2421,"po-datepicker-range"),sg(),tN(2422,", "),Tl(2423,"code"),tN(2424,"po-decimal"),sg(),tN(2425,", "),Tl(2426,"code"),tN(2427,"po-input"),sg(),tN(2428,", "),Tl(2429,"code"),tN(2430,"po-lookup"),sg(),tN(2431,", "),Tl(2432,"code"),tN(2433,"po-multiselect"),sg(),tN(2434,", "),Tl(2435,"code"),tN(2436,"po-number"),sg(),tN(2437,", "),Tl(2438,"code"),tN(2439,"po-password"),sg(),tN(2440,", "),Tl(2441,"code"),tN(2442,"po-radio-group"),sg(),tN(2443,", "),Tl(2444,"code"),tN(2445,"po-select"),sg(),tN(2446,`,
`),Tl(2447,"code"),tN(2448,"po-switch"),sg(),tN(2449,", "),Tl(2450,"code"),tN(2451,"po-textarea"),sg(),tN(2452,", "),Tl(2453,"code"),tN(2454,"po-timepicker"),sg(),tN(2455,"."),sg()()(),Tl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),tN(2460," fieldLabel"),Gl(2461,"br"),sg()()(),Tl(2462,"td",21)(2463,"code",27),tN(2464,"string"),sg()(),Tl(2465,"td",24)(2466,"em")(2467,"strong"),tN(2468,"(opcional)"),sg()(),Tl(2469,"p"),tN(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Tl(2471,"p"),tN(2472,"O valor padr\xE3o \xE9: "),Tl(2473,"code"),tN(2474,"label"),sg(),tN(2475,"."),sg(),Tl(2476,"blockquote")(2477,"p"),tN(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(2479,"code"),tN(2480,"options"),sg(),tN(2481,", "),Tl(2482,"code"),tN(2483,"optionsService"),sg(),tN(2484," e "),Tl(2485,"code"),tN(2486,"searchService"),sg(),tN(2487,"."),sg()()()(),Tl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),tN(2492," fieldValue"),Gl(2493,"br"),sg()()(),Tl(2494,"td",21)(2495,"code",27),tN(2496,"string"),sg()(),Tl(2497,"td",24)(2498,"em")(2499,"strong"),tN(2500,"(opcional)"),sg()(),Tl(2501,"p"),tN(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Tl(2503,"p"),tN(2504,"O valor padr\xE3o \xE9: "),Tl(2505,"code"),tN(2506,"value"),sg(),tN(2507,"."),sg(),Tl(2508,"blockquote")(2509,"p"),tN(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(2511,"code"),tN(2512,"options"),sg(),tN(2513,", "),Tl(2514,"code"),tN(2515,"optionsService"),sg(),tN(2516," e "),Tl(2517,"code"),tN(2518,"searchService"),sg(),tN(2519,"."),sg()()()(),Tl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),tN(2524," filterMinlength"),Gl(2525,"br"),sg()()(),Tl(2526,"td",21)(2527,"code",45),tN(2528,"number"),sg()(),Tl(2529,"td",24)(2530,"em")(2531,"strong"),tN(2532,"(opcional)"),sg()(),Tl(2533,"p"),tN(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Tl(2535,"code"),tN(2536,"po-combo"),sg(),tN(2537,"."),sg()()(),Tl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),tN(2542," filterMode"),Gl(2543,"br"),sg()()(),Tl(2544,"td",21)(2545,"code",52),tN(2546,"PoMultiselectFilterMode"),sg()(),Tl(2547,"td",24)(2548,"em")(2549,"strong"),tN(2550,"(opcional)"),sg()(),Tl(2551,"p"),tN(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Tl(2553,"code"),tN(2554,"startsWith"),sg(),tN(2555,", "),Tl(2556,"code"),tN(2557,"contains"),sg(),tN(2558," ou "),Tl(2559,"code"),tN(2560,"endsWith"),sg(),tN(2561,"."),sg(),Tl(2562,"blockquote")(2563,"p"),tN(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),sg()(),Tl(2565,"p")(2566,"strong"),tN(2567,"Componente compat\xEDvel:"),sg(),Tl(2568,"code"),tN(2569,"po-multiselect"),sg(),tN(2570,"."),sg()()(),Tl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),tN(2575," forceBooleanComponentType"),Gl(2576,"br"),sg()()(),Tl(2577,"td",21)(2578,"code",53),tN(2579,"ForceBooleanComponentEnum"),sg()(),Tl(2580,"td",24)(2581,"em")(2582,"strong"),tN(2583,"(opcional)"),sg()(),Tl(2584,"p"),tN(2585,"Valores aceitos:"),sg(),Tl(2586,"ul")(2587,"li"),tN(2588,"ForceBooleanComponentEnum.switch"),sg(),Tl(2589,"li"),tN(2590,"ForceBooleanComponentEnum.checkbox"),sg()()()(),Tl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),tN(2595," forceOptionsComponentType"),Gl(2596,"br"),sg()()(),Tl(2597,"td",21)(2598,"code",54),tN(2599,"ForceOptionComponentEnum"),sg()(),Tl(2600,"td",24)(2601,"em")(2602,"strong"),tN(2603,"(opcional)"),sg()(),Tl(2604,"p"),tN(2605,"pode ser utilizada em conjunto com a propriedade "),Tl(2606,"code"),tN(2607,"options"),sg(),tN(2608," for\xE7ando o componente a renderizar um "),Tl(2609,"code"),tN(2610,"po-select"),sg(),tN(2611," ou "),Tl(2612,"code"),tN(2613,"po-radio-group"),sg(),tN(2614,"."),sg(),Tl(2615,"p"),tN(2616,"Valores aceitos:"),sg(),Tl(2617,"ul")(2618,"li"),tN(2619,"ForceOptionComponentEnum.radioGroup"),sg(),Tl(2620,"li"),tN(2621,"ForceOptionComponentEnum.select"),sg()(),Tl(2622,"blockquote")(2623,"p"),tN(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Tl(2625,"code"),tN(2626,"optionsMulti"),sg(),tN(2627," e "),Tl(2628,"code"),tN(2629,"optionsService"),sg(),tN(2630,"."),sg()()()(),Tl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),tN(2635," formField"),Gl(2636,"br"),sg()()(),Tl(2637,"td",21)(2638,"code",27),tN(2639,"string"),sg()(),Tl(2640,"td",24)(2641,"em")(2642,"strong"),tN(2643,"(opcional)"),sg()(),Tl(2644,"p"),tN(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Tl(2646,"code"),tN(2647,"url"),sg(),tN(2648,"."),sg(),Tl(2649,"blockquote")(2650,"p"),tN(2651,"O valor default \xE9 "),Tl(2652,"code"),tN(2653,"files"),sg()()(),Tl(2654,"p")(2655,"strong"),tN(2656,"Componente compat\xEDvel"),sg(),tN(2657,": "),Tl(2658,"code"),tN(2659,"po-upload"),sg()()()(),Tl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),tN(2664," format"),Gl(2665,"br"),sg()()(),Tl(2666,"td",21)(2667,"code",27),tN(2668,"string "),sg(),Tl(2669,"code",32),tN(2670," Array<string>"),sg()(),Tl(2671,"td",24)(2672,"em")(2673,"strong"),tN(2674,"(opcional)"),sg()(),Tl(2675,"p"),tN(2676,"Formato de exibi\xE7\xE3o no campo."),sg(),Tl(2677,"p"),tN(2678,"Ao utilizar esta propriedade com o "),Tl(2679,"code"),tN(2680,"type"),sg(),Tl(2681,"em"),tN(2682,"PoDynamicFieldType.Date"),sg(),tN(2683," ou "),Tl(2684,"em"),tN(2685,"PoDynamicFieldType.DateTime"),sg(),tN(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),sg(),Tl(2687,"p"),tN(2688,"Valores v\xE1lidos:"),sg(),Tl(2689,"ul")(2690,"li"),tN(2691,"dd/mm/yyyy"),sg(),Tl(2692,"li"),tN(2693,"mm/dd/yyyy"),sg(),Tl(2694,"li"),tN(2695,"yyyy/mm/dd"),sg()(),Tl(2696,"p"),tN(2697,"Ao utilizar com o "),Tl(2698,"code"),tN(2699,"type"),sg(),Tl(2700,"em"),tN(2701,"PoDynamicFieldType.Time"),sg(),tN(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),sg(),Tl(2703,"p"),tN(2704,"Valores v\xE1lidos:"),sg(),Tl(2705,"ul")(2706,"li")(2707,"code"),tN(2708,"24"),sg(),tN(2709,": formato de 24 horas (padr\xE3o)"),sg(),Tl(2710,"li")(2711,"code"),tN(2712,"12"),sg(),tN(2713,": formato de 12 horas com indicador AM/PM"),sg()(),Tl(2714,"p"),tN(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Tl(2716,"code"),tN(2717,"searchService"),sg(),tN(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),sg(),Tl(2719,"p")(2720,"strong"),tN(2721,"Componentes compat\xEDveis:"),sg(),Tl(2722,"code"),tN(2723,"po-datepicker"),sg(),tN(2724,", "),Tl(2725,"code"),tN(2726,"po-timepicker"),sg(),tN(2727,", "),Tl(2728,"code"),tN(2729,"po-lookup"),sg(),tN(2730,"."),sg()()(),Tl(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),tN(2735," formatModel"),Gl(2736,"br"),sg()()(),Tl(2737,"td",21)(2738,"code",29),tN(2739,"boolean"),sg()(),Tl(2740,"td",24)(2741,"em")(2742,"strong"),tN(2743,"(opcional)"),sg()(),Tl(2744,"p"),tN(2745,"Indica se o "),Tl(2746,"code"),tN(2747,"model"),sg(),tN(2748," receber\xE1 o valor formatado pelas propriedades "),Tl(2749,"code"),tN(2750,"p-label-on"),sg(),tN(2751," e "),Tl(2752,"code"),tN(2753,"p-label-off"),sg(),tN(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Tl(2755,"p"),tN(2756,"O valor padr\xE3o \xE9: "),Tl(2757,"code"),tN(2758,"false"),sg(),tN(2759,"."),sg(),Tl(2760,"blockquote")(2761,"p"),tN(2762,"Esta propriedade est\xE1 disponivel apenas para o "),Tl(2763,"code"),tN(2764,"swicth"),sg(),tN(2765,"."),sg()()()(),Tl(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),tN(2770," formatTime"),Gl(2771,"br"),sg()()(),Tl(2772,"td",21)(2773,"code",27),tN(2774,"string"),sg()(),Tl(2775,"td",24)(2776,"em")(2777,"strong"),tN(2778,"(opcional)"),sg()(),Tl(2779,"p"),tN(2780,"Define o formato de exibi\xE7\xE3o do timer ("),Tl(2781,"code"),tN(2782,"'12'"),sg(),tN(2783," ou "),Tl(2784,"code"),tN(2785,"'24'"),sg(),tN(2786,")."),sg(),Tl(2787,"p")(2788,"strong"),tN(2789,"Componente compat\xEDvel:"),sg(),Tl(2790,"code"),tN(2791,"po-datetimepicker"),sg(),tN(2792,", "),Tl(2793,"code"),tN(2794,"po-timepicker"),sg()()()(),Tl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),tN(2799," gridColumns"),Gl(2800,"br"),sg()()(),Tl(2801,"td",21)(2802,"code",45),tN(2803,"number"),sg()(),Tl(2804,"td",24)(2805,"em")(2806,"strong"),tN(2807,"(opcional)"),sg()(),Tl(2808,"p"),tN(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Tl(2810,"p"),tN(2811,"Deve ser usado o sistema de "),Tl(2812,"strong"),tN(2813,"grid"),sg(),tN(2814," do PO (1 ... 12 colunas)."),sg(),Tl(2815,"blockquote")(2816,"p"),tN(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),tN(2822," gridLgColumns"),Gl(2823,"br"),sg()()(),Tl(2824,"td",21)(2825,"code",45),tN(2826,"number"),sg()(),Tl(2827,"td",24)(2828,"em")(2829,"strong"),tN(2830,"(opcional)"),sg()(),Tl(2831,"p"),tN(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(2833,"p"),tN(2834,"Deve ser usado o sistema de "),Tl(2835,"strong"),tN(2836,"grid"),sg(),tN(2837," do PO (1 ... 12 colunas)."),sg(),Tl(2838,"blockquote")(2839,"p"),tN(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2841,"code"),tN(2842,"gridColumns"),sg(),tN(2843,"."),sg()()()(),Tl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),tN(2848," gridLgPull"),Gl(2849,"br"),sg()()(),Tl(2850,"td",21)(2851,"code",45),tN(2852,"number"),sg()(),Tl(2853,"td",24)(2854,"em")(2855,"strong"),tN(2856,"(opcional)"),sg()(),Tl(2857,"p"),tN(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Tl(2859,"p"),tN(2860,"Deve ser usado o sistema de "),Tl(2861,"strong"),tN(2862,"grid"),sg(),tN(2863," do PO (1 ... 11 colunas)."),sg(),Tl(2864,"blockquote")(2865,"p"),tN(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2867,"code"),tN(2868,"gridColumns"),sg(),tN(2869,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),tN(2874," gridMdColumns"),Gl(2875,"br"),sg()()(),Tl(2876,"td",21)(2877,"code",45),tN(2878,"number"),sg()(),Tl(2879,"td",24)(2880,"em")(2881,"strong"),tN(2882,"(opcional)"),sg()(),Tl(2883,"p"),tN(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(2885,"p"),tN(2886,"Deve ser usado o sistema de "),Tl(2887,"strong"),tN(2888,"grid"),sg(),tN(2889," do PO (1 ... 12 colunas)."),sg(),Tl(2890,"blockquote")(2891,"p"),tN(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2893,"code"),tN(2894,"gridColumns"),sg(),tN(2895,"."),sg()()()(),Tl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),tN(2900," gridMdPull"),Gl(2901,"br"),sg()()(),Tl(2902,"td",21)(2903,"code",45),tN(2904,"number"),sg()(),Tl(2905,"td",24)(2906,"em")(2907,"strong"),tN(2908,"(opcional)"),sg()(),Tl(2909,"p"),tN(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Tl(2911,"p"),tN(2912,"Deve ser usado o sistema de "),Tl(2913,"strong"),tN(2914,"grid"),sg(),tN(2915," do PO (1 ... 11 colunas)."),sg(),Tl(2916,"blockquote")(2917,"p"),tN(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2919,"code"),tN(2920,"gridColumns"),sg(),tN(2921,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),tN(2926," gridSmColumns"),Gl(2927,"br"),sg()()(),Tl(2928,"td",21)(2929,"code",45),tN(2930,"number"),sg()(),Tl(2931,"td",24)(2932,"em")(2933,"strong"),tN(2934,"(opcional)"),sg()(),Tl(2935,"p"),tN(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(2937,"p"),tN(2938,"Deve ser usado o sistema de "),Tl(2939,"strong"),tN(2940,"grid"),sg(),tN(2941," do PO (1 ... 12 colunas)."),sg(),Tl(2942,"blockquote")(2943,"p"),tN(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2945,"code"),tN(2946,"gridColumns"),sg(),tN(2947,"."),sg()()()(),Tl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),tN(2952," gridSmPull"),Gl(2953,"br"),sg()()(),Tl(2954,"td",21)(2955,"code",45),tN(2956,"number"),sg()(),Tl(2957,"td",24)(2958,"em")(2959,"strong"),tN(2960,"(opcional)"),sg()(),Tl(2961,"p"),tN(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Tl(2963,"p"),tN(2964,"Deve ser usado o sistema de "),Tl(2965,"strong"),tN(2966,"grid"),sg(),tN(2967," do PO (1 ... 11 colunas)."),sg(),Tl(2968,"blockquote")(2969,"p"),tN(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2971,"code"),tN(2972,"gridColumns"),sg(),tN(2973,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),tN(2978," gridXlColumns"),Gl(2979,"br"),sg()()(),Tl(2980,"td",21)(2981,"code",45),tN(2982,"number"),sg()(),Tl(2983,"td",24)(2984,"em")(2985,"strong"),tN(2986,"(opcional)"),sg()(),Tl(2987,"p"),tN(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(2989,"p"),tN(2990,"Deve ser usado o sistema de "),Tl(2991,"strong"),tN(2992,"grid"),sg(),tN(2993," do PO (1 ... 12 colunas)."),sg(),Tl(2994,"blockquote")(2995,"p"),tN(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2997,"code"),tN(2998,"gridColumns"),sg(),tN(2999,"."),sg()()()(),Tl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),tN(3004," gridXlPull"),Gl(3005,"br"),sg()()(),Tl(3006,"td",21)(3007,"code",45),tN(3008,"number"),sg()(),Tl(3009,"td",24)(3010,"em")(3011,"strong"),tN(3012,"(opcional)"),sg()(),Tl(3013,"p"),tN(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Tl(3015,"p"),tN(3016,"Deve ser usado o sistema de "),Tl(3017,"strong"),tN(3018,"grid"),sg(),tN(3019," do PO (1 ... 11 colunas)."),sg(),Tl(3020,"blockquote")(3021,"p"),tN(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(3023,"code"),tN(3024,"gridColumns"),sg(),tN(3025,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),tN(3030," headers"),Gl(3031,"br"),sg()()(),Tl(3032,"td",21)(3033,"code",55),tN(3034,"{ [name: string]: string "),sg(),Tl(3035,"code",56),tN(3036,` Array<string>;
}`),sg()(),Tl(3037,"td",24)(3038,"em")(3039,"strong"),tN(3040,"(opcional)"),sg()(),Tl(3041,"p"),tN(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg(),Tl(3043,"p")(3044,"strong"),tN(3045,"Componente compat\xEDvel"),sg(),tN(3046,": "),Tl(3047,"code"),tN(3048,"po-upload"),sg()()()(),Tl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),tN(3053," help"),Gl(3054,"br"),sg()()(),Tl(3055,"td",21)(3056,"code",27),tN(3057,"string"),sg()(),Tl(3058,"td",24)(3059,"em")(3060,"strong"),tN(3061,"(opcional)"),sg()(),Tl(3062,"p"),tN(3063,"Texto de ajuda."),sg()()(),Tl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),tN(3068," helper"),Gl(3069,"br"),sg()()(),Tl(3070,"td",21)(3071,"code",27),tN(3072,"string "),sg(),Tl(3073,"code",38),tN(3074," PoHelperOptions"),sg()(),Tl(3075,"td",24)(3076,"em")(3077,"strong"),tN(3078,"(opcional)"),sg()(),Tl(3079,"p"),tN(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),sg()()(),Tl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),tN(3085," hideLabelStatus"),Gl(3086,"br"),sg()()(),Tl(3087,"td",21)(3088,"code",29),tN(3089,"boolean"),sg()(),Tl(3090,"td",24)(3091,"em")(3092,"strong"),tN(3093,"(opcional)"),sg()(),Tl(3094,"p"),tN(3095,"Indica se o status do "),Tl(3096,"code"),tN(3097,"model"),sg(),tN(3098," ser\xE1 escondido visualmente ao lado do switch"),sg()()(),Tl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),tN(3103," hidePasswordPeek"),Gl(3104,"br"),sg()()(),Tl(3105,"td",21)(3106,"code",29),tN(3107,"boolean"),sg()(),Tl(3108,"td",24)(3109,"em")(3110,"strong"),tN(3111,"(opcional)"),sg()(),Tl(3112,"p"),tN(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Tl(3114,"code"),tN(3115,"po-password"),sg(),tN(3116,"."),sg()()(),Tl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),tN(3121," hideRestrictionsInfo"),Gl(3122,"br"),sg()()(),Tl(3123,"td",21)(3124,"code",29),tN(3125,"boolean"),sg()(),Tl(3126,"td",24)(3127,"em")(3128,"strong"),tN(3129,"(opcional)"),sg()(),Tl(3130,"p"),tN(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg(),Tl(3132,"p")(3133,"strong"),tN(3134,"Componente compat\xEDvel"),sg(),tN(3135,": "),Tl(3136,"code"),tN(3137,"po-upload"),sg()()()(),Tl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),tN(3142," hideSearch"),Gl(3143,"br"),sg()()(),Tl(3144,"td",21)(3145,"code",29),tN(3146,"boolean"),sg()(),Tl(3147,"td",24)(3148,"em")(3149,"strong"),tN(3150,"(opcional)"),sg()(),Tl(3151,"p"),tN(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Tl(3153,"code"),tN(3154,"po-multiselect"),sg(),tN(3155,"."),sg()()(),Tl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),tN(3160," hideSelectAll"),Gl(3161,"br"),sg()()(),Tl(3162,"td",21)(3163,"code",29),tN(3164,"boolean"),sg()(),Tl(3165,"td",24)(3166,"em")(3167,"strong"),tN(3168,"(opcional)"),sg()(),Tl(3169,"p"),tN(3170,'Indica se o campo "Selecionar todos" do '),Tl(3171,"code"),tN(3172,"po-multiselect"),sg(),tN(3173," ser\xE1 escondido."),sg()()(),Tl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),tN(3178," hideSelectButton"),Gl(3179,"br"),sg()()(),Tl(3180,"td",21)(3181,"code",29),tN(3182,"boolean"),sg()(),Tl(3183,"td",24)(3184,"em")(3185,"strong"),tN(3186,"(opcional)"),sg()(),Tl(3187,"p"),tN(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Tl(3189,"blockquote")(3190,"p"),tN(3191,"Caso o valor definido seja "),Tl(3192,"code"),tN(3193,"true"),sg(),tN(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(3195,"code"),tN(3196,"selectFiles()"),sg(),tN(3197," para sele\xE7\xE3o de arquivos."),sg()(),Tl(3198,"p")(3199,"strong"),tN(3200,"Componente compat\xEDvel"),sg(),tN(3201,": "),Tl(3202,"code"),tN(3203,"po-upload"),sg()()()(),Tl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),tN(3208," hideSendButton"),Gl(3209,"br"),sg()()(),Tl(3210,"td",21)(3211,"code",29),tN(3212,"boolean"),sg()(),Tl(3213,"td",24)(3214,"em")(3215,"strong"),tN(3216,"(opcional)"),sg()(),Tl(3217,"p"),tN(3218,"Omite o bot\xE3o de envio de arquivos."),sg(),Tl(3219,"blockquote")(3220,"p"),tN(3221,"Caso o valor definido seja "),Tl(3222,"code"),tN(3223,"true"),sg(),tN(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(3225,"code"),tN(3226,"sendFiles()"),sg(),tN(3227," para envio do(s) arquivo(s) selecionado(s)."),sg()(),Tl(3228,"p")(3229,"strong"),tN(3230,"Componente compat\xEDvel"),sg(),tN(3231,": "),Tl(3232,"code"),tN(3233,"po-upload"),sg()()()(),Tl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),tN(3238," icon"),Gl(3239,"br"),sg()()(),Tl(3240,"td",21)(3241,"code",27),tN(3242,"string "),sg(),Tl(3243,"code",57),tN(3244," TemplateRef<void>"),sg()(),Tl(3245,"td",24)(3246,"em")(3247,"strong"),tN(3248,"(opcional)"),sg()(),Tl(3249,"p"),tN(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(3251,"blockquote")(3252,"p"),tN(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),sg()(),Tl(3254,"ul")(3255,"li"),tN(3256,"Input;"),sg(),Tl(3257,"li"),tN(3258,"Number;"),sg(),Tl(3259,"li"),tN(3260,"Decimal;"),sg(),Tl(3261,"li"),tN(3262,"Combo;"),sg(),Tl(3263,"li"),tN(3264,"Password;"),sg()(),Tl(3265,"blockquote")(3266,"p"),tN(3267,"Veja a disponibilidade de \xEDcones em "),Tl(3268,"a",58),tN(3269,"biblioteca de \xEDcones"),sg(),tN(3270,"."),sg()()()(),Tl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),tN(3275," infiniteScroll"),Gl(3276,"br"),sg()()(),Tl(3277,"td",21)(3278,"code",29),tN(3279,"boolean"),sg()(),Tl(3280,"td",24)(3281,"em")(3282,"strong"),tN(3283,"(opcional)"),sg()(),Tl(3284,"p"),tN(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg(),Tl(3286,"p")(3287,"strong"),tN(3288,"Componentes compat\xEDveis:"),sg(),Tl(3289,"code"),tN(3290,"po-combo"),sg(),tN(3291,", "),Tl(3292,"code"),tN(3293,"po-lookup"),sg(),tN(3294,"."),sg()()(),Tl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),tN(3299," infiniteScrollDistance"),Gl(3300,"br"),sg()()(),Tl(3301,"td",21)(3302,"code",45),tN(3303,"number"),sg()(),Tl(3304,"td",24)(3305,"em")(3306,"strong"),tN(3307,"(opcional)"),sg()(),Tl(3308,"p"),tN(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Tl(3310,"strong"),tN(3311,"Exemplos"),sg(),Tl(3312,"code"),tN(3313,"{ infiniteScrollDistance: 80 }"),sg(),tN(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),sg(),Tl(3315,"p")(3316,"strong"),tN(3317,"Componente compat\xEDvel:"),sg(),Tl(3318,"code"),tN(3319,"po-combo"),sg(),tN(3320,"."),sg()()(),Tl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),tN(3325," invalidValue"),Gl(3326,"br"),sg()()(),Tl(3327,"td",21)(3328,"code",29),tN(3329,"boolean"),sg()(),Tl(3330,"td",24)(3331,"em")(3332,"strong"),tN(3333,"(opcional)"),sg()(),Tl(3334,"p"),tN(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Tl(3336,"code"),tN(3337,"p-field-error-message"),sg(),tN(3338,"."),sg(),Tl(3339,"blockquote")(3340,"p"),tN(3341,"Caso essa propriedade seja definida como "),Tl(3342,"code"),tN(3343,"true"),sg(),tN(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()(),Tl(3345,"p")(3346,"strong"),tN(3347,"Componente compat\xEDvel"),sg(),tN(3348,": "),Tl(3349,"code"),tN(3350,"po-switch"),sg()()()(),Tl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),tN(3355," isoFormat"),Gl(3356,"br"),sg()()(),Tl(3357,"td",21)(3358,"code",59),tN(3359,"PoDatepickerIsoFormat"),sg()(),Tl(3360,"td",24)(3361,"em")(3362,"strong"),tN(3363,"(opcional)"),sg()(),Tl(3364,"p"),tN(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),sg(),Tl(3366,"blockquote")(3367,"p"),tN(3368,"Veja os valores v\xE1lidos no "),Tl(3369,"code"),tN(3370,"PoDatepickerIsoFormat"),sg(),tN(3371,"."),sg()(),Tl(3372,"p")(3373,"strong"),tN(3374,"Componente compat\xEDvel:"),sg(),Tl(3375,"code"),tN(3376,"po-datepicker"),sg()()()(),Tl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),tN(3381," key"),Gl(3382,"br"),sg()()(),Tl(3383,"td",21)(3384,"code",29),tN(3385,"boolean"),sg()(),Tl(3386,"td",24)(3387,"em")(3388,"strong"),tN(3389,"(opcional)"),sg()(),Tl(3390,"p"),tN(3391,"Identificador"),sg()()(),Tl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),tN(3396," keydown"),Gl(3397,"br"),sg()()(),Tl(3398,"td",21)(3399,"code",44),tN(3400,"Function"),sg()(),Tl(3401,"td",24)(3402,"em")(3403,"strong"),tN(3404,"(opcional)"),sg()(),Tl(3405,"p"),tN(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(3407,"code"),tN(3408,"KeyboardEvent"),sg(),tN(3409," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),tN(3414," label"),Gl(3415,"br"),sg()()(),Tl(3416,"td",21)(3417,"code",27),tN(3418,"string"),sg()(),Tl(3419,"td",24)(3420,"em")(3421,"strong"),tN(3422,"(opcional)"),sg()(),Tl(3423,"p"),tN(3424,"R\xF3tulo do campo exibido."),sg(),Tl(3425,"p"),tN(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(3427,"code"),tN(3428,"label"),sg(),tN(3429," o valor da propriedade "),Tl(3430,"code"),tN(3431,"property"),sg(),tN(3432," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),tN(3437," labelPosition"),Gl(3438,"br"),sg()()(),Tl(3439,"td",21)(3440,"code",60),tN(3441,"PoSwitchLabelPosition"),sg()(),Tl(3442,"td",24)(3443,"em")(3444,"strong"),tN(3445,"(opcional)"),sg()(),Tl(3446,"p"),tN(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),sg(),Tl(3448,"blockquote")(3449,"p"),tN(3450,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Tl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),tN(3455," listboxControlPosition"),Gl(3456,"br"),sg()()(),Tl(3457,"td",21)(3458,"code",61),tN(3459,"'top' "),sg(),Tl(3460,"code",62),tN(3461," 'bottom'"),sg()(),Tl(3462,"td",24)(3463,"em")(3464,"strong"),tN(3465,"(opcional)"),sg()(),Tl(3466,"p"),tN(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Tl(3468,"code"),tN(3469,"listbox"),sg(),tN(3470," em rela\xE7\xE3o ao campo ("),Tl(3471,"code"),tN(3472,"top"),sg(),tN(3473," ou "),Tl(3474,"code"),tN(3475,"bottom"),sg(),tN(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg(),Tl(3477,"p")(3478,"strong"),tN(3479,"Componentes compat\xEDveis:"),sg(),Tl(3480,"code"),tN(3481,"po-multiselect"),sg(),tN(3482,", "),Tl(3483,"code"),tN(3484,"po-combo"),sg(),tN(3485,"."),sg()()(),Tl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),tN(3490," literals"),Gl(3491,"br"),sg()()(),Tl(3492,"td",21)(3493,"code",36),tN(3494,"PoLookupLiterals "),sg(),Tl(3495,"code",63),tN(3496," PoMultiselectLiterals "),sg(),Tl(3497,"code",64),tN(3498," PoComboLiterals "),sg(),Tl(3499,"code",65),tN(3500," PoDatepickerRangeLiterals "),sg(),Tl(3501,"code",66),tN(3502," PoUploadLiterals"),sg()(),Tl(3503,"td",24)(3504,"em")(3505,"strong"),tN(3506,"(opcional)"),sg()(),Tl(3507,"p"),tN(3508,"Objeto com as literais usadas para os seguintes componentes: "),Tl(3509,"code"),tN(3510,"po-lookup"),sg(),tN(3511,", "),Tl(3512,"code"),tN(3513,"po-multiselect"),sg(),tN(3514,", "),Tl(3515,"code"),tN(3516,"po-combo"),sg(),tN(3517," e "),Tl(3518,"code"),tN(3519,"po-datepicker-range"),sg(),tN(3520,"."),sg(),Tl(3521,"blockquote")(3522,"p"),tN(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),sg()(),Tl(3524,"p")(3525,"strong"),tN(3526,"Componentes compat\xEDveis:"),sg(),Tl(3527,"code"),tN(3528,"po-lookup"),sg(),tN(3529,", "),Tl(3530,"code"),tN(3531,"po-multiselect"),sg(),tN(3532,", "),Tl(3533,"code"),tN(3534,"po-combo"),sg(),tN(3535,", "),Tl(3536,"code"),tN(3537,"po-datepicker-range"),sg()()()(),Tl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),tN(3542," loading"),Gl(3543,"br"),sg()()(),Tl(3544,"td",21)(3545,"code",29),tN(3546,"boolean"),sg()(),Tl(3547,"td",24)(3548,"em")(3549,"strong"),tN(3550,"(opcional)"),sg()(),Tl(3551,"p"),tN(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),sg(),Tl(3553,"blockquote")(3554,"p"),tN(3555,"Por padr\xE3o \xE9 "),Tl(3556,"code"),tN(3557,"false"),sg(),tN(3558,"."),sg()(),Tl(3559,"p")(3560,"strong"),tN(3561,"Componentes compat\xEDveis:"),sg(),Tl(3562,"code"),tN(3563,"po-datepicker"),sg(),tN(3564,", "),Tl(3565,"code"),tN(3566,"po-datepicker-range"),sg(),tN(3567,", "),Tl(3568,"code"),tN(3569,"po-number"),sg(),tN(3570,", "),Tl(3571,"code"),tN(3572,"po-decimal"),sg(),tN(3573,`,
`),Tl(3574,"code"),tN(3575,"po-input"),sg(),tN(3576,", "),Tl(3577,"code"),tN(3578,"po-select"),sg(),tN(3579,", "),Tl(3580,"code"),tN(3581,"po-switch"),sg(),tN(3582,", "),Tl(3583,"code"),tN(3584,"po-combo"),sg(),tN(3585,", "),Tl(3586,"code"),tN(3587,"po-lookup"),sg(),tN(3588,", "),Tl(3589,"code"),tN(3590,"po-multiselect"),sg(),tN(3591,`,
`),Tl(3592,"code"),tN(3593,"po-textarea"),sg(),tN(3594,", "),Tl(3595,"code"),tN(3596,"po-password"),sg(),tN(3597,", "),Tl(3598,"code"),tN(3599,"po-upload"),sg(),tN(3600,"."),sg()()(),Tl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),tN(3605," locale"),Gl(3606,"br"),sg()()(),Tl(3607,"td",21)(3608,"code",27),tN(3609,"string"),sg()(),Tl(3610,"td",24)(3611,"em")(3612,"strong"),tN(3613,"(opcional)"),sg()(),Tl(3614,"p"),tN(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Tl(3616,"a",67)(3617,"code"),tN(3618,"I18n"),sg()()(),Tl(3619,"p"),tN(3620,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(3621,"pre")(3622,"code"),tN(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),sg()(),Tl(3624,"blockquote")(3625,"p"),tN(3626,"Para ver quais linguagens suportadas acesse "),Tl(3627,"a",67)(3628,"code"),tN(3629,"I18n"),sg()()()(),Tl(3630,"p")(3631,"strong"),tN(3632,"Componentes compat\xEDveis:"),sg(),Tl(3633,"code"),tN(3634,"po-datepicker"),sg(),tN(3635,", "),Tl(3636,"code"),tN(3637,"po-decimal"),sg(),tN(3638,", "),Tl(3639,"code"),tN(3640,"po-timepicker"),sg(),tN(3641,"."),sg()()(),Tl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),tN(3646," mask"),Gl(3647,"br"),sg()()(),Tl(3648,"td",21)(3649,"code",27),tN(3650,"string"),sg()(),Tl(3651,"td",24)(3652,"em")(3653,"strong"),tN(3654,"(opcional)"),sg()(),Tl(3655,"p"),tN(3656,"M\xE1scara para o campo."),sg(),Tl(3657,"p")(3658,"strong"),tN(3659,"Componente compat\xEDvel:"),sg(),Tl(3660,"code"),tN(3661,"po-input"),sg(),tN(3662,"."),sg(),Tl(3663,"blockquote")(3664,"p"),tN(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(3666,"code"),tN(3667,"type: time"),sg(),tN(3668,"."),sg()()()(),Tl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),tN(3673," maskFormatModel"),Gl(3674,"br"),sg()()(),Tl(3675,"td",21)(3676,"code",29),tN(3677,"boolean"),sg()(),Tl(3678,"td",24)(3679,"em")(3680,"strong"),tN(3681,"(opcional)"),sg()(),Tl(3682,"p"),tN(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Tl(3684,"code"),tN(3685,"false"),sg(),tN(3686,"."),sg(),Tl(3687,"p")(3688,"strong"),tN(3689,"Componente compat\xEDvel:"),sg(),Tl(3690,"code"),tN(3691,"po-input"),sg(),tN(3692,"."),sg(),Tl(3693,"blockquote")(3694,"p"),tN(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(3696,"code"),tN(3697,"type: time"),sg(),tN(3698,"."),sg()()()(),Tl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),tN(3703," maskNoLengthValidation"),Gl(3704,"br"),sg()()(),Tl(3705,"td",21)(3706,"code",29),tN(3707,"boolean"),sg()(),Tl(3708,"td",24)(3709,"em")(3710,"strong"),tN(3711,"(opcional)"),sg()(),Tl(3712,"p"),tN(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(3714,"code"),tN(3715,"minLength"),sg(),tN(3716,") e m\xE1ximo ("),Tl(3717,"code"),tN(3718,"maxLength"),sg(),tN(3719,") quando h\xE1 uma m\xE1scara ("),Tl(3720,"code"),tN(3721,"p-mask"),sg(),tN(3722,") definida."),sg(),Tl(3723,"ul")(3724,"li"),tN(3725,"Quando "),Tl(3726,"code"),tN(3727,"true"),sg(),tN(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(3729,"li"),tN(3730,"Quando "),Tl(3731,"code"),tN(3732,"false"),sg(),tN(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(3734,"p")(3735,"strong"),tN(3736,"Componentes compat\xEDveis:"),sg(),Tl(3737,"code"),tN(3738,"po-input"),sg(),tN(3739,", "),Tl(3740,"code"),tN(3741,"po-decimal"),sg(),tN(3742,"."),sg(),Tl(3743,"blockquote")(3744,"p"),tN(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(3746,"code"),tN(3747,"p-mask-format-model"),sg(),tN(3748,"."),sg()(),Tl(3749,"p"),tN(3750,"Exemplo:"),sg(),Tl(3751,"pre")(3752,"code"),tN(3753,`fields:Array<PoDynamicFormField> = [
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
`),sg()(),Tl(3754,"ul")(3755,"li"),tN(3756,"Entrada: "),Tl(3757,"code"),tN(3758,"11.111.111/1111-11"),sg(),tN(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),sg()()()(),Tl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),tN(3764," maxLength"),Gl(3765,"br"),sg()()(),Tl(3766,"td",21)(3767,"code",45),tN(3768,"number"),sg()(),Tl(3769,"td",24)(3770,"em")(3771,"strong"),tN(3772,"(opcional)"),sg()(),Tl(3773,"p"),tN(3774,"Tamanho m\xE1ximo de caracteres."),sg(),Tl(3775,"p")(3776,"strong"),tN(3777,"Componentes compat\xEDveis:"),sg(),Tl(3778,"code"),tN(3779,"po-input"),sg(),tN(3780,", "),Tl(3781,"code"),tN(3782,"po-number"),sg(),tN(3783,", "),Tl(3784,"code"),tN(3785,"po-decimal"),sg(),tN(3786,", "),Tl(3787,"code"),tN(3788,"po-textarea"),sg(),tN(3789,", "),Tl(3790,"code"),tN(3791,"po-password"),sg(),tN(3792,"."),sg()()(),Tl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),tN(3797," maxTime"),Gl(3798,"br"),sg()()(),Tl(3799,"td",21)(3800,"code",27),tN(3801,"string"),sg()(),Tl(3802,"td",24)(3803,"em")(3804,"strong"),tN(3805,"(opcional)"),sg()(),Tl(3806,"p"),tN(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3808,"code"),tN(3809,"HH:mm"),sg(),tN(3810," ou "),Tl(3811,"code"),tN(3812,"HH:mm:ss"),sg(),tN(3813,"."),sg(),Tl(3814,"p")(3815,"strong"),tN(3816,"Componente compat\xEDvel:"),sg(),Tl(3817,"code"),tN(3818,"po-datetimepicker"),sg(),tN(3819,", "),Tl(3820,"code"),tN(3821,"po-timepicker"),sg()()()(),Tl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),tN(3826," maxValue"),Gl(3827,"br"),sg()()(),Tl(3828,"td",21)(3829,"code",27),tN(3830,"string "),sg(),Tl(3831,"code",45),tN(3832," number"),sg()(),Tl(3833,"td",24)(3834,"em")(3835,"strong"),tN(3836,"(opcional)"),sg()(),Tl(3837,"p"),tN(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3839,"em"),tN(3840,"number"),sg(),tN(3841,", "),Tl(3842,"em"),tN(3843,"date"),sg(),tN(3844,", "),Tl(3845,"em"),tN(3846,"dateTime"),sg(),tN(3847," ou "),Tl(3848,"em"),tN(3849,"time"),sg(),tN(3850,"."),sg(),Tl(3851,"blockquote")(3852,"p"),tN(3853,"Para "),Tl(3854,"code"),tN(3855,"po-timepicker"),sg(),tN(3856,", o valor deve estar no formato "),Tl(3857,"code"),tN(3858,"HH:mm"),sg(),tN(3859," ou "),Tl(3860,"code"),tN(3861,"HH:mm:ss"),sg(),tN(3862,"."),sg()(),Tl(3863,"p")(3864,"strong"),tN(3865,"Componentes compat\xEDveis:"),sg(),Tl(3866,"code"),tN(3867,"po-datepicker"),sg(),tN(3868,", "),Tl(3869,"code"),tN(3870,"po-datepicker-range"),sg(),tN(3871,", "),Tl(3872,"code"),tN(3873,"po-number"),sg(),tN(3874,", "),Tl(3875,"code"),tN(3876,"po-decimal"),sg(),tN(3877,", "),Tl(3878,"code"),tN(3879,"po-timepicker"),sg()()()(),Tl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),tN(3884," minLength"),Gl(3885,"br"),sg()()(),Tl(3886,"td",21)(3887,"code",45),tN(3888,"number"),sg()(),Tl(3889,"td",24)(3890,"em")(3891,"strong"),tN(3892,"(opcional)"),sg()(),Tl(3893,"p"),tN(3894,"Tamanho m\xEDnimo de caracteres."),sg(),Tl(3895,"p")(3896,"strong"),tN(3897,"Componentes compat\xEDveis:"),sg(),Tl(3898,"code"),tN(3899,"po-input"),sg(),tN(3900,", "),Tl(3901,"code"),tN(3902,"po-number"),sg(),tN(3903,", "),Tl(3904,"code"),tN(3905,"po-decimal"),sg(),tN(3906,", "),Tl(3907,"code"),tN(3908,"po-textarea"),sg(),tN(3909,", "),Tl(3910,"code"),tN(3911,"po-password"),sg(),tN(3912,"."),sg()()(),Tl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),tN(3917," minTime"),Gl(3918,"br"),sg()()(),Tl(3919,"td",21)(3920,"code",27),tN(3921,"string"),sg()(),Tl(3922,"td",24)(3923,"em")(3924,"strong"),tN(3925,"(opcional)"),sg()(),Tl(3926,"p"),tN(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3928,"code"),tN(3929,"HH:mm"),sg(),tN(3930," ou "),Tl(3931,"code"),tN(3932,"HH:mm:ss"),sg(),tN(3933,"."),sg(),Tl(3934,"p")(3935,"strong"),tN(3936,"Componente compat\xEDvel:"),sg(),Tl(3937,"code"),tN(3938,"po-datetimepicker"),sg(),tN(3939,", "),Tl(3940,"code"),tN(3941,"po-timepicker"),sg()()()(),Tl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),tN(3946," minValue"),Gl(3947,"br"),sg()()(),Tl(3948,"td",21)(3949,"code",27),tN(3950,"string "),sg(),Tl(3951,"code",45),tN(3952," number"),sg()(),Tl(3953,"td",24)(3954,"em")(3955,"strong"),tN(3956,"(opcional)"),sg()(),Tl(3957,"p"),tN(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3959,"em"),tN(3960,"number"),sg(),tN(3961,", "),Tl(3962,"em"),tN(3963,"date"),sg(),tN(3964,", "),Tl(3965,"em"),tN(3966,"dateTime"),sg(),tN(3967," ou "),Tl(3968,"em"),tN(3969,"time"),sg(),tN(3970,"."),sg(),Tl(3971,"blockquote")(3972,"p"),tN(3973,"Para "),Tl(3974,"code"),tN(3975,"po-timepicker"),sg(),tN(3976,", o valor deve estar no formato "),Tl(3977,"code"),tN(3978,"HH:mm"),sg(),tN(3979," ou "),Tl(3980,"code"),tN(3981,"HH:mm:ss"),sg(),tN(3982,"."),sg()(),Tl(3983,"p")(3984,"strong"),tN(3985,"Componentes compat\xEDveis:"),sg(),Tl(3986,"code"),tN(3987,"po-datepicker"),sg(),tN(3988,", "),Tl(3989,"code"),tN(3990,"po-datepicker-range"),sg(),tN(3991,", "),Tl(3992,"code"),tN(3993,"po-number"),sg(),tN(3994,", "),Tl(3995,"code"),tN(3996,"po-decimal"),sg(),tN(3997,", "),Tl(3998,"code"),tN(3999,"po-timepicker"),sg()()()(),Tl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),tN(4004," minuteInterval"),Gl(4005,"br"),sg()()(),Tl(4006,"td",21)(4007,"code",45),tN(4008,"number"),sg()(),Tl(4009,"td",24)(4010,"em")(4011,"strong"),tN(4012,"(opcional)"),sg()(),Tl(4013,"p"),tN(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),sg()()(),Tl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),tN(4019," mode"),Gl(4020,"br"),sg()()(),Tl(4021,"td",21)(4022,"code",68),tN(4023,"'month-year' "),sg(),Tl(4024,"code",69),tN(4025," 'year'"),sg()(),Tl(4026,"td",24)(4027,"em")(4028,"strong"),tN(4029,"(opcional)"),sg()(),Tl(4030,"p"),tN(4031,"Define o modo de sele\xE7\xE3o do "),Tl(4032,"code"),tN(4033,"po-datepicker"),sg(),tN(4034,"."),sg(),Tl(4035,"p"),tN(4036,"Valores aceitos:"),sg(),Tl(4037,"ul")(4038,"li")(4039,"code"),tN(4040,"'month-year'"),sg(),tN(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Tl(4042,"code"),tN(4043,"MM/YYYY"),sg(),tN(4044,")"),sg(),Tl(4045,"li")(4046,"code"),tN(4047,"'year'"),sg(),tN(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Tl(4049,"code"),tN(4050,"YYYY"),sg(),tN(4051,")"),sg()(),Tl(4052,"p")(4053,"strong"),tN(4054,"Componente compat\xEDvel:"),sg(),Tl(4055,"code"),tN(4056,"po-datepicker"),sg()()()(),Tl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),tN(4061," modelFormat"),Gl(4062,"br"),sg()()(),Tl(4063,"td",21)(4064,"code",70),tN(4065,"PoTimepickerModelFormat"),sg()(),Tl(4066,"td",24)(4067,"em")(4068,"strong"),tN(4069,"(opcional)"),sg()(),Tl(4070,"p"),tN(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Tl(4072,"code"),tN(4073,"po-timepicker"),sg(),tN(4074,"."),sg(),Tl(4075,"blockquote")(4076,"p"),tN(4077,"Veja os valores v\xE1lidos no "),Tl(4078,"code"),tN(4079,"PoTimepickerModelFormat"),sg(),tN(4080,"."),sg()(),Tl(4081,"p")(4082,"strong"),tN(4083,"Componente compat\xEDvel:"),sg(),Tl(4084,"code"),tN(4085,"po-timepicker"),sg()()()(),Tl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),tN(4090," multiple"),Gl(4091,"br"),sg()()(),Tl(4092,"td",21)(4093,"code",29),tN(4094,"boolean"),sg()(),Tl(4095,"td",24)(4096,"em")(4097,"strong"),tN(4098,"(opcional)"),sg()(),Tl(4099,"p"),tN(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Tl(4101,"p")(4102,"strong"),tN(4103,"Componentes compat\xEDveis:"),sg(),Tl(4104,"code"),tN(4105,"po-lookup"),sg(),tN(4106,", "),Tl(4107,"code"),tN(4108,"po-upload"),sg()()()(),Tl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),tN(4113," noAutocomplete"),Gl(4114,"br"),sg()()(),Tl(4115,"td",21)(4116,"code",29),tN(4117,"boolean"),sg()(),Tl(4118,"td",24)(4119,"em")(4120,"strong"),tN(4121,"(opcional)"),sg()(),Tl(4122,"p"),tN(4123,"Define a propriedade nativa "),Tl(4124,"code"),tN(4125,"autocomplete"),sg(),tN(4126," do campo como off."),sg(),Tl(4127,"p")(4128,"strong"),tN(4129,"Componentes compat\xEDveis:"),sg(),Tl(4130,"code"),tN(4131,"po-datepicker"),sg(),tN(4132,", "),Tl(4133,"code"),tN(4134,"po-datepicker-range"),sg(),tN(4135,", "),Tl(4136,"code"),tN(4137,"po-input"),sg(),tN(4138,", "),Tl(4139,"code"),tN(4140,"po-number"),sg(),tN(4141,", "),Tl(4142,"code"),tN(4143,"po-decimal"),sg(),tN(4144,`,
`),Tl(4145,"code"),tN(4146,"po-lookup"),sg(),tN(4147,", "),Tl(4148,"code"),tN(4149,"po-password"),sg(),tN(4150,", "),Tl(4151,"code"),tN(4152,"po-timepicker"),sg(),tN(4153,"."),sg()()(),Tl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),tN(4158," offsetColumns"),Gl(4159,"br"),sg()()(),Tl(4160,"td",21)(4161,"code",45),tN(4162,"number"),sg()(),Tl(4163,"td",24)(4164,"em")(4165,"strong"),tN(4166,"(opcional)"),sg()(),Tl(4167,"p"),tN(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Tl(4169,"p"),tN(4170,"Deve ser usado o sistema de "),Tl(4171,"strong"),tN(4172,"grid"),sg(),tN(4173," do PO (1 ... 12 colunas)."),sg(),Tl(4174,"blockquote")(4175,"p"),tN(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),tN(4181," offsetLgColumns"),Gl(4182,"br"),sg()()(),Tl(4183,"td",21)(4184,"code",45),tN(4185,"number"),sg()(),Tl(4186,"td",24)(4187,"em")(4188,"strong"),tN(4189,"(opcional)"),sg()(),Tl(4190,"p"),tN(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(4192,"p"),tN(4193,"Deve ser usado o sistema de "),Tl(4194,"strong"),tN(4195,"grid"),sg(),tN(4196," do PO (1 ... 12 colunas)."),sg(),Tl(4197,"blockquote")(4198,"p"),tN(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4200,"code"),tN(4201,"offsetColumns"),sg(),tN(4202,"."),sg()()()(),Tl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),tN(4207," offsetMdColumns"),Gl(4208,"br"),sg()()(),Tl(4209,"td",21)(4210,"code",45),tN(4211,"number"),sg()(),Tl(4212,"td",24)(4213,"em")(4214,"strong"),tN(4215,"(opcional)"),sg()(),Tl(4216,"p"),tN(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(4218,"p"),tN(4219,"Deve ser usado o sistema de "),Tl(4220,"strong"),tN(4221,"grid"),sg(),tN(4222," do PO (1 ... 12 colunas)."),sg(),Tl(4223,"blockquote")(4224,"p"),tN(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4226,"code"),tN(4227,"offsetColumns"),sg(),tN(4228,"."),sg()()()(),Tl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),tN(4233," offsetSmColumns"),Gl(4234,"br"),sg()()(),Tl(4235,"td",21)(4236,"code",45),tN(4237,"number"),sg()(),Tl(4238,"td",24)(4239,"em")(4240,"strong"),tN(4241,"(opcional)"),sg()(),Tl(4242,"p"),tN(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(4244,"p"),tN(4245,"Deve ser usado o sistema de "),Tl(4246,"strong"),tN(4247,"grid"),sg(),tN(4248," do PO (1 ... 12 colunas)."),sg(),Tl(4249,"blockquote")(4250,"p"),tN(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4252,"code"),tN(4253,"offsetColumns"),sg(),tN(4254,"."),sg()()()(),Tl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),tN(4259," offsetXlColumns"),Gl(4260,"br"),sg()()(),Tl(4261,"td",21)(4262,"code",45),tN(4263,"number"),sg()(),Tl(4264,"td",24)(4265,"em")(4266,"strong"),tN(4267,"(opcional)"),sg()(),Tl(4268,"p"),tN(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(4270,"p"),tN(4271,"Deve ser usado o sistema de "),Tl(4272,"strong"),tN(4273,"grid"),sg(),tN(4274," do PO (1 ... 12 colunas)."),sg(),Tl(4275,"blockquote")(4276,"p"),tN(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4278,"code"),tN(4279,"offsetColumns"),sg(),tN(4280,"."),sg()()()(),Tl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),tN(4285," onError"),Gl(4286,"br"),sg()()(),Tl(4287,"td",21)(4288,"code",44),tN(4289,"Function"),sg()(),Tl(4290,"td",24)(4291,"em")(4292,"strong"),tN(4293,"(opcional)"),sg()(),Tl(4294,"p"),tN(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Tl(4296,"blockquote")(4297,"p"),tN(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(4299,"code"),tN(4300,"HttpErrorResponse"),sg(),tN(4301,"."),sg()(),Tl(4302,"p")(4303,"strong"),tN(4304,"Componente compat\xEDvel"),sg(),tN(4305,": "),Tl(4306,"code"),tN(4307,"po-upload"),sg()()()(),Tl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),tN(4312," onSuccess"),Gl(4313,"br"),sg()()(),Tl(4314,"td",21)(4315,"code",44),tN(4316,"Function"),sg()(),Tl(4317,"td",24)(4318,"em")(4319,"strong"),tN(4320,"(opcional)"),sg()(),Tl(4321,"p"),tN(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Tl(4323,"blockquote")(4324,"p"),tN(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(4326,"code"),tN(4327,"HttpResponse"),sg(),tN(4328,"."),sg()(),Tl(4329,"p")(4330,"strong"),tN(4331,"Componente compat\xEDvel"),sg(),tN(4332,": "),Tl(4333,"code"),tN(4334,"po-upload"),sg()()()(),Tl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),tN(4339," onUpload"),Gl(4340,"br"),sg()()(),Tl(4341,"td",21)(4342,"code",44),tN(4343,"Function"),sg()(),Tl(4344,"td",24)(4345,"em")(4346,"strong"),tN(4347,"(opcional)"),sg()(),Tl(4348,"p"),tN(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Tl(4350,"pre")(4351,"code"),tN(4352,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Tl(4353,"p")(4354,"strong"),tN(4355,"Componente compat\xEDvel"),sg(),tN(4356,": "),Tl(4357,"code"),tN(4358,"po-upload"),sg()()()(),Tl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),tN(4363," optional"),Gl(4364,"br"),sg()()(),Tl(4365,"td",21)(4366,"code",29),tN(4367,"boolean"),sg()(),Tl(4368,"td",24)(4369,"em")(4370,"strong"),tN(4371,"(opcional)"),sg()(),Tl(4372,"p"),tN(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(4374,"blockquote")(4375,"p"),tN(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),sg()(),Tl(4377,"ul")(4378,"li"),tN(4379,"O campo for "),Tl(4380,"code"),tN(4381,"required"),sg(),tN(4382,", ou;"),sg(),Tl(4383,"li"),tN(4384,"N\xE3o possuir "),Tl(4385,"code"),tN(4386,"help"),sg(),tN(4387," e "),Tl(4388,"code"),tN(4389,"label"),sg(),tN(4390,"."),sg()(),Tl(4391,"p")(4392,"strong"),tN(4393,"Componentes compat\xEDveis:"),sg(),Tl(4394,"code"),tN(4395,"po-datepicker"),sg(),tN(4396,", "),Tl(4397,"code"),tN(4398,"po-datepicker-range"),sg(),tN(4399,", "),Tl(4400,"code"),tN(4401,"po-timepicker"),sg(),tN(4402,", "),Tl(4403,"code"),tN(4404,"po-input"),sg(),tN(4405,", "),Tl(4406,"code"),tN(4407,"po-number"),sg(),tN(4408,`,
`),Tl(4409,"code"),tN(4410,"po-decimal"),sg(),tN(4411,", "),Tl(4412,"code"),tN(4413,"po-select"),sg(),tN(4414,", "),Tl(4415,"code"),tN(4416,"po-radio-group"),sg(),tN(4417,", "),Tl(4418,"code"),tN(4419,"po-combo"),sg(),tN(4420,", "),Tl(4421,"code"),tN(4422,"po-lookup"),sg(),tN(4423,", "),Tl(4424,"code"),tN(4425,"po-checkbox-group"),sg(),tN(4426,", "),Tl(4427,"code"),tN(4428,"po-multiselect"),sg(),tN(4429,`,
`),Tl(4430,"code"),tN(4431,"po-textarea"),sg(),tN(4432,", "),Tl(4433,"code"),tN(4434,"po-password"),sg(),tN(4435,"."),sg()()(),Tl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),tN(4440," options"),Gl(4441,"br"),sg()()(),Tl(4442,"td",21)(4443,"code",32),tN(4444,"Array<string> "),sg(),Tl(4445,"code",71),tN(4446," Array<PoSelectOption> "),sg(),Tl(4447,"code",72),tN(4448," Array<PoMultiselectOption> "),sg(),Tl(4449,"code",73),tN(4450," Array<PoCheckboxGroupOption> "),sg(),Tl(4451,"code",74),tN(4452," Array<any>"),sg()(),Tl(4453,"td",24)(4454,"em")(4455,"strong"),tN(4456,"(opcional)"),sg()(),Tl(4457,"p"),tN(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),sg(),Tl(4459,"p")(4460,"strong"),tN(4461,"Componentes compat\xEDveis:"),sg(),Tl(4462,"code"),tN(4463,"po-select"),sg(),tN(4464,", "),Tl(4465,"code"),tN(4466,"po-radio-group"),sg(),tN(4467,", "),Tl(4468,"code"),tN(4469,"po-checkbox-group"),sg(),tN(4470,", "),Tl(4471,"code"),tN(4472,"po-multiselect"),sg(),tN(4473,"."),sg()()(),Tl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),tN(4478," optionsMulti"),Gl(4479,"br"),sg()()(),Tl(4480,"td",21)(4481,"code",29),tN(4482,"boolean"),sg()(),Tl(4483,"td",24)(4484,"em")(4485,"strong"),tN(4486,"(opcional)"),sg()(),Tl(4487,"p"),tN(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),sg()()(),Tl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),tN(4493," optionsService"),Gl(4494,"br"),sg()()(),Tl(4495,"td",21)(4496,"code",27),tN(4497,"string "),sg(),Tl(4498,"code",75),tN(4499," PoComboFilter "),sg(),Tl(4500,"code",76),tN(4501," PoMultiselectFilter"),sg()(),Tl(4502,"td",24)(4503,"em")(4504,"strong"),tN(4505,"(opcional)"),sg()(),Tl(4506,"p"),tN(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Tl(4508,"strong"),tN(4509,"Importante"),sg()(),Tl(4510,"blockquote")(4511,"p"),tN(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Tl(4513,"a",7),tN(4514,"guia de API do PO UI"),sg(),tN(4515,"."),sg()()()(),Tl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),tN(4520," order"),Gl(4521,"br"),sg()()(),Tl(4522,"td",21)(4523,"code",45),tN(4524,"number"),sg()(),Tl(4525,"td",24)(4526,"em")(4527,"strong"),tN(4528,"(opcional)"),sg()(),Tl(4529,"p"),tN(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Tl(4531,"p"),tN(4532,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(4533,"p")(4534,"code"),tN(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),sg()(),Tl(4536,"p"),tN(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Tl(4538,"code"),tN(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),sg()(),Tl(4540,"p"),tN(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Tl(4542,"p"),tN(4543,"Campos sem "),Tl(4544,"code"),tN(4545,"order"),sg(),tN(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Tl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),tN(4551," params"),Gl(4552,"br"),sg()()(),Tl(4553,"td",21)(4554,"code",33),tN(4555,"any"),sg()(),Tl(4556,"td",24)(4557,"em")(4558,"strong"),tN(4559,"(opcional)"),sg()(),Tl(4560,"p"),tN(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Tl(4562,"code"),tN(4563,"po-lookup"),sg(),tN(4564,` e
`),Tl(4565,"code"),tN(4566,"po-combo"),sg(),tN(4567,"."),sg(),Tl(4568,"p"),tN(4569,"Por exemplo, para o par\xE2metro "),Tl(4570,"code"),tN(4571,"{ age: 23 }"),sg(),tN(4572," a URL da requisi\xE7\xE3o ficaria:"),sg(),Tl(4573,"p")(4574,"code"),tN(4575,"url + ?age=23&filter=Peter"),sg()()()(),Tl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),tN(4580," pattern"),Gl(4581,"br"),sg()()(),Tl(4582,"td",21)(4583,"code",27),tN(4584,"string"),sg()(),Tl(4585,"td",24)(4586,"em")(4587,"strong"),tN(4588,"(opcional)"),sg()(),Tl(4589,"p"),tN(4590,"Regex para valida\xE7\xE3o do campo."),sg(),Tl(4591,"p")(4592,"strong"),tN(4593,"Componentes compat\xEDveis:"),sg(),Tl(4594,"code"),tN(4595,"po-input"),sg(),tN(4596,", "),Tl(4597,"code"),tN(4598,"po-password"),sg(),tN(4599,"."),sg()()(),Tl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),tN(4604," placeholder"),Gl(4605,"br"),sg()()(),Tl(4606,"td",21)(4607,"code",27),tN(4608,"string"),sg()(),Tl(4609,"td",24)(4610,"em")(4611,"strong"),tN(4612,"(opcional)"),sg()(),Tl(4613,"p"),tN(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),sg(),Tl(4615,"p")(4616,"strong"),tN(4617,"Componentes compat\xEDveis:"),sg(),Tl(4618,"code"),tN(4619,"po-datepicker"),sg(),tN(4620,", "),Tl(4621,"code"),tN(4622,"po-datepicker-range"),sg(),tN(4623,", "),Tl(4624,"code"),tN(4625,"po-timepicker"),sg(),tN(4626,", "),Tl(4627,"code"),tN(4628,"po-input"),sg(),tN(4629,", "),Tl(4630,"code"),tN(4631,"po-number"),sg(),tN(4632,", "),Tl(4633,"code"),tN(4634,"po-decimal"),sg(),tN(4635,", "),Tl(4636,"code"),tN(4637,"po-select"),sg(),tN(4638,", "),Tl(4639,"code"),tN(4640,"po-combo"),sg(),tN(4641,", "),Tl(4642,"code"),tN(4643,"po-lookup"),sg(),tN(4644,", "),Tl(4645,"code"),tN(4646,"po-multiselect"),sg(),tN(4647,", "),Tl(4648,"code"),tN(4649,"po-textarea"),sg(),tN(4650,", "),Tl(4651,"code"),tN(4652,"po-password"),sg(),tN(4653,"."),sg()()(),Tl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),tN(4658," placeholderSearch"),Gl(4659,"br"),sg()()(),Tl(4660,"td",21)(4661,"code",27),tN(4662,"string"),sg()(),Tl(4663,"td",24)(4664,"em")(4665,"strong"),tN(4666,"(opcional)"),sg()(),Tl(4667,"p"),tN(4668,"Placeholder do campo de pesquisa do "),Tl(4669,"code"),tN(4670,"po-multiselect"),sg(),tN(4671,"."),sg(),Tl(4672,"blockquote")(4673,"p"),tN(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Tl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),tN(4679," property"),Gl(4680,"br"),sg()()(),Tl(4681,"td",21)(4682,"code",27),tN(4683,"string"),sg()(),Tl(4684,"td",24)(4685,"p"),tN(4686,"Nome de refer\xEAncia do campo."),sg()()(),Tl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),tN(4691," range"),Gl(4692,"br"),sg()()(),Tl(4693,"td",21)(4694,"code",29),tN(4695,"boolean"),sg()(),Tl(4696,"td",24)(4697,"em")(4698,"strong"),tN(4699,"(opcional)"),sg()(),Tl(4700,"p"),tN(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),sg(),Tl(4702,"blockquote")(4703,"p"),tN(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),sg()()()(),Tl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),tN(4709," rangePresetOptions"),Gl(4710,"br"),sg()()(),Tl(4711,"td",21)(4712,"code",77),tN(4713,"Array<PoCalendarRangePreset>"),sg()(),Tl(4714,"td",24)(4715,"em")(4716,"strong"),tN(4717,"(opcional)"),sg()(),Tl(4718,"p"),tN(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),sg(),Tl(4720,"p"),tN(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Tl(4722,"code"),tN(4723,"PoCalendarRangePreset"),sg(),tN(4724,"."),sg(),Tl(4725,"p")(4726,"strong"),tN(4727,"Componente compat\xEDvel:"),sg(),Tl(4728,"code"),tN(4729,"po-datepicker-range"),sg()()()(),Tl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),tN(4734," rangePresets"),Gl(4735,"br"),sg()()(),Tl(4736,"td",21)(4737,"code",29),tN(4738,"boolean "),sg(),Tl(4739,"code",32),tN(4740," Array<string>"),sg()(),Tl(4741,"td",24)(4742,"em")(4743,"strong"),tN(4744,"(opcional)"),sg()(),Tl(4745,"p"),tN(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),sg(),Tl(4747,"p"),tN(4748,"Aceita os seguintes valores:"),sg(),Tl(4749,"ul")(4750,"li")(4751,"code"),tN(4752,"true"),sg(),tN(4753,": exibe todos os presets padr\xE3o."),sg(),Tl(4754,"li")(4755,"code"),tN(4756,"false"),sg(),tN(4757,": n\xE3o exibe os presets padr\xE3o."),sg(),Tl(4758,"li")(4759,"code"),tN(4760,"Array<string>"),sg(),tN(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),sg()(),Tl(4762,"p")(4763,"strong"),tN(4764,"Componente compat\xEDvel:"),sg(),Tl(4765,"code"),tN(4766,"po-datepicker-range"),sg()()()(),Tl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),tN(4771," rangePresetsOrder"),Gl(4772,"br"),sg()()(),Tl(4773,"td",21)(4774,"code",78),tN(4775,"'asc' "),sg(),Tl(4776,"code",79),tN(4777," 'desc'"),sg()(),Tl(4778,"td",24)(4779,"em")(4780,"strong"),tN(4781,"(opcional)"),sg()(),Tl(4782,"p"),tN(4783,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Tl(4784,"p"),tN(4785,"Valores aceitos:"),sg(),Tl(4786,"ul")(4787,"li")(4788,"code"),tN(4789,"'asc'"),sg(),tN(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),sg(),Tl(4791,"li")(4792,"code"),tN(4793,"'desc'"),sg(),tN(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),sg()(),Tl(4795,"p")(4796,"strong"),tN(4797,"Componente compat\xEDvel:"),sg(),Tl(4798,"code"),tN(4799,"po-datepicker-range"),sg()()()(),Tl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),tN(4804," readonly"),Gl(4805,"br"),sg()()(),Tl(4806,"td",21)(4807,"code",29),tN(4808,"boolean"),sg()(),Tl(4809,"td",24)(4810,"em")(4811,"strong"),tN(4812,"(opcional)"),sg()(),Tl(4813,"p"),tN(4814,"Indica que o campo ser\xE1 somente leitura."),sg(),Tl(4815,"p")(4816,"strong"),tN(4817,"Componentes compat\xEDveis:"),sg(),Tl(4818,"code"),tN(4819,"po-datepicker"),sg(),tN(4820,", "),Tl(4821,"code"),tN(4822,"po-datepicker-range"),sg(),tN(4823,", "),Tl(4824,"code"),tN(4825,"po-timepicker"),sg(),tN(4826,", "),Tl(4827,"code"),tN(4828,"po-input"),sg(),tN(4829,", "),Tl(4830,"code"),tN(4831,"po-number"),sg(),tN(4832,`,
`),Tl(4833,"code"),tN(4834,"po-decimal"),sg(),tN(4835,", "),Tl(4836,"code"),tN(4837,"po-select"),sg(),tN(4838,", "),Tl(4839,"code"),tN(4840,"po-textarea"),sg(),tN(4841,", "),Tl(4842,"code"),tN(4843,"po-password"),sg(),tN(4844,"."),sg()()(),Tl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),tN(4849," removeInitialFilter"),Gl(4850,"br"),sg()()(),Tl(4851,"td",21)(4852,"code",29),tN(4853,"boolean"),sg()(),Tl(4854,"td",24)(4855,"em")(4856,"strong"),tN(4857,"(opcional)"),sg()(),Tl(4858,"p"),tN(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),sg(),Tl(4860,"blockquote")(4861,"p"),tN(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),sg()(),Tl(4863,"p")(4864,"strong"),tN(4865,"Componente compat\xEDvel"),sg(),tN(4866,": "),Tl(4867,"code"),tN(4868,"po-combo"),sg()()()(),Tl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),tN(4873," required"),Gl(4874,"br"),sg()()(),Tl(4875,"td",21)(4876,"code",29),tN(4877,"boolean"),sg()(),Tl(4878,"td",24)(4879,"em")(4880,"strong"),tN(4881,"(opcional)"),sg()(),Tl(4882,"p"),tN(4883,"Define a obrigatoriedade do campo."),sg(),Tl(4884,"p")(4885,"strong"),tN(4886,"Componentes compat\xEDveis:"),sg(),Tl(4887,"code"),tN(4888,"po-datepicker"),sg(),tN(4889,", "),Tl(4890,"code"),tN(4891,"po-datepicker-range"),sg(),tN(4892,", "),Tl(4893,"code"),tN(4894,"po-timepicker"),sg(),tN(4895,", "),Tl(4896,"code"),tN(4897,"po-input"),sg(),tN(4898,", "),Tl(4899,"code"),tN(4900,"po-number"),sg(),tN(4901,`,
`),Tl(4902,"code"),tN(4903,"po-decimal"),sg(),tN(4904,", "),Tl(4905,"code"),tN(4906,"po-select"),sg(),tN(4907,", "),Tl(4908,"code"),tN(4909,"po-radio-group"),sg(),tN(4910,", "),Tl(4911,"code"),tN(4912,"po-combo"),sg(),tN(4913,", "),Tl(4914,"code"),tN(4915,"po-lookup"),sg(),tN(4916,", "),Tl(4917,"code"),tN(4918,"po-checkbox-group"),sg(),tN(4919,", "),Tl(4920,"code"),tN(4921,"po-multiselect"),sg(),tN(4922,`,
`),Tl(4923,"code"),tN(4924,"po-textarea"),sg(),tN(4925,", "),Tl(4926,"code"),tN(4927,"po-password``, "),sg(),tN(4928,"po-upload`."),sg()()(),Tl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),tN(4933," requiredFieldErrorMessage"),Gl(4934,"br"),sg()()(),Tl(4935,"td",21)(4936,"code",29),tN(4937,"boolean"),sg()(),Tl(4938,"td",24)(4939,"em")(4940,"strong"),tN(4941,"(opcional)"),sg()(),Tl(4942,"p"),tN(4943,"Exibe a mensagem setada na propriedade "),Tl(4944,"code"),tN(4945,"errorMessage"),sg(),tN(4946," se o campo estiver vazio e for requerido."),sg(),Tl(4947,"blockquote")(4948,"p"),tN(4949,"Necess\xE1rio que a propriedade "),Tl(4950,"code"),tN(4951,"required"),sg(),tN(4952," esteja habilitada."),sg()(),Tl(4953,"p")(4954,"strong"),tN(4955,"Componentes compat\xEDveis:"),sg(),Tl(4956,"code"),tN(4957,"po-datepicker"),sg(),tN(4958,", "),Tl(4959,"code"),tN(4960,"po-timepicker"),sg(),tN(4961,", "),Tl(4962,"code"),tN(4963,"po-input"),sg(),tN(4964,", "),Tl(4965,"code"),tN(4966,"po-number"),sg(),tN(4967,", "),Tl(4968,"code"),tN(4969,"po-decimal"),sg(),tN(4970,", "),Tl(4971,"code"),tN(4972,"po-password"),sg(),tN(4973,"."),sg()()(),Tl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),tN(4978," restrictions"),Gl(4979,"br"),sg()()(),Tl(4980,"td",21)(4981,"code",80),tN(4982,"PoUploadFileRestrictions"),sg()(),Tl(4983,"td",24)(4984,"em")(4985,"strong"),tN(4986,"(opcional)"),sg()(),Tl(4987,"p"),tN(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Tl(4989,"code"),tN(4990,"PoUploadFileRestrictions"),sg(),tN(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg(),Tl(4992,"p")(4993,"strong"),tN(4994,"Componente compat\xEDvel"),sg(),tN(4995,": "),Tl(4996,"code"),tN(4997,"po-upload"),sg()()()(),Tl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),tN(5002," rows"),Gl(5003,"br"),sg()()(),Tl(5004,"td",21)(5005,"code",45),tN(5006,"number"),sg()(),Tl(5007,"td",24)(5008,"em")(5009,"strong"),tN(5010,"(opcional)"),sg()(),Tl(5011,"p"),tN(5012,"Quantidade de linhas exibidas no "),Tl(5013,"code"),tN(5014,"po-textarea"),sg(),tN(5015,"."),sg()()(),Tl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),tN(5020," searchService"),Gl(5021,"br"),sg()()(),Tl(5022,"td",21)(5023,"code",27),tN(5024,"string "),sg(),Tl(5025,"code",34),tN(5026," PoLookupFilter"),sg()(),Tl(5027,"td",24)(5028,"em")(5029,"strong"),tN(5030,"(opcional)"),sg()(),Tl(5031,"p"),tN(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Tl(5033,"code"),tN(5034,"columns"),sg(),tN(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Tl(5036,"strong"),tN(5037,"Importante:"),sg()(),Tl(5038,"blockquote")(5039,"p"),tN(5040,"Caso utilizar a propriedade "),Tl(5041,"code"),tN(5042,"optionsService"),sg(),tN(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(5044,"a",7),tN(5045,"guia de API do PO UI"),sg(),tN(5046,"."),sg()()()(),Tl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),tN(5051," secondInterval"),Gl(5052,"br"),sg()()(),Tl(5053,"td",21)(5054,"code",45),tN(5055,"number"),sg()(),Tl(5056,"td",24)(5057,"em")(5058,"strong"),tN(5059,"(opcional)"),sg()(),Tl(5060,"p"),tN(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),sg()()(),Tl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),tN(5066," secret"),Gl(5067,"br"),sg()()(),Tl(5068,"td",21)(5069,"code",29),tN(5070,"boolean"),sg()(),Tl(5071,"td",24)(5072,"em")(5073,"strong"),tN(5074,"(opcional)"),sg()(),Tl(5075,"p"),tN(5076,"Esconde a informa\xE7\xE3o estilo "),Tl(5077,"em"),tN(5078,"password"),sg(),tN(5079,", pode ser utilizado quando o tipo de dado for "),Tl(5080,"em"),tN(5081,"string"),sg(),tN(5082,"."),sg()()(),Tl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),tN(5087," showRequired"),Gl(5088,"br"),sg()()(),Tl(5089,"td",21)(5090,"code",29),tN(5091,"boolean"),sg()(),Tl(5092,"td",24)(5093,"em")(5094,"strong"),tN(5095,"(opcional)"),sg()(),Tl(5096,"p"),tN(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(5098,"blockquote")(5099,"p"),tN(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(5101,"ul")(5102,"li"),tN(5103,"N\xE3o possuir "),Tl(5104,"code"),tN(5105,"p-help"),sg(),tN(5106," e/ou "),Tl(5107,"code"),tN(5108,"p-label"),sg(),tN(5109,"."),sg()(),Tl(5110,"p")(5111,"strong"),tN(5112,"Componentes compat\xEDveis:"),sg(),Tl(5113,"code"),tN(5114,"po-datepicker"),sg(),tN(5115,", "),Tl(5116,"code"),tN(5117,"po-datepicker-range"),sg(),tN(5118,", "),Tl(5119,"code"),tN(5120,"po-timepicker"),sg(),tN(5121,", "),Tl(5122,"code"),tN(5123,"po-input"),sg(),tN(5124,", "),Tl(5125,"code"),tN(5126,"po-number"),sg(),tN(5127,`,
`),Tl(5128,"code"),tN(5129,"po-decimal"),sg(),tN(5130,", "),Tl(5131,"code"),tN(5132,"po-select"),sg(),tN(5133,", "),Tl(5134,"code"),tN(5135,"po-radio-group"),sg(),tN(5136,", "),Tl(5137,"code"),tN(5138,"po-combo"),sg(),tN(5139,", "),Tl(5140,"code"),tN(5141,"po-lookup"),sg(),tN(5142,", "),Tl(5143,"code"),tN(5144,"po-checkbox-group"),sg(),tN(5145,", "),Tl(5146,"code"),tN(5147,"po-multiselect"),sg(),tN(5148,`,
`),Tl(5149,"code"),tN(5150,"po-textarea"),sg(),tN(5151,", "),Tl(5152,"code"),tN(5153,"po-password"),sg(),tN(5154,", "),Tl(5155,"code"),tN(5156,"po-upload"),sg(),tN(5157,"."),sg()()(),Tl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),tN(5162," showSeconds"),Gl(5163,"br"),sg()()(),Tl(5164,"td",21)(5165,"code",29),tN(5166,"boolean"),sg()(),Tl(5167,"td",24)(5168,"em")(5169,"strong"),tN(5170,"(opcional)"),sg()(),Tl(5171,"p"),tN(5172,"Exibe a coluna de segundos no painel do timepicker."),sg()()(),Tl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),tN(5177," showThumbnail"),Gl(5178,"br"),sg()()(),Tl(5179,"td",21)(5180,"code",29),tN(5181,"boolean"),sg()(),Tl(5182,"td",24)(5183,"em")(5184,"strong"),tN(5185,"(opcional)"),sg()(),Tl(5186,"p"),tN(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Tl(5188,"blockquote")(5189,"p"),tN(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Tl(5191,"code"),tN(5192,".png"),sg(),tN(5193,", "),Tl(5194,"code"),tN(5195,".jpg"),sg(),tN(5196,", "),Tl(5197,"code"),tN(5198,".jpeg"),sg(),tN(5199," e "),Tl(5200,"code"),tN(5201,".gif"),sg(),tN(5202,")."),sg()(),Tl(5203,"p")(5204,"strong"),tN(5205,"Componente compat\xEDvel"),sg(),tN(5206,": "),Tl(5207,"code"),tN(5208,"po-upload"),sg()()()(),Tl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),tN(5213," size"),Gl(5214,"br"),sg()()(),Tl(5215,"td",21)(5216,"code",27),tN(5217,"string"),sg()(),Tl(5218,"td",24)(5219,"em")(5220,"strong"),tN(5221,"(opcional)"),sg()(),Tl(5222,"p"),tN(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),sg(),Tl(5224,"ul")(5225,"li")(5226,"code"),tN(5227,"small"),sg(),tN(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(5229,"li")(5230,"code"),tN(5231,"medium"),sg(),tN(5232,": aplica a medida medium de cada componente."),sg(),Tl(5233,"li")(5234,"code"),tN(5235,"large"),sg(),tN(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Tl(5237,"code"),tN(5238,"po-checkbox"),sg(),tN(5239," e "),Tl(5240,"code"),tN(5241,"po-radio-group"),sg(),tN(5242,")."),Tl(5243,"blockquote")(5244,"p"),tN(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(5246,"code"),tN(5247,"medium"),sg(),tN(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(5249,"a",40),tN(5250,"po-theme"),sg(),tN(5251,"."),sg()()()()()(),Tl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),tN(5256," sort"),Gl(5257,"br"),sg()()(),Tl(5258,"td",21)(5259,"code",29),tN(5260,"boolean"),sg()(),Tl(5261,"td",24)(5262,"em")(5263,"strong"),tN(5264,"(opcional)"),sg()(),Tl(5265,"p"),tN(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg(),Tl(5267,"p")(5268,"strong"),tN(5269,"Componentes compat\xEDveis:"),sg(),Tl(5270,"code"),tN(5271,"po-combo"),sg(),tN(5272,", po-multiselect"),sg()()(),Tl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),tN(5277," step"),Gl(5278,"br"),sg()()(),Tl(5279,"td",21)(5280,"code",45),tN(5281,"number"),sg()(),Tl(5282,"td",24)(5283,"em")(5284,"strong"),tN(5285,"(opcional)"),sg()(),Tl(5286,"p"),tN(5287,"Intervalo utilizado no "),Tl(5288,"code"),tN(5289,"po-number"),sg(),tN(5290,"."),sg()()(),Tl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),tN(5295," thousandMaxlength"),Gl(5296,"br"),sg()()(),Tl(5297,"td",21)(5298,"code",45),tN(5299,"number"),sg()(),Tl(5300,"td",24)(5301,"em")(5302,"strong"),tN(5303,"(opcional)"),sg()(),Tl(5304,"p"),tN(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),sg(),Tl(5306,"blockquote")(5307,"p"),tN(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(5309,"code"),tN(5310,"type"),sg(),tN(5311," for "),Tl(5312,"em"),tN(5313,"currency"),sg(),tN(5314," ou "),Tl(5315,"em"),tN(5316,"decimal"),sg(),tN(5317,"."),sg()()()(),Tl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),tN(5322," type"),Gl(5323,"br"),sg()()(),Tl(5324,"td",21)(5325,"code",27),tN(5326,"string "),sg(),Tl(5327,"code",81),tN(5328," PoDynamicFieldType"),sg()(),Tl(5329,"td",24)(5330,"em")(5331,"strong"),tN(5332,"(opcional)"),sg()(),Tl(5333,"p"),tN(5334,"Tipo do valor campo."),sg(),Tl(5335,"p"),tN(5336,"Valores v\xE1lidos:"),sg(),Tl(5337,"ul")(5338,"li")(5339,"code"),tN(5340,"boolean"),sg(),tN(5341,": Valores "),Tl(5342,"em"),tN(5343,"booleanos"),sg(),tN(5344,"."),sg(),Tl(5345,"li")(5346,"code"),tN(5347,"currency"),sg(),tN(5348,": Valores monet\xE1rios."),sg(),Tl(5349,"li")(5350,"code"),tN(5351,"decimal"),sg(),tN(5352,": Valores decimais."),sg(),Tl(5353,"li")(5354,"code"),tN(5355,"date"),sg(),tN(5356,": Valores de datas."),Tl(5357,"ul")(5358,"li"),tN(5359,"Aceita os tipos "),Tl(5360,"strong"),tN(5361,"string"),sg(),tN(5362," e "),Tl(5363,"strong"),tN(5364,"Date"),sg(),tN(5365,` padr\xE3o do Javascript,
por exemplo: `),Tl(5366,"code"),tN(5367,"'2017-11-28'"),sg(),tN(5368," ou "),Tl(5369,"code"),tN(5370,"new Date(2017, 10, 28)"),sg(),tN(5371,"."),sg()()(),Tl(5372,"li")(5373,"code"),tN(5374,"dateTime"),sg(),tN(5375,": Valor de data com hor\xE1rio."),Tl(5376,"ul")(5377,"li"),tN(5378,"Aceita o tipo "),Tl(5379,"em"),tN(5380,"string"),sg(),tN(5381," no formato "),Tl(5382,"strong"),tN(5383,"ISO-8601"),sg(),tN(5384," extendido "),Tl(5385,"strong"),tN(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),tN(5387,`
e o tipo `),Tl(5388,"strong"),tN(5389,"Date"),sg(),tN(5390," padr\xE3o do Javascript, por exemplo: "),Tl(5391,"code"),tN(5392,"'2017-11-28T00:00:00-02:00'"),sg(),tN(5393," ou "),Tl(5394,"code"),tN(5395,"new Date(2017, 10, 28)"),sg(),tN(5396,"."),sg()()(),Tl(5397,"li")(5398,"code"),tN(5399,"number"),sg(),tN(5400,": Valores num\xE9ricos."),sg(),Tl(5401,"li")(5402,"code"),tN(5403,"string"),sg(),tN(5404,": Textos."),sg(),Tl(5405,"li")(5406,"code"),tN(5407,"time"),sg(),tN(5408,": Valor do hor\xE1rio."),Tl(5409,"ul")(5410,"li"),tN(5411,"Aceita o tipo "),Tl(5412,"strong"),tN(5413,"string"),sg(),tN(5414," nos formatos "),Tl(5415,"strong"),tN(5416,"'HH:mm:ss'"),sg(),tN(5417," ou "),Tl(5418,"strong"),tN(5419,"'HH:mm:ss.ffffff'"),sg(),tN(5420,", por exemplo: "),Tl(5421,"code"),tN(5422,"'23:12:45'"),sg(),tN(5423,"."),sg()()()()()(),Tl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),tN(5428," url"),Gl(5429,"br"),sg()()(),Tl(5430,"td",21)(5431,"code",27),tN(5432,"string"),sg()(),Tl(5433,"td",24)(5434,"em")(5435,"strong"),tN(5436,"(opcional)"),sg()(),Tl(5437,"p"),tN(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg(),Tl(5439,"p")(5440,"strong"),tN(5441,"Componente compat\xEDvel"),sg(),tN(5442,": "),Tl(5443,"code"),tN(5444,"po-upload"),sg()()()(),Tl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),tN(5449," validate"),Gl(5450,"br"),sg()()(),Tl(5451,"td",21)(5452,"code",27),tN(5453,"string "),sg(),Tl(5454,"code",44),tN(5455," Function"),sg()(),Tl(5456,"td",24)(5457,"em")(5458,"strong"),tN(5459,"(opcional)"),sg()(),Tl(5460,"p"),tN(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Tl(5462,"strong"),tN(5463,"mudan\xE7as do campo"),sg(),tN(5464,"."),sg(),Tl(5465,"ul")(5466,"li"),tN(5467,"A propriedade aceita os seguintes tipos:"),sg()(),Tl(5468,"ul")(5469,"li")(5470,"strong"),tN(5471,"String"),sg(),tN(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Tl(5473,"code"),tN(5474,"POST"),sg(),tN(5475,"."),sg(),Tl(5476,"li")(5477,"strong"),tN(5478,"Function"),sg(),tN(5479,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(5480,"p"),tN(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Tl(5482,"code"),tN(5483,"PoDynamicFormFieldChanged"),sg(),tN(5484,":"),sg(),Tl(5485,"p")(5486,"code"),tN(5487,"{ property: 'property name', value: 'new value' }"),sg()(),Tl(5488,"p"),tN(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(5490,"a",82),tN(5491,"PoDynamicFormFieldValidation"),sg(),tN(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),sg(),Tl(5493,"pre")(5494,"code"),tN(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),sg()(),Tl(5496,"p"),tN(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(5498,"code"),tN(5499,"bind"),sg(),tN(5500,`, por exemplo:
`),Tl(5501,"code"),tN(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),sg()()()(),Tl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),tN(5507," visible"),Gl(5508,"br"),sg()()(),Tl(5509,"td",21)(5510,"code",29),tN(5511,"boolean"),sg()(),Tl(5512,"td",24)(5513,"em")(5514,"strong"),tN(5515,"(opcional)"),sg()(),Tl(5516,"p"),tN(5517,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()(),Tl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),tN(5522," yearRangeLimit"),Gl(5523,"br"),sg()()(),Tl(5524,"td",21)(5525,"code",45),tN(5526,"number"),sg()(),Tl(5527,"td",24)(5528,"em")(5529,"strong"),tN(5530,"(opcional)"),sg()(),Tl(5531,"p"),tN(5532,"Define o limite de anos exibidos na lista de anos do "),Tl(5533,"code"),tN(5534,"po-datepicker"),sg(),tN(5535," nos modos "),Tl(5536,"code"),tN(5537,"month-year"),sg(),tN(5538," e "),Tl(5539,"code"),tN(5540,"year"),sg(),tN(5541,"."),sg()()()(),Tl(5542,"h4",43)(5543,"code",5),tN(5544,"PoLookupColumn"),sg()(),Tl(5545,"div",2)(5546,"p"),tN(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),sg()(),Tl(5548,"h4",12),tN(5549,"Propriedades"),sg(),Tl(5550,"table",13)(5551,"tr",14)(5552,"th",15),tN(5553,"Nome"),sg(),Tl(5554,"th",15),tN(5555,"Tipo"),sg(),Tl(5556,"th",15),tN(5557,"Descri\xE7\xE3o"),sg()(),Tl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),tN(5562," fieldLabel"),Gl(5563,"br"),sg()()(),Tl(5564,"td",21)(5565,"code",29),tN(5566,"boolean"),sg()(),Tl(5567,"td",24)(5568,"em")(5569,"strong"),tN(5570,"(opcional)"),sg()(),Tl(5571,"p"),tN(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),sg(),Tl(5573,"p"),tN(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),sg(),Tl(5575,"p"),tN(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Tl(5577,"code"),tN(5578,"p-field-format"),sg(),tN(5579," ou "),Tl(5580,"code"),tN(5581,"p-field-label"),sg(),tN(5582," forem configurados no componente."),sg()()(),Tl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),tN(5587," format"),Gl(5588,"br"),sg()()(),Tl(5589,"td",21)(5590,"code",27),tN(5591,"string"),sg()(),Tl(5592,"td",24)(5593,"em")(5594,"strong"),tN(5595,"(opcional)"),sg()(),Tl(5596,"p"),tN(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),sg(),Tl(5598,"ul")(5599,"li"),tN(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),sg(),Tl(5601,"li"),tN(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg()()()(),Tl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),tN(5607," label"),Gl(5608,"br"),sg()()(),Tl(5609,"td",21)(5610,"code",27),tN(5611,"string"),sg()(),Tl(5612,"td",24)(5613,"em")(5614,"strong"),tN(5615,"(opcional)"),sg()(),Tl(5616,"p"),tN(5617,"Texto para t\xEDtulo da coluna."),sg(),Tl(5618,"p"),tN(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(5620,"em"),tN(5621,"label"),sg(),tN(5622," o valor da propriedade "),Tl(5623,"em"),tN(5624,"property"),sg(),tN(5625," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),tN(5630," property"),Gl(5631,"br"),sg()()(),Tl(5632,"td",21)(5633,"code",27),tN(5634,"string"),sg()(),Tl(5635,"td",24)(5636,"em")(5637,"strong"),tN(5638,"(opcional)"),sg()(),Tl(5639,"p"),tN(5640,"Nome identificador da coluna."),sg()()(),Tl(5641,"tr",16)(5642,"td",17)(5643,"div",25)(5644,"span",26),tN(5645," type"),Gl(5646,"br"),sg()()(),Tl(5647,"td",21)(5648,"code",27),tN(5649,"string"),sg()(),Tl(5650,"td",24)(5651,"em")(5652,"strong"),tN(5653,"(opcional)"),sg()(),Tl(5654,"p"),tN(5655,"Tipo da coluna:"),sg(),Tl(5656,"ul")(5657,"li"),tN(5658,"string (padr\xE3o): textos"),sg(),Tl(5659,"li"),tN(5660,"number: valores num\xE9ricos"),sg(),Tl(5661,"li"),tN(5662,"date: data"),sg(),Tl(5663,"li"),tN(5664,"currency: valores monet\xE1rios"),sg(),Tl(5665,"li"),tN(5666,"dateTime: data e hora"),sg()()()(),Tl(5667,"tr",16)(5668,"td",17)(5669,"div",25)(5670,"span",26),tN(5671," width"),Gl(5672,"br"),sg()()(),Tl(5673,"td",21)(5674,"code",27),tN(5675,"string"),sg()(),Tl(5676,"td",24)(5677,"em")(5678,"strong"),tN(5679,"(opcional)"),sg()(),Tl(5680,"p"),tN(5681,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),sg()()()(),Tl(5682,"h4",43)(5683,"code",5),tN(5684,"PoLookupFilter"),sg()(),Tl(5685,"div",2)(5686,"p"),tN(5687,"Define o tipo de busca utilizado no po-lookup."),sg()(),Tl(5688,"h4",12),tN(5689,"M\xE9todos"),sg(),Tl(5690,"table",41)(5691,"tr",16)(5692,"th",42)(5693,"div",25)(5694,"h4")(5695,"span",26),tN(5696," getFilteredItems "),sg()()()()(),Tl(5697,"tr",24)(5698,"td",24)(5699,"p"),tN(5700,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Tl(5701,"em"),tN(5702,"Observable"),sg(),tN(5703," com a resposta da API no formato da interface "),Tl(5704,"code"),tN(5705,"PoLookupResponseApi"),sg(),tN(5706,"."),sg()()()(),Tl(5707,"h5")(5708,"b"),tN(5709,"Par\xE2metros"),sg()(),Tl(5710,"table",13)(5711,"tr",14)(5712,"th",15),tN(5713,"Nome"),sg(),Tl(5714,"th",15),tN(5715,"Tipo"),sg(),Tl(5716,"th",15),tN(5717,"Descri\xE7\xE3o"),sg()(),Tl(5718,"tr",16)(5719,"td",17),tN(5720," params"),sg(),Tl(5721,"td",21)(5722,"code",83),tN(5723," PoLookupFilteredItemsParams "),sg()(),Tl(5724,"td",24)(5725,"p"),tN(5726,"Objeto enviado por par\xE2metro que implementa a interface "),Tl(5727,"code"),tN(5728,"PoLookupFilteredItemsParams"),sg(),tN(5729,"."),sg()()()(),Gl(5730,"br"),Tl(5731,"table",41)(5732,"tr",16)(5733,"th",42)(5734,"div",25)(5735,"h4")(5736,"span",26),tN(5737," getObjectByValue "),sg()()()()(),Tl(5738,"tr",24)(5739,"td",24)(5740,"p"),tN(5741,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),sg(),Tl(5742,"p"),tN(5743,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),sg()()()(),Tl(5744,"h5")(5745,"b"),tN(5746,"Par\xE2metros"),sg()(),Tl(5747,"table",13)(5748,"tr",14)(5749,"th",15),tN(5750,"Nome"),sg(),Tl(5751,"th",15),tN(5752,"Tipo"),sg(),Tl(5753,"th",15),tN(5754,"Descri\xE7\xE3o"),sg()(),Tl(5755,"tr",16)(5756,"td",17),tN(5757," value"),sg(),Tl(5758,"td",21)(5759,"code",27),tN(5760," string "),sg(),Tl(5761,"code",74),tN(5762," Array<any> "),sg()(),Tl(5763,"td",24)(5764,"p"),tN(5765,"Valor \xFAnico a ser buscado na fonte de dados."),sg()()(),Tl(5766,"tr",16)(5767,"td",17),tN(5768," filterParams"),sg(),Tl(5769,"td",21)(5770,"code",83),tN(5771," any "),sg()(),Tl(5772,"td",24)(5773,"p"),tN(5774,"Valor informado atrav\xE9s da propriedade "),Tl(5775,"code"),tN(5776,"p-filter-params"),sg(),tN(5777,"."),sg()()()(),Gl(5778,"br"),Tl(5779,"h4",43)(5780,"code",5),tN(5781,"PoLookupFilteredItemsParams"),sg()(),Tl(5782,"div",2)(5783,"p"),tN(5784,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Tl(5785,"code"),tN(5786,"getFilteredItems"),sg(),tN(5787,"."),sg()(),Tl(5788,"h4",12),tN(5789,"Propriedades"),sg(),Tl(5790,"table",13)(5791,"tr",14)(5792,"th",15),tN(5793,"Nome"),sg(),Tl(5794,"th",15),tN(5795,"Tipo"),sg(),Tl(5796,"th",15),tN(5797,"Descri\xE7\xE3o"),sg()(),Tl(5798,"tr",16)(5799,"td",17)(5800,"div",25)(5801,"span",26),tN(5802," advancedFilters"),Gl(5803,"br"),sg()()(),Tl(5804,"td",21)(5805,"code",84),tN(5806,`{ [key: string]: any;
}`),sg()(),Tl(5807,"td",24)(5808,"em")(5809,"strong"),tN(5810,"(opcional)"),sg()(),Tl(5811,"p"),tN(5812,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),sg()()(),Tl(5813,"tr",16)(5814,"td",17)(5815,"div",25)(5816,"span",26),tN(5817," filter"),Gl(5818,"br"),sg()()(),Tl(5819,"td",21)(5820,"code",27),tN(5821,"string"),sg()(),Tl(5822,"td",24)(5823,"em")(5824,"strong"),tN(5825,"(opcional)"),sg()(),Tl(5826,"p"),tN(5827,"Conte\xFAdo utilizado para filtrar a lista de itens."),sg()()(),Tl(5828,"tr",16)(5829,"td",17)(5830,"div",25)(5831,"span",26),tN(5832," filterParams"),Gl(5833,"br"),sg()()(),Tl(5834,"td",21)(5835,"code",33),tN(5836,"any"),sg()(),Tl(5837,"td",24)(5838,"em")(5839,"strong"),tN(5840,"(opcional)"),sg()(),Tl(5841,"p"),tN(5842,"Valor informado atrav\xE9s da propriedade "),Tl(5843,"code"),tN(5844,"p-filter-params"),sg(),tN(5845,"."),sg()()(),Tl(5846,"tr",16)(5847,"td",17)(5848,"div",25)(5849,"span",26),tN(5850," order"),Gl(5851,"br"),sg()()(),Tl(5852,"td",21)(5853,"code",27),tN(5854,"string"),sg()(),Tl(5855,"td",24)(5856,"em")(5857,"strong"),tN(5858,"(opcional)"),sg()(),Tl(5859,"p"),tN(5860,"Coluna que est\xE1 sendo ordenada na tabela."),sg(),Tl(5861,"ul")(5862,"li"),tN(5863,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Tl(5864,"code"),tN(5865,"-<colunaOrdenada>"),sg(),tN(5866,", por exemplo "),Tl(5867,"code"),tN(5868,"-name"),sg(),tN(5869,"."),sg(),Tl(5870,"li"),tN(5871,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Tl(5872,"code"),tN(5873,"<colunaOrdenada>"),sg(),tN(5874,", por exemplo "),Tl(5875,"code"),tN(5876,"name"),sg(),tN(5877,"."),sg()()()(),Tl(5878,"tr",16)(5879,"td",17)(5880,"div",25)(5881,"span",26),tN(5882," page"),Gl(5883,"br"),sg()()(),Tl(5884,"td",21)(5885,"code",45),tN(5886,"number"),sg()(),Tl(5887,"td",24)(5888,"em")(5889,"strong"),tN(5890,"(opcional)"),sg()(),Tl(5891,"p"),tN(5892,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),sg()()(),Tl(5893,"tr",16)(5894,"td",17)(5895,"div",25)(5896,"span",26),tN(5897," pageSize"),Gl(5898,"br"),sg()()(),Tl(5899,"td",21)(5900,"code",45),tN(5901,"number"),sg()(),Tl(5902,"td",24)(5903,"em")(5904,"strong"),tN(5905,"(opcional)"),sg()(),Tl(5906,"p"),tN(5907,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),sg()()()(),Tl(5908,"h4",43)(5909,"code",5),tN(5910,"PoLookupLiterals"),sg()(),Tl(5911,"div",2)(5912,"p"),tN(5913,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(5914,"code"),tN(5915,"po-lookup"),sg(),tN(5916,"."),sg()(),Tl(5917,"h4",12),tN(5918,"Propriedades"),sg(),Tl(5919,"table",13)(5920,"tr",14)(5921,"th",15),tN(5922,"Nome"),sg(),Tl(5923,"th",15),tN(5924,"Tipo"),sg(),Tl(5925,"th",15),tN(5926,"Descri\xE7\xE3o"),sg()(),Tl(5927,"tr",16)(5928,"td",17)(5929,"div",25)(5930,"span",26),tN(5931," clean"),Gl(5932,"br"),sg()()(),Tl(5933,"td",21)(5934,"code",27),tN(5935,"string"),sg()(),Tl(5936,"td",24)(5937,"em")(5938,"strong"),tN(5939,"(opcional)"),sg()(),Tl(5940,"p"),tN(5941,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),sg()()(),Tl(5942,"tr",16)(5943,"td",17)(5944,"div",25)(5945,"span",26),tN(5946," modalAdvancedSearch"),Gl(5947,"br"),sg()()(),Tl(5948,"td",21)(5949,"code",27),tN(5950,"string"),sg()(),Tl(5951,"td",24)(5952,"em")(5953,"strong"),tN(5954,"(opcional)"),sg()(),Tl(5955,"p"),tN(5956,"Texto do link de busca avan\xE7ada."),sg(),Tl(5957,"p"),tN(5958,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),sg()()(),Tl(5959,"tr",16)(5960,"td",17)(5961,"div",25)(5962,"span",26),tN(5963," modalAdvancedSearchPrimaryActionLabel"),Gl(5964,"br"),sg()()(),Tl(5965,"td",21)(5966,"code",27),tN(5967,"string"),sg()(),Tl(5968,"td",24)(5969,"em")(5970,"strong"),tN(5971,"(opcional)"),sg()(),Tl(5972,"p"),tN(5973,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),sg()()(),Tl(5974,"tr",16)(5975,"td",17)(5976,"div",25)(5977,"span",26),tN(5978," modalAdvancedSearchSecondaryActionLabel"),Gl(5979,"br"),sg()()(),Tl(5980,"td",21)(5981,"code",27),tN(5982,"string"),sg()(),Tl(5983,"td",24)(5984,"em")(5985,"strong"),tN(5986,"(opcional)"),sg()(),Tl(5987,"p"),tN(5988,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),sg()()(),Tl(5989,"tr",16)(5990,"td",17)(5991,"div",25)(5992,"span",26),tN(5993," modalAdvancedSearchTitle"),Gl(5994,"br"),sg()()(),Tl(5995,"td",21)(5996,"code",27),tN(5997,"string"),sg()(),Tl(5998,"td",24)(5999,"em")(6e3,"strong"),tN(6001,"(opcional)"),sg()(),Tl(6002,"p"),tN(6003,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),sg()()(),Tl(6004,"tr",16)(6005,"td",17)(6006,"div",25)(6007,"span",26),tN(6008," modalDisclaimerGroupTitle"),Gl(6009,"br"),sg()()(),Tl(6010,"td",21)(6011,"code",27),tN(6012,"string"),sg()(),Tl(6013,"td",24)(6014,"em")(6015,"strong"),tN(6016,"(opcional)"),sg()(),Tl(6017,"p"),tN(6018,"Texto exibido no t\xEDtulo do disclaimer."),sg()()(),Tl(6019,"tr",16)(6020,"td",17)(6021,"div",25)(6022,"span",26),tN(6023," modalPlaceholder"),Gl(6024,"br"),sg()()(),Tl(6025,"td",21)(6026,"code",27),tN(6027,"string"),sg()(),Tl(6028,"td",24)(6029,"em")(6030,"strong"),tN(6031,"(opcional)"),sg()(),Tl(6032,"p"),tN(6033,"Texto exibido no placeholder do input da modal."),sg()()(),Tl(6034,"tr",16)(6035,"td",17)(6036,"div",25)(6037,"span",26),tN(6038," modalPrimaryActionLabel"),Gl(6039,"br"),sg()()(),Tl(6040,"td",21)(6041,"code",27),tN(6042,"string"),sg()(),Tl(6043,"td",24)(6044,"em")(6045,"strong"),tN(6046,"(opcional)"),sg()(),Tl(6047,"p"),tN(6048,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),sg()()(),Tl(6049,"tr",16)(6050,"td",17)(6051,"div",25)(6052,"span",26),tN(6053," modalSecondaryActionLabel"),Gl(6054,"br"),sg()()(),Tl(6055,"td",21)(6056,"code",27),tN(6057,"string"),sg()(),Tl(6058,"td",24)(6059,"em")(6060,"strong"),tN(6061,"(opcional)"),sg()(),Tl(6062,"p"),tN(6063,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),sg()()(),Tl(6064,"tr",16)(6065,"td",17)(6066,"div",25)(6067,"span",26),tN(6068," modalTableLoadMoreData"),Gl(6069,"br"),sg()()(),Tl(6070,"td",21)(6071,"code",27),tN(6072,"string"),sg()(),Tl(6073,"td",24)(6074,"em")(6075,"strong"),tN(6076,"(opcional)"),sg()(),Tl(6077,"p"),tN(6078,"Label do "),Tl(6079,"code"),tN(6080,"button"),sg(),tN(6081," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),sg()()(),Tl(6082,"tr",16)(6083,"td",17)(6084,"div",25)(6085,"span",26),tN(6086," modalTableLoadingData"),Gl(6087,"br"),sg()()(),Tl(6088,"td",21)(6089,"code",27),tN(6090,"string"),sg()(),Tl(6091,"td",24)(6092,"em")(6093,"strong"),tN(6094,"(opcional)"),sg()(),Tl(6095,"p"),tN(6096,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),sg()()(),Tl(6097,"tr",16)(6098,"td",17)(6099,"div",25)(6100,"span",26),tN(6101," modalTableNoColumns"),Gl(6102,"br"),sg()()(),Tl(6103,"td",21)(6104,"code",27),tN(6105,"string"),sg()(),Tl(6106,"td",24)(6107,"em")(6108,"strong"),tN(6109,"(opcional)"),sg()(),Tl(6110,"p"),tN(6111,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),sg()()(),Tl(6112,"tr",16)(6113,"td",17)(6114,"div",25)(6115,"span",26),tN(6116," modalTableNoData"),Gl(6117,"br"),sg()()(),Tl(6118,"td",21)(6119,"code",27),tN(6120,"string"),sg()(),Tl(6121,"td",24)(6122,"em")(6123,"strong"),tN(6124,"(opcional)"),sg()(),Tl(6125,"p"),tN(6126,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),sg()()(),Tl(6127,"tr",16)(6128,"td",17)(6129,"div",25)(6130,"span",26),tN(6131," modalTitle"),Gl(6132,"br"),sg()()(),Tl(6133,"td",21)(6134,"code",27),tN(6135,"string"),sg()(),Tl(6136,"td",24)(6137,"em")(6138,"strong"),tN(6139,"(opcional)"),sg()(),Tl(6140,"p"),tN(6141,"Texto exibido no t\xEDtulo da modal."),sg()()(),Tl(6142,"tr",16)(6143,"td",17)(6144,"div",25)(6145,"span",26),tN(6146," search"),Gl(6147,"br"),sg()()(),Tl(6148,"td",21)(6149,"code",27),tN(6150,"string"),sg()(),Tl(6151,"td",24)(6152,"em")(6153,"strong"),tN(6154,"(opcional)"),sg()(),Tl(6155,"p"),tN(6156,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),sg()()()(),Tl(6157,"h4",43)(6158,"code",5),tN(6159,"PoLookupResponseApi"),sg()(),Tl(6160,"div",2)(6161,"p"),tN(6162,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),sg()(),Tl(6163,"h4",12),tN(6164,"Propriedades"),sg(),Tl(6165,"table",13)(6166,"tr",14)(6167,"th",15),tN(6168,"Nome"),sg(),Tl(6169,"th",15),tN(6170,"Tipo"),sg(),Tl(6171,"th",15),tN(6172,"Descri\xE7\xE3o"),sg()(),Tl(6173,"tr",16)(6174,"td",17)(6175,"div",25)(6176,"span",26),tN(6177," hasNext"),Gl(6178,"br"),sg()()(),Tl(6179,"td",21)(6180,"code",29),tN(6181,"boolean"),sg()(),Tl(6182,"td",24)(6183,"p"),tN(6184,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),sg()()(),Tl(6185,"tr",16)(6186,"td",17)(6187,"div",25)(6188,"span",26),tN(6189," items"),Gl(6190,"br"),sg()()(),Tl(6191,"td",21)(6192,"code",85),tN(6193,"Array<object>"),sg()(),Tl(6194,"td",24)(6195,"p"),tN(6196,"Lista de itens retornados."),sg()()()(),Tl(6197,"h3"),tN(6198,"Enums"),sg(),Tl(6199,"h4",4)(6200,"code",5),tN(6201,"PoTableColumnSpacing"),sg()(),Tl(6202,"div",2)(6203,"p"),tN(6204,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Tl(6205,"strong"),tN(6206,"p-spacing"),sg(),tN(6207,") do po-table."),sg()(),Tl(6208,"h4",12),tN(6209,"Propriedades"),sg(),Tl(6210,"table",13)(6211,"tr",14)(6212,"th",15),tN(6213,"Nome"),sg(),Tl(6214,"th",15),tN(6215,"Descri\xE7\xE3o"),sg()(),Tl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),tN(6220," ExtraSmall"),Gl(6221,"br"),sg()()(),Tl(6222,"td",24)(6223,"p"),tN(6224,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),sg()()(),Tl(6225,"tr",16)(6226,"td",17)(6227,"div",25)(6228,"span",26),tN(6229," Small"),Gl(6230,"br"),sg()()(),Tl(6231,"td",24)(6232,"p"),tN(6233,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(6234,"tr",16)(6235,"td",17)(6236,"div",25)(6237,"span",26),tN(6238," Medium"),Gl(6239,"br"),sg()()(),Tl(6240,"td",24)(6241,"p"),tN(6242,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(6243,"tr",16)(6244,"td",17)(6245,"div",25)(6246,"span",26),tN(6247," Large"),Gl(6248,"br"),sg()()(),Tl(6249,"td",24)(6250,"p"),tN(6251,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var We=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-lookup-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),sg()()()),l&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Me,_e,Oe,Ie,ze,Be,Re],encapsulation:2})}return a})();var xt=[{path:"",component:We}],Ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(xt),vL]})}return a})();var Ii=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ar,Ue]})}return a})();export{Ii as DocPoLookupModule};