import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,t as tb,d3 as t,r as r$1,S,d4 as Ji,aV as Xp,cR as fY,cS as am,q,c3 as wT,d5 as nv,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt$1,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,aI as gc,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,b4 as rme,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,W as we$1,bc as Sx,a7 as iN,cV as bk,cW as wk,b6 as U3,d6 as RO,a4 as dN,aq as ix,bv as Jx,a5 as hN,at as ox,a3 as SNe,aA as Ex,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Hl(0,"po-lookup",0);},dependencies:[nv],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Lookup Basic"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-lookup-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Qe,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,we],encapsulation:2})}return a})();var A=(()=>{class a{httpClient=f(tb);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService=f(A);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Ji.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we$1([A])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=gx();Cl(0,"po-lookup",1),gw("ngModelChange",function(m){return Jy(c),Zx(o.lookup,m)||(o.lookup=m),e_(m)}),dt$1("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"po-container",2)(3,"div",3),Hl(4,"po-info",4)(5,"po-info",5),og()(),Hl(6,"po-divider"),Cl(7,"form",null,0)(9,"po-input",6),gw("ngModelChange",function(m){return Jy(c),Zx(o.label,m)||(o.label=m),e_(m)}),og(),Z0(),Cl(10,"po-checkbox-group",7),gw("ngModelChange",function(m){return Jy(c),Zx(o.columnsName,m)||(o.columnsName=m),e_(m)}),dt$1("p-change",function(){return o.updateColumns()}),og(),Z0(),Cl(11,"po-select",8),gw("ngModelChange",function(m){return Jy(c),Zx(o.fieldLabel,m)||(o.fieldLabel=m),e_(m)}),og(),Z0(),Cl(12,"po-select",9),gw("ngModelChange",function(m){return Jy(c),Zx(o.fieldValue,m)||(o.fieldValue=m),e_(m)}),og(),Z0(),Cl(13,"po-input",10),gw("ngModelChange",function(m){return Jy(c),Zx(o.filterService,m)||(o.filterService=m),e_(m)}),og(),Z0(),Cl(14,"po-input",11),gw("ngModelChange",function(m){return Jy(c),Zx(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),e_(m)}),og(),Z0(),Cl(15,"po-input",12),gw("ngModelChange",function(m){return Jy(c),Zx(o.help,m)||(o.help=m),e_(m)}),og(),Z0(),Cl(16,"po-input",13),gw("ngModelChange",function(m){return Jy(c),Zx(o.helperText,m)||(o.helperText=m),e_(m)}),og(),Z0(),Cl(17,"po-input",14),gw("ngModelChange",function(m){return Jy(c),Zx(o.placeholder,m)||(o.placeholder=m),e_(m)}),og(),Z0(),Cl(18,"po-input",15),gw("ngModelChange",function(m){return Jy(c),Zx(o.literals,m)||(o.literals=m),e_(m)}),dt$1("p-change",function(){return o.changeLiterals()}),og(),Z0(),Cl(19,"po-input",16),gw("ngModelChange",function(m){return Jy(c),Zx(o.formatField,m)||(o.formatField=m),e_(m)}),dt$1("p-change",function(m){return o.onFieldFormatChange(m)}),og(),Z0(),Cl(20,"po-checkbox-group",17),gw("ngModelChange",function(m){return Jy(c),Zx(o.properties,m)||(o.properties=m),e_(m)}),og(),Z0(),Cl(21,"po-radio-group",18),gw("ngModelChange",function(m){return Jy(c),Zx(o.spacing,m)||(o.spacing=m),e_(m)}),og(),Z0(),Cl(22,"po-radio-group",19),gw("ngModelChange",function(m){return Jy(c),Zx(o.size,m)||(o.size=m),e_(m)}),og(),Z0(),Cl(23,"po-textarea",20),gw("ngModelChange",function(m){return Jy(c),Zx(o.advancedFilters,m)||(o.advancedFilters=m),e_(m)}),dt$1("p-change",function(){return o.changeAdvancedFilters()}),og(),Z0(),Cl(24,"div",3)(25,"po-button",21),dt$1("p-click",function(){return o.restore()}),og()()();}l&2&&(pw("ngModel",o.lookup),ZE("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),X0(),Lp(4),ZE("p-value",o.lookup),Lp(),ZE("p-value",o.event),Lp(4),pw("ngModel",o.label),X0(),Lp(),pw("ngModel",o.columnsName),ZE("p-options",o.columnsOptions),X0(),Lp(),pw("ngModel",o.fieldLabel),ZE("p-options",o.fieldLabelOptions),X0(),Lp(),pw("ngModel",o.fieldValue),ZE("p-options",o.fieldValueOptions),X0(),Lp(),pw("ngModel",o.filterService),X0(),Lp(),pw("ngModel",o.fieldErrorMessage),X0(),Lp(),pw("ngModel",o.help),X0(),Lp(),pw("ngModel",o.helperText),X0(),Lp(),pw("ngModel",o.placeholder),X0(),Lp(),pw("ngModel",o.literals),X0(),Lp(),pw("ngModel",o.formatField),X0(),Lp(),pw("ngModel",o.properties),ZE("p-options",o.propertiesOptions),X0(),Lp(),pw("ngModel",o.spacing),ZE("p-options",o.typeSpacing),X0(),Lp(),pw("ngModel",o.size),ZE("p-options",o.sizeOptions),X0(),Lp(),pw("ngModel",o.advancedFilters),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,gc,_v,L3,q3,nv,Nde,nme,rme,sme],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Lookup Labs"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-lookup
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-lookup.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-lookup-labs"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ye,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=f(A);notification=f(Xp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we$1([A])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=gx();Cl(0,"div",1),Hl(1,"po-info",2),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),gw("ngModelChange",function(m){return Jy(c),Zx(o.hero,m)||(o.hero=m),e_(m)}),og(),Z0(),Cl(7,"po-select",4),gw("ngModelChange",function(m){return Jy(c),Zx(o.vehicle,m)||(o.vehicle=m),e_(m)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-button",5),dt$1("p-click",function(){return o.startMission()}),og()()();}if(l&2){let c=Sx(4);Lp(6),pw("ngModel",o.hero),ZE("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",iN(10,Xe)),X0(),Lp(),pw("ngModel",o.vehicle),ZE("p-options",o.vehicles),X0(),Lp(2),ZE("p-disabled",c.form.invalid||c.form.pending);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,nv,nme,sme],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Lookup - Hero"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-lookup.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-lookup-hero"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,et,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ae],encapsulation:2})}return a})();var it=()=>["nickname","label"],nt=()=>({modalTitle:"Heroes available for mission"}),je=(()=>{class a{service=f(A);notification=f(Xp);formBuilder=f(fY);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,am.required],vehicle:[null,am.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we$1([A])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(Cl(0,"div",0),Hl(1,"po-info",1),og(),Hl(2,"po-divider"),Cl(3,"form",2)(4,"div",0),Hl(5,"po-lookup",3),Z0(),Hl(6,"po-select",4),Z0(),og(),Cl(7,"div",0)(8,"po-button",5),dt$1("p-click",function(){return o.startMission()}),og()()()),l&2&&(Lp(3),ZE("formGroup",o.formMission),Lp(2),ZE("p-columns",o.columns)("p-field-format",iN(7,it))("p-filter-service",o.service)("p-literals",iN(8,nt)),X0(),Lp(),ZE("p-options",o.vehicles),X0(),Lp(2),ZE("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[lY,sY,aY,bk,wk,Qt,_v,nv,nme,sme],encapsulation:2,changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Lookup - Hero Reactive Form"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-lookup.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-lookup-hero-reactive-form"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,at,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,je],encapsulation:2})}return a})();var de=(()=>{class a{http=f(tb);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(q(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(q(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,St){if(a&1&&(Cl(0,"div",0),Hl(1,"po-table",3),og()),a&2){let r=Ex();Lp(),ZE("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var Ve=(()=>{class a{filterService=f(de);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we$1([de])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(Cl(0,"div",0)(1,"po-radio-group",1),gw("ngModelChange",function(p){return Zx(o.filterParams,p)||(o.filterParams=p),p}),og(),Z0(),og(),Hl(2,"po-divider"),Cl(3,"div",0)(4,"po-lookup",2),dN(5,"titlecase"),gw("ngModelChange",function(p){return Zx(o.entity,p)||(o.entity=p),p}),dt$1("p-selected",function(p){return o.onSelected(p)}),og(),Z0(),og(),ix(6,rt,2,4,"div",0)),l&2&&(Lp(),pw("ngModel",o.filterParams),ZE("p-options",o.entities),X0(),Lp(3),ZE("p-help",Jx("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",Jx("",hN(5,12,o.entityLabel)," of Star Wars")),pw("ngModel",o.entity),ZE("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),X0(),Lp(2),ox(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[sY,gk,_v,nv,Nde,U3,RO],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Lookup - Star Wars films"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-lookup-sw-films"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,dt,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ve],encapsulation:2})}return a})();var He=(()=>{class a{http=f(tb);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(wT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=S({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ne=(()=>{class a{service=f(He);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(Cl(0,"div",0)(1,"po-lookup",1),gw("ngModelChange",function(p){return Zx(o.multiLookup,p)||(o.multiLookup=p),p}),dt$1("p-change",function(p){return o.changeOptions(p)}),og(),Z0(),Cl(2,"po-container",2),Hl(3,"po-table",3),og()()),l&2&&(Lp(),pw("ngModel",o.multiLookup),ZE("p-multiple",true),X0(),Lp(2),ZE("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[sY,gk,gc,nv,U3],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Lookup - Multiple"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-lookup-multiple"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ct,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ne],encapsulation:2})}return a})();var Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6252,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoLookupComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),Cl(24,"code"),qx(25,"po-lookup"),og(),qx(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),Cl(27,"em"),qx(28,"TAB"),og(),qx(29,` para
buscar um registro.`),og(),Cl(30,"blockquote")(31,"p"),qx(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),og()(),Cl(33,"blockquote")(34,"p"),qx(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),Cl(36,"a",6),qx(37,"modelo"),og(),qx(38," como "),Cl(39,"code"),qx(40,"pending"),og(),qx(41,"."),og()(),Cl(42,"p"),qx(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),Cl(44,"code"),qx(45,"po-select"),og(),qx(46," ou o "),Cl(47,"code"),qx(48,"po-combo"),og(),qx(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Cl(50,"a",7),qx(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),og(),qx(52,"."),og(),Cl(53,"p"),qx(54,"Importante:"),og(),Cl(55,"ul")(56,"li"),qx(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),Cl(58,"pre")(59,"code"),qx(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),og()()()(),Cl(61,"h4"),qx(62,"Tokens customiz\xE1veis"),og(),Cl(63,"p"),qx(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(65,"blockquote")(66,"p"),qx(67,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(68,"a",8),qx(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(70,"."),og()(),Cl(71,"table")(72,"thead")(73,"tr")(74,"th"),qx(75,"Propriedade"),og(),Cl(76,"th"),qx(77,"Descri\xE7\xE3o"),og(),Cl(78,"th"),qx(79,"Valor Padr\xE3o"),og()()(),Cl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),qx(84,"Default Values"),og()(),Hl(85,"td")(86,"td"),og(),Cl(87,"tr")(88,"td")(89,"code"),qx(90,"--font-family"),og()(),Cl(91,"td"),qx(92,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(93,"td")(94,"code"),qx(95,"var(--font-family-theme)"),og()()(),Cl(96,"tr")(97,"td")(98,"code"),qx(99,"--font-size"),og()(),Cl(100,"td"),qx(101,"Tamanho da fonte"),og(),Cl(102,"td")(103,"code"),qx(104,"var(--font-size-default)"),og()()(),Cl(105,"tr")(106,"td")(107,"code"),qx(108,"--text-color-placeholder"),og()(),Cl(109,"td"),qx(110,"Cor do texto no placeholder"),og(),Cl(111,"td")(112,"code"),qx(113,"var(--color-neutral-light-30)"),og()()(),Cl(114,"tr")(115,"td")(116,"code"),qx(117,"--color"),og()(),Cl(118,"td"),qx(119,"Cor principal do lookup"),og(),Cl(120,"td")(121,"code"),qx(122,"var(--color-neutral-dark-70)"),og()()(),Cl(123,"tr")(124,"td")(125,"code"),qx(126,"--border-radius"),og()(),Cl(127,"td"),qx(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(129,"td")(130,"code"),qx(131,"var(--border-radius-md)"),og()()(),Cl(132,"tr")(133,"td")(134,"code"),qx(135,"--background"),og()(),Cl(136,"td"),qx(137,"Cor de background"),og(),Cl(138,"td")(139,"code"),qx(140,"var(--color-neutral-light-05)"),og()()(),Cl(141,"tr")(142,"td")(143,"code"),qx(144,"--text-color"),og()(),Cl(145,"td"),qx(146,"Cor do texto"),og(),Cl(147,"td")(148,"code"),qx(149,"var(--color-neutral-dark-90)"),og()()(),Cl(150,"tr")(151,"td")(152,"code"),qx(153,"--color-clear"),og()(),Cl(154,"td"),qx(155,"Cor principal do icone clear"),og(),Cl(156,"td")(157,"code"),qx(158,"var(--color-action-default)"),og()()(),Cl(159,"tr")(160,"td")(161,"strong"),qx(162,"Icon"),og()(),Hl(163,"td")(164,"td"),og(),Cl(165,"tr")(166,"td")(167,"code"),qx(168,"--color-icon"),og()(),Cl(169,"td"),qx(170,"Cor principal do icone pesquisar"),og(),Cl(171,"td")(172,"code"),qx(173,"var(--color-action-default)"),og()()(),Cl(174,"tr")(175,"td")(176,"strong"),qx(177,"Hover"),og()(),Hl(178,"td")(179,"td"),og(),Cl(180,"tr")(181,"td")(182,"code"),qx(183,"--color-hover"),og()(),Cl(184,"td"),qx(185,"Cor principal no estado hover"),og(),Cl(186,"td")(187,"code"),qx(188,"var(--color-brand-01-dark)"),og()()(),Cl(189,"tr")(190,"td")(191,"code"),qx(192,"--background-hover"),og()(),Cl(193,"td"),qx(194,"Cor de background no estado hover"),og(),Cl(195,"td")(196,"code"),qx(197,"var(--color-brand-01-lightest)"),og()()(),Cl(198,"tr")(199,"td")(200,"strong"),qx(201,"Focused"),og()(),Hl(202,"td")(203,"td"),og(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--color-focused"),og()(),Cl(208,"td"),qx(209,"Cor principal no estado de focus"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-action-default)"),og()()(),Cl(213,"tr")(214,"td")(215,"code"),qx(216,"--outline-color-focused"),og()(),Cl(217,"td"),qx(218,"Cor do outline do estado de focus"),og(),Cl(219,"td")(220,"code"),qx(221,"var(--color-action-focus)"),og()()(),Cl(222,"tr")(223,"td")(224,"strong"),qx(225,"Disabled"),og()(),Hl(226,"td")(227,"td"),og(),Cl(228,"tr")(229,"td")(230,"code"),qx(231,"--color-disabled"),og()(),Cl(232,"td"),qx(233,"Cor principal no estado disabled"),og(),Cl(234,"td")(235,"code"),qx(236,"var(--color-action-disabled)"),og()()(),Cl(237,"tr")(238,"td")(239,"code"),qx(240,"--background-disabled"),og()(),Cl(241,"td"),qx(242,"Cor de background no estado disabled"),og(),Cl(243,"td")(244,"code"),qx(245,"var(--color-neutral-light-20)"),og()()(),Cl(246,"tr")(247,"td")(248,"code"),qx(249,"--text-color-disabled"),og()(),Cl(250,"td"),qx(251,"Cor do texto quando campo est\xE1 desabilitado"),og(),Cl(252,"td")(253,"code"),qx(254,"var(--color-action-disabled)"),og()()(),Cl(255,"tr")(256,"td")(257,"strong"),qx(258,"Error"),og()(),Hl(259,"td")(260,"td"),og(),Cl(261,"tr")(262,"td")(263,"code"),qx(264,"--color-error"),og()(),Cl(265,"td"),qx(266,"Cor de background no estado de requerido"),og(),Cl(267,"td")(268,"code"),qx(269,"var(--color-feedback-negative-base)"),og()()()()()(),Cl(270,"div",9)(271,"h4",10),qx(272,"Seletor"),og(),Cl(273,"pre",11),qx(274,`<po-lookup
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
`),og()(),Cl(275,"h4",12),qx(276,"Propriedades"),og(),Cl(277,"table",13)(278,"tr",14)(279,"th",15),qx(280,"Nome"),og(),Cl(281,"th",15),qx(282,"Tipo"),og(),Cl(283,"th",15),qx(284,"Padr\xE3o"),og(),Cl(285,"th",15),qx(286,"Descri\xE7\xE3o"),og()(),Cl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),qx(291," (p-additional-help)"),Hl(292,"br"),og()(),Cl(293,"div",20),qx(294,"Deprecated"),og()(),Cl(295,"td",21)(296,"code",22),qx(297,"EventEmitter"),og()(),Cl(298,"td",23),qx(299,"-"),og(),Cl(300,"td",24)(301,"em")(302,"strong"),qx(303,"(opcional)"),og()(),Cl(304,"p"),qx(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(306,"blockquote")(307,"p"),qx(308,"Essa propriedade est\xE1 "),Cl(309,"strong"),qx(310,"depreciada"),og(),qx(311," e ser\xE1 removida na vers\xE3o "),Cl(312,"code"),qx(313,"23.x.x"),og(),qx(314,". Recomendamos utilizar a propriedade "),Cl(315,"code"),qx(316,"p-helper"),og(),qx(317," que oferece mais recursos e flexibilidade."),og()()()(),Cl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),qx(322," p-additional-help-tooltip"),Hl(323,"br"),og()(),Cl(324,"div",20),qx(325,"Deprecated"),og()(),Cl(326,"td",21)(327,"code",27),qx(328,"string"),og()(),Cl(329,"td",23),qx(330,"-"),og(),Cl(331,"td",24)(332,"em")(333,"strong"),qx(334,"(opcional)"),og()(),Cl(335,"p"),qx(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(337,"code"),qx(338,"po-helper"),og(),qx(339,`.
`),Cl(340,"strong"),qx(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(342,"blockquote")(343,"p"),qx(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(345,"blockquote")(346,"p"),qx(347,"Essa propriedade est\xE1 "),Cl(348,"strong"),qx(349,"depreciada"),og(),qx(350," e ser\xE1 removida na vers\xE3o "),Cl(351,"code"),qx(352,"23.x.x"),og(),qx(353,". Recomendamos utilizar a propriedade "),Cl(354,"code"),qx(355,"p-helper"),og(),qx(356," que oferece mais recursos e flexibilidade."),og()()()(),Cl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),qx(361," p-advanced-filters"),Hl(362,"br"),og()()(),Cl(363,"td",21)(364,"code",28),qx(365,"Array<PoLookupAdvancedFilter>"),og()(),Cl(366,"td",23),qx(367,"-"),og(),Cl(368,"td",24)(369,"em")(370,"strong"),qx(371,"(opcional)"),og()(),Cl(372,"p"),qx(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Cl(374,"blockquote")(375,"p"),qx(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Cl(377,"p"),qx(378,"Exemplo de URL com busca avan\xE7ada:"),og(),Cl(379,"pre")(380,"code"),qx(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),og()(),Cl(382,"p"),qx(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),og(),Cl(384,"pre")(385,"code"),qx(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),og()()()(),Cl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),qx(391," p-append-in-body"),Hl(392,"br"),og()()(),Cl(393,"td",21)(394,"code",29),qx(395,"boolean"),og()(),Cl(396,"td",23)(397,"p")(398,"code"),qx(399,"false"),og()()(),Cl(400,"td",24)(401,"em")(402,"strong"),qx(403,"(opcional)"),og()(),Cl(404,"p"),qx(405,"Define que o popover ("),Cl(406,"code"),qx(407,"p-helper"),og(),qx(408," e/ou "),Cl(409,"code"),qx(410,"p-error-limit"),og(),qx(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(412,"blockquote")(413,"p"),qx(414,"Quando utilizado com "),Cl(415,"code"),qx(416,"p-helper"),og(),qx(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),qx(422," p-auto-focus"),Hl(423,"br"),og()()(),Cl(424,"td",21)(425,"code",29),qx(426,"boolean"),og()(),Cl(427,"td",23)(428,"p")(429,"code"),qx(430,"false"),og()()(),Cl(431,"td",24)(432,"em")(433,"strong"),qx(434,"(opcional)"),og()(),Cl(435,"p"),qx(436,"Aplica foco no elemento ao ser iniciado."),og(),Cl(437,"blockquote")(438,"p"),qx(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),qx(444," p-auto-height"),Hl(445,"br"),og()()(),Cl(446,"td",21)(447,"code",29),qx(448,"boolean"),og()(),Cl(449,"td",23)(450,"p")(451,"code"),qx(452,"false"),og()()(),Cl(453,"td",24)(454,"em")(455,"strong"),qx(456,"(opcional)"),og()(),Cl(457,"p"),qx(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),og()()(),Cl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),qx(463," (p-change)"),Hl(464,"br"),og()()(),Cl(465,"td",21)(466,"code",22),qx(467,"EventEmitter"),og()(),Cl(468,"td",23),qx(469,"-"),og(),Cl(470,"td",24)(471,"em")(472,"strong"),qx(473,"(opcional)"),og()(),Cl(474,"p"),qx(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),og()()(),Cl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),qx(480," (p-change-visible-columns)"),Hl(481,"br"),og()()(),Cl(482,"td",21)(483,"code",22),qx(484,"EventEmitter"),og()(),Cl(485,"td",23),qx(486,"-"),og(),Cl(487,"td",24)(488,"em")(489,"strong"),qx(490,"(opcional)"),og()(),Cl(491,"p"),qx(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Cl(493,"p"),qx(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Cl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),qx(499," p-clean"),Hl(500,"br"),og()()(),Cl(501,"td",21)(502,"code",29),qx(503,"boolean"),og()(),Cl(504,"td",23),qx(505,"-"),og(),Cl(506,"td",24)(507,"p"),qx(508,"Exibe um \xEDcone que permite limpar o campo."),og()()(),Cl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),qx(513," (p-restore-column-manager)"),Hl(514,"br"),og()()(),Cl(515,"td",21)(516,"code",22),qx(517,"EventEmitter"),og()(),Cl(518,"td",23),qx(519,"-"),og(),Cl(520,"td",24)(521,"em")(522,"strong"),qx(523,"(opcional)"),og()(),Cl(524,"p"),qx(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Cl(526,"p"),qx(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Cl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),qx(532," p-columns"),Hl(533,"br"),og()()(),Cl(534,"td",21)(535,"code",30),qx(536,"Array<PoLookupColumn>"),og()(),Cl(537,"td",23),qx(538,"-"),og(),Cl(539,"td",24)(540,"em")(541,"strong"),qx(542,"(opcional)"),og()(),Cl(543,"p"),qx(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),og()()(),Cl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),qx(549," p-compact-label"),Hl(550,"br"),og()()(),Cl(551,"td",21)(552,"code",29),qx(553,"boolean"),og()(),Cl(554,"td",23)(555,"p")(556,"code"),qx(557,"false"),og()()(),Cl(558,"td",24)(559,"em")(560,"strong"),qx(561,"(opcional)"),og()(),Cl(562,"p"),qx(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(564,"p"),qx(565,"Quando habilitado ("),Cl(566,"code"),qx(567,"true"),og(),qx(568,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(569,"ul")(570,"li")(571,"code"),qx(572,"po-label"),og()(),Cl(573,"li")(574,"code"),qx(575,"p-requirement (showRequired)"),og()(),Cl(576,"li")(577,"code"),qx(578,"po-helper"),og()()(),Cl(579,"p"),qx(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(581,"p"),qx(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(583,"ul")(584,"li")(585,"code"),qx(586,"--field-container-title-justify"),og()(),Cl(587,"li")(588,"code"),qx(589,"--field-container-title-flex"),og()()(),Cl(590,"p"),qx(591,"Exemplo:"),og(),Cl(592,"pre")(593,"code"),qx(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(595,"p"),qx(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),qx(601," p-disabled"),Hl(602,"br"),og()()(),Cl(603,"td",21)(604,"code",29),qx(605,"boolean"),og()(),Cl(606,"td",23)(607,"p"),qx(608,"false"),og()(),Cl(609,"td",24)(610,"em")(611,"strong"),qx(612,"(opcional)"),og()(),Cl(613,"p"),qx(614,"Indica que o campo ser\xE1 desabilitado."),og()()(),Cl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),qx(619," p-error-limit"),Hl(620,"br"),og()()(),Cl(621,"td",21)(622,"code",29),qx(623,"boolean"),og()(),Cl(624,"td",23)(625,"p")(626,"code"),qx(627,"false"),og()()(),Cl(628,"td",24)(629,"em")(630,"strong"),qx(631,"(opcional)"),og()(),Cl(632,"p"),qx(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(634,"blockquote")(635,"p"),qx(636,"Caso essa propriedade seja definida como "),Cl(637,"code"),qx(638,"true"),og(),qx(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),qx(644," p-field-error-message"),Hl(645,"br"),og()()(),Cl(646,"td",21)(647,"code",27),qx(648,"string"),og()(),Cl(649,"td",23),qx(650,"-"),og(),Cl(651,"td",24)(652,"em")(653,"strong"),qx(654,"(opcional)"),og()(),Cl(655,"p"),qx(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(657,"blockquote")(658,"p"),qx(659,"Necess\xE1rio que a propriedade "),Cl(660,"code"),qx(661,"p-required"),og(),qx(662," esteja habilitada."),og()()()(),Cl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),qx(667," p-field-format"),Hl(668,"br"),og()()(),Cl(669,"td",21)(670,"code",31),qx(671,"((value) => string) "),og(),Cl(672,"code",32),qx(673," Array<string>"),og()(),Cl(674,"td",23),qx(675,"-"),og(),Cl(676,"td",24)(677,"em")(678,"strong"),qx(679,"(opcional)"),og()(),Cl(680,"p"),qx(681,"Formato de exibi\xE7\xE3o do campo."),og(),Cl(682,"p"),qx(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),Cl(684,"em"),qx(685,"string"),og(),qx(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),og(),Cl(687,"pre")(688,"code"),qx(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),og()(),Cl(690,"blockquote")(691,"p"),qx(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),Cl(693,"code"),qx(694,"p-field-label"),og(),qx(695," na descri\xE7\xE3o do campo."),og()(),Cl(696,"p"),qx(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),og(),Cl(698,"pre")(699,"code"),qx(700,`<po-lookup
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
`),og()(),Cl(701,"blockquote")(702,"p"),qx(703,"Ser\xE1 utilizado "),Cl(704,"code"),qx(705,"-"),og(),qx(706," como separador."),og()()()(),Cl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),qx(711," p-field-label"),Hl(712,"br"),og()()(),Cl(713,"td",21)(714,"code",27),qx(715,"string"),og()(),Cl(716,"td",23),qx(717,"-"),og(),Cl(718,"td",24)(719,"p"),qx(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),og()()(),Cl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),qx(725," p-field-value"),Hl(726,"br"),og()()(),Cl(727,"td",21)(728,"code",27),qx(729,"string"),og()(),Cl(730,"td",23),qx(731,"-"),og(),Cl(732,"td",24)(733,"p"),qx(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),og(),Cl(735,"blockquote")(736,"p"),qx(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),og()()()(),Cl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),qx(742," p-filter-params"),Hl(743,"br"),og()()(),Cl(744,"td",21)(745,"code",33),qx(746,"any"),og()(),Cl(747,"td",23),qx(748,"-"),og(),Cl(749,"td",24)(750,"em")(751,"strong"),qx(752,"(opcional)"),og()(),Cl(753,"p"),qx(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),Cl(755,"code"),qx(756,"PoLookupFilter"),og(),qx(757,"."),og()()(),Cl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),qx(762," p-filter-service"),Hl(763,"br"),og()()(),Cl(764,"td",21)(765,"code",27),qx(766,"string "),og(),Cl(767,"code",34),qx(768," PoLookupFilter"),og()(),Cl(769,"td",23),qx(770,"-"),og(),Cl(771,"td",24)(772,"p"),qx(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),Cl(774,"code"),qx(775,"PoLookupFilter"),og(),qx(776," ou uma URL."),og(),Cl(777,"p"),qx(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),og(),Cl(779,"pre")(780,"code"),qx(781,`url + ?page=1&pageSize=20&filter=Peter
`),og()(),Cl(782,"p"),qx(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Cl(784,"code"),qx(785,"order"),og(),qx(786,", por exemplo:"),og(),Cl(787,"ul")(788,"li")(789,"p"),qx(790,"Coluna decrescente:"),og(),Cl(791,"pre")(792,"code"),qx(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),og()()(),Cl(794,"li")(795,"p"),qx(796,"Coluna ascendente:"),og(),Cl(797,"pre")(798,"code"),qx(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),og()()()(),Cl(800,"p"),qx(801,"Se for definido a propriedade "),Cl(802,"code"),qx(803,"p-filter-params"),og(),qx(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),Cl(805,"code"),qx(806,"{ age: 23 }"),og(),qx(807," a URL ficaria:"),og(),Cl(808,"pre")(809,"code"),qx(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),og()(),Cl(811,"p"),qx(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),og(),Cl(813,"pre")(814,"code"),qx(815,`model = 1234;

GET url/1234
`),og()(),Cl(816,"p"),qx(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),og(),Cl(818,"pre")(819,"code"),qx(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),og()(),Cl(821,"blockquote")(822,"p"),qx(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Cl(824,"a",7),qx(825,"API do PO UI"),og(),qx(826,` e utiliza os valores
definidos nas propriedades `),Cl(827,"code"),qx(828,"p-field-label"),og(),qx(829," e "),Cl(830,"code"),qx(831,"p-field-value"),og(),qx(832," para a constru\xE7\xE3o do "),Cl(833,"code"),qx(834,"po-lookup"),og(),qx(835,"."),og()(),Cl(836,"p"),qx(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),Cl(838,"em"),qx(839,"TAB"),og(),qx(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),Cl(841,"a",35),qx(842,"encodeURIComponent"),og(),qx(843,`
e concatenado na URL da seguinte forma:`),og(),Cl(844,"pre")(845,"code"),qx(846,`url/valor%20que%20se%20deseja%20filtrar
`),og()(),Cl(847,"blockquote")(848,"p"),qx(849,"Quando informado um servi\xE7o que implemente a interface "),Cl(850,"code"),qx(851,"PoLookupFilter"),og(),qx(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),og()()()(),Cl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),qx(857," p-help"),Hl(858,"br"),og()()(),Cl(859,"td",21)(860,"code",27),qx(861,"string"),og()(),Cl(862,"td",23),qx(863,"-"),og(),Cl(864,"td",24)(865,"em")(866,"strong"),qx(867,"(opcional)"),og()(),Cl(868,"p"),qx(869,"Texto de apoio do campo."),og()()(),Cl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),qx(874," p-hide-columns-manager"),Hl(875,"br"),og()()(),Cl(876,"td",21)(877,"code",29),qx(878,"boolean"),og()(),Cl(879,"td",23)(880,"p")(881,"code"),qx(882,"false"),og()()(),Cl(883,"td",24)(884,"em")(885,"strong"),qx(886,"(opcional)"),og()(),Cl(887,"p"),qx(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Cl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),qx(893," p-infinite-scroll"),Hl(894,"br"),og()()(),Cl(895,"td",21)(896,"code",29),qx(897,"boolean"),og()(),Cl(898,"td",23)(899,"p")(900,"code"),qx(901,"false"),og()()(),Cl(902,"td",24)(903,"em")(904,"strong"),qx(905,"(opcional)"),og()(),Cl(906,"p"),qx(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),og()()(),Cl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),qx(912," (p-keydown)"),Hl(913,"br"),og()()(),Cl(914,"td",21)(915,"code",22),qx(916,"EventEmitter"),og()(),Cl(917,"td",23),qx(918,"-"),og(),Cl(919,"td",24)(920,"em")(921,"strong"),qx(922,"(opcional)"),og()(),Cl(923,"p"),qx(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(925,"code"),qx(926,"KeyboardEvent"),og(),qx(927," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),qx(932," p-label"),Hl(933,"br"),og()()(),Cl(934,"td",21)(935,"code",27),qx(936,"string"),og()(),Cl(937,"td",23),qx(938,"-"),og(),Cl(939,"td",24)(940,"em")(941,"strong"),qx(942,"(opcional)"),og()(),Cl(943,"p"),qx(944,"Label do campo."),og(),Cl(945,"blockquote")(946,"p"),qx(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),Cl(948,"code"),qx(949,"modalTitle"),og(),qx(950," na propriedade "),Cl(951,"code"),qx(952,"p-literals"),og(),qx(953,"."),og()()()(),Cl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),qx(958," p-label-text-wrap"),Hl(959,"br"),og()()(),Cl(960,"td",21)(961,"code",29),qx(962,"boolean"),og()(),Cl(963,"td",23)(964,"p")(965,"code"),qx(966,"false"),og()()(),Cl(967,"td",24)(968,"em")(969,"strong"),qx(970,"(opcional)"),og()(),Cl(971,"p"),qx(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(973,"code"),qx(974,"p-label"),og(),qx(975,". Quando "),Cl(976,"code"),qx(977,"p-label-text-wrap"),og(),qx(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),qx(983," p-literals"),Hl(984,"br"),og()()(),Cl(985,"td",21)(986,"code",36),qx(987,"PoLookupLiterals"),og()(),Cl(988,"td",23),qx(989,"-"),og(),Cl(990,"td",24)(991,"p"),qx(992,"Objeto com as literais usadas no "),Cl(993,"code"),qx(994,"po-lookup"),og(),qx(995,"."),og(),Cl(996,"p"),qx(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(998,"pre")(999,"code"),qx(1e3,`const customLiterals: PoLookupLiterals = {
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
`),og()(),Cl(1001,"p"),qx(1002,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(1003,"pre")(1004,"code"),qx(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),og()(),Cl(1006,"p"),qx(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(1008,"pre")(1009,"code"),qx(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),og()(),Cl(1011,"blockquote")(1012,"p"),qx(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(1014,"a",37)(1015,"code"),qx(1016,"PoI18nService"),og()(),qx(1017," ou do browser."),og()()()(),Cl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),qx(1022," p-loading"),Hl(1023,"br"),og()()(),Cl(1024,"td",21)(1025,"code",29),qx(1026,"boolean"),og()(),Cl(1027,"td",23)(1028,"p")(1029,"code"),qx(1030,"false"),og()()(),Cl(1031,"td",24)(1032,"em")(1033,"strong"),qx(1034,"(opcional)"),og()(),Cl(1035,"p"),qx(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),qx(1041," p-multiple"),Hl(1042,"br"),og()()(),Cl(1043,"td",21)(1044,"code",29),qx(1045,"boolean"),og()(),Cl(1046,"td",23)(1047,"p")(1048,"code"),qx(1049,"false"),og()()(),Cl(1050,"td",24)(1051,"em")(1052,"strong"),qx(1053,"(opcional)"),og()(),Cl(1054,"p"),qx(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Cl(1056,"blockquote")(1057,"p"),qx(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),Cl(1059,"code"),qx(1060,"[ 12345, 67890 ]"),og()()()()(),Cl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),qx(1065," name"),Hl(1066,"br"),og()()(),Cl(1067,"td",21)(1068,"code",27),qx(1069,"string"),og()(),Cl(1070,"td",23),qx(1071,"-"),og(),Cl(1072,"td",24)(1073,"p"),qx(1074,"Nome e Id do componente."),og()()(),Cl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),qx(1079," p-no-autocomplete"),Hl(1080,"br"),og()()(),Cl(1081,"td",21)(1082,"code",29),qx(1083,"boolean"),og()(),Cl(1084,"td",23)(1085,"p")(1086,"code"),qx(1087,"false"),og()()(),Cl(1088,"td",24)(1089,"em")(1090,"strong"),qx(1091,"(opcional)"),og()(),Cl(1092,"p"),qx(1093,"Define a propriedade nativa "),Cl(1094,"code"),qx(1095,"autocomplete"),og(),qx(1096," do campo como "),Cl(1097,"code"),qx(1098,"off"),og(),qx(1099,"."),og()()(),Cl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),qx(1104," (p-error)"),Hl(1105,"br"),og()()(),Cl(1106,"td",21)(1107,"code",22),qx(1108,"EventEmitter"),og()(),Cl(1109,"td",23),qx(1110,"-"),og(),Cl(1111,"td",24)(1112,"p"),qx(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),og()()(),Cl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),qx(1118," p-optional"),Hl(1119,"br"),og()()(),Cl(1120,"td",21)(1121,"code",29),qx(1122,"boolean"),og()(),Cl(1123,"td",23)(1124,"p")(1125,"code"),qx(1126,"false"),og()()(),Cl(1127,"td",24)(1128,"em")(1129,"strong"),qx(1130,"(opcional)"),og()(),Cl(1131,"p"),qx(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(1133,"blockquote")(1134,"p"),qx(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1136,"ul")(1137,"li"),qx(1138,"O campo conter "),Cl(1139,"code"),qx(1140,"p-required"),og(),qx(1141,";"),og(),Cl(1142,"li"),qx(1143,"N\xE3o possuir "),Cl(1144,"code"),qx(1145,"p-help"),og(),qx(1146," e/ou "),Cl(1147,"code"),qx(1148,"p-label"),og(),qx(1149,"."),og()()()(),Cl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),qx(1154," p-placeholder"),Hl(1155,"br"),og()()(),Cl(1156,"td",21)(1157,"code",27),qx(1158,"string"),og()(),Cl(1159,"td",23),qx(1160,"-"),og(),Cl(1161,"td",24)(1162,"p"),qx(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),qx(1168," p-helper"),Hl(1169,"br"),og()()(),Cl(1170,"td",21)(1171,"code",38),qx(1172,"PoHelperOptions "),og(),Cl(1173,"code",27),qx(1174," string"),og()(),Cl(1175,"td",23),qx(1176,"-"),og(),Cl(1177,"td",24)(1178,"em")(1179,"strong"),qx(1180,"(opcional)"),og()(),Cl(1181,"p"),qx(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1183,"code"),qx(1184,"p-label"),og(),qx(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1186,"code"),qx(1187,"p-label"),og(),qx(1188,"."),og(),Cl(1189,"blockquote")(1190,"p"),qx(1191,"Para mais informa\xE7\xF5es acesse: "),Cl(1192,"a",39),qx(1193,"https://po-ui.io/documentation/po-helper"),og(),qx(1194,"."),og()(),Cl(1195,"blockquote")(1196,"p"),qx(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1198,"code"),qx(1199,"p-additional-help-tooltip"),og(),qx(1200," e "),Cl(1201,"code"),qx(1202,"p-additional-help"),og(),qx(1203,") ser\xE1 ignorado."),og()()()(),Cl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),qx(1208," p-required"),Hl(1209,"br"),og()()(),Cl(1210,"td",21)(1211,"code",29),qx(1212,"boolean"),og()(),Cl(1213,"td",23)(1214,"p")(1215,"code"),qx(1216,"false"),og()()(),Cl(1217,"td",24)(1218,"em")(1219,"strong"),qx(1220,"(opcional)"),og()(),Cl(1221,"p"),qx(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1223,"blockquote")(1224,"p"),qx(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1226,"code"),qx(1227,"(p-disabled)"),og(),qx(1228,"."),og()()()(),Cl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),qx(1233," (p-selected)"),Hl(1234,"br"),og()()(),Cl(1235,"td",21)(1236,"code",22),qx(1237,"EventEmitter"),og()(),Cl(1238,"td",23),qx(1239,"-"),og(),Cl(1240,"td",24)(1241,"em")(1242,"strong"),qx(1243,"(opcional)"),og()(),Cl(1244,"p"),qx(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),og()()(),Cl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),qx(1250," p-show-required"),Hl(1251,"br"),og()()(),Cl(1252,"td",21)(1253,"code",29),qx(1254,"boolean"),og()(),Cl(1255,"td",23),qx(1256,"-"),og(),Cl(1257,"td",24)(1258,"p"),qx(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),og(),Cl(1260,"blockquote")(1261,"p"),qx(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1263,"ul")(1264,"li"),qx(1265,"N\xE3o possuir "),Cl(1266,"code"),qx(1267,"p-help"),og(),qx(1268," e/ou "),Cl(1269,"code"),qx(1270,"p-label"),og(),qx(1271,"."),og()()()(),Cl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),qx(1276," p-size"),Hl(1277,"br"),og()()(),Cl(1278,"td",21)(1279,"code",27),qx(1280,"string"),og()(),Cl(1281,"td",23)(1282,"p")(1283,"code"),qx(1284,"medium"),og()()(),Cl(1285,"td",24)(1286,"em")(1287,"strong"),qx(1288,"(opcional)"),og()(),Cl(1289,"p"),qx(1290,"Define o tamanho do componente:"),og(),Cl(1291,"ul")(1292,"li")(1293,"code"),qx(1294,"small"),og(),qx(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1296,"li")(1297,"code"),qx(1298,"medium"),og(),qx(1299,": altura do input como 44px."),og()(),Cl(1300,"blockquote")(1301,"p"),qx(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1303,"code"),qx(1304,"medium"),og(),qx(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1306,"a",40),qx(1307,"po-theme"),og(),qx(1308,"."),og()()()(),Cl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),qx(1313," p-spacing"),Hl(1314,"br"),og()()(),Cl(1315,"td",21)(1316,"code",27),qx(1317,"string"),og()(),Cl(1318,"td",23)(1319,"p")(1320,"code"),qx(1321,"medium"),og()()(),Cl(1322,"td",24)(1323,"em")(1324,"strong"),qx(1325,"(opcional)"),og()(),Cl(1326,"p"),qx(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),Cl(1328,"strong"),qx(1329,"PoTableColumnSpacing"),og(),qx(1330,"."),og(),Cl(1331,"blockquote")(1332,"p"),qx(1333,"Em n\xEDvel de acessibilidade "),Cl(1334,"strong"),qx(1335,"AA"),og(),qx(1336,", caso o valor de "),Cl(1337,"code"),qx(1338,"p-spacing"),og(),qx(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Cl(1340,"code"),qx(1341,"extraSmall"),og(),qx(1342,`
nos seguintes cen\xE1rios:`),og(),Cl(1343,"ul")(1344,"li"),qx(1345,"Quando o valor de "),Cl(1346,"code"),qx(1347,"p-size"),og(),qx(1348," for "),Cl(1349,"code"),qx(1350,"small"),og(),qx(1351,";"),og(),Cl(1352,"li"),qx(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),Cl(1354,"code"),qx(1355,"small"),og(),qx(1356,` no
`),Cl(1357,"a",40),qx(1358,"servi\xE7o de tema"),og(),qx(1359,"."),og()()()()(),Cl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),qx(1364," p-text-wrap"),Hl(1365,"br"),og()()(),Cl(1366,"td",21)(1367,"code",29),qx(1368,"boolean"),og()(),Cl(1369,"td",23)(1370,"p")(1371,"code"),qx(1372,"false"),og()()(),Cl(1373,"td",24)(1374,"em")(1375,"strong"),qx(1376,"(opcional)"),og()(),Cl(1377,"p"),qx(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Cl(1379,"p"),qx(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),og(),Cl(1381,"blockquote")(1382,"p"),qx(1383,"Incompat\xEDvel com "),Cl(1384,"code"),qx(1385,"virtual-scroll"),og(),qx(1386,", que requer altura fixa nas linhas."),og()()()(),Cl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),qx(1391," p-virtual-scroll"),Hl(1392,"br"),og()()(),Cl(1393,"td",21)(1394,"code",29),qx(1395,"boolean"),og()(),Cl(1396,"td",23)(1397,"p")(1398,"code"),qx(1399,"true"),og()()(),Cl(1400,"td",24)(1401,"em")(1402,"strong"),qx(1403,"(opcional)"),og()(),Cl(1404,"p"),qx(1405,"Habilita o "),Cl(1406,"code"),qx(1407,"virtual-scroll"),og(),qx(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),Cl(1409,"code"),qx(1410,"virtual-scroll"),og(),qx(1411," ser\xE1 ativado automaticamente."),og(),Cl(1412,"blockquote")(1413,"p"),qx(1414,"Incompat\xEDvel com "),Cl(1415,"code"),qx(1416,"p-text-wrap"),og(),qx(1417," e "),Cl(1418,"code"),qx(1419,"master-detail"),og(),qx(1420,", pois o "),Cl(1421,"code"),qx(1422,"virtual-scroll"),og(),qx(1423," exige altura fixa nas linhas."),og()()()()(),Cl(1424,"h3",12),qx(1425,"M\xE9todos"),og(),Cl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),qx(1432," focus "),og()()()()(),Cl(1433,"tr",24)(1434,"td",24)(1435,"p"),qx(1436,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1437,"p"),qx(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1439,"pre")(1440,"code"),qx(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),og()()()()(),Hl(1442,"br"),Cl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),qx(1449," showAdditionalHelp "),og()()()()(),Cl(1450,"tr",24)(1451,"td",24)(1452,"p"),qx(1453,"M\xE9todo que exibe "),Cl(1454,"code"),qx(1455,"p-helper"),og(),qx(1456," ou executa a a\xE7\xE3o definida em "),Cl(1457,"code"),qx(1458,"p-helper{eventOnClick}"),og(),qx(1459," ou em "),Cl(1460,"code"),qx(1461,"p-additionalHelp"),og(),qx(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1463,"code"),qx(1464,"p-keydown"),og(),qx(1465,"."),og(),Cl(1466,"blockquote")(1467,"p"),qx(1468,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1469,"code"),qx(1470,"po-helper"),og(),qx(1471," quando o componente estiver com foco."),og()(),Cl(1472,"pre")(1473,"code"),qx(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),og()(),Cl(1475,"pre")(1476,"code"),qx(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1478,"br"),Cl(1479,"h3"),qx(1480,"Interfaces"),og(),Cl(1481,"h4",43)(1482,"code",5),qx(1483,"PoLookupAdvancedFilter"),og()(),Cl(1484,"div",2)(1485,"p"),qx(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),og()(),Cl(1487,"h4",12),qx(1488,"Propriedades"),og(),Cl(1489,"table",13)(1490,"tr",14)(1491,"th",15),qx(1492,"Nome"),og(),Cl(1493,"th",15),qx(1494,"Tipo"),og(),Cl(1495,"th",15),qx(1496,"Descri\xE7\xE3o"),og()(),Cl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),qx(1501," additionalHelp"),Hl(1502,"br"),og()()(),Cl(1503,"td",21)(1504,"code",44),qx(1505,"Function"),og()(),Cl(1506,"td",24)(1507,"em")(1508,"strong"),qx(1509,"(opcional)"),og()(),Cl(1510,"p"),qx(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(1512,"blockquote")(1513,"p"),qx(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Cl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),qx(1519," additionalHelpTooltip"),Hl(1520,"br"),og()()(),Cl(1521,"td",21)(1522,"code",27),qx(1523,"string"),og()(),Cl(1524,"td",24)(1525,"em")(1526,"strong"),qx(1527,"(opcional)"),og()(),Cl(1528,"p"),qx(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(1530,"code"),qx(1531,"po-helper"),og(),qx(1532,`.
`),Cl(1533,"strong"),qx(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(1535,"blockquote")(1536,"p"),qx(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Cl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),qx(1542," advancedFilters"),Hl(1543,"br"),og()()(),Cl(1544,"td",21)(1545,"code",28),qx(1546,"Array<PoLookupAdvancedFilter>"),og()(),Cl(1547,"td",24)(1548,"em")(1549,"strong"),qx(1550,"(opcional)"),og()(),Cl(1551,"p"),qx(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Cl(1553,"blockquote")(1554,"p"),qx(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Cl(1556,"p"),qx(1557,"Exemplo de URL com busca avan\xE7ada:"),og(),Cl(1558,"p")(1559,"code"),qx(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Cl(1561,"p"),qx(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Cl(1563,"p")(1564,"code"),qx(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Cl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),qx(1570," appendBox"),Hl(1571,"br"),og()()(),Cl(1572,"td",21)(1573,"code",29),qx(1574,"boolean"),og()(),Cl(1575,"td",24)(1576,"em")(1577,"strong"),qx(1578,"(opcional)"),og()(),Cl(1579,"p"),qx(1580,"Define que o "),Cl(1581,"code"),qx(1582,"listbox"),og(),qx(1583," e/ou popover ("),Cl(1584,"code"),qx(1585,"p-helper"),og(),qx(1586," e/ou "),Cl(1587,"code"),qx(1588,"p-error-limit"),og(),qx(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Cl(1590,"blockquote")(1591,"p"),qx(1592,"Quando utilizado com "),Cl(1593,"code"),qx(1594,"p-helper"),og(),qx(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),qx(1600," autoHeight"),Hl(1601,"br"),og()()(),Cl(1602,"td",21)(1603,"code",29),qx(1604,"boolean"),og()(),Cl(1605,"td",24)(1606,"em")(1607,"strong"),qx(1608,"(opcional)"),og()(),Cl(1609,"p"),qx(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Cl(1611,"p")(1612,"strong"),qx(1613,"Componentes compat\xEDveis:"),og(),Cl(1614,"code"),qx(1615,"po-multiselect"),og(),qx(1616,", "),Cl(1617,"code"),qx(1618,"po-lookup"),og(),qx(1619,"."),og()()(),Cl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),qx(1624," autoUpload"),Hl(1625,"br"),og()()(),Cl(1626,"td",21)(1627,"code",29),qx(1628,"boolean"),og()(),Cl(1629,"td",24)(1630,"em")(1631,"strong"),qx(1632,"(opcional)"),og()(),Cl(1633,"p"),qx(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Cl(1635,"p")(1636,"strong"),qx(1637,"Componente compat\xEDvel"),og(),qx(1638,": "),Cl(1639,"code"),qx(1640,"po-upload"),og()()()(),Cl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),qx(1645," booleanFalse"),Hl(1646,"br"),og()()(),Cl(1647,"td",21)(1648,"code",27),qx(1649,"string"),og()(),Cl(1650,"td",24)(1651,"em")(1652,"strong"),qx(1653,"(opcional)"),og()(),Cl(1654,"p"),qx(1655,"Texto exibido quando o valor do componente for "),Cl(1656,"em"),qx(1657,"false"),og(),qx(1658,"."),og()()(),Cl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),qx(1663," booleanTrue"),Hl(1664,"br"),og()()(),Cl(1665,"td",21)(1666,"code",27),qx(1667,"string"),og()(),Cl(1668,"td",24)(1669,"em")(1670,"strong"),qx(1671,"(opcional)"),og()(),Cl(1672,"p"),qx(1673,"Texto exibido quando o valor do componente for "),Cl(1674,"em"),qx(1675,"true"),og(),qx(1676,"."),og()()(),Cl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),qx(1681," changeOnEnter"),Hl(1682,"br"),og()()(),Cl(1683,"td",21)(1684,"code",29),qx(1685,"boolean"),og()(),Cl(1686,"td",24)(1687,"em")(1688,"strong"),qx(1689,"(opcional)"),og()(),Cl(1690,"p"),qx(1691,"Indica que o evento "),Cl(1692,"code"),qx(1693,"p-change"),og(),qx(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Cl(1695,"code"),qx(1696,"po-combo"),og(),qx(1697,"."),og()()(),Cl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),qx(1702," changeVisibleColumns"),Hl(1703,"br"),og()()(),Cl(1704,"td",21)(1705,"code",44),qx(1706,"Function"),og()(),Cl(1707,"td",24)(1708,"em")(1709,"strong"),qx(1710,"(opcional)"),og()(),Cl(1711,"p"),qx(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Cl(1713,"p"),qx(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Cl(1715,"p")(1716,"strong"),qx(1717,"Componente compat\xEDvel"),og(),qx(1718,": "),Cl(1719,"code"),qx(1720,"po-lookup"),og()()()(),Cl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),qx(1725," clean"),Hl(1726,"br"),og()()(),Cl(1727,"td",21)(1728,"code",29),qx(1729,"boolean"),og()(),Cl(1730,"td",24)(1731,"em")(1732,"strong"),qx(1733,"(opcional)"),og()(),Cl(1734,"p"),qx(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Cl(1736,"p")(1737,"strong"),qx(1738,"Componentes compat\xEDveis:"),og(),Cl(1739,"code"),qx(1740,"po-datepicker"),og(),qx(1741,", "),Cl(1742,"code"),qx(1743,"po-datepicker-range"),og(),qx(1744,", "),Cl(1745,"code"),qx(1746,"po-input"),og(),qx(1747,", "),Cl(1748,"code"),qx(1749,"po-number"),og(),qx(1750,", "),Cl(1751,"code"),qx(1752,"po-decimal"),og(),qx(1753,`,
`),Cl(1754,"code"),qx(1755,"po-combo"),og(),qx(1756,", "),Cl(1757,"code"),qx(1758,"po-lookup"),og(),qx(1759,", "),Cl(1760,"code"),qx(1761,"po-password"),og(),qx(1762,", "),Cl(1763,"code"),qx(1764,"po-timepicker"),og(),qx(1765,"."),og()()(),Cl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),qx(1770," columnRestoreManager"),Hl(1771,"br"),og()()(),Cl(1772,"td",21)(1773,"code",44),qx(1774,"Function"),og()(),Cl(1775,"td",24)(1776,"em")(1777,"strong"),qx(1778,"(opcional)"),og()(),Cl(1779,"p"),qx(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Cl(1781,"p"),qx(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Cl(1783,"p")(1784,"strong"),qx(1785,"Componente compat\xEDvel"),og(),qx(1786,": "),Cl(1787,"code"),qx(1788,"po-lookup"),og()()()(),Cl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),qx(1793," columns"),Hl(1794,"br"),og()()(),Cl(1795,"td",21)(1796,"code",30),qx(1797,"Array<PoLookupColumn> "),og(),Cl(1798,"code",45),qx(1799," number"),og()(),Cl(1800,"td",24)(1801,"em")(1802,"strong"),qx(1803,"(opcional)"),og()(),Cl(1804,"p"),qx(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Cl(1806,"code"),qx(1807,"searchService"),og(),qx(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Cl(1809,"a",46)(1810,"code"),qx(1811,"PoLookupColumn"),og()(),qx(1812,"."),og(),Cl(1813,"blockquote")(1814,"p"),qx(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Cl(1816,"em"),qx(1817,"label"),og(),qx(1818," e "),Cl(1819,"em"),qx(1820,"value"),og(),qx(1821,` para valores
de tela e do model respectivamente.`),og()(),Cl(1822,"p")(1823,"strong"),qx(1824,"Componentes compat\xEDveis:"),og(),Cl(1825,"code"),qx(1826,"po-radio-group"),og(),qx(1827,", "),Cl(1828,"code"),qx(1829,"po-lookup"),og(),qx(1830,", "),Cl(1831,"code"),qx(1832,"po-checkbox-group"),og(),qx(1833,"."),og()()(),Cl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),qx(1838," compactLabel"),Hl(1839,"br"),og()()(),Cl(1840,"td",21)(1841,"code",29),qx(1842,"boolean"),og()(),Cl(1843,"td",24)(1844,"em")(1845,"strong"),qx(1846,"(opcional)"),og()(),Cl(1847,"p"),qx(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(1849,"p"),qx(1850,"Quando habilitado ("),Cl(1851,"code"),qx(1852,"true"),og(),qx(1853,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(1854,"ul")(1855,"li")(1856,"code"),qx(1857,"po-label"),og()(),Cl(1858,"li")(1859,"code"),qx(1860,"p-requirement (showRequired)"),og()(),Cl(1861,"li")(1862,"code"),qx(1863,"po-helper"),og()()(),Cl(1864,"p"),qx(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(1866,"p"),qx(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(1868,"ul")(1869,"li")(1870,"code"),qx(1871,"--field-container-title-justify"),og()(),Cl(1872,"li")(1873,"code"),qx(1874,"--field-container-title-flex"),og()()(),Cl(1875,"p"),qx(1876,"Exemplo:"),og(),Cl(1877,"pre")(1878,"code"),qx(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(1880,"p"),qx(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),qx(1886," container"),Hl(1887,"br"),og()()(),Cl(1888,"td",21)(1889,"code",27),qx(1890,"string"),og()(),Cl(1891,"td",24)(1892,"em")(1893,"strong"),qx(1894,"(opcional)"),og()(),Cl(1895,"p"),qx(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Cl(1897,"p"),qx(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Cl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),qx(1903," customAction"),Hl(1904,"br"),og()()(),Cl(1905,"td",21)(1906,"code",47),qx(1907,"PoProgressAction"),og()(),Cl(1908,"td",24)(1909,"em")(1910,"strong"),qx(1911,"(opcional)"),og()(),Cl(1912,"p"),qx(1913,"Define uma a\xE7\xE3o personalizada no componente "),Cl(1914,"code"),qx(1915,"po-upload"),og(),qx(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Cl(1917,"p")(1918,"strong"),qx(1919,"Componente compat\xEDvel"),og(),qx(1920,": "),Cl(1921,"code"),qx(1922,"po-upload"),og(),qx(1923,","),og(),Cl(1924,"p")(1925,"strong"),qx(1926,"Exemplo de configura\xE7\xE3o"),og(),qx(1927,":"),og(),Cl(1928,"pre")(1929,"code",48),qx(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Cl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),qx(1935," customActionClick"),Hl(1936,"br"),og()()(),Cl(1937,"td",21)(1938,"code",49),qx(1939,"(file: PoUploadFile) => void"),og()(),Cl(1940,"td",24)(1941,"em")(1942,"strong"),qx(1943,"(opcional)"),og()(),Cl(1944,"p"),qx(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Cl(1946,"code"),qx(1947,"p-custom-action"),og(),qx(1948,"."),og(),Cl(1949,"p")(1950,"strong"),qx(1951,"Componente compat\xEDvel"),og(),qx(1952,": "),Cl(1953,"code"),qx(1954,"po-upload"),og(),qx(1955,","),og(),Cl(1956,"p"),qx(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Cl(1958,"p")(1959,"strong"),qx(1960,"Par\xE2metro do evento"),og(),qx(1961,":"),og(),Cl(1962,"ul")(1963,"li")(1964,"code"),qx(1965,"file"),og(),qx(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Cl(1967,"code"),qx(1968,"PoUploadFile"),og(),qx(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Cl(1970,"p")(1971,"strong"),qx(1972,"Exemplo de uso"),og(),qx(1973,":"),og(),Cl(1974,"pre")(1975,"code",48),qx(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Cl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),qx(1981," debounceTime"),Hl(1982,"br"),og()()(),Cl(1983,"td",21)(1984,"code",45),qx(1985,"number"),og()(),Cl(1986,"td",24)(1987,"em")(1988,"strong"),qx(1989,"(opcional)"),og()(),Cl(1990,"p"),qx(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Cl(1992,"code"),qx(1993,"p-filter-service"),og(),qx(1994,")."),og(),Cl(1995,"p")(1996,"strong"),qx(1997,"Componentes compat\xEDveis:"),og(),Cl(1998,"code"),qx(1999,"po-combo"),og(),qx(2e3,", "),Cl(2001,"code"),qx(2002,"po-multiselect"),og(),qx(2003,"."),og()()(),Cl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),qx(2008," decimalsLength"),Hl(2009,"br"),og()()(),Cl(2010,"td",21)(2011,"code",45),qx(2012,"number"),og()(),Cl(2013,"td",24)(2014,"em")(2015,"strong"),qx(2016,"(opcional)"),og()(),Cl(2017,"p"),qx(2018,"Quantidade m\xE1xima de casas decimais."),og(),Cl(2019,"blockquote")(2020,"p"),qx(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),Cl(2022,"code"),qx(2023,"type"),og(),qx(2024," for "),Cl(2025,"em"),qx(2026,"currency"),og(),qx(2027," ou "),Cl(2028,"em"),qx(2029,"decimal"),og(),qx(2030,"."),og()()()(),Cl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),qx(2035," directory"),Hl(2036,"br"),og()()(),Cl(2037,"td",21)(2038,"code",29),qx(2039,"boolean"),og()(),Cl(2040,"td",24)(2041,"em")(2042,"strong"),qx(2043,"(opcional)"),og()(),Cl(2044,"p"),qx(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Cl(2046,"blockquote")(2047,"p"),qx(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Cl(2049,"blockquote")(2050,"p"),qx(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Cl(2052,"strong"),qx(2053,"Internet Explorer"),og(),qx(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Cl(2055,"p")(2056,"strong"),qx(2057,"Componente compat\xEDvel"),og(),qx(2058,": "),Cl(2059,"code"),qx(2060,"po-upload"),og()()()(),Cl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),qx(2065," disabled"),Hl(2066,"br"),og()()(),Cl(2067,"td",21)(2068,"code",29),qx(2069,"boolean"),og()(),Cl(2070,"td",24)(2071,"em")(2072,"strong"),qx(2073,"(opcional)"),og()(),Cl(2074,"p"),qx(2075,"Desabilita o campo caso informar o valor "),Cl(2076,"em"),qx(2077,"true"),og(),qx(2078,"."),og()()(),Cl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),qx(2083," disabledInitFilter"),Hl(2084,"br"),og()()(),Cl(2085,"td",21)(2086,"code",29),qx(2087,"boolean"),og()(),Cl(2088,"td",24)(2089,"em")(2090,"strong"),qx(2091,"(opcional)"),og()(),Cl(2092,"p"),qx(2093,"Desabilita o filtro inicial no servi\xE7o do "),Cl(2094,"code"),qx(2095,"po-combo"),og(),qx(2096,", que \xE9 executado no primeiro clique no campo."),og()()(),Cl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),qx(2101," disabledTabFilter"),Hl(2102,"br"),og()()(),Cl(2103,"td",21)(2104,"code",29),qx(2105,"boolean"),og()(),Cl(2106,"td",24)(2107,"em")(2108,"strong"),qx(2109,"(opcional)"),og()(),Cl(2110,"p"),qx(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Cl(2112,"code"),qx(2113,"po-combo"),og(),qx(2114,"."),og()()(),Cl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),qx(2119," divider"),Hl(2120,"br"),og()()(),Cl(2121,"td",21)(2122,"code",27),qx(2123,"string"),og()(),Cl(2124,"td",24)(2125,"em")(2126,"strong"),qx(2127,"(opcional)"),og()(),Cl(2128,"p"),qx(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Cl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),qx(2134," dragDrop"),Hl(2135,"br"),og()()(),Cl(2136,"td",21)(2137,"code",29),qx(2138,"boolean"),og()(),Cl(2139,"td",24)(2140,"em")(2141,"strong"),qx(2142,"(opcional)"),og()(),Cl(2143,"p"),qx(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Cl(2145,"blockquote")(2146,"p"),qx(2147,"Recomendamos utilizar apenas um "),Cl(2148,"code"),qx(2149,"po-upload"),og(),qx(2150," com esta funcionalidade por tela."),og()(),Cl(2151,"p")(2152,"strong"),qx(2153,"Componente compat\xEDvel"),og(),qx(2154,": "),Cl(2155,"code"),qx(2156,"po-upload"),og()()()(),Cl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),qx(2161," dragDropHeight"),Hl(2162,"br"),og()()(),Cl(2163,"td",21)(2164,"code",45),qx(2165,"number"),og()(),Cl(2166,"td",24)(2167,"em")(2168,"strong"),qx(2169,"(opcional)"),og()(),Cl(2170,"p"),qx(2171,"Define em "),Cl(2172,"em"),qx(2173,"pixels"),og(),qx(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Cl(2175,"code"),qx(2176,"160px"),og(),qx(2177,"."),og(),Cl(2178,"blockquote")(2179,"p"),qx(2180,"Esta propriedade funciona somente se a propriedade "),Cl(2181,"code"),qx(2182,"p-drag-drop"),og(),qx(2183," estiver habilitada."),og()(),Cl(2184,"p")(2185,"strong"),qx(2186,"Componente compat\xEDvel"),og(),qx(2187,": "),Cl(2188,"code"),qx(2189,"po-upload"),og()()()(),Cl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),qx(2194," errorAsyncFunction"),Hl(2195,"br"),og()()(),Cl(2196,"td",21)(2197,"code",50),qx(2198,"(value) => Observable<boolean>"),og()(),Cl(2199,"td",24)(2200,"em")(2201,"strong"),qx(2202,"(opcional)"),og()(),Cl(2203,"p"),qx(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(2205,"code"),qx(2206,"change"),og(),qx(2207," ou "),Cl(2208,"code"),qx(2209,"change-model"),og(),qx(2210,", dependendo do valor da propriedade "),Cl(2211,"code"),qx(2212,"triggerMode"),og(),qx(2213,"."),og(),Cl(2214,"blockquote")(2215,"p"),qx(2216,"Retorna "),Cl(2217,"code"),qx(2218,"Observable com o valor true"),og(),qx(2219," para sinalizar o erro "),Cl(2220,"code"),qx(2221,"false"),og(),qx(2222," para indicar que n\xE3o h\xE1 erro."),og()(),Cl(2223,"p")(2224,"strong"),qx(2225,"Componente compat\xEDvel"),og(),qx(2226,": "),Cl(2227,"code"),qx(2228,"po-datepicker"),og()()()(),Cl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),qx(2233," errorAsyncProperties"),Hl(2234,"br"),og()()(),Cl(2235,"td",21)(2236,"code",51),qx(2237,"ErrorAsyncProperties"),og()(),Cl(2238,"td",24)(2239,"em")(2240,"strong"),qx(2241,"(opcional)"),og()(),Cl(2242,"p"),qx(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Cl(2244,"p")(2245,"strong"),qx(2246,"Componentes compat\xEDveis:"),og(),Cl(2247,"code"),qx(2248,"po-input"),og(),qx(2249,", "),Cl(2250,"code"),qx(2251,"po-number"),og(),qx(2252,", "),Cl(2253,"code"),qx(2254,"po-decimal"),og(),qx(2255,", "),Cl(2256,"code"),qx(2257,"po-password"),og(),qx(2258,"."),og()()(),Cl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),qx(2263," errorLimit"),Hl(2264,"br"),og()()(),Cl(2265,"td",21)(2266,"code",29),qx(2267,"boolean"),og()(),Cl(2268,"td",24)(2269,"em")(2270,"strong"),qx(2271,"(opcional)"),og()(),Cl(2272,"p"),qx(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(2274,"blockquote")(2275,"p"),qx(2276,"Caso essa propriedade seja definida como "),Cl(2277,"code"),qx(2278,"true"),og(),qx(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Cl(2280,"p")(2281,"strong"),qx(2282,"Componentes compat\xEDveis:"),og(),Cl(2283,"code"),qx(2284,"po-checkbox-group"),og(),qx(2285,", "),Cl(2286,"code"),qx(2287,"po-combo"),og(),qx(2288,", "),Cl(2289,"code"),qx(2290,"po-datepicker"),og(),qx(2291,", "),Cl(2292,"code"),qx(2293,"po-datepicker-range"),og(),qx(2294,", "),Cl(2295,"code"),qx(2296,"po-decimal"),og(),qx(2297,", "),Cl(2298,"code"),qx(2299,"po-input"),og(),qx(2300,", "),Cl(2301,"code"),qx(2302,"po-lookup"),og(),qx(2303,", "),Cl(2304,"code"),qx(2305,"po-multiselect"),og(),qx(2306,", "),Cl(2307,"code"),qx(2308,"po-number"),og(),qx(2309,", "),Cl(2310,"code"),qx(2311,"po-password"),og(),qx(2312,", "),Cl(2313,"code"),qx(2314,"po-radio-group"),og(),qx(2315,", "),Cl(2316,"code"),qx(2317,"po-select"),og(),qx(2318,`,
`),Cl(2319,"code"),qx(2320,"po-switch"),og(),qx(2321,", "),Cl(2322,"code"),qx(2323,"po-textarea"),og(),qx(2324,", "),Cl(2325,"code"),qx(2326,"po-timepicker"),og(),qx(2327,"."),og()()(),Cl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),qx(2332," errorMessage"),Hl(2333,"br"),og()()(),Cl(2334,"td",21)(2335,"code",27),qx(2336,"string"),og()(),Cl(2337,"td",24)(2338,"em")(2339,"strong"),qx(2340,"(opcional)"),og()(),Cl(2341,"p"),qx(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Cl(2343,"p"),qx(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Cl(2345,"ul")(2346,"li"),qx(2347,"pattern;"),og(),Cl(2348,"li"),qx(2349,"minValue;"),og(),Cl(2350,"li"),qx(2351,"maxValue;"),og(),Cl(2352,"li"),qx(2353,"required;"),og()(),Cl(2354,"blockquote")(2355,"p"),qx(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Cl(2357,"code"),qx(2358,"po-datepicker"),og(),qx(2359,", "),Cl(2360,"code"),qx(2361,"po-input"),og(),qx(2362,", "),Cl(2363,"code"),qx(2364,"po-number"),og(),qx(2365,", "),Cl(2366,"code"),qx(2367,"po-decimal"),og(),qx(2368,", "),Cl(2369,"code"),qx(2370,"po-password"),og(),qx(2371,", "),Cl(2372,"code"),qx(2373,"po-timepicker"),og(),qx(2374,`, \xE9 necess\xE1rio que a propriedade
`),Cl(2375,"code"),qx(2376,"requiredFieldErrorMessage"),og(),qx(2377," esteja como "),Cl(2378,"code"),qx(2379,"true"),og(),qx(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Cl(2381,"code"),qx(2382,"po-datepicker-range"),og(),qx(2383,", "),Cl(2384,"code"),qx(2385,"po-select"),og(),qx(2386,", "),Cl(2387,"code"),qx(2388,"po-checkbox-group"),og(),qx(2389,", "),Cl(2390,"code"),qx(2391,"po-radio-group"),og(),qx(2392,", "),Cl(2393,"code"),qx(2394,"po-multiselect"),og(),qx(2395,", "),Cl(2396,"code"),qx(2397,"po-combo"),og(),qx(2398,`,
`),Cl(2399,"code"),qx(2400,"po-lookup"),og(),qx(2401," e "),Cl(2402,"code"),qx(2403,"po-textarea"),og(),qx(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Cl(2405,"code"),qx(2406,"requiredFieldErrorMessage"),og(),qx(2407,"."),og()(),Cl(2408,"p")(2409,"strong"),qx(2410,"Componentes compat\xEDveis:"),og(),Cl(2411,"code"),qx(2412,"po-checkbox-group"),og(),qx(2413,", "),Cl(2414,"code"),qx(2415,"po-combo"),og(),qx(2416,", "),Cl(2417,"code"),qx(2418,"po-datepicker"),og(),qx(2419,", "),Cl(2420,"code"),qx(2421,"po-datepicker-range"),og(),qx(2422,", "),Cl(2423,"code"),qx(2424,"po-decimal"),og(),qx(2425,", "),Cl(2426,"code"),qx(2427,"po-input"),og(),qx(2428,", "),Cl(2429,"code"),qx(2430,"po-lookup"),og(),qx(2431,", "),Cl(2432,"code"),qx(2433,"po-multiselect"),og(),qx(2434,", "),Cl(2435,"code"),qx(2436,"po-number"),og(),qx(2437,", "),Cl(2438,"code"),qx(2439,"po-password"),og(),qx(2440,", "),Cl(2441,"code"),qx(2442,"po-radio-group"),og(),qx(2443,", "),Cl(2444,"code"),qx(2445,"po-select"),og(),qx(2446,`,
`),Cl(2447,"code"),qx(2448,"po-switch"),og(),qx(2449,", "),Cl(2450,"code"),qx(2451,"po-textarea"),og(),qx(2452,", "),Cl(2453,"code"),qx(2454,"po-timepicker"),og(),qx(2455,"."),og()()(),Cl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),qx(2460," fieldLabel"),Hl(2461,"br"),og()()(),Cl(2462,"td",21)(2463,"code",27),qx(2464,"string"),og()(),Cl(2465,"td",24)(2466,"em")(2467,"strong"),qx(2468,"(opcional)"),og()(),Cl(2469,"p"),qx(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Cl(2471,"p"),qx(2472,"O valor padr\xE3o \xE9: "),Cl(2473,"code"),qx(2474,"label"),og(),qx(2475,"."),og(),Cl(2476,"blockquote")(2477,"p"),qx(2478,"Esta propriedade pode ser utilizada em conjunto com: "),Cl(2479,"code"),qx(2480,"options"),og(),qx(2481,", "),Cl(2482,"code"),qx(2483,"optionsService"),og(),qx(2484," e "),Cl(2485,"code"),qx(2486,"searchService"),og(),qx(2487,"."),og()()()(),Cl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),qx(2492," fieldValue"),Hl(2493,"br"),og()()(),Cl(2494,"td",21)(2495,"code",27),qx(2496,"string"),og()(),Cl(2497,"td",24)(2498,"em")(2499,"strong"),qx(2500,"(opcional)"),og()(),Cl(2501,"p"),qx(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Cl(2503,"p"),qx(2504,"O valor padr\xE3o \xE9: "),Cl(2505,"code"),qx(2506,"value"),og(),qx(2507,"."),og(),Cl(2508,"blockquote")(2509,"p"),qx(2510,"Esta propriedade pode ser utilizada em conjunto com: "),Cl(2511,"code"),qx(2512,"options"),og(),qx(2513,", "),Cl(2514,"code"),qx(2515,"optionsService"),og(),qx(2516," e "),Cl(2517,"code"),qx(2518,"searchService"),og(),qx(2519,"."),og()()()(),Cl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),qx(2524," filterMinlength"),Hl(2525,"br"),og()()(),Cl(2526,"td",21)(2527,"code",45),qx(2528,"number"),og()(),Cl(2529,"td",24)(2530,"em")(2531,"strong"),qx(2532,"(opcional)"),og()(),Cl(2533,"p"),qx(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Cl(2535,"code"),qx(2536,"po-combo"),og(),qx(2537,"."),og()()(),Cl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),qx(2542," filterMode"),Hl(2543,"br"),og()()(),Cl(2544,"td",21)(2545,"code",52),qx(2546,"PoMultiselectFilterMode"),og()(),Cl(2547,"td",24)(2548,"em")(2549,"strong"),qx(2550,"(opcional)"),og()(),Cl(2551,"p"),qx(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Cl(2553,"code"),qx(2554,"startsWith"),og(),qx(2555,", "),Cl(2556,"code"),qx(2557,"contains"),og(),qx(2558," ou "),Cl(2559,"code"),qx(2560,"endsWith"),og(),qx(2561,"."),og(),Cl(2562,"blockquote")(2563,"p"),qx(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Cl(2565,"p")(2566,"strong"),qx(2567,"Componente compat\xEDvel:"),og(),Cl(2568,"code"),qx(2569,"po-multiselect"),og(),qx(2570,"."),og()()(),Cl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),qx(2575," forceBooleanComponentType"),Hl(2576,"br"),og()()(),Cl(2577,"td",21)(2578,"code",53),qx(2579,"ForceBooleanComponentEnum"),og()(),Cl(2580,"td",24)(2581,"em")(2582,"strong"),qx(2583,"(opcional)"),og()(),Cl(2584,"p"),qx(2585,"Valores aceitos:"),og(),Cl(2586,"ul")(2587,"li"),qx(2588,"ForceBooleanComponentEnum.switch"),og(),Cl(2589,"li"),qx(2590,"ForceBooleanComponentEnum.checkbox"),og()()()(),Cl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),qx(2595," forceOptionsComponentType"),Hl(2596,"br"),og()()(),Cl(2597,"td",21)(2598,"code",54),qx(2599,"ForceOptionComponentEnum"),og()(),Cl(2600,"td",24)(2601,"em")(2602,"strong"),qx(2603,"(opcional)"),og()(),Cl(2604,"p"),qx(2605,"pode ser utilizada em conjunto com a propriedade "),Cl(2606,"code"),qx(2607,"options"),og(),qx(2608," for\xE7ando o componente a renderizar um "),Cl(2609,"code"),qx(2610,"po-select"),og(),qx(2611," ou "),Cl(2612,"code"),qx(2613,"po-radio-group"),og(),qx(2614,"."),og(),Cl(2615,"p"),qx(2616,"Valores aceitos:"),og(),Cl(2617,"ul")(2618,"li"),qx(2619,"ForceOptionComponentEnum.radioGroup"),og(),Cl(2620,"li"),qx(2621,"ForceOptionComponentEnum.select"),og()(),Cl(2622,"blockquote")(2623,"p"),qx(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Cl(2625,"code"),qx(2626,"optionsMulti"),og(),qx(2627," e "),Cl(2628,"code"),qx(2629,"optionsService"),og(),qx(2630,"."),og()()()(),Cl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),qx(2635," formField"),Hl(2636,"br"),og()()(),Cl(2637,"td",21)(2638,"code",27),qx(2639,"string"),og()(),Cl(2640,"td",24)(2641,"em")(2642,"strong"),qx(2643,"(opcional)"),og()(),Cl(2644,"p"),qx(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Cl(2646,"code"),qx(2647,"url"),og(),qx(2648,"."),og(),Cl(2649,"blockquote")(2650,"p"),qx(2651,"O valor default \xE9 "),Cl(2652,"code"),qx(2653,"files"),og()()(),Cl(2654,"p")(2655,"strong"),qx(2656,"Componente compat\xEDvel"),og(),qx(2657,": "),Cl(2658,"code"),qx(2659,"po-upload"),og()()()(),Cl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),qx(2664," format"),Hl(2665,"br"),og()()(),Cl(2666,"td",21)(2667,"code",27),qx(2668,"string "),og(),Cl(2669,"code",32),qx(2670," Array<string>"),og()(),Cl(2671,"td",24)(2672,"em")(2673,"strong"),qx(2674,"(opcional)"),og()(),Cl(2675,"p"),qx(2676,"Formato de exibi\xE7\xE3o no campo."),og(),Cl(2677,"p"),qx(2678,"Ao utilizar esta propriedade com o "),Cl(2679,"code"),qx(2680,"type"),og(),Cl(2681,"em"),qx(2682,"PoDynamicFieldType.Date"),og(),qx(2683," ou "),Cl(2684,"em"),qx(2685,"PoDynamicFieldType.DateTime"),og(),qx(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Cl(2687,"p"),qx(2688,"Valores v\xE1lidos:"),og(),Cl(2689,"ul")(2690,"li"),qx(2691,"dd/mm/yyyy"),og(),Cl(2692,"li"),qx(2693,"mm/dd/yyyy"),og(),Cl(2694,"li"),qx(2695,"yyyy/mm/dd"),og()(),Cl(2696,"p"),qx(2697,"Ao utilizar com o "),Cl(2698,"code"),qx(2699,"type"),og(),Cl(2700,"em"),qx(2701,"PoDynamicFieldType.Time"),og(),qx(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Cl(2703,"p"),qx(2704,"Valores v\xE1lidos:"),og(),Cl(2705,"ul")(2706,"li")(2707,"code"),qx(2708,"24"),og(),qx(2709,": formato de 24 horas (padr\xE3o)"),og(),Cl(2710,"li")(2711,"code"),qx(2712,"12"),og(),qx(2713,": formato de 12 horas com indicador AM/PM"),og()(),Cl(2714,"p"),qx(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),Cl(2716,"code"),qx(2717,"searchService"),og(),qx(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Cl(2719,"p")(2720,"strong"),qx(2721,"Componentes compat\xEDveis:"),og(),Cl(2722,"code"),qx(2723,"po-datepicker"),og(),qx(2724,", "),Cl(2725,"code"),qx(2726,"po-timepicker"),og(),qx(2727,", "),Cl(2728,"code"),qx(2729,"po-lookup"),og(),qx(2730,"."),og()()(),Cl(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),qx(2735," formatModel"),Hl(2736,"br"),og()()(),Cl(2737,"td",21)(2738,"code",29),qx(2739,"boolean"),og()(),Cl(2740,"td",24)(2741,"em")(2742,"strong"),qx(2743,"(opcional)"),og()(),Cl(2744,"p"),qx(2745,"Indica se o "),Cl(2746,"code"),qx(2747,"model"),og(),qx(2748," receber\xE1 o valor formatado pelas propriedades "),Cl(2749,"code"),qx(2750,"p-label-on"),og(),qx(2751," e "),Cl(2752,"code"),qx(2753,"p-label-off"),og(),qx(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Cl(2755,"p"),qx(2756,"O valor padr\xE3o \xE9: "),Cl(2757,"code"),qx(2758,"false"),og(),qx(2759,"."),og(),Cl(2760,"blockquote")(2761,"p"),qx(2762,"Esta propriedade est\xE1 disponivel apenas para o "),Cl(2763,"code"),qx(2764,"swicth"),og(),qx(2765,"."),og()()()(),Cl(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),qx(2770," formatTime"),Hl(2771,"br"),og()()(),Cl(2772,"td",21)(2773,"code",27),qx(2774,"string"),og()(),Cl(2775,"td",24)(2776,"em")(2777,"strong"),qx(2778,"(opcional)"),og()(),Cl(2779,"p"),qx(2780,"Define o formato de exibi\xE7\xE3o do timer ("),Cl(2781,"code"),qx(2782,"'12'"),og(),qx(2783," ou "),Cl(2784,"code"),qx(2785,"'24'"),og(),qx(2786,")."),og(),Cl(2787,"p")(2788,"strong"),qx(2789,"Componente compat\xEDvel:"),og(),Cl(2790,"code"),qx(2791,"po-datetimepicker"),og(),qx(2792,", "),Cl(2793,"code"),qx(2794,"po-timepicker"),og()()()(),Cl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),qx(2799," gridColumns"),Hl(2800,"br"),og()()(),Cl(2801,"td",21)(2802,"code",45),qx(2803,"number"),og()(),Cl(2804,"td",24)(2805,"em")(2806,"strong"),qx(2807,"(opcional)"),og()(),Cl(2808,"p"),qx(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Cl(2810,"p"),qx(2811,"Deve ser usado o sistema de "),Cl(2812,"strong"),qx(2813,"grid"),og(),qx(2814," do PO (1 ... 12 colunas)."),og(),Cl(2815,"blockquote")(2816,"p"),qx(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Cl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),qx(2822," gridLgColumns"),Hl(2823,"br"),og()()(),Cl(2824,"td",21)(2825,"code",45),qx(2826,"number"),og()(),Cl(2827,"td",24)(2828,"em")(2829,"strong"),qx(2830,"(opcional)"),og()(),Cl(2831,"p"),qx(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Cl(2833,"p"),qx(2834,"Deve ser usado o sistema de "),Cl(2835,"strong"),qx(2836,"grid"),og(),qx(2837," do PO (1 ... 12 colunas)."),og(),Cl(2838,"blockquote")(2839,"p"),qx(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2841,"code"),qx(2842,"gridColumns"),og(),qx(2843,"."),og()()()(),Cl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),qx(2848," gridLgPull"),Hl(2849,"br"),og()()(),Cl(2850,"td",21)(2851,"code",45),qx(2852,"number"),og()(),Cl(2853,"td",24)(2854,"em")(2855,"strong"),qx(2856,"(opcional)"),og()(),Cl(2857,"p"),qx(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Cl(2859,"p"),qx(2860,"Deve ser usado o sistema de "),Cl(2861,"strong"),qx(2862,"grid"),og(),qx(2863," do PO (1 ... 11 colunas)."),og(),Cl(2864,"blockquote")(2865,"p"),qx(2866,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2867,"code"),qx(2868,"gridColumns"),og(),qx(2869,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),qx(2874," gridMdColumns"),Hl(2875,"br"),og()()(),Cl(2876,"td",21)(2877,"code",45),qx(2878,"number"),og()(),Cl(2879,"td",24)(2880,"em")(2881,"strong"),qx(2882,"(opcional)"),og()(),Cl(2883,"p"),qx(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Cl(2885,"p"),qx(2886,"Deve ser usado o sistema de "),Cl(2887,"strong"),qx(2888,"grid"),og(),qx(2889," do PO (1 ... 12 colunas)."),og(),Cl(2890,"blockquote")(2891,"p"),qx(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2893,"code"),qx(2894,"gridColumns"),og(),qx(2895,"."),og()()()(),Cl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),qx(2900," gridMdPull"),Hl(2901,"br"),og()()(),Cl(2902,"td",21)(2903,"code",45),qx(2904,"number"),og()(),Cl(2905,"td",24)(2906,"em")(2907,"strong"),qx(2908,"(opcional)"),og()(),Cl(2909,"p"),qx(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Cl(2911,"p"),qx(2912,"Deve ser usado o sistema de "),Cl(2913,"strong"),qx(2914,"grid"),og(),qx(2915," do PO (1 ... 11 colunas)."),og(),Cl(2916,"blockquote")(2917,"p"),qx(2918,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2919,"code"),qx(2920,"gridColumns"),og(),qx(2921,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),qx(2926," gridSmColumns"),Hl(2927,"br"),og()()(),Cl(2928,"td",21)(2929,"code",45),qx(2930,"number"),og()(),Cl(2931,"td",24)(2932,"em")(2933,"strong"),qx(2934,"(opcional)"),og()(),Cl(2935,"p"),qx(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Cl(2937,"p"),qx(2938,"Deve ser usado o sistema de "),Cl(2939,"strong"),qx(2940,"grid"),og(),qx(2941," do PO (1 ... 12 colunas)."),og(),Cl(2942,"blockquote")(2943,"p"),qx(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2945,"code"),qx(2946,"gridColumns"),og(),qx(2947,"."),og()()()(),Cl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),qx(2952," gridSmPull"),Hl(2953,"br"),og()()(),Cl(2954,"td",21)(2955,"code",45),qx(2956,"number"),og()(),Cl(2957,"td",24)(2958,"em")(2959,"strong"),qx(2960,"(opcional)"),og()(),Cl(2961,"p"),qx(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Cl(2963,"p"),qx(2964,"Deve ser usado o sistema de "),Cl(2965,"strong"),qx(2966,"grid"),og(),qx(2967," do PO (1 ... 11 colunas)."),og(),Cl(2968,"blockquote")(2969,"p"),qx(2970,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2971,"code"),qx(2972,"gridColumns"),og(),qx(2973,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),qx(2978," gridXlColumns"),Hl(2979,"br"),og()()(),Cl(2980,"td",21)(2981,"code",45),qx(2982,"number"),og()(),Cl(2983,"td",24)(2984,"em")(2985,"strong"),qx(2986,"(opcional)"),og()(),Cl(2987,"p"),qx(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Cl(2989,"p"),qx(2990,"Deve ser usado o sistema de "),Cl(2991,"strong"),qx(2992,"grid"),og(),qx(2993," do PO (1 ... 12 colunas)."),og(),Cl(2994,"blockquote")(2995,"p"),qx(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2997,"code"),qx(2998,"gridColumns"),og(),qx(2999,"."),og()()()(),Cl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),qx(3004," gridXlPull"),Hl(3005,"br"),og()()(),Cl(3006,"td",21)(3007,"code",45),qx(3008,"number"),og()(),Cl(3009,"td",24)(3010,"em")(3011,"strong"),qx(3012,"(opcional)"),og()(),Cl(3013,"p"),qx(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Cl(3015,"p"),qx(3016,"Deve ser usado o sistema de "),Cl(3017,"strong"),qx(3018,"grid"),og(),qx(3019," do PO (1 ... 11 colunas)."),og(),Cl(3020,"blockquote")(3021,"p"),qx(3022,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(3023,"code"),qx(3024,"gridColumns"),og(),qx(3025,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),qx(3030," headers"),Hl(3031,"br"),og()()(),Cl(3032,"td",21)(3033,"code",55),qx(3034,"{ [name: string]: string "),og(),Cl(3035,"code",56),qx(3036,` Array<string>;
}`),og()(),Cl(3037,"td",24)(3038,"em")(3039,"strong"),qx(3040,"(opcional)"),og()(),Cl(3041,"p"),qx(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Cl(3043,"p")(3044,"strong"),qx(3045,"Componente compat\xEDvel"),og(),qx(3046,": "),Cl(3047,"code"),qx(3048,"po-upload"),og()()()(),Cl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),qx(3053," help"),Hl(3054,"br"),og()()(),Cl(3055,"td",21)(3056,"code",27),qx(3057,"string"),og()(),Cl(3058,"td",24)(3059,"em")(3060,"strong"),qx(3061,"(opcional)"),og()(),Cl(3062,"p"),qx(3063,"Texto de ajuda."),og()()(),Cl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),qx(3068," helper"),Hl(3069,"br"),og()()(),Cl(3070,"td",21)(3071,"code",27),qx(3072,"string "),og(),Cl(3073,"code",38),qx(3074," PoHelperOptions"),og()(),Cl(3075,"td",24)(3076,"em")(3077,"strong"),qx(3078,"(opcional)"),og()(),Cl(3079,"p"),qx(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Cl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),qx(3085," hideLabelStatus"),Hl(3086,"br"),og()()(),Cl(3087,"td",21)(3088,"code",29),qx(3089,"boolean"),og()(),Cl(3090,"td",24)(3091,"em")(3092,"strong"),qx(3093,"(opcional)"),og()(),Cl(3094,"p"),qx(3095,"Indica se o status do "),Cl(3096,"code"),qx(3097,"model"),og(),qx(3098," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Cl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),qx(3103," hidePasswordPeek"),Hl(3104,"br"),og()()(),Cl(3105,"td",21)(3106,"code",29),qx(3107,"boolean"),og()(),Cl(3108,"td",24)(3109,"em")(3110,"strong"),qx(3111,"(opcional)"),og()(),Cl(3112,"p"),qx(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Cl(3114,"code"),qx(3115,"po-password"),og(),qx(3116,"."),og()()(),Cl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),qx(3121," hideRestrictionsInfo"),Hl(3122,"br"),og()()(),Cl(3123,"td",21)(3124,"code",29),qx(3125,"boolean"),og()(),Cl(3126,"td",24)(3127,"em")(3128,"strong"),qx(3129,"(opcional)"),og()(),Cl(3130,"p"),qx(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Cl(3132,"p")(3133,"strong"),qx(3134,"Componente compat\xEDvel"),og(),qx(3135,": "),Cl(3136,"code"),qx(3137,"po-upload"),og()()()(),Cl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),qx(3142," hideSearch"),Hl(3143,"br"),og()()(),Cl(3144,"td",21)(3145,"code",29),qx(3146,"boolean"),og()(),Cl(3147,"td",24)(3148,"em")(3149,"strong"),qx(3150,"(opcional)"),og()(),Cl(3151,"p"),qx(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),Cl(3153,"code"),qx(3154,"po-multiselect"),og(),qx(3155,"."),og()()(),Cl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),qx(3160," hideSelectAll"),Hl(3161,"br"),og()()(),Cl(3162,"td",21)(3163,"code",29),qx(3164,"boolean"),og()(),Cl(3165,"td",24)(3166,"em")(3167,"strong"),qx(3168,"(opcional)"),og()(),Cl(3169,"p"),qx(3170,'Indica se o campo "Selecionar todos" do '),Cl(3171,"code"),qx(3172,"po-multiselect"),og(),qx(3173," ser\xE1 escondido."),og()()(),Cl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),qx(3178," hideSelectButton"),Hl(3179,"br"),og()()(),Cl(3180,"td",21)(3181,"code",29),qx(3182,"boolean"),og()(),Cl(3183,"td",24)(3184,"em")(3185,"strong"),qx(3186,"(opcional)"),og()(),Cl(3187,"p"),qx(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Cl(3189,"blockquote")(3190,"p"),qx(3191,"Caso o valor definido seja "),Cl(3192,"code"),qx(3193,"true"),og(),qx(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Cl(3195,"code"),qx(3196,"selectFiles()"),og(),qx(3197," para sele\xE7\xE3o de arquivos."),og()(),Cl(3198,"p")(3199,"strong"),qx(3200,"Componente compat\xEDvel"),og(),qx(3201,": "),Cl(3202,"code"),qx(3203,"po-upload"),og()()()(),Cl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),qx(3208," hideSendButton"),Hl(3209,"br"),og()()(),Cl(3210,"td",21)(3211,"code",29),qx(3212,"boolean"),og()(),Cl(3213,"td",24)(3214,"em")(3215,"strong"),qx(3216,"(opcional)"),og()(),Cl(3217,"p"),qx(3218,"Omite o bot\xE3o de envio de arquivos."),og(),Cl(3219,"blockquote")(3220,"p"),qx(3221,"Caso o valor definido seja "),Cl(3222,"code"),qx(3223,"true"),og(),qx(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Cl(3225,"code"),qx(3226,"sendFiles()"),og(),qx(3227," para envio do(s) arquivo(s) selecionado(s)."),og()(),Cl(3228,"p")(3229,"strong"),qx(3230,"Componente compat\xEDvel"),og(),qx(3231,": "),Cl(3232,"code"),qx(3233,"po-upload"),og()()()(),Cl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),qx(3238," icon"),Hl(3239,"br"),og()()(),Cl(3240,"td",21)(3241,"code",27),qx(3242,"string "),og(),Cl(3243,"code",57),qx(3244," TemplateRef<void>"),og()(),Cl(3245,"td",24)(3246,"em")(3247,"strong"),qx(3248,"(opcional)"),og()(),Cl(3249,"p"),qx(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(3251,"blockquote")(3252,"p"),qx(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Cl(3254,"ul")(3255,"li"),qx(3256,"Input;"),og(),Cl(3257,"li"),qx(3258,"Number;"),og(),Cl(3259,"li"),qx(3260,"Decimal;"),og(),Cl(3261,"li"),qx(3262,"Combo;"),og(),Cl(3263,"li"),qx(3264,"Password;"),og()(),Cl(3265,"blockquote")(3266,"p"),qx(3267,"Veja a disponibilidade de \xEDcones em "),Cl(3268,"a",58),qx(3269,"biblioteca de \xEDcones"),og(),qx(3270,"."),og()()()(),Cl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),qx(3275," infiniteScroll"),Hl(3276,"br"),og()()(),Cl(3277,"td",21)(3278,"code",29),qx(3279,"boolean"),og()(),Cl(3280,"td",24)(3281,"em")(3282,"strong"),qx(3283,"(opcional)"),og()(),Cl(3284,"p"),qx(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Cl(3286,"p")(3287,"strong"),qx(3288,"Componentes compat\xEDveis:"),og(),Cl(3289,"code"),qx(3290,"po-combo"),og(),qx(3291,", "),Cl(3292,"code"),qx(3293,"po-lookup"),og(),qx(3294,"."),og()()(),Cl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),qx(3299," infiniteScrollDistance"),Hl(3300,"br"),og()()(),Cl(3301,"td",21)(3302,"code",45),qx(3303,"number"),og()(),Cl(3304,"td",24)(3305,"em")(3306,"strong"),qx(3307,"(opcional)"),og()(),Cl(3308,"p"),qx(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Cl(3310,"strong"),qx(3311,"Exemplos"),og(),Cl(3312,"code"),qx(3313,"{ infiniteScrollDistance: 80 }"),og(),qx(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Cl(3315,"p")(3316,"strong"),qx(3317,"Componente compat\xEDvel:"),og(),Cl(3318,"code"),qx(3319,"po-combo"),og(),qx(3320,"."),og()()(),Cl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),qx(3325," invalidValue"),Hl(3326,"br"),og()()(),Cl(3327,"td",21)(3328,"code",29),qx(3329,"boolean"),og()(),Cl(3330,"td",24)(3331,"em")(3332,"strong"),qx(3333,"(opcional)"),og()(),Cl(3334,"p"),qx(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Cl(3336,"code"),qx(3337,"p-field-error-message"),og(),qx(3338,"."),og(),Cl(3339,"blockquote")(3340,"p"),qx(3341,"Caso essa propriedade seja definida como "),Cl(3342,"code"),qx(3343,"true"),og(),qx(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Cl(3345,"p")(3346,"strong"),qx(3347,"Componente compat\xEDvel"),og(),qx(3348,": "),Cl(3349,"code"),qx(3350,"po-switch"),og()()()(),Cl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),qx(3355," isoFormat"),Hl(3356,"br"),og()()(),Cl(3357,"td",21)(3358,"code",59),qx(3359,"PoDatepickerIsoFormat"),og()(),Cl(3360,"td",24)(3361,"em")(3362,"strong"),qx(3363,"(opcional)"),og()(),Cl(3364,"p"),qx(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Cl(3366,"blockquote")(3367,"p"),qx(3368,"Veja os valores v\xE1lidos no "),Cl(3369,"code"),qx(3370,"PoDatepickerIsoFormat"),og(),qx(3371,"."),og()(),Cl(3372,"p")(3373,"strong"),qx(3374,"Componente compat\xEDvel:"),og(),Cl(3375,"code"),qx(3376,"po-datepicker"),og()()()(),Cl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),qx(3381," key"),Hl(3382,"br"),og()()(),Cl(3383,"td",21)(3384,"code",29),qx(3385,"boolean"),og()(),Cl(3386,"td",24)(3387,"em")(3388,"strong"),qx(3389,"(opcional)"),og()(),Cl(3390,"p"),qx(3391,"Identificador"),og()()(),Cl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),qx(3396," keydown"),Hl(3397,"br"),og()()(),Cl(3398,"td",21)(3399,"code",44),qx(3400,"Function"),og()(),Cl(3401,"td",24)(3402,"em")(3403,"strong"),qx(3404,"(opcional)"),og()(),Cl(3405,"p"),qx(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(3407,"code"),qx(3408,"KeyboardEvent"),og(),qx(3409," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),qx(3414," label"),Hl(3415,"br"),og()()(),Cl(3416,"td",21)(3417,"code",27),qx(3418,"string"),og()(),Cl(3419,"td",24)(3420,"em")(3421,"strong"),qx(3422,"(opcional)"),og()(),Cl(3423,"p"),qx(3424,"R\xF3tulo do campo exibido."),og(),Cl(3425,"p"),qx(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Cl(3427,"code"),qx(3428,"label"),og(),qx(3429," o valor da propriedade "),Cl(3430,"code"),qx(3431,"property"),og(),qx(3432," com a primeira letra em mai\xFAsculo."),og()()(),Cl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),qx(3437," labelPosition"),Hl(3438,"br"),og()()(),Cl(3439,"td",21)(3440,"code",60),qx(3441,"PoSwitchLabelPosition"),og()(),Cl(3442,"td",24)(3443,"em")(3444,"strong"),qx(3445,"(opcional)"),og()(),Cl(3446,"p"),qx(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Cl(3448,"blockquote")(3449,"p"),qx(3450,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Cl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),qx(3455," listboxControlPosition"),Hl(3456,"br"),og()()(),Cl(3457,"td",21)(3458,"code",61),qx(3459,"'top' "),og(),Cl(3460,"code",62),qx(3461," 'bottom'"),og()(),Cl(3462,"td",24)(3463,"em")(3464,"strong"),qx(3465,"(opcional)"),og()(),Cl(3466,"p"),qx(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Cl(3468,"code"),qx(3469,"listbox"),og(),qx(3470," em rela\xE7\xE3o ao campo ("),Cl(3471,"code"),qx(3472,"top"),og(),qx(3473," ou "),Cl(3474,"code"),qx(3475,"bottom"),og(),qx(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Cl(3477,"p")(3478,"strong"),qx(3479,"Componentes compat\xEDveis:"),og(),Cl(3480,"code"),qx(3481,"po-multiselect"),og(),qx(3482,", "),Cl(3483,"code"),qx(3484,"po-combo"),og(),qx(3485,"."),og()()(),Cl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),qx(3490," literals"),Hl(3491,"br"),og()()(),Cl(3492,"td",21)(3493,"code",36),qx(3494,"PoLookupLiterals "),og(),Cl(3495,"code",63),qx(3496," PoMultiselectLiterals "),og(),Cl(3497,"code",64),qx(3498," PoComboLiterals "),og(),Cl(3499,"code",65),qx(3500," PoDatepickerRangeLiterals "),og(),Cl(3501,"code",66),qx(3502," PoUploadLiterals"),og()(),Cl(3503,"td",24)(3504,"em")(3505,"strong"),qx(3506,"(opcional)"),og()(),Cl(3507,"p"),qx(3508,"Objeto com as literais usadas para os seguintes componentes: "),Cl(3509,"code"),qx(3510,"po-lookup"),og(),qx(3511,", "),Cl(3512,"code"),qx(3513,"po-multiselect"),og(),qx(3514,", "),Cl(3515,"code"),qx(3516,"po-combo"),og(),qx(3517," e "),Cl(3518,"code"),qx(3519,"po-datepicker-range"),og(),qx(3520,"."),og(),Cl(3521,"blockquote")(3522,"p"),qx(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Cl(3524,"p")(3525,"strong"),qx(3526,"Componentes compat\xEDveis:"),og(),Cl(3527,"code"),qx(3528,"po-lookup"),og(),qx(3529,", "),Cl(3530,"code"),qx(3531,"po-multiselect"),og(),qx(3532,", "),Cl(3533,"code"),qx(3534,"po-combo"),og(),qx(3535,", "),Cl(3536,"code"),qx(3537,"po-datepicker-range"),og()()()(),Cl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),qx(3542," loading"),Hl(3543,"br"),og()()(),Cl(3544,"td",21)(3545,"code",29),qx(3546,"boolean"),og()(),Cl(3547,"td",24)(3548,"em")(3549,"strong"),qx(3550,"(opcional)"),og()(),Cl(3551,"p"),qx(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Cl(3553,"blockquote")(3554,"p"),qx(3555,"Por padr\xE3o \xE9 "),Cl(3556,"code"),qx(3557,"false"),og(),qx(3558,"."),og()(),Cl(3559,"p")(3560,"strong"),qx(3561,"Componentes compat\xEDveis:"),og(),Cl(3562,"code"),qx(3563,"po-datepicker"),og(),qx(3564,", "),Cl(3565,"code"),qx(3566,"po-datepicker-range"),og(),qx(3567,", "),Cl(3568,"code"),qx(3569,"po-number"),og(),qx(3570,", "),Cl(3571,"code"),qx(3572,"po-decimal"),og(),qx(3573,`,
`),Cl(3574,"code"),qx(3575,"po-input"),og(),qx(3576,", "),Cl(3577,"code"),qx(3578,"po-select"),og(),qx(3579,", "),Cl(3580,"code"),qx(3581,"po-switch"),og(),qx(3582,", "),Cl(3583,"code"),qx(3584,"po-combo"),og(),qx(3585,", "),Cl(3586,"code"),qx(3587,"po-lookup"),og(),qx(3588,", "),Cl(3589,"code"),qx(3590,"po-multiselect"),og(),qx(3591,`,
`),Cl(3592,"code"),qx(3593,"po-textarea"),og(),qx(3594,", "),Cl(3595,"code"),qx(3596,"po-password"),og(),qx(3597,", "),Cl(3598,"code"),qx(3599,"po-upload"),og(),qx(3600,"."),og()()(),Cl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),qx(3605," locale"),Hl(3606,"br"),og()()(),Cl(3607,"td",21)(3608,"code",27),qx(3609,"string"),og()(),Cl(3610,"td",24)(3611,"em")(3612,"strong"),qx(3613,"(opcional)"),og()(),Cl(3614,"p"),qx(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Cl(3616,"a",67)(3617,"code"),qx(3618,"I18n"),og()()(),Cl(3619,"p"),qx(3620,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(3621,"pre")(3622,"code"),qx(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Cl(3624,"blockquote")(3625,"p"),qx(3626,"Para ver quais linguagens suportadas acesse "),Cl(3627,"a",67)(3628,"code"),qx(3629,"I18n"),og()()()(),Cl(3630,"p")(3631,"strong"),qx(3632,"Componentes compat\xEDveis:"),og(),Cl(3633,"code"),qx(3634,"po-datepicker"),og(),qx(3635,", "),Cl(3636,"code"),qx(3637,"po-decimal"),og(),qx(3638,", "),Cl(3639,"code"),qx(3640,"po-timepicker"),og(),qx(3641,"."),og()()(),Cl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),qx(3646," mask"),Hl(3647,"br"),og()()(),Cl(3648,"td",21)(3649,"code",27),qx(3650,"string"),og()(),Cl(3651,"td",24)(3652,"em")(3653,"strong"),qx(3654,"(opcional)"),og()(),Cl(3655,"p"),qx(3656,"M\xE1scara para o campo."),og(),Cl(3657,"p")(3658,"strong"),qx(3659,"Componente compat\xEDvel:"),og(),Cl(3660,"code"),qx(3661,"po-input"),og(),qx(3662,"."),og(),Cl(3663,"blockquote")(3664,"p"),qx(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Cl(3666,"code"),qx(3667,"type: time"),og(),qx(3668,"."),og()()()(),Cl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),qx(3673," maskFormatModel"),Hl(3674,"br"),og()()(),Cl(3675,"td",21)(3676,"code",29),qx(3677,"boolean"),og()(),Cl(3678,"td",24)(3679,"em")(3680,"strong"),qx(3681,"(opcional)"),og()(),Cl(3682,"p"),qx(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Cl(3684,"code"),qx(3685,"false"),og(),qx(3686,"."),og(),Cl(3687,"p")(3688,"strong"),qx(3689,"Componente compat\xEDvel:"),og(),Cl(3690,"code"),qx(3691,"po-input"),og(),qx(3692,"."),og(),Cl(3693,"blockquote")(3694,"p"),qx(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Cl(3696,"code"),qx(3697,"type: time"),og(),qx(3698,"."),og()()()(),Cl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),qx(3703," maskNoLengthValidation"),Hl(3704,"br"),og()()(),Cl(3705,"td",21)(3706,"code",29),qx(3707,"boolean"),og()(),Cl(3708,"td",24)(3709,"em")(3710,"strong"),qx(3711,"(opcional)"),og()(),Cl(3712,"p"),qx(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(3714,"code"),qx(3715,"minLength"),og(),qx(3716,") e m\xE1ximo ("),Cl(3717,"code"),qx(3718,"maxLength"),og(),qx(3719,") quando h\xE1 uma m\xE1scara ("),Cl(3720,"code"),qx(3721,"p-mask"),og(),qx(3722,") definida."),og(),Cl(3723,"ul")(3724,"li"),qx(3725,"Quando "),Cl(3726,"code"),qx(3727,"true"),og(),qx(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(3729,"li"),qx(3730,"Quando "),Cl(3731,"code"),qx(3732,"false"),og(),qx(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(3734,"p")(3735,"strong"),qx(3736,"Componentes compat\xEDveis:"),og(),Cl(3737,"code"),qx(3738,"po-input"),og(),qx(3739,", "),Cl(3740,"code"),qx(3741,"po-decimal"),og(),qx(3742,"."),og(),Cl(3743,"blockquote")(3744,"p"),qx(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(3746,"code"),qx(3747,"p-mask-format-model"),og(),qx(3748,"."),og()(),Cl(3749,"p"),qx(3750,"Exemplo:"),og(),Cl(3751,"pre")(3752,"code"),qx(3753,`fields:Array<PoDynamicFormField> = [
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
`),og()(),Cl(3754,"ul")(3755,"li"),qx(3756,"Entrada: "),Cl(3757,"code"),qx(3758,"11.111.111/1111-11"),og(),qx(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Cl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),qx(3764," maxLength"),Hl(3765,"br"),og()()(),Cl(3766,"td",21)(3767,"code",45),qx(3768,"number"),og()(),Cl(3769,"td",24)(3770,"em")(3771,"strong"),qx(3772,"(opcional)"),og()(),Cl(3773,"p"),qx(3774,"Tamanho m\xE1ximo de caracteres."),og(),Cl(3775,"p")(3776,"strong"),qx(3777,"Componentes compat\xEDveis:"),og(),Cl(3778,"code"),qx(3779,"po-input"),og(),qx(3780,", "),Cl(3781,"code"),qx(3782,"po-number"),og(),qx(3783,", "),Cl(3784,"code"),qx(3785,"po-decimal"),og(),qx(3786,", "),Cl(3787,"code"),qx(3788,"po-textarea"),og(),qx(3789,", "),Cl(3790,"code"),qx(3791,"po-password"),og(),qx(3792,"."),og()()(),Cl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),qx(3797," maxTime"),Hl(3798,"br"),og()()(),Cl(3799,"td",21)(3800,"code",27),qx(3801,"string"),og()(),Cl(3802,"td",24)(3803,"em")(3804,"strong"),qx(3805,"(opcional)"),og()(),Cl(3806,"p"),qx(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Cl(3808,"code"),qx(3809,"HH:mm"),og(),qx(3810," ou "),Cl(3811,"code"),qx(3812,"HH:mm:ss"),og(),qx(3813,"."),og(),Cl(3814,"p")(3815,"strong"),qx(3816,"Componente compat\xEDvel:"),og(),Cl(3817,"code"),qx(3818,"po-datetimepicker"),og(),qx(3819,", "),Cl(3820,"code"),qx(3821,"po-timepicker"),og()()()(),Cl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),qx(3826," maxValue"),Hl(3827,"br"),og()()(),Cl(3828,"td",21)(3829,"code",27),qx(3830,"string "),og(),Cl(3831,"code",45),qx(3832," number"),og()(),Cl(3833,"td",24)(3834,"em")(3835,"strong"),qx(3836,"(opcional)"),og()(),Cl(3837,"p"),qx(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Cl(3839,"em"),qx(3840,"number"),og(),qx(3841,", "),Cl(3842,"em"),qx(3843,"date"),og(),qx(3844,", "),Cl(3845,"em"),qx(3846,"dateTime"),og(),qx(3847," ou "),Cl(3848,"em"),qx(3849,"time"),og(),qx(3850,"."),og(),Cl(3851,"blockquote")(3852,"p"),qx(3853,"Para "),Cl(3854,"code"),qx(3855,"po-timepicker"),og(),qx(3856,", o valor deve estar no formato "),Cl(3857,"code"),qx(3858,"HH:mm"),og(),qx(3859," ou "),Cl(3860,"code"),qx(3861,"HH:mm:ss"),og(),qx(3862,"."),og()(),Cl(3863,"p")(3864,"strong"),qx(3865,"Componentes compat\xEDveis:"),og(),Cl(3866,"code"),qx(3867,"po-datepicker"),og(),qx(3868,", "),Cl(3869,"code"),qx(3870,"po-datepicker-range"),og(),qx(3871,", "),Cl(3872,"code"),qx(3873,"po-number"),og(),qx(3874,", "),Cl(3875,"code"),qx(3876,"po-decimal"),og(),qx(3877,", "),Cl(3878,"code"),qx(3879,"po-timepicker"),og()()()(),Cl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),qx(3884," minLength"),Hl(3885,"br"),og()()(),Cl(3886,"td",21)(3887,"code",45),qx(3888,"number"),og()(),Cl(3889,"td",24)(3890,"em")(3891,"strong"),qx(3892,"(opcional)"),og()(),Cl(3893,"p"),qx(3894,"Tamanho m\xEDnimo de caracteres."),og(),Cl(3895,"p")(3896,"strong"),qx(3897,"Componentes compat\xEDveis:"),og(),Cl(3898,"code"),qx(3899,"po-input"),og(),qx(3900,", "),Cl(3901,"code"),qx(3902,"po-number"),og(),qx(3903,", "),Cl(3904,"code"),qx(3905,"po-decimal"),og(),qx(3906,", "),Cl(3907,"code"),qx(3908,"po-textarea"),og(),qx(3909,", "),Cl(3910,"code"),qx(3911,"po-password"),og(),qx(3912,"."),og()()(),Cl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),qx(3917," minTime"),Hl(3918,"br"),og()()(),Cl(3919,"td",21)(3920,"code",27),qx(3921,"string"),og()(),Cl(3922,"td",24)(3923,"em")(3924,"strong"),qx(3925,"(opcional)"),og()(),Cl(3926,"p"),qx(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Cl(3928,"code"),qx(3929,"HH:mm"),og(),qx(3930," ou "),Cl(3931,"code"),qx(3932,"HH:mm:ss"),og(),qx(3933,"."),og(),Cl(3934,"p")(3935,"strong"),qx(3936,"Componente compat\xEDvel:"),og(),Cl(3937,"code"),qx(3938,"po-datetimepicker"),og(),qx(3939,", "),Cl(3940,"code"),qx(3941,"po-timepicker"),og()()()(),Cl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),qx(3946," minValue"),Hl(3947,"br"),og()()(),Cl(3948,"td",21)(3949,"code",27),qx(3950,"string "),og(),Cl(3951,"code",45),qx(3952," number"),og()(),Cl(3953,"td",24)(3954,"em")(3955,"strong"),qx(3956,"(opcional)"),og()(),Cl(3957,"p"),qx(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Cl(3959,"em"),qx(3960,"number"),og(),qx(3961,", "),Cl(3962,"em"),qx(3963,"date"),og(),qx(3964,", "),Cl(3965,"em"),qx(3966,"dateTime"),og(),qx(3967," ou "),Cl(3968,"em"),qx(3969,"time"),og(),qx(3970,"."),og(),Cl(3971,"blockquote")(3972,"p"),qx(3973,"Para "),Cl(3974,"code"),qx(3975,"po-timepicker"),og(),qx(3976,", o valor deve estar no formato "),Cl(3977,"code"),qx(3978,"HH:mm"),og(),qx(3979," ou "),Cl(3980,"code"),qx(3981,"HH:mm:ss"),og(),qx(3982,"."),og()(),Cl(3983,"p")(3984,"strong"),qx(3985,"Componentes compat\xEDveis:"),og(),Cl(3986,"code"),qx(3987,"po-datepicker"),og(),qx(3988,", "),Cl(3989,"code"),qx(3990,"po-datepicker-range"),og(),qx(3991,", "),Cl(3992,"code"),qx(3993,"po-number"),og(),qx(3994,", "),Cl(3995,"code"),qx(3996,"po-decimal"),og(),qx(3997,", "),Cl(3998,"code"),qx(3999,"po-timepicker"),og()()()(),Cl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),qx(4004," minuteInterval"),Hl(4005,"br"),og()()(),Cl(4006,"td",21)(4007,"code",45),qx(4008,"number"),og()(),Cl(4009,"td",24)(4010,"em")(4011,"strong"),qx(4012,"(opcional)"),og()(),Cl(4013,"p"),qx(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Cl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),qx(4019," mode"),Hl(4020,"br"),og()()(),Cl(4021,"td",21)(4022,"code",68),qx(4023,"'month-year' "),og(),Cl(4024,"code",69),qx(4025," 'year'"),og()(),Cl(4026,"td",24)(4027,"em")(4028,"strong"),qx(4029,"(opcional)"),og()(),Cl(4030,"p"),qx(4031,"Define o modo de sele\xE7\xE3o do "),Cl(4032,"code"),qx(4033,"po-datepicker"),og(),qx(4034,"."),og(),Cl(4035,"p"),qx(4036,"Valores aceitos:"),og(),Cl(4037,"ul")(4038,"li")(4039,"code"),qx(4040,"'month-year'"),og(),qx(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Cl(4042,"code"),qx(4043,"MM/YYYY"),og(),qx(4044,")"),og(),Cl(4045,"li")(4046,"code"),qx(4047,"'year'"),og(),qx(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),Cl(4049,"code"),qx(4050,"YYYY"),og(),qx(4051,")"),og()(),Cl(4052,"p")(4053,"strong"),qx(4054,"Componente compat\xEDvel:"),og(),Cl(4055,"code"),qx(4056,"po-datepicker"),og()()()(),Cl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),qx(4061," modelFormat"),Hl(4062,"br"),og()()(),Cl(4063,"td",21)(4064,"code",70),qx(4065,"PoTimepickerModelFormat"),og()(),Cl(4066,"td",24)(4067,"em")(4068,"strong"),qx(4069,"(opcional)"),og()(),Cl(4070,"p"),qx(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Cl(4072,"code"),qx(4073,"po-timepicker"),og(),qx(4074,"."),og(),Cl(4075,"blockquote")(4076,"p"),qx(4077,"Veja os valores v\xE1lidos no "),Cl(4078,"code"),qx(4079,"PoTimepickerModelFormat"),og(),qx(4080,"."),og()(),Cl(4081,"p")(4082,"strong"),qx(4083,"Componente compat\xEDvel:"),og(),Cl(4084,"code"),qx(4085,"po-timepicker"),og()()()(),Cl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),qx(4090," multiple"),Hl(4091,"br"),og()()(),Cl(4092,"td",21)(4093,"code",29),qx(4094,"boolean"),og()(),Cl(4095,"td",24)(4096,"em")(4097,"strong"),qx(4098,"(opcional)"),og()(),Cl(4099,"p"),qx(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Cl(4101,"p")(4102,"strong"),qx(4103,"Componentes compat\xEDveis:"),og(),Cl(4104,"code"),qx(4105,"po-lookup"),og(),qx(4106,", "),Cl(4107,"code"),qx(4108,"po-upload"),og()()()(),Cl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),qx(4113," noAutocomplete"),Hl(4114,"br"),og()()(),Cl(4115,"td",21)(4116,"code",29),qx(4117,"boolean"),og()(),Cl(4118,"td",24)(4119,"em")(4120,"strong"),qx(4121,"(opcional)"),og()(),Cl(4122,"p"),qx(4123,"Define a propriedade nativa "),Cl(4124,"code"),qx(4125,"autocomplete"),og(),qx(4126," do campo como off."),og(),Cl(4127,"p")(4128,"strong"),qx(4129,"Componentes compat\xEDveis:"),og(),Cl(4130,"code"),qx(4131,"po-datepicker"),og(),qx(4132,", "),Cl(4133,"code"),qx(4134,"po-datepicker-range"),og(),qx(4135,", "),Cl(4136,"code"),qx(4137,"po-input"),og(),qx(4138,", "),Cl(4139,"code"),qx(4140,"po-number"),og(),qx(4141,", "),Cl(4142,"code"),qx(4143,"po-decimal"),og(),qx(4144,`,
`),Cl(4145,"code"),qx(4146,"po-lookup"),og(),qx(4147,", "),Cl(4148,"code"),qx(4149,"po-password"),og(),qx(4150,", "),Cl(4151,"code"),qx(4152,"po-timepicker"),og(),qx(4153,"."),og()()(),Cl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),qx(4158," offsetColumns"),Hl(4159,"br"),og()()(),Cl(4160,"td",21)(4161,"code",45),qx(4162,"number"),og()(),Cl(4163,"td",24)(4164,"em")(4165,"strong"),qx(4166,"(opcional)"),og()(),Cl(4167,"p"),qx(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Cl(4169,"p"),qx(4170,"Deve ser usado o sistema de "),Cl(4171,"strong"),qx(4172,"grid"),og(),qx(4173," do PO (1 ... 12 colunas)."),og(),Cl(4174,"blockquote")(4175,"p"),qx(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Cl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),qx(4181," offsetLgColumns"),Hl(4182,"br"),og()()(),Cl(4183,"td",21)(4184,"code",45),qx(4185,"number"),og()(),Cl(4186,"td",24)(4187,"em")(4188,"strong"),qx(4189,"(opcional)"),og()(),Cl(4190,"p"),qx(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Cl(4192,"p"),qx(4193,"Deve ser usado o sistema de "),Cl(4194,"strong"),qx(4195,"grid"),og(),qx(4196," do PO (1 ... 12 colunas)."),og(),Cl(4197,"blockquote")(4198,"p"),qx(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(4200,"code"),qx(4201,"offsetColumns"),og(),qx(4202,"."),og()()()(),Cl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),qx(4207," offsetMdColumns"),Hl(4208,"br"),og()()(),Cl(4209,"td",21)(4210,"code",45),qx(4211,"number"),og()(),Cl(4212,"td",24)(4213,"em")(4214,"strong"),qx(4215,"(opcional)"),og()(),Cl(4216,"p"),qx(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Cl(4218,"p"),qx(4219,"Deve ser usado o sistema de "),Cl(4220,"strong"),qx(4221,"grid"),og(),qx(4222," do PO (1 ... 12 colunas)."),og(),Cl(4223,"blockquote")(4224,"p"),qx(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(4226,"code"),qx(4227,"offsetColumns"),og(),qx(4228,"."),og()()()(),Cl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),qx(4233," offsetSmColumns"),Hl(4234,"br"),og()()(),Cl(4235,"td",21)(4236,"code",45),qx(4237,"number"),og()(),Cl(4238,"td",24)(4239,"em")(4240,"strong"),qx(4241,"(opcional)"),og()(),Cl(4242,"p"),qx(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Cl(4244,"p"),qx(4245,"Deve ser usado o sistema de "),Cl(4246,"strong"),qx(4247,"grid"),og(),qx(4248," do PO (1 ... 12 colunas)."),og(),Cl(4249,"blockquote")(4250,"p"),qx(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(4252,"code"),qx(4253,"offsetColumns"),og(),qx(4254,"."),og()()()(),Cl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),qx(4259," offsetXlColumns"),Hl(4260,"br"),og()()(),Cl(4261,"td",21)(4262,"code",45),qx(4263,"number"),og()(),Cl(4264,"td",24)(4265,"em")(4266,"strong"),qx(4267,"(opcional)"),og()(),Cl(4268,"p"),qx(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Cl(4270,"p"),qx(4271,"Deve ser usado o sistema de "),Cl(4272,"strong"),qx(4273,"grid"),og(),qx(4274," do PO (1 ... 12 colunas)."),og(),Cl(4275,"blockquote")(4276,"p"),qx(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(4278,"code"),qx(4279,"offsetColumns"),og(),qx(4280,"."),og()()()(),Cl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),qx(4285," onError"),Hl(4286,"br"),og()()(),Cl(4287,"td",21)(4288,"code",44),qx(4289,"Function"),og()(),Cl(4290,"td",24)(4291,"em")(4292,"strong"),qx(4293,"(opcional)"),og()(),Cl(4294,"p"),qx(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Cl(4296,"blockquote")(4297,"p"),qx(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Cl(4299,"code"),qx(4300,"HttpErrorResponse"),og(),qx(4301,"."),og()(),Cl(4302,"p")(4303,"strong"),qx(4304,"Componente compat\xEDvel"),og(),qx(4305,": "),Cl(4306,"code"),qx(4307,"po-upload"),og()()()(),Cl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),qx(4312," onSuccess"),Hl(4313,"br"),og()()(),Cl(4314,"td",21)(4315,"code",44),qx(4316,"Function"),og()(),Cl(4317,"td",24)(4318,"em")(4319,"strong"),qx(4320,"(opcional)"),og()(),Cl(4321,"p"),qx(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Cl(4323,"blockquote")(4324,"p"),qx(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Cl(4326,"code"),qx(4327,"HttpResponse"),og(),qx(4328,"."),og()(),Cl(4329,"p")(4330,"strong"),qx(4331,"Componente compat\xEDvel"),og(),qx(4332,": "),Cl(4333,"code"),qx(4334,"po-upload"),og()()()(),Cl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),qx(4339," onUpload"),Hl(4340,"br"),og()()(),Cl(4341,"td",21)(4342,"code",44),qx(4343,"Function"),og()(),Cl(4344,"td",24)(4345,"em")(4346,"strong"),qx(4347,"(opcional)"),og()(),Cl(4348,"p"),qx(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Cl(4350,"pre")(4351,"code"),qx(4352,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Cl(4353,"p")(4354,"strong"),qx(4355,"Componente compat\xEDvel"),og(),qx(4356,": "),Cl(4357,"code"),qx(4358,"po-upload"),og()()()(),Cl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),qx(4363," optional"),Hl(4364,"br"),og()()(),Cl(4365,"td",21)(4366,"code",29),qx(4367,"boolean"),og()(),Cl(4368,"td",24)(4369,"em")(4370,"strong"),qx(4371,"(opcional)"),og()(),Cl(4372,"p"),qx(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(4374,"blockquote")(4375,"p"),qx(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Cl(4377,"ul")(4378,"li"),qx(4379,"O campo for "),Cl(4380,"code"),qx(4381,"required"),og(),qx(4382,", ou;"),og(),Cl(4383,"li"),qx(4384,"N\xE3o possuir "),Cl(4385,"code"),qx(4386,"help"),og(),qx(4387," e "),Cl(4388,"code"),qx(4389,"label"),og(),qx(4390,"."),og()(),Cl(4391,"p")(4392,"strong"),qx(4393,"Componentes compat\xEDveis:"),og(),Cl(4394,"code"),qx(4395,"po-datepicker"),og(),qx(4396,", "),Cl(4397,"code"),qx(4398,"po-datepicker-range"),og(),qx(4399,", "),Cl(4400,"code"),qx(4401,"po-timepicker"),og(),qx(4402,", "),Cl(4403,"code"),qx(4404,"po-input"),og(),qx(4405,", "),Cl(4406,"code"),qx(4407,"po-number"),og(),qx(4408,`,
`),Cl(4409,"code"),qx(4410,"po-decimal"),og(),qx(4411,", "),Cl(4412,"code"),qx(4413,"po-select"),og(),qx(4414,", "),Cl(4415,"code"),qx(4416,"po-radio-group"),og(),qx(4417,", "),Cl(4418,"code"),qx(4419,"po-combo"),og(),qx(4420,", "),Cl(4421,"code"),qx(4422,"po-lookup"),og(),qx(4423,", "),Cl(4424,"code"),qx(4425,"po-checkbox-group"),og(),qx(4426,", "),Cl(4427,"code"),qx(4428,"po-multiselect"),og(),qx(4429,`,
`),Cl(4430,"code"),qx(4431,"po-textarea"),og(),qx(4432,", "),Cl(4433,"code"),qx(4434,"po-password"),og(),qx(4435,"."),og()()(),Cl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),qx(4440," options"),Hl(4441,"br"),og()()(),Cl(4442,"td",21)(4443,"code",32),qx(4444,"Array<string> "),og(),Cl(4445,"code",71),qx(4446," Array<PoSelectOption> "),og(),Cl(4447,"code",72),qx(4448," Array<PoMultiselectOption> "),og(),Cl(4449,"code",73),qx(4450," Array<PoCheckboxGroupOption> "),og(),Cl(4451,"code",74),qx(4452," Array<any>"),og()(),Cl(4453,"td",24)(4454,"em")(4455,"strong"),qx(4456,"(opcional)"),og()(),Cl(4457,"p"),qx(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Cl(4459,"p")(4460,"strong"),qx(4461,"Componentes compat\xEDveis:"),og(),Cl(4462,"code"),qx(4463,"po-select"),og(),qx(4464,", "),Cl(4465,"code"),qx(4466,"po-radio-group"),og(),qx(4467,", "),Cl(4468,"code"),qx(4469,"po-checkbox-group"),og(),qx(4470,", "),Cl(4471,"code"),qx(4472,"po-multiselect"),og(),qx(4473,"."),og()()(),Cl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),qx(4478," optionsMulti"),Hl(4479,"br"),og()()(),Cl(4480,"td",21)(4481,"code",29),qx(4482,"boolean"),og()(),Cl(4483,"td",24)(4484,"em")(4485,"strong"),qx(4486,"(opcional)"),og()(),Cl(4487,"p"),qx(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Cl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),qx(4493," optionsService"),Hl(4494,"br"),og()()(),Cl(4495,"td",21)(4496,"code",27),qx(4497,"string "),og(),Cl(4498,"code",75),qx(4499," PoComboFilter "),og(),Cl(4500,"code",76),qx(4501," PoMultiselectFilter"),og()(),Cl(4502,"td",24)(4503,"em")(4504,"strong"),qx(4505,"(opcional)"),og()(),Cl(4506,"p"),qx(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Cl(4508,"strong"),qx(4509,"Importante"),og()(),Cl(4510,"blockquote")(4511,"p"),qx(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Cl(4513,"a",7),qx(4514,"guia de API do PO UI"),og(),qx(4515,"."),og()()()(),Cl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),qx(4520," order"),Hl(4521,"br"),og()()(),Cl(4522,"td",21)(4523,"code",45),qx(4524,"number"),og()(),Cl(4525,"td",24)(4526,"em")(4527,"strong"),qx(4528,"(opcional)"),og()(),Cl(4529,"p"),qx(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Cl(4531,"p"),qx(4532,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(4533,"p")(4534,"code"),qx(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Cl(4536,"p"),qx(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Cl(4538,"code"),qx(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Cl(4540,"p"),qx(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Cl(4542,"p"),qx(4543,"Campos sem "),Cl(4544,"code"),qx(4545,"order"),og(),qx(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Cl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),qx(4551," params"),Hl(4552,"br"),og()()(),Cl(4553,"td",21)(4554,"code",33),qx(4555,"any"),og()(),Cl(4556,"td",24)(4557,"em")(4558,"strong"),qx(4559,"(opcional)"),og()(),Cl(4560,"p"),qx(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Cl(4562,"code"),qx(4563,"po-lookup"),og(),qx(4564,` e
`),Cl(4565,"code"),qx(4566,"po-combo"),og(),qx(4567,"."),og(),Cl(4568,"p"),qx(4569,"Por exemplo, para o par\xE2metro "),Cl(4570,"code"),qx(4571,"{ age: 23 }"),og(),qx(4572," a URL da requisi\xE7\xE3o ficaria:"),og(),Cl(4573,"p")(4574,"code"),qx(4575,"url + ?age=23&filter=Peter"),og()()()(),Cl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),qx(4580," pattern"),Hl(4581,"br"),og()()(),Cl(4582,"td",21)(4583,"code",27),qx(4584,"string"),og()(),Cl(4585,"td",24)(4586,"em")(4587,"strong"),qx(4588,"(opcional)"),og()(),Cl(4589,"p"),qx(4590,"Regex para valida\xE7\xE3o do campo."),og(),Cl(4591,"p")(4592,"strong"),qx(4593,"Componentes compat\xEDveis:"),og(),Cl(4594,"code"),qx(4595,"po-input"),og(),qx(4596,", "),Cl(4597,"code"),qx(4598,"po-password"),og(),qx(4599,"."),og()()(),Cl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),qx(4604," placeholder"),Hl(4605,"br"),og()()(),Cl(4606,"td",21)(4607,"code",27),qx(4608,"string"),og()(),Cl(4609,"td",24)(4610,"em")(4611,"strong"),qx(4612,"(opcional)"),og()(),Cl(4613,"p"),qx(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Cl(4615,"p")(4616,"strong"),qx(4617,"Componentes compat\xEDveis:"),og(),Cl(4618,"code"),qx(4619,"po-datepicker"),og(),qx(4620,", "),Cl(4621,"code"),qx(4622,"po-datepicker-range"),og(),qx(4623,", "),Cl(4624,"code"),qx(4625,"po-timepicker"),og(),qx(4626,", "),Cl(4627,"code"),qx(4628,"po-input"),og(),qx(4629,", "),Cl(4630,"code"),qx(4631,"po-number"),og(),qx(4632,", "),Cl(4633,"code"),qx(4634,"po-decimal"),og(),qx(4635,", "),Cl(4636,"code"),qx(4637,"po-select"),og(),qx(4638,", "),Cl(4639,"code"),qx(4640,"po-combo"),og(),qx(4641,", "),Cl(4642,"code"),qx(4643,"po-lookup"),og(),qx(4644,", "),Cl(4645,"code"),qx(4646,"po-multiselect"),og(),qx(4647,", "),Cl(4648,"code"),qx(4649,"po-textarea"),og(),qx(4650,", "),Cl(4651,"code"),qx(4652,"po-password"),og(),qx(4653,"."),og()()(),Cl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),qx(4658," placeholderSearch"),Hl(4659,"br"),og()()(),Cl(4660,"td",21)(4661,"code",27),qx(4662,"string"),og()(),Cl(4663,"td",24)(4664,"em")(4665,"strong"),qx(4666,"(opcional)"),og()(),Cl(4667,"p"),qx(4668,"Placeholder do campo de pesquisa do "),Cl(4669,"code"),qx(4670,"po-multiselect"),og(),qx(4671,"."),og(),Cl(4672,"blockquote")(4673,"p"),qx(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Cl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),qx(4679," property"),Hl(4680,"br"),og()()(),Cl(4681,"td",21)(4682,"code",27),qx(4683,"string"),og()(),Cl(4684,"td",24)(4685,"p"),qx(4686,"Nome de refer\xEAncia do campo."),og()()(),Cl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),qx(4691," range"),Hl(4692,"br"),og()()(),Cl(4693,"td",21)(4694,"code",29),qx(4695,"boolean"),og()(),Cl(4696,"td",24)(4697,"em")(4698,"strong"),qx(4699,"(opcional)"),og()(),Cl(4700,"p"),qx(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Cl(4702,"blockquote")(4703,"p"),qx(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Cl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),qx(4709," rangePresetOptions"),Hl(4710,"br"),og()()(),Cl(4711,"td",21)(4712,"code",77),qx(4713,"Array<PoCalendarRangePreset>"),og()(),Cl(4714,"td",24)(4715,"em")(4716,"strong"),qx(4717,"(opcional)"),og()(),Cl(4718,"p"),qx(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Cl(4720,"p"),qx(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Cl(4722,"code"),qx(4723,"PoCalendarRangePreset"),og(),qx(4724,"."),og(),Cl(4725,"p")(4726,"strong"),qx(4727,"Componente compat\xEDvel:"),og(),Cl(4728,"code"),qx(4729,"po-datepicker-range"),og()()()(),Cl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),qx(4734," rangePresets"),Hl(4735,"br"),og()()(),Cl(4736,"td",21)(4737,"code",29),qx(4738,"boolean "),og(),Cl(4739,"code",32),qx(4740," Array<string>"),og()(),Cl(4741,"td",24)(4742,"em")(4743,"strong"),qx(4744,"(opcional)"),og()(),Cl(4745,"p"),qx(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Cl(4747,"p"),qx(4748,"Aceita os seguintes valores:"),og(),Cl(4749,"ul")(4750,"li")(4751,"code"),qx(4752,"true"),og(),qx(4753,": exibe todos os presets padr\xE3o."),og(),Cl(4754,"li")(4755,"code"),qx(4756,"false"),og(),qx(4757,": n\xE3o exibe os presets padr\xE3o."),og(),Cl(4758,"li")(4759,"code"),qx(4760,"Array<string>"),og(),qx(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Cl(4762,"p")(4763,"strong"),qx(4764,"Componente compat\xEDvel:"),og(),Cl(4765,"code"),qx(4766,"po-datepicker-range"),og()()()(),Cl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),qx(4771," rangePresetsOrder"),Hl(4772,"br"),og()()(),Cl(4773,"td",21)(4774,"code",78),qx(4775,"'asc' "),og(),Cl(4776,"code",79),qx(4777," 'desc'"),og()(),Cl(4778,"td",24)(4779,"em")(4780,"strong"),qx(4781,"(opcional)"),og()(),Cl(4782,"p"),qx(4783,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Cl(4784,"p"),qx(4785,"Valores aceitos:"),og(),Cl(4786,"ul")(4787,"li")(4788,"code"),qx(4789,"'asc'"),og(),qx(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Cl(4791,"li")(4792,"code"),qx(4793,"'desc'"),og(),qx(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Cl(4795,"p")(4796,"strong"),qx(4797,"Componente compat\xEDvel:"),og(),Cl(4798,"code"),qx(4799,"po-datepicker-range"),og()()()(),Cl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),qx(4804," readonly"),Hl(4805,"br"),og()()(),Cl(4806,"td",21)(4807,"code",29),qx(4808,"boolean"),og()(),Cl(4809,"td",24)(4810,"em")(4811,"strong"),qx(4812,"(opcional)"),og()(),Cl(4813,"p"),qx(4814,"Indica que o campo ser\xE1 somente leitura."),og(),Cl(4815,"p")(4816,"strong"),qx(4817,"Componentes compat\xEDveis:"),og(),Cl(4818,"code"),qx(4819,"po-datepicker"),og(),qx(4820,", "),Cl(4821,"code"),qx(4822,"po-datepicker-range"),og(),qx(4823,", "),Cl(4824,"code"),qx(4825,"po-timepicker"),og(),qx(4826,", "),Cl(4827,"code"),qx(4828,"po-input"),og(),qx(4829,", "),Cl(4830,"code"),qx(4831,"po-number"),og(),qx(4832,`,
`),Cl(4833,"code"),qx(4834,"po-decimal"),og(),qx(4835,", "),Cl(4836,"code"),qx(4837,"po-select"),og(),qx(4838,", "),Cl(4839,"code"),qx(4840,"po-textarea"),og(),qx(4841,", "),Cl(4842,"code"),qx(4843,"po-password"),og(),qx(4844,"."),og()()(),Cl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),qx(4849," removeInitialFilter"),Hl(4850,"br"),og()()(),Cl(4851,"td",21)(4852,"code",29),qx(4853,"boolean"),og()(),Cl(4854,"td",24)(4855,"em")(4856,"strong"),qx(4857,"(opcional)"),og()(),Cl(4858,"p"),qx(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Cl(4860,"blockquote")(4861,"p"),qx(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Cl(4863,"p")(4864,"strong"),qx(4865,"Componente compat\xEDvel"),og(),qx(4866,": "),Cl(4867,"code"),qx(4868,"po-combo"),og()()()(),Cl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),qx(4873," required"),Hl(4874,"br"),og()()(),Cl(4875,"td",21)(4876,"code",29),qx(4877,"boolean"),og()(),Cl(4878,"td",24)(4879,"em")(4880,"strong"),qx(4881,"(opcional)"),og()(),Cl(4882,"p"),qx(4883,"Define a obrigatoriedade do campo."),og(),Cl(4884,"p")(4885,"strong"),qx(4886,"Componentes compat\xEDveis:"),og(),Cl(4887,"code"),qx(4888,"po-datepicker"),og(),qx(4889,", "),Cl(4890,"code"),qx(4891,"po-datepicker-range"),og(),qx(4892,", "),Cl(4893,"code"),qx(4894,"po-timepicker"),og(),qx(4895,", "),Cl(4896,"code"),qx(4897,"po-input"),og(),qx(4898,", "),Cl(4899,"code"),qx(4900,"po-number"),og(),qx(4901,`,
`),Cl(4902,"code"),qx(4903,"po-decimal"),og(),qx(4904,", "),Cl(4905,"code"),qx(4906,"po-select"),og(),qx(4907,", "),Cl(4908,"code"),qx(4909,"po-radio-group"),og(),qx(4910,", "),Cl(4911,"code"),qx(4912,"po-combo"),og(),qx(4913,", "),Cl(4914,"code"),qx(4915,"po-lookup"),og(),qx(4916,", "),Cl(4917,"code"),qx(4918,"po-checkbox-group"),og(),qx(4919,", "),Cl(4920,"code"),qx(4921,"po-multiselect"),og(),qx(4922,`,
`),Cl(4923,"code"),qx(4924,"po-textarea"),og(),qx(4925,", "),Cl(4926,"code"),qx(4927,"po-password``, "),og(),qx(4928,"po-upload`."),og()()(),Cl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),qx(4933," requiredFieldErrorMessage"),Hl(4934,"br"),og()()(),Cl(4935,"td",21)(4936,"code",29),qx(4937,"boolean"),og()(),Cl(4938,"td",24)(4939,"em")(4940,"strong"),qx(4941,"(opcional)"),og()(),Cl(4942,"p"),qx(4943,"Exibe a mensagem setada na propriedade "),Cl(4944,"code"),qx(4945,"errorMessage"),og(),qx(4946," se o campo estiver vazio e for requerido."),og(),Cl(4947,"blockquote")(4948,"p"),qx(4949,"Necess\xE1rio que a propriedade "),Cl(4950,"code"),qx(4951,"required"),og(),qx(4952," esteja habilitada."),og()(),Cl(4953,"p")(4954,"strong"),qx(4955,"Componentes compat\xEDveis:"),og(),Cl(4956,"code"),qx(4957,"po-datepicker"),og(),qx(4958,", "),Cl(4959,"code"),qx(4960,"po-timepicker"),og(),qx(4961,", "),Cl(4962,"code"),qx(4963,"po-input"),og(),qx(4964,", "),Cl(4965,"code"),qx(4966,"po-number"),og(),qx(4967,", "),Cl(4968,"code"),qx(4969,"po-decimal"),og(),qx(4970,", "),Cl(4971,"code"),qx(4972,"po-password"),og(),qx(4973,"."),og()()(),Cl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),qx(4978," restrictions"),Hl(4979,"br"),og()()(),Cl(4980,"td",21)(4981,"code",80),qx(4982,"PoUploadFileRestrictions"),og()(),Cl(4983,"td",24)(4984,"em")(4985,"strong"),qx(4986,"(opcional)"),og()(),Cl(4987,"p"),qx(4988,"Objeto que segue a defini\xE7\xE3o da interface "),Cl(4989,"code"),qx(4990,"PoUploadFileRestrictions"),og(),qx(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Cl(4992,"p")(4993,"strong"),qx(4994,"Componente compat\xEDvel"),og(),qx(4995,": "),Cl(4996,"code"),qx(4997,"po-upload"),og()()()(),Cl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),qx(5002," rows"),Hl(5003,"br"),og()()(),Cl(5004,"td",21)(5005,"code",45),qx(5006,"number"),og()(),Cl(5007,"td",24)(5008,"em")(5009,"strong"),qx(5010,"(opcional)"),og()(),Cl(5011,"p"),qx(5012,"Quantidade de linhas exibidas no "),Cl(5013,"code"),qx(5014,"po-textarea"),og(),qx(5015,"."),og()()(),Cl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),qx(5020," searchService"),Hl(5021,"br"),og()()(),Cl(5022,"td",21)(5023,"code",27),qx(5024,"string "),og(),Cl(5025,"code",34),qx(5026," PoLookupFilter"),og()(),Cl(5027,"td",24)(5028,"em")(5029,"strong"),qx(5030,"(opcional)"),og()(),Cl(5031,"p"),qx(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Cl(5033,"code"),qx(5034,"columns"),og(),qx(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Cl(5036,"strong"),qx(5037,"Importante:"),og()(),Cl(5038,"blockquote")(5039,"p"),qx(5040,"Caso utilizar a propriedade "),Cl(5041,"code"),qx(5042,"optionsService"),og(),qx(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Cl(5044,"a",7),qx(5045,"guia de API do PO UI"),og(),qx(5046,"."),og()()()(),Cl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),qx(5051," secondInterval"),Hl(5052,"br"),og()()(),Cl(5053,"td",21)(5054,"code",45),qx(5055,"number"),og()(),Cl(5056,"td",24)(5057,"em")(5058,"strong"),qx(5059,"(opcional)"),og()(),Cl(5060,"p"),qx(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Cl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),qx(5066," secret"),Hl(5067,"br"),og()()(),Cl(5068,"td",21)(5069,"code",29),qx(5070,"boolean"),og()(),Cl(5071,"td",24)(5072,"em")(5073,"strong"),qx(5074,"(opcional)"),og()(),Cl(5075,"p"),qx(5076,"Esconde a informa\xE7\xE3o estilo "),Cl(5077,"em"),qx(5078,"password"),og(),qx(5079,", pode ser utilizado quando o tipo de dado for "),Cl(5080,"em"),qx(5081,"string"),og(),qx(5082,"."),og()()(),Cl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),qx(5087," showRequired"),Hl(5088,"br"),og()()(),Cl(5089,"td",21)(5090,"code",29),qx(5091,"boolean"),og()(),Cl(5092,"td",24)(5093,"em")(5094,"strong"),qx(5095,"(opcional)"),og()(),Cl(5096,"p"),qx(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(5098,"blockquote")(5099,"p"),qx(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(5101,"ul")(5102,"li"),qx(5103,"N\xE3o possuir "),Cl(5104,"code"),qx(5105,"p-help"),og(),qx(5106," e/ou "),Cl(5107,"code"),qx(5108,"p-label"),og(),qx(5109,"."),og()(),Cl(5110,"p")(5111,"strong"),qx(5112,"Componentes compat\xEDveis:"),og(),Cl(5113,"code"),qx(5114,"po-datepicker"),og(),qx(5115,", "),Cl(5116,"code"),qx(5117,"po-datepicker-range"),og(),qx(5118,", "),Cl(5119,"code"),qx(5120,"po-timepicker"),og(),qx(5121,", "),Cl(5122,"code"),qx(5123,"po-input"),og(),qx(5124,", "),Cl(5125,"code"),qx(5126,"po-number"),og(),qx(5127,`,
`),Cl(5128,"code"),qx(5129,"po-decimal"),og(),qx(5130,", "),Cl(5131,"code"),qx(5132,"po-select"),og(),qx(5133,", "),Cl(5134,"code"),qx(5135,"po-radio-group"),og(),qx(5136,", "),Cl(5137,"code"),qx(5138,"po-combo"),og(),qx(5139,", "),Cl(5140,"code"),qx(5141,"po-lookup"),og(),qx(5142,", "),Cl(5143,"code"),qx(5144,"po-checkbox-group"),og(),qx(5145,", "),Cl(5146,"code"),qx(5147,"po-multiselect"),og(),qx(5148,`,
`),Cl(5149,"code"),qx(5150,"po-textarea"),og(),qx(5151,", "),Cl(5152,"code"),qx(5153,"po-password"),og(),qx(5154,", "),Cl(5155,"code"),qx(5156,"po-upload"),og(),qx(5157,"."),og()()(),Cl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),qx(5162," showSeconds"),Hl(5163,"br"),og()()(),Cl(5164,"td",21)(5165,"code",29),qx(5166,"boolean"),og()(),Cl(5167,"td",24)(5168,"em")(5169,"strong"),qx(5170,"(opcional)"),og()(),Cl(5171,"p"),qx(5172,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Cl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),qx(5177," showThumbnail"),Hl(5178,"br"),og()()(),Cl(5179,"td",21)(5180,"code",29),qx(5181,"boolean"),og()(),Cl(5182,"td",24)(5183,"em")(5184,"strong"),qx(5185,"(opcional)"),og()(),Cl(5186,"p"),qx(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Cl(5188,"blockquote")(5189,"p"),qx(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),Cl(5191,"code"),qx(5192,".png"),og(),qx(5193,", "),Cl(5194,"code"),qx(5195,".jpg"),og(),qx(5196,", "),Cl(5197,"code"),qx(5198,".jpeg"),og(),qx(5199," e "),Cl(5200,"code"),qx(5201,".gif"),og(),qx(5202,")."),og()(),Cl(5203,"p")(5204,"strong"),qx(5205,"Componente compat\xEDvel"),og(),qx(5206,": "),Cl(5207,"code"),qx(5208,"po-upload"),og()()()(),Cl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),qx(5213," size"),Hl(5214,"br"),og()()(),Cl(5215,"td",21)(5216,"code",27),qx(5217,"string"),og()(),Cl(5218,"td",24)(5219,"em")(5220,"strong"),qx(5221,"(opcional)"),og()(),Cl(5222,"p"),qx(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Cl(5224,"ul")(5225,"li")(5226,"code"),qx(5227,"small"),og(),qx(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(5229,"li")(5230,"code"),qx(5231,"medium"),og(),qx(5232,": aplica a medida medium de cada componente."),og(),Cl(5233,"li")(5234,"code"),qx(5235,"large"),og(),qx(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),Cl(5237,"code"),qx(5238,"po-checkbox"),og(),qx(5239," e "),Cl(5240,"code"),qx(5241,"po-radio-group"),og(),qx(5242,")."),Cl(5243,"blockquote")(5244,"p"),qx(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(5246,"code"),qx(5247,"medium"),og(),qx(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(5249,"a",40),qx(5250,"po-theme"),og(),qx(5251,"."),og()()()()()(),Cl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),qx(5256," sort"),Hl(5257,"br"),og()()(),Cl(5258,"td",21)(5259,"code",29),qx(5260,"boolean"),og()(),Cl(5261,"td",24)(5262,"em")(5263,"strong"),qx(5264,"(opcional)"),og()(),Cl(5265,"p"),qx(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Cl(5267,"p")(5268,"strong"),qx(5269,"Componentes compat\xEDveis:"),og(),Cl(5270,"code"),qx(5271,"po-combo"),og(),qx(5272,", po-multiselect"),og()()(),Cl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),qx(5277," step"),Hl(5278,"br"),og()()(),Cl(5279,"td",21)(5280,"code",45),qx(5281,"number"),og()(),Cl(5282,"td",24)(5283,"em")(5284,"strong"),qx(5285,"(opcional)"),og()(),Cl(5286,"p"),qx(5287,"Intervalo utilizado no "),Cl(5288,"code"),qx(5289,"po-number"),og(),qx(5290,"."),og()()(),Cl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),qx(5295," thousandMaxlength"),Hl(5296,"br"),og()()(),Cl(5297,"td",21)(5298,"code",45),qx(5299,"number"),og()(),Cl(5300,"td",24)(5301,"em")(5302,"strong"),qx(5303,"(opcional)"),og()(),Cl(5304,"p"),qx(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Cl(5306,"blockquote")(5307,"p"),qx(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),Cl(5309,"code"),qx(5310,"type"),og(),qx(5311," for "),Cl(5312,"em"),qx(5313,"currency"),og(),qx(5314," ou "),Cl(5315,"em"),qx(5316,"decimal"),og(),qx(5317,"."),og()()()(),Cl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),qx(5322," type"),Hl(5323,"br"),og()()(),Cl(5324,"td",21)(5325,"code",27),qx(5326,"string "),og(),Cl(5327,"code",81),qx(5328," PoDynamicFieldType"),og()(),Cl(5329,"td",24)(5330,"em")(5331,"strong"),qx(5332,"(opcional)"),og()(),Cl(5333,"p"),qx(5334,"Tipo do valor campo."),og(),Cl(5335,"p"),qx(5336,"Valores v\xE1lidos:"),og(),Cl(5337,"ul")(5338,"li")(5339,"code"),qx(5340,"boolean"),og(),qx(5341,": Valores "),Cl(5342,"em"),qx(5343,"booleanos"),og(),qx(5344,"."),og(),Cl(5345,"li")(5346,"code"),qx(5347,"currency"),og(),qx(5348,": Valores monet\xE1rios."),og(),Cl(5349,"li")(5350,"code"),qx(5351,"decimal"),og(),qx(5352,": Valores decimais."),og(),Cl(5353,"li")(5354,"code"),qx(5355,"date"),og(),qx(5356,": Valores de datas."),Cl(5357,"ul")(5358,"li"),qx(5359,"Aceita os tipos "),Cl(5360,"strong"),qx(5361,"string"),og(),qx(5362," e "),Cl(5363,"strong"),qx(5364,"Date"),og(),qx(5365,` padr\xE3o do Javascript,
por exemplo: `),Cl(5366,"code"),qx(5367,"'2017-11-28'"),og(),qx(5368," ou "),Cl(5369,"code"),qx(5370,"new Date(2017, 10, 28)"),og(),qx(5371,"."),og()()(),Cl(5372,"li")(5373,"code"),qx(5374,"dateTime"),og(),qx(5375,": Valor de data com hor\xE1rio."),Cl(5376,"ul")(5377,"li"),qx(5378,"Aceita o tipo "),Cl(5379,"em"),qx(5380,"string"),og(),qx(5381," no formato "),Cl(5382,"strong"),qx(5383,"ISO-8601"),og(),qx(5384," extendido "),Cl(5385,"strong"),qx(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),qx(5387,`
e o tipo `),Cl(5388,"strong"),qx(5389,"Date"),og(),qx(5390," padr\xE3o do Javascript, por exemplo: "),Cl(5391,"code"),qx(5392,"'2017-11-28T00:00:00-02:00'"),og(),qx(5393," ou "),Cl(5394,"code"),qx(5395,"new Date(2017, 10, 28)"),og(),qx(5396,"."),og()()(),Cl(5397,"li")(5398,"code"),qx(5399,"number"),og(),qx(5400,": Valores num\xE9ricos."),og(),Cl(5401,"li")(5402,"code"),qx(5403,"string"),og(),qx(5404,": Textos."),og(),Cl(5405,"li")(5406,"code"),qx(5407,"time"),og(),qx(5408,": Valor do hor\xE1rio."),Cl(5409,"ul")(5410,"li"),qx(5411,"Aceita o tipo "),Cl(5412,"strong"),qx(5413,"string"),og(),qx(5414," nos formatos "),Cl(5415,"strong"),qx(5416,"'HH:mm:ss'"),og(),qx(5417," ou "),Cl(5418,"strong"),qx(5419,"'HH:mm:ss.ffffff'"),og(),qx(5420,", por exemplo: "),Cl(5421,"code"),qx(5422,"'23:12:45'"),og(),qx(5423,"."),og()()()()()(),Cl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),qx(5428," url"),Hl(5429,"br"),og()()(),Cl(5430,"td",21)(5431,"code",27),qx(5432,"string"),og()(),Cl(5433,"td",24)(5434,"em")(5435,"strong"),qx(5436,"(opcional)"),og()(),Cl(5437,"p"),qx(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Cl(5439,"p")(5440,"strong"),qx(5441,"Componente compat\xEDvel"),og(),qx(5442,": "),Cl(5443,"code"),qx(5444,"po-upload"),og()()()(),Cl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),qx(5449," validate"),Hl(5450,"br"),og()()(),Cl(5451,"td",21)(5452,"code",27),qx(5453,"string "),og(),Cl(5454,"code",44),qx(5455," Function"),og()(),Cl(5456,"td",24)(5457,"em")(5458,"strong"),qx(5459,"(opcional)"),og()(),Cl(5460,"p"),qx(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Cl(5462,"strong"),qx(5463,"mudan\xE7as do campo"),og(),qx(5464,"."),og(),Cl(5465,"ul")(5466,"li"),qx(5467,"A propriedade aceita os seguintes tipos:"),og()(),Cl(5468,"ul")(5469,"li")(5470,"strong"),qx(5471,"String"),og(),qx(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Cl(5473,"code"),qx(5474,"POST"),og(),qx(5475,"."),og(),Cl(5476,"li")(5477,"strong"),qx(5478,"Function"),og(),qx(5479,": M\xE9todo que ser\xE1 executado."),og()(),Cl(5480,"p"),qx(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Cl(5482,"code"),qx(5483,"PoDynamicFormFieldChanged"),og(),qx(5484,":"),og(),Cl(5485,"p")(5486,"code"),qx(5487,"{ property: 'property name', value: 'new value' }"),og()(),Cl(5488,"p"),qx(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Cl(5490,"a",82),qx(5491,"PoDynamicFormFieldValidation"),og(),qx(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Cl(5493,"pre")(5494,"code"),qx(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Cl(5496,"p"),qx(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Cl(5498,"code"),qx(5499,"bind"),og(),qx(5500,`, por exemplo:
`),Cl(5501,"code"),qx(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Cl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),qx(5507," visible"),Hl(5508,"br"),og()()(),Cl(5509,"td",21)(5510,"code",29),qx(5511,"boolean"),og()(),Cl(5512,"td",24)(5513,"em")(5514,"strong"),qx(5515,"(opcional)"),og()(),Cl(5516,"p"),qx(5517,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Cl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),qx(5522," yearRangeLimit"),Hl(5523,"br"),og()()(),Cl(5524,"td",21)(5525,"code",45),qx(5526,"number"),og()(),Cl(5527,"td",24)(5528,"em")(5529,"strong"),qx(5530,"(opcional)"),og()(),Cl(5531,"p"),qx(5532,"Define o limite de anos exibidos na lista de anos do "),Cl(5533,"code"),qx(5534,"po-datepicker"),og(),qx(5535," nos modos "),Cl(5536,"code"),qx(5537,"month-year"),og(),qx(5538," e "),Cl(5539,"code"),qx(5540,"year"),og(),qx(5541,"."),og()()()(),Cl(5542,"h4",43)(5543,"code",5),qx(5544,"PoLookupColumn"),og()(),Cl(5545,"div",2)(5546,"p"),qx(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),og()(),Cl(5548,"h4",12),qx(5549,"Propriedades"),og(),Cl(5550,"table",13)(5551,"tr",14)(5552,"th",15),qx(5553,"Nome"),og(),Cl(5554,"th",15),qx(5555,"Tipo"),og(),Cl(5556,"th",15),qx(5557,"Descri\xE7\xE3o"),og()(),Cl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),qx(5562," fieldLabel"),Hl(5563,"br"),og()()(),Cl(5564,"td",21)(5565,"code",29),qx(5566,"boolean"),og()(),Cl(5567,"td",24)(5568,"em")(5569,"strong"),qx(5570,"(opcional)"),og()(),Cl(5571,"p"),qx(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),og(),Cl(5573,"p"),qx(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),og(),Cl(5575,"p"),qx(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),Cl(5577,"code"),qx(5578,"p-field-format"),og(),qx(5579," ou "),Cl(5580,"code"),qx(5581,"p-field-label"),og(),qx(5582," forem configurados no componente."),og()()(),Cl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),qx(5587," format"),Hl(5588,"br"),og()()(),Cl(5589,"td",21)(5590,"code",27),qx(5591,"string"),og()(),Cl(5592,"td",24)(5593,"em")(5594,"strong"),qx(5595,"(opcional)"),og()(),Cl(5596,"p"),qx(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Cl(5598,"ul")(5599,"li"),qx(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og(),Cl(5601,"li"),qx(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()()()(),Cl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),qx(5607," label"),Hl(5608,"br"),og()()(),Cl(5609,"td",21)(5610,"code",27),qx(5611,"string"),og()(),Cl(5612,"td",24)(5613,"em")(5614,"strong"),qx(5615,"(opcional)"),og()(),Cl(5616,"p"),qx(5617,"Texto para t\xEDtulo da coluna."),og(),Cl(5618,"p"),qx(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Cl(5620,"em"),qx(5621,"label"),og(),qx(5622," o valor da propriedade "),Cl(5623,"em"),qx(5624,"property"),og(),qx(5625," com a primeira letra em mai\xFAsculo."),og()()(),Cl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),qx(5630," property"),Hl(5631,"br"),og()()(),Cl(5632,"td",21)(5633,"code",27),qx(5634,"string"),og()(),Cl(5635,"td",24)(5636,"em")(5637,"strong"),qx(5638,"(opcional)"),og()(),Cl(5639,"p"),qx(5640,"Nome identificador da coluna."),og()()(),Cl(5641,"tr",16)(5642,"td",17)(5643,"div",25)(5644,"span",26),qx(5645," type"),Hl(5646,"br"),og()()(),Cl(5647,"td",21)(5648,"code",27),qx(5649,"string"),og()(),Cl(5650,"td",24)(5651,"em")(5652,"strong"),qx(5653,"(opcional)"),og()(),Cl(5654,"p"),qx(5655,"Tipo da coluna:"),og(),Cl(5656,"ul")(5657,"li"),qx(5658,"string (padr\xE3o): textos"),og(),Cl(5659,"li"),qx(5660,"number: valores num\xE9ricos"),og(),Cl(5661,"li"),qx(5662,"date: data"),og(),Cl(5663,"li"),qx(5664,"currency: valores monet\xE1rios"),og(),Cl(5665,"li"),qx(5666,"dateTime: data e hora"),og()()()(),Cl(5667,"tr",16)(5668,"td",17)(5669,"div",25)(5670,"span",26),qx(5671," width"),Hl(5672,"br"),og()()(),Cl(5673,"td",21)(5674,"code",27),qx(5675,"string"),og()(),Cl(5676,"td",24)(5677,"em")(5678,"strong"),qx(5679,"(opcional)"),og()(),Cl(5680,"p"),qx(5681,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),og()()()(),Cl(5682,"h4",43)(5683,"code",5),qx(5684,"PoLookupFilter"),og()(),Cl(5685,"div",2)(5686,"p"),qx(5687,"Define o tipo de busca utilizado no po-lookup."),og()(),Cl(5688,"h4",12),qx(5689,"M\xE9todos"),og(),Cl(5690,"table",41)(5691,"tr",16)(5692,"th",42)(5693,"div",25)(5694,"h4")(5695,"span",26),qx(5696," getFilteredItems "),og()()()()(),Cl(5697,"tr",24)(5698,"td",24)(5699,"p"),qx(5700,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),Cl(5701,"em"),qx(5702,"Observable"),og(),qx(5703," com a resposta da API no formato da interface "),Cl(5704,"code"),qx(5705,"PoLookupResponseApi"),og(),qx(5706,"."),og()()()(),Cl(5707,"h5")(5708,"b"),qx(5709,"Par\xE2metros"),og()(),Cl(5710,"table",13)(5711,"tr",14)(5712,"th",15),qx(5713,"Nome"),og(),Cl(5714,"th",15),qx(5715,"Tipo"),og(),Cl(5716,"th",15),qx(5717,"Descri\xE7\xE3o"),og()(),Cl(5718,"tr",16)(5719,"td",17),qx(5720," params"),og(),Cl(5721,"td",21)(5722,"code",83),qx(5723," PoLookupFilteredItemsParams "),og()(),Cl(5724,"td",24)(5725,"p"),qx(5726,"Objeto enviado por par\xE2metro que implementa a interface "),Cl(5727,"code"),qx(5728,"PoLookupFilteredItemsParams"),og(),qx(5729,"."),og()()()(),Hl(5730,"br"),Cl(5731,"table",41)(5732,"tr",16)(5733,"th",42)(5734,"div",25)(5735,"h4")(5736,"span",26),qx(5737," getObjectByValue "),og()()()()(),Cl(5738,"tr",24)(5739,"td",24)(5740,"p"),qx(5741,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og(),Cl(5742,"p"),qx(5743,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),og()()()(),Cl(5744,"h5")(5745,"b"),qx(5746,"Par\xE2metros"),og()(),Cl(5747,"table",13)(5748,"tr",14)(5749,"th",15),qx(5750,"Nome"),og(),Cl(5751,"th",15),qx(5752,"Tipo"),og(),Cl(5753,"th",15),qx(5754,"Descri\xE7\xE3o"),og()(),Cl(5755,"tr",16)(5756,"td",17),qx(5757," value"),og(),Cl(5758,"td",21)(5759,"code",27),qx(5760," string "),og(),Cl(5761,"code",74),qx(5762," Array<any> "),og()(),Cl(5763,"td",24)(5764,"p"),qx(5765,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Cl(5766,"tr",16)(5767,"td",17),qx(5768," filterParams"),og(),Cl(5769,"td",21)(5770,"code",83),qx(5771," any "),og()(),Cl(5772,"td",24)(5773,"p"),qx(5774,"Valor informado atrav\xE9s da propriedade "),Cl(5775,"code"),qx(5776,"p-filter-params"),og(),qx(5777,"."),og()()()(),Hl(5778,"br"),Cl(5779,"h4",43)(5780,"code",5),qx(5781,"PoLookupFilteredItemsParams"),og()(),Cl(5782,"div",2)(5783,"p"),qx(5784,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),Cl(5785,"code"),qx(5786,"getFilteredItems"),og(),qx(5787,"."),og()(),Cl(5788,"h4",12),qx(5789,"Propriedades"),og(),Cl(5790,"table",13)(5791,"tr",14)(5792,"th",15),qx(5793,"Nome"),og(),Cl(5794,"th",15),qx(5795,"Tipo"),og(),Cl(5796,"th",15),qx(5797,"Descri\xE7\xE3o"),og()(),Cl(5798,"tr",16)(5799,"td",17)(5800,"div",25)(5801,"span",26),qx(5802," advancedFilters"),Hl(5803,"br"),og()()(),Cl(5804,"td",21)(5805,"code",84),qx(5806,`{ [key: string]: any;
}`),og()(),Cl(5807,"td",24)(5808,"em")(5809,"strong"),qx(5810,"(opcional)"),og()(),Cl(5811,"p"),qx(5812,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),og()()(),Cl(5813,"tr",16)(5814,"td",17)(5815,"div",25)(5816,"span",26),qx(5817," filter"),Hl(5818,"br"),og()()(),Cl(5819,"td",21)(5820,"code",27),qx(5821,"string"),og()(),Cl(5822,"td",24)(5823,"em")(5824,"strong"),qx(5825,"(opcional)"),og()(),Cl(5826,"p"),qx(5827,"Conte\xFAdo utilizado para filtrar a lista de itens."),og()()(),Cl(5828,"tr",16)(5829,"td",17)(5830,"div",25)(5831,"span",26),qx(5832," filterParams"),Hl(5833,"br"),og()()(),Cl(5834,"td",21)(5835,"code",33),qx(5836,"any"),og()(),Cl(5837,"td",24)(5838,"em")(5839,"strong"),qx(5840,"(opcional)"),og()(),Cl(5841,"p"),qx(5842,"Valor informado atrav\xE9s da propriedade "),Cl(5843,"code"),qx(5844,"p-filter-params"),og(),qx(5845,"."),og()()(),Cl(5846,"tr",16)(5847,"td",17)(5848,"div",25)(5849,"span",26),qx(5850," order"),Hl(5851,"br"),og()()(),Cl(5852,"td",21)(5853,"code",27),qx(5854,"string"),og()(),Cl(5855,"td",24)(5856,"em")(5857,"strong"),qx(5858,"(opcional)"),og()(),Cl(5859,"p"),qx(5860,"Coluna que est\xE1 sendo ordenada na tabela."),og(),Cl(5861,"ul")(5862,"li"),qx(5863,"Coluna decrescente ser\xE1 informada da seguinte forma: "),Cl(5864,"code"),qx(5865,"-<colunaOrdenada>"),og(),qx(5866,", por exemplo "),Cl(5867,"code"),qx(5868,"-name"),og(),qx(5869,"."),og(),Cl(5870,"li"),qx(5871,"Coluna ascendente ser\xE1 informada da seguinte forma: "),Cl(5872,"code"),qx(5873,"<colunaOrdenada>"),og(),qx(5874,", por exemplo "),Cl(5875,"code"),qx(5876,"name"),og(),qx(5877,"."),og()()()(),Cl(5878,"tr",16)(5879,"td",17)(5880,"div",25)(5881,"span",26),qx(5882," page"),Hl(5883,"br"),og()()(),Cl(5884,"td",21)(5885,"code",45),qx(5886,"number"),og()(),Cl(5887,"td",24)(5888,"em")(5889,"strong"),qx(5890,"(opcional)"),og()(),Cl(5891,"p"),qx(5892,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),og()()(),Cl(5893,"tr",16)(5894,"td",17)(5895,"div",25)(5896,"span",26),qx(5897," pageSize"),Hl(5898,"br"),og()()(),Cl(5899,"td",21)(5900,"code",45),qx(5901,"number"),og()(),Cl(5902,"td",24)(5903,"em")(5904,"strong"),qx(5905,"(opcional)"),og()(),Cl(5906,"p"),qx(5907,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),og()()()(),Cl(5908,"h4",43)(5909,"code",5),qx(5910,"PoLookupLiterals"),og()(),Cl(5911,"div",2)(5912,"p"),qx(5913,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(5914,"code"),qx(5915,"po-lookup"),og(),qx(5916,"."),og()(),Cl(5917,"h4",12),qx(5918,"Propriedades"),og(),Cl(5919,"table",13)(5920,"tr",14)(5921,"th",15),qx(5922,"Nome"),og(),Cl(5923,"th",15),qx(5924,"Tipo"),og(),Cl(5925,"th",15),qx(5926,"Descri\xE7\xE3o"),og()(),Cl(5927,"tr",16)(5928,"td",17)(5929,"div",25)(5930,"span",26),qx(5931," clean"),Hl(5932,"br"),og()()(),Cl(5933,"td",21)(5934,"code",27),qx(5935,"string"),og()(),Cl(5936,"td",24)(5937,"em")(5938,"strong"),qx(5939,"(opcional)"),og()(),Cl(5940,"p"),qx(5941,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),og()()(),Cl(5942,"tr",16)(5943,"td",17)(5944,"div",25)(5945,"span",26),qx(5946," modalAdvancedSearch"),Hl(5947,"br"),og()()(),Cl(5948,"td",21)(5949,"code",27),qx(5950,"string"),og()(),Cl(5951,"td",24)(5952,"em")(5953,"strong"),qx(5954,"(opcional)"),og()(),Cl(5955,"p"),qx(5956,"Texto do link de busca avan\xE7ada."),og(),Cl(5957,"p"),qx(5958,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),og()()(),Cl(5959,"tr",16)(5960,"td",17)(5961,"div",25)(5962,"span",26),qx(5963," modalAdvancedSearchPrimaryActionLabel"),Hl(5964,"br"),og()()(),Cl(5965,"td",21)(5966,"code",27),qx(5967,"string"),og()(),Cl(5968,"td",24)(5969,"em")(5970,"strong"),qx(5971,"(opcional)"),og()(),Cl(5972,"p"),qx(5973,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),og()()(),Cl(5974,"tr",16)(5975,"td",17)(5976,"div",25)(5977,"span",26),qx(5978," modalAdvancedSearchSecondaryActionLabel"),Hl(5979,"br"),og()()(),Cl(5980,"td",21)(5981,"code",27),qx(5982,"string"),og()(),Cl(5983,"td",24)(5984,"em")(5985,"strong"),qx(5986,"(opcional)"),og()(),Cl(5987,"p"),qx(5988,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),og()()(),Cl(5989,"tr",16)(5990,"td",17)(5991,"div",25)(5992,"span",26),qx(5993," modalAdvancedSearchTitle"),Hl(5994,"br"),og()()(),Cl(5995,"td",21)(5996,"code",27),qx(5997,"string"),og()(),Cl(5998,"td",24)(5999,"em")(6e3,"strong"),qx(6001,"(opcional)"),og()(),Cl(6002,"p"),qx(6003,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),og()()(),Cl(6004,"tr",16)(6005,"td",17)(6006,"div",25)(6007,"span",26),qx(6008," modalDisclaimerGroupTitle"),Hl(6009,"br"),og()()(),Cl(6010,"td",21)(6011,"code",27),qx(6012,"string"),og()(),Cl(6013,"td",24)(6014,"em")(6015,"strong"),qx(6016,"(opcional)"),og()(),Cl(6017,"p"),qx(6018,"Texto exibido no t\xEDtulo do disclaimer."),og()()(),Cl(6019,"tr",16)(6020,"td",17)(6021,"div",25)(6022,"span",26),qx(6023," modalPlaceholder"),Hl(6024,"br"),og()()(),Cl(6025,"td",21)(6026,"code",27),qx(6027,"string"),og()(),Cl(6028,"td",24)(6029,"em")(6030,"strong"),qx(6031,"(opcional)"),og()(),Cl(6032,"p"),qx(6033,"Texto exibido no placeholder do input da modal."),og()()(),Cl(6034,"tr",16)(6035,"td",17)(6036,"div",25)(6037,"span",26),qx(6038," modalPrimaryActionLabel"),Hl(6039,"br"),og()()(),Cl(6040,"td",21)(6041,"code",27),qx(6042,"string"),og()(),Cl(6043,"td",24)(6044,"em")(6045,"strong"),qx(6046,"(opcional)"),og()(),Cl(6047,"p"),qx(6048,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),og()()(),Cl(6049,"tr",16)(6050,"td",17)(6051,"div",25)(6052,"span",26),qx(6053," modalSecondaryActionLabel"),Hl(6054,"br"),og()()(),Cl(6055,"td",21)(6056,"code",27),qx(6057,"string"),og()(),Cl(6058,"td",24)(6059,"em")(6060,"strong"),qx(6061,"(opcional)"),og()(),Cl(6062,"p"),qx(6063,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),og()()(),Cl(6064,"tr",16)(6065,"td",17)(6066,"div",25)(6067,"span",26),qx(6068," modalTableLoadMoreData"),Hl(6069,"br"),og()()(),Cl(6070,"td",21)(6071,"code",27),qx(6072,"string"),og()(),Cl(6073,"td",24)(6074,"em")(6075,"strong"),qx(6076,"(opcional)"),og()(),Cl(6077,"p"),qx(6078,"Label do "),Cl(6079,"code"),qx(6080,"button"),og(),qx(6081," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),og()()(),Cl(6082,"tr",16)(6083,"td",17)(6084,"div",25)(6085,"span",26),qx(6086," modalTableLoadingData"),Hl(6087,"br"),og()()(),Cl(6088,"td",21)(6089,"code",27),qx(6090,"string"),og()(),Cl(6091,"td",24)(6092,"em")(6093,"strong"),qx(6094,"(opcional)"),og()(),Cl(6095,"p"),qx(6096,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Cl(6097,"tr",16)(6098,"td",17)(6099,"div",25)(6100,"span",26),qx(6101," modalTableNoColumns"),Hl(6102,"br"),og()()(),Cl(6103,"td",21)(6104,"code",27),qx(6105,"string"),og()(),Cl(6106,"td",24)(6107,"em")(6108,"strong"),qx(6109,"(opcional)"),og()(),Cl(6110,"p"),qx(6111,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Cl(6112,"tr",16)(6113,"td",17)(6114,"div",25)(6115,"span",26),qx(6116," modalTableNoData"),Hl(6117,"br"),og()()(),Cl(6118,"td",21)(6119,"code",27),qx(6120,"string"),og()(),Cl(6121,"td",24)(6122,"em")(6123,"strong"),qx(6124,"(opcional)"),og()(),Cl(6125,"p"),qx(6126,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Cl(6127,"tr",16)(6128,"td",17)(6129,"div",25)(6130,"span",26),qx(6131," modalTitle"),Hl(6132,"br"),og()()(),Cl(6133,"td",21)(6134,"code",27),qx(6135,"string"),og()(),Cl(6136,"td",24)(6137,"em")(6138,"strong"),qx(6139,"(opcional)"),og()(),Cl(6140,"p"),qx(6141,"Texto exibido no t\xEDtulo da modal."),og()()(),Cl(6142,"tr",16)(6143,"td",17)(6144,"div",25)(6145,"span",26),qx(6146," search"),Hl(6147,"br"),og()()(),Cl(6148,"td",21)(6149,"code",27),qx(6150,"string"),og()(),Cl(6151,"td",24)(6152,"em")(6153,"strong"),qx(6154,"(opcional)"),og()(),Cl(6155,"p"),qx(6156,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),og()()()(),Cl(6157,"h4",43)(6158,"code",5),qx(6159,"PoLookupResponseApi"),og()(),Cl(6160,"div",2)(6161,"p"),qx(6162,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),og()(),Cl(6163,"h4",12),qx(6164,"Propriedades"),og(),Cl(6165,"table",13)(6166,"tr",14)(6167,"th",15),qx(6168,"Nome"),og(),Cl(6169,"th",15),qx(6170,"Tipo"),og(),Cl(6171,"th",15),qx(6172,"Descri\xE7\xE3o"),og()(),Cl(6173,"tr",16)(6174,"td",17)(6175,"div",25)(6176,"span",26),qx(6177," hasNext"),Hl(6178,"br"),og()()(),Cl(6179,"td",21)(6180,"code",29),qx(6181,"boolean"),og()(),Cl(6182,"td",24)(6183,"p"),qx(6184,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),og()()(),Cl(6185,"tr",16)(6186,"td",17)(6187,"div",25)(6188,"span",26),qx(6189," items"),Hl(6190,"br"),og()()(),Cl(6191,"td",21)(6192,"code",85),qx(6193,"Array<object>"),og()(),Cl(6194,"td",24)(6195,"p"),qx(6196,"Lista de itens retornados."),og()()()(),Cl(6197,"h3"),qx(6198,"Enums"),og(),Cl(6199,"h4",4)(6200,"code",5),qx(6201,"PoTableColumnSpacing"),og()(),Cl(6202,"div",2)(6203,"p"),qx(6204,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Cl(6205,"strong"),qx(6206,"p-spacing"),og(),qx(6207,") do po-table."),og()(),Cl(6208,"h4",12),qx(6209,"Propriedades"),og(),Cl(6210,"table",13)(6211,"tr",14)(6212,"th",15),qx(6213,"Nome"),og(),Cl(6214,"th",15),qx(6215,"Descri\xE7\xE3o"),og()(),Cl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),qx(6220," ExtraSmall"),Hl(6221,"br"),og()()(),Cl(6222,"td",24)(6223,"p"),qx(6224,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Cl(6225,"tr",16)(6226,"td",17)(6227,"div",25)(6228,"span",26),qx(6229," Small"),Hl(6230,"br"),og()()(),Cl(6231,"td",24)(6232,"p"),qx(6233,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Cl(6234,"tr",16)(6235,"td",17)(6236,"div",25)(6237,"span",26),qx(6238," Medium"),Hl(6239,"br"),og()()(),Cl(6240,"td",24)(6241,"p"),qx(6242,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Cl(6243,"tr",16)(6244,"td",17)(6245,"div",25)(6246,"span",26),qx(6247," Large"),Hl(6248,"br"),og()()(),Cl(6249,"td",24)(6250,"p"),qx(6251,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var We=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt$1("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-lookup-doc"),og(),Cl(4,"po-tab",3),dt$1("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),og()()()),l&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Me,_e,Oe,Ie,ze,Be,Re],encapsulation:2})}return a})();var xt=[{path:"",component:We}],Ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[bL.forChild(xt),bL]})}return a})();var Ii=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[ca,Ue]})}return a})();export{Ii as DocPoLookupModule};