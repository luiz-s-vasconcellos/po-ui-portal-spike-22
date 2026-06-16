import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,K as KC,cu as t,r as r$1,E,cv as ji,aE as Bp,cg as uY,ch as om,W,bp as mT,cw as xi,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut$1,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,ah as uo,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,aP as Da,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,X as we,aX as _x,a7 as Qx,ck as vk,cl as gk,aR as ty,cx as EO,a4 as oN,ao as QA,bq as qx,a5 as aN,ar as JA,a3 as D3,ax as gx,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var _e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic"]],standalone:false,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&Ul(0,"po-lookup",0);},dependencies:[xi],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Lookup Basic"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-lookup-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ze,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return a})();var _=(()=>{class a{httpClient=f(KC);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=t(m,["filterParams","advancedFilters"]),p=r$1(r$1(r$1({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ve=(()=>{class a{sampleFilterService=f(_);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ji.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(r){this.event=r;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(r){this.customLiterals=void 0;}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r);}catch(l){this.fieldFormat=void 0;}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters);}catch(r){this.customAdvancedFilters=void 0;}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium";}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]));}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs"]],standalone:false,features:[we([_])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=lx();wl(0,"po-lookup",1),pw("ngModelChange",function(m){return Qy(c),$x(o.lookup,m)||(o.lookup=m),Jy(m)}),ut$1("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"po-container",2)(3,"div",3),Ul(4,"po-info",4)(5,"po-info",5),ng()(),Ul(6,"po-divider"),wl(7,"form",null,0)(9,"po-input",6),pw("ngModelChange",function(m){return Qy(c),$x(o.label,m)||(o.label=m),Jy(m)}),ng(),$0(),wl(10,"po-checkbox-group",7),pw("ngModelChange",function(m){return Qy(c),$x(o.columnsName,m)||(o.columnsName=m),Jy(m)}),ut$1("p-change",function(){return o.updateColumns()}),ng(),$0(),wl(11,"po-select",8),pw("ngModelChange",function(m){return Qy(c),$x(o.fieldLabel,m)||(o.fieldLabel=m),Jy(m)}),ng(),$0(),wl(12,"po-select",9),pw("ngModelChange",function(m){return Qy(c),$x(o.fieldValue,m)||(o.fieldValue=m),Jy(m)}),ng(),$0(),wl(13,"po-input",10),pw("ngModelChange",function(m){return Qy(c),$x(o.filterService,m)||(o.filterService=m),Jy(m)}),ng(),$0(),wl(14,"po-input",11),pw("ngModelChange",function(m){return Qy(c),$x(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),Jy(m)}),ng(),$0(),wl(15,"po-input",12),pw("ngModelChange",function(m){return Qy(c),$x(o.help,m)||(o.help=m),Jy(m)}),ng(),$0(),wl(16,"po-input",13),pw("ngModelChange",function(m){return Qy(c),$x(o.helperText,m)||(o.helperText=m),Jy(m)}),ng(),$0(),wl(17,"po-input",14),pw("ngModelChange",function(m){return Qy(c),$x(o.placeholder,m)||(o.placeholder=m),Jy(m)}),ng(),$0(),wl(18,"po-input",15),pw("ngModelChange",function(m){return Qy(c),$x(o.literals,m)||(o.literals=m),Jy(m)}),ut$1("p-change",function(){return o.changeLiterals()}),ng(),$0(),wl(19,"po-input",16),pw("ngModelChange",function(m){return Qy(c),$x(o.formatField,m)||(o.formatField=m),Jy(m)}),ut$1("p-change",function(m){return o.onFieldFormatChange(m)}),ng(),$0(),wl(20,"po-checkbox-group",17),pw("ngModelChange",function(m){return Qy(c),$x(o.properties,m)||(o.properties=m),Jy(m)}),ng(),$0(),wl(21,"po-radio-group",18),pw("ngModelChange",function(m){return Qy(c),$x(o.spacing,m)||(o.spacing=m),Jy(m)}),ng(),$0(),wl(22,"po-radio-group",19),pw("ngModelChange",function(m){return Qy(c),$x(o.size,m)||(o.size=m),Jy(m)}),ng(),$0(),wl(23,"po-textarea",20),pw("ngModelChange",function(m){return Qy(c),$x(o.advancedFilters,m)||(o.advancedFilters=m),Jy(m)}),ut$1("p-change",function(){return o.changeAdvancedFilters()}),ng(),$0(),wl(24,"div",3)(25,"po-button",21),ut$1("p-click",function(){return o.restore()}),ng()()();}l&2&&(hw("ngModel",o.lookup),YE("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),G0(),Pp(4),YE("p-value",o.lookup),Pp(),YE("p-value",o.event),Pp(4),hw("ngModel",o.label),G0(),Pp(),hw("ngModel",o.columnsName),YE("p-options",o.columnsOptions),G0(),Pp(),hw("ngModel",o.fieldLabel),YE("p-options",o.fieldLabelOptions),G0(),Pp(),hw("ngModel",o.fieldValue),YE("p-options",o.fieldValueOptions),G0(),Pp(),hw("ngModel",o.filterService),G0(),Pp(),hw("ngModel",o.fieldErrorMessage),G0(),Pp(),hw("ngModel",o.help),G0(),Pp(),hw("ngModel",o.helperText),G0(),Pp(),hw("ngModel",o.placeholder),G0(),Pp(),hw("ngModel",o.literals),G0(),Pp(),hw("ngModel",o.formatField),G0(),Pp(),hw("ngModel",o.properties),YE("p-options",o.propertiesOptions),G0(),Pp(),hw("ngModel",o.spacing),YE("p-options",o.typeSpacing),G0(),Pp(),hw("ngModel",o.size),YE("p-options",o.sizeOptions),G0(),Pp(),hw("ngModel",o.advancedFilters),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,uo,di,ia,Yo,xi,ga,ya,Da,Vp],encapsulation:2,changeDetection:1})}return a})();var ot=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Lookup Labs"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-lookup
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-lookup.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-lookup-labs"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ot,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ve],encapsulation:2})}return a})();var lt=()=>({modalTitle:"Heroes available for mission"}),He=(()=>{class a{service=f(_);notification=f(Bp);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:true,gridColumns:6,label:"Hero"},{property:"name",optional:true,gridColumns:6}];fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero"]],standalone:false,features:[we([_])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=lx();wl(0,"div",1),Ul(1,"po-info",2),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),pw("ngModelChange",function(m){return Qy(c),$x(o.hero,m)||(o.hero=m),Jy(m)}),ng(),$0(),wl(7,"po-select",4),pw("ngModelChange",function(m){return Qy(c),$x(o.vehicle,m)||(o.vehicle=m),Jy(m)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-button",5),ut$1("p-click",function(){return o.startMission()}),ng()()();}if(l&2){let c=_x(4);Pp(6),hw("ngModel",o.hero),YE("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",true)("p-advanced-filters",o.advancedFilters)("p-literals",Qx(10,lt)),G0(),Pp(),hw("ngModel",o.vehicle),YE("p-options",o.vehicles),G0(),Pp(2),YE("p-disabled",c.form.invalid||c.form.pending);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,xi,ya,Vp],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Lookup - Hero"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-lookup.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-lookup-hero"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,mt,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,He],encapsulation:2})}return a})();var pt=()=>["nickname","label"],st=()=>({modalTitle:"Heroes available for mission"}),Be=(()=>{class a{service=f(_);notification=f(Bp);formBuilder=f(uY);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,om.required],vehicle:[null,om.required]});}fieldFormat(r){return `${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset();}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:false,features:[we([_])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(wl(0,"div",0),Ul(1,"po-info",1),ng(),Ul(2,"po-divider"),wl(3,"form",2)(4,"div",0),Ul(5,"po-lookup",3),$0(),Ul(6,"po-select",4),$0(),ng(),wl(7,"div",0)(8,"po-button",5),ut$1("p-click",function(){return o.startMission()}),ng()()()),l&2&&(Pp(3),YE("formGroup",o.formMission),Pp(2),YE("p-columns",o.columns)("p-field-format",Qx(7,pt))("p-filter-service",o.service)("p-literals",Qx(8,st)),G0(),Pp(),YE("p-options",o.vehicles),G0(),Pp(2),YE("p-disabled",o.formMission.invalid||o.formMission.pending));},dependencies:[aY,iY,oY,vk,gk,Pe,di,xi,ya,Vp],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Lookup - Hero Reactive Form"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-lookup.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-lookup-hero-reactive-form"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ut,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Be],encapsulation:2})}return a})();var ce=(()=>{class a{http=f(KC);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(W(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(W(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function St(a,Pt){if(a&1&&(wl(0,"div",0),Ul(1,"po-table",3),ng()),a&2){let r=gx();Pp(),YE("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",true)("p-hide-table-search",false);}}var We=(()=>{class a{filterService=f(ce);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results;});}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url));},l=>console.error(l));}getEntityColumns(r){switch(r){case "people":return this.characterColumns;case "planets":return this.planetsColumns;case "starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case "people":return "character";case "planets":return "planet";case "starships":return "starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:false,features:[we([ce])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(wl(0,"div",0)(1,"po-radio-group",1),pw("ngModelChange",function(p){return $x(o.filterParams,p)||(o.filterParams=p),p}),ng(),$0(),ng(),Ul(2,"po-divider"),wl(3,"div",0)(4,"po-lookup",2),oN(5,"titlecase"),pw("ngModelChange",function(p){return $x(o.entity,p)||(o.entity=p),p}),ut$1("p-selected",function(p){return o.onSelected(p)}),ng(),$0(),ng(),QA(6,St,2,4,"div",0)),l&2&&(Pp(),hw("ngModel",o.filterParams),YE("p-options",o.entities),G0(),Pp(3),YE("p-help",qx("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",qx("",aN(5,12,o.entityLabel)," of Star Wars")),hw("ngModel",o.entity),YE("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",true),G0(),Pp(2),JA(o.filmItemsFiltered&&o.entity?6:-1));},dependencies:[iY,ck,di,xi,ga,ty,EO],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Lookup - Star Wars films"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-lookup-sw-films"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,gt,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,We],encapsulation:2})}return a})();var Ge=(()=>{class a{http=f(KC);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(mT("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=E({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Qe=(()=>{class a{service=f(Ge);loading=false;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=true,this.service.getHeroes(r).subscribe(l=>{this.heroes=l;},l=>console.error(l),()=>this.loading=false);}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank");}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:false,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(wl(0,"div",0)(1,"po-lookup",1),pw("ngModelChange",function(p){return $x(o.multiLookup,p)||(o.multiLookup=p),p}),ut$1("p-change",function(p){return o.changeOptions(p)}),ng(),$0(),wl(2,"po-container",2),Ul(3,"po-table",3),ng()()),l&2&&(Pp(),hw("ngModel",o.multiLookup),YE("p-multiple",true),G0(),Pp(2),YE("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",true)("p-hide-columns-manager",true)("p-loading",o.loading));},dependencies:[iY,ck,uo,xi,ty],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Lookup - Multiple"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-lookup-multiple"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ft,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Qe],encapsulation:2})}return a})();var $e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-lookup-doc"]],standalone:false,decls:6252,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoLookupComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),wl(24,"code"),Ux(25,"po-lookup"),ng(),Ux(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),wl(27,"em"),Ux(28,"TAB"),ng(),Ux(29,` para
buscar um registro.`),ng(),wl(30,"blockquote")(31,"p"),Ux(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),ng()(),wl(33,"blockquote")(34,"p"),Ux(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),wl(36,"a",6),Ux(37,"modelo"),ng(),Ux(38," como "),wl(39,"code"),Ux(40,"pending"),ng(),Ux(41,"."),ng()(),wl(42,"p"),Ux(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),wl(44,"code"),Ux(45,"po-select"),ng(),Ux(46," ou o "),wl(47,"code"),Ux(48,"po-combo"),ng(),Ux(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),wl(50,"a",7),Ux(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),ng(),Ux(52,"."),ng(),wl(53,"p"),Ux(54,"Importante:"),ng(),wl(55,"ul")(56,"li"),Ux(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),wl(58,"pre")(59,"code"),Ux(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),ng()()()(),wl(61,"h4"),Ux(62,"Tokens customiz\xE1veis"),ng(),wl(63,"p"),Ux(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(65,"blockquote")(66,"p"),Ux(67,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(68,"a",8),Ux(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(70,"."),ng()(),wl(71,"table")(72,"thead")(73,"tr")(74,"th"),Ux(75,"Propriedade"),ng(),wl(76,"th"),Ux(77,"Descri\xE7\xE3o"),ng(),wl(78,"th"),Ux(79,"Valor Padr\xE3o"),ng()()(),wl(80,"tbody")(81,"tr")(82,"td")(83,"strong"),Ux(84,"Default Values"),ng()(),Ul(85,"td")(86,"td"),ng(),wl(87,"tr")(88,"td")(89,"code"),Ux(90,"--font-family"),ng()(),wl(91,"td"),Ux(92,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(93,"td")(94,"code"),Ux(95,"var(--font-family-theme)"),ng()()(),wl(96,"tr")(97,"td")(98,"code"),Ux(99,"--font-size"),ng()(),wl(100,"td"),Ux(101,"Tamanho da fonte"),ng(),wl(102,"td")(103,"code"),Ux(104,"var(--font-size-default)"),ng()()(),wl(105,"tr")(106,"td")(107,"code"),Ux(108,"--text-color-placeholder"),ng()(),wl(109,"td"),Ux(110,"Cor do texto no placeholder"),ng(),wl(111,"td")(112,"code"),Ux(113,"var(--color-neutral-light-30)"),ng()()(),wl(114,"tr")(115,"td")(116,"code"),Ux(117,"--color"),ng()(),wl(118,"td"),Ux(119,"Cor principal do lookup"),ng(),wl(120,"td")(121,"code"),Ux(122,"var(--color-neutral-dark-70)"),ng()()(),wl(123,"tr")(124,"td")(125,"code"),Ux(126,"--border-radius"),ng()(),wl(127,"td"),Ux(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(129,"td")(130,"code"),Ux(131,"var(--border-radius-md)"),ng()()(),wl(132,"tr")(133,"td")(134,"code"),Ux(135,"--background"),ng()(),wl(136,"td"),Ux(137,"Cor de background"),ng(),wl(138,"td")(139,"code"),Ux(140,"var(--color-neutral-light-05)"),ng()()(),wl(141,"tr")(142,"td")(143,"code"),Ux(144,"--text-color"),ng()(),wl(145,"td"),Ux(146,"Cor do texto"),ng(),wl(147,"td")(148,"code"),Ux(149,"var(--color-neutral-dark-90)"),ng()()(),wl(150,"tr")(151,"td")(152,"code"),Ux(153,"--color-clear"),ng()(),wl(154,"td"),Ux(155,"Cor principal do icone clear"),ng(),wl(156,"td")(157,"code"),Ux(158,"var(--color-action-default)"),ng()()(),wl(159,"tr")(160,"td")(161,"strong"),Ux(162,"Icon"),ng()(),Ul(163,"td")(164,"td"),ng(),wl(165,"tr")(166,"td")(167,"code"),Ux(168,"--color-icon"),ng()(),wl(169,"td"),Ux(170,"Cor principal do icone pesquisar"),ng(),wl(171,"td")(172,"code"),Ux(173,"var(--color-action-default)"),ng()()(),wl(174,"tr")(175,"td")(176,"strong"),Ux(177,"Hover"),ng()(),Ul(178,"td")(179,"td"),ng(),wl(180,"tr")(181,"td")(182,"code"),Ux(183,"--color-hover"),ng()(),wl(184,"td"),Ux(185,"Cor principal no estado hover"),ng(),wl(186,"td")(187,"code"),Ux(188,"var(--color-brand-01-dark)"),ng()()(),wl(189,"tr")(190,"td")(191,"code"),Ux(192,"--background-hover"),ng()(),wl(193,"td"),Ux(194,"Cor de background no estado hover"),ng(),wl(195,"td")(196,"code"),Ux(197,"var(--color-brand-01-lightest)"),ng()()(),wl(198,"tr")(199,"td")(200,"strong"),Ux(201,"Focused"),ng()(),Ul(202,"td")(203,"td"),ng(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--color-focused"),ng()(),wl(208,"td"),Ux(209,"Cor principal no estado de focus"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-action-default)"),ng()()(),wl(213,"tr")(214,"td")(215,"code"),Ux(216,"--outline-color-focused"),ng()(),wl(217,"td"),Ux(218,"Cor do outline do estado de focus"),ng(),wl(219,"td")(220,"code"),Ux(221,"var(--color-action-focus)"),ng()()(),wl(222,"tr")(223,"td")(224,"strong"),Ux(225,"Disabled"),ng()(),Ul(226,"td")(227,"td"),ng(),wl(228,"tr")(229,"td")(230,"code"),Ux(231,"--color-disabled"),ng()(),wl(232,"td"),Ux(233,"Cor principal no estado disabled"),ng(),wl(234,"td")(235,"code"),Ux(236,"var(--color-action-disabled)"),ng()()(),wl(237,"tr")(238,"td")(239,"code"),Ux(240,"--background-disabled"),ng()(),wl(241,"td"),Ux(242,"Cor de background no estado disabled"),ng(),wl(243,"td")(244,"code"),Ux(245,"var(--color-neutral-light-20)"),ng()()(),wl(246,"tr")(247,"td")(248,"code"),Ux(249,"--text-color-disabled"),ng()(),wl(250,"td"),Ux(251,"Cor do texto quando campo est\xE1 desabilitado"),ng(),wl(252,"td")(253,"code"),Ux(254,"var(--color-action-disabled)"),ng()()(),wl(255,"tr")(256,"td")(257,"strong"),Ux(258,"Error"),ng()(),Ul(259,"td")(260,"td"),ng(),wl(261,"tr")(262,"td")(263,"code"),Ux(264,"--color-error"),ng()(),wl(265,"td"),Ux(266,"Cor de background no estado de requerido"),ng(),wl(267,"td")(268,"code"),Ux(269,"var(--color-feedback-negative-base)"),ng()()()()()(),wl(270,"div",9)(271,"h4",10),Ux(272,"Seletor"),ng(),wl(273,"pre",11),Ux(274,`<po-lookup
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
`),ng()(),wl(275,"h4",12),Ux(276,"Propriedades"),ng(),wl(277,"table",13)(278,"tr",14)(279,"th",15),Ux(280,"Nome"),ng(),wl(281,"th",15),Ux(282,"Tipo"),ng(),wl(283,"th",15),Ux(284,"Padr\xE3o"),ng(),wl(285,"th",15),Ux(286,"Descri\xE7\xE3o"),ng()(),wl(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),Ux(291," (p-additional-help)"),Ul(292,"br"),ng()(),wl(293,"div",20),Ux(294,"Deprecated"),ng()(),wl(295,"td",21)(296,"code",22),Ux(297,"EventEmitter"),ng()(),wl(298,"td",23),Ux(299,"-"),ng(),wl(300,"td",24)(301,"em")(302,"strong"),Ux(303,"(opcional)"),ng()(),wl(304,"p"),Ux(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(306,"blockquote")(307,"p"),Ux(308,"Essa propriedade est\xE1 "),wl(309,"strong"),Ux(310,"depreciada"),ng(),Ux(311," e ser\xE1 removida na vers\xE3o "),wl(312,"code"),Ux(313,"23.x.x"),ng(),Ux(314,". Recomendamos utilizar a propriedade "),wl(315,"code"),Ux(316,"p-helper"),ng(),Ux(317," que oferece mais recursos e flexibilidade."),ng()()()(),wl(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),Ux(322," p-additional-help-tooltip"),Ul(323,"br"),ng()(),wl(324,"div",20),Ux(325,"Deprecated"),ng()(),wl(326,"td",21)(327,"code",27),Ux(328,"string"),ng()(),wl(329,"td",23),Ux(330,"-"),ng(),wl(331,"td",24)(332,"em")(333,"strong"),Ux(334,"(opcional)"),ng()(),wl(335,"p"),Ux(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(337,"code"),Ux(338,"po-helper"),ng(),Ux(339,`.
`),wl(340,"strong"),Ux(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(342,"blockquote")(343,"p"),Ux(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(345,"blockquote")(346,"p"),Ux(347,"Essa propriedade est\xE1 "),wl(348,"strong"),Ux(349,"depreciada"),ng(),Ux(350," e ser\xE1 removida na vers\xE3o "),wl(351,"code"),Ux(352,"23.x.x"),ng(),Ux(353,". Recomendamos utilizar a propriedade "),wl(354,"code"),Ux(355,"p-helper"),ng(),Ux(356," que oferece mais recursos e flexibilidade."),ng()()()(),wl(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),Ux(361," p-advanced-filters"),Ul(362,"br"),ng()()(),wl(363,"td",21)(364,"code",28),Ux(365,"Array<PoLookupAdvancedFilter>"),ng()(),wl(366,"td",23),Ux(367,"-"),ng(),wl(368,"td",24)(369,"em")(370,"strong"),Ux(371,"(opcional)"),ng()(),wl(372,"p"),Ux(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),ng(),wl(374,"blockquote")(375,"p"),Ux(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),ng()(),wl(377,"p"),Ux(378,"Exemplo de URL com busca avan\xE7ada:"),ng(),wl(379,"pre")(380,"code"),Ux(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),ng()(),wl(382,"p"),Ux(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),ng(),wl(384,"pre")(385,"code"),Ux(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),ng()()()(),wl(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),Ux(391," p-append-in-body"),Ul(392,"br"),ng()()(),wl(393,"td",21)(394,"code",29),Ux(395,"boolean"),ng()(),wl(396,"td",23)(397,"p")(398,"code"),Ux(399,"false"),ng()()(),wl(400,"td",24)(401,"em")(402,"strong"),Ux(403,"(opcional)"),ng()(),wl(404,"p"),Ux(405,"Define que o popover ("),wl(406,"code"),Ux(407,"p-helper"),ng(),Ux(408," e/ou "),wl(409,"code"),Ux(410,"p-error-limit"),ng(),Ux(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(412,"blockquote")(413,"p"),Ux(414,"Quando utilizado com "),wl(415,"code"),Ux(416,"p-helper"),ng(),Ux(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),Ux(422," p-auto-focus"),Ul(423,"br"),ng()()(),wl(424,"td",21)(425,"code",29),Ux(426,"boolean"),ng()(),wl(427,"td",23)(428,"p")(429,"code"),Ux(430,"false"),ng()()(),wl(431,"td",24)(432,"em")(433,"strong"),Ux(434,"(opcional)"),ng()(),wl(435,"p"),Ux(436,"Aplica foco no elemento ao ser iniciado."),ng(),wl(437,"blockquote")(438,"p"),Ux(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),Ux(444," p-auto-height"),Ul(445,"br"),ng()()(),wl(446,"td",21)(447,"code",29),Ux(448,"boolean"),ng()(),wl(449,"td",23)(450,"p")(451,"code"),Ux(452,"false"),ng()()(),wl(453,"td",24)(454,"em")(455,"strong"),Ux(456,"(opcional)"),ng()(),wl(457,"p"),Ux(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),ng()()(),wl(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),Ux(463," (p-change)"),Ul(464,"br"),ng()()(),wl(465,"td",21)(466,"code",22),Ux(467,"EventEmitter"),ng()(),wl(468,"td",23),Ux(469,"-"),ng(),wl(470,"td",24)(471,"em")(472,"strong"),Ux(473,"(opcional)"),ng()(),wl(474,"p"),Ux(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),ng()()(),wl(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),Ux(480," (p-change-visible-columns)"),Ul(481,"br"),ng()()(),wl(482,"td",21)(483,"code",22),Ux(484,"EventEmitter"),ng()(),wl(485,"td",23),Ux(486,"-"),ng(),wl(487,"td",24)(488,"em")(489,"strong"),Ux(490,"(opcional)"),ng()(),wl(491,"p"),Ux(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),ng(),wl(493,"p"),Ux(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng()()(),wl(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),Ux(499," p-clean"),Ul(500,"br"),ng()()(),wl(501,"td",21)(502,"code",29),Ux(503,"boolean"),ng()(),wl(504,"td",23),Ux(505,"-"),ng(),wl(506,"td",24)(507,"p"),Ux(508,"Exibe um \xEDcone que permite limpar o campo."),ng()()(),wl(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),Ux(513," (p-restore-column-manager)"),Ul(514,"br"),ng()()(),wl(515,"td",21)(516,"code",22),Ux(517,"EventEmitter"),ng()(),wl(518,"td",23),Ux(519,"-"),ng(),wl(520,"td",24)(521,"em")(522,"strong"),Ux(523,"(opcional)"),ng()(),wl(524,"p"),Ux(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),ng(),wl(526,"p"),Ux(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng()()(),wl(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),Ux(532," p-columns"),Ul(533,"br"),ng()()(),wl(534,"td",21)(535,"code",30),Ux(536,"Array<PoLookupColumn>"),ng()(),wl(537,"td",23),Ux(538,"-"),ng(),wl(539,"td",24)(540,"em")(541,"strong"),Ux(542,"(opcional)"),ng()(),wl(543,"p"),Ux(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),ng()()(),wl(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),Ux(549," p-compact-label"),Ul(550,"br"),ng()()(),wl(551,"td",21)(552,"code",29),Ux(553,"boolean"),ng()(),wl(554,"td",23)(555,"p")(556,"code"),Ux(557,"false"),ng()()(),wl(558,"td",24)(559,"em")(560,"strong"),Ux(561,"(opcional)"),ng()(),wl(562,"p"),Ux(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(564,"p"),Ux(565,"Quando habilitado ("),wl(566,"code"),Ux(567,"true"),ng(),Ux(568,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(569,"ul")(570,"li")(571,"code"),Ux(572,"po-label"),ng()(),wl(573,"li")(574,"code"),Ux(575,"p-requirement (showRequired)"),ng()(),wl(576,"li")(577,"code"),Ux(578,"po-helper"),ng()()(),wl(579,"p"),Ux(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(581,"p"),Ux(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(583,"ul")(584,"li")(585,"code"),Ux(586,"--field-container-title-justify"),ng()(),wl(587,"li")(588,"code"),Ux(589,"--field-container-title-flex"),ng()()(),wl(590,"p"),Ux(591,"Exemplo:"),ng(),wl(592,"pre")(593,"code"),Ux(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(595,"p"),Ux(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),Ux(601," p-disabled"),Ul(602,"br"),ng()()(),wl(603,"td",21)(604,"code",29),Ux(605,"boolean"),ng()(),wl(606,"td",23)(607,"p"),Ux(608,"false"),ng()(),wl(609,"td",24)(610,"em")(611,"strong"),Ux(612,"(opcional)"),ng()(),wl(613,"p"),Ux(614,"Indica que o campo ser\xE1 desabilitado."),ng()()(),wl(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),Ux(619," p-error-limit"),Ul(620,"br"),ng()()(),wl(621,"td",21)(622,"code",29),Ux(623,"boolean"),ng()(),wl(624,"td",23)(625,"p")(626,"code"),Ux(627,"false"),ng()()(),wl(628,"td",24)(629,"em")(630,"strong"),Ux(631,"(opcional)"),ng()(),wl(632,"p"),Ux(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(634,"blockquote")(635,"p"),Ux(636,"Caso essa propriedade seja definida como "),wl(637,"code"),Ux(638,"true"),ng(),Ux(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),Ux(644," p-field-error-message"),Ul(645,"br"),ng()()(),wl(646,"td",21)(647,"code",27),Ux(648,"string"),ng()(),wl(649,"td",23),Ux(650,"-"),ng(),wl(651,"td",24)(652,"em")(653,"strong"),Ux(654,"(opcional)"),ng()(),wl(655,"p"),Ux(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(657,"blockquote")(658,"p"),Ux(659,"Necess\xE1rio que a propriedade "),wl(660,"code"),Ux(661,"p-required"),ng(),Ux(662," esteja habilitada."),ng()()()(),wl(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),Ux(667," p-field-format"),Ul(668,"br"),ng()()(),wl(669,"td",21)(670,"code",31),Ux(671,"((value) => string) "),ng(),wl(672,"code",32),Ux(673," Array<string>"),ng()(),wl(674,"td",23),Ux(675,"-"),ng(),wl(676,"td",24)(677,"em")(678,"strong"),Ux(679,"(opcional)"),ng()(),wl(680,"p"),Ux(681,"Formato de exibi\xE7\xE3o do campo."),ng(),wl(682,"p"),Ux(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),wl(684,"em"),Ux(685,"string"),ng(),Ux(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),ng(),wl(687,"pre")(688,"code"),Ux(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),ng()(),wl(690,"blockquote")(691,"p"),Ux(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),wl(693,"code"),Ux(694,"p-field-label"),ng(),Ux(695," na descri\xE7\xE3o do campo."),ng()(),wl(696,"p"),Ux(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),ng(),wl(698,"pre")(699,"code"),Ux(700,`<po-lookup
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
`),ng()(),wl(701,"blockquote")(702,"p"),Ux(703,"Ser\xE1 utilizado "),wl(704,"code"),Ux(705,"-"),ng(),Ux(706," como separador."),ng()()()(),wl(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),Ux(711," p-field-label"),Ul(712,"br"),ng()()(),wl(713,"td",21)(714,"code",27),Ux(715,"string"),ng()(),wl(716,"td",23),Ux(717,"-"),ng(),wl(718,"td",24)(719,"p"),Ux(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),ng()()(),wl(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),Ux(725," p-field-value"),Ul(726,"br"),ng()()(),wl(727,"td",21)(728,"code",27),Ux(729,"string"),ng()(),wl(730,"td",23),Ux(731,"-"),ng(),wl(732,"td",24)(733,"p"),Ux(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),ng(),wl(735,"blockquote")(736,"p"),Ux(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),ng()()()(),wl(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),Ux(742," p-filter-params"),Ul(743,"br"),ng()()(),wl(744,"td",21)(745,"code",33),Ux(746,"any"),ng()(),wl(747,"td",23),Ux(748,"-"),ng(),wl(749,"td",24)(750,"em")(751,"strong"),Ux(752,"(opcional)"),ng()(),wl(753,"p"),Ux(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),wl(755,"code"),Ux(756,"PoLookupFilter"),ng(),Ux(757,"."),ng()()(),wl(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),Ux(762," p-filter-service"),Ul(763,"br"),ng()()(),wl(764,"td",21)(765,"code",27),Ux(766,"string "),ng(),wl(767,"code",34),Ux(768," PoLookupFilter"),ng()(),wl(769,"td",23),Ux(770,"-"),ng(),wl(771,"td",24)(772,"p"),Ux(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),wl(774,"code"),Ux(775,"PoLookupFilter"),ng(),Ux(776," ou uma URL."),ng(),wl(777,"p"),Ux(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),ng(),wl(779,"pre")(780,"code"),Ux(781,`url + ?page=1&pageSize=20&filter=Peter
`),ng()(),wl(782,"p"),Ux(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),wl(784,"code"),Ux(785,"order"),ng(),Ux(786,", por exemplo:"),ng(),wl(787,"ul")(788,"li")(789,"p"),Ux(790,"Coluna decrescente:"),ng(),wl(791,"pre")(792,"code"),Ux(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),ng()()(),wl(794,"li")(795,"p"),Ux(796,"Coluna ascendente:"),ng(),wl(797,"pre")(798,"code"),Ux(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),ng()()()(),wl(800,"p"),Ux(801,"Se for definido a propriedade "),wl(802,"code"),Ux(803,"p-filter-params"),ng(),Ux(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),wl(805,"code"),Ux(806,"{ age: 23 }"),ng(),Ux(807," a URL ficaria:"),ng(),wl(808,"pre")(809,"code"),Ux(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ng()(),wl(811,"p"),Ux(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),ng(),wl(813,"pre")(814,"code"),Ux(815,`model = 1234;

GET url/1234
`),ng()(),wl(816,"p"),Ux(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),ng(),wl(818,"pre")(819,"code"),Ux(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),ng()(),wl(821,"blockquote")(822,"p"),Ux(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),wl(824,"a",7),Ux(825,"API do PO UI"),ng(),Ux(826,` e utiliza os valores
definidos nas propriedades `),wl(827,"code"),Ux(828,"p-field-label"),ng(),Ux(829," e "),wl(830,"code"),Ux(831,"p-field-value"),ng(),Ux(832," para a constru\xE7\xE3o do "),wl(833,"code"),Ux(834,"po-lookup"),ng(),Ux(835,"."),ng()(),wl(836,"p"),Ux(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),wl(838,"em"),Ux(839,"TAB"),ng(),Ux(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),wl(841,"a",35),Ux(842,"encodeURIComponent"),ng(),Ux(843,`
e concatenado na URL da seguinte forma:`),ng(),wl(844,"pre")(845,"code"),Ux(846,`url/valor%20que%20se%20deseja%20filtrar
`),ng()(),wl(847,"blockquote")(848,"p"),Ux(849,"Quando informado um servi\xE7o que implemente a interface "),wl(850,"code"),Ux(851,"PoLookupFilter"),ng(),Ux(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),ng()()()(),wl(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),Ux(857," p-help"),Ul(858,"br"),ng()()(),wl(859,"td",21)(860,"code",27),Ux(861,"string"),ng()(),wl(862,"td",23),Ux(863,"-"),ng(),wl(864,"td",24)(865,"em")(866,"strong"),Ux(867,"(opcional)"),ng()(),wl(868,"p"),Ux(869,"Texto de apoio do campo."),ng()()(),wl(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),Ux(874," p-hide-columns-manager"),Ul(875,"br"),ng()()(),wl(876,"td",21)(877,"code",29),Ux(878,"boolean"),ng()(),wl(879,"td",23)(880,"p")(881,"code"),Ux(882,"false"),ng()()(),wl(883,"td",24)(884,"em")(885,"strong"),Ux(886,"(opcional)"),ng()(),wl(887,"p"),Ux(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),ng()()(),wl(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),Ux(893," p-infinite-scroll"),Ul(894,"br"),ng()()(),wl(895,"td",21)(896,"code",29),Ux(897,"boolean"),ng()(),wl(898,"td",23)(899,"p")(900,"code"),Ux(901,"false"),ng()()(),wl(902,"td",24)(903,"em")(904,"strong"),Ux(905,"(opcional)"),ng()(),wl(906,"p"),Ux(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),ng()()(),wl(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),Ux(912," (p-keydown)"),Ul(913,"br"),ng()()(),wl(914,"td",21)(915,"code",22),Ux(916,"EventEmitter"),ng()(),wl(917,"td",23),Ux(918,"-"),ng(),wl(919,"td",24)(920,"em")(921,"strong"),Ux(922,"(opcional)"),ng()(),wl(923,"p"),Ux(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(925,"code"),Ux(926,"KeyboardEvent"),ng(),Ux(927," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),Ux(932," p-label"),Ul(933,"br"),ng()()(),wl(934,"td",21)(935,"code",27),Ux(936,"string"),ng()(),wl(937,"td",23),Ux(938,"-"),ng(),wl(939,"td",24)(940,"em")(941,"strong"),Ux(942,"(opcional)"),ng()(),wl(943,"p"),Ux(944,"Label do campo."),ng(),wl(945,"blockquote")(946,"p"),Ux(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),wl(948,"code"),Ux(949,"modalTitle"),ng(),Ux(950," na propriedade "),wl(951,"code"),Ux(952,"p-literals"),ng(),Ux(953,"."),ng()()()(),wl(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),Ux(958," p-label-text-wrap"),Ul(959,"br"),ng()()(),wl(960,"td",21)(961,"code",29),Ux(962,"boolean"),ng()(),wl(963,"td",23)(964,"p")(965,"code"),Ux(966,"false"),ng()()(),wl(967,"td",24)(968,"em")(969,"strong"),Ux(970,"(opcional)"),ng()(),wl(971,"p"),Ux(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(973,"code"),Ux(974,"p-label"),ng(),Ux(975,". Quando "),wl(976,"code"),Ux(977,"p-label-text-wrap"),ng(),Ux(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),Ux(983," p-literals"),Ul(984,"br"),ng()()(),wl(985,"td",21)(986,"code",36),Ux(987,"PoLookupLiterals"),ng()(),wl(988,"td",23),Ux(989,"-"),ng(),wl(990,"td",24)(991,"p"),Ux(992,"Objeto com as literais usadas no "),wl(993,"code"),Ux(994,"po-lookup"),ng(),Ux(995,"."),ng(),wl(996,"p"),Ux(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(998,"pre")(999,"code"),Ux(1e3,`const customLiterals: PoLookupLiterals = {
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
`),ng()(),wl(1001,"p"),Ux(1002,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(1003,"pre")(1004,"code"),Ux(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),ng()(),wl(1006,"p"),Ux(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(1008,"pre")(1009,"code"),Ux(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),ng()(),wl(1011,"blockquote")(1012,"p"),Ux(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(1014,"a",37)(1015,"code"),Ux(1016,"PoI18nService"),ng()(),Ux(1017," ou do browser."),ng()()()(),wl(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),Ux(1022," p-loading"),Ul(1023,"br"),ng()()(),wl(1024,"td",21)(1025,"code",29),Ux(1026,"boolean"),ng()(),wl(1027,"td",23)(1028,"p")(1029,"code"),Ux(1030,"false"),ng()()(),wl(1031,"td",24)(1032,"em")(1033,"strong"),Ux(1034,"(opcional)"),ng()(),wl(1035,"p"),Ux(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),Ux(1041," p-multiple"),Ul(1042,"br"),ng()()(),wl(1043,"td",21)(1044,"code",29),Ux(1045,"boolean"),ng()(),wl(1046,"td",23)(1047,"p")(1048,"code"),Ux(1049,"false"),ng()()(),wl(1050,"td",24)(1051,"em")(1052,"strong"),Ux(1053,"(opcional)"),ng()(),wl(1054,"p"),Ux(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),ng(),wl(1056,"blockquote")(1057,"p"),Ux(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),wl(1059,"code"),Ux(1060,"[ 12345, 67890 ]"),ng()()()()(),wl(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),Ux(1065," name"),Ul(1066,"br"),ng()()(),wl(1067,"td",21)(1068,"code",27),Ux(1069,"string"),ng()(),wl(1070,"td",23),Ux(1071,"-"),ng(),wl(1072,"td",24)(1073,"p"),Ux(1074,"Nome e Id do componente."),ng()()(),wl(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),Ux(1079," p-no-autocomplete"),Ul(1080,"br"),ng()()(),wl(1081,"td",21)(1082,"code",29),Ux(1083,"boolean"),ng()(),wl(1084,"td",23)(1085,"p")(1086,"code"),Ux(1087,"false"),ng()()(),wl(1088,"td",24)(1089,"em")(1090,"strong"),Ux(1091,"(opcional)"),ng()(),wl(1092,"p"),Ux(1093,"Define a propriedade nativa "),wl(1094,"code"),Ux(1095,"autocomplete"),ng(),Ux(1096," do campo como "),wl(1097,"code"),Ux(1098,"off"),ng(),Ux(1099,"."),ng()()(),wl(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),Ux(1104," (p-error)"),Ul(1105,"br"),ng()()(),wl(1106,"td",21)(1107,"code",22),Ux(1108,"EventEmitter"),ng()(),wl(1109,"td",23),Ux(1110,"-"),ng(),wl(1111,"td",24)(1112,"p"),Ux(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),ng()()(),wl(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),Ux(1118," p-optional"),Ul(1119,"br"),ng()()(),wl(1120,"td",21)(1121,"code",29),Ux(1122,"boolean"),ng()(),wl(1123,"td",23)(1124,"p")(1125,"code"),Ux(1126,"false"),ng()()(),wl(1127,"td",24)(1128,"em")(1129,"strong"),Ux(1130,"(opcional)"),ng()(),wl(1131,"p"),Ux(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(1133,"blockquote")(1134,"p"),Ux(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1136,"ul")(1137,"li"),Ux(1138,"O campo conter "),wl(1139,"code"),Ux(1140,"p-required"),ng(),Ux(1141,";"),ng(),wl(1142,"li"),Ux(1143,"N\xE3o possuir "),wl(1144,"code"),Ux(1145,"p-help"),ng(),Ux(1146," e/ou "),wl(1147,"code"),Ux(1148,"p-label"),ng(),Ux(1149,"."),ng()()()(),wl(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),Ux(1154," p-placeholder"),Ul(1155,"br"),ng()()(),wl(1156,"td",21)(1157,"code",27),Ux(1158,"string"),ng()(),wl(1159,"td",23),Ux(1160,"-"),ng(),wl(1161,"td",24)(1162,"p"),Ux(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),Ux(1168," p-helper"),Ul(1169,"br"),ng()()(),wl(1170,"td",21)(1171,"code",38),Ux(1172,"PoHelperOptions "),ng(),wl(1173,"code",27),Ux(1174," string"),ng()(),wl(1175,"td",23),Ux(1176,"-"),ng(),wl(1177,"td",24)(1178,"em")(1179,"strong"),Ux(1180,"(opcional)"),ng()(),wl(1181,"p"),Ux(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1183,"code"),Ux(1184,"p-label"),ng(),Ux(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1186,"code"),Ux(1187,"p-label"),ng(),Ux(1188,"."),ng(),wl(1189,"blockquote")(1190,"p"),Ux(1191,"Para mais informa\xE7\xF5es acesse: "),wl(1192,"a",39),Ux(1193,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1194,"."),ng()(),wl(1195,"blockquote")(1196,"p"),Ux(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1198,"code"),Ux(1199,"p-additional-help-tooltip"),ng(),Ux(1200," e "),wl(1201,"code"),Ux(1202,"p-additional-help"),ng(),Ux(1203,") ser\xE1 ignorado."),ng()()()(),wl(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),Ux(1208," p-required"),Ul(1209,"br"),ng()()(),wl(1210,"td",21)(1211,"code",29),Ux(1212,"boolean"),ng()(),wl(1213,"td",23)(1214,"p")(1215,"code"),Ux(1216,"false"),ng()()(),wl(1217,"td",24)(1218,"em")(1219,"strong"),Ux(1220,"(opcional)"),ng()(),wl(1221,"p"),Ux(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1223,"blockquote")(1224,"p"),Ux(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1226,"code"),Ux(1227,"(p-disabled)"),ng(),Ux(1228,"."),ng()()()(),wl(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),Ux(1233," (p-selected)"),Ul(1234,"br"),ng()()(),wl(1235,"td",21)(1236,"code",22),Ux(1237,"EventEmitter"),ng()(),wl(1238,"td",23),Ux(1239,"-"),ng(),wl(1240,"td",24)(1241,"em")(1242,"strong"),Ux(1243,"(opcional)"),ng()(),wl(1244,"p"),Ux(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),ng()()(),wl(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),Ux(1250," p-show-required"),Ul(1251,"br"),ng()()(),wl(1252,"td",21)(1253,"code",29),Ux(1254,"boolean"),ng()(),wl(1255,"td",23),Ux(1256,"-"),ng(),wl(1257,"td",24)(1258,"p"),Ux(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),ng(),wl(1260,"blockquote")(1261,"p"),Ux(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1263,"ul")(1264,"li"),Ux(1265,"N\xE3o possuir "),wl(1266,"code"),Ux(1267,"p-help"),ng(),Ux(1268," e/ou "),wl(1269,"code"),Ux(1270,"p-label"),ng(),Ux(1271,"."),ng()()()(),wl(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),Ux(1276," p-size"),Ul(1277,"br"),ng()()(),wl(1278,"td",21)(1279,"code",27),Ux(1280,"string"),ng()(),wl(1281,"td",23)(1282,"p")(1283,"code"),Ux(1284,"medium"),ng()()(),wl(1285,"td",24)(1286,"em")(1287,"strong"),Ux(1288,"(opcional)"),ng()(),wl(1289,"p"),Ux(1290,"Define o tamanho do componente:"),ng(),wl(1291,"ul")(1292,"li")(1293,"code"),Ux(1294,"small"),ng(),Ux(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1296,"li")(1297,"code"),Ux(1298,"medium"),ng(),Ux(1299,": altura do input como 44px."),ng()(),wl(1300,"blockquote")(1301,"p"),Ux(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1303,"code"),Ux(1304,"medium"),ng(),Ux(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1306,"a",40),Ux(1307,"po-theme"),ng(),Ux(1308,"."),ng()()()(),wl(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),Ux(1313," p-spacing"),Ul(1314,"br"),ng()()(),wl(1315,"td",21)(1316,"code",27),Ux(1317,"string"),ng()(),wl(1318,"td",23)(1319,"p")(1320,"code"),Ux(1321,"medium"),ng()()(),wl(1322,"td",24)(1323,"em")(1324,"strong"),Ux(1325,"(opcional)"),ng()(),wl(1326,"p"),Ux(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),wl(1328,"strong"),Ux(1329,"PoTableColumnSpacing"),ng(),Ux(1330,"."),ng(),wl(1331,"blockquote")(1332,"p"),Ux(1333,"Em n\xEDvel de acessibilidade "),wl(1334,"strong"),Ux(1335,"AA"),ng(),Ux(1336,", caso o valor de "),wl(1337,"code"),Ux(1338,"p-spacing"),ng(),Ux(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),wl(1340,"code"),Ux(1341,"extraSmall"),ng(),Ux(1342,`
nos seguintes cen\xE1rios:`),ng(),wl(1343,"ul")(1344,"li"),Ux(1345,"Quando o valor de "),wl(1346,"code"),Ux(1347,"p-size"),ng(),Ux(1348," for "),wl(1349,"code"),Ux(1350,"small"),ng(),Ux(1351,";"),ng(),wl(1352,"li"),Ux(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),wl(1354,"code"),Ux(1355,"small"),ng(),Ux(1356,` no
`),wl(1357,"a",40),Ux(1358,"servi\xE7o de tema"),ng(),Ux(1359,"."),ng()()()()(),wl(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),Ux(1364," p-text-wrap"),Ul(1365,"br"),ng()()(),wl(1366,"td",21)(1367,"code",29),Ux(1368,"boolean"),ng()(),wl(1369,"td",23)(1370,"p")(1371,"code"),Ux(1372,"false"),ng()()(),wl(1373,"td",24)(1374,"em")(1375,"strong"),Ux(1376,"(opcional)"),ng()(),wl(1377,"p"),Ux(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng(),wl(1379,"p"),Ux(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),ng(),wl(1381,"blockquote")(1382,"p"),Ux(1383,"Incompat\xEDvel com "),wl(1384,"code"),Ux(1385,"virtual-scroll"),ng(),Ux(1386,", que requer altura fixa nas linhas."),ng()()()(),wl(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),Ux(1391," p-virtual-scroll"),Ul(1392,"br"),ng()()(),wl(1393,"td",21)(1394,"code",29),Ux(1395,"boolean"),ng()(),wl(1396,"td",23)(1397,"p")(1398,"code"),Ux(1399,"true"),ng()()(),wl(1400,"td",24)(1401,"em")(1402,"strong"),Ux(1403,"(opcional)"),ng()(),wl(1404,"p"),Ux(1405,"Habilita o "),wl(1406,"code"),Ux(1407,"virtual-scroll"),ng(),Ux(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),wl(1409,"code"),Ux(1410,"virtual-scroll"),ng(),Ux(1411," ser\xE1 ativado automaticamente."),ng(),wl(1412,"blockquote")(1413,"p"),Ux(1414,"Incompat\xEDvel com "),wl(1415,"code"),Ux(1416,"p-text-wrap"),ng(),Ux(1417," e "),wl(1418,"code"),Ux(1419,"master-detail"),ng(),Ux(1420,", pois o "),wl(1421,"code"),Ux(1422,"virtual-scroll"),ng(),Ux(1423," exige altura fixa nas linhas."),ng()()()()(),wl(1424,"h3",12),Ux(1425,"M\xE9todos"),ng(),wl(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),Ux(1432," focus "),ng()()()()(),wl(1433,"tr",24)(1434,"td",24)(1435,"p"),Ux(1436,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1437,"p"),Ux(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1439,"pre")(1440,"code"),Ux(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),ng()()()()(),Ul(1442,"br"),wl(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),Ux(1449," showAdditionalHelp "),ng()()()()(),wl(1450,"tr",24)(1451,"td",24)(1452,"p"),Ux(1453,"M\xE9todo que exibe "),wl(1454,"code"),Ux(1455,"p-helper"),ng(),Ux(1456," ou executa a a\xE7\xE3o definida em "),wl(1457,"code"),Ux(1458,"p-helper{eventOnClick}"),ng(),Ux(1459," ou em "),wl(1460,"code"),Ux(1461,"p-additionalHelp"),ng(),Ux(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1463,"code"),Ux(1464,"p-keydown"),ng(),Ux(1465,"."),ng(),wl(1466,"blockquote")(1467,"p"),Ux(1468,"Exibe ou oculta o conte\xFAdo do componente "),wl(1469,"code"),Ux(1470,"po-helper"),ng(),Ux(1471," quando o componente estiver com foco."),ng()(),wl(1472,"pre")(1473,"code"),Ux(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),ng()(),wl(1475,"pre")(1476,"code"),Ux(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1478,"br"),wl(1479,"h3"),Ux(1480,"Interfaces"),ng(),wl(1481,"h4",43)(1482,"code",5),Ux(1483,"PoLookupAdvancedFilter"),ng()(),wl(1484,"div",2)(1485,"p"),Ux(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),ng()(),wl(1487,"h4",12),Ux(1488,"Propriedades"),ng(),wl(1489,"table",13)(1490,"tr",14)(1491,"th",15),Ux(1492,"Nome"),ng(),wl(1493,"th",15),Ux(1494,"Tipo"),ng(),wl(1495,"th",15),Ux(1496,"Descri\xE7\xE3o"),ng()(),wl(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),Ux(1501," additionalHelp"),Ul(1502,"br"),ng()()(),wl(1503,"td",21)(1504,"code",44),Ux(1505,"Function"),ng()(),wl(1506,"td",24)(1507,"em")(1508,"strong"),Ux(1509,"(opcional)"),ng()(),wl(1510,"p"),Ux(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(1512,"blockquote")(1513,"p"),Ux(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),ng()()()(),wl(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),Ux(1519," additionalHelpTooltip"),Ul(1520,"br"),ng()()(),wl(1521,"td",21)(1522,"code",27),Ux(1523,"string"),ng()(),wl(1524,"td",24)(1525,"em")(1526,"strong"),Ux(1527,"(opcional)"),ng()(),wl(1528,"p"),Ux(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(1530,"code"),Ux(1531,"po-helper"),ng(),Ux(1532,`.
`),wl(1533,"strong"),Ux(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(1535,"blockquote")(1536,"p"),Ux(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),ng()()()(),wl(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),Ux(1542," advancedFilters"),Ul(1543,"br"),ng()()(),wl(1544,"td",21)(1545,"code",28),Ux(1546,"Array<PoLookupAdvancedFilter>"),ng()(),wl(1547,"td",24)(1548,"em")(1549,"strong"),Ux(1550,"(opcional)"),ng()(),wl(1551,"p"),Ux(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),ng(),wl(1553,"blockquote")(1554,"p"),Ux(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),ng()(),wl(1556,"p"),Ux(1557,"Exemplo de URL com busca avan\xE7ada:"),ng(),wl(1558,"p")(1559,"code"),Ux(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),ng()(),wl(1561,"p"),Ux(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),ng(),wl(1563,"p")(1564,"code"),Ux(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),ng()()()(),wl(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),Ux(1570," appendBox"),Ul(1571,"br"),ng()()(),wl(1572,"td",21)(1573,"code",29),Ux(1574,"boolean"),ng()(),wl(1575,"td",24)(1576,"em")(1577,"strong"),Ux(1578,"(opcional)"),ng()(),wl(1579,"p"),Ux(1580,"Define que o "),wl(1581,"code"),Ux(1582,"listbox"),ng(),Ux(1583," e/ou popover ("),wl(1584,"code"),Ux(1585,"p-helper"),ng(),Ux(1586," e/ou "),wl(1587,"code"),Ux(1588,"p-error-limit"),ng(),Ux(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ng(),wl(1590,"blockquote")(1591,"p"),Ux(1592,"Quando utilizado com "),wl(1593,"code"),Ux(1594,"p-helper"),ng(),Ux(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),Ux(1600," autoHeight"),Ul(1601,"br"),ng()()(),wl(1602,"td",21)(1603,"code",29),Ux(1604,"boolean"),ng()(),wl(1605,"td",24)(1606,"em")(1607,"strong"),Ux(1608,"(opcional)"),ng()(),wl(1609,"p"),Ux(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),ng(),wl(1611,"p")(1612,"strong"),Ux(1613,"Componentes compat\xEDveis:"),ng(),wl(1614,"code"),Ux(1615,"po-multiselect"),ng(),Ux(1616,", "),wl(1617,"code"),Ux(1618,"po-lookup"),ng(),Ux(1619,"."),ng()()(),wl(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),Ux(1624," autoUpload"),Ul(1625,"br"),ng()()(),wl(1626,"td",21)(1627,"code",29),Ux(1628,"boolean"),ng()(),wl(1629,"td",24)(1630,"em")(1631,"strong"),Ux(1632,"(opcional)"),ng()(),wl(1633,"p"),Ux(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),ng(),wl(1635,"p")(1636,"strong"),Ux(1637,"Componente compat\xEDvel"),ng(),Ux(1638,": "),wl(1639,"code"),Ux(1640,"po-upload"),ng()()()(),wl(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),Ux(1645," booleanFalse"),Ul(1646,"br"),ng()()(),wl(1647,"td",21)(1648,"code",27),Ux(1649,"string"),ng()(),wl(1650,"td",24)(1651,"em")(1652,"strong"),Ux(1653,"(opcional)"),ng()(),wl(1654,"p"),Ux(1655,"Texto exibido quando o valor do componente for "),wl(1656,"em"),Ux(1657,"false"),ng(),Ux(1658,"."),ng()()(),wl(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),Ux(1663," booleanTrue"),Ul(1664,"br"),ng()()(),wl(1665,"td",21)(1666,"code",27),Ux(1667,"string"),ng()(),wl(1668,"td",24)(1669,"em")(1670,"strong"),Ux(1671,"(opcional)"),ng()(),wl(1672,"p"),Ux(1673,"Texto exibido quando o valor do componente for "),wl(1674,"em"),Ux(1675,"true"),ng(),Ux(1676,"."),ng()()(),wl(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),Ux(1681," changeOnEnter"),Ul(1682,"br"),ng()()(),wl(1683,"td",21)(1684,"code",29),Ux(1685,"boolean"),ng()(),wl(1686,"td",24)(1687,"em")(1688,"strong"),Ux(1689,"(opcional)"),ng()(),wl(1690,"p"),Ux(1691,"Indica que o evento "),wl(1692,"code"),Ux(1693,"p-change"),ng(),Ux(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),wl(1695,"code"),Ux(1696,"po-combo"),ng(),Ux(1697,"."),ng()()(),wl(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),Ux(1702," changeVisibleColumns"),Ul(1703,"br"),ng()()(),wl(1704,"td",21)(1705,"code",44),Ux(1706,"Function"),ng()(),wl(1707,"td",24)(1708,"em")(1709,"strong"),Ux(1710,"(opcional)"),ng()(),wl(1711,"p"),Ux(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),ng(),wl(1713,"p"),Ux(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng(),wl(1715,"p")(1716,"strong"),Ux(1717,"Componente compat\xEDvel"),ng(),Ux(1718,": "),wl(1719,"code"),Ux(1720,"po-lookup"),ng()()()(),wl(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),Ux(1725," clean"),Ul(1726,"br"),ng()()(),wl(1727,"td",21)(1728,"code",29),Ux(1729,"boolean"),ng()(),wl(1730,"td",24)(1731,"em")(1732,"strong"),Ux(1733,"(opcional)"),ng()(),wl(1734,"p"),Ux(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng(),wl(1736,"p")(1737,"strong"),Ux(1738,"Componentes compat\xEDveis:"),ng(),wl(1739,"code"),Ux(1740,"po-datepicker"),ng(),Ux(1741,", "),wl(1742,"code"),Ux(1743,"po-datepicker-range"),ng(),Ux(1744,", "),wl(1745,"code"),Ux(1746,"po-input"),ng(),Ux(1747,", "),wl(1748,"code"),Ux(1749,"po-number"),ng(),Ux(1750,", "),wl(1751,"code"),Ux(1752,"po-decimal"),ng(),Ux(1753,`,
`),wl(1754,"code"),Ux(1755,"po-combo"),ng(),Ux(1756,", "),wl(1757,"code"),Ux(1758,"po-lookup"),ng(),Ux(1759,", "),wl(1760,"code"),Ux(1761,"po-password"),ng(),Ux(1762,", "),wl(1763,"code"),Ux(1764,"po-timepicker"),ng(),Ux(1765,"."),ng()()(),wl(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),Ux(1770," columnRestoreManager"),Ul(1771,"br"),ng()()(),wl(1772,"td",21)(1773,"code",44),Ux(1774,"Function"),ng()(),wl(1775,"td",24)(1776,"em")(1777,"strong"),Ux(1778,"(opcional)"),ng()(),wl(1779,"p"),Ux(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),ng(),wl(1781,"p"),Ux(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng(),wl(1783,"p")(1784,"strong"),Ux(1785,"Componente compat\xEDvel"),ng(),Ux(1786,": "),wl(1787,"code"),Ux(1788,"po-lookup"),ng()()()(),wl(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),Ux(1793," columns"),Ul(1794,"br"),ng()()(),wl(1795,"td",21)(1796,"code",30),Ux(1797,"Array<PoLookupColumn> "),ng(),wl(1798,"code",45),Ux(1799," number"),ng()(),wl(1800,"td",24)(1801,"em")(1802,"strong"),Ux(1803,"(opcional)"),ng()(),wl(1804,"p"),Ux(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),wl(1806,"code"),Ux(1807,"searchService"),ng(),Ux(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),wl(1809,"a",46)(1810,"code"),Ux(1811,"PoLookupColumn"),ng()(),Ux(1812,"."),ng(),wl(1813,"blockquote")(1814,"p"),Ux(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),wl(1816,"em"),Ux(1817,"label"),ng(),Ux(1818," e "),wl(1819,"em"),Ux(1820,"value"),ng(),Ux(1821,` para valores
de tela e do model respectivamente.`),ng()(),wl(1822,"p")(1823,"strong"),Ux(1824,"Componentes compat\xEDveis:"),ng(),wl(1825,"code"),Ux(1826,"po-radio-group"),ng(),Ux(1827,", "),wl(1828,"code"),Ux(1829,"po-lookup"),ng(),Ux(1830,", "),wl(1831,"code"),Ux(1832,"po-checkbox-group"),ng(),Ux(1833,"."),ng()()(),wl(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),Ux(1838," compactLabel"),Ul(1839,"br"),ng()()(),wl(1840,"td",21)(1841,"code",29),Ux(1842,"boolean"),ng()(),wl(1843,"td",24)(1844,"em")(1845,"strong"),Ux(1846,"(opcional)"),ng()(),wl(1847,"p"),Ux(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(1849,"p"),Ux(1850,"Quando habilitado ("),wl(1851,"code"),Ux(1852,"true"),ng(),Ux(1853,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(1854,"ul")(1855,"li")(1856,"code"),Ux(1857,"po-label"),ng()(),wl(1858,"li")(1859,"code"),Ux(1860,"p-requirement (showRequired)"),ng()(),wl(1861,"li")(1862,"code"),Ux(1863,"po-helper"),ng()()(),wl(1864,"p"),Ux(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(1866,"p"),Ux(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(1868,"ul")(1869,"li")(1870,"code"),Ux(1871,"--field-container-title-justify"),ng()(),wl(1872,"li")(1873,"code"),Ux(1874,"--field-container-title-flex"),ng()()(),wl(1875,"p"),Ux(1876,"Exemplo:"),ng(),wl(1877,"pre")(1878,"code"),Ux(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(1880,"p"),Ux(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),Ux(1886," container"),Ul(1887,"br"),ng()()(),wl(1888,"td",21)(1889,"code",27),Ux(1890,"string"),ng()(),wl(1891,"td",24)(1892,"em")(1893,"strong"),Ux(1894,"(opcional)"),ng()(),wl(1895,"p"),Ux(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ng(),wl(1897,"p"),Ux(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),ng()()(),wl(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),Ux(1903," customAction"),Ul(1904,"br"),ng()()(),wl(1905,"td",21)(1906,"code",47),Ux(1907,"PoProgressAction"),ng()(),wl(1908,"td",24)(1909,"em")(1910,"strong"),Ux(1911,"(opcional)"),ng()(),wl(1912,"p"),Ux(1913,"Define uma a\xE7\xE3o personalizada no componente "),wl(1914,"code"),Ux(1915,"po-upload"),ng(),Ux(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ng(),wl(1917,"p")(1918,"strong"),Ux(1919,"Componente compat\xEDvel"),ng(),Ux(1920,": "),wl(1921,"code"),Ux(1922,"po-upload"),ng(),Ux(1923,","),ng(),wl(1924,"p")(1925,"strong"),Ux(1926,"Exemplo de configura\xE7\xE3o"),ng(),Ux(1927,":"),ng(),wl(1928,"pre")(1929,"code",48),Ux(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ng()()()(),wl(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),Ux(1935," customActionClick"),Ul(1936,"br"),ng()()(),wl(1937,"td",21)(1938,"code",49),Ux(1939,"(file: PoUploadFile) => void"),ng()(),wl(1940,"td",24)(1941,"em")(1942,"strong"),Ux(1943,"(opcional)"),ng()(),wl(1944,"p"),Ux(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),wl(1946,"code"),Ux(1947,"p-custom-action"),ng(),Ux(1948,"."),ng(),wl(1949,"p")(1950,"strong"),Ux(1951,"Componente compat\xEDvel"),ng(),Ux(1952,": "),wl(1953,"code"),Ux(1954,"po-upload"),ng(),Ux(1955,","),ng(),wl(1956,"p"),Ux(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ng(),wl(1958,"p")(1959,"strong"),Ux(1960,"Par\xE2metro do evento"),ng(),Ux(1961,":"),ng(),wl(1962,"ul")(1963,"li")(1964,"code"),Ux(1965,"file"),ng(),Ux(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),wl(1967,"code"),Ux(1968,"PoUploadFile"),ng(),Ux(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),ng()(),wl(1970,"p")(1971,"strong"),Ux(1972,"Exemplo de uso"),ng(),Ux(1973,":"),ng(),wl(1974,"pre")(1975,"code",48),Ux(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ng()()()(),wl(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),Ux(1981," debounceTime"),Ul(1982,"br"),ng()()(),wl(1983,"td",21)(1984,"code",45),Ux(1985,"number"),ng()(),wl(1986,"td",24)(1987,"em")(1988,"strong"),Ux(1989,"(opcional)"),ng()(),wl(1990,"p"),Ux(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),wl(1992,"code"),Ux(1993,"p-filter-service"),ng(),Ux(1994,")."),ng(),wl(1995,"p")(1996,"strong"),Ux(1997,"Componentes compat\xEDveis:"),ng(),wl(1998,"code"),Ux(1999,"po-combo"),ng(),Ux(2e3,", "),wl(2001,"code"),Ux(2002,"po-multiselect"),ng(),Ux(2003,"."),ng()()(),wl(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),Ux(2008," decimalsLength"),Ul(2009,"br"),ng()()(),wl(2010,"td",21)(2011,"code",45),Ux(2012,"number"),ng()(),wl(2013,"td",24)(2014,"em")(2015,"strong"),Ux(2016,"(opcional)"),ng()(),wl(2017,"p"),Ux(2018,"Quantidade m\xE1xima de casas decimais."),ng(),wl(2019,"blockquote")(2020,"p"),Ux(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),wl(2022,"code"),Ux(2023,"type"),ng(),Ux(2024," for "),wl(2025,"em"),Ux(2026,"currency"),ng(),Ux(2027," ou "),wl(2028,"em"),Ux(2029,"decimal"),ng(),Ux(2030,"."),ng()()()(),wl(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),Ux(2035," directory"),Ul(2036,"br"),ng()()(),wl(2037,"td",21)(2038,"code",29),Ux(2039,"boolean"),ng()(),wl(2040,"td",24)(2041,"em")(2042,"strong"),Ux(2043,"(opcional)"),ng()(),wl(2044,"p"),Ux(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),ng(),wl(2046,"blockquote")(2047,"p"),Ux(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),ng()(),wl(2049,"blockquote")(2050,"p"),Ux(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),wl(2052,"strong"),Ux(2053,"Internet Explorer"),ng(),Ux(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),ng()(),wl(2055,"p")(2056,"strong"),Ux(2057,"Componente compat\xEDvel"),ng(),Ux(2058,": "),wl(2059,"code"),Ux(2060,"po-upload"),ng()()()(),wl(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),Ux(2065," disabled"),Ul(2066,"br"),ng()()(),wl(2067,"td",21)(2068,"code",29),Ux(2069,"boolean"),ng()(),wl(2070,"td",24)(2071,"em")(2072,"strong"),Ux(2073,"(opcional)"),ng()(),wl(2074,"p"),Ux(2075,"Desabilita o campo caso informar o valor "),wl(2076,"em"),Ux(2077,"true"),ng(),Ux(2078,"."),ng()()(),wl(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),Ux(2083," disabledInitFilter"),Ul(2084,"br"),ng()()(),wl(2085,"td",21)(2086,"code",29),Ux(2087,"boolean"),ng()(),wl(2088,"td",24)(2089,"em")(2090,"strong"),Ux(2091,"(opcional)"),ng()(),wl(2092,"p"),Ux(2093,"Desabilita o filtro inicial no servi\xE7o do "),wl(2094,"code"),Ux(2095,"po-combo"),ng(),Ux(2096,", que \xE9 executado no primeiro clique no campo."),ng()()(),wl(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),Ux(2101," disabledTabFilter"),Ul(2102,"br"),ng()()(),wl(2103,"td",21)(2104,"code",29),Ux(2105,"boolean"),ng()(),wl(2106,"td",24)(2107,"em")(2108,"strong"),Ux(2109,"(opcional)"),ng()(),wl(2110,"p"),Ux(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),wl(2112,"code"),Ux(2113,"po-combo"),ng(),Ux(2114,"."),ng()()(),wl(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),Ux(2119," divider"),Ul(2120,"br"),ng()()(),wl(2121,"td",21)(2122,"code",27),Ux(2123,"string"),ng()(),wl(2124,"td",24)(2125,"em")(2126,"strong"),Ux(2127,"(opcional)"),ng()(),wl(2128,"p"),Ux(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),ng()()(),wl(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),Ux(2134," dragDrop"),Ul(2135,"br"),ng()()(),wl(2136,"td",21)(2137,"code",29),Ux(2138,"boolean"),ng()(),wl(2139,"td",24)(2140,"em")(2141,"strong"),Ux(2142,"(opcional)"),ng()(),wl(2143,"p"),Ux(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ng(),wl(2145,"blockquote")(2146,"p"),Ux(2147,"Recomendamos utilizar apenas um "),wl(2148,"code"),Ux(2149,"po-upload"),ng(),Ux(2150," com esta funcionalidade por tela."),ng()(),wl(2151,"p")(2152,"strong"),Ux(2153,"Componente compat\xEDvel"),ng(),Ux(2154,": "),wl(2155,"code"),Ux(2156,"po-upload"),ng()()()(),wl(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),Ux(2161," dragDropHeight"),Ul(2162,"br"),ng()()(),wl(2163,"td",21)(2164,"code",45),Ux(2165,"number"),ng()(),wl(2166,"td",24)(2167,"em")(2168,"strong"),Ux(2169,"(opcional)"),ng()(),wl(2170,"p"),Ux(2171,"Define em "),wl(2172,"em"),Ux(2173,"pixels"),ng(),Ux(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),wl(2175,"code"),Ux(2176,"160px"),ng(),Ux(2177,"."),ng(),wl(2178,"blockquote")(2179,"p"),Ux(2180,"Esta propriedade funciona somente se a propriedade "),wl(2181,"code"),Ux(2182,"p-drag-drop"),ng(),Ux(2183," estiver habilitada."),ng()(),wl(2184,"p")(2185,"strong"),Ux(2186,"Componente compat\xEDvel"),ng(),Ux(2187,": "),wl(2188,"code"),Ux(2189,"po-upload"),ng()()()(),wl(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),Ux(2194," errorAsyncFunction"),Ul(2195,"br"),ng()()(),wl(2196,"td",21)(2197,"code",50),Ux(2198,"(value) => Observable<boolean>"),ng()(),wl(2199,"td",24)(2200,"em")(2201,"strong"),Ux(2202,"(opcional)"),ng()(),wl(2203,"p"),Ux(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(2205,"code"),Ux(2206,"change"),ng(),Ux(2207," ou "),wl(2208,"code"),Ux(2209,"change-model"),ng(),Ux(2210,", dependendo do valor da propriedade "),wl(2211,"code"),Ux(2212,"triggerMode"),ng(),Ux(2213,"."),ng(),wl(2214,"blockquote")(2215,"p"),Ux(2216,"Retorna "),wl(2217,"code"),Ux(2218,"Observable com o valor true"),ng(),Ux(2219," para sinalizar o erro "),wl(2220,"code"),Ux(2221,"false"),ng(),Ux(2222," para indicar que n\xE3o h\xE1 erro."),ng()(),wl(2223,"p")(2224,"strong"),Ux(2225,"Componente compat\xEDvel"),ng(),Ux(2226,": "),wl(2227,"code"),Ux(2228,"po-datepicker"),ng()()()(),wl(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),Ux(2233," errorAsyncProperties"),Ul(2234,"br"),ng()()(),wl(2235,"td",21)(2236,"code",51),Ux(2237,"ErrorAsyncProperties"),ng()(),wl(2238,"td",24)(2239,"em")(2240,"strong"),Ux(2241,"(opcional)"),ng()(),wl(2242,"p"),Ux(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),ng(),wl(2244,"p")(2245,"strong"),Ux(2246,"Componentes compat\xEDveis:"),ng(),wl(2247,"code"),Ux(2248,"po-input"),ng(),Ux(2249,", "),wl(2250,"code"),Ux(2251,"po-number"),ng(),Ux(2252,", "),wl(2253,"code"),Ux(2254,"po-decimal"),ng(),Ux(2255,", "),wl(2256,"code"),Ux(2257,"po-password"),ng(),Ux(2258,"."),ng()()(),wl(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),Ux(2263," errorLimit"),Ul(2264,"br"),ng()()(),wl(2265,"td",21)(2266,"code",29),Ux(2267,"boolean"),ng()(),wl(2268,"td",24)(2269,"em")(2270,"strong"),Ux(2271,"(opcional)"),ng()(),wl(2272,"p"),Ux(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(2274,"blockquote")(2275,"p"),Ux(2276,"Caso essa propriedade seja definida como "),wl(2277,"code"),Ux(2278,"true"),ng(),Ux(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()(),wl(2280,"p")(2281,"strong"),Ux(2282,"Componentes compat\xEDveis:"),ng(),wl(2283,"code"),Ux(2284,"po-checkbox-group"),ng(),Ux(2285,", "),wl(2286,"code"),Ux(2287,"po-combo"),ng(),Ux(2288,", "),wl(2289,"code"),Ux(2290,"po-datepicker"),ng(),Ux(2291,", "),wl(2292,"code"),Ux(2293,"po-datepicker-range"),ng(),Ux(2294,", "),wl(2295,"code"),Ux(2296,"po-decimal"),ng(),Ux(2297,", "),wl(2298,"code"),Ux(2299,"po-input"),ng(),Ux(2300,", "),wl(2301,"code"),Ux(2302,"po-lookup"),ng(),Ux(2303,", "),wl(2304,"code"),Ux(2305,"po-multiselect"),ng(),Ux(2306,", "),wl(2307,"code"),Ux(2308,"po-number"),ng(),Ux(2309,", "),wl(2310,"code"),Ux(2311,"po-password"),ng(),Ux(2312,", "),wl(2313,"code"),Ux(2314,"po-radio-group"),ng(),Ux(2315,", "),wl(2316,"code"),Ux(2317,"po-select"),ng(),Ux(2318,`,
`),wl(2319,"code"),Ux(2320,"po-switch"),ng(),Ux(2321,", "),wl(2322,"code"),Ux(2323,"po-textarea"),ng(),Ux(2324,", "),wl(2325,"code"),Ux(2326,"po-timepicker"),ng(),Ux(2327,"."),ng()()(),wl(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),Ux(2332," errorMessage"),Ul(2333,"br"),ng()()(),wl(2334,"td",21)(2335,"code",27),Ux(2336,"string"),ng()(),wl(2337,"td",24)(2338,"em")(2339,"strong"),Ux(2340,"(opcional)"),ng()(),wl(2341,"p"),Ux(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),ng(),wl(2343,"p"),Ux(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),ng(),wl(2345,"ul")(2346,"li"),Ux(2347,"pattern;"),ng(),wl(2348,"li"),Ux(2349,"minValue;"),ng(),wl(2350,"li"),Ux(2351,"maxValue;"),ng(),wl(2352,"li"),Ux(2353,"required;"),ng()(),wl(2354,"blockquote")(2355,"p"),Ux(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),wl(2357,"code"),Ux(2358,"po-datepicker"),ng(),Ux(2359,", "),wl(2360,"code"),Ux(2361,"po-input"),ng(),Ux(2362,", "),wl(2363,"code"),Ux(2364,"po-number"),ng(),Ux(2365,", "),wl(2366,"code"),Ux(2367,"po-decimal"),ng(),Ux(2368,", "),wl(2369,"code"),Ux(2370,"po-password"),ng(),Ux(2371,", "),wl(2372,"code"),Ux(2373,"po-timepicker"),ng(),Ux(2374,`, \xE9 necess\xE1rio que a propriedade
`),wl(2375,"code"),Ux(2376,"requiredFieldErrorMessage"),ng(),Ux(2377," esteja como "),wl(2378,"code"),Ux(2379,"true"),ng(),Ux(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),wl(2381,"code"),Ux(2382,"po-datepicker-range"),ng(),Ux(2383,", "),wl(2384,"code"),Ux(2385,"po-select"),ng(),Ux(2386,", "),wl(2387,"code"),Ux(2388,"po-checkbox-group"),ng(),Ux(2389,", "),wl(2390,"code"),Ux(2391,"po-radio-group"),ng(),Ux(2392,", "),wl(2393,"code"),Ux(2394,"po-multiselect"),ng(),Ux(2395,", "),wl(2396,"code"),Ux(2397,"po-combo"),ng(),Ux(2398,`,
`),wl(2399,"code"),Ux(2400,"po-lookup"),ng(),Ux(2401," e "),wl(2402,"code"),Ux(2403,"po-textarea"),ng(),Ux(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),wl(2405,"code"),Ux(2406,"requiredFieldErrorMessage"),ng(),Ux(2407,"."),ng()(),wl(2408,"p")(2409,"strong"),Ux(2410,"Componentes compat\xEDveis:"),ng(),wl(2411,"code"),Ux(2412,"po-checkbox-group"),ng(),Ux(2413,", "),wl(2414,"code"),Ux(2415,"po-combo"),ng(),Ux(2416,", "),wl(2417,"code"),Ux(2418,"po-datepicker"),ng(),Ux(2419,", "),wl(2420,"code"),Ux(2421,"po-datepicker-range"),ng(),Ux(2422,", "),wl(2423,"code"),Ux(2424,"po-decimal"),ng(),Ux(2425,", "),wl(2426,"code"),Ux(2427,"po-input"),ng(),Ux(2428,", "),wl(2429,"code"),Ux(2430,"po-lookup"),ng(),Ux(2431,", "),wl(2432,"code"),Ux(2433,"po-multiselect"),ng(),Ux(2434,", "),wl(2435,"code"),Ux(2436,"po-number"),ng(),Ux(2437,", "),wl(2438,"code"),Ux(2439,"po-password"),ng(),Ux(2440,", "),wl(2441,"code"),Ux(2442,"po-radio-group"),ng(),Ux(2443,", "),wl(2444,"code"),Ux(2445,"po-select"),ng(),Ux(2446,`,
`),wl(2447,"code"),Ux(2448,"po-switch"),ng(),Ux(2449,", "),wl(2450,"code"),Ux(2451,"po-textarea"),ng(),Ux(2452,", "),wl(2453,"code"),Ux(2454,"po-timepicker"),ng(),Ux(2455,"."),ng()()(),wl(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),Ux(2460," fieldLabel"),Ul(2461,"br"),ng()()(),wl(2462,"td",21)(2463,"code",27),Ux(2464,"string"),ng()(),wl(2465,"td",24)(2466,"em")(2467,"strong"),Ux(2468,"(opcional)"),ng()(),wl(2469,"p"),Ux(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),ng(),wl(2471,"p"),Ux(2472,"O valor padr\xE3o \xE9: "),wl(2473,"code"),Ux(2474,"label"),ng(),Ux(2475,"."),ng(),wl(2476,"blockquote")(2477,"p"),Ux(2478,"Esta propriedade pode ser utilizada em conjunto com: "),wl(2479,"code"),Ux(2480,"options"),ng(),Ux(2481,", "),wl(2482,"code"),Ux(2483,"optionsService"),ng(),Ux(2484," e "),wl(2485,"code"),Ux(2486,"searchService"),ng(),Ux(2487,"."),ng()()()(),wl(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),Ux(2492," fieldValue"),Ul(2493,"br"),ng()()(),wl(2494,"td",21)(2495,"code",27),Ux(2496,"string"),ng()(),wl(2497,"td",24)(2498,"em")(2499,"strong"),Ux(2500,"(opcional)"),ng()(),wl(2501,"p"),Ux(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),ng(),wl(2503,"p"),Ux(2504,"O valor padr\xE3o \xE9: "),wl(2505,"code"),Ux(2506,"value"),ng(),Ux(2507,"."),ng(),wl(2508,"blockquote")(2509,"p"),Ux(2510,"Esta propriedade pode ser utilizada em conjunto com: "),wl(2511,"code"),Ux(2512,"options"),ng(),Ux(2513,", "),wl(2514,"code"),Ux(2515,"optionsService"),ng(),Ux(2516," e "),wl(2517,"code"),Ux(2518,"searchService"),ng(),Ux(2519,"."),ng()()()(),wl(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),Ux(2524," filterMinlength"),Ul(2525,"br"),ng()()(),wl(2526,"td",21)(2527,"code",45),Ux(2528,"number"),ng()(),wl(2529,"td",24)(2530,"em")(2531,"strong"),Ux(2532,"(opcional)"),ng()(),wl(2533,"p"),Ux(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),wl(2535,"code"),Ux(2536,"po-combo"),ng(),Ux(2537,"."),ng()()(),wl(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),Ux(2542," filterMode"),Ul(2543,"br"),ng()()(),wl(2544,"td",21)(2545,"code",52),Ux(2546,"PoMultiselectFilterMode"),ng()(),wl(2547,"td",24)(2548,"em")(2549,"strong"),Ux(2550,"(opcional)"),ng()(),wl(2551,"p"),Ux(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),wl(2553,"code"),Ux(2554,"startsWith"),ng(),Ux(2555,", "),wl(2556,"code"),Ux(2557,"contains"),ng(),Ux(2558," ou "),wl(2559,"code"),Ux(2560,"endsWith"),ng(),Ux(2561,"."),ng(),wl(2562,"blockquote")(2563,"p"),Ux(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),ng()(),wl(2565,"p")(2566,"strong"),Ux(2567,"Componente compat\xEDvel:"),ng(),wl(2568,"code"),Ux(2569,"po-multiselect"),ng(),Ux(2570,"."),ng()()(),wl(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),Ux(2575," forceBooleanComponentType"),Ul(2576,"br"),ng()()(),wl(2577,"td",21)(2578,"code",53),Ux(2579,"ForceBooleanComponentEnum"),ng()(),wl(2580,"td",24)(2581,"em")(2582,"strong"),Ux(2583,"(opcional)"),ng()(),wl(2584,"p"),Ux(2585,"Valores aceitos:"),ng(),wl(2586,"ul")(2587,"li"),Ux(2588,"ForceBooleanComponentEnum.switch"),ng(),wl(2589,"li"),Ux(2590,"ForceBooleanComponentEnum.checkbox"),ng()()()(),wl(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),Ux(2595," forceOptionsComponentType"),Ul(2596,"br"),ng()()(),wl(2597,"td",21)(2598,"code",54),Ux(2599,"ForceOptionComponentEnum"),ng()(),wl(2600,"td",24)(2601,"em")(2602,"strong"),Ux(2603,"(opcional)"),ng()(),wl(2604,"p"),Ux(2605,"pode ser utilizada em conjunto com a propriedade "),wl(2606,"code"),Ux(2607,"options"),ng(),Ux(2608," for\xE7ando o componente a renderizar um "),wl(2609,"code"),Ux(2610,"po-select"),ng(),Ux(2611," ou "),wl(2612,"code"),Ux(2613,"po-radio-group"),ng(),Ux(2614,"."),ng(),wl(2615,"p"),Ux(2616,"Valores aceitos:"),ng(),wl(2617,"ul")(2618,"li"),Ux(2619,"ForceOptionComponentEnum.radioGroup"),ng(),wl(2620,"li"),Ux(2621,"ForceOptionComponentEnum.select"),ng()(),wl(2622,"blockquote")(2623,"p"),Ux(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),wl(2625,"code"),Ux(2626,"optionsMulti"),ng(),Ux(2627," e "),wl(2628,"code"),Ux(2629,"optionsService"),ng(),Ux(2630,"."),ng()()()(),wl(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),Ux(2635," formField"),Ul(2636,"br"),ng()()(),wl(2637,"td",21)(2638,"code",27),Ux(2639,"string"),ng()(),wl(2640,"td",24)(2641,"em")(2642,"strong"),Ux(2643,"(opcional)"),ng()(),wl(2644,"p"),Ux(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),wl(2646,"code"),Ux(2647,"url"),ng(),Ux(2648,"."),ng(),wl(2649,"blockquote")(2650,"p"),Ux(2651,"O valor default \xE9 "),wl(2652,"code"),Ux(2653,"files"),ng()()(),wl(2654,"p")(2655,"strong"),Ux(2656,"Componente compat\xEDvel"),ng(),Ux(2657,": "),wl(2658,"code"),Ux(2659,"po-upload"),ng()()()(),wl(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),Ux(2664," format"),Ul(2665,"br"),ng()()(),wl(2666,"td",21)(2667,"code",27),Ux(2668,"string "),ng(),wl(2669,"code",32),Ux(2670," Array<string>"),ng()(),wl(2671,"td",24)(2672,"em")(2673,"strong"),Ux(2674,"(opcional)"),ng()(),wl(2675,"p"),Ux(2676,"Formato de exibi\xE7\xE3o no campo."),ng(),wl(2677,"p"),Ux(2678,"Ao utilizar esta propriedade com o "),wl(2679,"code"),Ux(2680,"type"),ng(),wl(2681,"em"),Ux(2682,"PoDynamicFieldType.Date"),ng(),Ux(2683," ou "),wl(2684,"em"),Ux(2685,"PoDynamicFieldType.DateTime"),ng(),Ux(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ng(),wl(2687,"p"),Ux(2688,"Valores v\xE1lidos:"),ng(),wl(2689,"ul")(2690,"li"),Ux(2691,"dd/mm/yyyy"),ng(),wl(2692,"li"),Ux(2693,"mm/dd/yyyy"),ng(),wl(2694,"li"),Ux(2695,"yyyy/mm/dd"),ng()(),wl(2696,"p"),Ux(2697,"Ao utilizar com o "),wl(2698,"code"),Ux(2699,"type"),ng(),wl(2700,"em"),Ux(2701,"PoDynamicFieldType.Time"),ng(),Ux(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),ng(),wl(2703,"p"),Ux(2704,"Valores v\xE1lidos:"),ng(),wl(2705,"ul")(2706,"li")(2707,"code"),Ux(2708,"24"),ng(),Ux(2709,": formato de 24 horas (padr\xE3o)"),ng(),wl(2710,"li")(2711,"code"),Ux(2712,"12"),ng(),Ux(2713,": formato de 12 horas com indicador AM/PM"),ng()(),wl(2714,"p"),Ux(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),wl(2716,"code"),Ux(2717,"searchService"),ng(),Ux(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ng(),wl(2719,"p")(2720,"strong"),Ux(2721,"Componentes compat\xEDveis:"),ng(),wl(2722,"code"),Ux(2723,"po-datepicker"),ng(),Ux(2724,", "),wl(2725,"code"),Ux(2726,"po-timepicker"),ng(),Ux(2727,", "),wl(2728,"code"),Ux(2729,"po-lookup"),ng(),Ux(2730,"."),ng()()(),wl(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),Ux(2735," formatModel"),Ul(2736,"br"),ng()()(),wl(2737,"td",21)(2738,"code",29),Ux(2739,"boolean"),ng()(),wl(2740,"td",24)(2741,"em")(2742,"strong"),Ux(2743,"(opcional)"),ng()(),wl(2744,"p"),Ux(2745,"Indica se o "),wl(2746,"code"),Ux(2747,"model"),ng(),Ux(2748," receber\xE1 o valor formatado pelas propriedades "),wl(2749,"code"),Ux(2750,"p-label-on"),ng(),Ux(2751," e "),wl(2752,"code"),Ux(2753,"p-label-off"),ng(),Ux(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ng(),wl(2755,"p"),Ux(2756,"O valor padr\xE3o \xE9: "),wl(2757,"code"),Ux(2758,"false"),ng(),Ux(2759,"."),ng(),wl(2760,"blockquote")(2761,"p"),Ux(2762,"Esta propriedade est\xE1 disponivel apenas para o "),wl(2763,"code"),Ux(2764,"swicth"),ng(),Ux(2765,"."),ng()()()(),wl(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),Ux(2770," formatTime"),Ul(2771,"br"),ng()()(),wl(2772,"td",21)(2773,"code",27),Ux(2774,"string"),ng()(),wl(2775,"td",24)(2776,"em")(2777,"strong"),Ux(2778,"(opcional)"),ng()(),wl(2779,"p"),Ux(2780,"Define o formato de exibi\xE7\xE3o do timer ("),wl(2781,"code"),Ux(2782,"'12'"),ng(),Ux(2783," ou "),wl(2784,"code"),Ux(2785,"'24'"),ng(),Ux(2786,")."),ng(),wl(2787,"p")(2788,"strong"),Ux(2789,"Componente compat\xEDvel:"),ng(),wl(2790,"code"),Ux(2791,"po-datetimepicker"),ng(),Ux(2792,", "),wl(2793,"code"),Ux(2794,"po-timepicker"),ng()()()(),wl(2795,"tr",16)(2796,"td",17)(2797,"div",25)(2798,"span",26),Ux(2799," gridColumns"),Ul(2800,"br"),ng()()(),wl(2801,"td",21)(2802,"code",45),Ux(2803,"number"),ng()(),wl(2804,"td",24)(2805,"em")(2806,"strong"),Ux(2807,"(opcional)"),ng()(),wl(2808,"p"),Ux(2809,"Tamanho de exibi\xE7\xE3o do campo em telas."),ng(),wl(2810,"p"),Ux(2811,"Deve ser usado o sistema de "),wl(2812,"strong"),Ux(2813,"grid"),ng(),Ux(2814," do PO (1 ... 12 colunas)."),ng(),wl(2815,"blockquote")(2816,"p"),Ux(2817,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),ng()()()(),wl(2818,"tr",16)(2819,"td",17)(2820,"div",25)(2821,"span",26),Ux(2822," gridLgColumns"),Ul(2823,"br"),ng()()(),wl(2824,"td",21)(2825,"code",45),Ux(2826,"number"),ng()(),wl(2827,"td",24)(2828,"em")(2829,"strong"),Ux(2830,"(opcional)"),ng()(),wl(2831,"p"),Ux(2832,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),ng(),wl(2833,"p"),Ux(2834,"Deve ser usado o sistema de "),wl(2835,"strong"),Ux(2836,"grid"),ng(),Ux(2837," do PO (1 ... 12 colunas)."),ng(),wl(2838,"blockquote")(2839,"p"),Ux(2840,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2841,"code"),Ux(2842,"gridColumns"),ng(),Ux(2843,"."),ng()()()(),wl(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),Ux(2848," gridLgPull"),Ul(2849,"br"),ng()()(),wl(2850,"td",21)(2851,"code",45),Ux(2852,"number"),ng()(),wl(2853,"td",24)(2854,"em")(2855,"strong"),Ux(2856,"(opcional)"),ng()(),wl(2857,"p"),Ux(2858,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),ng(),wl(2859,"p"),Ux(2860,"Deve ser usado o sistema de "),wl(2861,"strong"),Ux(2862,"grid"),ng(),Ux(2863," do PO (1 ... 11 colunas)."),ng(),wl(2864,"blockquote")(2865,"p"),Ux(2866,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2867,"code"),Ux(2868,"gridColumns"),ng(),Ux(2869,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2870,"tr",16)(2871,"td",17)(2872,"div",25)(2873,"span",26),Ux(2874," gridMdColumns"),Ul(2875,"br"),ng()()(),wl(2876,"td",21)(2877,"code",45),Ux(2878,"number"),ng()(),wl(2879,"td",24)(2880,"em")(2881,"strong"),Ux(2882,"(opcional)"),ng()(),wl(2883,"p"),Ux(2884,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),ng(),wl(2885,"p"),Ux(2886,"Deve ser usado o sistema de "),wl(2887,"strong"),Ux(2888,"grid"),ng(),Ux(2889," do PO (1 ... 12 colunas)."),ng(),wl(2890,"blockquote")(2891,"p"),Ux(2892,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2893,"code"),Ux(2894,"gridColumns"),ng(),Ux(2895,"."),ng()()()(),wl(2896,"tr",16)(2897,"td",17)(2898,"div",25)(2899,"span",26),Ux(2900," gridMdPull"),Ul(2901,"br"),ng()()(),wl(2902,"td",21)(2903,"code",45),Ux(2904,"number"),ng()(),wl(2905,"td",24)(2906,"em")(2907,"strong"),Ux(2908,"(opcional)"),ng()(),wl(2909,"p"),Ux(2910,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),ng(),wl(2911,"p"),Ux(2912,"Deve ser usado o sistema de "),wl(2913,"strong"),Ux(2914,"grid"),ng(),Ux(2915," do PO (1 ... 11 colunas)."),ng(),wl(2916,"blockquote")(2917,"p"),Ux(2918,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2919,"code"),Ux(2920,"gridColumns"),ng(),Ux(2921,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2922,"tr",16)(2923,"td",17)(2924,"div",25)(2925,"span",26),Ux(2926," gridSmColumns"),Ul(2927,"br"),ng()()(),wl(2928,"td",21)(2929,"code",45),Ux(2930,"number"),ng()(),wl(2931,"td",24)(2932,"em")(2933,"strong"),Ux(2934,"(opcional)"),ng()(),wl(2935,"p"),Ux(2936,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),ng(),wl(2937,"p"),Ux(2938,"Deve ser usado o sistema de "),wl(2939,"strong"),Ux(2940,"grid"),ng(),Ux(2941," do PO (1 ... 12 colunas)."),ng(),wl(2942,"blockquote")(2943,"p"),Ux(2944,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2945,"code"),Ux(2946,"gridColumns"),ng(),Ux(2947,"."),ng()()()(),wl(2948,"tr",16)(2949,"td",17)(2950,"div",25)(2951,"span",26),Ux(2952," gridSmPull"),Ul(2953,"br"),ng()()(),wl(2954,"td",21)(2955,"code",45),Ux(2956,"number"),ng()(),wl(2957,"td",24)(2958,"em")(2959,"strong"),Ux(2960,"(opcional)"),ng()(),wl(2961,"p"),Ux(2962,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),ng(),wl(2963,"p"),Ux(2964,"Deve ser usado o sistema de "),wl(2965,"strong"),Ux(2966,"grid"),ng(),Ux(2967," do PO (1 ... 11 colunas)."),ng(),wl(2968,"blockquote")(2969,"p"),Ux(2970,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2971,"code"),Ux(2972,"gridColumns"),ng(),Ux(2973,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2974,"tr",16)(2975,"td",17)(2976,"div",25)(2977,"span",26),Ux(2978," gridXlColumns"),Ul(2979,"br"),ng()()(),wl(2980,"td",21)(2981,"code",45),Ux(2982,"number"),ng()(),wl(2983,"td",24)(2984,"em")(2985,"strong"),Ux(2986,"(opcional)"),ng()(),wl(2987,"p"),Ux(2988,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),ng(),wl(2989,"p"),Ux(2990,"Deve ser usado o sistema de "),wl(2991,"strong"),Ux(2992,"grid"),ng(),Ux(2993," do PO (1 ... 12 colunas)."),ng(),wl(2994,"blockquote")(2995,"p"),Ux(2996,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2997,"code"),Ux(2998,"gridColumns"),ng(),Ux(2999,"."),ng()()()(),wl(3e3,"tr",16)(3001,"td",17)(3002,"div",25)(3003,"span",26),Ux(3004," gridXlPull"),Ul(3005,"br"),ng()()(),wl(3006,"td",21)(3007,"code",45),Ux(3008,"number"),ng()(),wl(3009,"td",24)(3010,"em")(3011,"strong"),Ux(3012,"(opcional)"),ng()(),wl(3013,"p"),Ux(3014,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),ng(),wl(3015,"p"),Ux(3016,"Deve ser usado o sistema de "),wl(3017,"strong"),Ux(3018,"grid"),ng(),Ux(3019," do PO (1 ... 11 colunas)."),ng(),wl(3020,"blockquote")(3021,"p"),Ux(3022,"Esta propriedade n\xE3o funciona com a propriedade "),wl(3023,"code"),Ux(3024,"gridColumns"),ng(),Ux(3025,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(3026,"tr",16)(3027,"td",17)(3028,"div",25)(3029,"span",26),Ux(3030," headers"),Ul(3031,"br"),ng()()(),wl(3032,"td",21)(3033,"code",55),Ux(3034,"{ [name: string]: string "),ng(),wl(3035,"code",56),Ux(3036,` Array<string>;
}`),ng()(),wl(3037,"td",24)(3038,"em")(3039,"strong"),Ux(3040,"(opcional)"),ng()(),wl(3041,"p"),Ux(3042,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),ng(),wl(3043,"p")(3044,"strong"),Ux(3045,"Componente compat\xEDvel"),ng(),Ux(3046,": "),wl(3047,"code"),Ux(3048,"po-upload"),ng()()()(),wl(3049,"tr",16)(3050,"td",17)(3051,"div",25)(3052,"span",26),Ux(3053," help"),Ul(3054,"br"),ng()()(),wl(3055,"td",21)(3056,"code",27),Ux(3057,"string"),ng()(),wl(3058,"td",24)(3059,"em")(3060,"strong"),Ux(3061,"(opcional)"),ng()(),wl(3062,"p"),Ux(3063,"Texto de ajuda."),ng()()(),wl(3064,"tr",16)(3065,"td",17)(3066,"div",25)(3067,"span",26),Ux(3068," helper"),Ul(3069,"br"),ng()()(),wl(3070,"td",21)(3071,"code",27),Ux(3072,"string "),ng(),wl(3073,"code",38),Ux(3074," PoHelperOptions"),ng()(),wl(3075,"td",24)(3076,"em")(3077,"strong"),Ux(3078,"(opcional)"),ng()(),wl(3079,"p"),Ux(3080,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),ng()()(),wl(3081,"tr",16)(3082,"td",17)(3083,"div",25)(3084,"span",26),Ux(3085," hideLabelStatus"),Ul(3086,"br"),ng()()(),wl(3087,"td",21)(3088,"code",29),Ux(3089,"boolean"),ng()(),wl(3090,"td",24)(3091,"em")(3092,"strong"),Ux(3093,"(opcional)"),ng()(),wl(3094,"p"),Ux(3095,"Indica se o status do "),wl(3096,"code"),Ux(3097,"model"),ng(),Ux(3098," ser\xE1 escondido visualmente ao lado do switch"),ng()()(),wl(3099,"tr",16)(3100,"td",17)(3101,"div",25)(3102,"span",26),Ux(3103," hidePasswordPeek"),Ul(3104,"br"),ng()()(),wl(3105,"td",21)(3106,"code",29),Ux(3107,"boolean"),ng()(),wl(3108,"td",24)(3109,"em")(3110,"strong"),Ux(3111,"(opcional)"),ng()(),wl(3112,"p"),Ux(3113,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),wl(3114,"code"),Ux(3115,"po-password"),ng(),Ux(3116,"."),ng()()(),wl(3117,"tr",16)(3118,"td",17)(3119,"div",25)(3120,"span",26),Ux(3121," hideRestrictionsInfo"),Ul(3122,"br"),ng()()(),wl(3123,"td",21)(3124,"code",29),Ux(3125,"boolean"),ng()(),wl(3126,"td",24)(3127,"em")(3128,"strong"),Ux(3129,"(opcional)"),ng()(),wl(3130,"p"),Ux(3131,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),ng(),wl(3132,"p")(3133,"strong"),Ux(3134,"Componente compat\xEDvel"),ng(),Ux(3135,": "),wl(3136,"code"),Ux(3137,"po-upload"),ng()()()(),wl(3138,"tr",16)(3139,"td",17)(3140,"div",25)(3141,"span",26),Ux(3142," hideSearch"),Ul(3143,"br"),ng()()(),wl(3144,"td",21)(3145,"code",29),Ux(3146,"boolean"),ng()(),wl(3147,"td",24)(3148,"em")(3149,"strong"),Ux(3150,"(opcional)"),ng()(),wl(3151,"p"),Ux(3152,"Esconde o campo de pesquisa existente dentro do dropdown do "),wl(3153,"code"),Ux(3154,"po-multiselect"),ng(),Ux(3155,"."),ng()()(),wl(3156,"tr",16)(3157,"td",17)(3158,"div",25)(3159,"span",26),Ux(3160," hideSelectAll"),Ul(3161,"br"),ng()()(),wl(3162,"td",21)(3163,"code",29),Ux(3164,"boolean"),ng()(),wl(3165,"td",24)(3166,"em")(3167,"strong"),Ux(3168,"(opcional)"),ng()(),wl(3169,"p"),Ux(3170,'Indica se o campo "Selecionar todos" do '),wl(3171,"code"),Ux(3172,"po-multiselect"),ng(),Ux(3173," ser\xE1 escondido."),ng()()(),wl(3174,"tr",16)(3175,"td",17)(3176,"div",25)(3177,"span",26),Ux(3178," hideSelectButton"),Ul(3179,"br"),ng()()(),wl(3180,"td",21)(3181,"code",29),Ux(3182,"boolean"),ng()(),wl(3183,"td",24)(3184,"em")(3185,"strong"),Ux(3186,"(opcional)"),ng()(),wl(3187,"p"),Ux(3188,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),ng(),wl(3189,"blockquote")(3190,"p"),Ux(3191,"Caso o valor definido seja "),wl(3192,"code"),Ux(3193,"true"),ng(),Ux(3194,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),wl(3195,"code"),Ux(3196,"selectFiles()"),ng(),Ux(3197," para sele\xE7\xE3o de arquivos."),ng()(),wl(3198,"p")(3199,"strong"),Ux(3200,"Componente compat\xEDvel"),ng(),Ux(3201,": "),wl(3202,"code"),Ux(3203,"po-upload"),ng()()()(),wl(3204,"tr",16)(3205,"td",17)(3206,"div",25)(3207,"span",26),Ux(3208," hideSendButton"),Ul(3209,"br"),ng()()(),wl(3210,"td",21)(3211,"code",29),Ux(3212,"boolean"),ng()(),wl(3213,"td",24)(3214,"em")(3215,"strong"),Ux(3216,"(opcional)"),ng()(),wl(3217,"p"),Ux(3218,"Omite o bot\xE3o de envio de arquivos."),ng(),wl(3219,"blockquote")(3220,"p"),Ux(3221,"Caso o valor definido seja "),wl(3222,"code"),Ux(3223,"true"),ng(),Ux(3224,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),wl(3225,"code"),Ux(3226,"sendFiles()"),ng(),Ux(3227," para envio do(s) arquivo(s) selecionado(s)."),ng()(),wl(3228,"p")(3229,"strong"),Ux(3230,"Componente compat\xEDvel"),ng(),Ux(3231,": "),wl(3232,"code"),Ux(3233,"po-upload"),ng()()()(),wl(3234,"tr",16)(3235,"td",17)(3236,"div",25)(3237,"span",26),Ux(3238," icon"),Ul(3239,"br"),ng()()(),wl(3240,"td",21)(3241,"code",27),Ux(3242,"string "),ng(),wl(3243,"code",57),Ux(3244," TemplateRef<void>"),ng()(),wl(3245,"td",24)(3246,"em")(3247,"strong"),Ux(3248,"(opcional)"),ng()(),wl(3249,"p"),Ux(3250,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(3251,"blockquote")(3252,"p"),Ux(3253,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),ng()(),wl(3254,"ul")(3255,"li"),Ux(3256,"Input;"),ng(),wl(3257,"li"),Ux(3258,"Number;"),ng(),wl(3259,"li"),Ux(3260,"Decimal;"),ng(),wl(3261,"li"),Ux(3262,"Combo;"),ng(),wl(3263,"li"),Ux(3264,"Password;"),ng()(),wl(3265,"blockquote")(3266,"p"),Ux(3267,"Veja a disponibilidade de \xEDcones em "),wl(3268,"a",58),Ux(3269,"biblioteca de \xEDcones"),ng(),Ux(3270,"."),ng()()()(),wl(3271,"tr",16)(3272,"td",17)(3273,"div",25)(3274,"span",26),Ux(3275," infiniteScroll"),Ul(3276,"br"),ng()()(),wl(3277,"td",21)(3278,"code",29),Ux(3279,"boolean"),ng()(),wl(3280,"td",24)(3281,"em")(3282,"strong"),Ux(3283,"(opcional)"),ng()(),wl(3284,"p"),Ux(3285,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),ng(),wl(3286,"p")(3287,"strong"),Ux(3288,"Componentes compat\xEDveis:"),ng(),wl(3289,"code"),Ux(3290,"po-combo"),ng(),Ux(3291,", "),wl(3292,"code"),Ux(3293,"po-lookup"),ng(),Ux(3294,"."),ng()()(),wl(3295,"tr",16)(3296,"td",17)(3297,"div",25)(3298,"span",26),Ux(3299," infiniteScrollDistance"),Ul(3300,"br"),ng()()(),wl(3301,"td",21)(3302,"code",45),Ux(3303,"number"),ng()(),wl(3304,"td",24)(3305,"em")(3306,"strong"),Ux(3307,"(opcional)"),ng()(),wl(3308,"p"),Ux(3309,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),wl(3310,"strong"),Ux(3311,"Exemplos"),ng(),wl(3312,"code"),Ux(3313,"{ infiniteScrollDistance: 80 }"),ng(),Ux(3314,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),ng(),wl(3315,"p")(3316,"strong"),Ux(3317,"Componente compat\xEDvel:"),ng(),wl(3318,"code"),Ux(3319,"po-combo"),ng(),Ux(3320,"."),ng()()(),wl(3321,"tr",16)(3322,"td",17)(3323,"div",25)(3324,"span",26),Ux(3325," invalidValue"),Ul(3326,"br"),ng()()(),wl(3327,"td",21)(3328,"code",29),Ux(3329,"boolean"),ng()(),wl(3330,"td",24)(3331,"em")(3332,"strong"),Ux(3333,"(opcional)"),ng()(),wl(3334,"p"),Ux(3335,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),wl(3336,"code"),Ux(3337,"p-field-error-message"),ng(),Ux(3338,"."),ng(),wl(3339,"blockquote")(3340,"p"),Ux(3341,"Caso essa propriedade seja definida como "),wl(3342,"code"),Ux(3343,"true"),ng(),Ux(3344,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),ng()(),wl(3345,"p")(3346,"strong"),Ux(3347,"Componente compat\xEDvel"),ng(),Ux(3348,": "),wl(3349,"code"),Ux(3350,"po-switch"),ng()()()(),wl(3351,"tr",16)(3352,"td",17)(3353,"div",25)(3354,"span",26),Ux(3355," isoFormat"),Ul(3356,"br"),ng()()(),wl(3357,"td",21)(3358,"code",59),Ux(3359,"PoDatepickerIsoFormat"),ng()(),wl(3360,"td",24)(3361,"em")(3362,"strong"),Ux(3363,"(opcional)"),ng()(),wl(3364,"p"),Ux(3365,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),ng(),wl(3366,"blockquote")(3367,"p"),Ux(3368,"Veja os valores v\xE1lidos no "),wl(3369,"code"),Ux(3370,"PoDatepickerIsoFormat"),ng(),Ux(3371,"."),ng()(),wl(3372,"p")(3373,"strong"),Ux(3374,"Componente compat\xEDvel:"),ng(),wl(3375,"code"),Ux(3376,"po-datepicker"),ng()()()(),wl(3377,"tr",16)(3378,"td",17)(3379,"div",25)(3380,"span",26),Ux(3381," key"),Ul(3382,"br"),ng()()(),wl(3383,"td",21)(3384,"code",29),Ux(3385,"boolean"),ng()(),wl(3386,"td",24)(3387,"em")(3388,"strong"),Ux(3389,"(opcional)"),ng()(),wl(3390,"p"),Ux(3391,"Identificador"),ng()()(),wl(3392,"tr",16)(3393,"td",17)(3394,"div",25)(3395,"span",26),Ux(3396," keydown"),Ul(3397,"br"),ng()()(),wl(3398,"td",21)(3399,"code",44),Ux(3400,"Function"),ng()(),wl(3401,"td",24)(3402,"em")(3403,"strong"),Ux(3404,"(opcional)"),ng()(),wl(3405,"p"),Ux(3406,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(3407,"code"),Ux(3408,"KeyboardEvent"),ng(),Ux(3409," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(3410,"tr",16)(3411,"td",17)(3412,"div",25)(3413,"span",26),Ux(3414," label"),Ul(3415,"br"),ng()()(),wl(3416,"td",21)(3417,"code",27),Ux(3418,"string"),ng()(),wl(3419,"td",24)(3420,"em")(3421,"strong"),Ux(3422,"(opcional)"),ng()(),wl(3423,"p"),Ux(3424,"R\xF3tulo do campo exibido."),ng(),wl(3425,"p"),Ux(3426,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),wl(3427,"code"),Ux(3428,"label"),ng(),Ux(3429," o valor da propriedade "),wl(3430,"code"),Ux(3431,"property"),ng(),Ux(3432," com a primeira letra em mai\xFAsculo."),ng()()(),wl(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),Ux(3437," labelPosition"),Ul(3438,"br"),ng()()(),wl(3439,"td",21)(3440,"code",60),Ux(3441,"PoSwitchLabelPosition"),ng()(),wl(3442,"td",24)(3443,"em")(3444,"strong"),Ux(3445,"(opcional)"),ng()(),wl(3446,"p"),Ux(3447,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),ng(),wl(3448,"blockquote")(3449,"p"),Ux(3450,"Por padr\xE3o exibe \xE0 direita."),ng()()()(),wl(3451,"tr",16)(3452,"td",17)(3453,"div",25)(3454,"span",26),Ux(3455," listboxControlPosition"),Ul(3456,"br"),ng()()(),wl(3457,"td",21)(3458,"code",61),Ux(3459,"'top' "),ng(),wl(3460,"code",62),Ux(3461," 'bottom'"),ng()(),wl(3462,"td",24)(3463,"em")(3464,"strong"),Ux(3465,"(opcional)"),ng()(),wl(3466,"p"),Ux(3467,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),wl(3468,"code"),Ux(3469,"listbox"),ng(),Ux(3470," em rela\xE7\xE3o ao campo ("),wl(3471,"code"),Ux(3472,"top"),ng(),Ux(3473," ou "),wl(3474,"code"),Ux(3475,"bottom"),ng(),Ux(3476,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ng(),wl(3477,"p")(3478,"strong"),Ux(3479,"Componentes compat\xEDveis:"),ng(),wl(3480,"code"),Ux(3481,"po-multiselect"),ng(),Ux(3482,", "),wl(3483,"code"),Ux(3484,"po-combo"),ng(),Ux(3485,"."),ng()()(),wl(3486,"tr",16)(3487,"td",17)(3488,"div",25)(3489,"span",26),Ux(3490," literals"),Ul(3491,"br"),ng()()(),wl(3492,"td",21)(3493,"code",36),Ux(3494,"PoLookupLiterals "),ng(),wl(3495,"code",63),Ux(3496," PoMultiselectLiterals "),ng(),wl(3497,"code",64),Ux(3498," PoComboLiterals "),ng(),wl(3499,"code",65),Ux(3500," PoDatepickerRangeLiterals "),ng(),wl(3501,"code",66),Ux(3502," PoUploadLiterals"),ng()(),wl(3503,"td",24)(3504,"em")(3505,"strong"),Ux(3506,"(opcional)"),ng()(),wl(3507,"p"),Ux(3508,"Objeto com as literais usadas para os seguintes componentes: "),wl(3509,"code"),Ux(3510,"po-lookup"),ng(),Ux(3511,", "),wl(3512,"code"),Ux(3513,"po-multiselect"),ng(),Ux(3514,", "),wl(3515,"code"),Ux(3516,"po-combo"),ng(),Ux(3517," e "),wl(3518,"code"),Ux(3519,"po-datepicker-range"),ng(),Ux(3520,"."),ng(),wl(3521,"blockquote")(3522,"p"),Ux(3523,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),ng()(),wl(3524,"p")(3525,"strong"),Ux(3526,"Componentes compat\xEDveis:"),ng(),wl(3527,"code"),Ux(3528,"po-lookup"),ng(),Ux(3529,", "),wl(3530,"code"),Ux(3531,"po-multiselect"),ng(),Ux(3532,", "),wl(3533,"code"),Ux(3534,"po-combo"),ng(),Ux(3535,", "),wl(3536,"code"),Ux(3537,"po-datepicker-range"),ng()()()(),wl(3538,"tr",16)(3539,"td",17)(3540,"div",25)(3541,"span",26),Ux(3542," loading"),Ul(3543,"br"),ng()()(),wl(3544,"td",21)(3545,"code",29),Ux(3546,"boolean"),ng()(),wl(3547,"td",24)(3548,"em")(3549,"strong"),Ux(3550,"(opcional)"),ng()(),wl(3551,"p"),Ux(3552,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),ng(),wl(3553,"blockquote")(3554,"p"),Ux(3555,"Por padr\xE3o \xE9 "),wl(3556,"code"),Ux(3557,"false"),ng(),Ux(3558,"."),ng()(),wl(3559,"p")(3560,"strong"),Ux(3561,"Componentes compat\xEDveis:"),ng(),wl(3562,"code"),Ux(3563,"po-datepicker"),ng(),Ux(3564,", "),wl(3565,"code"),Ux(3566,"po-datepicker-range"),ng(),Ux(3567,", "),wl(3568,"code"),Ux(3569,"po-number"),ng(),Ux(3570,", "),wl(3571,"code"),Ux(3572,"po-decimal"),ng(),Ux(3573,`,
`),wl(3574,"code"),Ux(3575,"po-input"),ng(),Ux(3576,", "),wl(3577,"code"),Ux(3578,"po-select"),ng(),Ux(3579,", "),wl(3580,"code"),Ux(3581,"po-switch"),ng(),Ux(3582,", "),wl(3583,"code"),Ux(3584,"po-combo"),ng(),Ux(3585,", "),wl(3586,"code"),Ux(3587,"po-lookup"),ng(),Ux(3588,", "),wl(3589,"code"),Ux(3590,"po-multiselect"),ng(),Ux(3591,`,
`),wl(3592,"code"),Ux(3593,"po-textarea"),ng(),Ux(3594,", "),wl(3595,"code"),Ux(3596,"po-password"),ng(),Ux(3597,", "),wl(3598,"code"),Ux(3599,"po-upload"),ng(),Ux(3600,"."),ng()()(),wl(3601,"tr",16)(3602,"td",17)(3603,"div",25)(3604,"span",26),Ux(3605," locale"),Ul(3606,"br"),ng()()(),wl(3607,"td",21)(3608,"code",27),Ux(3609,"string"),ng()(),wl(3610,"td",24)(3611,"em")(3612,"strong"),Ux(3613,"(opcional)"),ng()(),wl(3614,"p"),Ux(3615,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),wl(3616,"a",67)(3617,"code"),Ux(3618,"I18n"),ng()()(),wl(3619,"p"),Ux(3620,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(3621,"pre")(3622,"code"),Ux(3623,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ng()(),wl(3624,"blockquote")(3625,"p"),Ux(3626,"Para ver quais linguagens suportadas acesse "),wl(3627,"a",67)(3628,"code"),Ux(3629,"I18n"),ng()()()(),wl(3630,"p")(3631,"strong"),Ux(3632,"Componentes compat\xEDveis:"),ng(),wl(3633,"code"),Ux(3634,"po-datepicker"),ng(),Ux(3635,", "),wl(3636,"code"),Ux(3637,"po-decimal"),ng(),Ux(3638,", "),wl(3639,"code"),Ux(3640,"po-timepicker"),ng(),Ux(3641,"."),ng()()(),wl(3642,"tr",16)(3643,"td",17)(3644,"div",25)(3645,"span",26),Ux(3646," mask"),Ul(3647,"br"),ng()()(),wl(3648,"td",21)(3649,"code",27),Ux(3650,"string"),ng()(),wl(3651,"td",24)(3652,"em")(3653,"strong"),Ux(3654,"(opcional)"),ng()(),wl(3655,"p"),Ux(3656,"M\xE1scara para o campo."),ng(),wl(3657,"p")(3658,"strong"),Ux(3659,"Componente compat\xEDvel:"),ng(),wl(3660,"code"),Ux(3661,"po-input"),ng(),Ux(3662,"."),ng(),wl(3663,"blockquote")(3664,"p"),Ux(3665,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),wl(3666,"code"),Ux(3667,"type: time"),ng(),Ux(3668,"."),ng()()()(),wl(3669,"tr",16)(3670,"td",17)(3671,"div",25)(3672,"span",26),Ux(3673," maskFormatModel"),Ul(3674,"br"),ng()()(),wl(3675,"td",21)(3676,"code",29),Ux(3677,"boolean"),ng()(),wl(3678,"td",24)(3679,"em")(3680,"strong"),Ux(3681,"(opcional)"),ng()(),wl(3682,"p"),Ux(3683,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),wl(3684,"code"),Ux(3685,"false"),ng(),Ux(3686,"."),ng(),wl(3687,"p")(3688,"strong"),Ux(3689,"Componente compat\xEDvel:"),ng(),wl(3690,"code"),Ux(3691,"po-input"),ng(),Ux(3692,"."),ng(),wl(3693,"blockquote")(3694,"p"),Ux(3695,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),wl(3696,"code"),Ux(3697,"type: time"),ng(),Ux(3698,"."),ng()()()(),wl(3699,"tr",16)(3700,"td",17)(3701,"div",25)(3702,"span",26),Ux(3703," maskNoLengthValidation"),Ul(3704,"br"),ng()()(),wl(3705,"td",21)(3706,"code",29),Ux(3707,"boolean"),ng()(),wl(3708,"td",24)(3709,"em")(3710,"strong"),Ux(3711,"(opcional)"),ng()(),wl(3712,"p"),Ux(3713,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(3714,"code"),Ux(3715,"minLength"),ng(),Ux(3716,") e m\xE1ximo ("),wl(3717,"code"),Ux(3718,"maxLength"),ng(),Ux(3719,") quando h\xE1 uma m\xE1scara ("),wl(3720,"code"),Ux(3721,"p-mask"),ng(),Ux(3722,") definida."),ng(),wl(3723,"ul")(3724,"li"),Ux(3725,"Quando "),wl(3726,"code"),Ux(3727,"true"),ng(),Ux(3728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(3729,"li"),Ux(3730,"Quando "),wl(3731,"code"),Ux(3732,"false"),ng(),Ux(3733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(3734,"p")(3735,"strong"),Ux(3736,"Componentes compat\xEDveis:"),ng(),wl(3737,"code"),Ux(3738,"po-input"),ng(),Ux(3739,", "),wl(3740,"code"),Ux(3741,"po-decimal"),ng(),Ux(3742,"."),ng(),wl(3743,"blockquote")(3744,"p"),Ux(3745,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(3746,"code"),Ux(3747,"p-mask-format-model"),ng(),Ux(3748,"."),ng()(),wl(3749,"p"),Ux(3750,"Exemplo:"),ng(),wl(3751,"pre")(3752,"code"),Ux(3753,`fields:Array<PoDynamicFormField> = [
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
`),ng()(),wl(3754,"ul")(3755,"li"),Ux(3756,"Entrada: "),wl(3757,"code"),Ux(3758,"11.111.111/1111-11"),ng(),Ux(3759," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),ng()()()(),wl(3760,"tr",16)(3761,"td",17)(3762,"div",25)(3763,"span",26),Ux(3764," maxLength"),Ul(3765,"br"),ng()()(),wl(3766,"td",21)(3767,"code",45),Ux(3768,"number"),ng()(),wl(3769,"td",24)(3770,"em")(3771,"strong"),Ux(3772,"(opcional)"),ng()(),wl(3773,"p"),Ux(3774,"Tamanho m\xE1ximo de caracteres."),ng(),wl(3775,"p")(3776,"strong"),Ux(3777,"Componentes compat\xEDveis:"),ng(),wl(3778,"code"),Ux(3779,"po-input"),ng(),Ux(3780,", "),wl(3781,"code"),Ux(3782,"po-number"),ng(),Ux(3783,", "),wl(3784,"code"),Ux(3785,"po-decimal"),ng(),Ux(3786,", "),wl(3787,"code"),Ux(3788,"po-textarea"),ng(),Ux(3789,", "),wl(3790,"code"),Ux(3791,"po-password"),ng(),Ux(3792,"."),ng()()(),wl(3793,"tr",16)(3794,"td",17)(3795,"div",25)(3796,"span",26),Ux(3797," maxTime"),Ul(3798,"br"),ng()()(),wl(3799,"td",21)(3800,"code",27),Ux(3801,"string"),ng()(),wl(3802,"td",24)(3803,"em")(3804,"strong"),Ux(3805,"(opcional)"),ng()(),wl(3806,"p"),Ux(3807,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),wl(3808,"code"),Ux(3809,"HH:mm"),ng(),Ux(3810," ou "),wl(3811,"code"),Ux(3812,"HH:mm:ss"),ng(),Ux(3813,"."),ng(),wl(3814,"p")(3815,"strong"),Ux(3816,"Componente compat\xEDvel:"),ng(),wl(3817,"code"),Ux(3818,"po-datetimepicker"),ng(),Ux(3819,", "),wl(3820,"code"),Ux(3821,"po-timepicker"),ng()()()(),wl(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),Ux(3826," maxValue"),Ul(3827,"br"),ng()()(),wl(3828,"td",21)(3829,"code",27),Ux(3830,"string "),ng(),wl(3831,"code",45),Ux(3832," number"),ng()(),wl(3833,"td",24)(3834,"em")(3835,"strong"),Ux(3836,"(opcional)"),ng()(),wl(3837,"p"),Ux(3838,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),wl(3839,"em"),Ux(3840,"number"),ng(),Ux(3841,", "),wl(3842,"em"),Ux(3843,"date"),ng(),Ux(3844,", "),wl(3845,"em"),Ux(3846,"dateTime"),ng(),Ux(3847," ou "),wl(3848,"em"),Ux(3849,"time"),ng(),Ux(3850,"."),ng(),wl(3851,"blockquote")(3852,"p"),Ux(3853,"Para "),wl(3854,"code"),Ux(3855,"po-timepicker"),ng(),Ux(3856,", o valor deve estar no formato "),wl(3857,"code"),Ux(3858,"HH:mm"),ng(),Ux(3859," ou "),wl(3860,"code"),Ux(3861,"HH:mm:ss"),ng(),Ux(3862,"."),ng()(),wl(3863,"p")(3864,"strong"),Ux(3865,"Componentes compat\xEDveis:"),ng(),wl(3866,"code"),Ux(3867,"po-datepicker"),ng(),Ux(3868,", "),wl(3869,"code"),Ux(3870,"po-datepicker-range"),ng(),Ux(3871,", "),wl(3872,"code"),Ux(3873,"po-number"),ng(),Ux(3874,", "),wl(3875,"code"),Ux(3876,"po-decimal"),ng(),Ux(3877,", "),wl(3878,"code"),Ux(3879,"po-timepicker"),ng()()()(),wl(3880,"tr",16)(3881,"td",17)(3882,"div",25)(3883,"span",26),Ux(3884," minLength"),Ul(3885,"br"),ng()()(),wl(3886,"td",21)(3887,"code",45),Ux(3888,"number"),ng()(),wl(3889,"td",24)(3890,"em")(3891,"strong"),Ux(3892,"(opcional)"),ng()(),wl(3893,"p"),Ux(3894,"Tamanho m\xEDnimo de caracteres."),ng(),wl(3895,"p")(3896,"strong"),Ux(3897,"Componentes compat\xEDveis:"),ng(),wl(3898,"code"),Ux(3899,"po-input"),ng(),Ux(3900,", "),wl(3901,"code"),Ux(3902,"po-number"),ng(),Ux(3903,", "),wl(3904,"code"),Ux(3905,"po-decimal"),ng(),Ux(3906,", "),wl(3907,"code"),Ux(3908,"po-textarea"),ng(),Ux(3909,", "),wl(3910,"code"),Ux(3911,"po-password"),ng(),Ux(3912,"."),ng()()(),wl(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),Ux(3917," minTime"),Ul(3918,"br"),ng()()(),wl(3919,"td",21)(3920,"code",27),Ux(3921,"string"),ng()(),wl(3922,"td",24)(3923,"em")(3924,"strong"),Ux(3925,"(opcional)"),ng()(),wl(3926,"p"),Ux(3927,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),wl(3928,"code"),Ux(3929,"HH:mm"),ng(),Ux(3930," ou "),wl(3931,"code"),Ux(3932,"HH:mm:ss"),ng(),Ux(3933,"."),ng(),wl(3934,"p")(3935,"strong"),Ux(3936,"Componente compat\xEDvel:"),ng(),wl(3937,"code"),Ux(3938,"po-datetimepicker"),ng(),Ux(3939,", "),wl(3940,"code"),Ux(3941,"po-timepicker"),ng()()()(),wl(3942,"tr",16)(3943,"td",17)(3944,"div",25)(3945,"span",26),Ux(3946," minValue"),Ul(3947,"br"),ng()()(),wl(3948,"td",21)(3949,"code",27),Ux(3950,"string "),ng(),wl(3951,"code",45),Ux(3952," number"),ng()(),wl(3953,"td",24)(3954,"em")(3955,"strong"),Ux(3956,"(opcional)"),ng()(),wl(3957,"p"),Ux(3958,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),wl(3959,"em"),Ux(3960,"number"),ng(),Ux(3961,", "),wl(3962,"em"),Ux(3963,"date"),ng(),Ux(3964,", "),wl(3965,"em"),Ux(3966,"dateTime"),ng(),Ux(3967," ou "),wl(3968,"em"),Ux(3969,"time"),ng(),Ux(3970,"."),ng(),wl(3971,"blockquote")(3972,"p"),Ux(3973,"Para "),wl(3974,"code"),Ux(3975,"po-timepicker"),ng(),Ux(3976,", o valor deve estar no formato "),wl(3977,"code"),Ux(3978,"HH:mm"),ng(),Ux(3979," ou "),wl(3980,"code"),Ux(3981,"HH:mm:ss"),ng(),Ux(3982,"."),ng()(),wl(3983,"p")(3984,"strong"),Ux(3985,"Componentes compat\xEDveis:"),ng(),wl(3986,"code"),Ux(3987,"po-datepicker"),ng(),Ux(3988,", "),wl(3989,"code"),Ux(3990,"po-datepicker-range"),ng(),Ux(3991,", "),wl(3992,"code"),Ux(3993,"po-number"),ng(),Ux(3994,", "),wl(3995,"code"),Ux(3996,"po-decimal"),ng(),Ux(3997,", "),wl(3998,"code"),Ux(3999,"po-timepicker"),ng()()()(),wl(4e3,"tr",16)(4001,"td",17)(4002,"div",25)(4003,"span",26),Ux(4004," minuteInterval"),Ul(4005,"br"),ng()()(),wl(4006,"td",21)(4007,"code",45),Ux(4008,"number"),ng()(),wl(4009,"td",24)(4010,"em")(4011,"strong"),Ux(4012,"(opcional)"),ng()(),wl(4013,"p"),Ux(4014,"Define o intervalo entre os minutos exibidos no painel do timepicker."),ng()()(),wl(4015,"tr",16)(4016,"td",17)(4017,"div",25)(4018,"span",26),Ux(4019," mode"),Ul(4020,"br"),ng()()(),wl(4021,"td",21)(4022,"code",68),Ux(4023,"'month-year' "),ng(),wl(4024,"code",69),Ux(4025," 'year'"),ng()(),wl(4026,"td",24)(4027,"em")(4028,"strong"),Ux(4029,"(opcional)"),ng()(),wl(4030,"p"),Ux(4031,"Define o modo de sele\xE7\xE3o do "),wl(4032,"code"),Ux(4033,"po-datepicker"),ng(),Ux(4034,"."),ng(),wl(4035,"p"),Ux(4036,"Valores aceitos:"),ng(),wl(4037,"ul")(4038,"li")(4039,"code"),Ux(4040,"'month-year'"),ng(),Ux(4041,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),wl(4042,"code"),Ux(4043,"MM/YYYY"),ng(),Ux(4044,")"),ng(),wl(4045,"li")(4046,"code"),Ux(4047,"'year'"),ng(),Ux(4048,": exibe sele\xE7\xE3o apenas de ano (formato "),wl(4049,"code"),Ux(4050,"YYYY"),ng(),Ux(4051,")"),ng()(),wl(4052,"p")(4053,"strong"),Ux(4054,"Componente compat\xEDvel:"),ng(),wl(4055,"code"),Ux(4056,"po-datepicker"),ng()()()(),wl(4057,"tr",16)(4058,"td",17)(4059,"div",25)(4060,"span",26),Ux(4061," modelFormat"),Ul(4062,"br"),ng()()(),wl(4063,"td",21)(4064,"code",70),Ux(4065,"PoTimepickerModelFormat"),ng()(),wl(4066,"td",24)(4067,"em")(4068,"strong"),Ux(4069,"(opcional)"),ng()(),wl(4070,"p"),Ux(4071,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),wl(4072,"code"),Ux(4073,"po-timepicker"),ng(),Ux(4074,"."),ng(),wl(4075,"blockquote")(4076,"p"),Ux(4077,"Veja os valores v\xE1lidos no "),wl(4078,"code"),Ux(4079,"PoTimepickerModelFormat"),ng(),Ux(4080,"."),ng()(),wl(4081,"p")(4082,"strong"),Ux(4083,"Componente compat\xEDvel:"),ng(),wl(4084,"code"),Ux(4085,"po-timepicker"),ng()()()(),wl(4086,"tr",16)(4087,"td",17)(4088,"div",25)(4089,"span",26),Ux(4090," multiple"),Ul(4091,"br"),ng()()(),wl(4092,"td",21)(4093,"code",29),Ux(4094,"boolean"),ng()(),wl(4095,"td",24)(4096,"em")(4097,"strong"),Ux(4098,"(opcional)"),ng()(),wl(4099,"p"),Ux(4100,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),ng(),wl(4101,"p")(4102,"strong"),Ux(4103,"Componentes compat\xEDveis:"),ng(),wl(4104,"code"),Ux(4105,"po-lookup"),ng(),Ux(4106,", "),wl(4107,"code"),Ux(4108,"po-upload"),ng()()()(),wl(4109,"tr",16)(4110,"td",17)(4111,"div",25)(4112,"span",26),Ux(4113," noAutocomplete"),Ul(4114,"br"),ng()()(),wl(4115,"td",21)(4116,"code",29),Ux(4117,"boolean"),ng()(),wl(4118,"td",24)(4119,"em")(4120,"strong"),Ux(4121,"(opcional)"),ng()(),wl(4122,"p"),Ux(4123,"Define a propriedade nativa "),wl(4124,"code"),Ux(4125,"autocomplete"),ng(),Ux(4126," do campo como off."),ng(),wl(4127,"p")(4128,"strong"),Ux(4129,"Componentes compat\xEDveis:"),ng(),wl(4130,"code"),Ux(4131,"po-datepicker"),ng(),Ux(4132,", "),wl(4133,"code"),Ux(4134,"po-datepicker-range"),ng(),Ux(4135,", "),wl(4136,"code"),Ux(4137,"po-input"),ng(),Ux(4138,", "),wl(4139,"code"),Ux(4140,"po-number"),ng(),Ux(4141,", "),wl(4142,"code"),Ux(4143,"po-decimal"),ng(),Ux(4144,`,
`),wl(4145,"code"),Ux(4146,"po-lookup"),ng(),Ux(4147,", "),wl(4148,"code"),Ux(4149,"po-password"),ng(),Ux(4150,", "),wl(4151,"code"),Ux(4152,"po-timepicker"),ng(),Ux(4153,"."),ng()()(),wl(4154,"tr",16)(4155,"td",17)(4156,"div",25)(4157,"span",26),Ux(4158," offsetColumns"),Ul(4159,"br"),ng()()(),wl(4160,"td",21)(4161,"code",45),Ux(4162,"number"),ng()(),wl(4163,"td",24)(4164,"em")(4165,"strong"),Ux(4166,"(opcional)"),ng()(),wl(4167,"p"),Ux(4168,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),ng(),wl(4169,"p"),Ux(4170,"Deve ser usado o sistema de "),wl(4171,"strong"),Ux(4172,"grid"),ng(),Ux(4173," do PO (1 ... 12 colunas)."),ng(),wl(4174,"blockquote")(4175,"p"),Ux(4176,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),ng()()()(),wl(4177,"tr",16)(4178,"td",17)(4179,"div",25)(4180,"span",26),Ux(4181," offsetLgColumns"),Ul(4182,"br"),ng()()(),wl(4183,"td",21)(4184,"code",45),Ux(4185,"number"),ng()(),wl(4186,"td",24)(4187,"em")(4188,"strong"),Ux(4189,"(opcional)"),ng()(),wl(4190,"p"),Ux(4191,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),ng(),wl(4192,"p"),Ux(4193,"Deve ser usado o sistema de "),wl(4194,"strong"),Ux(4195,"grid"),ng(),Ux(4196," do PO (1 ... 12 colunas)."),ng(),wl(4197,"blockquote")(4198,"p"),Ux(4199,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(4200,"code"),Ux(4201,"offsetColumns"),ng(),Ux(4202,"."),ng()()()(),wl(4203,"tr",16)(4204,"td",17)(4205,"div",25)(4206,"span",26),Ux(4207," offsetMdColumns"),Ul(4208,"br"),ng()()(),wl(4209,"td",21)(4210,"code",45),Ux(4211,"number"),ng()(),wl(4212,"td",24)(4213,"em")(4214,"strong"),Ux(4215,"(opcional)"),ng()(),wl(4216,"p"),Ux(4217,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),ng(),wl(4218,"p"),Ux(4219,"Deve ser usado o sistema de "),wl(4220,"strong"),Ux(4221,"grid"),ng(),Ux(4222," do PO (1 ... 12 colunas)."),ng(),wl(4223,"blockquote")(4224,"p"),Ux(4225,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(4226,"code"),Ux(4227,"offsetColumns"),ng(),Ux(4228,"."),ng()()()(),wl(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),Ux(4233," offsetSmColumns"),Ul(4234,"br"),ng()()(),wl(4235,"td",21)(4236,"code",45),Ux(4237,"number"),ng()(),wl(4238,"td",24)(4239,"em")(4240,"strong"),Ux(4241,"(opcional)"),ng()(),wl(4242,"p"),Ux(4243,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),ng(),wl(4244,"p"),Ux(4245,"Deve ser usado o sistema de "),wl(4246,"strong"),Ux(4247,"grid"),ng(),Ux(4248," do PO (1 ... 12 colunas)."),ng(),wl(4249,"blockquote")(4250,"p"),Ux(4251,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(4252,"code"),Ux(4253,"offsetColumns"),ng(),Ux(4254,"."),ng()()()(),wl(4255,"tr",16)(4256,"td",17)(4257,"div",25)(4258,"span",26),Ux(4259," offsetXlColumns"),Ul(4260,"br"),ng()()(),wl(4261,"td",21)(4262,"code",45),Ux(4263,"number"),ng()(),wl(4264,"td",24)(4265,"em")(4266,"strong"),Ux(4267,"(opcional)"),ng()(),wl(4268,"p"),Ux(4269,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),ng(),wl(4270,"p"),Ux(4271,"Deve ser usado o sistema de "),wl(4272,"strong"),Ux(4273,"grid"),ng(),Ux(4274," do PO (1 ... 12 colunas)."),ng(),wl(4275,"blockquote")(4276,"p"),Ux(4277,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(4278,"code"),Ux(4279,"offsetColumns"),ng(),Ux(4280,"."),ng()()()(),wl(4281,"tr",16)(4282,"td",17)(4283,"div",25)(4284,"span",26),Ux(4285," onError"),Ul(4286,"br"),ng()()(),wl(4287,"td",21)(4288,"code",44),Ux(4289,"Function"),ng()(),wl(4290,"td",24)(4291,"em")(4292,"strong"),Ux(4293,"(opcional)"),ng()(),wl(4294,"p"),Ux(4295,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),ng(),wl(4296,"blockquote")(4297,"p"),Ux(4298,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),wl(4299,"code"),Ux(4300,"HttpErrorResponse"),ng(),Ux(4301,"."),ng()(),wl(4302,"p")(4303,"strong"),Ux(4304,"Componente compat\xEDvel"),ng(),Ux(4305,": "),wl(4306,"code"),Ux(4307,"po-upload"),ng()()()(),wl(4308,"tr",16)(4309,"td",17)(4310,"div",25)(4311,"span",26),Ux(4312," onSuccess"),Ul(4313,"br"),ng()()(),wl(4314,"td",21)(4315,"code",44),Ux(4316,"Function"),ng()(),wl(4317,"td",24)(4318,"em")(4319,"strong"),Ux(4320,"(opcional)"),ng()(),wl(4321,"p"),Ux(4322,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),ng(),wl(4323,"blockquote")(4324,"p"),Ux(4325,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),wl(4326,"code"),Ux(4327,"HttpResponse"),ng(),Ux(4328,"."),ng()(),wl(4329,"p")(4330,"strong"),Ux(4331,"Componente compat\xEDvel"),ng(),Ux(4332,": "),wl(4333,"code"),Ux(4334,"po-upload"),ng()()()(),wl(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),Ux(4339," onUpload"),Ul(4340,"br"),ng()()(),wl(4341,"td",21)(4342,"code",44),Ux(4343,"Function"),ng()(),wl(4344,"td",24)(4345,"em")(4346,"strong"),Ux(4347,"(opcional)"),ng()(),wl(4348,"p"),Ux(4349,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ng(),wl(4350,"pre")(4351,"code"),Ux(4352,`event.data = {id: 'id do usu\xE1rio'};
`),ng()(),wl(4353,"p")(4354,"strong"),Ux(4355,"Componente compat\xEDvel"),ng(),Ux(4356,": "),wl(4357,"code"),Ux(4358,"po-upload"),ng()()()(),wl(4359,"tr",16)(4360,"td",17)(4361,"div",25)(4362,"span",26),Ux(4363," optional"),Ul(4364,"br"),ng()()(),wl(4365,"td",21)(4366,"code",29),Ux(4367,"boolean"),ng()(),wl(4368,"td",24)(4369,"em")(4370,"strong"),Ux(4371,"(opcional)"),ng()(),wl(4372,"p"),Ux(4373,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(4374,"blockquote")(4375,"p"),Ux(4376,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),ng()(),wl(4377,"ul")(4378,"li"),Ux(4379,"O campo for "),wl(4380,"code"),Ux(4381,"required"),ng(),Ux(4382,", ou;"),ng(),wl(4383,"li"),Ux(4384,"N\xE3o possuir "),wl(4385,"code"),Ux(4386,"help"),ng(),Ux(4387," e "),wl(4388,"code"),Ux(4389,"label"),ng(),Ux(4390,"."),ng()(),wl(4391,"p")(4392,"strong"),Ux(4393,"Componentes compat\xEDveis:"),ng(),wl(4394,"code"),Ux(4395,"po-datepicker"),ng(),Ux(4396,", "),wl(4397,"code"),Ux(4398,"po-datepicker-range"),ng(),Ux(4399,", "),wl(4400,"code"),Ux(4401,"po-timepicker"),ng(),Ux(4402,", "),wl(4403,"code"),Ux(4404,"po-input"),ng(),Ux(4405,", "),wl(4406,"code"),Ux(4407,"po-number"),ng(),Ux(4408,`,
`),wl(4409,"code"),Ux(4410,"po-decimal"),ng(),Ux(4411,", "),wl(4412,"code"),Ux(4413,"po-select"),ng(),Ux(4414,", "),wl(4415,"code"),Ux(4416,"po-radio-group"),ng(),Ux(4417,", "),wl(4418,"code"),Ux(4419,"po-combo"),ng(),Ux(4420,", "),wl(4421,"code"),Ux(4422,"po-lookup"),ng(),Ux(4423,", "),wl(4424,"code"),Ux(4425,"po-checkbox-group"),ng(),Ux(4426,", "),wl(4427,"code"),Ux(4428,"po-multiselect"),ng(),Ux(4429,`,
`),wl(4430,"code"),Ux(4431,"po-textarea"),ng(),Ux(4432,", "),wl(4433,"code"),Ux(4434,"po-password"),ng(),Ux(4435,"."),ng()()(),wl(4436,"tr",16)(4437,"td",17)(4438,"div",25)(4439,"span",26),Ux(4440," options"),Ul(4441,"br"),ng()()(),wl(4442,"td",21)(4443,"code",32),Ux(4444,"Array<string> "),ng(),wl(4445,"code",71),Ux(4446," Array<PoSelectOption> "),ng(),wl(4447,"code",72),Ux(4448," Array<PoMultiselectOption> "),ng(),wl(4449,"code",73),Ux(4450," Array<PoCheckboxGroupOption> "),ng(),wl(4451,"code",74),Ux(4452," Array<any>"),ng()(),wl(4453,"td",24)(4454,"em")(4455,"strong"),Ux(4456,"(opcional)"),ng()(),wl(4457,"p"),Ux(4458,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),ng(),wl(4459,"p")(4460,"strong"),Ux(4461,"Componentes compat\xEDveis:"),ng(),wl(4462,"code"),Ux(4463,"po-select"),ng(),Ux(4464,", "),wl(4465,"code"),Ux(4466,"po-radio-group"),ng(),Ux(4467,", "),wl(4468,"code"),Ux(4469,"po-checkbox-group"),ng(),Ux(4470,", "),wl(4471,"code"),Ux(4472,"po-multiselect"),ng(),Ux(4473,"."),ng()()(),wl(4474,"tr",16)(4475,"td",17)(4476,"div",25)(4477,"span",26),Ux(4478," optionsMulti"),Ul(4479,"br"),ng()()(),wl(4480,"td",21)(4481,"code",29),Ux(4482,"boolean"),ng()(),wl(4483,"td",24)(4484,"em")(4485,"strong"),Ux(4486,"(opcional)"),ng()(),wl(4487,"p"),Ux(4488,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),ng()()(),wl(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),Ux(4493," optionsService"),Ul(4494,"br"),ng()()(),wl(4495,"td",21)(4496,"code",27),Ux(4497,"string "),ng(),wl(4498,"code",75),Ux(4499," PoComboFilter "),ng(),wl(4500,"code",76),Ux(4501," PoMultiselectFilter"),ng()(),wl(4502,"td",24)(4503,"em")(4504,"strong"),Ux(4505,"(opcional)"),ng()(),wl(4506,"p"),Ux(4507,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),wl(4508,"strong"),Ux(4509,"Importante"),ng()(),wl(4510,"blockquote")(4511,"p"),Ux(4512,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),wl(4513,"a",7),Ux(4514,"guia de API do PO UI"),ng(),Ux(4515,"."),ng()()()(),wl(4516,"tr",16)(4517,"td",17)(4518,"div",25)(4519,"span",26),Ux(4520," order"),Ul(4521,"br"),ng()()(),wl(4522,"td",21)(4523,"code",45),Ux(4524,"number"),ng()(),wl(4525,"td",24)(4526,"em")(4527,"strong"),Ux(4528,"(opcional)"),ng()(),wl(4529,"p"),Ux(4530,"Informa a ordem de exibi\xE7\xE3o do campo."),ng(),wl(4531,"p"),Ux(4532,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(4533,"p")(4534,"code"),Ux(4535,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),ng()(),wl(4536,"p"),Ux(4537,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),wl(4538,"code"),Ux(4539,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),ng()(),wl(4540,"p"),Ux(4541,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),ng(),wl(4542,"p"),Ux(4543,"Campos sem "),wl(4544,"code"),Ux(4545,"order"),ng(),Ux(4546,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ng()()(),wl(4547,"tr",16)(4548,"td",17)(4549,"div",25)(4550,"span",26),Ux(4551," params"),Ul(4552,"br"),ng()()(),wl(4553,"td",21)(4554,"code",33),Ux(4555,"any"),ng()(),wl(4556,"td",24)(4557,"em")(4558,"strong"),Ux(4559,"(opcional)"),ng()(),wl(4560,"p"),Ux(4561,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),wl(4562,"code"),Ux(4563,"po-lookup"),ng(),Ux(4564,` e
`),wl(4565,"code"),Ux(4566,"po-combo"),ng(),Ux(4567,"."),ng(),wl(4568,"p"),Ux(4569,"Por exemplo, para o par\xE2metro "),wl(4570,"code"),Ux(4571,"{ age: 23 }"),ng(),Ux(4572," a URL da requisi\xE7\xE3o ficaria:"),ng(),wl(4573,"p")(4574,"code"),Ux(4575,"url + ?age=23&filter=Peter"),ng()()()(),wl(4576,"tr",16)(4577,"td",17)(4578,"div",25)(4579,"span",26),Ux(4580," pattern"),Ul(4581,"br"),ng()()(),wl(4582,"td",21)(4583,"code",27),Ux(4584,"string"),ng()(),wl(4585,"td",24)(4586,"em")(4587,"strong"),Ux(4588,"(opcional)"),ng()(),wl(4589,"p"),Ux(4590,"Regex para valida\xE7\xE3o do campo."),ng(),wl(4591,"p")(4592,"strong"),Ux(4593,"Componentes compat\xEDveis:"),ng(),wl(4594,"code"),Ux(4595,"po-input"),ng(),Ux(4596,", "),wl(4597,"code"),Ux(4598,"po-password"),ng(),Ux(4599,"."),ng()()(),wl(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),Ux(4604," placeholder"),Ul(4605,"br"),ng()()(),wl(4606,"td",21)(4607,"code",27),Ux(4608,"string"),ng()(),wl(4609,"td",24)(4610,"em")(4611,"strong"),Ux(4612,"(opcional)"),ng()(),wl(4613,"p"),Ux(4614,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),ng(),wl(4615,"p")(4616,"strong"),Ux(4617,"Componentes compat\xEDveis:"),ng(),wl(4618,"code"),Ux(4619,"po-datepicker"),ng(),Ux(4620,", "),wl(4621,"code"),Ux(4622,"po-datepicker-range"),ng(),Ux(4623,", "),wl(4624,"code"),Ux(4625,"po-timepicker"),ng(),Ux(4626,", "),wl(4627,"code"),Ux(4628,"po-input"),ng(),Ux(4629,", "),wl(4630,"code"),Ux(4631,"po-number"),ng(),Ux(4632,", "),wl(4633,"code"),Ux(4634,"po-decimal"),ng(),Ux(4635,", "),wl(4636,"code"),Ux(4637,"po-select"),ng(),Ux(4638,", "),wl(4639,"code"),Ux(4640,"po-combo"),ng(),Ux(4641,", "),wl(4642,"code"),Ux(4643,"po-lookup"),ng(),Ux(4644,", "),wl(4645,"code"),Ux(4646,"po-multiselect"),ng(),Ux(4647,", "),wl(4648,"code"),Ux(4649,"po-textarea"),ng(),Ux(4650,", "),wl(4651,"code"),Ux(4652,"po-password"),ng(),Ux(4653,"."),ng()()(),wl(4654,"tr",16)(4655,"td",17)(4656,"div",25)(4657,"span",26),Ux(4658," placeholderSearch"),Ul(4659,"br"),ng()()(),wl(4660,"td",21)(4661,"code",27),Ux(4662,"string"),ng()(),wl(4663,"td",24)(4664,"em")(4665,"strong"),Ux(4666,"(opcional)"),ng()(),wl(4667,"p"),Ux(4668,"Placeholder do campo de pesquisa do "),wl(4669,"code"),Ux(4670,"po-multiselect"),ng(),Ux(4671,"."),ng(),wl(4672,"blockquote")(4673,"p"),Ux(4674,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),ng()()()(),wl(4675,"tr",16)(4676,"td",17)(4677,"div",25)(4678,"span",26),Ux(4679," property"),Ul(4680,"br"),ng()()(),wl(4681,"td",21)(4682,"code",27),Ux(4683,"string"),ng()(),wl(4684,"td",24)(4685,"p"),Ux(4686,"Nome de refer\xEAncia do campo."),ng()()(),wl(4687,"tr",16)(4688,"td",17)(4689,"div",25)(4690,"span",26),Ux(4691," range"),Ul(4692,"br"),ng()()(),wl(4693,"td",21)(4694,"code",29),Ux(4695,"boolean"),ng()(),wl(4696,"td",24)(4697,"em")(4698,"strong"),Ux(4699,"(opcional)"),ng()(),wl(4700,"p"),Ux(4701,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),ng(),wl(4702,"blockquote")(4703,"p"),Ux(4704,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),ng()()()(),wl(4705,"tr",16)(4706,"td",17)(4707,"div",25)(4708,"span",26),Ux(4709," rangePresetOptions"),Ul(4710,"br"),ng()()(),wl(4711,"td",21)(4712,"code",77),Ux(4713,"Array<PoCalendarRangePreset>"),ng()(),wl(4714,"td",24)(4715,"em")(4716,"strong"),Ux(4717,"(opcional)"),ng()(),wl(4718,"p"),Ux(4719,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),ng(),wl(4720,"p"),Ux(4721,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),wl(4722,"code"),Ux(4723,"PoCalendarRangePreset"),ng(),Ux(4724,"."),ng(),wl(4725,"p")(4726,"strong"),Ux(4727,"Componente compat\xEDvel:"),ng(),wl(4728,"code"),Ux(4729,"po-datepicker-range"),ng()()()(),wl(4730,"tr",16)(4731,"td",17)(4732,"div",25)(4733,"span",26),Ux(4734," rangePresets"),Ul(4735,"br"),ng()()(),wl(4736,"td",21)(4737,"code",29),Ux(4738,"boolean "),ng(),wl(4739,"code",32),Ux(4740," Array<string>"),ng()(),wl(4741,"td",24)(4742,"em")(4743,"strong"),Ux(4744,"(opcional)"),ng()(),wl(4745,"p"),Ux(4746,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),ng(),wl(4747,"p"),Ux(4748,"Aceita os seguintes valores:"),ng(),wl(4749,"ul")(4750,"li")(4751,"code"),Ux(4752,"true"),ng(),Ux(4753,": exibe todos os presets padr\xE3o."),ng(),wl(4754,"li")(4755,"code"),Ux(4756,"false"),ng(),Ux(4757,": n\xE3o exibe os presets padr\xE3o."),ng(),wl(4758,"li")(4759,"code"),Ux(4760,"Array<string>"),ng(),Ux(4761,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),ng()(),wl(4762,"p")(4763,"strong"),Ux(4764,"Componente compat\xEDvel:"),ng(),wl(4765,"code"),Ux(4766,"po-datepicker-range"),ng()()()(),wl(4767,"tr",16)(4768,"td",17)(4769,"div",25)(4770,"span",26),Ux(4771," rangePresetsOrder"),Ul(4772,"br"),ng()()(),wl(4773,"td",21)(4774,"code",78),Ux(4775,"'asc' "),ng(),wl(4776,"code",79),Ux(4777," 'desc'"),ng()(),wl(4778,"td",24)(4779,"em")(4780,"strong"),Ux(4781,"(opcional)"),ng()(),wl(4782,"p"),Ux(4783,"Define a ordena\xE7\xE3o dos presets na lista."),ng(),wl(4784,"p"),Ux(4785,"Valores aceitos:"),ng(),wl(4786,"ul")(4787,"li")(4788,"code"),Ux(4789,"'asc'"),ng(),Ux(4790,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),ng(),wl(4791,"li")(4792,"code"),Ux(4793,"'desc'"),ng(),Ux(4794,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),ng()(),wl(4795,"p")(4796,"strong"),Ux(4797,"Componente compat\xEDvel:"),ng(),wl(4798,"code"),Ux(4799,"po-datepicker-range"),ng()()()(),wl(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),Ux(4804," readonly"),Ul(4805,"br"),ng()()(),wl(4806,"td",21)(4807,"code",29),Ux(4808,"boolean"),ng()(),wl(4809,"td",24)(4810,"em")(4811,"strong"),Ux(4812,"(opcional)"),ng()(),wl(4813,"p"),Ux(4814,"Indica que o campo ser\xE1 somente leitura."),ng(),wl(4815,"p")(4816,"strong"),Ux(4817,"Componentes compat\xEDveis:"),ng(),wl(4818,"code"),Ux(4819,"po-datepicker"),ng(),Ux(4820,", "),wl(4821,"code"),Ux(4822,"po-datepicker-range"),ng(),Ux(4823,", "),wl(4824,"code"),Ux(4825,"po-timepicker"),ng(),Ux(4826,", "),wl(4827,"code"),Ux(4828,"po-input"),ng(),Ux(4829,", "),wl(4830,"code"),Ux(4831,"po-number"),ng(),Ux(4832,`,
`),wl(4833,"code"),Ux(4834,"po-decimal"),ng(),Ux(4835,", "),wl(4836,"code"),Ux(4837,"po-select"),ng(),Ux(4838,", "),wl(4839,"code"),Ux(4840,"po-textarea"),ng(),Ux(4841,", "),wl(4842,"code"),Ux(4843,"po-password"),ng(),Ux(4844,"."),ng()()(),wl(4845,"tr",16)(4846,"td",17)(4847,"div",25)(4848,"span",26),Ux(4849," removeInitialFilter"),Ul(4850,"br"),ng()()(),wl(4851,"td",21)(4852,"code",29),Ux(4853,"boolean"),ng()(),wl(4854,"td",24)(4855,"em")(4856,"strong"),Ux(4857,"(opcional)"),ng()(),wl(4858,"p"),Ux(4859,"Define que o filtro no primeiro clique ser\xE1 removido."),ng(),wl(4860,"blockquote")(4861,"p"),Ux(4862,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ng()(),wl(4863,"p")(4864,"strong"),Ux(4865,"Componente compat\xEDvel"),ng(),Ux(4866,": "),wl(4867,"code"),Ux(4868,"po-combo"),ng()()()(),wl(4869,"tr",16)(4870,"td",17)(4871,"div",25)(4872,"span",26),Ux(4873," required"),Ul(4874,"br"),ng()()(),wl(4875,"td",21)(4876,"code",29),Ux(4877,"boolean"),ng()(),wl(4878,"td",24)(4879,"em")(4880,"strong"),Ux(4881,"(opcional)"),ng()(),wl(4882,"p"),Ux(4883,"Define a obrigatoriedade do campo."),ng(),wl(4884,"p")(4885,"strong"),Ux(4886,"Componentes compat\xEDveis:"),ng(),wl(4887,"code"),Ux(4888,"po-datepicker"),ng(),Ux(4889,", "),wl(4890,"code"),Ux(4891,"po-datepicker-range"),ng(),Ux(4892,", "),wl(4893,"code"),Ux(4894,"po-timepicker"),ng(),Ux(4895,", "),wl(4896,"code"),Ux(4897,"po-input"),ng(),Ux(4898,", "),wl(4899,"code"),Ux(4900,"po-number"),ng(),Ux(4901,`,
`),wl(4902,"code"),Ux(4903,"po-decimal"),ng(),Ux(4904,", "),wl(4905,"code"),Ux(4906,"po-select"),ng(),Ux(4907,", "),wl(4908,"code"),Ux(4909,"po-radio-group"),ng(),Ux(4910,", "),wl(4911,"code"),Ux(4912,"po-combo"),ng(),Ux(4913,", "),wl(4914,"code"),Ux(4915,"po-lookup"),ng(),Ux(4916,", "),wl(4917,"code"),Ux(4918,"po-checkbox-group"),ng(),Ux(4919,", "),wl(4920,"code"),Ux(4921,"po-multiselect"),ng(),Ux(4922,`,
`),wl(4923,"code"),Ux(4924,"po-textarea"),ng(),Ux(4925,", "),wl(4926,"code"),Ux(4927,"po-password``, "),ng(),Ux(4928,"po-upload`."),ng()()(),wl(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),Ux(4933," requiredFieldErrorMessage"),Ul(4934,"br"),ng()()(),wl(4935,"td",21)(4936,"code",29),Ux(4937,"boolean"),ng()(),wl(4938,"td",24)(4939,"em")(4940,"strong"),Ux(4941,"(opcional)"),ng()(),wl(4942,"p"),Ux(4943,"Exibe a mensagem setada na propriedade "),wl(4944,"code"),Ux(4945,"errorMessage"),ng(),Ux(4946," se o campo estiver vazio e for requerido."),ng(),wl(4947,"blockquote")(4948,"p"),Ux(4949,"Necess\xE1rio que a propriedade "),wl(4950,"code"),Ux(4951,"required"),ng(),Ux(4952," esteja habilitada."),ng()(),wl(4953,"p")(4954,"strong"),Ux(4955,"Componentes compat\xEDveis:"),ng(),wl(4956,"code"),Ux(4957,"po-datepicker"),ng(),Ux(4958,", "),wl(4959,"code"),Ux(4960,"po-timepicker"),ng(),Ux(4961,", "),wl(4962,"code"),Ux(4963,"po-input"),ng(),Ux(4964,", "),wl(4965,"code"),Ux(4966,"po-number"),ng(),Ux(4967,", "),wl(4968,"code"),Ux(4969,"po-decimal"),ng(),Ux(4970,", "),wl(4971,"code"),Ux(4972,"po-password"),ng(),Ux(4973,"."),ng()()(),wl(4974,"tr",16)(4975,"td",17)(4976,"div",25)(4977,"span",26),Ux(4978," restrictions"),Ul(4979,"br"),ng()()(),wl(4980,"td",21)(4981,"code",80),Ux(4982,"PoUploadFileRestrictions"),ng()(),wl(4983,"td",24)(4984,"em")(4985,"strong"),Ux(4986,"(opcional)"),ng()(),wl(4987,"p"),Ux(4988,"Objeto que segue a defini\xE7\xE3o da interface "),wl(4989,"code"),Ux(4990,"PoUploadFileRestrictions"),ng(),Ux(4991,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ng(),wl(4992,"p")(4993,"strong"),Ux(4994,"Componente compat\xEDvel"),ng(),Ux(4995,": "),wl(4996,"code"),Ux(4997,"po-upload"),ng()()()(),wl(4998,"tr",16)(4999,"td",17)(5e3,"div",25)(5001,"span",26),Ux(5002," rows"),Ul(5003,"br"),ng()()(),wl(5004,"td",21)(5005,"code",45),Ux(5006,"number"),ng()(),wl(5007,"td",24)(5008,"em")(5009,"strong"),Ux(5010,"(opcional)"),ng()(),wl(5011,"p"),Ux(5012,"Quantidade de linhas exibidas no "),wl(5013,"code"),Ux(5014,"po-textarea"),ng(),Ux(5015,"."),ng()()(),wl(5016,"tr",16)(5017,"td",17)(5018,"div",25)(5019,"span",26),Ux(5020," searchService"),Ul(5021,"br"),ng()()(),wl(5022,"td",21)(5023,"code",27),Ux(5024,"string "),ng(),wl(5025,"code",34),Ux(5026," PoLookupFilter"),ng()(),wl(5027,"td",24)(5028,"em")(5029,"strong"),Ux(5030,"(opcional)"),ng()(),wl(5031,"p"),Ux(5032,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),wl(5033,"code"),Ux(5034,"columns"),ng(),Ux(5035,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),wl(5036,"strong"),Ux(5037,"Importante:"),ng()(),wl(5038,"blockquote")(5039,"p"),Ux(5040,"Caso utilizar a propriedade "),wl(5041,"code"),Ux(5042,"optionsService"),ng(),Ux(5043,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),wl(5044,"a",7),Ux(5045,"guia de API do PO UI"),ng(),Ux(5046,"."),ng()()()(),wl(5047,"tr",16)(5048,"td",17)(5049,"div",25)(5050,"span",26),Ux(5051," secondInterval"),Ul(5052,"br"),ng()()(),wl(5053,"td",21)(5054,"code",45),Ux(5055,"number"),ng()(),wl(5056,"td",24)(5057,"em")(5058,"strong"),Ux(5059,"(opcional)"),ng()(),wl(5060,"p"),Ux(5061,"Define o intervalo entre os segundos exibidos no painel do timepicker."),ng()()(),wl(5062,"tr",16)(5063,"td",17)(5064,"div",25)(5065,"span",26),Ux(5066," secret"),Ul(5067,"br"),ng()()(),wl(5068,"td",21)(5069,"code",29),Ux(5070,"boolean"),ng()(),wl(5071,"td",24)(5072,"em")(5073,"strong"),Ux(5074,"(opcional)"),ng()(),wl(5075,"p"),Ux(5076,"Esconde a informa\xE7\xE3o estilo "),wl(5077,"em"),Ux(5078,"password"),ng(),Ux(5079,", pode ser utilizado quando o tipo de dado for "),wl(5080,"em"),Ux(5081,"string"),ng(),Ux(5082,"."),ng()()(),wl(5083,"tr",16)(5084,"td",17)(5085,"div",25)(5086,"span",26),Ux(5087," showRequired"),Ul(5088,"br"),ng()()(),wl(5089,"td",21)(5090,"code",29),Ux(5091,"boolean"),ng()(),wl(5092,"td",24)(5093,"em")(5094,"strong"),Ux(5095,"(opcional)"),ng()(),wl(5096,"p"),Ux(5097,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(5098,"blockquote")(5099,"p"),Ux(5100,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(5101,"ul")(5102,"li"),Ux(5103,"N\xE3o possuir "),wl(5104,"code"),Ux(5105,"p-help"),ng(),Ux(5106," e/ou "),wl(5107,"code"),Ux(5108,"p-label"),ng(),Ux(5109,"."),ng()(),wl(5110,"p")(5111,"strong"),Ux(5112,"Componentes compat\xEDveis:"),ng(),wl(5113,"code"),Ux(5114,"po-datepicker"),ng(),Ux(5115,", "),wl(5116,"code"),Ux(5117,"po-datepicker-range"),ng(),Ux(5118,", "),wl(5119,"code"),Ux(5120,"po-timepicker"),ng(),Ux(5121,", "),wl(5122,"code"),Ux(5123,"po-input"),ng(),Ux(5124,", "),wl(5125,"code"),Ux(5126,"po-number"),ng(),Ux(5127,`,
`),wl(5128,"code"),Ux(5129,"po-decimal"),ng(),Ux(5130,", "),wl(5131,"code"),Ux(5132,"po-select"),ng(),Ux(5133,", "),wl(5134,"code"),Ux(5135,"po-radio-group"),ng(),Ux(5136,", "),wl(5137,"code"),Ux(5138,"po-combo"),ng(),Ux(5139,", "),wl(5140,"code"),Ux(5141,"po-lookup"),ng(),Ux(5142,", "),wl(5143,"code"),Ux(5144,"po-checkbox-group"),ng(),Ux(5145,", "),wl(5146,"code"),Ux(5147,"po-multiselect"),ng(),Ux(5148,`,
`),wl(5149,"code"),Ux(5150,"po-textarea"),ng(),Ux(5151,", "),wl(5152,"code"),Ux(5153,"po-password"),ng(),Ux(5154,", "),wl(5155,"code"),Ux(5156,"po-upload"),ng(),Ux(5157,"."),ng()()(),wl(5158,"tr",16)(5159,"td",17)(5160,"div",25)(5161,"span",26),Ux(5162," showSeconds"),Ul(5163,"br"),ng()()(),wl(5164,"td",21)(5165,"code",29),Ux(5166,"boolean"),ng()(),wl(5167,"td",24)(5168,"em")(5169,"strong"),Ux(5170,"(opcional)"),ng()(),wl(5171,"p"),Ux(5172,"Exibe a coluna de segundos no painel do timepicker."),ng()()(),wl(5173,"tr",16)(5174,"td",17)(5175,"div",25)(5176,"span",26),Ux(5177," showThumbnail"),Ul(5178,"br"),ng()()(),wl(5179,"td",21)(5180,"code",29),Ux(5181,"boolean"),ng()(),wl(5182,"td",24)(5183,"em")(5184,"strong"),Ux(5185,"(opcional)"),ng()(),wl(5186,"p"),Ux(5187,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),ng(),wl(5188,"blockquote")(5189,"p"),Ux(5190,"Propriedade funciona apenas em arquivos de formato de imagem ("),wl(5191,"code"),Ux(5192,".png"),ng(),Ux(5193,", "),wl(5194,"code"),Ux(5195,".jpg"),ng(),Ux(5196,", "),wl(5197,"code"),Ux(5198,".jpeg"),ng(),Ux(5199," e "),wl(5200,"code"),Ux(5201,".gif"),ng(),Ux(5202,")."),ng()(),wl(5203,"p")(5204,"strong"),Ux(5205,"Componente compat\xEDvel"),ng(),Ux(5206,": "),wl(5207,"code"),Ux(5208,"po-upload"),ng()()()(),wl(5209,"tr",16)(5210,"td",17)(5211,"div",25)(5212,"span",26),Ux(5213," size"),Ul(5214,"br"),ng()()(),wl(5215,"td",21)(5216,"code",27),Ux(5217,"string"),ng()(),wl(5218,"td",24)(5219,"em")(5220,"strong"),Ux(5221,"(opcional)"),ng()(),wl(5222,"p"),Ux(5223,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),ng(),wl(5224,"ul")(5225,"li")(5226,"code"),Ux(5227,"small"),ng(),Ux(5228,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(5229,"li")(5230,"code"),Ux(5231,"medium"),ng(),Ux(5232,": aplica a medida medium de cada componente."),ng(),wl(5233,"li")(5234,"code"),Ux(5235,"large"),ng(),Ux(5236,": aplica a medida large de cada componente (dispon\xEDvel para "),wl(5237,"code"),Ux(5238,"po-checkbox"),ng(),Ux(5239," e "),wl(5240,"code"),Ux(5241,"po-radio-group"),ng(),Ux(5242,")."),wl(5243,"blockquote")(5244,"p"),Ux(5245,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(5246,"code"),Ux(5247,"medium"),ng(),Ux(5248,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(5249,"a",40),Ux(5250,"po-theme"),ng(),Ux(5251,"."),ng()()()()()(),wl(5252,"tr",16)(5253,"td",17)(5254,"div",25)(5255,"span",26),Ux(5256," sort"),Ul(5257,"br"),ng()()(),wl(5258,"td",21)(5259,"code",29),Ux(5260,"boolean"),ng()(),wl(5261,"td",24)(5262,"em")(5263,"strong"),Ux(5264,"(opcional)"),ng()(),wl(5265,"p"),Ux(5266,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),ng(),wl(5267,"p")(5268,"strong"),Ux(5269,"Componentes compat\xEDveis:"),ng(),wl(5270,"code"),Ux(5271,"po-combo"),ng(),Ux(5272,", po-multiselect"),ng()()(),wl(5273,"tr",16)(5274,"td",17)(5275,"div",25)(5276,"span",26),Ux(5277," step"),Ul(5278,"br"),ng()()(),wl(5279,"td",21)(5280,"code",45),Ux(5281,"number"),ng()(),wl(5282,"td",24)(5283,"em")(5284,"strong"),Ux(5285,"(opcional)"),ng()(),wl(5286,"p"),Ux(5287,"Intervalo utilizado no "),wl(5288,"code"),Ux(5289,"po-number"),ng(),Ux(5290,"."),ng()()(),wl(5291,"tr",16)(5292,"td",17)(5293,"div",25)(5294,"span",26),Ux(5295," thousandMaxlength"),Ul(5296,"br"),ng()()(),wl(5297,"td",21)(5298,"code",45),Ux(5299,"number"),ng()(),wl(5300,"td",24)(5301,"em")(5302,"strong"),Ux(5303,"(opcional)"),ng()(),wl(5304,"p"),Ux(5305,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),ng(),wl(5306,"blockquote")(5307,"p"),Ux(5308,"Esta propriedade s\xF3 pode ser utilizada quando o "),wl(5309,"code"),Ux(5310,"type"),ng(),Ux(5311," for "),wl(5312,"em"),Ux(5313,"currency"),ng(),Ux(5314," ou "),wl(5315,"em"),Ux(5316,"decimal"),ng(),Ux(5317,"."),ng()()()(),wl(5318,"tr",16)(5319,"td",17)(5320,"div",25)(5321,"span",26),Ux(5322," type"),Ul(5323,"br"),ng()()(),wl(5324,"td",21)(5325,"code",27),Ux(5326,"string "),ng(),wl(5327,"code",81),Ux(5328," PoDynamicFieldType"),ng()(),wl(5329,"td",24)(5330,"em")(5331,"strong"),Ux(5332,"(opcional)"),ng()(),wl(5333,"p"),Ux(5334,"Tipo do valor campo."),ng(),wl(5335,"p"),Ux(5336,"Valores v\xE1lidos:"),ng(),wl(5337,"ul")(5338,"li")(5339,"code"),Ux(5340,"boolean"),ng(),Ux(5341,": Valores "),wl(5342,"em"),Ux(5343,"booleanos"),ng(),Ux(5344,"."),ng(),wl(5345,"li")(5346,"code"),Ux(5347,"currency"),ng(),Ux(5348,": Valores monet\xE1rios."),ng(),wl(5349,"li")(5350,"code"),Ux(5351,"decimal"),ng(),Ux(5352,": Valores decimais."),ng(),wl(5353,"li")(5354,"code"),Ux(5355,"date"),ng(),Ux(5356,": Valores de datas."),wl(5357,"ul")(5358,"li"),Ux(5359,"Aceita os tipos "),wl(5360,"strong"),Ux(5361,"string"),ng(),Ux(5362," e "),wl(5363,"strong"),Ux(5364,"Date"),ng(),Ux(5365,` padr\xE3o do Javascript,
por exemplo: `),wl(5366,"code"),Ux(5367,"'2017-11-28'"),ng(),Ux(5368," ou "),wl(5369,"code"),Ux(5370,"new Date(2017, 10, 28)"),ng(),Ux(5371,"."),ng()()(),wl(5372,"li")(5373,"code"),Ux(5374,"dateTime"),ng(),Ux(5375,": Valor de data com hor\xE1rio."),wl(5376,"ul")(5377,"li"),Ux(5378,"Aceita o tipo "),wl(5379,"em"),Ux(5380,"string"),ng(),Ux(5381," no formato "),wl(5382,"strong"),Ux(5383,"ISO-8601"),ng(),Ux(5384," extendido "),wl(5385,"strong"),Ux(5386,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),ng(),Ux(5387,`
e o tipo `),wl(5388,"strong"),Ux(5389,"Date"),ng(),Ux(5390," padr\xE3o do Javascript, por exemplo: "),wl(5391,"code"),Ux(5392,"'2017-11-28T00:00:00-02:00'"),ng(),Ux(5393," ou "),wl(5394,"code"),Ux(5395,"new Date(2017, 10, 28)"),ng(),Ux(5396,"."),ng()()(),wl(5397,"li")(5398,"code"),Ux(5399,"number"),ng(),Ux(5400,": Valores num\xE9ricos."),ng(),wl(5401,"li")(5402,"code"),Ux(5403,"string"),ng(),Ux(5404,": Textos."),ng(),wl(5405,"li")(5406,"code"),Ux(5407,"time"),ng(),Ux(5408,": Valor do hor\xE1rio."),wl(5409,"ul")(5410,"li"),Ux(5411,"Aceita o tipo "),wl(5412,"strong"),Ux(5413,"string"),ng(),Ux(5414," nos formatos "),wl(5415,"strong"),Ux(5416,"'HH:mm:ss'"),ng(),Ux(5417," ou "),wl(5418,"strong"),Ux(5419,"'HH:mm:ss.ffffff'"),ng(),Ux(5420,", por exemplo: "),wl(5421,"code"),Ux(5422,"'23:12:45'"),ng(),Ux(5423,"."),ng()()()()()(),wl(5424,"tr",16)(5425,"td",17)(5426,"div",25)(5427,"span",26),Ux(5428," url"),Ul(5429,"br"),ng()()(),wl(5430,"td",21)(5431,"code",27),Ux(5432,"string"),ng()(),wl(5433,"td",24)(5434,"em")(5435,"strong"),Ux(5436,"(opcional)"),ng()(),wl(5437,"p"),Ux(5438,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),ng(),wl(5439,"p")(5440,"strong"),Ux(5441,"Componente compat\xEDvel"),ng(),Ux(5442,": "),wl(5443,"code"),Ux(5444,"po-upload"),ng()()()(),wl(5445,"tr",16)(5446,"td",17)(5447,"div",25)(5448,"span",26),Ux(5449," validate"),Ul(5450,"br"),ng()()(),wl(5451,"td",21)(5452,"code",27),Ux(5453,"string "),ng(),wl(5454,"code",44),Ux(5455," Function"),ng()(),wl(5456,"td",24)(5457,"em")(5458,"strong"),Ux(5459,"(opcional)"),ng()(),wl(5460,"p"),Ux(5461,"Fun\xE7\xE3o ou servi\xE7o para validar as "),wl(5462,"strong"),Ux(5463,"mudan\xE7as do campo"),ng(),Ux(5464,"."),ng(),wl(5465,"ul")(5466,"li"),Ux(5467,"A propriedade aceita os seguintes tipos:"),ng()(),wl(5468,"ul")(5469,"li")(5470,"strong"),Ux(5471,"String"),ng(),Ux(5472,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),wl(5473,"code"),Ux(5474,"POST"),ng(),Ux(5475,"."),ng(),wl(5476,"li")(5477,"strong"),Ux(5478,"Function"),ng(),Ux(5479,": M\xE9todo que ser\xE1 executado."),ng()(),wl(5480,"p"),Ux(5481,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),wl(5482,"code"),Ux(5483,"PoDynamicFormFieldChanged"),ng(),Ux(5484,":"),ng(),wl(5485,"p")(5486,"code"),Ux(5487,"{ property: 'property name', value: 'new value' }"),ng()(),wl(5488,"p"),Ux(5489,"O retorno desta fun\xE7\xE3o deve ser do tipo "),wl(5490,"a",82),Ux(5491,"PoDynamicFormFieldValidation"),ng(),Ux(5492,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ng(),wl(5493,"pre")(5494,"code"),Ux(5495,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ng()(),wl(5496,"p"),Ux(5497,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),wl(5498,"code"),Ux(5499,"bind"),ng(),Ux(5500,`, por exemplo:
`),wl(5501,"code"),Ux(5502,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),ng()()()(),wl(5503,"tr",16)(5504,"td",17)(5505,"div",25)(5506,"span",26),Ux(5507," visible"),Ul(5508,"br"),ng()()(),wl(5509,"td",21)(5510,"code",29),Ux(5511,"boolean"),ng()(),wl(5512,"td",24)(5513,"em")(5514,"strong"),Ux(5515,"(opcional)"),ng()(),wl(5516,"p"),Ux(5517,"Indica se o campo ser\xE1 vis\xEDvel."),ng()()(),wl(5518,"tr",16)(5519,"td",17)(5520,"div",25)(5521,"span",26),Ux(5522," yearRangeLimit"),Ul(5523,"br"),ng()()(),wl(5524,"td",21)(5525,"code",45),Ux(5526,"number"),ng()(),wl(5527,"td",24)(5528,"em")(5529,"strong"),Ux(5530,"(opcional)"),ng()(),wl(5531,"p"),Ux(5532,"Define o limite de anos exibidos na lista de anos do "),wl(5533,"code"),Ux(5534,"po-datepicker"),ng(),Ux(5535," nos modos "),wl(5536,"code"),Ux(5537,"month-year"),ng(),Ux(5538," e "),wl(5539,"code"),Ux(5540,"year"),ng(),Ux(5541,"."),ng()()()(),wl(5542,"h4",43)(5543,"code",5),Ux(5544,"PoLookupColumn"),ng()(),wl(5545,"div",2)(5546,"p"),Ux(5547,"Interface para configura\xE7\xE3o das colunas do po-lookup."),ng()(),wl(5548,"h4",12),Ux(5549,"Propriedades"),ng(),wl(5550,"table",13)(5551,"tr",14)(5552,"th",15),Ux(5553,"Nome"),ng(),wl(5554,"th",15),Ux(5555,"Tipo"),ng(),wl(5556,"th",15),Ux(5557,"Descri\xE7\xE3o"),ng()(),wl(5558,"tr",16)(5559,"td",17)(5560,"div",25)(5561,"span",26),Ux(5562," fieldLabel"),Ul(5563,"br"),ng()()(),wl(5564,"td",21)(5565,"code",29),Ux(5566,"boolean"),ng()(),wl(5567,"td",24)(5568,"em")(5569,"strong"),Ux(5570,"(opcional)"),ng()(),wl(5571,"p"),Ux(5572,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),ng(),wl(5573,"p"),Ux(5574,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),ng(),wl(5575,"p"),Ux(5576,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),wl(5577,"code"),Ux(5578,"p-field-format"),ng(),Ux(5579," ou "),wl(5580,"code"),Ux(5581,"p-field-label"),ng(),Ux(5582," forem configurados no componente."),ng()()(),wl(5583,"tr",16)(5584,"td",17)(5585,"div",25)(5586,"span",26),Ux(5587," format"),Ul(5588,"br"),ng()()(),wl(5589,"td",21)(5590,"code",27),Ux(5591,"string"),ng()(),wl(5592,"td",24)(5593,"em")(5594,"strong"),Ux(5595,"(opcional)"),ng()(),wl(5596,"p"),Ux(5597,"Formato de exibi\xE7\xE3o do valor da coluna:"),ng(),wl(5598,"ul")(5599,"li"),Ux(5600,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),ng(),wl(5601,"li"),Ux(5602,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ng()()()(),wl(5603,"tr",16)(5604,"td",17)(5605,"div",25)(5606,"span",26),Ux(5607," label"),Ul(5608,"br"),ng()()(),wl(5609,"td",21)(5610,"code",27),Ux(5611,"string"),ng()(),wl(5612,"td",24)(5613,"em")(5614,"strong"),Ux(5615,"(opcional)"),ng()(),wl(5616,"p"),Ux(5617,"Texto para t\xEDtulo da coluna."),ng(),wl(5618,"p"),Ux(5619,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),wl(5620,"em"),Ux(5621,"label"),ng(),Ux(5622," o valor da propriedade "),wl(5623,"em"),Ux(5624,"property"),ng(),Ux(5625," com a primeira letra em mai\xFAsculo."),ng()()(),wl(5626,"tr",16)(5627,"td",17)(5628,"div",25)(5629,"span",26),Ux(5630," property"),Ul(5631,"br"),ng()()(),wl(5632,"td",21)(5633,"code",27),Ux(5634,"string"),ng()(),wl(5635,"td",24)(5636,"em")(5637,"strong"),Ux(5638,"(opcional)"),ng()(),wl(5639,"p"),Ux(5640,"Nome identificador da coluna."),ng()()(),wl(5641,"tr",16)(5642,"td",17)(5643,"div",25)(5644,"span",26),Ux(5645," type"),Ul(5646,"br"),ng()()(),wl(5647,"td",21)(5648,"code",27),Ux(5649,"string"),ng()(),wl(5650,"td",24)(5651,"em")(5652,"strong"),Ux(5653,"(opcional)"),ng()(),wl(5654,"p"),Ux(5655,"Tipo da coluna:"),ng(),wl(5656,"ul")(5657,"li"),Ux(5658,"string (padr\xE3o): textos"),ng(),wl(5659,"li"),Ux(5660,"number: valores num\xE9ricos"),ng(),wl(5661,"li"),Ux(5662,"date: data"),ng(),wl(5663,"li"),Ux(5664,"currency: valores monet\xE1rios"),ng(),wl(5665,"li"),Ux(5666,"dateTime: data e hora"),ng()()()(),wl(5667,"tr",16)(5668,"td",17)(5669,"div",25)(5670,"span",26),Ux(5671," width"),Ul(5672,"br"),ng()()(),wl(5673,"td",21)(5674,"code",27),Ux(5675,"string"),ng()(),wl(5676,"td",24)(5677,"em")(5678,"strong"),Ux(5679,"(opcional)"),ng()(),wl(5680,"p"),Ux(5681,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),ng()()()(),wl(5682,"h4",43)(5683,"code",5),Ux(5684,"PoLookupFilter"),ng()(),wl(5685,"div",2)(5686,"p"),Ux(5687,"Define o tipo de busca utilizado no po-lookup."),ng()(),wl(5688,"h4",12),Ux(5689,"M\xE9todos"),ng(),wl(5690,"table",41)(5691,"tr",16)(5692,"th",42)(5693,"div",25)(5694,"h4")(5695,"span",26),Ux(5696," getFilteredItems "),ng()()()()(),wl(5697,"tr",24)(5698,"td",24)(5699,"p"),Ux(5700,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),wl(5701,"em"),Ux(5702,"Observable"),ng(),Ux(5703," com a resposta da API no formato da interface "),wl(5704,"code"),Ux(5705,"PoLookupResponseApi"),ng(),Ux(5706,"."),ng()()()(),wl(5707,"h5")(5708,"b"),Ux(5709,"Par\xE2metros"),ng()(),wl(5710,"table",13)(5711,"tr",14)(5712,"th",15),Ux(5713,"Nome"),ng(),wl(5714,"th",15),Ux(5715,"Tipo"),ng(),wl(5716,"th",15),Ux(5717,"Descri\xE7\xE3o"),ng()(),wl(5718,"tr",16)(5719,"td",17),Ux(5720," params"),ng(),wl(5721,"td",21)(5722,"code",83),Ux(5723," PoLookupFilteredItemsParams "),ng()(),wl(5724,"td",24)(5725,"p"),Ux(5726,"Objeto enviado por par\xE2metro que implementa a interface "),wl(5727,"code"),Ux(5728,"PoLookupFilteredItemsParams"),ng(),Ux(5729,"."),ng()()()(),Ul(5730,"br"),wl(5731,"table",41)(5732,"tr",16)(5733,"th",42)(5734,"div",25)(5735,"h4")(5736,"span",26),Ux(5737," getObjectByValue "),ng()()()()(),wl(5738,"tr",24)(5739,"td",24)(5740,"p"),Ux(5741,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),ng(),wl(5742,"p"),Ux(5743,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),ng()()()(),wl(5744,"h5")(5745,"b"),Ux(5746,"Par\xE2metros"),ng()(),wl(5747,"table",13)(5748,"tr",14)(5749,"th",15),Ux(5750,"Nome"),ng(),wl(5751,"th",15),Ux(5752,"Tipo"),ng(),wl(5753,"th",15),Ux(5754,"Descri\xE7\xE3o"),ng()(),wl(5755,"tr",16)(5756,"td",17),Ux(5757," value"),ng(),wl(5758,"td",21)(5759,"code",27),Ux(5760," string "),ng(),wl(5761,"code",74),Ux(5762," Array<any> "),ng()(),wl(5763,"td",24)(5764,"p"),Ux(5765,"Valor \xFAnico a ser buscado na fonte de dados."),ng()()(),wl(5766,"tr",16)(5767,"td",17),Ux(5768," filterParams"),ng(),wl(5769,"td",21)(5770,"code",83),Ux(5771," any "),ng()(),wl(5772,"td",24)(5773,"p"),Ux(5774,"Valor informado atrav\xE9s da propriedade "),wl(5775,"code"),Ux(5776,"p-filter-params"),ng(),Ux(5777,"."),ng()()()(),Ul(5778,"br"),wl(5779,"h4",43)(5780,"code",5),Ux(5781,"PoLookupFilteredItemsParams"),ng()(),wl(5782,"div",2)(5783,"p"),Ux(5784,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),wl(5785,"code"),Ux(5786,"getFilteredItems"),ng(),Ux(5787,"."),ng()(),wl(5788,"h4",12),Ux(5789,"Propriedades"),ng(),wl(5790,"table",13)(5791,"tr",14)(5792,"th",15),Ux(5793,"Nome"),ng(),wl(5794,"th",15),Ux(5795,"Tipo"),ng(),wl(5796,"th",15),Ux(5797,"Descri\xE7\xE3o"),ng()(),wl(5798,"tr",16)(5799,"td",17)(5800,"div",25)(5801,"span",26),Ux(5802," advancedFilters"),Ul(5803,"br"),ng()()(),wl(5804,"td",21)(5805,"code",84),Ux(5806,`{ [key: string]: any;
}`),ng()(),wl(5807,"td",24)(5808,"em")(5809,"strong"),Ux(5810,"(opcional)"),ng()(),wl(5811,"p"),Ux(5812,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),ng()()(),wl(5813,"tr",16)(5814,"td",17)(5815,"div",25)(5816,"span",26),Ux(5817," filter"),Ul(5818,"br"),ng()()(),wl(5819,"td",21)(5820,"code",27),Ux(5821,"string"),ng()(),wl(5822,"td",24)(5823,"em")(5824,"strong"),Ux(5825,"(opcional)"),ng()(),wl(5826,"p"),Ux(5827,"Conte\xFAdo utilizado para filtrar a lista de itens."),ng()()(),wl(5828,"tr",16)(5829,"td",17)(5830,"div",25)(5831,"span",26),Ux(5832," filterParams"),Ul(5833,"br"),ng()()(),wl(5834,"td",21)(5835,"code",33),Ux(5836,"any"),ng()(),wl(5837,"td",24)(5838,"em")(5839,"strong"),Ux(5840,"(opcional)"),ng()(),wl(5841,"p"),Ux(5842,"Valor informado atrav\xE9s da propriedade "),wl(5843,"code"),Ux(5844,"p-filter-params"),ng(),Ux(5845,"."),ng()()(),wl(5846,"tr",16)(5847,"td",17)(5848,"div",25)(5849,"span",26),Ux(5850," order"),Ul(5851,"br"),ng()()(),wl(5852,"td",21)(5853,"code",27),Ux(5854,"string"),ng()(),wl(5855,"td",24)(5856,"em")(5857,"strong"),Ux(5858,"(opcional)"),ng()(),wl(5859,"p"),Ux(5860,"Coluna que est\xE1 sendo ordenada na tabela."),ng(),wl(5861,"ul")(5862,"li"),Ux(5863,"Coluna decrescente ser\xE1 informada da seguinte forma: "),wl(5864,"code"),Ux(5865,"-<colunaOrdenada>"),ng(),Ux(5866,", por exemplo "),wl(5867,"code"),Ux(5868,"-name"),ng(),Ux(5869,"."),ng(),wl(5870,"li"),Ux(5871,"Coluna ascendente ser\xE1 informada da seguinte forma: "),wl(5872,"code"),Ux(5873,"<colunaOrdenada>"),ng(),Ux(5874,", por exemplo "),wl(5875,"code"),Ux(5876,"name"),ng(),Ux(5877,"."),ng()()()(),wl(5878,"tr",16)(5879,"td",17)(5880,"div",25)(5881,"span",26),Ux(5882," page"),Ul(5883,"br"),ng()()(),wl(5884,"td",21)(5885,"code",45),Ux(5886,"number"),ng()(),wl(5887,"td",24)(5888,"em")(5889,"strong"),Ux(5890,"(opcional)"),ng()(),wl(5891,"p"),Ux(5892,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),ng()()(),wl(5893,"tr",16)(5894,"td",17)(5895,"div",25)(5896,"span",26),Ux(5897," pageSize"),Ul(5898,"br"),ng()()(),wl(5899,"td",21)(5900,"code",45),Ux(5901,"number"),ng()(),wl(5902,"td",24)(5903,"em")(5904,"strong"),Ux(5905,"(opcional)"),ng()(),wl(5906,"p"),Ux(5907,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),ng()()()(),wl(5908,"h4",43)(5909,"code",5),Ux(5910,"PoLookupLiterals"),ng()(),wl(5911,"div",2)(5912,"p"),Ux(5913,"Interface para defini\xE7\xE3o das literais usadas no "),wl(5914,"code"),Ux(5915,"po-lookup"),ng(),Ux(5916,"."),ng()(),wl(5917,"h4",12),Ux(5918,"Propriedades"),ng(),wl(5919,"table",13)(5920,"tr",14)(5921,"th",15),Ux(5922,"Nome"),ng(),wl(5923,"th",15),Ux(5924,"Tipo"),ng(),wl(5925,"th",15),Ux(5926,"Descri\xE7\xE3o"),ng()(),wl(5927,"tr",16)(5928,"td",17)(5929,"div",25)(5930,"span",26),Ux(5931," clean"),Ul(5932,"br"),ng()()(),wl(5933,"td",21)(5934,"code",27),Ux(5935,"string"),ng()(),wl(5936,"td",24)(5937,"em")(5938,"strong"),Ux(5939,"(opcional)"),ng()(),wl(5940,"p"),Ux(5941,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),ng()()(),wl(5942,"tr",16)(5943,"td",17)(5944,"div",25)(5945,"span",26),Ux(5946," modalAdvancedSearch"),Ul(5947,"br"),ng()()(),wl(5948,"td",21)(5949,"code",27),Ux(5950,"string"),ng()(),wl(5951,"td",24)(5952,"em")(5953,"strong"),Ux(5954,"(opcional)"),ng()(),wl(5955,"p"),Ux(5956,"Texto do link de busca avan\xE7ada."),ng(),wl(5957,"p"),Ux(5958,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),ng()()(),wl(5959,"tr",16)(5960,"td",17)(5961,"div",25)(5962,"span",26),Ux(5963," modalAdvancedSearchPrimaryActionLabel"),Ul(5964,"br"),ng()()(),wl(5965,"td",21)(5966,"code",27),Ux(5967,"string"),ng()(),wl(5968,"td",24)(5969,"em")(5970,"strong"),Ux(5971,"(opcional)"),ng()(),wl(5972,"p"),Ux(5973,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),ng()()(),wl(5974,"tr",16)(5975,"td",17)(5976,"div",25)(5977,"span",26),Ux(5978," modalAdvancedSearchSecondaryActionLabel"),Ul(5979,"br"),ng()()(),wl(5980,"td",21)(5981,"code",27),Ux(5982,"string"),ng()(),wl(5983,"td",24)(5984,"em")(5985,"strong"),Ux(5986,"(opcional)"),ng()(),wl(5987,"p"),Ux(5988,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),ng()()(),wl(5989,"tr",16)(5990,"td",17)(5991,"div",25)(5992,"span",26),Ux(5993," modalAdvancedSearchTitle"),Ul(5994,"br"),ng()()(),wl(5995,"td",21)(5996,"code",27),Ux(5997,"string"),ng()(),wl(5998,"td",24)(5999,"em")(6e3,"strong"),Ux(6001,"(opcional)"),ng()(),wl(6002,"p"),Ux(6003,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),ng()()(),wl(6004,"tr",16)(6005,"td",17)(6006,"div",25)(6007,"span",26),Ux(6008," modalDisclaimerGroupTitle"),Ul(6009,"br"),ng()()(),wl(6010,"td",21)(6011,"code",27),Ux(6012,"string"),ng()(),wl(6013,"td",24)(6014,"em")(6015,"strong"),Ux(6016,"(opcional)"),ng()(),wl(6017,"p"),Ux(6018,"Texto exibido no t\xEDtulo do disclaimer."),ng()()(),wl(6019,"tr",16)(6020,"td",17)(6021,"div",25)(6022,"span",26),Ux(6023," modalPlaceholder"),Ul(6024,"br"),ng()()(),wl(6025,"td",21)(6026,"code",27),Ux(6027,"string"),ng()(),wl(6028,"td",24)(6029,"em")(6030,"strong"),Ux(6031,"(opcional)"),ng()(),wl(6032,"p"),Ux(6033,"Texto exibido no placeholder do input da modal."),ng()()(),wl(6034,"tr",16)(6035,"td",17)(6036,"div",25)(6037,"span",26),Ux(6038," modalPrimaryActionLabel"),Ul(6039,"br"),ng()()(),wl(6040,"td",21)(6041,"code",27),Ux(6042,"string"),ng()(),wl(6043,"td",24)(6044,"em")(6045,"strong"),Ux(6046,"(opcional)"),ng()(),wl(6047,"p"),Ux(6048,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),ng()()(),wl(6049,"tr",16)(6050,"td",17)(6051,"div",25)(6052,"span",26),Ux(6053," modalSecondaryActionLabel"),Ul(6054,"br"),ng()()(),wl(6055,"td",21)(6056,"code",27),Ux(6057,"string"),ng()(),wl(6058,"td",24)(6059,"em")(6060,"strong"),Ux(6061,"(opcional)"),ng()(),wl(6062,"p"),Ux(6063,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),ng()()(),wl(6064,"tr",16)(6065,"td",17)(6066,"div",25)(6067,"span",26),Ux(6068," modalTableLoadMoreData"),Ul(6069,"br"),ng()()(),wl(6070,"td",21)(6071,"code",27),Ux(6072,"string"),ng()(),wl(6073,"td",24)(6074,"em")(6075,"strong"),Ux(6076,"(opcional)"),ng()(),wl(6077,"p"),Ux(6078,"Label do "),wl(6079,"code"),Ux(6080,"button"),ng(),Ux(6081," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),ng()()(),wl(6082,"tr",16)(6083,"td",17)(6084,"div",25)(6085,"span",26),Ux(6086," modalTableLoadingData"),Ul(6087,"br"),ng()()(),wl(6088,"td",21)(6089,"code",27),Ux(6090,"string"),ng()(),wl(6091,"td",24)(6092,"em")(6093,"strong"),Ux(6094,"(opcional)"),ng()(),wl(6095,"p"),Ux(6096,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),ng()()(),wl(6097,"tr",16)(6098,"td",17)(6099,"div",25)(6100,"span",26),Ux(6101," modalTableNoColumns"),Ul(6102,"br"),ng()()(),wl(6103,"td",21)(6104,"code",27),Ux(6105,"string"),ng()(),wl(6106,"td",24)(6107,"em")(6108,"strong"),Ux(6109,"(opcional)"),ng()(),wl(6110,"p"),Ux(6111,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),ng()()(),wl(6112,"tr",16)(6113,"td",17)(6114,"div",25)(6115,"span",26),Ux(6116," modalTableNoData"),Ul(6117,"br"),ng()()(),wl(6118,"td",21)(6119,"code",27),Ux(6120,"string"),ng()(),wl(6121,"td",24)(6122,"em")(6123,"strong"),Ux(6124,"(opcional)"),ng()(),wl(6125,"p"),Ux(6126,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),ng()()(),wl(6127,"tr",16)(6128,"td",17)(6129,"div",25)(6130,"span",26),Ux(6131," modalTitle"),Ul(6132,"br"),ng()()(),wl(6133,"td",21)(6134,"code",27),Ux(6135,"string"),ng()(),wl(6136,"td",24)(6137,"em")(6138,"strong"),Ux(6139,"(opcional)"),ng()(),wl(6140,"p"),Ux(6141,"Texto exibido no t\xEDtulo da modal."),ng()()(),wl(6142,"tr",16)(6143,"td",17)(6144,"div",25)(6145,"span",26),Ux(6146," search"),Ul(6147,"br"),ng()()(),wl(6148,"td",21)(6149,"code",27),Ux(6150,"string"),ng()(),wl(6151,"td",24)(6152,"em")(6153,"strong"),Ux(6154,"(opcional)"),ng()(),wl(6155,"p"),Ux(6156,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),ng()()()(),wl(6157,"h4",43)(6158,"code",5),Ux(6159,"PoLookupResponseApi"),ng()(),wl(6160,"div",2)(6161,"p"),Ux(6162,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),ng()(),wl(6163,"h4",12),Ux(6164,"Propriedades"),ng(),wl(6165,"table",13)(6166,"tr",14)(6167,"th",15),Ux(6168,"Nome"),ng(),wl(6169,"th",15),Ux(6170,"Tipo"),ng(),wl(6171,"th",15),Ux(6172,"Descri\xE7\xE3o"),ng()(),wl(6173,"tr",16)(6174,"td",17)(6175,"div",25)(6176,"span",26),Ux(6177," hasNext"),Ul(6178,"br"),ng()()(),wl(6179,"td",21)(6180,"code",29),Ux(6181,"boolean"),ng()(),wl(6182,"td",24)(6183,"p"),Ux(6184,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),ng()()(),wl(6185,"tr",16)(6186,"td",17)(6187,"div",25)(6188,"span",26),Ux(6189," items"),Ul(6190,"br"),ng()()(),wl(6191,"td",21)(6192,"code",85),Ux(6193,"Array<object>"),ng()(),wl(6194,"td",24)(6195,"p"),Ux(6196,"Lista de itens retornados."),ng()()()(),wl(6197,"h3"),Ux(6198,"Enums"),ng(),wl(6199,"h4",4)(6200,"code",5),Ux(6201,"PoTableColumnSpacing"),ng()(),wl(6202,"div",2)(6203,"p"),Ux(6204,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),wl(6205,"strong"),Ux(6206,"p-spacing"),ng(),Ux(6207,") do po-table."),ng()(),wl(6208,"h4",12),Ux(6209,"Propriedades"),ng(),wl(6210,"table",13)(6211,"tr",14)(6212,"th",15),Ux(6213,"Nome"),ng(),wl(6214,"th",15),Ux(6215,"Descri\xE7\xE3o"),ng()(),wl(6216,"tr",16)(6217,"td",17)(6218,"div",25)(6219,"span",26),Ux(6220," ExtraSmall"),Ul(6221,"br"),ng()()(),wl(6222,"td",24)(6223,"p"),Ux(6224,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),ng()()(),wl(6225,"tr",16)(6226,"td",17)(6227,"div",25)(6228,"span",26),Ux(6229," Small"),Ul(6230,"br"),ng()()(),wl(6231,"td",24)(6232,"p"),Ux(6233,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),ng()()(),wl(6234,"tr",16)(6235,"td",17)(6236,"div",25)(6237,"span",26),Ux(6238," Medium"),Ul(6239,"br"),ng()()(),wl(6240,"td",24)(6241,"p"),Ux(6242,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),ng()()(),wl(6243,"tr",16)(6244,"td",17)(6245,"div",25)(6246,"span",26),Ux(6247," Large"),Ul(6248,"br"),ng()()(),wl(6249,"td",24)(6250,"p"),Ux(6251,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut$1("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-lookup-doc"),ng(),wl(4,"po-tab",3),ut$1("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),ng()()()),l&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,Ae,ze,Ne,Re,Ue,Je,$e],encapsulation:2})}return a})();var yt=[{path:"",component:Ye}],Ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(yt),vL]})}return a})();var Yi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,Ke]})}return a})();export{Yi as DocPoLookupModule};