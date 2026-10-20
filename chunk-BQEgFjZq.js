import{r as t,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ca as zw,Dr as O$1,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Jr as Vk,Ki as px,Kn as Ag,Lr as SF,Pi as mt$1,Pr as R,Ri as nu,Rt as _oe,Sr as Mm,Vi as p,Vr as TF,Wr as Tv,X as Lf,Xi as sO,Xr as Y,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,da as wO,dn as moe,dt as Sae,ea as uO,fa as we,fi as fT,ga as xx,ht as Tn,i as _a,ir as EF,ji as mO,k as Ec,ki as kF,mi as gO,mn as ni,nn as goe,or as EO,pa as wg,pn as nb,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,ur as Fx,v as $ae,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ae=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`PO Lookup`]],template:function(l,o){l&1&&nu(0,`po-lookup`,0)},dependencies:[nb],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup Basic`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-basic/sample-po-lookup-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-basic/sample-po-lookup-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-lookup-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,tt,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ae],encapsulation:2,changeDetection:1})}return a})();var O=(()=>{class a{httpClient=p(zw);url=`https://po-sample-api.onrender.com/v1/heroes`;getFilteredItems(r$1){let m=r$1,{filterParams:l,advancedFilters:o}=m,c=t(m,[`filterParams`,`advancedFilters`]),p=r(r(r({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Oe=(()=>{class a{sampleFilterService=p(O);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Tn.Medium;columnsOptions=[{value:`id`,label:`Id`},{value:`name`,label:`Name`},{value:`email`,label:`Email`}];fieldLabelOptions=[{value:`label`,label:`Label`},...this.columnsOptions];fieldValueOptions=[{value:`value`,label:`Value`},...this.columnsOptions];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`infiniteScroll`,label:`Infinite Scroll`},{value:`multiple`,label:`Multiple`},{value:`autoHeight`,label:`Auto Height`},{value:`hideColumnsManager`,label:`Hide Columns Manager`},{value:`textWrap`,label:`Text Wrap`},{value:`virtualScroll`,label:`Virtual Sroll`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];columnsDefinition={id:{property:`id`,label:`Id`},name:{property:`name`,label:`Name`},email:{property:`email`,label:`Email`}};typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText=``,this.columnsName=[`id`,`name`],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel=`name`,this.fieldValue=`id`,this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.customAdvancedFilters=[],this.size=`medium`}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-labs`]],standalone:!1,features:[we([O])],decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`lookup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-error`,`p-keydown`,`p-selected`,`ngModel`,`p-helper`,`p-advanced-filters`,`p-auto-height`,`p-clean`,`p-columns`,`p-disabled`,`p-field-format`,`p-field-label`,`p-filter-service`,`p-field-value`,`p-help`,`p-hide-columns-manager`,`p-infinite-scroll`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-spacing`,`p-text-wrap`,`p-label-text-wrap`,`p-virtual-scroll`,`p-error-limit`,`p-compact-label`],[`p-no-border`,`true`,`p-no-padding`,`true`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-12`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columnsName`,`p-columns`,`3`,`p-label`,`Columns`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`fieldLabel`,`p-label`,`Field Label`,`p-required`,``,1,`po-md-6`,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`fieldValue`,`p-label`,`Field Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }`,`p-label`,`Literals`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`formatField`,`p-label`,`Field Format`,`p-help`,`Ex.: ["id", "name"]`,1,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`advancedFilters`,`p-help`,`Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]`,`p-label`,`Advanced Filters`,`p-rows`,`4`,1,`po-md-12`,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let c=Sx();jc(0,`po-lookup`,1),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.lookup,m)||(o.lookup=m),v_(m)}),mt$1(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-error`,function(){return o.changeEvent(`p-error`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)})(`p-selected`,function(){return o.changeEvent(`p-selected`)}),wg(),nu(1,`po-divider`),jc(2,`po-container`,2)(3,`div`,3),nu(4,`po-info`,4)(5,`po-info`,5),wg()(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`po-input`,6),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.label,m)||(o.label=m),v_(m)}),wg(),jc(10,`po-checkbox-group`,7),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.columnsName,m)||(o.columnsName=m),v_(m)}),mt$1(`p-change`,function(){return o.updateColumns()}),wg(),jc(11,`po-select`,8),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.fieldLabel,m)||(o.fieldLabel=m),v_(m)}),wg(),jc(12,`po-select`,9),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.fieldValue,m)||(o.fieldValue=m),v_(m)}),wg(),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.filterService,m)||(o.filterService=m),v_(m)}),wg(),jc(14,`po-input`,11),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),v_(m)}),wg(),jc(15,`po-input`,12),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.help,m)||(o.help=m),v_(m)}),wg(),jc(16,`po-input`,13),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.helperText,m)||(o.helperText=m),v_(m)}),wg(),jc(17,`po-input`,14),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.placeholder,m)||(o.placeholder=m),v_(m)}),wg(),jc(18,`po-input`,15),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.literals,m)||(o.literals=m),v_(m)}),mt$1(`p-change`,function(){return o.changeLiterals()}),wg(),jc(19,`po-input`,16),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.formatField,m)||(o.formatField=m),v_(m)}),mt$1(`p-change`,function(m){return o.onFieldFormatChange(m)}),wg(),jc(20,`po-checkbox-group`,17),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.properties,m)||(o.properties=m),v_(m)}),wg(),jc(21,`po-radio-group`,18),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.spacing,m)||(o.spacing=m),v_(m)}),wg(),jc(22,`po-radio-group`,19),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.size,m)||(o.size=m),v_(m)}),wg(),jc(23,`po-textarea`,20),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.advancedFilters,m)||(o.advancedFilters=m),v_(m)}),mt$1(`p-change`,function(){return o.changeAdvancedFilters()}),wg(),jc(24,`div`,3)(25,`po-button`,21),mt$1(`p-click`,function(){return o.restore()}),wg()()()}l&2&&(ib(`ngModel`,o.lookup),jE(`p-helper`,o.helperText)(`p-advanced-filters`,o.customAdvancedFilters)(`p-auto-height`,o.properties.includes(`autoHeight`))(`p-clean`,o.properties.includes(`clean`))(`p-columns`,o.columns)(`p-disabled`,o.properties.includes(`disabled`))(`p-field-format`,o.fieldFormat)(`p-field-label`,o.fieldLabel)(`p-filter-service`,o.filterService||o.sampleFilterService)(`p-field-value`,o.fieldValue)(`p-help`,o.help)(`p-hide-columns-manager`,o.properties.includes(`hideColumnsManager`))(`p-infinite-scroll`,o.properties.includes(`infiniteScroll`))(`p-label`,o.label)(`p-literals`,o.customLiterals)(`p-loading`,o.properties.includes(`loading`))(`p-multiple`,o.properties.includes(`multiple`))(`p-no-autocomplete`,o.properties.includes(`noAutocomplete`))(`p-optional`,o.properties.includes(`optional`))(`p-placeholder`,o.placeholder)(`p-required`,o.properties.includes(`required`))(`p-field-error-message`,o.fieldErrorMessage)(`p-show-required`,o.properties.includes(`showRequired`))(`p-size`,o.size)(`p-spacing`,o.spacing)(`p-text-wrap`,o.properties.includes(`textWrap`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-virtual-scroll`,o.properties.includes(`virtualScroll`))(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),t0(),rg(4),jE(`p-value`,o.lookup),rg(),jE(`p-value`,o.event),rg(4),ib(`ngModel`,o.label),t0(),rg(),ib(`ngModel`,o.columnsName),jE(`p-options`,o.columnsOptions),t0(),rg(),ib(`ngModel`,o.fieldLabel),jE(`p-options`,o.fieldLabelOptions),t0(),rg(),ib(`ngModel`,o.fieldValue),jE(`p-options`,o.fieldValueOptions),t0(),rg(),ib(`ngModel`,o.filterService),t0(),rg(),ib(`ngModel`,o.fieldErrorMessage),t0(),rg(),ib(`ngModel`,o.help),t0(),rg(),ib(`ngModel`,o.helperText),t0(),rg(),ib(`ngModel`,o.placeholder),t0(),rg(),ib(`ngModel`,o.literals),t0(),rg(),ib(`ngModel`,o.formatField),t0(),rg(),ib(`ngModel`,o.properties),jE(`p-options`,o.propertiesOptions),t0(),rg(),ib(`ngModel`,o.spacing),jE(`p-options`,o.typeSpacing),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0(),rg(),ib(`ngModel`,o.advancedFilters),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Ec,Lf,m5,A5,nb,Ote,moe,goe,_oe],encapsulation:2,changeDetection:1})}return a})();var ot=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup Labs`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-labs/sample-po-lookup-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-lookup
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
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-compact-label]="properties?.includes('compactLabel')"
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-labs/sample-po-lookup-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-labs`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ot,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Oe],encapsulation:2,changeDetection:1})}return a})();var lt=()=>({modalTitle:`Heroes available for mission`});var Ve=(()=>{class a{service=p(O);notification=p(zu);hero;vehicle;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];advancedFilters=[{property:`nickname`,divider:`Hero Informations`,optional:!0,gridColumns:6,label:`Hero`},{property:`name`,optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?`with vehicle: `+this.vehicle:``}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero`]],standalone:!1,features:[we([O])],decls:10,vars:11,consts:[[`f`,`ngForm`],[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[`name`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-field-format`,`p-filter-service`,`p-hide-columns-manager`,`p-advanced-filters`,`p-literals`],[`name`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){if(l&1){let c=Sx();jc(0,`div`,1),nu(1,`po-info`,2),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-lookup`,3),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.hero,m)||(o.hero=m),v_(m)}),wg(),jc(7,`po-select`,4),JN(),ob(`ngModelChange`,function(m){return y_(c),sO(o.vehicle,m)||(o.vehicle=m),v_(m)}),wg()(),jc(8,`div`,1)(9,`po-button`,5),mt$1(`p-click`,function(){return o.startMission()}),wg()()()}if(l&2){let c=Fx(4);rg(6),ib(`ngModel`,o.hero),jE(`p-columns`,o.columns)(`p-field-format`,o.fieldFormat)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,gO(10,lt)),t0(),rg(),ib(`ngModel`,o.vehicle),jE(`p-options`,o.vehicles),t0(),rg(2),jE(`p-disabled`,c.form.invalid||c.form.pending)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,nb,moe,_oe],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup - Hero`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-hero/sample-po-lookup-hero.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-hero/sample-po-lookup-hero.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-hero`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,mt,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ve],encapsulation:2,changeDetection:1})}return a})();var pt=()=>[`nickname`,`label`];var st=()=>({modalTitle:`Heroes available for mission`});var He=(()=>{class a{service=p(O);notification=p(zu);formBuilder=p(MK);formMission;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`}];vehicles=[{label:`Airplane`,value:`airplane`},{label:`Boat`,value:`boat`},{label:`Car`,value:`car`},{label:`Helicopter`,value:`helicopter`},{label:`Motorcycle`,value:`motorcycle`},{label:`Rocket`,value:`rocket`},{label:`Spaceship`,value:`spaceship`},{label:`Submarine`,value:`submarine`},{label:`Truck`,value:`truck`}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,Mm.required],vehicle:[null,Mm.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get(`hero`).value,l=this.formMission.get(`vehicle`).value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?`with vehicle: `+l:``}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form`]],standalone:!1,features:[we([O])],decls:9,vars:9,consts:[[1,`po-row`],[`p-label`,`New mission found`,`p-value`,`Objective: Stop an asteroid collision on Earth`,1,`po-lg-6`],[3,`formGroup`],[`name`,`hero`,`formControlName`,`hero`,`p-field-label`,`label`,`p-field-value`,`label`,`p-help`,`Select hero for mission`,`p-label`,`Hero`,`p-required`,``,1,`po-md-6`,3,`p-columns`,`p-field-format`,`p-filter-service`,`p-literals`],[`name`,`vehicle`,`formControlName`,`vehicle`,`p-help`,`Select a vehicle for the hero`,`p-label`,`Vehicle`,`p-placeholder`,`None`,1,`po-md-6`,3,`p-options`],[`p-label`,`Start Mission`,1,`po-md-6`,3,`p-click`,`p-disabled`]],template:function(l,o){l&1&&(jc(0,`div`,0),nu(1,`po-info`,1),wg(),nu(2,`po-divider`),jc(3,`form`,2)(4,`div`,0)(5,`po-lookup`,3),JN(),wg(),jc(6,`po-select`,4),JN(),wg()(),jc(7,`div`,0)(8,`po-button`,5),mt$1(`p-click`,function(){return o.startMission()}),wg()()()),l&2&&(rg(3),jE(`formGroup`,o.formMission),rg(2),jE(`p-columns`,o.columns)(`p-field-format`,gO(7,pt))(`p-filter-service`,o.service)(`p-literals`,gO(8,st)),t0(),rg(),jE(`p-options`,o.vehicles),t0(),rg(2),jE(`p-disabled`,o.formMission.invalid||o.formMission.pending))},dependencies:[wK,CK,EK,SF,kF,ni,Lf,nb,moe,_oe],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-hero-reactive-form-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup - Hero Reactive Form`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-hero-reactive-form`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ut,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,He],encapsulation:2,changeDetection:1})}return a})();var xt=()=>({modalTitle:`Select a hero`});var Be=(()=>{class a{service=p(O);hero;columns=[{property:`nickname`,label:`Hero`},{property:`name`,label:`Name`},{property:`email`,label:`E-mail`}];advancedFilters=[{property:`name`,label:`Name`,gridColumns:6},{property:`email`,label:`E-mail`,gridColumns:6},{property:`nickname`,label:`Hero`,gridColumns:6,initValue:`Hulk`,forceOptionsComponentType:$ae.radioGroup,options:[{label:`Batman`,value:`Batman`},{label:`Superman`,value:`Superman`},{label:`Hulk`,value:`Hulk`},{label:`Thor`,value:`Thor`}]}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-advanced-filter`]],standalone:!1,features:[we([O])],decls:7,vars:7,consts:[[1,`po-row`],[`p-label`,`Advanced filter with initial value`,`p-value`,`Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result.`,1,`po-lg-12`],[`name`,`hero`,`p-field-label`,`name`,`p-field-value`,`nickname`,`p-help`,`Select a hero`,`p-label`,`Hero`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-advanced-filters`,`p-literals`],[`p-label`,`Selected value`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(jc(0,`div`,0),nu(1,`po-info`,1),wg(),nu(2,`po-divider`),jc(3,`div`,0)(4,`po-lookup`,2),JN(),ob(`ngModelChange`,function(p){return sO(o.hero,p)||(o.hero=p),p}),wg()(),jc(5,`div`,0),nu(6,`po-info`,3),wg()),l&2&&(rg(4),ib(`ngModel`,o.hero),jE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-advanced-filters`,o.advancedFilters)(`p-literals`,gO(6,xt)),t0(),rg(2),jE(`p-value`,o.hero||`-`))},dependencies:[CK,TF,Lf,nb,_oe],encapsulation:2})}return a})();var bt=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-advanced-filter-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup - Advanced Filter`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-info
    class="po-lg-12"
    p-label="Advanced filter with initial value"
    p-value="Click on the magnifying glass, then on 'Advanced search': the Hero field is already filled with 'Hulk'. Just apply the filter to get the result."
  >
  </po-info>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="hero"
    [(ngModel)]="hero"
    p-field-label="name"
    p-field-value="nickname"
    p-help="Select a hero"
    p-label="Hero"
    p-clean
    [p-columns]="columns"
    [p-filter-service]="service"
    [p-advanced-filters]="advancedFilters"
    [p-literals]="{ 'modalTitle': 'Select a hero' }"
  >
  </po-lookup>
</div>

<div class="po-row">
  <po-info class="po-md-6" p-label="Selected value" [p-value]="hero || '-'"> </po-info>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-advanced-filter/sample-po-lookup-advanced-filter.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject } from '@angular/core';

import { ForceOptionComponentEnum, PoLookupAdvancedFilter, PoLookupColumn } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-advanced-filter',
  templateUrl: './sample-po-lookup-advanced-filter.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupAdvancedFilterComponent {
  service = inject(SamplePoLookupService);

  hero: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' },
    { property: 'email', label: 'E-mail' }
  ];

  /**
   * A propriedade \`initValue\` define o valor inicial de cada campo ao abrir a busca avan\xE7ada.
   * Neste exemplo a busca avan\xE7ada j\xE1 \xE9 aberta filtrando o her\xF3i \`Hulk\`.
   */
  public readonly advancedFilters: Array<PoLookupAdvancedFilter> = [
    { property: 'name', label: 'Name', gridColumns: 6 },
    { property: 'email', label: 'E-mail', gridColumns: 6 },
    {
      property: 'nickname',
      label: 'Hero',
      gridColumns: 6,
      initValue: 'Hulk',
      forceOptionsComponentType: ForceOptionComponentEnum.radioGroup,
      options: [
        { label: 'Batman', value: 'Batman' },
        { label: 'Superman', value: 'Superman' },
        { label: 'Hulk', value: 'Hulk' },
        { label: 'Thor', value: 'Thor' }
      ]
    }
  ];
}
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-advanced-filter`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,bt,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Be],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{http=p(zw);baseUrl=`https://swapi.dev/api`;filmsUrl=`https://swapi.dev/api/films/`;getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(Y(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(Y(o=>o.results[0]))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();function vt(a,qt){if(a&1&&(jc(0,`div`,0),nu(1,`po-table`,3),wg()),a&2){let r=xx();rg(),jE(`p-columns`,r.filmColumns)(`p-items`,r.filmItemsFiltered)(`p-sort`,!0)(`p-hide-table-search`,!1)}}var We=(()=>{class a{filterService=p(se);entity;filmItemsFiltered;filterParams=`people`;characterColumns=[{property:`name`,label:`Name`},{property:`gender`,label:`Gender`},{property:`height`,label:`Height`},{property:`mass`,label:`Mass`}];entities=[{label:`Character`,value:`people`},{label:`Planet`,value:`planets`},{label:`Starship`,value:`starships`}];filmColumns=[{property:`episode_id`,label:`Episode id`},{property:`title`,label:`Title`},{property:`director`,label:`Director`},{property:`producer`,label:`Producer`},{property:`release_date`,label:`Release date`,type:`date`}];planetsColumns=[{property:`name`,label:`Name`},{property:`diameter`,label:`Diameter`},{property:`population`,label:`Population`},{property:`climate`,label:`Climate`}];starshipsColumns=[{property:`name`,label:`Name`},{property:`passengers`,label:`Passengers`},{property:`max_atmosphering_speed`,label:`Max Speed`},{property:`consumables`,label:`Consumables`}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case`people`:return this.characterColumns;case`planets`:return this.planetsColumns;case`starships`:return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case`people`:return`character`;case`planets`:return`planet`;case`starships`:return`starship`}}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-sw-films`]],standalone:!1,features:[we([se])],decls:7,vars:14,consts:[[1,`po-row`],[`name`,`filterParams`,`p-label`,`Choose the entity of SW to search`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`entity`,`p-field-label`,`name`,`p-field-value`,`name`,1,`po-md-12`,3,`ngModelChange`,`p-selected`,`ngModel`,`p-help`,`p-label`,`p-columns`,`p-filter-params`,`p-filter-service`,`p-infinite-scroll`],[1,`po-sm-12`,3,`p-columns`,`p-items`,`p-sort`,`p-hide-table-search`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-radio-group`,1),JN(),ob(`ngModelChange`,function(p){return sO(o.filterParams,p)||(o.filterParams=p),p}),wg()(),nu(2,`po-divider`),jc(3,`div`,0)(4,`po-lookup`,2),EO(5,`titlecase`),JN(),ob(`ngModelChange`,function(p){return sO(o.entity,p)||(o.entity=p),p}),mt$1(`p-selected`,function(p){return o.onSelected(p)}),wg()(),px(6,vt,2,4,`div`,0)),l&2&&(rg(),ib(`ngModel`,o.filterParams),jE(`p-options`,o.entities),t0(),rg(3),jE(`p-help`,uO(`Select a `,o.entityLabel,` to see the list of movies in which it participated`))(`p-label`,uO(``,wO(5,12,o.entityLabel),` of Star Wars`)),ib(`ngModel`,o.entity),jE(`p-columns`,o.entityColumns)(`p-filter-params`,o.filterParams)(`p-filter-service`,o.filterService)(`p-infinite-scroll`,!0),t0(),rg(2),mx(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[CK,TF,Lf,nb,Ote,I5,Vk],encapsulation:2,changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-sw-films-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup - Star Wars films`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-sw-films`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ft,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,We],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{http=p(zw);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(fT(`items`))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var Qe=(()=>{class a{service=p(Ge);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:`value`,label:`id`},{property:`label`,label:`Name`}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,`_blank`)}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-multiple`]],standalone:!1,decls:4,vars:8,consts:[[1,`po-row`],[`name`,`lookup`,`p-field-label`,`label`,`p-field-value`,`value`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-multiple`],[1,`po-md-6`,`po-mt-4`],[3,`p-columns`,`p-items`,`p-height`,`p-striped`,`p-hide-columns-manager`,`p-loading`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-lookup`,1),JN(),ob(`ngModelChange`,function(p){return sO(o.multiLookup,p)||(o.multiLookup=p),p}),mt$1(`p-change`,function(p){return o.changeOptions(p)}),wg(),jc(2,`po-container`,2),nu(3,`po-table`,3),wg()()),l&2&&(rg(),ib(`ngModel`,o.multiLookup),jE(`p-multiple`,!0),t0(),rg(2),jE(`p-columns`,o.columns)(`p-items`,o.heroes)(`p-height`,220)(`p-striped`,!0)(`p-hide-columns-manager`,!0)(`p-loading`,o.loading))},dependencies:[CK,TF,Ec,nb,I5],encapsulation:2,changeDetection:1})}return a})();var yt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-multiple-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup - Multiple`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-multiple`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,yt,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Qe],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{items=[{value:1,name:`Maria Silva`,cpf:`12345678901`,phone:`11999887766`,cep:`89201000`,plate:`ABC1D23`},{value:2,name:`João Santos`,cpf:`98765432100`,phone:`21988776655`,cep:`01310100`,plate:`XYZ4E56`},{value:3,name:`Ana Oliveira`,cpf:`11122233344`,phone:`47912345678`,cep:`80010000`,plate:`MNO7F89`},{value:4,name:`Carlos Souza`,cpf:`55566677788`,phone:`41987654321`,cep:`88010000`,plate:`QRS2G01`},{value:5,name:`Fernanda Lima`,cpf:`99988877766`,phone:`48991234567`,cep:`89010000`,plate:`DEF3H45`}];getFilteredItems(r){let l=r.filter?r.filter.toLowerCase():``,o=l?this.items.filter(c=>c.name.toLowerCase().includes(l)||c.cpf.includes(l)||c.phone.includes(l)||c.cep.includes(l)||c.plate.toLowerCase().includes(l)):[...this.items];return O$1({items:o,hasNext:!1}).pipe(Tv(200))}getObjectByValue(r){return Array.isArray(r)?O$1(this.items.filter(l=>r.includes(l.value))).pipe(Tv(200)):O$1(this.items.find(l=>String(l.value)===String(r))).pipe(Tv(200))}static ɵfac=function(l){return new(l||a)};static ɵprov=R({token:a,factory:a.ɵfac})}return a})();var Ye=(()=>{class a{service=p(ce);person;columns=[{property:`name`,label:`Nome`},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`},{property:`phone`,label:`Telefone`,mask:`(99) 99999-9999`},{property:`cep`,label:`CEP`,mask:`99999-999`},{property:`plate`,label:`Placa`,mask:`@@@ 9w99`}];static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-mask`]],standalone:!1,features:[we([ce])],decls:2,vars:4,consts:[[1,`po-row`],[`name`,`person`,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Pessoa`,`p-help`,`Selecione uma pessoa para ver as máscaras aplicadas nas colunas`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-filter-service`,`p-hide-columns-manager`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-lookup`,1),JN(),ob(`ngModelChange`,function(p){return sO(o.person,p)||(o.person=p),p}),wg()()),l&2&&(rg(),ib(`ngModel`,o.person),jE(`p-columns`,o.columns)(`p-filter-service`,o.service)(`p-hide-columns-manager`,!0),t0())},dependencies:[CK,TF,nb],encapsulation:2})}return a})();var Ft=a=>({"docs-sample-code-tabs":a});var Ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-mask-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Lookup - Mask`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-lookup-mask/sample-po-lookup-mask.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-lookup-mask/sample-po-lookup-mask.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-lookup-mask/sample-po-lookup-mask.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-lookup-mask`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ft,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ye],encapsulation:2,changeDetection:1})}return a})();var Xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-lookup-doc`]],standalone:!1,decls:6548,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://angular.io/guide/form-validation#creating-asynchronous-validators`],[`href`,`https://po-ui.io/guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`((value)`,`=>`,`string)`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`href`,`https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`{`,`[key:`,`string]:`,`any;`,`}`],[`pan`,``,1,`docs-api-property-type`,`Array<object>`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoLookupComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),jc(24,`code`),iO(25,`po-lookup`),wg(),iO(26,` permite que o usuário digite um valor e pressione a tecla `),jc(27,`em`),iO(28,`TAB`),wg(),iO(29,` para
buscar um registro.`),wg(),jc(30,`blockquote`)(31,`p`),iO(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),wg()(),jc(33,`blockquote`)(34,`p`),iO(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),jc(36,`a`,6),iO(37,`modelo`),wg(),iO(38,` como `),jc(39,`code`),iO(40,`pending`),wg(),iO(41,`.`),wg()(),jc(42,`p`),iO(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),jc(44,`code`),iO(45,`po-select`),wg(),iO(46,` ou o `),jc(47,`code`),iO(48,`po-combo`),wg(),iO(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(50,`a`,7),iO(51,`Guia de implementação das APIs TOTVS`),wg(),iO(52,`.`),wg(),jc(53,`p`),iO(54,`Importante:`),wg(),jc(55,`ul`)(56,`li`)(57,`p`),iO(58,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),wg(),jc(59,`pre`)(60,`code`),iO(61,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),wg()()(),jc(62,`li`)(63,`p`),iO(64,`Ao utilizar a propriedade `),jc(65,`code`),iO(66,`p-advanced-filters`),wg(),iO(67,`, a janela de busca avan\xE7ada \xE9 constru\xEDda
a partir do `),jc(68,`code`),iO(69,`po-dynamic-form`),wg(),iO(70,`. Em aplicações que não importam o `),jc(71,`code`),iO(72,`PoModule`),wg(),iO(73,`, como projetos
`),jc(74,`em`),iO(75,`standalone`),wg(),iO(76,` ou que utilizam módulos específicos, é necessário importar o `),jc(77,`code`),iO(78,`PoDynamicModule`),wg(),iO(79,`
no componente ou m\xF3dulo onde o `),jc(80,`code`),iO(81,`po-lookup`),wg(),iO(82,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),jc(83,`code`),iO(84,`NG0201: No provider found for _TitleCasePipe`),wg(),iO(85,` ao abrir a busca avançada.`),wg(),jc(86,`pre`)(87,`code`),iO(88,`import { PoDynamicModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  standalone: true,
  imports: [PoFieldModule, PoDynamicModule]
})
export class MyComponent {}
`),wg()()()(),jc(89,`h4`),iO(90,`Tokens customizáveis`),wg(),jc(91,`p`),iO(92,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(93,`blockquote`)(94,`p`),iO(95,`Para maiores informações, acesse o guia `),jc(96,`a`,8),iO(97,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(98,`.`),wg()(),jc(99,`table`)(100,`thead`)(101,`tr`)(102,`th`),iO(103,`Propriedade`),wg(),jc(104,`th`),iO(105,`Descrição`),wg(),jc(106,`th`),iO(107,`Valor Padrão`),wg()()(),jc(108,`tbody`)(109,`tr`)(110,`td`)(111,`strong`),iO(112,`Default Values`),wg()(),nu(113,`td`)(114,`td`),wg(),jc(115,`tr`)(116,`td`)(117,`code`),iO(118,`--font-family`),wg()(),jc(119,`td`),iO(120,`Família tipográfica usada`),wg(),jc(121,`td`)(122,`code`),iO(123,`var(--font-family-theme)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),iO(127,`--font-size`),wg()(),jc(128,`td`),iO(129,`Tamanho da fonte`),wg(),jc(130,`td`)(131,`code`),iO(132,`var(--font-size-default)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),iO(136,`--text-color-placeholder`),wg()(),jc(137,`td`),iO(138,`Cor do texto no placeholder`),wg(),jc(139,`td`)(140,`code`),iO(141,`var(--color-neutral-light-30)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),iO(145,`--color`),wg()(),jc(146,`td`),iO(147,`Cor principal do lookup`),wg(),jc(148,`td`)(149,`code`),iO(150,`var(--color-neutral-dark-70)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),iO(154,`--border-radius`),wg()(),jc(155,`td`),iO(156,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(157,`td`)(158,`code`),iO(159,`var(--border-radius-md)`),wg()()(),jc(160,`tr`)(161,`td`)(162,`code`),iO(163,`--background`),wg()(),jc(164,`td`),iO(165,`Cor de background`),wg(),jc(166,`td`)(167,`code`),iO(168,`var(--color-neutral-light-05)`),wg()()(),jc(169,`tr`)(170,`td`)(171,`code`),iO(172,`--text-color`),wg()(),jc(173,`td`),iO(174,`Cor do texto`),wg(),jc(175,`td`)(176,`code`),iO(177,`var(--color-neutral-dark-90)`),wg()()(),jc(178,`tr`)(179,`td`)(180,`code`),iO(181,`--color-clear`),wg()(),jc(182,`td`),iO(183,`Cor principal do icone clear`),wg(),jc(184,`td`)(185,`code`),iO(186,`var(--color-action-default)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`strong`),iO(190,`Icon`),wg()(),nu(191,`td`)(192,`td`),wg(),jc(193,`tr`)(194,`td`)(195,`code`),iO(196,`--color-icon`),wg()(),jc(197,`td`),iO(198,`Cor principal do icone pesquisar`),wg(),jc(199,`td`)(200,`code`),iO(201,`var(--color-action-default)`),wg()()(),jc(202,`tr`)(203,`td`)(204,`strong`),iO(205,`Hover`),wg()(),nu(206,`td`)(207,`td`),wg(),jc(208,`tr`)(209,`td`)(210,`code`),iO(211,`--color-hover`),wg()(),jc(212,`td`),iO(213,`Cor principal no estado hover`),wg(),jc(214,`td`)(215,`code`),iO(216,`var(--color-brand-01-dark)`),wg()()(),jc(217,`tr`)(218,`td`)(219,`code`),iO(220,`--background-hover`),wg()(),jc(221,`td`),iO(222,`Cor de background no estado hover`),wg(),jc(223,`td`)(224,`code`),iO(225,`var(--color-brand-01-lightest)`),wg()()(),jc(226,`tr`)(227,`td`)(228,`strong`),iO(229,`Focused`),wg()(),nu(230,`td`)(231,`td`),wg(),jc(232,`tr`)(233,`td`)(234,`code`),iO(235,`--color-focused`),wg()(),jc(236,`td`),iO(237,`Cor principal no estado de focus`),wg(),jc(238,`td`)(239,`code`),iO(240,`var(--color-action-default)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`code`),iO(244,`--outline-color-focused`),wg()(),jc(245,`td`),iO(246,`Cor do outline do estado de focus`),wg(),jc(247,`td`)(248,`code`),iO(249,`var(--color-action-focus)`),wg()()(),jc(250,`tr`)(251,`td`)(252,`strong`),iO(253,`Disabled`),wg()(),nu(254,`td`)(255,`td`),wg(),jc(256,`tr`)(257,`td`)(258,`code`),iO(259,`--color-disabled`),wg()(),jc(260,`td`),iO(261,`Cor principal no estado disabled`),wg(),jc(262,`td`)(263,`code`),iO(264,`var(--color-action-disabled)`),wg()()(),jc(265,`tr`)(266,`td`)(267,`code`),iO(268,`--background-disabled`),wg()(),jc(269,`td`),iO(270,`Cor de background no estado disabled`),wg(),jc(271,`td`)(272,`code`),iO(273,`var(--color-neutral-light-20)`),wg()()(),jc(274,`tr`)(275,`td`)(276,`code`),iO(277,`--text-color-disabled`),wg()(),jc(278,`td`),iO(279,`Cor do texto quando campo está desabilitado`),wg(),jc(280,`td`)(281,`code`),iO(282,`var(--color-action-disabled)`),wg()()(),jc(283,`tr`)(284,`td`)(285,`strong`),iO(286,`Error`),wg()(),nu(287,`td`)(288,`td`),wg(),jc(289,`tr`)(290,`td`)(291,`code`),iO(292,`--color-error`),wg()(),jc(293,`td`),iO(294,`Cor de background no estado de requerido`),wg(),jc(295,`td`)(296,`code`),iO(297,`var(--color-feedback-negative-base)`),wg()()()()()(),jc(298,`div`,9)(299,`h4`,10),iO(300,`Seletor`),wg(),jc(301,`pre`,11),iO(302,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
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
`),wg()(),jc(303,`h4`,12),iO(304,`Propriedades`),wg(),jc(305,`table`,13)(306,`tr`,14)(307,`th`,15),iO(308,`Nome`),wg(),jc(309,`th`,15),iO(310,`Tipo`),wg(),jc(311,`th`,15),iO(312,`Padrão`),wg(),jc(313,`th`,15),iO(314,`Descrição`),wg()(),jc(315,`tr`,16)(316,`td`,17)(317,`div`,18)(318,`span`,19),iO(319,` (p-additional-help)`),nu(320,`br`),wg()(),jc(321,`div`,20),iO(322,`Deprecated`),wg()(),jc(323,`td`,21)(324,`code`,22),iO(325,`EventEmitter`),wg()(),jc(326,`td`,23),iO(327,`-`),wg(),jc(328,`td`,24)(329,`em`)(330,`strong`),iO(331,`(opcional)`),wg()(),jc(332,`p`),iO(333,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(334,`blockquote`)(335,`p`),iO(336,`Essa propriedade está `),jc(337,`strong`),iO(338,`depreciada`),wg(),iO(339,` e será removida na versão `),jc(340,`code`),iO(341,`23.x.x`),wg(),iO(342,`. Recomendamos utilizar a propriedade `),jc(343,`code`),iO(344,`p-helper`),wg(),iO(345,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(346,`tr`,16)(347,`td`,17)(348,`div`,25)(349,`span`,26),iO(350,` p-additional-help-tooltip`),nu(351,`br`),wg()(),jc(352,`div`,20),iO(353,`Deprecated`),wg()(),jc(354,`td`,21)(355,`code`,27),iO(356,`string`),wg()(),jc(357,`td`,23),iO(358,`-`),wg(),jc(359,`td`,24)(360,`em`)(361,`strong`),iO(362,`(opcional)`),wg()(),jc(363,`p`),iO(364,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(365,`code`),iO(366,`po-helper`),wg(),iO(367,`.
`),jc(368,`strong`),iO(369,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(370,`blockquote`)(371,`p`),iO(372,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(373,`blockquote`)(374,`p`),iO(375,`Essa propriedade está `),jc(376,`strong`),iO(377,`depreciada`),wg(),iO(378,` e será removida na versão `),jc(379,`code`),iO(380,`23.x.x`),wg(),iO(381,`. Recomendamos utilizar a propriedade `),jc(382,`code`),iO(383,`p-helper`),wg(),iO(384,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(385,`tr`,16)(386,`td`,17)(387,`div`,25)(388,`span`,26),iO(389,` p-advanced-filters`),nu(390,`br`),wg()()(),jc(391,`td`,21)(392,`code`,28),iO(393,`Array<PoLookupAdvancedFilter>`),wg()(),jc(394,`td`,23),iO(395,`-`),wg(),jc(396,`td`,24)(397,`em`)(398,`strong`),iO(399,`(opcional)`),wg()(),jc(400,`p`),iO(401,`Lista de objetos dos campos que serão criados na busca avançada.`),wg(),jc(402,`blockquote`)(403,`p`),iO(404,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),wg()(),jc(405,`blockquote`)(406,`p`),iO(407,`A busca avançada é construída a partir do `),jc(408,`code`),iO(409,`po-dynamic-form`),wg(),iO(410,`. Em aplicações que não importam o `),jc(411,`code`),iO(412,`PoModule`),wg(),iO(413,`,
como projetos `),jc(414,`em`),iO(415,`standalone`),wg(),iO(416,` ou que utilizam módulos específicos, é necessário importar o `),jc(417,`code`),iO(418,`PoDynamicModule`),wg(),iO(419,`
no componente ou m\xF3dulo onde o `),jc(420,`code`),iO(421,`po-lookup`),wg(),iO(422,` \xE9 utilizado, caso contr\xE1rio ser\xE1 lan\xE7ado o erro
`),jc(423,`code`),iO(424,`NG0201: No provider found for _TitleCasePipe`),wg(),iO(425,` ao abrir a busca avançada.`),wg()(),jc(426,`p`),iO(427,`Exemplo de URL com busca avançada:`),wg(),jc(428,`pre`)(429,`code`),iO(430,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),wg()(),jc(431,`p`),iO(432,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),wg(),jc(433,`pre`)(434,`code`),iO(435,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),wg()(),jc(436,`p`),iO(437,`Também é possível definir um valor inicial para os campos da busca avançada através da propriedade `),jc(438,`code`),iO(439,`initValue`),wg(),iO(440,`,
que ser\xE1 atribu\xEDdo ao campo na primeira abertura da janela de busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro,
os campos s\xE3o preenchidos com os valores filtrados:`),wg(),jc(441,`pre`)(442,`code`),iO(443,`advancedFilters: Array<PoLookupAdvancedFilter> = [
  { property: 'nickname', label: 'Apelido' },
  { property: 'active', label: 'Ativo', initValue: false, options: [
    { label: 'Sim', value: true },
    { label: 'N\xE3o', value: false }
  ]}
];
`),wg()()()(),jc(444,`tr`,16)(445,`td`,17)(446,`div`,25)(447,`span`,26),iO(448,` p-append-in-body`),nu(449,`br`),wg()()(),jc(450,`td`,21)(451,`code`,29),iO(452,`boolean`),wg()(),jc(453,`td`,23)(454,`p`)(455,`code`),iO(456,`false`),wg()()(),jc(457,`td`,24)(458,`em`)(459,`strong`),iO(460,`(opcional)`),wg()(),jc(461,`p`),iO(462,`Define que o popover (`),jc(463,`code`),iO(464,`p-helper`),wg(),iO(465,` e/ou `),jc(466,`code`),iO(467,`p-error-limit`),wg(),iO(468,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(469,`blockquote`)(470,`p`),iO(471,`Quando utilizado com `),jc(472,`code`),iO(473,`p-helper`),wg(),iO(474,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(475,`tr`,16)(476,`td`,17)(477,`div`,25)(478,`span`,26),iO(479,` p-auto-focus`),nu(480,`br`),wg()()(),jc(481,`td`,21)(482,`code`,29),iO(483,`boolean`),wg()(),jc(484,`td`,23)(485,`p`)(486,`code`),iO(487,`false`),wg()()(),jc(488,`td`,24)(489,`em`)(490,`strong`),iO(491,`(opcional)`),wg()(),jc(492,`p`),iO(493,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(494,`blockquote`)(495,`p`),iO(496,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(497,`tr`,16)(498,`td`,17)(499,`div`,25)(500,`span`,26),iO(501,` p-auto-height`),nu(502,`br`),wg()()(),jc(503,`td`,21)(504,`code`,29),iO(505,`boolean`),wg()(),jc(506,`td`,23)(507,`p`)(508,`code`),iO(509,`false`),wg()()(),jc(510,`td`,24)(511,`em`)(512,`strong`),iO(513,`(opcional)`),wg()(),jc(514,`p`),iO(515,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),wg()()(),jc(516,`tr`,16)(517,`td`,17)(518,`div`,18)(519,`span`,19),iO(520,` (p-change)`),nu(521,`br`),wg()()(),jc(522,`td`,21)(523,`code`,22),iO(524,`EventEmitter`),wg()(),jc(525,`td`,23),iO(526,`-`),wg(),jc(527,`td`,24)(528,`em`)(529,`strong`),iO(530,`(opcional)`),wg()(),jc(531,`p`),iO(532,`Evento que será disparado ao alterar o model. Por parâmetro será passado o novo valor.`),wg()()(),jc(533,`tr`,16)(534,`td`,17)(535,`div`,18)(536,`span`,19),iO(537,` (p-change-model)`),nu(538,`br`),wg()()(),jc(539,`td`,21)(540,`code`,22),iO(541,`EventEmitter`),wg()(),jc(542,`td`,23),iO(543,`-`),wg(),jc(544,`td`,24)(545,`em`)(546,`strong`),iO(547,`(opcional)`),wg()(),jc(548,`p`),iO(549,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(550,`code`),iO(551,`setValue`),wg(),iO(552,`, `),jc(553,`code`),iO(554,`patchValue`),wg(),iO(555,`, carregamento assíncrono).`),wg(),jc(556,`p`),iO(557,`Diferentemente do `),jc(558,`code`),iO(559,`p-change`),wg(),iO(560,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(561,`code`),iO(562,`p-change-model`),wg(),iO(563,` cobre todos os cenários de alteração de valor.`),wg(),jc(564,`p`),iO(565,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(566,`tr`,16)(567,`td`,17)(568,`div`,18)(569,`span`,19),iO(570,` (p-change-visible-columns)`),nu(571,`br`),wg()()(),jc(572,`td`,21)(573,`code`,22),iO(574,`EventEmitter`),wg()(),jc(575,`td`,23),iO(576,`-`),wg(),jc(577,`td`,24)(578,`em`)(579,`strong`),iO(580,`(opcional)`),wg()(),jc(581,`p`),iO(582,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(583,`p`),iO(584,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg()()(),jc(585,`tr`,16)(586,`td`,17)(587,`div`,25)(588,`span`,26),iO(589,` p-clean`),nu(590,`br`),wg()()(),jc(591,`td`,21)(592,`code`,29),iO(593,`boolean`),wg()(),jc(594,`td`,23),iO(595,`-`),wg(),jc(596,`td`,24)(597,`p`),iO(598,`Exibe um ícone que permite limpar o campo.`),wg()()(),jc(599,`tr`,16)(600,`td`,17)(601,`div`,18)(602,`span`,19),iO(603,` (p-restore-column-manager)`),nu(604,`br`),wg()()(),jc(605,`td`,21)(606,`code`,22),iO(607,`EventEmitter`),wg()(),jc(608,`td`,23),iO(609,`-`),wg(),jc(610,`td`,24)(611,`em`)(612,`strong`),iO(613,`(opcional)`),wg()(),jc(614,`p`),iO(615,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(616,`p`),iO(617,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg()()(),jc(618,`tr`,16)(619,`td`,17)(620,`div`,25)(621,`span`,26),iO(622,` p-columns`),nu(623,`br`),wg()()(),jc(624,`td`,21)(625,`code`,30),iO(626,`Array<PoLookupColumn>`),wg()(),jc(627,`td`,23),iO(628,`-`),wg(),jc(629,`td`,24)(630,`em`)(631,`strong`),iO(632,`(opcional)`),wg()(),jc(633,`p`),iO(634,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),wg()()(),jc(635,`tr`,16)(636,`td`,17)(637,`div`,25)(638,`span`,26),iO(639,` p-compact-label`),nu(640,`br`),wg()()(),jc(641,`td`,21)(642,`code`,29),iO(643,`boolean`),wg()(),jc(644,`td`,23)(645,`p`)(646,`code`),iO(647,`false`),wg()()(),jc(648,`td`,24)(649,`em`)(650,`strong`),iO(651,`(opcional)`),wg()(),jc(652,`p`),iO(653,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(654,`p`),iO(655,`Quando habilitado (`),jc(656,`code`),iO(657,`true`),wg(),iO(658,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(659,`ul`)(660,`li`)(661,`code`),iO(662,`po-label`),wg()(),jc(663,`li`)(664,`code`),iO(665,`p-requirement (showRequired)`),wg()(),jc(666,`li`)(667,`code`),iO(668,`po-helper`),wg()()(),jc(669,`p`),iO(670,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(671,`p`),iO(672,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(673,`ul`)(674,`li`)(675,`code`),iO(676,`--field-container-title-justify`),wg()(),jc(677,`li`)(678,`code`),iO(679,`--field-container-title-flex`),wg()()(),jc(680,`p`),iO(681,`Exemplo:`),wg(),jc(682,`pre`)(683,`code`),iO(684,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(685,`p`),iO(686,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(687,`tr`,16)(688,`td`,17)(689,`div`,25)(690,`span`,26),iO(691,` p-disabled`),nu(692,`br`),wg()()(),jc(693,`td`,21)(694,`code`,29),iO(695,`boolean`),wg()(),jc(696,`td`,23)(697,`p`),iO(698,`false`),wg()(),jc(699,`td`,24)(700,`em`)(701,`strong`),iO(702,`(opcional)`),wg()(),jc(703,`p`),iO(704,`Indica que o campo será desabilitado.`),wg()()(),jc(705,`tr`,16)(706,`td`,17)(707,`div`,25)(708,`span`,26),iO(709,` p-error-limit`),nu(710,`br`),wg()()(),jc(711,`td`,21)(712,`code`,29),iO(713,`boolean`),wg()(),jc(714,`td`,23)(715,`p`)(716,`code`),iO(717,`false`),wg()()(),jc(718,`td`,24)(719,`em`)(720,`strong`),iO(721,`(opcional)`),wg()(),jc(722,`p`),iO(723,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(724,`blockquote`)(725,`p`),iO(726,`Caso essa propriedade seja definida como `),jc(727,`code`),iO(728,`true`),wg(),iO(729,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(730,`tr`,16)(731,`td`,17)(732,`div`,25)(733,`span`,26),iO(734,` p-field-error-message`),nu(735,`br`),wg()()(),jc(736,`td`,21)(737,`code`,27),iO(738,`string`),wg()(),jc(739,`td`,23),iO(740,`-`),wg(),jc(741,`td`,24)(742,`em`)(743,`strong`),iO(744,`(opcional)`),wg()(),jc(745,`p`),iO(746,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(747,`blockquote`)(748,`p`),iO(749,`Necessário que a propriedade `),jc(750,`code`),iO(751,`p-required`),wg(),iO(752,` esteja habilitada.`),wg()()()(),jc(753,`tr`,16)(754,`td`,17)(755,`div`,25)(756,`span`,26),iO(757,` p-field-format`),nu(758,`br`),wg()()(),jc(759,`td`,21)(760,`code`,31),iO(761,`((value) => string) `),wg(),jc(762,`code`,32),iO(763,` Array<string>`),wg()(),jc(764,`td`,23),iO(765,`-`),wg(),jc(766,`td`,24)(767,`em`)(768,`strong`),iO(769,`(opcional)`),wg()(),jc(770,`p`),iO(771,`Formato de exibição do campo.`),wg(),jc(772,`p`),iO(773,`Recebe uma função que deve retornar uma `),jc(774,`em`),iO(775,`string`),wg(),iO(776,` com o/os valores do objeto formatados para exibição, por exemplo:`),wg(),jc(777,`pre`)(778,`code`),iO(779,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),wg()(),jc(780,`blockquote`)(781,`p`),iO(782,`Esta propriedade sobrepõe o valor da propriedade `),jc(783,`code`),iO(784,`p-field-label`),wg(),iO(785,` na descrição do campo.`),wg()(),jc(786,`p`),iO(787,`Pode-se informar uma lista de propriedades que deseja exibir como descrição do campo, Por exemplo:`),wg(),jc(788,`pre`)(789,`code`),iO(790,`<po-lookup
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
`),wg()(),jc(791,`blockquote`)(792,`p`),iO(793,`Será utilizado `),jc(794,`code`),iO(795,`-`),wg(),iO(796,` como separador.`),wg()()()(),jc(797,`tr`,16)(798,`td`,17)(799,`div`,25)(800,`span`,26),iO(801,` p-field-label`),nu(802,`br`),wg()()(),jc(803,`td`,21)(804,`code`,27),iO(805,`string`),wg()(),jc(806,`td`,23),iO(807,`-`),wg(),jc(808,`td`,24)(809,`p`),iO(810,`Indica a coluna que será utilizada como descrição do campo e como filtro dentro da janela.`),wg()()(),jc(811,`tr`,16)(812,`td`,17)(813,`div`,25)(814,`span`,26),iO(815,` p-field-value`),nu(816,`br`),wg()()(),jc(817,`td`,21)(818,`code`,27),iO(819,`string`),wg()(),jc(820,`td`,23),iO(821,`-`),wg(),jc(822,`td`,24)(823,`p`),iO(824,`Indica a coluna que será utilizada como valor do campo.`),wg(),jc(825,`blockquote`)(826,`p`),iO(827,`Atenção: Caso não seja passada ou tenha o conteúdo incorreto, não irá atualizar o model do formulário.`),wg()()()(),jc(828,`tr`,16)(829,`td`,17)(830,`div`,25)(831,`span`,26),iO(832,` p-filter-params`),nu(833,`br`),wg()()(),jc(834,`td`,21)(835,`code`,33),iO(836,`any`),wg()(),jc(837,`td`,23),iO(838,`-`),wg(),jc(839,`td`,24)(840,`em`)(841,`strong`),iO(842,`(opcional)`),wg()(),jc(843,`p`),iO(844,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),jc(845,`code`),iO(846,`PoLookupFilter`),wg(),iO(847,`.`),wg()()(),jc(848,`tr`,16)(849,`td`,17)(850,`div`,25)(851,`span`,26),iO(852,` p-filter-service`),nu(853,`br`),wg()()(),jc(854,`td`,21)(855,`code`,27),iO(856,`string `),wg(),jc(857,`code`,34),iO(858,` PoLookupFilter`),wg()(),jc(859,`td`,23),iO(860,`-`),wg(),jc(861,`td`,24)(862,`p`),iO(863,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),jc(864,`code`),iO(865,`PoLookupFilter`),wg(),iO(866,` ou uma URL.`),wg(),jc(867,`p`),iO(868,`Quando utilizada uma URL de um serviço, será concatenada nesta URL o valor que deseja-se filtrar, por exemplo:`),wg(),jc(869,`pre`)(870,`code`),iO(871,`url + ?page=1&pageSize=20&filter=Peter
`),wg()(),jc(872,`p`),iO(873,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),jc(874,`code`),iO(875,`order`),wg(),iO(876,`, por exemplo:`),wg(),jc(877,`ul`)(878,`li`)(879,`p`),iO(880,`Coluna decrescente:`),wg(),jc(881,`pre`)(882,`code`),iO(883,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),wg()()(),jc(884,`li`)(885,`p`),iO(886,`Coluna ascendente:`),wg(),jc(887,`pre`)(888,`code`),iO(889,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),wg()()()(),jc(890,`p`),iO(891,`Se for definido a propriedade `),jc(892,`code`),iO(893,`p-filter-params`),wg(),iO(894,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),jc(895,`code`),iO(896,`{ age: 23 }`),wg(),iO(897,` a URL ficaria:`),wg(),jc(898,`pre`)(899,`code`),iO(900,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),wg()(),jc(901,`p`),iO(902,`Ao iniciar o campo com valor, os registros serão buscados da seguinte forma:`),wg(),jc(903,`pre`)(904,`code`),iO(905,`model = 1234;

GET url/1234
`),wg()(),jc(906,`p`),iO(907,`Caso estiver com múltipla seleção habilitada:`),wg(),jc(908,`pre`)(909,`code`),iO(910,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),wg()(),jc(911,`blockquote`)(912,`p`),iO(913,`Esta URL deve retornar e receber os dados no padrão de `),jc(914,`a`,7),iO(915,`API do PO UI`),wg(),iO(916,` e utiliza os valores
definidos nas propriedades `),jc(917,`code`),iO(918,`p-field-label`),wg(),iO(919,` e `),jc(920,`code`),iO(921,`p-field-value`),wg(),iO(922,` para a construção do `),jc(923,`code`),iO(924,`po-lookup`),wg(),iO(925,`.`),wg()(),jc(926,`p`),iO(927,`Caso o usuário digite um valor e pressione a tecla `),jc(928,`em`),iO(929,`TAB`),wg(),iO(930,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),jc(931,`a`,35),iO(932,`encodeURIComponent`),wg(),iO(933,`
e concatenado na URL da seguinte forma:`),wg(),jc(934,`pre`)(935,`code`),iO(936,`url/valor%20que%20se%20deseja%20filtrar
`),wg()(),jc(937,`blockquote`)(938,`p`),iO(939,`Quando informado um serviço que implemente a interface `),jc(940,`code`),iO(941,`PoLookupFilter`),wg(),iO(942,` o tratamento de encoding do valor a ser filtrado ficará a cargo do desenvolvedor.`),wg()()()(),jc(943,`tr`,16)(944,`td`,17)(945,`div`,25)(946,`span`,26),iO(947,` p-help`),nu(948,`br`),wg()()(),jc(949,`td`,21)(950,`code`,27),iO(951,`string`),wg()(),jc(952,`td`,23),iO(953,`-`),wg(),jc(954,`td`,24)(955,`em`)(956,`strong`),iO(957,`(opcional)`),wg()(),jc(958,`p`),iO(959,`Texto de apoio do campo.`),wg()()(),jc(960,`tr`,16)(961,`td`,17)(962,`div`,25)(963,`span`,26),iO(964,` p-hide-columns-manager`),nu(965,`br`),wg()()(),jc(966,`td`,21)(967,`code`,29),iO(968,`boolean`),wg()(),jc(969,`td`,23)(970,`p`)(971,`code`),iO(972,`false`),wg()()(),jc(973,`td`,24)(974,`em`)(975,`strong`),iO(976,`(opcional)`),wg()(),jc(977,`p`),iO(978,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),wg()()(),jc(979,`tr`,16)(980,`td`,17)(981,`div`,25)(982,`span`,26),iO(983,` p-infinite-scroll`),nu(984,`br`),wg()()(),jc(985,`td`,21)(986,`code`,29),iO(987,`boolean`),wg()(),jc(988,`td`,23)(989,`p`)(990,`code`),iO(991,`false`),wg()()(),jc(992,`td`,24)(993,`em`)(994,`strong`),iO(995,`(opcional)`),wg()(),jc(996,`p`),iO(997,`Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta.`),wg()()(),jc(998,`tr`,16)(999,`td`,17)(1e3,`div`,18)(1001,`span`,19),iO(1002,` (p-keydown)`),nu(1003,`br`),wg()()(),jc(1004,`td`,21)(1005,`code`,22),iO(1006,`EventEmitter`),wg()(),jc(1007,`td`,23),iO(1008,`-`),wg(),jc(1009,`td`,24)(1010,`em`)(1011,`strong`),iO(1012,`(opcional)`),wg()(),jc(1013,`p`),iO(1014,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(1015,`code`),iO(1016,`KeyboardEvent`),wg(),iO(1017,` com informações sobre a tecla.`),wg()()(),jc(1018,`tr`,16)(1019,`td`,17)(1020,`div`,25)(1021,`span`,26),iO(1022,` p-label`),nu(1023,`br`),wg()()(),jc(1024,`td`,21)(1025,`code`,27),iO(1026,`string`),wg()(),jc(1027,`td`,23),iO(1028,`-`),wg(),jc(1029,`td`,24)(1030,`em`)(1031,`strong`),iO(1032,`(opcional)`),wg()(),jc(1033,`p`),iO(1034,`Label do campo.`),wg(),jc(1035,`blockquote`)(1036,`p`),iO(1037,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),jc(1038,`code`),iO(1039,`modalTitle`),wg(),iO(1040,` na propriedade `),jc(1041,`code`),iO(1042,`p-literals`),wg(),iO(1043,`.`),wg()()()(),jc(1044,`tr`,16)(1045,`td`,17)(1046,`div`,25)(1047,`span`,26),iO(1048,` p-label-text-wrap`),nu(1049,`br`),wg()()(),jc(1050,`td`,21)(1051,`code`,29),iO(1052,`boolean`),wg()(),jc(1053,`td`,23)(1054,`p`)(1055,`code`),iO(1056,`false`),wg()()(),jc(1057,`td`,24)(1058,`em`)(1059,`strong`),iO(1060,`(opcional)`),wg()(),jc(1061,`p`),iO(1062,`Habilita a quebra automática do texto da propriedade `),jc(1063,`code`),iO(1064,`p-label`),wg(),iO(1065,`. Quando `),jc(1066,`code`),iO(1067,`p-label-text-wrap`),wg(),iO(1068,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(1069,`tr`,16)(1070,`td`,17)(1071,`div`,25)(1072,`span`,26),iO(1073,` p-literals`),nu(1074,`br`),wg()()(),jc(1075,`td`,21)(1076,`code`,36),iO(1077,`PoLookupLiterals`),wg()(),jc(1078,`td`,23),iO(1079,`-`),wg(),jc(1080,`td`,24)(1081,`p`),iO(1082,`Objeto com as literais usadas no `),jc(1083,`code`),iO(1084,`po-lookup`),wg(),iO(1085,`.`),wg(),jc(1086,`p`),iO(1087,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(1088,`pre`)(1089,`code`),iO(1090,`const customLiterals: PoLookupLiterals = {
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
`),wg()(),jc(1091,`p`),iO(1092,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(1093,`pre`)(1094,`code`),iO(1095,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),wg()(),jc(1096,`p`),iO(1097,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(1098,`pre`)(1099,`code`),iO(1100,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),wg()(),jc(1101,`blockquote`)(1102,`p`),iO(1103,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(1104,`a`,37)(1105,`code`),iO(1106,`PoI18nService`),wg()(),iO(1107,` ou do browser.`),wg()()()(),jc(1108,`tr`,16)(1109,`td`,17)(1110,`div`,25)(1111,`span`,26),iO(1112,` p-loading`),nu(1113,`br`),wg()()(),jc(1114,`td`,21)(1115,`code`,29),iO(1116,`boolean`),wg()(),jc(1117,`td`,23)(1118,`p`)(1119,`code`),iO(1120,`false`),wg()()(),jc(1121,`td`,24)(1122,`em`)(1123,`strong`),iO(1124,`(opcional)`),wg()(),jc(1125,`p`),iO(1126,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(1127,`tr`,16)(1128,`td`,17)(1129,`div`,25)(1130,`span`,26),iO(1131,` p-multiple`),nu(1132,`br`),wg()()(),jc(1133,`td`,21)(1134,`code`,29),iO(1135,`boolean`),wg()(),jc(1136,`td`,23)(1137,`p`)(1138,`code`),iO(1139,`false`),wg()()(),jc(1140,`td`,24)(1141,`em`)(1142,`strong`),iO(1143,`(opcional)`),wg()(),jc(1144,`p`),iO(1145,`Permite a seleção de múltiplos itens.`),wg(),jc(1146,`blockquote`)(1147,`p`),iO(1148,`Quando habilitado o valor do campo passará a ser uma lista de valores, por exemplo: `),jc(1149,`code`),iO(1150,`[ 12345, 67890 ]`),wg()()()()(),jc(1151,`tr`,16)(1152,`td`,17)(1153,`div`,25)(1154,`span`,26),iO(1155,` name`),nu(1156,`br`),wg()()(),jc(1157,`td`,21)(1158,`code`,27),iO(1159,`string`),wg()(),jc(1160,`td`,23),iO(1161,`-`),wg(),jc(1162,`td`,24)(1163,`p`),iO(1164,`Nome e Id do componente.`),wg()()(),jc(1165,`tr`,16)(1166,`td`,17)(1167,`div`,25)(1168,`span`,26),iO(1169,` p-no-autocomplete`),nu(1170,`br`),wg()()(),jc(1171,`td`,21)(1172,`code`,29),iO(1173,`boolean`),wg()(),jc(1174,`td`,23)(1175,`p`)(1176,`code`),iO(1177,`false`),wg()()(),jc(1178,`td`,24)(1179,`em`)(1180,`strong`),iO(1181,`(opcional)`),wg()(),jc(1182,`p`),iO(1183,`Define a propriedade nativa `),jc(1184,`code`),iO(1185,`autocomplete`),wg(),iO(1186,` do campo como `),jc(1187,`code`),iO(1188,`off`),wg(),iO(1189,`.`),wg()()(),jc(1190,`tr`,16)(1191,`td`,17)(1192,`div`,18)(1193,`span`,19),iO(1194,` (p-error)`),nu(1195,`br`),wg()()(),jc(1196,`td`,21)(1197,`code`,22),iO(1198,`EventEmitter`),wg()(),jc(1199,`td`,23),iO(1200,`-`),wg(),jc(1201,`td`,24)(1202,`p`),iO(1203,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),wg()()(),jc(1204,`tr`,16)(1205,`td`,17)(1206,`div`,25)(1207,`span`,26),iO(1208,` p-optional`),nu(1209,`br`),wg()()(),jc(1210,`td`,21)(1211,`code`,29),iO(1212,`boolean`),wg()(),jc(1213,`td`,23)(1214,`p`)(1215,`code`),iO(1216,`false`),wg()()(),jc(1217,`td`,24)(1218,`em`)(1219,`strong`),iO(1220,`(opcional)`),wg()(),jc(1221,`p`),iO(1222,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1223,`blockquote`)(1224,`p`),iO(1225,`Não será exibida a indicação se:`),wg()(),jc(1226,`ul`)(1227,`li`),iO(1228,`O campo conter `),jc(1229,`code`),iO(1230,`p-required`),wg(),iO(1231,`;`),wg(),jc(1232,`li`),iO(1233,`Não possuir `),jc(1234,`code`),iO(1235,`p-help`),wg(),iO(1236,` e/ou `),jc(1237,`code`),iO(1238,`p-label`),wg(),iO(1239,`.`),wg()()()(),jc(1240,`tr`,16)(1241,`td`,17)(1242,`div`,25)(1243,`span`,26),iO(1244,` p-placeholder`),nu(1245,`br`),wg()()(),jc(1246,`td`,21)(1247,`code`,27),iO(1248,`string`),wg()(),jc(1249,`td`,23),iO(1250,`-`),wg(),jc(1251,`td`,24)(1252,`p`),iO(1253,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1254,`tr`,16)(1255,`td`,17)(1256,`div`,25)(1257,`span`,26),iO(1258,` p-helper`),nu(1259,`br`),wg()()(),jc(1260,`td`,21)(1261,`code`,38),iO(1262,`PoHelperOptions `),wg(),jc(1263,`code`,27),iO(1264,` string`),wg()(),jc(1265,`td`,23),iO(1266,`-`),wg(),jc(1267,`td`,24)(1268,`em`)(1269,`strong`),iO(1270,`(opcional)`),wg()(),jc(1271,`p`),iO(1272,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1273,`code`),iO(1274,`p-label`),wg(),iO(1275,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1276,`code`),iO(1277,`p-label`),wg(),iO(1278,`.`),wg(),jc(1279,`blockquote`)(1280,`p`),iO(1281,`Para mais informações acesse: `),jc(1282,`a`,39),iO(1283,`https://po-ui.io/documentation/po-helper`),wg(),iO(1284,`.`),wg()(),jc(1285,`blockquote`)(1286,`p`),iO(1287,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1288,`code`),iO(1289,`p-additional-help-tooltip`),wg(),iO(1290,` e `),jc(1291,`code`),iO(1292,`p-additional-help`),wg(),iO(1293,`) será ignorado.`),wg()()()(),jc(1294,`tr`,16)(1295,`td`,17)(1296,`div`,25)(1297,`span`,26),iO(1298,` p-required`),nu(1299,`br`),wg()()(),jc(1300,`td`,21)(1301,`code`,29),iO(1302,`boolean`),wg()(),jc(1303,`td`,23)(1304,`p`)(1305,`code`),iO(1306,`false`),wg()()(),jc(1307,`td`,24)(1308,`em`)(1309,`strong`),iO(1310,`(opcional)`),wg()(),jc(1311,`p`),iO(1312,`Define que o campo será obrigatório.`),wg(),jc(1313,`blockquote`)(1314,`p`),iO(1315,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1316,`code`),iO(1317,`(p-disabled)`),wg(),iO(1318,`.`),wg()()()(),jc(1319,`tr`,16)(1320,`td`,17)(1321,`div`,18)(1322,`span`,19),iO(1323,` (p-selected)`),nu(1324,`br`),wg()()(),jc(1325,`td`,21)(1326,`code`,22),iO(1327,`EventEmitter`),wg()(),jc(1328,`td`,23),iO(1329,`-`),wg(),jc(1330,`td`,24)(1331,`em`)(1332,`strong`),iO(1333,`(opcional)`),wg()(),jc(1334,`p`),iO(1335,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),wg()()(),jc(1336,`tr`,16)(1337,`td`,17)(1338,`div`,25)(1339,`span`,26),iO(1340,` p-show-required`),nu(1341,`br`),wg()()(),jc(1342,`td`,21)(1343,`code`,29),iO(1344,`boolean`),wg()(),jc(1345,`td`,23),iO(1346,`-`),wg(),jc(1347,`td`,24)(1348,`p`),iO(1349,`Define se a indicação de campo obrigatório seré exibida.`),wg(),jc(1350,`blockquote`)(1351,`p`),iO(1352,`Não será exibida a indicação se:`),wg()(),jc(1353,`ul`)(1354,`li`),iO(1355,`Não possuir `),jc(1356,`code`),iO(1357,`p-help`),wg(),iO(1358,` e/ou `),jc(1359,`code`),iO(1360,`p-label`),wg(),iO(1361,`.`),wg()()()(),jc(1362,`tr`,16)(1363,`td`,17)(1364,`div`,25)(1365,`span`,26),iO(1366,` p-size`),nu(1367,`br`),wg()()(),jc(1368,`td`,21)(1369,`code`,27),iO(1370,`string`),wg()(),jc(1371,`td`,23)(1372,`p`)(1373,`code`),iO(1374,`medium`),wg()()(),jc(1375,`td`,24)(1376,`em`)(1377,`strong`),iO(1378,`(opcional)`),wg()(),jc(1379,`p`),iO(1380,`Define o tamanho do componente:`),wg(),jc(1381,`ul`)(1382,`li`)(1383,`code`),iO(1384,`small`),wg(),iO(1385,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1386,`li`)(1387,`code`),iO(1388,`medium`),wg(),iO(1389,`: altura do input como 44px.`),wg()(),jc(1390,`blockquote`)(1391,`p`),iO(1392,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1393,`code`),iO(1394,`medium`),wg(),iO(1395,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1396,`a`,40),iO(1397,`po-theme`),wg(),iO(1398,`.`),wg()()()(),jc(1399,`tr`,16)(1400,`td`,17)(1401,`div`,25)(1402,`span`,26),iO(1403,` p-spacing`),nu(1404,`br`),wg()()(),jc(1405,`td`,21)(1406,`code`,27),iO(1407,`string`),wg()(),jc(1408,`td`,23)(1409,`p`)(1410,`code`),iO(1411,`medium`),wg()()(),jc(1412,`td`,24)(1413,`em`)(1414,`strong`),iO(1415,`(opcional)`),wg()(),jc(1416,`p`),iO(1417,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),jc(1418,`strong`),iO(1419,`PoTableColumnSpacing`),wg(),iO(1420,`.`),wg(),jc(1421,`blockquote`)(1422,`p`),iO(1423,`Em nível de acessibilidade `),jc(1424,`strong`),iO(1425,`AA`),wg(),iO(1426,`, caso o valor de `),jc(1427,`code`),iO(1428,`p-spacing`),wg(),iO(1429,` não seja definido, o valor padrão será `),jc(1430,`code`),iO(1431,`extraSmall`),wg(),iO(1432,`
nos seguintes cen\xE1rios:`),wg(),jc(1433,`ul`)(1434,`li`),iO(1435,`Quando o valor de `),jc(1436,`code`),iO(1437,`p-size`),wg(),iO(1438,` for `),jc(1439,`code`),iO(1440,`small`),wg(),iO(1441,`;`),wg(),jc(1442,`li`),iO(1443,`Quando o valor padrão dos componentes for configurado como `),jc(1444,`code`),iO(1445,`small`),wg(),iO(1446,` no
`),jc(1447,`a`,40),iO(1448,`serviço de tema`),wg(),iO(1449,`.`),wg()()()()(),jc(1450,`tr`,16)(1451,`td`,17)(1452,`div`,25)(1453,`span`,26),iO(1454,` p-text-wrap`),nu(1455,`br`),wg()()(),jc(1456,`td`,21)(1457,`code`,29),iO(1458,`boolean`),wg()(),jc(1459,`td`,23)(1460,`p`)(1461,`code`),iO(1462,`false`),wg()()(),jc(1463,`td`,24)(1464,`em`)(1465,`strong`),iO(1466,`(opcional)`),wg()(),jc(1467,`p`),iO(1468,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg(),jc(1469,`p`),iO(1470,`Esta propriedade aplica-se ao texto contido nas células da tabela.`),wg(),jc(1471,`blockquote`)(1472,`p`),iO(1473,`Incompatível com `),jc(1474,`code`),iO(1475,`virtual-scroll`),wg(),iO(1476,`, que requer altura fixa nas linhas.`),wg()()()(),jc(1477,`tr`,16)(1478,`td`,17)(1479,`div`,25)(1480,`span`,26),iO(1481,` p-virtual-scroll`),nu(1482,`br`),wg()()(),jc(1483,`td`,21)(1484,`code`,29),iO(1485,`boolean`),wg()(),jc(1486,`td`,23)(1487,`p`)(1488,`code`),iO(1489,`true`),wg()()(),jc(1490,`td`,24)(1491,`em`)(1492,`strong`),iO(1493,`(opcional)`),wg()(),jc(1494,`p`),iO(1495,`Habilita o `),jc(1496,`code`),iO(1497,`virtual-scroll`),wg(),iO(1498,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),jc(1499,`code`),iO(1500,`virtual-scroll`),wg(),iO(1501,` será ativado automaticamente.`),wg(),jc(1502,`blockquote`)(1503,`p`),iO(1504,`Incompatível com `),jc(1505,`code`),iO(1506,`p-text-wrap`),wg(),iO(1507,` e `),jc(1508,`code`),iO(1509,`master-detail`),wg(),iO(1510,`, pois o `),jc(1511,`code`),iO(1512,`virtual-scroll`),wg(),iO(1513,` exige altura fixa nas linhas.`),wg()()()()(),jc(1514,`h3`,12),iO(1515,`Métodos`),wg(),jc(1516,`table`,41)(1517,`tr`,16)(1518,`th`,42)(1519,`div`,25)(1520,`h4`)(1521,`span`,26),iO(1522,` focus `),wg()()()()(),jc(1523,`tr`,24)(1524,`td`,24)(1525,`p`),iO(1526,`Função que atribui foco ao componente.`),wg(),jc(1527,`p`),iO(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1529,`pre`)(1530,`code`),iO(1531,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),wg()()()()(),nu(1532,`br`),jc(1533,`table`,41)(1534,`tr`,16)(1535,`th`,42)(1536,`div`,25)(1537,`h4`)(1538,`span`,26),iO(1539,` showAdditionalHelp `),wg()()()()(),jc(1540,`tr`,24)(1541,`td`,24)(1542,`p`),iO(1543,`Método que exibe `),jc(1544,`code`),iO(1545,`p-helper`),wg(),iO(1546,` ou executa a ação definida em `),jc(1547,`code`),iO(1548,`p-helper{eventOnClick}`),wg(),iO(1549,` ou em `),jc(1550,`code`),iO(1551,`p-additionalHelp`),wg(),iO(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1553,`code`),iO(1554,`p-keydown`),wg(),iO(1555,`.`),wg(),jc(1556,`blockquote`)(1557,`p`),iO(1558,`Exibe ou oculta o conteúdo do componente `),jc(1559,`code`),iO(1560,`po-helper`),wg(),iO(1561,` quando o componente estiver com foco.`),wg()(),jc(1562,`pre`)(1563,`code`),iO(1564,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),wg()(),jc(1565,`pre`)(1566,`code`),iO(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1568,`br`),jc(1569,`h3`),iO(1570,`Interfaces`),wg(),jc(1571,`h4`,43)(1572,`code`,5),iO(1573,`PoLookupAdvancedFilter`),wg()(),jc(1574,`div`,2)(1575,`p`),iO(1576,`Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente na busca avançada.`),wg()(),jc(1577,`h4`,12),iO(1578,`Propriedades`),wg(),jc(1579,`table`,13)(1580,`tr`,14)(1581,`th`,15),iO(1582,`Nome`),wg(),jc(1583,`th`,15),iO(1584,`Tipo`),wg(),jc(1585,`th`,15),iO(1586,`Descrição`),wg()(),jc(1587,`tr`,16)(1588,`td`,17)(1589,`div`,25)(1590,`span`,26),iO(1591,` additionalHelp`),nu(1592,`br`),wg()()(),jc(1593,`td`,21)(1594,`code`,44),iO(1595,`Function`),wg()(),jc(1596,`td`,24)(1597,`em`)(1598,`strong`),iO(1599,`(opcional)`),wg()(),jc(1600,`p`),iO(1601,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(1602,`blockquote`)(1603,`p`),iO(1604,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(1605,`tr`,16)(1606,`td`,17)(1607,`div`,25)(1608,`span`,26),iO(1609,` additionalHelpTooltip`),nu(1610,`br`),wg()()(),jc(1611,`td`,21)(1612,`code`,27),iO(1613,`string`),wg()(),jc(1614,`td`,24)(1615,`em`)(1616,`strong`),iO(1617,`(opcional)`),wg()(),jc(1618,`p`),iO(1619,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(1620,`code`),iO(1621,`po-helper`),wg(),iO(1622,`.
`),jc(1623,`strong`),iO(1624,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(1625,`blockquote`)(1626,`p`),iO(1627,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(1628,`tr`,16)(1629,`td`,17)(1630,`div`,25)(1631,`span`,26),iO(1632,` advancedFilters`),nu(1633,`br`),wg()()(),jc(1634,`td`,21)(1635,`code`,28),iO(1636,`Array<PoLookupAdvancedFilter>`),wg()(),jc(1637,`td`,24)(1638,`em`)(1639,`strong`),iO(1640,`(opcional)`),wg()(),jc(1641,`p`),iO(1642,`Lista de objetos dos campos que serão criados na busca avançada.`),wg(),jc(1643,`blockquote`)(1644,`p`),iO(1645,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),wg()(),jc(1646,`p`),iO(1647,`Exemplo de URL com busca avançada:`),wg(),jc(1648,`p`)(1649,`code`),iO(1650,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),wg()(),jc(1651,`p`),iO(1652,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),wg(),jc(1653,`p`)(1654,`code`),iO(1655,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),wg()()()(),jc(1656,`tr`,16)(1657,`td`,17)(1658,`div`,25)(1659,`span`,26),iO(1660,` appendBox`),nu(1661,`br`),wg()()(),jc(1662,`td`,21)(1663,`code`,29),iO(1664,`boolean`),wg()(),jc(1665,`td`,24)(1666,`em`)(1667,`strong`),iO(1668,`(opcional)`),wg()(),jc(1669,`p`),iO(1670,`Define que o `),jc(1671,`code`),iO(1672,`listbox`),wg(),iO(1673,` e/ou popover (`),jc(1674,`code`),iO(1675,`p-helper`),wg(),iO(1676,` e/ou `),jc(1677,`code`),iO(1678,`p-error-limit`),wg(),iO(1679,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),wg(),jc(1680,`blockquote`)(1681,`p`),iO(1682,`Quando utilizado com `),jc(1683,`code`),iO(1684,`p-helper`),wg(),iO(1685,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(1686,`tr`,16)(1687,`td`,17)(1688,`div`,25)(1689,`span`,26),iO(1690,` autoHeight`),nu(1691,`br`),wg()()(),jc(1692,`td`,21)(1693,`code`,29),iO(1694,`boolean`),wg()(),jc(1695,`td`,24)(1696,`em`)(1697,`strong`),iO(1698,`(opcional)`),wg()(),jc(1699,`p`),iO(1700,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),wg(),jc(1701,`p`)(1702,`strong`),iO(1703,`Componentes compatíveis:`),wg(),jc(1704,`code`),iO(1705,`po-multiselect`),wg(),iO(1706,`, `),jc(1707,`code`),iO(1708,`po-lookup`),wg(),iO(1709,`.`),wg()()(),jc(1710,`tr`,16)(1711,`td`,17)(1712,`div`,25)(1713,`span`,26),iO(1714,` autoUpload`),nu(1715,`br`),wg()()(),jc(1716,`td`,21)(1717,`code`,29),iO(1718,`boolean`),wg()(),jc(1719,`td`,24)(1720,`em`)(1721,`strong`),iO(1722,`(opcional)`),wg()(),jc(1723,`p`),iO(1724,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),wg(),jc(1725,`p`)(1726,`strong`),iO(1727,`Componente compatível`),wg(),iO(1728,`: `),jc(1729,`code`),iO(1730,`po-upload`),wg()()()(),jc(1731,`tr`,16)(1732,`td`,17)(1733,`div`,25)(1734,`span`,26),iO(1735,` booleanFalse`),nu(1736,`br`),wg()()(),jc(1737,`td`,21)(1738,`code`,27),iO(1739,`string`),wg()(),jc(1740,`td`,24)(1741,`em`)(1742,`strong`),iO(1743,`(opcional)`),wg()(),jc(1744,`p`),iO(1745,`Texto exibido quando o valor do componente for `),jc(1746,`em`),iO(1747,`false`),wg(),iO(1748,`.`),wg()()(),jc(1749,`tr`,16)(1750,`td`,17)(1751,`div`,25)(1752,`span`,26),iO(1753,` booleanTrue`),nu(1754,`br`),wg()()(),jc(1755,`td`,21)(1756,`code`,27),iO(1757,`string`),wg()(),jc(1758,`td`,24)(1759,`em`)(1760,`strong`),iO(1761,`(opcional)`),wg()(),jc(1762,`p`),iO(1763,`Texto exibido quando o valor do componente for `),jc(1764,`em`),iO(1765,`true`),wg(),iO(1766,`.`),wg()()(),jc(1767,`tr`,16)(1768,`td`,17)(1769,`div`,25)(1770,`span`,26),iO(1771,` changeOnEnter`),nu(1772,`br`),wg()()(),jc(1773,`td`,21)(1774,`code`,29),iO(1775,`boolean`),wg()(),jc(1776,`td`,24)(1777,`em`)(1778,`strong`),iO(1779,`(opcional)`),wg()(),jc(1780,`p`),iO(1781,`Indica que o evento `),jc(1782,`code`),iO(1783,`p-change`),wg(),iO(1784,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),jc(1785,`code`),iO(1786,`po-combo`),wg(),iO(1787,`.`),wg()()(),jc(1788,`tr`,16)(1789,`td`,17)(1790,`div`,25)(1791,`span`,26),iO(1792,` changeVisibleColumns`),nu(1793,`br`),wg()()(),jc(1794,`td`,21)(1795,`code`,44),iO(1796,`Function`),wg()(),jc(1797,`td`,24)(1798,`em`)(1799,`strong`),iO(1800,`(opcional)`),wg()(),jc(1801,`p`),iO(1802,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(1803,`p`),iO(1804,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(1805,`p`)(1806,`strong`),iO(1807,`Componente compatível`),wg(),iO(1808,`: `),jc(1809,`code`),iO(1810,`po-lookup`),wg()()()(),jc(1811,`tr`,16)(1812,`td`,17)(1813,`div`,25)(1814,`span`,26),iO(1815,` clean`),nu(1816,`br`),wg()()(),jc(1817,`td`,21)(1818,`code`,29),iO(1819,`boolean`),wg()(),jc(1820,`td`,24)(1821,`em`)(1822,`strong`),iO(1823,`(opcional)`),wg()(),jc(1824,`p`),iO(1825,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg(),jc(1826,`p`)(1827,`strong`),iO(1828,`Componentes compatíveis:`),wg(),jc(1829,`code`),iO(1830,`po-datepicker`),wg(),iO(1831,`, `),jc(1832,`code`),iO(1833,`po-datepicker-range`),wg(),iO(1834,`, `),jc(1835,`code`),iO(1836,`po-input`),wg(),iO(1837,`, `),jc(1838,`code`),iO(1839,`po-number`),wg(),iO(1840,`, `),jc(1841,`code`),iO(1842,`po-decimal`),wg(),iO(1843,`,
`),jc(1844,`code`),iO(1845,`po-combo`),wg(),iO(1846,`, `),jc(1847,`code`),iO(1848,`po-lookup`),wg(),iO(1849,`, `),jc(1850,`code`),iO(1851,`po-password`),wg(),iO(1852,`, `),jc(1853,`code`),iO(1854,`po-timepicker`),wg(),iO(1855,`.`),wg()()(),jc(1856,`tr`,16)(1857,`td`,17)(1858,`div`,25)(1859,`span`,26),iO(1860,` columnRestoreManager`),nu(1861,`br`),wg()()(),jc(1862,`td`,21)(1863,`code`,44),iO(1864,`Function`),wg()(),jc(1865,`td`,24)(1866,`em`)(1867,`strong`),iO(1868,`(opcional)`),wg()(),jc(1869,`p`),iO(1870,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(1871,`p`),iO(1872,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(1873,`p`)(1874,`strong`),iO(1875,`Componente compatível`),wg(),iO(1876,`: `),jc(1877,`code`),iO(1878,`po-lookup`),wg()()()(),jc(1879,`tr`,16)(1880,`td`,17)(1881,`div`,25)(1882,`span`,26),iO(1883,` columns`),nu(1884,`br`),wg()()(),jc(1885,`td`,21)(1886,`code`,30),iO(1887,`Array<PoLookupColumn> `),wg(),jc(1888,`code`,45),iO(1889,` number`),wg()(),jc(1890,`td`,24)(1891,`em`)(1892,`strong`),iO(1893,`(opcional)`),wg()(),jc(1894,`p`),iO(1895,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),jc(1896,`code`),iO(1897,`searchService`),wg(),iO(1898,`,
essa propriedade deve receber um array de objetos que implementam a interface `),jc(1899,`a`,46)(1900,`code`),iO(1901,`PoLookupColumn`),wg()(),iO(1902,`.`),wg(),jc(1903,`blockquote`)(1904,`p`),iO(1905,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),jc(1906,`em`),iO(1907,`label`),wg(),iO(1908,` e `),jc(1909,`em`),iO(1910,`value`),wg(),iO(1911,` para valores
de tela e do model respectivamente.`),wg()(),jc(1912,`p`)(1913,`strong`),iO(1914,`Componentes compatíveis:`),wg(),jc(1915,`code`),iO(1916,`po-radio-group`),wg(),iO(1917,`, `),jc(1918,`code`),iO(1919,`po-lookup`),wg(),iO(1920,`, `),jc(1921,`code`),iO(1922,`po-checkbox-group`),wg(),iO(1923,`.`),wg()()(),jc(1924,`tr`,16)(1925,`td`,17)(1926,`div`,25)(1927,`span`,26),iO(1928,` compactLabel`),nu(1929,`br`),wg()()(),jc(1930,`td`,21)(1931,`code`,29),iO(1932,`boolean`),wg()(),jc(1933,`td`,24)(1934,`em`)(1935,`strong`),iO(1936,`(opcional)`),wg()(),jc(1937,`p`),iO(1938,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(1939,`p`),iO(1940,`Quando habilitado (`),jc(1941,`code`),iO(1942,`true`),wg(),iO(1943,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(1944,`ul`)(1945,`li`)(1946,`code`),iO(1947,`po-label`),wg()(),jc(1948,`li`)(1949,`code`),iO(1950,`p-requirement (showRequired)`),wg()(),jc(1951,`li`)(1952,`code`),iO(1953,`po-helper`),wg()()(),jc(1954,`p`),iO(1955,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(1956,`p`),iO(1957,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(1958,`ul`)(1959,`li`)(1960,`code`),iO(1961,`--field-container-title-justify`),wg()(),jc(1962,`li`)(1963,`code`),iO(1964,`--field-container-title-flex`),wg()()(),jc(1965,`p`),iO(1966,`Exemplo:`),wg(),jc(1967,`pre`)(1968,`code`),iO(1969,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(1970,`p`),iO(1971,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(1972,`tr`,16)(1973,`td`,17)(1974,`div`,25)(1975,`span`,26),iO(1976,` container`),nu(1977,`br`),wg()()(),jc(1978,`td`,21)(1979,`code`,27),iO(1980,`string`),wg()(),jc(1981,`td`,24)(1982,`em`)(1983,`strong`),iO(1984,`(opcional)`),wg()(),jc(1985,`p`),iO(1986,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),wg(),jc(1987,`p`),iO(1988,`Está propriedade é do tipo string, o valor que será titulo do contianer`),wg()()(),jc(1989,`tr`,16)(1990,`td`,17)(1991,`div`,25)(1992,`span`,26),iO(1993,` customAction`),nu(1994,`br`),wg()()(),jc(1995,`td`,21)(1996,`code`,47),iO(1997,`PoProgressAction`),wg()(),jc(1998,`td`,24)(1999,`em`)(2e3,`strong`),iO(2001,`(opcional)`),wg()(),jc(2002,`p`),iO(2003,`Define uma ação personalizada no componente `),jc(2004,`code`),iO(2005,`po-upload`),wg(),iO(2006,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),wg(),jc(2007,`p`)(2008,`strong`),iO(2009,`Componente compatível`),wg(),iO(2010,`: `),jc(2011,`code`),iO(2012,`po-upload`),wg(),iO(2013,`,`),wg(),jc(2014,`p`)(2015,`strong`),iO(2016,`Exemplo de configuração`),wg(),iO(2017,`:`),wg(),jc(2018,`pre`)(2019,`code`,48),iO(2020,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),wg()()()(),jc(2021,`tr`,16)(2022,`td`,17)(2023,`div`,25)(2024,`span`,26),iO(2025,` customActionClick`),nu(2026,`br`),wg()()(),jc(2027,`td`,21)(2028,`code`,49),iO(2029,`(file: PoUploadFile) => void`),wg()(),jc(2030,`td`,24)(2031,`em`)(2032,`strong`),iO(2033,`(opcional)`),wg()(),jc(2034,`p`),iO(2035,`Evento emitido ao clicar na ação personalizada configurada no `),jc(2036,`code`),iO(2037,`p-custom-action`),wg(),iO(2038,`.`),wg(),jc(2039,`p`)(2040,`strong`),iO(2041,`Componente compatível`),wg(),iO(2042,`: `),jc(2043,`code`),iO(2044,`po-upload`),wg(),iO(2045,`,`),wg(),jc(2046,`p`),iO(2047,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),wg(),jc(2048,`p`)(2049,`strong`),iO(2050,`Parâmetro do evento`),wg(),iO(2051,`:`),wg(),jc(2052,`ul`)(2053,`li`)(2054,`code`),iO(2055,`file`),wg(),iO(2056,`: O arquivo associado ao botão de ação. Este objeto é da classe `),jc(2057,`code`),iO(2058,`PoUploadFile`),wg(),iO(2059,` e contém informações sobre o arquivo, como nome, status e progresso.`),wg()(),jc(2060,`p`)(2061,`strong`),iO(2062,`Exemplo de uso`),wg(),iO(2063,`:`),wg(),jc(2064,`pre`)(2065,`code`,48),iO(2066,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),wg()()()(),jc(2067,`tr`,16)(2068,`td`,17)(2069,`div`,25)(2070,`span`,26),iO(2071,` debounceTime`),nu(2072,`br`),wg()()(),jc(2073,`td`,21)(2074,`code`,45),iO(2075,`number`),wg()(),jc(2076,`td`,24)(2077,`em`)(2078,`strong`),iO(2079,`(opcional)`),wg()(),jc(2080,`p`),iO(2081,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),jc(2082,`code`),iO(2083,`p-filter-service`),wg(),iO(2084,`).`),wg(),jc(2085,`p`)(2086,`strong`),iO(2087,`Componentes compatíveis:`),wg(),jc(2088,`code`),iO(2089,`po-combo`),wg(),iO(2090,`, `),jc(2091,`code`),iO(2092,`po-multiselect`),wg(),iO(2093,`.`),wg()()(),jc(2094,`tr`,16)(2095,`td`,17)(2096,`div`,25)(2097,`span`,26),iO(2098,` decimalsLength`),nu(2099,`br`),wg()()(),jc(2100,`td`,21)(2101,`code`,45),iO(2102,`number`),wg()(),jc(2103,`td`,24)(2104,`em`)(2105,`strong`),iO(2106,`(opcional)`),wg()(),jc(2107,`p`),iO(2108,`Quantidade máxima de casas decimais.`),wg(),jc(2109,`blockquote`)(2110,`p`),iO(2111,`Esta propriedade só pode ser utilizada quando o `),jc(2112,`code`),iO(2113,`type`),wg(),iO(2114,` for `),jc(2115,`em`),iO(2116,`currency`),wg(),iO(2117,` ou `),jc(2118,`em`),iO(2119,`decimal`),wg(),iO(2120,`.`),wg()(),jc(2121,`blockquote`)(2122,`p`),iO(2123,`Quando utilizado com `),jc(2124,`code`),iO(2125,`displayFormat`),wg(),iO(2126,`, será respeitado o valor `),jc(2127,`strong`),iO(2128,`mais restritivo`),wg(),iO(2129,` entre esta propriedade e o número de casas decimais definido no formato.`),wg()()()(),jc(2130,`tr`,16)(2131,`td`,17)(2132,`div`,25)(2133,`span`,26),iO(2134,` directory`),nu(2135,`br`),wg()()(),jc(2136,`td`,21)(2137,`code`,29),iO(2138,`boolean`),wg()(),jc(2139,`td`,24)(2140,`em`)(2141,`strong`),iO(2142,`(opcional)`),wg()(),jc(2143,`p`),iO(2144,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),wg(),jc(2145,`blockquote`)(2146,`p`),iO(2147,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),wg()(),jc(2148,`blockquote`)(2149,`p`),iO(2150,`Definição não suportada pelo browser `),jc(2151,`strong`),iO(2152,`Internet Explorer`),wg(),iO(2153,`, todavia será possível a seleção de arquivos padrão.`),wg()(),jc(2154,`p`)(2155,`strong`),iO(2156,`Componente compatível`),wg(),iO(2157,`: `),jc(2158,`code`),iO(2159,`po-upload`),wg()()()(),jc(2160,`tr`,16)(2161,`td`,17)(2162,`div`,25)(2163,`span`,26),iO(2164,` disabled`),nu(2165,`br`),wg()()(),jc(2166,`td`,21)(2167,`code`,29),iO(2168,`boolean`),wg()(),jc(2169,`td`,24)(2170,`em`)(2171,`strong`),iO(2172,`(opcional)`),wg()(),jc(2173,`p`),iO(2174,`Desabilita o campo caso informar o valor `),jc(2175,`em`),iO(2176,`true`),wg(),iO(2177,`.`),wg()()(),jc(2178,`tr`,16)(2179,`td`,17)(2180,`div`,25)(2181,`span`,26),iO(2182,` disabledInitFilter`),nu(2183,`br`),wg()()(),jc(2184,`td`,21)(2185,`code`,29),iO(2186,`boolean`),wg()(),jc(2187,`td`,24)(2188,`em`)(2189,`strong`),iO(2190,`(opcional)`),wg()(),jc(2191,`p`),iO(2192,`Desabilita o filtro inicial no serviço do `),jc(2193,`code`),iO(2194,`po-combo`),wg(),iO(2195,`, que é executado no primeiro clique no campo.`),wg()()(),jc(2196,`tr`,16)(2197,`td`,17)(2198,`div`,25)(2199,`span`,26),iO(2200,` disabledTabFilter`),nu(2201,`br`),wg()()(),jc(2202,`td`,21)(2203,`code`,29),iO(2204,`boolean`),wg()(),jc(2205,`td`,24)(2206,`em`)(2207,`strong`),iO(2208,`(opcional)`),wg()(),jc(2209,`p`),iO(2210,`Se verdadeiro, desabilitará a busca de um item via TAB no `),jc(2211,`code`),iO(2212,`po-combo`),wg(),iO(2213,`.`),wg()()(),jc(2214,`tr`,16)(2215,`td`,17)(2216,`div`,25)(2217,`span`,26),iO(2218,` displayFormat`),nu(2219,`br`),wg()()(),jc(2220,`td`,21)(2221,`code`,27),iO(2222,`string`),wg()(),jc(2223,`td`,24)(2224,`em`)(2225,`strong`),iO(2226,`(opcional)`),wg()(),jc(2227,`p`),iO(2228,`Define uma máscara de formatação numérica avançada para o campo.`),wg(),jc(2229,`p`),iO(2230,`Simbologia suportada:`),wg(),jc(2231,`ul`)(2232,`li`)(2233,`code`),iO(2234,`9`),wg(),iO(2235,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),wg(),jc(2236,`li`)(2237,`code`),iO(2238,`>`),wg(),iO(2239,`: Supressão de zero à esquerda (dígito não obrigatório);`),wg(),jc(2240,`li`)(2241,`code`),iO(2242,`<`),wg(),iO(2243,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),wg(),jc(2244,`li`)(2245,`code`),iO(2246,`.`),wg(),iO(2247,`: Separador decimal (convertido conforme locale);`),wg(),jc(2248,`li`)(2249,`code`),iO(2250,`,`),wg(),iO(2251,`: Separador de milhar/grupo (convertido conforme locale);`),wg(),jc(2252,`li`)(2253,`code`),iO(2254,`-`),wg(),iO(2255,`: Sinal negativo (deve ser o primeiro caractere do formato).`),wg()(),jc(2256,`blockquote`)(2257,`p`),iO(2258,`Quando utilizado com `),jc(2259,`code`),iO(2260,`decimalsLength`),wg(),iO(2261,` ou `),jc(2262,`code`),iO(2263,`thousandMaxlength`),wg(),iO(2264,`, será respeitado o valor `),jc(2265,`strong`),iO(2266,`mais restritivo`),wg(),iO(2267,` entre a propriedade e o formato.`),wg()(),jc(2268,`p`),iO(2269,`Exemplos: `),jc(2270,`code`),iO(2271,`'>>>,>>>,>>9.99'`),wg(),iO(2272,`, `),jc(2273,`code`),iO(2274,`'->>9.99'`),wg(),iO(2275,`, `),jc(2276,`code`),iO(2277,`'999.9'`),wg()(),jc(2278,`blockquote`)(2279,`p`),iO(2280,`Esta propriedade só pode ser utilizada quando o `),jc(2281,`code`),iO(2282,`type`),wg(),iO(2283,` for `),jc(2284,`em`),iO(2285,`currency`),wg(),iO(2286,` ou `),jc(2287,`em`),iO(2288,`decimal`),wg(),iO(2289,`.`),wg()(),jc(2290,`p`)(2291,`strong`),iO(2292,`Componente compatível:`),wg(),jc(2293,`code`),iO(2294,`po-decimal`),wg(),iO(2295,`.`),wg()()(),jc(2296,`tr`,16)(2297,`td`,17)(2298,`div`,25)(2299,`span`,26),iO(2300,` divider`),nu(2301,`br`),wg()()(),jc(2302,`td`,21)(2303,`code`,27),iO(2304,`string`),wg()(),jc(2305,`td`,24)(2306,`em`)(2307,`strong`),iO(2308,`(opcional)`),wg()(),jc(2309,`p`),iO(2310,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),wg()()(),jc(2311,`tr`,16)(2312,`td`,17)(2313,`div`,25)(2314,`span`,26),iO(2315,` dragDrop`),nu(2316,`br`),wg()()(),jc(2317,`td`,21)(2318,`code`,29),iO(2319,`boolean`),wg()(),jc(2320,`td`,24)(2321,`em`)(2322,`strong`),iO(2323,`(opcional)`),wg()(),jc(2324,`p`),iO(2325,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),wg(),jc(2326,`blockquote`)(2327,`p`),iO(2328,`Recomendamos utilizar apenas um `),jc(2329,`code`),iO(2330,`po-upload`),wg(),iO(2331,` com esta funcionalidade por tela.`),wg()(),jc(2332,`p`)(2333,`strong`),iO(2334,`Componente compatível`),wg(),iO(2335,`: `),jc(2336,`code`),iO(2337,`po-upload`),wg()()()(),jc(2338,`tr`,16)(2339,`td`,17)(2340,`div`,25)(2341,`span`,26),iO(2342,` dragDropHeight`),nu(2343,`br`),wg()()(),jc(2344,`td`,21)(2345,`code`,45),iO(2346,`number`),wg()(),jc(2347,`td`,24)(2348,`em`)(2349,`strong`),iO(2350,`(opcional)`),wg()(),jc(2351,`p`),iO(2352,`Define em `),jc(2353,`em`),iO(2354,`pixels`),wg(),iO(2355,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),jc(2356,`code`),iO(2357,`160px`),wg(),iO(2358,`.`),wg(),jc(2359,`blockquote`)(2360,`p`),iO(2361,`Esta propriedade funciona somente se a propriedade `),jc(2362,`code`),iO(2363,`p-drag-drop`),wg(),iO(2364,` estiver habilitada.`),wg()(),jc(2365,`p`)(2366,`strong`),iO(2367,`Componente compatível`),wg(),iO(2368,`: `),jc(2369,`code`),iO(2370,`po-upload`),wg()()()(),jc(2371,`tr`,16)(2372,`td`,17)(2373,`div`,25)(2374,`span`,26),iO(2375,` errorAsyncFunction`),nu(2376,`br`),wg()()(),jc(2377,`td`,21)(2378,`code`,50),iO(2379,`(value) => Observable<boolean>`),wg()(),jc(2380,`td`,24)(2381,`em`)(2382,`strong`),iO(2383,`(opcional)`),wg()(),jc(2384,`p`),iO(2385,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(2386,`code`),iO(2387,`change`),wg(),iO(2388,` ou `),jc(2389,`code`),iO(2390,`change-model`),wg(),iO(2391,`, dependendo do valor da propriedade `),jc(2392,`code`),iO(2393,`triggerMode`),wg(),iO(2394,`.`),wg(),jc(2395,`blockquote`)(2396,`p`),iO(2397,`Retorna `),jc(2398,`code`),iO(2399,`Observable com o valor true`),wg(),iO(2400,` para sinalizar o erro `),jc(2401,`code`),iO(2402,`false`),wg(),iO(2403,` para indicar que não há erro.`),wg()(),jc(2404,`p`)(2405,`strong`),iO(2406,`Componente compatível`),wg(),iO(2407,`: `),jc(2408,`code`),iO(2409,`po-datepicker`),wg()()()(),jc(2410,`tr`,16)(2411,`td`,17)(2412,`div`,25)(2413,`span`,26),iO(2414,` errorAsyncProperties`),nu(2415,`br`),wg()()(),jc(2416,`td`,21)(2417,`code`,51),iO(2418,`ErrorAsyncProperties`),wg()(),jc(2419,`td`,24)(2420,`em`)(2421,`strong`),iO(2422,`(opcional)`),wg()(),jc(2423,`p`),iO(2424,`Realiza alguma validação customizada assíncrona no componente.`),wg(),jc(2425,`p`)(2426,`strong`),iO(2427,`Componentes compatíveis:`),wg(),jc(2428,`code`),iO(2429,`po-input`),wg(),iO(2430,`, `),jc(2431,`code`),iO(2432,`po-number`),wg(),iO(2433,`, `),jc(2434,`code`),iO(2435,`po-decimal`),wg(),iO(2436,`, `),jc(2437,`code`),iO(2438,`po-password`),wg(),iO(2439,`.`),wg()()(),jc(2440,`tr`,16)(2441,`td`,17)(2442,`div`,25)(2443,`span`,26),iO(2444,` errorLimit`),nu(2445,`br`),wg()()(),jc(2446,`td`,21)(2447,`code`,29),iO(2448,`boolean`),wg()(),jc(2449,`td`,24)(2450,`em`)(2451,`strong`),iO(2452,`(opcional)`),wg()(),jc(2453,`p`),iO(2454,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(2455,`blockquote`)(2456,`p`),iO(2457,`Caso essa propriedade seja definida como `),jc(2458,`code`),iO(2459,`true`),wg(),iO(2460,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()(),jc(2461,`p`)(2462,`strong`),iO(2463,`Componentes compatíveis:`),wg(),jc(2464,`code`),iO(2465,`po-checkbox-group`),wg(),iO(2466,`, `),jc(2467,`code`),iO(2468,`po-combo`),wg(),iO(2469,`, `),jc(2470,`code`),iO(2471,`po-datepicker`),wg(),iO(2472,`, `),jc(2473,`code`),iO(2474,`po-datepicker-range`),wg(),iO(2475,`, `),jc(2476,`code`),iO(2477,`po-decimal`),wg(),iO(2478,`, `),jc(2479,`code`),iO(2480,`po-input`),wg(),iO(2481,`, `),jc(2482,`code`),iO(2483,`po-lookup`),wg(),iO(2484,`, `),jc(2485,`code`),iO(2486,`po-multiselect`),wg(),iO(2487,`, `),jc(2488,`code`),iO(2489,`po-number`),wg(),iO(2490,`, `),jc(2491,`code`),iO(2492,`po-password`),wg(),iO(2493,`, `),jc(2494,`code`),iO(2495,`po-radio-group`),wg(),iO(2496,`, `),jc(2497,`code`),iO(2498,`po-select`),wg(),iO(2499,`,
`),jc(2500,`code`),iO(2501,`po-switch`),wg(),iO(2502,`, `),jc(2503,`code`),iO(2504,`po-textarea`),wg(),iO(2505,`, `),jc(2506,`code`),iO(2507,`po-timepicker`),wg(),iO(2508,`.`),wg()()(),jc(2509,`tr`,16)(2510,`td`,17)(2511,`div`,25)(2512,`span`,26),iO(2513,` errorMessage`),nu(2514,`br`),wg()()(),jc(2515,`td`,21)(2516,`code`,27),iO(2517,`string`),wg()(),jc(2518,`td`,24)(2519,`em`)(2520,`strong`),iO(2521,`(opcional)`),wg()(),jc(2522,`p`),iO(2523,`Mensagem que será apresentada quando o campo ficar inválido.`),wg(),jc(2524,`p`),iO(2525,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),wg(),jc(2526,`ul`)(2527,`li`),iO(2528,`pattern;`),wg(),jc(2529,`li`),iO(2530,`minValue;`),wg(),jc(2531,`li`),iO(2532,`maxValue;`),wg(),jc(2533,`li`),iO(2534,`required;`),wg()(),jc(2535,`blockquote`)(2536,`p`),iO(2537,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),jc(2538,`code`),iO(2539,`po-datepicker`),wg(),iO(2540,`, `),jc(2541,`code`),iO(2542,`po-input`),wg(),iO(2543,`, `),jc(2544,`code`),iO(2545,`po-number`),wg(),iO(2546,`, `),jc(2547,`code`),iO(2548,`po-decimal`),wg(),iO(2549,`, `),jc(2550,`code`),iO(2551,`po-password`),wg(),iO(2552,`, `),jc(2553,`code`),iO(2554,`po-timepicker`),wg(),iO(2555,`, \xE9 necess\xE1rio que a propriedade
`),jc(2556,`code`),iO(2557,`requiredFieldErrorMessage`),wg(),iO(2558,` esteja como `),jc(2559,`code`),iO(2560,`true`),wg(),iO(2561,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),jc(2562,`code`),iO(2563,`po-datepicker-range`),wg(),iO(2564,`, `),jc(2565,`code`),iO(2566,`po-select`),wg(),iO(2567,`, `),jc(2568,`code`),iO(2569,`po-checkbox-group`),wg(),iO(2570,`, `),jc(2571,`code`),iO(2572,`po-radio-group`),wg(),iO(2573,`, `),jc(2574,`code`),iO(2575,`po-multiselect`),wg(),iO(2576,`, `),jc(2577,`code`),iO(2578,`po-combo`),wg(),iO(2579,`,
`),jc(2580,`code`),iO(2581,`po-lookup`),wg(),iO(2582,` e `),jc(2583,`code`),iO(2584,`po-textarea`),wg(),iO(2585,` não é necessário passar a propriedade `),jc(2586,`code`),iO(2587,`requiredFieldErrorMessage`),wg(),iO(2588,`.`),wg()(),jc(2589,`p`)(2590,`strong`),iO(2591,`Componentes compatíveis:`),wg(),jc(2592,`code`),iO(2593,`po-checkbox-group`),wg(),iO(2594,`, `),jc(2595,`code`),iO(2596,`po-combo`),wg(),iO(2597,`, `),jc(2598,`code`),iO(2599,`po-datepicker`),wg(),iO(2600,`, `),jc(2601,`code`),iO(2602,`po-datepicker-range`),wg(),iO(2603,`, `),jc(2604,`code`),iO(2605,`po-decimal`),wg(),iO(2606,`, `),jc(2607,`code`),iO(2608,`po-input`),wg(),iO(2609,`, `),jc(2610,`code`),iO(2611,`po-lookup`),wg(),iO(2612,`, `),jc(2613,`code`),iO(2614,`po-multiselect`),wg(),iO(2615,`, `),jc(2616,`code`),iO(2617,`po-number`),wg(),iO(2618,`, `),jc(2619,`code`),iO(2620,`po-password`),wg(),iO(2621,`, `),jc(2622,`code`),iO(2623,`po-radio-group`),wg(),iO(2624,`, `),jc(2625,`code`),iO(2626,`po-select`),wg(),iO(2627,`,
`),jc(2628,`code`),iO(2629,`po-switch`),wg(),iO(2630,`, `),jc(2631,`code`),iO(2632,`po-textarea`),wg(),iO(2633,`, `),jc(2634,`code`),iO(2635,`po-timepicker`),wg(),iO(2636,`.`),wg()()(),jc(2637,`tr`,16)(2638,`td`,17)(2639,`div`,25)(2640,`span`,26),iO(2641,` fieldLabel`),nu(2642,`br`),wg()()(),jc(2643,`td`,21)(2644,`code`,27),iO(2645,`string`),wg()(),jc(2646,`td`,24)(2647,`em`)(2648,`strong`),iO(2649,`(opcional)`),wg()(),jc(2650,`p`),iO(2651,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),wg(),jc(2652,`p`),iO(2653,`O valor padrão é: `),jc(2654,`code`),iO(2655,`label`),wg(),iO(2656,`.`),wg(),jc(2657,`blockquote`)(2658,`p`),iO(2659,`Esta propriedade pode ser utilizada em conjunto com: `),jc(2660,`code`),iO(2661,`options`),wg(),iO(2662,`, `),jc(2663,`code`),iO(2664,`optionsService`),wg(),iO(2665,` e `),jc(2666,`code`),iO(2667,`searchService`),wg(),iO(2668,`.`),wg()()()(),jc(2669,`tr`,16)(2670,`td`,17)(2671,`div`,25)(2672,`span`,26),iO(2673,` fieldValue`),nu(2674,`br`),wg()()(),jc(2675,`td`,21)(2676,`code`,27),iO(2677,`string`),wg()(),jc(2678,`td`,24)(2679,`em`)(2680,`strong`),iO(2681,`(opcional)`),wg()(),jc(2682,`p`),iO(2683,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),wg(),jc(2684,`p`),iO(2685,`O valor padrão é: `),jc(2686,`code`),iO(2687,`value`),wg(),iO(2688,`.`),wg(),jc(2689,`blockquote`)(2690,`p`),iO(2691,`Esta propriedade pode ser utilizada em conjunto com: `),jc(2692,`code`),iO(2693,`options`),wg(),iO(2694,`, `),jc(2695,`code`),iO(2696,`optionsService`),wg(),iO(2697,` e `),jc(2698,`code`),iO(2699,`searchService`),wg(),iO(2700,`.`),wg()()()(),jc(2701,`tr`,16)(2702,`td`,17)(2703,`div`,25)(2704,`span`,26),iO(2705,` filterMinlength`),nu(2706,`br`),wg()()(),jc(2707,`td`,21)(2708,`code`,45),iO(2709,`number`),wg()(),jc(2710,`td`,24)(2711,`em`)(2712,`strong`),iO(2713,`(opcional)`),wg()(),jc(2714,`p`),iO(2715,`Valor mínimo de caracteres para realizar o filtro no serviço do `),jc(2716,`code`),iO(2717,`po-combo`),wg(),iO(2718,`.`),wg()()(),jc(2719,`tr`,16)(2720,`td`,17)(2721,`div`,25)(2722,`span`,26),iO(2723,` filterMode`),nu(2724,`br`),wg()()(),jc(2725,`td`,21)(2726,`code`,52),iO(2727,`PoMultiselectFilterMode`),wg()(),jc(2728,`td`,24)(2729,`em`)(2730,`strong`),iO(2731,`(opcional)`),wg()(),jc(2732,`p`),iO(2733,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),jc(2734,`code`),iO(2735,`startsWith`),wg(),iO(2736,`, `),jc(2737,`code`),iO(2738,`contains`),wg(),iO(2739,` ou `),jc(2740,`code`),iO(2741,`endsWith`),wg(),iO(2742,`.`),wg(),jc(2743,`blockquote`)(2744,`p`),iO(2745,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),wg()(),jc(2746,`p`)(2747,`strong`),iO(2748,`Componente compatível:`),wg(),jc(2749,`code`),iO(2750,`po-multiselect`),wg(),iO(2751,`.`),wg()()(),jc(2752,`tr`,16)(2753,`td`,17)(2754,`div`,25)(2755,`span`,26),iO(2756,` forceBooleanComponentType`),nu(2757,`br`),wg()()(),jc(2758,`td`,21)(2759,`code`,53),iO(2760,`ForceBooleanComponentEnum`),wg()(),jc(2761,`td`,24)(2762,`em`)(2763,`strong`),iO(2764,`(opcional)`),wg()(),jc(2765,`p`),iO(2766,`Valores aceitos:`),wg(),jc(2767,`ul`)(2768,`li`),iO(2769,`ForceBooleanComponentEnum.switch`),wg(),jc(2770,`li`),iO(2771,`ForceBooleanComponentEnum.checkbox`),wg()()()(),jc(2772,`tr`,16)(2773,`td`,17)(2774,`div`,25)(2775,`span`,26),iO(2776,` forceOptionsComponentType`),nu(2777,`br`),wg()()(),jc(2778,`td`,21)(2779,`code`,54),iO(2780,`ForceOptionComponentEnum`),wg()(),jc(2781,`td`,24)(2782,`em`)(2783,`strong`),iO(2784,`(opcional)`),wg()(),jc(2785,`p`),iO(2786,`pode ser utilizada em conjunto com a propriedade `),jc(2787,`code`),iO(2788,`options`),wg(),iO(2789,` forçando o componente a renderizar um `),jc(2790,`code`),iO(2791,`po-select`),wg(),iO(2792,` ou `),jc(2793,`code`),iO(2794,`po-radio-group`),wg(),iO(2795,`.`),wg(),jc(2796,`p`),iO(2797,`Valores aceitos:`),wg(),jc(2798,`ul`)(2799,`li`),iO(2800,`ForceOptionComponentEnum.radioGroup`),wg(),jc(2801,`li`),iO(2802,`ForceOptionComponentEnum.select`),wg()(),jc(2803,`blockquote`)(2804,`p`),iO(2805,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),jc(2806,`code`),iO(2807,`optionsMulti`),wg(),iO(2808,` e `),jc(2809,`code`),iO(2810,`optionsService`),wg(),iO(2811,`.`),wg()()()(),jc(2812,`tr`,16)(2813,`td`,17)(2814,`div`,25)(2815,`span`,26),iO(2816,` formField`),nu(2817,`br`),wg()()(),jc(2818,`td`,21)(2819,`code`,27),iO(2820,`string`),wg()(),jc(2821,`td`,24)(2822,`em`)(2823,`strong`),iO(2824,`(opcional)`),wg()(),jc(2825,`p`),iO(2826,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),jc(2827,`code`),iO(2828,`url`),wg(),iO(2829,`.`),wg(),jc(2830,`blockquote`)(2831,`p`),iO(2832,`O valor default é `),jc(2833,`code`),iO(2834,`files`),wg()()(),jc(2835,`p`)(2836,`strong`),iO(2837,`Componente compatível`),wg(),iO(2838,`: `),jc(2839,`code`),iO(2840,`po-upload`),wg()()()(),jc(2841,`tr`,16)(2842,`td`,17)(2843,`div`,25)(2844,`span`,26),iO(2845,` format`),nu(2846,`br`),wg()()(),jc(2847,`td`,21)(2848,`code`,27),iO(2849,`string `),wg(),jc(2850,`code`,32),iO(2851,` Array<string>`),wg()(),jc(2852,`td`,24)(2853,`em`)(2854,`strong`),iO(2855,`(opcional)`),wg()(),jc(2856,`p`),iO(2857,`Formato de exibição no campo.`),wg(),jc(2858,`p`),iO(2859,`Ao utilizar esta propriedade com o `),jc(2860,`code`),iO(2861,`type`),wg(),jc(2862,`em`),iO(2863,`PoDynamicFieldType.Date`),wg(),iO(2864,` ou `),jc(2865,`em`),iO(2866,`PoDynamicFieldType.DateTime`),wg(),iO(2867,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),wg(),jc(2868,`p`),iO(2869,`Valores válidos:`),wg(),jc(2870,`ul`)(2871,`li`),iO(2872,`dd/mm/yyyy`),wg(),jc(2873,`li`),iO(2874,`mm/dd/yyyy`),wg(),jc(2875,`li`),iO(2876,`yyyy/mm/dd`),wg()(),jc(2877,`p`),iO(2878,`Ao utilizar com o `),jc(2879,`code`),iO(2880,`type`),wg(),jc(2881,`em`),iO(2882,`PoDynamicFieldType.Time`),wg(),iO(2883,`, define o formato de exibição do horário:`),wg(),jc(2884,`p`),iO(2885,`Valores válidos:`),wg(),jc(2886,`ul`)(2887,`li`)(2888,`code`),iO(2889,`24`),wg(),iO(2890,`: formato de 24 horas (padrão)`),wg(),jc(2891,`li`)(2892,`code`),iO(2893,`12`),wg(),iO(2894,`: formato de 12 horas com indicador AM/PM`),wg()(),jc(2895,`p`),iO(2896,`Também pode-se utilizar em conjunto com `),jc(2897,`code`),iO(2898,`searchService`),wg(),iO(2899,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),wg(),jc(2900,`p`)(2901,`strong`),iO(2902,`Componentes compatíveis:`),wg(),jc(2903,`code`),iO(2904,`po-datepicker`),wg(),iO(2905,`, `),jc(2906,`code`),iO(2907,`po-datetimepicker`),wg(),iO(2908,`, `),jc(2909,`code`),iO(2910,`po-timepicker`),wg(),iO(2911,`, `),jc(2912,`code`),iO(2913,`po-lookup`),wg(),iO(2914,`.`),wg()()(),jc(2915,`tr`,16)(2916,`td`,17)(2917,`div`,25)(2918,`span`,26),iO(2919,` formatModel`),nu(2920,`br`),wg()()(),jc(2921,`td`,21)(2922,`code`,29),iO(2923,`boolean`),wg()(),jc(2924,`td`,24)(2925,`em`)(2926,`strong`),iO(2927,`(opcional)`),wg()(),jc(2928,`p`),iO(2929,`Indica se o `),jc(2930,`code`),iO(2931,`model`),wg(),iO(2932,` receberá o valor formatado pelas propriedades `),jc(2933,`code`),iO(2934,`p-label-on`),wg(),iO(2935,` e `),jc(2936,`code`),iO(2937,`p-label-off`),wg(),iO(2938,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),wg(),jc(2939,`p`),iO(2940,`O valor padrão é: `),jc(2941,`code`),iO(2942,`false`),wg(),iO(2943,`.`),wg(),jc(2944,`blockquote`)(2945,`p`),iO(2946,`Esta propriedade está disponivel apenas para o `),jc(2947,`code`),iO(2948,`swicth`),wg(),iO(2949,`.`),wg()()()(),jc(2950,`tr`,16)(2951,`td`,17)(2952,`div`,25)(2953,`span`,26),iO(2954,` formatTime`),nu(2955,`br`),wg()()(),jc(2956,`td`,21)(2957,`code`,27),iO(2958,`string`),wg()(),jc(2959,`td`,24)(2960,`em`)(2961,`strong`),iO(2962,`(opcional)`),wg()(),jc(2963,`p`),iO(2964,`Define o formato de exibição do timer (`),jc(2965,`code`),iO(2966,`'12'`),wg(),iO(2967,` ou `),jc(2968,`code`),iO(2969,`'24'`),wg(),iO(2970,`).`),wg(),jc(2971,`p`)(2972,`strong`),iO(2973,`Componente compatível:`),wg(),jc(2974,`code`),iO(2975,`po-datetimepicker`),wg()()()(),jc(2976,`tr`,16)(2977,`td`,17)(2978,`div`,25)(2979,`span`,26),iO(2980,` gridColumns`),nu(2981,`br`),wg()()(),jc(2982,`td`,21)(2983,`code`,45),iO(2984,`number`),wg()(),jc(2985,`td`,24)(2986,`em`)(2987,`strong`),iO(2988,`(opcional)`),wg()(),jc(2989,`p`),iO(2990,`Tamanho de exibição do campo em telas.`),wg(),jc(2991,`p`),iO(2992,`Deve ser usado o sistema de `),jc(2993,`strong`),iO(2994,`grid`),wg(),iO(2995,` do PO (1 ... 12 colunas).`),wg(),jc(2996,`blockquote`)(2997,`p`),iO(2998,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(2999,`tr`,16)(3e3,`td`,17)(3001,`div`,25)(3002,`span`,26),iO(3003,` gridLgColumns`),nu(3004,`br`),wg()()(),jc(3005,`td`,21)(3006,`code`,45),iO(3007,`number`),wg()(),jc(3008,`td`,24)(3009,`em`)(3010,`strong`),iO(3011,`(opcional)`),wg()(),jc(3012,`p`),iO(3013,`Tamanho de exibição do campo em telas grandes (lg).`),wg(),jc(3014,`p`),iO(3015,`Deve ser usado o sistema de `),jc(3016,`strong`),iO(3017,`grid`),wg(),iO(3018,` do PO (1 ... 12 colunas).`),wg(),jc(3019,`blockquote`)(3020,`p`),iO(3021,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3022,`code`),iO(3023,`gridColumns`),wg(),iO(3024,`.`),wg()()()(),jc(3025,`tr`,16)(3026,`td`,17)(3027,`div`,25)(3028,`span`,26),iO(3029,` gridLgPull`),nu(3030,`br`),wg()()(),jc(3031,`td`,21)(3032,`code`,45),iO(3033,`number`),wg()(),jc(3034,`td`,24)(3035,`em`)(3036,`strong`),iO(3037,`(opcional)`),wg()(),jc(3038,`p`),iO(3039,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),wg(),jc(3040,`p`),iO(3041,`Deve ser usado o sistema de `),jc(3042,`strong`),iO(3043,`grid`),wg(),iO(3044,` do PO (1 ... 11 colunas).`),wg(),jc(3045,`blockquote`)(3046,`p`),iO(3047,`Esta propriedade não funciona com a propriedade `),jc(3048,`code`),iO(3049,`gridColumns`),wg(),iO(3050,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3051,`tr`,16)(3052,`td`,17)(3053,`div`,25)(3054,`span`,26),iO(3055,` gridMdColumns`),nu(3056,`br`),wg()()(),jc(3057,`td`,21)(3058,`code`,45),iO(3059,`number`),wg()(),jc(3060,`td`,24)(3061,`em`)(3062,`strong`),iO(3063,`(opcional)`),wg()(),jc(3064,`p`),iO(3065,`Tamanho de exibição do campo em telas médias (md).`),wg(),jc(3066,`p`),iO(3067,`Deve ser usado o sistema de `),jc(3068,`strong`),iO(3069,`grid`),wg(),iO(3070,` do PO (1 ... 12 colunas).`),wg(),jc(3071,`blockquote`)(3072,`p`),iO(3073,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3074,`code`),iO(3075,`gridColumns`),wg(),iO(3076,`.`),wg()()()(),jc(3077,`tr`,16)(3078,`td`,17)(3079,`div`,25)(3080,`span`,26),iO(3081,` gridMdPull`),nu(3082,`br`),wg()()(),jc(3083,`td`,21)(3084,`code`,45),iO(3085,`number`),wg()(),jc(3086,`td`,24)(3087,`em`)(3088,`strong`),iO(3089,`(opcional)`),wg()(),jc(3090,`p`),iO(3091,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),wg(),jc(3092,`p`),iO(3093,`Deve ser usado o sistema de `),jc(3094,`strong`),iO(3095,`grid`),wg(),iO(3096,` do PO (1 ... 11 colunas).`),wg(),jc(3097,`blockquote`)(3098,`p`),iO(3099,`Esta propriedade não funciona com a propriedade `),jc(3100,`code`),iO(3101,`gridColumns`),wg(),iO(3102,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3103,`tr`,16)(3104,`td`,17)(3105,`div`,25)(3106,`span`,26),iO(3107,` gridSmColumns`),nu(3108,`br`),wg()()(),jc(3109,`td`,21)(3110,`code`,45),iO(3111,`number`),wg()(),jc(3112,`td`,24)(3113,`em`)(3114,`strong`),iO(3115,`(opcional)`),wg()(),jc(3116,`p`),iO(3117,`Tamanho de exibição do campo em telas menores (sm).`),wg(),jc(3118,`p`),iO(3119,`Deve ser usado o sistema de `),jc(3120,`strong`),iO(3121,`grid`),wg(),iO(3122,` do PO (1 ... 12 colunas).`),wg(),jc(3123,`blockquote`)(3124,`p`),iO(3125,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3126,`code`),iO(3127,`gridColumns`),wg(),iO(3128,`.`),wg()()()(),jc(3129,`tr`,16)(3130,`td`,17)(3131,`div`,25)(3132,`span`,26),iO(3133,` gridSmPull`),nu(3134,`br`),wg()()(),jc(3135,`td`,21)(3136,`code`,45),iO(3137,`number`),wg()(),jc(3138,`td`,24)(3139,`em`)(3140,`strong`),iO(3141,`(opcional)`),wg()(),jc(3142,`p`),iO(3143,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),wg(),jc(3144,`p`),iO(3145,`Deve ser usado o sistema de `),jc(3146,`strong`),iO(3147,`grid`),wg(),iO(3148,` do PO (1 ... 11 colunas).`),wg(),jc(3149,`blockquote`)(3150,`p`),iO(3151,`Esta propriedade não funciona com a propriedade `),jc(3152,`code`),iO(3153,`gridColumns`),wg(),iO(3154,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3155,`tr`,16)(3156,`td`,17)(3157,`div`,25)(3158,`span`,26),iO(3159,` gridXlColumns`),nu(3160,`br`),wg()()(),jc(3161,`td`,21)(3162,`code`,45),iO(3163,`number`),wg()(),jc(3164,`td`,24)(3165,`em`)(3166,`strong`),iO(3167,`(opcional)`),wg()(),jc(3168,`p`),iO(3169,`Tamanho de exibição do campo em telas extra grandes (xl).`),wg(),jc(3170,`p`),iO(3171,`Deve ser usado o sistema de `),jc(3172,`strong`),iO(3173,`grid`),wg(),iO(3174,` do PO (1 ... 12 colunas).`),wg(),jc(3175,`blockquote`)(3176,`p`),iO(3177,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3178,`code`),iO(3179,`gridColumns`),wg(),iO(3180,`.`),wg()()()(),jc(3181,`tr`,16)(3182,`td`,17)(3183,`div`,25)(3184,`span`,26),iO(3185,` gridXlPull`),nu(3186,`br`),wg()()(),jc(3187,`td`,21)(3188,`code`,45),iO(3189,`number`),wg()(),jc(3190,`td`,24)(3191,`em`)(3192,`strong`),iO(3193,`(opcional)`),wg()(),jc(3194,`p`),iO(3195,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),wg(),jc(3196,`p`),iO(3197,`Deve ser usado o sistema de `),jc(3198,`strong`),iO(3199,`grid`),wg(),iO(3200,` do PO (1 ... 11 colunas).`),wg(),jc(3201,`blockquote`)(3202,`p`),iO(3203,`Esta propriedade não funciona com a propriedade `),jc(3204,`code`),iO(3205,`gridColumns`),wg(),iO(3206,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(3207,`tr`,16)(3208,`td`,17)(3209,`div`,25)(3210,`span`,26),iO(3211,` headers`),nu(3212,`br`),wg()()(),jc(3213,`td`,21)(3214,`code`,55),iO(3215,`{ [name: string]: string `),wg(),jc(3216,`code`,56),iO(3217,` Array<string>;
}`),wg()(),jc(3218,`td`,24)(3219,`em`)(3220,`strong`),iO(3221,`(opcional)`),wg()(),jc(3222,`p`),iO(3223,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),wg(),jc(3224,`p`)(3225,`strong`),iO(3226,`Componente compatível`),wg(),iO(3227,`: `),jc(3228,`code`),iO(3229,`po-upload`),wg()()()(),jc(3230,`tr`,16)(3231,`td`,17)(3232,`div`,25)(3233,`span`,26),iO(3234,` help`),nu(3235,`br`),wg()()(),jc(3236,`td`,21)(3237,`code`,27),iO(3238,`string`),wg()(),jc(3239,`td`,24)(3240,`em`)(3241,`strong`),iO(3242,`(opcional)`),wg()(),jc(3243,`p`),iO(3244,`Texto de ajuda.`),wg()()(),jc(3245,`tr`,16)(3246,`td`,17)(3247,`div`,25)(3248,`span`,26),iO(3249,` helper`),nu(3250,`br`),wg()()(),jc(3251,`td`,21)(3252,`code`,27),iO(3253,`string `),wg(),jc(3254,`code`,38),iO(3255,` PoHelperOptions`),wg()(),jc(3256,`td`,24)(3257,`em`)(3258,`strong`),iO(3259,`(opcional)`),wg()(),jc(3260,`p`),iO(3261,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),wg()()(),jc(3262,`tr`,16)(3263,`td`,17)(3264,`div`,25)(3265,`span`,26),iO(3266,` hideLabelStatus`),nu(3267,`br`),wg()()(),jc(3268,`td`,21)(3269,`code`,29),iO(3270,`boolean`),wg()(),jc(3271,`td`,24)(3272,`em`)(3273,`strong`),iO(3274,`(opcional)`),wg()(),jc(3275,`p`),iO(3276,`Indica se o status do `),jc(3277,`code`),iO(3278,`model`),wg(),iO(3279,` será escondido visualmente ao lado do switch`),wg()()(),jc(3280,`tr`,16)(3281,`td`,17)(3282,`div`,25)(3283,`span`,26),iO(3284,` hidePasswordPeek`),nu(3285,`br`),wg()()(),jc(3286,`td`,21)(3287,`code`,29),iO(3288,`boolean`),wg()(),jc(3289,`td`,24)(3290,`em`)(3291,`strong`),iO(3292,`(opcional)`),wg()(),jc(3293,`p`),iO(3294,`Permite esconder a função de espiar a senha digitada no `),jc(3295,`code`),iO(3296,`po-password`),wg(),iO(3297,`.`),wg()()(),jc(3298,`tr`,16)(3299,`td`,17)(3300,`div`,25)(3301,`span`,26),iO(3302,` hideRestrictionsInfo`),nu(3303,`br`),wg()()(),jc(3304,`td`,21)(3305,`code`,29),iO(3306,`boolean`),wg()(),jc(3307,`td`,24)(3308,`em`)(3309,`strong`),iO(3310,`(opcional)`),wg()(),jc(3311,`p`),iO(3312,`Oculta visualmente as informações de restrições para o upload.`),wg(),jc(3313,`p`)(3314,`strong`),iO(3315,`Componente compatível`),wg(),iO(3316,`: `),jc(3317,`code`),iO(3318,`po-upload`),wg()()()(),jc(3319,`tr`,16)(3320,`td`,17)(3321,`div`,25)(3322,`span`,26),iO(3323,` hideSearch`),nu(3324,`br`),wg()()(),jc(3325,`td`,21)(3326,`code`,29),iO(3327,`boolean`),wg()(),jc(3328,`td`,24)(3329,`em`)(3330,`strong`),iO(3331,`(opcional)`),wg()(),jc(3332,`p`),iO(3333,`Esconde o campo de pesquisa existente dentro do dropdown do `),jc(3334,`code`),iO(3335,`po-multiselect`),wg(),iO(3336,`.`),wg()()(),jc(3337,`tr`,16)(3338,`td`,17)(3339,`div`,25)(3340,`span`,26),iO(3341,` hideSelectAll`),nu(3342,`br`),wg()()(),jc(3343,`td`,21)(3344,`code`,29),iO(3345,`boolean`),wg()(),jc(3346,`td`,24)(3347,`em`)(3348,`strong`),iO(3349,`(opcional)`),wg()(),jc(3350,`p`),iO(3351,`Indica se o campo "Selecionar todos" do `),jc(3352,`code`),iO(3353,`po-multiselect`),wg(),iO(3354,` será escondido.`),wg()()(),jc(3355,`tr`,16)(3356,`td`,17)(3357,`div`,25)(3358,`span`,26),iO(3359,` hideSelectButton`),nu(3360,`br`),wg()()(),jc(3361,`td`,21)(3362,`code`,29),iO(3363,`boolean`),wg()(),jc(3364,`td`,24)(3365,`em`)(3366,`strong`),iO(3367,`(opcional)`),wg()(),jc(3368,`p`),iO(3369,`Omite o botão de seleção de arquivos.`),wg(),jc(3370,`blockquote`)(3371,`p`),iO(3372,`Caso o valor definido seja `),jc(3373,`code`),iO(3374,`true`),wg(),iO(3375,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(3376,`code`),iO(3377,`selectFiles()`),wg(),iO(3378,` para seleção de arquivos.`),wg()(),jc(3379,`p`)(3380,`strong`),iO(3381,`Componente compatível`),wg(),iO(3382,`: `),jc(3383,`code`),iO(3384,`po-upload`),wg()()()(),jc(3385,`tr`,16)(3386,`td`,17)(3387,`div`,25)(3388,`span`,26),iO(3389,` hideSendButton`),nu(3390,`br`),wg()()(),jc(3391,`td`,21)(3392,`code`,29),iO(3393,`boolean`),wg()(),jc(3394,`td`,24)(3395,`em`)(3396,`strong`),iO(3397,`(opcional)`),wg()(),jc(3398,`p`),iO(3399,`Omite o botão de envio de arquivos.`),wg(),jc(3400,`blockquote`)(3401,`p`),iO(3402,`Caso o valor definido seja `),jc(3403,`code`),iO(3404,`true`),wg(),iO(3405,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(3406,`code`),iO(3407,`sendFiles()`),wg(),iO(3408,` para envio do(s) arquivo(s) selecionado(s).`),wg()(),jc(3409,`p`)(3410,`strong`),iO(3411,`Componente compatível`),wg(),iO(3412,`: `),jc(3413,`code`),iO(3414,`po-upload`),wg()()()(),jc(3415,`tr`,16)(3416,`td`,17)(3417,`div`,25)(3418,`span`,26),iO(3419,` icon`),nu(3420,`br`),wg()()(),jc(3421,`td`,21)(3422,`code`,27),iO(3423,`string `),wg(),jc(3424,`code`,57),iO(3425,` TemplateRef<void>`),wg()(),jc(3426,`td`,24)(3427,`em`)(3428,`strong`),iO(3429,`(opcional)`),wg()(),jc(3430,`p`),iO(3431,`Define o ícone que será exibido no início do campo.`),wg(),jc(3432,`blockquote`)(3433,`p`),iO(3434,`Esta propriedade só pode ser utilizado nos campos:`),wg()(),jc(3435,`ul`)(3436,`li`),iO(3437,`Input;`),wg(),jc(3438,`li`),iO(3439,`Number;`),wg(),jc(3440,`li`),iO(3441,`Decimal;`),wg(),jc(3442,`li`),iO(3443,`Combo;`),wg(),jc(3444,`li`),iO(3445,`Password;`),wg()(),jc(3446,`blockquote`)(3447,`p`),iO(3448,`Veja a disponibilidade de ícones em `),jc(3449,`a`,58),iO(3450,`biblioteca de ícones`),wg(),iO(3451,`.`),wg()()()(),jc(3452,`tr`,16)(3453,`td`,17)(3454,`div`,25)(3455,`span`,26),iO(3456,` infiniteScroll`),nu(3457,`br`),wg()()(),jc(3458,`td`,21)(3459,`code`,29),iO(3460,`boolean`),wg()(),jc(3461,`td`,24)(3462,`em`)(3463,`strong`),iO(3464,`(opcional)`),wg()(),jc(3465,`p`),iO(3466,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),wg(),jc(3467,`p`)(3468,`strong`),iO(3469,`Componentes compatíveis:`),wg(),jc(3470,`code`),iO(3471,`po-combo`),wg(),iO(3472,`, `),jc(3473,`code`),iO(3474,`po-lookup`),wg(),iO(3475,`.`),wg()()(),jc(3476,`tr`,16)(3477,`td`,17)(3478,`div`,25)(3479,`span`,26),iO(3480,` infiniteScrollDistance`),nu(3481,`br`),wg()()(),jc(3482,`td`,21)(3483,`code`,45),iO(3484,`number`),wg()(),jc(3485,`td`,24)(3486,`em`)(3487,`strong`),iO(3488,`(opcional)`),wg()(),jc(3489,`p`),iO(3490,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),jc(3491,`strong`),iO(3492,`Exemplos`),wg(),jc(3493,`code`),iO(3494,`{ infiniteScrollDistance: 80 }`),wg(),iO(3495,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),wg(),jc(3496,`p`)(3497,`strong`),iO(3498,`Componente compatível:`),wg(),jc(3499,`code`),iO(3500,`po-combo`),wg(),iO(3501,`.`),wg()()(),jc(3502,`tr`,16)(3503,`td`,17)(3504,`div`,25)(3505,`span`,26),iO(3506,` initValue`),nu(3507,`br`),wg()()(),jc(3508,`td`,21)(3509,`code`,33),iO(3510,`any`),wg()(),jc(3511,`td`,24)(3512,`em`)(3513,`strong`),iO(3514,`(opcional)`),wg()(),jc(3515,`p`),iO(3516,`Define um valor inicial para um filtro de busca avançada.`),wg(),jc(3517,`p`),iO(3518,`O valor será atribuído ao campo correspondente à propriedade `),jc(3519,`code`),iO(3520,`property`),wg(),iO(3521,` na primeira abertura da janela de
busca avan\xE7ada. Ap\xF3s o usu\xE1rio aplicar o filtro, os campos passam a ser preenchidos com os valores filtrados,
preservando as altera\xE7\xF5es realizadas.`),wg()()(),jc(3522,`tr`,16)(3523,`td`,17)(3524,`div`,25)(3525,`span`,26),iO(3526,` invalidValue`),nu(3527,`br`),wg()()(),jc(3528,`td`,21)(3529,`code`,29),iO(3530,`boolean`),wg()(),jc(3531,`td`,24)(3532,`em`)(3533,`strong`),iO(3534,`(opcional)`),wg()(),jc(3535,`p`),iO(3536,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),jc(3537,`code`),iO(3538,`p-field-error-message`),wg(),iO(3539,`.`),wg(),jc(3540,`blockquote`)(3541,`p`),iO(3542,`Caso essa propriedade seja definida como `),jc(3543,`code`),iO(3544,`true`),wg(),iO(3545,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),wg()(),jc(3546,`p`)(3547,`strong`),iO(3548,`Componente compatível`),wg(),iO(3549,`: `),jc(3550,`code`),iO(3551,`po-switch`),wg()()()(),jc(3552,`tr`,16)(3553,`td`,17)(3554,`div`,25)(3555,`span`,26),iO(3556,` isoFormat`),nu(3557,`br`),wg()()(),jc(3558,`td`,21)(3559,`code`,59),iO(3560,`PoDatepickerIsoFormat`),wg()(),jc(3561,`td`,24)(3562,`em`)(3563,`strong`),iO(3564,`(opcional)`),wg()(),jc(3565,`p`),iO(3566,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),wg(),jc(3567,`blockquote`)(3568,`p`),iO(3569,`Veja os valores válidos no `),jc(3570,`code`),iO(3571,`PoDatepickerIsoFormat`),wg(),iO(3572,`.`),wg()(),jc(3573,`p`)(3574,`strong`),iO(3575,`Componente compatível:`),wg(),jc(3576,`code`),iO(3577,`po-datepicker`),wg()()()(),jc(3578,`tr`,16)(3579,`td`,17)(3580,`div`,25)(3581,`span`,26),iO(3582,` key`),nu(3583,`br`),wg()()(),jc(3584,`td`,21)(3585,`code`,29),iO(3586,`boolean`),wg()(),jc(3587,`td`,24)(3588,`em`)(3589,`strong`),iO(3590,`(opcional)`),wg()(),jc(3591,`p`),iO(3592,`Identificador`),wg()()(),jc(3593,`tr`,16)(3594,`td`,17)(3595,`div`,25)(3596,`span`,26),iO(3597,` keydown`),nu(3598,`br`),wg()()(),jc(3599,`td`,21)(3600,`code`,44),iO(3601,`Function`),wg()(),jc(3602,`td`,24)(3603,`em`)(3604,`strong`),iO(3605,`(opcional)`),wg()(),jc(3606,`p`),iO(3607,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(3608,`code`),iO(3609,`KeyboardEvent`),wg(),iO(3610,` com informações sobre a tecla.`),wg()()(),jc(3611,`tr`,16)(3612,`td`,17)(3613,`div`,25)(3614,`span`,26),iO(3615,` label`),nu(3616,`br`),wg()()(),jc(3617,`td`,21)(3618,`code`,27),iO(3619,`string`),wg()(),jc(3620,`td`,24)(3621,`em`)(3622,`strong`),iO(3623,`(opcional)`),wg()(),jc(3624,`p`),iO(3625,`Rótulo do campo exibido.`),wg(),jc(3626,`p`),iO(3627,`Caso não seja informado, será utilizado como `),jc(3628,`code`),iO(3629,`label`),wg(),iO(3630,` o valor da propriedade `),jc(3631,`code`),iO(3632,`property`),wg(),iO(3633,` com a primeira letra em maiúsculo.`),wg()()(),jc(3634,`tr`,16)(3635,`td`,17)(3636,`div`,25)(3637,`span`,26),iO(3638,` labelPosition`),nu(3639,`br`),wg()()(),jc(3640,`td`,21)(3641,`code`,60),iO(3642,`PoSwitchLabelPosition`),wg()(),jc(3643,`td`,24)(3644,`em`)(3645,`strong`),iO(3646,`(opcional)`),wg()(),jc(3647,`p`),iO(3648,`Posição de exibição do rótulo do PoSwitch.`),wg(),jc(3649,`blockquote`)(3650,`p`),iO(3651,`Por padrão exibe à direita.`),wg()()()(),jc(3652,`tr`,16)(3653,`td`,17)(3654,`div`,25)(3655,`span`,26),iO(3656,` listboxControlPosition`),nu(3657,`br`),wg()()(),jc(3658,`td`,21)(3659,`code`,61),iO(3660,`'top' `),wg(),jc(3661,`code`,62),iO(3662,` 'bottom'`),wg()(),jc(3663,`td`,24)(3664,`em`)(3665,`strong`),iO(3666,`(opcional)`),wg()(),jc(3667,`p`),iO(3668,`Define a direção preferida para exibição do `),jc(3669,`code`),iO(3670,`listbox`),wg(),iO(3671,` em relação ao campo (`),jc(3672,`code`),iO(3673,`top`),wg(),iO(3674,` ou `),jc(3675,`code`),iO(3676,`bottom`),wg(),iO(3677,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),wg(),jc(3678,`p`)(3679,`strong`),iO(3680,`Componentes compatíveis:`),wg(),jc(3681,`code`),iO(3682,`po-multiselect`),wg(),iO(3683,`, `),jc(3684,`code`),iO(3685,`po-combo`),wg(),iO(3686,`.`),wg()()(),jc(3687,`tr`,16)(3688,`td`,17)(3689,`div`,25)(3690,`span`,26),iO(3691,` literals`),nu(3692,`br`),wg()()(),jc(3693,`td`,21)(3694,`code`,36),iO(3695,`PoLookupLiterals `),wg(),jc(3696,`code`,63),iO(3697,` PoMultiselectLiterals `),wg(),jc(3698,`code`,64),iO(3699,` PoComboLiterals `),wg(),jc(3700,`code`,65),iO(3701,` PoDatepickerRangeLiterals `),wg(),jc(3702,`code`,66),iO(3703,` PoUploadLiterals`),wg()(),jc(3704,`td`,24)(3705,`em`)(3706,`strong`),iO(3707,`(opcional)`),wg()(),jc(3708,`p`),iO(3709,`Objeto com as literais usadas para os seguintes componentes: `),jc(3710,`code`),iO(3711,`po-lookup`),wg(),iO(3712,`, `),jc(3713,`code`),iO(3714,`po-multiselect`),wg(),iO(3715,`, `),jc(3716,`code`),iO(3717,`po-combo`),wg(),iO(3718,` e `),jc(3719,`code`),iO(3720,`po-datepicker-range`),wg(),iO(3721,`.`),wg(),jc(3722,`blockquote`)(3723,`p`),iO(3724,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),wg()(),jc(3725,`p`)(3726,`strong`),iO(3727,`Componentes compatíveis:`),wg(),jc(3728,`code`),iO(3729,`po-lookup`),wg(),iO(3730,`, `),jc(3731,`code`),iO(3732,`po-multiselect`),wg(),iO(3733,`, `),jc(3734,`code`),iO(3735,`po-combo`),wg(),iO(3736,`, `),jc(3737,`code`),iO(3738,`po-datepicker-range`),wg()()()(),jc(3739,`tr`,16)(3740,`td`,17)(3741,`div`,25)(3742,`span`,26),iO(3743,` loading`),nu(3744,`br`),wg()()(),jc(3745,`td`,21)(3746,`code`,29),iO(3747,`boolean`),wg()(),jc(3748,`td`,24)(3749,`em`)(3750,`strong`),iO(3751,`(opcional)`),wg()(),jc(3752,`p`),iO(3753,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),wg(),jc(3754,`blockquote`)(3755,`p`),iO(3756,`Por padrão é `),jc(3757,`code`),iO(3758,`false`),wg(),iO(3759,`.`),wg()(),jc(3760,`p`)(3761,`strong`),iO(3762,`Componentes compatíveis:`),wg(),jc(3763,`code`),iO(3764,`po-datepicker`),wg(),iO(3765,`, `),jc(3766,`code`),iO(3767,`po-datepicker-range`),wg(),iO(3768,`, `),jc(3769,`code`),iO(3770,`po-number`),wg(),iO(3771,`, `),jc(3772,`code`),iO(3773,`po-decimal`),wg(),iO(3774,`,
`),jc(3775,`code`),iO(3776,`po-input`),wg(),iO(3777,`, `),jc(3778,`code`),iO(3779,`po-select`),wg(),iO(3780,`, `),jc(3781,`code`),iO(3782,`po-switch`),wg(),iO(3783,`, `),jc(3784,`code`),iO(3785,`po-combo`),wg(),iO(3786,`, `),jc(3787,`code`),iO(3788,`po-lookup`),wg(),iO(3789,`, `),jc(3790,`code`),iO(3791,`po-multiselect`),wg(),iO(3792,`,
`),jc(3793,`code`),iO(3794,`po-textarea`),wg(),iO(3795,`, `),jc(3796,`code`),iO(3797,`po-password`),wg(),iO(3798,`, `),jc(3799,`code`),iO(3800,`po-upload`),wg(),iO(3801,`.`),wg()()(),jc(3802,`tr`,16)(3803,`td`,17)(3804,`div`,25)(3805,`span`,26),iO(3806,` locale`),nu(3807,`br`),wg()()(),jc(3808,`td`,21)(3809,`code`,27),iO(3810,`string`),wg()(),jc(3811,`td`,24)(3812,`em`)(3813,`strong`),iO(3814,`(opcional)`),wg()(),jc(3815,`p`),iO(3816,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),jc(3817,`a`,67)(3818,`code`),iO(3819,`I18n`),wg()()(),jc(3820,`p`),iO(3821,`Exemplo de utilização:`),wg(),jc(3822,`pre`)(3823,`code`),iO(3824,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),wg()(),jc(3825,`blockquote`)(3826,`p`),iO(3827,`Para ver quais linguagens suportadas acesse `),jc(3828,`a`,67)(3829,`code`),iO(3830,`I18n`),wg()()()(),jc(3831,`p`)(3832,`strong`),iO(3833,`Componentes compatíveis:`),wg(),jc(3834,`code`),iO(3835,`po-datepicker`),wg(),iO(3836,`, `),jc(3837,`code`),iO(3838,`po-decimal`),wg(),iO(3839,`, `),jc(3840,`code`),iO(3841,`po-timepicker`),wg(),iO(3842,`.`),wg()()(),jc(3843,`tr`,16)(3844,`td`,17)(3845,`div`,25)(3846,`span`,26),iO(3847,` mask`),nu(3848,`br`),wg()()(),jc(3849,`td`,21)(3850,`code`,27),iO(3851,`string`),wg()(),jc(3852,`td`,24)(3853,`em`)(3854,`strong`),iO(3855,`(opcional)`),wg()(),jc(3856,`p`),iO(3857,`Máscara para o campo.`),wg(),jc(3858,`p`)(3859,`strong`),iO(3860,`Componente compatível:`),wg(),jc(3861,`code`),iO(3862,`po-input`),wg(),iO(3863,`.`),wg(),jc(3864,`blockquote`)(3865,`p`),iO(3866,`também é atribuído ao utilizar a propriedade `),jc(3867,`code`),iO(3868,`type: time`),wg(),iO(3869,`.`),wg()(),jc(3870,`blockquote`)(3871,`p`),iO(3872,`Incompatível com `),jc(3873,`code`),iO(3874,`po-decimal`),wg(),iO(3875,`.`),wg()()()(),jc(3876,`tr`,16)(3877,`td`,17)(3878,`div`,25)(3879,`span`,26),iO(3880,` maskFormatModel`),nu(3881,`br`),wg()()(),jc(3882,`td`,21)(3883,`code`,29),iO(3884,`boolean`),wg()(),jc(3885,`td`,24)(3886,`em`)(3887,`strong`),iO(3888,`(opcional)`),wg()(),jc(3889,`p`),iO(3890,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),jc(3891,`code`),iO(3892,`false`),wg(),iO(3893,`.`),wg(),jc(3894,`p`)(3895,`strong`),iO(3896,`Componente compatível:`),wg(),jc(3897,`code`),iO(3898,`po-input`),wg(),iO(3899,`.`),wg(),jc(3900,`blockquote`)(3901,`p`),iO(3902,`também é atribuído ao utilizar a propriedade `),jc(3903,`code`),iO(3904,`type: time`),wg(),iO(3905,`.`),wg()()()(),jc(3906,`tr`,16)(3907,`td`,17)(3908,`div`,25)(3909,`span`,26),iO(3910,` maskNoLengthValidation`),nu(3911,`br`),wg()()(),jc(3912,`td`,21)(3913,`code`,29),iO(3914,`boolean`),wg()(),jc(3915,`td`,24)(3916,`em`)(3917,`strong`),iO(3918,`(opcional)`),wg()(),jc(3919,`p`),iO(3920,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(3921,`code`),iO(3922,`minLength`),wg(),iO(3923,`) e máximo (`),jc(3924,`code`),iO(3925,`maxLength`),wg(),iO(3926,`) quando há uma máscara (`),jc(3927,`code`),iO(3928,`p-mask`),wg(),iO(3929,`) definida.`),wg(),jc(3930,`ul`)(3931,`li`),iO(3932,`Quando `),jc(3933,`code`),iO(3934,`true`),wg(),iO(3935,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(3936,`li`),iO(3937,`Quando `),jc(3938,`code`),iO(3939,`false`),wg(),iO(3940,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(3941,`p`)(3942,`strong`),iO(3943,`Componentes compatíveis:`),wg(),jc(3944,`code`),iO(3945,`po-input`),wg(),iO(3946,`, `),jc(3947,`code`),iO(3948,`po-decimal`),wg(),iO(3949,`.`),wg(),jc(3950,`blockquote`)(3951,`p`),iO(3952,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(3953,`code`),iO(3954,`p-mask-format-model`),wg(),iO(3955,`.`),wg()(),jc(3956,`p`),iO(3957,`Exemplo:`),wg(),jc(3958,`pre`)(3959,`code`),iO(3960,`fields:Array<PoDynamicFormField> = [
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
`),wg()(),jc(3961,`ul`)(3962,`li`),iO(3963,`Entrada: `),jc(3964,`code`),iO(3965,`11.111.111/1111-11`),wg(),iO(3966,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),wg()()()(),jc(3967,`tr`,16)(3968,`td`,17)(3969,`div`,25)(3970,`span`,26),iO(3971,` maxLength`),nu(3972,`br`),wg()()(),jc(3973,`td`,21)(3974,`code`,45),iO(3975,`number`),wg()(),jc(3976,`td`,24)(3977,`em`)(3978,`strong`),iO(3979,`(opcional)`),wg()(),jc(3980,`p`),iO(3981,`Tamanho máximo de caracteres.`),wg(),jc(3982,`p`)(3983,`strong`),iO(3984,`Componentes compatíveis:`),wg(),jc(3985,`code`),iO(3986,`po-input`),wg(),iO(3987,`, `),jc(3988,`code`),iO(3989,`po-number`),wg(),iO(3990,`, `),jc(3991,`code`),iO(3992,`po-decimal`),wg(),iO(3993,`, `),jc(3994,`code`),iO(3995,`po-textarea`),wg(),iO(3996,`, `),jc(3997,`code`),iO(3998,`po-password`),wg(),iO(3999,`.`),wg()()(),jc(4e3,`tr`,16)(4001,`td`,17)(4002,`div`,25)(4003,`span`,26),iO(4004,` maxTime`),nu(4005,`br`),wg()()(),jc(4006,`td`,21)(4007,`code`,27),iO(4008,`string`),wg()(),jc(4009,`td`,24)(4010,`em`)(4011,`strong`),iO(4012,`(opcional)`),wg()(),jc(4013,`p`),iO(4014,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(4015,`code`),iO(4016,`HH:mm`),wg(),iO(4017,` ou `),jc(4018,`code`),iO(4019,`HH:mm:ss`),wg(),iO(4020,`.`),wg(),jc(4021,`p`)(4022,`strong`),iO(4023,`Componente compatível:`),wg(),jc(4024,`code`),iO(4025,`po-datetimepicker`),wg(),iO(4026,`, `),jc(4027,`code`),iO(4028,`po-timepicker`),wg()()()(),jc(4029,`tr`,16)(4030,`td`,17)(4031,`div`,25)(4032,`span`,26),iO(4033,` maxValue`),nu(4034,`br`),wg()()(),jc(4035,`td`,21)(4036,`code`,27),iO(4037,`string `),wg(),jc(4038,`code`,45),iO(4039,` number`),wg()(),jc(4040,`td`,24)(4041,`em`)(4042,`strong`),iO(4043,`(opcional)`),wg()(),jc(4044,`p`),iO(4045,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(4046,`em`),iO(4047,`number`),wg(),iO(4048,`, `),jc(4049,`em`),iO(4050,`date`),wg(),iO(4051,`, `),jc(4052,`em`),iO(4053,`dateTime`),wg(),iO(4054,` ou `),jc(4055,`em`),iO(4056,`time`),wg(),iO(4057,`.`),wg(),jc(4058,`blockquote`)(4059,`p`),iO(4060,`Para `),jc(4061,`code`),iO(4062,`po-timepicker`),wg(),iO(4063,`, o valor deve estar no formato `),jc(4064,`code`),iO(4065,`HH:mm`),wg(),iO(4066,` ou `),jc(4067,`code`),iO(4068,`HH:mm:ss`),wg(),iO(4069,`.`),wg()(),jc(4070,`p`)(4071,`strong`),iO(4072,`Componentes compatíveis:`),wg(),jc(4073,`code`),iO(4074,`po-datepicker`),wg(),iO(4075,`, `),jc(4076,`code`),iO(4077,`po-datepicker-range`),wg(),iO(4078,`, `),jc(4079,`code`),iO(4080,`po-number`),wg(),iO(4081,`, `),jc(4082,`code`),iO(4083,`po-decimal`),wg(),iO(4084,`, `),jc(4085,`code`),iO(4086,`po-timepicker`),wg()()()(),jc(4087,`tr`,16)(4088,`td`,17)(4089,`div`,25)(4090,`span`,26),iO(4091,` minLength`),nu(4092,`br`),wg()()(),jc(4093,`td`,21)(4094,`code`,45),iO(4095,`number`),wg()(),jc(4096,`td`,24)(4097,`em`)(4098,`strong`),iO(4099,`(opcional)`),wg()(),jc(4100,`p`),iO(4101,`Tamanho mínimo de caracteres.`),wg(),jc(4102,`p`)(4103,`strong`),iO(4104,`Componentes compatíveis:`),wg(),jc(4105,`code`),iO(4106,`po-input`),wg(),iO(4107,`, `),jc(4108,`code`),iO(4109,`po-number`),wg(),iO(4110,`, `),jc(4111,`code`),iO(4112,`po-decimal`),wg(),iO(4113,`, `),jc(4114,`code`),iO(4115,`po-textarea`),wg(),iO(4116,`, `),jc(4117,`code`),iO(4118,`po-password`),wg(),iO(4119,`.`),wg()()(),jc(4120,`tr`,16)(4121,`td`,17)(4122,`div`,25)(4123,`span`,26),iO(4124,` minTime`),nu(4125,`br`),wg()()(),jc(4126,`td`,21)(4127,`code`,27),iO(4128,`string`),wg()(),jc(4129,`td`,24)(4130,`em`)(4131,`strong`),iO(4132,`(opcional)`),wg()(),jc(4133,`p`),iO(4134,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(4135,`code`),iO(4136,`HH:mm`),wg(),iO(4137,` ou `),jc(4138,`code`),iO(4139,`HH:mm:ss`),wg(),iO(4140,`.`),wg(),jc(4141,`p`)(4142,`strong`),iO(4143,`Componente compatível:`),wg(),jc(4144,`code`),iO(4145,`po-datetimepicker`),wg(),iO(4146,`, `),jc(4147,`code`),iO(4148,`po-timepicker`),wg()()()(),jc(4149,`tr`,16)(4150,`td`,17)(4151,`div`,25)(4152,`span`,26),iO(4153,` minValue`),nu(4154,`br`),wg()()(),jc(4155,`td`,21)(4156,`code`,27),iO(4157,`string `),wg(),jc(4158,`code`,45),iO(4159,` number`),wg()(),jc(4160,`td`,24)(4161,`em`)(4162,`strong`),iO(4163,`(opcional)`),wg()(),jc(4164,`p`),iO(4165,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(4166,`em`),iO(4167,`number`),wg(),iO(4168,`, `),jc(4169,`em`),iO(4170,`date`),wg(),iO(4171,`, `),jc(4172,`em`),iO(4173,`dateTime`),wg(),iO(4174,` ou `),jc(4175,`em`),iO(4176,`time`),wg(),iO(4177,`.`),wg(),jc(4178,`blockquote`)(4179,`p`),iO(4180,`Para `),jc(4181,`code`),iO(4182,`po-timepicker`),wg(),iO(4183,`, o valor deve estar no formato `),jc(4184,`code`),iO(4185,`HH:mm`),wg(),iO(4186,` ou `),jc(4187,`code`),iO(4188,`HH:mm:ss`),wg(),iO(4189,`.`),wg()(),jc(4190,`p`)(4191,`strong`),iO(4192,`Componentes compatíveis:`),wg(),jc(4193,`code`),iO(4194,`po-datepicker`),wg(),iO(4195,`, `),jc(4196,`code`),iO(4197,`po-datepicker-range`),wg(),iO(4198,`, `),jc(4199,`code`),iO(4200,`po-number`),wg(),iO(4201,`, `),jc(4202,`code`),iO(4203,`po-decimal`),wg(),iO(4204,`, `),jc(4205,`code`),iO(4206,`po-timepicker`),wg()()()(),jc(4207,`tr`,16)(4208,`td`,17)(4209,`div`,25)(4210,`span`,26),iO(4211,` minuteInterval`),nu(4212,`br`),wg()()(),jc(4213,`td`,21)(4214,`code`,45),iO(4215,`number`),wg()(),jc(4216,`td`,24)(4217,`em`)(4218,`strong`),iO(4219,`(opcional)`),wg()(),jc(4220,`p`),iO(4221,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),wg()()(),jc(4222,`tr`,16)(4223,`td`,17)(4224,`div`,25)(4225,`span`,26),iO(4226,` mode`),nu(4227,`br`),wg()()(),jc(4228,`td`,21)(4229,`code`,68),iO(4230,`'month-year' `),wg(),jc(4231,`code`,69),iO(4232,` 'year'`),wg()(),jc(4233,`td`,24)(4234,`em`)(4235,`strong`),iO(4236,`(opcional)`),wg()(),jc(4237,`p`),iO(4238,`Define o modo de seleção do `),jc(4239,`code`),iO(4240,`po-datepicker`),wg(),iO(4241,`.`),wg(),jc(4242,`p`),iO(4243,`Valores aceitos:`),wg(),jc(4244,`ul`)(4245,`li`)(4246,`code`),iO(4247,`'month-year'`),wg(),iO(4248,`: exibe seleção de mês e ano (formato `),jc(4249,`code`),iO(4250,`MM/YYYY`),wg(),iO(4251,`)`),wg(),jc(4252,`li`)(4253,`code`),iO(4254,`'year'`),wg(),iO(4255,`: exibe seleção apenas de ano (formato `),jc(4256,`code`),iO(4257,`YYYY`),wg(),iO(4258,`)`),wg()(),jc(4259,`p`)(4260,`strong`),iO(4261,`Componente compatível:`),wg(),jc(4262,`code`),iO(4263,`po-datepicker`),wg()()()(),jc(4264,`tr`,16)(4265,`td`,17)(4266,`div`,25)(4267,`span`,26),iO(4268,` modelFormat`),nu(4269,`br`),wg()()(),jc(4270,`td`,21)(4271,`code`,70),iO(4272,`PoTimepickerModelFormat`),wg()(),jc(4273,`td`,24)(4274,`em`)(4275,`strong`),iO(4276,`(opcional)`),wg()(),jc(4277,`p`),iO(4278,`Define o formato do valor do horário a ser utilizado no model do `),jc(4279,`code`),iO(4280,`po-timepicker`),wg(),iO(4281,`.`),wg(),jc(4282,`blockquote`)(4283,`p`),iO(4284,`Veja os valores válidos no `),jc(4285,`code`),iO(4286,`PoTimepickerModelFormat`),wg(),iO(4287,`.`),wg()(),jc(4288,`p`)(4289,`strong`),iO(4290,`Componente compatível:`),wg(),jc(4291,`code`),iO(4292,`po-timepicker`),wg()()()(),jc(4293,`tr`,16)(4294,`td`,17)(4295,`div`,25)(4296,`span`,26),iO(4297,` multiple`),nu(4298,`br`),wg()()(),jc(4299,`td`,21)(4300,`code`,29),iO(4301,`boolean`),wg()(),jc(4302,`td`,24)(4303,`em`)(4304,`strong`),iO(4305,`(opcional)`),wg()(),jc(4306,`p`),iO(4307,`Permite a seleção de múltiplos itens.`),wg(),jc(4308,`p`)(4309,`strong`),iO(4310,`Componentes compatíveis:`),wg(),jc(4311,`code`),iO(4312,`po-lookup`),wg(),iO(4313,`, `),jc(4314,`code`),iO(4315,`po-upload`),wg()()()(),jc(4316,`tr`,16)(4317,`td`,17)(4318,`div`,25)(4319,`span`,26),iO(4320,` noAutocomplete`),nu(4321,`br`),wg()()(),jc(4322,`td`,21)(4323,`code`,29),iO(4324,`boolean`),wg()(),jc(4325,`td`,24)(4326,`em`)(4327,`strong`),iO(4328,`(opcional)`),wg()(),jc(4329,`p`),iO(4330,`Define a propriedade nativa `),jc(4331,`code`),iO(4332,`autocomplete`),wg(),iO(4333,` do campo como off.`),wg(),jc(4334,`p`)(4335,`strong`),iO(4336,`Componentes compatíveis:`),wg(),jc(4337,`code`),iO(4338,`po-datepicker`),wg(),iO(4339,`, `),jc(4340,`code`),iO(4341,`po-datepicker-range`),wg(),iO(4342,`, `),jc(4343,`code`),iO(4344,`po-input`),wg(),iO(4345,`, `),jc(4346,`code`),iO(4347,`po-number`),wg(),iO(4348,`, `),jc(4349,`code`),iO(4350,`po-decimal`),wg(),iO(4351,`,
`),jc(4352,`code`),iO(4353,`po-lookup`),wg(),iO(4354,`, `),jc(4355,`code`),iO(4356,`po-password`),wg(),iO(4357,`, `),jc(4358,`code`),iO(4359,`po-timepicker`),wg(),iO(4360,`.`),wg()()(),jc(4361,`tr`,16)(4362,`td`,17)(4363,`div`,25)(4364,`span`,26),iO(4365,` offsetColumns`),nu(4366,`br`),wg()()(),jc(4367,`td`,21)(4368,`code`,45),iO(4369,`number`),wg()(),jc(4370,`td`,24)(4371,`em`)(4372,`strong`),iO(4373,`(opcional)`),wg()(),jc(4374,`p`),iO(4375,`Tamanho do espaço de exibição do campo em telas.`),wg(),jc(4376,`p`),iO(4377,`Deve ser usado o sistema de `),jc(4378,`strong`),iO(4379,`grid`),wg(),iO(4380,` do PO (1 ... 12 colunas).`),wg(),jc(4381,`blockquote`)(4382,`p`),iO(4383,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(4384,`tr`,16)(4385,`td`,17)(4386,`div`,25)(4387,`span`,26),iO(4388,` offsetLgColumns`),nu(4389,`br`),wg()()(),jc(4390,`td`,21)(4391,`code`,45),iO(4392,`number`),wg()(),jc(4393,`td`,24)(4394,`em`)(4395,`strong`),iO(4396,`(opcional)`),wg()(),jc(4397,`p`),iO(4398,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),wg(),jc(4399,`p`),iO(4400,`Deve ser usado o sistema de `),jc(4401,`strong`),iO(4402,`grid`),wg(),iO(4403,` do PO (1 ... 12 colunas).`),wg(),jc(4404,`blockquote`)(4405,`p`),iO(4406,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4407,`code`),iO(4408,`offsetColumns`),wg(),iO(4409,`.`),wg()()()(),jc(4410,`tr`,16)(4411,`td`,17)(4412,`div`,25)(4413,`span`,26),iO(4414,` offsetMdColumns`),nu(4415,`br`),wg()()(),jc(4416,`td`,21)(4417,`code`,45),iO(4418,`number`),wg()(),jc(4419,`td`,24)(4420,`em`)(4421,`strong`),iO(4422,`(opcional)`),wg()(),jc(4423,`p`),iO(4424,`Tamanho do espaço de exibição do campo em telas médias (md).`),wg(),jc(4425,`p`),iO(4426,`Deve ser usado o sistema de `),jc(4427,`strong`),iO(4428,`grid`),wg(),iO(4429,` do PO (1 ... 12 colunas).`),wg(),jc(4430,`blockquote`)(4431,`p`),iO(4432,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4433,`code`),iO(4434,`offsetColumns`),wg(),iO(4435,`.`),wg()()()(),jc(4436,`tr`,16)(4437,`td`,17)(4438,`div`,25)(4439,`span`,26),iO(4440,` offsetSmColumns`),nu(4441,`br`),wg()()(),jc(4442,`td`,21)(4443,`code`,45),iO(4444,`number`),wg()(),jc(4445,`td`,24)(4446,`em`)(4447,`strong`),iO(4448,`(opcional)`),wg()(),jc(4449,`p`),iO(4450,`Tamanho do espaço de exibição do campo em telas menores (sm).`),wg(),jc(4451,`p`),iO(4452,`Deve ser usado o sistema de `),jc(4453,`strong`),iO(4454,`grid`),wg(),iO(4455,` do PO (1 ... 12 colunas).`),wg(),jc(4456,`blockquote`)(4457,`p`),iO(4458,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4459,`code`),iO(4460,`offsetColumns`),wg(),iO(4461,`.`),wg()()()(),jc(4462,`tr`,16)(4463,`td`,17)(4464,`div`,25)(4465,`span`,26),iO(4466,` offsetXlColumns`),nu(4467,`br`),wg()()(),jc(4468,`td`,21)(4469,`code`,45),iO(4470,`number`),wg()(),jc(4471,`td`,24)(4472,`em`)(4473,`strong`),iO(4474,`(opcional)`),wg()(),jc(4475,`p`),iO(4476,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),wg(),jc(4477,`p`),iO(4478,`Deve ser usado o sistema de `),jc(4479,`strong`),iO(4480,`grid`),wg(),iO(4481,` do PO (1 ... 12 colunas).`),wg(),jc(4482,`blockquote`)(4483,`p`),iO(4484,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(4485,`code`),iO(4486,`offsetColumns`),wg(),iO(4487,`.`),wg()()()(),jc(4488,`tr`,16)(4489,`td`,17)(4490,`div`,25)(4491,`span`,26),iO(4492,` onError`),nu(4493,`br`),wg()()(),jc(4494,`td`,21)(4495,`code`,44),iO(4496,`Function`),wg()(),jc(4497,`td`,24)(4498,`em`)(4499,`strong`),iO(4500,`(opcional)`),wg()(),jc(4501,`p`),iO(4502,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),wg(),jc(4503,`blockquote`)(4504,`p`),iO(4505,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(4506,`code`),iO(4507,`HttpErrorResponse`),wg(),iO(4508,`.`),wg()(),jc(4509,`p`)(4510,`strong`),iO(4511,`Componente compatível`),wg(),iO(4512,`: `),jc(4513,`code`),iO(4514,`po-upload`),wg()()()(),jc(4515,`tr`,16)(4516,`td`,17)(4517,`div`,25)(4518,`span`,26),iO(4519,` onSuccess`),nu(4520,`br`),wg()()(),jc(4521,`td`,21)(4522,`code`,44),iO(4523,`Function`),wg()(),jc(4524,`td`,24)(4525,`em`)(4526,`strong`),iO(4527,`(opcional)`),wg()(),jc(4528,`p`),iO(4529,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),wg(),jc(4530,`blockquote`)(4531,`p`),iO(4532,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(4533,`code`),iO(4534,`HttpResponse`),wg(),iO(4535,`.`),wg()(),jc(4536,`p`)(4537,`strong`),iO(4538,`Componente compatível`),wg(),iO(4539,`: `),jc(4540,`code`),iO(4541,`po-upload`),wg()()()(),jc(4542,`tr`,16)(4543,`td`,17)(4544,`div`,25)(4545,`span`,26),iO(4546,` onUpload`),nu(4547,`br`),wg()()(),jc(4548,`td`,21)(4549,`code`,44),iO(4550,`Function`),wg()(),jc(4551,`td`,24)(4552,`em`)(4553,`strong`),iO(4554,`(opcional)`),wg()(),jc(4555,`p`),iO(4556,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),wg(),jc(4557,`pre`)(4558,`code`),iO(4559,`event.data = {id: 'id do usu\xE1rio'};
`),wg()(),jc(4560,`p`)(4561,`strong`),iO(4562,`Componente compatível`),wg(),iO(4563,`: `),jc(4564,`code`),iO(4565,`po-upload`),wg()()()(),jc(4566,`tr`,16)(4567,`td`,17)(4568,`div`,25)(4569,`span`,26),iO(4570,` optional`),nu(4571,`br`),wg()()(),jc(4572,`td`,21)(4573,`code`,29),iO(4574,`boolean`),wg()(),jc(4575,`td`,24)(4576,`em`)(4577,`strong`),iO(4578,`(opcional)`),wg()(),jc(4579,`p`),iO(4580,`Define se a indicação de campo opcional será exibida.`),wg(),jc(4581,`blockquote`)(4582,`p`),iO(4583,`A indicação não será exibida, se:`),wg()(),jc(4584,`ul`)(4585,`li`),iO(4586,`O campo for `),jc(4587,`code`),iO(4588,`required`),wg(),iO(4589,`, ou;`),wg(),jc(4590,`li`),iO(4591,`Não possuir `),jc(4592,`code`),iO(4593,`help`),wg(),iO(4594,` e `),jc(4595,`code`),iO(4596,`label`),wg(),iO(4597,`.`),wg()(),jc(4598,`p`)(4599,`strong`),iO(4600,`Componentes compatíveis:`),wg(),jc(4601,`code`),iO(4602,`po-datepicker`),wg(),iO(4603,`, `),jc(4604,`code`),iO(4605,`po-datepicker-range`),wg(),iO(4606,`, `),jc(4607,`code`),iO(4608,`po-timepicker`),wg(),iO(4609,`, `),jc(4610,`code`),iO(4611,`po-input`),wg(),iO(4612,`, `),jc(4613,`code`),iO(4614,`po-number`),wg(),iO(4615,`,
`),jc(4616,`code`),iO(4617,`po-decimal`),wg(),iO(4618,`, `),jc(4619,`code`),iO(4620,`po-select`),wg(),iO(4621,`, `),jc(4622,`code`),iO(4623,`po-radio-group`),wg(),iO(4624,`, `),jc(4625,`code`),iO(4626,`po-combo`),wg(),iO(4627,`, `),jc(4628,`code`),iO(4629,`po-lookup`),wg(),iO(4630,`, `),jc(4631,`code`),iO(4632,`po-checkbox-group`),wg(),iO(4633,`, `),jc(4634,`code`),iO(4635,`po-multiselect`),wg(),iO(4636,`,
`),jc(4637,`code`),iO(4638,`po-textarea`),wg(),iO(4639,`, `),jc(4640,`code`),iO(4641,`po-password`),wg(),iO(4642,`.`),wg()()(),jc(4643,`tr`,16)(4644,`td`,17)(4645,`div`,25)(4646,`span`,26),iO(4647,` options`),nu(4648,`br`),wg()()(),jc(4649,`td`,21)(4650,`code`,32),iO(4651,`Array<string> `),wg(),jc(4652,`code`,71),iO(4653,` Array<PoSelectOption> `),wg(),jc(4654,`code`,72),iO(4655,` Array<PoMultiselectOption> `),wg(),jc(4656,`code`,73),iO(4657,` Array<PoCheckboxGroupOption> `),wg(),jc(4658,`code`,74),iO(4659,` Array<any>`),wg()(),jc(4660,`td`,24)(4661,`em`)(4662,`strong`),iO(4663,`(opcional)`),wg()(),jc(4664,`p`),iO(4665,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),wg(),jc(4666,`p`)(4667,`strong`),iO(4668,`Componentes compatíveis:`),wg(),jc(4669,`code`),iO(4670,`po-select`),wg(),iO(4671,`, `),jc(4672,`code`),iO(4673,`po-radio-group`),wg(),iO(4674,`, `),jc(4675,`code`),iO(4676,`po-checkbox-group`),wg(),iO(4677,`, `),jc(4678,`code`),iO(4679,`po-multiselect`),wg(),iO(4680,`.`),wg()()(),jc(4681,`tr`,16)(4682,`td`,17)(4683,`div`,25)(4684,`span`,26),iO(4685,` optionsMulti`),nu(4686,`br`),wg()()(),jc(4687,`td`,21)(4688,`code`,29),iO(4689,`boolean`),wg()(),jc(4690,`td`,24)(4691,`em`)(4692,`strong`),iO(4693,`(opcional)`),wg()(),jc(4694,`p`),iO(4695,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),wg()()(),jc(4696,`tr`,16)(4697,`td`,17)(4698,`div`,25)(4699,`span`,26),iO(4700,` optionsService`),nu(4701,`br`),wg()()(),jc(4702,`td`,21)(4703,`code`,27),iO(4704,`string `),wg(),jc(4705,`code`,75),iO(4706,` PoComboFilter `),wg(),jc(4707,`code`,76),iO(4708,` PoMultiselectFilter`),wg()(),jc(4709,`td`,24)(4710,`em`)(4711,`strong`),iO(4712,`(opcional)`),wg()(),jc(4713,`p`),iO(4714,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),jc(4715,`strong`),iO(4716,`Importante`),wg()(),jc(4717,`blockquote`)(4718,`p`),iO(4719,`Para que funcione corretamente, é importante que o serviço siga o `),jc(4720,`a`,7),iO(4721,`guia de API do PO UI`),wg(),iO(4722,`.`),wg()()()(),jc(4723,`tr`,16)(4724,`td`,17)(4725,`div`,25)(4726,`span`,26),iO(4727,` order`),nu(4728,`br`),wg()()(),jc(4729,`td`,21)(4730,`code`,45),iO(4731,`number`),wg()(),jc(4732,`td`,24)(4733,`em`)(4734,`strong`),iO(4735,`(opcional)`),wg()(),jc(4736,`p`),iO(4737,`Informa a ordem de exibição do campo.`),wg(),jc(4738,`p`),iO(4739,`Exemplo de utilização:`),wg(),jc(4740,`p`)(4741,`code`),iO(4742,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),wg()(),jc(4743,`p`),iO(4744,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),jc(4745,`code`),iO(4746,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),wg()(),jc(4747,`p`),iO(4748,`Só serão aceitos valores com números inteiros maiores do que zero.`),wg(),jc(4749,`p`),iO(4750,`Campos sem `),jc(4751,`code`),iO(4752,`order`),wg(),iO(4753,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),wg()()(),jc(4754,`tr`,16)(4755,`td`,17)(4756,`div`,25)(4757,`span`,26),iO(4758,` params`),nu(4759,`br`),wg()()(),jc(4760,`td`,21)(4761,`code`,33),iO(4762,`any`),wg()(),jc(4763,`td`,24)(4764,`em`)(4765,`strong`),iO(4766,`(opcional)`),wg()(),jc(4767,`p`),iO(4768,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),jc(4769,`code`),iO(4770,`po-lookup`),wg(),iO(4771,` e
`),jc(4772,`code`),iO(4773,`po-combo`),wg(),iO(4774,`.`),wg(),jc(4775,`p`),iO(4776,`Por exemplo, para o parâmetro `),jc(4777,`code`),iO(4778,`{ age: 23 }`),wg(),iO(4779,` a URL da requisição ficaria:`),wg(),jc(4780,`p`)(4781,`code`),iO(4782,`url + ?age=23&filter=Peter`),wg()()()(),jc(4783,`tr`,16)(4784,`td`,17)(4785,`div`,25)(4786,`span`,26),iO(4787,` pattern`),nu(4788,`br`),wg()()(),jc(4789,`td`,21)(4790,`code`,27),iO(4791,`string`),wg()(),jc(4792,`td`,24)(4793,`em`)(4794,`strong`),iO(4795,`(opcional)`),wg()(),jc(4796,`p`),iO(4797,`Regex para validação do campo.`),wg(),jc(4798,`p`)(4799,`strong`),iO(4800,`Componentes compatíveis:`),wg(),jc(4801,`code`),iO(4802,`po-input`),wg(),iO(4803,`, `),jc(4804,`code`),iO(4805,`po-password`),wg(),iO(4806,`.`),wg(),jc(4807,`blockquote`)(4808,`p`),iO(4809,`Incompatível com `),jc(4810,`code`),iO(4811,`po-decimal`),wg(),iO(4812,`.`),wg()()()(),jc(4813,`tr`,16)(4814,`td`,17)(4815,`div`,25)(4816,`span`,26),iO(4817,` placeholder`),nu(4818,`br`),wg()()(),jc(4819,`td`,21)(4820,`code`,27),iO(4821,`string`),wg()(),jc(4822,`td`,24)(4823,`em`)(4824,`strong`),iO(4825,`(opcional)`),wg()(),jc(4826,`p`),iO(4827,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),wg(),jc(4828,`p`)(4829,`strong`),iO(4830,`Componentes compatíveis:`),wg(),jc(4831,`code`),iO(4832,`po-datepicker`),wg(),iO(4833,`, `),jc(4834,`code`),iO(4835,`po-datepicker-range`),wg(),iO(4836,`, `),jc(4837,`code`),iO(4838,`po-timepicker`),wg(),iO(4839,`, `),jc(4840,`code`),iO(4841,`po-input`),wg(),iO(4842,`, `),jc(4843,`code`),iO(4844,`po-number`),wg(),iO(4845,`, `),jc(4846,`code`),iO(4847,`po-decimal`),wg(),iO(4848,`, `),jc(4849,`code`),iO(4850,`po-select`),wg(),iO(4851,`, `),jc(4852,`code`),iO(4853,`po-combo`),wg(),iO(4854,`, `),jc(4855,`code`),iO(4856,`po-lookup`),wg(),iO(4857,`, `),jc(4858,`code`),iO(4859,`po-multiselect`),wg(),iO(4860,`, `),jc(4861,`code`),iO(4862,`po-textarea`),wg(),iO(4863,`, `),jc(4864,`code`),iO(4865,`po-password`),wg(),iO(4866,`.`),wg()()(),jc(4867,`tr`,16)(4868,`td`,17)(4869,`div`,25)(4870,`span`,26),iO(4871,` placeholderSearch`),nu(4872,`br`),wg()()(),jc(4873,`td`,21)(4874,`code`,27),iO(4875,`string`),wg()(),jc(4876,`td`,24)(4877,`em`)(4878,`strong`),iO(4879,`(opcional)`),wg()(),jc(4880,`p`),iO(4881,`Placeholder do campo de pesquisa do `),jc(4882,`code`),iO(4883,`po-multiselect`),wg(),iO(4884,`.`),wg(),jc(4885,`blockquote`)(4886,`p`),iO(4887,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),wg()()()(),jc(4888,`tr`,16)(4889,`td`,17)(4890,`div`,25)(4891,`span`,26),iO(4892,` property`),nu(4893,`br`),wg()()(),jc(4894,`td`,21)(4895,`code`,27),iO(4896,`string`),wg()(),jc(4897,`td`,24)(4898,`p`),iO(4899,`Nome de referência do campo.`),wg()()(),jc(4900,`tr`,16)(4901,`td`,17)(4902,`div`,25)(4903,`span`,26),iO(4904,` range`),nu(4905,`br`),wg()()(),jc(4906,`td`,21)(4907,`code`,29),iO(4908,`boolean`),wg()(),jc(4909,`td`,24)(4910,`em`)(4911,`strong`),iO(4912,`(opcional)`),wg()(),jc(4913,`p`),iO(4914,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),wg(),jc(4915,`blockquote`)(4916,`p`),iO(4917,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),wg()()()(),jc(4918,`tr`,16)(4919,`td`,17)(4920,`div`,25)(4921,`span`,26),iO(4922,` rangePresetOptions`),nu(4923,`br`),wg()()(),jc(4924,`td`,21)(4925,`code`,77),iO(4926,`Array<PoCalendarRangePreset>`),wg()(),jc(4927,`td`,24)(4928,`em`)(4929,`strong`),iO(4930,`(opcional)`),wg()(),jc(4931,`p`),iO(4932,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),wg(),jc(4933,`p`),iO(4934,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),jc(4935,`code`),iO(4936,`PoCalendarRangePreset`),wg(),iO(4937,`.`),wg(),jc(4938,`p`)(4939,`strong`),iO(4940,`Componente compatível:`),wg(),jc(4941,`code`),iO(4942,`po-datepicker-range`),wg()()()(),jc(4943,`tr`,16)(4944,`td`,17)(4945,`div`,25)(4946,`span`,26),iO(4947,` rangePresets`),nu(4948,`br`),wg()()(),jc(4949,`td`,21)(4950,`code`,29),iO(4951,`boolean `),wg(),jc(4952,`code`,32),iO(4953,` Array<string>`),wg()(),jc(4954,`td`,24)(4955,`em`)(4956,`strong`),iO(4957,`(opcional)`),wg()(),jc(4958,`p`),iO(4959,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),wg(),jc(4960,`p`),iO(4961,`Aceita os seguintes valores:`),wg(),jc(4962,`ul`)(4963,`li`)(4964,`code`),iO(4965,`true`),wg(),iO(4966,`: exibe todos os presets padrão.`),wg(),jc(4967,`li`)(4968,`code`),iO(4969,`false`),wg(),iO(4970,`: não exibe os presets padrão.`),wg(),jc(4971,`li`)(4972,`code`),iO(4973,`Array<string>`),wg(),iO(4974,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),wg()(),jc(4975,`p`)(4976,`strong`),iO(4977,`Componente compatível:`),wg(),jc(4978,`code`),iO(4979,`po-datepicker-range`),wg()()()(),jc(4980,`tr`,16)(4981,`td`,17)(4982,`div`,25)(4983,`span`,26),iO(4984,` rangePresetsOrder`),nu(4985,`br`),wg()()(),jc(4986,`td`,21)(4987,`code`,78),iO(4988,`'asc' `),wg(),jc(4989,`code`,79),iO(4990,` 'desc'`),wg()(),jc(4991,`td`,24)(4992,`em`)(4993,`strong`),iO(4994,`(opcional)`),wg()(),jc(4995,`p`),iO(4996,`Define a ordenação dos presets na lista.`),wg(),jc(4997,`p`),iO(4998,`Valores aceitos:`),wg(),jc(4999,`ul`)(5e3,`li`)(5001,`code`),iO(5002,`'asc'`),wg(),iO(5003,`: ordenação crescente (passado → futuro)`),wg(),jc(5004,`li`)(5005,`code`),iO(5006,`'desc'`),wg(),iO(5007,`: ordenação decrescente (futuro → passado)`),wg()(),jc(5008,`p`)(5009,`strong`),iO(5010,`Componente compatível:`),wg(),jc(5011,`code`),iO(5012,`po-datepicker-range`),wg()()()(),jc(5013,`tr`,16)(5014,`td`,17)(5015,`div`,25)(5016,`span`,26),iO(5017,` readonly`),nu(5018,`br`),wg()()(),jc(5019,`td`,21)(5020,`code`,29),iO(5021,`boolean`),wg()(),jc(5022,`td`,24)(5023,`em`)(5024,`strong`),iO(5025,`(opcional)`),wg()(),jc(5026,`p`),iO(5027,`Indica que o campo será somente leitura.`),wg(),jc(5028,`p`)(5029,`strong`),iO(5030,`Componentes compatíveis:`),wg(),jc(5031,`code`),iO(5032,`po-datepicker`),wg(),iO(5033,`, `),jc(5034,`code`),iO(5035,`po-datepicker-range`),wg(),iO(5036,`, `),jc(5037,`code`),iO(5038,`po-timepicker`),wg(),iO(5039,`, `),jc(5040,`code`),iO(5041,`po-input`),wg(),iO(5042,`, `),jc(5043,`code`),iO(5044,`po-number`),wg(),iO(5045,`,
`),jc(5046,`code`),iO(5047,`po-decimal`),wg(),iO(5048,`, `),jc(5049,`code`),iO(5050,`po-select`),wg(),iO(5051,`, `),jc(5052,`code`),iO(5053,`po-textarea`),wg(),iO(5054,`, `),jc(5055,`code`),iO(5056,`po-password`),wg(),iO(5057,`.`),wg()()(),jc(5058,`tr`,16)(5059,`td`,17)(5060,`div`,25)(5061,`span`,26),iO(5062,` removeInitialFilter`),nu(5063,`br`),wg()()(),jc(5064,`td`,21)(5065,`code`,29),iO(5066,`boolean`),wg()(),jc(5067,`td`,24)(5068,`em`)(5069,`strong`),iO(5070,`(opcional)`),wg()(),jc(5071,`p`),iO(5072,`Define que o filtro no primeiro clique será removido.`),wg(),jc(5073,`blockquote`)(5074,`p`),iO(5075,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),wg()(),jc(5076,`p`)(5077,`strong`),iO(5078,`Componente compatível`),wg(),iO(5079,`: `),jc(5080,`code`),iO(5081,`po-combo`),wg()()()(),jc(5082,`tr`,16)(5083,`td`,17)(5084,`div`,25)(5085,`span`,26),iO(5086,` required`),nu(5087,`br`),wg()()(),jc(5088,`td`,21)(5089,`code`,29),iO(5090,`boolean`),wg()(),jc(5091,`td`,24)(5092,`em`)(5093,`strong`),iO(5094,`(opcional)`),wg()(),jc(5095,`p`),iO(5096,`Define a obrigatoriedade do campo.`),wg(),jc(5097,`p`)(5098,`strong`),iO(5099,`Componentes compatíveis:`),wg(),jc(5100,`code`),iO(5101,`po-datepicker`),wg(),iO(5102,`, `),jc(5103,`code`),iO(5104,`po-datepicker-range`),wg(),iO(5105,`, `),jc(5106,`code`),iO(5107,`po-timepicker`),wg(),iO(5108,`, `),jc(5109,`code`),iO(5110,`po-input`),wg(),iO(5111,`, `),jc(5112,`code`),iO(5113,`po-number`),wg(),iO(5114,`,
`),jc(5115,`code`),iO(5116,`po-decimal`),wg(),iO(5117,`, `),jc(5118,`code`),iO(5119,`po-select`),wg(),iO(5120,`, `),jc(5121,`code`),iO(5122,`po-radio-group`),wg(),iO(5123,`, `),jc(5124,`code`),iO(5125,`po-combo`),wg(),iO(5126,`, `),jc(5127,`code`),iO(5128,`po-lookup`),wg(),iO(5129,`, `),jc(5130,`code`),iO(5131,`po-checkbox-group`),wg(),iO(5132,`, `),jc(5133,`code`),iO(5134,`po-multiselect`),wg(),iO(5135,`,
`),jc(5136,`code`),iO(5137,`po-textarea`),wg(),iO(5138,`, `),jc(5139,`code`),iO(5140,"po-password``, "),wg(),iO(5141,"po-upload`."),wg()()(),jc(5142,`tr`,16)(5143,`td`,17)(5144,`div`,25)(5145,`span`,26),iO(5146,` requiredFieldErrorMessage`),nu(5147,`br`),wg()()(),jc(5148,`td`,21)(5149,`code`,29),iO(5150,`boolean`),wg()(),jc(5151,`td`,24)(5152,`em`)(5153,`strong`),iO(5154,`(opcional)`),wg()(),jc(5155,`p`),iO(5156,`Exibe a mensagem setada na propriedade `),jc(5157,`code`),iO(5158,`errorMessage`),wg(),iO(5159,` se o campo estiver vazio e for requerido.`),wg(),jc(5160,`blockquote`)(5161,`p`),iO(5162,`Necessário que a propriedade `),jc(5163,`code`),iO(5164,`required`),wg(),iO(5165,` esteja habilitada.`),wg()(),jc(5166,`p`)(5167,`strong`),iO(5168,`Componentes compatíveis:`),wg(),jc(5169,`code`),iO(5170,`po-datepicker`),wg(),iO(5171,`, `),jc(5172,`code`),iO(5173,`po-timepicker`),wg(),iO(5174,`, `),jc(5175,`code`),iO(5176,`po-input`),wg(),iO(5177,`, `),jc(5178,`code`),iO(5179,`po-number`),wg(),iO(5180,`, `),jc(5181,`code`),iO(5182,`po-decimal`),wg(),iO(5183,`, `),jc(5184,`code`),iO(5185,`po-password`),wg(),iO(5186,`.`),wg()()(),jc(5187,`tr`,16)(5188,`td`,17)(5189,`div`,25)(5190,`span`,26),iO(5191,` restrictions`),nu(5192,`br`),wg()()(),jc(5193,`td`,21)(5194,`code`,80),iO(5195,`PoUploadFileRestrictions`),wg()(),jc(5196,`td`,24)(5197,`em`)(5198,`strong`),iO(5199,`(opcional)`),wg()(),jc(5200,`p`),iO(5201,`Objeto que segue a definição da interface `),jc(5202,`code`),iO(5203,`PoUploadFileRestrictions`),wg(),iO(5204,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),wg(),jc(5205,`p`)(5206,`strong`),iO(5207,`Componente compatível`),wg(),iO(5208,`: `),jc(5209,`code`),iO(5210,`po-upload`),wg()()()(),jc(5211,`tr`,16)(5212,`td`,17)(5213,`div`,25)(5214,`span`,26),iO(5215,` rows`),nu(5216,`br`),wg()()(),jc(5217,`td`,21)(5218,`code`,45),iO(5219,`number`),wg()(),jc(5220,`td`,24)(5221,`em`)(5222,`strong`),iO(5223,`(opcional)`),wg()(),jc(5224,`p`),iO(5225,`Quantidade de linhas exibidas no `),jc(5226,`code`),iO(5227,`po-textarea`),wg(),iO(5228,`.`),wg()()(),jc(5229,`tr`,16)(5230,`td`,17)(5231,`div`,25)(5232,`span`,26),iO(5233,` searchService`),nu(5234,`br`),wg()()(),jc(5235,`td`,21)(5236,`code`,27),iO(5237,`string `),wg(),jc(5238,`code`,34),iO(5239,` PoLookupFilter`),wg()(),jc(5240,`td`,24)(5241,`em`)(5242,`strong`),iO(5243,`(opcional)`),wg()(),jc(5244,`p`),iO(5245,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),jc(5246,`code`),iO(5247,`columns`),wg(),iO(5248,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),jc(5249,`strong`),iO(5250,`Importante:`),wg()(),jc(5251,`blockquote`)(5252,`p`),iO(5253,`Caso utilizar a propriedade `),jc(5254,`code`),iO(5255,`optionsService`),wg(),iO(5256,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(5257,`a`,7),iO(5258,`guia de API do PO UI`),wg(),iO(5259,`.`),wg()()()(),jc(5260,`tr`,16)(5261,`td`,17)(5262,`div`,25)(5263,`span`,26),iO(5264,` secondInterval`),nu(5265,`br`),wg()()(),jc(5266,`td`,21)(5267,`code`,45),iO(5268,`number`),wg()(),jc(5269,`td`,24)(5270,`em`)(5271,`strong`),iO(5272,`(opcional)`),wg()(),jc(5273,`p`),iO(5274,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),wg()()(),jc(5275,`tr`,16)(5276,`td`,17)(5277,`div`,25)(5278,`span`,26),iO(5279,` secret`),nu(5280,`br`),wg()()(),jc(5281,`td`,21)(5282,`code`,29),iO(5283,`boolean`),wg()(),jc(5284,`td`,24)(5285,`em`)(5286,`strong`),iO(5287,`(opcional)`),wg()(),jc(5288,`p`),iO(5289,`Esconde a informação estilo `),jc(5290,`em`),iO(5291,`password`),wg(),iO(5292,`, pode ser utilizado quando o tipo de dado for `),jc(5293,`em`),iO(5294,`string`),wg(),iO(5295,`.`),wg()()(),jc(5296,`tr`,16)(5297,`td`,17)(5298,`div`,25)(5299,`span`,26),iO(5300,` showRequired`),nu(5301,`br`),wg()()(),jc(5302,`td`,21)(5303,`code`,29),iO(5304,`boolean`),wg()(),jc(5305,`td`,24)(5306,`em`)(5307,`strong`),iO(5308,`(opcional)`),wg()(),jc(5309,`p`),iO(5310,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(5311,`blockquote`)(5312,`p`),iO(5313,`Não será exibida a indicação se:`),wg()(),jc(5314,`ul`)(5315,`li`),iO(5316,`Não possuir `),jc(5317,`code`),iO(5318,`p-help`),wg(),iO(5319,` e/ou `),jc(5320,`code`),iO(5321,`p-label`),wg(),iO(5322,`.`),wg()(),jc(5323,`p`)(5324,`strong`),iO(5325,`Componentes compatíveis:`),wg(),jc(5326,`code`),iO(5327,`po-datepicker`),wg(),iO(5328,`, `),jc(5329,`code`),iO(5330,`po-datepicker-range`),wg(),iO(5331,`, `),jc(5332,`code`),iO(5333,`po-timepicker`),wg(),iO(5334,`, `),jc(5335,`code`),iO(5336,`po-input`),wg(),iO(5337,`, `),jc(5338,`code`),iO(5339,`po-number`),wg(),iO(5340,`,
`),jc(5341,`code`),iO(5342,`po-decimal`),wg(),iO(5343,`, `),jc(5344,`code`),iO(5345,`po-select`),wg(),iO(5346,`, `),jc(5347,`code`),iO(5348,`po-radio-group`),wg(),iO(5349,`, `),jc(5350,`code`),iO(5351,`po-combo`),wg(),iO(5352,`, `),jc(5353,`code`),iO(5354,`po-lookup`),wg(),iO(5355,`, `),jc(5356,`code`),iO(5357,`po-checkbox-group`),wg(),iO(5358,`, `),jc(5359,`code`),iO(5360,`po-multiselect`),wg(),iO(5361,`,
`),jc(5362,`code`),iO(5363,`po-textarea`),wg(),iO(5364,`, `),jc(5365,`code`),iO(5366,`po-password`),wg(),iO(5367,`, `),jc(5368,`code`),iO(5369,`po-upload`),wg(),iO(5370,`.`),wg()()(),jc(5371,`tr`,16)(5372,`td`,17)(5373,`div`,25)(5374,`span`,26),iO(5375,` showSeconds`),nu(5376,`br`),wg()()(),jc(5377,`td`,21)(5378,`code`,29),iO(5379,`boolean`),wg()(),jc(5380,`td`,24)(5381,`em`)(5382,`strong`),iO(5383,`(opcional)`),wg()(),jc(5384,`p`),iO(5385,`Exibe a coluna de segundos no painel do timepicker.`),wg()()(),jc(5386,`tr`,16)(5387,`td`,17)(5388,`div`,25)(5389,`span`,26),iO(5390,` showThumbnail`),nu(5391,`br`),wg()()(),jc(5392,`td`,21)(5393,`code`,29),iO(5394,`boolean`),wg()(),jc(5395,`td`,24)(5396,`em`)(5397,`strong`),iO(5398,`(opcional)`),wg()(),jc(5399,`p`),iO(5400,`Exibe a pré-visualização de imagens ao anexá-las.`),wg(),jc(5401,`blockquote`)(5402,`p`),iO(5403,`Propriedade funciona apenas em arquivos de formato de imagem (`),jc(5404,`code`),iO(5405,`.png`),wg(),iO(5406,`, `),jc(5407,`code`),iO(5408,`.jpg`),wg(),iO(5409,`, `),jc(5410,`code`),iO(5411,`.jpeg`),wg(),iO(5412,` e `),jc(5413,`code`),iO(5414,`.gif`),wg(),iO(5415,`).`),wg()(),jc(5416,`p`)(5417,`strong`),iO(5418,`Componente compatível`),wg(),iO(5419,`: `),jc(5420,`code`),iO(5421,`po-upload`),wg()()()(),jc(5422,`tr`,16)(5423,`td`,17)(5424,`div`,25)(5425,`span`,26),iO(5426,` size`),nu(5427,`br`),wg()()(),jc(5428,`td`,21)(5429,`code`,27),iO(5430,`string`),wg()(),jc(5431,`td`,24)(5432,`em`)(5433,`strong`),iO(5434,`(opcional)`),wg()(),jc(5435,`p`),iO(5436,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),wg(),jc(5437,`ul`)(5438,`li`)(5439,`code`),iO(5440,`small`),wg(),iO(5441,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(5442,`li`)(5443,`code`),iO(5444,`medium`),wg(),iO(5445,`: aplica a medida medium de cada componente.`),wg(),jc(5446,`li`)(5447,`code`),iO(5448,`large`),wg(),iO(5449,`: aplica a medida large de cada componente (disponível para `),jc(5450,`code`),iO(5451,`po-checkbox`),wg(),iO(5452,` e `),jc(5453,`code`),iO(5454,`po-radio-group`),wg(),iO(5455,`).`),jc(5456,`blockquote`)(5457,`p`),iO(5458,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(5459,`code`),iO(5460,`medium`),wg(),iO(5461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(5462,`a`,40),iO(5463,`po-theme`),wg(),iO(5464,`.`),wg()()()()()(),jc(5465,`tr`,16)(5466,`td`,17)(5467,`div`,25)(5468,`span`,26),iO(5469,` sort`),nu(5470,`br`),wg()()(),jc(5471,`td`,21)(5472,`code`,29),iO(5473,`boolean`),wg()(),jc(5474,`td`,24)(5475,`em`)(5476,`strong`),iO(5477,`(opcional)`),wg()(),jc(5478,`p`),iO(5479,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),wg(),jc(5480,`p`)(5481,`strong`),iO(5482,`Componentes compatíveis:`),wg(),jc(5483,`code`),iO(5484,`po-combo`),wg(),iO(5485,`, po-multiselect`),wg()()(),jc(5486,`tr`,16)(5487,`td`,17)(5488,`div`,25)(5489,`span`,26),iO(5490,` step`),nu(5491,`br`),wg()()(),jc(5492,`td`,21)(5493,`code`,45),iO(5494,`number`),wg()(),jc(5495,`td`,24)(5496,`em`)(5497,`strong`),iO(5498,`(opcional)`),wg()(),jc(5499,`p`),iO(5500,`Intervalo utilizado no `),jc(5501,`code`),iO(5502,`po-number`),wg(),iO(5503,`.`),wg()()(),jc(5504,`tr`,16)(5505,`td`,17)(5506,`div`,25)(5507,`span`,26),iO(5508,` thousandMaxlength`),nu(5509,`br`),wg()()(),jc(5510,`td`,21)(5511,`code`,45),iO(5512,`number`),wg()(),jc(5513,`td`,24)(5514,`em`)(5515,`strong`),iO(5516,`(opcional)`),wg()(),jc(5517,`p`),iO(5518,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),wg(),jc(5519,`blockquote`)(5520,`p`),iO(5521,`Esta propriedade só pode ser utilizada quando o `),jc(5522,`code`),iO(5523,`type`),wg(),iO(5524,` for `),jc(5525,`em`),iO(5526,`currency`),wg(),iO(5527,` ou `),jc(5528,`em`),iO(5529,`decimal`),wg(),iO(5530,`.`),wg()(),jc(5531,`blockquote`)(5532,`p`),iO(5533,`Quando utilizado com `),jc(5534,`code`),iO(5535,`displayFormat`),wg(),iO(5536,`, será respeitado o valor `),jc(5537,`strong`),iO(5538,`mais restritivo`),wg(),iO(5539,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),wg()()()(),jc(5540,`tr`,16)(5541,`td`,17)(5542,`div`,25)(5543,`span`,26),iO(5544,` type`),nu(5545,`br`),wg()()(),jc(5546,`td`,21)(5547,`code`,27),iO(5548,`string `),wg(),jc(5549,`code`,81),iO(5550,` PoDynamicFieldType`),wg()(),jc(5551,`td`,24)(5552,`em`)(5553,`strong`),iO(5554,`(opcional)`),wg()(),jc(5555,`p`),iO(5556,`Tipo do valor campo.`),wg(),jc(5557,`p`),iO(5558,`Valores válidos:`),wg(),jc(5559,`ul`)(5560,`li`)(5561,`code`),iO(5562,`boolean`),wg(),iO(5563,`: Valores `),jc(5564,`em`),iO(5565,`booleanos`),wg(),iO(5566,`.`),wg(),jc(5567,`li`)(5568,`code`),iO(5569,`currency`),wg(),iO(5570,`: Valores monetários.`),wg(),jc(5571,`li`)(5572,`code`),iO(5573,`decimal`),wg(),iO(5574,`: Valores decimais.`),wg(),jc(5575,`li`)(5576,`code`),iO(5577,`date`),wg(),iO(5578,`: Valores de datas.`),jc(5579,`ul`)(5580,`li`),iO(5581,`Aceita os tipos `),jc(5582,`strong`),iO(5583,`string`),wg(),iO(5584,` e `),jc(5585,`strong`),iO(5586,`Date`),wg(),iO(5587,` padr\xE3o do Javascript,
por exemplo: `),jc(5588,`code`),iO(5589,`'2017-11-28'`),wg(),iO(5590,` ou `),jc(5591,`code`),iO(5592,`new Date(2017, 10, 28)`),wg(),iO(5593,`.`),wg()()(),jc(5594,`li`)(5595,`code`),iO(5596,`dateTime`),wg(),iO(5597,`: Valor de data com horário.`),jc(5598,`ul`)(5599,`li`),iO(5600,`Aceita o tipo `),jc(5601,`em`),iO(5602,`string`),wg(),iO(5603,` no formato `),jc(5604,`strong`),iO(5605,`ISO-8601`),wg(),iO(5606,` extendido `),jc(5607,`strong`),iO(5608,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),wg(),iO(5609,`
e o tipo `),jc(5610,`strong`),iO(5611,`Date`),wg(),iO(5612,` padrão do Javascript, por exemplo: `),jc(5613,`code`),iO(5614,`'2017-11-28T00:00:00-02:00'`),wg(),iO(5615,` ou `),jc(5616,`code`),iO(5617,`new Date(2017, 10, 28)`),wg(),iO(5618,`.`),wg()()(),jc(5619,`li`)(5620,`code`),iO(5621,`number`),wg(),iO(5622,`: Valores numéricos.`),wg(),jc(5623,`li`)(5624,`code`),iO(5625,`string`),wg(),iO(5626,`: Textos.`),wg(),jc(5627,`li`)(5628,`code`),iO(5629,`time`),wg(),iO(5630,`: Valor do horário.`),jc(5631,`ul`)(5632,`li`),iO(5633,`Aceita o tipo `),jc(5634,`strong`),iO(5635,`string`),wg(),iO(5636,` nos formatos `),jc(5637,`strong`),iO(5638,`'HH:mm:ss'`),wg(),iO(5639,` ou `),jc(5640,`strong`),iO(5641,`'HH:mm:ss.ffffff'`),wg(),iO(5642,`, por exemplo: `),jc(5643,`code`),iO(5644,`'23:12:45'`),wg(),iO(5645,`.`),wg()()()()()(),jc(5646,`tr`,16)(5647,`td`,17)(5648,`div`,25)(5649,`span`,26),iO(5650,` url`),nu(5651,`br`),wg()()(),jc(5652,`td`,21)(5653,`code`,27),iO(5654,`string`),wg()(),jc(5655,`td`,24)(5656,`em`)(5657,`strong`),iO(5658,`(opcional)`),wg()(),jc(5659,`p`),iO(5660,`URL que deve ser feita a requisição com os arquivos selecionados.`),wg(),jc(5661,`p`)(5662,`strong`),iO(5663,`Componente compatível`),wg(),iO(5664,`: `),jc(5665,`code`),iO(5666,`po-upload`),wg()()()(),jc(5667,`tr`,16)(5668,`td`,17)(5669,`div`,25)(5670,`span`,26),iO(5671,` validate`),nu(5672,`br`),wg()()(),jc(5673,`td`,21)(5674,`code`,27),iO(5675,`string `),wg(),jc(5676,`code`,44),iO(5677,` Function`),wg()(),jc(5678,`td`,24)(5679,`em`)(5680,`strong`),iO(5681,`(opcional)`),wg()(),jc(5682,`p`),iO(5683,`Função ou serviço para validar as `),jc(5684,`strong`),iO(5685,`mudanças do campo`),wg(),iO(5686,`.`),wg(),jc(5687,`ul`)(5688,`li`),iO(5689,`A propriedade aceita os seguintes tipos:`),wg()(),jc(5690,`ul`)(5691,`li`)(5692,`strong`),iO(5693,`String`),wg(),iO(5694,`: Endpoint usado pelo componente para requisição via `),jc(5695,`code`),iO(5696,`POST`),wg(),iO(5697,`.`),wg(),jc(5698,`li`)(5699,`strong`),iO(5700,`Function`),wg(),iO(5701,`: Método que será executado.`),wg()(),jc(5702,`p`),iO(5703,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),jc(5704,`code`),iO(5705,`PoDynamicFormFieldChanged`),wg(),iO(5706,`:`),wg(),jc(5707,`p`)(5708,`code`),iO(5709,`{ property: 'property name', value: 'new value' }`),wg()(),jc(5710,`p`),iO(5711,`O retorno desta função deve ser do tipo `),jc(5712,`a`,82),iO(5713,`PoDynamicFormFieldValidation`),wg(),iO(5714,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),wg(),jc(5715,`pre`)(5716,`code`),iO(5717,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),wg()(),jc(5718,`p`),iO(5719,`Para referenciar a sua função utilize a propriedade `),jc(5720,`code`),iO(5721,`bind`),wg(),iO(5722,`, por exemplo:
`),jc(5723,`code`),iO(5724,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),wg()()()(),jc(5725,`tr`,16)(5726,`td`,17)(5727,`div`,25)(5728,`span`,26),iO(5729,` visible`),nu(5730,`br`),wg()()(),jc(5731,`td`,21)(5732,`code`,29),iO(5733,`boolean`),wg()(),jc(5734,`td`,24)(5735,`em`)(5736,`strong`),iO(5737,`(opcional)`),wg()(),jc(5738,`p`),iO(5739,`Indica se o campo será visível.`),wg()()(),jc(5740,`tr`,16)(5741,`td`,17)(5742,`div`,25)(5743,`span`,26),iO(5744,` yearRangeLimit`),nu(5745,`br`),wg()()(),jc(5746,`td`,21)(5747,`code`,45),iO(5748,`number`),wg()(),jc(5749,`td`,24)(5750,`em`)(5751,`strong`),iO(5752,`(opcional)`),wg()(),jc(5753,`p`),iO(5754,`Define o limite de anos exibidos na lista de anos do `),jc(5755,`code`),iO(5756,`po-datepicker`),wg(),iO(5757,` nos modos `),jc(5758,`code`),iO(5759,`month-year`),wg(),iO(5760,` e `),jc(5761,`code`),iO(5762,`year`),wg(),iO(5763,`.`),wg()()()(),jc(5764,`h4`,43)(5765,`code`,5),iO(5766,`PoLookupColumn`),wg()(),jc(5767,`div`,2)(5768,`p`),iO(5769,`Interface para configuração das colunas do po-lookup.`),wg()(),jc(5770,`h4`,12),iO(5771,`Propriedades`),wg(),jc(5772,`table`,13)(5773,`tr`,14)(5774,`th`,15),iO(5775,`Nome`),wg(),jc(5776,`th`,15),iO(5777,`Tipo`),wg(),jc(5778,`th`,15),iO(5779,`Descrição`),wg()(),jc(5780,`tr`,16)(5781,`td`,17)(5782,`div`,25)(5783,`span`,26),iO(5784,` fieldLabel`),nu(5785,`br`),wg()()(),jc(5786,`td`,21)(5787,`code`,29),iO(5788,`boolean`),wg()(),jc(5789,`td`,24)(5790,`em`)(5791,`strong`),iO(5792,`(opcional)`),wg()(),jc(5793,`p`),iO(5794,`Indica que a coluna será utilizada como valor do campo e como filtro dentro da modal.`),wg(),jc(5795,`p`),iO(5796,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),wg(),jc(5797,`p`),iO(5798,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),jc(5799,`code`),iO(5800,`p-field-format`),wg(),iO(5801,` ou `),jc(5802,`code`),iO(5803,`p-field-label`),wg(),iO(5804,` forem configurados no componente.`),wg()()(),jc(5805,`tr`,16)(5806,`td`,17)(5807,`div`,25)(5808,`span`,26),iO(5809,` format`),nu(5810,`br`),wg()()(),jc(5811,`td`,21)(5812,`code`,27),iO(5813,`string`),wg()(),jc(5814,`td`,24)(5815,`em`)(5816,`strong`),iO(5817,`(opcional)`),wg()(),jc(5818,`p`),iO(5819,`Formato de exibição do valor da coluna:`),wg(),jc(5820,`ul`)(5821,`li`),iO(5822,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),wg(),jc(5823,`li`),iO(5824,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),wg()()()(),jc(5825,`tr`,16)(5826,`td`,17)(5827,`div`,25)(5828,`span`,26),iO(5829,` label`),nu(5830,`br`),wg()()(),jc(5831,`td`,21)(5832,`code`,27),iO(5833,`string`),wg()(),jc(5834,`td`,24)(5835,`em`)(5836,`strong`),iO(5837,`(opcional)`),wg()(),jc(5838,`p`),iO(5839,`Texto para título da coluna.`),wg(),jc(5840,`p`),iO(5841,`Caso não seja informado, será utilizado como `),jc(5842,`em`),iO(5843,`label`),wg(),iO(5844,` o valor da propriedade `),jc(5845,`em`),iO(5846,`property`),wg(),iO(5847,` com a primeira letra em maiúsculo.`),wg()()(),jc(5848,`tr`,16)(5849,`td`,17)(5850,`div`,25)(5851,`span`,26),iO(5852,` mask`),nu(5853,`br`),wg()()(),jc(5854,`td`,21)(5855,`code`,27),iO(5856,`string`),wg()(),jc(5857,`td`,24)(5858,`em`)(5859,`strong`),iO(5860,`(opcional)`),wg()(),jc(5861,`p`),iO(5862,`Define uma máscara para formatação do valor exibido na coluna.`),wg(),jc(5863,`p`),iO(5864,`A máscara é aplicada somente para `),jc(5865,`strong`),iO(5866,`exibição`),wg(),iO(5867,` na tabela da modal do lookup, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),wg(),jc(5868,`p`),iO(5869,`Caracteres válidos para a máscara:`),wg(),jc(5870,`ul`)(5871,`li`)(5872,`code`),iO(5873,`9`),wg(),iO(5874,` : aceita um dígito numérico (0-9).`),wg(),jc(5875,`li`)(5876,`code`),iO(5877,`@`),wg(),iO(5878,` : aceita um caractere alfabético (a-z, A-Z).`),wg(),jc(5879,`li`)(5880,`code`),iO(5881,`w`),wg(),iO(5882,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),wg(),jc(5883,`li`),iO(5884,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),jc(5885,`code`),iO(5886,`.`),wg(),iO(5887,`, `),jc(5888,`code`),iO(5889,`-`),wg(),iO(5890,`, `),jc(5891,`code`),iO(5892,`/`),wg(),iO(5893,`, `),jc(5894,`code`),iO(5895,`(`),wg(),iO(5896,`, `),jc(5897,`code`),iO(5898,`)`),wg(),iO(5899,`, `),jc(5900,`code`),iO(5901,`+`),wg(),iO(5902,`, `),nu(5903,`code`),iO(5904,`).`),wg()(),jc(5905,`p`),iO(5906,`Exemplos de uso:`),wg(),jc(5907,`pre`)(5908,`code`),iO(5909,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),wg()(),jc(5910,`blockquote`)(5911,`p`),iO(5912,`Esta propriedade é utilizada apenas para colunas do tipo `),jc(5913,`code`),iO(5914,`string`),wg(),iO(5915,` (padr\xE3o).
Caso a coluna possua um `),jc(5916,`code`),iO(5917,`type`),wg(),iO(5918,` diferente de `),jc(5919,`code`),iO(5920,`string`),wg(),iO(5921,`, a máscara será ignorada.`),wg()()()(),jc(5922,`tr`,16)(5923,`td`,17)(5924,`div`,25)(5925,`span`,26),iO(5926,` property`),nu(5927,`br`),wg()()(),jc(5928,`td`,21)(5929,`code`,27),iO(5930,`string`),wg()(),jc(5931,`td`,24)(5932,`em`)(5933,`strong`),iO(5934,`(opcional)`),wg()(),jc(5935,`p`),iO(5936,`Nome identificador da coluna.`),wg()()(),jc(5937,`tr`,16)(5938,`td`,17)(5939,`div`,25)(5940,`span`,26),iO(5941,` type`),nu(5942,`br`),wg()()(),jc(5943,`td`,21)(5944,`code`,27),iO(5945,`string`),wg()(),jc(5946,`td`,24)(5947,`em`)(5948,`strong`),iO(5949,`(opcional)`),wg()(),jc(5950,`p`),iO(5951,`Tipo da coluna:`),wg(),jc(5952,`ul`)(5953,`li`),iO(5954,`string (padrão): textos`),wg(),jc(5955,`li`),iO(5956,`number: valores numéricos`),wg(),jc(5957,`li`),iO(5958,`date: data`),wg(),jc(5959,`li`),iO(5960,`currency: valores monetários`),wg(),jc(5961,`li`),iO(5962,`dateTime: data e hora`),wg()()()(),jc(5963,`tr`,16)(5964,`td`,17)(5965,`div`,25)(5966,`span`,26),iO(5967,` width`),nu(5968,`br`),wg()()(),jc(5969,`td`,21)(5970,`code`,27),iO(5971,`string`),wg()(),jc(5972,`td`,24)(5973,`em`)(5974,`strong`),iO(5975,`(opcional)`),wg()(),jc(5976,`p`),iO(5977,`A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'`),wg()()()(),jc(5978,`h4`,43)(5979,`code`,5),iO(5980,`PoLookupFilter`),wg()(),jc(5981,`div`,2)(5982,`p`),iO(5983,`Define o tipo de busca utilizado no po-lookup.`),wg()(),jc(5984,`h4`,12),iO(5985,`Métodos`),wg(),jc(5986,`table`,41)(5987,`tr`,16)(5988,`th`,42)(5989,`div`,25)(5990,`h4`)(5991,`span`,26),iO(5992,` getFilteredItems `),wg()()()()(),jc(5993,`tr`,24)(5994,`td`,24)(5995,`p`),iO(5996,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),jc(5997,`em`),iO(5998,`Observable`),wg(),iO(5999,` com a resposta da API no formato da interface `),jc(6e3,`code`),iO(6001,`PoLookupResponseApi`),wg(),iO(6002,`.`),wg()()()(),jc(6003,`h5`)(6004,`b`),iO(6005,`Parâmetros`),wg()(),jc(6006,`table`,13)(6007,`tr`,14)(6008,`th`,15),iO(6009,`Nome`),wg(),jc(6010,`th`,15),iO(6011,`Tipo`),wg(),jc(6012,`th`,15),iO(6013,`Descrição`),wg()(),jc(6014,`tr`,16)(6015,`td`,17),iO(6016,` params`),wg(),jc(6017,`td`,21)(6018,`code`,83),iO(6019,` PoLookupFilteredItemsParams `),wg()(),jc(6020,`td`,24)(6021,`p`),iO(6022,`Objeto enviado por parâmetro que implementa a interface `),jc(6023,`code`),iO(6024,`PoLookupFilteredItemsParams`),wg(),iO(6025,`.`),wg()()()(),nu(6026,`br`),jc(6027,`table`,41)(6028,`tr`,16)(6029,`th`,42)(6030,`div`,25)(6031,`h4`)(6032,`span`,26),iO(6033,` getObjectByValue `),wg()()()()(),jc(6034,`tr`,24)(6035,`td`,24)(6036,`p`),iO(6037,`Método responsável por enviar um valor que será buscado no serviço.`),wg(),jc(6038,`p`),iO(6039,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),wg()()()(),jc(6040,`h5`)(6041,`b`),iO(6042,`Parâmetros`),wg()(),jc(6043,`table`,13)(6044,`tr`,14)(6045,`th`,15),iO(6046,`Nome`),wg(),jc(6047,`th`,15),iO(6048,`Tipo`),wg(),jc(6049,`th`,15),iO(6050,`Descrição`),wg()(),jc(6051,`tr`,16)(6052,`td`,17),iO(6053,` value`),wg(),jc(6054,`td`,21)(6055,`code`,27),iO(6056,` string `),wg(),jc(6057,`code`,74),iO(6058,` Array<any> `),wg()(),jc(6059,`td`,24)(6060,`p`),iO(6061,`Valor único a ser buscado na fonte de dados.`),wg()()(),jc(6062,`tr`,16)(6063,`td`,17),iO(6064,` filterParams`),wg(),jc(6065,`td`,21)(6066,`code`,83),iO(6067,` any `),wg()(),jc(6068,`td`,24)(6069,`p`),iO(6070,`Valor informado através da propriedade `),jc(6071,`code`),iO(6072,`p-filter-params`),wg(),iO(6073,`.`),wg()()()(),nu(6074,`br`),jc(6075,`h4`,43)(6076,`code`,5),iO(6077,`PoLookupFilteredItemsParams`),wg()(),jc(6078,`div`,2)(6079,`p`),iO(6080,`Interface do objeto enviado como parâmetro na função `),jc(6081,`code`),iO(6082,`getFilteredItems`),wg(),iO(6083,`.`),wg()(),jc(6084,`h4`,12),iO(6085,`Propriedades`),wg(),jc(6086,`table`,13)(6087,`tr`,14)(6088,`th`,15),iO(6089,`Nome`),wg(),jc(6090,`th`,15),iO(6091,`Tipo`),wg(),jc(6092,`th`,15),iO(6093,`Descrição`),wg()(),jc(6094,`tr`,16)(6095,`td`,17)(6096,`div`,25)(6097,`span`,26),iO(6098,` advancedFilters`),nu(6099,`br`),wg()()(),jc(6100,`td`,21)(6101,`code`,84),iO(6102,`{ [key: string]: any;
}`),wg()(),jc(6103,`td`,24)(6104,`em`)(6105,`strong`),iO(6106,`(opcional)`),wg()(),jc(6107,`p`),iO(6108,`Valores informados nos campos de busca avançada, que serão utilizados para filtrar a lista de itens.`),wg()()(),jc(6109,`tr`,16)(6110,`td`,17)(6111,`div`,25)(6112,`span`,26),iO(6113,` filter`),nu(6114,`br`),wg()()(),jc(6115,`td`,21)(6116,`code`,27),iO(6117,`string`),wg()(),jc(6118,`td`,24)(6119,`em`)(6120,`strong`),iO(6121,`(opcional)`),wg()(),jc(6122,`p`),iO(6123,`Conteúdo utilizado para filtrar a lista de itens.`),wg()()(),jc(6124,`tr`,16)(6125,`td`,17)(6126,`div`,25)(6127,`span`,26),iO(6128,` filterParams`),nu(6129,`br`),wg()()(),jc(6130,`td`,21)(6131,`code`,33),iO(6132,`any`),wg()(),jc(6133,`td`,24)(6134,`em`)(6135,`strong`),iO(6136,`(opcional)`),wg()(),jc(6137,`p`),iO(6138,`Valor informado através da propriedade `),jc(6139,`code`),iO(6140,`p-filter-params`),wg(),iO(6141,`.`),wg()()(),jc(6142,`tr`,16)(6143,`td`,17)(6144,`div`,25)(6145,`span`,26),iO(6146,` order`),nu(6147,`br`),wg()()(),jc(6148,`td`,21)(6149,`code`,27),iO(6150,`string`),wg()(),jc(6151,`td`,24)(6152,`em`)(6153,`strong`),iO(6154,`(opcional)`),wg()(),jc(6155,`p`),iO(6156,`Coluna que está sendo ordenada na tabela.`),wg(),jc(6157,`ul`)(6158,`li`),iO(6159,`Coluna decrescente será informada da seguinte forma: `),jc(6160,`code`),iO(6161,`-<colunaOrdenada>`),wg(),iO(6162,`, por exemplo `),jc(6163,`code`),iO(6164,`-name`),wg(),iO(6165,`.`),wg(),jc(6166,`li`),iO(6167,`Coluna ascendente será informada da seguinte forma: `),jc(6168,`code`),iO(6169,`<colunaOrdenada>`),wg(),iO(6170,`, por exemplo `),jc(6171,`code`),iO(6172,`name`),wg(),iO(6173,`.`),wg()()()(),jc(6174,`tr`,16)(6175,`td`,17)(6176,`div`,25)(6177,`span`,26),iO(6178,` page`),nu(6179,`br`),wg()()(),jc(6180,`td`,21)(6181,`code`,45),iO(6182,`number`),wg()(),jc(6183,`td`,24)(6184,`em`)(6185,`strong`),iO(6186,`(opcional)`),wg()(),jc(6187,`p`),iO(6188,`Controla a paginação dos dados e recebe valor automaticamente a cada clique no botão 'Carregar mais resultados'.`),wg()()(),jc(6189,`tr`,16)(6190,`td`,17)(6191,`div`,25)(6192,`span`,26),iO(6193,` pageSize`),nu(6194,`br`),wg()()(),jc(6195,`td`,21)(6196,`code`,45),iO(6197,`number`),wg()(),jc(6198,`td`,24)(6199,`em`)(6200,`strong`),iO(6201,`(opcional)`),wg()(),jc(6202,`p`),iO(6203,`Quantidade de itens retornados cada vez que o serviço é chamado, por padrão é 10.`),wg()()()(),jc(6204,`h4`,43)(6205,`code`,5),iO(6206,`PoLookupLiterals`),wg()(),jc(6207,`div`,2)(6208,`p`),iO(6209,`Interface para definição das literais usadas no `),jc(6210,`code`),iO(6211,`po-lookup`),wg(),iO(6212,`.`),wg()(),jc(6213,`h4`,12),iO(6214,`Propriedades`),wg(),jc(6215,`table`,13)(6216,`tr`,14)(6217,`th`,15),iO(6218,`Nome`),wg(),jc(6219,`th`,15),iO(6220,`Tipo`),wg(),jc(6221,`th`,15),iO(6222,`Descrição`),wg()(),jc(6223,`tr`,16)(6224,`td`,17)(6225,`div`,25)(6226,`span`,26),iO(6227,` clean`),nu(6228,`br`),wg()()(),jc(6229,`td`,21)(6230,`code`,27),iO(6231,`string`),wg()(),jc(6232,`td`,24)(6233,`em`)(6234,`strong`),iO(6235,`(opcional)`),wg()(),jc(6236,`p`),iO(6237,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de limpar.`),wg()()(),jc(6238,`tr`,16)(6239,`td`,17)(6240,`div`,25)(6241,`span`,26),iO(6242,` modalAdvancedSearch`),nu(6243,`br`),wg()()(),jc(6244,`td`,21)(6245,`code`,27),iO(6246,`string`),wg()(),jc(6247,`td`,24)(6248,`em`)(6249,`strong`),iO(6250,`(opcional)`),wg()(),jc(6251,`p`),iO(6252,`Texto do link de busca avançada.`),wg(),jc(6253,`p`),iO(6254,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),wg()()(),jc(6255,`tr`,16)(6256,`td`,17)(6257,`div`,25)(6258,`span`,26),iO(6259,` modalAdvancedSearchPrimaryActionLabel`),nu(6260,`br`),wg()()(),jc(6261,`td`,21)(6262,`code`,27),iO(6263,`string`),wg()(),jc(6264,`td`,24)(6265,`em`)(6266,`strong`),iO(6267,`(opcional)`),wg()(),jc(6268,`p`),iO(6269,`Texto exibido no label do botão de ação primária da modal de busca avançada.`),wg()()(),jc(6270,`tr`,16)(6271,`td`,17)(6272,`div`,25)(6273,`span`,26),iO(6274,` modalAdvancedSearchSecondaryActionLabel`),nu(6275,`br`),wg()()(),jc(6276,`td`,21)(6277,`code`,27),iO(6278,`string`),wg()(),jc(6279,`td`,24)(6280,`em`)(6281,`strong`),iO(6282,`(opcional)`),wg()(),jc(6283,`p`),iO(6284,`Texto exibido no label do botão de ação secundária da modal de busca avançada.`),wg()()(),jc(6285,`tr`,16)(6286,`td`,17)(6287,`div`,25)(6288,`span`,26),iO(6289,` modalAdvancedSearchTitle`),nu(6290,`br`),wg()()(),jc(6291,`td`,21)(6292,`code`,27),iO(6293,`string`),wg()(),jc(6294,`td`,24)(6295,`em`)(6296,`strong`),iO(6297,`(opcional)`),wg()(),jc(6298,`p`),iO(6299,`Texto exibido no título da modal de busca avançada.`),wg()()(),jc(6300,`tr`,16)(6301,`td`,17)(6302,`div`,25)(6303,`span`,26),iO(6304,` modalDisclaimerGroupTitle`),nu(6305,`br`),wg()()(),jc(6306,`td`,21)(6307,`code`,27),iO(6308,`string`),wg()(),jc(6309,`td`,24)(6310,`em`)(6311,`strong`),iO(6312,`(opcional)`),wg()(),jc(6313,`p`),iO(6314,`Texto exibido no título do disclaimer.`),wg()()(),jc(6315,`tr`,16)(6316,`td`,17)(6317,`div`,25)(6318,`span`,26),iO(6319,` modalPlaceholder`),nu(6320,`br`),wg()()(),jc(6321,`td`,21)(6322,`code`,27),iO(6323,`string`),wg()(),jc(6324,`td`,24)(6325,`em`)(6326,`strong`),iO(6327,`(opcional)`),wg()(),jc(6328,`p`),iO(6329,`Texto exibido no placeholder do input da modal.`),wg()()(),jc(6330,`tr`,16)(6331,`td`,17)(6332,`div`,25)(6333,`span`,26),iO(6334,` modalPrimaryActionLabel`),nu(6335,`br`),wg()()(),jc(6336,`td`,21)(6337,`code`,27),iO(6338,`string`),wg()(),jc(6339,`td`,24)(6340,`em`)(6341,`strong`),iO(6342,`(opcional)`),wg()(),jc(6343,`p`),iO(6344,`Texto exibido no label do botão de ação primária da modal.`),wg()()(),jc(6345,`tr`,16)(6346,`td`,17)(6347,`div`,25)(6348,`span`,26),iO(6349,` modalSecondaryActionLabel`),nu(6350,`br`),wg()()(),jc(6351,`td`,21)(6352,`code`,27),iO(6353,`string`),wg()(),jc(6354,`td`,24)(6355,`em`)(6356,`strong`),iO(6357,`(opcional)`),wg()(),jc(6358,`p`),iO(6359,`Texto exibido no label do botão de ação secundária da modal.`),wg()()(),jc(6360,`tr`,16)(6361,`td`,17)(6362,`div`,25)(6363,`span`,26),iO(6364,` modalTableLoadMoreData`),nu(6365,`br`),wg()()(),jc(6366,`td`,21)(6367,`code`,27),iO(6368,`string`),wg()(),jc(6369,`td`,24)(6370,`em`)(6371,`strong`),iO(6372,`(opcional)`),wg()(),jc(6373,`p`),iO(6374,`Label do `),jc(6375,`code`),iO(6376,`button`),wg(),iO(6377,` que deve carregar mais resultados na tabela, ou seja, exibir mais itens.`),wg()()(),jc(6378,`tr`,16)(6379,`td`,17)(6380,`div`,25)(6381,`span`,26),iO(6382,` modalTableLoadingData`),nu(6383,`br`),wg()()(),jc(6384,`td`,21)(6385,`code`,27),iO(6386,`string`),wg()(),jc(6387,`td`,24)(6388,`em`)(6389,`strong`),iO(6390,`(opcional)`),wg()(),jc(6391,`p`),iO(6392,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),wg()()(),jc(6393,`tr`,16)(6394,`td`,17)(6395,`div`,25)(6396,`span`,26),iO(6397,` modalTableNoColumns`),nu(6398,`br`),wg()()(),jc(6399,`td`,21)(6400,`code`,27),iO(6401,`string`),wg()(),jc(6402,`td`,24)(6403,`em`)(6404,`strong`),iO(6405,`(opcional)`),wg()(),jc(6406,`p`),iO(6407,`Texto exibido quando não existem colunas definidas para a tabela.`),wg()()(),jc(6408,`tr`,16)(6409,`td`,17)(6410,`div`,25)(6411,`span`,26),iO(6412,` modalTableNoData`),nu(6413,`br`),wg()()(),jc(6414,`td`,21)(6415,`code`,27),iO(6416,`string`),wg()(),jc(6417,`td`,24)(6418,`em`)(6419,`strong`),iO(6420,`(opcional)`),wg()(),jc(6421,`p`),iO(6422,`Texto exibido quando não existem itens para serem exibidos na tabela.`),wg()()(),jc(6423,`tr`,16)(6424,`td`,17)(6425,`div`,25)(6426,`span`,26),iO(6427,` modalTitle`),nu(6428,`br`),wg()()(),jc(6429,`td`,21)(6430,`code`,27),iO(6431,`string`),wg()(),jc(6432,`td`,24)(6433,`em`)(6434,`strong`),iO(6435,`(opcional)`),wg()(),jc(6436,`p`),iO(6437,`Texto exibido no título da modal.`),wg()()(),jc(6438,`tr`,16)(6439,`td`,17)(6440,`div`,25)(6441,`span`,26),iO(6442,` search`),nu(6443,`br`),wg()()(),jc(6444,`td`,21)(6445,`code`,27),iO(6446,`string`),wg()(),jc(6447,`td`,24)(6448,`em`)(6449,`strong`),iO(6450,`(opcional)`),wg()(),jc(6451,`p`),iO(6452,`Texto usado no leitor de tela para acessibilidade. Aplica-se ao ícone de pesquisa.`),wg()()()(),jc(6453,`h4`,43)(6454,`code`,5),iO(6455,`PoLookupResponseApi`),wg()(),jc(6456,`div`,2)(6457,`p`),iO(6458,`Interface que representa a estrutura de resposta de uma coleção de itens. `),wg()(),jc(6459,`h4`,12),iO(6460,`Propriedades`),wg(),jc(6461,`table`,13)(6462,`tr`,14)(6463,`th`,15),iO(6464,`Nome`),wg(),jc(6465,`th`,15),iO(6466,`Tipo`),wg(),jc(6467,`th`,15),iO(6468,`Descrição`),wg()(),jc(6469,`tr`,16)(6470,`td`,17)(6471,`div`,25)(6472,`span`,26),iO(6473,` hasNext`),nu(6474,`br`),wg()()(),jc(6475,`td`,21)(6476,`code`,29),iO(6477,`boolean`),wg()(),jc(6478,`td`,24)(6479,`p`),iO(6480,`Indica se existe uma próxima página com mais registros para aquela coleção de itens.`),wg()()(),jc(6481,`tr`,16)(6482,`td`,17)(6483,`div`,25)(6484,`span`,26),iO(6485,` items`),nu(6486,`br`),wg()()(),jc(6487,`td`,21)(6488,`code`,85),iO(6489,`Array<object>`),wg()(),jc(6490,`td`,24)(6491,`p`),iO(6492,`Lista de itens retornados.`),wg()()()(),jc(6493,`h3`),iO(6494,`Enums`),wg(),jc(6495,`h4`,4)(6496,`code`,5),iO(6497,`PoTableColumnSpacing`),wg()(),jc(6498,`div`,2)(6499,`p`),iO(6500,`Tipos de espaçamento interno (padding) das células (`),jc(6501,`strong`),iO(6502,`p-spacing`),wg(),iO(6503,`) do po-table.`),wg()(),jc(6504,`h4`,12),iO(6505,`Propriedades`),wg(),jc(6506,`table`,13)(6507,`tr`,14)(6508,`th`,15),iO(6509,`Nome`),wg(),jc(6510,`th`,15),iO(6511,`Descrição`),wg()(),jc(6512,`tr`,16)(6513,`td`,17)(6514,`div`,25)(6515,`span`,26),iO(6516,` ExtraSmall`),nu(6517,`br`),wg()()(),jc(6518,`td`,24)(6519,`p`),iO(6520,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),wg()()(),jc(6521,`tr`,16)(6522,`td`,17)(6523,`div`,25)(6524,`span`,26),iO(6525,` Small`),nu(6526,`br`),wg()()(),jc(6527,`td`,24)(6528,`p`),iO(6529,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),wg()()(),jc(6530,`tr`,16)(6531,`td`,17)(6532,`div`,25)(6533,`span`,26),iO(6534,` Medium`),nu(6535,`br`),wg()()(),jc(6536,`td`,24)(6537,`p`),iO(6538,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),wg()()(),jc(6539,`tr`,16)(6540,`td`,17)(6541,`div`,25)(6542,`span`,26),iO(6543,` Large`),nu(6544,`br`),wg()()(),jc(6545,`td`,24)(6546,`p`),iO(6547,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Mt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:13,vars:4,consts:[[`p-title`,`Lookup`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt$1(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-lookup-doc`),wg(),jc(4,`po-tab`,3),mt$1(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-lookup-basic-view`)(6,`sample-po-lookup-labs-view`)(7,`sample-po-lookup-hero-view`)(8,`sample-po-lookup-hero-reactive-form-view`)(9,`sample-po-lookup-advanced-filter-view`)(10,`sample-po-lookup-sw-films-view`)(11,`sample-po-lookup-multiple-view`)(12,`sample-po-lookup-mask-view`),wg()()()),l&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,je,Ie,ze,Ne,Re,Ue,Je,Ke,Xe],encapsulation:2,changeDetection:1})}return a})()}];var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Mt),C1]})}return a})();var bi=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Ze]})}return a})();export{bi as DocPoLookupModule};