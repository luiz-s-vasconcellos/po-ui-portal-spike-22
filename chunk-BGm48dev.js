import {f as fe,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,c as f,i as ib,c_ as t,r as r$1,I,c$ as Xi,aW as Yp,cM as cY,cN as lm,G,b$ as IT,z as N,bi as ay,d0 as J0,L as Gl,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht$1,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,aI as dc,b1 as mv,c4 as b3,b4 as L3,c8 as Tde,aJ as Whe,b5 as Ghe,c9 as jhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,Q as we,bd as Fx,a7 as gN,cQ as kk,cR as Ok,b7 as M3,d1 as jO,a4 as wN,aq as gx,br as uN,a5 as bN,at as mx,a3 as sNe,aA as Nx,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Gl(0,"po-lookup",0);},dependencies:[J0],encapsulation:2,changeDetection:1})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup Basic"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-lookup-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Xe,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,_e],encapsulation:2,changeDetection:1})}return a})();var j=(()=>{class a{httpClient=f(ib);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,s=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},s),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Oe=(()=>{class a{sampleFilterService=f(j);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Xi.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we([j])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let s=Sx();Tl(0,"po-lookup",1),ww("ngModelChange",function(m){return Ky(s),sN(o.lookup,m)||(o.lookup=m),Xy(m)}),ht$1("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"po-container",2)(3,"div",3),Gl(4,"po-info",4)(5,"po-info",5),sg()(),Gl(6,"po-divider"),Tl(7,"form",null,0)(9,"po-input",6),ww("ngModelChange",function(m){return Ky(s),sN(o.label,m)||(o.label=m),Xy(m)}),sg(),r0(),Tl(10,"po-checkbox-group",7),ww("ngModelChange",function(m){return Ky(s),sN(o.columnsName,m)||(o.columnsName=m),Xy(m)}),ht$1("p-change",function(){return o.updateColumns()}),sg(),r0(),Tl(11,"po-select",8),ww("ngModelChange",function(m){return Ky(s),sN(o.fieldLabel,m)||(o.fieldLabel=m),Xy(m)}),sg(),r0(),Tl(12,"po-select",9),ww("ngModelChange",function(m){return Ky(s),sN(o.fieldValue,m)||(o.fieldValue=m),Xy(m)}),sg(),r0(),Tl(13,"po-input",10),ww("ngModelChange",function(m){return Ky(s),sN(o.filterService,m)||(o.filterService=m),Xy(m)}),sg(),r0(),Tl(14,"po-input",11),ww("ngModelChange",function(m){return Ky(s),sN(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Xy(m)}),sg(),r0(),Tl(15,"po-input",12),ww("ngModelChange",function(m){return Ky(s),sN(o.help,m)||(o.help=m),Xy(m)}),sg(),r0(),Tl(16,"po-input",13),ww("ngModelChange",function(m){return Ky(s),sN(o.helperText,m)||(o.helperText=m),Xy(m)}),sg(),r0(),Tl(17,"po-input",14),ww("ngModelChange",function(m){return Ky(s),sN(o.placeholder,m)||(o.placeholder=m),Xy(m)}),sg(),r0(),Tl(18,"po-input",15),ww("ngModelChange",function(m){return Ky(s),sN(o.literals,m)||(o.literals=m),Xy(m)}),ht$1("p-change",function(){return o.changeLiterals()}),sg(),r0(),Tl(19,"po-input",16),ww("ngModelChange",function(m){return Ky(s),sN(o.formatField,m)||(o.formatField=m),Xy(m)}),ht$1("p-change",function(m){return o.onFieldFormatChange(m)}),sg(),r0(),Tl(20,"po-checkbox-group",17),ww("ngModelChange",function(m){return Ky(s),sN(o.properties,m)||(o.properties=m),Xy(m)}),sg(),r0(),Tl(21,"po-radio-group",18),ww("ngModelChange",function(m){return Ky(s),sN(o.spacing,m)||(o.spacing=m),Xy(m)}),sg(),r0(),Tl(22,"po-radio-group",19),ww("ngModelChange",function(m){return Ky(s),sN(o.size,m)||(o.size=m),Xy(m)}),sg(),r0(),Tl(23,"po-textarea",20),ww("ngModelChange",function(m){return Ky(s),sN(o.advancedFilters,m)||(o.advancedFilters=m),Xy(m)}),ht$1("p-change",function(){return o.changeAdvancedFilters()}),sg(),r0(),Tl(24,"div",3)(25,"po-button",21),ht$1("p-click",function(){return o.restore()}),sg()()();}l&2&&(Ew("ngModel",o.lookup),nw("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),o0(),Vp(4),nw("p-value",o.lookup),Vp(),nw("p-value",o.event),Vp(4),Ew("ngModel",o.label),o0(),Vp(),Ew("ngModel",o.columnsName),nw("p-options",o.columnsOptions),o0(),Vp(),Ew("ngModel",o.fieldLabel),nw("p-options",o.fieldLabelOptions),o0(),Vp(),Ew("ngModel",o.fieldValue),nw("p-options",o.fieldValueOptions),o0(),Vp(),Ew("ngModel",o.filterService),o0(),Vp(),Ew("ngModel",o.fieldErrorMessage),o0(),Vp(),Ew("ngModel",o.help),o0(),Vp(),Ew("ngModel",o.helperText),o0(),Vp(),Ew("ngModel",o.placeholder),o0(),Vp(),Ew("ngModel",o.literals),o0(),Vp(),Ew("ngModel",o.formatField),o0(),Vp(),Ew("ngModel",o.properties),nw("p-options",o.propertiesOptions),o0(),Vp(),Ew("ngModel",o.spacing),nw("p-options",o.typeSpacing),o0(),Vp(),Ew("ngModel",o.size),nw("p-options",o.sizeOptions),o0(),Vp(),Ew("ngModel",o.advancedFilters),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,dc,mv,b3,L3,J0,Tde,Whe,Ghe,jhe],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup Labs"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-lookup
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-lookup.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-labs"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,tt,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Oe],encapsulation:2,changeDetection:1})}return a})();var it=()=>({modalTitle:"Heroes available for mission"}),Ie=(()=>{class a{service=f(j);notification=f(Yp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we([j])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let s=Sx();Tl(0,"div",1),Gl(1,"po-info",2),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),ww("ngModelChange",function(m){return Ky(s),sN(o.hero,m)||(o.hero=m),Xy(m)}),sg(),r0(),Tl(7,"po-select",4),ww("ngModelChange",function(m){return Ky(s),sN(o.vehicle,m)||(o.vehicle=m),Xy(m)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-button",5),ht$1("p-click",function(){return o.startMission()}),sg()()();}if(l&2){let s=Fx(4);Vp(6),Ew("ngModel",o.hero),nw("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",gN(10,it)),o0(),Vp(),Ew("ngModel",o.vehicle),nw("p-options",o.vehicles),o0(),Vp(2),nw("p-disabled",s.form.invalid||s.form.pending);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,J0,Whe,jhe],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup - Hero"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-lookup.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-hero"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,at,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ie],encapsulation:2,changeDetection:1})}return a})();var rt=()=>["nickname","label"],mt=()=>({modalTitle:"Heroes available for mission"}),ze=(()=>{class a{service=f(j);notification=f(Yp);formBuilder=f(cY);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,lm.required],vehicle:[null,lm.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we([j])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Tl(0,"div",0),Gl(1,"po-info",1),sg(),Gl(2,"po-divider"),Tl(3,"form",2)(4,"div",0),Gl(5,"po-lookup",3),r0(),Gl(6,"po-select",4),r0(),sg(),Tl(7,"div",0)(8,"po-button",5),ht$1("p-click",function(){return o.startMission()}),sg()()()),l&2&&(Vp(3),nw("formGroup",o.formMission),Vp(2),nw("p-columns",o.columns)("p-field-format",gN(7,rt))("p-filter-service",o.service)("p-literals",gN(8,mt)),o0(),Vp(),nw("p-options",o.vehicles),o0(),Vp(2),nw("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[oY,nY,rY,kk,Ok,Qt,mv,J0,Whe,jhe],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup - Hero Reactive Form"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-lookup.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-hero-reactive-form"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,pt,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ze],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=f(ib);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let s={page:l.toString()};return r&&(s.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:s}).pipe(G(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(G(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ct(a,yt){if(a&1&&(Tl(0,"div",0),Gl(1,"po-table",3),sg()),a&2){let r=Nx();Vp(),nw("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ne=(()=>{class a{filterService=f(se);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we([se])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"po-radio-group",1),ww("ngModelChange",function(p){return sN(o.filterParams,p)||(o.filterParams=p),p}),sg(),r0(),sg(),Gl(2,"po-divider"),Tl(3,"div",0)(4,"po-lookup",2),wN(5,"titlecase"),ww("ngModelChange",function(p){return sN(o.entity,p)||(o.entity=p),p}),ht$1("p-selected",function(p){return o.onSelected(p)}),sg(),r0(),sg(),gx(6,ct,2,4,"div",0)),l&2&&(Vp(),Ew("ngModel",o.filterParams),nw("p-options",o.entities),o0(),Vp(3),nw("p-help",uN("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",uN("",bN(5,12,o.entityLabel)," of Star Wars")),Ew("ngModel",o.entity),nw("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),o0(),Vp(2),mx(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[nY,Sk,mv,J0,Tde,M3,jO],encapsulation:2,changeDetection:1})}return a})();var Et=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup - Star Wars films"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-sw-films"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Et,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ne],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{http=f(ib);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(IT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var We=(()=>{class a{service=f(Re);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"po-lookup",1),ww("ngModelChange",function(p){return sN(o.multiLookup,p)||(o.multiLookup=p),p}),ht$1("p-change",function(p){return o.changeOptions(p)}),sg(),r0(),Tl(2,"po-container",2),Gl(3,"po-table",3),sg()()),l&2&&(Vp(),Ew("ngModel",o.multiLookup),nw("p-multiple",true),o0(),Vp(2),nw("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[nY,Sk,dc,J0,M3],encapsulation:2,changeDetection:1})}return a})();var bt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup - Multiple"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-multiple"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,bt,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,We],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:"Maria Silva",cpf:"12345678901",phone:"11999887766",cep:"89201000",plate:"ABC1D23"},{value:2,name:"Jo\xE3o Santos",cpf:"98765432100",phone:"21988776655",cep:"01310100",plate:"XYZ4E56"},{value:3,name:"Ana Oliveira",cpf:"11122233344",phone:"47912345678",cep:"80010000",plate:"MNO7F89"},{value:4,name:"Carlos Souza",cpf:"55566677788",phone:"41987654321",cep:"88010000",plate:"QRS2G01"},{value:5,name:"Fernanda Lima",cpf:"99988877766",phone:"48991234567",cep:"89010000",plate:"DEF3H45"}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():"",o=l?this.items.filter(s=>s.name.toLowerCase().includes(l)||s.cpf.includes(l)||s.phone.includes(l)||s.cep.includes(l)||s.plate.toLowerCase().includes(l)):[...this.items];return N({items:o,hasNext:false}).pipe(ay(200))}getObjectByValue(r){return Array.isArray(r)?N(this.items.filter(l=>r.includes(l.value))).pipe(ay(200)):N(this.items.find(l=>String(l.value)===String(r))).pipe(ay(200))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=I({token:a,factory:a.\u0275fac})}return a})();var Ge=(()=>{class a{service=f(ce);person;columns=[{property:"name",label:"Nome"},{property:"cpf",label:"CPF",mask:"999.999.999-99"},{property:"phone",label:"Telefone",mask:"(99) 99999-9999"},{property:"cep",label:"CEP",mask:"99999-999"},{property:"plate",label:"Placa",mask:"@@@ 9w99"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-mask"]],standalone:false,features:[we([ce])],decls:2,vars:4,consts:[[1,"po-row"],["name","person","p-field-label","name","p-field-value","value","p-label","Pessoa","p-help","Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas",1,"po-md-12",3,"ngModelChange","ngModel","p-columns","p-filter-service","p-hide-columns-manager"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"po-lookup",1),ww("ngModelChange",function(p){return sN(o.person,p)||(o.person=p),p}),sg(),r0(),sg()),l&2&&(Vp(),Ew("ngModel",o.person),nw("p-columns",o.columns)("p-filter-service",o.service)("p-hide-columns-manager",true),o0());},dependencies:[nY,Sk,J0],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-mask-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Lookup - Mask"),sg(),Tl(4,"a",2),ht$1("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-lookup-mask/sample-po-lookup-mask.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
  <po-lookup
    name="person"
    class="po-md-12"
    [(ngModel)]="person"
    p-field-label="name"
    p-field-value="value"
    p-label="Pessoa"
    p-help="Selecione uma pessoa para ver as m\xE1scaras aplicadas nas colunas"
    [p-columns]="columns"
    [p-filter-service]="service"
    [p-hide-columns-manager]="true"
  >
  </po-lookup>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-lookup-mask/sample-po-lookup-mask.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn } from '@po-ui/ng-components';

import { SamplePoLookupMaskService } from './sample-po-lookup-mask.service';

@Component({
  selector: 'sample-po-lookup-mask',
  templateUrl: './sample-po-lookup-mask.component.html',
  providers: [SamplePoLookupMaskService],
  standalone: false
})
export class SamplePoLookupMaskComponent {
  service = inject(SamplePoLookupMaskService);

  person: string;

  readonly columns: Array<PoLookupColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99' },
    { property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' },
    { property: 'cep', label: 'CEP', mask: '99999-999' },
    { property: 'plate', label: 'Placa', mask: '@@@ 9w99' }
  ];
}
`),sg(),Tl(21,"label",6),iN(22,"sample-po-lookup-mask/sample-po-lookup-mask.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { PoLookupFilter, PoLookupFilteredItemsParams, PoLookupResponseApi } from '@po-ui/ng-components';

@Injectable()
export class SamplePoLookupMaskService implements PoLookupFilter {
  private readonly items = [
    { value: 1, name: 'Maria Silva', cpf: '12345678901', phone: '11999887766', cep: '89201000', plate: 'ABC1D23' },
    { value: 2, name: 'Jo\xE3o Santos', cpf: '98765432100', phone: '21988776655', cep: '01310100', plate: 'XYZ4E56' },
    { value: 3, name: 'Ana Oliveira', cpf: '11122233344', phone: '47912345678', cep: '80010000', plate: 'MNO7F89' },
    { value: 4, name: 'Carlos Souza', cpf: '55566677788', phone: '41987654321', cep: '88010000', plate: 'QRS2G01' },
    { value: 5, name: 'Fernanda Lima', cpf: '99988877766', phone: '48991234567', cep: '89010000', plate: 'DEF3H45' }
  ];

  getFilteredItems(params: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const filter = params.filter ? params.filter.toLowerCase() : '';

    const filtered = filter
      ? this.items.filter(
          item =>
            item.name.toLowerCase().includes(filter) ||
            item.cpf.includes(filter) ||
            item.phone.includes(filter) ||
            item.cep.includes(filter) ||
            item.plate.toLowerCase().includes(filter)
        )
      : [...this.items];

    return of({ items: filtered, hasNext: false }).pipe(delay(200));
  }

  getObjectByValue(value: string | Array<any>): Observable<any> {
    if (Array.isArray(value)) {
      return of(this.items.filter(item => value.includes(item.value))).pipe(delay(200));
    }
    return of(this.items.find(item => String(item.value) === String(value))).pipe(delay(200));
  }
}
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-lookup-mask"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ht,o.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ge],encapsulation:2,changeDetection:1})}return a})();var Je=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6326,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoLookupComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Tl(24,"code"),iN(25,"po-lookup"),sg(),iN(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Tl(27,"em"),iN(28,"TAB"),sg(),iN(29,` para
buscar um registro.`),sg(),Tl(30,"blockquote")(31,"p"),iN(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),sg()(),Tl(33,"blockquote")(34,"p"),iN(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Tl(36,"a",6),iN(37,"modelo"),sg(),iN(38," como "),Tl(39,"code"),iN(40,"pending"),sg(),iN(41,"."),sg()(),Tl(42,"p"),iN(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Tl(44,"code"),iN(45,"po-select"),sg(),iN(46," ou o "),Tl(47,"code"),iN(48,"po-combo"),sg(),iN(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(50,"a",7),iN(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),sg(),iN(52,"."),sg(),Tl(53,"p"),iN(54,"Importante:"),sg(),Tl(55,"ul")(56,"li"),iN(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Tl(58,"pre")(59,"code"),iN(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),sg()()()(),Tl(61,"h4"),iN(62,"Tokens customiz\xE1veis"),sg(),Tl(63,"p"),iN(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(65,"blockquote")(66,"p"),iN(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(68,"a",8),iN(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(70,"."),sg()(),Tl(71,"table")(72,"thead")(73,"tr")(74,"th"),iN(75,"Propriedade"),sg(),Tl(76,"th"),iN(77,"Descri\xE7\xE3o"),sg(),Tl(78,"th"),iN(79,"Valor Padr\xE3o"),sg()()(),Tl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),iN(84,"Default Values"),sg()(),Gl(85,"td")(86,"td"),sg(),Tl(87,"tr")(88,"td")(89,"code"),iN(90,"--font-family"),sg()(),Tl(91,"td"),iN(92,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(93,"td")(94,"code"),iN(95,"var(--font-family-theme)"),sg()()(),Tl(96,"tr")(97,"td")(98,"code"),iN(99,"--font-size"),sg()(),Tl(100,"td"),iN(101,"Tamanho da fonte"),sg(),Tl(102,"td")(103,"code"),iN(104,"var(--font-size-default)"),sg()()(),Tl(105,"tr")(106,"td")(107,"code"),iN(108,"--text-color-placeholder"),sg()(),Tl(109,"td"),iN(110,"Cor do texto no placeholder"),sg(),Tl(111,"td")(112,"code"),iN(113,"var(--color-neutral-light-30)"),sg()()(),Tl(114,"tr")(115,"td")(116,"code"),iN(117,"--color"),sg()(),Tl(118,"td"),iN(119,"Cor principal do lookup"),sg(),Tl(120,"td")(121,"code"),iN(122,"var(--color-neutral-dark-70)"),sg()()(),Tl(123,"tr")(124,"td")(125,"code"),iN(126,"--border-radius"),sg()(),Tl(127,"td"),iN(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(129,"td")(130,"code"),iN(131,"var(--border-radius-md)"),sg()()(),Tl(132,"tr")(133,"td")(134,"code"),iN(135,"--background"),sg()(),Tl(136,"td"),iN(137,"Cor de background"),sg(),Tl(138,"td")(139,"code"),iN(140,"var(--color-neutral-light-05)"),sg()()(),Tl(141,"tr")(142,"td")(143,"code"),iN(144,"--text-color"),sg()(),Tl(145,"td"),iN(146,"Cor do texto"),sg(),Tl(147,"td")(148,"code"),iN(149,"var(--color-neutral-dark-90)"),sg()()(),Tl(150,"tr")(151,"td")(152,"code"),iN(153,"--color-clear"),sg()(),Tl(154,"td"),iN(155,"Cor principal do icone clear"),sg(),Tl(156,"td")(157,"code"),iN(158,"var(--color-action-default)"),sg()()(),Tl(159,"tr")(160,"td")(161,"strong"),iN(162,"Icon"),sg()(),Gl(163,"td")(164,"td"),sg(),Tl(165,"tr")(166,"td")(167,"code"),iN(168,"--color-icon"),sg()(),Tl(169,"td"),iN(170,"Cor principal do icone pesquisar"),sg(),Tl(171,"td")(172,"code"),iN(173,"var(--color-action-default)"),sg()()(),Tl(174,"tr")(175,"td")(176,"strong"),iN(177,"Hover"),sg()(),Gl(178,"td")(179,"td"),sg(),Tl(180,"tr")(181,"td")(182,"code"),iN(183,"--color-hover"),sg()(),Tl(184,"td"),iN(185,"Cor principal no estado hover"),sg(),Tl(186,"td")(187,"code"),iN(188,"var(--color-brand-01-dark)"),sg()()(),Tl(189,"tr")(190,"td")(191,"code"),iN(192,"--background-hover"),sg()(),Tl(193,"td"),iN(194,"Cor de background no estado hover"),sg(),Tl(195,"td")(196,"code"),iN(197,"var(--color-brand-01-lightest)"),sg()()(),Tl(198,"tr")(199,"td")(200,"strong"),iN(201,"Focused"),sg()(),Gl(202,"td")(203,"td"),sg(),Tl(204,"tr")(205,"td")(206,"code"),iN(207,"--color-focused"),sg()(),Tl(208,"td"),iN(209,"Cor principal no estado de focus"),sg(),Tl(210,"td")(211,"code"),iN(212,"var(--color-action-default)"),sg()()(),Tl(213,"tr")(214,"td")(215,"code"),iN(216,"--outline-color-focused"),sg()(),Tl(217,"td"),iN(218,"Cor do outline do estado de focus"),sg(),Tl(219,"td")(220,"code"),iN(221,"var(--color-action-focus)"),sg()()(),Tl(222,"tr")(223,"td")(224,"strong"),iN(225,"Disabled"),sg()(),Gl(226,"td")(227,"td"),sg(),Tl(228,"tr")(229,"td")(230,"code"),iN(231,"--color-disabled"),sg()(),Tl(232,"td"),iN(233,"Cor principal no estado disabled"),sg(),Tl(234,"td")(235,"code"),iN(236,"var(--color-action-disabled)"),sg()()(),Tl(237,"tr")(238,"td")(239,"code"),iN(240,"--background-disabled"),sg()(),Tl(241,"td"),iN(242,"Cor de background no estado disabled"),sg(),Tl(243,"td")(244,"code"),iN(245,"var(--color-neutral-light-20)"),sg()()(),Tl(246,"tr")(247,"td")(248,"code"),iN(249,"--text-color-disabled"),sg()(),Tl(250,"td"),iN(251,"Cor do texto quando campo est\xE1 desabilitado"),sg(),Tl(252,"td")(253,"code"),iN(254,"var(--color-action-disabled)"),sg()()(),Tl(255,"tr")(256,"td")(257,"strong"),iN(258,"Error"),sg()(),Gl(259,"td")(260,"td"),sg(),Tl(261,"tr")(262,"td")(263,"code"),iN(264,"--color-error"),sg()(),Tl(265,"td"),iN(266,"Cor de background no estado de requerido"),sg(),Tl(267,"td")(268,"code"),iN(269,"var(--color-feedback-negative-base)"),sg()()()()()(),Tl(270,"div",9)(271,"h4",10),iN(272,"Seletor"),sg(),Tl(273,"pre",11),iN(274,`<po-lookup
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
`),sg()(),Tl(275,"h4",12),iN(276,"Propriedades"),sg(),Tl(277,"table",13)(278,"tr",14)(279,"th",15),iN(280,"Nome"),sg(),Tl(281,"th",15),iN(282,"Tipo"),sg(),Tl(283,"th",15),iN(284,"Padr\xE3o"),sg(),Tl(285,"th",15),iN(286,"Descri\xE7\xE3o"),sg()(),Tl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),iN(291," (p-additional-help)"),Gl(292,"br"),sg()(),Tl(293,"div",20),iN(294,"Deprecated"),sg()(),Tl(295,"td",21)(296,"code",22),iN(297,"EventEmitter"),sg()(),Tl(298,"td",23),iN(299,"-"),sg(),Tl(300,"td",24)(301,"em")(302,"strong"),iN(303,"(opcional)"),sg()(),Tl(304,"p"),iN(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(306,"blockquote")(307,"p"),iN(308,"Essa propriedade est\xE1 "),Tl(309,"strong"),iN(310,"depreciada"),sg(),iN(311," e ser\xE1 removida na vers\xE3o "),Tl(312,"code"),iN(313,"23.x.x"),sg(),iN(314,". Recomendamos utilizar a propriedade "),Tl(315,"code"),iN(316,"p-helper"),sg(),iN(317," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),iN(322," p-additional-help-tooltip"),Gl(323,"br"),sg()(),Tl(324,"div",20),iN(325,"Deprecated"),sg()(),Tl(326,"td",21)(327,"code",27),iN(328,"string"),sg()(),Tl(329,"td",23),iN(330,"-"),sg(),Tl(331,"td",24)(332,"em")(333,"strong"),iN(334,"(opcional)"),sg()(),Tl(335,"p"),iN(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(337,"code"),iN(338,"po-helper"),sg(),iN(339,`.
`),Tl(340,"strong"),iN(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(342,"blockquote")(343,"p"),iN(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(345,"blockquote")(346,"p"),iN(347,"Essa propriedade est\xE1 "),Tl(348,"strong"),iN(349,"depreciada"),sg(),iN(350," e ser\xE1 removida na vers\xE3o "),Tl(351,"code"),iN(352,"23.x.x"),sg(),iN(353,". Recomendamos utilizar a propriedade "),Tl(354,"code"),iN(355,"p-helper"),sg(),iN(356," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),iN(361," p-advanced-filters"),Gl(362,"br"),sg()()(),Tl(363,"td",21)(364,"code",28),iN(365,"Array<PoLookupAdvancedFilter>"),sg()(),Tl(366,"td",23),iN(367,"-"),sg(),Tl(368,"td",24)(369,"em")(370,"strong"),iN(371,"(opcional)"),sg()(),Tl(372,"p"),iN(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Tl(374,"blockquote")(375,"p"),iN(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Tl(377,"p"),iN(378,"Exemplo de URL com busca avan\xE7ada:"),sg(),Tl(379,"pre")(380,"code"),iN(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),sg()(),Tl(382,"p"),iN(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),sg(),Tl(384,"pre")(385,"code"),iN(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),sg()()()(),Tl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),iN(391," p-append-in-body"),Gl(392,"br"),sg()()(),Tl(393,"td",21)(394,"code",29),iN(395,"boolean"),sg()(),Tl(396,"td",23)(397,"p")(398,"code"),iN(399,"false"),sg()()(),Tl(400,"td",24)(401,"em")(402,"strong"),iN(403,"(opcional)"),sg()(),Tl(404,"p"),iN(405,"Define que o popover ("),Tl(406,"code"),iN(407,"p-helper"),sg(),iN(408," e/ou "),Tl(409,"code"),iN(410,"p-error-limit"),sg(),iN(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(412,"blockquote")(413,"p"),iN(414,"Quando utilizado com "),Tl(415,"code"),iN(416,"p-helper"),sg(),iN(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),iN(422," p-auto-focus"),Gl(423,"br"),sg()()(),Tl(424,"td",21)(425,"code",29),iN(426,"boolean"),sg()(),Tl(427,"td",23)(428,"p")(429,"code"),iN(430,"false"),sg()()(),Tl(431,"td",24)(432,"em")(433,"strong"),iN(434,"(opcional)"),sg()(),Tl(435,"p"),iN(436,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(437,"blockquote")(438,"p"),iN(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),iN(444," p-auto-height"),Gl(445,"br"),sg()()(),Tl(446,"td",21)(447,"code",29),iN(448,"boolean"),sg()(),Tl(449,"td",23)(450,"p")(451,"code"),iN(452,"false"),sg()()(),Tl(453,"td",24)(454,"em")(455,"strong"),iN(456,"(opcional)"),sg()(),Tl(457,"p"),iN(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),sg()()(),Tl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),iN(463," (p-change)"),Gl(464,"br"),sg()()(),Tl(465,"td",21)(466,"code",22),iN(467,"EventEmitter"),sg()(),Tl(468,"td",23),iN(469,"-"),sg(),Tl(470,"td",24)(471,"em")(472,"strong"),iN(473,"(opcional)"),sg()(),Tl(474,"p"),iN(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),sg()()(),Tl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),iN(480," (p-change-visible-columns)"),Gl(481,"br"),sg()()(),Tl(482,"td",21)(483,"code",22),iN(484,"EventEmitter"),sg()(),Tl(485,"td",23),iN(486,"-"),sg(),Tl(487,"td",24)(488,"em")(489,"strong"),iN(490,"(opcional)"),sg()(),Tl(491,"p"),iN(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(493,"p"),iN(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),iN(499," p-clean"),Gl(500,"br"),sg()()(),Tl(501,"td",21)(502,"code",29),iN(503,"boolean"),sg()(),Tl(504,"td",23),iN(505,"-"),sg(),Tl(506,"td",24)(507,"p"),iN(508,"Exibe um \xEDcone que permite limpar o campo."),sg()()(),Tl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),iN(513," (p-restore-column-manager)"),Gl(514,"br"),sg()()(),Tl(515,"td",21)(516,"code",22),iN(517,"EventEmitter"),sg()(),Tl(518,"td",23),iN(519,"-"),sg(),Tl(520,"td",24)(521,"em")(522,"strong"),iN(523,"(opcional)"),sg()(),Tl(524,"p"),iN(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(526,"p"),iN(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),iN(532," p-columns"),Gl(533,"br"),sg()()(),Tl(534,"td",21)(535,"code",30),iN(536,"Array<PoLookupColumn>"),sg()(),Tl(537,"td",23),iN(538,"-"),sg(),Tl(539,"td",24)(540,"em")(541,"strong"),iN(542,"(opcional)"),sg()(),Tl(543,"p"),iN(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),sg()()(),Tl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),iN(549," p-compact-label"),Gl(550,"br"),sg()()(),Tl(551,"td",21)(552,"code",29),iN(553,"boolean"),sg()(),Tl(554,"td",23)(555,"p")(556,"code"),iN(557,"false"),sg()()(),Tl(558,"td",24)(559,"em")(560,"strong"),iN(561,"(opcional)"),sg()(),Tl(562,"p"),iN(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(564,"p"),iN(565,"Quando habilitado ("),Tl(566,"code"),iN(567,"true"),sg(),iN(568,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(569,"ul")(570,"li")(571,"code"),iN(572,"po-label"),sg()(),Tl(573,"li")(574,"code"),iN(575,"p-requirement (showRequired)"),sg()(),Tl(576,"li")(577,"code"),iN(578,"po-helper"),sg()()(),Tl(579,"p"),iN(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(581,"p"),iN(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(583,"ul")(584,"li")(585,"code"),iN(586,"--field-container-title-justify"),sg()(),Tl(587,"li")(588,"code"),iN(589,"--field-container-title-flex"),sg()()(),Tl(590,"p"),iN(591,"Exemplo:"),sg(),Tl(592,"pre")(593,"code"),iN(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(595,"p"),iN(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),iN(601," p-disabled"),Gl(602,"br"),sg()()(),Tl(603,"td",21)(604,"code",29),iN(605,"boolean"),sg()(),Tl(606,"td",23)(607,"p"),iN(608,"false"),sg()(),Tl(609,"td",24)(610,"em")(611,"strong"),iN(612,"(opcional)"),sg()(),Tl(613,"p"),iN(614,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),iN(619," p-error-limit"),Gl(620,"br"),sg()()(),Tl(621,"td",21)(622,"code",29),iN(623,"boolean"),sg()(),Tl(624,"td",23)(625,"p")(626,"code"),iN(627,"false"),sg()()(),Tl(628,"td",24)(629,"em")(630,"strong"),iN(631,"(opcional)"),sg()(),Tl(632,"p"),iN(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(634,"blockquote")(635,"p"),iN(636,"Caso essa propriedade seja definida como "),Tl(637,"code"),iN(638,"true"),sg(),iN(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),iN(644," p-field-error-message"),Gl(645,"br"),sg()()(),Tl(646,"td",21)(647,"code",27),iN(648,"string"),sg()(),Tl(649,"td",23),iN(650,"-"),sg(),Tl(651,"td",24)(652,"em")(653,"strong"),iN(654,"(opcional)"),sg()(),Tl(655,"p"),iN(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(657,"blockquote")(658,"p"),iN(659,"Necess\xE1rio que a propriedade "),Tl(660,"code"),iN(661,"p-required"),sg(),iN(662," esteja habilitada."),sg()()()(),Tl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),iN(667," p-field-format"),Gl(668,"br"),sg()()(),Tl(669,"td",21)(670,"code",31),iN(671,"((value) => string) "),sg(),Tl(672,"code",32),iN(673," Array<string>"),sg()(),Tl(674,"td",23),iN(675,"-"),sg(),Tl(676,"td",24)(677,"em")(678,"strong"),iN(679,"(opcional)"),sg()(),Tl(680,"p"),iN(681,"Formato de exibi\xE7\xE3o do campo."),sg(),Tl(682,"p"),iN(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Tl(684,"em"),iN(685,"string"),sg(),iN(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),sg(),Tl(687,"pre")(688,"code"),iN(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),sg()(),Tl(690,"blockquote")(691,"p"),iN(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Tl(693,"code"),iN(694,"p-field-label"),sg(),iN(695," na descri\xE7\xE3o do campo."),sg()(),Tl(696,"p"),iN(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),sg(),Tl(698,"pre")(699,"code"),iN(700,`<po-lookup
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
`),sg()(),Tl(701,"blockquote")(702,"p"),iN(703,"Ser\xE1 utilizado "),Tl(704,"code"),iN(705,"-"),sg(),iN(706," como separador."),sg()()()(),Tl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),iN(711," p-field-label"),Gl(712,"br"),sg()()(),Tl(713,"td",21)(714,"code",27),iN(715,"string"),sg()(),Tl(716,"td",23),iN(717,"-"),sg(),Tl(718,"td",24)(719,"p"),iN(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),sg()()(),Tl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),iN(725," p-field-value"),Gl(726,"br"),sg()()(),Tl(727,"td",21)(728,"code",27),iN(729,"string"),sg()(),Tl(730,"td",23),iN(731,"-"),sg(),Tl(732,"td",24)(733,"p"),iN(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),sg(),Tl(735,"blockquote")(736,"p"),iN(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),sg()()()(),Tl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),iN(742," p-filter-params"),Gl(743,"br"),sg()()(),Tl(744,"td",21)(745,"code",33),iN(746,"any"),sg()(),Tl(747,"td",23),iN(748,"-"),sg(),Tl(749,"td",24)(750,"em")(751,"strong"),iN(752,"(opcional)"),sg()(),Tl(753,"p"),iN(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Tl(755,"code"),iN(756,"PoLookupFilter"),sg(),iN(757,"."),sg()()(),Tl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),iN(762," p-filter-service"),Gl(763,"br"),sg()()(),Tl(764,"td",21)(765,"code",27),iN(766,"string "),sg(),Tl(767,"code",34),iN(768," PoLookupFilter"),sg()(),Tl(769,"td",23),iN(770,"-"),sg(),Tl(771,"td",24)(772,"p"),iN(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Tl(774,"code"),iN(775,"PoLookupFilter"),sg(),iN(776," ou uma URL."),sg(),Tl(777,"p"),iN(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),sg(),Tl(779,"pre")(780,"code"),iN(781,`url + ?page=1&pageSize=20&filter=Peter
`),sg()(),Tl(782,"p"),iN(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Tl(784,"code"),iN(785,"order"),sg(),iN(786,", por exemplo:"),sg(),Tl(787,"ul")(788,"li")(789,"p"),iN(790,"Coluna decrescente:"),sg(),Tl(791,"pre")(792,"code"),iN(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),sg()()(),Tl(794,"li")(795,"p"),iN(796,"Coluna ascendente:"),sg(),Tl(797,"pre")(798,"code"),iN(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),sg()()()(),Tl(800,"p"),iN(801,"Se for definido a propriedade "),Tl(802,"code"),iN(803,"p-filter-params"),sg(),iN(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Tl(805,"code"),iN(806,"{ age: 23 }"),sg(),iN(807," a URL ficaria:"),sg(),Tl(808,"pre")(809,"code"),iN(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),sg()(),Tl(811,"p"),iN(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),sg(),Tl(813,"pre")(814,"code"),iN(815,`model = 1234;

GET url/1234
`),sg()(),Tl(816,"p"),iN(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),sg(),Tl(818,"pre")(819,"code"),iN(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),sg()(),Tl(821,"blockquote")(822,"p"),iN(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Tl(824,"a",7),iN(825,"API do PO UI"),sg(),iN(826,` e utiliza os valores
definidos nas propriedades `),Tl(827,"code"),iN(828,"p-field-label"),sg(),iN(829," e "),Tl(830,"code"),iN(831,"p-field-value"),sg(),iN(832," para a constru\xE7\xE3o do "),Tl(833,"code"),iN(834,"po-lookup"),sg(),iN(835,"."),sg()(),Tl(836,"p"),iN(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Tl(838,"em"),iN(839,"TAB"),sg(),iN(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Tl(841,"a",35),iN(842,"encodeURIComponent"),sg(),iN(843,`
e concatenado na URL da seguinte forma:`),sg(),Tl(844,"pre")(845,"code"),iN(846,`url/valor%20que%20se%20deseja%20filtrar
`),sg()(),Tl(847,"blockquote")(848,"p"),iN(849,"Quando informado um servi\xE7o que implemente a interface "),Tl(850,"code"),iN(851,"PoLookupFilter"),sg(),iN(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),sg()()()(),Tl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),iN(857," p-help"),Gl(858,"br"),sg()()(),Tl(859,"td",21)(860,"code",27),iN(861,"string"),sg()(),Tl(862,"td",23),iN(863,"-"),sg(),Tl(864,"td",24)(865,"em")(866,"strong"),iN(867,"(opcional)"),sg()(),Tl(868,"p"),iN(869,"Texto de apoio do campo."),sg()()(),Tl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),iN(874," p-hide-columns-manager"),Gl(875,"br"),sg()()(),Tl(876,"td",21)(877,"code",29),iN(878,"boolean"),sg()(),Tl(879,"td",23)(880,"p")(881,"code"),iN(882,"false"),sg()()(),Tl(883,"td",24)(884,"em")(885,"strong"),iN(886,"(opcional)"),sg()(),Tl(887,"p"),iN(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),sg()()(),Tl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),iN(893," p-infinite-scroll"),Gl(894,"br"),sg()()(),Tl(895,"td",21)(896,"code",29),iN(897,"boolean"),sg()(),Tl(898,"td",23)(899,"p")(900,"code"),iN(901,"false"),sg()()(),Tl(902,"td",24)(903,"em")(904,"strong"),iN(905,"(opcional)"),sg()(),Tl(906,"p"),iN(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),sg()()(),Tl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),iN(912," (p-keydown)"),Gl(913,"br"),sg()()(),Tl(914,"td",21)(915,"code",22),iN(916,"EventEmitter"),sg()(),Tl(917,"td",23),iN(918,"-"),sg(),Tl(919,"td",24)(920,"em")(921,"strong"),iN(922,"(opcional)"),sg()(),Tl(923,"p"),iN(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(925,"code"),iN(926,"KeyboardEvent"),sg(),iN(927," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),iN(932," p-label"),Gl(933,"br"),sg()()(),Tl(934,"td",21)(935,"code",27),iN(936,"string"),sg()(),Tl(937,"td",23),iN(938,"-"),sg(),Tl(939,"td",24)(940,"em")(941,"strong"),iN(942,"(opcional)"),sg()(),Tl(943,"p"),iN(944,"Label do campo."),sg(),Tl(945,"blockquote")(946,"p"),iN(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Tl(948,"code"),iN(949,"modalTitle"),sg(),iN(950," na propriedade "),Tl(951,"code"),iN(952,"p-literals"),sg(),iN(953,"."),sg()()()(),Tl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),iN(958," p-label-text-wrap"),Gl(959,"br"),sg()()(),Tl(960,"td",21)(961,"code",29),iN(962,"boolean"),sg()(),Tl(963,"td",23)(964,"p")(965,"code"),iN(966,"false"),sg()()(),Tl(967,"td",24)(968,"em")(969,"strong"),iN(970,"(opcional)"),sg()(),Tl(971,"p"),iN(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(973,"code"),iN(974,"p-label"),sg(),iN(975,". Quando "),Tl(976,"code"),iN(977,"p-label-text-wrap"),sg(),iN(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),iN(983," p-literals"),Gl(984,"br"),sg()()(),Tl(985,"td",21)(986,"code",36),iN(987,"PoLookupLiterals"),sg()(),Tl(988,"td",23),iN(989,"-"),sg(),Tl(990,"td",24)(991,"p"),iN(992,"Objeto com as literais usadas no "),Tl(993,"code"),iN(994,"po-lookup"),sg(),iN(995,"."),sg(),Tl(996,"p"),iN(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(998,"pre")(999,"code"),iN(1e3,`const customLiterals: PoLookupLiterals = {
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
`),sg()(),Tl(1001,"p"),iN(1002,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(1003,"pre")(1004,"code"),iN(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),sg()(),Tl(1006,"p"),iN(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(1008,"pre")(1009,"code"),iN(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),sg()(),Tl(1011,"blockquote")(1012,"p"),iN(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(1014,"a",37)(1015,"code"),iN(1016,"PoI18nService"),sg()(),iN(1017," ou do browser."),sg()()()(),Tl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),iN(1022," p-loading"),Gl(1023,"br"),sg()()(),Tl(1024,"td",21)(1025,"code",29),iN(1026,"boolean"),sg()(),Tl(1027,"td",23)(1028,"p")(1029,"code"),iN(1030,"false"),sg()()(),Tl(1031,"td",24)(1032,"em")(1033,"strong"),iN(1034,"(opcional)"),sg()(),Tl(1035,"p"),iN(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),iN(1041," p-multiple"),Gl(1042,"br"),sg()()(),Tl(1043,"td",21)(1044,"code",29),iN(1045,"boolean"),sg()(),Tl(1046,"td",23)(1047,"p")(1048,"code"),iN(1049,"false"),sg()()(),Tl(1050,"td",24)(1051,"em")(1052,"strong"),iN(1053,"(opcional)"),sg()(),Tl(1054,"p"),iN(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Tl(1056,"blockquote")(1057,"p"),iN(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Tl(1059,"code"),iN(1060,"[ 12345, 67890 ]"),sg()()()()(),Tl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),iN(1065," name"),Gl(1066,"br"),sg()()(),Tl(1067,"td",21)(1068,"code",27),iN(1069,"string"),sg()(),Tl(1070,"td",23),iN(1071,"-"),sg(),Tl(1072,"td",24)(1073,"p"),iN(1074,"Nome e Id do componente."),sg()()(),Tl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),iN(1079," p-no-autocomplete"),Gl(1080,"br"),sg()()(),Tl(1081,"td",21)(1082,"code",29),iN(1083,"boolean"),sg()(),Tl(1084,"td",23)(1085,"p")(1086,"code"),iN(1087,"false"),sg()()(),Tl(1088,"td",24)(1089,"em")(1090,"strong"),iN(1091,"(opcional)"),sg()(),Tl(1092,"p"),iN(1093,"Define a propriedade nativa "),Tl(1094,"code"),iN(1095,"autocomplete"),sg(),iN(1096," do campo como "),Tl(1097,"code"),iN(1098,"off"),sg(),iN(1099,"."),sg()()(),Tl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),iN(1104," (p-error)"),Gl(1105,"br"),sg()()(),Tl(1106,"td",21)(1107,"code",22),iN(1108,"EventEmitter"),sg()(),Tl(1109,"td",23),iN(1110,"-"),sg(),Tl(1111,"td",24)(1112,"p"),iN(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),sg()()(),Tl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),iN(1118," p-optional"),Gl(1119,"br"),sg()()(),Tl(1120,"td",21)(1121,"code",29),iN(1122,"boolean"),sg()(),Tl(1123,"td",23)(1124,"p")(1125,"code"),iN(1126,"false"),sg()()(),Tl(1127,"td",24)(1128,"em")(1129,"strong"),iN(1130,"(opcional)"),sg()(),Tl(1131,"p"),iN(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1133,"blockquote")(1134,"p"),iN(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1136,"ul")(1137,"li"),iN(1138,"O campo conter "),Tl(1139,"code"),iN(1140,"p-required"),sg(),iN(1141,";"),sg(),Tl(1142,"li"),iN(1143,"N\xE3o possuir "),Tl(1144,"code"),iN(1145,"p-help"),sg(),iN(1146," e/ou "),Tl(1147,"code"),iN(1148,"p-label"),sg(),iN(1149,"."),sg()()()(),Tl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),iN(1154," p-placeholder"),Gl(1155,"br"),sg()()(),Tl(1156,"td",21)(1157,"code",27),iN(1158,"string"),sg()(),Tl(1159,"td",23),iN(1160,"-"),sg(),Tl(1161,"td",24)(1162,"p"),iN(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),iN(1168," p-helper"),Gl(1169,"br"),sg()()(),Tl(1170,"td",21)(1171,"code",38),iN(1172,"PoHelperOptions "),sg(),Tl(1173,"code",27),iN(1174," string"),sg()(),Tl(1175,"td",23),iN(1176,"-"),sg(),Tl(1177,"td",24)(1178,"em")(1179,"strong"),iN(1180,"(opcional)"),sg()(),Tl(1181,"p"),iN(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1183,"code"),iN(1184,"p-label"),sg(),iN(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1186,"code"),iN(1187,"p-label"),sg(),iN(1188,"."),sg(),Tl(1189,"blockquote")(1190,"p"),iN(1191,"Para mais informa\xE7\xF5es acesse: "),Tl(1192,"a",39),iN(1193,"https://po-ui.io/documentation/po-helper"),sg(),iN(1194,"."),sg()(),Tl(1195,"blockquote")(1196,"p"),iN(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1198,"code"),iN(1199,"p-additional-help-tooltip"),sg(),iN(1200," e "),Tl(1201,"code"),iN(1202,"p-additional-help"),sg(),iN(1203,") ser\xE1 ignorado."),sg()()()(),Tl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),iN(1208," p-required"),Gl(1209,"br"),sg()()(),Tl(1210,"td",21)(1211,"code",29),iN(1212,"boolean"),sg()(),Tl(1213,"td",23)(1214,"p")(1215,"code"),iN(1216,"false"),sg()()(),Tl(1217,"td",24)(1218,"em")(1219,"strong"),iN(1220,"(opcional)"),sg()(),Tl(1221,"p"),iN(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1223,"blockquote")(1224,"p"),iN(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1226,"code"),iN(1227,"(p-disabled)"),sg(),iN(1228,"."),sg()()()(),Tl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),iN(1233," (p-selected)"),Gl(1234,"br"),sg()()(),Tl(1235,"td",21)(1236,"code",22),iN(1237,"EventEmitter"),sg()(),Tl(1238,"td",23),iN(1239,"-"),sg(),Tl(1240,"td",24)(1241,"em")(1242,"strong"),iN(1243,"(opcional)"),sg()(),Tl(1244,"p"),iN(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),sg()()(),Tl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),iN(1250," p-show-required"),Gl(1251,"br"),sg()()(),Tl(1252,"td",21)(1253,"code",29),iN(1254,"boolean"),sg()(),Tl(1255,"td",23),iN(1256,"-"),sg(),Tl(1257,"td",24)(1258,"p"),iN(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),sg(),Tl(1260,"blockquote")(1261,"p"),iN(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1263,"ul")(1264,"li"),iN(1265,"N\xE3o possuir "),Tl(1266,"code"),iN(1267,"p-help"),sg(),iN(1268," e/ou "),Tl(1269,"code"),iN(1270,"p-label"),sg(),iN(1271,"."),sg()()()(),Tl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),iN(1276," p-size"),Gl(1277,"br"),sg()()(),Tl(1278,"td",21)(1279,"code",27),iN(1280,"string"),sg()(),Tl(1281,"td",23)(1282,"p")(1283,"code"),iN(1284,"medium"),sg()()(),Tl(1285,"td",24)(1286,"em")(1287,"strong"),iN(1288,"(opcional)"),sg()(),Tl(1289,"p"),iN(1290,"Define o tamanho do componente:"),sg(),Tl(1291,"ul")(1292,"li")(1293,"code"),iN(1294,"small"),sg(),iN(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1296,"li")(1297,"code"),iN(1298,"medium"),sg(),iN(1299,": altura do input como 44px."),sg()(),Tl(1300,"blockquote")(1301,"p"),iN(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1303,"code"),iN(1304,"medium"),sg(),iN(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1306,"a",40),iN(1307,"po-theme"),sg(),iN(1308,"."),sg()()()(),Tl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),iN(1313," p-spacing"),Gl(1314,"br"),sg()()(),Tl(1315,"td",21)(1316,"code",27),iN(1317,"string"),sg()(),Tl(1318,"td",23)(1319,"p")(1320,"code"),iN(1321,"medium"),sg()()(),Tl(1322,"td",24)(1323,"em")(1324,"strong"),iN(1325,"(opcional)"),sg()(),Tl(1326,"p"),iN(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Tl(1328,"strong"),iN(1329,"PoTableColumnSpacing"),sg(),iN(1330,"."),sg(),Tl(1331,"blockquote")(1332,"p"),iN(1333,"Em n\xEDvel de acessibilidade "),Tl(1334,"strong"),iN(1335,"AA"),sg(),iN(1336,", caso o valor de "),Tl(1337,"code"),iN(1338,"p-spacing"),sg(),iN(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Tl(1340,"code"),iN(1341,"extraSmall"),sg(),iN(1342,`
nos seguintes cen\xE1rios:`),sg(),Tl(1343,"ul")(1344,"li"),iN(1345,"Quando o valor de "),Tl(1346,"code"),iN(1347,"p-size"),sg(),iN(1348," for "),Tl(1349,"code"),iN(1350,"small"),sg(),iN(1351,";"),sg(),Tl(1352,"li"),iN(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Tl(1354,"code"),iN(1355,"small"),sg(),iN(1356,` no
`),Tl(1357,"a",40),iN(1358,"servi\xE7o de tema"),sg(),iN(1359,"."),sg()()()()(),Tl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),iN(1364," p-text-wrap"),Gl(1365,"br"),sg()()(),Tl(1366,"td",21)(1367,"code",29),iN(1368,"boolean"),sg()(),Tl(1369,"td",23)(1370,"p")(1371,"code"),iN(1372,"false"),sg()()(),Tl(1373,"td",24)(1374,"em")(1375,"strong"),iN(1376,"(opcional)"),sg()(),Tl(1377,"p"),iN(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg(),Tl(1379,"p"),iN(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),sg(),Tl(1381,"blockquote")(1382,"p"),iN(1383,"Incompat\xEDvel com "),Tl(1384,"code"),iN(1385,"virtual-scroll"),sg(),iN(1386,", que requer altura fixa nas linhas."),sg()()()(),Tl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),iN(1391," p-virtual-scroll"),Gl(1392,"br"),sg()()(),Tl(1393,"td",21)(1394,"code",29),iN(1395,"boolean"),sg()(),Tl(1396,"td",23)(1397,"p")(1398,"code"),iN(1399,"true"),sg()()(),Tl(1400,"td",24)(1401,"em")(1402,"strong"),iN(1403,"(opcional)"),sg()(),Tl(1404,"p"),iN(1405,"Habilita o "),Tl(1406,"code"),iN(1407,"virtual-scroll"),sg(),iN(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Tl(1409,"code"),iN(1410,"virtual-scroll"),sg(),iN(1411," ser\xE1 ativado automaticamente."),sg(),Tl(1412,"blockquote")(1413,"p"),iN(1414,"Incompat\xEDvel com "),Tl(1415,"code"),iN(1416,"p-text-wrap"),sg(),iN(1417," e "),Tl(1418,"code"),iN(1419,"master-detail"),sg(),iN(1420,", pois o "),Tl(1421,"code"),iN(1422,"virtual-scroll"),sg(),iN(1423," exige altura fixa nas linhas."),sg()()()()(),Tl(1424,"h3",12),iN(1425,"M\xE9todos"),sg(),Tl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),iN(1432," focus "),sg()()()()(),Tl(1433,"tr",24)(1434,"td",24)(1435,"p"),iN(1436,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1437,"p"),iN(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1439,"pre")(1440,"code"),iN(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),sg()()()()(),Gl(1442,"br"),Tl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),iN(1449," showAdditionalHelp "),sg()()()()(),Tl(1450,"tr",24)(1451,"td",24)(1452,"p"),iN(1453,"M\xE9todo que exibe "),Tl(1454,"code"),iN(1455,"p-helper"),sg(),iN(1456," ou executa a a\xE7\xE3o definida em "),Tl(1457,"code"),iN(1458,"p-helper{eventOnClick}"),sg(),iN(1459," ou em "),Tl(1460,"code"),iN(1461,"p-additionalHelp"),sg(),iN(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1463,"code"),iN(1464,"p-keydown"),sg(),iN(1465,"."),sg(),Tl(1466,"blockquote")(1467,"p"),iN(1468,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1469,"code"),iN(1470,"po-helper"),sg(),iN(1471," quando o componente estiver com foco."),sg()(),Tl(1472,"pre")(1473,"code"),iN(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),sg()(),Tl(1475,"pre")(1476,"code"),iN(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1478,"br"),Tl(1479,"h3"),iN(1480,"Interfaces"),sg(),Tl(1481,"h4",43)(1482,"code",5),iN(1483,"PoLookupAdvancedFilter"),sg()(),Tl(1484,"div",2)(1485,"p"),iN(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),sg()(),Tl(1487,"h4",12),iN(1488,"Propriedades"),sg(),Tl(1489,"table",13)(1490,"tr",14)(1491,"th",15),iN(1492,"Nome"),sg(),Tl(1493,"th",15),iN(1494,"Tipo"),sg(),Tl(1495,"th",15),iN(1496,"Descri\xE7\xE3o"),sg()(),Tl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),iN(1501," additionalHelp"),Gl(1502,"br"),sg()()(),Tl(1503,"td",21)(1504,"code",44),iN(1505,"Function"),sg()(),Tl(1506,"td",24)(1507,"em")(1508,"strong"),iN(1509,"(opcional)"),sg()(),Tl(1510,"p"),iN(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(1512,"blockquote")(1513,"p"),iN(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),iN(1519," additionalHelpTooltip"),Gl(1520,"br"),sg()()(),Tl(1521,"td",21)(1522,"code",27),iN(1523,"string"),sg()(),Tl(1524,"td",24)(1525,"em")(1526,"strong"),iN(1527,"(opcional)"),sg()(),Tl(1528,"p"),iN(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(1530,"code"),iN(1531,"po-helper"),sg(),iN(1532,`.
`),Tl(1533,"strong"),iN(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(1535,"blockquote")(1536,"p"),iN(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),iN(1542," advancedFilters"),Gl(1543,"br"),sg()()(),Tl(1544,"td",21)(1545,"code",28),iN(1546,"Array<PoLookupAdvancedFilter>"),sg()(),Tl(1547,"td",24)(1548,"em")(1549,"strong"),iN(1550,"(opcional)"),sg()(),Tl(1551,"p"),iN(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Tl(1553,"blockquote")(1554,"p"),iN(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Tl(1556,"p"),iN(1557,"Exemplo de URL com busca avan\xE7ada:"),sg(),Tl(1558,"p")(1559,"code"),iN(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),sg()(),Tl(1561,"p"),iN(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),sg(),Tl(1563,"p")(1564,"code"),iN(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),sg()()()(),Tl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),iN(1570," appendBox"),Gl(1571,"br"),sg()()(),Tl(1572,"td",21)(1573,"code",29),iN(1574,"boolean"),sg()(),Tl(1575,"td",24)(1576,"em")(1577,"strong"),iN(1578,"(opcional)"),sg()(),Tl(1579,"p"),iN(1580,"Define que o "),Tl(1581,"code"),iN(1582,"listbox"),sg(),iN(1583," e/ou popover ("),Tl(1584,"code"),iN(1585,"p-helper"),sg(),iN(1586," e/ou "),Tl(1587,"code"),iN(1588,"p-error-limit"),sg(),iN(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(1590,"blockquote")(1591,"p"),iN(1592,"Quando utilizado com "),Tl(1593,"code"),iN(1594,"p-helper"),sg(),iN(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),iN(1600," autoHeight"),Gl(1601,"br"),sg()()(),Tl(1602,"td",21)(1603,"code",29),iN(1604,"boolean"),sg()(),Tl(1605,"td",24)(1606,"em")(1607,"strong"),iN(1608,"(opcional)"),sg()(),Tl(1609,"p"),iN(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),sg(),Tl(1611,"p")(1612,"strong"),iN(1613,"Componentes compat\xEDveis:"),sg(),Tl(1614,"code"),iN(1615,"po-multiselect"),sg(),iN(1616,", "),Tl(1617,"code"),iN(1618,"po-lookup"),sg(),iN(1619,"."),sg()()(),Tl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),iN(1624," autoUpload"),Gl(1625,"br"),sg()()(),Tl(1626,"td",21)(1627,"code",29),iN(1628,"boolean"),sg()(),Tl(1629,"td",24)(1630,"em")(1631,"strong"),iN(1632,"(opcional)"),sg()(),Tl(1633,"p"),iN(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Tl(1635,"p")(1636,"strong"),iN(1637,"Componente compat\xEDvel"),sg(),iN(1638,": "),Tl(1639,"code"),iN(1640,"po-upload"),sg()()()(),Tl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),iN(1645," booleanFalse"),Gl(1646,"br"),sg()()(),Tl(1647,"td",21)(1648,"code",27),iN(1649,"string"),sg()(),Tl(1650,"td",24)(1651,"em")(1652,"strong"),iN(1653,"(opcional)"),sg()(),Tl(1654,"p"),iN(1655,"Texto exibido quando o valor do componente for "),Tl(1656,"em"),iN(1657,"false"),sg(),iN(1658,"."),sg()()(),Tl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),iN(1663," booleanTrue"),Gl(1664,"br"),sg()()(),Tl(1665,"td",21)(1666,"code",27),iN(1667,"string"),sg()(),Tl(1668,"td",24)(1669,"em")(1670,"strong"),iN(1671,"(opcional)"),sg()(),Tl(1672,"p"),iN(1673,"Texto exibido quando o valor do componente for "),Tl(1674,"em"),iN(1675,"true"),sg(),iN(1676,"."),sg()()(),Tl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),iN(1681," changeOnEnter"),Gl(1682,"br"),sg()()(),Tl(1683,"td",21)(1684,"code",29),iN(1685,"boolean"),sg()(),Tl(1686,"td",24)(1687,"em")(1688,"strong"),iN(1689,"(opcional)"),sg()(),Tl(1690,"p"),iN(1691,"Indica que o evento "),Tl(1692,"code"),iN(1693,"p-change"),sg(),iN(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Tl(1695,"code"),iN(1696,"po-combo"),sg(),iN(1697,"."),sg()()(),Tl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),iN(1702," changeVisibleColumns"),Gl(1703,"br"),sg()()(),Tl(1704,"td",21)(1705,"code",44),iN(1706,"Function"),sg()(),Tl(1707,"td",24)(1708,"em")(1709,"strong"),iN(1710,"(opcional)"),sg()(),Tl(1711,"p"),iN(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(1713,"p"),iN(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(1715,"p")(1716,"strong"),iN(1717,"Componente compat\xEDvel"),sg(),iN(1718,": "),Tl(1719,"code"),iN(1720,"po-lookup"),sg()()()(),Tl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),iN(1725," clean"),Gl(1726,"br"),sg()()(),Tl(1727,"td",21)(1728,"code",29),iN(1729,"boolean"),sg()(),Tl(1730,"td",24)(1731,"em")(1732,"strong"),iN(1733,"(opcional)"),sg()(),Tl(1734,"p"),iN(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg(),Tl(1736,"p")(1737,"strong"),iN(1738,"Componentes compat\xEDveis:"),sg(),Tl(1739,"code"),iN(1740,"po-datepicker"),sg(),iN(1741,", "),Tl(1742,"code"),iN(1743,"po-datepicker-range"),sg(),iN(1744,", "),Tl(1745,"code"),iN(1746,"po-input"),sg(),iN(1747,", "),Tl(1748,"code"),iN(1749,"po-number"),sg(),iN(1750,", "),Tl(1751,"code"),iN(1752,"po-decimal"),sg(),iN(1753,`,
`),Tl(1754,"code"),iN(1755,"po-combo"),sg(),iN(1756,", "),Tl(1757,"code"),iN(1758,"po-lookup"),sg(),iN(1759,", "),Tl(1760,"code"),iN(1761,"po-password"),sg(),iN(1762,", "),Tl(1763,"code"),iN(1764,"po-timepicker"),sg(),iN(1765,"."),sg()()(),Tl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),iN(1770," columnRestoreManager"),Gl(1771,"br"),sg()()(),Tl(1772,"td",21)(1773,"code",44),iN(1774,"Function"),sg()(),Tl(1775,"td",24)(1776,"em")(1777,"strong"),iN(1778,"(opcional)"),sg()(),Tl(1779,"p"),iN(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(1781,"p"),iN(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(1783,"p")(1784,"strong"),iN(1785,"Componente compat\xEDvel"),sg(),iN(1786,": "),Tl(1787,"code"),iN(1788,"po-lookup"),sg()()()(),Tl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),iN(1793," columns"),Gl(1794,"br"),sg()()(),Tl(1795,"td",21)(1796,"code",30),iN(1797,"Array<PoLookupColumn> "),sg(),Tl(1798,"code",45),iN(1799," number"),sg()(),Tl(1800,"td",24)(1801,"em")(1802,"strong"),iN(1803,"(opcional)"),sg()(),Tl(1804,"p"),iN(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Tl(1806,"code"),iN(1807,"searchService"),sg(),iN(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Tl(1809,"a",46)(1810,"code"),iN(1811,"PoLookupColumn"),sg()(),iN(1812,"."),sg(),Tl(1813,"blockquote")(1814,"p"),iN(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Tl(1816,"em"),iN(1817,"label"),sg(),iN(1818," e "),Tl(1819,"em"),iN(1820,"value"),sg(),iN(1821,` para valores
de tela e do model respectivamente.`),sg()(),Tl(1822,"p")(1823,"strong"),iN(1824,"Componentes compat\xEDveis:"),sg(),Tl(1825,"code"),iN(1826,"po-radio-group"),sg(),iN(1827,", "),Tl(1828,"code"),iN(1829,"po-lookup"),sg(),iN(1830,", "),Tl(1831,"code"),iN(1832,"po-checkbox-group"),sg(),iN(1833,"."),sg()()(),Tl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),iN(1838," compactLabel"),Gl(1839,"br"),sg()()(),Tl(1840,"td",21)(1841,"code",29),iN(1842,"boolean"),sg()(),Tl(1843,"td",24)(1844,"em")(1845,"strong"),iN(1846,"(opcional)"),sg()(),Tl(1847,"p"),iN(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(1849,"p"),iN(1850,"Quando habilitado ("),Tl(1851,"code"),iN(1852,"true"),sg(),iN(1853,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(1854,"ul")(1855,"li")(1856,"code"),iN(1857,"po-label"),sg()(),Tl(1858,"li")(1859,"code"),iN(1860,"p-requirement (showRequired)"),sg()(),Tl(1861,"li")(1862,"code"),iN(1863,"po-helper"),sg()()(),Tl(1864,"p"),iN(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(1866,"p"),iN(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(1868,"ul")(1869,"li")(1870,"code"),iN(1871,"--field-container-title-justify"),sg()(),Tl(1872,"li")(1873,"code"),iN(1874,"--field-container-title-flex"),sg()()(),Tl(1875,"p"),iN(1876,"Exemplo:"),sg(),Tl(1877,"pre")(1878,"code"),iN(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(1880,"p"),iN(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),iN(1886," container"),Gl(1887,"br"),sg()()(),Tl(1888,"td",21)(1889,"code",27),iN(1890,"string"),sg()(),Tl(1891,"td",24)(1892,"em")(1893,"strong"),iN(1894,"(opcional)"),sg()(),Tl(1895,"p"),iN(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Tl(1897,"p"),iN(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Tl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),iN(1903," customAction"),Gl(1904,"br"),sg()()(),Tl(1905,"td",21)(1906,"code",47),iN(1907,"PoProgressAction"),sg()(),Tl(1908,"td",24)(1909,"em")(1910,"strong"),iN(1911,"(opcional)"),sg()(),Tl(1912,"p"),iN(1913,"Define uma a\xE7\xE3o personalizada no componente "),Tl(1914,"code"),iN(1915,"po-upload"),sg(),iN(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Tl(1917,"p")(1918,"strong"),iN(1919,"Componente compat\xEDvel"),sg(),iN(1920,": "),Tl(1921,"code"),iN(1922,"po-upload"),sg(),iN(1923,","),sg(),Tl(1924,"p")(1925,"strong"),iN(1926,"Exemplo de configura\xE7\xE3o"),sg(),iN(1927,":"),sg(),Tl(1928,"pre")(1929,"code",48),iN(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),sg()()()(),Tl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),iN(1935," customActionClick"),Gl(1936,"br"),sg()()(),Tl(1937,"td",21)(1938,"code",49),iN(1939,"(file: PoUploadFile) => void"),sg()(),Tl(1940,"td",24)(1941,"em")(1942,"strong"),iN(1943,"(opcional)"),sg()(),Tl(1944,"p"),iN(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Tl(1946,"code"),iN(1947,"p-custom-action"),sg(),iN(1948,"."),sg(),Tl(1949,"p")(1950,"strong"),iN(1951,"Componente compat\xEDvel"),sg(),iN(1952,": "),Tl(1953,"code"),iN(1954,"po-upload"),sg(),iN(1955,","),sg(),Tl(1956,"p"),iN(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Tl(1958,"p")(1959,"strong"),iN(1960,"Par\xE2metro do evento"),sg(),iN(1961,":"),sg(),Tl(1962,"ul")(1963,"li")(1964,"code"),iN(1965,"file"),sg(),iN(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Tl(1967,"code"),iN(1968,"PoUploadFile"),sg(),iN(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),sg()(),Tl(1970,"p")(1971,"strong"),iN(1972,"Exemplo de uso"),sg(),iN(1973,":"),sg(),Tl(1974,"pre")(1975,"code",48),iN(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),sg()()()(),Tl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),iN(1981," debounceTime"),Gl(1982,"br"),sg()()(),Tl(1983,"td",21)(1984,"code",45),iN(1985,"number"),sg()(),Tl(1986,"td",24)(1987,"em")(1988,"strong"),iN(1989,"(opcional)"),sg()(),Tl(1990,"p"),iN(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Tl(1992,"code"),iN(1993,"p-filter-service"),sg(),iN(1994,")."),sg(),Tl(1995,"p")(1996,"strong"),iN(1997,"Componentes compat\xEDveis:"),sg(),Tl(1998,"code"),iN(1999,"po-combo"),sg(),iN(2e3,", "),Tl(2001,"code"),iN(2002,"po-multiselect"),sg(),iN(2003,"."),sg()()(),Tl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),iN(2008," decimalsLength"),Gl(2009,"br"),sg()()(),Tl(2010,"td",21)(2011,"code",45),iN(2012,"number"),sg()(),Tl(2013,"td",24)(2014,"em")(2015,"strong"),iN(2016,"(opcional)"),sg()(),Tl(2017,"p"),iN(2018,"Quantidade m\xE1xima de casas decimais."),sg(),Tl(2019,"blockquote")(2020,"p"),iN(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(2022,"code"),iN(2023,"type"),sg(),iN(2024," for "),Tl(2025,"em"),iN(2026,"currency"),sg(),iN(2027," ou "),Tl(2028,"em"),iN(2029,"decimal"),sg(),iN(2030,"."),sg()()()(),Tl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),iN(2035," directory"),Gl(2036,"br"),sg()()(),Tl(2037,"td",21)(2038,"code",29),iN(2039,"boolean"),sg()(),Tl(2040,"td",24)(2041,"em")(2042,"strong"),iN(2043,"(opcional)"),sg()(),Tl(2044,"p"),iN(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Tl(2046,"blockquote")(2047,"p"),iN(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Tl(2049,"blockquote")(2050,"p"),iN(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Tl(2052,"strong"),iN(2053,"Internet Explorer"),sg(),iN(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()(),Tl(2055,"p")(2056,"strong"),iN(2057,"Componente compat\xEDvel"),sg(),iN(2058,": "),Tl(2059,"code"),iN(2060,"po-upload"),sg()()()(),Tl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),iN(2065," disabled"),Gl(2066,"br"),sg()()(),Tl(2067,"td",21)(2068,"code",29),iN(2069,"boolean"),sg()(),Tl(2070,"td",24)(2071,"em")(2072,"strong"),iN(2073,"(opcional)"),sg()(),Tl(2074,"p"),iN(2075,"Desabilita o campo caso informar o valor "),Tl(2076,"em"),iN(2077,"true"),sg(),iN(2078,"."),sg()()(),Tl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),iN(2083," disabledInitFilter"),Gl(2084,"br"),sg()()(),Tl(2085,"td",21)(2086,"code",29),iN(2087,"boolean"),sg()(),Tl(2088,"td",24)(2089,"em")(2090,"strong"),iN(2091,"(opcional)"),sg()(),Tl(2092,"p"),iN(2093,"Desabilita o filtro inicial no servi\xE7o do "),Tl(2094,"code"),iN(2095,"po-combo"),sg(),iN(2096,", que \xE9 executado no primeiro clique no campo."),sg()()(),Tl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),iN(2101," disabledTabFilter"),Gl(2102,"br"),sg()()(),Tl(2103,"td",21)(2104,"code",29),iN(2105,"boolean"),sg()(),Tl(2106,"td",24)(2107,"em")(2108,"strong"),iN(2109,"(opcional)"),sg()(),Tl(2110,"p"),iN(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Tl(2112,"code"),iN(2113,"po-combo"),sg(),iN(2114,"."),sg()()(),Tl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),iN(2119," divider"),Gl(2120,"br"),sg()()(),Tl(2121,"td",21)(2122,"code",27),iN(2123,"string"),sg()(),Tl(2124,"td",24)(2125,"em")(2126,"strong"),iN(2127,"(opcional)"),sg()(),Tl(2128,"p"),iN(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Tl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),iN(2134," dragDrop"),Gl(2135,"br"),sg()()(),Tl(2136,"td",21)(2137,"code",29),iN(2138,"boolean"),sg()(),Tl(2139,"td",24)(2140,"em")(2141,"strong"),iN(2142,"(opcional)"),sg()(),Tl(2143,"p"),iN(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Tl(2145,"blockquote")(2146,"p"),iN(2147,"Recomendamos utilizar apenas um "),Tl(2148,"code"),iN(2149,"po-upload"),sg(),iN(2150," com esta funcionalidade por tela."),sg()(),Tl(2151,"p")(2152,"strong"),iN(2153,"Componente compat\xEDvel"),sg(),iN(2154,": "),Tl(2155,"code"),iN(2156,"po-upload"),sg()()()(),Tl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),iN(2161," dragDropHeight"),Gl(2162,"br"),sg()()(),Tl(2163,"td",21)(2164,"code",45),iN(2165,"number"),sg()(),Tl(2166,"td",24)(2167,"em")(2168,"strong"),iN(2169,"(opcional)"),sg()(),Tl(2170,"p"),iN(2171,"Define em "),Tl(2172,"em"),iN(2173,"pixels"),sg(),iN(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Tl(2175,"code"),iN(2176,"160px"),sg(),iN(2177,"."),sg(),Tl(2178,"blockquote")(2179,"p"),iN(2180,"Esta propriedade funciona somente se a propriedade "),Tl(2181,"code"),iN(2182,"p-drag-drop"),sg(),iN(2183," estiver habilitada."),sg()(),Tl(2184,"p")(2185,"strong"),iN(2186,"Componente compat\xEDvel"),sg(),iN(2187,": "),Tl(2188,"code"),iN(2189,"po-upload"),sg()()()(),Tl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),iN(2194," errorAsyncFunction"),Gl(2195,"br"),sg()()(),Tl(2196,"td",21)(2197,"code",50),iN(2198,"(value) => Observable<boolean>"),sg()(),Tl(2199,"td",24)(2200,"em")(2201,"strong"),iN(2202,"(opcional)"),sg()(),Tl(2203,"p"),iN(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(2205,"code"),iN(2206,"change"),sg(),iN(2207," ou "),Tl(2208,"code"),iN(2209,"change-model"),sg(),iN(2210,", dependendo do valor da propriedade "),Tl(2211,"code"),iN(2212,"triggerMode"),sg(),iN(2213,"."),sg(),Tl(2214,"blockquote")(2215,"p"),iN(2216,"Retorna "),Tl(2217,"code"),iN(2218,"Observable com o valor true"),sg(),iN(2219," para sinalizar o erro "),Tl(2220,"code"),iN(2221,"false"),sg(),iN(2222," para indicar que n\xE3o h\xE1 erro."),sg()(),Tl(2223,"p")(2224,"strong"),iN(2225,"Componente compat\xEDvel"),sg(),iN(2226,": "),Tl(2227,"code"),iN(2228,"po-datepicker"),sg()()()(),Tl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),iN(2233," errorAsyncProperties"),Gl(2234,"br"),sg()()(),Tl(2235,"td",21)(2236,"code",51),iN(2237,"ErrorAsyncProperties"),sg()(),Tl(2238,"td",24)(2239,"em")(2240,"strong"),iN(2241,"(opcional)"),sg()(),Tl(2242,"p"),iN(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),sg(),Tl(2244,"p")(2245,"strong"),iN(2246,"Componentes compat\xEDveis:"),sg(),Tl(2247,"code"),iN(2248,"po-input"),sg(),iN(2249,", "),Tl(2250,"code"),iN(2251,"po-number"),sg(),iN(2252,", "),Tl(2253,"code"),iN(2254,"po-decimal"),sg(),iN(2255,", "),Tl(2256,"code"),iN(2257,"po-password"),sg(),iN(2258,"."),sg()()(),Tl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),iN(2263," errorLimit"),Gl(2264,"br"),sg()()(),Tl(2265,"td",21)(2266,"code",29),iN(2267,"boolean"),sg()(),Tl(2268,"td",24)(2269,"em")(2270,"strong"),iN(2271,"(opcional)"),sg()(),Tl(2272,"p"),iN(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(2274,"blockquote")(2275,"p"),iN(2276,"Caso essa propriedade seja definida como "),Tl(2277,"code"),iN(2278,"true"),sg(),iN(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()(),Tl(2280,"p")(2281,"strong"),iN(2282,"Componentes compat\xEDveis:"),sg(),Tl(2283,"code"),iN(2284,"po-checkbox-group"),sg(),iN(2285,", "),Tl(2286,"code"),iN(2287,"po-combo"),sg(),iN(2288,", "),Tl(2289,"code"),iN(2290,"po-datepicker"),sg(),iN(2291,", "),Tl(2292,"code"),iN(2293,"po-datepicker-range"),sg(),iN(2294,", "),Tl(2295,"code"),iN(2296,"po-decimal"),sg(),iN(2297,", "),Tl(2298,"code"),iN(2299,"po-input"),sg(),iN(2300,", "),Tl(2301,"code"),iN(2302,"po-lookup"),sg(),iN(2303,", "),Tl(2304,"code"),iN(2305,"po-multiselect"),sg(),iN(2306,", "),Tl(2307,"code"),iN(2308,"po-number"),sg(),iN(2309,", "),Tl(2310,"code"),iN(2311,"po-password"),sg(),iN(2312,", "),Tl(2313,"code"),iN(2314,"po-radio-group"),sg(),iN(2315,", "),Tl(2316,"code"),iN(2317,"po-select"),sg(),iN(2318,`,
`),Tl(2319,"code"),iN(2320,"po-switch"),sg(),iN(2321,", "),Tl(2322,"code"),iN(2323,"po-textarea"),sg(),iN(2324,", "),Tl(2325,"code"),iN(2326,"po-timepicker"),sg(),iN(2327,"."),sg()()(),Tl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),iN(2332," errorMessage"),Gl(2333,"br"),sg()()(),Tl(2334,"td",21)(2335,"code",27),iN(2336,"string"),sg()(),Tl(2337,"td",24)(2338,"em")(2339,"strong"),iN(2340,"(opcional)"),sg()(),Tl(2341,"p"),iN(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),sg(),Tl(2343,"p"),iN(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),sg(),Tl(2345,"ul")(2346,"li"),iN(2347,"pattern;"),sg(),Tl(2348,"li"),iN(2349,"minValue;"),sg(),Tl(2350,"li"),iN(2351,"maxValue;"),sg(),Tl(2352,"li"),iN(2353,"required;"),sg()(),Tl(2354,"blockquote")(2355,"p"),iN(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Tl(2357,"code"),iN(2358,"po-datepicker"),sg(),iN(2359,", "),Tl(2360,"code"),iN(2361,"po-input"),sg(),iN(2362,", "),Tl(2363,"code"),iN(2364,"po-number"),sg(),iN(2365,", "),Tl(2366,"code"),iN(2367,"po-decimal"),sg(),iN(2368,", "),Tl(2369,"code"),iN(2370,"po-password"),sg(),iN(2371,", "),Tl(2372,"code"),iN(2373,"po-timepicker"),sg(),iN(2374,`, \xE9 necess\xE1rio que a propriedade
`),Tl(2375,"code"),iN(2376,"requiredFieldErrorMessage"),sg(),iN(2377," esteja como "),Tl(2378,"code"),iN(2379,"true"),sg(),iN(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Tl(2381,"code"),iN(2382,"po-datepicker-range"),sg(),iN(2383,", "),Tl(2384,"code"),iN(2385,"po-select"),sg(),iN(2386,", "),Tl(2387,"code"),iN(2388,"po-checkbox-group"),sg(),iN(2389,", "),Tl(2390,"code"),iN(2391,"po-radio-group"),sg(),iN(2392,", "),Tl(2393,"code"),iN(2394,"po-multiselect"),sg(),iN(2395,", "),Tl(2396,"code"),iN(2397,"po-combo"),sg(),iN(2398,`,
`),Tl(2399,"code"),iN(2400,"po-lookup"),sg(),iN(2401," e "),Tl(2402,"code"),iN(2403,"po-textarea"),sg(),iN(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Tl(2405,"code"),iN(2406,"requiredFieldErrorMessage"),sg(),iN(2407,"."),sg()(),Tl(2408,"p")(2409,"strong"),iN(2410,"Componentes compat\xEDveis:"),sg(),Tl(2411,"code"),iN(2412,"po-checkbox-group"),sg(),iN(2413,", "),Tl(2414,"code"),iN(2415,"po-combo"),sg(),iN(2416,", "),Tl(2417,"code"),iN(2418,"po-datepicker"),sg(),iN(2419,", "),Tl(2420,"code"),iN(2421,"po-datepicker-range"),sg(),iN(2422,", "),Tl(2423,"code"),iN(2424,"po-decimal"),sg(),iN(2425,", "),Tl(2426,"code"),iN(2427,"po-input"),sg(),iN(2428,", "),Tl(2429,"code"),iN(2430,"po-lookup"),sg(),iN(2431,", "),Tl(2432,"code"),iN(2433,"po-multiselect"),sg(),iN(2434,", "),Tl(2435,"code"),iN(2436,"po-number"),sg(),iN(2437,", "),Tl(2438,"code"),iN(2439,"po-password"),sg(),iN(2440,", "),Tl(2441,"code"),iN(2442,"po-radio-group"),sg(),iN(2443,", "),Tl(2444,"code"),iN(2445,"po-select"),sg(),iN(2446,`,
`),Tl(2447,"code"),iN(2448,"po-switch"),sg(),iN(2449,", "),Tl(2450,"code"),iN(2451,"po-textarea"),sg(),iN(2452,", "),Tl(2453,"code"),iN(2454,"po-timepicker"),sg(),iN(2455,"."),sg()()(),Tl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),iN(2460," fieldLabel"),Gl(2461,"br"),sg()()(),Tl(2462,"td",21)(2463,"code",27),iN(2464,"string"),sg()(),Tl(2465,"td",24)(2466,"em")(2467,"strong"),iN(2468,"(opcional)"),sg()(),Tl(2469,"p"),iN(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Tl(2471,"p"),iN(2472,"O valor padr\xE3o \xE9: "),Tl(2473,"code"),iN(2474,"label"),sg(),iN(2475,"."),sg(),Tl(2476,"blockquote")(2477,"p"),iN(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(2479,"code"),iN(2480,"options"),sg(),iN(2481,", "),Tl(2482,"code"),iN(2483,"optionsService"),sg(),iN(2484," e "),Tl(2485,"code"),iN(2486,"searchService"),sg(),iN(2487,"."),sg()()()(),Tl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),iN(2492," fieldValue"),Gl(2493,"br"),sg()()(),Tl(2494,"td",21)(2495,"code",27),iN(2496,"string"),sg()(),Tl(2497,"td",24)(2498,"em")(2499,"strong"),iN(2500,"(opcional)"),sg()(),Tl(2501,"p"),iN(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Tl(2503,"p"),iN(2504,"O valor padr\xE3o \xE9: "),Tl(2505,"code"),iN(2506,"value"),sg(),iN(2507,"."),sg(),Tl(2508,"blockquote")(2509,"p"),iN(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(2511,"code"),iN(2512,"options"),sg(),iN(2513,", "),Tl(2514,"code"),iN(2515,"optionsService"),sg(),iN(2516," e "),Tl(2517,"code"),iN(2518,"searchService"),sg(),iN(2519,"."),sg()()()(),Tl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),iN(2524," filterMinlength"),Gl(2525,"br"),sg()()(),Tl(2526,"td",21)(2527,"code",45),iN(2528,"number"),sg()(),Tl(2529,"td",24)(2530,"em")(2531,"strong"),iN(2532,"(opcional)"),sg()(),Tl(2533,"p"),iN(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Tl(2535,"code"),iN(2536,"po-combo"),sg(),iN(2537,"."),sg()()(),Tl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),iN(2542," filterMode"),Gl(2543,"br"),sg()()(),Tl(2544,"td",21)(2545,"code",52),iN(2546,"PoMultiselectFilterMode"),sg()(),Tl(2547,"td",24)(2548,"em")(2549,"strong"),iN(2550,"(opcional)"),sg()(),Tl(2551,"p"),iN(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Tl(2553,"code"),iN(2554,"startsWith"),sg(),iN(2555,", "),Tl(2556,"code"),iN(2557,"contains"),sg(),iN(2558," ou "),Tl(2559,"code"),iN(2560,"endsWith"),sg(),iN(2561,"."),sg(),Tl(2562,"blockquote")(2563,"p"),iN(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),sg()(),Tl(2565,"p")(2566,"strong"),iN(2567,"Componente compat\xEDvel:"),sg(),Tl(2568,"code"),iN(2569,"po-multiselect"),sg(),iN(2570,"."),sg()()(),Tl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),iN(2575," forceBooleanComponentType"),Gl(2576,"br"),sg()()(),Tl(2577,"td",21)(2578,"code",53),iN(2579,"ForceBooleanComponentEnum"),sg()(),Tl(2580,"td",24)(2581,"em")(2582,"strong"),iN(2583,"(opcional)"),sg()(),Tl(2584,"p"),iN(2585,"Valores aceitos:"),sg(),Tl(2586,"ul")(2587,"li"),iN(2588,"ForceBooleanComponentEnum.switch"),sg(),Tl(2589,"li"),iN(2590,"ForceBooleanComponentEnum.checkbox"),sg()()()(),Tl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),iN(2595," forceOptionsComponentType"),Gl(2596,"br"),sg()()(),Tl(2597,"td",21)(2598,"code",54),iN(2599,"ForceOptionComponentEnum"),sg()(),Tl(2600,"td",24)(2601,"em")(2602,"strong"),iN(2603,"(opcional)"),sg()(),Tl(2604,"p"),iN(2605,"pode ser utilizada em conjunto com a propriedade "),Tl(2606,"code"),iN(2607,"options"),sg(),iN(2608," for\xE7ando o componente a renderizar um "),Tl(2609,"code"),iN(2610,"po-select"),sg(),iN(2611," ou "),Tl(2612,"code"),iN(2613,"po-radio-group"),sg(),iN(2614,"."),sg(),Tl(2615,"p"),iN(2616,"Valores aceitos:"),sg(),Tl(2617,"ul")(2618,"li"),iN(2619,"ForceOptionComponentEnum.radioGroup"),sg(),Tl(2620,"li"),iN(2621,"ForceOptionComponentEnum.select"),sg()(),Tl(2622,"blockquote")(2623,"p"),iN(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Tl(2625,"code"),iN(2626,"optionsMulti"),sg(),iN(2627," e "),Tl(2628,"code"),iN(2629,"optionsService"),sg(),iN(2630,"."),sg()()()(),Tl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),iN(2635," formField"),Gl(2636,"br"),sg()()(),Tl(2637,"td",21)(2638,"code",27),iN(2639,"string"),sg()(),Tl(2640,"td",24)(2641,"em")(2642,"strong"),iN(2643,"(opcional)"),sg()(),Tl(2644,"p"),iN(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Tl(2646,"code"),iN(2647,"url"),sg(),iN(2648,"."),sg(),Tl(2649,"blockquote")(2650,"p"),iN(2651,"O valor default \xE9 "),Tl(2652,"code"),iN(2653,"files"),sg()()(),Tl(2654,"p")(2655,"strong"),iN(2656,"Componente compat\xEDvel"),sg(),iN(2657,": "),Tl(2658,"code"),iN(2659,"po-upload"),sg()()()(),Tl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),iN(2664," format"),Gl(2665,"br"),sg()()(),Tl(2666,"td",21)(2667,"code",27),iN(2668,"string "),sg(),Tl(2669,"code",32),iN(2670," Array<string>"),sg()(),Tl(2671,"td",24)(2672,"em")(2673,"strong"),iN(2674,"(opcional)"),sg()(),Tl(2675,"p"),iN(2676,"Formato de exibi\xE7\xE3o no campo."),sg(),Tl(2677,"p"),iN(2678,"Ao utilizar esta propriedade com o "),Tl(2679,"code"),iN(2680,"type"),sg(),Tl(2681,"em"),iN(2682,"PoDynamicFieldType.Date"),sg(),iN(2683," ou "),Tl(2684,"em"),iN(2685,"PoDynamicFieldType.DateTime"),sg(),iN(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),sg(),Tl(2687,"p"),iN(2688,"Valores v\xE1lidos:"),sg(),Tl(2689,"ul")(2690,"li"),iN(2691,"dd/mm/yyyy"),sg(),Tl(2692,"li"),iN(2693,"mm/dd/yyyy"),sg(),Tl(2694,"li"),iN(2695,"yyyy/mm/dd"),sg()(),Tl(2696,"p"),iN(2697,"Ao utilizar com o "),Tl(2698,"code"),iN(2699,"type"),sg(),Tl(2700,"em"),iN(2701,"PoDynamicFieldType.Time"),sg(),iN(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),sg(),Tl(2703,"p"),iN(2704,"Valores v\xE1lidos:"),sg(),Tl(2705,"ul")(2706,"li")(2707,"code"),iN(2708,"24"),sg(),iN(2709,": formato de 24 horas (padr\xE3o)"),sg(),Tl(2710,"li")(2711,"code"),iN(2712,"12"),sg(),iN(2713,": formato de 12 horas com indicador AM/PM"),sg()(),Tl(2714,"p"),iN(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Tl(2716,"code"),iN(2717,"searchService"),sg(),iN(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),sg(),Tl(2719,"p")(2720,"strong"),iN(2721,"Componentes compat\xEDveis:"),sg(),Tl(2722,"code"),iN(2723,"po-datepicker"),sg(),iN(2724,", "),Tl(2725,"code"),iN(2726,"po-datetimepicker"),sg(),iN(2727,", "),Tl(2728,"code"),iN(2729,"po-timepicker"),sg(),iN(2730,", "),Tl(2731,"code"),iN(2732,"po-lookup"),sg(),iN(2733,"."),sg()()(),Tl(2734,"tr",16)(2735,"td",17)(2736,"div",25)(2737,"span",26),iN(2738," formatModel"),Gl(2739,"br"),sg()()(),Tl(2740,"td",21)(2741,"code",29),iN(2742,"boolean"),sg()(),Tl(2743,"td",24)(2744,"em")(2745,"strong"),iN(2746,"(opcional)"),sg()(),Tl(2747,"p"),iN(2748,"Indica se o "),Tl(2749,"code"),iN(2750,"model"),sg(),iN(2751," receber\xE1 o valor formatado pelas propriedades "),Tl(2752,"code"),iN(2753,"p-label-on"),sg(),iN(2754," e "),Tl(2755,"code"),iN(2756,"p-label-off"),sg(),iN(2757,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Tl(2758,"p"),iN(2759,"O valor padr\xE3o \xE9: "),Tl(2760,"code"),iN(2761,"false"),sg(),iN(2762,"."),sg(),Tl(2763,"blockquote")(2764,"p"),iN(2765,"Esta propriedade est\xE1 disponivel apenas para o "),Tl(2766,"code"),iN(2767,"swicth"),sg(),iN(2768,"."),sg()()()(),Tl(2769,"tr",16)(2770,"td",17)(2771,"div",25)(2772,"span",26),iN(2773," formatTime"),Gl(2774,"br"),sg()()(),Tl(2775,"td",21)(2776,"code",27),iN(2777,"string"),sg()(),Tl(2778,"td",24)(2779,"em")(2780,"strong"),iN(2781,"(opcional)"),sg()(),Tl(2782,"p"),iN(2783,"Define o formato de exibi\xE7\xE3o do timer ("),Tl(2784,"code"),iN(2785,"'12'"),sg(),iN(2786," ou "),Tl(2787,"code"),iN(2788,"'24'"),sg(),iN(2789,")."),sg(),Tl(2790,"p")(2791,"strong"),iN(2792,"Componente compat\xEDvel:"),sg(),Tl(2793,"code"),iN(2794,"po-datetimepicker"),sg()()()(),Tl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),iN(2799," gridColumns"),Gl(2800,"br"),sg()()(),Tl(2801,"td",21)(2802,"code",45),iN(2803,"number"),sg()(),Tl(2804,"td",24)(2805,"em")(2806,"strong"),iN(2807,"(opcional)"),sg()(),Tl(2808,"p"),iN(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Tl(2810,"p"),iN(2811,"Deve ser usado o sistema de "),Tl(2812,"strong"),iN(2813,"grid"),sg(),iN(2814," do PO (1 ... 12 colunas)."),sg(),Tl(2815,"blockquote")(2816,"p"),iN(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),iN(2822," gridLgColumns"),Gl(2823,"br"),sg()()(),Tl(2824,"td",21)(2825,"code",45),iN(2826,"number"),sg()(),Tl(2827,"td",24)(2828,"em")(2829,"strong"),iN(2830,"(opcional)"),sg()(),Tl(2831,"p"),iN(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(2833,"p"),iN(2834,"Deve ser usado o sistema de "),Tl(2835,"strong"),iN(2836,"grid"),sg(),iN(2837," do PO (1 ... 12 colunas)."),sg(),Tl(2838,"blockquote")(2839,"p"),iN(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2841,"code"),iN(2842,"gridColumns"),sg(),iN(2843,"."),sg()()()(),Tl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),iN(2848," gridLgPull"),Gl(2849,"br"),sg()()(),Tl(2850,"td",21)(2851,"code",45),iN(2852,"number"),sg()(),Tl(2853,"td",24)(2854,"em")(2855,"strong"),iN(2856,"(opcional)"),sg()(),Tl(2857,"p"),iN(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Tl(2859,"p"),iN(2860,"Deve ser usado o sistema de "),Tl(2861,"strong"),iN(2862,"grid"),sg(),iN(2863," do PO (1 ... 11 colunas)."),sg(),Tl(2864,"blockquote")(2865,"p"),iN(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2867,"code"),iN(2868,"gridColumns"),sg(),iN(2869,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),iN(2874," gridMdColumns"),Gl(2875,"br"),sg()()(),Tl(2876,"td",21)(2877,"code",45),iN(2878,"number"),sg()(),Tl(2879,"td",24)(2880,"em")(2881,"strong"),iN(2882,"(opcional)"),sg()(),Tl(2883,"p"),iN(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(2885,"p"),iN(2886,"Deve ser usado o sistema de "),Tl(2887,"strong"),iN(2888,"grid"),sg(),iN(2889," do PO (1 ... 12 colunas)."),sg(),Tl(2890,"blockquote")(2891,"p"),iN(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2893,"code"),iN(2894,"gridColumns"),sg(),iN(2895,"."),sg()()()(),Tl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),iN(2900," gridMdPull"),Gl(2901,"br"),sg()()(),Tl(2902,"td",21)(2903,"code",45),iN(2904,"number"),sg()(),Tl(2905,"td",24)(2906,"em")(2907,"strong"),iN(2908,"(opcional)"),sg()(),Tl(2909,"p"),iN(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Tl(2911,"p"),iN(2912,"Deve ser usado o sistema de "),Tl(2913,"strong"),iN(2914,"grid"),sg(),iN(2915," do PO (1 ... 11 colunas)."),sg(),Tl(2916,"blockquote")(2917,"p"),iN(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2919,"code"),iN(2920,"gridColumns"),sg(),iN(2921,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),iN(2926," gridSmColumns"),Gl(2927,"br"),sg()()(),Tl(2928,"td",21)(2929,"code",45),iN(2930,"number"),sg()(),Tl(2931,"td",24)(2932,"em")(2933,"strong"),iN(2934,"(opcional)"),sg()(),Tl(2935,"p"),iN(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(2937,"p"),iN(2938,"Deve ser usado o sistema de "),Tl(2939,"strong"),iN(2940,"grid"),sg(),iN(2941," do PO (1 ... 12 colunas)."),sg(),Tl(2942,"blockquote")(2943,"p"),iN(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2945,"code"),iN(2946,"gridColumns"),sg(),iN(2947,"."),sg()()()(),Tl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),iN(2952," gridSmPull"),Gl(2953,"br"),sg()()(),Tl(2954,"td",21)(2955,"code",45),iN(2956,"number"),sg()(),Tl(2957,"td",24)(2958,"em")(2959,"strong"),iN(2960,"(opcional)"),sg()(),Tl(2961,"p"),iN(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Tl(2963,"p"),iN(2964,"Deve ser usado o sistema de "),Tl(2965,"strong"),iN(2966,"grid"),sg(),iN(2967," do PO (1 ... 11 colunas)."),sg(),Tl(2968,"blockquote")(2969,"p"),iN(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2971,"code"),iN(2972,"gridColumns"),sg(),iN(2973,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),iN(2978," gridXlColumns"),Gl(2979,"br"),sg()()(),Tl(2980,"td",21)(2981,"code",45),iN(2982,"number"),sg()(),Tl(2983,"td",24)(2984,"em")(2985,"strong"),iN(2986,"(opcional)"),sg()(),Tl(2987,"p"),iN(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(2989,"p"),iN(2990,"Deve ser usado o sistema de "),Tl(2991,"strong"),iN(2992,"grid"),sg(),iN(2993," do PO (1 ... 12 colunas)."),sg(),Tl(2994,"blockquote")(2995,"p"),iN(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2997,"code"),iN(2998,"gridColumns"),sg(),iN(2999,"."),sg()()()(),Tl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),iN(3004," gridXlPull"),Gl(3005,"br"),sg()()(),Tl(3006,"td",21)(3007,"code",45),iN(3008,"number"),sg()(),Tl(3009,"td",24)(3010,"em")(3011,"strong"),iN(3012,"(opcional)"),sg()(),Tl(3013,"p"),iN(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Tl(3015,"p"),iN(3016,"Deve ser usado o sistema de "),Tl(3017,"strong"),iN(3018,"grid"),sg(),iN(3019," do PO (1 ... 11 colunas)."),sg(),Tl(3020,"blockquote")(3021,"p"),iN(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(3023,"code"),iN(3024,"gridColumns"),sg(),iN(3025,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),iN(3030," headers"),Gl(3031,"br"),sg()()(),Tl(3032,"td",21)(3033,"code",55),iN(3034,"{ [name: string]: string "),sg(),Tl(3035,"code",56),iN(3036,` Array<string>;
}`),sg()(),Tl(3037,"td",24)(3038,"em")(3039,"strong"),iN(3040,"(opcional)"),sg()(),Tl(3041,"p"),iN(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg(),Tl(3043,"p")(3044,"strong"),iN(3045,"Componente compat\xEDvel"),sg(),iN(3046,": "),Tl(3047,"code"),iN(3048,"po-upload"),sg()()()(),Tl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),iN(3053," help"),Gl(3054,"br"),sg()()(),Tl(3055,"td",21)(3056,"code",27),iN(3057,"string"),sg()(),Tl(3058,"td",24)(3059,"em")(3060,"strong"),iN(3061,"(opcional)"),sg()(),Tl(3062,"p"),iN(3063,"Texto de ajuda."),sg()()(),Tl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),iN(3068," helper"),Gl(3069,"br"),sg()()(),Tl(3070,"td",21)(3071,"code",27),iN(3072,"string "),sg(),Tl(3073,"code",38),iN(3074," PoHelperOptions"),sg()(),Tl(3075,"td",24)(3076,"em")(3077,"strong"),iN(3078,"(opcional)"),sg()(),Tl(3079,"p"),iN(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),sg()()(),Tl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),iN(3085," hideLabelStatus"),Gl(3086,"br"),sg()()(),Tl(3087,"td",21)(3088,"code",29),iN(3089,"boolean"),sg()(),Tl(3090,"td",24)(3091,"em")(3092,"strong"),iN(3093,"(opcional)"),sg()(),Tl(3094,"p"),iN(3095,"Indica se o status do "),Tl(3096,"code"),iN(3097,"model"),sg(),iN(3098," ser\xE1 escondido visualmente ao lado do switch"),sg()()(),Tl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),iN(3103," hidePasswordPeek"),Gl(3104,"br"),sg()()(),Tl(3105,"td",21)(3106,"code",29),iN(3107,"boolean"),sg()(),Tl(3108,"td",24)(3109,"em")(3110,"strong"),iN(3111,"(opcional)"),sg()(),Tl(3112,"p"),iN(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Tl(3114,"code"),iN(3115,"po-password"),sg(),iN(3116,"."),sg()()(),Tl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),iN(3121," hideRestrictionsInfo"),Gl(3122,"br"),sg()()(),Tl(3123,"td",21)(3124,"code",29),iN(3125,"boolean"),sg()(),Tl(3126,"td",24)(3127,"em")(3128,"strong"),iN(3129,"(opcional)"),sg()(),Tl(3130,"p"),iN(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg(),Tl(3132,"p")(3133,"strong"),iN(3134,"Componente compat\xEDvel"),sg(),iN(3135,": "),Tl(3136,"code"),iN(3137,"po-upload"),sg()()()(),Tl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),iN(3142," hideSearch"),Gl(3143,"br"),sg()()(),Tl(3144,"td",21)(3145,"code",29),iN(3146,"boolean"),sg()(),Tl(3147,"td",24)(3148,"em")(3149,"strong"),iN(3150,"(opcional)"),sg()(),Tl(3151,"p"),iN(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Tl(3153,"code"),iN(3154,"po-multiselect"),sg(),iN(3155,"."),sg()()(),Tl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),iN(3160," hideSelectAll"),Gl(3161,"br"),sg()()(),Tl(3162,"td",21)(3163,"code",29),iN(3164,"boolean"),sg()(),Tl(3165,"td",24)(3166,"em")(3167,"strong"),iN(3168,"(opcional)"),sg()(),Tl(3169,"p"),iN(3170,'Indica se o campo "Selecionar todos" do '),Tl(3171,"code"),iN(3172,"po-multiselect"),sg(),iN(3173," ser\xE1 escondido."),sg()()(),Tl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),iN(3178," hideSelectButton"),Gl(3179,"br"),sg()()(),Tl(3180,"td",21)(3181,"code",29),iN(3182,"boolean"),sg()(),Tl(3183,"td",24)(3184,"em")(3185,"strong"),iN(3186,"(opcional)"),sg()(),Tl(3187,"p"),iN(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Tl(3189,"blockquote")(3190,"p"),iN(3191,"Caso o valor definido seja "),Tl(3192,"code"),iN(3193,"true"),sg(),iN(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(3195,"code"),iN(3196,"selectFiles()"),sg(),iN(3197," para sele\xE7\xE3o de arquivos."),sg()(),Tl(3198,"p")(3199,"strong"),iN(3200,"Componente compat\xEDvel"),sg(),iN(3201,": "),Tl(3202,"code"),iN(3203,"po-upload"),sg()()()(),Tl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),iN(3208," hideSendButton"),Gl(3209,"br"),sg()()(),Tl(3210,"td",21)(3211,"code",29),iN(3212,"boolean"),sg()(),Tl(3213,"td",24)(3214,"em")(3215,"strong"),iN(3216,"(opcional)"),sg()(),Tl(3217,"p"),iN(3218,"Omite o bot\xE3o de envio de arquivos."),sg(),Tl(3219,"blockquote")(3220,"p"),iN(3221,"Caso o valor definido seja "),Tl(3222,"code"),iN(3223,"true"),sg(),iN(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(3225,"code"),iN(3226,"sendFiles()"),sg(),iN(3227," para envio do(s) arquivo(s) selecionado(s)."),sg()(),Tl(3228,"p")(3229,"strong"),iN(3230,"Componente compat\xEDvel"),sg(),iN(3231,": "),Tl(3232,"code"),iN(3233,"po-upload"),sg()()()(),Tl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),iN(3238," icon"),Gl(3239,"br"),sg()()(),Tl(3240,"td",21)(3241,"code",27),iN(3242,"string "),sg(),Tl(3243,"code",57),iN(3244," TemplateRef<void>"),sg()(),Tl(3245,"td",24)(3246,"em")(3247,"strong"),iN(3248,"(opcional)"),sg()(),Tl(3249,"p"),iN(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(3251,"blockquote")(3252,"p"),iN(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),sg()(),Tl(3254,"ul")(3255,"li"),iN(3256,"Input;"),sg(),Tl(3257,"li"),iN(3258,"Number;"),sg(),Tl(3259,"li"),iN(3260,"Decimal;"),sg(),Tl(3261,"li"),iN(3262,"Combo;"),sg(),Tl(3263,"li"),iN(3264,"Password;"),sg()(),Tl(3265,"blockquote")(3266,"p"),iN(3267,"Veja a disponibilidade de \xEDcones em "),Tl(3268,"a",58),iN(3269,"biblioteca de \xEDcones"),sg(),iN(3270,"."),sg()()()(),Tl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),iN(3275," infiniteScroll"),Gl(3276,"br"),sg()()(),Tl(3277,"td",21)(3278,"code",29),iN(3279,"boolean"),sg()(),Tl(3280,"td",24)(3281,"em")(3282,"strong"),iN(3283,"(opcional)"),sg()(),Tl(3284,"p"),iN(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg(),Tl(3286,"p")(3287,"strong"),iN(3288,"Componentes compat\xEDveis:"),sg(),Tl(3289,"code"),iN(3290,"po-combo"),sg(),iN(3291,", "),Tl(3292,"code"),iN(3293,"po-lookup"),sg(),iN(3294,"."),sg()()(),Tl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),iN(3299," infiniteScrollDistance"),Gl(3300,"br"),sg()()(),Tl(3301,"td",21)(3302,"code",45),iN(3303,"number"),sg()(),Tl(3304,"td",24)(3305,"em")(3306,"strong"),iN(3307,"(opcional)"),sg()(),Tl(3308,"p"),iN(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Tl(3310,"strong"),iN(3311,"Exemplos"),sg(),Tl(3312,"code"),iN(3313,"{ infiniteScrollDistance: 80 }"),sg(),iN(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),sg(),Tl(3315,"p")(3316,"strong"),iN(3317,"Componente compat\xEDvel:"),sg(),Tl(3318,"code"),iN(3319,"po-combo"),sg(),iN(3320,"."),sg()()(),Tl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),iN(3325," invalidValue"),Gl(3326,"br"),sg()()(),Tl(3327,"td",21)(3328,"code",29),iN(3329,"boolean"),sg()(),Tl(3330,"td",24)(3331,"em")(3332,"strong"),iN(3333,"(opcional)"),sg()(),Tl(3334,"p"),iN(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Tl(3336,"code"),iN(3337,"p-field-error-message"),sg(),iN(3338,"."),sg(),Tl(3339,"blockquote")(3340,"p"),iN(3341,"Caso essa propriedade seja definida como "),Tl(3342,"code"),iN(3343,"true"),sg(),iN(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()(),Tl(3345,"p")(3346,"strong"),iN(3347,"Componente compat\xEDvel"),sg(),iN(3348,": "),Tl(3349,"code"),iN(3350,"po-switch"),sg()()()(),Tl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),iN(3355," isoFormat"),Gl(3356,"br"),sg()()(),Tl(3357,"td",21)(3358,"code",59),iN(3359,"PoDatepickerIsoFormat"),sg()(),Tl(3360,"td",24)(3361,"em")(3362,"strong"),iN(3363,"(opcional)"),sg()(),Tl(3364,"p"),iN(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),sg(),Tl(3366,"blockquote")(3367,"p"),iN(3368,"Veja os valores v\xE1lidos no "),Tl(3369,"code"),iN(3370,"PoDatepickerIsoFormat"),sg(),iN(3371,"."),sg()(),Tl(3372,"p")(3373,"strong"),iN(3374,"Componente compat\xEDvel:"),sg(),Tl(3375,"code"),iN(3376,"po-datepicker"),sg()()()(),Tl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),iN(3381," key"),Gl(3382,"br"),sg()()(),Tl(3383,"td",21)(3384,"code",29),iN(3385,"boolean"),sg()(),Tl(3386,"td",24)(3387,"em")(3388,"strong"),iN(3389,"(opcional)"),sg()(),Tl(3390,"p"),iN(3391,"Identificador"),sg()()(),Tl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),iN(3396," keydown"),Gl(3397,"br"),sg()()(),Tl(3398,"td",21)(3399,"code",44),iN(3400,"Function"),sg()(),Tl(3401,"td",24)(3402,"em")(3403,"strong"),iN(3404,"(opcional)"),sg()(),Tl(3405,"p"),iN(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(3407,"code"),iN(3408,"KeyboardEvent"),sg(),iN(3409," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),iN(3414," label"),Gl(3415,"br"),sg()()(),Tl(3416,"td",21)(3417,"code",27),iN(3418,"string"),sg()(),Tl(3419,"td",24)(3420,"em")(3421,"strong"),iN(3422,"(opcional)"),sg()(),Tl(3423,"p"),iN(3424,"R\xF3tulo do campo exibido."),sg(),Tl(3425,"p"),iN(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(3427,"code"),iN(3428,"label"),sg(),iN(3429," o valor da propriedade "),Tl(3430,"code"),iN(3431,"property"),sg(),iN(3432," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),iN(3437," labelPosition"),Gl(3438,"br"),sg()()(),Tl(3439,"td",21)(3440,"code",60),iN(3441,"PoSwitchLabelPosition"),sg()(),Tl(3442,"td",24)(3443,"em")(3444,"strong"),iN(3445,"(opcional)"),sg()(),Tl(3446,"p"),iN(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),sg(),Tl(3448,"blockquote")(3449,"p"),iN(3450,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Tl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),iN(3455," listboxControlPosition"),Gl(3456,"br"),sg()()(),Tl(3457,"td",21)(3458,"code",61),iN(3459,"'top' "),sg(),Tl(3460,"code",62),iN(3461," 'bottom'"),sg()(),Tl(3462,"td",24)(3463,"em")(3464,"strong"),iN(3465,"(opcional)"),sg()(),Tl(3466,"p"),iN(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Tl(3468,"code"),iN(3469,"listbox"),sg(),iN(3470," em rela\xE7\xE3o ao campo ("),Tl(3471,"code"),iN(3472,"top"),sg(),iN(3473," ou "),Tl(3474,"code"),iN(3475,"bottom"),sg(),iN(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg(),Tl(3477,"p")(3478,"strong"),iN(3479,"Componentes compat\xEDveis:"),sg(),Tl(3480,"code"),iN(3481,"po-multiselect"),sg(),iN(3482,", "),Tl(3483,"code"),iN(3484,"po-combo"),sg(),iN(3485,"."),sg()()(),Tl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),iN(3490," literals"),Gl(3491,"br"),sg()()(),Tl(3492,"td",21)(3493,"code",36),iN(3494,"PoLookupLiterals "),sg(),Tl(3495,"code",63),iN(3496," PoMultiselectLiterals "),sg(),Tl(3497,"code",64),iN(3498," PoComboLiterals "),sg(),Tl(3499,"code",65),iN(3500," PoDatepickerRangeLiterals "),sg(),Tl(3501,"code",66),iN(3502," PoUploadLiterals"),sg()(),Tl(3503,"td",24)(3504,"em")(3505,"strong"),iN(3506,"(opcional)"),sg()(),Tl(3507,"p"),iN(3508,"Objeto com as literais usadas para os seguintes componentes: "),Tl(3509,"code"),iN(3510,"po-lookup"),sg(),iN(3511,", "),Tl(3512,"code"),iN(3513,"po-multiselect"),sg(),iN(3514,", "),Tl(3515,"code"),iN(3516,"po-combo"),sg(),iN(3517," e "),Tl(3518,"code"),iN(3519,"po-datepicker-range"),sg(),iN(3520,"."),sg(),Tl(3521,"blockquote")(3522,"p"),iN(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),sg()(),Tl(3524,"p")(3525,"strong"),iN(3526,"Componentes compat\xEDveis:"),sg(),Tl(3527,"code"),iN(3528,"po-lookup"),sg(),iN(3529,", "),Tl(3530,"code"),iN(3531,"po-multiselect"),sg(),iN(3532,", "),Tl(3533,"code"),iN(3534,"po-combo"),sg(),iN(3535,", "),Tl(3536,"code"),iN(3537,"po-datepicker-range"),sg()()()(),Tl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),iN(3542," loading"),Gl(3543,"br"),sg()()(),Tl(3544,"td",21)(3545,"code",29),iN(3546,"boolean"),sg()(),Tl(3547,"td",24)(3548,"em")(3549,"strong"),iN(3550,"(opcional)"),sg()(),Tl(3551,"p"),iN(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),sg(),Tl(3553,"blockquote")(3554,"p"),iN(3555,"Por padr\xE3o \xE9 "),Tl(3556,"code"),iN(3557,"false"),sg(),iN(3558,"."),sg()(),Tl(3559,"p")(3560,"strong"),iN(3561,"Componentes compat\xEDveis:"),sg(),Tl(3562,"code"),iN(3563,"po-datepicker"),sg(),iN(3564,", "),Tl(3565,"code"),iN(3566,"po-datepicker-range"),sg(),iN(3567,", "),Tl(3568,"code"),iN(3569,"po-number"),sg(),iN(3570,", "),Tl(3571,"code"),iN(3572,"po-decimal"),sg(),iN(3573,`,
`),Tl(3574,"code"),iN(3575,"po-input"),sg(),iN(3576,", "),Tl(3577,"code"),iN(3578,"po-select"),sg(),iN(3579,", "),Tl(3580,"code"),iN(3581,"po-switch"),sg(),iN(3582,", "),Tl(3583,"code"),iN(3584,"po-combo"),sg(),iN(3585,", "),Tl(3586,"code"),iN(3587,"po-lookup"),sg(),iN(3588,", "),Tl(3589,"code"),iN(3590,"po-multiselect"),sg(),iN(3591,`,
`),Tl(3592,"code"),iN(3593,"po-textarea"),sg(),iN(3594,", "),Tl(3595,"code"),iN(3596,"po-password"),sg(),iN(3597,", "),Tl(3598,"code"),iN(3599,"po-upload"),sg(),iN(3600,"."),sg()()(),Tl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),iN(3605," locale"),Gl(3606,"br"),sg()()(),Tl(3607,"td",21)(3608,"code",27),iN(3609,"string"),sg()(),Tl(3610,"td",24)(3611,"em")(3612,"strong"),iN(3613,"(opcional)"),sg()(),Tl(3614,"p"),iN(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Tl(3616,"a",67)(3617,"code"),iN(3618,"I18n"),sg()()(),Tl(3619,"p"),iN(3620,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(3621,"pre")(3622,"code"),iN(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),sg()(),Tl(3624,"blockquote")(3625,"p"),iN(3626,"Para ver quais linguagens suportadas acesse "),Tl(3627,"a",67)(3628,"code"),iN(3629,"I18n"),sg()()()(),Tl(3630,"p")(3631,"strong"),iN(3632,"Componentes compat\xEDveis:"),sg(),Tl(3633,"code"),iN(3634,"po-datepicker"),sg(),iN(3635,", "),Tl(3636,"code"),iN(3637,"po-decimal"),sg(),iN(3638,", "),Tl(3639,"code"),iN(3640,"po-timepicker"),sg(),iN(3641,"."),sg()()(),Tl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),iN(3646," mask"),Gl(3647,"br"),sg()()(),Tl(3648,"td",21)(3649,"code",27),iN(3650,"string"),sg()(),Tl(3651,"td",24)(3652,"em")(3653,"strong"),iN(3654,"(opcional)"),sg()(),Tl(3655,"p"),iN(3656,"M\xE1scara para o campo."),sg(),Tl(3657,"p")(3658,"strong"),iN(3659,"Componente compat\xEDvel:"),sg(),Tl(3660,"code"),iN(3661,"po-input"),sg(),iN(3662,"."),sg(),Tl(3663,"blockquote")(3664,"p"),iN(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(3666,"code"),iN(3667,"type: time"),sg(),iN(3668,"."),sg()()()(),Tl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),iN(3673," maskFormatModel"),Gl(3674,"br"),sg()()(),Tl(3675,"td",21)(3676,"code",29),iN(3677,"boolean"),sg()(),Tl(3678,"td",24)(3679,"em")(3680,"strong"),iN(3681,"(opcional)"),sg()(),Tl(3682,"p"),iN(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Tl(3684,"code"),iN(3685,"false"),sg(),iN(3686,"."),sg(),Tl(3687,"p")(3688,"strong"),iN(3689,"Componente compat\xEDvel:"),sg(),Tl(3690,"code"),iN(3691,"po-input"),sg(),iN(3692,"."),sg(),Tl(3693,"blockquote")(3694,"p"),iN(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(3696,"code"),iN(3697,"type: time"),sg(),iN(3698,"."),sg()()()(),Tl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),iN(3703," maskNoLengthValidation"),Gl(3704,"br"),sg()()(),Tl(3705,"td",21)(3706,"code",29),iN(3707,"boolean"),sg()(),Tl(3708,"td",24)(3709,"em")(3710,"strong"),iN(3711,"(opcional)"),sg()(),Tl(3712,"p"),iN(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(3714,"code"),iN(3715,"minLength"),sg(),iN(3716,") e m\xE1ximo ("),Tl(3717,"code"),iN(3718,"maxLength"),sg(),iN(3719,") quando h\xE1 uma m\xE1scara ("),Tl(3720,"code"),iN(3721,"p-mask"),sg(),iN(3722,") definida."),sg(),Tl(3723,"ul")(3724,"li"),iN(3725,"Quando "),Tl(3726,"code"),iN(3727,"true"),sg(),iN(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(3729,"li"),iN(3730,"Quando "),Tl(3731,"code"),iN(3732,"false"),sg(),iN(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(3734,"p")(3735,"strong"),iN(3736,"Componentes compat\xEDveis:"),sg(),Tl(3737,"code"),iN(3738,"po-input"),sg(),iN(3739,", "),Tl(3740,"code"),iN(3741,"po-decimal"),sg(),iN(3742,"."),sg(),Tl(3743,"blockquote")(3744,"p"),iN(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(3746,"code"),iN(3747,"p-mask-format-model"),sg(),iN(3748,"."),sg()(),Tl(3749,"p"),iN(3750,"Exemplo:"),sg(),Tl(3751,"pre")(3752,"code"),iN(3753,`fields:Array<PoDynamicFormField> = [
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
`),sg()(),Tl(3754,"ul")(3755,"li"),iN(3756,"Entrada: "),Tl(3757,"code"),iN(3758,"11.111.111/1111-11"),sg(),iN(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),sg()()()(),Tl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),iN(3764," maxLength"),Gl(3765,"br"),sg()()(),Tl(3766,"td",21)(3767,"code",45),iN(3768,"number"),sg()(),Tl(3769,"td",24)(3770,"em")(3771,"strong"),iN(3772,"(opcional)"),sg()(),Tl(3773,"p"),iN(3774,"Tamanho m\xE1ximo de caracteres."),sg(),Tl(3775,"p")(3776,"strong"),iN(3777,"Componentes compat\xEDveis:"),sg(),Tl(3778,"code"),iN(3779,"po-input"),sg(),iN(3780,", "),Tl(3781,"code"),iN(3782,"po-number"),sg(),iN(3783,", "),Tl(3784,"code"),iN(3785,"po-decimal"),sg(),iN(3786,", "),Tl(3787,"code"),iN(3788,"po-textarea"),sg(),iN(3789,", "),Tl(3790,"code"),iN(3791,"po-password"),sg(),iN(3792,"."),sg()()(),Tl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),iN(3797," maxTime"),Gl(3798,"br"),sg()()(),Tl(3799,"td",21)(3800,"code",27),iN(3801,"string"),sg()(),Tl(3802,"td",24)(3803,"em")(3804,"strong"),iN(3805,"(opcional)"),sg()(),Tl(3806,"p"),iN(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3808,"code"),iN(3809,"HH:mm"),sg(),iN(3810," ou "),Tl(3811,"code"),iN(3812,"HH:mm:ss"),sg(),iN(3813,"."),sg(),Tl(3814,"p")(3815,"strong"),iN(3816,"Componente compat\xEDvel:"),sg(),Tl(3817,"code"),iN(3818,"po-datetimepicker"),sg(),iN(3819,", "),Tl(3820,"code"),iN(3821,"po-timepicker"),sg()()()(),Tl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),iN(3826," maxValue"),Gl(3827,"br"),sg()()(),Tl(3828,"td",21)(3829,"code",27),iN(3830,"string "),sg(),Tl(3831,"code",45),iN(3832," number"),sg()(),Tl(3833,"td",24)(3834,"em")(3835,"strong"),iN(3836,"(opcional)"),sg()(),Tl(3837,"p"),iN(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3839,"em"),iN(3840,"number"),sg(),iN(3841,", "),Tl(3842,"em"),iN(3843,"date"),sg(),iN(3844,", "),Tl(3845,"em"),iN(3846,"dateTime"),sg(),iN(3847," ou "),Tl(3848,"em"),iN(3849,"time"),sg(),iN(3850,"."),sg(),Tl(3851,"blockquote")(3852,"p"),iN(3853,"Para "),Tl(3854,"code"),iN(3855,"po-timepicker"),sg(),iN(3856,", o valor deve estar no formato "),Tl(3857,"code"),iN(3858,"HH:mm"),sg(),iN(3859," ou "),Tl(3860,"code"),iN(3861,"HH:mm:ss"),sg(),iN(3862,"."),sg()(),Tl(3863,"p")(3864,"strong"),iN(3865,"Componentes compat\xEDveis:"),sg(),Tl(3866,"code"),iN(3867,"po-datepicker"),sg(),iN(3868,", "),Tl(3869,"code"),iN(3870,"po-datepicker-range"),sg(),iN(3871,", "),Tl(3872,"code"),iN(3873,"po-number"),sg(),iN(3874,", "),Tl(3875,"code"),iN(3876,"po-decimal"),sg(),iN(3877,", "),Tl(3878,"code"),iN(3879,"po-timepicker"),sg()()()(),Tl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),iN(3884," minLength"),Gl(3885,"br"),sg()()(),Tl(3886,"td",21)(3887,"code",45),iN(3888,"number"),sg()(),Tl(3889,"td",24)(3890,"em")(3891,"strong"),iN(3892,"(opcional)"),sg()(),Tl(3893,"p"),iN(3894,"Tamanho m\xEDnimo de caracteres."),sg(),Tl(3895,"p")(3896,"strong"),iN(3897,"Componentes compat\xEDveis:"),sg(),Tl(3898,"code"),iN(3899,"po-input"),sg(),iN(3900,", "),Tl(3901,"code"),iN(3902,"po-number"),sg(),iN(3903,", "),Tl(3904,"code"),iN(3905,"po-decimal"),sg(),iN(3906,", "),Tl(3907,"code"),iN(3908,"po-textarea"),sg(),iN(3909,", "),Tl(3910,"code"),iN(3911,"po-password"),sg(),iN(3912,"."),sg()()(),Tl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),iN(3917," minTime"),Gl(3918,"br"),sg()()(),Tl(3919,"td",21)(3920,"code",27),iN(3921,"string"),sg()(),Tl(3922,"td",24)(3923,"em")(3924,"strong"),iN(3925,"(opcional)"),sg()(),Tl(3926,"p"),iN(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3928,"code"),iN(3929,"HH:mm"),sg(),iN(3930," ou "),Tl(3931,"code"),iN(3932,"HH:mm:ss"),sg(),iN(3933,"."),sg(),Tl(3934,"p")(3935,"strong"),iN(3936,"Componente compat\xEDvel:"),sg(),Tl(3937,"code"),iN(3938,"po-datetimepicker"),sg(),iN(3939,", "),Tl(3940,"code"),iN(3941,"po-timepicker"),sg()()()(),Tl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),iN(3946," minValue"),Gl(3947,"br"),sg()()(),Tl(3948,"td",21)(3949,"code",27),iN(3950,"string "),sg(),Tl(3951,"code",45),iN(3952," number"),sg()(),Tl(3953,"td",24)(3954,"em")(3955,"strong"),iN(3956,"(opcional)"),sg()(),Tl(3957,"p"),iN(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3959,"em"),iN(3960,"number"),sg(),iN(3961,", "),Tl(3962,"em"),iN(3963,"date"),sg(),iN(3964,", "),Tl(3965,"em"),iN(3966,"dateTime"),sg(),iN(3967," ou "),Tl(3968,"em"),iN(3969,"time"),sg(),iN(3970,"."),sg(),Tl(3971,"blockquote")(3972,"p"),iN(3973,"Para "),Tl(3974,"code"),iN(3975,"po-timepicker"),sg(),iN(3976,", o valor deve estar no formato "),Tl(3977,"code"),iN(3978,"HH:mm"),sg(),iN(3979," ou "),Tl(3980,"code"),iN(3981,"HH:mm:ss"),sg(),iN(3982,"."),sg()(),Tl(3983,"p")(3984,"strong"),iN(3985,"Componentes compat\xEDveis:"),sg(),Tl(3986,"code"),iN(3987,"po-datepicker"),sg(),iN(3988,", "),Tl(3989,"code"),iN(3990,"po-datepicker-range"),sg(),iN(3991,", "),Tl(3992,"code"),iN(3993,"po-number"),sg(),iN(3994,", "),Tl(3995,"code"),iN(3996,"po-decimal"),sg(),iN(3997,", "),Tl(3998,"code"),iN(3999,"po-timepicker"),sg()()()(),Tl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),iN(4004," minuteInterval"),Gl(4005,"br"),sg()()(),Tl(4006,"td",21)(4007,"code",45),iN(4008,"number"),sg()(),Tl(4009,"td",24)(4010,"em")(4011,"strong"),iN(4012,"(opcional)"),sg()(),Tl(4013,"p"),iN(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),sg()()(),Tl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),iN(4019," mode"),Gl(4020,"br"),sg()()(),Tl(4021,"td",21)(4022,"code",68),iN(4023,"'month-year' "),sg(),Tl(4024,"code",69),iN(4025," 'year'"),sg()(),Tl(4026,"td",24)(4027,"em")(4028,"strong"),iN(4029,"(opcional)"),sg()(),Tl(4030,"p"),iN(4031,"Define o modo de sele\xE7\xE3o do "),Tl(4032,"code"),iN(4033,"po-datepicker"),sg(),iN(4034,"."),sg(),Tl(4035,"p"),iN(4036,"Valores aceitos:"),sg(),Tl(4037,"ul")(4038,"li")(4039,"code"),iN(4040,"'month-year'"),sg(),iN(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Tl(4042,"code"),iN(4043,"MM/YYYY"),sg(),iN(4044,")"),sg(),Tl(4045,"li")(4046,"code"),iN(4047,"'year'"),sg(),iN(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Tl(4049,"code"),iN(4050,"YYYY"),sg(),iN(4051,")"),sg()(),Tl(4052,"p")(4053,"strong"),iN(4054,"Componente compat\xEDvel:"),sg(),Tl(4055,"code"),iN(4056,"po-datepicker"),sg()()()(),Tl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),iN(4061," modelFormat"),Gl(4062,"br"),sg()()(),Tl(4063,"td",21)(4064,"code",70),iN(4065,"PoTimepickerModelFormat"),sg()(),Tl(4066,"td",24)(4067,"em")(4068,"strong"),iN(4069,"(opcional)"),sg()(),Tl(4070,"p"),iN(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Tl(4072,"code"),iN(4073,"po-timepicker"),sg(),iN(4074,"."),sg(),Tl(4075,"blockquote")(4076,"p"),iN(4077,"Veja os valores v\xE1lidos no "),Tl(4078,"code"),iN(4079,"PoTimepickerModelFormat"),sg(),iN(4080,"."),sg()(),Tl(4081,"p")(4082,"strong"),iN(4083,"Componente compat\xEDvel:"),sg(),Tl(4084,"code"),iN(4085,"po-timepicker"),sg()()()(),Tl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),iN(4090," multiple"),Gl(4091,"br"),sg()()(),Tl(4092,"td",21)(4093,"code",29),iN(4094,"boolean"),sg()(),Tl(4095,"td",24)(4096,"em")(4097,"strong"),iN(4098,"(opcional)"),sg()(),Tl(4099,"p"),iN(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Tl(4101,"p")(4102,"strong"),iN(4103,"Componentes compat\xEDveis:"),sg(),Tl(4104,"code"),iN(4105,"po-lookup"),sg(),iN(4106,", "),Tl(4107,"code"),iN(4108,"po-upload"),sg()()()(),Tl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),iN(4113," noAutocomplete"),Gl(4114,"br"),sg()()(),Tl(4115,"td",21)(4116,"code",29),iN(4117,"boolean"),sg()(),Tl(4118,"td",24)(4119,"em")(4120,"strong"),iN(4121,"(opcional)"),sg()(),Tl(4122,"p"),iN(4123,"Define a propriedade nativa "),Tl(4124,"code"),iN(4125,"autocomplete"),sg(),iN(4126," do campo como off."),sg(),Tl(4127,"p")(4128,"strong"),iN(4129,"Componentes compat\xEDveis:"),sg(),Tl(4130,"code"),iN(4131,"po-datepicker"),sg(),iN(4132,", "),Tl(4133,"code"),iN(4134,"po-datepicker-range"),sg(),iN(4135,", "),Tl(4136,"code"),iN(4137,"po-input"),sg(),iN(4138,", "),Tl(4139,"code"),iN(4140,"po-number"),sg(),iN(4141,", "),Tl(4142,"code"),iN(4143,"po-decimal"),sg(),iN(4144,`,
`),Tl(4145,"code"),iN(4146,"po-lookup"),sg(),iN(4147,", "),Tl(4148,"code"),iN(4149,"po-password"),sg(),iN(4150,", "),Tl(4151,"code"),iN(4152,"po-timepicker"),sg(),iN(4153,"."),sg()()(),Tl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),iN(4158," offsetColumns"),Gl(4159,"br"),sg()()(),Tl(4160,"td",21)(4161,"code",45),iN(4162,"number"),sg()(),Tl(4163,"td",24)(4164,"em")(4165,"strong"),iN(4166,"(opcional)"),sg()(),Tl(4167,"p"),iN(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Tl(4169,"p"),iN(4170,"Deve ser usado o sistema de "),Tl(4171,"strong"),iN(4172,"grid"),sg(),iN(4173," do PO (1 ... 12 colunas)."),sg(),Tl(4174,"blockquote")(4175,"p"),iN(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),iN(4181," offsetLgColumns"),Gl(4182,"br"),sg()()(),Tl(4183,"td",21)(4184,"code",45),iN(4185,"number"),sg()(),Tl(4186,"td",24)(4187,"em")(4188,"strong"),iN(4189,"(opcional)"),sg()(),Tl(4190,"p"),iN(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(4192,"p"),iN(4193,"Deve ser usado o sistema de "),Tl(4194,"strong"),iN(4195,"grid"),sg(),iN(4196," do PO (1 ... 12 colunas)."),sg(),Tl(4197,"blockquote")(4198,"p"),iN(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4200,"code"),iN(4201,"offsetColumns"),sg(),iN(4202,"."),sg()()()(),Tl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),iN(4207," offsetMdColumns"),Gl(4208,"br"),sg()()(),Tl(4209,"td",21)(4210,"code",45),iN(4211,"number"),sg()(),Tl(4212,"td",24)(4213,"em")(4214,"strong"),iN(4215,"(opcional)"),sg()(),Tl(4216,"p"),iN(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(4218,"p"),iN(4219,"Deve ser usado o sistema de "),Tl(4220,"strong"),iN(4221,"grid"),sg(),iN(4222," do PO (1 ... 12 colunas)."),sg(),Tl(4223,"blockquote")(4224,"p"),iN(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4226,"code"),iN(4227,"offsetColumns"),sg(),iN(4228,"."),sg()()()(),Tl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),iN(4233," offsetSmColumns"),Gl(4234,"br"),sg()()(),Tl(4235,"td",21)(4236,"code",45),iN(4237,"number"),sg()(),Tl(4238,"td",24)(4239,"em")(4240,"strong"),iN(4241,"(opcional)"),sg()(),Tl(4242,"p"),iN(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(4244,"p"),iN(4245,"Deve ser usado o sistema de "),Tl(4246,"strong"),iN(4247,"grid"),sg(),iN(4248," do PO (1 ... 12 colunas)."),sg(),Tl(4249,"blockquote")(4250,"p"),iN(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4252,"code"),iN(4253,"offsetColumns"),sg(),iN(4254,"."),sg()()()(),Tl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),iN(4259," offsetXlColumns"),Gl(4260,"br"),sg()()(),Tl(4261,"td",21)(4262,"code",45),iN(4263,"number"),sg()(),Tl(4264,"td",24)(4265,"em")(4266,"strong"),iN(4267,"(opcional)"),sg()(),Tl(4268,"p"),iN(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(4270,"p"),iN(4271,"Deve ser usado o sistema de "),Tl(4272,"strong"),iN(4273,"grid"),sg(),iN(4274," do PO (1 ... 12 colunas)."),sg(),Tl(4275,"blockquote")(4276,"p"),iN(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(4278,"code"),iN(4279,"offsetColumns"),sg(),iN(4280,"."),sg()()()(),Tl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),iN(4285," onError"),Gl(4286,"br"),sg()()(),Tl(4287,"td",21)(4288,"code",44),iN(4289,"Function"),sg()(),Tl(4290,"td",24)(4291,"em")(4292,"strong"),iN(4293,"(opcional)"),sg()(),Tl(4294,"p"),iN(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Tl(4296,"blockquote")(4297,"p"),iN(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(4299,"code"),iN(4300,"HttpErrorResponse"),sg(),iN(4301,"."),sg()(),Tl(4302,"p")(4303,"strong"),iN(4304,"Componente compat\xEDvel"),sg(),iN(4305,": "),Tl(4306,"code"),iN(4307,"po-upload"),sg()()()(),Tl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),iN(4312," onSuccess"),Gl(4313,"br"),sg()()(),Tl(4314,"td",21)(4315,"code",44),iN(4316,"Function"),sg()(),Tl(4317,"td",24)(4318,"em")(4319,"strong"),iN(4320,"(opcional)"),sg()(),Tl(4321,"p"),iN(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Tl(4323,"blockquote")(4324,"p"),iN(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(4326,"code"),iN(4327,"HttpResponse"),sg(),iN(4328,"."),sg()(),Tl(4329,"p")(4330,"strong"),iN(4331,"Componente compat\xEDvel"),sg(),iN(4332,": "),Tl(4333,"code"),iN(4334,"po-upload"),sg()()()(),Tl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),iN(4339," onUpload"),Gl(4340,"br"),sg()()(),Tl(4341,"td",21)(4342,"code",44),iN(4343,"Function"),sg()(),Tl(4344,"td",24)(4345,"em")(4346,"strong"),iN(4347,"(opcional)"),sg()(),Tl(4348,"p"),iN(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Tl(4350,"pre")(4351,"code"),iN(4352,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Tl(4353,"p")(4354,"strong"),iN(4355,"Componente compat\xEDvel"),sg(),iN(4356,": "),Tl(4357,"code"),iN(4358,"po-upload"),sg()()()(),Tl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),iN(4363," optional"),Gl(4364,"br"),sg()()(),Tl(4365,"td",21)(4366,"code",29),iN(4367,"boolean"),sg()(),Tl(4368,"td",24)(4369,"em")(4370,"strong"),iN(4371,"(opcional)"),sg()(),Tl(4372,"p"),iN(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(4374,"blockquote")(4375,"p"),iN(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),sg()(),Tl(4377,"ul")(4378,"li"),iN(4379,"O campo for "),Tl(4380,"code"),iN(4381,"required"),sg(),iN(4382,", ou;"),sg(),Tl(4383,"li"),iN(4384,"N\xE3o possuir "),Tl(4385,"code"),iN(4386,"help"),sg(),iN(4387," e "),Tl(4388,"code"),iN(4389,"label"),sg(),iN(4390,"."),sg()(),Tl(4391,"p")(4392,"strong"),iN(4393,"Componentes compat\xEDveis:"),sg(),Tl(4394,"code"),iN(4395,"po-datepicker"),sg(),iN(4396,", "),Tl(4397,"code"),iN(4398,"po-datepicker-range"),sg(),iN(4399,", "),Tl(4400,"code"),iN(4401,"po-timepicker"),sg(),iN(4402,", "),Tl(4403,"code"),iN(4404,"po-input"),sg(),iN(4405,", "),Tl(4406,"code"),iN(4407,"po-number"),sg(),iN(4408,`,
`),Tl(4409,"code"),iN(4410,"po-decimal"),sg(),iN(4411,", "),Tl(4412,"code"),iN(4413,"po-select"),sg(),iN(4414,", "),Tl(4415,"code"),iN(4416,"po-radio-group"),sg(),iN(4417,", "),Tl(4418,"code"),iN(4419,"po-combo"),sg(),iN(4420,", "),Tl(4421,"code"),iN(4422,"po-lookup"),sg(),iN(4423,", "),Tl(4424,"code"),iN(4425,"po-checkbox-group"),sg(),iN(4426,", "),Tl(4427,"code"),iN(4428,"po-multiselect"),sg(),iN(4429,`,
`),Tl(4430,"code"),iN(4431,"po-textarea"),sg(),iN(4432,", "),Tl(4433,"code"),iN(4434,"po-password"),sg(),iN(4435,"."),sg()()(),Tl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),iN(4440," options"),Gl(4441,"br"),sg()()(),Tl(4442,"td",21)(4443,"code",32),iN(4444,"Array<string> "),sg(),Tl(4445,"code",71),iN(4446," Array<PoSelectOption> "),sg(),Tl(4447,"code",72),iN(4448," Array<PoMultiselectOption> "),sg(),Tl(4449,"code",73),iN(4450," Array<PoCheckboxGroupOption> "),sg(),Tl(4451,"code",74),iN(4452," Array<any>"),sg()(),Tl(4453,"td",24)(4454,"em")(4455,"strong"),iN(4456,"(opcional)"),sg()(),Tl(4457,"p"),iN(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),sg(),Tl(4459,"p")(4460,"strong"),iN(4461,"Componentes compat\xEDveis:"),sg(),Tl(4462,"code"),iN(4463,"po-select"),sg(),iN(4464,", "),Tl(4465,"code"),iN(4466,"po-radio-group"),sg(),iN(4467,", "),Tl(4468,"code"),iN(4469,"po-checkbox-group"),sg(),iN(4470,", "),Tl(4471,"code"),iN(4472,"po-multiselect"),sg(),iN(4473,"."),sg()()(),Tl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),iN(4478," optionsMulti"),Gl(4479,"br"),sg()()(),Tl(4480,"td",21)(4481,"code",29),iN(4482,"boolean"),sg()(),Tl(4483,"td",24)(4484,"em")(4485,"strong"),iN(4486,"(opcional)"),sg()(),Tl(4487,"p"),iN(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),sg()()(),Tl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),iN(4493," optionsService"),Gl(4494,"br"),sg()()(),Tl(4495,"td",21)(4496,"code",27),iN(4497,"string "),sg(),Tl(4498,"code",75),iN(4499," PoComboFilter "),sg(),Tl(4500,"code",76),iN(4501," PoMultiselectFilter"),sg()(),Tl(4502,"td",24)(4503,"em")(4504,"strong"),iN(4505,"(opcional)"),sg()(),Tl(4506,"p"),iN(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Tl(4508,"strong"),iN(4509,"Importante"),sg()(),Tl(4510,"blockquote")(4511,"p"),iN(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Tl(4513,"a",7),iN(4514,"guia de API do PO UI"),sg(),iN(4515,"."),sg()()()(),Tl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),iN(4520," order"),Gl(4521,"br"),sg()()(),Tl(4522,"td",21)(4523,"code",45),iN(4524,"number"),sg()(),Tl(4525,"td",24)(4526,"em")(4527,"strong"),iN(4528,"(opcional)"),sg()(),Tl(4529,"p"),iN(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Tl(4531,"p"),iN(4532,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(4533,"p")(4534,"code"),iN(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),sg()(),Tl(4536,"p"),iN(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Tl(4538,"code"),iN(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),sg()(),Tl(4540,"p"),iN(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Tl(4542,"p"),iN(4543,"Campos sem "),Tl(4544,"code"),iN(4545,"order"),sg(),iN(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Tl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),iN(4551," params"),Gl(4552,"br"),sg()()(),Tl(4553,"td",21)(4554,"code",33),iN(4555,"any"),sg()(),Tl(4556,"td",24)(4557,"em")(4558,"strong"),iN(4559,"(opcional)"),sg()(),Tl(4560,"p"),iN(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Tl(4562,"code"),iN(4563,"po-lookup"),sg(),iN(4564,` e
`),Tl(4565,"code"),iN(4566,"po-combo"),sg(),iN(4567,"."),sg(),Tl(4568,"p"),iN(4569,"Por exemplo, para o par\xE2metro "),Tl(4570,"code"),iN(4571,"{ age: 23 }"),sg(),iN(4572," a URL da requisi\xE7\xE3o ficaria:"),sg(),Tl(4573,"p")(4574,"code"),iN(4575,"url + ?age=23&filter=Peter"),sg()()()(),Tl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),iN(4580," pattern"),Gl(4581,"br"),sg()()(),Tl(4582,"td",21)(4583,"code",27),iN(4584,"string"),sg()(),Tl(4585,"td",24)(4586,"em")(4587,"strong"),iN(4588,"(opcional)"),sg()(),Tl(4589,"p"),iN(4590,"Regex para valida\xE7\xE3o do campo."),sg(),Tl(4591,"p")(4592,"strong"),iN(4593,"Componentes compat\xEDveis:"),sg(),Tl(4594,"code"),iN(4595,"po-input"),sg(),iN(4596,", "),Tl(4597,"code"),iN(4598,"po-password"),sg(),iN(4599,"."),sg()()(),Tl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),iN(4604," placeholder"),Gl(4605,"br"),sg()()(),Tl(4606,"td",21)(4607,"code",27),iN(4608,"string"),sg()(),Tl(4609,"td",24)(4610,"em")(4611,"strong"),iN(4612,"(opcional)"),sg()(),Tl(4613,"p"),iN(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),sg(),Tl(4615,"p")(4616,"strong"),iN(4617,"Componentes compat\xEDveis:"),sg(),Tl(4618,"code"),iN(4619,"po-datepicker"),sg(),iN(4620,", "),Tl(4621,"code"),iN(4622,"po-datepicker-range"),sg(),iN(4623,", "),Tl(4624,"code"),iN(4625,"po-timepicker"),sg(),iN(4626,", "),Tl(4627,"code"),iN(4628,"po-input"),sg(),iN(4629,", "),Tl(4630,"code"),iN(4631,"po-number"),sg(),iN(4632,", "),Tl(4633,"code"),iN(4634,"po-decimal"),sg(),iN(4635,", "),Tl(4636,"code"),iN(4637,"po-select"),sg(),iN(4638,", "),Tl(4639,"code"),iN(4640,"po-combo"),sg(),iN(4641,", "),Tl(4642,"code"),iN(4643,"po-lookup"),sg(),iN(4644,", "),Tl(4645,"code"),iN(4646,"po-multiselect"),sg(),iN(4647,", "),Tl(4648,"code"),iN(4649,"po-textarea"),sg(),iN(4650,", "),Tl(4651,"code"),iN(4652,"po-password"),sg(),iN(4653,"."),sg()()(),Tl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),iN(4658," placeholderSearch"),Gl(4659,"br"),sg()()(),Tl(4660,"td",21)(4661,"code",27),iN(4662,"string"),sg()(),Tl(4663,"td",24)(4664,"em")(4665,"strong"),iN(4666,"(opcional)"),sg()(),Tl(4667,"p"),iN(4668,"Placeholder do campo de pesquisa do "),Tl(4669,"code"),iN(4670,"po-multiselect"),sg(),iN(4671,"."),sg(),Tl(4672,"blockquote")(4673,"p"),iN(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Tl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),iN(4679," property"),Gl(4680,"br"),sg()()(),Tl(4681,"td",21)(4682,"code",27),iN(4683,"string"),sg()(),Tl(4684,"td",24)(4685,"p"),iN(4686,"Nome de refer\xEAncia do campo."),sg()()(),Tl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),iN(4691," range"),Gl(4692,"br"),sg()()(),Tl(4693,"td",21)(4694,"code",29),iN(4695,"boolean"),sg()(),Tl(4696,"td",24)(4697,"em")(4698,"strong"),iN(4699,"(opcional)"),sg()(),Tl(4700,"p"),iN(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),sg(),Tl(4702,"blockquote")(4703,"p"),iN(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),sg()()()(),Tl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),iN(4709," rangePresetOptions"),Gl(4710,"br"),sg()()(),Tl(4711,"td",21)(4712,"code",77),iN(4713,"Array<PoCalendarRangePreset>"),sg()(),Tl(4714,"td",24)(4715,"em")(4716,"strong"),iN(4717,"(opcional)"),sg()(),Tl(4718,"p"),iN(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),sg(),Tl(4720,"p"),iN(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Tl(4722,"code"),iN(4723,"PoCalendarRangePreset"),sg(),iN(4724,"."),sg(),Tl(4725,"p")(4726,"strong"),iN(4727,"Componente compat\xEDvel:"),sg(),Tl(4728,"code"),iN(4729,"po-datepicker-range"),sg()()()(),Tl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),iN(4734," rangePresets"),Gl(4735,"br"),sg()()(),Tl(4736,"td",21)(4737,"code",29),iN(4738,"boolean "),sg(),Tl(4739,"code",32),iN(4740," Array<string>"),sg()(),Tl(4741,"td",24)(4742,"em")(4743,"strong"),iN(4744,"(opcional)"),sg()(),Tl(4745,"p"),iN(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),sg(),Tl(4747,"p"),iN(4748,"Aceita os seguintes valores:"),sg(),Tl(4749,"ul")(4750,"li")(4751,"code"),iN(4752,"true"),sg(),iN(4753,": exibe todos os presets padr\xE3o."),sg(),Tl(4754,"li")(4755,"code"),iN(4756,"false"),sg(),iN(4757,": n\xE3o exibe os presets padr\xE3o."),sg(),Tl(4758,"li")(4759,"code"),iN(4760,"Array<string>"),sg(),iN(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),sg()(),Tl(4762,"p")(4763,"strong"),iN(4764,"Componente compat\xEDvel:"),sg(),Tl(4765,"code"),iN(4766,"po-datepicker-range"),sg()()()(),Tl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),iN(4771," rangePresetsOrder"),Gl(4772,"br"),sg()()(),Tl(4773,"td",21)(4774,"code",78),iN(4775,"'asc' "),sg(),Tl(4776,"code",79),iN(4777," 'desc'"),sg()(),Tl(4778,"td",24)(4779,"em")(4780,"strong"),iN(4781,"(opcional)"),sg()(),Tl(4782,"p"),iN(4783,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Tl(4784,"p"),iN(4785,"Valores aceitos:"),sg(),Tl(4786,"ul")(4787,"li")(4788,"code"),iN(4789,"'asc'"),sg(),iN(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),sg(),Tl(4791,"li")(4792,"code"),iN(4793,"'desc'"),sg(),iN(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),sg()(),Tl(4795,"p")(4796,"strong"),iN(4797,"Componente compat\xEDvel:"),sg(),Tl(4798,"code"),iN(4799,"po-datepicker-range"),sg()()()(),Tl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),iN(4804," readonly"),Gl(4805,"br"),sg()()(),Tl(4806,"td",21)(4807,"code",29),iN(4808,"boolean"),sg()(),Tl(4809,"td",24)(4810,"em")(4811,"strong"),iN(4812,"(opcional)"),sg()(),Tl(4813,"p"),iN(4814,"Indica que o campo ser\xE1 somente leitura."),sg(),Tl(4815,"p")(4816,"strong"),iN(4817,"Componentes compat\xEDveis:"),sg(),Tl(4818,"code"),iN(4819,"po-datepicker"),sg(),iN(4820,", "),Tl(4821,"code"),iN(4822,"po-datepicker-range"),sg(),iN(4823,", "),Tl(4824,"code"),iN(4825,"po-timepicker"),sg(),iN(4826,", "),Tl(4827,"code"),iN(4828,"po-input"),sg(),iN(4829,", "),Tl(4830,"code"),iN(4831,"po-number"),sg(),iN(4832,`,
`),Tl(4833,"code"),iN(4834,"po-decimal"),sg(),iN(4835,", "),Tl(4836,"code"),iN(4837,"po-select"),sg(),iN(4838,", "),Tl(4839,"code"),iN(4840,"po-textarea"),sg(),iN(4841,", "),Tl(4842,"code"),iN(4843,"po-password"),sg(),iN(4844,"."),sg()()(),Tl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),iN(4849," removeInitialFilter"),Gl(4850,"br"),sg()()(),Tl(4851,"td",21)(4852,"code",29),iN(4853,"boolean"),sg()(),Tl(4854,"td",24)(4855,"em")(4856,"strong"),iN(4857,"(opcional)"),sg()(),Tl(4858,"p"),iN(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),sg(),Tl(4860,"blockquote")(4861,"p"),iN(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),sg()(),Tl(4863,"p")(4864,"strong"),iN(4865,"Componente compat\xEDvel"),sg(),iN(4866,": "),Tl(4867,"code"),iN(4868,"po-combo"),sg()()()(),Tl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),iN(4873," required"),Gl(4874,"br"),sg()()(),Tl(4875,"td",21)(4876,"code",29),iN(4877,"boolean"),sg()(),Tl(4878,"td",24)(4879,"em")(4880,"strong"),iN(4881,"(opcional)"),sg()(),Tl(4882,"p"),iN(4883,"Define a obrigatoriedade do campo."),sg(),Tl(4884,"p")(4885,"strong"),iN(4886,"Componentes compat\xEDveis:"),sg(),Tl(4887,"code"),iN(4888,"po-datepicker"),sg(),iN(4889,", "),Tl(4890,"code"),iN(4891,"po-datepicker-range"),sg(),iN(4892,", "),Tl(4893,"code"),iN(4894,"po-timepicker"),sg(),iN(4895,", "),Tl(4896,"code"),iN(4897,"po-input"),sg(),iN(4898,", "),Tl(4899,"code"),iN(4900,"po-number"),sg(),iN(4901,`,
`),Tl(4902,"code"),iN(4903,"po-decimal"),sg(),iN(4904,", "),Tl(4905,"code"),iN(4906,"po-select"),sg(),iN(4907,", "),Tl(4908,"code"),iN(4909,"po-radio-group"),sg(),iN(4910,", "),Tl(4911,"code"),iN(4912,"po-combo"),sg(),iN(4913,", "),Tl(4914,"code"),iN(4915,"po-lookup"),sg(),iN(4916,", "),Tl(4917,"code"),iN(4918,"po-checkbox-group"),sg(),iN(4919,", "),Tl(4920,"code"),iN(4921,"po-multiselect"),sg(),iN(4922,`,
`),Tl(4923,"code"),iN(4924,"po-textarea"),sg(),iN(4925,", "),Tl(4926,"code"),iN(4927,"po-password``, "),sg(),iN(4928,"po-upload`."),sg()()(),Tl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),iN(4933," requiredFieldErrorMessage"),Gl(4934,"br"),sg()()(),Tl(4935,"td",21)(4936,"code",29),iN(4937,"boolean"),sg()(),Tl(4938,"td",24)(4939,"em")(4940,"strong"),iN(4941,"(opcional)"),sg()(),Tl(4942,"p"),iN(4943,"Exibe a mensagem setada na propriedade "),Tl(4944,"code"),iN(4945,"errorMessage"),sg(),iN(4946," se o campo estiver vazio e for requerido."),sg(),Tl(4947,"blockquote")(4948,"p"),iN(4949,"Necess\xE1rio que a propriedade "),Tl(4950,"code"),iN(4951,"required"),sg(),iN(4952," esteja habilitada."),sg()(),Tl(4953,"p")(4954,"strong"),iN(4955,"Componentes compat\xEDveis:"),sg(),Tl(4956,"code"),iN(4957,"po-datepicker"),sg(),iN(4958,", "),Tl(4959,"code"),iN(4960,"po-timepicker"),sg(),iN(4961,", "),Tl(4962,"code"),iN(4963,"po-input"),sg(),iN(4964,", "),Tl(4965,"code"),iN(4966,"po-number"),sg(),iN(4967,", "),Tl(4968,"code"),iN(4969,"po-decimal"),sg(),iN(4970,", "),Tl(4971,"code"),iN(4972,"po-password"),sg(),iN(4973,"."),sg()()(),Tl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),iN(4978," restrictions"),Gl(4979,"br"),sg()()(),Tl(4980,"td",21)(4981,"code",80),iN(4982,"PoUploadFileRestrictions"),sg()(),Tl(4983,"td",24)(4984,"em")(4985,"strong"),iN(4986,"(opcional)"),sg()(),Tl(4987,"p"),iN(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Tl(4989,"code"),iN(4990,"PoUploadFileRestrictions"),sg(),iN(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg(),Tl(4992,"p")(4993,"strong"),iN(4994,"Componente compat\xEDvel"),sg(),iN(4995,": "),Tl(4996,"code"),iN(4997,"po-upload"),sg()()()(),Tl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),iN(5002," rows"),Gl(5003,"br"),sg()()(),Tl(5004,"td",21)(5005,"code",45),iN(5006,"number"),sg()(),Tl(5007,"td",24)(5008,"em")(5009,"strong"),iN(5010,"(opcional)"),sg()(),Tl(5011,"p"),iN(5012,"Quantidade de linhas exibidas no "),Tl(5013,"code"),iN(5014,"po-textarea"),sg(),iN(5015,"."),sg()()(),Tl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),iN(5020," searchService"),Gl(5021,"br"),sg()()(),Tl(5022,"td",21)(5023,"code",27),iN(5024,"string "),sg(),Tl(5025,"code",34),iN(5026," PoLookupFilter"),sg()(),Tl(5027,"td",24)(5028,"em")(5029,"strong"),iN(5030,"(opcional)"),sg()(),Tl(5031,"p"),iN(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Tl(5033,"code"),iN(5034,"columns"),sg(),iN(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Tl(5036,"strong"),iN(5037,"Importante:"),sg()(),Tl(5038,"blockquote")(5039,"p"),iN(5040,"Caso utilizar a propriedade "),Tl(5041,"code"),iN(5042,"optionsService"),sg(),iN(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(5044,"a",7),iN(5045,"guia de API do PO UI"),sg(),iN(5046,"."),sg()()()(),Tl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),iN(5051," secondInterval"),Gl(5052,"br"),sg()()(),Tl(5053,"td",21)(5054,"code",45),iN(5055,"number"),sg()(),Tl(5056,"td",24)(5057,"em")(5058,"strong"),iN(5059,"(opcional)"),sg()(),Tl(5060,"p"),iN(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),sg()()(),Tl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),iN(5066," secret"),Gl(5067,"br"),sg()()(),Tl(5068,"td",21)(5069,"code",29),iN(5070,"boolean"),sg()(),Tl(5071,"td",24)(5072,"em")(5073,"strong"),iN(5074,"(opcional)"),sg()(),Tl(5075,"p"),iN(5076,"Esconde a informa\xE7\xE3o estilo "),Tl(5077,"em"),iN(5078,"password"),sg(),iN(5079,", pode ser utilizado quando o tipo de dado for "),Tl(5080,"em"),iN(5081,"string"),sg(),iN(5082,"."),sg()()(),Tl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),iN(5087," showRequired"),Gl(5088,"br"),sg()()(),Tl(5089,"td",21)(5090,"code",29),iN(5091,"boolean"),sg()(),Tl(5092,"td",24)(5093,"em")(5094,"strong"),iN(5095,"(opcional)"),sg()(),Tl(5096,"p"),iN(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(5098,"blockquote")(5099,"p"),iN(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(5101,"ul")(5102,"li"),iN(5103,"N\xE3o possuir "),Tl(5104,"code"),iN(5105,"p-help"),sg(),iN(5106," e/ou "),Tl(5107,"code"),iN(5108,"p-label"),sg(),iN(5109,"."),sg()(),Tl(5110,"p")(5111,"strong"),iN(5112,"Componentes compat\xEDveis:"),sg(),Tl(5113,"code"),iN(5114,"po-datepicker"),sg(),iN(5115,", "),Tl(5116,"code"),iN(5117,"po-datepicker-range"),sg(),iN(5118,", "),Tl(5119,"code"),iN(5120,"po-timepicker"),sg(),iN(5121,", "),Tl(5122,"code"),iN(5123,"po-input"),sg(),iN(5124,", "),Tl(5125,"code"),iN(5126,"po-number"),sg(),iN(5127,`,
`),Tl(5128,"code"),iN(5129,"po-decimal"),sg(),iN(5130,", "),Tl(5131,"code"),iN(5132,"po-select"),sg(),iN(5133,", "),Tl(5134,"code"),iN(5135,"po-radio-group"),sg(),iN(5136,", "),Tl(5137,"code"),iN(5138,"po-combo"),sg(),iN(5139,", "),Tl(5140,"code"),iN(5141,"po-lookup"),sg(),iN(5142,", "),Tl(5143,"code"),iN(5144,"po-checkbox-group"),sg(),iN(5145,", "),Tl(5146,"code"),iN(5147,"po-multiselect"),sg(),iN(5148,`,
`),Tl(5149,"code"),iN(5150,"po-textarea"),sg(),iN(5151,", "),Tl(5152,"code"),iN(5153,"po-password"),sg(),iN(5154,", "),Tl(5155,"code"),iN(5156,"po-upload"),sg(),iN(5157,"."),sg()()(),Tl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),iN(5162," showSeconds"),Gl(5163,"br"),sg()()(),Tl(5164,"td",21)(5165,"code",29),iN(5166,"boolean"),sg()(),Tl(5167,"td",24)(5168,"em")(5169,"strong"),iN(5170,"(opcional)"),sg()(),Tl(5171,"p"),iN(5172,"Exibe a coluna de segundos no painel do timepicker."),sg()()(),Tl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),iN(5177," showThumbnail"),Gl(5178,"br"),sg()()(),Tl(5179,"td",21)(5180,"code",29),iN(5181,"boolean"),sg()(),Tl(5182,"td",24)(5183,"em")(5184,"strong"),iN(5185,"(opcional)"),sg()(),Tl(5186,"p"),iN(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Tl(5188,"blockquote")(5189,"p"),iN(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Tl(5191,"code"),iN(5192,".png"),sg(),iN(5193,", "),Tl(5194,"code"),iN(5195,".jpg"),sg(),iN(5196,", "),Tl(5197,"code"),iN(5198,".jpeg"),sg(),iN(5199," e "),Tl(5200,"code"),iN(5201,".gif"),sg(),iN(5202,")."),sg()(),Tl(5203,"p")(5204,"strong"),iN(5205,"Componente compat\xEDvel"),sg(),iN(5206,": "),Tl(5207,"code"),iN(5208,"po-upload"),sg()()()(),Tl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),iN(5213," size"),Gl(5214,"br"),sg()()(),Tl(5215,"td",21)(5216,"code",27),iN(5217,"string"),sg()(),Tl(5218,"td",24)(5219,"em")(5220,"strong"),iN(5221,"(opcional)"),sg()(),Tl(5222,"p"),iN(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),sg(),Tl(5224,"ul")(5225,"li")(5226,"code"),iN(5227,"small"),sg(),iN(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(5229,"li")(5230,"code"),iN(5231,"medium"),sg(),iN(5232,": aplica a medida medium de cada componente."),sg(),Tl(5233,"li")(5234,"code"),iN(5235,"large"),sg(),iN(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Tl(5237,"code"),iN(5238,"po-checkbox"),sg(),iN(5239," e "),Tl(5240,"code"),iN(5241,"po-radio-group"),sg(),iN(5242,")."),Tl(5243,"blockquote")(5244,"p"),iN(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(5246,"code"),iN(5247,"medium"),sg(),iN(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(5249,"a",40),iN(5250,"po-theme"),sg(),iN(5251,"."),sg()()()()()(),Tl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),iN(5256," sort"),Gl(5257,"br"),sg()()(),Tl(5258,"td",21)(5259,"code",29),iN(5260,"boolean"),sg()(),Tl(5261,"td",24)(5262,"em")(5263,"strong"),iN(5264,"(opcional)"),sg()(),Tl(5265,"p"),iN(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg(),Tl(5267,"p")(5268,"strong"),iN(5269,"Componentes compat\xEDveis:"),sg(),Tl(5270,"code"),iN(5271,"po-combo"),sg(),iN(5272,", po-multiselect"),sg()()(),Tl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),iN(5277," step"),Gl(5278,"br"),sg()()(),Tl(5279,"td",21)(5280,"code",45),iN(5281,"number"),sg()(),Tl(5282,"td",24)(5283,"em")(5284,"strong"),iN(5285,"(opcional)"),sg()(),Tl(5286,"p"),iN(5287,"Intervalo utilizado no "),Tl(5288,"code"),iN(5289,"po-number"),sg(),iN(5290,"."),sg()()(),Tl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),iN(5295," thousandMaxlength"),Gl(5296,"br"),sg()()(),Tl(5297,"td",21)(5298,"code",45),iN(5299,"number"),sg()(),Tl(5300,"td",24)(5301,"em")(5302,"strong"),iN(5303,"(opcional)"),sg()(),Tl(5304,"p"),iN(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),sg(),Tl(5306,"blockquote")(5307,"p"),iN(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(5309,"code"),iN(5310,"type"),sg(),iN(5311," for "),Tl(5312,"em"),iN(5313,"currency"),sg(),iN(5314," ou "),Tl(5315,"em"),iN(5316,"decimal"),sg(),iN(5317,"."),sg()()()(),Tl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),iN(5322," type"),Gl(5323,"br"),sg()()(),Tl(5324,"td",21)(5325,"code",27),iN(5326,"string "),sg(),Tl(5327,"code",81),iN(5328," PoDynamicFieldType"),sg()(),Tl(5329,"td",24)(5330,"em")(5331,"strong"),iN(5332,"(opcional)"),sg()(),Tl(5333,"p"),iN(5334,"Tipo do valor campo."),sg(),Tl(5335,"p"),iN(5336,"Valores v\xE1lidos:"),sg(),Tl(5337,"ul")(5338,"li")(5339,"code"),iN(5340,"boolean"),sg(),iN(5341,": Valores "),Tl(5342,"em"),iN(5343,"booleanos"),sg(),iN(5344,"."),sg(),Tl(5345,"li")(5346,"code"),iN(5347,"currency"),sg(),iN(5348,": Valores monet\xE1rios."),sg(),Tl(5349,"li")(5350,"code"),iN(5351,"decimal"),sg(),iN(5352,": Valores decimais."),sg(),Tl(5353,"li")(5354,"code"),iN(5355,"date"),sg(),iN(5356,": Valores de datas."),Tl(5357,"ul")(5358,"li"),iN(5359,"Aceita os tipos "),Tl(5360,"strong"),iN(5361,"string"),sg(),iN(5362," e "),Tl(5363,"strong"),iN(5364,"Date"),sg(),iN(5365,` padr\xE3o do Javascript,
por exemplo: `),Tl(5366,"code"),iN(5367,"'2017-11-28'"),sg(),iN(5368," ou "),Tl(5369,"code"),iN(5370,"new Date(2017, 10, 28)"),sg(),iN(5371,"."),sg()()(),Tl(5372,"li")(5373,"code"),iN(5374,"dateTime"),sg(),iN(5375,": Valor de data com hor\xE1rio."),Tl(5376,"ul")(5377,"li"),iN(5378,"Aceita o tipo "),Tl(5379,"em"),iN(5380,"string"),sg(),iN(5381," no formato "),Tl(5382,"strong"),iN(5383,"ISO-8601"),sg(),iN(5384," extendido "),Tl(5385,"strong"),iN(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),iN(5387,`
e o tipo `),Tl(5388,"strong"),iN(5389,"Date"),sg(),iN(5390," padr\xE3o do Javascript, por exemplo: "),Tl(5391,"code"),iN(5392,"'2017-11-28T00:00:00-02:00'"),sg(),iN(5393," ou "),Tl(5394,"code"),iN(5395,"new Date(2017, 10, 28)"),sg(),iN(5396,"."),sg()()(),Tl(5397,"li")(5398,"code"),iN(5399,"number"),sg(),iN(5400,": Valores num\xE9ricos."),sg(),Tl(5401,"li")(5402,"code"),iN(5403,"string"),sg(),iN(5404,": Textos."),sg(),Tl(5405,"li")(5406,"code"),iN(5407,"time"),sg(),iN(5408,": Valor do hor\xE1rio."),Tl(5409,"ul")(5410,"li"),iN(5411,"Aceita o tipo "),Tl(5412,"strong"),iN(5413,"string"),sg(),iN(5414," nos formatos "),Tl(5415,"strong"),iN(5416,"'HH:mm:ss'"),sg(),iN(5417," ou "),Tl(5418,"strong"),iN(5419,"'HH:mm:ss.ffffff'"),sg(),iN(5420,", por exemplo: "),Tl(5421,"code"),iN(5422,"'23:12:45'"),sg(),iN(5423,"."),sg()()()()()(),Tl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),iN(5428," url"),Gl(5429,"br"),sg()()(),Tl(5430,"td",21)(5431,"code",27),iN(5432,"string"),sg()(),Tl(5433,"td",24)(5434,"em")(5435,"strong"),iN(5436,"(opcional)"),sg()(),Tl(5437,"p"),iN(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg(),Tl(5439,"p")(5440,"strong"),iN(5441,"Componente compat\xEDvel"),sg(),iN(5442,": "),Tl(5443,"code"),iN(5444,"po-upload"),sg()()()(),Tl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),iN(5449," validate"),Gl(5450,"br"),sg()()(),Tl(5451,"td",21)(5452,"code",27),iN(5453,"string "),sg(),Tl(5454,"code",44),iN(5455," Function"),sg()(),Tl(5456,"td",24)(5457,"em")(5458,"strong"),iN(5459,"(opcional)"),sg()(),Tl(5460,"p"),iN(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Tl(5462,"strong"),iN(5463,"mudan\xE7as do campo"),sg(),iN(5464,"."),sg(),Tl(5465,"ul")(5466,"li"),iN(5467,"A propriedade aceita os seguintes tipos:"),sg()(),Tl(5468,"ul")(5469,"li")(5470,"strong"),iN(5471,"String"),sg(),iN(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Tl(5473,"code"),iN(5474,"POST"),sg(),iN(5475,"."),sg(),Tl(5476,"li")(5477,"strong"),iN(5478,"Function"),sg(),iN(5479,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(5480,"p"),iN(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Tl(5482,"code"),iN(5483,"PoDynamicFormFieldChanged"),sg(),iN(5484,":"),sg(),Tl(5485,"p")(5486,"code"),iN(5487,"{ property: 'property name', value: 'new value' }"),sg()(),Tl(5488,"p"),iN(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(5490,"a",82),iN(5491,"PoDynamicFormFieldValidation"),sg(),iN(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),sg(),Tl(5493,"pre")(5494,"code"),iN(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),sg()(),Tl(5496,"p"),iN(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(5498,"code"),iN(5499,"bind"),sg(),iN(5500,`, por exemplo:
`),Tl(5501,"code"),iN(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),sg()()()(),Tl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),iN(5507," visible"),Gl(5508,"br"),sg()()(),Tl(5509,"td",21)(5510,"code",29),iN(5511,"boolean"),sg()(),Tl(5512,"td",24)(5513,"em")(5514,"strong"),iN(5515,"(opcional)"),sg()(),Tl(5516,"p"),iN(5517,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()(),Tl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),iN(5522," yearRangeLimit"),Gl(5523,"br"),sg()()(),Tl(5524,"td",21)(5525,"code",45),iN(5526,"number"),sg()(),Tl(5527,"td",24)(5528,"em")(5529,"strong"),iN(5530,"(opcional)"),sg()(),Tl(5531,"p"),iN(5532,"Define o limite de anos exibidos na lista de anos do "),Tl(5533,"code"),iN(5534,"po-datepicker"),sg(),iN(5535," nos modos "),Tl(5536,"code"),iN(5537,"month-year"),sg(),iN(5538," e "),Tl(5539,"code"),iN(5540,"year"),sg(),iN(5541,"."),sg()()()(),Tl(5542,"h4",43)(5543,"code",5),iN(5544,"PoLookupColumn"),sg()(),Tl(5545,"div",2)(5546,"p"),iN(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),sg()(),Tl(5548,"h4",12),iN(5549,"Propriedades"),sg(),Tl(5550,"table",13)(5551,"tr",14)(5552,"th",15),iN(5553,"Nome"),sg(),Tl(5554,"th",15),iN(5555,"Tipo"),sg(),Tl(5556,"th",15),iN(5557,"Descri\xE7\xE3o"),sg()(),Tl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),iN(5562," fieldLabel"),Gl(5563,"br"),sg()()(),Tl(5564,"td",21)(5565,"code",29),iN(5566,"boolean"),sg()(),Tl(5567,"td",24)(5568,"em")(5569,"strong"),iN(5570,"(opcional)"),sg()(),Tl(5571,"p"),iN(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),sg(),Tl(5573,"p"),iN(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),sg(),Tl(5575,"p"),iN(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Tl(5577,"code"),iN(5578,"p-field-format"),sg(),iN(5579," ou "),Tl(5580,"code"),iN(5581,"p-field-label"),sg(),iN(5582," forem configurados no componente."),sg()()(),Tl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),iN(5587," format"),Gl(5588,"br"),sg()()(),Tl(5589,"td",21)(5590,"code",27),iN(5591,"string"),sg()(),Tl(5592,"td",24)(5593,"em")(5594,"strong"),iN(5595,"(opcional)"),sg()(),Tl(5596,"p"),iN(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),sg(),Tl(5598,"ul")(5599,"li"),iN(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),sg(),Tl(5601,"li"),iN(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg()()()(),Tl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),iN(5607," label"),Gl(5608,"br"),sg()()(),Tl(5609,"td",21)(5610,"code",27),iN(5611,"string"),sg()(),Tl(5612,"td",24)(5613,"em")(5614,"strong"),iN(5615,"(opcional)"),sg()(),Tl(5616,"p"),iN(5617,"Texto para t\xEDtulo da coluna."),sg(),Tl(5618,"p"),iN(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(5620,"em"),iN(5621,"label"),sg(),iN(5622," o valor da propriedade "),Tl(5623,"em"),iN(5624,"property"),sg(),iN(5625," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),iN(5630," mask"),Gl(5631,"br"),sg()()(),Tl(5632,"td",21)(5633,"code",27),iN(5634,"string"),sg()(),Tl(5635,"td",24)(5636,"em")(5637,"strong"),iN(5638,"(opcional)"),sg()(),Tl(5639,"p"),iN(5640,"Define uma m\xE1scara para formata\xE7\xE3o do valor exibido na coluna."),sg(),Tl(5641,"p"),iN(5642,"A m\xE1scara \xE9 aplicada somente para "),Tl(5643,"strong"),iN(5644,"exibi\xE7\xE3o"),sg(),iN(5645,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),sg(),Tl(5646,"p"),iN(5647,"Caracteres v\xE1lidos para a m\xE1scara:"),sg(),Tl(5648,"ul")(5649,"li")(5650,"code"),iN(5651,"9"),sg(),iN(5652," : aceita um d\xEDgito num\xE9rico (0-9)."),sg(),Tl(5653,"li")(5654,"code"),iN(5655,"@"),sg(),iN(5656," : aceita um caractere alfab\xE9tico (a-z, A-Z)."),sg(),Tl(5657,"li")(5658,"code"),iN(5659,"w"),sg(),iN(5660," : aceita um caractere alfanum\xE9rico (a-z, A-Z, 0-9)."),sg(),Tl(5661,"li"),iN(5662,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Tl(5663,"code"),iN(5664,"."),sg(),iN(5665,", "),Tl(5666,"code"),iN(5667,"-"),sg(),iN(5668,", "),Tl(5669,"code"),iN(5670,"/"),sg(),iN(5671,", "),Tl(5672,"code"),iN(5673,"("),sg(),iN(5674,", "),Tl(5675,"code"),iN(5676,")"),sg(),iN(5677,", "),Tl(5678,"code"),iN(5679,"+"),sg(),iN(5680,", "),Gl(5681,"code"),iN(5682,")."),sg()(),Tl(5683,"p"),iN(5684,"Exemplos de uso:"),sg(),Tl(5685,"pre")(5686,"code"),iN(5687,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),sg()(),Tl(5688,"blockquote")(5689,"p"),iN(5690,"Esta propriedade \xE9 utilizada apenas para colunas do tipo "),Tl(5691,"code"),iN(5692,"string"),sg(),iN(5693,` (padr\xE3o).
Caso a coluna possua um `),Tl(5694,"code"),iN(5695,"type"),sg(),iN(5696," diferente de "),Tl(5697,"code"),iN(5698,"string"),sg(),iN(5699,", a m\xE1scara ser\xE1 ignorada."),sg()()()(),Tl(5700,"tr",16)(5701,"td",17)(5702,"div",25)(5703,"span",26),iN(5704," property"),Gl(5705,"br"),sg()()(),Tl(5706,"td",21)(5707,"code",27),iN(5708,"string"),sg()(),Tl(5709,"td",24)(5710,"em")(5711,"strong"),iN(5712,"(opcional)"),sg()(),Tl(5713,"p"),iN(5714,"Nome identificador da coluna."),sg()()(),Tl(5715,"tr",16)(5716,"td",17)(5717,"div",25)(5718,"span",26),iN(5719," type"),Gl(5720,"br"),sg()()(),Tl(5721,"td",21)(5722,"code",27),iN(5723,"string"),sg()(),Tl(5724,"td",24)(5725,"em")(5726,"strong"),iN(5727,"(opcional)"),sg()(),Tl(5728,"p"),iN(5729,"Tipo da coluna:"),sg(),Tl(5730,"ul")(5731,"li"),iN(5732,"string (padr\xE3o): textos"),sg(),Tl(5733,"li"),iN(5734,"number: valores num\xE9ricos"),sg(),Tl(5735,"li"),iN(5736,"date: data"),sg(),Tl(5737,"li"),iN(5738,"currency: valores monet\xE1rios"),sg(),Tl(5739,"li"),iN(5740,"dateTime: data e hora"),sg()()()(),Tl(5741,"tr",16)(5742,"td",17)(5743,"div",25)(5744,"span",26),iN(5745," width"),Gl(5746,"br"),sg()()(),Tl(5747,"td",21)(5748,"code",27),iN(5749,"string"),sg()(),Tl(5750,"td",24)(5751,"em")(5752,"strong"),iN(5753,"(opcional)"),sg()(),Tl(5754,"p"),iN(5755,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),sg()()()(),Tl(5756,"h4",43)(5757,"code",5),iN(5758,"PoLookupFilter"),sg()(),Tl(5759,"div",2)(5760,"p"),iN(5761,"Define o tipo de busca utilizado no po-lookup."),sg()(),Tl(5762,"h4",12),iN(5763,"M\xE9todos"),sg(),Tl(5764,"table",41)(5765,"tr",16)(5766,"th",42)(5767,"div",25)(5768,"h4")(5769,"span",26),iN(5770," getFilteredItems "),sg()()()()(),Tl(5771,"tr",24)(5772,"td",24)(5773,"p"),iN(5774,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Tl(5775,"em"),iN(5776,"Observable"),sg(),iN(5777," com a resposta da API no formato da interface "),Tl(5778,"code"),iN(5779,"PoLookupResponseApi"),sg(),iN(5780,"."),sg()()()(),Tl(5781,"h5")(5782,"b"),iN(5783,"Par\xE2metros"),sg()(),Tl(5784,"table",13)(5785,"tr",14)(5786,"th",15),iN(5787,"Nome"),sg(),Tl(5788,"th",15),iN(5789,"Tipo"),sg(),Tl(5790,"th",15),iN(5791,"Descri\xE7\xE3o"),sg()(),Tl(5792,"tr",16)(5793,"td",17),iN(5794," params"),sg(),Tl(5795,"td",21)(5796,"code",83),iN(5797," PoLookupFilteredItemsParams "),sg()(),Tl(5798,"td",24)(5799,"p"),iN(5800,"Objeto enviado por par\xE2metro que implementa a interface "),Tl(5801,"code"),iN(5802,"PoLookupFilteredItemsParams"),sg(),iN(5803,"."),sg()()()(),Gl(5804,"br"),Tl(5805,"table",41)(5806,"tr",16)(5807,"th",42)(5808,"div",25)(5809,"h4")(5810,"span",26),iN(5811," getObjectByValue "),sg()()()()(),Tl(5812,"tr",24)(5813,"td",24)(5814,"p"),iN(5815,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),sg(),Tl(5816,"p"),iN(5817,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),sg()()()(),Tl(5818,"h5")(5819,"b"),iN(5820,"Par\xE2metros"),sg()(),Tl(5821,"table",13)(5822,"tr",14)(5823,"th",15),iN(5824,"Nome"),sg(),Tl(5825,"th",15),iN(5826,"Tipo"),sg(),Tl(5827,"th",15),iN(5828,"Descri\xE7\xE3o"),sg()(),Tl(5829,"tr",16)(5830,"td",17),iN(5831," value"),sg(),Tl(5832,"td",21)(5833,"code",27),iN(5834," string "),sg(),Tl(5835,"code",74),iN(5836," Array<any> "),sg()(),Tl(5837,"td",24)(5838,"p"),iN(5839,"Valor \xFAnico a ser buscado na fonte de dados."),sg()()(),Tl(5840,"tr",16)(5841,"td",17),iN(5842," filterParams"),sg(),Tl(5843,"td",21)(5844,"code",83),iN(5845," any "),sg()(),Tl(5846,"td",24)(5847,"p"),iN(5848,"Valor informado atrav\xE9s da propriedade "),Tl(5849,"code"),iN(5850,"p-filter-params"),sg(),iN(5851,"."),sg()()()(),Gl(5852,"br"),Tl(5853,"h4",43)(5854,"code",5),iN(5855,"PoLookupFilteredItemsParams"),sg()(),Tl(5856,"div",2)(5857,"p"),iN(5858,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Tl(5859,"code"),iN(5860,"getFilteredItems"),sg(),iN(5861,"."),sg()(),Tl(5862,"h4",12),iN(5863,"Propriedades"),sg(),Tl(5864,"table",13)(5865,"tr",14)(5866,"th",15),iN(5867,"Nome"),sg(),Tl(5868,"th",15),iN(5869,"Tipo"),sg(),Tl(5870,"th",15),iN(5871,"Descri\xE7\xE3o"),sg()(),Tl(5872,"tr",16)(5873,"td",17)(5874,"div",25)(5875,"span",26),iN(5876," advancedFilters"),Gl(5877,"br"),sg()()(),Tl(5878,"td",21)(5879,"code",84),iN(5880,`{ [key: string]: any;
}`),sg()(),Tl(5881,"td",24)(5882,"em")(5883,"strong"),iN(5884,"(opcional)"),sg()(),Tl(5885,"p"),iN(5886,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),sg()()(),Tl(5887,"tr",16)(5888,"td",17)(5889,"div",25)(5890,"span",26),iN(5891," filter"),Gl(5892,"br"),sg()()(),Tl(5893,"td",21)(5894,"code",27),iN(5895,"string"),sg()(),Tl(5896,"td",24)(5897,"em")(5898,"strong"),iN(5899,"(opcional)"),sg()(),Tl(5900,"p"),iN(5901,"Conte\xFAdo utilizado para filtrar a lista de itens."),sg()()(),Tl(5902,"tr",16)(5903,"td",17)(5904,"div",25)(5905,"span",26),iN(5906," filterParams"),Gl(5907,"br"),sg()()(),Tl(5908,"td",21)(5909,"code",33),iN(5910,"any"),sg()(),Tl(5911,"td",24)(5912,"em")(5913,"strong"),iN(5914,"(opcional)"),sg()(),Tl(5915,"p"),iN(5916,"Valor informado atrav\xE9s da propriedade "),Tl(5917,"code"),iN(5918,"p-filter-params"),sg(),iN(5919,"."),sg()()(),Tl(5920,"tr",16)(5921,"td",17)(5922,"div",25)(5923,"span",26),iN(5924," order"),Gl(5925,"br"),sg()()(),Tl(5926,"td",21)(5927,"code",27),iN(5928,"string"),sg()(),Tl(5929,"td",24)(5930,"em")(5931,"strong"),iN(5932,"(opcional)"),sg()(),Tl(5933,"p"),iN(5934,"Coluna que est\xE1 sendo ordenada na tabela."),sg(),Tl(5935,"ul")(5936,"li"),iN(5937,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Tl(5938,"code"),iN(5939,"-<colunaOrdenada>"),sg(),iN(5940,", por exemplo "),Tl(5941,"code"),iN(5942,"-name"),sg(),iN(5943,"."),sg(),Tl(5944,"li"),iN(5945,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Tl(5946,"code"),iN(5947,"<colunaOrdenada>"),sg(),iN(5948,", por exemplo "),Tl(5949,"code"),iN(5950,"name"),sg(),iN(5951,"."),sg()()()(),Tl(5952,"tr",16)(5953,"td",17)(5954,"div",25)(5955,"span",26),iN(5956," page"),Gl(5957,"br"),sg()()(),Tl(5958,"td",21)(5959,"code",45),iN(5960,"number"),sg()(),Tl(5961,"td",24)(5962,"em")(5963,"strong"),iN(5964,"(opcional)"),sg()(),Tl(5965,"p"),iN(5966,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),sg()()(),Tl(5967,"tr",16)(5968,"td",17)(5969,"div",25)(5970,"span",26),iN(5971," pageSize"),Gl(5972,"br"),sg()()(),Tl(5973,"td",21)(5974,"code",45),iN(5975,"number"),sg()(),Tl(5976,"td",24)(5977,"em")(5978,"strong"),iN(5979,"(opcional)"),sg()(),Tl(5980,"p"),iN(5981,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),sg()()()(),Tl(5982,"h4",43)(5983,"code",5),iN(5984,"PoLookupLiterals"),sg()(),Tl(5985,"div",2)(5986,"p"),iN(5987,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(5988,"code"),iN(5989,"po-lookup"),sg(),iN(5990,"."),sg()(),Tl(5991,"h4",12),iN(5992,"Propriedades"),sg(),Tl(5993,"table",13)(5994,"tr",14)(5995,"th",15),iN(5996,"Nome"),sg(),Tl(5997,"th",15),iN(5998,"Tipo"),sg(),Tl(5999,"th",15),iN(6e3,"Descri\xE7\xE3o"),sg()(),Tl(6001,"tr",16)(6002,"td",17)(6003,"div",25)(6004,"span",26),iN(6005," clean"),Gl(6006,"br"),sg()()(),Tl(6007,"td",21)(6008,"code",27),iN(6009,"string"),sg()(),Tl(6010,"td",24)(6011,"em")(6012,"strong"),iN(6013,"(opcional)"),sg()(),Tl(6014,"p"),iN(6015,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),sg()()(),Tl(6016,"tr",16)(6017,"td",17)(6018,"div",25)(6019,"span",26),iN(6020," modalAdvancedSearch"),Gl(6021,"br"),sg()()(),Tl(6022,"td",21)(6023,"code",27),iN(6024,"string"),sg()(),Tl(6025,"td",24)(6026,"em")(6027,"strong"),iN(6028,"(opcional)"),sg()(),Tl(6029,"p"),iN(6030,"Texto do link de busca avan\xE7ada."),sg(),Tl(6031,"p"),iN(6032,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),sg()()(),Tl(6033,"tr",16)(6034,"td",17)(6035,"div",25)(6036,"span",26),iN(6037," modalAdvancedSearchPrimaryActionLabel"),Gl(6038,"br"),sg()()(),Tl(6039,"td",21)(6040,"code",27),iN(6041,"string"),sg()(),Tl(6042,"td",24)(6043,"em")(6044,"strong"),iN(6045,"(opcional)"),sg()(),Tl(6046,"p"),iN(6047,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),sg()()(),Tl(6048,"tr",16)(6049,"td",17)(6050,"div",25)(6051,"span",26),iN(6052," modalAdvancedSearchSecondaryActionLabel"),Gl(6053,"br"),sg()()(),Tl(6054,"td",21)(6055,"code",27),iN(6056,"string"),sg()(),Tl(6057,"td",24)(6058,"em")(6059,"strong"),iN(6060,"(opcional)"),sg()(),Tl(6061,"p"),iN(6062,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),sg()()(),Tl(6063,"tr",16)(6064,"td",17)(6065,"div",25)(6066,"span",26),iN(6067," modalAdvancedSearchTitle"),Gl(6068,"br"),sg()()(),Tl(6069,"td",21)(6070,"code",27),iN(6071,"string"),sg()(),Tl(6072,"td",24)(6073,"em")(6074,"strong"),iN(6075,"(opcional)"),sg()(),Tl(6076,"p"),iN(6077,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),sg()()(),Tl(6078,"tr",16)(6079,"td",17)(6080,"div",25)(6081,"span",26),iN(6082," modalDisclaimerGroupTitle"),Gl(6083,"br"),sg()()(),Tl(6084,"td",21)(6085,"code",27),iN(6086,"string"),sg()(),Tl(6087,"td",24)(6088,"em")(6089,"strong"),iN(6090,"(opcional)"),sg()(),Tl(6091,"p"),iN(6092,"Texto exibido no t\xEDtulo do disclaimer."),sg()()(),Tl(6093,"tr",16)(6094,"td",17)(6095,"div",25)(6096,"span",26),iN(6097," modalPlaceholder"),Gl(6098,"br"),sg()()(),Tl(6099,"td",21)(6100,"code",27),iN(6101,"string"),sg()(),Tl(6102,"td",24)(6103,"em")(6104,"strong"),iN(6105,"(opcional)"),sg()(),Tl(6106,"p"),iN(6107,"Texto exibido no placeholder do input da modal."),sg()()(),Tl(6108,"tr",16)(6109,"td",17)(6110,"div",25)(6111,"span",26),iN(6112," modalPrimaryActionLabel"),Gl(6113,"br"),sg()()(),Tl(6114,"td",21)(6115,"code",27),iN(6116,"string"),sg()(),Tl(6117,"td",24)(6118,"em")(6119,"strong"),iN(6120,"(opcional)"),sg()(),Tl(6121,"p"),iN(6122,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),sg()()(),Tl(6123,"tr",16)(6124,"td",17)(6125,"div",25)(6126,"span",26),iN(6127," modalSecondaryActionLabel"),Gl(6128,"br"),sg()()(),Tl(6129,"td",21)(6130,"code",27),iN(6131,"string"),sg()(),Tl(6132,"td",24)(6133,"em")(6134,"strong"),iN(6135,"(opcional)"),sg()(),Tl(6136,"p"),iN(6137,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),sg()()(),Tl(6138,"tr",16)(6139,"td",17)(6140,"div",25)(6141,"span",26),iN(6142," modalTableLoadMoreData"),Gl(6143,"br"),sg()()(),Tl(6144,"td",21)(6145,"code",27),iN(6146,"string"),sg()(),Tl(6147,"td",24)(6148,"em")(6149,"strong"),iN(6150,"(opcional)"),sg()(),Tl(6151,"p"),iN(6152,"Label do "),Tl(6153,"code"),iN(6154,"button"),sg(),iN(6155," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),sg()()(),Tl(6156,"tr",16)(6157,"td",17)(6158,"div",25)(6159,"span",26),iN(6160," modalTableLoadingData"),Gl(6161,"br"),sg()()(),Tl(6162,"td",21)(6163,"code",27),iN(6164,"string"),sg()(),Tl(6165,"td",24)(6166,"em")(6167,"strong"),iN(6168,"(opcional)"),sg()(),Tl(6169,"p"),iN(6170,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),sg()()(),Tl(6171,"tr",16)(6172,"td",17)(6173,"div",25)(6174,"span",26),iN(6175," modalTableNoColumns"),Gl(6176,"br"),sg()()(),Tl(6177,"td",21)(6178,"code",27),iN(6179,"string"),sg()(),Tl(6180,"td",24)(6181,"em")(6182,"strong"),iN(6183,"(opcional)"),sg()(),Tl(6184,"p"),iN(6185,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),sg()()(),Tl(6186,"tr",16)(6187,"td",17)(6188,"div",25)(6189,"span",26),iN(6190," modalTableNoData"),Gl(6191,"br"),sg()()(),Tl(6192,"td",21)(6193,"code",27),iN(6194,"string"),sg()(),Tl(6195,"td",24)(6196,"em")(6197,"strong"),iN(6198,"(opcional)"),sg()(),Tl(6199,"p"),iN(6200,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),sg()()(),Tl(6201,"tr",16)(6202,"td",17)(6203,"div",25)(6204,"span",26),iN(6205," modalTitle"),Gl(6206,"br"),sg()()(),Tl(6207,"td",21)(6208,"code",27),iN(6209,"string"),sg()(),Tl(6210,"td",24)(6211,"em")(6212,"strong"),iN(6213,"(opcional)"),sg()(),Tl(6214,"p"),iN(6215,"Texto exibido no t\xEDtulo da modal."),sg()()(),Tl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),iN(6220," search"),Gl(6221,"br"),sg()()(),Tl(6222,"td",21)(6223,"code",27),iN(6224,"string"),sg()(),Tl(6225,"td",24)(6226,"em")(6227,"strong"),iN(6228,"(opcional)"),sg()(),Tl(6229,"p"),iN(6230,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),sg()()()(),Tl(6231,"h4",43)(6232,"code",5),iN(6233,"PoLookupResponseApi"),sg()(),Tl(6234,"div",2)(6235,"p"),iN(6236,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),sg()(),Tl(6237,"h4",12),iN(6238,"Propriedades"),sg(),Tl(6239,"table",13)(6240,"tr",14)(6241,"th",15),iN(6242,"Nome"),sg(),Tl(6243,"th",15),iN(6244,"Tipo"),sg(),Tl(6245,"th",15),iN(6246,"Descri\xE7\xE3o"),sg()(),Tl(6247,"tr",16)(6248,"td",17)(6249,"div",25)(6250,"span",26),iN(6251," hasNext"),Gl(6252,"br"),sg()()(),Tl(6253,"td",21)(6254,"code",29),iN(6255,"boolean"),sg()(),Tl(6256,"td",24)(6257,"p"),iN(6258,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),sg()()(),Tl(6259,"tr",16)(6260,"td",17)(6261,"div",25)(6262,"span",26),iN(6263," items"),Gl(6264,"br"),sg()()(),Tl(6265,"td",21)(6266,"code",85),iN(6267,"Array<object>"),sg()(),Tl(6268,"td",24)(6269,"p"),iN(6270,"Lista de itens retornados."),sg()()()(),Tl(6271,"h3"),iN(6272,"Enums"),sg(),Tl(6273,"h4",4)(6274,"code",5),iN(6275,"PoTableColumnSpacing"),sg()(),Tl(6276,"div",2)(6277,"p"),iN(6278,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Tl(6279,"strong"),iN(6280,"p-spacing"),sg(),iN(6281,") do po-table."),sg()(),Tl(6282,"h4",12),iN(6283,"Propriedades"),sg(),Tl(6284,"table",13)(6285,"tr",14)(6286,"th",15),iN(6287,"Nome"),sg(),Tl(6288,"th",15),iN(6289,"Descri\xE7\xE3o"),sg()(),Tl(6290,"tr",16)(6291,"td",17)(6292,"div",25)(6293,"span",26),iN(6294," ExtraSmall"),Gl(6295,"br"),sg()()(),Tl(6296,"td",24)(6297,"p"),iN(6298,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),sg()()(),Tl(6299,"tr",16)(6300,"td",17)(6301,"div",25)(6302,"span",26),iN(6303," Small"),Gl(6304,"br"),sg()()(),Tl(6305,"td",24)(6306,"p"),iN(6307,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(6308,"tr",16)(6309,"td",17)(6310,"div",25)(6311,"span",26),iN(6312," Medium"),Gl(6313,"br"),sg()()(),Tl(6314,"td",24)(6315,"p"),iN(6316,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(6317,"tr",16)(6318,"td",17)(6319,"div",25)(6320,"span",26),iN(6321," Large"),Gl(6322,"br"),sg()()(),Tl(6323,"td",24)(6324,"p"),iN(6325,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return a})();var Ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:12,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-lookup-doc"),sg(),Tl(4,"po-tab",3),ht$1("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view")(11,"sample-po-lookup-mask-view"),sg()()()),l&2&&(nw("p-actions",o.actions),Vp(2),nw("p-active",o.activeTab==="doc"),Vp(2),nw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[sNe,Ume,$me,Ae,je,Ve,He,Be,Ue,Qe,Je],encapsulation:2,changeDetection:1})}return a})();var Ct=[{path:"",component:Ye}],$e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[DL.forChild(Ct),DL]})}return a})();var ni=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[sr,$e]})}return a})();export{ni as DocPoLookupModule};